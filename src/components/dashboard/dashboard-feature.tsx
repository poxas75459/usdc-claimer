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
    "U3ERa2kqvDA46tuzapTZWBEs9FD8DTumAvSJ74CDSGzSDjnjEeC9DwL9bNGyasqQq8PwfYDcDhycrQpAuiYfACr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DVm7Qr4qohr1M4MQCbNWw7q8ruUaH3S8gJ8bfGShd6XyR8TBTEDjuRKQdryS97fhLUAAYBGWRHoXYXnKsNpGVkQ",
  "key1": "548pbyGT7wZrx1dLBs9NzzxwETGfHPmgYWtMkbdjwQDjwxaTzoWhgWGkzdE7d8orbjkgrBcu2B1uiY3QhKF53EHf",
  "key2": "2CK7bNgjEjYPr2GZpqmkHBoK1Qeq7wVdn6MKgDHDVx8RTDvX18sBJohKunjWd7rF7vcqcTddQRzCoEWNbEiDRnVZ",
  "key3": "2z27NnnQjvpknAvAGqZF3VXY5Rqq8Yt6gnm8idTXZWP6uw4JzszUCWvADdjy4kj4dXcLnJ3cjHASPiKw2w2KxCP3",
  "key4": "653mdk2v8Dd6Kgtc9xR2NeW94eXW1WFQFjDG8osj1qKTT8R5XQ6r74Lje7cZ8qyJkyksJ3RLznYCeJRtCn5P8aSA",
  "key5": "2HWsQhxt9VV2vCccf26dfhxKNzMUUg2FHTaD3jgnKbxdEGNFbjRAy33PjwQbHNt3kNCjob8kWwifYA4UYGoM2TQR",
  "key6": "5ZrnVAi2JLLVPsVeQoDGq1xsuXEChncnGdivF4MtxpRotxPeYZK4j9JmNkmtGvZTHoBVkD1msZuJ2RqyBqq3ZkKj",
  "key7": "d2R78KWxYsD8e1xSUj22XeP8Eg2PwcdiH38mfaF4LLuHzmJpgAAsG2SQSQMFWDXBXbDGgwohW7eby2a6nM4J4V2",
  "key8": "2tYeRwEzuxHBWcJE61dvMhBAaPe7UKTEVWpP5gEv1iomw31DfEod9bKiGmqTo2M31ruMTVh6HoCwMxGE7tCfr6wJ",
  "key9": "3UaBh7CtghewdtGwNrjtNxseMoMnQErVHqSH9nC6kUzq44SYSstDfJgnKQRJKtruDjGzy4fB7Gc5Joa1E4fTEdSh",
  "key10": "4NtHUzPxxsQQg5WBWc7zVgJieWrfZSf9yq4tPnJYbY5KwpUtjNEcY8EHaxoZqseyAcsXfaJpeEsnvrXGeTfyiV1h",
  "key11": "2QNK11nrSdhxqtjkUg9uzVy8csCjt37Up7tRV4JLXzFDFGREfZyNAs25m9QtkNA7LjwRfBm4mRjDyWaNHugnMMLy",
  "key12": "3uU77ikgHVSHMMUZ6Hj2i63wXrLisc6GFt6FC4MstCfD5ihJFQexaSM5jbu9WXt9wmbWQS5Q2rgfKwUTw4Z9Z7Q8",
  "key13": "3ndMyanrEWjgEAyJt9gFKCM3LM2tpX52LosCc1BqvWwBiS6mieuW5fDTnK45McViEnwBB15SKG8fRmWkydVGGYam",
  "key14": "2DRLPxQ8e2DoBT3vD3KJWpFZdZ44TW73XL2yxFpEemGoqKgEaCYapMiq1RhqUw7DNZCU7fV5sYdamxMCyAR7zt6q",
  "key15": "3CAawqsoSs8Svrzp6mcYMS2hKicGZ4iUZ7jDX5vggARmbeQkdtwX5w4dcEiMdqu9CUQ1beEzVgUmC8LngDhKqXuq",
  "key16": "63RGRKNXPyDpNCGFtGoKRcrvN6x2nDXgv4MJA2aHLRoF4co6gRLiRZCnUBNbXUdH4L58kR1q7FjcVuZozBDVrW1M",
  "key17": "4DnwrFcrskc2zBw3xoJqyv5AQTPVyLUb4mcHCLgY3gizRWQRdE9kHZ5LBvYBgBdyPbz88wmHZvkLasxiG1ZTrXdb",
  "key18": "9gxZNAYc3DzdnomdHdDNRykDadCjhRZNKKeYbFKkmhiWVDJt7ruuLHh7YM1SQbHNERV4KV93q5PvbeiCG6kChBg",
  "key19": "5mf9ruBCefqCTrG4BLNdNNPUz8aKAXmSs2nwpXemGcA2rMJRqFy9WqskdXph98AesATqq4KzHcDKiaWZPV28Ba3w",
  "key20": "2c77VMjLPVmnB1M9JogrzjqzGjZqwZAp29NijXXrj78jzPVp3XS3HfMcw1GoRuvZRnUG8cpfzGi9g4pfh4s4HCDq",
  "key21": "LT4S9dm6LEzy29SooNgkDZhXGSqnCyaUb7rv73wu7aTXRpcnKvPjqRwStzMqT9eZdXT1Dw3jKbqbR5ZFgrt6156",
  "key22": "2NM447fWGPBhG8oC2RCjaG9CFMtwywhDwMSaWh6f8ZqZRRF5EeNmhVrQP8UAo85cRWscRkMFZfhUhDsJyisG1ebw",
  "key23": "2vanGimjp2RoDTnthphjsVWeD5ytjz3eeKMezapFufU7422x3zwKsntssCGk4XL6rzAMvTnfHLKXCG6zyzei7FT6",
  "key24": "2aA8gRjpeCEyz6vidboYFEDtfgESXqAJGHkqZNGT6aCj2tmgoWTCuv4HzAqZNCNDVBQySFuTyskwrxxJrFTLue9S",
  "key25": "4J3Tq7GhFyCFXngF8ghMHXgCxETfE6ZqaC2BKT7ekvhQdf9VC6Ag6mEPj29uqTWkkE9iBwyxwVELxD3DnDpq6E1r",
  "key26": "4WSTbstk5VWH978UHNdBWeBHdVdKx5DeYgdwDG7Q8Ak9Wp2a7hGkU9tgZmL2xLC1Ktk2R7QGH1aHThKqnnXBZXD8"
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
