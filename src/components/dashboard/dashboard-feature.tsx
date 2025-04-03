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
    "3NuLojS9rfeCcpcFVBuMrK6CqEhNWE3KutfKhG5axWLt2ftHbHbEdFoWYqVAXbZfUgUbXaeMEsMfKmrEmzYxnXbZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xTqyUgq6nHAH9F8qxbUbBPim8mttZ3XXiz7iybimTKMPULAK4GejbWPfszjYVSLdcPefxSrZAApSVeqGT3FwULe",
  "key1": "5dBQ7DUUwcQMdWqzznrP5Vy1soyD2uveE182tKRnRo5N2UyuZma5w3tDceVnat28ChZ8H1mGKXX9jufM9bsZq4LN",
  "key2": "4KCJwHPiTWRhKrBj3GhJtFfQqvpPrqD3w8qWf7ABaBr5GgMSEP9rJq2kUtnLffTtk8QFigSiWjFkRWEtFAg4iqcx",
  "key3": "Sh1CyDLtTF29oq3ei3kXSpGyoaWH3gfcpPriomhzgnCCQJyuuM6C5nY38AUr6npx63q9DwB8boyrtEEX8JoNFyt",
  "key4": "4gnoGmPTq7eBa4c3utFsJYMPo8Ld9xzxjTDiQ6hTCnzjqdyhcfSusAjYy3r6aXowqE3YHnKjAmvueZxLJCD56x7e",
  "key5": "5VJfDPTFW1FLbRW4e4Bi58guYnhcbzdCrwAjZdGrAEmjPF5UHDrD9wM9GXroYUkNT5f2MPJ8VYgAoZnpN9tHR3sM",
  "key6": "bs37hAPh4Nh5X1gutSxPZNwwWvhwKVvaitTekzgJqw5PjyanMvnGxNcooNPkGRk8PW3qHiEBQB4A7tHn1r3ef4e",
  "key7": "FrooCrkx3CLps32AXYtMmk1NyDnvjwSH3Tv92xf9Ly1r3SUgqB1fsSLxDFBpmLUdkCXoVczzrydvmemfttbR5zh",
  "key8": "2iqPb3ugZSwsSZ4LrEAfymHRtK2E4Ekdn18pzVz931yEo1NfmK4WxHT8mFUmYXWR9VZrtKVDRBquLsV5QDEPXVJv",
  "key9": "2G8pmpNBdDYpqQuH4PZdTym2HGpCdJnmPcxfrangRksmCZvgtBKLsBthwS6FJHKQUUnhdnxm13Bja22GTtLNXWMm",
  "key10": "4n4h7ER3WVtQewBC6FpCXC3hnWGyuAN7SZt5oMzKQNGkuaraEDu8qqYmHtQ1Airxs8Z1pWjJ4ZFR6HTQ9hfx9nAW",
  "key11": "5jyfFndjt9kbGGHczN1K9c2xxP8Pas5E8bS6wfFZ8FDHGgcF9JGxQvKtWVdbZSUYDfyQ5fhJ5GWznFKGPHU5PeoA",
  "key12": "GJdD61WoyjNg6JQbbqrgV2BaYdBwP5iGpkmr74NQxLbVR7bqnupwX4MM84GUkekZwGBfRqkVQP6bkfqmnt2abQt",
  "key13": "5P7F9CNh1PPwkJvfxkaXkXWGSc1rrH9U6yUh7u9w4NhDfE38ZsCPJhLPGTxFvzcqPfLjFyVX44ssZ2KmmxUa1qhX",
  "key14": "2h2s7rggtUtXjqFumrHcRcPkmskoSrVHE599kBPLrGxPLJq4T26E19bgts3YEku9J5gznURwLzAKEpv9Vn3sQ88N",
  "key15": "4dwNQiygF1Uj5iSFwavRy2Qi7bC5aUAfrdbpreSziZG3JEnGXi6WbsoVEageD8YpvYUDsWBHESqmjjMNqqHJkCYE",
  "key16": "4piPxoMDTy7vG1TwgtETSTAKtj7MZGJ4n9m5UA6LuuryZp1wyQGTe3YaC8K3MfN5Qzxzytt44SYCZzo1hPSMfLNy",
  "key17": "kcRGHJGDM9dRj57rx3dxco6z6oAYiwfVCp3X7UCqs4MvciGPeXP84iG3XVBu2PMGw3qD2pDvptmigK4idDotna5",
  "key18": "3qkfAyqbDKZMfRL5tcN58fPGH5yk6ZBg7ioUyUZ4FbiFavQEqPSbwFxUpoeVgud8duJctt1FqWmKSzbkGrZVtY7K",
  "key19": "4g5ax34dscGy5k1KRbp9p3x14TeUkCg8R6NYo5CDC37oFC6TZVKvWPC5DfYXx1Z5fPBgu6uqJk4KU1JQricdTBAE",
  "key20": "7RP4Ud1Fe8PGpod5oR1xQbXb6XTpToNgxCe9B7ddP2X9Z9PFEM4YMEqVDzSXNxKdCoQJTFedm1HbHmcuDnLD7pi",
  "key21": "5n41c8vuArJhjE3fuCArpzzrcA1tdYVS72c2pCNSnB9tBicW5AD8auDh2morVGwBZAwEQocKXKJwVfPsnGzHwUFi",
  "key22": "4uGSMu6AAf5edjozvBcyDSFCJM1pr7AVdiGk2rvCrz5z8fqH5Qpqv5j4jLtNPtuXCmMZGfsmFf4md6z1gygx9HPF",
  "key23": "4rBDmS6Hhmc8AGKRXUBZP9o8H2tscNt7iKKUWGnpTPsYkeqmMvn5jpwkT9u3oT6DHLSAXQFs7jPnicPNEYXdNFAV",
  "key24": "4sammbJoxTtxTZCmfDoDGRHiSpUkQm1J1JzU8YmXVWUy8q8MbqJgfgtuoeVjz65m1o1xeivrdrJiRsJn5tEmH3DX",
  "key25": "o8rX58DAFzQqR9jBDkHWHTRGQ2kU41ke2oyY4SGxkwHiLmgt3dQJDwmV9k8eGdMow9kyMisrMrM1mfqCxmJAzch",
  "key26": "2stpQKufBk2wnaxx6nfRNFo9n1fWrS6hoY6GLE3DshGpzE3a87f3FSoQMGTz44SrKTUSP8XR5btvrpnXbVtKvoj8",
  "key27": "4NocFKN6Hh8idB1Sx5pPWQBHrvYkFW5bSkJKpseNgizyK1ycDL8jzB58f8tRC9j9D4nXY8tHEKgQgzFebh95FxzH",
  "key28": "2KfZBncru6aTvj8ccFuWRGJC8cA7hJrbEXDMeVzHgHvSEHdMT1nCXAesbpS1YNmk7zzVW5PiAgPbnyNWDqyEPmuU",
  "key29": "ashCQ9ovv1vgVtjkkdSKAaCDuS4nUq9ux3qJKtDZBUxWSEAJfVhPSAFB1fUJFkbpPHvEBgU4mtRna1wLeHZyKvk",
  "key30": "SV3Ykf1P8j7VNSek2L1ZSD7iG9uaWJVYRZRrFHxmxDNcrACBP8rGQn5if9qN5KMjjyHAq9WEuPbCjuNccJdWJoX",
  "key31": "5Sc46NGhbFmi7TVCyEbWztXWRhDJo2FSeZ398zngUyH9zmWoMWcCA14J2LZXSvQQcB8i2Kwi7azBdZ5FcT1UxPxW",
  "key32": "4oUCmomHnNhDctjdU4EREShRnCsM4UcYnmXq98jhhcF5rexLFmoMSFgHrJHV4edoz43dTCVngDWy7gfdhQ6Tb8YY",
  "key33": "3oEPn6KLGF21K6nZDozh7DoxWn2JWnRzLciiPVkvScmsPU3dVMgWSYjmVtFRuQs1NHstk24ANbpcquT1GbQFD4Xd",
  "key34": "2krxjQdS5UVs7sUCyvxS7mR5WLHwQp7DeYGgffBY5dzH3LaeyUXNcX7zCsK9F1gJWjbZReFDmRBb9ieSUNYfQVci",
  "key35": "5n3nNNK9y6aWiUto6xhfsizep6HwwUysoKeewddcxkudJw4WtyY31Qqw4FE8TeuKhF8xyDAMYbJyZjf74EGZL5um",
  "key36": "2UfjZNfnhm7sVM1FNV6XQxVDsKR2LUvqE5isds49je2Na17vGeJ9ch3QgdxhYuUr7UfDiMPEE4vTaLMNwoaQJ3xU"
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
