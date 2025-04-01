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
    "2xRhs9q5mkjHjiECzN24sB25YiQRaiKAxo7exbgAcFVtrUcQGDzN8G2uYsU7H4x7yV2G8khqBkLkGhG1fHYVVmjg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PkN9CU57FK2VQxX91Q5ePEtKUWpvdPyfHLgghhB2vVkjy2ihEG4Nb5cCCePhXC1KyZuTZfxdA2T8rfQv2iCLvn2",
  "key1": "4GsxYZgS5F9Zh4iY1suZYdjePqiSjJz16Pzcb2JT1ReZAXGbBtWgxwpDmpLWz8hQBbh9HWnVLbNjMmkokAbEKqa2",
  "key2": "2WEVytsLC2fhBakdt5Wrnco6DBmWQF1BFrabdA3oZj1yoPyeyt6RDwhKUuAR5CZRa848M8XDNQFuJ5m5rC3gKL9v",
  "key3": "3nuk6LNLeuy59Eo5nGXkrtHnDUMP9JHrYUaYbpBtecXbkm4bjeJNQ277MQDRaqzHuZRRkWxizhN6fCWDfaXQcDRQ",
  "key4": "3NRCGDjWvh9Vgu3iPk5NpuSv8fRtdwwtopPEA6qT3Rfba5kDUaL9aC1Xb7pkZSD2GoL3HmEqiHJpgbKfSAtUR3ES",
  "key5": "2XFruaG899ireZq5w5txGwENeg8fbzpepcurfmPVyTx5T3RNFAmAB5p3GnYGL76bZoasL2z3e5KbR6ocunJzgTMA",
  "key6": "4JLS9r7WfYBAyfvBEekiYuj3JHtHYezW6nAwN1UU9ag7qbnhk6H7F2r2nECq67CkErgw6TkciC5oyrtsHQ67zZ6f",
  "key7": "CWwu5E7uJNH8X2bnz3HxP1AQMbNwU8BrNYuNuYiJG5bF2g3A9Ro4tAkvXmbRWCZsbiRDqvvVKTGWTgKRKjHAoFD",
  "key8": "4oukaCgcHdDajQpDuVe2aqKLfF2aPA6YRW5ekkzyhL2xnrUjxAxN9DwNCweuTNiJZQutiRbYnLTebqjwKHrvUCcE",
  "key9": "26uxhh6bicJ6vPnYuh2zhyUDbKNok38xBXN59BrxwWEyDpbdL8RCucSFWjZgjh4YKeH9Bs74exQVqJdDy7ZF82PR",
  "key10": "3dr5QX4tH81cGp8DPGbMoTD4tiqUx2fFS46hQ6srNwK82EaZ9MmvGKQ68g472kLWzf7CPMJmkV5UYm6Bmyj9NYp1",
  "key11": "Zbrs1HpxUfdMqEn7u64kmxXmyJSuerVX2cvN1cii8J33n4ftZSocvtGteAH24HCVun9xjjNEJyT4gBzmYmb8eV1",
  "key12": "4HGHqGStXB5p9WUCr5gG9ujbew2VrzgLWJh1DSkNoqUjDsAKiHG1cWkYJxbKzVmAEGGKxpHBY9nrLEhn9dY1ie7W",
  "key13": "3tHKdphWcx6yR7By6jYWti1XRSKAUYHo8hNY2ho5bJybdgaRDqBbcGXNmEx3eU1MdBc9dRQBWF8GtNQPKC6pW7Zh",
  "key14": "3XJpgrrCbzWWd46Y29eiBkBy5ckFzwrMUecTzjP5FCGUPJFwdWyufHdoZH5dPTxqfVo9zvGuPhC8rut5S6LKWxMH",
  "key15": "CT2RHLCCtKunHiF7Udo6hniqDRrNMTUVeBKsh7C2VvaEzV7sChCsVmbRc2UwhBGtiBNxKxY5dxwkBRYj8ChrBM8",
  "key16": "2izEWvu4skGkfDcD3nYBJ4n9dj59DaWLQ9DnFKj2pbZZYCwb6iicTZ9yXC4sqDLYQXVceMsHG7wJ59pLCQ4JvdBq",
  "key17": "2Coie3NxLHD1dnaMNG9kZRLSLFPtbEWGg5vFJKxGhN7aMkgvRrLbYeC1aovSmzi57M67VR7fRwStktN2t4GKveMP",
  "key18": "aLpPwj8rzdT3wM4fedoHbyaYdCZVJYaWv1uvxy7XgtjeHu19Um7XYSg1sGoJSQEMWYJjuv1hsXT2cCHtwVBujWE",
  "key19": "353WVvBkahnWzxwx2awmKhHLDwCVvExUJH1TZ3EYsmx2nZPZwjvERmpdT1rFnjqRQepAMnPPXs6G2ynboty5zHQC",
  "key20": "2GNNSWy3VpVh4xap62pePH75nmyRxrorW9dEtvQg9Ub84TXzzrwgTjkr4E7j3NZYykESW8A83AvPy37T1GDhgN2j",
  "key21": "3zpe9qbAPsDszncbKChugYLhyMTvyB9y6rQ1BJ2AGUNhqi1CWTX4hwbK8MVsGCMsuKXbLMDzCKVhkwKsCimRF6Xc",
  "key22": "3MKJSVuHmM79WTyosD7Zvfp4zQzVsTcFhGSnMacnRevgTQXdF8rvCprMU6CZ9e4KwJhr1CYpcQNfxr9qka6pE4mR",
  "key23": "4TdHEnVaZyoYP32ncDiLxpxitwJkgSgi2KMtgudXi5zj2c6KWBVejhjxnRnAaLDfbmzDiAQYpU2Pmqa7gaUjsU9a",
  "key24": "3n3vAjiDbYufR8GyUFEoLRfzYAE2sjadb5tszRWAmsuTddGvFHpVad6BZG4HmSjY82NkQFSmaVQBusQhQPKNJD7p",
  "key25": "2F6bSy4nxXqdSrAix4SVR247NeqUY2fiPeNgYS2FGBUNMoLJrpHcGmQTJTZRuMzT5vjaz2A6hqh8gcY2wjkXjhWU",
  "key26": "3sQ6tfYK9KsP8sxTKJsmgzFintToHubyp7BUxF5nkSUNmGpA7kCckJ5CB2Vpv8k6GmQuQLc8G7JbTZRGECkCSjri",
  "key27": "23ckytFGyMe2UhkYctF6DwUSMyArBqRjoKbPEZFfLiV9frVSfZDbx6dhkUNbio2JjKJJ64eCKCDU7G8NQdE4A128",
  "key28": "2ky1tXB5KBp9osnMgTrP4rDq1fjRcsm67rwi7WoEXJqb1Uxim89EjuyArxbDYaQ4rNJfqZ24AmJuhbfgPRMQCu2v",
  "key29": "5a8NCCoezP52HFZZHudqHXNvA33xaMMV2i4YkEVc3pXzQJo3ZZ1ZGWsexBSCCkmPYP4H1o9BSKvUpvnuHdH8W8na",
  "key30": "2T4NQ4VMuvNZmEzUi9eiEmWmxP8dFBuJ5Jp1guivmgruti2i8FUHv96nuKQDaEU9yJYJ9Jjnezmd1vW2PKawYFWX",
  "key31": "5jvUb853gfLfrJo4YjxtWmwnrgJdHg9eLRtoueeCrrbwWPTRDfyFRACsvnABzhBmvhBWBESnZAAqJTqRrQnEUGet",
  "key32": "55SWWLEaBRcV6SArkBeLoLo8VdfntrHchny9iDS25GLa9E4HmMPvxde7Cd5VqhrtwBXG3vcePiuZ2n7f6dpYh54n",
  "key33": "gJ3CAmyC2JKZi3zzMw7sVLEcUqfiSBHhymUxMDg3zrtmoqR3qRe3sXoFHHK6Vj8FVB1AoeZLapQBiAYZgdZEae4",
  "key34": "F4MXRk5bVawgybvhWUaZbCqgnfRqn4JL4ydHwQWnEK8YLfyjhX4kVaHyPHeMiEhGYgcdoi2xD4aANtz1PrGWY9Q",
  "key35": "67PGpySS3eomKEvJGhSzSEhLM1njXm7Trb899DLRddESarutExW7Fgf6ZdJc2f9Bfxufsqjoet7R9vrpu7bhsftE",
  "key36": "4FPtwy49rRqdwHexUFRcBtRNzTHbfu3Gx8n3Q46F2pYkVuj4sMnMPMCKKDu9p57qHUzE8g7iH9eVJ1e5Pdh4CHvG",
  "key37": "5Yj8mTHFegBztLtBJrbu2rUiinjraMCF2Fn5uTirhdxyWVYRzGkJcFwEJ6GHMpqFoqs8fvUye1vdcqzNdQb1XKe8",
  "key38": "5xeXVKnuJRpG8KK5mxhP8WT3KcXvuze5HapkWTCU8pvTKFYzxtYefSur4gACrSLb71eY5aRnRJMAX2vZCdJYyJda",
  "key39": "4NPoGLksbEovBY5aNkJ3JbEuLqR7miEeABr15L1vwngftxswUX12uAaU51WWMcR2kUuYrKuPT8ZQSHaT9UVFQVzZ",
  "key40": "4XywM8kPdsZKzZAzqvfzNQvATyfBVdwHGVuZvfhWD1P93dgwjNRzeVYJhUVAEJBeRNxNnEgDGvnywTSGTeJnr59T",
  "key41": "5S2VisuaF1XMiV7mnQDKP73hPTYUjdGSknrttaVzWhAaXqPaibLKhGsu3xsvGeuLLnMUZTrkQdqmniZJVFGBdyNg",
  "key42": "5cfMxZortjfcr2mnBGsFnikjVeS9v6NGB8Dj632QevpJfSSyJwtReV8AxTsoTavmM8mocfzvEyRABWNhBYvhXeuu",
  "key43": "2QYqZKruHAKcpVnrB77gFiGUkvJNFU9eGJNwS8potfzxgEQGLZQqY4tDedAgznB2QLwVcew3VZkapxVPvdkWDp9x"
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
