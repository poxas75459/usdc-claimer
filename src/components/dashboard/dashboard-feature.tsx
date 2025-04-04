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
    "bdRpL7BKbBKetbrEqgpMV6iQrKM3B2w7QXFh2n5G2caYNCvzeEQc95vz6Wvzvs8ThPkP8axA9R1xCtyggoCgjJa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jKx8QLdCumB5H7BRsWdrLiDqA3MAabJmC4pN1sSnTZdGm3sVoH17Wjnm6UpBNBhGMaGYN91eq7JsfMpGZkiwAAc",
  "key1": "2sdvqDzNGzGY8WwubYUTPT3jmwbQrd1xFHPS28Qm22k4v5u7oUMUhgoD37H5f635hyL7jtBCD5KefAwc8X3zjhQU",
  "key2": "CMQQXpL3fiR9jbNxwzWzc479UJJ71m1ZS6grZy5E2gR2TKjfbsC33atBeyXQfjJR2n6kn1HG1ckDEdv5erihSc2",
  "key3": "3ty9rG5FBhS23qZxWAJw5zi9Dp79QcxFXYY3mW7vvSW14EtECph9DaRvLZj5xxHC7zreZA14YWvzsAn9oAZFgYEz",
  "key4": "3hmRy7h8coyhuZSP82xzV1V4AacGNhCKRZsj212c2tnE5vRUrzhkPaveGVFUqYhXj6Q3MbAVRHBaNgAMF57LoHDp",
  "key5": "HNahtAZDk4DmGuSZQvvzAGhXhkfXD1VdcmfR7PpeesN7YXVDFdh5EViRj83hYyKAFmcS12CynqdeFhc6Y6MUSNd",
  "key6": "5268cX9ztcuA62HNpaeJ8FHyhz2wwfuCeuQ9cdKrQbgzwjRhFp3CvJub1eVwLD5HVdegD9zre8yKMY1pHNuLPD9g",
  "key7": "2x51zMX6HRnDXqQXU2hafz5vNVFxc8aTPFyFbf43UmtYVNeP7rkTyCnqJxVQ3SkTJFvH7PjmTo55uUdpxNmQuGpV",
  "key8": "65CMu9LbzovdWx9YUw68fYJ1XSHhTeXKei2aVAhPoxXtViMGoGFcUgnqqjMWRPsRsJ2rhJTEMXjSRL4EWkaWmBQ6",
  "key9": "cLmaeHT5xjAGJPAMQd8hT6CatHy2bUkrLmsKPMnedu5f28pFvP5DR9132NdbMb89EtnyGLyt6G5nHqi5dvJo7xy",
  "key10": "2nApGxytDcMFJvFmaRadQUGznAh8BxQVGwQrGYpwm3ZgjL3HYescfTh6S687FZAoumDYDiXWLw2kwW3EM1w6J4ob",
  "key11": "Dbp2Tfb6wGfD8qKSyr3umZSJvEA6qTXZog3DWhMp1BuEY76rhdgKSBkqF9qNu4cfWfMUdqvVMktwAE74UxAHrvE",
  "key12": "3j1e8fx4WfNgv8z2LQbXbcA2He8NiG8k8svC7jU3eUaUhg44Bie8x29ywFWZwLFheeB8qALPtzotRvgJ62BTjAvV",
  "key13": "2hw9N4zEaitkiweFzwMhAn13GufaUyAD2D8Xa4Fy9pkgW5ZYYVhZMV1feJgYBUvuch7pmeNdSJXnHMNhry75Z3Rr",
  "key14": "3vha82uATt6gAjLvBJUU2rzKrZNdXYqfKn9XjEMtv4C3zs9m5ch4dd4e2z98kJcjHxyk4FJ8izc8ckUsSsw4ozEF",
  "key15": "3ar4DsawvfWimzpJXsZHHM6ADAr8bp5AKpNshYHn5NbURK64oLWSF4VNM31vrV9eCfbpwRawooFgnesWnRcWLazj",
  "key16": "27gZ1vUsbDjvPuvRujqKjdseP7WEsR7spz5zTygXskBZ4v7bGh2oTcbLXLfrc2UUthNQzGDNNeFf3NC5cmTUS8Gh",
  "key17": "bWSx8G8yS1TLqVjfjPQiVSZhKaKeZTa2wLHSWHb9y4QYwMtCfUVrHhG5NZZXe7bSedBEAwnqVjgaoy3Yr74U2UJ",
  "key18": "57V9vgA3uRRyHYQGozdxoZpmenCB3gh5VDm3RJSiYp7p13svuYEqMCeuBNwA1j3CDuEN8TdaTYbdECSuCjzT1fEN",
  "key19": "54Snn2nUVR5Sxk4yzSCZowSf8521TV4wSePhCwyyP9Z8x12acUnp6ggUkZyFampWRMSKVMgPSYmhGSryYDWXTurc",
  "key20": "4ypxSK3GnVkmkf1wzAQ5cPdwSmxRS98S8WEVpxcDW1Pmw1FoikxBMUEpB8iqp26n9x6o1VjQw3ujNoQ9X4tHSt9h",
  "key21": "2dmoaBurwT9jYWbJ959X2CWEZyzwx8MmFzw1rNYsQ9YiMRFcpWHQkcjcj6AB7hmY9LUbXVmEB3xArLettN32ZrFw",
  "key22": "QvZw4S91gWiia44aPeftTUytuj5oAskbYDDSo8qCWd8ehcfc1o24bdZ7oiF3RHNWnhgv1brV7aWkVkhsVJQJE6w",
  "key23": "5RmvKAFLfQTnoXSpGch9U6amdr4gXdioAsALWeUB5ywVcTfTt3wCgZUYn4RvUDXA395Hc1d3cmcTZoHix81bvApo",
  "key24": "4gmwPJLR1AsjQELYoUJnMuZabbhG8a4C5pRhP787wz7hy9C7tQ29Gdry9e82qbCpRaAx6Jb4MzDrcPPYBwkKoGRd",
  "key25": "62X3SnogiJTTZ2quUkBcnAeVjswy8cTXR9Cqhtj7qn7WHwGHcnBMb9PcBp6kWbKeXQpFkuucczAePCis5UCnwfTb",
  "key26": "5QMbEdzEYVgUkqzQQ8b57VLLuWgwXfyT34w4X21hMcBtARddsp8A5LhAhw4Pd6cenNtXLBQhpmBnpWX9pZcmtres",
  "key27": "4ZWnVjH8gBPxxyXNH7pC3ZyJ7UE2yGNztB4HzYr75iqDRXAEa1MiLaxGueBpgpCc6admeaK8BVAUcqWBkS45iGwQ",
  "key28": "2dd4NQQAY6wHKUsz4BrBUAPot23kqXrA7MvssrNGBU1E61T5Wp9rwFqvuGNRk4Dsd91zqichY5u4ccoK28mfix8P"
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
