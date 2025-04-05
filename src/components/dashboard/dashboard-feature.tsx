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
    "64iNhSRSHjjRGNUTsuFy3eUG4kbxqXj98qzab6JvG1JSiGESWTDNodVFbdiPp6KeYQACib3Ee6Dzv7emRndnnM1H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2K3Ey2PGgDZpkXEUzSZK1hvuGMLDEEyvdqtMRP83GWNGbAYnDAnnjrsEMdmjXxi4GBkdiqheLF4xEkdCWYzGxYuK",
  "key1": "S2ZaWdsu2t2KpobBpXFaWPjx7ouqAHSdjitd9XVSDZhZhP6WZvRLJfXV7i2eQtJenLcgRTEKuA8wBe313UavBp9",
  "key2": "4q2CUf52WV3zHaGUa9ueihDFg4SvnMNzHQ7ef9LVVQPPFW4xSG9zagffW7RrvHS7xi7UvXPX4SXLg5pv3ycL8o7U",
  "key3": "4rUB2TCtRpvS2npHaHcK7Vp3gYogbS1K9ggo1MAb4xTKnwFYLC9FgdxtcTePyfGom5pTBAnKQhjNhouuym7ZDdBs",
  "key4": "2rMN28L6sdSB4GRrHMvyccpsPbFhcAaiAxZEnzPzAGqS3qWWTBnwDAnA9TMu7AuKLk7dGXvBYAyLypugV2yHn7N",
  "key5": "vse6MYgnpoS5AB1i5bjxu9CNeSctxMEApy2ygDzGW3tqcquWBaxBaXZJAT5VjeH76htURD1vVHi6kKkFCPEmtbm",
  "key6": "38XpYDxzxyeXZgWCwFKaLeYsNHEiAYX78prf8byeMoSUmnPgNQBx8DAPKzG7Tf1gjjFoNqTSs9tTMQXZgwXf5khX",
  "key7": "5UgjTyth4haZ7jucQGGS8kNHct2ReNgahFSckKXPSVms4ZwgjmSfjQM7wdedR93s2oiioU75owu7ogwccDUd7c8K",
  "key8": "4wYMbzcw7f4wkQaPvSbuSpxcsNmNZj2kf7Dh3HqTX4Pevp4R3obMJ1Xgz8Fpf6V5u7kEnk225zEY7CWzutNH8HYw",
  "key9": "51Xy45xyQCDivsVUkWyzWQvxfCtNq4rGQAcPYA4aNB7W2WAq6zduHYvndPKV9yjC68JH3fvrpXein8iA5CrFqNjK",
  "key10": "Aqg6AmDHoE8igZLc2p4PeCodBeqCfvmfaDALbDi5zTN3yKhvZShDxSoMEycLfZMsvKAC4g2U2vZj1yhc8AzscaH",
  "key11": "Qjoa55zTzcdhjrHshtoeuUxJCmaH3xp7JHn7vCgR6pT51VTKDq1q8qvdWC1LwzoWUiMBnQncNYWVQMy5MQR24u2",
  "key12": "5WXccdFie5fNvY2kWtLytRWUin4qasvmoVrT2LLEdpZerATKVNkwUHcqdsA9H3WpBCWtmsTzyiQ4Lp5TeJGpxnk1",
  "key13": "25wrqTiuYELHcbFgYqvCpKQN6XkNmhQgvqSed9w3UdxhrACwa5EnjGBrzG8MuvRtCfpkQrs1ocLwH741Yrt9iyX2",
  "key14": "3RBx5mRp3sTGkoPohgmxfBo2EsgRG1yVe1NePv2Nk5riRjU1Kx8TAbYe4ZESjZzZHTbawSVxDivEi7G5XwkN4yDA",
  "key15": "27C5f1xZbnNMPzixoMUYjnHP4WY2qHgqSotzNjfHfkXPVRKLund4tqeWS7Sk1vFLwmyRyBJEFVLpHi4jfYq9eghE",
  "key16": "3ryDcFrSkfQBjzMLorEDib6yUCLTk6Z2njLzWMTALQgncrN9mGmSVrhyRnV4KxZHKGVaBX5Tf3jpKV425G3hGYd6",
  "key17": "4oJu8QLWAkyJ78UeYo7sekEq6jHw5J7sF595nEv9nHTBsXgQxzfGuxTAwHF83GjYycLJip7PFcQeW44f9vGjhSfc",
  "key18": "59crfEuLXeWHr6UupNSS74KoMQYFMYqUfu3fRpN22fKzauzxreZfppTYgEJWWtkNEaCZCA2mj1tAASVG6U9xzk9W",
  "key19": "5deDKFmEnb6qQoQXxJTXMWnsq5aMYLXc5EoRpRK1sbhcsyJcCeHN5mk8XdmJj2Q6QsgVj6MpdSzg84PdrD3gtyU3",
  "key20": "3912jFuhjNVhRGtVdyq9225KYabUPfMBiKfP7kRgnEQ5sjhjgKQVtXqZpK8QgeVU78cXFiKf865cSykJJoDbh1Vs",
  "key21": "5zUt3aa1ymrxfqYT8YvAb8A2kZEprX5X1z6HUvEuzexS5yVnb9b61ps5XoNDVsBYXwwFJhyjn6kXR6YxCLrnSY1z",
  "key22": "2YsLMc5kcawwnBpLAZEdh7bqDTSJM1p51XMU5exXMNMupWHZjxewqPxraoeep4ckkL6KEwTAoxtHz6FaTSiMWhft",
  "key23": "65jCyXyLqdY7uPGq8gyR8gcnGg3jQpXghHKZQ2eJZTo7nxDK9rFTbPPVrNBzv7ThhNELSAvf6pn5J9qFegEAdibS",
  "key24": "2qH4qQi95M8BQzJCYMjsBGG6f4xfc7KKq8fUUt7paZisBFQwZ3K3WorZAQhtjtWvYrpi4aKBrvrm1U9tbTGbx7TM",
  "key25": "3vzewANqCuQx4yqH2hrNfCmQ9pheGcQiFFqJA1x8wXxi79xiMAXuZWA8VDfPnuhBkWLVrLuLoJ3oj1smnu4MF9ee",
  "key26": "4dGa8aS74EcT1KCdEtPjzWb4E2NKxConHHSwpwMgNbxS8uWG7gnwaCD29PXh5NvWtAJqbmVNg7Ej9pp5SSuEoGoG",
  "key27": "65DVqu4m2xd4MKtuRxKPHD6qeAuLj4ZnzzAzPqovG8c51CXqacQRkvMLnMc3T2KDRu1wG9iG9Za94ZnE4CANFcsb",
  "key28": "3kxjkbcJoFVbxhd2Z8GgE1pCi2Y5R9irPHWqpuR3gtW9JCLkDKPY5iiMY2mdZLf63iybUvQ2G4cWL1U8zfCbYv1z",
  "key29": "2oLRxU28R47JeGEDDqQvud7fU4TsRpLGog42xBW9YA6itanESQP8LrcJZNxLNKgdY8ZzmdSLadMxwS1oXS3kZFKh",
  "key30": "6247GHsjs3WEMY7SyU2Xe2BDZnskhES6qW31m1c4dUZkAZorrv8dexhepHkyLCwSeWF7p8bB4ZkqceSj8seoQueE",
  "key31": "2vmUdRiv4fcqZBzpY6uqG7DZDrYfbw9LZRRv6RVZcnjb9Bnn6hwxiu18T7iten66xCc1ynSXdGd3mBmn7hzNwCEp",
  "key32": "2RDJt9AvA2ee52cy5cXoastzrbYzuosa6eUzptQMLWKDT9PhhmPSJW85hD1UVjPzjsnUNWHVxnReT5NLeytHzuAi",
  "key33": "HeZ9U59Ky1SNK8y2Gpk5dEkro6RkSbsTJu1yx8BWtQdMbUxUdPcbiWgk726zm8woQX1CAq39DrSBazuTyjBDwj2",
  "key34": "2N3rptAKNJUqumuZ5DrUcsg5D48xdq3uMTaTmAkndFML7mSy8Pje8PWuxfjtqST7wUxJDsHinypWBy3wPGfYxviy",
  "key35": "6CKVYTBAGVMrHdo18yJn72tDCQeGkWVBFPVwhHJa8B93FEhpyHYGvbFQofUDjNvmwKxnChyJPDAYW2D52vKvXoa",
  "key36": "2Ru71Zyn72xuP6z4xPtih8gYoSmXMhf2cS2AtAJdpQ3ExrCVr2iEt7oNFVN2oqg2VFbJZU5jTzkendmEcwu1Aph3",
  "key37": "5z5ptRZFbDYwCU6YXEtW5yHgjhWZ7vafjQrDScrGagU7k8LM6UzDvCpPVtNffzWeebybiFW6VZnDvda2Aaxd7Bjz",
  "key38": "43PYQoKwDCWeskmEc4UZSsyHreLiAQtXRGPbykAqamDDdpYSbTZNEG4Y3cizRqDxnffoWtHVQBsDAgBNvun5JgFV",
  "key39": "4Nad7pUJVeaUYvNtLwWrgmeEJZw7SZKsuute4o27zmiZ75gYQyoWwh6ztzdJp3zNCmdTwb3YGW7Js5aBmTtXLocV",
  "key40": "s3SKQ6ts7EXueLfUmF22N4bB65SeyX6HTt1t8ueMcCYcX5AuwXasBarUJbc6xhqNQY5cTSpc3dtXwafKk6o2QNd"
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
