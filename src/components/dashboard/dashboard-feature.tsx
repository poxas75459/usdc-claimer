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
    "39TrL3aBsWTBXCnGYopeLGsx8tDFReH9mzPbZsL9HygjmoxbYwaiwzRURCcSV8QcxNdGmiRHjchpeuyipCUnkx59"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jrfTa5XA2dkipdbsp3cFdY6fHv13VoC3xCEX6DN8qgd4vUxzps79SMjZZJCFi1JqbyisfsWu7UpKFnZ7eePdRfz",
  "key1": "4TsGJpbLD3mYRvxcCkBUh8dLqbTA6azqMJx4oHhNinaCNECh6yAHzFyVbL2qptydvu97vWLC4RZ9UQNee1HMkUhV",
  "key2": "3ksaGG6ipRP4LVdRfxeLyfgKfvFQSBui9d2udmwBiJN3dAQBCm1yeLoLRqwFugFEaMhFe63s8p96j4Fvn8FWQHy3",
  "key3": "5BYbfL2FieSGdoPSWWcyQ3x8nW9SLuioCyqmUcoiPVCsSaApiKpRtqcjrv6azsbEbd28reJmF9yEi6NdKcJ8kF7c",
  "key4": "5iMGoUH7ZGYw1dM3qLPAePyz3hShXRRKME53eMyGZtL1zbp3qzMKdYLNnCGjZxiEd5JoB8nhtws9zxQsA1HLHbEj",
  "key5": "A6ty7opKvWMTGhgtcpSUPbRdWnUEJHjq6equZaYYX67BZrfSxXC223JvsqaK4QsPbSPwR2RGAv8J7zrS6LDrJ9M",
  "key6": "2XgU2yuUXw7Rs2sh5QXmKDHZNNd2Kk6ybt5R3NXCZu391PAQTZUoPJauCVMzjuXBqTofAMw82RDLftX2ZNkS9cwg",
  "key7": "3HC1m3jhoyArkyJBy14XLkrkAHA9gEhiRdSmQ5dgtBkXVA7yMBFLmTcrq3iBZQMrnFsxWWmKwdpgUaywTYpM2ewS",
  "key8": "2fRinPcPfu3c2NPThZfKrP4QF3kC14EeKLdVeVUXvxjNqWLJAdy6sRdVZGsymVCzTjYBXTLsbWAE8y3nsTkUR9Gx",
  "key9": "pcXPsZuztuZQ1pDorGPHUy6crfFUq7SgpfX9JLvY1UonCPTr4Wz2ixQtCidAJJwcwU3srEvFGXxPn8u8oHQucYh",
  "key10": "3Ervs6TR7z62CS8Jt3dJDM4DdkxiMz11R6CGDm8EDDMs65jLhw28K7LXoEC5ARTo2S35MEdMuKNLLdKEa9ExoACE",
  "key11": "3nRELPsf1s5qAMQcFdQH1CzYxnC87xNhTMAFkhewZwM6SGUQBRcrpRFAzrc48SBtHdU84BiioppkNJUaogH2MC3v",
  "key12": "3oyi9eR427mWzo4RPBfRVj1mJ2jNJNFFf7N9uZUga2WoiPE1oFEKaS2ba34WvJ6ou2jrekk44SaDwkwAj1H97wTE",
  "key13": "4cdoQa5NLFtTTTNKrtrTcKyM1P5a8LDVbYWYRp48ws28wnJctCB5jWA3dTVZoSxmGqZWcbAL25oLRJAXesKBBgvw",
  "key14": "45APNn7WsJoAhK4rVeKC7PTgYaKm77jj8TS28fpVwGaY4JVYcZ83awYQZ3R3qxhQW1rG8jQu5qu9Fwt4Vpw2JpJf",
  "key15": "4Mu4tF42FwDp34ZF4Sgp8aWBkzscYBMEMAGBRE4iSNsfBxKoFVn4uvzRL4BuFouRLTzuor53E8CXHWq8waDH72MR",
  "key16": "3ogAczjPDHSi2Rpxn2jhaGkkorB91rWG5LEoiofpiCSAHBGewHnQR5TqHwJnncpLSqCdf6pQkec2S5wbKAyYKvGG",
  "key17": "iwarovE8CdDJus5ADephtV3GzYaPnh8adTviTg77DPxqxj49Zi1s6BJVDf127c3sxtSJdjbZKgUhisn3RLQenom",
  "key18": "oaE9KFdjKhKPgsh2n2MiS4qxZZbnTN7Y7MLmAtrnSoQV3WqnNupU5HwTq6DydqceCyN89Y5mGLkuBWoBFHjGUQw",
  "key19": "3oxc8bLgmUgdnFLA6ueC2wQtrbR4zBq9mRU25AmXD7aD2eBzd5sy5wuT4TRjTAb857gHSRdKahRHTQDmNb2JcTzx",
  "key20": "3a8zjDbVVu8QK1qhUK4BWxyZRUEfNKZnyMzVDvpFSULUZUEL3qVxFRrUpbuidEsM8nWqdtQ3stZxY9stQEAVpfCd",
  "key21": "4uyfd1RHMe7aP1hWkqNUBQN6ZjWSEBVQgQyXSXaghYay8CYtG5fq339sJaTdfeLnwTP5yoGga5gh6idmvxouQGSy",
  "key22": "tKmkGx8EWyuRowu2G4uYkrZJ8qk38XGztm8bX4JZ5etwg451iP8KXoHWRBmQDZb7VQDu3W8tLNDXMqnjEzcLdVS",
  "key23": "2WVazb3b8RBEjcQsDW2hVMnfh6QeAGwPs8qG1sdXEHhQHbAQxV9GihRvf2VQEHpAZ11EEkgL9A1cCFkfywrAzoks",
  "key24": "FNHFxyieUjdKXahAGiW2QRbdQ18SsXTXKECCCrcKd3ZggorEXh87qK2tmC9K1sQJQQSWAh2HGee5qrH8LQuoAxA",
  "key25": "62t7q6K79aUWuyd9wgbNaKnnAUtX6hMjqzXPFoUhdJzKsZzSd9YKL8g4522s7jKVUmS3XabmBUq6KpXDHfDYccTw",
  "key26": "xu6DfmhErbj4o4TS3Kbhrt1797Kr5ETzNEonEZ7YsLUEosjR7n5TL9HBe61dYfmbGLwpFzJ5uTjboNdPXzcbFxj",
  "key27": "A9nBJwZS8cw85fiiDmTN7qXNBSXFsg6NEtsrtsvx1qduoDY4h1Fmw6qoCuyatPFJyuzv9AVX4RFhR5HWbFeSCQm",
  "key28": "4caijNx3HqkR8EhgDC2A5oLTWXeUNZNEgLotn3nTT27Md7SW8r9NBk97aDk5bbzYRwG63MRNV3E5JFo9sxNAz7g5",
  "key29": "2ToEqXofzQ9PHwvuRonCcvkouo6KZbohpq1XF7bp4Z7gQDcSs657Em2Sc7R4ZAXCYZfcdqgAdMzmQaTHW5Q25Mkf",
  "key30": "21w7qewPepDFybaVebo7w1oZh1t4JwdnWsMzKG7LchXhfx2heDToPrPis7DLsV128qS53ZW9bbFWoYb1qbdFzp1S",
  "key31": "2B2uMW1KNjsQwnnkg8TrU6HPmrBZh6YHeXfbATXm5bhXJtt1SGnCMaAEctNzCWFLomqkHCUCFmJ8waJGg154kJLe",
  "key32": "5XMqN6SFngERgvaTbXskrqPm6FmCRvtioAu4QgWfFD6tQwhDeVRysUTxfRGPacp21SmuB6TYJQqEUPToaNfN4vx1",
  "key33": "4sJAR3MnmZqbrjk6wBZMNk44DVQjYQTfRd1wPF8ahiAR31twN7bbVa2Ce9eT1UZ2DmqmMHhXwn8P2G6nhe3gn4Uw",
  "key34": "3ozcjonPE7cmnUmCHPVvJmPC9kbrjsW2sMK43uheNtBb6FN8cSSq3rAfPXnX9FBcCe2JQTiZDYvz6s7Q1HV3CCnB"
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
