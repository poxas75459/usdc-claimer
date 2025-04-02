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
    "3fnwrvSC53H3u5xumiuVHqpHy7wakFkqy4hiazimGUqnVfmwNd7oydnuaZLABfr1XuKCh8QxNhpTq2dLbJXxmm7v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GV6w4DV3gwuBZTjy4yLNLJb7czbpM4pypSa9YNZjATVm54sbfMYHVFn5ygioQe86xizgEBJzS15YKaVutpm3T63",
  "key1": "n9HWwyB47eWV2B2aDR6GnnksZysunqiNNRTQ1Zb8n7dtNuaPGGJTYrT1mNzmfSmnY52SmKVVYtktArt7FM7ZszW",
  "key2": "4SQcte5HBCJsyuY1HRNGWDbknpXWJE8NnaHSW7DjEKxNWNKHkDR949t8uShXgsngzwbPCptNsMwdDbdq7KwmDXfn",
  "key3": "4Hudma79Gn1aUd2gVR4pGrEu7c6LDygJp97WaGbuL84WPJTRrdPxMXUo8zSmsf6XXun4KcTG2Y5MjM5Lg9TGje5b",
  "key4": "4x5ppeGD4UP4XjHBbkQc5xCPtHmt3WXkSjyQS2HRZuLrpCtEG4t9JPDk4KRspm3xmc79u5dTL9qHVWYNt9wnGT8H",
  "key5": "3djNjAjhvUd9gTcBtsqHdtZ6rc9Ycx1mgu84KjbXpZXfvMAsLrW5hd3zk3Rt2wn1hJJtZWcwFSXVcT4kVB4huwk9",
  "key6": "3JukFnELwf52TBdBXaMrR6EeB75RwrSi3JZpjX8caZYauTEyACB3jmotwvBgc6jJEGaX8JMyFbvPHG3CZpKrLZZk",
  "key7": "49KSptJ28hNkZX2W8Zs8W6ZGRCmcbc6xuuRCuShQvY6Fts2K6qSjTGsz2hfEg8bL3GTpNmBrmniRy6S8Wi56iUVj",
  "key8": "3du7Nu4XoEvyVaTeJ1KZ19hoPDcfpSS5jbHbTuAFchxr6HDMDwoPVSPCHAqD3FvNnHYtkpXsSKyvrCPnyxgpy7ih",
  "key9": "3gF1RRttBL5ogVyeKVbvgWaNBgmkdx3nxzF6hiY8aBgzFfzqXAExPveghZQjsJtTNgk9CsJpNURejgNMNGndrUpV",
  "key10": "2RdssjXkZmv88d1otfWUuPMzveMTt1P4M7sCD4ZCNguJdj1QeMbJqdshKZJZbhNG3QhjpN4mFwVZaP7uZqYeiRdU",
  "key11": "rD7MRfuhxzVEHRHp7ZJsiVXD4Roesbec9hUZ6Qi42ieXF96pP9J3BDJq2CRHgCrwiRjSx8LJRqbPb9s5zQiGB7S",
  "key12": "5Nq4KKZHESHuujyBT8nTV4YwwA4jgNoTMYMZe9sveB9saVUA4e8ozTQQ2EWicvVo6MxX8rLo6eZZ31j2vuzvgej1",
  "key13": "4yFM9F8imHLQy5SniyvNizXoyxfzZow54Y84hiJzEpkVDfCRqeQ1tU3qoCA7vt1MV9fjRYFSAdzBiExhB41dp2Bf",
  "key14": "BWd1jyUUHS4AatchZfyfpUyqcV7LYyydGxxdu1mh2aFVVbDwd5vruW3B437diXNJW8xyHUAYrbZqcHEeEo2dFiL",
  "key15": "2dbXKYWHBVRLNH4qLGpc3im23enCPqsmVzQbmFmJPnSy3CVe9pa4VQoBMQGqYriAEna1Hsf1WqCzynmM4NyJBPDJ",
  "key16": "aAmfMBcSmX8qs6p9wCNz3g1GTebq3YetjRFbzUhNiQp7YxL88nKfDeHoBwa7gG2jGR6BB3D4FKJP9RU71GqcLK8",
  "key17": "2h4AiKA72nuokyBW9sXXyDVjxmrUE6YM4hRUqfBECqk2zdCTPm8onqMGUZyWqA6cMMNPvChp4pLd9yYiWWMZcN5m",
  "key18": "9C9crBBYrdAvbJzANXH2BRhnUrNUNgELPR92uTZy8tw4E239WcPvuobNajXwcEerZFCSBCFLtt9TNqcj9qCwceU",
  "key19": "2A5EbvydYcKSatRzvnxtnZ8E5ATSwMTvuZbJt3HGQGvbmDGjprHYtx44R6q4UKGmsppVnNtCVbVJUWzTk7ekdtp6",
  "key20": "2C9VSMBbF1vUgJQ27C14n2nJPtY7wq9K3BPTJqw3Gh4u6VeYeZT8Mrj3PZ1CUjeUhV3Nyj8uksBJkXryVcHpXKXc",
  "key21": "3dkwDJMDgVbt6c5Q8NMs1HSprYvUjhHtVtv1cn9k5yAQ8HqJP4iX22Z6ADhzh41u5tcwqaqGLkSTg4duv2RUMeqC",
  "key22": "5GtJaahop7Z75x2QturJ91Xq7XWqsn75Uc2A3mePvUCJHuCrRLwk6YT6tiTEMv3WAzdxYhs65ZpZAauaTpce6UcT",
  "key23": "3njWts8McFm1SaEfWvNBAoAdCeSxRNwtfGTZVQvXF6tywLfwzBxzzjKcfr8dCm6LZnFsHYQg7BAzf2oTf1kraoej",
  "key24": "422HJ6ZRptAifKHkEkBzDvj96eyy5EDKsG2dwQFJpUTXKgzJM5xBdddJuqqhauvCZqoePvMAvQrUY1PE8DSXgtDG",
  "key25": "fcFumobTkVCg69NcKWCnF34sCocDJDN8G3eBfC8uLmFLCXgkyz7MtkLBRSja7VX1WX3xix1NPGy6PFMZ1PUyuMc",
  "key26": "2hKzdrBAdNLZGWryMP2Nik7Kgw8NYKqMpaujLBZogtoHcDzK2TaAYaswtoKXPBfvvasGmLDafmjoH4ULuvggX7uU",
  "key27": "5xzdATRKXsxuEnsPAf74SGJ75Bru3hwjiGytdpwXS1Qdz4hgCBQgoFDVTL3YYDkiFXxMCw2qY2XPKMXDF7W2UKsA",
  "key28": "5P1EQbkphhczcMsJMAFBAAqM3RbtUmssMYdQtb3ejMa6At2EfANdNw5ik8RNw7haemadoPrFfUcbd8GfrjCyDwES",
  "key29": "wrueaUWqmbf5tYGPVUevZUBLNnrjfmx2CVgyuiu1GnAuMt1ye7fPDw3dXVw62ksJWXJyk1j4TQbyn5ZsMNQ6mGG",
  "key30": "2vaGknAoH87pXwUDxJm3g8CBWaFFh4zGPxZVnwUSG3UkEhJebbPfZwbJZ34sTvBDX4wQb8XNuQ5mTNArRtpQUuNV",
  "key31": "it4AcyDRSwcBNH2KE6M9DyjRkdkH4eiQFtb1dyn2vhw1TWUKV7ZctRbDSUC7JswXD9o7A2Dwg5kdAMfxmZu3gNm",
  "key32": "5Lkygbym1PKw763S96wg22j7c4CUWHBv93S2xAsvjSxh9A8Buo446puNysr524UQ21QzTHa2fpqpNiXNxhHWHVvC",
  "key33": "2tPmegiHyBZWbS8tjRXPZ5ZbByG95g2aBPGDpCsDRr5pptdYAQH2JexkXPvf6t4vuW8D4ywZoBKxqeDtkQWF1nCw",
  "key34": "383P5biUtc6CvjTQd7LinXfP8NE9rrLcS72YsQQtg8YeEMQcy7fKeERiSH5mKHrdznRyyhfSnfsNssXLSKAuEpy4",
  "key35": "3Cnb8iwE9EmJo5XmpVqDPhxLMScmKCP3sfJSpHa7iH2sv89RMfqgKimFAZ8Db1eWmyPuZbpQrWr2Vzhu1TjBEdho",
  "key36": "41iz1pgDDwPZGpQhNYq74dfuN2oQ8Y1WnJpWVmWA17TGcoq8z1KeEhKSTj359SEWVrm532WN8KpqYYKM67EX5iDG",
  "key37": "5v662zZsHWAbLuhz3SDDzvknS3ZzHNZHeCqKU9471CEgdLvS7USn77ynEiN2UHgCD2Q6xrNYt2VNN1dJkXMRmPLH",
  "key38": "2fg4MZB4dJhLRsuCS4ZDJJf7ZFxGm6hfsF5YPAy8n7iFYh6a4Gt9ztbmkuL1r232jm4dKisEdA94qkKto5cW4VdU",
  "key39": "61CiDnLmGH7Ys2Zyt49LgLj3x1mi4isu9BXh48tnM27tWyVGpsXijiBygMYSAahABwe9KZDccBVfokmr5akKzcWt",
  "key40": "2pn7HW5B2xCmNznUStViJmYtesrWEAGuYSdfErFjFqFqqefny9TJGvcG6zfwmTGe62239WpPRbt8Y9CzLSkdbBMf",
  "key41": "3foJjR8DrdN6yRpnj7r2FW1xTrk3fXdDeR1PqaPH324HzYcimW3k2gTdZ9a4BWZ64Sxd1WFWkZhmZ8YNoKa9HZNE",
  "key42": "4o6BruSyVry1M23Djpqutr8XYLsFzm2n6tUzsfRP7FHb6ejqRxas6XtNo9w7UNF72KsJfSScUXpfQ5hhEMxLNB5q",
  "key43": "2GcK6gxudp7SaKv9kcmDgsSVxximfkKUSX6CrMvhBUk5DXMTxLRwJUGQXquaT2SfHtPUHb3k4hntc7tqGeFghkKV",
  "key44": "331KJvQnX51WsyLAaqeW2jdweeBbGWNdmhLHHtXyAXg58c7g5SEjZKyLNZtiNtMJs4TTWF9HuRHRq59ryEcB6ZGm",
  "key45": "FQnjoGwThYJzxCEmEjQ3xVNENsZwzoSUVn9uCnrmGR2Xy6BCqyfzjb26f2cQE9Cg5gVV8aBTNqApcfPJayDLJV9"
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
