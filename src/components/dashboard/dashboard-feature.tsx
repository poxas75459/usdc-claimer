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
    "5FfLK3d2ZicSTbGwMp1Up2WM8qsH2ymVEJ6HFtJRiBxj1Uik2yKwkuT5vMZpZEBZcFwrEdGmmfpKe6rQMQ4HxRQY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mJ7GRZKwPLDT2WM3B3XNGfifNM6uJJAuJHYCQYPkcRgDYRyZxcdN6mcP18W4jzLLT9ntsixZb2S2iiZQMjBv1JG",
  "key1": "5ogc3jCZnnF1hhHSxkgQyXCDGKzrFcoYccBixaKwTYbt7seAFrWiiiXPCivt6o8sfo5r4NDxmKZfnLZPfH8HVmnr",
  "key2": "4ofFTvRc9HJBxitxvHbSbgyXtiycqpt7YzcpbNL6HAHP1Jdv2YuXmhuyvFmcfPz1Q9sQm9EFNFrwh1uACqkaRJxA",
  "key3": "3hbqPzmona2UZqjfCu1c5E5GHQGSGGYVQxbsDZ2rEvuFAmaqwosx6rMojL8u4cfV7duhFWM4WxXMuuTgYKUbEYtg",
  "key4": "4Yajyi7cpjNvosWiZNfBMwr6ARRvvfQX3jHpouY4EtomMhHcbngLmUWyMbfAAjU4oin7Ck4qrixn44SkCxq85Ri2",
  "key5": "3ncuVasUdU3qGrRLit1UMqkfMnGkvCx2hG9ES6Xdrvj4ZLZhA2dd6T1afrUPjmQLncDE6PW2mJGdEgAR13Sd5foU",
  "key6": "5uHqiZhUSUgcVHbiLkM6eFo54RuqsxLPGkH1SPpSZEdTEkMqJuoHj9mJqKuj9EBqpJ81KRCNEDRtG6F1qzXaAiGB",
  "key7": "G7QChgaaVw6XDFy29psDAV2hy6wnLjxqEwuJhDoee2pn5sCuu4bCAXK5ojTAJt3Bc1vF7ernwoqQKKpNzrHsWn2",
  "key8": "25KaJ6cfcuzMbp2Fm2wFRnT4MakFaash9fT2KPzRDVh3Po79AeU7DMnpSWgPYuVPuPA83ZhFMeR7BEhjCrkS5bHM",
  "key9": "2kZ92u6x9gfWBwQDnb7qneV5qxr9Jf4rqe6DCrWiy7cYKwYwFLCRoDwvVWuCHRQzdumNc6QM6TFkKJSu4R8hErZc",
  "key10": "36JYq9QvRVdKUT3juTiiii5yH2Z7HNcKcUjJfwtJULk73aTSgeeYRzC2NfMuts7Z6wmM9TQdXVAkctR1Ujzq4n2S",
  "key11": "37EDZLFvRtRH9gHaSfZ2zuFEjNBeP2qirhgAMMxeUkadTnK2Gx4KLAEuyWzZtLTDgSeDNgMCXLJi32WtP92WC6Ct",
  "key12": "2kdQRTabv38D9NsPyUL2ogxEvLqE7gR5GtcnEQCDeWSPxKtqn8FvryeF8W5661o7ejNdRWMHhXSNbVYjA5NwV3oq",
  "key13": "4YAJQ68hxSSLVUosKWxuJXwK6YRzFKUuUvfabPcHmXoxdfJ5xf4gq8sf8UKKTgJh1kriNAAcmFEtUEN84iJJoEZX",
  "key14": "3Zi9cyNoX4YWJVxMiQE7Pi1Ja4ahBZPPa8NCiZ742DAxQp1ARycLqLfRkdRoq2peRDZNxYb3bk11sP9BPtuKmaDW",
  "key15": "KyuRjW4ZmBn88KJ74HVLvNzn294pJyoy9PXZR8hAiYem7ckuw5RBM8tDCQRVMU8Zq3WjTcktb7ZFLvjpgv21vSF",
  "key16": "4GpP8VPcfrkRSf8W6PR2kjKpwdd7MXZZMs7Qn2BE258WHKZ57KyiaEfDfyar6CCZ3PdqJWZNDjVem3BK881TfQxu",
  "key17": "4coXUMJWYACfWCsToK1pQpc1X3iXHFeoLLWDvbsrZLovp5JsG5zjcic1ZVfk8WeMXHzpcFntKEaCbqxxJafr49p6",
  "key18": "LNeQwR8y36Fb12nawqfcAjMgFCZsJxs3QGV6Hth89kiRfFLYCdCTjQpFrKdLGXEUUQCjAximu6cpvtKBznfZViK",
  "key19": "4PWWCkDsNVyGJk7qSHbVEmopSiVUMviWDjWo4V9xfmLnCBm1ESCTzNtwy6hT5axfszgwNMv91vRx8JPRWk1euiqT",
  "key20": "4ZCeQyTPWiCmoz4rK3iLxmc6Spc2EBMyXt8XBfBpMjKTjHFRSkWtZQd5WcZkXTY6B8UB2ro16eQTzw1j5xWuFkYU",
  "key21": "u6Tg2iD6ZNX8XzLrwu13fh37E4GE46FVdtpMAXC5aLWZNeKE33a3t2WgYmwt7HT2moYmjMXgWGpbP6Gxe8gbSMZ",
  "key22": "Cv3LDhnbtB82hvZjPFVuSxmbPk7tBeDd37w1DsV6EL98iu89kV2rivT1gjP2GV9cQhXzwGaLibQEMyuDwWQVRqf",
  "key23": "2FvWNMp1Vg5S7UvZ9M1s9vo6appL1AbjUncMxQpnRCzSyKiqLTqKBwjt2AR89T8NJ8C3MsM3YbpYfwPjS7Dwq57h",
  "key24": "2P4rnFSqJU6d8H9HAsCoemS9gq2B1aXBuABUEi8ueydonMcoZT6yuddrSBgAn2A5BV9EwqmhTrU655MihhjE5V21",
  "key25": "28FRwoXSA6yJAF8s9jYByn6mpdqYDXaY2wNkamTFi5eLtX7N2CoKgEXd1Cndov7FVrry6EZdJpxAJoCZcK7EyDt6",
  "key26": "4bBBDTxyFZLUNBMm9vfGYEVNRrTz3JgpeVYRptVQcbzv9jPCqUWMKEKbnMzLiXmx17kNcC2JQftB4GZqcgHSha4r",
  "key27": "2q3UGUPe4ydXhZx9RxGmD81M4hbDAJj8Ztj3cPzjxtZLkBvnU9EdqTkeabv2H8DqdrRp8KiMWswBtdcVoPvJ2shN",
  "key28": "7fyak2MR1JYLy9aJXHQVHwqBZhU2KdhT3MznJUtgG789PaRPQYy3QYThSXX78sTHWfPSZsg3c2gSHYymNwSTLLK",
  "key29": "3FsR8QMEaJivFsAj3gJEGwsfy65UT96SzGcJ1MTboSch7td7bpGZkTgiZkRFNsCzbCge9sD2nr11rKGGVkXYfYCB",
  "key30": "f4TerTJGquLqCrcsuRTLGuXVJHsDPH64RrjVrNzmxNY714cYWrYPFffCyPdBZ5Sytaib4QWcfs3XTLGRzp2Xt8u",
  "key31": "5zcknEV3rwWHaqv1myRm6uXo7Gu984AMn2hdZFndqhCyiAcDYdWEd52rQBuT1EDkd4xD4m4pSVuronqpmvJACcbC",
  "key32": "3LhoQQJvBoCJoHMDcEbnxgPoTxhxEHowVF3VLbrAkLh8acgnzyLWoRbDoYiR3f2b8rttwN6h22Bbd9AhuwhaQogS",
  "key33": "4wApVACPCHx27dj7npDuqbcjYmZhj9EH78xeT2KxLLir4gB52nttaqHgv5WfoJ5oVjbTKAD7mHp2bASX8BiSBNL9",
  "key34": "tsfChfqJFMkixwisWLHnMeZ6mQxgijU1mRL179Pv5iu7Hjtq7QxiTK98hZMoGiZABzY5iUdyqnuGoCkLrwiwCcZ",
  "key35": "5aH8roGAenyKTksFFpFH85yBb4gnRzs1x9eJkBBbFUtGruU7P4JB9DbH5Fd1hWYErwx8NSE4NCeXfPtstQXBMjeh",
  "key36": "526MQ7a3HRbrwkzTtQM6oGknqFLdLurYfWc32LhjDCCUJg6CTjuqt4sosbPKHsxNm3TYrzRXo7NNMNppHXSKfYzR",
  "key37": "Yzm9mgDnHgXcFujgGb2BoeJ8V8bMmnX11KCyFzZ6cwbG3kZpfcFUc39ga538Aaef97mfWLUKEhJA1Rucz3xf64C",
  "key38": "4owCLoc22tW9hQ4V5N7Ztmy6mCcoGKmakCzegquh2H7jS8qLmtoJ9kwpC1B8jHdMNQdDV6CngPTpn6fyDw2TyY6G"
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
