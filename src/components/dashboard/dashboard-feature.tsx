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
    "54enxBu1p427PfymV48CLx31zkdRWhNtUfxNnkFeyUybbuu1xzpmNjniAta2e2VW2RZt5hwLagrDvpZxLQovnRVX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vZ2jiHNHGaGzKs85gfQJZNh5SdUzcLoWZVJNzVN7zH8ED4n6W8jjwRHqucoUTMUvD5UBn6cMho9w9y2hcxXzfLx",
  "key1": "qWrnoDvok4gzpQFi3Aq8f6pUxtiMjt2KLinbgsu4eUdECgE9kPsg8E1XKcY2PQ4PHGvoLoFnzGinzRHHzJeUq4C",
  "key2": "2gCWhUEfgGPD9dgMSrdgs4ZeLnF75HLa1Ha4h3hqXFibRyGrePbmxaV83UoPK3aoF82ZsGH8AKmSbYBXor3BnR9u",
  "key3": "4rAbSggw2j15aLJvnjTFTxqSqGZqxvfmjkhXe13rA6VvRBrM891yXuYe7g3Fa9R9FwbCAEwPYXhfVH4BYgQizjLD",
  "key4": "4HRKi7bbskRzcKdiKo76RYaMBPShUdXbJUv71VtZo6YMAQLMWSnqQKu8ZkJs5TEKzRContLr57v9U6s6hMGzKix1",
  "key5": "hsa45KowJJu5xHMnGWnNUkiS9Lq1s4wYPq6dQQPqgofJUtUdEqciKKk1ULsjMMBGZ93Ewjoss2Dnv7zvLN7yBqU",
  "key6": "5vtrg6VACy83pCSecv1W7aTYbWnuWpPrEHPPULdL5DxV4q4GeUZoxZh5CUgfrVMBr235uHz8KzBnfA4nzDvsF2rx",
  "key7": "31qb1fr2vsFo5RpGv815NgkhhKBCXQdzzBFZDSBL3WFKH1iyj6bFtHGPuNFQ2ZceBNzon6YTK8aPWXXJR6t8u9Bx",
  "key8": "5zACgsA6qHKRZsXtSevhjyPwgPGMY8WMELzuh1b33oi3MmAAyuVtmgxqFa7Jh7RqqU1GxfY5JTtRRot3FSanmuvK",
  "key9": "646pvYbBpTDw14xfztQzGSiBfpdK9sdJB2kX4WBRuSM1LWu4Wpfh4AT8uu4ThtXNYXS1RMFbCBC24UyZSNfoCztP",
  "key10": "i4J7K2Q5WHiDjJC8dzu7CqfyYok6wFvEj6hathaL8mAAi3K9NpcYMmFqLYuAZinpt4ddF4wvhRZgDBwLn9dT2Ah",
  "key11": "ht1mUAtV6wM6AyJFbegpJd4DVexxH7dN7N7fKTh1tVwuDyr7BbKPRGfbBqUVJfVNojg2jyK54WutFkEdZyk8stN",
  "key12": "49BYheRaWxo5ER8C8RWc2daDNyQ2NJoEryZUUmA5WjJLJzJLdeHznEFE21HdH88Dkg2WwcxMZmRS2avNAdPMrQ1d",
  "key13": "3aksT3aFbLdJZij7ndrHAZmksfy3iHY7Et23ofFuTprZBUQ3J5FhPCAR6dqgJj7LuZfTywuSDcgSrYRKQ93P4DzF",
  "key14": "2tTVLNfyek1x9qnL2aQKMFm89uk6eBsEpf1EB6JXPVMT1H1P2wiYyC3p9QsizLHHcw6rupvWBf6TaadmpHjabYDm",
  "key15": "2ZVj4byywHzQVbd2pqEnbTumYWea2f8qAz6EHrdX82Nqrm5YTADz2dCNTxoamhbej8tRiyNEAhdXDbzbo4et1pB4",
  "key16": "3xZ6x1KFNBAm2Jhuc77QYvaQmwqQ4aNecaSurMGU1rT8HZNYVhiugyeQBqGAduPudMzNmPMeo9QA3xJgStvC437a",
  "key17": "2U1udVshaEDbtrpZyZpHuUJL3n2zDiCaPjXqKECz4Mj4JgxTYQEK9k9b788GQ6ADAqutSpqVLZrn8so7vew9Wq7z",
  "key18": "2YwPUTu171wEfwzZ244sptfo17vaCuYsq1t2XpfwZV7bwdi3JZgQ4eg9Jek6HgRufZx3LXJuqnJDTQnDNqyGtNaG",
  "key19": "zBy2PR4UTaZJrvD7gx8qyGAb1wmFcRLau964MWW78kXGimvjVPakHE621a8qzN8xPk6BeoyrcTNZZyCsqAfpJ9q",
  "key20": "3tjk4NwRVuqqQC1eQAvqs2WQsnLGMeuM3ipYDa84GfikGFKXCuUfWvRufKp4PXYzzjikrk2dPC22AvWJSuRKsARv",
  "key21": "66rRZQimwFtMUhkqJrLNT7X75kazYgFGeMpS6a1bS5aeJUkCHNiPfxVakHH6Jw15xRoz1DCQxuKuQiuUQ2tM9iG9",
  "key22": "4ztdwve5ZxApgyT4vx1NYn1MhpVHsZfjYHVVkEzxdZxHzj3hTZsmAR9xE83XGr5W3aDFdHf8ZCruPT2mkQGPNwFN",
  "key23": "2j1eKF4naJoaRELUcDanGSYmBtgoENX2t26NEMH4NyryJpg1KaSXk57BiPt8ZNcBPBsrgrEmE3tWku5qvAgHCHJi",
  "key24": "5pKyZDcUXmNvNmUH2xfYcy5zyDv8iFeJyXPw6c19aPxaB6gYKk3q8Rp5h6h69eNsayf9NmWMz25HStTYJtvQRNw7",
  "key25": "3UZhxuvk3M51x2gh5Hgq6xZLruPixxuTWt1Hmsd1ZixrMEuARZhyXxHh93fAke8bzCAPH4iuiiy7uEQFmDLVJXka",
  "key26": "5zg9N7MmPMaPWAwD8w1euXjbD1Ng8QMZ7fuxFpHvqBihp5xw5fYYtBnGENzWYQzR6T1sL2eA8uFzVtmrvShstz3t",
  "key27": "2j66c3j3kpBQonrfUKo23mboiMWP1CRYNwk782EFdzK9PkhZPmWQWX3QcWRCP5Z54wLgASCwVef6BLYqo3fPth4Z",
  "key28": "31zaHwrSoZP26CSs9QroUYvd4QMcQDSThxzGbjzoZb2F2T7Y68hCRCBJiqw6ebwVgrCTwzywuJE8y8rpCQtRSSyx",
  "key29": "3X9pfzqcNxiRDwi9y8QPE2xmVjn2RnqFfY2HEjSZz11M6KoQusbJqrsVFmx1CpRP2yVnuiJ2z1mGR6MC7qBvTsDR",
  "key30": "4QswnsMUmjaMTMgyYoWZrHHKZS5xXJUprGQE2pXheQJYPdzr2yJ8wwN77wUiff34cfswJhYm3eDNoiRutEmc6RFG",
  "key31": "vZqcswixFJRHPqDoBS9fJcMgEEK81FDwXv89aXeUQ4jbrXv4G9PLtNEjSct95xC6HTC3bKaox3A6js3khLzT7T3",
  "key32": "3Eyk15hC3mx5CQALW5q4G1iCSa3zMcKGZ3gKoCkMvx5ZuYvNyAn5jpKWMAM5FDXEtFaemSjtHkY7N8QTZmKBxZGu",
  "key33": "5qTrs68aV3awSqJPqQfnfdHAbDpVtr7mE5akK3S96HraUsDh5EHweKwLT2VkGb1unnjBYUoFGzzHN8CtVWaVDBGu",
  "key34": "3WcXyLWzEY1z35ZMCoxEQGsoumYn6iW89gkNNVuZgPiT9okM56UD2UbfWhJFMJU923coSKS23Xfa9qvGKh4cTm4",
  "key35": "3EoB1FKJPWW2hkJfL1t3w2xRscpzAWYR666y5ujUTdegjy2RncAiNQTUVvZFTHcTkJVBoRqgF3y9Pg9qcLZVrgLF",
  "key36": "5nmvAmZcxkYPXdNzJ6ubKrtp3D4gjA4JmtSbjfb3976ZKhMFVKyUA3GPSWwQyzEpDvrXaiYu7er8SdFh4gRC9VBJ",
  "key37": "38jqD6Eg6nPeABYpQZTgXVAK6C1JR7fhRPJJ51hcEfRPMtVvM5G5ehBSWHeCF3am763QKAEjJekub8VttikrwkxR",
  "key38": "5oXf5ZdHv7qSgsgFUF6QDFnc3zggqrRsMgfLWZEHFZreHPz2FPSUvhqWbGjVwR4J1Mmpz7QC39tvF98XjTe4oREn",
  "key39": "5vq5R2scY4ETZxrEobP3ExPDJUsrWDbrxNjR13jnSo1HD7Uixr4JA4FnmnsxuBzyVhVxx4xuyY9543YTMjnNqbFY",
  "key40": "2h4NEsrsNE5HZ2Lm83wKjsMCncwFP8hsTCWkBp8xcdttQoqTogRpEjc15nQ1zFVQpxW8SMLc4miVV2njDk1vVfze",
  "key41": "KDC7ym9YxRLVBdpqkPYo8hUQRbE6tVMtqK3mZtp1utofUEeFuZNFkLoPwzBaHtuYmYVXdexDJbu9PYozAn9sDyr",
  "key42": "4sfEx3jmsmiktccVTTKhv5M7gvmNbRFAaVwVvxa1zrnrW3Zaei8MXjnj4hh4HB2WNdgCpYRM4eno389LBym8H1VY",
  "key43": "4qY3u8AuRHdxszt1BAQgTobTovauNZCXZw1nwEkwqfi8K6HNMAdMF8ERqtyzygAZuRKENbsnhgGtiAG4Dyw88BRY",
  "key44": "4SaBrTVpVMqaA5uXno9HtkUow47nhFvbeQ6bzAZf4ti1CBBA5bFsUnfvALT1DuUNKK9bUkyZnUtE6no34EDcMADD",
  "key45": "2q18gcyMPnDoXAEUGvXdNqsGGacgwWFXm6tVCZcsTQa1Pw6tr6dJBVZ7pfFZMm39kxYWqjmP3WvGTxTfEB7ptRMb",
  "key46": "5sCLhS5NT7FMEtFrZVvq5K5CNUJ63MQFBhP3fYVJCWZRTa5rx5XA9uZy9dakryof9nfhsKxKGvX1G3TeTzCEn5aC",
  "key47": "2PjyWnhrSXBu2fjfounE7FcWifBjzAKh2eXcB4jpgMEbLZWmqzvEhtA5S8BT1VJR8TbGxCeFfSvXzeaUZkoaF48R",
  "key48": "2c2pvkn42Po9Ya2a3gZzGAwvKLC2vXXPrKyL3gTzCnK66Yv1vh7DG1PWC4wq8UnA75L7FSCszaTU5qmFoDBcXa4o"
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
