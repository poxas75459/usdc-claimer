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
    "4nXyZb5ZR9F72tc54Cm4Tq52x5P5MgZjrGisUpCLehAviMQsRA5X6Mur8hnpMQs5sLP1k7a8AvLQkJW3aAkneLJp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gKo2c4vEaX2w6xF2WE7G1gSwHPtbD6vXnef7EKd6VkafDjgx4qaRRbwgVb3r7rBRV58Cidzg43rh5S9bgRFMGqj",
  "key1": "2CDfswBRqfqC6YY7RWzujduLtDaHximfpHhNDBm31ns2rEeKDoQMe5osW9AqLv1W3jMrwMXaN241147op4gQAC9t",
  "key2": "2toDZN6PekDkc71XiVA91c4UgjfFdsDkgznUq6ahNAeWTxDasKUJcGNawboaMiJB6MNe292MMBGfh549ddxxSJHG",
  "key3": "5uFTkJM9UENL9ipZMSNnvRUZqjxtdNdZjupMDeqMReTy8HgExAWtSH93PfnpUYCzf65g54gxntFr8EWHknKbLNWT",
  "key4": "5JtnyKP6DunHjScLSP4hdNabEq39DSMRZfVJpXk9WRT6W4DHZ2o2bSUv2QGqKkNEj9STm6kjmfUJyPv1vY1tuHsb",
  "key5": "2YWJne48fLoyJPW87Cd5Ub2z5grCb9pJgzsu2MtPAgzaqgRcfn4qc6tFmHYA2KAR4VscKnpauhzQdHysqmQUjoA8",
  "key6": "2S4BZ2xSKqA8C8Szf2KVSJCQq5owofwsoqsFfQvo5eA4aJL1uvkKv6R6osE5rGCDHsra5nAay8b4cS1PnLmtUc1a",
  "key7": "3VA3C6VSPeoiGBVDsTRNWx99ygWsFtXHzMHQKbiV5dMUXvSjAaeo9AipQHzxEYv4oR4Ng8vkKi1ixpfqZUoPVnta",
  "key8": "3nCVaEc7aCDPgA8TBnJcTUyyrrrqSPbgu6VGtNUFn94HEJ4hwXWPcvVB8rnz48p83VwaWFr6h2ZbvbifR9qtcC1z",
  "key9": "4ZoMnT3rH1vi8AifQ92Lk4RabBPEMongnuMpBgWWjhwHNUr4atpn6cLougmbU83Mp2SALEFtiaT4oHQWyLnhTZBu",
  "key10": "HAJUaxQnUuDxpczCKh5nSLa1Zc1PHnmddMfDxMgGT29xV7rNn2dH1pWHRnTEfqhZtULFEfQ9azJSQD6Y18HChWK",
  "key11": "3Kd6wA9UwbSZ4EHYUHcP98gRoMDWWXgzGHG8gFgkWu1nJwh7nWPfQv83zn2gvA7K2yQ4VGcbjdgAzZwoAKM6h5vo",
  "key12": "27TTQwFs6iPDewvvWkevtqC8JGFpaTjox3emquaKUqGNvSzYfLQnr7xkSpGNdsMHvopRBm9ELtcrfaUmjx729niV",
  "key13": "3vJhxDQGjgivF4pjjWB5asX7qMQdo1WBQt6YVUB2PJPBxYEdcRmj6XZ9c8ZYyP1fgCZbJ7W8rXnKNpeqoUdEcGkm",
  "key14": "nxRfU9AQPMt7tHW1crpGcLVktkbABgQ4LhguMBAaGqojZ3EUkXdy2nTGGUX3D6wZh39QbghthTuXZWawGyeRGer",
  "key15": "1mrhVZ5F1rk6FYcWeCTEFPmCzJUfhidCoxqG5mPEwLNUvDMak6dDnF2aHp9kjfW3N7PguvXAKuX33PdgXN2dPRw",
  "key16": "3nGM2KpMuQJGDZ1nRwr9WFmK4p65J2bWyH29Nc2xdb7mTzo376gHyAdgXpk4AxQKR3QzHcL91BX1UixoeQz9ZMj4",
  "key17": "4UKDPDVUQ4oJijEtyoZmhWfHtonA1eRSwrbmzPKZBDczMSY9kV5PeTy47jS2xCRdLDVpBE791mFr5KmfA5TDuj1J",
  "key18": "5kL1D4mAVu1oU3td5EVCU5r4eUxbfsnPzjCkFNaWqF6MCTrkPxcVVpd2AeUwH2d2CFV92Wtp2UP5rSJnnPGjdewp",
  "key19": "5UfbojEuY4zc7MRZexDogfByjqhDqHYwoxQ76KEVtxq4jRmZSxFEyZkWZ24nRkLmS48cMZzhng6akVMZhWsTQeRr",
  "key20": "5Hxu6GQQUHJBWZgvPkbhYBQ9w8Ay2XFhzXBDGuV9sd3onBDbij5dcXaXRCDMe9fxVqbqv2vwB4beeX1vVnY2ejmy",
  "key21": "7j2sN1wXHFmhDxmCQ7wCdGLURnLCFHiYci4Qp17gvveaFmqXEeb4i7hzPZ1aPGvzejbYczn7qe4SoX2NPwVxSP6",
  "key22": "4x6zUQ1TKwpjWCfVTqW8UsMVhzwQL76Aad1jYPcKxVdk91RMLZLadTgnqsHEUJMvmaSRJxokwCnqp76Ei9qtWZUS",
  "key23": "sEWAohiHpGhhNWnWPQHT1JpGPUTRsJN1C1AH43WfguTM5jYYhYNdebEHwjPM6uNHVBqpWUx5tG8ZAPNwK2ue9Ka",
  "key24": "4mLtuTQpt4FMfqoGdKYXzxrNWfeJkj4jy2DwEo1z1hevZi99EeXpwe9CoAobqM5xc6UgfzGeKuhN9jGFBc6JEKdj",
  "key25": "5NsHvtbVLguLWT5LqFoNoxPwZPZFRaC6LkLv3zhDBFB8cfpACQ1nfMPKDJKU4M5mUibnFNr3yWtPcicSf76GFkZ7",
  "key26": "Wo9LSTkwKiJj7U5vNryvtrpmKmBQmureTubf8RPuUchqxTL95EVDuyhqUBJoyyqWg81DmiRPiqrXrvwmAT1UGxW",
  "key27": "azRF4bBAfJANrPuC7ZALEbqLcpjzUkixJSccGpYsG8tTLFm8tQThBLQbP4KdgSAYgy7qRT1wb3qJtznLdTHPBfX",
  "key28": "q7AfE7sGN6pBzxgCw7rsDugb5owXf7pWrSJZsa5t7PRAeFJKcxhbtpYkp2zge9n3MA9HE7EKYMAsNtLkrZrNt6v",
  "key29": "MGnXP2ZnTxAmWvzYcMq1YC7hZSRAaR8wj15ixtNztcxCfbkyyQ7nA8ytyGS1WBbCQ4u5CHbYMeLRhpcD8ga8igi",
  "key30": "R4npkZ7T4CUrts1qeEe8cDVdWKQiAZkYiQHZ9CoPEPdktpBm82tGZJzzNnQZyWZuZhBLWvnK4THJH3tTAJ7X7u3",
  "key31": "24YUeJu5iockxeHiPoxCo1JAB14pPK9aKXC7wgsALjiyY1AFm65nJCGCBsWSpVv1VSwh76nCmwqQy2qzhFyNWGfq",
  "key32": "4jGzSZA8GSk4NAkNnRJBK5BQTxbi8CtbLrk843a3TiWMfeNkdcB9Y7N4sk2kb3YTUb7VVVQwqVYLWVqicHWGLsK1",
  "key33": "43uyuKhZqdfj1EC9SXLVGw8QjD5PtsZhoKsQwz4zz6k7Jws7joR3WRmMY7eeRknnv6L1R6u19UWXofZpQLqAop6z",
  "key34": "jFRUXss2MdMR95FHdPtAaRti4HihkDBR5AAbWK837NXy7gcsLWcpTF26cCF9vs13aSRgnPduQh2qwt8Bt9p323o",
  "key35": "4QSdqzWgg8PE6TjJUBQxtoV7urQgJveDMHAhPx9tBq2cB3rCd6n121iN4yaKBPEJPcfUuLQUbkrT44UPEbnWyr5y",
  "key36": "2oJRyAec1ni2hWprvkx5W8vSjRg9VMhvhc1Bph3NQB7L5X7xeYQFCPF7nWoECQA5eKJiYGGZH5Rb1xH96SGtZtej",
  "key37": "2NjcBmjY6J9Npj9n9e33dcEgFLoK9EzqGKgJ4kB4KQbM14ju6Ke9Ai6wgXepGoUYNcFF9Y8s9ussxSLdVgn2GaJW",
  "key38": "2FeAzFfPtd4g1Gsw823eAoCm1W8fj7T4E2u2n9RSBD1w6nnYJEFCpqgycGW13RqW6tri9karRUETR8DyDJ33vqNN",
  "key39": "3YWmhNwkRiphH89hihuumxdrT73qUipzySwMstAWJL4PS3rHEfm6gBBTq5FtWNqAVcvgCX7v3piCvfQT4mnhnULL",
  "key40": "KjaE3JSJ3HuRwyNHQesPEADA3k937jj1LoCAVDBNtzFUjC9DRi5kuQonhtLphHu8QT67obYs8fYzvTkXEqqu9bJ",
  "key41": "3bPPvSQfAtwqNTz5SpACmHpCYAA477tLsdLt4AjvHU7AS6htqKSMXXaEczr3sAQSHdFHZqWTLqgbcSpyuR9gEoXQ",
  "key42": "4B6MAxNLUoA9mtzyNwuFVxPTRXkSw7fFD1179S7rH8GKdAafH4aXrWabpptQotQAgxh9LxriSdsF5g7yrNyZ2hiF",
  "key43": "51r9pmwWDkqSCc8dxRA8SeDSxNYBQfHFyCpi3kBA9EPZ3xuR1y2sxyXSH4gtk2B8wpr349LaYLgJxLyw8WpzmMWf"
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
