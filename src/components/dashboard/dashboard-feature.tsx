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
    "2Bk42FyBDBfGUqFDHZaRyLyTA8wVman4ZAQaRMgWMv8gTfVTqPT37N2rEarg19NH2enhnAzz8aMcAa2nByEQXaZq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QrroSxfFkj4NqR9afd47DH2P92bHAHVVLrvMNPnsFk5yjCksaV4bVCjZbXjVp6ovZRDqQJN2v6LbGA5CgWnrhb5",
  "key1": "65yiM54yGwMGPpj1tY9e1R9NfX1g44U2iRU6xz6ZWGLG3znmZ8gzW2Twzmq4nMY3EvcidW8jpcqBsWLbjTR1AKBc",
  "key2": "2qynMhPF4rNg2VeLc7CNiNZZf6r9CbDjGruYRQWngxWVMTUBYzP1uTJ7zDJE4q7MQP3LKkSyZRx9VtefGqWpgJ1c",
  "key3": "3uGzMraY5iPnGBmvYeUCQsEayEvViQGnJdFdm2a95eb2eE7zBKQaztCZwvjD4FpD7esqYba2PQHU62DxabTN9E54",
  "key4": "3DE2eSKf6gCDzGnMRHrAhBxSaKP3XCrJKMGg1pZXSLXba4uYrYaKE1mPTHKWvR61qgo6CqokzoTxn5oQKX8rmJ3B",
  "key5": "2nTJKoD3VrnVTvomERXocRom7wEAa1VQYHNSTXk6tuQXGHAaTh53DmX1njNxFb3G3t4HTZR2JG7iKy3FRiXXymXd",
  "key6": "svLZ51zFfBgJZHh9yBafzLNi2r2Ye7HnNyULcak2tE69L2U5tsHAg4NHYvCkALjb1TQvDwrsGNy2UaANqRixyhU",
  "key7": "ArWAfU91EC9LheNibmKgHqb6ckbxVXoXrwJAHfbrCantwA529g32z7H9dP8AVJVZsk4EbAM7fKzgGfykxZg8g4T",
  "key8": "4cBhzf8N6LwZRkrpUz82VAatQeXLFevoHE1qrURzpdVFXxKHAEwPca2PYZ5cPmyfeurzj8tHh4r8U17Td3eXAgdj",
  "key9": "Tab4RtiF7JVzqHbN6GgFSyViWSZsHphETXpYwdztwVzuhgF8HCdeSagn9wT5541QXqLh97Ttr6XZLykyyQAc8gr",
  "key10": "4v4oejNmy5BCSe3LEF3oNbV7eK2oVfjUhAxmhuBBCuDSrK1JHv1scmWqJydX2o3Qi32pKYpKuJasM6hDNU6viHmp",
  "key11": "3mjfkqncHTsBb32qmoUgYeFDBm3PRfdsvnSE21ogCVjG8ZYVWqYpcSgW7WoHjdjF5jj7pze6vp28iwTF3P3V18X2",
  "key12": "338EZiV3fq5oi4B2W9ws76rHoY3pUJETX9iVqys9eATiAMhmtnuxsR6Nk4daDvzez5uj2MF6uRPm1M3LiDw1LMWk",
  "key13": "2XsSv1rn1f2TszuLq1y7hWcrkkEVXhBUCHAQTYDADc7zwTzZxDtw93QTJRDevYLuXXDD7oD6yw2fwPUZhXVYwBxN",
  "key14": "4dy5KffRzvHe6cq28E3hSSfmkzZE6t8oqg6tSQSFNykwKgRfew86jDYRGpEcFRb15bECt4wwMMerKWaBvL1XxeT7",
  "key15": "4yGtBoE2pQMk1vFzqqUpdYWzUpGug6AqyCQdz39bN2vj1K4gFJUu5e7BBmf7s8dAZkDygmz8VJJrrJLVfSqfwczR",
  "key16": "4s22jEpmZ79r3nhkGkV7g6iqWvsajssZnJE12ukvQtkpRFKhmnxxbVwVoSeet9Z7ZmmissBFodLZWnwWGbmP8SyF",
  "key17": "5q693WHR1HiTr6yzd14kSiPDcCJGJcEXCNPcEGr45ePjKSEE9iMjDyqw65zN9Ndc1LuLbYZ2MBFVk9UWTRFMtCX9",
  "key18": "3UjaTfwcW3hE5C8ZYyGP9cxJ4r3rhxPXsE6xmcPWhhmt53n2xu95A1rjTWEHhz3iKfwiHYjs7oWij9KEWZPfmetn",
  "key19": "3ZwE7nENWhTjZf2qed4Q2VzdrKfN6FsP22po9hxEsjREH3vr7rejDHY6hw6CwxNL5hKEg7jGTFeLJyDhGvRHt76Q",
  "key20": "4aob5KLaC9UVNBB7LjL5uw9hRAaYSjCMttwy5EUcqjgonkBVwB6FKXRZ2GKsQZet66APXdiEDZAFvwW7h8oR3kZG",
  "key21": "VB9ACH7TS9u5uybmjLcqkisPfnV49yBRXxtGa3Y5pkGx3cFhNzv2GPQqi8Fre6s9QDUQvG8xKdUTjNuPTyDSexX",
  "key22": "5K6U4Dzue4NpYibWmqGgRMEFQ8JLZkJrXSpjjC1jXV7aBotAzaBsgeXxrM7fciGjXuqwtjG5R8xpwjZg6iqvXRUc",
  "key23": "fh7GZX34pWzavwgbVLQJG8iRsyLB97B3RRYT8bYTBfYWuey12HW3T2d59RyhzCK8PuwwRRBmd8q7mS9ss6CSsfB",
  "key24": "5Ckp8sytyUXE5ifoSdWgi9bXiaRyh9nDtHj6oWEKhDr27kDK48j9LCx7tjTSz7gao8W9RzhwL1swafUA1xFQBpBn",
  "key25": "4Akv2VmpViRd8pVcdHYsemkBXrhAoHqVrWDxj6iLEnxZQbagWwahB7PqgdLHtqHyRPyXfkaVpAmuMCM2NZfmXL2X",
  "key26": "2eVWax22UQs2YP5qcMtikb3b5GkNAzxftYFe6eRYgwBvUtS7Jbfka8T8VYTqt4K63R92TFrHi8CVJ7z8894yhCua",
  "key27": "6K7pGtaBZvEzTVweV1asLKvNzuqcCSqqHgLuCurGSNnQgzUAURE4utLP5Jj3LvwcNDTe2YV5rgFCdRtCcLh4kWp",
  "key28": "2rR3BxLGZ4Hg9utyeEHuWufeDnnU4yuPHWVZYrY8woHhd67M8FXAquvnrLcCkNoSnCUUjSJcBH2r3zHCHaPCcZEk",
  "key29": "5j5utEdkdJCsrQqT4W5MBiVC6hsevwVd9k7bLLQd5p885ABRhPfuPPQxcm2bZHCMQGKh3XHC2675RMJJfP4u4Saj",
  "key30": "5zBNqvxLzy8nWekGzBTjVLGYqmFpGrFPW2R53RQJUGC4Fr3mxqNodR7zcD1D2yctDh3bVpfKLBBC1CY6Wn7kP6yf",
  "key31": "3w7fa3smHuqoBtRTNmk9fpjnsS3A4iLHSvzAMQnJi8duMgT9curpMZvXtH7yER5gAaXJw5TGby676L3fnBQoyo8X",
  "key32": "xsZDi4fFUwS4S2W6kaAL1bXUfz8voj6vUJLcyMbPoJWpjoJvcyCdTpk4cJre6MhSoCE5DEsnpBcac7bDBmeJUZH",
  "key33": "5GucZQB3Pz1xByFEcqmWXSi9PWEbTGg2xNqC7M2SKDKsY6NwWg9agG6eiin9H9ro8FJ6kDVyrzGS2QPDHaqRF5Vh",
  "key34": "5tA1u1ganVB4TS4tuYU5D3wXum4c129sTdCi6KBg1C4cjwU1RDst1Zy45oQW9a6AyCUt21PTsy4KSytrCbARhFuh",
  "key35": "63MamMMS7SSkVkjjwBqcfLa6GcCgVh8cM77fX1yRq46WWXTYBpDSDhzk9j4PHgejt2GH2koVo1FYqq2GSvE2pvZN",
  "key36": "2yi2LDg7syREwLxwe9sQXxh9p9njDHCJsbsKXTEaRFCgs2KtMRky1rW1kcefxw9sx25Go8qZTxoga3vGrjJFJK1z",
  "key37": "4So1x1acnVHqQJxTgDu38bb7uQmmaRC931aBmebvy3DWJh8NfvjQwUe3h47a158fLKS3D83yQMviTS8b6HeaqFVe",
  "key38": "48G5NJcV4Y55kbuPfPZfhnb5CZvpmmNKi35JEPkpz3hDTuSfChQ1JmT25ByydQvoxRg2KMqEBDtiXRLzSzLV3dCK"
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
