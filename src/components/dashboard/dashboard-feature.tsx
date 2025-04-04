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
    "2X8htkEsoWqJVcXW2RFtkC7FMdPZz7bDZW8kPr2UW2YAWkgjit9QCmBXk7Thcy9sbrHNdh5R19U7CRoa5bM7NitY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43xAF949dLGDVDNbnxRBWYGZvJ8JE6qnkywrW7J7Yz2e3Xxo3M217RfUaom3AU94n1sn5uGNYgEPzaYfyaUMsPYE",
  "key1": "4oiu9VBifGWsMCAWFnJtcsuMMi6BEVXgX359uxf7BQghpSNMPcEJKfXdYmXFReDAme4Rq5m4SCnbHhm948D6Vgzf",
  "key2": "EeYsLhtM6LcdTWEFRrWgLEfYgyXSnD3gL4R3hNuecnsGU1Xu44ySzucKzSYtvYZGzPERBiJ1nX3Gq54AXhbvBhL",
  "key3": "4NJsHPqQZSVjtjv8La2GCpFM5biJjYNAngaEe6nzr6wM16PUzkXQzuFoxbtpx7qJxSCfKQwSq7iBVYekNkGN7c36",
  "key4": "91gfSmiyFrTNejF177Rcn2iT8vSy2j24DqTaqgNwXWwM5NLqgFGv1udjnuFFXBNYGn44FbMKRR5GBLh8YYnMnmN",
  "key5": "EJsrqJ3y7wqQYRg4FgYURy7tW9dq8wqYMpmb9jpg2cP4RZ3ZNEeHdAHFA8VhyS8JJd8D6zwEQ21XE6DZq1db8KZ",
  "key6": "AHTcJuzAC538nay9TXgEXY7w5mQTmobFAQJRUHcvkQd7RDVfc5NsRQbKucRADiKAF2xQK1M51DA2MyK8SqXWzrf",
  "key7": "2wkRJNc37wayqgjyW7ThQgyKwfQwWqskjnBRcdkgdcgQRhCtWrR8FdJSNLgSR3PywBcYM6JCoZfjXRg5YWNqHJ62",
  "key8": "5dN2N8hLLcw4xfc6jrPLv7vLrpGYCXN7m7ErA2wsfUTCvsznEfFF4Av9xrxv8h5dJvrV7Kp9mZjMzaU6eQz2ir8H",
  "key9": "4gzUEFfkQB6Am3upESvYkeGGcGDo7PLDquYMQSEJojLrhfqDdY6XLfE9URAnb3rwvbVfjsbRezcLyNRK6VDiKTAP",
  "key10": "y292xy8VNcXsurC8ysSNK9pSmx99i5zvp1VLWLEZckFdmZXXSQivXJvTCF9W12dXJSNmrJTRq3UZTD8QBDy5pn7",
  "key11": "3xWqxa9esdndUVLyyvHDioYsh664CVnRwS7HCQrDMv3PfLr1jfGJpN59Y7q85bjVSmV857CS3jkeWGc385pUK79M",
  "key12": "uysXZnDw8GomtTxELuEj7fM4mjMsHmh7PzBBGpkGuhozEbjWVSJgowSfimoao6QqeNKep14fVGfGkJBCQmxcKpo",
  "key13": "4WFBCkgpcYvhu13YCZ7FFq4kPArRsp5gFed1gyLG2tYverX1jMhxDqXTJAo2jXtnMGfW2AkwnU7ziS4haK4U9ZzP",
  "key14": "un6oZfqPdHttV6TKEFVFoHpyWxN7KSXz1DQEDc6DUMVxf3aQEYtDVYNgH2HEfEkToNNTqDNBgt4Dy7mKovCzvuY",
  "key15": "34NaEQi1gf33JZ4BQd64vCCWrnJrWnF5YZd23XDRr5WnnqQxExiVZbTNBeBRjXdpxe4rHSR4K2FeWruoydZq41LH",
  "key16": "58sidFtSDKwQzhH4A8QG8mwk1uZcGKRgNLHpjJ4QAHwQ2MDBWQjXsXz6SZ7MeK299n7QruQyJRR5ejtPRbGorhJn",
  "key17": "4qnE7fyGxVbVkxWh5xN6QZHEgRWanHLjK1m3DUdw4FrUpqej3yRWxee78izpPBPcj5SwBFWGwUSnNWRevFyZFAwp",
  "key18": "62xS2DSDTcbs697kV6dg4FEs3YmDPaTHfJRaLszTPuc2J9nFhMeZy2NwF88NeVWQRMDXuGkrRYJ6eNW59SMjB19z",
  "key19": "25ao2F3dZgmni4LhpJzxEWXZ4Y2Ks3UYvy51WjEeoxn4Uh3GAVdTkhTJecqVBenaofsbdt5zWMuS964cWVBLdF8J",
  "key20": "g9xTcopv9JyWN4htudDAipV7y71Jaxe6WkEFtwvd3RVqQAUsyM5YWtiXMDvqzUaJhsfEy47nGSALeqjXfFTmW4F",
  "key21": "Yd312MwMu7mGpdkNmQsZNxtMuHLADyUN6PKRgr4anRk5FtUFwHSFB8dyacQxsdHwnBdBEfHfA7bujQZFPGRFDHh",
  "key22": "4kYWXTa74ZQszWPGm4s4VtDadTng7jU3m89V8oJ2J5fbRVLUQxFp5t6iYiCfxTq6rq7QqbWeDUFwyL2AfmdnWvSU",
  "key23": "2FNzrF1uNL5Hm79jjzeiVPVPzEutM3ycYBxeciQ1kkKn5wFqmDgpZRtgkcAinaN1R49B3G6WchuC69gr21noCeB",
  "key24": "4G7DPK6k56EmaDBoFVGpUviUR6mSKgcHtmFpfgvjWwggSsjQCM3cJRMzSw9zoejjJvJFMvxxb24SdXUJNLHDVZRE",
  "key25": "5PhHCGgYHYfds76ELcR5RJZPKuxLqp7rAUEH71URXd6wvwwL3a9Fi8Ng3P7j7YgdkgKmAb3Z5xYzcM6uo5BS1Ypu",
  "key26": "28P9nvKkzmtjytJSekUiSoAQMq5xw5D9q2RvoKFQh3xL6vVgA3QdmoJyej27XziTwyss7Bwvmgc8C26DiPZj8Vjo",
  "key27": "4JAugRkbuNsqfbHg443jrwUY7iyncnBtA4QW2S1MJKWEQLGJe2Ux9MyKp6uhWcYsUhPAuJ9NkEi12GXy1rNyTi1n",
  "key28": "s4VkABqUhqwC5PMR6qAjUfkeVs5g9yE2QemGZD6crLHvKjyQmWuvxYyXH5LuuQMgmUT157z1rGxDKo2AvbzVYZm",
  "key29": "38WSRLTQhgXoA4JhvpJs52kTBwqdPTXAnm7JYsMGokfxSaewNfcxbx6d3o7PWr5VCWAd8Th9A7ZE5MfhDixvNSag",
  "key30": "63KjPqNGP1pNsWFrKwqcqi2D5PxUjV1HgGZZncZK9rTxuFEFwCnEQK6RRJs7LkRBRVhST5nvALhxLuMnwF6evwjt",
  "key31": "58ZhDGfzCvTWhjK5rCfrp9JnMYjjDn8JYrDAn9h7TvePkoac2Cp7Bf83MiZ31M8W4C9ek5BFT47fCXvYaER4Uvih",
  "key32": "65dCQkrDzd5EiY8fjyeUyvu4YZKGycB3HvJhSAb4ksVm9dQQdAcMBVeMcv7oXGP3zS5sUj7FYpz6F54CqBc9oLf4",
  "key33": "8YKi5bi6TXB41ZmAtnQQh9HUBoHvaaD3KFCHhNKCB1THYn4qVYurL9K1gfRDNukqGwFwzUaMs6w9HjcqB8hjeFQ",
  "key34": "66rR4SgLb3X1N1x2ehPohNpyCtDh1SrCCYq9GMwWRgR4wtHEXBFgqAQkZreNqQfzcpyyzHVHSbiZh4XBsz8yz4jZ",
  "key35": "fKvhnQfyhAPjWnPmjkJfgBuQSRuBTmQDcKC4bmiaKaFwm5oWd96MuykPooTDBTHRSKruEXEoWGDMDKaAddnZETh",
  "key36": "2tWhGk36KLf9TGAfFd8JLnSJ5KDx7qkQrkUb4Ckz4WTdy2THmxUSkWrB6Dd2scwvRLJrc4B8yJkFEBfMrg3N63hq",
  "key37": "32gYC1TLsqE2ezbX3Ui2VYzDwxvmDH3ishfwCFr3eKCQj9HbAxxLpeVgA3jBcCdQsNcCQZw6S88BgTurdUAQ5cQL",
  "key38": "46qUjSG8nHAP3ERjKZTpLzU57WXvKW9Gd8Q234wbJSNDjVmth1nSDPToPhTvsWkFhYFFRMi91GsVaQhMXPKZNhuz",
  "key39": "2qkzjAwnL85vbyZsGix8aHSxSq1MzS36QgyKqwU1EtymVobQGRgThEHaNiGBNdRzrCtK32oTTDMEsT3tMfaj8KSB",
  "key40": "4RegGPPA1x4hT9dStrvQZ3NdDZs3tFhjictbLYzb5Nnb8W3YBCd8X51H53Y9T1PaZ5jv6j1qA8xawHe2mSRgymym",
  "key41": "45NkqPJztB7buKgExDi8sPzHTL2znDaH13BYz986xDtV5FWFjgXkiebZ22LBd7Pc5coqncgUaySxRZ89nYvHvcen",
  "key42": "5YfQ3uVxPS9XoQHG2122G4DtVsYiyYY26yTuLnjySmLubnkTTWu1Yfn2R7cAkmTpzkdLPuMLk99iG6jhsC2KEY3o",
  "key43": "2vZg6WPYSgTMDgsidvkcrJpZgKDnoQ8oh4LXudfJCsRZdf9ya1tcJ2W15okPB9TGfcpkhbYkbg5d3nXMX82cpRba",
  "key44": "5vrAAWA7uHYzCo53JFB85UJpW4sFv1xJvbEt5eYjhjsMoXnye4yiGDXwvXXuWbrtLuVD6VYRcnbX5iotB4ibYeQg",
  "key45": "4Yo4AN1FD4vRMdL8G9iYKu5SXDnoXunoZKHbEfroE7P6EWtjc1f2vtw37NPxgFSaURtqu6D4sF5ZJ4H8MgqKYhsQ",
  "key46": "5eCjU1RAHukxpKycfSnVb2pu56u8pR7SJummYdbwu7p95kYFzxemU4ERYaSFusZMrst76Ht7dBBLYML4GmTRXjyb",
  "key47": "4VAZHzAxL6M5LGCXoSCagVb8P2KMexqMhFQ9uHRqv47mBaK16aFd6cdPKhmEczqLoLYBkDvwKDKnAP81rnDhck2q"
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
