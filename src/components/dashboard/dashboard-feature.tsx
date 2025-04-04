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
    "57KApt5pE5Ljb97MMVQitQXQBnHGWcLd2Q4Kq17qgpmTm6KuvZwoHZCVNEBNrgS2ArniDr5fiKtSJp8rjEVfPXPM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HVNcL6Qkzb7Sjto8JxA57i9EQAdbXJ85bUvUhCPDx3MCFPfTdDZViMeC4iw3gf8vCUThpoEFZ8AYSkNaLGiTpT6",
  "key1": "3HYZZuPD5tKqfPG2Q6jJoVdUjvBNA9Aw1NtCwE9oDJiieVYvsqZBgD45HEX1zr1ynTcHobmPFMjmG9XLnstErpkq",
  "key2": "2mhwLJF4ZXAi2e1QsBtPPXUz6tf9vqHUmMHxinuDKysWFFm1x3Jo9Ki5YADfFp6W4FMQnP3h3FNhFVtF24ATwuki",
  "key3": "5KuurdhvfDEi3PQnDbRDnpSavT5MRkm1t8o5J2FVA93V7oCMbGmNL186uppr7GYbx5GCTftQC9YkDZauLX6YrLcX",
  "key4": "4CgNyHHybgUoossXavaqEWtL1zVyj1hm2yhPPGD4nYgUexA4jEjb7VgGYmkbTgPHkN5M2v1W1g9LwazPpG7U3yVP",
  "key5": "2HRMZJ2ysw6rrnZTtGE3vqzonBZERZYBCjdK735HN8n7xy2N94NmV4abZHNAcVcqDScHjX49cc97ewQcSqMJBJfk",
  "key6": "2whF1QtguNGjcjxep3FwbrUur65Q1nds2Ub88JMuBPPrgpxKu5bQQUHVcvDrTreEgvzeMcU8inzAsjBPa3Sxrc2e",
  "key7": "3WjuCJko3SqEG1iBv77uCWvsJmg4URtPv2KXNqcAEiFfjCixsqrR7emRQwQJU8iiumt7Yj484j8G2kcLMVK5SXrb",
  "key8": "3EmUx7F3YZMpRMCbUTxL8gZkoSoAR8CZoFK2z6aiwnQkctR94VKKTQ8FRyF98D5w7Q1MBX2hUnKFkdiJWLKGCpdD",
  "key9": "2asaqzFRtoUtsCvzSCaqpkKHT78AfnQpZ1fvnSrB1BUds2m611mykuktqRrQ8nFBw42eEmV2nu6fwfaDawq4obo8",
  "key10": "5YvnVAKDVRqQFiEuLtwmn3W7YU8mkTcjuUL3r1vEna6W2AgadB82Q8QwSRuEJGWBtae5GSbT1ZaM3PXsP9g93bu4",
  "key11": "5zPphiPzzaegKYHuzfWHXQf7iVUCzTh5T1pBNiW844rJtkp5hs7VBuQoQNNBLZuJXwD27dv6BRktKmbSwTuvtQoM",
  "key12": "2DBmmof1SWYLtvpipULNeoUZhoazSpSS3mKHKJzdAoU3UbzJJMnC3BiPPKbD3eTvhb4GhK57tfGtTZjzDndXmsDW",
  "key13": "4EfxV9XV5ccUCMh6GVEXydq95fabfkg8GWzdHUSRFrbkxXKboDHDtjX6qXUiBxdr9ZNboYzxDM1zDAStR78tqHp2",
  "key14": "3gARYThjhsS9M68L1e6C5Gw3m33NPaoXGnir6febfWFJzmvzJ1vpmGqq8kTg4SYiobLxif4h1G6aJBrrY114iSYq",
  "key15": "5k2Huq9nhzmDnJXJLEP4BxPzi59t8T57zsCqB7ZixhK1LYefYHPnY5LRFmUqVDnpCTdRJH6rHEiX2yKWMiL3YVvn",
  "key16": "jXg7zUf2TDfsGoEFCv96M8AvBNXJAFKpaKvsYjG39uMk8UwHGqQdbapfuUjBD6Hx8owUKjDi8wXG7pGztqVzf4p",
  "key17": "5s6bvRW7hJJmPb8zd5vkEVk3pVcYE51VXVYQJ2ik4JkHPaCd9YKWxSSKzZtfvQX3cbCsL2nLGpVzHkLLfXoDGTkf",
  "key18": "4WW6jeDLu7dBy5nvgwUDEjA99ftVtYxpAcvuYrXUrG1KJRH9Yf37W7oVQsRTXXp85tsysSrMJLijPC9k31hnzdn5",
  "key19": "3yTwyu8m118h1k2JWrRevYzPRGJV4Te1xMFH7maM7znCm3e69RSVoz4XzWPpEz8aGCDHic8bapsgopQ9RCRJvXQp",
  "key20": "5FqEuc5omgyv6LMv2RcADvziVMA85pe1cz4CdjybGE9VJHDAN4ifXNSJB25bytdG2e7CGKgZeFqa51DME4Txj1ub",
  "key21": "2C3iEhnVyQTuo9hkrk7mHetV7ntuy4HtTnbqjuSto2QEEo8nxbddCzCmVMCTFMAqedSnr3gYvP35g94CrwfYS478",
  "key22": "4CZkEXP8QquSjs1bMsrnUwE9t6x7bkBGfztmxKQGxZnZ7F12hpJZrtjTXWVgsLczSYUueNFe1bvGQpFygxGXc9n6",
  "key23": "64uKeShsegoE6pyxp1WxYsZYhBPqGGWUuGxNs9p4kXAeAxN1S4jVrgw3gWzVLAMNytYdWXRqbcMynj48q93TA83s",
  "key24": "3auhwUpoj9cf6j5RmnvocFYtRbK9DnwJS5drH6aq7tJywR75dNJvY1efLhB8fZcLpPmU93GTfcSsF5jEPAWggzbo",
  "key25": "4FF1cnkzMRS98RgRv8GF8quJvnSbiN5eddAqBNxFf6VfPhEPWvjGoTur1R5z9vBhUZtY48JhcJHeBimoKLVpGyqa",
  "key26": "pN8j5c9MFXzpcUVqf6fUkEsx3gQtucMMqKSZTGU5MHjfMeZaP6NUJDjxWeayGY3RggyF8HN7Qr4yQP9JudH6Qf2",
  "key27": "58PFR97mr95oWKoT5HVNUAi9NMj8EnsvFhQXVYBnGGNwDjC3LiKgTZfvq3r4HLwvFfGemgeZnQYe5Q2HiVKtoLbp",
  "key28": "3odoSd2Bbmw1EduPz9QjMpGFBzy5Lni3HrrzvwvspXc9fLZzsE8rd7zXGfMzc1zizCVLy9WCNuPuz2gwA3Us79vp",
  "key29": "eQxqv9J3pf41s5qG2JQPCUK57mM4XLePXaa446XQtQcAVGSx1bucBTycSJnsDNpbhWPqY8kKZarhG62P34VKP3o",
  "key30": "symZZWW4Dtuj7Lh4ZHTXp7GgoBNXmTemJeDwhxct6cVx4kR39HKpqnrxELsNru73SmHDemZ6NezhKgZRMFjLsbe",
  "key31": "2JX6dxNTR2ku277rJSo4PwgsSJRYoeL7PwyFAdgE19YwCiJWQiohuxmrx5JqEo5SJBPqEPYbZihAPhuZtpWBqxMW",
  "key32": "5t6vpSxrjEER5oUqciWZV2p19sWibiFai7QHX73QTMfakZXeMf89gFiuSvbb6pDwXugCQBvArte62LM96rxm84Lf",
  "key33": "3jWhDifm6K6wtY7G5vdyaGYDCMHXvUCdH987DnTYDmyAgDSNoCrgJNqMk7agWk12V9QLPTo1ti8WgKLBYvtEhRJu"
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
