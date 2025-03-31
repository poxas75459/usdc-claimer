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
    "5RKqL9sZAeA5N2ZsnF6NpAvPdzkqot6fJVVrX23JrdKfiRQ41PnfnEBXfXxAoZTNtcmNksut2T3acvteKmKQ1Mrk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4y5vUZBbc2tgwciiXtJ5bwJyWBh53D7Bj9AcvapuMLRu1kWsagxiuL5tXRBdjqTYtBCwQtLHKrVe3r47sAmb94nk",
  "key1": "5ZAjEcWw9axPgeVAvyKmqUf5giVXcCMomyAhop9Qxj9jLfeS7nLiS75mELS2gJbNkhteDPzWsLQJD9JTd6ZFrmhE",
  "key2": "2UH2enAJutuP2GCPy2SPAq8fgWH8iag3Lg4VwTPQwG15eG7ZBRzt3pvZ6BKxvAhVPQ4iYPpDbtEXp6CwrV4WwqUC",
  "key3": "5h6gKtPPfipRAo4FbqiNW6nV8kXKewv3abmftoh3EJg1hiQR4g9t4xJJ5Ag7ocxvn7vAbrXVv6iyDN5eueRvFCPX",
  "key4": "618EjvGqWuXFmeXBJg3pPmsdgFMozuJWn69Gy77KgM768pqT7LEFJK1ZRvih6eHvS52dGBZGSz7xuJyKnnDu8obk",
  "key5": "4gkATFmVqCgcMLR7k4Tnf4PNhkvcVpJq5rWZ48YTdGYpHHr61hQRYoRLT9C7db9ZtBbMeUuS3FJVMEzvDC7ymfKL",
  "key6": "hxYZvP2S6PC4hZ6z9AEdeCYsAaY5rsHm52uWsyaQhRwNwhk9CqHQvXoRQ9guE5pjN5BjhrfCKvDV1EPWbJFPyoK",
  "key7": "aaiXeREu4Cg9QZErb6FDzxkDR16LzdWu5cRT3VS3WMsSMGS81EU2J2E83ynLcGbPmpbRS6MiN91u2Qzo8NvfMo5",
  "key8": "414U2LmMHxd4FDyNqTpkWKGFtdrP2JqsFEJ9dXvrZ9cybXRiFrs9t4isepL5Gsb4jJGFGmx7mPnsu9guNVJzt93f",
  "key9": "eYWH3UthshECa9ZNhLb2XWkyBYh71T9PRmnSq9nhNCdLUtCiPoX6ZqfFqCZfcaDJpgk9epndZDneT8RCLmHsZ9C",
  "key10": "4cFQnXBCo6NRGqHfWJdujkMoHNp8hzP1brEM68J5U7r6ad2haHNk7XVvrTegXCYrmX91qbkp5F9twhKsUGdYrEMH",
  "key11": "66tkkmw8TWoopD8xyWYj1t475YiP1riknz7BHkXU2UnE72LuuMUqB7TZoFDYuhv3fb7nk2fTsjV8q5Q2yQ9w633Q",
  "key12": "5nBeY47HwZE3uMhcjga9SE4pneYVpLqdm8AM5GEqLcaVKHyHFvVq6gvtpdRbye65JVBkmtVLaTzaqhFkbt1evutK",
  "key13": "2S94eBmURPudNHuh8AaXwoj8EMmzcu42EZATq183Pc2qr61iN6MCUD2T8DtGKBipsGC6xJ87TpsUNaHNk2vhFMG2",
  "key14": "5kHLbp8PpERK5kfnGkq8UHHPFufT9LhZjVWubPM8iZpP2d27vmzbHmjqfJH3GWPxzStGQAXkT9uzqxPbXJkpvkm8",
  "key15": "3fQxiUn1qxQE6qeTCudgFPEh77Skz4Z2FwLWoJvfH5PwsEjanxY9QcFKmekKtHShzbc2canhxrDsNbD2HnCHbL9T",
  "key16": "5DhG6nwWydNS5xwJzBQC6XUFBDLroEVCsWDFY7DRRbDxyuCCoaoAEb5A1CU5nMsfPJuFwMSN8dicTywFHkZMXs3z",
  "key17": "4wG8MJnQAMur4ZynTFWGr5cyE61LgDoGSvnSJEnnYkhjcUGpMcaFqaL7v4HexGGkXzw17TaRH11rKxn7FnXSyv6D",
  "key18": "2cCGt9aCHFqWsGDNV6Wcc9jJHzegoAsf2gEZRPTjZzcyLsN2V5vy963JZnE1ozDerqyyGip11VTGB86nk2vqyuJS",
  "key19": "5sRHgbskwv3fqMHJRyoHXjjb3Y4AhmmKouSnN6rWTinmngu47HhxZ7G27npb1hPtfRYu7TEYm3DT1BwYxRv6iGtc",
  "key20": "2cUw4CmPSgMyXbzWHTasWCzWTb83sB2aTgxKDjDF4kpLSbQk2nxtLvpgFHVwuHmn5busJR7GsW8N4DphFwV99ke5",
  "key21": "emEjHkQrYEuTHrsrvV4bcxuMQ1Da3p19ZrvEV7u5JN3HVQf5UnkfckR1v1Dmu11us3Vy8J3ENbdfoY43mhaZ1VC",
  "key22": "32cgqN2skC7CZoF4S1KNFgRUG1TLH47vDK7sYDjyepWRDrccDff38VLdgRcHrbnUC2xbhy3uuwgu4UydDvFkBmaH",
  "key23": "g6bV8qZEtewQaBu51YSRTkK7TPK7yiD8fY5Lg22YmrP6v8fovqV1g6Empxf2hWQ511TBxjKGkmwSb14fhQFTabi",
  "key24": "35cXFfLCz7SWRoR9G1Xso2tBVsgQ9mkckbrqRNDLRQJf4dwZuCMHFD49BzSxEHuV3Q2SPxgW9sPVAcy3PbEomghV",
  "key25": "4nzwFXYgKsXR7orp83mqMyYhngj9oF8BtpMof9DW3HAvuR3Wk6KZs69Py7oR5qg6gEb7CK8LmjTWpp3xBmJBhu4F",
  "key26": "5Tpd1ErNSvRE5F6JZTHAHtcCnCSotZmCozx9qqvqStfxJYV1tSQhgZ1ycsVCSRKejHB3mHt57oZnfQLwvJTpzQ1u",
  "key27": "4D8jXS77b4hr9wjsK2LEBwLRAGopcU4xDezZrFLtBXWQqa4AcZLLdtgNvV4ZDkDD5WxgsJp3aHZA7sjUAPga6C8C",
  "key28": "4UJF2Cv1JH1LvieCELEQYgkSy3qfyNwYnPNNS7yTgJgpd2Vm3Fv2FqJPrbHjuw6hnpaUk2ozXgt6sAR2mjVJn2FU",
  "key29": "3SsFous1xcAiM5q729XrFuJrFnzfpDYGwix3h2Ks6dayxvxXdwuzypsz4BpBQsLyyvZojW3Kbds862ZoK6EGJKJv",
  "key30": "3ismZQAjM4tG5xy9vt8EwMQTfKWKvwuGxPyPXijfPrggtDCap6YLxVGPXY9ecotTv7s6UwXuK77ZcQ1bYAdveLdE",
  "key31": "cpSYLzUTnLcti6BVoS5HVwSKnw4EgzutmvqF9U5R4qaaC69bK6QfgExbjPDMoqR5sDLu4U7mq2BpNQrYdMkWy4i",
  "key32": "45TuYWCg2ri5kT5EQWYVCkuZXSQQE75CLJzpjZkrZZbsKoeePg4nWuJraMBd4hZDxna2g3P323p4R5KeVu5LZDKB",
  "key33": "jtGhPEoviR6TQjpKA5fL87TFUSWSP8uGrAosGaKpdHaCsk8zgYeU2x7jZzYFUFpuzeZMWsg2JQ4RqESpyD4EWB4",
  "key34": "n9dzgCH3dDcoHXTi86PVjhr7JwFdy9HVJgbZMLnfg66SdNRKZ9XvST4ZCGMyTwSTALzKTwzeXdo8stMfcYkG2i6",
  "key35": "uAn1fp156HG1gg5YVKHL9619aS86p2RZFdAs5VHJ5N9qAUavqUj9rMVAf132E3mTQGG5iSAvm5QuCowBifCSiyp",
  "key36": "2K53McHRkhheEsePirqx8FY8fg9Vmj2TFnksxRLJ6cbSEwjVDTYc2pJqJQEWpgk5YUy73ettVzdd2j71tYpSHwRX",
  "key37": "2tJE6BRg7at99W1VhG6THZaoKapQ4odyycLerLSL4kT9xKoZf9on1Dz9qwHjKnLd7UEdde9bSZXqGm8xSEGHy14e",
  "key38": "4sd1QNmmZQ689ccAboHq4ajkHNLdyZP4NM9eZ8YQJ6qctQmkfhhPc4GdGnmRKDUddtYM2XPrUuekmcpKsDGpu2sw",
  "key39": "55baJrGbvCsLgE9wLrxjcR9UgNbtowArwsbkXscJZTvKMm86oxqPc3hhTi7cETY4kxrXMTmkc6uJGVtYgWhQScQJ",
  "key40": "42Nxt79L4csoUr9VmXiP3wW9xPRFwChJaUHJdkzis2y1vMRBaP9zN8VEUo33Bpkbb5rZuWVsm2ZJ18bJ8CjNZFz1",
  "key41": "4Uc1rmdB51GKhFzVACdPi9svKtYikTRLwoE3KRVh6HCwVqAQqQtjcZSbhGRupmThJmZnDDMqx1T4wq9dBo6jFi2e",
  "key42": "2CjhXPci5is6TuiE9K3iDFpwh8US3Bzmg35PgvHdYCfxHvXYWZjS4bUN956MghvzaHy86ph3yw4wg9EAP9nkym6J",
  "key43": "4wRXZBdQyiQjivKKpEVaxRixJYYK1QaKEvBoeWfH4GZjSyBQijFkcAfkDmv9bQx4dfu4A2eQqufApsmAoi9exima",
  "key44": "51WGMBJXH9yGMux6gS7z2zGMms9RcdjXNEDb1bhSnpCNqJQnavcvLA4UYkS79Vrc8RzAtjpgnf9c8Co5HJ4U7iqV",
  "key45": "4SzV9GCd11CdAwNTnrTkWr9kaiHQMMpL1g4s82ED6WDCAPKzJyLdXUVhLyzvS5Nmss5cALL3pRg6oiG3qKa2GJ6D",
  "key46": "3UJ1gL3aCdiago6Vrz7z3SP6u6XMkyBtiRPcpco33hxJb4z79RGzfDJ5brrNHJrJsUK9boJF2V5K2dyisfAxm1Sm",
  "key47": "2bca1AFVHVDDzb14PADGRfa31awuZKW58td6FQeuT1tmioC4JHbrXxS5iecqAiGkgDt9YA5WffsfWvxcSm8Qvgdc"
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
