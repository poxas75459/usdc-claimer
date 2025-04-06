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
    "csvxo5o1QxLHqS921bCCzUyrtUJdRuop4YWsq5yLppcSPCdQAEHwRofwjGZxcEChpWSQdt8Gpan1xr65B1f6SPt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NujVKwd9NCyeaQMhC7F782Rm2MREHPhwhoYPjAR7ZPyffJHoznAEGdZ7G4VuC1EU3JfBtm1v1Yqt6xKKP7o2geF",
  "key1": "531AATBMSChczpzt4m5essbmJfkaAvZQyCy75Vgw8ke6GWnRMP8pKv9wtNuzhKmbN6g6FCPzwNCf2QgB5F4wD8fd",
  "key2": "Hop3BvBvuV9KSjodhHkmEbevjU1nN3NR7DiteYYdmmwoVLvkYiMmijN1RRbM7WU6aHydYifYJGLS7ZCnK88DEP4",
  "key3": "5G3rsDPxYNvDZ6ifZT2nvKtz3ETZWY1UYPPDCYgehDCZ1XCt3Hei8wZVMnDgNpsS6utFozzQuy1XsNXvYEEQn7cA",
  "key4": "23D4FvY8TaV137BD4MuM1ApeZs8bQ61DecQa6epwzwdiNmMPqhS5JYVsCAXG9Xqs1hRyit7en9i7caUj5ku38VUR",
  "key5": "prFDJmPrpN7mgjdmMNS1tsQTJQhHK3m8bZT781jmdSGDm5GwZq1dTD6on8FRxxC1qX1C43C2mRro52FVAqAFoN9",
  "key6": "yjjtiU3ZzScmPRXyGNrCjrvh4NgAk7BAH48gtKFA5qE338gt3K1NiZtxZGmkPm7L9eeYQTAoeCvBDzXeAHix4iV",
  "key7": "wfJ93djMCmguu8v8SPSpXPhJJvNsbgtaAR8DQhSdqPuiNB3mcdDr2FzsZfepSiwjFgnVPWK3RssLoeVnBrMdbqB",
  "key8": "4L9jpq2tgjuzTxKADFxkZUK2vC5NZfT7MpoMvLNti55TKVdGmn89hh1N1gH5GxKhVJS6jXJyFc67ghqY55wGocGH",
  "key9": "5shXUYxLyYsqDxPy5Vg2MmwTBK3qzioZ3CNAthxsRb5zkacER9uZFktk8S89YEnghogJgnwDtFwisKLQL9FrDhwF",
  "key10": "45BN1zJZBqeWP79uHkMnMpT4ZAyS6u7XY5onTw425u4hZgVGEhGtgd9EgNpUzhSQhqiDQYsQ5hSTCc7W8QQpgyCU",
  "key11": "5aVRHdtmyFgp44BtznremRrc3F7jkF22P7bqgd1eqT4DVpdr9tMPwo9xn4h7guyVAAdB8j16VwWbzNo4nuRsnRq9",
  "key12": "4uCAcz3VfXPF4hfLYLRQDeGLL4ZYa7Sr947nSUJmjvhcrzKVLLh5tMQpUQusZS7qCJhizD8ntpKyL7qry26rPusa",
  "key13": "dkBu1ZjwjpGAvhQWqb8fV7usrqn9m3vFevbTi7c5GaT6xohkHRbELXVTd3s1ezVTv4dmtuVrduwoxJmEB9SgRFE",
  "key14": "wrdQHAfduoBTxDL9EuYYrGVoN9RPwLFLrDvqEGejx4WB1NqyDSy8SRKBw9pAmU1Y6YDij3u3bJDimqkVCuV8JAs",
  "key15": "4wMx6NeZLiF61YijdvHJend4eCmHsDU5zfb5p5u31iHZmrw2r2MkvmMpFL7onccTyEzAQ5MjHXb8d4RbvibTSTvF",
  "key16": "2HCSkPvkBdXaaoyyvVWXG3Ji9Sp4m2aQB44Y1yfoEEaY1Vy9tdfBHWVtJkCCgC8KBX2Nf7cdYi1vVqQ98Ztie8WF",
  "key17": "do8Z96CDLPC9JBT5BQhRfabRM2H9kQPRXjnswkGUZ1bBndJsgkWMD714fGJAHu9JijmfdXuYt1M6snVDvUUwLNU",
  "key18": "67Pu62HMU3ETmWVJ11AzyVFqSvPfAP5wYBe1KsPeFXub2hU9nPXvMH7GvVTsp2eG4jeyAh92yP2K1wQSfLfKUwuD",
  "key19": "Lzu7fz2BenqBDtoGuK3Da81uAU7FEjNib78brDNhx69MCTSnz4aGoDe6KWmTk6Gk18ssPXg2ByUnecB2xed3W4f",
  "key20": "39iL1XrvP4crRwYEPGBcVnHQ5U8ZJe9U2m8rsXag1u7et2akhtSXBGzoV6ToqwxoSjoSS5LzayuZ67Uu59CxMuiy",
  "key21": "2PXdBXfoZgtVRnnokFHNUnF6vpVa8Ns6k9RJB8CzvaLSWVcEazQELtgfxLfBY6KxeT9r6RGoSoUU1TQPWxQtAcwZ",
  "key22": "2ckaMfMUmhbPx9HpFDUef9ZPxqsNKBguBM4MB79ke7sDnAKrrzCsBDAZsZq1KQmEq2Ca5NiEcFL97FpodSPC3vXE",
  "key23": "9XFjCLtBRCqD667suQuSDBZRA8GoBbx2ktcYrd9TEDhPtMPaGn3BM7md1WtVoqG1Xtm7zUYxHpoPy8gQCdyc8Bb",
  "key24": "5P7LoWDqe52KJJYNwaWyZbyfPgoiyseJLbcTd9DhpMmnhpWJmAHM8jqDeYPEMAi5HGa6mPXbjC83LkbHb9soyqCk",
  "key25": "3XC5GKNC9LyPywYSGutenKDJkcUqqRo7Lq6ziQXV9brWGzAVLDMiCRBURoN8xnbVXocEwPaF7K5ooMMKwvn7JeEj",
  "key26": "2EvpbCQkeJTxSDiqwAgUcZeSFv5ZhiRFxxfpkdH9x64NNiH7gCyS23uN1ntiAstLV1hCLzQnUHAk4EENg6WQS9M7",
  "key27": "5xJnVViJyDbYZbGqCsqoauPKfuV1HvqdBk3kcJWMtujGm8P3oFGKQRxqgALKSCjZpn7WrmDEiED2nxGfZ5rPq5as",
  "key28": "5Krdy4LB6dUdfxMroqZYTL46pRNenDJsChRtLwVFGZzNhxSt6xkADtzbZ5HUo2V9QwhnBpmT87ReE9w1kBmwGssz",
  "key29": "3ZcbongsrFrEdrmkQtvtuFS8ad5HHXd7RGQF8Z9us5fcyMw4CowwEVQHKwQNfQDWZVFRvx23FcG4PD4SqLt4EZqv",
  "key30": "dfAHJCvPQHbRqtJFLSGbedHk4nSLBZKeHF7wo4TtFG5RgEtg9ZMZ7Mp8xqERUCL6sJoFB82RhrPMe7yi6Xvkcko",
  "key31": "5mR2JUSRjuR2hwAMJ6QpiQ3AG8xBzA3gbWKNHfAwwCgMDG3KHftiyq8DkgsdS5MGAvH62SxpDoNH3zATBGrbB2Uj",
  "key32": "3mBYu4Ap5Kh833GyL7ZEUYSWQyLChytgB64Xr5D4DeKCSDYrXMtw6FRinbvg9pjX9C7HRgPjbKQwT7MFeLj596zy",
  "key33": "EL72PZrTCXj1QE6m3Q4r3PBnDGenXz6vnPVoizB5Tv5RyT7vjF4VJRLU3vL1meJ3znTDZtFDzkCu2YQGdBdT7MJ",
  "key34": "5jXoNGv6LnvFe3vsLJ5Yw2kfPLLV8eTBX3xtQ8CARf8yemN1xTAgy7bMgC3ZY3QcNwS4h9Yc3zdZtUnybZCgQw1h",
  "key35": "4ZZF7JvkuYQ4so1c1Lm4TFm1fc11DmZCPV1tALTENC39gYKtz2ThEaaeEADv66aaMZNgaZDXByd2RY9xQx9mNCNw",
  "key36": "5diNfGGzgpV6zdPW43SCcuMF2PXFtL468ENgyYmCHkGygFpc6u4YngHSnXyjzMyvpRSYZrdhfzXcdZR3H3qk8doU",
  "key37": "47eXv5xwakDGW8d6KwKq9vM3mxefKprsBvDTqjkWy4Q3S2M3x2SqkXgCVKegFEfRJ6XXV6uPF9Yt8jcWyyGCmM4d",
  "key38": "4E9iKofmr8pib5wnUnY25Y46zdjqWETGMZo9EiGupqXuykSuwMcFHzsLZqut6yPo311wjDtsMdKPzhBnTBY66CLE",
  "key39": "2CaRUcwJTSi6Tb9QN6eyQaSUwwD5DrfxE8odEZBWZKBXV2L31ZGbEq5984YoTq1SvLEnyC7sDMUPseHVyV24XZdT",
  "key40": "2pVh6PymERczRu46Ef1tUAi3Q7dF2poTXt7vL5uKwBrYiqGTcPf8WwQg8LHVq2c65z6YqZX7NR3z4dL51Dh4TaiE",
  "key41": "62hVKTNw4em5RVmUwY3fWdJvd88TJdD4brV7ugtdtdK4FaF83mRvEWXgV9VhXEq5ddbNSKZjhvir8rVEEEgHK71",
  "key42": "AtbMjtVs29Y2R9jrZ82EkwstTCDg3XLk8jKEqm4esookNQ6AvhxfueCto9f3TxeWEbYjTLXSXBWooU69rqzJKKc",
  "key43": "34Mk4xHy7rYAhAMFAn3kvXqtJVK2im8iV9cWo39aEUKqJWdL6HHsPLJUKGFocPD6iCXsEy1jeZ8qAni652mFXK6K",
  "key44": "5gmNLgr4RyPw9XtbcmUeDeewKAVx6AJjBPUGYrcVER7TG8Xbe188yVg4Ha7n4kk2sLFVhkUjSVVwc8RqqcfboTpk",
  "key45": "3qppN7uVrh8Pzu1njZrbXvFqVNnZabqpWYSmehQv54ceG5bPtMPYTKicYB15x9X3RH25riCsi2JTqT9wtGdiZLd4",
  "key46": "42FReMuUkjoaKFN31cJ1XdLDQiu1sTc1KM9Nh64672WigVtNpisZ6FV1i8ZJmKjutf9exuHYidxp7N8tiG1Kzf3a"
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
