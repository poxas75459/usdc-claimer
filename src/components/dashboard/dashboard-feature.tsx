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
    "5sR6oS3SBXseFcmDLY5t7mXRXQLgKRwawEbcR8FrPh3NEoCZ5TLRsYQsCGBQKhzXw7Fqvh7AMuxxDW5WDSYb6mCi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52ptfEy4UHb3G11ufbiqk2RzWqcbt1uRXCWbhZJ8wJrMLU7FtrSYWZafuZeBLRJnfrh2Hsv6akdQ1edeAnnYewZi",
  "key1": "qwAj1iZL1H8dBwgs7DjyekJy2JosuBDSGY4Dmm1jArqNC1fQJYUjyZLbBdvbQHGR3fKwwtHWWESYbcs2uxPhTBh",
  "key2": "29X5TJWXyP2HLruAKaAq82owZ53BWx9w8MJQJfzhxY8qe5HH4zJWEuQxjN3s2QByrYyWT8Y8wnTcqz7oC1Fcfvwj",
  "key3": "XacrAdvYDrwo8zDpz2dEHQudogVyhZQgfJUBV7KQH51cB9dqRtMZvhk1yCRHNz7Etqj1XkN1wYKYUyLRzczKNjD",
  "key4": "gXT75cbFNYKRfdDDENowRL7AFwEFQd24CPye11KLi71tXfYnReRXSRgSTNqhULtXZFaE4WzTHywTkKCUF5y8byd",
  "key5": "5Njo1KdUwt2yeR5EMsCmpfeCCM4VEkrc8QBme2rEYVhvN5zXGHqpEJL3mp7jdApEE8yGf6boXtEW9ZPGRraNQPLd",
  "key6": "XqL93bX8HTDtGtjWuL6iRFvA5KfdaBEPBJnqEcQ7yQLTmpAmFDEYTnV6qXNr32mRTVSMZxBuYYYx36eZrTLj1pT",
  "key7": "3tXaUWHSvKGYuhVrpYPC7GCrcpUt5naA3bqkN4N2Cqq73nEZQqYdFYF7n9W5EUWrza1DKuMr2uz7gfMFWobtvUFB",
  "key8": "3QwLf4YHprS2sKmer6VMtNPxDGbNYZ1rKpbifANZgvL8L2PuLfbd62CtYXoSNVg5RmrY1QZGFqWfBrVc2ywNpDfg",
  "key9": "5BLoH9ai2jfM5Koz6CcGANEnGGvqYjGs2Bcd1WLrLAY6WbxFtKoTwoeonFQGRLmzSMW9j1HF8o1MirFq1YXCYuy9",
  "key10": "2TQpTSYj7Q6M5iBsRtrbS6erKtJcwkGyaqdeTAuAAVFbt5MKrmpz4ASAaA4Ws1jMM9T8EKzfiCVMnbT3vCWqXMR8",
  "key11": "2kEz7ZjQqJ9YUbCPkKZLd3LVpt12saSfbajPiqSW4X1rrBptGRa1BVTXbVVnLufsH4S29X116PNAMR8eC7NLwMXp",
  "key12": "5oBpeAjJK5cjMtc4L7Mwtfs65RSeyQUX78oUCi4JYmS8SSBtusSXBVDp6XMRMZRB4hCWgRnSCt8JsAM1mu1NoL5N",
  "key13": "5JGqjC54jaTkfeHcTiDMfVeE8UFYrazqiUYMHHhXbit2zbLdowLeYVZJxLurikBmjHFDDRCRMSFmbYgw5u9ovLD7",
  "key14": "5xLroHF7pTRk6mmAvfUogAjv5hY2DiYCpr39qVikmC1sNm5ebWpHVqsBk8sPTdQrU8eYDaWu9pG4CvfwwkX32vT6",
  "key15": "3XWNVQ6r2T2LmyxFnUh4P2SMMS6hDNBhAbRhXyTcfyUvTDJVMxkod66Sg5HRLTrUeJv3ZYLD3m472mnSQ4FVHP3o",
  "key16": "44EvTzXmSvxzyf7hjuK4rrrVuzykNHbbzH2qfTKLGDwru9Xn9iSJsey94NxXCUukqMxMpbwTF6Sd714WYDZ8Wzpe",
  "key17": "3sfqXWNEL2ybb5MeCWwNS5YFhmQzT9eVvM9XYiaE7qnzSzbbdtEJYahBGJDoHohpconPk79fQtao3ptwVzRiU5SW",
  "key18": "6r84uVL62bdTAngGmhhRMurAfgz87JvEUC1vEtjsPhz6npJKesF6zoLjX9nY1pFR6xu3P7PhYhVPVKixa1bRGcR",
  "key19": "V3MYRrX7kZAn33YrZjNwPdo3pPgc6xSw5JPXqSWvMsidu8co1wcwPwX2H8xCDY8HWoun8Do9mk7H9MobDXyByph",
  "key20": "4NhPWHpJjNSEWkfiK5n3J344bA8gDZTiSkBrU3MUHYpujkbYhaZkUFvbsF1Rw48J57omisfnAW2DxiYdtToXKZWD",
  "key21": "2ChnTmWuqigSt1tbGwdHGRWzuzyemqEKyEk7iFvGbEfMGS9uSkxjPu5Z4yP6TFFDiT1WFm7qnuGsA75EDCxr7dX",
  "key22": "4USvqfknqauK3N9AhMeLXrXQkss5LRNTLP9TXCMuoEELArvgs4pR8PSXXiTQb6g95B5rgSekjDYoWiwtYxiFkWVj",
  "key23": "NzPvDoyzxJ2QpSYbEz8cNYV28mcQJXN5cEpt841vHhpqfTHzkbwhhnro2WneE8LsWd9oFU2iYGtthLDngC8SvJS",
  "key24": "5dUGwq5epSGp8TTh47kaEvTtqZNwk7yASa1YvArcQ4UKSWSrTxhxtQaKN1NYTBnpXS2XGS4FcEweafjGmpKimBwg",
  "key25": "3MaFZNrrm2X8AimrrAyEGnJKWiGuwqQuMazkYCfEqcHfnga5H9rQE8z9wkPuKgkLEeskGMqe3cL9NEVXAtGeMyyR",
  "key26": "3qsknSxnh1w14TDoJRMikhdCLXSLJA2jarc9rUdUMoZKmPExP4PRn8NdsCYqDhr8uXBPS2nVpz1vjYapLX837hTu",
  "key27": "6N68MNaK8Ld3jtMrYk8A8afbHYHGAbMHfHaXnvQ1UU8CaHXMrMXxLJLsjF3YPH9TKU9zbfT1tortvnsyrqEZZB5",
  "key28": "UdMXdXLVXVRcBNfyKrNPMZsS7yKuBwYKMtJ4g1h1nXy1Qxtftgw7K4ix5n7gjTTMxn7kAtj7WdkEGxUygVTG3iS",
  "key29": "2vPze3Rf25kmYneKn9SLBN2oVE3G8mWeB6uC3DPJyR16Prtaje62LExAnRF4MZrZL9K7s6gjnXL78WmUSAwSRKf7",
  "key30": "5gH7ig3sre8pQz1PCstR4zEEq6FLdWiSVvmN6Bix9ye3JsYTKE1fzEMthBwJdGnCZvV4rcfMWFC5EFtNqgjSDG57",
  "key31": "2TmBkgQ4WZpDn6wagoNgJmU3Yf6cRxmqSFucmGV7P2uhHhXudJZf8y7msWzdPcsv6oEjetv48AqiX4H76jkntwbU",
  "key32": "4VmBDPy6c63HgWtSYqWjw9nu8ukj8k4ZTNNvCPHccXsee23WK4wkB2aSpFM11dFF2tcFFhKj6q8eNjrTMKMCVgp1",
  "key33": "4ib738Z1kwXR8U4QJcffSrU2pFjc8wXhu988WnRPXbVvY6t9XLqf9oDf8LSDmzyx5w8E17RAA5SxNh6vJHj7kmvW",
  "key34": "2uJCfuXBF2XeLj288c5ztVgL9qPf13fgRmaKFiUiLzVHJPsq13iZuiVwsLKHZpXxoR9xwSgB4LsTTyg4PWNztmS9",
  "key35": "3tYWPgHnWs7U9cT1NSreYY7zaPv8Yzj67GssAcQg6e1EzeB4TJTUAQ5UcMuTDcBi1ysPv2sSERJmQkq5oGi7tYRw",
  "key36": "KprgXXNP4QeZ1AupXc3bRumV5jSdCuCbVqyobkVqDMzeA2jGMw6vFuDoM4NXqba4wfVhHLwqEHP4nDFnQJdKgwK",
  "key37": "4Ufo3jXzbvgrXoK4bPnGDSWmb95QvajG3TJ2bD7S9rVXqZH2AR5kgagFPvsoribZ7QUEEQiTGjFMLhYUkyaTyF3H",
  "key38": "GKC118hKaEZdStpynjtYVZcj4fw2qDF5naZeRFTybtmH1VLQ3wxqLQWk78nH1puyfXrbCNwRXYEgQotoirgVfsU",
  "key39": "3cCgoU8Z7292Y5Wgz9Zg223y8TC1qr9rVComz5UMbtLNTjL6UdMqfYCxUpxHJXJ8r66K73Ty3C4fShRde4C377P6",
  "key40": "4vHtX94vSXJD9F7K7hsQnuRVr3toQBxvDf3zSQh4Edw3JnrRkfyvR2SutuPrWYPaMuLsW4FuGaBEGKwRAY7r83HY",
  "key41": "rjnA4nv1FMgyK2SHXSvSHd22LDF6UKHnxFPKAJ7szvwkxF6z8ibHRy4RwzX7WGoyufXju6WV6hdv67ko75Hwqk8",
  "key42": "3247MMRPZznF7rr1FZEV8ks1yPbFh8ULz59MPtXU59MhwURMALd3dUqNqo6MMw5poq18QfixWcBxWRcWUy4JED6g",
  "key43": "smvUR5dpQcoFvT7L6D285FuHs2vvhEtTM7tdrbEkbpwr5dY27BGNDDzumJP5wXAHhBVFTcB1EzuUb7mVkVk4p9Q",
  "key44": "3ptueYqg8upiFAP9FZ8VvKMsjQ12Usz24aWjm89wYxbCxLws9tTiAicGgFJuGWYLX6tVgLWXbPN4sgcBxvCv2K1R",
  "key45": "2CDBSMe2MfEQS47Zu21dHN4N3HZkCey5YrqE3jc9kopKQWLKiw2Af1wDbo7i9YZtzmGNWZwHAUPUQ1qYxj6jwg2r",
  "key46": "4FnQWXdfXWArJL8y4Coa4XW9Y23wbspFrC6tTbigXmm28WXjyDXEb7FgmMc98TgLH9p9KB7yjcdojWkinNkPdjS5"
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
