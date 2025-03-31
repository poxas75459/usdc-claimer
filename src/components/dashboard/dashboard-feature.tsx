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
    "23FrNA92GhHDfGTD4qcz6nwu2exRM8pL7Lem7UeyW2TkxsR2tEUDEEJjY33Afv7ZQy1Exr9RP9sexQb9LJmpYV1M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TjCcC6NZqfAa5vhkmLghDbvgDKb9qSXGzK8WkcrFJP9wezp5CrNwvBTtR8vZTzYvBbjHXk1SYBn8on2qp4Uc1ny",
  "key1": "QQafepviyRquzPVMYwEpkVJBx7vreqjfu6beiLVBtdS8Qm9VjtuvV3b74vU9Weo1NGMzH4fiKBQvNLJD1FewxEC",
  "key2": "4BZpEGyFEw6f5fZY8ucCAF97JeH4ScHcxMb2GS1CNAbDVjRjy1UjvSARBKcaCDD4XCXcPEg7NHFzuvKBQYTcJ6n1",
  "key3": "56NQJdDfZp8wFqNfn53NYBEZBD28TYBXENUS2UbEUi867okas1Q1yREZG8eMSKDBM2qUazTZfkGv7L34Ab9W4KQg",
  "key4": "5ufW82YVDXoKXBqcBREbMq5Afz9GkPVm6Khix3jRo1YsTR2QeQkSm8qShHLmb6Z85VrnDJSKwunnCniN7ADsJBh6",
  "key5": "korw2EarN6urCRvG3X6N7kz9C6fQsQF6baPmVfAtbCNrD5jvQAG8JSb5nxHnwpmUMxH64nmjWaYVfoSrYAjToHy",
  "key6": "5QXvUyh9swd6xVrper32n8Wzt2MweJL3ccqR2D9RLPqBxrwjBSQh1gyKFrWRNKr6ESjRSkJUqWe6EAW2xRffpXmM",
  "key7": "294YQMgBoXHCj2rVp1h23G8E744nMww7kHMUeHW4toddHxE6VpskeNtBfgfXTCt1THz9BXHTzob1HZrtxvXPKAoz",
  "key8": "3sJB28oSnvhHu7MyU4AHqGdRxpXDJaGQoMViwFYNQDj3jUvXFLoJX5z7itrhvMFECiqcH9MveemxBn2gdKU6Qeeu",
  "key9": "3jTnv5XNZ8EGpuM38LrnYdNweNSVTx8c26j1oFHo3hrshQBhdrqXPT1eGpjf7ZmRw3BhcuUJ61VRHmgBZ49WVGXH",
  "key10": "32gAGYhNh15BwNKsxa2o3r8ne3iGz5dmdbBx7zK4va2KcpCB4ZJmjpyVKA5LdvS7p7APn5wvTGQndPDv4L31xKcw",
  "key11": "34dGNx33QFCLecRizfeKVESGfJUXwaYYmriKW3kVFRs6djxcntTRSszUepzXHvqDkhQMXAwJrmdj8873Bn7fm7Zq",
  "key12": "3L7b3bZbM87rVtBVNajrnFVEe18vhgsaru6qDvbXPntkC7hATshxc3KVKMHsvmQtYxPN6t43C3coUVDWXFqwz24u",
  "key13": "4bjzWPo7xPwPndYnMVM1VDZi2GkySyst83cEj1pcQ4beJJ8XwZkYi3tzz51PCfB1wFGTcnEFsJHYJ6TePn3HgNQe",
  "key14": "5r68jN9vEJjeW4dWsYrXSznjGK2f62RPB9fgwjkk5992q3RGjkYFZJ5fDzpYdWdRZReZDXR6qDvTrhdmC3dmDVhX",
  "key15": "ZTv8TFpVBKzpHsoy4FEeF7phode1ikLYbt3n8NWZHtdvTE2ut9UEctHTXfcxMZJwo73ptdfa4Vt97UYPuATUmJt",
  "key16": "fkX3He9P3wCGqqZCAMGmVJHRSkEtVw5Y7CguKxbAtm6qvaZvLXfDzKHX76VL1362c9QZPbEs76FHJf6mf9qSjc6",
  "key17": "4UELuz4dJMAWGdhqDc7p2vSHNxi3rHRG1AazX9oPAFXsTxDi49yQmPdk6ygWegRWaggwvvdnQL2H1rr9JTnUbTyw",
  "key18": "5vrDnvnR731B7ucBMUmmvdkELWr8GJVjWqNNqbKYr4yWc8PuPtqnTykCYMJhnrJfTaAmBc46ob4PDEGGCXqoGDkM",
  "key19": "6Vtue3YGwnxXeBFnwuYUct3cF912rjPeSA6SVWRjUPkyQWNZUqC3giK1qmtxoYutWKGmddq7XiVLAwSAYnSPhFw",
  "key20": "3Grdy9auRU77F4tNhHoDDPP185LXEN75CTKtFtHNuCtaeL8tDXqKWYqK4rB3X1o41z28DSfKtQvQwKvdQdJCrKuC",
  "key21": "YgvoUAHzm1Jy3aqtDLWcK2G1WhLArb3kVDHTxDnuvG6SFda3Fnviuoqfq9fAMwm9ZC7scvz3MwF98YdB43tvgWe",
  "key22": "3CiixmEUfbyPwnu1Wy4jVHszDsBFR2FSdhDbPxyz7pK9ED19gEmQrhaMKBYv2oSZRGZv1hvuCcp65K6cPB156tFY",
  "key23": "3yRAUixC41CwenZnmNzfqqbnuvaiCKp5vNLScrTgZwxKpwnzNBXZCNpYqSgdTD6fAgUBYwgfR5VV8PrZSiprpS82",
  "key24": "3m61QrNyzheHFAnw1Basr45shCW9AbjdfKkocPD7UPZcHaqzc2SoTbkHdYxMKmCrneLPtWWPoPScmE1jJmoX72Lq",
  "key25": "2hwx5c5BHzP9Wm2ij1JcBFCnEjC6jAEbwW5iPxYP6mnmEHdUx4FHJVLdrZTKRxTzhFwtYB2zwBffwmCa3ogUoufD",
  "key26": "3dWM8RkEcpkGe5jbdr7fL8uh231Zsfufbbrt6H3WNvuRenNGTthjMQrak5tmdmM44dVrJEM6Ps3hVB1CAtkuScGE",
  "key27": "4Y613NAdZZDwM1GDrq2ctu5EqAKBF1F2yMWwtfiz1TASusc7JzcEnPbyAgw5C9ipUp5iUwbe38h5F9CiEUZUCHRZ",
  "key28": "4qyR8Pte22Mor1vmcMiTxLHaUGY8WJAfhdgf3SKsZPnX1JjUcyR1pHxHHYHhw5F33eZqyABsCp357ExFp5XZqPux",
  "key29": "XCKAD8EsDU3M5B3qHQPAsPBg1sAmZ1m91vDLTMVvYrTXRTxovwP2Qsb7nFe56rPB5CYaME44KyapsWQvmfdxmVf",
  "key30": "4npPvKsF7wDb5hWLvf7FBdX6gaV8n3heMzar1AQNEGu8DSSxoV6xM2iCjsKhFSfBRafRfr6Eqe9Rrnupop2gTcxD"
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
