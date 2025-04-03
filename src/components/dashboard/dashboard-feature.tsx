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
    "2aLvkrfkDisPE9tCya2kp5fgya4VGF4RJZn6qJSzQtcJ95k5WxZF9SFPea23t9RKARBtPeYVbHH2fdbboeT7DDq8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iyfuJRNqp7ff4PsdAPJtfUJuA89QeBjwr8AHoXuZWSbHz6Yw485bjgTu98efZirZnVpQYNugwhAbC23AEU2EHjU",
  "key1": "SvhZWg7jnunx7aQFCsCP3BsQKkhUgh4ek3zWaD7vXjhKRju5PJ7PLy1dCHKtmeG1cHYF7akqt6wZQwnx4M923u3",
  "key2": "5j55g7w9H54p9MY8kukKbgMd9AwgkxVB6GX73eCFXj73YsFfpzgsnAJoCzokGfzCZpjT7urVRgRWCB2N5vt65RJ8",
  "key3": "58AkksA2NvHvr4ZDLFKqtjWbaain487szJEZ3UKjynL8Gs6EpNmPJF4GmuupyQhWf37wmwbHq5M3pk8qcXNiuQ1i",
  "key4": "5ZzDPx3KbQK5GyjCoCe7AzHnbgL6vDofqnjoGgiZ2AKFLWFWipRDnYis97buse6rUAqjx1vK4ZoiPaAMttURwju2",
  "key5": "5dQtctMEmW6Dqa1A39syMh9cBWacHAqhMoYzQnVhM8oxkG1xmYMbLihqxTtU4yrP2xpgFHsRBV3qwJhPtYMDF5EU",
  "key6": "jFwyc99PyJ59wE5FQx7xTmXuKEtXchs1qyrJh28p3Th7uFF1mpJ4ZuP3PQDBEPeGYCFKSiQhWwTNEsRr4bSAHm5",
  "key7": "41VvTJDmw41zNGWKBVi2hqUa5ZjieZRx6NbF1B1dtdvNWhxffrCcaw7nP6Vzom8cjnvSdb8uPcNVwa9e5iSRkZrZ",
  "key8": "LV5iE7Fy8EiURN6jmt38WvNFVNrfx8zqHuAVBpkXcu4tatdgqHm89GxVfSG7FHz3iqZkFrSxKgqv2LDzxA6mCLF",
  "key9": "9Sg8unTtG38rhH6u8NJjS8soTeQQSuaYvzHz8FbFG1jYWdDKKjb3xLG7q27tHSpPRJMNhBhawUN4Vxp6TDMBuaT",
  "key10": "33DK6UAogKaKSXjcB8WzfoA2ZYMMasC7orRr4Pasb9AkvTcJnB7keGdosz23ZCsdEQPReEYRUzx8pMg9PPTLjyvi",
  "key11": "qn4q5UimK3btVGqxbm8obMkATV6SkJEk7KRBn3LUbiFuRKqgGwXSUMypNurSPBuWNKqgcsEY8VUcEtvZi9QN7s7",
  "key12": "5T4YLnQku7WVkUHULRNM9pYPRYUw19qAzwYsefdC91fWh3ADe3n2384mcyjKwMJEjjh7eRekdC2iQMunrLQQPzpg",
  "key13": "AQ3EzUsNaZYd1mAY5sCMh6H8ewRarJtSq9JGzqiX4Hc6Nfi7rM4EpFyGJRWwSAd1Whd9DjN4gpfmFg7YW2Amq2D",
  "key14": "4S9ygJrMFDcFdeCuxEkqP2YETViqMtFxhRRgPpb8dSjgCWG7fh5hH1DE3G7qhKh2Sdwd1ZyTPgWNV3cu914e622R",
  "key15": "4cbFrQ2Brns7WRE5ajkuQb3PGxDC9G8bRZVYXA7tNig3kMyqsR7mZuSNWYwRdDa7NXkkJ9ekvvXUEYvDqa69VvtJ",
  "key16": "4dJsZ2Bf4tq1jgVVfa2v2duXG5Df6GmLpVoknj7uxv8jGb7oavsauK5wThrvesxpyT14YhMCqoAH7oZ9QEwLFsxg",
  "key17": "4Bm16hq1RyPAUgw1LP4Gwz2o4NTvmxRUx1V4tMxnVkE5RV9Xg15aGR9gd34DWHt5x4gqwvLkj7qPMim2f5Pq5Vvp",
  "key18": "34XVUN7ARnBuGP4e2g9Tn8f4gZAtwqFEfWyEp7xM54rhKKBi7FSQXeUGhqigFjMWwzZjmYdPhpxma4Peb9MvUiaJ",
  "key19": "uj7Q3SWPH5D3bBxAZzGwJVxJYEdCzYvhm98AcuRHsndhWhDKkyBPoNyGiY7p4szhcHYoiiZkDBZhG1w7vyst1eh",
  "key20": "4k3q4ZBiPukacNQF1uf3cAyx2eCxLXSDDVycUJrnxr637Pg5QXvRc9Gif7o8DzfxbyMRLJ4CLJ22zsezMKiCy2hH",
  "key21": "2SrRppoyNjne57Yx8V1piMKLWViAA4pkm1pRj2o1VVAq3YbKtdZhRsRMASEiGMGsM7ofcMa1SLcKs1gDCL5Y2Kzn",
  "key22": "5SJaumzemX6JTPUg5GDBDjRrNQ1ELPUjzJEHyaSrNZJxTctAeyu4UH1qKuy5i42nntzXErCGH7YJMNbqGLH1EQZZ",
  "key23": "nwUwRDEogD35sJsKmTn9zuarywJtZ2ipdxs7nRDzWUftj3xkYuwkcsfT6gyRnyZHT65XPqCzjdiVbJmkWgKgkvm",
  "key24": "3MzKVVdRF5eAw7AxY1BhLWstbT6HMKq1GjYVspURP7VSV58i6UUWtM7kGwtRLB8qHTvfpPAYTPb7ejGAmSDADrWF",
  "key25": "38eWjwUf2msK5hnML8W25xQya3edzmupdxVQVLQicXN3gAZXwo8R9UPdujTQJsATmKvWRYzVygErLFonkE3ZJpa2",
  "key26": "3jEHLMQu8P5bn6HBQRMs86K3DbBRLfdunC8tHsWsDUfkF73WihatixCq4qpM6zDdq9xzfFagxG5dpHHjnPAdSTV4",
  "key27": "2Gg4kcLULAVQE6bBbQDoWkUKp1AhURT6x2tgMWB3ajwAKkbFeuiTVXSv2DzS5WW74BmXEFGcnPCSH1wVaR5mysE7",
  "key28": "4aVG8fHbKMZZ2Qam5PbypXzUSiqnm3ZMGuihDcTprfyiEdsB4CVd1F6ADBxbgFwJyMKraGbaZYfAX4f2DY6WUm8B",
  "key29": "4CuCTUA6yAJEU5bTJz6vvDqnN15L5V9m47in98sZwKZedk7xyddjcFp4iX75CvMygt7oByVRpvDWJ6yTaNH1RFhA",
  "key30": "2bSg6XPnAiSWAEhVLeXweP5GihJ9mb9CcehkgoYKuCseDDizxSxCK8agGgMvDxrNqoEKiAXLtguvgPGqxS1HWsoy",
  "key31": "3Zyjb1YsDhwVm4GXDmeBnuaCjn17v9Z1CZcj7R8HG93U11esMmw4wMuKDnaUzS5LkLheY4dC2zZmeXkfqDfiSsRX",
  "key32": "2Px2xRNR38QXA88J7m3DZf5hmgSTLwX8ShUz8Q6UTL5J4TphoHD4xcFboCXSLgNykHLsdPENevjMH1JppUeQ6tBC",
  "key33": "2t9xSo7kiLYWioupd3krSsnostzMnAfiDjhycUSFkM4tu5m5YduV8jkZZu2xGwYLd31yAyp2wyRfv19pKj9jYZSV",
  "key34": "4LLkrzLJCRfL8tUUUwC6memvSiGCb95596PpbpGwMsYweULaAd85oVEQRK71Jti7W3uGPe6Tfv3b91F51hJGK4uH",
  "key35": "4yXCAdyetcAjwFya4j8YzQu39dDJeUDbB1HS4Z3wjQG6pLQsecK6XAAepPhJdXmRKPDinRFBTKa3tZNsdtmNXr5A",
  "key36": "4EG8y4i3k5ABiRqFgG8z9Fidm17183XBSb2nzkT3cEgJPwbzMChUHYz7xRXsnzfxwxVSHobALbnjUYDTJ6fVVrj6",
  "key37": "3Z39YKMJcfV3URoSt8A5ESTMn2ssqtbWa7VHSdcZ95DENrNuzK86CyY3QyhnLEUPVF9JtFPGVFummVHXgsYfq46M",
  "key38": "2wWfvAJcKVkccb1HFB6KRhsaZWxVEzh92uRVzyurLjgRMbcVPSNEX6fDAT9gmicYnCaj1QaxQkTv7UG7Evb8kbac",
  "key39": "3EZTLc8441SSJ3RNqa3z2T9ZMCBfCoBpiVcf5HE9TYdwcf3J3oaH8Snj4urAhnResUo8pgGUpGWXwp5D6nKie1wN",
  "key40": "2waMuCtPc9ZkfSS6zcCpAEvFyhWsuFPx4Jw7h93YUSvhhkrJkKRG2E54rQHgcKkEkHSvHNJRvWPHaiWp9oj61SJn",
  "key41": "3jYR55mfiDvJSWrziXqsYTguAciGdbbCaunsDM8K82M3p4e7CBTS3mt1bNrissLRPPRGT7S1ta2ZKe8QGYP8wKpc",
  "key42": "5jZbqgvUNgfPesyCFdnAGidSnuXmnhDM5T9P96X9y6YqXVLDUqpnE24vEwLbaB96JNtVddFZn963waYVK2ceBGN6",
  "key43": "2P3vf63rL1DG54HSgw3w22PszeMsqSqb9wyJuJSPXHdfJT6k8xrLRpMuh8qA7rQqsHn3nrnc7oT9jcMv7irj5GUp",
  "key44": "5x8B1Ckr2m6K9AWFe4k2snm8nHgVoESLVx55mAixtimmRfR5symjdURKwt3pDikr8xsGEELrZ9PvagpVc1PtMGzr",
  "key45": "3fNGXKveHjdzAuqQAUqhGEAus5UTkeYVEGfJ683mLmfXsSpgLpgWHeCEb1sPJoi4i2mtZvSEdhLY7NthwqCnMYGH",
  "key46": "4RFMjf9YPsrsGfFps6PJBEic6iiVAqMjoBwx3QPNbJkh2C74JGPhJytXecBCk2Z2drjXdG8ZojyPFi3ZrHLRBpVh",
  "key47": "2FzCRkLYjK7ZrMtxX42ruN2hmqSsz6QHd8dc6sh3TKATvbBsY1d1pLxXNXotmcT1hd6bwtGPcGZrrMqUneYof3ph",
  "key48": "K2pMXcG13o9hcituac3qAMKCRNFQ2q9ukRN3b72NEXLsnQAdDaC2SNHPp7VTufvKMdgFGpnSJr96xCto48mah7n"
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
