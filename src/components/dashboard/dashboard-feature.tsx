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
    "2np7joDy9T8SHccZNYiV4wrpACtNww47Ewvx9zGvMvzMA6phVZKUWdHFj6Rf2JkDJhaiPPZ41hwvz88tWG2aCvbQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26qz53SnqrQK4ReDSjap1sMtiT6EjRDceKKVyXKfJeVyNq91PuMUKk1yADi3qmPrcKUDbVQfWjrbZfPRaPYf2gvK",
  "key1": "4kM1NpNdSnFQkq2jMLGxmHiNGb8X52CZN5mmA1CjxV4CdrC7cBipEK8PJPioCZNojsTonBS52fJGbJbC24EUMAJN",
  "key2": "4UDXXXzupTzPuQo6KUKZWsTG3mT6AdHmpeMToeBuxCZvVynqNqkPQ4NRZLm5MDywbp3NQyzd4uhpuhjn2DyAKkGD",
  "key3": "5brfehUvpWF7TeuFZuQC56VD84uzM3nYJJNdUw7pHUEjiY2euzjQkUc7SWMPeqZUbaSa4Gkhbc3q83K1RU5wpyXp",
  "key4": "3zBQhPvYckabHXb7FgYzMGoDGtCseHcDyLsAo4ar6q5WEjJbQC4Nh9AyvF31x6LRwJoqd4GcWoV81zRs5W4VdDmL",
  "key5": "48LzN8k5iR57rNc6chDEjLczWS7NXYhBw9Fkk7AT78VfJyL8k3SmLDdxUGkqwSocwEv7z13o76QFiZ2s94xhNcb",
  "key6": "2UhCczpRVLzQ86SzPvmMVuaUmhL9qNLqR5xamHxwmpadregvAJL2nm4bRj4gfqSWzqBeGKoGZnNfHV7EGa1ASyhv",
  "key7": "29NG3NQz6dKXuW5EG8nL3ZCmVpqmMZLncE4Ujm1Yt88qZMm95XXPESfJSWL77bGcvL2faHcXqykZgHiCQyeydK15",
  "key8": "2BgVdxC6rMrUXdyxgsjFkwzjzt9GAUxH5S7szHc5BWnjYCbueNRNzsNBWwv6TcmTWon3uuJ2Co7aEnes6fiYTA3q",
  "key9": "m1ZeKY9bZ9vJfvMHDvcfe2JQaAEuaZgGbsGCZU5i6UENFf45qtENxbypBZehm1fSvmh4yaKLoUS4RTrAQTTzkoU",
  "key10": "5VEKG4dk8WsWZYB7z7TQuPSf83GHjnkGtP17uKoaDrkdfmmGwLtNtv7DpDyMDRSEUQAzoZV8uie4H31G5KivE1Fs",
  "key11": "58aGZ2un27VNWKkM5K1fdY2MmrLr5N2AgZ17oPU1FzTcLtdcUexnU4zfUmXW7fMr6gB8hjLLuJiy3hLEUUPg1kBk",
  "key12": "EaACAjgFCSprNgg5hS47HqtTF8EiFMWkmrTsQx4FYYr3VJ1m1hBJbXTwqqUQa8GLbBSNcdmQwoy4xscEtvcMPpF",
  "key13": "K7Q2iXx6VVEmP1i8PA6LWr12HMZdr8qCDgptLNMsQKr9YeKZmuzr9oZYESMXti1SHVu5rfq1KeAvdbAFkyuaoYC",
  "key14": "5BHWG1D3ospeY2Js7MbkaYDVZW28jPX8XwpCoocx3UJgWTsw6eSTJ4VkvY91s173ipK7Pf77SbkYN2XdnNcC3GVh",
  "key15": "5iN5BT4zKSvmruKTo8jEqyDVA2gGvc2nGnNjVdTtAoJd15auN8qCmcGwUzaTz43WTJnyNWKWp8dDcJLup2e9oeo5",
  "key16": "y4zAusEsLJeimporhbrjWiDupYiZuPRfVcueDqPp8jzC3vKoic1wyMqiods61VqXTqkUD84BUtceMre62wmD2Us",
  "key17": "5jT6TP9q9oW2kAErUVj2vJFB2CUHbxUXX7cMZRrpSAG8d8YZHZ11mHF68ShccLoPVymqDZBojXQJwwPbEndVtBgM",
  "key18": "kbAiiQx5C8fQP25jnMkdSo7ZbJthCpQjY6b5ntge3NofHoWix28XpMPkkcXPfJkfG9sdbEMwravAPV3CPt3VhGT",
  "key19": "48PbSS5K5F9WWLTTb2wD774cAUH593szgxDTgjrCQCKoM4urRSKfZDEnCFnZy8GaUvRVJ4wbKg1uKGtWsqo699RY",
  "key20": "5TD31ZyUiJimm8YtUyvCCnRXAtHw4VLeqfCCeQa8W4rMW1GUGognEFfXKm95JmzzF4pXYJf2LCz4LuWhEKDHf3o6",
  "key21": "cXG1xwbYDmbwBmsSSB7ataSCDiu4qpDHrx2NbRJmBLoQ8LJ849tSBEowxkE6TizzpsBZaDXCPcJSUwuj9uRiN2g",
  "key22": "GjXwRHhreTTouaGXF1F1kj7o5WnRdGPKNzTLoHB548BQhrFWP6Z2cURCp5ChMkmvBLWpLj65ytKvxBSfUpyCB22",
  "key23": "6YkcUNWVdWcCbNQqiAu9QzbCjx2LsYjo3K9RntwsnYF7mqwYu6rgp1bzZ11v5Ay86nTUui6YQwV5dqnrenLhE17",
  "key24": "3vjfSbbAtdE6tErGrXacRqMUErsPjg3WvwqWRppFPSxUHQJxUo9gSTzcn2Ww8N27De9kkToj79qhNsi3LshTS8Rc",
  "key25": "U9NcfTkSkzHp4ARzvQdxeHZuUNYhZb3zw2LshDdjBZjfDLBXLCFGdU7dcvxtT5psH1eVeABbGWno1D9rA6y1QRo",
  "key26": "36u77AAcu2f5XHNzDuArxGFCPhjkMGzfaLrsTXbB8pW51THvwTohaEPAhGbjNcUyXyewLzGhat7qq2oMSghcSBxQ",
  "key27": "2o2cyNGKmMn9VFdjLq79q75hJAMsYTvR6pXABcgZt8sXY2Kbnvuq7shT4gDH8z6eMPFKBk8nMTiUTaAL5SznXowS",
  "key28": "2LUDfoYm34B6Futje7ubHK6zYwRXcVwzbXySTZvSZkHUUwqwM2SyauiNze12DFgPtnLSjcETn5F1hegTRSvTuU5t",
  "key29": "72mpyD8TFDxb9eoRsFQmayDWZHhD9Tj6b4HmHZWToxWJp6aGtq5Jj6St38YAei2qENAUkqM2sHSp5agq9DXQLZH",
  "key30": "2ziR99czy5EDUbcVEKg25rGTafQEruDpC7fPyh5Q88iHGtti6zYqbton892EneLVjL3UepadqXUxVHP7vS9c3hcD",
  "key31": "4HKJt7WJiZexR7vjQyQgmMGTChGJLa3ZAi5uMjgKxqJQbFxhMXA7j33AkrzLt33bHVuN2KEH9SfDGTswXUj6RMk"
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
