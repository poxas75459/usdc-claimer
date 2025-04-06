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
    "4XMdSApjsipGcUER81u27B7jUS2asdhinpqomg49Tq1thXGqrSHeTd4w2qxoFSaCsCbt6pEozkJFkZbDsu6MLSfS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5auqUczc9W2brtAWMctohfAow8wVvvvNpzX23D5MdFabQ3KbLqPvVrkVdLrNDm4An6rJaYVvJyURixQvbNJmDrM1",
  "key1": "2Gz8sayELcReEB9GyrUspTYXHzf3FQzHdtvvaR2AsGyUketrJX928AVr97VQCmeAJkddJ4JgiM1RKx17hfWF2Bhy",
  "key2": "RUvowz2Jr4WyUTBcH2arXgdPtwTrZ2FL7C1P7ry3C9h8bsAvi1T41fP4xz9XNgqVRpm3pse5jUfAZ2kZLQwktBD",
  "key3": "4LGqa5DNaRXDeKJqpqZFDg9JEZfRtkbktZ1VMDwSYwLPDLq6YdWeG5wRdD6S71Qr1KYACdJJV4S11UUGibFCbm3",
  "key4": "1iQgLvPzKSBvoMd69ZPZ2dn25fmkZVktWLSc4fihT4oyDSGESjrNQgBcWcrc2S6qmC8zkT7bD62hMV2fF3nT6ZT",
  "key5": "BQCfD2K6b3vrYJ7XFnEDXM161o7iBkMSaJRfhaVZLC4EqwquftQNi1rPuRqQBBWx2M1UiH2oxiAph1RtMJ3ZcX4",
  "key6": "5x3DCsrxb7UgjeMwfZCG5dGucLGoQ6VCWVqJ2tqbT2sendacSKJaySUGPEP1TBxk9z2DDkPD9B42fvsDzqZdnP2y",
  "key7": "5yCFmEAp9tGdZtrzbpBan4RoRkzLxETN2m5iC5VutoPvh9jqTx71TD6YjBrLTG5eQNavHmmEqAjLz6sWqqAXgYhj",
  "key8": "5vbKAguhKT58fZ3GrjAUjKjBmX9D3P9J4WZo4D62V6xN2QrNhNBhtZiQVs5VQkqJtEoxBVDgrDttjnTopQsPSRw",
  "key9": "49LgZ3SjAq2wpRUcDr2J9J2q19RV7YYtkpLFsqHf8yYNmia8qyLfviPpQGT5ysq2dnxtA9XBZUu2XeYHmXHe18a2",
  "key10": "cKbGaBYf7JmFCh71FhTYDFtNJsMGoEVh5WUtamsMPH3udFYfPD1BbUc9E1wqCt52bqCghTEzgKhjydWKnEsoJaR",
  "key11": "3QVkFSgQngr4ktUFdFTLjFA8EDNnXzKNZfv9yDjstcbGia6hTQmE9HZbfswXRHYDrf591jnpYz9guXbcounjeifV",
  "key12": "YtSPTm7w3fhA9f2oraowBVWnMVZbcokD9HyLPsm1MUygMXfrHJeq5CzbsN7MMTWN5WYe553pUkWyHL5GUVRa4qo",
  "key13": "GCeEMwmvbpohXXm22544DxAbhp7eHrpznZgHg5zmUVX43q3cQ5r1RGgryJ9dzSou2J6zBhmfkbJKdFq7P98eeZG",
  "key14": "35NoZh5mms9oq82kq6uqhg8MJKcxfg217AfCDh3GGgrs1FJZ86TMhfe3iene75cJZ4DLa9gPE2PXhVnGkjk3Vqj4",
  "key15": "6289CXto8uZ2NZjmv6b22Mtu6dKiaxjC6fXHG67EUmwAvnspgNWLghG16E7CCwSYd83dzXQdEtpGfKQUAyb2ehvV",
  "key16": "593BL5tLq8thQehBNr9er6kWgeWAWJhxuToLXWPoSxrU2SbgZgDvAcsUtUyvVpEj7vX3EVshTaeyQNqGynppMBef",
  "key17": "4DZ6Eo6J7GCkeXaoy3wjzbvNQiJT6YgGhBHSjYARcuW6NZJLLmnjsyscj3gdDJXthYa1tchwwjeZXiAb1yGZBgte",
  "key18": "55s2x6FK281g5ZyvFkQw6y4HtpYh2G9eDSTSNqWvodpXfUbgBgX5csqEXKAyo769zL47bsn6YwwPQtSBSkjLFu9M",
  "key19": "2YVNfuhofwCgL2Vg6u1wyDD61Sv2AJJaAPKMqZCmHWiCKUPHpxP3m2xP6CNStADYvcBn8FJKsyFHGm9U7zsvguzW",
  "key20": "zwiPBCWvZPya7Fx4StpYShq55TD2MU4ZoHrLL6edwPFQuw4iCp2kYbNTEi23aXJE44X7vBwMkZn72PcL3aLUywf",
  "key21": "4dTVJE4Ci3cVCvcTXKPBHF8Rd5CD3nzGHTiUCGem6cub6yqWKEHgtXMfEvgdavjgya3xpMKrRydcoaNnRigrh13f",
  "key22": "3T3vmQwUgU6rpqj75Pkpx2LtNLU1zRDVAyZqfu1UXuuAyU8vY1FdGSzDCcUBRJosSVoWuuL8kU1quvoUwgYbDZw7",
  "key23": "5URrg6uRUuBxt4NjGnGzwgKb9GMgFYj6F6iDo2B1R7yfP6yDLvjZjAy5RjUWGDnFR44QZogipdj9rNjgSKtwUaA",
  "key24": "5LttSVs1KLrRWUQhPHoRtQVqrBHgMRaXjMxyFBspdDzMaDmAjmeQN25Dd9xePJHKJwYnnNbgsMnt3QRUU5QNzttw",
  "key25": "iKrXnEKdLsSTTkEm3b3i2cxekpyoU8xvYLynnmM1E92EhojTjp6C1ebDXv7uNDgyhQhqxEWFJGAmmnrwAZWbcjR",
  "key26": "Y5wbyNvSbt6xjtFzpMwNv2NYmeYDRVFYrd2fYwm6o3KjJ8RSSVCXVgDuToqBXnuiD6as12LMKLgsHV5vPYy3vKY",
  "key27": "52JBSJ6UpJ4Dgnc85u35JGmaRgjcCWhg69dRHs58rnJUceJtJ8GtFyvtgzWvAVseC7H5wC8qZbm5zoLs6QwkuKiw",
  "key28": "3qLLPDabj9KBdBuccqnXoRUXE5CrbwFuVymY6b4PLiS3ySTvHKTKD1UowUjVhKdcscC8L7mrv4NxTu6Fhy2afCHt",
  "key29": "5hQ2JjVzHpwRXe6FdVr6e9kRCCMbb8Fe9JPKj5wgY4jkVKKqeu7bacF5nj81P6wMXy88FBEyodXwwdZXRQzZHQSZ",
  "key30": "3V1S6vZF9HsLzquNDwM3mmbGyPDDgRYpoNscKx5mcRHrvatqBYivBgMQcJDHPsR51hGrKvQPXmscKz3JMdg8xTfx",
  "key31": "4YNY5hGJjAWzGJj5PzXcpWrECUCRnB6BrfvRfY6oZBaGa8Vbr8mw2GzmZ113KK2D3q9KbJB185zxx4m5jXRht85V",
  "key32": "4kMRfddB71MaCAD3TqSYsuAFxUHC3S1iqCNQm492MtjaPqwZtdPS2MiL7t6h1MRHTvzvpcpm3rQD8FVrN8ogXoGR",
  "key33": "4Ph8RxiijiGZRvD2GcUMQdwbMyBz5hCrxwXD9J8YyjcmnRZawb5Wc6rN9MVu1HmUqRNEdwQhVng8yatktw6M4GUM",
  "key34": "24JMK8Rd6fKy2r1V3SEh9CDqs8weCrw285asHJfsQSZuw6nVddchf4kvqrC6H12BKgbXM8eeogQw9cUTbcTiqN8S",
  "key35": "3tKhsrME2bA2sLcfZERXNdro1gmiwiYEWdA6wBjsCv4cZaec8ATg5NvqCZtFJq5gZ17ZG4HtH9VZHNChoFJEX1FS",
  "key36": "5VjATUHgZUdLFeKSvmx8NMcGQ7oR336jk2PyUipogGeYC1QV5cxv8hjqUGJyGWb5fq31oqzDVZaSURTmSiMpJjAq",
  "key37": "FzrdXSe7eHqNAthE4ywQYtbQSUKVrZtEKA8JE13zeNJgzh24Y1MqBDaqhmWGCoY5mjeQuTmKz1qVE4ScNLnvF6v",
  "key38": "4P4iTw3EScFYZStMP5SW7tqvKuYVhUcGrdFZGVDa1xwqC7YMRz4RRBobXHnmUeC3mMwEXEBgh5h6MpgGoqepYXGj",
  "key39": "HPZhVp1Cw1QnjrwpmK6kKUzZKK7wrhSoteeFdGuartNC5hpvn4GfPv1q6GW2c21zd83FDvF3nCvby7afc7GNsNW",
  "key40": "5xzoxH5nhRBkvqTzxskHMvXgtJtBxaxUqkthMjphNHTLa56xE5SPcVQ3AdsHhhtVdPtBrjbhPagcsLanzXdg4qA",
  "key41": "3tR87UC31MTocHAviuXnZtzF1nki456uyHmRxnUo6XsUT2iocLzKvtmoRX62konJTWB53MiWDWHuoJTrscq4F1xK",
  "key42": "3GEcEMeYDBuHtgp8UjnJfBZaBTZxuPnwDHT4Qg5deLwusMAfNJhhvHAd1LLPgxBZj7GoteuLkujQzNAoywx7qA2o",
  "key43": "48C1DH94uaBivw86P4f9UCLFGQMVHjaBCSRBf8jsDDoYoqGeJTbmYsrHcVuDQ8abDS4P4MBxKcZ8PqEa85kmEojE",
  "key44": "44gSQ6esfUgihoWTyo3XmjZiewJFz1nRvZ56NiEWYDJVfdsu2SNa4BqZs9uTsroj4UjagN54SC7PJxH42dVVj2hK",
  "key45": "34o7ootRYq86nRyKwDHaDhfEN5uPXWTmVZLhrV2CmmT4ZvGMij2WMrZEVbdu6wsVKaG8shrHmbcJyMpV5Y1KnvkD",
  "key46": "2GX3buGaky61Bkc9BNZoVuKZYXzyutLZWp9TtG2dq9PX4MdigX1FiVT3GFa7iSZDqiv7CTMVcbKKRBzsg1Qxr1EK",
  "key47": "3i3hjRjst4eb6Vyzr3tJxtqiPRsDvXYEBF1mg85ZbZNNwmfwZtAt9NrBjEuATB1oReH91f5bTeyXGmZ1vi6XonXh",
  "key48": "2udvkpV5JvvJJA51sD7nZrV2Gs1pYPzYP4hFFC9NYYth6C2fGVeFCYuCLtrVGvSV6uqbaysjVGFAigJWLYvWuc9D"
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
