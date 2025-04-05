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
    "2CH4rhE3XxkQFVWnT4rEB21Hc1hkjH8b926DoXez83Gyncd4xkhBqdMJMpnK7fXAU2SwTosb5mrFNG5tbzMp2udL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "227T5njLzCrVJmrt4q61vW4A8qq51bH8q7XBiaR3Mus91JZtVmoLg4C49LYDzG71CpEfEnNGRR1naVjmmjvVFPX7",
  "key1": "5xJKbNvLym6JbqkXJqZYxubtqqnyAUqibfwmg9miFZ7XwvDCnctisqUQvaYMs6FEjX282t8HYAgNQGvWKcZmQUEF",
  "key2": "5Z5toB5pEAQF7Pz6aJo3qVJ5L9cXEyATqUsEk8qujKMfmnRTRUbQLBcS91evsiwPfqjBe7Ebp68prT5TP8cnzJeR",
  "key3": "2DudRrwC5TLsrws7BcmYkamNgRMjD9cR6RfamEP2wBxkvP1qQPJmqZE3uihzJA8dQZm1HQPmoa3RLGBzU85vbBeU",
  "key4": "2aYYnwV7ajYg6HFGapMiWC3LKvi6zZk3VhKJ3oKnqGpHjSRWtz66McxUUauadpecNf5J3VG4qsVFWwfbVckJSgpC",
  "key5": "JKdYWXxVLb6VeVxj2uW6T19dvNqzeDeXQfH6rrDd5LKhCdBq3SGv2n4gNgnVSgHYtR9Mrs2NYneTmoAkCnEfNYC",
  "key6": "353uet2cX46Cz86CWZVfssaPHSsKXaDeTmsvLQDf32NEVqTMdNCAiRnrGbmNu9SKcQkKw7meSE3xSCGbpYZvfwtd",
  "key7": "5YiT5t85p4yph65By6SUF2RQS6EfJXAfVSdtWWWzoD67bgvmtQDFr4WXR2WduLfgYYWyiNGRdjF3P8QY6VMWQFKQ",
  "key8": "5MkhtBW8ivVi5q1NfknZ4WmWRrzBZmExo7pegdumgqQn4eivcUbVVnb8SFVCMRzK6YcAGe2rKt82QH9fB3yrVLBR",
  "key9": "4gUjjD8HBqjjVfsuhqp23YnqfhTLK7YgBS1578JMjamhTY1qioYt76hjbFbsxz8zineKGwtUstfGygsaY83fuVSk",
  "key10": "cDAu4TZnMbWikMFkt6ozdbR1mbRHM7DBDbZsfTWALRsVHA4zRW1ULZ64g26j5WgXA1BQwogMBDqX3CbRt3HyfhX",
  "key11": "3rABehCz2mt9j8GJY7xg5x4p1NHzNJ9wFiJ2XEbQjmM8eZbhHfpsm86TopjFFvySzFAvUAqQQU2HKH6XMvq3p98n",
  "key12": "3nyr1TkUWMeFm3gK94Uvgt2L8eZRTdatxiyLcpczrjCNgtA72T5uaVid8ozTAVCNTmFViPuJKDZRHMKEtFA5oneA",
  "key13": "3YdCJpVjQgFNrAkyfQoWMJx69QRPMkq9CbijtEohfRGv38HLq16xyHVy3LABuvGqrTuxW8JpnoTQh6pLkhWAf7td",
  "key14": "2Wn5CfFjBgBi4Dhrn6XC2ofcSGbPu3WBLdqaCufup72JtLSQ6CFCtcq8ttVFLuS1tZ3PajyUcS3WDgzuD6MaYZaX",
  "key15": "3GjBMRUGkHpLcL3sjbgTSggB9yiXzyWGUDW944Khi1te3PKXybXbcifMd5ADNAzjVyXj7VNKhadayB6Pa7bvpf75",
  "key16": "1kQPh4DAR7tKGmjxEqnefNpMPDYuQEDVRjsjGnFFR8gcQ6LYrJQyahHbk5gVaCin1SAo1QqTvucw6i28kpt5GYY",
  "key17": "46s3DKoQB6n64dnL1uXuxF8xpSNTodTM4BdpPTe88cUHNZSTeJxvHNRCx9m4JtNbsZ3qNpamDL7wbcsygKCdY8w1",
  "key18": "pi4dcVvQEhZ1htwKfd3nj9yjBmjpx4tfBLBsQTzxjerxUQ56sMJPbJYQFSosieVkGNqk6TUi9a3unEqrbic5vpj",
  "key19": "3t5VMrwxQbxjHkmNbjioeyfhSaHFuvopn45d4NauiLwSddvxGftyB61YViUpi3wakEpxP8HyuUezcBMu5wct2hRF",
  "key20": "1xWrHoTLbSkwQez5ErtFsoQTtJEKp9hY8Kz5R4FiqCvMREN7xJEQoyPyD8sYKrr1712pJdPGPChMSVtvFqsTmUr",
  "key21": "43znsJ6mPR2wUYpxBtpAwgisTTSzP6PL2w9SCwtJjBwFtDM6uQrciCzHzamjmor18oYFF6okhbSZeiWpL8aaXRUm",
  "key22": "4htnJzCdmbpKD6F3Ver4MPb11dtak9XLqsHM2fRGeXSyhRMp5tEYD5H3pWmDazM4SF46oT3RmZrgsQWGead3LpGM",
  "key23": "ZHZqTENivxSspaFkoJehKLs2wh348LtB4xnRZzsSxAeBnVycapL2tNF3d33x2SEua39RK8XwGuPBEezvrjWLB6X",
  "key24": "26kmDjSGY8QtdSVksABuLntjDavhXwbrfVHgzzU6DGi2rewKKGrKenJ4bDTfBr84fGY8mxLthcpHXF9kDFhNxfMy",
  "key25": "3eLQKcinFKcDta3QrynHdpkXfAqhK2WMRBzTd5a2qTb2JEpyULKpZCs1TusfQGAkrDqA3P6zg91N797xe7XaJR3c",
  "key26": "5FhZLi4CLt8xyd5tNt1EP7djzaL3ydN7p2YTRuY8FVDEzprX6Ai9rkDi9fZAp4SEkjGQtmUtNhrza4pJ3uQrEFXE",
  "key27": "4Z3UBTReuXZfMUjrWBtWGKNtssJntmC71ra54mLShUPm6U5Afeh9gMtkgT6XPawhdqXFtz75ep761zPyLr76eM89",
  "key28": "qwiqS8Kf6xouprtzMQbiJ2aV9QDerNEMe67MrGRVV9ZpD76umXpc8RNAukqRzm5MJPuJLvsXavhzVFBmcjEYcmk",
  "key29": "5B9nEGWnUDagdvp6efRmRxH8aN52nT4UcknAVd2ieLMhb91KJEz3Z2SHZ1ANcYFCVC4meiL4jEnY6Nf5dDu7yxew",
  "key30": "2bvR1FKESFgScgL8Xu341CcCeHJJBcYA7GB4fDy8wmDLPELsfNuhdMY46PVxvNDsaXr4at83qajTtXogTQJL7WTr",
  "key31": "3G9wBVBCrjNGnPKrT9ULwiKwGAFBwSxkKRHBV6ZGGPcRUf4EQLpZkXSQmztH5Wwhwjnckk5HvpYCJoWGHs5wkNu1",
  "key32": "3qYbC1psWwStATUMifKSSyxWUh8s8piNaZQhwuZELp4hafBGNt1xorTeeqvyxd6pjnWHbqgbYoa3KK8cbLywTs3k",
  "key33": "3s71x9pFLiV8VDTKqH3CCNHkdV8oBSpHbToWs4xNn7RCN6dh4uyBkCy3jZ8Sr125mP6G3FxNiSVRk6JTB9wXhzoo",
  "key34": "2TjBXjquEA33R6hXmwA2A8WRuMx1B5g3nTG6DZysC6Dk1MjQVL9m2chxHEyhjwTJUHCFWJ8qJ8LS9GnzX5qNrhWT"
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
