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
    "2HXsWqKeEmFHfjV7ixJxZVM9vVhoEfFhd8WywRvZi1Csx8GSrVCJR7ERNTCrZjHTc175PL2TQs6gWBLJMcCWvDZS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YKNHf7dM3qYfRZGDyVhjVvDJQVXRDSvXWTjkJxhywrxyxwnj4BfxctQfz3hTtwshLyDQaQg3GLwPDxXNn9Cwmuq",
  "key1": "516PH9fk3wsPkFGSZGeFdNdFSKQC4bBX9DqVkPrULLrEVVd8vNgKtAm1WnmBcrMCCJspPqanTHkaac22TwjTwoaX",
  "key2": "5kRzQCoL7y8BRjqdDaKJqKBigAfNayprL4yoBLrMNbatF4GHyZRASbL5XvsB6CV2fQD8qk3y25fSTNY2BVJhaHTN",
  "key3": "EFyPceQh3PT76t6t38dxPgTipyLLkX2NU9VJs1r6eNgKVuN3cQXJSxF3aZVc5oVD4tTtiLFvQRCznoEQdQuNNQr",
  "key4": "64crF4FB8yxAXZs5ZkFSWi6r9n2YVR5AcxrgaLjpxeYZKDfB2PBkGsjoAhrr7GNrCCgdYDwRFbdPGcfrY1SkjCYk",
  "key5": "5491qBmBizhMVtKg2D2xeFhrKQMRwEugAXCpjNPcKufDXc1SJqw5zPf7jRWn8vJLqpyHhtmisZaZqpgAV1yTT8c6",
  "key6": "3XYfUmJ7q6Qa7csuxoaNJf5yCSRgTtBfo1R9LJtdE3DfEgzMzipjoBbspjitEy8Eg3vGq6qibZBsSWZwnE2r19sn",
  "key7": "33Ru6aoWxHbVuxtd1N3HVncSN5eg2ENfhXDyeUgTHn7wVBR6TEiLcMVBQMKTWdr7bi93vxdNHL7u6K1JsS6xcuuE",
  "key8": "2h5gafkNNqBWdSTKLZWjA8qyUNVYdyoGgChBBNp5U7oBFU6HsHWjRws1kkBChHRa9B28MGKEj3FCsq2sTGBxTd1U",
  "key9": "5m3Kj8nCDDsM3ZnaG38LpV8zeZ2U9TRkCzQJPEydNryzsnBFfWvaZJPjXauVthJqZLcwPNedSed8SK7rE6p6cBE8",
  "key10": "3Luhi2mEyguydvbBXcLxmRRGZrrhoRpE8dVZRNyTBFp25yDVLQM4jdbKMA4t9eazpfuqDJLbzVuMeQ74N6swagf3",
  "key11": "5NdMLP9v9ZtK9jiQmwLxrRYemjVjew7uAhXVFSS9p5Yb9XQpfXDiUvf4YRjCrEqecJ8AUuraNMXU3WmCkEyfa82K",
  "key12": "3GPK2h5SSwCV9d9gvQUETY3S88KrsFLEV4EvJf2gPngT2C5eLWZYTcFqp8WE5gYkjthxzxjce8R9NQ3aVNo5sgaL",
  "key13": "49FXrHVhvpamUydQFfaUHmvPrboSgZGiFDPsCorBxeGeMQvLvtxebCUPnEi2SpbEuLoCQbs9N5TjBBbPxTLD2Sqw",
  "key14": "5WbMPHvxxM5DTxwdfCSEZsaQDuXUpS9dSf8fUW5HFa9Tvj3dS6Up2ZbD4qjtNUiF7vyFAGzCKJgQAeoKkjgnQWBM",
  "key15": "3x3djZPsukTfjAuacAxa92tuTSj1xDAsiYuAi73fGzDZ7jQZhQVhTTHQqGWoaPseRXPhGMB3E7fXHbL5SjH3npaP",
  "key16": "2pZt7utC5oHJWsPRPkESD1keZ1YAAFezvSjwt2DF8hxjTbZn5BtyrsS15J45nU4p8nPEjY6Eq4QewXHYHv8PDcwj",
  "key17": "25UFctvhpgdB36hTwC8hFhEFEk3qxo99F9i3EYWnwq9gXeFVbsUQShKYCyq4ZhaXcmP2tq3pzX8yqW2aKuMvG2pz",
  "key18": "41HWzsjXnXjXBKer2gYAM8v2d9ysZXwu2WYqRsBt85cvuN5yfz1netJn3W6UhqWVT9gR3r8nYmw1uCquCbHW4vMB",
  "key19": "32XfjWZBPuQvKBjrv7zXXt2jUNqdtjF4AebfP1o8UK52v8G4XbZgnLbk2SZK2LFKBX3fqQ6cU9RCBD4jkX2TLxWw",
  "key20": "BErqM85AVvqFVj7XDyVrNEcSXhzV413bSWG8fgQbzHiYhQokzXncGuznnoMc9qkhiUNfb29JCbHNRWU6mKciqcZ",
  "key21": "MY82pbcuotrHhWyZLxk3uARCPa4o1LcgH41qRRDvTacLjKLzafZb6LJHqEJQCFeM23bsP7cm8UdaQci1GdAtbsH",
  "key22": "3iRRN2c7mVXU4kyXXLfnKzne6xHcd1XZxtZNgaBg3LkhPTFf1xSikamyWhqHbFBX4CsPkpZXMVfK9HT374rSrfjd",
  "key23": "KVugn2UQ34ZBAYfA6PyX2PG5Mg142rdwDwMoFCt3LLCTmsdrCGFxdKM5mTya1pRNbwumnPyk9NotsKdnraTFbuJ",
  "key24": "gjYLajiPhsmXjXLMazRFk61Z7F2ytbbnPyQwoWr7eT9AGbB3E4W13UgYic8EPDdJPwvKMzCgArA2MbMAQrL7PiZ"
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
