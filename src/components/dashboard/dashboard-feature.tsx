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
    "5SRACzcWMx9rK9xgrHFAjb6xX4EWSytWd4Jt9v1ikEwtnmTBNBuy8mx4Hrf6H8mr5jDLfCHHoGmbTCn5eiVzSKSp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Fp3czHePC1yUgPPNBF5nknayrxbs7XzBYPt3WUSfheMWTvrdjV9xmHBsqMaZb5ZyqwfHUaQ6v5zjjJTx6nsx2e5",
  "key1": "V1cU5gqKkztnWyoyjScgSjRjXWY6YZqSaFQtQKJ2Z9PtrNzcu53mD936T5MNwtNkqgZNT7ZhYdtiwD65hCseE9q",
  "key2": "2aJPfA4AZtbjW922yoMn2hswCvrm2MhAQRxAgHgGFxdkWp8SFULf5gEBxXkfxHuWbPhkii1ttTDZdx2GCnWPJGUn",
  "key3": "fP3dhU4NBZvLb6YeA9WSjvjH6AdRrSX9q3uQNo1JjVGaW56KTNmc6u9hYaBGqu236FSGVmdCytz14snu2GmoeYw",
  "key4": "VFR1ui6FiMifCGvcbiMZzqDShVciMPfbZo59j6RgY2LDMJn5iKoox86EBggx3vucWNiWQg4PuPwzLJVhfJ7oJBv",
  "key5": "4Rxvi37A6SXZfXgpCbf1YrmKDVWp7dk7iWHYb1e6sfcfFAGy6zEATvFoeDj2QpUqJMM7eD3iY5VPWRXeT2JA7xCZ",
  "key6": "4dKZ3Gh3jEajMKB1HRnSYqYBee8oM5gLb4pebbrPQDRuA2yj5RSuEe3v5cPkUu2KTMJv1ny6esuxPsMBvQ7cep1D",
  "key7": "2ZtLht68iYocCQ5a4MXqF5y2w7BmKFMcSXxoJEqm42zxuaGD1jbBgXmhj1xD9YWJwkTX2Z69RV9EWySngHHeHsqU",
  "key8": "4Yenpx5xhXe1BGHW2nN34wdDRCmntxHA3zRur87gFAV119MW2fgSqz19WgycKV7qsshGoY1jjUyYE8KbjEhAPp9Z",
  "key9": "3K1NztvVuaAPP8oYPvMnAUYGSdRFkR4qv5p1r99cMYi3e9WEWLvpSMcsoK9B4wJWWhpct43LWwWKhTdz851zhDHo",
  "key10": "im984YKyk6LCNQuQk92hjxqu1tKUjeR8j5CGqZ5VBMXtfBYGpELUSySYPBd7JDFVHEZ9yqz3sYREC8mYuMZiPpT",
  "key11": "4MTh5smbF944n1DJcm3qh5opGVj8M77WP24JZXKGeKeWZPQwhUqLupMfkZzCTq7gx5LkWdm1bDEAhadhE2dsmjZB",
  "key12": "5zyhBZnuj9NBvatSzSCJBhLd7yyxm4M6CX1nq9g3HfdcFCTpUjtm68jtvbkd6zjCKqw7oCMusNvDP7fvm6ZMGeoQ",
  "key13": "3oSbeW1QXVuGjHkLYsC529nAbLwhAVkjmnzfQ4Q8PoanV82Qi7zV1jkUGPke9DpDB37HUPJtgn9CzrLEVjGbvS2W",
  "key14": "2WrsyWrEzkYArXf8SEpV4RnqM5UXBWC8tL8F3vWBp5cp2JF1yqmQf2pRbUbbpJTLPmHKLkm26wdEL3CmmvEE6yRd",
  "key15": "5ZSZsQLDre86sSAd9mNS8AWGyg8X1Z7r9EoNaLEENHdrfCVoz1LWuKaoyGcEgfwG4mXoKBtA1TQLmxypJLgzv5YW",
  "key16": "53traZxXWbEayFi8NfzCvwsNt5wNfoLuEXoHELn8iqWwb6bLb53QywvMWJKKKGrvo3NaqcAzDKp7sQCCj3GfdhTk",
  "key17": "5trz4KsgAvh78VA5jthDFhW8a8sxxTKmtWwQ7d6qKWvfe9d67Ez7ttbFMvQ9LbYcy7rYmu7yNT5Fy1uympsQCDy2",
  "key18": "5iiEdPoU8VvAmtBtfDcYwH2WADGSDu6NaSPnTMeCCRBvo292QMduoBqyMR3WW7WSb4apUMpkQDRc6pFxg7VR46jH",
  "key19": "3kXFpmavquFns7Pcn9rH3iswbNp6wsBHS4mZEQDixE1DsNAexcRu14TNwjvb6Xvo23zBkSLJZA7siTeC3e8atJvu",
  "key20": "5CDonnDSwYJWrQXsPyHGrnXz8f8gcFWTo5Dc2hYRiUFES1V8G4WEFRP4NvncxwM2LJwNibTDE3HTGnJQe9uRCC8Q",
  "key21": "2TduyDfLXKqQ5ua2VdrwLsWzRe7C4WztZLivTbeLdMU7eS97drn1knjFTxDfgKgCEH4iHe59Xa3N71u9wc5GSpES",
  "key22": "56DCw6n63SciHjyamMJLhPSp24QmFpFBVbY7HHtYx1gmvHQXkMRFqKva4wkXkYZYrWTkM6pLk5nDpndBdAo3FwbL",
  "key23": "MY3MudnwV9es2qcK28pjhMA4BsE4jWrYkMQxQSp6TCt8Y1Ue93S69HNeHhu8rxayCa9SMkTwFcV9HKcEEnsBN79",
  "key24": "5duCiVEd336VWr4sKYevGF7WuaFHPHJft8cbkByekaN3Az8bkxwtR1pjCjcmoNGx97pEC3RqL6ou5vCsnfboB4cZ",
  "key25": "2CtuApMHTvpMHCwsmELYKJgFM8dk49QNZcY6mmF8q4KkZe3D2jptDWnGfMgBc44r3YSHYUqXo8KFAEkf8L6XCfY4",
  "key26": "zfYLjCHeJsvhuEMtVJrw3aYcUDbeZhQzERd9gxZ1z2FfQ4F5zAtoFkBRuxCkS9bzGh77puqCXNKpYfz44wuqNMw",
  "key27": "4LgZG6o6pBVrW9bbycqtncHqor6y4jE6DzrtCkPGKQBZyuXfNFEGSxAqiY14LifBcFwuPFq7HCP8vUxBZtMsCJuW",
  "key28": "28vTVHPqjfjEQkjRag2MbMLBEiRJMvWMjNKZVFdgTKvCYgvc5PxErZJWtDwe1GhZsHbHqLrv4h6CnLpbAALrQTe2",
  "key29": "4cmzPtg2r4wLhFEaBajq6ChcgefDrbS5h3nuTHBcvvttz4T3Cg1PkqLk2yqaCZarzrNyd88noW6fwkBrUEVHtTzH",
  "key30": "3gT9FqZjHh65C59gHy8rYbbeoy8yXE6Gy7yosgNUH3L4wgjbra4UgLbsg2m21shdhEp7eSL1gDurydi2CTxivnFz",
  "key31": "2G9TAPTsPRg8feCswQ8MnxCjmiaJ2oQvadVPEhbRErZKSo4YiGvBiETJ8dHWkoXHmzbgxuQa6YmutsAyPnaFbxoq",
  "key32": "4DnXKfvxA83vzQRA1YquCqQbSFuvVzBM53XA2nFowb3XhTuGFHLDEW2t8NE5iEYmKDcTHQRaaTTHs5nTTt5HN4H9",
  "key33": "3dgew6kdjK7YtZGvwv5SbShKjNUPMxebB5yHrvy7K5HM9zLaLw2KqXZZQ3WP2bWfKM8hAaJjbJjyt8dMeUBn1edr",
  "key34": "3uYjBG2yLueQSnRJSfTYvr4di7VK69JocH9MWoqqDgHFz9WWnJjj9R4enavcDQozmAqAQ7QEKeHkoTUirY5naE2S",
  "key35": "33sgtpewcaaXC1eHdK3GfSiXvRn4Rs39TBZo6QWh59fPfu8wzHAGVnFsJ1ZFUbXzupfY8TKeBE86y5VzMjFYC1yn"
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
