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
    "3YVLCicXZpsykbGJaRjDZhrERE7i25VU8gbNZibunKpKr31frRAEyAYtphT32B5md4PZsdy6tnTx25j9YzrFkY59"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "r7NQrAJwXTkh6NVEAu5QQ9Fy794zHiFae6cK37ncWwXZ6M6pXPYGTiRf7etfmLoM3yuVcNuN1V42scz5jQhBr49",
  "key1": "26KEqtPYJLyUdrStnr7b7Cv2XMXwGUCS5UsVbtTSjCQPdJS6B6AbjnjJ5tW64ghFzeEsacqHXZjT63dB96nZS3bT",
  "key2": "25n4Q2TXjWEVCWQF4xBKDZBRUXBo3uuRGFHxguWQUGaRTHfyZjzy3ELHTomHuRT8Whx9awoEKeasGBb7gZ3zAFCu",
  "key3": "3CwUMdcm2PAKtW4xczfWo9hfpfftY56TbsS1hWZT8hPR3zUe3TvbJRPBaPqAcCR8RPfPZiKLXfEq7Dxz1C3izmG3",
  "key4": "22LbcNg77dGejWhwB8kikRCo6WVwzWMpEnV6zpXuZxF3gnd1tY2Dqmt32B8RMVSxRDvak6pw5rbEZqg8gGndC6rq",
  "key5": "5HUTZ2TNJ2b91Fkfr5W9gWJXwrikw14U9mYSb25y1BFeyDPWfiRxfEEU9wPRCTBPKZqUXNnXAKCGk6nAdiAWoU9x",
  "key6": "JkMCNCpS7cu3eesr5icCiWeyfSCTEU68wP9TLXq8FN4WPFA678MYQfKVziEP7JxXnTEw9TskgvttW1CiPYwUxof",
  "key7": "3CRxZ2DfRYVi8k4LL3fdPeuocREPHaXDDipzGSAJtT8xTmvBrsRsG6jnYe6bd7KRGcYiappugRJwsuxUNJ1E6Fuz",
  "key8": "4ooHVvsTjSQixNNfbcAMAEUY4hrs9FrD1FyGaQoraKJApGwv4ASYupCdEqp3LhrmiC2bSSBcdH9LwrB1VTb22Yrz",
  "key9": "3jjZRg1mQoAisGea87rE3KvnDFBHNBZJJJH771aveDF1DdNrp7ipCfNntm8n9fXmWVUWzENjMomLNAsVVgRMXhzR",
  "key10": "5DejBdFiUyko23A3rPtBCjR3HrDPHX3h6Fu3nDNikUU8gf1mUatF3hicBHctitjEqTVQEnWvspiQdYRxAYsPvUto",
  "key11": "2AasPohUEKmXHerEDo4YdjyM6fYMV45qBs5mFs57L6d8YCbFw2oVEEx6pDiyWTYrx7NVoqyjf3MRC77beYmFsKGj",
  "key12": "2Mc6XaUw8auSMfPQ6udEzkNnBQC1CsjTtSs16SqzDBujLMfUCoCuNuP9YrtBoFnGCE1xMbwHp8CsqiU8BAYxXqat",
  "key13": "2SitM8J5ksmAmV3LQcwUoafb5WBTdxucnhGiNCAgjxAjzdRJ5yt24QXputNYLKnh2ScyFFbht55EVJAvsSWzR3pP",
  "key14": "2BzprcoEYuo15kbL4SmtJC2Dof5bpXwqxh8MDTz55xVGQ1cF8kFUx63EHnktTLiBvETqdjHsJpGPALf3bCtXRYzx",
  "key15": "2ML5K45RZzWdigh5hWMgFhcdrbycfSTyGvqKVdwUTFuNCD4MywxbonsMLE3yz2heV3FDUhfSTSjinphsULmxppzg",
  "key16": "4GRvxiEWwhoHh2J7qU3NYQxFk9rwWJaH357dq6RQX6e6GMgJMd8DLWA9KqLv4725ntmVKTboEHXGy9xmhFkL6Rr6",
  "key17": "5omS9DQ1vs3tXAWtUUqPVHXYD8e3UmGjfYuuX9V3Y72VpaaJo3QxsbasahEwTS8o15YFApeseajxn9mw2L1uhbo8",
  "key18": "4tGomC43QTFJmG7P2bqmetp49uxZTEv16TEjr2y3Lb1SMViv9C6UzSdyL5NuqoZCEdWJpnhyE918apm53SJrYbfo",
  "key19": "299gtckKhuvNfxRB6GPkaG2w2Ap5PuAwVHJWqwbhmJHgBKyYgnpyeDbxGq1C7UTVdP9yZ3vxBbnnC3JMZEqudhFb",
  "key20": "3NEm4WsAY9g4FxWbaZTugS7LDMx2SSXVji1L47sfHmvDKBvrXBpM2fT6snNtUa7QRPkKTptTW8HdFcQE3motv5cQ",
  "key21": "4z1krWwVSxGXEJKe6gg8unbPba4uZZoNfxS3rMseAjMDZivuqvRq4ysrwq54cC3tbg1cKnQqtUP3E4xb18UQdLNu",
  "key22": "RhPR2VLKEWQznwMchAMP31xAmyP7TVSnYphVmXCKt3UAR44cJSuAvKySJmyuECgDVofssDWepudeqTMpT1CjShQ",
  "key23": "3KLpjiJD5nmU8SxfpfXMuNPDUKBvxu1vEjfJFm4VhrYSkRhKA9YLvgY3AnZTYEJ1W7Hxdm4mYWtUvsGah559qziC",
  "key24": "4u6gq91XhbjypkY1ZpJAQ3n5kTBg88k8b3YcvbWhTLRbPyFDANWxSHpkvocEABapJEJ5buHaArBcEjfKAuDTEvyv",
  "key25": "nnbcvtcgDoRXYtfU8B2zxpVJmBdukBKgn85KxJMxzpVRbMFq5Vi1z6hGcEvCZpuRv4Y1zMhrzwq1q3tvLmXHUEQ",
  "key26": "2uqSrLXu4LUnJRBZdx6Rkm2gtC5ZUQ9VtD9BT7F7wSJngpWcKabMWattdW5T52pSMKGCLQ2P2eWdPigCLfkkjqkT",
  "key27": "4znTPkKTXX9ZXHZBtVeQs68wHaoHVkDUR6FMxdXVU3SiK2oSN4rcoUbpiCPfnDymgpj32Gy5r5G9VgExnn6LjPgp"
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
