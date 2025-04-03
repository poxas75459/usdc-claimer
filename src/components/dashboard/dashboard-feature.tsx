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
    "4bd7m3GBURUvq2T5sDHgTvdukByoaDwHt1FUX55oFGZBrW2L4UBiHcKEuNmztyGLCu5UoK5oSnZmpTVdiX5HBJ6Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SC1k8BtrqMLFUd4Uh56oji28sKHVzxWnRcGqfQbcv74D8UvtzWBYQCjseE6VS77fEU9w5txgvB5T1p5fhULgEsw",
  "key1": "2BudfSa9tya5Fb1ySkVd3ByPPgtk1E8eQgbDBm38g6Yjo1sH9bTJsKnJLwinZfS6QKoe7DJXCTwuv9RzqBfuH7xX",
  "key2": "2N2XsRTXg1XDhs4Mh9SAAY8TD9x6NXPZPuxYYk2ZqrHC8NbWKQSnwMdbHd8kUhnRUKkpAtpdZwBnHw4j1MTqsS59",
  "key3": "39FBGXwyRbzVToofF4UU2ctqTbxMQ4rJ1eRWdWvmZDGshwjSYyWpbt5KSompcfgxHKW8G182WuX7HMAPfKq2nYVL",
  "key4": "2NvekYNFWNdv5nYDq3RTLJUhyfXh9Z78goUsmGAZojC1T5E5qVxiDuHr2kvMkuMizF1EwcodsJT4aUEYtkbyWbTj",
  "key5": "3K3HDGX32JbRVcSjJEfmmfj6KHV3sVYnqrF8fZBAUQmjNdckTadt6V3q874DNwnqHnDSR968kzJcd3xzn62uJXh1",
  "key6": "5gS4ocj976XybwVT9cHd5S3gv7QuRfQHBVjghENZVyiYbvakNyvQVkDPyTQxpq66uvQeFbhe11MGSCNBeZHQH6Ld",
  "key7": "34BPpA9LHnMhoL6PeqQsPWRWjYHUhz9E8EppPFbkMWh1VMwdRiDUyoy5pjzfLeCTX7PqTqHCPgX3NDZSoZEArQQs",
  "key8": "4ZYaBGdQbxuNpCNU7YpZn97BeBkaMW5MWJgAnm9a31MxPYEjomAvVUj4tQ9VwF4e5P67LtZ7F9AfWLbWRD48uHxT",
  "key9": "47UFwtJ1K91Htn48N8y4BGCcadv7vjwmNjd55YLYUHjbxNxyj5Gq3YFYdUCMdbbuBpx6SCab1XfHknbuY71oyVZY",
  "key10": "2QZSvfsjNLVdHmKVdh4WJfogwVc2S6YKfPYVciWDQ1poAJbUzuBghEqxQExUzFEDEiJ55Dd1cSozBVhymduY4MeT",
  "key11": "2N7timapTzePgn6YuaWK5quqsZM8gc42yqH7v1xr2hXATVtkL9SnAUDZUrvqhAmdbw89GfBn6wDdXWV1igeknStg",
  "key12": "4GAXSge5yLjM5up85RPexMvBKJirPBdaY74fbcEBTf87ZKrMTzPNACVMVNR2JFuHcaUkWhcSNSjKvkJT6pVRK3Te",
  "key13": "3sS2CNufoiXNc6WjuxxX3vqGDHaeUqtJUuTqgicKrJy6qvx4d1WH6jxxUzTFUTWM24StX8qRoPxdCLwgyN6mdtgd",
  "key14": "5PPMviAPXQgC7jS9ZBQvGfqLCny1ukYRGcqMHhHKqxnk7YZjPiPR6UhHuV1QoWEGLj2mE3DykXXKAUEE1j9U55Zi",
  "key15": "M9udNrYR1mA1pUUevE2s6uMVoP4vF3RRXcKBSwjXJ5wxF97Bmdde9DqwgdTP9yLW37jBYvaiVPFxH9DZY22FAEY",
  "key16": "5H6dafCBpdDvWvB8juaveRBpsBQzNFzdR1pNF9A7xezaHGthutJDF8Vh84wHJqpr8fmABXZADzHkVfS9GTcQuBvL",
  "key17": "5S8rmz6tgzKgWbyp9canS98hNhcYteP76fG3329wK2nrfGS5Xvv5c9JaWVbL8BwcFA7Y1qtynXUGZEZ3yL8FWkC5",
  "key18": "2BN4Mq5zK5NMYK71S3fJwg2t8zUYuRcCsEh1s5qXNAf9S6hNbeCNSTTUMBtevgdnkT3Urh2dkiUc5iohM5vQjSYv",
  "key19": "4ZnkP7VSnw6hE4Vbt5kEuRpaYk8vq3ncYq8JtC1yAxk5j62nS5wtpGYzL4pgnHyRNn6PRYHTGgV1DMHP49vuTW9U",
  "key20": "4FvTH2cbfvPQKkgN6vG5oFSFPbF8WKCA2iv846ukf9youF8cdefMWPrBYX9Ej3UEfbXpJHCcqEBk9CPyodeKNHHT",
  "key21": "4yn2LBB3Z8Br9wMPP1YDHB1bQfbCdeker1rYK7N8FEYVkPpjRjseX4CSWR9oVtMoC7oSESaYLfTnZfjakuqwJ6Wh",
  "key22": "5FcXSNrV667MsuSo3NmgatxG9MXUxcDDRYy3cwZUV8a8aWgcT55HjcAtoNYNR9tQYTRic8pexxqTUSqtqv4Q8tpG",
  "key23": "3Q3JuN8bYxxuvaWxPPcbUKMaHgHbkgEftQjtedgodU4A1bfEcXZ91MXDXvJRZwoMubEk7Y1s4311CJjQv7BF4NTt",
  "key24": "5TdvSMb83nYEwiBqSw4h6DShszAxXa29jd9J2ihNqFKAEepYSkQkHYG4vBiw2abQPfpDsvbvuMfHuGxAWvkZ1TiF",
  "key25": "2pKWUHsqjAKBZ2iZkUsG8LzoxvvDwURwmXB8SkojwqpcswLoFWjMzxNFEmuLFgV1QLb6am5UDC6PsTyBr7h7kTqw",
  "key26": "xbKAfrTbnZUMapfk3XMSYgUDwAB1jwwQzzJb5FZeaJtJkMywsZH6jetFm4xT6XciccgegL8v1FGfR3m2qPNCe1b",
  "key27": "5ZAeWqjsRe7Gg2rq6dsaB9JXfWBcGWiQQgd7ZM2Lpe7tkJnJYCA4c3gC4giaNPd1fPYYAHTKXV29gEU3K4vjrwrt",
  "key28": "4AVPZ5f4nRCQPGLzaGzdATQv3GFMcPgi9Kn6SqRqDfhbqyRV1aNYqVEDf9cy8KUga6JTSjPZLwt6EMGBFKWJC2sh",
  "key29": "37tmTCLRUPs7wg6eHDgkqTvSXiWhBUJ7pq5VDVfeUW4YKunXUUeJietEFTfCYijYvSJ3oSgjGAhuxPcMC2e3XXU1",
  "key30": "3yXtqRKfBtzpBd3s1pUDFRpCAY3orVvgQ8BgFoNFnSFxLMdN7FGN2p7vMXgpekmmmKgEGo4mL5i42dWqpN3RECjP",
  "key31": "CjduC3idkr5G1syemUXKmtdNFdUidjeXmVQpbJWkD4N6BLusCayxTfau67sx25P94sU6YtfsmQh5B1L5KLu3gXs"
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
