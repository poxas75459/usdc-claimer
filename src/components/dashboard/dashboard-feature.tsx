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
    "4T5DCWysqnpfZjqHxWkVCBio8Ex41kCisxw1k6f4HKu4JkTRWxffhBJUa5RiMNfgtywTk8iDZZm1TxHNEQta1cAs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TGgAZtAxp4e2sEyADFBAba7EFDJ3WFwwgU9ceSqBMm5eYhaVksJuTRTKMiZPzpHDfFigKQQ6iYY68oEm3QHBwwh",
  "key1": "4vCBJ7nWsLHcxzXqMjtGv2yGD4Mr4gn8gkym4tQ2CJZbCtBDuGpeiLxbpM2eDCA4g3VSkGyqboCH1ATcpMo5RDMT",
  "key2": "HYo6PxkFN2baHoy2j4AG6YKnsUEWzeWVDHMkCtczeSUEPLWgDyx7B7U3DY59P7R394kLVpzR6pQg8EzSNJYKd6h",
  "key3": "2nrEJ6GebbASWqD6ZKoGh43aT7seP7nAzBuN477y4NmQ2TgDMBgtbcg3bFiBM8us9aQkhTfGqEkFpcnfqDjShm8q",
  "key4": "3KpX7Rt2JsqsWSPfTVfvMrxQzq8SPhGoa4XKK36qNf6mn8PUYEqZ9p2j4oh4RHxVYjUjzvjLKzmNQg8JKubtUA3N",
  "key5": "3dDrE4MojTPfPjtSY1fRH6FXHsQgg8K3YWx2gSDro8Sy2NwswUzLpATx4JwzCoAvhnpNTFmfJ1yrBbN4T9wQUqW6",
  "key6": "2uj3rbGK3cq3iuULHuYcf3AemHSFdfweWgbb7eScLwNtdbdFSPfLE49mJtJmXnG5k1AtYHYdnThroznD3fofFfor",
  "key7": "4UyfbBdbikMsrT4uy2NhKkewJpvg27GeQEPqTGUw5AJnG86v6CjuK4zTk4933rFmV9yweLZstr7tu54ofv6pw3mW",
  "key8": "3ywwfZYyarUztKjkYwpfEueK9gWfmQU7KGGovrY9AeWd6Sb3VePqiaU2GKohghNPAWwj1QwkDbxLGMRa3sQDEMNW",
  "key9": "KRMaiPEXzqyh5Pan2fvi95rg78p2uQdYNgyrbTZHo6MBojnP2Yvmv31wJV2Ko17tNtFru5KHwFXfp8D7kUD1xNK",
  "key10": "2vAkLmhJG6wHGUB5g41D5jhWEYgtnUqp4n1P9vSYf1n8Vf16NbzoTn3tUACcj84e4zZVspPq8uTJZeMC1pnGi239",
  "key11": "3NMxNrLuiAGVZhfxB9ZAopt1wQkdMRM5k5HusKQC4jxbbUuQPmV3Y6WGVcYBQb552tzeEXQiXJfQmosdBSfUJa77",
  "key12": "rRdqJXC34z75cMwajfNCz8nvKQBrGWQGoAhwn9dq7nFqJjKCzAwcpqn2izxE62QRgDqywQHwhK5Bnp739nP7NvL",
  "key13": "5WUeSpWfFFYsZTBbQLiLkJNCbyCTrGPWVYgrcVLgUphFU45Y9prsXdtVhxYUPGfGrKsmimi7g7Pec77uiW3QZfer",
  "key14": "4LmHF7TmLrdxjWQLwCqmLo4SUVshrVxmoFUQy1cFybAF6eHC7tDmJ6mw3efJKahnq83XqYsiicFRvr5vfQdTPhe8",
  "key15": "2JQMNMy8HZaPu2Lrtx21x4oEFQPfUcgMgJbtWz3dVRcHcMcB6LtdcUx5SLn7zGUgFNwXxjJPFKPBwgsie8o8JxSV",
  "key16": "4JTXuE9eByM1sKFMs5gK3CGsZryL1L849njidnizKLRTRMKFZHFzF4YHwonJskNhN2WKaWs2udw26fhs7uxLQb3T",
  "key17": "3dmH16NQh9RkzmtPxfZ4WFb5ZiNZyNMLoQShX4w2Yks6u6xo1XEQsPM9Wdm7JruGNMJ9UXjRsMLaAduLE2VhcieQ",
  "key18": "2r41uK4zi4PCPfmYGWN11P96xNyJboNDS1WruLY9NTJn5k9KZzRt2iqN7uxCSLFkV2pY6kPCJ7gXurJvD4iyDZXd",
  "key19": "5FmcH7KzjLtgVYSz2igVZTeTc4Qhd7RCf7K8uVNcSaPyuqH92J8GQBXT5VeR3Gj2tM8mbLQVAEtKymo3dRecd3aS",
  "key20": "5ThS3ahp6YLCQe3Jtiy8hsc9xhKRyKuRvzWYx5xMW98PCm6fdHbUx5oETSv2dmgJt3rHoWfY9gvof1ckMp1nBKym",
  "key21": "5JcoQw3MqDSutH9HBEMHbAMW8Dm7YzWyaMPNBQmefq6n82fs4HH8KCkXhLnnzcPrkaKNEWgXfDhmXYEaGnZ6sJiJ",
  "key22": "hgQJs5kVaJiSocyXq4dkzUx3YxLMEz9etkkXvtvnCFHmQ5sdELDHw6jbY1mLheCvBQhhuxpFtyYFKGDrqAMtkXu",
  "key23": "2NLt7453yqraC7jADPZRm9Rsk93ELNVNxZapg5DpbsCdkZzQt1J2nCK15B9h5n3xBiBoHKecHQrcJYm849LWNg8C",
  "key24": "ekf7e817ooFpGwSzjZz5gKyvUs7iUG6b4vMbwQNSGWkw7F56sy3KtceP33Gpoz6BbXFDo6ogxcVeBXv1886MB4p",
  "key25": "3G6yz3z1rpCBCY1FVBd4pSxUjpLhKq1LeMtZwHGxQfQFr1puSiNehsQzsWt5rJMY7PWuDy42ka9sEdf224DpnFSE",
  "key26": "3JvqA19r2PzdAbwPMeBhUW6KBBHv1sDRxW1dm6ewz4ayaQaBGSKBbKb7DM6wJgtnA7AjMJnwdLwvXUPcugpgbWge",
  "key27": "38xphNe7S1t6Fh6okxBmjPJ5GpvrSCmJx8tmTSbVqroG4UoVRUQ6oebJrUzhsdyLCMmte7aJELyPsLdYeKGVxmQk",
  "key28": "5QXEhnSHNqBdsTXbJc53LFzvYHRs2SVk4MGCyidaUMFMRfMJ8TmggC37ChHtCCdhBQWMKSdqg5SxvtWcE2r4SffA",
  "key29": "4SeCfRhbVK1rH3GgN4a2za8kS3DXrEXQaNfh93rLYE1upfVt4D7gxHTFgRR4LwV7z7y3peS2AjdQ9jtkcZWwnoUR",
  "key30": "RBgdZvh8bhWrTpVcKouYoqm3UPGU8whYBjt4DqsB61mTBJZiPJBv79Povw8UDkqbkpmm8sW5Ri5WgkS485hmusJ",
  "key31": "4QwVHjpiaEcc6G4Tqzv5QiPkJZjzFfmN647g8dCMdbVG4xjT1sYdbKpjQkCqrWFspLK6Jfno27kkF1eQV6uAATV",
  "key32": "jC1erjjRB3z9gC2iuZPAuEbDm2LFkJQUAWCXJouMZJ69LitdWDcyEQT2RAZHYG2Udw4j9b7TJq9TwB7Vv9hC7ie",
  "key33": "AUNxzVeCTsEtqcSPqWzhwhbVkAENTS89rPfayAJn3j29U4UzK1d7KNwBdZsJACFx2VWmCaqya94DbZovQMdsCu8",
  "key34": "HGKqDFjb5Y3k7G9KMQxkLdDVidLbVGx8qzqtTufSD8MYijNGqtAiB4WicgfvYMPGzWsAk7Z9EkMr635sG6T8rbZ",
  "key35": "5h2tZm9BAovxLBxZJVx6MCXtrJYACN7UM1ZwXth518jnxfb8SJMjemuhGz51JnzXqBieJMWx1A2BpxPmdxEWrwDS",
  "key36": "2iTFChWMvrY3M7iGaNXC26Ek9QtbJWJsGS4hCLMXqKB6miQQrpkjFLqeWafQzhZSfWT3RiREcqKmcYbGv8MDp88K",
  "key37": "41Vxs6CLgFU6dsm8Xzmbx85wiwSJeSyCdy1NBeFykZjCmQfR8R3tuqa7XzrE5sCHBsArKpcvyWJd9WvgM9Kpaz4b",
  "key38": "38TwQzTkmM9AzKZyMLupnhb1wfvfw2Xac6Cq1rfSHjK4Jz6CLAoxyEbmvkYpJCPHNThriFZXsvocF97iA1P8gysk",
  "key39": "2q93CKCNa51WuuxwnT4KEUPqn1if2mj86Y3YazJLa6RbdL67XHUjE3SrvfUKd617r1TSUnhrZ41HDq6ykHktbi9r"
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
