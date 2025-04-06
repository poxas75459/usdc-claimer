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
    "2ENTuvpuPbr7uXp5ZBYs7ecLHyDDAyMC7PFB8J5nuKy9ueBVp9Yv9feUpw8gBifMqXBSvUoGHWCvhhrrG3ZfgkvY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qaxzwS1iKbgNcpEeKp9UKgcyivDTRHHjvZ7ae2FqxrPGazwjbfnC7AJbMWVFNdJaZn94DY4QB12nRsx64xBjE3e",
  "key1": "5asA9Nc6fUC4kZSFcTVgrP6LH91CN3cZ8kWWiWaaTCyoAiHeuGx4B6WDVpEVuAsKMG7MTc21AUeU89zJmrZ495T1",
  "key2": "49p4QMTkeR6pG7o9UR1Y6nMCBAi21FbAPB5hBG5kzrA9Neue7bzmFLJiu9cxJKecWfYMyscBsAKMWHpGM8X2WdaX",
  "key3": "3jHrVxhZoP5pCMFVv28Bf9Atb2ZRAWexffmxJN2f37VbUFvX6UrztTRm9DyJeSBLJV5ypanYrWsrWtvok6mzFsRz",
  "key4": "2ek5qxZQL86K9ktgT7ToKBaf7Q62KZ26LF7ZQuWYV7S1kuvnQBRj8v4JXUJ8sQtG8XxezFQMNtc85s1XXAAUvNaX",
  "key5": "4GHfFZfQ1W82XVvv1LmxYTG6efhSDXs9bnZpBwTyVJVK1o3NSU4wtwhfxBpd1x9B7iSB3WS3eDNhquPrsLyW4ETm",
  "key6": "3Sf27dyv4EvdVioJEe3DgGJpK2UBeBD7pkBYbjftHG6zQ9kkaEfVCgZhdojx63o7r8ZhacUg6JCpgMrQDGdF3rJq",
  "key7": "4Q8ssPvtbUo39CJxNRSiHVZ86xEPNsvTQH1JMB2zEHk9tdk3vPx1Q2mzkWNcazQU3qMSZscLPYVemFVJv7QhJfc",
  "key8": "2U1iRJKqBDqnP1vwN58uwC3YMTwSnXYP3KEaEAoXFRceVKZnkgHiMXWcNGMK1NibG2RnNFE5V6RqeMNLWEZ831KX",
  "key9": "5fcFPYwTvcWGafWqdwH6xcwqNb7gRJdcd8V5JrjXY9MwbFXmAMbNjtGfefLF28JBxH9pPmC7VN9Nmm47LiPkKxxV",
  "key10": "3F9zVHjPZoGSB1n1n6MdhxbMsTv2pCxkxjv5YpgJkNwv2kN528AFifc9SkbJ4tbid48J6roxsioLat2Xc2rYkwLM",
  "key11": "5HkzcqaDgUToaG2TP7Hyk8H8ocEYn8EG2nK8CdjsE2dBxqsyywaruDZdS8pSeJbDK1vXxLhPDNWcq7q8fgRDJsjT",
  "key12": "2KzLJ5fnYPgtFPFPjM2N52dvD7x1SXVSVpaV2dwjHii46K2Lxv7cAMi4116g9kaZk5HpfSoCX4EwZ5s5j1HAEpAp",
  "key13": "2qTZhdWoo9EuEGq8hC55EoUqaRF6CGG5hDGjTFCgzRrZPf5h7LWSUZkisGQwUYGZymCPSB78wd93hgejRsXRv5rP",
  "key14": "5t8ey4a68Rc4zSFovGdRZR1Qt4hitH4PaBKoYbpX42K9S3adSg3hpshMdmE6F96qVVJrMou43xjyfhZCZGKhedmF",
  "key15": "49dCFcF5LgoZ3Tg7gp6keMTqb7dAkcoxnUNTCpsEWgwcKqKB95uEtutE4Vgp3cwU2i8DYQ9KsXR5s2gdfDxSwbsf",
  "key16": "5LgxipqGkDoMbtDStJpZ3iKCMeqJtVduWKm2oYKTAbAVw7T7EvT26jR5wx46au77iBeAVgg6xsxYMiqUzyjfBJX6",
  "key17": "5vy9USsDSWRWExK5wYjbXqmjqz6oobkrNdBdDUCwKuqmU58ZPJsS5Vzxg47WVh5h4FNjyrgdqHxFXzhaRuffZrEq",
  "key18": "5jUFP3MzMGyN1Ffnwb7jqNd3GUtZcMUvVBSekF9rtoht1WEW9UfgLEpxB5FBvxLTkjBuBVDaRiHnVpVojLoUN6Ku",
  "key19": "EbMqPcWeMCJRTvXjvwG4Qqp7bRCs9ePmZU4Z2A3mZ4jXcHEBSAcfUqPiYfrLmiZVRrXKwm4dtWogqiTEynKwHXT",
  "key20": "62EdzQLqFxwkBd58CASp8MQSjpbXcnoyk9NgWDzbiHcMioqkAnzTiMFisCro9HVdMgegrKTinUxuR4mZZD7hPJCN",
  "key21": "4tepNpbpdFYV247rDWt6qozvekvYj43f6SrzbwvokLtZUgWABCmfzbe1CNct5nSF9XWCiETTtmLrNA9e5NXvd5Sg",
  "key22": "4zVt3hTnZsTya4xutuwqSKJQQSfz6CDPa2adewoY66cXSM3pMMxzda1RZJkX1A94FaSxhAQNqVPEoDVZpL8vtc1u",
  "key23": "5EEBWR4j5wq5LQuVyGUKFjKRsBepqZWysfTEGm6D3L1S7Z3xi5MBvBxTLrdcfJiugabbHeUXpR5EaABKX3YKqMkz",
  "key24": "auFQs3HrYzbGXExLHPLV4XdUMbcdziTngR6ZwUWrJMRvHwN8AjuH7CfDGuSBDXBA5WZv6KovaiSA2s147QqFLbf",
  "key25": "3AZLupyL8BDoF7w1zaEZ3DjsmHvpMULE2kbB1zPLyAUx6wyAdZNCgj2YUdzQimYHk3cv4AaikNohqQaU1TqMui9i",
  "key26": "5eAL8PVm1gJRnsXEApKarJeNjA56MKhvLXewyTrmnAKJDQKXoWhrAL1DjzKmNFUaNFkyFPvZwJ8pcSRBQAc29gGn",
  "key27": "AFsFvsHvB9fJjWxgs7cZ9hGdJmF8X4MPdW5cLjccRN98zF4FTQ6NNWyfJwmevXYdJ8NpLZu6fkdgXgDjQxuA3yT",
  "key28": "2bX1SXQ82fz3zneQTiNrepnVwWHsfwXxXEhoy4Mm4bVoN7YiNLGTN25bSk3EVCRMHu9suZg4sokQPYH2F9dUwsAy",
  "key29": "57spp4CQDVCBn8PMWjmnbXcEoPwB8bnvtb7XnNDMpDht7YD5C4bYbzFi4TvdGA981GGHTuoc7UoHtPrQ9JCFqNjn",
  "key30": "47yyiXe48GBFsF6Aid2UPs1Qe2Wo4VHE9o17xQ6eqqf8mEA9fBHLZBikj6K4SB3JnjYtm5VakmjJ3h6SLpya6xdm",
  "key31": "3twPme9YdAMmNE2jGSxuyVhUjagkaytaxzBL79cVrCHU27xceGENzaYmmLEJPm93gxrZoRk6YdybuYqhXENCxAWE",
  "key32": "67ZvoDS5KNJdkT5gbEJbaHnaDRSpDjPkne1bf2rRjF1Sj7EwKhA4hpV154g7EPkyfR7LsdqamfKpZYGJChFVcRiw",
  "key33": "3VyECDzZmHWfJUzKrxazzFCPCFU2xqFfph5TbqKQEu5gjjLXVZApNRAybFbB37b5zgpFKueArbm8FudwyLq3JEfq",
  "key34": "5EcwVej5DgChzP3K2hsvuiFKAGEVjD52TxUw816A8LoNUphmLaA6ZBrsiEkqRjX91wqFkwWQYJzR4VBFNZRE47x2"
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
