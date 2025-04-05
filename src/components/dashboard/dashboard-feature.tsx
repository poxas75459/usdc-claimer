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
    "2wqtLebaNPRgAqgbtduLT6zcirgCdgi7B4HVT2yo7qHrqxBCofcaGmiSCcjPUp7ZZ5pqCmHxULmodzHs6AsDcVBs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4W7wuydXDcoyTp3aMXtMUux28vXtwf2WjhcxRRx8HZfWxBvavi5T9J6BkNyGEee8CWehs87EDW9K5PS46PN5g7JX",
  "key1": "2MJzXoCpFrsbe8xCscxmNkD9bQBD4JiqGehvhPWwJF3R8wsuXJVG6CJXaZxk2fUrT1EEMzAjCs7NtnTvtMZqN576",
  "key2": "7CEkNXcTy4SqBwKn4ZRZLRCCnZh74tDoFb6oaTFpEpxBpqeS8XzzbxmpuZe2YFV9FNJWUn3Wxj3K1UYqkGs8z2d",
  "key3": "7KJMHWqfjwU6oxTLPfDkbXh7jofmnEcqGQQrBBfbWBkBtubR34oD7zBBFRbj2MtTbH4g34fEpsJdjbQk9fo7Yvr",
  "key4": "EWiXcbRWGjScRX4rEZ37dEHKLUxLmH26SsZxkm64H2gwVZNhodxt2FCLmuUt9GL3A39TuL33WEAUuYyUvPi53Zm",
  "key5": "2BZADeugHm58QmscwzMrCchDTLC6nrLRgQBF3bhbjtaz59CfdahmCSTR4gkBtuqtyXCKM4K4V6Vf1jZkk9AnmWri",
  "key6": "rnmFenCKRanZWY9MbezSfUbR96GnpHpBqjJdCb2S3fDQVFKaK5R663od6YhZic5MSfvfaMQ8rEeFso973pxHn5y",
  "key7": "3TJTaByiZ96VN7YBpK8rnyNrd3SmwSCPbrWBjZK7FRxKVhnGuuKnUw6VrczAY6hab5wqz5wXrA8HZDP6x3aAMLSS",
  "key8": "STSDMfQGxdpN3j87Z5E9g9uPCbRBWo5xeK8KShGKNQabFmJJS8fFofNXoCgBHREkKVbNqkkrnN23mHkqVuP2cxq",
  "key9": "kaTe9LQ1mFEH6RpVRxmiNZk7jB9rAWmJh5vKm6fQ93GSMGvi2baHxCkzCiZ2VR9L4gWj457G2kxdociPLWPGtzD",
  "key10": "4Xbi9xRLEqQEGjHFRuK7T2cq5M15zFHrbRTiVKfPExK3Z455pjidXVjt61WzgDrTDg4dKccuYD4DR8ScmoLAFSAv",
  "key11": "2iexwtF4VxbjCSrJT2ESwrnSRHnKRQamLze6EZPaBobBrfYkPTUJmkkMn9cskdwCXHcYAVKQnonpSGQW6MStWiLz",
  "key12": "41unjuUQp6snHtPXcJUqNYdiLnE9mYiwL515AX2rmbDmjST1xhSjwDbT5Nv8fY1whVYg4aH3HeDFpyYZJZzTbCAk",
  "key13": "8HSf19Evr6NN7o7dRUxej3d1MWz47obd6FELTUE3SSMRuY8UsaaDn5g2syfsKKrzXMcZgfrpJvrdksmvPxqA4u3",
  "key14": "3yE4MDjjoNiyXbsF5qrJoTTSfhAPsmHcri2JYzrQNkHqbS6VGWZKXigLYWaG8xAvG24eDq3aHpFquyz3gt46cvDg",
  "key15": "r5hJA1kRHG9vEM6fsE8FExNAVVjTPdEYFJxEWDSdkXfg52EAgSUHdPXMzAPzzaQSB7RFTapGvx8QAkButZjU7oe",
  "key16": "5ZYhwhg2BEfQRRZYhoZpyw4WuVpXP9sTFxh7U6xnk5HdYvp6mq2qvhHXp6YN6ss8WZrQFWHtM7E1AM3t59kXavrs",
  "key17": "5gdXC5v8d39N1dt9Wk7p7mFGJDZNvPgSe1m74dX1w2Zb6wrGPq4YTbJR6nX2qdJLz8wt6DtY98XmEh6Kh9aB3xpj",
  "key18": "2fbp2zRpyD75GV1SNvHYzfsgKoBBRbabxDvAbnqX9hXyWXQrKhwCPQP2zJ1eqpZwMSduESHA8eMAT7ZHtzi3f9m4",
  "key19": "3HWqasiRnTtouZ4MqC48VPZujUUa4hFP48UoXXfsANVcAijnV3EEGvvENjBhF1x8oZ2AD9wrScgrd6DXvVxNwuck",
  "key20": "mHaEdBomZpkJftdQ6SfJ7w9rAgzbSRTXEh2gqYXcWJriDmgRUrsaaN6MBdSLeV7e3sSXcLUR9gjhzsgB6oJEf1J",
  "key21": "5rGP366mmKWMV13YC9qQ9kHGUKCpbRZG91HZwTrfaEFRxqDaE2jsjRJFQkrkfwHCfyJx74Be8vKCSAnwFfXbta2N",
  "key22": "4tiVTKZECJTwa3b6UCuGt6pFcmD7QKycpkC9fxKhMa3B76tPmVQZPQQd2cZJnBbYP5aBKAXDQSTBE7bfNq5BL2vD",
  "key23": "5LByweuGS9moaqAhPK4WrqpKsR29RSVjCkJHCQoJrtL1WGktrawz1TsRhxqkTDq4hHRzGsE1kodH5brxWTHtjBYf",
  "key24": "63tHkx9ocaioayQKywtd1TyLym6sXKjkesLMdHyJGnQMQjdDmJBUhu9DhQHW3sqY6KLU3me2rhq2SJ1iStSiARsn",
  "key25": "5DxZFTmdwp2QpYH6LAnBbQ6Xk6D2Tkwu4T5YeL74kXeEcjqUJt1LKF6Rg3B82jwshg3h3HuHnC4o1LZf9beMmuuE",
  "key26": "Q3VaqPeBwiEeXD5Vp1KfHEPnNEpyMiYrTJ4VntrfptXEWPbinS87WUi1rknWBA1WHKNctPFX1BDLRJF5tM55BCH",
  "key27": "z8Akz3boCjpWXaef812tRTjthiNNe4y9NwX1UR8NgBHB4sypHiUt3wdQBTaUkkY3SqNmR822o98i7Pdrdufudtn",
  "key28": "4A4NWCFvtShusV86oipdeJZ2tJLivTEuycYNtTx7AeLBjWRCqnjD2sFyricqiwjohstzeKQW5MXz799Gn7rwoLjY",
  "key29": "35kr8Xc5uzQRtGDtBLatyUYztawsBHRzmwkcvPJ5fKrE21KHsqMRwS8ihA9j9QV1ptuoGiZZY9bjwZkJoqgNNkw6",
  "key30": "4azyQRpUZ8iuaZWmrLA8JYFnYqFp2cS91eSpLYWQ92rbbCNfxFpCNvxackDvD9sjQ76BEt1k5oAAGPJVLUFpn5E5",
  "key31": "41vRtGtkfVeFMMYi1SYe5UVVKgLpkPnxg9PfcdZqvUcZ9MZfdayMQGUNQy8ZbQLS2FCQquLSM9hvrKZR2PvCAiXx",
  "key32": "4kHDmxZTgj5bSiu1cezcDrqqu5d1MW5XydhazkF3v1rCwPKM2B4WxADe1j5eXcksyCsZ9jz8EwtNsWun5JVupeFC",
  "key33": "2vnzQaGp8vtGJ8uFJnXhf3BP6dxReuFjjcw5WS3ezSGSBwo24yYqggh6pADtzVSZ7CdhTShVMnq8UtCQAQVGoUMr",
  "key34": "3Y3k8n6pCVgJAfwHYbMrWNLDLDFEZ2ZUvGcboxUK8QSA1Pdz6A5cpuy5FPryHBphVBns8NMfqDFj6kk4F3hvqpcy",
  "key35": "2WjjnN1BwtTWWK3VzFXsj4LQkbEnMFWPr1srftoJ46VqFiUdp9Xh8k6CjTZJhygYWPpAR3muwRq5z2mEz2puHTWN",
  "key36": "3mNrLAMQbUMZoTa7F1uZ57phmWscitiUUsfqz4Ze2e16ZCDdQDAjYLsckGujVGsYmoQiBeonu5yP9vZRej4Kz8ZE",
  "key37": "5BAr6G38GQ1PYDBZrGj1hqtqYdL8sDdHaEFMwRUkTBuXhxTZUeE2JbLWihDmPLjJCGR6bJaxqf682oRGTj5UoDKF",
  "key38": "47nhqch6xZdcKVVAMP1gB8yHhnEHgGG8y2WYFEZipVfC3BNQfnYZur8VF7PNWzGxNUpC8urcidgWYKRVnpcKpKtb",
  "key39": "4swN4Njciw2V3p2CjsdLnw3tDf4xRy5WEB24NV7uBCGx2mR1HvRuZCnqrtt3TamXWisrhSsj8rgt5LShTVjc8sqJ",
  "key40": "5zzREbGwyzHheQBufEybSZv7cujiVRhaSMubu7XPGWFtAKsJHf5ueAfD3qDzqBk98YjgY2SM8xPC8AycPhcGiEuf",
  "key41": "2QLFbSUSw8MZsiHpQKGGovEE9bq9eLEWmmCRphKCBg9JCH3BcwRLsoryvcfYuVkH8uRwVyMJkzFFen7nsHvwaBFX",
  "key42": "3Sqom2fmFJRXezsVZrDvxCDuDoFUCbRLjWozYyMtQEN4QhNfbB4b93oFvJLSMPpNTRgQZyb2DDUZHh4qnSjxrRoK",
  "key43": "43DGdkMR4mKdgqjxpxYL3G4ak18Ci4PLVgqKzBpdSupKSpChSKKc4HAawM58tV48F6TKiqEQinzEf2apcmX7Ruku",
  "key44": "24QtffeP4cpzvsjJDAy9P9kNGvvHfoB435KjFGVFFnqofhfpHLeN5f8AbswqUV4ZEGzqwcPW7Fgq5UdQaJEA4L3F",
  "key45": "5CYGsNUuqa5hgx8euWnnpT2oAjdaa3B9xucetz64Dctmh4J4QQGF6xKNFiUwnVzEvq2vfJHhnhz7dMoUNpBNPXRz",
  "key46": "dw56zrQrGWiBrLQ5xBZbSE7n5qnr3MMjVAzdCnpHbQN6XeAHxxkZSbTD9DHa1peVnNCHi6WZm85TkjSu4oc1hPN",
  "key47": "2V6xBs5vvJY8ipY4RfWtrJwJ6yfc3kPzBaepaQsxVwi3WBY8L9JrnuQrw9NEoLFBBABr6KjskydZEYzTiXrBRCe8",
  "key48": "3pxHuc3bG63vZ7oYCKAEG1GUG8YynxHeSQaCH7HHPhCtEH8kFF9hVw12hrFpAQvE1id5wLsqtZzKzxvwV6LrWvWL"
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
