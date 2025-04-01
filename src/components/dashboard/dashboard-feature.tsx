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
    "4uJ2LRkmyuzmSKvQSonuoZQKfpAMNkJKixU2ycYh3k37MTRL8kuzMF9Tfkb433UBDCW7y32sEjPd2Cb9sFKYd3yn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YWboMCLjdtY6eEQHHrbwkVYZrpkQPEJAarXNjV6A2JF1Y3NPL6WtrN9U7BurhmbtmLWHrpsnGpZ1VKqas4yHnn4",
  "key1": "3uFkq66Vbi9bvus1BUFjU1nfNZb7DEMybnJ68suMjEJ9tKJJ4SuikWNPuSHDq47XgFAuRPPwHMyau4YfqCUdp56L",
  "key2": "4i9Ujmgk5EPrUFvFrAoBSB7UtN5m6cDo6fKxV8YtG3CTQnx2XrVGChFSERnNzp8XZXWQBVP48BDotXAZtKfdLXrU",
  "key3": "2kbEt66NriFWpwxG3vxLmtQXp7MGAhDHgYpwFiuP1UvW3tJ9iCdhE1WtrjLejfnktsj7HHsQKnVkPCnrm8otPQUE",
  "key4": "3vazt1WPqXmFtQtzhW5mhYYTV67BppLwWvoKYjwnhyJiLfuq7PwA7VaXbWC3wYWptuUoaWgqPpo6c7FuXGwDmyWL",
  "key5": "3MyoeJyFsshcJdvVyH9AczBc6By23TQRj99mNb2ZfwAVyZyHCFX5P1fV1KXaEh7MeedWgmtLxhQJDfQGfxvxAL1y",
  "key6": "61GcghrdVENGj4ueYG8LwwU7xn8d1W8NyivazedZUX4rhYMm18BDd8bzXRUZPgSNUJBwLetGQTyW4QiUvmaUVKFD",
  "key7": "3SteP7T9MsGUpXqgXao6q1JpgJUBKWeD658cEko2g36doSAF1fgsJ6PJW9cYUSdquGtLD2Zw9gkbfUZZa51fwmEM",
  "key8": "TUTuqK9VqehAR61qum8DE57MGyPEwGbG3VKRkKKBrhxZiVUyXpcAnLFc9pmPkf7NGjDfBz6o8uY55wpS5ofqPx1",
  "key9": "22oM4np1iULfjbSMCt3ynDm932vgBoQFx86QTVUAD6tevvGHzkLfuR8FpSKhQ667xT81i9JxMhQqWLLq4nnhByJM",
  "key10": "5rxXVH3godt1AQCoxPpzniLtWmqkM4vgBwizQ1GbPpeY6jkYhuYtxHyB8PEFRQQw9wdfLwBiarfDhrhuiNwf7FF4",
  "key11": "376HFZBHiQG6UAQL6gxqeBcRD2ewDXdx9WeiUuTeGQ56o319ibAviXibCbB4a3Uwo2hAGQEGXfcRa5qc2FLq8LYB",
  "key12": "5XKbrD1kEmPmYBA5nhmNumUf7ZxEeuyVMbPUcsHTVp4HzyY4R4NhChtBLRr9nrRGWGRG9AkY2WTY82pYUK8qMLdP",
  "key13": "4NwcpDKnLKdCgPvaUF8Ln7GNWMCaHFEonh63gzmMU3X1w1zDxU86Z4ypY2sw2uWvyzRNxwef4gPS4WtKr73jTaTF",
  "key14": "3KXuERVRGSPb5AEUTjgzwpn7rFd4yzYkDhgogU9hDkFWVVMdTTVCbtRrvd7K38iezBxVUSJ3nfHUFFUYbiCixLch",
  "key15": "4WaKTt3gViWtd1rSfHZcq4i52bcAm8D3dejs6wNcVfN6uoo7jDtqHGNbKbX8zAWArymq2tjCvoSTtr7GGrBgDRip",
  "key16": "2HSUFtexxYFaAvKYHLfTuqrduDcrM96dMch4hhyQ53xJCDBkdbaF7NerNv2SB9h4kRnQE73QF5nm7nPeku2xDtNj",
  "key17": "42Mg9yDN6xVn5DjznMizTpTZFNUeByfre57LiQqQqFCuNmRvN8rdJmpmcjmH1hHURcWzH3j2SLskgFLGuNhnmsX6",
  "key18": "4XjHMK58WTNaZic1hkqXutWUNfNxmcUHs2EG7ENgQ2sEEjsdSwdfhgSNdaP5CMWLdpBzc4QtJii61x88Eti7ra3K",
  "key19": "52WTssSiE45au51BvcdwN1nEpXoQRVQP8FtqbQ7ZRUNMFJHGh53NwpVufGPuQLF4fhqbQde8SLEx41pA7gGG6h1Q",
  "key20": "2e5scyZWmrPXjBECSmcE9kKJgkkJdbY1qDwMP1DUGj1a1bFcScKSC5aWyZoPMedGt1y2RUz8WdcJ179GoyHJMoNK",
  "key21": "1xzZWNQVU5o6grVee2u5JuLphKonuzchDF7DUcRw86eejfxTAr881NEDeTLiPzdUsf1NzYAwD9p3QvMeg4o3gEb",
  "key22": "5YewQhERUVk1rpCqHdcaT6WGpkUWNDkqCNbefLA4gZTXSSxy66DqC28RY8FL7xETAYBqgWT1RnhTjsE9jJQpnW8N",
  "key23": "EK2hpv4vxSVzpdGqEnpSr4vtbu8YYMvkVp64WANpZLh8vNFrnwYFwEJTnqZsetK8UXnjbx44gd7E4DMSP9EWgpm",
  "key24": "2fAKmXgkuCA9yr2Rkj6oVYnd2WnDCYkystQWAPeyGXQHCtVyPTh25RRr37GWkuhruEDR6s2RjLjyR4SzkHkaWEtx",
  "key25": "4QSxJzMoAQjMhookh5XW4y4jKjXouy1xtMaGM1peR6KY477UgXDTeWRwq5A97boJXGXEYypKscWuGwFBas6NQPks",
  "key26": "4ERDngVRLsnMTTT1auoyyGUQJuPmMfGLAKd8ai5ory9v8GUk5xftjeoHGeNfCpYDqYXCRss8yibY1ej1bXybFpSg",
  "key27": "4huFXYBErL5h5uXH1N9XxburKj3PSmHqAodc7oV4mSCoVKLeqocMK4nXPdm52At9eiJuRTHZawetrwQ3hNocmrCn",
  "key28": "5yJb8aHmpW2cytTrdjxJWawaXjrRe5MhBdDpLZCh6SGUPKgHQtiwMFyYEz9HwBdixsgP6BSXB3FvCmvz322zDudm",
  "key29": "5STKx2cLDf3STNcBQYrBz8cbEbRzkERoLMMpSDoGce6aUkoXdf1TU7sWXoJRxp9EWS9m4aJb1QH9Rydr6nUUUz4w",
  "key30": "4TUW494rLPbV2YmVcWaVVhkJwZy54eFMLjzD5mQf12fPnxkhxQWFEDNNfLhBVeYz8hWYHt1CancvpijRF3ijvVVv",
  "key31": "3qpFev3cyzW6BCiXTyCLQcY3jzv2RPVCyMvkBUCXKpFApkpJyvgAV2o6AD1dH7GJFPiCCYVrvUQVAy2r8PBPmRRk"
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
