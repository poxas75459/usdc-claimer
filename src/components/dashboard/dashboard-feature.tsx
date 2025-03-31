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
    "3D4xyhEtobFMJHMKrzaYX4CSUKvdFY8DYPDE7VNQ2o7ropgWzfkf4WmCskwzKDuqF6fkm5J8Rw7cD9nPMmugfDQa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63Y8tGroLgWFySb1WnUp9FxEztjFnLf8owgqzPqHLdhUYdoUAt8B5WDnPCtceaMMegMAESq4Sty1kYcjAU5uXzx8",
  "key1": "5f5r81pGpwv3k1v1P4JANhAKcuQ4kwnCQDkXHYgL3AqpCqFPAMMHoGw2RdvSbgbeXVT52u1hpt94joVvDnC8GGXQ",
  "key2": "3RaSGZRsZRYFnM2zLN7Ziao6n4f2jUZ6esFQnMaPH9jXcq1m8wYBX2eQ2g4hQbgEu3kxY2tcURF1kCrSWTWGJRV3",
  "key3": "33Khd9GRSgWAQYVtMCprzDAZ6YFR83c8C9H6jFpJ7qsU6xkFkT9poCJ5wwQhe7CvLnsLs1qXgtYEEY66UWVJHVBH",
  "key4": "3UC4zFidGDCeYrZMYVr3i88327nRV1sUXr9r657tsYaRLv1iQtuY6rT7SaRHtJA65dxKut28UwQpB1HdkGt5JtXF",
  "key5": "4zJimaMLLYt7rb9NfNZmkGutVoDHarM1jGCEisnRMMdHpSimnK3bzNTLCN9sBYR2D75U7dU7hxLHWVV5Hic6ufug",
  "key6": "27CeWLSwXVnkBEnf9YbdhUsMXQznZXVfC9GH28DmjahxWTEU9WYcTwjEsVN2rXLyPsQTF7wrVqCzumf6bknGZhh7",
  "key7": "4AC5AAUqXog2oCY8f4gLvvikSUE26vfA5mYU7rMCiDwQL6Xu3hRUUJqByt1hToA7nNTjpmnpXAdWsbnN1FQKihEi",
  "key8": "3pBu9B2CQbWHaAi79m9fRKkqV6iHsQE1pFGe86NRA9emX87azLYrXN5Ka3M8VJNVRu3hT8FQ5ptw56ZQeUKBkv1H",
  "key9": "55HMGGb4AVEuYiHm2jfUDT6Fr1sB5KfJ4gvwe9rmJ8F12CwLzf8s1vAb4WA8kwc9shD8NHzSJSuCFf7f5hnqbmxf",
  "key10": "5FAuQrsoSLXZ3VnNEHCEGcrDipwHoTF2nuUFsQGTedgBeFKsiWykg4U5WQQHvYVFQ5meqVEPxb7cwPqviYqCEPDm",
  "key11": "4ATBJrroyu2aagSySpr39raKX5h4UEjp3VvukenGZ5SduLU6k35cY6WHqxTeJYDnmZ4qpu3C1Bs5CBf5doEXG36R",
  "key12": "5Fsq4eSy7tdhWvoQbWmdzozr76JtSkUFjLxijMYQ2ECBW1dZS7oDRn8NXR97vJUNa8TmMz1BHzY8wVmapiWCoWTY",
  "key13": "4A77XXuCYY3XcDGMikWEt7s8uUQFLiVAwXNTuf3hRDFQotBPw853wHyFsTeTTVknDwbe2horGXhhYUMwHpcWnq2v",
  "key14": "43iMQUAJSyS18anHMQdNdgu98DFPty85hWQ8URBTkYTCxZAXG49eCv9NsdUVkmcXdVAeeeCs3dfUnLWFamniZLVV",
  "key15": "34HAASjFYALgJEWJ4Foq7VMNDXtcMUkhhrYk9eQ9hrzXqi18u9SNH6miA6J22Q6WKuKSvAL7MHTMpXcTqyCHmFn9",
  "key16": "2z54Cap3pzFmUm6WTHMCZSAJ7L4QbmYnDsfZrm1zBXkBMtHGjKx3CUzW7fs2HXrdzwwNCd5x8CbvumsMSyhP3SYN",
  "key17": "5vRxRhiiwnECMp7AM93xVZyhh26mkKnzEb6AwAcpTVwmHVrJDUxkdEdcAVGq4x4nbfypWVnr6ueFFQ9zZ6zTChvn",
  "key18": "5mH8PAY2zCRtG6zghyFoCS5vSpPjYjrmNShsHdkFP5pwm9324o6NzPZ6AMDm7gax7BazRKigXBMo5zNdXwt7PkcL",
  "key19": "3ACJ3V3pr1ekcqMTkzeE17APXLqVwUrngpcipRjq66LNW4aHqp1QRzC7SMJkssYMXxrQQiFnFVdJvQd3xtXqNXuc",
  "key20": "4kLsxNv67S8QbcjqwEyzfcyWzUiiwDRnSGCMZmaLwxnHkJuKEzK1ckjTSsEm1S7p7JY2wYuaEY1LNYwnoGHozayZ",
  "key21": "3gcpGtHukCNXaBmSjVhFQpgziodmxHsA38pkKkYwYomRueTT3LqF9FfqMvyAR1HDkpnP537KBYzG3PjyCMhVvoLy",
  "key22": "3YZiQDL95X69excfSce2QzETkKaUmGK2ZEdmMW3ZCFBZii9y7AqTvRmBhB4MM2EJjXssccvUuFmKYZKW3xHFyYnc",
  "key23": "3r2UjzByh6ZuoX4uNsZWpUYT6Gq9jUazN5c8f7sjKP84fHfx6jHFgVmhJzKrhTpW7dHKaaSwCRxWu14L8ZpnaByV",
  "key24": "NEReSozdQ5drkytjABz1Rgcbi3CajYs8CDGfMejt4TYmZM3WtXBqnSBooJ7CG5PJY54HAyhuDyHey3yhqM6EJAE",
  "key25": "4F9NYnQPsWvjz6WpYEWYEx93f5CY5MY1SrvasLZFL8MAGCuJbF3nkgzHqyW3y1TWWzfGyhLsDJemx6yp8jpVzUf7",
  "key26": "5GrH2iB2K3t6ipuiDb4hLQbRCxcedEMpKfAi1QxVjyE8NjaZtj8XxFNKSEDrKJtLKtwvWDu7UysE31izNwQecweb",
  "key27": "5N7QC4qtRfvTW4msP6Fb5aJEatLKFZketR8HSEDN75BU7gSWGix7YL1yrnWnDsnDw55V5ghFUvAqMCpD5Nvj2h21",
  "key28": "5xWSChvwHse2a9wTTMPczeH6rG3VMry6YbmUTjfTppmye3pbpoD5QGajYM24YhkGuD4gdjMGCHDgrw4HPXv4M8MM",
  "key29": "5QFpC2A6wZW6YDXjzbqV4eKa5CSto4NRLFqgPuHkjfmQgtaRqpWtbM4inBv196YkdgH43KAYHV7CKkhpnu2m5UxF",
  "key30": "56JoCMAALM8LgrXCksrTSt5XpoeTpiVPaRVEYv9jVS5Y1fkEX7ffXS8QjAR9bppMvmMSnaiJafxLM6WPWDhUzJtu"
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
