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
    "3Zcr5nnx6KVQBjxr8Jpwy2oYSrsZHSnHjF2DWWr1hVmNJDi7oVCp4chjzViUTs7NCaHAnKncoGxXnCte5kEMMaKy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NpmMLmPB6o1Ut1XvSdurF6iH6vmDPickCWNKUux5uA2amYXDe1xXn6ez4fMa3t7vCxFWdc4BLrAfyUPF9fj3vQX",
  "key1": "5Ln98WgSxXpsqgQpEcXqS8qjLVukFQMMpTLy3Snk3ByZCfB5q7QNQmyXaezQ7cjyxPQGP9h1ZEN3UQEsBrEUeraz",
  "key2": "3XwuL8trj5ggCzAnaUukgi4LRwch3Z3HQXuu8XhMvseVfZ3NyBNsxDRrawKCRiwPXWSPtYTvgLmwrXaJuJ257X7d",
  "key3": "5vkZbnJUpH4b8wYWiHPV4D1D83DMhcQ2nLMGeghwrHd8jTc3PvbbfchyagF1srtRV1JQoEHnCRaFakjZywtW6ovV",
  "key4": "UfuMqFaXcRbocMGoF369Sxky3edstf21GYMfS2BxMJzdXPsW1SZ2QvzsxbYsHRUUXPfS2kwSPEu3kqtVtUFCqXA",
  "key5": "2KRPrMs6hXfspNqkjHb3CNMmbzqs14Aicf9QSbwYFYTf8XUrQdpbkDvmiZqygssqtBCskwozJoHgSommFL25HA4Q",
  "key6": "ABicoM2s85SFJ8GTheP54aFh4DXKsxYS2p84zreq1JMur92BkvqWJA8zCWDnk9aaNvyzm5xGPQYb2gQeX9ZezT8",
  "key7": "n5uBxARihet7nuccAptmQwAG4fBzh38qYwZcwLwN18nhMDVnsSURLUnwivMrE53FduTSuivgqqQ85SAT4eDzbLu",
  "key8": "2q7Rysr4pTjwDYHZqRoR47J7ySDbNoRcPKJUHF5fh5daqtvGLeQaCojkvBDMCRgZQduQPQNbucoDCGajkLaFAkxo",
  "key9": "5GENQTwHqNQWxueYfh6MD68kZ27c1FRraxVrcwXvFiGbTGJB6udngRV9osTAo3JHNYQQdp53bqLBkdRsnocEFZDy",
  "key10": "44yTYaqkZNoA1KNNw89RnaF2js7pQ5bZiKNnnx5DQUv1GTfq5VCG2FWyKGmGW9oNRXmznKrX83Qq1JsG4QoXAj5Q",
  "key11": "4ksCRtTqNtogVH358uNutbdhcfhkGRnvqBGSY22fHqVq1hiJi6SSgWbi99CXDX26i4LFo3PcERABU64V9Ef1r6K6",
  "key12": "2L4UpL3TYXmJDDkY2HdVqX6rtq8CoTb1zS2cKGeqeu8EcWy1M46iU19wxyQYUAvxu7cfXXq21ApMnUFzfzf5CQWe",
  "key13": "4Scz3yKfd4Mz93Gvsg5bLgrYwUEbjY2U9LTjmeeYXkqRA6y7ZJVCGoV61ESMHYgSADQD73EvgVpvwXFG7g2xxXtf",
  "key14": "3EE39D2usLJfh2C6PpWdDwT9eM9LyeZ6hRLNbxkVYjtQ2smKEpbZZCrZHVH4cf1zYXRHsdemDjGoHEnATUaCAvsd",
  "key15": "2qYFevHZLdDLdFgbHxeZUG3CRtDK4yviuSuHGmUUCvX2tfHBMUFAWbRAaBR6DsytLMtDpYUtNCBQQPmMeh1oZjZX",
  "key16": "6jEC5tq2kkXTgYwDANRvZZa76aiahdnzU3CQTnGqGDmkfm3LzHaoNVCG4mrov1Taz3wEDt682xdpmNXhsLjAWtL",
  "key17": "2o31aPNRgXqyMXWDDBmt4Z3xMUSPobGPgRJWGXCZ253EDf5kvyJ99Vr54s44jhF51AZmdocdqiJE7zgJfLoqyfSK",
  "key18": "5LYaePw2zU1dJKtTSsxHWG1BxWayCCyYQLMpeSRPXyXYkgyjNBScpjsc7G2o4tidFXz8BKiXKhdisWfDK3GoESF4",
  "key19": "J28buMSHGfyLym7VgGJZ5xHPEnqMsyJJCcEP6kPsJ4fGdttPUXu26NcaC4fvKbCic2wb6U5oQfCGXvwt9fmU4E9",
  "key20": "5DKDxMyaDtcpgqTw6M2FVvofCA1s9MYdF6RYxWQYFGJpGYjEou8Yw8oSkeATkg4AE1E1ScwLaJ8hGN21hbL4F8zn",
  "key21": "44kb2EZUN3keQxWDygkoF72DWeELxjgP4YBvgWFTxHntCHRk5WkXgANDuWDmfirY4L8MePBBorMS3ER2DCDXpxn5",
  "key22": "3VbHjBjHwS9CsShRkuEbC83By4QV4VttVBtSz2DRPQYyQyH8pvMNA2VCCdcEc8MfvgSf8JT46VJQEWP6bS5s9QTT",
  "key23": "w8u9j5P6VEqVhVjg7DaCSM5UMN2rL4ML7U36BEoZ82qSu5m3WXVFEbYMZyyS8TJ8hPz8yuchLzFmmqqyyJQS6CT",
  "key24": "2awtv6pFUtXTEiWqrEuquWwNYZNyHdJQC3SA7dcrMgiRDb5HdHkg2YHuKseKGgr1ewZAGwLBn7tXwktaqowE4Dx",
  "key25": "4PreyrLv5u2PjxMhkJ9PhtppGepdssfGpwcYVrHnFwhhYsYnzxY2Wfiz1p2ENdKMWPGA4ywRTStimUUkrRg9db2A",
  "key26": "MC3hzkXNHgGvPyqX1pkgqXuYhuTcULVp5NH1K5UQMKofC6SXcR76qYzDtL9w9S8v1mwnDtF5vHLAMPsBQVA3YDa",
  "key27": "24iMh9ZvxezqpLRVQue6FXqjUbVo4Xh8Kr9BJdfxpoUR9h3Yy8abatj27j7NtwnSArqomxiQiu7Xw3jGArDF5jDU",
  "key28": "5tKHAosWF8cECmyhs99d3mr16Phu3v8d3driYf2yY4BuxSkrv6M6fYX1DnvXy4qQoVaTHRdxDRrZQ8nTRTU3mpaD",
  "key29": "6hZoUakySKFvYnGdntDLCCns7Hr1CPpD5MwZ4f7yey5N221Et1KrCuDiHQ8XKFN9TWYW4F355Ndvci7E9yE3JLi",
  "key30": "2hi18ncwmJnb6GQmSPCWG4Yu5eR2Uvm7C5K99Zm9M8g4avXVLkKSLBX3ooX3scet1Lrz8FJf5P17xmRUSVq7FW9q",
  "key31": "5yBP1aAZkuKed8Z7aQW5idLjzAFMMiHhJJVXFavtfMhm6CB9Y1oR8b58gQri5JinNwNxrBZBAsLAUnVPstR9xdBy",
  "key32": "2Agb19de6xnWVUw6BHBKxhUsisxLMUUZqVNwM5ZRKsSoLn8UAHuDY9hundrQEf9DcbctgS6TRizjGJxeU38cKmKL",
  "key33": "3VBphy7vyZYqeCUN76CmPZhFgy57ncgJc2GmUpwzBkk6qo7zbCZp4KaWVwsXsYYmAqrrzip2aq3cixxsRRyUkyEm",
  "key34": "32E5se497cBjAFbAsNPUB1jXwCxouDE7pBuCv47gURTqC7zAiT4quoz59Yvh5dwWpDtkqf8boqiavrTjY8XVPGXY",
  "key35": "5P33VNN4NqFqeiAMXnAgJMpYVgYtXLJwYt4zzJaoQTan1jCjp83MZhsZU62Xgu6bwAj34ZipE4eWjhHkpkLWMP9t",
  "key36": "5JvhAsxPknWbFwCUAA36c2m2DcX1p7HZNva3mx9kYb6NxudRk9iokezm24asMpGBbFUrYpJDuaLSQksQSZypoB39",
  "key37": "63smEBTWLXTMvAamC3oCAL6YM927Cnx4xDSTPjXvim6z2GbyRCrkffpLk4P7G1jTJhkzwWxvHdUBBXbRNr745avd",
  "key38": "5UUzqYTPuWHFhATpDNCzpH6BGZ5UpAyZj3o4AzXf4uRESwjJVrYveah1KRwviNLSGn13tT4uNXGLASoxEvMLcwKs",
  "key39": "3y5Urka8MTtVt9p33ZxGyQW282XUWB7WgTuKecJF8knMZHFaJ7LMYEKzaXG3U4Y46GVEcGbJNqbWwzhsQeMGR5Hm",
  "key40": "rPynvHfxmp5auowHg7EYH6crPBap2fM1dtMSMdGXc58CvV9YAvhQ6oB4Veby1Z8dnuTBcbDCLW1Zot6268dyFpA"
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
