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
    "VfqtJ49YJDxqzW28WPWNEjnVytHigkrESa4eobfWQjwDnCCuSndRnGUpArVhErXUiZnhU1wEieuUXUVZtwGopEW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FCmEUetbLzm2TExEQnwWBEBmMJbm4Wht8pTGZ9XaNyF4mmJ46CT39Np8xfCMyMQASSvRPMMtmWcAVvUDu3JabWq",
  "key1": "3i3Sv3WaHWXY4YbqQKZbjWJpF1P3buBANKsHSNpUTm4F4kradfjfF9vYWH7gDXRQHvSp4q3BFyGWcuvwpR46euJ1",
  "key2": "hhZuZ7oR6LqjhfEk84hMLTH53CYDrHnak98kagWo3h5EuS3SiPwoxL3CiZ9DerL51UANk1vMua49KPVuXou7AJ5",
  "key3": "2rqNZjacpoq1e7N4k4yuHMi1ex5GrAssDo2CEWny7FSoPYzu4JkkE4rquMSDFM4aV6wWCdHKKcufEXadvMaEuQP2",
  "key4": "2umwwQFKqT1f89iz2sRBLokBz1iSrMXjEuvRdQwtamBWG6SPv3gNkojqG8nQgJ1KJqtVQo1sajJ7JTDe6NibufsZ",
  "key5": "4h6SfoSDVPKZKPhTq5qpu6b8VBUtjAmYdRaQRevngwoTJxaMC1Qqd82hp7ERQNCKRX9c9owpxPTnK52v1Ge6XUx5",
  "key6": "7uCUvg9aYRGp8GXarUHZSrBKLn8q5TBMamTCEma26vEu4ebQkxThGQyTc6PRX1psMJ6AjZcL7KF4i96UezTds2R",
  "key7": "4Tc64bXigzeVdxAbR8QvWHvQ38pijtmBV5GQzfwV3YDfcyZojR3ptWCMZxiFHsxqPDXLdPj5KNUUAGeukiCuNvw6",
  "key8": "4K1kWwkmqCNATWYhc9eJ9PfZqKvY5BZJXz9dEdmzEMzxgZ8FACtFGv6eCacXRTg18sAqMHLf6Up9r6AbWfz6bZYq",
  "key9": "4htvkc6nNL3C8qpCmfKHpeyvakKgYjPbDiGuyb5oJYgnKMkzUcFDGqN6mXxTDcpmkNNdHDA5AzPQ1ALMY9zTuuZ7",
  "key10": "3ivzamuhsxaxF731LCEWZJb4EzSnRUurQigyZxeXXBNdJx91NzST98YFzTFy438bivNmTYJCokN1W3Fsw2UHoJrD",
  "key11": "57pZF9BcdqTdEGXbHX5skWwVYJ7SxiUu2uS3t1oMkvoqhZFN5h4MU2wbxdEZHrXjy2x2GrsQqJBZ5dXDpuwWnz3T",
  "key12": "27SUVmnHJhQJd3a1B5bDZ7zk9BQj5HNL3pxMD3EVpfNCScdzaKftRyWgRjaUs2ki4KxVn91dct1LG2CzR2M1qn5M",
  "key13": "5NXLKf4xCxhWapEwZdQtTWkErEFV8jPCoDJiMubk8PCR8bCy1A3ZUbw38c7HyFHmqQypL8puzc66QCWhA11pULnp",
  "key14": "2MUXRxwbj7DEvz5X6GKY6unYy1EpbC3KWNfoan71nXwzMjUxaharEdnNAyuoaghusw7SCpCj5YxVoGushyMwr2Kr",
  "key15": "3i4rAsmfXSFNNXtcfJLtdzQEXQB4RuLoYPvGPtCM9bT1veSLHbVNe13oCUqvh4y3tk6LGXcN4fMVzVQrWLHggx7y",
  "key16": "5pQpxdsTzDprY5Mzf8h3RKddv1LMGrsKKBNDfW9jtBmj5PQXooj9WbKKyh1fXC29fNzNPWKRG7RxoxQuzvCZS5PM",
  "key17": "3w53sFB3XqmY4yF5Si23eVGdytaAxXzRbhAV1KrxfiWKCfACP68miQqcSqxdmoAXDzF9PKXpxmszUHMTiYpj1XQk",
  "key18": "2Zag3jDNVs1JhDSvsFuVAziBM3R7C16wFekr5epYUj4ohYjWkmvNb5AE9cB9Dznvhd2k8MMFMYsrm2NRbDjmnCnU",
  "key19": "ab8QRMVhaFJ5xzyFPv7iir3Xi4K49dYZ92mqwX5Q7ctJQPyyeJSbkJ8BWPiDbcXgVnAoEobus7GfFSRaUofi8yg",
  "key20": "3qnp5sZcQyhBjrKHn1X41HMJVqjVquZQpooJsUrv5HnaEANgvq1JcCVVsA4W8RByPGrs71hWs8kErQHBwm3mb21s",
  "key21": "4CZB7xU2e4yuY8habUfMehcYYYGW3bbzmaZhBYte72URrTj9upcM8dzkc7j9LcUhBdLJuMQJjxzCLyJB6rs7y3k2",
  "key22": "5CVrhizFAi9xykMwRc5mof8JSUavZUbMdot2ixz98cCPNGcL4ShGS3y4XcMC4XwP4GzjxFzTf3FmCfW3L9fvmZMu",
  "key23": "4Sjih8RTZcg2utefiVf9NEJa3YFvmhW757tRrK87mX1uWrv3Q5tjtum7Y5nMoRYc6s2YV6B2WqngkzjR8WB8doY9",
  "key24": "2kWdgMFdHKEQKWnaHh2B2cvBhwiMxSpFJArSkiSb3q82Mjxu2wc6hj42p1khkrXvuQufJp1AhKLpxikQ5UiVmNSc",
  "key25": "4qzzQMkgHbs6yAMAdFpg2Bpq3bqBjSMXK12rCmcwYvGRgxunBJgNkxbPAS3NbgorShsWSxK3MFkaS4L9RXnN2sLH",
  "key26": "LU4AXnK7d1gVqUNTNYNW58FaMsrUmqgPtsDXHQagBt3ThWeE76YdgHcekAiBeWBPxfVumt27WQu19ufyvsbknNb",
  "key27": "4hFmkqfAPECNYNLqeg5VGSdB1bs2ZkvcuUAjpMKXXnziLYjkQFoq7iqqG3p2mVPBBoSMokPe7hmn6FzijKFqjo88",
  "key28": "6qCY9aCmYJgXw1DSdBr4eZdNxdgv3Td3ssSTqaCxv1tB31bkHdaP11gdnRwj4Lb655agpfzA7yLQ7dHyzoTnAi3",
  "key29": "3P4eNi9Cs6k42vrwW1BVYBQCQtwRPELhnsFBZijiX5QwhnLjziN9YqC7SSLEq3uYMfe21udHsmbjqu9kbSPcEcQR",
  "key30": "42hdYCGqvoPCsFTxEDL1roivwXkXoGrCyuY4oTVe6T8PQesBqqLp3PnCBz53wbBQCgH5rNzLWVnnL1s3QMXhGnMh",
  "key31": "5tQWqUhN4xsZHvxhU1qZd7oX8thyEichkFFTHb54KdhMDjNEqWwVkoA23BSjcfCminJaUrY9mehE6ejoREqEdRnr",
  "key32": "2112eBsporyW7GpiWKYf9hwEVJVGZr9ewEDv8YqMSPPPwXug7Wbh6RLd6DquVSvvbYNRXFqaPdh3ZXY6br5ndMqd",
  "key33": "qWZRnTaExT1MVV87ku2jzr4LQS8dRX19NZpadFi9EXSvoMmz9Vc785Su7cHSd1dtbYnhQsRJydAWHDbkZk888tw",
  "key34": "34wTPAEJGxBebXPuitwehA1ZV6XjiZK72JNWuqZMfvBBAxNYEEZmAHWhRFeNJt1snCDptLnXwCRwy3FcsSNfD2L8",
  "key35": "3Az3hF8RSbUbjnmr1HT1kGH6Jpoh8JRfJrKuPKVBt7M4E6DxL4GAyCgVJMnvmr1ESvZHw5dMyDiAPxLNqoL6y32x",
  "key36": "5bTdWZqWA7ZYwkTvhu7becPkyz1QSut5bpXDF46UGJat9uCEa2jhNafDBYeqwjtT435ghtSgoZKqagYKjQzHVHNw",
  "key37": "TmY5M1RTtyqEw3zNZ4dg688MguoAK9fgHdaLNRNUf19T3SXn8QUbpERPWsXgP6Yy4M56YKEaCtjBkjvtwPXZpFj",
  "key38": "fi2byZgs3uvpVSouV8MPbeNRBYaVQgNXFhqhUhg5xTUD2Ui4uMFKJHgX2x73VoNvJSZxpjrFyw4LfmhAR3zTqPE"
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
