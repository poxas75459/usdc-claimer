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
    "4XfVxnzVDiRsH2bWUXQJDmqNUfRi3r845YqrC2BhMWN93sKGPjAp9kWtci4zPdRYNcXHVVr7NAsKi7ZqUVJW36yC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Y6xbo7Dvx4vLTs8ZgRq3MK8Z4bbaMD1uHYwZU8m3ZYQEawz4M6UMXj1D9hXPNMC3Jf61DSJiFrV3vyENaNnkMd1",
  "key1": "3Ldrs2aQcZ4ppoCi6Cn429bYEsNXgjWSC2B89BL5KYRjtqwhtMALwaHk4w4az9VvXsueUfDSqdpweMhrw7GCQMrf",
  "key2": "61sNaKzvedXFvku9w8UuRw9DtGDZr9c5Ln42w7UVzuMgC1wvGmKJrJ1bcRNE9MyPrQeG1Svvtx4dPQnXwQSwYbnE",
  "key3": "38853BxqbujGX9mSu2qQeh4HF56svBLnHQq2htgvwjNR1eCDEF3ojLDZ4RkHCGX97ChUpTdWmTrHThGWTYuZZFJ2",
  "key4": "2mgUD74kj5cdkZpwrBZThjBU6MuHgwUDsFqGMYKWRYnmm7VxwB7BeeygWf8S1YGLpGdHQmezpPoBGXGnejXKd4GJ",
  "key5": "3vCUwbKj5NZLXMjePjqn97ZFK1TCnyJCNwV2FomGp3uotdUJf5tgxrNxy4atkHqmEFUeBZrAecCjdyTPcRZBK8KW",
  "key6": "3ScKZucZjKXGah9ExhGaDA2AreKWokQgv9gVjGFTabbLdkJ1Z1bJYYVJgmxRPfJsw3a6juvbQZdz3WkaZ3U57Yhw",
  "key7": "22hr8WBQvA8JfEDwaQrsY574NqbRUqZRc4zPEynNZrxF29eoUVAjbcAWgq61wDEcTB18p3SwDmFr8kGaS5ztoNBa",
  "key8": "1uENjCKpQq6eCTX5yevHQveQusFxPgkCfxjJFUzxpQTT5yCQ1W6xeAVK7fiTzqDZMdfd52dEgUC6ES9taeQwUHB",
  "key9": "4RX4viDXAE9FzfvYP9MG29NaLkPkEhRv6KM5NEWdHcVdVBQhwarGMKqaZCPKtdQ8gnWkUFKyrpRVwj1KvcWk1LVq",
  "key10": "3ZjQ4PcTVDZLmZB2LL4MLQvg62pwuypGNyeJyCthfBpZXfkR1qh8KGtfQ9cpj6Vpx6gUBS74e5komp3hVsG2SUG7",
  "key11": "43PR9GTxRrL2xhQ8nSoB7erqfCA7yF2VUTA8ve6K6XK3DQGBaSgNh8wt7crzyqxDA6u5nrBLAPyozo99wPZRDFud",
  "key12": "5oqESG9MEcPdgCciFVpeJEHL4Jiz7wmSzh8MgTi6UcaihkSDucVS2gJu1SnaYdnXDeFQSbns7mN7evq8XB8Fkkne",
  "key13": "ocqSi9W6mHEHt2BKsFpRpG67jVK9BtfGSC7Qft2PLTuTKstFVHSp3HQZdmprok39YXr3F73Vzm9ufAH5QGhwkgN",
  "key14": "7wE8gLTKu2QWHA7NHCNsM2rmL3hCvBP7j8Rap3dF31avn6vwt44uEBCazV458tMSQ6Cz3ETZk3qWdrCLFUQ4Zt7",
  "key15": "5GYPcdcPMWVmKx5qsz1P5vQxtC9RPQDwPcko9TYi2RrwjjGZhATMmcv7pGCvdTbv2Wna483THHy2g17HSqzJcgWy",
  "key16": "4745nLn1PmJZUHPkFcG3Ynine5hwoiDHNRVvQNBPNVJ4QuCkLxJbCpkEkVFTQSdDwQ7mgqHabqXCYGM3LCtdzfH7",
  "key17": "Z13pUVjZvSbU2qRV1ZCBT4vFYKVXEcXiMSy8YiQN2RJVzQuocsYTxvha8v9tE4FhAq9g7oAYbWpaP9K2YiJGe7v",
  "key18": "31jp4h9KBprYZvzY6e4SXw9BcuekMXZ8iwCsLve1mcUwN1B1hPdCqb7FTz3jsuoAUvkEdz2eYT567dN8ExjdW5wK",
  "key19": "3U1iuMXmScnEwtn9q5KGCvseievJhjBZuggCoezajm4Vhu9oLXjE2HH8ovEF2acXv9785WYhEnhzQSkysLnnrgum",
  "key20": "5N7g3DimJ5m6y2WVZTAjxWZUtaTu7qwhFT7zG6MgPGWVLhV2u3TqBLgXwWnRgQ9RfuNRCdv6xLPC3kSr8yNj3GND",
  "key21": "48rAbA7ijEvs5GKhGNNpCN2V3RVk8C5AGUDR45KbGL779eDSGNNGNmUzMfogyJ3RZM4F1nUZTW5LV5DCehAK3a9g",
  "key22": "3Tv351hyFjpPRbs1s7qMrCgjviCcpKNrNvj1hXJZgzm1QiqPwxBoFi8X4SHmyVyxXWKnuXQYX49HASzgAkDkiN6X",
  "key23": "4pwerzcThUrJTYVCHc5oZcrKa2J72gT25LJZScXsPTMsG6yRy6rJaPeNUZ2MChxjQrvsHABhmziY2yViWKCbowzc",
  "key24": "3HSumV6MEF3iQKrJW7zmii9ATmkAsW81MvxHxRBskNCyXTdGePhj9ZL6EQ7WvNZKMmpR8vVDJLGKhfMwKSAaqd83",
  "key25": "4RHDoHPvAKq3vfS6gNiAzjG17ifKuF8GPSdLhrxQ9kZfHahLimDyRmGBmR6hUMw4uM2qWKNwrVGp5nY3zofHnMPr"
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
