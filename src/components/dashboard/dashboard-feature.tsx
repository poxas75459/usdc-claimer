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
    "2MmdXQTdPGtVTtZDf7WS7PaPCbnG5H11WKaFhF9ZrYGhpV9JstTv9Hb1PYMt1JJRGFLymBspdX66NRuoomKXcD3K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pi5J4ihRQ9ySu34TK3W4zGdQZ2P4ksVVmGFgHM94pxc7ndvFSrHm3Z6sBvAvnftMFCCUwQWsZshSotf3YKxFTnJ",
  "key1": "4NoVGyVDshX2AM7zX2BaBHM9uQEH8PR1hi7KHoQVvs6eX1611MtAXdX4APpvFvqXEAyKGn5y3jCtDGfmGdFH1sDU",
  "key2": "4SsrRFCJ2RjGTfJkRxqk3TLKEJyBUiCSq1NcpwuchocTWfdQFN6e77ERbGDtoS171xDyvqUUgdMYSqnvGkUMeEZC",
  "key3": "2mmyfDeB4dtVnYPjWouZ9LUZzuy7nXhENdLqphiKmRvTTEarmeEJgre2bpRqs1eKEcRwS6uRRX5jYpKbzLpXbgky",
  "key4": "28sVmSxd5rRKuvTkQN74HXs4N97pL6tw3wgjhu1ohfK76NYmLRzsdn24sjJ1AAAnPJUhhfvNaoy9UFbvpsxcmGAT",
  "key5": "41kFBDKZq55zu2hJpx5DoteYc47hJgiG4mjyZ6PwmX8qTKaKkrBFfe9FBQvq4QDpLhMbW5BeNCQ7Kfoxe9WvPxZp",
  "key6": "4sKwk43HK8tNTrG8wdUQQr9aox13wmKRhd8bNU8CTDGeLw7a1WatT4UzgjE5VjNJexgxS5vCCokTCwDGwCKwLfph",
  "key7": "EUcjq9EDe66tjMTyxVjjibyqWa5H6eyPDQU1mxFEX1mNXEXAZkztBwtxwqLhijbD73SjEr87gWn3AJge9me5dgC",
  "key8": "2RaUpAFnbHiJjqhzzwS9XEc8WW9jr4THyfXWjvDMT75u7UiSyVTKwWVuWzqi8SdSQbtjqWPjHQ6kqYrnb687mwik",
  "key9": "5gnN3mbhQPGEiE4WxSzW99Zuu7kWwWqd1FN9k2W8w7LLWmvW7Ash6MV1VRfKbReD3P3ZR22SBd4mUUDuJuscNCwW",
  "key10": "3ipbWp6XWJvasR3qce6JqrY7MT5XjbtfcdSvCW2pfuFaL7ScqxLJs83jRQUKdsQujjxfWnAd28C7NUZALPSxT4A6",
  "key11": "9M74zbWu9rcXFqHBvVAVxaW2S7CVhTK4zmiFFSkkTraJkkKBSmfnhcg5iDyj95KK79cEVUhfhzd52hdrCWxyq67",
  "key12": "4tSbYaY6cWTdbCdvc7yGUWYgp6GCni9GSGiwfANfTKkaHyiyYDPcWjJivUSVGbXjF6KwmxSEYWDqt2cLwUE76ENX",
  "key13": "5W6QDCKHxTMbjaKwF8dy2JfZixMwtQKcVRCoqu5gtoGaiyo6HCjWqQTAkVxB4TkrhruvogcJXpibSTmvEZe7Yjfq",
  "key14": "3pUacyaniJ6djSTwKDXn128tDZgva14RPF7iDSDv7tqbGNxEEdZQf2L9McNF2UQ81m1hrhJuxGiMKjPhVvgoHXxV",
  "key15": "vaade8fJcZ6jA8CdirgP2gzTv3j7hvZAMk9dkwbRPzadNtSeyg6xKm7zdTmo6ddyXPDaA9tasSrcsSjYUh8Bymn",
  "key16": "59sD1Tt2WtqH6Vi4HTXSrAZAmAuXgUBKtUxqEdMUxTiXFfQfC5ZcH9rqMVjiqSsp4PTmVuqNTi6yh6CDLULdW7Br",
  "key17": "2GSz9Y3z8DuCEderSfToqpqfF2D5vtmsevG5jh3U4F1XV2SEd2kSH3jCsyiuWC8siDuTURDhFXUyncjthGu9HR9q",
  "key18": "2RCUdfKyjzY7rg7Z3MhYe9hTNmHkT6hWHfmxxe5UKkj9C6LsUgaWyL2Y2MHWhkCkqHPTc2HNH4E6PnzKpxjJQUE4",
  "key19": "5kRhBZkzExZqQUAjPDoQwDsRopXyDoE3iaoLyxbUHMcVJPzL9RMGLMupHfc4v9bgnxKM1VnoS4rYYMLYuy3gPbYC",
  "key20": "S7FMAZ4AQUDhz841iTko9aBfexTocM3me5kjn2k1fSR6zkz2eqd7c2bJLE66ETEjcq8gAQC3fg1cTkjKxmBMZKj",
  "key21": "3wmapDLDSNdb5SgHjeEDgHiCJpVzEXbprBxGzcf2nFsg9xo8XbddmC24C6RDksRqkrDXyGtv3kCh1xa4cX5QYtS3",
  "key22": "3TVmccRqvSUCoBJnfPc59CX69fpv3RyBNGDBiqi1vfHNX4ZuxEFfGX7ocZqMA5J2XRHfCMFT2cvUCgsaomMGJP5",
  "key23": "4T1hmGUtmpw9Cj6T6Y68gHDhU6dwj4tkQ9J9Bn9EN7idZTvjUWZGhE5yvG18skkyxhuywPgEU1vmaSZFw7nY2LZP",
  "key24": "5ANFpR1cYncFKuevPh6dUiuqkSnXGxeGhtXYeb3odsPpSoCnW8kJvbXKSrCihbhGzBu7FskYDLtdA2xQcCDhdH84",
  "key25": "3XXedV5j4vNTX6uJi9XDThXc3VaSh6MkwCPiL4TyMo9zGQ39Fbvna3P9LCuzBubWgNTrw1yZbQG2k8vkicRL2XS6",
  "key26": "5zSi72qRzR514ama328eBC4CksQ2JW2dx1oVqvXeV52g1W1mNNh6chgsTJr4hx9G3uBg5wWwfb8kYtj1VJNAWFwT",
  "key27": "4LXL43g8NWsvZFdq5TRB8kB7BWqf8tZR4bkUqxUHHdR3TXWUtAvU1zqmN24pth68rMhkqJ7e5NKn1p8XwiaftsXS",
  "key28": "3uoGerLi5vEn4MCymx41G3nd2RgFi3pHEKpagm4BWm9PKkaK7fCLze5hsfbGYiEbQvamDcfuCmzAMa29RVq8ByPK",
  "key29": "RYSCfs6KFNiL4ej1n5tEU1b5zg3kaxbjFjEK9RKHFR5n3fMCfauQkXYYgqMPxSBSpciAFK9AiCRwkWzLEqfQtkH",
  "key30": "xhZanWzruRK5ZGPNMTXuSZQ5F3odR9XHE2MhYSmQVQ4nRhZvyrpKbcvZzxMLo4nJZ2E45b5y9VZLDKxU3JYhZji",
  "key31": "4u54dwmPDP8R4WP1XkAQnGwUE3qLU7hESHtKRtaWVJVb4WJpTf2v2qk5qYGvT4kynFVkMb7vLTSrmxM2UgHrYkTr",
  "key32": "2KP8XhrAfRVaNbKFGsEyJZ5rjdhtGWApsZYVYyn9k3TfRH3QLKdrQaJzmrtxfZhzVns2RDb2sNSiXR36V5nBwoDB",
  "key33": "65zmbatGEohwiCabbuWFitB55ChmnHerEMTRgPmEgpvsBtTPfow8QBEoLYLB5AJK2ihskM9SzHsFj9pfaMVeuCas"
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
