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
    "wsZXo1t4XiU4tBg4ABDHfv8Sk8dMNi6c7o5ntrk4kHUMjCF1NhAthzmL2YBm22FKTcWAzgbcEfPjRnkaefHPfKR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23R3taH5ZJoDmqSNeLFn1EZCc1iV5RMMNoe5imHHdA7RMhUSVszPAGbRi6WabWj5HVa96pGEZgZsK6Dd7iSdDH1R",
  "key1": "5EMeahyGBXLZioWu3iRAZiJFpTzXTziaa4fovsR5KwcQhmb5ESyYT6exkLqTMp99e9tfbuucFMTLCxECdErEvT9m",
  "key2": "2H9D2B5WPR4fipKSj45kzunuRGzWx54nHuwTWgbEKgMxb457w2PXwRVefU1Qh5icw1AURL1JrusjtZWQ7ZVRpZ6E",
  "key3": "4My3Xhssb8LnEAoj3JpB1MpYWu56xbLSyXACbxtC4qu4J9gmSwnchVj9jDm3GkFdaYkbBydsrVAkfp1XWPfMv4ad",
  "key4": "5vtheXUpPMCSbhz4x1jFhTkYzhohVH1or3Y1DhreqQMUD8A5ttZ1kF7KgnnHmjoWQCUvWj2wJvpqo2kFm2kGSNUj",
  "key5": "5fBd63P94aPi6gzx3nKWNB6AMdi8yuNbx7XTL96X3SuEY5JytrreuNE83vD76MqdzHopbGMfVwoNnJdKbJpLiB7x",
  "key6": "3fA61N5PddDqJPHTeRzVTNS4xecWCNe1njWZCabkQVA7FJMWCd3Up8KwBmGDivCUueukjQVAFsy2uzHpqr51XpDF",
  "key7": "2wNdoNaTK87NvBy6qgmT1xwwyNaW299tuppjJU7wjwwpTjSrdcEnzYNfFhTvWv2q5ATmw8yqLYZyuAcLy9NNT5mD",
  "key8": "dVCX25Bja2To3DNH4BNXBTiMvWcpDyM9z1qhWm4QdftY7TBQ8MEH4dfLtJjphLEGFpPz1jMKzngR76ebFhfZYWJ",
  "key9": "FaujVc95tCnoirYf8bQTyxhyiPBBLNrzgCJTrPZzcZmQHwPicU6srnr29SfbLL7SUTspSyUnn3kuSpBcVVZNwVP",
  "key10": "5seEveEeUcykMNEVRydeggXhDD1zziyaGDZAuGgZyqQMFMvpGasXfk6TBjZfCjFQbspaEYKGW8dRyg9d29ThsAYB",
  "key11": "3HE4aTmNChckQbqWab6b6EXMWxTdx4cXzEzdyZWBtMCFuzxBetsAoAwT9r1zXZsMySRgZwXDXAoB3ttrzkhWFt52",
  "key12": "3WCdufn8ydw4WHd1fSgg7tnQ91uZpZBHR5eGehZnDTcrUEWGkR5aACjVVGrW1jhN8dTncq5LC2g7xXAMzUNgsfk5",
  "key13": "2rvrFnZXbjJnnHaXMANi6Sm2W24LPB1hHVvxgoh8URQVtKKENRvHZozLTq57yoEwWPvFp2P4d22UXYE3YUrdsTVV",
  "key14": "bxsJo6VVd6H818Tzti3GdF9c5sXe5zKpF5c9Q9shFsVB1jyMeW1sQcUfZpkHipoNvK8UpXXGUkimKix73ktyE21",
  "key15": "5ZsA8gL9YwpGYp2sndDV9u7XgwedEDCqCeVufjo66YY35ev8aMdfKzEUDBzPqD6SJgbiuPGuDVxLFGZQzgRegx5w",
  "key16": "5Y3syi3LonetuRT3B96sCB1SqCoLztzrPFyvyB1fHZCGF3TnVK9c5g9tbfchehQ62RZHkJHTe5kxH5r2CpEy3JEa",
  "key17": "5bv82oiMDJrD2VPeTtKptyo4sQnj1XsFeN1w9P73Nk8zzdswd9YDt1rTmmgHphfsFQw7VcXUDZaEZ1RhRwXcYAUe",
  "key18": "44x1ZYkMno9FidjWFMoqHxTzV9hdRkq5ypfHfNhw5nYNNcwSXfc87xyys2JSYtDovP2kMNWL4ZFm8NCj9Wo7g22e",
  "key19": "656tQwQ68FmcA9uwvJFRpQRpvJqug6huRxWJdQaepoZ93KmKKEvZpFEq9cyo9spKNFr1nMkNKdFAUY7a99P9R7JR",
  "key20": "4S6JJpf2EeMMR9X5VurwErYFZv7JXUfxL2K6Sk8nx2C2o2Gp5Ye4j79xsJiHaYCax3u9Pr4oVbtep4erL1yWfepK",
  "key21": "5Pb6HDQNEsuAaFuPGjo5qugkqBz5VdJr3u4hHAMY8wCWdyHQiGXXR179reAzmHfVhRaRVfJAb7L9pDfaQUWNXhpf",
  "key22": "4UctZcGAgpTt1Ui3RHrzotdYMGRP4N5BUmqNmam1vwWof5VTUu3PBThdRqv8rAk1BrCSPCQ1bQeqFbYJk6KdFbhr",
  "key23": "2h981sW6KubDRkCSDLmYhi7ypKwdPC8jy8PUnKhSjEUbi6NJyi4aRgWNC9R5k3mpPWuU9Tc4t7BFjviqXK6bDJNK",
  "key24": "5m7W3RZRpU3ifaQ1oK4b4AgCBJxnnyAasK3jSHXTDAxh2Yhe77tPQcB6gLgNj61zroLRpg915oSPReLpDeWBZNFM",
  "key25": "4xNMzj6r7imERzubJnXjHkNHEu59ifUzQfBoobBGSWaoihek5ismEygZGwhkBwMxFGh7eUHqgDParQzH9JMifW1",
  "key26": "24BQkfg4mycdonQFgLPBs1v8gkMFDfsnYToQ8oLKhoxUrDbD9h61cZJLqspb1nxtzBKG2jd3tmyhvK9ALQJvx15R",
  "key27": "31eQPXcqh9WZ9m3hQBcfJCFzbRkxokdAEbnUKvXR7sPaEZ6e56Cx5bYhNbhLVTWEYiGFhHew8452LxcfiJVcFGUa",
  "key28": "4sqDwx6EtFPXpgNzct7fNHAdEJeJHfiVTcihqVh6CtCjzyFrBj8ByEb4GPBES813zu2ZMawDfuwHuKorLG8y44HJ",
  "key29": "2iKsfo5KUSLKX2iFr7TapEawjYehGq3TgCQK3NTi8W1pspEANaRJm2PoktU1wQiBWbPkJcvkxEVrqYCgctWoqCaF",
  "key30": "2pDTubw1ubxMLXaYVNwtfKRW1pVvwFbuaRBEkghzd1w1xyFsEazsLersG8zn5QUfriT5waRJBWkfcYGDTm87Zydm",
  "key31": "5qanZFQFd9rD73wQwmCoCMTsj9cmGSYgMhwsewWJc3f8TvFQMcktmBsFzCrgyMfbM88WgmRFVwP4S8UTsutXJD1K",
  "key32": "4dHqEEKAcVSuBZsmYkHn4dxZ8aAQzwbCxxyDTjcTLPftB4uZkehra7Tqcqt1e2k8XsMZn8eq5Qf99azCbNBU3SQk",
  "key33": "5Nx1oNKDyH7vkub2XDrjqHuaC18dsE8KsLVZjF4b5Z6K1fssHx4p7Evu8f5dmxpRnT44XLP7Vr24wv6DmhUkwYDP",
  "key34": "4QqT22WEN56wWQ1zUuyKVFreYMBpFHBVzdLV1EYeDo7JxqiQB3Sunk6VqdNHniNe7NkEVv7RefTuE9JZ7jcfdFES",
  "key35": "QixcSeW6ATb96NwAwWTs2kowGcnZc7xt1onUmc1TdXw5wXomjKnTNe5u2EMAZsKQKh4XmkXxpf2TAR29RxhU9m2",
  "key36": "3SCpgeHXb49KxCegNoXRRdXhCTPPLUHqdV2KCdcMHX51TbM1ZQ97KYTjSv7eSYeaKgpykiVDoYfp6GPS7yhZWpy9",
  "key37": "3cXmQrNNMwTBJa5wnq4uUbVeArwjkzhsXBJPDGNCgZ3JPJ632n9ntsavZhMvXRgEP945bfRr54E7CvxS7kj5ytdN",
  "key38": "2h3BjA5xpu5QifATG9JAnTMtWvpQ5dUsWPehqSTQLTzT6DiweKaDraikCWxD4gtD82ufX4MQz9W7khSWWNwLvDeA",
  "key39": "35Kv36XE2Q67EYkwLA8BaUTdrugib7HC3RHwPWxAnd1a6hDASfkSdfLHmNNu2on2PZ4H1LN7HW1qC2MDZfx9HMo2",
  "key40": "2kUyCNji3D4ju2oY1TAt163SFWHVggYWemVpEg5wHcKh8ts5S9DbmTLqPimodmTsym6nrZCd7cx3kao1aeHv549E",
  "key41": "4rZCgWMrEcbssCjE5MACcBmvozeAJMd5B1AnwLLsQyjb8zz6gxZj3XppaMd1CFAr8dGXgSgTv15275UYcVD2a8Zz"
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
