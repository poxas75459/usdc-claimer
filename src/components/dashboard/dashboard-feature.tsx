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
    "3KKsaG8mAeSJXspwWmKFDGcQypcg4XmvHdM7mVkL8KCgtn61j2v6mqQ2vcqo9gufurUzQ3pVZPhm84Zct1Tn3ZBz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UxsssxUK2r98TQBGrzfpoJLHk6QoUmEvEaLRoEzV3VRmgedoPFCu7x7gJahpT9P6YWKayKBWJSgZz1tAUGo7Hbd",
  "key1": "32KpykAqFLtm1Fj3xSh9yoiDpmsat4R9gYHxL4ihgNmsGmR9U5BkcLi5LN4xBFUGddpyjFczsvTeY2Vaf3G9cy2Q",
  "key2": "4JRDWBrVpeKJYD3mT5gZzAXbnH6ZKxEYtscm9WqBGXMFFm5kcVCdwKpPwyg1BeQRCB3QXwYXb11fTAoBQKpCRfKF",
  "key3": "5JYTD7tqkF5TmhWLZEsM3fazi7sXZRBFxsW9Eq8dG5UwfBnkZgNkkGRERMcMxKJpYTg5p3oe9TxFUzchBws6RRkr",
  "key4": "5rwqgTvLfW2PR2dgyW6S7cc1gBJiBKgVb8onxcACZgwX6TnLNdxm7hwTRB2ALawDNvFt7tLhYDRpnVzBv4dScb4a",
  "key5": "3HDNu5CpjVkDpLjPWwfKtuEjsUAxtcgsaSaJkhNCStBUjKM3kcGedEs36kwoJt8ULcHqjd5tsRNUaRF2841jMj3R",
  "key6": "4zoZL2g8VxyahDcFBuhMVAnfHiEKVNzJ57SNJhhmCmkof3ziZzSsLqqk8fz99jmjK3mkej2TrgG38QFXDP9BGKEZ",
  "key7": "5rH16SZsFv5SPwWB6Qr7oZX6ppy5B6MDMKcUJGKF4kn27GpQhd1qFv1xxKJXGrCUoVw3xmgyN5mpS1sKEs8bd3Bq",
  "key8": "31wLu4e6UAzFTa9T2MY5WdeoYZipgX5RvPrpzGRKposCfRZnmehqddvSDoMbW8jFN9mtA6wyoDSWHE5LiLpoB4L8",
  "key9": "4gzyYx5z18kMNe2vysSdvdF8S7VToaqq3ca4JY37peuBP1yhoDmi2mbVjsQ5Hin9VE5d85CdcaCxJzW9pfw6GW1u",
  "key10": "4zj71xwT85D5Aez9o5rvLkzynhvFm8b8TPhLRm2pnVqNHssHXguS5LcaCn88SShFQTSbnJ26XbwN713ABKPcqTP8",
  "key11": "2o38EzxhcFJQhyTCyNyfp95SurPH52gwn1FCHSiXPP7N5n3GrRs83qnKb6iCZXnAhV3fbtRQj5oMzGoFMj9buuM8",
  "key12": "3wyBpz1ToWqpuF3JJ5ALPQSNfJVMyQHNHB9vqcD4MjCAdWDmfYRJaMiVrZd2vvnsw648dpfN1qV83Ea66BvmqFMZ",
  "key13": "hsBCTN954FTkBMuZ8JPLbiDBSLopVk2Nxtjt2KTaTkWJgQsFq4wJyHxrC1i3ioUA6nTaS3RqTLLh1J9YjaaxWRd",
  "key14": "2nHXje8f9gPC8ZefEhtYSNoeTmdnQQ58WykqhJki68HQ9QSJsNkvDh7Y1zhu7bxsSCTeJ7HP7VeAfFJVXYsR7CB1",
  "key15": "4he3WpacuC8uPZtnFjc7s2DVLunZgydtnpyHrh5gTFq421VgKE9q4VWcuZNVKfzYXdsSkAwVpu7XSY8SQZcd16B9",
  "key16": "4NDa7PRAn2VSZzSYnkRTzTFsmDX24TXQEiQ4RSPc6oDBuakEemzbKz7c2Xk3ceX7fsok1m2Ppos5qDwo8Hw3Gwh2",
  "key17": "b98eRTCS6voCfhtyeoBfjXtABZixtToTxk7jwLHRGT5Uw6kD3nTuvZj7Nw3XdgjRL6GeBPQ3JutHU1crqY5nnSS",
  "key18": "3usd3dgdNduy7WvkLERKwQxZSvQSSQDRWDTbGieaum4f2mWdLSSkWJRmSUzYKnZYb3A7R8E7K2YFxgPKyExWqifz",
  "key19": "5YTdjk11CXLF4ccYVU3dNPCpPf2oPYHc8hQYv68TidHU1PjifWkqWZVPhLmcsFdL8EaRwgMMvcLUqBLsg4MxSdWK",
  "key20": "4RPDP2ycRdK33NxeANy74PfS4nXLRsUbqMSMtoksKNFRL2JKaGvgLVnFe6Yb2k2Qwegj93PsVgiwuZnRyZAZyGwp",
  "key21": "9VTcd9MbQNAggeieK5NNWSxuU6oRpFxKEC8rdLhWMUQ4Zs5EUvMHcfs2WxaAQjQrHwZPmPkp6FGwPohkuJPAnVe",
  "key22": "4brSsEsh1TjodgcHFsyxGxd8W9yEFAfxwAoThQAe42AysrVFtepobdsY3nBRNRCMWUPfRnJvkpMyMus8w5SvE392",
  "key23": "5hA6zYsTpas4PmeqXY9FuERpDS9PiMpNzwCrFBidEjLQiY4meezAw8gPnF3GexJ8XbkALAv7RQrJ9pishbF6obVV",
  "key24": "22kGHRMaAFnEheZDijcxuNmSaBqyUavgFJirwz85zNp47KBArgsT2keAWb97R1rEio2HRq5fCRLREQBm2V3nd2MQ",
  "key25": "2WLzUFk79t1oajWEvSem9vK46H3TysvyhKHebpeohqvY2i9AfRCX8PYwiP5wxb4y8BUN2MyvsJoVTsfwGEo1WXnU",
  "key26": "3tcsjYUZhQwjjCrtErvkbDr5f31Bjdg1CR5GCvRvmePob25oaRj8GFixy771KzSugAqSCfF61fgpBezn63GzT12F",
  "key27": "4MAMrPjH2hpwbN5e3GBaV57idY7EiYKZSioG9Zc69UXRTJxN8yneqBXSsEsJt3Hz3uTbfhBx2YuMetZspc6fiBJq",
  "key28": "4kvTXmm51hqQFMpHfzMLtgAkonfVWBhrmhUcUHy6cXtzdsZywSX8gZ4ugAPazGoHRDyMyMqaN5K4mK6dYU7q3jEL",
  "key29": "2eN3eUA5j1ehNJuVd6eFYWJQYCXGrCei5Tv3aQtAUKvUb9XYzxe5ZYPhDhG3Vp4usPHaAY9nnF6ZW5YkTd86rTmU",
  "key30": "2Rq58vz7g6ji7BGKM6WpkJXAa6Ld1S3922ikbrMYrV2UmgQC88LR8mfmBZi8bTHAz7JU9Vv9QtWufQHmMBKsd37J",
  "key31": "58S37QFymMGjnhMWDykkab9NPDftAuTxevM7NNxxjzU3s5gQ72gwegE1q4ky77KjUyneSBduFk4vp82ie264Ed2H",
  "key32": "2Cecmp3oZ88qmnvf3u1TVRyiC28otAJbe6CsXNdo1oBsPeU4jfsQvjBNz8uYm7MibXKBc1tTviHkoND8n4UijHV4",
  "key33": "2jEeGMbDCD5p2e6SrUn4aJtw1tmvi3xnbXzknFJU6YibEBYdYJkoAbsD7UPtdALdLpSsbEkHugnpRwZnsgFZcFEU",
  "key34": "3f47FM9HHa9CASSQ8EJqwZ8BWWYjQX6AvLKVUHMmyCSEH7bRqW4vNafYoJycCBBnKDgZF6MBfuowqgtXkL2Mg1JV",
  "key35": "3EMnJypTP8BtnineszKausJGfy5cuvEBeHZPjHDQJbNejzk9BeZKYN8n3FGsxQxn68ufkRWVQMec5FsGmSjbjbzR",
  "key36": "LeYt5fpRZG16reHro1fFy7kRCYExTe7KPeTbHgVyRp5RCuSbUC4PBLRB9w5pKbtcbJogtx3c5jcoGAErJ6KvHYQ",
  "key37": "4WzkrcsDsJcjCy6gFMxmipdKZwA3nLYfzNAawGEo29fkY8Vh3b3FfBSWeG31QqDusd6hUUNx5PQcF7EWRrNW8scT",
  "key38": "5yk4PCiHnjuggPSjvmsWi99wVPxmz6c7Ywu5D6jcoUthqakons3TRWwyFHGJnn2tEo7e6PjArsnjyjqD1HupSk3u",
  "key39": "484tEKi4nkHcojEddWXVHbsJNXYosLN3maYg7J58EGrQsAry3a5ki6pK1GJabC4hcMvGcmjGZzGTCzPHY2QGkMmt",
  "key40": "3NZFGdgNat5oWrpKGTQBTU9Fm1cpS8XXRE6MdWiu9VjMXfKZjQMdAvT8k59DGgpy7My3qHfrQ1KaifK5TTXhf4Wu",
  "key41": "3cSzx3ovQztbU8LGPqsTs6KWny33QPK8yc6XdPkYY8DDf7dRxxYeZVX4nqrmgqwQ78mUW3xZ6wvFYwSdai6chyYo",
  "key42": "4kjAAqz5KBZf5aMbR6GEYsaBsQceBYevHnUo1RwWvRfbEMuSdQAh1SYankZU7qQ2DohGCjQ1jeG3KgjRy6d2Z57D",
  "key43": "3a6YinKaZPowB8ep3bXmc9Tae1bNza4YZkntXsXnTnojnKMhbigXTDCKzDVpSSsRHDfAyGYyPTHrW4wAXiYZLoaZ",
  "key44": "39vDwrvvGpTAyCrNMuFDJXCYuCNRTPZSjLdnauowmknRPw4JjxQcdeCu9VNeA8Wsrpe8WebpUtK3J5TtG3t4HEfr",
  "key45": "2MLBkv7rve2QvmKLL9WYsy3mkaDchyJAhjqD8ST9DrNj3T14BGYwVBDGAkUA67yKqS9kisG2FPKPsg4gKyqEgXmF",
  "key46": "3h8rMgNqqkYeMkP5v5DzWqAqYNqbDtWtZDmfgx2KMSdJ7ATJDWs4jDfDxNVPhCayS6ukC9Dgz3hgEy45c5nXhzrK"
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
