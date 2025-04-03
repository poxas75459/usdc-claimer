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
    "3bjAzgoEkvqCdTsGcm8pCM2u8r5oEc4RTGWMPFygyRvRwxVNv6v8esWKDJxYDnbp5SRAKshJJ3S36EEM83fCJC2F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ejDr15AB2Lhy9fveMQrFb6JoDSi14GhzMDc4JrqThAvvn5yzHuvhgTd3X7P8tTZjM5GTmEs1KVrSdBZskfKpdWx",
  "key1": "3WPnLY9zSJhnCkuRkb8vjHmApP2PZetuh5SLYhaKHz81M2m6QgN2nyoN6Vz54BBumNk349LrrK48CSQaB7Fro7z",
  "key2": "52KyEoWAfkb2aCMjqZGPkkq9KCTznAxuYqG6TZkkTJmgrSA7NhhcnpyzbdzaaujTwBZtEhpe93W4TEp1uKpYKm26",
  "key3": "5DkJnpjp2b98FsjyG59grdZk7SZ6jGCfw1ADLSjPLZgAGbnwKSLwJ6phJFzq9BYfWM21rP4AYk6fVeQKBXQxCfyW",
  "key4": "EdBcwoQhQUrQsYvJutJddFMn1sibfHB6hdKjLcVmkizZaqfp6GESoYiu9GCfcpT4hswXqZP45PgLpEuxeUj6v8f",
  "key5": "4rAgudVhyncrhJgdVGiiRjG9AhGMgBvNqTp3gkAQDXFzkwpVpH2i6RQ23PyN3yYuhL96kk4arJ64jGhF6GST9g6F",
  "key6": "2aG4dYAM6GZP9dmwdjna5DH3FD2ZMRKigrMrKfueL2iEuCMMhSN8q3kBeCkPJc5tuFLLWT4JNRTP2TrwsnefwjuQ",
  "key7": "QYFN8nLJdC2wNrjE1zRHPMJZpQf53Ua8Muo6c38TAb1LmhkaLaYgr36WMRnWTEyF5AD1E6EXKobz9JUgvcQAU6G",
  "key8": "63qX8XYbSyBt93ygT5xDffvEgVLVMtHCHEUMELkdaeVdhd47PNcANTQ7B6DV44jGJh2Z6TtxHCRVaeGKSJZEJQao",
  "key9": "4m18xeArJBfdZmoy4akcFZasUYpbuzRoj9iwhB19D4mBFS8fCwZBpn2UkW6NoB4uRGPqY5WrHyKSrNWLi5N5gBir",
  "key10": "2ADH8yAsU3ifUS9hsXxvJM4cnuiwYrJpQJhu1b1bucxhUYDGmbcSLMc63kxKADXQQpiHptpcVPaNbQ7APdjoDV7Q",
  "key11": "4gf17UhG1aSmApu44GJP7RvNVoo82mhGKe2fy1eAt7TKb4sFBeMfAM5jVUb8tn8Bx2kFNmSuDDt8FYS5TQKJrLvi",
  "key12": "hCWaRG8sgwvxa7dq3L2n1LPStcM57ze2E1vDWtNyfS8f638EvjsuGtdGX92XnkgWT5VHiDzmCDGT91qndbuTT7f",
  "key13": "2XUNtPCjzVerNiXj4neQYFaQ8TwVHXdgkJRHgiJyKmCwL6J1GckbQi3rrZYTSc4fYBzVs2aVAdhJgYLaneTiB9QX",
  "key14": "5aThmBCXtrcdGVsS23zqRjJGYSkFJunZMgS6n1nL33WSuuRLt4pvpvbkBxLzGXb5bvcbVahkbgiw92R8p6yctMym",
  "key15": "27hVYNFKuUJaBAsbJNtgQMSzZEvJobYBxLyRUHvoDuqrSBhBw3ecS3KRwjqyHcsNo6CspQidUme12YKKJkueoKzK",
  "key16": "ighVxEgnybUyypTap4KpTXREFCzTjybKXRNxRQC4Kn7JWpza346ZyfAabvqvvNerwAt2vUm5geSANd4MeEJRKVw",
  "key17": "3KdxVeVDEJmZANRGxuMnLQDugPt9Ah2CKNyZtiTAdP9NxKxqVEVEyohkevHYoncxwaaaNQTLT7m2R9bvqc2FQfjq",
  "key18": "2nqCmTZAbbFDFMLJB6pQRVeZw27hnDwEndqdNahPVt9pTuoxRpAMQPJyFQ1t1fXiM7wND9RSb8LM1LRECo8XLwWN",
  "key19": "2RsVYB2q14sHBqvpStxd67aJMqBSeMKhxo7eURNADKBYaUUZGdbe2z5A6dWpvkYJBDvFigovr4RemVemSBdcgBhi",
  "key20": "5EmU7iRN5Mnz5CbYz5pKUTfjWQNBZy8DJz98XyiVDVUd18sLypC4rsgWG399WyKWz3hxHh7fDXtdeGhVQgWea3rN",
  "key21": "2Z3TyppUopaJXXFTSssEMyiyjsRZQiVetKiCcjHtVeQqFfJrmJQdKvbMV6e3Ftm9K9x8rpwDBrFm5HF5L6bFfT86",
  "key22": "4FbukT8SsfGRW9adisugwLRmnwhTUsJSmeyDvyxF4fpCocvpz6PY4SQJs2Hx76E1FT4NG6G5kU3JXMnRXHre9o5A",
  "key23": "2jTK1Jh6hC38ryqKASkwc3A5f3bvWD39d3HjygfJzA1Fbpic5aLzwHmiXcbJWgM22iMXCZNuEunw47anQocWyVw9",
  "key24": "5iw3imx3BbFmxg5GUvExCWqVk1ep9YtN3ydGBCBQ2rkNUBJcY8y1bL3YABpgkBSm3X1KSYwss45vfzghrwXzmfug",
  "key25": "3pmwzSKsrWv3nGkqA4g9nmdUevTPLqmN6AD1YwDW25UfKDghGLvtZhqkr1MpQ2zAKW2QciAL9NQQKUL69CqQWmre",
  "key26": "EGYBZFmnx8Zm23vKNJ22SvHKtPZGWuihsMaJzyontZFpFQKiYB8uW4UKZnhJcx74jMfapGRykzbX29ZhFBhe9K5",
  "key27": "V7UVXXX2uhYHa8ka9bRsHygaTLVXGLoiNnh7PpM1nKuWxN59BVT9gaNt7FE1krQ9yB81MigJdNdfmX2rAZXLmUa",
  "key28": "29QMzzdMnXRZn8F22WNC7vTyDGrrkP5PFJTaUbvyLsXJdNmcXSfE8UysKAEbGmbvDAJQqp7jeayjDTYg5ahiZbfn",
  "key29": "2HFF45YsGBu1AiHwGyWeLZFpaVGfbgvgfRaoQG7Zh2yztdTKJNetgh2P96DtgkET66f2u7JaaKSVQMFDaEphtQER",
  "key30": "3oda8GSeButWLT8rJLEfn9agLkTdqdnan7dfotHq8jm6iQ82qyvZv2Gat7vyaoVVxfMyGYswGg4e66ZQTu2pBJuz",
  "key31": "4ANxFEZ9pdVJQLHaAoVtfyFAJqKVE43uLUuwGVckPpfGtQRrdPvHW4vrJieH2SdtsiW81D7oR7YJZewzjBh4o6mk",
  "key32": "4BVoDYRmATHWAJSyMmCn1bZE7jV8dTRLQJoBb3DAfSrXarrUaZgrtryZMTYrKuia4G1Pa7uEydq1ideRyqXTpzj9",
  "key33": "3DxfQTvkGvAp2MjBPzPzkNxegxej13FxT1aWpCbJ3gRUcwYNmUscrdad1kcbvhHPuguSzdLT8E4nHF9A2HSiE1xy",
  "key34": "4wcmvzRWVqUDnD63ZmfApmpo1AgCi7oitmFV3LGmN3AatXWtZsZKRUeuQRLPYdgNpUPyVanAqTf7dwWXHD3Rv7gF",
  "key35": "d9oFAMNSpwtuaWs4xXKSod8Ww5RehPS8DizdT8JRm6d8FTQvA6j14DiZvuDa5vigYFdU2umyb6Gp4wnVJXsE6Zh",
  "key36": "3CdAy3vPkUTUL3kjHZ3SvzjVYPHpEyNagwEwZu1TXQYWb46CBgtt4ZoVSHjNs5QFL91XS9RTnYuuATVsSXLKQiXx",
  "key37": "2LzJqhpeyKQJz1L86jdbb1boWJa3QFRtqbpaav7YCLawakTyKi6BNGhX2X4EE4McKciSCq44PC8mStkYtw4ta2gP",
  "key38": "2g9NhMvBVgXgMrUPyNduzywdoMm6oZ8sTB6gKYyAqu58uXMAY5xPJFo2j1r8ECz8ed8eCvkjairmdPbrfforxJBa",
  "key39": "2pDxVQYAksouKYvBoGVMPsAKhzkidjk6FuZLtn7iMSFXBbd1DMexQCFbcXzGz1HXBkcYUTHusP7N4VpzcM9CeM4s",
  "key40": "2NqFm14ceX5wcPSEMTrWfzRZ43a3Y597NxKqQwL89AzEk2Jd4CZb8T6yThvxohfFyRVLMKrht5gJBF79grkYNYj5",
  "key41": "kQy2K33dMycVxZWXpetjDfqBjZC7qqzWiqeEsFVkXsYCP4bfUvzrN9rUPRvw4qsuJGt5FVs3J4FnJjtC96Jr1ue",
  "key42": "wKrfxdFy3mr1vTCujWotfBnbY2T82agCN3oSNueHRTFPmRii3y8f4gEExquNXU1hAL752Pw4XngUo9NAVnxawuK",
  "key43": "2jQnUoGEuPuvoJdUCmL3U922YYVMYRE4Em2WLNmBbLKfNSAxx5q64yFRiZzwdnrfrCU1J3xm6YYAwAibB68Uvjiv",
  "key44": "2KRgmP2dfFPfwcVdfbpDEvT738QbaMWhdUvXjD8X18vGmw4KLJaYdFhHyiviThFLBtngvVj82zc56Rvyx7mwa8Mi",
  "key45": "65wyXnTm3VLutszw44G2xXiTuuWzpaL5kM2TK12BSLfUdPkJGMeka2bqfQBgEa4Zjb8daTNX2vvwYDt7sTgc246S",
  "key46": "4ckapasbE8BopAVNE535Ry7ox3F498pLbmbLqjQBbcSV3qLr4PUZ1eQC4drEgAeD8RPXuFxUDtSSevCmZmKs64UW",
  "key47": "3CQ2Cz89DZG3f3s1FCV5KQAPz9oATXuMfRTmjdEyNMpsznbM6tZmffg4AioAaQUc4yFx3zeWo9jov4vvkkYw1ZvG",
  "key48": "56bZvtMiX6dYFs4Bc6ZTaq22rG61c4fDGrbVn4nvMZt3aw5FMAH2X7UAbVswsRMVN458pcSbteD4suqZrvqEf3Vc",
  "key49": "YcacHtzYmQLVLzJDLHg2Fy8CqXfQ3HwfsNWVCVpAaLGFhuwfA8A3yBgeNW2vH4iZMqfA5oPw4xy1iT4exBFFyeN"
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
