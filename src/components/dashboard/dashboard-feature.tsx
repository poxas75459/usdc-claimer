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
    "4HVBaUbUTFgJwjjCxcfV81CCDsjZQRrtWXD715qdxkKVzBs3aBy1r5nZQ1WrtLTDGqK2BDV9io17Zqp1cPqEDsL2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Tp9ozRbw5mz7QGAfHGyZLMxn2v1JMKqEwsuqnx1VHdKdYLK73kch4titvShvt2L9P7T6PqQx3yeUarjnWL277ex",
  "key1": "5A4gi3UhrXNA5yVH934LvPpFfwQwRBeXnMWETgJmn5oSspwmfaBwDcX5gspdky5HnYePLgnugtmpfarnWiH2caHi",
  "key2": "59E9gqiHXiRtSu5YWFfHWr2soZSHmu1GZ2GadzP59XpNWuaSp5w5zgmXJ5gnCwKhB7u9UQCpBBoB6MM5G4BLyU2b",
  "key3": "Pdpi4hUb5JDjtSSU4abVDzGKbcS41A8h9ggzuhpU1C3jg7xWWQ1XY5DVXT1PJnyY5XkNscVN1373EErxAh7mi1x",
  "key4": "H6rPPKPkhXbeGxs5zi54qadoCZr3AQksoDxpnn5zEswb311faAhNW9FfLbCNKVtrK8gcU5WGd5bnkNAfAp2ENdn",
  "key5": "497fY4mzggepG7t25YQALqKwjRDAGYw29RV6EuHeF3kqSWTayZE9vk2pZ7qVrCfxeeyWHAjyhqwJaG5PFWcuVTzj",
  "key6": "3vKRXfdxuBXExwtkRjXnwGjMbJtYjzQY8mr6m9ou6MhMmxLSnvFRkATKQd7yNrEgjKRktz3g25qj4MBGNYo3j5uh",
  "key7": "4yNExdPbjCy7o8nXtXBtceAG2M2rnWCnQLq2e7XHPCifJpBxEXH6Qbv1L1PQaXyETi3Tt2SU7XJmkNN8SkBJkQUL",
  "key8": "4sNhmmq1qhEdtHkq3nkrvFz1UQb3oWnKZRwSWAPBCEQbUUzDtmCtJw6WHxopkKEk13PS8LDJZ6LvTCGZZa9cM8cs",
  "key9": "5eh3fEkkZrMc5iWe6CqBeFDr8bfBoC8SRZJPbzdMPjW2i8bRzwjjsJqN5z3dkWq7kTyTF27vhCP86PHMv11iMPZD",
  "key10": "55W4cdQDg26rJ3aoEqBarYCHtxt1Pv2tvkUA8WPaETp2X2US75Wc45PWpjLu61PLWihY9WJSC6w3yC1DBFcEnZQS",
  "key11": "4q68r5AkdkBj5h4Y1vWff53FmVhZyyRzNqEWhWqBMnBi5QU7hyjubqSJiYDKr8wTk1hAEmQMQJd8weFkPecEwWDY",
  "key12": "666PYRoVMP7pgaM2QdSgcvZMHbEmsYRK3rC756CBQmyyNxXD411EzzBWVsPRgeXqy8FZpYrbermfTvb1e64qmNec",
  "key13": "34TWWX6dujV464T1fwYuWf865mvJp9xRAKs62tjHDpAppSYsy7Yhxg8TUCQ3zoxstXPRg2tBk4JVEYtRLihaGLk4",
  "key14": "5d4V8atgwkDDKchq8M5N5PVghwPH4VSAAfmTMEkysLC2QDTVgE3WKoaSWchvaueQF37ZtdV46cN5RVqcq9ya3skw",
  "key15": "4jcfgtRwoh5PvpQaW4M2wiUZXVfsiqdAbEVtB6MfJPawUDNu2WFepqo3Bw6AgxLUixNkfomtR6NqUHJEefKw6SX6",
  "key16": "48tZjHerJFqrX3vEmu7kPrhSCz56L5AgNnnc77yjDV3EU6v5QybjBzyqgmTrPbXoECbEKW5Akxay9oH6wj3Pmsss",
  "key17": "Jp59V2MtE9fohEZ9DL6Mq3ApEmVCcyzf7kDVXTxuFmBQwjx4QpeEU5fPdBT1xqCu1xMiJmf96ooGjxhooQpzdDd",
  "key18": "7JP51PZMq2PS15TD2NCSN9bLQcjr3T8rMKLPpDNW1eCUUwuCdC89WZSpgpqYMXKp6W2qGLV3foeEpNNwCXy92cM",
  "key19": "34EMhKooYKv8FUDGCagkVHBYh2SoiMgwJ41pLubWjmeUXVZHy3Sz1494SHxGcyD9Woq5g6aATSzXKYk7UA6hMQch",
  "key20": "1Xkoqa1GCKuRbN2bWzgfqmJEg7wryQu8QhxfSGeZ7jtBdYm8rRmiP9qiT9W56fphuFRcS7FtCdqCQZvr4eECjmS",
  "key21": "2GhrSdoy1Tt5ikHbN4bZesdgGR121JZ8LJUJ9VX72jk4efEJypLVCXhiFLNL3gbvxsGAApgDnYnwAoCvmtUpXJFQ",
  "key22": "46LVHVWWASPwUHByQ13dh262oH5cgkZajx84rg4ru17yhzrivu3KgQSgduyT2nDN2ynWYfjBAsxRgTAPNNHcnm6W",
  "key23": "96z4hQhHGFVBMYB5EwbunyJxfa39UgcYNMf9urkdpBE8BKQT8VnCUEyfSMZsfBonuTWiiPxYGXZvNwBfCrc6w8M",
  "key24": "2vSz4YnajvRSECcSvbQvGQsZHqGR6RmZTrNPNANiVCYt48A98y3sGZhwtmwfVS6U78RTuCAXX5vU4hkq7DJRx5hG",
  "key25": "X4rsHk1PTNeDYX5G4zLbnmagw5kHf534P7uCh1GawegAQuG1TKzhUjSi4xudxJkwu4t53RSan9EUFNrvEyvZY2K",
  "key26": "3DSivFYEgMKvZXpvBR2VVpvn8WuDbETyAwue1wfRAg66K8oTBez1eVGSw5Dzq3J829y4Hw3gsn1GChkVHs8YxAvC",
  "key27": "67PfADzxAVcYeMDAzZyiHxE5RMS5EbuvcirQXRwtejJHGzkQUjop3pykJJiSxcSdktuU2PEmsJa42zxYZhWMkP8Y",
  "key28": "5UJdK8d233RyK4Hms2Uf92mkL99HozfXwieKTPZnoKzs7jMtehpKVBNRG2KvUdKM8rLPd7cgg7WjqmcWmvy6QhR3",
  "key29": "5v9QMJSHou2RkXHqhedFbTLGzQZMSnsDwQHrB9xZzkscacaWL97q3oQH6XcpWusguhCcA7uMUA9ciG8o29VE4yJk",
  "key30": "3B2znHNt6KBCJMFNVDEnD5X2xPBVzVr1tE8N5NFSP5BuRva76xkFJwPRtkuR2RGMcJbcPsV8JoNwu8tXZvRpE1J3",
  "key31": "2ZHRLu8fwGjJaR3z6FbukxzH4hkuTm4bwgSTSDadK9FtqzFuHgusSo9ZfthozBqevSQioxnvLK32dk6TZUyQks88",
  "key32": "4a6ym1esrfK4giZQ9PpqGWRmUSLGSRGVZLsDGAV7HYUSCXv4gnGhCMUMG3Q3GyFqB4oa47NEhHNUdy9YuwYSexuS",
  "key33": "5vQ6VakSKN8MLffei1ZvVrqzWktcjzyh6tf3c8GUCRz9NVChbXRmScHHahiqrFNEBXEyqwyYiNzGcwmeRGPKAWFm",
  "key34": "5o34Tq21Gj6tz3FjCeKdcTEoohTaZp2nQreSRuCQs24XBtGxzW1AmZLFEmaShpBdes7EsEZ1ws2BqrKbN6nH2zf3",
  "key35": "C9BPhUYNBsQQhwRDWHdnXDURHwiZRLsJNpm8C5FcuCq2pPxz62AJrFPqDMhrdZhRTVXnfht4MWXZvdT37gZ7h4Z",
  "key36": "3eCUYaLfdC39okZEh4r1Buem4BWCS7WjYfu7DX4CyzLE6cavsvTE463C6CTA4WbH5dv9DALw9fFWhYs5o11qgbVZ",
  "key37": "ZzDKfk8LCbwkkrUhJKziL98Qioqr3nW932sZ6omZsuYZyYt2QG4bGqaEVFNrZM3hMtyJZ3hHegm8T7TvtGqdRqh",
  "key38": "uXRoqdJ814F12NQ4fPR1QQHWWPgg4fn8VZW9CTaUEK1MZY144BEACmpCDPUbyashsEHrqqkz3px8x5SPmBHd6rR",
  "key39": "2JTTheFExjQ5HYKJNLjSDVcRzY3YiALAgwotAYekuNNJ6YFrAfNoHyMRECCNbC99oXdYYYyxPAsvRuDRqNX8Uzim",
  "key40": "oSVfoy4wv5c8Sa5Lo8KjFBBTr2ptiMX1tCJx4MMz6F51t1HYpHRrBeDGoKj4sL1cP7rYYTKbfedoZyjxwSGC6VC",
  "key41": "5MGdAtcUPrFscyeyvaLanAngjjkzsrmqum1usQf1rDC9WrcxnZTnVNBWwmrX4JErda7AavwhEFoM6ZJue8gcukvk",
  "key42": "2fJSZKCWot1knMw9Bz1qG1qrS4wtxWe5pa3X5aEbcWNMc129XWzY2p5EwWP46xnjmn4zuBxA4fJZFcRMKPe59fB5",
  "key43": "2caWAQZNzLubEYE2UNtp4WaXNH3wqW29eFkbBsfo3mDV1X8seJMN9kicaPRQEHQTu8kii52KPU9fdhjCWtbykgmY",
  "key44": "3JBCk3D2uxuEe3SjggQtUoXFhxuiWBNSmw1cdYtzhTCRGhP3SuzAmsMncvgvU5UX2iL3usmt1ezSqXXVGHaHoZvk"
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
