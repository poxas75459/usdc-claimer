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
    "F5m4XrAifukKKZoZfcM1RTs2LhRxkm7EK5WZ8CqX3PPYSFWMe2HChqcYaWqNUDirrm7fiNA5WJYZwioqz8hwYRR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zjnhdv2TwBctYWbEHKWBRf9htJwvLxPGBSx72Nwxop3PqJ1NheCGkKkbv7bAWpStFMTDH7gNJnmCUi8qNoZRuPY",
  "key1": "2us9UAp7iMjofHzCYpeGatwUQ7H4K4gujgmEHpKvEo883bdMXnd6yVy7NV4qe1h3FfbBYHyw2Y3hwjCfc7j4hy5y",
  "key2": "4DYnr9CvzbuS7bbYuNsbQ4RXH7CbbuJDFHdCH6aKhXRuqkrSH7gDCTnsvv6yKXym5QCCgefM372r6TUPMAgwWTNN",
  "key3": "54YX6rvsMozpbzqvAV66B6mx8szDRvC7eQJun7PAFosdjFev45oBwMqZdMu6RSnNFvv9fjddNLfWqXZTxVWn9BaS",
  "key4": "36yVRLSFgpmZgYXnpWQ5VnQnZ35iiDLGqSs8wmAPpYdBoG9PvHJeBde3na1tEKzBduByKc75DiPcYpPEp79X9niA",
  "key5": "VyjCLmCEZXa6bKZfRbDKzBivi7Kw6gcZkHaYa8uku1Y3EiEZpqNULZN5unyxmoWXTmYgrpoYyBvfZHSAedRQNRw",
  "key6": "54sXQ2hD1KHmfg7MSBSjHRtta8D7aqXBFxGkvSf7XC7rPRShZ9jtY9tVXNuHWzqdCtxYfSbw9NmSKesJGxnzWDEz",
  "key7": "4RYArXUdj7WEiUjgJYxgpunVsnCWq4undh1FtjcVz7GDQgLaMJTCUvLjoVUKm4SMj53ihEEQrncT8nkDLaY3iChx",
  "key8": "2vA8z6eAaTnUgLxi9GQmKBHDnyXfYjZpVrbd84JhZdkaCKdDri58Uk7TWaJnVxGPGoKLFPK1xFDHvhzFqfHoPoBq",
  "key9": "2moDWts345kGPPUrLkbS1nT9wrfUjcBNuLnVDiuhfGC7WQAinfBoBxAybYMK77jeUwiyo9RCNRAbQLRNzudoKQuB",
  "key10": "rUWbiRepBUvCfL8QaRE495ZyBu74UHWb6nbDGMagoVSTaw7FvpLusnj7CLsXXNvkTike92Xnvbcy2Wpq8LJLnHd",
  "key11": "5rHYx8qF7mDhuNae13iyFtrcxDuQqZHf6TR86hE9JLzZKohzpAFXHB7iCthibPpNq2QavvW9idqwxNWGvjEqUddj",
  "key12": "48eCHUALURSdGVABRQFaQqys3kURebTow64XbPjqig9DnEbXYczYszieSK8T3PAEnxYPmWz96Sy6oaMLmtD7Z2V2",
  "key13": "5ZKA6yGgbtf9pu7CQP8bhnohhSMCswzTV78pBBNvpVoiqcufMfyRunhRXWEwAAYwDPZApr51jEM2bFyaMvha4iC8",
  "key14": "yJk9heFDwZiAgTv6HhSdDT4xisG6rpFP2HydXB2ZcRonrBgKkpkLwR1pRv7gZqWNMS5aTfDfTknfG7Kh6sjayAU",
  "key15": "4W2ixE8CRLBpv6NHkhwLATT8mfzTMerQisqmacfCR3j1J7GgszvmnepMBfufQaPS9tX7WFGBYCwLqohPPDPxRVBX",
  "key16": "3C68KQPk4foh7Mg6Deghg1cM1yMQZu7ecRkvRcHrqzDY3X7AxDFSRmXLpY9mGTVPXk7TmiZfDNw78SHKqER5ey6d",
  "key17": "3yZ8X2cZrLcAsuL4NipKC7pSzdeRBu55FYQJhnm3JBwkSHW3rpnZ9nPiBoEfKNKCY2EmKRDPFvwP9PEVxhUHpr47",
  "key18": "3yTNRbHjZRdNxEaLTXGrjN6hJv55PpjQsbchr3C83syXehrXE5XDbr8CnPoNLcXe4CBRAGRuqBhAJD5cf12zsYjG",
  "key19": "wpDUB2RguNBL9v2zdMnvbPfxRceEwhnstcBNGh51r1gK9A34ttqzg3bWnR4jMw4kwqM1FWar8fzmnfHkdNJ7YQ1",
  "key20": "4SJMJBYgct2DJiwx8oNZ9PQHoerAzTFqgFqeybzKN2pwWYEdPU6DDH8FfunZvfwSEsMkEX1r4NcC8JerEJcWLyEx",
  "key21": "2XTiyrAKK9gtdsxSdu3FZyZr8WsWjeaMHcNoxHPSPuvNN9Cm4EFT3sV7jkqUzFRtBjESykQTBBQuNHFAba8kkPqJ",
  "key22": "4tqp1TTv4BkNQrrZZz9zgzUYp9yhxBUFLm84wbAqzBEmTsJFBs2hv7eazYUk2jpfbdKBGsmAGEKA1qEjZZ2hGPcD",
  "key23": "3wTHnULTifay7ctJf5SmvpQZQN5jZuBc6EKyVLsHcuCYQZcnQHwZzk5Efg78NBexMpCtomsJeNNZiaDYwFdBjZDs",
  "key24": "2QXVrKFpeWkimWmCoLm7dp391qhCQfmewCCCnzTXefn1KCXw4AKWATC6CQXSxfWGasjAG1oVirNMWKwgMV8drLjn"
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
