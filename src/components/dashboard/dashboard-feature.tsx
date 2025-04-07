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
    "tPLJASdFehDRpNAySi2XU3TUYKLAVaovmHqQs1VAP4j5JYQiwwhFdzVnoRGjrtZZ7tGcmrVWRRgFdsHNfR1KV6q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sEavDBjMQZoS5qvxMmBwMEQvEaXeYZr8LPpc5fJ8jBaXb9xJL7CZ3nEFxAWmz6AEXsZvrg3e7sY8rVfYNRw9Dww",
  "key1": "5SNQwxdrCoqwWUsWUf4VcZ5keLK3R1JDFKfRUX3cbeeQ5QE9Bei4AzEtBguj4chZ68Yktojjs8f1sgmKRN3bm6i4",
  "key2": "iYSux4PE7dfArhZZHrdJEM79z5Q3DNsvaUPKKy5d1xUzn339vbPVq9DrqS5EcwtQe3wah69woDgUBZP7XYaF6aa",
  "key3": "3wa8cJZpsQqRyTRadDpcwUKC9qDtibs35RLK8Ry42QHUYxXDH5hbAkgZunB4LSDJGVxtKodgFyzcp1qd77JaMJLQ",
  "key4": "5ytGyZZsriK78sV8A5rTLzaLVsdcAZQijTTmsLWDjeERUR6GRkzraUWU9tKjcfXADKm8aNCzTCX6xw2pCQG4f722",
  "key5": "5Ey6BJiqqMGPeJRZiKmX9U5W6stHLuDv1cSth563YkQCYKHKWezPAw5TNvTe4KRRU6tkLYeXfrd7zc4LfNsgcssJ",
  "key6": "3zkVgB44TaoVjQ2WDTeonVL1u8f59WkXG5EwV5KxMSdUPjShcD9TQBxSCiDoVJLt7EHxxdHSEnyZbMtD6TZJVN7t",
  "key7": "5W8CJdiBtmXaSsZi2K5WK5ge2JHhpSVrFW7Ss85qjZnKqmjWzwERUTMKzBtdcNjJzgsSe3n9qDzDV8fNzfTSPXzu",
  "key8": "3iAgdoC9FapdzfYsHfEgoLxag5wwrsPnBJNFS9s7Wkkc8mcCuFUue9WbdeEts84WeCht3e3EJ6vMH8EGRUuAWHb6",
  "key9": "4eHpJsJvmUHM5kR4JHGdKsKkaYW4SxAtzjkt3FnGja8mWeNZ2LXJTEh7beFfx7Dy9mJZMZZoyei4DQXvuq26MEaK",
  "key10": "2xfT77FSMbKtoRECwymbffzgB3wKCg8SoticweDjqJp9XS3db5LuWbjkqXCH2bsFFDxs7gZucVy5rFgJ9zqg7NSV",
  "key11": "2azumm3NjM32E7wHnC4HamS8qnEs19iSeKpK6vScoQE71MbmvCQHvxyU1um1b8Zm5thwmzm3PXigW6xbkMSexWsy",
  "key12": "5nygWnZAtF2FXswtUhkQLhttiHdxDeZ3T2BaUKVEd5DeTKzJms5CQBfMhPZvZAuUJ6TYametxwVhuigVJBoc9NLm",
  "key13": "37f8CtxEQ1Sde3A7jZZFQTXm29XeNPGGxkuGXbxNnKBcJo1zELWnhnMo4UX7Hr9gbKmPJE5QbPBCgR4za46crGmP",
  "key14": "3mKuVHnMiJfrqNzcBe2SeL7rdnTh3Vx1sNcpLjw6E3Jo7V9xL1qzTzuHG4MMhBtrA7rJRj4p484AorusQhZWDNPJ",
  "key15": "5YK2ph98Lnn2sMpguMjBMbiBs29UEnfTumVSPkDxQevdqbSwMUJbUHLKAAjqp1p41dggWHUV9Ttn3Jya78pFHq8z",
  "key16": "4K6TUDUDrmU1ZsWsw7MxDitdyfFW4THzFSesNLT9svLFDkNYWPqyqfBR53jUpCqqX13cLbH722jq978d3cPdY3Ew",
  "key17": "NAVRp4gfqnrawxMKzkw21FsLoyaSEyWr3mbTUUK2kgS2m5DwtkfLwVbNNBRDmQSyVAEoWznEd7ifiponYRSu6qn",
  "key18": "3BT2YJBYoPkSew35cTLZAJtKgEDYHH2JHpztqDxZYuHdQeAz5gJ7i3gSoBezgj8ZMSyYT11CJvoSfY9YoUjGrg2N",
  "key19": "4LA4g7b2p33xR2xk68Qe3smKEXmL3LVFkHFhmxVtGP4sLZTVuJwK7G7ARaSCW9pqbPeaQYnmAaawBWXG3jtit6Ww",
  "key20": "216zv2sVASPekVyzoHdXYebdCRcegQ6gDjmF2VLZzD5nXHy68xd1HFbd3eyUqnFnfnN4s5dtKtx3x9oDeBaQZHTB",
  "key21": "2EiRhKzqBXtTC3GuMZ3GTSnhy6ohnwW7QwaPF6iAyFmMA6wfGDBMhZvC9j7ZfDpQEW5vKAg17AVYWCGVYWopPwo4",
  "key22": "2VFJ5dPvgpnDj18roubmZv5gDEArkPVseJgRMragbiBH3uZfRDDvJ3y6NDRd6sifNiSQZXXm3EgF1HhcNJHAc5hR",
  "key23": "2r79nwogZo7xaBYfGUMtf1Yt1L1N5CpBZoXNsk2wsmjG9Y2unaqnUc8o3Z2S7aWc46j8i78YtAqdbHWw7TeZ7EDx",
  "key24": "3oE7fuZiVHfw7DArFG7P6TRdhAzS15aHY5XvGnaNr7Hw4HuYvWRe7G6yYWdJZ4BaH9zPaVWrgXhVFaNYwjq5sMJM",
  "key25": "5q6MEJZSpe9T8jd1bQJj32jKwDJmYYSfxiVNUL8xwhU8ZwRKLPJurj89kAMF1NaRbxEZCAs74uNRUYqWFMpCmvWK",
  "key26": "5MGKMCTogV3q1UCzo1SSESasmNTg1KtfaaajZ6xiP95ftQsTKTpuA9LyGem2K7igAuiuSUMZGqcCMRoG1myVMZvU",
  "key27": "47aG65gRkmnGHbECcQ1xT6Fg3sD16seEJX1FZxczxdkzJ3uqZKdo1qugANwYBwHMDqJDBTMsPBS7ctEekKa3mtMT",
  "key28": "4tyZkeJMrx1ECiFxnBv24KCCj9peHDbYjPAdAZsyeJYBaUhJJhLk6q3bvycrwXZetwr2JmF5ZEFofT3Wbb79kUf6",
  "key29": "2M8pbncJgbFw3MK7SqBkYhewpRddMgxHJYC46bXF9XifyG9K9vw22o2Kkqe2tjUNmfc11aQ8CNiwTBnqWLD5pL7X",
  "key30": "2WKvdLF2Z9EHUtC2gWJXwN6QrXZNxQx7zQkqVEXpFbPhQsCgVc7ddSZudHestR5Efk2fg8SztfkiswqCr7V6vgRU",
  "key31": "5KMCU6YRMczJLaKsHxMyZbHvzz3DoyYLf1YSoaXMQAYHg284nmhfZXkWPqmqRoRmfBKKrR8HzwwwJUFXt4kGdZCs",
  "key32": "3zBWhnMZVmH4LJXEXSaEjnX1pL9ygUb5Yv8AfnaAXbFKFRzwGBf9kbeP9jjLexNybLC6RZWvnK99wS3fJiLDg3xS",
  "key33": "2hR21rN4XPFcWmR4ctGXE31qz5Cc71j27ZycVitwxe9vVSYnzmjXx7XhUZSDCzSnzv9fZa8BeL54XLQEbyJ9jxDE",
  "key34": "dH71fmxWAaocHCTJHieavSg2GaxzkaFMgreJDswfVqFT7azvvevdeaRj6jGL8cJ4mRvxnJBzoP7tH5ZkGRbJSrD",
  "key35": "51vm93K83QcnSU5wScoStNdAMvDampPHQijWrookwpqjheF8GqaRzoK3zPgCh8B7cPpvwh8nuaXnqXrn6ZQrPc9Y",
  "key36": "5WwFRhsUQJRakKiKQfrh9cShrzwPMnaoMvVrQFzdqHnhPrYHLX2Z5XedHoL7ywPZ9cx32PR4GzyWfbH9uUTWzzLm",
  "key37": "4dHbk2vuMvJK6MtPvZF5CyrL1oJn3cxTo1cLJk4umJcmQciExqHQFXj9PBu9wKZmE7TAzMjEvkt2SnYfgfuEHVNx",
  "key38": "v1c15c61raUzU5gYa4QnPu1mbR6BaxFnLe4j8ndRDy8C11xwqGCruFgwftfakstqGNBXKhj1hJgo4qwAiYtJuhd",
  "key39": "FzZXMF5a1zGmCjRcfbTLFm64VcUvUPgPX61Tz3iRDjTpcmK2A3UEQriCHY7rDrecZQervPHuRTc2oSz7JT1U5PT",
  "key40": "4aVYtVo8cWTQdF4KsGD8MCsujS1mnzD32hQ94kcbvuEP3iVacmAA69HNcUpDtZp5GRemRFrnu1kR6WZkHRZxVt1C",
  "key41": "66VokjPRrxErQTewpxLR5PKrQETvKp6c99xiJ7xS9kszJK66v7VfxJBhMR1pP3ZYZgnSYyPH3yv12yV31pYwvCzn"
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
