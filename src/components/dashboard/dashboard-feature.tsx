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
    "57n4iMbdtrpEZ4JxgPmsV5s5mKGwadKDSPtq2xdv9uKuFDnkK3iyRkhA19DkeydEsdDHb4d8aV3C1NAfESBpaRDy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qSLQPnLQRfva3k9VMuTKuscBnNtYmyreZouy3PLeBhqVpAJEB5ZgZWwDg7gcZWgnSkivKt5oyxS8XkaaQ6q979n",
  "key1": "V3oykUGaQisrDpNTCc1qLT8i8YFBP4GVc3pNzjwZnydbGcE59SbmKHxtvk9r2ksVSWxYe8S6rE4Jat6UvxGD5Qp",
  "key2": "4F1poVZ1WageQ8ShTSZchSZ4gXPjugfUirEwG2k1FYiTLZB6RUn7paYSqGFfrypVKQwRo3Hcp84ezvFiJfaRLUca",
  "key3": "5LwAtbxNN7g4fLoQ9H4w1YUFNdSYMrBrfJJuT7snee7Qw8FWhYigFggzm5UJFeJnBbnKAjYjUtJ6K8ygNG6pqfnZ",
  "key4": "25K2dZoLqsU1c3WednEuMf72zcUC6KC6CTq1F4geXgo3GMXivVtHkQwGqio8ucvQWxf8PvpnFW9gLmaNvTcxMGiG",
  "key5": "jKmGRwKVYtMQchPF8FZASzquANZe9ByBsDZKnLD4AMMGy3Y5g8Srf5W5h2fVkAKc1emrvfKmmJxVYzYS6MNgAoQ",
  "key6": "3dfNezYAxqKRWNPwem3kmUWmnPCcEHNLZ9SpLVXRHorrUYVEHrRmRDYVrZuU3xishG9f72mFSFoxEq4Rn9fkj5ER",
  "key7": "41uCvMRjSK19UhekNarUBLzKVryeFiXvGmmAjNqoUmxDuhRJmqBtGp7331iN6KoUJd7nwoeQrmmipnjUXnu4s3gh",
  "key8": "PyAo7RPVR7BFDvzVHZstV2PFN3fhpvsyvRJMboqZKT241XpEGJfd3HL9vctKerJqt1tzWf2Vsc2wZF1iZJD7u3R",
  "key9": "4Qck8viqk5GW8Fadr1s9KaUwHH7B8eR6BE67F7K66pEEcKdR3huDnPn8CqYDK8naVPNsagBSpHg5WWUnK88nPrQj",
  "key10": "5j6iPHpRy3YHkkHSUengXUQPK3zm7mBrtTq64bBHJDpJxrnsrdG1F2cjPQCD7X4eqW7S2N3D1Ga1pMoBdgToS8Cw",
  "key11": "3D97onvf6S1sj9cTDBF5Q6nuYef4okhqLwPWqQVdT5xtRD2i4VUxTY55oB4EQryguWmzhPybxG3JB4k9FX5c6Mbq",
  "key12": "3X8d1z7QbFSLvXEKbJTvmeWqZpUFJVBuB9VTZ1nuvcJF7eQ9UAryVMt8YVyXFVu5uw13QYxb9XjK2r5zRYv8PHwA",
  "key13": "vTQ6sW2Vdmydw8ZuC9TsHddwn3tp6V6P47AZbuauBXTJ1wMPAPcEMxSEaNSdZtHYQeNMN2ruur73LPzMbuHvj9B",
  "key14": "61Hop4R4tPGs4LzKqKL6cXFsC2hSnvw1DrE5jE5Jidg2eXsE8tEx1adRCAzFq52ppiK9GnCoKjvUwtrAWDm3CHEZ",
  "key15": "Qqt4bh2NFY6arzcL5sto8Qobm8V2wuPo8RYNx6EttkbsxeG1anj9GfnPaGFV9hvr7ushCE2n2dsKvHnQS37P95G",
  "key16": "4iQ4TScvcw73GxGmyiReKL1eyopjA6JpuKFzesTv7oSffVHqceYaEkkRAw5KfnEeQzLLDjkfubBxvJfE5v5ZWeq9",
  "key17": "5uFxAurbTKeaoW6A9kNPZ8PNKnbBNuK8sVnXToBRuqzY5oxngDm1WDJRChinYsMxnfiutsm5BAWCCSJPNdiRE7X5",
  "key18": "gmBFJA4Bro4wpoyVt325W3m73tU9Zzmarq6rgxoPpgLxLZS68RikeQN95LnzQXKi8ejE23aek2MTirkou9VrZfj",
  "key19": "3WPE8rPbRaHW7ZWEPNnHzwzmwSLk6HwzVMsrAMcKjWtqqKGEjAq5yxBuaFfTquShrLsFTDyJeCcBJAaomXw7LPVJ",
  "key20": "67NTAwFbgnFQt81brzCBdJWG2HJTP9T2Fo3XZm6TH64GdctzEzCTi1qZc8jjWLNpNXRBa3wDbP8gW1FqfoBNYXoh",
  "key21": "GafjTijkEPFqNHvwPzgCDqCHahqgxC9XT7RhCziLd99AsEBWCHfb162i4thxJq9LPiHzRK2DJ5hwsmoghsj8bn9",
  "key22": "3M6dE7iYx5PaX8KmrqGjXs32yqwx5BPCv4qe1RChiTtwdBQRNbBGUXxzrg4iNjU7pLqqg6Y8xyRgvWYUTyPxofUS",
  "key23": "gC5HHR9iRbANcQtfsGcfWRsobwhs61Ub9ioAK9CHy2HqZsxd9fQazskmtjAQVzh19YBeFMSPvSExEfnw2BiS3De",
  "key24": "2TzEj5bGHd4HEdJNZRs7JRHVH1kcmaH8Csjw6YABYCFzBqo6D32mvLopFA3PR9xMSCqTF2xwnfwhyqZFxEH5cj6d",
  "key25": "62SYvrpSXhGLzFP4QioXacY1XSRxQQxJm9NxMX8eT1G3tDjMhmat5dHV8ctv6UUYV2NQHf5TpYJDF6mErR4roWCD",
  "key26": "2ZMZ59jtsTCmz2FGTh6gk4Pc9d9e7cXLAgkgKU9zbQRSASbAC39NRdxo6JPDXhVhNmoJ6h1UH9qTYpcEftsrDVwN"
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
