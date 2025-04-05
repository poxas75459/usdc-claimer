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
    "3EN5SuEZ2EsLeJw4vsGpYLpVamWvDvjXJzWrDRSQB2CkXNF64s4gYJchYmbCSL8kWfedGfsVdZGdqFm53AU3BMdr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4x5a23b8jz1esoAtKWidWkAaxTx1ozhKNS58D2qKkRkbojw2LJPA1M1Zmm96MyMx6JnGvPZceG6xkds2Qh1GHZnL",
  "key1": "5ARorQPG1bjy7NtgPKvHscDiBsueA6cBwyiCHpKdqxUsxaxcA8xdm255cc87Esa54Rk17hmqXWh4FPQs4aGQHxTX",
  "key2": "5FnHHopkZj8dqBVEX5qLyNpwLR4f2i3rtWjCBJ25C3yCbkuJ9itLbouKsAzeC3zD9ytwr1zhXRZermVKZ4k2XkVc",
  "key3": "39xmhgLiMBtzsNCNVhS1qmdZbrDXF8mFkEgGhgzuRSdvpLs1FaqT4Lmwg5BucpQa9XuE99JtS5vRZX9KqDnLDtrf",
  "key4": "5N3QgSWZhsqa8GSthjLWwopd3Uh5vP2M1wCiRkhS1cMR71nniQkhhFV1uBPvG1ynLTKiaD9xjmZnxJrLGR1m267w",
  "key5": "5zGbCy6c2e2f18mfp1MenVp5byYeTaVonMh7xNYr5LoSX71vXEsraYrFC8GEjoorSTgXyVd3ZZE6inqxzPyNVBMy",
  "key6": "j2PeJNH8KqtZbkb6py17EFk4dApYwqL6s6o46mMoq2BSNprA3sgtGotS8DiAAGXTDGWa3yhhxbrEKFWegB8dzED",
  "key7": "dLfNHstA1Jmse2MwfV7SAppqFMMtayiC356GPTTs6wvuxSuwox5iFks5NKEyk3n9U3AFoUNrh8Cd2LktiswevCo",
  "key8": "2mWczQ8GmGxotvhFE7f1cX5t1tmnEyBtRHWASJ7fX5f772EjEF2vfUFdvnXRKN6fUaaGPipQsaeZMeLYyoe6N1vT",
  "key9": "V1NrUYawLM186BfEs4KJe5cvhPF6ND16SNoiCtaq1y4XYoR2uc8oeeUTnMJNSEd5RSXdyzyafTAhxZ4c8M63GEB",
  "key10": "4Dh9X5JjUCKSUGjoXZhSJ332LFN66tYFELGbBQvxew1Lzjz6mkoNPepfSKZapxzuQvV1hRspRqyv4FbdVHpinmTh",
  "key11": "4MGoQo1ozbTCxCgWhyFecEn6ctoYNRsGCCwiccex8DFsxUmgtDzz1bXuVpDgXbkVTK6L3EqvqnmemruBaZFGUA3Z",
  "key12": "2P9gRNAaRtcDEkTxLZu8wR33TgYK8KppUBWv8DSkHh9tZZ8pjUR3JsN9aZwWFwy9r915vfRyYwLj4uduig4EkRUv",
  "key13": "3xtzmw1xXbVy54LW1boxcS88nvGvqP9AkELJGcBBG5JcJ3yyr9foDUcrqufYYyjEYLg1gbcgLk58HbMLJbPsJXoL",
  "key14": "UGvXSZa5SWbEJt1ee9y9irc5N5QoCEoxXG8Ear1Rsc15jFxvWSvyayjPsqf9RhGu3SzLe3vucWYRJzzPrgsvcMh",
  "key15": "QJ4x4DTrLDtZ1mi5Mq4uAtG9H1gSdPbZVB1to6HxqJHYN5kG5snHBT2yb9JTeSr4HYU7vooTBjQn8gG7omgPGwD",
  "key16": "4LQeAdnD1zQ942YDZ6bqvv8dHFvaweFU27ZE2o81qfJXsyriaCVsjKgN3Cw8fsEZffjD93oxxQwzPVZGgRrJv8Vs",
  "key17": "4ir15hDFeqYmRCGh6rF5NwzRwrn4Wz8f9xk29CzbmC4YiKP1sxHx5FG537hwVdtTH1JT1YSpfMNBdinAB4dCn6x8",
  "key18": "5NTPkyA9qKd6LYhbrWvHfbwo1zcu4tpZmkgQF3pXropqXL2GkN1FzCLWbsTbRYfbVF4iD4fHSJFFqNoALvA13NUq",
  "key19": "2e85sen7XCfwUL5rWtFuYhV4aSGMshYefuetDmbDoiZGYJrgSmXJ9eJEy6M4mj45zBYHqxZkJpXB6zyaFGe1yAXU",
  "key20": "4vRJKZa82gxUShqTkXjBiRyEWQ7yEz9kHKfjxUWsy3dQPVvzrV37c8g4qmjTcVscvuokHQy99h8wb3oGRsXnjJL3",
  "key21": "2zX1CE6G12VhBip2NSfehipgZSPGoNxQAWSgX2JHKmkeufpLcvQbMGEfJanvCLxFNScWuvT64GTr7dEob5SvvNpe",
  "key22": "3mZqBJVGbjhH7skBv2kqGYQF9g3ikH3QVMy8xbUvg87TDeTzQZ59eHcnE2fpJ7ekkS6NxhcFv9CBpLW4rDh6ux45",
  "key23": "4Q6FgXoeTbwiRKYHunm8rS35XyT8uokErTRo93qUCfWtGfbtsS8s5hbq3CCWkdrn4cQ7kizJVgm3WiiZGdGYTGMR",
  "key24": "4dXiw8YmL5fsPJ1bcfwtnXfpXMzo6gQvzQpz9Yh89wrpBUdEbjwTEtfaenqedXxtbef81AkwVqdFwf9aCXEEDoZy",
  "key25": "5KQgRhUPE3Cewta6ou3xms2WDR6fkJpqEAvT9vyDKERSauBhWZMxQtiSthSJKuaJ7VRyLMYJFpHEkWkSNGh81JeJ",
  "key26": "4iEb6XaZ2aFNcbshQm6vMmbLNqJqYUQVjDiRtC9V7N9fAQbHeRPNGKD4PwDpYqee6UBLRZTrkFNCycXKQ3bKkz2W",
  "key27": "2FbUA7a5XLs1NJkkVU6jYoWA71N74PpFoXboP1pD4EGMYWYm7mindHGDwkyf6oYKqPuce9ZAeHuPb8Gq4JDYHrrp",
  "key28": "hkxzPm3E35C6oeezbqgEZwdZnJFjLMcY3VW4U85ZQcuAewas6SjFmhoQ9nDdbpCJj8cUbKDfTKyEAozoffUNkML",
  "key29": "5Ya2ZN7z7nLeSft4xKXdBkSu21h3yWvzLoKk5wzkYAjxpGetZTZuynp3MYYoa6h6CewbrtpXUeNJXdrPteEBZQu",
  "key30": "67MaUjJNbyDyVegKVKbV38P9jgXfZaiQdpNDCQfyc9qbJFUrJWLzrzJgHtYULrWLfmC92zGczfWqKWmW1n2b7ePH",
  "key31": "kmpaBsRj7mDukU7FLQiBWSsw1ALn7RC2gYWEwUHPVt6kK57CcwZxGZo2KS9bqdiXeLbjtKRYVQDuTvxufJDsL5C",
  "key32": "2uLvpyxmMnX6Jbzz3kXTZHcAYyfNWfjkHMdAtebfC5iMBG2UogkYU5x1Nret1gRyeQ1LSTuhnfsnym1p6siWzGY6"
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
