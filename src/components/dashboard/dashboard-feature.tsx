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
    "3qtMCwqguMuLLDnHP3U8Wj7aooJdZ1CELZZu7fsw5uhiqEHd7vf41ZQ2CXDBDLA6GFRmE45jeNqkfqrFrLShwQQz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gAUFbx6SyiAdTmebDDWxitjNsLH2NrxbC4keiN6xz45SiWNqCrQnEgtuEdQxyLkf7jrSr8pYg1bxVxo6zTUYqyY",
  "key1": "3t3UXTpNFKTemkX9z9T1pMXGxXAN5ndXGLaxJZdZZ4No18fgmnMyRTZUALc6UDkGmpvfWmdPhpbcKv1T6Z8kcSLP",
  "key2": "5S1SZwNATu7S3PrVv4CbiaQc6WtoRfFWsCjApjbYyUuez926foarFNZx9uLX3tWz6H2w7BY9XtpcwpY7rFJJQoBV",
  "key3": "3nn1rLN3ZkHpuMFCmMkYX8k1YQUhX5fNYb3Jha4Mg26UcS5KAioHvUoM3RfBCaY3PkR2DovnkWChL8nBrh84EaVJ",
  "key4": "3X5bJQjwpx5tedeL1Gzg54Zz8QLaHu4bLTg8kzFpRRWXvnXn3bb51fgCLW2yCagNDgqSmsnexDFQbQS2bmcMtxEn",
  "key5": "4kY1FhYcMHmFFEdL6HLQwTp9yA6iz4SHH1scgY59NuC1ngJm66DMd5VDp3zT4ZayQD99dJwx2MNS46nV99P9APkb",
  "key6": "2XTQhMDGddrfyP1j8fAwUT6uuhmStuR5NVjPMjx1547uEc6EN2JbXhnvM4Ub7ZmhxKAeJyDkoUCKgRtPv2VAcfBN",
  "key7": "2j3TPNJZ76fzAiuUhrSNWcdWMRA5wGFvqH25ZhG7ncjFBAiN4Bn1mi1JzuqMuuHnaPxSUnrUhkZEDDCuBwrBDrYi",
  "key8": "3F6mbeTF7Dgk7M3WoGGQ6rwQWPnQuCrvEJRrdCA27jkHbhWE1AS7LT582zrBkbWgX3RzcdFhBaPBWJKGL8oK8z19",
  "key9": "5ZcyDYFK4NVx6LKL6ZajtmzUY2HgLf8LMqqhKMBEozrvULuVyPm4TkoHuNnZ7FeogzzVcJTfRVrxFCz4dL9NCGGQ",
  "key10": "5BDh3VgquH2ggNxqXcAFk8ag6zeTsAkZJ9MUqf8PPmxA3PAYPKZWFPvHPifnzycgwBghVuhbvpkAcmq81TCQ69X3",
  "key11": "Mr4hEzrtucvaCSsXWxeZSSq1P4EjcJovLMibaMbvSK9cYFwTiYrhho2PrqwFQWwB86n9gbfMbyyru7qEe5qnUVo",
  "key12": "NU7UYUQ6xF3323GkgotxgMd5J7XmaTAveHZFYrooNgsNdK8aA4mg5r6jVwmfid269Rqdy6QpyozJBckzXbbJhxo",
  "key13": "3E6Fh8B63gBDmHjNcGopQCd8rhP2uVoCVv4zL46ia9VyYGEuFbPUVctzMWdmHdtjx2tTP4QNiVyXcK5c2ev2M9XR",
  "key14": "5gam3zb7gDtouvXGGj1vz4yY4LKX3Qe3WvXBn9bmm5tEpyMP3BEHJwEfe1MrPQxaFZdEYiDiJYTzeghs23252Ypq",
  "key15": "3mgfbAMAsCRcsDHNEnCtK8Gsq6KZ92itDXTL9PtiQfVuhj2qJ7HYQhqh6Sr2JL6qSKSR9uVbL2LBE7f8HypoVpH",
  "key16": "4CcPNXAVgJrjCYSD8AKiG31sTLwtfwhxATb4cQwqmKALhrVGoGLHSzNrWNMuGpk5GG3nDJU8Xi2mwREqTVVCXicV",
  "key17": "ENJ1oh9hihgSpduaMk5MQEVssLgnyNFFxCo2znyRXpYd3uGNcRLDdW8JNNompei65PjWKhYKnxFNeWP7gUSdM5h",
  "key18": "pyTKrKvnBT6myL6JHSdJPYyHj14jQPzNe1hjbQ7iqka7sABuDdDKSam6EF2KsdawyMgH4VgpupduvovczQzp9TE",
  "key19": "5HgEbmhteuJT2e3TihoGVyUvQRQ8UddaskomJr14GQRahSoQswg6GBNWEoHsPLUR6ZZPAAxLwjYVs6x3EZnjyWVa",
  "key20": "3yq4Gge5m3TyqcJ8vW9bejnLHRDCbZiv82fzUioq89nzAQvARhFoTBxUTDTPVTMdHiMMVbW8VmUpQ4B5aH1qJvyK",
  "key21": "XHv9Dt4xf3bhHxEXbBEuWkzeZdrrQt9fcb1DFdSR66tqKk2zCWvow6eZPxQwK8n7rb8qAEQQ876WuAzAYj3Lwv5",
  "key22": "33aKscg6FWujYjHSjgrN4Syda2fn2u9WS4Q2imSV9vRKbMY6uXmx2c1DnmxgfgXeD7AqKqzfYMVziuGneeiyUpdG",
  "key23": "4PsQqvTxLXaLGCyyJhWupASaj8GUGFPFhJ3BdbrhG7J93NVX75DfQPH3FKAtzLF4nsC2JCZAQnsoAgMRg1HutxBt",
  "key24": "4G2yFqdrUvZjD65ZFDNTfiUEbcPSTutbad79tXPi35Z6TPQvupTqTJFWv8opxxPJKYWsMQXGg3M7RfsbYmmjc153",
  "key25": "46N2UekU9tDHNMEafgZbwBocBG2JbW4srcaP3XMjqJQfPSo2jvRHVs5NAsSsq8S8AcksRVK6ooZEcX9fV7VKhTj5",
  "key26": "37FSiZbXsVtyj1ubPB8K3bVPAiUz6sL5w21fbuoYcSTLU3c7rdEdb8iiEwfNqT69f1Kz5vFuYJjFSDmBGZgzWUVy",
  "key27": "5UXcAFz7HQkKNLg3qNSiD1n36Q7pyPojsGyQhRvPT9b85rcChSgyZCNvn7rkpWAkqXfihEH48yQdUkJTncTZrwji",
  "key28": "3JggJWSViyfZFrAU6qSTpMov4QpxEmwMhgiWWc5ui7RHZppfgmF3EMYKk7EGKwScnVC7FFkLzDe3DgyQcCWtUHqZ",
  "key29": "2PSa5onDpyarQqiE5TxpNEowG3ixz83ogmdSEj48hmQrfLtiG92rAYbgBoNT7bCnR2ccYQ2yKCHNxV7JzJwQrM1G",
  "key30": "2gRafSUaJ858DweCpv5ukqeeiPrhjw1dk7MbaHS91ZAam9xCsicBjRw6xWNS3KEBhCABkxnGYRChTEdsy46AUTAC",
  "key31": "126r3X1uwttDzVyUZCFHrjRHNtDZoBKcudoRvmtvLsrH4jAN7ouAEH2xoVgqm7NPc9WYNFNATnZeMDmA7HCrhc1Y",
  "key32": "2Z5dHjPE2yTzpUfFFYhv7rkq4jQyaXEXs3mqCpUCKCSaNR3kDiYR6juUp7hiWwVqxNeFtqmJ1qfRgLTfsanj2iys",
  "key33": "2e9WPkV7QpzBP4VnBhM9kcuwWh6ZHf9Vgupv4GXkiacddFHB6yKtndYMjThaqKZmUQ52S8rn8yHXMQokCA2q67HE",
  "key34": "54gkDwAh5BC5hKmj9wDwqJjYUXCWYZE2vW7eiVBmo5TQGkco7tYsoNtVxY1Lyr9tGsLPWjTs6PtoqptYReHHQr9B",
  "key35": "4mhynRuDMePXMYCq2ov4MVd8m6qgpSLge9b2gVuJYnEGa7q1bHBWRumUqhmevCZ6J5hTPF4jkdAKWufYyoBVKs5g",
  "key36": "5rjWuasMd8yakus2qxm753iRhAevm1r5uUo5VXevSgFoQNAE79pvYrRmrG2YAmtW2oAnvdUzB1JdtcsTMDo9wez9",
  "key37": "3goFhMeidikm5i8tC4R8noC9mL1zMf7XJDHMotH5w8DXY4o6eUE8svRC2gHfFPEXMur82Xma32z28WasA3HdGC7g",
  "key38": "GQLpMSZpZCbBjqWt5LNcY37FVhyyWbejDy1AaK4nzkpXm5t3hKWHboDwKZ6TL3SKAhsuxZSaXmLMggdPhP3TQCk",
  "key39": "Jy8PNnW6VgRGmrPn5JZpmNZyxdwa8gkyAcnf5cjfVPk23EBCjrgvfA9h9tkq6ZhFrwDxygQKZZhYCYupkGJov3Z",
  "key40": "F7R4LzfSYsEMKCZb6cruFfE2bD2x8W1LfRXA96gUeSnumsKD4fwZ9g6v3eXSWmkcyMMifpnjp2z1Ftq1mMaVyqg",
  "key41": "53ktSBmKvcbxLLD4M3cfLGe5pPAUHa3Zy5ktv11eTRZoHt8doi3TU2mDSPFafjaakZH7DwheV46Ljswi44pBsKi4",
  "key42": "5HdqvQLTXqEnRJbj5iCKPNjoKT2ah6tYcSd9s6gXEjWGr8QxrEe6LF5UoiY1hmkBVt63RDTK8gvttQdVavXbXN4Y",
  "key43": "61r9CnNTcpAf8VRJyX1hNTCk1BVVShVUzuZ7W2pvXksDei3LA8fXfMNTk54w6b6ZYRTLwMAKfeSZNL8yKR1vNCXx"
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
