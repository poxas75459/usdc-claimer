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
    "29Bw1bpXqU9JVqVcjYkFojmbMjwkVBaADWymzdNLhXA2csPnBMA4UBnRQe2dVB7rpfMPwbDjxnK9YJdJUCJjCV3y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pPWkHFndUUYZW5pydYmbh7jnCZeMKW2r6wc57D6X6BdpU8APeonTrrmLSJQGUroZgbiGJ82UWFKVCJ9KP7DQ8cq",
  "key1": "3mrQjSL8nxFBhUvdMBXGxbm68rftNTHdkLVWvkuGEF4EwfdaQG1LDTvBWqBFXXVCx1fhbch6pxmoyt7BKzKfuagL",
  "key2": "5harGF6XwAPSQTSittAqFJ48Avq7QC53xH9YaGSqLisx4yYib2pbB3btdgQ6Q4Jg1fhYRPfCL7CH7QK8G6YG6crV",
  "key3": "4kPPgFLX4EqSLpVMEoGDJNkKD643cmRuztuJzseiTmxf4EXmD23teBWCZThHNjLhzFK5YTTEz65tmo5VVpi6obJS",
  "key4": "5WZ93oM5dVaAxSbvDaJVdYsKEuyfAcmeugkkoc5JkfZdNhsj7gSCJSvrgvtzT1Pb637jAEW3hH2v1jFvgd795EEF",
  "key5": "4kFWFr45vtEsFPuge6m1nyG4ZnA6a1gpASUTNA6mehrrDSzjkAoEoHTncbmsU11FR9Ka1wVshjfcHJHQyrXbWa8r",
  "key6": "2phSPbiPkJNqYHBvPS5KvFZven6HoB1PuSQcgWdC22HRsYTMUsDd8Nvn61H64AX6wiTvrA3AkXFkKPhpXgWmtF57",
  "key7": "2Htm831w8oeBDVZCrpz8HXskhJJYXYUUHEenaAkec7HqkmQF581PSybLyKyJS2t4N6mv6RhDFPQSxUW8WVqAtiQ4",
  "key8": "5g1TjiiLMSjoihy8JDVvci4MKH2wybRLiYuNrWLKNWh3zTF7bCSBWLxWfpax5F8Q2Jqni4ZiXf5onwkjJhscrj8P",
  "key9": "eJVVLuR6B9YqsvQ3G4XopCJFzRkgYyuNMbAWfggCT95q9sbhRnwDxRamc5cVjnZKW2up29E3UFZmuJEtgAX2h5B",
  "key10": "yxY3JwTW9nehqMCoJcFhR96D9hF32UeJkofWT4HZf6ezBXVVLFzqEfAXeSS2SocxkqsGTkpYXnV31rmuDiPSMak",
  "key11": "RQKskbM79EQE4K1LxkkNSjdhrnnMAw7T2m16NHubtF38MWbS5LddJNSDH5gZHPFCLQecuHaz389izxhQSmezt8i",
  "key12": "5kzUaAru7Xw9DaCPqDJigbGEZRMhjjKvt27fMScBMX2TPQLaBERGmG7pGsggWLGk78EWdUsKe7XVmb1YitzokKfy",
  "key13": "2CWpTnopAGEJam5Egfr34EwKrBdDQCzvTiPy9ZJk15WTq9wdbPc2fZURRJDzz7YdMec3xoBg2oGDJbovLk5afi4c",
  "key14": "3UoEajwBYaBrc2jtnxQbCzqyQMhek4EkpnW83aY4E9C1m1bfoyARpq8Dg976Z11Zx8Xbb87suFqpqtsd1GDDEFxB",
  "key15": "5AcjzZ6RbJxv6SjmARGuCjGFvAe56A97NshBWShM7in5dcvxcTU6dUP5ypqDneEKoNtvQvM8xnAE3qyugbfJV4Bs",
  "key16": "4JCMbviGfeVzH6t24VGVv6TG8h3vUwSRvZnz9dFCaNdoTZnLG2PpzcPyPQuyCviiWM6FLNbYvf3pmcRLuU2WUwFb",
  "key17": "4grSxARCpmZ2mNmGJP1WFmGb4bK75opB7EvsiNqSKNNdo1n8vNsAQr61mUfCHZc8eLF9RW3UDgbYr3G88gcNUN9o",
  "key18": "3QX156nfyiMip7pz32YVMT1ug9JiF8wnpLh95J925rnw9JT1ggmteZpb3xMDQkE9SKjhXjgX3SciR7EEnh5EgQjk",
  "key19": "RxEHN6KSMLVBof943Nv6drbKJqLXeJx2dR1kHLZnniQu4uFfz1ANdGg3eNcvfCJi6rQXos8XyBVUam5HFir8Ro5",
  "key20": "2mWMiJrsj76a25aJyiDXbo9uh8Ht5WdBJrJDb8VHniqjkVBzSjzd5iVrtLBCwThwstVGh3J72ikmZqEapGLRJdfU",
  "key21": "R74gErUyqtZguyCuE5FbALm4WpCNZD5DhrNEKpS3tzpXK7pLKbK323RZwWy6V3xUb9abvCcfM8EbmQUMpKRHCvT",
  "key22": "4MXJxp4qmS1YX9E7DyGtaoiwKXNRtEGH4pZ7cY7v6wrU8Vaqh2cxyPhGGcmKadvYwF1epNH3p5DnJTo2BHGb2aP9",
  "key23": "4wfXvqg4MMA27hvZ3kzScY4p6wRQmhZFdVUPZB3snQy3psTsA1ErkGCHgSmaqqJR1SKeckeAs3wCU5usx2ZEZ2SQ",
  "key24": "3kSk9eK4MjHneWm1twghnUb8tYRFMxV4uaFcnsaP2Ujjcb3dSrmdSJyHAu8NmJ3DTgujJXuqzKjRKB9pGVxBgA3m",
  "key25": "2ou2qcKDrdv3ByRKqGE74LQwTQSgfVcphhzRMfG6RGU2jzbU6UteT2AcdD67SStqGX91x4WPD9UouaUnnoXL5BWz",
  "key26": "3ScncuNEhycRG7x2Zd1agDfhJFuvWuPMmJR7EE13N3gqpDUuWmgoEZjtH2k1MWeAVcjJfy5MjTaTuKQWj54wZ1YR",
  "key27": "64oUTV8sey8oKQRdY1rSSZb7HUS7PUaW7bPY9fRzpwjazC7GFQRMjkrZRPPKpQWnt84JjvgNnFrk2B1L7uMA44WT",
  "key28": "2msdnR9aPbKCu1pod3xAqNFkFweR1kLqRwH6nFiEQh5Br5r1fEwyYMcMHVVPQ7ke6tnbxdfyyiw3npZDkZABmpj2",
  "key29": "d2dgQU4wcgAXjq5tAb8CTEWdtSMy65a9rQBP4seXr7g8PH5XhBC9SeZHVoSnojWKzmAQGmoP5ZFDcJVoeoebYJa",
  "key30": "49roHdHVwyByEdeJcDs2KPsqwUkuVfyEfk3RpLdGerqb79YbwmcvQGQ1DukK4Xwsakux3uahCJe3qdyKECEYVZC4",
  "key31": "5AqqPFbBWVBidmbKUA1QbEoxR5WM8BPdPuCj5uS63xnxTxLQD75Vt59jykKE8R1fqA7YJQMp9XGk1CuqctGMc24N",
  "key32": "27wMmQTpjSRuJJgJrfce1Q79vwHmMztGiczA3pPhM8nHP2f9H8SjxpFxg8qrSegsiWZUfZwtx14zMot1p8zncthJ",
  "key33": "5TxjhhZqNebq2TJFA4mBuGuS4djdmApYayirzBDdKxfypjKs5Jfep4MefA4Mu7sSmEobKKYy1y77UirQvzNshVEh",
  "key34": "4hmXJv8Hs92t44v31NLSCiPQGRgWZ2tQ5sMARf3cNA5nV6CfMabiAPNbDs3BaYHhJLndvDkpP8NuhR4RutMszfMY"
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
