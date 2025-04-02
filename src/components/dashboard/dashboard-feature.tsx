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
    "341iijiN8MCkcF3X34V9QANmjwYUuk29kQGo6Gt8qNaQw38dJQ6Pro8aBwCTu9y815GwjsoYLbF3RuFNqNgpdBdg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ij5dQ8UR3bMNRNUhzdVixSQ123JTnWc9kTsgHkbFZjZs6wPaGRCooPBRuaQo7nZABzp3apvj9xsduqL5RpjmGMv",
  "key1": "XBVVBvTBJNkMsgvGyk99hVrUwGTFxTJHPKqHZNRZ7DVCovGW1rFTsYZYvoJXfBQRsG44UcT4bav8zChCK5CfnTv",
  "key2": "49vvpY5HdVbUnedc213P84HmtKETkJV6BNVbD7jGcvZKdZwdtkqNpaeVSFTvAd5S2t1cHQnxjgURjfwnqJtSk8dC",
  "key3": "2PtJD2tptrNtkxWTC2exi6Ez3XiaEAuvVin1w4WQAK3y1oiRXxGeRuK4MeqBmRKRAMwqkmhE8C7pn8nAWLyDhu5r",
  "key4": "4vAqj7amFTg7B6hTL3xBwBy6gpmkM3wA2XEYzS8eijv3p6u3xfsCEiq24EgDSFK42XHKGxXqqhKX4UKKjp7GbyMv",
  "key5": "4DyizhubXS3TQvXUL13wqj1vxsD7XHd8H2qRpTqvLxJTW2ADM4ttXzknmnFuDVZ6yzBCwtEiY7Dw4ECN4VGf72Ux",
  "key6": "CRVJLgjk6yJ9QqMqYrV7Dm9wDgK35fwCuxWtHTJDQxqH3Pk7kqxNYHCKzuyCyRVVgt1WR1gZaM9UcLguFHqTiRG",
  "key7": "CzLmTuqdCbPH32uqfE7ejfH9jtd24UrscaVJSAe6kWB4dmqsfCzjJ6E37Ka1CbrDUfG437qjQWcwacR2tY29ZYH",
  "key8": "4ChpK6TW4ffWrMZVvKxVkWHmky8qbmcBWNCcsWzaDBAvPmpE7kSVk85oGbNSgPfuqL642j6sZciUSXVqVLfW9ibb",
  "key9": "25myYxoxVitbteYSxV8h2iUoapDYq2uzUWTVjquDKYZf1c2Z5gMdNjK21CepkWda65EPgS2hNXhUSXHrU3KGjmiw",
  "key10": "5UHdKsup9E112iWkAa6PFz3mmHrKmE8rdAdumA2mrWtCww2Qmiv8P3p6mASuQchuZhJTLEGCnHC8EuarR3ZXXX9K",
  "key11": "4511fdhqm4AZH1PP6d2Eu2utwRKiw5pELJ4jpA7hJTaxY7a2pReJ9hQHfvuV2wZur1sdhbjY4jPhcibSS7D94AVB",
  "key12": "43vgAhfZNC8RGKXmUEDxK1TDhELDQBg9yyjz6AXY5GTzsX1Hn3cGn7ANFWTmuM5aWduTB5TkHrnjGV9RcvTzMMyq",
  "key13": "xwBiwX7ATRmGHFcWLZhEw553XnvVkPfAKRsU1fUmzDQcxzKpvHLxJtPkJMPELe1oEqkiRLEec7oXd6F97ktWdCV",
  "key14": "499TbXbCY7UooccQmqz7FcdqEXMHXHYTwKK5bdkk9YTVXY14Ac3ceP9L6CiJAaf79QvoRfzGug6KC35tL5Rs8fbe",
  "key15": "BddFbXq15BPS2E6QhPid16Bj8z2RzsgqgWPwHnXtPdrnUsM6LadE4YsFt8ckRMEWCQTw8G7isAUnatUayifMuyV",
  "key16": "4fB3UvBPzcFzodzjgvoxzosycwN2wQETb2gJN9HrftWnsV5ittVDD1CWFFBaKsebiTnf5Vb9ag9ygnacfQm7HCM1",
  "key17": "3ocYF6NCx7W7XmqmKhk5gbTg8gCUY3zXNZXhZSJjLnGBYL6jtiJAVuG8o2ZwzhrA6CsWrqcbd1pRs7wEAZWbFL88",
  "key18": "3y8q3iVpxkYWqHPzaYmkoL6eAHSqDeEKgp2xb8bnZNK3JDJi6vtK1f171JeYHtYJQvbCKZuLkBykDe8zDo83k8wq",
  "key19": "5XXPZvYuGxfnGzZzheMQk7DcVwch7x3teSGRPEcngRhXKKnHHqifU6RwN2EZtpt88AesMzYqEd64y9xgpb6qcKKz",
  "key20": "CV9EkWd54DnHepXCVFSTmeSKSJbefZqcKesNSKk5eFPhyStpFYtuWURjRAXdaH3e8vz3Z8rizoy83kd5sMMd9fC",
  "key21": "3QGbjhcFQ3YPxFdwaFjAtKS7gTApMJZy84iVGuztYVkCicqC9ZRMGypXNbhoty456S9WGBNn8DieGRS6Jr9Bbv4H",
  "key22": "5scagLXMGoQCN2nrt3uRAx46HyP6YE9PTgicnxLCbs7PmxmhYSe28d5ogcNsWhKFY24eMt8hXX6fsZimjht6YJHB",
  "key23": "62rKVqcKA7449L3vZR4LJxHUw1SCbDVAwmtHmSEba47x9VxT61Fd5wy7wAPoBYvJR9wVrweHmYDZD3AHnA1XrFiQ",
  "key24": "5NqAvEh6PXwHT8buVo6Fkc66KejyEBYgomkxsQ56oaiRn46rC5SU7ond8VV8NAqPHJyxps2AutPQHyXBNeT6eHQs",
  "key25": "zh2kNCm7xxHfWLXkmjVsJaLc1Z7yVM59nVHw2aWVkHQnekJhKZRaRZD6AthWrDBE5k3y1xq6DzGRALLyeP9ZteT",
  "key26": "27LWkXbE3T8heitbXQAXbpmm2fBf1sERgKBV3K5UDFoufo3mY1eGfs5xFyjfti3bH6vRmJUGEuRcqitLLXaJiSuX",
  "key27": "4nB2HneBGhY3brZqswa32ekLS73E1av8YMnPo3GwHatej31ZxDtXGzL5GJeb66MpFTfDre3JmuttNzUpkR8BfVCF",
  "key28": "utgnMoCiD68sPMdtf5CANj6wJWMe6o6ep4V7CTwVXQe48juWrqijDrCwJNy66QJRJJVqsdRCRjbmn2jkCCGzUEt",
  "key29": "5QB3tMLNZS2r3FwPuZfd95bCDM1SfcrpGc3gFnMzrHmf81uP7swgEdpyncEfNu2u162DfNJ2pzruxFRWDmeviLD1",
  "key30": "35Hv8GVQNbbwrbLQYcvpcwMLYugPikrT996Gx43xsYC6wAZ22rwq3nt7Xan17PwDwTP4VWHeqDtLjNAwQqiu7FPG",
  "key31": "dL2URsXpHCWgXwKHXAWRPR6ny6FemiSpkvjBN8AAMvEwRbVHgtpeA91eiUqu1rW6kp8ncTxPEGCsQdszxAc4J5P",
  "key32": "4r84yLLGrZBvgk8GMbUvHR1D4vLLmCPU7h8LiMJnmVo8BdCEEYoPVPCeHsDeuJYQDXYBVkHEv8gEy5NZHXwGNF2Y",
  "key33": "5raJk43wtoPdsLqZx2Cr3CnMK5dcSfDEc3DjeMJkg5rp11rWw7VAiTD1SqCriZsWZcNH1xTvL7kW6paHb1CrVfDf",
  "key34": "5GnAP9ca8rk1cuMg7au3JPEVHxV7gTt248yFt8XjGP7VQzdjwCqRXBh4EULWJgXWrzMnJQYLGym5TgCWUXLwho64",
  "key35": "59YeVxh7stk9bWo3aoxxByxcYkiifMrRiUJfCNF5gmXcRnW8717erHpsufqUJqZhA9rXnh6fe2LKtMdfV89krkL7",
  "key36": "2QXAM37vnz3fkkfPc1LJmr5qyUuXHTzYVmKYNJpBZqchwP1GwqaAziJtQVqEqV851prDMyo8L8nCTZw1T1sijM5c",
  "key37": "2VbZx2ZSA7zkKCmzgin9QkFz1mX8gd6ivxT51WKRofb6VFxmKR7mLhrmxULgR7GKUjLNYA6hQjWE2xCCzrNQAnwN",
  "key38": "d9tcwNhv2t8XtLFgcbm4tEP1jgsUcyjFRn7NtLLhvCn9Qb1ATSGBDTSZmjcENkKvPQXXM4E7EnaqSGhiwFqCCoF",
  "key39": "33jT2GJUmeECD2JyBb5m5damcPQF5uZQ86JooEKNQ39uvjRG6n9pL2DEdBreeo626q3vnXxh3xk5nAvw5UA1KYeD",
  "key40": "4WjZa5WzBBpNC76ZnjEsPx2HXzAgmBEWKSVN7FC8aUbCTMem1SCcjG2x56pidyMGH8GgVoUJBgv7jJjK2uSQqtnm",
  "key41": "4k6L8JPX4kuKcLoimAJ6cptFeXQ5YaBivnr6LpTiWRa3v5hKxWuKk84EP5MW315213rjpLGu6qimqWcsCMMx4SCS",
  "key42": "KxeT9om2ySCBht8rYQvv8VKuWWdx4mmaXfbqUQo5T3ZRzHgtiRjvJiq3S5Z45X4h8YroMgkTWKQUNkAtUBKqaik",
  "key43": "4nSbtqa61eFoBRZ5vn4qwSuwKbaAbmd478ftvk7ScNZzmfNrVJ8s9fjXn7Lz85jmXWGikXz2Ky3buSapb8p5fcCe",
  "key44": "2VhouJmtSgSdJYBMCDmxYdud5oxSL9UNendZhihEYeMryP5Qf129y8WKhGsqmaoVSxizU1T9RCJYLPNvGjrAvBat",
  "key45": "2p7SBbysiLHa8ALnrp5ezbwZ6H1NAGYS9vJqrKWPFhZ93d8pcQy1Lpg65gfCuxsUohkaoaEh9JYTWCiiJqcdM972",
  "key46": "4hzeJ8tqXrfgxNG3fcAypc3am9SfH54VZdNBQsQYe15vSZLS3zXsFk27Xs4eAGxKR2s6XhC7FQqbBwekk8aVhSYZ"
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
