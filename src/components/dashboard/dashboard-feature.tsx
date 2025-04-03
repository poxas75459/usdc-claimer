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
    "5FTK45j76Z4QConqWZndQy9GegDzMhcUEiBcSXJDrm4n8fp2nRt2V9xFsMMqMfe61oksM62evmYZguHHSGmXVjhL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "t9r1D6LwzLFLeuTmySAneQiaMQcPy78FsSXiym43L4hByanJHSLnRq17kVHwvJ8J3kSkiTeN4zLqN9gFUY3nbsh",
  "key1": "2C1BA9mM5pgFKYTJ3QcNu5jGby3Xj4BmNNGM5UVdmdXotsq1qGigbV16hG9CGf67jhPBkqPQiUjqM27ecy8qNFgi",
  "key2": "V92tWTkTZCEwC5eAL45ouiHFA2jcLwrcf6ZEBB51wQyh1bb3THtNKsL6q6ByBRZZCSyYPt8ZKUpRrLHhEiFQP36",
  "key3": "2gpJtTVbx182JYoB21XVr4wagki8kdqaqWfpPtrMGsyMxFbMJapkgfmUBCYu9UY5rLdmvU1uyBd4RGwy3yPd2wbv",
  "key4": "3F4ueK2bfLxdMWPyRu5QJpt18mEJfadjeAa7S6SkTPCYStEvWkkvGQ9YPzjykKW5LhF4KKSHHhBFL64sHWhfY7NX",
  "key5": "4A8RRHT6aEdYdZjWJjQ71ib8dieUYrMGHVBEMKuF2DKXz7cR9ME9WCyyjPfsJt6wujNCuPYajd7Twcg5gBL1qTbs",
  "key6": "3uzGauS7dsSRaXLBHWxpZEGFWbnopAWjhFoVHx6t6gKedLTfapreeeZZ5rQmFrjV2AJXm8yarT4g2TXMS1TidmY8",
  "key7": "4eLjoZEkohuDNDQfNqbPeEuQ4JmzjL1pVMCMCtoDkXaAzFAS8NEAJZJFHxHLjTg5vGatv9oNNwoAmKd9Rz1ZDk4x",
  "key8": "57PYxBHcgxUQ6GWmwVPFvdhZMsK4N1M6mMHJLtVZfk129TazEf6zXR592Mg1VqtUpgcYRuw9V4gq4X6ugmbP7KR",
  "key9": "5Qr7aKBfAFyKdgwurdsFFAxobfbBtxBcphPdi9uLSCudnSrVZPXqSRRHrsazdNBHtwyTq13mVVam7Ru1Cvb4CVu3",
  "key10": "2KrDMXwgrMfawez9JrBeJDWxqVkDKh2dJ6qHZyXFySFG5PWZFEQE5HgQmJbQDg63swgeopRWJWmjWtvnG53QVvCD",
  "key11": "XNUdpPAL7Z6qw7ZpTLkLkp2ruzGyxRchJSTGYirWc5HCGQ3f569MH8BgYyrzCvWiWiiVkkpcArY77pjpbipUUUp",
  "key12": "2E218jrobWXP9nNUUUExc2RazR7Zi4weRK37Kwet4Urk9G5xBunkTNBq4zibZg3vqyucvhzMbitdA7qFMq9VG7br",
  "key13": "5zS6tZJ5etRdv9tV1ggom39pbNFhbdLfaBbbSUC1Yas4hcRxAKakVUrcVMtbHBqobuVdYQZ6LQ56dxjLyTLC6f7d",
  "key14": "5M9Cyu7fD9fy6xj2XbCzba9ehwcQ152w8N1gBuuM4JbPQahCo5ZbPtuULcFupYQ7jkNmaqNuPzqP4h2GsS5cESQ7",
  "key15": "3NrqEeSxnZiebmRK4VejwvX7Joid3QVEvSXTjVAA1YZowSah1fh7F2LpUKfdvuSpYFgPJZJUyXUPKrb9asL2eAxu",
  "key16": "3DM7A3qvXTLCH7E2HGpjf9b7sz6ExgWpgJ4KSFzHnjDKurFp1mLZ18QyCaZVrnN4tay77UNbTp9uEke1F4cJjf2v",
  "key17": "4WafY6fLsVqHwf6qe54ZB72or71xJkCsC6TfVP7n1H9ErrzFLn9ugNS311EaGURHnUB4MfhEJhgLWigKbFDVNDV6",
  "key18": "51MCSZKcdb36CdSJxKYJSCEzDgww8D5eqsD1dSoFLVAan1FddGgR86no3ApabeLoYZo36PmqUBpM92NFE6V3hSFq",
  "key19": "2PukFi6Q86antqHuNGvJGiHr6xaEaYARL7LNPYYkq1zz93mYvCgVEeyKBwxYbRPJJi52QMp1GE2FsKBJ1e4VQUnS",
  "key20": "51kUzD8DRZmhG4b9BiAJR5VtAz7bNJUxWidTnDatLTbekE3LLLbcA8XKeeAyFZyu7iz2N9Km8KhBdYKxabh84joU",
  "key21": "JeXfCmLVikE5RfVNNFHMksdZ4t5uJ8j3chDzJuhXq5S6UPa3w95HJa8Gx6WZaKKCrGZFWXMdb9wLsQpMNJFK2vw",
  "key22": "5C8pb1q7QqC5BPHVVU5cA6uDMFdnXh9V8dfS3kqxBCwbHKrKTUf5E9uMWHY7ZQTUSmjmipqK1fnq9UEn9gwDH843",
  "key23": "4MriJG8wdRNvv7yrbMpxKbuurtyaTSacrZDcb1URzrNWscDb93WLjaTGQZEM1N2VeYVzYqUkqjiX6fvLv764yboE",
  "key24": "3zKEbje6zF8UaQ7XDp5cK4JEgGJp2bGqTYv21hrDPF4zJ1hqYtthfQnpYntZnfvrgnfrabzz12472b5qTE3Ez59C",
  "key25": "7NvooxRxjQifn6f7KcdkMDVZHpeKNddPwPiqMZjfCBYVCbWdCp1ztWunEtzgaDF2CX4edmUjunAiK4FqktChLi5"
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
