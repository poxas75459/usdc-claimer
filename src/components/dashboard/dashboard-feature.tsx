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
    "Am3VLa5LcfjyrYHnwVmV4kGVNnoovTQXcVy7z4Dbri9LNWNrJku4gWJzBfpzfpZjvUCJh9EFs7ZK22TRqp3RFDD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AnYoTyh8JXKENSyYLdJKcrhWHaCefyn8AmLBwY6jSv2R3Pvh3mQ7RbiZjWiSM1b49cAGsustPZhocRyXw54f8xi",
  "key1": "4i8sfszGg3Jznaqx2twQsFHJGd2YE1kUsHBg6dXtRo6sig8cEyJTHTYiTaFrJqU96VB9uLCPMmbgAn2ShdzHjWyU",
  "key2": "3eCQKiirqXyjnD1WYJT55YrEbNcsrLcaJbneFdwMYGuiy51QxN69tkjbh4s72Smx6VtM8qbunL8NtaYkRKZf6wdm",
  "key3": "2R8KGj3pzL9csDjQPMbL9ecpZtSEN9WW7YrwrpvGYj4hXzeAeCP9tbGuYSMN8ETbfTjkKGeHbodLbrcRGr6avsAa",
  "key4": "5khG4a7tSFN64DRWeb2DZknBaZQAYRUjSrSwXnvkxHUU9fqqVmPdXKLPsNKRs8LhZBoQgWtxG6CwZWaL65wFbWps",
  "key5": "45TTaHfGUP78TtRY7w5CwRGJ6Zp55EFp3Nt3gwCpsyQUL8UCPe92F2govbraz3C7K5QuazUkPS8MUUWr7BvCdzWD",
  "key6": "2Hn1URuSHJME6LP63mW3FwDKEDycecjhWQA8rF3zukxksjP4APPuxUA4CUgHq94yqxh6cGQ2MjxbBEUXtu1CFquG",
  "key7": "5zy4z1QhfWac1NeJR6XKNtj2TUArzjrd6JMKPxc98G3oUECjgD4kyHkvnxRdnzU3MqeGKWDue6UbzmHYjdtYy2Fk",
  "key8": "4vZzMR6HVTE5Y6bfHy2GJ5dpUGDD5xV7wcGByXuRi49Bfy3gMEzhqBvZ7fEnzW94EiAFntKVNfFTeSUgMvTAS3Nk",
  "key9": "64Fd69b978iseov3RwrszTqEMLjhodrPyMRnTPCPgCH7BRESew6FEwNpxmX8fiPVj9z5d8ABoug3pLjdrAXHVrMG",
  "key10": "qUvAfdCbvJLSqNX9uADTaM1YZmw2R7oMbyt9ytuqQFwnSVkgxryXfumNhmf6HYd3vzf4qbp9XW1YBMMy7vPPJB2",
  "key11": "2tp7obF5dWpxHdF86wmc8ec5JnU1nVXLQvXPWVD1aaxpF4mpGhPQsgeaEpbhxJxUjUoZPeDdJAgWs7wkbauQgz5q",
  "key12": "2PLTwkxwpnUpWVYGQhew6WHemcPuaJKDEkr6gEdb5xTypgYuKwpF2fedSXzBzWCt54FNEvV6Nm4SwitLMPdo3NJB",
  "key13": "3pZvC2gVA8CbhuK1NsQyMkWTW6FNQxe6xDnd1GMo9V2J62ho6W4tG7xxGPbNeiqj514EqRSSBwA255gJjzngQuUD",
  "key14": "AcDYqJkwTH6sWjrFUPeLAsV2kwrvQ4ZsFU1ubcnhdibdSD3EfAbjroXGYkvbSL5LfqTo83eAfF3uJZGsiAsBcdW",
  "key15": "5YrnYzPSQykSiqt3JQ7kYRgtJsTdbBfCyQZoXwkSiEk4Pfr8vVBX2nXZPU1RLFRhdVEXAS6jsSMvtuLHKUeGuKQD",
  "key16": "5g9CGXD2umYbmRarKnS9UNuEAe3QogNMNgRMLZMhxLqBm5EJZVuTYiKPMKK19sivBDnEmcPdmFM13GfiRAo4fWKW",
  "key17": "4zfT5uuCkUpvzg913j1M69QNuxRucFnR8k4Y3eammfj1pL8dLCK1dNFSrZ9nJZqGY1Vkc2fqZf61UuXiTNEi7GZT",
  "key18": "3QPwiQGnKwbQ7P85DPGDE87WdP9Khp56XWhFx8fs996PHWgDza5oW2g6Y9zft4YeM32MKRmNBFqSZCkwxmUnvgQD",
  "key19": "5QHCNJ6fXqHcLbmkCHRCYbyx69PGtg53LUADMEYPwRH3RtF14pq6osyYdnGLjQ1TYijfRFKc26okiRJAXWtvNFR1",
  "key20": "44Mka2SPuRmEwzuGBpZaFXG5EupEZWT2zixCE3ryPx6EkeYBe8Wx9RYcQNpncAeQu9DGqAGruHqHEmo1yyEDUJiq",
  "key21": "RFmKKcQPz7cA2LsUzaFQVvc4Ku1LE3BNz6s9ehzpcmz6icin6J1JCh98bpF47riLkaVBoT1tGaeWVcgA8k6soTB",
  "key22": "3rFGZFbk7akgYYk6aQiB6g1FV7J3oy3kw9U9bQ9aj7FmYS5QXaBPDXeNTopg3tciETt5EkJajhB35QBc955Gi5VD",
  "key23": "rNJaDs7q69xaJQDCFfExeVJB4VCLFUoEYj7F1jaE7eGgiZac8JAqsaVWhCvqG8qowitusnm32kA44qGR3GaRJ1t",
  "key24": "C216cfaMxvAXFbhDxb8wUq8oGSSCUcxnu9xiGwNvuTHuSnUyGMnJTg2h7aCRrKo6rp2aVkyApYBgfQm9dx5gwoS",
  "key25": "4TCKaEGPz3b3MEvWVWpdhK7QoAJjdAQubVvEGr7NXsenQciY8RPucPQwvBfkDM19oVi3pX15Dyo8tNmEMDKjX4j9",
  "key26": "Heg9n5VjmDUyt2hW67FnXABKZs6aWwey4U4Zap8k11ePFLtNyBRNv2iQcwbNaDhyuU4MYv6cLLBXKTMSJZKiScG",
  "key27": "2sZHBeWnCwbgf6caGhjFx1mhAKR37pBDnzqyjRKytTu8sgNzhY1LLWFjJvjewHgKniFHGZoiDuaasjsTvxpaS9DG",
  "key28": "2DaHJ65PDDsuUyyYHLRxQqCcmuG7Ttj9x1H79cKBB1oKppoADY2joMPfQaRm9x9z5ipWoWdDLTcKuPZHEpX9gqHK",
  "key29": "54v8F4XyNAY9MMnTCabh5wXSL6o3NGpjX2mptRjRHyCiNLhfbPvHQrP8T6sHERLi58ArsX8X5SyWtbdjTnNz7nVA",
  "key30": "4dDf5RVD6UQgMq82hzmJagsFrLmvbbUHqgi44p3bWub81BhpYtUHg22v27pwBcnFZE5ZmYhJ6N7148VkVbqkLYJ",
  "key31": "5tou5TnFEthz9m2PU8FY1jrdmFme4b5FsUJvtwBZhUniNrjzucr8MxcMPiYnfSJL5Xsczw1M676gSxEzZ7iajvWM",
  "key32": "3hTfLKXVa5pTDRCaABW5kYX65Fu2syecpCygzrX8hx4jfKkp79HoY6k6QqADVHZLcEmhBjCX1yjW9HT6DQBQCbaQ",
  "key33": "zewEvB3ETg9Qb5WhFAFZYn9mVYBuQJujPa259H42gTF7c6jg2v5nXrvUsN12z7VurcDZuq4ruU7x5BSGGVPwM4h",
  "key34": "4EdRUt3CAAfLP4qnkXNfZvprXLS1KjthhkHsq2ZoTzQ6pFkJQvuPdMYmSmzf8ickSSpbbVJDEpf949GyM2u6eF8y",
  "key35": "3ZiGaMbxRkNwZVCpw5q9V8Dzy4kdcjzEMeNhcTanuBAtCXkNBgycvwRB5Zyb1Lv3xDacGTfw2bhbn6QAntb724H3",
  "key36": "2wFa9AGGGZfpkWvKFfUQnqB26cwtdLzeX64df8BkBh2jZoNpDKwxNSVrcSB5SzebkwV5vCSi1A2rcv4SGDghS6xu",
  "key37": "3qocNqKM92M1QDWFeSJZrfWp6ctc4PMgbHv3YxzRTytkhQUxuvyzsu65eeAqeR2Lw9p6ZiXDGXQSgBnjGWzVsg5",
  "key38": "SNaEv6jHb2RtRT3A8QjVNQ2jf75QEdvU2FgxoGXo1daeVaxtL2K1PPHCCoaiy6c1iTmFf25GCxtizcpwDcA2sHD",
  "key39": "6s92M5ZMRjXUmQseAf2Z8GQV92CiAQThvRBYzeVfp9zGJmaux1kp4qA3q6H85V9zpsUNpwYq47tZ6PVxJGs1GqR",
  "key40": "4dgdmYdUHAiour2huoTfEw4RHYbScoaWHmVnCLV63w7RVsTsXERvX7GsmHx3cbCa5nq5mY2N9JexoZzRaG8wPunW"
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
