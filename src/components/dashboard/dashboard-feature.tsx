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
    "331TcVqBek1BiXUL9qQpRzv3rBSQ36XvxnQgn1Tkfs3mtq4LmWysfJx9uwHFZUSZbrzVwNS39CmnmAkdBGLizR7r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Es81Tijxqvpq3rAgjaELeTmX8qT7J4paMPLYjscw4Yj2TNS3UZ5NRMaabBuQJtAVJ7n6eDuKjVcmphoM1KFNRRq",
  "key1": "RYteQVjUQUMmKnV9G38LbQvnqaEj6n2b61p8KmgVd6GoRjhPxc9TEXqQKAQnGpMiNyPdpiacLT2VPXVf9nNmW7D",
  "key2": "5a2DDCqFnhueZXc9JpX5xBdNPcwwQHkbJFCkd7Q2CBjQueNs6DYaZvXbfzMwpjqTpg6TBLKZt3wt1juixGweefLv",
  "key3": "4VCZBkBCUTyASPcvJ98Gojz76bG1AZbQoPYsvKNpxYhGZqKXAX3nuZECQRLxXmDYc49NGM62afSy8z7C56fVJfkZ",
  "key4": "4ovoBqE3R2P1EJW7nCLdNEKeWB66ByV25qvevgktxitoxAjwPzxsqWS97qMd7312WwU3HLCtNCatwGGMifrjkKn5",
  "key5": "4eBMndJWLDdyRvVfvoP4QjT6pPurDqQcAi1ZrLiXbLGPGJmV6Cp6DG9N1B7S9oAhZ1pZLsB9h3wuExqb6HuqLvnu",
  "key6": "eQAPTcitzgAnC8TNr8Sa6MDz9GapJSp1PDDtmRSGiy4UmRFbeSTiaExtVJW7XP6D1EF2D2Ug6G7388nj8rdbpze",
  "key7": "5iJYokcFR7D9aqCsa2fesyN5SqCtj9iQEKz9heNqyQ55fmqeg1fTYdaHbbrg4cpB2J1yNFNVg23vDxvgXQPzAby2",
  "key8": "S6jW5iaK5RfCDomSzNyYP1WG5RvFnPY3xZQBeSDf6YbKZteER3FNSXoeFH6FsZa3aHd1AQSF4M1ZAojHvBg19e9",
  "key9": "3i5be8Q4dyY7bZqFja1WJEyrD8yRe3uUDp4mQVyMfcCHmYUuLshnWW2Hof78VinG3daPyKazSEisVfzmG7hCnrb1",
  "key10": "3UGF36TEYoMKRQTxHHEEzUhRjWt2NErQpBwb6Fo958gv5UCy3akhsVcFheqbynJVc4GzmzbfCLfaJARC9z4Udn7e",
  "key11": "3UfCvtPT2vq8tggTHSz79DWzxz6w5maJFgEqEyWbUaAYDK96DkmDF8214qL7sbMMFAEkimbbz1ccaXSGboWzZei6",
  "key12": "3cXdNzndsQHKdPwpLTrT4VbgxaS9jyKfJ6wKSXMDrNusFy76HWmZBn5cq4M1Ho2gNRRkw4AHnz7ct6ssZJ1NFuuy",
  "key13": "4Ab2ysbr9WVeWyKb4RLLTnxx4eWNyQtE9v2k11HFyRWp6vXJn3aF6aA1wTpfEmJPuz5dhSqgyfNJXLjSCsTpV6J3",
  "key14": "2pnkNKsZvPa2VK4kK76dWdi13ydoHdByScRnJkYHooi9jivL2Qc2mbnSxnYecr3yKxe4FoJmy9RyNADdd6LHAysa",
  "key15": "56hV3WgsQtMG9BktdYSX7d4VUFfcVUR7kr5M8U9yukJn1E863Gvf65HJkE4BhX2dzRw4iNrsV4QAec46mM1eKHcT",
  "key16": "5MQ9jpiifzyGytDpjxgu7ZgG55HAWz8XcGvTLAzV5feCuvLDhMRSbCGxop1EfcHNvjKaXuFcgRMV1XFR9EHeT9C9",
  "key17": "3E6xxWCPy1epyDTox4zeageyKdmeab5wX5UyK9gGARHhzLszE2cC2NG6BUTCkQ84iqoEtn5whrgzYxv4Ykxszu4W",
  "key18": "5PB66ACDtq3aYS4puj9n3EsqLPbwkhf3eWgVhKEMe4HF9NRrq41vVHnXKQfDeHvyMyHA28GtgxJmLKLxFfZkGFf8",
  "key19": "2CjHPEtrpt7gKtJUi7wWTUcEeTa7BnemCDpPxCJwqxPo1rafZbxVK5GssjDsFdwcyvnjrzDpGg9xwowaBTHbPGH5",
  "key20": "2GA8MmsEv9TdyLYZoxXwc2gbuBGgynxdbHG4eE44bkcB77XN7QowqA2LKNvfUzVUixuz4XhMjzQLhUyGx3UqpTQA",
  "key21": "2UPbzvS8At77fNnBEt73xuETTTuCk2F3bhKfh526WgsrN4aTjHSEYomEyrkz6B6S2Je6udDBTimEu8fwuj3d23gi",
  "key22": "5Lf3fwcCe8Sjdo5xwfiJ8vkJKMwLC2yWcoTYmqWC4uLoucRkaUeP5hYAknGg1phmQifrYWtTgyacbYiKj4N22aLt",
  "key23": "3NGwZ6kGwFvJRm6EogQfVc5V1SC8VUfvSPvKTQeNRQnQgcTQBnMG8Dn3EtpEfcqXqbUQDPnTwbNHCeSNJkVr1EJm",
  "key24": "3Lh94TquzTwmjSzc6f1Dosu8U9W4pPuv2BYEBRnp8CA6zXaoiv2BfiYp7wv7WU4YL9DpeA2CkoxA4fWvZtuWSLgD",
  "key25": "2uATEGh2upncamFcmP1g2DgQTs5FDMHqaec17GsUMnJ4Hb3AYedYgfVx6gCrSu8mkiE7HH7NA6kqbwnLgX4bBZ6E",
  "key26": "2M3JavsB48cDtLFUXQmojQJQ6yC2Vbh6BKsmB4y779cj72r4ywWJWeF4RUWhcossxNMKzUT2FWcoK42URvvHy6yv",
  "key27": "oknWa6huPCXxLvmqk2uPXk61yE7XJZHMbM83QTibXq1J7jDHti9qWrGzwTw4vdLthgbNCP5Asf8fSeJdVkCQtCX",
  "key28": "2o2M4PmJf5G5LFgjmfJ2snQZTxXcktN6jMy3WS3VV4p9cGQjt6MXEKNjnr69FWFy3KBymmATqquE89Jzgssp4FUn",
  "key29": "2WPkCgXe6GpyzmPqFSqRV2RiEpyYVQcGjAZsjPbgiJN54UsmmWuUkctavyeohtju7vASGNxTBi7vFSS1pNAaam3T",
  "key30": "4Z2tc3atm5VxdqCpxVh9zrsbbsRsVKgJsqvdC8PLWiPjXwbb42mEtasAnJ1Z4SMVmK1msu5VsQiBAUUUWhTeS5vQ",
  "key31": "5T28kEZhAN5YkGtPd9JZhA4XKa7BNZahqza6TegmvKLTdNLj5pcuS5v6BeaZUPNMwpzy52jqKoeuQFxSLVPAQudF",
  "key32": "5SMsrVk1rbkCFxUJdreji64VzUfwAxu25NktHmoiLe45pTtgn5Mtt8Pj3WechVjfY4vqYvwbJ9yBgYRqrKi2B9GK",
  "key33": "5RZ4eb99W1vd9ezTbdi58BmfnVSChtKXmpZFf5T6ERCr93mm7MwTAcKYCDKZtwYHgr9HcqqVfQ4LQA895CfikztQ",
  "key34": "d9RfeoU4ARfP5LZi2yJwXJ36Jkhk5yzgV8Qgw1NFoqcUZMNABu8TYP3XfgLGxpcN5qNQLWRfHduQgXBWZ4wWM6P",
  "key35": "2w4T61tjwFFnoQgEztXBEhmtJgXfaiURXmLfX5uPUdoVv73ApWYgdkVAXc3YT7yJo7YWcVSAEMEdzRciNK8kJiFk",
  "key36": "GypPZ1643ygquGBQF5NHeyrdHUTAy4Y6vSxvpBazcc8SDdhtGXCGQ84AsDVM67TS246PNAMmx3xK4T2DC1QuNbL",
  "key37": "4sMpiBPZwdEjbukbvgYFqUhVrW8uzMPAtTGmXjw8c2X7dbZFdLSLx8hjgJFT1s8bw3bYCVL84zmRwJvG2sAN7ReF",
  "key38": "67pvPG3uWiWLQGpHcs2kM1sgURrivdJMXZ3yZdnLMxHxNgZnNuQ9oEvYYAeGwwZcVwLQECGFgpGBzaiEeX5jGK9P",
  "key39": "4vYgiCN3e9mWCM5y4Fdt43HkuJCKy4UHhJBHr9p4gzCbfszKhXRzXPBHMCwrYHxFBgN3PboMh69exTwqWVrdHesa",
  "key40": "2dBvhAvjTWo71yfCeir3CuscYTCu4zmVxkSe1ipXkHoeZoaSnUhPpak7DiKv3Q6U5A8P4m95Y1yWpJosreHothra",
  "key41": "5SnjpuY4y6mMDsNnEifM8471cukAoGPX3pdd42sCiARGCFh3uxqYk2TRHy7HQffQzRTfFU1ov5WFgfgrjy7yWFZd",
  "key42": "2g5C51W1jNgj8dRy4YcWHsRS8gZy9v7FqS5JkHKR5cYWMB5aB4UZLNvpRH3UmRqWcWXy4LPmf735etbwdZgh4m46",
  "key43": "4Nxn7ZiTQQXu2nV7ZcgSaUB6NTGG1zjskSsvqWFCKruPccH7DaR2fcTtU9SzcpfBMUPsqYEgtsuYVdCSVCKvedQm",
  "key44": "2JRK1og8fLoUyRGiMnSZLn4ocdfZvNQWd1iHuSYwdpg1Ydx7TM3s1PMgZ7r2JzQZ6KcMMu7MsqZ1TFvgifAoNKtu",
  "key45": "2DMyeLGHb2VkJXZJAa4gRjNHdCbnKyXveXTgYEy5ATaF7SQxdoXvNSRABGXBM3VEM7m2q424j7waaJoULoDMH8yN"
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
