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
    "2ZZTdBQ66YiV3dzk77eEGcD6yGTKs3sRGPVHZM3o6SA7ckTjQhz1gx1gA9fGQrCCULEPE9ninDVXG4G1mxzYpNgc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44VtqEEbgNWD3uP3KSavmGyNPH8jm2L4s14v8w28VWEnVS8LQMcvJrAvXuDjmQufBBcDgQWCNHXmBfFG6NZALp5a",
  "key1": "87nB1pRSM3ddpJ2NWRTX62havSbe3QNybLx4fQ8uD2ADK7jop6NC5trMF5kd2FKzxwikVZpi8naPE3iJYMcQugH",
  "key2": "2Vt5fj2qQhV3taHwJoRSqmqyhfbgEeYU25KJDjT8Jes5dN72wU9cW3uoEknAG3dyKMPP1uVhC6ae58QhKDyXF4m",
  "key3": "66CkbcAEgnzLw94pjmZ7mJHefe5nWiwgSYS31TQrENrPMdCUmHBuw12MhFVwZRgoZnTB4Ge9Cj2ZD8rVDXbrfMzS",
  "key4": "mg1ykTGfCvNgXVhqdUJSCTvqjLN9crVf69FJX7XkXDTWt3iy9fwXp96jnDYEYiV86XZ3ijjPRdaJPrJhBCuy39U",
  "key5": "4VzvUg7ymAvqMBmP6a4Ycmkvkku3QYsiwAyqucY2n4iJvJptuUbd6QkETFYBDA5WH3sSebABWmgufGUzeRfGaL84",
  "key6": "2Xa9919Tdcn6xVLZh1AvkiCqJEdaEMHVSab3tY6fNhVuYDzN74DCa8jkPv885AtSq9Xjx9XYUNGvEkC3fv6RvhLT",
  "key7": "29e7Za1sqF8SSrUMEoP5AuDto67WV8J6VwStB9ievDDzEaLKaE7pRZuu2hZeKRQMwKkENaqEfKGRbpWtFeGsJhog",
  "key8": "2zTdn2d9xEig75dTc7UBTbHi3fgm5mEqXDTfFj9AvWWHW2oa7GWyjS4bwhYym2HtmgE8Xh3JFU6a1b3pn9xRCGzJ",
  "key9": "3rNW8nYCQwhfF8h5jfRiQdzGRdAEv3Rc8oTNJqFSfpXQFMNtNqKnAWAmVfiLzo4fMahtfe4NBkdBw53cgU7wNfPr",
  "key10": "CRzGgSYgwmCYddQC5m2nzJLtQqw94cAh92guxCDCBx7XLwrQki23WdY5wSNzJkQqwJ2HvmZPAHkmVShBtuVKjHw",
  "key11": "5jkSv1H8bjjLrKneJQ7ByXseJDYJQYfxGBKv1STLafQQXUhmEQJupu6MNKRuZVyxYpeXxGyq5fP9p6ErCEVbyptF",
  "key12": "2PMHdbKw2WZvDwy75FkUC6VAX1Jh5AXcW1GjKqGQxdnV7fqkvGFk3non4TcFcwzuKMSEnWjFtVXToubZYMZzqNwy",
  "key13": "3dcNV38rjnPZ28jNxMBYis8xsuAKUhJ71WA3bzRtUwybojpxxZ8k1AEXDvkQRMSFMLmZtGQ3iJMHDDyQQ6WabUcZ",
  "key14": "5GBdc9FKo6EjhKBgrYPCBvStc26LnsKeHDYgUfnfeyespCtAZrsRxirP1FSLLdxwVtF9FVcsFJNxw8DrHRBLWvTf",
  "key15": "2YFLYMuL2wQHJpqx6unqZaQ7mgdb7kZUZshhCzEGEPA9oiHGNckRJfNyKVjzzK4T1KP4LbgGJKphrogG8CbUuAdY",
  "key16": "5EsUvZFYoieeVR2Y6D3GHpDR7xzcCmWjFvq6AEn9eebQfBeB6t9BduKURxT95TUREY3qKtN2dZ8rWd29PexmK7jp",
  "key17": "5E8PHfQuQHcme3tMmwHR289HMjuDCjUger3n4qecy3vrkAUMmXxxxaDV9gvFzp9quDSoAkLofc7R71e7XQkCTL2p",
  "key18": "2dPjXALHPL64ZEv4h3mKdwy8GYX9NkkF1a4QJXpHgLAsMZwjbKPYKoJrGWY2MdgvJMobyEuVrCcULwYq4MNjfRjC",
  "key19": "5vuZkHQjLHsAX7J18ZDJ3U6yaZRPWwdi6YNoS845iqmPMYEB7nUuBP16Lztog2JfJRDzGWJnhsjFQ8M9JWgMkK8e",
  "key20": "oE8fYAq3ymcdrZ7KHCpL6EUmvwuywZS46X97SfgdKmcP1ezXhAVMEepvuXxTyPVvaA639XWryzjQEntLsw9g6YZ",
  "key21": "2dHxXwEXSfAZ7kj267VFT8nTKC116hBmTte4BY7hm5TKM6YUYSQ1yvBY5SyRcGbz6E2xyHQtUgvnuqMkeBxjSozF",
  "key22": "3UtGq7hRp2t19DpzssWx15WSqKfEmktgvfmHyFgWQGm44b8DdPoyDgGLR5vbzo82NAiC7V4t3FFsik8Q9jKgKF4a",
  "key23": "3BpmpASnccL1TkZgeEmNugeEk63RHcNCgcvsJirkgmEDCEYTegfZvUaCTLqdcqheBXxzkH6qXCnFxxvHrKkQoB8L",
  "key24": "4ACqDi45a8MmPdw6j1zew1Z2dCQLtTa25bLuSCxLMDT5fXUWxBE8keBcfFtkVqPHFKWeaXUmCZp9Uh3onpcip5jf",
  "key25": "5Fe31W88zSCFF7zPYFudd5QHSXYDHLyxcCmySaac1nMx1TxLixUnReroHESJ4acPF3fcP6hBoKiigk7FzuhfbkQE",
  "key26": "TtJ5bEGBKrmYtMRekgeGUw1xBxLs9RsygbpMxgqA61K9Se4LP3cSQzpDNDGm92SEVeRUWibDcPasiqkZbJYpiXH",
  "key27": "4mSUc5QcjqSowpBzsWbFTGTcdhVGxv4oZWFcN1aVH5iMHYNdQMNkBMDSkAbPy2swPmpNM8XpPRdYcj3fhF6DdtUK",
  "key28": "659e9wq8pG311yrQGk11uwx5QA4vxebpn1xQzQQZX74tzgQh7P6qTmQxAhZyeCmbSLLhzsfuDFp9A77qrWQwaHQx",
  "key29": "2yfjXzqDFWiGqanUvUF3PuTPGQ5CjM7Fkh1QNpcoB4pnjXUiNz1KCaEEAK6CL5S9fqMQA2KbMD3KVB2BM1qquZkU",
  "key30": "35NdebVHxKnFTkwKaeM2s7ikuUvKnVAve7M6sDceWjpab1Zb99VT3bncjbV1Q6oufcgsnPVgBWS3ojKxGLRvCjgk",
  "key31": "3JTrdt8BxbTwnDoZrSUN5dpgpq4xvNdrxTeKKzVGkEF6CV2WFQyAzZd1o2zKaZo66QzBDjtiDQRcLwtxG5vSMqPP",
  "key32": "2TbLZBeE1GLKxDW2hzNx5qgLhCk1BczArLi6nD7fXcBR8s7JGzXyHNCTXwQpkfbDVTLnHU2ae4HzFxnSgWe2Tkys",
  "key33": "61nPiVRVLDEPzXDYw5d5K3SB9bFndJDuEn2ouLdFGgTLpr3rktRiNeu1MZQmiPNsTmvqvpSdz1oa2XwBgy9FokKa",
  "key34": "3UzCwCCLpA1TF7qYsSShEiBES6TENkURCV5zaC6boHuBRV1Ve2PLmJEJLy2K3n6sijkEtTMyenDdMsR1kAdd4zTR",
  "key35": "57rwJjWFxdjztimB3SDG6VFvMXNuRNGoJNV9J2GY7BZ48yBECaMbxLmv5eMbKW78yLxEf38GzCfahMNtapiCz4Af",
  "key36": "2wQiLV7vpweWS4Ty6UL5hBXrZi5KDWkxd9fv3CfQ9fWmJgtaj6HYZnpQcVTaFSQ8cPErNXNdn4GKQahJYx3TVthd",
  "key37": "4JRGnTqM8PKGzh2mfihC4Ex5TyCvcA61moMsMuewfRVFrya7aqxVHZDvWGiPEsSfofSLBxtgnk5swugfrAf7FjWF",
  "key38": "3HhCN1L53XpL65Ej3EdHs1bTb3GJGZrrFmKcyUS6cACMqP4a1BKAsQ8K3q28uB7GjYPWruTCP4V4oVezKCf7isqB"
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
