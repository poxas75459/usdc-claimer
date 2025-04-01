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
    "5feAYVwEpbeYwxCquUeX4YGSsKbpyAixnV1CTAjEwAYjmHN7SdDExHXY5tj67KXwM1DM9HcPp8XvTwmBNKxfdD5R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iF9vFjMqqM2iweyVoyueupSogmhM1sShg7E995PjMVNr6HSsyg7re4vn2voV9NrBQrboymj2Y8UczM3UsgVo31c",
  "key1": "2GPCXcc3pQSMPCRouaccLgWXnsgNbRZnTQst4F5vQLRhPxRKhdSAPGNinpxpUuBbdySv7aCuPLZNs2Mk6b2qwHAf",
  "key2": "2wDqcDLTnkjsM6KzDwh9u6v2L7wwdr9d3qKwKQdYaNhND958naz8TAZx4Uq9q5Hsr7g6vh36fUpXV1a1AZwEy5VS",
  "key3": "m4A8R72ZinNwJPDMJ5gAAoBst7hS3ABQAwxQRBcGs9L7KMPnV7rFKEgei8D6f6zvU99idnnbR97sQNEJJvZLLvR",
  "key4": "9QCujm9N3ntXowj91xVLuMLotnDuHSeGzYWdPXKCNEbXMb2ppbpv5h9u7k3L4d4A9c6jwT2rvAshP69uwGwYYYJ",
  "key5": "4KuqHvYs9yb8eyzrDnrGpz5yGSuoa97D697hRYWzCoqLLyZMEHLAwEAXknR6ySPy6SYE9CdFek142SHwm3quAHbv",
  "key6": "MBZ2HuQZijhWKFWKzuPiRwT4xA4K485A8WUyjW7j2Ro1RtJwXwRmb8caVvbjs4c8p2xwauDBPGCWrqAwXndzgwG",
  "key7": "38HykNbkcV7o1oJxSiWhj4cDkzys7Bp4ueDdRTTAjuf1GWr8jWAuk6CdK6BSVPDhM3FtTLafWB2yFUvj9MqSyz6U",
  "key8": "2uQ3p1urrbhU9rrdRaoX4aas1sSm2tgpM12XA85XPQ8NCF4CjJPoaMxyrJV2VSTeLH9AX1hzWb2YGG5LB4NQ2kqm",
  "key9": "3tqdSqLFa2PmxrvMiJpvLtQxTXsMSFWwGVZnHrA6ciFqi1QYwbJ7vynjwjKajpwUxsd3pURGRQwXed8drv5RZAyV",
  "key10": "LhnxTye7RByfEskUUtnbXdJZ2sY4Eih6AZiMPqvhztz1qWVHV5bEXpBnaggCDKi6DeoYaRL6Z8cdWBAfPuDrsZG",
  "key11": "4kBXzbgjoJ61kPUt3KCwFix2MmZsEFCR9RFsZVLbzGzkopxvkxYj4WYrZXYG6QSHFp6XwFzQ1TfjW2LmPbG3DGS8",
  "key12": "3QMNRVcw9cKeuPpDv6U1P4qkAew2SNmVe8FtAiqYrwpGT5Y1zMfSkf4FYSBBgFkADJQDfxhEpsKxHCpFEfJas81S",
  "key13": "nxtHLJNjans9nLxyVkKQm6jxnTW7EsRR1sFF8Zf3baUL5yxsTcebYEsnJ2256KiRHBPnie2TWgy4WrMvX4K3v4V",
  "key14": "57CvnSJqcZc34jUea9be7tjTzN1AEHFvvDFJveGcX5urRVKbYT7ZMXju1dzTejW7XdFDfXTLUU7Ed6YxAq3ZpJ8A",
  "key15": "4iphg3CKWbjB3Kwqrv5tbsmMWAuv9UjJ6cmCnhHugEyHsNm84s8GidS2iWDTA1Xqyq7EorV2qtHGsPoWGBm4RiAc",
  "key16": "3vqK1Nx52YWwFzHmfvU8ue8ibSFXVmf9u2tDVKTin3FPTrdkju8JSXucfVSn8qfB5mWnY6GY8qcFLUeLmBFMS6uM",
  "key17": "5WctvrFyDQzL3tGnjs4unXrkSaKLyB5xYkkZKtLoRcvoA5U99vuh75vTu7NmMkRLd8VFBMUZBACg3GuHCS7srinC",
  "key18": "3EddhYGHXgFHdDZRmmx5aY8F4Tpxr1dskNXSWXdEKtpvUj2USEVxxAujk8dNRz5wu2PEAavQLQTX4CFwrShJDRk1",
  "key19": "Ha3KgF7gH8Pov3p1UYX6XB4Hex6K5rLD7CcJt7BtvFJrRmPMuP7ntWLWR3XgbcxgjCzsG2occiS6dKGzkkgJwun",
  "key20": "3kSXDvFrd6dvbpc4B37s5GXSrLtaUXrtto8ekGX7fRLA5GxZuQwbTZ6gYrWDtNdQV3Axd6e39SjPJ2TCGKRJdnRr",
  "key21": "57yn4z7QR93vFWTNQ9jyb6wZkYFaSBpHi6rQui1Eg4Ag8TjLSpcL3WdGJomn9RkRWJU7XYaAfvi3MHLX4utTz6xi",
  "key22": "3qQDsEihvgTXkUHHXArA5aDwB6MnzqhW9v9toKpvJR6Egfyou9fbuqwWjmDbXes9pX83KXHVoZfwMz9xA4SnK4PK",
  "key23": "2QKHkt7UqTdNXKWKsBeHqzp4ijiKrcSn2Z1Mu9u4swpXniWjFbdcR3LnUwkuXo8Di1bVmjejisx5NZweS4rQKaEb",
  "key24": "TXKk1EGBqTMoZjdVEhpt285YjyTfSUAAe2SNjFU2e5HYVkuxZ8Az9pCz17jL2EDUWP8qwwbc42L6P1erW4UvNZy",
  "key25": "56ug7qLoruwr3DMfAF6BH3a4D6Ri3Ufp6qDQqpw96CopK5B8zQajXgNgy8tWtxkKRkR3QQcv5kdbRTYnXdznjsTF",
  "key26": "NrrCM3oFk32w8gFxYGBhabtpAuYJ21dL6tUCQfy6828tq1696ymNAUg1ZY13sK9YX6MQNW9EUX3z1uprRdBBAa9",
  "key27": "5JerPAud6W4WcydmQ8vXSbhP1eSP51fPGrySybPFeJMSSQnta4PHzUK9BDWcGZaAhvyJahwDpzpcs1tUUqU8yJKL",
  "key28": "5xHSga2T8MJzfmxuUf8uaG4k2q9p3Y7e1H7H6rePTf8w6gyqL31iCUvqRw7fQwMird8ZvvVoBPCG2tLq81z34qSb",
  "key29": "5PSV67azYNpQ2V5xrkxEfDH3pSAW3cxsYvri5uUdQG7FomCtffR5YayYDrRam5NmyrN19fMTYq7HCD1C3sXbKjhP",
  "key30": "3VS7vXKd79hNDCjtDrxkWZAyzhoRxsv9A7q8oGx5NZNnqWV1cVKtQN4AtZ6KFSPMeGncmntPSRuia8zkYUvyuczn",
  "key31": "2HqGQS1PFzHLhtA19sgmHQxiFcDCmnMZdtCv6ihAsnu3cwxBoXya2w8mPkkkNSH71L6RuRS3yyJUWWMnDBCeATRB",
  "key32": "4i35QpSUr4jKCUYH5wxjx6NoxGQ5KVE4f3mtPs9crr3N58kH2gmdzzog1wVTdf8aYvW1Cz7ZiP32yUWBd17HUUdQ",
  "key33": "54miiHn5txvTzYnieTgYXcRBX3zv4bLCWVKRsdAZznoXtYBYPtMog3gL7hmmLxJPQzHgTintvzbY5QoQhSkd4djR",
  "key34": "5cw6wo9joiTKJTf6HogFwnrycp2WSKqjVjWVbjEBWWTCSqt8H7K7GSM6a3wyT5SvA4mbVTmvb1vntANaqYed8ZFX",
  "key35": "5r82mq8tm92keLC9XcBUjd5WnKB6cHDDuCSrMKkFEAb4KhCwH6jCx3bcLurseRoF39ANT2bG1BkLyomxwmqPgR38",
  "key36": "3eQBzqankkgsr4DWD6Rq1tWP3zktpGSDgT7wcfouFNpFsED18rrr1tXaK1JH5eAcsV2Pu3zxziDaGqY3LfBsLhu7",
  "key37": "4q4xSV6rU9Zci384BU9L78Ly5mVf4aFZwzBgoVAvaRsu43wXsgaCgRzCBbvj8p6QbREQPqYxTs9LNAfYM9c5rPok",
  "key38": "4Ar9vUXqGYVdzYSbGBkQLuEA9qvzUGjBydrkMf25kZ6uZSMot9vawcZyw4bN5WF3WRm7fmymzDhz2WaDnYas8vrp",
  "key39": "3va3ZeVUkAtBAcgRsELXpu8q1b8SoWasb8o6RUeEg9yaWJn4jdky22w9B8mJV1HVNUoYbNA4gxJsqKUnVGBuyk46",
  "key40": "1ZjvEkmNmcosJ6MJEu4NrX2zgVqzkLg6S4Kai6JfWBFFXvH7QL7YL8VTTKcxj9W6DBWfN3mdr7fuWhLnhXZ5ncL",
  "key41": "Pd8K8vz1Due1wRq78u1Mgp3hqXCC9JKq6dnNWke4HeBzAp8W2fxawndAkBi6CjEx9YyALhA4fGoNLTx5HtNGT1M",
  "key42": "4kmU6cWMEZdx2hsZmNkTYsFYAjDCKaFjMQCXV95THmUNuxCezG6cDPpHtS3JqERNcuLvEEeXHw7Ex9yTM9SRJmZ7",
  "key43": "3newB5kjT8eqCg9LsAxY7mSgyBasNSEfgbRT6V1zSVEE837QFnHRU74JyHWNvsZZnp2EEoCqq2h9xocaJikWvE7u",
  "key44": "3yhzBECBkgSrRuUmsLf5CLqtxAKq7pxho2fhWttcvctrHtTC6rFr4WBUebrtyhbKUzTqnK5Q5tymN7v68xtF1QUx",
  "key45": "458d871AQH692caZXVzp48iV7vkbCrhdAVZuKu76xBjfrjW31coHfnzYc81TLnBeZsXcoPiN2To8tN3XuCa4NEq3",
  "key46": "4xTCNJK6squPzupqFuTbCZZMz3bCoaHZ1vr7EWkK3wqLXmhFTG6RpbiiL395A3drLsQNTSoTrpMMHgJehLXiK7L4",
  "key47": "3aMq6KhdQGLpV6L1pmAXqYca4JxTbuiE8sgP85YQy28QU6vou1SHytyPDhrR2kCHn3tZPqT1jwmxJc6cLHQ4efCd",
  "key48": "3PpLxUgdyvAGi3ZXsh2jgGLyLbEcxratRtYJXBeavHL3YwtARa22FLL25NoeHKypduEc6eVENkS9cERcyaEfJf28",
  "key49": "5ba1YdUfuLHRs1WhPv1UHGaxTq6VseMCGc8QpZ5654w2tdvwj31Qg5RnFhh2SjgfVYEUYR7QRwj7nbZh2AV9Zf5i"
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
