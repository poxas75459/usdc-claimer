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
    "2G4PE8gS5CkpoeqYqXwSfpMxXesaPtHwbYwss5sYmM8LMjEhDrXJfnP1V3u74LV89gfmE8NLxPeA7MdcekstK83E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uHy5NzFq57TjhE1Dbbet7q2nwZ8nWeNCuaNyLpzRCEWmsXrK82QmTq8RhCbjTJKeQkAeekmh26PGcKSMuCNYRLJ",
  "key1": "2jxUmSvFERX3NkYsJD4xKkRNzVkLeN1VhXbUq3qwdjpu3DRMrXL4ADk5uY2WZvad76bYcMHw6RWerXGA2jVHuzE",
  "key2": "3NY4a4BmG3C9TVvyddwS4dPBLkvKLCkqKtBry5QoWSk88fvsgBdRa8uRhaDsLAFVtUmz9uQMmv9CRDiLQNvypiaJ",
  "key3": "3GagdfAipKCWcWESMWdCUV6We1HQpKCkZqih4U2FrGTPgDmmhy7mwY9MKAKht14j1KyBaZV2eDZNus2dtvYiE3j7",
  "key4": "2kqZVg5o3eoED41NuyBVE6E7efxiU6eg6EHKqbkHZ1dKSxxTgGe4ws6ANHppYELG1KNN6hnGxVb5pGN3TvkNakCt",
  "key5": "2DwJSWjkY7weRYcYAYkzu1QzxphDANN8hz7uWUM62CJPHP6quUsCf5YhEKETEUAyiUCnDKCh9i3NwRSyAsrFuVp3",
  "key6": "25VEciHKHyaPpxUfhiD5S1JEameAW7ucKJ6McKacSZu7vrYBayYJcdLLrNkLFjbzFtrbB7qhHcMXgGBYNJbnBfVY",
  "key7": "5qq7aPqqMKsUn14AEAJAECaGaQWgBKv4hkQkYFMPs79USFvm6ozyDSrs8rjcV8MQKieacHjSRp3jpcJ3VVyYaCtN",
  "key8": "3s6Cx8TGhgtypjU9jsGzMmJE1HjMX9ZHwePTCmDQ5xdefVRUTJNtEcBbCZvcvtZFa3v2zX5QnDQcaVTYgWGrzqnr",
  "key9": "5cMiKj5TornXNAyTMoNpMrf3BUGPyMrQrEd5H1wv1z7dnQicJuAm9y7yx7nEUX8UeoJSfok9MfqXZVeK69KPWdfE",
  "key10": "58kQbGXJFoZb5t593hd9UDudLLHtnhptHpPVzd7KV75doZBe8zCnPXVNZdmqPAuqsLsE8cEgUuQAFc6bkTm8GYMN",
  "key11": "5AFHaV6tHvUFkXzgdcMRZdAoEw4qTHAf1gLebpQk3FNTcHvgsUbziK3ZrNYUcyMvaD2UsVwkbuTEfupN5y24GCZe",
  "key12": "4rHcGh5UvFX6UkNbeePuJqwejWna1UF7J2hznFYr2E1f4HcunugsAnjhMriwiobxu6L2YmWrFDqNVX5sMQ9uVJym",
  "key13": "2GxnjB5qvZoZtcvehYZ8JTnYvbgt2DEG2gN99garSXzxiKCkM64wASmjyAqvHXmZ22qZoXDzAZKWcExbyv4M5W5e",
  "key14": "2eTtVigStZCw8m4EnieKsPJP9512FmPJb31WM37wbXPcEF9aTs4ubkYAFQGFfg3YQdK4495hdBm3Zn9kdhT3MLus",
  "key15": "2Vnnd57oiD3icwJ4wjz8qz5NV97JWnoGvR4KYeBCfzyrVL5VVHHtyLmveaiREjFQHNhPjQDN482TxqmTBNgsUGoZ",
  "key16": "oa3bZfeak5pZ8G1VqZNeT91P5c1sDwJFuhSkBjcCwYxFidQy9mbVcWZ5vH2TptA3cTifcEYn1nKGtytd6wh6Lnx",
  "key17": "44CQkRzrLzyYgcmw58dBZ7Hz5mSSWbncmrCQHuV8KPZfqSR9KQAuS4ug93Zk2Lo1D2M9RHGoa1WXaFq97xaFsrCo",
  "key18": "4cyKW2hJidwTosP6jndZPHQkqhNMzf7ycrodkTfseymaN6u9aoNPCbEZUTRU2wwo2sSoLtaeP5tfYgCryW1EjBTB",
  "key19": "3pJv616RQHuqFmbFi2pJpGAC27cqrVv1eecyGtWhZq51W6jio99RHWD3kFkW91VXABXXjQTHCemYkY6Gy9TZTWh",
  "key20": "mLevPfNZ3nDPG8hvgVj3pXjX8ZeEev4rbVfLuVcfs7sRq9Wy56xM4m8b9JXJxmmNvyjxSsAJhSvy3yrhjX4Zwwv",
  "key21": "4ZRhoQhphhRDopeiLGUTQF259vjJBAcHtQdJe2EmS1MQ6tsrSgPZS9LLY7tXdXXxXxgQ6xFizGfToCGNB7qPNYxF",
  "key22": "DLgrtnxnyh5pkQ7dKxcS2BmSRSK6f1QuKZEECxxrPYXkLoHiWRC6pJxGm7nS5TV5stTd1oz5BxafjJ6VpKmWkw9",
  "key23": "5o6KoxLL2Bn2cddT6pctNFY1XBFc6DR59W3pGdrRywP75fzRjrFqqxbVU2dtDHLajxgU4Nozyptfyh93FFvcVSE4",
  "key24": "2JTzJokN5K4qFYDHwY8BSbsrwULBdSgUNDn5RHiYSxH5SiU8DsV3hPZsmW4MHrKYgUSg5hSVcnCVxN3X2Zn2auhn",
  "key25": "5jYXi7FWYSpp1WHaJBYDW9TnDMAV4LAopQNcuimm7bZCfFc4wzxsT6GGwGWz1VpQ4ho3rm7Z3scyPzBLvTcMUu5w",
  "key26": "5B9k7dYM768jJKXQbhGuRX4NgKdnxoUjtzKCsxSV4JYyCRCLDFQj6nndeCdSB3tgRWw2RGUJ3NWrVfJu1NW81Vb3",
  "key27": "25XPDXz4Lu1Zv9ZdpoUqcV4mxL12UMutQUMBfVaUqnQ2JRo8AXfaJruTmYRMFBDcbGRfLMWaDTRFEUWNkp4GMKFD",
  "key28": "yJ35PXnY6XfRP9LbvYWRHv3TKzCYnGBcHXfV4dyF6TvNmyA2SpPtMu7ymFvBAzWHM2RjJjRYbKoY48iXV9XzhVA",
  "key29": "2xSdTWKXot4Tsmzz3ym7bqWK7AFAaubWsAzEZpZYB8Hxi3DAr6FMgyP8GKHDEqt7Q9HSGfH5St4mJXtguD8z6xr5",
  "key30": "4vM7mMp3zEtadVz9DTaXWGu6vKsBF3s3QT7uKau8661zuwf4HjGSYzGAq66FEmuSXDSqioxaWwy1ePz3U2BWMmUT",
  "key31": "119ykvyVMzzQ9VyV1uHdvkkG9czVBK6Rhr4vRRAhbYtV6VLYYRjZmxWu1A3J4qYH8Ldk6Sepwu3vsxokfMijDeW",
  "key32": "2mPHeyeW8qdoK4cQU35kgWRdMquGgfqMCxtHNBQ5Mfv5eCkWezZtkbmtN1CPSA8uiytZz4MX9Xxejuksaym8tymR",
  "key33": "2fJa6DwLX74LdsbY6SJHX9Buxj4VpS7FNPFiV5WysXP7v63EQnxWFdTxtQfxvuJHo9yL2UoAa83fAuAAVkYQRP3K"
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
