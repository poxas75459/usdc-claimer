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
    "526rgMuTbCgEN6igEVWKFKC6CW7zoxcUf44ixjcoq4LNKU3dPVkBAxA5CnKJvoWTwwEAEbWLWXhafpG43oKuaFGV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Fcsoa9b9PgcXNKQdKiTNVYQPWx7nTrLRwvxSd6k456gwiMj1GRgPw9EAqVp5i2WXaXsPPPVtsrXUtco9JXMdCeM",
  "key1": "5s26yJeQxAMZ6oRxMmUtYutHQzkB6ms9SddCnAVxxoYVHXcCKQ5RXNMy4VpkQJnR2YFUYMjCZH1KYzWFuoa6gZ4",
  "key2": "2DXKmjuTWtJntMjjMreFe1ncYrYyoFgGS5Dret6KvfKax728mrmtt8LFK354FApzSfBYaTZvxtoVnessRAgWBG2H",
  "key3": "4SxzUpdTDhVhgGbPJpjNUfn43Z6quRs7mKNtaAGx5W8Ghsnvzc9zQKqft1pjkwe3FNcJiUtHqGEzcSzeqNuxN4LM",
  "key4": "5MiqPhe9gFFsRYAWvsNZAYUqPUR7sgi5dTFhT43x9NZVqbxssKWKV2E3Mabz4XKF2f2ddjFPGX3R2xgX7MpenLyZ",
  "key5": "3nW65cCeLF9qNNwZMGqndLhHv9LLgpW6Jj35CunQwkaKQFY5BcuWVSZev2sf1r6o9h7TwRgt6etSqoq6RbkjDUfQ",
  "key6": "5etTX6SsDtY7HbmPytv1L6HoY8R54BybaeDqPwXxUvZzoGbd3KGtfrHxYkjTAZ16PxUk7TFMSj1ceTFQjMYFibCc",
  "key7": "5qUEszphryq4Kw2bRnYoMTkKhgQKAEVYQazfrwZUoJUJXFxmAWcoCFNt6f15MW6ghp8Mxik5PfqrnRUEnr7joQRt",
  "key8": "2ZYdcDxkKyVKQqm3n93q2k2VfrKMgg4aT7PQQLTQ9sXAdWpemV3U2rdTf7anXu18e9bF1wQ3iSKtCctKikSqXraj",
  "key9": "4YSMtrytq3MYFGu6Z2nqArekYGU7ogGs7b7vg3UcVCNeu99aYcNsEXmkyDi4U4aLWrKPZF7BNs76g2W3M1NRW4uN",
  "key10": "3Bx8tB25yeh8XfBCsPZWZ8RcV3JJGW5HeDprhLriBaPPpBvQ9vcYvZL7xiNgCbUaCWXmJcQZdg1ZYEvBsbE7YqEC",
  "key11": "4gABLZeKMDGSQtRDnhGGWMhqTZ1osLP5ET1GZmdqhoLjjo2jkkUrxdQ2qfb9P6jm8CnCoijigECbXT5SidobiuQR",
  "key12": "2oXpaZigPQGo1nJ7PzBSyGqHV6PTkrHA8wEJzyCks94Xnfj6j8naJ3RpXkyHsDw86jHLfonXqtcvNBP46qEp2VQv",
  "key13": "5J4qFgqZbxpx4ubqad39nZnwLuzfGCT9BQPasfpSiYKj9yZMRmmnRNZeNhuGi5LZLDNyokZ4LQc1VwBLCwScgyZ",
  "key14": "28KjUKDE54qbXmJJ1SMMcbQrM2GDD75CkECMUcwTsZZcN3JXo5o3AgG8MvAfSEA2VRfpr2kBQsZLqCVzmSkWm8Ra",
  "key15": "3zzvV6JTQdMBpGZv2vBdyorErCG88L7zEvAJooBMge4aaYHDfZFiFbXquHxEv74EZ56nEoqugPi2TSCi7YRhDGTL",
  "key16": "3e4jG6tcQvMt9m2XeaTiPXZNiU9CsMRzUUWLLavmGhRmEppLkXjSdbRMK2iJwvGttKD1aM2zEUfNnXqfBCgy6Xve",
  "key17": "5ZMgAizMEkuapoK1zBkvMeimgXPU6otb4hJhhQfTaE9wNiFF7okzHz6XdZuHxK9pRbvBseDMskRVoaNUxTkhmE4E",
  "key18": "2Qoo1JMLR6btd8Ju5LYP8FnydL33ji6EV4W3xqzFNEeVjZmdkEXHwH6boHpKbxpagQxDk8cDbpQ3g6kT1UsYh8C",
  "key19": "4Knjo6tCHoPikZ62xM4LBv1NfzaRR7bCvY4MWCcN6KuYsp3h3HeNwntMyaHs3uoR7P6haiJSHMqxaFGuiEqLg2SH",
  "key20": "2QPimVuMbnQcwgGqkxVqaVKhsLT4K4z5ThTATUZwZy2H49YRwXTL8VQuHTW11vAxP4asyKSiBHkEeNHmjbv7rPzr",
  "key21": "HV2oB6iRbUzhM4N3m5is8WvkLSR14gjbULKbae4egvFJAyWX6d6q3DfJAQzUdu6cCKvpoGXE9Nqi8dq3zBmrmgR",
  "key22": "49BuyZ6yXjvFJW6VcU6UCRRGoA2tJBghaZn22NXwQa8Gt2nLxrQmAdGSQCJYMEDXm9ifKchGz7xxTqa8uWkpw9yP",
  "key23": "3ytXNA93ogmYAjmPSjebtGymkwCdFEWdbx2qHf7Tb1JbetMyCdKQvrqmCcwEMZtUxKHPhorEiyfRnzqA2VJPnP12",
  "key24": "4S6y8vb1NBty1wEsce4NHg31JgMUXWLzwzyXteVfyVn1UQQFfGZdcXdQsMaMQA6U5ecSFE4sHdnMcRM9tWkUoDHe",
  "key25": "5LvHdUHRkYCADneMbQyxcXDeo8CYKHPzoVPFMCVRFmCvmuT6CE3K82vHYRLmk5ATnHkTDjLNQ9dbS82RL5nmZ1og"
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
