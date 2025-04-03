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
    "XoJKHM4YbiukD2t38GCn1GTL9jiRsrSpcnzB1wkGGtPSBWJBZm9tQDXccTWPWjaVFzZeU44vto3Qvc5oKg6d4S9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XVwQQDpH3Jx6caRrSYzNsU2h4NmZuaVSJcfw4CrbxAWFeM6ik5qcmZmPaaJb9k3uDgEgw9V292sdLEdGdGrxbmv",
  "key1": "3U4t1QARWWL5VMR7EPPSUEL2VffVDAMF8jxg6NnqPwmnvDxpsNoR1PJRSCVgNz8vq7E4o4JzYKat6y3hnJn8kbkY",
  "key2": "21bLpquz2FxtgRf9Lfuw11gur7S8wMWx8wjoM8HMUnG1EmHTzE7VH92Cz9JQDbeMEdoFX4JkbBdCjU4qK3xYTsfX",
  "key3": "2rixwTiQmB8bLnyB6szCq8De5gmsZh135jWRRs4avL6mhG3UhESHmgxhK7MzwwNSkUtpmN6bjNSAeAffNRFVmoUs",
  "key4": "3ZKrZ59tXzAQwxmEd2BRtmtENy4a6nHpndAhTNM2mEvZUvdjUuMQRdqJoSQ44bsRfnci3MuWV79qy97w41APJrLp",
  "key5": "26xQYf65nrudGgbZyqTNUFpkkkJcMMRgEZp2T5BkPTLnjy4pjJw6cHqfSsVHJ41LHbbHGxKQ7A2ak46V4BGjwdCn",
  "key6": "4pJK8X53Bd4jiWCmKc6U3B1a1B8K5iyraiTDg7ZYoqPA9KKDqfDqz9xoQpHmvpvjmURbxEoMJLDdWwSzxY4DaWsu",
  "key7": "GP4yxMvCxerHgs2S6WjSNAfXpSfYR4P6oi1dFhV26Co5s5ZTt6nDH4qwoDdgKzTUXgsTPvGa3j3WiiNfKS37K5T",
  "key8": "24gY1Zh2Y4yi8Hk7V5HMK39REDdwQSSbSzBwLGpHwFpxGCZ4VhY8tUuoTAxmjrfhD657nFd1rGsvpQRA8uZRauTJ",
  "key9": "4C3zDdfsXGVGKxJS5BmMzMTTEA5B4KDuramvAvLchv2JZHJswtzBX29xaisDPUkzSedoUWfGaufNHLcUTygimDJv",
  "key10": "7fbFr4VVvBcQuadnugPvRk1RcjwZHyZ8eeg1FJWpXojYg1hoRvgNoW8VgsEjmRPXE7Hv58Z7FGytE2K2xkkpeKA",
  "key11": "4nPJDm55oXm9d2eFB8g6auANVKSBmQSryAA12etEvtaPJirFoG75Rj4eEQ2nXJFoQQVk8mDpCnSRB9GkpkZmvgA3",
  "key12": "2UKvULBtPEL7yMHGHyYqw374iJWcy1pkXZqf66jgxFYyrjq7Gif5zyyoBG1L9tFX9JJGth5hQSufcrs4QBF55KAn",
  "key13": "5tmBrwSLSVriTJWxvVwzrjyJpgXL6EUTNKhdZT9LoREz8MWX5jgNrDhJWeDEfFQL7rmiUHrq1DX28UrnyZG7xdiS",
  "key14": "41CqnMBobnWGpUNjEDakMMMDqdeGcfDJBGe48TNU3mmwp6XvmGmQ75fpCtth9P39GNkafuwKf7ABXVQbLbvtmoUd",
  "key15": "5op7FqMsrJmM1TgC5J8CPHHHM6ejzEU7UwSURFhFokWAGsZWBVXUTwq8wQ2NEf4NoRETKZjvUAYQdoVnqsJd4dn6",
  "key16": "2RFJdtGU7rkWKQDpRZT1uYtp68pW9vWUfGCE9LrSHzT3R1LuJjBQ9VfwrdyNk72KXCBZAzGNxzU4DknfN2zxibiK",
  "key17": "5fjvv9kFMKJ3zv37ao57ZjptDw6KcJ1mVyuAomckLYBSqpqcEVx3rrBBcVGnXUHEsSi5HdFhbza9beZd8nnfmBJV",
  "key18": "prmm9XDmk2cpmajBud2yzFGMN3NaqbFfHPs1YstryZZSWWfZxa6EmW6jfM7bhLHLZTirc6sh116cNZXwxAZQzdV",
  "key19": "5gr245KvQvqT8BbCv5wDMQ5tmivVDo84qLBCYFWeYLRRrsb2Pt8xWBDNKCfxDbwztY378C3cURoorxBuyfGmHSHV",
  "key20": "3z1uCgU12ksEBqSAWrsV3cyDWX1htCPSMmqeHVLUFti4eSiJidatyG74kN9yR8zz49huabrzUWuL52etKGa7DbVX",
  "key21": "42BgYZQJeAh8VnZ6eyv7PDcR7dBhNsdvJMx7kBetHULTqxjo3UE5JfGzKmptLCd9pVQ5nERsDcT7tALNfxvTZ6M1",
  "key22": "5WL6dTfuuvx5QrsvF36Tj6Eaec8U3MpfkqnjkX1YNVsZQY6REka5t8LmiHtRhzBRjp6vV4qHYfZ58JpdMnb3PhK7",
  "key23": "MS69G7ACDRMmKzgnPZEz21kBqfVt4rkPLjyXMYRogPdqzVxp65Murh7EBqNpZnnvVKZaMs7xmJbyPds8hV3Qj3q",
  "key24": "4FMtAG2tMHgARk7wVxx9noW6uJkP7JGkLw2QChgSekftbi1sR7fNobDDvQdjCst6atLjfLNiZMHGukjYd9NsFCD1",
  "key25": "2H1n69GimNoBTNZs6s4iJZyFoMt9c392KQ6rQXZYPStpn8Fo2CnR4neYQACGdThTBTAqEJAdSENi6yYD2rkLRygm",
  "key26": "2RymbbMus81jvCfr8yoo9XztHSZbQLiHZ6qZuHZxaNjTH7BJaWYD6DeAMhX7rN65oEUdcDNLo5J5PH99wu3BQXP",
  "key27": "41v6VGqVEAAToH8r7hQVLhgK6EFtJWG4gAVXBEpZiLg6wdyXma8R3jhCtds112XExLoKhmMgsV2AWndpAYsZi95f",
  "key28": "5zCCzvad65iF1moxZ7QjsAbRyDhNm6pUXJ5E9JgJg1oa6G8FscHN3K4rKPt9ubMkM1MFkJV9GDGjtPouzjuuviiA",
  "key29": "5ZjujWz9zVhtfPt6vWE4R56k5YSZ59GsjMWx9ennGamKeUkoPXtkZKTNEx9RDipeoSbFrukAKYbUHRRZnaeHMXj7",
  "key30": "5CSMhhQd7E7rjVRU2UwFWkSM9HW2w7p9z85aqpMModXYHoo5DR3Qs1WdAYAp9ss72j9UpkAxT77tiqW1gYJto1ua",
  "key31": "5TnLajD7uutCCCCu6WYJeFns3DCmdFBDsDQ4gtaSKwMZhQ4rprCjb9p2ygTwpTW2LVP8hWS8cHbeVS48ecWDreYe",
  "key32": "392s93UPKwN1U6KBDejU9LMwSK54e8qU7tqpq88pzcepgQw5sBBmMQ64a4oFEqiHGEEB5gZGEjMcLTRx9oLvQRBv",
  "key33": "2PrHvLxxftB6kEJpyvVdGPTu583CnHqsVDxjhWyHqWgAHgF6gNRkkf4bgTc3BCdgg1EFx93oBzMzAXWr5SzCGpfj",
  "key34": "5YxgB6s3boJC8nRkAm9akg1aHjNhQhaeAzAjygQ3QTrBm9nmXkvLjH3zwJcRwBsGkPj51d6SkigGb8vVrKHMGggn",
  "key35": "2um1NKSri9fHDZ8hUKqupqMRjthkNQ1kPcCFRNEpaf6tfYpVNVLeqk6VcEcvJmRpfYAXhgQd7aAUM3z2qyKhKie",
  "key36": "5ciNeyZ4JYRzfFyeL5hVu6X45rXgXZbPeQJGEmN4C2GpaSajBpWPzdNeQywd2EvynML9qW3nuX6qXhb7JJmGGNWj",
  "key37": "65mhCecYXh4THcCvaevnVV2Pjj2vjw6bd1Pb7AuLzXnKB1VrpqbmgH9hmbFNh6YbdQm9ZaRUpBZYEPqMRazDqUcY",
  "key38": "57E1bCP7W3WNBWrSkz5wWC8voCpJGTWxSZEF8bJwqBHTVBxx1Ujkiw3P6Qw89S9y9HJZSU7UKC63yuJdK1ki9Asf",
  "key39": "5a9SQ3czQEAFMVywg8C3AwR8nsmhH4Gxr9JnBctHvCrcbj3t5kFLW8kztAvtLCZ54dnEF6QtDasQgQBTz6nDiTSQ",
  "key40": "XU5zRC6LcYM1Kt3PU4BWfsNSrfL68mBohoDwSMP4JxsDnRGHsUkKVBKBW9avHQMAGgiXRA4irgtW1yy5JjG2Qjr",
  "key41": "4NhH84YTptZ1YY7uvJUfHZUEF9X1ZpvThJRayGAab2ygp8spkQTPWTRuHzUHtGEGJxwXN2VYdzGBC3pDh5DhxUXx",
  "key42": "2Hrp7SsffFfjPYgQZTFVnmMRyxNFgNAkTB36T8baEiFZ5YjEMxJTHpYFvHk3LkvHwhRQummfo5fGppobhn6wxMHd",
  "key43": "rrxFb6TocdmMrT4yyDsmvMqnAje9k5ikb5pN1mEk9hTz3ZF9qNW2cxgy4v1rWSVuA9vZG3rSykWor7cpBepAWAo",
  "key44": "g5tD7xVFEtFsGuqTDjr7FeafQWKJg89AHEpJhGK2ymRBx3tR6nYTaW7cWuGwaUdvXT1q45ertHzz4hKqqwdCxDN",
  "key45": "65wj6mViMV8joAtZwBi9oQYxxixhXzky8EFFBoyx1V2frcUN9bfz5m1MFn1BQAbFQQxm7V6FaH1qiSxT1YzEDDgV",
  "key46": "5k7UzvEJZaodLgQ4UVq2HBBfmK49AMHnACe4RAhPkiNMNyqF27k55Yp1wmAJgsm4pqWh2Z8yne5BE6UmLzjcorJE",
  "key47": "2EdLV5MakKm2tp8nKwcH3Xbq3vYx7Eey1598RJrt9t2PV1b2fXJbMNJg61odre9RGhypykDeU2uCw67ETtCnVwFc",
  "key48": "36K44mWQpHUMxeRHfCezP3TcHsUdFfyyEUVXWDZnSsD7gWQN8pGY6wkCWPrG1W3wfSYUubrrt4yv98DQFZVj6oiu"
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
