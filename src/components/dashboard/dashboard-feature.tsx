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
    "2CaJA2mSP4uHC3yiJqE4fSPmJ97HCkRFjtcTCxATjnzFftJJhtZkwnKAZgoZkPc5GrDT1rVgReTaDmPLgw7qdkk1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pGG2rBV3Eqzt59oGDxoB4PGdz22wKPisqPUTqRWe2CWrc8GR7GKJp9RtZCsa2QMYqyKRpchMAmxRAmzi8Wkk71e",
  "key1": "xuxqPLi4TDDxhVmn4gDLVnkAbGAsrDKixPBcpZmZ32KbrWK3HQeMKQShncu2FFrW5WpPD4VMQFt72ZLK89b8FmT",
  "key2": "2umhA7HNbDT6PTVCUuaSEiKDnNuhKxpTC8SPTrLaeD4adtFkSoVU6HDbesa5wHCMx4i8vk5iSH2nfFAwU32FnnWY",
  "key3": "G13qaEpe6iSXqkPJcTtKvhYsjZcNULUxLHiEhcTJWHo2UWDndxYd8Ueg5fgaQdj89yUfnvhd7YUdjuGXP488KLV",
  "key4": "eeMK5DzpGQyKxbmMB4mPNFxP6Kj68P9JzZypyzUXJD1PrBNRE7ZnFinymHFc92rnXrSp3Um9Vi2P8K8nkZHdKN7",
  "key5": "4U6pHzVDMFHinh5spQAsSNSJFzFzsKCitwtyC1WaQMQoyJ1YYiZc34Px2tkX9M6tr7UZiNDcv4x2HFNDZBUJHT3t",
  "key6": "4BrpAj7jaS2rGSHnttMazoCDmLGEavSZznv7zveAgswYDbQXXgec5d9VRYeL2yma2ps3goPMN8WNLZ3tTwKpNyzP",
  "key7": "27227CB2a18g4evU4wNr67sSVSguuTPiJNQ4Peaf2Ea6179XdaRnJYY6hE5zVKsMN1zQrptSbxoF11shweyEcXkV",
  "key8": "3ReSmFrou5pRTejVsdpRGkTmUMgrXyrLjQwWfMx274xzTsJddjcESPj2LC3xTZ9FPx8ZB4ztVwQ5LX13a6NKVTif",
  "key9": "PtAWEHsnR8YaSWEe2Xmck6eByh9ESujAw3NgHym5r4wHRwoK7jNDchbyPCXkxRYZTCGYviN9p3sy6v9NxW5UCPE",
  "key10": "3BnAV3YHZRqgHyhvsESpMW3eZtTmVFuH4QiuqPotQoWAqpkrdqsZRZzRyLdcDLXXrXN7ojjKotyLWwZ5xvZb71r8",
  "key11": "3F3cg74Yo53rA7giCHuQUJSTUtuBHmGKPmr7VqBegEfjpkaBkLK7bT3siagfsqmrMQCzgAVQNi7tMwtpGg47KKDf",
  "key12": "4z1SMmx3ar6MXKBMvGvzJXXJDm7h1HVSrDxknHKkSdVHKKM6V2XwBvMHF28PYTfk8makyq6PBYbpHiDrxa8d9GAg",
  "key13": "2CyvLzUXUvKY3ndpK8QBQtQTeaZ1741ZuMnzbvgtpw8AQ4n9zqzYLT4ahgdTrQswpVQjMjzivzYoc5mwopS5bYhm",
  "key14": "5W9hXaKg2ZJ83Uu8dZKtZLJriQbqJ4BbW2eXpJfCQ1taPwxBbKKMzfwAcsoCeHiXVgkGUySxNYWjaMumQh8TfrRq",
  "key15": "2V5iJCaTukY9UQZoV8zY1h1N7kCmr9NUJi1hkULL1cGZDhissZU2RM6ESEgRDX3LnrpasPvMgx1EsxJnAJRstDif",
  "key16": "on2q4XafdadCshhwnrbu7n4RdM7HQtC4sKjoad9pN5UfcT2WabefNjCRxoE7SLsXSbsNgzktBAXsfUrgwAwkDaw",
  "key17": "5qBFfUm7vN9m5u8a5yoccqmB2rDz6WGhg1z3qvvMjtvM3SVFgRpA9EehPdUqHf74ULnZRedf8vAwPAEHR7pwpXAn",
  "key18": "5rZQcryYiuXReM9fvjJdQmuw8HdYC1h98gaBKmCWrNFWNZxNSG49Bbc36nrbFDgQ3W3YSWbAbgGstTJ2ck6URE2j",
  "key19": "5THmcVo6dTPehpFbzNTHK2y7VuesxKEJv2vdb2ZbTAJ7KkzqKVQwREmisFhAmZTMe8uS8saiXrahiWY7fhQeCVbb",
  "key20": "33pADAboRJXhB9hmgwquAYovhmziETBMt4Leu7diQ3ACMkdycR1G5dsaeRFitYvFwauUGXj32KC55pguimQZSRwA",
  "key21": "4Tzh2zJP5Kq1di2jHAJXbx21WdvxH6UnL1PH2k2xXona7z9iBTcmLhTEmJ9NusxtJvyZgKBpqVDQ6t5pdWZPVZQU",
  "key22": "4yvqhwRsgoCR65uRiLSJarSDK52u7zP5roxaWsVYyktgxUuXpxoKrPwT21DN937uEo6B6bLLUjBYo6oGysmwM3Hq",
  "key23": "4Xpfs1FoAm1gJPbtmHr9o97YQqspnXuKBhUjvZJwyLrkxneUa2hvfZtRPyiaLy15Jt28SptqP1NY1RCrRREqBGP8",
  "key24": "54wzVeU3kDRPHjPEai7uVkrdM5SZkrK2mdmfoDj2F83WvdzDWe8iCHjXwL5uvQqzxuuX4HBRhxnb6pzh7oo9xqEH",
  "key25": "4bNB3fiQBp5vHXSfPnqLZgj58d6FEgtynPUCNP9pSyL1qqQXVfWL5nnZS4nxVV2rX5NvbhKTRU73DNGtBMPRt45d",
  "key26": "2FRSbV4iYxWe3V24G5Ld4Et129FTtjL7DFHq2rxpUDBM33U564UYd7vYXJwLibDiZ85qqY75mK8WYAezAQoknzpV",
  "key27": "2ZCiK5R9JHDNxb8YqVMzQcXZULP3iCgmGEzdtFJtUGpbNW5sGsZQtbNAFo2abh9UtJoteZMZFEkzgMMg8TimENCi",
  "key28": "4UnbSop38LjhJQLK7tm2MhGGdxme5QN4TmyjrmKhsGGNucy5pK28rdWboHGqgikg1F1ZnKVK3gPqc59bsmQ8b2xT",
  "key29": "3p6KrPkZDEVdG6a7x8xKeUj12hc8yPJMWpzJbH87D4UUQRPCCGb8JSqFMqBqFH2ZTZuoMyqdvaGhGscA3uw9pPXQ",
  "key30": "5fhQp19NiSyCS15o9Fza5atWmCv2A1p2Pq1fJx4e7wUUD4vXDHFNhbCNL4Kih8q5NJ2bh1s6bNt84q9vjugSatZW",
  "key31": "53oPa2b9KKms9bbXW4419rG1YuxMD3F8icauESEeQ1GkiAVaqbjQKaDdeztCWGPzbDiqXNbLSfhCPjJ2s4BXjjBW",
  "key32": "3ndke3ZPK4i5GTEZGHUHDuEQMKDysd95kQ8VoZEVyHppW7xmS8CQ8tPBcuYaRMeQWb3Gbd9j9BmA2vdkQVi7xBJB",
  "key33": "37Te9hCEJcgFsKiNxzSMgjcYZc82wb3zrWuM2LKvZads1z4THDef2YUMNwGUuvQe5WVHAeCsqb52Kqz3LD9hYuMi"
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
