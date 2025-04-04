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
    "4at931KAC1jftEJJttCxkKzymLtq6ytARDK9wDxTaWf2hToo3pPbDZyKQaUHLf4TdyFTa9m5QRkxRGtEHEBTFA21"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hwDn7xLpH1yxGQaRJJgbYB4TfoMphvF8Po3wwYFmwPR5kxJ339bqyrEnWBAt3pESTCt3xseb3hBnZkQ9yxNN9rv",
  "key1": "4WeCR8FKxMQruk2S44zUgzLT4TWN5GZYyGJfZDZmr1Uq8vA544pTJSpi5FRNuh9tXTFX6uZeRT1snDjTvREgLpAp",
  "key2": "5TsQRtopo3RR1eYEmpw1qsumpEQ5vpYYhLfbNPEjts7fvSvAunjRd1bV3tnxZSeDFMKR6UnYL2gbt51ATbTSrZT6",
  "key3": "4BGhPruz3RuKftkMtkEzSJSR1rNMsxKQMC2P8U831rrwTWnpSNakRddMZ1bRm8qYvPUS7CyZvYMpN17WWx5fQ5Lo",
  "key4": "53VmCzPqKFNjXj9ebLrau41J25ydziigrRUoUYTHhKjgRMo8uFAZ7ALKkcrovVkUxBYXYWYg1DJnXvsb76mgAskH",
  "key5": "42UM7HwCV1jzevnSfjwFhU4QkvptSiTh6X28aXfCAiiKbivnv5acSqayV9BEMZ951ZMLwAz4ZkXhxYmEmsgEjhFn",
  "key6": "2U98nGYaAx6wQJTkc8JtQgYwpQ9m8h8QC93uNidUkByfyrLrU8mxQAcEUs3UojRjpf2ozcQwmBwpLQYfvAfGCm27",
  "key7": "26YeRFJ35tMCfKEM7TFc9yz2jsqm63BDqp2XxvJHx3FAPyHBmZZoW9eUDHLH1gHqt1wQ2UYG26HTCKWqQwMHqDit",
  "key8": "4yeQ7E4V8WeBkByp2erCgyRctWei6P4HaX3DocuLpRRkcpQxZT4FtQRGKgzXYPKgEDfx4kCEf5osSXXnEVUHbCRv",
  "key9": "2spm9wHRi92cirKneTq8j5MAy93UHr4sJxQ8UZBJFLuaQdu7sBmZkrRsLGbvtsxecyaJkyeyBinxBUTyzW4iDYbo",
  "key10": "371F4NjRaiTTmRQUkYTV1MbjvEz1YRNE5xtTe3ESHoTRurujeugq24L63TYrCYzXtthYpVKcYkwQPcxJaFLREv9j",
  "key11": "4ZsjiaPdsQi6ak8dTS6LvLfufVX8m6nbyKUdefXbh3dHxQf62UUCBQ5MBgc1wsyHGKr9ADtqsvo2mgMmzhpRAtRv",
  "key12": "2HgkPstn1726LYqJ2v1ZetkCJCWL1qBGVFsMKnsF2JvMeQyq3yeb8EQunWTgNh7qW2rsY9zrFKkbz3T1SgD3awqY",
  "key13": "oxr2vLT4aHQ2HLy3ZEddvcMcw1criSWxBeeVJsbdgscfwjwTMDCJr31E8MDmzEWQxC9RgBeSQYLUWMXh7hydPxE",
  "key14": "4CSoWj3ktH9MNwBdpcRDV6ATXxdiewPEMVzjcPUHnbgduxobyM3Ac3iJ6gxDuCR4oM1JoEJfuZjB7FbAzMqXUaVD",
  "key15": "5wuZdJ2fEegezVS3ENSYNQrvsXK4v8GT7GrhXsE3FDVQLrR1TmmxKze6AoChkpiZ54phrTDYiSXYqmRSeQgLEmsw",
  "key16": "4isvMtJcskRxUi8yffRYizErxpHEgChVcUDfPnGyK859uoRiGc3t6zra9PGQF8t2U6tnKbTCkdYjkp5hq5GLbnuq",
  "key17": "2xTwentypaqKHj8UHwh5yS1dRQG3HBHhauoyeMYwhPAbZw5Gy5RfHzxhnAZXRSsMjrvgkTt33ABuWNV2Qv9eNQSS",
  "key18": "4cbtFyZqL3JVbmA2GNicRgf7P6nWu2vkrFu9C45R2TnaX1zx13mxRdZNJdETe5VzUQfaiiwjhBEy6toqbxt1ZhgP",
  "key19": "VbWvFq7hALSEXVMEPjE47y51RRK6w633qBt3NguNXQRGV9Lg1zxBimQ8wsb71wuY7uo4Lx27QyRoUx28atueVX7",
  "key20": "3n8pwyiXjNwVRJbpwuefnjgbdyqDdyCzZjdWNxpe2WGtixKBjr7raG4Ze2UYcPaCjRkJYhSu4s6CD9cRKbe2N87Q",
  "key21": "31aLvwAMk4ZFTrdUone8jpUJfWE7uBidrNwkzzdGnSXVbhAr8BeL18uWxXxcxDGoZiRd9kktFuhuy3CxgbZbWRwz",
  "key22": "39mQVgNFNATomEXfxPnqxni9Ks9bCpRhKDkmFARBqmRjeGHaYarDE8jPA6n4yEsrLu9snJdw4cBqVsbsurA6nDRB",
  "key23": "2DCWurH1vjjzXuVf9q6Fpx7cLCKEfMjL2t8Mdm6N7RLut4SC21Rgs1eUcwdciyojjmHqS2dQj8fJ73Fbv96JK7pM",
  "key24": "3wpChfUwdDSBQod4Wqb9mwtqARdT6A2u4HaP7YB6KpJ8NYfTG9mqFurCefgbBMJ8sq58i281eYvJ4RWxYJXJisep",
  "key25": "3c6JkDRZQUnVzv3othnj5REP5bZnrtyaCNNeM5wdAqcREU1WkTCRahB9Zuz3zgQnNH38kUrCtDG13PQyEtNPcnNH",
  "key26": "2nBKtmeAWxGjvoUuvdnmLsTcSxCKtJSVKis941KNVCcxy1DhsrX8GAagS3SEusdai5dxQaMrLP41rU9fJTCquLBd",
  "key27": "4d7YYRdyC52qTy4pqj32nRhquy7G8iou1a1K34YRe27TyJuZxXNam352M9Sky2M5ev9uw4APuWZqTvR1XSqePJyc",
  "key28": "4HBsD3LwcbQkVDx16BYwx2ZUViqWTx5xPVHri9oVyG6FXswpcZXC5tvRcuCeF3yg1BYzkucDRD1NVnmEAAEcn13E",
  "key29": "35P4NVKae6xbAQF81EptTatLNyVnHjotfMyUaZzs7MAifHmz6YndNwjHhH7MhfjYZrTTNL9HReoYxvoD4WLwCGHU",
  "key30": "5fHCXUU7fxqyLbbnHHjEfK1z7ymACWQJDsPFo5zx5GRXLYgpKZDjCapJsNpLc3sL4kqgsdYGzs8wG2MCSP7fHLh7",
  "key31": "4qcPnFS4YnyCXTBKi8gAjMBsZSii6eMY31eJstw3K6r2LQk1xsDUuR9V62Tmt3prNRmRGWSaoYB3GQDZUzaj8ZRW",
  "key32": "3pUAipGCHr1UzwPMXPzcmo6F9H4B2jXBH7eq6RihEFim9WEVKr15hMbxCPScN4NRCJiRW48RRNyoj3CiXxA7ttXL",
  "key33": "3sesXUHrBwMmqkKwWabtfLrj8uWN2FeZQDRuEWSzi4xZ8XrXd9CPy7tx7VAa6GaQnHUtP88hADz3JQo1SjAfof7W",
  "key34": "5S1Btob46gKtFxhGLCZ8zUJzyYvbCxcFAH5AX6d7Cv2Zd325YHzC3xbB87Urmtc9PShazpaDDGwjDovqmM2xKajv",
  "key35": "C78kajDZeCnADDkfDXp3HbVMj7KzCTr7ngMsyMMigv5k79dqZh3JGFU1JVRAaoodD8a9dqfqaMY439m8HbxqDtq",
  "key36": "2vAH3bNBbvZxraeo15sgSazJsYMu58r5Vf8DobW36EUJDkbjabbSDYPUBHDS7ABrCNbtVadjeYEhVx9RksfUGt6v",
  "key37": "RznsByBVkdxUZTDgGR6KpfQ2uKfuC3JPnVNENJmdoSbsp52BuGL3ZanpgY7CHTsFRNEm4E6gW2358xoaVf84JJ4",
  "key38": "iSrrtifMe3yLLkTMXHzD5q1JTibZyFKkQ6jbFQe3QjGPNc7vrvZ7keXt8XT2M97TNbrLNk9QdQwk8GW2DjDMiuf"
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
