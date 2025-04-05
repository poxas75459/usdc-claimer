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
    "3swEaoAnGLVFnmrr8JySehY5cKZWofniyXeoWJb5awh9suJeDs37YgwAARWnpY2uQuP2XMSAQt3kyVeTu5S5pStD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "x4obbfTjQbSyhXTiUKrP6wtb6hpXzmfqgFTaXFo4YEUbFK221CcknFgy2fUjFMPiFpxK3A7siwGK8LgwjTXjYvW",
  "key1": "5U9dEXs1BCKNE2vZuVtS3x28VdpQnhA7R4v4kPRMwhUpaT263xvPE2rieVoWsCMVcgbLmKm6tsuGfiKhhedV9z4M",
  "key2": "4wkQs8nh3KGLa1m8rjmaaFbuLrRU9ZAfNdr9NaAQ6TzVw81noFsCyXmqVnCeVneEHJfLuF2CVfgfcARBqAwqvoQQ",
  "key3": "33p6xJEanqiyrcjrLRPLbCbdnmhJxorryX4M31LooTZxWuoNJaeoYY6kmbHU1nmXzeiej2zU5eDpBiQ6zr8N3pmm",
  "key4": "dgG8V9QjLsvnMrfpKGe1r8m4NW6bHh888mCLZ9iwT81La4vrbRiqfExf8H2kce6RRAWhCbBVbv9CvAUtMr5Vqfp",
  "key5": "4XSVUM3ACFJLYqZyJmaqsr8XHLECRCruonMqiENVJ3BdmtZ48vyVXjCqFf8uL9eA535gzGMc7zEyJWdVjgd4Zh6P",
  "key6": "4EvmZjtQYUtYnhHqLYTuufNnes8Uor6cmXZ77mF3YQSfMyXsoMmizVHVR9mgq6Vj2azs6LK5HiJzHMgd4DrBJYyt",
  "key7": "4D26MHxVPe8XFZiJ5trzhfUDYLefnrAWAJbfFXeZMRjgycrHcE3UA32RiiGdgJxFFoUG49FUCgSAQtcEfvNGeimw",
  "key8": "434T9ZopttwoQrxoC9q98bJm7ZNxz8rDicNduav5jwEXVVFvvEBptEU3NskyXF8XTbDRxd3UrqijbZp5pFmQnSJb",
  "key9": "4dydsykX5CZmoL4wwteLQm1f3FprMsGyfrCXEEu4DupqhuPDY1Spt7LnhVGGbCsJ9jZghGZWdvz4cYppXAkugLkx",
  "key10": "3Her4wCMPB8vYLCAf2LDkPQQm3j5GJwnGMwEPQNREESAxvuZoWkHUWZ4Jmia5QWCk3ip6vmu7M6YFHSk7R84MVJ8",
  "key11": "k4VTEYeM1ciCQ9LsYpuYLUMeEiV3pUKSWEHmEutuMdCSW6nkMv5yKc6XF3LKYSjFDr5CAAQoiwgj5oqK6djKYZX",
  "key12": "4cmwT7Q4bbCdfem6gZNLWrUvxA8KWe3hpX2Auupqt9HkEAedZCcLZc5bkWVP8sd4GX8XV3t9uDX6monQt4xdTLwq",
  "key13": "2AvBrvDLMvsPhuC29HpF4am5KzFhUfMyxVTYSieUeFLurnppuyZ4UFB9pa2qwRzRZuSJqicwrP5EdhwXdeExy5yZ",
  "key14": "2eNkwpxvV98kQdXmJbSwKzMHAdTW7iRTGo1PBJp43XpPhBs1X37Tf8bmhTa4JcQyVb1h9VgWcNYnfGokUdLvqKFG",
  "key15": "4BgxPbzCUXMY3daPUVtMBrGAGTSz83aGJLMJXsyv7qXDw8FbiqTKKNNveHt2gJi1vXSxZRrXAANvUfN4S7pkRVLn",
  "key16": "2b2YJrVaNNsim4KJK4iBnvuNTLQVMEDJTfTqLN5EZXyWC3u5KHPkqYqPGB77PC3iTUaeAnqcoHBUwfipfoZRSXLu",
  "key17": "4gCKDvqbY8Tixdvpr7CNCpFRYARKnXrRr8BrJZ13PxHqWUS3NBQbU1Aebz7kha68XTFkFYn1n4RS5W6WnaSe9FXz",
  "key18": "2cxcXKY3ieFjT3SosezXycBtn5Jph5qi8kjqpHbwThP8UJeQwQcXn8XD4H1r15yvQDUTysgbUo2cbQzWD5mzJgMg",
  "key19": "5xSrcv5qy5GMGAuQqVCDCAWgXcZWRCZdLA5Qq6sAKUswY3tuoprmDkXmkv8Psgb47yc521bfPcktbqpabyfax2UT",
  "key20": "5QK1kCZfwjA1m3t6V6igeYsG94jULdtG8CkcPDp21jVdnMCj6WcN6hKZCDdhxwRqhhtt2eVoZHbPg6qbKY37d5CA",
  "key21": "5Uo4yJzsNdGE8MkUhkV2FchdKBRGvF2qNjAhck3KcrVQH5msN8ibFzjSXmM5vdmzfVQ1LyBQi2ouJFYkDdN9EyXt",
  "key22": "4AiMVLrCdV4J3eicLUmM5zph6wUc8dbVvnUpEKAsABfUW2VW29qDHP6Ja7iRAAu16hEmcQfsfEhJM5dsxS6JhSfi",
  "key23": "pXwvNZbywxVEN4mDASNPoW2Pt287DBGtBBaq298FWktrR5Unc1WnfcRtc6wVhCPr8Cq1XH1Y2TkzK246uQMiuCu",
  "key24": "4UmnVQvJvGmqSwSpe5DFof4nDqs9voVEpegYkJ7PZZhW2EZJ6LoiVL8cT9qe7tSt874tSMrSUUpAJpKzSF6FUs4A",
  "key25": "v5T2cpdu71FYJ39pUxRbkkZjMSP3kfMNJ6RQ1AzBdGBeWjHT9CH8CZdN4mPiYZDzU6vydgXrkpigLm3yvHTkMtR",
  "key26": "3VEVYTrvajEBzHWHupE5QSHoH6iQv7vrt57vuVeeeLHtkgAp7BZe699Pegnq3n5y3NWDjd6EjzYr8b2BkDSV5bcx",
  "key27": "4SRss8Rt3NVhVP2q925wSiCDSZi8pWe5WV139dmARpWtCuLnaSaDeiYikLC2Z8tDF6ihxAEZnyWLpvNyBNv9XGV5",
  "key28": "49Zobiqsa4VNFGqZpTHfW5nE7uSjQ4r2u4M9HNNMHWhgSHkmgbQqnZQpzFeXHRJBL4XTrmVLZgCvQW4c4khdvsBY",
  "key29": "y84Rbky5tAcFaxMCLeVXLEB21hghvmHxFMjz84KCANeMA7xLiUNBAoCaQofHqWi4U6eCBb9T9K4H31KXzDZ1aju",
  "key30": "59LNv2GpnqJ6ZoZSuSB4JieQ1pcBBKthLyWMY52zDPo3LvKDzH4bmENJ3S9Czutz3QR7XNWugk2ewxNjw8F4hms1",
  "key31": "57ePJGJBCq5HgoGmwtD3FPCqyK1Dr4VucBHWrHb3XKZ7ZrTpUPB1gAuj7Sh89FWAiUKRRJVbPpZmyDTTWw9TJjNY",
  "key32": "Eagq3iUs4p2PhewkHDXiGRSurX6UoLnMzGGouNHHeXbWP5hW5686m3cptJ12vR6Xo5SM5bGE5N9bT9yH5Nf1w2c",
  "key33": "9udXUnAbBcZEpFTpQfMd6kLfbiz5hA5THUUFUxPuoiCMTNwzxdT4FuPDiRY1sDU1C3Fs9Pcgamj8YBBGXjYrBAP",
  "key34": "4YKC5e7q45a3BCUH41SLeuHu7XSfBkY26gEQnUDbHfX9hhz267W6FrPjZ2Hmmka3kXDCHQeNXgmBFQ5ipi8DKxQS",
  "key35": "2rw9oG24FUS2Auz5t1Bw5AjfCu5N8G7dWCF4rbcjnMJPZRdgxcMcEktUnohZZTCxyQx1vjRmNVpNVQWpW8itD9rA",
  "key36": "2e7vYqvui7tyDyvUecnFKnYWjmM71azwBdEcDtu4SwLZEoeN51YRS5WVvAPkJJfE2WqpangqdiNj12c2HcPPJJYa",
  "key37": "65pcAr6iCfbdPNaEjQVHnAVmNYfWm7gwkZz3hgwnoTUPU7VwGArUBN8S38rsnK8eao3VjosHhXJvdcDHxRtbWGdw"
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
