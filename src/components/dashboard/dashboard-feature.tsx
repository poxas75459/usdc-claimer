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
    "3Uh38d3tLSWpnWtA2o6zKvxLrAcmdQ8bjVcVs5D9c34KJv6b1W1u2XE4c29KnUpuQZbyobp8HAQ65tyRPjx5tfKs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BsGqehgUvM7MYQCJ3Lk6wCTnGxDJk7tTjDMWDbjXCvHpcTCmjAnwwXGH8f38jxehm4Sh91ffoAWfB8C8WAWNaxi",
  "key1": "4ytnsb3rDVQSFGn1tyELCPmUvMXf1e29z3unspV69k79WishFYdBomQux9TCEySx6YEkCraCrJcNkBw3s6x2qR8",
  "key2": "3qo6M16XHQrtgtPdUZadXwikfQL4kKXNAgWPzvRpJhyAGNYHNFYUiks5cn2GkH4XEdZEsjieNKnM4c8qCRNu3dG4",
  "key3": "UQDRRvXdviMBqXFWKJZBqpMTTvtFp8FAuz1Wgy42h386Bxad47tY1GwSD72mgpfWFzbVbSM2n8F5f6yAJe5yMdp",
  "key4": "3wtswyvWHW2zsmxjKoa4cq5EaYSRHBywyf2Cg2gTpQSGg3VeY9tWEzSbwBmW6bAk6QudBt7NYKLeaYcqhxJbEe1B",
  "key5": "3b2pWqVnLYrEb6EJJP2y8a1i9n6MK5oTHEeivEww7xMJPvoMXovt74eFjuG9jYWW8FoMXokpShsUNcyw17eCpHyP",
  "key6": "5dbJsd4QwcvP62t4ikD3znPQaK4H1SXiU86wRmBjXyTNhrL4qH8dqwM8LDdWNaukAzU7hK1y8u31FCegEruLydoc",
  "key7": "5MfJ7e2CTRshh2evMuvcxo7NXAMMyK3XHxg9NEkWG237Hks7bHmiypZMdU3h72CK6gnFdLzqUPEMskiQbFMbcC9L",
  "key8": "3zQvsuosQuLfBUHe4QpfVfoQmEeYENFS2thdKQT9ep6tHzrCdzuC3zwyXRYZ9Ud8ydR7qxaAVWVBQ75MrBv6TL6s",
  "key9": "3kY65gpvL9PeJ6woz7MvhchzBAsoJPDysqXSHqemMcSxPrTNZqZthyu39ZienNovNjPZcvsMTEijFwYLhL5dnJuC",
  "key10": "YqthhT551L3oRoGj9i9JYyTP2D7QB1uV5cDoAc8KXRZ2RBzMVQKFvnDotzTEtA6qG7MHagjDJQ3pFYs8ybmW3iC",
  "key11": "64iYRZnCTDqByLrWbYcbzLLpKyEtZejfYVYKnXoE3S4LKoewn4SwJHmN5FpbuubVA2oG8TUV3gztc7nsGKvw8cWK",
  "key12": "42fWN5LypWpxjm3EV4A5twEPmBeT1JjL5s5SdVAS1ZFU3dixBTBm2GEXHc9gaLGfT2uAmrx7oa4i17VTMNNRUUr9",
  "key13": "24wmiJtMapjb6EL7qZh98MhrBR4jxS8zcYnmrWtym3h1GkUX2SgTtir1DieX5fV6g4L6ZMDXjRKHYLrRfowqqiYT",
  "key14": "2H8vqDeNv3mfXq2UeR3nEjgFYYYZKEn3AqFyAex91XvAk3YSfyBJwPq9HSf22LPyeNHTqWTxrKhfEzEW29jv7pQF",
  "key15": "3kkheRWv4k9w83R3gQAXZbxbGc2ovNjcY5QCWNCYZmBKcx7kmzD93wUuaZvufKrDBijfwVF4ba7eMMMND959rZnM",
  "key16": "5LCmRWcaWn6cYfSo4nuJmmTHzjWQ6hehCzDFb9AP2cESLxYUMCXSY2r9GQRa9HDFmJ3TQxS6DL2Pu1sp2oeVPut2",
  "key17": "2cty1NtQvjTYKhJQx5Exas9QmoGVS3YHSqjo9YCvRLKJT9baESNJWtH1WHxy6u4Xsyg86S5DmkqLH8zpZMcw5Ub7",
  "key18": "2NtDg3T6mdNydvSCLSXr9HKsjbiwVbb8KSBJQUfpsGLWjwai56Ufm3nwZTGAbWAjkz9b38MxfKoFjqrJSvgpm4ow",
  "key19": "28VUFZNdxNkuamPE2ScswyrYCogv3wuZTz8Y2cVcE4z3xaKe5rii8qkEa2JXSVufuvcHgZbZVMxMtThUy1PxjNuP",
  "key20": "5sQUnortRdEGMWi52upDYgpcRHXmProUKNe23KgL6B68a39YRHVUkBkrLXXantWbBKxST7Tj78ygbTfT99vUwvfu",
  "key21": "4Avayx27MTUuRc27aQyKo7L5CBsLt4S4ZTtVNKWXEdYjEFyym7sqSpnwb42S2XYUyEjvxTF6vAYCUzoCaUVQG5o2",
  "key22": "wTsu7btCUeKYz6pHnzTrEvKao18CaN4oF4gdTJSZnWWvE2uyxaFmcwyS5L7oqsYbLY2VUYPbF33vKTc6F1XmrvP",
  "key23": "4K7EBeGZvymEmneyHM1bzsjVPaAkYMn9qCaHyNxQydyJtjEqZPa9NJRpbnreJvzBH5AgvCqVH4pfiKvikS5CnCqd",
  "key24": "5fYwWQhWNmtjYCQv1ojk6CVh6etrFywrCnEANP5TD4gjyRa2FzwAhRCXJDykBqVC1UmRNdqFgxFeij5RX4GBEhgS",
  "key25": "46hunZ4S7YQhM1WzWK7T8Evqqfgw3sjSHnxFvjZpfSPSJq8pcwARauYsfLLQGrEoMTYYHqeJgbNPTwqrHi1BABFp",
  "key26": "61T8AJM4rn1qc8R2duNGLzGksasgFMm2aj59GTUkMaMSmatC7dApkyXopZBPTmsQbbDxumFEoLbKfLBUygC5pRqY",
  "key27": "BWyqFEYcezbtxsgaFwwpQ7TipBHTc2VKWZfWL3Qp6YY3C9UzeJN4QUryV4Ad5Y7nKivQGdKHTxh5GUbcDuVtqoe",
  "key28": "3TSJuwbNQN5MZopCyyDUgs8cfMyyQ1Rm2bEeazMaFQtdxtpvvbXQzJMzeAEXw1dKNmctistErWEvSBoygAX1MfX4",
  "key29": "4Rw5drRABWHo6KaEf93GpqVu2wR1R78TL5Bo9tyVmfH6JHLcJPe7waKytNHbyowgjDzQ8KCc5c3woXEJKnb53xW1",
  "key30": "2QtWj1nGjiQCKGYifYTppKpQhTiYShswV8qK1QGzLnowq6q6YkLkMwVRy6LRwuc3aFXKS7NXxG5Kd1XDQ7jyvZBW",
  "key31": "gqVug3aN2oaE7WdLVVVdfTEV9cch6NibWZ5BtpU9wTyD8EY61rg2eyEeiLaqNC2mvvEnwRc7kS411131xgMCnd5",
  "key32": "2E2YHmWP6poiwZaYJBoEWhYkz3c5CVW2mNaU6aq2zAb7ULqX2GiZUFrJcTJGnzmyF5V5Eq9MpgjTXfpDCLorKMA6",
  "key33": "2qfFeUMV4hsPnjPmsnTAVUiFAfyECQoEXJ6r3g4qaFrfYHWXnetBFTbMQAnWLgai4NqKCCVnM5A23oARWXpHA4fu",
  "key34": "53UyqcRb3aW7k6PtjraFD7ErnCYyipmm2xrJ9tEYvtAmiviBaZAWR3gP5EtugPmUGPdk8TbtDsFkxegR3MMZEKpK",
  "key35": "2yHTiEjJ6PgGmvhxQ1KkmVHZtYXjS1Tmko58uABu6jaemUug95K9FRgGqCnsF8f2fN7JubJCKmA1i58eQRDE3Y6s",
  "key36": "3myvZFg7Krbd1S8k88LRiSCaLyiwzwWpN6K1g595HxgoG7SAxtLVeH3HrDDpYnhjUNzt8XwyzKHUEvcxj8uW2FyY",
  "key37": "2dV2Kr5kAfFnfdmuQHnVcRaKEKGYBHgHieiJ8XPyKnYexbkbD4scPu5uRXWozs7Nvnq4SRzheRMuTVYWsZhVKL9M",
  "key38": "2KzRxEDXs3597gCGyhVGP2hw8rP7uQMMQcsZAMvyz61oKw9xfDju8X2AtRKPiMj8yZ81Kyymn9vZ2GfCcPbCAV2g",
  "key39": "67VBbKiiskPax4EjxQY9XYencjkFcs6LrgViYJvQs3WnyFircDetZ4DyfdSH77qM4jXjJcs82tr3wWtwpsDn2D2i",
  "key40": "8P9TVCweZbmHZDecNDpAw53J9pX1w8rJZCg1pcNhrHbygrscFtq76EwV4cLAexCsW56aHQdMAgsEadKduXMa3Rm",
  "key41": "64iLFdiobZYX8PsPQ3HqWK8GH8S165wc6M34B6ifBWPCNwrFTZzAc53ZRSLefHL5bUq8ejkD4z566CFEJLbEQt9k",
  "key42": "29VpRveaWQYf4ACUgnoJb4rdPgRZTAzZxdDimxXeUiWXFz15hnyrFjRNAwyimpac9GGBbESTRowWsABeSMYo8d9k",
  "key43": "44pVyuv5BzZomcGBvJrhs4TCMVSkQNhn8yMAu6kXzpy2MMLgdhjKFCko9aJQKc3qRGtTS68BWZDfp4hBCNG4pgRr"
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
