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
    "27RqtqgPMpoTHnyKYSB4f8P63nckpuepG3Sjq9c8Yzr938rKGnrq1bFrsFbNEuDFdBFbEJ7fVtFmNomch9ypdhxM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tq4V9bf6sPQ4Kuw4qByWzwFH7LvK6hPZiv8GvVpCTnjxu4gS7oRJaGBVMLvJBesgv88yje4YBMTidSPPzYZsMqK",
  "key1": "4xZw71MSz6uYH1WwAQxTXpanxRa7Kefa13euJTjuL6zXPQEC8Y7K5KmbNNCEJ8Pgm6FG4wGHiDzjxG8dKVMQ4ar6",
  "key2": "5cTGiEZxLLz869Biza4wD76FfnnTAZYHuAEzGkCZSmCnZv8TZSZUPMm6hCdmorBzTcUPFnXiYc4EnLFRpte6KKt5",
  "key3": "2ymGKegjQQ8am5c2riC13BNgMj2RZSF1o6zFkeY8V5r1v5GhAfJo7bxY4hZqb4QBfqUsYL1138TPE1XZujk2nBqt",
  "key4": "49UAsSeD2mFQvCeT2TYEhaCZRh9FWq4quBEp9tbWsVhiGS3Zzstb6PS4vfiAE9Az7kADf41jv2PhfekYmY9jpLny",
  "key5": "2HE5zULAK35FN1jBDrs9hVr1foTvVVxKFgy26Vhse3awb7T6bb3gy42QJo7Luu6Ng7qyxLAyJqvx5A6ZrYJr9PHL",
  "key6": "521qy8KAsps8WES4Ra1bsqpaJh7Acw9WNo3CB5ZfvA8fhHFsDZ3pTMvHrunVchyZVTsiMPL6jYphZDHEMad4hhUM",
  "key7": "2JZp3P8d4sfBmnFmXaSSZ9STfeHgtZ8XrK32Qc26A2vT1Re9JiHNPCECeCYXC5TBTsUyNhHzVjWzw6LQxye6gHjw",
  "key8": "2nZNEmpiZLUoAbJm4KTPpuxWC7XayjuMfCaTsUJjMLASjZi4Y22WQv4a37HF9ZsSHY49kxedzF19nEPiGKZEcLn3",
  "key9": "3Tx6AF4ip9kSo4Bucyjh9M8G5pqY4nXcg6G14Lvq2o7LuUHjimxtES5TcSscjxJTwv6to61LA3fHGAiQsZA1S4iA",
  "key10": "55uLdfJvw13yqrg2TuaAn7oRP1XthWN4biN1s6CKhEz7uGc1zu7twX63so1AyZhGR1JVAjHqHPPEtTkWFoj89wqv",
  "key11": "vGZkWTa57FnXqE7op86tErYvac8rCJUiGU25F89NBaEG9i7uYe7ZfV1sZuhwFt1R6AWm4vCR3z2DpbVUjiTiNNg",
  "key12": "61NWpck5CUjJJp5TqwouMtXsT6mL19nRuBD2iSuZZRk4Zm7snLDEaWyKg21hHi9VcU7FG5CZ5n8KwAt4wfrqss6h",
  "key13": "5RduzEQKdcZSfqYNf6B2nXh7poDtYw4Aig5JMF1yj85iAj5TNwfMGSVGCKXErks7teE4hcAvSABjodXs2EC4wG5z",
  "key14": "5v3xowejRbXYY84zXhaArQYSTNZH5dGGqqgeoUKbaGbRB3ADcFnGjiKSBje7Rq6v2MsxVnZD84zfPo5qX4LTwzzU",
  "key15": "3dKacQNvQ85V7AYeMG6PzjsXQG5zE7FMSQuZ1y2WrWnfF87sGY3c3FyQpuP38aVYixXZpVjisXDJ9MUuadKqUFz7",
  "key16": "5jMmW3XvKmaQcgzuAeaeYrEKhFw4WP761VWz6bELtn7mRkmifaLLiL3BLwDbQi7QXXbeUvkyADEbGeQRztEYDxDt",
  "key17": "24U5nAp6935ZdCjw7XftsbiT8QfjnXNaSwwTiF2W7CumG6SZQdtxaCYTXMTaCQ8R1SmKM33ozFRrFjAVaNpZ2kQB",
  "key18": "4SwdAFdYmikE817yZUL3X6g7NTEa7fFmyyvQtHQZRH8pbAgX5JBY6KjaavypedX9XrTx8cPPv5pB8SB9G6J3N3is",
  "key19": "28GcYt5hr8UVzUctrfjYKu4kLHPFq35dVfqhKxqNpu75JsKQoC6xhkvQZqDkt5wJ5wgg3SNrxD9FbS1LJjS314ut",
  "key20": "mP28KVM9ZPXND6tZZcKzxfEA5xgiqtgh7qT8EDDD9KtEAwvBVGViz2h1yxQKtdf1sjswf4kLoao8MdbzNFjr3c7",
  "key21": "vJAVCGnGejKdCPZhsUc52WfbP3Yb7rXbzdAu8eHisJ1stKESu5yLgSqtMrYwBqGyS3PpHVeh7dKQkrHQ6iXvKhA",
  "key22": "4DrNGEFgPq2KfYG5orkPEKyLMzidMrraCAQUBFL2xteWN5tBcQMwDUQbeuco2P6RAjnF7r7ZmCRdvgg3DX4s7n1x",
  "key23": "2UnG1nCmmD4Y2W4e6DS9NoNY6arywGwXmwrwb1utBzsLK7YtfD7yHvh2GNh9AutEJaP6DTp2sVsmgKnpniCMB8zr",
  "key24": "4Rf8ivCvL3ZBygbYQoh8jLyvwGvoqDWWvBTq17AehEj5ctPHVUz6gWhJmNUwFpjF8sDU4K1cbss27zSiLvaykjvX",
  "key25": "2f7skzov6rrgpimsmQMLRprkVuQrTS4Ypm1qooaEW2iUCg2fnhez7F5onmjKUbdDr7g7sJw1SLoLHF6PiT4P3fMu",
  "key26": "29P5HXKsqXf6gH6m2ZHxTSaakH4eoCtuSwvtXsMtScedfPBxTz7oeWjonpgC9tGHb1h7MsKEosnPH11fh5Js4B9X",
  "key27": "5UJtXpXR7yKtJUgKBSt3qaFGRdvLU3zdWaY49QhTcnu94srX5MCrHN4UniSLt7htheEByYGdeecXPb2WAcHNmBHF",
  "key28": "4WHDfPoKi8CdR6QATBSBGcaHJ31bSwfvsgzcqGMxBuTSiG7UVhi1YjSxe52NcRrMSKjFWC3bYURFDNuQovqVAEMs",
  "key29": "nWSpbDHrbkR8a8NHgXCtL3WgQwgno9zMZ7QiLmmfReBuzQqHQAB9C2387wgKoKYqwGYmaUboPkEoHVrkhbXeAVJ",
  "key30": "5zBF1hatPLY8f3MHsp1c8NtYe7GfnoQV7cQz7X1fsd9a6fJC6erHjnunmnsjT1KV9AcUhVtW5V4qx3rwcxwTBqee",
  "key31": "45CXkgphZFJMM1v6EPc7D4jp1JwqnBbWvpwFfvaxnEu12PugEVntW2eoUm5Qzist1k1cTNW3N6ymwnFVuGw77Ed",
  "key32": "5L54veXR132NRN87BdLqV6XM8hwDjYFW6zbhzAbWBNWDvpsGLj935xWrhoKD9mUooTjouyxqqwaF1zd1vheJLjDj",
  "key33": "2y6f17qToB3yd1sNRg9QaFD4pjrCbmaV5FZc3EWxLrKim8tKbRYEfDWApeXpwmgfLzeRqz1ePfxAD6bozf34QN3x",
  "key34": "5uzRgWxSRN5bxPkzYScWUKpMGRKv5bZQVRHpEni6uH8xHFhW6zhu4T8ExNveQvfqFMRiQ7Ut7FrRHRfDM2G8i9Sz",
  "key35": "59viNSCqvq9VzQaWS3U3ncQs75LmdbaJcpXHCZ4Q3Sa3dXkfFm5oNWEjcbf1aYJka7g8DvCqC29aPZt671UwEadG",
  "key36": "5eTKbXiRf9DUhpj4dqYDV4RtzhVekYLP4exw5KpxdjzvxwrHEuXzhXVnG8YQ94rhuYAmCZRVKGopZZkit476tBQ9"
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
