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
    "56HuZv9yAgeWVkPtVDyfhAUgnxT7LXqeLWfEkumiszLJHcv8p7pydFNmvcMYkDMVQSAtsi2wKSTqXB3RHNJgqHoG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TYdJgNUYVSRf6s5fZAs4dd5WN7rfNeWNnGATpzBsJTnrHU7gsDXSvs9aRENu7ZiYRU9AFTRBmKkvBZYu9D1Kurn",
  "key1": "429qFpD8NPwjsCoU4nfjU9aqMBm36eHdNhks1pULJkkZCsxaPQtotZHBZ7ricr5D4zbA8SbNG44UuSJwCzo5skF5",
  "key2": "9riQPpsaRL2F5vDxaaWuC1NeNakqV1CLTtVmkYukm8usqybCbSpzwmQfHTF1DGThobsCVqYyjov9wcF555FUNzm",
  "key3": "4Towhdfe9PwBaZpEwe2GuBccN4zBJYyeDSk5MeCBuSb8WPfcMT4AfTxKcaE88sTxc3UQ3k3iV34r8uEvRWfhqQKE",
  "key4": "32SY7w1yc3vThNP15RnLQhztC4gB5CR2pZwtRzqNL1h7dFfJqNzbHVfaPzzfRD2A9tRW9KaTKghKhTkH2QTTMcNz",
  "key5": "22LGcjs69atGohrknpGuEH3QHpVVq8A98pC8Q3dMwpWAgpoWYfYT6zHehfdwFTNoyUnJ1DH3Z1x4YW5CEVDwpWcn",
  "key6": "5y26fAMN9EUdYaRQ8df9ntqvkeN5KEZMEihySB8LAHQ4tXFw9qRp6qHnBV8CdSVDFvmmDEh6iH7y8Fd7zxfWnhoF",
  "key7": "43ARADpCVo7ashDwJMZYwxsLvgrqHMTN52Rx3FeeaWexvLeEJu8PGVjLrw1zPcwnecjGTcTaTSkdgkqkHC36QReG",
  "key8": "4xNpkQARYpYwF3mvwfJEDtu1BiG77pXGKUnLNh6jGum1sw5z4GoWAymfGHnBKTsCKJM9w6yejVwur8Qg3sezKQXW",
  "key9": "5qZFB7WjWD4rKsfow3xk3NhTirJLwmQe6AtWFtubDPSMdbbCzdn4ZRLgCV9Z2iN1rAtphF6Jxhni7X3WV1WktYDR",
  "key10": "3yU7kov13YAiLcXuPY98975SGmRE3MynLAMMT9ncrNdrrrBiKXjjHb5p2w9o5CMK14hTPSG4o6NMH4TebCFiniux",
  "key11": "nnugSMQgFkKHzJXi9s5guFn8u3b7x4KrKHBB9tz5Ad4H4fyfyWG4ASGAoun7SYMghyR5tQ25Kagtwg4EQQXXKZz",
  "key12": "3jVwEZ6nov6T35QXzFZt9hGDoj7yErpHchQ4cEx5VhvPHTGQBr5R7jx5MKTwVADwnNzYHGfemQBfw91TmfKgWeFw",
  "key13": "5STc5m8o3KU1e36YwhuKgu1DrapfgvMm97DxDAD3iDLhVswT1U5fsRZ8pekyvZaR3vDVPK3VxjxyGnMYdvZCzrvy",
  "key14": "3maAAxB92PR5V5SQD9qLCbmZSJsKcv4jgNK1BQwHznKmhBAWNJnMpYWgQsmRQHaniYQbsdquZsBhzDp2Hzg9XsjH",
  "key15": "5krGgPR2xn53YXgaeWn6NeGM8LH5YzfR5wuGc9wuHkZ2tGGNTniMUgMc4rPaXXpFnGUv19GyUFsiwYBnvrSRYAxN",
  "key16": "5x7zqtJG1oyU6GF6quWkMcuAqU12M7B4knD1vKyNgZkkeDqVDiTkigwichRs7AiLqBNgXXbZG9FAdvPa4gnUVMDk",
  "key17": "64Uz6yNnaSUUk35R9SVomowu6uNrUrznvxahdsAesCPUVKyS2GiPpEdDLCrmSnF4YefRtFigaBhiNM8xfwAURFkU",
  "key18": "4zMGtqq98RsNoTUVkYJpXLCej22GAYPnfsit6yeM8Pth6Jq8nEhHwX7Tj4BPd71zWHnZwCLwHL15e2tVCQBFaD83",
  "key19": "35gHxicA7MNPC3J9YWsMXtqj6NahVVsC9piDShVgFgNXLMR4tUhK7UHcLUiPnn1w2XRR977QiJTJ5TAx3NyYcfgZ",
  "key20": "4SxnXVao2yXyoFnAKfyVVSfQ59isxjsb9KfhGYGJx1rXueKo1xQLFkAAH58XABLPwJxfXQF3YVgUXWKeunG54EsR",
  "key21": "2s5XAZMwkCsG2M5JXHE646EPcGUWRfJtPuMxwwzwgwRhf8JDozaV8hNTTv7HDnESvAdeqSATwUGSYDBZuRkG6AdD",
  "key22": "TRRfVGANvdQmffLapjJw4tpy1gvvrKmZxTMXiKm1C4imFbEyXa2R2Qk6wC9i7rrkHefQJoogNz3xLLnX44RZcVJ",
  "key23": "XvJdJM6geobk4qpBC28ahXoWKxiUQDkBpCLppj4TRZ49pd1Ao1RgaCMHgJEWi6EpiPANCQ6h8gbq7zc19TTwhhk",
  "key24": "2mhsRRzhfCgkqXSrPBJfmzNhydJsM315JLWjcLXQ8aWPcG39vXt5TrBfDoN2u3sCEvX6yTKTmMiKdYGtdbj17zLs",
  "key25": "4F9vVQMUgm4a9ipJ7PT6hXaDexJUdrLH2mT3sEx7JzrU8m1147LLaoPyj6VifkECMPgEVYJTi6tf8JXMADubbe5P",
  "key26": "3sQghQnnjVgxYZdLAQATQnLCMHf9c6fNBvL5Ucu2qVPQpidWkwPCs5unwcRWU5wcSUZ5u9SUszNPgoG4UgpPLGDb",
  "key27": "4JuearJctHdvaC9oQ8yEMs5i44Kd61tJU1Ab88b8RKghNSrJoWrb4xsP75C2P8rL4M6adwYdA4HtWCcDDWiuacf3",
  "key28": "2o5AyHcQJoqMA1YtQz7WXBGoSSyabDmzxXEwhhed88Cf7PLpnm9Sxpvk5oLwtTkNAL3obNdj7xGfg1ZrUnzBAt47",
  "key29": "5aiHRic13L7fj4GZjKdsNqjXtGHPo9Ew6Mt4iDivLxsuVG8dYC2eUhwm7SAs5NZ9LKAMpmhzUGFyx4kxvnsMjPTe",
  "key30": "2GPLRAwueJg6jsDswzYxdsgoJ3wQJY8eBYfAgDT3UGknnuutJ6iaFc5q947TjbTzRGyouurHxJ9snj5fFCfqLJgj",
  "key31": "5ajEPHKN1TQbuJHHvfTiYZ2F8pmSKVbF2RP7cFWMbzf3QsK6ySKbx78N3BGh9YpQxVG2zEWY5a6Q6NdZHrJJcaSJ",
  "key32": "22sur4usYWjfm4DFuNMCHxuhCgix7VzhuFJ1FxGcD5fePzEHtpyrB3V4e23eyvF9aq4VYqAMa1onTxQnkN8e8rA9",
  "key33": "A9DU1jZpMSKSEZ3nYpawu4zz849PG1YEHRAkuy8qmik3gLg63Y7SdeJmvTn6vs2ASxLfjFxbL2pQWT5FmfYgSPN",
  "key34": "4W46RcTXwcg39qDJTK6Jwui5T3PL15SRxCDDU9Zv7dxQF4nfMBRiLFsDa8RxwSgiS7Zk5a87rM1biMaKvTXScjho",
  "key35": "2hcMyMHKpG1wTcLkxohx54hDXVYi85YfFz4mufTKNLb4pPgXCsbQzgMCQJRvD8BJ9BsMiyZ9BFQGbemADMnbfLp2",
  "key36": "4NMxfHzcJi5cfKMWgUUdTLt5SdsRRkUgZRC1Az2vNHzm2JCNisDzf99iECXb8JchLz7dbg5faBGbkVNKTsbJKFzZ",
  "key37": "3ckcQKqnB9mwPCzwd6AavoTRiTKq2PhNvpjkZXc9JFrpoTD6HbP8VdjKQt8ScWR94Fk9RHVLWsJbiryyWs9987dz",
  "key38": "4uzG1iSKFaWieTQZ7wyosfERxXG78AhhSTV4duEm1dAoMhhSW35bCYXLwGSKbJQEVe4QzfHNmom1t7XFwPPjHvwU"
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
