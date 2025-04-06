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
    "31M1DZz8dAQ1qY4zqMQqameBq9Le9r5xa9dtFGEDh7T3HpejUmSD8ZimdEXoh5dK2HvuhJgeHrx3wPQp5FJUvcQE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "v8f8UTiJvwS6j4MGdYDfXESjZBJbqbF43uxZeziCuSfDWtQKmQVnkZY6TFPhbWJmKwVDMxXZUhcuTvJ6XAhGHXA",
  "key1": "3W7D3vA7UpztkRyDLwqYuhE8k3xXL6adH26AcGL8YHnRPJ6dFhTF3cTAjV4MYHULQZy4E4nfU4KCxN8a1cPc5NbQ",
  "key2": "3TQhJWBa3aUmDK9KAsk9REUtL8h2Pav4qLTewVSf7KqH1dLMeqbCVRkLw8jnpmbZw8mNYM8LntHMdRkzYAWW94Ls",
  "key3": "4QTtn3fYHkxyp4c44EMK8QfBDaudy74pMUNH6JFZgm2iVBYSVKiR9L2tqiyMxkgqusSm5yrDDgsCn2Q4vKKkbQvn",
  "key4": "wm8ZBZiXhK4fK7r2iAcLbuQi43g1ejiYG6AjBxP1TRuFgQeXBpsHRnKWmGZKiDj6QTBRzmjUiGSPVDhazJyUW3D",
  "key5": "55EQPsVBeiQBHKXUds5x86uGtNGWL19k5K9JYcDG5EXAV3wtu1nmBodoDgQ45ppyFeaSdyYWwXCTbm7RTceKL4Yu",
  "key6": "3BBNS4vZo4sMQib1qbhx7ny2iZQ4s5D67EVrY9uAKj2VJUgj1YjAUQWDRvEQ2ubXuRas5ap1RtBygwHrck3LS5Rs",
  "key7": "5W3dQwproTyT3dthjajzBRKJuKENvPKMCuW2kGoZ4nMT8QXew5iTqYtYSS34ZxuMjGQWGHT6HgtT1Wywv7poQDkP",
  "key8": "o4DgtX1BEghtR6GtS6rnuXJpZz7d6Focb8Z4ymjTbgmKXsDn6swDXYaDfQKKvtAwDmncFfnN4gMBeK2CkUNFF3T",
  "key9": "2hhoFfsTdm7i9X4rGTQPw1YRGfdVYE7QY3F7AMoWvtM3sZPxizTkkCPhhRa2qWR5Y4ZmFzoKWbgKR62fQAF8mz7b",
  "key10": "2TgS61HRM7shWb3pAd47nS6udcVEZVsvhjy5qGwAbZEjQUbaKEbCcfu5xsy9t35Aqc91q44n7ANeePhFLZXDaReu",
  "key11": "Dq33ZGAzjnK5FoHhdpzLQQkMg7h4y5kfiHoC89n9zBoCGW6dvWP7DCqvg64UK2ihaWLJj71jfS3Ubm9XUpxp4vR",
  "key12": "5cEz2g4hdftJR8KTQ2W6ne1Mkt1giBWxwNbVyFyX56LcNkV2KCEJGT1n5Mo4pJiJBDoFQcwqJ6d28dWfnzvFis7F",
  "key13": "V2UHtP1pritjNCh71h7FkRc2eqjVkR2k849ij3Cm6E8eC3htWSzAatN36h7oba5yuEMAyDmSgByfs6EjhaiRBtX",
  "key14": "32BWjcwbabsQA4L9swtF5nEcSzM8MSKb6nAMEz8mD7nDkrNaBVdYNk9jPAwUSVkynwMKRv7326EbjE85aFRp1ERT",
  "key15": "3biPjVyFpHbwurCinK2bJfpAEVGexJtDvks9EbF6wHw2hGRTE5BT49yLa31fDkVFpy6f1njidxMfqEi5VZoW1zPJ",
  "key16": "3bKtn4ZyneKLVSbQjq1psmuMT9p3vaFWDay3JdzqpBZkmwe9xciyvJgWKr7PyhmGvNtCob1ztZpyUcQLTbWbKsTx",
  "key17": "4X414oaaPMEm42ajZJBFFE2qF7frE3tpx39m83JzfRUgu9PEHx5sPSJwMmfyRfVo8zCiE9qjxf24nNm6U1VjBb8v",
  "key18": "5zXTDX1E14oqgUBBB16rjXU9CxRdQDEgzB9sFKajAvKQgCYcNyg9FNAoK31BgukFhMN7JhDuUenZZ49t7HUTfG5o",
  "key19": "3PE6a8zrwNqtYZsxDz3DAfoSvpAYQb38u74gDAJGbWiRjpZ5mqXBjUfk1rpcuE1n521FaqoT4FRDfvkXJeB3GVMA",
  "key20": "4t1us6oehsP9NiwJ6gQiR9Yhc9cywq1SoJS7fshFeFuRW75MKtSMBWjPVD6bZBKVKDkWSzSvGQgJjdwrR26N2R7e",
  "key21": "5bxH8kFEhHGBps6JrHkToHW8jFuZ1coP2doxDh7ukYUNbtX7GegL1qhMRh6ZEpyVbzv9NYxvnfypTQ6vuR29qiGE",
  "key22": "edEc39zguVarnG3hUo8QMKCfuhq9BenZJacqUrC5osioGF9SwvFtVVw8eP8qpqsFz8i1gNpDcnYYiQB4wvDMsus",
  "key23": "5nwFeDuVUU7C1vcTHwkkKh5G15ss7ife15hGDewGET3cJcJdFSVhUuii7H6T94PWYr3jq1JpbGZhqNaZ3EwznRvm",
  "key24": "22PhiQf7ruosJ7dWbU3eCBJtpupHvyKpXQwkMdvT18CcxQLuv1zCrqitoHmXdiffJUwFgKdDt6kCf57dzWgp6tjZ",
  "key25": "HEWW6dHDUcAgh5JtVu9hRkrmBQ25AWLhrw33wwE8SLvX6e3jEuvKcHzy6u7Cmw66WvNTrF6JUN7NNdhUiKdyTDr",
  "key26": "4hNa6rpPT9V8gM4bULoKx1UA5jp41WjsQHpAiiERQrNQ2fUTtkQqXsBGVeJjSypchx8NXRHSTLppBFJ5gLkc2A3n",
  "key27": "34Zu3mYCD6T3AuBnGE3gc3kyLfTC3ZMGsGUFwja3Nm4yZfnUfRiLXh4epTC4LDx6ZqrcYvZLW2aKfddgf4xhaexi",
  "key28": "2MKgpR7qa6VE6ohMbRRgg1xb6by2a2gAAuv1KSgXfcgRqcE1ZF748t1oZNwZLXzEXFi5yS2gui11ybDDeqYv26zJ",
  "key29": "2WMxktAKv7aDdRX9pjBpVkRwBqQavpnrFPANtAzjPrQfuiy9hY2k43UNS57mjc3Eu9EXXGfZN3tncbaHxmBwPFTS",
  "key30": "2WNE9nbxyaEtk5L39jSfdJMBH1sLNEdYonvm4bMnEBsMvpnktz6K5g4K8aptbNFqoJTrwvo7h5V2hax8CJHinFPD",
  "key31": "26RpYpRJ6WYmPxtsizZmMhtFpE9mC7zYwX1YK1vATkEWo1HmgN6eB4euuxy31jhpv374cuDqXaiEx8NxhBU6bok3",
  "key32": "RCErNnp9e8FkzmrQYy8MDypNo8L9GxaqAF4Tcu1pzAa5AXa7KHtWvDAZpvMQPbUZahJ4HGB9W45RrvgLryzDHS6",
  "key33": "5vWpNUFATfkzBBpwMGAnuaX5NjHPdzXGwqtYXPVMNcGSvjF4rT5s1n9nvr7wdPppwwgGmjvyP8o6xV4UYLeAEbqy",
  "key34": "2xy1zBkKy9RQxkv9gRustbsnSd9GJgQCvuhyzrFc9JmGhG2mYc3UoRKkaEzMKqb6bKQGo1SxQVrJsdz9XQcv6tBc",
  "key35": "2mabmKiW5YXmajTYtctRj2D3jHQzk3LMLEdoNaSNjqodVLno4QsUHdZ4kHbydkiGXzMZy4UGdUFkjxbR6NV8Gxmr",
  "key36": "2b9u1ggrHLXrB71L57EkebodWP2whGbGzxG4s7dnrK3VkjGbbxJZk4uKyNXyyB5Zhk66v4XhpnUrRKFLJfX9MWi",
  "key37": "3bQzNzPxPSn2JntQSoWim6AA6ctqjkxPwMAmZrS6GzabWyTSd1dGA8o8M4FRVv8Z44GnqEch8odYCWcbdBdEDSTP",
  "key38": "DgnQ6NwNVGRxwT3Cf4dUsvTXnn7ywwVs4jVmaBLnFG5QxbRe2UG8RX3JqfGdn3WvgD54MJKm3vpcqWS2Puo8Esd",
  "key39": "4pZmFyGyex7Ss4VoD8SGsJDYVnycTHuFCSZsoSJ83ZArUY4PesffnkR44NrdKxZqFFZ7Z1vj8QAoJECkFtGCHtY4",
  "key40": "RYvTAThEETnfewEKmPKoqtBeovzY3x7htDATWcFtuxtwmaapFB1oGie6HirHhxHFU5ARRTqXEkA8ETzRZD6nyVZ",
  "key41": "9tdUgugy5r9z8Yqo5nBM2LFg95rMNQNpaJ7vGGhCNXErpSmFw79AEQsTPsecNicgS3bYWwJ14nihxQCpEXner2X",
  "key42": "5yRyP2KpMqAkCAVRX3up2vcuWvGcoLYmYutnhTqn7aVEGNewfLbDn49vCQSzd63WvknyuoJ4zNQ53UN4mPmkZYsM",
  "key43": "4ddhmn7gSjLwNoJhocMRo9teyQURSp1tYydBr38X32BEd6NQ6F5ZeGRR8nZZLJD12UinLdUt3X5NZTSJknQdRpCX",
  "key44": "3qkDFRXkGWXCjXwHHxoQ9w4NUaPHSzwueBa2WJp2E8zhvFyasHkoQQbngXrMjZDRfmFjEEkW1Wbndm5rW3GukvtW"
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
