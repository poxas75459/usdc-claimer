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
    "5WjSbeMusXfXZ3svDQUc6NNFjDjXZMLbP5pPhFnQHYujCzZFqZ4rm21CvtqLXBRYKB4t9VcmsMDgbqG6e18pSXu4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4srdqxjCVWjtPiiKdYpgkgiqrvL3Bsni9Z8UtP9RecRZmYf3UKYNXXsXpCcgX3nYar8cRXgSdKRwfrn1MpBch4Yp",
  "key1": "jaXaUZDUARfb8miH4gNAwz3sVTCrMmBCf28CzYxAJTNPnbhfmi2FQpExWo9YEn5y6RgqvdDspyKp2fB2u3KzNGi",
  "key2": "4eKLaCDnx2ZCVH3up4b214Ai6SPNRw62f78AxCL26mG4K9CQJcSQccLuPJzdJvu3fgjCE88uZydcMK5rTk1bRnaf",
  "key3": "5Jr2SQfKR6LVFMxUuVXcgQYQzUkFv2XEMNdZqfYeEPanhi5rhh1mLqCy8x9xnxnWV87bFLKSm3NrNCAZRUa49Xjq",
  "key4": "35VN4cG5o4koEx4sFrqHwLy1rN1VXfNte6XC41Zd2LLhKx4LrLr7XP3qEQ2BPr6QEb5fPU68Sb9q3w2VLNsCeFNq",
  "key5": "47kiGm2XnvY34i1hq9d1DoXZSR5NUeK1pygBbs5T2ZEKj63mQUvMYKc5XqpBnp3MRvUvW4aikE5wzURtHvn6Hk6j",
  "key6": "5CFRp9Z6Zt9KVmSsD7HyqC1CDBnPNhAx8dvMwhtNNeV6RPywPGZwpHTWYmMM6GY5KyRn4rFJD74nspodbVDf7BER",
  "key7": "tfaExhDp98Kqh3zgPY1uzygqD4GYh4Buu7Kp3zEb3EBkx4K1ZjB8pVhthRb7RK8v8nhrMnbDuQP8fJZqprtuNJi",
  "key8": "5YRjX1hVVGuP298MhTXJtD7pZUNLzoJnKZeLKagrVZK5c4JcHmWfcqVgWHEfhQFHtK4f6ngD9rR4LfWyCiZif8bc",
  "key9": "5fm8pjT9xfad1iiFpcNiCV727Q86WVwJyhDXKELWDVd6X27Kar2NxgRw5txX7RC6ULYtGy73PZRMiJHXHu15vd2U",
  "key10": "3xgLksT5fu1iNsAn4Dpc8etnUocoCZqFo8fYm9BMZxa7dg5H2vShsV481FdavTxiJD3v2taMDUKzd9a7eoGKoSWn",
  "key11": "5rLTTS19uFRCeYseMwx3rf2Fi4nhj2djvKKNGQx2rUNqNMPCUEXLaEPxhRynXHo8HujeU2jvQiqXqgXXv1tCufM1",
  "key12": "sgpyCMHAqvQKWRdW6CSWoNm5XmvHZKQceF8rWPfWyTBYj6q3uTo7rWJuJgZxTBgiu71EFkkuBPsYpivUso14yyF",
  "key13": "2GZegs75y2YMWQ7o5L12MqciPw8jSB82nEXqxbry7iBLkfFDBsDNkEuE3GraLmy3q5APHTMWjmR5UNBCK7BVsbav",
  "key14": "JsXrMBMsLsbPg4BKBQhYRGuuTPt98tP2GLg7NKYSQ1hprSxgs1c4tW1dP3LYJXAeTh4XsMLojwNDuwxiZ4fbW3r",
  "key15": "CBbNVfXR1GGZX5bcttHBJy8SsTdqDFkHbLiWGwPH1xZMumRTVy5XDGcN5ZfAsmHqHnXHNfVDe68gbBD3xHwhwjS",
  "key16": "2q2Xh2rDYKDx7JqgJQjNZmEYhKhJpFczKHQLNejhaEg2C8TiPA3Hj5m2khzmeTZWXMBpSSsG2A1MVJg7FGzzE6u6",
  "key17": "3MtrCLWt9ApzTXfDBv9MWEGmmerbnw8njQYeg6ijtXk7cxQSUWVGgt6isB4sjAmxXTjdn4K6sK3Cemob4KTCcCSz",
  "key18": "4faa1dJuRj3PbQbxobQCKAca6ujgKgbjYy4MP2weZT7mkcTinjXqGWZAxn7w9ZBy6o7VWo4vpxU2Qnkrr7kUeWyH",
  "key19": "4HfVUxVBtPFzUGQCVbRmwK8QeoLpzCFXjKebbJQZEw7NUzqqGt1JuhsvQiptpPXqior25YuUxVc29MjhDDogyago",
  "key20": "2jb2obMYyerjRUki5My58EzekSLgmR5zdrM7Lgc3rUR6jkSimQikxQX5A15uKhMGvdA2BEHa7xyXeACER9JwitoA",
  "key21": "59bT1o3dFEEZWEq6k76P2yzK9RZdUdUU2iST96zRB6oD44Bd5awhm4ah8tgDDMtVbNN4rQxpzisfhr3uBepR8PEw",
  "key22": "3kKZPck8MBCz1Zg7XwZkPjM9SP1LS1khEoScrsMogrnrVNEt6TZVgvowvmxvk91bYN4MBhvkaek3Hncy3xbfiH9A",
  "key23": "sgDhRv1sY9YVZ1UjsgjozgdsQVAGw2eCuenkTV8yay2f4K3UG956g94oSkPhX53tYbvdhinNZ5isnaWhtRgG5Yg",
  "key24": "5QHS2D2rRksQL2WRCFqzBq7wMHshm3KocD725ABTu8gZjChuwJBt54YbSbsCGM6YyrWR86NTpqm4YoUqPQgfJabw",
  "key25": "4TeDZxxfX36gWqA1ZN2q4Vj5Pp8Crhf9UGUDtTSzKz1H28gYJB8XjBzMdbQEDkxemkEiK3ReohSaa5Z6tjV76w2",
  "key26": "2nrW1FGNeeh2R89kS2MSCEW4RT4End3u9tBa1eYDd5Ah4MTE1G2hhFjQNksz3eScvaq3mBP8Qfap9NynN22yUapD",
  "key27": "2cKr9f7hTf7wtB2skrHxNt7tiWhNk5JRq8n64xnymUzGzi5KhKB3XnCBRv8LqaUEotS9mUgJboxYVXhhAs9ZbuM1",
  "key28": "4gspm642wSmcVVdZQzD6KExjKGor1quy8KZCYAf8tVdTmnCdA5ygLCrRUUCVCrhFEH9PK1AvhkXdoQsaKEwpiaR3",
  "key29": "653Vu5jS8gj1T9rqgDENNjoNzRtB1XpcWJdMjfFrJZGSZ2NGVzHfaYo2BVBaTu9fUspgqZfXvWVhN78Ui87UyGeq",
  "key30": "2Koj4Dao6SXZPrsEFSsHrhoqRCr66cw4M85yosAZUMUYPEoDcVUSSRXiaxtq7tAnZ6PgoAYsqWrYTu5RUWNCNigd",
  "key31": "2ueihTYEayGtiTN2qMk6UtRaSo4zrXyacixXQ1tPCHwBbCgKGhTiq2Mixp7YzDZ1bGTTwsNfb7FyVitPGNA8xmRf",
  "key32": "5Ck6gJ4ZooiHLtFoRxCtkK7vm1922P2osgKLP8AzsQHqy4bNYqCoWhLT5J26KJvkqiH2CA2RXhQKUk1X81ee6Emy"
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
