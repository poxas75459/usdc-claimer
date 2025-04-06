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
    "TXwhYphfBcyTNSaQ4Nktcfi4woZAWZmW6m4oCRxSZ6PS4FoKbURPz1ockfREBKbjxLrMHw8pkMxZmTv8KcNS44r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YKNUz4y7UzK7Hc38QFrGec9GBTvmHFhuFyCFMifNrjEeaBpgATJ8UnsoQSMTCXrypRZRGQbSyc6HsSRnQpuChrd",
  "key1": "5p9aDpPM1ohqt5GhzdYdJ2XvGyFG2WRHXk3uxcxVEY5gL3SGA4RZUWRDJvtRryCF3cftseAoCC7RQFETxJkGN6Rm",
  "key2": "5YaZNJ5ogqvhVF7rwzaf2MEWZoSHChQMPe9Sfj2YktHbCUtEHJRguCqugadrxWnE6NF3SAghbn5vSGs5RtperHtR",
  "key3": "F32XKMkiXPeuPwtcZMemL1a16vAs9CvBTxq6pVai6aoxvF1NVPV2R3Uq1pjAR6GdetaycvRZehfw6E8LvKAX2Tq",
  "key4": "35jJRfPiCtggiE2mz4W5YwNX7MmgoV1b7s6jBFyqiFPid9KDmvDrn1Nt5iyhzph9TGzaVzQWMd1H1YpweATet43a",
  "key5": "2qsi2YWra5uHUaYxXecKyvTvhGU8w5uW7KdvgJu8yZS5XpxtWiQPMatVfbgTPD28Wg8bGk1WxVzFeGf5BNm7CJJq",
  "key6": "3XFGfpzUxoFHbFaDRfsvwCBANmyc2xGFDzCgngMnG3fxCdhdvA8VrzQ12LE6JHcfE6aYAhRF6AdZNYsGAs3vPiX3",
  "key7": "2tRtaQTEwt1sTFaTuCBg7KZbhXodCHek75uJaR6oXxd4P2NtqkrGX2kXFYNCHXjvsCGuBVAq6CBgeQyNftjiUeVe",
  "key8": "5JuRMXz2qwaZiLWFZnuaXNwA2jShw41emaiEHpYhPV6DmoCMJySr55fpziYmcBJBzHzZCpNZmB3HyTWu6gZa6wqj",
  "key9": "47FoHAYYDJ4qW1kPFdnn8YBU1rgVhwj4T9RG7iJiK5oCfexiAKXrw3vwxWwbnMpfxU4YJHvKaP3DnaeQk6kSheFK",
  "key10": "VSRJN6JFvnwzARwjsFvq2bE7u1ywmmY2ib4iBLVemUFXTFduiQQsddH9atLWb29eBsvUSrDQYfzgKaPwHiphpF1",
  "key11": "2cCS17mFd69wFdPGT3AfVEiPLNJF6og7nBEzJ8n4oLG6fzod1UhXePjgAYknEa5cCREGbvcrvqjNsbaqTR1j8fus",
  "key12": "3V24eFXsnDFstumuwg48n4xD2BRaBeBigH6dMRpaGvWTyQbAdUoLJUnNdNUCEWzWBxAzzG9DxnnWWNFKQFsMGCsG",
  "key13": "3rmT3jnGdup7hiCgbfKd9rjet3dwxqjciCeSJ5R1U8FPXPUiQqvewkSCzhPWiD8RHZi9kABK9kLh2xNKBBPRMavn",
  "key14": "4rf1rvFaUj2E3tEpvE5WKiZwEnmv2GEUphX6nheVsjmL115tGbxei1FBNhTGtUN1f872f4U1KYgk2LZPmzgiSHd3",
  "key15": "5Ww4xR6mk6jPhd2wrKGEBT6YJdpiNhkRU4DHAqbqSkZRayXdCoQerSHoc6R1xBRN1p539W9Q6MYsZzkpMrpAUNDV",
  "key16": "61Z4Mf6Q8BLawbTHBpNMUpt76t1FUqLjn2U8NcmeRy9sB85781v76Cbumu4YL6E2SEAVpDGcQJ1RcdJDu6LPYtWd",
  "key17": "2Cmj5EJ3Qyg42tHsoaf7pjCzFt4CkPFvG5uSCHPHtu1QxvpGhZntD3YAqB5EU1pSSVSrejppr6dQie1ubybzPzPZ",
  "key18": "3QBKUKB4cpfTZTzibN65E7yxCQ5YLdWDhpBJNW46wv3cA8pMBajBpx35qijViv2jR131rFacxKsRzvUodhtFuvnQ",
  "key19": "5GWsjwP8yd9viYcbZW5LtjsicMoHVawSK2dKKLkkSXAkmwmBZwafr4rcdnutGEjSm5FFBwX9SabdqxSMM1zHzPTW",
  "key20": "58GX8RwQNp48uEFHr8sQtrFBPYRHi19QQkb6ppQE4hUz7W8c7E2xwuX6uhBwut8qkLZYyjdYuqsoYVb8n7MoCzZK",
  "key21": "5TTTfQuwZEiEi6dSafb62rzh3XJrQnm41tY7TKpuFgdZkVoM48YyFNbNzhyQUN8u6HqCCt3PWB5reQ8VgYZLSmiN",
  "key22": "TAEQ7dEghAcHiy5FLD28PJhbPGXB5BK27opWHpwqq3hQbkCfyKbfQgpGN5hdjJzw5QA7eK52Qc4dM7Shk3jf48y",
  "key23": "5CWVh39SQkDdNPNKEv4mAgP4ZWtaXETgU94pQQBhE9XVvSxDTTpUyjZ6wUxswfuU5iiMYULNc8YAwJeZtM2fiDz2",
  "key24": "64Aee6zvYSyYSD3S4fet483nGDUyFRFWpjYZjh5BtkTpZ8UJVwYmZwvJX4N849PzabsdgDAPA1aDcTGFgqp2Dj2k",
  "key25": "2XYiWHui5FPZQwuLmaYjUvfe9Fg3F7DcqUymjg8ZxG2NKTsCuXLXGr9kcy2SRV5rNsAFZZsLLyoLpGpv9fMvJJPW",
  "key26": "5cMq39neUxHQiFMtedYmqDaRmQZbBLKimGvH2ABtMnNLjH85eKMzEpABdEbm5RGCirPW2zFeJ6r9y7HWgZbMmnk6",
  "key27": "3MW12VoPKP4A16DtdBPWbScJAWcAssc2ppsTZGimjgoqWPSkFzZh3pmccK3wdwJbEPVjdQWHjDPonJKBFZziQ2ku",
  "key28": "4eAnLoRUNdg1QB2Pjd2PRc1b32d8tiGoy8EB23xTL11jhE5vwSPbebsaR9y6ydxTLLyvqZXfAWdqXK1Wor9qNNMC",
  "key29": "4QqmgA2p1MCzuAyJxvzdMEJidb81LqY5q4MzEvBjpZnmkZtzqwewUiofV8fW1qP9jr9mK1ZPF1vN8XQrVDNxQQ2M",
  "key30": "4U2eGmzogvtf3KP2QcbffnwymdUeaRGHt6PZeUBdd9JQqC7EYCw6KbsiiHhS8fpyod6L1hVbM4mYWus6HCM9ks5a",
  "key31": "4iwgTcSmx7jQF58yL82qWgVFjuDHSNyoBjgkV2PUi2PuqVss2fUYLtLNFeRJLqRgt9fax6RyBtA2xrQfURAY81vX",
  "key32": "3zJ6wzNtNfTZAr4HLm9R5ZTBBgYqTvk47ovuokMXK8iRry4h86bnU1nmnkRYtLsqQ2CkHLu8GnH7mxpybPpVY2U5",
  "key33": "sb9WczwQ7AwRRaTtoYRPMGdXAw32fHvDiNMhSRcgAYwMBBuaCZJq58w9pBwW3ECriH5zHHDKzNynna4H4wrTfAD",
  "key34": "3ogCwbdt1j6TEWvY1pbCNqGa17o67C62PkDE7aP3NkPN5pqLbDJsCLAqvFfFFCZba9B9T6ctCFg6An6STkrsxBAa",
  "key35": "3T6YYqXE2A6cBLaWLkbXagpkDmqcCLqR5sSmZJKtosUYna6WXuAXGeNYzPoLDTBtux88LUpaPyTWEmG9sWsDnhVM",
  "key36": "33W45PJrasHVCGZNktXyAjeUceYpWfZafuGcGjzpThKf9AGhqmYFQC72UfLL2JBxcmYGUMS37XBDQbX6Q4uJDjqH",
  "key37": "3XyhrHrHdpPouQW5MCBz3oaNZuSwwGK4eCNvG4cJVXSzeDbwBUKJdF2FrQLu2Cgo9AoGGjLMKXXsZBCbBGzbZwXK",
  "key38": "4J45mUHbf6XDS7tSzGeo7PhXkYFiZ2xhhyaBPNrtVGNPj22XKEEucvV1v8sADDZoymDbtwxiX6YqDfNvmRTJqtys",
  "key39": "3wpw5YjpL13RSupBk2dfCZKibDMXvqKPiNnxUw3wUwiSC85eijG4cnJx4JNWWbwwvicP2ebM5qQjb8NTNXVJsEAL",
  "key40": "4rndPQjhZpj5UzMauUEFnRmdmgcPSk8c2WWkU9pDZpxn2LrMbLdFvzhp4KYqAJmv59M9APLQAKEQqsfDjPjayf1L",
  "key41": "VbkDuNWJ3ZbdHjMZKi9Nndf1PY1L3Xo44SwGL5YK7C8uG2R7y26uW4xMgaWPj1BJj67zMRxo6t8434tRV2RA5hK",
  "key42": "4XqoKuSquZNat3T23tufEq5y8Zq5edAowHrC15cwvaqHKZdV6CAjXQ37LTmJUAV5ToRbuHvu2GXfUosRHk29z8a5",
  "key43": "3piBmGPmvv77QMXJB4xosX7aBpgufgcpVa5m84npvGjXY8u7MWUhuuRvvUj2C7LXtJkLMdWNA6cyBN3ZogEEQUu8",
  "key44": "4MW8zEBwRsWaQ3eKB87NnQzx8w5Td86bdnGxwdCkdXNpmkLUot5g46Mo9xs9ByCamcGKMGEqrWYmqSceC9jbzPxC",
  "key45": "oE3xF8xkpPFNwtpYkjXDdMyv4nVGiZS1nSoriEna5kaiM1txzEe7gq1ujaiY94Uqk8DzWyv6uJNTLbCXhHyMm3g",
  "key46": "37cnvm2v8WiYKFbip1bkPmQXe339k5c8m21P1Ldv8o7cRHbCpXbVmymE9LC8ZZQZgiWn8V2xY9DdEPvXnz9qK6pJ"
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
