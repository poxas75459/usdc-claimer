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
    "5xecpvKsuDQh1AH4H1sEvosvx6adkar3yVFCo8KAFL6DHZv5WLWJiXPj8iyMg9R9JPEy3S4rq3uQvjmCLNHTaxLq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59uzfhcmwd97Dzw4g3eqwShGpJtfpPB3QAhEyPh8TS5v7oifRcZ7bi36JUrR2wzVgLwGMG63A4Qeu4dBNzPNZtMw",
  "key1": "3t8S1M2iAA4gWxMAviw5yFe78sDGrxwCGPS7WamBWRRdSL1pLK9j2MXWPkbS6YfNWVuvnYUhYeRQczjarVJeCkmB",
  "key2": "5LvMbBtdKH83MFZCRzxjXuSRMC6wfCrb9KEZW6buRX5XgqVqj3skgxzkhn61nwGnpyvaZAcJMeQZEJGk8U74gZhQ",
  "key3": "8CKpfGMURvPJCBqb9JBXAfun4VMszzSspsGjmUWqEcWc3mPwMb4XqQar9HKhXiC22jsVrx4g5hjZPsRuDFLxqd1",
  "key4": "4UmFH2Yf6bsJh11uLB8X7PcWmTUFom5kUD8asZvzNY7oTeihR2Wyp9vWzx1bg3nV4E8VipfegreiroftCb7UthLa",
  "key5": "5Z5ifwTLYFuZiogY4Q59q55jGbMuVMyDzbxBQqwzUeJWKyJ1dYBwVEX6ikhEGUfCzBsyVYkQZMD4Mv8fGbjmCeoM",
  "key6": "joTHDuD4q2V42c3LHebe4NcwYvDb6xx66q2pPyPf1w7raTVqgHfUxUTtf3jyzfVgxY2g2SP5LxvNx9AsULtwWRw",
  "key7": "3vZ2u9sWXUL4UtSL8mgAMywUWZaAtAPbT8Px3n5xGUCnYNg3ukPyDV9ctEnhRh9qVMh11SbMkGkmg5crnBpJhJdr",
  "key8": "2NA7fD1H8hVPeHYkoJ7xLbXBBETjawqPyv42SaEyicVSjZsAiw5RyREXKviawSoNJ9HLB3CQXFnB78iGse83Vojg",
  "key9": "2J5UW7pjPYU7EUZkQRnP1dEf3sNGLMwywz2shPmEX4e2VD9wMSo5qBSJgsGH3AgjbQDNroaiPkGgzqQxQgmEXaE5",
  "key10": "3kkLjJq5v4Va581XQPG8A9J1K7j3jtK2vQLEBbuViCfyWSXz6FNNgX3WooKSpr6FaYrnsfJ3EwVtRKLE4FKM4ntw",
  "key11": "4QM1GVperym2jXR5D9N1Yw4ehdUmn8UFqeaptLChDkYxetGqtKXmFYtFRVspkv6QdXovrdXnaUk191QbwVS52FgC",
  "key12": "5GxP7yx4ovSVyeYs2iT6wCdARRWZCJVpmyw8XwrKdpQgs5AbwLUJPWSaJsRAmQ4ANErAVTH2mCRedmaETeq1moEb",
  "key13": "4FK13yAszvjbRPbeRcHn8ExmpHbQjzBtqCd7bWpGCCS4cj3zXRr8MkCgG1yNV9Q58uFvSG1jU9WUcTe6XeuiZwdW",
  "key14": "WQNe9PUcKZ39Vieai2SDD8TS8VbBwyB48ZsSGcdf6pWC44c5fDpLSQnB7YNUgdmmoCPM3Sbw9rd45Vg1z6Wh2BP",
  "key15": "wfcEjkconosDJs9kb9oNYPtH4JLRbfX3mgYEZ2zDCRRz2QL3WV2dYk4z2xv7RC4qyyNbsuoBL3cZZjD7atDPGwG",
  "key16": "2nUTbRPd2xRmphKTCkTwjFmzG9BCWhkEbYPc4jEJGT7aFBASNcrwW4VCnvK5dLHduzKFYZaUVa3cGnxiXyZbYMT9",
  "key17": "26sCk4joXvFjRMgzxwCdVn7r2vwDv38LTMcMLgYu2heAbwjnzNJTNa8kRsrtJcpKDRuzu3VvwdDavo3RohXhtxxy",
  "key18": "2DS4TEvmk9vcvZA6B1sv2X2jyGzHHjxJn6QhyGJCuRG3K2eZdDUekRkXsKNr7uoqcFgRadjboKKQNy4bV75shbHu",
  "key19": "5gyfjQcfGczgVAM9RFe3xLPwFy1m9zmBAN6goz6Pg2gKARvnpaqiRAmpDVnEd1gCUPVdqzuGeuJxVS738NEMymeY",
  "key20": "31ZqRvRoTgNNrwMV8NEu1gnDoX6sm8Af5gjJCcKNY4TZJUmMP58pPtYnEuhDg8QT8DCVa6LQjk2bPPqyHKm3dKuj",
  "key21": "2TV9HxJDE3ma4WdLCzgzejK4ZbNsU53oUfHGbw4tMVtbmuvs1Km2hxe7YR1cPm3oGk7AeZ8CTKJbWsSjYsVqdDd7",
  "key22": "2WuHF7a85Kkn5z59XXsw2WsTzM8ZMMrGYrkeCLfmk6NP2XimJpf5F9YiMtGu9ZQkc1NgGPPSuBJVmdG9qhifGK1p",
  "key23": "3DV5qacQVZ5hgrFp93bxBStRwMCG8wFKh8Mb58QU45urQEikCvjSmXCRHNCtzBsZbRnJ46iqnPJBDRwktNGZT7dH",
  "key24": "5itmtFiUXp8Aswq3Ef2vqZzGo7KgB7kEsyJJLPx9h9Kh1TBrPCayfFqxw9rYLFZnLwEKjoudWuS1k1BdjRGHdXXt",
  "key25": "3mg2r9qt7D9m9kAfQPGuSnZgGz9NUpGcgrCy55yy4kjxGt1NGWdtvfxcf47i3gDGRcKmhQcUw9f5mzUJCoDFWqWP",
  "key26": "3bamUGi3goEs3AfgW3ytWRXajt9Cn7BYbfQcZ2qBsWDWGMr7wXF7HkvVwvKxJEHe82WqgGibP2Pn6TCSgoYnJEED",
  "key27": "5tNDPd6TvpB4xwzqWbt4duEXk3HvmAEjweqReXcmgUzXbdVxEYq44vkcD57sQ3u3pptpfS5GDyRBxcFMHHUyQWM",
  "key28": "4xjoCmMqtJ45j4cXUa4KdW7f4ma2WR667TfvafoNYSy9cD5pfYFPic6bh4D3yC3Yh6kE8GrGk7dCQjS5bB1JA4K3",
  "key29": "3NCmqLDUtwgeGYZStMquwzvu52APCdry4qd9sPn6Dc3wHaf9MqKhcJZf7PDgD7f8EBtYkCPmEshdtWiiArqCXZi3"
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
