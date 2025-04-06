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
    "3edtEha5C9H3JvpcpTu1vVuTCmrfhFNBHx2vQXUSbiKDxt4gb8LLc5F369RzKxwW9s2pAtdG6RqfRgh4J5ttWuLi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MNaNM3Mk7fYhxSS4bmvmG82kpD8oRhNmyFkdN9DXscg8iUW8vdzHvF7drYjN75PR1vRLcoKm95U6G5qvSqPdt2d",
  "key1": "3mtDDJx2tRAqbHUgqPxKrrvxahuEd1zgCkb8TYTKxwTRHFE9HzkNwdUc8o88QepLbg1SiGHmHvtZZNooKiaRRiKf",
  "key2": "tUrM73KUoWGb6f3Dv5R4Gsi4GyfjX2XQjgi6BbS9PjQ2M7BaQLCAj22TKcHJrQky7T648JPcbNq8fVyDiYsNBPu",
  "key3": "58prSxT6WHvEjxrBA6PnKdv17QLPQvd72QVoBhGUKdxyFpTQQLxZAC6HTdn8CvVr3hFuXYuxVzdmQGG1inYcqmS",
  "key4": "VZaxLPHaTZwT5Mrku29arj6Kc81xMUEMobkf6Qyy3x5oFUw7eGJhGVRtB3cTPw1ttnHapv8HbpPHBjLmVHUpJst",
  "key5": "2makfDCZs8uHrZDXMtxHyU77EJ2k9edzcoirg9UaLyxtYUxLypNVuk4WpXmkFxNRgjhoE4sVHBS6o41zbjJNLNC",
  "key6": "67aJmq5YZVwBmf9B34Tg6CrghxuB5sdwENmoRCbpg5D3f9uzhVxQsZeWZ4EdpiGdLCccBxiBWuWumR4S3i4HZxaV",
  "key7": "4S4vVk4aLzKUkQYGgyGLhQcubTWVAuxRgS1aTv7bGoWEkcjP9BEevRA9D7QGEYWjuZuFnmHAZ8YVnrh7pCLZqorm",
  "key8": "CkMGQiNzwZsqk4anELjbkyD5sSk3NPHqWVVw7CzcUWMih9zJVDTdXvExo2F6Ta621J2pnauTeEWmNxKKb5mo9kf",
  "key9": "3V1aX4zZA9N8kkM62etr91Ee4kD32S6CscBCodf8xyPstiTMK8nJn93XzL5SgwjqE2P9hrbSWH2khpcgso7cWGVd",
  "key10": "3gVbExHaY88YjhFwWq5qoyDQwKHFsDGoxTZJgu7eVBhUfa7YXGGFJa9WFXKUumbVP1MnT2Sp7PPvDsNFqohjXnvg",
  "key11": "2TrYCVJT8RfZYEXUjRdBxW2AeSYysXRH9UjjWjdcn6edtz3RaGV3J1nBqaS92cieCnWUf6vmrRiKnZ7xGq9vikcG",
  "key12": "59SnvJsFbXfshwtNaELgd8peXa7WRAUCq9zPjMCMocUNbS2PXEYfiPMoMVNXEBe7yWTt2HQ1JqsmS1wBrcJfup5P",
  "key13": "rHwVw67hLkxP6mhCsK1SmvL4sDSVmnfBhJjWLm3TNedFniJXrWZF4c7xmsten75stkDtB3ZKhddKEXYcxiZKs91",
  "key14": "3L92kCuUg7caJ6sHWNsC1ra3ttwFoCRmR2CzipRYfAp2rscpcy8XDpDGXdMHctc7o4KBsBStkhgdKpH9eaBKJbo1",
  "key15": "5NDrsordnR7AitPQDvEyw947eGCnVJooYTaxiyi4szUhX2KKRY6U7QqnddSqW5VTqUiyceBUYD1BRPVTq8hN9QTU",
  "key16": "578RLe53JEm9KQC3pMHwDePHbV3YgZ1Az3V5uwDFnWPcXVq5fjk6C6bC8E1GSY5UmXCWArBe1LawLygBZDBzaLsn",
  "key17": "63UJwyAxWqqhmC6w2mAqh4B2pVkTvRUtRRydeJeugpZ5A94xmrf2KfWB3uZzW28VAG2PFRDvpdhkSfBYwW5uA6ar",
  "key18": "33ud8xwZks2LgMnxshVRLPwt7aumRAgQyUCC7ZnNv52gjvh2qqneWv4Xj6CUzv6nfHbURxr6wvfYTh3Q1g9VRaQv",
  "key19": "Dg4YAJrrgnTo2XhhdpLMvyuAwKroT98oz8Vys7eSRpVVvBXiPZG2bpNtuurodEkerDYG3K8KntjPSXhDBkDtUcU",
  "key20": "3cWQCCf1HSHghDLJze5i26ebMUeqp8Hut6EBoV1mZh5dA3Q4RCBKDc6UhmoRGVGDrkYJXsLsgWcZKV18RB51YvMh",
  "key21": "385Ffgj1CzEkQTaGEv3JrKvPo4z37DzmhqiQvj8PFdEVgRyA6EX767WWa4BJJGABjE8yDfF6hP8eWedvJJzuV9UX",
  "key22": "3N9FEBFDcWAt1UaFjQkZVGnfxtkmu8E3uG3s47e6DAfzpFG7iUQwJxnP5Bj2LsfMYjjwjAvEWGcgXB11zEBNkHUz",
  "key23": "xucJQt5TdpsKd1SoiptH9vLHz6AyaF4jRDYaswwuFWsEoeqZjEvonLV5UXUaU83bSNNKmUNzpZCe7L3At5HvioF",
  "key24": "5vcmor7jN3FkiRDFasG2BN3RpjC9zEz1xkk5eo18s7mAiEpSU5FzF65w1K9sMmSMPcxAMt6yUMakkWmZom1Gu3h8",
  "key25": "2tGPvoyDA2YAktaMamMCLjwicBf63TgJeEYsz2fUiL5qvWLXUZfNpxqjuGjttaCL4xhE4MLrKqmHWniH1zkBZBTv",
  "key26": "4CcDj7eSgcFznW8HX9SjBSvjLNXjjrpTfbtWEKWmGRTBDHS8Ne5sbNif6nDR2Y5vdUBRox15fhWbnsfe6zJrhsfN",
  "key27": "3e9W1ybfD7xRUVUYKncMrEf4tHejvbrQMti89ntY9EFMQkRsnopsa66GNV79j8fzTV6AQEd7VPPRYUo7g4wzqu2m",
  "key28": "33Nw1cWa8bJYSUHvZXVR34rbbeoTnnpiADA4fx8pYVxP7Qdn42Ci3CtY1Z2HwvrKQyi8n7RLFsJ6RTFst5uGmeB2",
  "key29": "3LRDGzfuDZ8aSWZvTeAwziLVSUVWunfRshFSbd5uuZpmD2EXnjcBX49FvCkCoY5JF9j2pVSRFpmufqen9NcnC5AA",
  "key30": "dqbWTePqCRSoGWfZjaeCGB76iLGEy1DXHn4n4u8oAxrxHTdXoKMQWspxe1PawJfh9DwFSycKziWJ3bnpXfsrpGj",
  "key31": "FBNKDhcK7Yk2dZaVvrMWsX44uXg4S7Rz8rRjBGevCoaXfD1csJK6qwX8TYVHUmmGKUCw6T4YJ5YrnJFT3eKXMa5",
  "key32": "5x5HNtsPVUMxKTDZ5yrQebU5vasXNgxZZdKQRQW1dKZ7enESbakJsoQGaRx7srwubznV3jhHK5Mtdm8qLT5z5MA8",
  "key33": "5tcpar4k2ojrYd7KAE5XQ3LLmQdJ7JYkyehzW8hudab29HgZb58ugywSa6tea8Rm8s1VEw1urBzhQ2KHAyQjNGiA",
  "key34": "5krUkuGFu1TBMDgB9GGNgs2pDn9e5KJ8HMN5KBt8KsGbG5oL595TxyhVGYFbXTzxjGyoKKLFZ4BsbMSc8qV7pkuf",
  "key35": "2CtR1gERgXhxff5EKtUemrRos2RZWYqVgFEzMVs9qwuTEu1k3DPpnTSSuk9yQkY89D8nMgNLZaxWBMKgibH5qgCA",
  "key36": "3QmDR1ZJ56uR1wQyCpEf2xA5BePUhBHRuMDwgHzh8LAKozA2q5ReRa2iSkDiYMNFLSsShM6Hn8SD8HH19bGizUR1",
  "key37": "54rtW7ViBUPcMVtGFrGemmKum4XnJGVNRBCoEeUGtEYUFWakFUDosvMUG87JagvRwH5uP3thM7ReDyv61biJJD21",
  "key38": "Ttpuy2apC3kJyA9oc8Xm3obZbWA7zQpmKMt3YetX3SXLG7cTNmbvDUSVLMCT9vf7T71MKYrsNRFu63qSUnDstaF",
  "key39": "2LRtKuNo7ajMzwc1H2xxTSkiJcuNx4Mk3f8hQHzySR6evpo7AMoMAjNLbg18wNAPTaD1bRVSKQEmQyjLXoHvqMrb",
  "key40": "26QeL6auaQ6kKJEiuEyRJpxzFrNnbM8xU9Cu2LauzfFSeNz4QSGfMHEc3KGW1d4jkPdwcXydEGfA9gh6uT3ML32e",
  "key41": "cQqVXEB9zzab3dMMZSSqLcnaQE87tPhTrGws6Acy6rVXUTdVwnJeATM7hhLZmqdk4JPhzRMeHK7htFJgirCLH4b"
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
