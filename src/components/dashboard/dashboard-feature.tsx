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
    "3WDqCMPrg6Qphd7ks5HXyTu73uqg4bQ9emYBhjRR2Xzpx84bN1fLL3Q8iU8WBtbDZHBxQxVDhqJX2kNauyqubS4D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vRgD1VygbHJT9LMbdATMvZKGxsKhiYkxFaajN7pg7j15zeNrGTaymiTKDS5eQiGGnEB6HJxYFP7J1gwd3oBu6bL",
  "key1": "ybApJ9SNKPHsvURzina72Fb1drhLGoWphMHzc1UYUNdJQ6AanuZxnUNhxdW3b5nRr4j7pnDvsLGw8PdpJkX21Ez",
  "key2": "uNC1ajQFCvSHmt1rq65EQs6pbzJo67Hb8KnJkoTowYYLinHhxxGmLkF23xTX29iL2eyEj5erYpxGk51T3EXh9Jo",
  "key3": "27e1juZm7KNiKmFQXCN8b77ziS2ALpmL8RTEcsGwoBNRxvK7zQp9aNkAKDUM9a5ogX2FhDgBeuH1BYH3hNXr9Au5",
  "key4": "59tJyo5tQVPbg1U9YQJa6pFHhZzUKujGTtLXdLL5kGDNVbsHf8BEip45ScAVeeGWhxAF1VJBnGsgVzyyP5rrvZgf",
  "key5": "372VLrRSJii6gfoZBVSRVKUcqLagnj3eDMQGEFcGHerFPsiqWWhadR3HZBJVNXimoLxL4sjDFzH9pWuZmEsPu7ri",
  "key6": "2SpmmQdWWbboetZWzszWYt3mT9D1Tnc4ttgsiduczqMFHBNZTK76Mbg29N6xdAs67HKAwAarX7e4q7QM1yvH5xGv",
  "key7": "5HzjFVFihdjZgW5mQS5TTEDeZTpxXy5wiVczxT6JyBqKfoiLbbmo6dPWBanNR9zNmmvCQ11eK4ZL6tQX2cvvFraV",
  "key8": "3MdaMWaLQX7V6aZq3XoAYojksuXqSFXtYXcJkjG7shj98LRuKLdzWRV3jVDnEzvsMLmkwMHUA3sLKfzivCdUZFg6",
  "key9": "JwZqMZsbH4Nf9f7Db6i8aRD1r4DyTHN2ZK8QBkZkpGK73YfWTcsWufiGMHh225RuAAMQvL9cuLbeSXuxUENYR5s",
  "key10": "62Pc7aA88yauhhBqePC852A6uEVxyqHJQEASkbo65gTX7WQ3LnK6gU72CgUE6eK2wKLMjoZTgewnGZa36ydMH1nP",
  "key11": "32K7atypAyuRdRJQDwLVYdtn7NM2QsEuKHXL6n2dhGPumHF2AU7WYkHohXXcYAV1BfuZjQEvYn7xp1WAkHKqFjbf",
  "key12": "4ZdAHkovrT1qLF4yRawgoKHTpiJx87XBr4UEh9feGXm28x5JHpHXGqUWavecMnA61oWL3UjwaQh3t2wqd6wNBdGL",
  "key13": "5UK1wnPCBAhnwEe8v4LxC54MSsxi4ck7KApkUGRVqF2eCXZF2YjGtUkoEgYRa5NFkGQgjEiMZEm34obJe6MvcQFj",
  "key14": "2dLupqu3mMNnTVcj6scVLJeXLCsKjesEwGddAMBNZk7j2PCUe1KeUXtyCAYGwHXCd3GLmhb1HCn9xvUTQUUEaZwZ",
  "key15": "5EpTYazdsExde9vnBVZKeqsevRK1yJibrXtcpahN1D5yyUL2iRPxseSk9osgTX92xzetFmRSrvmqGeiHFWjvSij9",
  "key16": "25n62wMCntkg3n1ZZhD2bbnJ5MgU9UokRdsPDfTukBjhxkrZUSsqjU4w56vpAdajNigoYufcTAmhikxna5NjwVYP",
  "key17": "TGkFB1SPDdxhjdNqwv6KY7Vs6yB8hhqznZVjnN3Lk7YE7YesWRwsnrKqY1xDNDZ1FPB86SKj1SUpPHdCMr4HxUk",
  "key18": "3R487mne394eUe4EKrqquPKS6Qrvi482xwr1y5MFupxJwnRKB7z2NxoKKce34KSaoHX2rRJgnxwE9uDEeHeqSP7t",
  "key19": "2r9XPUATN6Ni58QbZuYtNxb5FR99YmEqFFHCsRMjv8H9MnsUhjWGiGd2i8zXT1e8vfnrt86fA3WhJ3znGqfZHvWX",
  "key20": "w3KUgFcDJ4mS5hyiRLtkiad3JSaK3tcTSDtgQinqpo2ARJiAj9e5w6LvCnWTqGBNwSHiG4pxApx6cFRYYVVGVYd",
  "key21": "2gzYE7c2EgirrTLHosmfUumCrg45TM6uFV1MNGAY5uCPtjHCrC3PSqFoUKhSaUMa6T2DHKZzWUawEJymnxNG1KJ4",
  "key22": "4Wy182GsRGjMdbmYPd3A31u2WGi2oRvmgimqpdAMHZesbGqroGZcgyo52azJxogEhXPUhDKHP5d8rW1ZtA8AsjmL",
  "key23": "2MMpM863QvKTXeqG4PipLasgZxY4ABj5GyhJ2UyoZevgkWcWH4y3PpYq8s49U5CYM25DHKYx3JobRQhGWUY7dxsc",
  "key24": "Hx2UMCSpDnTjkTzQypY5T816i8iuDq75jXqcaAdkBwNWNEsmaThG3HJVby6ocAyKgUyrjbJJT6BVWTFXTFJvv2d",
  "key25": "5NDQCa4ScfbboZPjYkELLoesN1scy13hidbUL7V4JPYMCAb759Nm8A6aF7SWtcLVuFsJA5BGKp4STmqD5dyF1L4S",
  "key26": "4BLFGKJP26akfQ1Fszy1fbTmf6yB5XwNPFRevpZ3ZTvHVLV4HNjtFZ2P5JbEcvGNbjZvu5g2qrVo7HCgnnsuapcQ",
  "key27": "jmdwExGBNjWdo6deNSgNMcJaFHy4fDvjB5Ntk6A6HDso98N6XjYHCkWpMfHB2T4rA96v7wUmEnaCftRaMBcj4nP",
  "key28": "5JAhtn7YkVXRg7RNUE713HoU9eCwmojgPsPpKMMTWJtp5xHeoVL57PGCdAEfM8bREXQ848zmrMmht9Ek46P7D2A9",
  "key29": "4n4U2j6xpQ1Bk7kZjtdp6jkjQMZARew2hpX7tcSHhJmPbgRUQh3V9SMYNpq2b3Chd9V9SCXg4XDPHnWtyK1PFAdf"
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
