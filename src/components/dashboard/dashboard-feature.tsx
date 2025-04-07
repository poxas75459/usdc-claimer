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
    "4DDbT4iDoRH4WbgCwuabiZbFAU2k485ZWkjbfeFSufzoZCSSYG1F6t2eTgXG2xJDWC9JB69SbFKpRm8csJbn5jHH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jedhQDjVvDSDadzR1thYCUTDZmLojcGa9tegBnDsmtx4989rK8dkQYMMeVvUACp6FQqrY2MMtGqsmaXFkrbVfNE",
  "key1": "1211crLRvDM9oPFR2txuRA2EsWSjJRw7qwwdgCQ5pkLRd8kWXDoDJdQfppS6eKnUKpzfhypN7neJarKzNF59MePk",
  "key2": "3dXWRnBrxC6kxcZe2NFPSN335eMsNUyp7dNCAdmt1bPpfZ9WiZn9FdLEF4iMQDzF6XPuq4jk1pbL4VeCox1336iF",
  "key3": "CUmvHhqfZHY5vbYi6Px8NcfQ5jLXBNkhSSnA3VLJj5NNWNqZkH9wEtHWECH62ghHWEXKEjpWixejP1su2a1cNHi",
  "key4": "3PX7oh7Bh6erEkS1iWJiuPTBHYVbvQfej46L8uGSCxs5z28SqjZg1fqZrJDkaG8PixCzTW1yRDSMyL9jtnD9nSYd",
  "key5": "2vfioiUP5KYRQP67DCC3YwaAMthqVHhzELS8zRFmqGB5z5yCsBedJZVW8Zv4zLxw1G73Rbtn2tzb2LEvm5sbmZL3",
  "key6": "48bzkNQjDaGF7da46VKbSfkN3GU57rcfKAMnMdGh2bbGL4jSHMTGXGaHF2h4Kef6impPaA16qeoAwiw2bCjbc8sE",
  "key7": "4V2PLUifcYbL1cjq6aH5WqjdUHf7SKe1JodqrfTF9z5e3MdbwQKiLYp9Hdt7A1vCUBQ9LuU6FU3snmUZPbcpHrmi",
  "key8": "2QfyJ1kSQkMJaWJuWPgqmCRodL8j6wCCYtvETDQ7B4DK2TL9fK5Msh7akpcWFaBVkB9S2WLgdkJ3xu1AxaA8gaHo",
  "key9": "5cMQXNVUpBPZ97JSmNshYhPXx3myv94Wj3Wqc9ZxZFoZKgzjmWfdUJMUw5wqtUU1gzgrWrN397o5YJDhr9f8ydJb",
  "key10": "3HNc7d79tTrUNqW18rH5KDP1DU6NkGkxCVgsQzVzhcL4qpAULQjyWf8tkMbMUNMdm2b7gazfmMPZo15YrY4tUoZp",
  "key11": "654zvYqR1qmsvWWsb4mdJhUkUEBmWwtFCbb8nWa5vChrFb4cvpUhPNFkhU7V6xiYqJJ4s4NoAW1cQGfHKv9Hrumi",
  "key12": "5x9tNMbxm7rtS1ee2wczfwzD3zawgamQs7fg5LFN4y3zuNn7U1yPVorYkbz9X8RkqvrJQPERxsHFWqZqbaEnxYwb",
  "key13": "4tMRfwkXyoA5qvvHQ4V4Dev7d9Djjjt7ePSHQmXs9ykGv7GaeL4P3hDp8ffKCfRoKymZPBRcHGKitjGfxAQvGG9S",
  "key14": "tnb7E5oePGeSZWoRH8ucZSmuK3c24nqxjLMCGP2EovEwLkMc9f1CEAHfR22KHgGBr6ia6BhzPhnGmC9rWk3aWuw",
  "key15": "2HguLdB6YejDLrknYMndrAC4mbqobQAzX7hWtCHprsqChAxisZUr4xbU6dCVHGfS95iJqiNJ895jMQKaWBz6aqKZ",
  "key16": "dSGtRLV2m46KzFsfd4ssJuNTocZHihFKD9uSJ8uwqu1RiCdLdtxQbDYv8tK4PTxGjsXs5uffvgKw1KeF2g8c4Jk",
  "key17": "5JHchdz7tbsaST6b2PmShT7nLk2ewtB9UvVtNHrhtjXeLhQ8ibDQL7hGgnytfgj8pgyc19jDgjTBWKRs7gpJMmcn",
  "key18": "52HhyQZX1TQPeM9cE2gTB5RHimRgrMk4XYdi24SpiqXjqVdBta9PEtRAdu5NjkDZy1333Y95UCPBxxR232giRhPx",
  "key19": "5UrEE5N1A98Gp1F8gsNZufrUkJrHdo4R61jNfDsuL1oMmPAkzHeLdoSACBiKW8zDkgZEnzjdp8hZ2S3s12JEk3Vt",
  "key20": "3bfXbJK1zcACJhdZ7bVSRLCqRj57AbXdFC4z4VhXRPhu4b5wYYsEF4nw4kKUYMDB4cmS187UBDhaHfWSvkBTLuLw",
  "key21": "521x1tqzS3ooPNb19TvMJ5RsVsyydg7cP59nWjAhh7TFJxTQ3Xx27nyxYgSSNRuuNSWQB6KGKXFS3tBhC8WjZupb",
  "key22": "5uX9Popxt9v2hRQ6bVtvE6CLcLRxA3ZjH8fXfSiuV6awhKjM3Nj3B9BSyYb9mnW4zN4V8FmqMZPSnbuyvfL4z6fm",
  "key23": "4YZ4U4MuesZJ3RTucsP89sUGY9vcStysgTwqVfR1MmjvRW6BW9ssgdqbRPpPhsUxjavoUaHhXJXR9P4u1y56kTae",
  "key24": "5xTKuwFcfKQ6LQQKFm6xbWjKd8ZGUFyZouMaaa3JVRMvnGwq3iRFSU14p5SPuFxs5XS9pQ6XKDiAvpc5m3hUJekV",
  "key25": "3EEDHzdEkMgkFCHsDJE9qz2iBUu96fiKG7ZMqjT2xyeBCEUQPbjLWJysHS9s4bjiNUoJR3k1UR7ryPrB6H2xRCJP",
  "key26": "NpSiB7DuDgbQT2hQvHaSBuL4iWM5dH7KSe3t63ZCDnmFTUiCM4JKJPUVo9ANBJY1UpKezM8AUibwEjUkSFvJo5T",
  "key27": "4QeGTpaSiSHyyG4kDj3oCGvLgjSfpPzmYQeQy4bhmCHsEbetjGiKKsyh1PdFAmSLhTj52rQEhBDc1s5SbyjB4hBs",
  "key28": "5S6JJpxfbayRUCZNwdEsueqs5W6A7q5GxsXuv8WkHqpaBwQ4wbDLgPKjLAkJsHU2rtr6VB8WEW9EGWABdFF17B3R",
  "key29": "R4wD9CnXwgaBG7L4ZFmwPkqitCK6BsxWfXEX89yzrQdPFt1U9ZF1t7R7MVh1PeX4sEUWnWgSucZwP3kyGxM7QW5",
  "key30": "MEyPi4V8ScvqaQKuXEiobXNZTR6Cjqi3Zg12aW8a1fhK2fABFeujuKJa9tayi1CWGQJ2TZBoHEts4BevCHwmyop",
  "key31": "4FgBPG1Un4tWGnSQ3hBJQZaeARyKSQHyvTRxAHCertPq98yFFUoAfhh4FpWYEZwbhdvGcWmWrg4VMwzN2yNFjMAp",
  "key32": "2Pm44r14dmkQByQjrsH7tmmnL5GY1yxZ3ELv2LHQHbwSMu2noW2oyzb326HrvCWMA12PfqufzBt6PKAHzm1s89cP",
  "key33": "3Pq3aRTPdGZhJEzqWaofZamXvMjWVQYeqLATZtSUp6ckDNvbHVnRDRctX2k6BQNVFccuE3Cn2YMazLUMS4bPvea4",
  "key34": "4pTrEUX1D7FDtRKP19j2UeZ3bVimHVgSAfoBrSHMMZgzM6npwEpGybvVWCQEe1fsSC5PXZ8ktonyQBqphHfixwEH",
  "key35": "4Wxgz8H6By8veY7PHh486zwsosMQNQiP4M2Axq136GG3xv4gNBzi6dMxs5TdNt9FSndAkECrJgfRHZNQEE2nfVhK"
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
