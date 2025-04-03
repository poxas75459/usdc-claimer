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
    "S5uzvskzAwvQrgydyZUbiPnMKRzC9nXxtamYtAGgtFVSEn8SBh6M6mWTDQC2koknGiMxyYn1vyntshPtvgWrurY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ztsqe7UHBzKy4j75V3HLzMAvSjvL1cPBm2SA5MgwhdeFWP8T8EwVRTnUPg4nBHvdh8i7TcSP2vpi6jEP8oXjzWc",
  "key1": "3WPf8Li8qZzc9ZwpzbLcEy93dWuigb3RKK753fp4FCLpme8vJXgviaSBbpNoGwDYMnHMAmkzb8KNyqoJA8dzrCfQ",
  "key2": "5urtLTme9Kq65ZeAZh4zEP1u9oxKn3RdLMQKH2QCEXjznNpWCnVdKgM3R82LjPRCnFpuWchkuCRQ3ZdSeLmPKbPs",
  "key3": "2WT3FPGLv26XtRb6aWz15ZipaYVvNEiK9XDSMN5MgVurDywUtQya4CGhcQ9n6tYJgUq557pbWyBF8Kg7gFA3UUFQ",
  "key4": "57UCRiR1rpEwT4XFNfU2SoztV4Voaartp9DUKJxJ1VAB5noJmwFRFF9C7NqDu5Miu2L4U93in6cCMQ3jsfB48cBn",
  "key5": "36iyZXS9yBUf1yKPxDXtbsfKKtWvdQo6L6pgENswGBgZiKWmwqk9qkn1cu2ySjGsPFSfaq1h8GXBsohSkVAXE5Lp",
  "key6": "4rDAkoK9suDebjmpUmkKhR6kCjT5mtxSTJywxuC9HBnkFKgC92fC9G5zHtA15SBDmERzAwM3WQBa79L5E5X2YwNg",
  "key7": "5MwPFfX3bAs1c8yJHcJpHkRsRjXJqusUzwMoBmgazFpVMAc8CzokGjBADPXoVMwZQ2Cmd4Nq47RoKq7amzFTKb2t",
  "key8": "2gx16RkCCEhjpsPnDjycVvCzkYG1w9jU8N9jJHo1rVcPkCe9aaQemK9F6LxPEr3LCUXniSh9gzKYD7VJkHgbMXP4",
  "key9": "2J2ytS48GbNX5Pn3YhVYwmBePHC1w95Q2xbDi2KarPSnKyfTDjw43A3cf2696WxDicUPPC1EoZC8qF9dYVBEWxw1",
  "key10": "4zVQUCRT2oY54515awXVmd5sDfJba4w5rcPyk9QZ1F9TbfbF3PovDTv1AzBsADsP72ZMLwJNbQdigXNzzSzKw9tG",
  "key11": "2yXzJqtWYgW48UWFpi4SZibaCud5S4VQWVrYvYifwLcqKdhdxC5EfVBf3CmuSHAvfY45zL8jSFU5QSEdZNEoVJ4o",
  "key12": "SEnywxawMnbKBcJ55QGnG3rcdCMF6VdCgXKVDT3fsnQVYDp9FpK6WQauedFpDqTkMyXKYrS2YGAsCpZTjb3FAja",
  "key13": "371SEzHoNxk7QX5o3C4axD5LQZxfouma1Cvbet2TdueoAN4ksUNhQv52yucLevgP9xwPh6zGN4VBrpmuK66ygiVd",
  "key14": "vMghtqEomNkumzjgBWSocQPPniRqXMQBWAAbf9R7huJZxUgb5sXQ2EQR9r8DcULxpKoYNLP3ctBmUJfP9eK5WqG",
  "key15": "63jDPTzWMu1apvvCuE8irBsF3VauhhaHj9znqaNmYexenrLmz8LBxdTkfWKsnPWFLfk7M2a1gFd9pphWFJ2fYSfK",
  "key16": "5RFQ7V7qMT6PtLgtQ7E1Cb9sGwr3NwJHrDJSXmY8Mj8y2eoCdsy9P3Y1iTFKJiizMZt7bdB3o8c7fpDdGEvpHZME",
  "key17": "5AqGV6AYbMn3m7yvyuKgmQdHGx3TP3E1NkNjmaaELSpk2rQchrb3sanf6Ls6QyrqptrL9CXExqMCzzdXTJpMzHNJ",
  "key18": "3nGFxHjPniE9d7yB4XNytGm5TmH5asQkPVJuFFspiykxg2GgR4uKz6jpPumdtKuMoqscjFGfDUruyTN21TAUZDuS",
  "key19": "2QKDuzssAfetKsvtpFjjMYQoZSX1w39h418rzevmJoMA4jAHTNV34kLaPKndN1AmTbWsKqMtkHpTd5kQD6jyVqsY",
  "key20": "49uCnjWXVXWubtMUV5huHq1kW1TLEX4yPARTEtke2yUowett1GnJC437BwbzB8KEm5S3mqi5T1ft83suWN2fGzR9",
  "key21": "5tkA4BTZrcGJYXEQ6KuMaSy5vEHKRHJprUFkY4EKmscmfL5Uh9FqfTk4BQM5b6WWaWmSq3J4A1cKkyRwjhVcySso",
  "key22": "567MdV2PttGvAPVC9PDC5FKDEKV3CFHjBYKmksxW7nk84RwFQHMUcZ7yTdLrQqMJd5YMmjXDG55pQ8ZYTArYkTnB",
  "key23": "5j7hTDZB87wFqUiaBUFwrEUPejAEConKCstsRPXq3FohFPNyd4bhTXg5UK8RXfUMNuLf2De4ycAXnDpJSv9NxJ9r",
  "key24": "4EifWTo3bSq9JkxU63NZkuBntj6DNwV7msKn7GyQzoX8jg2Nr6AYxKrfiNwtxWSvwbkU5sjMmKcSoY71LhKahhzE",
  "key25": "4R51oPZZ7yyHotXpjrPGB7x78kDZ6N58Uqj2YJxiGKM42HhKipacc8ZeEi2KARwz75UC5Y4JBRdCM9kKnrNuKXdG",
  "key26": "3FCmwVxg8WbWkUmHkQUH5RbaFsAMUk5aQtALKGfA9e7BFTvM8LN4RZyALF3THN3xPcebZoGX4zvcrNkHwba5K1QD",
  "key27": "3VmHU6RWWy1bkicKWK8Zkh4mgUYJUtcFmKvratxpuFTUCo1QsmnHzso5ZU3izqZifbLAXqLyVjgEoQKSkLeXLVhm",
  "key28": "5mC2gvDJcafRf8dgtPnkYYHXYzhHdnwKmZPQgxcFz5JhGeVgje7t5BVBdp3n66fVwzDcFvjVbDiwn7P8d6fzvT4L",
  "key29": "41b8GP7HYgFHAjGBiB9YrGR7uMf2iHvnHbmNXM4qtWQofMNpHMPk8Rvegz2uhEgqLWXzvmznuebj4AVemV2CcauC",
  "key30": "28vTk52brpHUGTbq66Fjsjodex21n5GoSodBc1sLphbfvWLSFFQwwmEPcsH5bkbiSg4cxKwp1AHNVQn1mWCTNczb",
  "key31": "4DhvsjsZx4dbF53WHe7G2RrvFsWRSWwJAkqFXS7Zurp71LYEce2DHFikPa955udXTRkFmWzxq8tEu2jzLFY55En7",
  "key32": "5F2ukcZcp2X5rk5aVcs24WvRg6pA3YyVgqJUH6sq4cvYRmyLGsB362LmY5ut7k1KgLQiMnQvQBVsrnhq5oUv6C1C",
  "key33": "5JKLjacjiwVyRfTcqfG9D5t3HmekvEoQgRd1Hmrhj3zE2UhX3utEuFTFrX32J7PriMeHiJLUKn4MLJrNEx2xD5M7",
  "key34": "2nahr18V5M1G4Sni5crV4u4xanEnivVBM25c63kHacDeVuexZngAQXAt3uSP9ZpBCBiarr8RromdMkzpc4fAjC3m",
  "key35": "DqpHkB1rJcmr6rc6LL9AbJ1BrU2smKLmUgKgPzUTnE9Z5xJntjDuRhQd9RzXtpJmWSYg4xzcwrFw641yXkMSkMZ",
  "key36": "3HnvZzi8QGpJ4rpSJGu7CNZY78jsk47u3sw91j2L3qNC35whsYv1mysYoEFcBcEzwAxYAsCq8B5bHfoZ9eV3LXzX",
  "key37": "5VEsrp9kCt9RD5rzyDwmLMqSD483zbNX1VnKdgkMhWcbLnoHMqXQSJaqPmiPid3XdYpskrcFjRwKeoEmUszAvMGW",
  "key38": "2YTcJ6HLLaeCnLZrw5paDvRMwQ6ZhgKMst2yLiYuT6GbJvNnUzD1qHxBHroSmn6o3Xns7JVpkVXiv46eh16oJsKZ",
  "key39": "3HLagfUwRNRcysqy8taRUDMasAETHWcMqujkG8eC4gYDmit1XrRa18yhrDEqWr5YsmNWKi2WKdsUC4UgYqvjvNm6",
  "key40": "4fqtNDQmmZnuxzz2iaPv1Y24PAxt6VJvjdsutky8EH9h6FzrkHsvVrPhobudnbESP6gaVrHmi8mf6TRcpnagMj9d",
  "key41": "3AEqqxKyGfgta73TQw87gLQNYtLcwephcsFCGRQNMvz9xdJuzUsGimZu7iEEiHCGyUexnUWJzfXxJFTVEwwZynGR",
  "key42": "2uT5AMx2sZhLzzt3gfcLX8QSMqsH7eoPpkBeXQU8g3kT24zk7S9myrHSqsbX4VwvXgLjDDiAfrS7crYmuHjX3s2s",
  "key43": "LKMdaTuXGExjgoYzzY1dSrE4usv4pwViAKmsua15qtbDks3qP6NgxTsy1jRB7hawGfjVwQ5j1q34tMSnGZdeLM9",
  "key44": "2DgqvFtpZ3zwnreksChgkB1zVDyRq7SZFGM2XQ8xK5M85snYvL7UDgQyV4LwMq7KthP24rY9AYogDhT3SZf6Ubah",
  "key45": "4hsskKgc1faMAmVSY5tqdquqexvLWwMUtkCghk5voWvKbBrt2jZEHkmoPuHd7V5UJnjo6CAXM6K9VmtwWdGC6Jns",
  "key46": "28wUVUzZBoyVPGenfcPFhJ9J6EhEB7oXPUHPevBKfpZLvFNhgJXnndmcHXp42MEgT7bHWaMVYxKvA36wUB1YQRzL"
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
