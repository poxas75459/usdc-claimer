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
    "51oz4gtCbrynP1u89EWcrXHvLhajy7VMXRFvJeX2ZMt2fvqN5SxP7z9CETQrA62RgSE3guU1i4xL1AjKJLyZPsLw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2f78ur323fzb4yCCcE1xHXwaN8DBCzvo3zsDFEAKXCPAFy1Eod8Y9GsFqHD5hCe8dqg21U5BfpaDnDFfTrDX5UKu",
  "key1": "3GVVG7CNmFdrmuTDR4zmLawffUbzRWwrvgvHY8m4Mysj8ByunmWGSP8qNNCgsJu6GA5yyWvM7Y6Yaw4XNXZcQ55D",
  "key2": "2t1sB5hUEEj7B3BRxhjwEUejeQdjv1iv1tbDqYYkPLTwqwrJPLs4S7x2u8Si1yB5o4oqCSjnpH73CWz8pqcNq8d2",
  "key3": "2Z4NuV372Pvf78dqLxjsfn3awdmD3vdWm34akqqQWu9kC4odgVEJaFBTDv8PxYqQbm7yhTFbGtbc9EAoxBMY3PPN",
  "key4": "3gdaz7dCfXoNrRPqDWwZ4sZ3W4LERYQmwDu8aA9E3Zwri2iAhHRSfdnHR56zFo9Zo6PFajbbHhPrBUUj2danQ3Rn",
  "key5": "3om2szN8e4FYQscK4UhA3oRY9E7ErB83TzjYCmMxcF3DfGx3mcC2Emyf9FuLZx2Z3rEpmTWE9geA6zf5qQ6uyjoN",
  "key6": "4f3E43baBKrbjuqmZR7CqutC9za4Uin6M49W7SkAtPFAdeKM7phJ3tdy5CfrDRSwEuj1mQE8z5dXUkvewxkqJoiS",
  "key7": "5qhwjibGA8M5DXGBQzGvtGLerPjb4y7g5pP49CyTXxvgKymbQBEPpJE8NSEywGXpNiCSYyN2AwEGTNXH3Wo6wE6m",
  "key8": "Z5hWjE8LTJyBHNxa15868xjrkW6QZHFdZxSz9Y5FeXXq4X93jg6Ktyj8hcsr6kocqsa6HTJWiQ7v242a9ApjWV5",
  "key9": "9FDhUwxpHBpQMuqZ9wE1utGdLUQjLiNaDKmNikVmm9t7597Rer16SgtFrxo5vyVqFKrAiEe8cmGazgu53Byouv4",
  "key10": "52K6iAoVnpPSKNsEv12yJ9TUGG5SmC6oc893MN1cxbWC3g1DCBDWsGSkawRhoBBvxAg8jKwGS1v5yjeFWqUQDNH2",
  "key11": "2kmxmnJr9jYfBXd9tiSU2SzHsZuQoFQU1vsGrp411B5Z97F3qfjW81hTyfP8W696Ga3CzUfVMCA7Nt2Z1kqCuN2g",
  "key12": "3SsuperzeZmxZVtmq9jgxY7eyEq4yXRvUuUzNkehb9Kkj74Hzgp3uUdTTA9sAKZFs7x3p7aJundnXw3Qq3474ED",
  "key13": "2U5XWvrM9Qy66N2rM1cDHrczzqZcP1Eogo3v6tVNkztsg6syEdV5jqJ7zm8Ez1mfFrDqveYgMPH9ZWxdaY23gMNR",
  "key14": "5iUEt7oTNQyiM5o91mSyv4EunzxtQQdpVhPysExsSwoJmn9xZUezrDyU4JdBeM6RTVLur4RsscNr8PzS5jJQF2fF",
  "key15": "3LmQPq51kBSshJFFSpzLum2rwbjHTwAAYvZwCSN3PhZKCZgZu25pUnSuapM6Mdqjdc8UWqD1CEdAnN8KkpV71t3Z",
  "key16": "7wQeRq2AKadaBRh7YJepwTGZAiCw5VaBHuiJF7a1udherp26PqyHKoxbRCRVUFTYX6imTtLNmKNyHX8x2Qd4bMU",
  "key17": "G87gJjSnZNvjA6o9mrxgoDxCUNfzBDKArs93fdctVftUuVwiHJrAzcnyMiV9NqD294iV8bkAxv9xATyBcvdMNzS",
  "key18": "4jAa5f1NHajgPwfpyRiAWPNXs7a7Jz7ZZkD6wHdfq2JPGevRWMQnEiFb619KqTjhAAYVjgadsKY2DQ3mEkZDmvHG",
  "key19": "3EXbJ24YzLbSe5DCypNM62NH16qVyygW34xyB9PGYPkWKDxXAxMfkD69fGQZiG9prEoKxibXAMwqJY1ysh6YDgRb",
  "key20": "5eQHGvdnuRyCZRirFA1GvYSAQTN3YhNnBruAPGJQAr26xZgYbDEExsujqQJ9zbB6jQkgU2nd4f62hsdfGDhu53Nb",
  "key21": "5F5KZFdSmXaeqkHU4uHD4qUJf2xuXT9hLcPN7K9kimRBACWiaS73D994RYWuaVQMND4yUCFngq8Pr42nkxWZLqPA",
  "key22": "Mp2PyVLyJeUUBHDqkiXaaTDdfTDZxpcuv4pZjNpD7UfaFV7sQvt6UYv1vnV3RUwb6pMa2c3CjECYFE7Qhj57i1z",
  "key23": "WjB9vK6y68EoCUp3LgmSxp4qTsiaULJc5h24iRpencHAhnbJLP5eMH7eF9SAPBssHQmiCmYLbSeDBGdWJwNnU9q",
  "key24": "2F7rV6YuyBAUkrzjTw2E6omNyqChZi3FMrMwvbCoNaFS71ydsE7PBEZmDgjSS3mqwewTaLYuQtjonMNGvyfSDuEt",
  "key25": "43s7DHRQhoH9wN5KoyrjNip5fKVxRtzFEY2EcbHwzrrBrKBinJFqBz59QvV4QavS65QXHBVmpR1CMk4foimA3fKV",
  "key26": "ZzuYY7UWh7rTyiWEFHW4NE4dkG6pr4AtXpjQ1wSZK1Zt7buXxSpRJ2i3vjZzgSTZXh8LW23KuU9WqPk9a1w7VyJ",
  "key27": "4c8s79HxdiqFYWVs1eh3FMGVhp8tqU5T9vsdnFnK3RxLh7dk2GAboK4YuuixUeAK1yc7DuH5RJSxR4qKbaxgg9jU",
  "key28": "2dsjYdAMfiGAMLGbaB6jXtR6qx7kRRrRtjFBFNf8onuqMB5pxoZ6fcENeaT5KcZCTtPTGDrNqQUXzaVnHpPKcyn4",
  "key29": "3Ppv9joNumFPSewj2ox7NP5GYJJ5qgGS48XQRTShkNutoWJSMbCfP2c9rpv2T2JoCwZ2Uc2hHZ7gdF93dHDLb2Sc",
  "key30": "5ckyaaMD61fMkJFKA2fhyiMupGtdTzhPGySxWoPkZWwmHrM1DtDYo4EQUpsotE35U5qRWRSLnSdVvwmxjiJAL5Me",
  "key31": "28skfaw2G3a13Bn28h6iL3mjTYbuTxrfDLLFfUbY6QZhCLURdg14tTBxAWnAyQp85PaJbSrq6H5m3kg3SJdXuPmN",
  "key32": "3D3ZE7zhc4AabDHy3vLsWSTQc2jWWTNUzn8ezRSfYZgfrtSpYGsCuxwjrABuePTEmtMiMwBxtGfxHHTxGEURPbqT",
  "key33": "2Z9TYWNqr1j8CUUEb9cQG7F54GZKZQ8ZCYH4yKCctXPD8CytnhvVa2GDB7xoLU8aseLCAvkwHrwWLHXiGGzDvTK4",
  "key34": "CTvBQRUZDkzFkc2c2H6tDDbHkwcTHKQSMzQ1KMrEinnh5kPUvnv9zRzorK34XrSty5Xsn5PwDssvdcmo9SpPq2y",
  "key35": "4UWYmuo45TwerpYY4WkCs7sdqM9b9K3hrErgGAUSa2NySs3SL8JwS4HeBJr8guWY7PwdnnZjvUpE8M2TnXE9kMmR",
  "key36": "XEQsbFpVegA7nCu47SvMyAMr54pA6MHGKSYzZ1Y7YsQNSmfUfmJtW8cxHSwJG7ruNidiqZxqpZ8vkJ4zc88Dg7U"
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
