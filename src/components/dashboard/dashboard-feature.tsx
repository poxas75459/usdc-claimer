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
    "3B1ek2FbxFxawK5kuVEG3Fyosj4CidSSDz8FEuP3YouxCJMBBojR8cwNgo6SMbKpgWVxTbN5UdMyrHDxatkLiSve"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ichesEiLC8t36hUwamQciPNEpVHKxhzdm3BSQ4zFxmLqQwpU6wa5gFcuq6LBcj8gE6uJS72paMjnj9MzWNvxJoV",
  "key1": "5D3wBsR1gmCosw9z8VKwro7K5ATi5HpX6vYgQcrW9UAmzZ9EtANcaNkbMJBxZge9QUxWDEjpfRdB3XXvAg4udWdx",
  "key2": "57HLZC237B2hDqm774fzNwdSYP6LnruFT6gTJQnGMrXFs8Tw27HZwPxLUcZfB7vhHnYEqsr6xD2bUcQfeFCUswko",
  "key3": "2zRPAzoiKuhh1UzL5s454eRc2nLWjqDtYxENCkBgaXScx7VRaoazAWTk4pv1tnfLyCU4YqPfBanLeRttqoi3dR4y",
  "key4": "3TZpBrYkn4ZVkmoqykXiSqUZVLrBuos5Z9ZAFaXtJHXZCQ44qvSsXruNXjyWEVeaip7wWnPfD3ELBhsynY2S7GLm",
  "key5": "owtgkTWSaVsJM3ABf7FKdzj59bwNj91rZ6fxWzr5jfZV3KvVWxq5X7h7GnefKoiNKYJohHsXg5gcYMRh4v8QEv2",
  "key6": "4PntGeJLGm5sTE68LqXHAjuKp2tBWk9ocRwzWJatRvpJKUBt2VjP6JxqWxmXGfB9iwqJpQwKyoZoJr2X8W4CsoXH",
  "key7": "5AsDpd1NH7PasixbCiHCgi8rK16KpYLshmkoDaAzGR7mX4MdjPfGFDaMf73oZd8znams8v8Mv4HYNCKRemJXGAY9",
  "key8": "4JpRCwaK4ytZPV5cfGz2xFj3ekvxMR6R8L9biffDhEHCvzmtrkkGcDWg7GHYvMj6rsJk3C2F4tN1xvzSDhueLoxP",
  "key9": "4jwXZdJiSuLRvygZoYKemGJV92hx2RdTVeWj9JwHWza3b5x6Qwmt27rjKinvq1EG1Xx6zno2KiQyKWQYrQtiN88P",
  "key10": "2hsJwTPV13udJscXTfGdCyYMMsvqueiuzMehb9GdwVwgUnmZ8g1nn22NkFWaWm4b4y9DfamoSVV6H2Z84m1SzicS",
  "key11": "2tLiZi22RaqjzWVjqpgWcdDo8b3bpg8Bcm3dS3eSE73VD6g24sgPCUdHxLShroCsySBaYVWBCg2axaFk9eR8neTS",
  "key12": "TMuhEkZsMoRusrUCPCDAYHr848kmoXpsTVTBmEqqPxvqqjNS8c9HqTtDRMHQRV9asdHokfgULUczMr972o2cyVy",
  "key13": "4KWKp9wW2c64sbFNudFgPntpJ1KbLsYceGh532RWV6t4vWPPE2gSXuDcZ8TgtRP3dTTbZEeGziPEcWmSUqufs5Tj",
  "key14": "4dDkrjFkuQn3wbWXyZ6dm1MhFD9DAURyi4C7fFP256zvUtbjb4E4Fw3MdAvjRFzfKSu9gR97cMGh8nbV4nkTVmwL",
  "key15": "58Ne45UZN78G8AG5XvCrNUe3Wnd3pPzS1aVzmC4jFiRUfGGp37jswwS2LicNqLsJwQQpBcXYC41qLnHsqBkHMxdJ",
  "key16": "4Aq3fCNu1zzXBJnYb2T3xmB4s7pK5LYRbgZzVFgQquEadY8fgsYKaPzFZUxrpgnJ4NDRcwMHLZkBfUatQjJYKRLe",
  "key17": "2CBsqY98yWnsu9Yr8xJWdSb7pUqmi1ZXxkvCrTLuvkc8n2EE5ZjBbhZMmUKzXcLAjA5ByqDdcZFjLmUzNc5juAB2",
  "key18": "2TGS4KfSvrFQgQnrADGPSGS7WEyEuJrXkuEEW4Gaw9agHTkdpUNszNdgYwUiua4DpupvHAhp5hKid8wqptkZKCQ",
  "key19": "39bYBEEhuR9WiGHmAJsMcBXpGcbjFRsiZ2vtWeZU3yscJRUuhRPqzUF2dPJzfT4LcGqeLNAJqHcsR8dgAChyYq2S",
  "key20": "5mdNZYokHtTfJGWru8wox49vhNr51VaLWqj5tQoSRAGctjzZ6aCXkmXsMBjmqPT7A6FV2xQipKidgMZLSc8QQodp",
  "key21": "36PtZcTsiwFgA6HS96EK51yWitFDfT9fqg6oTeGK3vjBaF53Xkgu39hXPib6F8kvpZkw5KziDzfYc4NSCKPxGYNx",
  "key22": "3ZCaz2xLd3h9LsdzoCDnQ9fxsZh9o6ye83mDiKLdjw5RY4dhdAYRT9v2wumQxMJcvwbSeU1NLoPtdwsQjBqDJ8ez",
  "key23": "cys21gbeFonCxYPyy7XHV3zQFTgCSHRtr1dbhFpq9ZrZzWTcLn3ZZLjpgVjoCruL4dAoQXNdYfKpUx3JH2xD2rX",
  "key24": "3QLGYecw4DnfTYnFfDK3FX3Qnd3m5KNbi8VpyJ4NNxMpMHjHvBZPck1Kakjrmx3W3FJRaHyTrP15DReJ1gdg3Tvx",
  "key25": "od6UABJfs5e92haUTR7DJDY7UUqXdpGW6V1weGUfcdPxZBik3NJb9iFQNrbwo3NYXde55XmMGVxrrJpF5FeYtiN",
  "key26": "pNRK7uMzyQEK7WhhM3UH2sw1nwm4pn8rkktMsxwmcUchuhnk1NGYxrnipb4fsTvUJzcZd8enpL6REx88UNfwo6m",
  "key27": "52nbWCmtA8V3KaoGvnGQbkmPmt87HtHcbKkP2Kdj3o1xkr8XxvUXJht6CcnXTHGsLpeUgtgFo7fwYANhuNsg5Fez",
  "key28": "3dmiQnPUhmJKHxMsmXSRBVqCsPGRu8QVG3dJMeHyHwgfFTGR8qEJ9zUPv3PhffDpa3iXpF1z7sssymuyqmpcJ3qN",
  "key29": "qrKPK8hR2p7yzRj2UeigKSzdVxPxPKYV8KZgui17wW9eLt5TjQQgtziqGffMSJmYK18xfNRzrPMiCNpRjPFq5PC",
  "key30": "5PRXxhGo4JTGZ6RGuRNFCEKFw7BDRr1JwetEYN8EAXffjSg1sWUahoyn9xZio62mX9AkhGD4uwXpX9u1mX2UikGM",
  "key31": "4bTQYT8P4PPFC9cR1stMQjsCvGCxstxh8kibk4ZxNu7cXXHdeHwjkTJdDU74H5YzqBXDr4fBA1pnHefPw5C3QaRj",
  "key32": "4gvzZp6EpX6gFbmowCVsLExLqgL9FTFVRM4vCuky4GyP5u9sA6BCDaHC1LHDEjsBHFhFyg8tsGh2pgPv7WzusjJA",
  "key33": "3ZhS4FH16CmPavmnVrvE8NigTJ8hLVxBnSTCWBVF3PjNZMUSCxSKe9MMAWqDYYUb59AgSab7cCWnUZUhG7dSdEx9",
  "key34": "3ejj99cgm6c62ZyVw8UjuqZwX6rXxMKQFzboX5QWQyxfN3W1tTQqE6BWWSE73soG4zy62fwnSmjCibf35YhLVchQ",
  "key35": "2HsGwtTrruH6tbKpjdfCeENvJk1tnjQBcGScDY76XT2h4rF7SHAHPCfsN73fckv5b2a48Qt5h4Su8vkkEJrAUnrR",
  "key36": "5nZvkxZxWP8MDZJn8Gax5GBUyneZfvAB7WhQCPnamS31sCMpDFibqro86vwpgXFaXMZv5uRtvew9UxpvKnEdGX4Z",
  "key37": "4n5jJ1t5bXBqrsbpctThonUc9SUiVNoyEY97K2kF25UoYD7Tob13kURvMGSpCbk8LyJnptZ7dPihxiyS3Zauhhpu",
  "key38": "5i2X1xCysbN3WfyDuXATdsBS9r2UCkByRZfL2E3fToStdWAtABvGvNdth4gYquwunu71WpNWQbSUhDNcBACFYtPF",
  "key39": "4CWPEDK4F8jMj9L3Zucj95g27z2uS44Zpnvs5scTS66sFkbjoQdhfD6NCDq3sRrKs3vz32548RVnLqsu9hF75AjY",
  "key40": "5Vc3qy5S9uTAXF1scdoNhCCiJ8WGMZ9ZykNyxq4hGifnExyzjqTb3vefq6KiKx1b96TWKjo2A5UJ63YuRcB4y3N2",
  "key41": "6EUZHCmAMoGEaegRwPw9gJ6RnbM8GWNki11wrq3keHSGAd3BYifog3vUrENQrPwoPuaVYSPSJwoK4Tzy3JE9ZVb",
  "key42": "3Lcrz7qvMsvfj1VZC9wWuRfZz7VpwgShKpo7fM8Do7qLu5aGXGrbKZgJJyVAyh3pa7vH7DxiWtxSU4YBExR2vKyq",
  "key43": "aWohChVTzCGoSzWZDcSdiLUQvB87dQpvfUfARUuUpSCbCTyVxmDb8iwB2r9zaM7XHS5TvRjRQyVDHZ9FiP8mzSz",
  "key44": "4sjwPahvhDnyg3a2JTyqRTJNf3peQDxfiSAsNjQ6NYEMVXtb5HzLA5M3nLG1rdFsfWF7CPT668jJi4NVUQMru3jZ",
  "key45": "4McqFiKKFwZCpYHoLStjhYuayyrYvZxDzHKvjrqBPCGMmPeouN3uEigjpfxRXn8tL5SVLBjiFj6eSda8tb5TdPLJ",
  "key46": "5PYG1mSiPVDvUEFyW7ihG6WLz3Lx6GepinJYziG6EmE2XDKpJ87X8xoApbJjxNgGcFDynwyvvwsAn5rjdWuPZAWW",
  "key47": "5wb7JKDDzfnBQKpDSkKnkyJkRzGtJREra7cLZbnvafug77rocn38iUGfkcxyhJnixaZQJdpMNCaexr4fv5EMFHzZ",
  "key48": "5JNBcSRSE62Jaiht7KJDQQ3ideUDPerk1KfDZxCeVmAALrhzhmUXu8VDDPzuvUWnmQzuTV8TXYrHnTZ4mirWqzos",
  "key49": "2nCr8hM7UhVtMRsR4iKsZWDxUT8833WsfskLxvHPY7Vv8FXADZA13paajWadgywBCV3W3f6UXn3hX3TBSs5QezTn"
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
