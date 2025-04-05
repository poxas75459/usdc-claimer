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
    "5tmsms4JT5oHbuemq7MgnRaShpmwfETxq3AoZqmXarxq5ThbH3iJYYexntwDubXXCTbHzw1M8NCxZmLH99VYPjws"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "327RpohKcwA5HdZ41XFJ5WC1mBaMh7P6tGT6NVKvTKFRcqF7xUuBuUYsdGB8oKDBdHns5wtJ8fdKRDG4KK3nW4tg",
  "key1": "4KZeMDXnH1ji6qsDJtqzSE7HpRUMuyTdnPRbDhrWo95p3FF6TVAakSdyvAHsD6hHt1dT9by7QUx9zxUvrVXQGW2Z",
  "key2": "2D26wF99FDtcAKDscFLrjRDawjxbUMoD393wFv2Pd7zndu29ecoQJbXdBi7efaNvU9NV4VHgCWj498VyGKKdE483",
  "key3": "3HXSucoMfVruWH99DQ8Bzt5QjvAJc9bwqsdERm2dXWJoTvg1NLx24kWoy2M4Ng3pUvM66dy9fppF5vpetYMBUJ6k",
  "key4": "5DGX5YEH22Q3mjetBWYU4ukbo1Mj3Jiy6JsKPiw9D6w4zrUeEhM9HPCaNcPwkmGMjTAkELMkCUeyYirjENxTPZ3M",
  "key5": "66wZ1BWLEyRjpy5buQ5N5DZuz3ge3SkSnHqzN2NzHqzZhmU3DMmmH9bte7zexGFi3mpyTLqHapP4BG5LMXd2prY4",
  "key6": "2rtzJk3oUEtghZbunDaVu5CsgZh8PY91K8tZHGQQSjEZ3cuJM9kvEHij29epQX1oDq8ELVEmWwP92gaUnkZB4zab",
  "key7": "4PjJPVz9maexyAdiJhu1KD18FSCU67j1M6dyErg7zYGm1tqmTPjzd7xRmrsuGkx6jSATnbb5M9FGLL7AoHYr5ph2",
  "key8": "2cKbhRbYb3YAiw6aL5HsEBRVMC2As5inDoG7cDE4zEVxXw9vhkB1aNX2Z3SMxireyfARKDoaxbqYTACpxoya3Sow",
  "key9": "2Wzbd6B9gxZxFdjz89y2LXEqeCpG2i7wby8JZhhJESq8jURC38EmZXExUBZPzRFJpQTEyi3V8EyxxPrnHw8CAYEj",
  "key10": "5Sk1eZv7aAe8xuWMzUpXUA6H67KSDiGh7Udbezv1kJc2UhQhRjiX2sbkgXpZHwtmNdeXJvvDfa9japYSdCV9f5Mq",
  "key11": "uVUYgeordgaN2N6Fy8NTGwmyoJQkpr7sNELSk3X775RA4ax5mvKMgGHQbuERPUc6C98gh7kTawVm39qJLE3svHn",
  "key12": "3WrDs6EZpqvDxSzcwGTpvh8e21z9GxXh8NFy1sViGsMJedEcWv4FbJtXsHK8MXx2HK88Gss1y2rNmKw1zQSbLWrF",
  "key13": "4N5iDU5ndpDEyscMmkSfbK2z23NgcEP5y7wMzL47X4cenATnxiGSipxwArB89UEVEx6Rv4QJq3dBsrr7TXQ17ykz",
  "key14": "3bi49Kooo4hk2ktBXWs2keeZuzHahsr7CFLJg1SFuDwfjbSPJq1TnjWkwQpJYp5jwakwj19BspL1M2CFzLWCgR88",
  "key15": "2N6hqix2yAFVNa3SWcfirvyMDTXuzjTNaNNWAcCFUXmE1nsinTgUrAp6QjyV1pZ72ZoUXek3Qtmcn4yzUWLj5ksx",
  "key16": "4GP3Unht58EtQHfmWAG1J6G7VvfxqWMtQsgNDuTNr24wYB5LTZAxjz6mSbbwBNwRp2PELdbjAxPH48GGwkadqXhZ",
  "key17": "2yqC7RcfUDAjtc4Fq6nmiQ3qUJWbAG7AZ8cjrJtenk1guy5YkviRaJpZaojM3LDwN15DihJF84rdSYZqY3r8wFGc",
  "key18": "2armtg2poFc2k6pxq1Y5jRdpEzdnhHC35VcxDSNRaUERcLqyGVbegwqVi8fgwkR9DkNFn9PkopdcKoxHaY3FCc1g",
  "key19": "55zeufVb2kN7EYtEn2zgjX51eVtebaKgvy1ehUqBhtBCiK5kYdQBZMELCRLTgfxWf1wNELfwNBno4vaWUzkjBwjg",
  "key20": "26kZZ4iYous9qXQeGabS7nWHJvjDsBRhMU5yq9kV1nAtpHw3nuqKwzwxeJ9seZ8avpgE7DPucsEMSFBz8dKkUzQ3",
  "key21": "3xZNSMQaQi5nwbe4isZQS3JWQivcjMk1Uk4RhkpuduwU6v286pahqGsoZJZnpgsvHQBYkF5jLnoYe2dK2kjX3cPj",
  "key22": "gwzV1CnX5iEfrtoNLm85zDJMSRv16G5jYDWsvtnKSYMJDoZUdLiGqrNkYuUN6tDHsmCyji8eZfHYSHNTAyj3Kw4",
  "key23": "4VQ8nm3fvWvNV3feQHnTaN7FEcJkydJzW2bkKhUGREESmj8ehZ5GkYQKnYXLzvWvUtb1dM2WpsNqMj8N5zaeTtC9",
  "key24": "29GByFQ9sU3dtd5J1YVP2VjFEyJ4fiYE4vK9UGhYpZ3VaCbnF4zULk9CdSKZTGXZTzdPSnJXijuvUPjtxL3ur59f",
  "key25": "D5GQCjtNwPDHboRZZUarXups5q6FJUkgAccK5dDMXiNz25K2f7AjzMNtsofX5fGqymsW8sZGY3XYj3tz91ppG5v",
  "key26": "5ydsUgTQ5qmEgVH2YGWid3Q7v1vuSsmvvgSRzgL6A3Y4cS8SqowLp4akc18JPkFL2RujdG11Zir2PWWhTDqg6zVo",
  "key27": "2QPNkDLT4Npkcn4MQXcVvy9VZmZcABUZJwDmwQGWYRbdR3UL9V6zVAUZW8BTXnhYU7N1ixeiXY4HuEsuULC32nGV",
  "key28": "3W9CkQqmuVqTFxCr1kQFmWHJZMxdHAKCYivzgvzRoRDsxwrwYry8tVp4sopUA3ehaaAmzTyejD6Kc8HNdfmUamTJ",
  "key29": "xDzyKBAHjeWWkXnNFZxPW82UU5CUYGyeYZ2itv3U3sJVdLo28kErPxxY9SnVVXxTJSWykJWPr4aoaoYi31TQnBv",
  "key30": "kUaFBfWwr9ggwbYUDEzZNqrzSwWeMfLVs9TEqFoqi4hdhFr6pHjaKTGSvNzvAtkDQ1UkLwh6wmFw1pnzENGdyJ1",
  "key31": "2CEwANW5EZLZMwSc5RKxESQJUj2ADJmad2hg66UoaoJbbqhi6AVLnNK5jYs8ZSWYfiCu969qhDFBaGA4iP28cTnc",
  "key32": "4uhdL12kMZQSfDEwBv99JbMDs9yLT35JRqs2QETWu9vwqFfsCaqkgkT95JPtcjkcTiWhiN41BpsFgV8Rz57tMnr6",
  "key33": "4g3R8wC3MGBP1LJPZuvEozxH853ZhvgqvdGFFKAYy35k1xkGRLkBQihZ43JqAGA54Quo9ZcxWyL6d2ojPihBTCrE",
  "key34": "2iCGSqijdZzeZLupfUDtigGSnkxVKFuKqJkifq2MGAbCCeJqfZrSmFTzoZuWmJ4Kgx2gCFMJzyi4iLmzMejTfvZp",
  "key35": "5xvur26aZiErhrwi7ThGv1D34G9cvntdc8Zs7QaLtD39ETm1U9aZECsxUSvULafp7rpcLi1TWY3j6AgQuo75nZJJ",
  "key36": "4yocL6JgV5y1cQsUbZqAC2UkS7aiXCFjM63LXYYgaEcpwCZkzEM3961PSzZfYvd9eH163Xy68oRWbBFnMi5ZfpeH",
  "key37": "5g8kYZdxoyxQjtHj1XqJYhiCh635BPqYkBhJPZ56D7otvAL6GVLU1LFnHQSmWWwigmq5AdUiWtdAD7cVxPJF4rmX",
  "key38": "r7H4SrV5UqJ4QBQraHigaTiguWxvfB48H6ZtBDhcgmcSyELbBmXmvpVdyWs4agrqW5gGKNNPoWdpsPaUdez57Vu",
  "key39": "4pw3T8hqxT873mC4JQuvCtqHDtpq2aVV7y8ysXre87Zy8DxdHRXapp41u9p1x9KP9j4LxD9TxgxRFDpKee7yz1jt",
  "key40": "3Eb7YvbHAdxQNAabXQWj82zHbzgy6iQnsmPUNnB1CU6wFr287Yn7GYCdovgRTxfzyogPUjkEBt7PoZeRdBgoSKAB",
  "key41": "37knFdbFJ15QQtGxA5P1pGPLswHkq7ipxGK9xub9UupGYdK81acd9wt5o915HPSXpoP2XpJQ743SYxfstzFatdSG",
  "key42": "g4wYg84zTdTXVE3XptRN3F8AzPiQV6thuGurdAN9TTpntmGBB8JHf1Rh6doiPy1yvBtYETE3onG6KVVbar8and9",
  "key43": "2XqbYjrD8ipJzgBSPAhrz8RF2YURQUTL3hMWpijCcwXo7Fk8YfiHfoSQFEnhGv3te71FWsGJK5jdyXWSC83ZwiDa",
  "key44": "4M5wmiUUC4eunGrVsK3AFfSyrhbmuRRwo9BsBAG3i7siDqSqrRaREzMJ6K94oFPe2xRaRuf2jGRofKrbU82vBmp2"
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
