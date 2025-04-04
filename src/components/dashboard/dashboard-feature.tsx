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
    "cT1WwAXWUCKANrS8noX3apzXhqcLevTgDxGPD4FFpArpobtN6LQky7qZPZT5eBjhLuBLrwAifprwJYjbcZiX8Tu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RqszmDdZJyGDaURBxT6UMRJYsSM9Y34tqSxu1J4tukktRTN9YpaWUf6NXWaZUc5WULktnFPqb8zKwFSfqw4tbwW",
  "key1": "4xpdDhDtfU91DzLZ8bwiHUhCFgz9PgEhJup9w66SVq9M3LQFSm3f8XrzxhNbpHjDRPYz3jwLVgcJ6vjT2kwwt7gB",
  "key2": "bRbxyD8A63c6J9mnwDTPS2EGy6gT9FSYYFK7ftFQJ4ypenhCC6k434aCuPcx5YNusArcQpkivRDLZxoL5LpJ7bz",
  "key3": "2shbwUDE5h119GYUTY9dgAytd6T5nMucbj1MfJ6xWsmyPTzLGi8zPcH2SBoNbwrpJd1dR2rpwuRHfcajKK9T4KYx",
  "key4": "42aR4h3rK8MXTwuazqJuDYoukSjCedbwwPvomTibdtBxbc3fEaJP7ZFWEEpvHMnfiuHXfbVmXeygaiCbsKkCUSfR",
  "key5": "4zchzTF83TRkEGzswQY8zHbK9MCdXKrFTcXwD1EEYHQ6AZn4sTPtdBmPbqgGGegjfLre2ozPGyAkQqxx4jBgHhZd",
  "key6": "2YqXKu7GZA7SgD9RQ24fXCf8o4JuPqZ9LETRAE6KFZgxWtzRDdYrB1GPxRAW7UVegY831aziqTD1AZ2VCXy1wWE8",
  "key7": "23sTpcj2jCKzTwWDmAYc76LGPjeF3TxChTquuM6ZyhqYoyMV868RffBnBH2rChmFxxuZv2VZdZBSNKSLtSYksz6F",
  "key8": "RhcCNLoSxvGygfvuV3wLfVNL9vE3NTdT94YxyBssDixb4fkbBQ6Dj5EnW4v8G4XM1D6SbHhG8rqmSU7wck2ZMma",
  "key9": "5EQHe91qjFoYEtXeZiucDDHAynh6C55Tey7KS3gribq4AhmCdG3eDaZ61QMF5qESmZhzLfeQqoLYjeUwh2E8heiE",
  "key10": "5wXxSwJyENtGVyDL13rVtkNqBBS2LLqKPdQ2MEzyRttyfBvnk7QQ9xUKp1nfpKCABqZKPtnfHs52VhXkLwLFMT56",
  "key11": "5yX8XaVJgmQDnNxLaTUmUQYqMuzgTB196MtDJ4WwNxkoDoLKknSzP6bXKvzwkKwobrzKtFDLsKMzbYFJSqLFyxvj",
  "key12": "4yugyraUpXVNEwcWdDrritBF2Fbw1K1mVC5uBpBGxFNfgiEkXrS5jNn3mAPpNNtgX9vnm3J9azGuEkhNRh11fTWa",
  "key13": "31xBpj1kVQpFDHHV7njghSSodU6ywNhnvWw4TJiEBXXKNK7YxHM6iKcYvpYpxtrnpuKeQEdp6eRsrWiW1tA1hfp6",
  "key14": "f2SAgVi9CKJzasR3nbbdYpdKzs54pRDnCQz9iwXMQLA7B9Z3TuFsoar79wT8iKgutmo7yAZhm65bQoF1ekoMFzC",
  "key15": "3UBH48vjWJaVmy2x1ocJHp2A8wUxppPtrsPmxamokqdyMyioK8F75kDg3ApPaCWV1kHpBk9T9LzQn7EkMA3QiPcX",
  "key16": "2Y2LY8EQ3DU8RQkQnSFas1yNDd4aE2vRTzw1SzGN2aC4thZoubvwZ9DFxyvwVh2o5kZDQuk8SF4stwkJW8sb2hRW",
  "key17": "28Fpkvwqo8ZCDVsDN2jLXdZMhbQTAMPLQwapAQajhjkDNANSCMix3CX53m4n6Go9H6jGNhDoKKhkyNDct6jRD8M6",
  "key18": "thbGL527X5wyjZk7UQzJefVnPRgGH1qJDxpPAeCSofA6ccwP3M5qeKLaELwyvszB6mQsG3fjUHiv8hTL9Y3o97C",
  "key19": "2tYQz5AfZqQsnzwW4h2AKJeQECFUAasmc2PrKUQAnSgLE8B1Xuehy4qzoxmWNTqfyey1t5nvvuqTUHBxbYjYEJS3",
  "key20": "42sJsfU7nsAHmDd2zadv5b5SsV9bnoeXNdpjC3LqwDpE541tBkEPcRREJhYGRi1Se8RBLjfx6uYAj8rpYwY4doY5",
  "key21": "45jVVLXuM8BaPJErQy7XVLm5ass6JQ4yCxWMR1DdgEtKF8QBtAgQ5zTVk3bW3DAFHrKj2ffxsLJt5F4XV183aZHB",
  "key22": "2pWLryzppDsSiwYiZcDxoexmEX9xWZxL9GKuxoZBFKRHcnCvfHSgryqNE17tbkVfFAG6fnhaJs9Q8diAbbU71R66",
  "key23": "WwZvHZCdXukLtpaFoUdZShAMywdUysAW8K4oxGcwgY8uq2sKhdgETFRE4T54SvDmsyVsm9kyhuN7FnR7Lzo9cKV",
  "key24": "s5K2kLFfNmHWBS9Rr1Wr1qSLCnCobLS7Bns89PRHeCFpTWRmWdmMq7cJbtRxug56kRWHG6WtBqwAzyqzZi8G9Tt",
  "key25": "2AjPysAfWrPmrK2HUKXMpnJvfgaw578zAgWM7kzvWFDznhpk43EH6pxPt6dEwQgDisfHfosBsjtB6wTtstCQ7DQd",
  "key26": "5hGp5D7VNxLRKN3wa5twobMgsr4AMVhEzZPnsdebwCzKd8oNyQJPJBAYbVgnnc7A4kJmNf6HYvDCXJrfMSnje9VQ",
  "key27": "3qttFhGnKFFX376o7b4pY6TH8Q1ktzuje3ZY6UygyVJuZCZZrXMa6rBnX6bhu7XNxE7hJFQxR9DwQGhTEiqVYCFq",
  "key28": "418ZWUDidtGnpJSpsNC7gMRvSwjd69Yf44oZpycsnbAj39ENeGZfQkk1zEmrxntxpUSWyQcM3mTcTvGMh7ckhXYs",
  "key29": "5oeYLcrcxiYKETLfsymDvabgfEa4q9bHZpbRwN8CRyPrKUn888aCnpYBmwL8RMYB9atUg5i1HYjBvxgLTkXGnTmu",
  "key30": "ynNJRYEEJSJMmVPJFX5XPvtrG6C5UAcJ9WvKKo3kmyi6NnTphHmnCBXXVrHkJJpibta9JhG2H1Jp2zfBRwvgM79",
  "key31": "4iTLVdNB7AQ5AYcRSSQRJzimuHEscF8RxN1AL6xQyCX6p3wgVvY8kCnzmyqAJ2KHDwFfY18G4s1HjEc5scR9Di7g",
  "key32": "3XusyPJd1WvwMjm2rby2MJi6emxAyLzW4HgEzVufYaAREjazxyLopqFGqc3HHRrJsWaxroRcgxEWJTxs6L18fgb2",
  "key33": "5tn5LqPgivL2gteQgjRQzjXtFwfW4GDnPG9KVNVoNSTxcsuGKRUhrqxRpiK4W9xLZDyCdjY6dcLCVyAigkoUHTK3",
  "key34": "4br8rrKAyBokF6pNw4oXSjUdEmFGya5SXCZSUz8akuJawbPixajd1MzUoJvfVmAsC7B2gLCQdvM2AUohDJqaKQTu"
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
