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
    "3J47fWkfTKbYYBi1TPSy15dgbQyqqeg21FzSopwB1s3vfi1rNmSyNu6t4ffsV7XSZq2sdR7EoDMjz8Weu1rSBJYc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mFCzTPxR4emDYXndtup1Y9wpDGTgh2KFjD1xfMZXzGiGLVZL1VdbKjx9B3zckFnfwtipC8HiXnGzq5dHZoJF9WE",
  "key1": "5aBuVBqGbhio8EgQVaLifGDY52NDzDaf2q7spTBv32nW9yntKkio1HhPZt8aXRJ2WF2qJ7T9mmaPf3vr1JcSEQfw",
  "key2": "25R4YsKobmXDLi8jVmAd5P2NsLwwx4G474QoLid1QHdnJgkCWJAhahs7dJKfTuRV5zCZ9CynvQBhrhhhnNipd4q1",
  "key3": "44uCXCbFzc2yhGaGRWZcBUfnJFzJfSYPKnXf23n5wd7DhTWhfdzwLKCSQL9rh68WB5bKbpi79HdKAAdBh3MbmkiN",
  "key4": "4V18GxHn2wGi54kdr7Lbj5D623USQQkz2RSCTq6iPZ6yGy5qLSqihLPvZ8wcnQjtK5pxSuikA7wiLAqBFwLcHz2X",
  "key5": "du68LH2RXSvXDqt52BsA5TewfeZ6SLTCnyBVXnKLiuw41brHoEdRnRkZ8Cyk6PPj9YRmDyrjMeqdgSdZkpAbmvF",
  "key6": "2Qd2zX42ux9Kd1fmqckmscoqbKo2muD3p1SEsTUSRiNViGFxfDf4YVSXcXtYKqeqzhPj78iMgsxVpEfB1H1RBjFH",
  "key7": "5z3Hae1Gj1X5KChzarNTECuACLVVpjWDyuJjjvjTpHVKiiD26h3sWC88rwEpQyMVSgRrhbNG8v1jQVHKeFrk8HcJ",
  "key8": "43tMaZ9V4AMevG9x1igCcgEXBYrmAgu3oEL7CJrnfGB4qBtsFQZN47xHR4Xd9jft7xKLDqZubVezWfuuV28uVtYB",
  "key9": "5KQysT19orEa6hkgQkpizWARc2jsA8PfuFQbrCqKLuJpanzbBZJtRZpT79PEdUNnmVqP3oeHKea21tm8eott2xsd",
  "key10": "4SfMFnndVcKNn6G2BUdf6qvcTmkpcJuwYNd3Lwb5ZoejAuf68EsVkCnrxTzBjUc2GHB7o7ZBJfr8JDZqabMXGmYH",
  "key11": "goAjiCSkKN2XY1wFPUdg8euD6AVACVXEJWHVwrDHrDCRVDAibGpY54DPGSp8sofzzzMKLqs5YH7EwDWRE6XLiVH",
  "key12": "toz84t1DsRxHbNWU3Jb5CvoervcuXZuakUMB531GCQ9tiJFEfHrjynoEWbHUFNMsMc1kxk8JR5o7q6YsuY4AezW",
  "key13": "rWrZw8cwUrp1UY2ZtMm4EVy5N949j2x3geFGuzNhsb7HuF2KJskNtDqSv1w66w41nE9QSxRGYym5pa9sNkzRNkV",
  "key14": "5M3LzoR267WdWb4xpwz5Xv57DHZ53EmW7HBSMTPUUmmvUFWj6aCcTR1xzbF3S6xHbwhjAdi4VCV6b4333XA9DYXN",
  "key15": "5KXRHAiDTr4XmqE1LkNDHScz1qX7hwsKBKXrbXPZo1WqwM327TcPwHJZP1WqSoZZfdFqR1Bk5kLF5vdNhywhzToy",
  "key16": "2YSno8eZfQBBaGRqybQTdQtek2UuZUNZjU6QngrNXnzM52fiKBBkk1ZwvSiT57jgJEewgGYFc6ygjGEy5DrzTi5e",
  "key17": "5Qu4wVhm5KXEzCPticTVjmKkvavb7NxY3xEyYQfeRh7XUVgdEJCf3M2d6hSKBQZGTuGdca28yhz34g3eMo9mKBSj",
  "key18": "5khnkPZZXCJN1G9r18i58X219AqrGeTNnsWJhN7WTWMjk1PdEMPrs3iVUi8WuxNDj8SBCP9hXajzAvDWYe1N9ktL",
  "key19": "5QjjGWJbRNCvEf7x8ePUpXMe7XgWzeH7EfAb8rCr1uyg7NSRDNSt1vzDFKCUHeQG5jixjqAuUDoeXfyB9shwCedG",
  "key20": "vd48sP4Cjar9u2u1RCvjUThcLfrwxKKHYEtgoyBtF4AEjuf8FonEyd5xQTAfkEB7dQ1XK8L1eKriyp83Ky1EsRi",
  "key21": "r5YDirX3qJPKXuL5eQ4U8iJTfyhQyM7mp4dk14dC3Rmmr2wzqme1SPaYxdKLQghkWbknRYE9yYnJBACFADA8fKB",
  "key22": "5MQQCWEC5jUbmwkPZs1Pm9KTGj72qAAUqiKeWwReKjMaU7isLsMMrFo6UW3FCqhS3py4tU31LGTybzZ2ziySHpgM",
  "key23": "4WPK2PmdEvM8Kv8GMnFHAXKa87b2154kEUDJjUS33mza7EEQHTydPRxmyT4a6LSUE24dcZjb1JFBXENLkTQAEwZj",
  "key24": "3SWuh5o8cGqSAw6FsFiZJt7M4MCQmcDTzdMsQcax8t2xFqzcHWKYrFkXfvz7PWfJYCLNxiEgf1YanuhhGv2GBWZ2",
  "key25": "e7RTDXzdYQUVdHUqmqW9hwZzyTkNJbFwSKXgSdp93quT465zawcc57vZR5F4m5X4e8W35yDFkfgRL1pzSzUXd38"
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
