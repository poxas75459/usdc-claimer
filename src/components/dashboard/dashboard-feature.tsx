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
    "2ZtF1LazEBefALPhcfqbGCqNtrfXXsQaaJS85oDeA7u4inZt1w4a3vQzpHNcC8h7mumVoEy8GjzbmCQy85sbGeAf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KYZnH7ucLZmMhgMPB9gMqfhWZu22E3pMrKPtbpokQ9eUvnn8mAWYhAdq9Gz77aZkmmYrSppJ5sD5GDSGyaK26Lg",
  "key1": "44ynrEdN1j9tnrkpssA4WiR2yhEGgHPhK81Qx6aApmRhE7t8RMsZtzeZCUXt9LgZPHYpExMFEELQocKDwYyW8W3s",
  "key2": "3PHgRfsdKR38fQVQ5KpsZbdnkt8pe4YAAihxEYsPYJrFNQqZj1NonkFJxbRM6W9JwuCf6PY5mcNLYTyYAM4ynqPF",
  "key3": "2ydEAJMvFNx3dryqAf3hfHdbNHWwmxZiwctiHdWFoAY6eoivTE5tpQoGj8PJnKVpjGWDbVNt8JXnzzgxPd6TBwFm",
  "key4": "2uu5WcxxAUhcZ4rG38H4E3hKfGwJeqkH99L1bU4aDW5uqeXANizmDsJkgofNRLj2fG7pwjfGN7G6tDkyosFfr35C",
  "key5": "Cn4yjKtga8UENvTLukQhi3FwFfiJMBH6fJPfqKWXZKJzjQ6oUq4PdyupEYdNqxJDQkaJYMjue9KJkU56UtcyGQS",
  "key6": "4XoTkFu7TiX3DiJKS5UbPgtvCbYuoJbo2XeKakZN8r8urLsUcGvceUePPCxNRHe2k9JAB8EDPppBAofQAD6GYmF4",
  "key7": "5GuhaMdGcJkWJPd8o6WEENAfpULpjyXifq2TQdeWEjT9AyFL7xyC9yNPKwPeewyQ2UQBdoTnNyzFk2aPksA9Pwv6",
  "key8": "3c6jYShcDSV26C9xw2vgRw8r8mnSXVgACzqgu3qVV736jcRDFwu5PvphNSjHPtCNvjjASx2eQ3VFi6sB5Vdxo5RP",
  "key9": "41F1neF3ZKBEZ9ZDEnPwYbqZaDN12vnUVZe1NVfQEgX1zoGjU4VruhTP4dzjvCRgKyDjqoswkiNuYGK8JP8Gt6aX",
  "key10": "267T5sAeJFqkpuRC9j8b3hwv3bd4ksyR9ttFZznd4u8MHcfkdkmJmT4tF6ZRDqyCkbko1HM8KQQt7KGprU4i4spw",
  "key11": "3es8Jzfsw3Pq94Q13BCeDJgiq7Vpd2zMcFnX9cZBnZyKDCVtb6pZADWyW8g2aDtxgyE8wUVM2NwqvfzgWeMBH4BQ",
  "key12": "2cwtjFdD4neZV6jcDEhY6QwupMZNnG8s5cJL1mbsJWrLi77BZbNPu5V7AssxsKHC8m4R6TmxbEh9EGRFQWB7YAQm",
  "key13": "y1mgAufn6uHstLjpTcozz6gFWGdSHaNVzAmPjVZzKdQwP19mqn3g2NwTR84obwmDjAVSimc78ydJNQxv3oHqyoZ",
  "key14": "4sZ5wFPxCQF5kQUxiwnEHi7qn1hpBVR7HKt2L85LkoXZMKuorTGL3wkQxyPc2Rch1y5daCiXMtUkbTs5MVYRBtKk",
  "key15": "4P4yv93k831cWPshFArqTo6FgmhojCZxUPjpUQp7DE9wkytnZr8UU3QZxhyboiXJLhkvTk9D74nysRR8FVkpjbbN",
  "key16": "s6pNbQFqmGLMUuSHmQa8Cn6kb5MsXmbiJ1ewvbSb8JAQCXtRYubgUDikoykdQ4KbWJ7LJAVkxZUbYAhi5tuNmH3",
  "key17": "4vDV7zmtHriTcQT8zwrwFo3n45tBVUUG2w2sY43kotxfS2PgziBFHoego9whyPGxGSANWXqhGv1vPVqhTJwXGNDZ",
  "key18": "5KrMyn4Hgs5cKjTibnFsEhZTPLPY7DCSDid1RhEj5tQodV9jqcETWHNmKFJhfsKkkpkUW4jxYY4Km3Ki8MmJmw7z",
  "key19": "5jcjNZjtddCLwmqXkopMJ72irWEkBeD8FJnUVEgMY6EPSsJipgiSaBwJETrqCTaAMD5XLzPTZpErZCGcRFZjafRm",
  "key20": "28eL8tTRytRtnsr2uPEjKfuWZBBaVwhjrNqe7VfDWAPeY8j9WaTYrt3DVK9hCFBRLztftduzjpsMLQSzAXXKQmaZ",
  "key21": "5BJhPxnNDxxDYQwuVitPdKpbRBuH8VFcGcP6NfpPSDrshLaUmCCHqP1FqpNaH7ungwhN56MvcPqU4qNyStHjRsvk",
  "key22": "3PaXEfAKFvaxhkZdmmnvRrLLcrg7mggG71hiiFpHpcqLGRpqgVYDLKfei1hsoQfaNJtU7bga6Y3mSKXbBEizFJAu",
  "key23": "4sW2x9p17uviL56H8mC9FuaXNVcSTS8rDNFyCgutjXis8wPZzh5wB2rstwFzbEEtcCzhtxkxh9WtmUVHeyawmFG",
  "key24": "29CuDEgSXhLPHgJ2iAs9WH2xskyTvEPzAMZ7zzorQNHPAJLTfqFRShX8CCHkZDmQjzYjwcwm6RoC996sehmP6R9f",
  "key25": "47Cqj4xwvVB4HWcK6NZQiaSiNVkmB9f9qnsuCCmsyWmaqdUPVeHhRUUyLadpD3nMr5cFwLAb4UGzN2FWskafXGHm"
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
