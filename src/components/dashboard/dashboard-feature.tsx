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
    "3hTaeN8ZLsecS1bTjPoKNhcieXwpwWMUtk7LaFa2K5hHmmzKfMQ7A6RTjEUJKLA8XksUtkt9c6Fb4XpqwHSpssgX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Fge8HaRC4G56tsEYopeQbPpAyVG9KpPs2SF6UGbkGbrJJBWK3y1JNqF441iRKst1mJkoGSgMczerVGYiQv5VJ78",
  "key1": "dzhofQg3YdoEBb6oJjMXNjBXyZMQ6tJfXrkSiCa58PakSz4YnByFfSBQSmoadQYCAmmgFmj46n7pjc6fwWpF9ey",
  "key2": "4Rkt7WwJRKQ14dQgNfSrgyHSF9VnpzLWi7EYTYyQoyUDCVx2CA2KQkgCPebWZoErDkMMoVa4kmraePqSyAveK7Li",
  "key3": "5WzrNrWYfPKP9aH8xxC5oELvFWHGzuAiNGJJ576iRrND2TvFpc9CfQEZh59M93vdJh9rr7t4jhMgUZA9d5w5P94f",
  "key4": "2bREpnqe22CLHBB8C1KmgLf97mVqkccgDtJtTNrUDhxD6w4DoRfTm6c5h8ZQMR7JmcnSyDBnndBY6dayaLA1UE2e",
  "key5": "5YxKPmWLvURvr5YohtPNMpUZ822RiXdr112yKqP5WgqyzcBta8GsTcwnbsAyAqYG9tAqXMLj5aoS2oYWxBKgBdZx",
  "key6": "39xPfHxXasxchWZqgMTw3uxYAaDAhfENHmLJemWmjLvCruFhfowmJSLvLvPQVgFULpgV27gH5sicHnnVnNh7j6mt",
  "key7": "39y2W5mD9TDop2T7FAWtqTLHzEwbABPpPkkU5HA1qCYicoVbpAeihrekKgpPsDxsVpYfzbSsHMrJSB8X7mKyGvhF",
  "key8": "5H6EVXEHeDqrNcR1H4GtB6omJ5bao3yF85mDs1eiY1V4fjMZjTiHZBdKqRbivXssSWTLXAjnG7wHG27sNe7Xzkyt",
  "key9": "2R4a4UmJMvUicZrg36HzXPAABPjCp54PbVi2hpV4XMkuaJDa7kxrF2A2vjGntq5JxKHYQsxQZLqVg48UCzqMXp88",
  "key10": "47wvZf1d6Y3uBjrSk6TXpabC88CCuc92RA5s747bscNY72Ukj72KWKyfw5VGtionRmaV38tbkBNL16u98LNb45Nc",
  "key11": "56DBEGQbiZN3N16pfcNA9bRwrmxQuHXEy8MeVKNx1uUfbxLxTbPydJkRCxKf4dETjDYSmYru2aGAk4igCYACUg3Q",
  "key12": "4T8uRYi1P3ZVC1PBFmKJoZSF1Di3Eyez3evjJd8qFaKhbzWhdA8vWkKCiZ8iv2DYhZZCnr9eHBaspEnqDmfzN18M",
  "key13": "uLQVYhYySd2MdgYgDfvUFWZboxKpTMKyXiH55D9br2zr5jHH5CtYQywxh4wfwwhQAnjj7PPDDUnuSzuRiqQ8Pmi",
  "key14": "2FQDPcRTjQBxoQyx4ibtxDm9ZwjAozvE9RMDkMEDRuDZytaThAwdY1V4aUJhv35HDY43psUrayugEqobUKHYM25Y",
  "key15": "W1RFnvBApN42JR3LSEJNtb8E4dE2JX9vR34aMxXaLVo2g6aZNSfokYDcBv5DHSHYgX5aj6rgdZzmbXrXVHCVHqs",
  "key16": "6x4LmFSSYVNr9vABrqmQTZMTKgG1qbDvH9TjHbtjyvja2kDYLPreETDAZjfxau543wR7RkvH9G4Zht9wctgXDDR",
  "key17": "4n8uCamNe7Q6f8h65iTAyvPMaMyyRxA4jvc9jKUdYRyjL2G8sMNViKhYZMN7ixfPQ5UDex1MFYv8qiTkZeD9RtCS",
  "key18": "3rZMb4YE1KxpjNEnFyau8RaKcJ5RLJZiqGoWdcUhZAzCgNfJW3Tx5X8WZFb6pTUu1nGspiSMz9zFjoy375UzYoE",
  "key19": "3BqinsZNofpHgbJ1bK6R1nFa6eAdasU5FH8EbnXwL2mDxkaLSZZnSA5hPkzwNepPQeK5yXfT4hEd1GbYN9esga7A",
  "key20": "5KpMNefcZ8WDmHEshSVZZ7Bkk4jN7oEstuuLsoTbD2fj3GVcoYS5DC7wjT6VGJGFcnSo9bTeAmLMdAAFa7PE4fjA",
  "key21": "4zUQR7MftEdXiP36QTUmwJF6kHrUpHpQPtVAM1HmmfWsjvF75FMbszHBfca4gst8XkiCgm14SEjTeM3T2rh75FJk",
  "key22": "3B1G5DaTHRAkfBToRXauNEq2pK2dAMF5AG4qoa1UHgM1TB8sJTeoXBSw9FXzJMnuUYvH6ZrnCq5KQ2vHK46ADzUV",
  "key23": "2rQJ1ik8rZSSPfGkfAiQrjXNs8Ut2LpKhDCDyBjZoaG1N7uXgMLHNJm2Qx8qrAoCXrH1acXNPboUvsVgvso5sy8K",
  "key24": "3p9aBb2FbfeyFKRjbEuYHM8cPjnawh2XAjng5TxZJgJTCaPwj8yxuA6gT3v6TrZ89JfhLnmG1d8wR7mvHde73mkL",
  "key25": "5LYrvfC6XSL3rG7Mmc5rrPXDMyAbS7sQrS4uW9eeecrGxuvFTfLA8YEtoWgn5n4jABjstFZHMbuyxfr3HayKDJQL",
  "key26": "3KAdAtPW2MRaiW5xL9JW9iwbPn2rtsYH6LFf8J4gB4pDw2wYF73oG42kG9yQ9BqBSGwVMWgXD5TAQDiLS16XSGXU",
  "key27": "AjHT43PNp6Na5GiQjrjvq1qYRuQR8xmTbqqya1AsqqLKL7fu6QWt7cPN94zBmrHft4dbHZMa2xSx3XKhKExMbom",
  "key28": "5CGswngXE2CM3Df9USRsVF35RDdFHYyZB35yMXu4rBjo96F5VqeQxQbfyQf4M6biUNE7F3FfBugQFJTDj6kAVp6q",
  "key29": "FYZFzqkqjH6AgFehW5Sg1zLv7htLTf8ScpJkbmFKXFxzs1EbYRuNy94g8Kt8vqZw15UYzsWbnmkaqj7Tj5PLkZg",
  "key30": "2gCUz63YYKRQ5KA7vo8UVQNqX1DmgFsm9TWJpZPnkx8u8KoAwxJV2bA95o7maVHBuAWDLSKBuCi4AcARzUpnf53u",
  "key31": "egizVuBEcztCf6XzmwMEtQctyG1dWBLc459ysjNXp1zxg1wcBqcNqGLtTh9kDPg3jtas6THHdLMm1H1W5Ugyu3C",
  "key32": "2wEUKT924SUcaRsES8n6V8hmPJTpu95mkGg7KAyAM2SUF6vFDZ9GkXjMbkJKWDWwe5C95TguUAm2CR5G8z1qDuBR",
  "key33": "4YzMQiT1P74wcXm6MxcbxckrmVC1bkguYr5hYzRFij879x7JegVuG9E2dzzGE23aRx7UADZVUc7zxBDz2LmRysLD",
  "key34": "1uB2Y9Nzs3kE5oVh6bKRoHHPXioQLocJyRsMmeqH4cqfa4rmdb7Wz5ANtXJkmBLGVeeMuDfqCbCQE3NYuGd71pk",
  "key35": "JfwbXzrizNi9RBJmfKt46y8MejtijN3PEy7rDVxqxDUg4zmcF3gAohabHcqri6CfTkATozau5JKg2YysipPTJPs",
  "key36": "bxRy1poXw1pGwRGmXgLaqcfsavuLtL6tAWQHwpp7mYAPX445LcouPPpvo1A1Ah1STTe73aU1FEy6EE44eUFox4p",
  "key37": "3tim84SNa4F3XvvuSbEZCXGuqw5VpdHdLGPsHNSDXmDtn1YQnA7r5oRx6KBh6NthgUCUodC7n8J38yqTkVfZ2fCM",
  "key38": "4TNk65dbB2qGBgFMXYMM1SzpDcSJ7bCCex3eWdYcsExu471PmcmqAMh4nMQ5JpkmG97UttXEDanWZuameFQQnefx",
  "key39": "2s2R1Lq79n6RVTa55ySfZeRgcwaAGqhyFb2kDRqWJhhvmJ3FFAv4N78TxeSRremyYuAmVDATrguVYjaZcFDaDSi5",
  "key40": "skbavKfm6gmKj7t5vxgWXRK1mKvASxftZeZnWUjWQEnnfKiPY3jVTGvWGT7kRzBTsvN7tfWCLizHn9gaRxhEfSh",
  "key41": "Qj5nutQ94baxeRpC8tQvk4yidzHr77cNxh8a5VYZvYCW3CggDEjtQ6armYwY5Axj73BmYbUYdCTX1xXM2Vhh8GX",
  "key42": "3mHufVjyVWN86AYJ7k1KV6S9HARBsbDKRYS9Pmv7jhVxyZcohsX5bbRrwt3zPNufhREc91iLQePdZ3DvirY5jtH5",
  "key43": "4VwnBZT75XjrUiTwDHWuPV8rb3oH1XWu6Z7wohba5hqLEbnttL6y7a7cDDScAupsGudKx5afEcpKvq7QDUTqVuGP",
  "key44": "3y5PdUsyWTmpAmid1e3eJn6AGCo7EyXH5zYX7c9xhza39UhhH68JEe8nArF3Q1PL5vJBR4Cxw5Kwtmw2K3bVGT4e",
  "key45": "5Up4Kr2Swh4baAvUd4C6oS6mMpsQmZHmCEo9GjXFg4Tzh1S89GV2QgJeV6mRdnJWtcNKDY13VWKPZ1uUMoFDtnQh",
  "key46": "4A5nFnqYovhDib9JHiZgrNfSM39UFme54Ge5porqMQ6gB6xWCduHcvV71BrgSBKns9rmipNn165emAB4Ns48wKMd"
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
