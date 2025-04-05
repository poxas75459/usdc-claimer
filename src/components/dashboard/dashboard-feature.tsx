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
    "i8pt3A9uhA5WTVrsNVDZcKAvkK1ZEZ7wcbL6Cjxoq9wQxHLgxxQrcrRMwcGdpDjaps4MAPV3FgvZAkVSFybzecZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wLJUgds7yirKj6TYuPrSZszbgfXkP4fU4BwxHeYK7ie9kmG6B29VuoWVCumRNpvZJ7LGbzHkY5cysiFrj4Qhbmz",
  "key1": "4u74kpj7wxGW2kPV5uzdMdgL95BsGHjqsmbvUrG79tVk5SjC9b6jaVKH926cjHBrpHcibJ3RvxYpJbBanENhktBZ",
  "key2": "4BTYuy43XFy5jXBhwgqFDuq5Xq7Gg6P4P8koXmLfY2iLwu8dkMY3SZwUDUftpE6JfBhjzcdNLLNaoEEvgEBksDHw",
  "key3": "3hgkDgZDkUmo9dHhm4eq2G4MLzDL2ZZ66FufT5RB51ewyaNTYGkfGKrTBVe139o5kYVirw55jxZ9oK5ZfjeeukuJ",
  "key4": "5Lhbqqn5BJD4qiqfzHBC5pyeDnh7nS4qZCfEKVWX2v2NjpY5WkUAru3KtSqqTdbQiVGmAVbtmQbN7nxZ3ZBP4Dpk",
  "key5": "2wUbyEeuUCEud6xCRRy9qbhR1JE64Qt1tmrLKfngCDUqTSi4rmQ6ZyAzL3u2F8cr3Y6A6tQhGqzwQm8p2rKb1aKw",
  "key6": "3crX7wBUUwq1Wyc9AYURAVuBkKWyW3hTuiu3818D4j1GsVGWsN7ijkYkXwEzM2VpZNp55ziTYwFjrrTEgqdWWM6m",
  "key7": "3aw6iAdAVKkR4Be8FoUDi3APxk2eFHSPwwaBKA5Y2xXinCkXDjpybEq2LncJWomVQUr4RcGMPh6oYNiBs8BaUFk2",
  "key8": "2L3sgrjuWgDPWXGwWe9Z7Uivm6L2WZ8nCMEsSH1Fd7d5N1i4ok8baSZUKw9Ns8KU9aEyyiWtb9qF137NRMPEfH53",
  "key9": "4pFCv24sWJwj7Z88vJtPARHbpe2dbgBAfJW5chEqP5VZ9rKHfAN1cbC5F8bviVsBRzqSKUy3g4hJGiLxLskcK5EM",
  "key10": "4xu6v9Fnwe8Wts1Cit46BzXYqSZe1bwAgNS8C7uC35Wy97MCgpJrapHgzCTTcQvPrVNm4ytQw2fsjnhWdWs8nTpa",
  "key11": "577PdfHPTQ2SSZm92KLbiYPc1yRkizrAF11U15k19DJP5HQZPBKSbwVDExgERLnVxLMYWStSaua3fTQZtDxR2ZKz",
  "key12": "2QbT5aWTJ2scBR23xUNk48TBDu2hMZQjo5Yhf2RV2x1ynPGb815p2K5QixAcgVc1WK2KwJPcwAQ9duM2u8j5JThM",
  "key13": "3oqw9pG2bbMw7o5Y81uouPSVFSkA2JmJeGYiqXbAhnCQH1jEEGMHHZKATWQSXNXrR4cKKAJPQbpfmZUJUA7Y3zpf",
  "key14": "3GrPE9L9e5i783p2Kv2G4ZtwKPZBgEFqrpaqw9gyU6Fop7CRww5EK5zW4nwewW92g6wQxjGB2cVfiz6JR7hab7B4",
  "key15": "5RPU5qgDpxDV3NW9XfN9dgdzv6gG6WXzepXpEKEUQWDDf7i5Gp8iwH85DjkFbxZeFrTmt4ebri57SisBprR3QdNG",
  "key16": "21eLeEeb1HtBQpWsuksCT5sEzPC8BC8Ly3SsiQh2qeNsXFp3vUoAYYi1woenN9NHSX6hjQeB6JD1XNN72389aGV3",
  "key17": "4HyRyuMrZWZ251P9vzg2fh5qCDuwd3schye5pXV98HyXSrhaQgAeX42zJMMLbLhQSxJtgehTjTNG83DA5tbtm992",
  "key18": "NSYuz5JQ571taBHrsb9i3pMSAV6ZG3CfzGvKR8Jjmrnu6zt3pvcxhcUj5bkouSJ8XaGuYchKqWihwZFmyysDyEJ",
  "key19": "3yZjWyjtTyK3ojC2Xs2aaz6YeTFwiQ5DPn5aFiL9EQ7T5R8E19NfmcvSGDtKGbD3k3XAnPkrB948419cwxwcRtxa",
  "key20": "3gvU3Zy2dLJ7ZpzvD2Ledg3nNyfWQtvLY9VXsFQMmhhBpTu9BLv8sTYEzvPH3Q7B4qVTbHZFaRQKZQWJ88HpM27n",
  "key21": "5E36Vyno6LUBTKbUnryDQCY1VcDiNwgwTRw5mYHdUyJiGXRGRxcuDge9SFkd7kVmbdRCAFwgiaomBauE9h5acb6x",
  "key22": "4vTGSUTfR8EiVSEdUhBzryKiAx32k5nJ9we3MGqEYvpomCCMq9nmqL5LAPr1nMKdKSwNzQiUcLZaXscwGuwWkZLp",
  "key23": "2c99wRf4n7K1o1R4tyKN9sZJUELasyMCCBrDYGZqHwKLL6zwtDxwaT3kBzgFN7yg57xLY3CT4FsWemD7v3j6ZMCs",
  "key24": "3zA2xCrU79qg3WuhPEKKmxPMZHYdY7LphL41aaJXASoZ1UsKgBtjmzveENw3xPmiRHHjpoAcuM5sEBK3CQDy7by8",
  "key25": "5Tx2jAceCSMutafYXbsmkmbm83q11tvTH59DXqnERFgvC2D2D4nTChw9zVCev1tG8Jz8SPqjEL5m2a7uhSHmWFoa",
  "key26": "4shdufoGLKmgBKNQygWBHrXb4GJRxeCQAsHBuFjSM6aqx3iHC3cSS8qD243pByZMDK9FtXzGmirwbpjufmDSAqca",
  "key27": "uvBWc9tEx9qVtgfXnbBr8r3vknccbDCq2Ahad14CPN5KQZe9gdq8mzR3gzrBMvZigy6HDJap2x6qD5WzUKNp5mM",
  "key28": "3Hyjrzscv1afPGDB9XR4pMEKftXXEv4nnmLjofXMKnV4uavCUZ5kkjLWLdZA6pVHmGRnM5FMg1bif6uEAwY4QdQv",
  "key29": "KXaHLWnfL8fKPhnXUYcbrdnNKy2tjeE4vEsgK1caaZhtjys87EUyfxfmNv7pp4dXeu1aESWUpnbQqNPwBM8t1wp",
  "key30": "4VApVGCJAT7SnhSp5C9ywFwPGPbacFBGsBXPcCfuDiLZeVok6VsQRY7gkcCGfUeBGQKDjQL5S19FQrRrQPwkT57r",
  "key31": "4jEqAhMaVXUdn5xoWzDiEXFWkZaBs2wo2H64eYXsmUazcDRkqZGW4EhiC3HZUnYDDNQQ4EXc2AQpKLeLF9DdYvXM",
  "key32": "2CMktiqbiwNK7krr2XKFcwgBTPaQL4CoLhNFGJCWNDwsADqATbLp3nktz6r1S593cmHMk8Lq83twYbuLTHQwVw7L",
  "key33": "4s12gGZqbrYKrDP8cJdq7qHBXYXqvwHXNf6YkT5LuVLAMVmoyGR2fTpJkoKiPFrKBAk4q7HaEQRz1Dc8J935iJgA",
  "key34": "2onfPaSq5SqCx1f3EzRhypeNyQewcuThqhYSQtWFFygsToejgayD6QoWRKQDVKmYVsZNA7LhvjeFBmRK6gwXH2mX",
  "key35": "4NLNHQk6aSYBeNDwuKpT6itnfqQce2FZFAGsJ48wSQmDAbwZYLmCm1kRyGfb2qr8xndfzjH9iPi2ZDPFvhCJSMDk",
  "key36": "52rj8751YoAfQ8bHFpm2cWH829u8fvUEuMZrRKhQdJkBYPkQ1MrZwartqytnefpXUf8gm4mcjK8Yhjj3z42Qj5yd",
  "key37": "2917UFppsRjxzhWQDpTRkP1YyPaEabazsujzRgN5jqtTgXD5BdE1NbNFtVL1zQM1KC2uU1VFcLzf1LbQMSkjRtxd",
  "key38": "sms3npg554DcUrSAfCn4ymGVFCbMZLsqq8ENhpiTY47NNZQijULKVcKdYqjXrnferkHo7hmk1Gz7QV75TknPnoD",
  "key39": "3CE4iafj9Vi5NCKoU6twU2PybCg3rmZFoxuTERABpBPzT2LaVddWNzMWQhiSaQjmZzThjnP91t17Vhg4g5tegoko",
  "key40": "3E3JKdVCjb3PqtgVKvmET4dMzBkoQPKBBbJEqKayGaYCfdb4DbXTGiuUsNuAuLK6ZhPTTzZX1dACYeiojJjryXJk",
  "key41": "TYjQ2Nfk8QmV8mZ1E5YFHk64bkvACihBfA3SpLfTpEnbmAaV9wJJZgKZVcc35HtANqms7oMey1exxZSdGRkiNmG",
  "key42": "5QvgiZaDWhy4T2UFiBfPJukgytMoW9TtqwBBHPNcVPKHMTDn3hQSrsLgDDPvKiPJ2Z3bv2bpMdVuKAm4BSLFma6o",
  "key43": "qTDuDza8ukJHmMzzzWCTdF7pVF1VLysPd4ZSw5fj7TkabBs6sS7HXezzbWnc7TLb36rJvDwPiNdf7h5qdnTEJx3",
  "key44": "4wYQaY81hsifSfXtbMgA5K76CVLdfQGt5ru7jv8hirJW6txAEU1o5HBRR4jtcrbEpRbeMu2ScKPHUmZ7zzuMzSmw",
  "key45": "3DWVrV1kiEBbZyoMY5pujttpvbFSUKqLi3YyFMAZaY6aUrk5ixtHZbyN7th9FhgxGgsAFyLZP8y5sA5YFzxb2Ruo",
  "key46": "3kby6xk6dh36eWxZo9HVed2WSe6r7zHVYcDTvk2FzAWgBU8mDDwweUyfDhwJ2o7Yv34LtCdVdBEXgCVGDRsX9TZ4",
  "key47": "4dn6qCP6mmf6Jnn7fS9NBhz6Sh3g47mpRqyL8Y7tmGEfsjAFV33RSu9McUCbRJDmoJ371EHLPZ8Qabimbxq2Ehx2",
  "key48": "YW6why7yRDmPVuf5Ur8mc2QmW4bgUVgyrHifuysiXGtbAxKPgA8gA7KTBe4pQ2wzDtgoUQ623y5HLYcyeqZQz7Z"
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
