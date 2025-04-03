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
    "DH3ZHLUu2M2GZu9BLzvH1Zjivtsy7SPvNi31ZnpTrLzqidNiUKb4Fzn6mMQyiZPWRBsmmRNbfBwbJA8A73wHubb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TKWxUXYwi2uwcRUYQqetPWKYGRRMXWf8CqSEd14K4X19kXfKont4cfvXvcYMLRdfxW4ptYvajCebvGaGaNSuXQo",
  "key1": "5fkNAGLatjyZ22oEEbxqPBnzXpgFMaQL4ygqpoN7L1KitKcUWy2SoBAfK8sFpNGA8uHJ4nuo57AMW995m3JyjjZB",
  "key2": "4XHbNSKUt7riu4rRkZBj11AXnM3iS29BCW5hq9Hypd8VPPY47ggZysV6vieRzSArT3bbTGu4216QAM79SRCW6XpF",
  "key3": "4KbfH8HymXL7ATYzj75F6gVqBohF8wW18qAkywL8yUqyhtaKy7WL2MqWX2pcatp5kiTaBg98bxmifEe6biqUQd4N",
  "key4": "4R8D1ez98CryqeHJgqbAqZ9GDKGmUv3Z1oNUYQzY1Q9hXFxJ1cwJynNZktwaZqF95rNntgAeGXrx3G5JvfzDTMjW",
  "key5": "4b2qQ5MZayoFGHyxBa3YnWyxdY73gXTdKYDymL7Z1iw8qa88Lntt8LHoXpXhimiy1ZMyLMSHVuRf8rrGkzGRozLv",
  "key6": "vhaovFMqEunfD7mgLjNJ98hkCiAjj5ecG1G1NVYHipbwdYtfM6sNfmEVTvT1C5Z1Kt5ReEaqGSumhGwLkZoQEfw",
  "key7": "2FSyoxkqn3roACqpk2EXuUts2HrTgLyhJngEvUdJqbxRD7aJWvuvGMCawR8Bqvv1KpAkiVj9nSwhyLVMBTG6RTuU",
  "key8": "3mujp8wu9GDuGJ8LiWeht2pZ1okG8vkuJPQGC4429CfYpKUQiB1qJ898vbhX9rxRbZy4ETYWyUtottpoLtU1J2wC",
  "key9": "2t5J7aG1FNU9YnnJN1pzkvnbYBv4Wp9qqqSnyQnVNfwEVpHKd5CZWAKiREXkWqqgwB9ivWk3X37zexvBbuNcwe39",
  "key10": "45hWKAh2Mj3BasJMkonsmJbWf3axPfom7vXrozRqHsaJ1m6zEuDBQ5duaEYaByqfU2yS22ZZY9y5YidqtfYDuYq8",
  "key11": "oRrvFStMnq2hk6WTvYj8f7Hnw5Et1qvUBxmVUqgiWqsDvXuq1ob6YDSxqKaCYpWE5a63hTvtp6FtyjP5jR1Wm92",
  "key12": "5yof2pg6PxEGuCThbCSGn5HdzhsVWFPfVqKhMAgxkbCqxUm3DjC3HQ2hA5JfywensAs5GoTo5S5wPw9YcjWV97sW",
  "key13": "5ryuo9f7ggpR6pNHFuRzmf3RpjHjAugra2CG9UvghqAMmRSU6wud2h5fss7ch8Vco9HBoUvrWdtaFRvPj8CgD6R5",
  "key14": "rN8qwRMnQXpmeb9bQbpLwhV1trzksuxFsE6xEe98mXAwPSwq2hLcYibXewUvjNbe25ssruJ5dmH19SMTX16QDP4",
  "key15": "aCfKp2PF1Btdyx3uXmpjgrn96ZG4VNBBgG4LH7NKyghgAFLMB56WCr2CEt71VubtNyV9g3PLfHkys1qRDTu23Vo",
  "key16": "2xWfKf62sB3k1XjZtvMjVQebQHKPXFZqza8sUTRcEZAgupHNn6XZKpGvm5SniLH8jwrwsK5X16KLfKJZq6XoP5jn",
  "key17": "3Ktot9sVB93ao7w8m3S8pqvEd18vX18kCPGSamHMj9oSmUaVX6FJ1dG4FzYkrXT3SwCqS8fw824qvzTEhByUiwfc",
  "key18": "3H5veVEtgwkxAS87hZzxtMsfsLBFectJNvFGBRytgDDdszNridT9nB494gRfN6DsnBJME99gwgpDy3N4VCWspsv7",
  "key19": "wQQztfuzh9pFxr66Gn91na2uFbSC8Rtp45S3fCofqyK4tWK17B396fd7nUMuccmP3fVoM2yV4KNtKoynqJFt7BU",
  "key20": "5bRHzuFZE1ZkU1VH4yQ7xdZzdcPV6czWpZGMi3netMKsRU3o8UpFovVGDi6zb6VPDkWw5Zn9kYfswrbPvxFgJbXc",
  "key21": "2N2PFiA8WS2BtVZXzcFiYynCBgYmygJMTYSAe8CupJL8zBzZGJ7LbJBUh35m1WRKeJgScUhkXhW4TH7DySz5WeZ9",
  "key22": "zD3q8qJfkm7ZcURiH7Wyh7fwGupM94wYtKXU7SWxX4CLvN9s5MHMbN1DjJAzcVoQSX1Udj614gcvTJCK6Qgv3do",
  "key23": "5zvfCxE74TKseV5fotrtKu4pkqC2PJQgcBzZ3FvEN3o5hqtVuyxq2YZ26VD8FYesU4WkvNPP1TFxcNWmrB65xrZT",
  "key24": "5vVtCsHXmvvtYtAYKreSiekEwWzwG3DTdZZK1MqvEtZvxutSANigLbBaMnKvB5kEiPeKHoNzk2stM3genD8ooFki",
  "key25": "3nJZ91X1g616Gev82AdXADnHJ7mUdwh3riPx1TzPAUj82u3aTAA8UWnXJXpRxfcovPS3F76Yac81e2NDerHMMFUg",
  "key26": "QSeRsxZCTMWLiJP8oZJFk81TRQ6JqXZ3BQmbXLoyWw22NDMiPsvMDX2onZdfkhfcTHAM3T623QVar8gjKMT13Ud",
  "key27": "5CRyVuncPg5NygFahzvcg15meeMmQtSUwzrixo1xHxgg6928bvGpGBzYfx6MxzzfUQVs6gGTX9HEnaeLLTd5KNV1",
  "key28": "4qPBxTv9LTCTQragch72zrNfyanFpEXPwHYzFk7JTYgSgFDBNyJuVU7s7Ey18uQuXqwnoRcuACgVNcPkrSJNBd2E",
  "key29": "32vUbC89efYmAXAE7APKm7WzYvgkxNYh5Ly9S6U2U4pE5fVfaCte9Wsx3cGNcMtrpeq3Ld7hPTAWxwg9GquJeVbx",
  "key30": "4ux6ARgYDxbBaiM5muhKCEBPUJcXMbYEYxbgQwc3348j332jR9YfBmhozVdcsSaso8fz3fPGoBkc3d7LeydnnwyP",
  "key31": "4W87Pzoz4ujM61hzYgQbiQRbJq992EQsNkGZtKTpJff77N51iJkbQFP47bbTpeEVosC8WmjSr5ZKALMkTsk7PmTn",
  "key32": "h5qsZPNx8qNvqRcy5LNoA6PKqDKRFbKpJ9tBTwqSSvWHskYpxmwDSKMeHEet9PLVTmdCXukCVXJd8C54EZ3HmzX",
  "key33": "23NCsSz4BbLNGDnRJucirnjUJiMCCxH9CHJjZu3yyc3SBz6Zyqk99pqZJLWtZJPH6Pp2YAZtnomvxSfcVw2hHR53",
  "key34": "2YAnJDt5gsHTwzsCRs1Esdfxr2DMoXgvfKQ1kMng5n31LE1NqXzrYZjh2xCybkebws9xG7HAMKAduRYVG92PzvE1",
  "key35": "2y4NQvD6JR9MeYproeftqRPLKyRvkmJoLP7ZCvD4mKUNQNvakuNqt8ZKtrxWUxDKt6symJJtazZnGZafLMUbcdzQ",
  "key36": "3vsiTc78eyHjPvLD5wq6Es7JLsfSvRZY7qqr5qpkAXH8hh4jyxh3jgoMuDnKPG1DgLk5HujYaiBWXmfnGXxYJ7ea",
  "key37": "t7jwUPcAETg1s2rP1VBwHqrezneBhQLhqr7Tw84ZZ1oCNwTiX4SGSnbfMiRbb5zWv4Tyo2DL8VBxKkmV62WF6HW",
  "key38": "4jLH7imqQfvuzam8xBXqsY7pqtstEnPTCa9dgPwERSFBgHQoqh4DnSk4D4t98xik9m2gwvWSmJhWVvnnHRSZT8RY",
  "key39": "5tUZ8Xdbzr3Hx7oyB6jsCDMSaUD5ChUsRNUYBsqWkEJ1cJb2sXbZhpm8C6oLmkT6WwFvCPeivNp4NuV5rKDWeSGa",
  "key40": "5RWaU79AjbvCdmJovpZwQYMmJoYNZ7i6LqURR8sAbBj1K8cvP1oppVjabKZV5TmTdTam3g7ngRsL6HMf2cwPb17N",
  "key41": "sQxJbQUaiifKq3T7ka6LLsg6z2vHEvYTcUycCRFrk3kLAJYUurbZbFyp8bn9upmSDJSChk9Wx6KMxJCNuMcmQMw",
  "key42": "3fVogiPqQkr13KMyguvN17QYeFRYEdLdhz8gZMZ72R9WeNReqoisDkE3dqpiWRYytbjrs57PmZiX2dpDUihNiPwq",
  "key43": "45ybE6r43rf6L9F92VvhP9jkEFEZDxjYtSQL5REPNdeYQhwVrm72FVoNkMtVWyFWWxuPMsdSiBy1FjvJ3ksVy4SE",
  "key44": "55W8DqWRUnzyMrMfrGLzZckNHFjYdNz4gp2Tkf4ZboZdxo8eMtSMTyLPfsB5GUoBjzyPDAKp1aNR9uYJnJdaPfPy",
  "key45": "3j6eCwJst7kNda6peX5GhQwPwdhH4YfMPuDSEeW2ccyTJUEnAUkoFUNL2YCoYRKgUTFPqPvZCpL6TttZcV6MkQvg",
  "key46": "57A52zUS5VWsB9jBJ9CLcAKntr81KXQ28SX65K8K3MYnc6rTigqjEcoE8SZboEL6JLm9kbjXSxUZr8gxfgy4LfCA",
  "key47": "4M1HjWj7JKSS8b4J8rQGJWMToiYNr8V8zKBj6MtY6RRSfWe26cFu1cQLWKgtQsVPyT4wwGC8ZgvKD46TpfmtzbWe",
  "key48": "59Sh1bYPkGUzsQ1XwkLWbnQq7kGDdwyyvyxbTPrR5pJTZ9T5qe9VLH19fYh3XVTx2EbSzeaehV8Ghp9bJ9zoTjnT"
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
