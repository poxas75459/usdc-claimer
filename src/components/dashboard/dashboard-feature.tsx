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
    "3BQnNLjzY6RpGSsXNsHytwY7ZzARRa3av1XeH6b4VnYcSXRpbpmwFKPzmqTy674A2ivEdDTGdvuLcJYyt2ogh8hr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gauJSqUyJKKcLH43Uqcj24uD7g2EKhy8r8msRLEeXPgXjw9ETavZUhcX2bd5dUirQ5tCtYK6gjmxW9yafFuTbmA",
  "key1": "KHuEvNGJJ7z1SXVuegnx4ar1rCwx9kCP7E2pvVkhyDwvvh4wMZwGG2van6Z9ehuQDsk8fmMiLdEn3usgP9mrHcn",
  "key2": "5qX9Vh1MQx9SJdhCToxSKN5ugNRw9MzbHAJcnxBUrDdGaB9NqbiFHVKaiBwjyjqnY2Yqv4kT1tSb5cxqxkkZLjcE",
  "key3": "3RJHxY1H4HiTLWDDSjrfnNpqacUM9ASa9uNTDGgaRfdQCHKm7vDXA3fuCv7XdByQaVYucRPybARYDXiuQp8YTBtV",
  "key4": "4gnEsuvw9AE7SviRHoU39hipzV287M3cTTYSeoQdXAyKg21GLZU9Nm5w5uEP1WUVn3EiHHruw2YpGC1zZAUBiXMP",
  "key5": "STJV9VWrJMKdtS9ramaAU28ZcbC1CPCsSut6fSvSQ7SY547YNADvqFz9inm6KQ9SWrfasaTsHvNkGzKtt4ms5nW",
  "key6": "Dp7Xme2DdFTPtYsL1ccJzTbJ84cdSBvx226gMFdMQDSTUnPci8v24HpDs1thWx9uYJVCayJUBhvwXT4qYY5fWsL",
  "key7": "4bY8pomgw53fMZXCZoLzWiFqM6pyKRTuiDppFnrxY2gBJxPDxRLSGHa2AB2vy7KbMZZFZVPhDTYrz6zdVxhWCNUv",
  "key8": "37WNyKuZ4U22ZF5hjBozumkGh81mwB4FUQyZhvg4tXsF5k5PBJdQFaB49jKzb2ZrEwJgmZLnWfMzzu9Uu6PLgEz3",
  "key9": "4HSoXSsDoweX9A6bVEczVB2Pie6vec4q1DbChRoXqw2eDvH6FweBx51tdEsPbDzXaKfxDZiGYH4RtfiJLTXSt4QN",
  "key10": "WSA4zJZjgyDiFEDWjAGpzXkDPmL7AoewAKdWTirxyoRkkXSAxHGyUzyy6d8bdg4AB37ky1UMzkyAg53VetddhMF",
  "key11": "4AgvEdFandasCCUSxuPYEy8gwpPyee4bLJLiaf8ne25KmQCLQKMC46aiVPa6bbzdTP4pnhkRQ7wBpZWTTWFKv9jV",
  "key12": "QGuGfumahQPX2oqkfcF2XQ6PBaN4BWG2J89oDoQm5Yy7VHG5cE27C2KFdujjfATVGfQbjNXbbJTxFe72LzW7tZd",
  "key13": "unBeVgzR6JiUbCA7aqKzCy1gQXg3FCZYdbt6QzxpWEK92JJb268zPkyJKEvkXQ5QB7jUq9DhUgijHQfQ5Ka5Vxa",
  "key14": "TjbfH7t6dTsavKqs7dT14qVPLANfCLVQnAdaWz8dx6L3MkCYvBHkP4pLofecjZc7asrVSSjJhGvFA5Ku6D7EfGE",
  "key15": "4CRdMdUwyXi4BXDYaF66enoTf3ctqXFW7VUSWks5k9QbdQMfaJQASFLA1UFuLm7zmqeYU46j3xAk2oA1ouvgGhum",
  "key16": "3GTwFNV6Uh6EjbSx7HTL6pYF4dH3kwqT7MxzWdvkGtNokRrWQnULWc9hNo5VNAtVcE8oEsVohSdNhmTdpNTq9HEn",
  "key17": "5YS7fTFeijUjxfVxdAeqhcQc7oRUti518w7osiRNsYUiyvVsGPZPrvX9C8hnucFLaXCgorZ27aE6EkHs7sFDUwS5",
  "key18": "3Aqx7fropE9BD2PJxSGJbYbAEQzYGkBec5cwEkrqiGHTe39UUzHCc825jF5A1qPGSbHi8fU1miuoFzaNAT7dUCEp",
  "key19": "29f7Kqg2tr763hgRWiBty3wgHshGJjBbHwoWVQDenjRbkNDnrBQkB8vp2eoTGSS9YnnK1D9dr3re9w4AYRnBEiBG",
  "key20": "Ken4B8FCw9zWDRu4a6SteJSEbHaH1xYSc73QXxmyLm2sRbB8dK5TtacoE1wHavJfTEdeVAXJFkPNJFNRBbSBXEH",
  "key21": "5FqLkkZ9iL1HwTZs8rsLpLci6av7vx1p448Wh5FL3cv6bk2ZrT6BNSsJzH2iYoKdnQTesijhxQ3HRRDThHu3urvF",
  "key22": "AhkAfUVNb8Ksv75uzvcvQifELKGM4bFKevx6asp3NLXYJUuBiTH9RSTnystLzm8yYpXxPRJnHoBxUs49SMzKXQg",
  "key23": "4bniGdxFb9sC1SJUJYDHpXLmjcaLbvh8n25dozn2g6mZZUvcNA9bahVXBuk49cQeiDHFB6aC5hfEFx5FiYxBzABf",
  "key24": "53b18xjyvdujwdDeMcwNZTVdCAHdNQSvJLW8kVpUfEQvbAWSkpqJZa8J7TnsLAVZUuELLZTBCByU8BRXbgXrm2oM",
  "key25": "DoLMk5qWiahwm4mmyT64wU2WGjsZ8qP7WXrvrikFDLTLenVENbcdcmy2Ud1gxtXfuzYdsc3Q6GsRQWo85eCeCR9",
  "key26": "3CcAijTMVriPZn8QPiQp8j3nF2GuoijyyZXNGAMWsdiURmofrgzqWWXwC2HxBF3NGvQUD1drPvWutkCyD5m9MoFw",
  "key27": "DW4PPetU5ZZtjJGaRbH6qxX18szfMhU6tMP6DUVXxfLbp8r3gLgroKJSuVTcs3YPauubfxx1Jh1xk6qgBWGnoi9",
  "key28": "rZSKmt2qsq8vSXEt58idg8Bi9cWUCDuT5SQxysPmH2jEJK2UMZoR3zr3QnDbcc2zMYmFqynT9S6TnR8RM9Gcj3h",
  "key29": "3ZaH8J2RHtFUn38FHh6u12LiV8J2UYsrQA3qsLy1P22Lss3YaaQdg8TTxcSfEHJXK37ehvSiwpSCvx789AXByNiP",
  "key30": "27B9kHXVKFknY1Y2Z5F5tUiMsJmvY8UAy4MquivmP62Tdh9ZJ8BFkxUJfy5Y52LzXp3ZMsxMs8PwqwLuMyXGihzB",
  "key31": "4GjjYhccfTBvbcgR8cNyo4EV2RPYg2SH8wZZzKt7wfXcLfmpvoDsTCKWkdpgafUApsMwd81mKZC3vsYZLmHCrHsA",
  "key32": "2ZzGGak7dYKAMLQA4fQwWwcyFArcVgHfgkDJ9L4w2CcyBhWnedNbFYaejsNXkMBrgSavFKCVxeiHjYXg2nq7Vydc",
  "key33": "4kbiD4bK3eQpem4R9kYsgRrUAjfvAkqyS5bqHERMmr5PXkQ8Xek3TC6s3bKmCZthGBSuJYy3aCFYiRDuQpHbkZ72",
  "key34": "5ETHYsBdTJDT7EsVPSvK5Lwx3Vvtez6ryk4VwTKe6iBHjn8h53aafBKVR3t4mRWq9YrNuP2dRJ1gip6RZju9KiV5",
  "key35": "3zbryCC6ZmKj84XxJbe6oPsSgsuKqg16XndCVvw36uy3MZnVjecW3Nku1rJHNVHc1s4dgXKmy4ct3NX6w51tWbM8",
  "key36": "26V9exj7pDk6BWUnWW5KN8pCcbY6SD9JdCfHNdNTFRHAk17kfYDwvFL2iGmLuRS4w39UQkHBeCJmwZtf3LgMzACZ",
  "key37": "4yWVACds1SRpoCsTkdgqhNiPYqfSAZ6V86pAywc3g86EWvuvRXZ6DsZETZKf9gSXKTgGEXJvzKKuUhPGWevForDq",
  "key38": "4ZkhcnEH6GF4QQMvSTpLQ3gm2EQPkdVorPnHGkBVyhRzeKt6xcP4CLxv7XQJ84Qr2QeiazrdPkvBgddEpYkcHHQ5"
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
