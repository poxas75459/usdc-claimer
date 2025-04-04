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
    "3qTC5mooZRyFBKmyi9hoH1Vo4KC1HX4QVRD5T1NJXcMWpNmkfo9CWVHbxRakUnLbqjSVtiqxivamGZAXLw8Z4ZoC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ToNVGrZ1VgeVfUdbBCQ41QTeph3uqjavyaxYsYk6mZmxqkPF2wmom3iPdnzfCFfa4KXbVN95FDzKF7J6bGAA2G7",
  "key1": "66kVNEXuhbhc8aWXRTk9n68nubNFWYNsvbVme2JuBWUoqkEavyZubTbqkzdDTqdxcVY3mDf5URZ4BPDF6K5PpS2z",
  "key2": "3WPuocB52jRSkGmbeWgGBQSFUVvD5o7B74QFHK5TT8ot28tNGciWa2rApm4Gxi7f1FetDVL75MJihMdBgKtvjg1X",
  "key3": "LJ8oz1B6qj7i3PCBu1epLu1k8YBMt2yH32fn5sSvJzTKvrZvGqSGxEyJyNeT5xavCjw7rcCVJxqziF51AHZY1Tr",
  "key4": "4nMrZK8U8hzjQt1msWwQwN8uxAttoybUvsY5o2TPBDy4xCdJfjwG3pjxFGVD4oUAFSJ5HjroiruFchTCCQyYRU3G",
  "key5": "4CFz1KjjEdZFVPAmQTKwxbYxU8AqAQshD1popFqAFno6BAsuqMimhzjD6yEB72Bysuu8nbiy3J4Qf6FK9LpHCrjo",
  "key6": "2yy3E93fKFfArNocfBmqFwVPfGsf6eSStrmfDtdXmBwwKvEjDnnikPJMRtSkVAzPUB7qDatYXf1RYqfTkHdhm3fj",
  "key7": "37Zr2Vctu7P6Ba2yD3R2c8whxcdgb8riPRKxt8ag1t3TdujEVCETnQuQCxwndAgnEj9nbzGDHbQbezGh2v8PRrXj",
  "key8": "3gbdsYvdJddWcGiNbj8ziBoq4SSNLV45xqV9Fmikn2xemJztk9uehdjxivUgQppmEaRXr3sLE9Bdt9EKZDZGsnRT",
  "key9": "5ZVxPpbj8yxWKr9gqHCWiXrqnhb9ado3W1DDRwVwvyu5i5Df4BxaZyAPA4SF6r2SuRBVVYp6vFyKd4cP2KYTwbZp",
  "key10": "K9p3addzrrgBNujdRD28RWjMv8CkbEm6TrRWNWEXZ4TqACQoJsvrPptd9D3ZRiek52mFKikUj1Ds4kURVWqWioU",
  "key11": "5mByR343uV1CenHBCGS4uWgSz7C5m4HDKjhxyqs4KLhJJ5r2UDtfk9q2AVS6sbDoJgBZWCcfQVwxgX6fGuUgnSBi",
  "key12": "Ce2j549JZ9jo7vA2pb5CFjfKVDq4d3HW88tcxata2uBEBg31gfsh79H4oH32PUpdCBEWwNgH2TxUUjxm6EokpaD",
  "key13": "3xt5jjDpugthcbmaNSCepxsT5dbsmvJ8exbczjgL55i3qa8KsmhBe5A3hfZ8hgX2unp8QnYHN7e3rZRYQvgUD4t7",
  "key14": "5hz3KM1DjPSV8PkfMdhPhR1J2pVRZ9BbUjVvza4FfhXcwVymvDp4jxSCVgdhq8QHJeck3nSyxyzEj5z9TbVjankH",
  "key15": "YDaH6oBgaucuLAMSeudh72X1PwGopqddLnBqXhVrrfEKAZeAkdvEZYYAfUvqmXYJ4gEriU6FcDNLyg4MStCWbGV",
  "key16": "5LZopsWnndqncHtFvpcEyXnj9yH5bqvwRrNWjXZRSnGCS4nexDwYVyaWBCTE6exbpghVjPNNsyVcYUpuHNfV7EbP",
  "key17": "4dYqCiqbzsNcj5t3RPxc5y2fkVbcerPFZUxdtSYutFSNMV32Bb1EzbTzgJQF21ZY3YEokSyYAXdWNosukWwpND2",
  "key18": "T1HUgUBToPpFr7J7pA1omU17rwy4JunKmX6pryxGELguiuggjsXLw11joUqp4of6bui1825XNChr3NmaW2xJ7hW",
  "key19": "2e2csKahwf7pPA7FSe5HS1Av5VTP7qNLdU3oJEz4Hw5Y4cJi7o4TW6TaK3JfRkdeuKqXWjZ9KsRT1ApKYFzLj69B",
  "key20": "4jpVxogEXxLMrBXVogqsLf2K1ZNZtRGSkbhBWP7bvXGzPttfvqMzHBaFqBmkSXZN2ynkxUPX3xt95wCxdDGs3v4U",
  "key21": "fZKHnB4e579WixuPmJ9aXjPX1XiLfEYYEukdDrrkck9Zdy9entpcsAeDR1eejYHEx6unxUUy7NuLjtXvyuXKJUv",
  "key22": "5xvbmr4mYj7og16bwJgKrfFQTRhupQ5tgHdsJmQhPAmTmz9hEVW8uUeDXyM5UUE73USae7BqaPfn8ECWDV6MyhLN",
  "key23": "2XFGYJWeawL3aq1bjZpiHZeJyyNJHZ6fK2gSFToK8voZ7rDRCH5F7n2geJ3tWZjerCudLkfG31H8wg7mP726MQku",
  "key24": "2cQntA3Lne5YTJrSxBo6or9EiSHemoNWHsU2SrugGKa66DKo9wu5RDdKBPUs7iXhrNVpkYiJYieT1rXHmCTjYt2m",
  "key25": "3mZqsKgjZBgoezLSuVrfyhEH8nfQJcypCEneA9reP8Vsv55AABLy5GHj7cHTnAaGWHMSUqU4xrbqPAoUXWTh4Hd3",
  "key26": "jWJSBQtBkrkgBNpxYZFEgercvAZMuhGdQnnbTeULCZnGfdyq6qn2rjLK73uJ3EdvCpuENHQEyNf1edGwSgg9Jdc",
  "key27": "4y7ytN3vAF5xeCDwiuGBxpsKeWgSq7vDMnHKao2e5g5KjY6Aqq951beXcqGzCK9msjqu5bgG8jMb1AQJemcvj6qf",
  "key28": "jwqFPg25qq1cwuWdFizWzg2KdZnGG7r8vP9TjWu9Ehb86BCrW9WPtts73gjSDj9bGnuqLNKMvg4seJ1HTg54rBa",
  "key29": "JJffecp4UMuRnbndVhzTGw4nNqDDLnQ7RH2TxaLvok5q58bvmVCEuDSkBRvWLWriZPz7iRaSzAk2y7V9MWPpVbA",
  "key30": "4ewHcKS33XdEPwyDYTtJj183fk25DRtHK9bbgnec9z1gLSeCLkyPTjsSrYJJgkfVF8E1g7iZvJPh54o5K1C1NtB2",
  "key31": "3JbdVa63Wgu1cBxC1Tg8fz7Xm8hKwZUxNM1ksBbgF1fWokYoYNRJkXCBrcRzqXER4QFSXgosEsLhXWrgvTc8Yaod",
  "key32": "34jbx8F2CyYbmK8oRnjb3fBbZN9UFzPw33pNZ24DBZSfVuFSeVbcEFmRGdsk2dHJ5ZJGHMF1VjtWVGFmL3wMdxfr",
  "key33": "5fp8Fc3dLCA4NNwKNc7zcP43Ln6rB4e14L1nGVqMqrNHSA832eYfL2Wde5AMwbdonDbSPghtCLMt7ZUfq4LihQ6C",
  "key34": "5rswiapGchsHe7yKpLFT9DCwRY3P6YVdtq9k3nEFJZa9yqU9aD8t7YNBuMarPPThMEui8syXKpp1ou5kxckjya5G",
  "key35": "5XQkFCED1WV31ksf7Sznde29YFyzqSaooPPoTCJb2T4etQ57jPd5ZyHNmcjUwc6nrqUsadiW2bBqqSYJK5jgWdLx",
  "key36": "57sCbqF2pHg6kpS4pzmdT8pc3jKf3GkBbT6zqSFid9jTwNzHZppx37XkNTD3LeYJEhyN41KW1QnH5CFaifwc8hZF",
  "key37": "2S9BPGLDtrXHabALraeBNU2riwmhLUw9RvzF2iJLQRzkb8ZwKeDKq9YZQaxYMuqS3sxepopDmbwpijuiCdw93QGb",
  "key38": "7ETtuzQCoHRrjQ8pTymXxHw1xcgwDhRQcFwz6xBxWP85rmTRD3Kssh4TQHTBdcdRRaAFu6ABviJV9UgUzaEP8Am",
  "key39": "4WCzarQ8xZ68wSonZT2x1BeRvzDX6d1HuoLuKti7j3XWKAwWG3TLuj7SkmRY42fnDL73u4muwJ1WiQXUhBwdBBZy",
  "key40": "9X2FG3s289LzGGnULdeFc8H4MyuoUwd94YJKJhSQbRcWbRkKdwCrwmCWcazFkSwQ7ghqGvowBxLEWzQbVbJ2Lyc",
  "key41": "2a9QpeVo9fo42hp2awgbZRzbMUEZsGjF3EGuS3VwtbT3qrRie3dAv7BXp9RjZo9eNZiDg3YXhxNaLWcC34kA33x5",
  "key42": "587fJxEnWrsvxfuYXf5FmhQ95W3fidm2rHmizBoeF7UfEpSRo4QxgkHB7KxhDHpxB5TYUNzufq9BnDpPrCPywHxy",
  "key43": "HphBXcDJqZQSbe29Jn1sfEDCkVH84H8yBhEZUkhz3XES791vRCgS3QcEKvNQw4BvTEumBP9qCpzCQtrf9N5UA2i",
  "key44": "2rSWnGKkMfkfEnumePp7fvLNNPYCyhbsxvokHdi2ULpXvAxTJgDXP1eRLygpoTfhi9sNCap3FnkBh8YoYeDdqMqQ",
  "key45": "Y5GAGMQZdwaDbGT5G1wpgwzC5MTHwhJULQBx1vikm848pgZj277ppBSVhPP2bFGGUFfwjRtdz9hHKHKPY19p4xC",
  "key46": "UhF67bVekVWuxQdY97WDtf9sPSkfPin9cyFBgPbQ59CXZ8YND9dMXESBf6dXWyXjtqdBPgHz7paMZdtaWKnMEoH",
  "key47": "4R6VJP1zdcj2o3BpS6WzSo3SFYqba9g9VRpXh3FQjprwJTxdi1xUChPaUnYo7DTsNaKpGgcgDHGJSNbrBgVQ6u6S"
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
