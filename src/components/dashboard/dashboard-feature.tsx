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
    "59sNTSkZmqzfqLPEq7PR51xVekB2b2Z7rUKdWKX8AQwPGxVKs5w4RFUvjBKmtAJG5iXJSmy2kai6RtwuUF1CegYC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qmfBo8WxC86Xhz6fB3SdntV6dA3AudjvMqY6JgBKDh1PrWTmbG3xHTtWNVJCeqcjtVgi6WwtSzEqUnASXtw6yVE",
  "key1": "3yuMoqffAocF97NV4kjaCEEnUH3bmvKQFHVXqyedR3FJnX4XZEryGnnERBrVgKmV2USXhhoo87Qj3nDobb9Ri4Rw",
  "key2": "3U6sTRB5TSbJTuPt15MqyHL4vxvAdLatm6PDAWL4NzfTdzGQECwQhq5hbDzFLNoiVvA33W3eiWftnHnNJj19xhvE",
  "key3": "2xzDrAoLz2wGFvFjbN6pCzNwevGwrRQm2yQLztAT5rFXTLTYXa3TZtxUFfTY4kDtnLqo3H26vqTwNWFK1GfEXLj5",
  "key4": "3sUNZ9UVZDhvXmp1YwoDT3C23fejDRVz2i9pqgWqvJ33UGn8LkgrCC3FQXZhHsMJUgnbyEXfzNvfKiv7sNwyCzXY",
  "key5": "5S4pZsSJPm6q7sUTaAfgxewNJ1z3Kacq9PermieGUbmkNgJDyrguukVzKrBLEoHYS4ZaTF6dbE1kh7x3RkkB99SX",
  "key6": "wGUpwPPno8vdqnwzzUS6A2D7iWbFFsQcy3nBuyY3mAiUecPkiTBSAvGYortGNB4vjZVteGGYaQ1PSEkvPfdDD9e",
  "key7": "5isy6GDG5ipivcyreXbmmrpKrkr2yAfHixJBGfqZ2vQTCiUdTBZu3nkFguUyJEXBCLCi824K683ZC87pEgdFW5TB",
  "key8": "WzZF1XmfXZdahQeZkGJKPn6i37wFf1fVxFUsHTtdowEgR3B9CTZ8bGL6Gb2FevTQVCgev6EvxZ8dhufudgPf4r5",
  "key9": "3waY9yZ58smkmj7NoBRaqYr2xpsWTdNx3CVHauvbRhxxsSWfHcn3WPhV1e46QkxWX7PZRXm5DDXTPGn6tAWqTGQs",
  "key10": "4ksJsMo8PVc9iDKVHj8XJWTkqdYK3GRpFRiEQJo2dWNHkbhrNcDFRjpgVuG8q9dGuDVYQ79fYqjccqTdTR59TXni",
  "key11": "38mmkzq7pQorDt74U4W7VfDHRiUktb1xW9BKHsyo6EYBzKTZKqmJze7YmyQMtkmfzRfLkFPdME3tyWw64fxXa4pt",
  "key12": "45CDh3NiAdVgetoHbiwjyMZT8VR1mJQmmkUgEqFZnkLF9UAmVuSFLnZixYxF7DFTnmaZsmxttJQ6fXHoVQUnfNGx",
  "key13": "5YHPyr42Pwigrtgp6DZuPeDMzwt8Vkf56PCtYaxcD5gBSjF2FaDXYsFsJBPXYS9CWxW4AKQN1NhfAD9VXdRYukZn",
  "key14": "4zSG2ihYkH7oZ5Jxr2mMA6tL5L1EB9eTTQFNtcYJQW2hCW8xkASAxsofjBEzLKTcfmXFy1RX8GUb5X9zpi445fHz",
  "key15": "25daFT7xKkBSFcLdLr12X3WiJQeUuWwJeYxdM4QkkhopE1xQzYjWfbp2ZhmwZDPfcx4vh8LLb27tMYRquUoaLaUa",
  "key16": "2eRmKCF91jn1qgyKTvARi43JxetFv2FjDaC9AiQ3UAgJ5HMg8CemKUVim4XRQKvQYgvdVq33KbFt9w4819xRqFkr",
  "key17": "58nBJjHTnZCQrTCDk3qL7CmrcNgHqtbWxeuApUrbYDn9WsjkmdfxpT2ZXmLvfHNyBTBsdAYp213G9kpxbq7b3WU7",
  "key18": "3hmr7JixtdJ4qrNUgyLJ7X6dTFZxKeeEzcb6q3vYt43ZFKmrkrYdAUX2B6LqiCoaFLuZAZQxuTSa4A8occ6JDASz",
  "key19": "4JnJXPN8AUVMztxTif83CU7ccLWVDmFbEmrg59EFXbxyyFqSTuLG2wm3Mm9XtCt5Kj4SEN5GhzKPpMfnmCxLSmQR",
  "key20": "455oMBFijwEBUogWtYG3Q3qzv8nS3QMNptTRQY6wMmhb31CyKYbRBwp4N6HsWpqdHDBhU6gWby1RxoQ3qw49j3T5",
  "key21": "17iPQ5cUypwd2diGCL839Mrnoh6zz99mqU9QGgtuSmvw1Kud16iwef4eb7TPnNyufgstf8NKinc8NXs2P6WYbJ6",
  "key22": "4k3Gv2koT6U72yx9d6mZbQKukc3iQwUArDCcaZKFkUmLeJvAkwPFRGjtnNWKP6JQgyKBXqvzrhkdfztv81onA9nw",
  "key23": "52yoqwLSANLrHP86p3nbwGqwU79W4BFBeXMDDJ5DxQPZBYKhjQt8p4Bg8bGQeSGQjY9PiV6p77VHHnGdS9kR3mzv",
  "key24": "5g1p1CY6VpioWifH9khH5BXfiD7QnyuC3UqTKL1CmxrL9MYqpngkjxExM55PH4UAFcz8hZzZf8xs1eY2HzKnDh9Z",
  "key25": "3grmTf9VGFKmsVYUjxq6DfhrxyKrQCDw4xTEMemLRjjjdhLC44bFGgTywa3JA9AmdGJyC8q2MKF5sKTNAdoq1UgK",
  "key26": "4HJZuAURzuBmzEyv7jvD3ypV7g2eE1enSCPMoRArfd8jovscFmjAysiYcGGcHG2shfPh7Do91b4mj66XDFhxJAqx",
  "key27": "2RpaSxVRc37PZcbwNp7DDpCNSUNo5KHJyBtmKP8fsBWJnXkMqTAq4LZXL8heNPUcJbtNDcQPcDkmnGhzfV5yftwj",
  "key28": "3p6LiYzYxhf7GiYpJ4SgpSpQNT84vZuDgWf6EyPKpDxkE5xduf3MdkJY8GwKTgwDBEhTbd72VBWBhf61rH3hnCdV",
  "key29": "57AffXkJyZ3rKv1epAz7GVQrggRUQgSbvXQs22mhunvYcGMAD6kUv12oH2NubqsaW5Cg2Wcw9k4w1EGrk3Yg5cf6",
  "key30": "5rY5JbuxLuHJHSqGPAb1FdnnKhQ18Js3nLX7G5u4urQy6P6uRMEHxgTZ4btQWALBm4mYNxkwUVYDHDffXw2e9uAT",
  "key31": "5XTC4VLDpBNqLAB9tchUua35uRFN8jbMaB6UVBDbgpzKLdgtQJewJVWemt31ctkjzY16xPp3aNbjutvd1FMcHrjm",
  "key32": "TXwbEsxNKou1WGfoe2qPnfjxjc3YfsaJFvu2YCNzWUHUBzSCWBBP1R6PPNh4H5KB3tk43SSX8hdx4ML2Jo39Le5",
  "key33": "5EVCpjrzaAwcNKQYhpiNbUhT2tSMLkQ4EFHitLZKPFyM8eg5QonA4u7v799VL9rkefKfCSUuo6XEniuNeJj3Me32",
  "key34": "3Em2v4ccMsemYnGXBUdz781Td62mD7nxckNWnxwBqgZWtFqpKrQNxiDe15vqWaW8N3kRnTbciryoMZc8jK6AzeHw",
  "key35": "3xC2dg2afYJNYma1jFwyT8CLbH6ASuGksEox9s9mdE9dCj9XWe3VQtbmyWLZWNuRmb4JfvjQSSEgTQNs8VzPhkxC",
  "key36": "3XhDHNY5SAsYpZGqeiC4v6tDEjddepQUW4iJguSQdvnuqua7vvyEgABRMXcmvU4cGiBaDS9xGYdLj26n6UTcJDj6",
  "key37": "21ivu4WhSZECqzPwm7CKrJfwfE1M7xBPK2DqoLeZum3Gz7UZfkxVo6EpPYhuYTQY7hfiMeHoqpEMkggj7npGhNrm",
  "key38": "3BQFEBnFweG3PpeviN9uoYkCAKwRxgzzR8w4FrpCGnLfXKohAY44TRRVzsycs5tyjh4Sej4F9mtAUwG5LbuLjAHX",
  "key39": "bYP2bPyfvNnFPBRGVFjCpJi32p1k8VBVPpxQNVoEPPYCcNyizouoj46tNP9BGfzwNW2NncLNHmSCsbefPKGAQ9A",
  "key40": "4zgoLaHDh2XnorVej7EXG7vEyKqiLrS8gwQKqeCD2eyWyw9BqP6sbMwTtiPWUgisqMkENsxpYXDWska66yPcSSkB",
  "key41": "29nDhsWJVKYA1JbrRuE8b65SCsGNqSMXSYnf4ZDrefLjvJtJ5dCYrM7Xs6w9Jk7zK8jQaduQYnC1KFT2dwGqp8fU",
  "key42": "2oDgcfGbtQ6Kcia6cxBnHhn8GfsfpWqVSgdcvXzsu2bk91Wub7StM7ChxSmHuwiZdybZCrGKNG6vhaN55SFUS2no",
  "key43": "5rV79HUeyCRjdAbSYTZpB1dbVG6A36PvLuxNnkEBVC5UU6c2CyWTk35w7qt6eZQH8WxY6Yh8ppDeQ47yqdbX8fXV"
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
