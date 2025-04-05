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
    "5BndvUdXXVrQD5Zhq2NGMbJtWQF4nJLucXCpfQMxnHqxEVrV5SUNZoWCxifuA7USKBehpdYgtgMuaQb1Gb5QkL4y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mXQ2nwmeaxQFf5tGDi3D8MKvitPj9KawkmZZNUtVSv3oi24wmsn4cXnXpJubiiF6yzoaQK3s2vk5npNobi5HT2p",
  "key1": "41Sc8u9mgWxZzKmWF9ucyUefqHAivLgH6Gcb4okSS3dRwobUSbK6ZyHBCPmhuNDUxyVe16rXd3CDTS48qxi5HwwW",
  "key2": "2JBV8VTNy1yem6zXNQvcVdh83emrVs8q5EGqMRKopFxJnY3qcPGWZcijd5Twn8QgwduVcTKezoojPD5p7M3LMUZd",
  "key3": "4b36C7nZ5sGUnT87bvvRa2rqniD6ra7h43paJqJVvGcaDWFaQfm7kaz68c4Ac8Sh5ZCpAZ56fD4devnXbm2i3Qew",
  "key4": "38SJGASxBBpxthWyyJ8NPacge9huD9BfAJHcjps1ARtuFqTFAMMpgErXi5pqbXcVYQp4RPnv2srtYwf41jPKWJo7",
  "key5": "2xypike1AcUVib7kYqTkLwGRQ9sjaLZoudirAYqdPeg8ingjc5JQLTxTfeCXvWoKruGYexLjLRVae2iTrXvNWqBZ",
  "key6": "5cqtz9Emgy7iokecX4vW8Bc7VP4nkYonmbJZCbStFu25W9QMLUnfnjStNGpHigpuipMyXVXP1m9uRQwN3LbJzPJR",
  "key7": "35vskUx9VwD31EVsmXCvZRjiP9Vfqex7PWHBiq9hYZV6iaUNHGwbvfZynwrJ6CbXAvnao76dWYw9cWzvHUFJiLN4",
  "key8": "qVsSJA4xBK3urohRoFgCeTasGJHLMxoXHfLt7cmJyaCsB9qfpr9AEMYN38ygwVZaywYTcbnttNTzjtJdtQjiEuk",
  "key9": "4wCJK7rn83fdMoLkPU1fiEePCQjmPVmXUfupxXxnqJZxPm6p49ouh9K5xuT6wcHTygErH3uXF3k7XptL5kpQK6cm",
  "key10": "4jPMk9DMamcGiGA94wvTBsV5CRXUwo6Tk626Eipadr8WDzYUZmQ3rbkmo73PpWvCXwur9DzD7ER4b9J3p25B2z3w",
  "key11": "2nu9DKHab9TFjXFUsf6XrtcLtFGCpEctwJ4TKtQzV8NG5iBns8JWGqAQjftMvsAXMe6rvtj4RSFzLPBuaQMNj62b",
  "key12": "2oRGrJ8ptSxe5nm1DnFxR9MpeGHnfPFi1gfigjkDFtydyrXtrV74p5QpuHFe21RiaJfi81SvLH3jjzKUqdeM1cwK",
  "key13": "5GEgkXZi9EhSCdNEWreADTzMSGKPpE43uARD5rWcbFjX2xcgV9eQbieQ3iRShN3tLivWnX67cUV6QCfWGtbwKUNG",
  "key14": "25uDPytLTEB44Ds7gXdgKVG3kVn5ZJVvK5FfaNbF6MHdAyfet35guzTzvD39Kn8i424hWx5sZg9RAWsX83YgGXpZ",
  "key15": "emwRnAceHZyXzkcb3R6SWnJtY4eK2MqZKbD67ziDBvm6DfxLYXX9s3TUi2e5TsZpE7SntTZ59kLaJ1TNXgA8NKd",
  "key16": "3iBfAzsr8a5kxnSoGtnUSdzX8mkcjnEo2aPaK78CghQCowQ4wcUqoLpXedmcVyEvT2r8UcMmXaJCEJJ8TgCxyzmR",
  "key17": "5sMmTSQnozB2mqoi8HMrh3gsXjwRdRzQh176VeDBiiSsHJt9gYSthNZupydHrvgfGzRqwFNhg4jQFJ84buyEuTZw",
  "key18": "5foCXTAFW17nDNgqfhgD6RmDJNxTpv6qWs9t6cNaat9odjnBemKN4jrHxTcvp45UV59ThLKEXmK4VLSzgRmqASff",
  "key19": "jF6WdvP6kRjxm33iqKQ5YgSy4P7n2jZLn8mjRGMrQXpG32CGBiDboMDYzYygcJHanS5aUrvFkNUcfrHmoQYXA3N",
  "key20": "4JSKBjkppyhfjYiiWyfdNMqXfnBtow3tJnq7z4V84iHx7YK5LVRFZVwNsdP9RuXzq6ppN4FfvXbnFZGcfEQBDWTc",
  "key21": "4yGbp5iMHL3R45VxsezCynrD7kKcd4a5fRa3HHPnEJkMuQmDXGd4e7dwqDAbjop2xXV6x45CikwWcxUiWa6s2j5F",
  "key22": "4mFKjWUaKLSz2jQT9JMnyUVDb9VDBXbzxmkWat6JEQgPgwE46y8VSxWkDx61KY2ppzRsg2FuVe8ND5WJDQY91sqU",
  "key23": "3vvrPpeZEAABdcuETsEQZjJm8m2Z3MBwnGVCXNRfaxpeDvmebxHXmZf3RNj4C7VQMgBqCT8scLvkXvLD9yW8v6pH",
  "key24": "5Pq1Lpc46eR7qVvDdGauERn2mZZQHu2K9zrfm7vbA2acnFCNBQ8JFBU7Q7jM4RRuWmnkhwAU9MnWXvqMitXcDjki",
  "key25": "56Nw54ErY8ieZytML55PKzoWcwFpT2cH8AXbBqgiJzPiGtDGsELp8WJ4222fsf2ouW6xph2HBSmB1q9c471rQxAt",
  "key26": "5GFg8KLyGccybDKeU11Xjhrg7QQZcKHHHdpMjny7HZd3XAKvVf159fuRZRt7zhAde5ouWq2Kox6dyRrvwvgxnbAp",
  "key27": "7aF3JXUhrmcxfgzYHjfX29WcqYMiFb3VkcPPCtUX1MCNQYuoKVT2GPywtNug8Wi9E9oq6ex7BPGqV21P2wvdTFn",
  "key28": "51PYHR1DJDLUd7hdtEC1yxyavrHLkoSx7d2KqBra6ab1cZuYk2F6oe5refEA39qjckmMsg3bwYBkaRe6DNEvYuAk",
  "key29": "4dVN5C8HexPzraRkqZNHGKv4AmaFWsgezK3kZLEBQ16xkzNmQZquUHw8PMiKJB1iiodz9g81w5vHCjgDeKi9U3HP",
  "key30": "4M7rrHixHuzwYEiyFC8QukPnRbKNsaT9fnkYjpPXBiWJbWZUysTC6xMNFDoVs8e7jn4tA7hadRXrevhTtYjUJE35",
  "key31": "4sPXqcGFPVbFb871zb5DNxJxQGb2n7UuHUNds9RAKcB1vSrr2J2BmjbEs9nw4WEcmh2JAUHGdF2hoX23CCey4eHj",
  "key32": "67oHbpaSDHsYD1gNTURseAnCxMLoi8FC66dysju5anwni5Hz4sYt8K37dWy4DwrKppia5F5RH7Xg7fko9haPBhpz",
  "key33": "5L5wQYiSUFwzNebhnJbYNnDwcioR8qhhYjXFd3BXybSBVK4FujJocMC3vMMZhyLpwhr3s2F3CT9QnxJSNo933N2D",
  "key34": "5XrmCq8VkTUa4JNjdux5HqRmdXtfxJgTQuB6VYadDx22kRMYmFdvAg7pGn4AgchRfW35p6sNSthtqwhwtMgVeZMZ",
  "key35": "5ED4XEyotvgyuXUr6Wo1cniMyEYyMGoFSDjzwg3SYv1D9btmFQZrwEUz8c4ADCsBoMQWpfyUhcmUkjWJi4AkdB4B",
  "key36": "2PZqL4i2TppzmNa7HiT9wXryL4yKsQy6rZCTpQf8wuwHXavuTUQ8bLhjSREcgF3J4QyEgDW1F6Xgqgn2pbRZyHX6",
  "key37": "61qpV4RnDRLcCcRbmigEqZG7F1xnRxUSDXQyBA7qkBC5rRKTPXTQDX6kWJZtRGCAzSVnH2mcbBNarzXU1twRw2kD",
  "key38": "wMP5ABxqMXQagxKnq574zuYasoSPWr7u3Uh8tKEyX3YEpWW6XQtjDWtuP8A2GPSQqSrkKHK46ca3TGGz1xMbgvK",
  "key39": "4AWq3nhh5Yxvkd6P77Gxrn2ej5wD3Be64iC5t5kF2w8h3CegzN6uyrnxaGgEfLZCBxvUvCeAHeykgFcfSkVDAY3g",
  "key40": "5RPCJrS22K4iKCcud82d2Eam5v8uKeWpz8xTR7mJNUwHfuDoVhVAVTrHvWRuzbJNADV5FgfhgyQfB5sTuZczyHos",
  "key41": "RGAc2Va3nLNo854YHvmchLUrNVj3B1QMWFoLUg1RSUpnPD3GBjKcVdoBBpBAKWhMNyDJGY5DG1BNxSfareZJ5XJ",
  "key42": "x1vRoZQoobuBXD5pfz3NvQFWE1jGt4u2EJW6Mc7ZMwJjAWH51uGoFq5j1BBwr3FtE2ApWQUnA6wzr2NSMDKsmAK",
  "key43": "f1GZhL7dAQm4Q5mMWsjZ1hRoJdwwgKHsWwb1oGKQhLVAamXhJEH9YrtkYmpmnwM9FDu38X2h5jFQotKpXFMZdX6",
  "key44": "Lm67CwwYFajyPh8HiBbU5AwGY65Vk1o9Ek37CVsLHwMQ4ezYQNdNQdCM3NsjzjcssdfUNf7AQWDTwVdhDbKep3u",
  "key45": "333pS4LsKMcg7o63xbTjbrjATLm5nASSsx2qZeUExXvaRLLrKrc2bzRZNXt6PTdFnA2tQZGgL3cAYyRwv8Q6aMh4"
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
