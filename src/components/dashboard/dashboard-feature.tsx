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
    "uU863ex1Xni75rNeFoPQXi7Lbimn5XSpVdHeeHbMnUVeeaCNjCyxiXqW1GDvHwg6VyHVccQzoivnjb4jne1y96b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3M3K8xMSzBvDNNnAGJ2CXwAnUL8pMCZTA96r4rZR5BrqNens9ubQZXUXQeza55FvBHLXDYBNAskKzi2AttjzaNzQ",
  "key1": "5nikR6gRAJi6yZoN1uwu8DNSXJhafXAopNnyrixWrZnhS85PDKS9w4wmBY8qayoBKp3UCihBom8QbZ1qHpGCQXvP",
  "key2": "TsTB5PEmerKzcYQW8AtjyYASDtDehZSRwaL6C4hWA62MUHF3wUDQoC3GpxEVUXBCL685qzf2Uu5Cx1VJTYkHePN",
  "key3": "2eJaULhQoYS4L36x95BSDckhjW41hvPNu9X9SAz7BLsSwH4G8KgKC117vt7ZxUQLDgcJxpzYocYvAAP6nA4mtAaK",
  "key4": "3URkAPu7bkPkeqsfX41suw5k5gRsyyrX5NCuhstXhjRSsdDtPMz3QJ9Yjbr7H5SjsSWE1ftp9FCkAeTvAuhdmoFZ",
  "key5": "34rZs6ndctmoJF24bnuFQYJFiGjw7yGyyr2Kt7XLzsPFAai5ap3ivBS6DorMwqGRjZNiUTYQcs2j3uTf9XfsScFP",
  "key6": "2FZgKaRQvDv4s66Ms85y42LYuEEp7JBsFxwhycVCpwvtGWmNepMd56vMqduHPYe7skaEEnkgVrhegBxEHLsCLoJ2",
  "key7": "iE8jzQHWXUentK1mgzxftJMugwRJG7t2JSn95Zhx1azkFm5U7RFhY3qHsXqdxB7bRHKbgy1z7dmR1zU9GgvNWVB",
  "key8": "26fGN49xivKfpXTocHX2DDoRXYCNswUZH1jq1s7Vmz49NPARrC75Q1tmg9dbTWtbZumsazgKjxLM2WH8NzNKy5aU",
  "key9": "3QdwK8z3sitSiM3swDwbzgorqhXAc78UD2mFe2Stf1bwDtYwYXXPfQ9yUqo5EGMwuyiwK568AAAHnEbnUURJ5rhx",
  "key10": "4T1twwMSAusKU3Gtgc2B7Hpyf1FXVokGNK4dYv8axtLD3wYXaFV7kdNqi6XEeavRCrRqSXe5PBKfYNgUJ9sRJbhF",
  "key11": "5JEwNSYkbQNEpFE5sRNor1t5Y14WsJYkw39HMxFnkLMVeHXxDxrJPGcCSf2b8auTpGf2UHP9hNecKBNBGoDbkJEj",
  "key12": "5KW65f8mKT5sF4ars7WSUFBAu4KxFYz9UFabSwPAbGjkEg9K1kGjNnBGCT5rAS78zcTa5JMULiuYnDpHsqtmey2T",
  "key13": "5qEvPPbaKEGnbkKzxoHHtHQona5UfE263W5rppRasBr1C5FtyDqeueBUAasobEjwU661eJFerDfyk2JUe4gRjJxE",
  "key14": "rNrqM1bfFREGsJGHvpT2G3JWTAykjVv3adHDxS3X7SzwM2fD2NSTXMfaGbodR8q2UMFYH1DTuwwntm5UDFcDXCn",
  "key15": "4YU9DXmUqNpjF7JPgMxJcLpBUKncs3kEA3Hhuuetcy9Qy3drVSd6sdXqWcfbRb8oXz27UeBn7dYNt3idBeJTYrME",
  "key16": "2sRGxEec8GTWHrTYuB2bJi2WmAgENJruQy2gWy6sy28jEGY7XQG47NrfEDYZbBYVYFDCuNNH1nGEU6k4N2DLv7ak",
  "key17": "4wG7TavfzH7PcS2T7Ltzvrf794FW88T7PExvnYTyhBhJTnxJTJWPXGzZtnn3gob3S3K6aoaVYA7PYxWz7G3nNhtF",
  "key18": "5HfgYTc1cFRkfg8ynZ7q1cjJ1WhG8bTxT1Yj1MZfTXweWEZbFfG8MuuwKKeHQnAcPNav43xgi9dEqDUtMZrMMngc",
  "key19": "2CTtgxPW1LANLa7fahbpYNZHWwvCSo6X1ANG6hWUNkyDbsm7NFBdCCLca8PGDsjhjaQdjexin5FGnKvxRWH2tVkz",
  "key20": "5SYT94bCGCBZThe32musFdPqBhkDpuSpGr6vQMeYu8muff5uM2VLtdfj1PCvBM3o1SRYTN9ofHf7A8WG2h95hHqf",
  "key21": "5egJGdDv8qGWrArQy8CV8s7HuUrQzMzMm9rMkkbFi1hAqFEncDgQz3yUwtcci92toW37ge4zGrqwU9fsUsBz2xFh",
  "key22": "5Fna4HmP7xxtKwmZV3Mo38ff5jgQLm42joUQvrGuPagZ3tcbgnoqVscdw3huHiR1MycWLcWC63Zro5h3XotgZHFE",
  "key23": "2nbrqb3NXganid7fTioGxmiNHNK73U6mQsPqVEmBe1188UukcurMCa8jYUhKgHc8c3kqzRzkCVXuHh2WYCcVTh2W",
  "key24": "42QuQNGEtR9FKyqHQvVumJvT8q1rPZFqHc9cGEWej1we3orod9X16JwonaZpxs8iKeXnmiXswW9LMgznKsLKrD8w",
  "key25": "3Z6BqDDVVSVMTnyPDyWT8iCyix8r3fpwbGrvAktJ7guhhydMjb5A5249k5mEaSLiaytKgrEFKxLnPefduVkQt8cA",
  "key26": "2vTA9FMmJ7BtkVSQN22izHPDGM8UqFAPZMjKXdzqBizvhLB5DDriDykJvFczXWoqpW6XZVAMpwtzwJUdhanLGfNK",
  "key27": "4fRjaRb6Xs2jCNiRFwu8fbBJdthJ8Xq9fEzeiwokVugChZuTvGfebTWewpcSF7gESqkRGzbiBfXmkqpabkfhtMit",
  "key28": "4nXbKPB9cBnYFC2Ay6PpFNJJcMjV2q2ZRtAvRLx5Y2yhV1ERuuAHKHVLBPn6JgAAp9u2VtP8sxQSGr335aN9ESX5",
  "key29": "3wHiFSpHxqBtiAEUREm4CYmrsdPme2wGy4MCnC7SUhUcfckj8HTcKeRmHCNaheM1VbbjCc2TCztwjF6b94eFr6Em",
  "key30": "6495GsuvLwxeihPGKrwZWkSNA69tE3G4k4HxKxTv6RN7Jh395FBYiyYGPfkY9JZFMLaQbk1FrfYePoCibqhh2JVC",
  "key31": "5sZkHSaFWUMsEAzSW9JNHYPQJHmzwsCuSVj8Q9VZj7nos36kp7FyLFvWv2yJMNxGRnJMcvrV8eX3qJobYw74or61",
  "key32": "5daQCdzTjZTL5a3yXzzPysmMc17QarGcMBMy14wnJybUnG1KMmiz6Nbu8CvxkDjvtXKNgzSDx6rvzbXyvbjx1fLm",
  "key33": "2MG3z2AdjhCVG9BkweY1MaaCokm1qLin9ecp3HATMAuqUaurB9kyn9zXhNmnEuiCVfiG3EH5QySo5GnkoRNU1asD",
  "key34": "4SQFtg41P9gnXd1JZ8DPUn6JL3PKvwLSpFztf9j2kiQ8XNcLw19uhrHvi2qUrwZFKrnzSpVBNdAEtNr8sykwSd4p",
  "key35": "2muQtq5psiHvc9qbLxrU1CoBmjaKAf2VN6TXsUvNtxGUYtB5QfZR3tTnEVGHmN8oVAZSbXsXkEZJqV82PSfirbrn",
  "key36": "44ekfd617cPYDGf8vmDsYhMN7G1djjhozU2DNLBLodJob3rQDdJ8jrcCgTuubZUXJagV15rNXN8NBm1abUYE17Yx",
  "key37": "4ZR4gVKv76Gqyetmx3nAxMiMNkbC3zCMZL82GQ9hRRTgitqvKAzyedkKCsnjnrPswAMTFHCqvU2zkGSfFK8kdL7W",
  "key38": "3nXvTD7c4beWN2S4PhaE2xps2deZY2vuS5zDYpkitwFgcT6voudby3QRVxVS8CAfy86hdrxZn1wjy7PkggWrt2Dw",
  "key39": "3C7GakcWRdvBMJtiMyq4bKoXkpvNiaGqMTzwoP6oyuCDqLywSPTqNbnyVRAvMU6d3YCJKXqFijgtMF7dUvoXhiuY",
  "key40": "jExxnwKPomtqQ9H6FuxUQnCeM3jj6K71iU2aK6C33tAPnaT5rMduiLxLE31ytWJfe1vnBsEr84F7rGKUeemVjUo",
  "key41": "KrZm1X6cdGPjCNS77j41t7fmcPyxURgi15zTHu3PMu7fsTAwen8PMdqbWa553TqwUEXVBdseS2jsWzdBLvuHidd",
  "key42": "67oWNibfHqFC13pfZgyZ8d9hGpX92W8cAnUFfEKXKE8DQEpeozn61KHxC1HLH7gkaLbfyACd6Fkdq88BgH171yje",
  "key43": "5nzZoyDbMJQVwFVJrDUqbRyFpbuFG4q3W3FtWaS6UuDhXRwnP4vevmJk3sQZHPCwwCTWApc7CXMbZo5siNjLuVmn",
  "key44": "4xrDMxopkt65sxTsFCZ5DusGyE5R9T8AQPWxgpLsWCVVHbGWUJUkHS6rPQE85sB5mFKckLsjp25aB2RyrJDAyps",
  "key45": "3mfQrmRZEqo3Kpy8AyMiTBRGg5WWPGbTzzKQdsYUWQefpbSrdsTuCkqCuqaBHhqQ8EH6saZNkUoncsnQbyRqnK14",
  "key46": "2AHpNZfcfSfFgU84bEKvvwJ74zxygYCm4P2DwpemBYXdsoKcwjzTeYQcP3FheSJoJwy3kFjWmDk94yuCwquJVABi",
  "key47": "5gemFyzbiH1tx8JD4Yk6pBxoiBB4NMfvLWe7BJZQVP8DVWMNV236yLLV6wL1zLyNPeegcxqzqTycsRfMohUWEGXU",
  "key48": "47vU9LmmyUf3PiPaWZnEZ5G1Ptd7yUe1LnHCamvinirKxrBZjiJssUFQmpKFRvwLpBS7d1qrG61kGt7JdGoy3Qm3",
  "key49": "3mCmVehWwVKzzNp55yQJFdkMMKKozH68C8nkkThk35s3rFx586FYoZmtJ8zrHkpaW9cJv14oF7AjarWvijm1BuVX"
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
