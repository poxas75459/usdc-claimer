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
    "dzMfiMMcCHSTusK5sa74kPJt8iTLt6HErD33DRXf7K1a1KRka5iimgPabdmRj1LnwaNKhum2bVhdjUA5XCUUVPT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51rsGDoPbMi5c8AivGxBHWDSw7y2Z12rxPCNeXnFB29pqUnWVeEbnfwUqcPfo5g5qrjPid82WLwJRTPYo8Cw3iWn",
  "key1": "49BdPFh7ce4HeKHBcURwmTfBbTLWraPhGhjygJEUHu5W5V1WtwxFRQFCufc9KaHyxFxytYHbwgfqxLzRhd3EiJM2",
  "key2": "eTRuE2RQtnmKRx7wTGY1T7xcSocKxQx73CQfhGc2GbUhHEh4Rv9M7v1setbe2ppRXujBBQFvZooiQ2LZrGD2STu",
  "key3": "3topxyBeEAVT5DH8gzQahkHqCwFTDjyTH92KTpfEHAWrfKj2WGwKdhqTUkCsFSmrBiEEgRno1rnYSWux8PRS5DNw",
  "key4": "4uVQi3RXcLQ5Qu9ruYDyWpEnPi3WFpuYKgbdWHMqgWBnuKDYPM1ZwB75oGR61SFpNv2mGyPdQdpSyLrNMc8exMms",
  "key5": "37J2aqAyCazeMNe3mvtUXtEWyLnmL372moepqhXRowTAwqRX928s5m1BASJZgk7hVeYG7cFww9A2eqkMAtsE98KV",
  "key6": "5gdUUnQ3rpo4Q776qPzCXvzv2J7HLXP4ZGFzWCqugGy7vxovRfc7K3LBQZsZCu2Bf3ZAPPSyKhWnrfTMpTzD38SB",
  "key7": "rZy1juU76nLojA4yyW8wWUqSNJqWxfWKrS4fgsHQLogPDhUeKnXAbBeiXuLNCLb3p5qfusFF1izhQScyM56mcVD",
  "key8": "4EdBXKWEEWQG5iNroGwsz2sdxhZKFWFWQ6NVHeNRYhJPwZwfksPGbf5XPUdfixXLWWw1Q663XnY2upG32U1oXG7P",
  "key9": "25765iJsE1tHiLSKbByK9STi7o8uJYWxDqwvVrrmVyfiNiFrjegJfc4L1hFDjKqmoT6peAjzGrb8Y4K1n8fjr55J",
  "key10": "554LpAZuUVTB1SaPwQe5QYgAPHpDWES173Q4TWXwy1M31jZYynZJpFdeaw6VRLSjTmu9K82A4ZTVJApCeZ6nGi7W",
  "key11": "4AQVmVFgyGURr7EoKc7ofipyHAtodPMwiDbo8pPvvXkghH36XkimnacCRFo8zh19kBdjQv3cuQAm4P9eenW5amRN",
  "key12": "nP7i9eyNYzUA5WhwAr9YGUSvaehYiMankb6dWEe17nz5NzbRKXTosjdidVSPypXTPaHxLXhszUQWrDaZdS58cHE",
  "key13": "659p2YYhM7xwTvXNvzdkRJMHyzyiXhxTb1B2QDriy5CpBXm6bPHK3RrMNGYTrR7vszq79LT1yzQFJytLVQJChg9m",
  "key14": "3ShLQ4F6o86VtgRd7G3UFxXTuAEeJyPVZp3f3DYVh4FqSyaxfQ7sLJfuHpaJfeN4kBE3iroEjip2D9h3XYPbqW7U",
  "key15": "26v4SjVemYVCAXkqQz2WNqqC3HApHxnr1rQ5pmtycaYVx882uEVXKwjEujSLXa3GNd6fD4M9ojgvM9t1EofCpsDi",
  "key16": "4mxeeBBFKkqnUCpWTY1bnbvTGFeVcqffsmKkos1c9Vr7FjntG9feg7ksY31w5oebSDspTK9x1VWtnLKBjhzccyDP",
  "key17": "qRAxGWaV9rN7fWnjM7iryQCLCSDV4SH5Tv7eaMJUQbbxg8wrNPCxhm61J1tWMYWaPSpke5HhxfQCuJoT23DaAKe",
  "key18": "35uD5bwkGJKUFCFvXQoHqLdhvhTyFZsKh3NVHruRfv3rM6G8yXk5YoWm6mk1pihBosHne7eNFn4vmP1vSmwwGuE9",
  "key19": "5sgWb8WXko9s7JvC6kk7w4winus32CKFj1TbTf2W1jcLyg4GRiQTvfMqvoThkf15eJCBWr2czb8MZaZ1cQxbji5W",
  "key20": "3Eeg3Fa9JkdAyAPoKiGjTujoq3KAGNDBbfzSuFzv4fRVmhARw6aZqPJ5cMzRw4CkT6oYogUdhpiDEAt8V3WqsrDh",
  "key21": "2Z4MRVqCLAEdEdvxSFG7jbRDNCcx65VwjoQxC2Tuis2QXEkdYateZ9ZzYvSHFvqdaUkXGZeLoMbWaNMcDuiQGCnp",
  "key22": "5cfzbexMTzwYTFDEV5iZfNBL8yo5NmJ19XEQi8677BSzFdiqD5a6MK4AY83fiNFrfPt9p9DBkXjBCyV4wyoCtoeX",
  "key23": "4WQw1sTzzqqm1oLyS2yWeVgHMqU2iDhAJGBo5uoKdL3zP86AgZpZLYSzsiVY2LXmZDoEMJeu21S7dTTfuphjANa8",
  "key24": "4B6Bn5MZznvWxa9YNpVu39MgVWqFNrQ3KbBPWoJo62EuD4HXKxXYNzz2DSkBwFbitG5KHcZRYirRy3Lbk8o5Tau6",
  "key25": "4mD1dugmwjH23x4MLpyUt1mRzdiz8TcuSF3Y6nqZgiqVzTqaF1ZPuVqjiRrjSCz6txZS2vFYroCRTRDguL9XXCqD",
  "key26": "2997e1PW5oKJHQWAF2u23bTzchqrJMuRjNSCThQNpcAwqzyW1CRBgfNBTeASnQSM3vLv7EQoiyriuKzZDNnfbpuP",
  "key27": "2VtpwHHLDF11QVHhyzZF6HjwzV5uPrGEfmU1VjcJALoJfoFhozNPBQ8NnWSZBfNdrQHySfJu8j4cx94K9qGiySfo",
  "key28": "26mZJUmGiLgcWgvaqmvDBiGdfqtg3XrUKSuBHpeaD8YNQPqR2vUz77tTZfjTZC8Yq3iuCKqfWYU1hqcAtC8AWjNx",
  "key29": "4GDufwoE4eeKVd9tMvy3CMUhPimNkbPCpRjgDGfXA5X9u3YR1GFerqazghXWMU4prxAonLcF2jPoekCN3ix61fSP",
  "key30": "5RDfAd62xjYVisZfoGxKXH9NjxhMo8mJRyqnf3V9tLYgbfNRdBL8hHNFWeATXcLv3id7vWoa4y62BNeRRGqtSfDZ",
  "key31": "2C1t2MzEHhJXyDJgnJh2NDXdzAD7k49Cbbj6s5Xxor2E78DvvS6cDn11jB1RKmQLvFcbLWgXrKioW2k8MD4fbFeu",
  "key32": "2fUDpmFqwMH9hrZD5DGLtWNVVXf7hN9YjNRpePekWAKuvvrdePSi8ZmZGgfjQXZAKTZkeDNffAoWJ5bZmazLbo2q",
  "key33": "66hQ5goKb8apA8ooDC5Tq2aVgt8BwFgh5jVd3ujRsZAEE6dSmpBVbzb2yojgmrXNPykW4sGbjhxd4c2uvK4MMR5E",
  "key34": "3wsEjZuUc7Y8cQeyDvRNi3xoAEHPYBBRnrwBHnX2yD1p1VMxCS1GMjLyzardtccZrfbSUG3Ctnh2CdWUoguWRWDd",
  "key35": "38FK3qFWjU4mcL37k8hAi4c69m95UgZZCw45a74m6GXA5cwB9vDygVG5ekjCsLjEfcarsDJ5ZryyQ8QaLBxRynmb",
  "key36": "ixXEZVaWDczN4VCdNxzc9gKxBHRFiGEn7f52SaZVag77hLsnMLgwrKEDUa2Ch5WLiawL42AB8Z9FHB9fvT1Yr26",
  "key37": "5S4ABN7KU1A8ZfrtgQFpmpJmHkyyc5AofLhfdug6fmTt4eKVhV7BSX58ybWT649a9nqzCd94N8JSfx8RTnLvi1Rb",
  "key38": "4carprQKdWpjv8eyC2Zzb82S4mNWKyjLedLJSshu7NfSeQA76rUtZGJokzixjrWcJq4E2od76M9P98dSD4DSfRbx",
  "key39": "46Vcu9nxMaDz4hE5SMUwEadHJWhX6HKrNdU6yMe6bFWfyKzuHr35JU4mtCVphsBnFij48nBonHERS6x5vVrmjKcF",
  "key40": "5sTtRzq5ksuxnxhifrh1ZR6mKD9fNrUScYA8jPR1XYzas6b6bPfm1ER1i5qBxRaVFQGvvhY4iVHv2mcWZR2gsBW8",
  "key41": "59dDzECLX8W2rNZR5UeBvJr6EeamppP8Dij48ZBZ3M2fNyZZi9pMxzTY7MJxwRmzZrbAocojXQ2AFKpY1oUiySw2",
  "key42": "4YrMkXuuE615WJnuarwPLSPNynVr9HAaVSB84yhMEXDKVmjouNMuDsUqNhBohE3xwrni9hQp6PXwZVQ5HC17jCA",
  "key43": "3Xm6qi7QokzoECSLCij4Y4VpHPgizgN6aHhx5DUDP8ibLHAZacwdZ6yy8Xff4611kSfjabKe1cAP737xgibfsbA",
  "key44": "4vQnj9QzTtcJ5QFsB2sKZKXdvxHi6MNPxvJZ8xWQheVQ42aN94up5PVTM1puPy6QpeKTW1qnVfAUmNntny9TmM4u",
  "key45": "tNN1pjV5UnPV6xL75qQx9FxvSBBccgpPwGoXgtZaqk1mMYgwsD6gYbyUhZUs3UV1nKHiP714afZAr8HC4Q1tGGn",
  "key46": "3Qm8X7qf6jgSBKWexLsDKWZc7t1Q9FEcLZn6iz2RNFPAWbYy2ChtaWyzDmg6EcqrzcivDgjN6N2o67aS8G5NkEbW",
  "key47": "4BtkKYGuLSaRPoFVG2RVu2s2DPpNEMbKHwiiX6pwunn5xb9i52hJDo1CLAs9zFiRzwMCxqdHwHs8BxxGyZ1LkZW6"
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
