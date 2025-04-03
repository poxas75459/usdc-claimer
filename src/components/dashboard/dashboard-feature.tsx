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
    "xghnUqfi1XVQZCmfkgsUHpogWNWw94UWEas5d4kQSV6dWompjxZon7BenaHX1szQWycoPiCcikXkTUsKh9ge4fS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5L8eWqqZuVcDqNdJFRzx97Vyk8rV6JySu2nQLLPFfyDR2d5x4iWMXosnhsn8tLQDMA95DV9mtP9skXp4Pq3mioTx",
  "key1": "58EuR8YsrUuxkDw3Ty7HPjv3XWsaGpFiMru3V1FL2K1sVCmZZAHGQFWq965iwccVoabiNk28PcLGgYc4BVxgg3dX",
  "key2": "3hJsUQud8wt7hnt3v7pxLhPEmHtXwxPmjUggbgWoG5U4Ujxo5Rf2hSJw6Yb2QmHCCmNHQm12TTuDTx9MtkG4VYde",
  "key3": "37UmSNuw2mmLFtNUw3xxfZUMqscV17QuWeisQFBGFM6xFBFEsN9yLE8DTeqwKAPiY36fxy5Vtnwga95asntUHwUQ",
  "key4": "4vmr6UYXpEhWZN1kDY1Efjt7LRYnyE4yqEDdEvwNoYMQGdXF6J3jLUxuai8u5tLutq2qALroVrdbA43x5DBfUhgn",
  "key5": "5Ka2iRn2PiLJ3ks36nzGvfMx2YuPq29csyo7LfRrfMbYVfbKzzkxcnCYRHxDNGLzkzPfy9uVMnKvr4sbnoQ18UY3",
  "key6": "5Dyu1XfAeYxK5B7BYJBq1JTSJJedzfMWu66odRzd5KFwFKLMBh1NsoyGPPJpBPvwpyQMfgyt5LFhtD2HFpmbBTBg",
  "key7": "4CsPaWybqikacdgGbijwB8scfho6ZCRB6BszFu3Q8PLg94ri7WPasehY4o7tpou8WA9Zvz52XQNcw5H1rK3suXZp",
  "key8": "3o7jqsSBx73VgqtHtKTWRcaL6AJDncCzbKaPLqk1yoQLpBdkX81hpctrGAE1HHF5JkWoDHR9YdxWXfECDLvpdF2w",
  "key9": "2GQ1yVqCHfrZRy2Hn1Cx6gZwbPWB1Egbn5Wudc5kTswfES5K3ZaWei5HSgMUfbbqtouSbXE9SkwHm24LzuY5aazQ",
  "key10": "8DY8fTu2MnytQz4yBFctjiUqnWUyxdaDy3fwc3wBNZC2SgcoREucHFUGgzZEWLYSkuZyP5TF1xCmesYWhQDEEqc",
  "key11": "3bLr48jvWG9wT4wTC1yjBveC5UVKy6V56TeiGjc1eTAXsJrdEvzDmryDwhY3ATW1VAcgbt7oN3SC2Jj5faJhEYcC",
  "key12": "3hKN35LDGXxRFCafQsNwVuCAZLSiGt4Fp1weKz1SHh4sQAVLYv2WaAPBNdRGG6Z5H9MWmNjSNcNtd549rumjwV6c",
  "key13": "234pR88FD8xMMra19rjCm5y5wqo5Gt895zVrRr12LdMbrxLQzNwEAWNcHhvddfXuVKKbA43NPPCFyZymJHBkbGQc",
  "key14": "4qVsGHt5N2FR1mr4HFn3zMGkUD2fBMnV9KKgQbMcQYYx6xQMttxkHAaxPeUHin11z5ZMA2StPKg4DvBV1x9xsh9Z",
  "key15": "4i8MkV3JzgJVNYbawMvLE8Q3o6SisZ9cUBB9BHNWL18ZUX1n3d6BSHx3Czm66nrcV4SBhZMjmm42CwNkoxfLnDnM",
  "key16": "3hchTtDVWLjxpm37zPRgrPhHckfwNnyZSYrS2o1daVoBx68od4SdGFYnbbYzxBxGpCS8X5PF4v5D4RAp7PNpfpvh",
  "key17": "3tyBKxnCxaZ7U4omVQn3NdgGrTxYwVaXyuan7TpkRPgjR9CUfgxKWPSYHS6dc8pG4aZo3xFbUfwSSN6Qk7QFKQ4d",
  "key18": "3RN1yhG6i9v9Rn14p5ssfQUPuhDwnDDGd1gWkiR5qbVYMPtX9ZPzffCTShZtPvvn5SdBAEE255c8SGECJzbtwK3v",
  "key19": "2Ec6dX9HfjoLdyCjxXvCJvULXR52Xa3cVvy8uFrThZijmRZj4dYLk6ogbAyoeDi5c9u83xV8qGk1Ze14VvTqTzeT",
  "key20": "MNjQRJ2P8UNgfz7m5monmEzGuMEC5pzWDkoAWvma6rDHMtzaQSMngq2RY6UpmrPApC4oHLyyy5CAw4veuVousN6",
  "key21": "g5hBS8SmPtyreKVtvLaJtbz2mBi3u2TYciwsbPpxGgvdLm1t236bLf3Cnv9mJp2QkpaH67egp78W4L9RThUMU7j",
  "key22": "FPq5nwyyHZCUT2Xp88FGfvaCYzAAkB6AQHMLjDkkQPz9QU1ce6muNAKn3jK1jbHPbLyaeZVUs7uungCD6oithR9",
  "key23": "ZWktYQYf7vu4nTiP69DHemm7ikHxoS3xeg97TXpmDjx2f6Bv6eUgQVqm7jmzdP2GWf1fJWoKrvyCqUaTA36Nb8s",
  "key24": "5AKafrkZNj63VkZE99J8dXzfWaGr8SeZTHCBh2zsxho5bpSc7JwRHqugiyhxWq9prg9n39Zqvxm1QoG6VSkQMhRc",
  "key25": "2DtDHRzbsH7VfSMauU1vb2GffKozEp7Fk7h6hosDBuiw24whqSHpQBuBfoHC9v4th15bqtzACFr91RiE5iXcF35E",
  "key26": "4n96vCXf2q15Joy5CJgDbEEiD47GbQKZ4Y7RYT5wYVEEeZdhr7reUt7caLGHMJFftwKyz6E7NpmbHVqyXQBfEajm",
  "key27": "3pL77JBuKrrx4T6HYsTizqBo1SbC1APRCKL2C9Pemd3zv87KoBPQDn9xHTCkG7UhViAybRHTXgPGdcXE8Wv4zXks",
  "key28": "4MKkGhuq2J8HPhALVEMQEg51rQLRnwqaexXxJeSM34jmBEijrFtDk1tfZyGRAaBqWPYNjVHh9VuH7WjoLFC1hF6X",
  "key29": "3kMBfsHCtbS5TsbSGa1Ywtucq2G7wakkp2j8scjDLiWiA2EURTY5jRBnNWq1Yej8ifooQdGDvwBDDwZProJ35Uvu",
  "key30": "5uPfEyv6RwauanpYifA8kqU4hCAimuHuyDHWL3MXX1ZdkLni8TiXePXQBWztdq5FU9vad341TZmmYHgBdx92zeUj",
  "key31": "5rAor8KrYQqARNj3AwwcgMcTvt73XZcc3rAHstgxF2VFxkYZ4jKm6HfioSsdnauazi2SHtSZmkNzs92JkHCSV5ad",
  "key32": "5a7Nu4xkjj5qmrB1KbdKcba9TJHzQswkqyGxHNdTSwoimVDasEbw7ZsZ1NaDEZxDgsenagdPcizkUZ9aQ3PnRY8g",
  "key33": "3ctEDGVjpHR4QYahbjhTXrr6iwXxodpu9tLYgaPX6HLTsvQTQf19niVSzeZLndpj61ibhhqpJS2X9iGiGY9TNTML",
  "key34": "5xpTH7HiS2rfjTP6b9vSoyZA8Pwh2ywrYpkcCn5qpeV3yfdMNRuv4rCPjK2KRPS52VwjXxtrcQLzcmoifDLGwh2G",
  "key35": "5WU7S2LKzC1qH3pQAxZmCZSsFwYTKyqfDWZp2Toq81eRwp9hNzGqpct3PowhrkURt1yQgBxXcRAmV8u1trJpzPLA",
  "key36": "32zUAuaeZzn92ACzADGBQeUDhwsmFctab6gXZqqQmZSzSGv1WGo5PSpL9Y7Wu4JUNRzNP6GdbuxpxVCHcNU2yfUy"
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
