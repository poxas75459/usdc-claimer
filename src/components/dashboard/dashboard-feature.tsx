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
    "4cBXWE1w9mZgzHvjYXNWCPM5NT2w7pNRG8ewQ1Hg3GtcSzDvuSYVeMhS3xgyan65sTc6PFVo4jPtiQR8PF3DXbyr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LyWcTiojwbFzmA4Rzrpi4GQ83Kh46EoQGMrU7eL6ag5UHCQvY4d4Sr6UU8YTb2iADv59XUnUZ3aVNfx4t2o5NXp",
  "key1": "5fNAwCiyM86DAQ4dLr3d4VekMDBo6rqMg9MgVwpPJpQ5o6NG4YganEYK7eYs6e2wW5a6EPVUVmX68mzfPsvBoiHr",
  "key2": "2TiBWmS79adsFLcKv7fsdrfFS6FhWGkn1zY4Ufps3Xy3nArdXnupHUKCb7tMehtTb4mcGkn3dFv4em81WUHkEZkM",
  "key3": "63XH5ygfj2Zkqzh7NGz26mEDuQaBSKfMWWsnutehUbR9Wz3AQojQdLBAgY6bVQNCxiqLiodiauXnxGsNb4MeGfXn",
  "key4": "3EBxGT558S6n8xXMKeYYQsCUhihWnoX1ALbrxUYKcrNTvvQAWACWEhaAdhfByBJC2Dtrecaz3kzQFQ27k96nndKS",
  "key5": "21uGwdQ2pTiEqjvuTpkDDFymTxydjHCtz7zHqs9qmKSL5j1WMcWuuGcomPH43u5RP2AD1ncR5v6Bod8iTDcUiQkt",
  "key6": "53SR4CCbj9rS9zQLp6mecD1dCja7Szav9Gaz2A8QbLyoCm29Q3vsobBSRQLZTmJw23N2ERgdzRJeiUk1ybMEtBQe",
  "key7": "65YUZLn6FKWp426krELZAcixpA82J6GNL9gvomQNidQmLqzdaDKqBEZG31hQT1ZqMfW8VtcvNVdLXTnSKEN1Nyf6",
  "key8": "2veB2CAXXJQLNXZu1Umn3y3HsxTWMbk6MRFEWACQHqaGtCbykcMcNMstUh3f2chicpjgTYtAPHD2fikLWHo7VB9W",
  "key9": "24uK1ZNKXHJXEYM8VTD8GSTAmW7hdpwhPmWrMFQSwgWEc6wvmX3376ZnUUooysNi5rjcJpEzGMppqHstnDmPXurw",
  "key10": "3ApweW6PmFSaNSAmGrr5ZkWVVMS695mRr9aB5QvSLizbwVPS9in6kqaLkcvypUsTfADSL4DsBfkySdaHjLxNSMfA",
  "key11": "36w5M1TBwLpCuH7DcVX1UmPRbFb5CoiL7W4n5VDZAGM1BDmw5EJkSyufXWgRcDLSQdbxYRQp6wXXRxtWAiC4EMKm",
  "key12": "3hB5Kc6cjKWRMiUd5MYQBzoYHpYPckCsJZaBobkqb6kjPxAPPWUwM5owWfzZsKdX8JMJ3ztjYrv2KjBUrt99dZ3g",
  "key13": "5qDC8LAwimDasN42PN9oTjUNovSVRKDSzoCWAbZcbRxKmFzRLYGxsf1br9ZaPAu1HpdigDxZazqMHwchZ4WEkwzN",
  "key14": "4ZsrsjNHvy1A3ypJ4HE82DFjun1b857sJ5QefpKgvnBQQfNTL9pJmg78uP1RgEh5aw7Rv1eGW38Mqy31vzbRVn7Q",
  "key15": "3trmux5v2E7ubAvUN1WHDwDLVct6z2JwmeZJtLiDKXrfo5wn9CARmycQ3LHbmYNRkedfN8tEFtqNQoydDHrM2gVy",
  "key16": "2YQ792KEfBje3Xo7qz7cSZWTLTfjuh9tiaNhx9TzQadd7QFgac6XSqvzZ582xtEQbxKHn3Kgu5tMX16YKVYZDbZG",
  "key17": "aoaFkLCjJRq9QxL39DLuKsmKUXQa1j1Qeadm82UErbRWLpMpG2qQpDSoydwAFwUGZiJK3K8NpjAbH4n4xCfm43f",
  "key18": "Duanam36fLVZ4rNzh5kxxtkT5vZaSzHTBdT1kAa4EFtJT7oDtSA9jPnW7kQoW4wpAvDrCxfVqkYFinPTVp6zCry",
  "key19": "5YJ6isZEC3ZsU4LUD6fTiQZ6aTvma4pt2p28yyeDb4spNLFJEuyDmLv2sFjGdZs4bfi5Mnm6cY7Aukq7JLnVwUji",
  "key20": "4Qx9SiWLmSbQByzhp3SRkLbPs4xhAiDBCEvDEv8kfHYYSCQgzobdYPdVy9qQeQHLB2JvTu9PYQgYqo9G7k3Cw7ZF",
  "key21": "22DFTqKEhMfwcf2pr45yApnEKaDogXWuMkkxYu8bkFE1fm2jt23Y41x2cMih6wUXqGgnQvraENRWtVkAgZKgpq7x",
  "key22": "2atur74SW9eKi7MEkEesKGYBXuDmsJqfvfH59NXxw9XZJHKKZzR9j6KmpbJGLXDF7XyiiG3KXp1NPGcfWx2bLGtF",
  "key23": "3d8UXQnX7QxebcHNW9uNg49cze2sxGNgixJ89bsKHVTHCcNavn8asMDi7fSsKAWaUmF3hAmsrKGyTVLnvde7L45t",
  "key24": "eqbQRe2pZEqSrfad83VsqZEiJgPwAB7U2Ewz16SR4gRcrNNyp2N5Mf5Kq4AwmL9UccEXs3TNvyCVZZAHC5M1XPc",
  "key25": "SfydGY76biNKDev9bHuRe2SMrEjGx7yJCNs3Nn46X6g24VuiSUp5rceCt8HBntKK1p8gNrMxTsVSSJhqMYNigcU",
  "key26": "c1uSmFXkEYBbzwYg7xBiW2VMCksoBckmEbFRBERQgXKKJqWynECnbio7ethzyPJBd2FiCesA4Pofrpn7RZ9ckzY",
  "key27": "BPWcP3igTn27b3zLqiYyj1Qu5Sy183aE6wRT2VyRZccymvnujePKnCwq1fGPfEFK2hwm1859UeBr6NJVagvAozL",
  "key28": "42avFkcxdsGVjafH24Wo7e7GR3JwErJLGyBwQhg2XqQgfK1E3Rcagv5UB372jeuLxRHmQCigFMzPJoYtFKkGghJk",
  "key29": "5qZQJKz9ap8bG5F8fpR2UErKygiCsf6DvUTrxuWEKFSUtfVtVHviLF6tM9GMPTSzbzvFZcM6g5AWuGzzyJSh7JNB",
  "key30": "jDzEfsCHdh7tzCG8wymBt826uLBnMhobZHte7zg363HLiSHbF4b13tXCF3HnDjfkKPzqhg3TxW84ZnZdH9ZFe7M",
  "key31": "5vGZbrBvMt3RgQMRVJa9jakRyRxJ3ZL5gxyXnomDVh6M9aGFrou6mGrk99RtQHUAeGZYTJaRRNzHxTXk8R72Tvso",
  "key32": "37SAB9Fnb7ZtUzMSduuhTcz6SiSub92qnMPEv9MVpFiXjctx6pdQgDk6YjcymgTWaG5o4eXKyNCgtw6bAVguePdv",
  "key33": "5DX2cxrupeur7DJ5aHUVbCwDTJjxfv4zPXrQSabFAmg9XvZkt6idyFxsWQzKLfX3KkjBabZxRS8h2iLu79HkHFDD",
  "key34": "2EcB9qVr93PpBvykmS3VT2ouQrkugKC82oig3LmaBFJCeE5ncUhmFELW4J64QasfEHa669M3oBQ3mxCeBtzFoccZ",
  "key35": "ZG5DzHYgsg3y2sf1wjZ6iUWgHthdJ2UWzPUoxZU8APrQJdess2WAnGro1wFSM3J4kgd5aLunw4BB2hRTxhVeyz2",
  "key36": "45DTYmRkb37GTo9Dvbzcts7poPNJ4XJ3QXANmf2AfmVyZE4g1Lg4CNZGj2fd7SFxDEURNmXqSkDKQMepBLp5DBzF",
  "key37": "5DhKbF8jceCDmiRvzUjTmj6SYjfwPb19trDPV2zkKdSpCS32tPQKws9eWMCw8F8x995unuP48HUkSJp3DVa9gUU6",
  "key38": "4Vsfo23vySxBBWdccasAtE2YRo7zcuSYb51tnC7uAbg3bNbDfsRS3CBpMjJnaTZRQVckxFPWFDMmXUxpZnmQSAcv",
  "key39": "5cKB43G55BjhArg7jA5TztvoPeFSjzUV2S5HzEE1rwQqZ9pMhdc57Xw8TogvvKwSPCCSDSEkUeSsXmQ7PvGYnYCF"
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
