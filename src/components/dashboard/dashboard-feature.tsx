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
    "3Y6uBuZ3SxcUtbRjafxzAeE6GpujvPxqZkvveyuKPvXHy5QykDhwes8bVJmirLvkXunPW9TDryQK6UmRq9MysG7a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YhaTqr3eEbKj479QcJy2kmoTKFWTg5WiUfJccEGpuDzGpDikbtxoJiEq2u6T6U64KhW1ZjRQcZ1sRo1H78tDMX1",
  "key1": "GSnD46e6Fhbg5xAg8T31EDjp5ZpEXLMUS29DxE5S1h3ndAsFuwBcwh4AiHijmKaeAtP16XvQwraH2JxjjfdFuBD",
  "key2": "3hBr9NB8uiCagHr2QqMWehpPhXKGDGmePdmegBKKC9wMWzohiRynTjNrjkwMhWkPdFkfM2rkv6TGwvz8ZxF5L9yj",
  "key3": "32McU77Q8qTVeJuJ5685cFxFonAZ4faCEAN9jpvZXchXQh8v9M4KRzViDkj9PN1a38Gre1zoSRiV2Lsn5vR1JucH",
  "key4": "4o8F6QN56xDvRjuF5spntmX6BJxW19Sp7WPDrAbZsxVSnkeAtKb2acmoyzn6NN5qEgwrrJRf5sofDpDaepZxs8ca",
  "key5": "KGwSmN4P97EqZyct5LMxVdnLtyeAHsExKc7CWH2gz868xdZGaQ6SkiBhtDQVj2pkxCkqVsmwB5SxGCQNeqZD1Hc",
  "key6": "3gn98Ui4rxc3K7dVf6jwQVxCZv2dnnJyt3A5sWBviHe8dMUrCii9G7zWNMc5SqL9M3DWNgCoNaDLUuX2VPvLSLkr",
  "key7": "8CnbYKk8RBqTpiFe6oVXJnkTZNDN7NeC7dzqrLNrDF6AgyGtJRrcVwKQQVRXrn7HNRdZ49XVsbGxrpsT9EkMNMi",
  "key8": "FJCD5US9CHE2fmWr2H2gysBZtwVg5XXjrcgGUC1puVYq9cbpjU8Ha4kNheARPv2VbCVy2G6UqwY6GsyzDpmBFvD",
  "key9": "3mTwE8Wnn6bS4bkmDRpHhNcuXBbbd8De83THzTAncufj2z4tUm1hbJGJPmPwHsk4ZsMG9mupCjjYXibR1TaSWmr5",
  "key10": "36Z4e4KcDcBgdLCNsmRNgh9wQYjJrn2GXUH5seZJMs816JdpaEDXiwVJLB7ejGkAnUKyTh32NiKFz4ugQ8y5QbWm",
  "key11": "56aD51BnZ2bQD1z55KoeeC4MyLZiGBKD5to6eCwoXAAQ43jaf3PC2b7Z13cBgoFTSJVjCrvrzggcTTEUj5wUx7N4",
  "key12": "q2rpSTwQJ44jrTrEozTFVZVGYYPbKczuRu6ii4Mebq3pkv2GFmj3m68negvFzTYo7pUXknYe3AahPvrgpKmRGio",
  "key13": "juFZfN3nD3ms7Pd3a94TibuMn662RCWMwUdg2yrEJSHpEsuWVqgHZ2c98kof66oFNzopohF1qLcuEGDxqTEpQCd",
  "key14": "319EEbjouiUbzRJTsFgjoRF7srwoa188oQGdSZN8WzcZs1YQpky6aSakSjDzyd9MHD2bXfdPBV1pnhkGB5QQNGjB",
  "key15": "5b79U4KogCWiYZ3QW4FziZ1zFcmMs76WxusL7AS5KEEk52L2BgguPs6s8yA41iSPV4d7P1hBUdfuQotwq3CgdeNe",
  "key16": "5788mT9FiGNuC1YERC2gkKCJhLQjkxpPV81aMWdWhqo3Yz8HBh7tgPMRg8G6YPEi4u5qZs2hsu1SLSdYUMh5PCkf",
  "key17": "28hXtCfrKezbsYE5d19EuE9P2fsmtfVyXdssGeDfuEs6LnaSZLTLh2NGmZ34sDdzpkUiaSb9MK2RBQ1hPRWemDQ9",
  "key18": "EWmB5A5Pf4iJDhKHvreez3NtNLL41F9aDcATvYdgAHbcW2vxNd6AvFynWr9zH5aQkfGnRzbuSu72wUs9khn7Z7Q",
  "key19": "4ZxrhZ9aVbKQNyp6NWmLHTB6ZM1RxpJAnb4WCeato8ZSaBJEFkvcxzdeAvJB6pCkk7YdqRPx6MGBYiDp3pGJFGzh",
  "key20": "3TL7HoLLpuvsPbHbK2RE8nFhU99xQ8jpx3pyd4M7xfbSdRFw367UPRcu7BjjYDHc5oMkJt82yhC1PntmE1rBiQJW",
  "key21": "2Bew1KJvpT23kV9AxE34rHHN2WMpxJiazqJiQfUZ6PbKytwZVwhJjcH7VJeyH38HvqoqHNgTZGkFuDhCxQFZRABU",
  "key22": "2SaAREtYfTHojDyg2sJ8JbGjVhNxAhQDrEx1oJJDF6wBb4wsn3mcgHW5bRVbgBWb1B4oru7Bw5hsjy2hbGEKR6rh",
  "key23": "5S3krhyZ2aePJNm68hGExBPFiwEQMFzyNB1mpFf57M3nZt9RqbvSSoH1HAMe3ZdzXj15js3D1N2BhP63MAsHNWJ9",
  "key24": "4sg6SmVyvnf4i98WohE3Wton3awSqsNPbofXHJCDoBsLUuNAuDEkViWSsw2AN2J5FTmKv1oFkNBW3vpDedgfadDk",
  "key25": "4fjY9Yd8rzihrZsvLxsxFyWaPxnjXu1FaxDqaLweJqJAresb49z2K4KYPmfBwVCUnag1BdFUGuxrrXPoUPSVMEQo",
  "key26": "4qzevinKswGjbTo9PfFb8Prx22LfVgaLUskU5kEGVTjdCK4tPQEHAuJvZoqua9c498sjhgiBHxVkkLRUaWq6iRw",
  "key27": "4LbiUKrW1Sj2cv65vM1zt8VRcYviMQ7ikPBFGxZ1aVSF5NqfZYtNYHqFetCRgDVvFk1G2XuiPRtH1VhBq5q4E448",
  "key28": "2oE6SoXm5mj5mF5px9XjUZs9jmhV9x4ErK5ycRVMZm4hM5DbpD4m3esJ8ExFsFSurzC7CPsi3m9rkqXzfXHn3Cd2",
  "key29": "55wPS39psFWiE177emkszkTbRp4oVQWMwjHR5YSBiKp4PA6QjAixpYC3WqWSo4UVY8vECcjPU2cqRe9sP3GqBMPA",
  "key30": "3xaAZ2ywepBPuFUrConaDPJ6HyajJy2Pe325TXC3JidfeE2kuuZejCfp3bRVXGUGGFNdgQjVtufi8q4KeTfiooLD",
  "key31": "34pg31QkcBeMvfACQTAPsj5qq3NBCghvqYLDU4mH8ZEJBLPg5TXqcDbxoW31WBJSbf2SG4DWpyMLoZcwVyZgjEFV",
  "key32": "2RGiK4vEpKM8j8DYFDvhYpULfPRNnBifVtJpqA9CQ5nqB8FkxeQkUwZP5qX8Kera1QaS1CCYERhfRGtgK8g1edX8",
  "key33": "4YrZUuyKmjukDzWHdWNT6G3YhZBDY7U6ESmffz3pJet5RDZY7DmC9KuSyWmqm3TJR4mUb3xJ2oFsH7u7q3WDGPNL",
  "key34": "5hsrwJbJj42rJ3WDveyAQWqVumzcHxbZvQiX3WTVJFEDPgUJK1FNkDcoJrF3pVngk8Dv2hMfCQBhYsuxJ6StwiDR",
  "key35": "4Ao62xskdBmX7ocJeKnGoTqWq8dGiMRwnQBYZmRVaMjYU3EGKNp9DbzQoo2BAThBscKpo1KzMEXJecnp3EsGHYk1",
  "key36": "39qCRaLKEBbkz3eSM7XqLUv9ASL46czHgwbcf2xPZ243JSiNbdx2NmNKpGigSkZ2kN7JXL4LTmBwqxJNdVHMi89j",
  "key37": "5kJNPghk7ZsLF5b77k6euR6VGjPBaqFVKk19oZefk7hAUtgZZiCZCbt4RGoJrrnGdhiRmapNBKnZ3NbwaDd2ezDb"
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
