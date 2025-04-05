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
    "5iNwkWcjpnczNzy5XHNTHxhFR7HMEHjCLZ1f5LwUK54gZJPJxJ2pN4Z7Jn6rFv7BtHWkHWA5JXtthMWisyZPUToe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "294hLwNvimnkmjFGCDNvxbmnfr9uuPbSjzgMhs2v3vqeYqEX5WtYBtqsKvsULaH6H4z8bo23aCryGP6F4DipH51K",
  "key1": "xK6AD73XVnppCnaiuzeVeTdee8GMw7ejEavzAtvCqwTutymh8BNaS3BDdbPvezKPXzoiMUoyRqHKskXJKsRCU7C",
  "key2": "4trowfHEcGijvRmcuwYsiNjoU7T7FqypLU5qoqYu9D55jn5yvuEUMDdHBcVBU2aLP7Uz6FLkh9ZCd2jwuJtuPnVu",
  "key3": "4b5TbB8j19FmaNKxQsEdLSyUSiXQkmh54BeFkJwvgEqQxoRdtVfuq8abtEjM6JNDnBCjmGwtKSmcxxaFTgbgNPhR",
  "key4": "2H8oBSuNbKvsgtegSPfGqCFaGTet7bA8vfJpUPQuzXMF1DTAdxpvE1AgKxffruzfJ3FiEjrdWZa8jWA1nd3QgDk6",
  "key5": "2Q4m32UaVtH7W189yTG63D5GBQLyRCgfcNaAM2TMDpVEdnN9aHvQX8VPYbzEof14anHTnHco1Vw9GQujLGZhTDt9",
  "key6": "2ZSNtrP8dPomHmNkMZRQF7PCYvQj5eUBiDitdc5PobanbavvMPyeejT8KPx6BkAZyn158QhsDX1b1L7dD1bQjCWA",
  "key7": "2SyCmYC5c6iTAXa3FhGqnyqiLyoW88z5v35Xbg2vrwNRMuKKEFHRQb7Uca93WRweJXsg1zHphUAZqtqa6GB2xhzX",
  "key8": "2qhGP7rMyxcdzEpUWPaRqhCa8MXTFEe4rxtuY9h9L2CyrbUGe4T5bF3NxuzGctwAsNmvzRv8xJUGDVawMKpvEfEP",
  "key9": "5roes84p2u47XkcRwUU5vxNeb4FPvhLtnzHTkHNSpdrgF2f1AZSoB7i4W88XrdPkZZrKWW5rZiJhfGDAxpqiPxnw",
  "key10": "1ttKeiUXxW1Hv6NGqTa9ZvzZAkycwNXnJNt3NsqKvwoqMm3sma3F8kesZndNUdtAeFMfDGvSzhcxjHXyeLKmveK",
  "key11": "4ZKTUFQStSKQ4cT14VUbR572MCiHoesYMRN1ACZGwE8BYNdBFEhbEX5dCtA3HmJFZKU8AoMXqjgXgLkvR1ATzx9G",
  "key12": "2Dmw9PnArZZbbexANUMqakhRevX5N4xpUg5rStgi7Wy1GSoj7AqQcMWcLJb18udktshEssrwsxzboQWfSH2jnUoo",
  "key13": "3BqS9MTpXJxr1scCGAR9hwuRPL5NAU6nejGZkFoLGwJo5ckCWbkibZZXyugg443dGj7D6Ah12iNoYuHLR5Lx3ZCm",
  "key14": "67A7mVRbjobu744HkB5tRtFS3twPJXqpmxqJetFfvciGW8M977P8hTkWA5YNA2TnxCktK6mayM7kJokbTNzZL5b1",
  "key15": "4vsqE16LyN5eu1D65GPAv2qgF6j5CbRo2iuGHGNG3puhyztDWiamyet3nARsgxzeRtmrETVeCUkM737T59UZ6UFP",
  "key16": "5RDpc876rY2ZoycCH5o2hctFnLszuJ67tpTSmJxJpcT5aiyBVJTvsXSBoxBA4qEgLxAuiXMuLntoD8qN4VpJDS2L",
  "key17": "4JVPAPr2QsFTWL2saaNUvupbp6YKKUuxy1111F3qaT2P6zpHLZxxAnNpMcnGWXMLqHpU33jpdDoqSBmqMa3CByq8",
  "key18": "4NS6ykSi4a8krw84RYvo9XFoWwm5YoDSY2Fs7Lokms2FJwYNYR1j4GPkKQd9vWDjKecPAPX3oTxVD5rvpN2ZrEvs",
  "key19": "2JAhxrCLtK33Psu8c7RiF81buhwrGKp53Rpw53htkWXsBtnVM35EvA1EPzZDTeVyZy1cUrFzvkGJQf1hxFS2N4Wg",
  "key20": "R9hBouaXhd2BdDxFtHXHehbjVvqFSu1nXwiGE6n9VYiK4M1BE5HsQCHMWyLuYhHUfgWjryzdcuJzfrYtbeyWprp",
  "key21": "3VkzmrntfUXXYEMidMMF28UfKBwsFNUC6LsJ1GDQE34LiEoQv4BWy2GNxWHx4dkkJYatdz6JCRyyZ16YSk9ohonr",
  "key22": "39xuH1RScxLeqLqZRi8sjftPDaRzLRUfHNq74fkWhHjzzQCmmTwVhCUbbNSG2MxyWbYaWEuLTvLeQMBfjh5Rxcnv",
  "key23": "3FP7RqZsH2j1fihbLRNoUCVqoXsNjWZTAro5em5dXDDZkyT1J2FcqWhKEWoGzsuo4tALzy6aiPTqymJTivEk3tUQ",
  "key24": "o4w28bf6pA3dWWoH3AN9UqKXVWyCv4e6ZonFgj8iACWofQXtzhHtDn5Pse48ThNeecYBCZc8teXhRQuerpzmZNw",
  "key25": "5LpdEQaEwtDeGWCMRtUeG2TwbxXAcfTqEUa7Um3Hg3rateCQAjW4LmGeSrK36nnCFZCfDm8ge5jpErqc5vwBP3Pn",
  "key26": "s4xMbJUQpu5kJ8MZssF5BnwLjEaFsHq7hffgfQ5LFNhL63He83oMTLrbPZr7YMiekAAquBWY2C3ttWahELXTLzt",
  "key27": "VFWknzmGAGE3cFeB9AUzFB7gjpN3tvYWvSphWz1Rgk21vtz9gEqEhg3W9qsRqVA84TVb1bAPXZ9RDUgbguPGB8q",
  "key28": "3bhmHFVHKyKMMNeQh3384YEhxmPXh7vpQMoWjqaBBntnqQSZ9QLpfv5bBnEXR1L5XKZsciBmUgq71QpBSHziGPrH",
  "key29": "2iLB5a2epTPV2E9koBghztwEU66LDXSG4Joe1YWFqyoiMwHaeJNJD6Hp3grR4xtLnwBMgWDLVLs9HdFFu9ktn2dn",
  "key30": "pF857SwrWELQAN2PBx3bKCvgWYdiZpAPkfdNj6o7LYbbRdJops23TXj9EqG1sH12u3DvLtcEuoj6RwFgEbnayoK",
  "key31": "5nUhJKA5PPY2busVJqLbB2zjm2rLWhSUQY4437MERyRX8EFxj2w94pQ3MQ7mGVBE8EFpWhABpXbGEThTa36NHm2a",
  "key32": "4vBCRrTdTM6Xa64PSuLjLfLXBMNB39UA9FTgt7wMCUcb8EQKHn8r3Jyub622F7MjQje7n5G4oyLv6ivGpKDSxTT6",
  "key33": "4DszPdkG1R4qPCaivQS9DKcMoBw3b9UxFvzdnk6eh1vSXugNA8e2XnKQ94W9T3yxHg2vU9RsNJkQRQjGJj3LBKWV",
  "key34": "2uBARYNSvXjjnLcPaoYmzW5SCe6zxqwzTAaPd8BjVbcTnWGvQmRM6GYxrbekrYX93MarYbHRwmvBSRHb2kwgHMmd",
  "key35": "3qqxtqGWnyM4XLAF1EFpFBv3vH4ysvbkN7A8jBhTi8tn9baXQXfpR5w6BoRSbecqzYuTwL3HMTRp9LbULnQGh9zF",
  "key36": "2KfRrBpncGNjp7WY9fmzquk9DhePGCCdmn1X9qG4sv9kQbEjwJ7vQ5rbjzp4bNWpBgxBHvHhEJdVw2wCPzUU8aWJ",
  "key37": "3NxZwPA9wqnK5LgYjh8nfcrdQcEA5vdqUcucZZiPbkJGwNjdEdQztMDHa1vnF5nfC6nrw1HxDm72emkJHLpdfB2D",
  "key38": "3pLmPtUhEUfRb1Dw1MgyxFyNyYTsLKR329sK5NmSuM7YHonCTB7rWay9rc7TWswvQm6q4nkeTbNvbTJvGs8GKzic",
  "key39": "vjU5FX8jrfKPkf3i3r17x72Wd5N3TcLpURab5zDx1AHEBRGFb5EDkuejhgpb3HYBk1sCv31bmLCW512LRKCnWAG",
  "key40": "jHjXtVoVgr4MeMYwPMeLNgSgixxYBvbxhnysh6Bfc6kpy5PJBueaDk1D4nnRYmBWdwrfhWgffMmmrQ95ZqMhq9G",
  "key41": "5NQ3RKcsZqfsaDB5BQybGvFosT5E5VB1x893bk4ZwYRiZK3GfvKrcQd4ij1uhVbv4uQmoRa1c86oAdmqq3udy311",
  "key42": "3Dc15mg9gYiSHoQ3yLQgK3438kCiv3HbQWNySTSLkn4nXAhHXgxuA3KsEpBtgVsUSWi1jpPn1XymWmGSoBAnsKTU",
  "key43": "71G91T5j2G5WmTn8g8yAshiDXhMYKyDKZ4BX6zd27yi3uKvb8dDN4Lr5KeDzxFn6AevoBrW82zEsEVHM8XL87Go",
  "key44": "5rLU176caGVhHx8p9tk3RBjj9QciSUTph3VerCPbZ91sawkXYrc24Qi62XDGMc3KtzTDmE3f8yQLSspaok9YjCrj",
  "key45": "5Jf5C5ysmj6jfMxGNSb99i9w21NXAubGBqtqXEC11KyZfWt3sjGVV1Q6YwEThuZ3vrLG7uAqRi9Rx7dzoSw8YJLm",
  "key46": "5ChPm4enxjLGvUr2LdTLmeJSyP4LTdCGfYR8oPqG8gNDM6R2cgVTDxAWRggr4W3UUci2H81kr9Duq4bt7RMHY116",
  "key47": "5qTNGKBHTQEAvpcCRNN91kd2JRpf5S84M3EdMyoTfE7NzPcu6Tz1QRBdEwHqQdbDhT7dZCdMHWMDRoFN8FyBXz8T",
  "key48": "2VDPhA4HAnkCPN22TERF7WWM32xsAJ8qYdTgD2MpsSTJZ6kZTwumDqCzpEce4ae1hS8MjwuZrHHnZPZgV3feMK6E"
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
