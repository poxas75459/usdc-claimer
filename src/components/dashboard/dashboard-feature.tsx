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
    "2QXDCWbHotV6drfuFhrMKtuvGeAecL8UgvMkuG5LTtSDq5VjMPxnmXZTy47koTeQr6zCEiWDBSkPcR8sXJDWpRhw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "458KrQzb8TSgzjMyUzVT1eW3DDtfWdmEuCZzgQ2rNucXb34u2DYZJv2rFTfHtefDEB5KoPceVK9QpixdGTppzxEY",
  "key1": "5Liu6LsnUEJfprar7p6t2AtGr8JKUsLcV2WYXGrRZtiGwZSeBeK6EdFSXEGrSc3beGnGwNphm1LwqgAg3iQWekVX",
  "key2": "5jTa5tHzMCxGNhidSi8fboVxJJQchqiEcieDkZZriZPoGx3eNter9WRRv43JqpgVUjv3PX2xL3UMEF4ByRenhb1C",
  "key3": "2Gg3XLejbJK6QiFX9FmY1j9r3HHonkkDEHGTqmLDEh4y5uT5aoRGzeKEZBomFXGphjr5sG6YLWN1wtcCkwEaVsEo",
  "key4": "4ZkwGqDjfG5GsYUNuwkUTUC4EiaNovHUQ7b4MkQJs8raMtNJcRH1EaH4NGfjmfNo5ErNbAJt9pPuYqCRdq4UQnyt",
  "key5": "2UWikcpqe8sWNMYUoQtJExkNgx3FiTab5ZEzPY4ntSbAc1XeTHgkbypZ1V1NsNp5FKeKJtLKPRcCa2u1TTZf1GPA",
  "key6": "3wPxnDg23psjdE7TmsouRKP9o94Vbe5Ht9rajzcW3r7pJg6uyEf2U65sbzAu24iPCmnsP3MksosY4WeEVSTxPq45",
  "key7": "5UFyCfXtjwgr8BZk36oDZNRjhEuCncC1DWLJMLAe1ivCX1X9XSBPsvxPQNazuG2EB9BEYsxvwpghsrmzhrhQc4iB",
  "key8": "2qBVdE99kbGTPg8ieSHJEUBASjNLTybDSaNnQnkzuS4V2TRWfbTScYUptBxpCFPGbM4Yph7hC3gFQ7zn1B275zbz",
  "key9": "5AkVUX5xm1FTRzf8LUFihvYBKmDDE2YhfLUrTkDYdUFg9WFmyMKffqbhrqTNfcHk7NSFt7Vwshrnbz7zHPk8tmyR",
  "key10": "2ikM6ZxL9jFT5DdtRUkYRmpJoQ6f4PB76PZyi7mLTKZFpBdAS2hGRQfgRebTHkqgBeXGyNBnnECr4rEQcyefSmP8",
  "key11": "561tGLjLNfZh4SWWqPUNvNfAHd15g3JzaqW8dRcPFvqLVfycRuTMvC2u55e5jDWxpJZUeJ8hZ6RuEpRCpAuyRERo",
  "key12": "2syoVgut7hAazRL5rptw2RoPaZJMne9zJYZwBk9RFGhAVKwUwZAtAxNgwSh8RS8zYvHpgNERxLQDmtfMVDmLMZEw",
  "key13": "2jBcsxSdTrDcJmzD8Y3T8PMmeDd5vvt5YKpYRyARX3yH9oxvJdR4YBT96CdYK5yRYkjS6e3AAptyyr7feEiX6aPy",
  "key14": "4v2CxvuNP8Z3GTKFhWY3XeE3RTmeUdVoH2o8Wssfok8gAdZ1CVvpqxPe11ALzoMFJfrsrJwYnRVPzpzWpn5yDUju",
  "key15": "5ys74K8Y8Y8Ywmim2uNtWNh3G15aGCjBBotpbsM7oFDhvcP3WfRBWQ9VU9WAnuqEn95cT4draTaRT4A5md5YyyyC",
  "key16": "54uT96dziYDdFSCkiMM9yiPN7THTxtBTjm5GozESsiRKMp69bVXQ8yJeQFATLnJ4UsKafuNjEx3k1SaxTMnNoEuQ",
  "key17": "4LMvD3fNrsxGs4WHuAe11vHfohsCrkdW4LWoUrQ9iUnEBh3fhFxRPngVzYutnjytN6dSZ4LY2K51MxhVEq4F9qsK",
  "key18": "bqRZKWsh2cFrVRjcWrTT2jBe7npwcgGeNURfZX4Pi4gY2MWAkHTpfT3eYxzfPwUTzWGnnz6QzKZd4JUjxrpvgAU",
  "key19": "3D8bKyTSva9C4NmM1P28dnwQZex7T35ifJeHboom4gscycLXH9r76GpnFbhViprPpRpJy3CUWBhnezCmzCfSfLbu",
  "key20": "4q2RYTMHcpH3Y5mXCsJxV2bwCZg8d7czLypkoh7CQEQ6hTUF7dJZNzipFL4JavYqGB2ARXCoaq8unXp7UWCoHeL1",
  "key21": "4JToeWYx1kcWYwKzy7nEKPMQ22F4FCsjgCUa9ip1otYGM1uG2YUAPvB4cATMuSTiFoTQbBtXFBEZGhWfuHwpsEdE",
  "key22": "5rXXLwpgHUwZvDdR2JCEBZqhHqaRcQDR2sbi8QAtxX3GFwNXNuLyuN1HjGvzqzcZLuUgDpNSa8YSawVcfwYxXQSk",
  "key23": "5vLj7QYggY2R9uoqRK2pjdvBLdNXoPiw5Csr8PrYoHSqxfvLp2f3gGoiAHnDwQj9knPxiDZCzjxQRFYEFDbw4Hcq",
  "key24": "541CAhbTVaErPVCjrpoEaijqjjrvRm4TqcVumU5CUKfdnHoZmvihcBGvJLqm5Z8m8scGDAmcoiopJQcNtCUk3oYQ",
  "key25": "3VkkzMQkBAVZ194iYmZmxmsyJBdcF8jyUZYXng7gnPqNUfJ9YZRC4PU5eeJb9JMQNqHLCo3JYJ1aFqvHsNE6shGB",
  "key26": "5BRFBUz5iW2vCU4nuFfKbpwRp4oSggE2ifTXDP1x1MnvNX52xt3asKMLZNxQRpmst3XPj1T3SddJYDBiQ4Cde6Tm",
  "key27": "5JcPvheCoAh44CBctFn7mdr9c5LYPbYcC9qo5ccjckZkP1vBLzQtq2SEmUdBsegNAJBYfseSTjfHQVEp7ezZeLvX",
  "key28": "5hsFkcCn1ygmBbeiNYgkb6d7zfghy6QpB8mo3d2xxM6NNRJNQ78Vm2xGs9Qt91WuYrBWMyy6D59vKhSTMXnzZ4Ec"
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
