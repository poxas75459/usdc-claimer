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
    "5ocWQZBAJowTtkwzXhduiWyDWYBxpGphjKvxQieCYFHrCcwVYm8tcTccq4WHVZBL591K3xuXG7NwV8dWNQwXXuom"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3m8vH5SqYU3krojjmruzH9Nftd9vs1wvb4U5M6umPDskshr4WxZ2bevm5KDUpAE1RAtUQ4ZiiAf6DwdZpU2JyUCc",
  "key1": "28oL26R18XW9Lrj2HtSXjoRyDtT7tx6ytQPAvPMP6CYbND1tyqCMNVEvxZJUsHtydqZ1egsgPY2zessQH1WYWNgz",
  "key2": "5sY29Mj2xaCTqBGdgioPDXz7go3DTentup6kHoy1H35yvbwhTW6GDVaM3qFHKrSMRDJ9pjHdMFjyZrWGZqH2CGu8",
  "key3": "4gBNv4EbiSeJZbrVgQd2UHXaSM1odmgP9wpWwq12pwMkbM1vi9RivU6rocxixBJcB1P2t4MWXrq5cjnM6BzSc9Yk",
  "key4": "2HK83dLjxRw1gXmMU3pd7v26z5hgAgGmTs9HCHDQ9tZQcxwU4H9oTqSknrH5wn7S3CtT6j1hrBYQRh17x7yHyio2",
  "key5": "5oD4JDLp4tgQUdZb4HegsNbv9opSQR7GXD2UNMV4inzccdZAbrZPpVKHNmuWx7THuY8jsfVp8gH5vAsHsTfZZUzN",
  "key6": "5ps9JVJfHMhrEVk7qXgma6tn5GXHCSzeExv8hxNveuB24rYQ7UgcvCE7964bei3FfLZRMgfbiQsKpuS3i4NRJGrF",
  "key7": "4wK6GuCG5vuQVGiqshhFNUysDt4pesgQK6BmCnoCXzkPWBK3v7oCJ5ggcoy8tAkvKAsTAT6hhUc5TQRuBjVadTSH",
  "key8": "574K2dTSJSzGRhShkqZEMPxn1kzj4YYNfaDWXwgt9soLwEotBwbUx84VQxiYfhuqWhBe7Yu29v1T77tqYeymGFD5",
  "key9": "5xUfHvFYYNLcQk5vfs84EQUwWXqQwUf42nekoyBP2MRKuLLg35StVQUERiPQnsjX5DYRTyXoa3AwgJyGfL526E1x",
  "key10": "4gByuU4uLg7daDco5MFor5L9gK1TMb9QqseHNKHQr8i7tsC38kJuGoeUJEBAJzybPuDfs2DDaXn4Fo1e8zZgQtgm",
  "key11": "2bgtdDrHAhwv6QTPP79jKaQvRaDZ5Tk4YnUc2ay9bGbLQ2Wb2ueATjQEKbB2azC2JSvrkq8Ko8GbCwnzaBuyR1nR",
  "key12": "4cjxaY1ftGzvytnNXXDF5dQTd3NAvQmACjjvefmKKQEUKRB7HKTVUUXLJUre6jMjiQc5YFR9HZgtkvv7Zicm2EHU",
  "key13": "2331AerKBkHUMLWXmNcrQifEV8fH2j6uYstiZmB4cYkj9Y9DyRL4pQV29DQ1kjdpkEuzi6Y1SG4N6Ubgot96yCJh",
  "key14": "sThbXyHbfakTvNFbBiKRCpJNSuYN5ndeZj6BTD1kEE71P9KqUbtQKFisxSoVyATRFJsS9Rwe5BZJYvLuVfASDyB",
  "key15": "3jV9MBtT9r86QPcidBaQTtocqEpTN6pGd6NtZegyS7mt4xA2cGd3qw6BHPEGrF16wW5bog4wXY3AFybbZKqtKRZy",
  "key16": "Rcm8sqowmKLLu3aGuQDfCqZ3oGZkGhJ1eemRJsLVmfgK4x73Rng5Sz2ywhCFvo1bNh7XcxpGwvmqhyHqsQdTujt",
  "key17": "5fwEd655WecGyNZ1E8KP2YLDEuiTcSFiLMq4R4nMo2nBmrhnV34ZZzxJTWhXv93xjW1SHKDrAfThbYmnd2qLUz4E",
  "key18": "5FN23idYfeodZFHQfsijZQNCxx4AbrqFPfELfuqR12wAL6mMnvcrG8QzTeFfAjbyzxJbDg2DKsP67Y9UmwbAqGdJ",
  "key19": "4rT7tqvKu7YLWDc3JPChefyjJeiuMnDG1FYoPNHUB9yuSxkb2qpNrTzXvjRGp1G8baG3VnyKiwaNYnvtTpft7joQ",
  "key20": "35v3rnWU4cgRpotVqZkvRfLz4sYUDQVcQCkLWz7q7xiHH9BZt7k241u6u5PueWu8TF4Z3nd4Uf8bEptq1yM7aiKY",
  "key21": "4qyv7aN4Tc9ktamr79ozzC4jkAXpEsbohHWD6UzktPqPkr3DAC53Xj2b78yGwRZPozfyHGGEwyEF9Bt8vr5ryVcP",
  "key22": "2BdzSuMNGKNEoXD2M1rjUFPAzVQD3GhThCHXjHyZEjhV4w2mmGJcf571NvxxyGnyr1jyxACHhEvQPd52AQzkxp1G",
  "key23": "5T9xw7pYjWJRxFkVVY9Dm8TDSpfjNffYrWMhLFdTfpHsiJPX74k54UtcedpUowmQGnhPd7Jt8Us7uTNiL6LXpoyc",
  "key24": "hRKPAMcSV2RqTqaM9xpsFnSYY8ykHnXBUi4ES9h2ro3JMRukMkEACAeDrGvnwyMo6TbGai4zeMvR4gjDTxQHBhG",
  "key25": "3SWQS8T33vdQ8FHj9UdYASwr7dhtFVKeVCQUAn3wBTTyRd8rYzGaFj7uK25YXHfz18KNLC698GCiEudFVpJxnEmt",
  "key26": "4NFsCQyhSZ3yjuUt6xyoLkhMyPHqwimD2qtsESHtcyMvabFpAy1yD1fAbqwV3tS82fkNpqw63WQoicjLrWLdphQF",
  "key27": "44Ry9p832B1TwWmsAZMTSPgqXZ7hsHnJ7Lk9eGDHeoNCfKc4pCxKJhLcoMJ9WCWYoM3wxRcpkGwA6bQFz2MGmAuh",
  "key28": "4dVwEdFxJfwmDRoHByCpQq6etAUqnygVB3Tby8CV2u7PSDG6AMewTWsFmHzjDvqHwbJPg2QRwDVDpiRnKpbz1gn5",
  "key29": "5rNaU8Pzy1uTpFdo2o5jn4GnAam75rDXVEACcrKrkgEq5v5Tz2jFSVhjcb83xE8pM31HxhKJZ198bUdPVhVkSRfs",
  "key30": "3PHS3nXrHgERKBkTkbzqqEbXMXzqGSQEqacZCVMRCfPVj6diDTZqSac4MzvPMJHC6GRYbhTM84sG8pbbKi3Xv9Pd",
  "key31": "64ts8Dq8hMh9jKo1GJR5g53h5t5FzaCpNsvLZbLQHJWKrFzBCooYDNUAmo8YMnRsfuEsLxQcWNvZNvbGPwpFZwYw"
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
