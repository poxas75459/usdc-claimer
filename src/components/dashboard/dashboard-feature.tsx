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
    "39xdsoc2sXefw5ZVaWKtCiLF9W1QoU2LxBonKW9AmgqsNodHSLEZgzQWY5GE3P9VHFSHbVM3DqJpMKFTy3E4s7Qf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29Gmrs3cW5khMS92phnxQwXMWbGPZBNpvyq3VtUAHqehviXMgMiZuDUkpgHhviNC9pChsvmJdhJSkriY9h5XmvHd",
  "key1": "2xpyNyEvJoT8HqLDWuohPDEk7sQPH8pQnyx8n142oG9pNpFK67ibTfLLoWBu7mumn5wtNPzq5hxZ7md1c9izB8Uq",
  "key2": "CNXmy4riTtCYD4KymKn6tktyfsfGxb2RjhApYcpx6Cu2JWdydVh6tpZ2Dz7KyxWaBdPM9KiA1PMCrP3AjdoxgNT",
  "key3": "63yByM2VMQGrHBRxc949uCisHB29sgkx8VSQsmya3GgE4UCCaJQ2ypqwudvs9LtP4SzWVDpncgxgh9SAYRSQTybJ",
  "key4": "44cqtCgH8i2v3BDQt7f4zBrgFgng8NvSbaL9kfofQuLy1zNZ3PwbuqqhcLLmKxbfCWkRkU8QWbRfn9yaBN6Jgx6U",
  "key5": "4HkJsf44joFDF7BzQzCpEDogNbDxiw9uzTrQVK78QgzY7HVUVqPuma55oZ3dxKsMGpdK1nUGsEncqUHdvP1XkW7r",
  "key6": "3wjxG69qJx8fmX3B2QHXTs6rHRhWAZSCaX8Taufaf6GviVXEFihFEHFK8H1YQTNky9DZ5R8f6MPg6sG6fDD4KT5T",
  "key7": "2Qejh2T3YkuSen8ywHpp25NpFEgyAM6UXCG5h2ur4H4LLJM6EJNCHKgKVBst3AjZQWYxP8MBVrHU1TksUNnK9NtH",
  "key8": "3hHQ77q2kYLREprvAF5YMjjLsfy6CeVkx7oNMGvpgGKcmLVYFw5pxPmZa4qsLkP7SxtDnchHMR92Ku6pi8Zw8KdT",
  "key9": "3mQ5e6x26bUandafMSkNWP5a7jAqqYUv5a1JM9k2eZQ3s7x2ebCnjAWvvFdUVWfqnBcF3MLoZ7FEtkBgK3fMBtWG",
  "key10": "NasbWEgqwpiwMRJHEQZH8iFeu7djtQR1vbGihoEhTgeS6JLspGaKsy1cFHC4XD7nU1qXcvb2neBQVgLb3KGgGYG",
  "key11": "4fjWuG8pTtHMVNgCj5zAHru5mCvL3YLG738nA4NwCKPLRewRqkjDU1VWoCvRANBip7pB4oMtdoWzb72iCRXbYAFW",
  "key12": "52m6kHmqFHJ6apj3xnRDkxv1Zb14ukhGctyDHbQ6tJeSAANUejStBBc19b6rxVNxVa4vGLnpUy87mjdKwS65BRFh",
  "key13": "4XrSZPc2UjpJqhM5ZRgEvVVRYJVxqXzow6Zg4ZNW5ZxfnRSnGy1KunQvC6NgFShihjBkX4Smyxkq9QiHQaD6WUNG",
  "key14": "Q6SqnVNxNqgJYwQSD2xubhmnjt23gyZJ3npCUBDfCaNk4dd9FMxpdexT626kKp7DA9kTEDGqsY8VhpQ3tzGDAv6",
  "key15": "FoefH56WXeZ6rvtkew8oTzj3gzaDk7ZGh1m57LV3wbsjE1ReqavJQqCQisVrkNPp8rkGHw5GXU6AU9x7ErXcXg4",
  "key16": "2F2mtbkCE3fbL2X9ByKCmwH6UBPS8hdnz8Z8te8M8z4qLhMAPDyoaz5anwG7hrdvzJhzWCNxLpTYiSCiXyV4Wme5",
  "key17": "35QNL8P55Vb7ZTQJsyuzxBantQxQE7Zi8LAzkEtccY4t6u9X81xihz7thCEzuVSvdTKGsPENYi7zqbACrYJj3Sai",
  "key18": "3JVQduwmhLK4zpEkBWcBx5zybnp8G34ZQ1eFoyDPGHbYuNo6uCjMpRFCM1U3BfijXqm2gFwkmnxDnE5GLbyCQk5A",
  "key19": "66frvkgFva57hzA9S3f6nqYfUZ9duUQKcCfBTvKaS2Ldv31osMhHhMtddgJ17GPknPzZRYwehSCs8WQH2j8UqbK1",
  "key20": "4CGzAu4NoT2uFR2uaatGmzserL4mwfCgiLaWp8cAvQKHaCJiNgMMhJLnddVLyqVGDUi6VoGSNH3jhPmuEkSJ8VJR",
  "key21": "4HEXWctMbCUqaHsDkkcsBr9VB9hqUCPUQ35YuwiaB3GatejZwV5nMNmQ4vqw9noDhgVw1LeTQYMtmKvdvJcJFt3t",
  "key22": "4DBm6h6k1i7by9V1agF8L14ja9LFEcbg1BhGYBhzjApAY4jpYHfX7ZKaHRD1hUN6V1K5Mgco7gPxsPHEeK3Yz7Pg",
  "key23": "4cTH3cR2NRpqKB8ND39pYjqyx398W8Hfki4wEvQxk4zYw5KSGJo5EWxdFuc7jUNjriqrWM6aBnGsUzSRQ5F6sX8r",
  "key24": "5hPHkiMm8Wp1Dqs8GVgjUpQuFcqReLmV8q2MoopKDfVnhFuxJfVgn7zPHykJTc82kYbd1xQafu28jpGXDQRi1LKG",
  "key25": "4QNcwHHsWvhYqw9MqaQPbsdTGKVC5YLAWVg4fYgrM1zKPwxmwPFUcKpRQg7upmvKNr6azfVy51GBWrgLGqftHkoM",
  "key26": "4TQvA5ntMNnAxZkgcEdnWxE4G3ScPJmLoCwiXy3Eyp5QbABzgBrTMUS3kFC3azWWLs6qRHMFbkUYeUn3zPLoJrKS",
  "key27": "461xxQES2HWPfgN1mrVcN7AymN7ym4kvYL2DpXNZriPbd3CLTzAxieSYCZ3WfZC3NX19NRzsJngrwYhjjUzjYY2b",
  "key28": "5p2AFJztmxA7EdV3E8C8fvKxDNZtEYjE1FvtJXZNYcRVefNyhGQcsrg7j9LcxbQPGHDK3GifRWZNTJvNQDVoVuRk",
  "key29": "4KCpXnei9LuTSKDpbdyezhWCWQkTzwkM8nN5gUtXBEQPfBtrLUubnTxQCmy3AjjLaMKMavVKVf8BM16Ncmz7KwJq",
  "key30": "4v8vVi2ozeARPw1onprjEjvJf1Dyq535JduPAzTtkHaEaP7yesYdGJ66fvZPfNMQzyZ7TeN5fZeVAbF883oSztTc",
  "key31": "21j4SyviTvcspEkAsmNULD1dMVBaf6eFPgRLW2J2nfUVYVYE7eT28tikwU6w3VT2nnjSkx4HMoX7thnLra3Zoh82",
  "key32": "4fCeGjsJVGBsmZCjXD7MsZpf2q1huaFYexyQJSMHrJZABkVBZXYwoCStpNDbGMjyUantdpnGs3Ej9VPuTFBpX9GU",
  "key33": "3mwt7UXAVCGm1gmtRvBMJ5QsRNnSofEFndxB1sTqNdk33oMH2f4zsD9mzEC2ARTj2vyXqQCnuASbDUdRz6bCqb2u",
  "key34": "3duXKHLmxSBshZLyu6MSZ4Njt3QtvqDsSCLiymVLs1vmGiKeGHvGha33bTTyZoD9wW42nteX5c3K2VYzVkc3Rijy",
  "key35": "5Qexpd8oVKWzgCK6Va5XuGymYoUSMcmVMxiEPvxAGQYkWE1rrFRDMe5HhWebLUhoLC8zv2axwaeSaYyE7Uhng6mB",
  "key36": "3U4rAFTVg2zgkv3sYou2d9nMeKycVZZALFHPZr3RqRA82bVEks6VtVsoejALg5RGrHJSfohbFxmA9AtM8DeCUoDL",
  "key37": "4PWULDyyMEwiERc5z3pNsL3QjrZSTpQJCP2nwWYZskw1FgtDwCxcwg6KfUxJs8wvcBu4m4bzPccXEpdeRjYtYYw4"
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
