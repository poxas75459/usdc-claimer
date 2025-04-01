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
    "2ZNhSZNnDdYHWEAupBfFNUrS2TmvUQvpxqsGw4ChpkavnWXUtXjRRoKSFwnpyfk3AuYSFhuwjuEGwsrJ6S2urQUC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BcYbABHc8bkimRdKr7J7J3qmeCB14fowDagk3nyfRwmVH4xkuKhUQcRdVCTgJBiW2NEePxMkQ7uCCj9h89AWidv",
  "key1": "5sbG3xpTcMFGfhWn6p64SVGkhprv74FNdSFdTvqnCG8h9zQ9SsDLHyZaFupkLMKo4v2Ng97a6GB4nKqH5ptJHJ7o",
  "key2": "3V2hyak5BEpYHgWSrHmYsCdMkpQGSYWFMoYAfeKYNHQ9ejEXVhndtwgv8AQWZjBFA7gB6NCRnCLbMSFUYYgETQD5",
  "key3": "5CWFAwuccyVGi7jLTSYjkH9FSz2WZJ7m63CzXQCuH5UGR729xwipSXEjzDNFW1RgE9Ajv4GuGGASqE2SJP9MU4ML",
  "key4": "7tnFcaAiiZowdsVLGagDteJYWq9GSUwe5weC4cBEHroynMoeSdv2C47CSc8dYzTWvroaT31eCqMhyiQYNQM2to7",
  "key5": "4G2MWHtQTdtVakyFoG3wLZ5h3R4EPJCtwCbfGNB4GNe7WNp9B1JurPP7XXyEHAEWHGwDjQPDQ9dR3NREtnE7TiHy",
  "key6": "5oU3PzQgDGU4McDgx8XWkiT9XcSLbQDLabDTwzmvUkxvVt25E2YEe4vbSYbhHST31BqC59LL22T2C4nkn3bhwbvh",
  "key7": "3n7RX86jPHrArL7Vp1G9R1kn847Y6ivBqYsvxuMbZzS6P1TX13XnNyBv4bW6jAPF6LuozvPJ6z77SA83WAoFPi3J",
  "key8": "pVMKBaQyfGjrXZDiuLZwkzoohk5yBBUiR4Wo6sD4JhykESuVLQeca8EtLSwAZ5Pj8cC4rtBfzjRTNTVPc63ejoX",
  "key9": "49kVbjGmasSmqWuRQSTeU27KPVBPoXFDwREuZaBin3ksuq8X3HqJQvHZ4BVBY893pruEc6tHTBu5ZrR6kiupt6yA",
  "key10": "HwZ1xoMuzZ8rV9eCKrPQJHXavqMkS6p8RHWwRhpFzisYzYdm8ZZUJJQ5DSBoNdiQnghpYXPNT5qnizJkyjXaZ8T",
  "key11": "4eKVRN9mZgXcTzCjX8zeZmZxW1ucMnkSkMvSiKgNx7Ek1Nssawo75NBijqcGLDxo1dNZzmNfpah35Z6p9vKoemt",
  "key12": "2DPq75x1CHqkJzkpFaSfGA5YfUvn7TwkgDPhTaXxhBwnqek5Yo9xs6pedDA2Nq3WqoxGRd6Vjy82VRgwyJrvcf63",
  "key13": "3xJdMTQj8UdfHxUn1i4Azu4NX1HgA6q89Cj4rJZjespi6Y8EyKjHXWbL85zJVtwiJ5yjwESM72q9mATpAG8Vr8R3",
  "key14": "5dnYmoA5opnCMziyKD71HJ7xWyrWz7pQdhoPf1axqMkAc9duHi9iZH6FbnZMikodwRmxu88BMGBdA71wfeskEUxR",
  "key15": "2WEFxh1Uk9rrqtLRLBR3VTaDazK4XZG6xXqa3c4FFjd9kj9WS7Xe4sdSVLaNdsLpHLDuF3vDRvp1ssSPtye1PHUv",
  "key16": "Ze4NngfzaJGdCYjPDTBPcvUwzTqz9HwR44oixYRnxnJcknB2WjqZbdyyfDYhM2rxwyiNKnyypeo61qjbpNwicmf",
  "key17": "meeEkpNHF6fGvGivCV8H8mFp3vkq9zkrZ1PhsFYLZ61DcDvvQ2BKXUfgxVifC7wuPgPwyEmQLHBQzRfLy4LicyP",
  "key18": "5xdfkHRXf31fYghGo1W2AdtGZDc7aUaLt7v6DcRFLQXFwYg4WQGjtnS3kXvmxY9LBuAxWJ3m8NPXyCEdQq4Wxux1",
  "key19": "47qZBBaMfXK6yp681QF55szqvkY9xPPCUfDZ2SPE5uD3nX39SW2Us2iFcqNr9Ya4zGwdZN6vGF4Ndp64zoDvMhTD",
  "key20": "5ttVhMxsWM3JnvbSMjBQeoGTGdbWHee5QhihD6duXZtnBQYJSsF8vVkzah5gjjssGhntqek5evnRfecqCxYc9c2H",
  "key21": "4oHSqrtJcaG4Upih2k8ZdsfynkZQQFMaiPyW66LUK87zCqQLnT5V3RkJYGM7du9CMC2rSuqJLvyZK11Z8hkSTVXQ",
  "key22": "56bPiHNHGeMmziLdYdbxfquAHjxuo8W5WqaGgWkYkQKvGNijwh31KWPxieouwhFg1Hgd2ttM4nJzshzLzWpqgqTn",
  "key23": "5GfswGy34RPwenLxvphrLKa8m981nm9qPATjxc5NzmTqfjcsMDf9CpMj4fCNjBFwwFjGZo89yso4k2RUXmYJQhJq",
  "key24": "4KYFz63uvjSXfCqTgiM8pDgZbqQao1QQPWJsL8dKDXEVCjaaohb6XimDEtYPwaQYzubaNAYfpNH6JuLGqnVLcHkm",
  "key25": "39PPjt9VtCh5Ci2Bx4NUrkb6YsobkyfGrccK9op4mFPP51D81hqNk8UED2hiYox9Qy8ZSHwjKmYJtXYoLUJhcbwT"
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
