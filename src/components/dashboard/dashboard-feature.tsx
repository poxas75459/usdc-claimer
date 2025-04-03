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
    "4x68LFav67UUzGwFwCP5vYiQWQo9tjVd9mJVk6TdVdaMQRT4MfSpQjnKbhMx5RuuijzmMmeRAHFYo2oYKJGwxiNt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59Dq3tRD6KB7HywbY6RLkZXheq5SapqL5uyGSVWggrZd5NTfEJmZnSUNcVuX86ot2gYX15BaWZUjy8gQHhii8m4s",
  "key1": "2FFjFF5MDKYkresjYd1PjwJqhd1JAhm2Vs4ADVYmteidY7UT3Rv3bJ22TS8e6ZkvNKRf7SRdkhMkbPrPQNT1G7bF",
  "key2": "599z2GW7RrgNXZaB1vA57gqrnJ78n7CXqdQDtRsyfbJcfR17dbRU8nDR5U2qabmPUgAkRMxnaPyXMxLKGFZ8Z8Mk",
  "key3": "3x8wmwKGKnMLSR4swD54g3qUQonWaey3MkYRTdRQWnhGa5MsymBB39SFu6HUT2GBV25j8UXzgXfX6qhmgYbzKYh2",
  "key4": "J5Y4be1wSot4N53XPhdcBYMoL9yx29dsp1D2wXNhvNrvXtknnsa79U6SNv75ZbBohaetPEYxNRJheGqQEpZrQxT",
  "key5": "zpGxXhAHuCEZiXiGGTVuAnJsNgEKU6GErV1zv3SzgEsSBpXFY5WeSK9Nc2dhXxCvxXxVGjcDs81HT56ejyMKVzM",
  "key6": "2zN5FKC1D8rP4x4dchNZuwqaFPkudLMCZePfu6deJmJ385SA9b8cd67pbYdDCe9fhX8n62eaYiDeCANehSSJVCcX",
  "key7": "3cqNhbZNsmCCCwY3AZjH18zDi8NUahC19ePje54EZBguhvHArcvRDi3j8LF7hVyrHU9xV71jjUTiBABRSYAG87VA",
  "key8": "4diS5qTxQHPFpSL7vAxHD5rHfoFL3wHzY7KTrgqMnqHZo2hqbPQH6i1LPTxtAq2osBNaTPd3YTE8fEDRQ8xuQqYz",
  "key9": "2VuwkJVp5RE5BMD6nFS5qnSYpL9ezP3AnHvAyq8t2F23FSLTcBouCxzHAJtUzmuwrL3rfm6nBn4rLSzXtcwR1j5Q",
  "key10": "59uJJRNKfagkHzqH3SCXSvje9eXZEXGEz3bWMjzprvkoqecrDzv1MdE7cStGFKxea3xUwQ3EAkyMH99AtzUjra6H",
  "key11": "5sNdwEPmFZhTNoHmtJttLzBQMaHpbg6kKFuKmT63KxS12j6ioHwGQbnjmiB5CkzFWhXV36Bs5q6A4K7mrczBdph9",
  "key12": "2oretKFzhLW3qvZxuSisaJM2XDo5tD9mGPTdjLeknXLm8zuUoDnpv3MPg9Dr7btMcjaWgJhakEihnowTe1QqUGLS",
  "key13": "4hBqGXWGjtJdaHpEGJYGtQaEoEm1cexLrs1GJATKWRq9qwVgKX3XEFfAVrFSifnyRUitcXLErphyRzt1ABouft1x",
  "key14": "3kkzw2UJxdsKNt8MSiiuwgKSJwiFFG9WBxCU5NmkkmeZN9kFqaCpRF9z1Hn6yCHY5uz1RsEL42jVqiaJ47V9kZey",
  "key15": "FCSwmcq7f4hQa712jBxvHMDAQta4uXSh3xtExochvgia9mX23zipMBNxJptCtA4GGvUxePmpVytVuRymCz1tUCs",
  "key16": "2NmqAmyMXNB6XNvabSLMkHb8jSVpY18FtcgzWMJRUfxQiZFj2E6sFjiaZ8q1tdgMsg2737crj3Bb8ZejrAgZx2fW",
  "key17": "2msniRVWvmozn6Qj2CWEMesoZs9Qthi9tkHZ1C1nihKz4yCS4Y5uPmwPdYhsGoUvHk2cQ7FH9LQWeKT8hCHv8qi5",
  "key18": "5nf3F6j9o2Ft4FEe5X5wLy4ARHfR3QbmPNBApYiYEncKqV1p1T39eM33t4xDqQBph1HnNnk1Kvrp5rVc52JPERvL",
  "key19": "5PDD6iqKMcmJvkmh9DWCwev9WNusGP4rmxtkr8TSbJLaCSMFvhwT1hAL1uVoVVybwK1dnhaUkFrTpQoXmFtfnPt5",
  "key20": "49NrLNSvseM5qzmLKYBHP4Dvci2uM4hrajaRWPxG9KrHsG84hUMcvak7QBDAZRtWAtYyYebf4jY6u79wK59WMHsa",
  "key21": "4LxD75xL4seMJPUDxqdy25qCuwUq7wee4cBQA3UdDwNZDmBqHzoyaNzU2TqsZ1cEKLwH5AGRnnjx4byqYSHrTVfm",
  "key22": "5QUY1SzBBidVLH8kjRgvjwPaJvbdrzargkjEVJcjRbS5xQWoYuEQpvsviXn2K3HER4iYPSj98pDpnXTx8BapnUmz",
  "key23": "31gG8rTPXppGybgUMoexhzduLJwD5Bo4z6sbfZJK3tbtrJPj7LZFUDTkqhckLEAZmj8VHpMBm9augZUdvhfSPLK4",
  "key24": "51M6dHQHjNn8KuXQfyWYPn6iybNeFWaQmKUJaocHWhigLTS1DkjzZSnJRrRRcKpApbFzxwEJq3EetPAEG8xSedAC",
  "key25": "3MrMGKkcce1dNLKJthjjs9Hahj3p3JZfH5UdvsQ649storerJai45wfZ3AmxxXadhKtxoAQ2EeTNBG6CfHpPjrjZ"
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
