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
    "425yFXsNBkMcUTXbqae7FvSmvFPkwp5PSufJPZxE7HiueYNwYzSESbh5tF6qW27Pht5edjtBTV4Z87zM7Tk4N37A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Jge2u8bKryZsxk9hWbAzATgxthZC8bg7ZHk3C3CpbQPi7ioo2hFwej1PoJ2tP7uyDW1wTuh7w7ppt8ouygcJeLG",
  "key1": "5YWgo5idbzEtvNMQquuh55FT2CgqVAX86Mv2qwhem42RTGPY7GiArKCzax3DAN83k8gsEvzkQkf8HANw42JnQwpf",
  "key2": "2VdvmhJsPLDcDjxEvaF85KzUtGyVL5vc8HSgJBDyK4fJDXeRVoJDKVDKwK8E2bJyFohkgCc6PWeivpEwcBBX1tn6",
  "key3": "3ymQXFgxx26gdyVJJxypeorqyKsesxGsmVV8BMg1H8rxEoxzvG5WR5E1gY3SUvjj8htoEiZkYyoLo75K8jQasyoU",
  "key4": "3k9fX3DHZtNXLC3ZWJ9BtAogzrscGFovpRwfi7VB5FZ4eLaASBX1T7GrAtEMK22NvZPsq7vvdnPXNU5pgqvM6vDw",
  "key5": "5jrjKPKpsUcdnJPSEaN7LZUhhAhE2P4jqtcJJEUcjPcBqEcgut9YhbuL5DC6m9fRYY3xF6HPFvg4m8T9h1oPxGFt",
  "key6": "TXv72mh9x66Gk658tpEfqMyDW9opLnHSwT1XQXhKEZiiNb7MEmQqgWftkqV6kBu47kWnfKbRKPbWkMrkAVsAFYL",
  "key7": "5NQpRHzXXidngDxdeH715xNLVosB39zjiwmmFxnFFsnjb4YtkcYZufZPFxY2mLKBDmYdXmFRMX6TCN3SBnVhohSV",
  "key8": "2U8TwbWb6KjUSChumxWDWSHJjinDGzYLFsra7J6Aj6mEKAa7WswdSuCyPZAVQpxgPGx11tCRxUxVrSW3iyzYYCYG",
  "key9": "3mKr4ChrjGdnvtvhPTSmWzau8F9zG9JUAVTfrdCWVY6HTUjjiB29Z8tWa5VASGMA6NrzLeJntR348p429SSDkRNt",
  "key10": "5b3xWGy4j4vX2cihxaoAN69bhcpbv1zXidPTh52yuin1cSP7QSxnzhDxPVddKhEKa2dEfbAKhC6KkZ4nurAAcmdL",
  "key11": "4qBz3FhVDGtrYRGytcQwLVEgrDMPg8mZfAbAjbCc7oe5pq3BY2LASSmXXcGvtc2Kvgjkh9hDkGKoxyMKgwf327bU",
  "key12": "419jxDmVMcexCr3JEXpAVMbaawFDnKkrxAi3iWfKmxXm7H6LmFfT8wE4FdFAerwN755Mxzdu9TsrBjkceabw29ou",
  "key13": "4z8MFvtdsi4X1ncbMsC2wxr2M8KFrekfarUWTfVUAo1SWh4gThrknAUTwBNwSRPRKmXafaa4tqmZdQJhZJ61Sz4g",
  "key14": "5khsQU5oKQttR3HB6fUcJRM6UY9iv7uWEo9jdDz99SPLg6jY1KfGjJ5Df6R4L2rrsM5A5trMAHRzeRumSHZxVri3",
  "key15": "4TDEpWeqUhApn81gURZdwv3Esr92xRuwLE5CR3TtP5ufkVYm9H7aGXZRrKnxgbyFWyWWH8tUg4nWzbB3ZJdqNHrV",
  "key16": "22QdJZYQLbxgtootEN2B35xK8gBZ6MFEZXAHcMQ3ujXaGYftUyEabTePzVNTxrbPNq6b9JEHSjcVAJDPoUAjMLHa",
  "key17": "2opwbryPT7WakxqhypBVXRhsvWaDbE4T3XKATf1sM4ZRuNQk5duyXKDeQCFAoCc2T4f2zxLfcbXmmgrU7QHGcbfm",
  "key18": "4FfeXAwEmLY5rTeqh5P7qxNydMs9DrMrCfebozcZiQEmZqwK3ugLZgow3mpe4UAf4okLi43oMXUfU6MwwKzDFPKH",
  "key19": "287zXHZcPwUW9HnGmW3FsgWdRHhMoFNnUnjRNWk1oYWFMdrcHaVQdgGRJRVmqCQUGJeyvtq29WPt6JUWrQT6WgwQ",
  "key20": "2n3puMTVx6rJpXHwpBAssbeMuMUY2F21a3gZkjJmkdw75evLkzC2D2TdrVFXd8houqAWdve99PUQKBeuw32kyBM3",
  "key21": "4pomT6SSH7prNudhZpxGd95pr5VJXDgvqSiUGRCzgCFQRi2Pit4XhpVkrNn1cDuWEnTgtaeZdjzXFFtux4E5Q7JJ",
  "key22": "rqCq6xWX8XkE2HwB3ucj3XBRnNRFHMDRKzFm7UjvTZ8Foj7DGKJenPsmVLyEtMjx4RxTVB3bkx3XzKivjrfngQk",
  "key23": "Ddj8AefJwHo8JxH7eHqwUSTYgsBQEgf9bGWXX26avtxmaRQ3vjz6h7u5CcRCpHCDjvtGvBmrVr8CEmvzKxweqzr",
  "key24": "qFAgBGzQ1YpKe8vKqP5HDsDohY9v9iVzLN9f8cqtAp4BEXbKoXT3B2k8TbpuWkhxzdwdyAV6RPpYtYVPi7S8MdM",
  "key25": "63SNm3K1EsgYE9Mb9osTqoXgfnm7qT6Haf3VknzatYJSdeXaugvpAa2ZMAUit5G6BQxNc4yWyTK6YF2H1TzuDvQA",
  "key26": "4EHnBjEqM5ZMB4LdZG5KM7n2grPuyV1TNzTRzgtKv9ipbXm3majQjZdA3RYMzZXRUF5YUaU3UmQG96QvW9qsFwhB",
  "key27": "3cDMexufU2VtJonef8VwfmPjFWtLf4QAyvn9UGNwJfvaG8b7idfijXjQEPoaH45RNx1Ev7nAicZfbD6s7rpjiQZk",
  "key28": "4F1DXfZMvm4eCFGCPWVzUHZmM4Yktb1Ydysbn25g2QnAUKB5uoBkm4JgJgqYJn3MQvBFDz1CmEu65SUS2XKJcM32",
  "key29": "5Air2aSTZri9xU3HzZMXjms7fHQkxoiJR7Cz92Mk8xP1Q39395qrjua8ihnwr5gCa7L2NhfnHbFi4htL3Qer7rFG",
  "key30": "28MysSsksb7Y2Y8H46cSFgCwcfoQchGGrvn9ngBXmEtYq9crU23E9PVuWudWoAnt5AeD2TYCTizFRxFCDLJBUUKj",
  "key31": "5TeYH1V6S8vUXPUqUFyDgVchuS31oDgwFs2DpUjVDrJxTQ4dyoJydgaUunMj4CWSQ6eTXQyVTm6hKNQFFP9sZebP",
  "key32": "3SPTgdnbppcUoogGvo8NziZzYxmSQiC4RCPgNNFkhuEZUMshnLWNttjk1H4BC81wXFC78zqfGui8eoK3YVgFZG8G",
  "key33": "Xjtvh9vzD5yfbk1UuH3kHDB9mKZ9Cnm3fBSVGEYaFxDZ6iZD65n2CCZFdw9BiKbPfDQ6nZiJ2H6BANzhkhtA4xq",
  "key34": "pH7EniZf7FJ5iHRtVZ3WF6GyUbhxx6ijeP1y93GxKeiTjRNy5ywi7TinF2Upf8yDeMHkYh8qdLzAZKU5WDsqWPb",
  "key35": "4trrRqHvumGzV4qQDsz9RBx7nnyavcUCMTsjNGc8zehL24uVZjB8c1j7ub9naJRqCb4jsnGHm4cFJsEW6UeNDHms",
  "key36": "5u6VrBwgnQxFQT8gc3Nmr3adoZDSH7ugCYUyH4byiQRdfn5FaNZCxyDRHovHDkVQUHGdbyn3Fwmaz6ToL5Lnohtk",
  "key37": "ujsq3yQRD8Tyx11ohnRpRfA4Qk5xPZCT53s2DuJ31uhaUhfYhVsVALmdMS268Lwtcnm29nRp8wYg4h7dWeDPEHE",
  "key38": "5pqfvuhfmDogTMvaQZPXNdcWWLfgKzgLoUUVRBE9pMD9JN7epFe3ZhPS688puqUm9AM6yNeG96XQyKKyA7TXtf51",
  "key39": "3snA6TPst3iyTzbNRDH1FN7HpMtVGkvMRH9BEvA8X9auU4VURx6BncfDV2byDPyc96ju2gxgbjHCZccJZHeqgetu",
  "key40": "42XFuS8TBrYHsKC9vjCYzTHNWZm4X4NKWyiCSfr3UEApdADvJB8JT9rcQttb9Absmqn5h6Bg979rosxBqJsz3fxY",
  "key41": "3M9PXPQScaHo5FFS25c1voMtyzMzRXNVKG2rkxQzpDeRbME2edfWPi2QHkDZg7PbHLQoyWbtdSPy9TmScRyMUJCf",
  "key42": "5EVNke4j3qFVRs5JvTKraLzAut27hSGNjw3M4MW2r4b4DzDmSMN7EQXHL4jmrCjRiFXXTYxNsAUZgyxAUVRycwnW",
  "key43": "eUMi2SGVnwsqaPWK4Wdxn53sMVCS7siN8hJjG1if6qmqaMfEALJg1kZvs3QWqtdgQ31vhbJ6iMaigrqo5725CeA",
  "key44": "4cy3x9d9FNgS579hWecZ12NSrW5u9huTgSHfsdfjA3gc4LPrSASr28tNasCrAZaNxW6ZX7A3dqujDkBqmr8byAEg"
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
