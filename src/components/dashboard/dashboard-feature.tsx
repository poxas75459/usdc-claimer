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
    "JKagEzXczSC5cNNKyBWsbgVsbpopucsDipcRbTKQ9UFGhR1bBv3R8TKqd3yUJQqxj2wEJ2ZdTEzDbVdfbEftpYb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dvtKWcgqf17apJ5BzytSSMxuFFdEjpgmub9NKyvhq8F5B4EXgLodbScR2JZKhpNwD9BQ2Wxwkub8xhYk7wtuokk",
  "key1": "3ZJCo9xZsfNcnVpC537fZgwe28wbW4pCVdkHe1TdwiN4D6VeVXYU2kqfqVN7p64W7jMbDC4fVyJd8gfqS4P4HiSZ",
  "key2": "3dEUV9jn5jvLgZCrsz3zz9pFUAEibdbnYjtcinMFfwPJPHb9Qy1LFvNgXSmU9jbw18JGumEwS6HpnKPtsePnr53c",
  "key3": "34JnPBS7EBNWVcx4ZkKroDDjUbokxVChL7daqVviQPejwNdDGWF9opkqMReGgTSdGjvn8PT43ku8arY4bRDJjnQK",
  "key4": "2EgNwKrCnm5WW3Zt47WiWETRhjDtJPqv2kSRQ2kitswErPsuGEWyGYvEeGwER7eTZ1pxComtFQ4WAA6L5WKgb2zL",
  "key5": "KfpfbbBDUUfbdi2F8uKZ63EJku1XAgoQeBX7daZsiHQsR86YVZMUBMaqegu9TJSkHfHRs8A3zwFYnTWCfD61R5f",
  "key6": "4ipub1axmgi9ha4HQfkejS92zG9iWbtp7LUWm5znAWYWvRkwYXQrnQjuFUXFVpANHubYqrR6HsKpohA9QnUTjCmg",
  "key7": "4vJMRjE2MfgJdpUz1wxr9eQXE4bFxDr3LskxXSp93MRHZtp9YhmgH759YExD4mSXHqYxoSyN6Y1iSBhKuSAquX4Q",
  "key8": "3RBk66obaVDbnUy7AYXSMrtTecAnKHjTLMzRo7e7jtTfr2dad5eNqyLGegpgpmjCZ5y3JbR3D5TwREK8UfijpcQD",
  "key9": "4TQrQj2AUaJZVsj6GnD1mRBaqUwT3eKaonUWJikmDtGeQjubHuXEsbYAZTm5U1ih6nuMc5eLLKPpYbF8sPxMmqza",
  "key10": "4hGqyLQ9cDhH2KeFmjdw7UorKvWmEwrt29FdSer2P1Kd8Jx4VrVpJiqrvEb2f1QX8ABTcJzSyScFq3LqGBbTXeXj",
  "key11": "cySjk2NvgjgnoyfLzi83s47GdKqDpEknfUWyGD34dp4BFugDuXW6ytpPTNc6jZzFD8JnkhpG38chCxo9AtUUCb7",
  "key12": "49PM7bAzt4qmWPRS2QAstHyNZuHz4ijYs89vUdBKvtCjN368UU7zaCEjCDQ9ARsE2Y2pe4upAiet7Qv9gKceqsGe",
  "key13": "LBKhZP9p56xP5jJdTSRkBK17y7s7GaUrWe6Wmmjr93XtGoT3cDFaivdWFcp7NDhB54eaY1rdxGGQ9odCNZEmu33",
  "key14": "4EFzh2cTqxJn4LPqmihzdJLE5oVnu1P9fJmCZK4kBqLojGqe2jbaKqnPUXf8S4uxwdiNASq5UMu4uV2MsJzkLD5w",
  "key15": "5JpvKiSRff1nXv99WiDzYHWe5N4fDEqj5zcVRTJUrUmiyv9VVv2RsTXFvoAVxizRp2pHfiC2nsSuKtibcPyGh3gQ",
  "key16": "2WRy8xjAaAMC4NMwZA3KukXkin2KLYUb2ouLhh7gMqdaaL2XxytoHgdqH7rGXBp6xAjUYh8v8L4V826Xkgcf4gpG",
  "key17": "2aajiggEmue6qLZMV1YiW9zDU3XBH9SCcNckjqayevpihwheYHVa95AEeMppt7E4e4zzbf6Ztz3Cnhpe6aLM7AgW",
  "key18": "3yzwrt2idpiq7YnGWhjBuJNpwXkAoiKZmLc5RLbZ1E2scA4arGyCXS8yHWroxRUruRL93oqPtD4YYRGYk16dPfhY",
  "key19": "5htX2v6mKZ6zZi18hzSDjtAVMSRsF4FRAVxyCoDjnBzVbRqprVkoAZ7h7cWg4AqtLiQxvwbozhYJEufpEPCBxzj8",
  "key20": "Pbn43XoWq94Q4WYqX2tEENJsqLQBa8HDyMVRmWKAHWQ5rNaNU48mDzQkYWxQ8tN78YCXNmqcn3NoGhQwJfcMse4",
  "key21": "36DqYiaJPvYJ5c7vfWT1wBEmBmK71wHGXT6NWRtDE4cngFA7Jmum7vwV7pDNBjsiAG3m2zjEtEQK7doNrCxSkwLD",
  "key22": "4A5zuwB8NP4xErAdPNPq4h3soKuqyMWSkmL4snmFxbB6CXAzmb46N2FGTVaSpgpN8FDHwjwoyAJ9MJbdfdYedHcm",
  "key23": "MW1ZHMun3t6FxgShVu5oXqvxNDJ82heRDzghuokRLnRGaU1mrkV2kixhbE4mBkpp3doQv1WHA1MPZVpvzz2dWwQ",
  "key24": "2PasYN9ZSVfRbQhxEddKgx2u7ecWYLtbBi9JJMHoYPgdBh2vySwdao61ds81PULCJ3orfxtTkuZDVuEusSCHRAGb",
  "key25": "3XtAf4Ck1ugRNxjLsmbvFkqjkAtM7tvaZBbwVb7NpBEhHhU4X1vgQ9MxEdJgvsPXBUNWzNfE1NQ58KbjRuSx2wAo",
  "key26": "3fsYhAM3SYJWpxRPCv1ZzLofXdSBipEq9bSsGPsCeXFM9G9s2fggoVe2drDtmiiBS2nncjnP9hwzYdj4f8wnwezf",
  "key27": "5kJSw93TwvA3kNxpFsAQ6pq1XE7VXr4VfUJfpdNknqBFei9jRaCJYuZ3N3czd4CSkZaU9ZWesKcFEKcWwFjagjAF",
  "key28": "4T8thGfNB1YUAP9DZf5LECNKpRDNxQN2WGRW1ezsozLJWRn4fFf5jdcrzasm6EDXTKbp98MaL3XGiHwV4dR8ngMx",
  "key29": "4mk9893FJcLq4FijopzJcBfAqooDshTe5KCQKyhQwhNgtGFPuLDbA5zGKK9kQcEKtYvwBkxN9vZxkbX8P7mojrEx",
  "key30": "4SCpGi3eX3FQmzVoYM4vNSDLTR6dA9LfcBdQhWCG1vsjbRLqJDsz47R8zLhUPZDGpisyACe6NFg8P2JryxzqsNX7",
  "key31": "22mmDUtGSD8uEx9V68iud2gX2xQZkUCzov3zc9DDvkEX7W61q6ncbj5pyejgwair5jhWcXyALQ6FAjmjUrWV2V94",
  "key32": "2ExGnFMFZWbgjDRGLYLNnbVgfsFueYRp4vi5o5MxgcUiHtWucMYRtwqjmtUJ6LE12Kgrw45Cv2bxEM1yp2pzwmqN",
  "key33": "3ZDJhMT5ET2vuLNDzFtCgSsyP5pGhKGAoxzJo3PvYk4NNRKJZSCkUpmDCBRrnQE5ydDZekZs143eDHfpCVfk7k1D",
  "key34": "YFSV72gWnmC19Vc9z7Cq399Xy9KMmC3ZC2Sog8wVMNmuGQvGuWtYF5bCMUKMoMEpHvzyYaamS2vM2TA8AEN32QU",
  "key35": "3BfgQbi4ZMeYr5Cpj9cmodCgYKf4haXguBTHuoaP3yeTxbtDAz2XfRmiJAzcxC31i6AwQ7UWuyFJfaJaPLDAryGv",
  "key36": "4U2kUByoJJDdAxxjLLrMQ3UKQsuivK2GxhuqVbhKNUV4xc6h1qGbxDDY5YYAzxCgQinWYWexdmFgXLeiHJQwL3BZ",
  "key37": "472WnZxXwHoyN8GmDhx1GNk5Buu6GwWWuhCsFpGP6tDSvPAZCJ6U7CVqLjW7NsANjjJi15VnmWSZSBupJVmUhTZU",
  "key38": "57EwSyPYgXM3nHdMrnNhmyvTifzjXs2brVXBRBKw8DQNhzXcLMnEQv94eGpVHDye5pMVgfGDup1rTxGRA3tAC9ji",
  "key39": "2RAzZobM5Kajbi8wKQQ5UmXooKHWF8jG3fZgKWxMzMBqbGzovUNcYm2xVbEprk3XBiYr3gMF1uZRfgYfRuSkuDGX",
  "key40": "3WHhm6gNEdZ4Sd5Qu5k3B2YzHGRKc2ZCEuJwfHEp3sNAVpf5wmAvXF9e7yd9EPBZ3QeckkAexFeHgx4HUtNaoNJN",
  "key41": "5NcYBhWuQ2QcZzd9jfGfoRohw5fU6NZHbuufC2aky6Ci4Q8zzEJDCedRy5dL9AEjSB13RMZefsn893Y5epsqjnJ2",
  "key42": "5qtYX7sbxhKqqNgGtMZegi2e6BkNdXzE5PsRqGiRsLtnCTfWdmRBKMkLTQAvowQ7aNrBaDzeDHndJ85tkL2uzBNi",
  "key43": "3nRZVHam3u8Z7Etv2eN2BdEcnKSpAvaH5uuZg4n8NCpvUp1AqsAMm1n5JuYfq533fLqi9vzRg3TQCBtKzAo5J7nk"
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
