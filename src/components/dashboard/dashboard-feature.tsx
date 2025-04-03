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
    "5dkSqWKP2BXNvp5d7voaGDJSCdHbduVgmwXgkqvyC5jMC7ivY1KfShm1A3tC4F11EVjW3EvCGMxtgVFqcx4B6Co3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23wcrzGWVjGL448bgdZXfMEdBraSehQJ5evmL8uesuWtA24FdhL6qhvpHTQp7u5HUVGYxFeac73LyFrbtiCf2pxW",
  "key1": "5aU5S2wME91127PqosgzQzE1GABPY32f2fDyU6k6u8CEJfMVHoJmjHtsZJ5hBfBpVYGb8D4xT25EVVKjemYikH6t",
  "key2": "4a8YdDzxKNCF4RujFAsJo9Bs3XyX3rGnadNcP5cNBLn4rMxyhV4TCU48hag8eP1ZfS6Lah4KaLKdpBQLTKngU8hu",
  "key3": "3HsHZQXNmdvJmmm3GzrBvtE3yVNK4vehmN2mMxDdoN5gRV6ZhGMoUckyTFgEHyWDtVZHfqFvCW1Z6ZUmHP8fhafA",
  "key4": "5dA5sLUQ8DT7bMMiBca7hG9MxqcarrpvAV1EH8WDwYFctZrrD1X7Ue1gHHJqsLqFsh4Bj39yt76M65NrEhSNQFVn",
  "key5": "378VV1psHyas1X7sxX4PhKnWjr4PRFZMtCgEiD3kBGQJ72xjMxYEZqkeDQCB9TAuBkXaAoV3D6ot6BfcTBqPcPtt",
  "key6": "37t7TWS5Tt4txqHUEQpu3DTq66UeCCgrsMUiVdwcSYfE4qncXfDL3YB1ef5rgjSGyTE2M4Qbx5qF29xXMg46yB6e",
  "key7": "35jHJGRJZK4wDA5dCbA9NjLccScambmWxPru3uwNL5FeJnrLuaoFc7HbExL6Jfr6eQGYmJ8JrRRCsuAFieZGz8v4",
  "key8": "3L8P6Xzr51yC9PRKbTX2aw6uGiG9Z5cnPcdVJMPbsCFigLSv8xYW34ydkEBys49GHGfTz7BKFcpToqRiraofESz3",
  "key9": "4EukTgvh6cf2MLZ1bvKB3mdEWzTFwFG3BSGdJVGysQ6R1ZGs4vn2zVyj5HqNpeC9W4s2n1vpdQn36o7QR72VxWqN",
  "key10": "3beWtLtALYZqTJFyWFzeBXRd8VtPQ2kFLgevQGmoYU367uUXNkBQJ5Si4u3QAQKoRpnrGgk7UyrQcrLKAwHoh47g",
  "key11": "34JJGPzHFVEtVxPNMeWWAxSksg9KhUPvXm63VxCh2hBW2F8GJeA6DrFj1QpBMtvwFyjXw8NuKFbpxTjKMm2yM7xM",
  "key12": "2firsquJ63GwgGHcgJkST3rPy8S4qjSVweGNLjfbz6Nnr3C5a92i6qc5BHB7kj9Qk4QQQFLqyzAG5GPRx2ESJxnM",
  "key13": "74nLLnm7NeUyMgogZ9s5ZdKc8cvzgjDY7L8zxPmw5hKD1LZnSbZTtmG5KHnp9fMGTawztQwq9fcnWRsTrFkgqMb",
  "key14": "cQbih5MgCSz1UL7E2gjG4DkS5WyMY6GB4yiyUJyqYhYSniM9Ex4rqsMJpNgWxouk2ysC4qDJrG76LYaz1hxeahF",
  "key15": "5ZD1gMK1nK32c51cyMPhJjhAMVV4VYzS8R814tvBbgsYh4QymvNeWQYdZFyKF1H5xcdJUB6ZHK8dhjfkWKP9Xbey",
  "key16": "3qVxTqQues1MJVq8onVyzUGCk5AKynfd1DwP51M32zMafVR5ydB8uchNf22unhSF5FvBntMeSskDnkS17yqjtnTr",
  "key17": "4uNpBnq7CfhnjYPmCCNHzw6D2XC9ZraXbhvD11wE7iMwLgmYEsQjqciR7gLaQhZXmG3CiWGFWZogVmwRY42f7R9Q",
  "key18": "5Uy3vXTjSL8WhNVs8FKPu6xi9U4hiPigWS8pK6bjfSU6rWTgi12hMYeAUBSZ4DumaRQLByCaD8HZoQnEBwdr5So2",
  "key19": "3eE3btF2nm2fZ61s5p9dr4u9QuSjJXw8sxcLU1KPaxroj2C7xKwCLbPqv6Nk79US8QH6U4bLKBoSDUgtcDMQYcKf",
  "key20": "3E36jFnyqpNwANggXsuX3pNVKvQHnLGf2EfgbNpnC3g4yVjbJ2rpopQc8fMUAseziWh4xEga6N7GpxpypPJp5nCm",
  "key21": "hqQvifzUXQer1cxMRDCKnbXVESx4knT1dT8eCNPrY9DuMcSwTbpPheMPLv4dmtPEeCpakByVEc8z9uZ6FtdLYsp",
  "key22": "3BJu53G3G7ivaV3xXJjsrsNMykCVsjB8foYTizLTXwS14VM2S9T1R1JjVqYx5HSqSdg7dwoB5j8e32cqvQjkb538",
  "key23": "4xqzpJYVGEHPSNk4MbUNfgC6oM12wUjUnHtKwaaYrbsTPEykFugPNKTE8mnBs5YugA9zVN3cG5vzyru8RY1xHke9",
  "key24": "3Jf54Lq4PXjVLSNE2khDK5wYaHzvedwE68LSdZ76kUygN1yeRGLxKu9RygjzMAC1F6CxjBMSBndouhyiEJhU8UU1",
  "key25": "2yeQ3zzMLMdV2Pk8aDRaAUjhKQqNvbAuveir32Ts2JeYrZa5J9kyiNTib7peNn56tZ8Cd3Niv6knhY5MsW5GJuVm",
  "key26": "2QMQeTAuRxMUwZvApHRwZB7hzc5JAN3v76V4uAvTtQXCsNFLZzekfNTEQmvLcMHPavBDESWMpKxebDC51LDtRXvi",
  "key27": "2kB1SDmdutob46T534f1EKbbdTr8yjhuyqGp1dxhykPRUYZVqgqz8m2qWxzbPTp32ytJ5wBzQDQoN8gFDrmtrL8p",
  "key28": "3AFJZKPsGfokFZ4N4kcuEgxpSU8Vd5gVYgDANfBqbbuKMoixjGmTCd3vTy3kR3PwjuibSDnEf8mX7YvxUjUA1guK",
  "key29": "4iyQhZGA3ePBmQ5h5vqZuqBD8tMV9DuFurC4k1JhpAJwPRpFp46gSS2hEJAYV42cQJ3ZLqmi5WhYAUpPA6X83FZM",
  "key30": "3DVWQH6savU4zLNQmKv2G1iqcCKzy6ahcm8bG9tYEByTkwi4TGkUBotT3a4xjSGGgfVhxqersQqd9JZVNxBi73Ay",
  "key31": "2fcQYSiz62gnyk9PS6cFYPEM91RFkj931xks1uVkwckTTtuXVcCRUxThv2pC5EwEngoHbSbBdLD23uHWo7Q7oh4W",
  "key32": "4qng1eJbjBoAKvMjWGJ9GNz1gGwx3zfy6t6oXnE1LWxg4eVCyV6P4aaHMsL4UZKaAeds4uNfjyWSkMj5ZXtWRhY1",
  "key33": "4pbQuty2WUxAnjF5EijkpZeKQQsArFAhhTwx8WUofRvt8Mi2kt1HGr4fZa8Dc7imsvgxQ1hdnynRxerRUneHZASU",
  "key34": "2cUjTSeQfRe4Yjb1F5ofaqFDd2B86iMizFeT7FN7F6FYbigS6J9h4dZF3VY2Ek9V4N4huuGt7TFeyR6z99Ez5y5b",
  "key35": "4zakhsYEZJDuQ7o2UXzWebuWeDk5TMsJ7fJhkanjzuRaprWVDsrEaFXULU6Dp1r1Mbcx2U5ABEgdmzRgHgsu5Dxx",
  "key36": "2cbJPZ9dEKf72gBRHz7QPH9YiH6yWnEZcyBwpBFBoiRTvzZhSS3KFBS5WXJBCPZrgmPJKyZJUKfYcLwHYcszmwfX",
  "key37": "2Jwx92UBDLrDUhoSn8ZQPAeCSm3qgfPtmYUCJXKXW6DqvJUpvpyNGMTvDFe1f1mLYzfXyNZYyiCPrUDmoowLgAxY",
  "key38": "4kDp6akx3ekXoM2nFsjnuPUNmDeTL7SdK5PGJWTP4GzM7qzL5gR4xcRXK26dH2hqdct8vRo6zLnV2sMmQv4oMjrB"
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
