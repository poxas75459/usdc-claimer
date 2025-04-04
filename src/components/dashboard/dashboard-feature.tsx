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
    "5XhvYrRVnnEjkYX1yDG37dKhgwAHynW7TWoaynyJseao7ELxurpsDoGWnuuu9kCyXfsZJvkovBLpfsFsETiyaVea"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2v6kcvX9Hw7vRoAMPvtsBt83anZnguqgdtSwhH2hndKLnfgitXv9i4eej5XfEyTR3fjW5gBbZzV4hfPrAgbywxEJ",
  "key1": "2V4uXDNZce7QKHPPsPK9DPwAQh78KxSg3omz7GqqxgUQogNvVLhP3TEJgtDHkaVz4kWoesZFrKruvdemdrHiFRjy",
  "key2": "DdSYJhqkudKdXrVECgJTX2t2qeAGBoEcZhKQGckFdVpYy7LSw1csEySLAbbCzUeiNW6osMb3wvi9e6A49vnsf89",
  "key3": "21pjGMhFP65chQikiStfztGuTTn3qnAujgiJ4zLGfbJcTy2S9ePqBmq73KqZpthvgpRkhrTfdzrHYCf4grQtewfM",
  "key4": "2E2wLXKghMdWFYq5JA5K3BydL8wNYyFpcTNqVKsyWEG3tYdMUfLJBibgWWAhcoFnnvCogwC5obBoo2o37r5ire99",
  "key5": "2ewTXaRgA6e1ZqCgzpXGabJQVAVNUUon2FEJXH76i9jC3RM68f2snBPMwLLVEfCB3fd45pW3s2w3FTYc9N6Gr9YF",
  "key6": "nRpRuNts1SiEfgP7tTBTt4iqz1SowK1EXaq3S7NmJzRRSM1eJkJqx7Td8sEyVoFUjWhwxG8tcuy2hp1qtf6TU8c",
  "key7": "4atg4de2iPtNTGGQEMUC2v5y79a9QTxd4c13x5HgKXjWGybG6FfYAaCoUCMLBc7i7V48hZ1xjRjcDDqkXcRYfH1m",
  "key8": "52oNa2iYawKNF1SggEsL33qVhA33LugoEXGN7KMSSLK6yjyh8ySvXKWP5Lx2KusjxTiEL4fRQc14TnFTNmty1DAE",
  "key9": "2Vo8ViagqArddt1LUde6L599p62rFTNu43ThtcFTFJyipdJh2XSod2sP9G5Ukv3bAkHS8eZhaBqBd68SmPTp9CRc",
  "key10": "5hs9BapZgzgD1Luy8Lbjjnsa8f5rRyNkEhj5Dubo4uFBkgBTzex2iextfqcYDLTX51jXPCUWBcJsqQqyttu5EKYn",
  "key11": "273tS1taoha4uyEJ7kD2sNwKgJM7E9SzykksSdKY7VG4oHSAmDLmUJva3HPmukEgCDXWzZAfhVxiYY9yP672sABV",
  "key12": "3KkjnqzPATH3X3oDB2VXasiD3t5P3yZMPZQLMZtZnQyyzJTJjdZeMSQPd9fUNvxDU8xapwhNjgMtV9fCkFPV8s2s",
  "key13": "4F9mq9qLaVaE5innU3DbfGipCicBDPrfi5YUJj2oNWeAcyjjYRbkFhX5sWLwt3R8X6vGn7nQKo5UiMDPJ8mMazko",
  "key14": "3Nm1Rvja8E3yJAa9mWk8bzUFtH3M1gramSTvvvhnPRG4RyghEMTYDgXHkbGufpFEKmTBnpwZYy6sYP5cxcmpt4Ng",
  "key15": "5CesvxnUQocaZui9vMmqrshiTdq58Ym7iCMsvVazqVoA9LYxn2MAgbtN2H4dqzPxU8N9bEmFwxNaPvXXLnqQdHfa",
  "key16": "6RxrBEzHh7VmCeB3Xn6CkiHFkoDSsk9wDsStLcAYnPf6gn7gSTXCmAVkf32fPACMkXQp6VzXG1mxtxS57o58VD1",
  "key17": "2VQE6s7f2Zv6f7Lh8Rqzs1ezYMnn12Eh9VXmMsL58J2nojEJxGvFJWhpBRSA3A2W5sd9eJPhx2Tg2XuggCK6rCRe",
  "key18": "rCgbAETmFbdQpj9zgY92LvvFcwXzsUSPbkWbdeCSC5aZg6gQvCaMhEirBosk3c5RyZV5JezN9FYGZfZRAFg5Veg",
  "key19": "66SaYMJetRs4zXRmcby4XjcMN6bUMT39EzHiQvBCx1pCF8YufwwtASSupX7PouA61PFEMAR7f9FJSZk9YagHHzTk",
  "key20": "5N7J9sgnk423iGWdUECaMy9c6bcoCMzXQxuH5DhDxNvdL3Ba7QZpBBpxUonrSDQmtQ4Y3bbucsjCWANzmzco1cka",
  "key21": "3EKerFKDJPXajvfh7hgwubwaGjcCQ6bNafRDZqeX31izn2BwrUXmmQm39iBLSFxvshLEG31hfjdZaoB3tKAFZmhz",
  "key22": "4iM44Fiv2xKEH73uuQsGTwrzQAxFbiJqLV6vxurVYxxUXbk1ZNWqpAv5ek3rjjnLasb6Yd6GYokL9BvcE96CqjkP",
  "key23": "Y1MSCdkp1qw9UvPJYh2enRMcGSLBiN8N77rYzdDJ93meDMf5wFuMsAcvUqXXDXYov9H9Xdj1iy1Eax5yk19amjA",
  "key24": "Dia4yojqfGG2KVPuDFe8QT4QnQcd5prLoXQJ8kmXZTU3r7kDobBLGLiogR9o8gpJTqCCmq7ccXwPStzkqhTgyTt",
  "key25": "5THYCZTxHip6TGbwifim98nQeWHnttzuZ6eycevhwG7ecx4Ye83KjipsJXvVhevUDiyt7FpAJr1Ksr98bKCE1Bf4",
  "key26": "5Z3EXJfkhowx64eY6kA3NJaEPhFi9FAbkYUVRkg3PjDVrRt7sVXfkqYWGh6mLQkjXV9NVHbALLeAwWpBkizWMCfu",
  "key27": "Ae5RRNRDGS77QSZ5FJV27Y1MyVzrnR2Zg8RouimJH24tdmBRopZbPzWxrAJmnRMRLJ4YKPL1vPQoEAV5ohQ79w7"
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
