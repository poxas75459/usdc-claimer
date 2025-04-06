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
    "4oNEY2pjvdpNr9qPosPwWSK7wDPYym2K5LZfBnbfavtGeh514uUTp1Wy7ULJPYQxv9iFZBFoASyb6qwqzK5ua6eW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4M3nKC8SQJYdX2Q9tcinkBScL1wfTEjo3DXevamRpQQ7rZWJ8tQGaXgP6cGexMUkqqCV72sfGMXyKJHcphG1ft6Q",
  "key1": "3jp5dpARdzjhP2mF6NNkfL6tJ7xj14At1Jhozy5b8PgsPvBpNBr2jLirSBDQu7DerW2rPLDPBqxbFBV16kcgS2jo",
  "key2": "4MzmmFwWQrkG3L7yUriCJEwfM3VP8NyNQ6DxDirkKmqwysbCA3qrELgU2FPMLbHQccf1AZkkuXEw1eBT1bXuZ78x",
  "key3": "5SiAKcwPmdDrudg46Jw3JKf3bB2hE4PvMbTn8rcU1F4SJ54Sijk2K8biWz6EB4gs6h9jL4cfSQ62x8AreBP97X5b",
  "key4": "5EDXKsncBvB7U5E47Y9fYg6WGEpsauabEBB2zLVAoi9d4kGQ5Z4tpDWQDnJ2QLLLNVXdevGbBBFtNLPC4D77t6Vc",
  "key5": "3T4MKVJ8agLwwmX2G4ERAbk5Znuh8FBYvWf7u42nrbGbnS98HcArtpXdNfd6h2J3ecwxMXTFq7oKY3rbJBm7Grbq",
  "key6": "2ir4mYFzmJSszWZWqVFBdYPCG5oWCMQbUA7cKz2zmPt7pF9SCSXJxqe83ZYda49hZnKAS8QsioLqT7QLNTkrZPey",
  "key7": "3JnK484T4msGa7uPiHbYDpa9qhthCZoZ6pFGqVQERv8ZFUGwT4n6rmHMnZ6jbbMAmys1dGJ3x6UrbbtdKCFR93Fk",
  "key8": "5U4YdPkxxa1e3b4o5huRvyUPQoTfgYSBNsG1hRF8iQ7iPGWukv8q9TrcJa6DDHTCbvEmKd7A2j2XhF8muHTVMoyL",
  "key9": "2qqW11gUCYMSTuVJiEmRKx1U4fAptjPRMC4yrt8nYrjtkTUN7mU1PcZpX3qA6s3vJsjd5PejnLYJQ4c7PXz2Ug5v",
  "key10": "x6PzzTjemwQW63MEGg7KvsFpwT4oAcvCRBX718Y5BGJShQRJK2zNJqj5cLE47YDWRxmDBjSkjUAJD2qL5MLDde2",
  "key11": "2Me4hwDizNTixzrKG7BNtz6LtsJXdCLATQPHrkDiqhK2c6RK7EUy5kfSawcZkA8gY6SSY7tcmx73x5Kcj5k5Bf5y",
  "key12": "4VkxXdqcsScvuoftd6pPquadKvxpDHGJMPo3chGRjGa2HiizhELVSjc4HaTGX6h6N5PEvzdrG4PSP8onNgic6xDN",
  "key13": "AK1YMTwXp1EE9ZX92gqYUcx4YdiYKFxmRosbdaCdBKJEzQazsZjCNWkkHAiL4nWSuiFpqY3ThtdEH3X9ZoiwwJm",
  "key14": "61Pj4p7hrTiAZpM6mBG1KxwSdCm5xvEXsxbkyTggZB2KyvwuMXDXJ4HcW6zr57DTU5ZGWUk7Q4nye6siwyFYXBrc",
  "key15": "2srTq7zgHHPJb7p12KT2fVUcjf3PC72keR5C9AJK1BgNVf5usdFddAmjSJ8UA431qmYfE3Brtr7xNczGisNCrYRF",
  "key16": "jAuXJHM1mXVU9pYjV5XpxgcaeomP6E4a5bfhiypy8RNxwfb58osmPmYL6GdpaFB4FU6kgjDS8ygqn93ru5mcJro",
  "key17": "3jaxg4HRdfXfSfFqA5qBiYPtGMQxvUAeF1hnD4jix8KCYuRPAnjNoE9xLFzqMvkva8trMKG97iwv7DZT15toozQY",
  "key18": "4Rgg27J7etjfFwJUdGjxSu8e2ddTftcnD2o9WqXR3xVj4Vd21yk8MMq8omUGWkS8VE4MVgcCjBhGomvqB6WetYwk",
  "key19": "2WGBsYVmPDrcP9F5oqKSPmziy2oRzjeM1HeDYx8GXPj4ixhZTeHdTefDt2KJApPzjyYA2MLgJ71NuUP7V4RUKuNv",
  "key20": "3bXa25zJB2cxPfiheSEpQ8kBDXp6XutuqiJ8tcX8WuU2LXW2TiBdBZApdZYVagDCUfEv4NjdH7H4hGikd4M9hJV6",
  "key21": "4ny5Dq275gp7ZrEwtXZwznGhexnCZK2kgZCyCGrnoLLofMidUSaQogyQctoxhprWWAxcvQfkXquezntLEUberyfg",
  "key22": "4BUnnMWigu4BfdG3T9ttPu4zeDJZVLZwBbHuxWfSTX1c63Z5eXzd6aZLrXvNvDfz2yD8CVLjnwgot3vmirFqJAu6",
  "key23": "uGrfga3QNkwVB3Et3uy3FWXbk8q9x2hKMjA5JNzo6ZWHuRkoDzoaMw4DkvYnMxWMkvJWKgrQQ2CLipQ2DWmgsVh",
  "key24": "3So5nXp9DfLaMP49KbAviZeGPEbcmsP4qNcQsbuZF1X9LGF7xeor769j7yTQMNPHB3D7fNvJ7nNGN1KxQNCP6Kgm",
  "key25": "tn7pdmnNLrBgEseVDJtu2imU1vHLg6wkfsFtxwdGhEgXGfiPf7RiTr7rRLchUc9xt9zecvbYbPX81VTM3H87Df6",
  "key26": "51KFCAimRmHQMNjn3jnXg4dJY7B9tSumvRZUjFT87acmafB9YLBQQFY43DChSrfTNcaG3s9huyKgiduHXXZ7zSwT",
  "key27": "LjUq6A4dS7wTpe586Wu2fsS3N6KJTrAFhbWXwnHobryZ8JDzfTJPbhYXoQUrbm9m6LtBbEcDm4kUCrwTN2SoFUi",
  "key28": "5kXMCGv7Fhf5EfmeMBF62syRGbKXbtmsTkdzMiSnS77pzPpQFfdE7g6wC5YYbY4bqGVBHFN9pd5uCLY7vvptzQXc",
  "key29": "51y6uWEg6NGcbbVA5b23vRw9SLXqFQifv5qYyLyMAuzaJwypKjfjuYz1mTLkRmAg88PhuADnNsHQKPjFicYoewi9",
  "key30": "5PXDPB2MZScVWiv5xwvJGffVJ5Yw7dsJrv3vkUg2PLzFR8rAcDMGeBT8ggLAv5dfJBoJmn5xR6S5yhvGnFZ4LzgM",
  "key31": "5fpwS6cmLCLixvq6Kc7ToU1gPhHSGCrXGK1mFyi5gD8MaunGi8hCXGqhQwF4rS7RWkVdAXS8Tm8uSn3j229k8P7H",
  "key32": "5deRH9RQJ7vJugdoKrxzqZKcF9fQCC7GMiJ9yiJSfce6Jgqp15r3PK1FXRnwe5YyfHzDA7kBLJxtpJaqsg8m7KMk",
  "key33": "3Vb7EGFo1n5gj241nbRCSLQzgzDqL1JyEfYbukyoGtUtccPaE5aWxRedQw9NNBJncrczo7avBTkS5mkF5UdmiQKJ",
  "key34": "CKNpEcAr82j4Tw9bSJGj9LVm9hcf1VU3rV3h1fQ1nkSFkA1ioEyLwge86e2ZXCqnQj87YoaRXVPZ6C4hxYE7ZAF",
  "key35": "55sV5zgmTc1tf7GSNsrGR82frDTE2wVTepNKBiqZtkHo8wXszWYN1cN462n4YFSVuq3y7uF9WKZv8qztkYW9VviA",
  "key36": "4MLUDBaRuBhDFXnBHnwhTSc8d7ifvs4Ckw7BD2BzG3ECP4Kqi6BT8CyqKf9wPyEHvnhnrEZQP9sBzoAVkhpdi1H1"
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
