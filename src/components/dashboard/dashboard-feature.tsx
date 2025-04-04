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
    "614Y7uVRjct7zoTm3ysQD4S6nyWosaXugF92LsBiUMs69cAgCLAxuKjb6n5UkULU4vvBPmaE2jRS1wcuk3cHjVbk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3suduecZkJ1okmn9QfRg93ZEuJCbNXdKGRFTzD49S66Zgk2sYWCJFrzHgR628YGWMTMTXw1GXuS1Ktcbnd7QQVfj",
  "key1": "2bE9eFKJEqnrqtJWEZJKYN5kg3DY4eQL5qqku4Fn8bTCW1ueBmV5D8UCCQ9G3e9cPcHg8dZmse7mxQrwVGKmzr6v",
  "key2": "viQ7zXpusaypUFq4Q72kphd6Y8JG6C4vvqmGnPVB3J4RE8KBXtfYMo49ouxw4pqoEjYrApfzCXUUHDRjTArTJmw",
  "key3": "4di9kNy35vM1vRwECqZAPsmKhVvQsvJ5GhN4viqj29mQpweZPG7ByC52MDwPYihvdhxWJbumgtr3P4zyBk1HXptp",
  "key4": "3Mda4Jn1RgBxKq1BE6yPLLzMYcGguY9yXDfxzFCdXwqh6Kp9SUsDMyiJgW7T96DSVmGduavC9wa8W1Meysjbttb6",
  "key5": "5CHhYbgrVRm3GmsEtUWB9pyut3LEYu6PkRfb1rsmvaXd38rAexnH6YJMdsajemN4A3LQwhQeu66o1KcvrfKtmtMf",
  "key6": "r82nxWZP8JSGB9mERJevU9wAkphvgdsFfA3RGwZ7LQmHrF64bwUwFpK88VjgymYmZR14QfmuL2BwpjcAnTELMTx",
  "key7": "2SztSeNJ1NRq8NTVabFaLEkTBDjX5PG8azkELnQoLdLAKKFCGdJEPGt3cnFYZZMiYrxLkxkPGdGFWxjYjW6grk9P",
  "key8": "5M19R6hrkurR7ESsJ1W4cnidFZBcaVVA16UvEUGNEtNSsUdfTaoKfPdEeitz3bdn9cQJggt5gn8DsHh9ZqCMS5qv",
  "key9": "3j34DS6XqRih164W2LytCng74Rr8PL72uXUkXUFnY919M95HQ3b6NPWcXfZHr72vnSk5WF8qK9Eoz2EEKRjtHYJX",
  "key10": "396jESnWCDBqt9E8XGme2u3L6Jyej9F8zbNtPZ4TQFAMyprryF9TwrKACfLVFYhehDMaUQ5c9Vugs8BtnXaNRXV",
  "key11": "41p1rBX5XNZgxr5AFKvGpP3759GQThqrgAFHHsrinMfxozMkwqyWTaJc2Ars4VWdx7ohYT5Xw722kdEJhyEEsx4j",
  "key12": "3ZScoi2ekw6SL5pA6pNaddruYmaWg2bPaZ6pRvFysgKHoFbEKUp1vSE3gUSDmrmkmqzEMk6y8T4SD3cE65vrnso6",
  "key13": "4y9F2TjKNEUG3c7wyrUPn1G6rGxZQTtxe1caxNdY13ANdqFBmZui6PqpUteot97K8namcH88dPnWPsby5n28Me4C",
  "key14": "5fXRykSZjhhbJKjPv3XNjEDBgtQH4nGArK6rcfWdvL1oGx9rs8Vn6MKgHxHoSWidFboBFNDjqu8G3y5zv7CbH5ak",
  "key15": "UCMufwuGWqfYM83xFFrovMhMJruFATXNwnF4Jh5R9QAKZ9tkyDNcJ5ZZcNkZ9rAeP8RedDycs3sFcAaaRgQNYjf",
  "key16": "5KME3ZywdSH9XXiQrFYQxYUpPnH7Rs1cPLJKvjqMXbV7UYZAt9NiSMBoGVcHEoigLjNVFCdj4N5ehRpu85jWmWnn",
  "key17": "3oe7g6Sdrp6Za2tY2aZQVfji7rSePcxJEw1aE5JUuj4sSKqeobG2YWGcspLnR2MShbnCSSAuQK9NoHPQwMmLfQJ2",
  "key18": "46CLzqvj11gVKAsLNNBxpxrhgznrM32THg1tAqVkQPnirPG1MSTnG5vMUr3wcUHdzMUGBkBtMsz17t26Fhgr99Jy",
  "key19": "5NTBhfFLTV5MG4ZoCF2QEcm9UF9ykUEjDN3qdsPJ1EjoQwyLHuZBsX5YEm776ziRy8H7JtEcDx2dCGj7EV9J9Lz8",
  "key20": "4KYnCJJEbsB7Zm18maWV3HznjUMu98ENj1b1QEZV32BvVHCQtCfbhJch3gcWudAnDn4KxVMqGRrvaDoDqK7U3nTf",
  "key21": "31P6XX9JZktoMmvKs1JmaL8RZwQ2j5UEYobCUtmcUm8zmZFFBqBM3DUjiSBS7VSVb5Zg8CnAHBXsQd9rSud4B97i",
  "key22": "4Hgdj8fiU7SjUzUCX6fnZ7X1FLjKUqxtHKxNHfnTzd4nfzqpQAg3BeikNNohQAA5WkGrYCaqcf11cnpcf1Yk47AV",
  "key23": "3nZuCne8nFLzdLMtjWy6VSJxCUo51LqMGk1WbLSvLVUfUHBtkqtuykdA2tcJh5WghEz8k5CvaHB3UVw5sAVmbERJ",
  "key24": "4DvwF3kFSpBSdWGUKFNb18EwcYnZrCqKhzhLWfzgS5HujCJCTjZr4hAvpDCsbB4ErPGn4vzRH4n3qKuGae9cZwNv",
  "key25": "wKSdVTQTJBTZSLQEgR6HnvfGVHfLBYbqYK4dP2EeKFyV13BTA5oBq87Nrsd38Beb7oQN6zSZMDQrhYhwWSGb7hM",
  "key26": "2E7E5eF9Ni4Rbb3u4NaqHQ5Eo6sPW4ApdyvRgRQQR7gxMczQ34mS2rEpa79kYPd31rgaXoxdJ11oeg3At5SwRSqA",
  "key27": "5v2kLubjh3cJwHMFmCgqN2uFyuWbNoTjeSHnaMvedgr8NEWgTm2VxUuPtKSzouCFYLTbXyR1u1gJnjptiM582GDU"
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
