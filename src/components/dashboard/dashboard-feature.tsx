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
    "fuzcSJoLxx6MtoF1wqQ461Y6tfQ72WuX3Fb2QpLYLU1wb85JsPJSxXqnYjADXjiYn1pUgLH4ocmGa2DesEx3Red"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zAvCH1JYZNJeLAgJCWkNmYXuxx4fHmETBcDb5KHVdZi7fUth8it4ni86AfL3HX6bncgrbb4hqqb1Q4jvS9AY1N1",
  "key1": "3JRNTbb6atpLyFDDNFHq3UeLS4rQJsToAZ7EgtGT4U3TBG8BfsyVMiwrt41aPPa4Jzqfi4MCvwofgHB3fPveFMhD",
  "key2": "5KnTCGrsgcsVgspnWLYXiTHtGqFjERVgBBtzwnrHVVaYuhyiCaK1GPmZuHVQKoLaqVBx7GTA9RBYeE63aafR7GHc",
  "key3": "4fCrNRHPsbaTE2iZeYYzFDFCPpvtqwL3DF7Cs6RqZaTFmdZ1c6ZXiFi9ZvMRSedZpxFkdYrFELj2dU3fLrTYFs5H",
  "key4": "4wW3SvGNCSb5sYfMaTGLumkzLH713WdUonRZLLgQVRgbaHzZrfC2WALHYZepDZdaQL1ZEJP6RuARtzxTWnMtbQrY",
  "key5": "59vnMZHmgn7vZo7RwRfZzEqtkRvoEtYTPhhE1VZALuAHYtqJLFiE3GrCs2VRemByK2VL9vHFsoGA14U2swwzfXPo",
  "key6": "5jRFsHLgGCdCyhGxA3HoaGqHugksyumckAG4HehfCtyMbp6eeFJuBQstDgVzrecRbDEK3tR4wXheWtGyPVcrZSPW",
  "key7": "4Tc37kUnaREkWgx7QaqS6Tjf6Gybmn9k6yPmeQN1Nw1oimZHZT2iie8i6hN4pVwUriNXXBdUyQckTmbRsx7V6dCV",
  "key8": "LB6bDaB7coW5JYHYHsEBitaUjiQ4gfvfE9wn8nG9XMPGG6YHcfsoAyxdVKHZjERUX4cSiseyzYCSBsBSi9ULEMg",
  "key9": "45DLC2bkPBaSHoweiGt6vpGzM6fxjHsgyv3qr8QTuGiVneXLBRMRAE5PormzSWxbX36pf2fkxGUmGhMPYmAd6N11",
  "key10": "dSyvXYjDpahNEJmYhmEABYnGbGAjhsv5jbeWGkPoK7N9BKpotDbRVwNJE5tFPWxueHmF4L4KPFNEMrDQ4bgJNT7",
  "key11": "5TJ1AuGmFiHvYtXRb43j1ZMQAmTnGPdb15rxF4nNwysMTDhifUgd5gcoV9tAF1TUphjWUfoMLvhqSYqwV1pkBPne",
  "key12": "21mZiN69FvNbGq5jRD8w46Jv7qx4SSqYrmMT9nWb1Mpqj3c5KVvW3YevNE6vZdTC7Df7y2RgHkifZfayqCq3EUAu",
  "key13": "3ueeG8vX2XYqiSDDAcjsKjSkiDn6ycY1FM9p1LBfxdi3bRFrDNr7ZrJgjLnRmjch6oKC5Z86mENbtm3k8oswWRNu",
  "key14": "VGBGqp1PM6omkmuuPAqJfDHAN9ov2mQ3BbU73wsW76mnKSgFGuf3aL9Yeuf33vPnfc4m6MyPVyGmahQsmWv1N7s",
  "key15": "3qucXSqaZBdt6arrPnwrNin33LB8eYCnhFhvQQ8DujAMHWWCviuUGeHEn2qMxVQUotejffAEgYNCfQ4AFjHmtVto",
  "key16": "UUxXfrFUf7Ks5UNgBYetpGjD7sdnLR7n33VzG1UhCB1jAskiDqqyfQck4DWC148Uz3f1VAeWacfM9N2hY9Bqn5K",
  "key17": "PTKUSouxCE1nUoR2Qt1e4DcPaApuVY9FeSw5NXNABpiauzUdpNmHhaXFxaAcU4c99hVtEadZF5fdG7vmPXgYZvD",
  "key18": "2uArd8GKWKGUnXhVx7e87UvNNDnEnEovsGtkiCrPvCtQxemakSPKjeohaMoTePUYR6tQXvLKsdKEqGhPqsqhMprA",
  "key19": "4sGC78J4RT7GbnT6Tt5qcTTQHwnSaCi37fWAxLyYpuPkZ5cwwU4zpGgu8UKKfgcGDmX4K5NAYFbDMGQtRCsuvFmw",
  "key20": "3mCDPhAaiCnprDjbppVk3XuQUH8T1ir5njEnu5raRuqFHCADoFGWqc9MWHz4SMcVV4QVmhEJYjGH89NgHXFpUBVs",
  "key21": "3oJYfQgREyweyP1YHyTPFJFwgeg7KhBeQojnRRSbsjczQvMehuvae52NgahkcPa34Nbg9f7QqnYL3KzbkGj2eUQw",
  "key22": "2UiY4CkxvvX49wXufBgff6xA2316tHJkkyZXiLXv4NmBDTuGKxijZgBnBNmhVMox8KiE2tQXLnmkeCfAMnwaNZNh",
  "key23": "7PqvZ8J4FkZAoZQ5MxmvTrdRtxuNYLfFnycpbZmmAfnwvN311S9eCNaL3fgGzwgND8y3thkYwZu3xvjGXGKd9AL",
  "key24": "3QaPm6RqeHwzMM42SS24qJfb62Tt6LQ2BFgu7a3V1hYLq5KqnnawWBv5M9vuwYpj1CNFSXWvSs1zwXCJN23BD3im",
  "key25": "3yf8n6CBqA5G2hRKaCu4GLnuyzpYm4KkU9HKNescwYVvYx3AGXTHSbLh7Z1UiZGo3vR6gSuxFyV2EhmkK2D23Jwt",
  "key26": "21XQakcrTLgmj4zsZgZnqx8xM8MmDSZCy82TkkGuohizQ3TPFkm9RQZxf3hP8AjDv41qiqWakRcH1eJ3BS7EECQf"
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
