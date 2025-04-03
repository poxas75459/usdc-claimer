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
    "21pgiH14VXXfbtL1aG8TPamSrsrCfD8R2J3XYEbtJht7tkq8aGquqEtj9kThfBRQoEQ89sVUwF7ADLayK5H5vpDc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dcfHW9XgXvJHHSFxR4ARbE3gZYb9qXs47JjHaRcZJZJGWLYxYyCfkxkc4sEUecUDh8769iEKqFRJy4iQ9nXcPfP",
  "key1": "zZ7o2Kc5VcRLyuQ2CepWpX6RtEDjkidCoe8Fx8YWjh3XX7cVRF42AgmsW77PhoLcMewG1iZhhmtMTe4cPCr7p2T",
  "key2": "3g7GTyBp1irm9NYm4KnpWVBfX6ae1h3kfp8GBCi6rQCkMLbzR4yD1zQCNYZS5ots1wCBGDxa7qvMJ6QcSjNpZ3WV",
  "key3": "26BPLCAjhLpu6KPV6ZrAzVxmhhStyPpYxCN71wbRh4KmUpK3rDG2Zyngk1Yd37fdFph4UWRjmTKei3tCcnRQMRP7",
  "key4": "2z5wrhQDKRe9KCUm69padSEUWHFvfJvQeEqvPmrVxeniygrDw8iX2SWpuZLZNN8mRtrGz6BZX3kBV5TuxexV3qL6",
  "key5": "2TcXA4C1jeHevY84ZFdC3ptbEjLLyg4AAqUjLbJK4e8Rdb5iYpNBHrcUUdSknMxwVdkrn5vqqKrJX1gatWpx7qVj",
  "key6": "2TMEnfsMW1AYhNL6KNsxUNigpMui7E5y2Bwxm1jDmMdvU5b44fZNGNRagVGaAtKNs8Wo4FtakSSf7oTCFFn6tdTb",
  "key7": "WDLosiZpDAut67X2aCq1KwRVxbbu8C5bCmZoebWvUdTBTH2VxCQKCj22t3qJXwsvYZJKtMK6ALo2EXvkN5hSR34",
  "key8": "63wVDKMsTvpuw7WVHWx3vNkdVDu8WN1EHUTRGXLhLA7yEaDGZWCqmEVzL35nykbJmCBvwYcsvL3vsmkZxFp2U5TT",
  "key9": "2ZVEnX4cYM4qbXer1duV8vcx35KZnxpH8WzxA6mPrNCtpmLzHQVJv44LL8shaoSLwgG34pYWaxhjHdjE3CGnubnp",
  "key10": "JNHa9xDGBrgQtLYLJeoTe1ty6vuXFo9aRsodGiVzrrYwE9CxAZ4EHwB6dKu6qVCECZyw4FRTsXE3QYLfZWY1Kb7",
  "key11": "5GQnMhDxf5EviBUA1TcfhzeZvhsyTB3Yz4XrcKuvaqCk2tpSEB5cwCLki2WtM3zqgeRka9S38MnTjRhzBGcmTgpF",
  "key12": "3jtK8Ncj9xW1KrUEWCvyvechaBCuFWbFWxxd65Ae8wDGAXCETUhJqVPKVsa9ekXPewLtR3uDukSvjaehoXwDtkvj",
  "key13": "awUCwikENoqbEQQd3VRXbq5QfaZdQNUxEJ33MFdZ4gVsJUwnw2RaYuQcHUiqCacNDKrJyjAydzsnen8N6rk1bh7",
  "key14": "3tjfVPEUfFcaUX9wCcZEZSHnrTch3MDa3Y5rWtjy4koAQgPWeVNAc4USUpTXeCAJsA7gQi4M8Dzx4upRJMEvAGCq",
  "key15": "5sBYYRLjiirAiXeRx2jZqsojGUYB1NxZBBUwhmi1MM6pJZJJTNa4D9xH7EPESAwcF3TRZzFEwdbwbbwwCS6UKxj1",
  "key16": "3kCL3u7i9kJWe8k5VNdggFg7Fxt91gi7vvAEPqwctTnG9Yp4rYhMKLA64w7CYX9QzMeeUZ16ByZCuVXV7jU8MVe2",
  "key17": "nmJjEF5CezxkiTPXskrwPA6311zVLNwkHNC9gitTZMM9mej2CGGZg2aQV79YrJ78ndx6Wj1YBqKcpxKPFPThig5",
  "key18": "3bN2mjnfC32GQNbNk6REDjEkWmwfUHfJfadxV2piMWGFNTRuB2bW93Z8RXdb486A63F6hCeRymemm4nSg4bQPnYg",
  "key19": "2owVmVeUUFXe6CbDqXeVGHyURd1gTmHeCq2ASe5y7559B5i9GgWuyFy6htQiJGQhovYp6CV4CFH1nD7dcUPNGKwP",
  "key20": "5QwArjvf7yz8yNtznskvd1QkWYq6MsBBFsYkZbVx4LbVYX8PUfGxVQCy4whHZ4JgWd5djucn8QDXcDaLsCVwZY2T",
  "key21": "a9vibSX5DDrhFSoLQS4Mdbm3FKQXwPo5SkNze7pjuNAQTLb5EFc7vGBdbXwcuDaGg41YuzsqfcJ3eEaonY2AvxR",
  "key22": "3VCYoncbjVrh5DXzRs6Pkqi3Gh7CSk4h1nHCmfaqpNYQiRAfJPBkb4E6LD1W1ujw4XL7TvbYYnN792Jy7rd81z54",
  "key23": "a7Tq4TRHJc8Ki23fma9kMb98czuCNbSWvfVPfQxePEHbVxx1i9pB6tAkM2bRYFNWYiLpyRDqV3xJLXDDTJwdSSf",
  "key24": "3Gv8s8BHLaAMTYoyUHFviixJYLWL8jKh13KQyUzMifH9krNz81A98aXjQxSKMViCdUKWZw5A9XotjxB7fjBtJsYL",
  "key25": "25Y11ftPfCPsNFu4PkJfHWV1eFDjpL1GWtDNa8qwpjFPWUND17bFXybrhCmgnVtsRqVYeRjXJ6BhZ2NfBceLjfXt",
  "key26": "67ahmNrmD6DeUG9YT4H5UWggPXzNxt7SDSYniLUmsAu3ioK3mrLrAAgXwU1DCQLLp6GiYBPeMu46EUm5xfQZnm8k",
  "key27": "pcgRfeaH2bKgzSBT5fMYGtyptdYdKvuATyTD2VFQoawuiedmLyLntDcy8TeMkFSKyDQUHkT6W2PkpfB8RFBa4Fg",
  "key28": "HHc3h986HFC3yVrPB6e2wqCp1bBww66oBWmBMU2uvFaaN4X6TsFTZb8aDp2NDV6YZyws93vLtBAd6nsVNqadqJY",
  "key29": "63a9XGPmwZoLqvBonFa8q5YFEU2pspytqjwj3xmMxCQKU2TbJRxbfRY7xpfsJtWWmbGhChLXA5pXW1zfZSUtMSNj",
  "key30": "5CdNHWUqGTEUwsNy247AqrJ5frjzFcpH6fCrmamkPrzmWuhhbQk267YC5E8cC1fvycmoLMNhTjgUEE5wQQz9beT5",
  "key31": "3x5teMp9zrkdcnpt6UqfW4qgWqpWqq2vK1xSHkrE6AybGnNYcj3Eh5okAgjCMypd5pSLdWgLq3Vzor9tuC8WfBUg",
  "key32": "37F9uiTve6urLL1pyysG3CsEPVgGucp2JbuinbdDrZ8tA287ZARynHphQk1KWS6YxuEsHEQp2rJq38yQwVgXjmRT",
  "key33": "4ogETyGHDYNEQuURtcbF7Ds8mzSDRKjgLQC2ZXcTdYTUyLL6yCYMm4zkknHV3uVWzCoqupTUv9qjtHPPv9vKN8ua",
  "key34": "2QLYniZ2GViP4YvMJvxwTKVQMDixdGPzTYjZn1rhwCDak1hsYr1vdVikz2NwzaaSgt7GEnBQWdxX81eEikzEiWgS",
  "key35": "2qoHRXgTd5GeK4HhiqFKHsP4DJ8zgsCLm6DDVYmQyYut9qufP92gzb1rB3cUdVJJdq7fekJdkU7bm1DyzmjpF53H",
  "key36": "3VLbtHwXWD6DxeXThvqGdbDxfinpKhiMrxvpnimtHzmMNcpziTHHWtLcGDW72mqERWjdZcDev7vYQ9g54FGJLvVL",
  "key37": "2Dt6sLricfwTxwg9pFV1Yvey4r4FP8qktb9nEa73PVVY3S5nBa6uFJADzhYvfVBLPksWWoD3DN61BaaTtEbCCMRm",
  "key38": "4skDRywH9JE1h8i2MQg4z1AEi97Us7GTZ2YfeQKKqQdGxLWnJ5ouaGRc2SmdHjERZYRtCAVvWXFy6dELxaio6tPq",
  "key39": "5M2ycu56UXjSDW5BXBe9sgPQoJR4s7dtBi59VL2xwX5NyCg2ZADSCDRhWiNNaiCh1yTQibYcX5aKz7aAQzMmSK6J",
  "key40": "3Hb2FSuFNdfFp3f7BKu9kR6XdYJzhrX2jSPnodYfWfCGnj8aTxWcUiy4a8YPvTWmUXqJ89rCU3SjxowV5DgikYtH",
  "key41": "253yYQJmcniyJckk9bkJDWiDEdCFXFdyWnzdpCkYhLLcwQMghhxVUrrXmJ3BqXh9vbymibhqJXDQbACQimeBoBCe",
  "key42": "FKieCQKUAJekJcJ3Hpzv1EZc41wWZ2QQnyyRvEKNWGioWa5mD8gK9wdWjsGaeaQrtgcaoARfQWz4NfcKqYwiv9V",
  "key43": "4wt9cacTPhgeUh7JrnRk7onKcK9mPc7Wtpe8Rmm9A7KreiyfsJmkWuMCWEuVoZuweHkx5L2G2mgiq854FqwsWLPy",
  "key44": "67BCTScTnU47gFd1Zk9fATzrSijEnvHS1aBLrhwCsLcRq2fxHnBxz2WGigTnCMMFbG2tfAXMeSeWCTMCLzXLHC56",
  "key45": "59PuLndmMt2DE834fSDdxJX1LiaVTBCCCQECrH5gkag2vW8HpTosNvqNBdtUeFLmJkSpr7wQLjc6URoVZ4gfGpRU",
  "key46": "uy39v1MLCh65Yxm6J9yGnQztifwxELU3NqPb7W2s46LNqryj29Pgf3PcRVwvUHkBbXxqWmBhTrKzXM8Z8kwWfK1",
  "key47": "4eExSJh4m7a33wkwEUi9o4GxFdEoux5girEjNPheBMJb26n6U9eUGR3DrRA4cfybmqadsDs5aZDhLR3iECUEJtqj",
  "key48": "5TsKL77PgowS8LcDX83ECiXcU4tvkzfiTotnqPzodcEZQGq5diqpdRSN9eBXGKuRhBhTkhW27D433ZQk9arcesi5",
  "key49": "4U99Vbw1Aw5a5fgQrCNurLMg69YxSj8HHhL6zBd66BK7fFbH39oWrAyNeq8cP4B8qymAS63JN4tGKmLESUo8mGxw"
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
