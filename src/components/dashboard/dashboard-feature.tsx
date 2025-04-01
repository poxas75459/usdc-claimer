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
    "4yfhdHC1Sgg4Ejp2HRkf4XEveoYK16LTaf3SuaQxvz5JEsDKAVbJP5nQSR2sbKiGhdcA2js6bWKMgmCE2yxydLuD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FD4z25hSDQNVTsPQhHP4K96w6tifQ6WAXLmDHgkZVx77PYHUutfhWp1vtxtf7AmamB8SLLqF74sZTKjY3RCg547",
  "key1": "5EvHRf6rWhFhsmAXxw3XCUgJx7fsP798cTQL6te7GJnMbEJiYf1WHaFzoHcxqnT1igdNVGMkyGUjuFpPYryfTyXb",
  "key2": "3okPErt5i8Z1E2CPDnShT4cCBqBs4nSJkRbz73VXHdVeY9yLQWQpRHELRZahKy6B3DGjLzkkgJbYz6Laq6Z96XC",
  "key3": "5dhR7wATa691Zev2n8RGwGhKf5pYXgAoSqFaD2R3gUzFTkZ3FWRAXh7MFWa9nYjVwNGEEKRtWDFPYsyWbSn5tRQN",
  "key4": "5WQS7uiao4DhvQPBFN4TZKYJPDPQBV2PiVBWbz7TxivszyHvia4Ce58j2xX4VegEssJB95bE4peAx6UbabZ2dEzy",
  "key5": "2N4TMY6Yw4hXUkn9LbNt6QNuPEyBe3TtrtoP9bSL99HYA2Sr2o3eHa1axvGRHnQ5wrJdJj3jFr48QvfzpRxGQ7we",
  "key6": "2Uvj52FZimst1P7B6BULohSzdBodSHZYswDdhh6732Sh7awQeP7sv4XYEZQUqMijQRdeuNZ6EjEdRLYPfYxwMnDu",
  "key7": "3YsCVSFgaFki9qzurdC4EpaUotxgmyUMVEEKebZmtTLqny315zRcegQxBmP5a5eWkScApGZoCmyNbRA64dKWASSn",
  "key8": "gDnYU7KumfYUismw1wT57duKymUgmynMK5iTF5PDdreXEmDLxBbJ9Dac8qwkfWWGpxUAkRNQzptheuJLyYEzcMf",
  "key9": "5CYGn1CararmP1cMMqXGzry6YjwWrfbX99SDvtUR4RtEiqVGbqL6tCNwd4VYWB9NSnSbezDv8p7sA7N8TA3AnGcX",
  "key10": "4bkNSxNwBVhpe8f9QxxmHfaEwUgreYbfZZR4Sjdb1L81fY2FAfVrqgGiUBK6oUg3CbjxNzjCHYxj7cJHiWgLQoKk",
  "key11": "3XfGHkPnFGrmBCbFkcsDT6NPpgcEioTmdVZPor5wQS8Hw7ko5oqnuybx2zLgEwNEVNgqEABTVCzgHbYz9CnQe8EZ",
  "key12": "BxvyJ9g6phLLp4WPvgw5VtYYBRjtzdoMefWnEQe379z9NPj6sDTLiZGXDMtrfy5BBmNRn5bpb3P1xd7TRgmWvFr",
  "key13": "ryq7xFLftezFbWKSaudkExpYjBNuXp9WZi3q7YQPWaFGH1qfBFa79nBGzgYgTVe3uR83PA2CrvneRnGgCHW41Pa",
  "key14": "4AaMcULKimz6W7mo1SgZyCmgLhGk9u4aLXBy3puLvsj4r4JhfeirjFGs4jRNXjk2AHffyCXZPkPJoHze9g1AJPwL",
  "key15": "cGuXDpgyGoJYoeReo9GnLoN5PAPiyPtPyitKvgsTNMMVrcKVH6T8bqHF8BqP7uUJ6YbhjPShmyf9cy1B2PyS1Ca",
  "key16": "3UDCGHZBqoNGkaUwMQjKrkgiVVC7BvzBEgAoGuANGYrzDbBFKS2DsuvjjtBfLZFiuk5AwJuY5TxRg4pCWF9VJfuz",
  "key17": "gMkz2Vd3mVaAJNys7DM7YhbhfPejVetHj5DFo18j2wSrmwxcSEqtect3fdUmobMSQP9PX3ZJyn5bFDhkaZDVGx2",
  "key18": "38mqzq9uMEoDJ4aF4ER2cVFTMPikWxDtLaNexpuCYzrL5vjRBnT5djmMjkWVsSNMvMyksVvUjtrfbNysqtLGR211",
  "key19": "ztKHdkhbhmh4P2oRMyhSnjcdV4dSpKPoA6HDetHjfUBCB9k7i7dhnTiM93YwhV3YeD3H1KY4i5zQNScXmeY2MC2",
  "key20": "3qg291Ca8tJcTB2jR7vM6V8UZdUNtcvEvoaaTmgEuiw9C8R1pubSLi1HHw8asbv2Gke5UXGEdXbeA4QbP7SWkPbX",
  "key21": "23GgGP697T9S8175fSJR8N63x8Nni2b8H2U3PoRwcgmEBVoyPDPB7QcYsw69zoN5H6BhUZnAYAFMFUT9VFyjqPNc",
  "key22": "5kPjipks8JSXkSUqNkbET1JqZkQ9XFq8yVX5KWbgtRugFfJ6sNwVfebMx54E2MKrSTJecvG6W4WAgdriTnaJbRik",
  "key23": "2WnMNENr8RgjLfWMKig6XGRo6g3wzdbza8EekJgr4FNUzKZ4jbgqZwEDWY9zuYtLx3pYxYZUjRCjFMCeqLZJkfwu",
  "key24": "3SKNVaUtSX4W6ZHH6v4MnTUSeU714dcbTtwzHFSJA28Xy71jaKnMkJvr99DjWh7eBpfU9rqHNEshVVdLaEWYbkV7",
  "key25": "24xPwjJcDV2RNh5VPRvzB4YqTz35UP2hvJGJHgXYEXqE7KDK9Arr1fJaTeGA2q5sKxrC2zfxrmCUTVtNyiCtz92A",
  "key26": "5SZQA4WLZGWNETMpeM5pB1KuMXZ2BUrgX3VgrfGAcEaFP6ffHTmC8MK5WyqE4PkB6WcAJ7eaujUH3eBux7VAjA91",
  "key27": "3CrACT5EVoipPhmmFPU2qvifxPJEeoMwGXTb9SiGUYF6rw9wJ1uCTMKvDHY4qNTVoB7NbhDogafVhdtHCmF6vZ2z",
  "key28": "4m4bboP7CAunDp3rKVtmQ8CjtJLTknuwg7q2v54MkKkVCEen2JnyENJxRWAuR6vv4WSY2VGw1RtXJ9GxXErxkVZc",
  "key29": "ru81Dw6kb1eh5utKsJwmXY1BWegYULTYN1pZWy4y2E4jC6JR1d7UCGM8M8RdiV56xmN2DLuJGVsLdAhbaU1681Y",
  "key30": "5Ye74FyD4ibW8kzoY3j9S4BAnEDuCTcNkWpUbveYsCGwRDfPMr13jWXQjMu3xsBeYVwbMmu7WBbJuDqMWnuK7Swd"
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
