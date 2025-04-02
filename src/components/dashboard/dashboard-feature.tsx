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
    "AFzJDzR9m96PS4wUjVTCggu8Gj3pVtcm8JaqhuoKsb4VepGKLLMwHLpKki1GoLDxSZBnfQNzfV55ZJQjFVyJMsc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NL6sU7tNfZGL2y6Ns6bux2utfwN6xhzWqaFHgU29i65muuKBanAnt6Vypo2MYxzHidsdBLWfFzqhyT2L89zAic4",
  "key1": "4qL5sTeUMdE3KrNytYbAdErE984sZfsZJzxpeaLQk6UbgRKKFJBVXfx56Ywhs9ibUJi2SN3MSmQpSnmCgb1Crhbv",
  "key2": "5PjSaouHL13ni9o1rPm3nqTZbodPPhnbZQVoDPH7tCMMcRcJghfrnhyHdafV1fzWHKb1Rsg6tU31xRdwjAXsWSo7",
  "key3": "4vKcVXexsHoHinRmmafhPq1aaKRe6oAjVRnHt6o6tmCXy7LaTJtX2XPBCdxfXRxPSPLh9wVuHusqJSSGfhQZCmzo",
  "key4": "2DaAfNnKZ3ZY9uhtmpm6wj9AZ8t7VEmAyWUZKnapyEc2oFS9Xv4T28yF8FpPYSiqMopnB4aHjYgU4u234iCwAuq3",
  "key5": "aJ3U5R4N3ao9LPgbzYwpGfkwQxHdThbkJJrHZpdWdL4MREu4VHeUo2eDwnQujFXKepjpnCWq5kW2f2vfAtZ1qSB",
  "key6": "4hTp79j93Aj5rsdEfuWBiXMjctFcTt7BdeaadyXJfr2NMm8vkAetM5PktxbQb9TuHSEBa9AWv5U5kAXiD71KzjoT",
  "key7": "389CuUqGXKz2NV34EDYErU995uKV8SK5BVjdyfwo8V8qKRkQKCMBtrWNKvWiRwf5HmXeoVBrHnki7N1LfELQFH3f",
  "key8": "38CKnRctLbkNq8n9LUv6VND51pegfWGerVjyxZNzmHDAEBunSD1pjdK68i6qGfVkPqFan7TGcrTjwDVWskaBxXPX",
  "key9": "3hf5oM7P2KUZSF8CTsjdH7XWsF7x8S8QZEpsibKvcHAK49Uzy6ZFwB8K9eJjcUWeaXosow3EWJ76CHfn7SUYgnMY",
  "key10": "QrhR4QC3VPuKBAFVnMxH4qjYyBTRLALQJsHRigkn2sDYEPHghE9WYUUX2tuGRsJhj22eZQXFReWFa5vxYXSS6ax",
  "key11": "3NH7q7VJiZ1exPj38EmaYoDnBmc3jHgHY2dQcQwDLykwxLGUC3Qch8TEhE8uDzw4GLWWP7ipVi1PUavxiKefZf2Y",
  "key12": "5qDBaBegxiYHNiNMmecsBk6gS6b25T9zY4BV2dR2nLxLAxTxbJDhuJ2fDfAKH9gDNEfSEEQVADMuwDeLTVJGjQMq",
  "key13": "47VEomyNtLKLotya6q9VYTFZyu4CLnt6WuRsynF8iTTRRzxVwvjEhMEpP8dNUJtmU41YhLwAeTdjZLrm2nW1uv6j",
  "key14": "36BJgucywPnxfaYTgKqifvL1GQiF6Z83YBqZ1GJdoijtMAJwF5UpoqQTBC3qPfJzo9PHkY8XuSpRcd6gRrL3feg1",
  "key15": "4EC7zajHqukfdU3HGBJ5dCaATM55YvXdiD3nHsQRCbxoLpyemcbCUgpfHZWuW3fw1vKrcwJFF8poAWDctykbrjY2",
  "key16": "3W4MoHL2VpHpmvD7i43tmgsVK2MprAak5M9cuy6dvoHoYoXcZ8cLvzKWEy7DGhAFbpViNSvQjF2y7ZGJoqU3yFSK",
  "key17": "RJd9XMu9TAMjEQbPjCkfADrZjoQWSXdFBmfR8SKiAYz61HmJcyrMEP13fXqMcVFXoKVebwWqCzgtATZaXdat8Mt",
  "key18": "2BoN1wvUmiXmHLk3zsSPNp1NcMhdUiKDHQ1JQofrCx76vLmuuKwhQw7KqZcqfKLNgDiVv3EE6rWKpod3ciRgc2n9",
  "key19": "5sMynS2NQPvEGU9aEKWFuEYdKikRZbBcCkWgNNzKHSTdcudyfjyUs4SkBBhHbFw1srieVNgbfigsGWV4VtS5s89E",
  "key20": "2Hd4nK6p4T13n7eFZ2SmjkKXneYbB5Z4auyRRpAZ4UUpe7d5ZM1ChaawVNCJFpSGHCUTAch9e8Wk7regQQMFAXQY",
  "key21": "3ySVmaPYuKzjQY4VG8Gm4FpN4F7qxQshCWyseD7pWkAZ8dtWVr57KTLDdpkh39d8VpqjfZXbFKTHqMHHTKyjRjEg",
  "key22": "4XdWxu1CUgyTrK8VsrqXq1QiXJDtXpck9skJQELNeWcJWbkepJscxCYS5CcyhQAb3mxux4amcyyAGqwDe3VdwHhy",
  "key23": "2XCZ7xR8geLBDLeoa6eQGCH6UnSdVczXfqhSFU3cmpeeGQHW56qP6inuLQxD4jSDNksi3eLXJ1y6L5EsuR2PTFy",
  "key24": "UamvpEYwANcthRj8DZKEouVpLaq4cpssCtXpmADBP9ediCQ59u5jWb77wCmj77GSTSY7qoP8U2HgJWEG5MgsLwh",
  "key25": "XyzCW1cGxYXwAnnZjn6T9SshTCh8xbKwCSQpUDdKgPP1LvNhmwgFzNuTwaZLZKKcRTXGHT15BuhXen73Y8RLneS",
  "key26": "4fywgaRedKKvJVWMgGAiKHm5Epw3hkeajN8JD9eVhxybnhXzC2Nr4CQTCX6zcPzzxRCRBWiAhsK1nN6WDmQyM21U",
  "key27": "5ZEVcrZhWkXzcCkeSq4ntJTcgL3yPk1ieWLr3VfZ5PqPrqh5R6Uxk41iqMAeR4LLkSv361ZPG57SUPAnYzLgX21R",
  "key28": "5pphm9nMdWTkHEJX9b1JNevbwYoi1rYqXzW3XNXhSZkuwrmW739Q7fNTrVn1uCgvtpcLEUQcQgkrW2Ax2QB27Wwx",
  "key29": "2pb6zcWrWGpbNMQHqMUwnP3FMD4eu8dh4VyWyCfbDdiUr4esnJyBFZEYWJhuCy7VfhiACDcNQ276oAU7WR1Sw44D",
  "key30": "rwsAKWjiXM8gbXzqY2fCsJp7mtaqGru7CNSn3vn4UyYxYKHSyEzt3h14U5PG2G6VXJsg22BTogEv6HDaJMWHHw9",
  "key31": "2vY9R98W4BYcrvCs5CpNHD5qKb39cXV7gXYRt9kQzkpsiSY4YoDQDJ42jTpz5mJEYfyxnknqqTNEE51vyZfpntJW",
  "key32": "4dd29HoYbkyA2q5Rn31MVFsT94nu3ZHwsnV1ibQMQGm9yz3vMRH6p9dwtNm3Zhiuxc7VDgkm383GFAMnScG7oDXK",
  "key33": "5A193Xq4kKYfenHKqjGyo8KRQVUHJYyUd5MvMFbV6VzH9izd8ysM6o1V6bf67EWzW56v8wXuV1JeBThMdedtMA85",
  "key34": "2YZ6XXd88mpkfN432Q6g35tBU87P1SiB985vqXBP1wnqFpR2GTuNZwvQ4QWKj8V87Lx9wkz6kWhSYWJt4WLsJdVD",
  "key35": "473veREiqjrLe3i7BE9vha5rkS4NDHP4VqZfQCgRQnqSjeuMK25HEomytp43ne34n9qohTmh1Ch8sjXgFmxRXgSF",
  "key36": "64ngjE1mLPyCFwgzMsEEDecdYmorHQnziv4RrFS7VpUwdhaxJe3KQ3FBqU2S74ZuaWv6ey2ksJSZNQuSqZGA6hyz",
  "key37": "3Sa9qvXe6mykg2RiYFkjrcsgtjKBa4hXkoYxRLDJ2BvV48jVAPpcJtajps1KfFbectG4EUhfnEHjSqpSB4WeZ1rv",
  "key38": "449QKFVkoMHBGXcze67UQN9Sm47khE42q1psW3MBivjsYYe5Rc3Vfgni6WKTNc5kxtxBJi6hutjwVwH13CEzLAy1",
  "key39": "2ynRnwVXPLH5Gm6pC2GntaiwVHh7cLhbT3GoSFRhNpdXFrsFZ8qkHNeW2Tyh86z9WjnL6YCZZRQHVMk1Vs1JAGKk",
  "key40": "2dULtmgwqJ7T6kDv69zdKp6kXAwdHXjYDr5GbQbx1Lm5Jc1eHoo455AKRndsrizV7ru2rUtfBUDdUuzrKK6mympG",
  "key41": "2Z3UvroraKpMeEEJmsdhCrCq2kPMfrm8Dk8F41YZUuocqEviqHpyPoRVNVXo2QxuiEX53JnENJxNUU6UDhpXYdZf"
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
