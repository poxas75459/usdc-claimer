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
    "52H7oukjJxAwqWmacLrZ2ZKbHWjD6Pvi6rCU85znaXyf7U3SUvUKwXdsd4n1xGikXaWM93tDNo65aMp4A6vvxJk4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51LUUBKPqgop4G1Rodh3rpGFUYV5ZDt4e1RAtLLEQFTo2Gzf5BnNMUxaEKTLvuGQJzsdBz1TbAs3DGZzN8cMy6Mo",
  "key1": "3xq7YfWThKCJTRaYFGgaFdeGfUFaTAchFhwuZcommLM6NvniWUF5iFNpqkHy5SfNteKFWooq4AWuMUq37wQdNY3d",
  "key2": "4T1czSfsp8vfmVqVcvRkeyDbrzvSq9R1reUK78fyrX78UxBrf6bHMGM77kNtWsGCG55DFvtJ42jpbNDNKo5K4z1R",
  "key3": "2shSrfJSpmWZhtZ3dHCyxzHAd636eM8x1j7EjqjkUEW4TCTupS1Qu7nd4XdDNsXMHP4A2uQtCbmxGTX9aN9AddNH",
  "key4": "4o7CDFhXF3mz1N6CVn8KSgfmt4fbPRRaigQmoA3cnfevVXEoTVcRQusXVZWGzMfbrCDPB5zQJBkB19skHEkddZpe",
  "key5": "357HGtvFxXAYnUN4xvKLpvccPULd88YoXb5ZyVQoBPxM6dLKJpJuqHuADZN77uWe3xfen4pUjUHDndMCfuP7JAtn",
  "key6": "MEG98e5UQWQv5oPRhCF2X7xvSgxS2ez2FxYQx7Jj55ZNFEx7A6P93ehtt143iHgkSqozvUmGV19bYdaxaUKKYTH",
  "key7": "5VjdCPQFYmTMs1Fi1XFfksrW9FgxArgik2Cdh87W36qgRHGi9FguWQEg7BcWDH5oyRxtUzgsfmztZKgdjDqN8EYm",
  "key8": "3PVgNwSJhg4YUXuv7ZSXkBsjLrwqxhZfx88kvRs5VXPEFK2ioemt9SW4L7ET7kwKBjXtVBwhY6Vg3wakHqX9hgNt",
  "key9": "5YvJsXxVNVz1WhtJyYeHxnYLgB9RMSzJj4jYkhBMQwssdoU26FqAj3oX33vRQFLqibkZuXPfJiBshSMRAtkZsA1K",
  "key10": "65FuctX9mkdnVLHwxWBHeWtquwgegHEZmo4EPGdzHFQm784VupDoVuJvbmxCLFfwe7G6z6KhUr3TK73jqKNE1MpK",
  "key11": "553KYDGRQJg2TJJoaAKSmwLiSGBw1hxcKU8DnHa2Ai9KSKsj9oLSA67p2XBenP9D83ngifJTTCd5m5sq5s1zBDkg",
  "key12": "25uYouT47B3pHEf5n9tDeggrGg1mkxqacHMpeSiLH532tya3FdZ7a4pFJSqS3gQbixU8GJYS2LJ2iVdPDxmWSqcK",
  "key13": "3c5gb5iYgPA63LNMBDRxBX4tLE2UqbZib9CyxXJ3KqcFURKqKG1G3JeXnL1yPfjM6DjmVCMu5hNHLDuVnvVQ7PR4",
  "key14": "2WShKeWt5pmBGSz7bFsX9KKyaac9m8rW7FMDSvE8pMvJfUngijcqsJJdF2ki7DTcR1x4EeJKzQngj1TxeVKCK37",
  "key15": "44CLocD4CRDZpL4QNQqTNGqDxpajMUK8e2BdZRQsDMqkofN2nej7h9Xh2j5RXzDuUq7Qqzh8JpL9ZevRxbxNxzN6",
  "key16": "29Ri4KsrYDGnDu9tAqvEBDioEztgTsgGArfrZ3zfjwo56LqYA7UiXQFhKJSxxfcQKThAVs9tjrfb968LtJ5QG4JW",
  "key17": "36HXGwqLqPKyBvMJjausSEznLviK4YTn1BACLHZhNM8dSQoCJpHifTYM7RKcwdCasMU4UYhjHviBt4nttEPLU5RZ",
  "key18": "41qGtenNuacwmGNWpJP2KmWUd8sSB957WsjmdbYE49roUyiuXtW5zXKGg1dEocQJsi5cN5oNEAMbtv1mHV2Ww3F4",
  "key19": "5NMriiDRQrkvYvR6SucqXeZ5S1BDeYH6vPP3Q4qgkqQhUxUrLJti2poRFuWYQp4kXarJxV3GCqrvTTnFGFrpdLw5",
  "key20": "5tqEDSGS7X4HbYvxEeQsieNJeEukFmsTmcxcQ1CkYnZCUptL1E274svVpLMRK5RnUX5JfAoAhGwgg1H2RXt6Yk9S",
  "key21": "4WGBfhQuEnoDQD7PQJMQoEWWXDuz34xqk2f8duwkcK47HxSmDFKiTtwHdC3LsD7jgv7WQDZfDx5qWwQ3MzbaHmYS",
  "key22": "2E2Gj8h7RorC6YHyJGhpFPxuMxskQXktMcPCjvGZ6okQ59M2nfhHUnUiVotmw7UK5voen8vLQdkcLPv1Da46p93Y",
  "key23": "4cmpLxZUS6NcSUs27eiJcpZR5LGQYJQCGWZ1rFThkhjwDUGADGufCb1SqxoHc91Hnpic1j6g17vr3no1a69ZVcca",
  "key24": "b6rjd3JhcZvVQbQeV3B7y7QV8KVQaRGeaxgnKc7WcQaSzpffSZ7KeVepAazs4PAjKBdoQuPd6tJWL9NWRfEGPQE",
  "key25": "5odjWE4C538czXeDGNeSKVGA73Hny9RHtMui62KFM4YdyRuyaESQYn3bTKRnfV2tjWMakThHMghv8uMhVAQsrd1g",
  "key26": "LXCHCrnwe9F535gnKMcjMD6fK3ptL6m69eirEFormwWJUueLU57fxoXNd1d5C2u3KNdqxBbERAsoRdMEbsontfU",
  "key27": "62zYztWk43pVmZybsp3ucf7RJg5ZPqPUCWQHKN5NtDtML9MfKVw2zUhwsRoqay2g5WZW1WYZiqN86KnVvNkZwzoT",
  "key28": "3LuiTJWNYLggoEzxkQYGtnBHW7HrPss2rRiD84jmCxVrhWQHE3GoF1E9YdotCWmHfP7qyUjUxFqaRappPNxFhThn",
  "key29": "5pdEn3xVHycLjEAC8bDXnp8RCSRpp5pMmZqPZTiED3V94gDBvYB6RJEG7kTtAGQV4nYthtynZRB6JM4fmwhbEW32",
  "key30": "5a5fL2nngwctwRYLL6rFSR5xVDoJmsmKcayFiZSVKNFCFiKKoWSbFzNJydK7GjPWtQcMYARi4N7r8dW1AcWiwcT8",
  "key31": "drC1f6JPM9FHXZAeeKc33kkP14fthgyjr8YauGUkeuZDfJZ7qoZApoYoLbi4dXu5YkztE7qch3kontxUqLgwEhi",
  "key32": "3x4bzUSEXVSyxy5iaz6NHUA98g3KfRwaBkRHGqAZdWEP2w4cRgVnrutADMANY6hbx5KYMXdcRk6vFHk9WsZjBWRo",
  "key33": "wBVGKgj1ZjaM3Fo1NvVTRLf5JzGbbadeUF45s9P5HtoXHqnUcGwY7PfMishgNzMA6LUeP36s7iWiLGXdRS8PUrz",
  "key34": "24yoN21XJLbJrZ2jan4SFvBuj56pR7xoAoqUo8TRAAeLyW7zrx72wkWG4RAfS58icVDhb54tgXfbFGfAsgFYEPZV",
  "key35": "5xPSJYxPDk5d3ZuTcUwLNCDZJkf7Ja6x4HKBDdEuZSewgZAXtv3SKMRtFs9KhQkUqg9yv3XiaauXQiihNjMU4NiH",
  "key36": "2iHhmHRNguDM76K5NUJhWvsJ3Srgm7idUJD5rMjax8A2iM8Q6XkNHV3A2VghMtAWnVMEKTB4o92mHye1X1XGAje9",
  "key37": "4porCDQr1KdoLMKACz9tePpw8gV9zPtveq8GzPnaaBVFH4fYxgFTNdnpRWXAsyML9TqbFLL9N2ndsci2t37SHNtK",
  "key38": "3R9GRDGWNGSRgrZMgRbKB7xWSAK2eYZAyz3c6mwi12KvFZUDJmdN18KoMhaUVNpZoFPybcH91qmAb7xdqXDmKSY9",
  "key39": "4LfUtQtLfv6gCAy97Lk75Hxss3X42T7BnJFm3MejnjP1ukbj2TgaacqynmMWVehHEvnFzECFRqZXU9ZEFvCT9ufc",
  "key40": "3wwGK6gsTVpu5SZnJsHSc3BhLMF6GfPKvrGsSDDJavSWQYVFg2e2qmC5CjVtTZTUPjiJjFqeKbKbUd7CirGP2z2V",
  "key41": "5qU8GZDqkkVvV5PFbB8swLB12qJtek6D4Cj8Aky9p9Riw2VAEV58dDeutobmE5cAWzJMrjrNEerqxGpC7gFaybHP",
  "key42": "2PKjZ8csbHnsRu4jiTfmPewtH5Gp7n1xUAKM5a3vKmaPdKkXWxDkevPi6d2DrhyRyFAUxoE2EtfapAKYbTAmridj",
  "key43": "qH1szRX4MfKqYmYsZcxYniGaBXdScnKwCndU38PSC2ScGQjQ7HdNGD76tUsXRuGUFcfuEsK1MzvVYtYLMj49SgZ"
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
