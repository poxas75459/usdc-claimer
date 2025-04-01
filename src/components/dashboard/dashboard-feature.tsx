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
    "etp9QxqY8vuL63Az5kbntKiwrVwEFnc6ghtQRe8tuxc2A12ipCMQVuCd9ktgTSv1FjRTQynuARggcKXCeNQLQhY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tK1259vkgDQocLk6VsVZSZNZFvDRxBjVK1YxHzcwUEZZxjyB9hstuH8TUDDTy14RUr9FyTH9HpNVmnTYX91EmQM",
  "key1": "418ZzQhcUYjPX8WzFZTpPWHKSEFBtUzcLTsU7jqb9veAt18wbL28Puw8DPb7Ko9KxGQ99RjfLSnxSx2n5bPCRreY",
  "key2": "3T1sS6DuD9MJHZXir5buMwCMaVTrtZQJB5aEycc99dGnqQo2v5eBYwztktaW2yLhwFjU64gk1jBZ8DuUPijrXc5p",
  "key3": "2PvmAXHvkMtwkcsJ9We68r5FEWiBAFEkbesvBkwgANDkzR6i5JAjP9PNyFLxphsojM9LWCCjBr6xVNVA6oSVYj4c",
  "key4": "4siMQcuPJeXTs5huc9UCqAUHXRjJoCHH3tX8Xv3PYtEyvKy85mGuqE6NGt2pGM9Kj7exe7taPS3kh5fWxGUg86Eb",
  "key5": "28Fw3GDVCqqVuZ4jqscSUFj9PZwKybMRiSeQu5er7q19m8cDbcCDMrFoiPczNiov4TB663JdtTTZZqNLvoqcJUVs",
  "key6": "8owMu5Z5rAe53n3WBGv9q8517QQDGcUe12X68jy6xtzhH7QhLtoCiLCWLtxLpBKwLWz6QAqpAsFBafkPN2kbvxj",
  "key7": "Kov2qiZm6aiyxy3j8223TesXmyZA1a4XX1dFWmDJPMSASGD5AV6MCqpc5TaaF8tbqx8VKJaYtdaUz7qahUFBKYD",
  "key8": "f9hQhRnJtuuFJBqTrboNhGbyiwrtAxa3R952ypsvQ9nrzkCAngJdy4LAyNB6dMH8i3pke3ch86iGFzV3nsBvLtr",
  "key9": "3Tkgu7w4b2v7GrPVb699CKon93JG8bvPtoFeP5hEQ4rToD249iVB9e555VXf8zifrp2e7zFa64YN7nyLuBAd8GcS",
  "key10": "2pVkRuGJ2PAdABgRiPpKhT2i6w87AD6PPXSr64h8obiaAcUZppfqSkqdDNLh4kLuTKatqiofDwjZiKwMZ2TePp4J",
  "key11": "wgLR1KGwKxvT95t83hJPvSQYcC9b2oWraqgmAj7ijXG26ojyCYjpz3N5VnEcD7unt1aJXhsrGF22epZ56tEnXdD",
  "key12": "54Tqg2J8hvUw63TgiwABUArZx9xHz5Snehx7Coi639y9caX164qf1rNQ8AP85ouFMTs2VzVkp2GzFXbMBHVkSRft",
  "key13": "5GYVutv9Pu2eR4ujif3Z3QRzzcnvyHtin2Em2vSM9aXcDQVpNrbLkbduuY2ZVqPUXNoJVBneuf4Nzzbpregp6WX3",
  "key14": "2T2PiVZaB96ZUvYNofunJRmZQvibkXmmmjx28AupnBmJzXpX1pigs8N39wW4wccJPeFarNVzHiUEqwLJvgUtjm8i",
  "key15": "2UCksYfkhNFnQ7zqo66JhAv4QK1XDhvv7RLXBLW6FNQYx5pJ28i4McXoADxmn2QAhVRZKjpf6Em6vWnL7wWTZnzs",
  "key16": "24zs7KLG4bdHMJ8bsT3Jn7RSBSXEaFwgz21kr6mDpMMxUGtv7qNDVuW5QL74Nv9XjpCVzPYUE65LfobrRwojKVp2",
  "key17": "2gkubfXT7toWWhmPf6ks9SrtUoMahpkCrSKf5naWS5dLMzGyeUYvjuXwAKT3oWc3VPpZFu3VdAoYuyGTkp3Rytt2",
  "key18": "5yVanPxAmUjdgw6gQSBXpiZPcDWbpUkxxEVBCThxYkkV7w5X9id5dZRzrkSNZZ3owde7jwfZwU7yC4AGGiQ51KdY",
  "key19": "5tQGDXneWuDbGscNUCWBMYkC4BPKaNtWsDzc7BHRq32sHckFGq7TRLvkiMhY6VuJnDbMUepbiXYCjyDs44pZxi35",
  "key20": "4wA2YJa2in8JdSVWzU2YpWznNTdxmAGMTUi7QHEsyGXx2UZ8W9RpWGeHy2TzLA4iPES4nTKgbdpp6xACSdT8GLdM",
  "key21": "62xwXkGvNdqZggMPYdVgqgP2QXs57KKwBTgJRE3vqybtgGF8MFNjU7pjv9yyHVRszzZMTsYEdeGGShy3qo88i9Mn",
  "key22": "53LWUxR3h6UffopmwkN79L8sHWUxDkgA7faVNzVGspzTdhoJjSubXCaBi28pm7ns5zUiggnZwJHA3Yr1qFpsrZwo",
  "key23": "KVmsw8VgDGzdu3EeBVfk68n49MTUgweCZN3FhDcmbdVx8chmvfLthm6ZbCNmvZU1ektBMJGw6jufE1pysbgvDX4",
  "key24": "4JFQZrLefzp8vzgvKaZfcAspwYcwc3xLkjrRF8QHm1Q6t2x223JLy2LSBtk9RavtDxYyDEsfeq8bAnnXn3EaNCWt",
  "key25": "2WyX9b4yvA3X6rtFp5uphjXPxc8ZawB6Qec6KKmkhXzGYXpgbyyiwJMQxYmpi4vJxJZVHxVLuyAdM6qo8n4AUty4"
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
