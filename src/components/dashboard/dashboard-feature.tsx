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
    "4cq25Pk1TMoirKJEdLaX9y5s1e5B8Q6RpP4YFQMxArccXhxjiHHds6YLauELDhgZVNQXxidRmD7WcjJh6SihTYVc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jdJ6KETQQjTdG9PF5x6Wedc54mgw5B4rGJTVgyu4aWzcadSrY1Ghp1Tjrx5d4Jtxr5f4FegCXrXZGHbPi5haw77",
  "key1": "qcTKynH4Yr6ZHsNyZEEuA7Ssn3estqifsH7cQA7s3Y9khSBhQq4z1FMoBsFF4x3CsS1xEyxAEq967QFcCBFhfxF",
  "key2": "41qzWUdUzyC3m8ouf6EqeVKyKr6oKBdUpbxW16211NS3VoUAgFdGSkiZfy6C6z8XgZ1Zzxc9fTUsHYax7pDMx23u",
  "key3": "5ZBwCxMd1CAj16EZdpBUa7W5Z56QdrNnq3Fhx3B4zNptCspRYa8j8cdfTe5a2bAm1bJz5eJZ9JpWTWBfopg3ySh5",
  "key4": "jst2zLrdWT8dGC2h1y59S8micHbcLSY6qs9RP9nrwkWQTpxpJu6mYRTz9KsNfB5YP1ZJf8ikQr3sFX8pzgeJciU",
  "key5": "4rR7eKzD1JyNP6vhpmxC9MDYjMHjPRZgFpH6TnGRhdGMoJqVqydb9pGk2GWQeFPirPnZvouvg4GwG7JZgpvWWyGo",
  "key6": "57zHW1pbyrd2iz1Yx68KoEY35wywGZRYRRE8zdMgpaVJWEpvXrG3rCGmdH1VV8ZAkRLouEmvuy2QZg5eLwHPRLnR",
  "key7": "3DFDEH66m7K9JEWxZrufPhANTmgJwnRZBUurL5f1MvxZAvooD4AC4KWs81LRiDKkq1VpigmWh2F1fWGweJEH35Zx",
  "key8": "28H7z44P3fBpdWjdSs9dmcLAC8nX5xVobUpyuzJ4YqUtUzfMPa6qv38N6V2G2ihFphPSif6rnPSWWpFbo4D9FEwd",
  "key9": "47GzywQqevz1pgHEut3EouerjM6rbZMd1h1MVeH94FrSx47cm2YBS6SeLrsexVpiL6pT9efNgLJSv14iNJ3BnfRT",
  "key10": "rNW2TngUMQHVJ24naDQ3oEPjpRhUfTjywZjPfBM7Df3CCLXo4KapV54N6oePAHEgg9XxGGkVVTCrmvm6dwTqseC",
  "key11": "wrZgz9BCaWsHo4qczNQ3JHJwjAPs6FHZKBkptM6WifJvBJroTBBMamcZcRugsecbv56CjACPtnLuS2mkxfLp3z1",
  "key12": "3poek6xzoiu8ii4xe6E9dukW7vC3VqLXNQqLskxCZqEXYn7JWG8cKdKLFmFgbKaci581L5MVufbCEhc8jG7w8jWr",
  "key13": "3RacXrys2WUt6Sxnn9M7EMUBF4p65FEfjoLeoBnuEbxoYNf2ocdNgfzqqkY8bFaYA7WeiHL1sLJFThPNEULjd6wQ",
  "key14": "2E1EdbQFWzuTXf38cW1PYVLkFVkEvhDa6aqD1d1TpxRMHBDRXcEyVMw2RhWVvtzZdetmtRHZruFvatMRP9oyZ78K",
  "key15": "2ujNKy6hcyDS7YxB6QNrwhAKRv4RHdTRma7eU4iEie5PY9ycmHhkUtD4jJrWVfRrGndXQneXRTGJd8ptVqYHXs5s",
  "key16": "2uzmF9thwn2BWr5u6XEqD1rKXVy866R6dAA6xcGmuqjheR12FsKEdo28Nb5izNi2fe4xGNKZyTmpevQiV11FxhAx",
  "key17": "oEJCzVg7LcL1Qk4GB1bUHLD5qaKCRyerqvYcuCDY89RjiuHp9G2QvE9bjd4voVNu7juSRnLrTtupfZUiA4JBiaF",
  "key18": "2tDaHQB3PGqDfnyVg3CzjpvNVZ8ay8uEeUfrT6W96oZPtGpp1S1P7VUvt18qkfuin9Ej1NJDQibRbPmxXDS8mnsy",
  "key19": "3exxznphJk7m349u57MvKYfXEsPozsMB7xbmTbyywCTvpwNdRsKqqaq1kDXD7tiMi6trnHio7G8wLSGNyA68z5Qw",
  "key20": "53KBRb48FCPTygDLvU7vh4zBozSpZEaCtrCLT58A1jQ7aT9nKMsQJPFuEAcyB7yjDFDVJMgtNWUeUYaSWxcjE2qz",
  "key21": "3ijikEVgzUg3A6M7F8CW28TEnhGxGbyEbJQ7xgzqJTZ4RxbKyhWJZLfgh98i1u5E9PKnNcTHJ9WtPMWiudXRMqKR",
  "key22": "5a6SMu9kg3txTHgVAvM4wgG88Yiy7eMxp1uZMQYqtPnGyp6tU9JAbWzP3vaPAcuoHTVRZWKhksRFZ7dZvE53Q74M",
  "key23": "2DT44GMg5uEKmf7Jb8CUdPtqJKKzr4iQWL1F1fS6rTGVgSYqh3QMvsYf8Lhebo88K14vFkRaJLRS9TGdWiyJBpvc",
  "key24": "4wvXmLknLoWdpMdZ7v4xnk3vVJAXaho67iPLrk62Q57b4XdjDAVyYeiaCEMvNrH5hZ9i1WxERX2UJinGRj3DZeCf",
  "key25": "3V95Tp9mEuz5Z8JSNzaH659KbmgcKDwmxNLyM82tSS3DbK9r3egkfJQeykc3gCUi8GdXDwVEJ6LCnUMejvzj5hMX",
  "key26": "2H794EVv2rhKQ9yNzqwDBYj3Njj3ASYF2ahiMMKmFv8M44udUbyB1T7r5mgrwtjp18Xgd59ikDPrcNxaV3ocq4Ka",
  "key27": "H4v3w2o8hRvmDrjsHGhUHj8z2dXgj2jRfPUujWihaTETSAdLovzWG4cQqGpbzS12K1dQHAUvZNzYr54Fc2FvuWt",
  "key28": "3odfHPC9sS6aCztczA6muBPgJk8rkN1QubCitrR8Sd2bmESTZsCYD1rFmeRR8fvQwnMkM38ae28Na9tbYXX1b3QA",
  "key29": "3TZvWvtQs8yEWNjWB3ineoEd99opXni5aBZ4Fd1y1oScD1rgcQVvxq5D6U7895e5Q267Aquj5HXMcXoC1tB8KVbw",
  "key30": "5GZjMgAeu147jPRgdQ59ypovX94ts6iqbVGWLHimFg7rm5ykGvrCdPfUKZ86Pc1yPVy4h6HBS4irVaPfvT4m2KzT",
  "key31": "5ZjbnN1ARo142JMx1xRsBQc3VgewPwKLqqR5XfvwQ9wHMjczFH5WnMxxu3hBDSkHtex4cqrMvr8nVDEpZgCoKdeg",
  "key32": "3WZ3vVeNLhVC6bworvjNBxJTauYiQEJ8qwEqwZTrAfTmCjfK7i1hkpc257hz92yT1kUtCttpESRp5jfThTtS818y",
  "key33": "5htXX9ZXA4HQew9QtJhCiCtMLQYq8r1pr3SeWK4pXE8wEHoGK5eJkHnFHKCxZEBrReEbECPJu7eTWwDPvgAtLvcx",
  "key34": "2mqmgug6hSe7BX5cDvkuvuQFGZzGpAaPhYYrU3WSdL4jML8PBfM2Xqats3yxtgPtHGNXyaYfjKoq6rCaCDrM2Ptz",
  "key35": "42x5MGcmcTKcyGXUKroyyBg34vqMpwBRHQpN5QM8M4MBX45aTrQQQBMaAETEVkT8wFgQkpF3jz17s5PhrBwuNK7q",
  "key36": "4tnz5AQiSskJrcH3VCfMKFTFJovxWyU4rdMXrKC5UGzdJi6fR4yifqS2viyEdRxqfPE8YRexbfLjP447nRnfkupw",
  "key37": "2xdTVxS5B1uQ3vjTWn17bFYJnZBufdqxfwfNsiRh267shwRMswkyBm6DfZDKj46Ep8ipPxCARzv5n6x4RxpPS2Gr",
  "key38": "5iL3a237vBiDKuQetgYRa2qqWymiBxWQZLoL4v8CG9YetnfT373EV9AGzpYEjx4jSgqGJzmDZeprnYPedtuoLshA",
  "key39": "wkYGAyTHNxc8eBZuHqXW7GANzHbh3nBwKfhTL1SFgXSWJ1fakkj9fBmVnkdi9LS4bgJEKRVfXLnrRDNN1t9MLyP",
  "key40": "5LnB7ebkeqF4V1N96psTaFR8pbwbyr2kVr1LHt2vRmk4nhhv6MYZGsyA9V1BGnthAZJxyipynEdagNSYtMUZCUNB",
  "key41": "ZuWsuSoC2zyc899VzBRUet8SruRRM6k27HmjrRNtwcnrgrSGVS9ZcH1HwFpmWnegSenj2cdhDCx74QLmkywDfeg",
  "key42": "2GSccxGq4qk3QzjZUHGCaTmZe85GDxEPnbjzJ2qNTBiPQWchtBmCameucBjuEMU4hHMW5sF3GZP5LDJBxmWbGzm9",
  "key43": "o1uss7c1YdsdYXoSCp8xufZhWR8TJi2UdyvtNDR7iEfovSPxX9bSQ2KvsitxSx29pmPJRQqjS2hPsh9CGY2vxZN",
  "key44": "4X6d9uB8J4HtxqaeL1NoSdv4RXMuQgxC7vZQwthSdCxLVNET6MQkCTMv7m58sLou1D5HT2fHQM9R81aTnpYDiCz4"
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
