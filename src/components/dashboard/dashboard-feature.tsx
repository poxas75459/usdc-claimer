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
    "2KuUAuf5jTxeaPTXTPDSK7KDL6rfZJ2UsNhpg8wihoinjP4bTBV8ggXoMzciuTf9yaTDHTMFS8eSbwWuWgSUrpqn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2f3Hbq3LKsTpYCoG3Ww1tzpgHQxHP5dQ5ZG8cvp3C6d13ma2YSTcYwfjLqBhvYAKogeJ8BKh9dj8iWrFb3uuWqok",
  "key1": "2j1ATq1Qn4wwMzPC4Qj8uooWsgwQqNVnwmrrgTJPAUpfdHesNKTcA3RSgzcpHojeTR43nCuppAay3MqqnmNqCfp1",
  "key2": "3m1sQrBNBuESqm1oUHY1tSjVpw6dgFp568WNYB3vYhRSZ7hHqJaEdCn4A4n6kBAuzuXpmU4r4YcMcg5sXkLGF5Tc",
  "key3": "3gnC9sV63rpA2vdBiW42tTjTyNAJehNj8uyXRzUKifRRYRQZ89xPsSv596mhwNsvxmVtJjeRyT7Hm6AXrCkoAtBd",
  "key4": "5voTofAhBdpwTUgMCjZ2JnYZHtDQkbpygKZVuQTgzAkPEUwwoJkSjCnVsnsTqJS9q9F5RTWUSwyzJZpo4BTD2riY",
  "key5": "J7xoSUwDrxJAwVxJmmgQbGraA2wYAvNQLQFG8sJmsLnxh6Ydm9URpyGb5yKGiqBRQyFCZVTy5esGzqTeXKY3Yy6",
  "key6": "39QizGA8pAeAj7EQro5k5WjrSyTuBoyM4gbFf8VM7kjske6EpKB3PGh89nGjrvFfF4LMH4one7Uf2YoKUvJo7skc",
  "key7": "M2qu6kSDBDN7d7715AoPmZQqZLVCQEu2WCsSMgpK5LgB274VLnZMKVbtRYMJkU9Khu8AEiUboc1CvPWRNEuHgKm",
  "key8": "2e557Gnc3b1XpwL7FpijipZf7oY4EjKW175pFRkx1Mfz2ZaTCK9S9eRhK8odzPqhTavZUaZgZHMbhhCTMz3vBihH",
  "key9": "2iYzuHnpPLNgx5sG5sBdqCjetvmYGSK5FAfocv8tYSpnfZRELMw2qtFG1bggrvFpFUKpxR6ueG1cZqS2jpzWcopr",
  "key10": "5LpD9hyzmyhr5weJ7aWg3cA75wj9fhKrvXAwfoHgrKz4CbJxKCBdRVYu1V2eXYs78U1W5ymb1MfDZ91FVf12ey9t",
  "key11": "33R8AxT6RkLvBQwcs95GUHtDdJH1JNfmn7iFUoQYoYswEvGMqxahJRB8iAPBrYYbYYZHhDPQi2hGYug2DYioubRD",
  "key12": "iQL4bfSdmbmvCszDWDrihcHexrG1zfFGQYLQbbm3MotLUsLV1LTeRsBsj9QW3Y8d3dn9YVXAARg3Z4LjGNbc8kV",
  "key13": "33tNMuXaWUd19g2j4P4BzmZh9euXwUAVZPWV5HJQhJwVQDsXSpeF3EcFXoX15Cib41D591b65MoEPTLnGhNaQLUM",
  "key14": "2JhDqUessGBwy5JSjGBE47UuX2TGCJuYYsEzBZ89b54MYuMnXv7xrfVkVpt9p8zdkm5YRTTqBcjMdTB6JPPCEKWB",
  "key15": "2vwMC8TgjVoWmmd2PdhxhRthbsLqTBmnX21VnZ53cEfyvZSuKdCjigQc4QxCtx3zXm3mnRPxJVqBxgz2qxaeyqoY",
  "key16": "471hVNswPnUjV7MscFvcfesJbfMTet1NdyJRn8DJvA3xU4QKv3DGWvTnRtDdPDK6Kq7xzbCEZZ1snywHzmZsEEPa",
  "key17": "3oJ9N9BL1Wb4VQeZqsjJoi3dij6S6Tx2ZGGPUkio78DqwGG21J8xyaGjZd5j6TxTm7oUnhKNgvBJExcKqD9cC7sy",
  "key18": "2XdLVhzigzm7bC9KAhp68ebpH4fmBCdoR9bTFhhSgo5Zp6dAHUFprCrXPyvKZaRgCtAbBK9yaMpiUjzJvvnQUC55",
  "key19": "3jRsEREr8bxj4sQgGEmnz9QGscFNaWXB2sqTZdvLYYPDp1E3Vap8dDEx8GCvfGnsfQzZCyd4GZuj6cg7b1dnHwLt",
  "key20": "2APoZo7EB4RQQdSdmpfTwWofX2gqhsc5MTgxwx3z4ynnfaRRr53MonkmTWYERrMK7vKFK4spDxzwsJHhmU3JS6qV",
  "key21": "5VNP8aYn6JK1KSAP23uXrpZXjF44c9eJkNY4Vr2M1m1boKm1Q4JSegV5iY6kGnH9tA4oznARVjzxE45nJdyAW57d",
  "key22": "4V7TgU6Cxx9Y92YnkUjjD96iqRthcG8irwDYXyHLwqYhFjHQKMJ3SKM3iqioLdXu7uZv7pcqrsiYz1v9orkFNQ9b",
  "key23": "ZjRXDPeWY5HDvrzt7fYtePpxWcihmMJqHiKUwUXpqJVYWQvG9BCpW95nEy1T5b8SdjogMQ48xDbUcWzygEAyZ34",
  "key24": "2mekWoG9fzwGpttjM6heg6f4LRBncdMEYLbxiz8iRfrkALsUtcYeAntzwA5Efqb635g4Hm8HidK7EmZEGuFPCm8W",
  "key25": "2MqN6wMJbY6C3x2mGTmWohKZ8CqFX6avFegFYkrH9KhfXZjZ3ULByg6qaNgSJDSk7G9oyACPhNxqcZcuA3NdTjhY",
  "key26": "aM4UoFbSVLvh3bwzGE8ssAYgHoXbTGR1Nnk8bpfzmHXnBMjLffBKahFGULDSEzsJ2KZdS6gZ7fe52NRFX72Ewe3",
  "key27": "4Va78YvGmJQHN1RV3QDhXhPPtjgimYQ5z5o8iaZYCEHvJBJ91Dc7Mvfosh4xpQv6pnAqYpaf5ve4AX2JoYng1JtC",
  "key28": "R2YV46KXbDBE88cWz2yDdTGdy7BbWidGbXPhPNcnRdPyJYRJQ2U6JZER4s7M2596Qw7PVsaF6LyvM36XoHsgmJ5",
  "key29": "ZCc6HRQ9UL788jFwUAqcDXMGY67CgpXvmxc5FitDQLa6wdb3zcAGbfxcPeu8FANRf2PhKs6BSVpt4nYLUS3GSi5",
  "key30": "4djTeWrQoKgmL6KHQ68nzvKabXzULE6aroV89mGeraJ8jkq6DN4q15hRbXgXSabLNB9nw5jPfPgLuvwcHw4YRSjf",
  "key31": "4NXMsKPDUdFYkB32F2eJ7doEpm2UAZTzabuHYH4CrNcLLXyZ4emNpokf7nm26yR9Cqx78Fqikizb4C1gTptD4Btw",
  "key32": "o2FtTCFQcmDgGbTKEvyM84zCx3U4QW6jVJswfv8N9YsQMWa4fRZ3Ny9rw7ZnhCAzxbA7YnkhzZEQ54xtZddu2Vk",
  "key33": "23kfTKyv7g6FQJWwoCf8hCPPgy33BFWjLy22oBHZWtkgxTnDzg19vzYQch3sx3THV28aaVzL36uS3R2Bc7ZvFiNS",
  "key34": "4juGJgAWqNZXE6oNqx9v2e5t4jEsxgYvoQMLw9J5ccVf75QxJap8NFzJWyGH8ypkRPqm9voRX44rHj6mQqETTCJp"
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
