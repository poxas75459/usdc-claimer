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
    "3iDcU6b9e47say2usCdhaJGwnY786sePhmqs3nzXbeAUeTWWjDXVucbJqiCNBZULykRuuCNEmcu92HH5xGc4KQYz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2K84xvhXxnrD6SYvvTzipK4HtQfsQLNj7FwZpfHAcNiXpLMgwPe3xpdFELWMGB6w5hJWX4v9Q4p6EkSTdWsSv81y",
  "key1": "UtDqMVHnXKHFbkcahK9uURqGwf5Z9J5MhDTDejiDyywSgvyxAMAaxBfNN2GgpcaafzLrrdStUJZQNRTsEMhv5Hg",
  "key2": "4xPTUVF9msR6ZsRAHpRrcXgZoDNEYn1TpS6d1f4dss3GfJhMPcWNdLXdkNU7wv9r1J5B6d2Mw6JqpTACsnoE8QL1",
  "key3": "3gyUgtujSA6dikMtZDKXRXaue2bkCKwEHaw3AhqQKhgRkxRQ6SUqCji5awxCKwkPMsPqAaHrs4Mb7LK6gg52Zeab",
  "key4": "5m9ZREnZSpNb35R2RSiQv8xd2GxFzyT2jVJ7YtFSrFduUJe2JgP2nA33L6yw34RzdHutXkoPmsCXefBPV25nbedn",
  "key5": "3cksdTRWsuVFNcs9C2WXtAgJkRp1wjRmkK2LDmYTUz85UjZkVuAH5jQV2BDjApgYoxJ7Tvc2EKwzp9QhSBZLcg4Q",
  "key6": "1YLuEa5GJ4VE5eBVy3Pk79vF7SiD6Cqi2RptKztewrnJ7rafzkwFVJ3LVf85DccSqhNJVGbziJGdkBRukGDAx5E",
  "key7": "633zZK6S2UpfogJ88j3azSsaR5KKEZpZmCy4sCRyf7j282tofpedaJxRocfmqbsruGT6FMDcSr4xv9ndBtT1wHAJ",
  "key8": "3oyYEbzJWy1mLVn9twfZ7LbjRbLS9XKtpbU8DV8T3XE4QvjVg8TiKz8wa1XzqXRYPbgMNPtyuMWkUhByodrm1xG5",
  "key9": "361oUzEMjAU7KsgXRj3yz36bqCPpTV698aHCQoJmmDcVdHWuthdHo5zbMiqh7n6V9pwCP3J1HcDxcpuPwQwA8b67",
  "key10": "34VARLtcZ48FMAa4mktUyW1Tt5nrG7yAznVeYQBeW6rL9Ki3wPaCk5ou5VQ4KLNkepYPAMSBGizDHcSoLYtpVwZt",
  "key11": "xybLJvEe44o1UW1fLEKpfJXtd68pTi8cXgKW43VezywbfYVcvBwJomdfv9LDs3GahgJcCSbW4mWEpVArPuFq8uj",
  "key12": "3m9w1NGowpd1Ntst7nmkCN464cqiEt1CDUta36kdSRxZvBnXuwKparfrfXrzSptSDSt6SkuSJegzTpbkRUv7Dif5",
  "key13": "smCknL47AL1gMWQcF44wB5BksJv5BAtN3RZcGop9nP8tnBAWyUPRWCf38yviQ7P4PJAvVVXpScQR7X3sQw8A2RY",
  "key14": "FFrYNQ3QUYEhqmznAzWtqrQewAfAiCibe37MrSXx1Dto4C5LYrQ218KL9gFmEQgrSb5bRhY2kMFsNMMpa7RmuCW",
  "key15": "3i4y2MgpRzyMAK3wSkFV5jSAfPEBmnbWdavTAgQG49duTNzwqXR4FtAfvVQoUKpYUcX8hC76yAx393Qith4N331e",
  "key16": "3oHdJX1nje44ztfx3sevke3FC9U5hvR5YCbpZ949SfvbfpwNc562pZeSi9KrDkRS7xFZ92i2TbFqT2bw3SZk5ttk",
  "key17": "3f6Sv8yJnbmVNjABqEvsWq8avAJ7ctcoUYwiwNFNyWp4xEpLjKqUagpoMK4m2v2Ucys5gATVJwMy7nyLuvXCRL5t",
  "key18": "2LVSRvAU1APFtis2L6ktAVjH13QPxFHDw85prsFricrjy7NmeNxk3F9ydmBDYnQbGKPmgPkTDQH4o2zHRa3yWz4S",
  "key19": "4cZeLQcSxRRYVXyVcnVKVpDyG1bipUt8TDZrxmoSUCZcswFZD2FqBKS4YU7fvKwEJQ1TC9Qbf1RfwGLmyXxTwN7P",
  "key20": "2oD6TBU5vxg9FhXzfZezF9WhWgDTks19UrjawcuZoRByoZcuoAkPMF3FencDPQcgTAxpqSUbzrCWDcGDt6EqX1J4",
  "key21": "2n3XAjaMbJ3G8hTREV2FPrRM4MUrv9BEPeiYuW13T5GCsQipX7SpQVWnEsK3hM3qJjU6h3JnbbZh7Tj5oVxM6dUC",
  "key22": "5TBcQmekQ9dkUVBoq5DrvD5DzvgoRLZACpC1mx4ugwSggobzZT4jJvon8YtDqyRNgrKkRo11e3RHLfuJyJLhiRE8",
  "key23": "4SSyhgU5Mqw3ZxMV6VJWRENSgSg2GLcYcDPHTmuyEseCDVj1S22X7AAuf2f2L61XNSr1Qa7N3QiS6ggtxnSdLwBc",
  "key24": "2p82RQXXtw8QsiNyBvRp4gLPGcAkvpCdNALTh8EAum1FEywp6dMKm7RxG6dMWvfqCPLXHUDp5cJHogqi5AD3xE1D",
  "key25": "4fUiZw3i5UZXqLFsZsU3rSrX7iu8cNTY5ZN7ZiyGuipcmJG7tNo4F5RBBGoSYPKSqcJzE6ruCvg8M96haWAYvpDH",
  "key26": "3VqpuKWSazi1U9TxgK7oUESaXTMcmTZyV1WorYKNx52TgGLhG3mcfckk349t4U9w2ivhutaCr1nBF7wVUbZ8gDrf",
  "key27": "mAR8BfcDRx95YnkNDrnsK1M1NfgyGtHuD7kxQXBUVzDmyCDhNC77XwZrCiUeaUmgdaMEw8yyZ6x8XRdggBBvAAQ",
  "key28": "27DUXErCZNsLcCTSZpua5WpLSMN1esqkBQ42Zqk2KV2HxKDZviL8ot4xt54ceNY7TzfNAR4Aas38AM3iP89u7Aqw",
  "key29": "Sq8BCbDS3xQBjihEQKTCKTjbJYJWL8e9Ywcmwj5Z1aUZ9mi2kDn6AoLs7TxffTtowTKTz9tPbguDByXJyRZNBDF",
  "key30": "3EEgoPkGDP66EQKqDfoUo8PRaQoPZnNJBCBKz9ug7G7keYeNJNPHJPetYLUSEHPKo3EDBPadg2qbBZJYEEYwA99",
  "key31": "qxFvFT8pKPVf5R4Ctn7VBV1PipZuwiBWnuwCcTqf8GCSA6GoQqrdHYR7nQzd2368XBKKNWFNxi1nSEef8pPyBG9",
  "key32": "2GUTrPrnpC9aigXi2y3TFz6EH3Xag1azF6WMYvzeQTjnCSqwkQFycnv1n5ezSEigXjZdru1qzN23DkPLoiLR9gWN",
  "key33": "46djpFDJpKLttEiNKsofwRg4SSKbZNVZm7ccdSKzeNVEiPVKgi8oDZD9Qa1E1F6Bwufo7Jz4euWM4ixhEvhDke6V",
  "key34": "4XejeCppKj2Hu5YykxP3tazNDSWxKMeUL3Puj4TCtRjNqBjFz7Sk2c3cY8cCng4foMk9oWcqWxmKH3hct5UiVtPy",
  "key35": "5Tsj3o6DMNFjzYgsvBcBNBQHxv2qSEjPbSZCjmuvgEWVvUCMNE9LH9nJjhu3HAWS7sq2KEwtBfc1BmUPayYtxjbJ",
  "key36": "26xVaHe3PbdZngnTH4c48goDtardozY1YeA4YiKfjgX8vkVnVTBbgdkaZKnymvAVimxnxwWMiF7brYxon8X36GRf",
  "key37": "2MxfXvxuubG369cRH56kN4t8aMabbexUT48HN4a36BVP2QNELkTgKEfCxkWaw9V3CH8LvS8AeL61RApFPeBnay6y",
  "key38": "4HadSA6PtXuVsQYQB1K7ukvnDkcYkvEJ5uhmaWFme9bRJLCM8Wq1gKAFhrGnct2D2dbRwjszzJ76P1edDyamJrYg",
  "key39": "4VLsgWwRDoQNAmxCzsFAXfpwuhmjvtX6TvGWmeDn35NAhyQ7JUimaVmZKDJHYeSPxcta4yjYxTooaLjkADLFAoUx",
  "key40": "4fPAPDrN3VBHGHXxLkn6rHuFMEHPxkTcPvcvFnw8DPzPq1wzgD7BxjThn7yd6imAgg4Z9NwoBVtJLkqSQ6Rn3ABv",
  "key41": "3e8BsrsQbPTzns4oFMrCpDgmeuqCfhoZgi6pkjro5RCY4sFfgTfJP2NccLCXNvXSoHbK13zXiaTePXyrf3JrbLDZ",
  "key42": "2C5j4rXJ5VPo4zsWBHj99JmWtAjfmY2fKguC5bTAnrAgLdcN6bn5HPo5BzMUuc5ybzLWLQvA4sSnyR2i6WLRQHHE",
  "key43": "1REVoY3EknaPCG98J4UDSkfKddP74r6VGFrM1WgbFBPnZgEkjAALokQC8VVA3dSz68TKXUhFFJmzqx6omaF92CE",
  "key44": "bH8drwGodXpRHzPgeixUvmrb1qmEzDSioTgRjaG7xMjimdNHebEe1uEtfZJUuVYRpZ7NYusPzpbwFAeyRPQczmX"
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
