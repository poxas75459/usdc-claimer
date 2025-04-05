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
    "qgYAHcGywnQ2C4ihJ55hBfVSvSJyorfkbBR6avLZdkFv1BVtK7R5c35J2CsAFQGcgKRTTqRQXKCNVmffz7DTMrf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qmGLNaph6bRvs1b5gxn4LETnKKuBtoanWAjaZwQBagkKCYwmaxLr45tjjoj8vBVHpCeucVhY48ywvgksQxMWV4L",
  "key1": "2tv169BnMfkMJFKi6jPEzTXRAwUeANrxyDSrNZ6iTab2Tr4n5tU4iG6QSMuE1syiKHkc5ZEMT5Us3qNnST4knbMw",
  "key2": "65QXSNeCzY7bdqWweGUvjnDTdLBUmGMXVzBNdNu3SPzPKQsVeNtqaBgkDRxMK4Pn4BopU4cdkDVkLztxsmNzUFyi",
  "key3": "3WEcbgmT95TVPEXWD7JcBAStbcqr79NsRp1ABAGwN55mXBzQ2ePnKbuP1onspNivU5F85vmgSpGEB4os9CHgG4r1",
  "key4": "3ZcKHAcqpaCXtnDdpmLGb476fE3VjQS3sDnGAi6foKhpn6jRDGAtfRMuBfHnkxiQre49tLWy38V5MjtYqscCRJiA",
  "key5": "5VvUmbDHR9K4T1zJRggpxsXGzdv5k6Df3qnicy8Fkkgn1PTPrxrtELM2PaJ9ZN5kjSU7e58waFsapT7T6J2FBSND",
  "key6": "5Jydg1vTYHXCvemMz1Gsq3Z24VgGALcanzPmiA5b5TctUiid7BRrTLjVJKhG65JNipJE9c5MQ5MDPHk548XdRQND",
  "key7": "3CxwBiKfAWVgT5N6BAbQ6w5PcQkT3GiKXR5Wd9T8rqPC7WjAkk5XNsxWCZYVSxvUCHMAdqgqMuSag1MxCSsn8mxG",
  "key8": "2vCFUFaBTVRZ6aqczUHZx5ZdYmqSPbsx1b3DGkPsUvUjwR4NiLMh2zswcCYJMs3QfR97rxYdyDL9RWdkgqYEDbR6",
  "key9": "3YhMi7pyRWC9NdyviC5iodJFNveCiat2Kihumi9jrUKkGyeeSfNGME9c2BRUE45zLv7GCvRRRoje519Q9ffR6kFr",
  "key10": "gacvyRHH9jYKR5rrjybgJRQ7mKh6VKP76wWZPP8SCtBsUoAo6pxDzJx6FXBKpVHJMU5tE5AgSroXP7rB6ZPnJ5Y",
  "key11": "4bcTEC6xp6JzthAoE6MRVuLFGQNcat8Jz8hjDhEoHpDrMBbKkVrjDuafLA7Z3Hnaki4Epz4YxV41NomjwX2pXPYV",
  "key12": "Gr2ouf1Bx3n2gPQ4tb8AvEz98PEENSLjYT9zxF5etsqhUAC8Mh5bnzWMRHmRrQhes1L8NxC4kGuaQ1gm65PLUxX",
  "key13": "4q6hX3eZscLrV1yiogydVVtVPfLcsXrFQBNPNknSfM4LyPfsUjVp95bcUzpnggmEsRmWXM5tppiwAFtYNW2nzoic",
  "key14": "3djvzt42Sdjoj4Ycv1JbAwTw8bQqEQkZR7QHztuaK4GMXSLxAW7eVHxWGfXNtNmESjNMP9MA2TTCd9CsUaAAk6pm",
  "key15": "2sBeLTuQSqrgSExLiJmTLwYaj4TKtp8eiPCXEmbjsdhFvF25SQdEfkQZF3uyM81xq9Me1FoPWa86shAXZWt2nLCA",
  "key16": "3YnNwLQjTcyfPrZ7KViWNbUb775mvgrheuhuBQSBGhPvabfHZ6FCgd7kkwpCzo36avV2JxqKsA2HfhH6zwTThDsP",
  "key17": "5nDkZsmZRMKo64HGvo9tGi6kTtzthdk23PYXEKhh3mTWqvP9wY1sADyuxnHrRb6Mv4vPRMX1MuKT1ACeFbe1u7T2",
  "key18": "2QefHDs1AR8kmJn8SB79rnR8jTsbL69NUmRttidiQbSihVgGzZc4bJAi8o4nijeVXEoWJWmixrKLu9swVYRe6zQD",
  "key19": "2nig9CNrEfR39FASaPjBxa9fD4kwBNHe6WeoRAKXrcEXkHeqers1MGiyBUk58v8JGp4uyLx4EvMvnoztC71aPhCR",
  "key20": "xTMDBpiKA44pzXHstTg2qLjyc69BmiyqGHgDkTfGEm6xfEMTqhoi6aTAjag7A8a9ttwpuMwT9buoqvm394XyBqU",
  "key21": "36GYfKaHXEitbcHe9FgjgZbhXmRhZsSRkPEipELZCBYddLpceREKVa941cPkVFAKHxtUGG7edqCSEURX8yKPLQqt",
  "key22": "3eg1YconPFfENoa2qJKeeupXyhzFQqfUfLcdkYWZ8ZUcfK5Shb6WaFfY3v8ZFUM8B49AevvNVRb34Rbp9LZ6tqmh",
  "key23": "2TrD6xbUoELxNwCaVdGDHLVWkoY42gYLRkrNxuFg6LB2Q21guJVYvs1nJu1BeKdHjmKG5xRqzwCfR6koyUTWFL5k",
  "key24": "2FyqgbqLkmVAp7ne85RNZuvFSpn4NSfCkFqMHqBSFz3myu5V2xR33CfaHsZe89wjxcL1oQUAZxaFwFYzi86AMdZF",
  "key25": "wf6827ra38Hkik1WNqn328LHEWFDWG9Xz88WqxHCLr3YbXtzsc5L5yiacT5tzoX9RzK9om52EQ1FtJ5zhz5pnWr",
  "key26": "4hJnFDo7BUvfQfmKtBznTXrNjWs46MwgyHgiCokWSLRvJjRaENPSEfqnEmrnDYm6rPDNW5wUmF1jrrrh5VyP6fsZ",
  "key27": "UrERoMqqVgdYnV2Zkb5vTdn2xNa1TnPwRJqxTz7JnZgFQAiyVhQasTmmvjSTZBDzCML7XHoHzs7F1Lodt4PJkhV",
  "key28": "3J91zsusLsEdeJs5YzsH3bsrRrptCMioG36LjfwqMDznnxgFVzKrZ3g3mqooVspagp9RpbAcLYnrz6E9eX5E79T",
  "key29": "2BMd5w7P2Qod9WC8DGbvkPKy6k6bPzyGC987mfjFXaXP5cLSxbniWzSoRYJcmdBbrZdxzq8agJgGakTP6wvN9aMa",
  "key30": "3tiNVdiVeWRW9rgd2wCUV1dV8qL9mXYq5XWTXRvpeFe2tBi8bwmSpRxB6NZLEsbF591TdfoHfWs7QicY5uQA53yd",
  "key31": "5BsJJM8Nqv8EEktKoL15TtKx7EvbYGda4SXemZJUxbjM7pcxijHATJ37iRSMVssuCT3Ho53yJiiKWXaGUFGeXg1t",
  "key32": "3kjJheK1xda2bx1mhua971BkEXqwDxdRLX52vyLS6NSJBvMWRW6Bu7bcHDfgcvkFfQYzezb5gTGwcdth1pZDxLoL",
  "key33": "FxivWX6vi9BzHZ2oSAbbizJqyidJzFhY81bqdHR21rR6rVpuRDp61eof2HHfgPrToi2nD2WcRULdummLo3FvMjN",
  "key34": "3yHjVquHB5efVeJuBt2SwrkshovNKaRmCHUYeWSE73CPmTtv4kYQ7tXmWUWmwdBNb5MLBA4Fi1vsyG1EY8ptwP7r",
  "key35": "63W2NTEhA2un1VmCDqg4U95VwC8GEU4n2uZDExVjRKuhfD6Fc8zhaG8fniS39PsjMJscdD9GMng1po2PQJ42dMsF",
  "key36": "61YVaGYG1AgAdyrLKGJFBGWkpsBoNJLb8PBJPcnMiyChJApgmhzxQ4t7KqX29svzdB3ZxVGdZGF4LQPwtnNViucU",
  "key37": "63esfMX4SM65tjQYqeiSTsvk4QtpSAHiZtfSTqbTBH4bJYvsLbZELZ51PqLzbr5xjYq5D441ypw4cFjmjUZkMTBr",
  "key38": "4ovbeAKhagKR6gpJkURjTvwVX4mB5MsctmbU8NYTyC9oVZQp3a9y3rhAhDo2QofnjgmQEhuuvCCkfu7Pon1UhRuF"
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
