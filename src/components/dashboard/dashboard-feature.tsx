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
    "4ZPAMT7CneyBgkcjEPtsSyrqyMBoGcne4vTKjgYp6m4kX5jFZaC37gNHk7n1e7zMadaTatWi5P54QXpJRFLwMUvH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uC5bG1tfVP5KhyqUF6pmDKb3mbLens2BaC3JN45cxRkygZoQJKZ9f2mHoJ49hgCMYm7qq6aFiM2jYyG1HXN7LXZ",
  "key1": "31hZBY6PAH8xvstyqzw6HpoB5jNu4ABVAZhD12aUCGg39myVSvjydL98s2qrwsVRcK8D7bBtvgSNAT4JycFGXB3E",
  "key2": "4KS2dDb7dB8R8oQ4eFx56VLygsg24a4NFxiHYMUK8BmHQuS19ghMXtzcP9YkjbUZH6o2pzKubeKoWnfmcz2agGmf",
  "key3": "ECQsVbqt7Hc1iSWzGvD3Bt52FMtW8EFhQa9QuHBzqaFhUa4d9o7AjRQwtVpZQhwcYTk9Y1Au8y8FkWVxGbHX9um",
  "key4": "5uVPRrvCZ29fEZssbc66rrqFV5gZDCkrFXxKuwQGWgCwhb5yeDByMnbKYC8GZpDuBAgJXrqnYyJSTfSgbTK9bN9U",
  "key5": "xGAKYhyk4Jf2pHWWCiMUyvWDRmJGRVzZLV2u1f6qarof3ndpsDu4cuazrVgLqm9yvcUC8aNDZzs1XCgbFgg5S6k",
  "key6": "2XStzrzyfQRvPkJNZnkZsH9Bc9FqaMxfL5Gxtpeh9DdhR2tumoxQgEnh4hRf4qVV7o6ymwBbvTMhLF9VrLyfws4m",
  "key7": "5YtaQonhMYfUU8di5Bteav5VKMKWio9MQfVgveAzBQCW5HKTA1F8fGmawiSgMgNSCjqFoXmoF7Z6Fe9jn6N5BG3t",
  "key8": "5Qv3bs34VX9mn67WinrAd7mFcD2efExQGJLBZFrfM1UbAXY4hHBUvqJFYZUTtMedDSCQNbSFxKJGbzA1gLFm6rnN",
  "key9": "3X47fVWXrjE5watsnUnke7sBvfzSPnrdps6nGk4aqKnJzXu3Nsuh2Cc9r26oo8EqyvBA3KEfyAQTFDnaGiv1d2CA",
  "key10": "4sfFnNFMHfo8CGx1cMr5mPmkVKasS9yjR1fMw6ZU1RRo3yW4g4YjqGW9g8579QQAK3LSimHGAYybiZG9NobEBuB8",
  "key11": "4wNy2zvuNQu5Hp9VQgyxQEoAjDvzXjGoCNJuNFA6KNCHRMfib743GxnsrxGeJxyuj3FYENACgcCPiQWu45r6pUi1",
  "key12": "4ky9AaTwLGP6byyMiCwwSyhisotHMWNR7z4ArBSEETzkaJj4L1bnbHdsoc1kkY6tAnccCRy3rbyJ7Q2F84SLv9uv",
  "key13": "2WtoY14Mufs4MsDKS5Fr8hWVDqYkTYVaJt51wTEyaroojARcVRKyXM9UXJ5m7LAcjwHMAALkmXpGtV9Jad81Nv6A",
  "key14": "3ypsQHs5ZPYX2qP3ddVkJETRQtmw3PezZQtafT5LHy6GuS5Wmt2cx8KjWZhDHkWK7ENnsiB1vtXqR5z4M7rVeFxk",
  "key15": "3taPzKYP5bFTsS4PyTRejcULMwnZbCVoZQA4ypGc1zD9fnBBXCenvDKjaH3tGGbPhaMUrcCEbzenBZeYFeAsbGNR",
  "key16": "5SYVcKYpPddUiQ4zmqPjGAo6q2w2ePFMzf5cdfiMG2FJBxUPfoXnAzUXVawSuPuCUEBxsXZbqiGfYwRkfgWxpWXy",
  "key17": "4iakhAVCdxaAmmeiW6HyWX5Mn9a21kSeihBBHWjhQCGpxBZexQp5uosfQBXNfn4CabxMMDP7ha1BW5jWDeK4srRM",
  "key18": "4xVVs7vAj8vDxjoXN2Ghx62otd1mcvut7Xd9Xuba9Ret1e8rnnymbDGPZnznum8xa91wdkDn3HgX3UTutwci1pgF",
  "key19": "4k9Vgr9cKy8gSyM2c93reHKgwyoU7W2CYnow7VFE6doZ2Bi6endpnEpvDLaVpAbJ5KcmFsAnQz6AH8catm6LQZNG",
  "key20": "mqE1pDwgcj2f3WrFc4cqpLEnrNxp8u17kvgUYStHtQ7WEtJP6eKJq3Bf6v7hjGoBA7JjNAYrX4qxLEJGZJ9kZaV",
  "key21": "3XYg1FUBouqDMdF63SNKfhanrEUcuYRDUCr4EgUMFP4C3RwEAtxLhUWgHm7ftFPereLi66H5XkAWzaqQKpuwbND6",
  "key22": "2MQG96FJqngD755Tu7TptaMWhbnDuFtrrhMRctEVAr6GL1w1KahDYK9HA7DEWXG34oKmnxUd5idDtAkxzdcdnuBt",
  "key23": "VJZA8LVj18jUFa6ommzgvogG9DTqj2F91Squni7vawRR41LHFVoDjjQYrpm98JJbH6Cvj1qRpYt7y8QCXSFoJof",
  "key24": "38y5W9vPNggdXp93xhDuPjTU1sFHS5ZQ5BWAvtsyKxaHN3v3b4PjybB2XfNZWXRSTe1N5uNpTV9mcXrC8kh4U4Bm",
  "key25": "4ne9reTkuCsZ5HBJ15nLuFS7CQri6GcUPD14qs6V7XZ3pxqMPLsgT2Hz7gGKKC2wDEHPSkLWZU4oh8EVCvtgZGhv",
  "key26": "24iZ9tkmao9aCcrGbY3wLWgtBMpFwUBd2hgWfcsjUQ4Pdob4iC7ufbNZsRiq5nzj8dhQWxqWN3U6Nii5vUV32q5p",
  "key27": "2pjeu16K1PUouEzuiE7cHSSn9PKgWgkSmW11WvFprDZA7VmE2ZMSmccr3iKWPM5jmPUVuf6a6QpxycVzSqAbfcsa",
  "key28": "eheeQMFKAHf94d32cppsfZJS5eiHYwys6X3nBJHgbw3yDo1QN7L3LuJ5559hMDAXxAuLYVtomZBzUdr4JMbFFv4",
  "key29": "3S6pamhME7nd2FSUNqbf6bjwr7ofxr7HPBQg2ETbTECUAtcm3p6biRtSs6rdreoB7QRUD3Qe8cV2xkiGoL6Fq6Ct",
  "key30": "FuTwEqtXa5vwBCQDjNRmGM6iTzpQ6ihzr5bzvjxCxefa4T9w5c4mMPZgJHLX6grjir5YfokvHzpS4oaExTvStwe",
  "key31": "23RVWPiBTh1YiBaebogQpRErjzrsv83xaoZMx69qL4Uu1Esbe8UPBCxLsirrTDV1XJNLYeskhZom7ooEya8uhdkG",
  "key32": "3Vqmj6ZX52Q4Cf2TdguWS89zYfB6jqsiVSDnXtpaZXwHQFWXNzX2W884Fb7uVJC6kTTrYy22dGMHYNJLpa2Kniyz",
  "key33": "5wRLX9Cysgahy2LD3RnedyjYAK2L5gce2tmNKXQjoAmAfyqzqoVT1mv1r5tuUy1rhqyxQfCodQzg372xnxbyAUqS",
  "key34": "2yQzmuF7J5CNB1g39z1nLxT3umo2Zrb8eVvX9N1k8LUh4b91C5VG36AXiYATxAhtXoRcA5rQTxj1dJrEPhN3fGLy",
  "key35": "65uxoMnzDjKEwkKJzW6jApqcb9iAzGb4Ui2Y2vPqANvuHSFxVvfBg4529ntKVXERzLXwSuGe4fkyLwqVbRUZse1C",
  "key36": "64uhm422PVgQ1CSkBg2cWoNHzTSHp2pSoFeZ6iVSYr6FG5XJUXQZ7anYj25gsLJSx7CJdwQvrPTPGL2nHX2vXebU",
  "key37": "V1Yry6YQcLcR2c1uokvVH8qdDyBBnGC9dqoCfPdzh2xya4GJvT3yGzyuuHC3RodMhhUNL7AhMkjKYUjoBfWb8aQ",
  "key38": "58jhEeT8CrVtfrRoAgAECDLe7FQ8vWW4eohrLF5Gy9QEeCptb3NaaffmLTU85EFBU3fdGP2n1bfX4wawoYNxo6cv",
  "key39": "4KTrqLPPztMJ249sbZ7o4WDSec5Grpc36u3JXnZFLFDaN6Y3XECFXAQKzRVfwd1Tbzm9dnqxLGvrpMKDuXpJxdwx",
  "key40": "3TtGjbtsdhLsn48ANYVq4xcAjX4pELa4K2hAzJjD6n79bgFpogkQjiM6jAqFjUvxvASQewWMqjFk2qtFKUzuo2fe",
  "key41": "5RCXFA1MQWy2mphfrwkSwfdcgmdVn7gjPqiGKpAriemGDC1AV5kJMsmkzCkv6LNUfJraVBRebw6YJxWHCXYaherm",
  "key42": "tFHKy6TKK88Bwa4RH7ZT7oxuGpccb37SfadpxbW5daKRb7o48NB3Qf6uwXdQ1UicoCqnzNKAinhGk6EE4nxoHkL"
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
