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
    "4JLfaGSApy14ppTvJMJLw7CgqeStjLJqSoCzXeWMKN6oJj5P4jGwn6LJs1rff7et6Jdn8QUoQNhQoRK4vF8rVMBV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PbHuQdtVRCbXmwXYUS53xEBZzk5wCU1ERSY2jB8KyQeR4o2ATTQDgsCX6WwWZiFYPUe162F3K9uWoQXLQp7RTA4",
  "key1": "ahXjnDPakippZnrVo3JsnNqS6qjCBwNWwZvNj6dy4YGrTpRbvWrKsmpe2NpSNa4GNiVefdEmMKLgw144C7vHAcp",
  "key2": "2ixbb7LfqVc7EViy5ebGS5qjma4HKcwGzpNtskQDhjCRULBRYybJcyXGKLGAxM72mw8JvJKh39vEsWu39f5ZsXsF",
  "key3": "5Xtgg6PZwPy4GjZXYpZBUi7WXS5Tz59UcKr6e1PVwR4ebgTqLs8yGL9ZQzPcMv88CAAb59Uv1KA5HS55PH63wW7d",
  "key4": "suqM3G3tCz4rcMtWJNM51BPgfRPoTxBjJRAKXsQuFgKC2XYcP4HvHoBqkZwEY3xdYys11PD4wjHsmN5tGf9r73G",
  "key5": "4F8CJvgGEnF5HoyTFnKNKMiwSkJn5jNNv7TAEByFMv4vBWj6NAqCaCB9Qhs9hJ5jGS2Dmky1X65skiNk2YTDiLTU",
  "key6": "c1ZXMCb9EwZv68aD9Z8WWEBuek7HDvmPHBqs9wLCJNXM8dWknkj1K92Cfka2f6xashtmDs9SgwR67oFEqPKrgj6",
  "key7": "5FPwgex5D8DTd2vz3CAKoNQMdGP2wd9Sk1ZGxg8XrHmEGQBBhTtCiToMDT2EjynyKLVVEjz3Yw7ukjJrbqKZxSzC",
  "key8": "52xRhsP5HJe6peLEzKeh6i2sv3PBecdg5cussmDZfRiWTL8t4xepF7eNi8WPegm8WiJWWVnujgbjgcZcb13Vbj2N",
  "key9": "2fReL3WF4vyi2pznwTy1EWwdra2sYeCX7ZnuaZchJxpvjQGWeGWnwKGQJEwZKo14Kh2aquGSv4Rxv9QrbjHtK8j5",
  "key10": "4VESyHTC74pWCC7BeQQrFNLZbbi1aJ2TGcKtKGeDvAVkDp9Pn2atpQVfuvYmxcVfCt3VUmZbyr1R2Dk1sihzzYYC",
  "key11": "4qm5Ppkhk47jySrTMWAZWZAK5YFY9h6sWhY6DBth1DNboWUZQ4KxJSsPwrtf3emPXxBhFj1yVFaY42TaJaCgVQ6Y",
  "key12": "3bpF77FJs9gkoCKnH3NY6qGL6z9U2BehetFcjWKjwLN4ktrQ5SjwPpu7dCAnAZB2CT7iEreorvzVuPHKyYcHYfQE",
  "key13": "2sKXJyAfQvNses97iy4hKBzcjcai8GEM4KKdmfWvbgvc1ZzNHAQ6c7Brj5E3Q4Crf59ZGKfSYptDK6ydE8X5ssE2",
  "key14": "mQeBDhouqfkbWGrMq9jsbfAPRu6iAycp1UDcaNKc4PD8dp2VmNg9EFtP14qtf9BRBoJAfAL8QjQNpatvE6E18Bx",
  "key15": "2CWW3Lsr2bYHR7aKpyZsdrtFZYjVyxejcYihFji3nEXkWMMfnMEiyzHjm43vQfV139NuMq1qJ4coYTVnbSJfzzuL",
  "key16": "4WfUiBt8U2nqFsugvLEgpWq2MN2uYqTpxzLKbRcSVxsGiwwNctNiUU2qGitLRJj12EYqMfJKoytLAGC2vMsEQSmV",
  "key17": "4fNzVWrBMuNaxjfEf6W7RwahKgAGaHNvtoLiy7FWGUyXC81xjstJLPiVbZzxXHBW3LBwQd4Sj255ZWRocDy8v6ty",
  "key18": "4CAMvD2TgUsrhnacLbTbxSGYrjcq1D64M3hv5kBWedipFVSGJsdQy296qcdkmLA8ZFEghL8ggPh8cS1LSGVdcttH",
  "key19": "3Y2ebQ5WwsmnGof5ZsfWrFbNqbiGbqvHUESSq52n6XrwkRTs5bRMub5ZJmkzmRgmLy3FFud5bgrr7AfZ5GFmjQkA",
  "key20": "2WUEZgfpwoXtBGAm6iB4P4BwDfd1fLyZYLB4ZneHd2YGNXVNbvhdWuamRwXzjrDsU3SeUnUnYKzeZyV6f8CmGEAA",
  "key21": "gQ3eCkjBqahFjPDsaB9EZ9UL8y1qbfUSeCyScbi2rPsGhdLGG4pktHbjjJXhEybU3CF3M8sGkvPpJngPx2T4eyu",
  "key22": "5FUhsogFDK62LozkXN1HocQoVPGJQoYJemPLXxJ8oXVh1bCDWGCAbHyFVZywmqUnmvv6CS89LSbVgaKdnv5ANYq5",
  "key23": "3qJViXZfQkEC5fGTfk8MGeAuHGsJcaoBbbrnDj8Np7vjJa8JRL8GHYMvBvy5LPQfL6UrqHp25ARPJT1bNC14RVtz",
  "key24": "3NKs6H7y1aM1Hv4TXxfUwqGQdi23io11hCT94mFRgeqN3eRuwZXuVrGDp5wxXy3ArhCB3ZC4wvCFuj3Afet6YwM2",
  "key25": "4tRmWNRZXuFN1FzQUpc32fBiLfbR3ti5BzMuTtSAU3iQezBk6w95xHE3vQsQDhPZWsPHjv2xGeKqpfhe2xCFXwmC",
  "key26": "3vVhGzNZho5R4j6jgyxpqnR8BDTSq8p4yrfFg5ScfSRQAXHJmD6GJYm57Gu9bxvHYrfyvgFEL1EVdMRjV1bMFGJ3",
  "key27": "KhjHxgMY3j6gHB2qFNZyG5eaCjymyiF83kiaKt3SquHbddqZvmC7UrcQLDZikbSpWo98QJ3Hfe3KSQ2NksN8H9a",
  "key28": "4i6vuE3QbZGZZ2dqkRDEexLTj7NXDuMNMtb33SRMN8rDhNXhJg5dV9hoCZfxRGewaq1uutgX9N9UuKCoKgUKDiyc",
  "key29": "3nXmLZGSuUGP5KWyqxb1AExqXnhMQU2kxKFSgDXY5sxyJA4VWmV9rvpv3f3PkbDozU1a1uLYuwm9zSrkKXB9UNvV",
  "key30": "5q9tn1QCxEWaCFjdm5DcJi3EwEMk5isw968iZqAgMNGhzj4Y6LwYb3XeRWipn9QHSTF4sCTiYEJ2akRTH9ZvdRL2",
  "key31": "2NqkSRaXeajdoRmAnv2yiWzB9bu83h797QPpoJqTbcH69Btz12BjQA2AahS8ZP2LTrcBkh61LQWdFhWn8meiEN7L",
  "key32": "3UAefbSg3a7sEsaRFU9rwSACeMZD7WGueDC1A2MnixMDNJyoiKxBbdiMeiHyypA9f2RRNibiNsoegFAWjebX8Eqk",
  "key33": "3nzJXMU4uxgGhYjESQaUAvdgmS1HqSonoKNQfWnv8tDZGgbf2B7NeUqo5RCU4QqMcz7nE1nQTb9ddBb7UR4uDQD1",
  "key34": "zo9scxb6meHySM5yPZBn144CnppU6mpGSMZz5Q1NZJnsc12Zf2fCCNdeZscEXkg6pgDsLv6t8VWPWTuQUcJGiX7",
  "key35": "4pKeMDNb84dyDGQBzV31KfmWZRCKuHeGdKPo45EkNDWhBAAMJJwMDW4bVZZUDsuxiz6Nt6gePxHBT28qoawwkJgE",
  "key36": "rxPWPvbTdPNmZW9SPWp2vvN6XEYAo5kQukB7JwxKRfBEUHTVfrm1zrRZBBM3R8n7dQ8PqtSNpxSPfjQtUxt8sbn",
  "key37": "4rJbyxvf6j6SzTbeob9Tust36uAQQxRYiYb5bHdvrZCJPWWgQgBF6sqew1cKpazdqY4mUEEZxeVexukzjGsUQWfC",
  "key38": "4vhNG5qBtcWrPcd8W5HZnSizETc9pnHfCLZaqueE1Y41mE7DWcEUeRsQ9hVnjMUAHwaNz242P9TeUzsEP7BG4zDC",
  "key39": "5BNb47E7Ch8FDaNrNRA6D4dHv5fRXjEhGRVZ4PSSAK9D5aftDtjFRmqq13GAU7EB65wqbcU5A6Ljq8Ex15ryEhxW",
  "key40": "3AfsBTim2Rsk36ThMMtqHg1b8WUfWk1YrQfTwTQqiWCsJWvCFPsQenD38SMYa1ccinSr5b38t1q3dUzQVEmjkEYn",
  "key41": "2GwrvKH6GSXYF7BiDnWoV9hK8STet49uLgDGeukgJSQziiRnDT3HTGqURxNgPmdRbh6TJd4u6T75Wo2v5wFm8TXa",
  "key42": "5c3R4UVxXwNAcc24nzq47GddH4Yy4oD1MYnLVzzp5LQTCuACcJ8C3etTpvgdXztoWpLmVjSy4yFEkuMVqNigPsQA",
  "key43": "5phgc2VL5BZrsVqJYTTv3cAn1tTLcmjsGvvJgeG6f3j4c9ouxrz8KUoumy5M4piyYknwrMQrJuhhZSMHdAk6nq4C",
  "key44": "1HaNJnsPjXxg9yTKJ14DLLoUK5qTY5MFgQ5iVuCKo4rxra4hsAHXGz3d9Q8kc9BobEDem1TtPnbpZJe64axU8wi",
  "key45": "56jL9hg4CD1FoQfhwHVQYRfBdCXZxo96L8gPpu9Fss6odacEv1vQRpS6XYhuUCVc3bhPGFSa2AD7DmRbnBtqJa8d",
  "key46": "4idVeLGfmkFkttbfTcehG1J2sBdjBd5rVbc26p1cDV58R3DfjQoy5Zv3ihJgAkQd1Zuu4hBFCsJdkKA5JiDz9aet",
  "key47": "G8N3sutWbkB5ey5qQYRkkCy9wvaB8kmHiAAyzNyrs52nvjc1ZRCGZtjZnCQxygsx62LCE5a8GGVbJYdd2qRvQqH",
  "key48": "X5zazG8Z3WqC38v7f3UhffPL51abp1Teq13VYZSuQfesvzUrp8SPedU8eSwVUjMKWrxzfiVQjuqMthskGDkKa6b",
  "key49": "5ax4pRoC5VuzANEfGfYQ98MZrRMmbbNxQ2SfK85gQ59nX3xTJHDCco3EN31fuzLKzDfdJQnXVuhTWXaaNivGiQaH"
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
