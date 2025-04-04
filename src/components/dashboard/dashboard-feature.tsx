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
    "2yUCbDxciebY2349USwEAQkepqgqxpxtmAY6PQzhQ4umQqaGcKnnGged7sRhYqpCapEbbwatAWBuVbLvKRyPahtX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HWRHig4TdAxzjfSLFnabtkKmuKiJ59itq1VXEhSLT4S2S2AZGACZ2vPKV4fgnc41wPjG53o4XHdNSsQtEGmbpsn",
  "key1": "2Fe7u83o2HDa3KAch8ufWcsYiqkPGEJg8NwYc5BYzoRR87nyKNTuhNatcStWXPAMtWRH62V31XwQ5N3AThYXoRRx",
  "key2": "4odovmUJeHFdjs5JT7q8QnRC7vs7vyQABtTdnZmBtV9CJJK4qzgLEZWQhYTZjgyxvJNeEVWyKMGMieyBPvSq5y8w",
  "key3": "3EtrZh3nkmfHgbcKC5Sk7e8UzrF1EK1JMGh3Jsz9bwmRXoVmDkTymE4dqNNqZgZ96bLcRtmYLcXtoXgqGYtsj8Mc",
  "key4": "4ssDYy8jfhukTYJyNHSHNk74voVVpTh3fgTvdMWdxN5uy6kUa2sKunpX7A6XczC4wJ1bJuG8N5CjP7S9EKpY1Jxg",
  "key5": "3KhGuDpycNeJVbVLTyVHMTM3JNjqbgvjKzndoGsXRBDZ8SUdxbanmaHxzKyXBNvE5SSWKJiXL8YizfwAWNMMMrND",
  "key6": "3mRSFasWnqMtdw4b2F93fvhe8gMVsnRbVxPw4HE6R2AyDfEUQRQBzttLmPHvqAUPNkE9fkTeoiqPsX6zmV8QZzgW",
  "key7": "48wuLatyQBFbybXWXneBsvrw6WMQrXd2b7cnhWbE11rHYfPvkeCe41qhoKaxvPESWbeCf9wrekPsofdMyDycowg3",
  "key8": "65YuiPXCGrovBY2SpRAYFjYyDgoFswJ6ejb5CaLc2E5CBhgcLMSYHSVgqaq8jpCfUTj5W2DvHAS7DVK1Z4SJ9YTu",
  "key9": "3q7pajLKesBDvUVn9vS1qSNQWu9Zvwyfg1H9dGbXQQoWDnzn7TRq5ULzjr316YwqgkB1GtgNKjToeq28teBUnv3i",
  "key10": "4T6wLtRjfsk4hUQDByzqmKb78nf81BxaS6et2PNhHmUxF1RgsU7FZPgsWZ2oEjXZ8K7BerQQ7E1Fz9dCLKmXYq1U",
  "key11": "2jjPwuPcsnmTKJoFS1ggr8XXiQYPthibb8tcKGJ161C5o4SA5S7JgHVULqwUNirkc6nUSx2ib2jSoEBuzTNi9216",
  "key12": "5UjPxaGSrfMCtR3H8Fp8KzcV7HbGrzS2R941cF5oYLbLwtrVbr4x9dr3hgr2njiM5b82qooW7VYU1eNseDgdDvpj",
  "key13": "61Xk9aNSG2nAzgURe7csA5sAoGojp72RKNjX8iwjnWqBQZbakmeU5vN3kCD5amQb8PgpmZJsoKzwiMUuts2ypfJf",
  "key14": "23YtYAk9TqtpVuRpxaTzcYzXCJfebPVpNtRM3xJ9E1KGDCoVW9ozBRdU3skxLwvnrSz3pmD94vEZDenqr1DiSp26",
  "key15": "CQEShKP1hSwxhhjNDUZpPsdU6RHkQxd1VyCukhJZE9waFTBv1bqNvSrLeWVSMwuHyLwSpdfhJMcx1NYnMc87c2i",
  "key16": "4td4ph7gPEiedESpbo4m9vnVa83UG4933ZwDLpa74MfEHsz1dgAdMi55g4djEuK4LcxuiP9guWVar4FE8DzE1qBS",
  "key17": "4tCohhkQQaBqMvbGSuA2PfP9BqDnFYu4evz6EVFe7cVvo9nr7XAB4DZsopABjxwq7s7R1haL6vdn6gxdSrRPjxmv",
  "key18": "n3agzo53EQQS8MUNUgg7CVqU4sHBcEsxEos68vzvGQHiqEtZ7nxR4josSTm4rqKkbaZVBo8eNmpDzm5vUVeg9j5",
  "key19": "3R2rxc6sMb167JWqbNQDLaHcKMPWaAYAn8RpSjKKAQydsGVDTuqUQachxsqYDX93aycjFD7DJju41pnUjt93NMb2",
  "key20": "22P2C7oJRkM4c64ukK7mV58PCLjioNE2yQLC1wfvCF1XyZuv89uBEz8yWxK3VyyU6qyD7FqLzRZVudb8NMEF1eeA",
  "key21": "4d6Mi4fSb4QBMt69wiDZwmhCAkKWNsJkFweXbMavdJ7LVsW2fuzGiBS28RDKpLrHSSynbPu6YTcTt9AYzymKhsSx",
  "key22": "4XhLZLJadJKoMq3EhdXMxgtqnJX34mTkZGvkj9ruZsSNhi8yG34cBcqUGsU77P3zUjqtDCWnoKs1ECXFMcPzN5Ew",
  "key23": "5HPwD2SgCgqbCzyswybNcxH9s8gJ8LY9RPNBZpxdgCn5DLo5TxKmzN3nA87P2fJ6Ehhdcm1uJMak19tXxEmdahr9",
  "key24": "BvwHxMQP2kZZtgjz82Qzt5BoRVgE4uDdUNvm8y2XPrYA5DzPZ5xjARNAUHAk8xQd9Wp7FkwMTcjmuxUN32Z9Zyd",
  "key25": "3DJyuoyJU7SuwhACAqTkyKeoH8qvUU2zBoggGCEkzZjq4RVMmXzWng27F5bFwnfCfefes5YVYzQak2XivefJBjp6",
  "key26": "5QNti2ks9Lt5E3o3boDGKVsMT6c2N7B1h23xt73Vmp9LzaBTkPPkQSirs7z8teajsis4piCq1S4GqhhbdVLzuyY",
  "key27": "3VPTS3Hx19BguCXfNz86ScQccZRcoLft5zYws6hVAW2Ei9ymshY6G7qNCJVTRPkptMphT5ZF79SkFiKeyhBTu3oD",
  "key28": "62F8GX733dcWjN7WtDvfBEud1VLcCxU2VWaqo3sgoo5u1zPq56KSFm2GvyM5wAgPE9hnJ3GXAxeBmwQzkLM7oKxR"
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
