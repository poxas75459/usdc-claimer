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
    "4Q93D1nEdBWRHNKyVCqn9mKYTJocLkY46txdkX3s9M6afY86fBtoWCr73c8pXz8xfSfQdo86sPPwFdE3HyGjbDkZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wJYHfLP9HxRFBiuF5y4YDeWVqn8k6KicyApxAUKiN7nmCrskH17CRKDai6sf4RkhQCDiG8MCHK8Rkj62GAKy38G",
  "key1": "4BG26RhmGrdWWRxDhWvCdAKSRkHn7WUHjxKQLEJZAwALPhKXpCpLLxqSBm8gKSco35F2RDYKcravKeAtwzJj2RQr",
  "key2": "63wX9nU155VsmhAQwoaYtehiV21JpWkjUv6kp7UDHnh6aQdTCAJficSk24Kvv4wk4K3TWN6a8tGAWm28YfEYi6wB",
  "key3": "4E4ptWAvU5q91Cg8Xvf3EY6UxWCWZzEFr8jocCen4CHQnuhqJRSdQQ1zEjWS9f2MYCGi4pWU1xgabsyAQpuvFTTx",
  "key4": "5Dir8m2KtZkLryfeBRSfrKyzDQmzYi43d6ePUggFDRQM5HiNxSjQQQTgtSbyFfLh65HobMpHRfRhVHay5Gh1sXqr",
  "key5": "4cYKPfWiybSJcD1eN6J6pveVBR7MuQhuaQFB6qLXa4BN2sp1yUHP51QQ7tHKqmFeExZmQu86Dtvtaqh6c5VaxmKb",
  "key6": "4DVU6Rbdb9XpETJDD3cYoqL9NbkCTnQ7Qt9DxQrSTzRLz8TFq1joiYrk5EjQEsUegZ9SZ2K8ieLe2Bzymjg3SSoo",
  "key7": "5voZkJpnD9VwCEBdzWzvg7gyS6gq2BNvknwmdE4zgkmna7oCPwYZEuzKwCaCsjfXEsD6Kgg4uGqtRNH8KqgFt9Re",
  "key8": "66D9GTAyS4N8tazxkAyREnHMRr7CoWf9aL3pVsHus64rmMLeeSnfSYKLpDr8jmGzxtQhWZTFLPXsg8M5m33fM6d2",
  "key9": "4qFiPNZtjFBAs5gggd6Zs7D7LJRy2P92CviZkU4BELeAHQtvuzMsFbw7B7MsL6eKZfoRe9AcwAenQ4X6Mi4dCH9a",
  "key10": "2Tt5rPo1vv8B9KoPqkrUCfXY4RBo5iiyT1apq5zoErtNsDR4QSDVMhoPHiCbbG9MWE2m7eZqAwJDxMgPD92yXBkh",
  "key11": "5UreAAFAFa1M9HzMKDuao18XUrjaG47CHwyWqEMbw9z7fFbQMcRZtJUQK1g2jVYVmAkd8reSFzW9ABhJZPwJWrrb",
  "key12": "5cNTnA4xCSu3nVQbrZc48bctxqCRy7QAjQazMY8MFZTDwEo3QPqfzTGaJ8Ub6mVetsJfa8SrGRSX51zeUgGeYhwb",
  "key13": "3vjVShu2Rhi2rkM8AZBmSrxcC3s98A8o6M5UZQzLqFULHLpAVJJPMHhDdLySZNRdLrBMSuQPicYEeRBaWgBCKWvR",
  "key14": "5vknVEGbF8PFsi1w7rjzh8iTfocnh7QYPexQiMqn6GNAykcUHWuN1ozDYaHp6RdbNPs3EddxfP9pu2aEFdYqP8vQ",
  "key15": "5VTKPoahAaLnWxEeDQGbDkJKpEW4pVkmkUtkWnCkJAZoEQKMyDoJkuoveiENeekfdaPtrf2e9RsYMxxK371H3y4A",
  "key16": "nA2dVZbwgfrzP5EaX3vVvTg3h86ebvJcMipyvSJgBUHjmBkbFaZS7YaKxS8NuUDPZJeE8hke2KrUWseiS7SPF9i",
  "key17": "4TmNATULLrxLSoxnrGFEhEEcdmYoQnDspQyaMVPSDeUUzvmwNMnLXDSmEwcu6WvDaeH7XUZZzcuZaiVK3Se8L9Y",
  "key18": "pehUiVajyrb483wFGFrNPav813mxStaKePvHPXnUzGgyL33WgRMjR8dTH2o6fDcApQ3b2oRgFCWVqzQ3TVpVyFa",
  "key19": "4hNj1iSfUuRrRS3BWC8ZztQmxD57oEsZ4uqdx3jcPXCxw5QDDp544SZT8vXmsjFwYE5upv9rCSYeQyt282BwU93S",
  "key20": "223tSqaQeAKT7q3fN4kqRdDiXGK3h2K82r8dorNRZz2QKg7hgQhAUt4pJpdHCNGpbHjeqFAe4dkFxuMU5J8BKwHq",
  "key21": "3WinbJK2qZ29GL8p21dyA1Bcdo2xsVvy6h93MYnUhPu5E7xyVuPV1sQj8y9mgt8tCy5BSSHTHpEiaFTrKJXV5wa7",
  "key22": "4f3GkonpJtoVGmoDDN28XbHtiZHN2m3zDgT2JnUixKbdtcvCZcnMEHwretqfcGgHoD5ASSpTNyLrNfdCvTh23B2E",
  "key23": "3b9XwLWRxFCcS7GrSqx7xCwKahVW7c8Pd3QqDubVtS4zAUM9NAnVBqwPwb31c5u1W5rRp2D8TRCCAMwR3efp6vxj",
  "key24": "3DreRFim7qGVwRwBHSbh1Le5hFxdg6JEqoFrzYVvf4BXJz1So6G7whfA9vzY5BBgYbtwjPu8F1Pn4nMkhnK2xjz9",
  "key25": "5FEyNzrM2yBDjaLR6mEoNP6KpoMA1pDyFyr5amd3G1vW9jqKktb2J8YPYLNyEPQK42if5dqFkV2rds9cAkfibb9d",
  "key26": "646GHHFmEB9HMaVrn9ZRJ4ARWguEQPbwuigYLV3HqmcxDp65kYBckkQcRZjJabvP7to5yUS5wcNdsSBNLTneEUC3",
  "key27": "5nW6sctkFryPUJCq9gHDZYhnEEem56yyHjETSvuiauUGxJN6koD2LBec5WLSMACLcU1ytHcGMEnhBi998P2N8NPx",
  "key28": "5Jvh4qQSBMQMhPzVam2xRySghsPFwKwrrA7ZFK2etNtDWjDdAnz9aX3P3y4yiZHKBHkELTdYwgsfE7GPYFHJh2sx",
  "key29": "4xV8n4KuNxXCh2KzHGwZfq1iE6RegPUukBLUyBSGitNVvRv86JK4R5gNmFofiuPuGBLNNyfXco9KQMKh32BSj88z",
  "key30": "4QjP14P3KJTNgkw1dLWkZAwaBUQBL8Hpo9KviW834ixDoDi9YsMoaFmb4ERxkoRz4G5Hh6Eirexcp4TQLiEsTr2V",
  "key31": "cyKDfdPvvfqmKedZ5F7SGkAJFLNersboQWnn16N2Tz6WiAMNZodkewigmZcaETRTUa4yx1sWrhbepa4ivqVvWT1",
  "key32": "4mZfjJLuskaQVikrhGuTVJDtYML4wLdXJmjn3gPLnWN7dLr3H5Du6AGDD2fhjHca4TCqf3z3JJbMop5jVoq8buYV",
  "key33": "41JTFBNPxsU3eMmzNCFwvrxugnPfvzFkajCiD7QhNmbsvcYJCy77noa8VWvCW7LPCPsSYhtnrjwPEFSFdvNcwbf1",
  "key34": "5BQm9mU9b9yWryDgfmgoTDwBHUDuTVe4yFutpF53BPShrmiF5KCCYtfPCnNHW3zy4Lh6Hqdh3c7M9tipBF63VKho",
  "key35": "5kCjqRcbPETbm5Q79Zzs9xp3kiY5m3meWuwwrWbUGWAXSh7V46mKe8TTQ4Rs2A4odcnrcdRNqw1cbC82fgbBGeNC",
  "key36": "5Td364Jdmw9zTnM8Ds9egPjMqYnBFCfwg9GnNhbv5NhzwzeMWXR1g4Bsi6RSH9GFNc5TTHt67UVSfZe9QbupAYU9",
  "key37": "59MsdLQ2iztADe8PFrL15zY2m15UfNh5rQhhUoXJGoB6SP3iMuhqFca6rVtNWE2DGvvt3JHUHkHMwbRwgSr5Hk6U",
  "key38": "4evAKVmWGLorUBbCFN8BWVckDYWFmcB3NZkkMhw1PU2FUgrVBUK6yJPkVdAZb4H82d73XXzjyNTbbGJVUvVJ6L52",
  "key39": "3TNmqvXM1CErxjqtgb7x6A1BYrnroSwg7ReUzkbWgxv4KvpWR29tuGXDwJa244chyzeAgvGndhm6hYrEcSFAVyGM",
  "key40": "NadR5HgXEP8GnESG92XDjztRKxXtyVoKLNo7Lk5hwFVTorDPqguNBPy1rZKy2BDuX95fXXfWCtU2x1BFwqamnes",
  "key41": "4hiyRXDezMWew5kVSoZVwuUwCBggVPNhnrEnQJnRgpTQ3kdsBcx1MsNuiC9rMsJp1q3QYwNWZJ15RpWK5EoRWowe",
  "key42": "41numN8LoJpupPF6Kp34uBcwsbsEDKtfvufHyH1rUJuUikwFZFCQoqfiaCBUZPrX5NEch4Q75iafD7wbzmA1vTf2",
  "key43": "3hjvZ6foKxYw87TobGrupFGjEyt5sqdE6eho6svxP32TVKpdbh6bCnjoNGj4gJZuU97CmRcpd4wtAJ9vV9NCE9Rr",
  "key44": "3sprx9XVLUXbXmweex3wFr62aHi4JpqW3tBUJ9EvdPDmTo2DAnB9i5mrQWip29T28mtUgckgbvHtxpL1aaMXBYww",
  "key45": "LfEWF2en5jVaivmeKDAsQueAdpFVxTWoFArQfFgkfYpdH7N3WkkHRTr89P9Mf6iPCxAa1tuhEQujcHfCjvAdAZ7"
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
