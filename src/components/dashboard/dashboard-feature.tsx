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
    "276yTvps82P9Kbjbo2qEc7G5tcAhZoxeEaxFgasMk1Ed7D5e9U4N9DKSrMBBgtFhUwPFR7UDNURr4mm9QPcFGCfP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2a5pRv5BEmPfouW8XDudpgWry7PoHYuBPtk1HsGFxWgxhEjEzYpQbueb4t7zZTR6ephiV4RukiFjHr8mjWw9E3YP",
  "key1": "4fc2DmvFKJYZXQ7Co9YejnJvjB6uBsDW7jbrroDvNLhPBTdihSmB5ThqPYsn85zmdb1JDPJTZ3SYcUFR4Jshxs4Y",
  "key2": "45gxxm5Y3PpDjEh7LP6ykGyMGhmwUH6gSMRWGTJfJ6RTFiwAkhgBePvhoWTGvCVDHKLnJhQRfBjkqd967XxfMXd7",
  "key3": "2pJFVQXhaqdWgsVm1cjMJZSUyqan761yHVYhu1oe4aczXABZuu91FLVntFgfcxz2Ta1wZZsnbD9GLc9BiNSezLNi",
  "key4": "4z3qKNQkEnmD9vjYTFeFrMprJmad4jr2PeG1Tq1PGRzsRuoi6poAPexvYYSoDD5qesXhUc7U8hBV4NdhcNEs491J",
  "key5": "3HSTKTZeN1tZLR6gUoejjiA7FkCrJvMzfDkBs1dLAb5SUxB3MGza6p6mjuQCYxUG3mRfUkM6aFWzxpBJ5jNm3ehS",
  "key6": "3uYVSR8Puydkt2yFjhDNUFwBcADLd6jQxKFsoPunTpdPcyJF8UZas5mMAoH32JQecaX7B58vmmW1G9vq3Q7T7fXV",
  "key7": "3VKn9EPp2nRTjRoRiRhx3FVr8quToY7M1enk78G6pTmqDUi3AS5j25kuu91YGYxE8JbRxNhtk1Th82f4r7pAPvSe",
  "key8": "5iSanvrc7Mw34w6yub3XYhmuzuG5rKZFfsv1ad6gsa8g6xJZ5QxdUjEKjSULSPKSF6zx9dCHa6hRgrxTMHgFfPZs",
  "key9": "5y2Zra1ULmaebH9h1bCA9gGfZVL1jMmZXtq3eqmzjeYiE9GKT3k5JXbNsQFscbj3Bf8uXNuMcYs3gdmmVTVoAvQm",
  "key10": "44veFWtNJ1h9AEGjKe1FkfqaAgZjAKfhx1HbSFiDSgVFbPi3zEzpmoWtUf5McR2S5LunjwVwY9jbGbMk6Xjasavb",
  "key11": "2kPeuSw5qcdERCXSs6zhtfAhPjyb5TjNWWXDJacCGXQC5TxhqdLgdMJiLaY67EeYchgn4bWKCN82D75fNu2F3bk6",
  "key12": "WJ61HN5tsyuzYA9BkjnXgYYCqQEXMZSPAqwKrKGTs2zjV4Dqh1KA2k1qz2YFWK4vLb7ZpF5aJztz5ng5kSbqcsJ",
  "key13": "3Q7Sem6k7j2K9oJ3KvDKsAiDdBVTHSLkDSSXA5CiiZ11gymnhVJaeWEMG9YUcuBCKuVEBxD66Ff2TgCrJ3aK8zWa",
  "key14": "4ALCW32gcMUhvcpxt6FCofzu5QoviLoQ9AMB8ZNGpwV4SdCFx13tHtfew4FJbsQP5UGhtXZB95hWS8zRgFnvTay9",
  "key15": "3UgP7zDGV5q4x36gBquGr2HDurCeoKZwEBWq6m33aSVGPTYh9xpAZbb2mQKDENiqfScNNdgj2cEFTM5YN29g268z",
  "key16": "5uabiDK1Da2fDc5Dg1gj9CA8iyHAqggefs5gU6RsXVjZaPDnh3abexa1YQzTDk84rdFqCDTh9rLow6t8Efc7pS8t",
  "key17": "4buUNkmyMifgCQyzXEcZDp2pS57vNfGzm7YTzoftfZFVGSeV6L9LYVqRzxsNfB82A7scdqBXWdtoRmCmwj1pXeH5",
  "key18": "5aWJwmBuix12RE8mty2L3xaZf6kWZnYxMyMuFhoz2ho6yUELU2TuXtGmz7CHYh1GLcf1ENpBtHYBQkZSNtYL8ws1",
  "key19": "2ZYHdufxJKSsDVdccWZUGfmi6DW1nrZU4rhcotvv1aSz7sDvv1vZ19Rmq7bLUqfyYg7HLrRXY2isFd4MTNShTFcm",
  "key20": "3ExbBqyRovgBY7xchbFuRMY1cyRP5wyfZ1iFA2U5o9hcSa4mj9uq8iQe9fny2tPsijXwNkCc5x8Mdj99gTE1rAqM",
  "key21": "2qExHSn12mgsGwEPhgEks7YDv4W5bYibJJMHzAZh9h7BydkruSF2NXUpN9mm8V2E5H6gygpg55D3yhqXCyCKM15A",
  "key22": "2QMgd6Sz2Te5EMo3nfdiwSaDFt1t1iLJufGMJgm3tPa9GHKRaLhr2tH1ZN4ZYmTjr7P2RCPY6RgEVSuBAUefRdXF",
  "key23": "7PUSW8X3eLVXtk9MMvbGFzmFVPiooeWXuwYxBHFcWzeFWD3tGYxHBRdR2S9iDvMCEzWsoyB6u6QcfXPEeYFbYKt",
  "key24": "55YVxDjDh6Vmi9ya3bT7ndmwaD6Jwp9jk8xxE3BnmtaQ1Sute7KFBVKd863wbQacRhi3rj1HTuJLJcFtA1Fanzpe",
  "key25": "4uVWsMEA4WMBsvuL73JvveTrsPVz8jLmxtKAKtVTk4v1sEESxrn3teFSHb2FXa5AN3F8Wf4BSEopBsjX8DiKXsj2",
  "key26": "4q5xaRe474PAPJQ1vGpUKgegvw6najQL3bcgXp3U5sxxBUtr21nUB3U8bKo3RSvY1dbnyKPodCwZa3yGuaxVEnpv",
  "key27": "r2QrW3KgbUH4WWSmZD2tFLiYEk7Pp2vmsGmSzvE5VADrMShCZAPJXTv2taLQ8v3Rdu4KfWqH1Go5UhscjW99ezA",
  "key28": "bGFF5MM7N8pwGsLEizC1sDocQ7DsKLRwJQk4ZY1GtuSYeNCRC9C8WUCjWwx7cEAUQb1MNp1HQ3KNsdHugh2zgDN",
  "key29": "4iDXtzZ11Lot8mz6ebMnTV8hbo1wHBQbNqNFUzgY24n5dDYKV3ESse19Sf3xURRHVChdmPaCftDHuz4qV9vpFDER",
  "key30": "4KeFviHY7tysNabGr8EVnfjgKztTxWJD42ULVGMvy9A1KCih5W64gdQnBYvooquvzZCEtmosNdu5nM6dE4JwKPaY"
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
