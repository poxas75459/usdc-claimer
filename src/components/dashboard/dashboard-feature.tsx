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
    "53tgz1tfLjTeWswvcpYs54YSMwN9FTjvt8ma5kgMiWhKqEtC1R3xoNtYv2cUY1nywq8WGc1FTnpedueg3xfcEbQ4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52jnuKtbcKHaDu6CZLJir6UBVwmjbotq836XqQcvZcWbAHhEQj6KX58xYMZ8Xc6eWAgKmfcDdyk2VcpJr7ZvRJs",
  "key1": "x8CRpsz7wf1WuZD79gdbSTnbiSfBBKvwbNa5rCp2nTC3h3PbvikXeLi1asaZMiAmiWzdCbM6Syt35bewgSZCtPy",
  "key2": "3tB3cQkq9453sifP8x8Wx28BFiuUZcTspw7J5pYME5cTZBKbgUNtpk3jv8jJgd513xYGyBy9QTw7YVriwbNuys1U",
  "key3": "5xvxovH3U3L2Hz7iScRWCuAryFsBTjpKdKJPfyhQnrvnGxEc8GYFuYvGbJWSUxG668iGc7k2HrzKUUYei2rikePb",
  "key4": "4MsDXZ5hMxtHp5nRLZwnxrRRAgKjBLpuSy3reFzCMzssX9vm8LYJopzfrVungmnpPDS2GsT1gJJXdcZ1SstjzSWc",
  "key5": "5j9BJLFn4AaiusV6sq5TmQVegy8CBxN4BkppN5bcZiU9Tb74zNYEEs1B4Z7sLtb1FgBSEax1VmtsDmYyjZvm5txW",
  "key6": "2BzvZzNchowmdmG2WyGN9oPXBoemWFmqrsNz8GKNpT5yYoX9kSd51xcTqLGWkjt4qssEZud3VzBMZ8KjGuVDHyGE",
  "key7": "2PuoYR2odSEQmwghjSiw9d4weCmBzFj2tRVh9DCEg8UgqCVeaDYQcRaY9kRa7Jk5AUV3Rj3S6akYgRivrCMhYjj6",
  "key8": "54CbT6naEFZu5X5RKGisZ5VoLxLMLzdSbjGuSGX4A5WTthF8Wj76YERuYeYfwy1Pvg3wWh3AF4951HKqgPgCPCyF",
  "key9": "48QC5NUB9hsB31Q2VPHAz1RQHhWqsZjFoY5zMW24sGJfKZPd3ysXHPQhcekKX9M8J87s8x3dzUVcWTBwG4G3Soja",
  "key10": "3ds1QbsZKyN7TfEkZeo4pSh6PAVfMnKBJRB9ffH7r9beME4AX4n1cYpsXqydSoSDrpqNvhwQruYBNi4ZpmJNkwss",
  "key11": "3cQ4ke49PZhMgaMnrFJM1RP8Zu8rYXUYYnAuRjgeS5mnp9SvwK7A8uGXzEyWqaXBfWTzZutSwRmYUjhUeMrbJD8x",
  "key12": "3BKKmeCCJ9ToNJ5S915q7kccZECWLKgtcB8vE7HhDpjEd9Nu9dYhtd2Fv1EtaVmRf8Lv9a8cw8PeJKUogtUXmk3M",
  "key13": "48DrVWKs2GUxYdDXWb6uxKGTdpAt5hpzJyCXdtakQcuNMfboaw9krDEDYc6TSc1zWobHt19z9TgXemmNtCSACAn2",
  "key14": "3xeUyCGHVCHDVKvsYPQeL1wsf9ZiSqGcn9vj6JXTN2HVFqraCPxpw3TmTCgY8ab1pedUSqnFicuoe5ZyEqYthPjQ",
  "key15": "4GkDbM3u4F5rrZEJPUevNNZbGRjiAFxqFJbtuX14iso3MCd8XuJGz3aUqftzLT4uF2fcwr2mpCeQbatwkJGsYGyM",
  "key16": "3iWrxoJFtnQptDvJcZzjWsp5Fm4B9aB5p8XkJUWA3mD5J5uCnSnbjbuexJCufMNin2GMzxR9qWxaxEVVHsGdAkwv",
  "key17": "4gGRLXXEwkQ7uRzTmgDur5VwE36ZZML4KbnbaqHHSUDC7jQWDjTgSExfVcvNMTKGW384MegLV7uxwDuPuQrdqAj5",
  "key18": "2TTuxoS5wN8NWa8nfFu16GmRu8FyP6o5GfTF1d9nUav5LrB9M5SDJM8qxcYayEnZizsJeARNis84u7z5pkgGcXr1",
  "key19": "5PEfCwQiqFs943QCn5ATPSDZNh1gJYnqRQC37MxnM3Ns1RiTEy5s7Mqe82xPab2tD1aGCozZu7GiCWgBbgVxTgjb",
  "key20": "2grWh96zdHyFZWsTWfADF1WKAFWZCDtCm8LS6q2PBkrsEM3mi9ihCzQr4p56KuJym6k4vLvhWCnPatbrcCJGUp1F",
  "key21": "2nqY16rs3rTCbDzpGDJ4JUajAcHiNM8SXP8UyPVe3QNEtjJqrV955w7RXrtUApUJWWTdPPezE8DHLdjWJgUd2fTM",
  "key22": "5fPJCA9wUQWjfwcyA5iqdFrxjvVhgQL3FuE4wcg7S8RvyaRHMrnjcPJN81mNpbHAs86diMVM7p3BBNwvggMgdauQ",
  "key23": "2gY8cBJTXq8EZrL4NiQy2LnqJSWdLBhYTY2BDkcjkpuDak47i5MswsXwScLn6BgFbxPiikM6mEpEUDBBo6YgGYYP",
  "key24": "5XcMLwdYVEvf4kD1RfbQNZSefptwYpDvsPkbo3XojJaxtGqHZ8MnWP3VrhtGghRSKb1CsYSn7Z1Vx1QS77gjFSv5",
  "key25": "3jE2Y5F3kMUwULkbvNhXa2zGXESbUt6AoNhQtbKCbe49phc8rfLFG3BN1dF7Rp7kSv3Hp4JPSJ2iTnos6JRkGr3w",
  "key26": "5nFo6PqDhqJen3s9Ci1h2gZS6WDwHVYAAWyQcRgTDL8zoVJeAmfwugWgRgBV1mE7H6XYTwgKZVBPeBT45qDWRnnU",
  "key27": "5eZTFJqChNRes2RSavELsBtRsbKAbE4mCHk8Jc1vsCNC3FGNJVxknkEJFrkoNbBibNJfgtkgemzQWf7QYHUVS1kJ",
  "key28": "4RU4XFpn4Jg4ZiBDWzeDFV55gv7L6CDo3iLtbzFHNxthCc1KTskntE9WVHsAtPQgUu27C6TZSodr8vd7iDXSQ7Mb",
  "key29": "2fv2FeVpjox3kyvuD6gNEvqNKnTixVV7XXGFnThna71Enpeza984zDUEuhRKujQEauUYmrGPquMsKVGZ4evfNNuc",
  "key30": "4Qrkqv4axbG6bcCf56BYcV5pWKDn2ozRzzvHtLA7tbCbFWj65568ipxweanf1xij1TepHqT29EpaqZWU6jUPSQhA",
  "key31": "2iGrxDVPBNaUxV4PgZ8JHgVo6Zv7ZvhHJTKVUBCpMEyxAeuV6UNi4Tekq54aDaCfA5KDcrACeVhFN8cqcWTnwkjG",
  "key32": "3uoPsa3yofPS5cUyhMNyiqKuh7dCcauUJiNdBzHz6FJTXvbPw1E43vxqxSE7dp8oc8A9xkUQFqtKPNXufdGdfoHU"
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
