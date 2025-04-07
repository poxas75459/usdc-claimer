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
    "2PdZQdCafW25YCVMBhizSPy3YCVQCYnj5Z4jBRyZBRdyxfQxPRKYdU8sp26Q8VWYerFkQp48iWtzGnzBnhwcMGB4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31uHXphCh8VumsKe587FAfxgZMgvFSyX98BAfkjVc9wi6fMAF8YGwgMERLAspRNvUb3tqtWdQKj9PwdK3kV5viKC",
  "key1": "4fw3XU4UpzTTvQYjSUvRywxKYEUexJjKJZLFUtGJw8AzzzXLsUyJJstDMQR8NeAFpaymhjE2m9jJKXwFkRcSPtDN",
  "key2": "t46A2ky15c16ox2e3G7jJjVYHPA7sXrd9eUR5E5Vgag7jbxk4eMKVXU9FYpMmB7XsSiy6W7PPMX7wBk3H8YCY7B",
  "key3": "43TTA6jwxMNoRPqBByAkHBsLT1A1BbyyhURo4Yrr2AEXP6e2gLcH6vVNHGLJXshyv4zB5sQDvRSEMWcKpD2SrbW5",
  "key4": "48MNgFv6PJQPNK7GbwVeMHUnbniYsRHSp9mkb2sLChVsBcuZ4mNgTZVrpwQPTWGAyneiynHFSoqJy6Zh9z37Vq2F",
  "key5": "1AZ5yqDkr7mPBq8SJmGEYqzZgz5vJTYk3dWAaMtPLe2WbHM2a93Fs6S2GKm94dEsZaXHMVfGZ8og56p5WwCyRP3",
  "key6": "4L7ju9jdXUJ8DQ6w4sGQJnzbZWtNKWoFmgwwn2svGNceXApDhYU6XzRZsSkirrxPYcfbk2VbBiu6jAZca1Fv7gv1",
  "key7": "5ahEjLJcaRsYLwmxE2PEiwSVGPkyhofRcFbGiE9KZc14nwMSVE1WGPgHPwcqR69gwxF7yzGrGSpyTDeKL7pmFvGH",
  "key8": "26RHRoX8WpJzfujtCx2CY9oDhDa21ikk5C7heK5eD1kc4rAYDpkL6dAtKoRz5im1oGEPWPpZC9P1Wu5FRokFYYRB",
  "key9": "2jzzSKTdCXSFfbJuoJpxijneC4i82Qs2zytPpoBHyQcZHd5RWHfGD32T2Gd6vXXL8ko573L1KVDkiX9MEL7kbpo",
  "key10": "3GTj1XXnYoCGFBX5wRLBcw4gK6jVXuEC9WkFhbG1aKP7MrDRbGWFM6rQAnawx7EmBqnWtNm3d7Y6UA6qXSmZqoT2",
  "key11": "5zvR8LFfRz8EZzjgWfzrZ7dKnm8RNPpkdMREwJdziPwJJkLYU3UqASzagfrRBTGz7KoVDBdXBvJRRKY1ENEwgG6a",
  "key12": "WXuzpE8EaUy6gTQHYMxgUJB1eKAvgBSCpKD7hqtgJdrAuJydkJF4wwCVsAqiPcrsS5Ga27VSkdcMnygSM1TPJLM",
  "key13": "65pP4g7swXqURrPJmFmfzRrYN1HfrW1i1KGAeX9WKxUcbxxxAXDEnAJpkBVB4A2SvLHNeTYhmdakyFgRyyUPJ2KQ",
  "key14": "2uFyLZ7q8hLwemY5ZQe2yoRpE38DwK8x9ZQZE8U9PTVf2F35WHh5hQc3VFULjqmcFfjuYXtdyPXhg7mNRySgJVmH",
  "key15": "55E3zSYqzQJFDVtZtB53fY3mED5YZM1yrNRjbxEsJHv1MZNM8QNXYb8KkonANrpH57X2uiyjJT8XrhGt2Jz5b16v",
  "key16": "2pc5hxDdSi1VRJv1nDLSJbVogVVvtn3D4sb84a31yLsnMUN7dANyEyVGZ37kRcWmS3NyRpzMQtr5rz85pUSbPqXF",
  "key17": "5dryQ7MdK26Lh3LTRU6m3H4XWmsBQrYwjikdysz2D1sutDTQzZQY9cbkLEmbsRBYx3wcZnGboq1qiDMKqKUpugaK",
  "key18": "5qT4LvY9UDZgapczkMv9LL8oR9LhrfcKAA9dXGp25XmgTDsovCV35Vipd4WVV44uXYTScDLH9wwpnW4p1xnk9WAX",
  "key19": "3SkKVTiF6Vq4P2KtMYxArJR3bQEAdXq9mzNjDaCJjyk5Wb4Bsce42mTAtACGT39WQdnGWFRJrfsTETo5jxJbtwFe",
  "key20": "4kJiRBEvAehEK5jBLcycVYsPXuFRDh2VBLphrQjTw3GvM4djP6ztvSvHwEAJscB8T8M5fYUaE7ddiMvqRw4KptiQ",
  "key21": "35qkVgyEoeKtn96FoaG8noPQ3Py1zBNGkwdHZmC8nDkVfnzb5WbhmG2vSpg9TQgecr8mrmruaJ7W2jJFjog2QpZC",
  "key22": "CmBgrSo8xBFYJe2SmsQhUKLAGruYkAo1Dvp2EhqQzPkFxthGhKdh7XWaSA9wkaKj7LzQ13d1C9RVatDUg22xhER",
  "key23": "2qt6QsmMqmMPmS1nJ2aQo8P9FWGDxr2oeYnQYJA16q15Xur3wfEvwvKVQHqF2SuwF3HA4Jgg7HeE229F2ePE1iHy",
  "key24": "5V9ziWiFgVAG9aAuh8jjUJ8Tnu1rbTdPVaiaUjm55rvAe76rL6p591gD6m4sdq3HmWXEX7VrvpFdCqHpXh8TJoBH",
  "key25": "wCMrMXaPTtKLasUeHyY6rL93U1Ap7Qawq8eVcJPkVmQ4RLcjPhdgWUskYxrwWq9nuTcLEKVRfoXHrGCtFybXenh",
  "key26": "b2iAutzAzTTW1Lak5A9YoREaDq5bBS8nnSKbzLE8BctdAEFKQj7wLo55p8xjBbjcCtq9ne5uRn4xaDMWXyvzkAh",
  "key27": "64wT3dw8P9trC8Whi1M4Ak8fLRYbxKyGCKucE5GmjDSwdjEVxLmt38A5dGTNVTfxT2SYTuLmYoaAB6GNXH7qzxbT",
  "key28": "3ohWoVhvUPDTgUi2XRrpVCrNXWEwHd2NbCD6whueb46xyVYYFtxrNUd9oHY1Xy43s4fpJKKod99hLkMzcPnLmJTF",
  "key29": "48eTVThCNyMviz6huUcdjggi1W26Wirxp5QiiGexS2cac3LJwjHdbXef3E7vKoBdab6MqRsRk6jCTSGHySJBgVb6",
  "key30": "5FR6jKx6j8iXkneDdz1MEFbxMia7ThPFcRfRBRaLEcd9bVgTRcFRzcS9Av1RqWvJ7DWMMB8Lh8uqucuhApiMP1Sn",
  "key31": "4Yg39TYWe4xZosVemxh1XibsVAPV6NPVCqYFKHETU3Eq9XkPFWAMBsDJK4MJf2EBN4dttJMF3WtfKBifo7UShf63",
  "key32": "4ZsF6zDAJuLpyFkhQtL1rviFftZh7ZyGcMy5Dgv89xiPpjgQAk856MTxtP6kRri8AAHR7wbRbjNPL7vTXh2eARTf",
  "key33": "2qnqGYR3UnwrvZ4Cf2gBJdyoEV7vxufdTmsdgF89tCv8xHs7akq5crc4aJ184J7ZfnyymfxscrU13PjCRxmmtyuY",
  "key34": "5riifNnRkzaxwTiyLBaqELHwZ7WksNqUm4WQaxBpAfge9RXFwRPgopAkud3s7WYK4E4tD2p8UAXojnp3Sc78pLL6",
  "key35": "4JiJfWKQ3TuwM7YNGscz1mQZCuTfhb4nZz6bn2QoaYg8hSdLas7CW6oPLr4wu5rbzi6gG4GGDkjZnpfp8iij4TyQ",
  "key36": "32TTyntnk7iKjhrPYeezhvGGUtx6Fga3Q6A5wHKbRXzUvUR5cLcdMWUZiW16993yikkc5FbjgtUgo8Y86G97MSiu",
  "key37": "58sUcpfKgwwTzjgdLm8qdRZc1UH3bUXuwJDVZvzaqETJxvoGQhtyQZzCUATex9T4xcewYx1TMf3idGJqw6howeSc",
  "key38": "2tJQqip49zeud5eawF2hCoEYp4Ln24mSct7nFRJC7kbM8q2BRiy2JoxmtdrMNqRszs2XP25A1xanMdbS4Se2fagW",
  "key39": "66m5b9k3sPPUuLNhfApnxxrp9LmYPDoedgFf3C1kR7jseXF9UPCV6d3f62dLnFdR1wrSRz2Jd61uZnc1XzD7rMa8",
  "key40": "2raYLCMqaCyY1L6wMtJKPnwTD3MuFnMtKUFTidHUaP58jhUfVazFjzeQL9j4VMLHZHxgHAYfBGP5YWPETrr1MxBs",
  "key41": "4k13BHHr5zNkf5F8Eeqs9jmLxsudSCyQURWWNtC5KJhyVa7w9ifqtoPXo4G3koNRbQ9LivH8nTvQTdCiUiD7MhzA",
  "key42": "3SQKdjeNUMjAiSjPmoaecfSewP3eCBbPfN2PmVGvDQ9So2hkSKHaQdsrxfSt4udToM2pkTX99XSjhqeD4ZxGVeho",
  "key43": "RVUrNKdVfkTUHM8oQmUTjsTgnGzuXrwLKBfyPni34Y4qaEdmQqYBtDKXys9HCSRfwicB28sejDXLTPwyHxMwnet",
  "key44": "3AdZ6oXqkyJSbpn4ucWQ2vS4ePohmPi6NJnmi3cHDE3KmqcdFynoYxEBdgtg7hPbUY4sQqNviF2x2QN3SYG2Lag6",
  "key45": "YgNWJRn8ykToqpHUqUZ4e77fvAt1n64TtHFVxTT2HuGmYP8RoXLr6sjLeMn78xvWUDshQCxLP9sppr6DcfVwHfN",
  "key46": "58B7GLeyaMqJvyvvPJVWBTRsiB7EVsvevF6iJPZ1UcujmNeUt6m1rwDGQKM5wprPm8LxY7VQM94FFgTTXBxs9nPh"
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
