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
    "3eAn2JSDBoUbyVPogiAzai5DNErzgUqFhvwkCgs8uUouNYPN47bELtNLsvCoHF9QuCtXjJkRbmrXq1XyTGyTrhpt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RjBpU75Rfn8j8ds4oDShAfiqr4X8byrLtjyDMD3po1bgrG4CyAxFFkA8pDaoLWEf1YW8rA6mCyVJxSCMxfLDkp8",
  "key1": "42sYBRshYudbxcxBVeqDoCuy2W9c6pk6LQpMSkJ5LAyYoirra3auzSj6VaiktjR8Sa5FZnY9aJzELc7p4Vo8ADMN",
  "key2": "Ew9TA9T3cvxA3S4CduTbvH3MYbSSA22jUotuZ4L1qgBYeBZNTDxvvYJjo3th7mvRmtKPhn2jbL6PZtDYGK6ErNy",
  "key3": "27Bp53zedBcLujezXR9cVQU4bVid9CXPAKzPGug8gwANn2W4b2DHjbXWs4HtyPsMsYsiVkRU2Vn6tTRCBonuWRBF",
  "key4": "495aeqpLHStyS2fyKzWFsCEQxMc6kQ7vAwZTHytfg4asswyaej5NbHQRvj41ZG8BRXS8bTNHTnZ2xE2WDZwqS1U2",
  "key5": "3ytCk4SrBfLi6Z3LbGQDoJ6Yi37rr6MJaJGFg7JVKjYp6dGNLbDdsfYw7dR98azeVW2dCQcARbrGidd6zeNk5Y4m",
  "key6": "3XtMwzJqsbjYkgJY6rT1UBZox8EioNx1mHC8DDXJKTA9wkPUbpbevJHseXoj5oKGbJygQnUuHH2nhG9AAJgWa9Hp",
  "key7": "3g5mLsVndwtSxAzsE2xUDb2XgN7Sy2M1PEV1YmYZa6FVuwJi9BhMauWpPJVGiXbLC11q59ADTEiW7L7bxX7MiJTW",
  "key8": "3UbriXCdXBSGK7FrMpcYXRsoCPdcDFtvnUfHDGZfTAisu8jcRQGViuJW896gYzjQqBEpfdBP8mQ2ajPo69EAbd3S",
  "key9": "25HAkXsFdbwmHZ12fzGnK5XRc4sf6A4JZEaKNo3rZbZTvcdk7xTwmPFzd5uNwMqU9mKKbJ5fyaV4EkXSHjbggXda",
  "key10": "5N9VhReyim1uZqKN3wT8N4DCSrAmr1ycVgcebvAzybCdHLhopBvazVsV9B7FxeVK5pTDajsv5j219QDMCsQg52S2",
  "key11": "3FPzKsoymxgFJZ1UZcXt18UdhFsEHYQ8CzbU9TfQ6aksARNgcrURrF2J77tkNdszQjkzkoWHFnketcLUMBqpY7EB",
  "key12": "fL8nwd3V2ZNxydBXoXTTse4HxjELBNSGdh85mw22RJ175SuiYcjHmM76vG5zx6sF9sQQooZhEaEPi8GW7Xn6ExF",
  "key13": "3YwcbqSJaNL8AN8tWnoQsHo87XD8tPGU9Q7tDNoCRBunwhwBh9vnuYVgqsRDYxqXCksUWdWZHbbfZbJvkWXJNfXq",
  "key14": "5aPNgHkEKDJecjJ8XdJpeADUWG4jeioA8mW3EZFJ15WopApXSPq4tfQtoC4WSrYxCgddkEtVPebcvurZ26MGfGRG",
  "key15": "5vpSGtMNxskUEgazTd98hzNXj2jCRaz2JAsQ3zsLqDBZRhp7jeF2WCp5qaTFZaZbcPg1UkQJ2De8Ls97X3dakgiY",
  "key16": "4wPdxHyzQHVJxg4qbtPQYog6WF1TS82D1Z3quSZMyriQPMwETcdEEqNHkMbi53kKWNf6EHH56G1kpmrL8xU9DiTM",
  "key17": "3Rg8JedAKmMy2ubTzDrgXjBmZMrgDSwtAdSuGVqsaQ499MrygS3Naue8swsHFer4HTDwCA2rZhkdVD7qYjQsKMYr",
  "key18": "x1TKDQohS6wrkQa2BjrgdpW7t2s6bb5FxckkrbzntYjAy9Z4481jZjj3bVSXVSSDxrHbMAuC9fsqz5WXEDL4gwt",
  "key19": "3FLgMmANoAioGQxRnoegKiZxrnFqwKeCa2tjAgB1AvQzng2FKdu3XKH28YjTXc29sTgNHn2WYaFHBPiLKbTidLHW",
  "key20": "VhRxpoz7cAo7YNNjxsySGJtW8h2EPsAFXfHp1VrF79kLkcr9PPkzVkr5bmvy2ekWFQYmp4VzzpfyS1CXvYXhwZJ",
  "key21": "5Lm4kH4stkuRMDoAGxuXp8Ajh8RRoHmaudy7MDfNesP5P72KLdHQd5hhM9hq6qhcd48TcvA7VHbbQbJFtcy8b7qd",
  "key22": "n7EZebANxdiJkZCKgj9SaLsPAhGwSKUzSNVSopu5fRjWxX89cJ7sUNiJ7ZyTq8HNQNZeMeBxJBHYyefn3pqLFqd",
  "key23": "m6mBnz35txa1t1zTeM21UrSQgE8qnHwDBg3fMZAmPFZYQbARP9a36uFudsTVF1gaMGQazDu3xTNkn4hnyMk1PTT",
  "key24": "2RRymvWYfDanss5CC6z6h47J7UWsWDPnE5dwnuaHtvdey1NevCSp6oLqipjcLs3AfiwS6rw3Fv8MGtPHnNeFqiEo",
  "key25": "bST7rqoGRC2sqD9FgQaWxDMAnKMdPEofoeNt5TMhi8XGHUDYp54kNzSE3aDbT4Tfr9mwEjLgs3cLZGbfJkYSq5H",
  "key26": "4sbquPpfgzS3eDev9FmZwRAQm1Y68kSH5oRpiJtWvvn1RiCghxdCpDhHKXVfBET92zhDnaRu6nPU4BNnDeDZs7Xf",
  "key27": "5EECbyjnZQoYnz5uCjHvAqE5gGj7etvQx77tG3tQ1ggoJLGeGLCzZPCU2YZGAfWDqEpNWtV7d3YJeMPHi5bWAgxh",
  "key28": "5cCTL34UDuXSwRj1Rm7nLapnYsupw5B3HtvPvL5Q97we5wVpuGNF7RZgVHPm2157VF9RsHiGDzUFdgNCbFYtKHSZ",
  "key29": "4pwZMecLrCVKi5Nha9GQFgVE3Us38Nj7KD36PNgCCgx6Qkvhoi1b8auESVT9eFx1u2c29UMEXDdzpLLrjJwWRzGg",
  "key30": "55UFf4gFEDkAkxh6AjJCppVwp2miEDTimoFhSab2hvA7sZKfgpDsbpawXer4CWVADqmyhfjummrGjRmLoFJgRMae",
  "key31": "3os5oLLUz8y7Q4jyMP3p4FeenaAzDpt47H5sFBx1zcUekVSN6a6KDPMy5DepwPH5sd6FqtHPGU4Ao8Xnes1g7p31",
  "key32": "G7uJrKSKS43taQN686WkoZ2Ce6T5erzFvzXaXhymogQAGMcNWdfE8TCkMZnZPpVkHrbcXVqZpaTvfPRyqWg8Z2U",
  "key33": "2VYFVNu2MiK3mSYWt4bmHnTLcmZCENzF9p8ndeEWfGyDLKjsDzdrso9yQ1w1szD1Jk6XcXnfx355HWanHzsGa6Si"
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
