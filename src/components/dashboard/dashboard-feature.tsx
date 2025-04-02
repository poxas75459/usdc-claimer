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
    "2megQA2xi6We1uqWY1B2xxncMh64JphNYFhAKkLY4oP7j6CQAJv9g5QCDHHyz8jzBMz3Sg1XXms8UhY8SpT4k8PV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZDyB1cef4L5YphLCNRAp9xjWdyUvzMLa2FyMwBbU3Za28EPh9X7KSgMkZc7pVzsEqscgMP6Y2FLHpDDrRyKn3hW",
  "key1": "4Mpj9zKd1GY39QfEDYnT9eUBeyD1RG7pDB3D8Xi4Mw4TvmTaEJJeE3DmCnF1d8LRXQgJQ8j8Yue1yhCSX3Ve9b5Q",
  "key2": "5EXFcJCVEC3Eygct6BBNoWS3ys537zGw3U7yQVg3MrSg5dxNuPUmbffJ7NjfBWaC23QHz34mn4MArjWFGPcCKJzi",
  "key3": "5yEF4U71pp94ZVQHhQyoegQ6wAjqp72LgBfogxVJ7r11G4Hu6TX6gS1BZyPZr7n9V5mmdCUCbycRimugJxHU2dkC",
  "key4": "4Pwr3fAvdasSd7QTrQcsLN6MKzh8DriogFop2UxAai6vDhM7zBah3HRPWDWAkUsz3Tq8FjLQwPQ7L14LfjdXMwtm",
  "key5": "49KdyyNUeBdW8GfkbSvVbaHLEhw6bA2NwUcAenW2ethXj7TAQiFXUibjWmNpYdzJEhL8RzBHGtbLDJoeikHWfU7o",
  "key6": "55zNGBksVtSz463dguYUygHcp91CAw1tjpWNXLcVoa3fR651DiWoHtUBxh9ouHD9TDqjmmNDxv5CGrSRabLUq99G",
  "key7": "2dLhNnyNaVegwNmVJfHPZyLdYXr8hZDg4QSPcMjLGFW4fCer5eDxoqMWRvF2x9XJEZ8dftVt6sXSgeMnQgQGsywr",
  "key8": "57YbG9nzWyskfjVWJkKg2A8pCtriXDNFpJFNq6rbp3rpQVCbx41peoBEF99wTndtSquxnYk85iygWftLU4VER5pS",
  "key9": "5uhSmqhipYFSqY4QdgCweefSY9nSpTXUnjphETL7NUnyvomDJrRaWDudgTvHy69QiemUbjj4b3DVZj9XjsJHgMRD",
  "key10": "57iCqMUVocVfD4XrFnd8AtHH31DE3kyMzgeAutqLJdL99XxDcXt3TqxRmFUES9bN1pDmQQ2ygYBzQDa1P9YDHkvJ",
  "key11": "WrQfiPgXBdPV3RvyhabhsaXFzw4a3ASv1TLDE4JqXxEzWUSDN8fsN7qfK1sZ5wQZn8GPYtHBdBkEWLJfdRN91Gk",
  "key12": "3s5vzCdeDj6whmbXF3vJsuHkaRtTBKxmfduRTpbcs8sbcVtcFGZUkcjNxHB9Sf356mqbywg8SPMzxxhrEKJ7gmrt",
  "key13": "gnqGaY2dRhc3UmBsphkY14r24CqR7fy8dbhosHKvrn1gQyfSsP4ZRWKVZmt8VsEMBehRNfEqZkNxJuBmiqL8FFv",
  "key14": "5qYUxhqVEmy8V4buGMGrNobrFpLu5vqWvf743sooT876tRH7RTssErZL4euXzPc7YWQHm9ugNumLh67KUYTC1Zxe",
  "key15": "YpAdy9ssWEuvpSs4zdj3ap7HugSpGunPGio4TsfyEX8nWZPdNhj6UACxiEMxPPvTi4pwPKaoc51XWActB9YQAfv",
  "key16": "46XqMDBTBrypTYsr7sFnUZjNTtE3VC7v4PqEvb4yU3S8uaAFrUo2o8xQLfxCqS5Ljda7X4JeMEFYfCGHzQ6y3Cxo",
  "key17": "58W6Jb66Xu3nu37kZvW7RpRYFfLW4q7KZD57rnxJtLf2BfobGRXQdt4CuoRYhi5k6mnobQjC4jfDRKq6wsnMhumx",
  "key18": "4ZpNsuhfmkSEWLjj8LrQBXeaUQ7mjcHKYq1NKKQz2UcivMpAum7soTbpK34gUzdWRi7y58RJ4v8eVTzX8dcezEQ",
  "key19": "3aBBFQ7rHWTTWcdoG88FPQRhgfxqdJyBCD2qurtn2Kkg4v6StREPo4xQz2kYWusGhP2ba6XuWAiuGipFRVn6qNzP",
  "key20": "5LQzUdN1ay6ee5mX4Qxfp8eCfVH8PUdCT3GSVmVbBGZwirmnYUUEsNdhedekQM4fLEuYrBgG439yVEeVQypv7CS",
  "key21": "3xAkT1VDhqTyBuDU6yw6SuceAKAJJvgAsgK6m1pDdDGqxZ2Ksq21Wy6hbugNczSEnFRQUkyg1nhRh3Ng1yzHMAeS",
  "key22": "2j72CGASi6NGCeChr15pGN7krs35NeZ1732a4iqFTmBtmn5k1evyvttoAFD7rESZzbHStdZTbNF14MiNhCjNuKFZ",
  "key23": "5Sfx4dMg5ePut1bnxjmCE9qs3c3WyyiwgReLXUUjiSngYayuNudF5f5kKQ3TdVCkf5Y1nFqtSxNfxzc87T4Vs9yT",
  "key24": "4jxjqHEiyWpcX9Yiof9jdjVWC7SodCk452pPNhEYZPSmVhtL7rL5MTN8Eq2XXAyLRyaxsDwa49UHo3pCfDK4MaTS",
  "key25": "CjttySFyg1ignQqkKqX6Dmo26x1av72LMPxPQyGSkTGL9aWs8WS6XnGeGr7EhRrUzbqYkEAkejYMoUKkYUZRD4K",
  "key26": "5L4oKNVXwjS7x65uT3ZG1E6ggu4VeAKhPStkKMqahyZZoTfRn6YRVc8EJrxvfSyaNFY2SEvXoYfG4R6QeoGssF6g",
  "key27": "3LTxktGYCbRHsnMKsjCMUcW8XE2oNsjyASpX5BrQrExZR5Vfy3trHYnjLSWZk25vBYueKjntsjXVMpwHHBmva9Vv",
  "key28": "2Rum3QkQKAHaDbLHfrfedvQDaSkT8ZAjBW8MDLMVKb3cBxBE6g6bHwp7TbGpci4gYUe3JXNv62qZqJoZNt4Fxh3y",
  "key29": "3PtSTE18DpEk6HZZW5eQWfhDyRf2tyQJH8bPsexLiMxvXsWuqTrkJyW8EPyFDip2YGVqfeKpK5ToTDaDFDZ5dFCD",
  "key30": "5wRWembrZC6VShjDyXPJSTrVxqHaxUZ5YYsDVWLrCd4FCho5NTpyjMwRZupyg1vskLAULhVhsuEwwSFYAdfdw16Q",
  "key31": "ShWvuszyAz7u3LV924yhHCY7dKAfx1m4htAsthw7Nf2bLanrTS5tFVaQDtiQvsgtMpPUqQx39nuqoazRV4ohMbj",
  "key32": "3hJW5DD9qxv6CfRLLiLjbaSe2FADHXfwe5J6Q3RYo7LqLheBXLVN8zFoHGQpX5LAEtSqxAEAuoshUCa3gXTf6UfY",
  "key33": "4mLhayUfFLqwGvFCFuCyBApJW2LgY7jxU56FWQjPvKKik6PWRDrqQWi2VJLXwprXAqGtvT2MMciyZk3m4VreD47k",
  "key34": "3L2xyXQe1gpy2zYdX4BqhXg19NTsKcHdtP7rPJFCFCiQBdzdNsLjgQ79wGeRCzHoynPJeKKnZKrrYHapBVGHFXW9",
  "key35": "5N6sNxGPbgU4j6fRdhBeXaLqvyGt7DZxSvEdUcviR5GgwnZz9soykZQaR2jLRmUMtrPonJ1DacaPaSC8rHDbhbiX",
  "key36": "5NegEDYS7Sg75BTfA9EUQPJDX6ahnZCV2zZ6mwGEpGrj8qaVCaiyBRPA8Y58DsvjywXTMbPU4toomCizBfTUqPCS",
  "key37": "4bGpKbAgrG29Z9ErQGRyLeTemmSxo7RA84UkcUdxbmMKLcVbbGJsbCi1g3Gsct9jS8Dk43BCuVM3PAep9qqenhJe",
  "key38": "3tQM2WBAKTQtgu3sw5bqtRJMGpmQWtKHCTsrdMiMTjin89AuS865YKaABwp2ZUtquhpErLEh3CSiAKnwNcozMLin",
  "key39": "3eE9xBVLqsyo5efqmUwCRWYE1CK6UQTpC5iQwTW7UnCuJCW9UB46euLkAdkXciLwiGrUTL4myALyxdtkE2fKz2Dp",
  "key40": "4n3PVSVifDH9GHEhoxBUQrY1FbDCB6hjJd45RUgk3kCPioAwbNgykEoo9V54ShmtsiT6k24JgwgnrZ7s2Vsj5ZLK",
  "key41": "2ZitMPbGvieQKqTxdbYawVrMf3shzQq7Y9bnFQBds9K1FpSiiyFvQXUiTxgj1Hg5Bbdx8x2pvXfmhVE7V7ht7GSY",
  "key42": "5FFd9ZeJDLtcMsvuJoyQEt4XFoRnL4CVVDr6eHLRb9EbqvoGispVgFHJFMcPUhzpxNa4MMqazguhbBmpUFQz7tR7",
  "key43": "4V4AQAUaxSrhtBxc7FvJwWXFEe4adHNupNVJUtXm1qB7D4wg8mz1rZEetXm9up6EyHjJL7tgp18BnegavH9oD9N1",
  "key44": "4GjT8PAayTDSkVUGxJVFf4Tn8nd6ogmWuwmv8zrkq9KYLjBw873pvDTh9AbvijsmLvH8rU1gPJjM2RiATV8BMvvE",
  "key45": "46New2kzFpBzHB6EkPJmsNEfRBTdaSPzMYmBCe2WjBppy75A3USP1t1YTUag5xEmf1zSmnupfsR8AGabKmPvDw7W",
  "key46": "5w616C4URPJB89Fb6ckhB9gKCPW1ZWgmJqYxyvD2LRAFv9634XrSh9kkXnufwKAL4cXkjFhGefYtp6sLLVC9KTSN"
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
