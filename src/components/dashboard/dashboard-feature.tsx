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
    "3VepydqasJE83txEQ3BCKim1RNLCS2jxNLEVKim5Y1BoTKWR9Mwcje6uQf9MqioDVfQKxEfLAWPhMd9Z3UcHTaeB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "e99vjAYYLAQEmYF4mYrNkqADmyRjzURAvVKLa6pjZv843h26B4Rxs2CtU19QYzd29hD7dDjC2QrzDmG9kbUHX55",
  "key1": "2kFApijppjbBHq81JaDxCdH4ooiKtkuKqKDw5GFuujhzJEs6Sd6Cw8mTkjSyAKJwn2U4WigsofNeMBqyii8eAkm2",
  "key2": "jLRm9KwhvTTFtogEApdDbtHFpWVGfMtnGLV4w3veyRLzJAkGX48CJwfx8hgFYWFHLoPSTTqTVfVajB9yMJQEzos",
  "key3": "7tEBfvJmrJDB3xiTKoBXcUUaB9ge3QPhGkURMSSUpPSrUqeWpg11Po8sjnMA5z8hkwY57YspqxjBp9MW32754eq",
  "key4": "3ubamaqjn5mATmiTu6yu1CfKDoBhQELCfSwvo8DZPQE17fqHFSyKztLyERhRoZg5ZDijvNf9HE3Cu7ze6GqWusTf",
  "key5": "3Tf5XUkQBBUh8JBkrnLbj6S47yRR9yfsnK1F9LmCoAvAkw1Up4oGGhucfZVYoHeu9C2Btcx4p42AmsMCq16H5vku",
  "key6": "KUPNT2Cv9jTSwvG5fDdcUG1JB9rQfNwnqpHH3yMRJvHMSts7mxRLMJSXVD6GnyrTmzGFk9dhpfg3yLiQcRWbn6r",
  "key7": "DuZPt3kFWsNgkMDii4tN6oPHiBu25v2nSpdqCLp4iQMiug8Bn3eDt4d83iWXw5RBJbcDfuCfJyQdzw4SQxteUx4",
  "key8": "478qcVtJiqehFNHsEGFzybb1uaJhVsF8rVd3fP8U2UngbcwAiw5iD4VRu4GTG3otGKq4bgxYuqUZbwNTKRWHi1PK",
  "key9": "F1t7DVKD1z8dZwsj1bgSz7CaB22La86QunkKtgkUFMD7QnvDUcokMZouixi3TEmtb77wYkxwKsxAtEiP1mmFrJd",
  "key10": "5cVxCJSD4mfmbUUZUQPbaGja6wWj2EKCLQQkKbxrE9C2aazRNKtPEEfipA2u1vkWQo7grzBj8WRtzptpntFgcsLi",
  "key11": "3o4jNW8vSrmn7cG2gYB4xX7AzGaT3TMrm3r3gszrAXsKmqjxCv4NJJTLv9Wa8wjaMPCFUyavVsgbxhh4pu6tTEBZ",
  "key12": "2Avc7E8kLL4nqMi5ZBEMotoSjDZTyBb92EdB1sn4MAjH3D1GTuXBMJGbPRwLHNab5UJU3xyEEMZ5dA7pcykVk8Pc",
  "key13": "2gifXvMb3ZUsxMJrBLMwbWc498gA3ddbxr2H781ppLRt1E2SjjENFk7vPDJyHAp4hGy51sJLebTGYbLgXKW4TpJq",
  "key14": "4nRCqNY6AVGkowDoLgSyfNX1eDvtzYKrgM7ETqLMDBGEDLJcjRtwPaz2oKKuDCfhWVAUvB9P25JSkzcgcN9vjLDd",
  "key15": "4dPeCHrLp39wbQygeu3bQAcUUgYrfB2i9273xLL9jgmpAikW5Rkw9QDRz13PgfYL2GPQNxpWvLJx5f6cJxgjo5qQ",
  "key16": "4totN1sdPGsWo3xosWLk8WyQymkvXtWGnrUXtxG7TtCK2SFDucM6wgVRmQeP18DxNLed6CujsZb4gcBk11Mbk7NW",
  "key17": "4s3SFeGDgLvoaRaC5PuWj4MHMqkhoZ7L1YPSECRaJaJDP5iQhSLuw4kReSXLppV3vhgsrsb4LrHL2iVKfap2viYj",
  "key18": "4WX69C38F23MsQ7c1nGQr91ezpNeYejUjqzoAycySNVL4XugcDcoh74Rc9oCkrhHKSZ2zy2qjx2vbK6LiwfaDCpf",
  "key19": "2Z1rb2t7ER4A8KAWmQop9vExp6bkR5uy3nbGhboJhnUp7nP8iwd4uSpM3RWC5Uv1rbRHyBHySuLvceVSaSvYrBnA",
  "key20": "4HeW4yPPmNquxodGirfKfMKUFidDGbiFWQRkaiT6syScKdHKY8cgxNJrHvWKnC9Lf1MVKPM1LQv3J5jxaGgvLnmj",
  "key21": "2gBBjiQNYuXcd9syP8cBckHSACQPj2CGK1yaqNV1DQeuXtrjEnnQwebWY9tepcmoLRXSKmz6B1bham1oRJuLHjw1",
  "key22": "64wSaLZ8CZGgoSGRaeKXZXN7T14GRXXEUuR2FvnVeRxbC46QudDFJ4ZWjoBSBXo9VsY63N8CChoyxX7rcBJv9vGw",
  "key23": "4SBB9VXkBqdVxrjC4tzUeacZDRKDnoKeGY1RK4Qs3DnMxQb2ZqKZxDm45gXQe7KcNpNX2WsnQSArAANmmEEFrU3G",
  "key24": "5XvvtNybadT5Sgsfg2eUbUREFUWqPS1TCLEkA6jEtEjfiTiqXDpn1qGTiB87857nZBmXvGXh7oYfAj9qTWtkRAze",
  "key25": "3iQhsG32CcsbgijkfDCUX8wWUmAi5HR35ADjCrwV1yWUaRTq8Vy4NQZeQs6F9nHN1AHhnQHxD6HVLK4f2fQZGULx",
  "key26": "2jNnUE2FjwKwn6XuvAT5mF6BNcKtxHgpnG1mc1yux38sFPPktiRxquFWkWfLdzQbC6DqmzBWdYrP9mXUJvBUVK1U",
  "key27": "5tDuQtFs1NKxDpd2Ze9VUevYtzUNVGiVoHSwDTdWPZwfvRUNJkUpf5bFWk5WQDqmFMQRsGQpCitWysPhsR1pD6rm",
  "key28": "zgGRX2iuq1m7EGY2GAZjGZT53nN5Rsc4avvC9szS7iLfjo778RyQD1tkaKmA4ckszFPyaDu3sKPRGbwNeupa4Hz",
  "key29": "2caaUZpn1m5BDHKPKXU5yZM4KNL5o1ZVAf3Z4M2ZDL1ufp9ywcKv3wdPKaQBf9eD66S2AttHSajSWiPQ4qF54Z2C",
  "key30": "5ApwsULUPtU2SfEsbfvsuNEH2UxF2JNU8eyP9SDD6GMd7ce6H2mH3e2J3G4wsQSkiGRFDPmzWmroQsUChR39CQBN",
  "key31": "2rExXqM1NK7pYRn8T5kwmFa7uwFfdJEctc7Y9QVuTkQSXdRAjgomGvbfP2HL15vxmNAEVVodkVNjf6vYCwF81iqT",
  "key32": "MogS3NxzcamKdtKcZiDjLf49K2KWMGjSS718Q2bBxW4YWgDakFSfMuEYSSkhEDM24MmWq3nqH4mDfLnR3ASZjLL",
  "key33": "5UjGXuTBm3bxnFZVhpPNUbTW7ugKVALH4zqMHQsxTerFLWkPNVc1fvy3zY8UxcCRfsS3mut6fAtfSYi3EZsbRuM5",
  "key34": "5cr3hJZP7ewArpVMUoGq38o11pGMESpYH87rNgJKhXfZNEvCDNXsbgCEZGjsdJZTJ7vEhCipgPcKX4ioQ7k3bEWo",
  "key35": "4WPdA1gqu127W87zkDyM79HtrfmyXUo2nw98HEZMR5HXAJ6cSwMQhEjTQEJ8X64pAVJmUffcVnCexET1a9AR117w",
  "key36": "QzjbXvd8ti1qvZKWQCrnfbFw18sYSMPSEz6ML8GAAr63DZPxgVen5jTQUWh4DcEY5eykjUH8AXoTSYWFUjGLxue",
  "key37": "5vPBMAx2T8d4ugZ26mzjnsqknyyxXZrzGEPKKNij51BwTzV7d7mR4gAD39igMD6KvnqH4AVceiikw2PFcwPo9Anf",
  "key38": "4u7tuEmJNnHJFs4H99x2Yy3W92vMQBPpuJTmDxeZ8t4Aa8geQLAmLW9asXDJhPncthMArWjQUyn6kn2KG88Hu9hK",
  "key39": "mqq1vCQGV3QdRNEQwMpKoQzt7ge1gfCxgkJEwsePVWJbvXTN22gx247k9aqWkfvkkhgCMoSmAmvaBZ1SfZggw12",
  "key40": "Sh9MohzbE9E5eLvEFSjuR97kaJtE1ba3CFTmVTEqEUkJwBkaTYofWYWXCViuAJ7xZe4UgjN71cdX4MZ8ngswMWC",
  "key41": "2TaRHwmqDmN31XiPActaEMjMJGvmjqdLYzKMhvH4oyGe9D3sVcqPrPA2PiCcjz5ZhjBittjiax6bFj9d5WYPVmzZ",
  "key42": "TjL4fhW2rpySa7xRK6q2iknCbxba9MHkwGeJNsShpc4nruknX5kqYRkLQTNcmBGR8JSkaxD2rZQTbbnuaqumkKV",
  "key43": "4HDpABZTqNm5eR7GgtMMBzdWHSqk5g5CrDGAvcBLmSCg5wwAhruDhZpHhZwRp5uzaieGsJsRyzgHHJLBkMr1JLXC"
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
