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
    "5QcKko4jxfHLUsvbU1LzBiAWKGMFgBC6Ex2BD8pFeHvpwTJiiVLn2QaMQHvCS171WMQ1E5f6cYzrhiRNUPaxyUmQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VSqC2iAvGoZHKm9W6dNcrWYLWzub2qfAHMzkbqXcBBH7JKXkxE7o3pNo5KGcvLy6GLentyBRMQeaoRiR3pQn72G",
  "key1": "3FzZbfktDm2ncm9WGQsBTGzrTQ8KuVTFJJgVhMFrb4rg476dGApb1Cxv6nDbcqZWweNBf4MARNKZLKpC8MC4az6c",
  "key2": "sbs9PNQX5SqhRLEDCnr5LTCdPKHsyfEFA4VtHHAdQSoqT1yHptrusQBfvFUwNWckmJjgjtzRJ1dZQS7ZcUBKsK3",
  "key3": "5JiB5ZLEdAZGFhe9W7QQjKvLy2bC3UMf3iGmyo9HU4TpooW5GFcTuLRQaSNQzz9KoGPWnu19BGSmeTE2yynLZbJw",
  "key4": "5rPT3erWygJoEeEiwufiVPeJH56FhueQtDRuM955vtXhTvXvUhBC6LNHTewNVysTwQ4s4JANSWx1d6yfLTANRWMy",
  "key5": "37kgx9HVwRurP5KrcyYPqu2tFNhhXE2MKyrQVEYZQJZQ1ywQ9tWdNSZD2dkutG1zLzqXeLt3oCXH5nLh8GesK1hG",
  "key6": "3u3Qbfqyz7xhzVDW2wVyXtfhd59zP86Rqnsqd99UD9LMBuSBCJDY82ELdCyMtU1SYpdFcmcZap1hd7XoVHvMe9go",
  "key7": "5TT35s7v7yoxJb2dXze5hfNQZaHkDX4iTUPcoxMkhBWBKJDDL9vHqWVXf93XnfTdSSzNLJzWPy9njVG3rX3NYYK1",
  "key8": "Pq9XzEuBbva91HgvJkCdoScqFp4yejRsx7hrw9U6CQ64ZR1h7ZRoJqgVcikB3MsXA1NYzcSuP4PnqFT9qHTjU8E",
  "key9": "2QpgunJEx745oTzi3LFrHnzhrpLvqR4pCppvME2Dj9R6RnfV7tWHv6cJjzYXBsZ5FKrwi5nnYzafogVs8mC6HUXP",
  "key10": "2hhmCQb1CRHyTPKWBN8pTpkoLhP3h4wwJQzE2iEi7LpZbYFpTCgzZJecnfHEhYw5RHLZWi4Fwu98sUGNM4T5pHjx",
  "key11": "2fRonGs7TZxogvc2jEMxpHh5r8bafzFEyLzPgQYqzchu1guLkBNqdoHm6vJBH5aq8knag8jsDvFz8ctUu3GCTfcJ",
  "key12": "3MsF9AK1smF5TqmiYgwXji12teRcvVCfPCzmDFSw2oMiYGRmtmBTKzv133XwWmG5PGP47M3vwxjUoJUfX1QP2DzC",
  "key13": "4RNUbCcNrPf3BeaTjBYd84qjeCQSRnrqTVs6J7i55hDczuJpR3iMtCugcbbazgYfq6boNhLif5RkR8DfBf5w3HwH",
  "key14": "2cJHHcsWPcRcmN6mKp7SQTNdqPjqtY84FXJ6aHbsJ8QmhM7uJ41FkapE5un7CgczKdwyT5nEu8bNrYt1SQzmgU73",
  "key15": "21KxWTfPr5hJXgaU6KPZMpQNGzaAmnRNFgLEh5i9dwCcWhnAqPPZ7QhhF5GJRVaDKaeX5q1UTdUuLrjbYzVqYZX5",
  "key16": "Unwj5X3vqPvGKdUAKruCDsDPUSX7mbyo95PsjAG1YCHXvaEb1vuu9aEe1u2AEJx79z4YaMU9HtDNBTrkczX1qMx",
  "key17": "PJqUzaop9S5s5ZT5NorqhUyxob9AvHJ2F3knvcaKBGSe3qTC6Grfy484SwA1B716EiEQAe26czmyVkUmN7uuFAT",
  "key18": "2UFiMF9EPk55y5WCMDiwLJuVcrmHoN31kTgPstfP7Ubeoe7KpLwpDeXgCWqf2E1QW26Wqxz4YgoFJnLF5uQ9i7bn",
  "key19": "2EV6HkfsEYp9piR1EQCQjELW4r7aLQXe4dhf4r3GmtkxXM7xvBhbr4jW3NsJ6WnrGDVgbg2PaUxwwF8rExmL3QAq",
  "key20": "5UYv86GGnQtCL7BCywfZm1Gk3sN3Z66wCqMGfcKizWQS52ahn7neQbavgDCTyMYLB3YT5R3EMN4tamJ8JoDpKqub",
  "key21": "5beoqaL7sGibQrNmXNagW1ghcjkeqX19XHiDkiPssxWDsA1ogF9qeHbf24PzJp5NeYfUpVx4qSbnDpjcePDZiRvn",
  "key22": "58xQapTKdQTdi3bweeUnZ8b5dkTq5whYyuKrwbvQ7a7pVPsGz1CUsZveBgXePfAvNMc7ptR83LdHQvdLHjW6tr7m",
  "key23": "483kL9Jer6Fm6XYusWHsYrdoVGNRZBRD3RZHaoscfb7dhFRtN1dW7okQGsSkRJn9E2gHi8wAXz5iNuLq2HhvE974",
  "key24": "3zVYsDJHiy3Xs8gE2bjz618iQrLNHsTsZeicnz6rL156eLaZMeYLeqmXB2hBpaA9Jk8sL7a42vSBZZZ4iwtyjru2",
  "key25": "2ewK2MAVBJhufnbfwwh9swSBBXkSuHtaRWqJJ8iWRyghc8X4BEdQZLFgfMnKkngwZyUFthTNPTRyzJktnwKtKg7n",
  "key26": "32ahhw99p4qmHguwuwFK3EK1uvXRAmtvVrJH4YHECxij1SwpTY2XSiShmcTss9tFrV9DSGGeHisWh6mx7qhQZkz4",
  "key27": "2e6h6k5RntezoxZDhT3WSXFFFNbhvCuyPUCqHmxcLck9xK6ab9foJk2McU2ZViYpQZiFGwvAbm9UoP6jsnUZa1KS",
  "key28": "2AUMvSoim8BHCTqtRprPPmQPZj4Di2x4z6ricsDqCHX1HPDS13czctdv1SjEqpHphkLxKDzhDyWYbtpYWu3bdhcL",
  "key29": "2T26VUmb47KDaUUZD7HbjTeD8zbCNMLYJbnyHSJ8GkdVwj8PER23X4nNT52axN41EAUVdof1XhxYE9WcbrcMkxjH",
  "key30": "4YxGF65wkfXrhKCod2tnDMRvpztyPxGBXAZr711g6XQQTDDbvRihPeVpQqNvU3Hnvt921D3UvWhumbKvTwZsuRDD",
  "key31": "28QearS5Ai67KnXtom7cnc9hmFTUEewKqdtbTvibDXcperejJQyf4V3ZN4hSwvK29neutd8bfcYwfhWYwq2Ef7oQ",
  "key32": "4Zbi4r3RxmkrqVbRN3Gkmdp1cLjzipwkeYHEJAu5aCkFugpN15BJybrT6KFnGHqDP75Xei47Zv4rWxcBJBYMJb9S",
  "key33": "2PhUjWi9iPciUTZfYuGcknBgHEooH2eghu1juc5sdnzB59AzTxBYvK6sJahtYn6ND2pLuQVfMvgJP1kMz6GhSewy",
  "key34": "3WzVGPB6DdjVqdYXgJ7VAAvZX3qBGHQnCJudL6SpjopGDedyqXhR3bNpfntcY8XWGSB18y7H4mH9BMFazdvMTeD4",
  "key35": "5vvJcpHaCZrSLz9GaqaFhrdAM55L3edieVv5vjbnyLp5E8WeP7HAfAZQ6ywTutB8rsFkRqufgPT26SZ4ymGLxGvf",
  "key36": "49R3caHHZoADhVxBtjBu27ugLAD5FU6dmGygTd5JThqmLNabMSbwNqL8jTbvYPJ1RyE83NkiPeWp7hZnmwnt6Pkv",
  "key37": "4iHVc9zsXkv4FxnWEgn45QrZVCtfymTgnv8KjwY29sNvLT5F8roPYR7Q8kK2vi799CgcBjXanx3tnLX6ryb45K5q"
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
