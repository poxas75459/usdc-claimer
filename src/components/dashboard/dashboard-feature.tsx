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
    "5enhweMwPcP8LYzUCbJbmmkZX9bq9H6qidsXuZkFC4KP6gfoPz34KBTzmZ6GHAPNW2aPdePt6KgKEiP5DpJqUcMC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3q4RgTm1ZUmpbmo6g6eLoYPJJHLoFUbDZgGFsgbKYC2S7pNfgYd5ah1iHBwKU9Xq6AjFKjGvDDgdapFu6vhqyLCr",
  "key1": "3W2efKxyZ8Y5GawnvQdhoLxg2N4jqxwYumgagJnSpf8Y8B1bCNXguJWMsCpLh1vhSBpHekm8Qk1XJF8gPs9DqfCs",
  "key2": "5Yp2ukaVif8diYuie21T6MAGJKUKRfYCwYhNWFddPfVJ9GfTYmKbkiaYdZZEXoqYfqKb4DWqnm1PEspHaS1Yyn87",
  "key3": "2CH9Ezyo3f5UihfS981LRr5A27kzgGC8zSj9ED3XvYnPZKVRBQhYDxBhgLt1q39dZ62pv43popokxR8LCB36ZKHN",
  "key4": "4A3pfnc9hHTQsT1bpNctaXF69SeArxQLgfgPKvdmfhQfkaQym9rdehtinmE82FDGvcD2nwuWYp1DGdtJhMd9oPMR",
  "key5": "4jTuBsPzpEcaVNZZXNCjDgbfdT8cSo7cGkWhdsv5QRFm5DEtXJBPefa2AT44h48ZuBx4x3NHDW3uSzZ54pshuWRL",
  "key6": "3WLaASGLqGEa4bLr7UjP6cM2rHeEf5qcu2cS461biueMLRRffxDLfqNXU3iqdGrumzXZ6Wy4o8LCbCaa7MWPZED3",
  "key7": "RvLLsk479LouveLSpBm2kJ9DTgAjRMY52HFRBrqRwV8b4i9Yo3M11W8RhXnZhyGHQv6WL2qa2NAkStAHvboLc9e",
  "key8": "4y3bSSAPS1nvjY1nAVfmjrZLM5iUq9UmhRvZNyErmho6xEKa9YA76gBsBjANCNkDR13JqxieDhoYBVhRLHPsXwaV",
  "key9": "3enajh7FE2wzpwYPq8nb7Nu77J8jqDibYZYtYbiscPiDUhhx2x9XFARXa8397S1ntoGkwfRW1RRkxr3kUHQcVohG",
  "key10": "SAyfjK48oreKnuUg1TMDU1M66p5xV6ZKv7YVeVNMdabsuFviXCzxepTAoAeccJyXWMS3x1QiWyXNzhdZ1wqFfHA",
  "key11": "5udJEhT1gafvtcRXs4Wris5ZeZpLT5vWaYyywAmGBYbtj5gpNek43uPHfBZrxZVjg5eNcxYjhWJYs8H1dQYoRhQ4",
  "key12": "58LJYVk362fDu8ZMbiT3E9h6p6Y2fa3yrswQnbkFHjQmsHVLN1mzWDxFzhh5vhkrtLnSqgy86MNHo95FTo2aA6t4",
  "key13": "2UQhn5sV7EFoWCc2ihpWGsJ31CHK7Fmbmhv6bUZ5AY1ZkoA6j9KC7Y3vWmSKsjQQtUaa8mPFmLGS1Hhv3LwpPRyS",
  "key14": "GpTnYKfnKKx1YzxsD41SfNSjsy6oakQVuCmviiyccd7yraWXLhmEEFc9fk9cB4aVt3aAZRHknzE8A3RksU7S34a",
  "key15": "ex7qE6f2DEzxxPX8QGpc5yNDyB4BYNrTgEJzZU3cdiNM4QdwsNi4eenzee1zh9dE4Jea7Giw3fEJaVq7teQ7uyG",
  "key16": "ow3tGnJkDyQP5kKY65zGsDNxRfmu7h7u9pkH8Rd776spLxq5ngBp7yXj1aJNiPLLUVk6FMbBCzABCCU2SpBYkgi",
  "key17": "yQ3iK8XtVhzjYKXukRPtE3eDgWNW5AtLEcuUiA8kEx4y6ZoPQ4stDLSJLRmrKUQ1qyMWHq4rsmbdFqBxUG3krBW",
  "key18": "4VShnafFKg5mrteJuU4n3XXAmt3EMGd9nXgXC4xUg1oaAXVoF7fyPZpMpjxucoDWXoKSwkidwb2YGbDU4zUrEsYq",
  "key19": "Ahtn4viDgofQXS9LpHP9ymv9xMG8HkHdStuDEwGiCHuByD4YjiiTPPbrG3CsGZuLfkd5AtR78fkMympjtRkDnxV",
  "key20": "2Jje9QZUMvfKAHtcuwgLyR7gpUbsE1ZPdLTjxeMMgdbzby8ariGb3g8waCtaZwfx3fqDUeGf8eD94D4VASJyUpZw",
  "key21": "2javA48JarPGxmcbXS99FQdTgFgPjXJafZSRCnmBvP9e7AjCNxbFSNeUfsAyVL9kX3yvrkkqVkinWuFQvf8JB7oG",
  "key22": "3x6UCJL2za7FNKk3akXJQP5aydBm4q1ThvMwQCzraPmiTaZbhwuZkFMprNgzkRdpJnk6ezXgNeqDq4gXHT6sSj94",
  "key23": "21krZComgPmdbsbirtqiPGpnDdLMWRkFAUCMT1yyxfCc6zLiTFoWFhs2hbVe1adeo4KroYbqAgGq1nmXHQBBXLmH",
  "key24": "a4VDjzuYbxwwNF11xEbB22AqNpjESjf4osp4hpQHrAXWSfUYGedzbJuWKj4wixdpUhcRjFWSEY1Pmhxx4GuRfd3",
  "key25": "32UVtnRsjSkwArF1AfiA8UFXCosPauGvpxK71CjZFK5PEjxB8ZSh6SGU1F5kPaA36h8kXcgYHxtRBsAGav3PWdWV",
  "key26": "31PDWCKECKizWhvRqgMm3tcHrZXwgaTD2VC2k4ohyTuktwcFRxZEs1aHFSpSbTwU6oNrYSGsuirworxmSvciKDud",
  "key27": "4N2Rw9BSvQ3CuaULAP2CPkU9LW29HvSDU6XXJezYYgvAUUg2pXnsEacvgygmeWhv7XicPgWoVnNPQpTyvWCom7B4",
  "key28": "4P2Jh7xCG2gncrqmEAu8hdu5HUDEyz4MBoYR7s58WErPHFkNm1koyRgNdKyv4LxAxjFnPkDEheXWBhEXE7Rd5p9d",
  "key29": "3U6bZTBnLG2k7j6eRdAHzMrwFK7Gt3q7NbFdVrRkBNhn9LJ96feuaSnL8qGsafvqmLLLKRFyKdEocfDmb3NGUnGe",
  "key30": "4vbMQfUV3R2ijS3urYEyyR8gRraggQGNLfDEr6XuVrwAUN2VH1JNiyRKYayLmZvaD6GNTXf4qP57ZQfN8B1NPNkw",
  "key31": "26CvUqZQC6nYX1mCUrGGzBtS2o6qX1BQxnir4yDWtapcSzXQepqQaLn5VHdGAk1oS34FrXquxN9EbZbYXNseRSyb",
  "key32": "Si8pUCLe99DaKzCykDGycXsFdmmarR41iZfw3dYDqfG9Y96VYxt6Uy8kmVwWJPn7boUUiyiCqeDLxiokd86ADyA",
  "key33": "4pnMAehjPDAXMnhkTFWkZBTmeJu7E9Dczxe7RCwa6SbYHPPB4RT9dRQMeaKNcYexX1f9QDBFVDogo1utxiUXxWYK",
  "key34": "5i55CrYf7NfrCJv9bme6pQo7AJLqA9UdnETtpRJTuXPmAf1KLd5DPSqbHtSvyAjTFsTigo78drBKst2odDG9KXF9",
  "key35": "3z6RHcg4DEaWVAHKgJYksfw4Q19hoVn5BehoLnsJdZRNaWYQhF5YvrVcqxRib5i9e9wVv6cAoAhVzh2DDAQAgm6v",
  "key36": "3WSBxGskg3jYE2YP8xRtq28R3XzZt9XW2QhM8uDokSgXLzqZpiZ2Gc8wrGMMZQYp3Rc9LXJZ4bR7t8WjS267hX6m"
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
