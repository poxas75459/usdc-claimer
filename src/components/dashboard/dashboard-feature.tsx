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
    "5YhMnxygBw1ppvpqLuiNZ1yh8sxDSbv9H5bows1qbLSJbENwAdWGNJyFpVjoqUAtbtXZZtL1DcY3YABbRk5fdFTS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hGa5XzGpbURU1WUAu2jGNeb3YzWbwYyKCveQupdEQBLW87LDf5GwCEBYqQP2THYqptgrXygxEqEG9F2jpuf8zE2",
  "key1": "5p6b2EfGmBwgmzEAdoyK3dXTqvknPhUYCjzx2ocewKHf5zpUh3t7h9nSSDYudpDYP9cX934KQSxpWu5zSJRdU8pU",
  "key2": "4kgKkERezou9NnZfH3XXy1cNucMDSQ9QxW6eX5eLMMvpaWHsZTGJ3EjDZSur2x8QiPL7necB1n1Nen5xPdtUbYCe",
  "key3": "3NoraX1h7D7QEwZ5T66u7ayXZubkqrLoQVs1zhDCeARchPJeg1ZWgK5gfYxM9XvLCttUNRyDmBo2b1vDiPQpomj7",
  "key4": "5on5pTQMsUUNYCh7iWQLwkPuvxxzpnV82411CfN3tJeZ4X37HE1iQEXfkPnuKCNvi9pJVz5esRW1Ubiud6khBCiq",
  "key5": "2yG3GBkerpZNtqb1Jfne5GdUbYqPSvsYPAPfGC7e84PXSzothwEviBUtSNQ8LVbgMAqiCdWPw8vb8no5EXEQcGtJ",
  "key6": "4deKN1NJHLc1ax6oi8JYzo9MiSDFWW4hNJLEJbdf4CcAF78d8vEoRfYBiJcuZAa7ngfazAtbKgXeonNd9Qzzqw1U",
  "key7": "23qWvdPJjc9tCAcRfJKbua8u78VTiLKYVXmfmTpC6GncZdfJBHUX5MgrQZVTEYwiUZghPH7serbvQzPm2CZSnZPL",
  "key8": "3bZDucJS9dYz1ChU5QSmWZMTv1kfFcoSHNnb8vqU5zt5NE4LiN1aec7GhJqxCvjRevjDZgRAEWmB562WJkEWo5Tc",
  "key9": "dopC5mtvpUKu3x2ZqeNKPWf2VfsYERu2GHW5PrfV77JRAPnFuafM2UXhDvfedyNo5PximNeYyR9a1xTXqQBKsin",
  "key10": "eowNXYAYkANJTqwzmyF7YcmwL6hDSrdNEGmqinCbaYm1ENYfPHqmSwXyYh9RyFDPLez5C5fKgWp7hBKhH34eBL7",
  "key11": "qUMhp21HbFmUarVcJ2AjjevY7k5KKb93vUo3UMBxyCbRFPzMir4TU82Z3aSvtp4BwUdt3EsMqTGuH8k6NBzbB7a",
  "key12": "eqGeTy13SyYCLqrUqtTEaUWMWKENQV4LsQdtMpBvqoB48xMc7pkDWFmrAXcCGZFkk8YFuVbV1cTeFDb4jh1dRr8",
  "key13": "5Bzxv5agz5GTJv9WKeiPzsM2YA1y1VNECHypojjjpHd5S6eQ7i8pthzZX6RwiBVSDFH5TtTF7Dno16YMM6QbUjQG",
  "key14": "529ySr2QifPkr7a6jaaoJdMpXX5Gbxs6PALAwJM6Xnp351zghj5JZgTXNVJ2qyU8mK24aeQbSy7XKzMzwVE4bWAf",
  "key15": "y1NQ3haPmetFs7ibcg6BVhQFsptwUEaHNBrkoW1egRp5fq4VxDEfRRFaEtGHUwEUaCMs4DShfazGGhhb1Nb7G7R",
  "key16": "3G4kG7ohDT4U1S9BZZF69EZqpnVdCV5YVKh6FdBAh2B1TjJDnZUipHFAGMFThEY5s1ucv5k1s3jHyEK3izfGbLZS",
  "key17": "2Mhv8hMAXgLDiSEYpkbnewD2CoingtF8UUSzWJ6gLeBoWApt3Edydn6ht4jkkxStr9pBN6DR9NTp2WzHt7ePW7Tr",
  "key18": "2WF4mt7RSmUr9yDzxJUXnu2wecb8oEWHRnB7dgmTbH71zbyQkd7R1yp5PPF4ysm9dWqahaFHxwyZGjjruSp9Nxsc",
  "key19": "3fUitkKeeHPJxxbVEY8v3Hwbhb82v9CfdBQQSHg8orti3w4d1LzXTVaHX4A9RDnBJbbX8B5eXFKFwpr9DUBYFHnK",
  "key20": "3ghjhCrbiQH8C6rfMxxCiPFtEHo8KgZy9hK4eXhqVyXXbuW6mEy241ysz321Cmq7SYUKZ8HxozqZm2iNF8GPzFzc",
  "key21": "AEsFMn5zbmYF75grFCPzAZhX55P6RQ6PPH1btxYJjjb8Medawv9Dzxy1R3fB2FyyBjyPZmxqsAEniscxaCgDe7j",
  "key22": "64GM7ZymPry6QVCXTBeMZNA3uZpKp3cPQsNq49iJKuJ1e5H8XQQAnemZPrrTkMyj2VJbxUL1qjANGvRBws32Dwgz",
  "key23": "4WwPfBPLvLGzN9FF9ZaKBMeeN5Ufb7QjCK2gbFbFuY7o3EuybzGrjf1yP17DBJEv1xzFJU8RXXnHqZBdiU3PBvFr",
  "key24": "A4CsS4qtezJD3MqFCmxsUPXswDzPpYXKo6KPwPHEywqnhmV45is5v1GXbsYoY2PdijnydKFAs2zp2aG2beTFqhF",
  "key25": "4SVVqPsRv9J8FTNGArTQ12ybTmQ9CuG5kdW6MrAjN4UK2a3ubuQNarogc5vrCrdR3sL5LW7zKXNmh3MiTS5m2tQ6",
  "key26": "2CxwXFefzgZo2wjsbEs7Py3nwkLmc7gw7HbpvYDYsyaZAj5YoMgzgiDGFT9KR9dwzw5WeH1vGY6DtnPD7Wg7Wvey",
  "key27": "4MtYcdgyRd3BzBUdjV7LqPt523jts21pHVeNX1xh9yZwP7dY7u5zy9rruJhv62tdmGfgy4xUkp5kBVQAqHJaKFjD",
  "key28": "4ZgcyH3m5eu8QTRfbXe7PXdtQu614rR5rtttuZXFKC1TJZbPGddwBjHZSSEL1k2LxaXXWish8ZrKHcGZCk7gLNLX",
  "key29": "A9xisZwrBtgPiUSMBP1k3BZGAit53nDoxampcZH2hY9bJvS2pko8nXJE8u9dBe4z6WPR7MNYiMtPP78CxdHcxTW",
  "key30": "5M8GHnPQWNfzSLCxZpv1FwsMKy3hrMoEuX7jdwqSvhs3k4XnHeDEggWvfTiteR4oA11tAkqEQG7p5jbfpAfPsRAq",
  "key31": "5PMCdEpoNAxmfwkPH6FYWzmzzPgC891WFw8EuWPLhEtLAn7V7Qw7Q3Wfqg6LgZZLMfc5vJAVyRcaZjbdnegS7zvZ",
  "key32": "oiXn3vprpTEsecx8x99isiubjWLwr11oCu2FQRtK7dCL1RmSAL4F6m9i72LNFGaycaqNREMLseRaz87CX18ff6A",
  "key33": "4GJ82fkM9QwEk5m8YEPqwgh5gNwzx24WWpsxxfCqvFKK1B9ByWv66exj8aQTmCSTdE3tCvBiSkDrbVpfxuyFc6aK",
  "key34": "2fr7sFbmY9634JCYAbiSmbuHppMXtUGfhQAfm6gkgNC8AjD1aFekMqk1oiCaWHE3bBDzuh1zCVP7zb17Mwq6N4oT",
  "key35": "2ppXYydELak5A6FU2CwMn8FYtWxUYcPdubggcYiSZzXgsP9z5BfuFs27qrwXo5mf1HawcjdJUKgcwjtBx8BAFnZP",
  "key36": "2yfZyQRtGgCYGwTuZQGwsPwJrVY2wbWwdsU7CurBdTcXRwFraperPUpZgJBzFaCGewiPzoccnDviPEBTz5Gp4Waj",
  "key37": "36NKBkKYNbi21dr3XkuCDgjgu4azGcJAgJpTusu1ugjaUmceC1CasW9eoUcAQJKn7meWuVHKyF6gmCfEfcxZ4Lxu",
  "key38": "2MU75v5cyZmcX2m6AVin3u3z3FZ5ipv3ohEykfaxHKb4WdhBpeHj1RiNE6yfSsyWL1WjHoFk6ykFr4y49gVM7sM4",
  "key39": "37RC7qRqVfZww8t4a2yeTAPkrApAA4gZ4nUQo5e4fkwFbpj7gm5gJzx4pqaC733CxEMk6P3FqSXq1HLxrXhL9FiK",
  "key40": "2SzQvfA4pCowJHFmvLB8CGmBZ3te95JW9y2zYwzTxtUP8cqsamaSQ2BSZkyr1TQWPiej1eJNHhs97yD1zFrRfE71",
  "key41": "4wWteF23iEWysEqESsm2prBHByaL8k18RhuW27hzwo9R9zdAxn5ck2Lc4cbs858AMktxq9LycfkewymByJ9bSoQu",
  "key42": "5YhPoHBhmpjxBUstGfDbFf8MVqNAQ3R4YkbZa7wfhAs9R8Axgj6XDqBoqQiVZnLS96oPY3MwyK9AtDcuzzNweyKV",
  "key43": "62MEwUvv5Wkyp1vUMHhx9BY2PmSxd7pJaAGoeSkUuK1WxKnt25UiQ4zGgJDDEhBjXuTwHzT3twUVYGa4z3SqsqvM",
  "key44": "mBVp5fM93WN6zdE1XoycKjLQvu7L17qn63r2wcqP7KmkZe91VKLTZjANnn7pUui5L5iWBPGXeESRadfTsExxeo6"
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
