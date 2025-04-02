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
    "Dr2oSuXCRQ2VMAGSxfzdEhTbJ6GQvs6T6Re4VA5hMxrC1hmqZyNnqsbaNjwpQnA9DEs9CyjvDxn6YMWqnQwGpR9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HNac4ZnbDe3nuRvqVwWoT3wTCEtHQ2vbNjbVFp6qSNNxhzDDBVKPdiMzfXnSaS3be5QpP6wZSW7DxSBr9BT5zng",
  "key1": "5trBZcADqWCUXZRMj2XqEjsEqSEX56gbZbg3YvKx3WsE8icSyxqWeooa3usosDfjGjLWooGSGNPNyy7bx9BveNe9",
  "key2": "9zMKCsbh3fBymR8RWH5YthXnaPNGQHgQhg9MZX9Mgc6VGyV3X38viPbF3EBumXfiyvn64pXquc48qB3G68VucYA",
  "key3": "3CojbYcEkeMsZW5UKfyFtaKm2csjN3ep88WtaQqEyT2xq1LnfXSgcTpymS6vxjQPs9BtnLrBfR6PnZqp1EdBmkih",
  "key4": "4zG9g4ciR8Qu6ySt3fFgXj3jV1xe5ag2ZkCnGhziqJs74twjA7FBpr3bun5uPymwzBxDudYA9MCPaMYqSjZZFE1o",
  "key5": "4CNnH2Hzy93ZFVXQaGRgNLLE64Jsz4JeioPkzc1x23TipkCEjQttD3JF2kyg3wFsHYqenprDTwQGtP435BwSXSB6",
  "key6": "4pwxcVNPV5Ztu8Mw6Zgtst9QDxJRUUGhs92d5ndxceRMN7wZ2uBivsBk2zx86o5U1G5k965GLZKJ15LZPHw1rZk6",
  "key7": "3AbRjHMP1SimbqdYUhfPXpheBhkCAySjWkxte5nt7GzH8PU33KMZFRJphjyDxdcpd69Dtfi4kbTB4xBgygacYo2r",
  "key8": "21gq7yDgSPZ99b1ohM2ZdmQ8RinUiPRYosRAGmhkMY3ygDarTFycpY6fwqcQLTiUMhEAYaB7oYDqBQyUSbneJMkn",
  "key9": "4r3v2a3qzDgmaiP6Q9g9huXzgd1Lagu2MQ7T3boUAw4f7GXAcsM2UT7B9DLGtd26NLm2CEhugXrug2VT3P3nuqaA",
  "key10": "2bkZ8q3nD43CnS6KKsiSwxTmWMQbfxRRL3iqfB43yVh6gSmijDNkqSwfuHdNh96iDjc8hAr6hjBTK4jseJL14Aq4",
  "key11": "3AAYKdBEZFbYT764cFRQf3HDgCvcovD4vyt19tEqMsiYoWmLyc27U4bUJNsgNB46uvQfBnQVNRtLG5a8JaTh8Atw",
  "key12": "3PE75KPh8P8pBy5SXXBqHJDvSGjjsaSE87nx72tkjzAUeGe2Lf2HrdZCMEex8jnYs7qXNjpwV8KuVddpBiafwgru",
  "key13": "o9xPYKr3wRSPdj8WcGMET4TAUwAJhhcga3VRR6kyRgxPv1FCeZ4yYEiBNfkytPJq11p7JwwzrJheppQbhzquQBS",
  "key14": "2V8nHewfTRJGkPbtTTvNmcS9p9XEV9Z8gwsJkS3T5uvBSoJnSgY6Frtkm51o5VPemHcvR2J59gcH8oNBptDFfYhS",
  "key15": "5QnNQD56uvRNPU8HpSFVygVf5GsqjmX9VLxDAA6u9gUk3WmSDYAuYdKb6TzLgfGBvRskuHUWqWUzeEFeCQecFoDe",
  "key16": "29xPtTSg9t8Ck2BGJTuGistdm1DKS9k78Z5hZT4h3q4FziMmmysTaz2SeNPMk4zKkn9gssNCXvhFbEzJ9Ru9s6PR",
  "key17": "3GpmxmzstVV1fZ3VMag4k9mZjuPQ47T33qyAoH85VtdaUh577osR6oPcruzdRFs46ZTguJuQongCpEKjTKaqXVsg",
  "key18": "FjQM8wFa3PTPWjqZ9R5LBMdWNpgR9Ah9ifXsgfuyh2mpcL9qB7PRCmsG4Kk3y1RmJSaFadYyaMqjFY3x72oSe2T",
  "key19": "5v2edabrefPhk33tXqhvMHhSBHmsBBcXHmLNjpz8Nj7HTADKJBdve5DjY58Gndu2LQ99uExQb4VttYsHKWr19oBc",
  "key20": "2hiL4RJse5BiuZcdjztmsNDuB8BCAETzkc64tPJpr5BQeRMG6oPVSbEGv4DaVndh1rA7nAHMr9Cg6oPJoUiCtmrP",
  "key21": "3oeztTngq7mDRjGT1CFiFyP5LPaNN3qGgCcaSoJWqtH5mTMkNAaHkhx3z7ZZpiBnGhoJeyU7ypnj7rB8RrXG8vyr",
  "key22": "jwD99YmhkwqtYTZbop8hhUd1HMFHELPtei53xKc5hLqDVT8rSLjzf7YARpa1FbJTyvtwA8pWpU9kRcfpLxFPDHd",
  "key23": "491KDSwjuwCP7EVjA2iSuXyhQGFcgg4zqwq8fj3pnZzPMCKW78E6BYVMsnBwULpr8iRydTcvWv56zNGSBoawWwjw",
  "key24": "2ZBNLxiKQH5P7L9TTpu4ibrsSs71Pcrxc3NJYQdyD46oQ8VJESjBSZJbAGEoQ4K5ePwarvaRALtxFhBGaJvDVo6R",
  "key25": "2n12HFgTFAQHdRzpEmTjsRwcFyDhPmardFEPGkp8zCZfcG3DgwmtvtuidF2RSLnAhQNy13r9WEucmYG6KWWmynTi",
  "key26": "43SAWaXxoATqhoBDyYZvbem7mYHdW2mn9X4ZBPM1bHJ5ZV7AKnLnzvgQkvXH7exVk1otxnW9EgP9DQt3HbEtNqn3",
  "key27": "2dYQve5d8fCsjMY1Fku5FpPGD4fzVHAUUY8JKoj1yM5mAafViAxavQ3ds7V2FSK9CaZhBESAtEgHgVornDn1zDT5",
  "key28": "5XsuRdjiRqAX5jJ59EJnDv5TfjipxPNFiUVRqsxDMDH33Szt4AyyXvoceyQjFU39VQxhDLv9fzPyioUP9dbQtkfG",
  "key29": "673pLuDJSCDmfdD4FLWkLNFcWQ7K3TzK85iMLqGVQyHoe9wMC9Cn5AXW2Co3sfE53vdXTMxdLRDiU5BAbo4pYxsU",
  "key30": "1LUg2iHzfdgjs5CitqLP1AKgFEDagwAEDWSF8WMUYyQi74CriJMgrcAha9vvr1UkpYUdeWgGvoLwFgzFHpC12qW",
  "key31": "4L7KWmMEVBuMXeQmWmfVpmr2CknndFUKJfWh9BbAsRoX6cFFdD1xBmqvj13gwp9WjCi9yqVRov3EcuKZBnpoCLjS",
  "key32": "zhBG2FiLQACyy2FCW24FkiTXCgEDH9fmvip45As9EikJLkuYyGLhA4WyRVdmwTabNzVZrafRsBMMv68BsErXZ8Q",
  "key33": "5AYjrAqHXFTGK6oWYfEtRu7syAu8tgHwfgbvi6Jax6f6xmcqG9ooR8noRDwpXa5FK9dpCem6H8veYRgBtaNWhuF5",
  "key34": "2BVgMi6Y3HAk7SCU6zd2ZVvxWMZnrYdkcg8PJAuicbYbRhuCzFHs4sNDt6WENzwDU6fpMsu8Qz5X9LZ2x8i5dJkw",
  "key35": "TqWUF3QmzKW38Qhm8iqnHM7ZtWQJppjfgQWmT6hw7kT51co8npUncGykA6dQDZD9fJV6ZW1xkcxcSLgJxvttT9N",
  "key36": "2MmbZiuS9c3QT3UBPws6KrjP3fXjJX8vvL1BUAgKZ71hEGJdT2TiPGFEFeQcyY5cyLeCNB2aKw1qgbwyqVjuQpmC",
  "key37": "4vdqfpwRF9jUE4AmqqPm8bLZMoHmtuXMEcftWF5Vt2QH6PL4m9zy5ZNZUMvjn5QEHdzFHvErgDwjV4QbgqMTsS2N",
  "key38": "5Rqz1HFdeu7LKNTi8NKG9rKX7krYZhQNJSagqmQedZphJ6WFaN9oJbUUKhgMU7TxX7UukPgSfRLNhKw9cnMmwELd",
  "key39": "3dBSMXw2DjzGYqjy4R66bjhgZyuk7EveHpZAnw9g39po3U2bogErKuSd34m6vbND3GNQCTfQsBeXn4UANEKiZkYd",
  "key40": "4JzjwUCJzxtxKRfqrFtHKjFgp9KqmT23CGphXpYMSxxXx7jmL7Ymi7D4n1JBQ2QrBLsmzz4VokrJs74Pop5A53iY",
  "key41": "5UcpZDhMMXLtji7RrQzooXNGGyj8EyS5cQX7p8diZXfSzRH3wgfNfpc75MLxznHjWwEsPyzNsgJ9vmMHEJJoQqLW",
  "key42": "2Z4bbqcqp6PnSadpzwVpbkYx6oQWKQDzTKdnUz3LYHuEu4uABnLXbrHh4XSEKpFwDE58wrPNUNvNqmZ8HCuWNHTf",
  "key43": "5aRTeh6xLUdRFDJB65uLEsU1uwKjdVCMsr4HjEu3wSF1hTrMC6kcbFMbVxoWrC26kxqWnjcGypYwBNYv6ei7uzAz",
  "key44": "2a4YHqMBcXLV1crE2GV5fMHxL9u6Bb28pjxEqPQCF65DyMNmwsMwk3MAQPiWejGZELZD19TX9J8mgph12kpX8DPG",
  "key45": "26XRabjdTEMxP9fqsis9pNiq3CemxZFmLjsWNxmD8ZRRxswwHrVfCZM3MQuPoxxaPddwm7BjvkkmM5xfkXcnFhAQ",
  "key46": "5QcoDCohh6yF7qoprc9cNGR15fMmJZ4ANeyDjhDfWzyk5ZDXCyNaiLU7DtGZB6smErsecT4SL687Ga9oQSiCUQw5",
  "key47": "q9hCuBrN6qVEh4Den1VWUN1NTM5VF41F7Vrds5L3wNXqUuWvwTG66wLWELBN9jLq6nLfDMpkFs1PsxTyPaNL6oh"
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
