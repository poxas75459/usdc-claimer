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
    "5UvcpZjnYCLZgCmB5CgpCZ5f6AAUSqFKAMBqiShxHkFT4RyDgvbGggNr1mP6NcoT1H7FWc5A44usjcLuL1sxCLne"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PP8sprwRduAgC2ChyS6vRkzpNLbfw5TCUPHVyqSAWRrKM7epsqCUcmxgALHtLwiNUReC49XbqofGPQQpTZRXjpu",
  "key1": "4RZiWiunRF2o1323si9QyXYYZ4cebT6c9S1uVBgxZTEsXCQqaxZCLYzSNZSVteMqXSVhi1Q2hg1fpJvRZf7YGb1F",
  "key2": "5WsAumGtu8bDnSyMccM3Q6cYGwpweN1ayaH2uw2xDsKKrP1L3fwVjkSiQThyFYe7LgckU7RvEzVeJbctbaSG8tj5",
  "key3": "3b1D9JdWGaavtJbgFEQfeVrGBRjvsd3WR3e36TghgDY4KTmVAnYdVXAWyiCZUxLtF4iJv6o1oazwyRfgL2fvdJv5",
  "key4": "37eBXswHfzYfjji2d6jaD6Q8hmeTRTgPhzT4jHXgjxzwrYGb5X2HZ5nKBPztKY3MdBgnwuYFKDaBfkDcR4jsWKtn",
  "key5": "5Ah5RQs5zAConY8DHJ6PnNRERbvQgaesD1a1EriyQki6vBmcZW9Zi362pjpZN6kDGmDqGkQ7xn5i4Hp8GzwddfdK",
  "key6": "5dfSjitnDdSuwKeReBiGWkfscu9ZDphxwMxJWsvThmkZ24gGdH4QGu73EnLiHSEPscZdNMSgRdHK9d9jeFuTcsyK",
  "key7": "6eHTh47wcszvdbo1zsK4WGDQi9yKFJP5U75tqSzCcfA8w4hjSs2Ec3tQEGzTALQe8fAJ95i3TR2uQ4Zdsp5E1zM",
  "key8": "4jHRLcwfNvypbFmBXnnZ9MsPqwGQ4ZcVL4GpwbEv3vsin19E7ceFbMu15CueCDZrZ28TpBb3NUqnokvuryPuxAkZ",
  "key9": "44mmBmgpno96udtw9YnxAfVDj6h6LfjJ73gZLQTKMnYYLL9QTGcaJ6hZY3pr6iwbj3aNurWUbGRoXqPmLSEYCLLA",
  "key10": "4RW1x5NmSGdaVjXuzSGCZ91Dkn1aJ1S9Zw8qAZDMF9Wd8VMZBRiVnuewU6HiW8n6S2nQpsz2zpsmaw2hGTzZJr47",
  "key11": "cTAHuQv1KbCzE36AnFSYF5kdX4B3LKXJEonVTxmJ3ysVDmDWVbFg1YjyBKkb9pBqDiT3hZJkkPibxGmuboTuEE4",
  "key12": "9Ci8W4NJWjpVnE2rbrkq3Qk8bURyPhsjPqwEKKL7rfhGBdyUQY3xmRhrmz75RcuXSJoLNXCTRnBWnbUdtQ1XjAs",
  "key13": "2MUuK9qX1uet7QW558d6cNXjd1tfxMNXDAjJx8EHWDmhZom6WnBoRDk2gj8LQBhzQNWPKyB9cpYhLNK2ZTd8aFEK",
  "key14": "2yC8X3tRvbDGA5TRCbJR5R7te7JHdCyJV2beaQwWeVPuQK8KwBRtw8A9roWjfd5xZ1hGSgsa7tdcU8Y4cUWzSKHK",
  "key15": "5BpD2nKFpogJp7JDehphnA3MHeMcTkrSQNRHtsWLXo1mPEMZBxGQ26Ea6VsbKDmzjHVwerov6yhVSWohcCXc9Qv8",
  "key16": "32M1e3CxHsKHBUUpUW623btUm2dAMvcNQqe9PbwhwqLxa6nSXmK1vtLVDtDEBNG4smfXi16GmuG5V1jPKd3AE7Ae",
  "key17": "2HGrFMKG8hjTZzy81tT81RJrWfKeDPNGiDpTcLA1cHXpGAsSpdjc95xB3uSXTN8KpM4mhdc62rvFhpJBprGdiQEH",
  "key18": "5tDCFDuYUmmQLHKD2NJ8d5exFFksas3QBgutVQLCqGdakTJQgjYivPLgrsUiYhc8JuKPijiZJSUFPprD6LABRtRY",
  "key19": "41rCWSEyV4CQiP232N8jTkai28wQSweZ3UFHkPJ6pUGTKkjdMHUJE8fmJU5XeAt7JH6QQPwtrs9QF2wCFBTwNCqs",
  "key20": "47uvsmCxDWJzgwStGjiDSaByjPVjzrF5Fem6nhGP2xVQdcWdEkL5REVrxQFCXmeNRYAm6SGK3kRNzS7h6SmJyGx2",
  "key21": "3dF7R7akLE2xbSybsf9qZL8guXAx4zjTLMBdXAg6BsQW1sv3znLMeVeSJWXTQzPsnWX9M8C27XdE9zZTDyNe9BPX",
  "key22": "2LyFievNkoa2tuESZ626Pip5F5sXtadNN1SiATPtvLmyAFNwz6WLWcyauyQ7HVRxSder98WvVupbNWV4NqNVRtY",
  "key23": "V7uztW5Bvg8m4MH8rcdRYChmZT7ZgWtpvK3D1j8Wc8PVFaPHdtDV2soc1g7GjWuYfvnnBuxsZKJsEmmiaDELCdM",
  "key24": "3xLRonUfLUFg3J4YknymHeKAmXPmUxeDvwP2eFeLPmYmsoZKmtaQ3aRyEwsbG1q2cFWpWmRzkaxsPKqE4YtmkTK7",
  "key25": "52W5yGb2iumferbTUZeDoCL4pPbbb5RiBRVDVSqa91ZpeTZxECbT7RyvtDpwR7RwALDD6stYtVH1apoBQ2PuSKoH",
  "key26": "4iob6uTCYSNx6gJmD37cbDHjroynk2DfcwDcGv9ZU6ByC593LxmUA39sQGCVxWsNv6bhTyC6JcS23quarHfi2afc",
  "key27": "5u6uT2J1e5j3N1t75bNe5Zx3gCMSbjGomDwuV7PdErhAeRhdKZm8bcRfBMtrwnKbrQmvWuawF8Ksnyzav6K859Jw",
  "key28": "3BrxXZFVTuYBH8qDqSRZ3VeZ2ttCEETzAsiZkizyqJQBfJKP9NNkzjnWRZpwWCFKcR8xUQbaykxKJzDsmAdJ4gta",
  "key29": "2w3sWuu8Bf6scDX6To8WsBt2q34DP8qRF6YNtCEHcM85d4godd4NUbRUiFX1fDa1FmK23ytCgzrmcgnusNdfH2Vq",
  "key30": "2L1Cduy3vtygkfHUrjfja4a7nDvN5zyTmVny4Ka9CVV1BxQEQzXzznEBFHM9FMXcfsuirGnQAoLi5HdEMVT432p4",
  "key31": "62B2eXuoEAcFcJNGZx8MKTfKjshdMDkb1AAYur27M1NBWLGLU9UQqMaC2QZKz1Vy9rqzVSwBjnU2faKvjgTMGpHk",
  "key32": "22Zt3v9818wKMchQ84pE6KrMKxPombdquhFwVZ5JDvREAk1zz55g5FB6d9gByT8TFqRxMhmznuWJR7JdBUBC5zFF",
  "key33": "25nFDQvpEnHpfksG7jZ4mc3Zhk3SoqCP5E9VS8kqF1PTVKhxnmoy6apxo9HqB7D2xjkVfyyC3jY7v9Zi4g5XgUU2"
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
