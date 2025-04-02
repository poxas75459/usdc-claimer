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
    "5RcJacvPZRTWK8WkecVroG3uKstY4JGRmhCwikfRZURGiP7Auhs8yJApnPhc4cVcEbR89GvRPupxp96EYojaRWD1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DTrNfwSxPc2mTjYYtM83szBta7ah55ygJ1K2rQzguKE83gvby398VioQF6Hj33nuum78r7xrE6eNexvyCrbuWdc",
  "key1": "2CcdmjA83ScsYYEs81E3Kr4D9KqXetNw4JoCt9WjNyUYd2ffgMmoFcaK4mRnp7dAkch6Ro5P1WSbGqEJwX3ehY9o",
  "key2": "DcRDZpSrSP533hS4y1c8TjtiTw6UT4Cs9Wuc2Rv1HKVGDWhUkXZcBaNAaFpUC78dNkm4xyYFC3BaBBPACSW8NDT",
  "key3": "ZYqbjxfNjmZvipszqMMN1ZXoicxC12apnedGQAC4qpRUJ6FpdBHgbzc41YyH4jLdNMC3V85aYwmRDfaEScDguo4",
  "key4": "4kwJoVyB75v86bXXYeHzmddnxW4kW4BovtP3QfbEUwxYruygZgouQAyyAWYXpFLtHdR1mEfKTSvizZNqX3pGkqyU",
  "key5": "5Ftf3rhDLnCMQ8nYWLWg4TnXAgC9f96VFYZ1djXHbsamDWBF24Xm9r5dHrvZfp7NTgR2XzM5WHxCYceDfcBvi9B6",
  "key6": "32EH7JnbLLWaAKEkLwL331fvFw1sgqtZdgot8tuTNaywE9TUDzHZBLLJzrLvZKDY3L3QQHehyAKoTg1LcHwSw8DS",
  "key7": "2kNJXfbUgmuiovoSsN7SU6bkH7ugPoe9efHrVZuRnwNFS3dHiNVR84PZRso9r7uMLGk16A4WgeWzE7Ssmm54z6wh",
  "key8": "4ThkzgcPtNJdUMFXZ4yFn9DvFF41h8he8PgPiXoNJDNMscRtPjtErFUhPjuR96ePpSk3gCNwwkHJPsJ2VbX6eh48",
  "key9": "5BAyLw5dLAid96foQwJVskRMC1SKJnB7x9kugYiravV6GNSWYy1dqDDeEHcT7t7osww1MPEURmo3ZHBsZ27fD55J",
  "key10": "3pZncDAQ4D3SZPL84JkxAAmoV6ng7mJVkGCcidQRD9WFdk3HwaTz8b4QFzv5ekcmfTrHHg5mVzhkXDLL8iYZwwEd",
  "key11": "PNgtGef1FjMw4Nvvqcwx7PGhTYonCEdbmm43mZ5shfJX93KsVfuCiySQaSF8MTf9FQ726LbGoALFEuAfeuJxZnG",
  "key12": "5RCyacgFrmhr6xCj4fBjEuSkmsinNKERXvvK1EYc5ZdmhAB3bcMN3fbHsNA6x6GU4cX1whQXkVxvRtsy5zEDYu5r",
  "key13": "3ChfyGVdZJDD7JJ29xVjax4Dg2qge9Fjz8SrCxavfU6ALcxxHQ924PjZrG3p5Vogp8ZhL1jWYKynvx4iyvSJfg2q",
  "key14": "5KYemvCvJgnng5zUvYmoNre3CQqXxYspazjnriaT82S4q9Kb7t2L6DDWhDRQ1eoot7m77x28QnNQRrbtbL3w9mJj",
  "key15": "KGPi1JhzEMh7Razbv1iAfv11iWka3XqwZdorPJWzbiszXavjgDgtsxr6N7TMhXLXaJYbsu3TPbs32pQdokg1cu5",
  "key16": "4h6RCqeRt4V6X6ipsdAikAZWfkochbFZEMybHPj7HxYWnVzoEHcRFTDMap5kSxCmBfJvdtLHq5sJ5gDj8TYPzQNM",
  "key17": "NZZbdpRjQx1GKQxSnrY2Qhg5TA66XbrLec5LKZ4B2jdNufozV4C323ZReR9A9D3uDkcrCPygT5DNhZho9VHtdCn",
  "key18": "HF9k6m5prAUYn47Rz6RemP46qtnyLrZ6qfgUKaNvDYFSjnPTkrs4k9yM9vYYPB3xKGCH2wjZkHqXPVCkBFxG12y",
  "key19": "4pQosZxgLKBqLUDUFpHq41PbZzf7HBZMeymWbd85Hc2CDTUvs7Cj7zdXpcNAWVzboZ8uaLgpufDiAy6ByMpYdGMa",
  "key20": "7VmGNcQdwcRd8vwc9Zxne4ueVBk2rtNd1AHdKEKAcQCtzkWDigXdyuDGNmteVe2gZWnxNqxNwK2SxS5G3VTTCnC",
  "key21": "H1xyMrtxirV2x3AH3ybDsK8pzs1iRsApskrkU7hpw9JYajxzHrmNGigHHdNV1KWyMPeN3zQrhNaTdFBg7GRpqB1",
  "key22": "ZQEtHWdZ74SRDLqkfTpAqzoSxTW847ifedznuqbZfE66kxPu4Hdxm8YWi6LRQ4Xinou2kgf35wtg1kQz3U35r6H",
  "key23": "3Due5pMmXR3qJq3ZoEGmNuGCDS8RXLtcvkLGwVyWXK3pCXdR7yxHXyfgdtQsfQ4rNswvWLJZ2kN2J4suYP5iRzNQ",
  "key24": "64hvFTNTCH932yh6nuYM2y3jyJYXisU855ziScwofHybJBpdzK97YmQv4aX7PZ59USedPy3CqmetSo5MsucfGSyn",
  "key25": "3gnGFJQ34QKFZ7aW6zXT789mXRsHVy1ABJ6xF1CG4h9aartsjWkPtwQbcG8qdwFVvhu5g2d8PVSc7PSRG8mkefby",
  "key26": "2uys46vHPc29hVdKfYiptPbM7ToxePggmQEVmUh8akC3HhK7efgoUiiPkVWXn57JdbedB22YzfjEpiEpb7mg9D5v",
  "key27": "2KxNgxsNAKkok5fa4FBugiCh6Z2uXqH65KuBQj4LBtvdpTWp2iDT5m92f9Fo5QThrCBMtaBRDD8RcfafDKGhJzJ3",
  "key28": "5Xt9fbzRAYYAf21mxAJyjmXWi68oCqu1vK6a4VKzAchkK4S9Mj5RY48CmHLvkWaDUe3mBwkAXyDwWyhSVyt75e6B"
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
