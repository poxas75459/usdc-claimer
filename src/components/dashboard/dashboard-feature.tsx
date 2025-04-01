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
    "2wTMR8pBJcAd8CjCTCW9rRcUVeH6e3v9THXNqcszD4PAVkjmDY6c5HPENhN3ZJ6Kw9eXri4YrVBcaPMeqd5tUsVz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "G1J4312gfQfL7x69a1Mfy3BnLfmBfZDQjuJycjnE21Ws2HJqAiAf72mkq6XVXXuq23CXAjm2G2gAZ2wpvV2QPzm",
  "key1": "3ifnBzYz2G1iKUbbyUTeRT2LvKdc9UMea8w2ziG2CHCPgmHwg2w1EJmYPYdNuGSA9wezApMneQVQ7RqHBPhibJs3",
  "key2": "kPQuqF8aqojnVn8kW4w9KiU1FpFrcRLeA9PVHvW6sDr3xAqSUec2N6AnqM5RQyz2Y5A3WNzaT1YyEBdCv7rGEJG",
  "key3": "4BAeE6wYfF9jkcj4LXwubfcwX8KdcEL49qST3fsSFh28eFZJApgFic2LyNuhxN7kqJqdVaYx7ZGr3mDEP16sp61q",
  "key4": "2CPkdzHmKUmt6Ndg6LLDhPPHPsLRdooNzbYBQL5bJz2riGXjr2trWxVj6XVcf2fKDejHQh3mNiuG3aTTBsYRqsef",
  "key5": "5Zt7txc2CaaNvCJWECww9wd6iMhHbhUPfUoRT4UYVdFrs8CGGSKdYSpPWUGWr3bNoqS7QqPs7y7dQMhQBLNmBT2P",
  "key6": "9wZfn69mKnBqgXhGw4xBV6Cz7jsGGdfnmjo3qeWpxNJSfTnW5SdwU9mawATZefmSkkGtFX5eCTxth7Vd4cCi7UP",
  "key7": "FmABKVPCBe2T9uuNATRJw63h9G3hJ3ePYDReYuNQ45dTQjwgazQKbkdFdupKt3rXDFtDJVaaPdGYKzvaQjhkJU2",
  "key8": "4hFZ9jkyj25rieh67441C8Kwh9D7KdT5ooUqBKsduazt7cYLRGyCPX3TzeRuQczjjXHBH8DEuLBET1Tqm8Xc2WVz",
  "key9": "4uKYhmr46PaxvjDR3ie8BTZBmBXaJPyGQtskBG86kSCNRSLF7RDgsEj4SN7tWPbyfK6jPrqGYA5LaPRMEhhZsogD",
  "key10": "2XjmHJhwqgPPN5utsobKiNFBf2p7W1kLbiEZmFr4K3AwLHfC1PAQPUUnj12Ar6FGGkLADzfWpndPe5VPvWotQN7m",
  "key11": "63KtWmDLUWHmUX2UB4jzwcdJjV76rxtXZCFu8qgUPQxJAzneKvVLEv9a6UndaJyJ6aHTZD4a2MoCsohGP3qa2nUg",
  "key12": "4GrKWhvHnFa1LDV9Yi2MrngtsKWwZpux1sqNzbLTTJdbCCywpGnFK8MkVDxgJEGFqsLHsb3CTXBEbr5jCh8f95nK",
  "key13": "3EvnRHGmRpgPX7WSP5VqfbZJBs6Q2GwACi8fA64YRDfwsKwFa14bU8ETE6X1cRxU1Yv2GDHuCASWwiSzzhp9Ugqi",
  "key14": "4vDmn3X8L5CxH9KbB4e7URv8jKn8B7pu4hAkxufQg37xs7MMaqFu3tiaBhpLnYQ1EjQdGQGbnFVLxK65LV2QqnBb",
  "key15": "5fdLyw9FHn53PkyaVqpey5mMyuZ7Yxr5SipG79xX7LsxLoVEkkd2xjKkn4Jj5Jh1Kbtz3Jcz4R7kHzh8bF2zjRTs",
  "key16": "4RHGmMkzZ6sjGcLqcjRPE2QjTydEosK7wZYdKEvMc7x5cgNSTwg2C15fWsHWdz7au3LXdk1FAi6JfFH7tVhcAEWQ",
  "key17": "5g7isWyWZRmBEpHZ5vRVPj7kjK79e1Q2vbuX7Szfdh1X7qNjd5dPaGG1HpJVuMhAJoBnVrRTMi3kHii41LyhJQSF",
  "key18": "4ynWmxsDpFLnjGeAKCe5M2j3gK14iikFppjDvbo2TP5Zjx7bPW2akKHvusobBk3EymPRZw3XAFrJ5im8boPt37WT",
  "key19": "5KWrjv2JLNccLhs2Ks3gibsBty85gAEDTeCsGakosY9Tnaa2qNvn7PFEJhejRQQ8bcwuq7krR8AVFAkM4VPJQuMN",
  "key20": "4N1VaSenukC4Mfhr26NgVuU2UrCRh9Dw788L9vxZP2jdTRJ1p9s1jZ9cavubnMb9M5qBa4msyhFFNZ3kkfo3c2bq",
  "key21": "5PSdtxAFECQWLZDPan321P1QczDVzgp3SpJRLX7isTBumSTcdVzPWboQvtifoPt3w5qnCE2nX63R9bSo1o2Ew1Eo",
  "key22": "4mUdw7WXKxtMDXRWZvi5CWQTxVtVFEGULNt4vKhdfsuLic3jD8nMJqQFKVgT93thcwwfGozVeGHUHUaC1k4yGEmN",
  "key23": "5ByyAei8sSWDxhinAEFEAoJneJJPZz67JzdrrH7dTXmYBRfTTHcFuFwE6ugoFyAcZd1DR2kEp4S4zx3KD8AKp8zj",
  "key24": "473Zb4XLanDjXReqD3m3UKti1RX6KBBaXYAmV8qE8sW75fQi6BvvTHLKgv7bNJ4saLLntGYgq1PwKaEJVUyB6NQN",
  "key25": "3e7hofKKi2x5QDeiJhZyuWEjUzdVJocxkV5FVb4f4c3Yfqt5Ri4JquJGZAzE19hW1K5VaVWAV5a3bHro9pEoicKZ",
  "key26": "2TRWoFh4VPuXXR6yrcmTMeVGoAphsmfehKgj2uJrzo8NpoDgxKSL8aDmmMEcvbwgtcrngHPnZxdpWySvsPqhHAnG",
  "key27": "FaNHDvTzynELzoxVwBf5tATfN6cVjBLfRAuKKqPGNSyBGikK8fPk7JMrZQG7tsnCfb8bZeJobFs19VKucH8WAJb",
  "key28": "W13nXCn4s57wUUYMeS9kvwR8k3J3ouVtVDMTXeGfexpUc3yVRUuSN3ayLPKYpQieSQgE63A6dUpDtiacifDSwmX",
  "key29": "4Uk5svFTkdQw4QGijB9RXfWPSYadA1XXZecsh543z5KRxubgkV1KUdXqskiRg8V82tJkiHyHevB3bBLpNPhuRqi5",
  "key30": "4iKsmqSzd12gtq9zh3ghNb9j67jVKGtU7TJFWzFRgE2phu2XSJJ7VMaDjkjVg5jAmvRVKeWq2UHe1seZnY6Suesz",
  "key31": "5DdnwxTnGZY3Ebev88isCZfcgy3JzMEJxWMqFwWzvhUTXZugsfLqmp4i27R7fUparGjeoiZC6gKWSWrY9z8fwDzr",
  "key32": "3qf3Z8UF4CuSGEx7ChE3rCHL2h8YAKjCiVJvUwvdCNEpW7kKQJhhvHmQJha4wMhxfATZ1LLy6xcM5YSdnNPPUWSK",
  "key33": "2KGdxcwkrtGBLnJGWGzT663yLf1ofuJP8vEFcqRPkaE77uejriBknVeqjhtLW4P9rZJoE6rdzo3J4Hy7crgDvXAM",
  "key34": "5SbZx4gBbQMXjiXLs8zXsanASef5fT5p33G2sPCTwzeSzPnaVWMScrPoWqrZMsABmFVArYfVSwXJ2qxNN96aZ1hM",
  "key35": "3j46EKWKCCP1WFqNHTpG5SHe3ZhE1hpnpU8pUPywCZBLG9Jgj6mh55CkCo3tmu5K9AbNqGdMz8bfaFVtm2q9RwSU",
  "key36": "sZUfEm9YUuCmZvTYrYCRq5TVzKmzU4kCzNnmNn5LbxzX5vDHkdTx8Q8bgLj731AoZvcnywm9XWYGzWMLP14M5Cg",
  "key37": "28XUuj9gAUMd4CUUsLXZ39tENq6up3UPuiQQhV9HAfPLUBMLouZefmSSETHazBiHUaqHbPfXqLnYxnF1d2W14nm5",
  "key38": "3oy5GLGe1RNrDL4daRJUXZDcy8EbCjtBJVXP6BvgU78VpMpEG9VNwFvGrykm1RMeHTCN89VgB2nCsSapkcTEaDFw",
  "key39": "4ofJoNzNfpZCmqPyYfJYBrheKpReEHxULc8FwYpN6g3UQLK3CnWYzqpQkLvWhAyuLukBvppCdSZ1cswWQ7UqJut8",
  "key40": "2fa4rtCMjxGH5jVQKbqavhZvea5iqxVXZVcFYVMNDiL3XkkifQ8yXyQnfV2CPreMJdWyFt3oTwWvKN7jaEm3LvAM",
  "key41": "3o2qzgPUwHeBvefUFUJgn8K9BCB75L9jdgrpYqP6HYM8o4uSg2s7VtjMqEhqr16WQJWxx4HwJ5N7ZRQdvbwrR9K5",
  "key42": "2SeXUpppEdCgJwf7qFfNXBmCJQw6RU8KDd3WykZHPFa8wUgoSHJ8HV1yCTNA4kjEVDRaG4whR82fDrKUsLZh4Y9X",
  "key43": "61cYNFm8crbbVFr68QB7aLBtsRusU3r8dPJwHMmhc4b7Jt7SS5CN8BTZF9uyi5Uks34YDks3oU5iooZ1bTk76sSv",
  "key44": "414535gUtq3Gndwap8gWuQqcGFRXdY8CAQ6y9UoR46hTNsXWYgsRpydTMqJATCxnBYbc7XpxKcpBn3pk4psuV9AG",
  "key45": "2yKQEFKxHJbhGbmUoQUJohoXcRQpZMJnQAGn5FEYybF1dh7ELNsgVKRp2peZfmcjG8kbc85xM7v9WKFUu9qytiss",
  "key46": "36f4ufopHvBQz4ASZJ7D9kh1mXRp58ALZYmSn1Z7sQheHeChadrbqUDqqZxiPfAbjFg1ZZevkbsczKaiKMTsXXsq",
  "key47": "Rp6ALUzFdwVgYyitQp97qtqvR4nh9VFrZ82TdLrZhbpDx9VYYnNuMwXaof8jNBfy9d7aiSzrzVDLd9KWsKPd5Tg",
  "key48": "2MQEDqVAhyvb5Mx47Ku1uzSG1MDyRDS1Gw5ptiTL8Ff2nWs746r2yRyj9C6Z1mybEJmUFxSo5zuo7c8VFbyXSnFG",
  "key49": "2BDP1yYqudhL8Cw7McTSR3VCeeQJEGPXEQzyFqmtPz8wbwXnf99R5rDuT3nMB1VaXBqgLonLmM2fHVMAZyHMGx4r"
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
