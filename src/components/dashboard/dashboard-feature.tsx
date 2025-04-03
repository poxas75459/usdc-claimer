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
    "TKYhFriABg2oHxw9NMVxr28n6cPkmwit1dvuqNcwrbLk3AoLDjhxcNLzkzKPLtz4E3UT6vbeiSBNAVG18AwUqtK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58HbneS3uk3FRJt8BpW5SjKNNczArbNKtgQfWXqZHve7jGwY6ft5qfT8kHDKMnBAapGTED77rdQKYYeRPiL6zwAK",
  "key1": "5RSv3kAHww1j1i6XtANrzxv6FpJQPbuJKeTQNakEDJWC5WPztwhB2LpJujnFWJhhupk5qMWDQeFDXBd8cRGab3zZ",
  "key2": "4FZaa91o1WDogPjp84giuDHJS8HKUVc3u483hqznffNG3BAgcTMHy2b2nc1P6kUXKLs8GXb8x6n79YS5mJcdsB2x",
  "key3": "onWPYJoX4fU3Comon7KRzSJjehXfF2siEiycyMmMbiDLhjwoLVpHtYoiTe5AokZ5YueU13VrXPj6JpMSXAucNJ6",
  "key4": "2YauALWmVjCfuq9sjjmCv9uwkVwwEQMyGNqvZKbJ3JGExfuiCSScgLApZp6Gjk793nnqM2kMYuyWrfd4Qom8tpQ6",
  "key5": "4GicVqtScfFyuznpscGBCTKbSTGXdL7TX5K2Y5qrs8JsVocPz5zSRyDN5LShWFmrww1QPQdzm16KsdLtqS2D7Ehv",
  "key6": "3re8ChaUkdQjAKdmy5NmLhUKiryYsiQLYsUc9pBheGdiaM1MMarZrzneMbhvonkfL4hSVKZV35grLG3E8LmWj529",
  "key7": "3SQ1ZuBbEDfYtPpqJLo4tGFLUqWSad8ADmQ18teENtXQEG6P7SjHbsJTsA77dqXhSbp3axXWasxa8VAMCDp17Sjb",
  "key8": "VsCw57BCCXDhzxa1WfC5ZyoXC1CZAk2umZqrJeQWZmAZnnJ1oCZTH4jRKKJmsr2WsvmdBw3Pf7sekCw1hZDhu7M",
  "key9": "26SVgPAopAd5Vkv61rc4sD25qcENKgn9ZmKDPrFPaQ3Hwy1F67YVqWA6uEaRY2uy2FoHHHf5x7rxAoK1ZHocWqi8",
  "key10": "59Yjuk9riodvX6Bxoc8QX5CSCVzaToCuiHKxme5RmEKKUdubCvNMJW7TogNGrbKxqjLZSdMSzaC7K6PzsDcyE9vn",
  "key11": "jqmRbTynF45THcoPEjMiWLjmgEEm9bXgwXyVfhNndERnfJfMz9chedzj69WCRu9bQcf8q8h2cd9Q36KQ5LxfSqz",
  "key12": "aQgZ6kX23JPGcnFkBjqcithx2HT5ZM367jzBWWvSPKFtxXTXft4jPNAwymS4URuWjygAquM12HPY6tz5KYUanZ8",
  "key13": "2jWEmMGLYReAkA8Tfs42Q7JibacZr9syQb8HQ6HKHGGq12XCYMj4BN3vdHNWifoEb3XzoiUNwT3XnAkYxfPvqbTp",
  "key14": "34rDJVxgnVKCSTyHQuJRJoBDHzR2h5EccvdBgSzp3kyv2geh1gmaDLAw11GerqXb2Tze8od7aZjHyPiHHDmAtBYC",
  "key15": "gbZJnuGtePjXAMJ4ycLWWMGrAF9yWeE2tfGeGTYzK2yZqTMwEAAoW3UPMMrxG6zHMjCrNd7QSy9riq6iXWHCuaf",
  "key16": "37ftDywU61SZdBQXJBGXoyVUiTHFfKbQmfqfm74p8gpkAXRyZ9BFcDZ9Np4ZLbDu8jQtX6srFNnhUbyDNjjnKJ4A",
  "key17": "5KHriWENCpfSqhw3JJYto8Wsq4zNq4JqEoPoZ1U3PLengoBN1CRnwuu8jjKXHYda9AGN4EbaxAnuDN7JJ3PKc1fH",
  "key18": "28DxiSjdy1ZwtFqm3f6Bc72w1T61iRtnULFgkS4PaZZ16YdW2uNCkjtDXq2ESwXW2UnMpHhVsKnfPU68ZUf1z5R9",
  "key19": "2rpQeVLagG828kXQbJcrHzW5KyScBzYXFSjP39eMtMBfEryYw9uvFSxXj2AiP46TfRf2HdSEtA22TaZk1FUf5KGw",
  "key20": "2TyGUnNPfV6kYkZLgqMXgT4uFhu6b9jYJkHF1zcNziPnifMFYTa6RQi5pLcYHoPqP2QUgZuetKkwW6HBJYSrWQwH",
  "key21": "5sMyh4D9YoWqEpiaJAE5wDas7XeVyhzbSCYg3s4MQerB4qz2J4kYnMD8SAzpyzhomn3tiH1KYKDnd8JkzP66mKaK",
  "key22": "5V6PbchU91DWGfyom7hcnhidS2rioiafgZqJW7Vz8S9hmbLSZqNnG4LuSeiPpqaxbbdYENuEbjRSV97oXjAbyFMg",
  "key23": "2hHmAr34HEo2LrMV9u9eMKE7uspLpSvig2bGL7HeLJUB4z4uHzpZRYLf75tNGTViTRUAhbzheyG545usHxJwraGc",
  "key24": "3n1EybE7weS6DhfojcZC3n8eqPqEhfTbcPoY97R7vTUscdVRGAGrzr38QeMJqsQZ2N79V5nxNk9wctVUp26joFMx",
  "key25": "4vimqjRfZu1rFK8DrMTHFSsbqTT5v6pfKDJj5NXMUYxbBcV2JyYoRr8zyrxd6goS8vg9HLz8A8YQuFiHg4pgLshk",
  "key26": "3Ju1Ek7kopq9TJikzC4kht2UsdKVcRB5PH8B3hZW6KHf9m9sAdbyJE35xJPr54C86mc3zeReQhvJe4sK3j1MAPuw",
  "key27": "4XUMyoFsuo9wKWEitg7MqVzyzmHBSaUWBJowsXGV7FYozTk6H4yQDc6EEU2K8h6N4YEgQm9VHLiSL8JKBtEi8zWZ",
  "key28": "4UihH6txyCY1s9mNnxzSd4WNhK1KHDh1sXp4zNFCQktG1bRNPt9QnWxUaNoPV68YGEKBwNRCuNpvch4ABWRwhTXF",
  "key29": "33Pq9zF8HuTtjkU3dv2tW6a9RQKGpUkydqD5ykEJ293LcrHu6AbDJzT7UBpx1KbQM44U1H4Z5tgYuiwiaL7bCbbe",
  "key30": "3GurtkEgKgDZ1zua7HKTMc3w7Ui2gJGoxdHq2RcdQonq3sQhsdR3eQ9mNa5TG9dZbVuQfqxV2kiUnjhT1429ruoG",
  "key31": "3C4KT68JpkKHHYqjJ8L5u3FTC9PAXDTLBimcggEjgyspxiwpRFvY2Fc7Fppbipe1Lv7nz9wQp7QeQ32qbUvPKEJh",
  "key32": "XYZy9YkMSjAx76k22ub6B8uDqtwGBYTq2eFHmo5fFrqAASdYW8tQiB5CuYxczVjgxXP4q3QK4fak2uZayWbeRwr",
  "key33": "5bj6AJjYsTRjRbY7yKTpFCi5kwQFX8d8jmB6Sud2XdVymY4bTgRqCMgcPMFuW1RQDv9CqoUMTAQbaB9JrF2VmVyh",
  "key34": "ZSVbmS3EjaoRgeNnoyttu2WzFgWnczramVry7WN4Xtmjmrs1aadA1e73BZ9f9kLyVtfchxJsCGw7c5Ene5WrZKG",
  "key35": "5yrv1cmro4siLb9X6t5eDZ4QdZwZsWbpxMohCbrsRaJmRKx5fFgcqNf5Xn7XKK94PwfxdVyB6rNXRBRfVLbihxnu",
  "key36": "5tP4PMcoNDM1YX35SpqNoemVNdnBQRY3BDpD6rRZesnBrdPCBB8LnKPmFCUQPNZuhzn8BYye8hjF1evUE35Gkdrq",
  "key37": "2fSfaNbF9xgrLpp2yY2DfUYTobiCh5dbCCJcjTQZFtxyWBhywJM1jHgBfsEtWacvqTBLnA9iMaFMKM58kqVVdSd4",
  "key38": "273AqeBa8q8whqsVAmiYPA8n17W8XRUGowsvx5uUHV1AmSAD4XcjnZoZHrLs2sPgyubsjG18gCFnewJnfMTcEsZ3",
  "key39": "5U7mN6oSBf2X7FVLb8MeMJRkPC5CqPWXbTAApdpZtB6kgeoA8D6ytPAAW5gXqKAMmNUichTDBieS8GBy3UvE5Yvz",
  "key40": "3JxtPNohyE7Dxu5oVqXZULcyRczxsqeVJnzAJohgxaGkravQHW4CagLYDoBwVgffBHiUnWuwSTqwPhJ2F43kWTx",
  "key41": "FAJGPVdk4Da5P7hNRYXh43iQyh2Ez7RWHzCZQgnVaMRprZEc73T2tTJatTnznTJ365MASBJZTTcFKDajDY5ztVW",
  "key42": "2iGaLQ4LrmyxzZuApduLkVRvqLnrwCrTfiQCV15mLuAAoVKpUfX4DA2htxhbvoDf2kjq78MjSf7S8icFnbvrvRYU",
  "key43": "3jsGkhKwCJTjWJY18ixJ3Mx6AnmxkXrPoQ49sG2Pa21ffHS898MTgyez8dQHXbCoQoH7FeqpYkwSXbwjLNf9cTLZ",
  "key44": "4rC3cwrutxgGRVWE19hejtMBiS1YFUX9Rrc3WjcXh9xvPjh87xDGdmv9mWaZoTW6KLBTVim6Ug4Hk2SSAPRGadnA",
  "key45": "43cgxDvDi9Ufpw94awa77xku1xyDDd3PY34TR6ehqVeCbzAk7KhHW98X5kxNwASPvtLtnemHb3EXx7KgUY7ZKWBP",
  "key46": "2t9HWeasGQn13ncje9VKq4Q8JXKFyT6QgRDhsiG37CYrPYh2JtJMLA7svkfCQ49Hm8Ym8uoiK53ZkF7uwJZ8gLou",
  "key47": "429DTNn3FbMrf7WDTQS98WcDA7S9J1zxax2zKFrdt1LHo8RG5knfXcdnWor2ZypvTEF9MCwjQLseQTW75U28cGu3",
  "key48": "3kbEcCiG6nBP56ZTumQhHDLoFsH3eHQPxTKkdyEA31bho84E8FwmPvcvHarDoWhQ7hArPsvYUfgeJvSHxXrT2AWE",
  "key49": "5qzq8T5Ff7bmGmutw8gsiHLoLDkG4ubLV8i9qQddW52tahp2YtKraV4LBwFnJtQ67BFuznRJ4b4uTGj7ChxveLA1"
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
