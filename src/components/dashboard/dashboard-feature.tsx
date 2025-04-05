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
    "1VxxedLivoXoZY6p6n8eruicvj71Ar4Zfs3tSYdQgLihttTWGAcT6uabFHDMdm6cAP1CgcoWuwBs255SaWQzPft"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45dJ7a7taS5xqqRNre7jUL3ECeNpXwV9bHXkKXE5v6wQbN8hrPAWxr9Rcpq8DwD7tX8hFfEuKqarn85DKTofZHQy",
  "key1": "4iiqDT5RBMf6MrSaxTsJVqzPPfqpqpdqNgaYLAmT5Zo1GRP6gpCRksVtKBu5u54Mtb9qnFYBHJRjgyLwr7Kh9g2X",
  "key2": "64ZcQnEWebTUuQXj1izPxhrmsazaEfLp1Fm64P74emuaWVCTAYgqTShtr9MKhUYZLuuyNuxJPfwY3YG66NYgWZoq",
  "key3": "2VBF3NjQyadjo4yr1iWyp4f9XPJdA8yzcGngJ5TJsEwGBmXVyqHMzY9PQX9cEhSSpEKiwoX6TP7XVJhWMKP8sCiD",
  "key4": "4PJKHSNMbgpFMdFq8LusfbmTAWuAwXZFHuNpqjTMPaNJ2PXWcf4gpU9QBzLtAvHeqJm1VBGJNV8HEUKVuYmjJRX9",
  "key5": "3hsMKhUmPTznv6cnXDiWeKhJQAtxnZ7yk2XYJpM9jQEcVaYyfXhR8Yc8WhAivtuT2jd1Ehz8TmdSpHyRkQoJ5FDc",
  "key6": "3bd4MxXdFi8RMEGKpukrDhd3keqVaR3HUoi6U7VMyMzFDy4iYhRQC9Z5r8k44JCoJrDCD2hKqZG4tv243WrdJuUn",
  "key7": "4FGMxCpc1izdJWxQL333T4CuG389HwvTnoJMjNuxqJoqTFMPBdSTuVjajLV2UtU3hogXgedGPixB9D7w5FUSQNtu",
  "key8": "5A1JwVAs69hUx3n8ViNudwV68ogXUM3dViFpFzPAsuP9a2V3oem1r6EpReT8wSStyvkTcpAyPNkugqkkJtstZRfS",
  "key9": "3yZbSeWHfMDoVQAtPxaPybRU6dyU7wmrm2KnEedPRy4Nw2eB4BJy7A5mgY2efSJLxV2Xteq211jGfXMhnf969SFR",
  "key10": "RoQ1K25PmnJcPCKEpLoUsP1dUKhS7zUPXnENpH4Q8ofJ7iLD3vxxzavH5qWEg23yppTTw2e8awmJCojz9pjZuBu",
  "key11": "4eqAKwJgg1jQFJn5hh8MTvJGGuutrzm6tEHrjVuDHFPcBWbG85ipS1t2t5GzMuBzh9GeJ1hnfAPRXT3qKUcs3q4f",
  "key12": "2EQ5xjQvqNqgbjgHtf3pKR9FQzzWncZxFTzTCZYuS2vKcurVu21V7QVSc9jAfVVzeysodaov9pdbZnUUhgnfcBjE",
  "key13": "64bcQn8p7oaj34i5F3UCs24eq1UDGLYeCV4D5xTtpzw9wAQaDf3JpKugPTDzKBcSarj9AebuB6eQSTFx5nSGkmQm",
  "key14": "DQZwn7y2NzSRjEy2jGLThPjcrgJgTeYwk821rEgBUuPcxPiuLBfdeFX8MWrnW8aB2nKj8BodVh436RPByko6Te7",
  "key15": "4htQEMiPfkpanP7xTnRdF1NEH6MTLisv5odkSkarRNp2eZCpkgQXNBru1AdLM8VzppPBc5yDZmcS69SenuWwojXz",
  "key16": "3jDUFpqcaptRTt46YGk6LsVVUzVwHtjo6LFosMpF4T7w3BM15T4UZSZKghBpmNH7Ue8cHGQwfV64RSfqRF2wQ5jc",
  "key17": "3RMYi2qqug7szNMjsxH1bNyzGVr95JG7KYELsLZXL8ozP716veLoCoPzBLpk9s3tae37LwgCSHVovX4cHgqwoyLe",
  "key18": "5ar4HCt9ji9j7r86qQw6mhYMywUDWEJ381Xvba1n1i4nKiUYnVjAbC7KtBS24Xmf49K8ydZHunvLe7Vw62m2FG4T",
  "key19": "57TtX8ZQrHSwVShDFo55i3bT21UnGpSqYMnqWFWwqRJQoQEHm3k9ipkonarNWFn1RqUiE3hEGuonxprtfeCdFf7H",
  "key20": "4GnrExdV6ajNM9TSJowJzJpcWuzuPMbUCJq2WQS1K8m5ZjF2NbKoCkXZx6enp64Z6x3ydVXvj8fk8x4QpBTKb1Y",
  "key21": "3Cu7guE6vJ26UMZi54AUcoCWQNvz9hTuQiPV7gLHWK6csiX17HQ5WHd9sJUUccGtXCrX2TjzMk5o7ZydJCv2Crbb",
  "key22": "2wsLAvh2NyZHo2DW4icuG7V9zpNyYmkBmrARnwvoREykNq7y2ZUeAypBgh9RZUwzsaQY2WotjYVftLMXJXWDUUmh",
  "key23": "2qGQYkw62CGqZkzNsyuKqymd2C8xzRCP245bLgAvFoHdAcvahTfzNp5Z3ko4HJUG3udGcHFU84wBbcxMza92PSYx",
  "key24": "2phibt8wbdabiMKXArNxVxKKujjVSRH28Nzp1JqXGeERaGGEihVFbAHyTcZB6wyBaX2WFP2DyZWg49teKJQZ5p5k",
  "key25": "4AvKbMtbfo5ULi7vkM1V5ziJxbAM5v8UEWb5Suc8akdaPXZsviuq2JEmsAqcykhxqfdLJNn8PrPrR4Nh6Xkc9fkp",
  "key26": "2Qn82ACjFG8s3LcxszSMfVDzbo4hQ85EXbGEFYqLgNfBoHcbRkn5xGtSZ8SA5Zgo1oc8oUoTNCFWXGvdTUr8PS6v",
  "key27": "3MUPANxJiW2yW3pdKYX8qtX5UFQbLoc5S5JiLc4woEocCfdar2Dw5DoQPyXQztZYX4WLeYVE38K2c3aGPUVXWhM9",
  "key28": "5C5uDT93bWhRiFaVfZUBgrkemEzwGDTYedLFtB4Ke5Edr3sJ1UNyxzz5qG2rDuMZA9175ArcVr7rAdEM3pYMgVGH",
  "key29": "Nbshi5Wnw5gqnuaXf15twjNB7dDkHLVquywKCrCqXoFbDK5uDmVA5KnJtfS42AkP1qMn7zqLjvQqaRvXudq6MJo",
  "key30": "fv39paNL2Me74PH6px8c29FuxvthQo9F3aDNFbkEifjPfyU9VeoA8SM2ApyTgyeN86y2aqQ85WGV2FRLn8GThkr",
  "key31": "5gQxU6mCXqvQbjCWpRGLR7NxghjZbBo3Cgm6HV1Z8xybzuCdhygxkbtHrco43qXgFeDt1UsfVXNpLRKiaQdwrbut",
  "key32": "63PTsxtLzPH6vYq7K2oinPB4JkcugJ3nLLwNkncHeM9fM8akUJL8XbRU3ZCX2fmCM39CMYe4EG6m33B7Rd7rdYCY",
  "key33": "34rnsNdEuBsNZLfsBJjXoniH2UtFsVTWLiz3X3B2TNSqs5AqzY5NvKjPug7MXgtjHfcKbU5tnCHhnRDXStWLyHEU",
  "key34": "QnKHkXWqWYMo9ETHjavQdhqu5X1GRbUqohatqNnN8ZgNHZPTVnVrdry9CL4LskJSjrhAsbhBim3RhLktHWvUJnk"
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
