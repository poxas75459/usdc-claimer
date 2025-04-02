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
    "5L7hzMpSnS7TVHLEwmLUW1rPyBzNzSSMjN6uBgD9DVhNMZMPaRk5ynQUV2QnupbgzwekcZuiz5oXCkpiGNV6tSju"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XTEgt43MRUYWerwamoVfHZExo7uKo69vshUtF4ZzP7ksywJLNosvx2qCocpFtTNaxzoqfT4wo4vgsmXe5piNNjF",
  "key1": "5CouW8A9332aUARGTRLkmvhYreSsoU2SFi7jdLi8PgebCb6QdTqoXRCsHsfKp2RsYxcfogf4ZuJQcQ6HwNEgRZ8B",
  "key2": "4gtYEkoQ5vt9ix5x2i1DLcbAwxHdsQAnf99Y8uC1BLYrQbRuz3XBwzfF2acCv4UpiuT2dYKhmxkPn4BgaV1ZL743",
  "key3": "ozBshXzrQrE82E7KLkRPrZkoGK23b32dgGGbcZeyWRCyzhHSnwjeTSZaaftHqAYULmMEqjSnZzNY95rKfQccpaz",
  "key4": "4NeMYBUkF2ZVJNcRyY9kUpb2YNmHivSXAkqifSAgFwJD1vtbguA7TPZcXkPEGXsj99kJveBa21V9ZNhHs821rVkc",
  "key5": "46Mxq4kxVJ1Hd5jeCRq5abX5nobcovzKb76Lp1uCA1ZSpwbDrZSQ2SnzQRd7Hvz8uJPNMTR4eWZJbQt5doRDXVdr",
  "key6": "2GrrDDdmP6yZLiMCi34iejv8M2cYHNiEmgeiMfszv9xyUfsoSVSqBLME8BoYw4ruTAfRFhxkofwBoQEhK8Pg1qkp",
  "key7": "3XfdhArwNUG1khfWGhnGqGQ3wGA6e9kPxgmVuu2B2gVwXUjbbu3gnXu7BcWttuevySE8saKdF7xmEPCyZMAK7ynG",
  "key8": "35Cvxqq86XPXM4mk9RnGyrmm2TC6HguHFGpxTdHH4A5UPoJnAggFu5VtB3BQpkoVm8W9cYtH3aLX2ioWnGTZqf6Z",
  "key9": "QyhDskEd68JW3Zb3zaEkuRB1cJLnbTmw7V6U36RR8KooG1C29FZaivEhDFi52V4fCPNX9LBABcr62oHc8UQrkvp",
  "key10": "52cdnDDpwUnJq1EnWXMVkkdKCJD4QWPEwDSXtYfy1fLBEksKKbxpDMCuithR1yabojfrpkTCDmLvJ9bs3mHmdwey",
  "key11": "5a961PAAJDJqt1LPshYHmJX5P4g7tV9MUkKRdwxJaWgKoz4C1BAJ9DXraXLTjmpcYVFhR6G85qqdSYa71W1uiCTE",
  "key12": "JRHUfeTzzNG5poc9a6FK3EaK4TdJKnqWrhkKd8bjtv8d7coAWTZq5ZdLBiJqiBBujWruRNhdotLKd6TYmRfhfD4",
  "key13": "2JBU8uLUcW5FaqWh3ooxcbnBMuJ5Vw7U5QEQQxeBQ9yumAG9z9BbctUe7WdrgFRYth9VQrMKHXPtft2MscpeRgA5",
  "key14": "26faY84zq6hb6HzHN1tindJM7py5tEUb3oJdfLW2AybULYNk1BuKe98CvcX1cMy6wiJz4kmbeCvQvy8yt64EZmMn",
  "key15": "2ntbSJYYmusK6njr7ZwqyVZyynL9EVMiqDQMnT5znhQwAbmsGNFR2MrmBn5Rx9JMuUDnjRUr8tdS5sryXiGfTaGw",
  "key16": "5pFf7YQbuJuSnzqLsszd3fwjnsuBLm1xTKc4UJfXRtin3tTE6AFsH1fayD4Nq7svC2ZgnxojtwtJzezoetg7WHQ5",
  "key17": "2iGJ25WHqYAmHETUnT8ZB32K4Pu5txpWQrsfPAQpvo2tninAi1tuJ2freJF5oXQrhVnrbvmmgiW8MAyC4oPQn7ug",
  "key18": "61jvknEQf5J2F8iTGbsENoCEBnjhFPenf5pdVwAGY1s5BT4NitfQRh736W7YunBTuU7SnbQdTucs5VrQbghaT2Av",
  "key19": "UQkkv2NmwyLuRXfFoF9QZz55Qa5myr88cMkK6GuvgYJ5Pu9Fi7C9vUb7DfhefvQmMyfKp2NH7uEMbAsfFdZoyZv",
  "key20": "5D7n5HniXkuhEWKiJf5SDkENv2iJoaVc7CMHSoohh2mfxgdTyKaGRR1Dpmw8Fc5vzYttBpfYsFJwYTx3FqW7P7Mz",
  "key21": "wSE5sHH5JWHR5sA9V8ws7vKaoADhWatQ4WT65kPd7u6WuP2zw7vMGC3nsd4wX5JLuHtQKPrHaKKcoQ3L6AXnXXE",
  "key22": "5AufdodXQwAK4RZhHudLbzKNsv7CTa6phqLrn98rRcHQLFa5d8jiMKJR2jGoxxwzMfCbSo1hv1oZs9Vy8YiLyRmH",
  "key23": "4azUZGLLnfSAcTfsqFJhrK687fCowTqu2DvAshJRNVFizRh8p6rVpDdXRogBujM3KYHvcsBhpmK9q1ZhkZAaWxSj",
  "key24": "HXGPbuv9iJ1gNRhH3TmWD1L4Ptpo49uAtUJEUNVBZtKXm12yQKiwFVpXbM8cuQsF6nDQtjWq1vpPmii98wLGXs9",
  "key25": "RwHjCorMghAuQwzn4ahmLRhfiZ8emh3pY1JWJA83N9MYFBr1WbP9BCZjSW2FcyjMRuKdnXZmhqYXwVgnLpE6HbF",
  "key26": "42tZWVHe1E45VeDMKbZABjJMokERSvVPhwofNfizsPPWjoYGin5KjbqSSDvaea7F2DpdU9hjfYcqhmfgaNitMmqj",
  "key27": "2P4XpwgiBte6kKTVztmH4dAN5T58za2y6AVc5H7zGcknu4DLkSSE5QTRxLx72W4JEz4uuYVovhwGJYDdhY5grM6W",
  "key28": "5riJxkHmiBTsMhLUAN8sQSUcwmt1ngCpZL9zJTjZK3ZPUAqEWynxF814boGmqyiMEDYMmYPPYM7ahpboQSoSEFQK",
  "key29": "cxKy4ssdVwp1dvfhT3yeyhR2J9dYpivC8ZhGSfCG9SFZU7SHaPWRW6PHMpqSshqh71oTPW1dpfpFpPq81CZfLQT",
  "key30": "5fQy9o8bCADJrtmvdZt5h6e6yBbgCXwvAtABVBrF8Vor4Wnh2gxZjSUrnpDMCXrKtfnrANyWdYgkc7jSLfVJKfv2",
  "key31": "2AEYJBudAiQQXN1xt5bboMDPgCUmVZ721vW97BWz42sroKZNv3CtTXDWrbcaWHesj4cx8SK43DyqVjtNZMuJVu8G",
  "key32": "2Z3QchUtrDK3zqED7LfSz9EQpdfMrBqUqFAe1CMUzYM8mrGV7Jaf8rbbfuJijhX67dYYAduokhRjvMVxaXgh5mvT",
  "key33": "ZKXyCoEM4zBw54HJGoMUc143aDfY3amMWqaCga6kDwMYb8RPSxMaeiPSSWxnnXuGVaZocBmAYYFgavVoNjys57j",
  "key34": "5PCUEGk8gEwviDrhX9USyJLWCwBhKTNEBRAhf7q6Jd5nyC1s4pouJn99v8uwz3befVHhraRWRNELn16Nf4Bx7J1N"
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
