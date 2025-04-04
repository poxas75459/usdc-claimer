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
    "2XFKWBKvkuHJpRJprF65TKsJvZ8uSPG2kMXPGuowkBZKuZ3V1DRi3MUxjiCD3SdGQysojhMjexAGC29AHwdudMyS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gnn6KzNo8VoZvEq2VxCFAGSpvBniNr8UkJD3QhX5EoxZcrSb1YS4aYJAYP8EsT3bx5PukTmcb4o6K6grQdiMDrh",
  "key1": "3fCRhnRRT8AcX7DM5VPXLDwDjHkjyFvsUv1oDvhQyabbkkxcvmAMTLyTFZj6JKG8D6QGcd57AizSA2or9FKh9nvk",
  "key2": "yAKmUTRPpRXEEMpqVTqfVds5Kn34SfxGChWqDQptEkFVx6DG88dPiaF4CXvUzLwafwrn9CeXzX224qERkUK9XT7",
  "key3": "2WThAnLMoVLnJH7ZHEVtpuJzvtmZdLXGfgMTfU8vLqFfwaHsQHeYed1pyfd5jvm8MuDrxGN7PQXnRhGrfvHueqXE",
  "key4": "3u1a4TfexBsXNJFL854Jh8YYe868V6vWkM5huRUNmwuWrNXPX7z8K2NsVyyAGeQu2VfUiGg2dZVdceDJKBEDXNvH",
  "key5": "5vvhRd3Txsp6H4m2y5K8TDLAXcwts4v4JiZSfRq5bVhhkQvqz7LV87KSC3PfqXRhifsixKTi5WaZhbnLPyTCdXPE",
  "key6": "4epp32q2DWS7qnfqCfK4r76VQBiWSXLRxVodDrz9FxwUQy9rJpszhbQFQeB1UFYFZ2HT5gcsYzLxGrFmhpa9SyCs",
  "key7": "4FDRtUoFfQy8AA8SKsuBtq5HAVwQ8FCNsS2GjE9fMdVFuRCsRQdYthPeRRW68JQfWTsbD8kdUgA8mMn2xzWTNyCW",
  "key8": "5iQ5Nj6Pgx3ypaANyW1yxVcoGYAqhLYStgjvH5whGjNrtGtMChVBSjXk1ZXUvyCWDoQojCaX659TJxYWGS3hUj9c",
  "key9": "24bwRmURghiZsNorC4CcCvBgDxDYG5cVjpb3tsMdDJPsqQGgSJMWYhpMduFREk9kZtFa3tNDuBAZihwPXRGwWy1h",
  "key10": "UYSrCBFZU3cHrw9TYzHgBkxK3BCcbrKsZvVvo1yBUSr31SBrv8JhGrfP3w2KPoFahT8DUsEusPyhhT5id44vfU4",
  "key11": "2vycE2FSGs7TgYcgPaieDj7ovESZCHg9Ae3wBUid41qTtgJTazLvyJZazadv4C7LWHw3R1oZvNkHbbqwtieVQ1HP",
  "key12": "42YfTYBkVwYcV5LnUxEhuyUKGxUYjUwjQu9oKGHVbzx7fw8CRs1afBnhkNDU41mkCkHH2t5Fi41aaNuwfxu2fFx6",
  "key13": "2X8A1xL3zFF1ptZ7fQXeCbc4N5sbqFpjSs6FbHmoK4FsegYAQDKGqv2ezbcspabgveyZk8Jh1tk3hpfdognHgpuE",
  "key14": "5DHeQx4p71obiDh5Eau7AtQTKBuGsGaSnZtHVPTwE83KG5F4KUNBTDykLNMSsrzLhVnvuTZGE9Bea6PTEHxGzrBm",
  "key15": "5XZHaZ2BynLH5L6FJrpDP4yF5UDuWE4MmboJAPrYfm79pEFoY8Z6AbpshF625rwUAonEDxzyxj7NwAcKrWjGjYdg",
  "key16": "2ra5q3VgzAEobAHXCVDNWr5w6jwXnB8Ku2V5hysYzJwBCttgVEtF28JK4BxrDQqRu41FC12iiQj13JgHegGvR4i3",
  "key17": "3CdhYWs5hFJwgd9vSLKCggR2g9yHN8yf4zWVqFtiSNbL4iCEjuAejdqLQgVszqMrjf4bcVHLyMchEBmSmPPs1uc",
  "key18": "5Za3JNFivEVKDeeDcXSdJFbGow4mSV38njTKwC8Fawjn8QMmSqF4o4EYsCKdXH4vdViEaHyshvtMiEUFSTDKwbw1",
  "key19": "Me9P8LvJN5DC6S7TXoythdEUqkq6YMGw9K9KMfxYoojQYXSmgQgaHk3V8v4boSBCkHRx1mZeXqptMh9USsb54GW",
  "key20": "3YYgFKwe6UYDGbUAa27axeTzgcXUNYiBF55LmNTr1HpynJkbQvZB9Up5YtVMntdUvvMFiLonoubr4kdJ1qb1RQiu",
  "key21": "248YjkZkBA5MVF92CDFM2NhV2qWuecc2MTCPVYhAwDhbssLZt5XVBGFz9g85CF2NxaXssCxh4gVccRsXjg26rP2c",
  "key22": "3VDc7cDSJyr2ct3FGYFiDchzjNJ5hAzRebiMrkaemM6SpSM7EBe2g6wKb7WezX9ubVaDu94m57cdMHWqeEhCYYAS",
  "key23": "29RZZGzN5U1P5EYTyMjS3TUKda6cfyitutmvTFnypSru7WKrNU9gFrSDMWukv7tKa6KQHZZt71WYGnLxS4JJZL2M",
  "key24": "4G5taSs2yEPksY6WBrqX27CEusSJn1Vr5NabeLCczyxjSCSuNhAmy518vjDrQ7nkacDpKQKdmworLY1WHyZhv4wz",
  "key25": "3tRYWQNbmKvwMY2L6czya5RhwMRFwj9hMMSGYP1jcYjpmH6pf1wXUgR1x57yUrKCuwEeri5XjWeNWSKnBnkqNrZy",
  "key26": "3aLN7spr3yQAajSs2WXqfGcHkj8SepBwnyvFF46rc4UaoPp81jT2qKq49rL9Jybf6wkDbB5FjBaqHwNYtuFiUY6A",
  "key27": "2CAgZfmBnYjJKKJVqgfrkoQKaEJ98HRd3FAHrySTt6S9LxfU8HdfL5F3LAxWrbhiTWE6ywm3TpxsWHbcVBWh3Ky8",
  "key28": "5P9A8rkRw2fQWg6NL2DTqfG4WxhdQ7aDtLWk2JJ5sdKhEKWSrVAEp6eBb2LADjLyhH7WoznPscoKjxF3VmqBV5ms",
  "key29": "4cBm7NA7P7541etC8aeEcugixRcpn1UXjH2vd8NqKnLwifJxjdmYJqS4vDgg4KJVjHb8JB73Fk1cd7TV8jZbef36",
  "key30": "2b9BjN74n2e5JgQL76erLENQYVs2US8K8ScbE9EUdemEfZ9ndwL42PhQuwkvAe5C4wdnLBTM8wdHHpRTW7cawKHB",
  "key31": "3m4xKXUEuadjrsqXmtkpssF21dZnX3CETygrgC2vmy4W8qyKvWcLsQcUbihtwHeH3QEfpBWUvCGeipy9UAALXSYq",
  "key32": "4PUTxVQna2iXnCUJWG7VVMi1myV8nFKQwBFPKygx7jUbtSUwwq5RvX4rEvZEa52yCWvUonvodMA5rRGhGwS9jq65",
  "key33": "3K1DXXHXoasAngFTqPwu6CY7aZn4BFCBEsmqeXB5TVmeuYbWCtRizu2zwfuTQ2xSNkAyUbQtZvYFLyrufrMTJkKn",
  "key34": "36fNAgTqfAcxwezocBowL7HGp4kxYySJZintp5gbJuMyqP5nX1ToCB6xxP3wFZjiJ9nczttCmzXnDL1e5KiRroLY",
  "key35": "5m2t6BogB2dLf7fRoydQ8dRSdUhveFLfkD3xnC9S5UZqB7G5yUmepEBTLEcx3RmBfjBkWwazKpDJfiGkUE6e33JL",
  "key36": "4o8o1ikYZPZJLgt6KtEbZ2snChv868b1zvCJAGzUPXk4ZYA1a9wPse74G1hGCkcio12A7Hi1cbmRdnwaPKvKMUe2",
  "key37": "4MJG7A37zhWtdSFHuSAYuGP9KrAXF1UbpkLcEdZEPEaDFxFsmCsMqgCg2ABZg6s8Z8xQNV5hR4J6KmdkjWZTvrh4",
  "key38": "DeEdku9aiw4Gyn3B5i5db4o59LFuMcSZXtTFPkUCr3GPz9aa3nUtHzwnXkpEn5ZueaFosvJjk4vtfhbT8KDyZ5X",
  "key39": "2pzv3TGxPvsAHenPMV73heyAcSqnDMq7diDWD3wmABA9qy9gDAKyvZzZEimnHXBgj3gKtKYSieyJR7HgnH1cnxEc",
  "key40": "4W8r52spFU7gRFUcmA7pTjiur95GgbxDHXq9yZqPLZPgk6YP7RptPcASF1GeEL25kq9ntyW4UrDJDHFeXeQtNQGT",
  "key41": "XCnTsV8tuf4JqUGwFG6p94mWVDUKGDy8nrSFGtNvFiJdF7RPA6MQT3is43tfykPCZ5xi2DNfQhCM5yC713gwwpu",
  "key42": "5CJuqxEhohwyXMHJn5ufz4RcvbzYEm2pgAJhFNypxkHL69m5S8RGAW4C7yJHEq9Awd9EYH5nL2qUXNmS9ggxKKxL",
  "key43": "sWQbNJxP7LQ8oezihn1xnQdNhFMCGwJXHReatYWZVhQwtsQtVLGjzYZXr8fnNgzLXmb3Lw1XYArAjq5vnyWUMBJ",
  "key44": "iipYxiSYdcy3krFXDmCxcNbZRy7htHAvg9XipdMA6nS1UurNUKLabqX2wnF4pNnuD1ZUcknaCbX55DimrAgLPxy",
  "key45": "mNUrgETZocCoRZDi9nsXHLbpKEXDX6toLkHnCPUoMWtK23jZD9BTkQwkvkfK6nvPWCHEM9FXG3op3aWqwKG5Gdi",
  "key46": "bjXQqGTytMjNpx4gb6C1QRbMAprm8Qob5BHTMQEkzTr4B27jJfWk7E596rXc1WyCCHAfRMCPqngdNwMDmmJ9Dro",
  "key47": "5CmRaiEcnnn2kM9G6uQopZWAox9ai29QhbA8EEMVczzqN4KTow5ewYv4uHmqRWWATiAWFgg17Yx7TxMPP83rxZjE",
  "key48": "4EzsESQDs2Kgs6kjzttpuMRyuY7MWKAZEpn6bbMMcHuKaXfbxxypBMp1vPc1DvARh8UbUZpikbUq6tPQifWCE8Q4"
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
