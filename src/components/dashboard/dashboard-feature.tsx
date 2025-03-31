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
    "3niVnXHLdZjxggWGKSVFaqgC8cnuDsHG7GX27UyM9ovx2HK7118p4p1XUcbfK7Fyn7DfcWnH6x4bMuvN1PcPbfya"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58S1DAFB64PxsNuQEBwEJzR73s1X95BfihoYwzCLc2ohchP61LDVhnwppjT2sGTyeFiUVuzDxP3B9TJbcUyyyxXr",
  "key1": "zDRAm6TJ4dGXvcadY6krAjkjrkJ7sVJ8Pb93KUi9fQ3dgL66tgBPMpXXoCLm2fmreX3P2EXnEBzDv1nbWck6t49",
  "key2": "2ZxidUGKZ9xuKDcmvdvstdTEA8QFsEAEs4LEDZiBQcWvyKT42exKPBcxTMUF8Y2mbdmfLp8XDi9qYkv3C68okGvr",
  "key3": "5v6HgK8DFnwrWc7XP4ppo3bReDCvXnDWHNroZLSLQg6geQviMyvS9M3bqkXpZJuxpykvRSUjtdnLsDWDUVq3mXE2",
  "key4": "2fWescX8ziv9zfRhUXsAn36HrtucMHmPZ3Zto8NXDL9gQYXpCSN2afZ8xMjzR4f1HihntYMftyE1Rjf6u27qQmVi",
  "key5": "5GVnv9AVvEZmrf5fRhyPx3k9ygSFVyaqsgprDh3LdAyhvLSU9WEXhWBYtETuyYt71hPkUaUEQB5LqEzSbMDVHapR",
  "key6": "3QW5aV7UsAT7PrcmXKiivxprFUzUsKY9YjAjuCwJp1M5NhBEntwfm8SPPBZVBhm7H88RxQiVUHN4VEb88ct6qGp6",
  "key7": "Un2cbEaUkqkjzHkQyNPLY2zg18M1FUSDtcNdoJC1Y9SdAbRLzyUaTWQgQBkR9mrbbahBayoGEcv2B6FqMfeUni5",
  "key8": "63tt1cYGiTBGpGzKRCEWmEfBZgbrQQVQ5deQj77bb7Kv4wmKNVvJ9P3YN3J57V72kLMxoBzn5gQBovK6etqJrGy6",
  "key9": "5kiuGKEC4QWN9qx2KVn4FLPvfSJucgjZgTW5vFZ9b4DBmFn3DLhDE8zfVVrZWaarzg7c5P82QwaAPuGn6iwQ7Tor",
  "key10": "2arHyBWFcyxQ8oErdm3uKZdsviHtafyxiysDFHzLszS9B5CpL1PsXb7QVkqJE2Fg4trcrCfbD5NDvysMXHyh52Mt",
  "key11": "4JddGPjD5ypfoQoJWEvV41mUJxSb74VHw9J8QwojfPi5pagKzLZAEaS64FaKWMzzFbyaA2Hrf5kdTCQgSGEXR7fa",
  "key12": "5mNCd3f58p1xRqEcfhSF7FATG6GPgjDwnvovNMHmvNW2FxA5eHkiQrmRedYB2wNbMxBiX66DT5XSjugpqi8MwkGe",
  "key13": "4F9x7evzqt4D8STEuTRHK4St43hYrz6wytSvQAb1Ksti5Wxod4xYm5EKE43aDkEE46GLJvfvZCr1pCqRfQSJ4RWU",
  "key14": "2G3BDBmn1ZcGmuQG7gtt3gdZx2cTVp4AEMPZnGrHGSGRUUVc1iosijpwzCdxULvEDHhaeyfnxa3EpAzPUgTMNaCZ",
  "key15": "4sNVEsAm3ahHjeegEpKiyKx7V2QAXQN6RPpFhFzEviAhDm7bGsCJEPZi5F7uoZCnDmvRBSn1ZrZ2UaQRKh6M12f5",
  "key16": "2XryGBphhFLBhuCCePxTWub7dKtqarKxCZ6aDyGkpFTSwSiwDfSaBn7k56k2mU9bHFAvRvxQRY2wtJp1WK8H6hxD",
  "key17": "3mj9e8xtAvL9cy2AHUHtFhnWKPcRViEPWeYYRv8ZKQZaX1VhwdKpavy7TPfMgLw32kmznscG93n52wrQp1JWDji2",
  "key18": "3uSWqi8B1dh5crUgv22ztrXhJfzEfYDGP1DUKcuk1XJ2M6THa5C5DEtFKq5kXaRu8tpKpyepepsev8VbVUZDLMbC",
  "key19": "GkaVATmDcGN6dCbqCNkekDbVfZQq9rWywLLeLaf8qxZ5ZUhk9ZLcHx4RUTnrf7kFJssfejGtXWXCqjhBbkyNE9T",
  "key20": "H2VpkXFbu9ndDrt7v2c4a8g9Ave2fvL6CtKzvttECBpyDNpkcpm6oaZwJg1DYSM9RzjREEgtcA4DxHf4SdeCPJR",
  "key21": "258UKo7T7GSTBvB2kKUpmj2rtZuEAJCXf5SRRRNHQ4imS4suEvRte3iUDV6pS8qdRTTcf1Q5Tu8HK8VXexgzuAdi",
  "key22": "3cxR32kE4ExbpmeEfb1d9FKFqtzZByfVJqvjNRxv4v3To1Z9eB1B56kSgGDd9uvXCMijqufPej4vmjLjmHzz6K7",
  "key23": "doKapf83dgqMBftwMxBYBDKriv6DoRxH2W7L4nGbZbdc5RbaqE58gGoFco4WGHyfCzX18LTdS8vNXigiR9Fp9mq",
  "key24": "53jz4WupqXCPwihuf1w96LMmaN6ePxi2jxhwvCawu8L724z4JyVeHqTsZsEwz3ZDUEzehokYeX9vWHWGExUSLbqL",
  "key25": "5nuyD4dEwG4GL6f6RKM5rrHdpAdRgLqE41sQv23WgbnJ9oBsoR6Eup3wXKDhPMQSoU7dkwBo2TF1tY9sCbUxkLya",
  "key26": "3Usd3YAXdioLo64rJyug8gju4VzDBLmUP9ebYZrdiVB47WYbBeHhHUnbyTswNqQ7dFNkGZUtoiq2nTAoZXYKo1qT",
  "key27": "4HVvdpR6pWRbrvYDofoXy2zDZD9FRSHaQEh5uUkvPZYxJxqFGkstzDH4wxMEx9TSFDZC99XcM3AjXmUZHuKRRmrJ",
  "key28": "3gqCga8jj1ECPxpeK2R25KShMLH44o3re4ZXEhwtvvnnkV62SJsaiEuhudcNLZDRkjz5wiiWBiK5V7zaFTewJ2LD",
  "key29": "5d68xSrCyPjA3V2TZo5TXB2pfac84hSuLJRFy5kgqFbrK9NfgYsnT3eP2FfdUep4uTJXYpxQ7mJywRvVxgphbmih"
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
