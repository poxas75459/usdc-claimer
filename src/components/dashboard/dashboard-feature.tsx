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
    "4sWrPuBHJhLo4bcQj5t9iAw6fRWXq1HTyDF732bwQtHw5uDdgDpgEkenZPMGevXnewncoK2N9a26nT2X5EZTNrQi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dSTRx3ty6pJCzaRtYPLYvfum6eSyCAtCmhi3D2P7cdNKtN2kyPmSxXTdAuoswpeDcZLiQnmmhWPDwvzJPsCL5qA",
  "key1": "251Ju3rGqcwx9YEbR4acMScuNvSMfh6Je21EFfCZAcabYZGVTVDAqLFm8n4gLBx77pmbtjF6Z49jxZ4L22iWwMXv",
  "key2": "3aR2itcSsvoLXJWt8BGddbRa36bKHRXMkQoJNKdgbWC5fCmsnKMhRXgv7mjbsUByNQVRtLufVv65WL6LbM6iArtr",
  "key3": "2ycykrWjfeixE9bV5Q16oZVNiPFCyPyBWhHtxZxg3ppnWytoETwt1rGvqinJyP1cFVtAGu5R4QDZQVZRU92zQRZX",
  "key4": "4HrFZzQKPzHvX7pVgK9hS8AgqtZCTPwBBUufShw7BdofDjerjSm2Dv2Ctx2EZqiBsVQ3dH13EMWEeDnkVu3ud96J",
  "key5": "3YktJ2Y2Z7agbFTf1bSWdEaA8SuYccvM8K9m6hk3FsyRmWcBGruZw98kzvWjMjtjGbebK1CZuSbyAQeaxZiAvQwi",
  "key6": "5iFjKe4cxC3PsD6haHnndfWWj23UX6dvyed91WyN9Qe7XtoHFcFMYcyyksQSLZcJx9YXJWnF1SJU2zRV4KYThZs2",
  "key7": "3UivsZek1x2rTpymuwx4eJ1p2yhzPva7rPD8RTh4nF9ADEwyNjhywE59fswbS6s8GgGktYS9DErEVrppKXRYgF3H",
  "key8": "aoVRpqxv9Hxwd9AHNa1KJj2P3MCYNF7XGQHwk5pk4LpVUbJkzVyrSVc11KkThiURjn5VpUjDNd7vukJQVJH7L63",
  "key9": "2b2cE7evGsa9zToeSYwa2Xjxtf7xVz4FLezGF3r3LERTeZTvQAsYM3DTHg4ZFf7995PLSWv4WgTM3vL37NRSe1jW",
  "key10": "YYh7k9b4B47ELXnF9hdVKygUx74GAYwT9m2g78WCGVy28VEmJ3TQHHPoFDCZ239Zm7ufSZzJP1RaJzsBqDvnsfX",
  "key11": "5Di4J1bSyVKnw4quEddfQyZP4UNwpHJt7jBRPiFhmqQFChKL4hU2X5jK9Mq8U3T2HSBL3UcD7WEoP5b8gaPAZ4zc",
  "key12": "4navBmqyLf2Fzeq2RU4vY4QHeKx8jQnNh2E1oDH8DBUDhTd28XtL5tYfgU7XYjhUnrHCJhn5o6gDWxsJJFMyGfm3",
  "key13": "2jqK1CuvvCeqqcjq6BpkUs1vY7L8SpBB9oRkHisMFXjgiV554pSeEzSWkv3CMxzfAXSkfCiaDMkFN83Kjhn9iCfA",
  "key14": "2MahpYYXYPyeF44v5EKyTosEiiyqrWbnrCpv9zRf9h7jpo21XBG8Mq1YnCdunqVY8JX3kSzFNTmMXj8pQ9z6m7aZ",
  "key15": "3DJJWLB4oGzXwpW8t2Eh4wiDhDgtkgcSJyd7SLJhP52Xo5TjfYVBKHegenRsVs1teibku7jUsUWv3hDmsxhujrEs",
  "key16": "3ZRNsTQVPHNZYhm3Q5AEWXL5xsEWkdAQsbqjNwqrcBm2hxeDGE4xohqFNrjotScZZzjD8fqu2iMWVMwvgMtYRFRx",
  "key17": "5bYNmdV2Pr5FD7AECTBKjmV3C3o1qqfZRsd6XWXC6poAtcvg3aRS5eK39Cyi5yo8xUGr5unEB1D761B6DE5dRZLn",
  "key18": "23zFPrejUNHeox55UEi7aBTVdheQCtvbAsbCEfyzohuM6QQNdTSxiq92BGxdqySzff2qreUwsfh1t73ud5dGmxdS",
  "key19": "8pmt1Rbag358ZyrFXZL7Day1Dtq4KMTNtqShmgkkn9HC4Fo9B7PBj8oZTmqy648dFAfsi8uXJccXRjBYVmcfX42",
  "key20": "5paryeAHFHf9d51JXReXPPqJcfGCMSTiaPQERvwigAVhnaZxgUxgykLca8YKetuoffkB746UET6vJWU7893kcQME",
  "key21": "3MJWim5aZNcg55ZP5C1CwEf2quDMkM65dkBQfaPtTv1oixyaLucrDWAgSAVUfKiEL9B6kEGgDYmk8E1hTzsYssCs",
  "key22": "n1JsvFrTEg3E7Bw7jZ1J7t4ZdnTQNXsb41H3wqafwuSE3MFajgAhBqcNDFsb1FBNAfYfyztVK9ftaHAXhk5nkAS",
  "key23": "3dFkPBXrkyojYpt7YkqM6GCTx2jWdXSnPiFygg4fjxJrHNPszobcntbHJPCsVM7fp5yXKfeySCmTpRujHAkeTVu",
  "key24": "3FLmGVMWaA44dZmZqs6DRyUfxHzW358Rnt9E2HqH8WdPh7xfXoHpcZRrUdy7Ur49JnkLXFY3Ms7khVCgbLybo8ss",
  "key25": "95pN4K5TFdaxoyCcEhGvk8MRUXT46GfdXJCzfyvJoEBMdJZm1SGd5x7nNtKj67Qr2z5Q3Awu6YfVSC6CCrvMeuJ",
  "key26": "5fep9XaRvuYnfb7TfLFSk7KzQho9Caj1yQpMdnKY1v7g9aqGHosxT2h9Auhb7wrcdcMEgFLfGiRUvLsZz9UFbmFz",
  "key27": "mndhb6N6UD9QsWRLkwoBh1tHyAFdwUny1q3DN3SYF392ykRfkwgfEMqQVtms5hMdwLmPh5h66bLm8Lbpi8wXF9H",
  "key28": "32Ljc9JHtwdEgUVT9NsTUDEfG87eEfwi54KzUA8KtYFepv1naVYouybG55iZqTaf23ksBCGygZFYU7tX5CNrPJ4p",
  "key29": "5LN5aE8U3fSqM51LH71NFXUk9pmS7wFfakhZimeYkk5HipiidsCWoPV1rY2JWW88d8nUrsn12PEQy9ibqpSPHE9y",
  "key30": "3k4Kbhpb6mzSpsJCzcTrmctQMXxG6G27awkCvGFGfXoEJ39BTB6NYK4FYA6iQM9sA8scCCUYsfZ1b8upp8zVgbZb",
  "key31": "2pCzMjgxTnpHzfX91k1joGXb5v2yGxbccmDgGn2oQfvydQThqQSvcyBMWpB1fwxhewNiYW9ism1XPkt7MQiPUZRh",
  "key32": "3JHqcGAvpd3fs7CcMBmNXXWvM9izpLUefvPe3TseHbPwGsUacFcgy8Y32Aj1YUAjUmbwZnmiLKpYxL4CPd356CeY",
  "key33": "FvExWryR86syBSpgKbPuHnuDsxBqnUqPLUPK1PdoTcpsEjxr96oPtrnc8nn5hsF4vBNHtmGfxdrYxggrLDtj5pX",
  "key34": "2V38R6TvDYL7pjfmGDT6o8FCXxxQem6dK8Xnr2Y54h2qeAyd5ntX41yNDi6MLzeYck2PCHN8AL1UJQj9Vrs2mnKn",
  "key35": "4o9KTmbytGRZgLvaSeEBxo9f8Sdya1yUF2K1vZeBnG4oVJnL5tkyPRhDgGg5ootwdzirwQzMYppWpyJLXRC3SS7f",
  "key36": "2HBscgyByhVNvFUhAhxMqUy4G3WKVZaeqoT4j58Rt5e8KvwCA4HdafuGz54CGvsuFszLB1CJNZo5dQA1ZHW3ZAHE",
  "key37": "2KKwMGAqTifidudoKCLcNSXDf3JyrMrWaewqD985e3sm6YNzrw9Qy1sRgC2v5ArMeisaZMkiCZZyiFb7YaYTGSZv"
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
