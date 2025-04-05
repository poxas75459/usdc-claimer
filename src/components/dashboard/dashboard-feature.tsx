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
    "5rYPauqtQoPHrKi1aSfMbMdv9AZrV2vYiL1ttF5GsH645bwLYEZ9QTXdppwxafVoyF8vdC3h2EstYPPgGPFgg5bY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PAoyzfFA6FEKRoTzx1a7ay2eqy4xB8mYyGZ4P2oHaEXgJdd4JykwnhqLubUz9Mo9DV5t2GaxzR1umcEHHHdwSCg",
  "key1": "4Q7QrscQYcJwKDQTwUW19AtrZbBUmCfLdA3YxeVtph985z6DpjTi6jz3hsRxErs93YW7UTWPFtkF6CKnnsq19csR",
  "key2": "7jTnck5ufXfbKLA4HjhxfBdfQ2X9AeckjoS5Hc8Dn6qxhz4t6GbmuA5RmAkZecFVfMYoYJrfBkf5CoC5HSp5HbB",
  "key3": "5rLQsP9mq8rHgUpy6DdoAu9cKkP7Kbq11BRmZzLuDtuRBih1kgMmrgmXEAnHhib2nNyNVq8UPoqB9BgqK8kqcHzc",
  "key4": "2BKAv14AtefCLNEiEyx3JjhPCM6maC9bo4rcBT3KxQ1ibgwFDCJXpt7XTD7FT128ijjq6qGXMb4DYZSyYqZDD4D9",
  "key5": "3XJ8So4eNmbffzicKHD12UbY2HbLRwr6D65RBJhFd1UsKzkKY2MBakn3n2mUB1qrTeN7D647Fhgj1MrJeKZhhKRp",
  "key6": "4bfrezwNdxKHY9gWkEYnxJUcvjfav6VwSmvHKha6PfP4xXRXosGQS8TA2tFxcnXrQAk8rkJKmLZG2P111Lg8xpP2",
  "key7": "3auezKzczwrh9aLo6kAP15gTjAwQTCrQT1opLi1xC9cRRQZ8KWDL8hiKzzQ1UMkHGQeBwbbU1cfWzkZjp12V7GbM",
  "key8": "2pS2HpQra8aAmmVYE2iWVHxTnq7WwezsLyqMBtHZbTuTMhN2rF4q6NiFKNDSmsLE4N2Qs6wLyNrHnsMhUQhLP3Vi",
  "key9": "2kSyk757MvCa64UVNAL3jGwUvgLaXEVrGEfVaTVHXrJKDRsTNEU53PRPh8TNnPqeQ37GBHtLTHGc2aFv9o5c2Nf4",
  "key10": "2HH8RKuZrEZZ6FHXRf829curPvvC6YyyJKZ7iJaNR1CNz43NRz9YaYYM4ZNWQbHehzmMGokmaCYDMwaMurDkuPdF",
  "key11": "QgwPeejY2KfT8gy8Y1uhdaQqsg7Hd6kjpViTiL9y1U5YkPRQgKas4pDmB8yyR9sGHKeNE5kWsCmN3yZ12NMiNpn",
  "key12": "5xD5adEGjxa2XeRDqjRGs9guo26dvyTJXyWwuvf77cR5r9gUCW5joTpe5945s8L9JPAYTp2QwgfQwdVagVA2jByZ",
  "key13": "3RmFsreGfUBExAN61SuVjAgwnpAV6NjSVCYMaFCkSnynyqK4prsW7Ye7ZYDfeDaqFLyNsexpaYZB7GQK7zUcdVmM",
  "key14": "3H7NRk6SuTTwLjUd9o7yiZTP3PGhAfs5KXTqPYcgjpaXrwB8AezFot4epFEfNg1vHdzwYZeKe8ZCkq5PQfmz4EJX",
  "key15": "5CbW5zPU163P5LHDmB9riQ255YpsYQDePyTc5vFPZqBXYJwr5xKWf7WqiHNWyhqoXMcHKLDmT6HCwLf6VGvQuwsz",
  "key16": "MhRF7v5QgmnaX5m6vGSx6WQhf4yBnTbpvXN1ciQBNsdbcnrMoeoCnF2WXWCkpBwoFMbrpHxjiKF8i2Q5spo4fWP",
  "key17": "21DJ9poc9BLRqWRfXvDAupdLiCWhT8XzFr5UaHyjqg3ToKcJnhRMzwXkCdSJ23BMtsTC7pYUXyuf3mZ8RaPxbgLp",
  "key18": "3yZm8ThvK9dY63LVRhM6CRrxtu6eyvJ7RjvsUCATeG41AYxZgcGyraedg8SVt1UFRdB8djE3Yn6NFGaLque2smVd",
  "key19": "3MTm643dZF6pwDs2M47P16UFe1nSM69w62RYtKQJwCgPbuZdnB5oGgfHHGF1EWbCmxcKTU6fUgyPodkEvEJRnCTx",
  "key20": "3ZDbSLoF38ZW8AiTr7bJLUquYkQcRjhUfQKZkhj5dTQqHW4GKJnBKA9y54p1X5VhZ42TnJ83mL7oZmtyYFRDWbXa",
  "key21": "5byaLnwGpzxP8jPqVRSLAUFFu7XpTnVu7mosaMzAR8yb2X4x4YcwEQUSXz5bkFEyH3ShGpjDhnVyBfn1iw4zTu2k",
  "key22": "4zHCu2w3Tq8RtUnftEpQN8FPGS833odRr5rqzKEHfqW2okgUb5rpB7j9diLDb9vrzNU5BFavWLj6RqZM8si1FhG8",
  "key23": "4SzN87iy4Nx5Yy1MRJ4PkgRukeMBRH13jaQBSh93MFy21NyfufWq8pUJXkqEo6nEEWJh9Z12brXdyEZycz9X3JAq",
  "key24": "2nDW4r9Sn4cNpGxkak97Rjkfs9T2W7wZUpBBPcMWuHCawDMuM7BDXiM4E5fLj3AaceRTRWMhenk1mChNaf24i6sd",
  "key25": "4WSNLkkDTcuLs6jLRmkMzJuZWy95bLFo9uNeQi9HEssykQrXGDk61i9dZosFZhpFdq4GBu1N8mcFoJab4qiK36hq",
  "key26": "2YNYaoTv6AaPBVqKG89pi6iuhpVs3QxRJTaeE5yGRnRajnMc9QSXsGV4uJp7z25LkANAM88sNLMXbiPUhceJq1wC",
  "key27": "XRa14J9anb9Gy31HvavDH7KS3qwEdk5XihaZUQnzT88m4CFQDoC1LGsXoaEegeYTwNZVYbT58h9HpnD8mGG7Uy2",
  "key28": "5qmaCKuzjCYj8szBru4Yv25HFbWYtbb5s7hyQoQqJVoGS7NPq545bmiC325NEwXejCZ75R7b6w8e8543VxVkoooR"
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
