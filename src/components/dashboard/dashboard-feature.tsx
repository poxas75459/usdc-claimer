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
    "32GdNMBkDSvNCy9ujHrZoJzduFkUSsTCnzi3Uj9Wr2NY62URDGKAaT2LxYv8rrVVVwqxtk8KJb3uUJiu5Yga4AFQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RFocCfseZwfBoxqoJHt6CistXv6e6T7BBJfBtZUYgTve4qcnkuqvivQiqgWzpYtnf7AEudTrMYzaF5h364ypbDo",
  "key1": "44P1kqRW4SorEa1gihihigXEV7otBGTLAGpx8zRDxCh2UtKdQ7AQTJNeMi2W7gXzuMseZ1iwRDiG25LwYsaLxP75",
  "key2": "4w8PMnXtxxCSve29MLAnuVg3uY96iZmZ15GzdCk39JHygbpiGGbxxuyA3YwJvHHAQnDL98RqyReoCTPKDCUaioq3",
  "key3": "5j4LoU8Rj8ZZnS4sSFKEhvCL3vEN5PfVxgwaNoVmtSJzA6DmiCzndETf4WEvVibHiZHKrCcgrWtnGBiffjmcN3xt",
  "key4": "5LR5DAxdcLnWrhiYQ36bCGC2YD46qdeaVTdWrg1vUboq3vXivvV35MY9jmrecu7eqpoibm3GsbHi5afbKmRbVt6j",
  "key5": "3gfKNqLGJ4iHw83pSge34bjxVTu3zor5Kz1RCooRPY29jd9uh8k1YzKxnozqXjuPWWfJ4DoNBEEcBJRxFkrt89wQ",
  "key6": "4STQvLvd2Mjth4DGNhEx8zXbUvf7k6R8eTesJpoT6arifaSnBqvgcbkmA3FSsRY7Z6Z5fCfmLFJeUDhVuNAgC4Hi",
  "key7": "2kKz8MigiM3spiYQwQNBzuN72pMUbohKujWri94XN4NYCjyKCAFU7SniSNSDDMhvCgFi4uFudUsvUW4Y53W8y9Jp",
  "key8": "2f9QR3H5WxajY2fFRWbnbdDfYiGNCH3rKbFDqhrinpXCMFPcq65fMjdVeCXTRMMxRj6dMbSLoMLokPi6QLVmYUyC",
  "key9": "2fHQ9RFXXWJTPvJZJixBboxekMcqBKWP6YHcFurbw4N2oiHZxUMg1cAAko5ozd39iRhnoXoGk99awgHCGw14g31z",
  "key10": "4rCoFtsYRbjYBebPtznx5AzhCyNkYdjRzCh77PnxAHKK18s6FDjfxDD2uVDfwq7GRVYByDh5vGwEX9HTqGD4tALC",
  "key11": "5jCWvFtuT2G12eU1NbGVHStg7v2xcRzPszd9UYhBwEHfyZaVRjinULjPWMqzdZHDHTk27jaZaxikJsQm76dkckvX",
  "key12": "4kWwr3pn26XwRWziikFGkmwdt8sf4UQz9rMKmZELNRCqBGUcQkGzAZiwUr2MZvyoY8DJdC6sEP7jGhA39uH2of9X",
  "key13": "3VJq9RAqujK4N5vq2XdZXTGaUt19fQWwnCTcF3qsaadYDLqr3tBsuxFAunMs6irRyVM68ufvptxoDUwXke6t52Fo",
  "key14": "4Zm9brdMNfHtaL7arg4mFyQTwpUAypg7B86SFSqsPdMoTf7rcFx2CLKo1mzHVqGk7vUcURQVBvyYpwZHd7edQdXf",
  "key15": "2anJz2AwcJiDX3BwoYAFteFs3by8PsAWeeSV5wC2fudDAfoBgDkQrZeqEpmf1tn89NRndBNZZmCxGsa1USB2EAiN",
  "key16": "4mefWnQQazzo2gmJHsYJxWGkE3wdT88eiTfeDyfYSQUN899hDksR7TRYW6Xt4jh7YjS26CmA3sKT3BgpbUQJmscH",
  "key17": "4F4o3YkjMZuUQsXFk2LMjfsUpk4q4NKxvfLTw5eBGd49T56EWKyg4aGucW2fH5B2EA6qGCo6UFunRrCuTNbDsRX2",
  "key18": "2esBNPHBXpn4L3v6sgkJm3EPjPnMKNXDCHR9isgb4YXiKHn5mHfwbSWpEBcGdB6L4rWCXy7BDvLvn9Zhp95fnM2A",
  "key19": "2JQZbqPr1ktHxokZikuLsTrYJ77XFfX1bTCUe3JwjM3NVzLRjK5Sc1RKJi84taT6Vv1NvQN6ptaztQYCYrzWAbig",
  "key20": "2KKTqbjK16C3nTDvMQTCxazkEVKrg78id1kuApvwMqFGmRU4a2QXZDEthdmusVarKf5n9sQnWjg8eoJopHG7RaUq",
  "key21": "pupUXavS6JQwgXG7jwBiY2LkHMT2KU2UbrxqpCHowsT3LBG9DqHmbdyDioammo2zf4X69ZS3afnyCgh44vZLt99",
  "key22": "4T3nf2G6KVy1QGykKJLbKnhJ7EwLQpzeKt4srLj3LdkPriVuMWPkmbwYeUihBtxCBU77aMZDdFasNhyYtNzfPb8n",
  "key23": "3mUwkvnUj3JcuE1bqCSDEd4rJ5AaPrdcdwM2zAkCLBCJNzXzCYBvn6tVgkGc3nAB37JaVhWZdPHqvMsuYxsu8E3J",
  "key24": "3cp5v1darRXqD7bDBDMkYZBJkFt42yy3QXbZ9VKyFocxVzKQWy3nhzL9ZMRySroyBaSY748cL3B5SNxB9mzUkPP3",
  "key25": "5EKMAir3D3wFo5Yu5Nf6Lx4EN6BiJdhUDWRziEB7V7pcD8cjYHin2CBnFEkEtKPRqBXUuq1n7PymzKHdQKiipiWA"
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
