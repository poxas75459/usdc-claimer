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
    "25WuetCqUYMUPwuf2qVFpcQhbjMcBF7gbXnFijtj9UEPAGWhDujNZ2aHqePE3qtMxb8h1kamGjkE893RzekLpA8o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AVQaxqqJPpTLBTiAi8TJoEhHQPSKaD9kgLTCL6EKkn4di9XKUaHMWp7jiPY7Jpf3HPed3btWKjh7C2vSafdMXPd",
  "key1": "5TJDA3QfHKbjM6CskfaXbyRfnCnmZiHd7BuJ9pgVL7jSYZYBprezMJzQcQrBaJce3A7GfsxRPvyKRY7bfHrP4b51",
  "key2": "55Rc5dBBwDp3gZWghbqr6vRHAFc21k98hNWNhfuYfgKjA5KmrqBbW4YPbBZy8ntZkLh3tCA2EFSZBwtNqsEQ1Fiq",
  "key3": "2jgMHSJctMpZq8xL6hoShMfwXB5xu4K9LzGHC19bnXQPJzd3GcavYZfSmsjsTn5TJC3hVwtV39Bn4kU8TCdpBmHX",
  "key4": "k6C9iLek2pdzBV6TyTRreMvaypYbts3wqWGqEJ6mDyGWRZXpw8EPsYog3jfT9YzEja1DeAqT45Cuqs8wEGmK32n",
  "key5": "3MRnTmC3hi9SG5YxhRoDnd3NejNYRFRRppc9Ga7kEfJ9yiYrGNcFhJcT1FksqmpuFKJehZRpWudCoGp8krBMhCMY",
  "key6": "5jMxPvbXT2kamYZLnRFt1TW4aDzzosZNQWrZNE7J7wFq8uygUgpdJG4gLHiY6DxNEoF2rZLjQJmJqZz2Ag9caFz7",
  "key7": "3x6Df1g2oizYwVmsBvpshU82JrufRsqaWu6nNXfeFcRxQ8gWkEGQFgzuVGbXuSY9bkoeFYhfZ78zimnmQn9KnSV2",
  "key8": "54sfPuTq3bM9YUzEhRDJnpS8DUuUUo8jfFaX8Mbv2ZLT4hJKCggzoKhrC1hqKcLQXJ7ithEMk2FHt1b46Nguz5Zp",
  "key9": "2QC537JzXA8SyvCcXuYap2aiqYMf3cqdFUV6BShXXTrwryQLoVkaqMXhwFyJUwNHkUPiMcwNDtfRErTnBPMJpNcx",
  "key10": "3SK398LSivj2erSZrdzxkwGDgiUWo75yDz6d6bNxv6eNLD6YzwLWy8PVdBAhh82yKmi3ctgJAwY7bAQtf77fUYZw",
  "key11": "7jVDsjSdprf2giqpmcgLhZuv2MFtSJ5TLur4EuzGiobd1RhJbGybzMtV7Q9o8vnf1PdnvxVz3atWvuTBYvrPyKN",
  "key12": "5emWC7fU7peMgsxtCb3SeNdm8rY3rYKyXD6y4pbkFHax5tx7dvD9rj8s4je338cLMYNbwMQxNmXdz7N43jxTzEYg",
  "key13": "2mSYS6iLKookj2AoLv2n1LmkFSkSPMXZZQTLGXcGDTGGBXiz8EXEmRJN73XibVAa2Gwj7pSkjyVk8bUnNn4tt2qJ",
  "key14": "66SFhGf3uuFV9RuvHRgDPFCjGruGc7bUXABNEzmtJSNVkX3mTtm9xr5csoQPDBkvEFwiFTvubEufm9BA7qR8FawG",
  "key15": "CKrVc1AG3o6kBFZWxi8utHLJLoreqCqdW5dfeGXEGjv4BXPmPrGoAh4EacCr1hBg3ui6DHMujpvLK84VU5Y75Bz",
  "key16": "ZMyUVtqw1riqkLepKaFbXNXUQHT4nzcQ4v3RM6sfhqUTzhSnU181dzxpoZZ1txTgFvjmWXVobB13DW66XQKwKHU",
  "key17": "4pwdvnc9NB5WUv5pJwepb8HXSt5WeiawaVFpJaUkNJGSdH5u5Jw7Hve2ikbgno4jU9iCA1kVQTXApkK5Efk7ErEP",
  "key18": "V39K1dy6zQR2MVTSR3NKxjHmhHAnBthnE2nt7CN3ZHXj9frS91VCA4pxhCgr6bgPedu7Z8yD47JKrAKhNPh2PU7",
  "key19": "qEKaZ8Mkyo7PnoRRTPsZqCSWSjrFPquwTfDHY2NdwyNSmf22xbHxFvzdheccXfPZRMB1TcbGuSk1FNSeFpDyR6X",
  "key20": "4EeGwnTGpgxW81i9hZU1EKTxfq2Nw9dcxqtw2nNDapabRPNQxTeJqQ89TjGKV3nc222Yyy5JzLaMq9VsBzd2WPYd",
  "key21": "2acSH7zRuUg144FX5PauscNPwyHxT1tFzDcr5iUyntg6E2Fr4zURNR7LasuXoSZkg94SJxMSoPceF77pt1vKV4Pp",
  "key22": "3uHzQSrds2ezq75AvPFXFjYJjpL7gq4SGAwQwED5FXYpkgtkMkZAv3Lk872YRQxv8dM1qNUrbo3aVjkjWQNfnSQQ",
  "key23": "4FbkB3qnwrhyqFoacr86jtzVNKjJoBmLrdrexE4ZrFuo683HTWg1K8qpXo8YrKtbudNbsqaNbJshycjRtf3CEZdJ",
  "key24": "2GvC5thXK4RN7G6Puchqfa25s1mhYmP8hC73LGzvjoQ789GCMi9EEYvpiKfc93nb4TA9ezELMLNLgjASSTiWDPmy",
  "key25": "3s9VaLuRMP6StRzaMiXzJpcH1hETniY4vCzyUhtDk4RzpFCw6FY2tRbngHfZCsT6W1xcA5jvWA8j28Vv4aQsecQo",
  "key26": "3MGTXMCTZxtgUaqCw2dqWyE5XkjGf4wqZk4VEgTUAXWHn9KHf334YjLXDxyS9Q5BovjddgiZutTy3amvw1ywQ97q",
  "key27": "3Gv7wNfmmWCh9SgUgNZbPSychyQaoaajMyea22S1hZY6BwqYQkuxdrPGtF4AZfzGv6c3UHGtmF65F7BxAy7H7k3x",
  "key28": "4Zr3nRxgUTfLg1ZRWhTphBCL4eKeG4RAJKAuiwFi2uGSURoCbaJtFa7kZW4uS4vsGSjKSVZN62tMdR9nqkJ3XbUK",
  "key29": "JX5SRGADTmti9KNm75ANvyN7edVsC4fD1Evzg4vMui7uN2aTBBxXUyRnfRgb4BijV9yhNs3vBZ5b6Z62fbQbu6P",
  "key30": "3E7zfGANEcvCsXfhj6hrBc9e6w4kKUpq24CvBB84BzBDRNvuKDYKkafmQu4GMT8Cqj5D8C4usUwm8LAGcok6LKPe",
  "key31": "41FEwyuUZTMWWd5mrVPm3xE9UN4ymdqqBG5KW6r5eYfsBmBC52KqMzd8EW8r8QYN4ZZb585w4dhT2badAxxGSBsB",
  "key32": "ejnvP895zUvDw5KJJi7xjZvjA7xw3gTroa1WJaXdpPh8c8L4nHGmHcEQQZuMfWYYSBBM5sqUDvWmU4uWjzFgpGi",
  "key33": "Zrj1oqnCJrAGbezb26MkwmqLGrxEpZq3BtafdZgiwYzjHc6RLMkEveSsiNSKDJuiCEHm1BcJ1rYr2Wq5DzHEFxZ",
  "key34": "3RsxKdNoRWt3PyfJNFK3kRMLuycqsfV824PRENepbkfqKVuFbBWVtz6yhciQ9JEer1TDiybQgKt99zzChYxHfVXm",
  "key35": "27yDqtbvaAMwvZXDiGteYLG8kgmhC5jMijvokSk1HazA5CnaEXnZPLTSnmr8L4FhozYfzPJa6uBLJjxieTeDjHvq",
  "key36": "55pf2D6uxSRvbZL7wzJNEt9fpJ4gkbVqyctXfJkrfDc98L93Zy9tbK3wzpzvXaF26ruhCdPnf7536biYz6eHHj2j",
  "key37": "N4QZjUfwLNryCTs6wqEtj6XnXM6NXiziAZHWXoSHtMEWhxEzFjHxUDjEyc9t41gEUVTjcEmzyfMjmxX9RF9LyT3",
  "key38": "5h4RPdydMKxRjB2sBYYnb3798WECpQTcStHFJBM8K8C7F9EoJVFvaC7VF1HJDdyiSC6BWW1aepM4oDxrsVnSMWbn",
  "key39": "645orGq2FhcAxcjKEXizEMFUkYuutfJjnG4cJuhXMUPYQWmqjjj1VgmpTHHChzyWjq1VrWNCm8JGBJe9aEhJ8oVd",
  "key40": "5wP9x8s5N8pvJRFJaGa6gC13FdjVZHvQcawiF4EaC6pdD2AE2hheHV4Pws3RLKpsK2R5YKPHBfbaMZYYzFkTbLXb",
  "key41": "55yBd6RGfNQcByML7ep84D1Js8AFvAExDeC2jhfKF1JR9yXHYn45RLcr5NunbSPGbwEy55eSBqwhR9ii7LU2WmD1",
  "key42": "4upbjqRfERhmSyht1F14e7Co1rYCFNd9kscztEXARBzV6ppeeNpE6r7pAfUdnWkgL4VpVWy4FwBpEGriVVbQnKCD",
  "key43": "4FnyfMkUiRsxUNbT5ut7YkDg7SZV2K6frL1J3BS5jEvPzYacqDBLdQXptFRewCgVxio77r8Grx5RCYDwPK6DX4Qc",
  "key44": "2VuJ9N7xFZHkJiMFtCpuB4wg4WBMxrY6c5rm73yY8FvaAVSqGQxetcnMwZ4CdLPZ7NhjrRxcVMJZDVaMYtMmVpPv",
  "key45": "2d67SEmdmzDFbVagHoe39ftGjGT1sWb8TSosKp267Duo975tpN7Npaf52jNuXhGoD5kiGbze9iDnTZiMs2fpmnjj"
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
