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
    "3sJEcJA6W7dE1ViNhMbjFPvWpnRqGRiMcToeSU8BqLKDA9fSbSkN69i88RrE7gGH1rYeXKuCCLFMd9FWAaKw9Fp9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3V3V1MPj3oG5833xhB7rFvh7ouuFFjpXV8ohXdmVBZumK5jyk2ZZhQUFvEy3sw7QMykwbagkiecJw8Az3JWBHHwv",
  "key1": "314h7GYnstzoU3TDfE4wXCe37GFmBzTKLzptwS1xtYJKcJxCejiempjVbDuyGPGgNcueh4aSdqF783Nay3dVvzqy",
  "key2": "4bcdSny1BVWqThZLr2gKcUbYauAvs2V3nbFim3SXESEFSBapMwTKFaByQ8FbTStkSecAYP1LQme2HfMUzzNM7jCb",
  "key3": "26Hse8pNmvrPkEuFF1fm6njtcgeYim4N32Ss4ifG75zRn88hFyeao6trV2QYSwP9K7fbewmTC7Pr6ta27xqJHvGD",
  "key4": "2t9rDNvT1NHekhWLUFoXLisDhgRsphsAPmxnJdKLaGHJFh3NBtTTJSAnVrLA7wEcboeBXPHorn3TAsTmKzvjYfnC",
  "key5": "24G64WXBBAeAHnaLapkJaDz3kJZ47FrWKrDFQQkR5zq922L3LdDFR2HvFbzQRwzGksWE2V2xdTfiA9QtCTmh7BAm",
  "key6": "4XFydDPXef8KRpDPkmF9BcHekydWyfvaieQ7EDDC86bxmXtCodooV6BgXAoUwfMSoTP5taBJEaTFHy9rMtT8WFTn",
  "key7": "3WyujZgWPYfjareEs8G684fnj76MknMzvMMzy8iEVYYV5QZJcgGYKhwYwdKmx2prpCtAnHwLRt3ZrWXTv5VVDgZU",
  "key8": "5SQZ57BkAKUEUCXnjhzAwiJBQvUvP4Y6KSvP2ENT6nRHcE8PBBRkah9f9Qd2LQTqgjsCeQV8t2BXSguSUvxtFMkq",
  "key9": "3PjhgbWNSa1HJ35p2hUM5KuLt6ez85HiojTrRnDmnYeBWqFfp9W9Wnx8WX5F1C3u3wdTsPejHcNZ641A2wMQPvYD",
  "key10": "53J7RuPcUTUWqZc2wLCA9LbT7ssEFbBHui9FkQr57oBSLj7CaYJnWpmcR3EN7MLvwZm811Gz1gnVApbBD3DVX6Xu",
  "key11": "JJ5HctKb2vg9kqsRfcG4wJTEcqi2bJSG2uGVuyXShfxvTGTXaaq7KyzrYMJFvwDZfKV9HDaUa8b6M7iRqBVY4Bs",
  "key12": "5aXnxyvVkxGnsabMoUDFWE6KHLHVUG1TQqmp84G3oqvT9mAmF9qm2GYHSiqVzioCPwtrdrPtnJGZCMa7TK1fyHEN",
  "key13": "2Wj9ha33cFjm46WLiT5SaFGMV4KvvqmfhByGSfZWs2zj9YqxSAuRSW4W8fk2HK5mKKSGrmXX8tAatXZwmGzQWwGV",
  "key14": "uPmC1ftxNSpycSTmGTdSNZJphdVZbbow6N6ZD4d4G8Z6yjENXbqkJa4dTRpfTqsFfwtbSdXTp2Ncn86KZxaPE3e",
  "key15": "AHEaz43XQNVFSD2tXPK9ny4iBLzradnrNLErAaLPr9W6E3DhZ6HoHVxnd4ydSacRCBdEKjWH4wTEnbCPUoe1pNd",
  "key16": "25adKDSR5TTNYjVeHCFbamSUe6H7e37vx91VrDfeYT9i6v8bFKaEAbDcWrhUGejkzAMZ7TL3Xpqmm7dddfvRtRuo",
  "key17": "2uMtoXKBTLyN7vuknoErR7aUJHPgeRXFHrc2DsaAdVxu7exqk33wve9Bz2NU8Lmgy8KCiZhYKmewX9THhNqCcfKz",
  "key18": "2J3P57eQisQWZg9KSJz1mmdcwTnGv1nKciGaCkmyskfzWBNmZ84KD9MpA9XoEBDmDzECJYtiYYiUu71Eb7HumY29",
  "key19": "2fBNLxD2YTEDVrV2JjiDf6MoYu9hn6ZHjwnebtpyh8yMa378YZ1ztKRFnyPECM2UqcnXKGyhtHnQnV2LeLd1hFGk",
  "key20": "41rVJu4Dpu31rca5AwET3CdDmvmPyHobLzWLwZD6uew7yeDVRoJi6jgfKUMFidhxig357NZLZ7uZc9C2E35twPUb",
  "key21": "3S5ACGPNFURshGW4VNtJVq1UTvkCPXQUmigVMGABDZKTLmhH2WLtUEaGJyUyaxdyNa8Nc6osPdEGik2m6incDSo7",
  "key22": "554CbGJGzHRkGvmS6fJkqyXss1BdnbWwaQmngenRjdNL15Zf1jfXJhSDqPuHMi3wr6GD7Y3ZvvYiMe5rpq8kUYiP",
  "key23": "3vkqSdCrY2oHNAp3FrYN7nZrkesa447wrvMtxdhAhhe3eJrNe6vCqWfqe64fxH2Qv89sPSE3tY5G9uumWPzhCqVx",
  "key24": "3gWRER7Y2E564vuogp1h5efD8pcX7Y1QMxwXKuH6s1BiNqkB7VuEd93Zrcyv97kZz4zEK9wLB1NUnaZXqTqYsHto",
  "key25": "5BP5fEnNZfmesfsQNJsbu5c1i4NCZt963HiKb3o6MR6tLY369cwXivwjAxZhyMfdQAeFdQZ8CNPFPexH5UWiBfm7",
  "key26": "5MpNPbGh5bbCHPzVSR9zaLXTbNQ19c1dt7tfa4NB7gL3whn4H6t1Mrs6YWTzmyUxRJEinCs6G1ycYWxj7jk5fKoM",
  "key27": "7KGPMTW6rUBUrHkXySzKfdoYi5pbAFcE1TAB5D3Vs7NdsP2U21jgqHdNkQChn5fSo7EigzAXSSF3EGSnF4nPVeL",
  "key28": "3hboiaBDyYNEAok47YaU6yx3bBQiebPiJvh8UVv1LLiDhjADnPpsoyXYitLFSDzBYN2QSFpoJod4PnPgpHJwQA8q",
  "key29": "5bsWwVGWkd7MpBfrDB5ej6wBMffiLGgF63Bx5ZPx8PA5XZeZQCqRoJEjC1Rd1kvYJZWU6XuP8DDX5cCd3jsi91qC",
  "key30": "4ESv5RURo5fjimE2z7MVFHtfxmyzBg9e8S35LPa9FZV85w5it5UmPbuSQD3GBtnFpitjauaAapf6tqHXxpeGTvaX",
  "key31": "2UWWmDRrYGLJpdm4kDbGo2cAJNPYK1AusvVxNcCnGWzNejtBgqj3zC7kATzVXxt6k39M689TeVAV8VqgYzBWctpG",
  "key32": "AR94CJhCCiC4KTZryfdYRKyAdkaws32ANYAW4mAagr8d8joJYjLz5ppoLMzZ5taJ7VtQz8ZQuwHTztkTW2Hew1D",
  "key33": "5dTNVpQYEH4taWaktKUX7P8UVDr2PrxtoL3KQZY6KgYJwQgS9ASZQ7EfgMvcaFW6r52wfY9eFrVKhH4ZQo5zXiXz",
  "key34": "2RjCrWDUvySMaeoPtSJU3YF8Sn33i2cyoG5s22EL67zrVTKURwrz8WLVfiEBEGyZjpi6fnMAQKbK8fahFy6nxVHD",
  "key35": "4wo2UaDN78rifpaewbh3ahvYfci7kgbx5xngpopVf9ara8C63vRdMKMD46RCzvBDCQMR3rLs531mdSc7zzhBpRkk",
  "key36": "65y2qiNp1YizHt7kKZiCW2ZTAoFWrHBTEyL81Q26CUMUATLkrMPgBc2woWH61gCD5cDPp8m5qm4DuwsNxukBpSHF",
  "key37": "5PfAvrRLx9TzkQ5VWrQdNKkaUKDaHA7CFeDeEQsKTEc1ZUyqLsgKqCfDRR6RETdTRtsZwB6WbbPunohm5ikwbrwd",
  "key38": "bUY3Wf1gZdiGkNuxBV85vX5V2NDEr1shRSFXnkyE4Z4LEutiSaSj71tXSmu3AFhfHtmmkFr5QbJaQQCzJckXqDg",
  "key39": "2yFeUqUR2PL8X1myNkE5GRFyH1xB3un27AMeeJyqXy6EZJ8t1XvJu61gFZWQG6hvS9NacophBUjxpSfX8H3FhQZv",
  "key40": "2XNN86JrKrF9MdaqohDnRbQ6622hGXZ3VQChCnWbXgXXGhS6xqCCTjchhEn3hy9UzLkn4s5yEszxWQ3U3LhPHwf1",
  "key41": "5RcQ1z9pydH4ZPwu4d12SnvjQrohskYmDJEQNyFV6ZeVfBYg3z1LJvHpequb5cAgWjQnJRHi6D7ZyzveGdkZBHgJ",
  "key42": "3kH7hX9Ut9T6UPx6xGgYWRE2mR15rdAfQAHHYkwFcDxiiNdYJtCRyvVndMCTxHr5yE17XBttsEGJqoC9pepQP49v",
  "key43": "XNsYTxpLBv2XdKipV9MSTgDrUe9ydgeVmRakS9zpYpF1pSrbsTr7AfAPoyja41A5RoATURidrUqBoCt5duQ3USN"
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
