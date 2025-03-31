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
    "xpi4NxVZDW3ZezgposSmfDkbbVdD32t1V75Ko1AsdoiiowKMUFsae885upneJ2XFcTS1uSooWT2M52p9DkuXoca"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qc6JAYE9wx11zSZzyykHsar6UYgWoC2yFSsysbS3HzD6ZNMqTRTY8WEhNsVyrR84PGpkkifmUWJyMRrs7KhWMbY",
  "key1": "447Sz17TjihsgnaP84Wi5e2nLdDp1XrqSRTXdUMPs6GamVMjKoXVPLPNvgJ7APWA1zGBVycmMiSg21sBt8uQVZFR",
  "key2": "JePDzbuWs5cjD8A16LYQSJqsFbxqdUhASxfC6Ew6gQ77GmEiPkHXfSsJJswF9a7wD2ZqbMDMb29q5drVseVEWgX",
  "key3": "3j6BjXGgdatgCfJZ24uMod6yPHwJtbjbDRBconfzcNX4j2oHoZQohDFDW7y4nitiyRvmgbE1GBgNJDg3V5XhXrRo",
  "key4": "5qzE4NMCoWUniuiXi5M8wTmBJ8SUrZeeUXvys6ibEMh9sudkW8nTt8MM22enniaf8GDsUPvwUZm3QNFTdSayEYXG",
  "key5": "3CknCLZsqCfcWy9PrPsYNymQNKAGSq6Tjf8XSPVo5ijuF8WbXXTKMZ8uvECM913BDKKf2qHyfLyR9W5CefbPRFg6",
  "key6": "KKuJ6pP4gTzY7HL1dXLvwpXCh4qeTBL1YdeWRDJ4L8Gq7d6oJCVVG851gDkMqc69FeHPNGA6h8STwoFCuepPBog",
  "key7": "39Dix8W7B99avk9L2QaUxLD598TP1abrv3aUynSycKWqG7TikMdCwjFofP7DF9GsyaNzjiH7K3snpSWL17QuyrBn",
  "key8": "PWd1nK5m52vqbZw4rvbShuYxnKE9tAgcBBqMe6f9XmF1NDZ1wZhDtmNVDNpMC8CvxpjyknscFbJ5Hk3f8Ds3C36",
  "key9": "4ZM6UzDLTBMxfbSa8RJTuVru3mfW7KtApfYk8cC9fZXQSwXG1rNpD254hGSgC6sWWyiRjviLgMP5fnz1tPMG3MNZ",
  "key10": "X68SVsSnXdtBRcqLc9pkynJZGLrzh6a3ENEqAjqJQJeSvsAynDgSPRmTaD2ZzeCWBZfPdc5hYHjuuyX5s6m4q1k",
  "key11": "4Aj7ZmUXthSJMdWCGqmNjn8R4Pv3iKrMTwfbcTyLqmt1z8PvkQnfHuYcf6TK4TGRoC2XhYNdfjedSiTpW5zC1rEt",
  "key12": "2w9fuUy8GcmCDejuP8SEoEELLgwkFXr5rRu71mMSrdPDhVmELY5dBE8dUbfucvJfLipvfuNmxTdQKAVoyozmmaXn",
  "key13": "4VxM8rhC4GgZgAV9du5NCj5jgkgoMJWAonquLNH8eAx6tzEsDYwWSiFebLaErLTkLmixP9LDCzCmEew5Ua4VWNc4",
  "key14": "mseoVjiCqGwbdp8u3GDtq2tRSiXDET6eCcu6B6UhyTWwzYeVLT5Hqn9SX9NyE8suwcz99LNNo217PZ1u4kCqGXj",
  "key15": "4omW5i79XdWay4YmacUTz932J7FpjJYs4StMvVai6EPn3NU4ubDGviQFc2Yz9b6aLPe5ny4oS77iiPEUxFJCgrZ9",
  "key16": "3teJZ3NAgJjgLtQZdS1iPkcLF8A2UdM5Xw3nsRgbicE81sDUniHnrxyZKd2Pd6eh1i4yyh4mHSkpFSUvsD1sSByo",
  "key17": "49h2M7dvuc6LFVamFkSkUX1hhhy1BegJEjKHHR2NDChqiCrACYh3oXKrvAs29EtudHNhAELVqCbKSU9Ln914dGMV",
  "key18": "vJyFvfiMRx2r6GD365A56AjPBNiFwrcDVaJhFyEdLrwhZKbV63rZ4DSotuh5BJsKqJVf2m8pgBaZw6ScpFYXKRP",
  "key19": "21es5WgXi5qzhyC4uw7AgoqY7CKX97gHKmBJvSmXmd2x6v3NZ72wd3cT9hrdMQFq3ujLyb8ZqNAQbvmpowpiyHP5",
  "key20": "YpRmpu5CVgjWKNvKjp2TpAZVDmx23Anw1FZhWYeV6svfjVj2y9qcboEd8bXPdJAzryeEhWj2MegE4sMYa7QedVZ",
  "key21": "39VZECMaY28HYu6yumNQYru84Xm1MKAs3vqgcKuRTzNhx89cQHKjk2rbsvUFeC7jWmKdnuCuAdrPWEVTL85sh5YZ",
  "key22": "2wAb358GucavYJnCUYvP5jH7eiTaPia8B7HtRXf6KMgWTuLeE8Pbf9JjPjdPNRmmNcAvfwaKpFqgCWiz9t5yepVg",
  "key23": "5eKJbRMmRSNPKAyCTAQ8NfMAvUPvkEQPUwnYajuMB5HhJK1G8jvRiUbmr6khN1MRJwNWEf8LHGeqJWbFLFoMxpq4",
  "key24": "3UsWazVuEacd5sBNCJ6Marm4XHiGoGXAvfPGRL2aosDSUftBLqbVDNehZpVd6HNv88hsfmzh7o6MTuqfHZrGbWJM",
  "key25": "2dU7jRhoi6T9RQs3LdafYYTvscaaBxkA6DM3XT5cePG7zvnXk47njPo6MGYAVDniiCYMCDtk1nNdnHcGVUq3FSq7",
  "key26": "5HjmRcJn2yvXuV4h39oWaxdFm2VQpbCGzDTUHVysTKgmGaQYAw9A9WBqxDMMLnqb7umYUSyNLdbwHPVTSRrG5qr1",
  "key27": "59dHunLY8BTkp17hVJHYRbL46btpAxcTj9Y5sxfuBFnKGK3s4JeLZt5XkrFHrFxJ9CMa87n8eE7SEmkX9JHPVcdC",
  "key28": "3t1ZVXqNM4kD9xdUoTJFxuAs8TV5tSPxg1okPEsUivYeeeuW3Upiq4bSWTj4WRVoQzRGJGfTgG9K7Y9TZLnMPMAX",
  "key29": "2JL4nCUqf3SCvCA2bGitpomnpxxNwTwPSqzvcQXhrKkb8iA1DKXbuG7kV2AUr99WECCF66MYb7f2yTckF1P15Uuc",
  "key30": "2SptaSx6cjt5CtKVNnrnDN5JkerFJj8iZu1o17bQMdqFxTwneuj36vq9ReFStdb934BUxSXosvDeVBZnDumiXys7",
  "key31": "5YZEz5TNk5bBqzcBF67B2d25XuD4qRB1r9zrNmP2CXkTxpZ4DDbS8bpbK7TeSuutkWUvJVb7ai4QiEmxi4e9Rkb6",
  "key32": "2duMRcYLLjDJTf36rq6quwDopa1RAMVGZpFEPDbau1vUxEQ1kRU8s6iSKUx72AByA659ic9uzNgQpLmeA9soLBRh",
  "key33": "33yQRs2wCfEjZLBX62GazTbGFpHX9hT2t6tGy9pr8DWEwBV2iRz7pq2yeBS3rAJTcnzZ6sgGi3Qd6Pv1oM3V5NvJ",
  "key34": "4ZLwtbs3kCir33FVsb1f5vKVXmRf25YZxAunG5HVySorcVHvPNN8uxGDEXzCDdhCXSAFmi6nw9AFCrzy2ojRwpmL",
  "key35": "3qrQmvpCNUjFpFFKCqMSpDcsEh5JD1jPbrHUcRt38zGH6bh5qsFkyufCkA95LhDbuencgyHNQv7iusVppBMVhD8K",
  "key36": "4o76cfF8yHDtgJ78RHpuFV8HTb8BLbDypwdze2YTCUJ8m6x5nLPYMVWNVJquUBX8S6kd8QVSHZysZGa4CgQ4B6ck",
  "key37": "2NsU78bdyAYyGzBzE5P7GomepYeR5QmgidTXgJuC5kpcYyemybJYzw2Ld1UTDArLviLzinDj1SNySUip5Dp8N3jv",
  "key38": "2WEyXjUw4A1W6MmdBeEHNgYa3xSuBKak8xuvJi5ChL5gqft2oeU52cZxduKtbvmLLHctEvu9kMWYZHXgL7TVbTWD",
  "key39": "2hd9cQcEoLoQKmYieemjL5Bt3NjdesJUD5HTYLKvCP2GA55prTAS583qMQW3nZ96XnDJ6Bfh2twE1QbtHxuQdFrG",
  "key40": "iXWbKVjZqwKoEDfLuWoDL6MuBT1RRt2C5NJmiMrRwrKpDxu8TDMpaXaJLgNPn9Cu67gyPT7nxiT7V8XYn4s3Jb5",
  "key41": "5DTzTStwYN7XB3cAub9Q6uaLgefxAJ4mGPzpSgfJP5qXmN7id8aAmbdArgN6xNyMfcCAHqrZrRwZrVchYrWZyMPH",
  "key42": "5UwksCWTsHYC2pkx5aobe8chgW1xhCpWseiZzjyNbBqjuj5bKnV1A6LfXGxR4kMdzGwc4Lkb1hRYtPj9FaH2VMXg",
  "key43": "4opvr5HGgjKNYY7zAicX7TQiSBKoVJSWPywmtwQSCgCEAGmk2SCKyPgGvD5e47JKECTGHyUdSURxeGqDP84aRhEr"
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
