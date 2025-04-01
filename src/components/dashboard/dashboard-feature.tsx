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
    "xGkGiYDa73W9oWbYxbB1KSUvibDtnDSfwL4JEiXGGS2afLLJgDFJisnJLGSK3wcTZsTuGdbdWbDAnggGRQJmvwX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eTgwTFSfu1gcUkxbqgUvaKwWUgVXjrG2d24bhnWEnDw9yTooMiXv2KxSK7YqiVW62gSdgiAasW3vQoLYzAYX35i",
  "key1": "4681fbc8VKQKcWnyGhpXTkm5nyCJGQYJ8yTVHJzz9NNgYnHkvexUGsjAx23rtaSYREhYS6HFUMgky8gB3ce9wQFg",
  "key2": "5gdZjsHCu88an5zN5PtzjZrWaUjZBuEVwKxA3k22YENeN5okMQSif1VMfXm8wPeuGF2gW9iCf4NYfD6k8DHqv312",
  "key3": "4VRnMFpR7DPP6jrMKVMvhh8bUXPSXMjQFm5ncPmbWyA3MVWiTd4MHuMPsTqR84wbzvNU3nCckV8b3B5ie5UrCpjQ",
  "key4": "3YWr8WNE1VpNmsuYZgC8k8cpVo17ygyafAXtmMmyHqfFJoQt1ce7xXiEaATd5wN4Rky3D3EQQzjbhEcQr3GZb9QU",
  "key5": "4MSMLMyM5ZWZzaaR8jpcbBfkB1zkfM71SDGBw9KFq8Ma5y9R9Ktj6TL7Z1oRAht9eQUZpvetekii3p8PWh3CQXyi",
  "key6": "2swRc3SMsakBDRKYZpFjf3Lu4N3YHL8pXr1Edx3iQmghMJP9CE2QNgBuUbRC5RjCoEhq3y1N4epEEZ22ojuS1czo",
  "key7": "3qkPy4b2ayusv6TTbCkMiCgGd91x3aCRB4FXUF8bufahvak2ePrZcefsJcNJbZvHd2h3P8mpENYuAzqdW6VhzYbj",
  "key8": "5ygSzebSzALBjiuG4evLA3EtE2AxTfpDc8B5Hedgbhc8wdRRSxp4bSY3wm5yYHp6D9SXH33Uk9PdU2D3bC7sexrY",
  "key9": "3cqur2hXSNU3gkpYJYnNoW6dae8Cu4L4e9N5LTCDot8uTn4JBuzWPbSdwJ2EoamgSAuzx8W3FVJfPwYtqbaqshMt",
  "key10": "5ZQsz5VR8yDKaLZDJwWZhYfJybRWYwKT4YJ3mU4CRA9mBGXxhpK6WBxV6DETNfm2wPL6nHVtzVehr7bK4yLTpyvE",
  "key11": "P5Amq29qmW2zfcSDYWtKhf311gu4SEPHPjMr3RCQkFFRHbjAjBGhKKTs7mnyhby1XRTESRTr8k8grEza4fxzqX9",
  "key12": "39gTj186842gbrzaHZ6BkYVx6gXEAft5Luytv4uL2SKrTD2FA1EGrizbZLW6z7tjHbFqL8bU2x5azqFKMnyFDP6e",
  "key13": "5twiWGm4Q4szxWg2SQYJRfSzN1GDQ4UfMzUtt19a6w8UmHvonLhsTJEbVL5hwZLj9pZ71b1fqZaVTbqm241wN11n",
  "key14": "3SgeBNrk7WHRUuyVhkV9yumFzT2i4woVZC3KU55T57tBgxvK3gQtrdHFTcP25fMEkA552MnvU5AertFWW8GRtLA4",
  "key15": "121vQL2e4JJAi3d877YXhGzeeaPJE3FkkYjfqNr1nruMkmDdwH7RjyTughK1CNZwmDQw9HXyoV3gjh6tbPVXXtwT",
  "key16": "2QezCD7qK84SgVmXJjCdVuGbxv9kzJPSB3jBFJZ47MHVvopHN9EN1BQEKL2gcEG3KnGtvNPiqVBPn2iA9sroEyia",
  "key17": "QWJkZHcF6C4XJRNcyjRRqvHPGgy6GurcMEAZh7Fv41mnzUvS2Dm6G4ZCh5BQMPhkj4esj5WVcXEuHmsMatdP51x",
  "key18": "5E5rkUSfdCUs6z4r1Kd8qjDBsGHTj1RWjGcJurCTGLYfQA99sF3PASPGWQ6UpqjZkKr4CgMrgWUrBeagseKrThRd",
  "key19": "5Ru8XzsMiCiyfQdVeX7iemJzoZ9c1p8r44NAKA1tUfgdYXeiTQRYFxxChDUL28bUpKmoisU2JSkHjfn3hDEHv1qv",
  "key20": "FzAsSWPCtSvUZNivD8o4YVP4em6czZCN8QExj6cKnEnNdxvcbisHqXmhiLraGCuw4Mcot2dykZPw7qPENqnYv11",
  "key21": "5dBsRNKxdygvaifQxrcA8Mr6q2Ff5t5kMMZa8q363xyWySV6v5g68wS9ggasrKcLjDTBmMAJ5M9FNVGazArc8Rfp",
  "key22": "5n5Q7BHsQXkkwwH1axUdjAPxDMVAnAddducb3mZpB9XbizWvxn9S4pcLDkTfd2k6DArfyqfyBEGB9W4iYdEWphhW",
  "key23": "28Uuza6tf3mVqTrRybnk6bfv255NqejoxzVJRPXbCmyL8huZ1CiRF9MWuCDWPNrieQDMGzgS3h1hY45oPYR8rYyT",
  "key24": "3CUikRHyNsdwwjJ8xW2SHsisaYvjtZrYnaCphPqbArQMybyQBLks3nzRJijdP5NBF7aiu2NtTyGW2HupdxjqUAz7",
  "key25": "3auD57saTf2UNKE1aGm2ZhCV5TrG6wxBXg1BjwXhsvtwixfwUNUGfFs7oYvzM9hYo9pwt11HmD3VSrQLMUyXnd35",
  "key26": "3BUAfoxdCcEfvBzPaVNF6udB7usUoXzo98YiaYqDLavf7NEZAQjXnHrgBWg7upYumECoLDsKuoLJcqML6yHQ8zip",
  "key27": "GvK12o7dPErXWx2LkgH46PqCoHP4iGV6NaxEsjhTx8dsXF4qHg34FTpuAhi9QFfQMJgGA3nzAYgU5zm8jhUv7sa",
  "key28": "3LwXGs9TMAKLWgzFpFAm2tuANts13s22JCwH8Amit9nWRMtEs6KGjVZccPmsnh2d2AqUBtPgNgWtVCDxRBfBQaC",
  "key29": "2GLHAdrnXwjDvUM3SFvFN9jVG8FhzvsKi1ByaEibUFAThDVX3LAi8FgqHF8AGaQPsxkUYqtFd7Wk9db2Sq2SiVEF",
  "key30": "XfN2cjqvZmKzSjZFjTp5CA6gtusf937Wm9fu3SzHDryQzUcL3AMAwBgNt8fAdLmJpej2mXRd7jjhNxWhRk9EpSC",
  "key31": "2Vi3KnLmvXHpr84wK4mNKHNzHNbZduPYwbNo5zANQJ8vLVhGUfdSsDNH8QmuVWA8P4E64o38BYAajsoWB45YLXoV",
  "key32": "sKdmaayxsdEJMKsG9sUDdwAKxxLCx9HKsw3SyxeLdmD5peUHmnf7RWxhAeHmJMEQSFfGqZoudYY3rBoZcCiiT2f",
  "key33": "2bNjBZ3qcnkFC8NMokTEVHiSUam6fdcU6P9Z8EqV7aUEjpi6q5mDwt4Wv7RY4DuBra2R82rCt9cMj2FSBYS29Tf1",
  "key34": "66RYRnHcA4LoMvixTeDEm82z7H7EjyLL4iCnCHYhKHircEQ3i7KwwL8WHCx1mfMhkgViiRAtNhDa4WyP8U58jgAb",
  "key35": "37i7QxwUnyEUM9P52KfdAAiu1ukZDeYkqDRaDTiHwWu4d7hNrLa82d6UArrcMaATZKrSTa9L91yATrV2avAcCA6K",
  "key36": "2mrEuJ8bbwA25bLzi9byx8VuCzT2KpE74QFiExEn4gvuX3mmvWe4kqkHAj4oaj1oMvvtRZ99ZxPAS9eyXBHsEVYd"
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
