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
    "XrshYwbAzfcFuRRAtg4hbFecy5nt9ZwoTS37bmXAgt4jqexpREZM5UAgs45VhD55tKwxq4UV3Fwf7PcyGVRwUqn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2et2onJEqFVuYsAbWAEG2eUctLD7MoVNcWxMDvMeGyBkDNGYVBCTury3BMkrJreSxBBmLAcT2UGYnELBr6gHJiRy",
  "key1": "5LqgN9Ej1zwmuJ7xwJWvQvJho3QwtV1bhex4WSYZoKkjLFje7H2dgPRpscYAo4ew75GVjzGcRbMXd8QfZWAdj3po",
  "key2": "Khw1bEma85yWC6w7S5giNDcxac8L5FfpK9udRCCGxF9qW5i6YCXHY7ZMfn5Vu4EtL2jquAUQC7ujDH9tYJHrRF7",
  "key3": "2iKfD7CgEBKNvWcrmhpYJRJ4SXff5o8rj739dxK18Z18hpB6SLVoMKJEgvjBa5TTd3chPcCdyukDSBzDDz3VHkkd",
  "key4": "3a5cxzAv4cbtnpjCkWu4oj7CVWZnHZQyBsEmPnmNq7t5Vf81gS3usEkPip9ZkzUXKfR8zhut1SFh6WHtRM6MN3Qz",
  "key5": "57TKmgcGodAcWH3Fgm8zWiowJMw3KyGZnPA5b8wP3ViGB4opxDn2J6GrFmXWkDzNmbEshYybNbCr3HqWCoPBwjg7",
  "key6": "54pV2pxsjD8QmXhoRQaYYRSjK2oHK3fSEmezfHa4KR1SLgCfh3J4EJ2YErz9BY6hTye1o6GYvNeamWUsTfXAXneY",
  "key7": "2tnp9BfYVtP2iKfSymXd4JR3wxgMf9efYVmDFxHerMdGMTezah91nEtJXrZzG5yw3cHAARMafDztbT8KoV1W8dVh",
  "key8": "46wTAs1FrHxhZbaz9rC5VkPhLEZd1UmRa28ZqPAj9ttiq1EQMWhU7KoRGNXdpK4zY93R8FH6wr3LH4E68HXbQq8o",
  "key9": "53EdJgmkSTcyd97UeRLN7iEs1bB3aMqPyntM29AQBF7geLNUAmwv3gxJbQFi4NeG3daLW9mizb2YqhnZ22yTD57C",
  "key10": "5JTCTdVQBcuNs82QPLG5A582vUPo79xVYjYpmZQkjYc4hWcjk6S8pBpdy5QP9NuQJujoz6GuoFqoKbSKNBSeNmXZ",
  "key11": "25j85jSSME39GfcTW5YGjNMCpj4S7uZUMU3zyxRjAW5zTgYWbMcNLzWyYjFDZsQod9MmhZC553CHy23PM6ZZxZvM",
  "key12": "3JstWogHJzDq5Qd6qeScJ3QCcQHuDWtaU4quEhkXhJqAj5WSuTPSDP2vjCSVeAHjXmYwijry8BdWHSw28cY8v7w3",
  "key13": "35mxmhJCf86zqEWJhoQ6sCTiaZ5hqTHNmYjA1KKSnN4qvu2bMoTwyCmfF5PkxkBHgYJvSunsSUeFTAiPtW2NELGJ",
  "key14": "2xroHWmzJkf5RU7q75BfgauUsgEubMakRnhiTgoXCrcH3VWexgtFnXHMwbPxbz1fdt5hWV6dZDWBBcLhJoRJ4qMh",
  "key15": "62f7vLm3xoi4uAe6FK9jydqGhQedeSrfhck2jbVu6nKdS4Dnp1ANvCwcB4mBBcs8BMDQcrNzAuXn5VtNyuNfpk8W",
  "key16": "24zhsqxhwPTpgS6bcJ5faQLY4UrKrjwUUrHwHDTZmhbqKxcKVcuas484x3DnMY6bar55xb4RVBjft5jqhvijTstn",
  "key17": "5XLzp2QYGKyRFb5q1vcs4bSSrQa5buivjPYcDicVNgkaSoiGHr7KBxaDcjU8vjJXBxT8VNqiW6Cqa1pfRdWQsdse",
  "key18": "4vySZRDc4NStMA84tpaA5pMHcS9UaoFkySB3gkboTzjhRTyG2psPLQEr5XPA32xZHa7ZN5C1DCNn9w7EKQAMt3JG",
  "key19": "3qRBfjgeYYLhze71WF4PiZnzF8YwY8SY9bgUcymDJRNuFHTEHfoNG2GPKG72WS3ZJasjL9sJPBN1LSbxJNAxfQrW",
  "key20": "4dVEZrp7fjdNhePNZLwLmu3M6sJpz6UtyJobFYe1KnX5FinzbpS5f6hghwPQ97nNrhfDdJVsFTKeJooSD7UfbyKM",
  "key21": "2ttzTXGtQHuBnzAAHpVKbr6ottxzx1zspZPQwAKZSkNfd85i6bUumvydhTdkKRSCfRHiWW8BRQWawWgsinFP7Yg2",
  "key22": "24C1dFjZCTKytikHNggvURk4VktBtxxhFQiyJKU3J5FYDVFNzhE8kWvgzbbiZSG1NbJiDMpxRLhEiaDG1S1YeK3S",
  "key23": "54WsesrsTVGjuUkb6qd8EWh2jnHsz5xbqHyGqSVMNjzf4k91nMqiurdqPyoKWreEcUm39LKV1tcpk44rt4m8Jf67",
  "key24": "5Mqzhr6cySWfSuARtt6XUrfn6E6KfacrrmY2X2CWPX5efCdva7rQHGvhCpaAchkahTuj3dQxXpM1u4PVuxGqcgBk"
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
