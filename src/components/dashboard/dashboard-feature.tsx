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
    "2yebPuRikuPqhuM6KvXZbVkTi3dFAmwLzgFgRBAw52j2etFfSRsZMeoR7c32yKAcEcp55NqtPpyZEufMTQHJGjsn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4McJDCAFns1fsKTaY3CnsM6ax7tWdxUsZ1gHxu929DSGq84j1Cs5cF7yFQbybBNbKR3de73JAgeykV2qXvhsxBs2",
  "key1": "3R1SYPN9iJoVtpypyD68s2qSuYkhNeQAKWmecXHSmv8E5Jj9nsQbhTcrjQUjYr1Leeou9xUTtj642PUXEWvYn8UH",
  "key2": "4nLS8Eh7B5GkJYvthVsjMBDzJEf7c7eLFVssrFWDq4Brty3dEMaQy4AXEBQjzd2z6qGNNXVeMRrEkCeLjuQRBKeD",
  "key3": "2o2yKKfX9sveUeiRB5WY5Q9jbaBnPdbsaFXaiYqtDM4PZUXSNuoRzdo97LwkuBpyE5mQqf4VeFHomRpBLUCVTQin",
  "key4": "5MgdArhgT6TXbwHQ72xvBrC7u4qVGpj7oVeSKm7zFrWiu7q6gqJk4RKaWFPVyXta1A9QusqiJBbcRvDThEkwQvwQ",
  "key5": "42fojVMbh7kzAWW1jrv7HzsxxP8ouuahvSMj1V3fZNCu9ay3RF7NQY1qZHpcx6haqzgGyyYVU1yd2R753u7edHc",
  "key6": "4ut9TqEKAeT3LCvMqV8AJDkM7QtzUb9rkLH4VV1zBULKZC4eAFszkPVrFmtZJaNhbS4T6fJEQRioe6F2gqtovvRi",
  "key7": "363TLwrLk4NQCN1fEfy6GpvsfwiTofUchKRzbjRTbpW3KpoM75tdXouZL1ZLMUrZqgxuUR876WxQT5ieU6LfojB6",
  "key8": "2CFMaatpZPuJGej2MWTjeGtzrxideFDycUKijA2ivXQENxC8BLYT4tjG8gK7FkqHjg5vph5e1wivpfPbHojx66z6",
  "key9": "kChiwKWHMZCvPjnAvkjzyEPqCY3tJgJ9VkyvyHSef7nxxDtWUTcUS2fwLCTdN3VsiwdUosPW9BL9XF8UBo8UZiY",
  "key10": "2cwiVCjPbBgXiqdeLRqE3mhjRqv1T5zGxRbjL2xWeoQmPWQVbeopEnNPPModFt3YffsRPmiLvtR2maDgtnAUgqV8",
  "key11": "32CDhRYs7RKz6hyK8ZKhBnKVafFDcmwq5pjb4A2FaVsVt8528H478Xm6YJtCU8aGH6tXUV9G42CZRrahH7Kmq9FN",
  "key12": "XYLZPJbJvckjMZCbCi2yp9gWKPRmhSSszwacpqia3ZFUjC3UVX3B68qPWDYpyHcgybvM6gZfm3ETz8Y9AHjzgwi",
  "key13": "37VredpbEZxRz6PFiDPepszxNmPD3rDrWmvgq6hp3xGtRWbPvvCJtdhpbVkQ9CN2xvWVFewnwJzYMvrFoyJJmUba",
  "key14": "oEGoifyzZeC9qEi7bu7gXnCmpLwhYX8JQdtSGmXCXzDUDegC8Hbq8Df6mRpFvSHYTbHwpu6sqANFfFmHJkxbB7k",
  "key15": "3yWKniNSVF9HHRBqtX7ubZDCXpHHG86RTDh7qA634Tod8mnX41bejGqkCM6shUppkzsPoDryTpqChbUfZCgmskwP",
  "key16": "29KAnu71cH5DLgPoL2ZnHQ7NrMkpcJf2DaX3Te3E8bt1PZ48rQ2ibYwwpV53G9MwrnCmAKSSunWaJn7DUVZJ5HbV",
  "key17": "2hm6fMFjhyprazdziqNau2YZ1BPbATnCxuV7M5FoPDeXeGM9mfhExthPRmMAVByhRW2c2hhgJS6iWfDtjAoPqDGC",
  "key18": "69FyGFRyr9Uf2N7bXY9sYJuhje1Ac2JeTnf2QfUvus3vo4LWtRfQJnTUDSTFZ69ocm1cwV6dFQ2phuuJSpZVL6A",
  "key19": "4eD9Y9zsyaHGbASoJbFxMrz13dCCAp3YV4KnwbMoNzFjivYCZ23TzJKrSmTDKd1MwPaFCUpjdTUEhGFb8MTMV6wX",
  "key20": "ZCkEBWBx24FLFBBPznxZtCnoMNGx2aTKbZPzb63Vo9wg2Fxb1ckNqxQY9CbP2UBVukREssvKoaCjyUb6njV2D9G",
  "key21": "4NGXtKenWcjkKvSRuEX899eeXKh2uDbdyXFsg1H8BcdfdMKiEwhZW5PC6iuoeyf6XHrGhxBmmCczBv9s3JgNxq3",
  "key22": "4aTmBT3YzaDS2oYZ28giX8p9Dq39mLqn8Yzwm4wn6ZdPLUB6EBmipU4BwpN6xqE2W6T83whnUyn3XY3iSaJnHMFq",
  "key23": "2dWrrZG1QfThCxxdZoJqT2Zmz6s3FS2fQJ6WDaBPDdoYq5yFymgTxrV6ppvyV4AKtqeBxtu4awiGi6ZPgzEzv24C",
  "key24": "qbHs78nzgXLMgmFW8AsMPZhbhb6tnaBX7RWArgDLWf5NZCXvxRPTUzAz9B4DuRtrEa3BkPsusVqDijVnMgDF7ms",
  "key25": "4iPwFeAFLmXZen7M3cPuaoiBKJzezCi5AEMaxV8TrwtsKKdzgFHk3ihZrWWd3b8S7ZqspV5YnygH2Ks3ciBS1SL5",
  "key26": "3L5Xqf9ufmDAkLgqFjVwCYJYYCNuBreo7q1cQ1HbHevpQDy5ACzS7Zho6BH1f4MPrNPPiwCPfXgcJq3rdde4n52",
  "key27": "W13zdArG4ukDrERRGEzQN9BVozqGQgoVg8RojAK2HSmGW8kEN23CCzWUaPmemvfaysH2qt5BGQUaozp2B6pcexN",
  "key28": "3mgGDJRuD9mHr3x6CbA7r5S76SXhFaeAAeAYkpFaKbpDKqdEXHwN95X8d4MtydbiWXL1Vnv2MmJsmQi2RcJVKH9z",
  "key29": "4duyj2gGh1cu4eah8V5YC9zN2tSGYrrUwH6S78UWmXtCFr48GRfuJRMnQ3Zn2BokYhSb7DnEbRmPWdMcWXkNEVpb",
  "key30": "F3qjPPp38cpTLmBmQGRHJwGdeSFviuBDcXEc1hDKxk3zsZ8G2cqePrpjYpL5MdVwUhwyJps8bomPmtEpgY3Whcx",
  "key31": "59Hq3wTu61EYBXtQ2ueNyjvMDuNErGb47kUEHZGmeZHMAX12XXEEsA1he66uqE5vyXRbb4EGi8GNy8TPj1eQJEFh"
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
