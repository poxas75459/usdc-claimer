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
    "2N3GgdM9eaak5Pe3o1ZPribBQttfG7mwEK9bGRdLLouUywhjdBFEKg8QB2796Xh4NmMTi3KaK4NT9bTGxMsop5Dn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42m3yBzDBKaxqCPtBwvQ6THFHAjvuTJpDqwVacYsRBRoiA3KVBGFBM8HxkAvWS5sTYHcWiVKrvQLxFbgq3HGKLAU",
  "key1": "3cpMYXfAFduq3YMYx3Kwjm8vKMWXnowAEXaNvGGGnxTtzuYP2JWsvPbrMyfj3ZwfUJDoZb9dgX6QtXdxPbSg4q9n",
  "key2": "E9EshPnsjS7JNRXeknPcvjTkTggAZnGMC287KDWEfbfu3Ke15h2XUMckzLsMQiLMaKA632Y3eq4CQQA5oPQgHuA",
  "key3": "5ELoCHUrUGkD1TE4cnMRyXo8UAZHKUeVEBr3RYDUs5RERBoKXkuyHsy11CQ3HcAm45gSfHcLycr3aN8gHJa9medu",
  "key4": "2g8WAjPFv7oPbC3Y6EtX2rAqnCmwyxuF2Zd7t3LRuGdpgYWmXnpbNoqGwvKoPo9TzDTsrB6vi6ZuoBP5fRBrXS2M",
  "key5": "kRKtaWt2jzXXyekPwKMLt8viqNEjCpM5toG3fgJaSLRuugKg2gAtfkGUXrB1po14oTPrpXXa8gCpzSY8oWscoso",
  "key6": "NKG6d7m6Pyhy2QCejYujx4bPfVW5Mw5jmjq1nrjdEQKS7ovU9GyFhSM4sNPuHRQcmFgo3iNy2SiYQEiU4tNs1fZ",
  "key7": "2drwjM2rs2eaPBSJL1fFhfNe4pvTodiENmWXXsewwaFT9vGMscC9oDVqrdm4PQicfz7LmSKzqwnD6F5AWBqZLcs8",
  "key8": "3Nocaxb83kfaKfyWqM3BEPXsnfcHLYGVtxW8sTBCAN673qjLbmZrg7hDjm52b3azdj3w88LHs7ZXGNCC3c85zwsd",
  "key9": "FkhPs84ida5GJfuv7GUZpr1VnMyp3WPSSRc4xphb7cA88tTfWB7MBVirMoB69iA1Pe2m9T3e6cw2tS4me3FavAq",
  "key10": "eaAn7iiYJaQQrvgjPPEUoHQbS6YK958U3PVuiZ8JAB7rUDaXkjTE4rWbchmqC92wTkaGACbRrhhhNdoAK5JUh2A",
  "key11": "3wry7KJXmtimQjov5YiDj4RjirdSuAqihYaCEE4WUf3uoJXYYFSHeYqE6dWv5AU2ezEsysBKwML3WYkrXAU1f6Su",
  "key12": "437zoEGVG53toPTWfcwkJo6Hv7Y7i2kVSSFLj8K6yjLBf5tDBEoaKC5D7FPjGSRKdAsd9CgTAn5ngwQuuKUVZBnd",
  "key13": "4sc1ZLe4obCbbg3iSWyKppJHuQXxKSqXG9TYTS4xex2ac7wDwqmp6PoEzRS9L5QS3Ge9w7VzL2Ksau5xQLyQfB2T",
  "key14": "4eAjL8AgppiZfC4sGd5QhUFqHLed18C4D7FHkQr75UReHarKSfAhoxiaD1GfHrxdFrLG2wLo6XHJ4xFkRerxQPfp",
  "key15": "4sS6bwm79jz7pS3bTi5PJgttoYbNsChWfwVnBjSDvB2Ybd5iayiqGANKr3n1zFuReKPB8orfoi9q5vvopDW7bc8n",
  "key16": "5XMqEQ8725ukv6oCgZKAYuktUbiYyku7U4NuKHEHNdJ1VF3NCpZySHz5stdjijxW4tTtv8PRUQxLENK6qx1M72UK",
  "key17": "3gw4tNxYn87C9AdqDtEqmigASAcRXmry21QT52WMJvnxWaaVzfqVkWHSkiN3rP5T7syYVsV1m99kmjeKeUyqQkxk",
  "key18": "4eWZdvSuMVhQEWxRfBNf5uuPpiAwuE5gbLULETJXHMRpsBBhWXemxRoyFwK5AmZrJ1T7zyUFzrCfBYSoL65THteG",
  "key19": "3FZgrQEvzS2gi7ZYK5MT8yLQqdXYNZahT6JBPRzxpSbTDmbKFU8Pom5YoKn6EbmCCeEot5p8oRRDU34Jw2scaHw3",
  "key20": "2kgx6yKYtLkav2i1GELKsczgEvMkRn6frhWgfsk97qvRag9xXEFqY5hfYq7bKFTH54bh1UKmoRz22RH5NVqhKLFA",
  "key21": "4t978MZRRtnSrG9ByKdqiRQwCj8bRErQpAR7LWVunyU68cNzr4EE2qoFoMinicqzPBFENY1ER9cvJmaK78osFwMx",
  "key22": "5h5xcbA6N2CQgxsYYvBiMYH3fEEoX1q5yk5HgcJ5G8fjUKhjEiZePwBd5boRyLYpzBQpambKpEgfdX7LzJPGAPJo",
  "key23": "2BHmR4RE5HvfRis4JdWnwEf874Dhfm6SNFk38pE6JL6hNyT4vPtD8rW4ZgGoTkDQa43LKv8i35PKwXLSkPYgbiCf",
  "key24": "38nmWQpcYaZ1TzHzWp3rq5B8pt8ZTDnqGwNnMFGwVK1hkE9SfX1YmJjNZrgX1kCc5gSTPBEHrTxHXAT7AtxjA1dp",
  "key25": "5bR4oWD5ngMYgwbWdsK3jU5my5D4dv4zXrc7TidJHDJowV3T1zKP57QnFBF6tp4tQomo7ifqjVtWKjMD6MZWwQUh",
  "key26": "4gA5FCDahKKU1eQSfv3wXbcRwG3f8XaTcYJLPt5MihXUszyJrbFj6W9CkTk3kdhQU6aAt8w8W3AMZCcYMypb4UgD",
  "key27": "3fNtNE5Rf4Mj3pq325J9etZRApMjNSA4eYmjda4eGui7pAUVrxvP72A4x3Re5NGj6GrviU55ZJMMP8voFmwd9zWf",
  "key28": "5EyTtbvVs1BwjGbG4X2aPGQUzq1Dt5bjLqui1qUdEWmDfAeifgTfWXbpd63ZszwqV7zYcJoZhJLDKrxkebLtM89x",
  "key29": "3ZzZB5yczPn9zt5yNrV8ZzkL4z4Xv8yk2Qc1rjDkL2Rqd4Ks2sQvXYDqztEBai4H4wGDg2vd65A9jiSjS4AfXz47",
  "key30": "3NxERWhnkxjgMLy2cC2wadNvnVbUtxL6pSdi8p4Z19FZT2gUGbUYiYbqK8bs5aiijk6bwNYj6YT1QBvd8Fwux2ta",
  "key31": "3S7x9oBjoJqs6oVQy89X8DF1wtaTjQwi5oAmQwYc4VvVbZWz86hpfFZqGvPfn1ioMSHSZxwHxKY68Hb8tdqdHTjT"
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
