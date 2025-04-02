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
    "2VxvP1XehHZA7CZBERXpwmitvwN8BMGfG8MSDSVxYMW8xbpuJuHVvEam6RQKGraE6xogoEUoBEpjELgVBH5vcweS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aZ1Zu677fNS3JS7aQf1miNXYhxWRYAVjNoFhzuH92RkfUpFcwaKdAqPZLhmwgLyf7gXtYF1Yh6EKVwnCd93W2Fn",
  "key1": "z7TiAkW7eMNmoHe3P3PbK8FyjTVoA1sttUmcv9ZaqnDo6CmrEQYayyYaDMAbKqiqiyoGBewHq4AfpSmD3ZDESUk",
  "key2": "5Bko2gGxQBQwFtt6PrLQ1cV4tvZc4uxkgaDpyeaAMNteQ3Zz3BEGLwGGc7qqkUHu5pq49QCBq9fWEX7mypr2mGPd",
  "key3": "3Qk4WR8uCtDMrr1Uu1RizFt99KHpJeWcK5a1qSfMPy9LwehDeE4sXiNhfzoXFNUNHB3D5zpeVbYDv8fmLYYuERag",
  "key4": "2PWoysJitAe4mTkafgrxVfYyeQoxj96ng9BJq3DKoWAZBuwfAcZ4fSMH1B312mGaExStWGL6FjzwuExRCRewo29k",
  "key5": "4cQULfkR7HDwi8q3SgAqf9dR2prKfHcJuobo6D7AqbZYDQBFnguzmR9sZNF1NGBb4HyWMZaXq9UqSndBHnNH71iB",
  "key6": "5YEzBSKFGYfuDWxmwJXtb6nPcPn7tC8gicyicornGzmgu1fvyw8NnNZyxeNY9tYranvbHGSBMbYP4WxNsa4EGAoK",
  "key7": "26MseGwieYoRfJi8Br8BBw8qca3GEsBvAJcQ1ZmBDae3f7rTkao1UFiVvwyGBf1aYdNuFGUAgqpDny4co3zkgtGW",
  "key8": "4nSYb2gho6G2Tn2Tuw6ks7KmHRsQp7n9xTkkRTJCDSZ5dKASAzYBsZnxyMxgD2RQyEh5gwZgHdaMokCJSqFgsSBN",
  "key9": "2p6roAKYN4EUSMQjnU8W4E3CiLYJ6s8VhxuV1tYgdc1b8aZ5jV8MFmZTEpwwNWEBd4iRa84z5tipZdb23sBJQxfk",
  "key10": "4V1vDKUdyRRS5EDJQzkwiFpFhXqskxuxGcp2TPHrRgdWefWjszwikocqq3EWHmoNX6qv1Cyae8a482c7izmk1D8m",
  "key11": "QWhpa2HMZRTQx2z1MXFkBt2LPhjhkZ5BwRi7rnrkRurcechcSCnBfjtbnWsmVSNEGqATP5C7PCCpVzS2obi1uvx",
  "key12": "2qzvEKohjs8WN8uAyLmmx5LdULsiekTWJKsBPLWLc4DBZDBS5XeSzNWAHAQwqiN9gKWA6GgxFpVXMvR8nz9kZUZV",
  "key13": "54M9qQKWuEheDH6VkHiLeBKbw5Dip6ZXF8SMJ27Keo7cz3hoKp71cUNjGUFM1fmuvymTemfBzg2JkEviPNKjwrKK",
  "key14": "3JeGorFpehuxkSFBffNVA9cqyLV3yuK3VP5W1uXt88r8TRJjeRduCRtMef6CSMWAnzFwFa7fyVPbbXUeruWub1aR",
  "key15": "3CjURTV2XbkwDZHyEoCAp5JxBnczeuCoHRB1dLc1djgsDpo7iNHhYF4ZjvgadMaey9buPMhUgvmKpsPPo2csk9Fm",
  "key16": "67ZLeaw6awajdesGiHRZE5Aw5oNw7xBiSo2yDfjSyw5BMZGmc6nu66eTzSStNdfBjG57QkjokSZ1hcz1PeQVuHAc",
  "key17": "4j4ho4zVquN25Shhi3qgW6e5REG6WZLcn7H1UxQWcGXp9EuX9iXv2zYRXCSvh2L5quy1uiXfwZjzpCnxSKDgA3q5",
  "key18": "2yfCXVcQwD8dtGkrgHNsSS6vMNGCaKgbM3cq3BCqhiyjL1xayoetvD3djkGSwDmRFoHMMpWXgUhcoxiFU95pt5EU",
  "key19": "2qNq3NhhTuVL3xuxrAmGPxVUsLBVVKWBwvZZVp51pFSiZGpUK9LdodWUMfBbBFbWADK1Qc9j8Ug7YUV7JHiehzEL",
  "key20": "2cC8k67JWkC1Dn59WuxVpsbyYkzFodTPe6Wq5zdExDungryZnuuFLxpcsuh4QxNwXT8crTkhXTybbf6SMv1DdjLK",
  "key21": "3kHNhJ4iA9TiyKDGnQdjPyWRjRzGt8pAgMVF8kLFPSf6hFKSQ1zmbXeyzSasoVHhrPbr64uTVUw9iaQ1DMYChMpG",
  "key22": "5MBGm7cXBVKDfmbPTv85DczvK97vC4Dvi6DfL3GVzDUvaD2p8LMtjwbXW259rRz1ubJd5sQdqftQDno4VgbGJ5vt",
  "key23": "3ZQMxjzNTFXRFwREHoBSb9DDzcmKCnYSuL4ywSXwWrgDioZWgth7KCGqj3CyaEXWGzMN3fRQiHN1DCj3jWbA3DiD",
  "key24": "2knAbBbFUAk39QB2SmQqA6d6bDNFZcUqG7LHxSbPhTF8ejQequ9sjXTCN13afHbt17UJgvvzeqswgMyLVAMYqme8",
  "key25": "4FLjRaFkEWek1VV4S3igKHCj9Dn9UGqx9iLTGZuF9xDufCW3AcCQjCipBSSrU6UoDdaBfbWsM79sjE3WbdF5gKmc",
  "key26": "JCEx8nsFwKbBpeWdDAtg3eTUXC6xbKnQSLMme1s33xB2x5VzqV2UmoZVMHWHATB8T2kp2RKMsYxqnWj2JsxTppQ",
  "key27": "5fwt84ESXCscbTWnW11yRGEaD5wEghSexB6YuoHDCsMxnpgxgiAY4wZMGGGVvK7R7gkT1t4y69HKxuxyydXF3QYo"
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
