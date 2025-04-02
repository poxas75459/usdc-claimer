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
    "zfqPRz88A5NGGkoYejgcA2WWnuyURDwoydJt6C9TsDN7MGr9uw21LyrVV3uguwMkGEnfVDDzeEXqihH3xHp1pbv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RqGTh5Bw2wYzyhzdMgBLQ6AYK71WKVw7kmzmhwN3kz4iqFB3FCcnZXauCDQhHtLFjqmPnFztP4w71AaCzMBFm6W",
  "key1": "34XsaruzBVrDgTj54TJZGZH6VLnefPdZHYYHAMsLBh9Xu8WE71ic6jHTrQ65wp4tjuSbK1heVqE8h5QAZEteyJjC",
  "key2": "3hb3xczFqiqSgPz57NDfxuCh314YdtffWN9CXLUCRvH7LbwRLJrsfGLwMBmVAxwLV3kZgSBR4yFTPYXD6KjT9EaJ",
  "key3": "65EYHddH7A9uSq329qDwsxE7wyDSciRxoeDhXnb7tiPWUefwrzP6JaHYS6J1WG9wV3VCSumTWXEvcN5ZhtHTCxHL",
  "key4": "2AaUNKY3uUj7Z3hHjesnC4YMEa3jf2viGyvMe4bq55CGr4X42Z23UEYPG81vjjWtpp9hdsBuRdjrP7SmfHwKCyU8",
  "key5": "3uXb4SvxadDuBPPhrxdHsE5PQe3VJbRVz126skVkp2ouPWRL9u3S7m9iCGZy174M4QBBKnQjyhxdsEwqzB2h5NPL",
  "key6": "4LPbCM5JMdJ6tsagu64A39cFtCkif8ePvC22KppKK1b2UAG7EF34Vvsc5tRUGY4iGoqBg2WA3ytAV7b31upYA7FX",
  "key7": "22tKnJwGnQwib3yzFthkaeQh5HbyJXh7jS139Ja3GRkC5oUqU91Wu3sbMa6TBCZFFcv9SpFYEagXwKciam83taS6",
  "key8": "2JWCBpTR78Lad37d5pTrsYQwDuKtUjWV3P42ojRQiLzQUkGP2hfJWcpgFzytndUT8WhbgXnMab2S7tUmzBh7p2sV",
  "key9": "5QwHWsurGXbK2QMRqFzTj2v5ZQArFj6iEQW28XTpazok6pE8q8ADgLNVn5nmPz3GiUhkpbnRk2iQ4hw3ieNLYRA2",
  "key10": "dSJmWK1JVmKb4kyyidrX6rDjQcWkZC1CfZf55kBYQFDNLRyTjHmL5PpJYEePViWMcfv8no6UwN4uWTgEb9XuEDb",
  "key11": "38Md33yAorbvdBiRqFsuVzyH7faujPQJjuQY4Ltpf5vnrqgywShYKE1WG7JukoLKMkRERvJbCjJ8wBGxXMHBAqMb",
  "key12": "UdNqffBtscPtjxJZCVr3fsMykcr9ohX1KjkjeAUFLorJJtLwvuQT6LF4RKVJZAbqUMJYkqMo7rudzswZEhdX7dP",
  "key13": "4QjweM3k71gBttX8Gd81GUaRZct9udNvcUw5LXyrRCqRJFnTfJYcSq88WEJCQv7tkARBdfeEj9WKMHp63L5hyV8u",
  "key14": "5Q5bQicSLB25BRodQzkPs1XhbJ3ckte2kJmhcSbonkQ3GkGm2CJWS4qUpPSoDZJyQFi986e8iXsaN11uHZLBLfft",
  "key15": "3uEDZdjUE6YkVJySCdUtmMWq6BAUYGxVjP1LrnQSmEsJLFVoZGuGiLtmvNGSyn5LEYwsXyiLdVRy8KvMxzYuEBiJ",
  "key16": "4yTPaAN911daD6iDpU2k9tkqZ7k3WPPU18wH1hpQTDnDVmDSfhLqehE6922nKrq94ze4xdW67hKbAvT6geiNWbss",
  "key17": "51tTvv3r5NQzpUxM4C9mCDkbHPrbi4nAQN3XZFcNitdbRCLKLNrgHeFbzJUCik7jfSWLcFHCSb9TjogfkhJK4GtD",
  "key18": "2jAiKt42wS8ccr7JHuvfNwG3EdMaNj2CxGe6w48gaAP5fq3QJjjeJVnsk96YzoWvyXxRYP5NBKz9qxgRKdjHfAhc",
  "key19": "5XgLxfspJTZedgrEgGwLQKX96bbk2XeSqqrouFCk6V3hZSzerda2RAPw7qT7PAawAhwUpZLvwLDzmpP21vibde6u",
  "key20": "4m4nSYkf2HRLkVTDmd4nwErvtCXuoY1CcQsPd88URimqsKXh1FUwem9dhaebNWGpM6E8uMCBwaf2jDNJsGf6yMNY",
  "key21": "46LgyNrJKYoDTNsH8LfXSsA21LG41aRcJEyrYQUCPWWpsjbUEteaCpPJGVFyGSR4DApDTpQEQiQ5jfFHC6jHvQJ",
  "key22": "ZVqfQtWauGZzv8o3rxnhNK3TFmhdTQtQN8NAi8oBsC8Cv5X325mH4cKpDjF3VGXximxz2eQ6j5Qw8Mn8vd8HmjK",
  "key23": "37XUH3HBqwMowMPJaKGMp6TV5Mdg2rxqAJ24zkayT23LFNoobx1B6XYjQFC6iSttACSHRYQzU3tnsAucZ4ACEkZG",
  "key24": "5WN4oTzV3hvpdxP4VjsfydetW3mCmrgGnAr3bUxzT6dK5out8MC6SsByRUzZBHebxk1LVwy3fZnGmQ2L8dqCYSCW",
  "key25": "t96wtn4QwNuMqwXVUbv9MY9jSVcQXze7wjsDEEVkEGdU9rnKSHci6fTdfZiySiJRj9xLDq9UMpgohN8iASRKynZ",
  "key26": "4kWNr7UrkszJYridW2LSTEaLyHKN4bRpzbuxsnkhLHoBWPFxnotBDrRwFnCSUfbSVrtd9TiMszGiUVWpxG1hNwfd",
  "key27": "3jwcfoAERHWfr523ntgiKQnc5d6GhwSdeDaoAK9o6bc453poxB44VeRyb83EcTWqUcHQLgiCTdxEepiSdjTzC3Sf",
  "key28": "4oYKWZ38JqjaeGaydHD3S26KXkSueNHbQr8wW1TyA4JwR22nKt7rGdH6v5YwoKncCcVeeF63uVPExQYGzLfftGNv",
  "key29": "31EmAgAWYJrahb9UpyuYHC6Vy49FYNf6iwzwNsmN5tuGpaY3aJ6Tab99ViqDs4gEDVm3teU5aDUeJTpKgXYSDNu4",
  "key30": "3PBpmj9YTvTHFsu27ETSHNmv7NYETeKDs4ZvCGbiwNmcavurEtMEhm9NoEYawn4ASU7fmjmJ3YPNjX1Emupn3fnu",
  "key31": "eAZsNd7bvSN8LSywnwgUAMRqtE6qCNBVbEawGgmb8TQwEeyjvsJyumVns1nkWu8oC2LxUkS9vHCny36BW7Pn9e3",
  "key32": "4Q3XsnLjwRK16tfVFBFQMnh9CQWEi5aceLEGADiKUmBe5fahkD4gXVAP3nLFnB9jPgdfLn8r41StpYDLc5ff8FQX",
  "key33": "37GV8SErUuz3cYGdcpDqnSwhmBv5cjiM5rEA59R7c2YHmvYmPryZqwWDiaM6HDEQQXgK5NACwSfQ45gKDYxDa8W6",
  "key34": "fWNBkUtPCHwMVHSATsHsBFXyxo5fiLEWRPQtvAwynoUaLdvAq8ZSdhwCY3ST41CwJBkdPNyweWuVZ1Fgaz5xh6B",
  "key35": "ttzLhKwhkfXfAXdzJmtzW1ceTdnKPF5VtnG6YnPmgzpWAoPGQDM8UyXMNE6ZSRvvKdrrptnouKRyf2VoNWsKRk9",
  "key36": "269YaLKXGR1GKN75VTV8Av3vY6nsgmSdfafNSWtvv2UWcFXLVq2Eq2d4epYysLzSWUk4DS841nD2PBoZbzFbsrt7",
  "key37": "5SHefYMtqbsTLwqvRrXDUQcukjZgZfWJg2QR3g2b84ttMEwyxJWQz2rwRMkBtHb24yKn7vSBhPQzHJ6SPiqWxztc",
  "key38": "4exhPeDZHd4Y5C6nCtD2srhHQgwHwv5ouSw27JqZR4273gMG8DVtK2vgRvBHwiZT2Pj95okvyjTqHVgddsse6XUf",
  "key39": "3msdq1Tprx66AVXGcQf2jJapyxtJtGeg9V7EUuxLfkYmNgT1JbbEpLTKft2oscSMsGQhrtdji1AF8P4XpWmgVMKu",
  "key40": "52N7JJZXjC6usKgZ5zAyJdG5QAuCBDa9vgw3LsQB8cEjBrobUpZTFC7hLkz5PMHE11FQL5bUgkKF8kjVogdU7Pfd",
  "key41": "YheUAwEDbzNqKmnNWxdAkqnjRmS6kWnaTsbnzipMeHwW7q9R39WoRjij7gNkPnU5WET5bTrmGaVJHLxjnNyLWak"
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
