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
    "3HG8HBB585yByB5sSWPZy8d6hpFWNusJCEUw6tPWvD7ijg4ojgeEEk7HUDjW7PaNr6hYAZ63CB5jkbWeKW4kYzSE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eM5UZwsvXxgBLHHryKtNjUabtCgvdMaaeNca66EfCXmZesnakGpmUeQAnNMXyaUP65Lmk6Qm5SDwP5bwCaE5Chh",
  "key1": "FbrcyawfKyJhF7Wbr3JBa23vHPkACfdkbZdA62D7S6VyRak5x8oLzEbMtmS9kPEEV8v7PArbQMPpyQPXKeQB8QQ",
  "key2": "4uMTdMUka4UU3rd8SAJHCDD3yavPmCrJ3wpLE2CeSuMN3UdzG6nxK1a9qTnrXCypDdNw2njHZPyWegU37HJhnV4o",
  "key3": "5xeJwHNGZPMabfuizz9rhTXVCxzW8EWHXDCgXWZe56SFENoz3d4nWm21p67XQtY1hhbQYRuc25i65jUPARwLDHYr",
  "key4": "4EpEfu616NePMfa7TcrESEF4KKhAXkRk6q9JCKhZhofcXs3Byv3fTvj9sLuHricHWgTsFu2A6jm3tdVWv4iCJVu",
  "key5": "55npVyqsDVBH19AjMEDxD5LfWPvZY5RzaJxEh9EohV3upc4eRycmXaYbHboEKb1Tt4sPP7rkpKNjYt2soSDLji58",
  "key6": "4qqZ8rVi2gFgriAx951FdqPQpPbx69NQyeti5RTM1CgL3KdmheLkAKW6VccRNwkU7zYFJJ6g68BPSNy4s1bJz4gY",
  "key7": "36BqyVRDW6RZiN8UwLxkCQNieecpGUAvF2WYyMJPq8QKFVnu9dTYDfcAV8ZfRhQLXhxgjbvTyPRbnXmAWiy61msc",
  "key8": "3kvpu8aCbFAJCySv22Rci9PGjubJncDzgFSKMAfVo5LftQpscg1Nekpf4XmCw9REPtdcvtiEDkpgs1UZbBWw2XDD",
  "key9": "4TH4eWKyeJe6GCjTfayxqweoQjaJc6VkreRPWBNMpfSj2HiKCV4EwGkZm1GuU5K4TR17qBk7YdyizJgpHk3X7Fzm",
  "key10": "2gU8mtbdfJb6agkRBSXPgw15acQSZ8rbfc3c21GMiRGa4PmAg2yUjKCDV3eS2yRKkkZzevmSbhotRZpyo3F1fbhH",
  "key11": "2vrk2QfMARhtNmc1k7hyMk3h2jjSKqpg7PDDpGY6Fy8phAokA1hE2yNrShh5jb4g9wwSaB53TwfSuZXP6cW2JXWS",
  "key12": "3m4bkPXSXiBXZ88m8FfRWzWVxExkG9gDZ5m8DYrHCRxKwBisvRmDCEaGpTce9mEHbXJ5NAQqrViPiZjpAXSdARvK",
  "key13": "31Pii5E92nqyethmskojEE1cgbb2dEzNG1ki8jkaoigCQHpe6JERikboH97NANXDSNe8J2ivptwuUEbG5hWtXGu6",
  "key14": "4ZZb3FYH28yZg5ThcB4CDfLDGes3c1DFx1oMEkgQtKWpXCNb3o7sYHH4DRdpFL2XdR5qhbvYhVrRmz14HGUag2z2",
  "key15": "27ZYJSzBK6uvKa67jAzrxMrZCsm2dxuNxTsUuFPf9m94ErmMgVNTUZPxcPdzxGouda1EXHVMY6nixxKARLU11xBL",
  "key16": "38jnuWVAd5ZQNajLMGTsgukSAerHvx8CgCingqHUjRuGDTPeRsTdcv285oj7qFAm8JxdSXW1Zx8VvFiJwKXRQ8Wg",
  "key17": "37siViyztastnxoyXQgZp7TkJV2qwz5Z4rJADfHMFVAZ26uaXXtCvcwyM84yPv9oV3ELpmr92XgNwa4ph3eDpKF8",
  "key18": "kTHqA2TcmQwuzaSW4tN7BVVCvMtygEt9dNWmoD3JTQuvLX4dTjc5AQnJDEjREYgWxLfMVgQJyugp48VetiFJWAW",
  "key19": "4cbCRSTKhfduLPczRJqrav9wuxpxuSXR34BaDAi55wmecoJptTfRJtxaU7FFGyka7E28eM2cgEahrm24mjYmTXVe",
  "key20": "49xs3GF5Cetwvb7GVtKxGDU5MBrzSQzADmfVuGq2NTYmmptbtQnyjSg9NssDjfbK7jgcZdhg7jYftCrX4psGuKRK",
  "key21": "3WP8Y2VjNpbZxdFyrwDxiMS7LAVGvTczrmra6gfdXocSUpU4sg3vyWHPrtNAVnXz9hsZHRgVQ8mzUkoywEULY4or",
  "key22": "Qo2rBgDnNNbJe6gfUvNPxo5GrNJqgHX6DJWpLyWVarWerbc6KNibXfgLWKZF8uBbKF4CySZYDp4zHrGu8Qrt35V",
  "key23": "4BpN5KUittu8BboZbcv7K6YiJU5jC4hjKSN8UiARwM59QFpXwef2umAU2RJm3QS9rjEnh6oFsMueXrMUrQLgbpqP",
  "key24": "4NC96VjvXQbUY6EDAiuXNUMFvWZRrgb58kr96GVijoji5t7MGQsvWggKbsgGtNs2idiKztN3XzMZaH8PLgZC7tqd"
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
