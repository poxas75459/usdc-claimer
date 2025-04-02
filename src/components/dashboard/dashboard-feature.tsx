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
    "4DCvDro12sRfL6rm7uKNPncK9W8E3BiQ7CZrz8WFpBjMrJpnMbszyiXyvJ9HXyVbwCGbPneUTUTmre5RCeLdpMeD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zb4NrJKaLo7WB4XreePQ9CQoJGcYA3fuEeg175xnwngw2p9ACaFtDhDPZ8VgxkzScR7QhkQBqEcennTJAdqPKdm",
  "key1": "5F8PJpyPirbmSKp7fNAsHbbpPtDi9xsjhXC3yuKQ5Fonn5mxFVKe88WGQXEra9Jip4ZsK74wdMhTntWdokWj2PDS",
  "key2": "4JEm1Ea3RVpbM8eWa2TEK8bvn3Sn1rDbokYaRJFMFQ1tyoBmYuQKwXckr89vxTwCR1gJ9QzPkQysnUG9rPApud3N",
  "key3": "DbBpsWSW2PhwWshMiAiYL2kELNtwySki5K6BjPriZmNtpoJ1wEdSNE7kPhz4qAaPcxkoP72E9WSSFeJATXfmF7o",
  "key4": "3w4iX3eqS65am1VFpZhFNtP66mguLWj9B9nwQtV9C5k8UCgTn2iEfZvWCC4ijWk2dTEsjxzozrwptTS8S1ag5PrZ",
  "key5": "ZYT61FjZdws9BxXwuKgyuJ6XTsLa3k89heW1FMhqrk76VSnUtJCU4Ljc7ZsTzrNEDczqpKwvoRhxNb14vrEB9PJ",
  "key6": "4GCbn3nkR6SdQAaXbJaQgAL8nfyxDgTiqEvtxQcA697S1LujM2QpmDP6EdkLWRERWRdTEH29L2PDb5PTdrffWf3g",
  "key7": "B5JX5taRa2WvenTkqqqx8nEt1nXkBDJua8so6KVfcUWmZqLRpmcZWXKYaTrwU7hTsdBzBwfjvxrwp544mkACtrH",
  "key8": "3ejzzwmaxyvfHpPYJcXm8bESTrfBfSYGoGRf2V61oxHdchs5UJMzAgGfh5qhW5ekigW9UHf7uxdJD6v1M6HsvAy1",
  "key9": "2Q4gX7bQH8eRsBXkqRqUiQG7raxrPMte4dLnxiWdsryC9FqMvvzGw91dhkYyzJtSEcnFF2uuryF1pt5JrWJVCBU6",
  "key10": "2YL7qE4RCsiVk771xU1WjfNxy5USAH236T9c2sJZF9qhTBECnhDgVSecj3JCaq4u3BSdTR1pQg2tgUPvf2m4GXse",
  "key11": "8npm294bUDWz5qg9xC22fWwTgy1yZ1dmrvJmS2t9jRAd9aJCpwdqECMorHPyshvQKr63qhRmk6nWKGSGKJVmiog",
  "key12": "KSQy4ueNh8MNXxbUrucUBk7rZbGXSyyn6dxorjD2wjwv7dNKdJirEyUcQpKNXbuiuWTwyrFhnwfJLC4mpcUDZKh",
  "key13": "2EGocmjU3YEgqjuFUPgbnX8YDw8LLeyeYcjWJPL8sjuQpqJJ6FvkKyoghWrAr2XUUAoD6FG2Y9XxYToAP4LvWgJW",
  "key14": "4AZBY4cnTDMjDJUF82M35L5s4CadzLUjNRzCGdF8d8sS657DAiSpyxJP41m5HJ8ahaE849AWPVhNfHB7qm6EHSQ",
  "key15": "3xQvSYRQefKKxQcKPQzUZPmV1HQMopdMocfpjUyfE1Zjn1oRbXzCpHQruN3NBNFfs84HSXqSfzmQSzhbA9Cvb885",
  "key16": "JB87F6NHdWmVp1ePEgvB5UzGeeykgwJv9rHKstNJ9sF3rv19stSrTzjW1zW96ct37AHokUTMRFpHBxsSgMWX7hb",
  "key17": "2vLiXn8uyLCDcYuePvSc84km8qJm7s63QdatBJt8gaxLMgBsodFmwbHyNHxtDNJb9X5JB2Q1kJAzwZMrm3QKZZER",
  "key18": "2dDYed6RqGhjAnCNd2cGSHbWn4QszxiZHKXhiAve691x2AEMwG98Td7pmDPyu4PeL7viZUG63Gbwd6UQDYCUAjGz",
  "key19": "Lud7JXaNvww86KqNcc7pKPtKgJ8BzXL93CKG8AXPRFDcYjTzko91Eo5yj8KktbaST8MqGcD4XanzP5TcfwPVnMs",
  "key20": "231sHWVasTM7ZrGr3AYScn6JfeM8rmjkSk5okQarxtYmSuJNLQkPYtEs86AhWskpVp8KZsjSt6pqCCTNS2oD6peE",
  "key21": "2X9YHtoCfKjLFfQpe94TewdWSaxJgz2yPxGKfYB6k6b1Rt2MnuiSZq9973qkTJp2hGGx5YZMAsrgq2EppEGwLoFq",
  "key22": "5a7j3ZbVoANN6EWLn83dBGDpbDoRxoMvq8VVVmqmdEMgzWAKLryFUuXmN3TLPutQrmoXPD9m94ugDVqVgQDGQ2au",
  "key23": "2oo3JBH43EJW43sVSXu5j8V8LYonHyKrbMSuCUXX4uvPFWCi2BgN78yE4jCUFPbLzuzsEoUXyRSdFg649GmQRrsH",
  "key24": "6DPiMmAaiP82qhwtLprrXiuMCUyhFUkPCHHcW7YUNMCWX1f8Rtvh6v2i3LSwAGjYVxFbazgEeaXd8ACYZ392AY1",
  "key25": "nrQE59JAng4FavNgRnykXe243DwUfMJbBqfgEZGaGE3n87Fn9EgaB6GVkaiNQ2Kq9bxkS97wsm2ujcEqtn29aV8",
  "key26": "2VGTs29dMaM7CuzeCGZ7XTftQRn7pb78TBsFhZBqBDyn4BFesyuv8WAMuGfFo7sCviGKRNVsLTR2RmuLHMHb9KDh",
  "key27": "4bmMEWQBk5ej9MJh44dw9RvNEcTCB2zHGRhDDcMtkq2cKvqsBGt7Uh2eJd6U9U5qGGDiUBdpbfYd4neh8EGVLrvx",
  "key28": "VN4vBEc8zPxKKB685tmM89bUrrBY3p4kcYGN21b2GncJiDfYjRP8PWKQhpF67i9sSp2vvUFth9HC1QhGpZ3fpA3",
  "key29": "3zibbd9FY5t2LdzCHHK5Xyfk9Tk4o8QYPAsnXVM4keUx1srEzSVvUWcWNMjHQpwC7mMp3S54baKMRroXpVycJ2TD",
  "key30": "2Uhx76ofhp7D2PTQS8hccEW5DXhNqDMKBmiv2cm1NM5souC2R5HbGqpLq7YsXruZK9z5RBd19ss5tjkdbHNLzGg9",
  "key31": "5pZzepreGdrPhuEN4xUxToLVdm9iWUm8XL9GLcq9wiRK2wjXhc8k9m6FwZFyL5QR66kqDY4Lwvzmwgv6oC9MisB7",
  "key32": "3zC1TdnPWUarUWE81VDLpWrRPQcvn4TgDJ6HFWRHF1JDKeuASnrjVcT379LKJ1UuCCnZZdANc7zCsAZurc4tprF7",
  "key33": "sugz5XAUH2PttM4fnUdJmMmeRfxoVCSWsGXMofZ1RqiT3m6voWNrXs9TJDX9uv3vSexHj4YQhvnJF92DG3LZLUM",
  "key34": "3W6i9Ktia8cQPQhnynV17LFTBuiWRz4CHQSbVTt6WQ38w9vAPwTN938xzEsgEjhkFmnqit6JxwWzBvi6TA9T6xsu",
  "key35": "Ki4WraukVvmkFBgfp25ByEZRZZf73DwazYdvoNz3pusVL2yAmQm64BxtegLAASDG5x8txoNQdxoAAakF1FAYvyq",
  "key36": "4tXAoRLFiK5Cnp4PQfPLzaJe5QQs8Vjy6Y1FWQfw8cmAzVbbYpTeBsqxeH9Rx7v1oDBwvm5fRrzWq7Uz6BUPuCuv",
  "key37": "3CSqKSH3BPXd1d9bArg5vL9dddvbxHkjiSrd1cyFHWFZqXk9W7VxhribE1RXMHMt7JwkpgK2tycnmjCpwxaia9ve",
  "key38": "BFfz3LFApcWeCzBBbFU2FjMGpMSaN3qMz7HjhBmJtFgfmYLJDCUaNDo4PJnvyoGcXnuX37M6UFFBmS69E56RG4j"
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
