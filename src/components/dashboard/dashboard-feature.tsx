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
    "JFL8oFTRxsKSX5kpM5fWVD2nRyVphd26fvDT4u9G16gFyU9cnmfQKQpa6sjcjDRNYafj62Hxr4JXfcpbyEt2BRS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2heBNaHbjw1jzCkKu8ce8RQFReLsqZnt2iRmQRGyak1pecHKkkZW8LGMHTxhY9Se4gD6cT4Ry5Dn5ZkU1ZUkYR1z",
  "key1": "5HRLNB6GjvFnLVZA2kJbyNb1f3eYCnjcfJwn2Y8HeuzpaDhibDrbiwEwbsoA48nQqKr6DcRd1NKZRJgaVnKeq5vW",
  "key2": "4XF5kPpYNut1ja83wcx3Q59uJd9CDKLBSkBteXKsU96v1sPSRsgpEZdqoBXxZxiKbrcCtt9MxaeLzwDo5gVzYFrV",
  "key3": "jxn73A48zMKULva4E11Tzaykoriw28p2Qsu2eQ2sAdg3NhBZhx8WAkbkdJzys4CnutYjB1gAFchb28wmNNkoKMS",
  "key4": "2kuJj6ZQKCXDPVPEmYxEVpPV6w2hpF8QspgfXCfE6ucoupxcqajp3raDJwPEhT6GZVrSqnXSiRxp2yXvA3RNgnFw",
  "key5": "5FSV11P7fttU8GDfBgqJUaVRYtHY7QP9E2zveEVYDZzi9GrcjrYm9i81cpybN8aVyTWjncw8E3NGRA4k3N5cePjm",
  "key6": "4c3dSJSY81nLHQGaxhaucm4vEtne227NobKg2Qesievz4JzgTh7Xx4mt657UDaJQcPEPy6etCgfpixsdu3UsKJeS",
  "key7": "3wPWVCPZuoZeguP3rHeJAZmdjhQnVMvhAv1cu2oWWigUAWG6Tt1LMphnj4kV1RS91dJ6X9SKHkjrHPawgqbx4At5",
  "key8": "5ugGugCS4qWxqbCNqnQvt1cG1VsgCukLp6Bqum1Uv6RXcA8uT9Te948U83MpiuuGX6mbdpPoZUy5rq8emVXcbMq1",
  "key9": "242s6X1V1RN2LgcuZZ8HjUCdvqaDE5ZpKSMD39TGAhsWe1rzfe5C9gsj78GjSWXFDY4aHsEx6oj5KoFrmt5Wer6d",
  "key10": "57UfkJPRqUPC88ydRCxggrT4AvSfp57SesuBmVg3GrdYdrpY5bRvtcMhyeh7dbNniiToUveMKg1vyPYpVBsgTmbf",
  "key11": "3k8MCjGpJZoRJu9NtCCFZ3zjEzp91u2vmknTeSL6go3m3w8RMUAGtVXScrf162JBkGjydS8L4NZop1HsUkRDaEkk",
  "key12": "2XHx9YnztfwZEFwme4fTuVMnux1o7tGgtQQF4BRUrUt925bAgTPKGeqfzFaG38ZAUcXquutj9wzkYBP5kQfFeJp9",
  "key13": "2LUjSFZ4v8Fin62mqULS93df67n3rxSFCpuCkGLYUcoQzFLH8kTwcWWbAFCCKdQPcS5WNKrJ2ESoHMTnvLKni1MP",
  "key14": "5zCQ1qKmto9DNf7qGugrgKzu2ZhUcPuzFYWpBzNoBJ3WiGDzjign43znLEs3JEsCb1YqHv62oKJFBqgVPKhyPSf3",
  "key15": "5bQjRGsRr4hT5dEknYMihMAwetzhtmhjvfQyA1yiMt4FpSwtnxVhSWyaj1EkKNms3rbJ6qPUFvbxuCC3fRNKqXaJ",
  "key16": "63yFHcJfgrGt6z279XEENfiStojg9nDTnUak8VuEqfvredHbE1wuLUef4MuyREna9j6c4nSzXcsyFZGeF153YCC5",
  "key17": "uMjhL7Jtz5vzak1R64d4wChAgiJfMbgABAigwyNLBhXUQE3y8kH8BBopCRzkeD11KavdefoG4QPhTDWhgM9wPC1",
  "key18": "56MoBJkNd6f3oKFAS7UGncNWSGdx9FqMtvJfwLhFZDaVPubquVLHABdLRuxHeioN3dNBqjP6QZuEuYN5YZi19Qku",
  "key19": "4JvhzXyisboQwSGTQ7wk81eeUv2UJob9rvqgfX3vjRfDmDBHkP1SpxZVgFNwF2QF1pnUFAAQDngrcHr1Atqs1fpR",
  "key20": "RyjTqTdVhfrL9pQs5jk4exwiRUBaTWZbXKt6S7E3KmezdRuk6PFb1wX3XYp1w1gmSeZKSKdj2EaEN3wCS6DVenW",
  "key21": "4SXpBRWs443rnfzZTSciVTiPfVQk2N8TxUZxKb18PR8YWKqB7SFMSyH29HqX2xHwQbLxPkkeHjigzHZWi6Ku68SL",
  "key22": "4i3bjYqiYfU3kQg3NNzaDBtKCdLX6bQ1MD58A8fkNPZuPxs8tK4D3ZYPow19cuZoLwbRN1nME84HR3qb2Rdk81nh",
  "key23": "3PczXtkRv6cMeuuGjYCgRSjoLX57NUFTz6kqRwY49fK7JwhPKrEvDhfxD5knuu4Q6UPH6dJ1LEr9GxLqczhYmqBA",
  "key24": "28FYE9g69bn6MhA53KVWazqVPoHoWXCEkcWENqdA1j9rUeJiapVkJGuSSna6T5om3J8ANRW25pBKwNEuLnLp4oJF",
  "key25": "25EukXR8MzHaWKAeUA32kRDftbrPH7ShFHvhSvmo7EMnGxmmX1fKLW9k1dA5CLbSJ9z7La8gGaSmWovDt752y7Au",
  "key26": "3UZWrttNFX2HzunBmEfzAicES2onRjf3WvBjd69nshQ3arB41i5dqm5MURdBky9w65qEFNMSVqrcv9ZNfZTNSMA7",
  "key27": "2iiCimhM87Eb9EP63cYgoR7ZUhGAHxbxFV3oFEhdSSVXSy8Av3eA2d2rsYEvCT8PPf3at5kwHaWZWRwxtS37ADVs",
  "key28": "GCBkozXB8UuFgP5F58yv78sPWLxbB7HHcFFGu6CsuSimaHFiMcWnAJdhuTrzNRBPnzmjBn2P2do3d73s81fugJj",
  "key29": "3Z3wkwyGQyZ1Cqq2F1cQ2vAhyth8kxNzztj38qqFvHDQf6fBBthdTVd65yBYBDf8rvutVL3xpzD6CicLe5AttNiQ",
  "key30": "2Y8xveHTk1wrCjdQRiMRM7QxBTfHAP2361RrkqMoYPQfAhVizJWxaSxCMpYHg4TQzVWsxme8Zb3dz9RXB95AUTy8",
  "key31": "5cqFqpB86YnxA39ap7haX9qTPgnMwtyLozvSxjNDxMrjpRu6dZLPGgVcjvDS4SuT7x5bgyHK5cXoqyAg4TR6WcpX",
  "key32": "4WJg8TTfPqz4So2fU3yx5fDA9UXtUGL29n1EES9nRkogjTj2pDYL1C3ArSZHZEbhLVKjiKNCfyAWqHeNUMrBBUhy",
  "key33": "2o4D5jrL9srwVP133HGT9QGk3s7igKdASG5rReogwjhPmjmmCaVCNJUUv3n5q7eYdqMuHDa6M2PH1Ur4A9KNTwTP"
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
