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
    "Z8QGVttUhFtabL68gNBRNtNyrMwVEY4t6nvcKHwwVLxFsqW4yLxdaZUG721D1zvt6qQ4LDKvZ7uMbVc7kiddrd3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DutywsRBxsqbs6PxotMNzdrp6XfA9uAhYEKMfYQc8y2MCBqc6FocHGppckbots9a42zzFJupVeuDrUnjEqB6dQp",
  "key1": "3Cvtp5oU7FR8u7RDH6RLh4wGsfJH6PFMA6ZJBcrc1onZhF3FZamQHW5cewy16cvwLC3xeoL6qQoxvemM57Wix5y1",
  "key2": "3Q5MtHV4y6DjQjbKFfwbF5nwZZt51kQNxdHRcamWmWgj7dN74aHtwpRX4JLaWbwGe3MNgjxELDVrPDj7VvS7RhFT",
  "key3": "UvhbYrQLi7jRWBd3FxPqsoJRcijxx8mhCY1pgWK3G3j6Sn4HEiRLQGc3BCVdxBb5fpiayE6SiwGArsrRH1EGqGN",
  "key4": "3JUzoMf2xNchd7pRHWBAcqvCfvWC9ddqTBmzMfWhYk3EA7WFcyY8TvFpm4dnd27CmYzyQyqj7q8MQZpN9UBHEt2H",
  "key5": "4oBMRi1zzMJKRaT6TLiNESf5WDfJ5tpi8dLrbkddMmsgAEuSppySb33GKJWBTA8MeQfy2G1MD8XdcVNYrDSCrEZo",
  "key6": "4nakcZYK6xKodiTPrY3D1LRmwmJ6ESdTHuUdwCCG2N6PfQziLAbuLyvPhmxueecgrD6DFjUoVg6dyk6TYujoDJ3G",
  "key7": "5d4D2wBxPTeh5qKu9D6z5mB7uXcqFjw5TdvnTfLyWhCS81g2fwpkPxm5Hd2TQZAjs54KLeo78WEtr5muu88oFLv6",
  "key8": "4Aq2ByYwUzNBr92KTr1W9r3wPE9dEnhoQG1nfTQnKa2MjHdVtr7QCtLqFntR6Yk8EmNE5SyW3zx6ih7gWgrycmNf",
  "key9": "3mVhQAQ4ZXw5NjrvWMuLPPA8HCe396HJjFmqu73sWYejMgNRNPjiFR5bCBQKvfGpBtgc8TrsgtoBR6eAA9dnrgXb",
  "key10": "2kuwH9qJmjXJ57zk9JwxzZwU6A2wMHu7rEehMGZUhSdUNPzAhT445WhchudLCMHmic8hVQBPVbMgMFw8bUm9cR5c",
  "key11": "55mzrWBTAJJfTE4QtdpQEAerZfw1vpKDua5AFGFmkkSKXFHpyvCBMURzMrgCLioqsvZDdFxJJatMekU4jUDntA2Y",
  "key12": "4pomtrXscBKsWAf9KzH7DLWHbZJbfFsuoaGg21tqEbFnF8qfqkQnF3SZh1s4Fw4EXa9MUWbbLJbnpWVcEmJMrrrc",
  "key13": "3ehBzvC3yz41xenjmVXhrCKLGcTYUJ3BtyYDY5u6GP8wWdvYGvRBGXuFxUy9sas7bCzbJUUcQqWsZ6S2zfjWDAnq",
  "key14": "4MPD9APAugxcajyCLa62tyFPkLFncCo5Vg3ckM8UNgwcCi6dyA6rQUrtg5q2dyY1b6rdUBL3Y5xAGoVypEkUfk7n",
  "key15": "J1jFgM1D12n3C1tV51Yrn2kFCtRZJydTBYkchnKpT457aGmvMrb9nz8S41AQU7aj2y2kBzfDr3rgeT7woXxV6v3",
  "key16": "3wSgiGYyBMBvstmHc9pLwo98jKFjVmcuTtw8gb1VMRXUb5Paq28oDLz3LACCKVVyQ2foE1gc4KTekTNEuGrbNKjY",
  "key17": "63BKLjg1JGiHPDvwRKsw9NvnN7deziWuN8YMXwEggBVL4f3wbmBirk5UZfk5BDSpRFjm3MpYZgscwh4nGnvCzpkZ",
  "key18": "5BQcSrq6RtQByZcHxr4QLozx29Nb6NTaoM67pukFhfmUbRtzc6hBaw4HQpxWYCp4KLmfBUqg3sMTvAkT5NzwtjzB",
  "key19": "5SiZ7RckLdEdxMzRZozcgpznW8HWUjMbS3ri6N76acdpUVvNdFHnyYyPDkmNCXBbmzB2doA2VUZ8CS6cPyiJtNSq",
  "key20": "5113gzd3iE29VRdh3nWbqWctF3RvprhAt6bW8uArAdkzkZtRL4ZSctdgW1kxpYcBVc4AxA8P8MJLx1t9gFhzzUyN",
  "key21": "vKTwCmip51C9cAfPaPqWBcecKDBBTPbZfYo2iDGgjzV88VfDZB37oqr88ShsyYxx8nM7m1x58fYy1ZDhU2TdMNP",
  "key22": "5oiXuGCDeU77hDmnhV1oJC5WPaZTf6ouWsPhQHEQNqdVT259M4P9LXoGe23dJGMY7CpSB6UVsPEvmemsJEZU9Wcd",
  "key23": "JvV3J1ft7taWPYMActwFrT48pzsppuGw5UxSakYDA1PSk7Gmv83njhR9tNRcgADY5J8KNJK912MDAxk4eikj9Fy",
  "key24": "5xHCeZsy2Yw3EbT8onTYQ8nHU7Ar8JTD4j5GQcM6gVXPUZSRvPoApSMzJPjCceS27SJk3Gc3jmJYQf72xp3L2hb3"
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
