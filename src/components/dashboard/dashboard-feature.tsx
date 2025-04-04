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
    "dHhyBkUXed2nu1PymNdCe6NTM2r4MZ3pZcNGkHoJhKw8fAUgy14UZBV9bat3MEvS4FE5BUu9BNgH1pNt5u3vqeZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TksJ9oVAVKgNfkG6qzF2ZVGPNFr6iZXgHeUKrSGtZJnWKxTcW3TMjAQLrfVXbBQQuvSPsYFFvjSaXfUtGjcBEDn",
  "key1": "o76wUxUGqRroYt42WgwsAtnn8ajf2EwHiLfvUuxhSg9vNR3XfPNx6auTb1N9rXbQ3q1PGrNLevnLek6c5Mtvkte",
  "key2": "Mccm591XRncRQW2MsPSHEPo4PFBSRXBLM24ZBBXe2VhDL6xRJCxqqnM2AoDDGAXoifybCyX6LawTxwxxHaA99Sw",
  "key3": "5EVBgADxFC1FWeFXrj9jZNuqgnF7CfYk34EsGdJdcGh1XYt7VF1VJvLFHsXhPvQqZee4TN8aDypAQb7kwBm4dtTg",
  "key4": "nphuTxv29iMV4jeD7m2ub67GpRTyxi1U6aQiBxoPQUhYvPf6Yp5Lwdagoj2tVk6XCSBsBHixXw6i6icRyj23jYg",
  "key5": "5fYUEV9Mg3W2QQGHkjNu1goxAXn2p1S8Tg7hBYqStmQGVdmanqYP9EVWwZe2wCkhqoCYGPJjswY4Gv8tCtShUq25",
  "key6": "3MTUzwahD4Ynj6AUYM3DCbAnUv8MELnyHkS3rvJPtqs1n3bzmZGgA7MYCcotKkrQGtTWgMkdwSyyTSvaQ3DKC5h4",
  "key7": "QPN3NY3xXmk4mU83dQRhoh9uH3DcoxaqXpKaKoeY6TRFPDXhzmNdaLqvgLhZeL1z2CaYA5P8KeA5RoMt489yvky",
  "key8": "34XyyTASC5dPwBaTnvGrUSjEQzVrw2Yps5CyWDbuq333i15R7yw7cB1KwbKoNSHzi2uuVc1akTAAU83GT8wViCuP",
  "key9": "5786Hfyb3pFrSkuZ9xCXYfrTTyztJuUm22fbTu4dSS52ShCU6VBdRUjd96WGZrWZ61vrk132XdtNk3XTenJZ83fW",
  "key10": "JeKeXHPPGcLLQcsM1FrAoDdD2MbaatDTKjC9JfT85o6nGYJcLAovQkrjBVysmKq4aYwGstF9xtutK8DZjwmwBCY",
  "key11": "2gH1oZdLHwR4N4Bzjt4zXgDoWcHDScSzmTrbmokSvcQyJcuyMbsVwmnb27CipCg4S31VFHMyf3Bw8E686BA5AdpL",
  "key12": "2wk3YeUKRpXh3N2KusrUxJuPy8DFttsZ2UaHQdM6RwU14cdMyQXmVoGY9hwrjUv8q8C3JcRndbz7SQPFaYKkGQnq",
  "key13": "4VjLGZW6XVs3mruZqLumDxiByoVvDuD7c4C27Qufin8c1Yr2r6yzp6W77MASfF1tnNxGNVQFJ1xG7bQFA3jiaoGA",
  "key14": "5Hgf56s8GXy3hXRxoyDxwukrVbw36HEHQPgkY8kzdcLTqJNh58rGZTnSasRNbcDPWggeKV8ojqZCEehRWETL2agG",
  "key15": "FCwHmRbjmLxpa3LUo9tkvtS9RC7PsWQGEhdu8vbEm6vHDrq7QRbTyhPK4NKrfx93bumrqoNgkr5322aNeH7zgs9",
  "key16": "2tLe9BzkNGZDnMDCxSa7unhtJE67s6s6xL8dVNNAQ2HKnmZVEzdrKqdS4TvQdtWfgGVV8t8DE5RQ9BefpKh5ookb",
  "key17": "r2P6i3Bxs8wDdWBXvXn78a7yDyeeGpYt1WyF41eV8tqEAjdETimhWYBFxWFxkc3nxxbEDh4Kix4jeEimh231myM",
  "key18": "qAgM2yPDuxSoHZQFo6ZwPyY7fhrwhfdduRSnvjHLfo9NcWbWA65HwKAoW7Ce7UxH8eU3aJwuPhjwBRuzhz9LaYN",
  "key19": "eKVbU7sz8qmdWM184AK8C3E4owbczpRhqZnRRUUcFvTCbCUdq4HUFLvH8Kp4B36qwcitqvnW4EJkDUPJiEEy4Dp",
  "key20": "64NF3X18SHjmLDV3veNMu2QmiusmM7XqJZD4hofqvsB51ZEqedBJoS9rKovg49zx2Eo48yP3E2aSmZjSam8Qvpgg",
  "key21": "247HSR9JKwhoekdYQbFPN3Re9WUVr9esJ9Wz1KUdwveLRu11xCcqFsL4xmRbiJmZVdXcC4FuxXm9wUQpgvowMamk",
  "key22": "45fW2zhz4qekwxxknea4AvVdJc9bjSboEnuJcfQevwP9p28rsYUcm2SfwbaLSWAAcbwV3ycLXdgRzWTtDxgRQ8ef",
  "key23": "zpW1DUv69DuJM4Djjj2gyyLH9ptT2JWNX4EaXHzWqXrUxsqdG3tzKZMdWbSDT6MvgVXnbMWUh1QMbGF33exhwEG",
  "key24": "3henheJkryeCSZCFfYCvHyYhufmUUbJAGU2nxfN72pLE1LUPDt2yuaVWvwwrsLDeqDJ7PDpNdZAW67miFgKQeT1G",
  "key25": "qZ11TiMSpR1ZBuxWvYgXw7wQhd7MKZawJ84Zh8XypwX917CgAwATj4dbFXfaUeR7vHF191vnU8cK8fwcUL6QMbR",
  "key26": "5VoWL7tsFpVLFwWVRRsyKnYbN5yjJ47eFAvDihajsFnzg7kay9bBPTc63MoUAVbooopf68knBhpnhhRH2J6APVtE"
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
