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
    "sDt7hCdJwgWF11kagQRh9ELYwPJKNwgiCjnWNXk5d575oajc3MBExLdHoTXZqTZFc5QtfVNbdMJFMVSVyT68FKv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dwPmpc2TDjMeXYurHmmJvt5dtSfLEkqV615bcsFhim8MNLfUDG1hcYJBgxcZYMtsFwe2jsZAQJwnQycgsgYmhuF",
  "key1": "36fRQbBDUfoSGdTpxzSPzefVvE2iuoFkCXgUopLUqCn1TSxR7wGnxTpnwgNDnwGqtovqUKtSTVdfri4TGUqCrCgN",
  "key2": "5isTaBy4VRc2EUoZvxYudjfxMy2oHKg1HdS2U58bzuXNWYVXnp8H2NKuzQ7cJho8icXCAecy4XUTCj1ELimSNxgJ",
  "key3": "2GzjPQKcvVz8tfKsoeYKz6F8JX9tP2cXtbmmGbT9EmGKqkoSki5u34sP7XhevJS68tpHbQ889cNZFnocKvs34N6T",
  "key4": "4Nx9p5eXvTu8eEUdECxWQrPe26G746zm5P9JaJSQogVHgdjjyNqp8sK9jJQ8FGzxvWjzNLPw7BAnVm75tyrq3qbE",
  "key5": "5RLwshTuScbyYRvzeaeWVZVbnedjyv3j9PCyPnhB9gkRt2UHsdxJwnJDEFkZfvuQjHPrA6PAYzCiosRUCtSQzvh2",
  "key6": "2ebUYKMfdQDyxrwpCDi1xuDwKkKfHZouj7yTgS4FVXWL3TUXBxFiMJhJocv27fCa5LWRAftb6R9zrpjh5SGy2Sip",
  "key7": "61VftHAVryD9MKGbNfFWkzF6fKJU8vKGj7YwnNSYfH83dVYCNpCFwxjUs8zVceUFqz113Ge5jfnhkZu11xq3Uw5p",
  "key8": "65RBZ8TBdNUzRyHrtxqjnoQ3kZWiLRVWkQ9MJkmafboKSTiWwRPQx66DbDKbGTrJ1DGjeQhk89LrV1JX1RwQAKE8",
  "key9": "2AATj7qfjhB3k2kjjTE9VfSMAnhmXECykyT3YtYUma9vbL7Qfd6ug4ZE2tMnU3EC9Gpry7z2VjKjSPDL4Boa9sjn",
  "key10": "5M8bwZmEaXPzHywAzbzqvzR6EGChr6hgz8Lt5h6Kd6mVXEzFyGKsvMoyGNjpomRM1p5bevScZamrRHWVkzQgukKe",
  "key11": "5hkwX2rngpAd2tHbhS4FotmoxwK9fN1r37z4MqzyM792wHDoeXqcEbAHE1WKhvwdMB26o6EJS4Um3on9qsodf2Fz",
  "key12": "5GiP1vjWQHToH7hpZ7ecmRkpNbsdxGDVwD2eAR7qvoZTX4ccxpcVMFJMRpy6Sc1L9YcEZwnXajwXpZ3PVhFjeZN9",
  "key13": "29r8ZVPV9pS57c6RNG1Domkcda3sNpMNVFTL3vAYSs3VfZtfMoyznP7yEJYpNsb1cix13qnncddujMmfMjaXYKKA",
  "key14": "5yxuZrQr1UDk1marqmET5MxEQvSBA8tovbk5jJFVE8t3qDBDXc3VV4VZ5DVweZULRmWVtJ5JZk3ucqcE6idezeVu",
  "key15": "5u5hBKzfk6g6vLCgmX68ZTvb4qDBg1dykwrJrxcpuquzVg4PaZLFNe7Z6zCghuiXqfWMkB44u3k1w3ohCfY1FMR",
  "key16": "4qiC8fyDGiLzV3k7zx2rZ69ZZW7ve7pEatRSxjgiBBRHtzGEwadiDNKyomDrxDUdN6Dv38MKEvhyZSqo7ghJfj4u",
  "key17": "zPJEsc9BS2gXCSCoD9TFpTa9unL7nz2bhNmaWEBDiKj7fXtV21vH5fQ1EELvNZCUJToU7t5Y2bnWfsnhcyWqscn",
  "key18": "2VVcGUE9w9ENeNqMmPLQKiv6ZBb8oefWLqAr5q8WmcrqcqQPXGyTLYiyD5SNX5oP6ycKmUFxUaTTD5fipTLcZC9W",
  "key19": "P6ztvrN4RuJd9ETKv3wncDdCQjJiZBiekVF66BcxQ4a33KcMb4EoK5kNhWkPPrg7KcJBAMrDqUgQC4p3apLzy75",
  "key20": "3XfvBPZgQupLZoghw5eujHWv2GAzV1oeKPgje6bJzGogmFX9EXZwXj7uE8qAkF8yYr37zUkrEnArF126TiX1n57q",
  "key21": "5raNEbVdjDN8aVsRqGhKcsN6Y5LdSZ66fB3sKdSxx3Uwf3tyVkHxQxu1yLEwUjZiAQWP2huPRTsZ51cVhzqVtnce",
  "key22": "31Vx3VnT8mVUWnsJ2G4hZG4LEGD34HcWYDoppnEfP4VA5uBx8mw4k8Je3hBkMqrBe94ArR1DBgBA2hFxAb9tvPhw",
  "key23": "NM9XsZnj9fKnxM57XkLVvpTyZfVZpCyp45GYkXrx4T5L8dVfTEUxW3c3syDmaJEb4ozpo1BzqwnGu83nKCvXtgy",
  "key24": "3Ap9xguruVbjhHona2kkDccCnk5WM5S57pvtvobHyRr5WrbyT32bud1ayCDBaqcyDX4YgK3Wxu5HZCuQTBt7mYNY",
  "key25": "5bz4d9QFiX7aiUP1Ho4AFCBg3m1myYJh5E2TdqGneCtLoSNp4G4qy5EH2G3KnP8xE6qhvcCMtFzyje1LmKCozBMR",
  "key26": "4JyyQ8mevyCUSjmN5LXd46pZPHAwmJysu9NmgSB3BEA5XQ9MMjEAi84zmgyFkuzzEZhkHdKSp1D4GQ3xREkQp8Jq",
  "key27": "2mEwk1ZFNfb7oDNPzm5vsNs1aWRWhnNzuQk6ENTxpvJDdfSPu8jvDjG7G9Zh3RyuCwkYRSzeDNb5FsuVWfcq8Fpy",
  "key28": "2RkMVu7srQfrDKntTmCDsQMaT3rgpSixBkEQYdVWV1eGvNfRu9Tz2rynjdPRpStDaga1KwMztML7kmvgAUeHDGUU",
  "key29": "2EQFuLN2kjZeSnAH4YtJY9Qv4fYoWYvLycNyH5wgNHhfs1nbYnzuUGgrVqqyhG8mDDbSAHuBmQrbvSPo8Usv8DYv",
  "key30": "2NZ1birynWd5d6K5fY34x1pDx7WU57CAPScbPtKM1kNvEHiqLuMxTgizbsuWpxfafg8dBdjokf4ABdMqBGRenoWB",
  "key31": "2PCtzpnWeHt2HE2jRoi8V2LmAycpF7NdWwHzEmfh3JbziLqj4eB3bw1Z7wvwnj3JchakjuMKs3ZZKRzXViqwnatq",
  "key32": "sVypRW191Yzz1PxNxx8y8WevFUfGpCxipKRyuHYhrg3Hcp5gueAzABF8HedAoA9YRwDLEeL7Qo7VQwnNJpfZg77",
  "key33": "51RhDK2mrNG19FzHxvF3xey2osvw4a3vaFkqSsiCQv1N54q185vr3PLSGDzD9VabLZcNGkFFA2enKqmQ8bv9UqJc",
  "key34": "4UQ8gUHRcWc45PrbpJdahfidzmGCm6pQY9VUvqUgGoCeiavE2g36kqtWMA8JTpDBB1Z958G3fnzgHJWttRw3yxkt",
  "key35": "3YikY2s9dLuVcQYVqy3WPhyrPbHRFNBiz3ps1h723izgDBR9Xr7yvJQXA59JoSBGNgeVz4kdxUh6HfjMiJgwWiy9",
  "key36": "5u56czKo31nkWq5MuoYhpMbeYSEvnMyqBZoDKWxvHDNpmnwAB8xQVPXTzQRzjzJMnm3cYVBHJVxnz3f3oHL76bYm",
  "key37": "4YntiWNq6jdkyHg2YSS1jucWheciAh2FstqrY1DPR8FkA61KbV5USgfFTDGiQa1A5pH72iufbXqB63vcR2PwnhGm",
  "key38": "4BJAuHjUCbGLbaf31pJFwADWwmfzoyVLVFNaNBEpARrCpXL3kMWxVeEzeG3mer93A9tnwnNMXJPS2CMxvHyRexjp",
  "key39": "2jPq6Rv9Wxr9VGpiZcuSoicMKcir1N8bkdsBZLoEpF3dznCDnKpEicdwEknwN3cRSzEMMZgDxoHwcmfdez5Lb7ZV",
  "key40": "2mC2R1RpfNgRMtJhxgQm6hin3XCdvUuYTL7nejcvDocvdsQJJPf3dJVeAyxA6LUHSUsZ6SLKbFkdHoxj44fVGL2J",
  "key41": "5YBGY6RbpNeVVbbqUCdBGnhgrTTpNAJhhxjTmpDkGzrLxyaUyAQe1Y1jePNRMrTkEh8ir8wXaMAHhuHArYVwKMv9",
  "key42": "5NnRCjMpAZ1NzPZzh5QqckXa2his8rLrnMjv88WLf3B5MoxkD5sA3GFVKQZkvpCsSUuh2Fk8trEkMNAmsG7QPnH",
  "key43": "3Cg7jSfYYwnrLq2NbeiVXLVD5qCV6QA7vVofQqoMRZCzMVp7Yy2niT4fyaaR2Bt4ENtShmdZrHkV81Kb6kknVR9g",
  "key44": "q9RGs2j1UmwbM78djNCHeswhwHJBz81do2hHMeDdQMAzNn7kgz659PxYSKV6Tj7ztfGcxTfheQG5afAtUMMx5fT",
  "key45": "5nxNUmf4wXbTMeXayoPkWS1o8qEuzEBdzDroDyErdxk5N6b4s7WHdaGRQxgcELxwPJzWC4gT51Qv4pkgeAq6Whii",
  "key46": "t1Dua8KgLyrCJRsGzrpLF2RGBtXVbYCnBSB7r52UCVNHhRa28CmAW8DvXz43Uy2hGY9CGbpdnivoZw7hbMyz65A",
  "key47": "4hS8chjuELn6DeEbvxxxYigRq3Q7m9DNaPE19S2VhMoVjKtHNPkcmfiRWuBMn1TP81pvBuL5s4rf4k1VKPCrxQNC"
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
