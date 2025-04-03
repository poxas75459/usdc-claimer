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
    "2291uxp6GnXaTSU6snqBZwzaMukihxdM53Jbsc2WBwKzgG1WCY5KwC6rsNycyQAuqX6pQZS8HDwAHNKNNuXPovXK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ew9m3Mo7R7f5ogkqVdj3YR6MaXTxa592g3uGEJcmsFuMYZxsPcCEsCp4myc22UD47Wp6DoTkGCHDvAyMn7gaADr",
  "key1": "2mShBGT8p4XgMVGPuXbJwaCZZEMir6bGKPnUbQ5DJKogyCwXUHpk6FNcmJibakkB7iX7qhpBfe2EdGXihJFntrGX",
  "key2": "FT8LXjuki84gm6P2HaLdtqgWnsZkppTYbzZ8MsgKUoyw6WSEpaLoAPrv5jfp3KQpCAyXcfQCiZsd9q3TescuBcg",
  "key3": "5PryDFc574s4WHMum9qmaWsBsBKEWD1rhY1deYerK4yJ59kMHGtLaxYh9koMY45Vfu6rm3sdrZi67wTf2CTBunrU",
  "key4": "2spiKXvjmzWrCBbEC6hvNgNq34MBUiZxrLXZs4yFvMCX2YBpeUFZtFjqsEjDueGZQhc54EYxcX19n1UBvNofSn2k",
  "key5": "2td7EmZksKv3shXQKu88e6N219Fkk3yGKhhxfvWs1Lc6rj3zRLsvZp2nw7wxCiRrwXfXMfXbGHDAtdYo2qvVi1Vn",
  "key6": "4yXc5hTPmXK17KPHeBXxu9d5fTa9Lu5EbUURbAwQ1wJMSYGhCWkxkG6XRn9Q9fJTBx83wW3WjbZGS2vU52MRSCb7",
  "key7": "4UNLnuF2wmv6AiFeiYTwtnUEYHrPHd1tt6Dq7QGdW2FdnTBgq3yfA5jSYoTVaqCAcBuNYhrShCRQQ9Ltof4nRF1r",
  "key8": "4pPkNgTjWjf9Wzp4ejEjRBDJKdwC2V7V6hJydqmB516K3yzPCQDAMabLsKZ7PLKeMUQzhj4aF5RmtPbvUXDte6i7",
  "key9": "mBbyo3TtWgCwR1EPKz3akfHkxpSYVX2v4esy8NHEZAhZ8BTPVafYeiyqNeQFZAr6UNqBE9mUJ64EToZu9o7cFSM",
  "key10": "5iLm2feNEbi3cKM624A2XkUjCHcyzhXLmJHTx2igdsJvUt1e999CzuMxkNkvo3cEaemKgLE5dr2E714W8qSmX3tz",
  "key11": "5QGz8drxxr2bWyH8QHgZF6CWDTf14Lnmh6yZXsWAzbaFYJvoKo5NFwiTTSQngS1GhBJ6Yn8ZnXVDKbDJ3x78PTP9",
  "key12": "DdDQpLBX7wvKUwRKwgknXNqaonBDcnjQf5ZXce8t6WS68LQNvmijjfQuquePhpBjyHzQ3JuGBuyYErJX8PdhFJB",
  "key13": "L9QXM1Z7jMthU7iHzmChcmbcmg8vXTA8ExgFuPNJiWiH112uu1DCnsUGti1x3Pk4Mo14ELRoz63VojBAjqW51fF",
  "key14": "3QLeBRSs421zXihW2xayCPZjgwnLxZ3fmu2PEEWgocpYmjC3gu4dCutJ7eA7JynDTbx7dwUCzJs3vqgTB1wLBFwD",
  "key15": "2xWUaGWrp8HYVaxn13aEeCtrSeDH57krEZFhEEX2zTkGvujAE67Qp5sAjgBcf7ybRoAYwdce6DnDTHQLMXw7e2y7",
  "key16": "3j3CGfnUKnjyDBx5xte6h6FTV3i8wN9P3RYtqJwqhrNtjCK1CDKJAUHGVk7ppJ8oWHvtR549LGTPpt4zkJoRLx44",
  "key17": "4dcqnXBGeye4ZQQSVGF5cdtrUdhDqYaxbWo1bgW5KtzaYfCS1n8BHB3hLj14dNCtZ6CF2zLCz2f6BDevxYAcGnBo",
  "key18": "4P2NtaoqSn5u35hUSyomLqE118ibmpYWViDmodpEHDY8EQyD98B2zLvRPToR7jYSmUQgpUyhHbw8Di7EAWAnmise",
  "key19": "doWSBgNsYuC65sNYxHUcXaqdyhhoXiDzMqHPQNwkmP6jYmofHejXKSYZ3zX6fHouA7zdngz4n3aDQnN9fZd9BTv",
  "key20": "5unf7V7boC9BR7uRGQakX4LF1EdZ6jm4azEev6MDdModZ4U8dQsFWiq4yXJbeWeLbyoPDjaUA3waarbm1twYRUXH",
  "key21": "4gVsb5VEwB3F2wFt6N13GmgbLd2NCur63cC21Ysi1P7CDWWkXKr3rmms8XrbW3DncnS73JudA1cSzBijUeqe7dYY",
  "key22": "5uZ1GgkduwnuCikxVn1oNemHwczHq1npTPpVFVKms7NkCypQYfdeGwr18NWVwbEukZSiBm96cn3cdztshT8jUXub",
  "key23": "3TqwDbu34Z1fe3mtgPN8u5kfwe2MhEqKtY4r7s83McjtSyVpcATGoJr7f7uVDXYoWNfY5JQD5nCHwZ1M1FEvnhXn",
  "key24": "2Pvok4kAZAnUq5xG8siy1BhTYoMrKgc9ks3soozphZL2TqxpJHDRKuJgnfKcK9TGNwHS2XajJMgcRCERphEAZnWM",
  "key25": "yVKKZF4kTpf7BSDBoipsJLxB3E5am7ew8MDJcGcsfWnToBqSsVm49yPdeXRSb5vYB8KLegSg5Wr9Nmd8oB9fN3e",
  "key26": "EWXe8aFebeKujstvnp8rbqthzLAfULEu9zgimFrB2CKkBY3DLs9wTvb2887cv25yK5sAbnMYS5PW9W8W86QQwYe",
  "key27": "2PSVpecoom22NbY8ixrBwDtGmwR1Fn1iN8bjvzo1ZaTaChPvXpftvku7LB1wDjFG7uyYVFZE55q6vycf1r9siuBf",
  "key28": "27vYeUS7d5XV9NjGZd4jH7pDzj5GYEo9WH2L6tvuGYLtDcJJvAMsHFfSd8Ebt9ddqykkPkUBZoWYDWPMzrsp8WCY",
  "key29": "5RunoNmXwvXvmjUeTx7oqWF4xmQ8FEi4NfnRZvjvbXVQgJsJtWtsXvy7oyzxKUZGaDBzNv3EE6myYc6DB2btJBtX",
  "key30": "5cTakavAboDW4cpNbTrpoupsYJzzy5oU1hEcP2tPywV6jPfZ3ww1XgHN8T6BmvBsPLx8xNGN9DDRnXV6NgWZPTXQ",
  "key31": "4jhEsq1GEmzszKv69n1f9XNRuGgxc8u7UFUpZsecbPbCTRCWWf1kFHouFeEfrUojycWGiaCqCLtV2AEmdZTXv5Xy",
  "key32": "2wWS1muxa3Fc9FoUrXYifitMFa2LHH6qN985iGLDHM63Qr8Dsruu6k4kH19zpQdYZJRcZTvVSgMcYXsPkSgR61KU",
  "key33": "35eodBEGfHwAS7jqE6QAPBzSoyyzTzfcKKmFsQkwbFDtdv2P2D49DtBPFPwrUXKR1tbcCh2fs8vQDwmr9mjTkn7c",
  "key34": "247YH4XHUTyqxNcdFrdNDVr8S11eCnDKk2HHsc3xRCpzQTxLoYTCXXN3Pc27gYeW4B2ygdypnzksLFWV5Gput6w2",
  "key35": "5gp53jzsBJ9iBG4DsMYBFgWHAkDQKsuyTmBuqvvkx3vqSHwUx8z3iT8qZzmfZxsWbkWfcUE2cYkPYiothLNKfNGp",
  "key36": "3mKMVPWbgFqajS8aXcgCcMADjBt22hufE2KuYR1wMorGSCPH5BY8zJ3B68zNcjXnLnvHfu8UD6kJeKsaWcWm8F4c",
  "key37": "4oDLJdfKyy7mEbmxPW7qwb86VEPKkNfturxkZBJgvyghCVtJQu3ccCrA32ckY8cYrGXwP3MpWmYKHy5ewR1u7T2f",
  "key38": "2RikkwTzC1e2js3yTddwY4U8orDAsgzZzeeuxmqoTq3mWMfvPtYMKbNuEADdUcjMMotJ32SLYF5a7gfTZ7g82PQH",
  "key39": "2EJGbZbJX4AusW9iF1kxjMbUXPdMwwaGLESS2Zmf3SLPf5MVvBa1aWqNxzwatfxXwqq98en4BUUxB8GZgZa4PiaK",
  "key40": "TprdNXNDMjZweRVMLVbLct927gcyemimtR7SqNJNafaX9QTEKJqenLiY6WP8ukCCjK86xn8SARmrf9K4NjdgMv2"
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
