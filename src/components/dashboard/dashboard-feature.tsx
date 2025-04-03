/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "5BdVmLpEFwrXnRC2cfjSZhXptDcPAxovVrzb2X4kuSQDWGbMaGKpujoZq7FBNKv2oX7MFXXWiEqKtU6tw272Ck8d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qa2ALE2eDeBgad9eQCjEmvAHxWgKduKnVftEoiXC9Z8r9Zhx5Vw7E3iW2Hqe5FsiShMG8amoBFKXRAHLGey4K6M",
  "key1": "43GMkdXFH4QeLoxzKP49vZ7pYujybfo3uegW5W74RLnmPf27zDXgxz8M84K7ZydK2ygsPgmGhhm9RErx7Hfwvy2p",
  "key2": "3SoL9jxPuiJKhPKUaMyxpcvuiSGx8jB5dwjth5P4nwAPER5oW3x5yP3oojx3vKXYLFtW368oXV5b3f7wLVbh5QH4",
  "key3": "NRGrRUQape29Z3Jq5zvYwj5AnzFGRg6NQ59r1KP7MiLrHGCQzARsug6Tqmbo9c3S5yeaTjZ7sN8oN2vq6ruDNqX",
  "key4": "4g8bYY4tSDYrJrCktC4dj6avFkid3dTHAEKSKnfXyHwRAqG3XBmWSF7f82tHRjvjKwAbDswiXbt2292cnGxh2BLz",
  "key5": "yx7MLgDA77eATK6y9Zg2qwt6sapLrhsKnHQB1y6HYVHbgrn73LMahxJK11fKhJzCSd7S34JntxMZxkQfG7YkXxw",
  "key6": "3gGGfevkn2LSNucbPL4BEp92qU57mBG4FpSMgwhnDoQgM4fdwgjC9iRFC3fG8hzpwZRLhyq2aQmgYDsQX4bRcupp",
  "key7": "2icRXJhS5J4YnPN6zRVdvNNTuBeFKkn4TCF5DojK4kCFmHFwdiKGje6SGKd4P2ciThX1ArM32uaCfXotqVAN9XzC",
  "key8": "2KfgqX15A9JUk9iPtReTtRZEqnhoti5eVPoATsccBtzzDnrwVcf8wTnU7s8BUNS6sxEEcfqbf73eQgPPWNEvGu6L",
  "key9": "4JEF68NJkg8WYTA21ikRMW4vfZGLVskogJUF6mcgqsW98eNpHfdZKrZPmSbNmuGRbo6MrPwijwCPNbd3iGUwYWtv",
  "key10": "5VD91smbx94B7mJpDyvjRAFfmmXne6PZr5YhPgo9H8CqVtWo85xXY5GwgDi9MgiQ3XBKv31XArdrR1SDGZdEwgeo",
  "key11": "2dxrtDm5qJ7obs7BnSGdtAbo1EixYVM8ybDDNtZ3wdELaz6BK6CMo5kXzAjtoiv1k9ov8mjEmcaR6mMqZCXhxjzd",
  "key12": "3yF18VjQNM9mVsQXcJfDJ4NwKMzpamJtkMecZXwYFYPpGvpJC9pJQFLNRdNgBpBTPi1ZuwkVjyH8LzWtqsWsXaAq",
  "key13": "5sJZkwCFbaiPW7FVj6yt7QZzo2rKHWwRYk2kaUB7WCUgnaHHgCwKq35P5gFGjww28JWQs3nZpAiUADBdyS3ReZnL",
  "key14": "RkHGqaBbm1K38ozSdNoUHBYJ8TYjFjE1npJuHJRvNoQgoppeKU3p4yGcrwv77QSzW7nm4xRPbzHqspo8TDADaxq",
  "key15": "3MWzgEhRRBPPKZCwtpsTu1QpaWZfTcz4U7xGAKzX2DbrSVFRRG3dCoU72GJsYXJBPdB2voHU97ML6XRhG2LYcLae",
  "key16": "Q5rAc3Esb2g8NCXyQrpZC2C2RYUiLnrfBDMpxQoKVKRscCmKWxEgKRunFgA7DdCP2S9hssWExLLmf36ASjGPXau",
  "key17": "5knT2DYcwdNo8Jwcz5NRX1sEdUgBKTdTTBdrZon33Pm1mH4NLPne8uo6bgPKWRbYvT6E6rcnCpKc2CPAJCXhkdUH",
  "key18": "6gwE6btRN5y7XJ4xfmnwR4rnYPWuoGWRQgEi8GvfvAkiRr6gyEadndRJompwN1eLHUQHcBh55Px9zfwCnaKrwvH",
  "key19": "3Kbzrt5dmRqz3CiGvBckgdLkZ1S9ngVcC7MvM527VSufRXun6K9hQVksfZLLTEdLFyyFsPpNX1DxyRUkSzauDndc",
  "key20": "22YyjbWZrtgyZypk12mL4SPhZspL4H5iRjv5PwR5avRuNKGNb3Ana2WB2ed5gA14Uq5poJFZPJbTjhjb5zHrg5gB",
  "key21": "2roB9vMMEFZ2yjmaCCJCyDHfnHwRWnRk1QhFGyiXqNza6rNEYsTvVZA2DqdQMmJTPrwVZcaYGTCj2rXaYh5oYKd",
  "key22": "4Sq4UW7trCVNQtcYK1ndefk1WE1QGobaCRGwT8ohwtnsDqKceg8MWWxyUpWDW93hux3MyBF81fGZTdyDFG1rNkHL",
  "key23": "5AoKpQGEcspg2AJNY7QpByjuMTLJwnMzVmb41zZjDApQFFbW6KqvtwKjUb72Qpn5M6VzSGZKXb237o3pGU4mJWAy",
  "key24": "2rzPLw5KwH4dK2DydDCaKSPy2yRwoJymWEmRdFmm323g4RBeqixF6sGze6JtLvennw3nYPvdDFpG5fqdJmJEnwfB",
  "key25": "2qdMuCRmpTDKutRLBdfAeLzePCwRjNgd4W15D3NN8qAWdVTPpifJ33Wn2ZoDbAiyQty8eGQusWmJ9um2UYS8X9RR",
  "key26": "5qgXcVi1DopevcLCQtAb4ugRPsZUKHZg6d1G2xhAJ4RDQt7VM6xno89R9SmZApX1rs2SGkP7pefqFRKM2mfoz6BX",
  "key27": "5N82SRLASrD4X9V3uCCka57zwvKiGzhYXmCJVXaU1SRzsxNhBP4H32dxJzVvSuGZiZsNsCiqMD5CtA4HsZvw5Ev5",
  "key28": "4rShgVibUQv6PFRpEpw8vQx3AGFbbCCmdYAXLADqL3KEDkGbCk3xmtdwUeyHmhxC1v8jFMyNQdtNRCnKMNcEpbi9",
  "key29": "4kU4V9j6LaYcxuztjroScymjB4mykFRgzM6DmH9bnseWAjUiNbrW889h2YH6YuvTKFe1F61k2VYyzKNbh2yVs8b",
  "key30": "3xPdenRJijUKftJETaUpaGCtvbsgdygFU65BiMBKPdSsgqHssSWc7GpKnkN7Hx1WtRZoGFseQdmM3eQDVgPLKxJW",
  "key31": "5tRiXz1ex1eTTXHH7i5r2xaZ8NYPjCGVjMhMhoo4rvqzfwWaTPhmuM7cqZQCCdPcxSv2StMYw8Z1Nqk5ydUGZ3f4",
  "key32": "5uVPuN3hc19pwfLEuoPgSxhv9By3SsBjUvcYGcnzdTBpzEo4hTepwiXWHkog4F6DnyaVSW3D5oE6uoBrob2guJA8",
  "key33": "3HHGzMe2P3PFHCxH5zs9pmwSZoT8KJ7YZwbv914V2YjLahqYYdxYsJQkEG4VqDP3w73uFDVe2GGcoPZGHW2HLGJi",
  "key34": "2MtrZC9674izSHLTcWxRWT6yTahZpAC6b3Y6bEXJGcAAJkNfRseAFyTTQ3CejyQwghsbbMpVBGV9AayUMYyRmtNj",
  "key35": "2ccDhx6T1Bb6FBok7kv3GL7Cm4tJhYwbmDhSMDew9RTqim4cTwh49freHtkGhHJngLtwiABvnvxmM8zzDAJD8zsK",
  "key36": "2CzW33N7tBtWxCqhP8sJx2ugGjYUxUFiandBjHGjw7LrbUL1WWZfb9fwVEmKazZuzoiiisZnyrEuuXfgbFVgdugQ",
  "key37": "5sVmU28onNDEszdVEHf55HGENjUp5Hy4tTLNc3req8oSq6eiQkaYspEwA9VZDBH1vq3MFQFii8FjfoTpwGB9SEBC",
  "key38": "g6gbLqkdQqwxmDue8o37P4YPRSPM1hHKKbEuGFVL2NXhrz2TEwMRmUa5ruiUuYazgNGiCF8kHRLcbWs4dA8zavb",
  "key39": "F3kTCogyTg8S4PEgaGWPqbnhAYHXYxjaUi1aNECvBZKBpmw4NEchQKDeiwB423r6fKMyBEJwESEj2qH4fyPNTNL",
  "key40": "33tbVAyxPnqf292tU7prj3VMmm5dd7iy83RtEmPRVWyaNWKDLcHCwix6UmW6szYv2bShDV2DM9i3aKnrNXZestj7",
  "key41": "553V8J8EB6mCi1ugLCvsxWQ1shR4jm2qCC9cCjUS75HjHXzk67capfYV31x5pNNiWM4E7W7XESvUN7YEgrMy6A1Z",
  "key42": "3TZ7Z5aK2Ro9z9zN4zDzxVj6QhQ82VbPJvY9TTYB11k2APiFRPk85AoypBGH9QbctYotqzDjuvcBbvkMpxouTbSz",
  "key43": "4uUErPnGLL6ZYDCw5VbdAQVHvEu4kfdALxRUDex6VAg32bcPXU63btBdaUFDjn7QKVBiio6aygNEsH27YSXqZV4u",
  "key44": "5NobF9Utf6HG85P5ZBR6DPoTJ73FmXwzYSYgipS5aCsRgV63hihzaVg3oy9Byqu4kaqx2ZjXVrd1TBJtaq7mDTob",
  "key45": "3oKfKxbWBoub7E6zrK8Ak9hYBF3BZZS3HiZ6GoNdEiH61y3AT9HqEN6x2Wa3gfKzLBT7rerhX8gW4XnUKQ9XeCKD"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
