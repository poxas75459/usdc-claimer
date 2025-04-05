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
    "KMWWm7TFdXXNeMcQ1zoDmLdzDwZRTGySGDsHWv1g4oBFqh6YwwQ1TG6CQWZeTBpTRUFrrnwtmDkthkA5j5TEpgd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vxz88hvsmYmMv5tg91xbFT7VcEb8ebMtSC3NfRDjvEWoEpYxgwWRz3JPEUakesQU4rhUcxB76KTw87Dj9FErAC5",
  "key1": "5TVMRXPQBaBvwciKy9h6ZfdX5jWvroBs8VcvWAbwFM3kAnuenEvVx253gug7NNixQmF8WhUig3NAP5oTZx4uVJqd",
  "key2": "3Dvxgu2Yio32fYkDpgMCrrhafGBEhf6fLc1h5poCj5qkQGN9BqAQ2c3ywjR6V1NvWSg2hZVPj9oczWKoPweYH1qq",
  "key3": "NjBPnmVoSYPeU5PV81CGXFq8kAZoXo4fexCuCqRBuQUWRCdaCyuZbx7MP6zQzvCkA5TrDsgxEid6gCDZ1jDRYQy",
  "key4": "MTCWhZvqdxHuYEy1frxaR6yLBtce6PqBCftisgtTxLoa8wEpC1tn6jsCcTnp13wtX6wZ2PC5GUbBk59mvuXJhNU",
  "key5": "5YnqnAamF7JeSWVUyTLn57UZfmg1RfkRRLoy8LzwVxhTN2GAqNgRytwSsFPv663UYYTuvaig67CepnnyHrhwz2si",
  "key6": "4CKAJqriXjZL4DSKErLHLmfpFC7wxeBgLAtaTG47pjEMZR2Fsd2vKz3HbgB8MqUjKtTWtznwjiMLevtD4yNycS3y",
  "key7": "42F5VZybmiMntxLxLMvN9n5rztRtMDGKzKL5GZfW5DRvBXBQ5MvEMyswyGhQKhdpN4dL198YFywmVEq8HHXKEZuG",
  "key8": "3rg1A6dXN12U1XdEpQsXC8gihacbKH3KEAdqwZrNN8YWkVFYatJTgi3dAvosgQLpoAPhee2R4XRPF4vFHcZWGxdW",
  "key9": "3QMniZhbThVMDS6mKoKWVhbc5JSEW9EYWJVHUWf1AAEgqSHDghpgk8ERhJ33xKe1nKoapySveCkuvZF853ipK3Py",
  "key10": "49cE5ESPctCYkgqxdVu9b7MZpX27v3Y5xXJLqHRRDwz3SN5QdV7Qw2BvJHXW2eeuHB9aiCCP7eUYFaYBc4p3h3F5",
  "key11": "2JCCP6zbSMPFaZupvduJMZvwyv1xRrjNqyGbcTaoJHsSVxU3qYxPpuqXe4WDPxrQ7tEZGdobnLPBzMtJEJaEei87",
  "key12": "4CQx7G1TDJtsSDyEzoAo8ZTRvZvL5JWR5X7pHHXUoL3FfmGs8XiET4QUhZW9LJmketpK91tcFoaoDqpXraTUy2DT",
  "key13": "3Kx5Cgv88Ch3r6xVhU7X6FhXijseU5QjdSpptkfJHpMbt3ub8q4qVQzENn9hN5KXacyS7iYeZzXPB1taKPcmsLKV",
  "key14": "QYAW8wR4ivjcFyM8LJXLRHJWSqzgqwFdS6AhL6CaDufmKjCaRjvpVCgydyfZwdGLntchkzyukgborrYPXi6FXuF",
  "key15": "5iAHYRwrCuYHdnXWtLU7GoKG2THmXKhV59CeQpbmP4wMUV7dDjCeSUbBhG7dQD7gChHBdQQ3zq4b8LaKbfEmMdC1",
  "key16": "3oHEnW6M4iJZXppoCqFprhwJbDWRDT68nJmwrF4ChfwhxxTPZwHvaFypz8J8U32xwZ6cEQZUK1MBByQnA1vnFYxn",
  "key17": "5w5wbbnWerjoEtrU7cwCNUbhpksEZUiXCpQsQ2UZK2einnzM3MXCX5E96Ev8pT188mE7h56UcZsNmFP81u57KsS4",
  "key18": "4MmTEmihgz9MkQLJW8EBUXUXpywRgpdeXpnMBe5gnwhHNXVzDAA7LnJ2c1ULrQFntj4fWDdBWi7FQQxbeTBhLCHT",
  "key19": "2Y5MyKAXygVcrL37hbzGe9zxciHanr5fwk97BemMLkXpYwQasJAH8ki8dqKfK7me3CXJk5fHgE4muSeT4PoBpjHo",
  "key20": "sQSFg7JJ2NaGfND2kBnfZ9qjUZtAbWgzrEGVCPnamXbwL7pLdUiHJkiCeSVUCa6MTL5Emo1mxFJtsiFqudGRbME",
  "key21": "5npePLAsxp3HQxhv34a3tq2LQSmP2fPCDEPuWgfZVqFkFgjkKVD4HJcw1BqhvaV85gisPeVAV76V1jU34yFihXiB",
  "key22": "2UDzDjQr1rFiwojqrq6zFrR4ve6B5ytgaz98cRo5GFGmgQr46axuD8FpQmWvw5vd4zQyuP7ysBpb2YZ5fPCRCYzb",
  "key23": "2QAPjJx8q13EJ2KTA4zW53sjNKuM5RjRMc7kmmHMCZ5Zhu426UFE83MiusSxQZURfQmam2R5ktXhm94r1scgdM9Z",
  "key24": "3zHjgV9G612t8QiS9bK7iDKqJWz4fsEjNo8rp7gZHTwJRCdXhycWsuFQfvnkSLsUVFqbxa54ewgKbVRj1zu8i6J6",
  "key25": "5D8Er5eaEHSHh1qPGoPD2aipNXaFVpSDe8hMJ1VbDj9DAb2ZATYe83vbJqWwEAoS3CuJ59eqfdvn95RtFXUY9Y3N",
  "key26": "2uKxHh7cypQsW89kyUBpVVVFkBmXLRbEc4Fhu5nn85K5JR4V7oBm3JViyjgPZXworvoGwV4bfqzosUfMTM2z9TWu",
  "key27": "5xNxx9gfLyZfoc4VTHnKBn9aKxM646YnNN9zsxPpUHE9T3JoJvPbBgB5v17KdoLrbeK2seKoNm8HznXhFUg6Wo9y",
  "key28": "41MqpRB7eeQAHN2msbF5JHt7chS44qxepVMgZybaUbLFH8EKQKdmCFMRNAaaXoHWhPgno4nNwn6sZeXrjS3or94K",
  "key29": "4Rh9G98cwxwJPvANEeW8jf6bhqxZXUog5z6Z8WfpFsp2AoJnyekQ92N4jMo919LwCMahWmNQz43quBjLUrNWk6eo",
  "key30": "5DRjntSTf1r5Z9MB6fZ2M7rwHcmYcDuVe4VsfKm1G5y7rbsnc5BvCFYngi5gJU6nVpg6jGiUPmEwJ5QyKX3RSn7c",
  "key31": "57enSrXd1A8aJwSG37ZFZmj7dMUDEwjFvFh8oggjF2SLNYNNnKAnZx1Zf1RU9pXWms6Uq3MxT8vvLMthfiBxx8Mj",
  "key32": "3G8fTixoUdACAAyNaTb9i6KNNVmi5MXJ2ty4GTdYHaNmN7YjBMj1kW29zw6cBLbG9cD3FebLUbq6mc6XNd9GbpMD",
  "key33": "2HhejuNXF8oqXGfTL8CBDSCM3SNFxCt5zFrZXUzysDsbiAUhV7ia6y6ZifCdvuuzoVN3SRxLpMChCTJDunDusBNt",
  "key34": "335KkHUayqRWL5hYAfJV36TZdtriXoGfuVAfWAS2wNwD2PVdwFroFCNiUGwuPjCrUnH3468vqd8PmtMpP1WwY45K",
  "key35": "2h8P2F5qPVE2rjZmQqMj3YEtQ5nk14hQGCBK5rm5KfBRxWjKN8p52aF8R98RsdghqeN8HdHr9nLBMGUEyVwkHdJH",
  "key36": "4iznfXuzoNuUtxSxHyEEBMGgRHMsmMRVpvw4wQWYuQXoy8RqUkqCUst2vVsBWSKjdEZqkEKddabJpz78mZoXkToE",
  "key37": "xmSN1dvJobaXNTcyqDRPhYidhq7jJQLbRv9KVBYjmvkLoYnxSGdqsHKcnHofqBa4bNtjkhZ2zxqYTb3pdKtnN1z",
  "key38": "4kJEauiezHKv1AT6t87Zopk5qwDWs9jzJd15iPmDgiHiWXvd34xHHouJ3DdFBQC2z4SvNtWyzcLenEMfM3iKQmr1",
  "key39": "2WfKNEQz41uxADZn61M373BxpZDB9QhtH5wgLiDpaBwfvaNs6NEnBr4e4sP1RCfZArrcQUVjtZJcuG2WZBkkC2T1",
  "key40": "4apjcGiwTtaD4LPgs76jrPUncS3UZF8m2werZPRdiY4aoAHvwrafp4HftKgugy18zjgpHKwyhiJfiEPBeWRE24fK",
  "key41": "4s3ViBsfH4JX7YBUB6yV9MDJSGbxiGRoQBN22vHQ9SsPVVAUAEzTtK3tdRFw24eoG53ZXvtWNEFxF2idWYaFi7bV"
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
