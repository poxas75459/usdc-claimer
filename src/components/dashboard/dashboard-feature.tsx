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
    "5kJPZPnhbE4E2kgeJNFLKgfLSWHMiEgGeTM5MfwaTYroR483eLyLkG89kQ94oRH88sW1FXmzLS7SpV4mKr7gcd6x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XcCVLD8K3SckLV3ZFEVzJwdptMCFnTevNC7TzyLKNXdZnt6mno1Nz4jn6tm7zds7mxBm9WVAY9E8fBSzLM4chiJ",
  "key1": "38JEqkfmRnPNsU1qWD2gzW2uh6cbrPMUmtF5eFDtJXBLze2cRjWt742jSYWgG8DfGm8Y9RhLMET5D3jenZ9WWi6H",
  "key2": "L3qPKVXMHzWeGoZ5dZZvRGPSEEFDj3w93VGtpnAdWs9U3Rarx5FhXcn8U852N3GMyMJLM9Kfkb9VDfttR8LsqLX",
  "key3": "3LWLpDY7S2prouh9B45xVV9FzEqHRZsER8b6ESMz2foTZsy62SHx3Lwfgr58GbBg6fFw3tdKk2icgLhiwGfbB6JE",
  "key4": "498zU2jvhX7Wx8iiHjLL2babgDsrn4Qp37DafW8AbzsDXkUa2LZGynBomMRavcxXYJjwgw2eCKg6rhinM5Ba6dir",
  "key5": "221vqmDn5os3KDemy1KF88b9UL6gS4PbWo47iAvPwGG4YuXMrFUH4wSieyqL4qiEWSLgpFuL2sfUzV2QDjorKayw",
  "key6": "3BjwaxLEDM3Zfdq93A1cTRwXSHrD4CoeQRhrbmvPQZNYETJg79vJFExJ9emrzJTxUtxjsuav1MgPM8EuFbwms7oi",
  "key7": "2ptudrBPsoYYf78Bt7qMypXWeNkj6bACofQAEp1ehFWkfpHaC6FKDt7gWtar1ocRTRwV3twsUBiCpCrar5Eb7KpL",
  "key8": "2r2sbn3oGcUAfLkMMQoRHF67gbBuBV8dGxdpHEKCJCGavFse1K23rQmHDUgEXrw2UsJNFYevqzqoBRtzxqzbQBvA",
  "key9": "4jGsTst7pwi8buWaAyQyowqwzWRuyicTMGbveL8ureQDBPCgRNoHp3UuW6KSTsLr65reiundimR9ceHg2tBpmpy9",
  "key10": "3vdFEM9EzzTEpTKhpB9cxuD6VNfUdrqBozSfWnQEnBXp5sALrAUKtj34zdNYLqXWAfHAwtRwRiuBHHgVyPVRR7Kc",
  "key11": "3BC6AG9nNobwtMcwax3eYWh76TXtU6s6ySnhzJzVTe9UAWWqstQY9A4CSJ7ZSKctAqa55HkhR8PoYq4MW8WSpaQL",
  "key12": "3FVrKNgXqVhbrjJvVEAs23hp1dqSZn1edGjLRaxsMkYQGMBSxGyPWu6s3H68vb8Bp5TutCWcCs8K6euaGiZEZwUE",
  "key13": "2iNgnVTTDQ2x5zM8Q6QBBz6JbBMLg8nagzyRM22cwp3nA3N84qXxyKNBmNLZKneYYkfQQJuiT8HZvFCcPk9oyx85",
  "key14": "3hsdLqAVosYXZ2bd6brkdegpELdmLWguLNhz7mgws9Lw2qkEyzgtZsgWsqJbL2gavMhcPsHs9GuimieMB7yHqHof",
  "key15": "5Tg3Q9AwgtvQ4mP7GX763gHqbT4qv78kdTYer5DsRvrHMs41mbWpPyLaJPgmVCB3HTFEfbhB5JoebhG9aznjJHwN",
  "key16": "5jcafKBeMApaTiTaQ6DxfJHeRjeviUXem4opkjhuFYpQaH7SQ3KbarsBE6EhZCGGstKXb8RvjXBmxnyoyT4o7QAC",
  "key17": "2Xe26CmdT4JvfnHj7ehXq5yoxzbP9tsFQBq1DYRm5KasTZKeytF1LHTyArTLu8tEKPxUf7sh8furZWq1Tib2Lz2q",
  "key18": "5CLrBMSnehPF5knDfgLGEqUrjt5unbA1NanEediesYGDQ3iJEuUrfVAjg7EwszpVQkQMatiUdSNWjwQEbWmoYZGs",
  "key19": "3qosLzJjjMQLgVTY28Da233WxjWY8qB7XAKuQnVXtTDaaCAo9zT6ZzZYY8jJgYLLFu7YWU7crrgsqT2V1VoRDkcZ",
  "key20": "27VnDgtMHFAyZLBwXHhY8F54KbSBk5PS8xrdvMUexZhkmoYeXBVSZ6FVdNZ2Yd8h269uzmE3VQYZdfiS9EJFEmZh",
  "key21": "ofoQg9ADGxiiCBwpY8nUHFV8T19RjzNi4SJ5jy482G93zaQQhPvoupM5LLNXYoPT8Bpr8Eyq5k1mJoYCueCQVhX",
  "key22": "4czD7ytx5jjLJg2kGTfDXiK7wfq4pPTn5r1tP9hDEp3z3rNwLfP7ETwamUFBRXSE5YtM5zidQDQPitnq6o9SYKMf",
  "key23": "NfffJYbL45Y8obfYkmjY5MfUZCFky3quRm5G2ptDC4WvpvJNNPncKpggBdtpgQyAAbWeGZvLtwSCBbAQ2DRtRJ6",
  "key24": "edKAkrvfuwzCeMJbdEB5cdNCzG73Bz7vtyEjaqCVFxqHdYyvjjgDeKnrDFCJjR3ntAsQdzotVRTnQqG474aoUUv",
  "key25": "CTuYDPDp7wjCMhZZo7N5D6weWZCPeo9CkE4kHc2JqPVLVp1zGVy9ZZEncVZ7DVMJgzhycFiM69JbomR7cEmHHwJ",
  "key26": "39TjkB3QzhoiNWroLt53bTWrhUGWHzMNXoonHV3R2Mnd4DwLSYVsBAd8BFYiJ3gJ2nm588MuU7eR66M9Gec6S6YY",
  "key27": "3pj7p6kynvbdMbq8LQ1WFEUZ1yDggtb2q7oyRXYAuHn2fGLzBQ4PhaXJKYAmRGmQFaVcFarNeJCm4RAVHaaJDrte",
  "key28": "6eWC4iuhFgJ9C8LxMu6hsZxRv5HzwtGkD6XdKDR9SuVezMNja5QEXjneqUh5f9LwoVV933fSnFLTS5TJV91KwMw",
  "key29": "3kZJDorT2z2yJWpqmwnb8pd33VGw3tEyfwdAFr7gb1A1pyCzShVkhGSAJJHKph1gCwVsxTdcni8TtpybSnw9Vfp9",
  "key30": "656VURuhB1xftVSDrfx7TEzyNffAoLLF28A9ap2xePDbzDofgeHCJzzDu2UsZRTrBVrHdgZoGy62XxDEzqYFMb44",
  "key31": "4wAYMjoiC59jRYvkKGDkoVKb2pwR2iyaaDmxF4B9SutYAfef7mkA3RiAPSxuQnRcGQgQw4Fvu2wJtqJozzRzrfWf",
  "key32": "2YYyZaaxsDZtCJKHRXQdcEZVdeJnQ4Zue2rvdjYBR9gVEMHE8jKChtyW3KpN4m1E81LYfFHMWWHj8Ax4muDSrDvE",
  "key33": "4nCoWk3GrqC4aR6Y5fkqVCYk3VEHMYGbnQQwMG8NMR1sqo5vvER1Kjk2WLKK77vMBSAKuHkyL4ruLPYN7znzTJAQ",
  "key34": "33cYxRXArzBf7SN19pta1odSjVpZXBLSYcDPXvNzk5qfXpAzH9h8DKg24u3FNPKTbJneAeSprVknxZtevdWLymp1",
  "key35": "2XRB4Vdk9WcaJnserJMcSjiasEFdxYD17o1ksLX6cNvHZehS4D4z9bSYJeJ7T7EeFwFKQodyFe9pjr5V89Aaz8kg",
  "key36": "2Z1C1Wj2pC3oi7s2fka26jUf3Sw3HiJSqZbCzkvvdWn1dHcCiyrZESnzUJnED2dfWB9Np9YpPuzCyMbpCHy7DBHp",
  "key37": "5wK6Bho2VV1caKgsjAkyxXXf7nprFWTzeBDLdrfh4SkhEgUV3uFFZWKk7qAibZhHZs9SWA8o2eWoDSFyPjdB8mRZ",
  "key38": "HgjjypSEihx8ks8jL3xy8uQwZpgTbvWuArtaKmQAEAr9pbNqcK68ZakxqsTiNins3of6Ye4TFSxWz8azwumgHqy",
  "key39": "4ekHArXYhbc19NvswW21EDQsiS34u9HQKjjnSJrYuRgkLSpjQKQFxq29ZadZ2FdHwVNtufspJZr2iMKHDKPwyZVt",
  "key40": "43uiU9gexa8BKJgHArEQc6vY5Lv3vTykbTG5VsM6Mc2RbVzdKtv6Es8rUDWRj86jM2wz5vwzBmagFqrNwon2bNBq",
  "key41": "5w6Z3FkWNe58Gdn1Lqj1Uf53yZw7NH8TycfZAR2xh8Pi8kny17cHHXPyWtw7Jn8SJAvzvjHmwi917fszXEiVm5Gm"
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
