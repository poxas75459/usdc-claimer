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
    "414GgvbquKpsQFPhTzYEFkRbUvDCvHN8Rzin3TXXP3XoiMd1Nupz4QunoF9QBCBViBNpx3mQ7iHfwiG8iQD59Suj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kN2ieDRJ5iL654UhYEdvQ9qkTcghGH5UEpMYNwXDBr2L8Ysw7ai9VmVJaZ1nVbYLbTR4W5k8fDnbNDeDVGNsCRi",
  "key1": "2moV6ofKWi1XXC8dZwkuhFRNLsG3Sjhf3gFHgsjNsPmJ8o4X2kCoD5ZrMCJ5sfSGj5PdR4gPEAQCzzw9p838i9rk",
  "key2": "5xx5D9dQfG7nyUp2MstaPsz4Mvopd1JLZsciGng9GgXSrbU2v66zeqLPc8UQbBLTAXg5uj4N68nesJeMgxmxhGdj",
  "key3": "4RWeqwp4xVKigCx2VHZJ4M5n6o5eGfdgwU2kgD6Vg7bYuC2zfuNQe8aJRDtXAxJWLTtyHQAHZ8sG3Wj2ioCXSRQJ",
  "key4": "4TqWBMzqEMzS4FaJJhLvY2RG3S923Vdtq4GyCKtnR9d6hpNJCc1BuphvtFcgUw5txL6y4LwGAjLSFFPrMdKcsAam",
  "key5": "4rjc76LXBHG4QK6DAiTg65Kjohd2AxJ5DxnWqH4BrK2v3fvsqHK7vjzrm73RCaWsTrZSdejK2kAXgbwYvV5VKpDd",
  "key6": "2ooP4Ps6XMq7P5ohpMdbSnzAYg2o2uwKAoAg25S5DuUhE2wmywcs43Ks8eQxZGm9LP8TjGC75FYzZB22DDRqqETG",
  "key7": "4VYp523WnPCP7WVYvWwhS6Z22vYMPzovTxdj545tSCSGeML2dCqzyHPDQ49cNjpGdG4Z9Wynw1DzLmwKMovfV1nr",
  "key8": "4t91Bjzyb7vrvf7ciDBe4Xb5r6EdhXzCVwsJWr7Vhy66gq6uvoRbGKRk64bdjtpQNnjYGWtnHmTdSDYfWmpo5fSH",
  "key9": "CEc96xcBKNtKPTTsG5tnMT7oVxS7qkQRhkjtyTS4jpgXPEKEw7tA5w2G4dEGsGkMTMSMucnpfb3Gzi2BpTnGv91",
  "key10": "46uwu5hTg1BdUFMms62m6LUXakj4bzCaRYxYxXdwRysc1ERQCovAiX5aYFNYvnoF2XFaSZrGdLp2VpwPov4xwMWZ",
  "key11": "czqgT8mMgwfGaf41k5WGnzxzYPZzMit69UnythZEAseYq9JMRyrV1TbHCqLuVjbm73MxWqs38LDkkeVGdTYxpXX",
  "key12": "omRUNCih1dZJJu8F6ZJ7XXq3fhr41zkSy66CiHvJeqkSYz5GmszEZz2uuovUc49Sy8FyHdMtUqoY9bSo9dx9uP5",
  "key13": "3KNRAk69bU9b93X3T4zTLMVMy4To5necv9vbfT9LJeUkEsdBPWXpJD7iAmRkVFih1xoNy9q1ZrRRhBMxQ4aGFSMb",
  "key14": "5PCsczS4ywn766mdxfnGA6XXtezbMNxEf35WP9jJdeBMTqfXCMjLrvcr6pGmRchLNbeRrGk3oaJ1kcWsh8YS6eoS",
  "key15": "5QC8W2TUV7xgWyBFycRNf2pTJtf64wSvmozj4nAKmvEb2NPtAoipv5r1MS3cHmTHLn3b4XU5gGt1BrZRGTJiiPVF",
  "key16": "JbVt5jiY9BhPjjfc6b8nNgbTQUTb6J5C7SYpMgbuUE9EBpq8bPoi24wckYfF2YfUrmjLPmda1E41yHwH9oLMA1h",
  "key17": "53jauwxJLt8asuvGHY4pCZ9umTamDV8N2DBU4n3GqHX9Hn16a7CgSjmHyyrykRSUYtDKTbynmYR6Lx9eSCJs1GGP",
  "key18": "pJ5CFaNSTmjb2CeS8z5Ac3YjfREC3VBdsTodW5WR2tKTHaCCZibPrTaXtK6U5SsggLFmAu7LNDC5v3LAHptWXt1",
  "key19": "3hGnXfAu8JzjmZJRLiqGG2dPKcwkiUVdodC8mNDNAfDMVQdTyott9wDHW6gXcMB8sey6xP6iumQU82Ncy4rgn7t9",
  "key20": "cFxqsCiLnotTwHCWecYYeMP3twQZw3WddyTFnrDMaHHfPny8y9F584rFjwYEFeUmfQtwcQXNKU8frMwccLw4MQU",
  "key21": "D9KXhimr7w2HGmSknHwYUoUHWrxgn3GoAFQjQm99QGPCW4w14vZMGJbCGyPtdFm4gUWr6XhS9dCQfVa3aD9MVrM",
  "key22": "2pR3bNsfKqE1Yh9fYLrEtmuCuujUWCGJSFZ7KciLu8yFj8ZRBQUf5CRMG9BKurxmeW78k4F9zBzr5gbbwWAYmRNg",
  "key23": "2anKMQuQqsXQWPavpzjLvRDs9Avqr7LMyknhkfd81qr96PoBEKoR39maHXxGXcmNCruUyLdGUe4Mn3gbuidyAtwH",
  "key24": "2MPhxoPh26oKeiC3kmmdv68RVKFMZhd5kf3xyH2fVgDh1p7p1wsoZvXxQYyBfCVpqLKU7d5RzAe35FM2smepvbAk",
  "key25": "4Q3KhMxnGJYx4YwyXcPGwNyH8zHR6NhoHnmbKAmRC6eqUQtrcgRueC65NNexn4yJ8zuGsNPH4ZEYvCZukMyBhpMp",
  "key26": "52fA6Dd6QXabBheNGGJzwY93mgsBBZQUkjTDGsJ2R1fZ6xu1bHyuRjSbWPqaQ7CXmnuq3kB96Qht9q6Eqwhf4kLw",
  "key27": "3HiitPj3bb3sMbRX9rRk7MEorQF27ojS18nFpDLmf7Xsv41vxc2yHfCVyRZ5L3kmBJJ9X7VP9KtxadMMcbvCBytB",
  "key28": "4UeGtNNiCcxgS29qTyNEbV6wokDJJXRd6tZ31LGeryYXYUmQUHg6cKEn6hBsPaAnzX4hSL6yPxsxd2YGdkQP4s3P",
  "key29": "3XAqmCitfEwWB6rf4fEEJC3tGadgM3yoBeRvR1X7reGbN81ubCpai7vBM8A6pnRzWx27RkoyX1c93mZqQuVCpMeX",
  "key30": "2mdWkXehjT3V5kGUx8kb2jvHYpx59RyRFdnQTmJTR5rNfZH15BshYKeuKTKRhPRpurDgq4X4HNLehiUtWSoSXFf1",
  "key31": "ZgJZNgw8mVceY4QqW4Dwi6DpFueYT6CwJNUHPBgkPtYsDj2eY9tJUYDUr7W6AdrYgjUJKsotJ7p3v1Y4vH6WBN8",
  "key32": "zHsSuM98yjdPtQq7vq1YJXnezAwXuTkPGophdWCqraQYWGrUKQcWAqkutACxBGoEC8AFBbqter5jc5xkqR6nNoL",
  "key33": "4tyYNWbqaJT1QPT5dL9WktbwbL2RSNVn1xJV65K2wkWkdKRKmjv87no8Ex1Uei5WYtrzjWTtWJhtwxNHi4DHES3b",
  "key34": "5ttNimFXCdwU3MoWvxEEzmSFMia7ijD8vPfqyBwVitScbFPyng3DE5NqSGwAQtSxb2D2tTFqGY8fHj1HaNxbBrrj",
  "key35": "4froasoKPDNhFFCNtdiVTnwZtEXgbZcMLoQtirdfudXvszbCWgmkUu9zUZCWsPFn5jmUwnyauX7cn7PZjrqvNE1v",
  "key36": "3pHQ5Sh8ZBoQGZ8wWfJuEjdkFRYCXibgBJXTpoqrj4uARVqCNG9cGSUxTHZ1pUWbTGLY5La4rNhfv6BcLJ7cyDh6",
  "key37": "4ET6yxyT7hBcoTsLZ79RCb5bofAFJ159MwPwksjSYtdPXwBURvqdMpcoC4HmSRhUwTRYH3FMFWRp4VxYjxmZ3fy6",
  "key38": "4gaqGo2W6k5TzQWeZ85YCaH4S4eGJARESoRuCxPsbrhsSHZuSkTRoVjyFFyQGjibmq3LomabpxvE92cHPebcsnSQ",
  "key39": "4vu5VSrSwyg4Zmut8sFKcNXsBzW9ZRgRttHHEjXGjjGt8wwbgMkYxiK61rXL466GBbkRZnG7L8gt3WWytJWnmVSg",
  "key40": "5wJy2VNydoLYvcgFxut59ky9N9ndWYcgVnHvUPtK2DaSowE1vmDtTFLvMxAxaiZPSweFRAssvPXNjwx84vuQyTeE",
  "key41": "5LRuFZC3TSTaGdVpzQbFWChjASxjb2PkSsLniKCytcct8iFrvt4E1C4imhaPPQezvxJREgNy692XRtrvof3FrD8u",
  "key42": "5NRkBpCZhYJCYqK7i6Ru8DXbyQ5hzGzU95zs1WQcbSyEqVCqQM6HwbHDDJQMXE5kJKiitEPp43HU3enfXHwUeHvG",
  "key43": "5RyFQg6yBWQAmZmFtsVZML1F3y6JN15YX1mZ39q4DkuS6v9ayERSHG5crqGExgb8hougKreF5vLyiNWKrRDhPUvW",
  "key44": "2jJgVjM7RBn43A2KApitPRgQcGJPXYi1uhntiHNognNZGxFn9ovq2V7UquQr9cQS1sz2uae4gFLqzLc6B535nX9b"
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
