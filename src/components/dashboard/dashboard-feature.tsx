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
    "3tS2N2BkNnLcqbGvnahbvupuQP699TPPk9Poo2wRDBbDPH1gohrrqjDbjCRFQ4BmeTo8n31Pj7rZRa7gzkBgZ2Sx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZyMMNVZ1Gd7LjoQbhgHXmRCH3zLaCVLFaZWSnQ1Vr47PbpBhVrTDtXg2tS4eG1qe4wyQ8effJdR8AdKAR2Lfmj6",
  "key1": "2t11MknG7SUFGgKJCXwJVo7ZjwRs4kxDLVh12KPLudpgAigKBd8wdiB8CASD55DugGRgwkKmjmHfphi1dSF7yojh",
  "key2": "2hcZFfXR6JKnLs4Bc8AFeSDjSwnq9HFvSdj1cAQWk67uwDd9PP3nXtsRcknVi1LYYbR7exHSkHkP4VBrzNiob1PU",
  "key3": "2aqAyehLcRNxW4WJKFJqGbiTCK7dq7jbNCvr5vjCVH5sAtFtwq9VY4a5LK4n4EuGmrreDfvNvMdVd2ZBzm5RmZCs",
  "key4": "2EYGaS8uviYc8oBuFQgxnNMM9uWK1kMYLusak5xT9Pd1j7NjvqufgKBgmk5NA9v5bVDaz7pabnkrijVDPjrePioS",
  "key5": "45cKQgsaKRty5Etf3kpvy61M98o1VRUDCkKay531h8asU8hFseS4UFuVHPi8a4KSmhRoKxXdwu7JciXX3KyLcg91",
  "key6": "4ie4YGWK4MgQhgimA5F4ceRL55Sr4U1BpYnJmU55JBLUShSSsm7EyyZ2yB9f7qJsZ4RYPfsfqjvQFxnyGgT96GG1",
  "key7": "5D7S1xtW3wAQU4oURKS243Vy3WZLaeRGe7fFxBK9KcE7Lq7tqZBB4yUG2vkrTZvs99Hqp5FfxszEDaw1nqXmgvjP",
  "key8": "2emfCmMJvy9PQcb7UhXskCH1tWXXn5DNP3qGiEAjjWHJMxa5AeH4vS4hnKiDbzdaDudhKHVhSBURBXCNLyTtAPE3",
  "key9": "2XsCF8pkdMA1dnwC2yrbPcVQiohPkA4bDYW4fqof2KmRjXraJYigoSzXijeop2pM87vLQmNYEfg6PRE6cyc5tLcg",
  "key10": "4o87pEBaFtS9bR4k4Sw9RkNQU1VoSiDAao2dB1p6CEZHkJ9UWYfzYm6P9Yx8Je3oexNoNpB8riNeufxWivHjK5dR",
  "key11": "FdEmMxR1wT16qpA7rT8NYQjb1Pq5zYUm78DYUFhsJ6DEye2ZnVd19MoftUbYAfy9xVhNLLrWoL8yVfw3eobux4c",
  "key12": "3rNYiSC9UvqvzdvV92kEuTVMWFfnTEfzAaZEC8T3MhboDWNwje8KgqywDEpBZiiGC5o6zPTEpudeKcitbik591eS",
  "key13": "3ipt5K5wskE6hbzo4KGDhi6gwN3zUB6ppqu4t5dJambX7M6hE4xRSHXaw5vj5Fk3zSDGtfFYMHCZUPkevBnzKZNQ",
  "key14": "kDR39uJ51gW2nyze7YfuCAcr4Fv3LrgEbqCjYmkKjyfH1fsHtLLzdxQ9tzpDWTnZW2PxBFXYhBqEG3BXuJ5Riek",
  "key15": "3UEVuPDeQjFNr9VGZ6GFTRtMNTTrstEaQVQ651gC94oxZ9PPC9GbqK6sd7NFYTBsmUT24TaTo6fnWNAUWNPRPtMg",
  "key16": "4tmgYSYE2WNycAZwzrgmQpox2zamJkyCk75pusDFZDTrYq671g2bmUU7htQd6mM9H4AuUgNLrK2y3Z7FwUUdzye1",
  "key17": "4yybEhHiBujSjthVewzKuoLsKb2byz8GdEjsEZ4HXj2f5XtbbGeiWBtfJHarVSNAKKGdtupVBT2deBqWBmPpqLUK",
  "key18": "66HXQRhyZ7pbNM5prqUXCyk4wauxLLrvukVD9zWuj7v27YTf8kFvwD6ZvGbURYyVvcwyF72Kr6byeXrKVJ7aTL8g",
  "key19": "2m3MAKykEfWeBr8nwRi5R1ptS3Wjmh5PzU1hNeP3ztCCkKQkmuu94hXTcAhv6x1P5EWCvuZiyQi4WpT96ZkmKu25",
  "key20": "L3SQNYwGJpkJnkT9wf2p9JYiKUzm7AVCYAXp5uvhzeVZYjMXJegZ4nTZHsYBtyvSnfkiha6byrddKQkvRxfWRZA",
  "key21": "314QqPRMJHX5iyC24E8j5SrxMCzhKH1zXjPGMTZvDS9ZPmt2D1rpgg6cZ1vtFfHWTiqcc9QjrD7jLCgB4h3fLoW",
  "key22": "5dJewrs4EwEvKCuPTrMpS8QUwbQkQ4nL4vJZVGcAKsELGGCk7QVjDJ13WJVcNGpbzSrEwt1Eo7snD7FXWKF8Yiiy",
  "key23": "4ZbNt52F1aN1PidPGj9vwpZQZTDe5Ct3RPsSE1m6o4ig4vu87wcZLknz8xtzNh5VA71bsYhvnDNT88rvj4qxFHHo",
  "key24": "4dRtu8ztahFiZ6vahs45TxaHZau2E3oA6FrfjypsGkccmc1F6Mi25DnyxL6yBA7LBYqvMbjjiW2y2hNRjJAck42D",
  "key25": "5GHAHMKKPhML9xEuT4Lv67eNkiVkC25P5rDoTAHaoj4fNhSbFcfZ66uFxfQNUk44SH7PBjp467k3Wp3fm6myry8p",
  "key26": "RTnPEfASK6FBYsYokJ4SSVKUXoGupXkqCsJePPeV7WaLBcM5fy9xxDwkiYARj1Eg2sZwQ9ixh88frsuYCW1kiYk",
  "key27": "4fXkyqnJqmtBBbFWu64QJPjAf6wkZocWsBbBxQP94CwzwN8QtVNYr6EzkSWZcyaBpMRyKMxLGuyAi8vhBKGiZyeE",
  "key28": "EFKGBLoYsebsiiFBJC2PZxqff2kQ8trdt2w9qMEvkdbomaKKGQw5h7tGkxQD8sQCWQNFjfFRers6hBkDgVHJtJj",
  "key29": "53ueKB1MMt5htRTboMbWG4riqHMCwv7F8Z3kZ5LrnGzKaAgWPsDjyFzdgS6aDM7bjPHd5EfZspCmQXSq834kRuhn",
  "key30": "5kp2Wsmi5RSBcpnniJWNUKM1L1ozkxXkDSigWKFaXuB2Eao3wykUnfec81R4csWvjYESjdLQknExA6p9e3eRJE4A",
  "key31": "3xvm1qJSzPEX4sR2nAjv5PtRPaAoB1qWtAu2Aj9iKdmkVTvELHUrU5sPEq8pPSq5Ybdf5BGoBxyvbZiFygFgCFcC",
  "key32": "48oTJpjAdqWX84So1oyPTuoirmRf6kLSb1Xw8wEUhV1woSbBodC8s3nfDnmbVEM4JZqbQSkZZWHfGBKhFF7j7DS1",
  "key33": "2UAdkvC2jbPRTjfpw23FSvd5mqckfhAYAq5ac4iJmxsLbR3PX1Jvpg1ZPfUwJKYGXWBnCbpPvZi3mUaZmc98ZWcD",
  "key34": "4t2bJzWt3Kx2G4dkMbzbVCYrfCymQLN1nM78aZhs6Us2A4UYBHEUDf8AvPYr7kj51mzRAWmcjHRQktKrpQrtz29",
  "key35": "4nseA5HJMScp1fFR7cxWewR5b5kYkSK5z2uZC2McKNjStAfEZLws8biEERrxhFTQ6JW3ZPooDhX3m6DeVDXzTQ4t",
  "key36": "bMULbLJxHYPCVkjjhrUhNVW4f9oPL88Ue2Hab4r1Sbis8Sw4vsDD5FQ2m58KEyF1BcdJcVAZoMpRnT9RF1boUPw",
  "key37": "5bsBtbHSV7wLCnjydqkdXZ66ofqsbjmEMbkSD5eEDi3pGJx1uES2y9yX1p8p81Yv6CFzuLQerMgVq2vPx51ocrW",
  "key38": "5NsERHmCJUexpBYpWXVmVFgntW2gF7LtqTNFjzyTH7LtfF8jUYCiWJ7Mz13NwQ6taXZbF4G51AoXzNEpfJJxVKDq",
  "key39": "3dqnYi72SKn6NX32Aud7tJ8xJqdeNg1vCHZGmnqdFGk8WfAh7Ake6eEXL6oUs57oCEdFCerDtJZRarGM2scnTLDB",
  "key40": "2DJq4j4cQQY6HYSHx4uNadMRnd2uqrkfff2Pu21km4k1WDEByNwjptrKeDZ3vN9gyNGu7JiiBewMKZmSzQWVn7cR",
  "key41": "4wiZKVVmDNAquVWEGxYavXyM6PDkDagqbmHB15xBry3hm2KJ5tzy3up68K18t1BVKcJinUsRUtJLsm5LdYFiV7HR",
  "key42": "2L48MJVHk3yjk7nxiA2Q5YcTxARqbUzYbQaiRPFAZRnPtSppUxwVmBjzNeKa5LphYncKUQk6SaTzjEjBx3iakNZ",
  "key43": "3aMzphw5vhMUh6vEiSyEZybtHBcLiZP7Wb5jAfUxNaDMerwziWjkHuRH87z1cxDyTSWFaDGDop2hh6US8QgDxR3Z",
  "key44": "jB7ydhuVUgSzEe1BuyNu5jxTeK9FdXmt2SDvcrvRN9dNwQJNHL4sVDg1ZwoACxxgvs1KxmhKSP3c4hPAAvngji1",
  "key45": "3KgoRc6A3J8coHH9iQ5dhtTtnLz78rzauJzV41E1WwbZb2hqwTuChB11duv4QS24TiChrfdMmy2k67Lep9TQkw4f"
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
