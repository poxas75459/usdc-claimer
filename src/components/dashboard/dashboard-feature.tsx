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
    "G7HCVVxzNxt7A26LoWSi7b3HmWUTBBPUeEgPgMqHixmMEbEsQveyWdWTRwSxGeYT84sHrDW8P2dNvNnLUXCjzoA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3C7wQHRw34eShCPmniURSsCwTbRWEBgpLzXU97n2mFcC3AzfwgbB9zY5S6L7qk3MZ6i2LC7oizSGC97Qp7PSrMo4",
  "key1": "4p3mATQHLjjyHFi831tF3VkR2h5RHq9avfsMhNaDpxAMh1CxMaBzeQTrzNSSnmfXQZNUTk1u8GVsHTQCfK1msPbp",
  "key2": "43HftVsznNs4DCf7NogzE3zn6MMbmY6sic4tDiEodH52dKByCUWrZ1yZTm13P2LtCfkxVwAe9XJu17YdKUxzw5PV",
  "key3": "21jykVtW8iK9XtqUKfjzPtnXxTXa4kKJots9qbMgQa1x5v19NA8Vj1uPip6YMSEfYaYoCnc5cXJq2ALjHMUXTnqv",
  "key4": "5i3vowHAfYvsYcyMUGmSopoDB8T8uZcrM8RFf46cGE9AqDyNyNfq7xj24o7NpziYmtYQzpiC9BT5DaCgrJ6BHDWe",
  "key5": "3zKHJ6YmgWa1xzMD2Cuky7Cv1cBNPS6wrGgRK2bF2BwiwDxBLaRrSoew6zTkAVCmEepBiKgjmX2KFsSXWwvQFfnB",
  "key6": "fpoe8VRb5FfVYNbcm2XHf8CweyPehx7tMMws1Lz4gZojS3zXkdHcr3EeDwhT7w3uYAupYkQL3PNGc8o5xpx4dgc",
  "key7": "3S6EtgpHcnMK29BCV6AatDTim43yTKJxtiYq35crPYVBdrbrM3GSqy1GiDbmsDicP4QKGja8gw6Za8juYxzXSNkf",
  "key8": "5x9rNuMt9oBGU93RvKBgZ1REyar26uuZDxGZ4gvvr4yqA4fk6AMEcWRrxqaEUpf5ZraMFNFf3Acyvd28F1HoeDJy",
  "key9": "3PyC8zDSX4r8tKyikn636oE5vYjoPTCBmEqBJn26g4ySMcNwjEPcHVzY1Wen5bYbwdvHrfrBiTYZBq2ULqKH8Fev",
  "key10": "3YbhwVuz7Rei2fkqCTdkeWZVwbiAbexmtPasDwMEm7VT2YVD2JutsJDYzyyukdpEmaUSe2ZoEiEhHBJBb1777mC3",
  "key11": "bDN1Ts2xjhN7cFkMeLmcjatuB73YggZJ9y5fLvmWx9ikEAeVDHM6bZRaNNh1LBXkz8EUEto4nwqs4TE1GDZz5fB",
  "key12": "58AyyRbnG3YZQi2AewS5dzpTWgU5yWyPjSHEG195wnMJRyMMP6Wh1t8dR9F3qdP7LSPeYBVN6sZ3ZYXRvJZ5ih9v",
  "key13": "26PZ6p7JQ9wqxETUnQFy1UfkSrySpUCXJxzQ6MrJACLqeKZoSvxew6wvH1vtUTgNR5sJNb9TwSBXguxBDQoGzz6A",
  "key14": "oKftXzWavk3RkhTxhAPtMKLmmhoqmZYw21nTkngKNpYPZPaovTGFC8zpHuJLNYhNuF4xZp5fshyrqpH8PtghN26",
  "key15": "2Boh92xW4RFY4gT3GnbhdTe6GJYZFKxixcJPRWRfjwi6Cvsh1i1WVTaoRx9f3qGCM6ht7788eWF9gQJZw1PyQqfq",
  "key16": "33yUAN8AdyUMw626ZUeicQyVFX5CaG5EaPggadc4AYdR2Y5Gy39diUyyqNpRtXNfL66u7gYTnG2j4y8kc8JgrWiG",
  "key17": "58xVN7yYR84gg4EsBrYceynW27s7SG7ChiLTihksnemuxcVK6gWyQUEs1gqvZ9hJ2nkphEw8d7HhHCoYvNzzjfJA",
  "key18": "4DRGSb77Z51dPxbz4LkYNdGDt7BvjbsqoTLktBwVspBB8oPb4oCqp7PX7J18KhKtX5LXZQpyDYQPAGwsRSxGbF7n",
  "key19": "3pJFwh71pxByabVzL7zvzgrZLoq742esN8Qu8TzTyvsSyJt78L2gvZrcswQZHXUSYDNPs4wQuVU8k1tuvn9oRQKp",
  "key20": "58F9crV93Cw3Jfm9y4V1j3oM3P97XyyN2w46Raa8G4zaXntdC5WQV8S2AKkjwkTU4NLnGitRM9hyK4irchh8DVfs",
  "key21": "4Rx1Q56yPW2ErPn5z5YCWqXSywJKtH4ikBXjYUz5HSMzm2QksZRJ8F96S7trtbMZUWc3RxNMbbRHDnAW9Vk6ZRmp",
  "key22": "7W3kVPNSWBDKPxZNbScxcb6skRoszbS4PBgJc6zKPvj9RnoNwuFbEb4hS2vouSd2LmqWKUhsE76iovaJWQVNHni",
  "key23": "45XYbpw3EHWQAg3nex2kNCDL4hW4Naur6TpRSP24H7Ajzsdm31FivxYer3cD7MaxLLEM4P4CFCZ4fT8aJSAL8jny",
  "key24": "3sRKgeyiFAeK75b4Q1Trbo2NNz8HeYfdBYNi54KmBPKoHKHU2RDp5K79i6Mmu6BDhFvWrVDCTaDdRagQVnJNzgDB",
  "key25": "34YLv6T1JGRzKZe7PNtfDfzMkuMAh6qTPv5h9VCjXPZTxH2LRxRdLcBfqabpHzndtLtBRVC39S7it3DWFFTq1J12",
  "key26": "2t6F43KT3u2hgdbtT4f8jD4CwzMdLKt3hj3pZFVLKsfhRycMn8q4MwvB4WQBEpDBJ1eLmw24v46E9FWJXMEZXFEJ",
  "key27": "54a33saR33mA9nFCDDAvam3VGJR8ZSrEhAJYBCCGLVFJgNuzc7x97eeYz5E8AqcARJof2iqZiff5VUGmZ97K63ZM",
  "key28": "5o44To6TU8GZgmnh39zcaZZkzYfiUqhXbv5q9cBqdWXVwMjR42ZNPNu795pHit7u1zAveFH7YEeKcHf7FvJgDCvm",
  "key29": "yXYbssVPVcTVUp7BZA89fhqHi5NGGP3DUMrKEgALhfWjdbE8yLG3eriWSdESDEVkWPTgZSNJ7xC7R6tdr7ciJxY",
  "key30": "3rChKFz1n8Aab2RJFoVVLe3GPSsfaYx5QcXyR5yjVJPKL8YL9QrFHRPX67SPHLJ5rzGa5k5qspAp2sBojbzajQQM",
  "key31": "B2nFTrgYoG4aBaKxSeQLneALBDi5b24ucsJMrFnL2fQPFMLHDwk33jNqCwwFEeLfb6iwP8TFUpb68ZBXfd1pbsB",
  "key32": "2LY8pqX2cD645psb6ZemNNxBaJddxZKWgSRpyRF12665MJJHUMF7ewo1T2Mre24nkt7ymTmg97hnseyVxhYEvg7G",
  "key33": "2we1p972xaw7bKWArbw4SbceU4h8DfW9RLhJbYBZ9wkK2BkDaZFXQGenkgB4hTVnS9E2e3NGNv5r9uy1VYhG1tCE",
  "key34": "4Z6Mdj7GtSRqtfHormSDQnzYxL6Jic7SGi99gMTjSF99ShXyDGDNwRHLXdr1zj3N969iVGiT5JRNmcEzKDWzU9GR",
  "key35": "55B2NMaiZiNN5gD14bnnQPk4MHSgYwNu2NKfVvHyQWX8PUz4Xj2zxfQ2SiKYEMHEsRAtwXQ3DFLJhHqn4NguFoM5",
  "key36": "66xyde2NV9dEus8wsWkUjC75VFpBLuBsyVtyFvQBxvhyWcvmN8ieYKof9Tm2efVrcp7diwCvBa2gPAw9Mo5YEU2J",
  "key37": "653QBmAkbefkbxQ8AWAiSy3tThXEA4d7SHv722fcHGL6ku1fFrdJJ6aShid69awGVMRu3UUUeVsLN8iFqmN388tu",
  "key38": "2ef3ujdo243vUhdh66qesubyiAryauT42dvAqwagtiJLWn2mxo199ZYRr4YMTaXvqM8mqdZLSTiKJrYCCZofoNgF",
  "key39": "cZj2jd6LEDD9M4JisnzJvgnnMcGtS4NSsoNbrWTZ245wTAXrNdk3pzT3iXMaDb9HG6HkYHxmo3x93n7T3XHGEmJ",
  "key40": "5kda3Mx7fNi5pxb1Cuwjugv5d2kL2R5jpZDRdjZnyMmofQmJaXUPY5RAdYRoGikA9qSR5hNE4sTmTZQmoCeHiLUd",
  "key41": "4Z1PsdNJAMC3JL158GkuDJ1yPLpk7wgieiS4PPyzubiM4Nh2uX98DyDn6sbmogg4b6U3NmcTC2LekVMHXPi51JzW",
  "key42": "5Xrj17T6vXB9gMiEQrFohGrDPJUjzKck72Q9vn1jR8uY3TV8Tv995u45ZFd6NQMH6g1TRJtAQSPgVGBr8E19HT4M",
  "key43": "34opFjpooZDhc1E7R5Qxx4NE4qXHZ52brmG1zUMfUedKPw6hnvDqp4aeuCDNzMVgUygXKaMmsLNbbSGA53RZidoD",
  "key44": "3ohU8Qjeov1fFvKfE2k5nmU7MprZRh9Vvw6Gf13SHBvMNg9hwXUzV8xRyJP5CP6GGCKdUUtBP1iKdd392j4rEnsr"
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
