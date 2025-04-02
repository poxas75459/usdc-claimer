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
    "5uoT6nYFbjFjRm87ijvPsQg45GSM1pwPjbR9fMFScGPcVWdFntzz5kE83DmDaXA3hKZyAJn3LKW56wvsHA3ngdu3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4D29ePdGf573GxMdMbun9nUegiq8d35D5rZJNJMpankfG4MW89HYZ9SAhr2o7qqiMUSGWTHTsBM5yD772q5FxeXd",
  "key1": "3ajeVLkjmbsAsQXG3NkVi11pPxjzyrmAZoLK6nREnXnCAarntV8KbAL6jFftGMuaMnLScRdie9DB4YaGpkeLCq5R",
  "key2": "2q8bp8Y7Xr247HuxFD7Mps3vZs4vP7SxhsnP718y8CAvSBBBL1V1oihodgXEXpcHZgjEkfDhhFAVoH9iFQEziouj",
  "key3": "4HHJjH9hwdY2KqRLxvZtaxN3GVe4XMYGaSSELd4bvNUaL2H2Au4FV6Qhk3jn1ypkhEPh2k586EMypKrP8izdRJR9",
  "key4": "4xiY5tmfneJex7cJA9evCTw9Ce7QVohP1i9DfD3aAgYch9zDWWYrU5TciSHeGttPVYU3KQtgD7ZVnH5JiKzkft3M",
  "key5": "62jx1oNeEBAqXKZDzymJmMR2z4kVLUSKfPL51YfFygKM2panDY6ruzxu7PDVA71ANYYf2kXHvyXFRrYXvAwrvhhR",
  "key6": "2off7Fj27woMkVPLbwsR3ayotqV1AdQttTDHTGaggaBLCabq5nKgjYKfvB4vkd62URfEfQdQGZpehJs8hQor5qSs",
  "key7": "3cmPP9bQFhfTZbFt7UvHv1JkDhNNX4TgxfckRRHVsdTZCABEG8ZqnB2fyhoBYS8mgjRYbVEWFcLetjf46QAy2Wru",
  "key8": "3g93eganjTfmo6T9RbJUWeAqzhRTTdyPtHMVHbsjEiAXBeqVPxHsUyECqrpiY6eqwK6kqEeHBo6goir2zaWbbCDA",
  "key9": "2nzYBVYGXoSTVnU4e2Pey26s5FyAY4mJHzyZLEfNdU3SRApi8cya5svKUEhDZ4YWQs3Au6kZH2RoEzjCWvWUMSJb",
  "key10": "gaP4YquL3ta13dLwtmuAEmq2BZC5BHczZp3WgoorGMBSvNtVBvjVJHcnKbzbuMyNzD2MhuhMBBJMTzVWJzGFrgz",
  "key11": "43vW3UzAe4YFgYt3kjvwZfWvJe3zGKtW1bab2jRjJRyQursdNdMCYksJsgEDQyCoMgx63hM8aCxAG49AsX8wkDAf",
  "key12": "3e7h6zt7vqM4vjeKa1zbobThzodWzdMSw64cEAyrUCe2d2h5HScFQyFQZCKhTJRf93QBP3F5ShfCnN1FtAzChGk9",
  "key13": "3Bw27Pry5GzQTa4CFuEr2aSFJHDxoNRFvKZKDqPyUskA9rjA5G7M1YNCH1PpXMP2GbgzWMZoFfnpqk4mUWotPiKd",
  "key14": "2zzLRH3eC2DC8xkBcxkie9KeBqSZM4UjDf456P95JWVSojzxmJmgqskaS4Mf57qqiKpinrrDkTQTJSE9aXXSUPLz",
  "key15": "4AzBYF9cSLoCVpGTRupxUL8Vxu1j8EXuwPTPuwVQdv4VQBMxwbhztTYsiwkcZCXVVC1LJP2kqDvp5ckhMTcWpQjv",
  "key16": "dLtqsGZNihgHsGC1Qa86K6reJh7cd863kan72rpivXLPXema4fXkyL1JgSX4jkT4VVxeZYDdyD67qNFTwhfDyg8",
  "key17": "RUGXM9vmgNvvYch1QUA5EJrjkE6md228mEF5xbdyMJzCmfGptgBWb8fcEkri1SA5bWqKPpTNM8EkzA5Ee3WsdNS",
  "key18": "2RhbGMV3Y3tvybfjnRk2ZiHChMbiM5UUuYKCQWp9gDreVxxvqLZsquztyCPftAiiGp7awUGNqkwL3pUKucpjEVSd",
  "key19": "5AqMgFAFVgsf293NXLec8M7m5jmfNLBTJDdnAskZWh6FgC7YvgET1iboanR7vMEdLZ5EhEHrFUGetEsPv3TCrK9g",
  "key20": "3mNYaztR9ypeDoFm8sFAcFQ8A72ht3dV2QDYKDfZam486xwxVUZ45uERyiHdm4AaB2PZGLsZDBUZZgaYvSnuc6Gs",
  "key21": "2zDRpNq7yW6YjxQD22gTYKFNWeiagtaPXAv4VRVE95XZwCvHiVG4JByCL5aXBLXx31pgDfStCWgke2eRXqqpuG6B",
  "key22": "2cALYMmfEGCpw5Ku9ZWcyabnhJqEhcoMXGN9WNzrvQemrQWugR9z72E6p8ZtscaRXsRv1ECKCu1ug9NbP1Gdur53",
  "key23": "37MP9SKvxttEn1ZeG7qkRk4ZFDxC49JkdhtkBFBzA4EvhMtEV8JUeKrDU9mT6TFjUtowdeB88qfkp7DBsVNFZv7s",
  "key24": "55ZXbg7VA7x321jB7ZEwb7bTuC9RXfWfdvXBiTiA6ox3gHkLbq426eafXwLhb7UzB8BTGtBYnh5pj7q8EacMPF1s",
  "key25": "4bnARzewaSzuqN1k5Eo8p4yVcYPjYN5x1S1eMc4XWLWwYFNT2MPS5YbryeTcDuRtWg9dGn9DCtHHzAjmYzJKXM7f",
  "key26": "6hBdMrUqSXEsVs4idtFeCr2zmMfByXRNo3FsQmKzw3awPZ6eAM7dnrLuvCSJMPF8D8KFo1LmThJmtaWN8H8Gbuh",
  "key27": "4vhZ96sqeKHcDaKDnJTjQRPhMHeXXZoUu3SVMJoZKsHbHuSuereQJexjmfSQc9ie3uexJXmHFVn5NyvEP9XKriJv",
  "key28": "2ZvCCETKB7Qw8Lq5FEQLvc48pjEVGxcrrsBU9p5G1q71rBsdp7kKquchbj4iTqR3j1WJu2W3rgqytnCRRDaYdh5Q",
  "key29": "5WrSGA2DHVsSxoit12DLb23xgiKoGXDYU4aUfpoj8j8xATJhvFLgs84jThKVWEFy1Fgy2imXU8hZFdDHjGAPogFp",
  "key30": "4Bi41xQZycU96f2oiG3qbYs6j1atTk4deXov3iLYjahimrGVLXYqvf4rKTfZ2szHhjUc3AuDYm3NmTuSJP7WcBaa",
  "key31": "3LoPqmjTL2v9Ah71KzmkgKBfVLkRMVK43eqQ33mCvpTniKRYrWvZ2PTmN6XL6wDpkAc63kapgkJYnG7LEbjqBaX9",
  "key32": "2gMUNuV5PRAqWhf8o1LNXDyGreo6d2uF6SWXPicMYyQgpqTHavUURmdVvJMgtTPnvUKPUAPwzav48h2wd2jrJWBv",
  "key33": "5HfQ8gzESzsZrQgKpbezScWJHzv1U96L9YGJab3ZHaFArTvdxFGmTYXnZr7x9MUwwBgXv2DGUEk3VvmFH2gUVM6H",
  "key34": "5ramcHq3NH3g1Tb4BrtWzNjgdD3pRTb1g5gGzYee22Y8Q7ykwLWdSn99tAZWjj31YepsPDj5iJKtTHg5AwUeFp6J",
  "key35": "x3sWxvw1WqdsQaohKfjeE1hH9KEyLsdEVx1zDEHqJZMHS2ZH5p9X3kLrKPFvTRyyMSg6k4y9mrZmV9D8hpDMcUB",
  "key36": "3okcoQE33U98rizKaGX5DpdUuS3g9KiLcviAtvMyrYyY5vuQAyCuQMNNUvzYgiCQJVbdfadqST5x8vxceaEZm4cn",
  "key37": "3Jjn7RXGuPX4ErKHgrVxuPPpTvCX2fZPSetqFTTA1k1q6ddVyMRyN3kSttqReaz66FHhA66vZxoHpfKFZNA2Xf1G",
  "key38": "2MnXDkzMBtF4QZVgTqnW2wAF7zCURdtm2GBx4XyWjHT4zzJt1hSf6JtzfFtqWgv3SMbkJtfbZqpAey9FH2WrUPZT",
  "key39": "3mMUtmxftSX3NWGnQQ8ngWSYsasYLo3eC38zXQmc8PLonoBHAMon373EnqFuk8pKY6U5BFrY6btm64EYnUdLyLcN",
  "key40": "4XSpZdAgydQbpvgcNcsuK3WuKmBfNj79yk4PLEdBW9XJdMsy3RxarCfqb2dtqdDxaW9QRdw4nuZoPebFmWTQoc8p",
  "key41": "39TkMQkkX72g8NoNcDGmiQv2oQXKnzWMFT5ySTrwxxMKtDuWp4xyfoCWBBMgV1q6DZf3DpbMtnFgstifNBe8waMA",
  "key42": "246cz4d8pM9byDE8jRz3hCnfRTyCXxUYM1yDozmNS7sepSQg8BEU8vBzPWZtmEMUKZ1xpjqfwBVhaGJvJVG3H761"
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
