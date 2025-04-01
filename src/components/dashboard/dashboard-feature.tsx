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
    "3CkJhDqYTit1LuSYksEPyAYJLxu6mg7UH9umY7QN9NZcqZGXssoZt6vXFgx22KRq1tev1XX29SVriQuA7D3QDvqT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35dXNT1qKKzosFRGUk5Mi4ca11K7xaTWu811tziQEaw6vKwnZzq5vTgusbjJoXBBhwxfwGEoCoU43vAxs7PsqKcX",
  "key1": "24saCUrRDnFGoTk6r1zQnuDy1iCMGZp6TbEg4JenHTG17Jcu4b5DYaFivCWvuGmo9hWhqdqaisBhB4v8pPhN8FbD",
  "key2": "jMvBEWoNTQ2Xki73U5xzRdBSx7kSRx9BY4EiPMcXodPDBJXYyCKQyPQiPtFPuEPW3Q92nim9RbeC6ai62KVV17m",
  "key3": "3iZCB5uzCG1SZtQBmgpcDsTyEpHCYHu8zBnBm4NfGKUTfCQXfgddzBwyMNkU8bVXuJqZnkJT3nvSGAto8fHWQsLy",
  "key4": "2zbAjcV4w6VoVWTqXkEDiAoKr4s4J1pNeYQD8WaRrjidCTnQ7AFqGMWfJ3VpkxuiA3CWAdFhLZ9PSuNeEwxFroJi",
  "key5": "4ATT82zeqZ1bGrY1t3ZLTyqnuWvhUMkDQQHTq7BgKyaBckQ4n747pkZizaoefTkqUmFoFmxnPtgfcr21dYVJX1HF",
  "key6": "5hTEAdwsCsxek8NWcFqn7m6cVRRqg7YDDdiSteJPSk7Q2vtYmJ5hz7zeQb8QEzJNAh9oN3Cn6We42UX1hqucvFGB",
  "key7": "4kSCnx3jcyRVsaEoHMau43VorAUncBKwqmzqCtFbk4BSLnZuH9vjrj8CHa5f2nKSMs9qBmDtniRPNbhYDJfiuDjS",
  "key8": "9A3PQJCHWeLHEMaEvdj2A8vys8SWVzqxvwCciB1rkRyH91rCbECcQN9B8221aJKWAQMvDNUQDnCQtpKcotFvna2",
  "key9": "46ZSHgCr4tnAMkR2oYSBfQ2L4uRwX2CKZnGmuce6RcLeiaX1hksAwLghHBreey8FY3Fu6xEz15MJJ6uo7ERxgogR",
  "key10": "3adMLaKK4u1rWAPcJW8B6A1VATxA9Liqd2eMmSgUj4osiUBbM6BnvrRcFu6SoQnpjRUCP2jwbmwrqGtCaBPNS8rD",
  "key11": "46a5FDacrqvE4yzNLRrN1eB7WUeTP6BdzFTzGxRxxPm7iG9f6aEHhnfecUcYcnG1MLeg6ojV8nVwGDrLNDDMvkfd",
  "key12": "2wjYwAvHGbd7ivHAVQ6ELTTjdaNSbDLxmUCkC43dCs8gnvg2WEk5UQM9uh8fSeEMdgDgqUdFvxeY4LzcEerAaWZG",
  "key13": "35KXqGK2FykDpss7L26xsuM1yYh5FyEWNyDEmFeA3QzXrRorQ4GAWq27nFS2Yp4CFXQwHhzuNifByzhVRqXR4kMi",
  "key14": "38zv2WGjLbADAz39BiVTi7yf6idthTEhyryxFFfx8T7C9rikMwogZi5PpbbsipPrGF3yU3UFahq8bX9ZZrFvfqqx",
  "key15": "2jQXWtGYU6euTeAgqVChmRpCbVfPWB1U2h78Ud2keCHgeMjBqtgSUsaavwYoMYv2VhFBmDgPHZXkc3CGHH6UzQTd",
  "key16": "3GT1H64y3aYbtxaa8W3PH5gKGhRuQGYSwAo8HzJnJ8GyhjrB8KrVpHhjTv2S2vM2Vxth1eyyQK8EsBMzSVpzgihy",
  "key17": "5qaj9qUcHwpER8ArpVcg1BsdBNfQUTCiv3AoueuBWHpJEbBjFjUHrgkxUd4mHBwh2dFCYoEHA4F31mKKNbuv93Ek",
  "key18": "234C2ETe24o6a38vw95qeMrfSHEQRaxfHp3moRofnbUfW3C4yCH2y6b2Acfo7S4mLz9VGw3ARWi1r9EEcgJqK8NW",
  "key19": "3n2jH9yMWLwaQiKQRaLY25uE7d3tJTCwmCzjsvLZoC9jkDi8zuTXdfytqRScMHJRagkV9F7RJT4yGQhNY16eLNsi",
  "key20": "2HZSRdFBAE98E2sBDVwqYAfkQFrEepaxTinLGrc3byoLEgVjFCLZnMagFiQUDRiHf4mXQsXiYywPMe6ibWTXMD2w",
  "key21": "2qYXV8w6cgJBBWtdo6A79WsVvCAQ5tga1khynzjFdNHryv46gfkiTFGUedkp1di5bG5wYdo9z831V5rzP6yk5N4f",
  "key22": "5rpvgzJqhzd1yxCMoR56HNR9Li2wRmxZr1iSsxyDR96skHzvLzJZ4Dyiy61ix9rkBJf7TrbpcJd6TuRMcan1ajP",
  "key23": "1VsWqaPG8xm3CfMf6Wtj3dx6ZpKoskxMHX5nEpHMjM8gL6Gpx3TAPEEsnMy8wyMczLF2WgcRdEZH3BYzTHq23iQ",
  "key24": "3PasGQJBUVEkctR5imJSGvV6AB1CY78frNSPSv2Zgsg12Z4sAmvpCorNFx69YKvnpsZYwQdQYpD2nJFVmVgyszaM",
  "key25": "5GcpitYeuYyDYy9qttzgJSuJfeF5vkjAfpPDzCQcdvzkCcmL4Y7EZ41713ypLWCjzgdCD8HWHimj29GHCL6DSKS7",
  "key26": "3fQnL2xx4jRcnbHzGj8wAVML8rJGMneqhwPfFVeaY32BgV5sw3Xrgc44TpqFw2Shpdi7yU5W45minx2kASXgtfzA",
  "key27": "2pmUUc8qi4bSVqFZavFKep3QSuMtrvNQiuZ5mN8gyWBmZynEKSSK5ZdFuPLNQ93LZvyHaXd25wsHCqBFd8eYWaUf",
  "key28": "3MHq7QnXtLe33UkftjBue85DVcNqnbXYw994kLx41YZCV37J3SJd1etAAkJGaz7WBKWmMp1Kc7QmtBvhs3QR2j3H",
  "key29": "3WNrYNwyxgKneQkYn2tNxSAyZ5jmLrS9G4jSEmahsjo8n7zH3udc4BFTdokxNBkrfVw5Eyyjay12RijFhxekZ42i",
  "key30": "5anR9sM3Af2HamKjDfMUjMFXWin9D8qDDDVrYaA3a61xoZFhzzUL5AJhPM31hUYkvunFbhWGYuYweDXEgpWkzwsX",
  "key31": "5jFeEs3462v3u253E6m6togLhE6zQbvYmSGW34QTw8Po4DvRP9rVrHJB8qP5ZSRGR2jkqbfnL3YKkJDuHpDBoDY5",
  "key32": "nVSBW1i5zJhuggsEDAr9SH67zaiaeSFG57Qw4U25ECWFTSrgW2vWZSuXNkeeMLfYwkYUrPX1vSiJJ5kUEbXvRcK",
  "key33": "4Y1Bf6go3pWdAdpuB3JbUXGBuKHpxeWNnVX4d31psfryk5fqW2jbTiT5D6adUzuuFp8hD5CoJtYh7fz813Mh7aSR",
  "key34": "65XCEFBhVixQSu85rqjHpQ4FskHa48VtBy1muqtWPRpuWZkkXghKg3wNKw1RYaftvSkgQZJpathWsz2HfjiadFtK",
  "key35": "4yeCd8dkuduiwDPcko7y9yqwfgTYeqf3mHPf1pq4LN8bCSsGQvQukaduevtS91MTfnfJbParWXdcb9o2tYMXeSP4",
  "key36": "3ehvotbGvtztH8WExo4ysU6BxuMH9DuXPw2NxsHHwXQmocDeNzLuwoWU5kdyeapJnEMHKeRbnX17U7YY94nM5W3Y",
  "key37": "5TzgdmKYvjK3sSFEnD9sW4ntD8tY6JuKL2GMpBQioBeB7rqoMBpSLmVQegjakQP9HoGM76PiTSjqHByCj3TQy8pG",
  "key38": "tH7vNwj5ved2WTTLjfULhsspHb9gAZhrjXG5Fqgr7LpcmVdLtLRU4sNuZ3EcYhSx8A9x8Q85BAopp578ZsqiAmJ",
  "key39": "4zbAXDXpVWyS2W1kdFAZwtvA3E9abG2HYXbXtyj1WQSsZeEiHw6qyqCNC6LaBYZLnc3DWcTUWHpGdruQucvgseXW",
  "key40": "2ZW1LggkWaff8U7wZ4r2EwPn5Y8dw1rEFSUkrZri6ksWXVc9YTp8XMFsk1n4VZ2EHobKMwMMcy1z9Bf5e3nS85ty",
  "key41": "yFHLctXMioSLnbKnpdeu65hG3RE9dxS4kH3mn1EJ5XHJrPRNPiANKtS3e4THdoFceRtXuVbT9yc7FP4Yt8BESGD",
  "key42": "3mD91nmPkR3iLoaKtJ6jCKLo9Kr9FfXqHtWy7FwqdnjVU5f5oTaxisCawUH41Hzj8qsYUVRdXsh1mthp4wDeLZZQ",
  "key43": "4Rjejw4ycZV5nmEWQBrzdAx7fuhfxxtgo1yy1zPKNsAZe6YPzMJLqipvycrbgcsZevF5w2k7wL1QCoPmqNMjwFsV",
  "key44": "YfjexCbbGxF2yA2aEyL2mfeT9zBY8hnuUKcxWe7gNvk9LSKXaKSiWX1b2a56NonBBYCQsWDvE3ysZeecUKADAXv",
  "key45": "4t3mehrRQTNJaHn9r2RM8vsy3cDmkjGFvW4SQR2zudeGpy7vTB3X4sZVaMMsScUb4vjLaDHiQk946g8AdfKAHPgL",
  "key46": "4UJFTHVBYvhpQBoMe5JqWZHsLrPbVnLiHnuhCTgijdVBLWND8KhHQ4uphK7Uc9Pk8i7A8QQDgbyBdm1jbEZCSePh",
  "key47": "5J4xp7qoYktxpbqUXzDdVGZtFt2kVmYnfwYvF4V3fiHbfXjCDXXjRZ8Mrdmj27PjwjuRh4MxMQzM8XPxY1UEnUCA",
  "key48": "2eDoVqjbtzz5CACp98caFdCAio6oh9xcLJ5WhDMc9UyRmQW7xsvmE9msgCKjtmwBuGu3D36gYMZfjvCD4Njg1KdB"
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
