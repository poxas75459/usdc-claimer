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
    "2fcTkfg8yKTRKXamnXrW3pgw26rNdXE2NpYCDjuEcfUaMRFVBqMr4ECMFR6TtHVqkMzNBk1TUCB2vbZwwZ7L6aKp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oy4KPUGKyuCgM8vzdBjs1FoiXDdU6ouMkB8LVfTQxMJCe4SAH2Gdgvc9a5Lc7ik9Zf9Y3JYRwXbdx21QxyY3bhu",
  "key1": "4DTy6kPCRVSPpqVj5AVAx13gnJYZs5h2ZZFojYJ2Hx7yiwjCn4jnfRiJQ9bJPt2UW9JE1niQ5HAFGbDQj8QUbqz5",
  "key2": "4s5AroYTUDYit6VNwvStta5PkFAzjCdFBVbsx6omF1ifFbZYkQsj1WkKodwB6dzehWfmGC5eSSy5Lyzn9oRymFdJ",
  "key3": "2sN7gJ85YWNs3DZAdLQVLwMgDuFR6W39MELNgJG1VYrRiHnYKJXDwWVY91FS1gd6NDyNrgxPdYEXrQfu45vk7s5B",
  "key4": "3CLRSk6oCsvbGExW6oaTEfkJJza2TFtSDADh9j98Q4kEH9R8TJjyaRQ8j32VGd1YziWebdKG9PoNpLvCr8FSP3M8",
  "key5": "3GLV7K6sWddFpJbv72oXVtZym1R7QL78gjRD9HohLBHQma1bx9pAvvHQXvdyvDxfzV6Y8Y7H5QMQVZREwexjdvob",
  "key6": "42mYnhXMkRaiSCGJ2pvykp9psZimmF5C96TcitvPtVrthg9PEca9DPYHChCjmcxqPsFxest4kQQhYzYNU9gBHjMi",
  "key7": "3PpjdwbEudnjBUNbfe7VvUHxfD34xqghSi6g8xTdFLvZwBYq3FvVkm5soQaktpKFY39rzTTmkAmYB4AGtyqBydr2",
  "key8": "5opB7MRDKAumAJ8KP4jsH5sSq7N21wq7mJPQzhXn9Qv1EpaKVwC2X73ByffSRBKLqByZYBe91y6knvMJ7VeoMzXV",
  "key9": "3CTqdkfcLqn3YaK4QRKPUMwo83xRb29YXWvToAoMFnjb8YCTZGzkcqMxbFwZC91ioY7nR9saRfHhwnq25hkoijey",
  "key10": "5ZTez8LM3mQbMbiWUwY5UHVzwMy9KfqXSFjrAfGqcEXi4nheTAK4mqTPZzjY9MRUvxfHEWhKDWEd33LXmqQrjLmw",
  "key11": "27VkCmcmxd6pLV1DFKbTCTJmvJYajSpzdvg2PCRVgW7pA6aBM2B4JkvGhqhh9ba5PcwMbiujShZUHWqZS21ubcdW",
  "key12": "2kizxqr5YVz19gXPbtxxvH9zc7G9KqbS6Y7Z9EZhRjxEMbHAHHTvh4RTe8KGcnBsscFEjJFjmizphgf88r8J6XTf",
  "key13": "2wTG1gx6uDqQeDDTSMEMeH74AmR7rVRyEyecsof32xMXqCb88WhcgyUvpntAxJ189Hv2sVBg16u5wBSuXM2kaoMA",
  "key14": "48ztguesp2cnAiUcVVzmaNjeawsBDDBiuMLBk6nvmcpHtsJC3V1tafqvaTga8VcQG1AwR6rq9oEYC2XfGbzNDYdB",
  "key15": "9KXrZtGxGsnV9WyYSbEbsDwU2wJzmE94NFGeXfXDjjRZGEyNPVwLf8tZ5kQ3i6uPZGuNvdjVx9rAbenLWTL3Att",
  "key16": "5MrNWftq5ZSERCaRtruhjiMwBTwPJiGc6xrTWqWERuxVwvmHMnHZJAw2cvAkPne5LWd4vbTh9FJ5gQUtCyoTuAcQ",
  "key17": "2UCC1NPUDCsQNpx38Q7B6352V9tZ7LPpfqnsM5KcZAfytM935jUEmKX9RbEeQBXZ7N1Ssmmh8dDFFnxsw2bobTud",
  "key18": "23tmrRoWaQSQoQ63tjhvfpqWKhunqMhosKxMxRFQQSAQvhi5ueXrWBmCcpUCi6eALP7av3morxLTLoNTcNcUF1To",
  "key19": "62V85hwKfsEzio86gsChZXRLbSLqrsaEiKgvLY4FeNJnxhRYfE9yZPYNEaZYKYRVACWvUCgpPD2pgGajWy4cw39G",
  "key20": "4jpi9whakaymUxESdXLfy9V7vKgh4Pvvwj3xPJYq9PiAtdsbvgMaCp4MxDZYPxd6JeWa7AvajFocffmfjLH7pvVo",
  "key21": "2E5KpWmbPZ8b2Ld6buYZG8e1Ru6qzAaeL8WYg2j5sVQjFkKPpmrBLAbqoDyM9Lq8v2WzaDbaxMeZGFXScu7VCs18",
  "key22": "jf849mWkgUAFaNtcA9gPky4xzPbJCDXKMbuLwioDh9FEaWEVKe6tB7uwohxJDFaJkDUpyg4wuDyiq4RiV1FrSih",
  "key23": "2yWSaiLwR8tQqNcQbC3saNWbp5ucSZ7odQ3hoEmKy3zm8EsAYDijgPPF11dQBC6BeFgYAPUqgvcRgA1uCBGuUZtK",
  "key24": "376WJM9ccdQr4qgUKf4xuZ52BPMD4CL7V7KyAex8Zn2wzm5SNJ9ioPvDyvVDecRZ1Annkc1VDJ9ZyaEVu8UfvPdu",
  "key25": "5uM6E3YphUirn9knz4m6REFhBbpE7FMUppwikv137qtL8WfdcwaHfuDzcfCK1jgR6kS4NZh5imPDjGxUeN4p74pZ",
  "key26": "64w4dDSRah4GRSysN9FsMn1YWTDnguwfKMSKE4Ab1zaceDZ6BupS94fK5fAgZhnpThYw6bsPKZWBCwGx6DzFtAB6",
  "key27": "5tESoo6JCRYkTQ8tFgG1fPyDsXDZ5WcV3Mztc4VcbL8G8uciTinhjgpz45svAkpm39cNSt3hNLndzQgHWwWJ6UX2",
  "key28": "2mDQ7Vk3QoXWLaN1XKmyxwq2bY7X1ZbvNxuSQQLeXFQa9pYFUi4T8BoxHJawPdfd1mkq7rUQQ5sKwUxz6zeR7eUm",
  "key29": "HxfpS5EetwQtw5ZsfWGg44EjkX4MXJ8Kypn1W2f6d3xnfRkefGQTynyvnXbCVrZ8FdDtv8BDbADzGgc9Koy7R9w",
  "key30": "5Ha4YtvJUex1gP3KPmhHo3eRviU46B9x7kmrg9ZnnRpnqpfEYQ5FxZqrtDkmpAps9kHfGQ9FekhwhNLjp3aKc9PA",
  "key31": "57ZDQg2SH54k4PBYvyrg6TS5Ao5135dx8jyMepUYFtzX7Tgt9oqC8gXMvS5TTx2YSdnLBkqt89i4skvLaJCt3jHp",
  "key32": "5tQsR9GwMba2KJco2EFXYwTk2W88831YPkB7Wd7M98stopdWPLJ31JFgQvTDDjw96hxZVbRxP2Vf11jg1WYxoYtb",
  "key33": "VqNrvWNyiMjAHjbsrXAQ3TWvNBcBphqUH73LUqvvBGPqrErbw5jdnZSbmvAEWViS94bnLKpy9XKuLP8CAojt8Kg",
  "key34": "3ZZzNq6JuHJ2PAbGgn2cmn87p7qjWzxqk619KqEYfkAiJex6a2ykXyA7k1kU4hf9dMr7NvRZvofQAC365Uz4qRgo",
  "key35": "2bCNqjaH519aHrhobDkzL93Fj3DvHWU6AvwbnQFigr3rvDK4a8HQfb8D1mbpdAC9P9XozaJP1dakrSxGmudupFwC",
  "key36": "neB2Xdhb7MEDX5bcfFzfq8SCL1QHPYGijYhhjNiV1GZVn8GEeHyr1oAc4zFYYFLdx6seqwamLQHgmBMh7RpvPFC",
  "key37": "9h3UEd91ZHHQGaokqVjQk3A3rrZNEcZmSsG9uSo8zwZ7g1N9KNYHXA1obYUVvUQVPAdh8XCrTBcxHYQ3ckm13Lr",
  "key38": "4KhWCuQAhkXnxJ4WZ8tFufoSr2mmEXhqYichrhweDP3EHiSLCS58xFdrr8Tw4AUKiS9b896BhGcY81hdzjvkmtTs",
  "key39": "28sdM7Rhu3xDBPJCHJG2NtFx47RHVj4La4j8zD8jXuP5V2qemAtBRqSaUJqGbxaXYwJ3TNVi63CSLXEE79Ah2oyX",
  "key40": "3eVm1gBqysnGNBLzaLKqBaED74gQUWMBATNbhpU7xf4pHoRSEC7uM1tk5AXugKe9Xr1vHRk1datUgKLrgz8qBCuC",
  "key41": "4zFRnYzPr69dAXRmdUkmk1wiqVdTwtGdb2Azji4V2bmEW4UMjnSN7GhNihAo1jAN74vT7sJGj4Z8EZx7gVyqgbrK",
  "key42": "3WmtJKaGP72LhcY5a3Bgs3MHKoWSDeByuf7kgh7cXMQHyRgRasQbcj1YrVKhkLX1n7DbWzAtkMCdocNMhKrhoueR",
  "key43": "3aNBLYWhZMcAuzhL6oMQRDVUnp74zoUR969L89rRiR8Yw5jLwk19DpcVKSHGy6Ldz8DSnZmauEmF6NX1n39MiQu8",
  "key44": "ao4cXpgTTzSDW6iNqxcieAmoSufzg2LmsR4M9T2iZjFMjjeCuNQPAvyVZMhuxF98vzaS4fVWeBrVRnL2qjov36V"
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
