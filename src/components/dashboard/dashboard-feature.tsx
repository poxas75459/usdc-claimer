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
    "67HbkbSYu42U7givdSXSFdMHr7aAUvrYpcRTKFbTrQHQszGdKRsSdy6WeLpNTJZJbpjHPh3XGd4w5ec4hYrS3STj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sytuRpb14ssyLsjrAYo1EJGQrs2v73NvYB3Cf7uujvX1MKmjLBjo3cK9qHHwedGGd5ZtYdm6mFbP75eCdi8pYa3",
  "key1": "2huNKGHwPSEYPCSg9S2FRZT3YqSZJvB9T3KQti8ye1GMCeo9g3QFrra8SBRhq18PQhhtRHnwh3245RYrHCiyfEQD",
  "key2": "31TX4kqvR2HjMiKBm8GNcxHNVpqVYcCct3qKmDj5MiPQWrR1ktY5t9BrXj3Q8g1FnvEpbdxABJCcyzwHgNGrJFCH",
  "key3": "U79v5rWLgq1JdV6kDz6atmpWkY4MkDgVdiziRpWY5WiAuDKd93yDkAdK2aHxBxA7Smj9uX8x1mccwE2gm232atZ",
  "key4": "24kQhPc8P2LPe3RgV8kHCW5Y8MaUQzqsvgHEU5hRb6dYk6MDCtDkvPgLE6XjrdiyBw2BF3UzQzspTCrQgRPUbDqj",
  "key5": "62uDG6c8Xb664DGRYPZ8ZMQxzNshxbGQFWeJU5TjRKWvikn7CvFJbpChNBcduSWWq1ad1Fv3ZC3JRRAaV988epxo",
  "key6": "2rKC8Cmqen8G8ZQxyNrK3JV66E6d36VVXVPNsQViGPo1js7eLTm6TKyMpEcMEQhA7CKBQBwPnYMJHmeoLF3Tj9Qw",
  "key7": "23SoMjC2fsjEWu1tDzWGPwrLeTkHffSpmngJQfYX1tvwvpJo8FzLFwx71Up2LTomKSidJGfa9wf7VzCUEsvtwoD6",
  "key8": "4hYStVxHFoJ9pzTzJQzTAziAtZjtHMfTmbeq7xfe57b5sL3bj2aEAAzXsGiF3SeY7g5KT7XkRRKCbkEQhrje2E46",
  "key9": "5MMrXFfwhB4fghT1fGdvRgYYFB7DDPACrCCZU3nDzP3mKzaa22a8u1v7whzp7TY4Xp9MS3X8oYEHmksscp1q2dEH",
  "key10": "2bAPS3kd8FWYksmfJqxG53QR4kDYxVqaUCYAqaWYxBUUSoAoYCGRCVdwZfucKkkfgmXXsT6sexBwx5oFZ2h6ZGsR",
  "key11": "4urpgH15k3ecVQnVaL7jfKQuSE2kQGW54KxRsGQ7ximYo2NakALRhrnkLAR7ukMDrbUqdkTRPeuPya9CJyQeDiSt",
  "key12": "2PXo6NzRD5aNE4hDMvNdWuhh8cEdsc7Knu3kQKCvbvCvrEEJRAWYn5HwrGjJC5tcDbavFf3NVM48VcyLY6DjPCmB",
  "key13": "4uEG3wUPf5zJPFmQnTxKrHQ1P5fVBTNBq4XD4uZ9WUHMLtyuoKA54U4AyumvrQ8XqxdMkV9iSsVAHLUUiD3q6EKb",
  "key14": "5XVhoCJU6RFB1yCS3XScGpfLHos5dYg9i4x5LfXQ7S6nTmJx6CApEptm1dxyWFrqoMaNjA5QEugUbMo2exf6uZDe",
  "key15": "5ksHB6tfXTVzpCsoAH3AM6yvFod2oVkr8DAWjtk1CJ95KAUaw5r8SHyNTY53Yux22wX28xGjLvJedZQBa4faom69",
  "key16": "2h8ng6U9TyUSX2iwNSvCsPadGbdMXYE4Y8M9hTDSCUJf8CeZzNBCCP3P85C767hDtjmwgfP8GpiJiQtbrYbAD8dE",
  "key17": "2tmZ3Xo2mvmdBQ146TSbGcevkPPziT4bgnABTmf8q2GwF5YXGyHWbDpRPWGgPqBh6TjGnurkPmopChHGNcVsswA6",
  "key18": "58jqnYZzL4NVaw4Cd2F8BxhmahZGP96tqznnCQY9BdRw2TXXFQ4nBuiYdEFNBo4GtS84vRBQ7vbSPKprWcBZd4QF",
  "key19": "4ni5PLsAT4KYvKkAHsdX1X3k4V1piDMYaMzj1V8VXib7p6SuzbD1zxyfx3WD4uU8AJAhmyVrU9zudSXbMvZmB5cZ",
  "key20": "HkCLkQYXXQdXLu2UboNdFjZbV5jStFR3ULpEGDXJauSP39wMiQ5DMaKcjaHE93QrFbufUYRJY31XohSK2Eq1Yoy",
  "key21": "5YhQTs5NvncauN2fhtGX67CzbwN7saYKJmTVCkfLpPFBetafQwJKZ6urUXStNPdQoQ6EXzypFDuYJGbgGbhcEyLX",
  "key22": "42yh8PfuWy6dsE3VkQ3YToBzgwQ3fkKjT4CRntTpsnnV7zotbe1qYEScNcx9YEB2V5HQxgMnSppvkV5abvocJ9UG",
  "key23": "3y3BBE4C4UiDNi1T4LZQWkXMryydMJwS8GaiP7VUpMFErnTz9JNACYwFPXnwxBYB3EGpjJSVdR2RbHWqLsxqMKPB",
  "key24": "2FAQwYUm5i46xXh72FkrwSudKndtuArnsW3sGhHkdsybwu875GjfA3P8WSdnds9fT3ArrjNkvvNd6h2CuHFTrVcM",
  "key25": "2hk4f6A7WBBFvQNjyo4estaoeYZSZnLGdJa1BSqNvTumHxpJPSCktP4yq7iLmmDXHoPdvySZVPMKJxeFxA861s3C",
  "key26": "2VicmpzzaRWrNRH4VdXi62ycWHqeX67WjNWmJC9weaWzKPmMY8vyCgj5RvqNJfTXQ6KPkzoVq3LmcKGcpzwr3YZ",
  "key27": "45DuvCZfTWQ7ghnCtbtCtX9kXyckwTEUBRthvHd5mHi8cPCZPNZyVALmXQVUNrNMpvtNe7eze8a8sb4jD6J4mexF",
  "key28": "tqNTr2fiDQpDVw9UGYEXSJkvFaC44CGqrzho1SDjH8xjWEkM2ZzLCFaedyrRnVacR1gEvf4vhy55gkkhU9MeVgG"
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
