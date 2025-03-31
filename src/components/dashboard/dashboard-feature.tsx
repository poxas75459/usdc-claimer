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
    "2iEmSbWpvRUFYYjAD3Di49tFRWYgPTb28zEK2AvM12hAcgnY66wtGy4FZ12rmC6FcWwQ4YnbUMhJfMG1GzY2UuxK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tPQA4PHkmaPFe5m48gTWLKGAiWMqHJKfafF1fcX3p2wfZGVrrV1GXUJNGNPo34is9CJHYFEsEkXWa8pYLfBM2tx",
  "key1": "W9knDNTjZUgwZGt1L57Q7ncXivW8YUTWaADZAEaCm1y3ixEV8eikMzspFnh4ZFfTEJLDDqvFtidXomb3GUYw1ES",
  "key2": "2WzwrVppHQXK3vxTBw1JR71rnmKvPuHyPNTeiYbvaw8fkXJEAm1xMYR8fevFcDTHr8iXCX5pu9r7TnifpKiWuKwW",
  "key3": "5v8Dw7FePikGmmwen8tYscjCojYtq4cibgRzCi9QobykbZ3xrunKji1RHUA9ccFbVFkzZGyfbftnisvdsMsi638f",
  "key4": "31tKCeockyttwpXP5jfT7CLgMxLjbBQDgWF33MmrqsvBTzkL5XS66vnR6KCjHMPBZ4e6Eb5P2aY1LTy4EBcMcsfo",
  "key5": "2g3Zm17VA6kYuiGqh9wU1ivVZhVQp3cvRGo3qwxYLtfuYrhZmqHUX12zGTex97WhNuys2Vpc4BcnQzMYuLQqnGJH",
  "key6": "57WTFBMhBUw7BQoBNwVvPJ7YSvTxgA8wGSdq7zB1ggzuC8oK7XwqNeYTGC8cH8zcpFMRMJpa7KAAiUkzNySH6JHs",
  "key7": "3uSEARkYzWP6H1Dgc2gxqdJpyAoNduDf1kEk66X2HeR3ecjrPqe3okRSic2GKMomCG8uopMidVTLy3KC4WKz38zU",
  "key8": "4ssnsLyCqbBpeAXivtCzUNf76DFCA7hSvPaHPbeN2BwdQUnfuqWFCHUExj1CsPcVTM81Fk7CgdtGxvco4KhqoWxX",
  "key9": "4KXzDhGmEq8oGFc6UcsMZ3nbG5mdSrXEvRZhPiKekbPGHLEMRup6f382SdC1Tji7mTCBVAHCA4MtofGhGeBiy8TX",
  "key10": "2AoTG1YVjcdh3owngTikFgqCqnXGHKqkJJ8VsXxjfCb4KUEVPQQaRJwzKYQRPn5xo7w8YWdTiNhueDiJ1zbq1VVu",
  "key11": "2vMBakJVHvvcPCpgqEBgSeFJnevGTP9Gnd4RrivMG8EXAXa38abbBHq3waZ9V1gWJx8Wm3fELfjXtifP99PKivah",
  "key12": "3ohsxhXTYe8UqWMauGP2CZwUENhmpHBdwNdGrJ7KjXWchjX8Riq65Zy41eXdJZoy5ezQJ4cSEbFEctigxRbxWoho",
  "key13": "2L3Dpa7iSMdVqMRxzTPYTiqR9oKkN7EefYxZyShMDJK9bSJfWUAuAj56uEGzMkMT2aewjFXs9x7JrsYiv78Ft4Yn",
  "key14": "4NgF74c9HbNohqoQqDUf5YWv1oG7ev2VWQ3JkkPaDGNXH2DwmQtrN8kgUKjmyTWhDXovHoEg2rhGBTVpQpHoPNir",
  "key15": "3CE57wyPtNpGtcyWxkpw7ATaMZef5XM35FCSNATCihjjCfNUez7kCMTMFWUPYiSRBdeuSb8Appm6KYmEwz2w6e1x",
  "key16": "5PE6q4AAwt224NP8jaXqgnwuqtuakuCU7yxKudxkSYbkrjjVoP8QpXRd6Chb4YHHVmnhYk15KNcfYTNXQXhZrvKb",
  "key17": "WAmLDfktkG4VZHm5iuPQb2zWB6dCvxdXL4uCa2rn3LY2YpxcdthezmRz3UveveiNwvSCwH4RYqLSJMpd66qEBPy",
  "key18": "5FgSvbZdxQ9HNbbu3rjjduzDE5FyiBhAuLUHVjXr6vx5YvdJAYXyoXhxBr8d84S6o6bfAf61V761rdwYm4UqJGwt",
  "key19": "xkNkcEkYq1DVGuMdQo5Y2MUsvowMefKHKYUatV7dtH71mQe9sM2FQarQbKwHH1ZZZaVQVr18YS9NHVwFMT2nzVr",
  "key20": "6d3sMKEqir4vT7ZWNF9Yz1ugyJmCtt1SHNzJUVHfyZT2728e16NtYm4FHiEPxePTrXZcENN6eQPzJUYfiirQifn",
  "key21": "4C9JX3mYxiiGYNEUMB7tbD17qy5UhfoaReV2u3vH8GgLmSFsfZ9uQsXqFmgfaQfnyQi8Aibg4XZAeAo1bEKRi5uF",
  "key22": "3exUuwUDYo9h1VtfFZKgYZwGkF4xCTBjPAjcuKLSDJ1SG8WQUuL5WasSpPN6RGx64kFr4KkMZ2steCzKDa2J9tgz",
  "key23": "3ydDshDoXjXhvYrb4WZBtofjkCTFHff5oBtbWCHKE19tLfqGbJuhxm5y4ZbasHyKBCuFXmNzfu9VGNm8i2xVsWuA",
  "key24": "5Q4nHgvxZ9XbXdE8yZjT5XiquSapppvs7ZiyuKLqbcASNVQCo2UYRUhCpHNzKXAQ1XZbJxuXuuJtunUtdkgaJyT2",
  "key25": "5XfcdtjkjDEc4Xwnix2oJ4J4t6s1J9Ev57dseyUGfZuNg1WZvKVCcpSWSfkxC8Mk4PvXYCz2BzwNQfBvRLDMWoNQ",
  "key26": "29mqu2U6ePSfvxR14CAFgR3gJ4GSqbturXhJ4XGtKfvK2kCh1cmkVvGk75Mnf8yHsS6jtFKPq1P2E35FyhWPPg9t",
  "key27": "26K819hiK8yxLDJxLbC7if8XtRt9cFuMZev9RW1tLNgFp73rVWTjNXQfHkug7TuEXup3XZU22UcDvzQjRDuDmrQ7",
  "key28": "4Wn1v11JEZekPwpZaRtZitDUQA9UvoDeZLve1Gfn5X4BS1sc4pKSXRe8ypX9euH4LCotCS78vFuMB24MD6WikDpk",
  "key29": "2ebh3ogJKcsB6HjxbGBdQaGYpxf516kkvE62cuxfrKevnf1asFeJBshZyP3xiqoW4KhYhVYLkbAedWjDxGqHcCcB",
  "key30": "54TzEQnavMuRJvKkeMhNMHMF9knwXPW9DeLDxZLCEd9sLNjZipbuFAmuv8fPaWFXxSsr7cwQkUi81THyqyeJx1AE",
  "key31": "3doWuJk1eJHB1jx7mcGiToW2HhkW9rb2U12G4y6RNcYX7jf7SYy8mFDYf3jDC1Y26bswiEhVKMG2WZsGETZ3QU2S",
  "key32": "3FezMm4MaQzF56mT2ipoj1bNijzvGRphwnsxKDfyn9RdCRGBw3FHge4s3Xjh11P7R5hNA8mXkmBfstVMfd6B8cmp",
  "key33": "659Q7yoXRvEwKeN2hXsNRm2wPRtBVALf8uXUL9yqqBqCsD4vdVv4HibTR7Nc8cPDZvvFJL69coZTUJKTS2krp1yk",
  "key34": "JjGsVpFEna3N8foXorGaK1T8A48kQUU8dqDvsQZb4SCFJKgpBSDXjzzwzBUV7oFJkcwK8YoVB9awAEWJ1XiEcZh",
  "key35": "5pMihPDG8SV6izDxYmFcHyjuC4eu4r18u6kNAqVgHMXCfLVXJxZ2Ei76rHPqcLs7fbPmdoUUegre4wfoJrktb4JS",
  "key36": "25hNV7eFVbVMfcnsh7x1Hwq9veJgaudJey1cGv1CYm7LjK6FVgsiiVarujmrjnYkkNG1sXug3nedafSBBvQg9wtL",
  "key37": "koGavx5C6Sjpx2AvA4iPC4Nf3RSsrGHau6EryAvUvJHZ9fHFHJ8MyhdcMbXXsuevFZZZehMHHZPkF3wrKAXVohB",
  "key38": "2TFX4XEcdRZaefHGwbZ8jbULNFoepH3UQtGqCkSxCL9Yx6qFBZZxjojZnWWa78psf5BrS1Pxe9D2DBWYmAodDanc",
  "key39": "P8auWnSPrNuvXiezDXa5SdUQcGArGx7YHvnnyb1B2PDQUu3rmMskZFgDH6fnVN6RM1WzguFTW2MCmkXxeCAeABE",
  "key40": "5v2L7wmeffLAi5Jw1dvCGbFKw2KyjuuE2aSqFb2RYoDvg333w9sazC9CBztFRDWvdGM49ALBdCE2DafW2DJ24JpY"
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
