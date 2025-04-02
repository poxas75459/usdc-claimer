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
    "5kowzFqHnfTn85toPzMwJLpenNfUBKnFkPLm6sPB8gH6nP9YhNJ2M1YF4iK6AN9yAxph1iXSMLpB7QBQBtvWjdBt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52hgC6G9xkGiTkhvsnZaw3CCk1BCo4Bj1WAqLvVR6wp419waMKBQPhZBt8FHEVsJqbRk2vCWo7CHwNJcDf31AuoL",
  "key1": "4tfzSqF6mQdw1ujirsXKM6hdKnPM7jiccH7Ztr49QNXBcPf7PWuKbHk5RMsmmwib7b5Ja5GZDEXhmLR9SQckMU1J",
  "key2": "2s61qR6taRne894tpPYpuBi8irTmUPFUvyvxhgYy9ohXUzjDuhRD6vQ59J1kHvzUnQDRmV462SrKk8qUeL5ADjo2",
  "key3": "LYsLVHmNh3nyCu97XDUT31ViPcPX1YxHH2qYM2Nj1dsk7jCdrLycKHmeD5mocuwriaXN2QDWMKibvLa5JGxKzx2",
  "key4": "4pCVmuNUjy8wUMx47j5L3sghGc26JNGNukW7QbRzE69tpDL44uC8pJAFFgxA6qqfhfuMYqvGaLWYLcvJb1v383gZ",
  "key5": "5jKNYDFVAEwJmwku2n5mgvrwssDDNe1DJQhwLqq1JQ1Mi3ZVU9DtJCyb44Xih1bNNLSPTjwA5zNWnzLCiyRyqBLJ",
  "key6": "3qhAj3D8mEAcro8RmG1H15FUPhykoghDGad4KE4da4qSLArYVQjyTRW5cWh8BA7pH4VH2B7Y2tvao7C5cqu6qnCa",
  "key7": "44MombgPrpqKAvPWskEJER1L3bX26gwgdFisHD9hPLZrV4AmSAUEZt94AooKmHqHvHrDA3yBZ6FmEb4PojYucgi7",
  "key8": "BXJpsD1QAQJytq3FuTitmof4d4yp6VxHhwDdEew6hD9KQViDBM9xCWvFs8Wd49cnULoj8XpqTmKgiKSVsV6wdZr",
  "key9": "zZxvsLFqy33RpMw9Nqzg7tXoaxXnnCitPVbCG52dgH9haWr2nqezJLDfGH6X1hdyQQF2M47sX6TRGEBmutnNRBk",
  "key10": "RDeRyNktLraJW5DrCi7H1rkjwveS93xvZy1q1Ms8j4mo6Cb1dBn8f4ymtWpTwzu3dLYW2YaCtj6GB4sZD13C595",
  "key11": "5YdFDWhrc46cBUu4RpQQhFEwkGBgiutgAUvM1GZCaytjAMyT6NvJDeq2DsGek7EauUBW5sXDtKCiMHBqUPQ8kgho",
  "key12": "3vwn4xqnQUYnxMCqLVdG3R9KKQ893a7oXVi2XEFQd5Waizs3mNnqfzJPoH8g9GBNQr6BGzc8CCMEeydptxGE3uMG",
  "key13": "5AjqHmVnvzc5LbrXj9gfxRMNwDPdhqL1f7y3BkTFehsSHUtohSTs7wm5nDzLH4q8r2YuDXahWM4ogCeMaa2FXCsT",
  "key14": "kWNH1sxnifsapBUFr9TWciGZqqgqEtNVXSuZ5k4UvUiakocztKiJT4QkXHFCf1HnCt5iZAicv7Ed2ynqktkYZdM",
  "key15": "5tARL6Qztcw3VCCoTM286V7oa55YXMmUcTJpcduWWthKvs3isGDBNhCYH94Jw634zxZ9htQftn9Zb1HPzwENgTyG",
  "key16": "4DHvdKbqnK817WFThE5uExdLACFx3doy1ZRksb3kekGATVsAPfYoFV3z39StnpGS8r2PCFt2ZZi26TZdn1sUu7PK",
  "key17": "4jWkCiEY7qndvrU1cu58JLXtJcje2knerefSzshXsUHmdKeCtk19ZkUs9P5aVLxcg2kqSyNTATiu8aUeS9tsZHLi",
  "key18": "ksKK9awofaN6yjNfUny47X5uyLm2sRCtvVJni3QX5vkBL9piyzFdu4UkGYTkV3fNAtcrYYhR5KnLVQUF99FW1jB",
  "key19": "3FaYH8KfRfhfKUHhhMwMoXufGRqe75BGqGKMogn7LTcbCYmaWZPha5ziF5tjKKRkQR5u2MY8rUgJXVoN8VuLvGGo",
  "key20": "TVknmiEcSNmBMZix13v5x6KNK8sV58GpXhKjF7fRuWZXggos3X83Gp6UPXJuYpsJqZG4PzdBHkwNcKrr5rXemW1",
  "key21": "4dSy18y9aqn8ZrY6pWPf8XfgDEgwKJEPCCKQovwRVNUPgaMtMSdFHpmWpWnuNyvjbtN3hqPRTryeiTouwTsWdpcx",
  "key22": "3VxDMpuK5oDmJyx9QsoyGEQWtNrb8kC3qrkUgYtqTxRNh79ZVasYy2mDrhL8rXUHzVVj6it3VLRy4b1ejfUMNZ4A",
  "key23": "46KKLWBezAjqatu3C4fAVT6hFZKrH9yh7RzQGWnrbTzb7RinH6S8TxHo6weLpwSTkuXJyDf36rrnUomdRVs5QZrm",
  "key24": "5PoY7TNKtkupW5bKWAnzPstkBoGqTXCWXU9Kj4KfzBxWZLdGRUtzjQHm97WheyoMQvid9Key99esVRYHumRQGNwM",
  "key25": "3Dn8esCeR9revDERitZgdPmJgthjRQ7XMqjcUk1kEJLpb4eax4JuK1ryLntuDEMo2o7ePgqPGTWYF8ik4o2DGwXo",
  "key26": "3jQKBWxz9rYpsSeFJuyKXVxhKaXEWF32oyjcUER16Gi79RdcMrzMGicZFN3RwZMeGSXXLq33boxtLQfKmhKShQZ8",
  "key27": "4hVv9nFEeFaLb3ZpiRnDU8sQaMQ2P8EGribocR4TKmweaYLmy9MccnMiHPpGm2TbeidniTpgapEuWA665p6GKkD2",
  "key28": "56uNQVegznQU2ybMoV87NXYNikB72Sug9B7jjvbcXZuwhRv88c5PFMRqwvRpTj32RsQsA9SnX21tYanijGieteyp",
  "key29": "4B6HFrtMkJhpFEfQt9wNXmFHv5bCti8sWXhuWo1CkpmXH3JxDxCqthN2WV2M3AEQwM8LFg3yC5A6KKGDmDShzSgw",
  "key30": "5VfQwucPQVcr4C6FoV4yV9hwtUaRZHn9K9hU2pjNDgWUd4KeksdzhDcLrnBs7pobjKLWAKJwThyQhR4xPfDzzUxo",
  "key31": "5tpMigGAK5LaRqdKZPNb4RSi3auWEa8b4snSv3MnmjZMkt6vNE17r4gwiiJxkzSHmN57stk5cKYbaPAgia1Vk5q3",
  "key32": "3Gsodww6R9De1CurvZDEC4rS1cPZSAz44fe2y8AvSvoq2khq8jP5c7uqX3GQJ4KovR9FCSatUaaVwgdb6ZdfvsTE",
  "key33": "4mpVyPBtZNCPFxCwxNLhvpZhLRkkN3A6tEVbyTNerQNtAbPUbHxpNSutvWQQ7SEcX48HarhxybHgJghjqH9Nt26K",
  "key34": "4D9TNH8NaGNXzQPeX4dUBk8WsaHxDNQePuhAGB6sDwVSV1i8sGHxPtxeFp6FPKkjPvuFjVDsinqexxJYi7YUfWny",
  "key35": "3FAeup4mrtHXoNxb49sCvvuwS29pmvFqARD5ByRKDQ92rFn2bYRFCwwTyQncWGBEFREQVq1EWVRvYc31L1E5gvjA",
  "key36": "629aHuHK1DETJK8o3FcwHALxdjpYV6KDS42o4RNBJ3PGNUdBmVUkEZR2GVd7ENTxA3G7oYiaHw7YUp9jsU4ezQVX"
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
