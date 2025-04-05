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
    "3v1ar9kAZWX7DPA5Bwrj8NTaqNb8zQ1DsDEgoTbYA3zHaV1471KFXicczjvirRdFsDRb9ehVy2Wnz18jUGXDFFnM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fbdUvkd4Tdsg9LjZhKwYoLhABDG7EV3jBDK4uohqcanRVP54BKCcURAKyzYi6K24fActzb8ht9ckPADNYMxpUoq",
  "key1": "46mcPBYE2qbFFaZzgN951p2ysw4nEeYUR2wKb4vk1urHEgNsDKN1LRJjQuj2kX16u3i4DbH7L63EFz27Y6D5gEuk",
  "key2": "3jDJXWguv7sR9UJNe28TC19NDBxg7Pq7CsBF6inzPVpMBFAYrGyUAbTuR1FiwkrykFKZTGb6ypxsAwDfqaDQJ7aH",
  "key3": "uW1fufYt4JWmq5KwUnUHdmoPwUXwPHM7gytJkzf72sCkWaCT73AjLay7mA8HjevyVkzFNv1ZH7RLYcLGtBYPVwR",
  "key4": "2UxQ96ncdzTtPt2H28ZnAygoJ7XW5ix3PMjdDLusyZUJTsGYmxfTjTRc2xqdMgXRSkc9uo8evu8mnaGEKHxnaThm",
  "key5": "2gCShYBz23dKARk9hf1CgusnfbkVXdWqxbn8PEDmf9uf2cRR5EWobFUJQcTwk88HGjgoboqS17H5kgUTrreYkGcn",
  "key6": "2qhyxZ3VXQj7udDDzjyyCrbE9xeuGVBaERYuNCNWnETF7eazgc76ZGtBcs4E8ickvj4eSocUMXQZypNpYMNe2FJT",
  "key7": "Cr7kDUUhP12HG4id7VPEW4Jcu3CKN7Fq4nM25uEA4sHNnueSW6gdKrN3BtgBR5M31NXLfLmZSE7MGh9cmLmaRne",
  "key8": "UyuyDN7FcQxPY2FbYnCqBJCFyGfiF74aBHPQJqNEYiTtgzG1DESqkMiUDctZ9HKCf4UVhqsfqak6ntq1ggKkoVP",
  "key9": "5kSWGGaNxnMN16peFWiDLAfVuwXi6e7Dp5Po3ZKgmnTnDSx1XirSL47daaShXUWeSBXJvxigg1thLQM1ByWBdzV7",
  "key10": "2ZRxfHreJYQB1KP92uZXvp5Wtbuacb4DXdSYmcU42yxKaxERujt5NBDCjZ7BkMdsn1DphGcDUEYb9XeKrXsfjrak",
  "key11": "2YGDKVCKU3v2S7hbfEqUPr4Eriy42mp3jRig8A4BNB8bSQCRM8dvvJbu56N86jNCXHS41pww22D4eMDY5NicpyK",
  "key12": "5VVHwzrXFBznYUFVGPwfuRSZmLDe4N9AbhagHdJrySuMP9Evd7UFeBCezwhTorE3u4PD6UhQHmZ4vjbuN5RNmiKV",
  "key13": "rbPHWp5Bv2UaB3CRjPFEHEnCX7oRgJdCUbWU7KimeDkTh6ZF5oYBwJS2awEHV95t3KRiiexsxRrAfNsAAYKTR38",
  "key14": "2s6MjCHHmuFbuSZ84py53Bqx4sCm2Pu5GBzb2wWFzjYyXgGzyjC5Tb63vLoiC9WmKn2GxGbfgaifCTGTqPjzeHrL",
  "key15": "2qm3b3TP4yk8QjHqLbt345qmko1aXSefd3XGxkUutyqcBwMUjvnFYUNNQJSUckWnMY13YC4eWYZBb4Pwxf62ttcd",
  "key16": "53DsyiGFKySkX1yhsnfE4XbPN5NpdyFcQUtLz9383TV1WLxpEAL3CwiinwCRUAKPbk52kWdBUvTAdJjNfHFWvV9A",
  "key17": "55dLGzRRxxX62KLkD4yxM196EDUkXRP3aazY2tGhPvrHoxDMmbDXbVgzgKwy3HVTVdgmjmQ84VRY2wT93kvdrGMS",
  "key18": "3oS9X5TXwTwsvo8s5dDPn7NMgXHRhgb6XrYrregk6hTippH1v4jsCG9tWPFm9wE5xwt782LPwmRc2rKPtx3R9d7r",
  "key19": "2SYnPdraCCgNHxyCuP1QXfXth5Q45td2ZfVHeKR19GsJxHobuYL9ixG1R5JFV1pAhf5H9qX1vijEAVsaSy43z3j6",
  "key20": "4FTY4WbwgqMH8TXyVTbzTB2EEyFeutLbUYKb2CQ6t3P6KmTTXtNpcAJpdzSxHjVA4xkZ62KGEkQkZKAT8ndG8r7G",
  "key21": "3BzXaZr9Xb27b7Jg7HNwMNWAV9QHRuyQMqSrGYKfoxFDHGULBxMGnnhE8MdxBkxFCJ9F8SqWVNy3fUfjhBgJZ9Gm",
  "key22": "2hWf3Q1CJSRTT7yPhx1vfhvnF9tK1nG6R8c9WZydTComdAYCs5sGqqvDAbBZNtbN88We5VQMv2YCJhxHbSQasTjS",
  "key23": "4vCU4c1kdCcJjuFXQM3uBMc9K4qiYgT3ySpC9C1y5oS8T4fGBZizGLexqxKDzPNbAU82zvTzbMGcM2q5oYeQQrEo",
  "key24": "4zYqQxJr1jxWix7Pjcuquzp8V43LjfRwJg3vN2kdTuwsh7V4cW7z777rSNarMCf66HeYFBUmXS5u2gNyUadiGrwh",
  "key25": "5DKcHKDKY7AMndcqDHmQ4DkHNF7QfrgDoiEdoUejboQakDMN2Qgz8QBNyN3iEM63gnjixiyREkEinkY7dmG12vDp",
  "key26": "AK3jmgd18n9aaFvZ33WuZGD6pxyXeTagNPE2ZNgQGEjEjSoPugXLgUtZBXzYDy9b5VbDZiArkbhLKeVFmivZXr1",
  "key27": "cRW8mbZc5gJRquvDGfoybz7d2hbG3kwrPvazdnU6fcVCRa1fYKMrttp2G45vHKpD5vjLwJdfFTRSFmJUkx5C8MD",
  "key28": "3pE1aQWqgrEQFN9wHWWr73Gr3BZysFX6PLaSzSmPzU5qdxug1TXYAVCS7Ec31WjfeG3GPuhLzTsjmfwxyJ1bJZWP",
  "key29": "2j6nsfAcdgRdLG1U8zJJDzcuCNyFz7icr9cHMFqmfT2Drahu3XHPwffsn6E9V2CqyxKuzVsRVZcvBebMKeJHMet6",
  "key30": "5YvMsXdAHcoVZHd95t1DKEgiR8YSzUnZN7qvCSMU1LcmwoKoHnjTXphxkzKUDLZrFb8TKrCpXgZ7tqqf6MU2tsK5",
  "key31": "49TKYWr4ZKwWY6rUemKffjbxsQk1jX2yhdcUFJJzTDw9yXGV3DT36UsPVvGdk1ZybGkZnjTog5D7Zd8XNSrwqzX4",
  "key32": "kxHEoK9mQfCBLeeQDx6FgiPzvjZX8NntC545c7RWmRSqPgPyt4FngbUAmAHE5JuGhJnb3ws1QiEa5xgBemL9bri",
  "key33": "b4ZQsuJVEEbaZ4UNNVS1VAwcp83qNFaRuEZmXQYQbi3uEPpnfH1PLRYjGwBcz5bvCiPkzRA3ZBWjA48EbW4wJHk",
  "key34": "4decTZMwyQYoxLevw4mfVMe8RCNV2SF62e3FeHBfm3aifU9jJZJQN15kSk9mdr63ZT4nryg3dccABpdewDRxiq8Y",
  "key35": "2sCASXestQK3aGuphcKVm2cmJfGj2eNPv49EwPG7UbwDkHuswWkiVVT1Ext6sj5m9rmLxaGHq6pQoJ5BVrWhXRWi",
  "key36": "5o3prBsGuqt1woveZugNrxA18osVQmQQcWCTeC9iTLHqTbU3GQreiffr5iqWjvuccDkgrXP528gN2nxbHs3TAki7",
  "key37": "3Y8wb2G6Z8ttSGRFDJgtR254m1FcUwLo74h9yWhMeXYeCSc3KFWU2BbQaC5TsbocjNdk9M2G2R3v7Yjz39qh7TQ8",
  "key38": "5HEbGpqq13fQJmPW2pKdKWUfAJHeJNavEbLEURthLhZw9XpL8fQ7mSjfAfsU9vpjCdje1F6pMTncHPNFKHHC2mqc",
  "key39": "23XfxeQuMryYWZpVXniAMFS2gkBdAXUX21djFPEv3hZP8zzuRSuciKaaQPLUHUcK5RuoXL2DjMPbCPFfJfzPTyD1",
  "key40": "3Xhmm987ys8tYune9z3oeqPRoCjeCzpEgEfamuqjHQuwJkRSChCdUBDYuxQhZKvQnR4yMKQE7oniK1ZxbEcF9rPE",
  "key41": "8q6mCgyXdghPsxUTry88AvXFQxsLSXfxhQR8eBc3eKNEXbqJNX3mEJSiL6xsKEaPh5gjLuTy29nU1rT4mEXSetv",
  "key42": "4EJw7YXpQaaT7vmM2PM7Vh4tgAnzXYZWXcp9gPv9sbgGqFT19wYPF3xvXpmVcgJnCwxtMiUKTuMK55ZRa4Nvz4sj",
  "key43": "3myXTJJpAgBArNp6YuzyiQazazjX6KJvNtAE9dPmJ5waYZNSUxP7yLPTrjZBG9GXpyEgZXBbqS45E53ppMvdTUcC",
  "key44": "3fPgWiKrraKQeZgvcH8xZ3d4ifjV57xpujEqqU3FAcDaS8g9TXDdzASoXRAPgKevQr7Em2Ds6Uigjcx6Zg2fNNSx",
  "key45": "24KxdqKQ3PDTGGSyrUgDE5d1v2kvGeRqBQxuBoNHomVp8uZdFa9Ed9gX2AyKyAK26w9kzxLHBs7iKNcU8Pb8BQxx",
  "key46": "3r8iskyepZ6JkDP8itgniGcM79yuNxnspNdNJ26mDG11YkrQ8RaUWwRknfHFM2wPBP8sDvzbi2ytymVPpn1g7KF1"
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
