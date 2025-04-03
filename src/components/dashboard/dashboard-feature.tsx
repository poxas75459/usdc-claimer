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
    "5mgWyEphHCyrZKmeGWqCbyfoesUbpCYFsqbgj3omFXCPgUegijH1CyiVeTRi63nsDiJZjbW7X9MKY3pPLbwT2g9P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dYAKCNBxBbkTfPb2RxAfm2Q5tFzfiTiPCE3Az1agA7aw4YYvMpdCDqF6JmXYLRBcnJ39RpuZZb4MKnXqUBqEpee",
  "key1": "44oYgtve8hZ8y6iPk4ZdEUR66aHwcdX9gD57WcHod3PoQD5sTRHTPbMokH5mL6HQPBwX2NjRguNXDXFdindaLoEL",
  "key2": "KJAWkx1LbmMzryJ9ic5cL1btpmUcJ7j6dRf2myCiLLkdmBXMZ4JGssznPrMWeijT51PpgEppMGMiGhnLYALVHqC",
  "key3": "2jCHD8dWLXsrAC4UcVJK3d1mNEX6nAY9zvtxZZkkK26Mf4yzCSuVVhSVaBuv69VeqEttnJnb1LywWT2e5iotWuDP",
  "key4": "2pPEBcRNiGoYEZv55DoeJPj7qgkkvopYWnyLHv4doZQAjoAtB1pTuVCjb1rh4VShTVMBYTQQ3C3pTX4cqPQskGLm",
  "key5": "4wmh4MgXfHQ6kWi83T6husKpEcWD9KfjrrhYHHV5UXxQNLNBpNqHHLV7po9xp8UGSvDEWEv5HCPbmLECMRsQgxJZ",
  "key6": "2aH7BY4yvE1Y29caw4aH6QbfUJVx6BECZbDcgXZwipBWHGCCpYVyJfGoTKPQ33VSZxCF8Yt71iiJou29QpT9EyDL",
  "key7": "BLYRKTMe95hbEc7DmxgBhcmzYdqEra6kRhM3fcfqm7G8HVy2ar39j45Rv4c9MBJiLWoxKSeWabsBifs7wLaTjGs",
  "key8": "2rEmJpnfXNkzDdVS35RcX5fLBHTQ21WHhfXA42d9SvS7J6uv1QBM2a442ujaXzXLJxdaLKB7F9Bu5tiQKUFX3iz5",
  "key9": "4tQkbf24r6wmQ9KrCmHwiVhe3adqbUZEJn9Vxe4sPAEkC2NpSVqJdxpukAaetGoniNqrwZiWKZ3kPxLjjUVPxnH3",
  "key10": "xES6bdPo9jrKxpcVEsxNP1UqeRheuQHQvbSoNwrS55ZtuQYgLpbCXgffNdXgiUAaWasGopc8h7hjkjC3c6XC9Q2",
  "key11": "FJUYib8sUVofqQUKCwDYRRDHRUeDwAWD5NVpgHvif5BSGTCxQrmMpv9V58swUTJ3o4myNx28VJM3RySrUzFfbgY",
  "key12": "48yeqXFEY1DihVbT9fZha91yDJcqbMQp8Gd3G4x2kQqDLoKuTDR8MVRwyvuuEWSzxAiRiwVoaXCq7B1NEGyR7Aii",
  "key13": "5qeAcGC6AaKs4M9nc1nWfB8wZdidfywnweUSctAUpTz3shnFwa1J8ZyYkM8oUwNHV1uG7XiqZZjZF6kCUAxQZTpY",
  "key14": "sbJFfRbmpCo6fHP49Q1ZRwvg9Vjypqybxx9Lf5RBAnzMvmbZGiZZF7ZskLwJZkn63KJr3VBTw6EU3E8bQzvTJX9",
  "key15": "4LmZQYhTY5uyDHUc5aCG7jXrFbXK5Cb63D8mPZecjG3h8MRicpigh77EKpMSUMRNLBEajUABZjNqiEq5ZxDow5Te",
  "key16": "23mj9F1ei9wfxdXkNsBewwu66shHSizZS4Z8csGQb7vugduWSnJExBGToRhkWccLuVhdHEigPXk6zP3LJtw9kU1Q",
  "key17": "rYjc54ivrvRHJUv9iJV5S1PgxWHFM7rgztiQP1XhmjggGhkhkQPtp9frL3yLWdUriS3ZEEjT1girnH9xUwCEWrJ",
  "key18": "2mVXcGYcR2mhjfNxAjsEF4mFz7v6mGgwc24gjb9ZWS8YvX3JS3XpUcSvCam86UVqgq2w12nyLg9xwMV2kwry6W6R",
  "key19": "5t24FypnQ7gaMtCE2xvwaZnKeVzZAUHn8ohNM7sXh2D3bV7X7nM59HkfcBKicaEeeiaZVTS8aLCsdHWSVoqcuktq",
  "key20": "4eaBys5sJiUtGXMtX4c2L6hM7jN68Cz7xt2uuYEAHJdaB2ZRGNykmZxWQBA9BpaM7s7mVdAjveRrjvLtjCda1rL1",
  "key21": "2aiZrAnDh54HpC6dyQ67ew2RKdeXsYaJ2MFLtDF419pHeN5r8ViZFwWBBkkqHMuwaczorSb8EMkNqocDVD4saJu2",
  "key22": "2X5nq19kio7B5YkmZQ5c9dwNHRAczsxyCS33YJRW1wQe35TNZRhWrHMcchZgZHUas8c5s55T5yP9qTQafEkSjvit",
  "key23": "3Ck34rLRPTyjCag47mSLzFAj2qHUTydccYB2yGwCGdx2m19tdbQMD5qXmhibCUmHWZkzSoCh1BJ59RoN2FFuE1a2",
  "key24": "4yGySAHgEXpSJ9jfUg6qUBKRKQxqh5sa4vXXm3ECcw4Ryxt2FadUTYEJnAGv8VYZL3N3EMzNhEozoPkvkZxMsa42",
  "key25": "3Ps1fT9qGq1eE1DcHi7v73vT9FsHwDo2tNpDbwXjd8BkiPQFMNaWkmyBMtuZ39FjiJLXKDoeZ99PUTDq8bL81MiB",
  "key26": "3qB8unAZz17WfnXxmA7XaoNPZV6oFub3rztAqqZQBiFPUrc6QqQeHDm5PisicWFhyTLsnHTdNcUFU2G7sWGL6vSs",
  "key27": "GrJnKWRM8CgxCm6c2Ec88QEUVzZZzrCyGu3zy8ddmxHAmjw57hNZXoPywF2DtBkdbc4Kxqwnk6RaoS4YUnCM9NV",
  "key28": "4EPpq7Gju4HLkjkYRxwPrBxyY1hBWBJs8qpTpxB9995F3Y82zxUnZeGTqpmbcHj1XaTBiN5JPgjdvnKYAgCoQNFh",
  "key29": "2KQXYnXmwVc8SfkkDZTMBSnLDf8Tr5qtPNnckDo2k1Ni1Sy6gM5j7B4pWUAtePsz9o9dHjHyqUJWagX7Xf8sCYMD",
  "key30": "5JtQFAF2o9iAnT3NM734G2JBGdV7y87Q4uMj28B35pxcYindJ4hrdTW8CMvL2JezVaYt5ebKuWtytGDagvJrmuS4",
  "key31": "4yXNuXasq7J4bYqaFMJgY3QaKzo1Zd2Yf5sk7BydHriBmBHjWELbLy6qEsdJktdY5rz3uAmNctfbTKNE3tAEDGxB",
  "key32": "8XXnfT1tGWBjYo8ht6NGTGe2CpErqXfUDFxtYbJhMART8fjcvc5eiyL72vrWikBK1CLeEay83WpzR786KHj1dm9",
  "key33": "2bgAmReBsmPXao8QGzQTWQaEXkiVjJ1qYF9mwecsgc1v8dxEGbKHnpm2oQUj8Jg2o3u1s1TTRKNoemBW2RbvsFKc",
  "key34": "3phPxbckk1xec7yGPWJESUS2sesqWZZXuBeAEaGYhTagP5nPSKTQZEDuveA8tuCcPhduicRP2Aeeg8d6uprshfJV",
  "key35": "25B57KM9S4WXAAS3JPrdfBZfJg9h43QDeMtzU1W1bVjB3ypgAZmipsYqPA5LzmN1E1eksFPd15yZEeJY9YXfayqF",
  "key36": "648pbH8Tu5kw5kAqZagukJ8XAouHmUK2EFgzvHNJSud1bRETHiPp2yd9XnERXisHVDiZxuPtmnvjEkSTAp3NeHwZ"
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
