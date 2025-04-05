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
    "2Pp1Kq34QZpta1VG1z7hixTJr3CeFKCgox7GAAyurcLss4MnoSmXYTEX7a3cRqDDM7JsMnMNfqY3M3e2aAtPa4X7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RCWYSPcfFHaZgcFRFEYFdwV1BfPAiHqcPFePvu2LfjQGhAu8fneBcdi7DUadVNqc5ds3iSJZedXRnt9nm9cm9cq",
  "key1": "o9YY8iQ91BTBmRy1VF2Zh9XQYTEWTVEGxsc1vSBnbLL5k2SK2er8SVs5Mghp4PkuCQNChLxAwKJ6MiPg1SHESWa",
  "key2": "2Ra7m6KC6756Dd3nyyGkSR6RRsTLvbHGYCPs9e5njtywYXRWCvruHiE8ULjK59Nf6fWnXwXpvAzmqiaMd6APiSnp",
  "key3": "2e5uTqWx5ME5Nh3Pcwa5cEYGXQtrNWWhm8zBjHh72JMUinLFWasaSXhtwyr5njTWQP4GGBrvB82m191Wa9fSPB9g",
  "key4": "3ZJ8iZXfRcBuvjQAQEcUMSBxhc3rD2NDSHtR9DDRWLExA3xecgki3A6JxVFvDtQR7sotfkWHiZV2eLcBmEaoNzYi",
  "key5": "66DgzGwQui5hqriE9SMT2GZeN8HGNdPLLGXELibqCbxggfjjvJGYJSxMUCzJ7BQhRqzi1QnFg2UKbTYSonswHbnh",
  "key6": "4GEEKE1cuBuS9ixBcBtUGoQC1Kpp1resTrr2r8c771ixzSbKyNqQSnp15L5kKAubwk6v9BAownkdjeMkdtpxMUYQ",
  "key7": "4fRGSS31SWQRVWx433cRHLRXRRcNexdH58otN6bMennCfeLna8vJHkwmpciTrtW4rNqoSG4yqZgvT4XwFReWKT6N",
  "key8": "5sBeiTnNtwyFMHYbgyfXNYH9s5652ZRYNCVRi8hqLtiKZ2aMTCqGxUsR3HE9kA5uT42fnFx85QDtDLAk1FaXVuXX",
  "key9": "5PQGbhQsmG6VEFK6nTvEeHQf15RiG4gvKLrQ3C565pDQayARSshfECxbbENcFJW5myvYiabPKRAfSXUPwpRuVZg4",
  "key10": "5Q7F7yD4cXcUDL5QJHSiDV34Qh38NfGu9g6uvdwbUs64RpuCkKNRggcac5STzUUK7HMcEQtxfmXMAcJDFfQLV4hD",
  "key11": "4m1MJcL6s9tTS4BqyN55Vq93XUkW6pwz9ky6zCbrZzvuLTys8AHKRn2MFHvQF7GYLSS6YMocrQsZRR3zE2YLohB7",
  "key12": "5H1v2Dj2wdwQSxaUw9QdVHDkpWNpmpa2eKUW4nFUkcksSwM5Qjfy6ruUEouocfA5TxGpcHiGyP7NhD8AdMmdTxk",
  "key13": "63RR2MmUqtX7so4SeN8gDBScm3guinFiLXqob742JDie2NWuyKrdQtDiLLEz3EedsKsQSQ8ii21zkj478YoWSeYc",
  "key14": "4ZYFpr2WEmzonvzSzDHprkTJEJscCApvexj9TvHYogSz6gQqfxRhHTiRcj1Sz3kPbDhS627pLjMheP69Q6ao5ANp",
  "key15": "2Ds34mTzJDpShiZ5rRGpvph7iJmyaqhD7fjnKYq48hnxSuL1z99m41EmwbzQcBqV32Ba6ykd1sybdxcw7u7dd97H",
  "key16": "4wDEtbxefEJM2uMAEwBPFrqrYzpM7xqpoqcFDuu4A21fi3xXuQogit2A5BamstEv8uQz4QQFCW5BLDrmMruQwtNb",
  "key17": "5zoLJ2DbnXN3YNvdRgYSUfTFZP5UQS79YFxkf69zVksrbZEjdDfdGijfzE4Njiri2x5Wn1nUd6YUwhc1SFLWSG8H",
  "key18": "4M2NhUnu1qxDegyonFhE69zjCdMDdUq3snzJLwXijsMkjmJA1ZM21GkkcjvoTJAxKapMoWPcDGJR4FEhNvstDDi1",
  "key19": "2AFFS4M1R9T5Qs82vyjH8kSJD2xmj66mwwQes9GG26b1P2Zb8ANrqRUpxSv8SQwEAUVkKQBFwB8m1fB5kDhFQZNW",
  "key20": "2E7BkxDEyRtbnUbg9GB28SqfnJ2Xtb4JPDFuJWZzkQgpLpnR9Jr6gzPdERfMKiXvMtLigEWs7ABm7Dcmnc36XPJ4",
  "key21": "3p35vmxQZEfx7tExpGQgLJEVPj3R4YQ7bkroL3hz7AKJtDzGRdVscT8NLFTyTzwzuBLbZyReWStzZ4KTAeYudbQd",
  "key22": "3PNia1kTDCJRVgiENUTVcPK6uTox5HTpi1TU7nD7QukuAYn8naWQ4SpYgxuLp2pHk3jHY6DinMkZ47be1tBa3GBx",
  "key23": "25oGEXci6UqrD8sqzCpQmVccTdnLmJ8HgqHx71srcKqUcLvLoYpJ7cBwkCQ8XwestAEkk35LfCUc8SwYwKfZP5xa",
  "key24": "2bEFsbDEakCR4kwHSxVdTeDKUkqaeWms8o3Wiu9mXvXd3uVfHetCzkGMkLH2tUx5XyB755SrmUwA4fZw98bN9a4z",
  "key25": "4Ec7dWnet5Dx7Y3qvZso5XeKH2BctRGVYWk2gtHwZ2LGvqAbAvRK43f3Kou75UHZJkQTzFk8WJ6LBWYkQ5jnUyuJ"
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
