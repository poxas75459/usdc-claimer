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
    "5jk5KZpLPt7CqG3qsUfTszkCrbmmMzg58uzRk85SHod9a8Pik9n9z51YPeXbQgZJ3FuSrAq1yPQcEgMFLtFsBTXP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4556C17x37RtVTMwtu4XX2VGvcFsJKZRqRvH7VHDsrkXY8RytY1nGx2hTR9pyQ9jd4WDfT32TA7MzPAvo5fSG3DC",
  "key1": "4TqsV3NDZdDDFNwCAAAsTkrBiouvAKt42n6HM8zM1imXqkofJWojrT3BdmdNzfyBiS7kmXC2SeSSFHiPF6snkKLf",
  "key2": "2UqHcHkSLuCedcVnQvwVoR39SaRRnuhv74QBKTLED5wvViVvCrZXydHSTEc6D4ucYZRHF9WTeXGhCrqToZeDR5i7",
  "key3": "1y7bWBdyWdCj8RHRh8EqQvoPrh8EESc5FfniCTCEwAE7uKGqtAAZRxWLSigdYy93aTdM6X1LJnDfAixT2RXMYQn",
  "key4": "5EuJ19uv71GDmVsnKj6phRn1jNJ5aEEjHyV7TNgqyanqTQPg7yRprLWbegJhEKoWiwsyaxpPoJYgtCxiQ4tz2QaU",
  "key5": "t8Hkb8A6KHpdgj8cihqWMuPYVSBXDmDBJjBkzFng8J2RQmMsAAAT6GLpJkD5516BENUaq6xmR26dGqrJkhWDq9g",
  "key6": "5hnk3K2sr2Nn5uUAU7mCczE9Wka5o6qTP5TYeXi5ySDSsnPPngqNk9WbVMo2L4BTMYnrVJtzVhVEXRouTR9B8hXE",
  "key7": "4r1SwseB5YBm9X86ZhmMtNSmJLVBoeGFiZa7H8cvF7qmfwyqufuSdGtKNwVGNSYzWGY9F2X8MS5LMXR5Xa41qvRZ",
  "key8": "3LkL6TTyD1cFpuR62QFKJtUR4pXG2Nzn7fjpLKzBs5d1SbMFrrTVPe77sqrCUHde2bWPtHP1GLcAP627nU3VBA9B",
  "key9": "348kjephHMxkSaNyMZbm6JRzDttXDx8MmksxvVEHqGo6PqRJ36ryyDaVjcFZJ463WG36h3AziWQ52md14QBvc3Vd",
  "key10": "5GZibFrqxj9r8nqswgqgNADib3k1zBgYLUmXFumJzPWQdBEzpGeP7HZq3d5Y63bK4xqpmmPWTAudnxxjoaqESpYZ",
  "key11": "TS9SWtC8aKbjbt7RGW4XpTQ71XhCWWPQW78rJX8LCX6vRsZsbqN76eKHvueCPKCvJeXd2u9vxpUM1hGHg5urHnU",
  "key12": "3zqgctZtNsVthQfhBh8hzxoRF25r9gLbKZH6NjiAhaoRiSWa4jy95ksC525aorM5GndrQxyWq2H1JUsKtYonc4gG",
  "key13": "3gj2an17G2d9DPwmXrCrLhuWS1zFFgs3vnxXtTb7kfNSL57CV1YUbwF4EdjgwBQRceMFJhexheNYbwdkGaqDrhwi",
  "key14": "4ETTjHYCQesxtf6LGLMGDdnergejq8gX41cHqLYoLLejeLroTCCdqbVsVZzPi6PsD1M8uTvUHhUBxtdWdf2s7R5c",
  "key15": "5N498h7Y72ApzdSPaq7ZDxZvA5FcDtXmhb35tmjwUfByyuRK4dsaxc68tzfP2hHGwoVtcwUwMC2K7AEBaPTNN1Vb",
  "key16": "5bD7MpisfHZitM7izqQMzmtg7Wx8PwaeeKXVErTkNZhdkiFCRS2H8T4rEHSQ7Rz6RRAx3YG4i4poAAoVrEA182GV",
  "key17": "3idCJ2JYgaTAkDtGhtGXaH29EJdVK1UdjApXqeBYLJ5Y9JgW9vLpG6rTtgP1WRxp8fv3cvEnHwYntbUtKDeEXjbg",
  "key18": "5QvxWEhVj9E4s8Haqb6MHCtuBus4G5P5f5bNBpZH4PmPArMEqAB1mJpM7ujW26YTMRArZFZUMxQ3Gqq6BWBwX5Vy",
  "key19": "4aNhArykmd84THW4YcxZgphWeNbcJpXWSXN8qUbYwSUCoyUTxDqopWDATs3rnjrryw728g1JM82HV2HuboRh9KW1",
  "key20": "5LY64x8ndGfUoKa99RvfRM8tCYaBA4BAqQzwXbxANqU4Pw3LjiprXQSgJqoHharXvSdmgR6A4qDJCTW8MhYRWLUj",
  "key21": "5jt1q9bx1u1vJMksGzsCAfQ6jWiw3t5hf4TP8p9cGms4GMAnjoNfoB7SHkJ298Y8mqiKJniqAhWQ9mEgMHrRzkRK",
  "key22": "eAnsZhfRbVQcajAXzuSjAPKxNKh3dUF7rvwy2oDzZfytRGzwsMnNYaE7KtpQJPLZDjM5DzKU9Rq4DED9RXDy2VD",
  "key23": "4mbbdBDdHahQwRaahwCUzenKeHCAz3v2teLRkzyZa4qg1EUYsvgPiDQExa56h6BUXjjFPcJdwfaztBiQJk2yx2fh",
  "key24": "3gnZa2XaLUw7p9T3eGUMeVwD4aFrFF8qEkCZjbYzvTBdSXbTzHmCpjVDK1nKwb8FuzZJXAJYuNyMfVaYEvEhaGKx",
  "key25": "hWfZf8tdspKDCAxMaopwaAKUi78mDKgPEPPFxp2cdxrbPMvGePfGZ987SMU1LeNciAfoyKPr9oCpUFVej583Qop",
  "key26": "Bhm8hsvofsKJpPASG6VKtzdHPbD94WgZqs6smQ1X5G1gSvDBvDojUXDzkuLCPVhFMRSSyJDGdhGpng2VcbSqmay",
  "key27": "5RTUg6YMJPTx3juJy13tmnSt83GLKbqAUqbRdwPa1DH6LAopNLmiEjENP1KHSaxPZsrbxjEKJXq3KMjFVFxCTRSN",
  "key28": "4tYtu518k72ChFLxPbYN7DsRVwXJPe2iK9XcSGbAz656HpDCT3hA3Z6SAuH4W4SG1eSYjCYMPeeHk7YkGfMTzuta",
  "key29": "65mMPBzt1iB8vM5nqQPGpqv4RkdoRxmos57ZAFaCZRx3aok9McNAoTk5NPcQj951LmCXXfktSFgRtBQBvxPhSd3k",
  "key30": "dKGS8CUuUXpKGCxd9rdUp9vArGVGHkAG4h9uqTG9xGntCeeDb8qDbHjG8JmosTok5rvHFvAmsTp9kUUJX1du96o",
  "key31": "UH6wo9a54rzWo5LxVfCy9exotysEEVQJLPmqiFNwLpwea87yS5YfnPKuEZMZGHZWo5YxpWDE7tkoiv8LuiNfhYv",
  "key32": "2H6m8z89QC5Q1rGt87yM52QXvvRjtXfup96CTG1tiXZfD5vXaCPccKfSRJLxpAeDzxSgiGq3n7bkMBsr1c5MV3e8",
  "key33": "7gXQeb36hcV2YX8RxE4AfbxFx93iwytz1PPNn9WjF4xdfE3oGeteYbUTmz6ZRmoSZathSP972mJyaVtp1y7Lpga",
  "key34": "3sk9DkJuTSwxARDZm8hsr9cnWcKH4zyUfYiHifar4mA98442nXuEHq2ZNeoLk1Ynvh8gmrhRr4rTvBFHpQsUVtKF"
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
