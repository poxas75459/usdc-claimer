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
    "5aLks6L41fnCygd6bjCi5UFokitgahNgvsoyf4ixi2XajVoTQzJrAJHTRo7BSdNX1VM3D1Zcou6pWWkcBVLMdnie"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Qj1tzscgCGukPqhaSPEX25sb5P7ZonJ7DAequGvtxbs9jLP1vC1kL282XYpvHGNi9eb5Mv7qkqcEp4jF4SzjLoE",
  "key1": "4Pqw5vBsgg4iiiuEZitx1jqrgMRJSQL6EEHtY4opkrzB7cnb8YKK6FcYms8eCFkRTGLypKCBbBCtQB3gJrQhCGSn",
  "key2": "5SBthuQ6UdCvZsUygboB1qWaBNvcEbmVrkB9BeekYAWZKKGc4KPah7FBjwC1mdHh8PneVExw8sAcuijWLNmNZY34",
  "key3": "3cnBYhophLGdgqSr36u2UdMHqcLaKcenvqfxK35eWhrarEFF11LS868dN2Ke4UmLSH8znMfV4qHHbtQomsa56Ajs",
  "key4": "4G92sWaSmoFomQm4fxk7kxQVSxZw5MQqy4fDrEtDshe872kvqLS5TfZ4ENMx2bqB2EfKmkV4ZKx7BLMTMhP2qMRt",
  "key5": "5Ku2FggkyJEdgNk136vLv8UTn8bgy3suS3qNX3yuk9mN1KwyPnX4pj3qBLT2ppEGKcGqn98FZAcY55eno812HLhn",
  "key6": "6pVqzikh6a2qStBxqMFtrNfnx7JxKJiEaaYd3uGQw2WSBMy6yUd7VCVNCyxj4jSm686woChbU9MFFzWWoGUHy3Y",
  "key7": "ZKU64pZYysiaHEi4vdd8L7PEKSMtHFtAaMMYwyfn9NmLe46yb7fH6WWwVFcSgf1QXUUQ2duCFELq2fZgPzcZjDE",
  "key8": "3KZKYa2THQVc7Kj4G1YBc4rTLU6XDVBqYuSU57haQeUfhHy47n96So7PgMQHSAtjLTzmWo6wcv2mYkJTwj4M2qxW",
  "key9": "fUNjr8u2gwaCFCaph6Xihy9R6h13XoUnK5V3JLHYTuRVQs1Fq2kQWQaYD5ovdMchfXn7BwNq9HQ72DxdTNf4VEK",
  "key10": "3MU1qewiqYdcq5gAbXD7XuJ3qnrdzZBEdXzniUdqgNWJVv2vy5sW4crP7mHanHHGQXQonhj8oJQFwkbjEwhT8tNL",
  "key11": "oeZyjL25u9r9W3Yyk6JXYwzEwGSrx7ZdVn2aPJJDfBRXBsdrWcBniNStg3zV3XvtnpNc8n7AcRfUK69axC8YTkE",
  "key12": "5d9kyjKPeFEj5L2LcRAivW6yiXvexRkfiCPVycABNAxDpKTWr7sMLiwRAKhwCzdk4uPfL8qaBaJ1hJ9uVJ8ZcSGv",
  "key13": "4D2okxWuonxVBStLACMRiqYQNAXtPqkVJYmSqZG98aYPxf2aQH1EPwpWcw47wpS9CK5oyG85GPhgVtsDDanmDNWZ",
  "key14": "4xct3fo8VXA3q5gEtfLB5E7VnPs9kv1zME3oDXy5FLoTMQMzBozuVC3uVXHHxmm3ZRTHXPda68kY7vT1wnoWCF79",
  "key15": "42pJXnuuorP3WKuMuqZ8uZwcKwFL8zTeA98HTwG7DsSuE4A1cjbuP36utgPQWhhCsfXBAor4teJxB42DXJswDhtC",
  "key16": "5ass3ZWuAdu3HTmrxa6hh2Trz46RUVfJXt7B9fYqfcdcmYYeZtDkzSKFXeuec5V23zhLCFDHZdfqLSSwH3XHNCsF",
  "key17": "3GT7ySWu6bwq3oYN6YMxHHyB7N2UVkbTiYvV6j2ZHQd6vdspQL4AYc3wDd87w8vWL3Bngk8bjphSaQYpyup21Tr",
  "key18": "2KpqxA4QyhFBisb3txbYDX4GDzeQxNCvdvJZ5gnLpsGmHgHEyXym2gKMuVK6U5Uvs8Bq3YbAqi8cjuXn4LxpzvWA",
  "key19": "4A8ZQehVdeKodmp1tLHD6wxmnqatxcdJX2DEfpSkWpnGrmqHmJBd273RwzRddWNoiotMnsg6hi2yDG4UxP1cLEGx",
  "key20": "2eTbsCuLrfLDSSGYAG8Zxp56vKpuRBMEz7Qp9zgvULqHcMu94c8rZfLzc2kAxeUXGi5AQ8Q7amoPRwh58pX1JnG9",
  "key21": "3EokipLEauVPLrxoJF56tNR6CqqPkdhkcMD9Vv2CCHjZ3HShwbYKVP9DdDK8NpKtsVUxzAKhCBuay5iEqk9kaNKX",
  "key22": "2By1A8snEAjwY2cCQgRffKq3iSr1ueyqYWojbhvFFdydoNn43hSXkJRewBqZU9K9wJY4rDpuLwfpGtk15NhAPeXY",
  "key23": "3Kx1dSiqrV3LuqT6Npuhxeia1c7NGaHpFEef4GCVLobyVBFsdPYDu7dNDSmFPiUhmNKtAxEwTJ7dEn1kGvhTJe7k",
  "key24": "2zyQ6o35hfmF3qshfcLWVNo4Bt4xMETzPhuEGMg1PEv7hck29RTxRx2CypjgHrcw99yLKbwwYuPzFc8JMD2g7J5X",
  "key25": "LARcUWsaxdDD6EEtTfgDkyECs9GQUwNUTbMxQrvAbHDoqq8HCGhiVRjWHC7RiydzFZr4FqAMeDEb5TTUE9orK3R"
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
