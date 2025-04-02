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
    "576Qi4EFaZqooquGGeQKrQBoSCZtzUY2hLbcnbMc4TKMKj97scXhpdF4bxEvFLjERzo8uwmT7JRx9zRAvPimSTXd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ph6jDXCc2ijaxRtUeMtBNGCzNsMNRF3w5qBH77HFb8ZkGaUQuDnP6YG6ZLSXt1zVxQgDLDwMgDAMPKj3tdxwLtK",
  "key1": "5kaEghgmkkr1DratHQCdvRi5WJayHUj4E1HZxDjkuTQU6CdAKAk47Cz7X4B4Xp3y415UVH6Msj6bjV5EJDgxVnyL",
  "key2": "CfyfUnLH7SdChWZhsEDrUxcZB96Vy2L2761aEyKZzd6stsC9HBYASiRntj8ucgAkmwMCecCaWD7t9XJF7QtSZwH",
  "key3": "fM7i1Cq759Q8DRAskh2TccRZr5w7UUZ7Sp7SdtpCmDZao5sfwQ5rUMb75AAenNpx9SHZqtnBqx5ZoB5w6MZBwxz",
  "key4": "47etBGtbGTQm8RALdcynbzv4P2YiUrXwPCV1dtPBQB2mgJm8pcUD2V1G4gSsUzEbGa14GmBbjfUHrmA44weuFZoi",
  "key5": "28c5Ny8h8tVvoY58q1XGdbpkiPMCHpWmkhRbWu1ESdEJ18juQFX5aV5Pfge55HA73QqioMLaCQQ4UuqSY4rgzQ5G",
  "key6": "4jJqS47s76v98wvGxpF6BMNMkUjBpGq8CgXhaWYb7VMDwaxuXuzc8EwLqWsNTTMhWBbzoPCNGHhdoePKQFRuQ96n",
  "key7": "4zQyP8XxPMY22yPGo4BMEgQogtdSjYzTUm7FEL3WoYtLEoFcyJRuwjLmtnmQ6TEhxUj7KsM1ooiXXpfR1Fd8LbW1",
  "key8": "3jsbUhNNwresbQ4isuPrgp7p3S2f5qtUnKbRzUj4cmzoujtHfsZnFd8U1TgsVGmC43wZtD3h3K1fgU6ZgRjvLRU3",
  "key9": "54X7g1byTxtNWzqzoFPBNNVCNWtSJJgidukU4dzrAPSboQe1jGdtz8dELnip1E9vcpsNTw857ojhbKzQXzZL21JE",
  "key10": "5bo3ns4ZXPWW2tgjxyjb6gSzzDaYYUyv2LVha1SH6dKqTPD2vnScak3TwDcgczmA98QiNWmGZfJk9JysstQKJ95q",
  "key11": "4jiGkoaKMmo6xwRhXCxUN5bCzqbseAD3UXf2NtywM5HqwSvtpzoRy8EgCw4XKbW7Ft2Tpb1ncC21uk4fKVt5asQn",
  "key12": "3Xvp4qnN4Jco76VvJdD6brSKRQs1694SzrL3VWf89m7skjrvN1Lf16ch2iwmAcZzvbZ2jsx3RVaD6KhBxGYK9zMC",
  "key13": "246sqpw6b4zWevjrWvBmhZ9PzEp5tBJfEtTF1qXAYvpvRGgzRL2hN6M7G3AikGELkoJ7PHyzAVvMJjcZEfQkreVB",
  "key14": "3gYjxQXXwMMomankemtnZM9NfmV7QT8Qv4aKkroBsKGffkHJa5uxHPdcZsYfg5fs1qKMMUNc5NkHWZSSzTJG2N8h",
  "key15": "4AzVsATjhaZ5JnvapUeyBMrthJFaDhHK6uc8ztjZDaSWvyHAAcykyQQ9M9p87dk4fUEZLmcknN8FtKxv7CgzHV6y",
  "key16": "4KwoAXMoVQLQCT624or56QE6wbh8xayYf2r65WPQ8SMvaRjeJNgmyw8B9rjChPfkgBodR8nMRq7teSuVDC8g5ntT",
  "key17": "2m42dgcEUkxtA3gGwixA9t82uHe1g5vFm3jWQn8m1QiCDeFodRvrVWdFxqsj4wqh1B6Hz93WTJwcbq2S15BpXxgf",
  "key18": "o9PxMKbcyNCjrY2t3oeEueGvYkMVhS7oF6URxTHFWgyQ8yQ2Bq3D8ETtrJchT6eFd5wHAiFnJEEjv4cQ56uoMX1",
  "key19": "2NY1JbewoNsykJESWjUPe3AzMJuq73MyhTrcAAgLMAhTGUyQ5zSZkRRWVv7HRShAnbvUTKyEYcbENrGWiPUhMHhe",
  "key20": "3czFXXmwWDT1mW9JCwKfRfdH9CBv1kp35arf9qSbK88vxVH9AQa7antraQ2gQRxULVE83MEr1RYXKdm8zK7AZGGF",
  "key21": "2iWUx3G8AAYuGorHnUZZyPVTPya7oxm3E6Ym4BcjwSbKeADqWjvZ4pvipaQHTN3mPFLYAvib7ShvzaVmBW51DAyU",
  "key22": "3xECKxkvX2H5FUbz9NkTPmGpcF8gnPs4tUir28S1ZxnZUe7o5cFb3EdrgBHvBsC9yuHCmKDreZcYowQgJYHBm3XK",
  "key23": "gMfuXdhMcEDY7U4ZL2A2ivXW8E9fBRUfzp4bBdeaTpsYBBoL9mqJt8PkhB8rcXvfCrz5zuAYdAEu6N1inmwDo1N",
  "key24": "5AL39nSK5udgc4LdxHsZ1PphYHKvN3EdZxGqtvxVCqocThpHHxdeE9nAoZHbM2FHqTCZCS9Vm8aJz8dQz8MKS11e",
  "key25": "5tUB2xz6dNCKzB9mM5dtzGDDr8d63HbacGgAp8Vww1YrC2cFG32YBKTtzgA9uwUZY95PgYU87XLqVCziYLrZJsqy",
  "key26": "4994J4mA1bkVGe1h7JFCYTxoYgqiKMcZszTxHBCfnroLUKhpwPfTHvucuLBeTnMuFW3dKvWHfg92MYEXWDoL8epY",
  "key27": "5WMKYLPpsNthARFpp4LTREyANrN6ikytUbMJ2fnzvtFJEACjREK98UgVdT6kMqj8HNSeW8L7HUt2eFbEmr75JEB",
  "key28": "bcJb2foecABCyEBcCKYZ9qD3mM7UohTCLz86bn3BB2ac1h59hzSUdfbsiSx3GN1i2dWkRsrKKs9kVRyut7VKfS2",
  "key29": "2uhRYbLdiPvmFJ7xAdQ2mMdUmdD1U1eHvQKLfT8SQqpg1jqAfHvByeFK6fd7nBrWGAUtuGVvERdjUynpcz55L2TL",
  "key30": "2WXjpfALuYMrd9gXcDAPAXV8FfZQwU5pebMHVLkBb9qTM5ijn7AWCm3xK41zB2KUYg6PxoS7MG9dhJxTehNskaa5",
  "key31": "577a7Skv3nJ36m1SSFospg8N9WNqM1eVs5FrDFWs94uHLqHxjqTb6bBWJBhgHY5xt78rmAg7onmCEYGNAj7snyXw",
  "key32": "5cjaVbfSLdt8ppZzcV2DqT8PqZ5YyJyh6yPdffsmNxUe7BHtsZ3ry9UoU1QZD7EtSp9mJewXAp4Fq444m4BmjqpF",
  "key33": "4jUzf9fNXq8XkgsZxBpcAuunfHEx7HmL71Yt1ChFQnLexgb8zC3r6pn6tEXqZRA3Xi4WXMZ6hQQjMCN916ko1Xux",
  "key34": "55KqSKT7z3h7g8P33UBYuWWPiJKG78vND8xJwrFxLFpjkhXWyDCSmBr25BFXSQ1ApuFqGpSDB7vLtVNfxFCHcJdS",
  "key35": "5oN7rP2giMSuVvN7v37CXimQDf2tezUv1GCT3nEo7PX5HLqBZHkMveF4MRVkCHrywrkL5wc2hhWAe5oj9iLUzhTR",
  "key36": "2CUKqddfBA19VwUQBt4woC3jebMuS13o3HGxBZdjfAcHUWiLBCuaeqiSwcCg61RsETSnK3i3f4JJEgG1dnZm94Kb",
  "key37": "4gD9WPakhoKzRKQoWFpfzwo2Jq86evDooKaEumXniWux7bRMwTefV2tkzreu9MZ8KVBLSqDV4L5XULtjP6BRpz9w",
  "key38": "5cp7Rjct2fA8bHWirip5KRng83zUn9W99HvacnvmVq8M9X7mjrYTqC9WftU2CTPgJafe5udiUcLw47jjaPkJsqmt",
  "key39": "2tXyyGp5tSGrcbNcFjAXjcw5LmJcztdz4mfgo67JNYQ1SsCZLmD9TMx2PL2Li2GJkBo4LGJ443TtRGyFwqz1WwcV",
  "key40": "ZfXe4p8tnuaGvFrg5D76JJALmktsHge2xd5PdQ1cV4gG5s6mU2DcBGHG4xXy3KJ6DsNTDLGQXWf8AUHre7FepV5",
  "key41": "3eBCiKfiPWLbNyS4W2vyDzTPRcA1MzfhvKs2fTNgP2ehoc9ymudCZBXqRfPW8gygYMdfFg6ZhQfKyMZLR69kkwX8",
  "key42": "4fgCJFGotCRQNN2maG678gvvWQBAkJr3ZT56epywPW758RGWAyQubLRV2UPhcgjSho5rpwZfDqvu2LDjPAyWGV3g",
  "key43": "2S3H1Sv6LJ445TD1EahY5bAydTBozCPs3MoQy9PwyavPbd8HNPcqYAtxcibgFLa7PRUgR78kBnSn3MtJxgYnMMLG",
  "key44": "5KrdhrQgGR4vm6iWZwaSCwnXD76jW4ic1j2wvRGUJo1sXvAe2SaKyCeQCxLwSk9ygp2Cr1qCaQpt91haTVzbJn38",
  "key45": "26hXXmvQRFfhJgANgJLgbvfRoictDHdkfzrrdUeN38hkmU1xxsRvwzTQdUajPMJVmRt6jZrHT6EWtT7KxmK1fzgc",
  "key46": "oCqh7g7McMdyvj8fareQWs7mr6CaBkufXbE2ZAbcd9JY7XnbN6TzPavimRdnMZQsbvKpo9KvwMbvAyyrHi15Jgz",
  "key47": "3joe9ZC8R4xgRWjirguF5yMiPMX2ZCKNykWTrKYTV8V1rv4gDezQiuZLbmpdBn9U32y3BkjoE61puDnTj3Ui2Q2F",
  "key48": "4X5QM1on1kB3MtqkY1RwQhStAjm3GLRp2zL6TH331gUMmE2ucCXtf3eUejB8rvsm8pL2PGcL7R1rD353G2cfw8oY",
  "key49": "44S1P3uxctHFXAbJX2d7Px8o9UnZuT6VQ8ZiY5HnzphxAsF777Wfj3mVBFjHzKHKRYZ7D5gcWoFwuRijCxXib4cX"
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
