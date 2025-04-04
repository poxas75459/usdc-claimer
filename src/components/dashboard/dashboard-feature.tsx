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
    "zHxA3BHiJsHpE1gTHuguomejcgkLi4KpYY1gCg4wh2JKnJewCdX51Go9rvsGYfygCmrm3WSd9puXFPW8UfkACQm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GGUyKPifpZb4cSNrKX2ZZfUB7w8QF4e1aw6vDY5ubv7E65DLuGKoKBwhwApeqNR5BNaFbUH58D8dfiWbnuWHAV2",
  "key1": "5heDh1FG4QcWChp6MKF4sQSLENswdmM3AYGBsCnqpHuD45bbWviafuCT9qXXiiFoCGCNkaiFMgpoXAHKAHj4qSLS",
  "key2": "5Xhh9CzaUxTQXscggfwpWqgqyfFBjhT9vPvKAQ4gFJYkXc1YHSErEkZKqA5ATjzfrboHfGsD7eCt9yySXHQ9zwo1",
  "key3": "EP3e4fhoSVSRCSZ9AiEWEZNbhufqbcAMZWpKyEizmCrcbxY8YMiXyvgFBxkRaKFkXrVM7qY4hndz53TnKcLYDEn",
  "key4": "5eoaCZHjBPj8jix55M9mwToxkgBofvGYg2TKpLutTm7VS6etof2qrDDE478A62CsHNN8LHuka4EjjzCpBsyL2Kf2",
  "key5": "EHeabxKBLibTrNhYQnaZ5ReVw5yHvtwXCZWfmMdjd8eFFuTAyQBHkMe5ZAwikvheZZQnTGiygwskmE9E12UG3Ns",
  "key6": "3uMkvwKht8bXtmKKfuMzuuHP5p5rQHQx7DHB3JbKkNMtUnd99SriQ2tddpqhQGE1ASydBA1NeqrpvbCzCc7DcmwL",
  "key7": "34RjcDwdV1SBL9MYHsV1jLdEH4WcGDrAF8JDW8QQex35nmUmjmUoiU7nPx8S6AdLU7GGTByTD6WeTgwyLxarHSe2",
  "key8": "52FDCz4GFm2LpSmJLUuGxLNLa6cXYA9hNFDDVNg8PD3oUJ4NunqHqsZeB7xXcjYXLNJjWxPepLmMjMwz1Vyyz28n",
  "key9": "3o3VbJVsCHr7u7YDwxT22chy4N7RiJMB1gHQB8UxBVHMxfD6CJscdw8zuHXY3PvH5SdpMp4m7cTr1sg4B46xXMgz",
  "key10": "rchAqTsr9mWYpFRXKZmjZ6waWzAxePN6c1Bc8V83Rdj6r19Ae1t3ELZLaGLe14adbkYS19XpfX9VmBrGQfrqDkf",
  "key11": "4vBC7LWJ26AwHj8nhcgd8nr6uVRChRFTA5hsyLis3M7RB6g8ntXu6XBxLUEamsXVSUmmwDDeAqEMDthSuWWrTj5v",
  "key12": "4bEJ9JEZT69MGw7dZF8KDK4GLKqt7uxKNAEYvhKzycuECTo6ByaQmAsuhDw5yhKTQnodjjWdPTyaKpLPom84LANU",
  "key13": "36NUmGV7ZUHUJDr39GnQaKjtnt7nZRi3s4w7eFoYtV3vkFKSmkWZkBdT2tvrhRdJw8b49dCmcB8mwuuoN8Qd9U7",
  "key14": "5QTNgmLEuRA75duqXwdzfESdZMPk8bVCZjfNmYcmsmuuCXNsza2hzg7UJZT1mAcuMdiyrK4S7Ppf1XCGdzqweEDh",
  "key15": "24oh4KshcyPjQZ6YnbB2YrPz3rRTphjZetaN5JFd8CyvoPrhbewx1rpzje42Z43kj1gS64tGuzKub5iFE9qVANxq",
  "key16": "4C4yYVgmzWm2bC2cA8H5L6MkAC9rpX87oL3nXPESxAGzJNDQW137y1SrxQfQp1GLUh8UveMsK16iiZ7W4DvyAJpb",
  "key17": "2WP1TiKwEEHn5SKFwuRedgSMi1s4UiC5bkHQyhULHWejnC4ub5fMshJfaW5DGBiaGuWBysjVGK6Sq5668axsK69T",
  "key18": "2TLKfPWJiExLQsjHz5mWWZ3yR8H4sSw6a9Suvt7UXBTc55DubJXgbHuLQzyXu9wvkAUqWnK4Kw7A7C2PFDz3e3TD",
  "key19": "2EHvncKG8R9KZymxaC7GQ9GxstGS8D3MxWE5Pu9RyuMWmSSLn3mRsGNrsotj9NxebtedC1xGNY1dS57pG3YoXZMU",
  "key20": "4f591zFnJ18tZ6Tx6rWraZwy4y7D1EHZKZoehgp4umC1sg2wxACgKj31BDp9PiMGFoR76d4mRjqvicC1gyqHAfzY",
  "key21": "2iyYP7joZTFaNuGsHAiNybQzkSPABLcXHYbtagHc7hSHK8uEFv1WXkX56md4X34TyanghVC8Uq6JthzZ7AsuRWPY",
  "key22": "45fKYTKeLfvY5FU5dXg3dc1mnAUCiL8q4C9zAtmAAqSCDdMcBMh26h6wTLWS62jq2k6nm758M9yh5suxcoV27aCT",
  "key23": "643sqG576dD2own6Z7WogToyVHiAZ3crEKJ6A4evXeCEj6fijkDz77fy9wKjGs4ARF6G26a8gF3fbz2Q2dPTUpGE",
  "key24": "3GudJkme3qzwPcTCYUayaw3x8xaSGW3EkAyuSKxGZkWsPatS3i7nBbrZnZKKu55zKCUDLHZycugugb8BZL3fAkDY",
  "key25": "4oih8CApW2XcXU1iJkW3HmmBJra1M49yrNPzh1j2ZCAmQmRAaN8AQ6F7sNJkNQVgvLaba5nJVua2aVy5zqe63LDN",
  "key26": "2oQZFRYRyYyqW6mbWzzaAp1k7zVYerSezaSjfTfWbnsuu9pzwjYMNFpcmg3Tz29JXaEWFpGHHwRmMsameGx6wBxY",
  "key27": "YmPPSmLD8hJbAc2NTPMibUK2L4N2ZpUshxScqHesaDGSrY2XXPVFuverHx3VhU4F8E27UAqWrBpcnJH85eNqWeu",
  "key28": "4YRo8bNSh4DeTAopM76B7ziDcuHeRbCpntQp7mPoU9Fb7qvef17Cysjhyt42rhUQne3xLnzJpRNDGQ52eFrshD8L",
  "key29": "31me9xDQ9comGqHTAGT1uFauW9bS1ZbnR9V9dxv4hja1EWYenEKiAq4FjqbcTaph8YMTYZdrTUv1QAWc4yweErTy",
  "key30": "EWQ6LN3gFbD3WQDL2dG31Yh6Wt3Sb8jycpnnUSZuWx8PLQeLszoohF1dsDHedYC7kVxLERqAhBbGY6QAKVF1aYz",
  "key31": "5mEzfKT4qdb7VZ9LwYeDbTMNTySt4gTzTauxHm2mXoUtr7bv2EokdhfNjo5nW2xJBdb8SNsRSYXzRynTrzeTDZNy",
  "key32": "2cr6dKBdFvU5SB9QfH24tWQBqFsyDcTdK6zGcCzgQWNndnjsrfaDw4ZkGYoRniHSazc9iBJ8YmG2r8d549bC6ww9",
  "key33": "2mvAZfe4vGpY7LKtrMLTRU3g8TcAJLV15e9GjaTAtzUyAkTBndLXnW46KAgviNRTAnKiupzu8LcEgtqNSijBKzUS",
  "key34": "5xHFv3H9iympXcbbXrUh417jaBVCj8yvBxj3JMDbci7aAVyY96wvb9S8ataLeNaepTbTN1BJK4C8LhPosgiBvJyY",
  "key35": "21RuKeKvUBaM16KKxaKSDtuiNYKAAW8qnmcDvv3sk3x9Qs8Du6hbE1LwYvZXeZ4dwb6YYUBzWZkb8eV9QC9RHv42",
  "key36": "XJ8eku7NNsVAKW5stiQmTnhPiBjaG4fxDeaNbqotaXu4ZUc1MzEwxoTnuVzbTQLSipGkYzUT9yifQo4groku6Nr",
  "key37": "SVFfZrgtNKmYiozwppAdGHUaK9oBP71F1pDib7qoNcnRDbRxtTo67UJ3fEGDBYSWncJ2NqnG4cTCy693JWFVY9w",
  "key38": "4CTUfThZdWrRNyiNZPtYuh6cTvuy41UJmXVEsd9caHWvnK5xiDXXBNjUZT7MKpEsENq4fKmHVzLAJeraUA1BDHqg",
  "key39": "4HUT42Yr7Bxiv9Nh32vxBXq92oV9MfrEu8dt1quqvVYE1NzZ4bB3RtzhTTgfWV8EeWnMF2WZgSihxwV9NhoDVgnL",
  "key40": "2Uh4ycBt3oh5rWQ8Lav3hYkvtFiydVJVDSuGdysSsj5xnY1KMSbEawcEp36qHqz9QNb13RCU2GDz1xByZ8mVwM5q",
  "key41": "5nbE3JcMF78it51cCZiMeRuj3K549rnm5L9mQidzzpyTpsjZYtWSSiBh1Pcnu32HLzB6GdwyrvwAJmHHPnS9vGc7",
  "key42": "S7tCtjrY9Gpz7NrmXm8ndu6GR3qN4ukyyXCzmcoYf32WJVkFG69LxTKncirL8UHZW4hKeTJSdZw3uqp4ktaaHRp",
  "key43": "jMiijszrnQBeJ7iuPCJHQZuXcYjBVEB7MkdpF8xZsrzFi55szWRnfMe3mphCK2iS2SWZv1dZ64jnT4G7jnxwdHB",
  "key44": "2HqS4JvKnVasdATHjNHKRRd6VDWHk2MQuv6Snbjnt8VYa7UYXFfRaxYMtMJ5AdUzxDHD1HGibQXbWBAeCKv2pzCm",
  "key45": "3UQJ4xugeNjgisZdwZBpmDPGMaQKtbDruzmjbTXLWwj6jN76YMTUfpMdaptgu8jGtvc58nZZCvfw6aq4xpyNEC1N",
  "key46": "244Kbp4bB29ZpwRwuuXZeE2XT73fr475iosNCK7nnSUCSobgXVAUZqwWjDnQ6fnzShdWUzEpz8YxdY8Dj5sQwWs7",
  "key47": "5ANGs7i3AhD7x8KDmToEW4nsP2sym3fsd5cx7QQVmSEjkLFpYWG7kQs1ftLfTvTNnTaaTM97brDrmD4co1rWLhRC"
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
