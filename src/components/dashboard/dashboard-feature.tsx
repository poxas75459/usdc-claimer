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
    "4G6KWRBhzzJm4NzLix7Rws3JJpx4GCreKDAvhrzFdrTH9FkBFZYrTfRjnFEA43EcegmKGTCRhxAL5HrSi2fHMFye"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25HRqKumnvkmnKRM3jCMtRGGbur4HVntt5UGVs3XkExnKvWdS7U4sUJFPdjbaKszyyJcqEZaZiUVMN6bQ821hfsz",
  "key1": "2by9khXTAEP3TzRiBP3CPgxDFWJBi1ReY5QpdeAB4h9CmGrgMioGFb8oRB5zWzxy9pLRz6jtPEQ1W7qXCcvCfTA",
  "key2": "3QUWXCyAqfPY5hfMKhb4ZYWJBochp5J79WMmKaKfzdYw2v4kVaemP1hSahWiA7eNR2QSEmmYGbL3df6LPuat58od",
  "key3": "4cvTiKKCqTocV4tS4inLNYe8u4Z6JLq2wkzUWazArixsM5ZVuReyCAgq7zgrehCYMeJfU3mFM9xvcPkPUYEnwdZg",
  "key4": "66BgjDFJiKtRZPK4RfAasQBmrcFEdfbFzR2Mfjjz8PHFVdL7gLVpKJqZvVCreYA3LKAUi1VqkpMX5WKsVnHLmwbR",
  "key5": "5NSiSQbnCaDLx1yZm2VdWroWzPYrwCYQK9m1kU3MAYYhAtFxr72TwWiR9p4i4HmLxnGhNPbqQdA2Q1htsHaHwQAB",
  "key6": "3hhBvHcPPDWGh3E5AzHgHo22cMSUmFjzQNx13V8TV6htiCcuidC2HZTnLBccLjQ9ovcEdNGm55RV7FCMhkriQyCr",
  "key7": "2PZ5YpaDY1KNMso5xjWWQDRSzs8aLE1fQLsnwr9xBwLBHBQgRgc5RayD9mJPZjTXadFaCPSoC4rud2b5XX2Jmpxo",
  "key8": "5Sup1Vhajf76LdzLsT6kCn8g1QwPbpcyEjSmhw8XYHgwYagCcvRkAJUt3BRjCtpRLkapDGP2orfSmjYbCcpWLjxv",
  "key9": "3gUcLEP6f7mCs6DrZLsqZUpviJ5A1e4PGfmm5PBteZdGzV3tzTiQpQ11xvDJPTDdPrcDoQAN3TvTvbAjk1fQ8Mrk",
  "key10": "3JqDSsyUzPj64UAzJTczYjSyYhtUv4DFkk1mBVYeqTv46c5g2zEA3uYS72UZx9R3zB45BoYC2VdrUnHoJsFmQgGt",
  "key11": "io4ufvmCXVSYdPWkAJrtAyuLjaFfYwdcTKdBS3NVjAy5Lqxa1ZUDhi6DmE5hT5YMdnvcgTsY3CQkirB8uCbVe1V",
  "key12": "YGtKnnHgmHHG9CVdzNx5jhxEymGmVVC7DZVPAM6qdy5HxUuGjKmXvbDjPcX1AjHascfk1gUzWdDQNQoQEjsCLJS",
  "key13": "J5ZpaVehWEdjpWsSB5aw6VcRKV3d7ia9ejKxHfs56T4Htmc4zQ6jS6HMuq8md1jJ1ghKRA1U5MUM44fJAGdh11U",
  "key14": "2iLaCew4azF1zg81nVTLfg4Fu7oDmDDymHuvo7VLdsUo5KqcafrtzX8qKh667MiHgZBgEgUBNcXH59Z8UtvJVXB3",
  "key15": "xyFvbEzqfq282nWHHBHyys9EQjKc1njM5vEk76doi6Q8RYqt7G8F2edQVPxTGPu1dbNcSabUJPzbDfEGhJ9821k",
  "key16": "5ggSjPCooj57jKg1SJcWYrtQKhXdCTujKeWMyXtkBt3JyAF3e63kZYEHud8odn8ZPprmg62ULQFHeHSvHYTG4n5D",
  "key17": "5wrcBaksuFFxG7qMsMxDrG6sXc9PCkHsX1MYPAjMSiMAWvj9PMRskkMzBfmx6wuztxSG5KdZ5bJnPkBz6DotYitu",
  "key18": "5U9PmjvN22s2Bwbz4WMpksxuURsDAmSC8b4vNrp2HJAsoQhpB5szQxyxRcLFksd5Ww7o9tDwZZDS1gFZBtuajqWM",
  "key19": "4mZE5h19nmiiq2mjznWC3PdzPEXRPCEJ8in71CQCLDhyAQTjcGE8sdTNR1TvWRCjNMYWNqS77uwzA9N9bd1ZTXZt",
  "key20": "5iFGeQx3vq3RvpGoxF34kVzDJyk2PB9sUbEUpwtkxoUHuufBptWTyss2EhonHShJDWTiDNadvE7LG2MTrC8CHKKB",
  "key21": "2xjiL4Wtk3aorHh5BmRKyf2zBfm5Nf2YP5NcmHSVEP1Y94ttwCsdoJHiSZZXdX4cYbH3svLZJPgAb8W73SCHe6AT",
  "key22": "4CNMsVnYGLwxLuEhauhsXE7coqkFcDFteaa37sSUM1rfaW2on7evEEuSTiuR5phkXC1vEW5jacw59K3q1YcUtr24",
  "key23": "4dyVDb6EAC1tQvoX3BSrAi91RvSv9LZt8FoBRcwriT66SZJZHMTUnVP22tAHpTGWnpv5mKo3RuMRthsyVXgwzJxY",
  "key24": "2dgu9534oDf1srKXkXfPwxtszkJEyp9uoStjCLThrtp9sUctj9gTAeAXkFczA3hwCFiLpJA1QpDrJRyCud84UPhJ",
  "key25": "2QXcfYYj6UQuFvbSd5GrYvU8osPuwYbSftombFJ7jYt7ec2kKKHiDfmWFuaVE5RNR1q7DzD9nPG6xR8B2jELB6db",
  "key26": "Pc8gY9nkSfBVKJ8av659UwLaNM3b8kxPVhZZaJmZBZjoFpCEM7CFZCJ9ywZuivJ1DqQV3zBQVSe4UxG8qcrnp3Y",
  "key27": "2FxQ6es1vqZY1YriuBLtmnZFAhDAJ3EkyqhB2VbE5oZ2M4yn4Ld9Cswnb8NPRbj2tsbK3jCMQtU9wwHwkvL7BKqR",
  "key28": "58GXbS5HDbsQR21T7boxzMJKFDh8yTnzSj8tNmiGpoLDPNkGibJVXrcxEweeM37fzjfYL7FKcAXBgAR7Brtubq96",
  "key29": "3PdfEJkGvrXMpqSLj1ZtpHbpF77ghqVWExtt5siGeNL4nke9bNPwvi2SQenJ9jwMbjb4ix4DhtboAPPzW2xMhiet",
  "key30": "4i7nd5ysUZER5E9JEeqeZ5EosejJ22cfkeJiLHkJoFdPct1tbcvUU7ipJSDnDbarXvMcDaNBcb25edK6SStpccsY",
  "key31": "2HGjPnG7vMvGUhZrXVxPexMHJ1vpLidX3WD6h9B88N4eVyvQ93DFzv16JU655nyNsFJYZxDMNym4SsDSQBcwbdAa"
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
