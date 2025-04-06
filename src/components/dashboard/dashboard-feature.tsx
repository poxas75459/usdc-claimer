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
    "J5uPL7z5J6GoN5s642GDTEyjajcBw5NemSN1hVaDgqDqEyWFYqwbBh2qHbe83dMDTKMpJiUtAe9HfnDFnSgx2Ah"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23vWzTVUYvFaCqg7tm5Aa8zFZTZ7jBUn1ZPFm5k3ChnhELiEqm8MPzap15bk4iys9eHcm1iV7vNFmLx8nrFMPbDX",
  "key1": "4XZPE73WnvmmrmEYYLQgU1znV3YHxsHq8kCTQqMMLYG3B5MpAbMuEGzJzDWf2XHi88KcYvB7ojCFo1GCNaZ25Mfi",
  "key2": "3GGyBADg4ACGeYK642e5G2Vqhmh4fjpz9a5Byb618PU8g6SRKUJSmhBXg5hPuBzT7kkYMfamyu6A6gxrGQZga5Sr",
  "key3": "3qnF7WVPKzRagttYR75gsEMKzyDRikn67Vhm2LmNQABqoyF8XSumTLFXHzbJy4RA6GbQk55tRQQiBPFSFku8KaVg",
  "key4": "4nzL3WGjidt9jVQcfpoudjvKeNyAvsi1jbvacE4BiqWkbaskDZscfcNSdkoPDVkb2nRR4EoeuPUrNNefNrpVTuu4",
  "key5": "2GdEh6AFs8rdcatFmdjAU8pD3TmBy5Q4937diFFMGNKmmbWT555iitzuJwXLEugkQz2P5FX5kDJEf18oEJ6wtn6Z",
  "key6": "1vMtk63pK5bXY2KyYisKhHRxbHt1jWFhZBXTUxdhEqZ8qLRGx8i7tnktnVYgrrvr1xcPSeaiqdhQmUXNu9jvZuo",
  "key7": "QVHqUAjGLibkZJK6vr6AFNp733mmaTDBmUT5wcnQxbrXrR2cMMsufePpvnqiMa57zz9tWN55Zi12dkbU3VPBeEv",
  "key8": "n3RVBExZboURLW1JqPXYrKbG3tH5zaDKKnuL9dJWbHWrtStv8HpEvk8R9YcALopdko6KeZxxwv4ESHoq5uYZKox",
  "key9": "5u6gX6V72ALN77zbMDLyK21yzopMe17qYMyvWnB3fxGTrQdyiAgZgs6VnHDgbeWtwtiC15kBXWqGy5sbVck8pg2y",
  "key10": "67UVRpbX9HMThkyfRKeugcFsMm8JfvFntxBmjcq3p5uMHB6yjj3vvCsSoMqYyZwTwsabT9wHyTCXzZrPUwW8zzZA",
  "key11": "23xJu6FkBRQwbqJRjJcC2Ny6yUNofg5XhodTrNXvTv9jrmurUDN21KVn7737k1g992u9Zu3JyrLqu361Qpjp8MdJ",
  "key12": "663A8bFdCKNQCo5RqCkrGBscP71Xj2FenD5bT8a3nZHiNS7EuniHTEh7MNomX3KEiP1GFzegSCx97LA2NQE1KRdy",
  "key13": "5UxxN1783eLZGsWiv1gb9T7Jb7sBnFHvzRXRAZRkW3hjE5LLUMMaA9RGYESHWqjAfy8AYkqeKqNEJ3SweuCUwPbo",
  "key14": "2bpcawxdCLTF4hBCP6kHMXwzVc7e3bJSdpJgh4rEsETmy25kNrEumq5phw8aSzaf4jiJjPKs3AfxiGJF9wYBrAfu",
  "key15": "5J91o3aw6acfmFzAz5jhgfj9KUrarfwAciy8VWQVTuQzKT8b6rH2BUSSRX54yUL2tZ5ikW5e1xisT56sU1JPcuSZ",
  "key16": "284EmrTUZa8wqYtsS4BCeiUbMrWEb9XsMpHgmFh1mciUMK8dsiQx26sPZzwTnycrCP4x1QCR4QCebCvPBHjJHCqs",
  "key17": "2mYeBDRFHE5rBVsjnYifvVmHtd4ud12Y9Dd43tn3QCNLWztkmEJjFjrruT3Hojme838NXwnd8pDGfLdSUoBiRVbN",
  "key18": "4SrnRvRPg6F4a2mB1MUqe8vb4uYGYJ5sJyvuQYo34En2x41G8XpoprECkCZt1ZnCrWYuWWkEigjPcD8BrPCNEQb1",
  "key19": "2Rz63UQT4cE74wMYWXCKm6rA8sLaeD8XkVU7g2kVH1nGxjbwsBRDxQ9uupKPCmaqSjoJkXs4vKj1RczQSueA7fmg",
  "key20": "6mTvZSJQistw3n2j5537qHxjJhPcyXbUwbWEKwE8M3urpeZSfDvfZB3wCJ2vfqDtKSyLPsXTjw3gEFsPXkyrybf",
  "key21": "2Ma2HxbQ7PyJpmRWNQ6LHU9sWDhD764yDm6k7SZjAxkUCkGnkQ4Yg8dzbYuFS517Ysq8GiNGUfrdHnb7pghzgcD6",
  "key22": "5CNyio7KW4bv5HBndnwrBdPBd2sxx5a5CGRDoCJ6SSDSXJvy8DPSzedYBNws5AoBjmD5qkuFnduJh5EEZGrM5XDm",
  "key23": "2FqoaKtZ6f21GKc1kMfRALzjsXLnS1drycwrXEeeErx4dHcVV2oVxcL3ptEwVBSDuSLKsDnimSbCTmEta91HV61o",
  "key24": "3cfa3Fd3T4DgLmGMYU4iTEG1PMAVKPBhezwH31ooYEDYKZtRW3kTF7gWkm2c2EF8PjuHyrQGEc8BEbhpUbdn9c8Z",
  "key25": "NfkdZ4NvxsWRw18c4o9y9hHU2LyNnsYY9hKDgcFxPEBiSjNZKGntxb67B8btZqBERbkfdR5EYMcHtQWd3kmUxmu",
  "key26": "4miJf1HjX24hkH6ocGobagmp5rJ5nfP2KkT2svFZDpTMe877EmtzRk1YsfJGG9kk1vFCkB9bV1UmuqVXJJfw1WSf",
  "key27": "2ZAvn4QUjJ8yxpHcqSEU12mZEmonjc2eCinjkvSmAoL2zNcqW8pT7hZWaQ7udDrnqJQJxVQSZRAZXsegKjaZ1gbP",
  "key28": "3KZYqNxLp1z48P4DDU6RvgoaNdz7vyrmhprdGvqyrMFgkZqMcstebMu1roVeKLCCwnjK91kGYu1fK5qbApA6zp7W"
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
