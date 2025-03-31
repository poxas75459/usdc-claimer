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
    "Hbmv3P3TzWw6bDNGmvqrhpXHFLeqsddw7fFc1jtpmFLG1KnsuAAmGnkG8TdUxNYt5qGVVCxcwAzDsgV1BahroyM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PwqYLL6vmWtFSKUTnMziGCFSzXtsMqbm5jAwaijSpXUgaWM9aWUTcQSh7Umx19EL5LFo2UFF3AuMpUGiXQ2WRkd",
  "key1": "42pkFcjE9S1r8NY1w5gFaBYXpdoQKnc8HSW9ctkXB3F2fVXf8vAj27MWTuSgdjVcMZfBJEeitrvnWcxr65Hm11v2",
  "key2": "2hiTqzPbU7mGn2H6b1rud3sbhWSRZz4cCUi732auGEy5gvtZ2sXWqqf2q1bsaVg76j6J9Ev12qwgxCGUJqi5SjzM",
  "key3": "3a4HM8RwTwVNwZCCoynzDaWBx7ttf8biMHvbTwv41vfLkdW9bK2s4kU7HbREFQmZGrVz4vHu2vPepShLMf6YHt8y",
  "key4": "5b6ekQT1CTHpjoqZaffmA1Z1SrRi7KZRR5iPyVFnTgSJ8cWbtrFZgX4z5ShwS1nNUh5BPdcxTNr4cSDanmUCcT39",
  "key5": "P3LLqAess1umQ9Mnhpt9zB5QQRyNXtJaD4XYMNbbLRkf2zSyJfmxzpEHCfh5LGFozjAH6uW52fT8oTczyctEegD",
  "key6": "5aJ3q5j4vn8M23MdJyxSxrs63zbfKfCvet9v93rBp54As6e3VdwmLZk17uEECRCb8MiRKcArpqBiMoTSrKSTnGv",
  "key7": "2KU6XScpYfkB7fv2MPZ5objY8roQr2nFzUhgQG6Bo9mE7JBhofxbUHC3ww11Ziz3n4FLLg71Lgvxf7kb8XonKTC2",
  "key8": "2Njy2TE6rRRnQYRYPi2VZT32JQ7wXuE5LhKTDFumRE3gEnCcr9BvjMHAeEoFzJwBk5rwzBRGUcC9gsoa5NCa5o7w",
  "key9": "4sFcKgME5CciwNLP6ZMwSjGJjSmV2JwYQHxciTsmAuY7emqZfxMCaXWA2VNrDoF6qr4i8EgGKaKBVPrJhTcv7Frg",
  "key10": "2He2EdviyKXxAAwSDzHV5LUub6BeR96SCvhx6bQ6CYNTPaQraxDkCqCaZCE8jFU6LX6NSrAZwRfvFrCXCTSpbWBC",
  "key11": "VeapScSgYrqVxDGF76jpKw2gCws1PaewWEVYGNgDDEhkdcvZktvr1AvFVE8idyYAAoMCkJ72e2A1cc6nZdUrmFq",
  "key12": "3YwXaodzgEAoKX8yUEFXkvLd7nGJUcU51xVieGE9hLKsssQUcSqoh28TnE55AfgyQ4Z6yatqn3t5LKxztGUVkRRV",
  "key13": "52JNnqByjCZyPMRUByWsB2FJuEfRqYgzJCTqyHLJwAe1ZkzmbrEtsSrjJMDw6ym2YBymk8oJXU2PH52AoNmTwcDB",
  "key14": "5N74YEFsyrJoGqHCy9q2mHmdUsyMHrdJPfvVUDvnxiCCXbqAeDKUZfW3PmzZBKW47xLWVdqQVwXdyKUSWLKUjypP",
  "key15": "37vAdAxea3fUb9YKckcofTdnLXiZ2ieunt8eamEeDMn7PBjnLYgU8JRs3g1BZL2U1xDjSex3GWzjx8bV2fNYXqU2",
  "key16": "4smBo9CYxDNnRjGCvFNi8NRiurfRvrhPnChELMYNXsWN211WaAgLEFLXW6XJm3HyWi3CpC7Lx4Hb98fTfiXxKnZi",
  "key17": "5NkUiAprFjjJXT41zJVGRd4feU7jWz3Rijb7XeygCPD9714jVxyvMg2TKQvjKvqc6hXRdHBUqWHpsYj3A2AceTm8",
  "key18": "38yuhnVWDgkrzW8XRyWMhaBE3JACEocvxZq8szcCMn5B9CN6SgomoQjQ2SMnC48jaX2DYbVwkywRbk2RSwvFQsFj",
  "key19": "4BoCuENRynBdm2UC1ZsR9aXz4xfG8vnGRiQTfhsroYaATnVS8AxUL12i61WEH413ezEPUZuHvXNsQUx2eqNvHSAN",
  "key20": "3LZC1vBQk4jpbwgDEbmhP8P1eRgLmCdrj4zRA6CLAVVJkruWwEncnr2kiLeV7mZnJSxDiFibygWAyvJqN1S31N7Z",
  "key21": "5FwVMFBha7gu2pvve7os42mtQgvnTDHavDnrBH162PQ6yUygn4QyphSquv1arpyX5rbAWn7nrWsUfg84DkBNfrYA",
  "key22": "NV12fB7JrjxmvnjMDSS23RnEHSPEd1a7cLgnGw88x1kQX5MG96rgRMbZc59YsTmVTVJasWsBCBsznmFNp4uDMec",
  "key23": "21yioEiGS4U7QjSLyyfRrNuux1WNYeT5njbKfkDeCTomDaDMtBrtxpnemqquZUBJxprTA3CXJEX3FSRX2pJnyzd3",
  "key24": "2sEvfCEdLH7hJbq2dvxcyJd76pbn3ozoUrVqtDu8U1LMqpDzG4PHMWGDtHA2uGF38XUkuFDvr2zu4moMZD9TVDUp",
  "key25": "wvMUXMg73xBSX2MgEiTQhiP7ynSGHCrtnf45xYMkVkwDGsHKNxfvbgQiqQ8tVn3Q27yvhTraeAMKA7LHBYXuyeY",
  "key26": "ssXAddXDkfomgPPDbXZht4usfydWU24sgRPJ2EJCc5UimYDSudhsWTtKCGnhjzSakq7zHBGdwgv1WxyvD9jNETv",
  "key27": "tpVMktp56udAgcWKcsQYAeirLM4coWdC3vrDUkFEMSnokyfo2c58FauYSZUNCicsdnxET6SxbNdtcwh7PBnaT3h",
  "key28": "48LEM5u6U4UR2pGM7nWyeQEYsjW7A6irvoMX9Jtdt5CRfFri8GaRWvom6i8vPxYJ34K1SH35pJTqtyU6quPoNHxm",
  "key29": "3oaYyKpXFYyypQoyoz86qx4CG8VXhmq7iH8CaUpLueFNWMsfssnKjdUeXQntquwEyg9m4MfDcWpmWCUQHuE9cNHX",
  "key30": "2sNAFFc3erYd4V4zGQfxGqptU2EHet85pSKxGTUzyiUSpBGT9YVqA9uqKrFXakZw1ujXGMvPAwkhF4CXvTWJbx4r",
  "key31": "3qma96SJap46oRjEB3pjJb9H8K42XSXhWk7MqczJhjHKgLcFTH9JmJGg8k6VZ2pFg79BSP1pYYHLsdFACUaDewC4",
  "key32": "9xppoSW7gYAoqGaZj8b3QxX7M7NmKFzVTsLrXMiWDow84D5ozQ3X2tmB8cuHgownfYJkJP3UmEyWsWkd3nR5Yjh",
  "key33": "4T43WaDD8t5eCotBCGF8gKHPSkvLRpacbMe84caEi9goD2youJaXBXrdQTUm1VEsZ2vjEBHSquC2JpSvtZbBCNjM",
  "key34": "3J5F33c54rRzf9qxqrURvjH2Rnsb3anAXdV43phkeu1jARUx4p19oy9S11k57eDpfgsyQJDFyZK15AHuXMnZeBXP",
  "key35": "2ajna2nDktsoPNJZsyy2Z8EKDedG8dLNrJ3hmmoAQfLajz6M2A9MoXsYcL77EZKmeLiaUrCFBaVpLz75MKRVgL6K",
  "key36": "21HBfm6GpVVJegmK2s5tUY6HwmvziQvRUC8KXXt9XNa1AMTdBrzBUrxDVuLiDGa113wo2rHfvQa4BhCXVecq3ThA",
  "key37": "TeKCo3wk8EYC78E8wazcMUYGi1zr6ZorNa3bQKmxkArnovX2BepfbJecUSxRNrHRpvyTngXWKqaNfKCCeR1LKM7",
  "key38": "GAceXFaPtUUAE5T47pp3NFK81zg2dji5LnncPDQ66MVWYyPXB2GWc7DXVBrMpQq7uruUgRx28yScA9fEaZ9BBRA",
  "key39": "5nLecrK4NhQoL5H5NNMAbpPdAxPpp44TuUMB3Qko7zPo5nspGMJRRgH6ekgbU9hjCsW1cik2ztQBb2h8vHbZMB8h",
  "key40": "2SjqthKZz3TcFnqdJfMwXmrYTUn6ezfRy4CEjKgsvRhqdVCoJkFaQQDv2EnvkrrEme5aqAisLrqAgn4Q8zL2Jyyv",
  "key41": "qteabY5ahyGW3KN6yAUq3jVYBzginvgfa41Q3TbrZzoQbP1i5VXdPDi3yYZmRKg3tEpYodDiNWZCuhVingfMAmE",
  "key42": "61KJ62xR7gnuMsr2vqfEDjpXg2d8iS3hBrK4wrt6AF5edhzFJZNaFkZC45ZoWy9UPaRmWNzCWETsCuYcZDQDAsRP",
  "key43": "4ZGhCCo4bnC9z2ZzFSACWbPwffX1Rn9U5V3K6ckhmSXjUXXp9tojM8frgfWeHSncCHFdMo3AKqCZxNXMBASQn62P",
  "key44": "2vRkZZqdTCuUvnhTVvhnvW1mbsRpGvYgzDkHJFx3zACbgY6dwvS1zqKhduUBkspb3QYgWJv93BFKoPLE7zGqZvkm",
  "key45": "3eBz98xexmC92sZdNxuJoW6pKH2nyduUszmNYeHXWhNR7q5gMhFuBTQr61kgJkEgGfkAqbXntvtt8fEVd6UokckZ",
  "key46": "3Fbkk1D1k6czBiuTS75K1Rmex2hyhssrDW51bnApQBCLHbAFbuhDiHp7Ynq2nBNoHq1tPx9HtKD5S6UWJvh2ia17",
  "key47": "3Lc4UVY6crfEdU6NZzhNpxMzv2CAYBbDmmECs78d1D3bDfaqJJwP9js6GDTHrkLDkPaUyZFmCJz33xAw2QFGVTyL",
  "key48": "5spzXcRcSeaEKgyy1d9DnYpNfqBumvphTjxkKSyNhMz8gfJyDfAC8ByCGwDp4xmPpjhpeEyZ9uXSXyE5jAH1vW5h",
  "key49": "4sLjK9GLbijp5vyScCDc1Pr2umButdnEZvDvWVaJdHe3EwDUXkGeCcwTJmxMH3uL9V4JeMYCX9AHGF5iGv9uq2Zz"
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
