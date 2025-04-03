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
    "2mEMm9JcDj5tmPKDSPLFu3kSv5wQTYmtQQzdfbEnH1azf6cFhePQpT68NSMuUvdkmgyHwwqAnqHZcnAsTaJ5MSJp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ecLQ8yjy3Ckf7AUz9UmwNfEsjsswb3Jf3K4jqGRsopBzAi2RW4sAy1wvgUUTAUv5t8HPWYuEcqi1WxAbkoAt6Kz",
  "key1": "uy4xfENQa5fWTAPAUDcNhFhPMKYvx2b4kEmsXp5NQrDe9Gv2cs7EAL8kpW9k7R268hhHH2AkSxeTbCqE14KBiWo",
  "key2": "5zPPuYwXPWE8DCexYNa7cj7D6a1x6QhTsmkUpkzqtuBoC7qdRnRvKvSHAvCYvrYRoeK4aNquqz6tYS427XaG3rJ2",
  "key3": "61poAtwxoo6xVyE32N7s4gSKSSk5UXtwGVfC4E1Ro5H5sSXjhDXf91CejJgR4Cs7txByZkNGAKdrxLSkP1TTDogn",
  "key4": "3MdGn572qje1wBisTMJB56s7Hi5NKPxx8vFPbQJy34dR2yLJeowecJNKXADW9yK7Zc87DjtkxJR3xiTE9JcYvLB",
  "key5": "5ML2HewzzRLaVS5KCbFJ34x5tBi68MrBrVFJHzSQFF1LqCXnjL9ThbW2QM4HWvKHKNnY8RjFCfEYoYLcH4VJodCN",
  "key6": "26HxqgbNd5uCzYkDXWtSrWnQUcUesDrSKM6GKBU6ak51FsQrLU85z6V2PYaDCaYSiNPXBc6aRYPUqUMtphQ7HsbK",
  "key7": "52jhe4AeL5mi6VR62rLi1bjdRNTt5HdoZU3DLXATbGHXX7eTMnberFkJSbxVanuk3RvAdWpQdvAFZ7dQJa2s63Vy",
  "key8": "4Wo33QuuUXCjoRh4SJoyBdTRW9UGkGpyg2e5ofw3hYLfidMhqFuEY4TdgEekYX2JntvhAPUTBoJGg3ZZwiuHvwpH",
  "key9": "2CC7NBUZC9f9J8SUoTCVyvs2LnBpfaqwXBfeFMGeVAEyPTF73v4CgxE7XSYVgV6ZxBF3jL9HVsufiqaQkVfzeMjL",
  "key10": "5cKFTEJgGnmm9D9wqbDk9mmGz1HUJ1WRmvGE3QWdjAfJPmudNZCHqSNpAxgqQPsN3i8hQEKmxj2sYE3qQqb3TtrX",
  "key11": "2xRKaG8Uxu3rmngfzBLEvmaLvnKmJpwcZFh3CJgSpneTKx65xicZ7Ur9GH2dHXrKJcEq85ULgzF5F5c2sfCRCC8r",
  "key12": "3L1mxRoAyJtEXL7nWSrjv245BGckzViTVa5zvnuCSQvYqjacHtSxHxyEFw6k6XnnYbs62CExWGpsapcmTEGCntre",
  "key13": "4rS4GhYyQVhDgKJtCHaAFDGCunYP3TVFukYpPCDp6kX8iPihr5fJB5QwgoSpCpFt2SVvZ3HCMoaduPUyA1KvyTfM",
  "key14": "y8reEXqJvHsgPQSCh1cMp6Xp4PiXMujDZaVMbRnfe7E4zV7V3k2LLXP8Q6SscsTFnJqnvTBmkePMF4GY683dYbP",
  "key15": "4GwNGJeA7v9cUvZZRhzQ55La36DKhYiBd8dJTZQSqaMcstz9Kapibt2xe4v6Y5mcgr2CipPr4gNmbfZyBHXGKQaQ",
  "key16": "3RtxToyXeNCejE464rPLmAncnpvjPDqQG153FTueMB6kTyMCZuPQsPrGLuUbYAL9Ep3raEMzgSbEiyM1eKASKLxZ",
  "key17": "Wv1FmJi3CfEtxUGcC66hH22tQMjeA7vLNfn11x55Kb7GbQ7izoCKAaJggqjjx9d7UVcvevtmxmrPsgUffyUsyYy",
  "key18": "5qUv7BYcEemEZE3L79KCNob7SmLS9CEupniuF1ydzD2UvqW1W1S1SekBfafhGbo9FGaugFUSpT2ee7AtBWLaDHgM",
  "key19": "4ZFCjScvPQHxCp8pXZnFDL6o7cUNj5FcN619RQifUfCUYyRunn5tEqnWZ7qUbfnGryuvpayQCkDQVk3bZmESejNX",
  "key20": "ZHEadCc7HbXzV8hjaQxyK4wfkKjQNo4Q6NFH1QMQb8MoJreqpoyH2psSAr4Em66UB6rLnXVHAnMrz8xRCHxxkq1",
  "key21": "4AAJus4G7a7ajaWbobGcAXBV3MqexuQ6QB98boiZ6BTCV41pFE7igSauPzrbWbyJ5ddVtCqEPrfFBSXH1CwcGW7e",
  "key22": "4wW2nxzEnWWoCsYMHpzBwmspawi7yXhQ2YKm4Z8mxWuK9sTXqv53GmBHbZBC3FrubK7tf49Lo4FvFLzhYjrQc81A",
  "key23": "2pW9PRfqykpqQ4pqdkqfJEUPhBrsvHXY55FX65CER8cnbD9Lv2DNDjpkXrsNeUQ394t9EgnGDqcF6Pd5ERs939CQ",
  "key24": "giJHGm8nSxAyWRyK9SFiBRLYc7niH7pw5hYcsSLUiU5YbEC3k51ctw8Mu3htEb9yP7qh5bSLQxKypm71K5hoYze",
  "key25": "2EXjP3QHaNGh9QNRDMVVycZnn2Lq9iHZdfXUfBBeSt4h8C1ZbmNBVHcWWVqX6n5SvgraQ3TFxiaBEoJauYdaeUxj",
  "key26": "32Qox5f8TEHwEh4YUdH9cYLQsm9FVjEpKLvYUMnLhDLCTaeBgmRuLvuoATP2A6i1eoEcwEKEQP66zpmpondzvTpK",
  "key27": "5qeYish5yTgdUgUDZSShcxLPb73FRZsmMN7bNTg9YSTnjyXxhMGY8vznYEXMvUdKi3MNzFCigf9eKK7yGd5hLkpi",
  "key28": "4adLv3a9BBMxPhSXpEkegBytw1winqrXK6RLYNd6byAPP2qVj1QocD614TYD1S9Sv9gZDUEj44MLmM7TvbFqaSeL",
  "key29": "5hWuut8aKWQo4pkNZY7e1XhyXwPThcZcfu98cbydcjncU7SnR43gAFAWBpV7uPfRvLkewUNauVGCAjEPskPqRYEy",
  "key30": "jAm5c4YZZ6JFXiyzdY1YFYFtvRSvkDiwkyxtr6uxBc1M2hnBZUBwufBCYoxoM5CKt5fe5uAwf27JpHm1aKf8wJc",
  "key31": "3zoxTAhZUSyf1rtzDeZ6Qo8Cvvrs5tVSRuG9qAo2UArSvz1czwFb3U58ANzxfkBuT2RMFAqjWEXVj1vrgAP1Xc5H",
  "key32": "3bXXjcDPpPjVqsRZp7AYA9XvZyqCG8KD4bpzYjFShk4KRsMEpHxUDket64Ckww2Dv9aexdTECqmjkFzuFd5bo3Jd",
  "key33": "41NXHm19nkaiLMuQmjzkWgzxDXW85Shq2tux587Zm2EtxUX52MUdWHMHbXG7KVCKHbsg19ZjJwSYcj1tLQ9XjfJP",
  "key34": "67ZduBezTrRvF8HDCZYBVuUQYPrj4Vpax5dMbhZxwhKC52PZQzNvKtjrwU9XPRKekG1z7qm5HR6u8SwGpLYVrcxo",
  "key35": "3Q6mDwE8sQSaYHEq5K2f3TQMSS7sgeMKxnTnkXmboStjAqVyGYuFJQc64C58k1j6ESxoZfuyteSJdacAk5yFhiR9",
  "key36": "4nD9eU79HDxyMPeRTmcPQiTumRFKn4T1cEncj1Y8KR6yiZd4xosJjASeoPDxNV8sXFeBfJRRK2deMQVAKpeUXNwi",
  "key37": "4nGfTibo9HkEJ3EGSqXKg78Dmfw7xhqQ3m34HpvuzrSAEnCb8CgWY3yTSbssAFFZEZ6QHfpwq5B4hAWHbYMzrPVK",
  "key38": "2EWp1xKRUvd9mhqPnsHnL8xK3weFA9gEF1xAhcNMMZUsWfoSg71hzPkVcocubr6RqfBrqePZRK88ykXm9Cu1vtCZ",
  "key39": "5QTe2TrGr26GmkKeJxJUdHYNTq5d2LFt5cVVUDE5d1nWzyb7WjnG3CNzRbsHFnaoA9WzXWTdD4Gh9akCHzo875JK",
  "key40": "4QXXeANhzA91h7s6kydRDugfVdacZhwQxcHoDaDw5WkT7EdHDv9A4MAY887eNL2QeyWsFA75mv3rqmvURE3YUv2u",
  "key41": "2chTUjp5teRb5jieLjd9ND16Q93HHgkHqqfiEC4qXpNFTzWyoJMSwCE6W5zU2dMm3GBaeSV7b89SCRWn6BTY21Mg",
  "key42": "USkGJFTb8RjyEuXoR37tcPpdvUR8u8KLubPk3soo5xkmWChzNyzaPX16uNtWf93ztxJBnjjDcEamLPc8Xp1Woo2",
  "key43": "614gjQG8bZ62VURuomef1qKinDb5sqVFvsPWw7Ur6Hdha58bZfqcfBCQ2QQZjH8xUobUPmqvqgMHYpeaH5ouBw67",
  "key44": "5dNmof54YmRHS4LKkUkJhfcXbZFBjzg6ATrwrP5xdxUQ9Mga9o61oW3GefMny5CK2MSreYGdJW4YJosn8Az3mtmQ",
  "key45": "454ViHHqNaA4SJ1FzzMAhiwrZvib7XDqtcjkB93ZU7JCC6hh85S8MRFHz3qpCqZBBSc7Mq6wXrg5ETuKX57Uf5CL"
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
