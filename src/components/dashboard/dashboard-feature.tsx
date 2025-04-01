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
    "21SLe7TRHktH5hdi7oKd5LcPvdfnH5PCQG4oWdPtoTu7WHA1iJ18Xu4ZvF3nULQNjMzQQ5WWTNrU13yAznf31jYu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Q7coM2NzkZDBz2CQMUZ5TTRvbwZJAorHX9BuQENyhWTCKGztDjjHnEXjNjHzU8gCWjCGCTJ9ss7q41gzQDE6CGV",
  "key1": "2L2ivsu9JnPmb6Riirrmwv9RL9hNucWqMxoYDB166RvxUctDYFfT9qXQGTkbu2WMvHgjCnC1t2HxaPJrBj2hoB6f",
  "key2": "s6vsdhaQcPtePMb3AP6EFVhP6NtuMbNDfh7fVghmNf5a7QaCbgNyDdZhJLqWnPHN5QDiW6K7BY8LEDRgTcxXKPa",
  "key3": "2TViry4XhTsFBMao9VzuWryFXmmMcAC3dtjSsG69aRjy4UWC1vw5bdty131udubhcPxg2N8Hp6nh9S2DYkpSDkXu",
  "key4": "PrgbSWyoigJvs4LvetkBGzFUgCdsSaoViU7kNyA1CuCbfdovM9TzxBTXrEYumE2tT3eAozZY3n6D9kP6H5BL3Kc",
  "key5": "4ywf6M9S8qwfDtNYJdhVvhL952mSmAAh9JMxYy8RYEsVCc7zxKxowPEFgnaWx2xeDQXksAdmK68pdiPcSc7AovNC",
  "key6": "37u2TCRh3AV8nkv3kx55nd4tkoQg1aqRzPk8QbSftVrUQ8F52H9HYoTyfr7tajcMgCTBjdCChTSHyVUhKb8zc4Y8",
  "key7": "3EGNMtSNYz3JmiVCSavtQkaQvjXHBYaQD8ZKqF5guMcdyquTdoQBcXRYbNcQiV1r1RwmSfJFqg6zcnXCrU6qhNMm",
  "key8": "41zLZLk2kw1mY3hq1tQoaNDNDr81BKcg9Vd2VGr48Zevnfk8TDzE5EZNsrDV2WBZgbU9TCiVAzoLo23DNe9h4Eh9",
  "key9": "4j9sTNENYqnEzSRCaHRZTwrv1dTemyc2EriyprL35AqneU2AXAvHk6fz2yxmGYfVMKZHMqw1riczcsT62cX8Bo2m",
  "key10": "4h4xkZg3o4g4QEBHmXYCkL1zbCjQThpkacfQxCL76yj3BqMTHqCu4NJcCP8DqKuk1bb5pp81ZcMbYHjTrzqWoaGi",
  "key11": "449As1NRx5JQdoWqdrqHnMT9Fx3hVN1JSUzyuMVqLpJQVu3bPyhAYhUzviV5nthFjvX1iFNZ9Wefnfnjkz13oLBW",
  "key12": "3VXVhrVEbm1CZcm8r5jV4MQUvvE872UzMTreRcDgbdpWPXA1pwGJ8jBDZqBh5XaKUETNC61f8WAew4AKju282NJk",
  "key13": "5VWe1TP5kVGSRuzk8X8HCzjqgywCMDEBThEYRw9zsysJwC1gCnAY38mgmJLVBfid9P1X2LLuJKbkwf9v8an51FDX",
  "key14": "64a2R8HkMg9VMcjP1ytU8oix69VC9h9JvpSwsdunfUkByHPuWwCrbzuHA5oWT1vUQxh36aMoFPNcNUsRJkHYgPR4",
  "key15": "2WvZbg2g1gqQiLPcLHeTZxbu2z6FUf3utVWvVyc9WowXnbUUoQBKhjq3SHQkCde2qymexnaaTiZw9UEKVhorG5hQ",
  "key16": "4aJdYUGMF1GkKQB1eR9KvZiPgAdnU4Sxb7hpShpQpMZHiPbbysGuaf64HYomF3CUu173zLH6LSFPSsMV4qGZ7Vc8",
  "key17": "5b1DGjWQnwfQYLtmz2z7dDMK5Y9PvPESNE26M5X3N9QqVgDmqFVcMXYESqBtLgPRq8gF8WbZk4Z9RF5DEp4j2NPo",
  "key18": "b8fcg2Hb6n2QLRQiQthVZwbyGSgSQbMMev9th9PdTEdqcV5sY5iCe8cavyrEuMQSFXRc3ut1CVhiSPv7iJEUX4q",
  "key19": "4HCUn5LLK6KAB9FzZzxZvxdHpa8AjGZqifQ52o32j5E31yzmdHScdGj64uk37cmzyrAHngQE83ifbvX4pFTRYf5n",
  "key20": "La4QMfmTucMH2G6wrBwGw3RHcrCyP6va4QjP9Lvc758p2DFfoypZArTgAVSoASBkDWVpFcqL4fSyeYurQJhE5cw",
  "key21": "hjW8bZ7Qft7NfnA3yPbU2jgWx3qgbtZsx1Fk61M3phmHtoZxDkniemaM3oxf3vxPG8s3QXuHZL6k1zv3XAGg3tw",
  "key22": "NUWBA7ZMTvUAwbWRDAZFvQ7FURfvat97xPMEEjQwNmRfWTCCQ5fRAJLXqjiETbfjuxNkagMbCi4aGdLfANEyKSH",
  "key23": "3HaS5k2tYDYzedKLZqozmjjgdaTWZ6o5j3TTisRKC2YWfiufTYQ8csh7F7EgV3N4rBYb3F9kE5cNb56Hp1txVygU",
  "key24": "A1HANGJGxUMYE1zoyPuBDAnDuEYTLzBCPBoKHh9WrpGHJMgA5qDeYdtbapd72uZyPJ43jtroAJyaNqppCehn8vn",
  "key25": "hCR8pMK6R389v2K7DJjE8wPBTvdu3DS1hV93aKZcuVb28cvaSfiywF9aGii764rb52ssLU1cm84vvwmRmoPGmzk",
  "key26": "65ikY9JT16uR8fAoKvb6Vp13mY9QUUHfVMF6qFSffmRwCES5zVSTrrTttyWyn9Ubr5xsQuMeu9kkNm97yrXgaFiR",
  "key27": "3iwigEQfRPTedE9sR72oJFKC82Gm3k8tw3zTKDxbmgfXHZH6PyacihdesytzS75mJnENTKdXvupgbhQmxJRjh7QP",
  "key28": "47S33hNZH2J1bW7KjnUh8B3k9uetY8XZWuW8QM2qewu7D1U8yZCmrpcaaWd5QdMsbbuMQKKLwiK2Lch6UbcoQ19y",
  "key29": "4SmFvSvR975E96W6fyG9vjvXKgFA8XFAeEUCuqSFWKX3GHU4QvKYXgqdQrH8EAJx24CoEFihTGimGNFnMowKUNTd",
  "key30": "4wgkHimyybimWfkhMbeFtk8UnVeCCpzNbMAJX1rJUGZrFnEAtA4zweeKem5sWhPV8HrTxvpCZ1Wn9psW7tyt312R",
  "key31": "4yXTyXZ8whBPTCbgBiJePrfhVv6vkhhduxpF5HbTgPfsoyEF3rDiJfTwXszbyn3HWzdJUkT3MtQVVwCcLeTtsQSU",
  "key32": "3sYzDQQEmwqBqpQ9hzsWYCVDQzjjope2cpX3cEHbwtxEDyYzAAEWRuykRojByGzgxHtdX9gpm21zAHf67MGoteAZ",
  "key33": "YJnngeNgRKpbPXgZHQ6mEzWQvLRhf8ZSTBkuRvJWBn1XfKZfN3d2VdWzHJytkgrayH779VpxievnVW8CLenagJ6",
  "key34": "T4iyE5uTbJ3QrEMPobKSRnKyaUmBT7YHpGzeoi2xa61GXGcKTuYejCt8D5szgaJEETgP5jSz7sJSnSS7RhJFtrF",
  "key35": "5Rszuw7FgqqHZNz9F86Enr1cXxoPUhn7Ww2QkPAjho3XU6yUZVigqRFnrhT8eK52MZrwF62KUCoZ9s5KUdREmAxj"
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
