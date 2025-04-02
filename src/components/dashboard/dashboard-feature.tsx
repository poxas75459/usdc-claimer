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
    "41KVCXbdEVubt22cD4T9jQztkVnL1CwVdoA6qLj2Vujns2T3xzDJ8QPhYJCetpPfczDaiuhLcw3VywrQSjQTNwCi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CWJ5TJUMQdT45T1EwqoBREDjGF9itXjbXUdkjmgmspt2sudXG4xwvJ6MP4yr4AZs2QGPh7HGWd9b2LDESAxPnUL",
  "key1": "2td4r4jtoD43CXbjn7Qm4FZw8ZkiXkc9iEQmooHVP18djjH5WN2NSxxhDZk8QgHqEtXhgcVcPrzAnFETm2jcfEEy",
  "key2": "3aPvfrgsju926CL1dF65cknRgrwCe5EP5gQ9TVV2dkyoqvHmgaSSQyBRERYvEam1DSiiLt76t2z6PwAigD3uZP9x",
  "key3": "3G8jYkbbw43CVZipEqqJcoy3fzwvU2hrC6bDMksBNvofnxoBejPP8CUpvX9Lyn9RkiKahKxndB1dVcz3NPbwYX1Y",
  "key4": "3pSPFooNWwt9K4fhh2W6f61vb2ThgoK96gjeJ6bJrMVsgpfaQKexXAauUVkSz42poaLyXtGEe6GxQrAXBquMaNn8",
  "key5": "5jX6YLxM2HKjYHZDQgPYaNd88GwVXr82tCBsrEpjs44wSbiYjPGMTXYsVagxy5cyxWbkYuEmZrwQu3bH46ZtqEBL",
  "key6": "22Ho8qz2nsf2iRGYjPkBbnvq47217KnYXimCcmVJP93vrAQMESVVpnPKo3j9u3qBrFUHJeqLkpTjmxVU2PhaTYP4",
  "key7": "5tcRHwAx93Hwz5duJnBWXZGA53hJfA7oShUsKnkSwdcvgr89pXpxK2KCHpzVjnv9m8LAq96vd2sRjLP7MNL9B2Ag",
  "key8": "3SwShwH24QywjQ4iHn96oKwPUXr9zJ2WvmgcC1kh8G8fTiGg1jYTx3MmGEeeTSZQQQKPMSzUEW5yYx6odZvBHHKv",
  "key9": "2h86bBNWJ9UdYM2LBhycDGk596QcUdweeiSU8TCgCLcZWDA21LZ24tQDJ7rftwMFHbr85EteiVtd3ypts3WRgC7o",
  "key10": "3zbW9KmzdoyGVHWYrCLeZ7jXd4JRFTCqqDLJnJUrkyBdzQfgKy2GgBEePaxUYWMsByoUYTueWbLZo19AyhaqXY7H",
  "key11": "3paS2DAs2M2rdCKa35Fr9UtroSpZuoFS2Ks3vwLcbSzMMHouZvGZ8DaB4RDEGn7RhTHy2FPzjVqJTp9xY1A4ScRv",
  "key12": "2z1b2gtLZAH5G5XvMUn7hqxNNimHtsrJEkxtDBg7TFnMADFsnu77GkRF9a89Gnb7jULzUgJtCyEmW541aCXWpRf3",
  "key13": "3c3ctkeMjsArtwpdQQhFxdk8B896xKoAD3N68nbHuQf6FtwdJPRZBJ7xPSst8ukjNPQFT5NxDixtRyQAvY6rGNzW",
  "key14": "422gNeUD4sM6Wry4S9xYv32x8AjoQuHQEA1vbHT523cnQDAvtGgv9LNrtVHKnsPhx4EcxazyuasxNKBApzQurNrc",
  "key15": "XR8YgDGcNJFpZkFSnktEWHMCoLM2t62qP7ZcNBb3k7obPXtYRUKSHRG7YbdL7PsparTHzp3w9My8vuB4UWAJYtG",
  "key16": "AHRP7mrQUttArVBh1Mx32QdjgMfZjwmzxR7pvVfFreM2uthch81PFJVnr1UypMqYJL15R8yvcePyx9PZQhaFRfG",
  "key17": "3Ew8mhzgvpeSLi2LQBnbfiLRx9GNX57bykrYT3pMJiY6S2spo7BkuTq8GZYpgFTSRNtfCWHK3MHHknr7fiSHeC7h",
  "key18": "3KpqXA1WxK45yW29Ha2DxLUd99zHk2mtrrsJbrNASyVytKDcYhYVdxeWRFgyih26P8n4AEWjeB3RCHKx1vDw6Zdm",
  "key19": "44QknSH8Rq78Gnii83eCvbe51i6QMr5ekiYHzqxxi9kqgi8Xg5eGaW8kxZxbrMWm9u7D7oBvZZYbSikbrhZXhtV6",
  "key20": "42oyDWnEedtUrNS6o1ZnshkoVxLtoy3WdJukY3nZxBg8DPWcp1S8QHMWki8AiPHHmpN5u1jw1242x1edt7GbQYYr",
  "key21": "226zbWhfBoUuxKGf5m96o7MEzN1rdkdTY7ca7DhpeNyyVSLZfaCYDqaNiJSfyFoE48LoPtLU5fkG5jARj8wkhUkn",
  "key22": "CALdbJg9ndhf3J4hKjtBwoUnhPgWCkvbv9SwnCH2nf5N1xuNEZH7hVv3wmJxhxFVsdYB83Ku5cUyc5N7ZJRZ9sK",
  "key23": "5BDndwuAG3q6WTpm3r2qQwsT3eYdSavbk2qu4xEf3rTd65FoyScEixS1MvSc2tcnxrdwvJv8RbH9S2ut2ifJvaoT",
  "key24": "zQCyFnx1Z8T4hnsFBHt2q4xEjzZbUqcNSi7FHpocMcQj67bQ5KFpupaacbP7Jk6d6UBuaum8PYRSF8NpVnRPRyD",
  "key25": "nUqBngrj6ekZzeGhtaAZo2upGimD4tj19CpXw134TrGKD6Jd7gYA2WV6PnRaHWV198W6LwCVqhc1dezBeMHWmpj",
  "key26": "5x5XEGT9cn3HhKyh9FQW2kLdKAps3cQkg9vtUDwFZaC8KMfaS7eAqaCkYakJikGbJaGpBFwASF9yXSwpx3S3BfU3",
  "key27": "5kCRofRCNoNhiTkrumTqjWjthzp4M3qSH8DFk1qmzz3ZKchQ9WqYr87qF86oyEFrZMktk4zXaWvoK1mnYY4CDc1J",
  "key28": "4VpnZomJQzpvC8fYKXiyiQTsBJBbBkZriGUizKpyKMhBae9mz2FSCQdBWWaan3szNzCmw7bzPv3Kei5UXpmhR8PX",
  "key29": "3ryHjUkwXjpdh9jy19iTLSU2whm3jf9ofnmE4vPba4XhxfPviWF5rGvcHHZj3smhuZp2WY3TqYfHsYXH2nrDzjpP",
  "key30": "5mr35FjG8CcYeR4YwzTbXjaCqkqTDuREqgQJCv5pxaEycGTtBUpSerTJ7hU4jnseLg8eBNtg8bav3nt9gQkb9CV9",
  "key31": "3XHVW2Mb7JyAGj2WGACdygViD3MESpeGN8cGha8EWr2QSpNmNfg4JRhk36GevYjfmSadgZYpT7c11iUmsrajmu15",
  "key32": "3HZ7vEPcPEt7BUUmDu62MhyaUFVCERbd5aW7G7UE4bMy49tUomn8tdwms64FC5MAkoJpeYXrZ5BhwmBwJzoe3Q5K",
  "key33": "5KXFMi9kLVfPEdSajRjXTuqye37LRsLB5g7QTXin9c7muuKdWrUdpgvncy55HGbg6GVMF7qQPL9xzu42r7Nw22vY",
  "key34": "Uh9QC5foxMCQ4gAczypn9gjYqfECm1Yx9r9J298NaHKyL1BMMAjFYRPMVM4N9THCP4dQ2vrjgFatMgVVQxMH87z",
  "key35": "5FCLXxxRYRBr1v6qNjzx6tqQv2syFPyNdKMuH9RbXEbWvrqWebNMUDVUA9xGNo9boxHBdT7SDjQpb6sfNhh8juRF",
  "key36": "2w2H22V6qg2MRLn8fubFhrv5sBva84jDijW4pB28uU4ztr3ekyQ6LExGH9J2WHn1JLm7GPBjqe8Xyfc8dfjMGwzH",
  "key37": "LNa4ruKFSSdXAhu5cN6dTPv4T3aqEyTazvc1CT7gP1jDP55f9KUxsCVbN5EQEZnsmxUFtJXmXzsa6Q9pThKB28Q",
  "key38": "37oi1H5meoa5J6fZ7VhwZWT4bzz9zLhXbK6toaxKe5xz57s98jBUUKWovYjZ8C99RQJRkTdyVSToihcLfM6KvPd9",
  "key39": "475R9gdu4u4fS8gRrTyfaaXh5iikB7gzQsokhZa7rJf5dxGewgDyATm1X7GTCHGk7MvvSubjxctv18oVKTZXpJa6",
  "key40": "3ArnigUJQ7aNAaHbTbpJWKFds6vQEV9ma9BDw3qkCGDXV8H1mQqMiAaDPeVZRpTCkAjDeabsdCVwfkCQHvvS1r5i",
  "key41": "2xPDAPqzKFP2P8zCgkKLJbFWNRrs6FoFHtjx7iLtYTYE1R2heoSUEXtJzotNezRsaBMAJPrcCrLixTTPEQSdGpK3",
  "key42": "3TttUzD31112Rqo6K6XPSCeL3Ci9yzHdeMyuk75C2WG3Ycu2oEftPTwktbKtt4rf3ZcG52R8KJTNSbp4692sqqqk",
  "key43": "EUpqeatv1D2WRCvDTEom6LYgitKB1trQDM4PR8TuD6q2kYNgK5ExwC7AVbhgtBwMYfBetiobmqLZ3uxLVvxJJEp",
  "key44": "5KVPSg2B1fomiqtQ55yGVVZ69KRoGPUsSo99136PEsHuj4RQ8dgHQZd6BnXc9joXgDiNJarmBfyzU77pNtse9HjD",
  "key45": "3eWbCSboidNFqv3BkpJBjHvUv1rJygTgMjeKhtfjncYDMGbe2e3z5BmraZRoCQQtrudARDqWj43T9v9hvutMNJho",
  "key46": "3ucS318kvmvEEWDf2bb4BsotmVkksb13hQG3F5GXQTkSsy4gdLuQQcX9tZToUDVtctsjfTLbFQwmZ5ybgHeUMjrM",
  "key47": "4d7BXzNibZ64YSn1DeeDVDtkVvQQoVe3XgYgEuzhaRmTfyETdCEcsn8T89YiiM5c7RFHm334VygRqTU1aK9gwWBL"
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
