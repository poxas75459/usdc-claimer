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
    "3BwizRQHfJ6dBbRnnXdmCDBBFU7U6foSKW43AM3uK9Mzs5FrfJHBAn8aCiNjfbxbJ48f73T4LAyjNmp1WSucQZyQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53B6T6qckuuRW81uGVmcPHsPJfhaNDP57ZrtDDBLWkbaTeyy47iY6nDdM5XdikpBm6R5vwyZ5qzp639iWqNaBrmT",
  "key1": "uf3hJXkAw3BzdTicwz1pEt8grfkFwcNJ6WL7tCPEpokgmLcofyKAkTDVL7t3Wwu2BvvQxwtvjZy56NrcBc3ukSx",
  "key2": "tJbge7zWieVw9seWdfz6dKGUjusVYubAS2pmdPHZWyEuANGbDPqoHqdY1jew2y6AcCvEH9zBsog6rTqhykm7pvp",
  "key3": "2YdfVMnqC1fX9bFqfirb5GMS5eHNBsUPqguxNr1QsNZFGraXpPPjXQe8TC5id5bA1VRuP6crgpg4CPgRaceNivKD",
  "key4": "5XhGBRZbgpz7YrxGNzjXbKu2hUGhF6yWoL3ER9LbDDfvpYxc21WeLqoPpWYw9fhZeYEyE8KD5CjprdsmAncva5Xj",
  "key5": "62ioTNwEM9tBwsSNhECw5s5ZyWQWRJX24GpNLxXqaGa53Tntf1gQKqEESXcwaGXcjcXPXZS45ZuquVioZbabsK1y",
  "key6": "3zUCEFZRDQP5VLLtpQN8siH61pFodkTxcitMLYLYW93FJv3tyoh8pkFKL6j3XHgbMr6ieJfhZzrnLRvAZRWV2uam",
  "key7": "5Fv7gGFjGnKSQSCJe3DMehdpNkjYfYmwmcrkAXtzovQgDQAPzvSiBjnCxgqifjCu1kMSKGb6saoaCU8bFQwYaxhE",
  "key8": "2PEPoU5yakEMnrfLsPiXt9gJMkMWrgQCucJpMVvn7fY2ZPiPhGcitVRMEAzfbwBV1dpYw4WG8jjpWNpfMt2BGAxP",
  "key9": "36sARZE2eXt76xcBGFdahazbLjM1M2vgmp4whNNeV6aJCdwqDrf6dgiRnSJXK1VNjNYEAuCaRCFcmjhF2Q3tHqjM",
  "key10": "53aAHyg1CLKK1uBqrQFqmB9mKejraZCvDUM9kP34Pr9nWPsNRmgVn1AQQ9es7EdVRjAUCjDFrjuPgE5eDCTKMnN2",
  "key11": "4ZmnWdn8GmSaNUny1BVNcQxhFUM8fidSjQ32qrnKw5RPEq8FJs5pfbat3sYj85WNPoSBCYPCfpTexWuMKZr5UGrY",
  "key12": "oyMW1Zeej8LDDDhxPxvzVmGqAqf8fezquegtC7CBLhEeXBXv6STKCN4C2aVDAdtxNgrasG9GNTq62djh3qcnjKu",
  "key13": "2yNbGxi8awEiY8yipi3Kms9LC6bdBHRg5SQBRuPcbWZbEYL5oEHdaNta9AGudHcAArdqrHEVj1CVNH9n8M8Pi5Nx",
  "key14": "5XxzMxuq34tBfT4XTMsae7fZHg6DMjFuyfA55iFHvo9eGYsmMiGU1z4r5V7YzDQ9F3FRjbweZcnDSpXzcVtQTiGR",
  "key15": "b8Tdnz4gHULXwGjpc1XxzL1i9B7Eo4YUQLhNiWmWM8DZ7QfHqPJ6eRiG5oZ4u7uPxVbPnwRA1QXFJPMesCNa6pn",
  "key16": "3kF9fyBfacwq125vrJEDWkNnRbYmVqkPWa69L3wyKn86KYwMZheerTiJsSL46tkqq2NDTCgh1p6PWbRPNB6URbnz",
  "key17": "4kDeiNJfPckVLKKE5vrWAV13de7vNj7FFRwqCJAk1uFQJGybGuwQVwgnx35VedV5nEXt7CurE4FxKXBcG3WkX1es",
  "key18": "28SK6618Ap7FkCJfyiK4HWcwBsdjPXP9M1jw1enzPDJf8R6yCsKbCzgfK2AvM6tBk5jo292Zre7eLpD7yJxi3w2m",
  "key19": "zBz3dxanKFPyT8LDQ2axToQAa5UndmBJ6UnuC3yeddYHPegF3fXDH9EBjc3muJ6FX1KXtfzLnNWNG7CGD3RVAZN",
  "key20": "47Sny2sBSvPbUx3QYNdiPhkkLfQgUxRhdkfT9e6ExrG5ochA3MX1PC3iLuNs59zzdD6Dc3rmRJRMjY9DaXPqx3xQ",
  "key21": "4oCFkDWbXe87Wjro3gkZk6hgqkGCsxzpVvXNjTHpwwkXqoNcJ4E7qG1gUe18F59ugLaDdgCnidPxsQXBQgDoXvVW",
  "key22": "2G9JDVDVhJywDYGLceLfHQF3mBkGrqFTAuTvVzG5nvAqVLgguQqkT1s6pmzkeRk2ZraFCXiuLR9gwz7ZeopzJWEJ",
  "key23": "5Wtj1txNzdKdEbd4tx9w2uA6q7cJkCF9BoKwQG22q8GEVHa3CEfMf9DVG46otMrVr3CmxvpTzJmvdUQZb9rd2uVZ",
  "key24": "mPqfp955nLgab6udFLDAzgNaYJEMEEbQk11aiQFrVunaVcRMnSU9NqfMrmr5Vc77gUKxSE14pv7B53A9JbfWEi4"
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
