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
    "4RRGLCdSSjhve95ZMn821XCoxXt3w4AXfp5dHKvWeqPCbViiRrcd2wD8ycmHEZt1bdNNr1jkWh13e6NBr3JaJUiy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UiD7jUUPe5T9kbroFwFNNJ8diMWtDnRqYE3w2adnmgnLoD7n7odTbBvdLqDqU1rgf3zhqNTH6Jzitatd2bKxNaD",
  "key1": "5SmqqkZUjyfdAbrNQPwjDitxyyVEBbhe15S9mticQ6QDJi9G3sqmHCavJMXtgL7oe1LTogNKBCx7SNZVSc9EHJuZ",
  "key2": "3rAuh6hcSktdsDi3owSAvLMnaroD46fHZvQUzzzwrSNsgkQiwZh7GNyvQZ9qy8dCi1NzjHoWyBpbpw1vZYSoBPp9",
  "key3": "3aYu8oxFqcFEg7qryq92GpNWyxTDdjwLFf8Bh9Rndo6cLQGrLXyFMGCrqE1eUjX2Xb2GhHpBr3VuVcwoyrAvRnRp",
  "key4": "4g3eHiFRZvZDcrFs8Nkr1q15QSocDQH1g6v1hbNHBFNHdpXPqRiTsgNLRR8wNuh6o4vtyEmmRkvgqutmdPNjc8qM",
  "key5": "4eqvJv6PJYfsxsvMu8JEErCNQcWUru6beWYzRChviH58xbtCuU4aMH6WsU2EC8tgxHi9NoJ4p13oebZVMyzQzGKe",
  "key6": "3Gh2zhiLGjGJjPik2d4isWZr4vHVVdB4FMPnYjNXo6DQPK62iGKr7Gaky7K7vAmPEBqpia51ku24qkDZN1cd615K",
  "key7": "4z8YSB3aC6417VXoLi78vv1BNMQohcyWeRH69Xba6VxUCyMQ3SASZrYbeZCCNaFRXpLBRbXCTZNkdNv5Kx3Z7yZn",
  "key8": "3XiYwn46M5sN3a5wpDu9AYYVco2vvwmeEMGunuZ6SC1ccqeRkP19hEFzcyzm486YoCEv2u8ZDnxRXBL19GWKFY6j",
  "key9": "4XXy4qdc87ocGJBfGPTbuPGgQC6B7sqGaU1tzZLrjpqcUqb2UzjppewyjhajfkzpLuRosvw47aubVf4YLVkDizST",
  "key10": "2v4csBPPshDpuW594qV44rwjLpakum5skvoKk37SkNLqLATDBDjmmwnABM2t28nW5gRWUPrkgm8ZeA9LGCu2DVf6",
  "key11": "zFB1ezfuutQKn9hqvRewTkmMUyfixJtNNJkACZLZR3f2rQQSxbBgug8FkR4U44KaoAyXRupKAMbqxMkrfn69Qxb",
  "key12": "3wZrXxf8y4dLy86n6dGC4qUs6VALDrtY7XHnuLUxDNSNewDTUQwTNoKgUmutwTwa2yZYrDVKUUPstJDmLLs4QDqZ",
  "key13": "61tAXaMNpids2usz4BgfuW4BMxEVsgbLYLiBntPgXTj5UZZ2b4vQin93xjq7CU4NFhsyNCcEnNyExfHjvnYdevw",
  "key14": "eNs57jNAtQTRPaD5Lb4t5353XKWjjw3Y6KkdK2ZpnW7RKzJ9oLmH7Z3LNTKDnrMtsGuoN6wHTYbeT1cFpDT5ys1",
  "key15": "XX4Vc9ngs88WzAjTtZzMeGMPxrW6xHFRvhZz2XVDXTKbDCMAVjFjhryHwhsEumvGQfrkkTbHMavsQV1N4EeGs1s",
  "key16": "4CiBUe7Ef8mpVW4RwdLgbBVt1ifJti9aRgRZt7isScenvopjT8dSqPJHpcgEQM5WC9Hf5JrETG6GSjKMEUxyAPsE",
  "key17": "3zAp3sjqXNmpBa1aQHAitCsPHhb7FLvuJPMSfqNtGSLSz8TmGoCEexgE2mHauuQnGqDhr91fhXqZLnEDMJyDRfY2",
  "key18": "5oYNFZSmzFgiV14xfsQJrawJEyG9DRN28BAcZXvXuN9x9C3TqshDjsNaeZWPL5DK2Fyng28cjtSqXhKWfkLF3F4Z",
  "key19": "57LTWeCCoNvhVrcXRTsH9yQngfpvL8NapEfgbNKN5zTqyHifVzBU8Jd3XDGGBdG1BzRKpL3a8gHaCciJnzCmBe8F",
  "key20": "4aYBGxPar9hMAfPoKRFHPDAkr8jzb3VkJXkn1ZNqKhZq8hXLCFTah6J8rPvGKaQEg3YepVR5RSRc7PN4ZWreTMor",
  "key21": "2RFdf29eA7zapgnFfCeCMCaV2dTnHwk2UgcrZo67yjL2KTMecpy6R4R9Xr4a7bQmd5jgeC5hhaEzuxHNQVE2qusf",
  "key22": "57HhLiaF7b2Kg3aZSgxvmkQEcuLQ5TocfyWoy3FFgRuS8iNiuYWHu4wP8TVe9fMtoTJ5CqwNrXSzaoTNxWURYp8f",
  "key23": "YuxH8HEWJY8qUYbv7LRESSd69ZhcgAexoMB8cSB3TrH5AUTqRAJHLhdQEguD9DNXmFE5ttX7xKkBefRqVuyhGW9",
  "key24": "5hwkVABUTj4nm5TnvpggoMjGs1D18u32HJ5zvPcGruzU5QrdJiCWzms4gdQVLm5B6Av7akeV4agG7cgigTdaK7Li",
  "key25": "3C85w6wZFUUz5Pbdxce94KbdiKGSufY4KQAJXvqNPjVgesjyepK7cArRatJF8UFCmJposhNGDjHasm4Y9YY7Jika",
  "key26": "5N3e1bpEmmZawJNPTQFQpNjkn2c3GtLsrY4CwKGnb9RxLG3p4MadXh9xajA2cLrn76RjQPmZnabBvuE8iwyuG7tU",
  "key27": "2YFxr95bujPDkd1U9ova2RR21AsDML7wpqN4mBUC9FAev4YhThLGDKgYoYDbKA8xgsWNLjQkeCeHwmQRCkpH6WnL",
  "key28": "42zYff83AHiBNuUtsEoFU8bmYMNAnpXhQwR7JLFLjwfQVK3C3CsjSjWhvxzeFb75ai3u83N32kZC6p1mWb8mXGda",
  "key29": "2cZXXaeYxReoLo8W9D3cGxpAF43Dmvguecrz4J6T83Doq9pvvV2yd4yFEvnFYA5KfC5i1Xrdp3dDMX7Rmo7aLg4D",
  "key30": "3JknBDDWNyvKEHJYHtSuWW4K4f6vTcVzqLUEmjvabgKAXv2cuHabkeTgz49pGoTVR8opVH2NDL8GfxtTv6XQmcKy",
  "key31": "5MHxgQzz1duziqpvEuaxyn9S7XkXurHFktrjMhdXfvMSGPcDyiyJvJeHoFpBhtvdpXMfR1HCnFbMgbjsKbGtc1U9",
  "key32": "gEgcZkKjca1N2NkhYqkLYoXhzrVCnKV8q38WWnrmqukFcc4QByXQ2bWzKf3zLPoRWhkfw19ixmPdRHJ19ASVLx5",
  "key33": "2oQ6eKzPrwT5UHfwbAgnriBDD6XDqDKdeejtXoPT98Kf5tzJD9ufsVDrP6vCFSzat3vfAjFNREtv7DAGzQh8NCVQ",
  "key34": "33EMDb3seoShvva5QV69pcodiuHv6ZoqTS1qSsHVLeH2st9h3X1hedbw5EKyvu7UQt4ZhBrWgiGyCn8qNFApLMts",
  "key35": "NNDYG3Vc2BMZtpWcsHXdPn9Ar5Bb8jXLEGEsw7v4TLXVRWEHh6gQvKToopc1K9QmGf4ULzxCXobYmB6wX1qdR9B",
  "key36": "iaWPYnwtNn3NYHqCKbxczE112EuLyMh6BNXjoNQ3gvXFmAwFXNpCDHPcbvRt6eDDg5GYdySBESFvYvzsYvg43Pc",
  "key37": "4nUeMjjL6gwx3GUuyqrX5nG4ZCFRgFfz7JoSrs6jhsZCUmTJKTVtuVC6DyQRusCE38n3TSRhqbsyWNotAdDXounL",
  "key38": "2huNvUdkypNEeq2pFApDk8iGWS5cbbCTAwJkGbJ6iYGNKah8UHWc6N9J6UU8dffnEBmayGHxjDoYUMXTiZAKc6wC",
  "key39": "mFJKMbXW3DZrLAdezHbs9nLDNLNS6iRfzcoK6u9tXHDtZdX7TRXfCB2VXhwh1DUB6Zdrvps3uPmS1x1XwMZgAed"
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
