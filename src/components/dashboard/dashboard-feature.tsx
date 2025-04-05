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
    "b44pM1zt6mB6h9KV8ZLZqt8URW88nTHhnPMZea3ixSUYq9MRDYXWSoxD6QZ4Finqih3rQcXpQCZCpW6wJKevNZy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iX4SMvRLWy38nQ5se7iGh9ezzxxAvXZKdTPLuyVAsbuE932Ry1hWEjdFkf6nbuFy2FzQ7YxM7486hebTBJx7R98",
  "key1": "4hGfmptpqkjL4inUrorhKs48eXfvKkJqhuzHxr5HMas6e8rPExTURdAQMRyaqVqK4DXy6YHLF1UKeHQ4oFB5oUJD",
  "key2": "NAC6mGkW4RCm4qCgzqtKgMPAgkzK1JqVx33UfeCLTpKQaXraaDZzs3dwetvuxC55Kpft2qDBHoTKRHdjrjVNJVU",
  "key3": "aPMvF5f1aR2VrMbk5T53FN87RDQq9YEA7J9e4EJvLYSUbwocLaTiHW6zwkAm4Hk5TUeLfiJKeBNQDsVRFPaGFaq",
  "key4": "4i1kX89QUu6fPy8Qz4XWHFr69HmrnRmQ6RVKzz7n3Mk3ALQEK67AN77qUeaXb9DSvo7NNE8DgsbDaLmv7XkZo4kP",
  "key5": "4FnH1hqz9oeaSuiw3rn7RzDCjcCd2u2X8ZyEZtoobykC7s9NCQiHv2DRjjAmFrNNsRVU7hPE5f9DR4FpanAgERxu",
  "key6": "4LtemFoQ9rAQ2Eu6vC8qdXh37arW8H3fYocwxb9xp6ZktaJ93C71RyTg6VfKQAQs9tpkX159gnxCSiC9yocf34Bd",
  "key7": "4ejhEoS53TAi3jjFBFiRkFkCDCNcrznwrAaKSX519uChcTfWZfXMVV6A3oub6daX5CGF9pwt3fRyhmEM4UaczYpq",
  "key8": "5XuPEn1quaXAdXi49mBmX57ebprY3TsMta9Y29AssqHRFBsyQ36FrCuAbHqtDMrC19qDmkJBApNqndDJJDmpdpZH",
  "key9": "5LZ4vbhzvuqxbuuBwhYBVTZGvGedvdUZvapK2p8BGMQvsTEwdVrWYzQ9c3qAEs21coYiDHTJYKgEMJAYmpzfza1t",
  "key10": "5tb9JrXW9DbfwJy5isp4nq5gc6EMw7d7sht4gqBvWFrKTqpxXAyLLbnUX4FhJNyD3yAsBTGpmNRJf66v49bH1Era",
  "key11": "24c6jouyoggLonWqUaTHjZheK9uuNAoB1T6iVdNqxU1vKDUwET8Ff85T1zg5vvWEQgzNL9kqTNEhD4HKaM8zSP2c",
  "key12": "3RoF98eL6k57511AGnrk21yUJmPCh17sssGjqqzoki6S1UnMBDumaqbRjxxELMgNBJqxKP8U7U3L9CmdUSxnShHs",
  "key13": "A2ir8rP4rbURCwBgENCRWpQMLvBu2iqmidr1D7xahwvHiYY5Wox6kUCt7cNZSmW8WuTS7YSLoKDPka97SRJuc3n",
  "key14": "5SNzSjSSixu11pd6sGopRxz9ps8Sonj97ZDk6H5ytS7aq4TdQrzNts7fatgf1hMU1dPDA15QWo9eTeMpuQNjWgDM",
  "key15": "5QtnnkneRVkVVo74HaW898w6gZ6eofG8ZsXFyrphSvuNb2NCuThLatEPWWX59YKp9XyQ9ajkZCW5AuvdvT7D6XXA",
  "key16": "26fixJDe5GPE4F5j27ZW5bdSXkqXeT74VebUnfNwYB1XMSBrD11mQU1Y2dVcHZjZkhjrjG3zm2idcX92RMW4Jd8Z",
  "key17": "335xs8EsFbvFtNLGSPTK1eyLvEmxnNZh7b1UcknTpf2oRCTeiSWZ6P8z3VaiQLKHBccLfNfVDexusYRNPHzumKg3",
  "key18": "57QmiP6NHLQDEbXMJzj5ixjcjGL3eiJG8rbmJrtDowXicdekmdHqj2gBjNosQNJ7VJUsahrWki7QdJjsPbiVmDx2",
  "key19": "3RyfAZpntiR1B7CB5hvaxxtSnSnvxGBR3xiftTNmuzU6YPA3cjkhG3potzdp73L2iRXVo5cHBfNj8bhMpqUUXxmD",
  "key20": "4sqUoSvjoE3wSFDjMrcXfQvtx8WRW71aLuaiGLUKiVBbEpSvQoicmnwUfBqzXbijjYdjdAvbVWQ5yd8mVR5AShZM",
  "key21": "5vN8m7k9SbtHRKh3pDsAazw7FPFhdn9arMJ54bZenqcC64qByxTkA2YyfN4QzxwaKSek3ybSb4c2oP67yUcB3Ag2",
  "key22": "2uM5NCQc2DEH8VdTauCM4zeWRsGncAERYpf9BbHSJqdYxqEDzPEQ7ZLqYzkuey8G7zENPC4mZxsV79hPZeiJiQui",
  "key23": "nPf41XMhctg4cnzKAgQoRPv7VComy89jYSm1xnZNpHtcSGKBDuB2Jn5yNm7pEdJUkG9U7m9KB7GSdv81ZuacmTy",
  "key24": "4vRDgkVjZMJtC4RscxDViyv8VYNs7Wp7Ekm91AJz7s2wBji6cjH5W3jwzgBrCksKrtsRx8gPhVjfFpANUhkxe7KJ",
  "key25": "3f3D1vwQ8voLd1Jj9HA38yU3m8ucZkEN8uvBj1dGiTYqruRUbCdBCfQLwbnB45xRuRLneARqxsceXKVaWVeLJzzG",
  "key26": "57xBCTvqFEdTrFE5PpXsqAytRyHCQHQb6UfsEMDrsAVQLkkfvC7dDw6M8zUnHqWBnznAxr4XU8fKxe88Lrutdjs6",
  "key27": "5tmU2D6b3i4p6npGYQpPwuoBuLKVfRHNtsaSxXqVoD7M1vnh3ioPpjwV8LMLiDzSU3p6oi5qrq4TEm4N4iNeXrpz",
  "key28": "3R3NznoxW3rwnamBjird9Ra7ivnp5Rh5t3jRpMfUwXoPNYeta2nQuUPfhoKVRbRpEdNzEy6rDhBRkU4HamStoR3n",
  "key29": "5VXBCzXukFtRTD6Gjm4BH9iycoUgvwuCXQgGZ88EsvmbY5YusS5Av1Q3f2V4pwjWrkax1GLrjAAqvcFoJgza4Kjc",
  "key30": "5eDiYkJqLNmMwzVacVhvVCDMZ8bqXJJYnU9PQPfv5PiyiHVUhptqmcwCzvwvkB43MpvT2LViyfUwaF2quQT73uMG",
  "key31": "63DnHLr4jQHyGmYG5cuSwL31JnTBjyrTB5tGLW7V5rbK4nuaeFP89M17E8agYxJwHxiFmnag8cPYJAFAHdyRMDAJ",
  "key32": "3Ett5jvjfsgNRbEDUpeHSJW8A18tiTfBH2y6RGoT5LM9cW54i3qrzfQJYpxP8T3n1RB9AMRigqbiQfbqwxxtCHjN",
  "key33": "5SqeuSPdwF6p3N3iJVCySmnrbVpYhPLeWidHnW5VqdBozK1JPTmqPsnoy4MuNP9Fs11vAciX7oHJEQ5Xxbwm9sVQ",
  "key34": "BFCq365uCVW9KBBHCZdjVjuyQQGfRNRw3Gd7rSh2ZiAY97bjR2ocA4V83ozEebvz2czASnkqUNWTXfwER2xMobL",
  "key35": "9ihiQiuEcb1FfEQrRHbWA2Hqf8s1uXFFheUGN61Rfc6Kus1dmek85nFWEou3Xi2XApS9ZRwW4D4RPFLbYLEY7ji",
  "key36": "4qDX1PhwgVA6SDi6boDy13G1ojfTxGSvcUQ6ev2e2WNB5RymWKnkE9v5N8YayYRmjjiZY5d1NBvum662qQYRPXDA",
  "key37": "3h6R5h7jvgV8b4yakcWKK7PDU6uFnwFdUXtMhKivhNTrPcYANxUc7Ls5uXTJL7CLQsft5wKHBJJKz8ck9WdcQYaN",
  "key38": "32JREqtbpNLAB3ViV4kGpxymo7Qnw2kDY6bKDRhEcyEZxAboZUKYnrVZ9fqFmRXjrWfBtVm3P2bvkyisGgVAwZAA",
  "key39": "m8QiGJeWg4hkvkHAn6v3k4jnmV51NKqoKUEagGgzEfAqyAVPHJeNNmb6PLfBPWfZve3jtzyG1RQtAiuq7j7xant",
  "key40": "3LY8WvVypccqke7gy2qANVsdbCek3TqwA4zMwd4HH3hPunJ136VpvMihFQQw25bf9PTz7h8o3Hj7uDQ9nw9vsfgw",
  "key41": "5iCtDTuwA3DX9RLTbUAbdAfuA5yen1ZRFam3BXnsidf1qzhRmYSCZM38ywUyHRZQcGxTb3zwRvhAXQTH5H6m1Mbv"
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
