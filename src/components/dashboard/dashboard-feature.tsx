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
    "dXNG8NCECxEckNzSuGisQT3Z3pSu6dPb4wPqxdZMzXe4tVKXDRttxxbE7sT21zwhgtpmpcf1HbHTfeQukmYAh27"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RiGezuJvkNEHx9CAVqVxtZWB7bbs5JWDPUeucSVNzdKUmSEXvsQuZz2hVm4MXyFJiBHJZ52sqwimxs8uzfmALeP",
  "key1": "5P37Ekegoyor6ubeAPSHFPjVHEZXSDJXXmRqPsuDJ2w9UJAF96ZDj4KK6CJP4WqknZXUwekVEhcgc8rsoWLwYUkz",
  "key2": "2CCVLWXjVKSGK77wcP4i5gQLadRwaN1Cj9E9SA5tVvBJmYWGFPbqN7XHPLBGFkb4kNYgN7iEaoxCTH589JhoWEdA",
  "key3": "2Q1XK7gPLWkffeXb6eTYmy3o3UkH5PrMLQeHRKZwYqHwDpCKiU9sfe1fD6TNVtjJ8anYncusaNSk59Yjuu6C2pGS",
  "key4": "3BK74H6ELEKnbCyvQnuTfLADyP3KwrfFxAa6WPdxPEeo3BmKB1HbYjz4WvrLzk4pBfdbrNSRkL27vHAuyT1s5c67",
  "key5": "3ZSzigqFGDz3Fbd9HZ536NZqCoRVhKpRcxqASx6U11fr73cXSGfUQms75zxonvAJXPj15EsDd9cjt7Lts3xNnrwn",
  "key6": "2r9KJGFWcnU64a1bRhuAF3cUR9zvQ1PUYKwyUT8UrQTbUEUnDV3va2FjPyK1tHAbkHXjCfF27e8EmtbqJuJ4FNDM",
  "key7": "3HyoRZEterhwkpQnh4EygLpNz9xkqoYc5hcnSCuStugUYq1AjbtUYaHZwg4UXAm97op5TYazdTDqkd9cgbXtqPWY",
  "key8": "5bLyYfK5EETqhorxr81eChdxdakt1NPucLzAZNQ7ppfSX8QPFLUddCnJHKkFZQv7YCWtWMttMg9co4AJwzjWnhPL",
  "key9": "38f7beLUfi4HEzeokWqjpj9b5eo4cuKKBavJKYS72KFoRX4KJaNiseZTbSX87SBqUCECPeFnCiRUWRXrs3nD4CEQ",
  "key10": "VBq75cgwAyKsVCQuAmy9WH3GMoWnuKQQfufydjrhCLQmtP4sDeDbsNHBKnJMJj7GywhYMrLLp4h382wWKnLkrUZ",
  "key11": "4gEvD5FZ5LPzC7QUE2CSFKtGoGUNYFGZVKMe86XjS84G5FL1ndJz2bTAeXFUuZieXkoLoK37E2mDs3YqQdb2FmJF",
  "key12": "m4MCdqV5JfXuzxhQQviWQoXKsK8bjevi33epMKbDB3cvAvjgySQHj3SdpxLzCQyhzbuobR3U7ygn5mwPwrXoZLz",
  "key13": "j5NeeuymHKpitoNZAMiG26fNq3mrfvgiM3k3nxuwTeHLpJtKTq3Pp8p41cjJHryteQF58bPswqBwQkpT67mpeAW",
  "key14": "5C5uxcyoRaLGxmSoEnWtbL37BSpRXVUQcS49sfFXRTbb5b56wqACYNfj9xNtzR1mp3zfjmSkwuMjNASd3RuMDmsu",
  "key15": "4XZt4QVEMwA9uH9w8kqMyUKSSFNn8YEBJjAnPW1K5wMVf1LZeikVWJ2GJyu13AqgX3GKwFbC43MRfbwS6hS7rhFk",
  "key16": "5FinxcU8qR1kFDu5hfLu5HiBzpsyaM3WQi9TeiZtiofJzGaHXcy8TFdYThLzddKRwwRMVkEimsD6Zvy7vhjVhakd",
  "key17": "3FrBNLWUK3V7BkkmZrZcQHuwaeC8dXe4uiFdAcvVFQKaCaKt49iwvNHG7rH2kN13hM7n8Cxb81NKLBhiymt9m9F6",
  "key18": "3bb8M2o6Rb3kzbeScVW2zSFAoR2rCFs1NRWFGrm1c86VW1W8qs7FkkPbhxABcwRKxen7V1nLJdAvx4M21pGEJto2",
  "key19": "5SvsYaCCfs6V4Ub86zWPN3347zSmeGP2MuvPs8Uw2iKtBTm9waffgrGcswNLghyUsnQUHL1FfdFxsV1cQrBa9y6J",
  "key20": "5UNv8q8k87fzNGj5oCynXmVJvr2SJfh9712UFHF4BQhpXxJsroxcanLSXu1imj8zmNLaAsDB5HHBmH8WX4JLRAk",
  "key21": "55kdufyQHt4gSzZiZKFAczPG67DazPaDyq4zeM5iPN16eThnt4tSZud18LXv1XWijDj428qmQ8St4i6vN1tnHucH",
  "key22": "2wjLYWzcto4mRW9Pzj9sTmpyCVA9V35QGaRhK4gEMzPSZ6jobj4bxBypbrq81HTZomNHcmd6smyL6rpYE7M95gfJ",
  "key23": "28CY8MS4M2WVcHeQsUkHizjMjaXFVKzM44Ft2VwuetdQgokN53kop6JWNQ6g2T6WikvpY912dGafZtDb17bddocF",
  "key24": "4iQvo2H4jkYX5W68Xx12ZV8Ng4M8g5LMoQv92ChoB8kReWTYcQfvGq4z8T3PwAY5NkhcbixWV9xo7NhLsXEFfHVH",
  "key25": "22WXZAd3jcrJ7YsFUP5Y1L4DNAXEvwJ42vWRvvqRBvKZSB3UA1p2MBuJza2HcXPYCtJE56pLZXbVN9G8DeEHE7zT",
  "key26": "5ZLVb96VLpgaXkAJHTxbZQoK2r14bKhygFTGD1q3NfXoAB9oHVRtsoVJL3fN5CedQJRcoRWkz4av5FaGsKN1KqSy",
  "key27": "VqMqnAwtSZE2Y1nmUmg7oThyWb2x4atY6Ceuw7ZmKJ1kZsuWyTXj5TyEG7b5fHdLmY83eaKtHoGNU168ystykf9",
  "key28": "4dG7Wcqv4gYEHKWYpBtzsh6rXDayB7RPsyF3WcShADSZHiXzEWtyTdFAAXUjH53w7u3RinTVJfKFDEv5atWAe1HS",
  "key29": "34k6EZaoYwtULgACffBrFVVqyKzoZAXSAvbWN9cCgCwrnXAnUf3N8wFXg8VStoarGid73wbf37MoMszoyVvWNwUG",
  "key30": "2SeX65GR6f7BESs5Es9Bs5UcRQAfnrezqji3oT3wbaigcJ68A1JALT8viyL8fy6jqPEQneUBR8Qb77g56h5eKQLV",
  "key31": "51MeyyJTE7ZUkwLKyRACfAmCGysys1V65tKN4DR6bW448uC57aotH9g5cUqNy1518WTQZ1sNGdaUDghkKWWT3jzL",
  "key32": "24tVW5u8q4tRMwdCAynQYrHcwD4HJoTiPjKk5zN7EMsymMfTKQJtyjibFnY3S3wwba6Awu6twi6pxvD2n9kWtSC5",
  "key33": "2gqUnosadHJusmRQ7gVhcCEFdF142cxCD2FtV2zBjHZNPdMe6dqEjm7E9Mh8Pe4DY87UASbS21HSKG5ExsdmgGtu",
  "key34": "665XRW4c8yjpXZUKcLhQgV8dYXrixzuG9vsTao6ritNFug2YQcrK2VfHMUYM7sgiSfpstaAwHDJUYYPw1DGoQT8H",
  "key35": "3gizSXanEXV1wjQT2zJeMD1iepdcvShYR7RoJti8ua8ShMofDdM52SDjUKNNG8TTSLdH4t3Fe5LbZhBTsKyCRmq3",
  "key36": "4BJG1ZU6diXPQzwfXfbTiKgDwSXuaDpucWgPaTvNtaXJH43nXhq28R5Jb2K5yW687KmZyM7CEDHQWj4hUymbfWXW",
  "key37": "2FUsJGevNmnRuFQPqqGRW8oUzRmi7iW5PAsrfM2fKfJf5ypMd9YDAsTnWugrjsEQVdrpM2ETafVhwabJPZuocTzX",
  "key38": "9DdgA5i2trbFfvULYhVEmt84d9PBp4jcKgyoSdB74tCrqgKPCyk19WNpm1LRizeTa955z3VktF5vtpcQHszyRye"
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
