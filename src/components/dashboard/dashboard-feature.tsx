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
    "5RNqaup6b4QZ4i8wCAwUJvuJ6QQG9vRjsc7Wp8vxhAd1btyoyyCXHmNnSdbbNAps6ou1X3ipyoFUqbTwo4Pc3tvW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "M9AqvwpbFL41EkGGDkidvYLa52LCufvT48hTYMj1gCVynj2kFcv1rbxRdcHBFXSPfajt6kJzPdNsS2k4pNsRCdT",
  "key1": "47USFeunGpH4kHWKQxh4kDuTNyosVqt3EcyLD36SikUMFQMdCJJfhfajD8iWjW7bsaGy2PKcsDxiTKZh2nCR7Fa5",
  "key2": "4AtRChT1TjgpkecUGETE8F2WWcehV5d3XzYyMJZ3wvxL6ktuRm6kCvJzUTTXCCPU4GjiWHSiFDqM42butZ6TSn78",
  "key3": "3obRsENapdZPxabaac4ovPPWXLUZTowx6Q3iA8zLSRWZWThV1bsbsqmEdahthRQWcjQSVM8v1zwYW19FCqYLv4nZ",
  "key4": "3h3p76hxB4YjyCNdspPYa6h1MRdQgNdbK5bGuHvQFuk33XMCZ4zCqf2veJXPwdT6oRfXDh72UtPhnazpsgRQ4xF6",
  "key5": "42rPa1u6VLh9gMMws5Tr5js62n723EXqL1vYMa7iDGhTyvev2cQG9dekYiLfQBJSPa3WNozZ2Wcdvu6Ap7jbrJov",
  "key6": "3bE9nZ1HpJcoWXF4TfQi9ZdmAuM38JaLcZGB6p5GQ7cWB3dCsNjz871FpotZWCVTA7awCEQVrhgzmJrHYtz7mM9R",
  "key7": "5FsM3D4t6PzgB3yqmXzKkgcv5PE4AxuwmDiRMxpZMZwNe3hhWEFW6FP4aFeFmQcWzdG8BMHcMW89s2SU85Jv8n8M",
  "key8": "HfptiiVp35TzVBmNK1XTnP85bm75bdHAh4h1js1DW6tYtMerWvDnAgrcB4taNmr5FvTw9jvTripzkLRsZmvs3G4",
  "key9": "4g8do1Wb8fBXE5GmKtnHN7L4ppiPNHPTGu472gZyUJxHNq4Y9ay9KeqTwmWHudJ8rkTrQfKrwJjZ16tJs9tNRr28",
  "key10": "5NbDkisjt4skpJPEJLknhrHwrX4G9X6btBozPa2WJwfaYqaEHzPxd2Hmij1z1xtJPrtN1N49venDV3Bem9NMaCQb",
  "key11": "5jE8C4XYSEfChbz6SpsqpzodCV3K6snegyR93TChD4hGW2nYJesk8g27csmaueBiy4JgMh5BCaANA1t4TxbsW3M6",
  "key12": "4LTkUE82nHthNTjFiaRKdD2Tg8VjSM5jrWLM1pUex1tZj1tLBqFDrCEYLa86Xw6j7sjahudTL8Mg5JmBB7G9Vvg",
  "key13": "dRCAe9rXEm9mxjRwZgyoduYXSdNSP8XX3DR7eHPkYyYcK4GXGEPkiyk3UzaLJ8zU8PfZ2Rj2inp78sQJ3isyVa9",
  "key14": "3LsnVELkKwGHmGVcPegxEAyBR6F8niBfLwTyoHziRGttz4AqtojuES21cuuLgerwAaTnJR2DMtR3BRuWyxuuYv8J",
  "key15": "4XjEZxFnXWPdHodnzCKae9rNmdjp8qxrAiRCCP4FAMY8XFVw19hj3rtUAaZnTXrjvuCBS61oj3xFecNhdGdj6Xz9",
  "key16": "2FCUNTuADYz12KrdgUJCnpVx5K6nwv1t8WPT4se62jFi5DvMySa8aEPeMdRcQGnzuM3b5otkvkrYwUHop8LJvx9h",
  "key17": "32GU7wHvumUVxgwmdKBrtBFVv2zyVC64eah9BtrTydsNEF7WXb9cTkPUXTeu3VUsyufupqrQaZZVQgC4ZnARwMf1",
  "key18": "5vg3ymoPbZ9CdAQMpRwuS4M5t2qYzEmihvmpLjnSikLyXwjBneQWHNsGAvodW2NUvWuEw4mu7uVdinw9kVwEgq2d",
  "key19": "5yCPbTtww31j5EA337VRTqdnF16AwcpSucgVFCtGc9vQ4E5UUNAQg2mNvLg5DNf7DaQFC5mMbzBkg58A9zADkuJ8",
  "key20": "zPG5WUM8khmfzV8QGKAiQk9BUQXvSKA6Hb7SKMFKxQMw45UxuWDTqxZwfm8G75nsKXQA2sV9mzMDehzfk4jCguW",
  "key21": "5WYjTNyxJTy5ghNZuqoL2dR4hMahbL8YGb6CsA62okTTB66YcebXbPbhHJu25Z1fyHNVPJKd6qTXnM3v9tx3DFmm",
  "key22": "24EwVZ2MccAVECCukcdDCWp3Chp9C9SPtXbJTpx2sYwfno58bYCiaejJLKWztTp1fbDUBy7jDu5eorhh7DsaCgXu",
  "key23": "2rXnjRdvd695zoe4FV49nyRrrGnXiMGz1ESy6Nsui1LiYjokz1XetafVzP3YerHarSMYkHnFoTzmauYXvticsLUf",
  "key24": "4hyZXQUViu44LbTxR54ZcZWzLhLLeD66rs3yEmCA8Sk4HZvWT9JcMY7hb9mWiPNpG7BuZ1oVn9duuVRTNsZxxF7C",
  "key25": "56BLH9vzCCCM4PrAwDKpcZLTPgaEvw3rZ6LmBVu21dt1Zxp5KSDYbQGUt4Mr6g81PKCj7pToUjwsUxch1HyZ4tTM",
  "key26": "2JntpRCHUC7sjcWy9yp1yWVVku2JVJm3P6qz3VEWaxVKujmwuP5b21KcD34fEZaHgStvZsSyeHkt8FbBa9P8boFZ",
  "key27": "4wfdMSDit7VwfYXrfeuYeNtaXBqnkdeQfZABGZvkNEuk1YHQmYHDHb7ntXTP8PLfuCt2ckv5oEpAB3VwEX7E7xk6",
  "key28": "3jLCcye6Yw7gYMaTi2mhP8aNjXmmsR1AcMWY1cSDiAJpg6Uu74GxqGvLofYxz3cnaeZTxhxNp2Xg5ezBECaNfTTi",
  "key29": "2vP9yvpxLARgvvSCb7BrHEyrrGmyHyDTmzsK4yW8cvAhiNLxCMt7G17AUwBKnuxHsncmSVrCWjxaP43EeyQTHsDQ",
  "key30": "4HhXAFp8UMsCZ5zbcjtvSJfqtaK8V6w4MG9E21CB7Hgjnk3GZDyygtPPdQ6hMpq3MhYXvWR6NAcFJA9kZGjpxUe5"
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
