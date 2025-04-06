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
    "66wQH6Vqr6HnPuCq4ZcL6drtgNzKyEegdNvhhdwdeoktSQEXa9JFZ7q5ACcAWLCBh3fBacdMtvRGftjkvo7cG9Qt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZFu7qrb2YvQ5qJuHPMyj1LkA7zvM6CsfzX9469kqPMNDuJ1wv8FLBaAfBLmpqN5dvcLuEFszd3GyzAMX8qcEybu",
  "key1": "4yipuuWSnTxQM1AHbGUYPVSk7eMqRLvnQH4Hi2CkVPScjFQTHrvihP8dHzWYAFmaHVCiJVPGSR6CLwrG4u6gaQX",
  "key2": "3g3aFeyjesk6zHtwHii1wx5Y1vDDcVdBnDdwJKRHPmqD8SyAqTzPqQtXFtTrLA7ZMqJRsWuBaxTZo5wa6Esv5mFU",
  "key3": "5TECA1MKfuFu1NVbo9gfc4RXzU8TKp55Zj97UtsPLDQFhBdgZtfxjR2uUS9SfQWZDt9NSxjjGAVQmmRwcyRxQWsE",
  "key4": "c3HM7ze3DZTuYpCa9KhxPydmrhhBzwDKBYCsD9sXekmdPDLCXWz7vf5KUpRhteziABdaiER3Au5AegkDFYwHJ7c",
  "key5": "4TdJkEGBmadvUgpKBD25ZRX6PqtF5e9bgXmX8PZjRsKMa6gVUUiyov1dat5Ux3Mvh1ZdxLVeKd5gJUYQ2Q5msrkx",
  "key6": "WJuoxQmMzVf4HfTQAAX2RQb1y5K61b5Gwnb4mv6S8EZ6vDQwWu6AYgqEF4HVHobLdSwo9Qe9dRvyfQAFpyMtnoS",
  "key7": "3GVJqxALMdQizWSuasWX8mrYheNC66JXQMmcFMCdSRvqKmiK5ADeYzAS9TLKXncWmmaK16Yh7be2SU3k6R9fT542",
  "key8": "4M3hXvuuW4PXwC5tikNfuPzeJSNXYuCB6d6T36MHoggvCn2CBYk3Lkkkzv919wsHDdsCUq6GeC6uNFh6mV2SkTqP",
  "key9": "2mmMr5T1qDCAd1gjsRTxHu9wU6HWHc9jknZuPXx4oU6NTyGmAP8Jd3Gte5M99XgCztQFxjcEdhwLcZaGYQ6k9v7L",
  "key10": "af4an4mTTnomtgbQMXSFkJUhgbrod3tLvYAT5A5DGn1YCVqtXEdwWJttd5PrJSGo4xCqZPxH4PjRsgBnkfpUqgE",
  "key11": "2D3o2AJt5Ni8vmM25gUxo63jCrZ73sab6rkDsCLAnbVKTXTsZtyYJqE3L9x4F7KvcifT1UbkTiWVP66xz3xnK9ej",
  "key12": "4uANWSBkB7QQZ1GkmieYqQvLZJHHdvRLMfyasYBv1T182zc2eBTJBMMpPqhE8TpZHKQ7HMDK6WvZQwFJz9QGa1r7",
  "key13": "r5PfVwPw9aTvzWXHZxU66zjss2RAtoPw9Mwf3ZS5gtCeUei6fZJgU5N3gUir2WwNP4yZGfRHbG5LQP3bPuf23yW",
  "key14": "5oHGptH98WUqZ7ASC8XjTbigRty6qXUjh2PN1ZtjepUTn2BMJzzvZfreZWui62vU5tgkVvFW7QC3VVHGFhGueN1k",
  "key15": "4fYL7XXWnhqakcARboYLK63KrVi5ybntzpo6XyFWbUroe796kUHNLTS2dkXLt9sbkyc5c6aenoEK5LbC6zjdkyE4",
  "key16": "4cAhbGhK4ajTFSQs2TmTGK1yAhQR1L23m3hgajxWbmVrxM7RbDjw6nM669CeZ7iRQTxsZtr2v98WgNi3ZWnHz9Qs",
  "key17": "5G3ZC314mcbP8g1YEg1PJSdoznY7tyNUG41wnm2cYFz3PvZ5NgMepPdKvj54CzPtQghf88GC4VRRqdXovh9MQEZU",
  "key18": "iGhe7wzhM3oiGmeCH8AGid7FmZ4sSWGc8wjr9GEGNxppPWu3AhUTSXrghBMYVvkACouc31KfymV7gRLQEPpyrEs",
  "key19": "phLeZwyKpobPr6VUswxFoAYTGubBiArSQ5zxF9hKzgot2vBrK9kf8PgeBN4dBrqY51VSiVBUJt7VPVoyuiSEPeW",
  "key20": "5tad1c4A8FDjNsW8CmrxzBi8nSR5UTtioSzUuCTaMjUUxu6Je6VxMdGMBaqCfPEZ8bycZ3qx6mQ83QF3SYVivqzn",
  "key21": "3BCuQLwDv642LJSTw7pNUHscsC58ydQV2ACLznb97wYSvAcyxcaefAuyKCABJhqGrVY3jNMJZtpRg2fwbouButCY",
  "key22": "2cCP9yEK2v6HREuYWtVXoiWA4u5W7EATwpam56x22WtkLpy5b16nM44XaLeca8dWqxegwLpti4RgqGW5WwFvqH7W",
  "key23": "2h4rtkm8h3qJwrWNvqvYvozVg7LcuUqWTgTco6zDbjNWMBwkGSMDbg8mzThqUbdet5tnLKnttssX6U57yeBtZi5M",
  "key24": "S4vQ6XXJTRDV36ysaza97nJpqC41x1GWm6eq5UQdbnXPydPsX9uBwzq8Doc7rSX4kb1S2t5GtRe2aLrrR7ryqdS",
  "key25": "hfU5DzjDNVbWUm7sKxP2oeBfHt7UPZAC9wKdGTab7AQxYoZG8sPLzCaK9UuqfaK7KGreJjR7iH4zyPksXL17jhD",
  "key26": "3zbfdmSMW6g74AsgWjCvi7D2WzsrC6Y3KshrSXxPzjjSa9JpUh7Cxd23JL5DWV3RzfHfskK8u8uUgnuoWvEmf1qf",
  "key27": "415bfgDQ2Qqnre5KVJYgQnhnzpDgN6zaTc2Ei5pSPLy4vDowBVW4NWwjLFKxqn4fx4rVp4V4xdcrhNNq48HGQqL9",
  "key28": "3rB7sHpzEET8yZTGYJLoQgmzeHbTZfBeC9Sg5DYpoN8NARYLMX2cZ1nd8zhJcUL8o5vHgHDq8ZtACs4B5dB8UqJ1",
  "key29": "2q8Qsn8LiG9HtwZ6BHhyEJftaSdx9orHV3UaedvLZBcehpAoszg5vARWBccJTEw6qge43Y46vUWQWKPdYYXBP9HB",
  "key30": "53V5LBo3DngFjygHTmeoiksbz4A6pEPYGyEk5u4eGEWgEGbGDqmueUCT2bGyLaGF49d7pgZSyK6aKsCjGeNEEnvD",
  "key31": "2B84uuAXUEGfHGyxnvGVgMpXYNDUaRtgkcSkri4cmqF293M56h3VbNCABqaBAjV3nK7aVxD56TFbcSBsBjQTpWcw",
  "key32": "n2cYBWQicUemYjsNmf5LsQpKVnAPW12jutYV3ggqE2bNa49YRoRC5hqHSEH1RYKV5TmRoZmne8r9vc8tEFzvYyQ",
  "key33": "5Ct5744g4yGZ5K2yZ1W4zh5W9BhtAzj25ges7mvMtQ81RXUmUgvvj2GLFLVDAidoLJmcPALCS8nJScE7yPoDRkGG",
  "key34": "3YPw6RNNeqcZaxKojNijX4BhTVkVCYoSAzsqm4P66S8JDouDsyLxx98dFkTmhVULWazKXxT1DWifWFzzNitgccEM",
  "key35": "5euW6jEJT5CUDPdmnXVLMfxjMaNrpSjZQKGVMggwbXu4c2LYN6dUynWXBbS1Weonjbi7B7deUSEHjVRZL3f68wvd",
  "key36": "3oqf429BuBdq8k9y6ns25D72G63RXGSzy6mToJd7cYvYMSiXXYZME71dgaC5PZJKZLZQXKTnypVps66VrQKSEk7b",
  "key37": "2sBTnAvEdB3vvZFyFSA4wUEdxiWmib9piqWPKeH8oomZhQAqqFbC3QfbWSHxqkcb2Ko7jhZS1guMPiH7u9G5XuFa",
  "key38": "2PUi8BWD9Zpcsv2Hh8HFzi3YvkNaH3rPYEhSKBTc3EeYXCmRJ7WBa3jfskTCDP3P2KRvPs9ofGVh9s4DC4d3FYDs",
  "key39": "2bEVGg1c2mF3mGGgeQAxmPhu7KegLvo4f7NZeea2TLmaEaudK9yGQSDvwtqSPoK1f435XpzcYTveiS1iGDjXY5Mi",
  "key40": "3iRKoaBJTEJFXCpwzhMxq1CRbnLwZVmTTxJ8zHYsZ1rfn8vY4oyeoxayg41zS3e3oGDvNWCydJJfRbP4r2pEKh9d",
  "key41": "328fNCjZS5CcAhDQ7PheaF1hwB6URF3wJnobMERA6xpRnFUh2M9Sf5xjLtdE3tLNujh93LAGrNSeqy2ddeYyyS2u",
  "key42": "64J1LsMiJor3z78HkWTNHR9eshm5wyUXtg6c2XCxCB8yWW3bzc2FyFnnsEt3YS1ASHzuZuaXQWWBqoFSUSJevXxd",
  "key43": "5DZqfUwACPryjkNaJ4hKviWVZDEyamfvFh8PyHnuN1n6ptdtuXyH2V4u7cUbvUrdf1CPM6h7LPeZwWNToM6TMmGB"
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
