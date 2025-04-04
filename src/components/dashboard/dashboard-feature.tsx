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
    "A4jVGhQYufM9J7uPAaNKabNmoTuDjHTKv7M2qhYvLL1KHxaDHqmqPW4oaKJLSY1HWcbGiUdGN5DnbD6s5Y5krKr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Wpxa4HV4dHwic8i12kKd2bmAjVZiM6BnSB86c5UBQEuFrj5JvZ3cYb4bcTimaSYJkS9V9overLpNgnhorBvvtE5",
  "key1": "4X6nT7grVVCre1k185AYhKkpQ1hZnEY5bH3RXpTc8o1cu7Arpuzc6nDgzN8gu7s1feTYobha6mjhGFTohp13YLEW",
  "key2": "3xjx8HudFapy3KWRn4Np68xh8QPDBcRz5is6m9kjN6t5RWoXxYiSKBF9BrKt3Qvrh7xsqtBhqum9tFUyQ6GRDqxW",
  "key3": "GfDLSVdCy8k78EwRkBfXP8DSqzXNfe1KpSYQ2YRUazSP6o5Ckh5aKNvnfSKLVCQsS2ZEyjDzYFwwfsoupZxmX3T",
  "key4": "4qTtpMkk9UKLbPVD1uxS1Wkn25CdvJskRz5xo2zBDLNmdjSPnGfJysKt1DdADMCUoWRyxDr8Sb32ySAXY2BDUGWe",
  "key5": "5DdDEsDN44PcumG569smFhr2S6v9RkC7rKWu6AGLjwbFeTDnp2Vta7j1UPmQaHBgRnEZNiJCrqir6CsydfVQF2zT",
  "key6": "4cQ6vztXr7CphDDSa7nmPfZg2kBwf3Buf6uAvnts2witAk2Eu7VTsAMMpHHd8r6whkb8dmGx4rLahRRynHaZbQ7X",
  "key7": "2HuMQXQaR2ZJyKJysD74R1Xy3KNiP9qQgZs3mpXNNbutbXjjk1cmdqx9owSrB4MCdWShZYhd7rHY2TGRfKm74snd",
  "key8": "4md6iS3t3jFSYbgAdJ6KQRTLfDDKk77RYjsAmifHB5Le17NG2ZuKXxrwMEB6T2gQaXXBgqf9ztACDyusCM7anKAK",
  "key9": "3rtnU59QSGMxrPGBPLBede1ziJzJ7rVenezURovdHiBjLJrfSjf3Hwt8ZDC5te8j2h84wtdD5vcKamQQUP6PrNgB",
  "key10": "4QEb1DxBWjf4e6NEVpXYtiB4GHvn3ksGJNJmvatJ8mvS5tqb7F6hKcntQEBTbnmDoEiiLYr4XtgSYdo2XQmb1Kny",
  "key11": "5KxSuJGFMrfYFq41ncBY4bUjvTXQ9Q8j2rsL1Y4BLEyfxNBpgD8XtjEatEYeiRYxfAz2MqhaYLKpUunbze6cWxu6",
  "key12": "5enKMsE66WtxSkzJ7TSf66puGMZzQd2CHTG6x8EYkiqygtwH3WDRvfvGRvJBXhW1sSAME4VMSJQVFUm6sVyvXFjk",
  "key13": "5QV5eiLBG1bXbqqvEqXn1t221setCM1fqTraYuApbWhis5r35LTdeB5fLkxVwtmgDgfdYkruazqETDS66qLbETvm",
  "key14": "4wrYrXeTiFjwvbNGGJrgT8RkxaTy9cSMqgp1i6j9ri9rxV7fiuxNY6CsDiqfMPASCgtBF5XxSmgUuRqdoZvuXWW3",
  "key15": "5y86NR5YTRxq3mPUHLzVEgWK1oMcCuuvtmaYWG9deVEJUA36tTAawU2hsijXD13jzhTmrEa1BQpjEefhmau2nuig",
  "key16": "5XHXotcK2kc8eUSQqng6CNfC9h914KvQ2t82teS9KiMMQKgdiDZvfkCGA5t1eGgovp7k1EpLoRnRAwb2J66bgecs",
  "key17": "4xU2gSCtr2xHoRVGmkEQwPoN2cvca1Jbm1kRWJci4Uao82VTkRixaHHZ2fVaS6ALztCH33RCfr8wPuczbERZUCSf",
  "key18": "xcQsWfS2mebYR5dH4Edk3kG9No9jodGDWNiMvBzbLpboc8o213GctWz3EyfEXgAUikGQY3DxnUbfJtewv6Q4Foc",
  "key19": "2JPJtgtKSGkGbKWuAAAPnbsJtbM79zRWLitgTxVmyNxQW3uKd8jFqK2zKLzVD2ZFn6up4exfdLrySi5mJbCE7jtL",
  "key20": "3VdMSnQ8utKy5qc99puMQCChwXeeyubeJyDtp26FtofdUAx4iTmS8ytU5yJkk7xHC1M7zhqARpbAP2RRHmab2shx",
  "key21": "aoEGyGfVHsJHaLWctPLxPShioeqNnTh5cenmDi8TPG4eH7Zvnc7a8n1QknDDVnCdpExuFLtTqUFviw6LoG5Z4XB",
  "key22": "2Xsz5uKMKWT3kvTuuduPxTBg1WJzSVPgsDnff2EeCKW7BLbtShNm2MiACRJwu3MLaYBkTV2cHNhRu8LyFH1KQXuQ",
  "key23": "3SBUApACrLq9cJXyDP87PvSjMMKXkxkHTXrPV52Q41hn8tiB81AWYLGbhK86jj6Uostgdw3tXbiZWnJGv2Qaok6f",
  "key24": "42dFovP2ddiuwWaZ1B6r7Cf8WtvZjVn6JMwbU7EmBbL6p3YB4MVMW9HraHWB5T6G7HqaabuUhwDYSRzrEZmiaRWg",
  "key25": "45wUXYFuafX8XZKEA12dcmh3fQJ4tXU6nGks7i634kuKa7xPLPN7EDWMdhpNmv7uheTaHm6Dh1hWDDWBwx918hRV",
  "key26": "4JF68kWaUfccBLu4crn75G7VkrHsxbPdB1uAkDSfSK8WmxRKxzru6Hyd6UxinMChAJTayj32KPidrFwC2tggUWxD",
  "key27": "3t61qHeH7fWrSWkho87NpsY68LqPjjer1J2kSzNHuyWVBVr5bgX4GRXbAJ8S3ichmpcaRnXbG5D1bNJynX5v2sUg",
  "key28": "4Y444kEoATqLoMSM55HDqxUbjMJkYkqGp2QLVXJ8yfvAXzjsKf2ofLBuxtLWoK7iqC4tZMEUttg51wkP5tsdWHLz",
  "key29": "HQkiwrt2GpxGyMJowRuBnTMgRzoyUZN1RY9pH9KVdYdm4WP4zvPY42ZXGnw7fLiVt4Y6HuCc7jqkvoza41ZJXvp",
  "key30": "3geh9XZxr7y7ThqJSQ3SnkQ32QCtqKgD8u7jnoeyat8tran1LwXRbFA68xNhVRBgVB5APxaAjBAuYPh9xTS2rBw5",
  "key31": "3xz49wqZ3zQzk4YakX76mXiyvYFHv1fEatL3oSXgbJZ7TeUgWBRkpaFgPgcJQRoQu9cTFSxbuLGwisvwKn1Caegq",
  "key32": "4djNpuhU6T7UQpvBrQUu84QxC8XDLi9XKdPLEnPJ8Q72mAAUuLMmK7qUwaK2tFdZKxtei5j9wstoQxdZ9qZ3462U",
  "key33": "36gjkofLE8AP3bBdsD7MXd75GWriHsmoBWodMYgg3UCa5D1VJc7NhWo1zrjKmaEHi3pzZfzUCgZbfBuT4EAZvv4T",
  "key34": "2c6M32oSVfeStA4YSMi2oF2U4pnQvWEN4gKea7Cr2P3YzYnG2yX2tQVp6ki7dr9xBBi6en55QSssUmujENJ8aKrn",
  "key35": "27wcmJUiitYHvzLjLjfHwfhrYPR9rHvhCiJohQ4vxLH35VmAbZPCkVYKL7VpWGP1VhzBESZuwHXx1P56Qbc8H2wQ",
  "key36": "2bWSWTG3743VgCoF1VscbrQ4CU2rpLimd9KhQa5N3dCmMyEN3sxZ8aZdsq1P6b3JVXNkuUzenZQRk35esfymbwqq",
  "key37": "vWBayEhTNzMd39WyvkJPCUyupbmQDdBESgdS8ow7WKHbGKtz8gUWZr9iHt4xBFUcBEoVyBmnG8Ex8mEbaiLCRvK",
  "key38": "3Z4XHXp4eVkVKRXCmbDH4qPZyu2vuXYC562NuJycKSarsiYT1MJdkyfb1JUbZxD2doTjPNtuNZERA36akk3YghJj",
  "key39": "aF1PppygijY429UQCX4y8utG3xGb2CvHiX15oDrWshKndbCTKvjd7YtZoGh3p3D17Z7QfkbA6QAuwzjMgKLFBKv",
  "key40": "2jdNkzVqWQH6ySQjKmJasKRtBMyVRm7vSKXt77a1oxAri3FjUBV5VyTd2J1oWTWkWHZTNUGHXV9qx5ej4LBEWFoy",
  "key41": "4dokqebkkgm6RZoe5ZwbXa1dnAs6sdudmShXRiiKf7PmoJoUs2YnxAiDQC46KcefjZh8vxrzpJFVRBrSxgLpe7zV",
  "key42": "3PJwePdpWbcct2rDCyiZAzdRV978McNR7CmBpYh9grkxCQxKfFesiW7Hh3MfNNH5bXbTVmYMRN6DZYHXJceYR19K",
  "key43": "2hxuUFaKsXeGPPaUEq9WqQANy3x7L4MmCrjscv3XevV2W4H5fLqXfTYQUgWeGX9eZF7U4wBwtMKgHqKLPrkxpfHs",
  "key44": "z8dmrdHz47wn316yzQtmu9KAdzGApqyeXjwJLbX1qS6ZdA8RypGWWoNo347ivRAeGoox3tSw8v52cMLCGG2YPDx",
  "key45": "4KBcktQpndGqTGA9UCUqh8RqXtjYtf8ttad2YcqSG3JsC6VkesCDhW1S3N16XaEhmxg7mvNG9LPLz7mDjV1tchci",
  "key46": "5itRA6aUc3Yb2kA7Hpf3D4RaaoqNABiJwkm8WN4YMMgHN6UwQx2y7BpnRdyYPA94rsu672BA6aiK28YzrRHmb83y",
  "key47": "NiC3V72KwoTD7mvtjtNvD463ZVeUKtuX8WAu4L436WG7zhPJTaHTAY2GgNsQR1d8PTaVDm7MT5e3tKwgNr4my9M",
  "key48": "4EiB6jJfk2zBPvsTZdexAejsEX8yRnExojVWc3JWHpfSke12PATdJ4gRB8esSFF9bQue8FY2fJiyQbPSuqWU1W7E",
  "key49": "hrbn4gtU9b7Qi4EtVJbe7Hx2DaMUur9w85qQfRRUC7Pi8TaTzzw8DDBYXTPxF5JfoNY4UHNqg26za5Go7zw9dzT"
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
