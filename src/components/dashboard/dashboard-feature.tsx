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
    "2m5Nizvh74uS2jGmQpnzy96UMtgeD3RWiFYPWG3o6bvEVabsU3i9nXjhZmuy4LPuUQhBZT3LHFgfUxVNCECjxcXe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jXxotg1NfJ1Rfx9gpnRbS44ARq1vTV4QUeZtuRtaLzYuXDMNom5XyQv4rt6nWVWFmc6HE4sEAxjpa1pwzzLNyFf",
  "key1": "kVhK5kGkrG9r1xNZnwZvFjhEfAWRHUN4N99mLRVs4CY93geRhAW13KTPEpjoy5gkU3G28vi8go7VCuNBThUiXyh",
  "key2": "4sh21MJSdUpbfvPKuFCkHpDisYb1DJ89Ko4x4KjhNPEeCPLHCoYuzS2zphD3C51vUVdHnRBMK4ac1e8EA6sWHyVx",
  "key3": "3u1VcqNDDW9r8cMQZ4PduvzzhR4PC8jWctkXHZY8iBURCGgFDRAQbpuywQhh61tNWjy9b8ZdA8aGhToqKEjjxZxW",
  "key4": "3F4rivFFQRnZuhxBqg2NiuWvSguMWFNRgGoS1bniX4fHZoCv634eA4iAFY7i2bqK258JrRFsKq1ZvJ7hoztgbfGZ",
  "key5": "2ukg6s967TXtGK55caZXj5ViV7gQMA94HQovLjDX31yGosKR5Jd3Gq7GJVCWnb4QY5gLRq11G9TRuPw3t2qRyc2J",
  "key6": "oDumYfvqbZK8brPjxvc2X3CgPdpbS2KnF8fQuJvxSxAdvAB7Vd1CjPPu5Kkzq3MzYnKF4XVLiuVQ7X3rLU1SWvQ",
  "key7": "erdELrNQGmBsy9CYW3uSXKG8yHy2sxz3wNFvgpgSiE6sAaLUN1FTkPdazvfq7gN9vWpTJcE6H2wQYtagKZGwRpv",
  "key8": "5Em9d9j1F2YEph4DrVLP3iUdvMKQgBpG6R2Mrtp1R2kysyrcmm45R6V4UbrZFZrQ4d741WfAk7PXxXzM8mZt2Jdd",
  "key9": "4ZLiDcxqzpoYYPtXWTFL3jfhvtUWk5Tx5XCpLCzNUGHeopZ3EFFijZgiuBRz8wiDF2uLJxLEW5ZSUoBTXAqUfWSN",
  "key10": "4nf43TkUCLoAW2EWiDPoXR3BkBwvJ99wWbQ1bGCg5DLuckgkqtiT6Sq335nX3mC3ZUNCTRAFSJ7Kvqb7enU3JHgQ",
  "key11": "3D2faJ8PLExBTAi6Ai2ZfNSNc3Dx3taH2njsraFQ2FRrdDccG2iHoVJf3HTrJcvYU9D8ZY3pdcF6tXDGxB9ta1tV",
  "key12": "2Nj1VXzC2JY2ZuroeXpTtc3kuuweB1cHAf9NL43h14xmoEK5enaznnKJNNKG1F4T8skX76dELfYSp4aaSLVqVjqS",
  "key13": "2qgf9PdumZkHce93NzEkducbzmSDj3WjmDbmynkPNvojra1QbnFDZSnrUvkwNhxpuHQ9oiryQGq9EEh9ychhzBmw",
  "key14": "4e6mbXNNAS6TC3moPB9Tzj8f7gxT6EW2UiN6z4tbYk4VeZxEwVAp9SrbsFS8xaMc188uRWQ1pMzmXVq5AeuhKiJs",
  "key15": "4CbDuZRmJeGZAS3k3ETYbRUvA1Xw3EtPVncHiMzCYBLBM5mvD35ugNupRhwnnYKKeNDjv6q8xWeMnyuAZK7deRsb",
  "key16": "4yWfxT6kFo1xosLfGjmstBGTeV6WTgyqvZrk5oT9RgpDhnvFScTjCb7nqYqTprpo1LLirXaWF1kwURsREtCC2waY",
  "key17": "4rhgZizCa8mVJaYouCirvbGf1y4WkRFTaqZW2UmBbHQWAV5z87hvPZcwGWSim5Mifei5rXnHfxZZxHuXBHkihQcW",
  "key18": "5q4yNMqx3vDFEsR6DLERHjp4girkaUrpehzTQ7xiEubJwUUKsBrnJjkouZsrr1FdTP4wnRQwVTA9sfAucwrTa3fW",
  "key19": "5LGDPTAH1FLRD8ms1g1Lze1JGi4BzSPxmA6vWQSuTth9RbVjJ2eNHpFR7fNEjk8FGKoDywjLMZgMRMwmmaCpMG62",
  "key20": "2ptuyTg9GdTTrXHGmXPyKmJaWBWqCvdNiyYBgc2B7dwEHAU3ZLygA68ddW9YRi7idGUpWA6nAnmMU27nseWD1G5H",
  "key21": "5vqD8ijdEc6wWgzjQYsRfQMHZB3AmyniXWLNzsGb9kYkr2QkAPhS8RRns5EzLoxAiwkx1HZRxtyyExxQKixJY8Nu",
  "key22": "37iK8b5jZnFZFiWPVARAU64VakCpQju9ba2mQ5c7QFkPXtu7d5i1qW1JoLewiPK63oaW9Hpmt2LpS6Z9JpDrjNHm",
  "key23": "5uqK3Z7JTJqKYi16LT2NDmUtcJon1DDDU71iUo7rrMzB3Wo23WSGQJpRKUc2GK2FDDeJVruSVsuKLA1rSqmm76TC",
  "key24": "3gXHEKgsnPme6q4GTEH4p8UtBGXNMQCveyugAnv3Mfuk24FTSEMPfGZ83arEjwjBFmDkJJ9Z127tbYPiaPwotABm",
  "key25": "2rXBtXaqeKvqU9QbG3Rc2hyMQh7u9brszeDGHQNjszx5hrP22gFGSGmvnz9sHmTkssqk7F1NiKkhuFqwjZg97VKi",
  "key26": "4Ej51UvDLuQALjMS4xupvoVrkQuitRLGCYVmgn5zUoREAjFdCwh11cFhxF8uRfpFe1urwTmwrwaFuGqsKsDESsAm",
  "key27": "5rPwukJJcMwMJyWpGxugu1PJt2dhu9eFmN6Tv8fConGpcWs9uq29ztDrbiVPcxi6zKCHM8kLetWPQhgNC6EYLzVu",
  "key28": "5GLXjHDK9xusPDQX8ZrCAebzwt38kQqDLgdAwudnXJLYBHrU6pD53qr57xaBpVfA5gPwC8NKdghULBnMfmVRXcco",
  "key29": "Z8UYFpByEpzCHrrCqBRMq4JMded7ExSdXajQipfRquDkwwfncCDZ1KxQWVL9ua6TWfM7M1sAR2ZJn3hHmor4NbP",
  "key30": "3UBCNLV9ondGnFGErV45dTNUi4sRW7tKAKqQzauaLvbyF81FBmfJbK5CDAkrnfh2QuQf9no8GYDM1X3bF7zg58cK",
  "key31": "2Sg9ddqk5wCHUV3w7JQwLLpisscZsckLE5zzo7He9XaNEM617SBCrprN9i9Vpf1GzezGyf6j3Ayaa5g3ofue2UXk",
  "key32": "x1VEcJVT3kddto39qa1WfWFHLNxTW6sms1sPvSzieAsuEHMrEFviYtdasd6Yfzy1FtK66i3yv1x6ZQwSYVGLELP",
  "key33": "4vcJr4zfkHGaRwawoNxv7Yb7H9Lco5LeMapS7qwtTSHwD5i5z1cSgAdCfNJLiH7BkhrR5VFq7eBEhqFosThTUwbQ",
  "key34": "2wD1F8BykSBozwtZbKnxMZttoMZ2nr1VFpXnK7MfnAeoXoc2X1VfR6rDCcYJeD7VMZF796LSdJnFxiR1NgdHUDRS",
  "key35": "63wBL6o72ev6iLj11Xzb1sG229oKuXMYR8a7WfBU58Kk3E5g4y9SZ4DKLd7faPeLAAH1fPFiEZC3hcdMxdSRbLD9",
  "key36": "52qUtiABrW3CeeVwtjaeHmZ8HfdFq6PaNCCPTzAncNDjsqtS9wGaYmNrW5pck8Wi1eFWvUhKgKixSxAFyF2XZD9k",
  "key37": "5nwFV5p5bCviLwGGLokjpF2x4FDvaoXZo7hsDSnWSxvLbd1ZJeikN2Zd3sAjZYV1zpPH9hDSgXeT7VhdCfqFqbDV",
  "key38": "UmspCFC8PhG7Q9BwkhGHiN6kpVT2uu7ECKQfuk4JHYef2M5ppbu8YC5nDUBqf6PM45G4Q6dUsgd5R6n33UgAqzz",
  "key39": "4xSYiX1Dv21DLtyQMTXp1XyELu2pPvtJdZKaE6i8Ph8oaxKQwzhq8pbQSQMPQ6JbVt72MzfuzRy9CEH3xbpjNypN",
  "key40": "CraFuZrJbpQ8NmnRWAmkbQc4dqSMDuUSKzntrAmu72eg6BBTWRNkLF6Xy3ZRdEENF9kxmwotd67T7M88tXLqz9j",
  "key41": "fHAgS4TBvhzLXfddS2PxcsUqEqkXFtAqRiFuYw3YeHo7zKudNvxsA6UUFDeSBCHL1MF6zFbbfo2p3h1KwVeyt2s",
  "key42": "4xa9uu9WymjSCRHw6e9LZNdnBBzJxnRLfWTbb2U7QLnTRQ229cBiPSt7HbFpPNxs1bWR7Hz61wZLMuFBT4UTqAjZ",
  "key43": "38gXwUVm57R5cBUuwj3TLAjH8oXQkT5hH4BLNTvUmBWYgvmdkszwhL7SBSFM84oKfnn4apqNGWHfXWU2Tj1L8Lbw"
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
