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
    "5ENFc6xiRFCiSx8cmKgdT6sRfyidYELjKzjMBtyTY6vkbc3xr1aFMWoQMv6YMZFuvyCBaun8HQEsKau5kbL2Yrir"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "686GYFy9k2TapSNEJDK8SHzLz538E6Hnpxn144mKsg8XjPFk25BJ529ttveJyJoMWj3bSE8QwJd2nvajaRSjXW4",
  "key1": "47vmtvq8XQZ8TyM41aFBzvxLrpy3fbbtV9FbZ13vya1YB56kTqGvUhKXqywfmrvCD2HU7LejJuegRb5hyu9RbsoK",
  "key2": "4UW4z24dZqVZfTmJBMCDXZFGtJC3jMYMvicreXK4AThxvbuJnfsuvsTmAKfeknqbtHUbLgcDwgsXMumfsaTH9Dtx",
  "key3": "4j7AtPsb9NJFSM1HfwisX3PzhpBMradMvqx3kncCz72NMm7MacLZabhyKCdMWS9kWo5QJBfVq9HYDwgK3Z5aHybZ",
  "key4": "CJUkgZJ6T3cX2pquDNSPKH7p4hC1Nu2C7vVaEY73u7ZHogetPEMntpy9S1C6fVq3umFqrxeRmkAFkK8yUYpXS7z",
  "key5": "3XzTK3JN4Ru8BJHj7uFdyW7J5P6xaJ91KdYmp27F5hX37wjtsXJgcJ13NxKUFnZdQnGxGN4wLUMfP9F48KkK45dm",
  "key6": "gXxu45havcEtBgqoG2ojFwWXafBHoCPooqXveEqJkBF7iXzhWh2ZPqx4Htn4ygKDWmH3rsWJAHPPGz21ZznL2rj",
  "key7": "5YM9iwUrGVn1gvTawbUTG5y7AScGNiwBiUNjfR3ihHoWjKeHuKZ6M7sVM4Un3t1q1Mpi6fyXJStfDsLpvFat8ByQ",
  "key8": "32Q1bkuDBxRn9vmurgtgp9Yb8BweodxdjG9iJiawkMkUFQcUoTRddk6LZZQvWGFyKaM5YGXCsbYNKbw4UNknHGPa",
  "key9": "4EetCnKke7Cgyeuy7evqwg1RYphs8ebbQQS3JSCbA2n3aNSwkByfLRv99yyMqZguAiCvvavGGAqkT1YXpistgxLW",
  "key10": "4ovyVjxEV8sg15VJCXr9geiSckpv2mhJ2ogGwednYzx5pHY66hkLfRqHnLtPucimJC37fM7TTpTpvd5xWkbW2nnN",
  "key11": "4AESQ3QnNLokwenYsuTtRm61faUn9qhn68aK62Z5rgYPqVZ5nHQXNHR2BzK4StYy7Pw1Z2neFBHd7F2nCD4YcnGK",
  "key12": "2b2gNmgWokvd3VzdiucuVy8xdAr26rAETNCmWtDiVs4scAadE5PXwbqbzZE9LPYQWU7FQ4PdARBzQgWpVVZwRQvt",
  "key13": "mgV8PAL9DYqNeiTnkahksGk7N9kaVGja2s1vs19B2eidFD2tRNdWNch7WDzNjhNFQW9HNG43xb5qy5WscaUcq6q",
  "key14": "3TWAKL369ufTRTSGxVTyHjyg6apwUGzMd9FxA4L5jaq5msCnpx6C3VhVUwp6gVaynCWCpvzafCoSbycN3yZW1JRU",
  "key15": "2oZhhU7cDDwSMtgBp29Zh1cJNtmxMNE61UNe9j2YgSU7roqQ9LMga6Ws2g2TmUQxCjtGYLFmpz3urmK6pQe8BrZQ",
  "key16": "5NygvpeqKcdKcC3D2zHbucxrJ3XgbXFY8WxKd1dm9PZVmSyijT94ePb3JtJ1EGproD1SkKvgxZ1W4daYAAAxfgXq",
  "key17": "59R2Ef23Wwyt5YfR5nqvGhw8gb8t6WpZVppBVn3oL1PJaPLBJeHwyb33V8kGgPaR81fQngj1yfQMqpC7N9q6Pf1C",
  "key18": "3PLW2JLvEjKf9L4x2ysVQWqYdyXHRriWQjzB69fmHek1SHiLyNFHN55B744EpFrMjVviezBirjLtC2hg4WMWhLTY",
  "key19": "61z29PjzgfACNUwy9aerA9XkZWS8X5qWsra3neNX9Qgp7DaRb85fkAfNduwXM1ibvYX2QcwCr4fPJFEumkbevjVr",
  "key20": "39orEdeiGvvjhWWUoXbvTAbqoLt71eUmRkZL33S3qsh2Y2zY3J96vVVqBZKxdPFiFRwgNwtDJwAfgAEwrJSWDWjn",
  "key21": "4JQ7hHP8LA753WnGWKhiJuqzYiiy82n3cAdEepnSw4vvfXBWkFX2BEg9PNbkNEFuDvFMWAJvjACkQW3mDEhNLZPQ",
  "key22": "5ZGJ86Dr7dT7KA6SzVZnSWxojatHT9envfFcWga21TsTnxvmnTE5px9txvC5pd6WQ2s22ydrQAxzkMhsV8v8nF5n",
  "key23": "8RcyuJLzhVHYefW2pH58jcbDpEB1M6WaK2xPBZnXSBb5coif2A4481MhWKBNEaJmQYE7UfgwYKVoqxNykPGiEJV",
  "key24": "4xufTRa4PcLydMhUzSyuwy8oDqMqCDu3dtmzpjS3LoPnNw1Q86nKn37dmjakQ8QNt5siKkgdQZtwSWs4uEcyoMcs",
  "key25": "89xTDJ9bQ8VFDELCCq6uGUk2TwbUj6BknAsHjAtfYAHLPvVHtHYn3JSuSf5S1wTSEMQnFYGXwUyQWwJ5Jy8zpzF",
  "key26": "gqpisVZ2SWfTkMtnpsXPDJCMtJpUqUivy1iUAp85esCRcA4DohN72MyE96fCzPadJJ7zQoADhsSP4dnN4vCvTdi",
  "key27": "MifkyLzfa1eduuepb7nDMmhm6Tc3AjzwgZaLK9uR8czwLHRQwmMwomy9Y9Sonu2PqE2yK4DEJi9fqxqECjSuksk",
  "key28": "3Zf6EXxYwcxQZRWY8sjUmNBEtimUgrKrBgVH9cFycqApzWat1UEPFs6d8dWrnAkMK2ghR8bbht8NfqxFLc6o3bVf",
  "key29": "4vUY6tkxtZsbBRFZD9uJt9vFitYM1dxac6yXUrkqyVuh8TWhSfQq79jpeYAZr45y113zbLLfNJUaHTq8njPskbEy",
  "key30": "2r6nM6TMcTWhosac3TDgjP9S1Mjc52pgkH12R3V1ACRoRoSpkCq4LS3eLegv3cQKigQxoFr7d2LbP7a9P9nAr8et",
  "key31": "5eqTdyHFmEEqGBAT5fXe3yxgDf7oQt3GcLswxb5W7Q8hKQqwYFCkmQBxxiykN3aGrshhwdcmDGYfUDnoz1xgvHm8",
  "key32": "47H35ntshHraJrh5z7QoEiMq9MG9DQ7YV2QW4CbohDaYwMJZUAw8aAEbjuKFSVq3TUXWakuSww7XhQyiC4WoV9cW",
  "key33": "5NCUT8So915rhSWsk3yjEmWr4rrLng3ETj81mS4NerpNpoP4aFjKsiDbT82AeRrcugqN7CzZ77e65xvFVzm3PMUv",
  "key34": "3jiZvrdBpdw6aoQxfQ4LYDCb3NSnqkb5uX3snvqaS4inAjdtS1N65f27dTDjRUvw6U5oCvg6GNX93xrVdynXZLca",
  "key35": "2EeCbmutSwd7MNjjJscQpQBk2k3rH5usozjqmbypJAX7cmFWYnopS5ZBaL51BAQSwb4Pu1VgpCf6icxtjYMVqFDR"
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
