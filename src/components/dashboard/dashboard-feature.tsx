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
    "325EBhFC7pR75nYDuuVdp5R2xEt6QrGMvCxd1uCgweXvpHuqZg5YtWxxpYyr1iQpFPvQCp8t883TVdPH95CQGd3H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ABNu3ybEGf3y481ThmNBZusXuWFty9CWzXd8aEhZDZD1GjudA7gjgRLV8hm1mnSh6wRvpuXvYsUWv7gQwr4LTv2",
  "key1": "2t6j3SiQJRM6PUhxwcHvafrXGjr41a8H5AqFAK3iKhF5wK6GXGdBsrRn24S7RCU94NMr4i1LMv2Mx8rmyvYiUc1K",
  "key2": "5iyREszMo8ZWM6dc5Jt8WCTKqUr2WHH2oJATwPbPCqYqPNjnv4SaDb56yKkQsNneLQruVZHtzxpfKdE7bzprooeo",
  "key3": "299KJDHjSm5tEspqdDXBttAEdKJN7sRCACtLx1ePFCy163jF2dD7et4VttjznECFyzCkd6dnWKGUNJ4JLm25cWRe",
  "key4": "875HtBA3SDaK8rEVSE1MZDF1ZkkTLVgm4fZCfwfNxW9TT5yq6JWtka4Dhv9rkPSVwJYaTu3gKZmCeEPRv5QGmXz",
  "key5": "5JDumUxUsTjg2pZQ1iTMWGihTEajod5V5rfhHqyYXYzSakjG75KzNHQdwD9AV7qBRsNYZkHLznW9V8KiRN4nCCu8",
  "key6": "2a3f9bTtg8dJdH2UVTZMv4Rqq9azkmfskg6M7G2GHNKmdEQH4xdQKTcKjRUDS4L8bvafaL3aX96hrxPrCYs1VgMk",
  "key7": "2fz5Rpb9CSSrPq5cW2FKRSPWzQgicB2APKQWEFtjmPg4Y5uKd9xPvugbDqbw9ueDgvAz7aYUowNr4xMYzjmVLAqB",
  "key8": "31Xcq1Q7LV1DbPkpv4y8vMUUaDVsUZsnkFzrHT6fvf9zxkDfxzNbagAKcY1wvMfjtTQd7tGNWPh33eitv6sdswq1",
  "key9": "3K7u183DJf5wUZ34qHtqgwJTDHBE6io5WuWySUNhv54PrL3XB3tisZwUkrVtBJtuVbZwFdD2LJnZAJPuxpmdmsTk",
  "key10": "4HtofZhtSPKXpoKoVPzEFA7mQTuZjQ9L7WZCeGJa7x9qpx4iYTDP13fYvGod1Eb1DxuPXb9cx5roheiUuN8wy6UB",
  "key11": "3CiJg8UA6rh4jtrKw8ZfGm5EwWoAaZqig17TBQYEHRhBkACSxAoQdTEocTnVmcaJrdnioLpXBzCTsoFE33rp4LU1",
  "key12": "3PbmKBBEUGiUG4Gkvt3zh8V4x63NX8CxBSmKdhrUV4FLg1eLRWRhw5GQ78TL4vAVmTcuen8nLXLYRStW9rN5wDXk",
  "key13": "wAxUJFS6s5yNZS99N5zF3SqWYyDf1VE4PRbbNHceXFaDvH36QeN22CKRu8uFrjq85WgFmbVrEGHdfHfP4yKuBVz",
  "key14": "4dEBuzFmbiUHjjPnKPwDfJAgZPRUCGZLaCRC6R3YfVq2rMtkfMhMtpdEtpC1Pw6GMZSwYnCoJizRB123cJG25wrP",
  "key15": "2FHvriZ9r6qW7krTmhNQrr5FGTSoMyttd2gPE8JNwiL4Wic7bBBf7Nxoxd94pwtAu3w1ApKvHBt2YRBD5peFiSyZ",
  "key16": "3TKBLwCf7RvTMtCSndFVip6vDBZaqXM72ZHuEhqEL3ru3HMeHsz4swdzwpkWswgoVU25kVcG46hFeGtgDhZXNh4Y",
  "key17": "m9ANt9w6Dd6mG9VSVkqXWoNSWChrvXy1cfMhhpHQm2J4m17mKMXbuqPFvH2y6pxnBYhwbrA7PoXihizXuEApUJP",
  "key18": "2hFFd3McpTW1CAPJJaesQ2V3n3QpNY2kk1xpHpkwJ4v5r9nsKoEyUnt4f1NTEtPu44oLHxCz4131scnaybqtb5ii",
  "key19": "5a53SZ8mvG4XQs5y8SGYa9Rdg8AXmwUG1m3ZVSyNpC2oZ1Un2XfxdhUg4f2D5PKAQCz9Bk4TxyuiGDfRaDDpaBcR",
  "key20": "2xryPmqgzYYcm9no227KeT7KuBT9s5oSxSEqgKv8mP6vQ2GgbvbAw96iDmmXF4MukqDAWwNp6TVZ67cgCVhscpRP",
  "key21": "4P5pcfrL6B3aN8a47DBK5TJ1vWY1JBorrc2zcsA1bKKHtjHF1Kfd2aDRbKwwsdahVox4Lhjph9tX5XJ21UmDw34W",
  "key22": "Je3bkWx6e4msHgS1nD7JoeUQ4nkaVjpSR5RMRx5Z9ufE5LXh7fFam3AvQBJrWfwS9xZjpPPH6mdwEwqz49txAyF",
  "key23": "3ybrXBbYc8egAwLu62sX8kTRHHx4ENGVmqdFLCcNVL3zRtQrSULWStrioSKeLcaXSW99hVFxZVyUPhVUVL4m36WD",
  "key24": "4n5t1vMuctjPjApp1XzgCpiNKeZwokyDoZBcXKFe7sMNeTXKJ6zDafgrxRXx7aXfthrPA9pSpLVmtJ9GrStqDBjG",
  "key25": "2n5keSTbdEBKa2565UcJSCrBhK5J3i2rXPmJRRtKz2kBtY3LiTMVx7BM4Dd9KENDGfRKde2oUhvV75xBgH1MvhBv",
  "key26": "5CK8xpVBATMhUpfuXBhDuVyxgd2jvYkc3dVhQUFEmVv5CHyYyHyHh6gqXonMjgJu3SkkoZARaaWbVapb5gtCfiqR",
  "key27": "2Gyw2Wu9ZoayUGDvm2QMXXFhBb89U184jnuX9CHRw3LgE5KdvKLs8uqwh1JdRQhBytv7T3dP3awLufGNsvd2z5x1",
  "key28": "4zUYUs8zWwTfqMCAafdjJt3m3Fi2NWXcNvA4U6GaGTv2HFMQyBCgdbAnVBSoAtzfrKgvvEMGcsCmyLsqgZzECbAi",
  "key29": "5mjrAHYUHQe9W3KjyNxdtJLG8mtTwL3HqhKkBwz2nTATDFakBvCWVAfkTXLouQMfA3zfNPwCKXYbaDuPTQ5dEhYP",
  "key30": "3XDHwMQcxG4vHMxzcV1zuH8XzKKorpc2VDdhZ2K2RDV37dzotpAp7ycNC6uHfXmBpEF7qbJHtcXD21rtzsKTBdYk",
  "key31": "3kjmKm6B147JrThmfVRfCJjW1M7xYZrPi79g7bU1VCEoNoYu9meA662iDTg844PXACuzbdNyQoRa8HGSHJ7f1yBr",
  "key32": "zvDd7PeRzi8TPuy3ms6KumqgSvoZiyy8xbquvZekEaWgfE8v3U2nQbS5bWpqZY1fDiJJHwR3v31tweqYNqaGuaG",
  "key33": "5r7ekzPTu2REoVw7JEeDPwFGb9GbviZbNAqyChHPrjt2CxsC2GWxDqLNXdgP4CsRLveCBzEgb5p6fm7ZNnu2tnbf",
  "key34": "BmsiGsaYRkM5RxEYokqDvuFAiv1N2tfLZ1K9YF4JN8Psw4H1yPB84bDW7JZKGMCn8UFP1m2rWanyyhzyG5CheJf",
  "key35": "3CrDCNYVg5Q84q5PtJEGzLiSi7CmTvoVHYC2XbNW4uGfVvCk4rMkR9F6Pfu9FreVCbAAkD5iuLZeL1XhmjDtLJr1",
  "key36": "2BCr2mXaCdX9j8afzDP8KQLk3gF7cniAo5pNipyTbzBYpbpgWLabUYJHmAEkmX7Zp4xxsiD8MigepYUnfztAX9DW",
  "key37": "MGSWpj98S4AMwrtaQrHn5qErJT6zfPiaoiQvLcucu4b7t5p8R3oiNCGrLHQLxz9cP1mQ4Pq8tr1zEKLEqPe2e6v",
  "key38": "3NSq6my9XGjxb25BkjTps48LowdTo1K8DsXQWv2ocAadx8YDaNTun94b7u8FcmdgKMvGz5XimFSvSxK2957b7uG",
  "key39": "2NreNWMFp9vsP34TiSs3YikGUqoCVQ5NeHCYysc6UpfsHhsVFmTCwTuCFJAyumsbn9qN3qEbBFoXJ5J1Gr19pRrc",
  "key40": "DuDoQU7QDEffWy53dNVSJWNzojTio1rMGYM19fPGjkNvXDtYs5W2ENMWctiV34mYHi3sDLSL84cyNeVkUCgzJBV",
  "key41": "sfRg3H4RcPT6ifw7CC5SBLY4FTEgpH3KkEBdACp73Te2QsVHNdM32GZ7ELiz1EcW9sXP5W7vsvkSA7TETxS95uy",
  "key42": "3Y6NEC1ZXq25jnFF6yFWDQfhpz3JJx5fzdhhkSEzmeB3PRDZXkVkmYu3FTGhPF2yXGsMLDNXMBmggghwiYP2yS78",
  "key43": "5vgeJff75gQfWkceRyU6nZzEpG33mHw3JVYaBKBcMPWeCCFMAMHWekmyLVSahwmnYs5gowt7Bt4ZERjV3tVJrH66"
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
