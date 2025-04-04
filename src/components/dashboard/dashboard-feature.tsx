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
    "3CAjP7wccDkN3R97XHaA5uJzav4Nf5cndw5GtpcX3KzyTyV5LNNLWmBCvuc1RquoieDvBMUAqwJtqxy1o4mgK4CV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pjL7C96qAcbV8oHk9pAo4KWT9ubo9LyjtY99Szk7e1t5pFVHA6nbx1KL9oRBC6q5H1vEyRfuFXmEEJTYCdD4dkv",
  "key1": "4he5Gs6rk67EFk7iZhSZj6r6z8vD12cxEyRAtgzRw2CbUSLmpumyLfKWBMub5qQyx5Acm8buXSbExL7dfm8wtvLc",
  "key2": "2bEUr9vYoswKr2uMhZySCKgpATLoB2LbZNeVkffWwEPBxcy5fuHjkSxh52n7NDkHX4qtKEZcxWjeanKCYkP8TiiU",
  "key3": "4StdLbq26ZSg6wprxb5bjEeF8xe6WBS1r7A5iHRAKx9zTpg9dRcjM28M9ndRTr31jNLfXbDE3rTbWwj5dHXPKXXF",
  "key4": "4pCPfj6Xywb88GJnugJhvBxsoVcgE8yc18cK1sG1gjwa4kFV1kvEMtU4f3nzVKmaVCuEMoVtxH8mRZ9fEAvTeChr",
  "key5": "3SWUGYUFyZzo9YRXJqSKwN3pgpHGaPX34RgLjc1V5mY9vLr2Kp85fwsaFpyLacjFe5Frg6DbJRqyCWGxu89YHibR",
  "key6": "4YtWN7kQn7ZggFya7Wi9i1ye5Ed5ia2uubGro5WHtnfndBDYwSCNnA6SzWQMCEe48jw8gADTuQE6UWfQPLX7njou",
  "key7": "3w2WR1AEHMJVVWTpwGgqCj579wpvjDhRzoSAiqs2RjekFm7XMAPgLcbiVuq6ZFFvorHygB7iYf4dvWcgdYzw17Nv",
  "key8": "fiRvFHhNZiYnqe1vzwN4un9Aox35b6Ab621i3JYzXWpLn3gXkX2HG1G3wbpjTwugFiLRvyrqA7VWQX3reJx7hEm",
  "key9": "3DGrzDjaF8YmZfTVH1kxUhPtiV2aXKeKuiUL4egRHZrtCe6QrguXNhMfu7Qva9APcGLUUGdiri8kQbYwkmXpgE7K",
  "key10": "4NAUzEhFw1JuXfxqNMKzN4GDE8LckqT7BTEdy9GZw5qLwauk81m7DfHLxgDpPw2SWFKbMqnaawX2xc6FnNgEpUFr",
  "key11": "4k6AcuXFTa4UVpHenjFGKRFQ7B3VpwU7zEtmgwFKbb5mrdDZhZ6xTmkPyemNseF3wwaAixaCGPWRu7AVUTgctSdM",
  "key12": "4EVEKyVc2ZeA1PZtzFN1ZYMBgNkRheuzWgGLfE6TV6hTJrWQbXHb1BU1836QnMFbkTZ9BSfziYiSKvLepj3JpFHW",
  "key13": "2UzmH1g78RP24uHbwvfDh8PuXKZ91UdqMLxiaGNCi1NNBSDbgecUWsCb3MgNMk7LnaDYauLiz4z5YhQ7vvSK6GaZ",
  "key14": "G5e9GWQLq6zM62zA9TLmyb1t4DEKJ4N6kasDHHn41QDQjwDrpyNzH6tSSo8YmdUpu1tdw4M2BGktuWLeUAnCfWE",
  "key15": "3i1EJBiCzWhCTwghHhaocmAYUokdRWUuWhxM7y29sH3FJsNSy9gyCkKoCuwvzU8p9uSkbvRi49fh53gjrv5qwAFM",
  "key16": "3f42BDEi8sAz3zn6o6S7TdAzoTYkVb3cAjvnt1bs6WFgUCGCFBkGcg7CEqqBSkkVQDPXfiDPVpjwNWvv85dxHCht",
  "key17": "bD3NVQCpguGWrCfnMvGHtucN8292szBXWwAAVtWkWcaf1LNNKgVQbP41HRuBvWmrnmWbg88cQMWfN8jNuJ6j8WR",
  "key18": "2jHt4aFg9XkfwWSnQ3YDXMSZBqtFqWWejTRMqrnPe3p8qft9uo9x5criXqQhisVCjuDLyk34yLHwSpt2XQufqvwE",
  "key19": "4tYFc8AUZeoiomvMSTMrcHa1q5p98mMr6ZhdQuQkwKmYbADsGjL7DKASQuDrZGLcY7nTGrU61eokE21Mpf4u4Wj9",
  "key20": "4xdfowxsKtS473cb4C48Fvsqb2Sqq42twGzCBH8DjBuvREwsDqBjWwYXzuguxqehAowzzbno6bXgWfaw211v9Bdj",
  "key21": "3Udf1r92QUw433KcdV2xGmyCgAo2ZKXX2dQMX1uERHHHikEGm2kmAMLkvyeT4egGsjGgFUkR6G66y9B1Po89d47N",
  "key22": "MFVJj7dZcNqDXTQZYy5GYj4oFMUmVFLNvWFGNKEZjppwYfweoKq4i2pN5ZAXTewm3sJaaXn5XkWwvxus1pyZFFP",
  "key23": "vYJRP999xJQcwENoSfHuA7nTaGik3Cn7B7ELkp5Dg8pnues4JC1YUWsGjkT7uLsmNqqRrBRDbuV5CzVNpwbGhx4",
  "key24": "4sfLLAP2VNgPfWbgeUxgPM94V5P1R8uoFqtHd7KbQTjPiviDhtHb1F8a8VWLXQp4g8iBsJQaBTDLNwRB5Y2DMkKv",
  "key25": "55N73nQuyAPMvD9nPNK2SsW2kCA34eynF9aNSeN51dyi89YYD5cdzDAfUUrNVGUprjCkmvpVzVkY2XzkpbF3WXid",
  "key26": "61Vz6QLPJnh7ZMZzdYXB2sv3GP5GnwVDHPr2rmK8BZSECTcgYgKNQaFWgK4hNb1Wi3E4KcJsq87YxRFcE2sFzkWw",
  "key27": "24yF5gUDbQHgEst5ksvYUDJBt8i9WxJhBt8Ay4jJFfrnQhC1KXAAthwCuCweGqYLig59wNao2THN2BtFZ4sQRKmT",
  "key28": "531FMh77JkZUbdAHdvp3a1cNJzQmKAeZ8dDJKwa1nQcoTTsZHJJF5TkfsBa3eKwPxz9GLSEoBMnDTDcwKiRKhJ1S",
  "key29": "wDDcA2QfNovPWqU3nk9pdfTegWUUSNkgF9zZXAgvbuuuC9zRhbUZFnHVHzbsyrbXWndZE9GjH2W4eLy5tZCFBit",
  "key30": "3uuzcy987R9EkEXo95Nx9zwHxA5Mx7fCLZhApgpCKhHcChHZwba2Rd2awSJ3F1uVDEy2pEWovPqCWpfKwwxwocfz",
  "key31": "2V2QrogTzSpcxNWw3kJoyY4FdHjGFoNc1EfRQXQgVgutCvgekY4XNGG2jJBNgLqf3eZ2XUJp7NdtA3N2XjSQujzf",
  "key32": "3tdyiVrxaiubbBYBNC66DRxUAqwjaCgZwXxTX3y3vovyqtFGES4szZBS3JbdLUqGBfDez94e1HZ3zdpCF3SjE4m1",
  "key33": "4uSEtomKsoYmiPPCmY8o3DuNxEUKVmpHTXdqH7H4RxocAD5K5qni8hiiyQsPJbFjamEVKu8Mqnz4aWNvad3vQ5bx",
  "key34": "4LF8epVYwVrZyf54Z31hSPp8gPzCnLVnkWtHRoJjooPjfHF1Nu9bcSGqgcJZZizEck4LH5GiqNFoDXwP1GV8zKCs"
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
