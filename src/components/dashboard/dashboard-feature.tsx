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
    "4E4ZqCs83BcYggb8g9FaoY4K57k8PWWdWKPgEyKFoqpnBSCPDexbWxHKAWnGa3PgHLSpuc3yBXA2SrtxeLynoE9d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ddzj6g3Xv9L5dFYbcG5VGVozXcjruzccUSxMBHLwbrzYJZvr84Fcx3QQhWhqE4LRXbBR1wxLs3h9e5xb74f8PGb",
  "key1": "279ynyqRLsgP6CNdimNHXnWtpyyvWv5WN6MZCP6GT1MdZs6YF8N73EkjjxPARWjZ7HaxN22sBBWbDSHMr3k3KWUa",
  "key2": "32KbK8wpT4Si4nMknLpQ5AJJbYzGACPTbroHM8VVL6EKiyzca29PiFMoenDshrWBd7eHdDjHpzNLcT38qwYSfDG2",
  "key3": "49m1NnqUNcYSx7Pq7vWyAdyqdgfg5tt1yep9iWggLdoDAHXgky6yEFu7TimZh3X8ZX2a4hJ69oZ2NbEVJsgpc4MH",
  "key4": "38MHKbJ4GWAYjun4kzP4J64inPC62QdE5enG8VXGq6Pcdyimnq2CZV4L5g6rEn547MuPAWQKeCiPreMhqkvmZUbp",
  "key5": "62b2AeRVez8vfTd2ZXWGxq9wu6MXKJBJkGyPPQUQZcQNJWL9jSCCSP5Y4wZHzdvVi1k96vzUvVV3bbZKKXeMq54R",
  "key6": "uUwhfKLJoFnyE2oyN3br8CuaLduXPmUcKKzaBvENdDXz8rRuSsqQtB3KckuiQfRfs1UQ5qscyzFL7S2CFkWDoEQ",
  "key7": "2N55NR8eM9cqpuBsfv4RqFBRaCVappR3sC4gaTbf4xordFy9eWQNE13pAFgmDPuv7mjohW8YkDSEyGjqWWHKF32F",
  "key8": "5kUhYD7auxm3QfpJ5ooDSWLsXgbrmvE4D4EnuWDGNmLmbhgo96CkexmTVJ9DypDfYdg6v6NPHSuP4rgVhoJHWmVU",
  "key9": "4XGyPe1z5Lkjy2BwmMywqBkvuy7f7CvuoafS53TuE8UM4Ffo1rNmzTxF9gC3hy3JSua6y4DhRVQBpmWMiyk8UsCX",
  "key10": "YFqjoDHKACgc8wTvbnfjLbZJSKV5dtqJPogookGFLg7sBWEd6AhaJdBUqk9K43vVaXDQSAVzWJeqQ7K4gfZP7ja",
  "key11": "59ZaoVqZLS2Cx9dJdLLDkKfaVWPMMNK5JKiviRkZZbef3sLS2dyUvX7kmB5vwhm4xL9WZdR4VjLaMqbUjPpYqBLC",
  "key12": "3WGSmziRYh1Gi4E6HMDd7fwYEdWDLZ2eiJHf4WDYbF8yTYN9w7zHk8PerGtRFhnHR4FKweTquNsLZmFKKkbt96BW",
  "key13": "26nLfMvtvq2TUEPxqjxou64G9NjE1wNtdaVZPRX79qAeXdHm2hGym4EudrSy7eFJs6yxgKciXWvxmcMbPNh9aWid",
  "key14": "5Ta1j1mq2HFFfLt7VHL2tmKJaodJTBLs3BaErs7mBX4ZiN78Gc5jKLLBmEYrYVUWgWK7FAnDUCitpwwiwX8gE24u",
  "key15": "2cm9foLv3ag2fd78YSPg4SxS2wpUcgTRGmGGUvCcPbod2ni1VxXBXYjjrcL2iX4ckhD1EFygpDz3hPiKfB3T5oYA",
  "key16": "3e68K6uyLrmu4LVuUwMQdX9TMFMtzxtar8ZDBQSBN2gL4EQ9UMxQX67cZC3qksDZQjWJKeNi1BEWncidBiERVH1B",
  "key17": "5Hdi91nDjbgD3wFTanGEWf3Xu58NtsdNYpvEnaUqJpWqEHJcEP7LdZgLEAZACgDsMKav84wdJPpCrP8o2nqhEoYM",
  "key18": "2E5bqKeMTzCajYMJyiqQE3QDZ995tfj2UdHhtLRokvM9BM7HdYxH47CMngxfG2UBeKPPEED1twhNKr4S45KmkgdB",
  "key19": "ouytVMA19tpKZh52FjvCFoohu11R2CSTmUz2SQ1meb795jGRrEbSPiranEcXo9ouMQkhgA2mYSfh4MPgELYMz2T",
  "key20": "5m1cjmK9hqeoh6XMYUpvhn6cxNs3B7WxUmGhwjqLraJX93HZrZFmDaJcEZCo2jXdEEVwmCzTPzNKzqX8ecPbhUHw",
  "key21": "2jS6t9DdrydutkYpsDcRBRizEei8LrkqnuhC2UcdFQK1yf2kPLSXuiuJUpMK7cTuBd1h77CcJq2ezDKvaxxDt1fF",
  "key22": "23BG9aF5RaY6svY29bvNLk6XYgnhLCW8c5FXAQrGRPtjuoeTaV3SNc53bPWurXWZTfY4wkWvNvmSNod8hyKWT4zg",
  "key23": "2r575U2QyushfXUTQjAECVdoEg2qwzdtzHyJ2MKxrLxQQYBGencT8sjoXXXcugTP8QoueqswmBJGSBXQaDWzsakc",
  "key24": "3uEdCDHwmXKj733UJ2wbtoT6suTfDartMUqxZjGvjgoTXcopb4J1v17o1JNiuTij9m3hQHYMx8APm6G3F1A2hXpv",
  "key25": "ZXfEAJdXUCGoE8qrX1jMXtpdKCvTrQRwFkhRdaLVAkXAbSJobMUwaovANNrp5BaYrrLzBQAGmemHDSuJwzU6zZE",
  "key26": "3QLuxmTEAPumCqtwgfJTDqUk3w1f7mgBVo9QDRWz4fjdgPC4tMLFCNvpg9SsxGRfUQ9GQGESe5c6ECD8Lm2u1AfF",
  "key27": "ySLHVyCHb99dEjpAcSoc4mdn7YoC78NzKH1hFoJHYMkpXoB195iBZVdmDZeELoLu413Fwo7WFiZPG48AFK27RWa",
  "key28": "4LTXqFmxF4JHuspXeLvf5b3bsfrbNdGrb2esKk5APXSicEkz6p1buDxhb4t7YUML2Uy2va74FsxcPkrbVdCkcChw",
  "key29": "3FWDKrSnXixTKcMppjHpY28uACHRY85LmoNTwfunouEPFF3XGSfN3nVntGAJ7hyD8px2Eyp6D2tJXEx4wkPSEkcY",
  "key30": "2HAqGtHdiYbKvSmjhi9dgw3kPUj1wzEn45CftfVhkne1RN7TYZXs7yYEwzEAnWrHMgqpKRsf5a78JDSb7JGbPALT",
  "key31": "4vZMRUfM3K9wmQG5gouBxydpX6vzqVJ2wVBF4GPDNXNbkemCYmFa3FVgbvYTW3ar1zNVEcaTAPSYiatuGF4preHY",
  "key32": "5gXfwY4Jy9oBLHykvWWNcbu72FJDDVkAJvR7i3EJjmZzZrHji7MXer8yMcTwjPxNXmUgEXzPb5UMMKqcJJ9TpfcC"
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
