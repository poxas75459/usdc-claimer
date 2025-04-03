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
    "5L8UcN6kHoqtDxm1qi9PrHVWF92AbshZwQwEtW9uterRCQjBaTQoFXJWuos3HPGUR1tw7vvdMik5a7aUFUnGVRXx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3niG1k7qsjJcmP6ju9ywGX4ih2kesVK9iWC3Q4eeNEvUdjHJPP4UNLsXMHqGFdA1bP4n95WVdVjD229DrBJnbVaS",
  "key1": "22psGeS7BGtsUCWtqT956Ve4mUsjBu3xnSmiVMcm1VANPiK5s1YDMoXkuUxNQM5v7GfW8Eg2HgdSxjHHj6oSHLbT",
  "key2": "2s59EnoTP3AGeXKH5yGuziasnPvX9J8jQCsdF9xAh4MihDTQSjyaMeCUF5dnUs5K5dpcKTuNuK1qJBVyEfht7sRf",
  "key3": "5jy6KQSADLq6ZupFzSzv4U85r75xtrNUYavwG6QNR4mJ1opnFVTJQvHGdZsp1Szn5UrV69iE6DBq32kLF8MuQBZw",
  "key4": "4rmT5NNKwA6JrAh9BSaAFnvWMjHA4kwrdNq3teVR2xDphRn7hbM8KYL4jL9rvacGvJjCzTGUqDadsya4E2JK9sVV",
  "key5": "3kPmzfnmexZcbvK3woJtDYkNC9tQ7EHM9XJV8eom5HEikQ8RESjnrKSsvTWsiD33d3U6ifoFyPT3r6yZsqBKCwLc",
  "key6": "wRnV3ECDRrLi8gSr1WWMvwZNh69FS8F8ZhUaC1GkkSvQLG4k8rjLKT4JvZBCjtVSh1CMcAHXwKXoiN4Xp2TWoFb",
  "key7": "4CNvv4BeaWLEPxhxa3Bj5RYJ4CrMJ1QgHMpeZT2DGWToYtas713dEQ7dJB6TkqDankVUmLAV1SvkAz3mqxijddop",
  "key8": "2SCEnMzNUHtzZprFVDHU6fdAPMTxBUUsuTHhU8wKG4TKWmPtyzHFw7AwwNJJBXX1B6ZL96aJjXSn4hEebt8NamFD",
  "key9": "2a8bBX8CXre3u1YKjXgGQLvAyNKrrVwoQSEJfzNbhna7EqinupJTv9dkA7BJCFuWkkT1nSRjpcmPvfdXP9XniuoH",
  "key10": "4fMYqRP7M8BApN2uTejZYCFwbrwhcA55ptBMGNpZaiZpBRZsMXdNEd2HHt27eBWJuwGB1eoa2Ja8Z7dLS4ectRFs",
  "key11": "vwuFSLFKsr89F9vvSKE75NtvVxWw8YYa9fTDJs5ihCiZdEoH5yff59JD54kiDGRdGnny3EHRYHnRRn2YoJob8Sk",
  "key12": "3oUM3Pxejy3tunYu2F66QUpWpr6r5WqZgTMtrVmgpzEthxEQbowvXTJMRZPL5Qg6bMu5FqskLyoALd3mZVVGRZZa",
  "key13": "XfezzTjCv2mLajNBfLtJmmVJKKKveVaZ414Qxq3q8eKN7xkQiGmaqLGCuY7CRfLoTNwC2JvquLFbFj1PMwkPCk6",
  "key14": "5q72xVCQ8sXK2mgFhhqhEa2fU6NeB5TTLiHKKM1tWHiUxjXLdStT9kXV9QoBp5EG9rLPoWtktqjhtii7Eo3wPXR",
  "key15": "4B1hrfU1Bn1k3nGdnSYYuNTFwpjzdcfpgGDPEAY2zn4ou4wTtqfqc4rVFr21XTyQyq83hQTKpKkBC9bqHS4Zr8oL",
  "key16": "3vhJ617dRMMqTSrg1vCCPDRsAL3GZkvr98y88w86RVa8NdgjnYVdzVcbXoxiyh8Bkn1yJW5xMaUpAqei2aRfPeXz",
  "key17": "3F4UVLkkufDL1MKAZZ4LXfdA9rndBm3erYimpjHzkp2PZEgUNwi5cjohP6aHCqvj4pLSUzrDBAdpZq5hg6Mgx8cu",
  "key18": "5s31tEPHPhjw9Aqyxepkv4ur9r1caJuoqATivmF83wEJBeyQx39NDpwDP5PYsHkyJCTbjDrgLfxo7GAdt5pFGZFR",
  "key19": "2t3UqTzAktuFiBtA92H7E8JBhQReXJsXSU8HpGibHSHj1PH7dENjfSxRHMHRhtbghesnDNdNVKnyNnDj4ne9QZKK",
  "key20": "2osEk8y4XwXSLPh1Qq48BrwPfLrGwHtTSS2L2DymxpH5ePFM6SVzjPFJzrSF8AnvrdcmqZ5yoqq89N62hkfaa2i1",
  "key21": "2S2WrDJn4kGTV4K947cc1oerDLKzoDUF7vZFMfWue4nWzUaLKs35YT6k5yNdM1GAcUENcDfrUUT38ubxhTTAGA9H",
  "key22": "GQwhvVoCqzWEWtSPh79CCw7wk9DdGuna2YwByMNuMDNmgmsMhsRaA8wQ7MXnK2mHrnxwEU3fksLUmrWFMMdBvUs",
  "key23": "t77T2Ap3s1pX3vzCLWofX62zHb8KAq6Qtq5QsGwU18DRF1cb7D9cvTRbdgxmeJKdkkWSw2k7jQtk1F3WLLF6YWZ",
  "key24": "2giSoz6pVWeDTKn5odKS7MHh5MBzbVT5noFA7twMdCsybxuWArdEqch3C61LHFQ8xx7TdoRQX62WSpDa6jNuQFNk",
  "key25": "JYUMABs2WVEbC4EQiaYKLk1T5MApugrxWgCT5KB2dy7iaoSk5TKyuDdEG5gUjpvYZ6bYqfaYPKzASCMFsa5Q4Ez",
  "key26": "3m7BREXaRTCZSFhWXqbATHZVTsV85cbYb6HX6qre2pkSdYB1TWGwRotDqGezuipBjryBs19LTJJ1UYJe3iHmxLN3",
  "key27": "4zEMhwuBjRd1HaxjMjWX3eTi77tA7JXeHAVirNf1b2ipBG7zfYyXiRsBjeR8jRuX5DVE9qJJHC8uQYXyZH4WhsfU",
  "key28": "57ZvBVtvDRkMfWyDQF5XEoWrLTcX74FDwCGqkiWJoS3aKYbk4KjVPav34EJNzEPMPmoppWVeWQ1aeriGEToz1oUg",
  "key29": "26P4M7WBKcv7sb4XH23Snzp7XGm39XDREe2MyKGy3qtg9nhwdmirnzAL7xi4qhkyuSmwjkdAiaSMo66riQ3XjPyX",
  "key30": "5bdw4V4NDhUzL4B5rwvda5CYo9Jpp2Sw8WhAMXd7zQWi4GvfaiJcT3mAd6FotzyAeudYSJYj7DQmp85V1jAJPDj2",
  "key31": "yxWehakhwy38wTTV6W9eLBJUp9kz3sR5ULN2zDAgJyv5Er7x2tr9vfXXJXRGfMdwNX5iLj6H8EfJNKQG1b1ewV4",
  "key32": "5PaDt6fGajnsncu3gFAPg7qGkgA95REHxDCHy9QsxVqM3hTdqoVUPmBnfaZZ373PJvyRJP4hnzwrem61hJW41vgV",
  "key33": "2JB5pe4KnpkwvchZ1FsiQrdTwZzDVTctJ4yofx8BrYxDmFa6rNhGJWU4TCxKcJ9m37rFyeNGLusAWC4zfjwf7Vsw",
  "key34": "4SnHzfbBbaVK9p2MaVMkBS9pBQcXioBexHzmfekzmukubx3YCBrju81v7s5ndBzNHntdxeExPPjmJiejkuecjepA",
  "key35": "572ENwq2neDf4QUpraDqPkRvAroMFw4VrqvdcBFA1gf1jS5giuUzrGMof17Yb7Hef7qqaYSMnZj1qjqtg19Nosb4",
  "key36": "u9gPfsL2RDDtwV2JS9SiGjxeLrG7E9D4mfKiDZVndeesE938L1CsnjkP53DfrMT4XYqYXiwXehNqFDWEvffBLDY",
  "key37": "2tgnuLD4SeJUnw3fufA3gQJS2yYhTL5tC2X7rA5C79Grnw7FY6J26K3SURYfk9P1DXFh3sw7AsWy4voUSSNFVVy6",
  "key38": "5sWmCZSs4vwTaWqL6UHZytLhQvQDUvVhZQVabmeoQd9Tj8NF7hbeXgumBo29E6HkowBTo5x1wpaJjGYQL3YHNc9F",
  "key39": "UnzHSokq26za4Ye2SYQw4NHMXN1oSPGGGCKFW3wAY7piTP82oB8xWpMPqWJZ4fQ6S9qtTNM8fub8aYrcTdyaB9a",
  "key40": "5n2F4vh5xuEbqYNBt3xhu4PRMMsnAUcA4aufrphygS7RLFunP9eK8SQDtUC5LFFoBWWsVJJouEyEngrD7b8bA4Gc",
  "key41": "5d16qwS469susGfXbaPTupQqXFtxRrsHHgrAEWd1jP2dXPLUpk4D75w5KZVim7fsw6ENgFkf5wCSnq4DvJv6CYH9",
  "key42": "4x9T9WtpG9gXLRqz4wpspjfhsYgckSKnyeX2DEZkgA6vHj23Vmv6BKVfKKitVc539YEc5jRU4HNmQZxu2cZdNbgq",
  "key43": "5sZZ8Hoz2o2pQgyKfpCc7sHbZd1TR2R7wZ8BB5RoAZzaZ9Tan6SZXbadkdgWTx4yfUGndn8NLSE9MxwmgWfm7Kr",
  "key44": "uVGoDMUhjEVP2QCPvysZieYb2SGU6aQMG9f1STFxJiYct4mV6nzJoVB1SVQML7bBY2BPXtiiutGiMHKjUYwEzTB",
  "key45": "5MruA78QQt1VVraj58t5rhujWQe5ZqKiKZYvRZT6wphfHXUqZDh7cXRtjATLgR9NCttaYuTQzMGHSnD5rdTcYASS",
  "key46": "5WTFoTWwPwDpwY3zk35zKJcoVXCZ9LcgzbLMNyu7N9wiM3gLHgdS9e6ermv9WTywCyWyPtfp3iwTqdVqmJFgGoAA"
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
