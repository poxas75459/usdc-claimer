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
    "22s5RhjtpJrzJyeK45ZxiDhBqBEUZjzXMK88mX3VHVj1h2TG1mVrNE4a2TxwzhyEj8qun67iqqK3JPeSDxTv5fhU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YEpKEpjGCFJm41gmYDsNBk4JCiQnQcEq744uVMAP95Ur9idwsELq7RraVzcKKhpixYpSL4cHN3sSMDqXzggVNfB",
  "key1": "298eMWVhGAf47vXGrGA6sVM1BTzyVMMKxZVcDysZb2S3Aj5z4phu7JaMBFiLdFckF3nBh8ebuhBbeS9PWJ8wKsJs",
  "key2": "3GJQe4nGKQKj4HDtjotiKfKtvGJhKy3Cpi4Nfwe6aqYdMHyAWXvgNtSPcY6hZGk6oXf467dRok1L46BB343qECne",
  "key3": "4TrhrxYLuVUrVKpCbqmhihd5JKaXb3zrnis3ajHYFZX3rhyehW9RdCuVFGx6kL4WfNnDuPyRRUG8h1QAvkY1NNMy",
  "key4": "2uSwk61Mx82mWe38WacQvkCg6rwbJAYotLtP2kPoLuCjPf7KQ48CMGq3J2jJq9eQWbVanfQkC8qhoUm5u6SXuwmK",
  "key5": "2czUfX8nX3bWbDycrv8pCDz3NUsHLJadQhQhHwgtQ6qkhZKDNa29jmhapxDJNqAfA5rcRwtp55XAPBq1A7USFvJW",
  "key6": "4adBQd1STkYitgg1bAn6h58FXKvYvmstQSNU8KcU2DdfcRTX6zMGcpwqRrjZ9HavDi5YFAAMP95ZXLxkTKib14hd",
  "key7": "pJGF7iA6JSp2WYc1766c1JuR3EEBhMiaRfJg3kMtTHPCo7Vxt4Peoa7gWWNfBGsFGMkt1wcyc2DWL8hdtMGZJKi",
  "key8": "3y3jm6mmAu74C7XHgVTy9VPX4ksHfBzSbhJUGaTAeYXJncZef263ZHXjXu3V9gx3SXNn1uBos6hBDeVxaPwHSYiQ",
  "key9": "59HVuj7dhEGVzdmnBpMEW5iqp4rN1cyRNrUGd1E5SKaNG4uFnTbCbscR9sNJo2m4GqoQ3uHXaX4pzJS99k8hypkL",
  "key10": "3skpPe7Ph7j4EHRpC2FP6UvuK8sEEMLdAGW9csyPJcXYx4RhXceiaVWfLV8t77MqCCULv5eSTsKzXuQGCpWxg85x",
  "key11": "JBjoAQnausP5X3yxDpprLLFE84Zwz5qbQwxRXcPen9ReZ7nsvJkHkQeM5kbxTQt6egJCb91LiVbAk1hKxxgathq",
  "key12": "UKZVnzxpYJu4CPYgK8KRyzusLmJP9Ex7EqPzgPPc29Bo28tr8MxzPT89ciSHdRCDJqMV4Z3MtmnjRgW9TpfGQay",
  "key13": "5A8btqLWaFay8UVD1tkjqwdGV8yVsGpw34AGB3372JNZUSuD91C5KcifebUP95F2pLyFzwyBE3LvpbHE5zuWbDjb",
  "key14": "yZRTBH4snMAUum7RzeTR1rqupK6Y3ZUVe8heafficbYVYNGmSBgQBrqMrsMHyEEnCNmhgqVxA6U9wKsThsudMFg",
  "key15": "54Rhf6mBZAVbd7XqSLyLwWR2Ft4pwAqMfDGdWp4z538H1JW3dBEvzw8PSHbYFbqA44mfQoogJVYTFyeSzppyZna5",
  "key16": "4A3PF577vRtiSUFk81xysRPtfzpEXv4uDzXacy9nSdbgyihYsMEZQhPibLgAcDN7B7CeQjsdPDdGCMr57hg2sd69",
  "key17": "5bbXBhi119xZByKvrqfWW7auLB4G1CcWShu7ioQ5bvTW148aGArKzV8Ga6rHSWMhm6XC51LKCjvLnLcFhGG8CZFQ",
  "key18": "34mKZSm1Uro1u1kERQZHqP36ajVeP43yBJggrSQHD39nsLAE7APPwVTEjRwM5DGmFD6iJHiY1VJPX6NYYZbQkwb8",
  "key19": "56SootqDfY5jtkc8xdEj8B29kfZaNejcthaxPKiTDMY3W9awojS1Jq74GVSqBXFaEuGYcewv9EaYUGr1EbXGFfuF",
  "key20": "3TLkUgqsSidMjRk27vAUAjrSHdvZfMtMgizHn5V7oBv7M66928jyUL3sv21e9GZxGKrdUGhXJaZjKu1mWg6znmBd",
  "key21": "LrbsLuSnDZ73oyBe1L6zYBBj7YBE3yT3sytC3o6fQMtE2h4R3Hi6yp9Y8yNXZToz22DU7QF8mHqSDKmXV8oMiyZ",
  "key22": "3Nhvzw9bJbk6namX4TrsMcSSnuJZ4RqUPnC5kEy9jL5DmMyoNYpAJb1XjxhRxfq9s7eUi4722jGGhFavYN6jVpqa",
  "key23": "33e5VhhAdk1rcpv9gq9HQuP6eqWKe5cPsLct6R6xijyG2WiVaiRN4YDZPb7WhMD9aDEDJhPH9g7oykNip3BnZMdA",
  "key24": "2tP527Sz2tu53rQ6jRbxAnoFp7P4ABiygFZ6F1PZMRzJ1seuQWiSEcNZHskNSz7eTn7gYRrhTuNNHzUJ7DthnxsC",
  "key25": "5Zgk9tZM5BeRmEVTwsMJe6hSZfMgsKUvHMTyW2a6yLNokmh3uNjfx4ccVQW9bK4tkWLW3dMmqNGeoAU3KFSunf4r",
  "key26": "5J4X5Uw5vWhtdtLb4YDLwXJmfzCJXiL98PVDsVL5zpohygjTqy4q1UcSj2tiCGajBseBHXxocEPruQgPZYqefkYS",
  "key27": "49XeCDQsVfBwyyboj9MHrDWuAaaUHxuTL6n67p2VxZ5TeJEjHvvqENEchhLTYWunihWzJXgoSRSRFR7L8xP3QEJY",
  "key28": "9UbJygC595ofGct14F65jWCkweMtdThnGykV6jwuTinhi4vb6do2vavtztjkKqU9FjdKZ83gMUbD5WhrHqrX9Dt",
  "key29": "4F9DsXBwd3iSa93qZRvn7jU58XknYSDn6QYq7uY9PwQArRh7gzAu6rPSqFUwXyFRq42sBdD2Ab7qmLe3PTQeTS41",
  "key30": "29GjBjKut8KNQ1tF2YyRRZ7hY2ZZY73mU6UETpTX9YdLDPsDhaqnHitMexx31QTobT5XytmrSjwQdYcM5MdZsPej",
  "key31": "3tHWKrghCFNoHoBEn4PNqgrG7DUadZU223UVFP9uUUd22uyu32pdFVN8X2yQvPAEHShBL1pGDSn9J14GPQpT7w4a",
  "key32": "3aBBxS4yD3CdaKnmspCCdsn7yj5ThSWF1FVMWHViqhccyQ63ozCKEMJ3XXgz76LhjsftoEuuVVZe1evpt1qRavvJ",
  "key33": "2DQjGi78EcbcXcKK5SEWjV2sJWAALWbwCnLz9CHoFQyKFFkMzZxSJTKFDjBnmUFcDuhNbSzJXuZuBEU8RsvdteC9"
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
