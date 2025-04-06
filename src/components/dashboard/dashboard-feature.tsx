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
    "5Q2VR95BHX3TtkrR4BVG7TPfxBpv84E8RNJMcDLh3C8U98s78ZHD6xida4hPJ9RjfBMWFhZjWw5zYNiwQsrxHKJe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YmXFrSykQiPFHaQ2hsjtxFiGvbixQhfojEkP2dEN5u5BzRUAVZN77FLiYnyNovenMMd9osZzWNNZiCsaRr9XZDo",
  "key1": "3TYgfabjA6GzcvymkmLBJXzA9q7cyMxg5eiMH57NWYXUbMPAT7QMvSTxq35gs8ytUutLAQohJQbDnogkydX19iLz",
  "key2": "5E8C5t7L3rGzw2UHSfEde4D5MzY7uoqmzM4vF5Ns9vewzgPpBcySvAsEEnnV1xx7rzDiW2u36zAoVKFfdSGD45Xy",
  "key3": "3iJka1qWJiHTJKFQhDvnk86svzo7sG1s9CapySLzi7k2rxoqZL7u9QVpg4bcGMB1yA5JtRvz3qGMNMPmtkBWJSpp",
  "key4": "3XNq6ndUbkwj4jK13PpyZQg2EZYbZ2is43oCEvB9YXv15wgbRjCwerYadKwBC9q9Bv66dAeoDKaEbMGq7gqBhnW8",
  "key5": "5VqUm4sNnpj6UStpjwAD6xvPAhwF3rBXxupJbpz8KSuKyq3FrPN7ZCLbfmeEuv4saD4C31hS5EEaRgD14tbPMSWL",
  "key6": "SCe9Ev2V21EkGjHFf7mJX74LD3zvrovwwDs3Y6D99JMrL1ymhLYwmk8Avf8Vv91Fkggd7r1erNbzLzf1Uvzqnjq",
  "key7": "364FQenjLy8ExewhDegrxHDKBnRSmWCcoLdje7Ak8ZZ6XwZ7eW5y3z1gFs71fmB99AMgTxL3j2o56Z9PGkduWze1",
  "key8": "3MrwpH9wv2gyVhCyzWihG1VwgFPwCud5x4j9URh34SYf1k4P4tNuVQx8eELNfbvCtmsJvSz5Nejr59EcCivEoJrJ",
  "key9": "5EsEDCaNPf4AYMxGKNu2XPEYXSZxMEYtJw31ZqZjZsUhUt9M248CLeHeosTE9rHCqcjA5AvBtQbyTAr3yC3759f",
  "key10": "3JBCpMZTU4X5WTn5mkNVCba7zEzW9ZSLwn3NUWUqGqEfXCib8BWsQKk6qMEsnBzwrqjtnsQEm2Gt5xGRyjJ1cgA5",
  "key11": "3ys4sU6ZzmWWFhWxAxbqch9A26hZVf7dK7J2qigFq2Lc2Pkv8SNk6Hzqk7w3WX3bwkTXq32BmyAoGzBKi9JBT49X",
  "key12": "5bDhisF832i6nYDVdJouh3U9rRZ7vVqF7uXpLK2h9TfJh1sUTJwpNhBjDSgGAZr2iKAiHDMm3Yd5yFzAmrA7gRj5",
  "key13": "3oEAM1bLekTysYiYZs4XSe4nj5jW8XkVLg6duG5a1uxjQKVU1XHRpTzBLNenwkj38HxQ8RHab157BSnGkUHt3pt7",
  "key14": "2nKmNh9uNQ164usttK6wt59TRtvHQi4AjcJV374vemYDNrdksohoBtKYcnSDhd3SHvCZaUNFaLz2rgVv7Lv5ZyLb",
  "key15": "SguzTLMCdqroogqBQTfafmdvzqne5bPr8MtNgb4tPDfBLhmhBqhtEeV1J1fPw2aKQSQNSS1x96zLNwqB7r6qPiK",
  "key16": "49qNCagVgDMtPEytpotRQUTyQDTSDQJ4ty7ZuPoyWmftQaaCc11mrqS1waqYQMx4MVWkW4ca4eFx4v7kH2oXMKRr",
  "key17": "2GosENoiCveSktXmRcW411atzPfmJ6HYEaHjaBQDJ86FMBHGAaKiw2icZHtWqAphDaMksZKjbLNriimFgtX9Y7eK",
  "key18": "M7zoKHgDt5MtEU9K4Cr9vK2Ty3GB3HGiftx3bZSkXrDeH4NQRS4SAfMffd9a41gB4aYo7DTTsL5Eyn1e34kvCja",
  "key19": "2rsQZ8YBtpWFEiBEv4QoGkVbMVW5q9LZWLmuwy3rMzy8SKZ9dWDAQ957cNDYLS2FJNmQDWMWNtdQWghtuz8s1xmA",
  "key20": "267i1aVyPdGWfP7AuZXaGy51i31ne8cYxSv33T1SNkWmCoCzc1yRjWdrXBE7n4P9dErqhowHHmCh4ERRKDnZqqnQ",
  "key21": "2QG9JKjVbKwaKwgVYHfcYjCVmtW5FBgAbRUz6VxDEv8jwDLgap3s4jrNeKdHhMdWkNWBSjBbqvZc3ntdfzXDGjC3",
  "key22": "4exBXVA6x5KMUBwn5DduFLaePFueyjMjYUUmqeSf4QsrTnZQMkzqTfM39g77KXJfRJAxyuQuG2h6GAT2SkGZDg9m",
  "key23": "4JHsPLyLrt4Rj3jeR7LfcTjkUmH7GMw5mrsWTpFonBKHjLvgn7FRZ5P3XU6K15yAhjCe4dKfATWteHm2SZRtzig4",
  "key24": "4Djj4MVnNRbGSvxprN97AUV6Kx4r6JRWUCVEo5eUpBqFXVY8iZMYtBG92tGw7LY2UTCLpxxt59ZfbPrKNUbEPCVq",
  "key25": "4tRjQb7KiKH9mdvkZBQevnCnLFuwaHSBJXMRHJ7FCEZVuyTNqVS5j2v5UxQHspDEeq3e3HcpRuDJEkA3h2MMs3d",
  "key26": "Ds4pAFeBU8ZXYGqfecGdcKafy19ePxzKfUnAyvZvNY9PLcYXxCXT5cjws3gCKTYzevvUDNKSJc7nHWmWswL4awh",
  "key27": "5Za6gf2Cc4borV1PgnkFcmNjVMXKneEbQBqhdnAi8u6MZfH54bSbsPtiSHhrUib1B82ZtMiXySVKJUyQ2tVrsFWg",
  "key28": "sSZKWcuMkANJ2cRw3erFvNKQb7qdKR7GKCqKPrFHXaex4XzgW2PwZr1hKiqLoRgYUEr3haAYmKC6tx7KcKbsb1w",
  "key29": "5ma8e51cHghB6eQdvJjGzNUdsYcLsrCfKZcP2ZanHvLDczUD7tWaSSnyMxLQ1BnTkFDsRPQdcPnciFYW7JyFVFHm",
  "key30": "5vGgZLkDzdPKdoVcpZrGt1hSVj1f9sUCwK9GJ1tbnnjpk8YqZHNMdwv8Q8cvMAcsz4KwKetFxFhwpfx48tLRadGb",
  "key31": "2rS2sQdUiGEQkw3Rmpfg5DDpfS2pPn5wB8nKLUQxsub7wRD9chmQWy3sZAevtJ3KVXM8gP3StzyBVXEewpTKvs1p",
  "key32": "3yjcv1Fx8q5CN33nP1FByuoxEnsbpWpmUySZVrKXxZBxsUG2Jo1wvYD9g7Tn4WNtNFLrWEqnBmgXCKGkPrukF9UQ",
  "key33": "4nnQCreMQ6WyT4ChuGiLKgVfoRs3e6zmQntEbVo8o47B2BtqJE6tVvBcDFz5JgmQ2kszWwCZ6keJZjoyx4R7NmM2",
  "key34": "42ersvDYrKipj45QYkWq8ApwaMUyueg2VGQYcbTsmxAAQR1zAkrEgSeD8bLsQondkkYjw13281Braue7hbhkSiH2",
  "key35": "3G8r6hnEh1tqZ4BTBs46FEFnngj1uLMhN3GCgoYMg5Rm1ZxTGwzMEEVir6Ncnc9fTjQwsn5qREbTU9cYB3YT5cBx",
  "key36": "Xeyv2wszRxkjxZpwRLzi2wfX6RGQi16gz7Z1vAaikqxk1KrrLvv2TUfQCqm9wEq6hCE6AXBgordsNQCikSEMDUo",
  "key37": "3rGbzfeYm5ptVwcqUESqo7aJj1BqZJAtTKV5u619fVc2BujCP427s6ZNiZ1Yw9WkivyQjgAdVUkAgTEDWVuUVqqJ",
  "key38": "2EaGuujs2etuCeCbXh3g3XsXrYsrwobYQJCnV8pWAvetRgWaWgXEKCRwENQ2m5n8jwByMwiYUHpMULMi4nvLG82r",
  "key39": "5dbHzZSBggoGRvD48SPuwAADJydNH6izHLcxYMrssBbt2xNAEcMpptgjE5Q6g8gNkmUBTXJamwJJ3oxoPp5YqTCg",
  "key40": "2syUStGiTHHQfDVzp34Heave6xhThN22Pc6tixUonpgAnnuED5vixP9y1beu3UMgCEFaUFmRUtsQrkfwbAxqEL7R",
  "key41": "aYXQYEK29tLnY1SP56Df44VrjyttivrSLPpnD5dkNHxWWtHLPxA7qfWa4DnCCCCM8KYsETEVcqZsyPVvp4XYuxt",
  "key42": "Bm352LFpfhwATeQVenzcqeCaFM18ZgWmPis3Hy1gEuqSUBFH5vC13uYqti5LFj4KFfMMubNy8yx8b22fejoNXun",
  "key43": "32kCSWmwv7HLotFuDm2d2bQCXYEKYXR3scnL7RtZT5Mmts4i7as68Z2D8edSqYKmXdGe3Rp5KU8DAQxfpm6xBfEZ",
  "key44": "3ejdeH3m3wXQukcSoDmjGjjPJ3pMqK5AVW2PDxhtetuR1EYYCHsvMz7ArxkQpi435egtexz6ojN2xpyKzkxHvb1e",
  "key45": "2KE6q881W44UvdoZaLEaJXsb87r3spkUCiYV6FQeyojAMmmhFMmG7A64yMBpvqTJwNYGkHxtRPuckgBEVrYEyKu"
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
