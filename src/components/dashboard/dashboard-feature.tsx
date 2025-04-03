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
    "61S35nEWiowJPeQ4tfZR658GL3ABQSHwLNXvTfyWEC4JcJGCHSsftUxgHPhvWUsyca7zL6n8CewcPeGkHUnGoiqj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UT4LaWnqsWf3G9S7XCkcSzH7VcdJyfXGqM8g9AZkQ9Xqoxa5tBieET4EFFdyKiayUcep4f3AJ9eTjTQwocRYstz",
  "key1": "bsJJYwiFSSBbFm4AkKcnyXxktw2TDpSWK3cxLktcg1RnBXvZafMqk8x3RpNxoQ2R6soG5yhuJ3QtW6Z8kPvPpZH",
  "key2": "47pXGhFJN7DaMFTqMSok9RMrcnbkVwVfQ4nMswkNGSxmEuNHt2Kx1qNnBDg3cfva5VGbZCa3qEBbkfFmNCJs1bNm",
  "key3": "5LwEQWd248FEgKqDYGX4vW8Dxk7WkivzinBgJmGphNcngj7xBtDCCxbJ1v4mgkpqypTd8BdiGeKcZNjZ1zqEPs6j",
  "key4": "3ZXq8R6DKVRiLCoy5mudbqEFJeLXgkrkTwdYcLJ45QLGR4dHhwmpXntYjk869UjJ7f4YNEBDd8kFpjNF6dTp2wvB",
  "key5": "3o87LaJgG6hk4uKzsW6zhUsdu7tpuR1UCCVQ6d1VEE5Dxy7rv2QgwaRkmpACcXbv7TdRW1N4AkabaXrFkFb3nEaP",
  "key6": "H9M41Wak1GPMZNahnkL3fjbgf6seE66mTnsT4F9jX9ZnYMCJvFiiNxqS4a35BveWNs7iF61BDmJsmAZVx9rRRpm",
  "key7": "4mpzDt1zNYGw47FLMkEFKkjBF86VJ8HUjCvDNNjbxS3YP35sxzG6yNYvGR51RQV6hvSoQz2Bq8SAvKXgxXdy5dJy",
  "key8": "2QkQ9ejLWHiUuS2g4cjNth5owqMExNqHzHqMZbbabzn2SweZGpTuBB49YE6VCBVDawYF5xGBpKv8coDcNBLmGydC",
  "key9": "2YgqC5JgDL7LWhownqHPznVSRiqWqgqXPUoNmC4gYg6rtvUrqgPTPKsUXDiWnHfNoEhhP5ijd3h9EeahmScmZAA",
  "key10": "4GcKAjr97nUV156hSWfnLTRA6zqoNzgTTaTyYGNoQNY5tZU4BtEkC6j8tNLzeMKWuNPemJZfrqfvEEwjsGZppCv1",
  "key11": "2CWwsvMu5DkkYRUzy6ffRTUhQ9L74XoUkspbjc8eWijysDESvpKaidV35am1DizZEyTSphHR5EzFQU2cy1CqwrKG",
  "key12": "5RjHwZkMo7ox2FHszitZsY8t9vaXTabVpPMM5hZQrJKfCWTSV8z94HNodnuir5Q3bs9jHf5crLaYt5JwaU6Syjoe",
  "key13": "5zjtCKBFtqdjnH8k7XQi9NpP96nkEpcys2P2MtYwHeUH8XDKnJoT6ehhEcJuB5i4D1FJJMJ9tUVkMmEnbs3GeViM",
  "key14": "3nYGenoizHzTY7qhBUAo654R84TGSvuoomZNP2MWcoHm4NTyuxsThLRzKJCrdFpGfcvRYHXq9YMmL1DCqwyJUz8G",
  "key15": "52fBgae8jEcNZUudeweEpN4KU68N3BEVkWWKsfZqnrd7AxDXWyirfMvX4Aca7cZ9JMLXzQCa3Ed2xiSp2pesjE4E",
  "key16": "27BHSmSFBi7nr4L7mwYo4HakbvPSmVLQASkKQKSsCJAd3n7wFyVTbZQ64KBPD7oEj7MRcVnG7hCtVnCNKxaf2r7p",
  "key17": "51CaChFYZeoppDVUicgfzoAp87nxZEBbz8YpGhHzGrKhy4SvRQXy6aKZhQ9b9RGCnnmP79k7BdH42QNQD5KPEivD",
  "key18": "4QEPyc7saYkoJbkoGGGirV8BTcEGYzMZJgNoNM5s29yarvafASgEbgHNpRJZvQL3JbfAX8QAxqfndTb9ic4N97MP",
  "key19": "3Vp4AcVoeMUGwvjviG6qs2DHTpdrKxumzv19qYzBMCdN6k41HSCkK8dCUCRvX7UanfGBMg46zHkFis3mXfTyN9iM",
  "key20": "3MZBDN7qeWHL6kZUjSsfFTrkjZytkx9v6RZBZfi43dbAhTmf7JceViwvEFX86Qu8efdQ1XGH5VZKjYVX9p888Ak8",
  "key21": "48XaezN2ZQeTHNmftxvvyWJKGWmao7H95aBFNBSDhcHEvY2adqiwn4QcmfUdZimdtu3pAojnBBkCuJwT5t1WyRs1",
  "key22": "2dyeq1EzM8bmYhhAE2oLUoZR8Jc4m3gUmWBjz5iucTFxccUzpUYr1oo19V5zRceFjFJ7HZNcKEULWp5jBcgMESam",
  "key23": "649GnXkwQ2gHP3LN7MkZzgkKxGcLGEgPE6KUxWSRf86nYj16X8FGFvJAUNf4vgSiDeWaVx4AHRsKn2n7U7sonkZ",
  "key24": "3FkumMpL25NivqwQpc2wFKsZwVgome2TzE3z6kFtYasvN6jFqjDm4K4dHMwtogb6RNb72gx4oo4VvhvYWUU9W8t7",
  "key25": "g9AdJYSXSg2gqmATjmB2mW8HsseF71z5eqLARYtPbfBDufRwVJgdLdUm5ZXsmCCquEWzqhX4Yy6Ggh9JbDE6bCm"
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
