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
    "2dfa6kbT4HMALaMLnXu4sD9NLkzxfEH4rU7qB9ApQDnpVgou4JvHhF9YL6Vui2V7TVYTCs7rZXTTqpxoKWwjc6aW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TfyFZBgyahxn4yq165BxS5fHyn48GyHLr93mTCbiSEYNiW8q8NFCCXxNWnhfEZZF7mXjavzyvxBpZjTU2yAu2Mr",
  "key1": "SydKJnxxSyDYuoTVuScwdrVYTfZ5Cqn4yLcZSvYdDd7KBK78jvCxEHcUCvNwLR99ysxUngbMwjtQq5KBF63N9ea",
  "key2": "Cy4XXBJdKqA9kPUXXWDdcWojvzpeQB5dQS5vVpkpyNSiwzYuqzy8HWoC5VityetCQPGyzLGhrBDYJh6WTteCUC7",
  "key3": "2QLa7xU1yEPoDHakyF68JYHUgLvDRKKbyzpGj9PFyH6SEYVweB31bBfTcddHHR9NvT4ZWxL8nNhsUXSVs6uAppB3",
  "key4": "5YfpDqGM35zSSZixHHCzLC69ixV3G6CEvp5Ckac5WEj5V1BYN9bC7GgkXq24R8tx9MZJdrpnxWEhgzQj2oLrbPdK",
  "key5": "4BBChx9WGhvoLsREn4tZWuPJVJEBQUrLvYaRcipdSyfEtysQcibSncq7vWwx6Ea13h35oG6oLDx3y39HtY8qbeQx",
  "key6": "Vik44tdEteEDiCEGnbkdipVsDjySqAGMBP64Q32hVXL2ApKfdiEFvyHxktMeZ7ifKPzRtkFgvhQBJ1AngRy59kL",
  "key7": "5qxYv5ZdWbWXSuxPkKuf439VYTWrZa1bNPkY9SMW5CeBwJSrV7FZK9BuytUuZuBuoV5FtGbPYGkqeHqrJU4N2otU",
  "key8": "2mDmTkvBaxXrCxw8g7NrfuFczhBMhxDRkLME11UoZTvis9zFE8qpQYtkW57FoVpLdPyFboi8WiDZkSoK8bnbYAw9",
  "key9": "2ZG8pbgUgJpYnVn2bNEHAdXd5n8PaQdQDitJVZrDCiEXaCp1vw73ArnXjFa4pgXXbXWRR599GqaeHyo5PWjZY5M1",
  "key10": "56GNmJGSUkBhd9jL86XruRyzq2213j64KWvQyBpntD1oULhMQZk5wuEG6YA7H3kRzeBTaVFHQnJn5XX2JhEBtR5w",
  "key11": "4MCBSKJWsheVjsMtH2PHDePQrvJZcisufsGU7XLSepqkrwBEWtKE13f6ZDdfGjVoubEfM4p3DRd3aJMpjeBSg25T",
  "key12": "5nZsJ21PgTSVZQ7Zr8A17qQRYvrKHUEbVhsLjm1DvcC1kAYGVUwtPSXPRN7mFyDHBobZWr7hF6nMNZXUmUPC7txm",
  "key13": "4fh9fSZ9e2vpku1KGpFpMq3KkQoTs9rR5JyBdmeWdYFMkort7MXcWZeDFFBsXKnCcGfy6c7GXZg4BkzPmmavpKVG",
  "key14": "3ePp3apq58so5qTXcEYnyYToqbFLE7wNjo3UW3imtDM5GjLDrJZCsdYwYdXEB21aFYhrcoFtjEHb26kcNpByVvqe",
  "key15": "2m7Rzx3oRUbo27vz8SgwmAJeUDYVMYz4mnQMcigy3mb4W1oGmb6rKWXbUtb6QY72oRj2F7A2saD2yw6AkVSn5npN",
  "key16": "w5EBUam5BGU4Wnjkt8hG7dmc4XTYDcfNDSSWD1ZgVRNzLvUXCK5ywHT81ryAZETAAjy6kUsU341PjCyJVupKumY",
  "key17": "5uWUX8DGh3sBzQ3ttCHuZxKYdyWNHcXjqEL3czfLt6S76L4bA38eXs4KUCnkv4yEV5rTsh1hhxE4R3uSZ1MrPf26",
  "key18": "QaNhc3PkCL2GX1ihEsBiPmU6ycWEggL285sRuPsRrjvkvYLRyvTBR42W8e6yhiie1qkXqpP7haRassrwKy8UNY3",
  "key19": "3P7pbGbxuVXwz9tyxDrYsYZfMkTex7xeS6tiYAcUEfVoMf9GQapH4687rs5SvY93LA7CRUB7LFpaGkUXRctFucs9",
  "key20": "4QdWU4wr3EQMPBLRttYHw6KoXmwWocTaqLjXCE44qqgZMVuWKjwgNsV8QRpCnPPvpvCzvf1CmnLGp4QATUTfDPj8",
  "key21": "3kSEvcD4XoWDYa42fWgVktr9smLzMX762Gj7Jk8WpJFjWDPBQuDaBErb4xS3889XoRquYfMWVGM1kdNP3Edws8fP",
  "key22": "4ASr6YFsZDcJNCf5auro9YWFVWyCFUU6JAmtFyyUx4PeS8E9bLEtPiwYifwTEhix19GEu3q546NSZwvMcNRDTEzn",
  "key23": "37GmrhNwNtgFhUx4jUCR5BtxvNkq9jgX3RnBCRiFgNuxVQa9eucaFPjfFoBZcK7tmZT7EkrmgU8imSKE6XGsXQj9",
  "key24": "5j1H1ZVP6S9gg6DXhQSk8SPBQNNocDQwt6syYt7UZpZKrfN4AmwFhQHuhm56AgT2WD9tYCsHiHggXyoiqANssMUD",
  "key25": "3geXgMH94ou1Qe9MLRxrsPvGG1npWNHULQSxy8w9eZ9Ko2Xy7uyyffNmSaWe9Sf9EahkcaLqJ1thfcgzMPvaUunX",
  "key26": "4LY9unDU9vnUMZUNZk7ydp894AeKNswNynfBXgNY3co8vhsu9z2M1SSoFfzKa6R5N5ryWnAgVzcHro6EhYAJAwRy",
  "key27": "2aZ2KYF18Gum9UUFKeWfkrUutMhpbcxEwMQW7fBecMfvd7BbwEy4NwaPkQxfkrQKdMbJgncskC4hEywiLAfNynEa",
  "key28": "3K2CvgLojRYRCJ7PSaCFjP42RUpaK5rKkVF9An43EzZXi8G266FDDis17pokGLw45pdWQyg4kUvGPxFq3LDR9Ezf",
  "key29": "2pbivcG1xHotQ7BsQsAbTKdhucP2KPz721PbGKG6vyLLe1FzxRzVWNkuDcNYVRSNPvsCrT2FymPgBNQpPj8c6aWA",
  "key30": "5yUv6SWFpV1kF8WRDnLxKp6FMnJ7ow29hDgkyaoxP7Ruh8c57MEDGmwAcfY21jby6qi75o8cNuwoHSCZnYdvX9pW",
  "key31": "5KL7C7rqnZSRyUkpyUF2PyuBx4RQMoqMnpe5uRwMJmrdkapehq3C1YaauXuiUJBmzpkPaXABuVQ3zhXy4psstWbs",
  "key32": "23qwYtfukFerhmyX1CizAfkqXH9xyiWDakZfKzrVWbspfwV83WAYPe6VmApCL7cjNy8FFrHXjYP59WzUQWKb4mks",
  "key33": "2ZkZ1QHjgRBqcLVhz6Bm1hFPFrTGebPPckhNCiZvhn1pooVK8qKLEtSqTfiG2HY9eigLJ2YHVb2SYnbDHMtJFRVJ",
  "key34": "4vosNpkDrrKqVifrwks1tc2yjr3jFVf6WTYhDX1V6deNPJkLcVVT69RgqKThT5UftGUmuwMrt6VvdeUFpGivbLjG",
  "key35": "3vUCMEwmUDugyvvt7zmY4LrmoQxpts4xahgbg5ho3M6nJPYjW3FjHBXehhU2Jbbx3YxwXpkeDHVTggjsRwQCdXqa",
  "key36": "4VtCGTbpqr2FaUrGCM4FZCKTKUb5ZYFMhtccsz1Vwwng1sWJ3pNxeJESeYvAy7MFxrxWuUU62zKkzNKtfqcJU44L",
  "key37": "2aeXwLusQSoSxNtuav7FzYPTrXwVea6JeGSbuSvLdRcz28P45Ap3mcNRLZ4An2it9cE9iRtJE1urckZdsEDCX36H",
  "key38": "3L3yvQCtudCtnxuvkD4Wyp6cr21jpFcGefHmva4UbSp3dbCxH8SsuzcFDNhAwWg55BcATyGiNApUmsePA6XiR1E8",
  "key39": "BBeLkZwB8o5yHNWFSP6YDVFGzJ5T8Fj2bnodjPgiCWyC79NgfUumzwtwSNAVP8JKocMpqdqy6LUuXe3y3GMuEMo",
  "key40": "2yfpeMwPfoEoxU7MzF2BXhyxwZUz45bMeb7JeKN29cM4xpEdecBSuAg5Na1jjmgGCimFgGCLMk6CMpR8H2LKarws",
  "key41": "2piij9dm68ta4BZAE3RwHbFFvBTWFyck3DfBHob58v5SXUANtPGHrpzLrRrtHnpaFxQvgos9mWKxJ8kKk3TZoeVY"
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
