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
    "47mLMfDvwxwaQ2rBMhSrfsdQiHQqP7PYd8fWoDqk4QdfVUaWaVHvAfmdFswaAkrSB7bvRD3jqjs93NwEC62ATMXC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5k7D3gu9R2Cz5dYCDyV6gMyUieYdpJZ6VmBZ14ncytqi5cbVRFWjRSnFuD4Cw55LgNkxUCpskBPr3D1TeXaw4Ne6",
  "key1": "5TPR3b2JQm8ecB6Hz9yAhghkEubMy89i4gQQiLus3J5mESHz4ragNfiKwi9uZjhwgvqD2HZYneJWVyKzr4a1o4Pw",
  "key2": "2xSHxiWYSy7ThUPzbqGH4p5RQjzvJ1rm2EkkeBiv2t552up3Lt4wsRYXvKJZE3F9eSN8UGenDqrP5NfXGyGg9Dxx",
  "key3": "jXTURvrHoGk6TJwXNKaLumJiCztqJEFaY5A6sACv1zNySsVm47sKATxvzQMqvbe8gceS6tvr7kbwVkyMQNfGjWN",
  "key4": "3p2pfUhFgbXeR5sCoKkim6ehAMvekhqp8MC211qMJ9RdAxoDdCX6ZeuL7hjtEL4XxX5rTsqxZQ9VbWKm5QhkK5xu",
  "key5": "2fzk3rB1BBsWwvrLtQ2UDCJG7cBA52n7BPCARqonoEa4A3DRcNsJ6NsbR3iBTey2ayBtXXA2W8qW2ZKu4ThqzfVT",
  "key6": "4AsL6nanoLz9dTWBTBG26nuyoTsHfofg4QiWUDg7XvgGeEBnRwombjWHsp61hZfAcWYoJruvECA8MPFubwoun9Tk",
  "key7": "5AquLmGK9tus5JbLcXtEk5nzn5GVi7WxBBzqjZeE8dvMT4NUYFAnTqCiZew6nLtFbdkSERFdeVQAiw213jyB3Mq8",
  "key8": "562ugsghVnizfYHCkWYXeo5VX8xyezb8XBxake3VUWxj29sVwLmc46DyYAAfnRrDx7h1BqvnwYKLfY8wx9W1pneP",
  "key9": "2AHMWmjcUVmKw3cVqYFG6TTVCUR4AgCzgXWkniiYLQH3gy57t99b7UYDosvTxDQ8ekVQsoC65KHo1KY6crX6Zkgt",
  "key10": "C8b5hJuWv9UzeMbqtc2yLQZqkfXs8c2crTbKtgxgSMTavZ6vCK5vKN6ajPPJ8zzsqhoNnvC5zfWdkDZZJQfCRL8",
  "key11": "4ArriiUi9a2CidS3dKdh27DLtJ9WKjGsAYEsaEcVNAbye6xr4g4UWBCBcXJmrkuuskFAA8t5oMMkrrsK1qMcxfmV",
  "key12": "EaBqnM51qnMZbswPVrm16kESgFAiRoUSWQD3yh9AUpqfVV98sZbpdX7yNMQ7UuWT9YGv3DqtrZ8TsguGrVmUSQe",
  "key13": "3m774PPv9A94drrmPPXRPLYQrGoRKGQ6tCDXx3P53vh142H3ncfFoiS8YwAXq9McUEjicr4xwMHrLW9uLb7FMKbE",
  "key14": "81LGiJDZFZY3GwCaGnFdb8az1peZkjcpkFxyXX6CSTrYksTjeXXkXGBCiGuvMQyqr5739YGeVLwp9C7NDBj2L2H",
  "key15": "5o6VF78UqPB6i3UfdGd8PHQECjs2PGEa8Zxuicmt4WJUHKgWUpXKUXJK8i5A1DJC4X4MNeT9ZZgpmDN3UC6yKWbR",
  "key16": "CmMnjtYTJV6J2Hc97Nc4KPKNUyHPUo8jyM94YU5SCDL7Vu31iGowAYMRjrzPzLHyRteHfDjXSsQqR5Snbyjg8of",
  "key17": "2K2qrPhga3jqZvNcGPsGByL1aea8YVjnTrWid2TebRRLN92m32BUrUomm9U3CKYLi6KjhkZjUen8ZgfgGbT85RU8",
  "key18": "ecEL864Rxj3XbJGANbigJxhCf4ZQfpAmkmg27JCtoLAxTWmj8TvZPYGREnoGk4ZFYB5wLeYhVZvAPnaF5rqqJbs",
  "key19": "5VWhiMRQMduhyWDNh52Xs1eVXPDGVNkooRfSxr1zpMmzaLmoYEwtEu3NENag98eVYRZKXuJsfEGcXxZBb1XcAobC",
  "key20": "W7CcodEaVNUGpDDLNPpWFrzEqTsTrwnS1MbT3pZVR3QsFvJUirNHprsHCqKM1idns6hxvTjYYGxvLFgW41qhPdv",
  "key21": "4oDyKuwAYdhJQTmAYZQ5D7egmttM1vazRQqLA3yL5XwNsjnCAFQRYoigJ3FDZppzT7Bc1BpwPDnace6wU66eHjiU",
  "key22": "xtHCJa2qtXK4126NtGWAJEHLn5hWQsSdjfYutKvHGoB9u7Ceb2h1GU7VTqfU5DLFYdyWCiPkdRc9SKBmeQgU242",
  "key23": "3u5ESgm4f9qBbcwM2GVW5qiUaY9Qg8Tu9L3mSfBtrZMKc6XadxaCkbcaUzGkd1xiV9jjxJJ64kmmz5N8KUo8o9Jx",
  "key24": "5gnKrq7C8YBNrCz2dcHMrUnjFTDPd613ej5hmLaHU2NSbtpncGSHxBt3bffu5FN7LKYQ81LKnTsoaPmiDP4Zd7Xj",
  "key25": "5GhBX9kqmgVwdKywNAdrLCM4no4ScAMtRsUWGxBTgLQZidUpE35zNodsQc7BggEXVy1DwBg491ERfcBRcQmEtHzN",
  "key26": "26C14SBzYdc9gWu2vhLmgMH5MTZmAheJhHRccneJa4xnx3bsRoRxVAuDR4b95B6HLsY6dJT3JhLM5MFmtqezu3j2",
  "key27": "5Rofpk9SctLeuvgDQ5gk9YBYt5gM3ay4HMvDQcBhs6XuBY1BXPoY2h7BgL2Jw8drpanD6934SriTPLMJ56JFaFu4",
  "key28": "ZpQZGBAJZgsyRFcXLgQRnKtTYhkWEBpqmW2BtPHLK5h7eEkcucJCUWumXYwsB9PyTKaeN8GPGikkQ96PcPyZTBB",
  "key29": "5ecwYjJn6AWZTtyzLSqhph5J6Nqe7DwVQ2SoCLqeTkKwdem8wfGNeKKuujis6tMPo5FnXqfWjRQq7FNFSZQYfenB",
  "key30": "4sZJEf892w43Bg4qoTrBiMajUqdmLnH7w66amSxG7PCCT8D5FGjNTUsBbh3F7Zys9M37ZJJiYAoPz59hj6YrKR1M",
  "key31": "Qpyvk1UgvjcM5iU4w9ZKiNdPgE8JN72CfUwWxPGWNKDXnVr5b67GGW79jiTm7b7hy3CpJ124va7Jx3LBNFWsiNK",
  "key32": "4YW9QWJYM3yieimo7zPvkFs6KZGqSc1YXT6a5iW6khuibAHxYDjgBp4qMKZyYinSAyLy9tfusczEYBFeK6Wj2rd8",
  "key33": "msvcaLJH84eVxxhtRYBmKVfcpEJ3UWa1p9qKH3BAhcYmGR16M3qUzsHVphjxdmonjnYjdL1ZKcGNtiXfuzbSoMY",
  "key34": "5F2SCQgMddVX7iHyQJ5nYeoGfE56GikVQLRuypYH9tPoATnSaQVF8adUnd1RZtVa9YFpCEXM2LGUpLXffgZEYfoc",
  "key35": "3A3wsmBGaDocsjnikT9MccJJqfDUfn52WtiRTKNtQUuyCqvJH4aMBphwBkMYecNEF9qguhcq4zwbKHax3VqmmJQ9",
  "key36": "3yhALoHJ9zH34W4KAzK5BZTZ4YRJJVfEWXLPWuoupBpgbgaxHTW1PzB7DAh2nvApS4JxiFu1fwzxCJ5XEAaFSaKX",
  "key37": "4ZC9FAt2c8HiCSrsMz6YXW7MXfLnwtqhuQPBruhk57RtZq9mXGDSmXcbJP6356X4XWvBy9a7YfEbs61NQBQBtvqw",
  "key38": "Sahu3nkPy3xgy2YUz5YFWVmG2bCkRw7J26LGrNqMazTFTfCHPBHDmxxp68598DjG5ZSme7MnPTNLmrukdQpLojx",
  "key39": "4PZdwAK88yaGVqWntCVypx4nfBCPa36zxjFxiyZog552ie3418WQEWMSPoZf2WzNdLnfpRDzRpZk9y44Yb5wCEDC",
  "key40": "2zEpTyrhd4sGzrPg1vYVAZUZqdZt1gXDWhvwhJeC39Y2hbFejmwjYycQCDou7QqSAcJptNpYfeyjKNthcL5inHRY",
  "key41": "1212g6iTaAMSCimwhWhW8sbPZu1tYvDr8LANmVqgP5vnqBs4abvhwnbT6xYWGD9gR2zG1RaspyxGtXCrGG9WGAT6",
  "key42": "VPuGp3R9yPHejz367X9tEh6XkyVyZDget6SfbsYyrZ4kHfUkrKgM5bKpP1CqSzHF2xutY6EQy1ke645QFQVAwXF",
  "key43": "2Yv6oBfzC4hTJ8J2uTBy4iFe59vCKgjEq3Z5yHNNaAQKZoTbZmgP2yXocGZgKpxwAvHe32WXQPTS4EuU1UVoEbcZ",
  "key44": "3vqq6Xc9k4pxM78UayXHyGFx8FGo9yH521bpmLWh5fXmnzZtqgXrA8z7crHVn93GKJBjMmFt9RXjymFf6thTQyrX",
  "key45": "4x9ZrTgnc4X5G3cJhntK6xEThNd68mkYqADs4jFuWG6tSLPVd7cDmaqV2VhDt7ywvhzy5XR18woq1C8kR71qBfNA",
  "key46": "5WU8yp7xXpyLbpnEYhSfF4P8tExgcKuRybgw6u4zgiiajqK5Mr896SVEUcHDwYj7Qgwp7eoHoAubGfJnDh5ZDEck",
  "key47": "4Y4t8d8GjwwVc8DymmVCB6XVBR19c3Rgs1jubARNd1eLSthgXg6uaKZPhvkuAQqppEyuQVEyzV2dUfZLxMyqSJxg",
  "key48": "4GHSyDoqgjCCbgHrqzQzKyh6qrvRgjWPBYMSojKo7hzuyYiNHMEnHj4xPfbDfn99BHU7BC974SiUuMB4ypzqCut5"
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
