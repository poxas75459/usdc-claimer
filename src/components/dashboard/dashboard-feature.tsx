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
    "NRwFLbvLnHoSNnLJdGToTSrZes4vAuW3yT5tH4pSXBcoAQNEswfrhvX6EndZpH4SRCNR6xhXKE3izt6QAn9NPew"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MwyswehSbWfDJ7EhbZg681L8sEnajmMLUarWcv1XiDd9oZ5w73KMK3DPdud9EEsvQ9BvHhAp3hoCJHVjFtyQ15W",
  "key1": "KYcBSBMDH7jyjmkXeBjeVoU4zgUx7NR8Kd9NwapkmLHrDoFc1zqDorX2TyexdogpTh3hnk8d1cLU3mXWN1vZRng",
  "key2": "3XfrVwS8MMrk6dYtrUiukDY9iKs9Ay1Krm8aSHTCVcSR9sDVCXPaPTjfBZtQxukEc9A2ktYBNmH9mXgCo2iqj1Jc",
  "key3": "43qu5sRAKdPuuCMM3TjxxYuqSbYjSnJRzjb1kWmCjQedFoAYjrBKCB6sNoMBApWcaAfKEYD9QxBVjzmNTzJbiMqs",
  "key4": "4244EMWC3yH7iEhjTBjCHjmFFrE12E5uBeU4hUG9bFKGcUgVAkyN4ktm48kGrtC4SNhBPMBTKUgwSPrkPaAoEN8A",
  "key5": "3JQ4VXyzg8EXYdGvtx6Ms722hNaXqmk2mdpg2uNDGSQjRqvCEsUZrJmhCs57A8LEZAQCC2NeHtUTyJntPojZuDVV",
  "key6": "3XuDZzL1jv4vo8MBrctNaC6JoZzKNEXxHexncLhr1DPMYEq2Y3NxHWFtDmvKFuBTxRS1sAtaCqrw8FQaPp88wL29",
  "key7": "hrowFDtA7mDHUGiELrhQ62znvFvSFbrxfZdW61VA5TeZeiVwK4jWotAr7sUu24BA2RryBih36YGCpNpfGc4d8Mc",
  "key8": "5CihmFtPPsLoQUHB2ZALTc6GEBqCJPyv8Nib3Fcb6gN6QzvxKCrpWAERytsnAbxxpenmG8BKz6zVzt7Z6pBfoiaL",
  "key9": "uW7EyQpZuZ9BmvSZokQTMtEuWP7nPEEWfNkJiyKUmVYhoTEAWCwdgQAs9WjjaHm5ZbjkkDCHQfkyqLMSfuPCQTW",
  "key10": "3mZrm5PYbgJihFD2qsnhao48pN6dUD7VGXsvn6PE9bKcpQnVXHeU28iTZk8YxV9rtF5EM3AzydwAYKtnr3i98ZJK",
  "key11": "5Nnpr2BzpZAiUzRr96qKZ4isnidiDv4MPqVAAXwzRJ2ZmS56z1pToosCTxG1Z7EJKYtkZK41r6BKggwpy6XdRox9",
  "key12": "4oMbLmsdczf2zQcxLhnE8Pd1dbkzaL6ahDNMbjmCK8YwDWBDxuqerZgKLADycvkV2K9qvRoU3qtPV262F1KLcQN9",
  "key13": "4A3CuMBo9p1MnJBLGHwC2EMmZbYJiSGDtbwrnMKhGCQuzVavf4ySkTTMje8Q96hQCzcB9TwKCdSZLpmWxb8YRNmi",
  "key14": "3ECqezyXPt15vmNH7yrfaGCsBy4SK6qNGRcA6QGKWe8AbKx3YpFNUx6xyf3aBc62o4BKk97qBCURHXjGyGSajQRa",
  "key15": "4j4CrHFAE28Y58yBMgfRLWYvsXykMNsmAdGy9KNFBP13igHtbC1YTcxdM4349goDhc5udpxuVZxLgb5LMR4dQ1ZA",
  "key16": "3uxW6v6191GZs8VLDeVUrapeob99vcTUESuPQniRC3yA5EF5fstEaZQN1ebHJp7sGAtwbkJSKkiJwrgNqKCkM8o9",
  "key17": "64SFShX9nivH8ZbST1vR5PDAVDBAfYXfQQWh2rrqwJcuqwoRvCPt1UVq8BJHXLv2MVjC1M5wiX3MczqzMemvLqVL",
  "key18": "2evGuKFq1D2ANVuYh7JQS6QK91TKgAcXeipcTwN2nfdADKB7LNbXXYK1zov4d5Vd1tmXAuCKsyT9nnucLCjjkaVZ",
  "key19": "56UigC2iXd9UtruMJEM2Uw7q3HSWJ5XpMxut8nj5dj7NczTPjGnzke4tH2XXpofGncX8o9vsCSJ8r9rTFTQuUqZp",
  "key20": "44C5iY1FXHbaHEfECfa2Fny5PVNNNus2XDwTATLUJPFm49TyWqaxLpUmFskQeSaihAfKb9Ze3AVewYXbpehooCPG",
  "key21": "YCU34YWrMK2n1EQJeAxXVMqefKecZdEarJe1J3P1vY3B6HSfHPE23gMde4nXnLPXey4UihAMXpLjc368o1eRgSq",
  "key22": "j8CvtRdfYDuEsanEXJq3iWDkGdimwcfFVw12PqYetcuUDwKrU1oxvxR6A8Qpo7wy8HxsHoF81TbBsSLSvpg6JC5",
  "key23": "2L4f1EefubMGoRMDsHqLvrcqeCi1yBW5BeDwDwR9dL7LYYTo7M8RucFUWbxDQgm5hWhQ4mSXeh9sSzeu8XA2jRTA",
  "key24": "qmXAKGncy3AQBGLs1asiScJVS8jEAyz5keyCsSy9zcuAL6qRn8yHED6BRPUDgjsLV8WMBF9aHtTQqaiBUzBwoiq",
  "key25": "5vnJYuGSdW8qTGaqRvnmRUUtWRjtgPmPwsW3Txxwhgmx97svFUVhRgxUZwsaRJ2wnccUB8tDMMBhvCPTbAC93kt5",
  "key26": "2ya1oS8JAcvsAGDqbVYuaDXHGL2vVDs3F4m39mv5xp4LGxWVi298JHL9zkaJ1aVxG9wtX9TKY84ZZNMzcVNGw4oB",
  "key27": "2rcceZXckT8bpVFBbsfii6PrhizeftdDjLzGCPTkM4mC7LXDiArTooqQemCDRnmgrfnK89bi8GF6XAuqMscaWbqb",
  "key28": "SUNjY5Q6ZvdEZYmMY6DgFU2w9TUncxvb5tuc864whza5b2uZhp1pDGx3nKECmtD8VaMHpg9G575KL1aLJu1rxJA",
  "key29": "3mgsxAFzYfBE7RfM37PFY79ijHvAw1mpVHkwMs4gfvdXKFBXeGdW2A9WbwWqxgJMcwGc7fiAegUzeFYywtnNgzDD",
  "key30": "4JcUDZxiY1qZ2538WydKM4CfdSFsa58cRj9vqR36sJN9z751zDz8niv6a2V6z5jG2vTrU9ainpBv6NemgQscsT1v",
  "key31": "3qAdntHdQLHUN2Bqe58PGocjn6NhVeL9jtQ3j32PbTGGzHMxpdegYx9LAhXfX6WUR1QcJ1hhQyBxUEBXxuq4SMRG",
  "key32": "TdFKXbVKxAne9KHHMJCJdAF1n1iKB2MPbZRxv4SiFnosHayeDtk9KeCb7vKvR1S6mgmdtuPLdBn3xhPXGjW7trC",
  "key33": "23L9WpcYZAFqmCGRBM6PWDNCQv5mHMLDG4EHrhy9wKFGZLc11xNbo5YUsQ3yGhpUaZ124MDwExWtTXAxQMmcJUqH",
  "key34": "3ccuHVmyxCcMv6u9ba2Pu1q92NgpQ7bAjL5CzSbajFAv3wfrEDR3ewUkxzirb6eXSoCJo6KzRhN7QUkuE4s8P92A",
  "key35": "3KPWAMQTN8TEizkYb3DhJRfMe7hsKsytTZQveETTy6NxYsuG3sP1GXoVPikc3Qbs3Fm6j1YNnmWojxFdpQup27JT",
  "key36": "2fXY4TMGpRYJPE9Lsf8wubJGHxwXXGG4Akjd8a19y2DRkhpeib23gEV8mE7L2yQWZnUcDSAF8jLY8zrS2wtcYKqM",
  "key37": "hyLF2ditsEHMD4Yv1ZXf2HE3xZ63A9cSAXQQSYWvb6VoezFSLADvJw1bXUsa4pr9TD7YxbEQt9DZBQDSXJRDoqZ",
  "key38": "4NkfpbsZjoFSd3DYFRjErSqSZUT1fApc48jcuK5RX13wq45CKdVXzMf5LdbB56zqphB3y45aqfErQSj2gTPqonPC",
  "key39": "5jaKKPhQcnzzvtYe7MbFszc8DXVouHpENBCSvVVABBy8v2C2K1T4sdDowfvXCo1dkBuUoxcVYKrbS2ficCBqf5Sn",
  "key40": "5yhgkeX2Rium5imC1H4S85Knm9rToySCavFshmwdFvwcYmKAVHs3hANe4yFfurGnfDmsGwxVS2fWRhNTfskbk5MD",
  "key41": "g9QMUxUQ6yhKsHBAyzrFvwuGFsV5MzjwTwF9BXyLfAhoPm52bHEVtoDNdcKdLwvxPQugtQ1hVBDjBrYnu5t3jDR",
  "key42": "HL9gifQWK4KNzV2TUubKewR7BUX6DEvjy1k41Trpni3j1zyXuMQEJ4H8UXq3JPFT34rRd7i7HyqQf9kU9CaVM3X",
  "key43": "4q56fA6wMTYMkkTnWTDRLxdpiS6F8Hu3FZ2AuAxrnMxwjUmVoRbfCiAkTBogU4W9J3NEiExNc72FtoBx4prAjA2N",
  "key44": "4LG3AJ6ZJcuYuyn38WR2W6sx3xkCTQucaz5HeJHiBw5vCCDpb9PEnZNDT4fJACoNeGiP3m7UegUSBh2UdizG67HJ",
  "key45": "4GwJpY13t2hMW9cNSH51T65BySciMHq8a93iVmUv9E24kHde3QZYWnurhgfmKMFtPF42UPJHXvX4kZbi34jxLagK",
  "key46": "2Qv3THUE7fRW2cMiYXiru4XSLHPhXojifyK9BAuFnaQ4UEHubwb2rxjzr1uzhnD1ntKckAP1czR4isuBySAa2oqX"
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
