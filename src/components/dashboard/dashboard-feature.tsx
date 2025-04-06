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
    "JoNxYZtjGD7E71j67f4iEinviF5bBtSn5R9ZgsmtqcCKi1msT2UjNoH1E5r8meomKVfMtBY2LXef2Q3SkgJLVkM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eyida7dmmFT37MijACaY8WZXLt1XoLHsURXDY7WmNCaSeMtF9CBcgXsHJ5f9Ani688ysYm8eKSsxWG53K3t7kYL",
  "key1": "NRXVn77SvdT3SV2yPjpwwFAuJhccyPBJnMMpaNd2R9AqmD3GJcYERtuFM58ajf9vdCf8chyzY7cuLBAou4X7a7D",
  "key2": "5GALiehasLcTJhjaRR8vHWXDbWdMoGYNwWrWG8P1wFDpNuVJE5FZ5DzjA7gfmNEDTJSbVbezqtuhKS9ddxWLwk3y",
  "key3": "54XtrNev1PkymFvQnrmhr63HuqTWWvygRx8f3zn8gjD7ajR8h35af2JDUWNjx8c7Jt4A9PjKd4sgEDp6zf6Pq8MV",
  "key4": "vb85dAqGiYjpATAQmq656WSJnCJsZ3USyZtsuwGuiJNqdRyYM425fhS5mixRSYo7cyfJ7oWnWMfSxUwoduXWuvK",
  "key5": "5FffYNKPVi6Xn4aMi1S3Cq7AEuSarSjUYc46rrFRa5M6zwzKk1vMwhYyPufBBk7KRWfnd6vMx4r5rmmDN61Pzr7F",
  "key6": "5ck53WMMP15KpaQDR15zXPb91wGDtaiAtQmHAbCogVrd9qi3hTzJC4GhHwa57P8GHiBn5hAt9vKgyY199Yqrg9sh",
  "key7": "5ivbmxHxzY6X9VGKu6kDAXeA4yGiuLXJTHQ8v73JFn2x1quhCGqRHSnUDQakH67MLSU8Fc6L6FkKTi9LwVALGGfX",
  "key8": "3CJ3Pz3SxgTXVtX6rgEhVMnJPVs8RGzd5mGJvp1AtT5fcwMw7LKxv5FKNxA18EQ4Cbr3jvhb8yaDoWCQz9rYVTKt",
  "key9": "2r6sb8uFsaw9QPt55yXMSkQQWsGtc7eakzb1oEZaveafDyoVbUpJvYu5tWRAewEvbJssV7T61gbzp5iKnqTidZid",
  "key10": "DwCdLefne8L4tNNAvUND9CjYtxJm6cms2QQ5B8Lk7R8aFZEDxxbDhZbAUYk82uj7ag31ddB1bVWxxekHEhScnix",
  "key11": "2Stm2jhKVuKK4obPVepRwzJWEQuwqfiWFZRqZpZtLdTyp6uzgCrKKeqT88TwgjcWPFnkTWp14XQp4AYtzhU67cs8",
  "key12": "2oFKGkawUAp9GAF1MxquVvd4skSfgJBwRiUmEExErFzVrUK8oQCL8Xu8xzB4tPvDFCDB4ah4wjwv87Aa3a3kMniJ",
  "key13": "4dGvpty4PW2PiTxqBAzJK4trTPH1Bg95HNj3FPbTbvCdBLzECZL67Pv8PMCrWJB8D9tD6dGrdgMHb1U9bSmWGv6h",
  "key14": "23fH3wNaJkEqRrKcW129Db7vJXUfDXAy8jaRfWqpq7Pb5UgFWfKxz8z9DS7yGA1tQB5QrPBxTeLNZZW6sCNJpPXi",
  "key15": "SKEymvL5Nw3gRY1f3QKeDPCfWADLT67niJA4yqtUv1Ym6mNjuvJ3FoNtK4jDojXJH1AQCVVrWLmaUCrqvXMF35h",
  "key16": "Tuj7XwdMM2S3AM1QQ9NVkJ1K5KfsYNsnGPr5vyRn2qGmWp1KtiMYYP23MRPid4CJnC9H5maVYC8pkbeQZofNvK6",
  "key17": "3uhpN5LtjQoonHxHtXmZcT3NoagfFh9MThtaqDjbwTuQj94jSXo4L4zbHxpGWahbzxSgHN7yu3NBhv2S2F7GBUJE",
  "key18": "59CgjoWd91MtLqMJGfdSXecAn3hWi9ybXhg73RLdkUrfhxCuocCgZnAR8BmPUmA6GiwccbQYf2U8pachRghP3hAL",
  "key19": "NPDQRaTvix4VZBmE3razc3vZS9tXDJnQ9ZVCUpLSdQYK9zJF1UECt82bzfnD233jYpcwW31n76pW1UwnpZarpvg",
  "key20": "248qpM4ftQU9MLMDZHYA3c1RtJhSf3h14tHgMkewMu7Gd7UFanid7zrRcRnJA3km9NhSEk7Z9s3f2tZ1QZPjUiAb",
  "key21": "5p1k1iAxSuXX3w6t8bvAAyRG2dTGnWoAtUWFfRzjSQHamDshdwxihJC8N8wSdaWUunJ43Wys3UuuTjeZqX7ZwBmb",
  "key22": "dLWWybdcJhJvtV6VkorfrXSRBVEqGTVgXBPgh6uqndUmCnFv5LDyMqKRACL937SfcjUgyskjbmm1oSQvtmxPkRx",
  "key23": "5WP1J6wRRZySjhFnM6CdFVGhdmBMZ8exuAoos18rJWiuNJEJmSDHLsHNnebr5Y8sFx2Qd2ienF2pG2hSvCVUMaS3",
  "key24": "4V1F4nHnZ2WKeoLDj6ztQKnPdxgH4yWiS5QkyNPkRi51fu3U8Azcgo1WgcqUg3jb6pbRA31vBTZGKkefFWzdbs9p",
  "key25": "AsMy8dUWb3JNLjB7u8pxKCZW6xr8MpdG7Tpc8p6irHRVGNHHg5tfDRaXuXdF36snEipzGH9M5PnSidacLRPhSif",
  "key26": "4ityfe1sKA96tWqq1NzKy1wC5Peyek4uHfRcWRS1mTBcMPQbvrLQrBANthmbzNE6fF5gWqbRDjzQFJJgJj2ToFCx",
  "key27": "5Sk92SuvAQRi55vYHYx12A9VdXCJx1JTnJSdG8ffM2h1Sh1BaGUb22gAf2269koNrT6QQCWDcs48q8gqXfRrkZwd",
  "key28": "tDLndTuWmqqk77J7LR5559RmVYMQSTqUBeJuFwhqZSQQGRdv7NomiTMJngVTEJemS534JJEfcYLUQBTz6gecZRN",
  "key29": "5sBogszGnqjVtoipmnEpoqtHyHmy7rhWYFFb99dQMPfAJN14ohh78Se2hygChAH3nMxQsUP379RFqoXuf7zNv8Ja",
  "key30": "4tciyzEgCjbzhiQyGGuMSk9xiohzNZqPWYbjfezR7ZWb3XbioA9xRAy991LRuWL7AEdgxLP1GiGqE5QmKKYHeKGU",
  "key31": "4rvQJbhTTQW7pauFvP8wuyx2TjVdv6Qxw8qBJDp7yaTs41spua7Dc7VkXJoHsrvLqD7WEqBkDsTWDrMb8do1Gd6r",
  "key32": "eQePSDrQZgiEfYnV8tHMgh7253Ue6gMMDJpGTWqKpXSMUgRdxfJWQudxXFXpGaX2XtNxJYp2as9RWcKJiZDQPk2",
  "key33": "3vtMZukNwih8zxW7Vb8yMpBksCoUDjNTWesaDviSyH2KC19iczGcjQKsxGChU8jTiyEsyRTqNZhTSanc9yv9D2CM",
  "key34": "2GtNEtzGBzBzaVGrh2dJmCsVoB3mvuRGjB9bLM3Jb8VYGXo9JeHyfztQmyhJbiUiens9tHrxpdhysLxrvHPtoQ67",
  "key35": "62Z39hnGkoPGju6ih7VU18TdKUrwF4JckzisWMMjhERgFt2ep2SPEzGQ4wukUFrjyVDvMwEiuc5juJQFpZxuGrU6"
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
