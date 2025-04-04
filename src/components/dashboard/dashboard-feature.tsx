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
    "xFQeKxZwmMuRiZMVMfN3D3xjVn5SSTbeDv3SLNDtTvuxM8P5qsDoVhjStYoSZp6Tiu4z4mZxApFk7g3G8Pgcjxs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cMfoNvgo5AGV78xF8yUgy8e1SbV3fEGdPu9yWTESZrPFxA26kgcn5yTZZkeABF2Gv4TQKTjEuxX9xmyDrHyNtCs",
  "key1": "63VW3rv7DVnut1XVvKSAm4DfPsyNYGdERXatWHzoRbWREngJJDeVyzVSaur1U8gA4QruUKkGTA9i5GpcJoo8LAie",
  "key2": "2Z9ivtXvsoYUq5bFpAnK1mwS6byyX1rUXpXahacYiuAR5h9w5KNMoF5tr99zG8kHDDuAXBmss2xAEcBQnUg7Lx3x",
  "key3": "4Gn8jvj2LkaK6ecHDcNZXjnt918PSNiCot6tDL5mqG5PfngCL2pCaAv1N1BdKa6sjHRzM1Z2qRvodK1JypB4Wvbv",
  "key4": "4aGi4TDvytNZ4r9Km4MxXRndEWLLiPC9yiKs4b5suiPkUJS3gjfAmkAhNecnW5TfqBUEaRAzH4gzFC3YwaW9Qez9",
  "key5": "mWsfhiDvH5DXevykbC5Fey7z5pMUV6wEQCDV49codU1YidQnG6oiHMN3yvwTV4z2fghpeEmpPaGczf3kPvzjX96",
  "key6": "46qQX1UYGFkCfXAApddgigyXuazdoMAdtpmj5m1xM2SN4YMygY5SUXFXWNerUTjVYtsFpfK6WbkGwZRiho96wHSn",
  "key7": "2KTK2kBW2gk6YnGQYLyJKVix1q1fDDALGh279RS2HdVgJgdjFusBRdMWjz71gAnQFFYt4HMDEbB711w99bMuJLM4",
  "key8": "27pHqyfVr1KFWE2p5frtM9V1zrtdmdBwgmkCjMrco86CVF6Dt6D3pu5qf6KVLDHXBmB6mDVQTccwyxtmqjihzxaQ",
  "key9": "DWY1bpwhBwoRRpGxZJ49tp41fErzp8dQkBzD6ZbmxrnK9sCkkqYqz9p9Vd53wToeJKg7YsdSRVgPqkkrt221w1Y",
  "key10": "5bWrNf7EGLCh71RU16q8UL6C9B2DQvvr3g4157nJfc6YCpw8s2gnULF1jCnGuh7EX7yWoZDbcfhjFCPnaTBKXtrz",
  "key11": "316Pb5vwLu9Wshq6zRbZvpFCAyj9xsgV7ejiZf89j12FvwfM8Ydy8R8CRZD2xqS1G6dvU2hzF7JywDoFpXJsgf7u",
  "key12": "57qgyEWRE7YCwoK4XRUzkMwEqtofwMjoDmD7EccGmnwXAURiF3k9GiCDKPJgqA9jb7UDyqk5H41BwBRrqUYj3WdU",
  "key13": "8TaejW1JXpDyADtAGG7fMBqSFJPi9WQ9TV6kBUVXvs6GsuBRm4vMFRAFGtXcomA1TLxLf7KZNRnDPtU8v8bcuVc",
  "key14": "5nhV7bLQqU3UUGyXpdPj6hJuzeVMjSwproGwRXiGVPqkbhN67o2KN44ZBDSu8xhdyM1CT868CCygo7VAKkYVCwoo",
  "key15": "3am4VvPp73Bim8vTpFrUhGtp5LfdVyu4pNPinJCWL3mzWVG8MdVWYiMSeDeWrNj5pvfY5wLykcbrgnqBKf97sZtu",
  "key16": "5zbhn79w9P8cELKJm8WC7gtTHAgAhdYgAioT47LZyvA1Tyi6WTrBEseHX47kV2szc6uWcofZBaPBqFktcToYM2gD",
  "key17": "4kr5MW6HKnTf3Gw68yMijenMFhYZ9FsrCzVDa6DX6hgjTiwb124MNNV2xrVH21iuZeW6R9ZpmEitTnHCviJ3b2oC",
  "key18": "3NPRRBt96z5dxbjg7sJiSUZx63YrMaRrSW4h6WitaVk9btY7wbrXPKHqxJEz8GSBNAJZuM9tnAS2REExEjYHVRMk",
  "key19": "3FuyLTNEpVdM4qFhnSkFtdTt3XSDHx3QWSMUoA7Nep4Bi1pYwHsApeGGLLuGvM8ecbnoHJuPghcgqLavorfJSWpy",
  "key20": "3sBE97G3vDhHpuomgom7zWyQzcEq99xVTpdBN12AqA4eczxt42eosUtCCC1cSkXy5gTNUnc6Zo3KQ8J299kpXKqy",
  "key21": "2YwTSWcAuZXDwLvmwMe4j4DawiWngU4LHg3bCTLGGR7Kiwqj882iH5mb3ygVLvp9W7FJgsz6NuSuUqTDFtxDFZDe",
  "key22": "4YC8XZDFs2uj72vF5NJX4eGMVAsjonHVFPYSw5Z7M5E6apxyYRMvc6uXuu1P94jgMDEHhSiiWzB45wEKEdcuyeZM",
  "key23": "mgUnidgoL7AKmEUj7a7kipdcB1PriR3ns7zFR8wZZEezvpZXf2nCBDJRecXGTEr15itn6RkxaJbpHHq2uXu5ZyZ",
  "key24": "5BrpQyRkSewQAGGqwSPfzNinfHfMXtMmb4RdFxaf4321bRmCxE7EvyRxBreve1oYg4k3s4KH5Q1VGEh9R2zY6tAJ",
  "key25": "2PNJniqntMfWYotdmEjXX3sBkK1qmHRZwyzrsYS2GkqiHKWwwVNsvSy1tAxvc3geTMtAsuj9ytXjY9rvT1foLr65",
  "key26": "5Fbb55ijHXHtky4ZLfCw7sFtuQsdtNwngbS7uEm7iFqhjQHw9d3HerfDuLGsNus4LL38vCsujkU4erUmQPTxNP7V",
  "key27": "3XUWnaiuktp5YGGdQjHdECriSbLr2TBSWWZuyNydJ7ivLtqi6iG4ZgjYY7AW7cNtaAKpx8SaaCRRfSMtAmqvQfgd",
  "key28": "5TGYpfFccpQrUV5VhGw1ER8yxwtXREptCyVLWEbrcWQiE6nCh57wVQX9aWKD9eBWAUQ54Kp8DZvAMfc1zXBKkmtn",
  "key29": "5h4RFtz85pDBBbkDFwMCncVVjoUwYFKsHed5wRMGMtRSiLF8SKxkmDVKebozgHAqDSSZQUjztSwpumvYtLPMQGoc",
  "key30": "5AV3RVcfEimyAFXMuSs7dgXQPvw9Rie3YQuBaTSEkT5VfMYU3M11Hno8dFc52EupSzEWw1j7fC5f7LuWvdtXvkmP",
  "key31": "2F4Pu5AdNghQWyZkRbXWCW5LCcugNeVHDLHiiimNwAg8Fq3hXFN6g7LToWYHALPDeK6sLpJ9jgVZFgBTda5Hcwy5",
  "key32": "5jwvfnZAgvgZQP7wbsdtnaKM893peBckGce3MBDbXjiv7jnmRhKYhhtujNJfj9ERpnkHJzTqbyS4z3zcfEbP4xWG"
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
