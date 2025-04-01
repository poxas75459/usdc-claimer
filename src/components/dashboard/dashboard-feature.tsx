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
    "3CiCUHRzPQpRD5uH5ykJEoLQoKwfgbMUnpYdVqHJPdWAcyJXQk6MKrEJCndJy9dxZp5oMNZTG7x8ueadkUvKRqcb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HhF54szsUfYnGRqcUa5QTywBQRkuXEnEKJ1YLjNJ4p7qoWuuxqgw1YocUuG7wXBLNSXoVeiowR3o5zBq7XyfCAn",
  "key1": "22RnGGjUddsRVUwYRvoAjbjxZhWeCxCg3csefVL9SYngUsChLMzc5hVh4KpQxn2V78idypwnW6vGkA44oWS29VSc",
  "key2": "3Kf9zNqAoJcTVW2Wz5Bo2uTNKBwyQbCTmFG9u5vPtp2QjNecvSkGoYLkmYk7zRwihidZefhPDNqFAXX1JxigVs4u",
  "key3": "3RiQwCT2ELVX2HHvQ8GrNPLg26PaewD7RuKiucvFnfg431y4eHJawjVv2P7Dr39jyUDabqaVfZqM6PNsQoQGLWcZ",
  "key4": "5BBYMLe6vxLEXhivAwjxVU9yt3ngovaBHNt5hyAch7g5wfNeFJAeYyDA4NoaGHmPHtpvcdnCmLbjYhBhfe5w8aQX",
  "key5": "1ZGWgfLpupWNXhWpdirNvmuX2X4tS3SHkbYQpJAk3a7HcQD1D2hj3FegnGY7EQNFoP33sPGCkMzEABwt9wQPpXf",
  "key6": "4U3HLuzXR9BSdB2iUbEhP3H3FhnriuSSVbQMPDQvfvcKksZXjP83M1aAK4NetbGnkeEyCssDXKaTtgKk35ZQdJgh",
  "key7": "48ZBCHveUT68xRKC13ejpLsuLrt84QsYbcTxwJNMHeWTuf8MknKTciaZpKPzAE8JTA1Qq1XDnzKyWphDarDzy3AV",
  "key8": "2YhPWTfJqiNiw6fJCJyyNs1HK7UhmBKqiMmUDVLeZmyFyLnq87xjB5cppZmX6LJsY16WdwEtAaoP8UYPXnSTWooc",
  "key9": "2174Au49QeiWzLY461aSRjihNdr27GRa45rDEfKPVsXDy2wZgy44uiCEkX1Hct7Q8R2HUsNsD1B5Z419c2HH2k15",
  "key10": "5gz9T8WoG6mhtACrmgeiLyqd4rsgL4jXj5nxUm3ch6w7RkWALsxSzw6nno9oH7qSVvh3VNcYrcnZ4H2Kirg4kXgR",
  "key11": "2PevcLpndwGZmZ8WBPHerXRL7wCCpxpg3njorvLYjr7yLSioQV4h8Jvw6WAKVjsdzjxj181Qjj1zWhPB2GXgQwPi",
  "key12": "uKiNxN7cYX3BWe69PgLGvPwoUXj9Z4CWat1BE2kTXVCWirrjU1K2TGDpU3bPomofKa2i21wsrfGe7KZgUhGeoYM",
  "key13": "sFTXdnUD9s61vm74FMbFK73NjqZPmgJdquLaNU6mSPJMAVD9qtmV3nw2zTJeBvscsyRX8VopKGoCe9WfyfzCwE2",
  "key14": "654dn1ibGb5RaNABhcL9ikVEMD2wbeTNoY9syRVsVkBcJJrnrsSz26Bmus1tbjnK7jPVvvzH6PTdVhnmvE5jzcia",
  "key15": "3vbTLpKBwSvZQQasWa3HKQDdaYdSLm6qneqbu4FxjX9q6HJiEvrisEvj286WRYLjozXPNorELVS98RFGsTKGd4oG",
  "key16": "4p1XrNRxBpGmWFVrar7wFtDF4sowcV5dA5sFsPEKwT1jzfkb3kAgygoTccHUs1yCrbX5GJ9b1LG7c5SqT5QS9ckS",
  "key17": "3YZ8zn1fYi2HpMpFhUrP3K3RFvnkmAysy4cotyEiwtQcaUTzBfKcX83Y2UTCZEJvdK2mYoCaJtDisq44kqABEkqc",
  "key18": "3uaaLCbsEoJf37FFqKXwnYjvwWVWoDiahPkr6SAtJ6CpWEmk6EXMQ2jomtSvRso9mR59mC34wzwusP4SDbhVRFAu",
  "key19": "3hYwDCD95jJPwZDDPe3ZGBLP5jDJLcc1gzcK4D4bHAxDqXgEKJt2FvpJ26rpQ96fzUjYCrDd1QyLNAFYw7w6KCKo",
  "key20": "4EApQg4hUuGQWH2VRpEDYtwa3PcmPotSShokbtQ66jMSAChBfr2hUfqFkohreh1RNej4zHLvFtfFpb4hPY3eLCdh",
  "key21": "2je5kp3euAxLD1beB8zdyifrgprj5Za8xJaLaAByardxeEPkuVqjGjTgRvgJ2PFu18FoHuZsPvTeJRDjpbxz5KdK",
  "key22": "PBLLvZgo69SisrCUibiVW5fXAmh4ih1HE2MeexfUk6GModCiUmkkXHSwsfAA2zRDie48FCDMCdMuGSVKBg6XBaM",
  "key23": "2FFArdBrS5Ytxyr9RnW7Lm1QcPDyy3hf3eGS6evZmtyWCPkTmxfnYHBdZbScHkYnhzjEF5KW5MAT1Sp2YAUGMtrV",
  "key24": "4U8Ptm2oEcLhs2bqcLcfiNmP5DsSnQzQeV1kCNUZdKR7wENQ7XS95tqWmkM43kZSNktDG9yjmv7owVMEkGtMzx3h",
  "key25": "5qg9sUm2w2ueU9FkN1WqErgr1o8519rSbRhQnrgvnDcRmr7qK8M1Kk2JhVDXdDdwwCZEYuPkr1m6c7JMWVuk41oM",
  "key26": "4hB1Hq86GPK2zUfzRZqQkjbMjZ9Qgqj3y74UcSxkHCUwPBDqE2G8aPnrHNJSN9F1AwpRsWCX7EruukEQRgmejS7P",
  "key27": "F4aX5NgBY4dFEVksq68FXxCEgu4HuuMq2ZHeU5vEknyuQmTuDHmcAysg976yVLT88Ea6Pkc9Gb8FcQYp2obaeQv",
  "key28": "3retefoiqPRNsum91auDcSEGWaoMYDdhh81B8SNo3v5nPbgRefQ3DCuvobZL9FH5GrWtMvtWRtMJH9NDNs4oTjPo",
  "key29": "HrzWgQhHZBcvVNKJx7PAXri7k6Mz9QANbL9JoXHDTzA9DU8hsUhBVYE59VqXs6Z6B6X2keZEGuSf1ror2hJNUpb",
  "key30": "3AZK3q7w73NrFifCH2Y47Veje5UrJYz1YK8Jc8iP8vTyBNvkMTeaKSUmS3KGXAv1Axomdz47pqePWLvuqzYRvYvY",
  "key31": "2KyDtYTyAmip2hSurbZFUGE9VN7Pm4JfRH1VFFPqXAjnwUtBEkCLQuQxLEow8VmvjKHtevYSan6eoaeSghVjh5b3",
  "key32": "5NkKquahTXUCVweympoihCCqr8fTmfq55aLYo3gbQgPcM6x7Kc7k76255EUPwMTyGsHY4EJozsAN2cjD2MpLKNW2",
  "key33": "63KWR6cswAKZPALHGKKqzXY6hQisPi3TN9TTfZ8KJs6Zyf1F9QBPyfwgr231ca4XXDS8ED31HSLbWTX5VVAosc8E",
  "key34": "5W9b7aUimoG4qhLux3UaeZ7Tp76aRgu9fTkNLiD7FzcXqsog1Q8G4j5ndXGgH1QqKp9p7UQN9mASsaMq1BFZxsg3",
  "key35": "56XMcwh9MYTTaVu2j7U789Y2PMyr478tZYTMvFFE7FHDtmNMiXw5KgxuWcV2aum2brMhYSvJhmoTaXwN3bQP8iHh",
  "key36": "4VVPRcb1zHaQbsXCJknQb4CVDEidhiRLeRQXgr4qF4xBMd6Eu9pWjrbBMqpdq22oassUqnyeFKuyGGDpRru4YMAX",
  "key37": "2KGujbqBZUjffptTEcbfiG3b6KSbQWA59jsC5nCwrgZhspboKpFzzNfmpKx1Hh16bEA3sadS4EE75WL45MHHHgFH",
  "key38": "2wgAFmkvGs2ezKyRvxKRM8aSFKu4eZh8ixauaxbzEKSYKMGjyRJGTfVwf1yFf2vPkDvswk2wrSCB6WXfhuWXXs3M",
  "key39": "5xUDrojHVB38ymZxhdePUr2GmbFdUqprey6YyiEFcBQ5vzVqERTpQanGySnwKZQpHCnWp6BPJUsEcWkznRBfB8w7",
  "key40": "3VZDj1K1VKj6zvbDA39zE7xMv3xaxexHUsEQBXzomjuyT4xXLdVnfiLN4F4GjFVhTYog5644odFc8e7nerju4fP4"
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
