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
    "2AUcWteySv85MF5KaU8WyDBimq1FyfpXiZyHDSJTqXFEt1XjKjTgo93LQHdujMUU1xcbwNvfBsReoLaHUQJ1YYwn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rYsRp8RSCqNmxWdacpZZdCsn1Q44Ahhufx1hTbY74qZtMbsckR2VP6bZoAGCDcod7BGvVRuoVJUbVLoE5HZNHnc",
  "key1": "3hvr7YDo75P6SZauzRhKN7Lgvvs1nCHvVG6BL8DhvSPiooFrkdmXUAoQ1VgVmUzsTXhq5kEr1iuXzsb86VwYnz98",
  "key2": "326fjK3Z1UUsLvSC4SZGx2TbyQUaYLvxiC8Zjavx38QU7z2XC7hTRKyYsnjgWm1fWHt5muugS4b5eVmoeVEimPRD",
  "key3": "2qni1jSSKsT5Cyi2J4NMqppMCfz8ULHYKnp3vagwoaTHarFphGWtCo5sVGZXsD9mJ5MkabPUdWZurRJ4E4tMyXYg",
  "key4": "3pbhTwJyDCf9SzWhSVTG7EpNCiACZbJN3atoPVYpYRuUhV48MLC6aMfoQAC16f9NB6zvR6wcQfUpMcBJuje8c66R",
  "key5": "qTF5PMP9dgZtdwQixYE7Ze5jDmSkXbMBRntBUMuk7VfXUMXSp3ZEdLaLpQqj9irCKddc5YVVz7LuYZoDukkLMTn",
  "key6": "4kXzAk5S8wJqwRccKo1ZrE8yuWzTWPMdAXkQPRSF4Bn7rEr5f4bU2dUfZ4yLLHsgzSFXn9X7r9FSq9ARbTUBw43C",
  "key7": "3ZUwboXB4G5i8D2vGCseiwrwdiAaznjNkygEfhdS4uB1p4kn5w3qeeEMaFzghRFwkqXkQEUjqRC9jzCvJXBZiZXH",
  "key8": "kSzFcQxoDJJrcHvT27EUpqbggVgfu8uzqRZJaTKVEuZsHTw5kgq1dQSNg4LQWAeDm3qoSYbfcMY8eb8RYf53ggB",
  "key9": "65GzjsX9xSboSCzDHsyTGeE5omvqq5RTKrZt3qKLLK69Rh4LExbqoi8dqvi4uArAqAHsh45CHmxVGU6fvAzwqyWa",
  "key10": "226auxU57FdM5yjwBU1qJAvYEuHtRxzPvdze6ktsHZ22bbwzqvoakevpYRfuqtYBVYHEvQb3LMJBf85rkVMU24Nw",
  "key11": "3nLUvv3ytUeNrrCdCqR6g5cBjvV3hqAYJTXCcxzNJipjpVKZkw4gj4TBjF92X99cZUwFXnwwuPELaEF76tap2fa7",
  "key12": "3hXxLRyrtkBpiufQtP3pZrvj7xHS8sMpvQR2dA7RWPztBE4SeGDacEFUcYTL9RSHWXg4W9oqB16oxBwa1RzyVYic",
  "key13": "5nkPwcLub7yU3wJH5A8k8R5FrQJypaj1A6hqyANMh571WmD9qddNS6oPaeaxm6LvgSixiPVQHEsF8QoBUUCeaAMU",
  "key14": "2LAMn2QbH7Q2gs9a8yQRRyLwMLvix6ZDVRDyNHt1Ge6esnmMdNvHoBvzmLA1848aFQDPBHEK62VM4fHHNwqmwz2p",
  "key15": "qZqXwKXMBzCBzv5FFd7H4KhjjaDbRu8meSQukscbfcFxbpcnSHLKP8kuT2pQnTHn2bRQuvzfPR6DweCKGv6CzP8",
  "key16": "41h8fNPxt6EPhxuzGJbTrxYXM1viDqo6mdLvZYArdiQh2FPdwuworebYWu3rUz3YMw9oKdJCksNeZgxsamhfVoVB",
  "key17": "4PnDYLaXNH66MxeXbnSu9WeXhgANuukYUsMhMxCzqHkCEz4pVKv4vy2RCQnPaZjx35Nm5QT4aRfV7KgugjLK3tbf",
  "key18": "3tSFB9M4rBSfWsSwqMGpkd8Kqx92GFuzz2LQGmc9Vsi1fqr71u1eT33ti8DsLPZxJr25eaNT7Aa5sUnWmZHr8ccJ",
  "key19": "3QotKJ6ZCQPnMQYVkMsdFbxQzXAQF3J1UeS5XpWTN6p7HSRJctfs2TiBh1PYMLfJKoR1KfLmjMwUyvJeJYWhxEaJ",
  "key20": "AVEciknvrkFr3j1vPEhkpHAKmuhXaDDK8ZiymoY1vMgXJrecdgvUPazkxUE2MwMiv1uwt4x5VP8DMe2yf6HbBUW",
  "key21": "5co2KFqJgJGCr5tTL58A2muQugEYoRnDxxGLp1uJd6mRuhWvRTQTKkiWghQVNBRhhuUgYZVi3sbsfShG9ogxDcNA",
  "key22": "C1rN9y9YZrVuX8HBu2LM5cVWjjmeh8tEfdyPhh29VhH1gBPPCYBTfYoRdq5trjfHBFGCNwJpyjDJ9JoGgwMzJAs",
  "key23": "4YyNFaqZQq797Fv6ViY3LBSeDYoRqfNjyYmDxg7fM2Jp35D8G9yBdRqNNr4rjSm4FXiYwg32rtM1WuGS4dRc1og",
  "key24": "3rxf6PtK5UHsYwiZyGdMN8RNSRQC8m4DRKnPSs2T7hmiGS52Bh9uVyBi3uo361cikw67gB9BrR4rGDysdsVPhYq",
  "key25": "k5XcFWmMRiFjYVJd16y4Fvn8Fm7dTEcWUrZMyEvpqrvQy9Fmr1NXWStxsMGw79fXYPsiHBP4uAF3H3QTGTJMyRj",
  "key26": "5yktBSUAbU4j1p5c6LgvEPJFTzToiAz1exStb5GDAbibj46c3zMQrhz96jCxe18KhT14HAUQYcp1j7V8Uk87Kgw9",
  "key27": "38vvqX4wPswKWztVR1wcmxkDaXr3QPF1vw1V9xdRVjZgbNfXFtGrXkGWhh5GVtVMoJtFn6EHDgQfbujN2dJtnb66",
  "key28": "2w7ngyga1rTYECH6jMSQRNawP4J3SBgDQNhvBE6TjaAHzmBsPZSAB2zVR2PTw3GfgH49qYUCqaMLzzp46WjtJgYN",
  "key29": "teTNvfkctaxmiY3U5EWEhhqYqMSN7o7aRVBhod35susCJKo3Q5u8CxG5N62hxW5NCeZRQ5JDbnG46tFazhhTNHE",
  "key30": "4jTamWfu5KQAqkviGCKQZmsx7AdqeuVFAgrRJszWaDd1eg3WviMcGn3d4P2HRiEQjExw7jUfDMFqXGaJJrBpT79U",
  "key31": "48YiAUyuy9ZBpjHJGMhVDFggAJ1o5kipuYTKJHvDf4GZnM9hnn46kUbdWaZMNYtwWbS46Pnb4g89zcnB7FSmUJjH",
  "key32": "8bvNcKoQtConXnQ17XRwpjNMyHnCp4qVSQKb5KPcsfDg6dhggQ92TrEukwtFXUPiBNe8nkMYtQnBEm4ic71TSec",
  "key33": "29Rt6hYGcrfb9Gfvz5xx4ZZXtaNNKKBu6Km8Pbdrs8nvGC1V7nnQzgQfo6oFCpdbXbDurgqVNZnsJXk1r5i1uERo",
  "key34": "35rDdUEQqJWMeN3Sr4hbs6b3ZosDgR6RHYaUbJsRYYyUu4f3bXgrNGggiPD5royo49WRQTNUNGZf7n96GKe6Bvxm",
  "key35": "5tCyUiV3daBXP4ABBygxupCKvYCEcmXE59VfLHMKXkdLuGrbF9eXtfQE3qYBQiDn9eQQLKqAJR4DffZtzYL9Qs7p",
  "key36": "2YBMzKxMW2DWJEsdqaYVyS6HS28qroYye3d4zRHXtayEieptD1jePxjmVwQd5hRM9gPVqL46G6DRsa4SYadp1zeK",
  "key37": "3cMhwGmbBssC8XQ1wnZZru1RjhTYoqC7WMSgnqtaSKZzkWD5wb8q7HwzPKzTgmD7jyMG6SWZXNbZ94MyJrVZ9HUB",
  "key38": "3bPAoXbZXpsLh7ph5WAxcm4gcSEsZoJFmUHyvYzWQVQpwTvbze8YJ4V5jtf7iDJ3FQcDWQeLVFBbskkiemBVtqFY",
  "key39": "F29jZVtU1gRkxSYjwPtvgwV4NN1fdAdddbaSfC8iUd5RdGsR1Mxd4hSC7HAmdk5o1nCrPdX65aCsEGGVCMUaMVM",
  "key40": "CdpBceEUGPrtxtMsiEKRtG4LZouXX1fQNG6yhCJL2rf8rf2hZ2U91FyjLU9QBYoRvcm4P37rMr1TnM3bTXYNgiE",
  "key41": "3RLd6vSr3YTJXFvW7MSs5XAowMzgnTcA7bHX17iJ5qhccDxG9gr2s9x2gE8BqbDWamk1Sr9hBUf5ziSjDTUf6SSR",
  "key42": "3EBhnTzmGHzPw3repgw3Ka1xARm4JSo3YBdKfNHyR3bopQ52oWCT1436gQWTBBABzvbmcS3JUw1ow6Wqdi52sQ9y",
  "key43": "4vJGSbVvFjo6Yz5Mt6abnaSiRQwLsZ2sXaTsAWLjcK3fKPwyXoxqpqdU2K4yB5Jvyo3Vz7un89TLgnbTg5AicJaG",
  "key44": "3KMab4CpTVBERux8pTxT6VQxJVCX1r7dm3ZchA6ZA18kVWX6r92zLX3BB5imQprMB7SR3SjPTCYQN2xSoE9Ea3Tv",
  "key45": "5gE9tNgCvnrWLtba3imq81amzkyN5Du8q14nSzstoEDAJyTVy94C82UYaXc3H2mZipewDo4NfHTmr4dRGrENAS88",
  "key46": "2AXsrXVzsNc23AmeB7Mj84SNBX5epbLqNZ7V7cmbToeLjHW6SVTRJ7CgMoYVEeg3vV4Gy9tjWX1o2HbSN9HTVXqD"
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
