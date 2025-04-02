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
    "RPpCz7HK43whpTRD12NvdNQrojjsGbTvFQRB1w3DDakrypsqJE27rypTJVrDR1EueMwP2sd6ePJGEfkwk4AEyWC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43ZgszZmDmZ47bUgkait3im1yR7aT6C3BmsRiquvdEcMCzHT2ErhhVzkjYo5YHKL8cbfotgjhf8qXxjFV1U13Rtx",
  "key1": "4eejYMebTLbwdbmFUqz2GSWs43wRum2n3qBTiQ44oKehpZREjoD2RHzx9wjBXzNBz4AB6n1XVMUg52kU6cN2eJrr",
  "key2": "3JtpCJsniZAsPHs4Yswe6SfewCkJMXKb8SX65uwu4WqwRkNFsdZoBDvcPhUJp1GfBPoZDqRaMqRLuq1gQfEzUu5t",
  "key3": "63t3Posd1h5HVEjiWyQ79khxAf5BZ1bCAUy4z2VmYKBGbU3SgobHhBMeTJE6yp5huxgpema6n4x9b7QuzFDrdvAH",
  "key4": "SWUM1PZtDk3h8KprwgBLfmvbcVdt4usKVpxmdeWp6TKCr4m6Lo3DTqCvncAZb6hT31fY1gNf3T6tWRWwU3egnRZ",
  "key5": "3CxYBwudACWRdNq5Lx7Metduu8Ps3soegAWduDKxpkw7ovpZmByJzk5uQpiaQw9h4WLbE9bVoLRtvhMdSEfSJgCn",
  "key6": "4Yt6iv2SVbYk5rPbzFoLB3JHsi65THCrz5Zz7LPLf5amUcznJ4QhV5WanEFCfuXWe8UZMh2Wwr6WQE5Y437bwA3T",
  "key7": "43HNKrukgUx79riCr7XKXkFTp6zonfXsubj6GmubZPECVb3fCd7A3Mh14kxvHtz6vqwgFNVckzDLik89ZXdtnkcJ",
  "key8": "5xRjZzzToCjbdy5jL6NW4ydyws4oocNPwtF1hBREVhpP3r6Bxreg5QxB4ByLFYbuCWSPPaZ1BzsQG2y3jNFL2E5a",
  "key9": "PkfuYbkBUkbHLmPUxFBKQWxnGhMWSwqxeo7z17ihuenCkkANn9PEk2gaHvGH5ouZD1TALv9vD5idWvgqHdz3JBB",
  "key10": "2uKcSv7Mj5aifu6bNNmmqGRfrRCPBW677AKpKUSej3RFFQykyPZxsDsBZeNzQqxJU2nJdTAQYxWMvWt75zodwRDK",
  "key11": "4KuYyXYpp5YMf3fSR7XpvztTuAk4ab9h7RcUWg8UL9vvwA4v4Uztvec8Zo8BPJEhr7VY7qcFKBVyotnuvJWuWkV2",
  "key12": "3dbahBLApJd1c1dTP8y2zGsR3WTfvZX63cq3bE1vqs1dK4kEgMZ6LShmq4e5X8Y6jFqWuCwQiochwfSP9C9GKS1U",
  "key13": "MKXL3bC9WPCWnNmfzbxbZywWtivWhvC4guCv8DVaPDWYf57BZpdgndSTgTfJorXPrPSp2ocvyftX8CF6mViLTKN",
  "key14": "mzwFzU9HbLuC1xZ3UUL1wbuG1LPGGh7pvjnvNxWwDaRxk7rd2TkyvEszCmx7sday41F3StHtSLit8CqFZeVqxFw",
  "key15": "5FgW8oqZxLCWhS7JeCvSArbhR7G5n8oUbFiuTYVBAQiz9TM455GK6WNrXMavKy3bBuSGCZpfKPtuGWi9g1eYuMkA",
  "key16": "5Uh4Vuj4Nas6s49HsLeoCYQQv3RzQDKb3Ryvysj4qA8aFnRDaTiM1UZJNn1HTeonKphnxaAcRZfKhUQkyQftcgUj",
  "key17": "JKwP4DaJnv6ewPCKETJQhLkUaLLnWCjsKeJTnhKSkB8RmdVWgQkCHxpr6izrSXYU8epTwUponJdJdyAccui3PYE",
  "key18": "4o1Gn8AgQjnSou21epH1GkZEjtsuEBcYyg9ydFhiAkfivbfo19cwX2rHiaE4w3Dt2bqvvJ4Mr6nHXxAfjXaUWwmd",
  "key19": "5x8Mi8M96eTJ7rvu8rMg6xifXUDdFwbRUy6VnLAX2vc3RpTnYekRgCNmys6JjQ2yWXmeGSn2jHB6rmxeT2tDdUpf",
  "key20": "4uRL2ESsBHGm8zFZNsccwzmzUa92oaL7QDHV8CVw3de4gSbUmbJy3NtinouHtCBu71XXmfsuH6jVMkkf6mSsVFhH",
  "key21": "3XrCgTxPddyZBiyGJareRyL1UYAMKjWFuBNwecZGF6XcjaRjatRkVzZWT9Dqg8DqWV53jmuBqxsQ3ryn9YVrDrjy",
  "key22": "5ofpLUVGvRHqWejn2258CBCBgoV28D6XXa4Wcp68fsqMWsKqLtxtLnj3qrrF5eRDTn3CCWkKcjG27KZNAYYXZmvq",
  "key23": "3aM9HkfCeqDjViAmhp8Q4oAjEYe7L6AFGUfz5J9geiKwatKmyAesHfSyR392oCFCLZbQWtFfpgcWf3UK7SBLJQTf",
  "key24": "KCtHfU4NURRyKUBQuXJhFo1n2h988ZbFsekoHt4yJFf4kTkLkYvcQKei7F1KT1KavivhyhkvgywstkhfZDfsr5X",
  "key25": "3wfUwzYRU52k7s81uhRkkqKVPnR9kdWDHTg4uC5Ppj6NiuJ7JzxRjY8fUJur1S9K6bZeSfqrXs7Ur7EVDB8UVLyX",
  "key26": "2Dc6es3tgUAgFfVC1YrtghmMvNVo5rRk5t7GeVfxG6FkBp8xtExf71C8C6gz4m1zhPxw1pCb5LNAW13zAhCf5JJ4",
  "key27": "5bEvEcSqcoKUgbjF1cPMDWgahSnYYvNF9u668oMu5vg6PqASx5aUH8gqmB2PNmrobhQ5PtzEYEZ8KnTxGK7vPqvp",
  "key28": "3arrCyg7jztkVg4KvCpsKQeZuKR2Z2eQse62fSdMcitfkDkGVbpWpesMGsitGaAv2hi6EQNshEcKhgj37x6t7487",
  "key29": "5PAKKzqgyjtmDBHPZvhDozWXZSjVUckfo6kg6F8DnA4EhEqnYeiN1tfR2TxrRdDKEzRCoZMpruoNfG1A3mWd75SE",
  "key30": "5SAP2iS7GyDSMukQQtpBMxX9ALsmLShJBhAwvoL2UBsdEZ5dtvnG27hMDnhEaeYCKMNhjUtZ1uBBZWQXS7HRYqbw",
  "key31": "4PbgwSxA2RHersakuo7cRhqU6v9HtB2fMEtwGK4TDwi5ZbfJr1SoAgAGG6W63jhFdc1QDu5CaXTJSN9LVV4BofJd",
  "key32": "2T8uxH7dAE5YPuTHRFF1pcqx4Y3D33cDFxmu5KTX3wEMyQXvBxC85hUziv8YdP2an2kR3FkdenHjzowAycYvtnzY",
  "key33": "4jpnN9oRZBMoBLJRPdr2RU9o4psYmWaYjhmYWAXaXVBEFvuAEonPPHNJFxoFmqfqdCYxTVXLmThFpfkT396tsrF5",
  "key34": "Cuifkif7G6T3dFNbi3Mgz3jtnM1gCwuTX15PShogQJCzGP2GaEEnTamYo7RoEmwvxu2ieFx6T9XE64EmpRg6KeD",
  "key35": "3qMrJQ2VbZaN8Sejn9f9LB6JFQN2DTVx5XRomP3ez4sFUEk4GY4AdF2agQiSBWKT1arewoNtdDTJxYrqqQBUuNij",
  "key36": "5uy2Pq7Bab7JBrx5miVbn3tykgVoByZaYpKN3tzYhzFya8FWYMrbaifzBWCBrzqEcpBDtmTu9fbRsMb2tMywqVsd",
  "key37": "2C1hxcjvjQZFNNgJrcbqpMvwwsQ5NAtuMzzRDCWHgFiKpASvbb7dH5dmj4Snmyio3TPCNCq1Lwd2d1AVwpqQg4mJ",
  "key38": "CktQcsm8Hs4ixHFcnvcUj9GgEcDBDqd8YtUbJtHFViSY7MvYB2vr1W1NzA8A2Mz34EGzzvm1pXzp3DYY4pv2cAW",
  "key39": "3KpPYzyZpE4cUFtBwRwRCzboRuSMWquvEeJgt9bXiHEbXejsaR9Sua9JzuR46gFB7AoB5sH5aXwkEqpDypTiDaj1",
  "key40": "4wSWKyNqZXwNKTrBeXGNjM3jA9mM6sKtFMhzefDjLpx9ggzALRogicUj48R7vSunwWNhSoF6bxG1xkBxGXhVAJGY",
  "key41": "5wkDZLq7Koydvbnase2zsrM3bF5c4t3zcRJ7mjAAJ4kXryxtYqJanjZ62yjBTTVj8VnEybBjPrXmjutKeddWZNGJ",
  "key42": "om8tMiNLZwVo2ueVUiX4876DjUup6DDyJtvgnW6aPtC9r1Q9RWRutSTim1Vv53k2CsmCzd6eXtkbXJjSMVqb8gX",
  "key43": "4zu1SrNTMGv7zLSFQ2B6aqLY8A9zks2VpfAt7Xpekjw6Wsy7QhLs6kWQHgJ7riamj8CAg1F82QwLhfrQ9ZaBjdpC",
  "key44": "1fQwaEJPHQavXjjV7cE7THXEdvM9useRTNesSJx8m3Hs7Bh6BurnspWsTNEZRfHkM4H6aEdZfvviVYuESerFfP4",
  "key45": "8iQaLaenMHTgsyu8eCnhvw9hzRaRvgP43MznjWvRovd2WfDqZ7sgYJB9mjCqWxFdJxXKnd9vCb84YnPM5HNN9kZ"
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
