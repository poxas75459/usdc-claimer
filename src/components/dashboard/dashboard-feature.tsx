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
    "4hpE644fofkKMJf1jdnqLSy2w56ahmYy7xdXyszuYjipoGZtYVvo3JLVTrJMroqSLKB5WUPDxbKCy5E64PGrsNDn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QdcqMr4CXxp2kRUcxSwk9avhc2dGJhERtVHPrDHTNzE6iPTsb5XsNnG84Eg3Ei7KLmxk7hEURf2toYuj8AtLkcV",
  "key1": "5RzsvkGE2aEXK6E886EhKJXxAWJ2fF6VaLhwK4x1WfoPNr55VVBhfRKCpDyyzuoik7AAWy3yMAR4cEZcfC2JXL9z",
  "key2": "5mLpe1NM2vNwKapaF7sKA6m9k1czQ1UHB9QyoSunrYrM4Ym1XvTCTqrBkX9a2fBcdpSU5H5knM5fVbEicugrwR5y",
  "key3": "SZVwHetsyhLhEmSNGkdts5r5Q5k8D3scBTwaowBx8atfZWNx7fqjJhZ3uwRw6jyDybhbGJUw9Z8MWs9y1qcRbZa",
  "key4": "2zxiZ6fNq7oqPZrjU5gL5gybcdQbPztTNxyj71KnoG3TCkVGwSDZpq1DBkW2chBQqfsXofHqbg1yBta7MjicTw5J",
  "key5": "5juqM2EKB4DZfpi3XJ3naJH2oKcGTQb3aeHDUijRLXScojrFQWmVgiziYSuD2BKVd7qo4xSiJNXQKt98YtZHsVQi",
  "key6": "2sVNNtj2thb3T5g5h9omcqoYUwRcrX9DsiRrXM4CN5DsjpftD5fa6BptJ7QeqpKKQr9NTcKJ7FLu7HfsHd6kzk5E",
  "key7": "5YGeDEimf5twtLqqiKAKwJqqbDKMrU6jYR2uTEexpygqAB7M7FfV23WpAoHDRhrDu2iQvnVtYgZtpnYgvKfi7mdZ",
  "key8": "4QW2WWceF5VuCTFBgSAenKyxmAD1Eeqo5uLbTSTxuuPdqMDGrEqtpkGaDnEykwV5K6gWEPwPd9Wnuk7WfJgDrq6t",
  "key9": "5cRfSJbZxMkRuLU49bjTvijEX4G6H3unz74M9tB4EDuwrhxMDzJUj1Bmep9wxVyyH1AiQjXoyFC2BGsx85Z5NCJy",
  "key10": "5o7xVMgMhfaJDgH5cbYp9KYpLW8UAe4DUhBe4WdMn3dzRh18kGGm4WtB6jxtv8j4Hmv87ZH4WNFJ6sn5BVi4bEZn",
  "key11": "26y8UocYc8wuW181he9NRmoZdurHgKM3W3jHXrt5dXoZoxjvZ7WGRbYhvKaRmmcchG2R3vwWMtTPK1nK7ngpRRV6",
  "key12": "4urj41V57ZQnh9NxdmAMGUFSjB79NudgdFBG54f28RseirKcCgxoz4C2KoCmxUWKhC4zj12KY4aeNJZCV7LAt8H5",
  "key13": "4qWNtMHUYnyTEbpWRhawEXB95ZU6EWSmv5K16oArCuXQMKDvdpDC2bDFLNraJ5JiMEjQV1f1rxoY69r226DWzaq8",
  "key14": "4RrU2YM8oabieaFeo8o3agW5hCkNY2RPZQVHXYMRftybXpzrV8ZZLEKWgGmCVPvTaq1GuM6gbTeV6JovqGAZmvtU",
  "key15": "37tD8RxpFhEQ4uBhp1PpoRt4Qzo1bf58LSYgXsjdo1eHJBMPdsDjhJxV6bXSFrWva893bBbH7Vz8cwahvWj6s1CX",
  "key16": "5hXPEBEi34BJoaiTKiEknkScgyFUQNMH3h2tcxses47inm4ZPFwPE92oWtRxPjRMsRvnG5DYxDRip6SakgjKfQPQ",
  "key17": "5zhYBJHSmP9M5fUreB9UjvtcunLdAwGNMbTLHfWNEBp8LFEdyWdRVCRR9NUAxoy8N8sn4x2PX9zLUKRL6HiSYjEr",
  "key18": "3GbXjqfmWx3wEmRoMhheFguyWQEN9mxXWZnNpkLZxLnzR3Zh28GJ4AXUsLjcD2ee5wCH2Rri89nDtkr8rz9zRPbf",
  "key19": "4cooHkwi8Fo8ZhbzDbRp6osiN4SuAcxkhrzv6E49RPrrsZenVi7kjb4mMsojjE6tKuqH46gzQTDFz5YYzAzwE8ZX",
  "key20": "44kB3uLWY6HVLxKeeAqt585zwAs1WLgBiUJzoqFuapKcpSgBBfv43zi8Xox6Pzu9RWujC1XjWWgEshN8ydmhc72M",
  "key21": "5Jc494BSocVs6DNJDtnbnfJkps78bp8BVrkNuXQtQUkt1VWgyW9vbwR4W19M6qogSL4qcMjh9CJ1BNvgXhRgtHd",
  "key22": "5va1n1nkkNqToK1D3ND1vvvArbS5h5QZbVxSjPFCH9YeEeCG4VcerTwRgYApqB6rdV6fekga6bEKsw6tth4kJTYL",
  "key23": "5Pntu6Wf4WS7nrtyyjMXSEYBg4GZrrbVK9t37AAq6ZTRK1u6RboQ87MSa82Nf7f3rFapZG6gcBfYcXQLrenc4uHd",
  "key24": "287Akqy53mQ23uZReK7EVZxVkiy65BtYky6DmwN7y2RPt2ZVktm7HLWKiSokknY9rT7Sotxp3caE5xsURUYMDMgk",
  "key25": "4nzHd7kNxrWTivkXvQvXoKW957Fu2pkjawnyQ9vJcYv4rTYsRujuP3geBeeCfKZTifBdZdBniiyZ3JjmZTjNJFr3",
  "key26": "4nffPVxDcDbdtVxJA3ChfTXxQXrBqgHn6AQAqMphbTyMaSuXKoQTZhUr38wPWaYCPw1hscWyRWwRj9QPN7QEubCZ"
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
