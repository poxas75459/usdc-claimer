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
    "4ZxytGCNv4JCUdWK3uH2q7rXSF2kVU3367VV8wD2GgF3VkovBko85pHSmXUFZf5ZoFhVT2ssnJ1uQEyzoGxZSyBZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WHE8DmhGXkuZPXDPzACZ4pfA1nF32TENP6oarkKkFUsGDYjqmRkfvAx7iZK1xSwvpBGnh72m2YrbB6TBkGX7fX5",
  "key1": "3Sqqygj88TrrpAeJsm3iyXd3TUYXN76Y5UwcDzGkfuvvV5hdYLtxQvDaUFpitxRcSoJdmFPXLrBkLWJgHr6im83f",
  "key2": "4Ly632TU4oPwcurSFptWwfqZxRyL2HhLsmm8ApDXUtzXEMH2kuu5fJJw998WuhhtKmpzbpoSjmwBmbuW5kpNSYaY",
  "key3": "4MtZRDBrJ6AgCC3YjBBqYRDvCRhk2ybEGLtvcYEF5x8pG9GxbLbscBeC9qSH5wiGrYf16Fjasa2qNfWDXW8DT3Ke",
  "key4": "5Rj8MeNhymqV9BQQzmP7QJMVXa4GjqmAUhEfWoJjWNuiDBGkfYqZjRhjmFASxqUjdYyZXmu8LntDa23SU5BkSExF",
  "key5": "381j8vauYbvChpe4XCRJ5bzSR2ciiAPV5bcFtg1JJ5iQ3Gqd3hyU8D9N9TW1Br3reHoLzCMmSAQA4zXGVF6Nsb6U",
  "key6": "2qN5n92wuTBDpxvwjdcMw4dVsuFyDkwzaxPf3DH9X1yCqnxdqEoeWQomALWgXRbgjUXpTkZKvAr1E1BZkNTGdqVa",
  "key7": "4k8QNdmVVoe2VakLB7Us4JBLRsMdb15XcFSFnD8UpbjH82CXCdSvMCPcTCi6prvRxxZYdFZMTTQz9HrSJ3kS5XJQ",
  "key8": "jRuBRCrdmAnWVY8n6RPiTQrE1Ec7kMQWsYGkigMNzUxzqQmjGLnvFP8HXXFyma78kWYLY9qTNx7w7KGbxsBavYh",
  "key9": "4NPRkG4nfUfaoFPqw1NqxsPbVa8k8zaxLZBaUPHUK6qRHDGb9wZd9fMQbtw6uiV5Wufr6CVQBQJZ9TnzaBUjoEbq",
  "key10": "3L87AyH6fiqYfQ8aFjbsDzGTZQooy8yvWnzC9KEDJVXxd5H2a1X34dTQwhXN2B9H8BvAeKDCwGRUooyZJzSsf46q",
  "key11": "29jfqCePjoFiL381DqtXFk1dAApDVWD8BmawsQXaG3xTvDciULFd8DM1qhwrYwdGnk5TMjvwYcTFa49XGn5oU1n7",
  "key12": "2FqawbghpFRgKHHGCc3JUbFcj2y33RDfaWudkESXqwZacyKXca1BQpxcKUtxg5GE68BwBS9SxNLDrLPBZyhfVnEw",
  "key13": "49mRaFxEWstSCdgBMMG7HGQkCNhH6dDndN8mf9Vuzq3Y7F4twu14jpjm25QR6NnCWPyQ8cFGbQWjtBqq96kK4mR3",
  "key14": "TZ5Bqg8XvfNDfbvJGou4bNXp6gBCKFL6yWiq8puxc6B6xN28bxPiDSynfmxm3vJF7nYRASii2Je9R75BBXT3nMV",
  "key15": "4LyabQ45zq7YRnfDamLCNTSfbBmv8NYGFQRnVByGkN8RCxS4u8uKb5FhAJZW36yjnuxAW8Q3bMUqB5NsinbN5vtM",
  "key16": "LT3GM5wqh1fdXrXN6dZqsvjwTPS7WQxr8NC7eBUWPBX8wQqLc8Hnf4DwE9Axjfz4r9Y8MefzjFj9U7ihc1qe9g6",
  "key17": "orNrfXJWV9PVD1UoQHY1412CRo2RWCjmAgkHuj86PDyBcZHksnKk3V1LCHftpPfLxzGaM5CGtf2tpzJQVhFgoqw",
  "key18": "5ivMyKveorwB6GnxH52veRXHcRy5XBWgKQ4cs51tsfHaEAwgwZTMfQwfJNyUCJuaaD4Uqb5uPATXZDKd2FcpHcAj",
  "key19": "JNsmuCnUwkR9dDYxgTmpkNqe9DF4j6zMrGTtPy11CaEZDDq5VmUtA4SoEqG78ELHcnkdYC4pj8pqAqLfMHpU51B",
  "key20": "2g98kNG8gAoNK6Y5afga9hQyGMrmQYRhxVQiZLW24cseMUXrnEzEU4oieZ9MWRWiSxYN8KdYvbZqJSyfK7zwtqiM",
  "key21": "4Cb9V4f7DW4bQbVQ4GMqMxQwJ83fWTP7dBkim7gPdWJUsAmQhbQGCnfsm96odPrLtUev862CYqgVaFDtR7z7hv9M",
  "key22": "4uqJ2RuXKKBgEoH5m1dJ8raBBAf2dyJcRa6cesYC5yazt3x5HzYd8vGwDkH7vCCKBoXnAYpx9bzCCX6XJsTc24SX",
  "key23": "4AwStUYekUDpEpFMXVSvvjbsFvrwGp1vS71fyY1RuwjwcAYVSVzEYCPNHVeJaRHVXzeBZQMBX2JsqwRYJYejdQJa",
  "key24": "429wZ28gsWPMLSwJAGnm9eeNRYEc7kuJUuTa42Ethoac95d8z9ZMcaPmyefanEHhj9QuNCaeZCt6c5jvfoEYcZP",
  "key25": "3ojjHVKoKYWezw13Ee4RchMrmaWWopdyW29fUmiZDY1wXPuWfhnJJjraCChjqLkq1WzzJG9F3Ch5JujrMi2uAwqr",
  "key26": "5sScTtU2DW14bmpwSWzRYiQuqoCtnL8hJsope61NLAsyKLmBweJ47uxw6Nczw2QbNzayo4bdDTRH8QV4pErLexZg",
  "key27": "5rkCmhKoqAqsYRGnDJChW8RjX1BjxoWAkg9a5P8kfH5bHEJtuX378Roz4eh9sJASB2FqHhdMzDVFN6cibntyPCTT",
  "key28": "5vpZhvxuehKEiWRyVmXxLY2vfGe5GisF66FbGLt17fMcYkkyTacFaxMzfEWCzrGHEFqUE92aLzNJosxHqZZtxmWT",
  "key29": "3g6PHYvK22ZEvnuYaSpUzp1hHypvMJf1r4QZcpmARWrf8bx9HBZvvx1cE6vY4eN7YouLEAfCAtpMbdi1SkvWQfAE",
  "key30": "62ejQECHj56S5N2NQb1sn4uamhz3jfif11S7mB6NhNWwNfntRwpb5yYwqyN6XTkGHKJh9X9mWSUbDNvRSxyS1aXj",
  "key31": "4FnF9i9W6s3YnNR5ac4d6QUTXr8ySpAjUqQTPAyPXW7NEfp31jBx9HTaEcw27wFGyCA7ey2LyM575pNGwoAeZj7k",
  "key32": "2e1a7zSmK4PkWrReRSLA5J3KCQKrTTEhoE9M7hs3KoVHChVvEnz1nxV2nkaBqQaq8hJFBZjVj5aw3nfw7T64eGTM",
  "key33": "gps324e8bqfA1DYwZcdS6fSEFU3XMX7gm3BFsKui8jvN7Zo64S2SG9MnQLS6msx1xHrPcoP25e32F8b1FUAv37J",
  "key34": "kKtZvUzkprANYRUdasjgKvWDffA95oBPwHQrqnPc2F1z8GU4PvwNNcdNq5Lyg31KxcWFr9PBvW3XEDGXLYKQNbx",
  "key35": "3twxC7EdEK5R2T6eSb1c1uBKMbhAdrjTMZRf8yXH9vs7eJheHE36bqQZqABqTFY7Nb2ZNRbw5s8tQMUHJW3vZHgV",
  "key36": "4pKvaQVdYBydFq1bNQHh9ZUnLCcLzauheRGRDGhEM83HuwdheNqowLWGBSZ1p1hYFuX4Vyqe7dEZNVdTN7R838RX",
  "key37": "3k3kuaGQjkSZpBwYenxmhMmDQfZtMJrhoGa685ku7Dx44R3RWcveQxXTQnTRVkCRLB6tXj8A4aLiChsoV7opnp5N",
  "key38": "2GkTZqbSEwdXcQz6uARtr3kSYjdoPvmGAJSFkohWMNB1GmBjbf4rag2wY3jWsHQAf6efMQPCNH8H8WB4mEMympVW",
  "key39": "2A8t7uqSanM52Tjr8CsK9Zror5k4rF3H4t3xUjwGToWaYFtf6LaJds8vDHw5w7oFDoHJyE73Ep6eJJk32tHyNkPM",
  "key40": "38oJtF8JrBAzNNU8fcQJiaySY1i1VGo3jCMBQXaYeSFxNCy5JLZrwd9DeCDhZTU5vuGRETEBZ4Pd6WsFL248EpPg",
  "key41": "2KrD1jFn1aE28wtDsMRDddjD5AWDAa8HMQ6sfGuXvwMscreduba7EkCLkisSZkbWLDB3Y1ifLtFexvDAshUGw76g"
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
