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
    "5weS6FFbxtn3pNWQdfGJy3YuYWV5dbE2DLUejzko6YRGwMU6cc7Z99ZZofrED45n9WZJ7iue2MRTepLi2Z31N9sL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eV6fwjVKS1PkYyEPoETLGFx4BztzmMms5jigYXs5i1XGn766Xj72Ctud2CR33vECmgTHGx2ShGT2MfHaF2f1V8u",
  "key1": "3GSAmorPaKQvfQh9sfTyALB3WWMSvdc7x6aZcfUvoSXveTjneKCdKjUdFJWAGEo6MfD2hBjBjPQgcoXvwEu15F4q",
  "key2": "gF4vmbgRLSayySMmRuNn7TGVwe9TYfehJiFPetz3cJQUHJpDHySytcMUgaZpMeUkYX9hpbGLrRXUeTzYHPyZbJC",
  "key3": "56GtsHWiS7bdNPMvSS8DWLCFQBNhDPVzBfH85hiSjysVdMbkick4SqzW7y1cqxG8tzQwXFGUV3r5SRdUVmkFqvH",
  "key4": "5xomFk9qFcva9EDtKLsqoLQexbifKjr7m8Ps6otcwzMCYRpbvnt47hq5UKNSW4y4qEemsjQeApxoueMT3Fs9NsSb",
  "key5": "2JMgTcc54iJDVXhmGA2ER9Ws9YrfvADUxUY4i9ZqD9whbT1e4rRG3hmbuYUBgLKBC5wNLyFNF16BkRD1GKFX5WTD",
  "key6": "2P4ad1srKKWam2grw4c65Nit42sy6HV2phFYGoNt7TNQo1FfTJ1Hgfst7Rm5SsxrrUi3LhkhfjUgYk33xvL1LU5W",
  "key7": "51WagkQMQM4bXdoUKSZsyuC3up9ccjFsefv8fhEr9c9nrm3EgDBTwqnnET4nzP4EyQBKpXLeu8VBBaF6LsfRFtfx",
  "key8": "2Cm3e63RAZksGQFMEM7ykSzcq72iPtNTzRKpzf4858DqH8gS37MfQLfuiDfF7nXxFJiALQxJuyPEKRN8kmwgsTYX",
  "key9": "64RkTLpSmu9t8oa4yYKpMa8JGdTLiYxpa7RgjTn1PLVvtr2UBzTAbuueYCURBV45TB7UfzZqsd4RyQqcZJD2p3Ed",
  "key10": "3ZW26bSvgNZ3xxeJ6Xpn9QhjPgQFvpgQpWGkaUcnZHriWCA7Y8JDHWuYnQPsazvtaQFmWfFrh5iwaFGNgizcHcY9",
  "key11": "2nHntQ4A64VA67oKYHhcQLCeSwiuggUW5DPfeCSti6mbTN1BPBaGyVc6V1XrTfd7xP6ZhApSR951Bm299kVxYRNA",
  "key12": "4eJf1WDWu14emgsUfWieSQqBnmug3339mKdd9ea8Xm5326hYeef6VgcG2CGca13HS7kiZvmHo1tVoKWtU7fuHUha",
  "key13": "3paHXEfkZFDadQ2mTGwvEgjeZf4mftTtW4oomqPZFSsaDkCkoEfk8z9USkGFap8Zg2RDHUUq7NfyWoqpDMRjrJXP",
  "key14": "52S9GeSBcH2c3sN75aLbEQZh1BBVgWVXnrHLQ67iNLF4dG5iTqwoG9cEpRmD7TbgFCqQDxQGi5As78AG8axd8ZFd",
  "key15": "5ByEFsr6v2pkpYCfi9UoasmHbo7szGTW58wRHZTnm3xtWUN7sZf3r17eaAooaxmAqsEuVu4oyeWUbC1UvN6EAYFP",
  "key16": "2rWEAzGbRN3JMHAcDF6SwKVmdNzHpZ4RkYQUwZKSHjdP8cLanksG7jJnBAsnQx8avMExZgS9tSioP3sKLxDRGkY8",
  "key17": "5znrKHxf5DKNkoTPEBezKAoKehFMd3PKmzGvFBDCpGL7LsKcBmRTryEUfxBpNyE8KWu6kJw4AmuQJVi69ULVzAX3",
  "key18": "5ZQ1HCaD8cGA29X333zQ9upB1gyTEBwEJuJtsXPt4tfJQMaJHYnZwASDKu8dALbkkepAjY7iDhePqWypoZV1pJgi",
  "key19": "3Yj77FebkroptWdsfBPqm7cYkF2rMSJXyKny3DCTjYFjiNRxDyJVRphp2A29CMtCNRrgkBZJ2ev7VqPq9dhwMrwV",
  "key20": "2NzU7rLwRNmR8ZbeWHUYtS5ewX3G1EMDHNwxxvtjLp3VpsU55KVTVDXQRU1iiwhUkX6betxbbSjTXq7aQNWPXYhd",
  "key21": "3ifkBTGTnhLARHLsT7rRFbpT9XDbgND6rWNPhk7EdW7o4661ssPgKFqD8EcWeb1MRTeMEkoUuDmnfBY2ZBR641aK",
  "key22": "3c3cDYxcAeL5Z2qJ68D7QeafuS9sxMPNJazfjSnLhvKfBPzynG3Nc88FRjRugYwpaE84mVCJkD6wrpcNv9L5UDZH",
  "key23": "5Ywaj9bxcqh7DfSF6CVkroDrTTwZQ1uzDJ5t9f4hxZmPx9Vt5kpKYEQTnwwKnE5mXZDXLTgxs5rB8Ag6GzrwBXLk",
  "key24": "2jANK6evuBWq5R3HyPFLNymRzHNqzVaCUsLvZjAdz2P3LmJ2iFtEmFDzEE7C43yRoyy2cBpPDFbLxbuqpWxaoBp2",
  "key25": "usuaD44vNULRM5GdKnfpL5nkMJgdsEThjjjVajSgYwnvHK8adUWs3EfgC3vu6UhwLgNpdGL42DHM3ghxrhXAw98",
  "key26": "2qPfrjQKm4YYnZCVe59E9igNnZ3PELPQUCwJjnbqA6ugkUdfYJNs65TAADff2jGUkRsTb9ysVzjHzZwyX1uvY1Lr",
  "key27": "5Yabnc1c1Cnp6Wieg8nmd8dzeNSUk2SS3jZZDj59erVrKhy8xZyzk8ZnaEgtjkwMWsKeJTLEQdaBLDeRQ17a8A6R",
  "key28": "5wpg9vTcdLFyV1d1VhD9Pbv2ZmmenTpMPRVn6U4vbywhW8cD9qTbtrSXkZTpngqkffTPsoBttxfj9fb48CLAtWWr",
  "key29": "5rARSmBpVaPRYsTnhWTr2adQUMMJnKuSJ5wv9G7t91A9rf5nMzh9jZuNDDHGwUconXtsjWgo9n7ZdXeaq9sRvgT8",
  "key30": "3fRtXUUDLnWwaRYkkvMFo8aPWzy3bLtctQLVg2Aw798hChrc82pdG1Q7BFc5LvbqD9gVoanmCwgQquqcUT6PdjcM",
  "key31": "3yNTotPgaF42yDznEzcMtkdzqKyw9pi9yXuuQGAvR3YBPH6spinUZjQxEe2CmX7fMjUGdV8JUgADrFg8J6hg1zGd",
  "key32": "5PDy123DujqimVomiusxUKwc7oJipJtUb1UYKMEco4uMcFTWLQv43EgDYAa2kuwrvQ9v8pg2Wk55vK7qCEUzr7Rg",
  "key33": "3St31KWnwux924ge1aVak8zHJjrsWP8h67TQHzNLSCBusRVGXMNRBECTWFStjf3nZ7kiwr5K2f2LcEPjMJWcMN2k",
  "key34": "Xk5fqcAiKRUYx4B97cuUhYbP8ZFkpRYeNaCd9tZkKGvQEDDyR6TqK6Ktqdszit7b1kuK9fq7d4My5mNwaeJb9iJ",
  "key35": "F81E9Q6JNwkN6qA6g5HEka9y4aZBgiQgyeBnVyGcxbkovcwBRqLNqmxnxNd7yu54aJ6byHhaQqA6soh1MgNXNmd",
  "key36": "35ZnFPN7H8NghUBQAJ9TPNX68AwJM1JbCKKu3EbTpzFSSed681TrFfNoDESDj5Lbgmg27PqAxTBK8jZrjK4JcooK"
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
