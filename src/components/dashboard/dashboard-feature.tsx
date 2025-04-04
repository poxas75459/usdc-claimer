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
    "2By6s9EiaeSCM2tLZfnL3PQdwr2riiBDze9sXGeMRxK8LzaHssdWYRFfZzgphvjbQnAL78Fa3JekTWXHaXVAWFfw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65LsV2A986dbgwfkYSxYYcPtYA7xRHH8pTB9SkTutgTQ6xT3tztpwCLzCpwUKMrK1KFuWpsLGPhBWUosvwnReRJo",
  "key1": "3dqzUNST6SHnkAtT1ufZuiNmVv29GoRPc1D3BLb4XjY3VopvrTNPiHn4YjV8ny6k2Jr3WrESR253xpQfhH32dVp2",
  "key2": "2iaTXoeHvoCmqbNneXEcQGM78E2khhUdpYuicRvd5GBkemN5ccZ1a7Cb4L6ZZDD76MHiMmPyeALQWJygqD7Teb3A",
  "key3": "4RDjbHHxCVWtuMqCD1p2gXerJjqrjUfDrG9KRPtj9P9oHToXHPaPPUCJb3RUes4RS8Yfari1HXkTu9GwtwBUR1j7",
  "key4": "3TCmqqkHCZ8J6zAZ2wrzcbQhmRJRdzGKa4CnRJY2JUKjbkiAsNbg3Kr3GcEMAjKpRnXNtq8RAZoM5BH9TTYRWRMk",
  "key5": "4cKyJuEi1F8FS3xdrUAfDfm76B8T9gTxoDsjyguKW6oPrFFPNvEyTfDDbhVMhP8dwdQSKDmTpaiNmf5st5CAXtuT",
  "key6": "5Z1SZVPXstzBK6TztPkVnt1DZtu51GF4raMJ7DZkaHJxKpcUJrxEwMcRiJu9AtdaVWD7Pv8261CDVvtvwr82jh2P",
  "key7": "3RKFnTfYvAQ7Fwy7j1DzwjpjDfyMrWHBiEATUYxV3zTpagLxjtcdTcHurW8LnX91ofPW5Rju14NXMi7nJ8MK6sHm",
  "key8": "26Vh4RXYhc5H6dTKRhzbcPGstWVufRkZ2Zkjyk5m5zXMa8BF1jMizUQMbM1TJFuNCuFG7jbWMStYUKSU3VGDD9yB",
  "key9": "44atHJjTW5p427raetQo88zvZHzrP4jCL9zn3NTTjj4oA5fnsgKKJ8NBikhZmHpN392QCfsJrbNrtsvnMMHjzAkw",
  "key10": "34QvTddzQ4CtQUcW5G3Fz4fKHTgyAVdP2XMYM1QFNg5kZHxMtsNEA9oJH6jXUmJWtPKH6Ud1iCbTcka9XtJd5JYc",
  "key11": "gTwkzVbG2hvwE5WX2damLDUkRgLxKz5YFS6dK6P8UvEmXYeM1e56kq3UGnPSKioBfi61rhiwAohuQ9odnawDXRV",
  "key12": "4MqVDrRjCDohYhfcCWAsq6wpnyTrcQVxFTQ712vbE3jQ4hHkmjMBjgcEy5CxercgYQEdUxoDRQaejwoG3fz1saub",
  "key13": "F8Fj766h1A8cBYfnyB8rsHwqfeQSmfgPRUUinU9AWy9yzLzixEEy5zwc3ajru5RnPFWAwKxFcvhi12UZTBm9ziJ",
  "key14": "5sM22FYaShj5NQdJJ9vU1QLtnvfNExvBFu2TBE4s8yJaiNTfn8gBuSnrcyUpPGLi9Gs2xzwzJkXQox3eQswbSPKB",
  "key15": "4iLNq2mKaGjbXkt5ow82D4hVpSPgk6ZBSpdp9G65GVFnboSpjBEwNCio4GTvVZegYCPgNs7ikph7KKobdVNoRrkA",
  "key16": "5GmGUFuExfnmFhoDBtAy53dvPCe8mWCGKtsT4C67CrZqWXXdT6yAES2VdGo7n2HQMoLriGnSYNHHZ1ZAV9HUvcA1",
  "key17": "5VQhMy26QdgX1ULgoeMPmfoKSYfubkLMapbq1LL34jdQZQWW91Acf9NMuTTPBcnUB4P5BB3dWbVrBHhqwxvL6iNY",
  "key18": "3VVkZUJLoTypWUDhpCmjBBX67nk6ksDBGLUwffT5RcMrXNm6dGo5GcVirojBZu9Gn4NNe4SbCMhdoFzimWeVBq21",
  "key19": "5KgXSwYc1oGwSWE8odHNvZMaozcLFqxApxP8pkNxA86bG4MAskcs1QiQci6spRiiFsTaPXD5qzHgmhhMEs8VthLM",
  "key20": "4DQwACeYAL17Mcr41BQDWALpHHz4x2k14LFSPTYKfMCoDMbaiyjdoU5G53EYvhef3rJ2aud7fLux1aCdaaBbUBbs",
  "key21": "2cRpYgdN2S5W6z4NoZXtccYAFMdMtRkLTC72MpAw3uVsnZwgFPk1RtgKepuhuw8NSaPTLopFFsCsTMkxAgWgiS4a",
  "key22": "7xPkNgTcPytKSFM4WJ4a9EuN3fyfeRVfNx8Rw5nV9AhnguyKLy3KwjPjo5QT2x15vtaeJuzz4fp5GvG9GemJrTB",
  "key23": "2LKXtLv3mxdtZBakgpSHk78F1qGgT1SaBhTuAoE65FAFBfuUYzTRe44BReRrM4yBi389YA2CbhQ8xBuimKVeXQkq",
  "key24": "BNyN3DhsKZNhs5bVMR4kAoUWq74TnjAPMPWfUdCttfNJvSeywBPZUWjaG2wW9ajTzyv2Gx3iTHzqEDyF7ai2zG2",
  "key25": "3VZP7VWcR1pjnqAEEMRzu6hDhGStMmt2wb9RvCGFaGGzPZKtLBbtxDzZnByyNWGVD8sbDqFeWL496sozYQ5Qgpo2",
  "key26": "4kjjTKfACNVP1z4FRB8jLrmDaeV32B5KHQzDawnWTeSCdncjnrUP9m1RL84CBFvGuDnRf8n9NUym6BWaVzaTvPKC",
  "key27": "3ijZ2DLqHzvAQxUakcB6S7Js4W3v9h7yRMyvWtPphpijWHjqohyF79awWcsrhDXzbvi12YcjcQskZMUDGWfUSdPK",
  "key28": "3BMPQ4Lysc6q3YxkCoVVges13ZCQKqmDuEdrhHDm4fK9L4mw1BriD3DZvv7h65u2yb4TD46hjjWDVXCqkXecFma8",
  "key29": "3oSykn4TAQkURDYKuqYpivQBFeLSswU8TYy3EADTqeeVTTi3gA4EYHM4EPnMrR4XtUM83FRFmFioDpeuFzvAYZRb",
  "key30": "5iFN98bv6wxGQhaQhBe8hpN9Pa8fmKLV5abAyriQDARoLuz95kvM3u9CJ7otQxpDQiQgYPVo6inuM3sdWpRS2CdT",
  "key31": "3wPAkYurK33co9TMydQmhJXwYpkPZqocCZ6DUNraPVU9ptCs2PXQHZDXZC16SdKiuHV4S3VB4LqtXhtN8q9APnm3",
  "key32": "5gPm2UGnaseyLntcpz7rH1YGeP1gaTKe63YhaNtJTfWYaKEBxKwpGfpj4LqRB5CSFRn4u4jFkzyogk8D151Tjsvj",
  "key33": "ys7K3MQKLEdwT7Vscpdytmq3QnP5BnRdBgwydz1CuRtJwbdRaQtiAL6dMgqcZ4cYhHj2xsKumrnk6VKyT4tkHDh",
  "key34": "ZifKiY5kb6ipmTLyLm7QravuRo1jpihDK92m3dKHgYJbdzdVraJPAX4G711newQWUD1PxACNRiPphh2Qtxuby1g",
  "key35": "3JZzKChEc1B1MNmrjqypfdactrkTm4QBpV8Q3Kpanzw7dQRke93AjPdstFeMw18wvDiBjcEmmm63n13zpcZXbYeJ",
  "key36": "4FRiiiF68DjkNLwXcE1wtdy6Uep19kyexkkzs7DY2qbGoU2z7BJsLzVs9Ym3gtu1416bcPZUrHkpnLdLpc3pbPQT",
  "key37": "2bkyqTapdKe1dRV4UpfJeFAjyx3aAa1BSoSB1CrT48Qny3ZFaFfEGKSmNcmWVJfjuLALuEkEp9kdVxhFTTrcfHz3",
  "key38": "4WdVv5HSBMH59DFbyEFohgUvRjypELAJUuBUKPoaSuR9qgVz8fPJCuiEay2sgsn5c38RNs5zvD5gL8pLmoVccWfi",
  "key39": "2MxVztCQ2brSivaxFXoaJfzy6GjgjdTZySE9zhFtqfGmFrTaTWS762fge92hppSxnqZ1bnwiZC8kVBAzpLBSSgq2",
  "key40": "2YQgyXKPAPdRjYYndkmKk5q4Ex7rCL3UH6GgCgNDGCUi6XsJwpdGr2uvbah9CY1ib76fVKTuyycVLpmn6cXS8Hwc",
  "key41": "3hkG3QgXpJtVLX9fMuYS8TU1iBkDYmHDLisg1xePqdbonsMa6TdPp7Btn8C4WWnAHBhg1PHshegkRHaQ2bjpRfsk"
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
