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
    "KvvTwvmjamgUm4RJbMTSJMZnWFt5Jez41NX319FVVJ1T3DQGLgzTktBKG2iwmKRerpixDWorLx9nL6KUyxm8upu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4q7s72t6XSmbebtFa2WCjMG24Wo8oDPvHt3Jh2j82xo8xQAmnVGKDXZt2Zrj5jX7Ln7gDMmsSnrmjq7E7vu71gmN",
  "key1": "VMAZYNZ8gMH8wVtzEcbg9JXcEwM9a2wbjdVWZLieukEd5wq1MyXJrx2k42JYbu2XdD8EFwc1HorSdwNNTXAQAYY",
  "key2": "39wq4pm9EW3dYibNk4XD118zFjXAs3Yy43WFvEuuZwAKMxhphpSGYM2FWoXTB72VLSTd2zPLbB1ECFsQwNw2JJSt",
  "key3": "2z9qda3N2N7JjrYn5iNPC77UnTtAdHx56dm5wrMKwUddELGyn74BpK8fnXPGDu4xdsiAcC2e4mEnBABoiMtD38zP",
  "key4": "2NvsVXWj8im2yojLT8VwVLvhNZkQxw3Ref5zTYAxvLVU2cmqF4CaqYUwUzhoBKrXKRJ157L2xfzWNdWSz2ANCzq4",
  "key5": "DjnAzCSkUCS727hRN15pH2PjWoy5kjwBPJLvmQ2iXrh44ZreApRfJ7wzLjB91u4RFcuxU2hcXHt2Bv5cVQDrtoZ",
  "key6": "43n2FPMKySYUm7MpsqLe5jBQxf5TWc6fscMEZeL4WqPw5jFrZBew1gnQ9BDMhCAjS11jZwdjUmwuadwvxzEL48D",
  "key7": "Jm22KtkibuHKXRjmAVoBLoy11ywqxWGBhq9M1SfYD6zQfQxsSSuiRnka827ohT8cAn72uqB1JRrxjdTJrmtzN54",
  "key8": "CCv17RaTsfSUvj2Xcvx5rcyYe3CLHrhhaYGxfbWvRGV5aQEY7oESPG2vdviAaoZ3oD9YxHj4reG612WBY4JWjBJ",
  "key9": "5YNapxVQ7WKcgyiEDaRX521BQyjFtwGfeztBZa7GA2Fe2MDRarVPQn7XFxZZSUaaciN1dntfJxtWAqjBreLgMRt5",
  "key10": "35Tf3seaD4NXkwKsSEbLS3yrzLJxPuYzEyncMux5txa3LnDfqAi9XeizpYX7tAvNvLWXm9WP6RZQZ2FRUgj1pCMz",
  "key11": "Ty3PgZ2sfCU7p8zD8HZdrHWjGQ9sW6db9inoqfVXzxHNstSBjJmaFnsBC481jsx4FSnTLjrrVJCaLQfCkTYL1G8",
  "key12": "5tW5STh84JB87mTK7T1YNe6JwNUwmrZt6XJdyrcTU7xjYtHTAxPthDMy5getxssMVypCrDRPMs8qudb1RCYaJC8d",
  "key13": "wrBVJHvnnxoHDDnNyRsFTz8zuWsE5yNqCbM9kKeVamPe22D3S9fz2o1yYejwDrYTBhaea4rNkBSHhuq5SdmiEFn",
  "key14": "59xtDuaz8LSEL1g549f3a5D73EoMcRpuw7vmXyQXgXgvRgcQLiQPE7SbrYm4sGXaj6h5bk1C5UnMibfFppt2YDdg",
  "key15": "4vYdmYybHFD1sDK73LjuaY7ERdHcXaiDkbsnyrpQnpe85VH2Ph3HtpiJS7VHiaP7jxAB4J7D69F6pDVYAChFov3m",
  "key16": "3S5w89WnUnk112qVoHnoqBJNKEkBcaWjfyiv1swUcfSkTj41fLRaMf6UvzmSfTbssTSfYGKArsKuUKnBTzqXZN1g",
  "key17": "5LdnYKqiNfQfzS8GaL3vFeF5dqy6YszecEFBzyaRd2yB88mz8bNf27V75ZwnrdVRxXSr8MTJAMo4EfAQDu7WfYJY",
  "key18": "368FC1J24SaZE1ZHhshBw95xZcuMvMjwbQvutSCpRdKUuk3vshFfDneCEpkejUnySNvE3Zkr8a6TPjVLXGLXB6dV",
  "key19": "j1s7J5kJMBTsqoUAekniR4CacWe3upQUx8gzfjMh6Nbtcg5HgyrVo2KUeUjWcZdaXBeRevvPbPGNM2ZEJQpC8bH",
  "key20": "2p4RxWHG6TUwMJxSDdrYtDrAbZZxHxaC7cUNEXZ6jum72oCZQD9La3Xr7mzqiAY8FQPQePUSsBNe9pGs6RW3E7Vx",
  "key21": "57asbGGcoLu2HdPNWVX2ehQfXrqZp1wzxwGVGSWKMrpoKu8hhrVd6HZeA4ScodXwmdE33zC2Y8xBntLc8moBJFSz",
  "key22": "UNW2B8qMndBZuQFWsNANbqJiF7unhtMVMeuGFDggWPZcA3FLRxDbZmnuqXWfq7axNq91xdJFe9YH6wweWbWo9Rn",
  "key23": "2TjksTAjwXDYbdDJ7v2mLeMMvV8LK1UmCmuhwC6MnBZ8XPatt2d2jH6C4DBh3gwYggEdBGi21MAh7eK9eGDPXoUT",
  "key24": "61peBLbZb7efdxMXvyk6q7RuUdKqS89iY8JYhmbtc7JM85gvEyfV8g7uXQrpyCRrPY7HVCoprCccJp6CUUytw7wQ",
  "key25": "2bP5PYQG9DdFhVcafNW9DD8czc7BwmuSLo7ymyyaKHgFbALEPBsjchHvYzi3mYsFLGFxP2Hop4j5KHYohTfBe63R",
  "key26": "5XpdaR19HePaXqbpJVCkCboCAdHsGz1UML5UwNFwctsshrma7GGGoBSGwAs6widSDXbD5BctQE6kFEYcxagtPKb7",
  "key27": "23umTBhmzmCbu1jAZd2A8Y31f4vfLx5b6aEPLyEH26uEmprxw5JBuymXZanSy284Hded9vbA5ocino4BU77Enbtj",
  "key28": "3w1cdCe7DzJNxiwJD3a3zYSy5tCBkbcSmisN4KgNbauccNP4QsGdqgubUuJi462xkin4sDec4Y88Vvzu6bxuHnB5",
  "key29": "4ahFEwMfDZEqo1zSW4PR4SAkcsVU4eKbLzvdyQXEwByuNdamGr2nvqbcB1AHGEPY4pRV5Jc8wwWCmtkzC1MuTWWu"
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
