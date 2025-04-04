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
    "5Bji24mqEPkBX5fzUMjEiHCsgcYcXX8FfbjSUN71MDBsDaeG6V4NhsG8RiN3wGvrrivW2Dp5GZQT8KKkQUnwm8E8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AKddL8PZ1RqVa6CSeeuJB4hFHGWMky8gtaBCo13h8h7NvDPKztPhPKhYEPriSeiCvPZGd4GBre9L5Nsmzg4oFXY",
  "key1": "5KYVcNW1tvuCMoQXzdSzrL25MxBFmfEyAP4AvyRBafVmdJbcVcCuaymXYYbTLLQu4P1uRuggRHe6wbD2fJEcXc4F",
  "key2": "2RNjYRL1rbrdpMZWcVoRSZACRiYhcYmmocjvHUsSMs3GPQxFTdzKMC4JY4cJ4Pa7MEX3fidBcZKHmCDweyx2M3h7",
  "key3": "5KGtdtCECjQHxd82QWHJu2yAgB4GJaXHKDoY8dqkYgvkKa721DsMAbtSkuQZK8FP1JyiahvybJWZKTcXMbay6tXG",
  "key4": "3KeTQw13kg1WfyKwhkpGXXj8oUKW1Z3AdaASbRYyaoWAkgajkwRQzbSd9dBEEW4tuH23ZCP3GueaLB3nhDfR3j6S",
  "key5": "2nWDqtbMvKqXarDAYwauHzHVT1nEF58N4Udr2gCebRPAhtSyEgHSs3nx1sFzHE4qSAnAr8XpxFDfNi93oNdvuMaD",
  "key6": "3VdnnW8wd3R4dtRTAd6c5iF6YUKYx9HG4WPb9Yrye2W8gz9hv8FyHvTZfS4v4G3ubQtnnsStqri5vL2JAnwLNQam",
  "key7": "7FgktYdiNaqwrXecdSTUBSWRR62uHsj1BYAcMCJM74nf1QshozQX5hY5caX1gZMjsKNsZPGojeNUFjB6U9BEacT",
  "key8": "JQrzXJXXmSBfeoXUw3HR28ZfsyQEiwk3kYiyFpEPV6XmS6RtauUuzD78QeaZ3BDH78rbYmnPMMW5MzAmhe99ZKM",
  "key9": "3DSpjdjai63gWj15FwBejCngxatsHNfRLkX7JXJoaTxpVBmLPuqXKuNJFgA65aVhhBMQcPHwRWAUwYE89GoHNz6v",
  "key10": "49E9G2szMRZBeP3NZ4R13vRAdgEoE3EXzE68bumPHVtE5CVXdBUW8weaVDDuRZfwMKZ74UY1mLBny6Uu55r1Svem",
  "key11": "4HAeTGvC3M12oYWzdgGKoDg9GPgcZv6n5LpHVpmAC7Q7ahb75ihKNDCHcZSepmye268m4NKAbaMwaqJ2ec7WBiX5",
  "key12": "mZkRYfbjGKahJGLZmLdWPoXR77fjkvzNQ6UDXzVp87tf98vWWjzJC9qNw6jSHS5PM8i2uGCsJFUBaNq21iG96u7",
  "key13": "67mXMDWfcRWao4a3S58pZMXBDvEk2JSzyEaVoFX9L434K1zdKbvVpYGZ1hDUCrWWKqT5wdBAqdWCs45MuZxauEZ3",
  "key14": "2uvqwYaY7mqe6gckMuQkLXiwzWa8C7nFBxUmyfF6fwygLzHwSfwshZDPQBJjDATJFy3p3RNGvkrfmVYmoe45s2vY",
  "key15": "3rw7GW4FsmwxnBccNe6SsaQRBjsfZDnpx8EqJtU8sBXMNxkwyBsopjRdH5aDpQpMwWVxH8JksN8xnSuoG5XbufmS",
  "key16": "2hjbKXMkEGGWfUkiA1yoffKNfNMPvJPDDB3xn5dWnK9u5korVwL4h8r5mskbuUh82zskHjq38z7Lozsfo4H9xuap",
  "key17": "64ST7RUWikdnbaobVXSsfrtf7zQE6Pi6ZCTyoGB4fZqAS2sMVxy6Aq413DWGD14Rek7re5MAuMZoLuSvL9HBRtky",
  "key18": "2FeHPiN8XdTaP7u3zUqrFskNpUwXEfdPiP9fFaTN2khAhG1wvTLadUisF7ZiNm6HwkxZYTzXGtoa3PB8hWbxJKzu",
  "key19": "2eGan7omdQvUsRZ5iFPHMFD34L4N55eq7uGuwAqxnabMBDPgHNuNTy4mDA5KK58K9uhNQBptR7UeCupyzQxghqpW",
  "key20": "5YfGDsJTxxq5T1vo5zPxD3uG7TeY8nLaW6U6fD5DJzw2Dj4JB3rLXkUJ8u9mALyMjRaVsR5fKxHRa5PupceWxr35",
  "key21": "5AZMuGh3Par1Q7ZRHBpEwtvWiaRVPNVSLVrF5ukmCjXG4qABMNsd7kuRhRjxRUtmVNCzfZaNf7xpph6Z45xwYHDB",
  "key22": "2G3yQdmB7qQj3huHMMJUQJu5UZPxfrFn5UGj1s8xnnuZ6bWjaueCstGH6HwFSUYiZsBNUD92eVHTN2LFSnKJZH7W",
  "key23": "4Ke6KDjP6Q1HncoXXDfDAF7eT2tp5x4vtyw4pa9UzGXu6nEdfyNfcxKFrUVqsdhE3svuMEuB13JjRwxMFRrUPKeP",
  "key24": "4qzdNx3fiRfZDYyG7xnPkv1PCp5aLP9e48DWH2H85JT9NYBQTQRhqKVhGkg5UZptYcJtamHRFb8ktTGQtS5xAqZV",
  "key25": "3u8JiRS6WzD7jxGKkLY2aLS3k7HP4EP5EyN2q8V61AhxWaFF8i3eDyJweGDRkrbFUVweLARLMSE6uE1YavYR56Rg",
  "key26": "rPZaTixP94iB7G34ZPQiY3Y61Pks9R5Hkj4XkpYsBY34bDGyGVMeGnQYGvVnAVgVFck5AyaYqvCrpaeUT1zZTA3",
  "key27": "3dprkA6L5LFR4bPiJtupawVERc2b2deNfJ7kVXXSJyNsDWdnuVjba2gXUZftPVYDgRmuUt8wiQjV2qByNqhgGqnx",
  "key28": "5fqoYZNVH5VadxPK2TLcA5HmxtzaWGvYjGP9izdvYTyLuPvifKsj7mxZYCYNSvi1ncAMm9XgtQny2QXGwKe9U2fB",
  "key29": "2X42HHJfCNfDshmwwW8LdkAWaGwsffthv6ad1vM3PMwynU2ycTiTpQiKpVnZAb4yqr37UXpJ76WwHeYMmutugJ4r",
  "key30": "2VMqEJg5AvEMsFq4FxJxZGi6CAuWo6RFtYmmaqYWgnsjJbYbqdP9tXKMJknvGYP73sEK939R6Gco7HqSwWqWGwqZ",
  "key31": "4ptPbJ1bZNfabNeC4oLnrNVQ86sr2u8doJPGMu951WYaCNchcFQHJzRtYfARPXS6jAg5c5n2NexBTrTw2yRvk5Jw",
  "key32": "5i7nkebCKSRzRd4sWC5mNSJeZWpxKK2rRkAD1WLB7zTSARAwnfbvNTxsxvwLqvE5dswCzEp3Pkg2qZBQ939qXwzr",
  "key33": "3YTGwQt1BPjmY1PJv2YD4w2KmDWwQjJbmnpa2RQbKWrEpi9QEEbv5VwjZwmNibLmdFJWSMedybjtKSW6YPiGPozW"
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
