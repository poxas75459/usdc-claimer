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
    "3FmhX12iMPpRUFMW87e6pBVTRRDmHGx8BUfUXxYkfFgMmkFyvuuyBUmkohh1JkW9F9n4QSNnFzLBcmAYjbh5VNfY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4e21U2w9HPxYQModZrCygnUj31xuRZUFD13HMGpFZk2FmSKWJsaQpTUPawzWyWwVUFyzV2rSiU1Yx5W8PiPjcmYz",
  "key1": "4w71ov9yE4jm5hAZDiCb26peVafH58DozUcgNo9UDQJdkmF1vWAAAddYMxXpjWjT4qgmcg4aXa7WQ8zW6SNJ5Hzk",
  "key2": "4Cm2WnAdyWpffx9jcuxUf6vw18EDxae3H17zpAkodzS1VXDqEDjAbzv2mhGAne9JzEDVj7oDxw1Gz3p63hA8MUv8",
  "key3": "66haCV4b61XfTjwn2tJABWD5BzixM8jC7DZC1cC8au6aVU5RSESsNvQRVHELn1xyG5VzhounYn2jynGUGubiNBpt",
  "key4": "YndsfPcvUwCDgCyS4PjysiDxeA9CicFergFov8y9uos4DGyW6FggSJAxnpUJgSzcY4v6EFzUS5tngL7iJPTTLnH",
  "key5": "2tiNkQbFQuAw4R8pHdFzTD7qM7WVLRAjPHK4mSLb3o99NNWLeDyg37XfWT9bYHTeVcTvcktrCxfviP1yc6yHaXbb",
  "key6": "5mvhViCtgYXnVfBDFdFhn4ePtDsMYKwAm19wWANLXJVLdZZZrWHSfVMvrvKK7vf72PBjBqrZ9MvdHEi9mvaULFeD",
  "key7": "3h86oBVHw8aMx7uJ1Xxc8Fz7QckeDnHHt4iqMXXXGFxMbnEzSfQUHDsintB5vcah5AGcjQFgH4nYgn5jiYSPQxVz",
  "key8": "2GKjGtUoh1hT3e1kS6yp36sgUdCEr3RPrJaxv89gr4qPe1PD6U3syDpkLSYtTtobL5XjFkkvxj1fYu8WB5nBeLx",
  "key9": "2z4YRgDzKDbLuefhVfCabt7Hm4oKRueEWAMyjk7SzNBB821WqoWMTuoZr7P6VdDhi23Chv767y49Ag6zrdQvuPJy",
  "key10": "4Nd3tGujC5cBwz4MsXuZyu2che6QhEbiTQErqVqgzrvfoqyMtb7v1jigQGNgpeasobdDML2RvdTcTtHeaFz53SQf",
  "key11": "w8LEbvukBH4vrTYSRNsHQPHZjKiheZqeLajzw2fBXySn5KcnYje2NaBwQ57Eg4oiTS4evmAjbfVgxhSPmri7Za6",
  "key12": "mykZGcfDkrNHMn6wfQTtJfTBFevGy5aXmuxoJPd6ze9tTLVxxiPxBr3DrgYBzV6evjA9pK9RFCtTrxBUEDHYut9",
  "key13": "CA56DJWEwii1CtHXKhbdtjuUHNzouCaLHJcB4EDPvHZnAiZwir6VYhZKDeVUUkJg7BmWy3iCDqv7u3RftBP3yjJ",
  "key14": "2QE9MRuDVTBU4Epja7TQzoBUyyULryxdcK2Yv2bZDZhZ2EgYnU3jGcBVknCfDmCbSVYmQPFy5k5Zmnr2xM9q36zi",
  "key15": "3haERa2buKj643W96QbPKkJyM4YaRPwYy7cSiT1p9vg2EU5Lj4WqNeodbV8ktVFE69J47ekUXW5Ts6JcWsngZpEn",
  "key16": "3GU2tg5ZGNTfompquztaqF2fwDAbXyPgbitRheqbDssLs3wv7jouF5SQov3gV2FM69vEVQywee3tutUJ8WvwXhKL",
  "key17": "4M64RmV4fKrbb6zE1jzrzGfa856oPsYoLh3Tcu1WL8qx5oD34THMdSbUWNyx6mf2zAH2ouJJcUPtjf1jysDiBrpA",
  "key18": "4cvStguCbiATt2pqF5Yc1qoUym6r5AB352DGBmpxorw2uFZD6iKMw6D9hSD7UK16GVomPKRc9p93F2SroPogSqDS",
  "key19": "sxgPD6rJY8htgiGCSTaMvej81Bb7M1tR66LfM8w2nUHfrupEqinUBZeHKsA8dveJCndvv6iPLhXeeBqvABfcLek",
  "key20": "3nBvJSQZtNuh2m3Xas4c5twCyLAh2vDapGCfifQUbggbpVEWxMEhx6MyqXQm1GaEyAvbjrYNnxDmzVVkxfyjpYem",
  "key21": "2NGV6TSJ7JVMb67SbuezZ5DQiKYJDXnRa7LGpakgD5ipsgzKghETtnk7RZkqMgYNSSWNa2NnYiFYRWoQXnAsxrZx",
  "key22": "5nsVhFxAeCRdhvXecN81k6xJCy6h3DJfXUtwr9VUsCAgqxDoEqBfcDHBChtrabbKykqzx7JJjhdJs1mfSFGSGzrv",
  "key23": "gZpKArgmQ2iJCYCFL5JKZKPQV9FEpHEdpVJbHjskn7FNPo9PNGVGi6D4tBpQL3ZB5yuCn4ZqkFQv6ZENy8F84C6",
  "key24": "4M4j5u4WMswHUiEFoX5wvpUoANEmXmng92H7GL1HdHZBiK6j9iLrSqqmv23C3qwkE7xYBkQ3sMo8XpnFcdwjrJ13",
  "key25": "L4Q8ZdshUagE96LvujKJJmYVbxtAr9uyth1yQSt7fKrbCKNcvpjkYgJqLM3TxLVu8w9x5sd4b7NVdSGBjRtVQku",
  "key26": "2ix6VjTh4TMV5p3D7SApkhVjPyoaP8yBYkKyLeH4cVefBwarhG9Tr6JMgECPmQhFF3dTPy5Dg7TavnJ9S45uksQ3",
  "key27": "3XC972dTUAsexHYGDb2xDmF2naPKnD8aTLdJ9yxyanAcWNWGMY4xvT5RaBJFdE39gSrKaWQZCh7mseATVSWbD1Zm",
  "key28": "4Q482uSRggF5XrSnzfraTjjPa4jdXRt1T5hFPJH6d6WBaq1SdM5YNsdjHbHGoJ59fDiP8TcEFvbiCfSZEfCMXtfU",
  "key29": "2A2xcLuSU3CH9SG8qcoN4npH7FKRc9PCsBKAVdBsX35rBhQiQ2MitCLFzYaxidS4UoYVN8aywoXfi8H9X9cpbHSV",
  "key30": "2xFR5Mjqd71woGDBNqaTiPm8YAgQ2qzxAKUPc2rsMK3acx5x4kiunxCF5rw1GsmEHzm5R89ZSGFGpVnhX1uzqJ8m",
  "key31": "3aA5ocEpH1Q8whMknTxeEuqkT7rncgiS1w663PMhahFdUBdQbxLoaaxsP8tKXJp1JF2WPbNZ8u4hwqdUCqiNzbYN",
  "key32": "5WaHtF52f9KwH9xxBpaseV4dV2SAGAtVw294XYoiKZF8pEKRatWHksEEju111ytXCC52khSpCJjSdPfrxAkBKs3K",
  "key33": "5yj9JT7bSe2aF9LaGg5pv2TEMotYWdtffiHhcwhgHqTv1y8A3ZqjwDRHzhgYhwKDHLKuvaoQgdzjw1hM9xoouTtX",
  "key34": "4jeNQk66iiysndAda6LfbBNm5GPigrr9N9yPC4V5TfUPJbbVCsmkNDkvDUeCmPrB5hac1xH3qDpBCvu9spdZUTLR",
  "key35": "22EakANRLbRu82pcHTzU1hEN7iqbFvgcZSrYJ9mV2eBzEj7248iy8tzpbqtwcdsxvskXpBCmyFz86vivQQxRktvP",
  "key36": "5hUcxkM8gAAWzqnt59VaEGcNv4M1Se14FTMZLVKsQrYgtsHVv4e5JbSro3ExYX5NGqWygHsicNRjZmkGyzywHZL5",
  "key37": "3P2sRqF6bdCTAXiTJbumpefJasnDShZRHpBkgjnKT7JHs16jXLetFSXmr9oRtciMFR3Ev7w4xSury8aD8ZhjVtgD",
  "key38": "CJibzeG6iY677sFnJffY21PVc8EzC9XZJXeXz1pvvRb6XG21tveNULf2S23CvKUyUwy9T3qEpbNshro57t5mJmB",
  "key39": "2p6hkRzHH8L94FX1YkyUcL9aewWpfzqZgwijPdt43myur5cRaSygSHxcjcXnXyTipXxJbazusaVz1M24ZxxoeuVc",
  "key40": "9mut64FFqmZkkKPsiqrfsVSNA2d8fPSbAeK4vmfRehYxAm3fM1dmXQ2ZCMyhnXd8f1uafRApjDmeWVmSwMdMWcg",
  "key41": "3sdckBL6u63zjcp8qeWnsUEN1YXzQdtSTm5eLG1C2ZTXj9KG5WaBxYarL4ZbUJxM7C8U8s8BYUBeYqjTmDgaQTkg",
  "key42": "4WthWaKs62A2sRCbomfE7ZXviYU1TPpoKfAgqnAxgRNg1dm5zDFVwHBN25Pjiok8HefStEbcGiCgPcHJcBfn56DQ",
  "key43": "2x6TNJ5DBbmkKmw3sQqX8havfTgtDvWcwjwcoRcWxXY8a574BNFu2n7yEPQg1aQ9y8xtVc4zxACfE67iGsNYynGD",
  "key44": "3e9KStRuo4N4AuFKvHhkVA3BvKvgatEPzQg4KEGMZ6NapvKahj5tVmsuv7kesSUkVhDJrg5TpVGS6vhdPnLGvKwL",
  "key45": "HM1twDgkZ6epsQZwMxkKMawYPSMxCHyiS5pQc47HkK6fF6qetAjpRG6BuWkwGfaCwD3iB1i1BBdsWRMvUwK4qUt",
  "key46": "FaoFqf8QWVz1PWJZnJW1kN9uSWcJPhWzKGkVejusFpsP7atx7YH6negrJAG8aSFWhSHLBHNNWo2DK6WxrqWC4SK"
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
