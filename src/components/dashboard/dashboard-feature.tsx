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
    "344vAmppXLq8tt7mxNz48tdmxS6EnHqZZXtskvxXbasm1aUuJDccA795b48e1qccpyihZigwzzF16sv1qZMUtinS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vqmdKYSkkRRn1KvywScpFQySvGPdFXrkjBoAYNSeaoia2yb8DTPZ9PXgrEnUnHt9gU3RUsCxMZV6QsFPTHii34F",
  "key1": "42LVYTxhYhK7ja9sS34tYyeARyiaq5BYQUps6x6idtZdVJXr2YPk9onaD7bLQuZycf2EBvnJDBJXjLahV3SB5FTQ",
  "key2": "Cyq1cY8AgQGRuymMzjaECJCwKigUgpvbbbuvqaPnGrJSYTSYWPkGv6yPpNaheQxQDQuWtS8zXqnYszKvF2Pp4xt",
  "key3": "4SScGW8JwMpyt62vVNHqJ6uxAYsusnSJthQmYPFJ1EebDXJnDJ29mh1g7tiWum6FJjxuEXQKjwcpFV6fom18c53o",
  "key4": "4HPawSVPYubvgvWDn8hZFS8VWtHZSwJnoB79VcHR4EFesPMBgZYzgCBgpJoCgAbtAxrcDD4Z9Vh7haFiaqSDJfzD",
  "key5": "2h7jZmFRiK2vEcjejpcPp13RhMYiz9GXPc4K2oZBD8f9TPxNNC42DfChgadRWQUF7NaDutguYh9xyh6giTvWGx36",
  "key6": "5BHcCDX9ebEEpTKvWVZJA8gQ1oGq7peeRNrTJQRgej89qnwsZQpSsaZgot2s6u2PVeBKrMAAaQjRagYnaKue1Lhi",
  "key7": "4Mr6xPcCLR1XhYCc5oSRFz9xm35CrGwjkLccM3PxcWye99ZXpfVZYMeNFGcgWcQd35fyzburEdsuKrRB5yy99ZMW",
  "key8": "3SPUbdaAZe8NwRofmJhNNaFhRVoKPgmMPKR8SPHAUqkAHGQs8XBkwUE7k6aiRb8vXgnHZZWDNRdBNNrFB2LpNWtF",
  "key9": "5vW3gJUtZBV8j46fSzDgqRqrY96nDtm7LV1SoGFr7Qa8EriRjKGp7gmVbYttzyeyyoYzNzd3iiimrGaRM3moLNSP",
  "key10": "21LVmT4Wu9iEYM59Zrs3kvgdMAHefVft9mqxvbbdrCcex2NTdsKZ8sBSF1C5FTn4brADPHgWRbGgKj2Qrz6QmGL6",
  "key11": "48QNFNobxFjPnGGZsquRXEFWLeb3boXmHEkmJnUSe1furTWtkHwrTgSKyyHLDfaegN87pGFgk5m8dNw4jknAroYA",
  "key12": "5B4KBYxJHN25XDJKfWH34yu4dc9G8WMnWQBM8e9awxzubmBcetDuYXugHYUymDUzjwe4WjBfoZYv3J8R7sm1YQnZ",
  "key13": "3r2ZVHHEZccfKMJkqfWRpCyoJJjwbU4uH8vc422pbURdKRKZED1EEA3jWCJ7t9hT265kThowhofbyNfbkRsqrqqB",
  "key14": "2svisua639pEVDEmR6m58VKMvQVcaqiRBQv4wsqDHdYxzHBqj8qkz9ma6FQteUeYov8zwxXdxVrKjrHZdGLeVyWw",
  "key15": "4uLwD9tJSDbUgLWcqMPXTsNLDv3DX3UeNLi7LShiawZnLqes7KAcaSf4qGS84SvNRjb82dg7V9x8MU7dmikccngd",
  "key16": "CDA3qaAgXy23gzAv1Bd1ipzzUKQRCnKx5ookcM7ZGbW5dRQm2ZWvGRTvJtBmR6f113r62UZLME5HD14Ph2HZfzw",
  "key17": "43P9aMYR71tU9mbyFnZMjs2wpvz4kDuXLQuGCZw5w5AEwwgZQKknQ26ziX69rMqBzNkum9UcyNpWFEhSkkpis2w6",
  "key18": "EP8QPMBoeVWX6fVwX8R8iPASmZ5avQAnXcgQFifQ1ciaFaafh91em3PYHpHkuGrHqPM6XPCCNJYyt4Mdc8zSepU",
  "key19": "3sRRafq92qkdUuUnY9NRwz8HDn6gvULcwWeLxuDGuBE25jLWFKM8u1jcjmZGUoU89HvPWyajw2Z7JRt85DSV8r1e",
  "key20": "5PPsieGY4ok65i22X64ANHp5uPPdwzHbZy7E9uiLFTPnTk1at2UsYx6SXssaakiuiuiQQztDAcoVzpK35dnX3gCF",
  "key21": "4PdVjo8ut9FM9YQW3gu7vAsV1XrVMpf1pG66fHz4Xcmo3ZJrWcC7LiRszZaD1jz5g4tGc2VcZYmGepQUY29rt9DQ",
  "key22": "5dKcHCTuMMXTqVbPFhDbUeDMQdbMgkTUuqSE7EnT5xTMz9A393uBmqUJuscGxaSLfe9p2c3CKjDki88RRbWc15Xi",
  "key23": "22dNpfrnV8mpsCwTKCE1JiGRtrrneTKnt7MX9EpcN5K67RcJ9xA9GUGeop1CF1GBWtBCuV5M2159KWT5w9osURqv",
  "key24": "BKxp7cbM8HJcVXY54BnUmJCpHXKqthajwyVjHueBeFdFhz5q2gqpW9RW1m4juDtTgRJq1qNHTjGitPNkzmcmRqC",
  "key25": "61paYXh5G8MfpJtSBg3Fy319yD2XpjWkt41RHebGo5tFvqbEhRnMR7d3nUiPAALWZKS8jP4sPEaN1ajGVwQSH7XZ",
  "key26": "5D9UuFoYLx8UoDjuBK3PgKSS2fQJSppK1canxAyZAuouo9ERBC8T167djafU8udMGhTzaEirNXgYAzwYH7nMFjWj",
  "key27": "2VagzpFkedQ6tCDiMNekYfaW7VHSLhNSFvBVRGa2UjTaYtcbbZprotmdVQL8FNnKFxNX5PBd5kupzacU6Nn1Zzpe",
  "key28": "2NYBc9btr518KBQQzkzidaYoEzP47PTp7fUyy5FN6vc1rrVGprza5nVKjB4eDyfsGbeRfFDwY2DepFQj6SCtnWEs",
  "key29": "hMuRGW9J6v4vhqwrMCgGzYtCffKkKvsa2KynZRhfcvYbkdxPgpmF1RLmvo9T6EAUMUwfRBXpwr4tjrfoZDSBs7S",
  "key30": "5aQB8giNb9JFCacMSG3PQ9A22pgHBNF3zjEsu5ph3Y2ATSqQA82tgikEuxFRpgDPA7ZkZT8ndqgVPZVhgrc2UXdw",
  "key31": "b7zYSmWdbxN4aZsFATSuLfvEa1wekhf76BAWXyxFrPRN6TMbMA61vFjy5qLS8yzeHdhhMZgBsFY8AoNA1se41gR",
  "key32": "2WSph97hVscnZ5V5LZC1amfZm8PPNTjaSEsr7N3cTJcx97j82n9YZjZFEi3dsW5wJzKcrGVuyPZE4JnwkShV6bLR",
  "key33": "YNhHhxVtEyYFT5c37YhADKaFH3G4bjNEfCkBVzb5ERUtm73EkR31XwGaQ6AY3VpyAeFyP4cbXF4SLy95YxEQVQQ",
  "key34": "4CCJKgi4HJzH1k3g3mNdz7x9Fwc21yDr5xcHhQy3fvKk3AKF1TSBNorM5cuN25ihLrgpKdhuiow3Gjq3e1yYFr6j"
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
