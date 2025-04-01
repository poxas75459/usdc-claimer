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
    "31wyiDDSVDXmPWeGMMSCSc75uVCxsjQGNt65xJHJmSqa7byJRHWrGqr143HiLqEfXQwk6dkJ4nLmRSJjAxKJmaVk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2G1z47e5LTP4mFmvDMRkhRkVK1Koa8wrjw2fMTrzBGQjfXK2xS5rvzrh7ioUu5j4EhMXXBCvvdvmK4eK8xEVk3tA",
  "key1": "ZiAA62AfTfZ1Ut93Yuf8ChHheDzbjhSMq4AJR2Fp3uZyppnq3SUZqbS1c3gXqQbCJKQZwCidEdcf4MStNFtNP3D",
  "key2": "27RZcbM19AaWTSFAmhyPE4LUfDiJZG3KxecZUXuYSFQPZoVfUS7yKwfve7KTDzs7aS8NNN7pzmzTpMQc4KnqVZar",
  "key3": "67MaTEhBWrqQc66zXkbFE6pVUto6MVcKHDaufJmL9diEh8ZkrxScHBXfe1cZ8NpGjVo3BH2k4dkrfMJhZSDU4pYy",
  "key4": "24TDPMzRi234SQW4DeEkqVBUy7DzwepVnkpu9vSSB3hxRqwawfr5CVzmoFWDNHvELCbHNcKo3Uioog5WCXSMeimK",
  "key5": "2e2Wgh3ttf9dEYezLnobeYKDvkaFBQsNX7RmtYsYzXZB4trwbq8PrWs8FEZei5prBN3uKEjbPmrBM9N1R33DaMY",
  "key6": "5VfWERYpRs4AeJsNes39DXLMkXAGu7bnsaEHDDfFeek8ZzF9RwbxaGnFrVwFS7hFTx1Vi9iffcyxMKALJ37wnWSd",
  "key7": "4GDw6NGD1xa9K3MMjHp46RosgeGMys16KmXcBaep5V7KFN6mTXaoEkh2iCHsraVXyhvYFmvhkcY3zdZJaVYwsp4w",
  "key8": "221TYbDg2pDyqkyk2jMEWr7q868D3i1F6ES2h7c6kzZmoHRxpv137PZZcDoo4FZP3urdiwJZkM9DYiLvekgTS9FF",
  "key9": "4HqdvUFZi7Qi8ikwH8qVRPDtH7qWCb9cJmRcCiMrhpfgCNpEPp7H73rFCtFcnW2Up1j7aj6U3d5uWFZ9vEV7Rj7A",
  "key10": "gtLtkxiUgQgvxFdJZgDCxvmX2nKbcK7iB6TJ64UC4btFMYJpesqyTWhSGbeHKo3AkSQfzMQHg4cjrYmPFnMfNKR",
  "key11": "3owguzrjzUWmba8Td1PHkmiCpKvJ4BRyFpwqwR3R7GH6JDDacRjRvwwHLL7VmSRoHMDPj2rBPHr7nP4wA8jeKqj8",
  "key12": "3nBiDSiaomnNW8QDrdgXkVQ1wJeQyMjKnD9t24dD7KzQhR5ptukCiMao2kyAhd8cGEQwCYBXCAAGbWyETvEokhyg",
  "key13": "5DyogcMrQzutL2QCJarymwh32M89Wws8SF4MEENUSXccr4T5aQ8jYGcduGE8dmiVtQwtwxhHgLzrrv3oCpWYzZCS",
  "key14": "sasb2Rezs8A4HRFzqfBJmEoUB1Xb9xpnP2D9QNFQqsgm5SRPGEDYpoeP44M1UpVHo4UQHJCXpD3g3DM6JAYdNHk",
  "key15": "2P84BCgFYqzExGZH4rVGtZckRYmZFV45oAg3ypbHTN972AtQSbF8gNWZBBR6BxW9aSPdeX49jGuwWVG6JPUL9jzA",
  "key16": "4risZbXEPZcGmVZv8fmmd8nL2UrT9oS6KDWzEZSVQtkqxQME1SzN62Dx89xCtu7M4885USoYFZZdaUHASdDJvtgF",
  "key17": "MEX11RNnwkJodRwkWVrZVGVibxDX2UqzrjMocfYqP19G67UpKW6C6wVkq67tdoQyMkJXWHSRtBc6whdjQK7SDEZ",
  "key18": "2Jb1hwCUYCAin4S1yNYwzCnuteDmFEbnqBFE7kWZRNxu1CZj6KQqdzWoAzsHaYAEtV2zYZ5mHbspYWGBxQBCs91G",
  "key19": "3rhaHppN1Azyafemwgdqb7Hgygi6Ra1NyiA7poSWS49V4753MVAxeuiR4k51ZzSySDryJYoc2fg8igzjAFW6DdTb",
  "key20": "31o1RZMqu6ggHjz9QV1Zc6JpH7vBtw8wnAouQLAE8M1AJn4rHMCiUaMhu3AdJAC6R4xSnZf5UvQBjUahSRWSvnCw",
  "key21": "3ifYcmBDLiLdpLm6YUu4etcj2CVGKVTDaeNKqTNoaZB4zgQu4WvfvSXVuZdCQempQ8KbdPS1h8EiEp4mSPy5D1b2",
  "key22": "LtUx75vhHJuXVw37qESm3CZHHWggbpNXN2QwGLhaKzkE3S4ahpx73uXAE3s4WLMkUCNvUmP7CJSxkSfU9EFpryE",
  "key23": "TGF6Df4CQPQSZLRnYygQEhSMGVZRL4rGcT3J7PfN1icMpW2r5QdrRtKyPCEZQMEuQWWvupkWNKBNLSbqTynb8bA",
  "key24": "5vss4gPzCJyYRdopuB6tNcbNDViRqChm7cvy6X3gEhzJtbS8UqqgEAnVDmR3ujcwWabh4E1QqLAQhTWJ3sKZLfsw",
  "key25": "3LRpbmpH6u8W6TcXXJhYEdkcHBaTkTy6YrfZ9BeW1yEqaYPVqP2GcqHEHoSQCmz9iQY1b26VcRQKSHeRAmYbhCWv",
  "key26": "TRm3U336vch3Tz41mHMeebKCK83J1UmdYhvNseKucPVFHWbQivj71hXD7XvqA2RUZWCgwkmFsvShrU8quFqvzGX",
  "key27": "qGSkjuCcGjsWEhFfwLmotcP2GCsSWUA2914Md1LR9Db375gGBw4GTUjXrjuTyydrChH929Cr6gmQNKw5P4qLPGc"
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
