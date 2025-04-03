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
    "Sgn66pvF25YivUf2pa4Z3SFc8PvKzMqrmUwXA6XytmZT2FeyEdYp6F8kYMkoarWH8YjPfGfyF1thSptihgcY1d2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uccXfeNYv7uQ6Qii1tsg6xhudfHgUQmEFdfDCERptHwPGWqzpaPe2PZTHGRTNihYgxtHe69mWHbxYsPgkdEUFCp",
  "key1": "5s4v1WPzBgULBA4sczHRGcdCoKAffdheiPx37XkefBaWMEpXYUpzBgiR4B9n3JQM3wCwB4mgrn1dbMPa5voHqAXn",
  "key2": "2KHko8UW1hJWEbmXKVuLvdcd7SbdroUHQbZ1b7ARVT4hDZWdxpADZD3ynaEBnkskvimKH2Crrugtqc7g3iSbfrjh",
  "key3": "3StVpqqvz6xvYEyCuHLsaUp9u27WqqGpkvmDVgpcLYx25Wqyo3m6EnvfXFkDVTq33TNWmBhRhQt8tc1A4mbpUTe4",
  "key4": "2nzNj2CrYhE539kjhNDUhHnnmZC42HNxmL9nBKvLdt9mGzBQKqYYU2D2hB7AxMrFQkheehEGgnA4gTxmLXQZsyBe",
  "key5": "3YU4C8LTw7oKd3e53CLmFgEuYmWwnpzrjYS2iJtDYddb5w45pEX5TcNXdfgjFqnGDeokmEN5Ng9P4RCFcVxGXCqj",
  "key6": "3oHeufsNjkHhzH5fWQEQrWKT4TgD4drXnKQNJGigqTUDDbkxQYrnSLoQcsGdcTH1V3GegtSNJaPj2YBR8GmJjTQn",
  "key7": "RvDgFXJP6xAfns7uaLcxGDExBqZkmB3f78gSHkNCSfWBhqhQvRC5KHwkPCGCGuXvagT89CDCh1MsfTfx5rqUR3C",
  "key8": "3QaTJi6gRfBJqmf3wh7QT7RFXFzQqrdf9QsKPrGXtRbGSpqocir2vQU7WoJwcM1SxPy57HqncsEGE8CsoCrskZ9p",
  "key9": "3nQJt5LaJogtGhZWZe8mYr8wXzJ4HdjZipSgAjEqcnbRCF62qdSUiXHvi4qZVFNxasdfe1SMrrTn5khboXkjAuep",
  "key10": "jdNvZDC5EgaNLtsNosAVJPtQR93VgE3dnuwjUh3ka8UjrrYUkFCYZeQKPpZR19YjmM8cLLFUj62xDrWhx7xSHDy",
  "key11": "28SU5M3aTxWtS89ejKrVYBfjmP9gUJcWMZJLyLdv5MCTKhGRRPgL9vhiSnVNnJwkWCmoEVkoMFS2SCbjHqDtKiLK",
  "key12": "5Ch6umyotvaKECVXLnHxg6w298jaESvVWfn4fbyPRsYUqyiSAryh6z9hxmcE3qE11r6uKYQt2QH9jimZWLMco1Rq",
  "key13": "2JunVtTFRq5JzVjoW4dTLqSZeCUMi9gnt1d1VK3TXccJmqqKg7o6rap2n2UFcQNw5DN32svP2mKAQAihUiMv2E2H",
  "key14": "MGXwxB2LWfxuK3p9WPvtwuvqeBbzcZq6j1kj4yJH1kp29oBWajR54pV8CDXe5B5rXTm3qfXEcrZBZrxSSaR6Mkh",
  "key15": "3kCxSZFULAu5rAtDvhBD89FukUDaVrLmYVM32TMRwjaGeEaPEF6TejezmXiRK2cQGEUNFkFXZj8QnaEQCspnN1hT",
  "key16": "3Y4e6xM9zF1Nw9FgWGi9dxPipxWvShNowqU9ZDYowPGbU7ViYSUv5zcN1iduPEeeFXqsYgHMHKvnCp9J1iyVsU9y",
  "key17": "4ZZXAiwnrSUb2Ffu8u3BbrnpVvqUQCjPQ5kPd9GUdnEupv1dVNMKUSzDzLkNXNKjTwf3rwEDzRdu3fp7FxN7bTcd",
  "key18": "twtaCBFcvojc8UWbJkjEamhRBieQZb9Yfrb6Q5cPMFEgdrFdCbGX63J1iAMJtYMPyNjnaKxXdJMKf42NrysKYme",
  "key19": "xJmzKppQUsHEKfTg1SJB42KpP5KDZ6vabnMeUvv15qXbd5mtX5cVHvXimb8fqWMLwSc3hr7uHbj2FJyJ7bJjaJV",
  "key20": "3WABvnWgYzAEKqLBFPHtJzv7DE8SoFHzV7jmdVxaDFtaXee1X9jHbT1AKi5JYsrGHkbQ6UosA3gyCLRFuqBJDKJC",
  "key21": "43psahgEc7X92uQVhB6SsBGCa8oZrJ3uJiVz5hLTDtEtxYKEgAcVhzGX9hjVe5nKdJ9AzAuwyof673oyx4e3Ba82",
  "key22": "3LnBH9KKVttEhnGw1vTAu9cr5QiQu7xupvxDq2M4bfaUsu4BhboJsz5WaeLSXQE1kEES9uHcNkmAJKqBrQA7KUo8",
  "key23": "2hrzSHixbQUcFP83mSwE281uSms9iQAudQJrCHHYqPtFyBMb44Vq6zFyZ39Lmh2ypWhLy24KHrdiS5H6JbPxfEfD",
  "key24": "3qE9xCvC88GXPphiJkhFDMM9qDv3Raab4nGfC4uUKCjWwYF79kWBMmyTEoWYtjiRePF699uaNM6PF4xF2XxCkkgk",
  "key25": "2aVEgNWPb7JLmabo1aLFw1K6h22R8YfLQUK6a7Q5EUyLFq1wiBjYuDzy4h9Q3bbk2iNLDLkM92gUEZGpPG79i1hm",
  "key26": "FAxdY2Hw5i9nf9g7MHTpv5teUZYdzPaye8jMNDQFweKZPkjQbRHUHZT4B2xfhTLaQEGZAh3FNfDtaG7gfJkLTqs",
  "key27": "4eVtjy2vBtZF3PqpBzYojWfdzbosz3YjUy6ry8CWMzbXqNaX1EyCtEwaFeNU4WKmQzW1iDRFmG37671iUscvMJjP",
  "key28": "krggGbRoLmJvcNyVwzCfwdKwCQbXgQDUywZBAz1e1oRnFuwMc4N6FWw8WJMB6wFoh1eyx9oAhhhsbcqvdbCkc53"
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
