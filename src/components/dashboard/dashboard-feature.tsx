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
    "3hm3CCwNspX5LApfEWz4Eng5adkYHxotmxr9ienwduuMqokHfdZ1HDVbdsdaykYUW9hA2dBpFJ9w79EmcKbgFXLg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47NimidRYHMKkHCuLsR4wfytbBpMdYrJE8mf2DpAtZQYiyeymv6e4VCC7HKf5gG43fXhvsEewBANQ8PniRwUK7ND",
  "key1": "HjXTrzT8anNYQZrusTqj8xUURgGvJZaHWMo7atqUKjFUZbXSQDzkYGFf8nNa6bStKdLRVwvAt1iteqwyBpvEpse",
  "key2": "2SMRSsCmGBaouE8SKHhiav2uRwYpW9TaAKLbxmAZTu9ce727gmJvkBzGJ6dpME8S5uPkoKHZMQoD3qmpuB6YvvGx",
  "key3": "3CwYgj2S5ySgUEpDXTHbkPEqycPnJgd4HawR3DKj7MJ7LKaKnZ7oBJfEvR4whjxdicawmgj15R3msmcQA6FiUMa1",
  "key4": "3mTrMAPTeyj6LH1F1LMW3yK5PhoZXD1SH1Vw7rgnCaU3iKS1EVmVK94wKswqGXvjWXXH7AbZ2kU4snc1WsKbr8iv",
  "key5": "2eQVD1QhSU3sdyppfSoFtENYpqTkryPoTxQz67ddEY7Ksgn3aZJdPDmwTn7fdugS4CSThBxJi3XDnjPzhRNUvyxc",
  "key6": "3Y97DAh2834AVBzQqggoMZ1a34bYhrnbVUpEwTy5ScxpNmvr7kWa4qgHZ6G6JDvCcbeRvkNCgjgRYRwzdGgEjWk2",
  "key7": "49kGtik8uzKJsw98nDFEmy3PfcqWq7wR529NrKAHgQRouBXDEm6Jae8NTcotgFBencFGoah4wmtVcPxowtKbUqo9",
  "key8": "5Y2XeM19sZfPfLKXFabPt9BVPAAa5NQsLmy8Urkxt2vnevVDRw7L1cNvcUzAaguDFs5CYK44z3LyDgmweZBstkxd",
  "key9": "2ZdN5FiVj3GMkpFCfsAD4wiEEhuJUY6kfuCxvQmjSBijywf23R7Sx1Qvcj9pxz2n8ozfaMPQ3ctTUnMH1sU9mVQs",
  "key10": "5Fx2y72nQLscaV6oaBFQMgY7GApRhBg6yBdPQmMv2ggFgm9eacamuyvbnKpJzyGTd78wgdAqqNku89mR72zsuGXr",
  "key11": "FbficzSFoiBSesB4BHxFHBhPLAgceKRaroeLm3XPAiCL7DQ7zcV7yK1XriKEP3sGazLQBMhZHprR3VftNCpX5Tm",
  "key12": "RsvR6FquVPoN5N1Aw8wjHbyBSYP9qXRXBHKdUX4Yg4qgXa9eFopFqWFzozn8vcij9XLpwU9iTNy8YnLGbGHDavJ",
  "key13": "35CEnYSUp6bmdnQDu8wjAtiymPSBstyEyKCNWqrEd16GEyxDM3veJyKTcjUy7UchSy3mhjj3s3dgLGHAEd595nmK",
  "key14": "2PgF4xmB5JkCnSDt1kft5VxhJ4YrgAGpsMfTfj1wp9KpXTwVCErGXG5BC7BcasFcmQH4wcw9XSrRP2dRXGqG2BFZ",
  "key15": "4SFsDm6sRcBCyyZHm9tpBouDDsdG2xTQuLypuCadNqyUEJVsFi9Hm9B4uBpVp4W2R9tzZZcSQXjpvCoH2xQ4Z97q",
  "key16": "3ZgTfH9v55JAAGC3owor7bUuuUnBrKtH3rXNdH571u9W7WDK7vzx7AGJRg6xtDuYggxeDg9Xeam78du1cqukgC1W",
  "key17": "2frtsct4sCgTR4hwk4zu8TPAcSXynx7FqUxXMZQ4kgiWTLkfmUxzoncTpzXrTsRLYruUTZPYSHQqUGyfNWjWWUen",
  "key18": "26c8qnRoKawmoti88VwipoH33bAswrSc1S9GeYkM9yLTU6dfPZjhTjssP7UUR5Xvrv3s3FeoqphwkrK6XTdqHGia",
  "key19": "4L1HHQLwv1AZudrRRvR5ojN4YVNjAjyUsYiqaLYSYQXyM4fpAuKE4eJCoBb3R383L2XSjjHzeG7QmFTTrKxEW2e7",
  "key20": "41AGjNmYoZTGwgTdqXGqew2ri4NZ1bgihaw1x3cbwy4Jz7GUeZab6WS8VizmyFY8FHeHgk62mUuWzatGY6FXj11C",
  "key21": "35QdDEce53suD7uY7abrQPxm4JH118SksWoc6WU8VvrqK4YbAgx7VngEQ94LSD68ymcwgrx1Y6D9HBtMznhEi3MQ",
  "key22": "4bCSVzbM2dt6mk6drPHcCyet1gxkDywHv42HYkRbP3jYqW9WyvoEkYZL8qKpzoWoHkReXjNbtPhWGqXYRaJHg6ou",
  "key23": "58DbAhPVtqQdA3fNGpm4vuv1TQCjtusPu3zu4ZU4VeQf5XAfFZNhHB9f83MXbmrQFSNFFQYQJcCNBaFifEgdYUyK",
  "key24": "4RtZhLU8ni6RMqXV8Qp1nZASsPXDqjdDDTapP22orHqJWiGBi8tZPiWQD4Q1zE7fZgM594rAM7AzCTW5D2UAxdAQ",
  "key25": "3BZSU5wiVpfYAA5auL7AAbceojfhHGvtuM4YoNXyziTmDmLRxWh44VEEkJ6yA1MN8RNkwqPFSFUUAKpaVB64L4bj",
  "key26": "4bkE51GqNPWvsLXcoypBNP63pQ9FKD6XBGiRxWDFu99niFqUhvRo6jwSjrErbVGtGzqMfqAfecLRzeU938uFovpe",
  "key27": "rNBZEyq4StCbJZuseTDS2kncvcsXLwMJpKa1m1R3PBm3kcFf1JUvhdkgu3X81thFDtaMfiCcJsutCs86g2egMjw",
  "key28": "5aAXggZiwnbyoTn2QDDM18QfC6BiLThJ2nMtR5rwH4FHBQFWYvUmLFMT3N9DSVr1Pyyk2RBWHgJvmreuipdawHVq",
  "key29": "4MYaroipnB6UxUbUbadAMyUk87GeWPPKZtxFDDWHvp4Y2ew8uQs7Xvu2PNJRQ9FKdfT1BdvYi7ZEYnbppAAPKet6",
  "key30": "2jzHwQjvLsY612YQjx2fYQb6njiYrrhvK2rfH8DdJAUKJySzD2aoE52FSuFrdS7DqrtyU9CxB1m4JQcLAaD227Gy",
  "key31": "5T8LKdNkRwRjqMTYn2u7jgwBxS18YRvWcJJfzccSr9gws7kCVVmQdCoPqSKtco9SEKZjh2dxEFX3U7rzoKDUNCF2",
  "key32": "sabAQx1sThDxYGUrMFEei4sdma3447LMWy7WT3hTGqe8BCh7mAr23Cj6g9ExhsbjMuZ8ruHvxGWx9am6xff9BU7",
  "key33": "KnE1hM6tBvymGCX6N2nSUrFDw38832KxiLKWWc4RHMigi1Az1Pjg3r5hQjJAsUkTqiBJkwtRKpneudd1CFodYwz",
  "key34": "4yp7tSPY6qhpAFHNDVW58fCRz4cCtLQVnEfhf11sNPYmKqFUet6yJAW4xjRnpm2RVfHpuBYNNpjLdAstF4WN5cw2",
  "key35": "2vgh4HviEsiqpDsb9DMiW1vBJexAkoymP2bqwtJxFYzJYD4UY25PNbk2FGncjM1QAkWJKJUcceaAUHpoLBibttaw",
  "key36": "27v5rKCig7Qu45WFWGMkoHL58p4TZoRMzo36Lya24ZCCgtULVpyvXq11YmV2VRV5jTgna8djfcpkG1eJ4b9g6rPD",
  "key37": "58pSaxAUw29iZm5RJ1ycCBPqBvdaFsMJ5t16SUMqFdcBd18dibkhMK43P9Eoi9UU4NfuEuGgKT9qpRBgFkXNFeqC",
  "key38": "3BTndCWkkJFfoKh9ZaiGSf4bQ5TtBeFYRkXWHS53t5xvhXxgP97wpvmonKTPFFyUQEAVYVvLC89hQXF1g41RCbUP",
  "key39": "2vmDMyenZQd8en4fYDZJkrmpVXwaXALXwfNnG3rTZsS1VTV8LV3tRJWjS9QrmFXdsjBMJVih1pAgckGxPXwEL857",
  "key40": "48j8ZwySCUpGFTECszzcLAsVHppqw4VQ6u9xrgTLLS7gVFjwdHmxTzNVMrSK34WuthqE8xfMpRh9nW9r6QGWtnqb",
  "key41": "4Muh6MLVA58Kia9UJ5GGijphLysuzPCLSASpd681id5F5VxGb6MKhYkn43pca1CkjzhXUN8ivA6VaE3reCXuhdR2",
  "key42": "2jmpyCXgu61xnuBB8cC4puU3xJgSNZaSbXHonZPyGYdkP2hHb5TTG8FMnN4r8hM7rKXXs4U8roPJuNvDhXLGqRhc",
  "key43": "4fccsNrjueFjyZE52mhi4U5HyNgrNknKJTtsD2mDoytk2YpZPfaTh9eDYMhyGXkYTquozN7iUtvqbEfwoRSBvgc6",
  "key44": "3411ZZRnL2gh3HZLCAhv4tTBH7jqQiGf6JxEBgpUtRYde3YBgMUeQHomkewkh8mEfm3QgiCkdiKpxj7G5jwjMcSa",
  "key45": "381n6TweM6vPZPEyeD8Rx6Zj49s3FqEAHdQJrfitRmiMtdjXmCyG7wNjv4ukQ47mHtNx9zvzBaKGVGqAcJcz3Tet",
  "key46": "2AVGHGMGDJtxWRszLLkG8tn6ckGy9K21KRL8pcNdL1hVkNkR4de14efNMwLipDZSqpfzR5XVHvJxs2QxLEe8KVRG"
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
