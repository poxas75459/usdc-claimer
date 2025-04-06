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
    "4JMX5qCdn6MD67BbtFTWsdZ2PnPYmPZZEVYCQfxhDKaTo3Tcd4PpzCMCPJhvbrMR1V5Ad3KARAwXDFcrRJqk3xUB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34pcnJWDywnh6GzWP8bHSwmsxFMeLtf3Quw37SRy2BXtfJBBqKKk6DpZJacdSw5otHfPgseYYiU1PQWyTJsJmYnV",
  "key1": "2fL16tNKnQ9aGaeYfZFF9z5eAJNuemKBdnaTDEWH1F5doirvPBRse2PtvNaC8GZuagr7sd5aC9Rj3m7Y9ooCw12i",
  "key2": "5DSXqd2uuGZLFrFhqN6uo7EteeozjAWHhNbBvgXopvS8QsKhz4XpY8NPJaRPGW5uazqp1SmR1kWXcs6J5DfF97xa",
  "key3": "5sWUVGn8W9Mo1Esz3APpWgechEWiEwR5Toi646vGvcPajCf1Ufzxb6DPEJTvxnj4EXDVoa48NQyp8umihKBcrgGM",
  "key4": "4huCitF8V2RaSWAPaJGhHH8KSA5B7yAggrQ5NYHEtSWDT4RcGpf9TzntqHKJYgxkWfBih8mxyT2xedfWXwqLEzzn",
  "key5": "34qjAPsEFBU7PeKNgmZUNxMd122phmGjRLEpNKgFXvMDLXzrvYeEAvJktyA6hcmRzvPREjPFrxWsqVT5otLzhR4N",
  "key6": "41yyotCF6J9Zs9mzUedTLiiqXAY5mWUafg6DS129bd4Zzd56CtTWFGdZ6UHn3Y5dxMPiYsTtgRgnjyUQkMEF2nLk",
  "key7": "z7qbN9HLdY35xpddJrtWabwL8sBLztv7kMZ3boiQhHbMhzh236uZbUb8p7GxuAJYJfXNVMjqrg8ea4NHGSf8A82",
  "key8": "3QGxAgxZpxqjXKNhixjUw3SP1uEJ9Yp73yFgues9j2EZTMBa4qFrxsGkcFAh6SyVkNWHZKzLamKkqVDquzFkdan4",
  "key9": "5QiiVZj7Nm4XDjYQTaRN4PnVmyFLbHinofwNV8xSu4whfqXxUj4F846AbsKLcrkNdZyi2Hm7W5fjo4iCab59kKZ6",
  "key10": "MKKJvykxfXErY73WRafgRwP7sUvoRQbfda77Kcpg9M9xVNh5hqxCcPtZjAPPQxxYvrB9uXCHBfSc7KWhCMZk3Mt",
  "key11": "46fM8ifUMnjeChwioZn2BbaVYVLs4bbq7LWw5LNRwpxFpKKkzeV4gjnLepzSuJuVJVssGkNkYPjDuZrPwPDug1uR",
  "key12": "2y8Ms5zTfKin2cCf4EhzLvvTY6f2z5iusH7WVN5NibiLbeabouEd3wQmzY1JaNYdW2kDSUruEH8pKEedpmUzK77U",
  "key13": "4rdTS5VfFizroxbCqeGq4DcqgLuFUogvyoUa5E6TsVVMs3ExK6E9bqivcoHQq5FQ1BU6bTPd6kmQFWX83R1hy6od",
  "key14": "5Gr4KwpNEWLqhzJvvxERkyzQbNpa2Qzv5gP7gvhPKKBx6bt36X7aHf9NpG8bySFpEzv4coAxLdsYo88Wwsm3ogh7",
  "key15": "aYWiyi9b57nc4kewFiXSHfaru4KGXwv2XWjcSKUJkdeGyPkZsWyhGR6NMkemqBhBx4QEEWDqV1fKpXz2EKBNo2k",
  "key16": "5wgj4j7BZJVqFtRDCxx23dWizdW2VhH6LoK7uc3vpqFtWqT8nKSe9Jfo3wbDeFF51AcPBejJ4UjgVK2JuieeLc8F",
  "key17": "5LU7azQfAch2qPvi3fN8MYdJskBgFoCFt2VPNvSLKPjEanpzKFrXZ62wvT6wceZMeHPG4aJ4PT5eBtqBpqZ3oXfT",
  "key18": "ddwrkQ6kWXLB5YqsptQYeAXMN3hm8KeAgvXQu1L2A4dkTYgaBM8349MRZnTSZYwqEAEETShhv3XSCy4d834ez9j",
  "key19": "45CUzmkvH9231JP5xH4UA22Mis9PhMFFoGSk7s3t4Ktk3SFg6L2etwqiAt1kGUoQFCpQEG8FMDA9bx2TmAUGaeRE",
  "key20": "5SFEe6ArH4WWpY7wgBEsajbQTei5rZT9vH4nGUf1adY5p1ZenuqkVqmidJd5YWzjPikc8Bj8X6ouK14pJFXkyJ18",
  "key21": "2FMtxpfF9TwZQtVm96tSSYguxzNSBvCLxLWRwwa91xhe1Bnqzu5vRZBBhP58EY7vcv2kLUNiVWynNFAvrFdmGLe3",
  "key22": "cqyzXg5ipT582UCLpHkUMVLpnREFKPJ2tCzU4LBTmmApCaMNH9acUPVTcuacdg7M3YWDD85747bWWRz7d4Ja6UH",
  "key23": "3UwbV1fu9Mf3kV7BuFD6zMiCnca7YqWqeuMAL3f1XYbjsAxno3qgZq5TTajaJc2NiADTvHeug7g26XPJRudFC5CB",
  "key24": "5VJBvCHoSNMj1bcLxjMG6oijNdpDw4c1wBMTLBYDqyPLzduPKspysgLe97KnVV3tb9kVzTGa3pA6NZvYTwcfttL3",
  "key25": "4WFTTX4hPa9Gjb6fkoLkd7pH9B5mPKPQH1CaPAzei4356Eu38BqD1muZfSAaaxtxxGcAdVYTqAimf3z7oMtQzTrw",
  "key26": "52G5peX8yiMs4CEm4fjLiSGiJTNZehsxHbtU1SngAd4ePD8ZfgNSzngFSQGbT9zMtp2EncbuNLnvU9t17Q2zrcSm",
  "key27": "4nyHA8EafHovmZ8HbxjruKT9vdVJWkKKSr6jqTT4VQdyUSiksFSDSxff8oUBm4Lph76UjGwjx2XURqV6SbfvFhDT",
  "key28": "3R7zF4higc8Ze4moaWGYGpkN2azdfd6pZHcUzhds8Bqr7suBMXmQNAs7cSfyLuZonW9bcaPkrpsRHEKf99AaXevt",
  "key29": "4DqBXkL2TcJi8QH8d3xJ8zfife8KkyRnyENGZpsm3XwD8YP45jp1a21AXJ7P9FiavydBQ9LF2iBDb48CS3JAwmxy",
  "key30": "VkJztBwPjAJhkjfsf6VCgyXW13GgS2eZdfbjQ6zkA7JbkS43AJxPYhLDEYGhEL9bxjhDMivimn8PgXuY8MRJAeL",
  "key31": "4g6FeutyVnQc7piLSZbaYM1ndG97gCPb8HeEhW5G5h3bJ7BtHemc7VD6y5nry4yrKkdRKkKt17tftbYGRfbKG9AG",
  "key32": "5rGDWAHmBzLkybbqTgzLcbfnSpUPWjuDb74JvjcNdRyjwgzfgakPop5n8DMg2AywTafkv3R38pZz8SoRYVi7XVvZ",
  "key33": "5BN6N6RKyE6XqExErP37dtFzM89jVZxATdVRV5bS6Mw3AZQV3XW8uVoowksUZi1afGA6L3pjE1XpHKtLTTXq1C9Y",
  "key34": "5bZcZpcmYQZAMLUpS9TwuY5MHHj8dgDBUrZiyFWdxHENLBqnhDQUtSC192c5garLdkr6724ec7FjR9q5V1942V8i",
  "key35": "58XaMDbidMgLMEJYa8ZTNvUpznNbuU1FMSsTUvVQTQRmfD8MaksLCKFAXMFquj6TeyMisAKyG14sW1kibSLQE4Q8",
  "key36": "3pFUjqgph7BvNHLUeYa6igdbx4tG8zE3PC8RPNWtjxmfL6AeUEFUm29jDi4dQTwfpnVuASUgPZrX6tvndXqjpfPH",
  "key37": "ptCg9cquyyMSwWksAkGvgDhVPAykK5LZnx4qRSD7zGbCRaLaq4zrajEvARYftDW2DdZUEE2ufji4fQbXwnEbd6D",
  "key38": "4mKX9zB85jBwS4UakMdGaRdhLALJs3khiq6WbCkFLeCGoBcBuf2ZLC7J4aCHZ6D5BLaM8BtfqFPZeU6gMhCJnbSo"
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
