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
    "5XrS7JZgCEztTZ7XfehcH6vQG9c1pWnzH8Gi7wx574nrtBS4zfPpm9NauCKGhXs6P7nncSZzLMjYUxipk9RDxQ7y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2baprjE4gb6dUf888vCSKao8oYpeXUSPNn28g6bJEEqoUzAUptg8o46QAmVQMXNT52PHnoYaeytQDGMj2GFP69ku",
  "key1": "5ttwqNF8bhbHDHuBq3bYXF8FA3Y4L74cgwS7ioJzdBfdQUZXyZyFWUKQM3mLUXJ7Fzrfhv6SgoYVihFEA6L381tk",
  "key2": "9r9pXsFmux98BjVhg6UMCpmKxqVtaXjop8QKDSnDzRrA9XVTenbYRvVojt9Rer7rFQPYJf4e9aJN75GNnqF27LP",
  "key3": "5mMdgV9dNqdWAwUV6RcKG7F1B3crM92dZv6TjVk9ieXiU6GY1XPsaGGQPHmB4A4n9GngAmoozPJ9efUTUzxEW2dy",
  "key4": "28mnTVqZvPEuCTijBahgXCneLqv7sKdhnjxF7icRb22BgyBhvHEwgNwUArRYtpLdRZzTGUsqbdkRFcT7rC798oQc",
  "key5": "3jpbHSr3vXNn6GQRyczAA6uFqVxMFJS8y8JFTNZqiPUJmxdhtKSC9KCzjP9RquUiKsjs9oaGqMWVE6qLTJ3oet37",
  "key6": "4KetrpDb93227EP5HMHvJDcNRgARDCnwHwTu59RJ9zcTgJjFLZTAM6VpwZ6G2zyZK586Xpc7cynDmLnEsdnNVCnu",
  "key7": "2aXUGg1G3aAdLKULWoLTaxeaCBc5GA79ERAS2zwsSpgF5KwkHeYe7u6tFWreNvT9qmWWu2wjwLKUCUF8qaZrbNpW",
  "key8": "3PQs2jhsrfxD7kTd3qh2FFsCy567f3bAPuyi3DzW9pAWNznUyRs4Lh6xy2tRbcdnQfym7LTaa9yBM3hJSKL2Rdu1",
  "key9": "22EnfQF9VUy7TVPPn6fyDwSrKEfByqJCZMwutUtzZPuozSUnBFMyFR9bqSbqUEtkfkdVbh6unTV2dioGmtW7rpdx",
  "key10": "aZLwNJaGhW5r57H4dYKQ7BsdjcawY1BQ5SKEkXqyiFtRSLsFCoi8EC9fRUukXGdnyVBgBKtAKv8Au5jMJQEzLyn",
  "key11": "43DSCN2hBKtszPJEg1Aw6FhdKcpWCbWFx8nA497uhWB2QKHQLGoSZEMk5MWccUY2UfB471rZBkyjewvVJgsgz2sV",
  "key12": "4z8M6L5tEAestGG2yE9wMxD4EwkEj3sqvxGP25YpHvUqC3Xd3An5abpUoiLQJcPB7kJPjYtpB8aE77LVyVLDfgSu",
  "key13": "4ykqwpGmgwHdruKMCyjbrzmvumyJTC9SoAgFwhZGwT9VoYM56wYdHcjZ2gjRUEacGTSPG6vdGmH7D1XwmEDQfqT8",
  "key14": "xtxwBYvyPjYQGE9hoq3ABXGVN5hYNHgSbwm6Npbcf47mjvtR5zBTL2RSCcJkbjjkRQwE9zixMGEYeP9V88NpZak",
  "key15": "2MPM36gvSpXTyeXRs8rRM3iKijmnc8ztoJ5o82GPSYDAJzgfHeaTgPxE5B3iZr9RG3PVULdCuzXa9LwGvqBGy2Mh",
  "key16": "5hTriuKtL34q7H4hVjvFEMqLX7qRE8bzFqCowfNECnbcs5jEoSwTrFCz85eBuEHjDzDUeeNXFZwpmjVoL51Tj2Ec",
  "key17": "64BNdBbFe2R9UcbbZbYibdP41xSKZFpjmzkAWZFbqW6WD7US21hjJJ6WCwnbTPzRTLoFF4GUGauew8whxkg7ZrNs",
  "key18": "4yXUDF1oiWvuKyhAQpMr5pCZoYuCfYRA6G6niKj3LJsTjgeV1AUY87JQA5pBdgzxPCD2DcrLrLRPXAxSHdQMUP9p",
  "key19": "5HqWGuXMp4wwWZ8MebVo38bzScEjcPxCGMqydizLYStDTZLAYYBavpYb8N3si9EkjVLZ5vN1jhzGSPtcZdRD9SJB",
  "key20": "3bdyWno9sHsSSsq6dsBryrdfSSzN6wGLVNCztmnxc9p6qvcGVcBz4Wvmmies3L1ghVz6fWSNkXK437kh8niQo2vx",
  "key21": "3oVgaQr1Yndhe6dANvPBAMRKwqBdLVywzdiup8e8DddEYyyK7wj7JdXdfxDiDXiYm43eWL3nBvxNBMRkthyYjR8i",
  "key22": "2hLTx3777mSFA15uTTgh9BsrAdiiG2BK26cEKeys6oNptkFa78cvKpFueByu6BPTJnfjWSHRkmcsoFX4s6FVtS87",
  "key23": "3BDEdFsufiWoDLHX4XdexVsJ1hV3oq8wo7AnmpxZoVVkLKpAN4M9ciMtBPTwQWCYwpv5vgtWHUJQNeZZ5KyJCGtv",
  "key24": "3T9m2ST7pyCFxef87AkGozsAofBzCva1KCroB1tLmefFwnAZwKFGHnFn1jVTE1hXFmk3spd982ByeB76FQmvU39V"
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
