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
    "m1udEBfCPG7Lmkijfqge5b4vRSSr6BkYZZYztdyQv8om4vg8ksQys2wsmSk47Ug3Xy2BxVV39PaVzkSmPz6c1Xc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cJ3LgMzBmakLNST8vYoduCKe86MMX6y743SsyqZgGcrZdKEp8Q1nPSyY7r4VTVRQzMC7AthCjTGPM8xCuMe2Qwc",
  "key1": "2i2JjoXhkfEVggURFY3Eg2eWRPy9pRPzJFi9s8Sf8hjefJeMFwy96hDndE9hzs72cFAAFCi4QjyDuv1gYeUtk4Qe",
  "key2": "2A4qA4u4Vxp7Z3exR8XTQWZHsA1iXiM2odiMZTeqHXjcuZzSdpu31DvwCWCjzkNn5Lo4GB6cr2wJE2k5SMKN4p4s",
  "key3": "2WbUEepQKNhoqzc6C1tYbVQxUiG6xL1pkcq8auE1PUSipEFYRgDTv1mJpm4qtX3Gk3kYBEtJw6EHMDPj2tPThgHg",
  "key4": "2iSQwbMfCubdH9xGAv4k5CbzqJpnwJf5Qo5WUugYiTENqRSty3TS4AibqUVuQH22C6qw725yhmFbMFJ6VPVLYXZ4",
  "key5": "3Z8RszFksZ1XebdFWT4r5b99YNwBwa54qmQWgdj8w7TFRG1YPQcmdgyV1VRao2xdkb12yxDvcUY42Nn2SSgJ6S2j",
  "key6": "2rUGCFQzPTwYSMnsianRepZkj1nn8QEYoZAqs5xp12xsouMWzwoRuwKHMroxXswD3QUw7RH3m2dRwZ6h6sBb84g9",
  "key7": "3CtR7RXu4NkEFz8zC9m8uBCe3kATGsZux77MSJmtuhn2kpqj3RY6DCJyNCjcozFUqgq7cSHQChNT56NnAyG2ox6y",
  "key8": "4qiEhtDGFGYhFXCrqHXEma2Tv1CPhrfiQqf1aDp88Z5TKhqXQxkdhuJTKadQMjZsBtkj6Fh4xntgeRASEjGoNZvw",
  "key9": "4SBgXH9RyRrochrrQDza23eDHY3Sx8mH3YuAbXyNKJqiFrrXrF5EM398Q9SzmH2FKWggVp4mUp2PNw9F8vi2rNjT",
  "key10": "mTyrfnDLfaEJAX9WZArWuaMiQEkkpB1hfySh3AXkxErNTQRHS9wdeyqoZEkkHaWrFDd8L2XM7jZu4zbWrEVZNz8",
  "key11": "5YPkoQ2wjEad2Sk5Pcmesf4y4ba6DUEsP5VsH1P5qBkW8pmSt3SxPWefa56HWFvJGij2WeTE5hJNbk2HqehLJwN8",
  "key12": "4DEsJqXM87UMDKF819rskfYazCrs9QgzDesiDmf3VQQNun8HTEB9P3nDf1mJG6YhoMwYWGkGfhn8Qaoa2eqvaxw1",
  "key13": "2i46jGxT2MciUiP53BvkR337A1SRug7L4jq6yJCS6VT3AvDCDEC4kinTZpEqgJrxtKuvmWiSPAfbhxYdH5SDCtNz",
  "key14": "36moCp8fbBaXQggbut4wsui5khsGpH7TVF81E85G1Y8yyhfWsJ6kPuXohqtjDQD9JULSaftcgfzFckEiErsn21UU",
  "key15": "3vE5K5wuYJuMsukMFFVfGq87Rmz984fRFC6M4SfxXWrBroD2TeFdeDjzMbFJfs1HsZywzv5HBSTppVZ4W6kiWSJP",
  "key16": "M85mcU9NQJCB4AjELDHC5EDtAQoYFv5pBckcV7V5QZUdTeFYMKsg3gVdkAcCwoGmWZ8zWSL2WJNmLSokbPvy6mk",
  "key17": "3YW52Fqa7Lj9wuFh5MMvsCJ3eoT5fUNTyo9JJCwcbyDrY4PuBLhvWKHuyRdKC3rePAQoBq4KZukCRkrNrwxySjFf",
  "key18": "idrStxRkTnyjixKZ35aCbnkCvYJ2WZBUSq9X2KUBkcUthcBZWE91UQ2ayJCL4TyKPxJejQvAMbVWgAM69QDFEbm",
  "key19": "j7vXxapTwtyFUVwvRaThy4rYJNViJKMRdsbLre6du3M4vwa5tFnVGJAB7MFMVv9vGuGMPTjw2eMTNqeC99SiaN5",
  "key20": "5aWfyMHLfzuXXfcFTUS4644gUDZuFjJuWqZY8ko5Rs2vHPB1XTeiM8qeEFLwgksww8UEgmnfFPqARR8sCfMZqSrT",
  "key21": "31X6D13NLXLb3s3tSMB6oPkr5TvkAMuLvbYuddj8hMsd55Ewqp3AdZHHohug8L3ecPPqAnmyuXnr5nQZB33j6xXZ",
  "key22": "PyJPQRsHnoZvjhaVB7pHacdr3uDVgjDv4m1jtvqgpwmc4vkz7hrPMKAkdxJ27Rt65d53ELgcZfkmkMmeAxx8DG7",
  "key23": "kLJvcNieZVwg2xFjntHNBvGj9QMwxREF7wiikdqUjgTe7nHkw3xwcvQobuBxjUjRkN1kijYFxyqQp4DMfuYtHpt",
  "key24": "51aZwCN3TXsUZinuFfpPsRLg3XzGKNBeH1pS3osA1QDnEYHhgo4WxJqxCnum6Cdet7rvFzpivDKrQB6fq9WoaLTb",
  "key25": "qKgS8eCf4kzy5Yie9RJDJf7c5JZ7SBa6JV8uDHfSAXwR48aYq7CQEjv4odb19drgbL9MfdP6Me7fx1a8feQzcDn",
  "key26": "3xJ6kJHY8QJvnPLPtHQz1y5QfFoizHwSt5XHyMLSvMqxajZ4niyep1RUwiMvJb87t8wUZMdKUFHXhJQbDHQ7rxG",
  "key27": "5LqewvVzC1iEDsKZtBJ1vxAXAmomqXwfNZkciA9CGmaqJF1VQLhCfQNVUVCMJu6QCwtJybdTo88EvcjxKRVMP9pY",
  "key28": "2nv42keFH3QCAYnEZQCxTDUeaJhtd6gLXL2RQ6p9kyy6wxwFNHwdZk2h1w7cMkwSCycgp5cUCC1N2WzeyxnroBjH",
  "key29": "2HYv7TbfZwrrwKhpL4s1epe2vKhX9vh6PeCHTSW5yxe5YgadMuqzjkqQ3UK5yq9K9bVnTK9no3rvD3UB3UWgjs3z",
  "key30": "3s6KZYtahoMRim4Pv3DbTMVQZGifeD5TnvPCps6HZRcxzRvENfUoV4BYMtY6GCjnPf31BR8uXBd32PyFWzRjLXS4",
  "key31": "3JhHR8e6ggUgqnVtoNdB9xpBb1uyGq94E1xEgYx3yNnJmpGZ7od4J3gQwHeYVbfPCuVd9dWMsk5iNFPgSVXTCPVN",
  "key32": "2W4ovTXSTxqHaXkak1vYP4CUGkFMSxHxRRCEecBGpLTnr41gUgnTRTUT3wNtCSaJYGj5L4GS8Jzv6pgtfBgN6wKu",
  "key33": "2RerVBsp7gRwYSAyMoQqz4ovap8Zwjgj3qTvAvEYcwJskAXcwbUUWQLhYnoCozgnt4bkTysc171LAHkSKnJTn2cd",
  "key34": "5y7eaVsMyWHPyxkDD7JD9RgipW5HTG1cTrujrqpyKTdBnq6zF78YmAsooRCSRTpU6LfvPgpHcjBDKJaizFtTEfmk",
  "key35": "3REcjRnXyfSnXowe9Y69rfFXMcMmU4Cbq2unCY9PxJogsxtjJEtmbSAXM98Bs5asP24eiMfqAi5hL4yVaq3R6vhi",
  "key36": "2JUM21SLU28HYsX2DSK63bWks9zKFrLNoTXKrFJPRaW7ZBkrWKgy9ST8Ji3t99J7c6ohQjxT7AZy21eUm43mBNKY",
  "key37": "5zLEh6mu5i1vCskbuCxUWGzLpu9kMWt4wZME35fm2gYz3nDuPBjjd66tSvo7CXqznDXP6cDbcamjXiaLMUDjvfEE",
  "key38": "22cdSypcVxjZiA8YDPS6bZknkoRZ8hVL4xAskCzPEPxd1f1YvUFuYg6B7uAWCbXszTnAJ8XY2gtbNa38VE5QH2C3",
  "key39": "5KW4prKUFkDXPBYu6zwVnfJRwnCVZeZ6uJscH5nPoCXjKuwsgME4qUbJJkTQE24BPLcKnqgns8fZaWAW2corsqGg",
  "key40": "52id6Z26EX4sVT921t7KcaYEMAuNGzGe5jmsiTNSMEzP9izpDQesuPcafiw9Uu5gAsQsMd3qKKajU5abnezbNDS7",
  "key41": "3xwYZP8mnL1How42QhRnMPhcxyD6CdTpkvpeu1At15GBvHajgw3fcpUiZEzCdUHi6GaGKAnHireBTS9t2nsvV2ts",
  "key42": "2bfSwVvaH5fSdkuSVFGKd8um34gmxx5WNibyNNvPYJYUdVLBv5sot95mdi8VZoJ9uMiGRfztdgqSeNkQ1aSXtBW6",
  "key43": "5ESRjf1uYNswtUENT56Tvkneg85sm6hLCSoNdXmieB1mnhfqnYk6LmbVE4YZZSd6AMBsuvU1pLbiNHEoPUPF5DJb",
  "key44": "2QavHtYeoKAnLnYVvWbPgDfMWyTX813vLQuTrWURzJVk6ojzX9yed1S7maMdPCP7hjLC2ih7yeZFytHwHkdfurM1",
  "key45": "3QzNXxz4kDtdzun35Mi5qdaQ88kyStLeyQdeKuUqijimBZoSQH3N9kFqdfkRbXfqvYGHZ3nQXXa84tsBNgaQk65X",
  "key46": "51PtN4DRfpaXdLVzNYXJQuicX9rxiDmobzSNLKJ5W8yHJu5fCbLg7AEgAAE6jhSEESpZeyMHHrPZqNhnGtftRWjY",
  "key47": "3XT3ge2bdzuie76J2gWVXyDrWDcyrVLVLKX65htJWphs31NrY9r3RNrHUwFCfBCsbmMps7Cqa85nayhGpPqigEmJ",
  "key48": "4v6joTLZn88QAVnGLD3Hbo1PWULE4PyXe3pPCgvPGxsLbp3WtEadjZ2Qyia5xXt8f3RFmTkGU65zJx4cBPdKTnD2"
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
