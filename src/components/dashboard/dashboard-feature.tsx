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
    "3yiB3MvqWMcxk2XixXiEa5umKpAkWqD9WTNGZmUWos7TGvEW3rXbXHZZR7PZyus4x9gjDyifpY3zs4kq4z4r3xck"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xneWwPwbgWR4gjcwvoTpgkRmDjM7szzqNWnxgSDBLdrQ9X7GbVWx8dqCrWjPHMUa4jH5LvGeWxVbb5GNBdWVH55",
  "key1": "5SBmHDDZqxUVgp8qbfr8TCT3wF9ZAXupM9wxj4DjRPgTyDJvQDkNKHXPTthSw5WGTM4NbwLfj7GWY4s5EwPUi4MB",
  "key2": "2Min3RJfjvXFDmhi36NLByng9buEj4VWqAQBXtKdT52evfZhMZu2xRYJ9rcKE8NpLMRMFMpmyPzYspbLvQSMGdcT",
  "key3": "2EQivRM7BpvURFHSkLeGZKCLXQdmYxXPE4TWyGTr2ookdcN8T2Gn3qimNfCLY3VSvZ8SCSF2LB1PYpAzHfiHrXci",
  "key4": "4ff7jhFH4U6TgMfiqo5FPLZSbvFxGdVF4ChvwFV55zjQGXQT7Wzd6ZpHoYKk9NXdi9HVRFMKdsbxfRjA139xTuLW",
  "key5": "2X8nSZw1EQAk6sBFNUR3h5VPfmeWDeNbK7GbLU3xMPr1G5oTgUcCqQBcjeR1mu9qcYXVFDDCauGv9Ri1d1Yahc3T",
  "key6": "2XzSs6SFLUGLq3LwurPbJm9r9XeA6w5GxWgUiLqWCy84iTFQF7b1TEGBdJEPH1XAd3GtmP8NGckdCo485hRWuXoj",
  "key7": "5T24FDTNmAyLN7wBRVSnv6uoKY9DH6wYbwZuWNXFP676Qovw3LE35FBkZWyLd4awhApKxaifoK5F5xJDUCgv7tMw",
  "key8": "348zNDDVthSw9eb4x3ZULbtUf3bDBvyvKDXtWPR8UT4Ly7tPoHV5gMRYY63DdvYXgCzDFm7LeUp661B7vvjxfsEE",
  "key9": "4DKQKhYhZqfyN83zX2nGCNMrGQXneswvkxrfTtxM3FhBdnr9MPqpuNLSL8ZfCDgi74YUVoNqAnqw12jbgm7icsbS",
  "key10": "3JFJri4ohGEghB3Whdqw3Hi4hxvBUABjVrgfF3odFQ9N8RgRx6sfspmWeA6b3xdTnTm5criKzatEGVNELhFvrwH4",
  "key11": "CpZ5DrxJQhnRd1gN6iQZqHq3R4pkMwUfQpZKGECLeCSmK3rcbm2a7TdnoQn2ZLvm9Y85w8mXBeCSyaYhBZf28hH",
  "key12": "4eCDApJC1sztYVThsd4yrHrWkGnQdMJEnhDG4hY73ACtGupoF4EiTqiMxxv3bbcePtbbjjnTsX6kRzn1NunaR7nT",
  "key13": "5PDaEgxW1eAMMpm68csQDHWqyeVKJhEtapqaus6AghpnfZWymnVMVxrCiwYpPSEd6dEwK3VRrFMutCy4CC2pgqC8",
  "key14": "62Bh5kkvQDLCamaF5uyKjoPmZDkaWwgF7fnfUGh8t9JaK9EcfAbcwuBnUVQVaMPaFU1EjXeyfFAdbSEEkzu3KGvB",
  "key15": "4JX5qFgqC4BhHCP5dodkEdFXQe38spvNczFPCKsuxVbFyTq1RFdnp27peUfA78ont1ziXBr4WG6QFcSpj8z4xjQj",
  "key16": "2tK5LFYumMZTLe4ypnH55QD3CaEP7VaD5jeYDLrntyHNptwgRVnqZB2bNJFxh1fSwZG843RFvuqMDvbsGHUVTgdr",
  "key17": "234cY5VtsUFUMJiF1oRcqPqZhgSYNH8e8HHFYKJ2eHGXwHtvGefANfdUstSwM4RmCg4UFULtHbUeYSJKqaSF2XAh",
  "key18": "28NszT2oL8VXrjNBmPidoXZDyf3Exj6igktgXr9RfSugYc4TP5gNHiPFDT7R65b8YbStWh1ukXM8vtNJV4p2qfZq",
  "key19": "31ukiZwd3nmwWgxd9DJfgMi2ruBNiQn1iuMsycZZvUPZK7TS6ZX2ArSwax5C6wFHdCpWhXJLAJZ8YbZNtzEDBiuq",
  "key20": "p5jZquEyMxh4LYpW7KoMxuFwnaRL82wDdAxV1ZEZd3jPZDpmSD5mrgDedgd1RK9kRWLrHVzBxkd5n4sUCLgbey6",
  "key21": "58SgRmU8cT1rvKa33diLgHz23eDPVzZLKFZomQc9mAYHSQiF5gJ3tCZZYB4SsohzvdSrxKMbXX2hNKRMaDcGTTQt",
  "key22": "5S9jsu1pwq3LPV6G7tUnAZmNijP1aHTBHumTEK3aqs4bjZH9CjLMeAAsS71jJM8afx55nAKcj2kwWWgWcWjRK7wC",
  "key23": "3UZ1EpUtMjgXGR17ekXEGghvRntnEcpNZ49YzdvPdvhxFyLJc2jBJogx5v7XV5gXNHDmg6HSFBzkeShAk8NWxbBa",
  "key24": "3ZNTw5rb5TKWuubQvX648cwB24CHzxY6i7bEABfobh31XpkGsjmnz4SiNfL1VHMLpkP8SJCd1tnqv3Aeeve1DZQQ",
  "key25": "5kui9AkUeEGAdMZ68SxX79MtAxN95ADpspVNxz7Mz5Wx5ybrSkxDC8FhSuvoFQyrNJbnjCpW5yf1WhuFU9NymBH8",
  "key26": "5qGvpkw9qT7T6NUWLxmt1hC8HDM9Trmyo4onshvKYRHu3azG4qTcbyag44w6gLD6jnGWZzmvSRXjtx6YiQvrKxTC",
  "key27": "5i2P4AqE45Dd4iXGxy3AfjQG1JbNwPoTnr5A2iySRt71QA7LAAZRRvGbvaxhGNMxaUDKdXSvpQq31Q9VSsF7MuDj",
  "key28": "SDowvwC5USTFv3xnm6g7bxvGPhJofmSYoqfpa5c34WXFR92YCA1g1y7FgqLt132Lc4n1F3iZD5HWFcKK12tskUv",
  "key29": "eUZLMYonXvjt734gtCGD7EWoU4iGWxXTY6ktQmBSNK3Xs3qjaK6KaMSaMGAmoYApXgiYj9KQUiCCZ7FsTPjtqj8",
  "key30": "58fx8cdLgyABELGnRtfTsyqSVTvD59zHd5S4BuC8FEosCoK8NBm24FNj1m9vre196hEFg82xfE36AY1YNLA4fbdb",
  "key31": "czUByAmD2tfeNsUkzqu4dDx23JfiKwLV5UgmZQ3nss7PdWsJm4T6GvSjU8C2xtvU3k59uasfTcfNrC3dMCbKUif"
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
