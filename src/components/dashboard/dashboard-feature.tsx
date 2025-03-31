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
    "4ZBbmGmSBUjiB4hXMeGNrsQjLTUbuBh7bVnGtUWcPcTiQb5p8Y1mfv3676AtfMFVpoA88bQ7CLuqAs3YK1NM9ahr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AVS9191VdncbFYrVeZbQTEqAGKZh4yG53Ls6TsswDUjm67HbBeLDadj88qNsBJdZsFM412irN5n2KAJVY9v231U",
  "key1": "62zcZpnY8u4VvJTpTrNMaDxZXbDBgxhct1h28VdyADDShKNBn72GWZiCmYaynGX892512CwBEERwjgqurm9qZuGY",
  "key2": "2DEeknkp21YQenKyaaayydVerrrgTjixWSRvSN3AuyZjbhjaGB7dw6S3CtuFYtuSfUDBv3Bhoj6kgmXzKJZwyvjJ",
  "key3": "5wS4owtMLDn39PDxfUiaHT75snQPtpKP6FnwXjfSE1KVzzhF6grp7qNZt4MPTET3p74b7oBe1CHWfZcP1Qaw5kTM",
  "key4": "4P31pNfZvUGVQnWgdiJwZQR7m4TtoxZmXNtz9YE9uyCqadLTyLYbZMwCvWdpiUz2JwkC3KPgHnvVYKGGzYZciRrk",
  "key5": "36s9rdzT2MiD3odjQA2rxhDXRd91KfZFGFPJhgModSLRGQfHYQUwC8jA3vFUNzSaLkrR7MQTgCejUXcfehdPthc5",
  "key6": "3bUj4e5Vvyq8otEU8SoDbk76emENG9WcTwtyRQbfbNySLXyFJTLF2LNBTreuyM1XHJy1324cf32z4wXqCVQemFUD",
  "key7": "4XBsr8dhMu8E4m58PJGrGQWejqizzPYQ8JWuXPP4A4Rt1DZnwd5dd3bTFQ8Qxn5oZvbcRimWcx7xJ8fDtVg6bqyz",
  "key8": "NaPVfJM8BXtmpk814eA2i9rbCtbekbLJSbyAghkMFH4WqiwjVC8AU1RnsWhquqDpgiQtuPQ81ktcdg96dSxcVMN",
  "key9": "4Qz5jckY8WYgodXmZKUmMFEGfnfESkjV8GG9g29EyDXNzebQFL1fCjqyjPv8pKUqcAvu9mepD4hX8UJntFrVcQUP",
  "key10": "37si7Z3DbcA6sWbCLLhh4w1xE2GAnjQXwmnT45RVLGq79FwGpLfAqp1Lx84cX1gfhoLKTVeAymeCvBNziGLxsiVH",
  "key11": "2p3ZK4HaNxYFmMtDbxfjdJEAvDhBCi4Y77wfDZcu637n1y6d2MpvH688mwb7NpqKMFopTg5p8t2BXc8tkAPovQYf",
  "key12": "4LAvyHHpWZrsNaLA98aw4oCzqnrnz2BS19mYZ5XEz6oz1pviJz2kUYeBXoAdLKgygFxVXeK9FreyknYw8Y9h9VGA",
  "key13": "DerzyTqdRuyLXzWVFDPmR811bekkaXQURUgDnf8DnNJgzxR5vFcgCmfPcujs2q1fCAkSN3GTZFv2WtX328rBVZy",
  "key14": "3SExcH5AcogC5qXEaX788KA3HMRcL4wGWscwVraWD6FVLzpB4iuy7rZM3RaukTduWDjvqY4wYit4yWoNuTUf4Unq",
  "key15": "4DStiqvSAJNJQu7kJnN7L6FDv9kXUquzaaKycPp1vf2MGvSCA4mP4nTc5fSNooRGvMBt9LiSdccd7XR44f4hr147",
  "key16": "5Nf4tZBUaP1oM7p2BZ4L8srqzrTtsAD7rvNkwCZiJcVFcgfTc9oXghi3pNqiyfQsmdBoUwBXduzS824JKxrEQKwZ",
  "key17": "38QmrQmCPocaT93cyfPjtJWpBXHtcY9hUrtRA9KGk9hcmE3YqRdDFTEJCrHvyBk9jT2xRLJxMPUjGd4pcRkeaYed",
  "key18": "3X4zZfB9ZXMtidYySmePxVXRecHYPEeyr9m8vAP8sMGKGMtgYgYRKUdhKsNu2bnK9T1r4og7us6PsaCzG4YvHoRD",
  "key19": "3kvbVTrqgZpB5bD8Y9CZxbEaHjEGH6Y7kapfZ1s2k2sfABZmX2AjqxZz6iPyJWfHTJS3Tv3XmXyyD5EKXR5rMRrj",
  "key20": "38BE1KDL3hoCK9D5gXpmZey6hwQibAmDGTqCgtJvJcrE1KDGhKFr7ikAUeBwzgnbPxduuQUFsuC23aavLYg4DZMg",
  "key21": "47N4JxuaThwQKPLoH9yqgeN1uKSFtpE7HJQFTawYKg6pmvWaPfe5hY7TSqFdrCVmrNTjAwMgvwWnqu2XU7oCswSF",
  "key22": "m9kY2R6yFQGuMCSLsogvdoG4MfUXzZFLK9Zbn1JtMxjy1muTeDQTuSCJRcfQU2FtUkCTzmb6DTLc2qJuLJiAPch",
  "key23": "67jeFMeyY9RfFyUGDPX8GbGNmTaNcoGWxw4Z6gQfdTbY9h4jJFPwSdPHH9z5qYvrpKHkGWq9eHekuuZcYivMjmHF",
  "key24": "2GMcEmraLsq4s9RgUrdLSj5WXMijTEdAyBvpv6uZSWS4BQ6BY5SPxocq6ANNTq4crCT3cfmbYeRWif2PYeavZwmz",
  "key25": "2JMsofPjPM7GuTKHQp5sRBVqzbFCpH2ytCjqGVSj4yqaJmgVPsMrE3jv9d9N5Jpt2owYAGhfGEL2LLp6GLSWpBji",
  "key26": "RzrYtcGxk9mceGMtBwLYyNx7s2Empng9rzM8JiK8rU18DczhfDpmVjrPhrt4kbVkMXrj21d3t96QMXUL4RP34Vv",
  "key27": "4aaaYN7awCWrWBAWpbt95qc7efic3Yn7o25rPEtmhT1xbq5vYdZzKPHtTYWJJzdGL7vSQTwAGxJa8EaaQ1ZeyRqp",
  "key28": "4k17HdT7emeHUKA2ukJjfu3GWNkdk5yeBT9FUEWP6e5mFUDag8VidcvsY3M2to3T21X3ChpuGuwrr1zjzf8xACzx",
  "key29": "2P6riZu7V4iamHdn72j8wzPrvChnc6CED6tTCcCK8PR75cLYMujTUDuFTgaYgNdQn7UDTYH7A5vsk75b6r1mzXxL",
  "key30": "5rrQPhFXikUnKmXhiNqutrdp1qE1HRosYs6s4fT26uwqQreisDiVPcSQfpqhKEykgVbt4g31PHBXxcXkxbZoHnKB",
  "key31": "2VFJtaYHzFReETJqBrQz5mmBHFA41MkpLudwVWwNCTi9kYpTKqutA8yy6gvsRTzE1DHQQrnGeeT6vtkF7emBB544",
  "key32": "66iBXLrhivyLbBxqewWzjYbSJha4zCvVmcmHQtg3MGRhvTUtiRkjvVeDSSgo7YKmAkTrVEAWz9UkEKLYEdTuiVdF",
  "key33": "3v1SRBPL6SyMceKovw6Eunc84r2VsGAAbdBpkViMDBTyNy4Myi2KWK1K8BrDPKofLtSTWcnGMkd69MccZyzd23f5",
  "key34": "2TD6kBcZHVMVUkjubw8VJJSfy5pNJLdkXc2htyFkJmnYT5de89ngasknaDiyKbYF7KVAwahFZAPCXEE8jseYXQut",
  "key35": "BuWKn7P3LhrSZGvvZgjYcZXQf7wVUfqKsm9WjtKbnag4x2zU8jvNqgrrFGqg1XxAGNLvapX2bYqBbcnQxG7URQQ",
  "key36": "4MnfiErVYpj186KEPGoBmCri1SD8JgEW4fkthq7gpWvV9SiD6J9WDcvZSQiwGYAcczxAiS88jTe1vDciY5xtzcrj",
  "key37": "4Ki53RGR2kmLjff8tF8KTBCn2DiQM5to19ncKbib7LGpvxZ6yTfhjLhwjLa8Bx8z65EJ3uDZnusMYbTteBWkr1mg",
  "key38": "2SJzkfzcRyCMwD9qQGXP3N4Z8t9rNFhiVD16qZnVeavMQsD6yNwAfXRqA1NELGD7oG6H4Y3QrUTrtqr8ceZjkGmp",
  "key39": "4vDJjGC4kGRe6fJZUCARrw1B28VjS7yHhGLgddsZsiu5VbLqt7XriKscHGPSTzxn8uXmkPebf6BvLXddmi2RK1N3",
  "key40": "xFwWSkvZrdc3vdxcYjuwftEf3uDaoUMeZBCMknr9WHi8rpcYb5mNJrqCDt9wxisxApgGjJgLAgvaqg2peTw8VLW",
  "key41": "2C1Pb7aGrmyrpvi54wj5hLgNKGujhxthSKyQdKmtAigPQwbGiWaWNL19v4kaV87kxMxW9v6bQq2KNjfHJ9YDmaV",
  "key42": "4MJ7mGrjuq4biJPSeXt5rsJV6T8SwQp4hjyTg8ssX4J3zto1iRhkTJRXyEkEQWt2aW3NopJskiKQF1qNdXYyAaHH",
  "key43": "4HbhSHitASSbESTe3wUS6DHGBWaBXhHsmQeuiTQb3W5sVSbrKpQkffc4YkfPTygTop7p5zhBFU7Vt5JQx6TDH8RW",
  "key44": "3aHLeRMufvLgrPF3e8AcsCC8dj9KsoMuwxUwaNJPfDYvwMVkvjAtJRKCndfDW175yx2Ke2HtkCv2Go3gevikbT2Z",
  "key45": "kE4UntfbVJnxg7FjzUxKJAWJYimZaMVtBjf5QG1GEXsU3kCciYTxkLQhUaQ4dcEaHKG27X36vwa6CBVicb3KC6e",
  "key46": "3sZfByAhPSYtyMgSiWrTa7jtLByGpzdPXRsXkoFMwaXkF3WS74xKzVRou6m2X2TgVPCMy9UL7pPQDTMLjvCERXjY",
  "key47": "KKJoxd3eFCpiuTqyqMjRXPejEodcwiDDEnUF8GvT8513JUuyeXJJ856qAzGFb9LALaqtjtSA7WuKjce4yxo4P2T",
  "key48": "64RzLUh1xoxc1gPjhuhaAUPP9w7m8VUwnH4E5eiyUgYXoC5V1yiH9vukEB5vmzm9tLU4oP5JcPi4cnoQPjKLohHk",
  "key49": "2AXzKxEA4h85GW6Dg2GfCZPfNKSjaVkfkHuRmzKxL1Ybi97rV3CSqiYuePw2qhypfhqE1Rd8UjKNFyxhynDrRuKt"
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
