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
    "3tq65a2hBMHW4srMC8Sn3wuorTxaUXdLYZLyUGLDBXPG4g32sUnigrYWYXrX8zNi69BwKnN6wKafyDube5MJj5yi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UkKPYMXWt9eCgN4HMVZFnh4XcvMhioRNFpNyGezEpe3z3wMx5svzK7XqHQZnBZ3J1PKXM23YpThVruBeZrgtKDd",
  "key1": "49PeMaEckLx17JHxFXvboRxXHA8p3nMUhGnjyiRHBJ22G7AYLn7gJeWn3eGrWSSkzmv4TRVbzTnmrEU8BwHkHc3U",
  "key2": "5uneREq2AWT61mzUoxM5XSXwh76kbd6gqMCpNar327hoqiuPpAdjpMvtdD2BwPRbFefKphMcnaY6GvWDbwkjtHja",
  "key3": "rg3zJPazeFsEb4uNXurhzATXHpXNi9aZ2oBEHmF4c5772RA6TC7rQCjm671ToGf673pCHintTZTwYSiwrD1vh7n",
  "key4": "3Ak46jC9YREKeZSLMuBQjMNoezj4duNrsSCPyrst3dLgyjrtc2DJa9F6CwtPPXQfbCDPYxjEem8fU5aTf4C4XnUL",
  "key5": "5SmXJSiz4GXhDPsf64mjSQka8wqPs5PP82P5FLcfxG4XtpR2owxBMf3qz9Ubo89RtHPCKQ4ABEX4do4xJoE5mpsc",
  "key6": "5A7bXbwnEEH4PzVEkhke4Ng9Mgs2akxEt1ySJnsG4BMxgGNB81FdpkfRu1yjUz3wDDvN6gY5sa6AEtYJMETCYRSk",
  "key7": "4z1cJSbkM5SW1KsNJcngGTFCSZFAo6ZkE7De27AhvQZeZhn4BYJmgk5EJC14NbkPSEPWyoU5EBF7agDX6BJCGhdY",
  "key8": "3c5pj3g5o5NtYQCmL1UkHud6Lk7pfHJj9HsAgGtD64zwaDMBRZ6gkfFTE1fEXk8Vpx5kDEEqsJ7hJzUMukB3ZF5k",
  "key9": "2ou61qfdCSg74HwxbeAPFCGmwuouh46oXRQKjhhoj9KeHwNdfEbgnZ8MKocajWoaLKnFaEmRKR9mjAamiM2SGZSr",
  "key10": "JLLXWpSsBdEAmEEpxRu5eWw9ezruKK3Mh3yx4E595MTXSnz5X5oeZBwCxeBJLkeWA25WW94nu6x27C9rvGSqevW",
  "key11": "5u1K5AzoPyNnb34mM3Bkt9AWKPuJnMB6tpW6UhyAFBJKPigHAJWBgC4KedU2ocyTMfRUg2uM6sBLyyzoGPYMaht7",
  "key12": "6Mrr2XxFWwxhC8Fi6SUMJNt9iLnzVSaFyaBwKWa8EuLHLZgjzVgVzpJXJ8XzdxM6ZEAarzBPF5zahK19ZJCMNt5",
  "key13": "2bXyUPW91gzctzgUzm68Zt3e4ckMVpeTm6B5jV5w3M1brQxL1J1J5Qt5xNeS1xxA3uY6k6wXKF1D44ZqZqosc82d",
  "key14": "5FNy9TLoPAvCKwC43ebvusapKmsz6avkpfEciXGHJcah91UG7ZY6NvgN8mTvxTEPyWMiLqTAva8iknYwiZXmPpEA",
  "key15": "5PQgwVGkz7ZaBSthmMvPpq3eTeFuYFL4P2SaWEA2zkwLaLAFnRDUCGZqyeBPmPYjBrHQZ8iJgzCHG26LWkDP8Z4d",
  "key16": "54rVtyDpnnSiiE9bDZF9Gtc7VTMpBG51UTtcrBe1w1sofyCfFvwJ6hVWmwBdwqU3RgxjgDDAmCCmVPrBv8UpCY9P",
  "key17": "5KzWXT5K1LTV4N7NDW543vdrGoekpF9QJisewx3rWDzbrg4wqeANssJdhwU2qhWHtY4NLMVptW2rXwVxzAezcEP1",
  "key18": "3YQyCVJWVp1kb9TADEyw6tCW8Jx4eytiKzr48s6qQb1k52wNKgDT7VjR2yjZWcFD8i7S7SgAS4iYbcq4swJz4RDZ",
  "key19": "tJHG8HTjr6RTN6w1p16agchwrLdzVtHMyQqN7EhXdzL2ZUmMudNDLkDZkzCSRsitCMfFsditiAHrjM2hAj2EQHo",
  "key20": "DWCbdYZGzkRZ7ZXayEYwSq3xt5FE1y9srz4h5nDSyAU7uir8wMVoYCRLsTAcf15HAEEEnAnsqfdTxyYwMGAQrUE",
  "key21": "2Q3tUEjyyteJRPYb7BgU9wa9yeCBdTQXjWHqnExZ6BxJ3K7ChtVfGcoJ15yjNfH9Zd5QqqLNNdV14PbyLYY2Mpbp",
  "key22": "4KwEAQRL65XS7r3UVG4b2h13MkvLgTp3RdXKPCUrNa4U6Mc9Q2jhFVeDKVrApAXAtjeCkJWZvQQK1hG6M4cvvJ8b",
  "key23": "AqFaF8YaLVTdguhYVqrDsmoBg1cts6W6ZVBRVf6Jn6ZehKxgNih9bpbBHwiDjWabEYv3JiJLVkMNep5CuMKS6Gg",
  "key24": "4knEbgiqSid1Ubzgos76TG9BG3zFrV8TLY4h5LrpfgeJ9XdaZrX9E5SGhcsxA6vVZxPrZWv5HBED4CsxcCm12CsK",
  "key25": "4AyyZGHXhUAMKbhcxM6KyDFQ4WKRixvYZavVxaaUUSr1igdt2MseneRPJ5RJ6ZV5jp1Tg4Euwumse3y2rw1i6NTn",
  "key26": "5tQBpewutzzPQ31SEpQrbUBk344i1uQCzeJjSqAdPJ3jLPoZVfN43A3UemjQo8wpPggQFEWGhKspsQyxZyRqY5GP",
  "key27": "2YmqXYyWq2rw26VSA455Mg7CaN7iGP1ui2Twb4vUAxqu4du4YqetLsswXddkfPCFbfErNpME8r5RBmoV7oytRxdc",
  "key28": "7KuaU8kMdBRBpNq1REhupbBCgeHMXkzbYScTCr4NX7utzXgn4YkNw1rJHP7CMdTKCurnHfgAdrzFxxrbAmKRTph",
  "key29": "Lqjpdy18sSxsXzfLXXtVHvJZ9g5ScTTiD3BZwCJ1mbt832yN58byoRw2nBAxhnvP7S2w8UxDtwZJ6mbFYwehr5y",
  "key30": "5unDvKjNtYTDAR2bzxGazfg7V2UPEPcD4ixqyC6vT6eqLTFW1u2tDvsh19tsVxbFKByKi3nte7pZPLKPQq9MJJm6",
  "key31": "4v27p8G41Ki99ubkjbo2erqBvTcTt4oMHHZ5R2FJYnjhf2XvbrGhnP9GV1bbCmGjRsXotxjvRyi23azcFMgW4c7y",
  "key32": "52qRsedVQkKCR5eCdAzAHQCpi7KH7rXZz66scLpM9NjGmbMasqfiVh9sf6CcuZgrBh63gLfbLQuAw4HrpYDyWxd4",
  "key33": "4SgPh2UrW1PPHLi7qxP9h23A2Hp94646vPnGhJjybbLGgeLUKzaC3Era6RB5dr8UkifNksGvF14MH5HBcZWsCTfW"
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
