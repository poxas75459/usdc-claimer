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
    "3L3wYZkVeT5qzzf9eeXfi6Feeb4uHSKsCyp9RDrB2MekBecHNxm2tSd3FmuQJrLSsH64PuKCqX1mkHT2o6psjqko"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wvK9d4Rwv1R3xY1GmUTFny3wtEfLqp5zqiUbk5xGHmrELWuFe7RXTCiw4RCyV4C6c8PMQACpRfS6n2M2KxWKzA6",
  "key1": "5Bxuy6gHcE5fxtPMBZRhnsAxrAjg3th37Ne3xBG76TL7wUZScXRyv6bjVWx5zAPkzmUAeuRpi7sMuQ5F5wAUezEz",
  "key2": "VdWi3xJdn6dMEB6p7LttRCSm2XZCSV1c5wX2r5wExo13Fkhr5V7h4nk7WQQenZPBWAUz7a3AYbw5VoHyZx2vMAh",
  "key3": "4tfK9UoJvMAXyGriyNLMWZz7ibQd3ZtqbD9sf935iEYwoz2ayJ4suxqTCefdY2y6DYM4XfYPE7M68xaxTy51bCkx",
  "key4": "5nHLCaLE2qftYzscLcyNXDb6HLbVJ3qeTJj2J6ieypV1tfEKYwD81auxrJ35KcKbEB5by82i9mrjvke5EKvEad5u",
  "key5": "4xfkcqmBjsjMcWz9a1gerPBdjemogbHrDmXSF4BbpWxXACpZRA7Rg1auXQNCQcHedZP48PK1mnoUqkRtoULVLtj9",
  "key6": "3p4v3DjWKi61NU59kiPCh8EMJ5cncJdECsAVnmSXUvqwgybyLCMyKLS6qgybgzYs9WoWCxRZ9CRniBKZeBpZUxxg",
  "key7": "4rRerLdo9PEyrkScTvKqgLSDy8v8fnet5QCATuFZ3XpgHLdHNV3sshGYzhgMpPttfHTLyZT9gv9FneFThBe5KStE",
  "key8": "5rCMAXEF6WfFzG7yhiETZHcMN8ysfGdwHzVXuraUr9vU2wN8aqAofJ1v1ZnuWE8ha3u1BvFRnMnkAJcV5fKhV77H",
  "key9": "4b8nHTP5j6FTjBxVMwKzVccPSpZ72APKRZGQ857DTEobj6JhKbHyXU5ar6jnbs8u2rVYk6PdScRooe7tdn5r5nhF",
  "key10": "3RpZ7p2jRZwBAhYw4b13sfUkmtW21k3gqQ3xiMbJv9pwtySEtDBVD9gQxzc5Yn8kKsgqsFGSEDgUCMQEnjbSbxXk",
  "key11": "7nXhjXMUg7GtjobhgM37C3zmmWRjrpKMbEQ5rkPNcCcnWqUPo8y6jyydvxg1PRTQgTuy8VQcjdoPsvih13fT5vz",
  "key12": "5fXTRwQvMWC6hKU2HCNE1BFZsYUxggxxG7grPrDcYNWa5d6eSshcoZrBqGk617bj37LiVn71QEuAhaLKa5cMMuzG",
  "key13": "5ErhGKapA1ekDy1a4qkLEfLVeuf9h4rJVNQ8jtf1AMK9neuWJTizvntDDBtzdXKMZfgkgw2pgdGsLgM68ZAzCrXG",
  "key14": "2tqx2aVEZEbNpwfB3jfNifuYziSjgd6bFkdTNRs4SRWgwz6Wv2ciZx19749NyJeJypZMsrdWSzJcn7H5zKLmb5jE",
  "key15": "5F5JeCRFTMwc8uDbihFwP24Z7LWBVenSokVb4v6YWiTYfEfhfKdazdHbkU1vnNwyHKSzeFxFBevtAc9QqNo91jY8",
  "key16": "2avnLAo7Szf31Mk5adhiqj4Mjkb14bWHLGwKSsrerSsRiwGrKTb1Aw8KirtfK7QHjoe5SdAvmwCeRbzjkvFT5ZTM",
  "key17": "4vLYopSyEFWU7krgzBaGf9Rniy4m2ubFjgJxSEGTMuPcjTLYqUwoGKhFk2remprdDkSzKBXgMqMVRJ3GspWBz9Uy",
  "key18": "5TiHqeBNqtayipuoHvZ6R3whbreyBnKnHD6A5B1dfZvnxW75N8YL7BB5RYc9Cp3KYQFra2Ebqvk7PJ4nhhxDWijC",
  "key19": "5fhNLEJdjvm3Cxp3xMLxauiHBBZj4Vy52zp7DqeMytPxfcwEfeNLe54EmUw7FYjo8TGc2AbbKWiEcbqtE1faURmV",
  "key20": "4u1nypcpCX1gWbukiKqaJwog7AczqafZri1tRUkaD4pe7YuPkdD5iE4LH5NN1FsqchXkW7i2o6rDASP61BYqZaUh",
  "key21": "5VmBrymf95yT55d9p6xsVub9F86G7j9yaQ4rwm8cgefNghqYCiXdRo1cmRipeMQu33veqdhe9ijZ6HCWpm42Bqwf",
  "key22": "3qPi9QQSx9viWRwjYKm2pB9mAWhiaPnxnuih6bEbq1NWg7T676oPDDaEKozLqfPe6aYTQ63ktgLxTzSeHmeTBhzc",
  "key23": "3RTrTrPGmoE49twUp23XEccnZ8dHxkWnP6h9Ti7Ugrmos51aEBAx2DgWJVNTNDsfPuRNi5p91sYQ8Bjfvgoyf7Dy",
  "key24": "3TDGyihRWJ1MQKoBbMZm6uBKLfRzM5abxJiRtXP7AyhtsNMUWawoQZUgzLzr7pcE4Xeiz2ipdf5h2nMmmNaK9F2u",
  "key25": "5Rxca2BnZkrX23hZ4esvcc1G6Y1oLFg8KmnygfSqvMjgfB524E4F4Mvt9o4iP1nj2eFjWjY1cgHn8zmwW9t1Fu9V",
  "key26": "39QEYypWq25PpCKdkw74VSSZiuJir9ehWny8trWAqnRyEgpSWHRZo7zc8zetMWH1or5eMi11eZYapZDNvAgDjhn",
  "key27": "4zavsqExaGKboAEmiGLyoYnNvNmhQREubK9LrddF5QLteMrT54KuzGT8eKTPP5VT1hoHwABtCkXoCzQr6LPaSX8H",
  "key28": "5f5dVJkQ8heg3JfArEo2SMg1iVFAaGdYWFgCBt49P1JzecAML8N9pC5AJBaX4o8f9FyyonWcXHeXCdiABUqt3yP3",
  "key29": "3SLKDa5FHAVWkrUxpoG7ivoUFQM2XbiWHqgsAgpRtYhuLK1L9HysCQk5zP4qqi3Tetne9kHCwmdRXX9KwQgzQnxf",
  "key30": "35y9noxzu4cssDydjyRNMz8DN5yiVjSd9oNxxYsikNLczmNK8yhNndAkV7aUi4PaGg8XvMXqgFWAp2ZVPdWj6y6v",
  "key31": "2jdijDjW8tH2JMnAKEueUTN7bqLDEvPQVt62hpK3fPgB3M3XSURhTmMCUan7MfLiwXLojwhcDXFBRKx29AiZCu2x",
  "key32": "2ymYB4aicUH4HTiFUzspBYKEFhA4mf5mCDSha1ekE2ANYZAPxVV7kxVZ2EUNYLnnZ4tLgC4ZpmsQBCBBRLTZYseu",
  "key33": "2V6Y26k3V3EzpFER5iQEjDxjd3xKYzwpivNx8ceZR8vwabXi4b3tnmZtG5oDewQfmse5DbfdvYqWLbyZDHdrVN72",
  "key34": "2ChuMxjivFdjazSmgxPuuSoE8Xew8wy66jZBZHv6Uckfif76YwaXjzZC9uDp1p8N2soStdQ5NaKtm1hftsV7Bwzf",
  "key35": "3FUJjdtgW4BDvAxtzyggS3spin4jWgzbT3zcTxVhfJ5qu7jtQ9u9JTiEgBVDP24z5TTLXTWZ2bobCnitzreC3CQP",
  "key36": "3BPNqDsbSxPKyKX8vwMr5pwhDGM6gdx4Pj8JVJz47ALF1KyuFPpZuhCkko2Dn22yM9S9QQ61MoFVLAjESAUo71iZ",
  "key37": "2e2gDN5YQyvbz4uUjTjFRV6hQTLRQ1XcXk3qtr1Uz6ytYsA1inSjUeDGzL9vvFbCXYVR1BDRxf2HApMew5FgmzTU",
  "key38": "5zPxvD2XWUtwRa2j4QnEG1y1VSSbx8j4rPWwjeFGayNccstWjaZhePDPgJYWGBWavaQQgW6AvL63SAJEBWLHokcd",
  "key39": "5W6rQhBmPsYT2yU4G6ESy68nkjxvsTR7nxoTHoVQr8RxCTvS9591XUkQHLpKnZTJwTC7EMNuVsD7bqxShp7fxddk",
  "key40": "5aZVK7pf8Qfh3H6TUz4dpxcoikJ7CmEEkWbEDR9WbLEhLdSbfbxKmnhCdVQeUiuUSyZ6DpoCZtgN5jgCmaSbGnHw",
  "key41": "RFuaTrbKjxtnLaNZbh4teEik1FtxXc7QccCQh6WNveoimJEwWFGmJzMKNvN7rnZoLLNtaQwBzTAgQ2r2DDTdWiJ",
  "key42": "5NGSgvwrmUa9psbeZxFyTc1BoxUDi1Ed7bScWymmrwp4rbuhXR4eePr71EjA6LQ2ArTuHrt6UWQceJgUXuLMdjKE"
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
