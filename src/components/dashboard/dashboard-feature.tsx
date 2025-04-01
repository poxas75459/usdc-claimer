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
    "4ZLux8GqLjhjpXVyE54Qu9UgHgp6wMMpSKPmbEeZWaZYEZBjx1QFxk3XmNj7mYbwAHUasnC91Wmk3KL5nCEdcqy1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64tuvDh7SnzMTkH1KSeY9vhS65TApsYhwMC6FPX5TPBJbJPB6emrPQkk4UYJVCN2ATGZu8SUHz7tNyYfPgS1d5yD",
  "key1": "2xtDA7dJcrEZKDSq245FeJ2pH2XMbB6kvnG6prjsiegBHuc1RR3wMEg1rGCfX5TvktZJETEduNXPYkPxHWLCGeVn",
  "key2": "4f9vVkC2D7ogZEqytkwEbfmcFGxKUBdsqAhGDNXMnTfM9dNpE6oiwoHGQsk49phMkskLq6Fg4FRX2aZjiewkq8VX",
  "key3": "5deA1N2fSDEBsKyZDQKAFFNyHLEa3ouRLdwpesi3JZoHSqzubr6Kcf2HvWNbx3ZsScKdZ1s7dXyahUKu1ZZADiWP",
  "key4": "4ZT2aUGEJFecAK8z3pMLbUkFVKBYRY6MdLGk1UEPRXUKvc5Wesspv46AUwcjTVAcdAmvs5o7DYy3WXgH34pg7mfj",
  "key5": "DBiU3gfgXAW3aT9hbNfqADN54kPsMHhMsj2uSK72xixr4UZSAn555PqrTb1pFY1ULumSMMVb8Xg37Lg9m118yVJ",
  "key6": "2bbzFkKZUmDMVgVUVJZMaWeoJrLFWcMHqwHgVAZqCvGqyoaLVPKwXKtMdyyFuvT2bto1bg62LnCnjLGBGMJ7WYZy",
  "key7": "3PMRrHBHYBBRbRwftgFe7fqARwkncgStkeoSreTsm4wk4PtPw1SJCYpZb8xfbDSYdh9v3Y2VzbR7Dzuvk2U9VojP",
  "key8": "4mSZUC8xKacrFnGpBRYyWc28wsZ1RZ89y8usMor26LtaHHrWKwAWSK55g6huaV9SR6AD2S8wcFNkJa83EnnUqqkC",
  "key9": "za3rwVUyXoiDrXVAeyH7va2afi3vDoug2rLeThohV876dA9jqXod7WGpBtH8CZHWSwjRg2x97fnwqXdXH6jvLpq",
  "key10": "35QQSNBW9f11Fs8PrUiTnL9jyhUCxrWqEDVVedpY2mR4b1ZnoLbmTqxgoFJW6h43TumkddTvGNdnvycqedURnvaD",
  "key11": "2HFn91D39nrQEKUQ1z48KCkeGHBLWoLjWEtGTRDCEZcAYsoEkBYMS2n2qmohD3CdorKw2zESmJTHamRKr4goEgvm",
  "key12": "3tkwu8iKxNReR1eGurszKatdvrVpQWVPW6rtne8XZCjcxZVKu3pDGDoACuSYVS2EoKP9bSCqhYKcGGnn7v3LcimF",
  "key13": "5jnwF6QWLWBvwBSXehnWVH6RQoaujzyVKeZqP1sqATtgNfvdxdLGM82U19WLno6aPZ4C16YdS6NA3tKmRZfxX4mh",
  "key14": "MNauJX2NrrtHcSKrTRc6Kk5Wx5CQ2n4JEUaPLce3aoSLPgnT9QAKhW4hGg2aw6WenPgnFnqZCS95iktcfGsLito",
  "key15": "3Ez8dai4u6XSMrHFWAUwGJ4cYz9xmYAdXb89xWF5s4LEMitAJnpuX3WsAAM5whVKg11nnzdJGVeN4UatErPWwr6h",
  "key16": "63BGzPFKvnkJcgzj6yXcjeyEutvm8nvNL9EyrLYAi61aZyWijWHnRqg9ELqRmoD51MigeLJFRRQbsG6NvaLYEFFC",
  "key17": "2p6ffjyrLL2p6dbTApE821SgqKfzhAdZo2SaYaBqoTNdo1Lb6gGjDY1adnoVPJAfTM8kxrtnbjXXtALHRQKNvJvo",
  "key18": "4mPAwtnkP7GVwV5hEGX5oTX4kJSzA6kkLFu4T8PZ3pnrqcXEVyiEUvZeQQzDesDGAHyW1yFHSmM2ufJhBzXkDCdo",
  "key19": "xUjiVHNvwcuscdWesP2ZqjziZioe3s5WCykhsnrdqQZPueeAi14VJRVU6KoY7x1ThuNjKUYcbmyTBXBXL17LFJ3",
  "key20": "4fHHxLgYF2bho4owfB8ytt3cPo3GKRTqUykidGC9tJTswTiMQdRy5RHtNYnGFQhdpXNa5TcpKthbmFThDLVCiEiH",
  "key21": "5umDFRxAqh1ijNV3abWfiJYyq5fs66y1QVj3aCXm6H5uVx6PFUqiTU1Cy93pf54sMtw3eFRk7GwPajqRxreqk8q",
  "key22": "2manW2S26kyU8EgPb1Bmk9qwWhbuASfQkrXSTo4Czve9wvVLjRVfEwdnDH9BuQkt572DWSLzeL3AnkB1JsopPcTz",
  "key23": "5JUdYYC11Pg1L1u1QNDyBahvBdeVLmQXd5KGJ7uqn4wLsgnaFL5NjHRLyo9fMw6U6BJhEkzRi6gwQWriuWUnZzJK",
  "key24": "54PW7JXqgtFVZ63o2GEdzNHCdtnUuDSn5aBDeAi2pxz9WJkedwgEy8Ahq5ZYS3yGKZv1Nd3Ez5TnqhjbAheN5nft",
  "key25": "2Jf9upaNgpJrAQj7PRMTHxCYenJ7mNZBByYrC14znVKKPeWFXpfwNZ6rcXcUoXd6Mix3GogVtdUawbaJz4313r7q",
  "key26": "5SbzbpQ9igZLKZioj7jFwjaGXan15A5tWUvgYJiaiA4gGM2nkwRSS7XNkE1ahYjNWhmWyjeRPDAZccp5pLDpY7BZ",
  "key27": "w2purWWAyPDnRLdjN3cb2MKnSe98rtnYtwXoiqPusDkJHL61S92LzGkusayVE4dLrG6o7wB6M2vYqzSpoQqqPZj",
  "key28": "29tYdZTpALy9NyJqCpB4pyLoEr6ZF6evW5Y4jAgikhhriFLoGNCmMRrBHT94aU5idfeE47ba4FMUzjhRYDFHCKsi",
  "key29": "k3yivJxqxGe4nrABiFrBP2mV32UKHP9k8HB55yJfAZLUBDmNPjaeecfZwsiHTwsX6K6a22PCBLigUrb1Joff6Uy",
  "key30": "2teNwy86ekqeQUgsJzSXJK49TcVnpMV4HsfeCYzDYvLvzj6Jq27Jrxa4wpKW6CPt7yfwwoDPUrptqsnFmedZZMqQ",
  "key31": "J7Q5viBn4thtazWgyvzbY9UcNdHu5TdC71sUyQH1yXdgckKFpcdSm8WuAUhPJKV78esBvZD3LWUMWPAR1Lv2nFQ",
  "key32": "3BFy2GADDrbiPXyadyA1zDRAeNGUSpBdYaaDSQspDwE1LXSHw9P5JkMxckS8ZGpev4ri1EcXJTAMMgRq4tQgE7eH",
  "key33": "r2HcwPhVhFTGj2aEpHJZYyqCyKFbebbnM7qL3cBNE6Spku3rJHGJoCwTMA4Nk8d8KzDQMrmBPqXPDCvgSwKs7zY",
  "key34": "39Q7XseLQT6juGmgFFyk5FpeV2hPfZMFt6cBW4QyiGXgW31PdNpqDssrRynMaiuPC7ecwEp18zJpJQbgG8Sym8hz",
  "key35": "35tLJfRwSe15aQqUtSoP1e7bsZMY5KfW29GaTEnCbR9rFy8Sq432XQM8cjV74ofWhm6oHiAAADYdtyWK72rkGGuF",
  "key36": "2TTsL2hbKrSY4utULXPQr7JCyPp5gGGFFWTyucHyVceKVqtSRcDWBNvkQbeHvT7kr4TD8excovW4BQjkY4xZVwYp",
  "key37": "5ETbJBht4JMQpieLr3FDKVHaQdrrjMMqbJtf4beoUXYE92pztjez2Uzrii3jHyjcBD4NDQsyBBsX62LNK7WafVEA",
  "key38": "5EMr3xaYNBg9kFxGqybG2hTr1ibig4xuXyGurDkt94YZG6d3Jx2BwEuKToZPfKL77WYLJ744K7mmL4w3s6ajrssX",
  "key39": "JZYTuPBhwGeEiGMCNAbx6MGUPgQzZymY9TFCGhwxofiBHQok2h11uDGg4YsZW5ke5eN1kaKSrDccu1Fyfr1LKR4",
  "key40": "2jdB6wKsqQQtq2qxWuZSVit6gpyai3tc4tMqrhubqmc3h4jpyV9Kh7aTkRYbdogvWfFFzL2qM3sohDhhdWXWMmfJ",
  "key41": "XkUZdceD28ahqueUdZkxYF5VD8JVBfpLW6GwCpLYSTbsGoDPD4rohhEk3j5eFFhtbUrAQBhKiKQLVz85hfHE3GD",
  "key42": "5fqNx57p1cQrr8Kev1VC3QK6cERTTD1BRpufYTPZNsHbB2QzQoRQr6PtGK7jYELNXMEcR21nmCLnYSZHE7Uigxu9",
  "key43": "42Q8EtnUGrJuZQSTikC9t1UPLirvdKSG3hw5Fob6LFjkFGxqyymdwYHx1uV1WHLGyAqCuBA7UHVXWhQRSaVJN1fQ",
  "key44": "3eGCcMYu4NnCekcejrXiwrQng8gL1ghjDaZbmjZqkFTSzrqhALGk1YnoUbm6ZoD8pGpvGDfCanq54KTbDPXWSyCK",
  "key45": "4J325G9VaVPsZR7r1dK5QDWHyEeBoVLfEzkesX7G3wA528JrPHHkyTfo4KrLrhudNnPbNSXF2HLXYUbwJNEsPFEh",
  "key46": "44ixfuEoqczHiXTXRoy8CB9vtvYtPGFZLvYihuF955wQMNd8ApkJJ4Y6kCiJh8kK8g4a4G1fEBekRbUWeBaaPHfK",
  "key47": "22LMQBVPW2iJz7pKPFSkMi2EryfHmuAQUF3nxopkeuPmpmahPMgPLSu1MseFzfPnGfP8Zj1EqGvpaMb99Ptf3qQi",
  "key48": "5tzAZFJcT2zKmDVpU8Csa9yhMapshiQpAeRcPMQvoUbMLvSrpg7NCGVqzH19Whk6ybq33io41ZagiJdyiy5Ed9PG"
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
