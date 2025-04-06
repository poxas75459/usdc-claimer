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
    "2wffiotyzQcPR1HDQiES4UzkyZ5uDTVBnvh8SwUnomVarnmdceVWzv7zUmscVkrvhgbM4YPxQaJTeZMsaeAjyTPw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BNXyhu96ZtDVLNCNf8VizEyNL4498E8whSdNDYx5axt3H2cRKELaCa2BKBHypruQevxA5DE1BtvtbH3ezPi7mXp",
  "key1": "5eXAy8fqSsCUhJZGnRtyNGu7fVFgKMWig4q4yCHKGEbPq6YgDEjuoDztKHBa2CxkKAgnAvMWrCkRRJJN8fSRmYR7",
  "key2": "58NpgfVjFP2W6ZBZF8fj6mRs2aAiz1XDyePDzRyjCYs2XFR6H3YZ7abu3Cy8v3ZgAWGnGPD8A76DrAsWNH5UCBjZ",
  "key3": "1a3uVpXzEpuM6wRHgwJG69cQ9PB4anVYC1GHmHbv5Q51JVUp6D9kvzpjoDUQBJbksNbNs3MxL8zSfpkMJP5wzMz",
  "key4": "uGgkyDMgDgGX6HGvJC87R81fUk1RWoodxiwSkJPkNqi6U8wafMg2mW4fMvxn3dvXaKmQhDxhFYKXfZggzu236hi",
  "key5": "5jSxuwyDwuHgAc9K9PtGVB6jkW99r3TrCqBEPoUAKyYXbUCB1GgBJ8a17zLr8rBhtLkX6MH9pAn7E6Kue95zPACJ",
  "key6": "3AGF5SMT2EKCVNTnxfu9t7vbq86ryerCM4sqAiTdi67MLa7euxwNsHRhnPQp99nX1bk5uVSch9WRZkDNyfUpXC5i",
  "key7": "73PkY8NW8sxXj6JuwE8Hn4S4DnR5JGBjpCGpQnfpjC6aRsQExrqkTgLWxcH6BwNyfNmMmuBQAxRd8du9KNNeGgW",
  "key8": "3aKngs3SeTsXtVF5YBaTua6CPr85gTsZpziG1THXcibUsVxkrLkKuY7y4fWhbv8nMFcuVqdLFoCXN4hwdm2kVpgY",
  "key9": "3j7JBRLxx7Z2s9HhAwzdPFbf4cHnSkSpiCYWuo3yA4o6ahnpFWgCQJgkpbaXsJoQp1s1KZgLo9oz6NbpFjo26Yjm",
  "key10": "z8aq4j3VGqdmAhzogzNjxtVRYVhK7sdpBZw2xxTuCjJZ2un9uLzjgLfibqfiTxgdVuN6qiob7n4g41hrKamRKcn",
  "key11": "59jkt68tjerkVNofCfDQo7gj4YVHkb8fmaL8m3QwoK6D2srP65z7mHeB2Fn6sYhZnXUYQu7W4h5DXgRhivrGZBX2",
  "key12": "2WdGPnNvSUcaRGfAa3nSMndGNnWAmkFw3ckGdpeojHeJMM99zT661uNfXjkAbX3tXgzJQ486mw2XhvSAtNtNRy7s",
  "key13": "4AzSJ5QjJdmUVmdpXSZyQ5N9CN9bot2siUZ1SoMmyvHmZgU9Y3wsJxo6VzT6v3URJHbkBbnmcW9R88cx7TuqusdK",
  "key14": "5MFMnW4hfaGN7poUhAfeVJZAeW2W1uHE1uPhDDA6vqAg9pUvRnvUmq4eaFx5QkhmpuJmaoPzzvoX3DQQ7umivwzP",
  "key15": "ZsxgVi6iH6XDvBVPwjUuWeNqUxaarnqhBrNRTP4RzRzpXGLEykESFhbzjcppLuXeFMpaGpMWExtggXZAwU9Tfke",
  "key16": "5SdWD7aS9s1pY5LuJPRxhwRfGFhxavRu5dEaKA4V2vzQ1EG8WJfgSWY9k6xFXVUSZ4MapgFwm24yVKVf75TqYoTC",
  "key17": "3urkYozcgfTqDgYvAGPukLYdFxbqmbEaSSuJGf1bDVCKwxyg9B4MhcEyRYgCvmqeUyEg14L6osxG8ewPnnh6DHw5",
  "key18": "2ksQhyZRVKLuSu5jnXex89nD7VXx4REtEsJmHRfbwuKKBRvMHRDXChsQ4DpnmEuL1Je4A1dhobqci2h5QHQjRsVL",
  "key19": "2YNzYecomndg1bxJ1DJgwmFioEhaFpcQBG99KJdtLx2WTAmGahcLhpuCxdVTPdmv49fVZdy9PX7daAzmSRv4K5B1",
  "key20": "5WVc42pvnkko72A54aBwTf1PTx3qYa2zi9nsxEEs3YrH8CPea4Nd77ttkRMSyKCGeBQEj4CcMAStaucUGwSNgJtg",
  "key21": "3iocGLdmWU6rc4h3YN9M5yFQEK64bUZX8LQVs4RSdFpA8PjZ3E4DwiG3WMiuyC9eeKPaVYerkJKuuH1XEwn7LY75",
  "key22": "WvMP27QQT3zzAL3i1NzWdqXrpYxexnfPCCAe6AiJh59LFEHC5RLDNskRpWqRPwin24oH3hwCdG8xvyVJj2X579N",
  "key23": "3M7xXbnuECTQ2csh9NxnBkHoSJB1e9cCQ1qy6hhX5YdhJjgzwFy5ARSLw6GJAwT9EoCx7QZCms9bnrV8LbGivxtD",
  "key24": "aqQkeRqbdC7fdSf4X39nuZVV3u8PivNbRtJ9C3YBYyLVewdRgrpUYihHL4mHbdb3AUKECaGudGQ8baVomxyQXmF",
  "key25": "3BtaoDRqHXjvFpV73DF1FzWgX8kEHqFAoPky5vBX7sCD8bxC52yGdVaV3VJRXh5sSzMvqqpZMSP5CeGwC6CSQgPu",
  "key26": "3imY8mgNhnUx9SeBG7oSEVPTV7AoZ8sri47v2CofAtmNMZimdmANYN2vausMsVeJssttMAXvb8mpdBD5Rg542A6c",
  "key27": "4Y6evQV4EjF2wudLnb8LnrzWBN7syLzTRW7oWrdW7jcBXZFWNx6ccMccWdVFnmh4wJ7eUwZPsA6uhHC9CaFa56Yh",
  "key28": "435AASSj1xUA64gQaAbTgpEkEwHZRsGjzqkjfG9nW5sJaqV4pYryyP4VSVJfQxFhaA3twB5cUqfG9RqDM1uLDZ9N",
  "key29": "5niesDyTzkNERi5RuMxLDjAqepqdErEfuiixunzHooHsyVBeKckvbTG1rJynmznuz1fx2Gqpi5bme7csq9RvznXb",
  "key30": "iEUuUMdcMnxyd77kU9PucaYMMz1etdA7YBp6eeRZKHeh7qWwnR3R2q5a45yVC8tJyjrmoGHweG4mPNvij6LLiZi",
  "key31": "4zGmUsmXw5mzUDjgjDeQqUPSJoDVgwis7S4oBxwsWPKAAexd6xvfjDUyLr59S84zjmNyGyEoF9wQJBqHkJAMmodz",
  "key32": "4X4HmbkCD8c7pVy3vuu8pZFNH8TYwyELSEsaWJD65xqfnfwNarDDuyHMN8aCv8dBkwbokC8uTHLcX15Cts9PhLft",
  "key33": "2Co5qXDLbmRRQHA6UpzyggMbMfXgpjbDvWT8vzMxFhZsxSyxx655iDsFJZQ9KhbbTBLLvuyH7h3BdE2oiFZ1aKbk",
  "key34": "TgPXeoJGJgrwvh2coHDGreFKPhHRCJewU3eZnrr5PabraaJ6VAbs61YiP7byUL11ZYj4xfPkCU8HvugerJEqhb3",
  "key35": "4d4R4hcVbf4ukTuoci5BFEEKy8kwJzMT1VTL2Xuo3BFKwkVpDpGdyxbMefV9xFULZ3JTw4LAcmcxACA9aot7tGNk",
  "key36": "5jc6kp6Hfq8QYefedtTpH823j2zGA2p3DzMEMxyNGmqFEMAuov4ZurgpgQfahrNJtXC6DX4GCXhX7aoW2f4YP4qA",
  "key37": "2fJ1ToudjrLw9PdE6ppjg9pYyyGDNQNwHS9rxR4JnHPiKTGNwUptSELhFE4sChved55wxdcjEeY4YkGv5AasEr3L",
  "key38": "5sHTERSactEDCSPHhYiF5zCVz26t9sQ5Zancx3jXMUuQCzcM2kequk5bTQAAA8Pc1BWAX9QpLN125ZZMRfHbLJAY",
  "key39": "2EiCTTuVfUYZqQFvg49zNWFpmTETqyyLinfFuUfMVQ3bdUGKCNtcrt27PedboB5vzi7ieGarJUkcmHi4ckTMN9RB",
  "key40": "4Fp2LtGbnHWAEMckcJ4r7P48w7jFBW6zjhMn8j6y2bppnw6eyDVE1WQbfeEiV9iWhWkqJ44hWnzNaSSD22VHbZ3r",
  "key41": "2thjtx7Ysb8Jb181c2Fj7sVpdPXHPUp7daotfuuXfEna6GGqj7dcEUGGFjg5mvaqGtiLz2pm8gGGA3fFDq1aLsUm",
  "key42": "AtV1Y7cUGGK12GXHgdBRjvQbTPmfEU4WUU1gX9dC3LxgtcotuVxBQzCU9uzdsMgcQYmw1HRyGUcmbQZvQmGmnsY",
  "key43": "5UWbbRf5LRptjUiB89uF8dBuLkV7G3fjfXmsKo9tHjf8jqvQGqw8t4xnGYNLmuAcehTCyG8houVm8Ns4iF8Zy5bW",
  "key44": "4oUtEcQ7erxobYFLZt7acWXd6dpYnokndJGsin9DfLoXMGvdB8v9NwoWipo1gZZpPvEDaBaA2yf1yTQtWXmsDMvy"
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
