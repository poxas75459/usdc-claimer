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
    "i3xkkpReHqvWT8BEFDvVzrufvLVLQukPpGa7pxqjLGxztnZtmhuFe2W2HfdgN6bncuBR2JMpAvo42y5CgB4J1q4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2n4uLHhyh4ftDENehZV8MbqRcsaRqpVBHzLFyx18ghnZ3vtfi4eX5EX9EGYdNqFsxTwhmevfc1q4HUm8Pf4JM8Ca",
  "key1": "4YMj6os43nxfq4frWm8mKHPubEu3dV166w1kR8jQ8dL3aqDhZRo1rTgCPfsBADw6v4g1iZ1brseTehvpRTcAvaz2",
  "key2": "cwAcTJMD8emueH6uecvFMuhbCTW8ZZ4gEaxPpPfMCDLMFMsjLLV6rMgchPE1MffByiPAgx47JGnvfm2swwypghX",
  "key3": "qoX9w5fQZ3wCYyRrMzhgyoAVRWYuiknJTULvyRXVX2AKv96Nbkzy1j9XdL5Qe3rpXnD7pfcqnovDFfpi2dTgJpN",
  "key4": "2AVfsrw1NPCtNBhQTPYSAVmUWhQC8LMPdTAxtPdUZvWux69S9XBLEBU6mfEQDN6kXmogZfgK3k7dzu87GAKvrKcJ",
  "key5": "3G6XZVEnPjgeM2ADEWdU5wMjesESgkJUHCnFRipsnX1H5wtFdDyjv74RL7Mq6Zxicp1AkUueNjKEEGngGkQE2PFt",
  "key6": "61jfYAZXmiyHZLMVGJjcsD6gJX65aE9Qsk5qM1GToqKwTFiSLb67UphucSxb4VuArhJr1WJ4behJJGYMBicZvZgU",
  "key7": "4Q68EDfzFkN7dqMe5nX7qD5pAKTn1QrnBq86Ao9ri6txjRSxtXikxsFCJ6aH3udjgmJjqVQhUFdLed7BAkbFyNn",
  "key8": "3huHphHxFQtfC9i94Eifi2SseEepkPZpH1nLGEUPxAdHeYwgDcBcfbuCXmBoRT7CaR3cNuad4aGmjmupNNTUyH6f",
  "key9": "39bbc1iBw3LqXCxDF1QShHcCfU8RG4ZoTvarEBc27SB5AyYuvN98bdc9gfsoYtPRaJqtbU9Fs9AJZtxkXD9TN9aa",
  "key10": "2Ek8cPUtmUmUsZz9XZ5e5eyarZzAxZ1dKe3UHo2jJULkfJE8Gt8pA95nERYsMpyBb5e1SKeGdFcYya5atvGxqjT3",
  "key11": "3prrUExw4Pfoj2XZdDwnGmWq1bvMW4xtDDGxgFG1XsCNWER86hruWSaMJikFkw6CdpJVXJK83es9knK7AVv4oquQ",
  "key12": "4GoYmQ2Qike1qGQW6GMiaW7mX79GNS1sujoHt8HS8YKLnKhCAEwdnYtT8ZQTzVDUcw6BMKXoSAMH3Sy7azC6io7G",
  "key13": "4GpJA5wAdi21cqHCmTGok2j28AqMdQcX6KZuDeUMAgaQmoEgzZrw4wq9NwUUJAAz9hDr46SRJ6sKpD1JGCQpjH6R",
  "key14": "3EryxJLQ1UVXyiF1AcU6GZfNM9HePgrSV3ARRw6oX1d7RBks1bzzhjwJ3sSqQhFaKjFBngxvufLcJazsfB75CRKi",
  "key15": "5ve2gYGbJe7fm46uAfeUfxsKWqqQdSq8vhLMHDidJc2ZAiCAXJpazMqo5eBe1ZymkhRqhaGdg8sDeEamwLfxq4rD",
  "key16": "26yR2vtLEfxviHiAgRuqyBpzSRCd3wwUEb2P45QmLrJdpQ4D43mjD9MtfjpTyQsjTbGxFrbQ9Hkj1LSgUtETQQCv",
  "key17": "3g7ewpsAjd2Gg59ApzYM9fzx9X9Q6X3fvtkA15gVxBt44yRXJrGsDvWtMKhWvM9f2RaXnBUDNuJH8TDV9uWcMXM8",
  "key18": "3Km7WkGwT9p4NgXt9hxKgpDmhMwhK8L3WP5aN9UvjTvYSKxvpK7Sc1UBTXxJSo9voN8hNteKLrbosb6qBDSGTaDn",
  "key19": "4QaAtqpuU1LPeE7ZQ6fabgoBdJNGbeCTicFPbxaamush3z1BXBjkGh4ZVsXKm6WM2bzBJoBe7HcH8ZeqijJWk4ko",
  "key20": "2FHKSWUnuu7ZxwAjKa6veRA5i2c9VwuCvrApfGJJUeKpkB39RsoTRXpPjt1PXJnb2skhZkSoodyvNcc1m85NXg3v",
  "key21": "4AyACnrqnDaTYiCwmRQ5v1KhBexGDV2mTGPENjxroMV8WkUaCPjipoZasdvmWW2yLG1t7X6oupAmHRDzbjJorF4L",
  "key22": "2qE9tVWGKLwrikF9kQUXd9NSUjKLDnR3WMvVnQNZ5Hvt9q1KSsFefypUh55L7ZEUnqnNxxiHrHsgoSeA3u34Mg71",
  "key23": "3WHoCoWSczQdmXtdHNpQ7fFyebq1GUvJyoevSemUuFwy58vrqmTVvakhRCU62vTERMLA5HXM9BdjRgYXBYLL9HVc",
  "key24": "3QAqPe5BEz3LxnayXC3PXEgWDdLsmmcnazh8EgDqkn1fVc1WHr1MHPU6r7MbcqmBuRyhJn9fxEiDovPhPj2WmBV3",
  "key25": "2jRmry3WFNbvZAnnnbNMSWQxVcZukFSvkDahUPXEyGBGbQ53hYxvMew5Nvv6KGdt9YSbrq6dcmHFj34R9CD9eneh",
  "key26": "bmWsAnu88XD5y6ASVS6zTwQ2PvTijCizTmVpwNQ1CstvrtsQMQNCoQQvS4DBNwV76B5Ejmw5JPPt7MwasQe4xsB",
  "key27": "5pGy3QQUUVJQ8c6RP5mJXkXp4kU6XDHfZhkK5ENTS9mwTt3b15iYt8U51Uf9FSHwQ4cu4NXLqKFWcUHxiEpg3FAG",
  "key28": "282k2fViE4tKvuhk1xqYHLhCuiaFxw8KRHTRiubPEsDPwERjqkksCmaguo3k2jJUXyxDVDHRnKaR67BSW3kAZCsP",
  "key29": "3pGbCoGWdqwXtZAZS4ZdQ5o2tA3wA7j8y3Sd4rhjv8rFYSi16LThBebqAcz6EcM8BQre7W728G8ywqE2UVTZQSP8",
  "key30": "qxtjHdwQvHJGvWCGcC8bNPmPdnFmi98xHUhSRqe9M2Cps62Sad6WbjGxXXcr5GMRLZPdh6N2kTDHbnARt1pr8D5",
  "key31": "2fV4c9SH1uNeGFJ1ybQLLZTnmQU2TZg3XDNBvfikVvJKVkQWuBG3UD3a6Z6bL4Wof9CUpbu33DpYqeVypTtYifAX",
  "key32": "4FWrWRY3sf3VeGiYgsDjsfZpnMBHMmspJhD4XYnJH219KJxxw8o9yGCdgWH1KLPKk7w646m6dksyQfbXUEAhgXBb",
  "key33": "3tyLSYVq2sY5sFtwo68M5cHRKeyrPB3YUXffFBksiyUVhjQTTRxmiYpPHhRhZ6Pua58wEYrhRsJU9Jp3YFFy4stb",
  "key34": "4aJug584D6HVm2zxPwviHEBxiBGNRzSqNViwEZGvoEnMFBp1jPvhi3KhDrJQpNp9dt5hvDzeCToKHgBxTWmcZBsM",
  "key35": "4RxAZgpTyT5btmrAsEFxafjQHC73zgSLt4v2gdyGtsP3QK8GaLNF3cndQWGjybH7vEBKpS8V2WmZr6UGyxbsV6GH",
  "key36": "5KiXyhjGaTn9jV2zeAknymMw3M9LvtbBvTr5YYAf6KkniW743bGYkLYUsia63B99FtXmSwpbwQ4heBY7spcuxkaj",
  "key37": "2mwJinKUm6rnJi6GbaXLT3wVF4Km4XAQMaGMSFfFwewFTEjeSpLPVxpwAAsDFQaCSCK3VVntj2HUFcLrnHUP194g",
  "key38": "67n5Zs4L3Cu8yRDtgHmiSmaLRWaGSQmnWp9ndsDTZiYQztPCxx1fAAFC2YRLQcZ2yKxsja5WndR9YUr4XR1ZDRsg",
  "key39": "4MqP2WqSCsX55ZbdQKc8r1uvWiqGEiA46qH6S2dLqaZGhPvztpSGNc1nXHFrgP1fmN298pvuwF2qZ6wXbDfyae3W",
  "key40": "49tUDVJ79Nxp4WPz2rGqYJBJjYfwLgrjbpc4fGynL8BiqngvoVDGhP3rz6w9nwe7xqPHeorL315NAiC6rb8rxMMd",
  "key41": "3nFwGpgMg9tt7Lx3JAdm9shX1wywPF7JNsd4Qf1rTzLAHWHS17jm12NKyXH4YGKpN51FSpMEaKMiH6ffkSybDP7P",
  "key42": "3AMMsH3CnDATPTsELaVwe7MdFQUdRgwbMnhJWJ3XCMdSWUdeJ5NJoHVJcta2Z1s7GaZRcnCb8ZLYpELKq4GPS2PZ",
  "key43": "3FYoJX4ZVvFPP9mVWRMf2RvsbNJFd6xh5J8obsizF26A7DFY1GEzXHCi5AUk8sQxGiPwrGREDHXmZVgwisLKKgv2",
  "key44": "5SuouQkLq6Vm1aeFD6WSSRkQQCxGXbMcC6bgJmf4S6NSpJLVdiAWpNmHx29T13MtiGfBoyu8pLxLkymiQ3sG1RXG",
  "key45": "Nk4GCgywBRGJw9gere2Hyv6KJt9c6fCX8hMSDrDE7dKeUyCmneRssaeF6jt9sf5JSSHXsxqm5dik8Ut5eX36qsN",
  "key46": "3aX1edfSfGQNH86DUrytw6n4Dcpq3b5QyC4MJgVWAc42jDcEsQtxDRKMYUKXUSBwfDXTukQ5AxysxZ866EKBgury"
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
