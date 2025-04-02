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
    "29z7XbsJnc7yKLUVcDNzFxGHeaHkD58JJxKBX4fJ5QQhvkYkycrxBZ75mCiBvU1CekrksHZcFDvo2ktnruDCmKym"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kLs5aegWyZTsuprm9fGHux5gZW9tqpcj8UUe22JU6MmTaV1TXGL1pi1wV4j7zWxHoa1H9yqhioMfSpruvwdB424",
  "key1": "41WZo96STxx8gVQSrxRNgxEg5vQiRdaUULqcTGExbxEyYo2WHxQdP3jFxEWA4njPfvQ4fZgc5kmxx5fQY3iCn2fU",
  "key2": "4LFFDKCH3awqRCrCMHcdGkuRWScXm9hMR4wUTpp8MYb4GFFFNRTGnwEjpU9ARF2wfH4EJJmAAqH7y7sy26EEEQXE",
  "key3": "3CkrVvgY1e1xyKEptTKuUujEjVXGxcwEvMpcJVZsbrTgq9x49WaWT8HUHndb1rK74qZZDwG1vJAu3jPGtNn1omQx",
  "key4": "4pkVFSvkRAjojdF5bjk2J92V2PwUVGqAbja9xU12JGE3fwtNTMWAFimY9BeKikBC794A6Njy98dq8ny41BjBWsgP",
  "key5": "34fX6fSDgGvFj2UucepVuqNedJNGTpFHNBfoPeUzGt4iCL8SVetGQrngwxyfiEv9rft8a4TtraLykS44eo6565GL",
  "key6": "4CmC5pwfco5kKyR3sBriRYFvcEDwun9WnzSmjGpuyjMZJS2KkEFu6yPX1g5CRZpW2urGXqZgB4bAJqnTtn7XvjUc",
  "key7": "2sbBkQTg8kqZb4UahPLoGpXD4n2HbCp5TLkdo3k14YeqGxKqLhYKvth5a3t9gkH6ztEvdTw9orL1i8baJnwaYLHW",
  "key8": "2uuSHdn4Zx8jxityryyo2JARbsAH3KivU5rEs81SkVrZWbhDYLn8iAzB8euYCtzSCU5sgL87DZMMguCgaHdzQTu9",
  "key9": "4zuUub4o4RNUhVSzY7o7CMmxesUhHDas7ec34DXZZ4WVV2uEa5Get8taNE7cA7D1Rrw6H1pjuxwWdKLHikQZD9Qe",
  "key10": "219vvUaGPcEUzrUZbuNzc49PkntoY5WzeEicoSGGYapyZSZFvkwpxranMfqXy1WFFLE7G9FLntQbEaPoy69y548S",
  "key11": "5wPZERB5tpd7jMX44n71xmXDDe6To6FxNJ6W3Byy52Lh47W7eGmY48JQ3XDYc6eqQbgSZnr1F4UpHAAcpKKdTrwR",
  "key12": "4MeK2XjcJCDQn54u5KnLE9yZ3KAgmdx45K6jkZ7NRNVg3FHDLoTQkVULPVBNBLEMEpvg9Fvcd8qxutyX7gJz5ffv",
  "key13": "5297m7LR91B27KaSeHPtVg5F7N3tbJvgVNaak5Zxej4fUAFnt55q9G4g3c8yYvyqWex6FwpbEhWPD3o94jRCc37b",
  "key14": "fZcFg8wggWo6fmX7cSd11WXZvULSzQSpx5RcVQ9xJhEssJLcGkr5hnUwj289W6XqwKUakor1TLFbEC2GnMGQqr4",
  "key15": "xaBBtUDUSRVr1NrKwkH2CxdDnsD4cftTCcyC26SGvHusSamP44Lb2xh6cXhL3gZWAimofxLfXLCLREuPCeGk48X",
  "key16": "2skhUbU4Tct4UYB3ji8aSBGYK6MRZtQqeRMtLXWWMU1Psaoj5Ra4AxjoJeHFxsydmoCHU9CEgqqsg7wAecJ5YV8y",
  "key17": "3dqYNWVRiGDqQ15RXsU7CqSSFAfwQnqSGBQs8z2NxMrV1Kzeb5dCMfBe1CU2XWn4JvCrdzc4drGLs9PeLjtXZGG4",
  "key18": "4kB6JCaZcEjGcqDkwZJTjBphBumRFoed4aHu2rrgVhnwQFADG2nd4HSwFuuqTMXNcpmFcvS7kAtHx7ju2aRDSpdC",
  "key19": "4t2hTiMVs9xLKRuBjDGLgibzVcPk285qDZjUYNRMCWiJLG63L3XpnDDDMzX6Za6Gcb99yczkSjhUrQMQadpYRM77",
  "key20": "6HroTH7AbjiiZeCNm6HMieZi64vqTEiwMEVfS1g4fpv8nZScdy1J3Q4zfYNYLjKrDzkUcYgAhjrpNaTb64SsDe9",
  "key21": "5FDi846bxNP8bgKuPzXYBv6oXgRXFm6DgWeqs7ciHBS2Z6FnTFKjs7vnfPGjqFvFHWH2YKGsiJTihmvRp1A26X4Z",
  "key22": "47N9WQsxVkHFDCKhPivypWCLR6iCFdq4MWohDv3xEM8gnatZieYnVrhBYnHw4PihEN2adhQj1NcYcPUUVvRFsRAj",
  "key23": "39o1U3fAhzfcpNXnGbkMvdZrNWVNWrLth9jCXgJaN5Y3erFGgvhez5sCyMp24CABG6ABEspAJzYpc2ga7t1hBJVs",
  "key24": "KzBvodjw4v4dqWhD9KQpXFfhABsNd2eHDYgUSijmDiUAmkU5tmGVMz76vXcDHNkhZQA6RDf569WuA4tDTMqkiqZ",
  "key25": "5sMPEjc58N5yfRSjxfmPnMDstNr5HztpZdMAtzxTxweqBqYzR5dP1j2HUTsib9w9ror5kLbBqS56hMH7mGw9oQYS",
  "key26": "3tPkCiSoVoYQAyrx3pMk3h5f8DuvKUrAZLo7AzXDfuu9YjHwk1YeA8dmCq6TcjbJLVb1ADWhJFGsGNwdWcGaMXAD",
  "key27": "2Zx9RTdBat9tZ9jjDzSk9rZkG4fb4mJ1EMTzA5pgvbn5qvPf7sCfxumBj9Wwxqo97pKAkgeQHFBPA1Wrm8PC9ufR",
  "key28": "2MiGrstaxo9uXRJ65e8NJ9N9Q4x4UJfjXzf5W6qEbvhkSDBofDVhPmk1dbiU9BWUkkGdXVu7X5ff5FhZUiM1kHhS",
  "key29": "4BrXEkY5ULY1bDCBPNhVdo1hYwzX6DvSoHuZUfzkbkqTRejiGBDqQNNxegnchAaySx6up1H2r1GGbaa2e78WPxmS",
  "key30": "BvEHNUE5Moon3Jao1ifxdtYCX4gBVuLTV7pNEyNiWUGmgnKFwaekWmRbezNhVzbks2WPcsPzjEGytRbk9hJts9y",
  "key31": "5a44kmUoSEsPwKKs136RYYrfd8JVhQFPbQKx4djq9GdtybPPi1HYpRMkz8kQ1ffN2M1q3cMJoax3ZQnGTsCXpp3q",
  "key32": "2qFAb9NXMWTyx54CHhR6J3NZgZuUrSXv5P9p5KYqmtfiAYWF1vVpxSKe6UvowyHVRkRG5uBNTsLuAX7ShfF6Ymv1",
  "key33": "4Z16BfxDAA71oTq5sFZejbFCida7aBYDjYeYNYMvFn8h9BFUmZh4Xu6tqTWrfXs7LJQbvmwF1xjtcbt4ywqAZBtp",
  "key34": "R6eEi9BQ5EdsQ6mP4M2BKaBgk7u7JT7Nup1kiWHfNmPWo18BBYB63jfochQA9EpzJ5t7QcpVkt6Dq79TQfj2gqU",
  "key35": "2UDBxPieL5niBUeverdDd7w9HMBW1m89JkcJqkqFwCC3M3N7c1gQScxcu6B94TNwqahHYrJzXzdfE4TQdi2ugDxP",
  "key36": "5z4vnXZ6PYKV1BCXstEegNYJ1RtzZubYb14YDF1VpGDVWJwCUoBXn47jYH4BL2AZVxcMc3fNDxyPRfXD66cuhirm",
  "key37": "2Sgd3zhKbMef8ikFbF5qSBvAMA7fKjvQQuwcrpcfXUnYYGxFZV8LmSWgf1FGzxmf4Hrzh375oyEqZmWuk5vRDkBm",
  "key38": "tWw59XNh4dYdonqLRYyQs2FoYJHDxM1VQW3BYsCVBiWVdwB29gzvSDd3MSf3TpuqFej7iLdfVKmYvB6gt3S7rvE",
  "key39": "68nBDC4j8mruUJepj4QozMPAm3ceiiqXZafUbphyHf2y2EGwrEVud6ws266XStzM4eA8ErBSRwB3JqA1Arc7wSJ",
  "key40": "3X2dLQaQFUxNmhmXiBRGEY7L1wLevEx2HZjCxzvTmCDjBxhThrCcYdnvfyWrkZ7DLp1AKbdjFtfAfHRzdb2uGWx8",
  "key41": "4gR1tDjHUcFxtAkxquhdpvakQTTDRKpezQDdtUcBwATSQ1PkFybyraAaRRwmyxjsB6BX25NFyg9rn9x27oJdZKTd"
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
