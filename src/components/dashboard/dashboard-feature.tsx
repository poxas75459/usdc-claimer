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
    "22AscM76HGD7crhSMRJKAH3iy1sRWRd5LN1YHM7nwDLprp3aaatEXVTcAnvJTjvSxC4wgt5pkpgMbm74fpPaLgzA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HR8ZEkFwQwTSBsjw9ZB7vDYPph8vTDM4BgMrPa2c4FxabmQtJN5TZDvXZnJvtB8jUm9mRtJkVcJmA2Y6FkWnwuk",
  "key1": "4K3mFpytexYUmv25hRSfrFD1pShYBFv9kPCWjfYa7jxAGzkAuAPuJhfqUpDg8xkmwavDYuXREq2gghdw1tN8bVCP",
  "key2": "2ztKZ48SS1WVHzkjXyR7zJw3qQd3AHazx6ghAY4gCk5uMx2Vw6Dhur4iPz897xyroppqdEq1FCwVfZ8PWJn73LKP",
  "key3": "3FNE9hmkRQQK6gnbr96NBrGxhJuZWWmbjFEJpBBKnTwP4tRHB8dZZNKzbS14szpoPQ9AykJj3uHoHkNAs1aqRq6a",
  "key4": "238T5NY8Pis5e88hBon7y6UxP1aA4RFemV8kiKx4QDrYftgLKjMiXULMDr1bArDvzPMDt6wZDDU2FyFLWTKAy4JH",
  "key5": "4DiMsYwUWg4CCYqSdXGNJeEVX3Z2hWoUDkLT3CtD4RM2FjGTp4vB64DxrmznpTmqqLjNd2kVJaUeArQqMotAELLb",
  "key6": "Zv58d7wLWnGEfA6mR91v9d6ErLXLkeJ6so3Z1u5pdWNLngiK3W26QLqpjxewDzJRu6hrmG92hvvxp5NoCMjCGJH",
  "key7": "5Jmb7Z5bFCt9TkMy8FDKxSqgw2e48MGfhxHCXRg6L6QAkCk3vHJWkennfUS87fHVvBimysxyj7MBU992xhsyQuyT",
  "key8": "5MjRyBhZd2ARgSgAbf6L2fazUKtVrcZwb8kSKokxrNafwCbZVSYtS8PSfsanQb6Ndja58EacmCSao5KYG3QkjLpw",
  "key9": "5z3vVduDjno4TwqsvD3bePghPhAEbCzi7ViaqPx9VYemGvVDUz4TjCwuyAHtjYZZo65h8JvbBrKqfMNLq5YJE7zN",
  "key10": "9Tsv8HGUbX1fnoeLWPjyy2STEWShXDGkwHh98kyFdhXx1jAMwKQj5bMouqLeQ7CgXt73d6oiasK8VrG2v4qbzBh",
  "key11": "wYD1TtUZH7zsb1Q96WGLUX4bfh2ZqBxDAfuvTzcx2MygNZ7iZzuwUbpzXfBhJKMwFYZUJFJxWyqrraGbVKEqAFC",
  "key12": "2eaYnVfmx3gxRcY9byMEMyYRCX2ggm2Yui2BM5NbNTktRyRehqvKQS5uPiu15isJJYBJdSJFZDRLAS7Cc6gXFmHW",
  "key13": "2JtkRCTumTsdyyhpjsNACMmmN3nxochugmJaLP6RbH925Nrjg3JJ8iht1JX2UF13JcgKHhrEQ11qAAUTpb4yfiYb",
  "key14": "YtyyiyuEAv9LaCSdsmgSRQYzVxJAaJdMYwWsFRpcMz5Aosz4V8aC8yJcHeifLaKsPrusBhM1FGEH2PcVt13g1WZ",
  "key15": "3ochE93ewH7idKh3h6T3LVqb8QiWKJBevxKkBbXCw2cwwm8wsUirKrABJ3K38SpP9P6Xshb9xmZTP35VC4J2tGhu",
  "key16": "2XdECAR8enudD9esQB9GrqzVTJc4j8G1nNSdrB8XJD9Cas47xuYrNerzKGTySQs4tDy1E1XBsJFmcq35QcSA4Q4P",
  "key17": "55j75J7uqTp1iTqeXX2mJ8mkLjbTCkC1wfjKYXKwjXKdSTDaQXqf8DiwfqUVQa7qYGTdJbMWo1ESAvn8gPs4K3Fu",
  "key18": "761ZJzMfcTF67JvAHgktpLMcCMCF3Vb74Q1N9AqfD3aVXrVdXAztmKW7QxqEnoVii61iXRcou1hxy5jA8EHWy48",
  "key19": "4gzZ8EC73qm5x9n4Fappr1dzqhFXZ1mXP9CwybnrXQpX9irStRAuNhYQPS6EMN4DcSpJtAUL8nqkNoJi53mrAMyd",
  "key20": "mzkrcBGbidyGiH2LfXRpXfxXxGY5ywyaADPjqAtrYSd4qMSaMSs9gjgbFoavuAefQJ26fFXfzKKctWhkYmNpyiN",
  "key21": "A3wgZYruXKtVjdfGnUfuoAXCT3Uzp7dFob7T7PpNPVbqUQAuz9ULft8KVJAAWbkjohrJvvhdpdfLBjZWskB3jdg",
  "key22": "2aoabrgVviPiVgtDY3rXCT9AYEquQc2ayqWaCZpymLdY5yr8RCrEKv3hHisYxZWLJrQYwbQENBUjaWF7bGK4rtgA",
  "key23": "3wCn7XLZAFaqmf6kZxRjtMvFVo39PMJ66h2Rh5NSJjkuZfb48umfiKbjNdCPiW1Pj86H4VBQQgzXy7sR1CPjF8qa",
  "key24": "3uTTLcjCySyEwy9uTfpoChEEWpNMLuwdbA36Ct6hcshN98EEyU7tsMbCQPgkqzgGTJM2nndML9SsZUHzNjaRP1zN",
  "key25": "2ipN9oXDAYBzQ15D9rE5rpAzWYztUycJBwJrRoQ3BvjEyHKD3PyCSmennHdHtS9UY8rFfyhmAGZGBtv76vrypmQQ",
  "key26": "3o8yAViC6qJHEX49HARA4gid6VN9NYimk5QMRqgcmRDfB6vdEdGssqxJHGqTfeLPm4HV6fWAtm2CLc7LuuDMLWxq",
  "key27": "3E46xTDkEWoFzNjYTbXQayp8KcjqngH7mhtaZcfxvx61Gvz17YLAGiWA5dsxzaRF3NSUQfSd2PJR3wVeLAgsCi1J",
  "key28": "3XEy3kEoZbZ5eXdfukxKVaiBkEJnBfqUZrMcCPteavyUaovJ4TZabQMcjH1LSXtnM1EMMfaKX6sMka31Xp2iZj4p",
  "key29": "2Dg3v2dQrhc4eReGYrhA1imNq8pDPM6og9LkkHknj9ryhjhDpDjHJn1kzUJrbjLPwUwf6LdyBdAHvPBU2T3nQqxA",
  "key30": "2PV2qP4pBiZr74XMPjP6CWMGqTLAmQnry1u7EFDaVqcVK9bo9vQW9ywconrzGspWm7PXt8DyCaykZy5pvFLSr2Nt",
  "key31": "5HS5yKQZasA8qxmen9Ja5y8XXaKVtmvmiTgebRSvMqthMAZjH2vgWP7PGRoFTawgNMRmEhEENPS7dRa2wr9BLwRG",
  "key32": "kVSFzRtHrTSaP9UKQcBaQPX82HswQkqXNoTwPxY9TfvkhuQzs8NCXwrdAHwHva8krtHe3s5pkvtPctr61KA3H1Z",
  "key33": "4P8UvzGfsDLmyboDG5318arwovYjEFiXsLPirAViCxfTrL1fNgpLAx9Ev9BnUkNFZrh4UsfoR7XV3cwQgSqoGjrP",
  "key34": "qKAaTRi5hABCWYi3qhTQYhwt8JTQ99gnxgueiFaxb5NvvZtcUxJVcApjHPGsMxUzvDDax3JGuKBotF9CpS7gDTZ",
  "key35": "4FkZff387PW5h9rxdFwJBrk6evb2WeoWC1HswsaqezpWPKa3oAGiBQacqLcASCfyRz6nUimfzu1EaZsqfuWj3rEE",
  "key36": "3qtuVBHUgS8ETT9RWJ26TxxmV39iMfsiSvwFknJTqw1Gqad1UAghsepTsZjHNNLAXTt27JiYRAycqHJang538hif",
  "key37": "23DCSABVgGqC65hGdPAgkYhbHdM4M1yQdnUpk4KV8oKpZ1t9nmRshvxmo9FvD8ecYVA6UWUdjjRrdgzp65L4YSJ9",
  "key38": "32gJNUmBDtYCSh31cMi1F2RL3MzRCoR6Qx6SfqxHdNYxDdTdcoaRvgbvajZfBGpHrkChWjm5KfmMQZgVCCP9yA5w",
  "key39": "5fYFn4sXTa6cHSQGW4He9yKrAPvRdX2DuKRsgrcfDbcjVX9P2o5hD2uGbeHYbFjRK7Ag5qEWxqV7gxhgu3M83uiz",
  "key40": "2dBana4Ubeyw5GngxtnWUs9R5iTktCH5kXmyXteQkw52CFjY86PFyspeccrwFLYbWwNyzkK6TdcCKzzEN2aXUcUD"
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
