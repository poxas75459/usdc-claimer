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
    "2LGhXgeMPqDMCPB8mv4johTYQoHKUL73Kr7mrDjP5kXdAcxbiKQzjQcDhyajoLRSwuRMEKLf2TEaD3jwFJLtHeqX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ayDnyRPkUsFJUVuG74jFQtUcAT4mx8oPYoBMwKgkxAuGBpXVi3oPa2Qkuz472EEpoMK3iWRngM3DoFv8Pc7c4oE",
  "key1": "3LDHFWzYiiXw4kZqERBTT9M2cLQw2rmj8yrNPiKeUAYJfVzi9an2beoAL7cgjvF26ZXZMBzz3Sf8JKjaCRFQ34WA",
  "key2": "2Nk5ekZu4uymny4jfwZD6hABpXRnxAb3BvLZLePdgpcTjeebXTJ7AP1hEYdw9Fnffj2cCctude6fH76pnXmPm8iD",
  "key3": "2Rsh9ynizkeb7YZNejbTKWiRJiBScZetAXxteT6LRcxzNYAf5iw1M2pCdTvrNYkK4edfuAUog9agsbauT2z6cMBH",
  "key4": "5gnoYbacVHS87sCX8tysCy16MjP7GEun1A1bLVGiyTpvDEHNbcUjF5poPkwGUYFmv8ELoJC1DgocD9yaHbPqCRru",
  "key5": "2mvuUEWkA8xDA7AbZEWWBfqbFSfinHCK1BteqiAHKA6uCwfTD59AwqjThMfnGGaLFqtzxijjGSvKAKMGega7Zotf",
  "key6": "4uc5qv8Ei83m1TSYXaGP8zpzenhN8AChnZwCARm47jFcLP5GBVTSHe7JishqmSZRqh2NAqbULAvM3fbjnqdaquFb",
  "key7": "2bP9Ye3KjyiMQ6gpwPQn7NPLvbsq75vhCz9P857tcfHKVTcMTydXohGDmKcF5JmMsSDHn1f2BzzUvY949SC91tqn",
  "key8": "92nS5nSgj6uUs2EatFX9CGgWYJSidL5UX92tqjP8pHa1zSkyBALxS43VpF4SdDi5iKRquZy3BG3gGcNtXJL7DbU",
  "key9": "3HN5UVjLH71HBc7wjePofGsfSjeWcbx8dZgLE9ibt2XDsvCkA7X3dPerdLLjLD1HAxWGCDH8Q4XgQRNJ2RF3PuFv",
  "key10": "4YGD4vaFQ3L8BDvfpDtTyWd9hQ8hxZEBmvQhvmUoQ898ys1mZZm5hD3v9JTLtARapt6GHp2TtYRj8CHeAQgSPVmB",
  "key11": "5qM74wjcf3ZPU8dCBMUrgxjk8pw7PpeJAnjjV3caSCeN7Ga31o6TZJr156gYevgaL9dq8hV2YehkRkpxmjxkFc5N",
  "key12": "4YevnWYCHMqnyjr2Yb7Nb9ZeByFaBtZBwSrxiv59NUaXAMiGkMuHEmeenA1K3TsDJ9gx3H6Se9MTtngXoYu3dPbr",
  "key13": "2nNHNwvmzmg6vdXmiawrwmRNqyaDvwPxoaMcvXhM8yuGBZujVeY3VHB1xpu8KAYk5sJi6QxgnK6Q4U1b9cSNdfDp",
  "key14": "3dJXcpf2DKBpfdctAz4c5HptzKBuRBQKmyhnju53997WyTadK57KZxGLsAEdnp7Pb9pgNofJ3ndreR6G2f7xN9N5",
  "key15": "gTc9hprNu1U9ccStccLXzKfNMkw8do5fibJFXLzuQbe7uBZzskhoZofBPLuqeYUUzn6BAmXu2wFbok8JRkCizcN",
  "key16": "MtukKWuHxE83MnTJWXZRPUgXUUjCyQZXFBemm4xGAV6mBDSm529KzGtyQTisjExgjFGkF3w56Urbi1KWzogprCr",
  "key17": "2kkuPNcryh8aShjfKxNLb4K7NDhJ67Qdf6v3gwrVDTx4B1DTHC87BXS8N34rxdWMxR5hkKXFEbp8wJvtzgeTsEpZ",
  "key18": "83rNzy77Qv5RtECyDusZVdhQWBXtQMX3cq4k5QS1DnHt3tRrFhwPX5T4yoTU7vCav54H9dx5w45Z4ieqTjv8emH",
  "key19": "2x4jXdHNaEajcGgHaWTMFKYLdZYmH2MNSk8eheCSfBpfhGU9sFDrGSiYPG91k1RZpTBLtvgSKBc8xkGxsGm8VTJn",
  "key20": "5NwrdRSg9T9KfKjaBftu1Y5eKs62umXYVR4xXiz1LoegRYyDynYneA57Xm59JYFbhjaBuet6V8K3tvs8s3tDt8Xr",
  "key21": "3vSdQ4bf2ihwXWQKf3uBocx7G1YyZwgPshJBhRnopkozU4tLdudX6ijAQuZPKe7BCtdiCPJa4xqArNiDF3suKxqb",
  "key22": "3Hn1JZyoXf8oxrmyixYyFf3RKviVZUk1kjvzjD9bUA1xGrEjcx5339sfGjW8y11MYfqWqNsfNAg9oDwbPx8veWzD",
  "key23": "5t4TFYLVJqTEsCQVjLjPF12ykUEEKw5m5sbiASc24aq5SXom4B5tzBgm9rTduwdaeQAb2tyhikGTHwDfq5FjUHUU",
  "key24": "ZH3XzSgG4mMyaJ94eHJFS97uC7c9gkbZ9PBDgbwdAj3sQd5fAcrmJ6AiYxucEpG8YXz5dohHwUkLu3u9fDJiKyZ",
  "key25": "334pFT3LrbPXZ1ZHoae1AeGXZkQLm28jzoP9KDg2uUp1gktDNkCn7kX85VygdZ5nJnAeqfmtpy3EJt2GTZo1d41r",
  "key26": "3qjvuWxmuR5VsveaJPUK2H3GMb4PKpAE5XL4KhDYTVNSJS2uLDPeoJ5scReZKUh7jfC4bgkmy5TF3EbZZ2ZLSML1",
  "key27": "5u9eSP9xYzU22wUMd7BvNeANBg3fccQTA3WTLFSrrUxpLCiTRw43Sju9LNHqVZWysJAikPnyTTqxUzqfciN1a1LG",
  "key28": "5ZvifZtSf3FAGZSjR6VKoTTamkD1EhfCU56Rpk7Zpp9xfFjrpCwqMavxfAxYDC1AxexbjbGHZT9Gx4qFd269r5Gc",
  "key29": "7sRCDRkMobhZ3ZWXmJZ7D8vcGwNaRr3JzmFZnYDXMj7yfiBSUCzmWrPtiyDRNS74yNNhDyQp5bTm9rmiQ7oCHmS",
  "key30": "4nAjAVmUvEQcNRQtwqi6f3HWuD6WRZeKHXztURmYzRiJ65CDwEWfq1y7YriRcq2samXgJDwZU2Cz9b4dgVihyy7e"
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
