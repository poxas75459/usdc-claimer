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
    "3ZE5XmapR5Woaws9gQRiRPPgZxz3wGDZG4naqFai1SMhKfK5zwtyFfyTBpPNXmT4tFma6VzXw9HtRs92YkP7KiXq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FPQ2tZ3E4z1ZmvBmzE7Eucj3VVxFnqSFFwLFZgQJnocUz3TyPi1aw712ge6Vd4cDiiyzTtmxmXKZJjLowRwmipx",
  "key1": "2Lga6Rn6FhH6mWVuPLxEJAUKNANRGNRgqhRkcQgph9dtqGxNd8VaeHFmKdF9AEAHVmkqXPiCuvWGC5CZUNCqMCSq",
  "key2": "TQZGJ42bWFwzwV21EFgxm8QZYtBiC3TAgpePxo7ADNxGC8gTHthSwxW7AESsnNgpvMVpUZWZxsbW24DyirvBwKM",
  "key3": "4wnqdUzfyQDhXfQUqSv4hRa3eVMvQuEz84kRFfxVnfUxjtStRN6onFJ1stKpYqRre7twsjYcE5qN2cuzHNAMNfvp",
  "key4": "5Ye1UUUHAhbe6k52NxQuAmQPFpvZ5t36Dxuk7VrGxQ2GWBVfyRmpmbshj9v242KrEDck41Y5VH3wkxPd57jMkYKL",
  "key5": "2YLMgRcSz92iRV3DforCbDpZqAUvuekFRo5oPA93VzuFB3Km8EarAFzf6J5jFG1pdSrwAY2tDpNPPqTKN2uj1kLG",
  "key6": "8Yg1T42i3H4J3iVeGkCRcBtwS2wXsgHD7xw3T3yRUBBexkQitAe8U5JzJuNzVkh8SWN5bmm53z5xpbFar6jJjRA",
  "key7": "2nQYiZYDZT2Nt72ryPJV1PLhY9YZ5qSPgdax6TKm9XakBHAPkBMjDGiy6ULvRf2XfWEq6YhumVw64w931TL2TQFV",
  "key8": "47GnJYKUaCA7vHyadoohCoH17Sp2dvNEfSVqgkjZLwev6vVsDPzzUptcFHJtZeUFVq4JMv613GUkxVfBDGCFxkau",
  "key9": "4FHaLh1DoCBQQHUbq7vCvZYaSwZPJtdyaBFQXXBmRtnJ89qrhvdjcoiKqwWbCuZAsCU2y8EZjsi8dZwS896aCfux",
  "key10": "2YwmsoDtgbVrXovNfP9PzxYbKAmKxsYa2tE2GNcQwhbAxsUFAB9zECbt54jQkS81RTuaGWNSwtorH9EvV6dgQ857",
  "key11": "3GoawBtjnyL2EaXa1GVRpZfantMNSfNwRbxpJTXRaCSaJL75PUfoaD8sLAFNFw8TmVfa2uoTHM21xeaSMa4Kt4ch",
  "key12": "3R8FacP8Ly1soYtCUtpnfXFBhJCqvYr1ikQUmoKdCs5MBpeTUH3xGZeTU2Mx2NnHBP652ZvZre7KhiSJyh9p7n3r",
  "key13": "218zXop5N6d6YobkbRdNjRdRm1Rin2t3vFW3N3kr9U6mUSPPpUyhTMBpd8uDWexb8TnwkHfxcunLMTRDD1SU5MmB",
  "key14": "3wuVWrtGSgYXeQECNmjiF7x7RwG1LCBYaaeUdWBfBKcyWx9E6Eu35YsVQfQwncNCd2QKNoYof6Qft5Zwc2UPEtoH",
  "key15": "5ofoshVmRP3fKQmMif26CgfYFi7eoZveVJcqqfDbZ4eHtwXXDQGkBXZmzjNTML4hUpSMJN4UL4mrvrE7GkVzNKKE",
  "key16": "7hhWFu1XN8fAgh1HCTDdsNEukRddCVQzyTrx8ZU7wZRUE4J9rS5cp75WxqHRGUYH1Ykr2G77ux4JVLXWcvFBebS",
  "key17": "61mHswiRhTNMqasazFveiZ5njjZ1UmfkafpieCMEdAafc96PYQ59qkCRxMkb3F93uwQw4jHC37NvR8ucSbA5UrUr",
  "key18": "dmtSXjaAdgBdaprpSVdB9UHMCUKr9Ut39J8j3XR9VhJnnvzMfGTLmtZKDadVZNdiAXQvxVLToAz42SQrA1Utor1",
  "key19": "t8CFoLS238PSkT6JXmhLjDpa6Ps6Jxjs3iVwDofBGWt6L7B9Urb8PpPUXv4C6S7gQVgau3F1vyqtCUkwfPSXQfj",
  "key20": "3MyTrb2whJkKuYasuEv9cmg5ARCrwCwpX9XBzwS2pBT8TwXa3V46qABXmv1Apa7DrxkRymDAgmrFVxHrGGaAHKqV",
  "key21": "2MPmPukPrJ4VMmEoTyxHowfFTNTKd5UwKLXYabaxFRDactLdRbxgMdChimVtYkgeQGmAaT54E6ymBatm2dhdodT9",
  "key22": "5yGmfeQU3YWAWtoCcKgrdx63Pf73NmNufF3YWksueCe3Nkt58FVRULu6UxhjUqFTk6sjK8sgQmTwSvkkSa2jFRX1",
  "key23": "3HX7CLDW1Ez591AdvAK2CtANubRjVTVknNN3Xq6cvV8KckxtabFYv6VYYfNN1BfgF56mXgagJ7kjCdvLuFNUKzUi",
  "key24": "2psXVKuwNXDdLxqswwxjYsnQMoJmqvsLXVQ1NidxQ269tktiLyyxymW6w8HgCxCAMmC5KjwQGeEARpPp5T3zz6ut",
  "key25": "2dpckcKfssrcW6P5HhEAaR5tEEBVSR7Macy9NSN1rbRBJeKr8C5yrBiJ52CThMeJRn9AWF7qFnUHRswW5WLXzGDi",
  "key26": "3MAx2XSKCC7VayT91aCyFWrBrKoAz8dAdq2uQiWZSoBMHmjqJXpuR85gXs9fGzJG6Zr4o8k7aygXgorBQMfB39o6",
  "key27": "2VeroANg2ZekBh96fWaDp8kRiyqwqLphttekP3sYsDVEkSsPB1nXtpBPx22ra4pSfJeJ7Rx3kAzTy7bpBHahEH5y",
  "key28": "4ch3C8rPtoKJdp71kymNWuYfer35Qvho1abgW4zdXdVJk1LdUrWhcaMyj8p6LKYf2DCTxeKFKZYMGsV3Dqzeg9xh",
  "key29": "uQqDhg9uEm1mkii1ufRMC9Nszf2B27EWDXtotCnFfTmcfwUwz28dMKRaZJhQ93C5jXHkhLwCrWxgyTKmBW7y4iY",
  "key30": "5fGkipWE7BUumWLhNcmyPuNpxYqRUWbBCm9R4mAD4zqDUuPL6VAaBsgsWHPpB2mmw1bktBSXcSZcmDX3Vyd9uogf",
  "key31": "2wsVcJvQVc6oKGXpz9g4EChLkMg2eULZUC7wLjEaHkxZrEH8GFCRwDF8KhZvgZs75mGh56xbvRnQjJTCBqU3qLyM",
  "key32": "2p3K2whUtbF4gVNdezjn5kKvuJJtzf7VKobiNHnyMD19ykJRoTmbeswkuJhpS8QvM1Mef8LCXwzF1n3Fj9qPNE28",
  "key33": "4rQUvQAqQgDwdx6CeUQBP9omugSRkhTHZBgMbkboU4JKX19xfM2FTBQ5YZDmTvvZRsZdA1bJrCKPCDcQEc4Dc9L4",
  "key34": "4kqWAiahG7EWes6JbXHvewH8FbixC8yinYcabR3e59C22jKSztpFE8cbgncxjdQ4p8AHgCNEMbsKLkbhUespkgU6",
  "key35": "4NifLKZBa6xV9KLEaELMeTh5Zb5u6pL7rfHhkmHpv79jGbMVGpyCksQEPKdBncUgHhWoLCG6YiYnUtqBnHVHc3j1",
  "key36": "27jeZqah9D58Qyc71ZHuTwW38NwqvkUxpNC9SAzeukMQmrqqshrKaEBu42ZV3yqErK1sq6cnX72mHfw9WxFK5hxQ",
  "key37": "5hsbAwGWS7Pk7H7oeYMECB3v55ZHcXWrrAF39q6LZYDm9kw7Ej1otDNqtRKD2b3YQrZBimTkLg5i3ekSdbvFA8kq"
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
