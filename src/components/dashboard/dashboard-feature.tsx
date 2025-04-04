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
    "442MEGHKp9Xt3gf899cLZCUr5pCoNTeZzbJDrKBTismVXtaG1LH8kNp2Up1AqGoRx5SZXqBs6XN55WPhgHATDrAs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3P5QVAf9hUDwjqCy7BchgRtm5E2iYYSt4nKHuJT3Lad33YDi2FU5YrCXMmVzQqLkYqvfewWGEYg8rjpxfGaFUE5",
  "key1": "4HrzQAr6mTK4fL23WVtcU3hgjn9z9aSsx5SwaoRYLYUFeTnnChhzFpJiatRyxTQH42NrKycztitynWnTMrmeNFvS",
  "key2": "5iAgqUVtuThHwqDgohcXYmDHCZReUajCQSJojCAp2zF8sbx4WA5UWoUwgoQzivPn8FNrNshd5yya6QUjeu79jrci",
  "key3": "5N9zybHBKtmMD9Rs8t9KLvnx4zFALmEUBaVP5HYn25ihjVt5RDmbMo8Bqgu7KmtVWhDWbzdcQFE26i4AMSaRT9BG",
  "key4": "4WkGuN7uvCHafUZXf5VqicQfUtEgN96t74SUyB1yd6435Nxk7miEBfM8q6x8qMzTWwb2V1i3B5ZLftTb3rUTWsih",
  "key5": "3GWSq6EJq3aUvzAKjzNiFPS64Y3eAujq9PQFkPqCtd92Tz4mJDBZtgEVhrNAro32KVEkBFFdpd7Se6RM2t3zPUxp",
  "key6": "4qkVwDBfadnQ59CfpKQv8zASoWb3pRMmoYUrQKfyzQSVKF8zjUmg12MVgTjBeEqstGmRArThwMfDDK19JBZA8cDz",
  "key7": "2XzqzDq6iBqZVRn8K6uyUvHaU4oLTk5x13aUc8Kvzr9g7zn2X5sm6Uvr8TM17CuCmmFptKEgJSkA4ftjqnZjpHjF",
  "key8": "2nKyoPXDYTotK3bnh65Rxzx9Gnzj9oQjUtgMUARGxZKmDfsPi6cYZ9K1YDvNc8mDZs17sBsYzXH3igrwzaJLjwKp",
  "key9": "4E4vRjv56XJf9AJYbjSGHon8jncmoFsRgBBBFw462UB71djmx5fC8rt6RsYKX9JzdUpuA6tcpPzkwGv1rgJbVQsQ",
  "key10": "3yyT1TM8JnqVjYQJyHGvRofX1PdD1uRyPVh9FooqXiKqoAcfgbTK8XpkwoAHSAXsdALEtc2HA1pw5YGYDqAY7PSz",
  "key11": "5eGy4yC1yCrMDZb7eRskHQJtFPYpTjoZPcX2SMYbvwm3otP7ANjYUj71vKL8ZaSk2PTHT38o92HrM9BdSDSSpkJw",
  "key12": "MFn6juUX13qNMfgtug799ezAV5Rv3ApN8n5TJRDS8B4Aackzw1bC53cPcaktjh9gFy3VBQQU5syLDfCtMHQreqj",
  "key13": "4YwJvG6g7sTqsRfCye22FqFge44UcnpnqKrVYPoQhCrgBrrszXPkwgLsuuC3SGwaw7apoqzCu8QZVihXuqsRiMy4",
  "key14": "5iFyXxfRpQcoMTyGSAyc6Th4AXe6bswANPpHbYRpG5ateKZ4cWys77VL9RTkxCCVYTaZXUwJJfDeQp4fyebdCVgM",
  "key15": "46aCkncagGd3as923SbhDWQgUEtkkNsyzKC8iHmTfQ3vnFQR1d6KRrBTVdrPTYtuqTrpqiRYsSipRR51uUsXU8An",
  "key16": "55dFVwQMt2ZpJLqBK4jv3zabYPgN5MgjuDT6nbrrgp8jKhHgdfsVPRRCd4wKxXmSsUYU8wT3TPjQ59DTQKkoWUXS",
  "key17": "5EqnAtcWkhmkbFS4fRp6g21iPLRdJjmRDppZYaTRB5nPoX8yshs3DCvfy2HpQcrpw2szK6qfxZ8dNEufMsErZyZ8",
  "key18": "4fgVwNpd42Fmgo8HKnQSUaCgv1s1TYYi9hia43n2b8qaPwRjriw94EwRLSBuueA1rdttgXgNFgCU4WEVBPF2KypK",
  "key19": "DG5RGkHCcF6t5aWsWnj26apWJKGwnR4uhLiR3WAZuzWFsp2Zv4QBPF2PcxQKWDZ5nu6CodLAm7V88XcfonFVfpw",
  "key20": "2YnLXAUSGgn7djomKPQ49Yip5ND5272aoUU3DgDfDjfJgnBfXm8UnansUaanKyxKh7HoGUC6e85DNnDsuMWBsjyL",
  "key21": "2z3TQJZXBMVmXoj9DgXXY7ijxqJEMy6CS9jbgTmapgxNfTAs1UQJpCUdSxHamcsJr67YBonBgB8fvhXTtSuwoejd",
  "key22": "3h53MhY2rhDzz3qoY8nZPBV21HXHJWYinwfPLiNK6spvPP4uHvYAACMyXs7qqgYe78YJV4mKR6SDapkMN4spJFf9",
  "key23": "31oXf8pwRfTp8AwPYGBdyE3xLc9BDPsLqVQh1Mm4bVEaLA9qwMb11yke32WEFnPxGLusXahGjQ2Rcd15W8XcGBs",
  "key24": "cjFywAMKNTADTr7212WR1MbYFUZPGg5MRK1WtnouKEJjVuaK6N3VC7T3regyiqRJixyvawx2nqAhCpqMQ8oE54d",
  "key25": "5gr31TqsoFDnHtmktRWMna1AgsPymxMnQV8ARecoQq69J9HNFoKbV7qNKbxaZdKQpFxubsdPrwr85mgvBR7686gH",
  "key26": "EyDcV47MUJryAsmjuthDMnRSnnWZBoqhjB3iFmB1Fzwp2ToVB4HJBEkqXPzjRvBNRKnc8QbBzQYhmDezwFJ5yKA",
  "key27": "2dvSW7JxpTUXpR3HPTe9HWWAp4zMoNDLz8G5ad7z5QXi9p9BL9WqB94PXZJp8qsNmjRJ9SQ8JK7FVV6rekf8oCyk",
  "key28": "4JNNQjiBV6uf9yCRg7h1DdTA2FLm1j2Yi1wZN6MtJSQsq1AVEzB7GDATSpV7f8RasFUag4Gc79rRmwhfouGKLLf6",
  "key29": "35LUaAmnu87gB1evyTeEDg1JZRNG4VCUCFV4K5cLgHECGY82NFFrE49qfdQgKXX29NnHTPQPoFPJzFHUb2hPZXuV",
  "key30": "mDDggABAN5reMnX6v4dJ1hbj8N7zdq8y2zVn9wAawVnf1btF3PorFauKRmyCBuV8FSy9BPNmWqn9PkZCdvR8aJC",
  "key31": "4pxnpULGvfthUJN5i7WgmXWP9qPjT5YeAhc7z3EEurY2mLRK81JPbpCviETjrKHck9FvsTb6B5wZ6KUg3ipzbMig"
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
