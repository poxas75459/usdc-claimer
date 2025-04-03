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
    "2Qsxbnmc3yM7MNLPKCxwmgmGkmx9kLahg6U6dRAPuF7YUj1UbrJ4U1qaApg2P5dLGmr1rjhWarhiVrhhzPRpVHi6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UKDYPC2BCepHmkTLV9mPiArcFdoTjeaKExx4PSCR9EFjYdaFXnoN779VND6kCokXMdMnoo1xUZ4kcuyHXo7JP3q",
  "key1": "54ytPVTT3wTmkjfCHuxCNDoBMoyqJpMMnQpEkU6qmWD3mmgJChxPbnyKSDzH8aQC463nKmGhm8WcP4DqkcGeFxbi",
  "key2": "5TyrQJzjCaS6sCxurhpPeE7uCwKF8qrzaFfhvQNdKSFD7nVmUoYFQeobNyzLZLk9v8YiEF46RA6m9G6qHmDLGk9h",
  "key3": "2L2xQ7jKbTPiLkkBeauiSCMoJ1v2n4uPD9eBXmMGqr8MLHUevFFQx3Z6fDjgfC2YTkWKu6aeq9pZDsv2NXuESZTp",
  "key4": "jXeqnbrbXZu8ChxQt7TqPs4KnDTYV8ktS5aMkrEejhLKX9AxboRjDw8baQgS1Gi69wjSaKF3wMZ9vHtCunvPhsP",
  "key5": "eKq82JeMHFw83Hv3DqAHnoANSGCF6L38wt2Da7qRyZHcdDEjUbXhMpsW3SQyYNXCby4YRJ8R3obTgJVRHeDqJF7",
  "key6": "9dN4Nv8bR3Dghum6pm3EvSxSp6iTkLpdvf3n9Gad2TGBTgFq6zFrLysYKtesrcKaFZxSEmsQVwmtMpbB2WAtjzi",
  "key7": "ZrKZfLzMAGKPDZdL5kaaDk9AeqPm2n4CtCZLfym41YZX3UHBTseAr79bCvq3BQ6Qr1v5ZPABnjKFrvdF1xsL5cy",
  "key8": "3ynFi3qTFngR23DA7s1wEQ7Na5TFiiB1wpan74sKwbcKKd41kV7k7yoTrydF79dxSnjkbuRJgbJRhWVZ9VrDbevf",
  "key9": "52ADGQmC3nQUjSTgkCSCeds9uXvdvV5Ykv3WaJfZWAp5LXX5fcDw2D7PzfkQn3kzPQ6aMjGK2jAdoMv28ebvDxtX",
  "key10": "2otXY3nq3iXzrbo6Wcj1zDPGEseWxTA3QVGfh4hsddxFwgHhRr1wMx1Gnc7tUXjCpgUWw2osuK6xWSZBXrp3cHBt",
  "key11": "4Sz6XEakgdT54aEPmfn9KahVH9EE5jCAehgLg6sUb8QdUgKFh5bUcuTpsgMwPndFnTuuRpKYDieZSUGCBqVMew8D",
  "key12": "8Q7HXT3HRw9CjWtbySo7mBTYwGJVfKrqXoRBe7CLDeF1j7Kb9vfsDXeDthPqCKCSNA6ygUDPv64XTLtdmgh5U7F",
  "key13": "3eoJMKUCRPAF9MHrRtS6pPgPLD3578aNcfh4qg8ocYdgf7xy8xgLGUdFz2Ugk6GYFMtA1RkYohrz6eYSzLLaqUC6",
  "key14": "63xNopRDvVYFmHbTeCkezKeeckHVVTtGjybD1joatxyEUeDEZHeQ2wy9CcgNzG2Wq3kw2RVTEN6zAxB5xAz38CMj",
  "key15": "2xCH7K1gPHafwVomFDnT4EZAtYgyN34zrnrnVB4rZVqjtwqSYqPJ9JSCoA9iXLLFYcb4WbusQwpzh4BXVLxqgVJ1",
  "key16": "eQpHrBMuog3hNkK7dVvN4LFndxcvC7DUad8raF2BorxBaC35Nu1M6qVQgYmLituKs3cWW7AssuGNakKF3zMcKYH",
  "key17": "4KXGuxnzgRWCLXy5mXtjAmKhM3jdxE8KvCyE62fK8J65nHJhFdRCdkLG4sPFAvNzdkfyia1g5y4buwe8qxu6xQX9",
  "key18": "3fuxv2T8q5MvZ9DbKppjTjShkK3CLwEW7QLBaHn8gj2dKhNJa2Vwb4ukYFR3W57KMP8FWhCrQHa4gJ2QzMcSaKvT",
  "key19": "5QVZ45cxNowuvnSqpSnctjGPiV9tLnpecAY6acPgiXca5F5H7dUZAhVpsDoaAL9iEyjidHbJLqc6PxkakMUZJbA7",
  "key20": "39bDUyMEjzCXijpuGZLQ17UZ7hBabeg6uWhrh3hT6bLmLGao7BVowTPQ4vsF9YKzPL6wfJ9Uqwzxxr3kw1VHVDw6",
  "key21": "5Chu8GqFVqkPq9aZEvVmYrsxLkU2d3eUJ4CgQvQoDoeTvQLBiQ6Hu3gce1F1gstkF4AHj2bJFdJ3JcC7tyW7799e",
  "key22": "3icxQ5KcuU41zYcmnBCG4Pnn9TdjPoStiDzB3u4pMRRV2SgNbCHyhAok2J7p18ZTpLJhdKo2jjKkMoNzMqhXM9yS",
  "key23": "4vRZfLTUZ81SG4BseXDEK1LsBAdCwhF4if7vaRH7MwoChyB8j3Zk9fraMCiCvyr8jXbYqDztatJCSYDNworHzpRc",
  "key24": "5vrJSEnCmTjjXHxWRDdjvWXYgC9zhbqvfimuYHZ3wyZDAR3QShW7B5psAsrmrrr9D9WTSbdJ2jRdfxHNASYM2FXu",
  "key25": "3p93TrGPcg2BjzAMAn785NDFjJba6L95S8cbMd52wPxr7Dy3DcwM259bN3osfzvWVzYNdjtbSta3SGQbpAy4z3SJ",
  "key26": "43Pb2SuVdrt1ztcvBJeKBWhDmJk3nTwDHuhM7SuQP7FH7Rb3vp1UG3asXFcaWcM8taYywBGonMtJffQr9zR4w3XP",
  "key27": "eL1xxWCxMxphy6Qifypee3CsbDL2MA8ZwgJhDxRpvJVEEFXVtDSEeevsUvrr85Jyx7ssESsdFAkawbUDiDaYm6b",
  "key28": "3oksp4LLe7xzo51xeAzNdJjwPuMGMawmXjY43PcwkCoNW7byaTWennaVyoLL4H5hs5oKL7Dd9BCAeqF257nzSy6q",
  "key29": "gbrb4xozUzm4mvf9MmhTCtmuK63kugrxK5LyFiNqZijNQJ9Y4dK6AWsLRgnpo45SLJVsEEKTJRggCo22UtqPshH",
  "key30": "CU1LQ1TdwdbztNbKiQmg4PqQQaJjWxBZxJyHkNZhS676vvXxcuuD2MrRLHbs28fjHjjmUpdmnUBPWUCdUxekKwU",
  "key31": "a6BhF48HPsk1RSxQWLCj8P39h9T236h2WeyT2P1b7JfnsLEd5cViLgDLgGHVsCcuq4fM4r6rnZg4rqonX5PrCyb",
  "key32": "5N8Qkr6wT9tXdXtaD5UBGjnREfi8kbrKJUyHN2UNGqBxXhMN8GAAfYi54dZart3XV7nYX9QELekGyjJpLthkbf5",
  "key33": "2vMeGAUmwnkDmMPsm9H8M5SM63UN1SpDqTxRuPaasd8ubYkGEPLVKQz8knH9etfLELBECfsS8gw2TwmMf2sV8kF5",
  "key34": "4U49f5oP1ELq138fKms2ezhCJKsGLBYYExsnaYuQR7mtnUSJEY5EpFYvQst7xCKj6b6jDgSdfvXiKKkMmGq2tPnB",
  "key35": "3StMaXA7sTpxDPDUthyMGu3qwSGkfqucqmCPMGqfn4HgSZTyto25A7MV1kWMmEPJGQ8LCZU64qz2D3xkNacrukqa",
  "key36": "4fPF6xWjBrPuzuXuvGNS952XnoHqEeHddnHxkd8ifZVvfnnEaWHFcYAByeFwodXhdNYNXH3cEyK5sodPfksMBZp7"
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
