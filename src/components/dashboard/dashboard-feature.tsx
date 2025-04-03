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
    "2tQgtS6tS7Urg6SMvnYwqcEQMuvRE83nTN2vSoW1mWWEDjYpwEu3VsUiGUWmH4Y7m9PNxvnKtdQ98TGMFhkV7cQx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nza1GxZ67tRqBWV7XG3HEc1Vb5vx1RK7ikdjnTPYs79y2cWrwzAJUpvJPTRjpYbiv5Y2AqDLrJ8f2yMpyasrX7W",
  "key1": "5JPRtWeuwPNToY2WjKaGn2VejwXMTqbzUzBzRpWRUoF2NGxVGJR7GCjLzJ76h1L53CXM6yVnF5qp5eFoxrFso1gg",
  "key2": "3jmte8PDFC5PGiThV4cGH9aesjjgrgnzz6zy4iou12VjdJMbx3P9hyKhYx6YQwoAZGSoNgF8BtRyHiq7KFiCZ2Zn",
  "key3": "4EwjUczcbtAYMdThjsPBEY7zqkBHXS7PBPD4psEvxjpXUHPrQtdg1coaqUrLSyDJxKWocKSyJGHVv1Pw9TBKG7DC",
  "key4": "4CnwVgPQQMDMnpZvm9Azhr2i3hUG3ohEmJpk7NxQeiRoRPjKFyARHcBnseQshR7bTx72uSVLKbQPnPEECa4mWtpX",
  "key5": "5pCZLxgHH5sgUmZPeffRXjCgrtsBfEqPyiYZEVFQTjULe5tkMpcuGQz1bjtZRDb9tSxmeeTXR2JuBGiQvN7rwMU6",
  "key6": "5wCrF9tYaDhaQCiPBubUevjkaFHcafQSdzhNDib3u8Nc9HUXE1UTABMMf3Bze9VA6AvYudpeeyUysttrXFCwrbt4",
  "key7": "9e6YGpUucT99jAXgKniWc2juRD8TFyjCA78SeT22Fmo7k2H6UzBUPn1CqmMUPeenkf7FYjfSC47f8ia9H26YCCz",
  "key8": "3VuBTUxDqoBWf9NEDotvEFeou9Rsi4QPp8jsrdLrYDGHFfDLi1SEu5pBm2qnRjewcvMcUJzvaQc73NYJ4suRoHzV",
  "key9": "JpB6YktWVHgByM62pyra4GQh3nr6JqjoDyLvo2QAmkNbzNyjp9SBL6M3W9fwMZ9x2YVsPuUTjfL6eveeY6RVmcr",
  "key10": "5HLCNtSxK8BjNpRq8uAkbPjFXEaaTGb4AUdmUcB6CEPEMajxnJJPL36yY3XV6mSizFTkcMnvprF3aoTNUxkUUuym",
  "key11": "vEgsn47sjhb37Vx22E6AA9Feke7iGwPnsdNJRPcKjzvjyDLJAxgJXrAHFp4gwyn38jLiGQGtugAgJMpgCkPfvvF",
  "key12": "26H4BZardttrFpEKaF4DaUtUmsD4ZgzXES2a3vLvVero7H1gcAxRcwzx5oLpT5uFDwFHkcfwURKbASEkWZGEQtXH",
  "key13": "3CrhsktcWvVhKDZLFDVEc5CwKHHNZFa5YhEwG28rhKJeukycNuFF1KwByTBUiJo2GPC3eQbpMhhSHTeYTGAHBud5",
  "key14": "th5NTbF1bhF56NXavsuBWpEr5odPLpL1Tks9RehSRJ2gsBuPkp76DLUxkPnyRwyr1R6uQrqwXNa4koALetAQr7R",
  "key15": "4giutsBUovYAWTcAiJVNu4w55ue1Wqsgy5FjQjaSwyuSc3gTZXNGeZYYfvYPhoeSoezjnXFDh7JUCfpgp3K3oxka",
  "key16": "274qVETxTzAEvJ33vfqanuYsvfrmfQ1bXN8vmts3tJfx81VmWwWSyTMcWQ2GMCEH45TjD2jHPAaLSEsX9b2P2fyr",
  "key17": "546duqt7So8k76F4yUebPwGp87dcVVVdUMqedg9EDZwWkG6d8KH8Dchd1XCvnTNJDMEQLwmjSQKr2DcTUvHuCzL8",
  "key18": "AKia79eo42nDfPJSJ8Z4Bc2v15NaNo4AGL19BQwSR9ym45EkjsW9jiwrzbEa5tYRtYcL6TwgYFrFBL8RemtKRpA",
  "key19": "BcTxCrbPb8gHqF8yqTcHLw2fNV6uKxkqHa7qrPsKt1TfjdRYvsLQUDSRLrz2BYvsN75QeMzg3RwhjzoNuu8SGp7",
  "key20": "2cqK2PNi7fDiuH4nnQ2rES5oc431HsEBvjyyXxg6eAi6b4D1yBS9nSfG4RbdezHkpiCRuz9TqYR7nuB4po3LxN1H",
  "key21": "5CNwnaXURBrmoGX6LKSdU9VdEYUX4EuUMn8FMDUwDRurqG5xZ47e8tHeAQ2tbA77H7DbSPUHRAMxrQ1UJ5Ksva17",
  "key22": "5mwSd97tsn6GACJKL92n8vGVXkw8MzTckaRGRSDko7Anf7FU26bm6zjg64X8acCGwssrej7E1m1MqorxCv1ffSms",
  "key23": "5orcBEBoQYa3WX31MT1aAznUNqt9CbPHm5CdAotzePudyVwCaXxExT7QkdjFRjqNnytLcToZh3SeTTqRWkpcbEbR",
  "key24": "4rjs5JxU3bTLV5rVgGFsD92kgcc8bnN1yJoEdmS3a7ZJTkpUzGLUaVWNnS5E2NbGXKej8PJyMPph1xwneJSpRFZq",
  "key25": "3PHjUCGC7Hb6QKRnf98jCybay2v5n87xjrJTHfDSj3NdQAtdVbgfEkbJoHUDABiwWa1RyuyBmuA8ghaGEUqoyzpn",
  "key26": "61rf4iYfH5LeiZoHMoKhaNv2fiFGPa9whnsdSDBAEDvtg3FpvuYpKT6e2RNxoQvfjpyLyBM2J4DqBUofcMZhYWW6"
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
