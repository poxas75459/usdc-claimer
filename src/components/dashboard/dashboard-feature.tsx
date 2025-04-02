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
    "5z9mGJmtjS7cdBKd25u6dWJL9StZtRyG12qYYm8CU943giyCPLkjsVVug1DBBAcfZ5WN2nr34YVQqMgLX6L28uLu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24f48fRH5GjKjTQjgZup5trZ9t6RgAgWJatYu1kPsaQHLKvY6mEXxMqNAd1tdYfWdXqHm2VazoZp3CZrTfjXhAjT",
  "key1": "3xGRLcZPs3SV6JPfsCTD8pSu7YDJevwhCiezzvvAnKQxjT2HPcgMeNvT37kcBmG79ynNFz4QRy3rfVKnxKK1eYpz",
  "key2": "3TYUZ45AkNk4CxVgwQUGVq3eWT9eM7C6VxbZh2C3ggdmLzT2ycsKNRjsnHgq96YVmvS6387xbasS6LZC6P9M5vMm",
  "key3": "3LLRfBf2EC7aJ2aP14VNPhzuRro93hCPPhY6mdU2Ut9nK1BJvQqsajrSiys7i1NGcBKJEoSRaJBLJABoQeCCuLd",
  "key4": "4kGk8arUM4cr2pDunDd84B6S6xkbr3chTH5TzbgDTgNxsGUWAF9aAzZay3vLnUHLG8wwkiuS5a8Gnh5ovm2rbVVe",
  "key5": "2rh2SXUygJuQn8tXgm5Wb8ntiKQTCvB6X7FUVhoN7cjhPesGuUrT58zk2pCMASCi18QbE52zHkpx1beaA98n9UhM",
  "key6": "2VGptTHpmbrxTmqrTWR6HzvtQncWay4o3etUgaxfnTSjxZ5dNWDWqKfUoj5oN3n7dQr8UDS6AZpEvRwUUC4eo1jR",
  "key7": "4hwYpK6fNDshunsDPHf9QTU4WGFrW2totiHzpGWyFzWawhJoBDtJxR1GndkfkER2vv3ZzDMdPEzZNp4bu8vp3m89",
  "key8": "571ffKNgRBp9fwkMu5bo5u8RwqnodVMPhY5nSH4eGJzGKHHfFbiHWxL7EJ29xYEtxSq59KjkWfeu6FPLKKRBXDvy",
  "key9": "3kA6pxu9zTbu1i6eX3abkArL7omz7563bqdsG4jREt13fTYWJ6v1m1YJfSz89DT5V2rYV6QiKnew2DBg4VnDBXB2",
  "key10": "GwwVwhYxi9qSorgHsVKugZx2LxStpN66RGAtDaVdumiL6MyoFJmp2KUpVdYQemkUVyTeoGWPmY4TsWMuRjZDhkP",
  "key11": "62YqXDUU7BfrLzkvRnFaf8duddq9xBG8TwJU9Q1djPcsWa8KnwfQMFerYJMaiSyHTSj8Wa79iymTPYBcXfizYvQ5",
  "key12": "3rtxWwBvi2Ch4LdGiZw8b7k9a5UMrwYryuuEPwmSnhjWLBPJePQJcKeGRCww1xd3JWYVkpSmunNDjeTRDUmCbbtc",
  "key13": "3hUX9CsrLsnGp3xTvA644B8FxvrKWX77hknEbAL7wqE8Dn3wMDyospvWE9W1F4YeqSziuvFsJt7TjtWeCxp6iEG1",
  "key14": "2PZ854cc11UbcdNvnN8aZjKAwcpBe2rBAorhiKtvyJJPpgse4FX2tPBVfaBEFBAa6eTe95UZjoEww84rHSV5dhPt",
  "key15": "4V3XqkqiqQensZA2XiXzAFMYQCRY4xENysUJ1aDr1a6HVN9qdMGXorPbdwCQReDeVC4NEfWw8i5b4XKw4iaBQgQK",
  "key16": "21hLn9QigqHYmj4zBritewHt9yQa8JkZUbsgUE4AAMi2sCzepTC48JRqU1ac12heVsq3xuQhc3kCCPRNdJpMw4cD",
  "key17": "1bNe79B3pKcb3WkhNg9v2iRnsXsWYppvR3R5DCuKDYnob9qsf5Ausmf3ZtXZpKnMjird74JJTFji5niRcQCb4pd",
  "key18": "MatZHR8f9dwbv7rdX34cESbXbnLF8NsY65UDxevbKFihDBCHvJirNoaDxgMruvHrzrZL5V2MP63kpiUTeMDsDz5",
  "key19": "vCjcBrPEA3HK519vHTpVvif359krZDCaJWaXgTfZr8MixqFC54XSG4TnJfgWwpoNACzBMRgTpLNjCDhsJHH1Uq2",
  "key20": "kv2DuU8v9qWFNsqQdfFVv1BBQR5Md45fFmMYXMj1SxQ6KfVbSYh12g5NCoy5whPCvAP4P8rpDvuGS2sCE5t9zvd",
  "key21": "5nS8T4yvKSiwhsLvtsUxmJtHRJCmw4mzuGQ1EiG6CZPz7fXYMbQhhhbWJG41hLMngp2WmSE8BR65nYFdQ8tV2FtC",
  "key22": "3FGDBgpK6FYV9z3pHNyPJ5mP6h99UR5LaFsgw6pQgUNr5t11tBAGXdruKZecf354HCg4CvBgAy5x4Vb47gG3Bh8X",
  "key23": "2Mmeg96ABuxvDpwGDeS9Co1qqn5X2DUadHZx2N2LNs4t4p7RUmf67yutgdEjMfintMqAgyHwnNwzEhVd5qqEKUda",
  "key24": "3PuLtRmnurgHuant5vpUNmwPMyr5B34D2ypspSwsfnH5P8RkvPDqEsva8WJftXnU7DDZnYEUetuQf5g7AqvRbemf",
  "key25": "62xgkk1Rkg3MJM6uhYeykZ6Kh1Gpi2FcQb9SaVCXH2D3148zq6ezek81kNtgzkm724KuB83aKFvHAAXy8gVms4H6",
  "key26": "3LPFQskZHhCnX7AtehBKZHkBnQHNUL1hrKNyasasGHWDaZpWwNPxiHb4k1KBu6pJxV7kxJZytXZGAY3mr7EzpRLo",
  "key27": "2DQNzNpHW8etTwN5zLTwXjwG38Kj6923duUdFFJ2SpJBuFe9jukcttFtDQwHbrvW5BoBgvGyU37YK1ZJ82Y5Z4SK",
  "key28": "37LatX6Ht7ua3bV4dP7vveZ511V8M47Hafwu87AzxXopCAqVQG8BNEH8QerWDzXFPhJYGatuy4T3jSsNycgkoFJt",
  "key29": "4AECxbNY5PNStgMSu7ftsYSuLoYX218LujM92bYJTMu4EA2cjPit4LQWVi6KKp3Etnhbd1giV2twRtvhcidGjaZV",
  "key30": "2c1VEFLKYeKSvEcGuJTrWQrLHqExKDMjaH7HZUBYh7jdnP9g3544JU6mY1N86NCzyRaHZrcQNELMEF7SmfU57Un",
  "key31": "3JyTDhcT3TRQjayujrDWUBsJ7MkY5srSiGfYUWaQqJfMqiGgqfQHFpdJNcMx9fNAbbtzPgb8gFAEhWAqan18Qcy8",
  "key32": "4d1Yb91E7DFtJiXKe598Wr3k3bFnyiCTfMriiLPf9NHm2a3k458gLks2VYGFVjP8LydqyUcQnxbQoPCgJo251ned",
  "key33": "4TqtayMJDuECPwtygCvPQwQtV4rReHDzfupRC8cjrYreyGb7FSVFiBwAXNwFq9987oSc7NTKxd8Q8L6n1jTzGS3Y",
  "key34": "iPVjxXR6rMZZZszSX77TbHwL3sCFMRAV5NfVTSfj7rHVFiBPWgc9aBWPRM9C6RtAp54iUH42YuYuuMozptiQr4x",
  "key35": "3fmjWbnAQLjmD3CW5jzR4BuoEsVHrCYmBmz9pS4nkZRoLiqJNM3Xnu4mWPSWWxiP6EimF78ZShuC845TzNriM5rr",
  "key36": "2dfHs3bgyrJhvMMK6TaWe5VmTnzfCju6NSn24Py5EMGZXyyeqpyTFAJzGAxbocVwthMccR2NQEd4KVRNhdRxq78k",
  "key37": "2srHiwTPCUcYENJsgUXwDfTKgmH7GsHuu414XQjZaHxbFH1orHkGYw4MJDmNUtrJaVknRT68ezh8fGH6vKQYWJ4L",
  "key38": "5QgTC89H6vQQVPx7jo9iFTXGs6dm6XoFEWrvEuNmwaTQ9UYaAnR3MhyaEbtpzYp37oF4eJRJuqseBhJSdf6H2keW",
  "key39": "mnUhLx4912RyFXW1hnFTj2MYDcbCNNg4DAcgp8X49zkgHLVvz5aCBLtG8XVCAz9WdwokscrMgg1FNDzW71gtgc6",
  "key40": "5zYtQFTGHzbNh6dFb5y4DyqjZNDrQHsFMsBMUMcqEsebu8tQrMDq8aBAzPYsJqUpGpumcjzuxWySwHCnAkcEQBsf",
  "key41": "2u7FyeXHe5LwzPTrwbjwuJSqx1BmkpwLunHyuftmN52XNKofAWPywjaL9WvUSjzLNBfRFJexeX19r6K4fnRFNYHn",
  "key42": "5gEp3QjzqZbYQY9gESs1fTbtUFArFXm5zFufGNwmssrPWsoTtpgzWLXykr9qb5nbQuiTt9bLxWCi7kTVTunQnZiQ",
  "key43": "37FSL321pFi2HXbUdLgzNbv4LZ2RNLpXhxQccfXwfPhsYiuYuZDLNodYqARif4rsuhqNsfQvqVXBuUea5511Uwuo",
  "key44": "ca2g2H9cyECw9rxAp6jGZhESducJ74mUdeymFAm1iCmPdNDLRY7wdYrKBSELpEZ6pnH28ZSHX8o69wSXwUBSMhf",
  "key45": "3QvSQfas8UntNFbCDMk4m2xRgagrSoJ9i2RZcc9CXE2dvN5nqraX6N9kiwfSru4wNhzVgFhJzuxqEVRYrRwk6QkW",
  "key46": "5gLUMnsZjrwgYFFVaAQVq4jnJZ1aLBg7Fo5DsEYUcWYuAJFyKxC2u67416TvcittJG2VXNy6AFY3EgjzKuk9AzeK",
  "key47": "5kCviGHUWcW2vUhq2oepTqQ267xjSHDqsdvk2qFs4oDnaXkaiFUiCr7aATGVYKWorvXcMsWYjozeaQyKShda5Azi"
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
