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
    "3CyFrc2bibfaV5c7dNubGwu5quAWW6vTAPZdgw75fcwrAEBKF15F2sSPSCCosXw1WBHYmNwUwYxnnXXNN7Qhi2HE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kzPx6Z9TLZSzQeJbFembTyavehfL4TtV2HHZc3h6CWmWCRGSEcaJkJsxwF49vcc4LnZSvZEi4Dq3JrNnqbhvUs2",
  "key1": "56G2YDT6ibz8Cgf6SWZDP5wBmhDTXGseS1ouvvcCLw7TCmgsycBN2k3Uk3qV7b4QqJXehAzUQnt9v9RasLQhRoo9",
  "key2": "CzaxAyv2Q2akhya3azGWfHcxNpd4trHKK6k2E4iKPTAtUupPdgKkGdg3cvS4XviNDvRvR1v4WZRpGPDrSebRWwK",
  "key3": "4iMpocvt6fx5XSVatrVvrQeBm3fxLWiJd1b2naNtEUStoND7RoQt9xWEGGB9cL3cBCmrAbQP3zBDTp4wv2GKShwA",
  "key4": "2Ln7ydU5ssSmnRYzgcchrX94v4cD6MWqpYrKb3agJGWkfLv1QDXkDyYpxrUGNztZhbFunqETTFtdNg5cJaSfjtHC",
  "key5": "G5hyQnvzQXeRk92AiGivELi8Ktu3X1dgnr5pyeNsYmS6bSbDZPxpx4K5V2dkJMsYgh8dzSWdjk8NnKE7rr7ePua",
  "key6": "u4LVf9Fyb9NbmmxgDqt21akE7CT6spTkzKNqvs9H8AYLeyq6Qor2A5brufUQSumWPLmX5rUNwBt7HgMKxa6yAc2",
  "key7": "V1cm5edV6LC9cR5EjSwozsFabfKeNfv6oBxkp3UJJ2hzkyzkFZqfnQpR273gwWFhMxLcpeoenZ2SeUpgKcvZUxe",
  "key8": "5a53ZFKzq2h4bKjo11FokkaptC5BjBVsTMAkZeb37CfupTdDEPxWfhNL8y1afcDyyk69PTcegYcoiJqh1bwzqyWT",
  "key9": "31SXznQ2FFWNU3igvYeKGPtWz9Gmta5C97x8ymi27N2AqLj3GhK17q5WMYFfZ8usFvSaVR7xuLLNAGvu4NBh6ViK",
  "key10": "3WivMeBFdRv6bNa6BLcxAkz61TmxVMyZnEpNuajQvdCfvYQKFxHhKCunKERcWWiCamVkcNkFg2HqvbtWhCadVaTS",
  "key11": "FcaNV63b4VXBku1HU7FycNnGWhYumKoExihvRDp5ykFuYKmY5LSkxrdzcRxCGWvH843rnwijSFD3222fMMWbxL9",
  "key12": "3RYeraDYWZT4JKEqnXTdy9DLPG6qJRzhZEYCycopg6WmZci4jaeMVsNz1GhYEGc6S5TtVijkDQgJYjkc2wUvryZ5",
  "key13": "WLpfJKyMtj6HvJPvXHQdmyDBexuShwfNRzfbSDdoUKsee4R1X6GcGWm6JXnpG1UF7cbSXHSisZyoqjPxffARFGp",
  "key14": "iv3ALKmGSYrmARaKMDGNCW3L4aS72BuZbS7d4TvJuvyktCPPsVMgYkMANCxS7P1aUUZdNLtBPU2YrmA2HodN6eP",
  "key15": "4iKV6ZJraGnE4w9K6qM4tL3VZS6ztD3QSLQYJWg9n8YhWjHH34jLTRqT3VrRsL6JKaQogJnVodJydv9PoRukMhM7",
  "key16": "2rqNemLquF3499KqNuXT86sGFgsZfEMhiZBULYAkGuiDS6p6Gqqz3QsL1ycXnVo8Fd6pfnkWZMGq1hwe41nxYyhc",
  "key17": "2kxdjHDGxYroeWaJd3UbHDsmVtrYexKmyKK9Da1cM1ZswsQDZAFKeCNWmdqx2nG63HyLSLufQQ3WeLkWh283hiLo",
  "key18": "4zgYSf1gkdBJJNJagF77ytyGG2B2P6NGncQpBsSCQztSJmXhdkGGxsyczHjkrwC51dfDL15vr2bBZa3ZRQuqw432",
  "key19": "VBqsiPyz9dTipfdhjAXD3h23NdxyNcUeuQ5X4RjAj14Arm7LKsnmry5eYbYnQ2M564dqVfwpXUZ1pvhcNuz5D2g",
  "key20": "66BZyUcKfqDPfFCKEPBAkYvV6jwxD8191cpTxHy3ruNroKHbtS1xr5ojsyh4op2ZdA1ow9WN3AvYawvwSJWzBJtB",
  "key21": "2WRv8xE8ED6sx2dzex7TNVqodDD3gET75bQHGmY6zbpqTUep8Cegce4FH7eM7cRydqiCGJTWARigTwbNAr3MA8nk",
  "key22": "WpUyZi9AbfpsdfMfouA3Ng73NwReRfAkEx5itbfCSQYhKy3wiFHbCzGrs4KiHnFQsV87mTKGJ3sztQNMv9PbpeW",
  "key23": "5GsynZpZ1HNV4EXNredBePZRGyvGciwF9zszYZu5kaNMNNVhAcDQczsAsp5SYQYwGUKWipGLZgkFH1tk4bhYSuat",
  "key24": "53oh2VhZFS3CVbddu1QfXjEoe3o8TjxcG84xLRJ7zcgipF9nvya6hNs3yaQuxh9rKsQ8tbeSpY2dZmRYSbg1MZq7"
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
