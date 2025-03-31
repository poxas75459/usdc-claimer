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
    "2YZLQuYaposmsJeUpkipZcqGjaax3pXFEUwWQ8wnR5qnewv1XgEs9Z9r3ES2z6q28pxmxeGGNk1pyB5QHLgSZeHG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FvHJuafNgdEq5vAUzrcEdCpLcHYRZ2srydaJqqk5t9uiBfv2LqXtqYn18Vr61vw7WHsDiZ3GEzQgH8J8dSp38H",
  "key1": "45pAz9kqSnNHvqF6RFLhKdBg1mJWWLyyLAaTMQRWN7uYgAz6GMi5F2nsNu8uS4ZwHnx6K5NhVytbNi1GCiYywiqn",
  "key2": "8DRasRCKxaDS4BDQ9qdpM49isZ7LSHAXuGwprPuEyHFoP9DQ7zVWi82G28SymG4SKuF3vuBZGF8JE8LumGpsbud",
  "key3": "3cJR4SLNLYPMMiahXqD2c7w4pLEZJQGeCX8FXoex1Dmv77F1ur9eqi9VmitmQVrodmeF8kUi3nqyk1C9Ydh43iJi",
  "key4": "uhmK47398FpL27T7hvYffYq2AfWMo8m1vHWFgQy25Xpw87zxvgEGBRCbWdNv9kWzbbjPU9EF2QKgnrFdFTdj53A",
  "key5": "3uLk7ugFgxNrJmNBrJAhpdzyUTUvThUyf864YYQDiuYgbM2quDqu2sqr8rM48ZMitCNE5eKz2kGTn56MyBdNST8H",
  "key6": "49CsUs13c6cHVq9HvrEaiTfjrtHNCmb3F4Q9gKnoW87FcKnLARRGa2LhBZL8nD9Uy7ZA42xSDyDmQgS7jb1nL9Gz",
  "key7": "2jKG369wHdQbEuERx64bB3YZJNMUv23hMysgto5hpzku6BMwh18WbwRtfUWyGCT57c9SpxsYF5Tek3d6mcnZrB1q",
  "key8": "3MnsDPBuGVjhNxAWccGSB2mqS5stRhQJDGbgqrZKVxcyfU6f7ck3VUjZ6qWqp3fMo7aVBCScpRHU1uWx2PWYszLa",
  "key9": "29T1PpNyz1stN1hVPA4JEqpCwSuRcd71Bc7dTV7ixEnGyAq6RuymfoMKvTheKZmUhDSTDjy4jnoa246VoFuMUgka",
  "key10": "2cCkmAWgfTRtBpQov9PRWMkDafepXsyZeRGXfXSrRYbgjSSwTuvkmJJNjumRhpkYd1Z35hU6mce2sjRRovW1AXg2",
  "key11": "3kA4TctWkdnLABc1ATtmEmwZExegAf7eAotJxsX5kdAsqBPFFb81CRMKo5JszK9yvLjkpgaiNeJ31m1QAd3E85My",
  "key12": "ZJ4pubWfeRy4Xz5NhgKQSr1ewHF3UJ5y83g8MVjVS4awAeDwLcJs8hKdmTBpLWvJY8BE57Yuhy3aYhz8TonTLux",
  "key13": "5Vpd9R5VGxWFsFNpSALQqsTLaKwCA46aC2jbdvou11bvaxEQPqTMqzJnxGhJXvBZdBbNNhuPgxKaFEzKHoz5e77m",
  "key14": "L197vrsVRXiVAeZUsJeBn1sVymLUVz64FT6ZP7vA2ex28AUorsKJezwVns3qEokaf6XXhYYyyegx5nm1SJd65Gv",
  "key15": "3TmbXLvoXJtuVcH7CUK9rUnoS4ZgZg37JR2suXAi2DnuamJHvQ45XocJBbkEF96aUGd6wLnX455RxPvFK2nbKZie",
  "key16": "4M2y2PRvykbT82mxSwyiC9qG7UxY8Njrs3Q7bGWctsewtqjVmUhdkf58xHMvY54qFVhwQhp6tWfg4DrWux9pNNve",
  "key17": "3GR2GHXTeqrexy6qtoXBuoC2meCDdksfVAVatrAyFYQfwsdSb2tHXL8JD7jef1AYhKwHm1XVHPcqpkDrPdwvFR7n",
  "key18": "5t75ZrjAUMXkZ4C1u4miCKka6zxeB5ocqANvcAQZBT3TC9Snk9HeUW6FpZME6rfFbM56dazD57TnCc4PsDZuPYnS",
  "key19": "4fxJEQTt93bUsqHXZp9V7syNEQTYxdUzEDgFfY864Syb3sfi7138X1XNWLnPU7FqPZJ8PhXuuigQW1dbWqMSimwy",
  "key20": "32hmQjkYadHFiMCvBWiy92B2FTDnZLHC2yZfkoVcNQxduHSuNQJ3mwNtFxLfi3Tu7cyyCdgP9p54M4trodh4tkp9",
  "key21": "3kiWs3LU7BFk7A2s53LgCgyx1TuDztF8QMzbZnpCiQQMfLJqromYpMWx3T2wi6XDhTKdzT4wjxkveqiiFEiv8mBy",
  "key22": "64RBofw9Wabwo7QELcaGDgSrMjGeQUE3FZckaarC7ir5AZMB1T8PnXm2i8TF5QNPEh11NihnNqTRZNa2iTe3uChC",
  "key23": "5bSK9kkasiSAgxi5seXWAro8A2tBnWEG2nH72HbBExwRQJH3nWjJpZkH6NpUYSfsUn7LiYt5tYQPVP8wQ7CcNNRJ",
  "key24": "6rwkALjhw1KNVvTKSYJYzBk4okx6rXc7TTZt8zZQpLrvVGH66VFmQ2nmxuegkkgNguvbNGrz6r1fA6LtUtpgmgV",
  "key25": "CzYQ7fCbQea25UvnAvdtxf6JQ4GBzb1CfgaCw3UoDA4yXxJEoposcph1tdx7RyeGz17gMo8HmtCuPvzc1j32bCk",
  "key26": "3v1mxFpRaYiY39FXDGTxJwvAEfWAX7JMcJrgGZvdH39kDrjermkT1XzRJg4ahCFFqpK6yFM6iEeA4Axeem83FGK8"
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
