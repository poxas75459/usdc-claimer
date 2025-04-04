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
    "4o4X7n6AMC41QKJrR6pLKbjdoM3Bik6MkNhhz3wehEtCn6xXwJMKmyMNoz5pH5Ta6Hzhts9g2pCsNmZTaCxwmaRn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UwyaG7FEKSHTkc8kB3o6LmHuhaGDMaVzBBM7wCC6Tf3s8XqGwksw1xhrReEh6HEMVU564eoqMhMy6QK6iSi6bha",
  "key1": "4ZJV1zexwBd3zKxLjEkrXCkZkJgXdD6ndA5MLWNs2TFahhyEGLQR7osbM8JK4dbR2YHkKyjr7dd1J3jwunerWMAY",
  "key2": "2M4FbeVWzuNmJNZuKexbRXoSg9mwQGJp86pjjNc6ck3ANAJ5pvpYQtaeaHvvBq1kRCvCN425eD55isDY5EHBgRk7",
  "key3": "2RtBD3uuQSeLVRcrHNqmSoqYRvRh1TNYfXVMYt7hJM4JG3J9rtAy1gqtyk6THmt6yjva3XvC1S6x6W1Ty5VtGyzc",
  "key4": "65QyYcG4DaS5f7uTwGdxucyziJiMjWbcgnhMjN1XweFBP16zxJiYcrBtjUX6qd976UGnv75kzofoe2UVPCZLSPyi",
  "key5": "3G3VTLqTH57GwQmgP7z2rBEfnZU1HFHPxMFnLwwnqgHaqyoFbVkeb3TzN3RkwTtDoz5MBWyjFTZWFDgbvUMytZvw",
  "key6": "2xEtAKfKBQXaaJkvKpStmy3haJHH6WQ7WkqBRQ5bF7TvtxDaKi2QK5dujb2wdKdYUEAfDD8xRnxaQWhpR8GZazWR",
  "key7": "4f83djqvUVjw71F6Snr5QrfnyuPAG2HFxap9ALC38YXdrAZKKQynQCyDrXohM93RCnH1wVxMvYMg6WRoSwKQXu8o",
  "key8": "3WyHjXySGrnA4TisvmCM6Yt1zEph9fScwAYVUkqmdVBeVnTc8nep7oQFaGLsWRysGhAGLb9keQBvJ4cVqwuZFWww",
  "key9": "2nSczSYkaax572tqUsEnzbUyqXQXZx7pVoEqWvNNo5VBypK71Rq2FFZ5Mojrg6sMX32d6dRv36wYt8Xuq4yqe1fb",
  "key10": "5TsJ7KtcxPcfPdrbMBhUK94qn6ggxSdfAoRmiP6uAyNTizaz2g6iKDuVf52BQnX9FHHrZEDCq7aPy1DGM3E4MBNQ",
  "key11": "3BJQcmN5vjjZrWe5ZxpWSTfLkKdTtU17LAr4BjQMP4D1bDmaH8GAdtBqouSrJZ8nwC4LqrtTQjAxh8nK3xy5t7EG",
  "key12": "pR694Uu8xKBghVmgYUq4NJkDk2eZ5sA1Cr1Yfj73AWxisC7a5eVrXV3j2jjpkGtfENN3wwNUNaefeHrRrBF3BTk",
  "key13": "2DTmzkjzuyYVWsb5JJxbhmoP7vUkHufXuhPr1bRSrm3UhtPXME3zchoT3xPjcgfLbU5qpwwaBEzENDVfwPHsvyAb",
  "key14": "6aBhaZwPmzGqepnCFbm2dpjNs7yzk6vEicrxBKLG5iNJqB7kkVWsXp1wq8YUerwx2HaH28SWLNH31hf1mydWSxr",
  "key15": "4fg4n674T9iqEJv18jxenoxc6FK3XvdZMTRBcqYvyntHebcFwhWkJSmRbVH6ud2FpV3k8cWSHm6qzUfXGPPmGQsL",
  "key16": "2HawmZqLLFiWHrwPAhPx1RFafyTr4thv5dNjVradTSe9LezprPkvM8EF1JfjLfbMGD4B32ywqzTdc87b23uhyCVB",
  "key17": "3vJCVgnAsc5eEuBviUL4f4X7GY7BPwh5vBCBS9KNLoBh9KGvSpCe9Eb5zvc7q7dg7WaWF2GfFyiucSqZrbsnYvDV",
  "key18": "zEvNxqPyWjuM4XRceJM2LaiRYQ6xpYMvTHXfu2ipP4uGHgijCVo2RcTVznDpzsxyyeGK6NyrK2FT8YtRbSSGWaN",
  "key19": "UNBVRXW2dSVgpWRZBha9kKARWSzQQBgkH1erzQkcumaaN12pmT3p2wSRrYvniG6ihYmYHFnkDSLxN9cpUKor3PY",
  "key20": "2eGAiHcmtXJNJ3vRfVGf1ca2cjvF1gfAxiXc2apmbz35LHMcTFKbsErnusbWCEQpK2sDfjHY6yG71VAWCVGMkb7",
  "key21": "21MCP4vWx9BoTXg3tP7FsvBtaPSLvqyoD2uQg7EmKt2KzvnaZ5xNChSX48RwmVN24RSa45R3UfpWxC3eRvebndMP",
  "key22": "3YLSEXnKmGYTRpXWRA5Srfd1FrLJ8Npg86XXfDdrfC4fpQWH81JE6fAtTfu6R7ERraexe35GdSKt6otaC7njSGsT",
  "key23": "33FxRmuurD9uPuJFZvHzM2KtAV7t7zXhEiuJ1ctJQoTEz4obo7SKwMG52ZfDEmuVcT1Z8WLBUQSMNzS6MLfLj6mc",
  "key24": "PYmFB4Rt3bgrHjXkMYysH2GHnAJby2LDWnf7RZtPQuUfvx1WPSKjaR9dCWo6d8Qfb5c4gmTABeHn5DTSkq36cwV",
  "key25": "2rkkZYArh65TXuB2YcGFSCM1GkbFqRGheLbEPdnMkvPQqrypdM7paSz46HJwzwxiNeZab76gmcQcgLXQKWT1ttyW",
  "key26": "53CNcQYWaiYisC2dCLR9wt8FKDvfKk6kybZw8WfdAo1Fngjb4f1aL34eQJW4Cg1yYfrz5Py5vRVkUgcQL3YjDVp3",
  "key27": "EyfekZVwJEz6q3nEn9twcnbVvkWDk9VLaACp9LK7hBazCEyPci7hPZ5iCfw69TSgJtcAg13ga3zSNFt1k5D1GZk",
  "key28": "3KXmZwjqgu8UM6CurvMiyp3fyeGjB3PdRukVXNsRT9ZgRkyk3FoiEgQznn99wujykPw4G1A15Qm7goDxvxAAqnpL",
  "key29": "3eA6NL4DNtDDgwLj632mndKeEgA3B3THmx8Z5r6hBy6MkuGyjnYSaxau7BdCchiWgGmUySZ7NZxYN8uaWTMFKqvn",
  "key30": "3C4PUePAu15xfV93qBWx759QNKv6uJveiXmhH3FnBsRd3WgB8pcKpjQ34pVrusgTKEZ2uYcVonocm491RMZN4MHY",
  "key31": "A7vA125ESihpmH8rMShM2L9neS16uk6sQRcLuQnmHCRkJSJo5KZbYdorqcDTQZCZzEqCJbhRmR6pZCPPUKFWBAJ",
  "key32": "5JMfo7TiYQAYU3ZJG4KAF1p8M4VRUiMdctsWuwF72TrtHAdb5czb23u2wQEsYU3LkyAEojL9JmvmkVE8MSKWtTnb",
  "key33": "2YEqNQ1F93R5zc3XYmCWcgE6vFxM3MZAeuA7XtRmdxtD33XhDoS68htqcqZJWUFaGmcGsRTAe7d3UUisnt4nP83g",
  "key34": "5BVBQyU5Aoq2asj4b5zMjJsWptKMmcZcisqVM7Tmcnnni9ba38itH3T8Wc4RR5bEdLkD951Ai3GskugzGShEM2kX",
  "key35": "2Nt4uJqcACPP4UgMCLaQPu4w9SQeEbAexkjmp1qnatLrdS8mANv2XAHz22XCidBv6phaTEwbazZ334iSUfEonaVe",
  "key36": "QQynnwVkub7x8kt2fA6wziUvEbxiwB5C4LwzFrUef844CXXfMPPkoMBUFNz6LuPzRbjE2Xzzwe5MjZJaiWtE88N",
  "key37": "3zVUZVjLLnt2yaNkgxR9ryH3kwnWwV6kmhgzZFxoZPruGw9aA1GJ3HjfTMSs3Xmgg5MvQ6T6uhjyRVM9UzptSFj1",
  "key38": "zL3oCdLea5iZkdaxRQKK8F9MMMyVCehRXYBqDaQrNxP6wbNyEdBh5D1K1QfWV8XE8siRGdD8XkHdpYDmcXdLDVS",
  "key39": "4Dgj1P6XunnxzF5mz6WyY4T7qND2x8hTnYQgSncE77viX3FW66V4yeXkQiqBH6nxZuU6nNRYxAdHZpieHsiBQdq8",
  "key40": "op9SbPwWeJb7d1UTn3UutXXGs6EQrV8GF8VcrvDQRGu16HFmg4gwAKJnK4AnZohAuXmvoMiTx9qChamFoCdwgLu",
  "key41": "3EvSvaMDSxu9nG32NXNP1mMxUQjQ5AzgAuEgKmzdQYZfvGNnDRAYou1yDPcJ7NqpVfKqo1hwpioDLUweN5erUjss",
  "key42": "3RRH9uaYJXwhhK9uuaDP9T5zp5hFuUSwEDTXMYhYYDsABZWqLErUxd5Rbdtnh4KgMcdW1iA4vdjULrC3jsHft58w",
  "key43": "3BhubgN3sikdqsbWvSPWwtP9L61C8d4E6nbCyP5TJ8VzmMji6kmEqzwUEdyptGm94WMzJ4ntt5QL3uVBr7noP9xR",
  "key44": "4W54JiYQpGW1x5br1dhyWwYbCwCPnL19kFu4gEgRxxY8tVbKQaiBaiHLWruKkmd7xtXwkRaUoeDFzoGyxBD11tC7",
  "key45": "2PZzoJMRTvN5nCtna2you6bajRTbXfVPeev9VzH3BgkSA4uyRDbWu23ugzpXtfeVwCsSfERyi6YM4ZWHjBne1Muw",
  "key46": "7hCa8n4b5w8xvSuaboKktkT7G86GroA9MoJzLx8e46AJWj8F7cFcYx2xihhS8pNynErqaDzE5dCCJH3GmcPeyFt"
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
