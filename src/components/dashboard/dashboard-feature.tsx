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
    "3awSyYUhzjczVzVpd66Jwta87kbZ6fToJfX5CPhcMqnYdNDrotLPDCgBK4AGwZ6fpj8sZXK3GZox1dLTaqVfPBeU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YYyZNd4GnggeuvvfntjEbUZJvUjd3E5Z8nax5pcPmy7dw8C1gRgpjWN8LhqmnvV6kqDczPLjHk3qyg3eBRdqhV1",
  "key1": "AttstLHM7frsnwjPz1JNoCx4bVFEfw24kQmn3AtATzSQNQdK2kYapA15cwZpkrKfeLcbEJB1pYsQrG6km2dCseL",
  "key2": "2wzFJvghdrGTwmVgrYA6RmrKbWL4y3QZhZr2z9E7Jy6LmYg7H5rqk28bWWdNeikVzcFgPXeBQNEu2TqHP6KKRUJz",
  "key3": "32LRG2CjQ49RCWb7ZBmMBQp2vsj6c4N1cjYuAGQ9usBbkQTutdtyVQrLmH6BEZ6HnH8jxcJydpXn2jFyRh1HC442",
  "key4": "3yqPT4E4i1nKHT49AtuUKz1BFnzp3B4M4cBm8tkkBzrMuPwUAcNBQgBf4AJ5KTeBpMRjsyu36mKYqwWxq5h5uvDF",
  "key5": "3iJbSq39zxUsYwRp77w88qJfDmNfN4DxcX2pya5uQg2nT4WdagLPYgQLrZXeCNU99rKGwXryAVJ3TYCNQ7wNvnYs",
  "key6": "5Jrz5NsXR8MoHKJkGhsmoAsoRS2Wkem1DjBGg4nmazMgVSpC51xyRBMfvkxtQ35n5XqwzufQR3CNvpAe7JzmhVpy",
  "key7": "4TGtwrSSM4RbYfrttpnvdd7KDmt67yLNkxjbpYaZPCn1ZtRMCL6nzfwD5qpTQiKq4r7phgGUH9dcE5Z5shvffzdH",
  "key8": "42LDzkGJssuxCnhVQjjWSnALRei9BKC5GH7CDQgiSZeZHGSsJJSHcvrv2ZmxvuGNH5eDdqo1mbvnkjjuWwQBH53j",
  "key9": "43DbQfSniuXzuzsTnPoaTpjtsU63qRPHwfJds3jd7aAx4V8FgwazJGQ8UgobtXto8hx8R2ETgULbuw8haHoqN3dB",
  "key10": "23UMYV5E7cYWppnmP9ktwWyyZfJ3kguzfjNqMvhhViPRh59D8iEENFPPcQ72ZU7UYUiw5o6MySBUYTuSQNmHTggR",
  "key11": "ZZbeDY6YEv9w4PHAsQYhyhZmZRaedY4PQDQ7gfSzZhZEfe5vkvLxs24EVRRgqahL5cKJftc2hthGDJfGzqiurU9",
  "key12": "3yv7RBAGoe2tDErC7zv9vrd9sEvZVSSQb28SMj7sEp6k3Aj6fSYCyZhCTTvYj3gv7NhNfMtfUUV1WzXnos5Yqawr",
  "key13": "59QsiG6Y5J75qg4V8z7RxonEWM9cHLRueAZ62NBJBR9SdvrAJycuexUkqMttXQWoyH6ce6mNVbp4BLXmRoUrcEAg",
  "key14": "2Xcq8XzVYypq2Zevc3G3XQCwCNiHBwgiKpczHpihxmtm8NCgS7vgu8jiHHeQDHWo5ZDFmAg9omkgx6Q9sqQey8DD",
  "key15": "G3XqvyyAwvzwmo421u27YpRZtE78vnDK4dfDCPXHr9ngMfAVjuApJBGC5hDeZS79WRa7CbNxXPofS8C9fy5sKqa",
  "key16": "HmmxvcxZUdYLqZekR3166Z5w4Tq381U2zPbhry7sMqqT97EQLgxc4mrCPSDBsVJHhUbZ4YdtfaJQyYgZGe4cp29",
  "key17": "QM7hknPDoUEq23SCHzWghWFuuh3qjNgocc7MAsnNG1MY7hETByMJr6PxkamvVKMTYQcMWbjNC48XRAao5tWtXv5",
  "key18": "2fxUmWbqKugUrHTdYRcvyDRKL2mtsTqUzXABGZ28JH7HaHrJ5V2frQqmujFjW8YVJXqJiVsLrGAm2V8VT8peRyff",
  "key19": "4ER4E2FZfHkMuBNYxV5xXEDy94HB6E6XwFvYgKRzHA9fReqBdafXeXzAFFnALt7SbcJe2gbxuZEzzmrSmwpjp4Md",
  "key20": "65PjagzCtY9jz8Qi13xPrbm2Zo8bvM9txUnEHQeQQh3DDBNFgSQTMH93YTiHpYbFLBnfHtyZfpY6HyvCKPfhFZv4",
  "key21": "tL5hfQMCQHcQjGfMtFZLbWxagtBqFbn5vf5eFXPzCjxHUpS4X7i1Hy2Fn14iXaR4dReDotiL5ZBdG3u1w7m18Jh",
  "key22": "3XEG3fkbGWUs18hdWK4LoXSMbyxZUBLZqsqBkSiswsjApXw31CGubUiZby7ZxLbE2v6wT66Jm41e5y65UJrTaQFi",
  "key23": "5dQHEHd1jFJa88bdCDc65NMp3cLCofxCLKBugtuf4v7wbDa5hotruNrNzKU1pVeC31MvEThZxDbeTtVCE3AvAZ68",
  "key24": "2xRpTLSiULAHvibyqy7VM3sWRi4G5aLLpE7LXLiPNP3hX5pVM4NH5Svu8PWxW7XqMZPNHDoZfsBXWQDHphh73SRF",
  "key25": "52yfFJGaaQS6pUm8tK5ji51Bh1BvV9a4MmQdhv5cPdc2GCwCfFFXVU5A2yxAjMMrxKhYYy5eumRuQg7uhxwyqKxW",
  "key26": "5QVbTEUdSQvvBU2vrmSTCycwTr856uFJtCvSdsHUdbNHsjMzgGeFtuak1o1hAeAtg4VRzj7V3VXfidKBetnjz3SF",
  "key27": "ZXC4quDGFmdQVosxRsgnuZmYch5YxVGPmZpgp8CR8x95jZbWfuKUNM7iX2pFm4LVLGcabQaQxkjVtysLLvFffhN",
  "key28": "2gSQut6J2LgeXX8crSFvpXX2j9tWoHRun3HxbWrQfnGGBjsvg4METWNr7XzwLGqSZgrF4YPLpazxyjqiFkL4wDH4",
  "key29": "fxB19XkQ8rm5w6aPB7GLKF2EoPCK1kudVjn1HsHQx7mJNy2nq1p3xNcAf6zArDhQWzsKiNdUb7oQMJK5LqkNzPw",
  "key30": "45MVAXicXkHKCGQsRjibeyQfY6qPXV7H2ggyvjLptW6kPYxWivAtZNfd25PuBXDeAqVmZJBPEsY86RTgb1MGEBQG",
  "key31": "3UPe68Jqm1EcGtWa1foCR4ku9npVjZUQeWegvS4KQyU62zNMkPvh7ugf6HB7qoJ7vHfFDYL7pUhZR2WrBvD5FjNZ",
  "key32": "56NqeVvL31F11Wg3t8U1JmKHKE7BdSP8mVgLMURi6sg5zQjkgRAkKefX2b2RLDBLjs77mu7vJJBZmtvuG2j4J8JQ",
  "key33": "48qFATSNsvDxtbFnnnV9cjx9oAipwdCoNcfCrT2s6ouxhtwJ1GgHyeWjNiJjWNGinHQJNDppFBZXXRfEk3pRN8Sw",
  "key34": "37d8QySxozQNJBzEmT1uRcxNGZPU433EP4mxeJ2EszGHAKy1hHfo6MhGdXZegFC1qNo7UhK2kxogaXaoBdYiyGhV",
  "key35": "4Yeb5WMVpT4BsptG9FLRPkoTMU77SgX394vYbWeg8zXZX1mgJbfe3WKSYY6ut48sEpP5ZF8qg2HaAdksXMa2A5GY",
  "key36": "4UxTU5h5vUbcVgZHuanNHzryWoJezwVxDC2RwcPK5kTiFscN4HiELC38VdDefZUxXSCJ1Tauji4dP7UzPNb5c65N",
  "key37": "4WwujG4XZfWjPcpLX7MezJ4J2HYRRyFuEQ8ZfqCT4VptrcgosR7TEpNMJAGD14xKBhvj64gzokoP3xFmNHAGAbjX",
  "key38": "4XDZjeVkamJX3pDs27owNfkt4JGqaxifRyACqMhAvjcHEk1hqdbY7t5jg6ctn8KjSvkHUmGwtvbPnagCRRaZ91J4",
  "key39": "3xXLTT7P6vAdmjqt3VHiRqEyPtYQT4RGdNF56wVpHjsgxEHH4Q9A2uzDbZHL5VDAjWY5cYAb1YcUw8Uc2oqLfkH5",
  "key40": "2JApCXb6J4oVFL881BnDzBymzh1AC3CMWaWe9gg3GJPAWqUVDBUqeNxSDPszhi9Y4xYQQMyvL3RbcBsMb63hSci9",
  "key41": "2dx67ChzHThoXQepuoYns8Z9xKbL9UefsGggksGsjXN1PD9R4rRzpqKfxTGTEy9vrFkvhz6TFpdYBr2kpvqirKd",
  "key42": "4Mb5whiiRA2h9HgGgfd2mWSEX3MWQYbwVYnWW4q85ULY9HQd3bYDMVKj7TmAy6xHVcQiBaRRZg8FTAbnLXRfixdx",
  "key43": "4yz3YPxrJcpys6qPZ8E7ggaqscMd7gZgumCGjuG9wefWJy1QPBZY5DqZEbpDDqDpSL9ddNXJhiqYSVaz8WmRcHKE",
  "key44": "3ozuumiCsSpKxGyZBNSgxkSDugEsskb6VuYX3vwLwFqUQ8ZRV8pa4KKuL4rCnSVgsSQWRcH7ajTJyScYTtt6xNyH",
  "key45": "2Br6zmLsQD531YmqufTVg1gevr476D6VG4Jy5JZHkxM2ibcdqfUT8jMcNvGb3f88p1fr1nrRd9o4oQGLm9zqqi4u",
  "key46": "41B38VgmRtWD2atTPivWqrTvn1UGMpCtzGPYE9XzdFHN6U5HFqedQQKfNHhaUA5d9JD4Mgw5hQrfrPsL8ak7NeS2",
  "key47": "3joEQQ8sAP8JCPG4X3uYcg4DoBKbY4xAppWUb5ciQUwccTXyXG5V1oqbRWcMCempqpTJ21VHCFXbdenFYpKLYCrD",
  "key48": "2VZZZ1CtDPes1SgGSgBiBpby4ysbvAQxFoNjEURixPWpyW3pLKzs4bb2raS4Wzgf3PFaDrgL6vkgC2rQBam6GxZa",
  "key49": "2Ucwh4aoDFzhnBVptWEqxYVFewsaob1fqm5XLmow3sPd6pTnwiKMCuf7Nh9C24EJEbxXkqj49Ky4maNxE2Tr7LUq"
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
