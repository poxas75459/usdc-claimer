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
    "3owgKLHLn9HxsKi5uFU9hmiwQUowcw8GMdknpYzjRWy4XcxQjGfRmvg36HRDcXhdcLfpETUKqzv4uDnE9nWhNVjq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sQFEcSDmwvQBNyDmEJnNhJUKxZoYG756zkS3wP5ZcPN5pY5zuLUTcsQ55LARXo6s2jVTdQUdYHzNBtufM4DT4Du",
  "key1": "58rJTZ2Z1mJv51KNUGUiSedUexHtSFPK6CHk5Tp2JAvva8pAYfv92hgUA8i4gKsNSQTbGtSi1NCUxHTiv3LAcHCQ",
  "key2": "5ehxSszaqrDxBD7Yt2iFSdfS8zTW5eCrw7GAPtDmojKTZ15aqf9qQdWM4P1raBmSUM78oTS4mSjL4mNywAcYzd2j",
  "key3": "4WPxDVUVTc1tSoAUa6sJdXfHarzjLqx1TsYqqojrWjJE2oUG2x5e2egx14yr5kdTEXBYGjBpmje8yDqZ6MXgJeP4",
  "key4": "5dnKpejfH24vcwAJGkA2MGhLKGpJy2697si28ESw1dTZ5g5gTCkhbtvAvnH4qPLAsCsvUQSx3me195iyTf8pM6kG",
  "key5": "2Tdq1UpD5nrLYpTmFqtn6bhgh2T3mRrtCvU3ScnVo139qLvMMZQgx4bMr63LtEHyVM1MrhZy3HB91JhCB7E4XNVU",
  "key6": "rj35KM1fqjoX6HyBCbtvx6fgP43HtHwt3goexfM9RSLiD6Gax8wifMELHcSDrT1UHiW7sNipmcnBTXWtX7rEy2r",
  "key7": "3anLdvY51QXz7SivopF7Ec7pqNnTBVXSe7pt7n2n8sFey6uFmGEMnpcN1bzvP8r36qJvYr5QeDYLZvKnhCimg7HP",
  "key8": "4oDqTPk9Fn8rg1d7CoMDhBCVrq1m4iHtqwjucaPJv1Q7nufo3uapgY1SyzrBKB1oa68aVPNE974SPZJWUqD1uziT",
  "key9": "3TZwwAFYJFL5KRhKUHpgKvcmLg7fF9GiKXaXC9iEhVB3ytK7mkojnEaA9MN4euWCxBPRVNFoSav2CTHhmkCowv4i",
  "key10": "4LyFZsqMCBGm9vwt3dAFJVjnK4xbXetc8vQLwTaeLUd4D2ZNwdJdaTUr4rVb1ZM4zqer93ziHLAmtaNEaKxoCUjv",
  "key11": "66fiJadZsCgtshK7vadZ8jgUkMM19gMVpRiwQZmZdtDANPDEicKAh9tRjqa8S5ib814LqMJzprPMP9p1CGJZhEGe",
  "key12": "65PPM6cEemVdogZDLCtGSPTxMc5EsmStDAuf6wMPJGk982bwCQcThpFwmqUaEJn3UiRR2TT5BV6VGp8pRkqHa1Zp",
  "key13": "K7j9UvMHQaHXxnZuJBgrfga7vAsSq9ESYKSZbPFC4HNkSYrmyLkAb5dsxS2HD7jqAzVaHTaGnqF8JjdUbVSTDnQ",
  "key14": "JB8kmJYziUZTo3AuAoAeYa44xKf637UBvFseZQHZVxtvT7tozRNweA6QYXXPpJeYF8NpgEmwFuB3LbBnfcMYjGo",
  "key15": "3ogH39fThVSzeBJn667ByRg1DKzU8j9oki7hEs2fhXHpDu7VoqMha9bzNDrMZrQaSa7NRBiXcorjEktuCuuFLTTv",
  "key16": "4uz5WnLiex2m7qTSp9VkEyqcThpokudEha9xvZu9PxLKGipp6YZV87xVYwzGumYE8vJMNtpaQSUGzTy5BpWaWLqa",
  "key17": "2Wwac2wZew7SLVexDWAfqncu5SWKNhbSrfnUahi51En71ReehYRFo6MZN8KzkwZW6Djz2swsPg5r7UhrxSiGdatv",
  "key18": "2hEat4t1aKCuHRUgU7NCsbNxSa1q8fHBJVoV1pkNGU2bnm5z1rBFq4qPEvPJTygGwd5dRuYnqHdc9wwcRE27CVEB",
  "key19": "s9z77x9C5pzFrMkM1Xtfh1RXtuLdPY21ExZgtji8XesHaQ3WVc74ymEwWBc3pLg9PbomRx7S73DqU7vSg5q3E7X",
  "key20": "3inaimdiCj7u3yuoV7r5QCUezy4GkabJfqDAbLBDv3KyhtnpYW7K11XBkEDmiLmd52FuPv7QyEzjJhiJiA2jVdFK",
  "key21": "2pxKjQwBBJLWpCxK3QkqPZR5kqxYenLYjuskqJdUNMxFjEm5Y3HckKGsAysfb3F54FMt32pfQGiYVQDQcCewBbNY",
  "key22": "5TsiC144Kxm4GkWEvzRZzr4YFMFA4b7zg6BihdXeUVXcs8EuYtuZfp4mB8bnXxRdrbM8ujApxGWTEMMap4YupeXt",
  "key23": "3KWS6boE5kRsDHZfdPrXL5p8FJ2fecvtyh3AGttgVAXynBqQW635qDvrP8LRASbAWpii6Ke4RVoGSiqJgJipAMFP",
  "key24": "2zpWpXFbkk3fXu3HqoGakbZwEaAdoiV8N3iTo5CysthjPDP8jQ8hKvWj2TVUmL98bLCa1hoTqvB3D5yCrDPEAm8q",
  "key25": "4wykJhKGj2fftHcr5V8xSjyeiWrrj1VQVHuWqXdfL8PLgeKe1oBEzYeXfjB6EB8qqgJKc47rYjuCiZZGhhRFvHQ3",
  "key26": "3wqRAhiF1hXaUptr8EjTyVJAMcR4XHhB98xfzscFa8xwKKYKVy8QXGa5WBTU2pNGzV8RWMnMS2wu3wZbQAEWv6zf",
  "key27": "KLyPf613A4eixEftvH1F5nRxC4Rtj8frY58r8PZrpuJcvijsp2gHDBmGxcpok72DVjhmrsXv5hirUDXDJxpQB8V",
  "key28": "59BR4pQoVcHKgppE8BkB3wU49AgZKdNgUtaYYnsdPgDFK3cCqzyZuiUd1LKv15MhYbpv6GjfMJwHXFJWg4o34w9q",
  "key29": "4JgeBDZJpRAwBsfUU4BEDuStRt39kyE3Z7WRuvrAdKP6goKku7Gz2U4FGu2DEdkEKuNRxRciM3vbc46bcyEkHokx",
  "key30": "2BYTm5DoeB6nMqPSeX7PVyKaw2mro3baEY8eEvHExYc6JFn8UZ9kFDNwT94bjzUxCTZbjjLZuxf2hu9MitkXJmeX",
  "key31": "5tQEQx9jBKkr713QF9fRhzKBneRTMUyvAYg5KSPgUKyGXjevhonXDr21zwU2to9WoneJH98HrdwoU5PnkhRU6dgy",
  "key32": "5vUA4evLqKSrBLYXh6iXLyA4EPCrc8HEUonE1RhscEW3XLsEygnP2xdTEsAvyc4KYiMgAj8c5QaUQhke6Nk2jVNy",
  "key33": "2k8M4QDMpy5QrXALFAKLLUUB4FiLbMisVmCvXjtJNaHQ7X5bXhmHPtk7721ZsWBp6Dg4a1vr58PyicrujEq8s68G",
  "key34": "3RYR7DN8y7G63rveyrN9rNULhDuuW9g6xCc5yzL1YgpeaekV5ojVf5VubFFG2J3XNS15tRV1DyjewMxftqcrrZm3",
  "key35": "ByHXXs3yu9MZYD6bWyDHCU9ouwTJETwihRRESAaxWQF7SYVDnnFVq87DbMVKS62hQF6BsRKirVhCC1b6NWd7aJ6",
  "key36": "3fivSAPpsFsyW8uEuDS4uZfbqHy4mAbSDymHtsT7yJix1oYqkMZUr6LCTJtxbnRMLuKQZzY9yhJwh1BkHBCsfoyz",
  "key37": "3CHTVt5SzpRceniNes8GapFArtHwznUH2JzbJ31suBMJ7RCYpQvSzDExi85FbuJgHZ17eR4iVDKQDuRBadUyvJuj",
  "key38": "GhmxaPnqyb6qBZYZG2GW2G2xCNk52eJKGcS6haR2rWwbUvDtA5QvkCTEVSU6hBrs86aUKm67LqEFa8pmmhtNrnD"
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
