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
    "2tmuM3PtFDmzinY8qMGW3vdT2wZbVMBrCKPAN5PLSkT6GmYzoMubtZNWFLWDXwkqwpmLa7GZcNaA8FEXHPU8RKe1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BhRo1TZbvSXpNTWNg2rN5JoW5ubryTjaKBbJPCip3mYw6K3v9UABzccSGxHXQx8e2T6cjQfXCi6PzCApbpZ9UD9",
  "key1": "3pdcvKCszhtwdJ2wSrXTUnG6as4iP4ejCKvDGNqcq6kUUR29R6fCTH46bKrMck1cw79NggxagggzN6WP9YATcy6y",
  "key2": "5LTi3AsThKYKbv1MYKM1NwmLMMHWBQHujZgQKSGBDXUcHrpMfBr4evr5pzaHNTvx9G1urucAVqU7jzCHY2RyuHKC",
  "key3": "4wPqD2b8PsXTjDyh2beVBcWFgRTvDpXMKjHk5FVgPKHQrF19u4PDoPEqxH7aGVNpWv7XxsrWYfXtt1XcaiCfBuQC",
  "key4": "5goinx2dGihx7xFjqDzZUHwM1nv7JxGmCVC76JyuCnt4TeTAFWfg8FhhpGkBDY9AMF4chWS9ggA4qBCn8UbcxcUD",
  "key5": "3HkCJ5JK4YHYzi82ADziTzpvAgpWLuHuSyTP1tz6fzkWgUS17Pn4HsmChwoMhJiZXDV4FW6R2vJMjqpcYGmgCnFz",
  "key6": "21Md5ASn9PSouUjjByxsq86HDWvgrDgeQLyB6iPoXV2yz5dykcc1L5UwgUCSEzFzuWUVMFTGzg5H1dr3euHjnMxs",
  "key7": "6jBBEFMJNSwWyMZaYqrwCnYPTwbKbR4QcxBwdanJB1pXKgiKd69pcNm6wLRxyKGAhma1AYSN4eSuyBfWg429n6U",
  "key8": "3ShawGMHSkJynRSNuYAZoqKAcRG528UbX9FdMYdKFhq1EaViX2iKEDNzjpAeWKowPGJPMc2AY96irVTn973WtsJU",
  "key9": "2Sh4ukiUAF7zXfDNpWDr7XzJmzyfKKnUpXrsf15Pq6Unk6sbFgqeLYvNJE1fQXLnedqFQ7BoyNjzb2E1d9xGj8aM",
  "key10": "FNnvBybmpSTiiMnkQ2cjsHUdD3D9D6Br7dwS4QiXSzwNpNJ5HsjjrGX1MKCVv558uX58nQo31TKSXggCh5nQShs",
  "key11": "3spwaRTbnVLTAgmVUAc3gBNmi1AgFWknjAPLERvEBksNjtxYKoZuxz8HxXpercYucoS7fFu4fNYysFGmFhw7Fr94",
  "key12": "4GY76RQYbwARWVWeBFdqEgVmkuu4bMVWWoppbjbMRXruJHXixuY7eUPBdnAdhn9895puPTSDvj4gwivGLf1YMhoy",
  "key13": "3oZojkZRqjPyhSePFmepZHh2uR2Anp9m6uEd9fC5RMZa1vVCJXrk1fkk97GVzdgbtS95N5MmPieVCtezC2Eos2uk",
  "key14": "3ymjAaE1StgGhgAXBgVkxpUWDBiAnjVBTXgWmJoxx5qiXJCJHCXpfWYkK88a2FJpdFBoXpYYhW91UzWTaH142ZuS",
  "key15": "2FxkGx5d8gXyUWCxrUGAnxiMMa5ZWAVGNagETR6ax4jLg3VwBqbgiT1a5pBaX9aXqFYhXUiR4Fq3Y8Su94M4YGYa",
  "key16": "2CSxHVCxGxgRqTykyWPnjKUT9a8WDcKc6s6ZGB3C2FCoUEfaGHUpZPBLh1VKwVyrfSzJ3FRujQbjcwFFcgpSTUoy",
  "key17": "3zbnsWVhpncXQaLEnfzHpa7EBtg43m91M1Hhqobx6B9nhS8nuDfzwkk2hNXN9iegEda8TwnTca4gsoSk2kHA3h5C",
  "key18": "58XRyCacYwtXZ4pzvxDdafDaWXqJSqWAcwMVdWWDXbmBYqX6vHgv2k7fwMidtxsGih3WRpWN4sJzxh6j1Nf9nDyo",
  "key19": "3SX3oYn9cLVZdd7zJRGiwv5tXczQJZiu7HTmzidwCtWW5Ya5XCVm1dWbFGmPrmyoHnn95jau6wooj42sBCsi95nT",
  "key20": "49PdoiKPb1fEjiGdrwMk6J3pH4zPWSQTRVxuju7xVsxqhDC5fNv9NKKpGN2z2afauRozPjLNS9ApXwGSkJR6LXsh",
  "key21": "3t82wwTC1VB5NbnTanAWyrWE2MKtUQ3VKeHXRzBZQFhBNy1gLywXn2TE6TuSJZcRMhDus12jRSJUC3GSrrGkpuyk",
  "key22": "4zzbuohcWRS4KDnZa7VJQHgRYvJubeJRHAQAZg4YH8fsZo2W8trEtLrdp8vV2mEhrwpc2dwsdWGYDaUsTuxPy7zN",
  "key23": "89tBzfaX1eC7j4u9E5bTbW2PTpnHbHxwoBFhFP95QKWMPvRoTw4yhcqD2iJeDnaMQq98RKqHUuWwytHLCddb89y",
  "key24": "LrmbFNottQ7mmAUyjAeJ3oJweMshwBFAz2BJ7fjbJMuwMzTthQit3vTDigQ7dcKqNmWzSsYwSNiy2oZE9kCUUvx",
  "key25": "3poDZQLveBoe5NUYoJYWFShNe2cDYqwuLFAZ7SAA86VAUpCqgPuPdWuSLJ3FRQD3iwFAFAXoG8XCAzL8gcWRG3sn",
  "key26": "4gYczk5oNjr1bhG6HqtauSG9SGy6hjMhGmBM1hhau55my2pGcVceXTtyLv4Rh7VK4KKwL6amudmAyeKcQjqTmQE5",
  "key27": "351aBTjGV4hmCBzmFT2BctjiQKP2PWwTa37ma9pLXAJ3Nfj4GYm93aRPjc8mTCU9RULnEWnjmU4kCRd7o2DCjGTV",
  "key28": "mMp8rE1q7NtigDSEnCoWJF1u428ZKMED8PFP8QR23LaDK8H3r6dLxhP7YguxvUwVTvJPW34MTyT2zHT4r1nTXco",
  "key29": "57MyUGNCtN87ThSMDPuJjqiownLRh7suYBjGCVFpiVDKhUAwgizayx8VLVqXCycS3NfnJu4BdzmxPQ2aCMXpJBLA",
  "key30": "3uCTtg71z8ycqJGKjwWBw9EaT2ogAC5YSEMVnXB6X8NXfKFm7e64dUgoNsqpHsyAvkiXtVeB58ayAAo9ZP1bdm22",
  "key31": "4wdRQxi5ZpZoLamih53x29Sv8A2x2F9GY1XtZjZtPosC9sT4Gpo8fAYpAoSDJH4d2wvzasJfHiVf8c94DrSbzFYd",
  "key32": "2kiFCXkx28ZRbEogTnhi2WwmaGWczEMtVZwfxSQZYELWsF1s3Yw6GGrbMDRVEE3XQ9fAr83E8dWqYkXYkv5B2aH3",
  "key33": "4AhLiGfXEmjFmq4SC9dko6PZxpzLPNpp75n52ocMUmcKnsEUfb6RTWeptgYtyPq4K51zLozmFsv3oE4QWQBoSE1J",
  "key34": "ZqqBwUHbzCguBHuqew5AdCGPPgGw7CbmLgCAHigMCu9zGZf7VqtApSKTrhsgAmf4ZrTmKs6LKnsRwTrttXUZe14",
  "key35": "cYo3hbUTfopm7oJ1bha4ysRK52LHZWp59zRDNJiDxMPi2ZWgW66GuSr6BXNr8SGsABmi43yBJ292FErKbRR4xGd",
  "key36": "2PE7pcUCoWTqC94NunbBESRQzmkoaVvQyKZh8HyFHuvcQYF21ij9YRNt2sP9tJ1yZP9ogwbFkh2niUEE2MuJvRxw",
  "key37": "4u5T6xnrP9UY57BSWaWf4LGk2B2bCjSzrSYhu5mNbrcnaAGnfQe9g1eZAack5S32eoTHQh25jcNQRJhzrjtSbfpA",
  "key38": "4MKkNPhw5fkwZoPj4BDWFgFry3evyiE2EbsjEnWjYiJtsEXExE9Cq47QCQMCP9iKsF1kaZZurHG3kmLURLMosGrX",
  "key39": "izhnqFhXSSxAjVt1rh6qaU2hYP2Z4cbvzvn9tret7XNduaAJ7HaUzsnZQf8cYxwGi1ztQi7Sjr4JasaRkmQX7ua",
  "key40": "woCrNWwrnYqBMw9SPLUvMyBCeCs8AY7rbGrcJsHrRCgNEvCbPuBGZbJEgd49MQuPFwkgC7E9SRBMX6H9a2VQSVR",
  "key41": "63R4bD2yNMtPS2ZAXhAq41RywvQDBQBfhbTVCcUNQeaRzhD9B6zqHcNhfFJ2kg7SxUSBLDGcEa24a299B7CwqvLj",
  "key42": "uk4oy76qzJejiUoUPRoLfWkUJzF8bB2YphmjhbetWYj52P5ExB6M5B2z6b6fKY4M2F1k4SAnUvmLhtdswALHcTM",
  "key43": "2Ln2mA9zMBCefT7VUwdLa5ABCcJKR43kRvjfsutAXjg1c2s18TgsxpPpjjPouHWSxNiVTsWiWviG8xLyu9H5WEo6",
  "key44": "2LUiiYwhKA5Jccj4bm3xBq7gzLkXUAfMQAyNucEP3SsfKkE21wFzZmhjLFKhsWww8hRBiBMc4v7X67XBA5AzHnid",
  "key45": "3BFbVkFLqEMA1jU8FvPio6H8fneA5kgRCreAF4fB5Ysi8f2qJKLw6HjpHQoZ9QuRumW7HsqquBVEDk4dHUs1kSch",
  "key46": "8AZ3KUKyT1tV8zBVod8V2GyMJjm9DxFC331eYwy9rUc6smT1K9494UmsAVNxzR1tmGg2U5scD1jYnzXa5tUwSmf",
  "key47": "bvKYuaFYRGYnPWi1vwhFBhYcwJqoM644Xgh3BXkhtPscXAtbkrNSkZeoCnb1shSp4EZY185cmaf2cZ2PUykrd9h",
  "key48": "4gZn6vaHurqSg94c1hgauurcca6RniAtrVToxUCt1nRTsDHprRcFhRFnAaFkMNq3JYgXdyqza2C7Pddvo66bu6Fo"
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
