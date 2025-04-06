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
    "3ZsLJzbvpyuYeV4FwhgJzdthbrgL42C4VSdRPaq4maKwKmraR7RAuzMKH11k5CipvatodrGBWdSprxdUHwfRuTLs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QU9H5k1jdfpgaPLCre733E1BhDLQ6LMERM2cYXz7MCTZ8UX5Nio4ip2784QxNsoYjFX5RNw57KwhvToHfm498Zv",
  "key1": "25KK2M6WtAGnFXQUfccC6fLAqRj6jGrYbxpWYUtdGDzu6J1yXAXkCfHRytK95fs2SmwuSvjsdM9NpfcVWnSmqX4u",
  "key2": "2sVop1LeMc764DW39SGg2oJYEwPiuaFvq58YKPs9dqVEZFm9aL5FXb4q5FWzmTRTyNaUZ94m4yAMdkESE35Wjdii",
  "key3": "41HhPnKJuwUtoJrM5CjoJVWeQ7aXiYKZF3ZyRLVLH41L6G3tCgqcU5Wr6Q4vnZEZUyFnH894SHMC4ELX4Xk59qKB",
  "key4": "3BgWUkvKWvQ5uKL41YXRJLmrmsCCC6eWwBNjacRB9GgoSTFWUDDP8CJpRgwJH851FVjeUNkHekJjyDQxGPm7BGaN",
  "key5": "5i5yYN7Du717GF7BZvFx73UC2g4unAhUPxmeJgtsnjxEaiPsypuxpCi5A3gyTmZ6ojyCtYTYCNriu8oreVE4MUEe",
  "key6": "5v87Lg1xQ6TJfKa6Zyk9sguR5qJ8C7JcJQH9TvEizybBe6KM1vrSny424cCBFfuVQJVSTtoPybvWxwhW8mQirFXH",
  "key7": "5zFvjV9yNTgYcATAzNKBvKZ8VRYvuBrQB4crTjQkDoju1JGdXGFA2BsYnDoZsLR6z9bHaAMJxwPABPA1d6wuUu97",
  "key8": "4UMyjwhTwDzy13DdQy4M9jweiRYojqP7fTAzymmjRUs5BHqH8fRm9RjoChK5MntDBc7Hr6QmixnKs7vwxBCsS9cV",
  "key9": "2J6TuRioryQ8FvmaXscRX91KGynnHhhPBkTHVgBHzUL47Qyoj8T9XmoqXc4qqKxwVce97XSe5Rm4v39HaBpnDEgC",
  "key10": "2qfZprDwHbYm1D7FeRpPCynte3XvxGN31dM95PJxR8U9GP4Y6wGunRBhcM3ZTM55xsoeHwewtCv8NQHkPKgTQcmG",
  "key11": "2EiRHjD7zQ2zs11zWGVXb8M2hCu7yaZBfkdqe27Zs2ceBUyWrqcnjm9XpJYD54xx3FovmnCV4rsgTQwZiG8itUQo",
  "key12": "3Xq7na4CAjSNctgE12q2Xk1yW887mcqxUM2919T53GGgtXz1kbeHQXuFJhQdoHU8hYmF2nyFd3qJmdEyF2ycuNfr",
  "key13": "5dPMxqSLHLABzoWzRrCb6tvZikxEsBUqzfDPysVjDkZ36mwVNV8QsVCoU4siTnaRZy1JNLV38npXoiLWBmWSrcUH",
  "key14": "3ZVT1Xzz8SD54q3Fzj4o9fTmr8kfc7TXLn4WgSNukK6JiCcUojiARG3RwPcmHiELFouoCuwE4hCCpYuSXLf8fJjE",
  "key15": "5ecmcRk1vrqkyKAqZjBs5vfisnWJNAwwaTen13STXYAzhYonuxGfUZAGbAh7ipyZtMqt6fzDXn4LBwSTRU2WmaLG",
  "key16": "3SiyJeHrmxYR716PQ9gdRcovSipo45pgLCDwBLbfLCPb6u4CYJyVKkmkEGy6xpbkh9P9U178JZGmn3k6w4AWZB4i",
  "key17": "LytW7wGioLRdk7K1d6TmHnHELoaDiZnem5asm4LSqyLEa5DNym8MKCNfNX3ASZfGsKQrkYPbtj9sWuKkoidyA7F",
  "key18": "2DpxiUK47xberD6b4kCtTDXvPDtQsd2boc97qop4tjZHaQ8GL7Dhtu3tPSwxnwsMekYRha59kEWN5HVEMC5LcwJ8",
  "key19": "36fTPQE8F99mcAWTjG7vTjGUwPkRAzf3hhVmPN3sgQfw7wUcKghZchrV3Bufx4VtNJNj5vzaN8daE3KM91fkfKBv",
  "key20": "2Je9KTGq9jGHpTyLGLHF6QoJbYFW31pwZMu4zP6x5dngcESrPU39A95rt9EAz7gzGThtMhwoSTy2ZDVaJAKafYae",
  "key21": "5XFCsquD8mgDcbp43v3X59s2iQuA3b1opj6dU7pLXd9Tzf8YSdcMYZkR6A82MMwjoMhJW8XTyrPhR8RFrGukwAFH",
  "key22": "2h5ftmPpvwDYaXYBDna5uTzUykG8reUdY5CLJVSSsvejFzJDwyPjG6AyAZRA2pa5diZAyKpiNaUBqHxKQhrrfzr2",
  "key23": "5Snn62FAs7fJW1AdwnGggwF9VWNaAJR7yonShaHtCTuQmszUafgdWVLKrqKE1HkTbrJ5ciz1Ge6XacziroEAbX9x",
  "key24": "2GSdPy2UH2QH2RNRvQgoA3FAwWeG7J3VkGBZLfgUNQkxFvcW4Wzwr9AezuyWcqfpBbwcn2QTH8261yaJjTShnTcZ",
  "key25": "3YfK28P4AgXzH7Mpv7EJKY1cJEiKWaeVtAZb5XBipentjtyoKX7kGPymJybwuBhoeMFX7h7woF1ap9Dyqj1A46nH",
  "key26": "2rznrMHGhLn2tS6FiAitYE6tQtspmczHabWdJcRUcMf9x1VFfWpbrRD7qnG7Hx6tADhSpKKSAKZUn8javEgZgRER",
  "key27": "3cuRZvZPJPyqNPyJ72acy59NnJREjszgBD6vW78ALhTBsQB4XWkimaJ8YvxeypiFRdMNvDC5VeJa6fHtcJL7rAv5",
  "key28": "4K2JiL3irNPk6NPUxXH9yH8W2SyUA1HynBt6YwWakd3KYDJsjBGrgcj1Xn7oJ7cz3ugZaBdszXAt7qjL3wrttetJ",
  "key29": "3Hwm6YAcd72KWm5b5s59eWgBLvw33ozmj7pNSGzjdfwLPEax3JUp6gctpJCS4c27HgTqN4w6Y9TKZt2CyW5jbDYi",
  "key30": "3hroKMgvzAkv87BzBrs53HHPBrXyXggXB1fsGxzpCxVSsybeco2v5yB2nbmw1vBr1iFHskJHa9eK5eYZGjCBQ7id",
  "key31": "iS3gWhnYxDhZucK8STWYH2VPi3scMJcwfhHoeixJgjBHuUvsUC32EcKSaDea2nXtAjmW3zxnhuZvz6oNCJiU7xV",
  "key32": "52wfHuxithy1n5BgRmV5SwafQqMCDqkCyNJkvvtv8nBSzKN7RR8huSMg2wADeXaBnmsaFC9R5cKzjD6zeDtPJTd7",
  "key33": "5rUN7sCwDYzXLrV97LZ954VSF8oNA8Wkw3d1HWUYYAt3U9nXG4PregSbNdFBwFi4h2hpLSu7XKvL1GGiu3KZRECD",
  "key34": "2HHoDownkrkXvdpppHR97qKBhYhdyPwmxehHGqLquep4SYaybavWXhj7jSnsUHv16QmvghkYnqAwa6Gxq72GhH6t",
  "key35": "2Jc8z2h6TXFFCDSXJAh1r7YmbVYKq6c2mBtCHtUP6jCwT5otTPqGfksD9dukA5gW9rEWoQi88Q2SwC2tcfQuC2x7",
  "key36": "uKosSL7wB9ESzPi7e3EQk4jJUreH7n2fyRw2HZtFnLpQ8LR8kpSGzwkG6NQ9azdugT4jHe9sU33tV3Z7GTawVvp",
  "key37": "4JYCH1ii2ECPv44TA91NY2T1C59AYTij6aMjbWaLY4Fvh1PgH6LZ5gb3GtKaSvv5DpTCJZ15p7pT3MqwiPavNzff",
  "key38": "2ndfL51LHpRMeW7chwT4QdHi5cfKMtkKnYcdkFh3KJUwKG2UqpudvFkTjSxQb8EsdtYo1YSLrNoZMDUbZBEaVs41",
  "key39": "2WBtHKqjWTZCjDnqvFwXWcNL2YaQnnbNepV7uC6pQWXEH7xYVPcS7Q7iMxSpLtsrtmoYeKUmMLZ9gPLs7XqJa8tT",
  "key40": "3DqqBxUSS8eR4n9BdMomDcQkt74Sor9W7nMkbX3SaoC28i4w2EHuyPyLFuJCryaeDWRFJUjcz9YFwcEvqi1fCrYD"
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
