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
    "5Wnazz5ju2qirUTguHf13SXEK9PdznamvJPvPUSn1zxrKBA8RtNtZBdZ4eCPg7GzuW1UDcooS3a9qARYcN1qqAQ9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KPUTCN86u2sCNzeoPR3bNEWSC5PN37DKk237adPvMF2Fb9Bjos8Ye3fhgP8kRR6j3pBZwDKYhdVUQtQqtXyqNtQ",
  "key1": "vzu7ZZK8TyEyDLEuwsmrTJWsp5xLC6GwXjWukHzMWg4vDz6VkJpQB8R3FactFHxyFrRTd5HzEDWyfwkEgJSubm1",
  "key2": "5t375ogT2ysJMjDh1CfyjUX1T7BaEDR7pSYzZgVGZM2QcU6SdbWSGKjXt4hwUh54FapWZj8LsCQQtt6jkBQX14MP",
  "key3": "2yz82JS3XMfMLVZgQKJbRRBhYWg4aPRTqcML8abNhd1f2r5oqV2dcgGvBXQXUsZ1hfbDUowYJ1Ye1bznp7fHNkVM",
  "key4": "2s8AtqVsiR35Xbfw2LhiYwmaKYVeExvg9WYyotccHE7rnHynqhyuWUSjYZi6HZXaLt5TaFeWdRGGPaUNEtBwsQ8Y",
  "key5": "5LJX85ktCjcfMegJ9CUeESkSeDJAo7rBivyn4m7beADBTWXdvVVjBFoA2QZ5SUaMwkn15CnWtrsrH5TeVWbqwWxJ",
  "key6": "4DT1GwXrG9jyLsncCNK7QthzdmHSsS6uDxeLkDF3mjLtm3NrxJ1wjNUH9Ezh9WkjhiqvH215Bwm91WsW2ipriFAm",
  "key7": "63JifxzFjEb4HCLTsBTXhE77PZDQwReKyZJtjXkw3bHsSDeTHjRHxQx4drYJCfZFKVEYzGSsucZmU2AvLSXMqUUL",
  "key8": "5y7D3xgsRaxhzwYLNtiZPrRdXXUzAFxLHsPi4bE62F85zrnDR6FR6Ba1UbnjaDbfyEhyptETT7u1GDHd63NhKz97",
  "key9": "2cFqhfsKqSpfVe5gkn8wpmuyfDmJEtao2vbRusMLoYnBq58zjVtBq7HZpgnzsgNEG46PVGkorYg1RWT24r3LfDTE",
  "key10": "65CQz3N16Dw2K8EW91ZQR5b1vyAjTQfNQT2ZtcW4UqxLKDHqsSYfy6No1VKgxPLmg6sKpmcuNXbavJEqywAqDB5V",
  "key11": "5YyLmMvt49S3uMsde9mEgE2EbYNbHhUZvkdmUWda1TTX49gnxKq9PEUJdFh2MbNbwC8b5fWY6KZyaptKWXbh2ofU",
  "key12": "KpADaAx2SdhtsieeAUU7CrGk6UFcVBvieUrBtQ9XB9NrgMZU7wkwckwr2cDLHvAxDPVWAt8FZyoZBrg8Q3kXtci",
  "key13": "4MPZmNRkwLKPAiwADcKkijMtXbhTf4cLGbLfrWX8pnqi11k5TSdSv2HdTorp8FvkdApZacQWkyQ6BZkH2AKM4axn",
  "key14": "3fHi25PxysoeSjcj1UFkYMNrn9c3apXyLc8YWm4NKQZXBdh7ZQSuXYVRFvHYekVXsrB2PBG2eUNHKtu59UhnLLid",
  "key15": "5GnNf8Cdpzvk9ng96XJ8V6pDgLffK6qCHT1pVu65TMt8idHk48LBkWjznGAakPy31VX3r7fPyteMk14M9JPurn6m",
  "key16": "49BVTznajCoHhXq4pJq2PeADtwCycgYnwWK5KFSuSd7ZMmVxW6XpKBexTWqyDiffngsvzDEbE3ZtAk7Zm2LNVqwy",
  "key17": "7LAJ4qfra7TMr7GSXXQn1MRbxXXBrWvA2R3yckHf46whfqMRhh9zgfWXmTPcAPmCeFbpngLcway9yEMoa8Ux76H",
  "key18": "aMJnQmDJPfBejfE3yH7hbZas36QTHvVyVaVtuauhgFLpEeQScHzvacJL7HUxVC7w6P791rRxF9SNdtB1S1rbynm",
  "key19": "4nMJovhVa9gYVNBQnsAbk2kTDSL951bh3C2QC5ftaERZFamAVhXGJa7i1F9WFUNNddgbvnHN4dJGLiBAJ9FhJnbh",
  "key20": "61xmq155LazFGUbr4NzPHi7zedY8Tg5pWoMR6HyAGXobPG13wuZF645HZ2V4rTLPGgcTGTk1GAh1t2hWRsT1BkQU",
  "key21": "3Nm619eEEVu2VwhVEAvhdrMBPeUZ4SKvZpbPEYpGAutjmkX2XUi33ufhE3Dz1ctxdMhNH6j3aDawUJkVKiEueYPw",
  "key22": "4uQ4m4Rd5313iDrt3aK5jDCq5hUumNykTEnrH8Y4RfGXHWripimVbJKWk1reLAp7QVF1CpW2kaCXLSmnu1uKCXkS",
  "key23": "3itwQcCaQky4bJQDNeeC1XnMzSxBvyQFGojje8w5LJpjrs3bSTvqrJQQf2Ma6rYRxCQnwP1p2D4UNds1H5TSoGzY",
  "key24": "5H3Zf2dQFLdy5MbCnoox7cZ77dx19d2cYuo5nsM21JcJffqF5iknu5KEWRAtiLKTgynwvhQKZWg29JUJFVmotCHU",
  "key25": "5cLbSTLZ8VHuz7cpvDdk5NPLoxstXXSGuxdTc5G9vzQUhc3Xq8BvSsf1vvZN8BPbVqQVZrZAoeUpds3baKvtr1ip",
  "key26": "9ccWEUuh6JKgJisKxQ7grzSy3Nr56wJdWFTx9hEsyAyVck1ijZHgeXFawyBYWz8WZmPxkHxmhRLS8yxa9zviTnQ",
  "key27": "3nDqgLiaN9EXpaAnKtmVhjL8FE9PrKeosTXEqhPDfuDeMqszGUgt3Md2AXcz4nVULHaV5YUvda1koPVzKJLDhJ1H",
  "key28": "5aTmQTho2cZq7uc3MTZXgoN1CBPVh26f6EKxArN4cbbMHVvCmntTJ4ApXM8jxtcPShYn4qudypjpUVLQAp6o9Rk4",
  "key29": "3MyJmareqa1EUG8JoVrnbRY8MS4GZmSLst63kF7VPVvV2qFFLDYKviSfmouSkfUUPT6hoc8Esbe1FWcYEyEcaCVo",
  "key30": "MKUCyfh1jcUcmiyRkBpFVmoophTRqH7ntU4tckb3KEutrocPr5EWrxozCD2Ptvs6Z46xyTsFUT8YGZFUTrJjSz1",
  "key31": "5uzzaL8L4WXrwyw39p4ZMnNsBTLhUrSwVRdBFKcE6NrQWQci3Gh3NCCs7DXmGmXBa2yimkvp2dEvBXY3jakqctSg",
  "key32": "2T14ZFaVwYWtn6h32QT2GPeN1r4s7J2wUiGhDfARdfGG3C3B6ac5UESKJYjak32h3nNntx73hw6y3FXkY6Gt9KVc",
  "key33": "56NT1jzqK6DLycc1CZGYDGpakSQzkaDVt2pd5HsQJj5razij4meJ3jcNKUMkkmosL1YrafKkV3fWjS1nZYtaRbLP",
  "key34": "2pvgt4noPJu5WCjJeejHisU84ohBmom5VhjgQhVMiHEpgkkZEo4VptqgFru5n3yzXZhGiVjDgXR5DaxmNiZDAjio",
  "key35": "5kwLwqEsvUB2ZWnxCVJc7MnsBsCPkZHqXqEkjaaf3YLjmoEtNymqKZQ6a1h6hTk87MyMVKMxdwYPCecsu3SttHE8",
  "key36": "2sKo3biPsWUerhQXcNEeJC7dFjzA13gqh1DCs8Q7ZV2jcLK5YbemiabwBHH8B8sdbse3V98kRr5ujyrHQHuvibJd",
  "key37": "2ZcWjKXiQVy1wz945Mu2Y5EgVJWy7P9fvp8SmMpyu6yBPFzxUZjEVSpVd3DNvaYZRiSQUQFwMq68GyMXGukd2xLH",
  "key38": "4UH4fgtFcqpLS2jQVEDRbooM83Ag1XafbMZzkY86EFmcprcdiDD3Ex6ysgRxgQkCW1d1gCU2aX9kFSwQixMGGREg",
  "key39": "5p9iq1EM4uqEpi6ccZPB8bi6VAn1iQKj9Pwu1W6QHpNe3wWWRyGstyDB2WtbA4GuxP34YtT74W415MbdNpvLTgTT",
  "key40": "4GxXGMUGsNULLS4WucGTHwSM8kDZ7dpMgY19e6CPBXxBU8kAYUecKahnQPAWBQhqDveC7bYqY2fjHbAJDpoaUqVJ",
  "key41": "22EaMsQBqy56WhcwW2ox3xAjgSngQ2nyRJaYaThMDx8oxae386GekTi97UhBvnQo8KR5Ju5uDdfn966ktyzfajm4",
  "key42": "64okWCp5NDzPbgwkH8cPaun17JJuXCUnCASh7CYtPZreMituiaSNRYQykUDgUTCtTuJcGqrhtJMMwgmLJKwGFbFa",
  "key43": "3bTCaMc98Qo2xeWiFWYW6aF7y6j2M8yRyULhKYvSUT3b7zSRaTRPFbJimjMB1WgXtUbwn76kVvffVHXYv3Uo37hb",
  "key44": "2Kh4P9fhuANZhEBuPeuQthPjrv1EtFMDyWjh9Grqt7u92cQGeCugathBzpDkHtaeyirYtUxayabym8HCVA6zFyRj",
  "key45": "28mLyW7nNbokHuC7WYee3yVrZguxuuw9vNDoN6Ei48QLU2UmB23gGDC57UntiaqJzsMwKaZEnp6Cee59svAvTr6m",
  "key46": "5s2DMWpsjTA2GT5tfNQSccQy1abjQNK4CYL32ZdDkqkWb6c9U5xmuLGG9W4uTU9kCzBxm3kC4na1WxLW5C7JLfS5",
  "key47": "3zCaxmBt3qr5kDbErJcgGrnQKsb3dN2fzw2ULgSvtad8HYT22ndGxS1Rsg1V7JjVTKR5GUzt2CtFX3Q9qf3tzLn2"
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
