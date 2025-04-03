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
    "5QL9dYkbHJRentfFF4NcKvVL3DbG5LBfLKj7R1PUztppcgK9gf9o6Fz8m8iofibyC2DyYr6p2EL4fhTcieTdq5rT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fhnGt3Z7fvYYQnafsfevANkSJmRnAPkodSWwF8AaM8dkEpauiy1gvTQ2yD1VcfX9YCJ71tookgtQrqCo3DBcM8b",
  "key1": "5PCTuss4qqqzxx87YYhdkebWwNi2xg1ELjkANVtstzpvYFB1Mgc4pA47w8qj63SsbkxFBZYqobRFbBn757zVETx5",
  "key2": "2osqnFZV9FRgBiDpY6sA8nWAWx6emvJH3hQqkQPb39xvUYttCmZ8dfeQ9qR1gDFjhuFZ5ZqtJCuPUtv6ke1u3Zc9",
  "key3": "3zA3Usr6PZJVk6PCM7Am9MFcyqcJC7AMJ1S6EdJRQ844p9fjmE9pGNgZEJj9PA2HGZ9UgTcEQvpa89UFP9GtKkYg",
  "key4": "49eXUL9jfQjLMEQLd2JQS1fJBytMETTZGzRqLV1tqV1jkVrRy5LRpTCzTG3PQTemyfBtz4Rwu5hamm9NDkHFUPcD",
  "key5": "EscD3tqZdnMC1jwyytuLPbCGpipaci2691WKmuCTQdspk8KTb17zcfUv8vb9FYCec236G9yj4z5aAtC5AKNUpyf",
  "key6": "w4e9dAkJzLqpjm6Y2hmo9ykojZDoVnFrfd2ZGJ3Nt2GZSEgzNjyaq2UTwuzUhpbMzrpf5UVVVYNMgNHCgUJsvSk",
  "key7": "3x1EZJGvtLqgyg11X3kycvEe8ioL6oYVqYxtxDKa2mBvzL3bSzLT6cBUXiFf6oaetRDVB47psgMgQ66ojTw6uNtm",
  "key8": "3YRyV1hdxajRJKQ1x6Cmwe29FbHTeU4wMRbG1UAkHmGLcjbPRHrRNkd6iuFMW3GBZxq5ghaKR5aVL6pCbRqWDER5",
  "key9": "2JZXquvt2TyBWX42MpNkVXkD3i9y4hJRTrt537iaKizX1kjt7iK7D7VEZKHnPDQJr16yWvmF6UuLwAtzeDZXQBJz",
  "key10": "67PgfFQnVBtoUFXCju7J4xyvqzJbwE7a5vMhHX9WTtHBjCuSsfSoGXEeuvL7tFPWx3ZnZNdqYa3Qah1PrYN2oQgH",
  "key11": "2DkP5R2x9KfnJAjG1Dns143eEQBpFyrMMWKAwaBXN31L1jJbxVef16CQZiZnyRvjwngXU1SeNDS9n9A71NiRMLLH",
  "key12": "3eMPoAEVgTDW1rNjkeC334ACEp2w3UeqF3B4MQVf1wSooWUXsB2Z8eDNL5ZGdnFL1RotgFiW8XAeS2gUvGPRAt5t",
  "key13": "2ej1Rcxv97iT57ZFPobGawJAHcAebmm7rSJrzdwqEm5HtnV7zgurUt9ks6NPpykpJxSZ6nqNLg8Bi89aXTPuMCRT",
  "key14": "5ccfCtt8mmZi5jX1VJRAwRGPr9B2ntrB6jYreaM8GLqvFX6oRx1ShZt7QK4Y9jnEbFjjsJHCMiDHdxifin4vEqZQ",
  "key15": "29fRJwNyhenJwdTdADeTPA71xzU8CBRoN1NkuonLHK3rhbCgW6Sskf6fj7DfGju9gF9dAsvFMPWcuRsboaHygkGp",
  "key16": "57FRv2tNtaoGPwHT9y7pjaThEv82hk6hBygqRkFtCRoLH6n26rpMgjV29Cpp7x5xBHjAkKbFF88R9r26QvsQLb18",
  "key17": "4oJm94LveVBEZPkvAbTA7uHh8jyBa5jYWgJrL3bzc35ZQDPD4Fdkzpm6vodPJBrVDhVN3LvgeEjMhLnSrTTFMzCT",
  "key18": "5HUGye7tW5wVLRKnwLj8EBBBp841ykJvFcfZHPd2CSRAN7uqBGXfRjTPYMRuKnwGrggD61a7RX1ssaDkEdMruX95",
  "key19": "53J1pbm1Q6kpanPFwHGZsCHtqQwcFZWtvaqNjcpXkpAL6Ht5ETVYMnK1eCoeWSmrbyGJ4tQZbPVc9G4J1eHkhY5g",
  "key20": "SYVYcnZNrw7haTXLsqy8CiBceraJDRAkiUZtxjxrr9NPdW3i2JvxTHdDQQSTzRVeCfNz58HiY43LmNcTuDqNv7z",
  "key21": "2J858vmP9drKCsc6diPsDTzmFtGkdf1MGefNpit4S7BgHQHBX1Ec7GQYFvea6VKZ46Yditq9dT2kjztNWLUuD8cG",
  "key22": "5bG7sK1YrDfRRbidAxjPnUwSds8ruDV1X9vgaEcMJeomNqp5GAjpnst5x9CxBFfd583yBe3sxebMoSeS4HMZzqq5",
  "key23": "3WwjTp6uFiUPdTbuR6cby3W3cVrq3BTeqh72z1PufBtEfUuML1o3QkrA7nLiRzNi8BLHLTQVDf4fyHqQAcAFUspe",
  "key24": "4W1BDR8JTV1K1GiYv35561WVL78ZBgJ8LKqNrXdGnmtazd4GDGMMQuKRa2Z9ziyfzzHbJpEZ3exDUALoxgcmyyh2",
  "key25": "5VV3GXVi4yyqXCwN2aifAZ9L7MEb1BzCKBjqDAuNfdakJKsJs83SB1WH9PEVTsRuXPXoJP7iAEjf3BkTpZYzwjpu",
  "key26": "5i6WygopHGZxTxjVRiCXTg8dcRCmN6HkPSKrGHXm1bwX2qNbiHrRmHS53JCofqMqv9qu5tRo3QhDCaxJmXMzpiVg",
  "key27": "4k8E9B7JvdwyMcoBHpoT9MECKcDTbDSDn7EpDxrnDp474SgrhKc1K2HF1HCdBPET1xig7heN5q173BUpXmHmyRat"
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
