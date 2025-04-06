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
    "2Yg4CMAnNUjWGajSUf8BGrD8W67gBHy4yS9kZtqLnyeNnQd4MR7KrpYcvzELQWotPV4Lkpmm2xaRQ9xMBbtsqMxU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6HAn9EfFUz6t5YYEFfN9XKwgZbapCeAfw1n5yrK1aPgozNqYhcyaogYqDDgtswpVBvMfEq1SsmRXr5QVRbcKezK",
  "key1": "2zESTx7e979xRAgWKxkErm5wdv9hrKoBGBP1z2gaXDE52V8i2nKbnqtWEafwTS5p7zzHi4YagWRuxjH2C5Y3W37e",
  "key2": "5a5nUfY9Bvmgpa35UWnrefyc3NPLW1YHXg4Bdge4HYpvCBJ5zweyqU36z5QRXpXU8Tn2Ehg6n11uUStSHws1Bjqm",
  "key3": "4B95YGpiDMPgyir4A2LF9TwxA3yjFs5s44AXBQJwR8vpdKXDdMo6nJL1KGsFA1Q19n3A1Lbzzx2hzoQd9sAHG8PK",
  "key4": "BGQZWUpg8ekDme2uep5vpiQrNfGhmwoBd99C6qm9bS1UGTbPpYYbHVCQAR2BzmZaKJFsy3cA6szPJefutnz7ewB",
  "key5": "58hGDLzBC1XeyizHR28cMS57scxfKtGCmuhgz1gcVaHJ1aQbeNFPR9ZLbSdqAXL1RPi5iwvvrkdHjiqDzf2nNYct",
  "key6": "2yAZFJ9QWz2k1qhWB6AUHgynQpkXWU8zCpUAmWznK7CR4ZZp4XRxZ2JKKin3MUMuZ3BwpaADuDXZPsBG4RUkZghq",
  "key7": "5SRoYYBrsVcyb1wJZxcQarj8ULjmnsAgEJhfffzRo8e4nfpGaZVWWSMyFUyw7h1aySc7bNWFn63X4mcZhVouzB9J",
  "key8": "4ZJAbcKeRosdnyGkadUCo4x6NQE4fqLheWAK6NyizYM1QYaJo6Kp9zghABjY31ieNfF5sLqPi9JELyVu69xL61Sk",
  "key9": "24Q2m51iuP9HTnKe8o2Tb4xuGKLUjpxyebphYiDJJFGfAhyyjszjuF1hki5Qqmve14KKWW6HiWDCuXofFZzs5Qq3",
  "key10": "4Xr41UTV7N6gw4dsT8JHYDJdueoyD3LyaXA9kT6vTYkDf3UoyXyEHzoSbhxsrSuyTcb44Mc4JYv62LTVPBsSrNs4",
  "key11": "DhxTd12vvJ1m1QM4zg8HnAUbWLRGeeUWkzyAvT61GRjYQXpjVaRvPesFijayv1S4boUM5tXBy4r76tW83jLnev5",
  "key12": "3cYVfNQK2XCmD97zMn3fgZFY3GZWHJt3i285WQwtWSajUbfe3qSjF5nz1dPxxRA9fHQaqdRMba3vG4cLisG3UCGg",
  "key13": "3a6Sx8bjh2zZfTLs8G4PELnXmXvv3UZy8HbDhskEvofoKFjRaSxzgpooNADDvH769rPB8ohqcpoyLQa26Gacy7P1",
  "key14": "LNrEBxTfDUtY3zL37jmQN8TbqVu2tFVJ4He2yprU7gNdbHWMkP5VzyyqZFY4Kf8orXuPXcMhfvEfeBqGEWHSnwH",
  "key15": "522y55TNM4cdh9637MK4K7PAVn8hteWGzd1aS3FS499LxRuy7KjyJj9YZccAxuwHVJ6Zx1Bw5Tj3XQCB8Huza1eu",
  "key16": "kJsCbj6ciQpPm1X1ak1jG7QssyKcNhYZVMusETebexsMgBXPjQH8BHSsdbCkDqcDEsQL19DC1tgsY8Zu5oQXPzr",
  "key17": "2432XHkatrZGqMoAULxchqi8ELCSm9oMSnyioeRAGAmnLqpAvo62ho5UkF6t5T5Zi3oSNn2FaVCxHx6itt2QwZj9",
  "key18": "2BWECLUH9ijZvLVNA9uKA4caLdWTrYMPmVd4bVhyU7NB527npg4B13rjXJ9EFh89ce1e4ALjWBPTRYYju2jQtZ2n",
  "key19": "2qD27CR4sendUiP4q5oYbCsaXJ6HtGx3Y3PVAtTbWVJbptfC1EiecgbYG1bN3Qvk86gD9HKL2rSVjtkxFQrue9qY",
  "key20": "4WhceHp4WRX1KJRmNprCgm8XhEnC6JZjun1Fho9a2YYjJepw56eZjEzuJ1KtbBtXjxwH2AqZyYZFFeCwCbrqpVYL",
  "key21": "35sBdhrrZaLxJF9YeAhQaQ28RjeKMkfEXi9ran3zjjynDQ5EcCtPAt3W4Nvn584zLW5iXgSpjSZ464btATggmLLW",
  "key22": "5GicnYJfoPckLjQQF2o6kUMCqYtusaumjxH4fGK7KFhNUbEaftUevDmqMJXuoSEUeCaS3KPhfxMyvx9CYgyeH3ap",
  "key23": "28eGJoecxRvBquzzJUEof3cW3JeyD8a9TJwM3WtDRfgaYrgzPGSk69pxgbWN7ynVvCwRphvgSF6LE9zjFZvBHFyr",
  "key24": "61YcPnXoAQbECRpdERmqjn7Pu2AT7Phjtp9tTzxgHTXZURAB48K34UG6HH21N4eqFL5c2QaQb21PobqVeQqogJPw",
  "key25": "5kwtjJDSn21gcQFYpygxZkdRx2tdeteZ9qi2C2QiCvmVk6H4Bcg518ZaxrQpGWJy1QdCXThoGwXh43KczoXMihtz",
  "key26": "2w7Ysr82pgYboKrqs3RiD7okxGs3h6FQMvFMiYWZzGJz7N1ydmftFHDz9Z1tHvpEHBZbnvS5YdbhF83jAF47qPVW",
  "key27": "26T21ygZm5zBMjpqJvYDDcSWNgV81URqizM8jYS6biUBns7XZDSD5q4MkJXF3DRNmzzwf29UohAECCvfJDKMAdbs",
  "key28": "5vHe6DD9j67cxJkv32FP8zPoMNTeXKaVcpUry3Ht3peK3H14jJoVsmk5nj9qaHuSdtfp1dJqtt6KfruWEyYfZ4fH",
  "key29": "5ffr9vc5YUehWWW8Sn8FZCe9cCDmf6tgkmjwAYxb1ct5umM3uJU1o6J3etnDRqBdnAVdfdD62GToJZFXrJiubAUy",
  "key30": "3sukhsWNxXgBipj2mXDgjYi4MgbUbe8NeYQ5n2rCneskkcz1CKUTD8N6Dga417bY62N8CJL98ioK4ZEYTZgmxcLp"
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
