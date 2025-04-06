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
    "4BR5JrGXdmCWBWi1ciWmxmpjNJH6zwKYE4pquvL25SVc96hAgxhnuFoXjtek7n1QeDU6Zp76zpKppsqijuGyrWoT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VYi2EL7BuDf9MS7C4v2T6kD6oTgkJ6QwA8mbqg689DChwwh5fS1Nmzdr9aNfykpxRHfUZvfoQPgwna8mdQNCyAA",
  "key1": "2gK8TZSgvZZWDgjmUFL45rkumUR1YU6QgQ2UdX9Uxad58CPWMm1E3JsbTdAogJKa1rSNqRnVXcCz6gtnP3GeYhQ5",
  "key2": "4PMnJ2VSBaYdiZFkewubCqbwSFfGazRoh5Bfeg4rhVF2jLyKMJn2PMUDHswQH1TeLytef6xgVSnW4jz13dwvNYhB",
  "key3": "2EYwZ2fHTnPeHJ3K5uCT5fP4cyNKnAKX4dd4SKHtsc63VbBi5FfSGhCZQyZKDKsaxY2YrrGzPvGUeNNKFpaduFSr",
  "key4": "5RYCCJtdyJAJvzYKNWuDPdL6wKGKB8Qao35pPbcu4iFPqBHZFgHZPSuoCf5YNddLPHFzmYAaeCp1HZjh4e1TheNe",
  "key5": "2nKHZdm6s9tB1UgQaYw7UawrcBJ4i62y7jmWfj2Bq9qgWGcoVEfhERdXPYAqeSkifo56cuEGS6TgNbjDdNne2SuB",
  "key6": "znViP1KeD2sVyKaceYJPy262N5ASgrccKpgYyxwi2i2uAJUigwpAD5FSPfUc98fZtxqBW7F4byigwnnomksfyGi",
  "key7": "2JThDVDYocs4xx6xSTwr3gAbLi2LGC7VbCvtDw3HPYy6WBApfwMTnL9siKjGeKZDWt5fmZJ3Qe7AqNzb9ESR2y6S",
  "key8": "5Dn6t7krAjhpdiKQTDLpayUshEs2dHPk5qaxne6sihWPBEjg7ENfpoYWRad8T3whiDooQ2Ez5BNp589vkNnQJv9t",
  "key9": "4TXjMXCmQ7Xe9KcvCFjWULxsHUVXveMQEvFpnDSHNLAW1HBGANtVzzkXUFcJBW2nKKZRnbXPML2vjijnVShX47kh",
  "key10": "w1tkGZZpNa14jGGvFkZRVj53JDkbXKGrrsJkstftQVt7M7vW2FSTCjL6saStYAa2dHrcisVPaxZ8hL3Tpwn8Lh5",
  "key11": "3ce2V9nT8Xj1GEy4kcJePvJeeuNh48QBZTjHYmC6K5rAUWjAXQzNCSGmyy8z3sNVZqL9cSMXarvk7m2sicad3dqv",
  "key12": "3X8vCYb6oXJqZojJk1dPwHCDXnyoLnsFX4dmZ2S1TeFs3xtEZYWh8S4D4uybTPehD6QHhjxcWGpncuB3PFVB7jVx",
  "key13": "S43Ps8K9gtDYbyDBeHqfWiEipsjxphhyek8TYMgYKqvUT9SFnr5uArL9uPrixvrT6fwfdJQVfHfkxV8hU6u7QDn",
  "key14": "5tUmR2voMVXuZoe2VowEdZnqijhdUVMYYufJ9Dh3VAsa17sqB7YDigWh4cMbjxznnAMEk1rqaa2omLd8GqcoxqJN",
  "key15": "PXU2D1ERg9gxgxgM3FjuE9ZUMijujJPWH3ai4MQexGXewXi4Uvitfr3VXCTXciLyyUUi3QiiKy7D1yRttKDuEbT",
  "key16": "2iBAVumKDkh7ueJRbWq2eaBNHqkbiDoZd9siRXi4RMfxx5buVmsy1NEhmbqyw1uHpiXLJkRVCU2QtLhJrxQDgg95",
  "key17": "5XefXzCMVNXVk6mVfqNu63UgNgVs4Wxe2UzSY4mfBmGLBkCj58YmoW4GDRD83KPKDgAcmT3SfQbov1bPa1cP7UFY",
  "key18": "5cCAzVP3kwGVJj5pAfMkLPmew2kqEymtuk3Keb95HAfw1xXTEtTLZedUwqs2x3T4okxamAKEMbFMEXDfpxV9RWPh",
  "key19": "4nDTg6oCPM1vj9Ha1UEgE6V1LRPrxjhYjKNrzdCMpVPgrm9ofJDa6YvTYXbpgVwCCfm4wdApEeRRz5dS3psrZy6T",
  "key20": "2eT69WRGjuUzk8WhMnEysNVprJ1yqoJaPkyHvwyBJMHLrbd3DRoLRh3smxXUXThGETHH8zg5fJeJBog5WWizYtUe",
  "key21": "58ZwuLJCbawBm8X5KstcSzEvmMRR9GanK3LjrseF9ckDDtojdv8p94vckYSaqMYbCzvGfLjKEYA78xzrS2Qt9duw",
  "key22": "5DuwCBuBpwoCSiUCLynnXNKwMnYnpwW9qBGaMg5cVsBiSfJtmmzxQDzd6D3S5cqVhLuPV3bD7bHgfPu2dYF6BqH2",
  "key23": "2EL9EcDkYMkcT6EPC9jp8c1tBDCUREZVNsyZxSfgb2tKNM4jLAxvFSHSp4LVoXFESkTCYtEtBSWtdhYjQmkmGzNm",
  "key24": "3HZhDbZCqnAwc32Ry93o7oyxAK1SMZoCbq1XChNU9hQQh4CziM8umvdobBaVXKrtyUpJ7c1LhG3LkM1nhyNPCPxo",
  "key25": "62qSPRndi4ii8xs5uEFhkhkfceFfGjqwWtu3AeRuzq2fFfFb5UA8tEPjt8yHQyFhVNTR51mcmwAbMFQ5Bwqcr7nM",
  "key26": "3hq3SMttq8hmooxPr9EgubWnn1pvpiWKZqTjz3QY2n4xgBAggENTpXLNVGkFWWoJaDJBcAc522FAogxuvksufJbR",
  "key27": "2YtxDkMMvf85sHkNtUkrJE6rFo51hjRdJaZKQXZKVrUsVfSAbVN4eYbKVxfwVw9jZsmsXDCc2mZcwD2g9GWThKx6",
  "key28": "zK7V6ST9zJBwX84pAEBpmD5YSyYMyh3646C7vorNZNDKtUb5mktimM6JT3LYbyUbjNW9ZZxh5riY5fiWtRMtvhD",
  "key29": "2wV5gYP5hGg6n4WCaSezr3nVYPpixgPr6bkWHcWMem26cj9TmAyZoWSLnpdsQUvCpCufTosWGQKuouJC4zuMHmYE"
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
