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
    "3qVk3zKzjtj71LvwmtviLUMP86WhSAGXHEEcDANJdAU6uRqEhSSE5eaZ1KAk4xSk1cc6rcosSTMCA9yhJLTppe6K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NF265ET7a43E4HpsDQkTXUsmqkEUoM4mWz3KnxpbKUzYuCWcuDSDD5hxZsySS3mh65e5sy3XUVAR6LPJv9BUPGw",
  "key1": "4uQe2xQ3Hs9QyNbn13TNu5bHW3AtRdoFsvWq7TYQtn4FDu1ogL8s6YCWFPECAqdqc8wfsMRvCQahKFmGr9g6yjGQ",
  "key2": "oUf36QRRyHgbQrJ4XKijwjHgdBYug3Gsk8NUkP64E7GCXHaRGTUZpx36GXt4qWPtAFMY6zfubk2rjq1LmsjkD9K",
  "key3": "ZwMkEbm6jgYf77hFsqYwHrLFKWXnP1Y2qxjdh6DnnJNu1k7qf8L95yqjb6jQxEeJQSF3DjGsXGL8kVGzguN9KWQ",
  "key4": "3WfTMEVuYXeBn5gDt1VbStnhP3gz9b73qU7LXgxkanvHpJnkpfQq2u8P4rRz5r2PZ5kXf2cssE2YASaVd64KW5e2",
  "key5": "3YzjoEnuLXv6Cf116Qz5Z1ZDYgVro9uA5sRgp9jnqTBQrU1CXin9mBtuQNCw9EK9oWrQXq2KJ65h1A5xvkFsMmNH",
  "key6": "3FC6oPpmRKPgRHGdxD8fQMoKeKMmJTwJuRhFgpNSxFD5SFKSq8XW2eg9CBJi2XGCaqYzWHpNKpMja4tWBRajYY9D",
  "key7": "5NAxrw9xbqhKCMmQgyotgMgp4P9eDU84WkFpUhCqZ3yVNCWt9fZWLN83SfHMFbnwL8wFA8K8161GDtUNqRk1xnwL",
  "key8": "EYUPBNvzhU8uPef9hYLi7Pd2BBu7XNqrY5WZtMCLXkyvWNGrhYHsZqumhNG7bBeAcvisZPPoLa88ReTQbtxaGWD",
  "key9": "skNWK1HqonnZhVRfjUZamdMX7U8yAVGBKsNpYQpw3yYRGS7uie3rSGghYGFxgyaG9MbPEf4CiUy4aRsxos9k8iU",
  "key10": "2U4sLrwVcbL8oyweNeKeeEeUXiUXadvQ3rau2Gha79nU71qaqFFUCQWiULztwNE2hUxoaFeY7mrH5vazKXssXTpS",
  "key11": "2B4zgAZqqg2b3wDNfarw2WbBWDmnGhZUuYfxY9PpG6QCiWgu1Ng1mr2JNDXiamWxdc1sE1BY8tX7ypRwGbU9CeBv",
  "key12": "65mkzszn48J2TCjgGjRimSjREG72VABvWv9fYu5GrqQXU9ygUpwGDrNfeQQYGsj1SU2XT2TdB7NuJKGXFNqqQxeh",
  "key13": "44h9mfPJ6XWWUxsVAaXUMuPdQixwKfc5Au4W7rersZ4dpMWdRiGZo1z7r2GjFeV9R9K3kSmZVYhk17vA6GvsTKP1",
  "key14": "2qn2BzUEF5CBPLUFGiwhrucTwudvuG2ToAon2qbJMFXetc45MyVnn8TPUhFkoXWoNmfK9Y21tbW2Cz5hzFE5ZadZ",
  "key15": "n3DH99FCfaQiKPT7dsJkRKMtiPDkQi8c9eXqDrJweRSHHD1DensikeNnuD3RiusVu8JojfqbVuLZCNrguU8JB7i",
  "key16": "5GY7g1EwtULvFtppsYgvHag7hRyVQuPPn3HTUj61BGiLXXn4ohXJEX1f82xqfGYPhifHo2LvvcF6pnJa3HCtNrDT",
  "key17": "5uzMcQZo6XY5Tynb1znCTLe1zCf9EK6sDH3DK6teCzVf1EMwHtApcFzy6KpuZ7iVzRUxFj7M5ZBWpvLLXkT8m9e3",
  "key18": "61tT5R3tKyZh7KJnEFmEoM9qqqewc9G4w6EgmLoGQhTKDQje51JAaLG3BKtK5Mp553BDtBEjB6wTxM5xWnm4eszH",
  "key19": "3WRNLPJxyNroWPtBusm7KeGYVmhxytMNCBc9DHbxGF2uRX8rsTkHGTEtirDnae6kiTyUaVUrxHoxB3JxCkv5ncVH",
  "key20": "59oE6WLrGiFNpdG4D1TSNjj1Aqe1C87dhqZsMnnc5FvxCBeHvUK4rkQ6iUcZ7nYaBnqGBMA9GBh6xQjwLLe63pZo",
  "key21": "v2Rgf5WX5c3dHzbyc2VEtbk9kphSCSELPAXpJwjuVi9jMkKebmWmtf2Mr7RWhe5Dtnab2uy72cNZYQCMRCw7sFn",
  "key22": "4b96VGLVd2WAYD6VZiA6RCPXQ9mxT5xjFPWQX5d7u5SJK2modfDbzF8VhB1KWAVu2zmZKZbjfxZcGzBhRRrvMwaT",
  "key23": "2uRqPAbHedjzkLJCgUBZHoTJPJVAv1b1Gj4VuBaHGTJbuRM3XxKXTcEhk14JGdZrp7yp5dsKDBzoWq9vH3QqRkz1",
  "key24": "4kjzA4R3Qoy6F2uXxDvfV71Y12EJThMcMAfua68dmCTT1C6KwuHSfoQifYWjBg8gAd1LBy83xhijKTzVhaHNAHYB",
  "key25": "3ZeUKFGgqRxZrhMbbyhxTVtdLQ4VzPcYhEnNKBfPLZNSj6t2C2Bt3a6yC9Zx6S4rWsHeexebYVxjQcqELidT2atD",
  "key26": "sCPykLDdYLGkporErYGsbiPbioNzDqSzpVmCKEo5gY9nD4VpsNJ55itkKcx7P7KzvWvr6jyHzbzX4Hr1k6hTJKa",
  "key27": "VGrBfzjrfajhNNdB49bPKjKRcKq7BRwQK9RG79nmNaSnNjnERv9iLizXi17yzRQ82Yjh39LxL8bYTaEch9JGZWx",
  "key28": "2n2p7UFWqujjXmF9Loix3isfUXAA5kb5yeodcT7dq6bgFvEzitXqR429DodRRFrSprnUZBQVKKxp1ntQS7d9XRp3",
  "key29": "kvvN3GRAVWeWcPGnbsDqhSCLcJzJupq7Z1CxdDRGxS6hA8rCvS8h7rDrFA4kbEURn3pmDHE9GjYtRuZppek1QMa",
  "key30": "3ZkkheR2NMeYG9frwCaXJdqMN9Zkajz5c5wDcJR9nfTYeSP1akifssD24U1vNb2m7DrJnmaWb3Jv7zUjjZ3aYwEV"
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
