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
    "2dgVoeRGQwyXucHTSXruk8NbCnFGvQHFhjxqHd4PALZxVAvdxP3LDvzGLmSzDPxGWzxmREWaWSMXFGhbVagMsVqS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22U44JdhfCSu73GQjdyLjL2nWwTRQxNJiNsjiLBGMqDJXWae6aAAjUwNWCwcyBiXbVXtTXwscWpHtPB8RNE7F5ip",
  "key1": "4EhArV8NX4BGfbQzmZ4aomdvZkktci1xLfTAT9wZ4Y6QdUj5RCGBKn9e6FJgzisNFEY8cGe3AkmL5mrBhZwjPGRM",
  "key2": "465K89TswJe9DpDzr3qkWwYvntJC9urd6S4dJaSM72ADn7djDDMfBHtpR7C6ScmQSYuq7qBPRZEBDzLfXkTnTRLn",
  "key3": "3JhUhMrKpYiDtoMkGDHNzbADjKtFd5m3MzrReG99tDC7ATmZxPfrsXjHhufb9Fng5izXGHc3jEPCod9YkfPevT3t",
  "key4": "2dprntSz7SYppGxFYv1Rizt9pxqjeT7FU9xbQKbDrg9gmZ5NCWHQKXK6thbVEhnfp9EqeCGishixomVBgqZG14DG",
  "key5": "35fd7SjpGhD5EKesgSUEsgfJ2eBWzjw5buQy1BtPV8XVsHBSgxtpV8C3uPiB9LdK7L3yBM6pmxHBA6BTi9PQmmMG",
  "key6": "2D9W2qRKR3AskXRdZgVBhYf3eFVcaDaZzsGbVbC2sMtrs5eZYahWLNSjPX53oUXNLuJ1ADggysmzvrwCLU6JJtFk",
  "key7": "3K6XG2yrFyMqPyDCPwX89N947cmfdR1qSnWFumUyCe5qYzBjeDNA937TUhDqwMmt7dryjpFNH9BJWzJTarTLAwBG",
  "key8": "4444wvYvtMgQQte2GRWJrj7USPrcoFpLdD4xGsDPrmCPY8T8GKxQ1TwNYCqbptoeCXS1xgDEg1hEiukNSdg7hTto",
  "key9": "5Rq9jNZMChDxtH6B2ugbP4pSPkFTRF9rRPUUKjkuEoYdvEgXGwCwDmXF7KNHeE6C5wajZsC2DB3DN7bdZD28djxG",
  "key10": "4baNKtaRzmJKQFC5G3G1DnHZYA6Ghj4JuaVVohNdVQR6xDvtbtA3ypQoyJQHzuBjWri9zngMt9mQiwfKkMDNP3Gh",
  "key11": "5eMJSttFzvpggpAtgAcRmBBe6PVvBedJAJqG6H8rAPFTddV2gjppsDw4wfV64ZXenEL4qo7VuEvNXzbKWHFxQsMA",
  "key12": "58N7uRTmGeDC5JuHHjDW5hvJ2iBH2KXHyuUnAmXaa4N5AxA2wABe6y5xzMwKxJW4BS6tz9eHhcKsRZZep8ME55KL",
  "key13": "31fcgVWdxXYGQTqTNp6qZ8UvSxpCLJLBNXiPAaCKZF9pupQgkFXZhofZ4hNWtExD6Q2daxDAySuk6q735QEHFvNw",
  "key14": "2hU39oveJrVRAtLKK3VRANJv9b3MjqUUTCZ8yDSdi8fqcCyzPrkRmG9PriNzJeE7pdkK8bqGFEjDxdW2FH3xo7pN",
  "key15": "38SbcaSuFZUi8R4owk6WkdhrWGZ3HAqx6aV9KdqAjxiyphv33UEPjTPf1uRZMKFeksywFLNJqyewxjy6soqdpzw1",
  "key16": "34jwrhZWiARKNDL8ftQqXwXeuFhdMnB5dm1CTcbLceUFrCz1iZRtUQfLioSp1D2axBvRRYha4WeQr1A4ng5dDdQk",
  "key17": "5gDW4QncJJ8yDDEVuUZVbmA6yQESe5RWrXC5zdTaTmiyj3HvTM25in45d3cMWX9eiqtxJLr2apddbaqT2jMw34b8",
  "key18": "5DdwQ9uYQeTcjt9Fbbnk5SC2YaR9qZwjFiMkwtM8KrxQ4HDH3HMMuyAAkaHtTyAgkshtbJydgvMa9srb7mQheBMb",
  "key19": "2QL5c7qBi1z1bqUQHMgfYKf6XNLzyDXzPxfahsbyE7bbutyoScBFNVfu3QpBDjFXvx1EWEQVbuzmwGUBjGGt6Y9e",
  "key20": "31jsnycYYGvg6NdTaXiuPXJiezs2oC4cDoNB9enbZ7rd9mVyPRuKEPsCjGmMK1cedUMNQCz2mtRphFJ3vRA3AY25",
  "key21": "pLbcX8xZFcmYF8BwPsppNcbbXRhk83fD3DxjKZtCdhP9wtapExs1JicMDMcXUPasmxFxnEynMzbzhnP4dbyMD3N",
  "key22": "5ctjE82DMehgJv6vfygaK96dKy9eg941gzSNmeuktcSayjYys7wVRdoVvfJjXTP2UKKVFMBpmMjtERcDiDG81Z1X",
  "key23": "VcHQmYyR6mgywzKVgR9TrcbgjFJE5XqFsAhqk9E25oMVCdxn1vvRbwdfV1hCsTREKtcZKRw2YMWHvmavqwTNTNk",
  "key24": "5c3JXkeYdKYecxGaYQHBG2coVqqpYN8b2ysS1ZmJUypyLfXWLXbAzhMEALnhVjez7v6RG5u5pXkAsc1TFmZTuKQ4"
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
