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
    "4L9rUZ472vvQHG7g9GadH5S9BiZ3eaWRGpFac6EVXrw6YadZUcZNydAvUKNGsj4vn3Koeo74mfgJFdTkfDNmzT4n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wMN1D7KM1BZZk1vR5adktZqidj2cXsMjQHLB8ZRYCCpDW5yNNpYwqtDwrwLVbaBgQfmHDoMgMP4XSiQygdS2zdm",
  "key1": "2RdcJ1HMNSm6TepkxwgVLNAUVNFPCWMxfYPy166atz1WER1iB2TtDKnMCQxpufe4jyqk9UdWJMdxykL1ySZj8KHP",
  "key2": "4MCeYAKQwSuytBLjm4BCyREoABJC1tGQAMyExiFLhFrhq91QKZii1uwBRJtsyHq4qVxQ6wA8T28jaK2kN5cMmvZi",
  "key3": "2pNfk2XLyztXxevXA5D9B71vvTvf5pS7KEHgKYkh2PToAQ922VHuubjK5pKN7TXabjmk5VhMQggD2Vao5HW2Jn6N",
  "key4": "676cm17c8jzqY5cBBoJQhuKKuSLWURoEHZzLQUuqbApmdkWvFLH2x84CL8h9McE2nhfdCcAsosJCnvzcatPvuhcy",
  "key5": "28SExrpTMfjRUrgkoe36SzhfTkJqAu5SxeK6kTbiTncjupMPHiz8fxTkpJi8bFLov1Yo7LWnxZvB4dtmPJgDdANo",
  "key6": "5uaadR2DbJh1tVgXUjnSXrHzVoQ2ThsJyQnkppwLAmisSmzrVQAyTaJ5ky1BKDgCXQVWZKi7DgkAUvmJ3FSgoSK3",
  "key7": "3YhvspBj1KRqcbcUrMQ6RbWynNhkwuegwoNM8euJBML91DfMJ74iMAvqgmXG16TMXmf2T8efwf1xB2TgpguUHGJc",
  "key8": "5esYW9MF7YERMTUaJ5vH1Tnxb9vjjsu57AT79zJe26DNikTE3qk36NWG3GVpE6eHu4CFcCaHW1nLarkFwaYLarhc",
  "key9": "2WZC9FfbNYgY6MQSszj1GGYa5yWKp9qxqq775TbiPr1tqRzbNAxFXxjKwmpwkPrfoNPTtkhneQxtMmZuPeEqXFpn",
  "key10": "4bj98qPphHe5U5w6euuTBM6QUuofVLYZ6wxiKJ7UiCK3VnYUbwMdVx7oZTNi3u3NBJvnatBmifg7ZfNawPe2iXyg",
  "key11": "38p2gBKC9aNyVi6zB4VJn7ibwzQU9ogKLVba6SGAfNNomtMNewwp7WcmfmHzy8hBPCmvKsVxEtDYeW2QiozFdQm",
  "key12": "53RjEvUBNi1DdofCL5C3iPX7QH7F5cXSS7jAotagVFHzejofz7JSAzoGNYUb4JKKy5afew9Hy9iTAQamypzJwU5y",
  "key13": "L4Np4QdQVruTBnWUYsSH4ZsaXtUtUGE1ovpFbWueqsGCEFRbNYAtp4JgtmH6D6ZR1rAi8KBLNF1bZjHnwU9XUt2",
  "key14": "oGx3cTdnjpFHDUMA39ywkVR16ubJD3j7rXPLddMymJsLuMiXf4H8mZUu3taiWBkvm3ypmZPonNa241EHX2eY1u4",
  "key15": "v88s8XQQqAoTbVUVPr1UAyn5XPHJaG5u6YkHZv7vYbH68TJTA8mDotx8Evd2pkuo3FkuHd9UnEBvVd1Y16eB933",
  "key16": "5ByuDcNnvzoKevr7sN4sCgUNoWa7yENCsWxrXSVZ8ZMK9Q8juEvwR2eWDeyGyfNtFJUACZCGxoP3b7EpUz3Rsk8C",
  "key17": "5ntW3Hr56ws84rpkVhMpUV5jY6e2aMd1AJqSrnDncseFjYJb4HfZknXGg97ZiPDGAKrzuU3z1LcFBSfXi84PZV6t",
  "key18": "5oRxr549CocJXU7qo5DqpuwY4YDeuZkTEPiZePsieXaJSiQBpCALMUoPh673nJtBrV7wsNn2xWTedcL98DW7XhUt",
  "key19": "cfgRiK1atrhXmZzNR7vuNqDxRWGkie7DwSJMRKTiC8W2v3fyYkCYGKu5GAGfjjeqjG6ZCGDSkCkgps3FGF73LPs",
  "key20": "7pBEB6rMEF8QDQJvEbYnjnu5DuMeRfXVahMGR78U7PawFRxadvYBiPKhiai79kW5xBWLbHaXPa4YVMi5YzWtqxr",
  "key21": "4WJqDxYGjyDjbXk3CQHMXTkEqTFNS94DUTRu71hneDhi3UAPHDE4tgdm3q28uJzKiaXQuYJgB86m52SMixbYyJMY",
  "key22": "2uQ4oDJ1E7n3s6Hv5f9Jy2fQBYD2uHDiuwjqzTddBbHRArkNaaw3JZgZtBSZJAjPcBkoebt42R2tLD6fkJWSkzh3",
  "key23": "4QtYXGhms4fFKy2MU2E5iPN5bLoxyPdwfPPtnEAFhvLKSvqx8jonA1qx8s1DEq1CV9DPXPTDZzttewrJXqYL7nEn",
  "key24": "4oVWXgHj9VhGjDbsEmhiVoTGubPxsXS7UfrSVB9E1J4dNJKwj6yEScjqmdW4Px483WgCBLVa2ATHfRC1Vh1fo9ng",
  "key25": "uTh5QtioFPr3wMPyHkX8ins872YK6847WwBZTkNzzWo6U1cCLhPij3i1iDquWDvFaUdYtK8ZhD3SgQn6Fpprswz",
  "key26": "4wsiNCDt86EoNx1tjQvG2KGLNp4pebJsejWxCa545c1ro9AaynndxBCMps2ekZP2gzh5XYLakVToFRdzJdzTjRbV",
  "key27": "nNvbVHLpnm14NGzL7m2FTXbPD2naK84LcQAENz3Z6sqH47SZeVvyZemQ1oEFeEG76inveBa8YGHr8ta5kvdT2or",
  "key28": "3tLYYbnT1QA3mMx8pHVqf8EJKt23gMC3i38j4sMHcKiHM4x2pwAi3kfY8RpqmUoVt8NWzr8V2EHntPmuoZ8fjzYQ",
  "key29": "3ENLxzdierbhrW5oFxujJ6KoFp4cmvo9wgKE5oxWFjbVXqMDzhntj75LC3hWAn8AUhywqGWfXVrH2z4MKcN5wuSf",
  "key30": "5PTbneGLwnrEjFCwgFkcqKeRUmcv6G75LCoE9eiKsdTn3ovAtFBJqQ9JmLLMVQJbaUnBRR9v4MbMjNYEbiaB9qdk",
  "key31": "3QSbCLVaEPiegCZyKpepQLsK5aiZPJYKB2fQnbBtfVz2BiGPrAXGdyxxxtwS8hHSEju6nfgrB4P9oSvTpCFCivRB",
  "key32": "4meBaQjZ83mTdi1areN1Rw8A1V4uNHixXi3PB51WHHYJWwCZdE4zCNTjpyofyxGwAiSCy3XbzrotkmDuPGovmPVT",
  "key33": "4Q6v6SddUe9Maa79jBdstWF3cqSmv4gbxUxH7fJcN4sMpgwsPx5jXkqr2SyWJSwWQY7tHRdrCHeBLKpvPsmBkWQh",
  "key34": "4jzrtLowmpk3pLwUPKwdwdgs588mNFUpP6FQC1PfZ1RqwMxh76aB3xuTzHB1hj92qAVAVRDg9UdcrBibuD5Ytozh",
  "key35": "3kKLiLhes35iPMxac6BDk7D9LN8ndm9hqhMxeVUk7Dw2VbLpNEFUUxGnmuhfbD1uK1ho1Ft1qnc2atXPNFXgzQak",
  "key36": "3GT2oyRzLiYfX33jseJBVV9agvKi7ednExdyAPVBezNa8D7ge9c44qmpj81dLdGc5pA1QjUabS7LcgtXCQQoBmax",
  "key37": "5K3StWVuFGCv5CKsXJj3zik3MucXfTyq9or6yXsVecXYix9EA3LBzhEea42x2miTLyDkDNEV4oNHGmZz4ZQvfUNH",
  "key38": "5U9RPZQxraC58TSTXzQzJmrbUPTXXHoBxARyncuWe1vVSvEGLGFpwz17hxYLAau2yQQcxD1oGbUu9WCwjzjNu8hE",
  "key39": "5eXo32Qv4odvdKDRKuWHUAr53zsti7PoRQRhcGEduiBHEJWjZvqjcZgDdUjsRSinKVEKAvaSLtrNz4WQrpexfhqo"
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
