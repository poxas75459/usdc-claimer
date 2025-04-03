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
    "4gztMVVVHNYeJ5eT3qKByuYr5hgpqxDwS8W5ckAGVEGhgJTSZ5UxUZtUbnMvbgVKVNEX4QT4jTX9Za6TocEHVbXR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LxfBsuLqDGbxg7RM4MwbeT91FxQwod2Hf4m4TVr2oenS1Jrp5yTvwQkkWchNqAiCBnCw7Zjkw5d5Ej4uw4MTdJg",
  "key1": "3PnvNZrftKBtduP8TFBHHsjxZRL3tG2w1MQk5AqWkF9WJMz41Gp99mQWBsKYnofMt7TvSvqENynKEaubR4CQ2ZkC",
  "key2": "5sgDR1XgxBJ6NZugC25T1erzzc6QiNeHcGZ7sA8BAMBFWjymwH1uLQMCEyKS1PdS3vqLckQe7dhaMH6rbBk6UWji",
  "key3": "zobUbAfAdxZqp1Kd3a3BcrsKXGrAcHgudrqgBY7nNziSjEjmsoDHzCm4obSgckeb1nhRDj7xSK4ZEwEfdKCbCwk",
  "key4": "CBm2now3eLSpkioCe8gfcucuGweWYMuhAnVEpevarkDpCVTGGHexEvbA216PpnzVFngaJU92dCyKhr8AMMejvCD",
  "key5": "kw1FLwNgx125bZ8XZ9Y1jpVmFGWV3nX7LJx1k9D3uWZQZVCMGPRXDd2UDjfDV12Nj1nPY7groH8Cai134VLeYHg",
  "key6": "579uKRis1Bw5vPYNMGnddoK7UZxbGPHnUo1ZiXzc3rHwbJ4Qh5Zr3tGSMirAYRumSW6hFJhE9MoAH3sCpBs96oJ8",
  "key7": "4pqsfQAgSZqXe8uFS8EWvbr55EWTpUbFwp4gSf9ndg3H31f2GPRGoHckdXDkTHaFT6HPbLa2tmzGdBapw6WNUfn9",
  "key8": "2RvDf8HnNJowKqhbkDdSrSyXRT4vxT1pkX81rHai8NvA1NVB6xC4RGdzqcXmyLBkCYVzU4WXWfPrwW1JiCbwsqBo",
  "key9": "3xcL4vkvrwzaqKzMN6ZfbwjVxdHYbGoJrBNDFdjChkcSxwV1mJXmJn6L2KryRNM9G897GvnNvY9zanM4YQ1AeKo6",
  "key10": "fPfjYkkcVKc9ADxHKkQhUX7p3EGGZhZ38Jo1ft3mCFstZgtGPCKPDvruNW8QdP1X3inAwmD8fCy53zvWheB6WGS",
  "key11": "2vsbVV1RSKeK7u7dqF9X7bWRpR16fvox9JtAdLaHxvXbAJJXLY7D6V8w5GwvafxPq7iPjWJEHHHQJQXARtddcq49",
  "key12": "5bVVARCYjik1UnoLVu4FnstM21rR1Z9pWUk8YF2BHUXyZ7EbCBoHe2UKvfonu9E5yCZDZaj6pxX4ZKf6znCMsXNL",
  "key13": "4rNDtZvYwpNwZFThV6aTUfRAZyXpHo19F9C17T7aQdKweCh8iXFLccmNKE88QxBDvHqshDaieQfJDH9bFZ5j83QX",
  "key14": "2fSvkVtzicM7GsZtcW2HYJ1hqC6tiFMYNt1Djn98TAZhPgAeHqZBqifEdSJWhBZizfDqiMeBxNhjUZcmtqdgwHCx",
  "key15": "KjHGcWYqEwtB4RwkdmKMaRBJYDQqKTrXCKmWBYB19wcuQMvsiBB7JQq7VzRo5ZKAw7J1dK61awRA2xAVPxPTKZQ",
  "key16": "4S2KeXr2T2FbbHKHxKQsRDkStEHxwqYg1b7zrZ1S9JSiYUHJDaJsAUWEu8abC4sNeHEmGv4XnYZhuGyn8TkwpcPn",
  "key17": "2JXFhWNx2k6iGDYU1jqB8fogLaPvmhKi3dMVRear2NiDJ5u7PDj8WjydL9FGK5c8hJF57oQxQncn1EQ2BagGNsLg",
  "key18": "4xGsnPJabjxDGySeH289eg3vJcPk2BJa4RvztqF77x34GQoPza1R5Sy3qoAHWkEhszzRDBPfw2RPbrHcWSMPnRqe",
  "key19": "4Miprah3PEQpqsQLmVBwyDup67GQEbh6GahFfuutq1FvqkVN8RMdDMrvWSurqWaS1nQHb1BnEyK8EamEKsmXdqT4",
  "key20": "25vkhoSUkyDJo2ExYACvypmEjcN7sr2fwPG6TYjjiVjJYtnyocGThKKcRsjWEtCyQwNU5urXYHp7Rw1uznXLh8GZ",
  "key21": "34rLMYr1VtoRNhVU3APHTFxuTh8x4Gb5k3sW1FhKjhhGdenMku37wJiQN4tKorA6sDHETxa33PeTx68ZzCybFgqx",
  "key22": "3SwQscU7rpE1YwiHQUC1kPdAM2fq7vxHiFkpweE6pHSvZuzzbyGVJNZZTvkFnr8NsvwXLL9QK33PEM96xHDw5hwS",
  "key23": "49QqTfg41S1Ttfrf9WSMGtVojq17vbdRjM983Qqic4neCfJvVdUtm8WqDEGDAqv5Jj8HrQAEZBrMseAfrnjTwuvQ",
  "key24": "5UtmHwWfdPEpiCAq7NzezXedWN3ccE2opQBX2YA39jufwkJXeaorXkfUHfznyuPjanmtiMmM7dhQJp411B8xR2Zq",
  "key25": "44w8hazbsfpgMo6oJCZAtMY5wGTk7s67e14WbiSSsX7hP5C6v78Pww3v17iekhopyAiEQvgTPoqtGN3QiQLZYkK4",
  "key26": "k8gkcbfLLX4Rw9nZHzpRZi3u1RZjnzCw2T5oshApfXnqS9CUcBJjPg5aYZacgFgpmzaddop2hQDf3dRp5Ag7SZS",
  "key27": "HNkkr8LownmR117vds6Nt3xJUGok4A5QH85cxGLo4dC9mNKgVQyNePpnWTbF2oTjaxYEnsiFBbXHKPa1VXJ6hcS"
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
