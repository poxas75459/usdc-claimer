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
    "mP7HD9rUWasEKKpe5ZSVZedLFZ96qzfHYdZyvhH63rFf9KLFy18gWW4HWTr4c6EtX25Xn4KVxJPGcnsGHQ8WApr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NwpmDryARoF244LmWTsqcTFrjYTEVshNajCkU764PfuyRDjE8agfzpLhVGrNqhwqtEyQVi5fHQjNqgnQtueL9Zh",
  "key1": "2ujPXyEXFf1Z4wDx3oeYkmNbfWa5SZvoG4YvsELeUMPnE94iqQ7y54nnhTgLJSXbs4Wu9bP7UvWnmYfjyqQhTmRg",
  "key2": "2vp8YFq4aYx1Rdo6ZCnvhDoYEuJVDF21hjjUvrWiVdPy9wvhJdjbya52Y2yHL4dFNC5YmfSb1oC3asJZVpQrhkhz",
  "key3": "4PaPbqUzXgAhV89w2Ceqshx3BHCx3XYG2QCxNRpdMSN1cGHyLN3Kfs8q9UNFjvjzuL2STfVfdYCN2aei4xBXCTgJ",
  "key4": "3cfpaKtxfeZcUNNKhCCbQLcPZ2h8eX3xbt2jUZCyE3thBxuMPqQKpmyn6sxfRztJdjWGYb41hDv81iwKrGGbtEEK",
  "key5": "4LotmBKJv3GC6Nmv9xeKcnJKgpTDyHg42dNkDNxeszdngGFLcxpjbdFdgCho7QDHBzYmcvj3nwdnj1hN3L4AwinB",
  "key6": "41cGWZfh9LGekS6eMgkqLRieyL5p8ZVmzxEJV7z9jyV9rLiecquNKKmUiNmwRQz7rP2UQ5NUWYNGTkFUT6V2T28f",
  "key7": "3G4Yfx1y9ZztVV8XdYAsAe2kY7V7ZQ2vbvigWwC6v5NFaXymSc8WYqLwkt7SgNiDyJgdbdT1iQ1HaXB1Z9kv2vfb",
  "key8": "4txzKzGVkQu5H3p95EKWxaeco7ScZbMiB4JooMJaks1GXHDuMuGThbTLTyrept4Ft1jwhDWuHHp3dADWrkv3KSaR",
  "key9": "4buC7vB8mYRtYtjL9yzvqwMKG2xbKrh9ShHEfdEU9wrPfKU4SQWUQMCiTdFKUd42SBzvugWmmckYHb3Sy7amr4oW",
  "key10": "38A61m5bQbtJd86Crv7cvpjmmh1Enjxb2ngDdRSoPJbVcdFffHcBswQpsVLx2tJBGgjK9byWyW3mED41NLF88o3j",
  "key11": "2WbdXm2ZrFyMF4rtE9ah12QSVh3mJhuUhpw4UCgFbDCby7VzrwMf27AMnoqRWtbktSyvTxRScXQfJtYkTriCi4Xa",
  "key12": "2SB1mJVSuP8xFWv6Bjn7eEgTDwTjZy2q94CARENVqjumfC4BRED6JSsPLaBfujzFgmkMdNMcyBA33HQ7WLLEHB5M",
  "key13": "4G3x2LFsfHg41LdAofuQG7v2Fkp2vduAzEiXF2UeP4ubDdDJevsZL2s2XBKdPeFTmmbQbXSeg3yYU23fGchgEqMi",
  "key14": "5MAhqYHiFqdW7PGsp4mXuiy45J9c5LhrgqxLT3kGgKSzcLzB751o5bhGvecmnfv1tVTRvwSvePnG8nzGjGXY4swM",
  "key15": "5a9Cpv4ZADhpnQTDr1GioHeLUWhD1DpTb1AjNk7HJUkX43iADTdDprbD58z6yEgxrbhDxDD3aAuGMAyZ6VB2UvW3",
  "key16": "4ujVayD8MZxvwMEUuj4TzwJvLKVqcugUkHfafd8rsYCoohdE39ckYCu3mpvqZfgUgyWisjtApkWiXunu6JciYaEd",
  "key17": "5uE2VuZiLZMsoVBjLkmspFgrgz5XpBceKkkRNbPYy2XvypWcy4kYsw94eqnkRYkA2C3QuXESNUCWPhGdTE2Go6RU",
  "key18": "5NLnNPZQ5yRGDYTGKnvMVdizW8pCxGqE2XqBzSgb7znmfNTFPLuZZDfoBw2myygjGU1fmn1bMN3hfCNMR7QvZ9VG",
  "key19": "48vjUAin4WnR1a9Ls15FyY38VrbRY88o5kNGuk8LcNxQGSvrtgstraJyS59WNcrP6g7PQhtM6A4GGGy7SFZxn7Bp",
  "key20": "56SkgrVqBt1dCoT5PNeUfdvg9skjgvw1ugBgPSnJhNRqW6iQqh6LEDxk4Pftokfh7BoJ7yqUqxRsXnnDnokiXEwZ",
  "key21": "zYC1QsBhhKRn6d3ML9K7e94WpLpL2vGBK7tQKL1i7s2NUCQ2hTgJnQbWpEtDsurKaQQGDAPRJtcQwpN6xV2GxKf",
  "key22": "3Y6ckpsaN5mHPrbigGDWECPgfWBvjRD1gzs4rgw98zvqFRi9bXxbWKA17Z17dm7xZgQ8VTZpLxQ5VKm3YqSDBHqH",
  "key23": "3gVf7qWdqabCrZxycBoHWMVyTB2WbDREjAyUc4hRwN3GoG6UEHcLVUmPikSg7bKAxpRGK2WTcks1fqoNYgZqqPLC",
  "key24": "63skcmtx2cnAvdsu9GFJPLStQfmJVxUpMsA24MQKrPF7xYQX9osJWxYM2Rs3ZwDU5YGFzmp5Pz1jsnozmsiL8z6V",
  "key25": "28vM8ixAFrT3UC7jt41EN2C4eJmXytxCJLjtJp59yU8MZ1uqLKztAk1rmKddNzDDuvKoFUVv3y358gfS7tQ44vvz",
  "key26": "3mn5urbJRVpHHLiqXy6ShT81duRRTidkZW17zXwHNBV6c2DSiFquSB187ZVr8gDCnDjzHWWWAKprsfpKiYBbavmj",
  "key27": "64Jz4a2S4WExyMNBdV7ZdkF1YkakgrC8b5pKg9bCtF7oTPPZ3yUvKkQ4sBWmsGpGLZXx41oq1C1CSJFHk9ZNJNh6",
  "key28": "5BQSFaVU6R5WvzjLQ9bfzLpZhAryHqmseKmgXA8DxCMM8SrFazEF5Ts3tC1QJe4LXYo5wJzcMioEHJJkQ2pu8yFc",
  "key29": "3nWPtiFJcjA24RxXgbGBp3JMRihsyAg67Xjz8gp5aAGj2xYxmZZ2Hw9K2TsRw25WQegGHwWmN9AwPfy7qbUAPMyt",
  "key30": "2vBKS33brLqQmiF8H8McmN2hsH7p31maLRxk53P8bE2NbiFtBjaeSYKD7qtbQppqNcbF4mbijBd3sLzJXdx3g7ag",
  "key31": "8fiY2jB7HK47dMeyDo3w1CXstG6jK2yHss76W9zy9Y3YfQXFm9e28FVDDmkqj9H5PKvYjmKo3nPE2vGpmKzifrk",
  "key32": "4MhxqMWi9pDzxSbMEAMy7PhTC7DQjhewvGYFeizEg4Z2LdduAQUWVzajDCRTg34RZ89Jpzp7fSFJzWVwSiP2BAYK",
  "key33": "3XmFwWhoED59YD3FXtkGyqxbwmttW4aE79qQdXNe93UFTTxLHqkQUf24t4uRn1GXteGX4BJGruARL85EtLT5dDh6",
  "key34": "5uPphUHYvPXyEp3cexSjy69rp5quYDU9pMXbZkVZsPC8viP7aJ9oQVUVtwbxHCvCqHEoH1CGbiFHopium3QTBxXJ",
  "key35": "nuZCengJmwEZXdE7wQjL97a3pgSPt38Nb6eSDzbQFAym9XABcwtfU1GTbUkEe1WuPS77U8HEgTaUMYJchGzLNz8",
  "key36": "46tNrYEyzddAmgzhoEoDmKurexfy7tgRpi7Rwpqc1cF5cijJysvHATiSJkcSLZyXswzXnqzbSQjPW15hmzTeR8Q8"
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
