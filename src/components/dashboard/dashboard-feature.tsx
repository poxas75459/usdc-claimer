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
    "2ZcbqxQnC48x2aoyFCvG9VttWKWM1fqiFr5xVd9eYqxFBxpj9QfTXzqS6ATn2eYz9tPt7apq8gUdyaRP1n7zoEUb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CchqNqQbJj9arjQcbdwpD3GwKgsdoTt4tgTU2hodxWahDPK5DijnuMcWLZndoRNJLK7MpTGTevE6VuoMJFAUrt1",
  "key1": "24kvPQkLSoTwKHZFWSeYXjgNDuhiXiLyFYEbuarYCM8ezj5KQJbnevJVb75xtPmhecQUwdrgqLL6UYGUdRMJK5ah",
  "key2": "5Z9kz3S53zoaSudP3ZKHxXtwT2CqvS4eDsq8vGakAHavefRiMGr3eYoYaYCPDv9G1sxRfb4tjKRSYEV2QV6n5tiA",
  "key3": "3kEqRnZnsWRBQWFYvaHzGAVRyoFoPXYadGP2UmA9YVUN6dw71ypkq6EFcQESVvwyDBjxqEjvmKDwKaFg6VNJ4nLX",
  "key4": "3YAcES8m69u9Y8fp68aAVxgcfaF2gjp4DckUEzNpnVfxn2aDrS13DccxemaWEQ8b11E1WSY8oZrGdhSLfVdZjnvN",
  "key5": "5Vir1Z1K37YUP8JWTB7iryiaXCocwxNCFK1vut65LUsKRE6k7KDPPyvdqYb7UaxPfX5aMBYVnev3fcKrFuevzsx8",
  "key6": "5o2N7TNRTRRG4qFJSWp2uL1yULdP2PmdtXVfNVW9icL16tFboUv1GCeJbDMX6PTkm8eHBcMqaPaeiLiob4C3VDk7",
  "key7": "2B97PSy6X94sY7sBa8rJbzNtQrJwGqhyUzieQGyT5CHk3qaCh19LHDizkXtWsuHcXgr1GCUNccjSRFgjkvSXt4eF",
  "key8": "5WP4wDEcXrLQmZvutXsnKFvhFEeBHKyUknGitaSsffqejwngLLqvnxr21C8fjSYMpeWbiABDGtagXfgkNH5pF89Q",
  "key9": "2ydkSWyEfPoqC5bGPQWyJCtks1AKcMrMbX2sPDBGUdomky7DvLA8omANf4DdYitZNmTTYMmFyQ59MNNJF4LXVoZk",
  "key10": "5KUsvg1e4z1gXNs2kVhk5nABxVAJUs9F9NhVKjNyPFRrDCrqXZssHuyZmnNz5nESSUtMxes98UiXn46vs11VYnvM",
  "key11": "53XRkNedLAko4iDnyAuWjiJWeBXD9iHRRhFKwXMmQWD2gQCCZQAPvNWDst1t88tjJUak2oNBFVsRB5bYboyRcWya",
  "key12": "4p4iqM9TVYKAUEJuzUoh3pgx9Y1XcWB7Lsck4UDrAqMQvYEgJgBcHTLiVte7DYAcjNs3DEQBML6Dorc21eKGDjNp",
  "key13": "2eVEc2RfxMqVhfHYQZKUuQ8sopzAYQL5jC3GkrbsVBSKFJVhvXgSpcpYQ9dkUUEWjCBvUH55uRprBzySVvTL5Lcf",
  "key14": "a9P2cS3kBKUiAjzvF2DBYZMNoVU8fGtrAZFHR4okVfu2VM4vSqcgMthgr93jd32omEh6EmWPL5VMnCPiKmLw64S",
  "key15": "qA7LLdPr8CCtHZYnaU47oFjv1zsfnvwiZXp16YTy3yhzqbJjtHhtNAGUZRQYHHL71ucae641XDWZpdB8ZTi84cF",
  "key16": "5nebDFtL7JSsNf4N3CwXdMJ5MWk5LNTBZMeQofDsnr3yw52jpVZonLrpeenWF1sH8TMi5SY7Ly13qq7dyHx6CoGu",
  "key17": "5x46Dj8FpWj3AJzUBB4f1awUakwgCu992nrfpj5aYRyxWrT9A6pfRtqckYgrBNEbcBhG8sscRum3iZAS18fmPHcZ",
  "key18": "5x374pWJSySf3PrymdZmUBw1f6dafNr5TsoEVbhfTKkaNuiKvSxk5MnBt7sjgPWhi6J3n4PtNXXGrTidKDVQURNa",
  "key19": "4jL1CqXBgnf4FtWr8hg3TvCqn1twSpWivXpa9vhGgmRNQ6C8YTdRLz8uSmqFUh4Z7upBXEaFLwTbDorpopVYDpL8",
  "key20": "4ytLU7MZpwKDaFuvqUUtPVZf5JpTvnAKwBB95Kj25C6nGX6FrpFhigRbWimvq6xhwRgY57mEYxfDGrUP7SqjVRUh",
  "key21": "5C6ufbWXrHQSNaxMtyJqKCT6bFWC4nWMRavMW1W7jmQ2KK8Lc5z2ETFDqW648TeBv9X3AeeUYMNwwdYsVLWuTkiL",
  "key22": "2eeJgigdMZ6uFtXL82iNnwahfgtFLw4LUctU2hrgUz3b7XRWYsN2fnnkoJ6Bd6jAQbvJe563P1vWJ92iwP8q867E",
  "key23": "3crXd9yh7NH3Jzswkija6jQd7Bk5kD9eZfQzsoCTZ5DUPrEPKpJhYHhBbqodFHAoJuQ76K6PywUs2WmfD9yCLfsp",
  "key24": "2vY9bVoBPUjSLg5R2NDxeEpx9aVoTzfBayoxUytdg1f6yeESkgsXM5pD1GPKPP4eR7huc3MuaVrMfsXA7q9HXLh5",
  "key25": "2BeAPF4jpywmSJ7DdZp2kyzuELdBbbpVPd1tejJokZE3CtUwz4XUCT2kGRniPTiXxKsNtsjNyuGAJTwfVbFhcKVA",
  "key26": "4f7pzJ3NNYcST1BFbyojWKh4pTcq6w9HcuF8uaaqEa85k9yz5awZ5xzwHvDdpb4wWnyfoA8UpNbBTfbA275gzAA5",
  "key27": "3TM5ykF9aKYW8RPfUedBuXTzY5SuyRrLZcmNZh1KAHH8UsxyKJp46vioMz5b5WpiUKs2wj1LN5AHcfggWvu9tScS",
  "key28": "3m8LrdA5Dt6k9jrbeYd4E8LcihgXVmLZw6WiMKGBccMxRxcLDz3EWKaFAuACvdRwVBwmeyWNX5eUa6BY6NtjFrLn",
  "key29": "3akyLErVpfdqAb7zYijrudFGzqSPr75ofixD7C3XX5LefnP3vBwY8ktJfUe2VqhhPVWxj5BiRMAygNDLfVjDW7wX",
  "key30": "2qc48awt816eJPaKoNHXNNFNE7FcAzyw622fJHNcJV9gD28PvbLuDLnoNcvRMwKQtJt2vVroH9pVzK5JFBWu4VST",
  "key31": "39Q73tVx9XDyYa7qADnQGkCxqntyZ8zukcEhCLf9nYQzew8oUFi2aWcPwSF7JVNHE1uskSD1kiBuK2h73Zg1rJX9",
  "key32": "4CkCDjuh338aAsZBKCx22sJST54xLGGQ4F4LcLHxbRdsYvFaBbtRSASsDjJStfRcdu71tR13dqtz4QpbCneDWPfp",
  "key33": "3QvA9N2hEv5o4oCA6yYyN4qcqTikJVxz1ASNjUzBCxT6dxPbUGpj8X1woxZawquSLXKsroYtTxekxhhhDw7gC3xc",
  "key34": "5dtMsXmQqdjYpjfERfhbbADTMDFGAqmV7XiQUFMS1YK3sxJfD5LqwmqQ1KJN6frtiE62Hk11n1VLJyPRCD5aZkwr",
  "key35": "xWuPCAWxebcJ6AxbRSx3etSfD84KoKo1nz7MsN1oWGhLWNYK98mcw7XiidHkm6Z5fjFpMLQxPAoJoDA3FTqUdLJ",
  "key36": "3k42cMqH3vzkP9JQSV9s2cZ1xxDGMiEm2YzazDMkjoDeTUQttefs64iNS7A69pY4cNHadTGQMnASD3hg7oSc6D6n",
  "key37": "NAFjxbtmk1C5u2TRmW3CjuHPJTGVM6wUyLRFU4Ga1TmzuCgSJk24XXaBXwUrs8iAgjfooeCDm5t44yuVxjK2RhS",
  "key38": "5HX2NKkYFrAmGPmCtexXaCcsf2B6U6hMM1aNX6Hv543Y2PxCnFyU35tPrMJJXU21dBEAMmipZbk26hvdVHjwb4rt",
  "key39": "WUXWzwzUJHDEGjKqe8GU8xHNRK6twfJKWZEGk7WTrFL3Jv5VxG5oQXh3dtUTKCokthCYFmiqTXZgtDDmmHjFrQS",
  "key40": "5poHPqUNDSqhYEnhwMVQgZTJ9em1JtXRc6yZ2jYVThgAMDPVNfmKxKPCJ8XrjGSHxzvKPwQq2GyESaAaHnt6RnFE",
  "key41": "2EYBpu2ejE1rpzFqkV7d2CcMdnx6gfm1sD5k4wAgLSW4gA7wnKupTxn92KAQfyWS6ZPcENpnpH4YiCkepcr6QjYZ",
  "key42": "2JELFwn61gVHx1TfuSS1QUAuSYc5f4zFFRYpfnYk9GKWe12V7gTmPc2htc7XLkFeZp1qaDXQmiyfwSWwfH2148NB",
  "key43": "4UXLaGRHBLSQUraavv82LqoenK9BqYQGdKCLThiBe8cWZQtLQMXDNT5NPEvvzhCSo7jzNG7nNm48aE51bULwCeLu",
  "key44": "3Cx65sbS9GNrnoqHNZoWYUgDCyMyq3ZG2ohhCYCEazW6MqThku3JrJEJMRRjMsXLzFnWqvg2NzXB5UqVXnMf8SNG",
  "key45": "5JYVjUHFi38r2NX1inpcr6RSJyfaSZBwPn4m9vjxfjsGX7FQp2XoJW3hQPB6R8JiPgBJtQL4eZoNXqG3HkdWXE7c",
  "key46": "2hQsc8APfHHW58taeP4HmKjKMc5H8x5VJTyJwrzJVy5b8Pm3G74YGe7AjXU5mZFHLxTd3X92hiCF2JKnXijnkgvE",
  "key47": "43hkDMERSRUR2dn2t9j4WtwjojQVgbdBBBNoTyaPywQLkFqgVNsbzyxxR1ScbhdbPudctYLG9APpvHQMq3d3gUK1"
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
