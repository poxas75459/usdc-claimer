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
    "3ckBVsrdWz6rQKwsidntin3xvW2dxg8mcwJymqXbMMV2BrNjsTzLyYLCCb9BZXPKLHM78EDFTmrygcmLZjuZf4ZJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wm1C6anNYGWeKUUPsMJq1HS8bPMcao5FyYjcBXd8Rt7eM6uAnutZCN6o8XuwfNviXsgpCSJK11rQZVVpP59juDi",
  "key1": "5ZyDfmcKKVALmooiNwKb7nDUibb8RuCJMrNPdFfo981Vy8t2mbxctNKhGPrAjmFJLnSBRXngZk5kunE9Xv4m5deY",
  "key2": "295KtRCvD3VaYPSc2rVnpyX1XUswBgJz2CHfzwyMprKtGZQzjoq7btE5BtqKccwb53PwYzmyPDztnciTV3mAen7Y",
  "key3": "5TusKsv8pNViFc8ECTRRMTug943CgBnDp548b19EA2GxQe6vNyFYWUmpKXeXg832362q7ybAxjrUo8jo4DGC25p4",
  "key4": "3FCkVgLudC6EwzNfLhNbnbxFE4ySw5eysaaK3QmD57CMFvv5trAXjoHaWZ7bTzebxnQkLnnf2iBPnXPKhG8ZRFnj",
  "key5": "4khZdZho9LbVAZKhtd6sY9PmEGMJPFpGbYbbsGSqzM64DefxqQtTfq9JeRNwAPMy8SgvZD1p9m8XH68stV1eMBGs",
  "key6": "2uEvD1zdxnjuzEqy6ySSZK3hzw9uaPTuiPSqoM46yruA6zjeuJPWVhzfJscDM2SbDn5RnXnPyRthjpUJP9sRyBL4",
  "key7": "2qtSax4pDyrENCwyGreDhKmCnJu2oTKa35zB2vnDGxkRbHBdQEKTwYGXxUzsrMiTex4tK1LVVEzUeJF95KHdXdsj",
  "key8": "2CCGUqF1X8xm6kNWTHz2TuYtFekDFNmCcLi3CkhvwEVkM6xhhT3Pbkx4MnyDcbAPsbAaumrSpVEaSFYWaszum4sm",
  "key9": "YZ88Zg2utrCvxiDdeYwJVZjSPMDbr4VCQvehmRutiaYVcfG4dJugihAhj2zHMLTv7G3hKnQ7xPB6FmqVMSTLaod",
  "key10": "32YtntgCTKTMw8o13X4Z7cyCHJxWjm4ChSwH4p2t9LiZQmAyn1FHeDNbKWi32oVRV3XeGmCYgQqkPtKcTtDaqaZ9",
  "key11": "3VEkyoUcraemMpTr7Q6a55WH3Z6Sm67SUKEHyCQoBn6PBHnagzBbzYTPPP62EsEN7aH6WrKLWXPXQFAmZakAzkyE",
  "key12": "4tWaWwmaUrQHneXgkiJhfTYA1wRr1cc12N1xRtGcYusH62zP8vDrYsne4W6eYJ3ya9xJAQGCfYW9RRd8BF57c8Kv",
  "key13": "5bc7x8M8PwwMe8jTrYGFBNBUUyrE44an3RswbC4A3SKvxPQQh8p7Y6gxjBQ1Aq7121oFj1dzwrZiU5CKLTdnwSDk",
  "key14": "38R3od7eXoPfyWr29dn5y2nE4nnjmoTCYBUbgzZBjxwDPkkh1Z5By7j87jCzX2mn2yorqtQhMYbhSR22LXRAQBpw",
  "key15": "1TruMTGeejMnFxz1mfGTVRU7BqGz1yYiCW1D2PjEz1yoDx7bw9A58AZ6C76KEgKyyu7t5v3qCe9woptnqTTfFhB",
  "key16": "2goopQCxxJMVHzuzu81KxvNWFdhfZPeYUT9xtBYjQnTAc3T4RHNRcQiHJ4AVRwFfZEa4p9k2fMBb1PaQGftAEdpe",
  "key17": "2bELyqi3LHboc7WiSUpPNF1mksexbdWuF1A3wwg5gxymKM6muK2FLDwxGFXaiS1cZsvda9aWKJr7tygcxu4DXFti",
  "key18": "5J8wUePvr2PKGqSi9ByTJir3V7acHaynHeY79iSKrTWVs6UQ2ZsS8Aqzx62m5Hbbp8kMpjyiXFPgNAoAq4fZB23D",
  "key19": "bNdHKXvWsfrr5kcsn1is5mw4k553WP3rpdkdTufxyjqWRibBHBiyaQnvL3tH3P28SRC8qAzH8rLqVhHCZfX2ELZ",
  "key20": "3p8HTNh7tvMNFLyFRXfwncJFAtwZF1G1tm7m9pRUbotH7BcRWpRJUcYfRjjFupmt3U5MCbmxKh1T3wXkTs9ZVrfg",
  "key21": "2FPsu3jUYz3TEyuTzRdQM7c25xUzzYtZb1jjZ1nuFKocCU7r6kuKcUSW3a2ymbtAb1DFViZEKWUwUfY12akkYqKs",
  "key22": "2kUsdPDfLGuKYoG72tB6keKJ61XhBpLgtUVSPKFPiMAZ3cYTGd5RboGbT49CJLG5xQR62zMGsHGo9BjkwTX4cz9t",
  "key23": "5m6kiH98m3QiTVsKQTEtp7vHCSgasLLRs3XhY31xUo1EYzCauU3orDqtqMnrds2H7barpxStbyVroguMEzcEaKjH",
  "key24": "2jFuaREqABb3dhCeF8NfzC7xY7QXu5CpdSxjTtcm2FMpfr2oShsqiUnnD8KsfXtcfV3JCrJ1R2pha6mXczUMg3As",
  "key25": "8bk1kF6oDqLNkTMUABKmWBBxaF4gaM3MH3rDb8zxy9n4U51A8vtYRptv8zMWyvxTn8AWfhMTC7JcTSyoP7zoqy7",
  "key26": "3hyJq4wdAzix3wwmG1i2xyRM8u55zVr9c9TwbNwkBpNQkWEUBHiRLpdky8wAS7yY7PdAjazqMnZVijxsjycpcPjT",
  "key27": "3K6RrjWrKdfDihDmCU2aGeTKD39zkTsVzq7LPG25U2krbvSg7fhagUNp16VfpWZ9UJ5pajnL8SXoAC8SACjdBvar",
  "key28": "2kGwEyy8zY9sz5a73H67Kq5RfEuhf1BuP9pJafrm6FzLnmgrdspMYKFkRYxQJV3vhYHGU1NLZptQFiPJVSvbajAt",
  "key29": "57ee9dwPujsBnTKSGSWWVAxmGXtADfrKRS51vjuNtPAuUoTxzcNrMTKrGbC9gbr75V4BYhsrmBjYX4dfFR9nvtmw",
  "key30": "2puN3xv1GxwieRggMc23ZZrfPQLTwkB4BCFYHMAJ16BPQ4XKkJqDAQHuEtTfTeDrJUrhG4TLvejKEzd8kpTasupH",
  "key31": "3UoL45rVcp2X2cdaXJisFQSxW6RLCWCLkoTE4CCox4kKENPbr27DamUmC5bZvkcxSu42TjHS5AwhbHCwascUU2tD",
  "key32": "3HNRpgFV7EfisF7z3kVoq2E9RcGRWsoo6BMnR7ndYj38NGPZLQbD59mRbnieC19tmbQQi1vjk6kSgau2nsAoGkUh"
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
