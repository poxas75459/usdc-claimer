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
    "2USuRGWbHjRT66LHF5oNboccV3EJZxkPa8x24WgkYrVGVXVNKtcRTtfcJt496AYAu82t2ncD5RzMmnyjixX7zHgu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CLq4JMn997XLY8M8jQn4QHD5r8336iA6kDZ7xzhJo4QMuhswzvGwEcT2WXFmLDdknPRek5CjwkcNTRZCW7en4f5",
  "key1": "34HdY2P5PWMLpeUKvhu36pWNqhp8DxRTVugHV4dn7HoBuAGMJGTfWdHQDNNun3kvo14F87kpBDn9GLFkRFQLLvCg",
  "key2": "4dhZf2vWVqK6P7FiXoPbeV2Q2sFHsbXzhaYQrTfH1kkQeCkUfXSKnxtdpwBn8zF9W4SX2WsBL3eLU7U242bzEsKB",
  "key3": "49ctFvHtwfdyjZ2deD9xVjaR12WAULc18VKBzRNny79E1VXycwvojAFx6Ri9NeWFNyH8iFYhyopCbAcWHy99fg35",
  "key4": "214BLbWf38aXfLp6srqdgA4WtACXZ5PJhgShaLu6Urfr1pWK356v2NrYBvtXqTQ5bpdZhEg4ndf6NSSv7HnLreC4",
  "key5": "4EtpAQDPSG9nCTeQVgMitwiaVtaQqQC7wgK3M7J3doAGhYLEL8ZGtNBefn2U3BRdkrJ7wqCPWkYNmUPKbuQZixH8",
  "key6": "3EpyLdvvHqgvH1RgUeRDzQZraatkvMDDjZWtqmFGTv8DTzK3Cn5p3BXDmXgXLCZYgA1LJGzpifS178NGbbxyEe3p",
  "key7": "3utyL7cH6kAxSaTT2cR6FFXgzSpfeuP4DdbXNqib9da9qGVgyKw3857FFDbuVdkBMKAGUfWnZjtCrc5yehA7WE2q",
  "key8": "5DRWepUWzDKnsBa7bjXzCVYhaqja4GrsdFqchnRrqtoZzrTQqkCckr2xzBHQ9LCqXscxo3Ay4T3UscNUVhscvCtN",
  "key9": "2L3uxRG5AFZJPo93cdjSn4gLXqaFNxARo2PHFeqmVpVeRVEBaB1PnhN3VnoFnoZPL4auh9zPKaQBgKwJ7AD4BJWV",
  "key10": "ixZjDQe7qTUdAL29YuQ78HWsTpHDT2YbL7pW8HD9FnQK4oyHgS6EqfgopEJaN63YEgRrV4BPycSbDZdRJ8RWcwL",
  "key11": "khXtTYSCh8Hu39Tnm7zhu6UHRBGq9HTRXTSfFHsq7DwqVPKDYmALDmkzxgCjys4sGKwzvvjUgpsr8mPWJDxNuQ6",
  "key12": "eCW4mdri8ayP49odwiq8eqp7knxreuUmpNZKqNzUK2wxofXFh79jHSVyuX3LTF6rZ8CgtHBQmRGFitLY7s8o9u2",
  "key13": "2gCNSr2X3emqJVNXBhrdaebusdHe78zK97YeDj155wRT1WH57NKJqxz7yWkYy3dg33JMubShy4s6DC98VEDzxPV3",
  "key14": "36BQck6wazpjsxmDFLgBMAg8ruJG2jvtxnPs5dZ2M9UEp9pfQaVaVDtaUgBjqBKnHQ5atTgcbt4fR3h6F78P9Prh",
  "key15": "7KhmLdmNN8jCbtPuHKz3AxPx92kPEQxM1eN6WxdJwK7FM7ajob4CRi4kchFQL1g1RtMPeRjQZsKQMcuLXQgeawp",
  "key16": "4XEcdE3J6cU9LPyva28eNFhUYiLa33g2fu4q2kGhwLN7D92tTctdAxQmCyhPxWhrxMYyK9jHyNUeyAEjCX3YFBCb",
  "key17": "3BEdWU23WbtjgTpRAUS3pavZK9Ku3pXt62UJiF264gUaJzrhfjyY8HqKdjYEdYLSuk4rXTuNr44P6bKKVjUzzDYw",
  "key18": "5nDffAe1zP9ZNcgxzNYUC1siQfrpTPhK9yrWrc6gvfJhABhJhJUHnNQCodc1sgn6dQAUAdeVkrUWv97gxgDrPLqC",
  "key19": "qwk2APuCimrBam8vS3pkPE7gTovHeU1WVHDgXqQNffqzTQ5RLryc9RNcT4TGBvG32Hm7AiWCMjb18ddNb8HYGej",
  "key20": "2zUVpesXh3Gxu5Jnr1te8SBUh2yyc7XGPUrxGT6EEqAi8mYZwh3Gymfvbnvc5oriycBMnzW6bJpivpU4FRZ9uNUU",
  "key21": "5jCmznWbYZffrmU2sE3rCFttamBnfe2dQwwGx51FEvKvgsEfYyBgUAph49ghCSsskQ8CjuV9YsoxMeMLZPDzQdXp",
  "key22": "2g9gPYTbpn8AFJcVtM3MJ79RZAjs1PGifoFy4kjqCsd5sFu5d5PxNsg9PQvUvbtkwyieATPb6Z6Y1Qby5jjsw92t",
  "key23": "41LzZnstULjAW4kQkZu4zpMJvTtMhXNcNbLLwNnUAV5jqDVuARbs3XPnaMh1xGZspzhzSjNu8mZSueqtXrCC3aNP",
  "key24": "5Kh6LxEnAWzXyLqhfQoQ5E8FitZFbBFWgzrbqTTuZ9JxnaXdMpiqgUuJKiZQgzS4b7k8ENe8GTz1W876xZcu9cKN",
  "key25": "2QCHGQW8B3fCXggiRHjyRxysiyP9BpAmqfK2s7fnzL7Qa6iDDEqVwYtbEQABLx5jH8jbxx2xekfD4rpAGhAzqx6t",
  "key26": "5x5SHD32Y6rWFEoQCGut6KYsrv239eLNbKNxbm7j9cvPa2e2kt8jUMCsxvF2H5u7J8ydnxez3dZUcCDrbMWubSG2",
  "key27": "3MRyNh9oEZqTjTpv9k69LMD6gBozuFZRbrUNhEjskpcoLeoSqBCh62KWdQWva2jVzjw6dLDYGA9dmPgtPv6oQyt",
  "key28": "5uNfzwYPFXCrvbd3R2uWAFHAayGeq5frbbz35gTGVkkPGfyz26xLfmQ6Y2y7Uket68h2Fd6c6wjrzb1uScs1nPEw",
  "key29": "73KSFaucMgjCLqP6RiNgh2EejWQF8zUGjLehptMEEEa9woowTqVRRhEpihB6q9A7eNqgn9JmBSu21SqdiBEUbDG",
  "key30": "2217uzVNRzGB8xbhjV43KGLXr3M2fvcjfsmeFi3PPVmeFiyC8K5E5XRFDQsRfQkxhBRKiLFBYsXAPL4eUgx7yrrh",
  "key31": "635gTHzkErhhbcra9qQSNWcYcm9DzZZdoXAwgb9uz37ZmGMXCwCq6vRfssr71daWRSar1BrBR9kbGvm3a13rdvSi",
  "key32": "5sc6gJtEVc6F91kVHcuKjEKjYNZT4j2ype9iUXMfhwpeFTCKtGuqG5k11xKz49ZGcjE2Q566oskrDGzhdXRQHbs2",
  "key33": "XX9p5KSFcuYnpT2fH36AKF22GAoH9FDXPxL4Dxs8R4co8Z1YP71QEek21qAjcvKUf9FCyFNpeSRSRTu7yoWkrwV",
  "key34": "3GWe2U3TveTwH3a436U6otQTJqLeof22kzieYrpyZSRSKcSkubm3hiYtKGurzxuXvGuTVyjdvxWrmRiZT7BqpQLt",
  "key35": "4L3fRsLkgc7NCP3WacMdUx73bof94xYmsiU7XbZ3RRpMrY1C8rBt8nqGXbVQK5hb17d278PVQw5TFymNcaMZfGvA",
  "key36": "S1J2gruCix583uDrt9mw3t9M283XxPzQ1xfGmwPv5ewSriKBiyVAS5H9Gauj4s21XiKTMJxruPFTGp5rjHCzoh3",
  "key37": "59MxsyLPiCaQeBixJu1Fcgep7W1MeMBjCGBoug5CifGXX8WQczRPwgBAvJApZt2BVzd9MR4Dm7sVitxKtBUFwoqH",
  "key38": "Vf2DL6hFVcoVsKdP7DyzQHXXCTLV4sm5ktV6YzcwH87KXoNcj3Qj3v9pLmatcTbPeTjrzLJPYyP7KC9GR1gizDv",
  "key39": "5bcWyrqo2zVuKvYdJQtXcqLvbw43Rx7iBeukVMf4BhyACS69Z5djEW3R4MdSYtKQJD2L4WH4GfZWFAQ4HZHFtuFj",
  "key40": "qZ2EyiRSMPAzyNkGvdxPqYe6Tmxk1GFdQxitoFCCo5UfmKDbhjcP3nSb2Lu5zopak1jE4Xsz9sQ5Z84yXrcUDmK"
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
