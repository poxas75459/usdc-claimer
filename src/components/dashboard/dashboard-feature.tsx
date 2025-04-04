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
    "2WbAkcLfmNVYnwDUofi3pn3HZEHfSwMXGyUaj8rChuXrssf51z5mR85kY8t5CpgwvwQjTqZFrhJnscrzw1kSoTRR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NJkkd8c53azoStSQsbNuNcwoZ4Ze3PXPu4dAGb2Axj7cCMJxB53CGm3doQXXYr4AfYxEzxWRQdX6QV8tm9RjXoc",
  "key1": "4ZrZNFp4eEVj9qZPpp6NjdYEp5g57SeZQyJogxdJq6onsY7yFtCN5nj86BK42RUCeVtcTCN4nEXMraV9hTQuSsfq",
  "key2": "dF1XQvzhrkFGVKtXF5dSVQPAtRZg4BXYWmiG5A2VuU5fQhnXxp5teG8XNkQ4n3GDjSVqkE3YAhMJDnvzFbqc6XR",
  "key3": "4F6zRxYc6oSq3ZFR4zvRKtZDyTu7tw2qhec2r647eupSH1BJ4EvC7mg5z8VKAjndMRrYpWxWr62NFd2i1LMg7WNE",
  "key4": "FomXpxPVKTmf8NtY9W4hyeokG9hHJxceuZC1zhUygA6nnfWp3P7hMrmEEAvbPiavxpyEmpMr6uBAUgYMHP5S4Bb",
  "key5": "5WjbWXr2GVP5eDJmUrvg4knPJBZMMw1qpGXjJ6pbAnjcj17wAwEm2FXq6i75zjyUeqyWMjzioUXH1251AJDHSewy",
  "key6": "2o618zEEyx93DGXxk4M1vypVB2ADJnD4DW9oYbRZdzfd9k2zCFhwoFrboEMXEX94je3cucTQhD6YjpUHgn9tChRo",
  "key7": "Cqz2E4FyCQpg8fsTCtgSxS1kw35nDEh7osQXTfnWxBuVeZdfTU2V8duxWsw5Hro29bmAGWkHUPkA1KRi3LS859q",
  "key8": "3KpuT71US51mnhATLM6ZidkPpH9t7CxAwhtXn1GfuxU9KM7Us2mV76BwpQ26f96LNZo3NXywFRt9HPP6K8MSJ7Sz",
  "key9": "S5TcoEMhRdVYPmrxo2CrcoD5QfyRotUCuwWiyBbCnSDsEWyMy3AcdDZSdyemAcWHSpAjXTjL54998bSDHJevVVE",
  "key10": "52vKGdK1NNVb5aNWBzpnDfS2BhXHceus3wqSteNobUjPAiGmKqEyy9gzgzXXvpyVX3DDUWfJ5x8RSjbX31Ceh3p5",
  "key11": "4Q1ap2TvZZj7ERrDr1xUzfRq3BKfEUUvb2nz6DDUFZ2pefnUpDeFqJmehRxDbHwo6WmGupFQT8hnvTQAfKytCko6",
  "key12": "5cJkwRvH3Lm2cPxBpBU4KrkGgxSi4aczyRHMDLK3ZDdTZnyf7w1V8BEsu8KSfJLMdMAJtd634ZVyMRTB5DeAPKS7",
  "key13": "614P5pGYdEiiNXazyztokxTickAJpSRFSjaQxEeEewLrsRjceJNrn6WKhJZkyp5i5SmPbEx3KvM3UHEq94f9og5n",
  "key14": "3HfCn7EHLynSCkAcrgARAoUegFgz6Ghg1TKaKPf9WY1n4t9rB3RUmMBochJJRrqQ6uhwvvpCSotb1U2EKsUqsmYE",
  "key15": "42W3tmYuGwvWB7uTj4R9SwgUA2FJvNTVR5gV9WKGM3T8gK1j11QYBRvt9BDqoadXoqwX7gwaBz18F7ghedAD954W",
  "key16": "2iMxyrGqBZZHgWfHPC9dD5cucUQqGyeXSPHQsCq3vnDvi3ykg2pEDgqjYjNNKuvjFn9wdb4kcah9e4aEE3QDmQdx",
  "key17": "3e2wzqTG1ep7AJY1FSYoqYby9AM45qdg6fjuN99bKpVTJJqphYcuzgUR54KnkYWm43LgTFDcfDkWWSGXHxx9viuL",
  "key18": "5rZF9KUUffqe7e6eBsWhHwBwdfMhsLjef5FxuNkS4j9Y8znPPYJBKBqFJsh2JtvGP3M81LQ9EA3Rq22toPhTwi9A",
  "key19": "5jVKaqieyeDEwVXQCbF8Dijooj6EneoGE3m39uYDjaXhH4mCaCZmzLXDnTJGA8HQ6ZLV9Hako9vKk2HMcKmwiNRN",
  "key20": "56shPvcbL9R6cKcHYi3WNw2fGnus7dpHK6BV53LzfXRuRdmsXbMnLWzJHd7UbSqN5AdJfBbnxX8sfrq4qmAKcAwh",
  "key21": "3KSAzeKEkrH5gZgCEyvmDcRMyjLz7YGL2Ees39p1GGDkQSCm7PoYmZhcaxjLwLEKieuezpG7UCgpK4e79nrFBFLs",
  "key22": "gHbDpWj3r6YEZzSVeQ9dRytdWDZcofndtkztq5rPo6LnFGCEEHTR2PaDtQhbLq6cdmQN9rBPGCDyojYRGCL2UbZ",
  "key23": "SQR9LE2juZA5FGHw4QsrTAQrQH4qDbYbVZsK7evpDEY1ZULJrjhaLtytzXoZtqqNCSVu2bo6ZLexAfrhKZDNGKJ",
  "key24": "5FVdLvwrPHMKTjfrbMgb1xEBLeuej1efHhDht51zesySkhgQMbqA9ED2YEbw1j15YddNq7gbgA8x3UkGg8Z6n8c3",
  "key25": "5tArxtPiEaKGxUSyjq62jgAMB2UP6J2TwXEWraRycg48b1i5mtT4dNzP5eaodsu5JiLCWzQPqjFbiCTXoDaMkFgt",
  "key26": "3FLKZHsZVYbyvz1tqgvJLAsQX1PUWjp5Juzo14R5zyufvtWon4GnYfBSenpqquTy28kUXPDe6yt7X63mNkFnrRfr",
  "key27": "5dMg5LnKXh9Bm3uPYHLMu6suqeQnNidu6MRTpU8dEQypzJQYyDB6NXVZ5KNdrPwmXKu5xGLdbD1TP49cNzz4ZLnQ",
  "key28": "5cXk75FxyGyyL99Tfxajgxj4gsY3ndn9v8BeXd1A63wRrjV5nYtfrHKhKnXYUEaHijjnzXEgVbL9uC1yis43UMWZ"
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
