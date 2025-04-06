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
    "5CsgfFLufTUP1mPJPfcyHXhqTyg6qnrN2fe17eoMiF1pNa5TGJu3uHgdtxaDGJ1wZnzBWXfyKTLDP8ZxWVtL6CnA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63TPtq3L9Vk11Rqfw39RsMdoBc5PeFWtVqHsLPwfJuBRqoNrMsKDVEv7xgd1mSbc4ncHEy47a7uKVaxYKpmP1JyU",
  "key1": "5rcTfWnGu26uCtfuspED8P9MwNgHAAENXvXZr1Q6GyQ7JKDX2hzorYSSoFfXsF1MugNFZy4JKgYxqFMvh1VzGnFZ",
  "key2": "4pLwM3bxLa7GT1XyP6jEoSroU93UbhFHni31eGAH1J7RuxtgBYMyniTaZk28A227WhMy3xCLKVm1QhK6Ug31VKy1",
  "key3": "5K8rQ7KRBxYe4PBA3SriRAdj5vA13Z11bgwqPToxD5jWfZYTCPewYmXRf5C6abdF7zWfDUgX6KimwRcshb8Ck71g",
  "key4": "5QHxuB29mCz2fCuXbe8bX51uJoHqo4WZzWrARgQ8gM9CMqHyAHBwrwkMuKrZFUAU4L1QDWNTbUzpxuAywxf6WZHC",
  "key5": "63TF8XMz4pofom1FfXahr5HaSD5CQ7b5mSGMVowAS8144JLeNvWaxwfjebTijZTGua2wBKjUvF1fEaLr5jDuwXhe",
  "key6": "4TuMKvaN55kL6owKaNLZXT26GUgss381VFfFHmspEYeGy7ar3MJzxRZfaDyuNqnRmj73nmM2mAbKTc9LfEM6g6yY",
  "key7": "4VjNZ8d9w17zzKbcXrMgABTm3STpAFanj25QfxY5eiv7c3bCRngBEJEKC65Y3B1QYxzZiXJhP2HfM4jXSousLgZ",
  "key8": "Nk5KYMy2mx2T76xiw2pivRMLBECFvxj79oNBNxe5MBY9L4BKBSYjHzS2CKLUaLe6Cn4GYF1qmCMpNi2jnwwPNNB",
  "key9": "4omDy9JLQNSEMoVYvECcebf3h9v17y2PDhWBUkhJUoF5yz8NJ4atV3FTCatKZ8C2LPKpVFewNGDNX9R6uzBeybsB",
  "key10": "5xQJpvkjRZKxF1fPPPfAqzPv8zERWrQB1VZxeAfLAdse3fWKPbbEHXeEdgE5NB3zqwNpcePDUFGjkqa5CLcbFLEH",
  "key11": "2KmWxi2oKNLJXrfksgDUYnKXPD2HFw2f67Zcb274MgfxsMSSbzWW3g4GfoaeyQqDyaR1gcCEuSsCRVNXshxQnhHj",
  "key12": "37PefQfM15mczWPYoEHax1zQBr56ESkJAsdXeRGhAkEb2bKi7BzsK65BQs7LH7CVBwF1XexeJm3m8HuKxHK3Wh9",
  "key13": "2dwPBvnQQymkLZV9xRf67MioHUMABipZRmjgpgEzf2VEgbcUeW8fjftDEQB2d2gyL3LijYYYrEeEiLPembkonem5",
  "key14": "seuB4EX5iccSqxFnBUiysYSHn9teC9y7CQGJ133QHaBf4Qnt1PvZm4UoduoSJCADhy5UuBJJsnrZz3Am51QdGmg",
  "key15": "4wTxsocBognXJTwqW3BNFNJEsV9xpKnvPhsDUrqXfQR6GEENwJqhiZFzexEZNk4DrH9DWKmU6a2cNXAH21o8pnHC",
  "key16": "2GLD6h9fyQf7ZvyLzQDHH1VVuXFwkY22wLQxaXAhGAfbNET4e5xc2tYqNvyE7cLw2fEiFwoqZu2F75AXJdCXBPaV",
  "key17": "bUe3yjWwWthe3Jt7pzqoRMiUv2XhKwxhNVcxzVszcHJE3NNbiVoBkTbvXau1pUR2wjRqGp4V4BWMCLBv667iYos",
  "key18": "5L2KLGzK86jw1WKWHHkyMoM9HjenKjbEU3aEQtp2Au1ZrpyMf9fDxzk34wT1UadkSQgisNvr6qqdMF1vMdmivYMw",
  "key19": "635cBBsr8LcXErfF7f6iyA7hhW5cLBjssDEu4VcTFhR1ZE7T2wDQ4y5J1Cq9ECbVBWBqihBM2AgPeTNzuWnQfB4K",
  "key20": "4v7HtjAKJLQ91yDYw5mLuhiAPVw5J8oy3YzxLav7K2FDNaRqQWr8NWgpoDvD2BYhKbS3pu7tEPmhNMZvYALyN8WA",
  "key21": "52AYhZ9E7fhKy1C51sgfgKxwRLF5N4xg2LiVs2An9uU9zPVduKjV352uT5xsQMC1sKjyLDt3XwesXmURjvz5Zom5",
  "key22": "2HXCJrVN3wnCZ82MzDd7HDVMUTrHpkNd8ftQsHwHXxgyCbVvGG5DsSomsnkPAEN84gpK5KAsUQsxy7Jy3i5kKwi5",
  "key23": "2GFtQKpf2VfspDyZF7cVBrHf3dKrZPK1ng5qDEhhhcZgBCVX2eqi7JvTSUHaBCnzm4tLy2pJXwuSvc6kuWR1FazW",
  "key24": "2NN79aqzeTpbDGwRECLbPaJyXWtpBP3GaPvy8mSov4ZYFmuDtGGFQmtr6a6ecnVkBQgq51ZgcUqGR6avv5yhjTnx",
  "key25": "5Z3nW5miRjaF2wtn7ZEoMabX8u66FLQvuffT6C3RFkL61z1z5DdBHSFUvyA2tFDdHF8k9GffszmcsZ99RQ6pCdT9",
  "key26": "4ePxizShWUfAoEA8jSJFPt4fhwcJ3bTzCmAQbC3aR9V5GwoGzDEcwtVKp3U8xu8SXAJKX5uagxsYU56dj1X71tXS",
  "key27": "MuoB4VFd6SK8riLE8pgeuAo3JV17B3nCTVvMcxJWdsBPp76bcBv4bDLfSmXfGew4kEhu7rjXHKs1KVM2XC4cEF2",
  "key28": "BL96HWdw7fAd9URtgn2bpzPHakP61B1nz85XaqFZXYmtwk39Ef67njzC617xBL9cASpTBDymCiTCT4Jia3nJBTd",
  "key29": "3tUAXx9hYSaW5oG7JWfjKqTYV39m63nTKxZ7X7QZjW5TR2UgSgrHhJfkp4HXuwLRabskNaf77Wz4YDnvnCX8mnmq",
  "key30": "evNf3V4vC9bAN5Xi5cW73NEQbsEbvHnT6gHDgRXvD85vGT5WJt7QnDV9zbETxPk4LgRku6VstVmsuofq2hEJMJA",
  "key31": "61tW1gP7MnqmfZ8iDUhGuiyD8eJ6xnQQ21pBCjS2YJUXfa3hL7tYqjSrNjWZYhqdAdDKzcmYGFx6n7956CYKwU9y",
  "key32": "2PREdGFNS5UJnJWdj5fjR9RZ2jWE9y7Df9jHwpQxmodPZacYueHyacSYEL9DcXPBUPdh62MHdJX2HvhKXZ6oWGp6",
  "key33": "65twRYFATS7Ghof3YoEVfL3xSm8K9rxzzHdaJiLqA6fT34N1aKxJq8RRWetxPiF26gyieHdF5juy75RRZqn6oHUL",
  "key34": "52AYeyF3JA5jmT7WshYG32tXDkxYJqekU4ZxfvJhAkoomfSaMNK3Y26Bp7w7WTtrqoUCEhYZfxWCRHmeXpuc8BPB",
  "key35": "324wkvnT3HykxSRqSZFRX3X82MsfrCKXAnZiPTLVP31Dj35M366m9VJfvXnbTJPpe1kVS9w3V1Q3JT3RhQCyuoy5",
  "key36": "5hBAcXaFjKKCSuUQkvMdqkzjo8Yjc1jXtC3TaMkdyZWScrdVXLEM189yAbTz3gGvuDpY7RTdqWiHisYLfLhp2QTq",
  "key37": "43JWAu14upq9bEws41qs1Ahjo8RphbFKBKcNsY9bMmXSwQsiNfSzNufu1YBfGChZQVfkxQ4xwcunrxGwwm69nYb9",
  "key38": "2T8DwRC2tWPXguHPSzGhFSVN7qwK3vLDEEs6VUG5NAbqzfhiMoQ1XP5Zqau7Unudy2t6xTGKZA3BqPHNUQfTGbXV",
  "key39": "46u9NJiMsJZfWZV93g4yLnrNNrn77NLjLdjhz3boZbNnG5mgbMp1JKJKkTfwATfE9qwcdJWWBgixcuZdHrJdoKdn",
  "key40": "sx6xjoNwHCUdp3nCi9gGRbNXfEASixHxKiHU2XUiDsmcMFBBJPqN7ecHxha1gxXAyJ2qT5GuF1CiiSMUJ9qhNxq",
  "key41": "5qwKXdaYihsPWqGSFTz62A5rJg1CWNbtGArkrcUHkcEPigc5PruPHfQAmird5bc3ZWVSAwDzjbJixdcYgfRNaQJo",
  "key42": "23oNMFZmb3CguaY9SPfQoyGSPQX3hLyrX7WxzNMTah6BQXatGgpMNdZiiAUFysjbx1eswg2szbnP6o1gwD8rR4pe",
  "key43": "2TvBrD6fKAL7nWmtnnffUfxqVcETJaN2jvz4SFos9sySYM4riEESNXfM4VF2KiHmKtJ5wUjLHnBTknoZMqRhfdyp",
  "key44": "5YVbrmvsLhvBErcCHGps63rR4BuHNVKBz8E2vrd2HbxpaVwNQH11KeeYBTQqeTWicuHGMwJ6FHZUZAVcq1D3EAF9",
  "key45": "4LKAFJSF2bwK59ovhhfE72LeBsN2wmrq7LCKWEnp2oyTU4vMZ8fUgFccPG85Sbu1nRAotqJBrw5kjnyXowmGbFmX",
  "key46": "bDxVNYpChjcerb1Y4mXBe4YqEudjsbMX9QXJueNQEZ2dHtBC4WRxCHhpNSv22acLGRjhF9SEzkznvKVErUkgQAn",
  "key47": "2m4ghs1QsgPaXLiRtSfCmt2oqBYMSGpUbP5JGqYJjdqy5L6Ha6sLJTJQaghPh5sCSePdaB7Z2Xb5RmVm4kytfdM7",
  "key48": "QGCCA2gjmxynTSEVrzdpu81JqqCPx9bJhUU4EeEcxDYGWVKxqNkNoCD47izEB4YUUdmfav1CEmARcfj2iALoTUe",
  "key49": "2nkVxJt1RaHYLDjmKwF16bsf7PY2fJVqBQRBLwuVoKAjyNpYUnKQ3cXtTA5PNeSgJAV49SHVx2FNsu3zPudg7M9G"
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
