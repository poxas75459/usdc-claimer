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
    "g1m8eh6aRLYK2KgkqBzSkLhva2st8znayBKhqqSYUVPxFzT8UbD9kv6DHABQRp62M8dc7HJczR67bMvekWFnXEx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KBCo1CCcF2HcSMKBfUd7D5t4ePZWmgrbdHhb9yreCbZJt4JvC2YJ7UfVABhgpig7RooQYKpKf3DAq3hDfinDs3w",
  "key1": "fXGU3bbavAvX5nApwqgmb4bPioARa48tq4jtgwXA1nK9iMKYryupRX2uapTKVLVPW8zSvFyykhHbu4kPAwZo8YC",
  "key2": "vfM2YEyjQWwLmi8wGgFsVhPyd64ivLPWj56SLRY3XPcF9wwmbXtVD39EXh6j2DTgGhmXQUgQF7H1BKEL8F5Faf1",
  "key3": "DiSzaGp7s6j9Vqhw2JPGHJsUTgtXRrBypWet4G2A9Uknh9hV5gqfvwPnkYxByBBW6WAgCwM4zoZfJy5ChFdK9KD",
  "key4": "5i3NJT43YSb89PVakLguVkDEms3isHmHzbLh47sL442tXRhS7yxbYRaneeYF5Vjp5dHiC6qcvWxmjpNmASKF4oDq",
  "key5": "557aJ5t2VQo7ik9PEEM8RSpCaYrnFnjDDzczufSfmf3HXBGpzjDXdigTjR5VqBxkLGFR8Etex77xKxjwmVTzB2px",
  "key6": "2c5xtayxpLzYrFRB7pbzNz4rpCJABy6p2shFHdZS7HUka3sHG3K1mdmH92Tuxg9EFg4jiyP4bEoXjLAKEi78PmZm",
  "key7": "3DejUELnGhuBydXuFdf4B6CtCCuda6BqVLG73AyW5Hurb1yp6Eqp36qqnuJ5WLFF1z3bfZdNWmwT8b81cAMM3EWi",
  "key8": "yX2RZWdChC2QpjQpCrZqW47a2GD9TG9PFSvYKdtUrFTvsNUi6MC8qeiDF2L4cwKpEPxDCGTUa91NCD7QF9ioJG5",
  "key9": "59XT4N3b9NBQaarLnBwZGJ4FXLeJdHeuC5eE1Gq3h6mZrpJhSwv57ByzwNo3pJZJhiMRJ2bYCnJaz7AxS8dNs93v",
  "key10": "272m6iutqH2uE6GHxRc25wWrtMoc5xVhH6bCK8VmE5LvjRvDCxtUvHxU5jGqjFLZh7nGwF6xazR9YZcHUjLBb94T",
  "key11": "GxkoHQ2GrHJz2WkLJhCFUyUxXPHG9mmDnt6EfRbR5p74XWBVjbKRip2jbH5mSwpWFft348rtrdHZVXqUow9nLsE",
  "key12": "5efyAuGQsouzmxwvjAN4QUWpndc7YWvDANf9KSapH9BBJg6Qmt3aEQoiRbjJpWRXGfEUMUWmhHLFU6fainCfoQJc",
  "key13": "53FZ5y6dQhG63zKYLT2VBkaE7j2h1er3tBQYzXf9xmP7aGn8A4TUu5aS2tMzgUWDTNdq6HCH7eiSXn31NcjM4tid",
  "key14": "4bo245YtxitH2scgbXPHrDJNdhyLHpH46anKbyecDaWFaNo54n39WbLb84ZcN4MkibzDvt2XBvPwS8SkBKzWtbyq",
  "key15": "ER73xkD471T6sM8UkHDr9fAhAwc7ZStfBt9EBjmBEXsEzPmhzPugKJC21kzsmCiVvm8NXkAdBZ6yUgCJiJgn8N3",
  "key16": "3sv8p5pawJu3B52BLUwNyeoxqgJ2YHh14mGXA12eacU4eqaUGvSqRiZmjFLpinhGZ6haSPJ57E5EfVGovw9Hf8ai",
  "key17": "5p5NFhQy5PDN7rHhv6k246VbhGVmrFijY5igST7tyTpvc9NJrk4dn3N4UzUSS4fMCaoBBQ2KvfhSFeepuabTv89Y",
  "key18": "5aKF3aCuW2cUZfU6Y5ecY7dYtUv3xiBHdhuwdjowidaN4paumLJQVoYBj3WRxHU1F3iGa6tgGnoKjKHU3zCJ8X9T",
  "key19": "2aFn9QGx82knCgaX3dVcXh5dqaQT79UR6ojgCZbqMUN2CL5e4ztVeYzUNW1wXjDuepz7BoWxwTbRDVQeA8yGEH3F",
  "key20": "3YTrEjcre4GfpYvXsqcyZ6w9kQPqnYY8gdTfUo3qBxuCqw2FqhvnQW9MEK87ZNbNHSGAt9PutpkWFgxNSrWYMoN6",
  "key21": "3L1FvJ29TtDdHbxVXwQQrgzDpLoAC9GMwUBtvK7wwt8XLB8YDqqPrRnuk4RXcxA18t3w79mbZxoQwDPxK3HCT4VV",
  "key22": "2vJKkeVmtPVNRn54Ykom5TGeo6XJy2TWvudwBh1bUmBS6ek4Wd4iZ8unw35USeg3aBZZKzHRz33wrAQPcNY65RJA",
  "key23": "5tKVVpFeJ6vSTSoxNMiBVt6TCRL8DMUm7pRPffEACeNa85Km4taMkwiqwoyGQ1rJngieiaDeiitgV6mtBr1eGZED",
  "key24": "5fndpbdPGX1ytS1abbyVXA73jWwSxMb6TNNX8qVKR5UFxG2uFCveqHjJMYGnuzy1XUNY7X8WFN41FS1ARJT67n78",
  "key25": "5x99HWis42YShvKi7eomf6BRhD8YKAENHYAynYtAQNM7tYaMsLFpY6nrwBoWngMiJDYxY5WdfwXpFfQ5NyDXqEmB",
  "key26": "3Ln9VjeZhn9YpspEVpjtr6c9Kh5Jix4NGC7aVxjAa67cApZe5eqzNAF4SDJudGT3vRf9YAbcqWUqjJ2s2rudymLo",
  "key27": "2MhjRLJ89Ju4GcLwve4LrdxuKZLhHwewCb6o2ModipWZiwTMfp5HgByvFSe4JjwcEAxTRYmjDxAAKT1g9Bu7Wmcm",
  "key28": "5Hw7RuK6pXvpVtSxnwDJeXwr3AKakrcHtSCUP3dRGwauRDg8NFinumKqEqtaB8JUh3vcqAYD6YfAN36WcAqnAqju",
  "key29": "2qXuF2eA717YQMwEJQw4Yw43VyvptE5FsW44HhJ4rv7UvzJkpdKaS6MNpJXU7yuSXP1eVGXtGBsemTDsJRzosph9",
  "key30": "4rgNLLTytZdUWBFTxtgPvKX2R2A7zG9YFRukwshW9FD5mzLMCCGMo5DxE14C6NegTz1y4EbDhcW2XFoSZmgGP36D",
  "key31": "5tJNuXVqQvfgTeaT9NDhp1MkDUYLdn3EHdwiu32c8qDShVqPHboM8KRGC7N643UCU2mADRBWTEHpRBohbfybSdAt",
  "key32": "5DEaH9HidWmHjvEjTuFooXofLbSNrvTte2SaJbYGAaRQY6ptzaNvhyB8KrVcQMNiLhnbCubMVTRVgApeMAKivnGy",
  "key33": "5DeroAgPjAsiLEzkGMDoBZsBFYEVnCDBAWufMkxVm6ofmguRwTdnHkMjdQ2s6MD96jokbBwd2bUzY51XuEQMQ6q6",
  "key34": "4StMuQ5RBtDAnzVYLX6H6vykU9aLeDiaZp5p6hwtwDsZFX1beEfFGpwLgQi2TxC1d7QyMFjKiQU2XXVwnMdBHYaS",
  "key35": "7GPq6vcXY8v11Ri58xm7DVYSzDPAUjCGhFcYsufeZ9MC4ejp1Wzaf242YDwdRsFiABDLjTjU888SS5KPMiYs3NN",
  "key36": "UpcbBP29QCY96oGAFociRipBh8c2tYfpBvkoBoiep3BbJYbZBRq987ZJ13X8Pgx3UMXVVCBScJd9g9McaGnCU4c",
  "key37": "2gtSKpgj2RJJeAtYw8g3hDMXsYok7SiiRjPu9YuXqFpDJNserMyJzDw25WDLhVJhvW8ENhqkmxXCpys292VK9Nne",
  "key38": "Pe1hYZEeGPwdCWYbUBM3RotFvTVxgWmdLjSPWz1Mkj8Y1Bjx4g8QCiNfcDqqC6pG3hUDj39mAdwP44Q4KBGpznX",
  "key39": "2xkJ38YKAeWpXGeeoxsQwNpU5LxrHVtUhJvVxfpBprQPoEsYNqfjMoMBc3tXj65gXLU1KVyNcbq7Qu2XprMPWfhb",
  "key40": "4FqENbC1UpUXzXzeGQKkiGFRHGL3U6xvFwzm8Pu1JotEm7HoAMEMhoYhFZDXfV6sYLZZYzYuiBVWbBQXjLWvrwrc",
  "key41": "2cXwuoVKjvEV4qAPrv4xUvGbV8mbhM9FRRQTRyp7ehVjMwYWevQGU7zbANDDSpo7paFMKhEDJx8USwKgHxeUs5u6",
  "key42": "mZ68mZQzAgP1zokK7qBnT1Tjw8WSNY4ethz9mhNdUkuXy6d754iMzZebr2xhNC1q3zRDAUs2TYkbKU1TJRBr42L",
  "key43": "52zLUY8WYFR6ULm44giPc8ivctU7RJKSTQN2Kt5FHk9RZ8sD5RgrqVDutucKXNwzcCus86hv1xVX1bh9RbrPQw9a",
  "key44": "4SDGSaZeNLGyf1wqZT9ixbV5D6gvjVeeAfQS2SuNNMAvXv9rcsPJd4Maf2L2i5tLwigXV2A2UDkncnUakJ7zCPKy",
  "key45": "49aWGHMkPYKLq1LZPBnpArjFUrnbkFK5i21LfRC3vWmvVXsNpQkGhU6AMpH9LsFrBKALU83gyKStvWJwY2FUw9pD"
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
