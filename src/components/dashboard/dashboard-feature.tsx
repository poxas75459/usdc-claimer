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
    "3EqRqYoNwKP3HL4i6cE7dfaV5zxNEv6uFqdn8eArKR9uZSMb7sM99uFL5Quj6Het1QYkBUZ4ncfbiS36KhBgfHag"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EZaAQ4LxTKR97Cq4mVmC4Wv6L7jzw6vT9fPbJ7zi6Mug2wQU3eYYwHYdhT9sXyxHyr6RirBCHMPNw6By9WF2aWu",
  "key1": "4PBeT3rdBb61kyYQusA7BWHP2MPzJuv2iA2vXLhFTSqNc2iBGfuK4KSzhL233aBC5jLB3d9bBj6ECmc9Q8KjEGTm",
  "key2": "2Jz6yVmv8toWyt9TFyUSxs5wRxh4EyXWKLKrxjRYbZpqM2EevHbFJ4Uv8kMBE63k1YAAbesTtiuiSjJJ2dq399BP",
  "key3": "AwTorXmXkruukGwkVgh2NbcofRudqGo74z8TWfPwKjtCudMVUx1y8iaqKwFLVoQ6kQCauBtUY3wZ9cnGUWjzk9c",
  "key4": "1nQnH6MGDjtMqb36GrqQZYpe9KnR9jronFxAvDug3s3utKkahmvCbj733MTUXyCs6Eryq24VSDwbk4dVr5xNfVd",
  "key5": "38apzhwPvENM7cjKcke6Dy8UXEo8x4SQEDbRFCqXVB8F7pm3pTo5oonvTNNHXf8CnQQDZ221gHPQwziEtc7TzmQT",
  "key6": "4pSuzw4faGHLka2icQB2618qV5PvKtBQMcFFxEfN21tCzBSajhEa5oUm5d7pkgDTGYJRwPBVntbH4C3hRujyuyVj",
  "key7": "2iCUqXPWKZZ3HDVefNftnKmgGNSaDotscsCWo41fWMboU2bx18Cv69cFjM1zaCJtXFm14QfvZd1hcwmHgLLipLMc",
  "key8": "3fBg4e1HzDmh5L5AA21qUY5Sha1xyK4Kq4vC3XkpFcuaws8RZJcYus6fJXGje7rekq7AqvHgF3kZDBWmKevkcqWj",
  "key9": "3ekZpc61KQWu4vu2UuLw1JyUyceVNa6ehZNYdC9Kmwq8ACd6wh8WFQ71ikg2eX1bcD7ppmUwrCJEmRdSjL2KtrpN",
  "key10": "3kaPwD7N4Whcv6MjspEUDyHkeLNU7ua2PeGYuSHLPZuFrRAHwaPk2SRofwLuUahtDDYhoK5PWSMs5J5FWSoQ3pL3",
  "key11": "5UvEmryK9VMJWUpJepxAiSe8wH3GFeaERQe1haV9cJfj6WXm6JSipVAtxqSvWDkAb4vwPFkHavsH3znyNdZfzoNj",
  "key12": "279gu162E94rLV3H1znKjadKkt1AgPPc7vUKCnpoRoZFaWiHqab4WqeHHd66sEWrna5LzfZP8Mp1SZtXvCYz7uPZ",
  "key13": "39E5dGsTgx1bn1Lo1WxHvdLpUiZMqAj14ZxERGhQtmWRbi6VbssFG83uG9d3pBVrkK8p1z2infV1SRBoWFQrFP1F",
  "key14": "36yxPmHW1eBRJRepXQv3zamQi1hoe8RDbRSjXvMcJhsDbjvSxdNwcig2MX2YVKGZBT9sc7eLmc5z5seXEi3z1b9h",
  "key15": "8MQyk3fuiCyc4hAfWDhgNVAeodPAjstkM1kz1cNZrW8ad17ZWkWWKkeYXbz8ZqztU5GwBWHnKe7Ji1EA3kWnA7W",
  "key16": "4N75fuHenSgFgf6GKNDcB9Yr5gQ59UDhrHLztqbUTAdQF8eppFrdKcVZQiGywo6Xpv9Y1444aRVWtfByFUYXrM8y",
  "key17": "NnDX1duUdAT41Y2VwjqUNobCgW6L6HGyGmwjYMeVNcB8tWvjFjTBTJnsbvaCiuR5bAxWTBm2PvUqvUw4wmnQHb5",
  "key18": "4tzoW59azBf7ZfaDwn1QzeH4HnnKCPeYk5Hz4ERaaY3gcQ2cocNTkYsFxcS9Na8nJbSWwqcEByM1ohSFXKUumSRU",
  "key19": "5a6v21AvBm5s9bg6Nyioy1vjB6Y3QWFfs4TaX3s4nHBLnVg6DUV5o2uYWeeM94Xm7AoEM58CDvwzV9GWuPFuHrZL",
  "key20": "4MtVEvbtfUVukeapQ49w1LE2DiScpS7MMfnhjgZr6fZWKR9fCBH6uovmytPZ89KCFVELBwWQP4Nhyhik8JA2cjKa",
  "key21": "3Psvh6B6wmujdBbZUYokXphufUGZvRqAwDWTcg496h7pms5bLKgm9PCsNvEFvMKF9Utp8TbVt3JsgQhuvyTUWb3R",
  "key22": "9YEiVpPqVKkdgMD7B4bx9nfvw96izochgtut1dWfiMuQvNbvfwHMtzL8JJCJZe5LTuVSjvzyQctFAHc57iRLgzr",
  "key23": "32G6fNsJHumLUBszSdbxZTweWjfWTM6apvptitA89EmmTBEbfnDkvBGP2SNPwdCFRYCsGcXRhbum41xcknL8MEii",
  "key24": "5rto4hGoyPdcmn5argJVVXxeZ1cZDLPwVXs6cYTL2H3uGWGxJDr1PvzKWGvEU1trUCn3w46tSr6VhFTvTrc8u5hv",
  "key25": "cA4hEH4DA7rVVv3F85eqZYY54AYBM14xNymR1Q9nzBM7YbhwXcbZzqcJU3b2esmJc9g9cSRnp75WHcgDWsMiAo1",
  "key26": "66svStJVALN2QAHnVWuvgbttV2AnuXAdAt1panonFbPnz8sw1dCA87RpQyKjiXho2J4QkDbXQBQ3W7o8sgFKzatM",
  "key27": "5PEaq1ofmMVyN535vgjvnDvzDVHoYao5Hk8q3KVdGEu8Z3KuJtPoP8UHSNPs9h1WwYoNk6ZoE7LwJ2htthfrex9n",
  "key28": "5sEBjTgKg63rzUn81VREdcp8hXyRBKjHhCNY3j5nWqdzYZwDQtpBGVNYx49zM64SALRr3c4bysCV2K4fbMSTuz6c",
  "key29": "4cjGDeSrDYo8X6oqHvq7Xw7qnS1JzhbmFHSsYG9Rt1Vbf9818bknJ8WT7HG72KDhLf8z6S5Kr4G2ax1YrAzrp7VC",
  "key30": "SXij823umr1ynfDVeNiUxoX5De1VCLHYrvmysmeg6VKACjE5kjSQU4EML5Vr3qoiVH9TGk4RZBfTykTWqQAQ3uC",
  "key31": "3hz9EdbjBThC4mmgjSpQYbTS472cHbnx76Ep9NczVW9Li7CitK8W6k6nY7ZjcT2LVaYFo4WU7fiL1tusFbV2hsPC",
  "key32": "29Q3WccFremFwwsSNpCLQkEfkuGuszygTdsy6jmVUYXeRwmE8j1qLSRQJ1ngVRbx8knTGL2mApzH6PkLWjurqoJr",
  "key33": "3KUk89QPdY7ZgHxzC5jgQk44PRPEamKDmXup2XDnqu2JbLpCaGSovceZXcyy63j2SHEsgUPK8LZBWu7gNX4WNyZy",
  "key34": "2m8V1WwwkzekrbMA8Aj5y2uPQbwsWwLGmsNdoH6DpqhzThrMiaxW9pKZ8eSAauHDBUDTPfD2cbKTUmWsXHxrCseh",
  "key35": "r8HqXsmZJt1B8LCRvuPg6MczwD62jCEBvn5K6xHWfsRGtaTfGGWK4AzqWGrTbeKCLfviX8LGBTagk3daMfsRjAh",
  "key36": "5Uz4YiuDCpxTg1AY4LcyNM9HQz8csebx9P9efThgbNwLhV413BSpiWE2AxSLYL4Mw1EGgUEKXk8wCFwSZMUqbVsR",
  "key37": "2auSxGFh9bA9Bh7iGRePiZMx8Dsh7j9JSU4Hb1EhD8mM3T1BAHmXm1tBWrGqFssADXksZAm33na1xGP2T5MXMMi9",
  "key38": "5BEF6m46Qedn6TJ7Dpr62tDbn6RDKX4nXXzjqbpqn73or6wYHoetjpDpqXCYefZ3q5wLWdKTyZubcXsWx7HuRRcT",
  "key39": "5YRjALFyUiBSv6Py5SoUzn6gefe9FThAD2qf3X9yQPherEVBDc7TMupNNtu3YGTdx7FMySg9uzUU2mhJTPxyR35G",
  "key40": "4zbU4NDbBzSVgfwPjSodpwQh15ipqakYTnR894x8hxXbDeAmofhaYW6BMWVrkUzg4W3rTX5RzLgNAFxccLbV9wdD",
  "key41": "Y8kaEmwbTvDwdGjyBCctbhtPZYRfFYNsMShX29kM7NM1zPCLz59s5KcHdgdHHUd24eU4n52QEP2GZx7YpvkJ1e3"
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
