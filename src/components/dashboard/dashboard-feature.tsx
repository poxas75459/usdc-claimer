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
    "35oitqRBDUK54M34F2jVUiozfcLZi34oLZNKgqq1qzLy2M9MTyegXKWSrJPeSESdSEErU9fYwCBUPe1Ja1b7Z253"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BE2cTYRySp11HGDQdaJ63qrPkVFoQbCuMrphWxfd8dj2VVMhdXuNjUpBtzi1u2gfWuZ9gEbk2mrNovmaXqFGrvw",
  "key1": "5iqwC8YUfHgztKXfetMivxpUXtu89dvBuEGmjdJqmkJEaRRUywtuVfCUYrmJTGYR4ukNZmHPCEfCSTm1S7qUcpVn",
  "key2": "4pbvnTtR7en9JhW6r4vc1UZ4Z4UUUuxBfvHWEqcfmV9gQjL2WCQyqYs3DajQuTCa9rJww2uRWngRqNFRk71yLeY1",
  "key3": "381UoYhb17VMHFnsCnouBjrZ2aGiUBakXfCBLhErRXAL7CiwpwmKup4oavh2NP8ARLXsgLXsg94u3TFZkN6iwcd6",
  "key4": "XPWWN18jBndZwCSNAZ5eST46QSmQdsatFKgNooz6MydZfPVXMuQTX964m7LmmVYUtCEBdVdiCEjTDRcThC5cRkN",
  "key5": "4S6V93k2CryCsmGEF1gH6uiH2LyDgPCgBxHjaDQiPvKqcs7iE7JZ15uyWmtvJrggqFEgRtdGpzqMxUWCgRHKt5CH",
  "key6": "2ZcPbWT8uyJ81JiyXBykgj7wkKfXKiLDyxmGMhg42hBGcLqMeREQoJZovyjdPszGmzowSoqGCZHraR5aKsNvDZdh",
  "key7": "5d9MsyvkJv5YKAZZkJBY44zA26fZcx5uXWezwjWMKdQwsvEre49uZ3gQLwjGR7KkmWBeMAt4Ma3uqszNtLgy9m3H",
  "key8": "3cn1CmtjtLxZ6FndA7KXB3JGpN422MxrYgQuU4omxn3YQ5sp4mu7Euf2Ahr6W8URokuEDE1bS4RvUffj7wMvgecK",
  "key9": "2uZqDueCEvATjVKbA5qPiXWwiAJUwEW5ZWScg8bXYGGoGnJKSaLJgZtpDfrQajGmtgLMopQj8P5AB77wXWVXBTBX",
  "key10": "2UJXuATcSA7VN6Zso8ri3f11AV7RzzNqdqUHEjP3jHzyDZT1fkvUu5aaHJX6f45C1q5vUeYfykKhJuZmHLAXv9X3",
  "key11": "4EAD59kRaktwjxzWbrMqgtKgxiyQSGtqWSrHxpKXtM7viemxYFgZgsiuNypAzStaKdd8ickvQSsBc3hrqtMiUJfZ",
  "key12": "t2xhPVZMjfGbgAro5AwcWYJPdQDZpsPDYAKT1rYiLXognE5T1n8MccTwpkjBoeWTAMJxt796JvPvMn5yKjf1HhT",
  "key13": "2sGUQPTgDyQzUMD7X5hk7PNu4dfmXUxb24UDKYBFgwHwRRAwb594CC89wS5NU2sQRG4mTMRYsqAAoZcuEUiC8iPB",
  "key14": "HUs7wy1z3kTMDG3EosSTK4pKqjTKrhAS8d7Fd7jmTQPSMRvCRys5tBhaXaJSkh29nVTMkccq4UHbHHxnyqghod2",
  "key15": "3GvujgT5AuhZNZCdQBPYD5QDXZBbSnoEbkS5wczU6fgt6RRwwyg4T7NmPV4AfbQQTJuzzdPeT8R4aAG3VdD8Ptgw",
  "key16": "63zVvBcqHy73B3zFYYZpK6vE3TzUZd9tBTsfqGNDrHJoGWXZSzesuX2BDyiv7Wt9rzV7axL8JaxerpGh8huaZTrg",
  "key17": "2U9jXr6U89YjwSnspDup1pRjApF9SJE19gjuzgCT9Lx81bTS5k4JshMbfPtvwECWVxNQQWF7KgDetLxjbocPmTN1",
  "key18": "4jF6qzoW4uii9GBdQwLn49gQsmALDrV2xU5a5Xs3FQLQMDx4s8Y6artHJyiTwdFZbnFdD4S2zbQMAUcTh7B1msYm",
  "key19": "2PUJd6QZEsbkXCYCpz5uNqY6H3sUsZMB2oCA3dMC1DoLX313WkH81qm5yGWGGAg3597mfAhst9t5yA9KJf1MuhXn",
  "key20": "3AKXGhbGEQNN2jtY246gnZkSthbey32diEgF5sLGykfQdn6NGGtVDMPWSsUE9jpEjSYrkryKuBCgLKxzz8b97A8c",
  "key21": "358SrcncXB88GBB3TbqaNrw682j2W4AtHCBsHtZH63utkxAN4sZ13GoxAwSFbucoANJAY5UrgFKWKPUqiXVhzmXJ",
  "key22": "cGrJKoSAybK9Ktr6eLNviSSbhacsDVGmF3WtKSdHFUEtqNPDZ7G8D6XwodwxH7LZxBEjEKQT6eScDzL9rbqGe83",
  "key23": "37b23nTuwynAYa7hYxM3bVnhLKYtVg3SKtYY24eNVJDwPpy2D21Zybpy9LpHM4GjsxRQHC8jpR35Y4uuCRxqpk8s",
  "key24": "4yvL7kXJKbFTBbCeP6pxPMWTnoXgQRZN9ypqZrx6EoHbefaituyxdPiPXYkDFS3MKcP1F2E4ozDq7Jkgyohyfn7j",
  "key25": "56iGGvovbnS4f4ToRsXdDq6nHfVp14LCVqtcdRgTYtNVRpVwREztBVkKrmCFZiM9vdKyBiB7xhuKvr8E5SM2pDnC",
  "key26": "5BXYv13pTvBvjxEdL5ZV8pA8pteg9ihANB2Jz5ynmECvUMxMMtmrxeuDwJmTHg2MVZ79hoRP1eBd7qbNogHvkSTe",
  "key27": "5HCETPtSX87u1ccFG3TwCqtDkUdC29QjyXBUDwH4XdV91TYsgFHM24i6NmzFibw9xrmSxdVoTjyrmQBNSYcXH4mz",
  "key28": "4S39bBwDeYw6MNEnP7iNuFnWDYxM7ng7TzTMJ4KMMMWVs6NTCqn4eYjPXbRQs3aacNeqKycpspDUtSuRzgAX5GSV",
  "key29": "3JbBiJ8AfXgbFzRKQJKRjvZsQwdKJoLSKiHhcGVYu4VrRPwpcGt2QBvmq9pTBaLSChXrUDXjPZaNHehTXA3n9AyJ",
  "key30": "2mpjQftkHYNzwAJFTte2eU65DCpAjwyw8CbCRXsmDhWinnqWbWq3qiw579RhhdnmcRvTHTXvFb6E9b7askfBRRCb",
  "key31": "212owgcH2BBXo14neL9bvPiD1DkZYj8ypXdhw88m7xrFNDDK8gzB2NSZgH7pMaWNYrcwVDvLh1LoUKwCYVeMqhvM",
  "key32": "53UdqEKuNkCVotcNw8XbKAgUSx6V35E5HpFYoTrbKQSswtBXtkorZVAZtANNPV8L6zD1uZeqsWfVmUXL2kCQ176c",
  "key33": "2oUWwrFWNV7YHW2kj94q72AfPXziUz7mwHpL3T2NEkvrWCETRWPhGePGWteaEh8ysrhTHpzsvj3LuyAUi5deWoV4",
  "key34": "4DUphiiPJwS3vkDfB7bicHi3sKTonGX7SjV5rrVnPtnQfnH2K6wqHZPmrWqG68spX83iArVSFf3pqpouENLR5Cfp",
  "key35": "47CiKgDQSPbmYTnY3behu9ca5PspBWHoX5pH44ge7i6EvGHKRF1wtHxaG6j9EEHVGVdCfCJvD2J6HcGKqFPptCyn",
  "key36": "2vXX5eYLqNHWhZBoYdoJzdY8ZorfVFuj6vKydpJPKswPszzZxmTsyMeT8S1q72TSHYM2WHa4KNFkC9n514KKi6gB",
  "key37": "2k6ewf8StmB2JD4HqJzhvn9vPUg66xPdMWQVSHdekD6kVY2gjhve1pHYxb38gZro3n7tYQPWpyjWJgmCssV891C9",
  "key38": "2eNn2V1qu1tDKgoMLW9KPqoEv2yRwkBGZA2u9BVn678ecStMQUfFTPBuARJaL7bE7r7HDSR92iXwUPmDd7Va7vw6",
  "key39": "53osgohN26SK3bWSD9qtpHNk29KfjgV9YLXQF61EDM8ea58sZvzneYv5cz3tunELPBipsfqhQbqkwHBqeMs7sboF",
  "key40": "67GfovNhWoU7JqD3fP1BTDR852TGxe2KNrVV3nzGqHuLyYr4SAJ4VZM2uszFBKfJHJnnY4Uu4HcQtfwpQmWjNfDb",
  "key41": "2pf8YN3C6GYATxc59gYpNpTHhAjXjrmLJfK4aJoS8nr85h1mvY6EUVYqCBjKsgx6XccBUifPeaDGJCAMZqmfZwqx",
  "key42": "4V7yjXATHZtiKYACdmUybAN7jK5NQyoiTqhJuZzAXKANk4P2qfd9RYQaaPHa3znxca7qpbYzrfbb64qc3Xcz83WQ",
  "key43": "4ndzXExBFcpyt55VQxUFtCsiYScF7N2VQA8pGStasgFHFfKvB9i3dtDAKeNiX934GnoBp2iHhfoPXQoBWQ1bwukQ",
  "key44": "4uGrgsC3C9jnRF44rN29QPb8nRkzijT1gbgvHaB3sh2rpvtYCMwrqLo8vKegrdJFmYHuG1u4RAFn2wLuuXiJHXEu",
  "key45": "32SqoedYXnBChre8nJer8jQMCX5cp6frSZmUhtugVgjwoMG4izx2sWSuGvYpKMaQEKiUAAH6NVTmkibVcatiY7tP",
  "key46": "5t5emphche5e4cZaNumPWLyDFZiJ35uQnsZgrswDqZra88DjNALyMis69DLtSN17N5pgApNozzgyq9A1frfPKpoM",
  "key47": "2BiaTP7ojeSePWVSpV4wyo89gmADGmpMnRSY2UXj5JtCQSLo3zLmGLfju2twMGhQ6KsEyeJvarbF2KqZZ1rQxJ48",
  "key48": "3R9t3qFpoBavcG63zL2qAhdLFeFQ2agZW1K3GwsvuYcgyXR38oVLodJHcQYrGVt5uwDSnCPqpK2KK1e6GdnK5F6A"
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
