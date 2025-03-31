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
    "44zp8KgeABDJwNLVXEp1FtktZntopusCKn5JkBQyZDB6926XQJjCyHLBypvyx4YLSbHDaN6LZa3ff6r6JCKtxXE6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yQuN1B1gpZHotEvpEFpiba3FhsuBiGCVSQGVbGxoX1JpznyexzwN6Xi4ispgubPndPrMJ8UMo4sfv6iQyYNX3PN",
  "key1": "2U28g4YTEWLotX2ytoMLiaZauWKHq9sZ4jdEjZxqheXnA5y7tBRgx2DQ26GdKNTLnKEH3JoUeenmuqMFHgqKgT2W",
  "key2": "2brjEYKBaSvnCLyCM5YLZhgAbNMqkmuYqZPse3MYKFiysZsgbXT2yTXPVhUtthUhfbMyLVRKwBufeEh2YQGKESVz",
  "key3": "2eCFjRUH168vPBr8BLVPQEu4BSMa5UYthhjx8RYnX9uDRDzyVkK8BpRqhCzFcrM2UkT8Xjq8CZyFLMGyCgGQTQ7Q",
  "key4": "5P6b6Tb9nfPAZnEEU7ySitfitN21o6bB5gY24RnTZXsretM8iuYYCSQaru1UFoNHoUJHbVdPgRuBUvKSqSJtaFSD",
  "key5": "1sEzwDNHv8Ytci8xEDbkDLprF5bRiWjSpFJELYM88vhQxqQdG7NVPb2MULxsRCCHyuF4rdu2ez2MnjUcQMGFWKW",
  "key6": "DBuVqsvLUcQs4MWLU8VwyjhK1eKw1vzhvhZjB2VrhxZGAkX6kZvGuUkt7frEnpBGciJ5SDgcetjy8aDFSHY4L17",
  "key7": "3tcCRrMDRDRiyMfJ2ZgLWTDQHcVS6cbG7rP8CuYR5u8mAhd9QjtmE6QSAFZPYYsaMYGz7v2JUm7X9Jif1BvFjq83",
  "key8": "79q97mKaqy8P88ofQ56puFdDUftWCdnfKtGeKKFRt52sLfSwMW7EypubnAHkxAaDTZTSuBvKx4bTw2KEWr31oNU",
  "key9": "4p4bVDAia6apC7swXaFSguMHAfMdfheantbuXNCmsSL26zy6MmKUJgiQR2oQXstvgMPvNuQ1iNLTAZHstCKYacKf",
  "key10": "4MBkHZc1DjHBkYitfvK4ZoRnDBd8W6ambCU6tv88GZNUFAYNAMKew1fMfTZgJ4rA7g6AN2oHzFFdKaB44w6DbXnc",
  "key11": "5Jf556dDejUMvPrzw8LGEkhfGjMBqW5wLyrpjoQkGu75N5DmHF485Cd4vnhNTMq2sdfVAhQnuYFnyMpekCfB6xFj",
  "key12": "7SuZdjNNzxPA3o6jbYdrNvwXWHNqJNDaLEsUEoMeo83Fre7ULF1ahrqf3tFmvAiZhZ7UvvvxDdRcwWvrCaruNZQ",
  "key13": "2UPBnLGFFksnvxWQmwpkGzNn7hihxX4rofSuE469FCNqPZrbV7cfgqKRuYSSkZBJEG1ZdzY49tDywPBgAHF5yvsC",
  "key14": "2AxFcifeNSQga9bUaEoEwZGgYcbYFcpgRFBzcxNXc8uY96Kry2Mhh7wXGoHa3M7XhdfkDw2doNLnfwkrXs75Tnfa",
  "key15": "VqjU8JrKFQCzL9DsaBnEuPJAyvtpxjyPtCUkDHtj8FgLuKyD7wuNLxLB758YYo7U69NeWhnwxLKqQD3ptTMdnXq",
  "key16": "3tdy35tA7tQJmwNpV7c1yB9kWYr8SWRsgS9oNnQP6Mz2JdGB3u18ReCGFwxi7QHrP4HtFqwmjaubxGBBx5FDycw4",
  "key17": "qybyVKt4H4E2vLcPKvjC3giFYKXHssfAqWCMvbP6dtAnUEseT9bCv6ioZqoWQ9fEQU5xcLJscuAawbN8MC3HxtU",
  "key18": "3LELTAVdvJXUWtkLpedXRcUHyCj1xPC6ZL1URXqeNFQtDtZ6dEWwBp92jJkx8xUNmoyrYDeoTpMnZrcM1FrdefkL",
  "key19": "2qSXUK8nxaCRvS2eThVxDCUPjf6DC83BcdV9zs4J5udf3FcdeRsPcxzqpmNcdC5LL1AAXKkKkSozoC6vQhMQ3ELX",
  "key20": "35raV5tM53pyiLtpUFjGrsPeCKscZG78nMC9WwikH6GjXCsAL687BCgms97WAxznaeqw1inNTT4AsPCUKKvGaLqo",
  "key21": "48tPztBYphxfZGebqbppFYhZfBFsJVEXVs5rHXh24GP4SkXtqYuEWvDzM17xUmtEBP8RUnGaGU9wwqKqXy8FPZbc",
  "key22": "5Dj6no4qRACoH5FL436S9SWsBjsEwn2VvbVyyWRgAjUnvjrk8YuhRwpahqWUVujEQdJTueHeFfpy86h5JjYYMjoP",
  "key23": "2ydescVZGhhm1RmJMjBrtvdNK8SnTU12TJ42Nn7eigKt8Gbv9dR9V1iLyDYfyyKdKU3bgGTzeyMBBYVWEZwFBgjP",
  "key24": "35QKUZdw9DGboUuXtD1HFPh2rxbBjbDDBVwKs95fFy32bVXv1vsA2kMd4sbevYnG1tJHi22zq1WAVxsh46pXiVw4",
  "key25": "4qg4GEJUBUyTeW7F7NYwaJJjhTCGCGhB8PH7EQzyX6MEpUo5AXkVYfuwKHaSkPwVfJYj5K6rwaPN1AAryzszxMPh",
  "key26": "2Q3LDsEeVVbErsKkU7F4HAsLXFLxW2gZj8Tdr2cAXtzNXrHSarCpUP8yHdTiRjL6rwJKLXF2QSXqqtWdiD3ir9Zs",
  "key27": "2td3ND7Sn1raXHryjso9u4z48WMf1xYBReupnufi7cKqZDY63sJyWTa4octPeLsKnBfz4EzhpChjJfJDjnN1v7HJ",
  "key28": "EJFKW3WReJNxeCVttdigGq6D5iCF7PAHBRagA2envG6uAheTLVfQMcVBVPGdi6S6jGZSHjridrwBr3TkbRAMeBS",
  "key29": "2D8ZKuN51VyWnbBf1Q8zbL6Mbuge4PeRC1KsRDN3NsN1cJE4eWseMzowwtaF4pbSweMvYyyWKMUmuKoAYV1pwqfL",
  "key30": "3HPEEPv9dbJvkts4UUMHJMzkoqgUcvMvq4kgRB9gknRa9GZMAMpzMFezG94CqG5GAYKFG7jKKPhAi5X3v2oqBXfh",
  "key31": "4qo5JTmtJi4MXZJSxxg7b4UcqzEksqcU6fFHEF7FCDMqALW7Pw9ykGG2jcdBZowowpy3vkbeyJp2KmAzesoGF8Vo",
  "key32": "Er9AQ8kdTvF1P9bW6uWEStqPw97iWXvr9vV7M25QUpHr3Gaa8F43ZtsMFTJ7CMqVzxWStqgtxAzqM6dh5BxaSCW",
  "key33": "5coashd4sMUQT45BzCYKYEu3XUA9FwgDMBrsRCzRxVwv5CXWVHBxvyfmRX3MpL5w2asZLEXNX6x7wsKnsdL6jp59",
  "key34": "55SM3Q1arhYE7CWVW9DaUeagVnSgXLFpNffStDYYhfoTZBgzQxrkvQyd5MEDRLxPGV58BR5SKyY5qXwdLZfVPZEf",
  "key35": "2x4SJACTQgyb3mY876rVQVtLSrg3q7wUnWuYrLFpowvHUC3QRsXgGYfLduGHJ5852fcMXt45GiFD83PgTHB115hb"
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
