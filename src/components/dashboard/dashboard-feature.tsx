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
    "4Rg8ynRbG9YMoQWZ4v1evdAEVJRcz2sZ8BC2eYwNJbjtsBDKxikpWPpdXXH1GNWAhyWdcnNfMYd3upavniUkJyjM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1jAVyXPf8petUJb8oiQuSs1cznLGUknLArw6c738jkFvGpigYJsHFDoZtpKyU5KFEmombkZQQfgTe1sAMWkXZ7o",
  "key1": "4ceEwbHvxC331AXcPY2etFmvKD1bs52jbut3wnziRm39NCSzSWeZ9EsCRNJBFJvPVhNrpiaXASyjuefS12dd43h2",
  "key2": "hz3dV76mE1C8wsVi9ucJb1LxWNVutjzwqSLoPBcDE8pi6xncEGCijm51bPpopsuVtCwhNNT8mwgAwFDgvUBbGS1",
  "key3": "3QFgVqrsL1UtF2vFD2gnHKeUqvWJxL3BvFAsRWmjPCz7FjXTGM5PbGmyPumaWgKuU5XiWqF4KCCMqFUEmQJ2gGnx",
  "key4": "66dDY2HqvysQvWEzGU95MmsjkmJqKPRx8KSriDv6WwTnXxGFsTPjqZhAeHs8kbkmr2k956SF2nNfVaFtuHQaiiLT",
  "key5": "2srQcshTbVWLgC1WueDF6f7HBJ6xjWsLUjYdRDDkJjPuJ2Gu9uRmgohrAkcutuJnc5f8VZjcCf8CjH5yJZhKLyLa",
  "key6": "5tPx2DoD1QvnVRrTqtowxz1HzBwuQ9BUojDGUafRThuRhhhRuaReue6GhPL2pZ2b6PCUEfZA66whKcVMmapreNCN",
  "key7": "28oHWZShacNb6SFEVVUUDx4L2rjQqetbN8iRFacRE8Cmf5qWEU85FDdZB2Bk33QcggCYXJVKPMhSyancz3qkdXUe",
  "key8": "4Jq9VeTFfDoC8qCVzcraChHysKGcVKPAXFLQtzoXkuknJbucpmgXSkfFbTEBKY1vG53kCM9w1LEGyVMvJs1NZHgX",
  "key9": "n2unzddBf8PJA9LNHQWptMeeAaY4r2jQX8S62zWGv1ULcmkuUpce8Hosa4pKGPKTdNZr7jzU1y3nvP3Rmk15hXV",
  "key10": "3W3JSbegsTXsTX1NkoBHxZ5aC4kvMiczcZCoWshvA4khfmS9ANXNzVv9L7SRkggwKXgTDFSVLDDNvAn8SQjZmivK",
  "key11": "Ezpw3Ph5CjoJ7oFZod3iuQK1ygqvcuj8dTWndNsHbrsRJDdanM6aNAZJZY7MJxer56EzEPQmwoe2ncQMWv4yZEc",
  "key12": "2VWzo3zjZiaWCYhFK4EM59BVyCDgEQUGEFfrZiJouMMmNa7oSPgYJdXA3YwHti4sF5kz44Gx3YZqWzdtr7sMyoFB",
  "key13": "XBT9k8UbDGXDEesQjFzvdAopGGPqavb4uXMjtRtzGsqAAEsgaG8rvbfvBu4DM16GT1X66x4nBZS2EN3bdErBB2Z",
  "key14": "3CphqXhX73nbP4Ax2tQYRr1fjMpQRiNmsFWdckKnWDAQcvn4hj7aVJPgty2JxcPWNc1x2TA5mKDcqqS4jbfyMdYL",
  "key15": "4TNSB9iupfYooprUB8ZWWH2nH1Q3jSPfDUpP6cH7r5mmQrRN1RnNXW8Mfo1LS23MGLqBevr3vp5e9pMib7PjA5rL",
  "key16": "4DWquSCHzuESnLX5VTWrfcY9U6PVXusQSkqbePQFaEfgis7kA88vBEUd8tb5VvRboppXZMU49uLTR2gj5KFhhDZT",
  "key17": "4mtfRrUnnjSXFWTg7mmYw1WBGscnMmo39C3BALgAQKEmmXmTFxx6kt6fGWeRXtsYRrzomz4F5jenoD9n5KQ8V9bq",
  "key18": "5sqLY83n9BpKrUzsBW9R38b3tYCqHFQrHwPgmx3XH73yBB5QRQ1YNHy6Lqr8sF7FR9T6tMVPw4Q68GZfRXwvfpv6",
  "key19": "29GfUYCTu3DpwupVuk1JYu6bPbSh9cF9dddqNUnu4j5vbVRandVgxuB6brHh5w3Hw74ZMiZ8w6uZEKY33EtGBQup",
  "key20": "5bhGgtFM5XW2NpNMmJN4QkPpCG7WjUBKktrDinyvX2EJfQuWfKHf1bKJTGfQYd8qJyAAiWkg8jBpmYTePry2gfK5",
  "key21": "2mJtJTW3PiUPPmRkfTwbscxevYi5wTwWeh9FSU1hRynWXVbb2mWUq1QjYQyqWYNd5dPF39jqdDvLxE1mkNxWjgXY",
  "key22": "3R1mkr3ZDrqNFmyhhPswUndzFqjVfrvh49PZDN6Y259Ud7kvePMkeSwydXr8jQAevjv5xtsbp1EuouybFgefp2ZQ",
  "key23": "3LnjuAexZhxAkiMotNfbu4orcSudM7xnpiFbDYFzEvXSdK6zkaPV1onappCQXgprN86zxFwj3PADaQZW2F5pmrLg",
  "key24": "3tZj6W997bxgSngxH1U3H9qjcPA3ztyQPKY8jxzjnYsHm7xe7bwvVrDtp9UNoGxVb13EVLymNvs5p9ynLKNFYPh4",
  "key25": "3m1ZaV55n2kwV91hRtyKVaSnoDyatmu7eb2sgmvoY3DXXY8MMbPkTJ4BsykzCwH3oiC4J7EVHayGF2LBGzT6CNSk",
  "key26": "2CS1VYsbrTfw3B92qSE9CuSMez1MejjabPUj3rfGKw4wMP69aUoHkdcQLDoKfGfZn6ZAx6hohev7kdq73FCgtAoc",
  "key27": "5oeNJnk4XyGnoT5rsokpx9M3wptQP5ncWx43enWnqmYWKtpqmkopev3Ho1eJmAmyoCQcWcWJUABmGqp1LssXBKoV",
  "key28": "ZaLTx4NpRsiTyZ2NtbAnaxscdSNHjmrEhFWuDrc6u6dpRG8F5AF7GntoQ2hKuNy8s6MdKNAAipDKU1QPkb7cSGd",
  "key29": "3eGEjQ3ieJPbAYoCu9FenoR6DztV2krWMNUqdPE2ULNtjYKCkUVU3uy4QJNzr9h9odPAvbH9ounuzE4L1VhkYzyh",
  "key30": "5b55Ar53qXJENjGn4eXZ8g7iMLMMscUZU6BZYVkSJQKumX5PDyn2ugAgtYvmq1cbXxPcUAGEHpEi4Se2aTUFB55j",
  "key31": "2ijSoBuzoNnVHGaixc3Py4gYos9kTcn6j4rMVXXeL7ueWc5oTu2BU3rMXPZEbqtaoc7HohsJxkozxay8ettqfcKu",
  "key32": "5AGxzRUQy2P1rFHMt6zHea63jWw5GZsZPtELG5wqkXZVL9NV7nsTF1fxVvxUJCDJZwyyWAibGNTgmoT6pLyWGbVw",
  "key33": "4Gk98x4wcjZrTJkBdeaz5JBKGFwSjEqks9z2htu8yHktaXiR9mTz98h6f7YY2ByLDnZAaqHBQqYFhEGgojJeiZox",
  "key34": "4qw2hKFmJCZcdSLj7ECrmbTq4CnorhnbZojHv8BMgMPSpw7f6xzFnK6zyPFXXSLHwcPYm9zmzrjSC7cxmpVEuHCr",
  "key35": "3TxptBParq8Hfu23DeVMBPkRF7QWdt5F4iKbMTciN3KJ4dyppmrWE4pd7GRRpqQrUtARHxpBkhDFh6Tb3P8tHcoj",
  "key36": "4ddcTJJSZXd7fpAEkq9cJfPQDMEPbxoJz3TF2w72uCSNxSTw7pBPQTS4jXisqv9xt3cLmLkc8mSpEihS2B3q5aVV",
  "key37": "f56pk2EdPWHBoJAMJ7oGDe1THgxvJMLeq43EJmzCii7nH5CefGpzSacJn3hyT1QG4ZKRnCEJ7p8TjXdbhkAhoij",
  "key38": "4yo4zx11DnBSoD4j3sKt9GaaY2nr34vydoTgMpmXjyeW6pS5Si2NrVDtwPGP9XHhRFFnUmaMfon6DxYbZGFaJzbb",
  "key39": "3jzLdBtM6TVfjqMVVPSyzsvrgxdCtxX99j9DdvKQ9bHRNbi2KnwwJMb2UMz1t7bu3XHtFZpPRcPVHNqvXQ4N9BSE",
  "key40": "2duhrJbZFtzC9hQ7wqWM6F15NY4Q9WHZKV5C1qwYNjqCiu2swRVv4T67YabzDszj6s9dVPgyZnztyywx99joZHzn",
  "key41": "3M4TzmvVKNscwebS1sKb78BgStCgY4VjF4Qnm3cCADjDrXhLCwSSw4H4sikCQQ99zJYuagX19Fm24MyGmMHzrkxP",
  "key42": "4MTNCU179krzAQKCVmcnFz8J6gh1HbtcKR2t5ZmVJ8w1oynbCCpdWx936ubbMWSQRgnNyDFkEtW279jT7tPamEnq",
  "key43": "4B6jW5oJakfqzPFA8WQAvL6MznpBUeNqBBiXiCXonRJSvTBeKFzL1XQvLSYWG5sHS9p7YfbSjzNh3kg5heVsxUrD",
  "key44": "3pp1KkiZtV18jRfXttjrwuhJZER6jaiuRjNgZFL4Kq6tf2wgg56fpGmLn5qMWs6khH4hBv7godbD2pbxnP7Fb8Vd",
  "key45": "VbrVoEjqJCgsGL3QzdCdpL46q6DfAs89EXDH9zoYitJsishs4KU9QWhJh3wYkmVmSjY1GMTNABfheHAohCtQ6Ca",
  "key46": "DixdwagbuiaZjKQiT56g5yrDGLHVwnV7UMC5cHSPVovZmX1btdagUDCbysF8vHoNfQRk8FgNZRCTbkKeJ5s7x9z",
  "key47": "3RvcDehaNAmEYR96yggP8NTdd4o6CAXZcc8arzfcSyxdqPP8wyYB8eS1QdALUyPyCZ7jCKu1E3DiKTMwocX75JV8"
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
