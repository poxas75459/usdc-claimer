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
    "4RbEbTZnqBJaqPcu8gcMHPL7LdoLUAgATwxaUrQFpqKjcBCpYKT5vr7Nn9J2nhskuqFmePFnZSrK55wndHrBoqv9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46y9xv4oAEKrKwtEn8vYxAQNNRwZ8VfnUsmcuvqPwmaqUUowqfWszLhwhwD4kDhDBuWztVMdUmDPMCXA9ubxHV1E",
  "key1": "5jXdGBvt23fFqiY2bGtQn5jsp55iw9gd9BQ1yJHyQVAKCXfw677Q6aTQ7TjCWzsMwoSBCazAZc4RveyDv4w9Ygv1",
  "key2": "5FY8Us4XP5zfQpPM6fdm8upNdskxR4587aFZQZXd6taZwk1WNFp3yixP9LuQ6bofiPeVsJsGuntKsAb66H9kBdKF",
  "key3": "5JkgpEXxe9Qzh983r4HNPh25EWen4Gfck1KuLeEbAsChms6AW2KydmAGUL79K45bYNyoZcaFaZD5FFv1iuviXpDK",
  "key4": "2SGsBYH1uwDAVNzVMw1k83htU2XVZ2zRFRmqyNZtu79RgFUKYqww8aQohF8Xom4xqDaKZ7hWm8Vyw5gZAgmAKQLw",
  "key5": "3w6kpv1J6CLTQ4BGpawwwvLCPo8wXwsjjHb1mviL15Ao2CjnBd4FkCnKGfgHYEs4vGeTJfcyrKK9VaJR721YAJRc",
  "key6": "5nbYf8rQ33Cg7MkszjAjBNDqXzWTaeP76SuyNhLKPntQkYrFntqogVe7dEtGojjsChwe6U3t3y8Kp8AqqrZpgXpy",
  "key7": "51A1PeGe92E1N6ANAyh41YNXRGAj7FrokHsc2znuKjyUUijFKiDM8nKLP1j6XgBHxTUUzJRnxNVDdQFXh6FKDdvo",
  "key8": "DBT6ZgxA4yzMPwfL7QohbqafdQqiZDcn9f3ez7SJCsURc64Ag15b8YFigz5TUyM3tG31NXRmp1zYAC2gSraesuq",
  "key9": "k2Vp9hbS3PdDQbzMEPnJ1ojkmCPw17Z4GHjFp7EKkPBCXV9hjX1Ed7GM2NRBXHYVLyQyuVHkcfaiaqBzsAUEKQP",
  "key10": "4ACPWvmq8mNri9Nrms4np5TfWNPpbRRHdEpNf8GBD5KsjFokrncrAG3VHchXDZRUhY96h9Yn1DkwvkPw2LBkEZtj",
  "key11": "duPyJ2D2NqNc3zhiqdcAFfzG2vuJXKVW57fVMjSybGzi44SUy7LQvebVgWg368R78SDGLHEENJFihzUsYsVfwXf",
  "key12": "2QZ5PsapKozw7dTE1inxdpmRAmdyCKTrNR81GWmXMLW1XHdvb9DNVbaf6ZHTyszfzmLZ7bdDCi4RcmCcE3KV7MEw",
  "key13": "5p2iUcNM6YrUmtmyh8sBv7LEMFMcLZvHTNGhoLDvds6Y5b9yPkf9tMG3asU8ZiMMWnCpVxPa113z7oqWa9jPVQXV",
  "key14": "2LM36F2qdKPVnEqWRi8b26CjAc5eDxrbQRc8enimvCVMShMHqMpKBvcvTj1PstUThQX4FLA19TRbtCND2caUukxN",
  "key15": "2zq2KVF2ffpn9DdSxfnxxDxa6KM65j86szNPmV5F2JqP12bTuaKDDuesL2p3tRDjv8RLJzQhSQeb5emPwijhQqSz",
  "key16": "2ZSuiyMLXiWDscCMSamiygzAxKKdP2oSUDZfv9Zp7NEHszhqN3CFC31Ktz9XtRu9c3Bdb3UGLrDADZQPz75tuo9a",
  "key17": "a1KavLMXcNrbPq8fLvEPugPyj8Abezm7tGgJ5qH8hhkB2rXn2ZgP8sqtRi6S3eXaZR4YhH1AocCG3o5SZoLA9gp",
  "key18": "3LBz1huTf9Ggk2RE7RD93rcTvB4Rfmnj3XytoCKTmLxNziDLzfzCPeKT7tLiRNCLrXqS8EsQEtpTMUQre6trJ7ec",
  "key19": "4YuihTUmQGLYCg7ZgR5SLm9aWodpb8heYySv2bgnurvnYewTaZSDTgVTDaZX5gnVcus5WS6SGmSoGThGkJDjbKaz",
  "key20": "3itSQYu9tZYtB3BNbVXzx9c9KdmjP7QKVMvZ8B8QE6kbwNPWSjLL9XAT9e3mhFECQZoWMTCZZG4UDo9rErH9YGHm",
  "key21": "2RBiQLVtmb5srL14bo5m4AQw7KDuQdwFSfgc7E8xtinEPxiGyKXzzgdULwjC4S31atwEtFhgyEfU3NAtJGMa7u35",
  "key22": "64zGwyNbFpxHCGTYNvcCQtbwcPLuW8gdBkMgDTmnRGxD5oXckpBCrBvbgf6XSXLGzXBswKbJsJgEdwQkFjvNy71J",
  "key23": "2sSrxhNThBCfgxb8omif69mA8wip89jzFDnmdFgt9biuv2gtM8Rq9VCgJjD8W8aRU5mnP5KPDsiCN6cFcjBwgJtb",
  "key24": "3wm3ziBrkC5jjGzpsZKb3HiyBn6nckK2SLrhWULjhZFs19BTYfjjKKW4zwZj49Fmu5oXP7dHTyu41iku36F98tkr",
  "key25": "4jZw1qETPwM4wtYwuaVUpvSbTJ2M6FWkgvfZLTJYsMd99Nr3dC2UZ6br34F55e6hSycUXmKLoZrKVHGcmqPw1HFj",
  "key26": "5xWs4BaoiHhGMFczCjaLDjYKjnjZeyuNJSu2xK3r3KTtZhpG9smTTSdN7KYnb37QFTtckHC3kLvXoPCViXtCZSeJ",
  "key27": "5zxqY9siR17Lvhw9xARfdwEmPQ6b2jkqZYeQktVQBsSb7XZCsoXWrdvuymdmmH8xxRcMzoxcaHvXBdW56v2nGaYp",
  "key28": "3oKYG2bk6ek3GetZmMn3kwBVw2PG2HcXJAfPiS7HDHydktYDLPVr7Qh9AByg5z9JxS9gWtrULhD37bGqZkZqG4ZC",
  "key29": "4ibCP4d4z4LmNdoMR3i2YJxpsgqbTc2BPNRk6t7cyPkUArbPEkbpYYxsBHJi1THrTihsc384wBwkPFDonwvnFzp9",
  "key30": "5VMcWJdhWGA5zB9pvDiPeBm15PdrzpCdJE9Nj75sFZGjChJKZkkadiARge64QmgptJb373rfSWmSfqf63hHpLidA",
  "key31": "4J3tnjkvw944dFmkcbxXwjBJRftkfSw8GfUJGe8sGbtArtJke99yXhP27uBZ8MHT6WGDsD899hwxCgCsshaYfLeq",
  "key32": "4wnL3BJwBNmsXh4HDG3GpWnskXr4rofqkCCuyWzrBY73LE6Sqr7gwtc14pQT3G19e5mid7fQUPJuyunXduZEVeod",
  "key33": "5VLoE5SXV5EZxxVnMHCwCscVSGZrWZPMhmku4zKFA2tyx4AVuaae8z3Tv5rLHEHVPuazgm5FHKn7AcbVGPQb8GEb",
  "key34": "3nx2D5kS3s28L9LgMQB67E3a3GihiPRqBVT57zQZnLvpV8ds6mikhawwYyhuTNScWANjEY5kh77kGH7P1536oqJY"
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
