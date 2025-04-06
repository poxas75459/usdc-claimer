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
    "3CWVzPiFm9rME2CrhKBHbYJSyj8C9eBZd8qbXRq5omJ2Hhu2hAyQa8DtFqHoexGibbp4S9ATMnEmKhdpZRMrXitW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4phqkHkCYe55PFVv7PbcDDfSbKHgntvsWXqJJKbRFzASqxdZYj7tSFA9ftGnf7jm7Jqp7j2Ex1Yh9PNNPuQgq9KD",
  "key1": "2ZrvaTsUFPh7TvHtajeSXoJ8ixY2aRdGLjamRwVCS3EnQcFew4v5DtAYe2JoNTNbb2NYwt4qEi3jpsPq7Z2n71jN",
  "key2": "Txb2iuhwG2qEAAsQ2b8Fn9tEpxZTRgCFKCGQKKGJxgajzeDisx5ZBnKAxRD9WHqsnUaN9mqYVU2bBqdoFbfR23P",
  "key3": "4XFiVgCPXYkNELwvNowfcPwcsv1qxsChWyu7VuQgVbks8CEGzYYEu6iQyyKKmwNJoyLymWmRkviGbrJpTroFTfRn",
  "key4": "3SBV8H8c6mRj1Msnuf1xQ5KcKfPqSkBUjgDJFAmzSkF71i32eAwuvWBDmSQioY8covFb3NM5i7mHPqHbvbyFVCMR",
  "key5": "4KoSxwfh3iGQncX1HeoDYSgUMNBn3sSrmzsFRJN1nw5pY1iVBPRCzEfWS5NV3vNTSeH4Ur5N3NhpkgHUZkkwnsEJ",
  "key6": "2oKd55XqZGadzBekUFNn6Ts4Eb2AFFz6ZrCymaRpXuad37dVHztiwjM3Bi4bif8NuErGf1D86DWJDgh1nEySdKN1",
  "key7": "5Fn56PwkYCbnC6JNu2QwqfGhecdKiwUBPTWhcXgHzNvWun9P6pJrmLjdeYMKVgmRn62xWiUJGzaNUiEwHZmKnvqw",
  "key8": "2R3EuxNHsGX1wzaentzokjfSFTQMfasxMG3gm5i64XxF4ebpYaBMgwVRwQuThsVMxYrW54vKh8UMUsDRJ6jM1znk",
  "key9": "GNDPFrhYnx8kXyMatVrqELoNKNGDrg3uRKUYLPiot8qfLhNpxqTLUuzQ1vBwVfZomKJYAzhMvRagJvvhHE8DTVj",
  "key10": "61XxcaPY16TFo1BnpQbvaNrRcLik7JHvsyhDaJnKss7bxNjw6NxmzidRSCMA9xEUk1e7NfH2ExjKPyZo3sTRjGFh",
  "key11": "3nQ28oELyJhi2T5WtgzhXZkMX8pHdh4gGN82fynXLrtSyrCZYLduWYucujFx45HE4jhKLX8yCuTqqnUwRHFMPKvg",
  "key12": "3HEwXipUw6Xx34WtMa2jxSppUf86RirKCw8paN3ki3mYCKk53vzHqHKiYKUF6Qu5qfr3V8zKTfS2P8FFpB6ogqki",
  "key13": "43sPVjc6CvcHnuZZzDUzRvu4nsatsWMwSPpatNPRZzsGVXzGBHYJ6avoeQp7uYPxahhgTk2H4w4eyDtDjKsgMZTf",
  "key14": "2ZZXLtZExgPuK3zs5VuGT1MpnjcvEkZtnZd4HsEj8bvYYTo4ZAVqZu6hTzRQiK46atqbHYnV5YD6WhJ7oUoxgHNs",
  "key15": "5qC59hrTjTfFqqY3vDaSF9ZAUwwDGi3BJLRNM6fjnfi8hRNEWhxNEB8s9nLZNCqcTnDNLAK9vWhdVQg57WaHToAU",
  "key16": "3bPsZB9sj9QNNsbT9r1dm1Rxired6HFhRhD7Jjz45cbYWCe2uVLrrKrANDF5hbtfo8cN9KpeGUwRkS3jadPJb2nJ",
  "key17": "9UGLstgn7318u1vDu7U95bVcE8VYEbFsUqP13uK5TuB3B2zcVHtFfmf7hVDjKTYqsMsvUrqqCBhs5Ts19Uq4n5E",
  "key18": "rcQEDVghFkpZr61xG2vqrNE8d19mgp6fmGoTMEim9kFNSZGecPGv8QRcBiJLSGgbQt84gEa6KMwn1hSs3i3U3wS",
  "key19": "4DiUs3vvCs6tY71c7ApxDxL5phkHmSJAWWBQ4YUTE7aerrZmJAGU9jxcQDv6aryZ7Rh6wrtbgFhnsVHvJQkAQm1d",
  "key20": "2Le9t4j4mv7HMEXGZyEUMrRuRuhQ8co8cjVyb4rQmAEspZb6fHKsEvebV7mpo5axnQ2cwdvhWVZpbvpCXG6C9mUe",
  "key21": "RpZxgm3aZowSjrNRQRkDokwfXqgNwy11sDAHLCzWdaP2LgyixTkqQzLMSpRbHhMgrqMJfk3h4Bf5gSpH4ZBFVoC",
  "key22": "dEi78bUd871RTjyJkGUkudZ7QN9wKj91P81HSW9zMQGoN2yGg3HtCgN4mYeqxeuWLaGck2gxScqrqdUpjhSeoxq",
  "key23": "5pLuXrY5MPMbEWEYfCGt7APYUn6chzpVCPBcDH4yKUi8k3YPhCKPPfbkLAtZekDbWEQAfvCBYYAmxVUFeirQAfE3",
  "key24": "2fgiMGo97CncNn7j7cpZj9LqDCBGyefn9LsSk3zzLvFji9TiURJLkAiZ1qtVJURfvd4NCrFi5jGCBi9EBYp3DGx3",
  "key25": "21hMhsuQLEdocACe3vLeZdFyAsfMH89xYNHkSFm1RNacUREVz4VJU8pdL2U7n367Ce1WBzintthpJd6Rfp6EjRtu",
  "key26": "3ftvroz6UPTdNPahssVwbTyzpZYgsr92ZCN9NPnLabgmHsVTbihaka1qXjo14a2GgrSApprxmPaQPFq3FJuR8Jq9",
  "key27": "5bGCYGz7RhogrmRc3BLP4CCG3WKkPYwdjCDG9gZ3MzXqdjhYqur7LQVRhvcY7uRGXqeLeY4cDRmC2ekAgL4Kx5kt",
  "key28": "4iQ2HbZ8ZZW4CBtaLZ4prf1Gx4rYD2qpuAZeEMuxxrBtGQdbRuK7jEYFd8SYAGArQTmpH4f8BqNs5JX5NF3koopj",
  "key29": "pqmp9UjiUbazvo3bVT2bn42RdTHenzGSKEDx1LBDb8JCVW8yRsqNZeWata1Ab9ZP75avSjnKoC2soFfPTEowBJt",
  "key30": "58CcGVa9oDtKPBLsQj7KDQ6WQAFa5MpeVxtT2J4aX9mr5d2xYtHs5m4SauYKQeU2R2A6xtWKHKhctN3hN96qvqZz",
  "key31": "WKVzspdG5nfCsR45KxSKkfkc77rNLYENvHokhmRqkZPQepTp2F8Hjfv2NpbNwgyG9Btd9k88AFe9ga3dF8hJNDV",
  "key32": "27MJ83znxjbPQCRfGtgWL7XE5PQMnpS7rDazMvVfw1CXfNCQZzi5LjfqHmsupUofkTBJ9YsQ7UBtVz8m9VMppz9b",
  "key33": "59TgCVTaRthTspi3HRyVzDi2XCDCsS81w8w4H7f3AwQATP8w2cUU9ybrfWuoS73bbunESuT3wMuRPpaMHAMRuHom",
  "key34": "3g1HPf1km3sRhc2AXjo5exAinywckvvZo8xnEwY6mXUL4cL8BsGbawN4KkWuSXDLE5jMxXytgTNZrKsLPQQi2P5K",
  "key35": "5XxHNxU8ff7DJ1bAXR544xFKhcpc8gfwXaAEYLfxPzNbuKxM7eADcCu9egSj9am9uoTNuFGMa3xvhovJ9xSQqaMY",
  "key36": "2oQpndW31Q5CfjeaxMiBh9CTVhPefaHy97nhBPFxPx3kNxn6NKjLwQn9n8NvMTkR1eNACH4vk2Q2xW96q78oq2Jr",
  "key37": "659GSVoobhQjWxPvLew1a4byShXGJpj4W5VHCgmi5RGFAV46h4MychNZx3rXEU22tbL87DubDADNoxa3MuSLSAoi",
  "key38": "3xWRnc7VUmJK5wGvg8TtLcdh8v4iDtovsYNY4beZDRiJ9tUBiQUuRJVztvqFPkBBpt5v9EFdtzsp74KG8fgH71VH",
  "key39": "5FzhAj9kfZq8CeCfUECX6ckU1PHKvqEcSnk6jbhry6BMYg5wHkDyaKFmRasBx3umUUmVD4mJb2LfbG2362M2MXhm",
  "key40": "3P2wtn8oAe3T2nhFGq22vEV2cNvWkxT5y72qHP8ihAhskea2WdSbrmyVdhEQTJmmet7gDQowmeewBLMe8aBoVh2E",
  "key41": "3YHyzxfumM1xmfFNAkb9B8B3dAD7Z5terRrVgQRKXBwQWUP2xiehxGLJYqfJB8F57fEquXpbfChiWP4drWqxSZGW",
  "key42": "4RWaZT4XGAbb4T8hRNHkYGnLYrzdCbPvGsQQ97WB281jhiA1C8GuWLwmD7YN8EXXkNRUJahT4VuNKUqMmR3vAdqm"
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
