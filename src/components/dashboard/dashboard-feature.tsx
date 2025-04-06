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
    "3heayg2Q77mJJJ4EYbPf2JB4UvDhTXEkQkNGKRAM2ABfEh1Q4ymfh5Af3fnch1Pkhtaxu2Vcm3dfpZkk4uVfY1i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6UkQLhr5CPXf7J6DN7ph6bCXW7vdEY3ZLuka6R7UEboLLCWzjdEC6c9FQH4WazaA5YBH43QEffBHFf7N9ziqahi",
  "key1": "3UCF1gEMZgx6wiLQEZkcA7iEBodp3qXP2iws3caCpub9EcqppSiJmKkTgWuJwYXpqGvTd87uDCuaAK3EnkKUJzXC",
  "key2": "3gVqwxrWuZoVzvf9UfZoh85v1HRuE6A5Y1JQA6XDi6eY1vyXHePeJZxaTudrASjtmn2s5jq5UybPrVDu4Ragt3UE",
  "key3": "2C7CDU2kmneCXUpfRaFFQ4NpRAm53Mi3FHAacbzUSXR7Rb9XAo81T7xa4F6hkVotziCrkDW4xHHSMeRv2Vvwt3WA",
  "key4": "1dyJdNgDNJWBN2SjJPCSaaw5bmbUjLCuP1BUkrxLku2ZxiBqrrJCoYiQVNKg3idCzHEvQFNCDfE4R8EVbbw71DR",
  "key5": "TNnnj7jASU6gZrq6HkJWoM8bXtW4XuH8rZ1nfWnRbqLhaZnZf91N9u8oMQv9Cspi1ozM4eCN5eE8bL7zFEu96pw",
  "key6": "5yRqH5Jx4AG5fP9p1rFDysQPji46YRRdgWzAG4JiXq7ugDdaZbNjdxeNKQN9oyzvQSPcmGbc2A95d2HU6aH3KPJo",
  "key7": "3xsqiXB65VRdb2TCxp64qrMzUKQsFVvhRoBrxezp9DXh2Vtwjd2UGij1JL4H39PGGGVWjkEf1uxGcfsLDz3pjJjt",
  "key8": "5FD2Vy4kMQ8N7Ep51YMqYiWQQropi5kWsFyJZVhybtqJV4BUBSM8ipEy9MoSGCLAiD2syMh3QwnDGG4Lr2igucSY",
  "key9": "4vqUDbMfth4eG9fWQ1mTH4rZG82sSCW39eZk1G8487KoZQzaBKtqMahtMZps4CR29yJmBrxBZAWfbMAbjDdZ8ePz",
  "key10": "WpKs1xh2EXsHMHNU6ZWuy1vDJf312R6ZVaRdkWUpTPf28UtDNrccnR5PN2uUq2CZUoeXKcXj932qiF5vBt4Fm9U",
  "key11": "5V3wdBGPA1f6Cf9HVJNso12XRMKmvpSFBeLRv8cgDBa8iG32ePtrAT7QHEM7tcYHgFfbBDPsqgwn5qyB9td6JBNT",
  "key12": "QhCXbhvUVf3WhF3aSEmoJ5gkPAsYJxEdcCMWSp7K2MtrVdqijXYoVp5bBA2sWfLrknEGRTudSvNaqN2q5mmg5je",
  "key13": "3PafnfDca4QBpsUsc1yvqYJKg3TrybgztyTn695MT1QsaRydQDyihiKiszQGJk9DVFTdPnfXUFCoTRoxiNbm9rDG",
  "key14": "63rt4oSjFqnZkhfYawixnsQ9rJaAfhjBxuLLmHBiCvTqkKohLHAEWzggBtWrYtas3zJ1maPv1m7qs1mDXTCxLFwd",
  "key15": "3ZeyT6KtC6wR9svzFayyiBoBpyj29utXRru1NPVsq2oHqdVscB2UHuXdHkBuZHDn2R3Z5353KqQWgayge7EQHd4m",
  "key16": "5VAQn8QV1XDSbP9ZLzMUcjTXr1pTjBuhhwX5qoeaMgA2iHXSp2GR39ctfcq71eTS5poVdeu88tcJfDPe9LoTsT3n",
  "key17": "4CAm3KD72UAE2rNjQ76PE2auneBGDsM22cBuX2nLK7MWqRn9srg2z2ba5CvuJvH5nzWgyw4RXV9XibgBBmHk3VgK",
  "key18": "4DaMw5tkXDFrZqkHSVhfPQdpQmhzHkgnLoKCMwgrYfXXKNbJ9D6TLjiRTa5rysUT5Ct8va35JGEDsveZvJpbdMgV",
  "key19": "ySASBwtnxsPjYNYS3Vr7yBwkMFRW1motdyh24p2FjTGEai9Ey3yacidffA5TtAv4niffpsKDLZMFE48nd4S8UeB",
  "key20": "5P4bPTNMN9mqVahRrFpmvmCUV1EnpcrtTSATeVfRTkHKQw4e8EMs7ES8VFjvGyH6mSNB7fFU9mT7DbefBAgP3KWJ",
  "key21": "4tL5ReZtC1Ns3ByEKbzbugP2Xt6HZmBQEaEViCc2tBfjMXawmkMmuvuRbHXKbEWJEQpmifdcCCNDn9GKsPxugAKi",
  "key22": "5u8DgfUue4vKxsEc4ufopQCntKgmpwihdNsFK68tBAdxuU5g5qFM9cBAhfxa7eduoEztCdPjvz2aHEYtr7vNApNQ",
  "key23": "2i6Vo7S5yFCtBt4zS8BzTB6HjQWy9FkTw1mEyvPLvGcBtUnMYqzUiLqGrHPLsjrR1N3BfZeQG6axVUjTp2pSiXes",
  "key24": "2dPRtN29JYxLPoApzrVRhW3S3so7bN6B8MAxvPYqty3VkaXA44ZAQVULUfF8x17e1Te5MRo7d5br85pnKHmtLa5n",
  "key25": "34RbXnDY98boJzMbADWnXpHMHqjxk7p5TrkUDcSuqdeAEW3ahGNuuSrEYo3mc1K93UShrDD4Eu4Xsebkc2de67rz",
  "key26": "2t89LrKyH79MEesqDiYaeBJLFYSF4gG4F46RuXW358yaAQffGf8SmneSquvvh5KPiNfhy2vrFRMLa1mNrtykJ5Wz",
  "key27": "44MWieh1is1J5TLcxdqxPJowrjjkeKsMQUdTdxQFzAUp1DgkXn6wdrRhptSRvb9nBWhy7sLhopwFryR41mjhu8Cr",
  "key28": "HoNecN6PFtaB9YAG9xmmaykak8htAiE7tJm9wL8eEmSnfacLmXLq482xWnGCVsmgyRKX2V4TLnkToiXKF8CCdg2",
  "key29": "5dDo6yDm8bzsftBgBeXH3sSMSMbRY6aNebgM3TU6EMaWT1P4feCZ3f5RCS7qWuRZ73GUHxF1Dq9KiY6ADa9ssiTL",
  "key30": "5cbENVRg5Gb6ANW7PwxizdL7QPUkTu1pvmNiAERVk1Shfgmc2uZsTqiPLSnsGc4zaw9CFmC9j26cUHFKnqWWhJtg",
  "key31": "mG1pSxHFJyAES5NNS9DuXF5o8m36BUHcnAYEmdHRRmfckv2JoVXJkAZh5F8C3NAeosXrcRTmJqS7cdAyXajuSws",
  "key32": "KowKTRkuz19FffxV1wViEuaXM8uc1nhF4KZdfa4f7qc4uq9bu4H2QqGBoze3b63VM6E7a7vXHN7rAovWGuWf6RX",
  "key33": "4q6w69R8ik2XiUAwyrFAvpRnUdofVF1K9AYg9NrjcPbPsr5t5uPCCRUq2jBwohZZejJmkEAn6nTXfBfv9QGesERr",
  "key34": "3w3fhwj9ZQPAVuhFUa5CFBQEfjkwwz8a3ymyhvYsXcGEgB76pbf6EnKv4UtqUrpkRsRRaPrC6gzxNKBLx7nkh8qb",
  "key35": "64byCYrjDA7BskjgqfteX7qbpNJPG1bLn3JQSQ9kw5kZqaQrmwdUBqfkTaiZUmZ2akMurZ2fLPxYDNNebLWUmui5",
  "key36": "5F85wUNuyBzsKRDcEJuNK3f3DcfXN23fLRKjPKqVt5fDM5exKS5xYsN6NkrFUBoKxg4gAbQ2qUxFnULLcdwcqFM8",
  "key37": "2Wz6dd7AFTUBjP6RzZUmeNYa9gn8fsmB76p4xUQkQ9A4ewXSvy2TrJTVurS6RthB1qEHtiGNAAnHV4gPSLVp32B7",
  "key38": "3QUTR8Qm7ZkKpPLvhVivc9bwniEBWPHFgDeDFWkU5Tv8NiSxjRQJC7CXLAp72HAz286n7HQ1mKhVn4zF5DL7JEUp",
  "key39": "4xPHgBoDSqkPhnwMn5WtVV8sTC8DKncJmVjkw12bV4twYeaxidqqFjUbr3qU9Ad41CyVBgFaXQT24r7QxEQSPnkP",
  "key40": "P7mMvejsRpNnPUmEV9zEG1cx8ts6p3a4rWnYMttuVYP9cUBrnsbTCGfP7dUVbVBY2e62DvtXpZmqNxtymmgsptw"
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
