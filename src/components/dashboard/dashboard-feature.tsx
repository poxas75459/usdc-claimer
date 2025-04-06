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
    "2JysepVFf48SaTeQFDEFt5D8KUBwJyjJvvAwr4yscWZFnQGnn72nftHdCD5uXgNs15BaPcNp752RedfNq5Nkzqxa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oqRz6nLU4wGSRjJ7FXXfEQf5A24nQB7GGP7NnwN4hC6tgcbcKC4VNAY36i79SyUpTJDEtvSgomVPANBhmnXjZWc",
  "key1": "29TczA7m1HWJnibmd1WFq74AjDBPaJZamnMY3mt59zQnrT8WHqB8rLWKsUjd7bo6UVG3LUxGnexUXmjzu7KTNfeM",
  "key2": "2KsvmQMdmLrpL7b4mtY8GoLQvMEDUXot7fe3Tx9e6K8X2ShRjCuy7XjAZSGU1UW3nkUC4od9nTt4vELdshVHHoPZ",
  "key3": "5fMxiVa9wKDaMXsLm4h548viVUzHKszaq8PMZxsXvsukwCXXR4qxiiZopNppPZjYBUkveu1TG7ZaGNqEdUoEKjZt",
  "key4": "26iihGGpfsSjfVyxq9mMvRwBPgEbP4k77LGstELeZwN2d3g2HcjXW2Mins9fkqAZa5hExUdzbSzqoWnyqSsHBrLR",
  "key5": "3r9oNmgSZrCRvyJ79tUJd2S9bxCyV61Y9RTxBuVPxCiziyXVTx6e5VxbP9Q9XqoWoaAPhP1GLSnENcobv2QRCvSj",
  "key6": "2RH9jkSHy1tXo7B25DCf1C2cYgMFkTts4MycvnthDxP3NUcmq6Bu3jkK3zGMhnfK4C3dMNreyNUGKgLExQHSa17v",
  "key7": "37Z7DNDscLCxac1xqXSe6ZhLKzHmq3uBbiyKYVhpe7cKY7TN6XDz5tUssK6hxSxbN5iStahSJHhmgnfbAqvPAcbh",
  "key8": "TdXrdc9KkWvDCbZqtToyv9pgEGY5aqQEmFfTEELAELDujCspHPDP7u62fU9EHfc4PpoJLWDjgvpVSa7xx6G43CK",
  "key9": "k9HyKDDFCfp7ct6r6q7BX3Wk8smgPgYhWAgoxRmiGD6FVm75FfL7PoLDSnEfR9uJEAU3H4TjnkHGzRpathuZHki",
  "key10": "3hbfxY5oZgu4sQgu9HcGaGwWSAWW9qmSpo3SoZe8iG6knLBzsHHUbWeYC4Zv7QbGnaaEiR8twNUdYLdbqaPTQdL9",
  "key11": "3jrSHM6sAL9tG41b61nmJ5BwvDmqvqqgbPKuBZdYGFtuqxw9t88EAMGFe8QUjtsf6BPnBSzD2mZFbPA9F4EhAep1",
  "key12": "5ErY7DZZcg6kXVY831gDJrmzbRehoe5J77H3CtYXDuPvNvvaE7CcxnoVfhXrKBPsqsmtVnf4QY2VvvKAaa4gmWrN",
  "key13": "5NMFuizNHiDPZxkeRVgV66ZdYjoksRUDSiVtva1ZfNvtV6TCyP2GptbhGFH2WTes76QciUHRx5d9W9ttdKHbx1uq",
  "key14": "5grHegzsu2DW4JiWBNfrAa46XEZb7LWfMVRQzQ7Ud5WEWSuYFNm4pmEPWTjXBox7xEGRpx93yc8TqmCir6bXr1NA",
  "key15": "4jKD2fWwW1NpkwmaRcQTfMybNoiyVYspAzFuE8JtU8ppiyq9hjcuoTkFp9vsFVV9bcMkUbMEjhKrdHoZMcvmdC52",
  "key16": "3m4HtjbABtjBTTKJxjqmgrwe6EZxrQ2W43fu5Pp6muvftz4XCTRmjw8JagFxsS3SLnubbYzvUWnhkcSMNufAGiCk",
  "key17": "3tajYDsTV3fQenLdJY53gqP4MEQBi8nhBYQNu4oTTaXkHAdcykeZgiCpbHMaS2YPLWwmG8BpJCQB81uGps2KHKpH",
  "key18": "euQUJrxDuTtLzXHU9Mp78m1xasFGviMVLumDmE7fUJMayXBBLYZTsrgS1iH6QkHPfdxiNzYXKU5cEj7WLDPV6qc",
  "key19": "5eDdED8deYdZWmxjT2v8CJCGqt1tkDnJ5RaBoZUo1Skcupqy2jdaamqkMwB6n5mSf5NFfbCKE8rtFiFd2ghypB8e",
  "key20": "3igz6Zks4uy19vWd8DLH4Jog29iVZWaAw7WoaDqZiCxT2LcZfTRzL5FeLeWs8npTDC7SJ6fMfahoWC6z3sJo4mk7",
  "key21": "31bhK3rCi43MTeDdc7NCae9zy7x6y8ZtixXCUbaVtiHDSSpT7jjHuaLCh8n82S5vbx1TebgDb8q2VJwEiBydcTkQ",
  "key22": "3TkenncobUciFQ8qyccjYxDvqeGMCBFtrKW8oqDupN1jF6sBVj4rdVNm5JMdrvG62iPSG4Je5PHf8Z8zvBW72P5c",
  "key23": "2dgzwWH8QL3zDrE57vmVQMZ4rpRqpiHBB3L4ZdLYe845n3syoFvVDguvC12iWYir8L3kEYSH6nxGpyaCv6DKoV7j",
  "key24": "2EoNQ4Pz1TsrwgWkCz3vcQituQQr4VaTuphVi3X2kZ5mkQXPW1HMwaB3WiGHvuHwwvPqbam9s21kamPUGbBrqm1q",
  "key25": "4nvuWXcTS7JPZ9233UhJvbjzAj3n3vPcjSLjceqAAakPsBM4cefesAjPEaDyfxu2G55hXn6t1kcGTBdN1H56SaTa",
  "key26": "2DXD3bGaScgfnZD57fcD43K3qgnmvix8x2MawYbJXf6Ufq2LWskBscyvFASq9tM7gFmky4jzyBMycBU1NAFFQviB",
  "key27": "4ZN7ECVrSirbKCW6Yox8FuxLgoevJ5p7812swRQFWXFMR8KD6nEW3QhQDLmxFLK2Sf5Tms3WawRveBJaACLW6pq8",
  "key28": "4UbqcdY6q26Jubg3AuNDktmARi9ga5QrNHGXbDJ4ZZC3Lxk1KyPQNMeWYBN6VQUt4tEHGncLAnvMEzGq5iLkUyKv",
  "key29": "5HmML6cn3h63VxzfYNQeQWVYguX2JKbj3Z16RJC6H7WB3xT42fdLhgGLAE7PDBtkdhC2bu1gQDBZDmgdtsn98mh6"
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
