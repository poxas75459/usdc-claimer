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
    "2r3q5PNS8o2a25PFF5ctmE5HuDpGdHuVwN9mj8kCT4TEmyrzzdVrFvQfTsZBA4FthZR7a4tcm8qXQjPLWULB8yYg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yTkY4VvoYDXNrARBrsJs5gLztEY7wwWEKAXgi6tuNpwBD3hFbquWSqW2sLMY4zHVhhGnwJxshdWjnatYH4L2Ntb",
  "key1": "25YaK3ZqvoSFzurt8gabfsSWy8bpzN6gdVQM84LMf23RaUBp3mgJmD7nuYmTnJSBiLJw8ZPGjHrng14quwzkPdLn",
  "key2": "3fMv5APpcuzBwvhbMvD5gtaSTDfWRY3fhhs7qxcWKYyYsSnbChMm5ZgqFvGcXSPNnFz2329ZmE8tLwqrfkFmnYZp",
  "key3": "2Ug89qDK4e4XP3LCmZPhqrK4s6RXMwkTVNWDa2LRvJgNT8c8YMajSKMBACrDNttZQ3wD9vV1s9sLH9XLrgXRbPYp",
  "key4": "2FX2h9G5TkfSAo6dgLLRm4B6GLnTpD4ihvJShGL3zyFuP37hfFBBbQY4meWmmgK5VDUg79FzD39MB8fbd7PeEm7C",
  "key5": "4sLhWUB16uJ6RLPcfMCRQgMuokEaLA98sKFLSTQwj6cXyhURmV492g4Zn2VU5i6yVQJRwSj15cYR67c5uHa3H2WJ",
  "key6": "zk6FQDvS14PCyyiLeNua6WozTRqvWyywwJUxwbM8vS7MAkwZAj4Qi349KVzFLC8R3YqAjytFSCXFAoqZm1p4g3U",
  "key7": "62FnqZM72gMEqxt7PCyTjuqntv4P5K9EHXExaY7Eiqu1r9iUrqDDCSEgqSPJkXXB2HHPd3BpsPAHX3TFPHZUmMjo",
  "key8": "5hg5D9GXqNDMGLcmg4rrQMLjV8ufmxLuCevTvA1nzra5Dw1e7hJEq6xYp1arwVWpbVVBv3mhJ5X3CfRkEuqgnSm1",
  "key9": "5F8ZNksApiBcDpgoSFcaVepWWAuduy1dzma6unKiFYyE9Z4k3oHPc5gN4jt9oUnvWiQjahAURAR4JQUVBYy9PkoE",
  "key10": "oiX2erfyewjTFrCb576bqLet3J6RH14FVtWYdGdxywTiQtMuefmBB5Zvn4LTKAT4BZhEH3ZtJpbUSh3rY6Zbqhg",
  "key11": "hdycCfftRvTtnX8iNoQB5NPgM5F4MMrag68ZV4EjejdxwYqf4nXgBvFrWQ3BhW922GcCxieekE1Tz5mJ62J3515",
  "key12": "3DzauGyh52FqeUuSvkS4eEQJyhVonad5urfdTE5RebXsYeMQWttn5TWEHDsHbtVetmXJgqVUPFeAR62zmJR5rUXX",
  "key13": "5bbZdiVwC36FHdizodDL8m6LtaXMfy6dK6PQfa3t8Lty5PqbefK7a3ijoN3AFWeRc8wjWNbphTjDkfPKwZtUHxJB",
  "key14": "exBvHc3L6qXC591cLksheQXxaqF9BcjNPhZKZph2NRHwU9JNg6QT1ckyFU2JrssQM1v36GV4WJ7oMCsyHrq8Ynz",
  "key15": "3mWHVAL5zyvpJDS3f9Y1iWAyskLk95WgEuXoc5ATNBcFTNcq95oK2ysdcSeY2C5XdAtdqboAP2sBeLXHYvy8Nqad",
  "key16": "5M4GffmCa2dwM7Mj8LuQDHpKci2QL81UbiUM3cCGLynfFyFfUfm88TJLaXku6SkuWJEsJCxDsznmC8kcLY8nfsmZ",
  "key17": "4zwfvqfNxe31AcoWhNgbu9dTp2v2T6QuYDRm1WADAmKxCRNuQ8Lp8BdmZ1sWNqERaudGd1hBcHRjyKw1L9DqSrDa",
  "key18": "43TfNTgbVDFw3YuUHdi3RQNXbKmPfsFbr94mYxvCRmiEKYCaGEdBvZ7QJj7EmF8b6JNQdQHM8SLR8Tc65PEjchLH",
  "key19": "3DkS7MU2TPAjAq8bemjPyXo8D7d23aTagtXb69n4i4u96oFqbRZEz7R9qPCXAGtQp5QpXBVa9kNrJ9Rz8VcsPiAx",
  "key20": "TbkfedDdC6snX1DmDQFZxxPoaELipzq58mmt3Bysca7VcKXMXUijTQTJfP2D21Y7eAErH791fQ1Ny5yS5iQiFhM",
  "key21": "2HjvrUoiT2xwQMau25g2eoSX7jUeJqRcUxJtVn2kt5N35Hv5rT7oRREhKVvhkZ5QU7RrFyQQW4Tae6Tt2CXDzaG6",
  "key22": "5XUZxBozwq9YsYUgnTRkkDDwV56HPLEvDSPnQGDCffVqd4aKRwgS6Pzjprt7opUXwJ6wPRLZL8DFcqDm6wjDyoQE",
  "key23": "3pcqW6MZacNGUmdPxtgmYoiApV8XNyT5mtp6VciTVbVy184GL5ks6XGnKEynJksKB1xV3yxDRy9EgBDAKEt5FzgM",
  "key24": "2LxfSvzbFDPpYJpBoXbiv8SbNco8YBJaXXAmz5iohpdeu3YRb6YtCXBKAmm4pCJ2x6w4au4eMSPHbc78UDYCXQrg",
  "key25": "5b4LvYRVWmvpHjHyX6tA4MziJtRKwh7uMnMF8admYkXVLZF9GRo578KbnFNFrGGgGZaEEbPph2GyFibCrciUtLNr",
  "key26": "3j2aKAE9eQtNVomasHn93MXd7iSAtATM6Bxg7uocHcpu5BhGgqzfjdupAoSkoWhPfJ2UPUDwBKQZATJxvvL4AhKp",
  "key27": "24aywBEf6wxWXzVtQP6VbVJ7wdiWFKkQD3BwgVLMTjP1cxjaKdAA3oj8QxtK8o5PcpWMUs5kDsyHZVc1mVNoFqWg",
  "key28": "2XsXowHZPdAVnc9JEA7nKtDxzKY1q3JhWB5pGRSU6EmhwgsaNTQMjbLECN1LMew99fiTded1qskbSFbwhX2QF7J9",
  "key29": "4yf92zr1nDeFmsPJHft87UruyRoTckCUQSfVuJvEBJugn9yo6srCskoaFJyMw5fJaTUjMAuueJJvFXC2WMXnr1PC",
  "key30": "5dG8AB1GBhf4e8duEz5zHRtn5zupx2NGRJDNWADvkJXL6Em8frtjB6TukhMryrkNdw8xnnVMo6X5ZneMuu284WHz",
  "key31": "C3UCpPdL1P5ZnsysAj9T1DaJicrJ8c41oSYYfhpNBQoTUn56T9aPZ8x7f3S82EiqbPou6vpKg84y4vRniPUZmVn",
  "key32": "3ZEywXgWPKsHZHJ8oBhvC8czri86cK7qGZPoppdgbJytixXyXwt37TJTqQ8mEKFWNPLfYoTNj8Qja7qA4VSnrnqa",
  "key33": "W6BtjZ6uA3tGoAbUsUVwSP4eTkqHQ35FhgiHFKQVh74bDWyXtAWwn4U1xtkAthk3TX4d28fA9qVjQQtvrHZyLbV",
  "key34": "9siwqTwgptmALaR9mY9Rd4C6AcMcz6S15dQQWWNcoVMnR3KxPEeGYv6hCXfMnKt1DajkUQuSZYS9Zr3yynat5DF"
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
