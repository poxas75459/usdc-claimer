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
    "586GTVBojse2PwoFWSqRAQjw134HRnDUJEeSXjsj7stN4MTfDThxxzvNhzALKP4uTrc4wAqXYKg7sMtJ6PvYDKFi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DEFmrXN4K4A6RwBK7nmgEyaioAMp4tqps7YUWU9zSPkQ6zPFAkVUhx7R2Mm8V2Shfdx5iCi5XrTMBCd2YDeVQKL",
  "key1": "45AdVX9AWjaxWBMUqwq1yD1Uyb6rAcoZVSUFugT44MSMXpoQTEy43trv7XRcWp65wsmgbvvDRoL6QoRLQ7YtmpzA",
  "key2": "4arDcsroMpN8dqxngY621Fjz44H4AUv2XhmwD5QghNDHfZMLbmckXgyBsE9QPkESULaqdRZTLT6CmL8z2ub9vR5o",
  "key3": "3HkaBF2qWpp7kUcsgJXKqoSGPZG1GfhzdYsxdJFNbpkKJRvEBk3PJHwVnHyFLjsvVpo9KEKamYLDZzGqJVLAb2Bq",
  "key4": "4v5B4qaEw4PNqb4qrKnim7qwZZrD9qGApsN5yJK7c6FPxseoCGraXT72QwsPemzQFEZDF1zRmespXt4CPSu2kaHU",
  "key5": "wrD8zTwMsFZC9b3ZvQKQ8o6KSApmXYC3JiicA1xXU526rWic3v24MeA53gUYBJitLXTP6V4htYveudkNAAikAtV",
  "key6": "5t3LXEj7J35zcy957bPfUawPyqyqeP3tpGPEiLq2Nzz8S1wRRPfQv2Ftu7o1RSBWxQjMt1nGa1L4fskNU11KXUTi",
  "key7": "xAjXFJ3JiXneiSY8Y9mAEcSS4jVYfrHZzenVQHNtqGFYxvcHazEsrVMGo9sSWxycA1DUiunYcM4TyhN2Beo1G3u",
  "key8": "ztPmPvTn6hNVhmsjK6B1pf1ZSeNJFjhG6aNcFWBkUTjgwaVgUHpooYNkqKayRDaWvRtESh8u5bChHpYqHjZQuVc",
  "key9": "4WEQ8aXFoHnyx7kxF8DwdrTjmvq8jKyThhCj7RHZJrVxCsfYqKW49puUw4ipsRjukuYau8u5cuEGYJ2LCHhQtTwq",
  "key10": "2ox33RRmtnVsbSSrtQAXMjBKuwXzAGattrb4fdSQQEbG9ntU7u2KWcwuHuLi6BDTSAVeyFMw13RdE97ANea1jC25",
  "key11": "64m77cvKFQPtkE8a6W8zqGmCdhsF1UDRSHC7NhoejERaWemX3VZ9Co8VPW8HpLnuY71rVTXWU8HizC8hnTprVncb",
  "key12": "juR5WUTKnRL6Aqak48n48eRnuvM4dxqF12iCZC3na16PUTKQtw22jCKAkeBmKksF2wKQqw6ThunYynBD2UZxdbd",
  "key13": "3pcEgoeRn7opja8j828rv3Fg1zaaDWrwsSU1oWiXpX6EpuPCVPhwxSKV6AEytEW5XPTciexcEdiopAFFiBV4WQsX",
  "key14": "jtQB44wcaQx4QzmV8JaF6RpqUFnkQqQbkMxprKA15EkZMJnQg9jntvF8gGDgu5sG1VHeGg6eDXmH8f2HAP4f6Xo",
  "key15": "4BshmKimEn14C9wHqz4PQU7cTgkCNyLGigV79Rpita3152RrhD27ijfYQQ18JAmqGNUCsmwKi49dyzoMyvH3pBu4",
  "key16": "5pPcBgqZbQiNxT9xbF2bgCVB52FwLgZV1SFN7N2WmNNrnTK9BUBXSD7Nap77P5g7C8Yx4VGjrq2WCHpCbCJsq2SK",
  "key17": "4RQq8s1oGZ7M3Fr78E8uy4wWebfoMAtWeaKuHP5P5H8Tv1Faa77geTYEYiPgjhCj64LpNrM4Vj4aeFhLereVwQ4K",
  "key18": "3qWTWCJ4ci5NepFQrGHAa9bHKDYgZkqnhzndTXhncNACnZ85ixGV1jvXrdWmz4tCGnuYgyYRsKNdPjok2PbU7hLz",
  "key19": "4nXuHmUiVu3Loh88tS4XG41e7rKD2GpYmjCzCD5UAwVLf1g9a6dsqjmC89STgqC7aihnDdfjiuzeSAgHJsiio5Wt",
  "key20": "4RPa3uZUPWW3ZLPzJy6BhzQ71jdtDmE4EEkKgpaLmHQxcDwXqyQwqBrJVZ2tVsQPu7aRtYrRzoJctnyGg4m4EAd8",
  "key21": "4sQV7AJ7odurChkLdQdBkmL6UP7kL9MA2fZE7MfiMa3DuctknakFrKUPkECjvoF2Mu9fjbh9dLfbXMpR4Ch8cohx",
  "key22": "AZVLkhPGrSVBchUbC8WrFdX59ya3dnZjyWjLY87VjebVy3QRyBHHXmtoaHWpeBgTjHG2fQGqeBtQuTPCN2huiVA",
  "key23": "tNDefE8o7M4NJ9kVrxyVPP2qmSmFsrMdq2RYbxDbNXEt4TTVChysiMKimTUJnjtUvGz1GbNqc3EKi7TpNawChqE",
  "key24": "5PP3bvJcvLGzqfduB24jJzrKxTRq3Ap3Krofu9u2MgTsF1rqXeeKPbySgdpRuXTbPgaJeYmGz7DLEe3xqHdmwpub",
  "key25": "5cpe4njLLsF2EWhid6NbAdsgQJD4kWywhgFU2hd5ytYpiKrswtt1Y6QdCAxhSbWVzBCvCeZGvQN6Y1Yrb9JRv1in",
  "key26": "9N3fBKGvRCE416gfKyXAZXBHWTnYMeHcVSgZ9HZv1D5wn7F6nJ46KMaLLxM1h5FKAcEB5pHCXFt8vy7Kzu2t2xd",
  "key27": "4E7jxtHQftG1zwGDVqFf9QiURHZ5ZfWMSJ5dhSvibCoAAXjKfhmbF3EegiiJHf33W3YA6DvPE3CkyQbCBTbJPCXL",
  "key28": "42sqLe9ZreTJp9QwokbLCUpZoHXRqCQgyZw7yVn5Ks7qWqKMviMiHUByE8ZqLUWX7ksnMFuTevD2S9PknARb2oPH",
  "key29": "5eyamu4ZLjwGqJi5T5yKBLpGsaV69YZcfxzLbTLTL61Ub1XE73Eb2BrCgTWrevkELxNjrpGa9ZhTTZaZjzCXiLPv",
  "key30": "4zYPpGGt9LoKiY6tbeAx7firiog5518nDQouArHrXAMBfRKxXnmuopCAJPn4ga2vWJMY6f7Xch1HDY7WEh7jeHGZ",
  "key31": "5YmgYuVsnkj5JiMo7hch7TVC2R2usRjcEYN9BUcDZCpMDr52iTM5gwE1eeoa7MVtkXbb7zz6zCV1pcyMqrX6XmTh",
  "key32": "2dPXGUmKaiWVFNHD9SW3kmReZb7NdVz3NqFZxCUWapgGhNKs7iVPt4yUiqXPSxf4QU4Lg7DPwtkDYq6JotnTLBTd",
  "key33": "25ApHDhbiaGXABbbfFooHFDNJ2JxfSzqFBnCjp5ofLgskT6VejRGF6HNfdBwk1g4f88H7N82TdRK8MPAovb8tmoZ"
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
