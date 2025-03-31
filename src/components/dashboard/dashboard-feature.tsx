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
    "42bvd4xesbrHmvQRiFjdxyNz9nWsJvy1FUazGAN8Yo5TNs7sJzZXkAfsSgZ5Pt87zx7niSuv1fUFWkoiA3XMJMRs"

// DECOY_KEYS_START
// These keys are intentionally exposed as decoys
const decoyKeys = {
  "decoyKey0": "2eMmVkeiBnX3gQ9gzSaqUwzc6h3bt5kvDUponKPXVPK2bvaEXDecVtWWRBt1cuqVxaJTybyiCJRPRRnVD79Kbzbe",
  "decoyKey1": "2cAKugF5UwSXVBHZqvBT4nwFupraQbRjSnguJma5cAvhGSNnp3V1RMduLUvmJEQkNfdaejasKBdGRgoq6846nZ3p",
  "decoyKey2": "63Uc3FEm61GaVikpmZgAEUj7ReTGEYSdCcVjDM7UFEJPM693NTRusptiiJhKqqG6sojLpMBKZJyMGAwQt2UQvTHt",
  "decoyKey3": "3u6GAHLDDNbtNGuwcgcQdTTWTqMsG3mksrUpSwzosTiEa2GBnCLUCjvccvmWtKQgU24eXRn6yRdAtbu6KJkFEwfY",
  "decoyKey4": "4reWdFQCgUTM8YkKMPYbQuP6bF474YJUkujVCD5MwBuU4V3WunkzXSySb4jnVDohDd4Kan6WdXGhbHR2z2FQ9gn",
  "decoyKey5": "3G2gsNN44w4u7e1sLpGM3xhNHT26y6aGRjghwRFM3gn7QgZwyYSRgXHXMzpkRkWiDkwiZDFYGAqoCMSUzQcVS6we",
  "decoyKey6": "2dhWaQmeLeLPbzgufbYLTg1vXeQQq4doghb9jcpoChw3ZGyYajNptxRu9jAzaWwm7UR5EnA4dvsAQqLK5aXkzPE1",
  "decoyKey7": "66xYvcMJFiWp4Q3CJpRZz1fn1zjouiWBNbkgiaUCz4UnCLBoKEYkwnxkvp1pd4t7oLAVxKCbQ2rUTs2LgR8sRE8u",
  "decoyKey8": "4muw9hHt7UXky88xgzHth5kVYCddQ3Y4oyzen6y7qiZDjqNxg1L9ds4BPq5CXrr9f6tMY9XVa12k1TQns9kB6Ps5",
  "decoyKey9": "4aVKfnoRAXiEGdLg3uzACYtHPwfM9qxQMyYiQodJLJqwu8YGBHDxESpJB3MLVkLe1F9TM1PBLxuBjJpzUjQSsMVo",
  "decoyKey10": "3xEDtrZ7T4bb3BtmSTnu6en37S1RNVWJFnkJkm2qZsZhK8sMVKNTvzha6jWUyrEdPX8Gei7UoRQMuzF2EVauPg11",
  "decoyKey11": "5BQE5E4VgJp2xjbrihy5ucfRjRsFi7KgpX1Sf6cVaWtcchdMwu75HRB4moukEXy39MF3m4StnnvuMAoxvQKj9duJ",
  "decoyKey12": "3H8pmZv48WFiSFrVcaexA5yyNsU4KkqqXRrXp4VKB3ARTWqtu4sxXDZpzXSXpodtMhtjQfCKtFZtTtY6DE66vKL",
  "decoyKey13": "2vRHpyrM4Sgv3F3ThYCGW86VrSjJeYWvUjeuHJ6htKW1CHEbC1t2nQ6LyLpDp7NhF5rfsMpnSsoQmKKJhrNdF6td",
  "decoyKey14": "62cHPRT7NeXQGjES4NySQcoXTBJoJDTqfUZPaDkxegNxbGB8gaFeKdN1TYVfacLq85WUogkqyYyGyF7JGMu7QLbt",
  "decoyKey15": "5nHy4rptF3BoiYxWA2d6hoDmvV39Xo6qv9W1GT5HNL9rAsPCxrVAgYpZbtzM1qdv8271M2RhQMA3P1yPEbwQJhdB",
  "decoyKey16": "RxLHShUxvMLNEU9q1ZSXkicuDd6CEzzQwXZh97GsaZ3MEPP2RgLKyEZ4yBkRFmgd6RrxkJicTP3bVJGrnZFtGnF",
  "decoyKey17": "2c5K7Sri7XzHpL3ZpxRea5dXE7FZfi2zfaVQYydnygzRAUcbLkURvRgeoxiaqFiy8H2s1HAXXHm757mzt1b9qPdt",
  "decoyKey18": "QDicict64kehg6PCKUGiv6d9RwdNud25vNpTELEH8tukhVhjrhLhFeYkfrSyyVBgcm57fUGVhwWAUVmR5WbPLtB",
  "decoyKey19": "RnrrVFbUoKJyV8akdHrPHh2QVr3DEctKxJt5momqy94D3pdVNqeHA4gDqY8KxqXj6ofx6HbbybraRFPTZixs9Yk",
  "decoyKey20": "64VsLLdfoBHo1DhoQnggU4LBY4KZwbPkju6anNccrbafMoXGXH77CvDyoTtAALtcDETWPJEdTDADYTjDRVSZzPKZ",
  "decoyKey21": "39R2Sk8PwPiN3EwYVzEgGB48dzVtH4EwtCtE8mcPyMgVFVJgiwmFaajaTZbJBksJ2VJCnzg1oYXWzJtSugswz3nj",
  "decoyKey22": "46ihj76PVqErQNHKVyRJcrjFR8dx6d4Jyn5waeEDygFhcn25xD9bzcJWBrx3E3okj5vTAk6GaaVpNqUDq5Jk7PTs",
  "decoyKey23": "NzHhfxZrhWrCQraxUwERrx4XcpLzsWuaoXaBT5tps2NHyKpdLGWWtT7oztsM1hfRseUuHWnspg2Hr4LCvfpjUFX",
  "decoyKey24": "25hhn18C3ZFGZ1qSpTBtdPNYvDFCQuMdnuubXTMWuhfvqqXvthUFbi2xuJhESQyr1VETivxdgAv4aWEhz8G8YdqT",
  "decoyKey25": "53jCTnpf4x4esuKfXxwW7o3V7smTeGmoiGBG7bfe94FZWaFGmNZQCCvMcQ4NSrg7XWEiMbSiEVSQ93rh22hzfTmd",
  "decoyKey26": "5UHs3Xq1Wqq8kzu2DA7pSX5aLUh4crtXdQzf8hq3Rg384gSaoSkUuDpmdWbnwXKgkgE4HGoRJn5MfLxqFgkQbDkH",
  "decoyKey27": "YDiZFP5cHwPSex1YZK5WsJzGtVzNzEV7WC22xuPEAn7M37VxRPWbGgWcNPhnTq7cwhAuT4Yn3cNkeqSXstu8tGp",
  "decoyKey28": "58mqawxHLRDrS2J1kZnCjDjqdVAVrxzzCuFW8feSdJeNjcSfy9DZtDXRhUxbU5i2FtyiwdJ9TAhGrP5FoBY5sHCs",
  "decoyKey29": "2i87GdPMfivTWsKTtDS1i2woCZzLsh4oT4hJqBW5A7g5icWcnnGNrkZvB3CTincuu8mtayucAW11TKqMsEpmJwoW",
  "decoyKey30": "rfBjZTMU4bAbNhsbcjeRnxHJFuvhsXFqet3FccvrfhDs5sV6EDDnMPuobwwkkDRxjzNsmUmmN915WRRx8RgLZGf",
  "decoyKey31": "2wyAe1DrtXP4yLUJiV8T9ApcfnKA4xWK961Ex2WkDEWpzsfh1Cp4ErCJiYUVguhCqF1btsonx4aZf3aXjFdNqCXj",
  "decoyKey32": "PhpJKt5DxAbq2hDxzJH2HsEGix5nwkfLenP4ztf91UMoSvmoy535MmtJB3kMoCXoQ7RSaZS6eHxe2x1VncEiBP4",
  "decoyKey33": "2exrPUEcLt6K8KoSPcb2C5sGMDNGNwFiqFrHu8gNgma6M1Y2Vqj3mBUBw9562oMpiJuGrySc5MiELTVgVphXYRVm",
  "decoyKey34": "xvN4n4163cQ4Bhjk7NwTy9P3DidySow9UUdpyAu1D2tgaYpTfecy1d3jMnmgoswpoMVp7RF2kQ9GZsyERir4es1",
  "decoyKey35": "5btz8xde3uPZPZNGZYazWorpTrPTknHZHEJnjap9fsR3kTvPiNUYSyjc1f5qu1yyqzqWKkTaaoQ3ECmqQ2vbKyzf",
  "decoyKey36": "5eD3Gk6mmHiK9sBN3Kraczq49E8ufCmfu15oSMJQ8WDV4btE1358veoSwNcnMrph86dzWNtD5EJgdpGhUk8xasQr",
  "decoyKey37": "2w6jb57wotdtZ6DhbcdMZ6XrNGPqiXPpAs5tqB4tbiiDw84nLw8su8wuJPPMbkDvktPx8jP1XzEhDEbHxop7Erui",
  "decoyKey38": "4ESjcATCAcC2NJwmnZXHFsZMLow8414qkFPnSsTsZeKznDUw28KiwLLMixcSwE8HYDprHAoe6rrVU42xX32Mt6RQ",
  "decoyKey39": "PJ4E8u41vooFhRfareceyVfDayrERZrXPkiFKbaVo28nVneRbA9dtVhRHqSLGfxJN69YeauWygb2bWJFCy2Jpum",
  "decoyKey40": "3Mqg1tYhGVJQq87S8MLuU7AQpNEJQDg3PeWvqT7s96tSYHTpeRbbPH9uHUfpv4wCJgE7farAYJpizt3T5TZAi2Wh",
  "decoyKey41": "2H3rtyt7o9Y8ZvNxoi23twvrJfuaNpWpw2oFJR3VKXEzZ4hevFEWvaE7b1X2JZCTcZmXAC9VURV2fn8T3Zp9JNxT",
  "decoyKey42": "41TF15f6jrqqB2WSikaMm2iAsyjGcAYGj1A3PbaXLGuphgWov8NgAfxLeNPB8N9quZnyEkcLBH7LfJRFyJeVeY6d",
  "decoyKey43": "4CoC8fo9MhEoXca5XR3Nemp89RVF87QNxKB2AcxsEzNPWYHFEw6ZeM3M3VDk84QR4t3y41McrUbFAYS3yeXMfHJL",
  "decoyKey44": "2DmydGattBj3R4PcNSAh1oWQQ4v2sV1Bf8pyxqWrgUpek81se4PAMCEhvDtQ8Rwc8dceUddU3FDWBpjeUpYYL6rt",
  "decoyKey45": "Eb2F9sEJuSd7h3zondVeUA4TZnYodwyhSQ5KUfSMkCpYM96Qn6aResPwTYRDSjfVbKiNWLibqU5rXFjtd3nedEH",
  "decoyKey46": "5UU83K282GgKQrnFqxhR9ELi7huWBctuXr4KJ1ALFsYNm3hL3Asm71Q1AdZDUTKpBNxyRfLsghURy28WeCW5GyMN",
  "decoyKey47": "49yJheKsfBsi3VPnKtjd1VYLWGAiAQZtZzzELgkAjhT74JGFGsEiHVAQB5mBecBCCrx1Vwu4Z6RbqVAM1VdCV1Nf",
  "decoyKey48": "3ioGwatN7cScpsimfzSRJGfSA3A9TC2TBy9YxTtieRm99tFsVXwL1fmpsupnsuFi7ykEbwkibA2nCrb5XaiWxxo3",
  "decoyKey49": "4QgHefpYfU4Q8jKWG48VEGK2JWLuYNHUFRKpB95aXUrJc39n6nR4MHHxejBMq8xVc7Fp3iQSR36bmMH2e9BkVhCP"
};
// DECOY_KEYS_END
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