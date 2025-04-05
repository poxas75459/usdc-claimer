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
    "3N2EVHJaQecFBXJ4mk86tK1dUCyowu8U1Fv1rwsRd6DYeHVTxZypoU4hBGrkrvyMSHeEehj2VQqPqWNQN4YY11Dp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4T9F1MBh7eWhBXo4toZ8wZuZ4gCiSPQbfK7GzT5ncMfuNem4v4WTHt4uQcBQkrWCZU6RLBz7c8a6aomXELTe6VHE",
  "key1": "3huwRBUB4fTgtjvK45nkPh1N4GgMDxe6Fp6NtL2Nah8UURQyyGnogpby3DZ1eiRQTJgVEB5j9Xik86bD5ChEU9FE",
  "key2": "4fFYwNVZGdhkcmdebKbTMQXnxPMcaLhtCszgGBGU4jLUn7PStM2gKjwqW8cSmLiNFuqo915siENEL6mmXuCaM1M4",
  "key3": "5vLsgkTSx8B9eFxFw3a5Hn7KAWbCnF43wiZYdb9SWAv17S6PSnNmJGc8N38JbCYtUFQPKbPhc4j9ji5GPqR3m8J5",
  "key4": "bab8ZXiaVj6XXsq7H72njyxYpJzBwT7Y8FaYksfgveQrxAUbQ5vakbrpejJkpoeBb8Cwi2kTQVwpwRBRRvgXkwh",
  "key5": "k55axfgPj7gf5ZdMs3VoBvxhoqWzT1uNECpGtT7k2GsncgFVEFGm55HtHSouU8BWggZGMnfscfDnAQ4sDsKTGLn",
  "key6": "Hd8pL51DFAh9kHScVnpsP3cmw3j3qxeyKi6rmM4JNyBLG5PgLzx5ZaLi4eAz8sCXRroHiZ2rKpbWceKLtp2CZg3",
  "key7": "4X4CPixGU7UtE2eGXRcePfsYqf7rcrM9KGcmhzhMJBY5LCs4oRaM993NVooiKrh5LkexweLxaaYNqGpfnuWebR98",
  "key8": "5vDNsdP5PzzCWgodkt8xv97BfVK9nbYybs3vFbvScRLLudq1Lj6MNbHbQhyofiSFSvra7JJk8uEJd4NMP67HrZRx",
  "key9": "wkHwx9nFyJfFm5gikauvryMgEn68UGmoKNHiJockhKGdSuHmxfroRJvSoiS6D7p6FuLv7QjyeCCtYSCZyRrNxo7",
  "key10": "3F4L3eD6MD65SYh9bVABFxgQGmd1QdUzyff9aF4hQJKNzJqm6u9YxnvDFJKu2zawzd2NAagFNoQUDz7WjgaRqp9G",
  "key11": "ne4CeCQbzM3QoidJQu5ttgAXte6idirwQLJaVucgdoR2HNLPCB9QSfUBHmQghymEKHvNi2biT3wmtshiE2GW9eU",
  "key12": "35K54AXDc28wfiXXg93ArhnrJSWQsVtBURGfvukyVE8EZEinwPoftjJJwuCLkwSRij4bTRpwhBburg6nDdgJeYLD",
  "key13": "4z6nUoZrfv9ia9sykZQYFmXzX1QP7eQGeRqWZYZYNVu8yRptb3xCBnDZVuFhXgcwaAgaijzu5fpfxH5FHNHDsftN",
  "key14": "3e52mmAm8wGwabuW4DUBDWmjarsbCN5agtctZRKCdxnQBK3M5awdL4gyBjBdmJYCScjgsoeoed9CiKXRscXKtTxQ",
  "key15": "2eUKGjtNJYFgSRtzJ6jeiXBpbydTwncr5T7wocy6hGJE22sekc4dpP8tGwiXMyShMscncU3PSNda22GZ398ftpkV",
  "key16": "yAwfN9ryothZJVnMz8b1nxan6cMx67Tc7LDC1xsAvEViud4myxzi4wqVfCryFzLyhAQu8XJ1cFQDF58NXAjso7U",
  "key17": "Tsx1HefwQS5SxArdPAEPt6xhgwgCysXTyXk7bKNDk5MN2Yo2eKq9K2KGrUyiS7Y3LwxH36o3jpYwpW37d1tpRqu",
  "key18": "3qujddrNGWeZkGmEpx1nSAZq5s81jsi1KaKRQT43LnDK8agn7BKfehanuzMkQ3A8ePbB19vikPV1iXEJepTNSuHF",
  "key19": "3SwrAsKQ71otZ2sGHRCj21qVj4R3BUkn4xDMFRmsyFnPQ7PMiQDALodjA77pD5Y5brNXVPcsGN6eg3MrP2QXB3Pu",
  "key20": "BCzc96X9vcETckeRLVaC5BiEzc1AXReTmnvUrbHEzbgGzD5oTHFPU21PUpzcG1uju67L2tBWMfboMkJMFRWxLbH",
  "key21": "2rrWUy3bx21mK7zumjrsXn74hFcCN9ZDx4ZJ2P1vKTDMsasr6uVT3YqYn6MNZ6QZqCKY2Wz6KzhCB711Fv2nUowm",
  "key22": "5dFtATSwn5xRimz5x9Kpum5g1PvoZx7HsQjZfPNSiERzTFRf1Uw9V64RZY7hWPMjQp5ksuDNDVyQmLpmNvRCxCsR",
  "key23": "AtnhauytM7t1GRqMmKZD661gySMM43N918fcdgg542oBEPvUvDY9gto1gG7LTrA5kq3RLnra6Z8rK7MzyzRphsE",
  "key24": "4wbBBhDfBNBCp4q46jmazioJhMgWrTumUAXiUjKXcHzoDDj1a53tV7xu5w7kXLwhFhq4ForPJnuUSZZmAMzrp7ym",
  "key25": "3498fbp4HQdAn3ShXs12Y4xb3aN67KuBGbr3tdnsmCutz4PRvGJMvnZzVXXfgzvgutaMdSuSKsGqwzzejVCSkTSe",
  "key26": "5jmHBzV4C4XSZRd4tQWB37gPBkuhSMTyfurXNa2ruWqrTRRj9HfjefmLUBDv5tCyEowC417rqv8qezApWepg5TbR",
  "key27": "23Fj1ZCodJFsxfkAqkePAf6wKcoqYQsivgEsvQY6nrt77yqYW6dwRY9wZkfBAivVfhTgjRgARN5EtdosxrWkjABm",
  "key28": "3f3nFSqyA8G2NT1YTcfuhtdZfxe3YBorjhBxuX2qUw43S6iBynZXoAD2Txfs3AvHpT6Zpr3WV6tPceUjAUVeQCJe",
  "key29": "R5mArnQE64YyDjicz17QsR4KeHnhK6m6kQ1D7aNLGwrZa3RRXJNafBbubDY86puN5Rc3oTzwkp6AG6Rdh9sRnu3",
  "key30": "hexVtsfzxMtfEo73m43Vw3GVnMmv4dK2HiGaQbPbewj1yaAWLaumS2BR3HiUNmZU1af7hWs9boXvGuKzLoErDMa",
  "key31": "VT2uU9RZHX21G2uHNf8TFMDkhwceYEuymvXQko4mZtwcojhCcz7sfCq9hWmHjLVkMKpGsxroeeXm4gkdtcGben9",
  "key32": "taWH5X398z7vhhh4gZR3JND3nmDC7Gqu8j1UtUhNAn1pP26oanuzTok3n8S2jSbazY246kFqmUE6jHXEkhVUF9n",
  "key33": "2euyFLW8L15DVxRXtKZDhdvLsxWowRmZGHjyd6AYUJxkMn7HHALivwwc4nrvZhZc2dXUeuwfrRgSA1XBqpPU7EUy",
  "key34": "39LXg7i2XUoyprvQETcHPjSMqJ1otRXK1wWfkJ3aQD1Ht3B87faNVQQJqFLoNUukXfycejczV1gF2eJXDuh49G4E",
  "key35": "4zrxyZiFS8V6qVy4n7ugLq2JfaivdHMeXtPLXdAmqRcLZom8p9SkGLB4VxJzrcuqMxjjKj4CCAzDosnTp9eTmUSW",
  "key36": "4ZUe5uGJmqVpdwm8D6PEJSrvbDdGZH57nJp31gTqzCLYB5uqHx14B9hXZqTL2iY5M2A7LPEmPAA2N872iVyYnyMX",
  "key37": "4vBVSrMPbVvkp2BAKUkmqoxfPgH5bSpZTvQ4bgJWd7LxwaKgFFqWjcpTyTJCnANG5vxWk4WRtr4p9yTe2b8EXjgs",
  "key38": "24a2t49UxLJhw6YUsf6iX3VoXVL3nrvMTh3nF1WPxPv5LMV61XJH7S7Kn7JivdkwbLhXPLdX2jaPtVp4z8t18KcS",
  "key39": "35Fh36T5GTQRtMXUpC2cdLJpb87MGAuJPBJM8oxqipaV1muGYeAjtbzjhWvZAsdfxMGRQ4ExVvswCxF2PVi669Kw"
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
