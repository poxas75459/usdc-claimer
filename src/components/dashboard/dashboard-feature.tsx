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
    "4RJns87tgLm1NF3SsV54VtLW3Cv3YQpqhHkAA8uhRQ6zNvshEBue6wKdiU6E8DEv2kGcAd9hGLEUWtvwb4qLeJWX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QRpZzAu5XogJhk4YS4FSxmEd3BuQnwXZLdeB9aT5LmFs9H7M7itCZR4qBiXXoXNKPoJFi8bA6oCKpTV4otATaKb",
  "key1": "5bvTRQdsRV6CQLGJow72ztgj5VUggZ9tVGRbND1GQRkSNgHdmQ3W5EfcrstdAkevBuNNzmJqqqkLpAiJKcnNw6Wy",
  "key2": "2g5HiWTSVCE5iBTqnfy6GDFJoAe45FDoUTQYhGBtR1pn2FcDhv1mnGC1gjNPuNVUtdFJGfs6vsRTa9kw3GtUoA95",
  "key3": "5aEbAsM4hzF38kfSYs5GtikqUv7ugG8z4eFbb44Am55nmD9HZEvQgWF362MRm6xpHwaM1KZwajbkwoZqgs8F8qqL",
  "key4": "41yuKrZgooJ13d6ZirRDL5SWqswKkCgk8pzznyBizSiBzHiRJSugWgZTevov4qv9FybAefrRUytmzbk8feKXQwfH",
  "key5": "5RMdV5HFCcCvg65qBN3MjTerHmrQueRy5vUFBEn23W1BTpFme2nbDsHYkTAetMjcBn3DMMxJPps7yte3GkByPYa9",
  "key6": "4AbcSG8tPcwVj1qS4W8DtN7u4z7QyPVzQyEEvqMtNQN2Rvs3UHUE7A7nsmnYc7sGkJYgrGqYuzoTP2SGqBWuDrNW",
  "key7": "528aycSYYpN7chwseDRUZ1LHd1MCUJ6AAZQyDMcgjF5vuo3kLRy5FcpL3n4DFWVbg1GBL22rh9gZe584N47Tr4hJ",
  "key8": "55CeEQmTN2x2swNgjLiNpELB1hxYv9iwLKuVcFFHWaZGJsR1WEipYtvT1gXjwU8fLU5P89XoT16cozT6XadjzRHf",
  "key9": "QvLvT1hErjb9Bpfpn6zAVkU6MjmUsNfAJgVsvztjDfBc5A7CUxaJK6GzHvUM81BbNTVhfZV84kYNujWy82mRgQV",
  "key10": "4J3xkYEYDHtzQfUyFfEpnoo2NyUy3mkompirunRrxhRwJquuoonFhvn1MVgL94bmRJLb13JYnZn1iYCaVyA9cLh1",
  "key11": "3acy4ojGGyh6ruPtPa4XbwtKGY6XNe8yPet5j73BfsYuzcKuGmbNbqwHx5qmyf7UbUE2XPqBGrttxgoLY6eDffPy",
  "key12": "Q1kwkK3ERMWvbrxZsNDazrbNLr3nmM63teAXjkEHBqohq8VCkumGCNzZqAesiWrhwxAfV3GVPWRg1qyHCxEnXuy",
  "key13": "5k1b5do2NMsxpgDFbmzW2p6TJq5uQRk9sMTZtTqtmfrLJivFuWWRJkKTyWT9YnL4zdCW7dR6sDiaXd6nTQ9Ht2Wy",
  "key14": "3UBqa2EAUrumKvnnEmQCnwJYdZsRMcy9kAq9NUdhXEfmC5EVXoDLZaVAHzQt9AC9vXPVsrvzBUHrptgDkF2wnUqn",
  "key15": "Zc2adVsK3Uk8mcbybUBA7zEChekejauw6Y9ZsSFJG8SANCws4CNoqbQtBsG2dPE6MPQm35SMN7CRESrN6MJMSEE",
  "key16": "5R7FoK6oFaCuo3y6oNLfaJGPkY3xohAwApsVDBq63apLHZKCuNWFZgSyxXN2V5MMqR2n2DmdyCYzPtrwkw78xccz",
  "key17": "4SAXnSC3sr89PVHvbwoq4QgrhVmaBMttzgAYxd8KBTTzhVv8nqitjfiBANbXLuY7StSxRJbCEMqfphE6LMJGuBXX",
  "key18": "2yyRGtqw6DarkEZeTdbJr6wBKWtqaQFYDDcgScwEjfmMas3m8qFVg1Q2Deyn43ivvh77VyZawaL2kCkfz5dV1ss1",
  "key19": "5Kd1PHqZBuAtvJWUjMTESQLTcn9zQANznqgtvmYG1YWx3xm3byqUxLKcAKrgvgTeTQbqwjgcL8WdW3zqADQQcnrD",
  "key20": "2yzVrMfm4kbR1up4Q8bZ2cnoWEcHg1iHQKk1P91n3BVuEB5sDPhbDwjLQNn1TGWo5PAfRnXge6NytzEqFH4EPMkS",
  "key21": "5Jm8XRndtPzNsWzQTHBDcr61BHaMgTHgDzGsPiW8auL4yo6FXmZSzycWTS7qshkr1SfFVpeXc6mHFivyGpMnWyqR",
  "key22": "63tatn6BhhBL2FprsSb9TXCPXUivsSDN77U2KHFXUYdxBxUYtgTapZ9tNGj1kpVb3TpNJLuDt9XiUNzkVqzt2y2F",
  "key23": "4ZHYXX12Kx1heBkAKkZwJVudZGXiDAAKmVBJTv8UYJXzd4wf9EFe2HYTYHVAtwx6qFiHiy24AqnkSMESiCsJDDaM",
  "key24": "5xvDEU9K16CBosFNrSHrnkRXDmykHos1w4LoPgFNbf3Kua9frDtTp1hFA4ULP8mQoyjgBCnkKq6ZBRwzM87PVsca",
  "key25": "RdDQiMNGQWg45Hc2S6Xq7rAuDsK45m3sJ1UdzazNUEV4sUGwyGV9Cvko6jd9FRAqw4FMxPi9VWU3zSWo12LyEi5",
  "key26": "2hLrBopnRHTqjJyqyHf1B9UruLdKgBjEHVpTnvCM3K21jtmQRskuHoRAAXugTF9hn41rtrmCvfRuwA1hcRDngJvV",
  "key27": "31CsSg65pWYQQhfr9oyM7A6GPk479wHSz37z1WpVzRWjwWjMA94XUEsbEJA1cWh935wGfUzMaPQ764TgGhPSSpqR",
  "key28": "2U7kSUzHeYKsmFGYBqTcFqWRK9MoEyY5NRa2myjWqd2v2qF3T2RedEdE4bxeLAHa7thk4RG5aksNZthA9CbsWs1e",
  "key29": "41QWeUW7xcKmnwUzU7fDAYf9mErXaahP4qUqvUYjmQBgLWjCDpw1PYMPS6xCw9ahpTA2KzHKdHq2D4uv3LDiwU4J",
  "key30": "JSnvFyB8tiLqptcyVQ214Bwkg63YBc98qrVtZDkgQnzQLpUzrFETE6KHwWUdG58dJd8vR1RdpVHJHLjvZRVFktR",
  "key31": "5hUQdoJDtonqpjmHE6TGHoUjtaEmLaeWsmiWWbVief2RD7YuMQ35zhVTmT9SwR4HKgFQwxaEiSrhayYBCYTwbqAc",
  "key32": "4DGxVUFVwU1jebQRJGXsawpdeJiXrzD45Yyp5xeHrurM6gGZ1TBGpYJN6UMsEXqzS8cEYSKFSiy7dXBMQNLdJm9D"
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
