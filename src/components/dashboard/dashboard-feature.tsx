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
    "esEr76VN5ThcQXkS9NPbhDaSb7zQXeBoPncTEtDGRqQUXw8QcZa2Yq97hbW9oHoDV4Vf3tv633Mk6p4aQ5CpGFR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BZo5cCR1jQHBKSnpnLEEPD9DEdJkezSnQiHtpMUX5JSXFRiHaqLCFkpC3QW5p8QuQTLUXyebh9VoQTaCcFT3iz1",
  "key1": "5vGkLzDCSHwyVTAZZa1mAgh5g4cJvJ6SmF1QmoBxfg4Jdduge8fN9h4X8kbD8moGMtgUqTL9GrPMn1ebBFCeNHXA",
  "key2": "xpju8DyK83n7nX43EEMLBjqEReoZ1BMzxDMn6xtXcJTDMLy4n7RLgpyW8hcpK5kDsLXcewgzTqD6atss9sfmkWp",
  "key3": "2xy7XoLqpwyBRipr4YXtWzkwVBRawFQjyajyTqjFgcA7J13XRSZAjkY2wZjU7rULcAXsUy8qV4yKqsqyvCWU1tTi",
  "key4": "8SGjA4yGMjVZgPrbFh8fW8rogfqL84nci5kHMpfr2h29Ukw4o3Lnxpw7CP6U3RkcNB745dYEZE2JsDC5uqCLjst",
  "key5": "5igETvQrZRVX15qktB74NuUdPYW3s9AqJeKAzajXgvYxFCn9UnTE4qETj5uHUkthatua7p3DuBVJcdYtsDhAZVLS",
  "key6": "4G4XisPnY2XEv9yDZV7SKFAXW8snbv3j42n7xqyHTXwE1vCcTtYpFwNbP8NCQBsy43mEwuuCgvgXocn3sk9SqZLf",
  "key7": "4NAZb9iQZCd92CMCMwcx64EC6m2x12dUf2zrYKFQLXDr9f4feuwpbPoiPKfsXC6nty9Ti8bAXUEVCAFCo8hWiGVx",
  "key8": "5DBa4t7Zy3FUpPthp5JwjS7cUSYd76GcWjsUf1nhAZqBpRYpCNoPTYSQQm78Un3XYHbGiMKQNtvzQXruHEEW5iv7",
  "key9": "Dv4QxAWYwsZafqYtoHrZwHRPPtjHaYB61SX9KpVaQt5xDNv8EbhxmW7YC5Y1NLRzL9wsexfr94LVeygN3jesorm",
  "key10": "2q1uwA3rym3XXrGCyRzi13TbPZ9ZzQu5tDPTMpVK8Pqj3ShTyvgjJhErPvvSnw71gAqTurZhMD8LD1xyPHzVwYMB",
  "key11": "5Wn2sL22wtNMNNe6a2E7u45LWmCiFKbeN1MFjnNGRUwHiRc7yqc7KqSaNyvH21wY2XkiCkqYgaekdvd48EL4nhwZ",
  "key12": "5XVY534bH2yQaaNJoz55wtFjuT9U9irMARNbsdKhCeEN3KPptURx5sy9PjNtfzLnBWpeR7ZEHyWeFdriCF3WfJfy",
  "key13": "5kf95kkzKxGBzNCMZJSgK4CHGA3CbkmRHCc4T2a3Vi7twoUvkouNCKygxqb2oXhox2JfogZ1gJEc5paoXGSbL8fS",
  "key14": "2P32ALhThJpNvMtucbRegyF5fTA8jL2oLzZ5Pgo4aAqgwgDJuEapPwsR1SVozTyZdYS5r19LyjKoX5wDsFjZuekU",
  "key15": "23oJCf1xmKA7tSLZoXnqQLV7wTB171QjNcQ8X2WT9CeoPHQAKZVNzzcdRUBaqfN3ix1h3f14mXsoAbGubFQkqfmw",
  "key16": "4eH8VfD3BPpsTY8VZD35meBzdesW7rhCzM35YVETqnw8CcyWvfkpjBz2V9ePWWWT9GxpWMPBzNKFth8s9rLG5kXC",
  "key17": "3CJfpTyR5kXChrfBBG48UbHrh6C96FvSvEfUHQEfDG2a346V3YKrAoWtghj23edh3C5RAEomH4FHb2rtEbHiFCLr",
  "key18": "5FwCKdcfGUMfLqNNQdd3zQEyy6P1kjDfPXzBTLwzgy3yLF9vDLHaMoQcEHNSfwu3TDmcHv5ya64KrWp7kqQsvPAi",
  "key19": "cGaFAiusEJCDRXsE6g5nHzYMgQ3SGBniMjz1ZbgvAqLg1p9QGSutovbsRKo3E6asrdXtwJNnukYcdmaxUxCa3mQ",
  "key20": "4eVzHf5XZJ35Ya2EpANjrFSWZYw5BaC5D3ewdGEb3HpfKoEwf6wmic5RWvyR7iJ1PLszQihJG3D9JU6CxmSa4qUs",
  "key21": "4aa4S4hCHQchaHxWHZrVfw339WDaGbNrBzeZgHRc43dVjf1cN6YvYRJArhs5T7VU6LeWA855C7GgLG4Mwfn128WC",
  "key22": "32uKGxGJMxZrRX3PdRWXoReJ17CA7LnNwFB1UWKPSExa7BuDu6m8Wnq7ekZjsMyUmPiRVSwiFjhodppYu5nCHc3T",
  "key23": "2kZYoDmo65UFDhwuaVsCbxH17Aoj25pz3KvYvK3YXEAgNa3SBmRu6YXm5h9FRwUtLQn19Yd9tE4hhBtVczqdWxBn",
  "key24": "L4GsREmPzr7b9TjaLPuoPEZi7qtrDx8uAEYUeNCPbv9dT3M5EofPPafD5wux7bp1qtf1uis2f23cX1C7ByaDSni",
  "key25": "wMPjy9zX4BJKwxGLWDy1QxmhMyqHg83H39Fw6k7BPj94MJ3tDA3yAQoXKkDurtLJQ4VGHiKnRhxxh2n3wKWxCoK",
  "key26": "4kNY1n3bjUvJCv2gbR9J6Wm9LwqAkVg1VspGnnEWPAF7vFLudVRntFb6ZccKx1Wqnn7r1r7C9DTvp6k6TNdbb43H",
  "key27": "2oGWSh9zZJvKFXWEwzKS2jFJ2y1tNJJDHznYL6wLVpeNoHR5mdqrNdRb7aspF1jPcdSVm9fwLuyKoRmGZtm86idQ",
  "key28": "2WJBqpWjatFbb7iuJ9E9LC52H8RT9TNEVcEWQRDfX7DTSx16apT99qg3Fwk7CEmhtpzX2URb2e8GCye2gZccEcz7",
  "key29": "2EGWTTvRYBM5JTRURidiotsgeqpNc5wpdp1RY6v6hdueKpuxqBwTA3dUrzBd3wKdnYRqDsATf1wmXpGY1iS7dxkK",
  "key30": "5QoacMtCYyDn2bMDcAe1vFZPEGHZ8LDZQcqXBibe8rW8G93vmeGLbbS4bMBaL6XRdUpwfaS7fpqjpt8Z5f3AqJRJ",
  "key31": "5M94X1ffK4bSEHJA3j2oBNBVPchUkioGWvRmFkQpBFeyanR5DAUCNLLo6FhqAfGbUwbGoFdKx5nygYQ9NCLgDR1q",
  "key32": "245oMzuaZcgLyjFSBa9aToaHa2jpTLfZrP6rwzR3AY3Nc9dYfhHASoJd2R6JwyxQ4oYUFWn2W8ts326Y3tpdW2Fc",
  "key33": "3RA7kXUBbzznkF7XMtxNYmjvRQeRsCZ5boHkYn6BXQiiccKPYvk2sLMS1tGM9WghTs32P5Vdrc6n1GrHGiKwqC1M",
  "key34": "5di6wW8YWWhGdLL2o7jLoRP9iGCX41PtkatGFT42viC6MQN5CkRrSQS7km9rfciN8hyVySAprCY5VuyrceEJSDAU",
  "key35": "uTEq8EkfcHPCXZZp993hnDcgohfRBst2zDXWJ6Cw32NAEJCH5kb3kLj24Rh7q7CWYoDL6DbARJ3CN8prAcQZ6oc",
  "key36": "3CB82MAdjgLnuwhPCdZ6oDnmwnYBjLgfTuVfSktCW5RDMLSwZFEe53XkZfTdUmxGR8xk6vPBLBi32RdUdoBQVrbB",
  "key37": "3A2WsW6tM8apitZtHpcPFPbGsittfcdG26yCvU5xyuu99aM9seRyeFvzZ6qWxdpyr9TZGJ3oELiRzncvVhsbKHdX",
  "key38": "4ztMPKKyER7UqUKJd2Yr76qF1kFLX3KtiFQE6UiB8Y5itNRiUVhgAGWsHH47wgPsU7f8ukBiRD2Uji6Ln1sJGkGi",
  "key39": "4ZHv1gupA6rraKo9Eb2zUu9iyqUzGUsT19Vb3rXYQDAZTBKz8Z7e3Be9YhbiVT6LkVoWKNj8moGz5218x45fZ4aN",
  "key40": "3TBkcsuWqiXMz8ygZmJQNqePudr5MC7ZN1c2UCrmzBogSbk5XPqwwe6NbYdX5eXtjkWBKPtx6B8deHbtgAKqzeF4",
  "key41": "47B5KJpjeNLZGTbLZd6cWFZTajgDidYEuvZkTbsvjKSL9bJG7RfeyTzbT79LsGeKk1n95YqAcCC4fExdXBw6y42X",
  "key42": "22XnVZevEnn7zM8TKTwgioMkeURYHUycRZneNiZDjKrRU4LcR36xhKA69EwVaCjSk9BaSnqbvqJohFRVFCTpcRDU",
  "key43": "2jnuCgui52Q8D242CCAxStmzYDm6eePQFaVERhf7HYxSyrU6uMzwXhCVYxCfADAsZQ4zf5sN33PnnnyMirZQGLNS",
  "key44": "3u7y5awii9sJU7mWqLu6AQiRcPxaR4AymbAwcqR3ZH9rxABvU8SuTJn7uf9Wdoj8oRJGZU2TYYkFpYk4RnLfzHMk",
  "key45": "4Wx6Zxrv7qnAZq5MKAx3tZFQofLAbjcmmjMNmJtk3oDhVc2egksao2Ptpjw5koy2qMQBti5RuVmtPSBXTS52XW7A",
  "key46": "3qp8yyyxuh66erth4TJFgZXUENkW4qFDr8hEbPWmEAibdNMW4iodKyBnTypgWkc6rJWUz4rXM997xEJZALVSNwyN",
  "key47": "2TGVMTnz128GMhEDqLUkDLSb9YF7bkoR6bbhCWMX5BaVhnrHeGEdhm7eUYdqQ7H4a7mTztwqG9E9knVYNP4DaSdE"
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
