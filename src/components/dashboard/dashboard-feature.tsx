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
    "3jm4EeoY6pxQB36YrDdGDig3pEpEoGmnRqVPWxESvne69Q6FGuEA53Sk7wTS2nYJew15AwnZyyav7NCMRJz9Yyu6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dUFUKdKNWUtqTWTHx7jb9yfuS8MZhJd9mWbi5xw6F2m5M3V8aoLezpiPbXH4x8EPYKMKbaNTditbnUdk54hy3DF",
  "key1": "67hYqKiyc3wAYUKayxVBAWikBuiDAUX9KrCsMbJwewjo19g5TLhfFYV9oihg29987fP3eyWNhzZKVTKwZoK1Uquv",
  "key2": "36ZfpttzM5E3TJ2SFqrBcPfLZdMbanAFLvgcgXUoT1niHEd2YpLXdJ3Y4cfhGFD8FF2jSJDsbuRT6qzM1qkaqYRL",
  "key3": "3usdTPkXK3jK5aWoosYqKTukuUK4MjsgfmyNq1YKBKpDxeJbiqAkgbV9APHAgwnAXAFyD6a6paWsWRG7HXt1gQyB",
  "key4": "4d5stCwhPuUhKtzM65wadJWmkcZ6cDxCvCskoNiVNXujkK64kXLc8GchZgQnVTbwZ5r9QFwQ5nwfMiqsbEoKTRLK",
  "key5": "Khv5dunBPqedqFjD5HTSFHXow1YLrzqXyUsgCwickxR8rznLkSgVUdAnYGowPiSSwzHKLnFvRMdkqzBG9MeJ8Ck",
  "key6": "3REVD1FkQV9p2WCLnZHG12RcsbMhzw41LYmmzZDa8eYrmxHdWoMg5QFerJrZshkxUd6edyjqHfsWThYEE8DTqYXS",
  "key7": "4BFBZ1hPWik1B76S12mN8uBZMHYFFh6TaSFD6Lh8cNVeTwok9nPWFVjU6keWbfe6wCoifMtXsnjBXYbwKt6mAsVD",
  "key8": "4m5QMwiLHNTmJAP6g8aQVViDb8BBEqxGPD2SFrHjnJztdwJqZwzQmZmZ8e2WxyRsHpY8M9JcyBESM2g8ZUuebmPx",
  "key9": "3t8T2CSHVALWg9ztQoiEZetQg9Di5dJsYZ6Qime42QpTKJER1C4957JeLy6aQVgwnfmwaDJFugJk4girMKnVd3YJ",
  "key10": "4Wp8AkHnZF6RgNhHP3LeRShfbmPqzgYsPJSVPGsJPhQBW3aHMzWXqiUYrQrH248tq5oEkZfXv1SsbLyAoJSPQvB9",
  "key11": "3dzw7J6YnvwnWMbbE9vwJZ5U7nvXcCFTfV1gHuMQymjcraUa9sZFchAzvQQ519pWQLzdPgXsPWL146PHS4towGvr",
  "key12": "5KCh983A57WHQW3ApbRt7DoEJweuMJ9ehFjhfD6gM2imZfbdc3R1RcAiKf5VcUX1dj5kAcTJDfDEc1FoT6tKQmoh",
  "key13": "44MqsM8FFw94s2V4iVcHadgCukf1b6xz2W8Tq3Zq8drKeDgKXBVRR1LVBDisoSqPrT2F5kbh4nknNA6cDwqJTmUJ",
  "key14": "G6S1AdXY9KV6XaSTo5CZwBDSGtLoANauYVhgRFmTBjwdsGy6d7nNfRB58NzDYbj4XzfY7JYSVyUyvSH6yt4GU7J",
  "key15": "5SqGukyaH2q21mniFMP3zKN2yDHprmuGFEpJTc3jDEcJumKh78K2Bpk4fKWEXGXgKU3mGcWmg76RXYPwrcStU9G8",
  "key16": "UJ94EagKoF9Lj7QEJbvX2SC4GD5tYrTCoPytRAkE47gCvgX5p33uYhJNEoj74fQhSV2FHvHdjpXMzRKQVsxAAiM",
  "key17": "5Fb77rqrS4R1Zs9VuzBvwC9DrEfk5ucESZhtPCabiShKR5YSeGadhgNgJ1JD8Ha5yLG3yWxd7qohPpjKctoPJBH9",
  "key18": "5okggesQdNhZkZLvgJAwgJVPjidkqP73cGERXaGczEVjQdcHthkMuYmWStSRbUhdtkRMDnz7x8wcvtS9oP77HVrY",
  "key19": "5gnGpGEt42AAEX3hWS77xP8F2skgetdntATNu8EyXdagWTAQL5cAtyHkhTWu7yERP9ig67zsBvxtwocDKdcxX9Q1",
  "key20": "5H1D6aCSWUSoevSGhCRFK3E8UVhYUVZCjscXASV9k9W32ujF3CgvVNLWsZFmTk9MFfaYuaf2nYqrfQ54tWXywbmU",
  "key21": "3KVqFGy9VT4XVcJ8XR3BzgiE6DYD4X7t73PS1gD1bA7owWbKsjXfGE5ukK7oypyr4fuc9SGGsdBWsFVT3c811DWN",
  "key22": "4MosVcfxsTRmy63NcfJ1poDbBssTqSM9JNkssF9r5HYL5khzspm2Z1GK92GBgvc9bc9ho7LLF78SxzmqCJcazWbQ",
  "key23": "4FDsTpv3Uvh3gA1bJg6fepyVga4AhVTcv8e75d4kxfQ1tXtGGNMCzzSKYcPeXScYXL1csSXj1VCs9FSByFpieiue",
  "key24": "2Hki8nMbfhmX4FQSeKNpJkvmP9UWJxU1EzvERTybvNqqspbgs93VLoQg6yaFvpuC9e34iKnKeKNCDZTbT4kQh7FE",
  "key25": "5VeQAmeisRVyQD8odPgBsPdmrozLq4QZbrzkVfH5ceVAx9vYpJLaiTCbYTGovA2mhskH8dYJYqbj44zBveffjrup",
  "key26": "vyFDSmgxLa1nwQj8S4GTw119seHsC3dVHbxQU5cUZGB4uvLsbHNb8XHVtuuSoBL2UfN2ANYWW2CqM9rRBMTQx7W",
  "key27": "5qDtEfV4FoyGZvfVwg9rf9hdoaMEpcc7hgshjbr7Fuao1tnhJFhj7dYFw62pLxSSiFFho7avfdQedShKmq3R8TjM",
  "key28": "5snq25FuFq9ivCjE3AqFhwFryBifcsFbJ1AqAsfmvvddic4PQSfuCeAZpDK5ZdsLDs11SQipAgatCkTvqcU9KqNU"
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
