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
    "3MQBbLNzSLF9pRomeiUmi1zJyYhnntfX1CPgPCRxq65kewTq2YXZft81YXenZ9ZHkYZgfPorvftfR4pDoohd6Kyd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4niY2ftk9g4361ngnmgogvxdcWBFM4t9X4tmtr8AQic73sHvHmDpG9S9fWxquXAm83mpWz3irMVrx7xQjdjRd7Mv",
  "key1": "4QEP35Gt4N9t64dA8Qdz1wG63ZLfZ5GrPqfNeGnQzjtgEKrueWDQTdMp7KKAabN6fwpo2BHshfysSHAZLUwPGna2",
  "key2": "irtgMszBsxMJHfMykU6QhQEP36j3dENYjp1XQM3szJXcJbBy2hBYqNSVmBFJU8ahNZU22MPLYkFDyfjrN7sK1VY",
  "key3": "47qTLLSuUyreLgWzBgfPSeMB3cDcET3Paj3K8r2WrsMXKBLKVAGLoCqoi2BX4WfmH7uEzrYda9Rgvg8XohUjm3hc",
  "key4": "645yQ5NJ8gjRiVqCe7bL7rvNdPSL34xsKHjoAWzCzdhGoVP8E1thHZr2NcEzomXMbFxdTSEGtmXuzodHXzDou4pA",
  "key5": "39ygHduwPLBEFuDNHPZyT66HWow9r3BwwK6cF7QKs2k4isFWEfcSd8YPeBVAeEeocHPE5SjvncjfxW2WwmiqZsaY",
  "key6": "D2Z7Jo2cvc5rjYxPnHjPy8NCtYBgNx47ycDZHH9YsJtGC3j372H888cMZ8JTyqHu9WzwXkvW944SnZq42dorHaE",
  "key7": "3EHJfj3aB5Af4jog85yQk938TwcdV8Htr9jRW1brndarvUazoi14bnBPiqbucBXx8GaxcNVcwBxMHAQejDoXHhuB",
  "key8": "4WnQ1XbRSWsuGH22fwaAoU2sApcHe1xCNYR7UbUtUSXD96tSEox7gFvrqCEkdvQ3nSuMfebEzbuFyaAVKUaqsart",
  "key9": "3Pr78ikLXLqaiFmzFxGqzq13BND81KAefSYajMTLAjYsiryx2PggXY6Q2D9HmLfAXBjX6cHJaQa3mBmubJcqwkpM",
  "key10": "61RBivz9HPGv8JsLjoxvK1ZMw3e2HsnqoLEoqRS7m9jK8zxHpTGDTWmuinhyrjJbcFkihhgoQg7Go91c5ZGM1naz",
  "key11": "4zH4ezdaQWRJfWAwa3VDbffk9NTKqnCSgEFiVtikAKsmBbNNTJwXsKAVhUyQ8rwSsmSWLEnYkDL2VNTy7QQ9r5LL",
  "key12": "2qkP3phpeE729AaNaBJ2dZnf7ms9FY7XotPcevjgP6ijpaUbmaNryQWTocfjWGbkp8GZuXcuNxcEKeePHj4hWcyk",
  "key13": "65TAegMxFcZHEfUTHvaFjkiWXM1Y8DDFPyCb3cUqASJji3hQdBgZBTpa7nGHtUdcAqZ6QCazzi4kvrWCDCWkUTvu",
  "key14": "2L3oHBLBJqA8H9vUGYJDHBa4dLfwgChG5YcfBjm9oHhyn6v8N3TsBMyphb58FjBy18WfjM4PLbj47JK29CSa2oGg",
  "key15": "5oR1ToYigiEeRKTX6pwRiifxpCQoJ1DAkEH1DSXeXWNsbS61rzcKasrZAejuSHFUJ9DV3LETe4sCUuXd9ZvRhW9i",
  "key16": "4Nuce8UDXQQNivzhenLMnThMg48NQBNMGvgijUSk6qKxL7SKZh4EfjWBHN7RL23QMMuHXxCwHfVBpX6CiY6RjppM",
  "key17": "4PHTSsZDdXdJFhLy7jqb1faaX1fXCP37KCW76jiSyDEVQ4SeC2zpeGoBC3eJrZZWBJnRAtSwwvQau9Hd1Bd79z51",
  "key18": "34u14srV94LpMRCx3PyuN78eSfpK5wqcCcqKi1XnanhVGP66oTEDyCc3KvAHwNQZGtRBnK5QEJeHhWd2THYNKco8",
  "key19": "5T2HmCQYMo8DVRbRT9wGYFQbkT9R6YncXzQX9cn6Bogosexi1ZXVApt6w5c4BEhFFeiApE1QXPPuFDTxBBLn8vt",
  "key20": "GiHD7ZErxV1VkcgKc8dgtjkeosct8YJTifbMKxn4kgF4A1Q7LZDwF9oHdrWAo8XmiNZjZ2J4vo7mXyASZ4krxsa",
  "key21": "5nEqwgQTEDurNTGPJewi4mBSgfG7BBhRe5qvQKdQGdk5UifBon8rDG64GebgsuwnvY3EzWbLdgd4VGoF3RqrYdyN",
  "key22": "2y2JQ8ih9njAP9KwXmUYrA9KkpSe9f2QxiZ4wwKkiQR3HHFv5PspuhBosLAM62h52mTwDgT94AHmqZZihEG4KJSN",
  "key23": "5yf1mt6BLhmnev6FayhQYrPn1nDa4paTPMtCXVvBmHeypSwyxdrYVL6ToHmMrdtSqdNX3DALByehmkVixWRodfqq",
  "key24": "3aVMMHfFUm6EURr7HKBi7dFwvA2dYo9RVvCeF6giHAE7dn8Hq6xHPBdVzyzX1F71dcDFSCYrRrekyyhngxy7MF1H",
  "key25": "2GazoY3Tj5dmwXAtPUzvwuwoRnYuKg4CAKWjTZxqAaKcZkyquqmBaRZYwBatcqTQ9hmn6rjzg6HnnE6sV9wuAS3e",
  "key26": "4JYeapr5x8QSmY8F7d6oDkm8YZsFCwfsJLgXK4uEsGDtjRZYhSGs8ZoesTJPLhQSipuRciuwZxb1do7TxHHLG2SW",
  "key27": "2D6hwEMN4mXr9ikF7RAgx9qSoegxaaV8dBvPwzQjxzLfTAEgEEiHTT2JVnmgJUXgXvmTjjKpVt2943cpQrMgfY51",
  "key28": "DZKFpnQBEou9YdQSHpvoUWWh6sfjdvei8gYEvWWJD7fKJc1KjTtWs612qd478e6zcmCfiwLYBmnccoJ4EKquHqs",
  "key29": "27PnMhvSoub74LL6VSgJz1o3JvdPBZmNSzMRSceNHULUAeyQekfWUVnGoADizNgoXtaJ6jmswTWeMMUM1ezF8YdT",
  "key30": "PZ7UtthELYWTrz5LPW4JVpu2xovtNVBMT4MhjV71xc7m6fgpzwMoN9UzJYQnrXfLKNguCPG67giXoSyapR4VP9v",
  "key31": "3rqZ6YqmnTEVpAKLvggkVNFYHdHomAervEdkyoCQJZcE9MsDv5mgfy67Hmvuao9UogxVpDgLqLBLNwBASVxR42zB",
  "key32": "3KjXJLBMWb5MU6UknJJH1fr47tNcRephjmHZ1GkiYnsEDrjG9CXthfBx9UEQQndrBvr6n1yPmaNPYjLDn18uzaxc",
  "key33": "44yeUMzTPh5PipoKYfBf8ECsZZ9myAsS9sDiiemUU9vwpiKJKXnXdVxv17EYGnJSNVCbWK22PSZQ4j9fybNqRnme",
  "key34": "3oga8bwwzvA7iJupAPeNroPJELamZrDRD6djkzAJrPDcVmNkQUkeNjHoKg18LxUh2A6LJBjsRAjS7wLUxmMjUzTz",
  "key35": "5JMbFLM9HRJFgAtFphBy8FX4UbUpX2i8hB2xP79LFxCTcEokkgUiczgZFEVhcWGxeoxya3aQTAvXP7SEjehvinBw",
  "key36": "3kQjUYYEoBKTKZrqh7UxTwZNmYCCVRkJn2e9G95ojwbCWKw2wyvU7sYdSG29WtBtxJdB4VRW8toMEzQzWFuaKdMo",
  "key37": "23KSTt67GLTas1pRcx3MefYHguNipkXGwMX7qnpC7KNb7BMsDJbr3jY9FtGCQW5ZgKyZhdjqRa3UZMeYxgdEAJTN"
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
