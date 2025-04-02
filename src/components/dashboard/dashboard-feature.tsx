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
    "38Pgqic5up5ai8tGjTXU4oimPY7ygb5Brfi4BaQEkPBisriMGh98wD7qbVhXD2zgRKM5NZeFEha3YsWRjB65Ggvw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TomdzK4h8rP5hsmbjqehShX97WU3nPh9CMUjhmpP693A5WKgLeuKYUHTwiJjqPeDxtDFfju6VgxD1T1qYjWKs7N",
  "key1": "5Wo7hgvp4XNGQgHiHys3CDu8ZxKyTbyju9jT2vZJhMRRkStVW4wMsSFrNJGgRkFHRk762uqQ2prTkSpzyGyowkYv",
  "key2": "58LSygSyPjBZ9V6jdcoQdLoXeMof4fFEFhLtSNs3S43sUe8xPatHtkVpJjYdbS8ax8w2MFytWSD4rBiow8bCa3oM",
  "key3": "5qNdSr7rr1hwrRJWcWgfWQtUw6m6FUgK5cYmf68ZtuFFMhYk5WYVb8WnyQXKNy2kFN3QkzyvmZLerE3AufvBGp6u",
  "key4": "4dc3wxt44Wa6bKT9tjWNwq7hyP2hYXJWY18SDbyr8ZX1XgiDYd26FtgsoS9qMQNPeh8cxjJvsfmzz3Lishm45ucG",
  "key5": "6s2jQtyBqVFGWqaH8SdWqqGZfVEtDSLimEuimZgwctijeGVFbxoeMPV7dsnfdqqFNM6Z3yxEc5J5DJJpygR1Hc5",
  "key6": "5zqFiNWDUuiyCuHqGXem86kWEg99W2xGo2Wf2FJYm374eXayUeZu6cQhF89ot9mj9BPh9qmSncoysNPDP3PCjZhG",
  "key7": "4BiyXPAvga8gtxz17Q9XJjGGgk7gwdLBeN5n1Ra1gkb3WF8zLHJJ1NjSVHeTw4KLfZwYPBboNPQuv2XJ28mhEX13",
  "key8": "5p4UriBYtzayuYQ3RzCdUrM81LNbk8M2WteHLU2yuU7pGPC6ttqAjedoyHPfNkcHaf9ZSay5CSeEzUUNBMTDWjZJ",
  "key9": "3qeSLDythrrG2tWhUXYMNRHgE6G8w4omUhVDv7TeGcifzHHMnTpAFQ6qPdbJAcNbPyMTQVNToJeNz9aByXExsJLY",
  "key10": "3at2PHdoPXs6bzx6o6CFvYzH2k6vHJraW9MHvrnaLSwAhyzX9U8jUbBNedhNjh2Sd5pUYqnp3Jbeimh7yDG9vAqC",
  "key11": "62XXwRMAcmj4W2NyX2eeHtX5kx1fr43J7rGgZbLB5BE4z9pd3Sb4rQG5yRJ7rqGjXC3MFJxLD6XeAxXmBY46dhbX",
  "key12": "4GaBBA9sfTfKBFAVNZGt5or2MPa3DKz8kHLdJ8iJmQLJYWYWqScHk1SrjXZeG3TRw8vjGapXqwsc3mndBoL16KAt",
  "key13": "3ayPAyRupMNZurUp3k6fxFRmXX8PDkSKvTbWDJ8yuetAhEAfjjXX1vpiioxXQvqdEan2mqE6vf3NyVWyJ9ZnnHyg",
  "key14": "3EfqW1X3GZZKEJ6YKNhzUdi76ymdyzGpyHtccNnB8sRZ93gQVcewC2wRFykUrt7vxPkTyRT8CUBjcw4dio33zdbS",
  "key15": "3jAEK36J2nAxJG8W9qCo9J1hTjSvWJfYjg3Xtn2f9PBbWaBVPpof3gNbg4vYgNqbS3NCWw4FNbVAiTjJkScLjnWD",
  "key16": "4aE8eJunmFmxyqtEFegoM488dirgtudsan4HdfqUa2juVqrbzHAiix2k3s5j4tvPuyCq4SeAYCA1VdRz6NzRw1Xw",
  "key17": "4c8CQzgfZBdmf9hTiEeNhtvwgXSKGQWsjSjMTfVY6Lcg1Qi1RTwRQAxH85WKULupWPpN4VL3mBvbSQGangAC75V1",
  "key18": "5vwmo2429Po5oGmQccqrg5mYndCKepTe986JB73fEoStWJdm1RfbrxmS833Tgy7eZ7idBNHeth6VrcwsRX1tnrh",
  "key19": "5Pdd2fJwjowrcvdY5hhQgEctDaxUyRhkc2LiVLBza79cE3AcMxBarMrRjDDYv7Atjvh3be8w1z6pRY8Ahs6pBuYm",
  "key20": "4gp6mJbZWgvDzgLAD9s9e95qjHGHhEBL5ZXZX92F41PDr3G6wYDfCJLRnkApKL4fPjziBYq6x2soWRjtsKE1iZEH",
  "key21": "5sEgYpmoTfyPotNA9ra5tyTvEJEfFmvuBYCUQndT1VPkXuNEMbPmdnS4cZksHEhGiiwp8uveBp2Pcynhk6yDPDxF",
  "key22": "3DfEduwZB4Qm7yKmB5F5jMbR14GFvta3Z7TaLK1VzDzw8VLDioJvCh2767a8XYmJCFhtoA3mtkpSGFoqwhfWanG7",
  "key23": "4LXRtWTTYgv9RSeRke8hpeMixjqStkqAD5WcAdxV4TN5XCK55yJ5rmTyr5dB8pp1cvU219Af44imHUTqH2FHCNrv",
  "key24": "2mEgoTgJapwvwx32UAxbH8UC137dXL3z6XnqPZjtECjKgEcghWGZdnMGB6rarvnT8cRnmaBxAYRMyq938Kx7XqTq",
  "key25": "4BWn1Es5Ws9fqwbgVTpBrDL4mrKHNAYH2rNm2gRyNPHSAgH8gQc2iZf4xNpGU182m67bhJ8EN2xeeqS54X1jh1Wu",
  "key26": "5oyKgyNeZ1GD34Mr8XtRKzk3esbEt2Fyief4p9sMnHAPYsXYaTA2LdzcnaEvBieGHvPQ4qrih2xQp1LLyC4vt5aJ",
  "key27": "4G8jp4jpak7v8tfegZ4X9qJW7RuptiUtMk6The9dUG96qW93KXwCxZEozXEfpGDUZ9h43NHc9SGZr7CPsrxPZSSQ",
  "key28": "4SF4y7v6puFzomDYsvQncS9NgN28cFXwgc9X2kHGaQAmaBPgkvZ3daRMZbJsTDXihXvMfUmPP5vBRPaLX4GPtEHk",
  "key29": "4DrTn7rJQnvzHbnES3NbdqVsR4RTihEA6TSyqS6tCeuEbZ5axJ8HFgzR7bW2YkFYk9XraA4qxpHwqkRz8gb9bSXi"
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
