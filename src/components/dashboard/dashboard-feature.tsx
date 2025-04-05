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
    "3AqGLXmFJfap5jpx2LdYkfnFKkLA2WfxCJ5Bid4gCvTVvFJAznPGB7FHKpvRn2GHLkwUdJt6GEfcqYvN9pFbpvwS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21NyeG17U8iWh9uyNwAXFsk57HPrJEXL2rKuGnm49f4SiNTV3ZHUAu2kM4UAgpVHGubX6MqTpXJ1kgxYczt8c8zJ",
  "key1": "xnTC9efw2nUAViAAsG7au9wHpvkz9uSgoUXHcQ7BjNwE6L9EC7JxM26rHC1EyxcztP4rpx3xCSgo6ch6QtJUkwT",
  "key2": "3xAiXry6Ta6kSMLd5MJUMvpUZSWSHkxQ4yqFYf6aPsCubp4KqMAesTb8wNpsn5kGTUgVY4RcDLTHM4F4uH5XYmjW",
  "key3": "7JQmdeVomHCcc8z9ptofd5M4mwzjcxNYYyroFMyXBsdFvbNmGyWXEUUmAtUhyAeuyDyqQ7WNRoB7f6Qhcodf3Vv",
  "key4": "2zotbcYRv2kHcT7i9GMwDG8FPRgnaVVdzv6LwhRS5P3DX7KwzcVGB8nsenCPPacZoEERH8GhMGWFxodKCLSYHEBb",
  "key5": "45ZeQKr59MrjoH4DMQKsx7qJz4gBCqWsYNKmTFRQSXfmfkUXTCgyGXFvdHVqDS3tS8A5iN7aPSCuzkPouPLkhLnq",
  "key6": "3iThKcGYetQWqGevaV5N665WrE3Xv8KFns5LCt8iRcbbMEcPuKHammbQbnYqAbhiD3XrkDwCX2KMx1Nxu29HbpD1",
  "key7": "4FdqLYRCfkgVAkxCFokukCZ6QcTpuhtH3Vw8YRUTcRF3Zk2A8AqFamsRTkAJfPVNQTAS9D4UinqKDko8EPB3zLCG",
  "key8": "boqWJ1Nog4FjKRd1vtRdH3cnzpMjqwjFc6SPzCzLJEkCaoCjspho7nPJubpCz68UfuwqT2TFba6hBeePGqNSmfy",
  "key9": "3LmkXBiqCbzGyHPcS7HkxnKaxLfrdNGyLMUeDRhhbrgZQZ6sGDkhZU4JX5tAPEJAUpACYVzpEHdRRvJgBrcU3uNF",
  "key10": "22HrVs4y5cLhPyrbv97yYXQDao1mT3AfNkR9d2yBQy8XHVQSJrAFLVq94ex4E6Bhogj8XpyrhEyUAR27SbNU9VgL",
  "key11": "5yk5tUp5gCb4ejpgjRjAUYn2BqyazFq7buJDydCpH1gNugS4Fs9qj1chgfY3v3yfx4Vt25yZbqM7NDwxF8SK4Ju3",
  "key12": "4XqTyBdYJ7pP5QZPFPr7tcoFC6KZYcRwZiZL1SaTrQAdgVZPnLrBJBGUhWA5rW79X9vBmLjy9mnyc63oJ74wVFve",
  "key13": "2VRv6BkwQVwYEGe5u18X3xtY7t1uR1bFVmH7zDXMTNFHvYwWPy72yZ9AsD31Sgj8gSWKChEvnnusXcXpqx1bkUQV",
  "key14": "5kHnTKtWDaDuSxxDif32Mx4Bjy1RB2zaR1CCGJvUXSdQNzre1AaX2owAUW1Es7VJzJbfuAitUNoCk9KoFGPLr1vD",
  "key15": "4YUMKzqWgspgQSaeYQK9hisuTeumgkWUKPBJGcfMMFZRGMZaAVFov4iv6vNDZhkh2PT4VwvDKBkJYQkP4FYwZxee",
  "key16": "4Z5pYK28Psum4FFNQQfGSMp5r4aVTqvSuP58vXynB6rmL7fGLzhPaWPHmMdFYDjY8rWxVawBNVmdJa11iBpj55Sa",
  "key17": "kGevcgnDZtuSYxJK7AfWiQabQMaTiyCZBRsoKa21JL2ttcyvnVhhbbRuukmSRV1w38Qw2YYdjJt5aau3RhWwYS9",
  "key18": "QpqU4HkbDURcVH4gkxgcDTHjvtmMGsasGvcCF9iQ3r8R3zFnPwFX5BPFpdo4xBcexJaVsXAcyXrXUWXksWj9nti",
  "key19": "2VX45nNyUQrbFQW2yooe9NCZeXnzkSF3zcVY7sRfS5w2mn5cjRqjqNuFicq1FhrWQZogFQGPfb7xXCVMykpUSkCa",
  "key20": "3NUkNQ8ETVakrfBVj9DMzur5xN1ayvfuixRjB2JMMqAGY6ZhQ9Q9jywVaw7tFjr3eFMxor1EuULtwznzYLbEXPRy",
  "key21": "3fTZ8RXp75fjT4Fho3PjqFwtdgX5spFGnwdfchoT8R6oLGAD5gbF2gL9G5TKrBXXmi7PAQSVdb28L9zB2W6BBQKB",
  "key22": "5bc55hfKnTzstHnTn6fMCoskxfznGuyrUfn2HoFKZN8UAkhZXsBnGJgNczBjHDBagCngEckNAPyjrdbJLEXqz4ND",
  "key23": "2ZFnefE1SoYowADmq22bNjQehUDvnJy8KjkfC4vM4F8wS8S2hWtpyPaWMVMsUTMMsDp8d3QWK6daBcaDbkncctuw",
  "key24": "2hV9jccZsCUGC7qFUX4Dma99113e1Uvd6aLzvrpqDGJaGjLEQRmPtXKhCUDK1VSxxuNqxqee8AMQ8Joo1sXAiYP",
  "key25": "4tog72USbKiweubw36kVk9AuioQrMdzLyuhPiJ7oQUuPTYBfT8FTUo9sTFymDRbFXkM3Z5uEwhMeMVMTEsbwE1zS",
  "key26": "tuu1HoTv66RuUGWK3DR2FQgcmqCmrdGhshyYtXdmib6kvGB1KVWsajZcCByjmZNuREkakzZpd8foKoFKoxvD6Qg",
  "key27": "23KzNtDtRmrxZDtMhSa2aeRNVsTeNZqvHZafgsNGdvaahyNu9HVA3Au3epaMbq76Yx4xPGuB632jH6AuBd91Wp5p",
  "key28": "29TpKa7KSRFRfqrchxcxVpe5uRu9n23Jx1EZEHaE4TQSfEKX2YgWnuGCDZ3y4q8GTBVQ2kT4H8nWkcDqAtjjuRqT",
  "key29": "4GV16AaApQsdz3W7uZo9SZE3A7vza8ZHvNbZnhLnDyh81u74XX8zexAn3ttuc4gnr4nPfBBQBrMBbnYuVHxf5uTY",
  "key30": "5BYXF3W8t1Ef8KATMRXoYRmreYeFKvoEX3i3Drqo7UyVq5LnLg8cjXHYjg4S5gZJwUgLp9oMr8keougVrgNMrn7x",
  "key31": "5w6XcohNT42LNNh61eTdn4E4j7WKvAApmje21nBjKcN5gigPmxbeCfztSX4zaaeTkgm1sXAd9T5pdu5nFiPDym3j",
  "key32": "2Svoi3sRXnLDQB6QdubzXx6w4zACQPxCw8DeN9GVbcCERLYQw6V8n4jGPRhreoFUjZrdk9tiecMc4mNj3TtK8Mba",
  "key33": "2pDMHQ2gPHRcKxeB9eoWmwYTLLoTCJ3Z1taSMSTkjwTMeYJdZVzt11rYWiR8UszQSdCC1qnj8rj3t9aMCPhNKgcv",
  "key34": "FJr6HALPuNmDUvHRTt3x6sCT2x1mUhCxtbp4Z8TxSr84ASqfBWibX9wYdiDRYcgTfri3L8WCZeKsnsMiJa3o154",
  "key35": "2CWGp64MxmhMNgG4Xh6zekEqvT5xkjbJERWUz3KuBxWsEjDFeCBhj9g98GN26GohmzGz9Rp2r65gHkGHhfnGsq37",
  "key36": "4NqEGA43D7zuqbXY2A91RRQqiUnYSuoAZiXWReHXLqVW5Mr6hK4CYcLZKRMtVNsR37U5Qc1e63Q3QTmT43f4kCgD",
  "key37": "61KngpfKg3BihtKVsC2kbPNJ22LJtwWfvGtxZHRaUrfPw2tZo1LkJj95Yzoos4umJJaUZAaxpMDyzufqiv2DWKvy",
  "key38": "5LTXUK4wrcZkc7ZadbaJxDqfaqmrhAQn9oiMknxvDpAS227YCM411tCsWpt752rmd5SuXFZnT7CdjuknMufvZ7G",
  "key39": "5hcKjeGUXjroivDCBk1T9dbjPEVbU9ifRwtBTSevcM9LKKnhygEMBYSLjyusJ17Kge9oPgn5rrn7BPTVeRrqvqJJ",
  "key40": "4AiDUrGtkZpssJbJSbUvpefgjcJSVKGkrSSSCdijmqpzhmaPtgaqKHhUNe9yJNSZBKE9Khfb7hkWrLsG5ZTj3xHU",
  "key41": "5PpZqwxeGs6oJpTR9S8wXvEz3mrVnGZRmaYHeNnmQd9Kva6Rrfs4QaVBXirg6QviuSMLfnYcB6MxyTdbUSMHJuTF",
  "key42": "uxUqvX7vkz2KPxLeeCpimr7W2adVW6JjU7T7XUn4kUJhkQDpyvVcdbvD1UKs8TAkuobpTgWznyJ7vsYaTrejVnN",
  "key43": "3idcvXqSgnbetna4gco9gPtM6EjedHaJsF87ESsqWW2CZMkJJ7iwnLvAmkd3zCuchhJHFFVGkdmgDU8YD2vXAnzn",
  "key44": "qzbJkArGtMQ3DN29nbQUtoocWcXVvuTj5Kj1ZPew7jHD1WWeTSve2hoVuWM435LRhkGUiargKLGRjM9Cn7x6YnM",
  "key45": "5gMQVShT1VfHWKHLLS3H3UAuqYzecY3S6dnG7aVdKS92XcSQvwyuTYBUeB1wiVSWNsYTw7pHvhrBSzGAryrYbVuB",
  "key46": "385rRx2wXJZR8K7My7Wz7963kp2CBw1M7pNCuNucyesYQG8VHSPjKScGCAKxRgVnhtXc7L2bVktzN8WaujPc4LTs",
  "key47": "3eku8oYN7GbLxTwcTa11gX7fTAWj8KENgPT19MEaPXRDMbhpWpHMbpKtsrromxd1byFivDCEJPMKtSntBWQcxRUW"
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
