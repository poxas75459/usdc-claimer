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
    "4ETdhaH715JVEdwnSY5Ky9fMXo628cBJuXaw8P2K5c3MsrrfBPEPsa3hnG63gYiNwnMuzFxFpM8VTwHwmwxcbDCH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63pg4JZ8GKu8VZd2p7EtwjzgzuKBUt5X2jdUgptpDVwuFMsu5BzMBga4YCtUvDBFXFpUvCtMc2WRjiXzzNq9bvVN",
  "key1": "2WdxSDK7iz88G1iigef44qSCFttGEhT25VC7cLJiaBZbRiXhn7hJM4VADrTnW6957y83iAroJP3SumoD7MZQkkqM",
  "key2": "4QnRtn7WnswfcEGi7rvHxnHBo7Be662DtmHgzraosJ7cGtcpH1cHFBTj8PBij6dyN1m9U7yjwhkYQ9ejndTWqiHJ",
  "key3": "2HwHdBP4tWcioKcqDQPYsHVrYZ5vkiJJ9NWr7j2vLPrfNvtUcEsnopHRAwxDZHG2hJ7bta73qdqQtARJckpYftur",
  "key4": "4T6g9HtMAt9JFEZcqAR3d4pWRKP5vcnXcGyN8kDWtbjZfwHrwhPYySPsZcRov9PemUrdVS2fJDGuDZEQ1h6DhYia",
  "key5": "2aapvZFpHEUsQRirw2sUmC3S3sSBNzXr7GMWD7wXnJax8qUjZiiciqxiX66DUC2SSYngQ1G7r6ch2ZJPdpp7yYk3",
  "key6": "arvKni7GjekGZkbdMB35DNjzGhasEzk7qhvAJWRLsiwQyNR4w2c5mRnTkQFGHT68W7aECzqruWnoXiWq39317CQ",
  "key7": "2cz8LzwSvjBt4g2N3iTWcfBAovBN3ngVyTLtggP6vdhPkGqFZkiK3P6W8JDiBSbE2T7yHacTNtHDCMaDLFvMj54Q",
  "key8": "2fzLGcQneqCCZdkuG44P7rbjrTcvyNLocgFzPXVVQX5UzMBTgGb53d4VnWmMr3dd1eNX9T4zAxPL9A8TqRvVP9A2",
  "key9": "5GRmmttAr6vdZQ2u6fMwf9yNZVVCZioV2QjKrLPowEb65xb7hu8KoXHVURujvNCgruR1FvbyHiNe68fbAe8CnT4E",
  "key10": "3vGyTP6zRvq5NffU1U2Z5KVQCNZAdTB1DeF5TBnUQsEGHmRhZiHNMujtoWBhxoxVvntnnsvBgLe98WjF41JPKwwe",
  "key11": "3JsuzLxpmR1moNmtxphPsz9jL4wBPTNwopQ6PEYko3NoZcXpAZcDa4zJeXSqGogvdBpM1UgTSNWDpemDo9Wqh1sQ",
  "key12": "YhFkUx7JJhaDqGMEsX7bN1FuRXCUTFKHnJD1hAUhwBMU28bAFTHPYVRcqqRXvYXVNgpYomRUDf7enWRkhkU2mRC",
  "key13": "bHYZWiWpMBHbtL8HNgpbi8jrz6M3Ac1syZHo8iN4kHaZwG4KTNhmTcWvGxsw9zHTqPdQPLsj1hVqDf1SEFNRQkb",
  "key14": "3xYi6t43ZkWfbcecRAbt3xts4LUq8cgCWnK8MrXs3AnDQteC2PZMAYJXP1MojYZ4F8z47szByMQkcnjS24ZdiW1S",
  "key15": "4py5kXogywPzfCCJ4ByoMtb4qy398wAsGypiuyVZmmWKpZ2Nwx6ErbfbzpsrGAiVBNekFVxDZQ8daEm35dmpKShT",
  "key16": "2VVQoNFge3nZpxKjNBYoUief5H9ebi5qKRSxdb2whu9wDn9916Yz8YWbnquWqUcsjAeoip4QxRyiwWRoPGdGDqAJ",
  "key17": "4K4Md511e4X8n2RDPaYHgA1eo25hds35pZGF6r5y3dJ8MeXWcnhh1UaqFnvmxwFL2ErKMSfyhqZobDnUDvb8vTbM",
  "key18": "2fN1r11QXc6Y9tE8FuPw8mmYMiG1MR5ZGwXGJacNaeQSAh2zQWmdffb8djPiMtGaGd9z3YCSgifZ4Ax1NQvZhZRT",
  "key19": "qoFSCDaUhQCZ6Tmuo9kZpxRR9PqSLjd3Higspipbe1J4hfiAiTHQejbFDRusKzNT8L2sersNwNkZJcF92sE7UKi",
  "key20": "2gTZJxhe1DHAHs4mNMeYzBpr7N4EosvkW4AnvfnRn8nBU8TtRsG34G8sagmw7BybPQtyFue7RHSJ24mvjW8cS6Wr",
  "key21": "wZy8YshWPy9q7g6sE5i2srHjvpT7riNREfwUXWt2XPTxWhpck4XWrV6bvqpGNsuLsYdecYexcUAvDtTVCjyhstd",
  "key22": "2oV9hUpWaxxJfbrSv6hAoTE6ESqCM2D27CmMzofNvwc8dzBp2VdVBG38JspScA67foHmC7uPviEnR4UGBg661VUM",
  "key23": "4LEHf1DmK5NymyHw1xso1K9jJNJJyFRBLAFxMXt27YPxMFW8rFyWAJFsxZRGZxG85atBLqT1rrQLoxGrDW1swwBb",
  "key24": "gHfJpsPGBui4gHCShPCbL5be3MNzEVS27y7wmjxjwBb5UMhCJso2PE6j4dYVypt4hscCkLMW8NLobCBmTkcGgqz",
  "key25": "C3yiCA5mQ7oZrvDnUP9QtxecwRtkJqVUfhRFTHoAWSutEudLEHAdYmE8gLfGVWfzvAigaXWRvaDxbg7eFmEVeCR",
  "key26": "2qYSPmVkKFgQZDfbsTyh5yoXzLe9DX1Ldx6vDKYzAAvN4tJ6pyZCLtqgXjAr1AVgvnUGwEK2ZhHYzvGtKjTPQyuu"
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
