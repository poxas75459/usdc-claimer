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
    "3sVoAozzRgCf4UUzvpAaRnbbdDj2P9GXUV1ib2fNceyhFRY4qT2bt18KAv9RR8t2fe6fAtesKwuxRJaLT2nNec2M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QvNWJ4CWYPxq4ntQ86B3BGFHYZThqFV2EfowdkDrZZtneitjrxkH14iZvwHiXgNf4BASHehfQYBdsTRHGiz7xsG",
  "key1": "3DdZhmQfxhaB9AtucZCB9zRy8Qpf5tz9P99G8YBvXn7ucK6Lfa1ykAtzTuLam8t3Kgpocyr36yL9ftM9yP2XBi32",
  "key2": "652i6qrTjUdkeN9oegmt5EewzjmWmsKq1Myxj4KW7SM5JjyKreH84XnWko6tqFsWadPjL7CBZpGNPfLXkzirQiqc",
  "key3": "4Tn2y2gqu8BXkTZXQiDv6kV158RSqhwtJJ3BiiLb1H1ZtWU776AFEAvhRdwFnNmP27ktnxPtFCTrX6b8ookqM8U1",
  "key4": "4b8CnQWm4PediKz8VLpsYKSkUuLyGDNofQ8erLoHjwfVo5NfVLgTZ4k9UYaGbFCbxmyhZczVMESeCiqB5toaQykJ",
  "key5": "4imUzGrJEfmH3tdbDh73tdr38KmRjv4VFz19WDkLGHa7EWBP35p8soRMv1keS8gCCNCiR7evqNpgSV7rK4bd7nJx",
  "key6": "25ctgodTgDLmKyL5GjSfSBHWoJuREnCZYERnL8L7b4tB2q55fEgNkgLetBhqsuexrnqzW6j9hXY8kQPYaidvZxc9",
  "key7": "24cQx1JoNGxuaXzKVCsU3jM8eUgfM4agwwuUoUS2sY4w3JLYvVefUPiD8z1YNqosQBb6w3L9AhYenqKzLXdq87iv",
  "key8": "29vgkaZ46irWUhckaxznLG6gjFbuN7LYe4dwCiH6jtuLW9UtqeA4Vxy7P2QHpVdh3sLjk9HLFYHxFoHnHtebgWgT",
  "key9": "4n6XRYFeTSsZbbEVaY7QPSzvgSUmM6rg9pnVA3iZ9NpPTZRysA8o5nHbQrywD41EVHizrYFCHXsHNJ77uYVfKnjc",
  "key10": "R9v4KPT63Riyvp9bJP1W8Qy9HF6Dg14BdFh3DQqBNXLrbsLFT9FqcNk31kwHaYabyw3gNR553gr8XE6edRivzhD",
  "key11": "3ReBDhiK9F37VZiALXSJikEV7oQ5fY8wQacrXReTHfkbrhQFSEJXWUsNrfYpfsZx72WPp5J7iieySBHCBBY2Z4zW",
  "key12": "3mNZ8jUWgyJatSmuVpxsG2EbGZkDeYRUzPz8ipB6v2gUkNqoVQmwSQ7xFoR8YYmsBTr66KQFXafTPiFoWUQPcNJW",
  "key13": "55imBxrt3Qe8NbYtWCgdTNMJtd8s2f2ihE667xVLBWzojT49BB6xCV7ZNnXvSKnSfZF4kZFotJtRqxaQY1ff6dFY",
  "key14": "3s5MvCiccNU8EGUrjFdZhDoNzTND79ELhQSEs8D2y37iycEw3fGqGVZWkyNRghDV7zVSv4WPRht3u6fCAfDBNTbS",
  "key15": "64X7RbPRwaTjsWMCLz4HJdyDqQWESTn21LFf3TRR3SaRiJQTktmVMPeYwUwNSFNPy15VSVHSSg8j7eJvCVbX5Ezu",
  "key16": "43cC5aPw9SgNVX42JvTbK38TcpHvRUvre1GN59xNwR7kDyhmhW7kUGkTm69bJvFKzC71swuEcp8gmRruZ2PPu9ty",
  "key17": "4b4NvKHrnvdYSjt5LyC46pCpeHeAb5zh9132B3PU26P8rvZounRC5KvR7XJPdsju7dLZi4UgKVDdKGhMDCZ9egD1",
  "key18": "UiiFeBzBUaoZdZPsqLFEsXFPh88DPrC1SEn1EafMCtYHeeB4sdQcDbRQca6oRc3uwCBmMxZ52pbNKNmVMqhfFcK",
  "key19": "22d32TRPh7inAB2osoE132w5wYbphkdeMqCN69fuV1SYNAju7V3SNg7WXsSa52X2Z5PHgbGaXAQe5KcwAi7q7BbD",
  "key20": "3LTN6pCYziZbfHEbv3iihcxhAstVyUeLsxYY13c4rrbmfTDm2F42MQfHBa3sqKf6zY2d9rrqjcU2s3rmkQX3rh7j",
  "key21": "4JfKqL2GmbaAv1Jr2LjdQBP7DtVYJf6JbtDS8D2phkkEKhjzGXwHhxv2E4D1bstSSjWiaNM9KWrnGcrTMZdm9Uuq",
  "key22": "4b4sUkxyg495t9Eba1zz883NupB2fyQ3y9Sc9Lm2M3nQHCs2U56kw62sSqqTaxqbZebiEMbTscH1ZPh1Xxq17NQW",
  "key23": "4RTpWF2evGcQU14berLqsEpdK6iJq9cBMEGqU5bzPiYGXxtyqFwZBQphbGNCjKjdLoayYPeJ3i89N6T4171eBjYg",
  "key24": "2cK1dtHLFMf1Z9PqTASqpxiBzuvMnk1vkco3oL3DyN8datsFprccAkrMYXZW75iynhhdfu2VmVMyEKX6oEeQ34Kd",
  "key25": "22GqKy6FMqymfcVbDeTYNqVEKBaN44rNs1g9X4i8yMSpfcujEtsodySLHVpnuqFggw2N8sEfkkEEQo6TeBWG56CZ",
  "key26": "JUZXg81UFqjrhuavufcBWWkw8xAAnZfLenKUxSCxUNcLHRneezZPhv3S8jBQ1dZ6JYoQAd5AnwVv4gibRw7Zcd6",
  "key27": "4viA7uQo4MMsLR1GJKbwPWR8UTfg4YFX954gtPxxiZDm8G3wpEiVoBC3oS6QcQqrXjwQo7y4bnyHY24R1scALPf3",
  "key28": "5dngXJ9qWEuAKX3856Rb2fx6RbjrzQs3Q7QFSbKvBXfeVnQoud6VLv3Mk372BjK1E7JxH1v2o18P54Qz9AEw139",
  "key29": "63n6ot8KjBXMFzbHmVHRpzcKdAs3pAu79MobSrEmBdZB5kzMp1V8s5f1UUqJ81f2CBvZ1N6UxH8zvktNsmG7K1tu",
  "key30": "2sQ9koJoPFYWhvLcHiM1Wi1uoBYk8PE2419PG7FvRvMDogj3gMauZYvwZcNyUzLBxjdcdSQaU1m5K26BVczSHwRX",
  "key31": "5DayKbCWxJo5v57DuFzqHqeL6N1xQ9fugQL1oorD7QVC1jSNhonCVB43p5nnsTrpdhT15kKPBL2GibUQKGJuDGXE",
  "key32": "3WLRSue2Yh8ud3QTLWjMkoWWs9qj17Seh6w8ffCQJUtG8r11MJXJ6GFUVK8HJFTu9YywnAwbKN7wm6ayHoe9FKbD",
  "key33": "ucUJHPTb4LV3d2vhLgbh28PJLeSPiLqN3nkWcaeAf4KjW3FnFpUAWXiC65kHgUc7jXtJyFBUMvpafiXiDJV4L1S",
  "key34": "3jKpKTL7MgnGNYacZYScbDWiFLqhxu5X9nVD9BVezgFGofpeeYMg22vjWRkkak89kQAdKNrrf4i56JTtSCHpt4SM",
  "key35": "kssEeU4YTkBZWWVD1WAq56sLWUN3A8U5rVsM1g3rrxozVGA7ShDNfSAQz2DC3oRex1rttmZSYMeHqJ7zWYJSn8c",
  "key36": "4oTyBiU6qLNBffh5wnjGTsZKHyWd1iujHD979ffPZb4VXx4JT8qgCrxQGBWJeBHPQgsJTGbHoKXBXh8DqfjMDfpZ",
  "key37": "4UGnfBPF36fqECYoVn5WpkNELfc8X3VurR3KbJL5YYwKNNF8pAtQBMxph5thk13D5p83s4fcts4tDtdrmYmqZPSA",
  "key38": "5ovRRwtexBPtYtCjyrLq1WNGyoKiktC9MiYmFPHyycJkbHzoJ5jQJu7dTYkqB8kGuBrCfybGYJE19dMxXcicQyzh",
  "key39": "4ZxxWcXfz7kkf1xAhUSZg19TLPKQpZL1m3kBxCW8zXC4cPFVyHro7PgoMPheVpEEKAviPYNt2hLwYKB2ALmmn5i8",
  "key40": "4FQ18jxhGTBsyEZapvn66xAayaViydPYhFXjJERpKdjyb174TiBzjbeCeM1scgpgZQojXau5vPxeBXccyUuGeVjp",
  "key41": "5yoKVjHHDv1vbmzGJMnczxPFx9sotcRz5i89zRx2w5NvLEMrptvUyLBJH1F7srsxaMB7G1P2eRjCgfepeboi3c5p",
  "key42": "51hCQ9wED5rjDPrdPbG6qxpA2Va8KqpVDbAxUJEm1qY9eS7LD71HX2EvnQSK8pzDja71W3vc1JccpShDMrZCtEdi",
  "key43": "4w6gfUqZuUgKUhx3PTAg7YnKqVWBmJH5edfQHxtcUVmRoFeCMVxfAJi4nAhvFVYWaRnZHBMoFcGPMiuizC4A7MGn",
  "key44": "48gKdA2pHXEwbvLi51PdcCR6xjg91zohorsbBYLRyuGg7D5Ce9hXRyCUn8Wc435UEVNvv6qcFsufcAQ6BnYhe9h",
  "key45": "2WP7QeYvDQP8LdxiWpsX4bGMuLdwFkvGNuj1T5TpbfQQoQGvUX15ZuYFmBoZgtPS3VBkdMmy4ud1HzHk6qvtBH78",
  "key46": "bypjBXTW18sLqCfNFVirDSoWvoniNppSrRrosPi87ttJV2zfEzqqxpke5s8LTKiGYk9zSfNcVooe137XxGJ8jZD",
  "key47": "4jzrp3dnFZ8brYzSEiGW1ZcBvpuCggB6quxPkM8NXsYb67w8wVa9RL3ZdBsUzSE1HNuMQsPCiVjhffmtrWbsbCMh",
  "key48": "4FHSibWAw8ztfsbdRqwWGWJoz162NPdM7n1rAHP1yGNfj6m1Uc3gGEugZuo7BDeHJsWoVT1TUU5ZmEnm6rmuADgz"
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
