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
    "34EMtnKhtUcY4tu5Hbz8TsDkdBop6azsDtK4qy4umYV61n2exRh1w5jZ4WCPVfCf66kGDGE6hFx2Nc9yrxkA5zY3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SzvzBGBeLqDRE3NqgXrzRVC8mCbdiuafRJThtSPjncBUvZ5kNKmJTQHxzMRtbexu9Zyx99w8beYP4quq7SoEay9",
  "key1": "4BpqrhQiHKYzuisDVZ7RiwHZ7mZCFZ7CLxdK4f21vMkvWKKhMQWnuaDFMHE1UHRCMSg5UWeAMypZF5FoLHAPzqXD",
  "key2": "4VAHfXNnb1JTDPgFxixLVppoYBVRpJhUwmwZPBnTsy9uqJrK5KBKUfsui2oZoTzi1jTDcZabrqUshUmyk6XFjDXo",
  "key3": "2VNNT2TcZL3cnXbj72aV8rXcbDeRXMrDMV2uSVVGNJkDzwPnnQ3AcwSURwcvaA7NmTa6A1ovyhYpgix1ZxV5NKHT",
  "key4": "4JwNcWUdoVryEoexfXwHAZ5Y4Ed1mFyyQDpnFCywwQfJv8Ne49kEPf1hprneJmzrhHWsL4rEfP72DE7kziYDfwhL",
  "key5": "2LabDmycz8gUwhHYEZsX3VCRy3ycrNRYdrvb7ocoxAB81nWTnBAGbWM1em9fJ1k7QMHm3xFX2mBT7hHA369Q4zJB",
  "key6": "5JyH2KjLhANw6EVFh5bEQkrszLmP8KYTBKN6z5AVvPkvfUorFqEfW7zJPB55xApcETk4grbb5f8xkPMJropS81f4",
  "key7": "5caD21vh4KN42XjwPgy8hXqCHFHeCgZMEhDNtihyYoP7P143kpntALfGxMbak4vSEXmf7JHA5pucsJAJSns25bMG",
  "key8": "4T9fnKqdT5Qd1bEDnpiFgVEtjMQaBL5g5eZrh4pTbaCcKLZ9AM3h1f32mLEk1SkNzLwKLWXdwAfnLZriXuxzdByA",
  "key9": "e8Ldy3caxDsaCz1RPF6etubby5km4YtKHZSmh9hPwLvyp19Vgm3CMsbQGaMUxRj9vpkiEUCKKNddX6MRCmHhXdU",
  "key10": "RxQygT32XS3jf9PVsTbiHyTkRpDJRbZDbUZfZgDTpXM4rzhHsQsyzbhUJX2CAWFFumN2uYjgNMnWWQ6e5U3aHDt",
  "key11": "5RFK916qvDVnmxMN9XH5ZbGHMMdz6mxx1iovWTQ2gQRXmAzKDkRGABi3Lxn8YWQR5rsc6wwV4LE5mitRpb7wcd7k",
  "key12": "5g2YQo4FdSwKSgFq42nS4sCQhjV2x1cX4jdPgpp9StpCHVGz5EzgVuS5woLMdisqRA7HKwAZagGM4DRW63VXqnuT",
  "key13": "53xdEYC8GkBCUTxmMArH3MdncJRdvhFgdAUUCQxPiRC7od6inf8nfnnLK9BYcBXcHVys8p66ruYdQxjbZdG3agir",
  "key14": "4Tu2i8idEQiGqq3zYrjoy4AnYSPx1SEfgnDyzNkeD6zwq6giyKCx8Noa7aU4Xo3WF5GxijkpHD2gS3cu5Dt9jPfX",
  "key15": "3H2CYuhR94YYhWGxuG56pAihXqC6umJacHS6thmbP3GFUurWQuGRhpsPKsdYsiKG8a9dTH2gmTvrTVFRcmhizjng",
  "key16": "55u7vax6gQBNjHzgS2p9yUrz3hxAuRVkr8hNqDnanfXCVKDctWCzBXnYnZirerDwDJKfydYVX6nYpLSxV358ytMY",
  "key17": "2MKsMCFvUx79U9WxiCRjg6L7gwkkcyUo2v9sNoeCXNoYTMGBMJJcFTuKiubVJRAEcsWzU1oarBs7K4GXQoRBaxkJ",
  "key18": "5ATCCCKug3v3HWEUUVMT1QB5x5cE1QpoGdiEzRfy2op6C2yLHP7sRspxBb4EP2Vom9mys5tqSjSyfVf3CFNQyJ1z",
  "key19": "5UV2pMaf8khwoE4uBoUmxotadeAoiJGbi4hRiU7Cttx7uh4CvQDMi78VyZq2449Bx2GBNEgKpuFc7qRYjDWr5UCn",
  "key20": "22ymfCusMsRyKFWb1XspqGeZzpNv3zLnBFL4RzYXHfX4u4GZtzsmKNxQ3aYKvjEX29MUvNNr4bM1Na9NhSHeeqC2",
  "key21": "NHAPHYhCxuhHdpxVJG1iMyNSBN2pq9tGQXxwLbKsGcKCz3ddJ5LGVmaZGpiisMyBPTZR9V1Tt3taf5RACmJczrQ",
  "key22": "2jA12QFevFrCnVwiGza197xgsmZiWkfZqb2xWg4qrTrx6RjcPKiSbXaL84Ft6NiYqza44fc8KmHx95vGA44VswoP",
  "key23": "5ZV3M6VRzJYZmTYhVwcDxEAjAGR6ewMEH6GFFXxSTMJjXLKxBeuwKE3yQnCH6RpgofpnXbi987Y6aNP8PS5tL5xv",
  "key24": "3GUGo9bdGmXa4XBY4N6pbhgd8aQzvc9PXyKcN81yKh1acqUqZpnoaSiP89N1vtSmDDyRVRViubvUx99ko4zNh7w5",
  "key25": "216oGTfYKBsNHyJqKD6gio9SJi6NZVzZTHJcMu3Zr7jrypP74DvZZaq2WfGGFqcUDWzgFndf5a8bxjsn1suYaqgK",
  "key26": "5QoCTycZH8va1QkdCwiAeMd1RARqsxZv59PDyDtq2sFFBkncSjdTqMn4wsjE4Cv4BswjJNbyHHN1FWymCQivFZuC",
  "key27": "2qR9XnwcM1LMsUJHwaLNfSfngimxXC893e5Lt6ReHQESkyFPpqd4nY22X8h4PTZTjCjgZwyj56ebiakw4q3GLsmf",
  "key28": "VX9apNxoPWa32rMDgbhcUCA46Wt1pmTqwCZKN7L8Yt6cndEMij2bd7DG2Bn1G6xsNpfifzL5UwmbQUyfszPgnCV",
  "key29": "5a2M7FuvTZc2vGmUayuwoPz4yogDghocG5XW2z4Cv2u217ypB9HFgHF1FsY5dC26mUiWSrkapV7qrsS7H7zLY8YS",
  "key30": "3wQ7YuHUu4La8C2jbJpuUGucth4VybqJ9EJ551nqi6qTJ7knYvDgqPHXhGtbXWi6ndkjEAYCs6ZJBiaNtUxec9hs",
  "key31": "2G4KFLYRTMsW8YntsM414ATiS2r37ky1tXa7xk5Z1f9bF6RemffA4SfVXxS6pb8HAkQocThcrdeRcut7rWwfnhFR",
  "key32": "czPXNcWkeAAMB9QUj1CHPbcL3pxYoBdRqc6QmhVp5bv6ZtvuWr6bNDuW2QqgntBgBcumBMgEdtXKpaiWZSZykYB",
  "key33": "2dtBst6fGPuT8xFV1HmsUnrRzQEkBT9Yuua8CQrZhiQbGvQxAxNkMpFNF6AewciLNSKARkHiBNunzJjHSqdr43jK",
  "key34": "3D6mjZH4kunWxUeKYcRaZepJdQXj7CmH3VcSJYkoiy5CYxS8zJYVdmcRkucVfQNbMQUxASPQafXg7TARvZRpkLx",
  "key35": "3LdGvdQBGyEo8oKqQu1ApD57guzDuLZinucRtkxr1z1wLevgwXyJyGWuJZZzjaJ9Pm9Ar3ZFHNKCpWXK8p3WBQd5",
  "key36": "5Yd2BGhzJWQ9dumgMA7XLk6Bmg9xNZG17RVTKv5q5U6ZTsxkM8uhsRS7ppvUmjXTZG6W66i77oEQLSAtXQg1wSSG",
  "key37": "4smcV5Vp2siDkMn6NyGCRykgeBzSFjzcJe88kx5BpwtvhxQxcFtTpkCLcBgED84AJRbraVk9CDWncm7Be9JXJ9Nw",
  "key38": "2eRrFtB1WyTqPMS716wVMPrEywa9jaVXodCKsdaR7tpZHer8Vz2WWjTMoHAMQPm7Uvez6JvCGtLBCoZLxdCYa7gz",
  "key39": "522osVx3tfF3cNbvyq5YqjdBhQ1ZacnWDCa5bhrWsFFFrZjn4RMEbSQjNnuMqL5DpoNTAuu2uBtBksMowz1dN82P",
  "key40": "5oV2WVd4WwD2BVcfKd3WgZPSyBCajNGxVjLCZZUSrZTGNhfXofLoNJgYKMJrAcvuf5UyLPv9yv5CgXYwR7VkT3xP",
  "key41": "MGLZs3V5gHFXPU7V5hxvQZocPqidVRyJQquqYGSTn86m7qH4mHvfbKyCGgu5xRXuCzT2EJkLMjLiTqDB51qyKvZ",
  "key42": "66em8n7SDsmSSYtjcT7Gyozb6jTnwtHGi9MvEQkgHsQm6yZm9478hFArmaroRAwPw9wCFfdk4fgiwk7p6MhGdSYS",
  "key43": "2Ek2xYRZTg5rg8TwtSCC883WyKpZsRk3Vrtdk7nEwY3AaLedX998179XKQBdj4jH9aSmUR5gRjM65ooZwTqu3Vza"
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
