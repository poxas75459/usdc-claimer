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
    "4E7QgKMa58jN2LjqrxnTBnGo3AkhZCz3Jrafojpwr5MTHhu4GqLA5fHywxTS3ndm4fNM3U9uvhVgkewuCYWXYbRG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NfwVwKYbYELg2vxseDxtS558xAh7c9ESafMLcVf7g8RRyDHPSoAA6G3PctHAgjoJ4Vm5Dga9Fq9s9JjAnfYBMbE",
  "key1": "7jNomLsmcY8ybkoaQJ8TGP6NSg5WrF5MxVH9ACHQAtsGzS2mBHZKV9UPxSrAUpmFAwMsrk3nrt4VhFr7R39X9MB",
  "key2": "4uVkdDsdH5gSF5EA6GciXuMz2sPTSaYawud9UosPNCDs9cHBidtofytpGtwMsGuwyHXUCMc1eHT4iC6kQJXrUQz8",
  "key3": "2FjPnEQB3gNYMqaKgLSpu3TbQu3WzT2g3KW8yTdovaR74pJXXyAx1RbTzh6q98tU3LUerfVZe1uo6faCvegyn7GQ",
  "key4": "GwLg4DaPqST9n9D2wmmWwpjva8Zw4pJaAsz4MdTqDRCQD9FPYvf9q6NC7TEM6DZBftB5v1EEjxXTszonZcBvnay",
  "key5": "UBHd7oKrCp9eFaCX5FYSaVZLh7cZFXiq9WudYBzMChYthCHh5nbyJ8tymRXy2SwhMSfYncYAV1KtPv1PCn6aKXw",
  "key6": "26MeXaQLxLS5JQnQESmwcdsYoMR8NADk954E3w5xnrohtHhj3wWeRB37T8swmCMaj2wYmwkf7PR2ZKkqyXw9LgAF",
  "key7": "3M9t7JvAtJZEtJC5sGwFyh76YnkdYvYoaf3iAAkTMRBurY2imKetmBqXUSJtBts7Pm3wgKHsag5nqaBSVLkhQYWk",
  "key8": "47UUHmPm1poDGhyuH9hzZoZpNtREB2CHvBUcggPMpFHsd18gnB3hScNGg6SJGb5HUtMYmvyk6XnXSicrywLtRFxz",
  "key9": "dRz9UTZwcJ2QqSS6QKV9siWDTRMVaXkQCB9oBVAt8XNQ4c7fowAQ6nxo64hB6fR5HJamNHuVqL76kbFfSdD2JXu",
  "key10": "3qkJuWedgaMrCEPA2LC9W22mDYi3UZquCmqgtMDyct3GBPf4UJsowuWGKAyftyDtUvDifL66PDvLwzY67gk6hdp8",
  "key11": "58WwQKaoLobeRxTxSbDY5sgrsrkMNMiCW41zUGfEX7uuXPY4W46CaE85g9gcg8XpCgjCZfwP7iQtiQZHu4uKtHmM",
  "key12": "k3sqL6nfcsD6VQWnWp7bz54mE7fdHwkJvbezGRmkDQUy8UNxTxNz8zFqKNtULmjuxYmMzFz288E2cCbmjv3AQvc",
  "key13": "5xmkepwhftgHuvifWR3LyBR52H5rAcooPSrdsiz6AjaWNut9ShSdUhGB3esV17LrYJYCJtva1MRWD1aLgV61iJ5D",
  "key14": "ABSQs7JX1YGFoeEDjNGvNUwczhqtWMjVpRwRrtm99hgWdYjHAxjUBEvBbQMs7VUZQtei223mdjBsDbJH1jJHeUY",
  "key15": "ARdVEHV8PV1FANGwmRfLkwZx1DSkiDXksgKsG99TXri2iBDpydBfPSPxUCeGR2R4WHDcfQ3S1LMJHu7aZx5qfUr",
  "key16": "2PD5YSFTPa5JcV23BuQd7F9DYCHRs3YeNZ7trG6QqdgcjvbXdqqphhxXdSwfwEhBizUng4y93iSPhcka6TfcA1xW",
  "key17": "313pCDnBTAUkKisSGKzVxhtLLNJM78tULAFeyD991De93xRTjhJmQ4SdkixbGji2yESciKJLKzpfGtukCfbVJGns",
  "key18": "2yPY9TWW2cZcpPpExSJdNVYpJ1LjHRTEcwFyfZAUw8iR5ajzEK6AF6YuEYUYmtdzsSDwFjTU6gfryoTxb8VkbPnH",
  "key19": "34UcZ7w5Bkv6iwdXvnFuzpgH9Ke6SW8cBvadwHs34enoRzmrA6SMRWAZSnDRVJPdwkerdSBSezCDGXGskjpS3RnC",
  "key20": "535SUZVCBxZYCVGgUpajFsXNrV5Xnjg1JTQR7i91d2SA85QqtY4y9Qm1vh1QZFczXKbYPb8TVxfvunSaWakRTRT5",
  "key21": "2CdN2FuX2D9X4RS6vJZvABbMr3Y5pQxEePAUi9XxxyZ9kwiVjBhouC74M8SkYUcDdWSoPWRsyeMJMU4okymGZSJu",
  "key22": "4kvUK3gh94gnsyfgCHBviACXdrb3gKWP8a59m2chx89TcC5VbzGGxVoqr1X7pVpqVBfcSRHGmzhwu2DDJtXb47ND",
  "key23": "5dstyzDKeG5YQnXXzxfEVpmDrQ7RSqafDaS3hRJP65SwvqmC4WihPWZY9SESeQmYvCXDfcvnZN3mJqfjqHgFn226",
  "key24": "Yf4oFnxgftYx4n3cQM2dMzuAgbuq8WvYZMHFhD4kAZ9RZsdRTF6ou6m4R8GCwoZJcu35qgX68UJnvp9bQdedarr",
  "key25": "3if3LidwTjUQKLM7MkBiCNmnwbvXGZdDMrUNtZyZXMo5akMfgnhZvCPnthqyc411HrRLsvMm7LCzxNejU9d9FoqM",
  "key26": "EEnpLNrF6FQdwKEG6DVEJy9PuE323Du6sRhpLM9H6PPGHoALpb6jA5p669yzLA9Pr5PvPMmh6pxGGZzpsk8en3G",
  "key27": "M2FjYzXCbMjFQphSncYQ1XmcNixBAfvFBDAZke123sMiZxo1o7k8LMHgGqwVmFAvn8bF4uFtoADuzinokt3URkB",
  "key28": "Eg4A8Ydubop1X17ep5oCDrwiRFgRjgnCHPST4JR5dHFM4M5Hdz2zxaBNtBFSJ1mYGpgjDy6bprARDvryJVMroLt",
  "key29": "5oWZevaGgyW73t5sbpp1NUWDzjeHEXiUgqmYxe8bPp1rKLf82HCzy3mXhnhGkJgdnbsdZBn87V7UST4XgofSGJtZ",
  "key30": "67SgLCM77TMLf1W42M87Y5U7PrX5cXuvrDE8sJKZk4YqJNfKNcE7knEchXporArKKUzXJhLPo46Jwgywign1gDg4",
  "key31": "3PAHC7tbybfdnBquMJhcG6VvoNL3eucLXnYAWxBja7pXE8HeQoCbhAoJ5aR4m3AqKa3p4xQvRVkEWrsphEh7UXXN",
  "key32": "4TQwyVJiWPhJzx6NbZcco7sEN8XSTEevxSWGngsVWJAwBrhGktCsviyfWMMD3BoA5dSBF3JCptpQLsRUdkNQaNvc",
  "key33": "2rFyYYdedZ9az3V1xK5gMEW8o6QmULey5dX2ZUjdMNzrkgEkmdnNDXVUEVzt2C9J82iHAWfZUYcqB8jVZwVeE38n",
  "key34": "2hocAYjVod5eWdceWvpM6MAJcghMctSkx6MnshGyg2j41bXdpokrkzPXJkdt4ALZXEFcf7TQZ8MdyXVmBhnYKSGT",
  "key35": "4kfDpG2K4HrGUPTkHmggN8y714aiGtfSZk9UcabxbKpXuunYbSrGF6E7hc2EetUvPfkZc3cFPWGeuVoHgrVi3PMP",
  "key36": "45M7P6ngjMnwriQPQwohu74nomnAV2b1zYJWncjhUfsZAZGN7oGgxHuZYbo6vbgfgXbDettAZCZ1GVUiRV27k8aC",
  "key37": "4NNb2BGgzLxosvUTUR2FLCqXbTQTEeqHT4VPRsxgu3oyX8hN3oxRUNMgZhvBs41ByP6RX2pWCUak3U6Q91dwpKFE",
  "key38": "3EqNeuy6w8erDz8zXne6VAyNb5bgdoor1jDBDZCthRYvnxYxmuVNq3abRB36KQvysDZqZ57QF2sSRUezpjNhxXo2",
  "key39": "57TuYjC71ju9GkonbdLebo9ffuEqPTgBKHhVZGMPMZ1pk4AfD4JTji7AUyyNQYR6fvj56zpV21xJSZRGMTquWZhA",
  "key40": "7ExuYSd9RFsVAxCsDzxHN1VoY4bRbqScKjb45sxKyvD5uM37gt5GvK55zhKkfncBKNwq3H975K8FakgV8cf98ns",
  "key41": "2qHAJMf9qm4B375g1Np6kEf4fgXpZUQeCw4pVKKsWViUXqYSuWk8VkTzU44zpNRmZHDTrBzhWoZsF3vF38xvMwc7",
  "key42": "3miMhf4zuSyvar4whYxPQ5cFLpTStj6nTdmo4nvFMzDnR8gfn7Fp5vpgrUzzBRcAnfdQAhSMb8GvckUQWiHw1HFe",
  "key43": "3FaEMbrUrhMD1mZwW5N4qa47AALYDkb2WdCKu3K2QfL4rmDV2FSLCz6KrAUr2s4SrzgWbocMhY2NCBuH1xLDisfr",
  "key44": "4TRJVXzHKncZZcXbYdWAsKjJWZJAD156y5EiVwT4PWwtZBHR8FrmPaH35GVZN34eNzNHGCctPRDoD9qEuZXfY9ha"
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
