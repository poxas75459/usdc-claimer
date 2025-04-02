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
    "35H11VkKGXci3qxe3UC6TahXFRDuMrAUdenTw21zwWQAG759SbNSeGMywBFR27zcviwM1d4Rgxqytene1aF5yTLx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iMsHT2F3gdopAy2LorKmaATaJDtok3KXHq9o9y7KPPceRv2Fz8SBJBUZPkKNqCt7rju2mVArFdUFKZh4R6vhy6X",
  "key1": "56j6fvvCzsLkxbdAVTkw3S8sM8zL4NHQqHu7RomkmBEbjRkG7Pk2o5ZAschJsgs77auLkW3BrqRFLcHjMX4TnLzY",
  "key2": "54pczpX5r73GmjPVKFDqwN7LtgTYpT9KxpmmMAFS1TVXKT25hsffHS9DSa1S8K3QSPMCcdmUKYvNemWLPa6i39oJ",
  "key3": "3KRCMi4wLUeFEx2QZR7akie7BwSRrF6KJ1hs8eadritiTY6wSYaR3wHj7CX3jgavwRYKVwjMQcD8KdcDouSDGpEx",
  "key4": "3ADUj2ZxqtGXy8VjU1LtWWg7i3iCLUz8YJysaJTa1LSsrtQtJh8QmJc2feQ6UhbeXDxELjdc3fw12PxEd5gtMrf8",
  "key5": "2am1kfwXDCpZY3qhgne8qyb8RZwVUuNs7PKX6JpXiMzU7VqgMcXsjvLXfkmjPGbaVBh4CfGktVsHtGj9QCNqAq4X",
  "key6": "2DG1QzpiobUuUE4xU77PANyTHKXLhZqZ4Qqo8D9isf4Rcy4Ak7ySV5XkdNXC1rmNtymHwnDx1nnrzqkTVGNQJBTj",
  "key7": "4E1osKxH9se7K4nm6BGBs1FzXqrvugBQ78DBKyNjSS6YeHNraNdjodwusdJ73CWpr915HpQv85kbcdHr4SAZYqVM",
  "key8": "3UUb4FXvFY1QSESbZrgsqyLohF4D9K1JikuyC9zSetsMUZ1y7a4Dnni1AQB2YQsqTBbNSTqtGpcpuxyKjwhwXj9A",
  "key9": "4t2hW5o2cuKVmKjtBt2sRqUYo2Y41JRWVjw2jZaaQSDEBfouXiuQy3KLoCtxTaBLhofXxA51Wz3XrKikNtDXUPG7",
  "key10": "LpgZTPsKK6jvxFh1ZKFJ1pKNQJusgCYjr8S4TsxaFpBqRN554JbrLXTpdxxpeynStygLwZb9AgFdm4ZWq2LtNx4",
  "key11": "3PRibZMd2o4PTmsBEZvRoHomgisu9qPikJwGdVZ9YCVG5FLwr7nLovk4s5zMSFb2zbsC3RuXcJFbnjz4KrLvYEwR",
  "key12": "3Qg6jhZx1PxMQ2mjdjND8aBCBaDkFhcXn7DbLB4VpktpVm24iHxQYoJtpdxTpK3shgnBtJHDapBa9NwXYFnAtQgM",
  "key13": "4RVQv8VVNde2NtSVAQZQmXvyYWmKNsDUhcNH5FQGL6tj5DUV2kKUF7CnbX1w1rvNP39yvQiRfCoX58gpyjPDFFtB",
  "key14": "5nshLmizQcgfC5QvHZ8ZNoUYWniDR4FestJ6ZPRMU7aEbpFULjEn8BeWhobPVpgbsq7sca4SeU1mQg6SP9CC6q5Q",
  "key15": "5ruXcRDmk4mqD8gp2ry7PerZPgjbLtdtfH3PAyHCarg9KQBRC3MwF7vw8qLCCVA1PFhiaWmpVDtkSM41ZK4N4rp9",
  "key16": "jNbZ9x6ifP99DT93ZdEeZaU6w7RigievaqpLHWNfmVKj3q7y7Uqwf4XpTV7fK1jPLTa9X2rBSEfcvUYqTC2iQ9x",
  "key17": "4qjnY9jDfdWqjVqx2S4BZnTQEF1iBeuSjiyGkPtxbYhHDm59qUbqERopCsYRPtGqzUhc48EtyCwYCMD4tjQzpYER",
  "key18": "3YqGTX1kLxKsBjU44ontHzRUzgRmFkTtHxaF91yJeQpe1PKZESa8ePKabpmbhGqCvjfou9YfF2peqLg11xVxiMS6",
  "key19": "FEtvTCYWf5Dw8DT3DiGa5dHgPKi5QLredzRstYJFK4exqV7CBA3Z9FLyKcMziJXas2p7owf9Jd3u5c83sX4ycF5",
  "key20": "cGaJL1b9N7DJkrV2M91bsH7WgFpYZhsAPAqzdDXJho1zReoBYg295oYSxoEy1nZTpMgyUb2wmjPgfSf9nJx2PYj",
  "key21": "4th9K67nPGCFJTUZe2maf5a1sL6LDCqGrFdc1YjhjnHesKx9Lw3Rxn9EoDx71GEXnTsH2X8CQypHZEbE2pN58Vuv",
  "key22": "5Ey9wNrxgxDT2FextG1bN16WHnpDRBgp33LdFipBZYv7p4H2FdvhSAHBor3ciCWftkkYMMBdzuGyDTaqPRoiVEbz",
  "key23": "3xNpSsZD2JYr4Bb1D66mwNEdGi9G6gF3cwHG3oqRWCWHpMj7qZrYSdXwQnpp4TYkUy8xNnq34v2QU9zriE6g1nyL",
  "key24": "51C6F1cVNH4AX1QWjBDxER5oCexA7EzX5xnZ4GQB1S6be4T7b3Ahcff1HfTeyNKrM3kj3y8LW4oF1QnnzyH99AtS",
  "key25": "2jnmiiR55Q6VswMZka1GKWPZx1Ts9VBKYiPebVqjQKAPSEB7rxtMa1ZyFKAgRaFn8awUavp288VJHev885yuoUtv",
  "key26": "25CZdjp5Kooi8YW7RpC5vVC6eKLFLgv6boyJGASon3H2ceZaNLFMNcN6ARxvFbukc3oZjsr5svb6ccjDapqHSmda",
  "key27": "oQHGb5ohtsnsQAowzFfkYhBbY4xFDxmDxnG1554UFjSpTaeeGAMvYV14a8kBKxamfK1av2CUqoJDvFtnB1Ui5sP",
  "key28": "3xwquJy8xBh3zGVPsNvmJGDRkLy96SrbfnMBMW2nDBJGkENDRQLJYc9K3NPVCGBpS8vXn62FpA3RRPH8K5VdHn63",
  "key29": "3TGaDqpJ6gR4yeJeKJsBh8MctJXq4ny8pZsn1d9Vf61rWDTBDAyLfisHgFdY3d8LVCHnLqcPC65guDUF3AdVkAin",
  "key30": "NStD2mPT2tFnGTDK4iapdyZQ7UByYnQvtMCBUYdepRGJFJFwNcHhngKt9HL7tJ11j3ytmKVrpY9o9z75fsppRjg",
  "key31": "2WVyHJZhDPwFJcsibt391Bja1FPJiGH1Mdn7W3yJVQgwwmD5f22Mm8JWFMF77KuqK1eWFrYAEzQgyvFUZ7ZhR1Pi",
  "key32": "27GXb95stiizCUbiCZJUEkbyyKUVJ12vcVaCY6jQdHjy9xpYS95pyWZ8v5cAPmwaGcL5tgWAhj7J7DCoMWbiZy6f",
  "key33": "5o8PbfiW93uWrXeERknw9vffV4NUuCcyfH4P1GqjhGU9E1d6CJQTnotRhusvpMVQ3Y1SQyBc9PF7uwTDzKQ9NZZo",
  "key34": "277m6FMxuvngtk5VB6Jkcp8PefPXewWKZter8JLaqnN1xrsVgJLS8gSgGMY6TwfQgFd5HyYBQJ9V2vFUEkfHPBum"
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
