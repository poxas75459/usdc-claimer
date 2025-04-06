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
    "4N7LbVxUCcvbFz3bT2t5j2zmg4KqfVxiaj9WpUFCsd17MusLtqjMK3gWYwHNTqvX7brN773SYPtweMonLucVzk4e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MzWEFUjjKfPX5wcQC3w6mwX1sGQFqiPakbpbLbvsRRzMhHDQ3yUVfcGMQhFyKckPWVcQPsyVNeX8c2HftaDNacS",
  "key1": "2UcKMcr5KLnQtghvZJgMZjw4x9mV87gexphcwz5jnnvDnbx2xfx9Zv4Z6hrhbUG7CFgkrr2exMQeizZNVFVGpGdX",
  "key2": "2VVAQyQ1aSxMVJSRGryCoFbsbQ4C4maoZiMyDrWbT9MdWvtmtmVqGMw2p9s2Z19Uf48oBAyVuQqaBeCkffVzebMK",
  "key3": "24a2WF1ipWjWQ8AVKpV865imwCvbYvbAexUoS3XZnfREpnpbJjNhMRXhu6K5fV1o1VSrZZMm4d4J7DJqwtSohgWt",
  "key4": "4MVegzWYAGXjFuCBgv6paEBXi42BoxDyHU2AzPgtXd14V4xouHfQTNDdgqezKhDXYWcgZFj3qFZbEMYM4VCZKYva",
  "key5": "4i8XvvV9nAfWHdmUmv6xfHZJCXzzXjxfvq7EqtJEiAoMNkFSjPfQC3XqC3pvjPryjUuU8QxGo7UojSEo7JYTVPfk",
  "key6": "3CaJ3EsTgP79xin28txL8Xu2j4qAQAvWB4idK7kFweJQR8EdRotct8HL319USxXsAnz58cHuJbXP96HZr88MmSet",
  "key7": "55Za3v5XW1E5PavAvYAVd2b9cb2WK8yb8rtTue6NqaDphNzCryK3mMmVgPMtuFGPVxSc4AKHMt9aEus9oUqaVR41",
  "key8": "36GPwVudCxrYuFt5NfxjmN6TRUjvwFFqmdYxkUnQyfjKYUn8PzcXkxjsecuzY2dPqor788c993GzzTE3iE6rwuEP",
  "key9": "5jSySTvdYAfdwjya5PFurFpdsu3SQHtZ2dSAyN2pFiEAEuDTGjG1qsknWP7b3FueDCkZWVpbrCMweuQx3ZbZCWxt",
  "key10": "5usY6VAZ8G79LRbJQGsghMJREVRmp21Kag9hS32U2dgqroxJDJhoUucrWkx9hrRvkvaNYGNgtAXYsQxZB8N4p85g",
  "key11": "piNb6dJTJ5Z7oJQvfPg5hUS1nrW3Y2FtcbZKThfFARHq5ECHSNdcjsKfWkjj7mUgMKKE92Ybe9nnaESUZBKXN4J",
  "key12": "39Tzffmuk6Jb31nZCADFPmRx6D7hw6cuFmQssDZcyHmfVT9rjRuV2zNkQmLnG2tfU9tkq5zMdN5cYFBu68Dt8ikp",
  "key13": "EWEJe9yiZtkDHUsJxPmJ4rxeWk5Q7UYVy4ehJZBWvpWTRay5ApuYcPv3Qzu2A3myKG2ieLTM5Wzf6Tn73EXbGij",
  "key14": "3xih1a8fS8gq7vPdMKjoTgNKm74sFnwJ7a5UPuzbzt4GFxPD6qmKr2RBNNNxwxzWwSmXd743GKN74o2dDPuMm3uA",
  "key15": "3652dowXQM7VBypprsJF8M3stB8huxygK5AqR8HnzMsk6EV5bPmCwLFUBYfZuvPV7h53kPd4fGvhpicuefv4toCB",
  "key16": "49ZscGEJJWZ5JBHEF3yJmQvvnbGdQhPUUvCCpDgJq2ULQu5rzV8c2j9pSdRXTPz7UYxWTrC1wbZZXtqEoGX5akqF",
  "key17": "4Be8Q919xvAbQVVCeGwYhtpD9Rd9cRQMqYFJbD1H29hmjj8QXZU6Ytbqa6eMktsbEhEpxKrcpYeCZUnhpvpi4S1V",
  "key18": "pQuv7Wq7JpLKV11dTUEdX9159sNWYSBFKTm9mGy6vPExzY38YD4gsfXsxi1ZAowuJVMS9Mmpr4rPTj1h3k2FUAs",
  "key19": "4X1Dn2wGbUTaBfHUA91Hhru8ngYVUcLnJsBTCaFjXJqC4iUKn4cS6Xri48xgJaVpRXzJgtTR4bRBh1d48DJoMqqk",
  "key20": "QWNzUnVxRz7ArtdV5fReuCzredskxBZfYjCKpA2ED8X8aDoF6XXkga9SBPLvDZw2JzhBfAzfNcZxThcYuEQ962b",
  "key21": "2n9dsNdWq3EhKwezAnX8DunGRi6PnJPjSHDrGAyAVzMNhGg44tRD4WH3zqYiLBd9Ccva57QksgYQVBayY7z9SxZu",
  "key22": "27gPBf9yzYoMcJmzQ59BJ1mmpTibhH8X2kqWXEaQi8xbuXqkh5N9JZXG8EeqRU2UMY5DSEjLD368ktvk6xAUtFxa",
  "key23": "2fmSMWWoESxQ18uUikSzgyewr2S7zFzdhYxJeW6HFr3CdTaMqADhdLtpQBPuvPRh3aLjv8e9GLoSc3n2WzfknUFH",
  "key24": "3QTK5Tm3ybLyvDkxjs9hFubjcHvw4CbJTQaLX4tWK2Sw8he2kwP7j3tUzoRDym1uG6U6vH6NYFUHBU8ZBBYhjy4m",
  "key25": "3WXKH6rcp6zaRR249RqgiqfX5jhQMmsap4m4fdNt85LjuXSrUPMyF7BLiTv7Ljcy3GL4z7TxtNzADMiUex572MwT",
  "key26": "L9Ah5KvKtvFUyrzfLwafYz9esoBeKt8zt2PcxNwj5x2v5CSu9sPj6DiUjHwPuLEd82EMb6yqdvkH1vcSH3kLPJ1",
  "key27": "3wAa9V2xV6ZudS644gzQ8HwnmxXt8iB7reLdTFizffFmdgwGDxXYcecB3s55s6qtey1tHiEN81kVyrcSLwb96yHa",
  "key28": "3cVFwr1Vri3iDeGtRFKnZAcP6J5xD4z5KeNz9tZDaU7C6aEZs17wMQv7hB2BQXRtW9nBCDJNAPFjtRvE4gh1rhtW"
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
