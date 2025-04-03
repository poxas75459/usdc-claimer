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
    "4SscUhKz6MfFuTenJx7bEaPrTH3bo92atsc7pgkBSsNkXXnBie3Dd6mXbnT1ZtMZfuV6wvXJuVKJptx1SudzGtZB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YS2UjWCJCNWox7SQ7xuiVyMPeN3GrXfJkhRVCjJssmFASDytniG1V9M4swMuT5UvvqoVZRVzf3648Mv52towjqU",
  "key1": "3AXxNYz7ZoBcP9WK8kAMEbDwNdXDdxc3qnPf7AczuGktgK2QpA9mWVNEsZEAw5F4j7Jo7LDkiTsGAN14fMQCr2ZD",
  "key2": "tigDxeCkQvip2mgfiHVXXKnBbD2LzhnAWLnP9o5GNRgBnx5yMeFtVTTPfLEAJbANacUT7i2qYLevFs1Tp13fGUr",
  "key3": "JYnk9S6haZAFdbmbESJ4JoSm5SER9twCtmCzKSHaj8Bq73DqE7hCSprVCQpzUxYoSweS9vTyJcgzeXomWNrcr1f",
  "key4": "5YwzLK28EBD8AdNUCwZ5GWNpHLyQQtEJQ5vYELmcEGpuNhrnJ4yenFGysScXRCZVLRyBWSSHCWtzMPdKqN2ghwVd",
  "key5": "KUxfyFDY9Kn78aBnsw1PKDfgSrYSuikBrzWhEsgRYVWDgZN3KzUBcNjduzyPmbeFCSeENevw49yk2pMP2gmahXn",
  "key6": "2kjvLwXscmH1YAV4Jxt2NBpLnZsjswiaiY9yJ3GDfErNFtdsVvfvhfKAYaCbJKRfzX1ZzguwiikcF8qxCdtBZ5hp",
  "key7": "5DNh4Bfvv3UDHp2NU2ddzxKMumqyuyVgY6KHi4YyT79o8vYuZSnSgsgjBdMWQGEMXJR9kpvwLU38UDWTjWviw3ZK",
  "key8": "575RKCL1BxbevgNdGK33efJ5LpK5xhJQLpuGeLeyJtcZUYGReWpfswFi5tq2kf2rH23fzAPNgjThjDKxAfe72Sxe",
  "key9": "NcMANr7taj2k1HGatEapzgYgnsfbSuUnJLkDxy6sVufAVoNGN9Djkh5YN1WhqSJD8sXmvDVWnduYSEePWt8C6eG",
  "key10": "3fcTtqPEZu3rRk2K5LoCQBnafVX3Q8Q1YfJHtYojH8CvZTYPyqgKraqM3BrSFqFXDonoe8mCETxNcXZhvCV3jKhz",
  "key11": "QnUEd2DHHbAPuDV3CszFsaTZ7L3G1ALE9ZMSJ766Ycs12LaQXSg65xmNDcJHmZikiY6f8fUDUxAyB1wzGMy75hX",
  "key12": "5YygtUnxEpij8uS3pM9SsLJLh1MzfNnVw2HtsqVJWxgYgTX4yKQzQ9o3WrgwDMfUXdKQ3df4tFZcuPcCChvx6JxE",
  "key13": "3k1JVZzQYfowWNgdK3rZYiktAE26PrVNEQdgBfGVaD4cyXd87AhERaWTnHoVesSBhKWDJv89kmM45U8J4uBZibaU",
  "key14": "2ypEi2AcdLgwFUWEeArdLWU7x2QrcdT6ATVXUAVJzE3xAJyCf9kSe4ozWqWEK14tsaffvbDX2M68Lrn2XjLQpac1",
  "key15": "2qRby4Wkz8DyXY36u6jbSnyL1SEPo9aEq9JdacAKqrEZY2h9Q4esoHTfJydNThTZ4CvaH8vSuWJSmmvcWcgqGsWT",
  "key16": "3MMVbAXshyeRqTuP2XNvPw6HhuJQtiwfC8z6eZduKFacMoQG64KGHYUq8XzKWw1f9QhW6At36a3fmKRoD8BHRpeU",
  "key17": "5hp2aR9gDsiRXv9Q4YCuc28uwgmfsHVubfgfYTtkXbdz1zaQQcrWFmQyZz1z63nmqx7CrCpjEem4y27PEEJi3fCY",
  "key18": "srbDBeUCaByeGqvq97rBtaW7J9Qr1CokGPTk6Kip5WtTDpEtTAsgRxgAY1wXCpxUoaaNWow5LzJmmsqXrcpGne9",
  "key19": "4UPYmBs5KrKUPYzuoxeTiW8X3YCuGXYpTirS6px3oemHSSpfNmQs7otfFQdK56V6fYPKZsQNhr9yQHA9TVVf5Zzf",
  "key20": "2Sx7vBbsdTMrYesYgX3VBwUfF8aaKs64gRNL84vrVz5zz8nqEDvqLLVUhBkFvJ2R4Dr46aZv2YvLj2oJ1i8yccPp",
  "key21": "4QfhfCQMZYjw8nymrBsR4kZMvC5PsNs7QkUuPPjP584MJq97roLA4fFz2KvghCD8UE6ipZiWuU6benktjJm8yk8o",
  "key22": "7mc6tb9jVe25bWZZeLyNsDDKmPEui7oR6TbpsuXtCgMe6FsvT6qwz93BdiQkoSM6bEdeedgSANrNWzzLyV3y1YQ",
  "key23": "5NWQsnBBh37CeV5nshjCErzYQ83owUbwJrBeu3XynRN9a18ZF7CyyW5SfCpPH4w2T2PPTBApVrFfEZso4YfWKzDF",
  "key24": "5zQY8Xs9RfuK3Czeaob15c8A5PFK2uFeKgCznAwNy3G4gKBRixmt9dEMrjVaLEfm4dyRmCHJjfABtrPFdEkChso3",
  "key25": "56bnJYjXubLH1Nwnsjmy1LsNWaN8vJwv1HNYW17zcWNqRu47wit7HSuVNS9c26fVr45Nzqd8yXwiwBu6ggfSRpPj",
  "key26": "3MogJguUkpTKR8RJFDrYqvbUCoBfjxEtzZGew67wGUjeKXk8dWwLD7scPZjYw9BWTYTfDYocN89QUgoNMpioj4hH",
  "key27": "3H5o2M1i1853LsGjquogiRjPVJi5wFi8dS4B3upRz4oavxBVtdnB2CJnb2eheWdhVy1BpD25CnBvGn5S98NBAQPU",
  "key28": "633mzQVPsW8TycUpvrwaPugAtoSKZpYv6cGCb5X6Cz116Bdr4dKaEBVYSSnwLCtyEMz1wkiHVp3CooBbNnohzAw5",
  "key29": "5Lvna7YrWbC1Zq8ZZtcE6Zt43BamaY8n2oAEUZQNh9GbigshrAYdqNWfYzK9puZUQ73nsAXFRPyBCbZ1gDquBpE7",
  "key30": "5YRJfXa4Sqo6KUzTiPSCN7wy6Sr9Jt52L3aVaCxqKRrk4R2naMhUmDgmFej7RodjmYjMUwGL5hD2bZDVY2TMKyhj",
  "key31": "4T13vdTVKge6XFKtpCAqE8qmdGjoxuG9Vx6Bo38LLDq1SASpqvdBpVYJwg4vXUwKueusHJZXkSz6KASzHf8yzCUZ",
  "key32": "4J1okjigrtfAZcfjwJwEzhVHJJt3ziLdHC88HicAfSWZULJuSEzK2NcZBjwLWyJKuuRhsSEwsgGw172manNW6L4w",
  "key33": "xB3rDHK3hN1ECkoipDXrNsQPy435UdPpew6cPgLzJ7YsBmaxGj8vXSrjHNDpxzhzQLasJ7WSk7WtZ1ExXo4oSx8",
  "key34": "4SZx9Jdmmqk5MYc36iitNcYDLy6fAdqFq9PV19aA27xc9VKp7EfV5uy6yh8Ge9mYfTgHzLCENjQDXYSC6RH1cRT8",
  "key35": "3QJDqYuNp8BKxmTJcP2L7CVktyKanMDrT9jLUgkZi3vj8Z7jbCtneziHbpy33ZK3xqEYfCJCyux9LWVDkyfD8jVT",
  "key36": "36yAasWYFF4EKZVvLcdVAgTuaDAk6SAJCiR9p9SLVEr6FxhwsphiUxzb5if3nJotJhPQmvPQPDBKoA6nbi6NGSj1",
  "key37": "3cpUoaJLrAjHAXfHAMva87KghvczNhztevpNvCGkDfVdGDY8Jro8bxPJF47hACV5Awx5jSSusyxQKnmrWQKP6mEx",
  "key38": "5mLLzipE4gVoChE1a5Jp2n5gSohpYmBVBfBBYGFSL6Vuw1No8kSfphvRMSEGqgHA2Vr1zvEUnrkdnQS3G6zdZmSd",
  "key39": "3G9SEp8bQyzDfNRnqRGAAkViMp6SGeJm6fsPKcV3SGwcvVtnLNEjyQ8UmqUgx74yh17SYEv12tgEAfqnqbH3Hsxo",
  "key40": "5CeUXbxHDM2DrRiEfFZCZfzLXSqiQkYyM1jPMVM9psoyuVGjtgJdasaHGbDhAUoRYjQyH5ASp2xYE4f445JJpjce",
  "key41": "42NRxHby8H6yW25RusQ5VDKrPCgH5qUSWdxVVZAffaNMQfys292XFpGiJqZdiJJiywPF9tuEEXh9zzbKvmYWUe1j",
  "key42": "41cDjLY9S8qq1qoAMLWsTwoR8vA66mvLRNw8MiAFDH81gGg8LkdCokVdnt1Gx7WXawehSTboR7nhTmGP4RgwjuWP",
  "key43": "4qSn9Rm2BFVsQZKByJvvpPxCAyMDzMPLxHHdUpLn2zMZRCqibm4GgwzePvGrhnrmgE5nV6KabUJ9JDkWaiSvZLZ7",
  "key44": "2LpnuNAZGVNRZbaVFUCmrwPWb4SGBJZduKKEAEvsf1F5soSFLZvgLbQR1G8qJazdmLCnZyJfyYLfmTYMQKNVwCHr"
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
