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
    "4JdgMY5FGDdgLRmX4YwR3oDG257af7u8a8A23Enrv9mf7BWXNy3XeqFCd4EuuNtWNwnMKo4YMvuihZqeGx9ornhP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26UuBDKgAkKjp84Mh2YCU3aESNtegoxMLkmzUYeDSW7j7mfKkNbMcxm62paWuPg4boCUbBaD2StJHLjy48u387aZ",
  "key1": "3B7cE97524sSKgqhMSA4FjviqozJkYaf3eZyFHTBNbu7fRoKQCWcKdgz8b2cDjNDaUTgk2zcSGJgNnpi6K2U75jW",
  "key2": "36ENJ13v2Mhxqa3xVdidywVqwkPHFRc8ViVrKHhmuEbYbPUkSrRY75BX6gsyqyLf27eWCSqRimP5319qQ2XEuKPH",
  "key3": "9cNaHfEZmKD7PPxBxqGre1oiUzmTGktcbSwnfdCD42EYR1uBfHHC4eXPiy2YNcQEM4JxnJtfMkMPUhmfb4q7kRd",
  "key4": "5ci7TcxwVuFZYscftdSCfYCHn54PeuyqX3wNK7xhgVFYMzFiUYzi5FZJeDi2wTqQuT41HRFfMGerTrgcjHTyicPo",
  "key5": "52qRR5WfCbyphMdBrL4f3XANhUpzHTN2qRcEDAt5ebNTktYgwW9hBgUYm6K9nNe4kvjJL1csvh22MvYpYqbSM4Vh",
  "key6": "2tgmuS3ZciXpX2CGoaj2dcY7Jwoa6o2b56BPCbnBeFPHPc7E1zySFe7fP62Ga3bP8TwydXZaworZz6wt6tHNZnka",
  "key7": "3CauroNEArgzzJLXWSPYJV9PtKNyWxS3pJ6mn87HxbkyCL1JTKRboaBWJr5zaCbhPJ1bHwCZXcAkARpFHD3aaaMf",
  "key8": "4xJwZUtfqgaYJs1u3W7qsaqHoZcEG6c3GP7U7GwottN5RNDbBz2DK2J5khEmAKjcC3jSiUxzPBkUj9L1kjD61Rf6",
  "key9": "5d1XKMVywButq7dk7aMDuqth8setdUoEvEptgQB5vJtXGivRzeeoZmjSvfFTU8cYhV3T35QjhByhWSjJsqyKZ3hH",
  "key10": "5fTMiqvtvJahNE7ZTReUhB3Pwf4CjpFsCD9o4FNkN9JE96wBE888e46JKAhinpxsLkuUp64Sk9hyW1626LMEUVio",
  "key11": "4sKA6RyWu259z3CuzCD5dV7MBf8W6zGxj9tUPrW1fGoC54dTRQhAPgHpDW4HiyGKDd8sUGSPfxxfxjRCYHTauGUu",
  "key12": "3vGM2X1H6tK7mNGGarQB2Wn7m9TnsxZMzNAsyJoHvWbA4w2SCheVCWf8RBxV1VREeCJEgv6ffRwyXjj4c3LEa6Re",
  "key13": "CaRAEE5T5FF6XrX7YPgyJvxLD8FKV2eyJ82nPzvmSY5jnLHbiFmuagtxCiKcRP332ci8zffkrCwfx5wNdUzUnEb",
  "key14": "5KwtXAJBTPFWcKPZRrS6q6K7uJL27w888cqj75xiYqU6D2vRVbZeq3xxJXNCNoVbrPBLcJ4ztXhKx6TXJkzKUZgm",
  "key15": "4mRaPYQmbT5BaJwYLhjWTqTsiEwtNAfLq4Lw6mkQTbedzpjYUV1RA1yGcXC6CJPU4sLndt5GnQoZw1YFnSPVPgFp",
  "key16": "4uYSteHMHdkYJd6wruG2XQLJJZGhTyrNBMiY2emKXAGMwKRSDto7c6Sk33z5VmeQorUTKeHtGff4MzQVzR8TxbC9",
  "key17": "3bRNk8bvujREU9rc4VoDVaNHdAr6MBRHXxQLLQLGG6KU9f6rQTpoYGzzCWLhThx9uaz63xT3mRM1RfgEfDnaMZL7",
  "key18": "64UnNGPiJkka4GV9hezvoukWZPMqkPv3A6qcYhANFq72DqsfjfhM4xg9ecwf7BFSU3AZs3tJfgKJ4Y6mR2xsLrTq",
  "key19": "26A9soC22JfyG2wQBwoptNSZdnDSzsHsJLCV6yfd1pS2V4K8WDHpcF6QgPv1BVL55iNgekXUbfBPu3r5eZ75tVLB",
  "key20": "5X56e7Er2rgTm31sbuK7k3DW9V8Wkk1YYwfKKxQwzwG8Az41A3cNUQr4QVs1W3mx7DrGB4Vzf7gMXNNb8UGKX8Es",
  "key21": "2AJxyLmL2bBvPa6dDDXS8uCFykhutCaa7dnYTUHM8VgqWBs22bxN1CRtPEtAwnbaJdH26KLMPRdWuSVBD5UHKgZj",
  "key22": "4RtWAhh8d7qwHNifGUVVHBBthXkBAqoykQHr4q7pjRAtSNZmnxK5hGUpGtkU86ZdWGcHEd8VePbZHgPiNyYTkhY",
  "key23": "4iK2vQxnqMywWRrPGxUybZ3pjF6JqADrdpWfkWGXTbuHABrMjoq1ctHrDv5cj5i2brK12oWdfDKwqoKYYyA5u5jJ",
  "key24": "57gmAehaLgMTY1Qwu7Zxz4Az15Gh96EMPVmeveiYwXc4jnMo4qpFAGQFte1YCDxYSco9NTXRkh6zmTzUoievJ5o2",
  "key25": "4J3RhvC4eQj68Ji9WHch3ptWZ4XUvKE7THXF44ACqZZ9RzQXjAQNs6BUqZcFkk4YN3cYDzh9cLrV2DKLHAQt9iPs",
  "key26": "2WaEjUkEb2o8kK9zzsKhJF5kArV2PU47ichJ6tdCkVh8ffX2J2yrAfMwbcStD3RUb2kHMNH72nJr6RRtzcAsaoHZ",
  "key27": "foQ1U6KPYohf1z2TNLTVivWA85shfoNJRVKRmdjx1CUGu2UXdjvMDAZqvo7FSb7nef5e3cpZb7kgWGqiLKgQRXW",
  "key28": "5kYvJFfXubxeqqgQasSajzcGXxTkJhk3azSh7bLTG6mFV6epS3dVFodyidiLYSCxY8zDjysZs5A3uPTBvWqnG7BF",
  "key29": "64rL71FvzVPpwsp6kydtRNdRtixUQMGgyuLAb6P4kXgHNuHHgPAhxkBCkGAhWVhgcfJWKjc2nw5GhGeqkYvFUqqP",
  "key30": "5ohYXAjgEb4PVwvKh3XKQj3ecqhLVL1XNMitMsox5bGtQDXYNfNt6hTk4PLopwnx5NSVDxrExn1ahdbRU1CtDXqz",
  "key31": "5NwjSPFum54qP8vrzaLjWNDKTF5JE7UMWhxM5YZcZRWQPvuUhD5Eerm9Xy13BnF7gWcMiLoXf4GyJf2TVSc9oFUB"
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
