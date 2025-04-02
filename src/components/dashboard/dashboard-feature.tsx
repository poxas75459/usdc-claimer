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
    "4r44TDoUYqQfrF6f44RALrGAnqJZiCZBuJLMDR8CdE6iV4nY8zqARAtLedCfYTAwbNtgREcNkeEeqmugnLxnKyaV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bPcF9wCvp4XfMU6rbWnRQ6N1D312S5GdDSTfTeb4LdNRDufXqvtgeTcTckjzxrum7VpuX2VPw9ozwar7pSPrGBZ",
  "key1": "AeezBKbS2AKWvUWgmT29mfMPg8VLUUM4DMLr1bWR5novNPEYbZHyuXwPKqwYUsu1PRXJgvyQXXT8w8gjSitM7XC",
  "key2": "67UEHfhwCXjifwsabvPBgo3buQdeULzSpSJbrfeZDcBqXdJ72MCmdKbwU7JXwEhbSUg7t6rjRDSfTKiQ8t1L4R74",
  "key3": "vGYR6jmv4yXoqD7yFkQQyge9gQsXUkJWXDdFmcGfDiL2tBE7UrfMdxYPPH79nhnebLZ26TyV41DoLqRa3cYUGKu",
  "key4": "5u6JNhRQRufcVgGDTFYe5v8f9wuDAApowD9QsSZ4Wc6FKavyqDqVpZfY9UUMtVEeM9RgK1hJr95meCVsJ68zrQa7",
  "key5": "4K94KVJpfEfKZVCF8cqVKLLAPuUqRLfKd1mLqnZa4owon8k8QFGFq4CY465Hqo157euLrKdG4ScEzKiBjdr997ZU",
  "key6": "mp7K3nHzHkei2D8vRcq8ESDesWvVQoGnDc72UkeRxpHfBfiYwBMtSGsZPWQNyhuKhWLyntdE8V6rLVfrCafNRWt",
  "key7": "4NM4H7s2LQQfxu7bSLVcowcGwMLsTZAQuRcCGcR9rC17nepRABkynUczzJrTnSCsvWqVmee9r7phPgnuPEzJ9459",
  "key8": "41zdShGvLBELQKf32P8vbnuhuT2wRTwPi1e4RzydSsazeTW7NvkKCEMhwYQFyHVxe4JDTfxZM5wYs3Gkp4FyemdM",
  "key9": "2cnjAK8eQBxbywyJ4WBxyudcdQn8H2VEJis2r6utAu6JSQkP2f2N7fBJJVSqn5TNnk4YmkJ9x9PEHJ6Dy4tysJxk",
  "key10": "5zfSdFUt6JPL7sKfv241rxjTEK2R8bY72BnN83sx3ffeiTDyezLYeyaqW27JLe7MmDJoHLDUAQnFTQaprqaGPzSP",
  "key11": "26bECVQJ22QyNyoE6vgMAoMF2viibGsi35SLyAzEv41QyDKHEd9ZrDEfUjaUkKA4G9XdZTKDhdBSiAgyyRFCiD3M",
  "key12": "YX3bTw9qaL1KAiJAiMZJLksMq5JFmoMN7ixXsbERecnED9LhPYWuXFN3E6fQTLTLDF6bpoPYcPYGz5xM7zKqxPw",
  "key13": "8wfj7YW13gH7fUc2iRwSNbJxUjaqKTY6qGhyzTVrSNCAnjK5BeWGFe2DrhCrbrbqQSdFEymBmaiMMyckUkKT5Fa",
  "key14": "2NbzTWPu25HRKWc33nbB4bVVtiFFVF6Bitx6ETmQzP8CjY5VckUz26o6iGP33w731h1LrPYLRwcZDFFjhGkt82DS",
  "key15": "66pGg54SHpys6YdRrVpyexi7us6mRbmrzSCZhVsXjq8okuGDNFvukLbxyANn5JgNVU1Gs5fcUNfKc9uHTwVhGa3b",
  "key16": "3stGfACGVWJKJZnkn5deNMm8tKJwonK8bQHyfmoz6xWN3QTVmaZdH6CsTWoxLwtMLWTGJZbvWoWLFYwKKFpB5t4H",
  "key17": "4shj1LsFy7YHyV2B3qggSdxmLqEyizTCH1QYV69V5BBzPJGuWEs2Wq1ZaVhxFyiazENY1QMhB45zf2x78EHBVvzG",
  "key18": "2iZVf6NQagGFHroiJxYH5eZmGSGATZn4VEzDuZGYHvsfNzU3cxK9cbnJPG9UBAkmdUUfj3swVDHUPSVWRqPod8Q8",
  "key19": "447bAtphZ511zy7vd5hDbxe58JA8gFLfYhGCdXtc8xBWnV2YQeATD4sLV76sfAyr5Ct6XpenxLSExpv4xYjnF3M2",
  "key20": "59mbHTfprJBvMqqJ9iU7qU997dRx7hVSvFzswo2uXJHmLS5CG5B2uJS913TxrW2DaUx74WARYKJQBi4vGEnC3PAs",
  "key21": "2C3x3Tf5ZndxnbjyJNYnoKbSVZV2mTEFg9RvSro5DBLxHi7gpjJoqh3xqG1spHrD8woCVyHvBH5C2HxCXgJuy393",
  "key22": "2Z4fX9Hg2wLMteWChRsJW35geb33jbeZSQGFN1ijo2Q9ikyVzbhs41xiXRbu2WvjmR11D31vxzWyLTonah29cDGo",
  "key23": "2HhPS2zf4LW5MUEMnrbGx54r23y3xp96oRMSmbNzRLyukhMV9XXCtJkPnoHTp8ZG5YGprkci8iW7k7kXN9foG6y2",
  "key24": "2xJCbDgQUC7djsgHCWYNhhzXoBYtQ7ffB4UiwzXHgvzaePNiEXpUuJmiD4kyrxz8qa8kkjU2eciKyjwDjxyxcmUF",
  "key25": "2vgfRZpcpFS1tovJyXbtmBRKdkwxyiEwCAyfs2UwCjW1WmoyQwmMjyqdPdsbA4BqdQgdFU3ypYontXNzAcbdFQCK",
  "key26": "47f1XbVhRGLPvYk5Y1cFoKmYcJ8XXCusSBEEn1tycM1rVwKjyFHSG9ytWHnWQcRm2UyHE8HTtGSRc3EArFoTGxB",
  "key27": "2Unw8taQyMTJv1sqt6GXV4Fz3uD3gcz5o4jtYfYj5rGoQzj49C3yBjE4YTEKJyBcBorEDoNze2WMAC7qSe6wVndP",
  "key28": "u4KyCGHgy9DkkYQH1tEdJr66EwS4BtJoosTN5eUFq9itqsjWGSLMjYScxXxn4aobb8mtD1Dxf1Y6zjR5nyY3sku",
  "key29": "2va6Tocod8ob8zug8XdhMzuoHmKhzD3C8tD8K4aFUdUmyvRn1oLT32XX2iKgD8E9LGz8W4aUT9cVGy1Y3cYjsLp1",
  "key30": "2tVQUz39yqJBVWf2q2v6ZMqBheBwdDg9Syg3z1drMHGt1ZZ8q1KgE7JVDusNwWVvRPUukJHBgyE8vXVX5hcCAb5A",
  "key31": "4zq6hjUBZqsvpB8kdh2hwT5niTdiNzpxp9jnoJk7FGwxi5NfmSUZSFaxuAgXrVyNuocgAQUSQ855ZxyA7GXarNiY",
  "key32": "3BgWcM696sJn537jigq3RXDc5VpkVtiZeenmb9BL726Eek5xi4hQe3FbyJooX7GJ6x3ubww21Gn4rgM785cjT9DN",
  "key33": "XZ2aBgHHaaxNi59UuTRH6X9qeNtuDnTtHqsBoWWpK8BW3VV3QFCXiBwfnh7U6APpCmBtjL7Zyy99ikidKMYCkzC",
  "key34": "3vwd9BCXk1EeJuq6t6XqzmNURwupmKRJ4Uuptne1nZfW5fC8uMEtLTcABaqYJXahXGm6KLxDa84rB1sg7r89Zcod",
  "key35": "MjYzK4J7mRFasaMbvuXfH195UPde1oSzWXJSqSCLc4DpBsgvAwCu4b7T2pSC26VAPZcQWvtmq87VUytNxKbascE",
  "key36": "nsLKrXZF3FxFMBxEoSvMaRiBPBxYCf2EnhzE1au1rKDcuYvrAUvDtFvfjECKDEiLtjLTguoxtwVs8VCMaiKMtVL",
  "key37": "2GB3EG2LaxXNjLGA8ic3Gy4a9MzWcbNXaEN62CzVeVyRGRsKeL1yc6uGXXcon5PyQULCpwv4ARvvRNMSegfwrexk"
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
