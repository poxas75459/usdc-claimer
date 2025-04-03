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
    "4iSw8rGUuRQTTfFeRCGMeqSX1SQA6Nr2p9mUfSK9o4ZjfEZhFuAdb3NdjNcbuaW9jKVvbYLr4W466n7euzQgmqt3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3W8bUfESy8qSe7BqUyzQxV6GHS4fUcZaWtUG5rLbVs217BWNemoVqkwxDkRH52y6ep6EjScQUFz3JmPzi25YAH41",
  "key1": "5VL5zzskZG4SUJqpURPjEQXR1C7dCq6Q2qv1P9yZUfmJvTZsrEVLY51EVMn8S9LsUhGQ4uAq3kzMBrbY5UuKmw3y",
  "key2": "3EYWZTUu3CCsoisPzBkfzbFeX2KBgHWmBLA7SVDtq2cwgoFzrywrDFNH1Lpy57K7TBgdtS7LHVxTuKKmbEaTukHu",
  "key3": "pRmk5bJwhgZ5c41iViEcMAnBYcnqoAWAbt662fnFAfT2vs7Ph5qivKAFS3g4wQ49QWvv7d71zcyuJe6gscWYUzs",
  "key4": "3nZx3apTjJCofxS3ughVVPRrMY7Y8G1Ec6jEXMFjZDNYUoifrvWFLPPBAY9ovcELiAyLD4184sqgPSL8KD6oLLj1",
  "key5": "3mLFnfFMDrcRygfsdbzjLYk9EohWQTZ2a9E8eSuErEGaGQjL5zV2uZhBtXFQUhgVt14AuXMNDhZjdRv212ima6hp",
  "key6": "22hM62rVwbXsDJ85eGSce1BofjDojodDxBPL16ZsDgVGLHyareGxAKfGDF1QQQbMnaUCMzt7qPHtNG6aFoDAMq2Q",
  "key7": "42N7NYdm9HCM2izMPizJ2mHhNcD74C2ypoaCZg1hxLNDzewiJR1t7Hv2GJdpzCewRLooVfrkK2hC9rjwWDw4dR2v",
  "key8": "2tbjw6QktiL2ETY9buVGYMvPAsW9zqiaRT89pLw5P3QPBttPY1gVEb8KYtiJkSZGprCJ1afLbyLJucWoU5QKFQhK",
  "key9": "QYVTinTbveUscUvSr1Rdd7dJBHaC8mAEvZKe2ZqWLLCBUbksrMYgRdeM3bx26UnmprSYNyHWK9w6HKPnCnMCJUX",
  "key10": "3bWzBHjkqDNWQCiiLdbrw2UmWyTgGG7ytUnitxrQpqBMUCvuHAH9gL8Zg1uYFMrBvhWfij77JDzQ4dzc2rBSA6SY",
  "key11": "2n8NvPGpKYL8KGMTwGzUJzxWKz9tTESRFMiSoVRmSeh5wqsC8BoW7CAavB5HzRzqeZxERtJgbt6JZ4seCNbSYw8F",
  "key12": "3uWvufNym2Yf5txZDsm13JRu77qsRP5AFNPZRWmJkTgc2d64w4NTrdfgjWo1dJdzp5JvgQdGDgHKJaxpNZqetr8F",
  "key13": "4LisZPXtni4m878hCHbvqH6JwW1j9YQ8rQj6nekNVDMJJSBeiwETobwpVLAvhHoWWXCY5cdaCu2B7zDp2bZDLGza",
  "key14": "2AEnW8ySEU7nz75ZZkXew55ucHip3og1V1bwGseFdjMM9FiFvSxQAvnyDe6syMhHKUt4SWczdbE2D7Sw7uWrbV3j",
  "key15": "3tsEbRL77AQr4L9jQatC7WTvFR77Z8Z7dnaASrsqDXCwGmgCE6qtbFSo6SxLmvbgDs1TiT3inh4hN1D5auQyRh6b",
  "key16": "2JgCQJ2qgJ45Mwd6b5N1PKfMzCCbh7YCEiB7xfvSL5W4CXSMiG9q9CqA39V2QQP2ueAdcHsRUXWXvM8r8sAwjh6M",
  "key17": "2wfdQiompYXubgAFqxC5MgXAUn9B5ci2cFpkYnibrqTmyqirgFecRb56DH6g8JrrqKuSdxz1kKEkcejTp6vbkXv9",
  "key18": "5e3VXX7Kgyou7QHi4f7oe7gNAuVrZ6kPSYz9edxLEtddPNUmZj7kopcD5pKN6kK8kXpP7j5KWLiHuaBeXdGccqud",
  "key19": "iX1H2nZRA6C7v9HL99ARVzWR19p9Mw4hNwT325uo7jAGHhg1RcAu38bkCRGA1f4p2gRsddutuPJEmqUxbJ9diFm",
  "key20": "4zS5T79VJhmdof1MUBF9w18VVmx2WtAHgSvWk8RJdX6xAhLsmPaD7SYB4PUggvzaNPQ7QEFF78szEvMD69x7cqUV",
  "key21": "4TzZtSHS2YvRRCU3fKQrYsx7QSBcxEwL8b1FDrT4DrmzqouACNeZZgyoRuSoPwNitQNV2ZJLBMsUVK1Zyhp9e151",
  "key22": "SDKHpsm8LXQUwterWAPTMUq8Jz9eo7s7CBKViCoxXVRzcqCPjLcr2savDZcVXJmfBPPaSmdti4p6JG6RP1zzuRt",
  "key23": "5DZAYjUThNuK5MEpbLJWema3Utd61zMRrGKeuV4bNjJYmZtkzD5ESUfiyJuBtujpZTkcHcNDAVtcCPMjaVzvZnn9",
  "key24": "GMT5GqG86U4mPq9uYXvAAqKartjKDWWfYLJAadKE6ekBSbeUv6sa6XZ6EnsyR7UWDX4N1uX8vU1XBHtPXvnrkmv",
  "key25": "4fzRQFPCTUgLXBGah1HHJre7CgbVLE9iuZY8mvRt9epyx65RYLBRs7i9YbqqASau9ZjdYe2vvqHCx3Y5RNZAixDF",
  "key26": "54jutHR2e1f2nfC5XPdYxnry37KoGFbrprzL1uab8G2eLUpcgmrLce9dsSKvBpU2S4vXjrBC5BAaTWjPrvb5Ws1n",
  "key27": "129Zk1PAKopXLyVCYx9rpTf4EGTAEDuicguqQQLqMppX5VKY3XZpCccEww87Eq3vkwo8G8uqq93tVuBWa71hEdhg",
  "key28": "5ipVMNzjQjmySHBSaVvFVpd8VZqdouFAezraiKLgL9Tmp541C9Cr2sH3PgeW6fX6rro1fV1PzXC2JK2xinVHbng1",
  "key29": "5a9uptF4QV7dw51fRJ55hrRYT68jWJgEnrMHQaxuM9XED7p6hBe76C4JqLQzoVyVmdRQF3Ay1VEaMaxih7ngBn1U",
  "key30": "5Se2DrfcKEFp6zR6i7Q1TJdX4SgR3x551ec59cU6k6SJsCh7ksghuenC6CTrKTqEHypAZ7HP9Qa2To5EFSgEKvVQ",
  "key31": "2GTVin9oe9WdTmdxL3yY84H3Nps62SoUfnjBy7X9LviLeXkkVFkoPWwdPTSmZGvGr8ELkKuJiSFqZjgHnnaitqpR",
  "key32": "33bYhe8munZM68iV64nmEkEYfZWErmVtx2oRB3pkHRiULzdMba1fPH8ixn8NX1j8ZHN3dUXsCZmJ5mwNXvnpCxQZ",
  "key33": "4nnnJKaGdXUUeobDJv5sxZhnfCW1WhRRHRStjV9FVc5vyKqqkNFH9q8TEYC8ikS82D395zyDkJ79J937ADZQ224v"
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
