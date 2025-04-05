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
    "2DPyaJzVkUpCVbNhPej83AWYqyqranQRX1cTa5Wrb5BF8km25UrUKVmhZwccUgr7228iXwohVvETAT9LFrB8NWdU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ia6TmZJFDBGw94w4D8zZhQL9HfSDXX423pq5ocjf6iTFcwtToep3pcEbxdhC9SGMtBtQ157MizVaSi763atWjbK",
  "key1": "hb4JdCyVruX3XRqJkB4xQsvQaQukrcXSgw8JnGHUDLFToHdZXXojgRG9ugbJ1KicFHDL38GB5KVuq8pSgkg2NMW",
  "key2": "2UXmm3YJMhDAjVdweNtUVzhWY1SgacU2C2LAdMyv8vHPtaYpidfqvfynQ661mkmEqhTdruefcxTHeyR7L3hTZkXB",
  "key3": "2V9SDaQbVVUJb48643sywd7sLk9gK9EHi81WQH3PYNL8aUQuFm5MSQNMBJozaTfdJ5fJDgDgJJoGeDUAULkeJ3r7",
  "key4": "5ZNaaQJ4CM72rBt5yxnwZUSHTzA9a9tzPeY9t659f9zaJigmDs2DbCkADeCwfgx73eKmKzP1uLra1P58zJtUUGGy",
  "key5": "5qnnTeCpGQtrhRcMsYJba9LKx7FSXdNJkCnDRDqRUSLxjoN4ns7dUrAKWY9QSzzwDfdXzGVR1uZHJvqm557U3eb9",
  "key6": "3raQ1GqxwYjP6nbomzPUUmvEp88rxiYV7FkcE1B1UtHBPNztrh48yvsVcyvqiDmdo3crEeiuYHmgL3io4B8EjQa6",
  "key7": "4o9y8xLNsacyrPyPtrVe2hUcpe4s8qPQRNMoQVtmtiKzckxJzDZzj1B2PPpex2s4akSaZ3jaPXTMWz8dbYvRXTzU",
  "key8": "3gG3rMtkhKPxrKPY4To1qVonD4YeoAFKgEboULoSQnW6TVbgQuwFowzPBADNAKGAgp6ybJrUSgC1E5mwESzR7tHp",
  "key9": "JUQo2AoqUr9ZSHgUH38Gkyt9wp1KwZx8cCuknedA2MeBbmbrTf7qqj6E16ZTz278J6GtGFmkxL2aj1tYGwLSaRC",
  "key10": "2YHMbrNRjH6pi8JTY6YsKxpDHS6Aoau3xwsx1abhHJZZ1CYEjKm63Q8S3UZVquKiX9MYDRgYzqJ7uUqXACqTs5w4",
  "key11": "4sRGqYs9F67Jx9iShPLCMDfYj2gSRNftaFC8EtAGbHszWoHHy94Gr4k4ZEdpyzS3VeBQ5rHJWAFiXEPNGkHyeSti",
  "key12": "sKpaKz5qH6hWoUUNXMw9EpimYsNFfccBacZeG1aRbc5HB6Uym2SHLpHvW8jBWhNriuXVu2uEQ9qhMVCtBy41Bs5",
  "key13": "5THYuZmNmDbReQPAup3KQ8jVxsQfNfUHyjgXrE36dNZkVQvT4onTpLgf2KH9iJNGduyvq1DqRpCSi7vvqELKDbw9",
  "key14": "5E5uso8y2xwwpG6LbSzBcwPwRSzaD2UTHux1YSyCkHztpvLuEUSx13cDPnKPDBNQNQFioCxkYpggfMS6oJ7sPnEd",
  "key15": "vC8pi1J7759hVbjt2b6es5SyEDP29hovae5y1hhiS1H5uzodsdb1kne7cKEihihrWSJcEovT4vYMMLah5NZWm5o",
  "key16": "2B7m343X5PpSiq71uYADoT39GAFYkCy1cnLVf4CpSfWGfedaJ5rrXAJKTw4MX3kiHe83HbbkuGnZ1oy9ePiW5DGU",
  "key17": "wnVAzqiK68f5UTtFTC43PopzZrhDJbNVVQ6dbiynUiRjDZMXu2SoE3cVo5uApdhQk4MPjMqTSkTtnN3jHVP286c",
  "key18": "4Fm2vi2rcAat5C6ZdNN5Ewbv4i7NkP36wtd6tECsYUqcdrm6SquEtYwkmUK3R6ddrqqkNLmBQG8reHviFTz1WzW4",
  "key19": "5Za8u99LSFvYqX4ryAHLw3xJYyoGMmNoguCQcufGps2Y257f513yJYVUcRDWm86BRvZVcMZCMRRrLtxkEYi4V2Di",
  "key20": "2fFDFdVFEVZyyGAUpsVgCqF9NeoBK3fkxtnH46r2Rne24GrrbHgaS9XMNW4CsC8AbFDwsm5ifB71LjqHVQT3s6KQ",
  "key21": "4d5bKzgCUfGLfS6kYcTyQadarApZebgpubyCesoiyMLvzrotd2JmKFh79Hi24jDjj897HPah5tTZUVyN8gbuovBp",
  "key22": "3n27zBtsKEHZno1KLtcooSr5ZDBV3FUzaGyMP9YYEApffa1zen7E5Q8xmvgVYwXEKSGVDQfnJQA79rzZhavHnZAj",
  "key23": "4ttubyW2pHfDty4DEr5yFFLUjxbLq19Sh9PPas4AUTy22jR7wi37eC59ZGc7YYVA56fLiNBsqrCAUnhzmRCU8gdA",
  "key24": "3cSGVzopsJ2nSbu1kHha2DsQYSCaaivh3uQBwve7ktjcUe6AU29Gm7iYrmviowzfdWmWDGynQGwvDFvhfv2BnTuo",
  "key25": "4Joo6knsi9Tde64xnRyqf27bRsvCVVn3yb9TGBp1wmEpAgfgyECYvP2568hvH9Q9ad9Hjj9RLiY1415mHdXhRzPu",
  "key26": "4o6R7dbi6dhZtySztuV3WMUe3B91THwyzTUsGaVzCcy9ArDhDfn5p2pz8g59P7f3ZD8YfkJSyAuaH3t3iPK5TPKA",
  "key27": "4jXnPNLwYfb5sAD1ppT89tv6o29Pwp2rsya4fH8hiucFPSLJHZEweB5ysn16yGkQfdByfAzWxBCoApogP1twQis5",
  "key28": "5NuyTpyvNBxKoAr5V8foc7p9kt6hzpUauov9CY5U8aESjGJxXGgPqd26GUEHXxZfFLU7uodopge7VcCLKQo4oMcJ",
  "key29": "4Pji1kazXxxC5deE9n1WPpSxGmDpDSCVFjhLRiWoEpAB7nZwMTwDpArTphNvC8VNhbvvohxmhxppouUu9qEnnfAn",
  "key30": "5oB7ya6o75aMqHKrwzso5LXg8Hs8Lj34gULxuMS2pki41VD7u52arTmeqpfMsQiRhAh6stba55y1eWBW3E9mDWa9",
  "key31": "61uwZKEDHXo8UeHrrEfoBsQKY2129ezeuoZUQM2quRq32YMpgymvLVe7ayj77t6CyvHmRrHvECKoUnSVPZjpKRnb",
  "key32": "2LR1ScMNXJx8mgYJE4mcgJ2BcBE8WnLw9p5tpDJkPQVntwG1U5d9Lgr3YqFiR4qQiFf1DBsndHpLnxdsENYeqa3m",
  "key33": "3F9UGuqHq7NRmREEG4YyCt7R4MfPeTY5iTidEKoEteEzj6wVq1L8wyCSRxU6Q3ZXmSvPSqUy7F3CPmXEnzw6gJmR",
  "key34": "4G7aRFuQhtQsxnNpDPYGGt7CeS2PkkBtKGaMCYN4dh65NEmhG2Q2sGwcPtmNXhh2crwV4RMZuwf8GNtjGFB3MhZL",
  "key35": "4UV1SNQbaErgAJDsmYbAuBqDFSY26zRzN9yf7QEDekDkp9idonaZV3ncKap1BN5bX8P1KqgEkkQfkT8UCLPBkJSt",
  "key36": "ufq6cXFBxMttm3LtuPSsTwE1RrZbkAPnJkSa9iuzWr38kNt2DfVbb2GYmEDhsRxqSpDn4etNLtS4aBjDzxqVnzD",
  "key37": "va2yYw944tx2KCxcjRnxewenNEG4JoBEvBAt43whRvDkWeFptW1t1M9CeRwXD3xk9bWy5pY6heqgUUDNbbqf5jQ",
  "key38": "XfvrSkyjbVecMh5jH1CxNGVmZ992Ae5tszMP4Re5Ni3wLjzM8mcQj5EzbQUSN7h2DitkB3VC2VYXhjeT6RpLZBS",
  "key39": "63tEHn7X7ahDjM6PDCm92dbbDFozLSFkMpzsgVGzSbVAY1jPCwML3twHWJnXEEtppJRoyykWUNrJq69w5KchCnY4",
  "key40": "EF8Li9Z6EsY7r2FhUHdqbkYADPBVorYPou8DfV3sdqQ2EaihxCEBfDUQDH3uqNmFYEAMawj1iFjNJF51dZTSzvX",
  "key41": "536NPS6DPEUyr8p4A635KiSEbBy29Jk9xeQq2JGrFPk6exe6faLQn4mb8A36SHHNdjrkNbkmZpH4JwPnL9HHtYoK",
  "key42": "5rmacsP747eP6nERFJXaAhdCZASfjSJQptcxRGCAE5vox41Kb99QFdbBDDEQD4Xu5S4DKv7784FA9hsGrq7cL1fY",
  "key43": "3dHbvoMY4XPcAaQxD17FLtw9r2yKdzp7VXU1uvZDJhm5w7mBGXrRPAhg5aZgrw41if9M4b2YEyifn2VjDfsg5ARk",
  "key44": "5XDq3Ca4wEVZBchuRP4eN5fvzKHCXpQX1SHwW2uUwRGbekPmkthdwfGk5i9pawCFW3JGWfUCGZaBaE7bEzjNqk4w",
  "key45": "3WjdPPHEeLcxGTAaoQDqburXFMRzHsmZz9VgBBWuggPWkPSoFtuwTcoYTbKUsGDvvEXS6jZWBagYLjNvaCvyxm31",
  "key46": "3oGUc535wV2ybW79MbU9xxpV1nDbYW1xayDMwxMtGoETfs3rYhKLjrZK1URWg8yG8wSnPkBXGVwZgxz3r62CH74W",
  "key47": "2KMYoUYhU6ZrMe7jnLMYz2wLjQaEcMGWJ7VjEivDq4AVRn27aYq1eBbcUEEMk6QvSWAa5vivBTpyp9FsQbRHHfEh",
  "key48": "4Aydt6c5VzV31quttW1Z9aa4h6HMe4WHNR4D9m4MqrRs3UFu2L1FxkymDYvDensAjz9wMF1Yexzmm9JwKib9oa7J",
  "key49": "4WQq5sWzSo45emghqcsYGEmnxrBQMBnkroyp8GeuosfsNXmk4dq1UMXwVLbFwDNtSr7TULNHxXVZBizTxpxV8Kd"
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
