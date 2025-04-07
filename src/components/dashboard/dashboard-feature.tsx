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
    "5HbbPYRC8WxwjbvirQwisF24Nw4cEoCGqnzJN6s1LUVAgUq68jv1kFKogHVaS915m1KYvZT3fGV2vojuzmpwwZor"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FDTzQoHMPX1P1p5Ey5aAbB2hmqK1Dx7ae3LdbnHHxf7BYcbcB4hojXEfg9KdM86uYRkTnKvafxtRYhcadEGCu2Y",
  "key1": "2fPf3wC3Kq1cZSQkCaQgdwjPjjRmbx4ksnaQzynksyMENGCvaponsi9XRwQKBuswJmMshHxdkFbPa9wJgriWsgZU",
  "key2": "47UnbYMsXHWRJRZPmZ69W4mcVkEkTzH4pmDpcVteXCeLjj7jr9jij4YqPYog3vyd9ASia15vz1NLerUPMAe9pVTp",
  "key3": "uCw3h52GNGjkoH2hJt597ZcbyAfrzsKLrv9Ua4puGaNeKyhomVen5mTqbkccPY6AL8ybdB9KREeT4osQzsjCe4r",
  "key4": "4L569zdjtxYTt1Fvj73isxnVN4jfM9iAsFVCC8RM1o4sWqMpJjqpsgFufXk2zMzrJxi97iZT3hPkxJPT5LbPmZrP",
  "key5": "vv8SFPwXpCzoiGt1pvqWcHR2qZoEfR8Nw61twfCyVL2yJpxfxt4ToaLLx3DWTbdrfUzabUJEWAx3R3bYqdpWsdj",
  "key6": "BS7RwFsPX5iMnhMGwj4JXo4pjKyJ1LqPQ7tufyqK7WyJdCaSRBTiEfLPvwRPYN1ge976ocjbYwhrfJmZcshAQ8b",
  "key7": "3wdSnJG4hgJ53gNUFyu7krTESqfyrFxoXCbfPvaSbTrXUAofhQLcmqGPDGRZTmWRg3LViCfHRaPRLgNn3r6iWe5H",
  "key8": "3SfvpBhqxfNvQstqkiwbopeLHjFQTvNZm4xyDdhJsuyzRFLWDywcW5z1NQNNSFZ7tJw9q1a3ubW9vQ2d3cN7TuWH",
  "key9": "2B63mjS9yKHD5QJRSP7fehTfyTBzX22HJsTnPyXQsYQ1rd4BMKDraaAoCinwKiXr2RyEXRFaiVRAeoBy5vfGYuwj",
  "key10": "4vtpRLKwMsf5BYTQQ5n9yuHUKwop9LmRhMAJRaSrwHNtfbcvQBmpZ3qX4cfwNTmMM6Wd4SZ6M94HXKvZpf8tZU6e",
  "key11": "FT56zGXsDJbji45VKY56QQ91VWh1mhJhkdT4kKfWYHmQyVnbYgyC83KNL88njKWxzorHhxxRX3judfedMW5zrZF",
  "key12": "2ZorJn1r2RSUq9J2CnFLJpA1egyFQJHRHLsmFpnyHcqiW8g85RyGtenjyjR6uiChgTuzndmTibeCVoVA3PKVXqNf",
  "key13": "fnQwkJZFC8wRyPrbMGbjRFEAZVjPsFQcX1Mad2F8Jq5U3vuYwzYaWmm4h1tiahhECQyecQo8in4SMwYuyjud1ku",
  "key14": "3XDvyrQGJ74mscg5YhwsBm1hL9XPTiGr5hXvxuH1tMxkWJ4VKdXoCrNjyaXcMWScrVcPEk6bNFp2epwmXKWzgeLL",
  "key15": "3gJRwxTmD81ofPFz9XrgXY95dUs3U7h6HnCKA2SsiJotEk9mMCpwagpeZXsFm9rTMywYtqw5v4oC81Z9N7vLB8kz",
  "key16": "4AEfDgCFHTxaHTYyKqjiLN2bBJuYZykmxUuPiccyZnmBjcki4Hewq5RUtPtuV7jq1KFvAfFpWHS3474TDVo5WnHp",
  "key17": "A9BaR9h8cP1CAk6kMDtCin6A4fX12aR64Et96XDw15iSof3EjSfktQ2HVnAuPLtGssKmpW2Rfgt5KPR5mxzfje4",
  "key18": "51V5TwxPV9f2kT9TUATrW3MNcYcZbkooPtFjdns3kKVHNQqwUrShDVvEk7wo2aSQJnvbwAbHjb7Mdmj1jXUCXkXB",
  "key19": "22eaMw3jRww5ZgwcyPS9HA6Pdgvd93o9nxVug8iYJu3tFaFPcqTAWbJaXbvN9hd4ShNeJtDWGLduXXmAu26VSRu3",
  "key20": "5oGyLpdYm494L35EAymbaYKLCamiy994A8isxyUEQfTZkfYsXYiFVy7kZoSVGwkq7mP2bMq67aBqsfQwvf5kHU6E",
  "key21": "56rhGPidgNHYibLbErDj8D4yZtGeSVXkNRARfpfdwB94FQPNjvNtCkZFu7WSXsSGmaJgSYBexs5xj6Dw9AhMMe1N",
  "key22": "2MQnZKCt9cfjfVTNX5xTNQbUB4vLLAo2RzUKcQYwJy7gy8J9fNWZHKzGscjDGzpf1EsWdKMrW8untXLiHVAQH5PY",
  "key23": "5A5SFgE7G4WoxEBBq1sgjgZjp7kFZWPmizS2XcswxdM4LoKuRnjAXDRfUg7rbVnzp6YNppjys6yQZGVu48NELQGF",
  "key24": "5vstjqzktHQEDoLvwyPY6Snu2CV5osp7gR3b53VnVLRbXnueU2nQL3B89zzbe1orGGL1bgmrqshSa3NsNpEtdoMZ",
  "key25": "5qLnRVUthFCiGwXLRN5bmzx1pMXFTdwNkpkQTfty18aSNPPQfeepJWhXiTzdQBWbXmoMzg2eWxWY9VXLVHzyNr6T",
  "key26": "5Wm6L1VgQpqpEJix6EyP2W4DaZeAngBoZEP7hFo25degfq5RDHohkzjx3nJGbgLKWuWNj5UxnhGKFGBfdXzeqzNY",
  "key27": "5FaiBpDNi6AvyQDqRCZvFFDRXUSmQm3rJV9sW2se8SHC6mPZ6FHdQTtGY1W7mY4qFvx3QqFhJbh2gqmQz8CCd68g",
  "key28": "3ZJBD2oNgwNAyraaaLw6GvdGB1zHYwzzhY8rF13ssSXq3ET1JTKKkNSb5m7cRp5fWaMUN6qa72N7JKs7tKJm8K7g",
  "key29": "9CYDg5aF9Xsh6dbsWVptbZQ2rEtwEguWooZiiEeLWVjXhZfom6RvxtjMpzewsWCKR9jRKh2u9EPcfwvhF1nTzjB",
  "key30": "5Jq1mG1enhKCQt54TntYAcNfBsQmNzbnaa3tKJjGkA9Jza6N3r7GcEqyoqsjBi9KJy48RUTW4DDCQxSw5Aw2U8g1",
  "key31": "2jtotNRGjh3RnSP2XAV7beLr9JKZxxK9e5TF6Z1p7AoA7QhQwHrUk5Cnob4iJUwT78mX2CuAXvgt9TZxXABSJfUY",
  "key32": "49V1A5BYYtRJEhA2kETAEHxBuwWk5QtxMb3SCm5KVocyANEmhTX6fsVsPmjPXWB6cwnjJawauHUKpn6R2JgsRx6U",
  "key33": "RDvqo5SfDSB4URQrRQkWsutnY6dfQ4LHydnoGidTdBzuXPFK1HpTjN3whCXkF78ETTpAC4PZYiUMSxoiXaht9mT",
  "key34": "3rvoWrxtqFgeaRRMng5FuCsMLbAYhsjgcSf3ycMhG6Vooah9HAFxE5xMxMDobVvwU5m1nFpoLW8RxhdiRacb7ZNX",
  "key35": "Jzxy98TCC3WHgtzYPcCTNAc7Ep3F39SPL8bByncUR3bms7r43hyvXWmqaJrWWLVnk6RbrVAjYYrdPjqCkzA7Hp7",
  "key36": "5T6xbVScr6EzM6ii7jJZ4UyYNEVaXXyo9EGmMLpXiqkKVpjYqJX5SEhJTuN7jdv2UHw6fvSCu4iPtdgYGgHpeJeN",
  "key37": "34RkQJAG15SYrx2Uhf7vJDZxMh2HFyNYDnxaphyxQKeMwhGd8RqAbmwGWsEESpfMENzb4WUcJAKE5aG2h7xeWTKo",
  "key38": "5KUcPw9wLLMRsJYN4eD8jUdknAfTg2bJtxUSxc3RGoSYBL6T5FnMEudwFmvHzeDVdsoDEQEsUtk48YhCqek8UaEF",
  "key39": "5zATNAiuuCRKosNSCjLdjNVPBr2A6pnPoQXVJ4e6CvmgNbqysSdkeLb9EqCvLj3Hxuh4QtfYz3bkgr9KEwp4TZ7U",
  "key40": "3oPM6rtw1zBnZxfLpeZNEx4AndAk16cb44yBhdWQ2J2vceohYbjiiUA4FNAunnznHcihhFH31YrvY3mXbRrBd94b",
  "key41": "2Vnu5Dc15XopyBZQBR4VxNcTZzL6yWYZ7LiRcfPk7imKm7HaCVe1i6aH2uHiwf4jFxSDhopyVjqSqLRu1B1NATVg",
  "key42": "2hfDAmcMaTeL9ub5AcEY4VMUDbfUSSWb7GY16Lq9TWYf3Sm71eC8SFz4f8jfjR4o6wqyDa2XJPBXfhqHwjeoHSDK",
  "key43": "3RZCrCUdVmZbmGrbp44KXQKRkf3HzEMWb75ae7MeQRfoS9y6T43jg72W1PhXpa4sKMeoVdNchsN8HDYK4tTcfdGR",
  "key44": "MWzq5Cuu8cQkNnCY4mWvDYoJFtRskpNKFwosM7d8b14sB6FQuxEW88ZZ9iZe6ExA8jcK5HkkKLPax5kLQj7Xxuu",
  "key45": "t4ttgKXvpMXAHXb554ZBnX2QH4mNrBj8y57TFAc6BSF3nxHkwQAp4zwFwzpSudykGtfxc3wQHm2XoUgmDS5CH4K"
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
