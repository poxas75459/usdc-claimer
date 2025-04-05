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
    "2hVDtxbfqFRYUNaDy9hXLq2zQDY7vUndYr6FXfdSw3b18aaneUXSXGbw15n2HSYQHdFUgSJxv5gZsCidF8mhVbsL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "357yDCKQVYFQyjLtHrAmdrToo6oxHj2pw7QZYpMMKYsFUtAqGpWUmVyG9Av8M8fjJf1Q4cyPfwtXZzRhJnQztWXr",
  "key1": "SF9ywoe8pzwUXixCLX6NubhE7zwAgPSNaPHHSPS3tqerA4YWN1tHigp3iWM4HCXGjt35dge3dKJR172Sv74Q6Q4",
  "key2": "61xKHJVaf8ozJSbyGMqhaS3ffaVsK68Aye9WUrW2EaTMMZCJ3xiJ47aBcBnSQGzUtPmUdAynPuazzGmuYexGRZxp",
  "key3": "5zHDePWQ13j2sGu8sqKJPC8rAimTYwGVfetogyFHpmaMqZNh837SnPLLz5J3ExKsm6ku3iuNEDrFXGLC1NDrxZ2J",
  "key4": "4TekfNUqNQC5fa24seJyApzUrRvX3z3xFjsZHhGqc3oP4sa4vLpVNC5RbSn5aNcQmfagHPa2oHdzdqab9K6UbDfs",
  "key5": "4VbskwUKiRah7E1S5fvdo6wsAs24i9tV6DPri1ZUasBqkVTeAcZVQb3safgPHVkw1Dojxi7KkQ9uSPaskddV6zz6",
  "key6": "3BrQAksjrXbZXDQSAxmHGfJBbUWSqw48txrSg4RWcP9MyF8BD6TsqG65dUjYBmyjCLjzoMjVRcy6hPmRbpaHTYj9",
  "key7": "2Zp3sdRan2g5SWWs6QTXFL5AM4PpqyfdvLy8Jwh6Zwv5a8N9bocU6JmuGER8j9HA42bfZqVXc7HM6rfqguxofcXN",
  "key8": "4aYffNLA8JKnQ1dHUUxikGmTWa4wifqgGjhh1iXvtU6FFTwd7eieiexufEKyNzJYNEQiRdjeTHzxq2whSLRuAxN8",
  "key9": "4HmJ9qKdAaDudMY6WArjWYzdB4TmzkWP47dDHQzjZW2t4BEhHhde3MQt2DX7sZF2YLtbY63kzdLzsydmD3sW2hMZ",
  "key10": "4DWcbHQLWV2y5BZaqvvN9wFufN5nTeQ8dFvjKfJpgoXTagyM4CZWWBVRP1VtvVL7fZVRLZeDQLBsz1db8BzHmxjE",
  "key11": "5GYPWqfm79W5FXnaYbWqugLKUtdKChjzLtR2KuM4KXapW72xpUVMabvKPefRaaW4KgBSu77qbJ11xMoPPC9pbgDw",
  "key12": "2ssY5W5T3RPhu5wGJmZ85YCyaTT94TzsniFqhR1Wks5f1xSEHtpkpfNQddWpYiABu9jw7wgvwg2tZRUaVN4rsEZE",
  "key13": "597mSkqH1SQtHNVQe9cKWUjgvxH6Rx9ujnJ1rBUrNASnL8XUKkHWnFcRvzJCD8Xoq2nQr3qF4bj9ddyLme18cJto",
  "key14": "uV69eVTcEQjzMVus2KcneTPJ4B9Lcwt8Mt8cT9STj7iXs9ZZ2g5GeP2tuFzTcVUt7waHJgbDVRwRWRFQcegNzQZ",
  "key15": "3z9kqbvW7YJw6BTmJoVSCQjrm9F4UXPD592qQTXj1L9dkyRFzrtKjvB64zHWrcC4CpZ2FGnv5qa39evu27sg5iG5",
  "key16": "3cY21wtaC1qcPVLhDpaS8U9cYv8zwmwkYnBiV83dCdViZoYgAbqa9htV9keUj6mSutjbuqd5PSfjtHN91mozZWRv",
  "key17": "3bciPaKKWakphnjzZdenLQZYmACFs7h37x81JQch6mfRcbJSJ4naYZZt1Ks9t4gV9haTko5xExiH7ZLLaKadNR8P",
  "key18": "aC1QsfjJ1SbztmdEKqYwD4LssVK4SWFaKDVGkEKAZ3YH3nSkHckJdDuGXmL6FgcFg1yf3fyqgBStENkN7xu6PN6",
  "key19": "44aqGSTzRq5xgkqXoUThUZXY61E7Fp5t2VTTH6UuABxNGPydocD5vP3DAbC4d8jzSRjcvR4XhDTcjiMXts8sSDsR",
  "key20": "57pudcgovTAh6DsLqoCX4BX4Xq4X9aFHtZCHAGWR5DWaVvSUrdwqYHb4CWE5vCyz1PEbPwaNXshZHJTpQPGEPbJq",
  "key21": "5tgZwSBhZPTGnBJCzxo5Aa8Da6SNVh4uzsvD1Rz4T7UXnNPDxij1d6jbpfThhgLkBCy5FToRqdXdgU8Q5hLPnYXo",
  "key22": "4gi5FRa919LHn2LenJbBDJu8xjAx2tfFRELXvXMes73i6AMbi5JkpPtYARCSq3uojq5J3MerswAXxgfXtUpryZGc",
  "key23": "45CqkmqW3t7MgruMJWFLbXmfMFDDq4jpL8BY2AAYqdSSbR6cJFJnwD96Nuy4Svq6uh7etPmUEpZWCgPXyoG6FJYN",
  "key24": "3HeR2a6oJ1pEdzMuNuXu6a8rsJF3T21nfk2oLYkLZ3kPQgqNRNpczdV4tTMXWMZKwPD7efcdNY3jJrWfEzxZkHHv",
  "key25": "5P4sRxeJnosRL8WYSigdA1YUvLbxpoMGyF4YurLNKxT6sAeWv77jF5L9oy1drRnjeMDoXy2RW1LnYAWN7Xc1anQ8",
  "key26": "BAyUF7A8mcrXTHsiZFEH3dk82QYGj9c6Xg6zLJpXZtQ2hwFNaAHKb9Ke3NP6F6oVXmmjR9tmEAGuHM4oum6fzSb",
  "key27": "3xNnTFkDfHse67J78YeaqNrub4cEG8daQ1V2AjK2qWs1ykVXMz4Cggm882DW4ao5TaX6FaSyjJ5Ezp9X77NvLM4C",
  "key28": "54kDw6pL8oBrd2hi9LMpYME5mZDyQHPmVuSobSPsqsNp3DC4R3zbwrdyezopCoRzSp4Av8d3cSF6fBQjoPDeKVtS",
  "key29": "4QEx7iiW47LcXjJbnbjP5qN7QXCt3WhMM9exLKTjXE5tpwPXQEmfYgUmxiyBCn67NNDKjCnDzUrskoPtqpRfD6Zf",
  "key30": "f7Q6GgLzpJZ7VfeChy8EHKsqoHx45LoHigBmWbZvkuSXRAEk4jBk6632ctyfqghqEXG1VcPTLrof17hLSpupxbF",
  "key31": "4H7BfwNwP41qh4LEBKpjpyNkch4dj8qk41MaXPFf7WXb6aoiYi6oD96g5XZBMQcRCoLZFuQpAzjVuokUgbwrRUhN",
  "key32": "5KMhFUcV265SJZkExiFjJ9895N2GKfwoN3m32kQ2Lvg1jnZsVBws5bkRD9FrhLAT1GVeSoa4THTGiAn8SWzziAnF",
  "key33": "4SagEidYPV7WLVVxG93AiVDEfqQoqeKixQCZnCaYj5zGn6f8gaK1r9bwyETAPSZzfBBb4Vfo8eS49zvysAJbazSk",
  "key34": "4XTsYWiK69fZVGmnwSAdMuTZARJUQsKggiUzXy6AgfQpVFjivN8YYoASCymTE5Jszmxx4f8hqdLazdyMWTYb5n9x",
  "key35": "5mwGEUDAZo8vRYUTGQQTyBePmnDHHW8XwonUiTTr6UqxE4fRj3CFuLyBtTt9oHRx9ASyjh1HPRP1rj9h8mNyWFhq",
  "key36": "26ePA7Y7KFQsdbnxjmntXc5hdy4jLpDWtkXP9XivPHuna9tutyNt83coAoPcX5ZxRi4qvVjd5FPwS2uHbU8Zj8QY",
  "key37": "3KuRo8HoKpfjb4bY3KvYfxMA75gs4BPJwv5brTmsqTfaVFKT5tzj3eVAME3XnwpUVJAca5PqHCaQo65FMyUMVWZR",
  "key38": "5BWWUJbhVscHLCeCGTL55KrLGkhsUbDp56P1XP6BTADLADZfG5jWfHHRwuCmmJVapoWtkKGpEshDVYi7pXBLCvXZ",
  "key39": "TbctMoXEGc3AXMwNDBZ5G91jdJGc3k5C6Feg1wbZShvxybcZf6oaXaAPNvKkqj1mRRnwxT17djrfQj2i65kYAX7",
  "key40": "64WP2kPrs7kuFv39RuNLeZkE9L94Wd5EbUbVrXZKPxEescZQM8cBKKuJmD9rGUptBHTJtbkaVPwaqhy8MYN62Jf",
  "key41": "D7cCPCr67JM2i5sxfkMyv36m8fKSbFsvnpYiwowhQMrz12wFtMSvmfzW3FchEcLdMEMGqbdNAE24Lkwvm9ihz2C",
  "key42": "7wRF8DC4NMHoxkn28ATuwtTAAvbMG31K1Uf6nUeX3kaHDQFUkz6y1Fbn5XfokhPQrhHRbck4iZnsvraS48bWWjk",
  "key43": "2PAS1ssH9ZTMdXrDJKLkb46K6PzVnhYgUdmfu9m4eUmjviDVvvn2Y33tptxwDzijMwA7wYjddaCtARQUJHwuxsYp",
  "key44": "5sBGh6Ps52ArXBatgV9KMRGmsgsxk8h5iUNznXeNj66ESDLfU4gMstf3Dq4LbFiLs8XDB5J8LTH2yU8qWxVQvL62"
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
