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
    "3Zb6haCZwLA48ej1eCHuJzJtwkdVWb8JCgnHr5mbHTTpBCBL5zc4go3fzJpitSCWfJ6tuitVQNAVd24i7fqvJ3Ye"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "z6mv54HC8xgJNABWPKZm1CDuiu5RVA5YJ9eNaRsX2VMRiJjff41GrRbyTPo9rKNPMPyoNSBT37BxVuwzFtsgZLC",
  "key1": "4NmyHjRHuGhHfCgxK2AoXQuApVbVMGXu1tas5Ec9VwP7ALkpmMrxbpSco2mBHrixJLZ4rjwDxxkxqicJavnxTnox",
  "key2": "4wydBoFkfAfCMoKr1t2Uy3xD35DQUDrdscht7wSdi2TAXQPShFuY8nt34xxZgFiX4TMPf2BXRsN62kTbkSYW2wo3",
  "key3": "5AxbBD4j3WiBMAJaKqYTCyVqREkxWK19dpp2Mco5gFK9Qy78xBPqcEvjohF3hyfVQS5phHmcn68yk4tCMLXQStGd",
  "key4": "4VzH3Nq9dHT6ptNwNQBz15NKk42S5wRT6c7PPetKmjWDX5zPfrn47CTzgWuYyZADTHpF1vXrTmyrSmmBHiKfRRQE",
  "key5": "4yeYgJ9XUSdpzzexdGB3tM8jQb7KKaTpPnjcnw7XUewUMs5CKoDVggjxa7icKrekKJuxWSNYk6huLxrNS9R21C8b",
  "key6": "2W9326eBZczRWReNVnXkJZaqeoBRYy2siujiLYk9NVEPx1tCE1w9gbmwiWRbRqyssT9aKbpiFLT3WV1e3D4HcaH7",
  "key7": "3RFcApkEbvGWM69QcghCXjfUhSV9fMc2e8UCjJEXtBLhbV2hrcVHeiLcbXTXeypPqBV4Eefz62aoR15WzErVkXoB",
  "key8": "5YFyJAB7hvt9buunZfp9c2mRUNvBEJSSiL2p9cY62ZNvtKMzWijKWvo63eazN6yE4EptWprsifVBNvwza63F9mPD",
  "key9": "5wsv1JBZuVwHQMVL7qKM5arKWLc2uM8gpva5BbHywubUUeBLhnPC8mBg2WxUxwGneqAGJ9krzse2YkASDh24Xbp2",
  "key10": "h8CKKeet7j6Sk4UJZUQpatke9EZHuLfJknW3Kcq8LWzaa3A7eaXxY2eHo3X5buCisatWq4kZ396FMySbTUk6YKp",
  "key11": "58SZWSXJiKRkUduFh9Xu5rjSWAg1gKGBgWdM93VLFphUbkFGhP6Vdt1DrrYd9U7PuvuBVDjYedL61aoKL7VekWxZ",
  "key12": "45F31pubk67R58TBYWUB8qthtxJNj75uVztLdxGjFd2d4C2d3trVsiKmZ7ksKb6CL8begQDCz5nPVjzzY5TH93hb",
  "key13": "26uR7KxwVwNX54dxkPX4RibBHf9F51qoQeEvSuU9cHe62UwcwEyjtWirTvxGMaacdCjWQqhxjz6jD4dimmnLcBFZ",
  "key14": "632aWugHJbmDuxm8EZdFgzMySy29UNuoL1NcEwqvrCdAs2vgLscFE6Lkd6NUA7efQrcPavUQwpMimMr7H5bgQdaK",
  "key15": "5NaQKJ3m1xYHY5NEEVFjCkkKF6dG9PHdiSk7GnNV8ULWeshanDD2t5oqvKc5GM6cyXSDRvnjLXeUEhdWPEymeJh3",
  "key16": "2VrGj3EuJaTzq6CUtZXWakknuTwWkriZNxJAtXprM4KuFXztPfh5cZodfzyEATqMMoxdjCqQczbivWJgmQdFejat",
  "key17": "2WSxpExF5e35oCGoedraDRitHgDK6TbJZTrJSvDdeYhtfEYC1eC1DkbhtTLwoDNbCB7tGMSBCxzt5YS8pqfSvhMJ",
  "key18": "3fU8NqPkxruERVComgGWfGKVWuctQcrQZ93G2uUiXwbmgZchVWxBQUSN2Pgv5gGUQjXigZAf4m7PK4qAsNDmNLyj",
  "key19": "5rzCgXwaaLiSxuxcHrMZgUPbJ3PmwBxDLwgSucz6eV1d3pBAbEVPgex3wKwhiPiUsBvVX3CswF96ZDJdKV9xDA6n",
  "key20": "2Ty9iH5EnWn5DNNGMiQbAjMdF1HH2XPvVTGYRBQABxTt1m45hSAP5AfxETj1vkLK24jRheKc1c6jDL13CySrN9By",
  "key21": "nfB4XWXNQyZb2mKw2Q1bwJGq2MqyfZHsWubGVQhJhQSTH8BFiaLaBzKyN6ZYJAScczuUdZHCH5SWZhzEJT8ZEtV",
  "key22": "3dqNBYJCS8Whotp2p1aRCT94FqkHCHyJNrrj8vZjqsLFGaxtb36NFD95LVMUNkZJnPTTiziGWGTAqMieeiVAQTEt",
  "key23": "4JMkmuNVYuUduhHL31GiCK1PW78SAV1VqNWdpqvc44uABKt6WtuK3GqY3RepGmKUk7XZL8JQxXv2KXmEGG731YQR",
  "key24": "gD3cBNMxV7aWDyNHymnmvu8czxWRp6NjDGDNNE6GyWkUPBKpktZevuz4FReHckVpEvHzLmiqwKFJvioznnzaTvs",
  "key25": "3fDeupQyKhX1u7aqJmuc85W6HBzXDsw2KAnQ4B3gvCQRHyfzeDb1yzyaGHznJJxEZKtSZWvG5bKykhMbWyydqthw",
  "key26": "3SVbPes4kXA635YTV8yYUNRamJnkbsUj22LDzy8aE5FS62mZ5mTFZHyyxywQYpWTvZ7MTtH2TBDnzcz2CpsEo8pG",
  "key27": "43j1wP3wXq5yetmaHnAmJC72Gccodek9ScFcLvKqfUznZt58D7Y6hrrqPWmqhf6qn6HNq94vH1dGfKNhfc2NCEa4",
  "key28": "36zwxT1ie6crzZrT2WPcpzD2ejU1FECoyvHVhdvXEWMaqBKUMwuazXdtEzXZgFB5hht8SoF9TLZQoz2gwcQS6BXR",
  "key29": "4fKhcQYumEDQaJbkeQ7NrLdi2Rp2yDMoWAA7TKwyvmh9AXQ9vCPSGnRrRKUAT79UFg261LKg1YuGV6cTyLqDvtWj",
  "key30": "mfJTCAHmh7MMhUt2WLUFwyD43BzB3XD916yAukCWniySAw7iaF4TVfJbnkSvmm3foYUxYb2ovw144cor6DookX3",
  "key31": "5Mne74HWqsmMoHYkgpEgAxF9CUQJQprGsmbX7DMmVLsXctYi6fuUidFCKQWWDTogCkGAnCwvzdmcQTKF2iAJyrPC",
  "key32": "5Pz5Caqvn5mUXxz3vDbUAivxf5KFGz3gZiqFTb9kKeB87utK7KdztSjv2Amy2EumN8Dk66bNkfPEGC7acnriPjPy",
  "key33": "5iDNY4cg12YYWoiDgQuouiDSsYhMMtmiFctVe3pJVkHoe7Vkc1tspYuTNgWXF5zzkUVJKexwWf29GGkLx1L1pXNV",
  "key34": "3miDyPRHjA2xPuBgYpwNe97QtASmJAvpcs4pGg37Yax3dCnJDsHC6zDtZQDHJQTbgWCzErdbcqWKqv8jS8u9QCPr",
  "key35": "3ju6au8ui81WMBNhqmuXkycDHCtPqZAFSb5Tw4bb58QTNavdCC2HEmmjw4ixxm5nRuzqqy4jCkD83z9ommjjuL7G",
  "key36": "2Cb39NG44SMna8J3Ph7ajkQdLFpi6fLRPHkKNnZFhDURhPVoe6cpRDXMKRiojzbRX4oW5BS4zZ1WLNTAZgZTdy7V",
  "key37": "4d79P5jKutnYCPUTHWQm5HvAE64EgxsuKnsEw3Zt3vE7FzVeqMFChXFnNeJqCtQHuUTFqkdxejjsScy1oPmaxkk3",
  "key38": "5m3d83BPbm5fG6MWTy121UxKrMeVAt6Q5x7dY6ke1r8FjzkdqGLAW4dhwg5dznv37r94fSJNiZ65d6hBY9W1oMRZ",
  "key39": "MZD4E9DQeq2dat5XogetCGPRNTWJKe1mTXNTF3fPAMK6xf94hdaAXGkP5quxUs2SpoPmuzZBNZacDZm92meW9rq",
  "key40": "3wN5ViqiXZg4YhiEyWSi8Vd5FKzkUU1qQNTtcaZqF4SVYtkaA4FxStpT9v4Mw5NqcAJJ3o4TTuiZGE4m5Fse1sao",
  "key41": "5A2qTeGmh5hfqYxMSAwuzYGuPk5cVX93i4nd8xhz6VhL8Po6NRpz2QBzyrwJCvPuPhU26rrz26pLeLDzhzdMcmTW",
  "key42": "2K7hi3kMAXD8vhqeAUmJFtrFaWY47nTGFMJeZ3hhU7QWnjREvSaSwazvmxWKYk8WS6RMV2yoaGZFNg4dAtiwMf86",
  "key43": "4GLHnq75gfYtkgXhSUr6Fmxibg1SE5pQioP11fBHsHfH3dLg1GJroJGbHqYYwhPEkeqnuHxNymSqF3uUnJ43pv5x",
  "key44": "38DV4aV9KRaDgs3DjcyCLctaGvgmmuWxSfLRDDKNaHAeNR5rkfeQ21oEYhTWgv9KebVxAu4dBtUBzq1dyzQ683ti",
  "key45": "XfCnFYnzQ98dgRx7zY1t8PHeRj3QufUVuDPBe4TuyDPpyreaayyJEUU3WuMc7VpzAEcnxk2TyQAFmybsDXL3usk",
  "key46": "4f7VXSQaqdo9ehqE68YxDmgLX3DH8Mjb3JduTHNdLidRer7RFBPZArq9QhKmWJqLWGiURViWHFbtMd2mgmdKBxyt"
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
