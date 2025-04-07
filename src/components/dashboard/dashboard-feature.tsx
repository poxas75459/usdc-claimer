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
    "CPLqEWTdwE2336bhmbUCN6CXBQCyKkLaQWHA1QG6mCRxmDzFrYVPny47zBTotELv7ivE2M7Rz3MrFgzusJNshEQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ABVwKFdpYxEXWub5x6tsRJQGWhnAudg6yPvWuZKRQbmaRvLCx2vK1tMXhdF9gkkCKsHE2YJuhKcoEzLnJ9xSyas",
  "key1": "5YDGroaVS8BKrtHcF4SS4Q39vGzN9CJxRafiLKWgPkvz6LEiP8wJAXa9J2aLu4e41UjUmLPzXpeJPi35L4JPSfmw",
  "key2": "hJdLmhYiXwvpoFCzZn63kQYZTxePreVvoLBCCcRPA1fTe92XmgXsd2FeeCUeBdGiBew3UonvXhQBHxhkXBuoA4a",
  "key3": "2J45dLmGh7QEBXd3YGQetibhDfyCEuGHyJPmSEZxjHFyyZ12Ajvt7KbcMTwn5NESBpXj6jA4TdkzV7j6Lz5oFS9k",
  "key4": "5VWCLr8PdfkX3Eb9vaat4D7TSTrXFPG4AkCXype2rqKVkaVkqrAaQr4cYh1VrcntJKUyEX7RqspYLuQZCgBy7S3Z",
  "key5": "oqBUerRqQpy3xD8pQUNan6TSndLWm3DqLYpkTCgpMsfdJEQmnjLk4QpYnAiaTYsDRKD41kW1J8Vn7hBCHKVW3YJ",
  "key6": "56msudFE8bVUfTAhB3Q1JuHyQ2H5x95pXepNbhNefMVpMbqqk2EyauXR32qPqbNaQBZdBnsgoE3KtBGxzP5hPCdZ",
  "key7": "4kfp71ZwK4up5RePS4qdyfSasMfLFDPd4zUaAggfaC5xzJ6DiQWNqRM11U6LeaaemVzC3nnHsdEBJt9yefDnjFhU",
  "key8": "5teZmtC6sfde5ApNdYGvarMEAHKPbnP3AKCH2S14MEhRWpRni9NQZpazUHRY1PjG5FYmNqoH45miyEjmByQAAbwC",
  "key9": "N91RHdgGcZR5sCRxJSwHjKPudDt5MyoBh48MWPEmHViwU2BuJXEHUuDdBSCU2R27mCrVm5Sn5PW2xrpLX3QMyRs",
  "key10": "4Su87W7xk9jtFAYL9EQW4g8HNuTqNE8Nm93nq3bc3BimKeNGJcEsktT1sPU8jXKcxRKyvHVAScsbxNLx2GQtDMwv",
  "key11": "5HSX1d1kCFsd5PFJL3GdZifTBgGUztNuPsnsCzhiUB7sgWH4h6LEtqQJWRCqqN1U56MWERgtcAcA7g3eJazAvrmn",
  "key12": "5Ca9Ds9ghCxvoKk7dTZZe1nPpWjmKyNWKm6VUX53viYtdnm1GwaLAik9BEQuZnLdGHGKBaxhk2oGz1qJLFrBbiRH",
  "key13": "3hwWHsMq9t2CkjHGDuFPDHac64wtgw9KsExuorZsAU36oka7tMzXynJ9iVVM3Zfp3mApzLQehhUnutr5ULtARjdD",
  "key14": "2HsWHmdarBAjF2qEYj36rH29g4T3yji8kqnHvsaQj5YwSiMKD1X15hVyVaJtZuufVUf5KxFKNFJxt8r8bgFsYFqx",
  "key15": "3WjpbyPQzEVATNcDsiXS2JmhTzDUkqR1YCG88ePxqWDoNNFJFiQD1FcDYKAyFeNC3287eN7NFQ9KhpQqqYXj2V3n",
  "key16": "5g81uwQbtJUFW9pgzeQJNp77Rtq9JZEp82gr2y2YWdbC655vtNPqQqYdEmtdBgz9ghmqFg6HbwehmadhGPnkhZca",
  "key17": "2fkRJkApaX4RrG77gKdjfMpjYK6aypbwftNyBHrsFQtkAaWavZ3rNFfVXMC2GLVt2v5q5VcsUUpeTeBk4ruF7r89",
  "key18": "5eJaiEknsYcLeFeKP76Z43RYi7cHV94iYy63EoZPKTGLdJC1ir87TPYwLbCR3swrwgMACYWPsMHw7G7QAsMPP9x6",
  "key19": "4DgruvGHBgpQ3KAvtKyCTzVvihhi1MNMAYhTYD9cH3LuF2M55vc2cAS6oDetjYqLYhepofEFyhPZ3W6fTaw8mNxy",
  "key20": "9ace3dkXftVk37L8DocPPR54mQ3DvkAPLRTK7gSCyZLpjERghwfkNkshv8uVkHUkc2ryntBYGkHDd3j2nFQVDxD",
  "key21": "KRpNeHsnQ7ZA5azmkWyMke5NcabFYnmEwzcRVcbs8GEtn7eSvHSg46HHgVqaJWbJJmpzwCtEnaQXKfV3drmVh6C",
  "key22": "4xcczb6wJF9RS5wGKzBzp82FCfzVebTpmimnB3B1E6fDZDNdrfhPDah2KYmWujgpE9qg3iDp8RP134gUxniHvCUV",
  "key23": "hcWfTc47gyoY3cgXo79BsBVWWi5kc7jPMSuE7yyPhtQoXSje66WF94Ri3JAPFn5Kzq4HyVhY9i3imZtEMAALHM6",
  "key24": "4wRUcQHuydWCCveR9jdbFd1WMnbLEz4Rm6SEkT7zsWvKKCxc31Vov3J79gyitVDeBRrkzebBbjwoXGsDKGceD5SG",
  "key25": "uDnPT8JoFi4PaLvo8DVfEGGTPsHWxZMGBnC8UARUU4P9FqESZEoHQuft61gBNjtCTRC6Zpw97JpBubbPAFBMgYy",
  "key26": "3ucMbpCHhYLjtpUpXKCFW3pKmbi4etPTqN4hk9UqAxnJqm51DLJxxHeuXteFkrNSSy3nd9GrReEkA1cPJNhD1EzT",
  "key27": "31xV6RzmQjiVaAskxiAc7tQoPQEW6ueLZizvqLpLhvwa339Q6hHWDEHwmsE6FrZkc1yQzmJy5j9qnQcDENSEcWgV",
  "key28": "MstfR3n5KsVZZqSh1ytoGVpLQ1Jnb9czVjsgoKt5FTKaFRTeyVkEiJJN2xBz1VgDVEJU7HCbXAfpHVYmJxKAajU",
  "key29": "2Eu49E71dG5gsWoA96VUeKZiPiAJgGnkUxxLg85LkVGWFsWfzyVExzygbon47dVjqyU3XJxFxqvjYerqhUU9XtM8",
  "key30": "36CmUveeaAuKKXU2Jbd9tHsRFQ7oMc7vbs7GVt1s7N5tv59wVa8S4scHwDo4heU4gdRDs2TZPhguXGwX1Drp4XL7",
  "key31": "5ddRMrCtDzNnfDHcf82tuZqywrs9AbejRWYLwTP8R9fA2wTeT6F5sC3CpVAYJcHqyPr5TKrLzN7Zi9E2wwXWqhMd",
  "key32": "3J63tMtkdzdQdXnLsUgi7L77SsutVJq74K5Y7ELWkgVzCKMQV7R1uPCvQx2WdLwZN1P3JXLMw3H1XNTL3Mkjcw3U",
  "key33": "3DYVhqckZrv8Xiy5CoHEut2c7JdbsiPH7rYRJX9ZNTyutLz8zkZDagRLzSxED826jefsgPh2WDLWFvgPmijo8oVr",
  "key34": "uXHDnBMgsZFkVK4ZvqoWSATinYmMiva4mQboFJ2bfwRRfkxL7rHaVATzwvnxqcvQx8yzdwF9CizozYj5n4wGdJc",
  "key35": "NAhUfkz19BhSLLQjnuRhmixbgeQaTFq1ssgRmKsBePwhnyK1TAGbVaKSctv6d4REL7Zts9FukBQqwcQNGCRPMy6",
  "key36": "4Xv8Dhbyx5SsvgZ3oKuDBUjYBcV6TZDhvUsLzWzX27TdRtzdVvU4ygBD2vBXH6Ybp4v1CBRecf6UQ4xL7aTCjAgj",
  "key37": "4TsnihqSe8cFZmkfKHFPa8yxvXbhXmGzQkU7vUX7Ra2wPzAZU5jqAExXD45XJuJ598nuei9EZo6ZGJzj7ZgKMNpK",
  "key38": "2CeEw6ELTGewshYA67DDvhQtmjcjDLpnfqxTwQGmxZKKh1HPapGebhCS44kzRkcBSRacoC32vhNgDbSyNJX8CAUF",
  "key39": "5dDrpsr6nxc8sqyLn9NU2ggqJ4rEm8Zo3Ytop9csRQos3izxdvU3WZd6poTH4Y2MFzfgSAKuWBP4g6U21QSM7CTx",
  "key40": "4jCqgZj3yEzBxGNGvFGoQ4DQ5LitkvbdZmdfsKmqJFDZ5U4BakHs1g2AkQKZSMJ3HWWYUsaB8n6KSFVZ6SSaeazP",
  "key41": "328EBP8NshoYna9qHGbZKeRMXW19Z3TzdyShtWgtRGuSLShe5mccSWkjK8cT3r1LGXEgjSrBkNQgMzVvUjgsQgrb",
  "key42": "3DME2cE6XRwSc5Ck5anzkfHNwVuoDYhV5ZE6WSqGiyJVckgRmNgNjszWegx19ryxm7ivCiUpzAea97RA4eJPXCmJ",
  "key43": "AEYuqRGzr2zPE3Tk21JrRXMvzMunWjSMvGr5gkiZUFDWvBXk6F6hArbJSZTKR8Uf3NqDEKMGEPj2CCo2cMvwrqh"
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
