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
    "4sMJdmVrZdTyywThYojeap2Ro4Xf64b7G8G7evphR4gK9rfQmrW5ttunEt74jFDjXp5ZAAMJijm4xGw3W2hNMBE2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27EcFrn6up6NMBoaBBkXrBbb9X4gYLYs9cPBJyomqSp2aqiC7xcbsrqYWdbTfTcFftNccdJztCMdeb4rYBxufrJS",
  "key1": "fQCrVGevQYReGoBeNsAu8sevxf3YwuJrb7zDB9WK5Bd5L3ZzB9KvtKjorB2hpk6jrxEvoKbuzQ5D2hxMpXP9JbJ",
  "key2": "7cRWd3YLSgBkQFNDo2Hk8Kggodboxm7iymUa5GvpcN1N2JiMBoYDJ1vH1nLbnVsJpXiMcKyd9EE1yj3AhM6McRn",
  "key3": "3tQGkDwa6tSQGKpzkbNzGV2WpDsdvYdgG3BUa9J3Q7r7osTbk2tQCRmJZxzF5MXkN8vuwk1r4w6j7mMeh4HKXctX",
  "key4": "48CZjuJRyHcWxpJnHu1hbrLwvCyQJUpoQZkcbDmJpy44sKB3EVYV4tRwbqxQEBaeW1gu4YX3XLFJr7JpNKvMazBD",
  "key5": "kbmtJ4SwC8sxXaae35yxaWvXyi3dm355K7HH6gdeCQ66tgEXhWtNeWpcapS5Hhj41UpxaYhH8xHCXYeqn3fsNwN",
  "key6": "2V1SUUT7j6R4cAsekW2UkjSoHoApLEGm2dssm1QMJWjZQ9mHbLHNfSLZcL3wZ2HseYpnZt7fQFWWeq1yyxF1GjN5",
  "key7": "56ECpXda8VknZyevJ516cLMAB6FqVjhqetyHRyNHTiDnpbCdXe6gyEW1qixYhNrEcWZetkbQ77RkSG1dhRXRFWb4",
  "key8": "5brfw1q6wGACmGTFsqGSpW8ecMzuwLxNAaBf3u3Z4WFfYF1gnDVvmYCSHkTpB3YaVemD8qCzQwQSaC5Yhcgj12Vt",
  "key9": "4Bd22a6Py1AL7daZ4pkWC9u51LbauteN4XfmrPEnUajLd19ALMGKvjncEGH11KzmMZ54G6fafFnzhcCZR6hY78bN",
  "key10": "2a1deboUkkagYnYhtUQpjbAXepqZzttvWt2vxX1tpDjdoVAYKToxCJFjL8oqjJVvKPEa5LRBUqVZH3ERyv12Bz2u",
  "key11": "5K9yK9vjvvXurANZVvEaTZrowi7dnuaY7n3Yeqxyg39LPr1CqXD1rBnviMf8BSti2HqXs9cARWtg9zM26Kb8y9cu",
  "key12": "2EfEJgnMCuyaaYFPU55h4rQy7MiUmKi3eoXkB9dnyKm5qyxncZpoM4R11WN7vyPyyxE8zDobvVDCdWmUbN5zNFL5",
  "key13": "a7A3gKRvNWwRd8ZDK9tgg2SVye9X2sMv9UYizVszhv91yA2svVXWBFgGJN236cjBcc3bXvqMje8tU9gcU4eJWt3",
  "key14": "5Wg8S4xGZQmQcPeSZBjUMuDxVAQLP1NaNLCE91FxQJovDQpijShaCyZqZWQLTg4RicETFmjUNHuqQ2HgE6cRRDus",
  "key15": "2XqvWS32XsvZrk8ML9H5grtfZo4tvNzaoCrqmuM2Lcjfcw94xHL48nJJjcRJocpFapFdTz6swLrU6JYvc5JhJaoZ",
  "key16": "3Fcb6iZBNagTkos2uXdviXPEdJev9u83NPbZMRHaZSvVPTKoaDsHV6vNXQ2KUg7Bvx9RReiJP6g6w7BsWXv6hR3J",
  "key17": "4povrXbp5roo2zWuoxn67SNHh5QTFqhDnZm5ShQWJE4QXMzQrrjcrtBsRkTaefChTsTM1KYtip91QP5tHKB46YRK",
  "key18": "FKRoMYTk4hYjZUCwnTmhpPaSBVVjU5NZvAywF87jCXkdRcEck3g1rytEwcPtAX9UnScjRQ7RD2WV3U6crsqZvke",
  "key19": "49sMsL7JoPuqzTLjzYKZHzpJEATubWs78pVfiRu9XK2qnzuwFfGxcFALqCTc8Py5JD3wLxHAUipFyB3LDaCgxWTK",
  "key20": "2eKEkfxPV4dVG48VMjZ9X52dzSC5si2vVNFhUSbsjYUTPcHPePDrWUCsEzk1n7m66LjU6KsawMujZPezbxzMEYNT",
  "key21": "3KxNA4jwV3MDdU2uXDSK2VUaQTmVeSkSxgDfLK4tz2RTzq3HrJJ4e4qV4gT85uoPCR3LSTXxiNKLh5R5Nmj4MhRE",
  "key22": "4wm38axpka1Mi9PD78zvDVG1h49c2Zh3YXbmo1gZY8ZoL44JrY7EWJA8xkJxCSwhWEFqjstcnj6RChPvWMCbSWcA",
  "key23": "5djQSZjEsW3V84drmeTFgyBhaqJw6aq7Wh76b5qom4BxeqJPQaaEK5TRMMhENke7o37CBbba5Sz3pkpBYe7SnZJE",
  "key24": "4SHK8BkDJQFQ9F7qDsdzWWb2VT7amGkYnhyUnohzGiezmp25d7CPpieuGgb4tq7CumYqVuK5szsqrsp8sh44DxVP",
  "key25": "4NKxPG3KxwhDqdA9VvEvLx9kV6k2SdUj9jvUqTw9HSEu3ct9xE8sqJYa2oJjQ4YAQfatozxuoqbuvZy8HU83Gq8J",
  "key26": "5mT5bZtyb4z376dGB74mNyXRPPHtByV9WVz7ygfbgvoEd5homxmwhFFznYEuNfTAAvyJ7T7Z3DAzv3ZmvCh7Trn5",
  "key27": "Auo4h4iCsb9mWbVSwEBzJuLK9muEY3UDUdEMixxyLqAek2NnkXop4shvqou3oWcGeGNgSkBGewRjYdcYW7bAqmd",
  "key28": "39nu9kKpyZmn65q9KaywA6ZQ5AUwcWmZLJZZzs3sjMVuZ93Vue5j6Bc5B92KnFUXTYPG3E6zNiV5CHwz4wxCL5L",
  "key29": "UbTxQMuYevXmgJWQzBRFE1fUyJ1g85V4JBCMuSqgFEs67Z1SPka85SNQ8oVggDLVsioyCug5iWj7g6gwFTRm6vi",
  "key30": "qZQGPbqmNhnHUTZoUeGSyWqj3f6ARkeXfFEnmRVuwmQEPM1DviDcncSmZb4WHaHEkQ6KTEspeBApmcwagtt1xXh",
  "key31": "4naGiQ3c3eT1sqdKehnXm5RLSyQCXu9XEcpiHLqzfVk4tV5Y7EwzPnwMfQPCtozEcDkUVcTYTg2iyGAtcCNhSL9d",
  "key32": "5KPVMF9z7NY25peSscsd6tz9e92nf5gVjdxu7MG62QSkm4BFaTBCPwkFDMRbYwNsinYgch7pCiEgfcs2dvXk9a5X",
  "key33": "LEUiLTSWs8Tc8nrr6XafJ1B6GnfT9UCdPW2eRePNc1ETBDVQDMUyYQpnWZTZhMQE7L82onDrRdvV8dP4dmNBi7R",
  "key34": "55cZ9ANySdaD4dXA1CvD9P87BSxPCGpx2YnD1tac1rjVoyniy5xDEk579geB22d1ivcGei7beytnb8RqDLzQBV4S",
  "key35": "5MxNcKqKRoUQtti2N2LQwvZHHjHtLggoQkY1ugWWEagUXhMEsP9Cu35iwA5AUnmnuXA5fH6xTK6yQURohVYEjyC4",
  "key36": "4qnme2bwkXYxbbn1kCEj89CcQxGTv84nNzkt4BDVUKhN3hBrdLhKmvjXix8CJjTYJTq3m9mK5BVWmHNPdxgxHkL2",
  "key37": "iY4YwY6McpuJ4M6j4Qiiwsz8W1B5YaUfWq2pA256RN9khYqjkWjJegFxgeiSiJWPDnrycCno3Fq7VrQJpnD7rWK",
  "key38": "2JRimGJbzsnGeEdKen9LRorfFN7HsScjEv41UiM4d3t8PWNrRS2BPMoRAu5v21DaN8iAeXaze7wTsCDTiYpFWvP9",
  "key39": "29YRXGswKciJwoeDpmssfSaSuZgeL3E4NmBv5KoDeS3dpfjQDtq8tY7yLNcXX3MnZtFjUyJRQpqw3QugL8e93Uux",
  "key40": "5ZH1yDXWvTEz5gymZ3Ezu2eDVompDQNXzCkvD9VwnyV3CR6ZKyDYiK2a3QWXd7quLgeMNnn9g9igjp41ZYT5QkCS",
  "key41": "2jNmhwWNmhYhKLHgBuAAAFxqZubwgpQbT7s6jQqsfZd2rbtriPjEZ6t7pk9BaqrjhDZRWhcnRwTmNukETtNasfwn",
  "key42": "mw8WHtvj3ggGWQUwomLNE7N68yxktg18KHiP9tJxbHKF8rwx3FgtX82ePGfQNonzun6fXkEaR2cXKSXDttR7E5P",
  "key43": "334pAPesqfSg3y1K8yZp6zDwQhi4387ena45Y4Gip6ZNcGEqKjshBhkSjK9jF4PYQLgGVR4a2YKHKGhNbFjjME2C",
  "key44": "eMpWsn57zvmMsys2q7HYsSXoZnsukVp5C52gr9aUwieVZJ6qVT3ksVo2rfEp8GinxmygQiSiXJj1N1eA3crLBtv",
  "key45": "3PDicZk6FJAH8fuHkoFjHAZjyezQi76xJjc2KkiLT6qjAtjduL3Juc2VqFezeQ5mJRfsTXwKqMxDs7ePEnAErSoK",
  "key46": "2UDh991ekfYnTWNPhuKjXXyBg29QrmBZ7LFUNU55qzBdEi24AfR1qgwUsiFK3XUh1SH2XirLSma5RxAjdZTmRMTz",
  "key47": "4VHhEVUooXi1JcVSLZzJSoHLpG4nbetyH7W41GGS31wUz1QWC1iH8TV5hcmyqzbcPzuXWWNwBEtqZcBXH8cnwCJ5",
  "key48": "1Gg4zJdPkjFcDJJn7X4ZT8TEcrQYZo7PrJdSNJNMbjstseVmTo9RLBG7KktsVWfJxHXF2GNzDBzixEmbmN9kUgT"
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
