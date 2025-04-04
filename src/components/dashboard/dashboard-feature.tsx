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
    "5YBPvThDeMn6VJQtZ1xYwZ3bH4sRhVcz6hiyC4uND1DbFniFiWHt1wVkLP6D5Pir1Zr1ZLaRJPvHSyzMcNTJkuyv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nLohqzPXPd2nGanFmv9kSc4zXCBLvSLmDr5eDbT8wCnN7mD9HEabAdtFydisn76TtPvHQJkGXMh7hCM1znQqxaZ",
  "key1": "2XKfXr8x7evP9wYnWKsvcAy6BQw2w4WT93GsKBnTHMdazBbyZqftHunU8rix6BSm8GMKVas3TAu539oLn5Ae2Yrv",
  "key2": "5gi9R7XnknanS4kHWD8g3UAFXdK81EVfyrXBtJ5ByhAEFQqLNPaJjeNyEMakowDUGpeEdEFoPwgHk2Ku9hnC9EuB",
  "key3": "4q6x7P58AeLrtYZqVhNmJhPeA8oGgcGgjTQDrFjTCo598MZApnZ7zUVHaY7ojpbLiofP7fHcTM1e6zS5MTnRqJG7",
  "key4": "47UU2Bj1KRX6AKv1ASBgvDQKWPS5XZLvgWMcsnvMaM2L3ofjvTbfqBJmPn1eEd5dRs6zqdGJQ4EXTC4eW5hbbkY4",
  "key5": "cKGZUNghLeoEaGasyHoVSSLxi6GQkhmvQiKrvYoko9PufjqGMXTyDX9oJKnJeBFG1P6L4efZuyXJYaVS9jGxX6v",
  "key6": "5mLh2YL7GED5QLoDtioekaH4duwrayhH5cynXt3W1XLzzm6p5haEZ52UycznWA73Yntt6DGRCB2iLBpZWYy7YfN3",
  "key7": "3TcXJwPc8MK8e2Dvur3cbPDRiA3P9J7727uks7pKuC3BF3gTyGUB8CR6U3neeLbzAiu95q644BffYFdJTPQWrTqB",
  "key8": "2JwfdDk9CndviKiMrTgEWi3SACQLtk6TUmoEFu714ve9vn2CQMbsbCbbtThQERG32xHjk85tqxDYKTVahakH9pzd",
  "key9": "63RAgah5uWHRnXxnG38ho8Edab5nDiPThuq3Cpssa9trCum2QxFW3QcNy9xg7LAZzQyF3dwtXvuuZRj4GUe19xgd",
  "key10": "5AsGeksWSvjjbBmijzFhXmiHLMvy9GP5ZAdkWU7He2LZXhDUiEKCBamhVR8KvUMJeajvvKR2qD5ujXSh9Prnw14d",
  "key11": "66MZeWsZTzwgYWc2mCxodZTGMZtXxnfRnqHxZZurzpTp9RJnjad4GmkwVe16eUz3BiiKHahmuhDHmxmgyr4PPvhK",
  "key12": "3rNHj5DjPpFw1oRVekiG7C5o2D18LTRcxh4gwuHLRyGghavWDAkjdu5XJ5W5E5caW8NBHvSnyW564efdbtnLcfxW",
  "key13": "377QF8Vf7MA8UUJE63rWm3sNhC9dqGWn9DJegwgzyZrrYjoJN5HZHzW4fEQjD6KkV3Qb7BrBgfoJboKGqk1bVQGB",
  "key14": "4sGs4vKZsgrUqPFh3uofXhHeiH3KA8Uj6KCBsgD9mtf2LvZELfgZ7fqkX7f2MSz8WjyeJstDQAMTGPwfvU45EBq6",
  "key15": "5bJf4n5hoa5gNaFN8oNVhZkCZRW4k3mY6Z884VwZXhfW6ajprjHtNfEngfbmMoviCaZVX9B5f4UdikvkPnovdgVV",
  "key16": "LAxhccUNGxbQUBsaCjYubV1SSmKS2mkSuxiWw52jPxyzWjrJCgR3NcugLnftAmTbTjPpsaACqfYyRmGSuGTxLXo",
  "key17": "3MXymS3BqNFdvcu6QosCxVCgxca16nbvgXhoB9xqL3hAPF6kZbvaF8VTNwrvfQWsZ45zrTULQP1BztoshGWJB9vy",
  "key18": "5qRApzae4jn6ZKvmbThNm7QPAtcp3WPX3nUQrNW7UeTw9B6mfdEz6a7RbLZMQCsbvSiTSC89sMjdMi4u38b4rU91",
  "key19": "HN9TQK8zK4LmLujuxncVfs5X8ZdBq83CGArFuww1jaNwT6qdiMewA5vqb4CjZDL9XEaRoSTp2dKmuX624GQmGH5",
  "key20": "46rb1nKUhKnUZMLk1F8GoYfRkqNrJBZRwdhsefBZWLfwi4P3hKcDvgPFTVAoR5EWuQqyvfKEMX6dLUekhH26a4QP",
  "key21": "8Acqc3vkQ646ijfc7dG3wjcDAavNUQKk63uHbYNH8SZUSo74GN4RouAd6hkdaY5os6CagYzTomGpPEZU1Je3MgF",
  "key22": "4dJVVCGXgh7ioajuj42QoiXLPrBN883LXN33Z6ufUWLTE8MnS4cwvecigLsVJXNvpfr5HZixwWkvpt8hx2bhxypg",
  "key23": "26MFq7aHzXDD5UYtyewvd7weE9MD2dh6CSJZKsACta6AJcXCUuPZRezpdqfCTjU2T5R5xvKrQyZYLZQabHXU13je",
  "key24": "4hbiDiN17Q2F6yFVnjdKBMq1fCrgAbC1TfyzDixC2ttUaUSouMeKkzq7xVJUdHN6dbjgMLR7eFrKHnPGSnYLJTTY",
  "key25": "E2K4N717tsD5Ue1cfy4ZUtpcf2eeE3WfU7B2ez9hF8MaiMiJ44GuJsVGfSNKJGzNAz9PDtQUT3cN9ZEARz4LMKi",
  "key26": "RpHT4mQSZ3wGnerGkpW8ZXGweMyiEjRpWEgCyDc5Wgz9MaJu2TQf5jRq9PRtoyR8VgWWu5t9V334MEg8PfANMam",
  "key27": "uNQw7hsCvFVCby1i7DdfoeYuRTLPtfXxDrCgbDUdrfrXik1CuBAUuXGtn6Mf5uvKZZfbdfQ1n5Hsxfa8BReVqRK",
  "key28": "2HCedeHm8RivdFFZJgK6FWLmqrqgKgxRW7c3YUHgyKfUEsdKQhfouJKejCP6u2t9voeQj6qh3Byn4aWw25p35v52",
  "key29": "4oPcpt1rkWZ5mC7bipyucrwmJstzevQasXAgY5XQMggHWJQCKmC4JXru4V637wWx9MtLW6gPLiaqpvTCxiznGaVn"
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
