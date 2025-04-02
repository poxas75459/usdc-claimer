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
    "E9FA5zAjLBs8cUTExQFsBU4VXLxDhpwTxXBXHyogXMFXJNqioHyVzSDq3ZZPyfXHNu4MG1VHspTMt7X2AqrWzYs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FRFzazvetvuZ9VoUQHHTFoJCayFC7wQ7V5me4mcbHZPXW74v6xUgdenBYVMsrtinPJ2Q6yvUzooytqWGbgxZ2WS",
  "key1": "41fRDcoHtm4Sx4WLRZ7NbEhCRxTfYQ3hSGL3B6F7GpnXwa8NeH9t6j9oUj5zaeMtx6u5Mq1WFSqc3tpkQ2FBcCyB",
  "key2": "tm1kKNYqkKQA7apLEP9KYUoWQQU77BfpVqJgtfKM21iz8ngWxTqkeVUGsA5WJeKQKSpNmXC47LeDEpC7NgCyEoy",
  "key3": "3kHSB8rmJ7QL8FRNTogtvqGuNTQF3FSU1f2HjSdG7LtFVuMAxmZNafuet6Qr35Z5N2yBYutikHhVy6gd8WJfcC1a",
  "key4": "3mnwrRX6BVM1Kmeqdh1RThyoKJbvvDTjrjguLr441AkNyL7KVLMsMXeD6g56TLrb92uipmCHdJZEqk6PLzuxbfgm",
  "key5": "54bKxKDaY8wNvNnNjTCVK3w7ur8WBCmGeGbSUPNE81JSNYAoUshHPuHxrdowEZbmp3tpubbrgrm5ykHqg1RVit29",
  "key6": "5hbHtxXtHPTFjniScGwsiYHxc81uBCUAwAM2LG25jN2FApeaHcnty42dcfeoZbqSXGVJ2effrFHq1w3wbKm7p11H",
  "key7": "2MmqFFdBRfLbmZDkRt9BruRoZ4SzWWSqkoVCQaegeXDzerxS5yEJn2TU5isVZQ5EPCuedMWL5vNAzUczhnYVGvJ5",
  "key8": "5T3eZxna5RTrsi85R11AMRmAnDys4jU6W5iXpoH5Zh3ZjvvqXkJPdMpc4BvBCbVFMj7uGNE8VUZwvjaPYD1Yx3CL",
  "key9": "2LvtAW5H2g9s5nQvXX7ZiJk7cK5F6dgi6FBUgsiiPjjHR26BtCyyqqon1MX3bbvXZZdFofb35Nm85RVusm8BYiTd",
  "key10": "2M4dP9ZusspkgvVZL8HGVXxEq4QGmEsF6PEHEtY9YJB2fCqws1C7ePF1Z3fGS8khrdx4YYz1r81K3AgYqJAepgVr",
  "key11": "4MkDzugq6WebA5M2ctfexbKn5GJMMaPuAgbovrGt2AUJVXd11GjymwAMBmozMiUMRRB7EQbaq9eq7LbjTsBvmGhc",
  "key12": "59sDfcmquLenEqedkmAHyePGqpLieJreynwWaTXA8xjj96HRYECJwebXNAmUUqm7nwUSLaT1WkJCRd3XTZvsAqAF",
  "key13": "4VQeoiTpfA7K9GgT7nDNpWzdrZDbc1bu7jEQUahQ9R7RnEjr93ZdMjQ8NydVitJpgVy8kM2VPrywbQb59ZU8kwuU",
  "key14": "4taWxzbmKZSjKQQGdTpqSUcVp447spaHFoAqKnFPBoqX7HyquTQUgKK17zYqrFzazDQGJ152QQwDWi1vXeM69uVj",
  "key15": "47B6Mvq1q2s57y6Y72GxC99Qc9KEDS5VrqaW5vBL63WvcnM8DtRiB2CmnEzvQu4rKhBrRE7Hghr5hfH4p1R7Kmve",
  "key16": "64NXCm4SMMuU5vQ1NQpeWAne1QxhzV5bjaxq1zHHsVXqaLetMDrRwQmprADKEFPDYt9c3jxwa8LJ9CgBraqVmGuj",
  "key17": "3Xjg65gUj7iwTZvWTLTC8v9v7adV21UDdeu3uCcX7gywfrpGwJ48oR3E6oaFVrjGZba4QgDASBNrKijyEYiTSYLr",
  "key18": "48amZdVS5Dr6PHmYatUfhBM2F6zUSzyGMKCfRkF9K31s47xKbzBspGMRKy2YffYsbfZrsBW9Nk5p23b6s8rvXGzS",
  "key19": "2LkvRPai5vkqNB5AwxBD1AZwUxvgq4NCxcwn76HVNEXYLCH4gpUS6Y2nN9D4rYxc29QkE9g7Q9eEUXh7Jh9AUL3j",
  "key20": "5H2goCjxsPSXT38vFYTKnhe2kevrMwiun4kEeAL1dykxQHe7mJ8QMwz71tvUc43pdigzgJiaViwyCMwDd8rmob5N",
  "key21": "45h3xt7cDEDJ6Tk9q9Km9s7J3WbkbhfdexMK9bGpCTG9isyminhQergufeoMp9KodTNFYJmm92n5cueF353Hj4yf",
  "key22": "2v6hiHcbfnrNytJyFcoZoFxbNpcJFLD5xhXU5kpC7H2q2RHUdYQyd1k5K82cFfajCzhbV3C39FpLDQhpZxPYnB72",
  "key23": "4JceiKBjekPzR6K8feDGd1xE2RKXUPReFSATL3qY6r1bmguoB1vjbYtVHxwZsq1d9g2gQccgZZsdAQqNWdNVKXAC",
  "key24": "5zDWezLDWpsoo8SgH9wwJMfaxhjpMaGqX4PnLUiVsfMesSdSbQFaszPY1V7WQq84rPX4tRB9aVeKM9YVMzVvDQQr",
  "key25": "K9kkKQWFaDdEBTHKK7THLJekQWMoU67gTGyQZTAt6Hv52xf5o9ZjzLM3P9TZ6KfyzpMUtbYotMFPKR7Qa4uU5by",
  "key26": "2Ud2U68sYeJqcVdHAXGLQydCPepdf45XvFc7XQrifjg5bfbp7mcsr5HjLoRx6MYsb41suRSBbpbahJgAESAHzrHz",
  "key27": "5KbkpT1cYYxEKFsuiojgXqMXb3bAM5d5qbwF2nAGht521qn9UTagJujF8jZ984gBcv3ARqHut4HEzDumtYqh3Hzf",
  "key28": "Q39XcJSY14SBN2vF9BGmStuUDyQVnoq9jP5ntdjzP8ArQwkvDX3VP5HeU2RrGkqyAQAJCUUsMS1K7fBmvUG8spq",
  "key29": "5dPjjMFi8XowHQqD1XSw3WqTms9tCtw8AaCnugffZS4qtS7UJTDYB2ZR6Rub9JP7weCgbMSG4EJXc48G19CakkLb",
  "key30": "mi6qRu31FpMyrsBUkdWYixynyvp2LTqBwkpSoCegJH8dj2FVv5BAXBZKkGPno1xndnkwQffWBM9gnMkiyhyunm7",
  "key31": "2rYS8998XGmMe6BmsZLMyamwDMhaK1VH9LgUwwWnqeutNEJHuJYqKJ8gNcu4MmwLsRj1k9KwZ4EPTP7SCRgBTgjT",
  "key32": "LDGioMqNLzA47b4AUjUvB9ofTBhtgSaNdmm12CCfuKi1tMCpucPWvekWpoFS4P4vMXd7BXKrd98BDaEiMMrQhs5",
  "key33": "P43gNuVCG8YFYg2yyjkoKZggYySm3aEVcAGwWtdAo5T7qoqV46AgwzqZaLdfAv8jXE5hJ47HbDDsc55Pj9KW3Bo",
  "key34": "XbKLRH2v9H8nzfL7LGQpavvLTVMFwFBExV532PNETWyLwP8TeVixRyNct69kz9o4CkY8LqSymHLh57qTRu8wRem",
  "key35": "4m9WRzNAzNCagC7aQBja6XFKRLHWsUzyM7kbMFxtq9Q4jvzLTHEeJpFYijBUQKHLJuQi5LoQnMFgad9uss8JNium",
  "key36": "51ps5QcZCMopoe9kX4x7nrZdn5QrB9oJdBGtPsBEU9y145nGcjtXYZ56Duc5jprxfCpxTtDRmwuQzz1in46Z7Z5R",
  "key37": "4s56h7XY6hgZPfCDuffbhJPNDRKWvabs6rXBx7V127y8V1BxQyEfTS2VnqD6tdXFzkzCHfbLvwvQ5iABzAXx2K3M",
  "key38": "SZoAUGXnCUEMUtTSFJq15jct7oxi5hG75TN3mTBVuyru8m3cXMJgSVUbYaxVKTQ93GHCRRjGLeXV7hDCuAPEvsi",
  "key39": "2qWn6q7xJBw48sZf25UFyhKTUf9VqY8waZFYDrUwSjveWMiGYxXyWbbGKx4LJhKFuSw7Aabp7vV7P272bbv1srTs",
  "key40": "3ourVbxuKnKMwxSQ4dturgHBi9TV2VtccHZ4sW83xA3MQdJM4Qb2vfqHwj5uFfrXiPfALwvJKp21PdNPatED5ya9",
  "key41": "4ycWyf54SHZ4vnkj7jFz5urJu3e8Ho44CNubSpotS6pKqbWRKDdzCVzwyEhUu3vn3zx4zn5YuxF38HN7PArUaSri",
  "key42": "4S6QH3KqQVhZ27UnbMjR946DGRAbtAHpHR5N8yEnu3YJcCtzorrJGgZGejtDHVFfi7aD35TSTuSBnLWDVofqFLi7",
  "key43": "4io1scdCNDi4BdpAQ7eWo3K4KfMkyeejGY8BkHGDKhfBpjCAweNmt6FfG2tBpgE5dxgGSdpiv1ARYrMRTQx56T8X",
  "key44": "4E6KZypE9hXom6wMhEZE9v92RRjKcTm3RdXy6iPupWQJLfM5maRvHkgtx6qq9zQBjKyWpKYP8amgLd4PRTbW9ZS6",
  "key45": "3cfoSe5VGTncKBVh27C4SSfGZNupCsNehEfsdwsyJikx1v7J9ZMAt15nTL2enbb9cUvZ2i6t1VTDTxULxbBa6VP",
  "key46": "5uR2oAmf4V72eWZkMPg2zcvRbyYgKozUescfe78u5N52iHfErTsqHxCjiLjUBkidxtBthNuAv7iE7stLrtmmJv6A",
  "key47": "59Tx63CNzPkBAuTZtBzMoYZxWa76ADrBHDfRL76EwG99CgNxNuJe7pq4UNuF2FnZFA8HQBdKXF9gw9KVRv56j6GS",
  "key48": "3qPPxt7FuNqBPo69PNFbrN3XzmtwKPQxnJbJTCihLs6Xvj91wc4qZ5DahofQRQ11kmjcprD8iSahrxmcoWZVZT6S"
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
