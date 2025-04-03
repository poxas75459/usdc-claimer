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
    "4q1QBckeAi5XtncBTcRRHmJr6ZkKGzJiViz5woT8szooPkoY2wbe1XRLGwLJNfNecNWVqrT7b5Wkt5S6LSvEEPtF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CSJk9Dr1FDW39mqcf7RgfVGXPs7u14ShxWhu5u1vw6yNQmyRgueueN1SSPB2LVnvzgU2RPesbb6Fi6itMmzNWzC",
  "key1": "wnzF6oyFRvGH1QcDWiZzeQZx3oMRd3smkXzUX1467FQ9fUHAetMv3tiBM3dX2YxVc2rPkfWoW3phtZUvQSfN3NA",
  "key2": "4d2NhzqyVG5yvqMKNthiQu5RrTMaXMadrLs7GRUDUGLZ8U1vT5UNCbqPXRmTtKYWaGkn51zZQuSVxDbKPdHCguny",
  "key3": "64rkPgbFk4LqXqREPVtJmmz1nXcmLN9knBDmfZN8DnLGkJRHmgB4jiCSK728fqx6QAfB4oHUZpDf4BjFgPF8J9XL",
  "key4": "2D4raEAoeauCty1w2SLKiAUNLCXizDuUj6GmdCFfE4AwHtvxN9dje1tkNktg2aMRtgrFNNkmvk9GFfqRtpfmMst3",
  "key5": "5BichnhvhDKi9KTEBM8S7ER1zQtAr7CWMFMKwZiLnRBdcjfSbk9zmbFQ9tJxm15VmQmt67cRjn31yu3dnz8vkdLH",
  "key6": "3YLVdAPZjDQ62CPrdU2qj8Y4LGPoAFF1GTZKx8iRafdaqd7tU2rkx3c3oZjfRGktR8qymeCwZkcaVmPafJdkPuTS",
  "key7": "49C4LpTdRdqytSNSu8otLHS9i4sAsVetBJVJuEFw6LiNRgxYRTudqgb2pZCaDuMwa3grCFPBr8S6mLWph74HEwtd",
  "key8": "61E6GX1feg9GPxBDBKFJqUPAQ8ymVw1m9d4tTSPgXSVjmiSJ8oRFEAyiE6iVb45S2FwdaCteAbemyyG9RsBVQQp7",
  "key9": "3DogF86kFDrT1cdZh1thV11u8iTk1JomS6iwtukm6uR2AeNHdrUfaQuksxNiuMRAti1zYLV737cnW8XtvATN4hHC",
  "key10": "5hPgu8NbpoE6cTRL6K5mfJsAkiEriC356esK4n6bXyXx8g9BTB2zRRGaHGGmxdodEFebktAH7ffTaKZSMqntHfiv",
  "key11": "3sq7GY82JuczNNSws8m37LTi6ZiTaAbEivsSWgV3R6GQdJnanjUFpNQamshLsgvdNfdqJfQHrLbQcPrQFcuMENSq",
  "key12": "4B7kSjEHfcEij5Pirvobd9SpUNCQwjqjkCHfEtizyNhcmg6wbFdnVUJqMBc9GZTb3XcVUkRuqAf27tzugiMKyTBw",
  "key13": "3swGXuqGJDe39ryrHb1uoeHeejfLWJVU4fhoAp8NQBE3NjotjUJf66G7P8eQJU22Rmw5jDuWtDcRTsmzeoDMfg9X",
  "key14": "4m6zwji5V77p867dGHeDfduJtvxwURYtJ83NezLEyTWUFgccK6BRePaq7uPuKQreUNbz25pFgP7tPSMArX2XAXys",
  "key15": "2qtQAb5pj8WfFLhiAAm6njHNzyS8XsudBLqZsm3T7gatArwasDRrKa2rkJ7Atjws2eywYK7RhMb1mGSV75H3Zwr3",
  "key16": "4cGF27wwK3QLFPc6csQJECahh4aNbjTnWpLDjpW53dR5RLhq2pvNGyKnEvTmSFmG1WYvaUK1kY26GSRZbAJoMcrq",
  "key17": "3xjmEG5eNQmQhw1aM3PEXofN8atRaNEbDAfpvEbd6mQVQfmhsqYuyU7QhQ2HFwitcQsc5fJWngibCTXFKJWBn1hH",
  "key18": "26EkszMbebCLUwevtXKjJq22JZsapdv83WGLvu5LjnTs5ZF38Fh9tmpY9WKu4rtssfyk4Ae9C3GsAWtK6fRKt1Zq",
  "key19": "5eLv6AkYXwU9swMNUYQCU2LS2jfVA5tTroEfmyn8L99M281CodKNsDuxZTE3DWG5XdGNctGxe11YcnDQwXVqidg1",
  "key20": "r9sztyRKMSDATwd3etBQE2vJqoykvuzeUHNoMDufBCMRbR5o4oBWZJQYnzuheL3LG2HbYWf4h1DGngqmv8rM4s6",
  "key21": "5SwiTZ6GuaiNVjNe8pj7G95V6goBxGX7T3qvc88fNY9Gv2B56Am2VdmREC5dKSQAss23MjkrG88i6Rmdzjwn4uSv",
  "key22": "3ncgspRhsWpQkpsqszvS5KLPfKu9XNruZhnV1pzjJxFutQsyjJtPYgXfuMTkSXRzoSqLKpcps9fwA63p3qb9wMFG",
  "key23": "16oe4U4e35a1vfWRyoni3qVVjp6sB3vMfuvAxmT4zSdh6WewYzvf58ZDQ4N9pjyM2W1HyawJFa1XauJ4td5Znz1",
  "key24": "5QzKBLgi68JpNRo78kw1oQynZJhoRRmAuCDktfgPT4MDPGKkMQzYXYEJq1JQF4CgXrEBGFuDtWtvQge4dK1gwgAN",
  "key25": "2PcsNtPgjLw6t8K8F6ECmtSXCnSaG5dk9z94V7wjBYWjoJ9iAA5GvUnYRYZnFJT5wbhqQNwow2dcwKRCJy4YiZE6",
  "key26": "4XusZimYTE821kQdKKajKau7Rut5cFG8MTndZGNDkCZ9ZkBMAbhAxGS4AMRCEMy1QVqTSVwY6nszk9Daxk12MJAG",
  "key27": "3FSfZbyj7YV9cD9xnS5ZJQiqfB2uKypH9jWrjyPrSzQ1W2zj6zDo3XhUousNiihAri1F9PdcEmq1XLn23xvqHmqx",
  "key28": "4qVrGYJCN64nqLLiNHAk5ygB7inL56udu7DKtsymaEgLXgx6B2WDTL7jQzszgKbG8J3pRtVLUVQYzN6CirYZDgw8",
  "key29": "3fQFFH3aFyhJUq5KdMTcHV8zwcBvumiwmXe1Z3CW4GnH6Mc4P9gs27VePXMpFfnkDkcw5J4Lu62embx7avYG77sQ",
  "key30": "3qpJvRgRn7LKiGptEHAuUZZZ7DtYPcAZTsy8gmHkkTEGztYe47ZHFjVok9sCP1NDVSPVy7KbffvaxNRyvBKV8zcg",
  "key31": "2YqwzPzd8w6goLhWXGPyfUq26dwWayy47LHRuXYziUe79mpVESb5LDSbrXU3gLed6GPeQiDNMRmhk1hNg9QxQm62",
  "key32": "5j3maaCgyFcnKwRU9Y6BnXFCtWuWsADpux4trmS9mDC27fNpZuZ8rcxpcvYw8fabrXBxa6YWyzQN3MTnosrc5zKg",
  "key33": "2hT91vdoTQSEbz6GdssAkf1CfJpNUNkd9YNXBovGByjFftmHjaEi7hb5SAwUj328z37BZ5kYauiava7JAgLdMqSB",
  "key34": "2aCm1Q4t9rifqvdrrpYGctHjZE29XexXwob59okLSVHk1VXHQDfPnXcthQtNn6KAsdU7pPsC23iHMHkv7yGJPodf",
  "key35": "5SKayDy7YsHBSw3maE5Yn1YAwtkmCLivPB4bganT4HStXzu5S4k6chSwbTCWReHifEnxb9s9LYPmVp9KNUZK5PTm",
  "key36": "a7tLSTzmduzcRRDANvuHGzSAGR82XR8YMwJfXCYP9dqog5C7tHUXb17LMEnDT9tfs6MgFoQU6tnh9XWK5QrQGug",
  "key37": "35oavZNz2sVaWZYw1aKSgfBNgzHRk8KPBymxz7jGGkMeEkVESLxghpAu7pnNtVBvMpGmh3KW1wVnpCmf1onSPwqU",
  "key38": "2D1eCujoNUAZ2Dn5UqQKcLEnxCWp72Z1g5rpKPsBPQR9ughKsAfJ2WrGEwnWinDHBQMtiYi1oFcA4ShxbaoY3BWz",
  "key39": "xCzJcQMge4GxhDxvJcmQfxyf2fqsS37SNyP6tR3SDZM3mEcGuytm7MecPiNFobBr4L5uVPZEVEViX7RzxwWFsbH",
  "key40": "BMj1H8dhZ4Nd5K2zrpJvU5ZP6SJXVosBnUBsMxv4CUKCpBvAux6fsTNRC1KToxJohN7KgfurdtLQTWCGxonCGc9",
  "key41": "yUYxxW4AySmarEMxrF6bKM1iXhgJfhPHPqXKu3XFETatPeMHGoXogCspQj75mFVnsZxaTLo3p726423FQeTmnSh",
  "key42": "4eP5qYe8s368jdEaPdB9AXS4M26svWGxK4rGHRyspZkf6sC4LE3k3jnHNxoV7Q7taQqbYSsD8qaYa27RWmpk45cJ",
  "key43": "61xE4WdNK7yrM54wXJ4cqPzDzgMUj2LA5M6kGPCw3Eb6Jmzx4axdziYQQ2v7tYwHs5L4DYEv35FSNwzqxTT9gZsG",
  "key44": "3b55EduKuGvjs6WVqPR27P1kW61gWkbJjbVGELuRJnQrTBiPD4QpnrSq4j4mp2zC4sFjwtdrztkC3jNgH6aUi1hR",
  "key45": "5HcuUQ3eTsX7g1PHVrr1652pLq25ET6SoLnVVAYrhbUk4KZxZW5dsdHUDGaMgbPWqW3Uo4FncJxcty8oacrtoHM1",
  "key46": "23AcuZWC3gwC1Xv2LDSmsroMg6cD2TQ3eCV8KjKBApdYeYJ86WpT5i9ajjyERU2JqNreqyRSbTY2G5gDeYr15qG9",
  "key47": "5dGBCr9AmSw5iDAkJoRgq59SGXWZj98JbQJ5qnd9vg6ALdkLjXyfT4TiNaYh1ntzeZFiQexWJUsCsm47FLcdc4PG",
  "key48": "3S4VGftjUkgMfdSVtWq4S34X7r5XyCiQe5uTmLivFKc9cwYgZjPFxkw13JQB7DFtbvnpoZwpMFsS8nh5XSiRGDpC",
  "key49": "37qAR1VhkHD5kdphF5gR9RDjoaMX7SYv9fry9LoZfiUWM2KU73v1r2RR3yf6L6WepiSbw6nj42NP55wktzi4ZgJo"
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
