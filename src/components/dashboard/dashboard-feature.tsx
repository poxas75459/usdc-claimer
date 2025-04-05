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
    "3r2uuP9YdetCQs3jz11w13e2u48HH5tUxHN6wX1VRhevRjuXgHx6V5Hv4YC5jexwc6e4watPgUsLsJagN5RqYcrb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hiZpoDokB7ZupVrahyNZZVYHNuGfJ7gKP5ydiPnGPheWGUkQ3TejrJ5MBwuVT4wetpkGkk8aQoRwre5xpsCQeKs",
  "key1": "4tz1ouT4Hm9CDLuWHJbSm2C16f6S7GTWQP2L88ekvw1JpZALZrv4UiSUrznathaeP6oJ4oh2JBhXCoeo8zigQjTy",
  "key2": "5SYBB7QWh5m2uv2wr4MuvfKSR2pY2oQWozynAd6yu5uyfNLPBERGSrnSoVNm98BNJWAB2KqJyLsdLbsLMY4byP9g",
  "key3": "4BkXg6TAYrgo3GRDkTbmpnrALp9niXWqoyeiWgNDxm85bQFUFomw5THo5ug5Bb7Pn6hcTa1uu9eghFszfNVjMRjQ",
  "key4": "5RrEyg1TssY5gJSmVqssNp84iLzxsyCdrKfcTd5z7LHMRMjJxDnmcgoQe8FiQt7eNuFH3eJCg7L7zYootAUGZ6qU",
  "key5": "5XCHvMoJuzD37BKSzNkcPnDZd8sxNbPRJT8y2iA2Sv3CLLpBGUzLRpoydBq9nXDTuLgpm2vV2rPuxCJeaqr5X9kv",
  "key6": "65hbJVxy4hDyCtAUumJYH2dgv5BQnHQF41ZTgRxM3wxCP9Lcu1LNQ7YBoGz2GEWnMYQXbryJkGyKTd9SJ7kPbWnw",
  "key7": "4aqSG6dRCh6SLuMxh63aDyUhmA8S7ACc3uPUKZQR2nhAA69S5CjvjcVXC2VxJPzv5opgbLSUTKMoh67y9eKJS7cA",
  "key8": "53exfQDEB2Uc1ZAh7eHWW27mZtd6a2Mju3TFUPU6QTwxc3jLPCLFfGH3PP1B6Q8zRCj9ccMJUaLAosx9FTPErm86",
  "key9": "3StQoJqvDweDYCJP4JRxN4aEaqtyDTSv1bZoGkB66yD6APPHACNZQzZhgS8gc4D8F5wnm1ZTs1mhQTRX3fUSH7Jc",
  "key10": "2oF56H6tptLYmzJSeWPmTAZqkKtEKR48SLot5Ei9b2HYu8oT7fj5ShGCdrocy2i4JCSQHoiKewtAddGNqoe9GsDR",
  "key11": "39wySxZkEgcW9T6MXAdEigNsb8249nsGcz9QaHBK5MPp6bJHe7VhsU5kPD7MKa84876Vw59VYSbym7bVq9H3iymq",
  "key12": "4JoHxuAeiAxk4uGX1CkVkUWRG2DWUH79LsZ5q2dzEWjeuvwYJmgNt4vaE1i4k2Cs3V6NRCdRJ5FEtrtBNURDVdpp",
  "key13": "2h7v2XrTz2bpmp9iR93spFn89e1G8qjnheBjVBsCxBUhB4uZAUu55kztydPMcJWUxpHhsqru5vqoJaVAzZMCRoz8",
  "key14": "5zvbQsDmeg9VpFQwz3wtjgZWzSsAeVzYx8WCk4nSRbK8fuk7PiQ5ZcgZERrhS7TyXurwsgisdrVd417yvA13Q9nX",
  "key15": "4BzR2SmbisFDiP3wvE8jWTRLgpiGCtJF66GSjB6xG4RdtnyjeAxdr7MS8r5ZFUR2fvLi7xRDZNziLbjufWjbGfiH",
  "key16": "4PVo6c5XmvQCj9XDeyrMqQYXMuqy9n8KMd59qFfUzSMFGZSMxYWeP3yjF2dzCXRFozfcrdjsFAPiKCcRaES5h34J",
  "key17": "5rzHEsnAgNiSjC445xncpDPfAvRgU3VEc4cKaWbDGhd3ZtDQDJtMVaAQTaKWCG7t2KhsfcCRdNqZt5V1j1VZmSN7",
  "key18": "3bpNTwGkFr9eNPRQnQyxYiH79qeLYYULMJh6dyzqBBDZeZnS2H5AWMmfRfQ1f3rmFPgP1niB95YFhsmj432uVGqN",
  "key19": "JBAVqqhisUPJDqjRpJMnyFBPXpn9KCDV3zrYyMfoZDtvT8ZEhq4i41pR9W5e8DJzCrDJygK9wxFuvX3zasLnWuo",
  "key20": "3asL77izoVUmp1ATEzU4fKVd12CKure2AXrdL6MubwmeN811QgiTmLpgCUo5rxcWeStu8mEpKULxF6qv886zrsvV",
  "key21": "4BYhy659F5jRYfzTr25c2QaiynDZiRqX7QQK6nPCZBpZjxaK8DR6GSDGFBMFhBXq4VRdThTPJrazVRavFJ8KDBEQ",
  "key22": "5iFWEYKK6ozkpsfzh9X2cuDbAVcsftNzQTijRtwjyGHk6Ric1e41oiRqg8Jvjm9JDa332F9fcaxWF8Bwk5SkhXCe",
  "key23": "2X45PiM9RKAs3KxR2YSX8B3UF1y1UrFQvnchfL199e7oTWXdPCRNXcsUFZXs1BtPZZv4aY3yb7U1LGkADQJMo6Zz",
  "key24": "5eJqzTvfx54qrLc1f7GPyLxpKw1V4D3ZSS8VYpZTtat2qmizffsAk1ernkMCh4vzMjwkLt5twK8cLZ5qRhChrYwh",
  "key25": "3W2gC4A6ewNGMvCPVciGwzjKnVWLyNZoDAiqj8axHfvQGnVz4KK2Kk27GJL52zE1tbhsyw9cDDctkvGVPPAJ2Vyq",
  "key26": "33QYWnpxZi1VgYbDKrWgggCTsZg7PUJyoARgAvETX8Sb7CjFBmQu4opM3gbmvd9vrcn475ievpq84QCdUFoxw2mH",
  "key27": "2PaTeJjEXYUwAKBEFLAX4Aa2SZLq8AEWK8NZKeSqVmEETxQju7SeWo3RddsAwWHQp4KZ5rbYU8oMUwbHjTKNqdBy",
  "key28": "4kqsGW1MdYpiHRnnR5QTmUPsUmN5uAczjEUQY36GHHHrGeeYEdPGLej61ro5eviejze327goJp1Ei888ZHFc1GmP",
  "key29": "25ms2dXVtMwDK1muSCQX7v3iqpQkWH8bRwA3aoVUJDjJrgpTpNhN4NtJjU77u92453KAwfgFCk59nu4u71M1hGqf",
  "key30": "oWUFriXgKLKEpaegYgEt5zA4hRtyx1nTn6kzQX4zxiM4tPUFADtsTjJ4bh3JK6GMBtdxiATsBeTY2bmPhcbMFzz",
  "key31": "2TKgjgh4JJmiAfDaLkHAi5WnpFqoX9RHt1JFanGSBT623FnMBW3oYCJWbfLdvLkQDRiqGTjhQQWVLqdnZkmYnHis",
  "key32": "2XEvrUR3vwmCWKLdQH8WGvKGXjRhJiCnPNru3m96r56cjhy1p55RWw2q2GQWd7mHhPoP6SP5krTRZj9YRt8ggdWk",
  "key33": "7YoMwbSwAcX7BtYJMoDZ1c79xsCfD8zD5haVYrunZuzw4cfvFDjoAyLJaDk1SpbeYfJjdNKTK7XcK5eJebLqC5f"
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
