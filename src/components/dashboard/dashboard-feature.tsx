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
    "53f26UiXqytmWfrXbKbSmnTCJQ99DGE27LMF9bBEay9YJctvXmZ7a8m44uCHDH1exUY7C5r1oR5shqGVCS5Kbzoy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BTQgMV5R4VsVnpzH2JboZHpSB1C78qaKCbu5KMwhRtLovDRQkQ4vjGLZb9TUSsZGGPV8zsdmjGUMy9fGYVDR6Z8",
  "key1": "58vaHkT5V7hpBrhw79Mo19Jygb7B7sGiqydAMnekpWaSDWzgviceg7zGuudBMxjA7dRyW7Ydz3mVFfFThuZj21mC",
  "key2": "2hwiZcSd6tgqNTuxiUmMjXjZW1LtR1jyrbi42BTs9Dt5nF4WubXYFyB8SFSQ3LCSfYMhaq8imbgCJWcEHizzJonJ",
  "key3": "3npvGKoAXE4Y7o6utwj3EsgFDbDQjSEjgwMbt5KneHN5KFUWfATW9mGmuUVZZfvzu5zL7qRHeRLAgUY733soVitr",
  "key4": "4n9bJmtcdj8qLB52TQ2BTJAfuQFEhLy6oMRq1MSACPxfe7QWmnYt32LoamAgknTwcmb9PcBbnPFFawg7QPVU8o4h",
  "key5": "5HEUaa7WPTEgcUDsKSrYgK4hWZcQq3sor1FsBNYbcX97PMmrs4kML9Hhvxf9KoqJW8R1YEBK7dXM1gQ69ZHCpg37",
  "key6": "4nYf9H4squKKeKayzEjGKjZ5s3wVvJWnsHpD9cwuRhVNxsuZr51dY5kdEowCzMMs5hUfdXPCbyDzBpD6dYaB8xg6",
  "key7": "4WNWasiLDm76QQB8pXuULnAhj4BLA6HqpaBJzRahtUCChLSzAPtp269wjW8SEVP6XHcUM1D7MoD9WZPd9znYgvYJ",
  "key8": "61TuXjUBx8KQEYiUjajintfMtmJdDXYqbsdf4NDoWPvtFtLHdBxdw8E3dvK4TeWGTMh3Yhx5XyW1tfWm5Pqnsiz5",
  "key9": "377VdQeGNHoBfK2kMQxiPrbXJtxUio2RhJ97jQd99y5qaUqs2NwTYaeEnp4zHr6yVvs6UnPuWqRt7wN7TCwsBoKn",
  "key10": "4Y2EZkiYFBueZtYxKFBwnzA2syWd7pQYiPZVkf9dZw6tkbAL7ULBotnJGKqqxdRowRxQjBoi5jSzpBxnczKvu5W6",
  "key11": "5h1twWeqeb8rnLyyHkA7xRJpUZZAD25zHzuyvssqPnNt3EGqRRZXGeR9AbNCSgb5n4zg2mCcdFKZzCb6gLEdJEU2",
  "key12": "36dhLXvbn7hQVyKRsf3SeqpMsbvevnp3CsWM9ks9PvRwtrZAxnx5YYLUHFpyLnp4pX2aJZfQynKpsPRUu3qimkhh",
  "key13": "3eMwTA31BPCRHm1bsctfGedYyC4Dw8K3fGcQAXnFXyw9FABWjx8896iQBMYRPhixRYhSdvvyVufd8qJ4tsSoCEC8",
  "key14": "3teGGxoXwPMoudPMMAMTXMVTgAXDQbYyMGDscPXZFcqnvqxEXMc1ySBwSsHwCEQi9pM6xKSSi4cmwenMtchF4Lz8",
  "key15": "3voWJpWtcBvovVFhKvr4xAP6ssD4FdeRkKnJxNg1HiQ6iBLgpvupVrNNj1eCCf115zm8XJo4j6xnuFBJZfHsGpZz",
  "key16": "3ztWGmsEGQKorUMKbXAj6CpamSisiwAauvEg1WPD5FLmRFxr9vhLMrvKPPJDDGvLP5Co9rFi9JMVhYvo1Nes5NfZ",
  "key17": "2Tobtwk3MtsoiyLXxUQt1WGgtJpSLXo3NUBGHZ5bKQJuQuG2iZPqs4ghpq9zawmNqS9izjmNM1WcqaHkNinZeMUs",
  "key18": "21h5cejSr9nGj4hdaF1o9jvcJe56wL3Was63noqdfqYLSmzvNJrHXJPMiD4xViExKVUQyNp5aH6ygMnqemDXPt9J",
  "key19": "5Jv2GruA8DdXmmVFiHYj4xVWMBAX4qQdRf5az8jdttLZuvdYAjFyRVX1VX74QgrE5P6NAP7u2bG68Lr14S1c6CJD",
  "key20": "3Zj8sdHc8aiu4z75UvGR8SPmtUmGUy9zov8CwhYw83UYsB6BffVUNHMDM8dNNbPV1jmUrYPkJJuMLEmkhhF3hVG",
  "key21": "3juFSJhuUC5Co9kJssKSgwRBKWXUwJttmGRMDTiCJQma8bKUPZD1yfQgoyr2CtWfhZ88ZhtaXXeVeXXGbVeY2P3c",
  "key22": "24ULwBC1pUbbak96NNZsK7LhejSwzu4vDPVpxin1jwD5DbtP35Wsu5CKzro52ncKGkNeQ4m8e5BSZB67cGNrdRFE",
  "key23": "2t9xzcYJFysnigY3qmjTxRvDxeWwLcWvh9MF7xttZN4LrzPPDjqWpC5PSUg6ieqKARYXWMqUVfDaWQC94kKW4XuX",
  "key24": "3Roe7DpwLWf3hD8ChZJDYvRdXBafeLbFK7hzaxo8Uu2SSfiSorAUNcocRn4VLUqtR5XP3BnrUfGMQ2GyXmD6X4fq",
  "key25": "2ynA9488qD8SyKvJ1yz8ngz2umx2sANrpuCe6bDq436sG2vo2MWXBZq2XtmfS59CiNMouqmaWoMRrYBJLornhYeS",
  "key26": "TSA1c5zgQVAZzaMQs6KDHcUCZZzRYLLmd2x5A5FMCr1WGgbM6U1fK2U8aTdGUvLTkUe6qejC93cU5RvAPjhVVnA",
  "key27": "4c7HxDFsjq2X7XBnqjhK1V1XNYBk63KiutiXBka7HjyVGy9TPEsjqRiQ1VTrFZQ4hDb6VzCccUD1b9ez2fMbcoRm",
  "key28": "4J9AXoiWcVS4t7zcsxqrz9UfrMA5rbPECiU96j7xugUvQnjbsE73YAEATYBpbKkJuksfHikgHobbYRVut2WxpwHP",
  "key29": "zcYqbg4WdFanQLfeAu3DVDc1jc2eXYk1CKY9oRgLAQ7H8V7J6JfYhW3RRAv7eFk19ddWfNEKsDEtpqSAstGzTqf",
  "key30": "3CT9gacQt45qtUqe5GRF81XV8yRy8afjw8WPqFRNzD3L8tgYKUwnVUN8zcAbbstx4GuH7FWPBJDc9QBeQzTobxYq",
  "key31": "4155rAw6xmDLpVd4sKMjKiC3NCJpaZB7FdoQF3mwdi4tNvNo9P77xofJEswQezg8TsfhGo3XeLDaLDv3hsHqc2W",
  "key32": "3PDZ4HsHfSQjm5iwaHY36GKGzyXMQgXNj5sWW2Xek8b3w1Y8WTaDDqQaZgYmfqM44T398LjLJL7YatZLNCuN7nas",
  "key33": "52U8tU9fkjRJ2o24PQH56gSMUGu2k7eXUD9w54ojLA5boMTSmkN7EyAozd4qhZWctindVxEb3KLdFR6NBHccoRsi"
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
