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
    "3rJGTRdTY53Mgr4enQ1LLeHkrdxYbE6NQFu53Y1e2Cc1GtrWjHfsh8dcao1v2xEWv1hNymjqYGyvqYgYiPKjjhHr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yxXDHVt2xWxK1bXuPMmk39CJBsNSMwpgmKw5CZaRLrC5Eyxd2dAR81t4MJRt7gZ2YnhVJEjpRhSdVPH7xuxMqMX",
  "key1": "jVwLQEmRM7k8utVsB8MPaY8AEyCjUfTXsVaHSCNafBzHjvXxVhPdCkVBAkFyrdcthRqvzxy2kn7PZMCYnzez29a",
  "key2": "38gejmrnrFvAxaEXkTpkbLfyeF4UiKDM3H93jdZd8o5bEN8fX99gAzJakhQeMDb7XrTPoCSDnqLRojz8Ygv9Mcq4",
  "key3": "4nxEUqz2QdVBDyrdyBLx19pi35yEvY6heA8tK3ucsuJ5vX98XRCfX1ZhugM6gWkbSnGCgeSBPLqbaiFd1P7DYKfM",
  "key4": "5EgX7TY9Z1CYKum7PWdx3d3tLc51Zp8dzQi1pRR1HU9tQjMSCoJuXeS8vLRXbM8vS8fFShT4ovgf937gLbsHHAoM",
  "key5": "5NFNLTZcG172tptwnVLL12pNB9XD4pDBb5Y7sDQEUaWJ5XSyBe82f9vg7VxmhMBWoW3mgcwc3REPMhYzYk9D3Fqq",
  "key6": "5BSuyroimGBSY6zrzkBxPHoFDJxYLe4zuh4tDX8nm9Heb62DDjrnaXWcihXXgE1ESSkaoYMMKsH8exaMpGXMbtai",
  "key7": "4t73ogshyuJ5TGR4bExSvdgNua51Z7PyUiyohpVVG7QpFxuMS8CDxGZzrdnjKkyncUPUopbSqf5ikULarBxZTVtb",
  "key8": "YgRHB5gLPEnooLfnixpEyYA1wYoBhcqHAw7LW7EVbsLBV3dVN4AzG2n4JiEWhojP1gpTAGfGqg82aE2QCVuzsLx",
  "key9": "4WPxLsUZwMZH5QXXn6B59auocXAXR9erdUKprkUxfQrDXj9rAQa9boUi8JyTUv4zCkn7fJkH1rEe3tdEhcTLdVv5",
  "key10": "5GPD1sDgoRNNJe2yxQCuJTxsY6Z4acQjwJLCnUEwqQenuPe1bCARtbmeKVgoryRU8yxQn6yg8hVX7KcR54s28yxE",
  "key11": "4rfB8Pf6ds5qJgSc2KVMRNfZbbWCF9eLqYAdPC1A83bFGbVUGJny56Xi5Ac4mpJp5aHF4gtTiQHC6B2PcoNNwXNn",
  "key12": "32DGyfPZHoQYSGEDq3DSL3A6mLV4ieeriNCHUj6baU9a4d6HuenAHngFTRBrgR7HSFpLz3umh7YMFsZeeu5TUcCZ",
  "key13": "3bbSn5JH9U9Q9jfvVeKecJiJFhiWS4xLjnmQMZpuadAv5P85Q8qjSBJKcoS1jA1A3pBSuiUrwAyyv8dFGWd7rbK4",
  "key14": "2c5FqEG5SFaxWoJ4iDcv27Dt59rdCmw1v8BbSvscp3W97PpZGLjjBEvJM4k7TRD9gN2LXosjcQtRYxtTT6JLkEMn",
  "key15": "2M41bvMSZvHD1HmagvHD65bG1YgfsSQHNEwHYvvxhFpYCAP9qwSbVEKiMMMuPc8hjLVgWSBZV33ovuatyVrMJQDW",
  "key16": "5M9w2iu2xsnqQUs3vz74ZNatC3a6UBsZorjpkzcEYJH9a2qVuwhPrb4wRibjg4AsMa8fq7Rv8aPsTABBH7mcxf1X",
  "key17": "4Yrt3PV1YBmVyimscKn5KKpjiXG8Y5ykQTUuWEQWjGvcYKnkCuktnBmFV4vycQcxnUMCpXb3reJzcbyA7Sg1CR3E",
  "key18": "NTpzKXkDGEbwpVfLoJciNaeQs8RUPNcNidZ7MrGX2iAGfLBRXb8YD932RYtCYZr2KEgjjYKvutZjUhmN5fonYQQ",
  "key19": "3ULRE4HCQ9LY13KUQzkXQVxki2oeRGHAnsdq2GQRDdpazg4Pdb63cUBhp9dLh86iR9Y8EqPaoS31SNn8vgH4ZadJ",
  "key20": "29gxH9RQwz5Wbm9o2cCsHLQ7j3BDTZi3CBHzmc2n9CxKYqTKvP3qwKtY4b9WWX3UJAGbqGvXhnwuXwvcKBgLBbGd",
  "key21": "5sDTAUMqkGTZEVv29CjVwXxmjdzbDgJ73hrAvD3pe8D5QpZkpW4XpFXikmp3Hg3QGNaRKJR5RC8UoKfXjBfHoJL9",
  "key22": "25eLMCs1EWGkx65M9EUikC61Mf2XnaW1cWnCjy6fuSst8f15wnke86qUucpTH5Hsa6j2WofB7vFXFA4tb2d6gZ7V",
  "key23": "hJZpgyF6Hhgm8mWj8hPEJqPN3omwq5gB4mY6GnqMB6VXP7Q8qQVfL2fvxcWd1FSEn7rYxeufg9ayPegnU147Xia",
  "key24": "37meQYUGNUrtMvjpvcBAX1PUbzaHmHWqUoFfwcrZfaHrELiJnX6VWGakTBpevjqNA6LcpXJPru1XovAMuRrumHDn",
  "key25": "Y1FGtsvfJLXi9YWucF9x8RTfhTMknBKdse8AxYuj7eZx5YJDooReoQj8FcD8DUpcHigLBtSPof5HGqequZkuKg1",
  "key26": "GJSb7ZvFzLsbSy6WXFhMii85tYcT8QSksTzbVt48YNc9mYwkVEbaZ6r5edD8ijsqMUuuSzJ3wK3fdCPEoUSwcex",
  "key27": "4wsBK28yFEiV39R4HwUG9gMKYANMJSR6FMQzfAHa1WooSnzRTmMSXRGofyxHwknTYAC4puB9euVMRDRTT7hWxDLC",
  "key28": "2MEDVvCts17BpCBA8PJyRFwrfG5y8arQP1Tz59EaftZHmwT6skyoSDHHDS6qmK1KvUHrmnp33YgBP8MKeGQxMHTy",
  "key29": "5erU1uEviGkp3sVUkuJ3wHRttuMiqDRwrHQgcTVo4abJ9EXxqx5xpqGzb44MTQXC63Ew5Ssc6jfy9Ub5tVxotCRw",
  "key30": "5AjeuDn8yGUpFc3Bow7HqGPrjCcjhUgveFkpaf3q4RCQ4VXe6JquK6sHXnrL62Ha2akpqYGE67ExH3XeSebVgHyU",
  "key31": "67XdPPqx1YmX4w7Gci6ZcoGo7NqUXzxqL4q9xA5hgqaD6xwBbHRxzotcTGazi5M2ZzocGNJggVy8osYpQjYaVqhb",
  "key32": "28sgggbrtZv2EWRXQTdyiEyXh1EhLKmSihrDYttSdfPQtRdJMTq2wNYUKqfTWZ8kA7c9noF2L3DKsvFHPgbkvwg1",
  "key33": "4h6Z9CivC7pzqy2veRzU4wEkLf17gRhTWgLVLaWhBJUTVyWk4RsEh69ia1PHHbHnqNWBie19uueKZDYKQfY572tD",
  "key34": "8uD18ada29SMYqwm3gxksDFkTyz5TMqvBCZRRgqhVL5RJzzq7FydF9h1u5ZThb1TJoVZLPSDDEPrYTJMjhcaGS1",
  "key35": "3QdeLdASBiD7JmyPgsrFrbSSSZFGU1x2vHHzrcuAms7J8J2PvM6JBEHb13yB842F5DmbYEXmMbRbXYSbU6uUNZsf",
  "key36": "3uPauteyi5xczU6LCs7PnRL1rbVatC2LPyMCn5scKEZ32RRTrSEJkC1CuhtzdgnduBmkTrWbuVZ3J5HcRu9yxFek",
  "key37": "541LfF9EjzeWbPpK321qsP7p5Mf7e4ZzEhb769ZssJgd77kKZ922Kv8Z7hW9eJadUPDvLN1EETzLJDqCrVfybYL2",
  "key38": "4QvhvwDes9nH3HWKcQ7CCKJ2s9xRxHYsQQwgpZmafHjdiFXV43Hy5VPGS3Tb8U1U4neEmt5VT1TU6Fb1BovHdoVE",
  "key39": "5YQ36rh2ZUTxVZwZ4YhBPrR3bBe4QKnMJhEy9vR94etSf759doXUUVgyzmSUPRfDvWj3r8Km57vEYguFpuBg5oRn",
  "key40": "5vocx3UuY8KxqqcM4U7uRWXWz6JJdj2xmTdiTHH8sP6BfuEP3BovUzJPe7kYYTuzSHvTaQvVvBVLCotEeGE8iYbx",
  "key41": "3Hpqv9SbC6RgjBStXMc8MzpULdR21pjC19yDMS2TXS6AQjFJenjnzmGb2wrWR4dS5Nmfx9oB9rrrSacT4whk8Kk",
  "key42": "5wMshy8RArQPfP8AV6sFaxzDBMrN9mfjPvYs97f2CnuhXF6X23jbF9hkzeG8gtkRSUnAiLKitFebEDUMaFjD8aXC",
  "key43": "kTYwyXq2fs8qZPtvJZpTmupLwWFGP4evc3VsZxXCuAUUjiP6xQmdwsJ54gvemGj1DAbSLnHNaq6UDtK94p8E9QJ",
  "key44": "4vMzkPXEbPs1zjLVJZXwCFyR9MgWum33ymx4PX8a37mub7bWst4sFmkvmkcDj4eKwgACnthQane7fqLsJ1XNwQ74",
  "key45": "4WEk2yFSJmXoiNPE7bdU41Ztj2xxrdiyoB8b5f5PPeU8GxA78xhYPwzdjKHfaYH558sFGnYru9ezwBw3Qni9ytuQ",
  "key46": "umcc782QWQYK1LUCRS7CTAzPQUzbSz8RT9XtW1oRu2vvqiL6ENLMTN2ejRZUWeq2vV7RZpvAMkPuf4GX2j4TYFu",
  "key47": "4GfMLgWR5AzqAEuizidAu5NL7ksBCzWi2inxgQzAkbVJNSwed6utpFmsTYyx6nA14Eapqw9hzxYEE8J1rcBpA67X"
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
