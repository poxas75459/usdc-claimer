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
    "2cMPrAzgtFoTh3qTCSQkLPHQb6BuUUrEiMCaj31LnaQCtE2K3o1UA6LTKG3YxoK3CkiGYfxiuBmBKzTzDkeQof73"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38PavWgJQHfKEdm8FTR8oq7F3dkP1YaFZt87bTreXqjyBMMTVGG3cAYQYwr5Pu9jufE4QU9PkURt6C1N9KGmtzTy",
  "key1": "5wSKUFiCPkNVRbiCoRKA1fHdZ1XzCd4cn7D9epaDg5NhYPgvBSChC8BbpxdNZz5BUcz7F2Gbg31Wm3hkW8Tn5jCQ",
  "key2": "fSfPGugL9JCvbjxfJrjmj3wB9ZohGTyFDMfENsQRDtfrC4NdC317JCAG9Qhi1smmzaYkBfGnZeHAWcGG1uA9hSW",
  "key3": "5xELj5H8Ggajfdzuo4C682JoGWrfqtJ13UGpwcBd6jqGVZbcSiWPK8FVPoip9GHA1x9iaS1ZD8SsjSzmvuEWhNCW",
  "key4": "2rBt6jDwFgzdv8sRBbSbZGAkhcETW6g3AaGDSjvGG6jMpuE46TgVhzjfmQ4zXgE77bLdqPyhWNqVyZyiU2hN6fw2",
  "key5": "2HJ14ZbtHeue1ZrHQtYupW6Eax6otEYGyyUnLxt8DCSuNbXokGR82DbHjZrca5TUxxdtkCbo37GmjHMt8vwE6Qn3",
  "key6": "3LJ42xC1UUmrqQcD6CF6nDmRoL1vUW1zvPZDpnLMmo2c6c8LgnRktXRQ1sffrU69ayHVACF8qnErMbqS1tAMjeZz",
  "key7": "4LjBj2QkvYwJsJ1CgoSgfPJyGvyPniBwJwk2hHYAhR2svUYapencpoBkAvBhxygPPATVihbxihGdZTcb8yUfvhb5",
  "key8": "2W4okvm5CfaJ49rJ4wSHfTpwnacTS12ti2SK74Pm2e13hG5WZczZNPTxWSS6RVZBy5bPXcexjSQqj8fqTV3Hx68m",
  "key9": "5PRbbbeo9Yd9HNVecibHpYYrKXxj9o1v552w878uC6mF6sgWh7FR4bikrwFegWK3VBAgdBZip4Ybyg8TBGqCXwrf",
  "key10": "2uhYQH8fMgjQWAryfe41Y8th3FXGskTUUk9Dm9eBtSRqUuU9kKaGXzbnVZhoBjDX2byLKVNMmkBFMk5voWkr7eyV",
  "key11": "aLvVR5BRfYVS8NaGyDqJb3eHopZjiAoJWpUmRQafzrYQig75JLdkw7LbchRBFx1ZHUDmRXuLrU7eGG6EBwFmzpo",
  "key12": "51re2CUTHF23VjTV71E3RwTqy5HNaic9mS4pH4tZ6orQ63EyTEp4cMxfRJpXaK3giWQG5mjB1YzDnsrGbR3o3CbF",
  "key13": "8iwDF8TdKv61v29GTTw49xbkWr1RBegaCiDTkAKUdyWf4VeKvTMTggMfSAzZuM7xLm2zNSPBc7ML94LoD47RQn5",
  "key14": "34WLNTiNDiVuLse1SwmDjUc1RvojwUkcbTR1ebfcYutJHWHs8exGwN89DCCiPwY63p4jBwNZEbP8nA3JTKLNHNHw",
  "key15": "2aU4LB9u2Fyjyjzg9G4NYnYjpcYQsEr1LKBpjQrvtu3gvkSNW1g5oP8yfJ3YA2bk1rVWzTZC58N22YHZMvdHdJZG",
  "key16": "59LHhShBu3JQrP9JthkSSe35xVcV1McZwzDpGbZ2srcGF8X7qkhfLwd95F2DqhZRCzS1HC6YM93Aah76VUT3FjEY",
  "key17": "4WgfNocbvNUJUxLo2sB6GYffuHCVyhhvg2fV3HdBCWDfPLAKKrqybFPd9r1RQeM5vTYpa6MWcEd64fp2Rh6XZ8WH",
  "key18": "4CNYxXCZQG7h5AmL1ToVNEmeCZdACpFEL3cLwkhueqLajTb78fks4hK56XrqnX2p7TSfay5dM3yREFUxZDtGEJww",
  "key19": "5KJHbsXANRftNgHLbw5KZRHxcBhVcoR4LUyQSNjQ72p9nTNigGEeFs35BKUan6FNpLG7TUgrr7NJQ5nfVjoZfc1F",
  "key20": "4Z8MgfyHfLbMebdGJWXW3tNT7y6YyvPXPASPkEUEQ8UZFZpp2w1hEkDtv7GqeudaHGs8yRRyEs6F26aC2yHaYE1T",
  "key21": "52HDtdF7g9ReUCAcjdR4tPzjEoW7PCXMJPett3jETmwLHQ9cgLopzMeiXwFiEbtKCJjb3F1Q1WM7kqrpuPbWKcNC",
  "key22": "3EswmSYTy5rmU78HTreDYxyczsakCHaeTJYxcofcyYCTyPHqsbyBUaMakXTG6JcVGVJiZ1pXsuFMXqU9UyJKDEtV",
  "key23": "5nUpB2f9DPW3GEuu44H8Ewi8M2fPvVK7N5Wcgc9FoLFiy8NevXvaiVWoW3oRY5atGsRedjQ37HDNzxPpyrNmpB8D",
  "key24": "3mi57RVhSqdLrdSmiKfewB9PxQDH45xYevLTZeDzjPPBoYJdokrxpnf8BWvnrDgKSDnqFD2UYBkw4WHRp4ZSa5Pi",
  "key25": "3eqMThEqXZmS6PHtbsNuMwLZCbP9WGFgmvmLeDNB2dGk84teHViKXJTkxwxQ8m9kLikjEMDVGA2f7mEJLNeBhEho",
  "key26": "62DitZYZS69Rr7EANPwP7uavNKRdMUPbAwuLe99HL2BfkRiu8EmFsJJ9EGrkVnX8Xa6BLvmCyFD4RhwsgNL4wgF",
  "key27": "3PmVykqk3dZq22fuVvn1swu6smVPbaXDFNWajnc1ipZhxWxgFPpBZ8EQLhmf4KdmkEzscA8wroEPbMKDZ7EmtrR6",
  "key28": "YJtwcj34qN6QsndLeiqTjgGZuKG1V5oyU2P51QTB2fzNDrfPqaBy44LM3HGpyLbkjptSWBKtZJEWdBnERaFj3S6",
  "key29": "3HrcHcV1ZvRtcnFbrJFTJNGiG33ckVeifqhfyhiCA7P5RLpc9o7qmz6pakjG4feA9Q7BtuaAGtatu3kPML9UsvYX",
  "key30": "Yrh8qi59dsehcxBecHXVFXZWaBTKzr6A5KWkQEXHzirbahA2MUmsWNYudM618q9xKhw9DUGgm4d68EnfjoXga6Z",
  "key31": "4rdNdnXeUxqe3wP8CkHbwYRX8JVzixbAg7zief8mXJCdqXwnbvhYRrPBi12QaSgyuwTVWuEJsX2ZJMueYtE9WwbX",
  "key32": "2g7BHdmbzACe3bZPrwUkLgmkp7uiLregYcvgajFFZ48qFBVgGu2bEkLY7cwnYsoQsDk2S38r6skzYWUeBhwGCbgB",
  "key33": "5q26UGE1r75G4WKFic2uVrsTcBk1bAyi2uFRHkPy9Yaag8ySRppsFKUQcoqo3oHg4NNurrGoGGDvvCVSPMXyovJe",
  "key34": "zS1Qp4hos6mNKbhnugKDA5HZbusC6fLBczhE3jXuezp9D87eLRhCEbd9EGnJXruVMwUy5F4wA9nyFVV5wauXASw",
  "key35": "4cttWQ9ijN6u3qE6HveQjoavwwHbHFVCfPrETi2bVi99oLRqMAocSGw9RJ4VWYkZzQjF8mSWU52NEgoaBQMpmLtR",
  "key36": "4tD5RBq8x8CyFV3hLBW2yojdaq6gdvYRTqv4YpGrsgiXiPcLSDUFKvmxbxJhvWVSsmgg43aAHztQJqJ49WyvMX4c",
  "key37": "3a2Tp28HHFyp4YuhmHADViAGNkd8PpEqaiWnsPxGdYBYGBFvHRMqUfQigNous48TWn8jxmGf5FDgrw7A2MWH3Y3G",
  "key38": "4YDnwUfd5WNmr1spKSWJdKxh8BA53jC4dkVkWUXqVBU1T1fLSpqvzYUBVJTKgqtYf68BXkgQXDnATg4HFK2dPUcc",
  "key39": "ZFxVb5QDjLtkuN8qJpNrdZLB8JbbrDQMaiMPnPc92jCdJVyxvZe7VKydMGVtKf898MdducPMUV1U2KgbMmK43ph",
  "key40": "2npbqsbjoPuGPriAtR8wiDUsAJaQJfjA889tejbrHJUUAyQmY5TcxNNvzmM3VZzMp3HaS96Usk4tsofF51dy9W6T",
  "key41": "4YBMrQhVDwLTGcX8G8782qV9XpbFifcuY5LAypGzAYXTEXRiPEwbFCufkK1DWaAct97xcikubUpJEWJ9wWH2KtXr"
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
