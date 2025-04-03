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
    "3vGf7kjmM19dYQGiuhU4AYz6ZT7kHTN7zhDRigPVQyDbvUR2QGc9A97BfYz4Lx6ZbHXYNEcB6Q9357pJ2BUJkXBC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YpNW7UA4rRd6q91Mx1uhGPN6BY38wNntsKvapyNnFyVGdM5kNyBFMTZA52zZiL71K4Mibra1MZH4sWZdz4iJjbq",
  "key1": "2AXNsC3mhu6XLRxFvBHkc4szQMmfaaHV6wYHnGZMAR2EoQencikQAL4wYewVU3EgMxA53M1QmQsNqQsEZCUyhR64",
  "key2": "4cdgbnzM4UdW279kTFscZRpGeCBLvEbe2hu9xH4RWE5MWFFxtwRwtfMLnq8UaJJAxdo3RB3kkuQxzF5C2GjRvJCG",
  "key3": "5fK4WstbMpMbV2TVJ3KABJux3AJWMWtxTYczyeCN94mq9AvKE49n52HzwcDiEjJ1w19X7mhkheK1vfsMUWR4vqQa",
  "key4": "5zZcELyVRaGhraTN5YhHKnZoJM3SSqRuvUEbMF2QWxyz1XefYwSvoD4ZTrAMMrcsiYhwiSaBmXw5eFoKQkBpC5dk",
  "key5": "2mVg5J23AASQ3va4bQKAZCuAnNm75L3T2wuDnvMZQMYLguQWEkVd39hrMiVghoHwudPG6M6Dvqh4TF8N5v7DTCuk",
  "key6": "34sDrokUmQZ5Pagq3uwnicZ16gW3dEWoNPdbZGwuh8PXrhzpAD1zhcUDdTr8VqRCiusqZL3R1HN6Q6z9vtjL4CcV",
  "key7": "59YdkuXaUZD9pbmnBJvZJtSkjB3kX95RwRfK2CWeZRsNFaNVYegsuga2Le99HUXXbNT9ShvjPS6ud9s6z9UNN8aE",
  "key8": "51gGPB9mnPA5nmRNjMLYHgnRdkQNpnVncw7mKQuRDwzDXtdXgGmPz97y7c1iRFKLY2kqJKHyDvAnZb5Xv1HZcocB",
  "key9": "3ppV8tN467BrrCqJCeMiEjRFgExWtL8xRuSeQhetxGVncsraHPLB5N3CQHV6G4VJKhuvBz2ajVPfUmwzHNT5rKdL",
  "key10": "22ebpRogcWuHUrWUPnFNddPMbJnqfcW6uiFVdXYD3Sjos1wn7gu4fomaQv5udRZyaT6GgYxvN2Lzbz2JHqNhHtnr",
  "key11": "4dB7arP3tswPYNhVoVtbxGGzWx1mKCE4qMNiMeGm3CHzYDKmMMfgRpctZxEVXx11D3vyVowkTGsxtBh4w65RGCP2",
  "key12": "2MBXmHheKcs1RUS9SEyg7jvALqaFXtap6bKKPnCLsbQXhagmFkbURb4MKrzJFTH7716YmoN5BuLExqUZ5bWNH9km",
  "key13": "nWXgyT6qZ2ecqdiNAHLbWQmJiczdxgz3Drf9RNyVEmVFSUoUwLe6nbNC3tUkQMUDKM8K83H6egVTS817SPH8qvR",
  "key14": "gPRPLyc2jsfqHrS5CchfEpJ4PuZ5Me8X8m4iFDwSC9ByXNN8izjkXqUfFbV8m37NwjPc5igHVLXu7CP3okaeLBE",
  "key15": "GK34y4vH56rSiX6bbeBVPHGAECB2nd7Dcc5iSvheBnX8bZqzyQ1sCUs7DfLyzKu2i9d8MDj1287mte3KmYkmoda",
  "key16": "2Y3T3PCZwNsg4KL1A2aZhLSxoxXC11G9cZTYmpCW4PF2trsLRiyqxmP7jvya9qJcjSvKqyL56duZHBw44WbLoaZL",
  "key17": "4oou4YtqNn6Fr3UPVfn7BbLBApYPa9vvPKQBxQNaecRViQaVDPPynhpHoLzfFqfLgfUwzUEKFjSnTHo3HsYD91go",
  "key18": "564k2khnfknV2tUormB4szZDMNgCzPt3UuNwQTm4yDy1UirtjLq6g5qyS8tpqvZcdtV4D8sVXb8HYRBc7BgnC3Kj",
  "key19": "2dMYqEzSeF8diBGUQWECXPSZhws6giRayEGrrxQS3cZCh2PPxb5Ze8sq7hxkmWHmdiPiVUJgTrvTXEchhkCBXdd7",
  "key20": "4jy4yQMqjzKw9tZdGsGDNi58zRKwpogd5LA3e9dFaoxTcZmVWHfFPq1gRbx5u5JbgzSSX1B7qkXWswDTMjMGA83v",
  "key21": "59SoVnRsgzAbmkuaF7bXeNHgiTgJyhbBNdi9QsdRXYegM8D1yWLGh1Xj4NgD5rWe4vA66G1faGtVPY3BvN3NDgcE",
  "key22": "eMUQWaNeqiovmRv32aoSJe1vFqsU1g4r1sFJuBjRwDkB9LrRuYQMPRSoFS5d8aJup1RYyh4aa6rKhPfe2Eptm1B",
  "key23": "41istzhUqgvGCaqE2NnxDZudBokXiQ2CbFrEksBcRddqep4hatvQAAsADQEBCDiCoknxmjsHhhuJ458fbuejbCEb",
  "key24": "3Xcnjv3mZk51qgt69HKzA1ArbHbUx3NfdxH2GDwM7gRuzbyRTNsVxfRD8uhMi3Fe91FtfC3Uwv27b96MwhTTFoQX",
  "key25": "5MS5v3YKZpT8RzXAPPwasc8G8aqR4UcXCCj959umAwVBg6PaXz8oNiumiA8cSqZywSNcMUptNgaw4QgSu2ehoLet"
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
