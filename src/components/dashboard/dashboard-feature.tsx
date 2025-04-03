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
    "4u41mkunVe7zx13vcQFQUy4P5F8YBEgdHpfHePa2taZ5vjBUTVJfH1TJEU3Xry8SaRF7nE19Y8BxGQ19epLR57oo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uFoLLwzsfXjwF5w4Qujs5PJ4NGJdpCew4ZWfCKZikntnv5Rnk5v1ayfwy1g1z8wUywDBQaAFYFYnidQR4hVEZy5",
  "key1": "2J3bXfu2BtA2B1GCgnf41KW3nUVeQffX5BT1EcUSmAxqWWRGDaZWLB44j8HGs5PiQm2p6yMrj1XcjPUvAdkKS3XX",
  "key2": "zEr9uJjKbwKPFxJEcwC4uBhQDhdfdo8Wj6BND3M3hXycgU1zL9MzPUCsfnhkyxvCL9nHqAMAEnuVCaSndgBq2kw",
  "key3": "4TeBsuwivTmpuiMNeK57LDWx1HjMYWVy54LFT3WbQXaa8ssMxDyDPEEf77L9YotXKqh4eRBgYTbRPNw4PcW8pKcK",
  "key4": "KCHu7QUVYvhfAavhYofy4GeBuFXJ7AX5VVcWnh9tEwjTnNVkbiHmqpRS4KWUu9xmDm8EFDRC8K15ibypmdpXpnc",
  "key5": "4WNzR55hFbf1KwbixqQezB7GP3VZZzfbvUShJTT3YEAQuqq8Vj28iy18dN8rzSqrnAVxMZzdJPH3aVJxq2Dpy72D",
  "key6": "4kHeaxzn5nd9ioth6pig44Gnw5djzZ3upCSBEA9cc9hsDT8wu4Qz151Ab4mbzm72zttfPQ7UNoZr7qJEPEdDmLX6",
  "key7": "4tup79d19Xupu27CQRTSkC31RufggR8XuVkHk97dbqpCpt2qBziCgxqqRuqz462bqivpPBJvoy14vybxG6UKiGcP",
  "key8": "3qups65PQGAMN8D79FK5LgyajZGE8PwRufbLsTFXrnptfzQPyrMCbPuXSCc6sFPWVQE5p4mZABREc92krASNHpEZ",
  "key9": "5Gjtjzxn8eVhDisGgFYWB29V78RQtVvonA1YTA5AVpWesVNoMURv1TiqSGf6uzazUvFS8iEYGeKpEhKP4b6UNCLW",
  "key10": "3Hx8aVHcM8GeVKvrh7GS5Eoq9Tky8y9yy6tjBcokCHao6knWMeiY29EUqKpemwko8d9AJMjsFGqUy3QHWtbZ4Pi8",
  "key11": "4nA9ubcCaQNNXxgXAg1miXSQQrhr5f35a9NCy1W4pXFbE1eHhVkuPTU81aQeJ553tGhzB8hqTxRUwyDQWBa7Wpfc",
  "key12": "3YH1RAgSUbENEtdt8uPCSxkR3XgMpzwaCxKe29iMqD4qU5LJAcVrA6v59xQEUVRvbeo7LcSnyXcBijxTLcpHBTQm",
  "key13": "2Km4qdvKKoYzsgAf3MCf8vhRbB1BymfweQ62K9XGuPUqNsSWjhKHdcJERWhQH5p9tagaynQHqYMiq9PVYVrqXBb1",
  "key14": "4XLWcBzB3bEYpJXFzRn9VWpGwSqe3iChT61czhXVZ2h2surAkUWNmij7fPX78uuL8tMux9dumky2gLBLYrkb8Hmx",
  "key15": "3BtKPzmohY7MC1uxrHezNwPsb7sbxupHPM7JT9iPPysfFgimYBy66BBCpKVaZbnAYQnfchjzBm4msc9SajydWdwT",
  "key16": "3bUQMjUQwAhxRQoh4pqYjj18wx7dh2iSwNsBYdndjE8k7PPhpmnqRTLkh23bfzSjRnDDVQdwSotoNx8VXM2ShBiV",
  "key17": "2uRkNsQKXYi3JtjE4PPFeiQ4Dj8DPocYGP8vjxQukw58GvkCenfraV42ehBiY9yypBsVQK9JYzUerwPHTx7MJZk",
  "key18": "4eLaGfPocZqUh7nbDLmM8jdRpCPJXYhHiMXGBQiGQ4eXwSEsZvotNkynnEaxBFQN97tkFC8LJ2gfFmypuhFxAN5V",
  "key19": "3ki1GrjjW2gDW958gz3eppHmdJ7eXZd89GBS28ndzRy1JwTgRGL514EJZYnddtK7JbuUkuFtdBSfbVaJXuJjEvR8",
  "key20": "qDoN7pbW5LHF4CGK6sNDvhaY1FFd2MdpL7FHvvamvi64fJYDGD8ce8ZBKwEkaCzHpmy7E2CSHLUKYsLhUr7Lcsi",
  "key21": "2EDaaW4ZZ5TNFaZVh2BWvX2hpVT5dofPGHpMrMyFySMyDWfZYh1vsiPkZLPLBjpaKPZSk5PLbR3W7UaphvqA2hSU",
  "key22": "2tNWf7L8TYzVyCotb7qGgPgmCL7GT8qxGdSUomQoUgavSi6ScKMmTJB6vD573Z3CLMphJiZnhzGCSsHkSFFwPrun",
  "key23": "68na91DM7KhUzdtu8VZKK2ctoKeKztBpHYk5763ZFh3QN63yMdD4pGfSCwffDQPZfTSfMxHiShc8rwgnAyzyd4H",
  "key24": "4ELN8CHvqH1zdNPNXdMDQGLw3A38STbmvXgKFFVufS2FTubw9uYG1ocdqUfMDFXsb48irD6WSVPdbBSZHrzqomfY",
  "key25": "2MHVGYy5kj4U9Yx4T76k4ACXf1Nnsx3vPPft9NsEbBkZ3MbkYFoJK47eEv5HpVfQH89Luw35mJSGEGZ3cyqEtjey",
  "key26": "2eBZnuGS31KD7oCgftsut2E1F4BdNGQNQsGaiu594xfm8wCgQvLtLQc6Cu1dNghwYAH3UxC9yf7PP6jzx35fSn4V",
  "key27": "3NaMEZseqDjZEA5bFoaZtbLSjppDqce7ZN9QrA9poBRXomMztZA8bWQ45fNA8cdo33W76VdrYGws8saP5yWCv7aC",
  "key28": "CQqvGeLGs1rhF7Nq8hYSQhg5Cb8aHu2m2VUFAf4T75iWTnoXtb32o5aHgymjRbx7ryTCcqQUE4h54aBhsw4rFnT",
  "key29": "3aPY1oJvtiQ1rbzkePfvDd1Md2CgjeUvYjQRTKCFUEYffY8d3vgYFGXdMpSqCyVN9EVAMpGoZdzHpBP3EXwC5rSJ",
  "key30": "39f5jHgqm4jmZNwhkQEHBScqGKL2oGabtUNu4AGiK6Rtc1E6u9DW4UDWSvvZN4P5ivihNXLXcS41RU48YAYTAbbp",
  "key31": "5qBUbhyrp8kcvvySZNwEJHqpdFqnHVhFZ72yiCC4KhBhHcPmw863AoQLQ95qup4X9LNaGTUD2Dw3vgqgCCFweWkC",
  "key32": "4iQFEgrZ3SJW9mDjvn9FzVWd1mbgJ2LBRza3QeBme8Sq2fz99pH1EPGnNNHbBDNMzafDZQ44RTADHq7AwyCSiFJ3",
  "key33": "2eAF6f2Yp7QMutxZqueuQTR9Vr5MrsHHN47FQbgFyFpFUmRY9ZgTws7Ss49Cjkq3R8WKCPZU6iHKkjBPz45ckbxt",
  "key34": "4sKi2URUr5YS6v6eX3GX5pwsUva6bHyqV4pmzn6iREs1D8GNhV99t3nn55Z62N8PKBbm3oh1ePHmgD69sTnsjFM1",
  "key35": "5vziNiSx2ewc1m3tRSQeWGSLaN6jENoR1JDCsiNa7hoYMcZyj7Z7LTP8xiYbPnqwENMMVfnF3r9BiH1JaSTEF9x5",
  "key36": "4wov5ufU3zrsQgvU5MkzbT8xdc1TACgK2g3mmjGF9xU9ZGELq3JXg9xo8A3zWDZ3zfQV2FWTtXcjDfDGi1Xn3jST",
  "key37": "51s7xjTtZLBHJBUxCVTzj7jkVjsXJYgHdELnGCC9a4v22z6vSZFyQBxqSG4fxh8UvzVUa2KdDD9scHpSMfqpQpJD",
  "key38": "2a9k1hBuBp9aHcJ5MqSEescHHeq5FHpAHZMN4ZPwpnTuRPyXcZsb3igvXd6azazXUrexCRghxP2PU2y5Qjy5N9bN",
  "key39": "5y8NyazfvdxxBnk5ec3gSELAeie6csdJEqD54TJiPABVvqyPyhvkf3mtZCBnWFA4M2VGPt6eXsTwKtyNRAgCFv18",
  "key40": "3hsf7ZDYFXj69N67ZCuUoZerLzQmLMHP4bAchkRNj1dUwLRL3MGBJM7AfriiXqc5Wwx6febK3y8G1gBMygyTmRQA",
  "key41": "4SfLoKqqycxD1SSXzvFpnFwPGtwrzPMFsdqFy9rg8Tkf7CprLPivnrXryVZ1KFt2Zu24sLTHJ8DsEZmK8KDqTNWB",
  "key42": "Ye8APNntEYB14LQNRYYVbqyQnFmdnHUtbcyvErGwSy3YCK8pRKPHDxHunE8vnh8KQ3a3WkrsEFFoxCyGePWWx5x",
  "key43": "5x67qAii98BU5JZoodjBp4YmgcEyoRYz4ziVkPuf2wMZE4z2X8ySGZpXDewGCr9bwf3iC6AuzBptw5C32Hbx2GEz",
  "key44": "4LU61y92ZD6fsnjk5TnYGdrVEAhcCqybxp3Yyg1ZMGkEdRCd5KQy9VCFMMXRHn6dARE8sVwYdMud9VWMkYBaxzGw",
  "key45": "2m7zKNMcnSHp2Bk7sT8H7aJu5khBDcqgnsPb6JH5XpkjKZGFVTKv5ixjoBtNVfA6TbFPhRvULe77eH8JRDSniFWd",
  "key46": "2LGzE3kw4dKxk4KiP8HFMomPPHLuVWn4hXDi9z7gPXEeN7Ub2xwzhh79mAgFnXzVXHQW92FNt9zAbxoWdCjnxT3g",
  "key47": "3wpp5T4dhMYESHda7RFSuGRCY9xQFQEbwboc2tUYnj3rRWwWgnFuLbYcTEXLZuXPkZdGZ6bjrJib7K7C8H4Xhk4M",
  "key48": "3n9NQVgySckUrmEQFNGk5pLC3ZdedivF19RDknRikFjnQR8CVjNmVkYgAYaSfzKmd7QVkhRHH2G6qXojzJRzX59M"
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
