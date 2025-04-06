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
    "ir7kJT7zr4enpjmsXPBPeH7KWMmd8RM2Xgd3TKjbmxrQYzHs85obz7Q5jJ2QpHkPYWDU1Zjzw6WtF6EnobAs1H6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AATLyZWvy3RACorE2cN1wPzPZ2YNwbcGuZmELFJszHzZX226AFDege6EEmNGJwnNGR3B5T4GuAa4TKs3JUK83Jw",
  "key1": "2sq5g3phsJcjYBMja1o42tdMpsm8CcF775QkfXSckvBJb9zmZf1LZ1zeoQd3vn67GB3jqKU8zvXvuGVzPvG92kyM",
  "key2": "5VE1TGjmHNMcbwXDfUYH9XeH4c1fUuUoAiTbaKK5Q715URyr9gS6TmiEyE8LbFnbz8Bg6VQpSVfDAs4xVLWcxrBj",
  "key3": "4iSyizJsKUHK9tT2KSeNaASxyxqtrG2sLh5ZLRxfGSaH1PT6yoerig4neNBD1vEwcjxxWw4CtrUv3ooQBg1LNmfo",
  "key4": "3EoSyLjDPstAhV2PQJjbAfKgQMVQviBCwrfJUfdtCowaFyHVqd62fXmYeVXwz6ftmJSCCMECsNLmyZ9PidXq4mKt",
  "key5": "2MxLFWWuuD6td1bygs6JSE5c8J3pekVjGCNBa2p2GktNTchn6VaF6X8CJoS7KT6F8hG3Ay27Gf5NMXewpXrmSjAv",
  "key6": "3cPc1StV8i7mFqiH13zW7NvhSfVuXTPMPEdewH9PEtgmPxKDhYpJhiTVHT5rhtFW1Va5cnpX5rb24wD5TEmMZswW",
  "key7": "7HtVtfCMeSgHHjDkpSHmcWqG3Tpt2dmorq1X8dAACgQUyKwwK9QznA5CCn456qD8HJ4a6KuxzU769ChVmKE962W",
  "key8": "5qhxyncBkV7crLjrctf63RHksWXChBprcEnxogWuc3xrYEQ491J2Fh21dkBvmauMKAGGigcKmT5UWAvT6qDDscVm",
  "key9": "4uxXc4epvYgRkq1mDum1PrWxyiVrtzrf6pAb9SmNF1M4xhPanvKofegYy86K76DfkFNP69EfazvUPHX75fuwYESo",
  "key10": "5iWzxRWneAVuPWNh3ooSBCapazmm334kzqn3yrgJ1MbchLgmchYwWkvyt6ni58Ny7W3znhXpetChEHE9xvKCu2Zq",
  "key11": "45znrQw9VRApXtJ2DZh2QFiXm9EuG3L3CDWSN2BfaUCQC7pcuxBFt294CKLSYjdBhzwZFCk3J72asDVVtyp12P2T",
  "key12": "2X8idnzaeyMnXKBWqHQzjpFPrn7xdjgg68gBEymQSfTRSNZvyrvjBR5F1d7ddSxNo34Fz7JKCgBymgtweqiXFA7N",
  "key13": "5RSwUq6GKRSpuxitv5nWgdwN1CBmH4L9uyYNAF9Aw9WRSaNVRuysx3hnwF57Bqzexy6MDLHF1dBEgKKma8hhs6V3",
  "key14": "5jtwFXTAChFe4EjaNZmpQXqtraY1JWrfAHQHADnKpSV1Hsb4ibrbJsoPDCQnna8LKoA3gLqvv1VHCSBesraRqak8",
  "key15": "59JCAvoQoL7ohCWdWpJJqncjXqepMtghM5igaczEFQNoDzrofYTjZtE8Z2o6uuurJ8ToAxcS8cNweEHNxgmezH66",
  "key16": "Co7oWxJzHP7nxP4kz5qkrfWvRKvmxFH6YDKmsK2vVbi2RFMfF7H4UPDFhc7GxddSYSYVKEdduBai8awK7a8Xq7H",
  "key17": "31GPwDeiz2rxq3VeMTXXkyMGQPfHr1GTTnKr8snGFBggUbJbWKY6d7qXWdC8Sz4NhNz3YisnSYnYw135fanVw3Ey",
  "key18": "4dFBC9XAN56HTAdLbnrrzQVZ2tszHW6adD1HA2tA9VGDenDsMgKHMSzrfumiB7L5bREh74VRAwbJJwWwzohRUVN7",
  "key19": "5P4om6nmUV37oeaCBfzGYuwWdCU7hRxhpvD3LFmNEqrMdakawtMcUhB9RQGJpDShvYFV46P9wVWAnwgxBKFm3zE6",
  "key20": "5mwfqbQGMEt4G5UBYSQvW8Nrsun4Pt5XbZWtfYjxMVnXVYbLae4Gr5xsutKAPjD86XeKwXPCWBceqfNr4QMWBfBP",
  "key21": "342TJoVHBbaqNz3bwWRaRPk78cP6Z8Sg9je53gF5cfnWbUSctu8gLjGQNJQWnVeoqjLAWWGV4HzaFikGqD4cyBJr",
  "key22": "4ppcXR7GMoMfmgXY6ek8RqwYRYpFSkxCFpsc7aCg51CuRFvtkjQH3YeBLzyLMRwBhaX6Fpy61T1NEqmeBn3kMXuG",
  "key23": "2fzqTCf5rZh8tgKdrbyKUi9un2o39rFD2KJU214PEKvb77ZU1a73sqGFAd1P1wPEicVvKCbFD5opzjkD5HoHJuog",
  "key24": "4DUa3sWnKNdRszyzmMfT8bb9vQYVi5AeZAhE1yC33wsGgmYLeziao8HduhMW63L9aM1D9hAeE9nG2rcMorvzEeCa",
  "key25": "3Z89DuAEv2PWRE5qtqAXKMxQXnLzAMUxUkbPaCneGmgDvJoitCNYWVrEQAqhdgy3g5t7tH1nGZ4hhZHeM6aWqB7w",
  "key26": "3n5hd2x1RtGWuy2QVM6MCxvjZjrhBRera1GcSjzdUQi7vLJJzD4DPHp2qWVwQp2cnFGwwMkbTPDHbr6bnA7iCmr7",
  "key27": "2bdKYU2P2pc4eCh3ZZFC4PrKEo4TPvxLAuwN8Cqmcey3f92xZx7YJk6CtuaxXmJSGTSPDMPfb1yzQNv1hn3WTDz",
  "key28": "5fE1HcJsweJBUdiwWhDDwNYLaYNffnjZiHnknfWidUhpxNFMSzUPt34iD1cpDxJ3t8bUdNw1s7ePnZ3Xdy6wsm7o",
  "key29": "x6mNp1ghzzWpu9sP9eNuivQisw6R9UPny1Xihko3MzFfWTH8yPMVepADA6ndfN1QxwWYuCSN9e1S9qufYzob6jV",
  "key30": "4YFy8wHjRxPxCUJKSjW7yLVLJ9tRBgh9XZTYeCqCvzKWjdTzFRVBVCbXqhm3M7AhfrYjqLUV6apMKEqvcaPXKQAw",
  "key31": "5CT9o36gMxPmVF6F3Re36gsQfbbeRQ218mxLUKQ6VBCx6qvVxu8TpGXyLjyicYVKRrus3j56VaUZPiqP21wBYZfu",
  "key32": "3NHJJtbyrQaQiXKAtGTUGjY4TB69yTQCNar9qvFi45DGMXcgPaxWRAb6pVVHPNDfGfi5UJHT1yPSfr5JCucVpCue",
  "key33": "4xKcM2FWGb26frzKKcAXDHYHnJgE1VGtLh3iZgNzaPjWvimurHgy5r6d1GtMhGJwHXCxKctdi5N8RyVzzwyQYRmm",
  "key34": "3YNbkhGEgas2SJRGsrda8rTASmA7YjxvYoLCE2BqJA6LiCiwtPXuZN8HrESBoHvWeBbntoTQqWxDgjQk5oacjf4o",
  "key35": "3Q4wx2cV8jG96uJ3YKSwsKd1jzpfb3RCsHpRfe955BWucbCpTbYaEKpSFb9LHDm8VrW9BzVN8KMda3v1XyZaRdqe",
  "key36": "5Msr3nbaZgzXvnVp39VXE2SL4ddw4YVJMefuPwM6yun8A14CE7sGBBbB6fJTcChUx3iRkrBAhswSUEAeQnT9HVTf",
  "key37": "2h5ExLsM5UeyVMDAxE3fTTut3xK5fgLd5bqsDztGFhi1BHQu9RGQs6D1JgsotVP9YwBK1DzX7pJEg5TLnu8i1qpF",
  "key38": "5vkCgc1bCKX76fJAqUz9WGYyj9GVqdDYNBCSsypojkm1CAEZ387kSwhLy3m7grXS2axQkDMdXtUWJ5fvnjs3ujwK",
  "key39": "54jYD6onFRpQCu1V2iydLYPQd2mu7rR4f8NzxoiXdcKJzX5AZVgmZesrV5eDWrP5kkK5UnaqjESYD4Dajai5eQJ2",
  "key40": "5uzZkC5pDHmWjszFA1d2VZsh8VAf8wCrzd25KeAqPYNX6L7RwSvKTJUL1UgAvG9B1ZxoPK6Q3Ngq7B5FtHjsWi4m",
  "key41": "2GMqv5GGVu7xrWoLgKJ8UPs772X8FfvCZTj7HKJkPgB1qBGbckBNoanw8A5j8pbogrgEX4pYeZ1AsUpRV3N8YyU5",
  "key42": "5h7YhoecbkjStfBuZHvH1Ceu8nbv1qzrskGwz8EZPAjeTBjsJZkyti9NRYVymQn9qryFyXF26hPXp2LPQ7mcJge2",
  "key43": "5NYYPmWr79d6nkAdzUKdkMggKCMGSigAkctqpbr5nab2TVJxm9RL9okbDb8oi1LAJctuLxxWBSnhe9PH4zHxjXqw",
  "key44": "4SqiR4aPzDKMXxJsev247oHHNrxkGvfjTgRCAxH58vTziAMpxKrRfMdnKPj4egak6564o1rcLi49cJtjBpEJEjwr"
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
