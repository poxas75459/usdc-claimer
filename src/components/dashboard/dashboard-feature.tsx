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
    "45CxxFjkFnj8BngtRhfZTaWv7ZYApm3eaB3jqmG1CmehzE2AzBNGyo5JE4h81fBLppmJfRvN2gTZnjWtURtf317k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PRWu4cFD9kbXj9pSKQJUeHnznAMs5uCmxUpJtYntaJmXuef7FBZ36KZkT6NZgG2zUtWQmh53fVKpDDoz5PWKDio",
  "key1": "5GeKyk9V1JqDBF9RwtvxsSg4EWDqHeb7eJdeHLuFgSzCpRkh8k16sXZ3X1y9R8AK45BUfGQZZqXZVNraZU63W4oP",
  "key2": "3KS85GSyAHPox1Ta5mHZBQLuhSj1TE53T8jg4DYXnCTJsPyp98um7dd4P7nm5Rn7pqdbnWSx3pk99GbDTfRZcxDE",
  "key3": "2mwkamzon1PtVZ5KYkeMi3thrJCPqXYrDzYXibYeotLmdX4TYFJAZeJT6isGsGpcsfmzoFX4t6RFmnog7qURmdhc",
  "key4": "4gUMANvkmFNnbafTFXaPS5jDkHexxHNowPWYE3cSn6AyUsbW7BFaFATkTLfWLsrJQcoGKzYEwVFP2mD4oWoQCZSg",
  "key5": "2dA7BydUk27LYmqgmPT3Bhc8mYNGMgYe5JwpzKKNBc7D8AAKLjStGRoVzkkHp2LANwpi7JX9xQztVTWPSJsnS73k",
  "key6": "YZtz1sqN7KJs5GH2z1bZ3rrhmBPqcQ9nT3BFsJr21knBB5h2i9w3bNzEKcv5MSBAs3JXPS1hsmk13nGEqnzjzjJ",
  "key7": "4TomLEisGxGNMY2psDpaU87ts91DbTQyvcmec5Cjpo9aujFQrYr1JXDxGVtEqHr1uhzd3x7Zz4zYL5TGL8unqta2",
  "key8": "5Su9uXaUDH913gxWuxYbn5Rox65CFUinFEaA7krNJMJqGZ1VMzYPuDDpV5zhMK4TZqpJ1bZvfKEbjoV6nXaRqkep",
  "key9": "3yJLH2neZSZCLtduFXRdsAwqUA1yp63NPmcRPabJ6bC8vSRX69HLse5vSftekYM5uxoua5dkNHh72vGp4NQx9x35",
  "key10": "56MVDzrnYKN5oXvgXbpkVFukCycd3iRCbAJYQPi9t3pMzsafva5ZYQ3kkuHTkjW4aaDkZZTzmkT3rQZc7SHiT8pS",
  "key11": "3vv6xgxTnButvcn7VNRFeQVFAxHeD4wBrzsVTCjhnAfXGg5ENXkYbJShZmnX2obtAS1BLGFrRGy4KJY1saVFw1kD",
  "key12": "5Pt5UoTpck3DvqfJrFrqMiW9zuL88iCk1bYxCeGCPozmVkcYoCUBL3epYyRgDGm3JcWqxMV6d79f7EcXUHEw6Yik",
  "key13": "5KiS9YaE4fNmqpjWa57xs8gChYZtd44riNhBSqch8DzioF9Fb3mnGb1Hqh6CkxYs7mnHunFFGMj3qX2ozkkvUmjA",
  "key14": "37E4k6Cu7U8f4k9UeyUTHXP5M7Xx7RY3Z9XaveKfx4Jz2f4dDS9TJ2AucJccsc54EaFtfpceirLzeemW31fXQi5o",
  "key15": "2zrXR61WZntmf3VbnGR6ebfGwajfYBgerp7cCRRJcRtWUtbUjAyTyYLHC4Vumd3jfAPSPJWc6MiFQBJjxYUAvmsG",
  "key16": "4Txdyp3pmpbteNmSbKfvBjdk4etNVzHbJwb5A6C7j1rXAvvPp9RBXcUdWnT3vyaSm8W7XyDiimRSvLffFayWKVuR",
  "key17": "5DxV8q5B9W352ag6S2Psf2nHeD7XrqcYoUHrv7YtGLXokjtJiTtw7v5EvkWc4bfLtCcV9f7okdwgbumVdy68PsYD",
  "key18": "51dCKih3h3fMyAQtGhWFMyBh4aFXXADuezPqBHhJjGc6hoKrGrf7JNzypXxhyMsyqpvxX1wbD2S8Y8svUeYbGUeS",
  "key19": "2fxC9286tt5FJERj4SRAofYycK3nsvdxK3cqBJEH2hFbg2hKqJzbCRJiD7PBQitWsx4xVNqzq9hBxjtfUoRYD2yX",
  "key20": "5mK1xFiULnYHCaLhmGeeAfDQXyzV7h5hEyr32XLdVFg6LoDUPeMa8Fs7ZKWbrxRPGixKiDh2rsJLCZexnXDTdYfV",
  "key21": "JbVSvMow5Dy2fscsu6GmxKYwCFHvuvjBM8groqvnbmbjrV8N9xWfzkvXL3UcydsjDPAhxDyQqMFPfNAsLudMC6E",
  "key22": "3BAw1wjYG2rikDGspecUjHKqqnc9mFjKY4hCPNeTKGKrAQsM1PzbdsFZ5ekF95xu1DjjY6thY9jzgSJvgjgo1TPP",
  "key23": "3bPtN7CNydffLs7u3tXaP1eX1QfQDqDvwDMNRhu3sNG3yzRaEoKsPC58Da4MieURyjbBhmsRjWhYnhDvYjoKWc96",
  "key24": "5rp3Q7e4fVVxKqUDiAGWd3Nt2jceSuX6NfjkBVyXDyfhHvxfpxWdjcNjuCwTwu1PfbjYUmL6Eth31w2Fp7w7n62E",
  "key25": "5bco8NjGSRc4MTs1aLrtQWnnHSuKipocRXB5UkGZzhhSjX8bCHouvcKBfscbYJiiW7CezauG7WdiYrfesfvePknu",
  "key26": "fifEXWdnWrG66CZ4uCbbQL89RkvZTA2DPdy7BwwKZmK82irqntmxWp9rMKh8JDJHUXXrSbcQu9VmjgMpe4hWpfY",
  "key27": "3LJdCtfbgrcYJwp8QhyGUbsW4X3C7R8QYWNTRuXngbo1ied1xWmghm2hbGdzdrPTbkCFkbXyekSDagzfpdCEeosx",
  "key28": "2FJ4djR53zyn3SjVcA7Ax2aATssvSe4QA6JdiXAWiGR2rBJM18TTPNgYxBT3qoLenUYdWvZdjhnjkRTT3Gm2j2dj",
  "key29": "37Wg5jnytqbaUktKxmUy6HKhvrgpxFDpTNxd7S8REmLVn1DMjKF7KJqbVxg2Xk7edhPDfxTGS6tBHsUmy72r1EBn",
  "key30": "4Nn3CUJbEv22tVJCt1DP2sGnEp6N6wP7o2L5ALBSZBT1bjJ9vRtHpMo4RDKNvMmM4qaLX9Bcnqd4pWkUny7aEFTa",
  "key31": "3ATQMbkEnMx7W2rnyzNdyQeUJDKXaWEJpKxoNET4JCFipiP3KP2ibpnHptmoFsevhCq7Y4NxmDjtVcdbBm7gowK6",
  "key32": "njMHqzpV6rohgw9mra24Tn6tBF51pBuimdxNZaqL8o6jdFP4DS4aYMRB29aaThxwEyQoRapqqNsYh5Nk3itV7wT",
  "key33": "3c31nSurUvLCD1ZwmXM16ZzD6geTxqdB9PCmEejQ2D3B8xk9NF6E13MvQMo7enmJaFNm9829s1M6Upu3YKrcVbnw",
  "key34": "3vYvJh2ePRfB15aASMUFNoGugwqL7cFcmjcoBNkmuSsif4sWSWyMuCborheU2PGW7gLKTz9YRnDUQYd8jBm2gk2Z",
  "key35": "3TorE7zmEtJaAHRFj5M7v41DyJ1pS2hzfRQ7rrfsXL2rJ96wuMRBsSusuHcNd498Gtpzv9XT77hNFFGqvTM98ocq",
  "key36": "66xb1XpxRvMMndV9Nh9crmA6RskkTX4JWDzxjepwsoJuAQaS4dAoD5iFUfLXew7y1vnUsf3uQfmdZCFegS9g21SR",
  "key37": "22F2uSBySJmvERDTH4K5KE7aknasQTnrKDkd8aGHHUgMbnpJfrqtuES8zdHRpRwviBTZNf4aJxpXE9nDX3qmXRwh",
  "key38": "3kxtu7rAxNCcYAp7h9J3qLed8yAwTBcE7dV3pMcoFgova2QUZTtkMGHnhdDh4Nh1tZgTDVe72cV11yXQCbAPvf5q",
  "key39": "iQKAQUUy4pUVT5kuRLot8vMcmUeEbqrG7yucUcusHf4JT1pyTeFUBYB8CeQh618bw6AaaBvL8x7To9UqmwNwnGX",
  "key40": "ofdWY5pwHrDWRvHCGVXJAnyzQHnxzaDXxTPc4LKDVpUNdqpbp75pUB8sp2JJvR3RLM3GHjKRsAkoSACfdhJ9sCK",
  "key41": "28mMP8rnvwFWfcznD2VA5pngk1CBJs7MrV1cnPiYMa71Fo1rGbbGtUM2udF8hTQ6jWtoWqGxtXMF6RGxqdWKoE3g",
  "key42": "2UUyBDFmqibpFA4LKwTPa2z6doEYGyvBY2vxQk46vzoBupnfVqKWpgLQkgc2iiN3Vy5hYHqP3ioMQTfBDezhn2G7",
  "key43": "3yErNXPCshYNCfms96QPyJ86Jv9Rer82grcUsTNUjAAVKvAXAx5Arj5nHPq6kAqyTYV4P8qs5BJPxbgb19Zt6NQV"
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
