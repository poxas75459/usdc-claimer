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
    "MNRx2Eg1aHPVod172KiU8cLwS5iWYw1B77DEsjX9xGvFDS122ne4FxkzfKHTw7uEcWeqjN2NpW5wC6kQJzGC1P3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3G2fv8cgQb51UNiAXSMPGzry1tEaNg3sJonFJqDoSrcopbGSZhBd9kqRcnSbhAjn3QQrQGdAWt3rrTa7TSfiUQQZ",
  "key1": "3CrMbux9KLaLsrH3qXyiSxd17YTTywyTeGkuyc8PW9iyhdhsnCUWcryUbWGpCZvywhqcGavYU4yKLomjwQ66x2QP",
  "key2": "3uMqQyNcdVw2cVsjLGXbHdgXrgZQ9uo9br9AABxHdMaWha3zzrJ7ud8aE4zzTbkdQ6wqgp7R4sCUgFLbjxvv97pd",
  "key3": "2hbgYj63SLfVW34eaRQw1JJh1TYeda5qhzorvZTN9GpuMFKXZd2AMZV6e1sdHhtKxUHfDh38NRYwpeFpMuFuaB5S",
  "key4": "5dYuRnowbSUr9EQjBBM4w172p3him5Z3Rwu5xX9rk6XoTpX1hingWmDwtSVWAosb7BD4Pr2YKdfRadT3CELYLbkp",
  "key5": "TiDdNgyxycyJUjoCSAwBfFK75vvJgVCTQU58mvfbCmpsf8Pzy5VsnCYwoUngwLKLGUVDHm8BZLkr2H8LpzAEW5n",
  "key6": "4qLMHtX5UvhDy8pP8XoaqyJsUCjRRZBZhC4hWiKrdYuoTHyGQ4LdafAHQwzTPKGJU8kMc9yus15ixZLfJvWSaA3P",
  "key7": "3i12WrsS4iE7G35bSEsJ5RaGxkPfyFWPode5ysnxk7StCFDzMx38ann5f1nB6fzW32scCvvnJeCy6uTXzLpm2Y4G",
  "key8": "3169GBxTEfgPvKDJQiSRDfxm3e9MwbgKg9aQbKP6GBwbnsFbZVFE38i1PZVXNBYizTRyx2RVSJEgaxYp2tx7vRvo",
  "key9": "2vQNGptSPid9aXRPJeAiX856phJ2Z9Xwp4usjZuA4wpGJzrihp3A4BU7fth4Rgbp1sKPNVn9gPp2Qk3hhwN7rkwi",
  "key10": "3T5ozVNauyz8MxqybwTSzwnMpNgTD5uituJKQU8NCWgFFXyjqR5wi8tDgC8y3gvZKrMuJHYNCqB94dYtNwrLJTM1",
  "key11": "3mk7eJvBRUjiNPQberYeKEF1TeBAif9zQSpzXTPUJDVasbrwtZ8aWuvMAmVFSuZBNdFU3ogyQrrWJFQnRjcXwLDv",
  "key12": "m4wNoLG3WV5UPJNq6qk3oRyCrVUFNAndmDCrwTtg9VG3yVatCDRXfxN5osr3ezm7uTeaTbcQKXCKDwtw1t7uCfP",
  "key13": "58aXcF6EusrwXFBJsXwBwsKU9aMxpgUBsegvtNEmAutJtdQoPWpQKJrCUV7ochRvfgfx79qkKVBySsUdBngCjsbr",
  "key14": "4MtuxxWpmbPewPNV29HUkBziuWSR3aohgK5eXNdQ5SXcsnGu8exj7W3z94Dx8UXWfkrHiov2Z1TnVhK4yJAx6pzN",
  "key15": "35Jmf4xXVJFZvgq4rLM77wTm74PUGM7YqfB2p2UjxxkPc3Cp5fMbfbjPVWcoSWp1oXYV4Cj52bg3Av4JcsctghaJ",
  "key16": "5PwjoKcnRJQv1iZfQUkJjJjoCNwAvRJnB7tGenUDPmjXJNT9Rb1SAoW9Me6yL73JFN94mMAXCdXzqY3DscpXk7Rt",
  "key17": "5VGs6NDuE2B1fdjdUSDiJ9J3yENoExHiUYW1EBV4FxJq6LBxiEyrALkKgACou9BHfBE5CopV6sas7mkTaLDMA3yK",
  "key18": "5E7DtxKjnjhcuaJqJcPz8HGmdAa3WSg9hbew9XxyWwdTBB3rSpryScU3UnWV68PggcnhJ5VMEXNRWeBEEekhYqbk",
  "key19": "3VKkVdKm4dNDHjvpra34MDR99B1m5N2jscXmP19R9HDTTAFdXrgGUqrQsBp1JGBDJgPCFiCdHDmBPvN8BJddrZCx",
  "key20": "4cQAsJQHeuKwYAdKXeTTLVvUTYcjEthcx55aEnniYdpLBBEuiBfYLidH9oiPFPs4isg2uPVgE7HBnWB3p7b2NiFj",
  "key21": "RMcAW1nDDiYh4Y45MeZhxptNxXB39n2Wobf5Y3y9EFVnw3gVJHwfmdK6ZHuXCeg8NpWEUZ6eCczccfamu8QiNES",
  "key22": "2bVnK2K4FjEPgsesGPrw5Mh6JToL4TLECDYwSzCBboSbPNkHBntBUDWWRynpJzXckVS2xizBQFucdz64bhBDUw37",
  "key23": "2HtfBkeZpvFhN5o5BoCpSzERWoP59NxyEE9bBUxdM3vNQDDMvqNiiyfEvJnmmBhKiU2YycUyvBDaVQTXUD7iNGHT",
  "key24": "57u9uh7dTbSQTeQHVdJqnB94qDezbyWd9tRpHWF7vxx4pxV8Y1hbniPRsQrqFZYi9GsrW8SUDF9PZ3XosXPuSz8W",
  "key25": "4sCbYajQJuUnA4RbTpx2H2gAr7ou6MrQmbCk5pmN2rgnvcyJCzjVWDF6DuiTKqwZdD9hiGH9owmsP849i3mzSzCv",
  "key26": "2pvdYRM1uGA1zPRwyZEbuBLYSqbdt3zYCus2S7p9GPVAYyrr38e55D4L4e6jnApUnfwziNZb5feEMNwpWws4e8Kf",
  "key27": "5xHFNJnz5wHmsXGfHgNRhNEePiQGSxfymFn3QEy5PxKtmtGuTE9eSEn3APVZ2sffVCFM27p3ZaNCRGQyZa8AXNQa",
  "key28": "58AQC9r5ZdoKYcRJgiGhdiFC6y2EAMPJm3whJHdcXYi1gwimD8KrTzmUPY7oNNWiXHncg1C2XHFj7injjEv3NUfi",
  "key29": "48WWRmdaJVapedak8H99TKWcCiTMj1iVTEGgYvqYWsEoPw5vBZawY9uKamVTLLPyZZVhcfLhGkGti89eY9Chdyai",
  "key30": "3wHDuCNnNVxri84o928n6UQqMjwCiEEGy2Wrr9xThPouy3saW6Li5GBbhr8JzEt48R4VkrygyRznucr6EA37zrK6",
  "key31": "uoB6qEA5bxqibncWx8HrbS1JyhukacebZ1SGRDLYUiC4VkssqqDfDaNGUhkRPivxE4DnJZycqDH3KsamFZqdamb",
  "key32": "2f7A1xQE44mWKsXuk8CPctksn7StY5mwEvr1VZomhQPxu3sApmAg6pNySmYk8RVe8zyje6qZmSGhnT9BNS9TAVf5",
  "key33": "4GMFv8zxxjttrvmwqaxZRLYTqnvNhzNtTm1FHuvPSCtXnENBfT2zS3SXB5RTeBkoPFsbzwFDrh9Bn25Pctkq3ywq"
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
