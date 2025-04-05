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
    "xHmwzMLp2offCjsRBiaz2i3jncR5QDPJFMTx1NBy8FNwYvABsvqLMcsLfTXRrSWvqLVqdzySB8tTZfTAh82e5WS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5adkQnXFgW1EUGnoE5qSCUSpvLXcqap1f6edYkHSSpxaPkXs2BxHJbASWLZvSG6dEyLQMHsaEe6SB7ChMJFJ7Ye1",
  "key1": "2F9fjYKcLfy4zVixKcYcW7As98ibiRg4MPrrTA36PcpGC2noYDJmsc9uKeDpgG6AAWg5ESYhhRdNTpwaxrdm6HXv",
  "key2": "4v8tCWNppyKnZss4iRiDaU3C686yQ3xexSehwx8A5E8eovgL1TiWB2K9kEBYy8vQ1tSpoi3zPGRJ4N4iaa9TEzQq",
  "key3": "4Y4UGijSUxnERBkg1kAL7xJd1mZjKEdopHk5KzLVNiDDheBSE7uFJx5nFU9afvjLHoHN66eXLoUnTFefsZ2qydSC",
  "key4": "5k4EwJW2RRUSRdz4mSXUJBXF3rZSBYLQCKAHrBX8XKNYhxsPRN7NVfLa1gTxVFYRKMzUWLzWuxqKpEqFyiJRjiVH",
  "key5": "4mVZM2d9wqRatrPBaK5Qgf1KPTPh1tR5VkwGhFHLy3Y8Q6Gsn8LD2Qwg7UM85GDxAukPfkU9vt7zfv2i8jTmbarW",
  "key6": "25KXGd5YfJy3gM9f4aVtrkXnwuSnSBFE1ybh7Apyyue5Z3oEAkFzt9V1HPQtSx6CDCvoeekpGUiT8zVLEGFqJy5o",
  "key7": "3qfqYVmRSboxEfo2hSeXfZh7iePLJXfck4xPESst7hHcbcUQmUMqk42DcHavXkFGmgG8QKiPJYvgQG27mWACXuZk",
  "key8": "54S4UnyEWBjm9ETHM8MpcitqnUaJCdhTSksbMu4pEmq9RiLhSey6Xt67oh21NAMsFg9kQXsixT3L4nwPirKxVtWS",
  "key9": "2jv88RzNQaMqbu3zVyEuZ6tsvFP8oTxVjMokE9e8qVQMcdTyZftEKMrB2YxykrYjaozFBymy8DCxvRzCBANJpQTx",
  "key10": "gvoiAYk6wi418WKd3vrPtRuW8BxZSwrGvCmN7nyC1urjaKgxMjMbD9V25eGKmgGKUYdASo6R2Wk4irRa1TKhj36",
  "key11": "4XT7xDzcnfnLN3VieUyGhDQxaqFTc9w6JbHf1UHrKP6E9xwjznrxTDydGeXW388wFCTAmgAHWaDKeZLAZ1mkNBYq",
  "key12": "y49rxqQfCG55VNd9zxEGXR253adt2g1pF3VnDsxK1hHgQuYmUAZAS7fYYhoowpxYonRsjnjYKcRUUSzdqnjgn43",
  "key13": "4qWcEiYY5LcP198wmaXGz67zgji5i7dybPTTxJouMWJanHCqb1SJyiTNm7X9PaC6VbHNkwCLCf1JSytGzzjcCd3b",
  "key14": "euVCA2p6dVxmwUCZ36eY49L1DdRsJTDBpi7Rz5GHbNTH5yRWqXnn6cYAsF5cnnZ5wrdMhTe6fMpbNgFXq6pR7qX",
  "key15": "nGBFLtdDB4KWfpe7DdMiTw4wS6W6h9dXxVV5fkDerkdyiuBspmDK3EskGGLu4Atj6rxy9xfFoamdVoMySreYoas",
  "key16": "3VD3wpu7KcK7WuG4nK8NFTKgWyuiEtXXjv6nU5jW5KroizSecg8VJPSuAMSwDkqESb5wim9YXncXYqiisuQ9ceoq",
  "key17": "oUgkiEobhRbGznzK7MPWvCD38c4RSb1DcMQoGsYRtrnyhJhApVUbFJQaXEUFx938JWMcBCJBorArb42BSLUPAWG",
  "key18": "PdyCm9LrDZYgwYhNGQVFsswfvh6HUFb8PvREFtqrUtEgPV5cacUGvwf9UNAuteFMi9JoFK6VTLiyXagKwLobjyk",
  "key19": "5C5Y8c2cXvFi92jaN6gp91tmPzX5xDGctxN9yUgj8JvtEfg8N3C2udMj6VPw75Ay7f2zRaKE4XpWSkotNUocE2mo",
  "key20": "5ujiumK1EtgtwU3vXT1Kqi8xrUG6mWDkEAo2qKUduqWQWXZyogR5EQungbT5dq61mAy2UbZAdhf4TnG9cRw4znfx",
  "key21": "2pUo3rPgxwixaNhC8NWvg31ZjVXyqo2PXQQfpakcDj3W5QrSpiTC7ZTtpzheX7S1HBQaxKx8q5yFKHTSebsvYEtR",
  "key22": "5msLJUcABueQueE3MHSZkyHyL4pcTBwxfrTMWcRofoxrgWv9BRaPMKtDdE1VKEVUkpWobKNMixRWRkGGrz7Ajq7b",
  "key23": "5o4guUS4GQLMxn4ajHzvwzSP7h8wrSxCbruMhMW3WTxJZM63pVdgUmqUfUCZZwNJ9jPQ3q9HF4p3GK9pxyDtZj4c",
  "key24": "xZLBdiDFBixVE3bMnLrdJQHEk4gSCQ2bFQLAkFoK6n7ov2DBx6ds68aWbAbJqEF9bgKYXn8PpLvJhk6q3mCfSvZ",
  "key25": "4ixJL6s5nJ9i8dUPqAx3Aju4F7P9WnaXQeuGvNpHSZUBqqghqPDAyckpR6AtfVXzqcJTFKi4yBj142psU3wyngdy",
  "key26": "2URZvfNwjn3dJkKTF2tEn5pvfVbWexEW5tkUB2RAr4HoummXDEM1JE47cFEKPCWgb1RvdbqBcAXbtxQpP7Ug2GPX",
  "key27": "5A5WoJiR5BFkbQZdAPvNi76fRYX27CT7p9DSsw6zhjVcpB4sqX74eMVNcs8ED3pm5vmBbiX5vfbZFUXwfNEvbiUX",
  "key28": "2y1o8dsqYMJTFFGEZYb2aBUs4CJ4V2JidJkN1naQx7UGPHjADVrHuC7CDgTxC6UUtF1TQvTnXJESo1iy2twGMyh5",
  "key29": "2dV9pd5QWn3MQtgq6ExsUh2Z5rcU1sf2EoUKpuiNHBsNmVS788gBopDqXvoYePrRnpUH8fP4u4tmUQUWDsCmUEuW",
  "key30": "2Pu9GmcABMVXhNYSwJLnrvGGYcdVAgShsWz1MAJm4Rf4PrpyirxtceqvN1gkBRNuqPt8tnAALqAoNJU5Ey7cobky"
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
