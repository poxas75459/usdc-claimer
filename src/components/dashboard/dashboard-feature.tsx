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
    "46dZxSaftLBSvNbLBYqP6YWtDtmbqa6SJW3x7ssLiozrHrAwUMvdBYnvX3kHPB15UVRtCp2Su36HgqkUhEDYovMe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2h5pvdtVPm38fzxmek1GKeNcE48D8KYEGDuHB3f2YnYGcxpXifo1w55WYGU8zb1ou6gUYkoCSDD6yDVMrceXzCLS",
  "key1": "4iBFowTCE6T3op3gS9tKNQ7WdN2iFu6ZXu6ekftnG9CSGw8PRVLFvGjaeXGwGW1aY7wbHZKeyidt8V3wqwptzvvx",
  "key2": "3Ji1t2uwceQ676XUdZ6g4tBQF6B2KaW7KLgET1n6e8JUZvBMbBMx3MPFxNj7FiCXb8U3vyg17A12Hh5yCdZnQDsg",
  "key3": "5fn1HnhsMTR1nBHr6VCwQvzrKBswyxUBm2RTgu3mGDJ9dsBUkhffbFsnzB5N65MqRHmhxVZqNCyQg72QWqkparR8",
  "key4": "4JfVYqSbcMuGN9KLdh9oYhFSuKa5ZDGXAGxFWRjSbtQP1iDyCoMr3xUqJMZrLpko4QohSLak9c8nkC1xsdCBzc3z",
  "key5": "5Hkxo3rWKqApMaa93Kx21C3x2BjBVcyQD3PhU38RFHAH9Qh9RBJo1QPAXecGa1Eij8rWXdcnU7q1qvnj7fYDS4BB",
  "key6": "5DbtjK9VXP8cKum16LnVhk69uutgLEfeu4YsCeS5oRXPCoet6Bu5PtWrosWkTQki2uFzacHnBSyE4raBPGgzXbpU",
  "key7": "3h1vXF7UuxinVkNwc1xTRSSLUK9jvM7iKSfBZ7gp36ZaWJ2wwvhQdtihWvWyhvjLA9pGKQSouFeKBbUBiyGfMPDi",
  "key8": "4863vwDtH21LrZMkDw2ohR79oFaw26aBvcnydYmDbguaoKSKbkfS3U4CLuhkZNM8G9aAsS1rtLJraWWgim6aoexp",
  "key9": "4itkDLDkyZhm75wB8pdEjaWJhmLeAhDXaSYjVAeyLuLtKZdnjWRQwiaPt5LN4XwNV5dFbX5QV1fPppwFVc5Vvskp",
  "key10": "iu5gFBwRRTPx5arhqrhFEC76txqn8FKZgvH9FzGCead6veTXXKGiT1inFtnpfewZyPdBzC7LNok5muxKSXhFuda",
  "key11": "2AEF1oUDWgKpWNaqNVdJZvfdCC44J2uQWu574BqG1ao66GHZdc3ypSgtSLJq7c3xvpZqLqgzyvgvFmXzjKeCicvP",
  "key12": "2WLv5HPd2qKyYwSdAk8JqEGUC4A9tMxU7mjEhVsiNB6sdj4DGSkH5D8b5jj38ywiboqjmrSe77AijR1kcPWtgKM7",
  "key13": "2XKFsUR7iaJ52tizRuWNCGRbPDAokdevxoSvJacZhYHuy78xZsqGKu27nAmd7wyTV2GC1x34Vo6WTw9sRd7GmVS4",
  "key14": "4zxGhhSdMu1KsUM8pPcZBwGTQ5czXzKhJhkVCTqsnDt15D4temKQUqgvt9BLfZivKwTNqgRBLCwUic1MqFxySydF",
  "key15": "4PJEzVAoT5hshXtyQ6qHqG2Ydt8QKLZSAEwKshKXb3FM1DoKnQqreK6aBTvvBsp9HrwZdfuZLaHR4BWJoX6LvevR",
  "key16": "fiui7qgLVw1JjngTqb8gwtT911eUnb7Zzj3Z3DFjc2sZ7UZ4VZDAempu6cNxyUJUd2XwLFVQFy4VnMPCp8awfeP",
  "key17": "3tiVDPkMKMpS1Hhrm21gcVJK8g1w5BbUtWqfuyGXmxX9J62rMGGx93721RdnboGPqYoMZ1wvAyuRrVGhgHi3wv5E",
  "key18": "5Soa33rYvv7DHdzEUdPBSkbw3U4jXF77U24KCZ1Jai9zSTBvuEa8GPDrhTHqgSpNAZfSX5wQzSRM79CNFH2hUmFj",
  "key19": "2nTxkQHv8mY1my3XnjG2EaT8VXDUnxtHbuZ1pasZX2Vorwx76cYLBq7fr7wqKGfa681LBD7CDLtfQUmdU9UpBc9u",
  "key20": "UYrUPWVzCF28b1esBKGgC3kMqRj4LVeLkNvKGEf7HNk6Zi3rQUDLQTftw9aRNAaD7oszWboSL9RzTxbHT5TnYZB",
  "key21": "2oXtcTWTUfaHVbXyyt9katzcEWozySjz8WwSFHM84rb89aLpZcmpgqKwLYNTVMzZELE7Z3MayC7waBPFjo6X3PKu",
  "key22": "2v41XWFREvvZqJGNbE67CxnvakQsxrSycJVAPWqwduqZcy6djNYxPpoZhncvCf59RtWjuMAV9bDyQJEhpJjd6RkQ",
  "key23": "3eofGuDgL6MRioq9KAjG7zzHN2nqt7NiFC9ZVhtXpS22RR8oZxaEcZMHw2Kj6Ffw5CmiKtQX3pqi2iuWHzdX13jY",
  "key24": "57on9CrgvKjGhp3puoLcbzCJYPZdV8Q1eF8f6thJQCKuEdVYNGVG9mUfKK1xmAuigWeJf91PS2wmJ31dwH7SjKGb"
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
