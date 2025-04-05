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
    "4TPJ9z7sqyrYn5uJFxC5rUCfvCNdhqK9EJQ2uz5HZe4PNoFWizUhwRCGA1V5pSWJxfq1K8Vc7qTDTC3jhvns2mYv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2k4LvDLEffAf1WERbEeBEqgv5jyBUEQoTq58kHPi3Jnvf98kPHKNWeCxJ2xP38DjSjTDrX7a1w8zYuJFVcEmnw3K",
  "key1": "33KPVnGyHrk1sgySQUFLGbU7fZFKCGLDT7K1Rjbw91Soc2BVJPAMzm65ZBSvjQrMv2cq3xfrBmQuW7JCUsZ1vpSe",
  "key2": "5Ar6UDJvFNLMKZPvio49RiiGu2ocR2VVXRSrXXap7vNpTGLu4CQ5pijm7TbcC8SEXd5tE9pbve1ZBnwiPUgDmLj7",
  "key3": "2mwDfRuKEwhBzaLuthjN465peWPCssTKfrM3nzMjxBGTB6cSJdVHMMxdSUGcrcbeQoMCJeuc57ynvT8KvV9qBoDc",
  "key4": "4SBmrwgEUMH2sP7y9YqHhXYX8ma2YhE7gVmfDqm2HT7U3vrwzt6cu3sJzPMDaeQM5nT2KtrzAqcnJwQpwyNGnXTs",
  "key5": "2xh2D6S1rJGGNTg6Uu1DLGLRxjSsuT6PAdzRjNSziQg6i8VMcsQ8od8u2zViwtBaKpMoo2xQJXbGYXXtrc8aQx87",
  "key6": "4bxR3vXAEYs77sc1XsSw5R6z9UDZ7SUk2aArMUSXsWtPpuJZC3A1bptUGSf3LQXmZSYcnU9nfrQoKSAXZ8d88doQ",
  "key7": "NpGxNyKjoxbH4gxkyCQcVaP3ZGVqKQRV7YfGAFazVaXYvJRJeTQBc3kMdidFLPXgq5Lacm1cSuaAM1X3WsA7SPk",
  "key8": "3zwgHikumcW2yjkwiCG2ponw43XCnVEcPxQxViXVvqFxxCM79s6oy4FGjWEmQ8RhSE1j1fWQJ2qar4Bipx6mYpsH",
  "key9": "4vqhPwWKX62dK9sH1s9L5wRL2TU1E4R6e8WtXpPj7w19VVgPP5sPF6sTkzFVhCvd6nb4eVwm4bqrcjp1UULXUYwi",
  "key10": "5vwgwKiuzoHFGk2mf48wt6ZPZBRBzyChNPoGkPExyNtWW1zVXkaZT8zvwqrsrPcJPJkTzPnt8jv1DCihUPeJPMNU",
  "key11": "2eYWiJAPHsid5sXXe3a7bZvXdeVWCKFMvHgUVbBGy1AAyshfNWyqPxKtxKSUaeaXdfVdVLbKNoTsJYtdGbS37GqZ",
  "key12": "45H7bqp1kaEjCeoLHDegwdPC1pxeAJ7RVCjWFjEdM9zmprLJcaW74qKLdGSA1F37DproksRrHUi7tcaFb9u4kzU2",
  "key13": "3yT3jaCWRB8dhd5n83uqyn55kL8QsKw7UTaN2WEAdnyLAJ7oyQ8hKpyfChYDiHoVUEFRDiwdDdjTzmvLHxvgSGzb",
  "key14": "3Af2G7oewR9Hq3Y5WYJWXVqPaXp9Fxgs5Qe8W4YhS3F8DZswR3CRij8tCZrPBZdcHsPQsSvQjFJNZKcSfcCyTkML",
  "key15": "3eRGGhtCXNFGfW7StnPscK4qfAkNVgP2ucptforP34f1Nyyz971FfKLKepsNmVod4C2GFGzXk3eFHTxDQnBeUBkm",
  "key16": "qoXgTb6QfjS2RMhdGYnkspQta7p91yW4sXjyGvhXWimAocWtA6Zjgey26iuPjCHk5NmWCckcicECvo5nyAFRnyb",
  "key17": "4VEeNoptqZeNSJESQHNXdBw3kj1tdZb4Hqw8QkT7WEdaAJvrZA1CFMYy35aZYVCTdjgQ589XPbSgUjeFnwBrpR82",
  "key18": "5JctjxhWPEz5ErBFFS4rYNUzomawpLZsErMZyPGBPSq48rZbdYbQHWKVNKU4FqC1G7fqjax7LPRPFoTuepJPTSuh",
  "key19": "4gxrg1X2gLJ25VmaixQzMirJLK1PXFKCetgbRvqKx7T2Z5jqpKje6DcpbrF3gR74nzDwYSdWXoQw2UeqyYzyXFtc",
  "key20": "4HXeZjoDjX7h4BB7LCvpZBbAp9n9HZqQHZUUXqFp1hpS6jKJWBADELbYK4aLAj9aTBh5fudB6bPWH5Fd1aYyVe7M",
  "key21": "3UAJKu1Y5ndtH6eTckYvHhaquqQp8DmrNgdRQpwBZSw1nTtubVWSRK826YHdo9w1yEof7hfo1caXvGicpoDSqSb6",
  "key22": "4cggmMwbfGKaJFZvbq2iEiKS2pVVMDLSGWbUT9WKWU5FfPknAc6CH3TW5sFBm6Q99AG4z2vTtmDFFg2wVYZSzs4V",
  "key23": "2v7r7kjHN3GCnxuoxEf718Rqiwbw2ATfMNpZg9FeRWYDQZdmTUabEhFsQBdgcEDQevEkSsYdfxQpzKxWSdhz24BP",
  "key24": "2LafTtQ5TrVvWTSTxY7KWkjuEZiJStsiWoxzCg33nU4RG7PJUfFs1ggecDt9RhuhjxbUGUzsN8sKcfKWwNSB38gj",
  "key25": "2KjDkKjsTdb99h3zWAWatPHwK7L3W2FU5NYoDZPzWv7ny3efcyazctw9cTH6NqiXF2jfkHQExPxLvL47omK4Hzpt",
  "key26": "24y25hMJrVGfQt66Ecnb5nUgQBqCm1VTgMH95ggvUZRzLBEhrPx22JU5jP1DFtRAU4ApdQHebDvAPiDLCGvXB3G6",
  "key27": "5SJjnjtrS8uZUkiwtRtbFY9uaKbgaisZvz2vgkB5XYRC68QH7jtdvCjfQB5DqvAaGFhJ9McKbzZAzEsjWuwaiKbc",
  "key28": "2Bn1znGfkEL8QG1hXQWMG5EX3Mq1Yhe2tUPtB9gZ4f1HnXSHyksPzd1Ado4brUguKgb9xTn8u38zkb912E1ZxYJe",
  "key29": "4jVRWxoqBeZw6kscGd39Ho6WsTQoiBeRiQ1UuLL1NnHcRZWrSQvCGDvFjfojvvNTpw1iSBQ5BYKTVHbAauCU512L",
  "key30": "2Aet9WKjZyjcDMSnkJcpTyPezKLQ8YpERAEcgvRQZJbdXTpVBnrAj3UojsLjmo72L62dVDP3K4PiKKmYz3fqLjMc",
  "key31": "4F4Y9gXCCzKtQgjPgVSH9aGPpt4wwztJLtNaJEmyewJZU2gNwh23hvSugBF1aFk4FE128EwHF5k9gdueZmBzGBMC",
  "key32": "62qfigvM8g3sgo6G3dZZae86fTqjArpXwgrBKrARVz5vmUWZHK39HwEHkJTKk8mGzDNibVcH6M1gPdWGsYcsqCpK",
  "key33": "3ZAvZ5xFPGFL5fiTwQ4EJmfV1gKzX14QT6kv5QEWmoS6jufaDDjdLTmwDvX5HAHZxV27cjHq15TjUXnBYENkTN8G",
  "key34": "5jEPkJLLt1ffXhnvSQka7v5z9rquyzbNSZbXZEk9rkwfTt6pNnZhycoktBSCH9KtUcPJ3nrV9Vdva5zMEynYRJBQ",
  "key35": "58kdfW1nwD3nN7uDFNnVU6GepcNwUyugKhQRS4gRYAU9DRM4UkK7zjfRXMuwL4o3HNPsseLTBGLfiwZz9ZWEAZqE",
  "key36": "5B5fnKAK1cq9bvPa8Wa1jSky9LsCZjGyTmfbj7QGCp8SYDp6sCsTeuYK9MbpDiNUyr5o9Um99BBhxSZA8GL2ruox",
  "key37": "34hgX7EMNmbo2B1gXXkGpo8PXSskePGqGWUwtgaSSdamsZWXNB84vWKKvSobBAqwPrNBt6aWa4rWtysfhenRb1WE",
  "key38": "495sVfXNVDJUEDU5KXcSt6R11SUSEUM8QkTCeV7Egkbn8NxkmuP76w6MFtbsAXhsqouTmP2T4WrHazJv67fKXch4",
  "key39": "4mbWwLVoDBCpwRNNWu9jfyjZvDP2NGENC8ZWYdEBFP3QBTzaLGPL1y14ttkeuYtBtobGDiRc5etcSmecKFqpnwib",
  "key40": "23ZoihFdjw182J1p8iGdQKgTpD6sM591YKKVPUeZ2aEXgCrpDyMNrYoHFc2pz7nvN157hpT64hLxfiJhMtWxQeeS",
  "key41": "4WxT89sqoX2EzeJq4Yj8EaMBbwNFWkUz3543RHw6jXJA8eHvTS7PrQLbqzYKhqZQVaQvs1RXTZZY5k9n6jfENZoi",
  "key42": "4ChLEU8NGi6ki8a9iVWB2s5rmLi8zDHgFxUtLpDZSwn6z9gfGpYkxDTdgFdPEkpuo6FGDG1JLwF9Mq5vPKbgvFWX",
  "key43": "4RUpAj8VyeesfZFbC7GLxkMjEfdrbo2gZKSaMpr9s8YdDXM4k1LuVN96AnqbsYCjTW1vZ38huQQfMuV7wivCJ2yK",
  "key44": "4aNiBQ2V18WT5judzLkXEDnRzgUWgqkZwfnsyy6JKdWTsTNH2UCkmPckro5H5hRfe429jAWhWToFB53Dfz7Hipco",
  "key45": "5YAWgSgamNy4ggMgTBMkAY8Qfy8LnLLJNrTdMPkVJpJdNWT74rVTZmMp8uNSYi2t9Hvo7jpX2kxnZxFaKadyBrsN",
  "key46": "hLsRJSvpxJc3KsyvFitrPzJ9fWheMP1wuLH7BF5A8TV8YDhBsKa6LzKE9oV2C1bbkNS2BKX3sLbze6tAaUkNgUn"
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
