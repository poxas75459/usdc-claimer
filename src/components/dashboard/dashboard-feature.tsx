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
    "3EgVTJozh3XrTPeuf6xKEoq4UdyhEA2bfndvi2ji6mDUqYjHBkuFeoGpJCHETfbpcW8sG4YtF6TbiPJrQTvXQYby"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Th5okdrFHU3FcE3xdnfHu7XMoTwGxqwDW4Z8oB6yiryUbSWamFEwHLPCkmHu6drHLSno6AQ8ETPzrjnarLXLdaw",
  "key1": "5ug4NXLCEZkinDne1rGjNyTJn1bUt9Z6ZAnuZprqv55zkEq3FEYR6VnZ9vuABRRLYmrLWgCtyJhJgkaJ39e6SRNJ",
  "key2": "4CKGeXUChpR2EdSnpzy9oBJU1vfXHqWsGU9GC4HXmj3KCkd16MSUZFTbzKHC3VCV6hTS1oZvvetDCvJA5KAXiwzD",
  "key3": "5P7BqrfqUFeywKfVv1sqnE4ZXUVLJ5q1bM2raGGcWkdvQE6VKtmwFP33P85mz7tazJgoMzHsSRnDQsr3dz9DM4S9",
  "key4": "2Bxo7P57GPkJ13FgzHZpy98X5U5GAiMwSyGoY9jr8sZjU5STbVTAXGzigQG5ed281DHNQkuZtvomJS6VYzr9iDj4",
  "key5": "5qgHu8jLwcyBMgbwaujcM4jpmmQm1NFmLq4yKAWUTTvDEibxaYujL6u4or9LLokqJpy2eg1BnoSMvdMA2PCombJV",
  "key6": "3cvXwvFyRRiAShhfinuwrEgVPEjdn4Ny2pC2XiHkxSy1YnXMkZiVLqnEbkwuWqHiyGENYQijaBQUwqvtviitmt76",
  "key7": "ggby3VTGNbWtz1A9RYQG3FnBuDSWGSBmHRq1LrucUBbacH1yfsj949Uv6H3yWHU1wpTAtqmrJx92Jm3ZrhtqciC",
  "key8": "4YTa5QnaBvBnBmVjuN74NqhZEPBKHwpu9jyZNwi74xRdyZaxwiuE8SKLXYhg3dXYKZkkgcr6S1rV7akhcgX4VW1h",
  "key9": "xeNv8y2xERtDk7dAk5MYVELf9SNEPhpf2VVLfHZi34oUTGEZwV2nYeny3rKQ3U8icsFnSNHiqDdwYRPHCchqGam",
  "key10": "5zDTs6Uxon779uNfsFVmqrdsQcRT8TN2qEjLKTKFS5abPmXA4JDBxKG6bVcKXUybtpvGzFbN3WiGrS4GbbD3qHdt",
  "key11": "3e8YKBfDgxwkqcAZfvuxzfHQJRuYpZJPrnJfFxmPj3tt6rmp4DPXzN6sfgsG3vT2hjK4PPV1ovbp24Nr6BkdeT4h",
  "key12": "55h8o9HQW3vipP731zFQ1kQMrXFQX6a7NQiYng78dpfr27jp7h4e8jmypLpZrPA9x1HpNxUBnL974A5EBfiYSqbZ",
  "key13": "4TXt2wi97Ptwfs7bfJqsnWLXAGXgcz7QsXUUgKW79myM2otMSkZoVjQYhNM4LxELLBiQJHsbFAbQrhkqc5M89Fxj",
  "key14": "3QFBjq8LCCs4RnAsNqc2Gx4sZKTq2E7PaQvD5GDi2JGs9HEzG1UGncL1vG9cdcjbectLf4XRTMw7CHb6w5hyZ5B3",
  "key15": "5NNdUkpi8jujAifmMc2sHYM1DRsAv7Tv13jEe87cwQBw8itvMmnxQhXw8ys4NGFJMcHadFrdutPmUFQfAg3rdVog",
  "key16": "W7BjQdZdWirpKHMf1yCj6ZXsvxWypSzrV79Y1bXZw35B8goeSSeNmPpaM8KfoPKAcDufXzmjpqNEcgdJHWNCe36",
  "key17": "4ePL3EPLxbQFrusCRNTjQsWE3CHr9NR34cy2PFif5fgsCq5B3HNo98JhsXDB6LY4mDejaPfKy4DVXzUUeRxwjeHM",
  "key18": "3tqhHdBnb9AnyL7WQTnxH6LcqVKDWzub5Nie6GP8B93gqSDKCns4d1pNFGH4rU5eDqEDYcZjugEiLrkYexEdbt2E",
  "key19": "32FWJwBAjmzfF1GBpzJce49iNwZ5Rje8dwYNEzEcgaMZLVNLKixX48tqdosqBmtwojJGCPJkvnAGdV3Qwjgn8vNp",
  "key20": "2qNnZtBGXHmk2oDpAcLxzmzHDiu5EkC97AZywrWo8GwReK2GXT3Ry4kWSPEg6MQhzUQPN7CFUXXtJiBY5xHaWBoC",
  "key21": "5zbxcexGGacLt1vAd3fZZQdTtUEbdMPxaUhUbJyhTLoyHUARoqeP5DcNdPcmmswJBSkaP3ns5LoRZ1YP44LLWwuX",
  "key22": "2gEsbSsbFfjXiPeEFEE3ZbHW9EQsuP3D4JGSBwQaBVz832rkTZa8ekzA97EFvPvzmNFaeZLVnPuRruVkcfDgv8BC",
  "key23": "5T8XJ2X6LgCzh64zxVqydEjMhExJ8rxjeHjvYPrQ9Mp3o3vQ4yEshnH9FreLNxMGwR5RqymPS9aNSPK1Jvt6eCKq",
  "key24": "8z97NB67hPgLafo3M5hD72zyNSSySWKs1tcVcZfK8jRFHwiEpkkyQHKu38FRXffScB5xAroXAbZkwv9Qq6MJcb8",
  "key25": "ttXeEBXiFkjaPwkmBhB1Sz7w6pf7B3BUcMyHp49QQitNeWJWsnp9HTjMBj4rfZEcVoNfSN7Y73X4q5nioop3Q1Z",
  "key26": "2bMwJpfm6VhXnSaHgXfphhFCzVHVfmRCo8dBCPohnS4pRsbLofo9gpvBQeacmCw8u2qyKqLXyBbFbbeSfjEdFZnM",
  "key27": "66edbHoSANNCv1aDicPVgk3vEHx5Tz5BQ4TQFg2xfFDceYm8ELfq6WRdmNpMrBaDuzQ6Q2QDqNQCmXsnYaZgrFiM",
  "key28": "F9ExT3HY5RyWKtPefNJsQrnBc8gZ3h2Kqcmo4ebxzDkaxRZZ5ePdwiyFDXSXbzwKxLTNhL7FZJhKgegwkCVcvFT",
  "key29": "3zRHWKfcKrHKtztpJKGkEfT48ieS749KzCqctEdbntzdP35NapMYRLAimxNNWRzyt3tBqvSZXQzELjCvKJRqAFmZ",
  "key30": "24dErQNsaWiKq7AxyAZPkmxXb4xCUJQxwVhoqx5QZbhxzJuBfChkFt7TFGHhY5Uo5uUifyC7erKVmWhPhRQXS3LP",
  "key31": "39AP2NsuYE7tespzuz6MrTQUy2h2M72PTgu5eJpFoQnpkXfThUWgnDLGoU43orHf5X4NrBsQ2rxNMFvcX9WJj6af",
  "key32": "3aJEqZ19knK9LaCV1RgLqBDePEFjw4V8pyfdrMiv3TRLCsKcEa7REUm8mRs6Frc59amckoxmSxgoCDwitmSHH35T",
  "key33": "5UkZq2bcQQuiqNegzgqQsakXvwuoRbH7eAwjhyRGexwo3vZAnfBsNCwQ34hWeYbfQaVTGhssk7UBnpHm2PpBkXF8",
  "key34": "5EnfBGkgb264AjgaCK2wMf2SD5VNEuEScL72g6mbtRH9vcAQX3cHCQioCV1SRHHpNSY5MvYLqkjddPFNmvuFe74P",
  "key35": "4qETwqBmmnJPCwB4E4pyfWB7xctxdRxR5RMgnjEQFfntH5xGrVYiBV6oQjnUeUGonDbbyhfJUeBHKJ45kuxDkT6Y",
  "key36": "4PTBBy4Tue6RKG7zB3mySQHhVjcYFDEGtiEjqY69TaGtmgBit5Mu9m6sSm5RAdbm1KSx1HMYS2zWUintG5FmFHKe",
  "key37": "gymEezGvBziFKckfFHjJ5BFdqXhDD9xYA4iGvKaLJ7cCPZzN4Nma3PVnC44kHvRq1ikonpqjaFvkkV8SJPMG2tV",
  "key38": "5x4unyr2hfGEvfhYxFPfEF4VUDWXzLo4Y2pUWyfJunr7Vi58ipMCd5DG4bJKXLyV17LLi8ptoW5Q4NtqZjVb9BNJ",
  "key39": "2HWryddtfs4nk6TxK3z8Kk86bt4ZEEq8VMqmsTGxYscZJYdKHYwFMWqKkvLHHjAbzcio5vz8F7rygvoiMtDKTDPa",
  "key40": "3U5ShCF3QYzYiP5cu24G8DfGBV1xmpz87MAGxUwCWL1AMSTSVVrQvJvFpnjXw2xk696SM8FhHQRcCyUsvgLnJsJu",
  "key41": "5JJB7fGmLUPstjJi637kEWdH46e5hATM9kq8wSXM74npQX57t434Mxw8WWyZvmcuFbYqiH8ZmQgh95dS8hEwgTCb",
  "key42": "41J8ZVArvAJY3tq1aYne7HEDmcBSgFfFmMANN5kvKfmfiGyUsmPKMDiCUdkrPDKWyKo6W9er8XG9M6powaAeVyQ1",
  "key43": "2RfUytgkPamZnkGbDPmfqTXWLrt6azoAqAaWppQiEHvcQfG3RzZcvoHPtZV8q49PMnAGWXhgNd1nGdSpwZ7HiVxn",
  "key44": "3BybPBtMFpr1rv6eP5SviknUM2DCtCHBo5CGhj67SeZ78giTn2U1i1zUwVxXeSASrbG1aaCXx4qtqWp3n4UNMqyZ",
  "key45": "211Qth5LsewqfiT22tCzhsqjMLiBffEKLVUHXYBFQkteuNADtqDzuwhWFHTpFMs8mMVkpsnX8Dme56xTfpP5dr3x",
  "key46": "3scD1U5u5H8As34DkcsEuUBcX994kfmjR4HRSh172xavP6bsWxrZAgv8foRTCNia64NuKcv78FktTjVZhtvBVZVm",
  "key47": "3ygRgHoLM8KzsX267rLWYFEj1EcTtCfCYyAchSvVvwy8ESx2HAwqwQ85KpBynyL7BG5UZrxcT8a7XnQFJ2awrogQ"
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
