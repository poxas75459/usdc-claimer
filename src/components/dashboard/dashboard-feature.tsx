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
    "5LSULSJ9Q1aGru2STmGa43CitHWWFsE4nzAYiLsJkbigBGE8jPKj21nAvZj1b3bKZCMRAQJvEEeQEcEPn3zdhjgr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RdRkiWZNRxZSw1m2rjvbmpUmDNdpg2Rn1TXiAZAsmMwHqTeqkP9jkGnBD1Q2cc9AT32tk6QUuP3PebukjtGLZaw",
  "key1": "1u3V1fvWhWYd74e6ros2XyPJL7nP5ggDKiGVUvYVjTVaJXvRYdBMVnfrc6Gmq9GQbfc7EWCHb6emheyiJzDufsg",
  "key2": "5nhAfPXXjiz7xNd3KjstFYhAvt5Q5vGnKpvtsCiHifSCybca1mgDr4RQdw7PppPYbTFUbUuK2GAvYhNGoMKndquc",
  "key3": "3gr1ktMMcGbrpEzCZpqGUr3To9dAjKG2vW6rLVqopbH6LMm8HnxkqSbDPqDBdRS3aEaYNi4G7M4CimHYD89uWwD9",
  "key4": "8oWWgcraotVCfPge48T7LEJTh61Uqap1vwFpKHWVK14gADXq75mzuMCqeXk8QqrEmvKcM747vawpfNvjcbvMnfV",
  "key5": "i9VLPPArH8QiksJ6TjimByc7GGAwH1eCnY6FQh9XdAfL9R6gUTsuZSxTfJhjze4Tv563ti7LDqqA4ac7BJpopfe",
  "key6": "4xv1WcU87EHz8eCWBDTrjurSr7R9uqiEobhELtuEagd8hwAYF5cWzUMsUsgw1m7uw3AUwgo9pfQQ45oDAUk7TRdC",
  "key7": "38ydgQ3kKKtD2rr9NABbRgnMqogHCXYF5ToX8TJLcwLnzsyFKJETfyfkNhDgAokfG7ZbBLGbrjrpe7u5hVKZCTkz",
  "key8": "Af4BdHTCvYKscLBxFagzxkuG9c2ScJTZtNTnAUhKCJMkKFybAb3AShrRDBnVjztXdeDiez9JozsZtfmRSmCCqvu",
  "key9": "5HqoEfkB5UfYcZKsBMo5NTV4rD5oVJEoN81M6iYsq4KdALUepo3zaoddDTAA8ajcmrxyuxwiFcRXRKnBXgF2PL3N",
  "key10": "3XHh1PawzgVcVAAdbMbMEyQ3np7zwWytJAwujV5vs6MFacr84Huoa9Qfo6pwhjDiXTcEGdKavweJGk4eG56h3RnK",
  "key11": "4W9es2GSDdokAJYszQfS8FaRfKkzKSr3Yu8nZYsAiytqvCWQtKzED2oouT3QHcaP5wtJhq2CpHM8nAj4szmEt9S",
  "key12": "48STdvbkUWhouPtmdt6wbvxkr8ruEiTTzXEpcPuSSRrNxtTQPmg8MH9ocLuuT3sjxjoS8e9t77BDM7BZRScbT9Dz",
  "key13": "5PeRvmWy5jysFAQy2Q5rZexjzn5KWPif1Kqh1EE8PsE4k5CjKWDAL6rMyKM7rAjkpBhf7eyAtJxFumGDT1e74rJA",
  "key14": "2JMLRvWcE47PUGSjBBRrWSQ5F6kYGSUcb9WPAve6dnTrFP2VEZrqT6tNEFEj71nrfiGKEnrEfZT3Go8vW9Tk6Uzr",
  "key15": "5JZUhBymJ4BeRjz6Jzotm6YVsACvBzR2F1ZnA22ty6cEiU654ZvszULodbkdWbJJLH4vCMsHqxJSi9bZMJLZCaFw",
  "key16": "4B6rvipwTY1BJgmYGDgSfQhCe5LhsRRuaPmaDd9gxgsKEGby54x5Vg7Es9XEv6iRqsrjgeQMJHDn76SWuZTgkPdn",
  "key17": "2TnzBCcS4BHXJDFh6jBSMnujFPUqB7QHH3WhPdyTagCd8osrLMdNZyzJZFrmo4JPxYRgB4Nvk741Woxa7rfXEVov",
  "key18": "27x8wEESQEDXQ8pmC7EfEu2H244fpYEbx73UD2i3aKUZtpqss9xzn7Lj99WSNErAdSFmupFUw1zH25VESGbc6BKA",
  "key19": "2bhDo9FLWfYPxgtV4pU1V69NYo1X1TkybbexZjyTFj4PA4Uykbu4tFMDvsyJ3KRHn2YfQJz3YFEQQVyv5w6VryNj",
  "key20": "5CyFvqAeb77pySmxdF9EX66TBUc8ZkqHyrtzN6p6DnvCi3Yv2SP5uNymGYegGBtL9sEibwzSPgCXqbwremmuDxLT",
  "key21": "3zSxbtBhvPpPGxLd22JaB565JQyu8SUSYioP1zSLRLBXATRdZSXG1vPBWhpCBTRGd1Hb2fEy3aLTPztaSndGW4pT",
  "key22": "2Fy5h1xq9jEWxaouncvE6cX4joXjP2hFAonT9iVrCeQadxNJsLJ5zpZ4pt2NFdCwi5vB5wZ11vVaPuhHHDdgKwc6",
  "key23": "4NEKoB9xx4x2y7kdxZhihBxSGfwWxLgKps2xdyUgGvpF36nfdwYt7CyiS8dSgLT4chuJQnUtJ2yoVQb6b7e9xaQ7",
  "key24": "2XvkFQLpTdKEhWCnNzYksX3Mrkjnts96n5perup6ynDZ1iJ94F6aLxWkbxs6ZzymnZj2vamgfDrn9wU6SiEmss2W",
  "key25": "3Vbv1nUShXmZ2acKvjoV6A4UJGz8cTLaDnHbaZYp9EesYeLUegwh5TppcDY72zfR19PqMiGbQ1Xom6o3SoTQShv6",
  "key26": "EXEz3td9iLxafuK4zUcXeANdA42GeKcHjN1xqfppLsfpJ1znauGrAr58Lwc34ncCfb1D5Q3qx4awCQLN2RBYsjt",
  "key27": "5kpqEFgSV1EMnR5wBSu629mkgcdwpfUo4gdNZsZ4DtFCqjGm6igwcXVeh1N8KzXkrXWszwS2fPvwKfFZPjM2wDWd",
  "key28": "5EMMgX5qNyyvDWDs1HK1SqmPon9N5QSu1PYNokNNmCBPU9EKNCRzkF9tkdh4pna5hVcBv4CLu9ChviVniX7yFbNr",
  "key29": "4JmtZZjZd5KcPvdJ1v2zZzGfw8P3x8SLKKnGstYyKd9yLwVBaLUAxushy6unxgBX3k3XenC9XCsZkuEqNfxogGPZ",
  "key30": "5kZgkAZrMV1CSN1ceSUe6L4XdEn3FatNtZuEEH1EEo4pRwCag4njJVDLzDjZnHmF5Ch6ohLCDBe3kYQZuxmbqaLb",
  "key31": "2ywshWzWR8HzWyhDm3SUCvRftQP7LDvfv82xNs6Pzw8Gan1aj9EcTeaLYUucZPXweMDBBsXJLQ9jiSBmPNUB2Tzu",
  "key32": "4A5F492R5yo6Xwy2EZCGoK5Cb9wakrBPbVKN3QbavxkfYso9zkmaQRFRtxFceQ195drZDPnPQ2sdX4WfwnsDHbD8",
  "key33": "61FSk9aqkdjNbk3rZdS5H41wAYAM3YnmrK9yzstxam31QaV1jt2ucvJSvhnDcW8Zqe6hhN6AFhw3wgsEB5DRFRnw",
  "key34": "2KNwyifCSrHDX7FDpA7RgeXJuPSJ4AuuJYaqRfKjreCfizUWG8gUi5jzgURK4QsDrzp1GMULMb3EPqnyy9aojiDW",
  "key35": "2Zv3oNgMxYwzLgcSWfNPhqQRcbSBtZeQEfw4d7JnxhrKDa3MCCrEfAt8t1thC1U5g6N3pEucmeNavBHRpFxVCX6P",
  "key36": "PyX3Z3H129nV4gEAEqUNhtCU2QfqTd9m91rokWj64LLnXvQuxuyjUeiu16JtGNwzaJCUa13u991xCWig7KDRcGn",
  "key37": "3qszsDVLRwicmmtSmsmpsP4Uy1TwWtvu2c5YvEG8A3oSGj3cu1eFUSwSpxyftUjbZ7LChHaScxYQMpBBGYWca5gH",
  "key38": "4wTbgr1eQqNugpDXzhdwBNjStETuwFCVhpG2zF729wejGRR6mbnEhcUZqxDf45z97o5viG1qCWGViJGjmZxAYEKv",
  "key39": "4fdn9Jn9Yk1TkbcrVdyGHhdVYVinuuZuEBoJnN86Lxmkkq3s3SVLpbiTwYEi4vmvSC5uv3UEKxRxqmRqezB45twA",
  "key40": "3KcNZVvjoeha1Lo7Yg75yfKvp98ctYmjWZ7JYRQkhBBjnkREuEPiWCcAGvpyjkrFByXzui79dE5Q61XZisbJnbyr",
  "key41": "2fdAUHH7zUE9WE74U9NtqVmZ5oevvn29G3us1TqeQGKaWmeTtaN423NhmNRnbibMPgvXjNvxMhKGjrhDMhFdjm7N",
  "key42": "4XptdTAT1Buq14MirYno774SEkajCBnRS3gS6oz2nmyy8jvpznR4urBtLds5s35FN1xyVAqcxdHdCJ571PCVN7WJ",
  "key43": "2UmoTHEgEDtszV4w5vSmtGXTeyrWWLvuykehdDC2XqfU6cKQvfES9wfNCNMhV5yd5quFYfzijcXQKobUDGpKaQoN",
  "key44": "kKnXC1fXMdMV5tvGMZTJ9arW8nTdRScYjmddb86KhBTeN6d3zez35iEEJomaAL9awpFxrzyf1cugiu8cXq2r4Me",
  "key45": "3NP2gw3Rhmq44jVrdsdFPfGsmi7jx2P4Wk5YXiPXLZYmHDemGiuPitWAUjJDAXnLx4LfUDume52TvqnELTboyXJd",
  "key46": "2KRd6SSS2QKN8LQRfD6V3J9PcbRGtNCQoa8RpniPn6Ac8RX9vQRpxLBWLdszurptPfBEozmVkAQFYTgMwDBeKdzR",
  "key47": "3uhZE37HcnFYoNdwb9pXrmY3p2ax3zVz7AMDucpu5Nk7PF11ZPuaB6UVyhLsFeBjabDbQbuabZ5yeAyMnA57TwE1"
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
