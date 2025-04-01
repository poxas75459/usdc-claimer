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
    "4moYghmKtHRXMQSi84wanSAHoDhWLeWf4f5Dv3iV4DZz1rJJtu1DynLf5espu5ctvLYL5YcWv1PkLkTFSrRTSgtg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YbeLx5zCGEiWissxzdc2FYc7DHcNsKsxTCxCfdBgaZd3hdPaq1xdASGfGka8Vogi2L47mEJRLbGdsnFfB1wvW6u",
  "key1": "2haZv4nBRMVAYNLaFNsH23Zx89rU3rWTnJpAxjgpiU9oJewpQ1habPNK1pqFm4n66Se6bGQ1xsu4anFdZi7i2d35",
  "key2": "4yhZCuJ4aoZ4L49UWJmjkjsXvrVqTBh5ZoEow26m4FXzqTmGKncMZhQnrf3dG5Tyha8kyJfqBjp1dGwNDF2MWMNa",
  "key3": "2cAoNWLtKofovM7YM6Yxgq7f8m6s4ayYg3pynnyAkgTFp8tzz8UhXGJo1ikxVYHr5uSFHabSxJvtfJdwcmt1j6NE",
  "key4": "418y3VEHZ9XkyJ1WZXRfhPLMHJe3W3spScxGYKfV7tsNV1xjSMXyo5pDzMh9LhLkg766S7fERQAnQT4sn7z6vVG2",
  "key5": "48sjQRBFjqpDPa4hAVhP93dcYU2ebtygtzUKDQWUJ5G6K86JHb5mjkkLzP8Jak88d8WpXQEorAb9PARWfS9UvkQ2",
  "key6": "61gFRitK6Kywk6m5wuYJi7J21YK2ckEiUeib5usxoqKHo7RChnJu2aujXiUc4AtgWoYew9Qw6Hwh7rYCcf5ktRZj",
  "key7": "5WktKkXa4UZwZ6QFDRxMNxiVfvbjhPaand3ZNV62cLhhZcdJbaD1xZMJyLsRd3XUTzQxeDJnNGefM4t12HhFY7yW",
  "key8": "4W7Zt9jxaUNHYhUHjyPii4QweK5g2gJ4TJafa4ncQZr9GWi35mAEEDJBrhJPNkkC6VC8dFaMSVPoa4ssScuaff16",
  "key9": "67fNtVGjk4otTcthXG4j8fsgjq2qr5mirQCJXUF2CKBibBGU9jJDwBHXgGSisAxsWFU9UBDZr5WJSekrS1GMnkDY",
  "key10": "2974L1UYg75We8vRUjKUs9SqRFiXJbtmNFpk7CLzUye87ZJWDhE2SHGb3fX5HsxDpFuEhBpdbaSsjiYiVDdDx3Mz",
  "key11": "4D3t2kJSbspwV2yB61CKfuyWzwH3P3x4z6Ys2tgYM5QVZM81tCqpL4n4Yhg72AJh3NfyjSU2SpsmsL86F2iXMkpN",
  "key12": "2xXmwwoS1UKknGzVmeDqW7gabpi2fnXYanY5jyf7cqsCwY97Ea1oxX7gxMvYepe9puvNCwt8XR1HkDVfF4Bbdfy9",
  "key13": "u1fVAK5XX1XAPferrgg7TN2zvtcbXuVj8SuazvhPvcKKna2aiFBbDMqfhozcGmBHvWazZAgLyeWedD5s337UPYT",
  "key14": "4LtVm2uGWmJ3X8L27YxzDz1kkmtNdWSEtWPFstTyZyrd7zojiwo3FP2TY4Vtg1wzdTht1WpAox1yzPqade8woaH",
  "key15": "2LFT7qeo8bvSQYVU4CokDCcwxp3zsXn9jGN18kMgmijvpGrer4k3qKRkHSboyLu7uJwAa1PJz4ganQTbXBhQ82M8",
  "key16": "9aYviYXwgyXXv6sQ3XFbEd6QRujfzXoghw8Su3igbB1fG4R8H4itxUJXdHUaZ8ps7QYv6wmECGi8KcpXTjnHJSz",
  "key17": "awnMzmZx8kwoPikgebvHAEEC3idMHDa91374s4unKVSR1exKk5ErFQtHqGKZUKh6MtmdeSmhccv22AAdNAb6rYz",
  "key18": "3awmQmjX7uwAZfHKHgxmhxsedzzsdB23nZsjVa4VMiPvjsqKboJ5NJLJJqVHaJXYefSu7ZJ4Yp5JZgSK3v5mPGRM",
  "key19": "4XvQTmHNCjErpcHzJeZ8HYBEeUrxk9wH1MgHqqs7UuNKutd5a3sj4FsHFW914N19L9idi9LXgfneL5bbn4Qee8wm",
  "key20": "3SZqtmVka41aq4GHAgwFiPNcE2vHB7XcVH27epaeiJShydqbfioBkQZ84yYDTZ64WVVPkweZcm3RKgcVBjhi4sHe",
  "key21": "5P1uY86XFbncYRjzVpocpHhCioweajPhh1cjBH4QkP9zzBFHwawEqVubeoPChwEXENnZE9hQ2StX7iwcyozjVT7o",
  "key22": "5H11WGiJZHNMeAvkBkwWNxE3DQhBWEph3ihyQhFQnmwHHZpATYc5xWkQNULcGSFuhtYd6LpUtxDxJBmW359fbvWF",
  "key23": "4r2BnJpYSrPMgHcTJfXQ8FWtgM84FxK6cWThyimQ9491W8NUcm2Xe48K5jTo4HQWvbK1ELVb2ZvZ5dYSeCM3vfNv",
  "key24": "43aKXYgJ8kgh7jUnCxNutLYD4JMNd2tFr36EuEqmaTi34ERLfV7QT6M1H1NSefkBg13o2uMgmfwGVRZs7zBPdTYo",
  "key25": "4spnjzeqQoLgYW4CLH9MKERHZfhti7cf65ZXDSSZkhs6SQx9ExY2CeRgSkCo7ypkXEhVxNmvV7ZH91k1GVRbrjoi",
  "key26": "sEfxvpysnzWg3q9KWUMEboNxq6HGfHiHyJPFzPSne9KGkdtEYdTF2mRBHXd3VWteWpKNFdqQy1y6oPgRZwpYGge",
  "key27": "5NJiMCzcD2qj1Vy1ni6uoMBcfi5gmAYCp6HeiYTpihHxa47Zs7sH2hEPCLZwxb6k7AvCTmM8pjSfZ7P98GuJ62vG",
  "key28": "4jv4GiGSBKDdS5QMYgi767hBq8DCsyhLErhN3fiZ9couXeMxA4zv8AMNwTjSxb5aKSdtGQt412cmBMtsCxG4Exmm",
  "key29": "4YHrtENrLCR4TZR3yF4ogf2uGZv41nDu75rxw7ePBK56SdKtaACFruuHzRfTpf1NTxC3a19iJCBuAxgcLqun4DgE",
  "key30": "41W232PXgtkD8VJgz1J3eDyrX5Wk2Pa2iBwiqXFDjsUPmyKQtqEyei7WxMhJx7S9JiWPF4k3EgwKhqajV9uYksiL",
  "key31": "5g5TbLfaew1DagFc98R4XVTZEg6nx7BYm1u61RzEKBgTnrdGhxdFhYejaewUynqz139CjhaW5yTJjcvxZh1KYyyh",
  "key32": "3mRo25yrTKMaii1iDBtaCMGbDRziSBmbyWrS6M7qPcq7roZVVmFYoorA94U6V1Q6mrHtJaCbAnr6yYLZ4mp3ouS9",
  "key33": "43KEuV4EjLGL2Tin56TEaP6yJbQ47GrFz5eSjTYRcGv5xRa4uY4p9QWNhignptDDY4NArdZALVTNStUWhEPt4xuN",
  "key34": "aiw5WR5xV4WRZJZCAbKkSWqoS5nKR4oRia79ABgDKzxmtXbWowTcRXQZU9on3kMYYgzLeuZbP5pEuMsnowkRBeQ",
  "key35": "5iZjCSg8MLmQsMB3xos3KJuqEsud4eDen9U5F2aWPaXBBdQjuJaFzRWks3cAidVaLhsQ4Y2mEhnui7Vxc8mD22Kv",
  "key36": "2ibUUPadhqQMjbm1G4d9w4pqWjzYHYdaNQMyc6dHdxc5g73xa78Pi7LZC918ThAyRy2WBzsjU47G8yKGBvNbrhW1",
  "key37": "5Lfdg2uExcRk116vCXq5Q2pXHQNPweQCbLtu3oSePRzcpM8JTxiqTTG3jpuYfh1Wtny3wpAEFrW2V2fzxwPXUobw",
  "key38": "4cAUXyBfseE6TD6G2gChrjLXdjhwjhYsykbKpKFZtCoxLuLyC9inVh5QQHNNGLE37hwAKtqAHsGsz65uxn6qGZQu",
  "key39": "3z4vLwwF3trr9jnZ1J2YbYopXcpzrHmtzUrbQxfrvo6YFnH4B7w78SgdfsVHKLTGXPoyUxVGKsoB9TT2rE2TVrLU"
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
