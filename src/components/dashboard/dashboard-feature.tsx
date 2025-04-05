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
    "2hx7xNfPa74wbkkeLYe7RTNgfAKJouSX6m8EvtXS9ZNzULfEqnFdfDMAsU5hAAAcNhsnWYAH5DPFfCPpmXkTmVcw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PmZbN8JAUqo3Unxv9Kt7qTGhW2nEvATFF55uBHNAQZt1EGupahYBeHY5JnECA4N42wR51NcTrDZxh23fVskrqmD",
  "key1": "GTE5E8GqxSRXEVWEo9veJP7wvxXJ4ZUoV9W6RSvuXMC2ugyzu9fD8FxGNWMgAv74EVsUG7A23tHUoNVHebrPbLa",
  "key2": "67jWG2N6qTNDSLiiXgNbRU4VdNWWRaebBk4KccPu6E7q4uhHMRv9C29pooKcUQbajTVWogMwSXGszQw8phXU1v8A",
  "key3": "33Hs89JyrzKtTQMFxyRBeYWezCKjMezaqxsYRkiX8TNgNguJzi2QHM3hKvTxuHYwQaPXHdf8PWg9iHjHCc7ZqPMq",
  "key4": "fmrk9qygcsYDbEHNqK47yRTmdoXtKf7vV5Vzm3V6WawQCmc3RMXZwmE6fLJfg4gMbeWqGeQphTbsMQqnioMBWWZ",
  "key5": "31ud45UrTetpKgnjtd78a5z3E3k2xdtyQ4RaWRcj43GZLWd5BwFPYaQTDQQ8LMjKiTKmmHQoR276mfsPBeBRnDB4",
  "key6": "24pMR7jSMQJ5PkQDuF1RDtYFZzthoZi9xsRbYgMXXpYSjRWTwr4pheZsLEcFjR6Vp4o6ur2YrzUeuasWJ4ViLtHw",
  "key7": "5BTDsCK1Mb5Bya64KrVuz3H1zJh4cJKzxeqy1dxgAnjrMknr1rwwMaJRNdzbX88t2BZyswSZ6tuwX4QnjhzR6N3f",
  "key8": "2YR8zDQsvaDg7bWSxoWZs8EWTDhphfmFx6XhJNHSyZWHJFXCaZHfJEfUbWD3HjoGpjbQA4qnaEYXvjd91p4WoFcu",
  "key9": "2qUYDDHZsMHxnu77x6ssRXfP2XirwH2rQBJ9ut33AjTtVaJ7FEZszfhhPGtqFNwM8vmHW51CGKF8H8w7hR1hfJio",
  "key10": "4vKkX1WCnMsWvTrRYCPAxfcvdddSAbahXtFvwMDkTSmiv94xeQGgDF5cHkM7sthxrtRE7SCPM1o2qs7jmFwmtyuv",
  "key11": "89v1bMFz9FZCPM592Due1HhJoDAxDLeA8FjpMiSVhnpywzuCVRXCZm7berdkNiSxpUS66va9rMu2XZZSB3PQb6z",
  "key12": "2H4SmhjtS5dLAsqhJTUvTu41L7gwShLxjUmvgWCk9i4ZR2t7yjFaErABRVx9oqoXNYmB7jYLoDfBguPkRrJ1iNTm",
  "key13": "o7BpjwTBLVKbKfiSs2GqnkhLF7C5rL1Gup9oCFtTWQ3TykFvvPCjTc7P8Emx66RxJoBPCDnw2v7JBLy33u68iMB",
  "key14": "634cUXrVw452Q2GJgKRLxqNnoC77bcoEBZ5cXmNPWTYTaYwejbsc2GfwLHa1U5rqP62m7qAfVGFVrbcgLm2UZbke",
  "key15": "2vjE3MBbEixWbzjzKr9ruBzjRtt4RW9AddHTWtKthU8Y1sJoSqhqBrYhCUMu5NbcPcBCyQ1V7AZEdYEsdvkpD6wy",
  "key16": "3ZjdUFyJtAdMdLkRXNuJZMzFp9FhdXPyHPzAKHiniL2uEZiBc5QjuRAc3SapJECJfbF7TDkbc3dTWNx34mjKcKrY",
  "key17": "4Up1sYFGCCWAquDHWfKYLEzc3zZm5vc6B4LAX6Gx5DTCwpLsRMz2eYWPC5TrmMcR5VN6HbbRE1tsefu6JYUCd3Tn",
  "key18": "3Fi23ESCsZCqXVZejirYSdfYUMcnk6zcj8LoYjmCNVxhqwAkRpbtJJsDWmMrArQ6K3vuhELRTyaXk7tnV9EKWwWX",
  "key19": "2XFmt7EcTZeEjJ5r7Z7LLDDDB1figq4RNX5C5wquT59Qa2oH8nss6SS72u6x1rwixFk9MEza7QzW9jMdkn4vVU6Z",
  "key20": "2bPo4KzQJzLpkJpevpLbch2GP1dexJsZ7VMCbDF4yBfdMissr7YcxD5N5o9b6BXXR9FrAK8RYeiJxjK7QmmFTVkA",
  "key21": "3UkRivgLp9E3stT2JdrnurAb68mKfWLpu2RUUHZKkgxoNpEvKUHq4z8z4uuwLFc5aPuRPavAWnJaaTVuggx845DK",
  "key22": "27D5GkifnLPAWqLx9TEE3AtAo3QELHkqB1F6z3TFfarbPyAWqEeAFa5G5joWDVcoN1yRDbaYdoYSKyoP9ERMjxoK",
  "key23": "2wer2iGz3CoqwZVPPXgqLV4zqpGTiKbKcCWp6a7ZVcufk1csvdFmjEf8xe3nW8oHdkUmYvfQGey13CMrmYjbzzFx",
  "key24": "2TBNRw1nj8qQjjtgYMvUHyZpED4539pvKovJYP6Ab8GX26CofeajZoVba21u7jn1UAJ35jytRGnPSXhgeZBq9yGw",
  "key25": "jss1SZoqR8yvcBmDy63LMKThQz6fqiNqdRB81DoJuiLnXWKoXh74Hjwi3TAzSFLLMqR1nrTZSXnj57XTb1DjDT6",
  "key26": "5g2T2gUzmeZVXhW4n4NYmUtRP2pcvPPtKjx5zDYnuYNQQbKqdnNxfjkpWzGfxyxLtWZPgoKBDfHt7RRx9y372J4j",
  "key27": "66N1n7yhnNymJW2A2bWbk35KJZ6e5UmgQLd9JhPw57BEcw3GN2DAce92FWfkt6sHsPYy2KKFRz6jhCQEbevWdREh",
  "key28": "1kt96fJA9GirDLLqzGgYnQXthyTwwb1BpZTPmNDr6iqCAE7y2fYhygmvmCd3ERp1tDGBLpZJk8gwKMMBbWVu561",
  "key29": "2HtTr2KWCky9p55D3VXfGfaJoyRCt21MLgMsgXFS8vjoYF33iE6hqa6AaJDE2groA9MKyXxQZ7m5ErEvievLJLLD",
  "key30": "DRftLbX7h1LoGvV6eY6BuQCgaSADPzw93uvv4YjehgZ693uRyknKAhjM3ckZ8BUr3n72jAyCPM8DuEuRp26eYSe",
  "key31": "2UR47ArZN7EtvfE8ZCZYEr7PKVSx9Cq1eipiEvQeJSvVo9UmWZB7wkWbf7CMFSRcezoGJSXW5dVcMjJ2JRfY5UTF",
  "key32": "5cQmJRMngcbuMaCP59mrhtHv2DRFEYWJiLdTvmmqsXUQHh7vJLNfHwyofWJxKQVny64y9QnWL7yK9Z8auSK4VUns",
  "key33": "4iG6D8ie5Eyd4Gh5vHvzYb6M93zc9BsKhcDwANzPetJXp8owm4yGJoD1eSBQ8UXEu3RMABP566o4JdtanenXZo4K",
  "key34": "2vVBtzx5RL1WTLcqcoGQgviQSAq9fufcWq2sNewoSsggFzZ6uRt54wv3f4UWMxfsVvJqwNo48dUwY7fm4TBZdx9z",
  "key35": "iUrhryn5anJfsTnGLsKPCs55sRXnEjybqVsVF4Q35Rrxkx4wqsXNL8PEqzSxJQsEqSCteTmP5kHYUfFXzSVXcmF"
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
