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
    "2cs4Sdexui96UoQ2FX7T6iyca2TUgy7QHuimnDaJWsHhm78GXWUNfUFm5hqo6BcWoDVwfEHDjrxCKS5dWo2xNT26"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NusEWW4nUWq69Wo96qr492gzTBrtWi3RUCxFjkKDaa7J3wGDnKa3vSM9X46Pt4aCsRwhKzxKvw1Ls2Rex77XuBA",
  "key1": "2yz5egh2TtK9riTfjvCSSDKDKqPCwcaQanYgCwwu1yHgC1Q3FcA3mtD7MeY7zaSi9bS72Rc4gA9qpKU2eGtuyY9d",
  "key2": "2VCEd1fGzxDegNKVK8sCJsc8YrmnGMhRXPCWyaKxaw82szQiowpVnDXWoRxCZva8r5yA7ePwQ37VbVmDZFYhdS3o",
  "key3": "33JMUK5f8hWnvy849CMEPoLdFs8wrdgCRpvt1qi3e4kE68uwExSg4HVap8fUzjBFWSUo1i7nJe93WAzoZs38o8hq",
  "key4": "5ktZLiBVqYKaWkyiYKKLL3oSfHFpZjXCmrEgTstRSYDDPq9mu8tA3YsfTFPBJt9gg14ZqBTX41e5rEFgM48XRW4C",
  "key5": "3fSPdfFKAYnR22S2gH1NFKJ4kySZnNjiHQSNMc36KN55ybMQiMfd7x6oQMiD4ADyW72VPvbd78buLEdyiVPQ28Nk",
  "key6": "5CyJtXaqSznwXDU5766KFK3md9YX755KQQyucghvV7XZZdC9vbQUR2WyixrMpA6XFfKzPvyc2W1dve8esh7u7eh5",
  "key7": "4tmoMexDP4Z5YaA6p8LGN6X56FbJaNLL2aHsDkTDPQQGGVqXFecZpaw16uvNqosbcUVRWTtVKc55VxXzr4zZTa1R",
  "key8": "65LBJhgVTGiM12BezismLHkoNF9TRQ5yLK7WfHN3JyzMXCzwMX7VC2YYEvRkD8RMgyjjBxGtEAx6EmumZv9Snhm8",
  "key9": "5tAQPNCJXdmXLNuJHGoUNCaTwu8MuGYxrcgvExsTcpZJzSa5V6RHM7MwskyNubSbadsBKvHv4ZaxAsuiBfC61VKe",
  "key10": "2PDQ7yiubtoARHoeD8Aqzv2GFnKAxKUrFKvsMZL2r3bxCvafr9ME78DeByCn9qAcsXFij9yxkjHZZAHdmr9YuRDJ",
  "key11": "5Nukm5VmwYnZUx9bNsw7Cyis7xny7pTfbK8f7mrGBHCUD2FzMwwA46HPUnD8xVADhTpvHPMULT8HinQvP4cYt2eq",
  "key12": "5ReVkwGrW9KkNEwAr8SweUB31urRJneKU1judzj3h484G4RAt7WnsQhAXGJfTrmwZwisY8QdntCDcDr1Ls3YU6e6",
  "key13": "2fevVD9Gd42mCYVqFjKnubnsbCzAkqBcBkHhHyU8i545NHpgCC5NVuZNJAwMaLmsGbRYf72gvdqzLKrFPJwcHh51",
  "key14": "5SMbkS9xbF3PSj2N4YFQ1aTK5RjL6fyvLoN62qoqtR6jK1aUjq8zT6XAb1Y5CMx7xNHfB4h6B34oNJVibHmVbWxV",
  "key15": "5Wk3dL9yMeZHjbwR2Er39htztYp17zbURnxzVS8FTLDnTW4admngGbjWt4ex5trKssibzcSArR2xtST8taF6kgj9",
  "key16": "4ZPoEzkzpnPuiQPdW7M2reRoiRHYbAByuckonj879nUrH4xZAxLoyTitN2kjZHpK6f7WPYN8gpNqSXXV8t6tMDPv",
  "key17": "24CCpzYT8NxbwZtrt9FCp1VbwYcnkC11SFEC2e8HoyXn7kD79GisWsYYsG7FzDRtkG979VGkxds2Lr7HciJfaKGw",
  "key18": "9B9hAjgYxQifYF6hGWrvZcP4BVM49xMMs7VRdwGF2njC8YUPL9SVuSSdRqnjXPztnSgA8ogS2jJfFan79swfyKi",
  "key19": "4uvWRY7BZG7MLKrrmRBKkUqwMW571aMJHij8YViARJ6XrA2HCZ8yAboXyeiy3Xye37NiqvJrMifzhyjLWhoLt4rW",
  "key20": "5zCpakjEMvLQZLneqGkBehC17PvD4oGNn6Co4cdvZtfkr5qJZ76XiyDtoyhSaNCmHE9X5i4h8geAuvNPmTXbuquv",
  "key21": "3RiCCdDtTV2vGUa2VpBxiH2CwDAwbxt6RtotC6MxYVoKSNiaCXjYAtn7a9fthg9mTLT2ZpPeZCWKmdrJTgfvCHJw",
  "key22": "3STWENfuRERR1JGPqgAktjW8SZLuBdzvBjDA7ZXTQjBHucKMmEPwAkBKDSPYnWwzunNXjd2arh5xK1uHUP5nVwBW",
  "key23": "4dFjtA6yftHebyJ2DEoL5Sd8qaHqdeauR5is2FWT7mV3644gmvMEqmzv9JFk2SpZVGPRMa1U6JbgkQFcMkg7G8Je",
  "key24": "2d9vq6XKMCm3ebmYSBJXX2JNBCBPUYhLdSa1U5dYKWs99XHRVfaV6N8P5hm8ZCSH2RnU19gF2vpzLzAwzX7ZuTAV",
  "key25": "5VhuzYsbWWHBBovHt6oZgWpY1kXkpMANXEMs27RNz78YRiwUBu6yVAVFkSKvEcQfaordUMfNESdubrguMkuarJhb",
  "key26": "3cnPHcBkJ6P7AWdYhfHhDvkiuZnnVipJ3371rVTXEWG3RnYWJjjzU4mbv5ZMY6zagBeEx67y24jJ8qcASYnkrFza",
  "key27": "3C8yz8MopLeAe9BtrZbYfony9WdwAgoSdhVu4LFS2WztAUh2o7VfPkY5MMAbU4Cw1p8TF9upWinEL3jCn32fKmhJ",
  "key28": "2ZyXgcNJx6GT2QUnQosQMd1MV3wHPCFJqB4JenusL3JjBN9BKVKovtfSHN7yB2ZHg1fwGiZLNhcFnDMhURq9a8ve",
  "key29": "3cdgG44U8pCLf3SHCwY4cofAxJ39RMHbPLECZqSTurjm5sfbPpHhvEEQiCiYVFsYKh4ZdhKz5ahbNcpNbHqH6Us9",
  "key30": "5yMJLbFeYBi1TYYuoirynQfDCrFhNpTAX1M6EJVxSyTxxHAiRmPCacaAn5d1kmqG3aQSLv11YSXK1a8JJ7GEVgY5",
  "key31": "4b7KAtv1PsuJbJzmrsFF8oaFHCwcnc8fFP1qyKn2b7UpUbRtt4CWHjF94VEjPDgX19NgAhPjLniXX2b7Qi2aDFyo",
  "key32": "wW1K1sqEZ83Fciu8ZTskYqYpKbn49EoV46J5PSMYaD7wA43BnmhjzkDimn5WaZzi66mpKCFpKYPAvCB4xhobHJy",
  "key33": "3UuTbvdiRbiW2jGrm1kcY3Bt7UhwPx2g3T63xyYsX8XEvDPBgNBHdTbeKGR6iAUfeuxo3i6mwgZ4FVe1RcEiNPFD",
  "key34": "3pkfYpNKko2tpQm6Yoy7dVWTpVdcXT3zHVD2HkKRXfY8sDW7FmA8akmBqEc7UqDqSACDM1SEFhcMVDoykKiUvxBP",
  "key35": "5MipttCmghJaaXo56zorAorYCX6aM9gDUb1Ht8ENTg4mG8tiAyM1D2FSGWSa1V7AdS9XjzYgvT9PyewP4bKyhpE9",
  "key36": "3ftZDpSgnFKRduWC8L7K735d24WewJfkv18WEW6Dv2KL4QLkUqJogt39mFu5zsiGWNwRMYLqX9kPivpegTsh2Uvi",
  "key37": "57jRKxSKdsPd29aC8gbKY6jCfBQsqqjVvRzgZhGMN4XjxtajtfdTN52X4zFvE19ZLGi3nRU6RTLyQsdHeMZonvNY",
  "key38": "QhTUwEJq97ZkdRvLU1F4v5vY9nx8NcX1xmwWEpBG1AtUvzWYewAEuRkkV4LtUTL9bhoPmjoSajR5NF44hXQybKJ",
  "key39": "5i1pMwJLpuaBMD8A4GHXTQhnwbXuoJzPeaikdiBXmqwjRPnkAc9VNZiYvDxjWx7qmvKSyXRP9K64YMLJ7kA6Fuu6",
  "key40": "2mrF65k2bPj7EbqXwEJ8Zj2eaB6j3aE7gAdnRgxUmC2iQbb7xWGpFeQ4F1fYi5218a3EUM5qUT8a7D3PupLKAqYM",
  "key41": "3x4SgqH4yvMS34Kb8fJVeU5VEptUhQPpAhvBbWVajGpwozjYRkTatMchq2Drq2GzxaMnE9BnzKFjpvYXcryUd1gq",
  "key42": "aZEyF3TK3qtXBdF9t2JTQUexptWpmCd7Y6XvKhDsyPbZpXJDhoVhgYuHp6KGB6p9Zy9w7PD1jGEkynEYsKLZ1G6",
  "key43": "3EMEmVCBdZ17ejk1Xh3eACJQCDUHbEus85ANH94PikULfbTF9qBJ1VzYVjKFs43cvSzc65fhV7wYbE3iEDNYLMhq",
  "key44": "3GKqVSDmgKkAP9ho3RuRc8yyTwRK5NqSK3JjgJLHhJw532VEB4ZEHtQ3xKrte7bQTnd31CKsAT1KW465gunx885s",
  "key45": "3HFzoiTEZqCN12ZoxXU8nJYWpYWtiGRQrUtWFFvdsDQiDYtWbYAhsxM3t9up76WCS92VJ98mx6N23Y5Gud86rm8N"
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
