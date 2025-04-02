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
    "3jKXvNANinw9mqWWYyhYUNJ2AYd5BZBhiqyb4ogR3ptK1nF3FvHd2t1cqgC85drBhEURBHkbzobQJNWyXjzxmnyV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BnW1GmZXF3YaoiDbkHeNPvZJMGCNoCf2YoSLjjw3XHiXjoEvskwhzhfpBbTDUgSKbGAjmrKW8oTdHdiQDbnwn2x",
  "key1": "o3RZ7fbqJbnwHLscmswAvzjrT8VK5VHxjhRs3qWmLsjcPUUs3U28gXA8rDxQoCfBjVmjuhPx1xkaEe3ivTH3Quv",
  "key2": "9RqkNA8YvQkyYwCKdYKURGtYn9fKCCxUAPeyWn9Rz4UmtBPM5zwe3UR3GreYiwTo3Uf8ThuVXvn992nS7Z7riSh",
  "key3": "329RvFahKhTxo2BzrieeiYXWmC2D3ekUPcXzn48G9saEJWQ56UFuTGnLtdfetsZPhM77Y14S3T16YwAYF1e2FJRM",
  "key4": "4iXmCaRuP6qcTKMHVAbDh28XfJms7hFpTxKurh1PDj7SzVSXiuGG7Lz28EiwVMJMQo5MPvhAXRUfHHVoBayk2Hjt",
  "key5": "AtroNQYPP24sw5qRar4wYVR2y9pwT1NHo6ETSvG1veEvhbbfrynGFoAVM7wqZXFFMF5HR4wE7sTTXhmC8Jr1ZNn",
  "key6": "2Sx5FFLc7eJVgoaMSZ77tCU26fCPgUuKS4k9khBoFKU6hWYwpykuPmHg8qC1jgDKjbYvN6uedUXpyivtDuAwvQC8",
  "key7": "478DzFJ39jHBn9CxTXA7F11uVG6uMpMXKNHfBr7jUVYNiHhbo4ZVbMgApZpCDT2dvyKtowMM1iCycGcZafM1wKwz",
  "key8": "47Ggjg27nXzAsTM6X6MPs111Qqh1vKUtwduR6GHT7b5tUBMJj4CEkYFA6PyXVmcEtLWbZSs7GViUCzyHbr85pcFH",
  "key9": "4fq1Gox9TigaZDnXdKJAWz7ppfUXDhsbdok1qNH4s6Tc5UpRYWTAakSjh2ovrmdokkC6djYP8FAFXJJTSg17yCkM",
  "key10": "5VotfQznienmJP8bkLxCQ8KFCBArW3TYCe968HS8LCqxLBTKGaeTmpofHhBSbLgYHmXBqfP3u2ru2Ttg7paKs4au",
  "key11": "5VppgmnaXgSXraHr6KrjXcMaJSfn2YrSyuCNWNwiJPcuC2Z5Yu7VKKJCqQcsokT6oNuKVjRiw9dwLmt2WPMP2VZe",
  "key12": "3XHAqhsbQwiY3UZRM4xp7kWcEqYDzfySLyLadZJcpXvkMGKRSjDdXDSQVVPoMix4musNqRj1wipojw4GzoFz5JUG",
  "key13": "37FYt5DdNoc842Z9DgzcECqvY4jm2r7zK4bxAVLe6Sqyrkc21Sj7sXZ7E9iuqxTi9AK9rrLEutuCnrR8LAxRQXXt",
  "key14": "3tud1hTj42XREpCQGYsVEAGFN2NjZxCYUj6Mw6N2yKbw2hG9w6QKY4o71xm3JaEabbCDsGfY16U4N9M1tkiW6vwb",
  "key15": "5dwdiYeNse6nMEuxyNk5x5PppM53wH8ed4Jq39PqqgcMvyHHdrRmCMRoi494kMmPZMMfPa6DUxppceR9u1vLw6gm",
  "key16": "5GfjWrwEcALKaa7hoXwauP5tGydbVjctzpX2zcVR4H3ytDjhdUt6EEJvxq9SL1Pbv3QEZCLkzWH98VCTKhkjLdGy",
  "key17": "5pbxfA1B9CWvRedfx6kPAoFJacHty6jt21bJS3sVs4k7M2L1pyuFW3tJanKqGEvcxz8RLqBdj28JLMfrs6aKAh95",
  "key18": "QH5wiY4sJ5YMozJzWKTzFwn5FZeUNUCNVKWDC1WGtf73VyNpEA26FnJB2ZGFtxtWnz3f7ZEGkqRnvgRGFtfSHvm",
  "key19": "517upyccJuZkVpmD5HzTCK5tfaG95TQv4JY4UaDjtECYsyetkhxws1bt3BgBXyGjEw3gx3rxph48Tb21Mk1BK3Wk",
  "key20": "3yVtyJ1JC9shAmp13qSbZcsndNdyr23aMaLfTLxQYodrTGPmoCFVbNT5yJrdbW85KHCbuoEbqranZhzzWaeWc2od",
  "key21": "5bHxUX1zL2LBUiKJRANuTgooiHyM6buWBWSiaai9K9iWFkhTs8d2rW4E9GnL3TvEnxa3oJGh5aWAHnVVny8w4vd8",
  "key22": "5tJegyxEaK47zpZby9ZbYsQHRj7f8sNFqVjCPx1jEnUivuzSyXixGeu8Rhj3hp7vMPBQvKKXpgdFJDF5E6EwZoL6",
  "key23": "42TnfzUoNcKT7rBJipbatRiP7ptkL7ZJjfMmitQSdBy5ngxpStcdqj6Vay31zsjUdyqPqohs16cjfhRHTpFFbBXv",
  "key24": "3idW4oXy8QXZUCmTVU2J9n6nNn6iawyy5CztrFqFMifPAbW759o8A78q7Hq3FmUrFs9fpxmi7D8msavXEeiJMeCR",
  "key25": "4TqLV6CuvYL5ykT9GMaL9NmWkfeijUpvREXXZhUXThm8VuVGUbYCLEc5HFPa5hh4JCEeCpCyaW587rF4doCnLUmr",
  "key26": "2n9ihnAN6wzNQbbsmStrHQbmgeoG73vRorc5tUCKjW1k6vPgLE97vLSuw1UeLFEotqoe9VjVxvW1uNA32Y6kAGv7",
  "key27": "4JV9QjLRUAChMfenwiDEj4dPZskhEpc5ZeahwagTycCSZQqHQ6rxNc2Fum2qbKaC3cZ3ywMPzk3pS82TBM94o855",
  "key28": "5Gq9u2kGtsVLXyAw2CPPJKz3onZMUn6n3KyHwYfNwWJzt8ruq5sw9CG6GUTcyCwDnBAFK3FkSuy81Z5FfDRYK23V",
  "key29": "2sQgM9n7DwLvLEAb7SmPaakaXqfbVERcVbohoLF8kQFV9wsxVQXGsHRWnngVj7Unipz1QJn9svomGwdu9cw6njUX",
  "key30": "2W2No893R951w3fnitf1iAshomKdjXsF1dCWkQVAgi6Ebkw47DtA1Xnp53VFFAwUvLRXzUgxjCkMR2UqSJfbeEr",
  "key31": "62PxVh5bc3LLkZHXLdHEQe8HiDanpRWxVEWm2i9FNpwZiQr7z4mNpyXv8RcWNJ9aRdLUDzyoe7QvVzcamMQXumKj",
  "key32": "4eYNAc9dgsgGmzAKbdUZ6HWFP73DzshpuiEm6sdnMQFniLPjEd8HEwwLJbzWL64MUF1wuC9ZCmRDvdTJ1iw6ueC8",
  "key33": "21a372mhRs8LLBuYHJjysANJ4JGjgfMUFYsRT9ameskFxaFu2k4cMiQpnVTj3YUbpFVNKGYXBCPi8evKvrMiPitc",
  "key34": "5Ce6qjBSS3kGuEew7CW2oCQr3Wu9KGktJ2hZToPns9TuYjvgZWdkSSNDfwzt1nQtyLshjU6aYK4TLQi3QoBKYUyp",
  "key35": "5H24qsdckHvtkr5jfGNPT2NS125EFECw7t5ue3UoP3MvbsrWhvQcvqz24d1tJpMs2XXCdvxc4gLhuf6ZcNsnsdJ6",
  "key36": "3CbJ55nw3Unx6sSamJ67wtGxczPE9bYybnXaV9HQhXnpnWUDizcqJdBwucCnXKEMhnxmSC7shUeDu5PZWCWYfYb3",
  "key37": "hzTvLxNHtyNFJnz9nUZwGSVdRMFzsZpkwmX758nZ3ktvS8ChsLbU9e2uTpfXvJXHW56UppAzr3PZr2voTBKdwAs",
  "key38": "4fq94JpBZ7gc4y1zdzdxVeudAmqUn5ZCYUvmwNYicKUfHYF7sUymG8EkESmzaN1AKyvHSNNYG8fpPh7sFkSaYKge",
  "key39": "4ztMWE3GR2DqyqzWeVmbsSXeYaW55V8PKy6LAa6rW2T8db5LnrDq1vqoCKQqCDLW2Y32XC8RQhjDk3PRYnQTkSaK",
  "key40": "3pMTiBSW3heD9DgJT8wB6EtzZ83rAoMKib7gDxJexqNp7EMBzDVYewKEXVsFvtxsP3zDkWEGhbr3mUZG49oPnY7s",
  "key41": "2diEWi6vVgYwNALCueUaTMvGQHRQDLdC2vzCxmkdYNspPD8VLvt27JbfdyfThr1ShP8FTwVLqtBmciCU2enFUHFR",
  "key42": "2AfrRkTg4gP3rJw5VLCVVpZHLGnySSnvv45zScdNKchJgG5aTQC9GYpexUeocmYFmWK8m3XT4A6k5Y4GT4jpsbFC",
  "key43": "2pDmTmRqVbyn7UtHGfzLAqQ6dzQq4jYtKA5xhsRGNKSYPDJL2jyzrEm5JFMmD7pzmawChVjiXJS4oUHrku3xRqRx",
  "key44": "2YsVwksgrd2xqug8x6xCYLqoCrXtLYsuhNmfdzo79TAKnDHfyyHcccozcyyHgmGgbKFqCDxeMv4tSRE5dr9f6zf6",
  "key45": "4Kf5ktKx8zriaX8L4Dco7jMLShYxWNQBaFy4ofmXtMz27uQDvH1WzwCAT3HSed5tdvZf4b6p74vvUd2LBSS12LSV",
  "key46": "4i6jYvaVHJxPLUU4qmdkSZ66iP3U6GCP9t4JuqmUzn4mmyeaLMTxaCVqGSjCtJT1MtmNRoaMA9Kpa9H8Eyz29A7q",
  "key47": "5DtPmauJrvQ5Y8XHZb3DHCNzNF8pFbzWko5QCztNJ8DKqS3oTrtwhMcy4iKmibbfBPn7DLyyTC5jUG8DPmv2J4du"
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
