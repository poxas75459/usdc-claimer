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
    "5W3jWXhRCo4nvoDwJkmwdQ2aMDBzDjFCSmFVDqBi2rvghX88jP62vuTGia6zYc2DHy3pEwjpMUaY7vPHR5RKZACZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cRSBXcpqRGhNxxmRCL2qXcGFpaWLuA389B8CH8ahYC9LE2chNaWZDHP3ats2uzJhJ7CeTc8W1DBiVFvUfVb2PdJ",
  "key1": "5YaM5xDTjvPLHY2ssQkajc74mjYexb6nNZREQhiSfKzRkhZARAd57ZcujPgcLfbWUCpwS4KTnrQyiSdtrqtnvyJ7",
  "key2": "5qvH83i5ntuX7RySc6c6b6Hmi6spvhVM6RCx7MWiQh97Y2VTDveGbPTiQqAAKDXz3b8tbh5rLqQmywnvqJcGdxx8",
  "key3": "2QNwMkTJvTzx4fJeyWqdbdKzxUrRgpbJFLTJXxFQXFo4JaACz2V15qTgztJEcBiYy3tLbErrzsujG3vMBRpZtxpX",
  "key4": "2wmpc2NSdL2pnf3ZzaPsBNkAr45uwbg31ySLg9hpp6vQxU8AByLfaYhE3CgJR1CZbEHgyJTWPrnE3mP27KsUcA6R",
  "key5": "49bKk9sVgq5ZUeQTRT3z5zX8U4B31eKvmhjmgGqvGz4aoMnLnSx25MgGV3D45qo1sFEzwKZ5VxkvzDjtETS6tJG9",
  "key6": "5QQytpAjgygcEocYWvERyAPajxkjCgEkUMcmZpcyPb9HEW7snSvMwmSX9QHYG8FGzWzV34aGuufvsAzX6adtQUjw",
  "key7": "4s2EzHrwFiWoo4tJVR5Mpm83fzrC2BvArjBdvdibedkhtXi5UeTGyUvksRSLXYzpBdULjdHq1DeasJF1sJiTu6s3",
  "key8": "2tq31hjNw7Ak3HShojfGxvE5EVfZJ5PEyHM3eMNKjXJYJQv47j7n32wqbUYRccqoppd54akXhg7oYZzGbMj8koLe",
  "key9": "3i1rKnEPNSUna4tYxhqJghpRGChrd1wUiXfWydCuzpknGvsceuQgEd91P2FNocSweqRJsPLcedSQ7QbvqSLu511N",
  "key10": "5tZnYfxVLNxkuLcb7QAVw4fWJeNzMuXhM1PGojf3jtcDajwYHwHihcdPuUvKfNRfrd5fe3Z1MtNEdx9SkNHvFD2",
  "key11": "4axfQyHnETyw7QPGvbdm96fXh1m6rYsSzBzex8w2sw3vehka49XUAL5FSjSyNm3mRtRbLvoqPxh6H7wGLMunJk1",
  "key12": "zvUxAJHHbNYFXXTimiLvcTyjXp2pgMrheNeajs31cEpgRaR48LnZbQwmuFHLsQ5xSg2aBtXTeVbTp1uEhyqscMk",
  "key13": "3wvrJRRB4N6Zj8dSRoAFgaP2YnqxJbrBbRXtbhy7NqsXSdhYpmPu3qaErV2EtPQEUL9ugeJTGDnehFm81p8qjW2t",
  "key14": "2UA7dXPiiLrEUDR5VbMYY8nuEP8WQzyyA3syc2BVgzMs2Hp9Y78tvyyApk6EvFncvRBPFfwgbf4eBJn3BYynBu5T",
  "key15": "5VaQ1QdMSUmTtqg1v8i4vgvg5cFZk9TS5ayvvs57n7xtNrYAujZYdUbDv7rv6xPgqkaG3qvZBtNJtHuc7jrQ8PmC",
  "key16": "3TiPtL6fwd5LZ8gxQB7f1rf3WHzQbMTYNMfLYbpdwVKyyeTuRim9DJaQNmqxCFH1BQX7DnGUXBeZZvnbw36WGrcb",
  "key17": "3ANoXZbT98Qmu5abChmZ9AFZwHzaiPfyXYaNVe2W6xE7AT2rvjfy6n6frXNxiiDBvSc8m3mb7kjPEHxf8KtGwiPW",
  "key18": "4rcQBuE2nyqsRAenZjVvFFbKMcXEtZKFPAstqSUZoDi2Er42WfJRetf4Qh7hty76yrsxsS4fii2M4Wemw1zicHwk",
  "key19": "2hop2VBGBzjh9kPUFV4YSNgGjYyC6GpN7au5uKvytZJVMH4KStjEC4V5Gvpy7iGvBtKCUmSnf2HNXtncsz9tt98R",
  "key20": "5ZmsxvN1wQDseuC8QAA58K3CrRPs5nNeE89K2YWN75SAUpAxF4WyZG5JAo6agt92QxrNt6WMvbSbjyvesEjaXAzM",
  "key21": "2ZJf5mbNuM1qGiZcyzRpkJYc4Brgqe3BJaBv1QbzZN2gZVCb2fRHb52khwi5UptEqhm58g5t1Dvs3AK3oxWxDa8f",
  "key22": "kNwxgV8w5FVbcP7M2XEJfKkNVRPnxNvN7iUAvn4TweyFAQMmfpPEKtAZKpkeZFkdBVLNFWJLjVP2CvKixTWsGqP",
  "key23": "5NTmgu2NAYrHw9wdBVQ1yzKHgWEvzuZczbns5taJovNmcpkXTgWXR1gMS5HDC3bRWYyArKHqKPNiNZQvfAMtZBtF",
  "key24": "5fUJhNz6M9EsMPR5yxp9uheCD8v4W3jVB7cNH7BhenrRDP95LzVfX3ZBFoQVXtwwgAmk4GB28v1YCxjKxF1Gfo5B",
  "key25": "iFsQiPu859fDmC4u1hnSfSnSatH75w1pumSdBUDYcdfRnC2MPUMYb5nroHE2KCrYz3orF3Qoz3ZMFv66ER7DH47",
  "key26": "5u9utHd5fjtnfug8wYcMsgYBbop7m88kc42vahVQypXT73xV8jE8pJmiB71yeGdsDEwnqKvhbHXCAm8cRYxWFCiD",
  "key27": "4DidFoopXrL2Ef6UHjduNFYB8pyf9kVkHBiq8jmjoe3CZ7XiZAEvJYBcM8U9MVUHfuK4LTJeJXDgBdbEB8XPNej5",
  "key28": "24bL4KxJPZMd8cg1YSCosHGPDZ4TwGxEEFvwkMvwinDwnKv4hd56gu7tTqBLtT846WadTnvNm7HDz6uw11TsZNSe",
  "key29": "3DLUuo6TkMc2tRUtW2Es1uk7mVFeHWG833uVvmSxY1ffHLPXB2s6DkRn8vjfUcmt5BjJJX17jQZCtGodxTGvUoSi",
  "key30": "3ELEpPJLvvwA9xQWHUMQv1emXAAAwKgcuLpHq7QyxyZZY9pED535d5FAfwmq3BiapBiKBJHmd6meDA16qNVTcSLq",
  "key31": "5BSD4EJRpUXfBx69ZAMUkvoowbTZhP8QPo8UnNFnfudr7J3Tw4mnuL81H5CYfdi8n8rDtrwMtntykPfrnEmbVZ3T",
  "key32": "4umDV5dUXZtK4BUVFWVCgfdmsXRrMP3oHiMghBGAc5Yj3UoFWcs8VgY7TDnHrFfek1EahYFSx73s4JqorwpQJMY2",
  "key33": "7A2JsRLwWcamixcrVs2tPqkE7zYFeatG7KQZk6bxFvULYV8BA6gPuwfv62LeHf27XHbWYsHh5YUu291UaxfPtqy",
  "key34": "2hq3cVjmzTMWNAa44QWmtnS164EXtTDm5j5LX73npJiM9S9BVuqH9vbiSJGJzNz2HH5HKRY87u8vB2scwrfC2na8",
  "key35": "5mpsiR2cqjGNbdNtKMDTWANGadRiURqtSYDcNMKJcjxqfx42vqrNaL99bRt1i6fWyQJzB4ZC8Ae8Z9XCQFfKndB3",
  "key36": "2CJgdKTzRBK8mqhGpQGwxhogAbUyYs7y9fxTE75LBRvKusjYHviBieEFaBmC6C3HXzzD8mo5nHQazDWHoq1eD871",
  "key37": "31c1QnpgC3QBTef5drkMA9wdJQf5Rk4JDWo3rY1EUeKSA6TkM524YnBEy1bsBEoqg2Gvx9mhLRS77z24esgr6GYG",
  "key38": "32KNUc9rEJt2r8ptmr9dpY61ukciFagYsoDQoE3tVZRDxGqw1f2fD6Xi5A8QkhiM2HdCAaemQUcF2bHHu8ToGZNe",
  "key39": "4f9ZfgRMRTjdfBrqdKHUQL1FJpPZ5QQrBM5j3McMTV47k2EtxnycZQxUWxTRtMvDPA4XqrDtoCZAGwZ6vrkNNjJY",
  "key40": "4yJT4fJawACsQ4K1EyKgdjzn7P1Xr7HdJB88nezDzTkCao21JGKg6Gi5vBGoFv4BUQoe517ivK64D4Sd2gckqguN",
  "key41": "3BohUfH2k9T5Q7NuZdU2bw2kiX4hcqE4wwbYdWfXsMnhyRvXXFqvdVAtxA2THF341axgfQqcKtygq7CbHT75xuR6",
  "key42": "z9bMnysXrJduYbvWpV6jQi31W29yxrTqFwDF1yKrnYashVdAy7RhKcW1RtFxv19ntkBzXboyg2GbRPMmL9xXjfP",
  "key43": "2mNCAEQMpWYk2bYxuDmcYmsRG37Hh32AMGs4TsAaNXGLefr3YotNXiaJUGSAXYXa5Huk9DuC6PsxVZrB2JrJwzkS",
  "key44": "q76FWfo3ayccTffxWBj3M3tfnK9v3WVhC39SfaCgqGUK8pM4MMFaUYXKXncqmPMchSTgDH7gsErwhXB9swChdPU",
  "key45": "4wnqzcZ7zNfnK39CEjSif8EjRJ1DrJADdvor8cbKMFJwViNVBDjskxDq6JtnywbC2nufBKDJdYftjmS9fdBsA2ra",
  "key46": "3VJ9GUUG4j7jiXwd52PcXB5wLMXr7vTmgrTaLEXMxtKAV62uQdAnHPohMjbyJULwkHshJ3Zv7K5HnW9sgbVCMSPE",
  "key47": "21V24Tewj5JvYGHkon429ebkso2w2WysS5qrYTWbKtm8YRJtzmuxRBp9xAqVVF9FpH76Y4ddGrLk7Kf1wqJTPDjF"
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
