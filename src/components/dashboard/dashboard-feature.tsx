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
    "5V21uJQByefWnsNr9UBqLrSREKH8kEF3V8SfqY2akYk1kaUxKxxa7jHxHJhNjtepkLhCVscscMvVwnmh8QSs3G56"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4W8MSQrRJ6Cq2WNcHQaoMukutNjy3GFDk2QCPay4hRG7n9qAgYG58VDdm6ETLFRFxRzpGwn8s6p6X1VpBHXzXcMN",
  "key1": "3y1PXMahwWETPGL92CYKoPcoA7HeodUWSGxy3A6dQReaMTHozA6knumgjFjchHnkUPk48cd4jdzggLC8YzipzmCk",
  "key2": "tvuWpUb5bEyZLXMKxPyfRvwPT6eEL43xUBVd47fj1WTGgKwXfz8TChvcbb1L7sQ1pee3pfk2fGrAqo5qpt9LrDT",
  "key3": "3y63asYASYzL13smWJ2Rk9PJzFMZbG18iSDVndxzygNCtYv2UCDpGduRrSh7gSTgKyQiN9wfuzf85Jj1LAHVRZbB",
  "key4": "aGXgWK9QB78vTRqekoFtryrZ1HoFKrf4WJtZSGo8g8uXtNyUStD3YZeEppMpAURJuX5BjeJuUWQQD9khxwfmj8w",
  "key5": "3R6dnw5jtgByYSFG7Rv4u2cLsvgyoCsW3Dpgu1Wk8GBUu7TMhy2auydVvkA9VzS99HvZoeXAc244EC8w8pVTH8mm",
  "key6": "63HgLF7vyfsgoEZtsww27S6nGnUfbfn3zp3vRok3wRJgJrYAMXfkQw1Jjkf6ufGLbiBCpogiWTZr1wvs1Kk4NoKT",
  "key7": "2QaJ3hqx6XbP2ZFsiPeNYAEVwHmtaQzPrZGaq9rgWhGEmhV3ZLZ7AyTsmPzbsYgH2qKjHHRBdjQdMzvKXTjVFWFk",
  "key8": "21SWSgFQ3EqJieXMBr8uduiEVoGxjQjLTX5cKv2nNAQBC16Tg8j1kqAkoBb8rjVh2o7i283TBgBShoWGZC5e4wjy",
  "key9": "FWfdVeaXMvPG9eZdS2gxhrSCad7VuXCBwqsh7uvhXqGYZGfBubEvzaR5GvWTXr6B2Lz6p8atLbfwC3iii9Qwj7i",
  "key10": "4z48G8uLq2z5xpkt6RsC2owEeYtdhxTSnHniu87SunBPAwcSHXUVhQrkgenVh5aiPS667PMS99rMNkhZDzchry7i",
  "key11": "3YHb8FhnnaemyKJF4pwUkG3AwhLxFdVwtA2mUKxtF1WiqHF4wmTvUi9KVcr2yLgcvWVrqzkEBaVQ76MZUTMgjEj9",
  "key12": "33faPwikhPbeUfWzXQcCbT5JqSNuFzc5FJCgEfAU3mTaMYnwkYzK2xZSpVu4wZHa9dM1uDFDeNihQqLbY6T9PmE7",
  "key13": "F88H2mHd1wLTUzrtSg8UGBDK2JyV7SGFoqaKTcCgRcky2e7Vt2Qo7ns4wH1qBdBH9C2bqGgoctop4FFk7hC8SGf",
  "key14": "51ioQRv5B2JPjPfK1ishV3Ej44Ko6XKURrdoHpuzSMQRviX1EJqn7EhnuGxDqZfeC91RLq8fpLqVgDhRmd7wgzji",
  "key15": "5G2dpbCsck4ud5iyhDAYaiTrpxTr44Ax18vLhe1P2QMYUKijbutBqQayXdQmg7nNDCBecv2o9r6SNfGgAjvtokQF",
  "key16": "RMwec1Nbs7eJiH4BWx8uFnjTeMsn3vpTx9sJHmFhgVb9F6Kej2FA2XVMssEKWozYdimUE1uTo3V56Qn4jptdS5K",
  "key17": "4ShAdFxr9fx2UCLAZN9Zoi2GBU84kzvhh3KtQSFwAVyutdjvQxnVtSwrYuuP3ffW6xJew1XbJrxR3Cf2CNy6Fe9R",
  "key18": "aJBukvaTz33srsiuo8VLkenDUFw7GQiR9XcEtiycDs1M39WngTc6w3xtwmXoWZjQ3SiWdTyr1D3z1uHoGfY7eDJ",
  "key19": "2sZYsruMA5zwshqAYNdTdLguyYHb9P1qXWr8xKTtVN5qq4gD3KLnv6coFVuoRthnvtHxvLyXMfZ2r2SvcuhdyoQm",
  "key20": "ivRxN8ErhUoNJFRZb9ouwFeSNoR4zyiYLkXURoaLf9n4u9SkdTf4Y2qnYQ6pyKY39cdWuymAWbXJcvxi7cnbn1A",
  "key21": "47DJrP66XphbgwGcGMy7greAxmrLgvtXFamzvubzBnJz7WBUHygwG21FGR3YYGuGqBhus6Q1XmC7bRkHVr8iiduj",
  "key22": "GYG8HxL2CETk3Yvxoh538PkdA6AwKahUvZDZRt33tm3oHQTRXbb3sQtkvLQU4pUex1gX2yMsPongB51KwwXZ7CB",
  "key23": "3vRPts4dKJr8scTv7QMi1LiCsy96CSK8nJ6fyP2Z5iB7PYCd4y7JJqHciZc3yakVK6x86kSbEqCWag2qPxQazrhn",
  "key24": "2g7Z98JbjqohtUNsEsMeojvkhnNhLabsH5yrGQyaFu8TqaEsHwu2c3zKor2wGWbnvUzj8BK6xMguy4LFghs7EQjZ",
  "key25": "67cW566aMSqJB39FWPYaYGowFXy95xSF1PkwXN7hPY9F222kBjeZNdhzdMta4FzrXtajwq9tqQ1f2YnuF6PA68TA",
  "key26": "5nm7piaimpRmH5btpYHGCiJj5xrTPsG7eAjrTdzRmMVUzozink4JcopBVvCdm3BFTc89re4EdrRAxVHKtQeNW2Rb",
  "key27": "2TRBMpPX4qg3UTJfHbVoxRuxSwqhNhP8dnVoeLwAYdrp9zogxUWeJvtfAnRgU67yNCAPAeiCfc6GCtUPJzLqEZJv",
  "key28": "3UB6EnGcDFUMNAkC6yupRLx8iCNL1F6BNtZpLE3FF7s19iQFw6NZWdNXJvdNyHLxGqNi4doAefvgo5GbFQxySCi6",
  "key29": "3JBe5UPZTfrJmE49cZW1xSWV6cZYL8hc8EEHYgDrQVb1ExBaRvrE8BuTcY6LFskGM875t4RgdKNDmdM9NfExR9id",
  "key30": "3Et5CzTfnwz9jU4YeSbr1zEdFCPqWun1eAhnbqcE7mF3AKTgxqEQ5FMF1DzoLEgQoVGAxMExa62P8mQojzzTGuD2",
  "key31": "2QXy8Zpmu8npbNTHSyxN4mgc2irisYBzuCjkGBvh6BZ5dxE9q4GiVVVMXL6jTKXyqqaKDNRZJeaECaBv5k1W9HWT",
  "key32": "5qbFp6Ggv1B66HRAGjT5evoD8Ae3ySCKUuzzEQf7chCXG2bYauctYRPzeyeJ7VL7xwsEQh8cyMe2pXC32gWXjw5x",
  "key33": "3ZtCuVS7nqbvZRmqwV9dwFtpL9sak9AkvA2bzWJQ2S2htxBmBF7J9ccq3UWEKsBfSiERYgJHynzBzwPkpUSamS7i",
  "key34": "5kp2f37HNqcbDpYE6jYmwo6R8sUzQWDUeUzZfEGpnHJAoY3H2t7MWRi9wwvKLYQHaxQwyWqq2kzMGE239TzhLGZL",
  "key35": "5TyWiGVYCVX63edW14debooGWZGU3RMeJdkCsbcd2MtQvu2WpeNGH5JcSykgvmHG4rAXSokF1NJHgy6inYJxC4VR",
  "key36": "3MHTdTRZRHViZYpFJ7nyva66Q5JCoCNDdreH9q2gz2PcHytcawo6DvwuUFU7L9z4NBdrDd1yre7UTb1QotBPNuTK",
  "key37": "4MGQaUgNp1aLFayU95JZUZiGmiTDxHboMoTVt1pykcXyLu3yDpoNKQFeGeT67r4jMv3svubB19A8BqYK434dXMUy",
  "key38": "3gueWQMBqk247yaYGMg7MKRpNnUzNG3g7J9GH1tNWC7MywmVWjDdvPMJbArM8pkypgufxngsxjj13m132ZfQp1j7"
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
