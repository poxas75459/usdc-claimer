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
    "2RARxXzDeWZdRef3gMMMfCnfwvpXqgCtyV9mXM2y3WyXpS3Ryvy72tSC47yWs45pNPQRF9yDtHosgn7ocUVRRZhE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61YayM8WaRhRkR3bUsQ62DMo96mGJ5bFfEeWixU7JHWTGsf3EmKW2xmXhTHoW2vaJqbZSJWtLX951gjk5EdRKeNK",
  "key1": "4ZfRfSRjCj2bEfeA5AKZYmQM5cpgd1nULELNrgAuKksBhpbGup5yNZSJGxVy2wuDvuzbu6A8sQeYNLNhWiGDq1bz",
  "key2": "4nP25rNPstrRXgH9C46Bw81mz2fjgqELFB8NXJbdxYrnZXkopuyeU8aw7xbRmAcsJWLmaZi6DYo1Yo84Q5WgL8Q7",
  "key3": "23YXSbcTiSRha4KxC6j9Mdv4qdnAtDcVyZJCtB8Z3UL7JX1CAn8xUvDZ3qbxJXcFk3r93h8D1XZr2KxmMNAcUR2R",
  "key4": "1HwJ41FaRQTvqgWLNshXEZtgYpyyzuF3QKJa2dMBhcNw6uXkVsAQAFsGJdonRoJ6dKsz8LXiaQqniei1kjJpme6",
  "key5": "4zGGvp9xPhu3LaMcFJgfC9Qk463rpYpWP1JbzF9fALHaiBMAoDSEB5e1YUmMpL98uBQFGpd61QwrSRgKqt368Lny",
  "key6": "3dLm5iiVJf9sc6A8jwT8Y8cTfQFRiS7xZyjYoSJ1mcvZR68MDBEEatyi4CEjbFnnxUBK12ov3JZSm5u7JquhLnCr",
  "key7": "2aAuJih2ymx8HrCgAXicULsNSjtXtHZnGr5bYCWpq6MpJrPbQh6vuvpSKv4zinD4Vp1VAqBUHtJk6RCZje3wrF58",
  "key8": "2TYzypNBHpU9M3B5FcxpYBUMnPUXFLwRUe1a1Mpjj6AYufA2ub9ujkrAPEHxX16rBWGnwZUdQSe3YnUPVHvrkdoQ",
  "key9": "5hSLzzAbsgYhkekoM6vGgtgdgPWfi1nzpLW4NLbqJP3mhtMtsjeEyaBREhjJuudkE585XqHxo73XBZaaYhRiwWFD",
  "key10": "8JZ9STB4HhJkYE2ZkJVBoKEVSD1NUsW4D194V9QcC9fm8oDt6ZQhmLCgo8CRZrL4DjbwQ2wHTQtbJXVufR2HR6r",
  "key11": "65Mku6r3FnbDU9KDYbrvctjAB3K6FJvEsdSfYVMWYegd6jbZK2wxy5Y5ctFSpyY1fqHX5VBNRND5FUjmUHhRmxZp",
  "key12": "D2QWTgxRMWiGYigux1jS9Dm4YvDCUkjwYQVAsuU4HSn2TbjBzVS2uT33KnqVNATDnhQrP6DJBJmDjbLskQj8Drk",
  "key13": "2GSmM8NcapNMFXmgNmZwECH7fjdbLAFXUWNe4vdtkL77KnQiZKUNqhrqbm847Z7djBNMscKxSY6XUCj9MENsPiBD",
  "key14": "3XKJCBYeMVaMUSe4u4G9Z29DJvgQyTgdpFYdk36tCSgdquQxVY2Xz6Uz2WxQYvdZy1Qc71A9wYbTmBQm9ueTuCb4",
  "key15": "GJpA5Rry67MBxhDvHyH7wnaHjSN2yvePuZ3GxKbW37jR2u8V5ufJgy1RodrikbzpRb5cDBvqTm1zzPNmi9SM8Gt",
  "key16": "2g6M975kJC9G7j9WzaewyDiMkGUip2qEir5PiLCDMnGr6gDe4tZZuG2QPEu2rMjBAjVMYhntRfw9p2wcVWmpakgr",
  "key17": "3Bom9mjkrSMfPhSmUijCe5QgN7Fr7XZiiNANC5KpdkqmwKTsxGEtD8jNjayxESC9byPeuenfwbADVgcc8887EHsw",
  "key18": "3bJpg1QfQecefnP92CsMeobsHMdx7AWbGrbnnceJvuQnzut4Xn4ZoBfxUK264YUMFq7t4QmNJPweQ7NA6o9qXk5P",
  "key19": "4zxk6SMZcFuALLbnK1Vvyt2X7Po2yGEAYdXewSxjrcfrSmCboDAQJUAs2kP8ULV491pLcZ5cR8h5spbFnFHRNF9",
  "key20": "3PiLdVEnieq4AbHuUXbQkfkpHQ9pYZWTBK1CLuKG5QceRKcfz8ME3M5jfu1pwR3nN4yT74keQu7ZibfsYrmS99xP",
  "key21": "4VCaxHt1BoVG3u2ABKc7SXtq7jMnFPxzeeYPwB93QHpkxueCkCckXpe5Be7kHAf2yrno4CG9n7z3RbpKhVttPZXR",
  "key22": "F6fhS73fAfuZnE5K9B5KJt8BhZNNSqj9wWVtWweNSZvjDUUT6hT8oPKoEsGBNHbuRZvaZekg3NwTM42G9XoGVwX",
  "key23": "52K8cWX9vcysxzBTPLen4YyQQsrQdDpegY8k14uYqd2y18PMyc7V35GNGybNnnDf2sjfjJvZ5JjgQ7NqfRn5MbL9",
  "key24": "2y4iDdMZ5FEo9tkVqG2hpK4HbZbju4DzrHCGyQ6fcnUnug6LsYWvPv4zbjYfaAqaJ5SZNcLhhqkRsUBAb7GqP4nf",
  "key25": "5DnoWgUdc5jadD8pUFYxpEwp5T8oGTUXNbjNbTEMoffeErJqHz19hqS5JUUQYKb4qs9mUH4erY68Hce9gkuF9Xp5",
  "key26": "2tgTHTPJWbpLpAAuWNBgTXDCuYzMcLhr4g8JFkdMKG7QEWj9ojAH4fqBzAfUAGd14qjfesbchUZCuyNhrktFd5HG",
  "key27": "2hJVb4puvtZr8oEpWRsmXAFtUZU7H4Kc7c8oNf7be2GVim5S6YAMhjUG63LKzoyX8EbLKiAUJTExrbfntJReZ9q",
  "key28": "5VbNBjbynPPrwguzFuefo63FEGW7T3HhXpREjggvDaZjjuvsaM7WTQV13jyvAQPZLAXoRCSQqNvmF4sTrSpQK3EX",
  "key29": "31ZZacysKkNyNth49dESqwyqxQpnQyM5i93fiXkozWUdATooqauxkMSTUkg7KK3kCnMta7y4qetAtf6WSgWeiLRT",
  "key30": "5n4g6FU85E9ZixKMk9LRxZPZ4wK9FvLPLCMo9m9KqoyauktD9dqfNDLvfhJR4UofajRkTvqhqe9UyNTskB22X8Mj",
  "key31": "HbQ8yhZp2wAp3Dq9FFHaJqcn9aKw5WoFT4bM6QvmvKo54SQreE1XPNcfrK81svxe4tKAnkCzhjYiKqQH4Xvi4mo",
  "key32": "jycp4AaapHjQDncQGqzoWyqSr8j7wF6EfJLGDiDoWUXYD9uikgF5nDhLRpQ3gHTnLsbGkZQDu3m9vNtQyNkMRjh",
  "key33": "oxD9sNEq7XvSAeZYWynDu4HVC2t5Un1dFhNpfWJXgeZ1beSBr18oFTTAH7zSkLv6t1jaxd5yE9zitZ4n45sVimo",
  "key34": "VJDiiDb2ArnLiLMMEcjPb8deCzs1NwzC6aa1tuZvfrpVDPvvzaA7yCMowGEqubMnmxgf5B4H4dNyQCwmkcNgdGr",
  "key35": "KYYy588TnJzHUQwmyEwV1Ww13GpYzyatt7r4ssPxEY2TbrXxpCSsShqq9YJgL6YZ47s7hSG2KQYsRAGRXpehbk7",
  "key36": "rMZmFtZ3Am4XKw7gVDrmq7xY7NyzRbdStDw2krCAdHUWn4fHCznWo7pL5jBftw7hwiKbEwLn4Lyw4mKfQqPTvRn",
  "key37": "FRXTismAXGhbfBvSD4QMfFVRoHy2QY1xyHqGwLshwGcgJv4C5T2PvMQLtwQmi13TcSWWNseTCLHPSYdYRkNjbMT",
  "key38": "5jViFSGL2XMHSeF1e6Yw4CdqvYZtTNnqAGsJLZh5zzEEXX1fXrR7226mbAsjfcZ5Bk1JL9QtiF4ETifsGeNf9ymo",
  "key39": "SzhwjZLoHgnNJMtonDpu6vgPqxp339GcETd5w3rpX8uepkX4Js7ovbxj2paxPvir8RTi7tX2E5qEM4q5sQireCE",
  "key40": "4Pw1bc1VwLaBZnDVGePa9d3PiSvfzju92MUKFjW1XASv4musDZpaxu6f9gJ2cCLaqbmc114hC3heMxtLZXGNXSKK",
  "key41": "5Gq9zcyG3TGdGS8FxAgx1771pXWcHsXoVCpQzR5rB7QNBLi3nU9qZNJrq4jZ1kmbPWXV5mL5iGoeANQ6zrV4XQkR",
  "key42": "4AEE5kmttv6upXUa9eihyaKcxDmddKH5AMBBZng3CMY6xxk6SB9pdZEDWuEdxWyRDqY1YnKomdasMthmyUfPbj7Q",
  "key43": "5g5xwDS75VW3GLPt8Lft8cEjHuKGkKSnZeVmiLXUnbmoq3sFTjeGHDH83en8fmP8HEZ6CpmfjRFitZcM4jK7S9yM",
  "key44": "2t9LtooPxu485fB3DgNwBh5JjyEzpbcX78yEa2CT2v8xNrc3wK9SyNU5aR8LKLmf6SbtyDRRiujphaepLn4Xdoyv",
  "key45": "47r1Ludny3MyhkTgbQGsLB1ycwmnhKUCQn6QW53USWAx1hMRENJ9X3HaQPmRnbTXBvXhpmni6oUbsq4NvpwoqdKA",
  "key46": "2LDMSfeDc1jwS9koqZGSaUexC9mFM7nRokTBgxKVGetzMwgD5G8LUdLoxGrseWhVngC7yswgUQNTkucDn3JfP9w4",
  "key47": "4r1jLwfvAFbqGhRdtEt9WC5NEGMhRqyvekrR7PWX5tfejmf4Msz3rz9MgSj7QJW5Jr94gkdEn9midVgzZdmUuZ5n",
  "key48": "48ogweAqR5NWkAXc6jUFNwLoP8gLC2e98vQE2bBx7KUMNotrJRz7LUEUedsp4tAvhdRWf9PWMNyPn3QZKBF64mHa",
  "key49": "4ZSHt9W5EQ9ACYa4U5noZzqnGQXF7gRs6aU1Pz76g7Zb7vAJGFjPsREPtT87NBnSoKYGvuioJUYsEdJPsSpFnvGJ"
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
