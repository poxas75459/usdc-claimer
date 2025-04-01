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
    "511EVm2ACJtms1rVMWBHvEb6rTfVKDaXzo887v3Bb36fTvFDoc3GbEHKS75u37CEAn7LD51hgDXcXdBoS7wzWYQX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XuCTYZA73QusJkrkZNTtNezJoZKC5NhL2v7UYyAKw5qUUdTvKpfnYHQgonxaEKG781bkcWdx86XEDryqmkvuG4j",
  "key1": "2Wd7RGjRsbM1HumaarXYW96YipbJ1HhQ1TDoK3aNEjbsL5ARS4aUfKnch2TTR9UoxYXQMP2gTPv6x6yU3tonCTd4",
  "key2": "5qW5YSBaEP7pUDVGDqmKHgNscBfELqG2fBLZ8WpCY2LJowNckHrLMeE55AvK8w17t7QvzJ1NbDA2jUiqUivBahj3",
  "key3": "vv2GwAijdDzwbptJ2aYLbtRXzX1FxgdmxSD4RbuLw3YWsNeGix39YBka5iksXMNsu2mW2d9q35oJib8hw4A6rV8",
  "key4": "31XtUgKXKpcWiGkWhMJviym3uFYkRxZfEyxkuFSRfBbN7MfDzk8tJQbehZLEJ997eh3FUkTHPaXVn8VGLCBvehnd",
  "key5": "5Q9tb8dWW3S9ZZ9Pv4ZThu56N6dhBaJVzefUZbC445744syWKpheqJ3N6HX67WoLHiydvP3YzmzQyGG55Rnm47sD",
  "key6": "4Z8bujaS6o1jmasxZRZezanL6eteGb8Bo8Q6KWMR2rNmDvjx6YqrK3FjcBpkDpNtcspwRjRfsDqz9j7FULT2gsr8",
  "key7": "54bam5wQotHHrME38e8xHHeY6L6WWyqT9dQBizfZnU7Yu1xi5coNW7wxb53K4xFBT2FsLFa5wpef2yjcnhAks8UA",
  "key8": "2qneGwxDnCott4nSYNXtQNQfzPVcoTHmRqb6QNYWq5UQ3icfYBr9Wqwojs5u2fpyEzTyeTECXgGiYEwxDNb3ifaT",
  "key9": "3po7CDRrGctd2mXAzCE1vN9zuVNSonFZmXxMFZDnVnkmRMGw4R85RxvvaUq4Ao7hKrxGKQeD63aLCQcyAoXFRT8n",
  "key10": "KgiSaSBTACvG5d5vbnoKEeW18zg5zQ1hFbhXPz52E9BEcEgRsQdJL1oD3mmJpx4t8nKFMmc5x7iPVUYPqnvEoAL",
  "key11": "PSpofhX1P8JWaLofpBGUXojeo8XuvidW1QtcpZuuaDL2ZsxjFkwE8ZtK5yJSn6Evkyntd9Zvv3MdebRUwP4rT6U",
  "key12": "3FiL9K49e8pZ7yFdT4FvAUu8oKJExcMnHAYCUCrzh82jrEGxqg5WuMDb9diMSPc3eymCMu72Us61Gp1XnoW8u6Vh",
  "key13": "3wVeV5oH26VV4BbC8qdXXH5uZeyKYXNHD915PPfZC7fWyYrZeHCYoGNPtAXp5va4D6pSVKSBf9xsbe8BGfVi5W8B",
  "key14": "5WocGofRnuC3h92t54aUBYRUPtCMBD17SBF8T7ZmMd4Q5EMf6igRzU3nsmyon86UYtaKXMDdoxgzi1Xu93YbG8tA",
  "key15": "493ejVm9qVZJfKNjKGmGLzd1FjsiGo2cFtFDKvoaBvT4pwXJWrVz1ynYaKGK3s2M87nqje8jmm9NTF2r7VrvCymc",
  "key16": "5PcfC4KiBFpaFFd6NSAKxs6i1WCjMoqf3qexUXpWbgAmwZSZcJ1x49tUXoAc1SFP6Zc4T36UDT7KnffDBHAbNjxZ",
  "key17": "qzQfWAeD95hpDNHfyboEgms2PxG8XtrTpsCCQtJbNcTNP33f4AioFzCNF92DVoiA6AJY2W2coKF1v9i5GzA2Qj4",
  "key18": "4Th2j8YHiuQV2cH2Gvu4feGbMFNoKCwXKF2zdcovpK8BfgDZQa9uUYTxd2eN9tebzNorXm8BAsAjiSBED2sJVYUQ",
  "key19": "4kkr1UkzNnm87ahP7sLLEKhgJAcPNJDrz8zGD4xPzs7Wnn6iJGKiHesMEgpbuS9JNHqzj9yMyewTv7rUsCF8PCXw",
  "key20": "3iQFFJoVRNWbtpi4pPczcehKe1zihUmdedkeiAXNq4BEo1NVfeHV3haKhqfWeiPHeH7qY64LJZnBD8NZo5NLT9D6",
  "key21": "5smmT1fVJwANg3756bd1ZEiBDzbMbBpBNC34NdRwyfP283tWSDQyqqo7A5Qu4asb1DUrRKonpGV8XJzURzSzhMux",
  "key22": "5nSXhiqHi6J5MXsntTczm9YjH6dTfZ4aGXBSuJjyb3ek1kmvY15KgZAwqT9nhHACMaoSZawRWVmtve64PmcwyGbS",
  "key23": "2uWen7vY1skK4Xt5o2Tu3BttPnRbwaCkwZYtBmAfWdemyBtzGZwtFLFYJ9yDZLuCLGc5T86kTsKTymfhvjBNmRyW",
  "key24": "4kuAP39ZtxfjLGVa5jxwuHzJBWLdfMkSdNXNiF6rGsh3Sm7XLRYf4DZuAQfYzF88nwv5dtDeenT4V8hALzQ3Cdsh",
  "key25": "5ZpeMfbSFyCYvNEK1EL9mdwkf2tbpDfDo9MZeLDTFifHLmpNYqUgZdShY4EwXQrvCUCUTsbSYRxNa4M8FG1cD6Rc",
  "key26": "4X9GT6sh268DjTr7FD3McG9oRJnaP5Jvsb1xq61iQCNbywgD1EY8ARmeuFQELn5J7aGpJsVLPwc2b4ckMUNqQBpq",
  "key27": "3LmHKN332KwuobLfB9f8tV8rhp4b6n3C2SaZUasNGZnKXB324SaVNVj91Zz8S7VLqjXcCqs8QB5SVq5XcCPxjV9P",
  "key28": "5b7WL3eHJPtRSyWvKc5f8iV57isG3vNRe6dCJtZ4ZU1BCZaaiTg7NBij7kfcUF8Y1L61kdRqDi91Ejg7KHn4216F",
  "key29": "TE1A3DsG7E4atrC6z12QqudnvccmxTpVmGXGbu9TJjLasP5Ck2Eur3Vec9sFRA6VuuhiqJbQhD1PyRA9g2LxPNE",
  "key30": "JhKHV89UXn81MFyZvBLnM96ykT52XEBmFo8PTACPtn1YNGWJ6zwi2W1xtScECyzJvSK4qS7ZjWw7zFo8Lmn3nL6",
  "key31": "5XqSMbKrDgx1cK8NUGG7uAtehhgNjr7KVqJxJtqTysSQis3mjnWy9Ruq6eWvLLJ7HB5XnrWcJ41QKgH3Fg4PQUWZ",
  "key32": "639W4Hpo88V9EZEG8GTdygfzKqfqiFeZz4PFdxgiCeohfwX4fcXPGQV2VKxd4VcWaub4tCMMPpbm667wxHqAvBEi",
  "key33": "5t4a1xqwWdvMFY5njRx6bmJa4ScPTZUjvbt424x7RsUMterMTi9Z2Xbt1D4ffdmEZhHYGtHJoBXwCueedHt5h2Qo",
  "key34": "4qhCqxFQgaRfq5X5zaEbfrZxSC93YKCErw5zVRP8GfSV9xYdskoTo9RBqTr2wFVDZ4u7LXkZ9xyCck9YxjF2oyo7",
  "key35": "y5ZhrJqsDnkzD4kXNoPdvV17r4LZZCZ8iBSy3dLGn1HbFkZmCrjd1LUA3pY3BCQE6B3B9kfJJbTQ6rvkRHJL4yU",
  "key36": "2ViG6NaK8SMx1ujWjHEWHY5WqJpWxxrP3Lmaba5AcwWguEMqN1KJWotKWPccJGeuHP8VM3b1EmzPz6WbHGWg9KUX",
  "key37": "YRYrytZ1SEqyhJFnnpoobTYWc82dmLUa6JZp6bNaWbrhHs6Htmur57Hz2n2SaGU2zZzQK6sA1XctWu5tL9uBTq6",
  "key38": "kUMKuxeyUCswHbr79Uemffxpmh3C6v9CeUYTaASbbWBGCQe4AN9ozSb1vU8WpxaVVovTfVP5Vrv6afDZyyTcmVx"
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
