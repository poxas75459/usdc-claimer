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
    "3qVvNb7N1x3Soh7gCm5KTfoEtNm5z7dcWuKhxPa1t7Q94hB3MJUVLiMroPk3fBf5P1fcwhb4V3RAaVB49etM3Thi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42Yf2B3H24irDAdqqUUo2e9FJun8xyTub2TDAQwwpWJDH6cwfyXpjB7xCkkNBC4v3NXQ8NYqCXhU1ffAcc8DWREa",
  "key1": "33iYUfmTM3t8EBzXyZo6iQQD6yjrCW6iN7s9khgreS1mTQbaGFcnUCX47Xz6SsxMtfRHYU7w3iKuR5SXwmx8tvXo",
  "key2": "3J7FRc2TGSh6ueXm5Y6nyWMow91uNeFTpipVEqqaue7z841BCFRUQTv7qtgj4WneXzsUFShhj6wuj63vAj7dEdau",
  "key3": "2kj6TE2iMonTSpW6JijsfSs1whRGogw9UnmtQ2H5YDPKaifWx8Jo3aRueZdKatV96JTHG29HzvuiUnwW9rtoqzv6",
  "key4": "6357W4b5XJjrdSFpbWtZejNVo4PZoa39QDWUW3G21Zv8UEVuBtTZhrYdJa5Uh84TncrE3zd8GAgASNxD6zrAEt2G",
  "key5": "5fdQYttGjjC6GxDNy2717ktQiYDPSi9mPbD41aLsDqSrU49tK1AteMQSxCEz2hR8EwYWL5kymjbdJQQAF5LKHBcU",
  "key6": "5UzFU2ZjLFWWvNPqjh64kwYnqpmsWuJm9uTsgc1aXgGHUkvCke9rUtNsTSycqvfGQP8hVm76nvcwG2SeoTBDoaH",
  "key7": "5axbmh7uRaDX5VMSqtvG8da5cvetiMmuZB9t34FrvqSiaLkeNhKHvTrw2GKwzcaXJbCcHpg2mGmpRzm59QqzPzuj",
  "key8": "2AfyPPDztjXLmFQ7vNprUtpRA4kcVMJSJzCeJuh8URKRXh3tVT8k1JgnTiiUg3kfMKLzw7UNsG7NM7RqSawNnDmp",
  "key9": "NjXKos2VpFzzYVupdXBpcS5RC4Tpn287SDJtotbPMXbgciwAXKakCKLKkj8iujkDQoaEUUCy9313uus6GvqHWZX",
  "key10": "3jJMmyGSiyp6b8hC8gQDEmiVFQ4Ne9F17t2urHP3G3HWsVwxXSkU7bHFvLgnGrGaqioMeEpNV44t2WDsz1pmrHQr",
  "key11": "4MmyPqMHWnoBaLJnpeEoBZm4uwtpVHeTc5Vnt6dn9SjjNYTr8LhfmxyDVExqWEdFW9vKUTdNEebRmJ9Sj8kkHTzZ",
  "key12": "4yhxGKcMDiwaQfukTTvUS6u8vxxM1eJffWGKpy3CqEwYYfp2Bb21CH58Bzn4xJTmbELMNVg3zJCUHZBPpyZepMas",
  "key13": "mCQ7GYZjJhetZ1qTnX7XqAZQHLiQ4C6xz5u6s8pNW2mVdwHRZQfMgiSSpbRNrfa8UM9gqY1KYviWdsrSAkcj3Ak",
  "key14": "3ERCjphZ5S5YfeiS7kyeKURhyjywiQaWAD3MccBRF8FAbrcRh6s5p2hYd4CwCbqDrvFPjkL699GNQPqHnSn9qHhU",
  "key15": "1CVQQVHUaFuPPVYPkKyy3Umhw9awDdoMXnTmsjv7XEtrNLSoaUEfGzQmaQnWMe3RUDg3udzrxCxgwTaptMZ8SoR",
  "key16": "5sAix5R8MFYiD1ZboYod9j6EuvZaDFF5sMsSBGpKzqcHJMZueKsJ2WM45zr3wyqJFKGActtyQM8FZvaH2CUJXnBb",
  "key17": "4rMVX7Dq27U9gSZhzq3QLRzvaLZstA3H5sNyhQSZrUkfJSTaA1PcSZ7jaefFKwbzSuxL3P8sJr9UAZxJ5Ngi1Stq",
  "key18": "5XsJyJ2gscwcS2Bdu5XcNQc18z13pFexjyK3iqrEQo7JUMMQz88Kkh8YPyDUmXF5bBtfahWrJfuNrNDkfok8qkmz",
  "key19": "3Wa5jXrqTogFwEeqViovdF4fPy8GiuTu4njePFV792u4dyju5sVQoXUpqEAgaMrD1QyoUX5nSq4dFHn2HkbL2Ron",
  "key20": "Bv1d9BgTTLRrzd7tVe7prkoFZ6nFEsNFmQEoVUGRag9hJrr4D6VEqR3GSWbi2tHrWgFzXH1qG6oFYdD8ASpJwHT",
  "key21": "55FFUxQ6rn9gto4Eu6EAiedmrsz7oiC4JbFTytd5sd2Sty4zyvYTQeow7DQ9XQZUQDAs6iMJ3KosVkJqz1Gxykm6",
  "key22": "5mbNsPWf7qmoGzfriDc4eZncJtoqYqEsJRWGWsywBV8ZLh8EcjJZYVCt8K6H7MjbzLeKcpHAwyKo37bwErjVEXiv",
  "key23": "3718NqixocNzAg4sj8DDJZU3EZmb4y6U7K5Cb4KWGbhhQJWk2vNhbPJpm7HbZMvN2M4VUWh7i2VnSjtBtRfdkqoU",
  "key24": "3oTvvCqDQDBc8Qy8jNUhmPuBGemEzxfpV9qUezFoLqrLYrd4q9NoysfdxVSN6LccjatczT7gG55ikjAicNmV5tUo",
  "key25": "3HmtARzFGTnKBphYTCeXi8dmfh5z88CbkTUCgkoM5FafqXuAo2QVoCeha22QPrzNrpG7F71kKSoEkFwRNSFZss8S",
  "key26": "rq3ER3iJiaLaFNobevR9XzL5PRTcJqpbxHaawx8i5StCnrJMobnptUdNCPXTfsjCcFvC7h3bATGcY5RDqp3sDTs",
  "key27": "3AFkxoEh5ioxsr4rzBZBGjtJ3rh51E4tH1EQu8SUbQrKTKxTjr21FZXMiDgmDr3BXwhgf4pBYSndxFxbmTq8ihrX",
  "key28": "5owwXK2pUH7st5F3phDAMtTShEQmB2VyZZApwn86LNe22JiBiDtF4FaR3dowk8g3F2ydCBDiW9YHRhQTdrHjp49i",
  "key29": "4QfnFJHtJYrXstsVLWw6xuap1mUAG3RUow8dsMcxSGTnqDNqxfgL4P2jutLFTQnvwyoaQpr976npTChQYmrDe5ig",
  "key30": "5mLeJMDkN2iPFoei8CrGfGUuwxxX6mBTkXxQ6fdD3oH9dw4y4keWMYYM6HSrqGdFaasGzs8dJAehTY7aTnxUBYRv",
  "key31": "CcvicuMULVFdUXEHR7LHxfUjexiWeMY467YwfD1sL6uN9TwTz5Us61Ms3Gi22P26C534b6MhLU37EauEuZuKkKC",
  "key32": "3iDPSvurAm9PFqHT4MSEoRVkMkpZouKubgXfkoxwFgAodoBTNmhku69PhCmFhoG7oDP1DbQ7Ftv4muyNQ2e2kMpr",
  "key33": "58PHhhRqpDwTGD47CHwPo6zvFEgk25oEPSKVSTyeTBShWHMiMYcv1sgqUDN4B6kU4CoaqAzwYX5CMX4xP9R98kUR"
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
