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
    "3iGrokyBCtWGTRspbMWVZgCR2amzexi8XUV88jFjhavbm5vFLvKFu3HfYvgQqHQFjUKMc9zfJGK8VKkVZHuSUzGW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3P2X6uYEXHKNghKgCVj7hstKhTd2oxDqoYFKFwusiHWDS25QcW9Trnj5LjXQQSQFvBqYMJ4hpE3qrUK5RxrCgwsA",
  "key1": "3Gg5hEs15j38ZHf8ASSusMPKLoa2qv9pe7Aqj9sNXhFYRpVvFPxwyT3sU8h8McmrBdaM74gjiWVynG4m7bAc4ChG",
  "key2": "6273BqhpxMwVbmz31oQp61ZtwjoS4XKVS6w8qFiVBPzhsNKZSnxntbwREAKvFvUYgKdjtT4pEGQoHCpBZp4Jtrnh",
  "key3": "37YAPHSAqPL7M7dxfxw8aUCC1P5jieyqAWZTba5nifWf7wu5HvEvvtUrqzgv6PQ3jo2GZWGkk8GZtDUbF4WoZMoX",
  "key4": "nB8XEb8k4smgcxtzzdyhYpejcK5SBZcvpbtbTQozG6DTDkriU24DQrLoXuEBBwWe6nmKJFmKjy3terNc561vXMK",
  "key5": "2Hu1we2a5YhgHHiVVfphrFtQJjLQZfFv2MwB5b8G2PMkPb2QVosPaVjwJp6HEiGgRY7hTPjXn4Ft9bbdGvzeEvve",
  "key6": "5weyxBhbPskWcLsAsvX6evTSUufc5AkNCLmD9z5zv7as9mwFr89wDygYA2ZSHs5vogmyuFjw86ghxzVonMsubpv2",
  "key7": "43ojDLR2tVb2dz7kAWRfRdYzGpvPraXWs1YpHL5t1JUNdXA6f2nLVdb4ksXeogtGQhii1k23TQj7hJXh3xkk86CZ",
  "key8": "4DfUYoTHde6tMZ8wNS6cAGafnjaV1Wc5YcGEpNuUAL9KRet1Xn8hokZGNRn1x1ejuLjwgYdScoHBYcer1SXiPU4c",
  "key9": "2WLdbn1d85ETjst4sgJDi3Cz5b9JSd3TFScJKvnpcdJcvPUXjj4kKo1TSYnhvygtGXRpJcwpK2BY7miMeWJDUqKb",
  "key10": "5psRVyjVeDkhz7zBXBpgRheBDQ1CiUywTWG3mb3R4gLxrzCUfFL173N5k9PCC8AzvuBcHaCCmnuzLCP7vRWQPXFX",
  "key11": "3nr6VNSFCz8KS7JPR3FGpj4v3yu5JcknfNikvrfYwTb1ZWo1wuYrwVputLBL7MYUu8AvaoGZc6hNjfaXz45phGf2",
  "key12": "4fLtWttibAVxXoihxYRF157TAyhUFdQJMPK6EQn253BMax8qVx7ALtcXiGEMF6gWUnQBrRCTrWeQmjgg8gMygkkA",
  "key13": "416HsgQDUgCozJ3wWikEXRSuGFSCKBfPNEXTwYEa2VjP2Grhs3ACRse3Sc9BSGmdKN4i25dHrs9TLCPAeJhXY48h",
  "key14": "36FXTQYL9bryUmPQuLP8pH3udWztYhn2EjZ5bFkN8AQ6WCKpvrNy56cHfjUmKpFzE2MgaGdPS1NaLMF24zSAzgsQ",
  "key15": "3JLv7uCbNC9zVc3SmFdyJaWLqa9rFeGqSQ5ZcJbGtPTAzedSSwkn4MBvf7Y6VP6LRMYoC1N7y9ppyNVsYg8G9m24",
  "key16": "5mPfuobLa7g1dryMvvtRxiwAZMeE2rUgamCV7HApP4ksRN14d8QuJn5viSfS7qTKCPPT7Ew3JeTEVYjRqrKomPRV",
  "key17": "24Z21Q1nNfizBNkLJhAZ1GSVNV2QcaQnzgpEjN3Y4pQAYFwyUfMyg9bgkooC3kbynurvtCLBqdoL8nqaCejyPR4e",
  "key18": "4aTR5maRhBMKbSGotEd4SGEv3myawChDX6b3N3V2pStysUY4HHYQGXFETjjANL8rkZHbiuhEipvoPmMFPK8oAMUj",
  "key19": "krafUSZNrUuspvyQfqbtVisZUNvYKUmPJaqGEjpbZUPxTqZ4aAdKYugLm3juhBHYER3SQG2ocrMiWZpVok7wVVM",
  "key20": "3kQkJjpkchi2zzAHzGjgVH71VvSfi57FqGEEydgYTaTSmHh7qGz3YoUihKsG7pp29PpJAspAuvCSKtQzuR35g9xr",
  "key21": "52erY8sgwBTTVSyjhiWCG6P9gzfMeDRXLCQvzLxs3BsHLEsSL6uLHtbMmFmA8YAWWbEqAqeE6KWn3dvPdteCBDCE",
  "key22": "3BekE4zwfFbNSKqLccfuicSHj6ze58uBxXD45wE5QQ2sRKxEW4tvei9SNLMAcaUb8GqF8yTRTCTFMaDt8Z24Gw4n",
  "key23": "5WMAnAwkR2N2b2AyspgYhwkSXgg3WGLtDDpR6r8KQoWT2zkQFyc47RXeZigWW8jGSGg8gPW1oLPbVTkvLhJADYPc",
  "key24": "5VsyqHcUYZ1XaePJUzvHTwTs1coHVq9kTQ8v4dt4gpj1KgRFDqncsLvphnFeYJLDkFiTEQEVETv2UWdBp24LMrGQ",
  "key25": "37YmbVCiebMmPCuqpMWmCevhRrPGj6U9fYMe8tTCTZUz66pDHSoWVzrrhnewMHJFkNJELZpJ6UoF26QHL6YpsVMV",
  "key26": "65uovvTSY4jdBoBgPNfjE2eXpeKoixB4RKVZZZvPHAj5QE3xzy4dmm35K2d8rLnEBPn8fC12QgUnvwwiq3q2pfq2",
  "key27": "SYCdfjNMPwXG8b2hXSBe4f1NUu4AsZcLeuezksLcnK4ddp1hwbrmDN34CLJMss6gNX4Z7FESootnRPCBWEzcZZP",
  "key28": "5TCJ5L5zqQJKqUzm9Cmt8UqHm6ZLuUnkxe9woydgqdXhSzxJRHmYpos17QJVCjqQETnsQMTF2jxV5ZSmjn4U64J9",
  "key29": "5ZrCRSksx2ix7rE1RoRc4U5HZTgspnvn5NeEz2tUysdHpk3JcBUH43yjMDdnUU2TFqq7tGPaptNdZpRGCSzhonsD",
  "key30": "36WUmrk75fjbGg6dnYotVzjoXK2kDr4aTdXYAEsQdYSEn9Y9ziYXCfgVkoerMGMbajeArp1PYWga9h5Yo1TWrJoq",
  "key31": "2G2fsGxwp885dFgYUTd19bXKFGm5EuhaE5PJbApzfQ69XAQbkbnauE1n2mWjs4nuf2CAzUk23tTmY19nNqxG9CVZ",
  "key32": "3Gb4kMrUUZ9NdhGdn2agpA1BDRRPZWoAGCDyjMGZNax3sxUHL9yXr7kYcHGmCWcxWuDmiA135sU5G4dGt7cw76hS",
  "key33": "KXGrxj6aWU5kNpfWBJemferQQJKszPnqqS1DWQrALbPGmQ6kmatR25D6eP6aK4mmA8s7AMt3EU9n32tSAyeien8",
  "key34": "4t9aFKUsrk1YTmuE3GaFhFuZWNsanAH1A6RUFRVKYC7N5P7p6K7nwb5m7m1WVPFpCupnsar9EpFnDpzFyWWj9Rgz",
  "key35": "5yKod1BrJpncy6RWQmqwDfrAys44csZyNDtMBXjXarY9zqXjQRn2MUxAS9C5LTZ7knnXwJaBeJsW8U4P7tDaPFh1",
  "key36": "2Zd69KtWMDbry7a7A2Wg1TF5bj2g4WM9DfKnGL7ytzX42h3qdo5P1Gon1WB4MjJsgkCLC5D75KNHWp3p8FQ1abAh",
  "key37": "5LFoT2TZpHyu5rb6BUv51kT1nEc1vAixmDCdt8azgU3ed2ZvKvByjaHbLpFPLWDY35GtCu6i2GR1WRSZsePnWTwy",
  "key38": "51jH8ZcBupDLXfLQhZ344UocfCncAsrqxwqcrNGvJS5PSvYsSwmG489e8G799FFqEKGN8n77jsJqzmpwT1i8ELsB",
  "key39": "2CXjGkZVWQydT7zy2T8wbTxYHUeZK7zetS75J6xgJAFEU133Ps2ePJwmh6iHfAvNsTqPRFfdXvDusU1jEMoVD5GW",
  "key40": "3zTkhVgaiVixL7J7X4Qsr2gFzHP75RY2ebusqDSDhdvxNEHP7YFuNLVRMGTuKZZauPnLCresVtfKFaDfSk2cSXXw",
  "key41": "4F5PFXmb4zS4zKHH3NTHCfacmEXsRoLUvdM763pp375TDtbma5YF9yq1hZY9WrjFYV6euf5zFiDi8r9SfKXZr5fu",
  "key42": "dyQ2JiyEi7UeNbwPkF14QKxXRBn5NfU7U7cpBQAxH2rFRSbq1oqRfaUZtUpSBVsB8CSCmASgkaLXUoX5mMCMgXj",
  "key43": "dFfV4dcJiL4ypBzDvcEQZwxaN5hrYQ6sUu2LpFT17aXLDj2Y7q4CrstoQKpKHkbbm8jPnSvPW4TZSiTfmM9me6V",
  "key44": "5v8zEPD7jk8U4RjUrPTmdsA9LPguFJKCEmHMfV5xJ57jqK15TxLS78xN5MuZFLrCzMcwF1iQzZ5B8PXf9XKfZwZk",
  "key45": "537Yaqfbsh1PC1z3G1masdMAJ96KfzWB8hSXs8mVWmLLoqMdMrav8fBfge9UmErVRmPcg1ribmxrALp79NiFUs3u",
  "key46": "43w2brq5ucGJtQA16gT6T5C4UGWs8bwHChUzxNf2yLbThhQTiHkLaoSw2ZqLnmmqpsYXc4fxkfUPBTCxnsDn5j1o",
  "key47": "2GDVkYVYn2nftEaBS3AJHKc6qo6R2ZvPDH1qvrKoh6sKMhEtAZ9XyH2XxYoM8pTPBb7EyNCdNz5YqY4HETbY4oyg"
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
