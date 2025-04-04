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
    "38fQxdAmLAdXujNc8ybuuB9GoXAPpJwbJVgC955xVcSRBMBGEdA727jfWMa1fPwo9BKkcsyjUDPwhbcCaFfE2a6Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jAVz2wduVZAwMUa6DohdZTVzRuv3euW1dwCDNUYKCuVG543Wc1jy3N9C2WbPwkeaPy9wqiTaqyuAiAkVPyMB7Gb",
  "key1": "5FoHUGb5Jp7LsucjauHYQBpQoMjwnkaqcstsFE4PtGTr4FuTiC5p88qtWapQSsMYcU2WbV543SzecJUHubLcgwGR",
  "key2": "5EbjPAg5gBKUXA8zPNdgBEeBsfEbZZwYatKyEpghEjRZyfU7uAoAXyNveFY9oL9U21dL3BsrsvyR8miPYbDxDdYj",
  "key3": "3bpTXjrYT4CSSxZGnbH5a594V8yTvV1LKEUsDiWs9Dj46MQV6kKAKRpWx4mv8SvZGbuSwFQkZ6PKTHg2y1XJ3stv",
  "key4": "VCEuDCbqDDhxQK6xAkp35CgCpuzEikMDGwk2raJ68LSexk2zKvmoV5Gaz8cqBFn6rQ1gT8rihugGn5cGxSqDDUn",
  "key5": "5XCK9fZyFGhEzvgXvWJp59ioPMR8ER3kLDM7HWDD4ZAAAn2ZfeUEPQ9V7CCWiRcr4LymUpb9eLSMCmEGpMVW48EL",
  "key6": "4XZT4LMwVoekZeXPZzZ1CyfgJ8oEStyuKW1LBxtXBiG1o4gPLxYk1QiExfT23rqqqJ5L8CPtn7VDLnqa7vvr517v",
  "key7": "3DLXSQxoy8T4ff8vDsxHrddjKYDRafyScoYS1TJuQ32wZxxmmLpr6yoQJvnnuaodu2nDKUJM12ZKJYo9YCkqv4vL",
  "key8": "3YtKDtdwsQzkkgKYgFrRzzuXHHrTDDgmmzHqPFoqXjvS5uqj8AzoegLkny17ApSUw7PKFVwXxdWwJsVwUew5BJY8",
  "key9": "4pSQ4dztY1SgGdgHkdGe5uf3sMZk8RA2Fgh5w3hHMz57bnn2QWNiRkYtdYjZSzF69dUNDiNQw6uUa55CPEkhhyav",
  "key10": "5EWxSmHCU1oVkZxktAdordpx3yVU9fCwumNdkErM9wjw4iX74qpLH4eMcnqcsE6YBBUbBGqUmkZXHffFygtEmv8F",
  "key11": "2pRst38ZanuWPeychDt9ge3KFY2KQfbsjz8jvAoRohbNVPuQ8gGjMMbVvYzN4PHA9q29XbdK4pdHwPTZydsgUKJs",
  "key12": "43FmFEnNUmf2r2cXdDntKTqurPYWBiDvAG1S2SzY419cY2FKFjkqVvgVJdJK1bDiCuCkMgE6vvbh9JzD3xv6Nev6",
  "key13": "5W4NeUJzRnZVe3rjiZwWoC2Fwh9gB86WNwhc2YhZVw8sws91NCwN3GKEvDRPW82vQyrxA4GaZER5zT9SkeDb5s8T",
  "key14": "2Cd7cfvACZGy39NSKgNWJQ5QinF9jFnzNs6aDTv7cVTwzdRBr3YWNSf5nt7dixxRU4ntLetebfMSViQToDsjh2kA",
  "key15": "4dd8MrPw8AC9BpvHdYYrrR97szA64wSbF7qoPnVcRx6HwGsE85b8MQ5Fah1oJ5ScSMgXwrVsEToSivMZZ3KUeCQG",
  "key16": "3XWGx3W1E2XVXG97R4Ld4fJDFPL3k2qyw9ewWPM2rJhAdX9fvpq5wPf1743Ean6zcH8xbHFFWTAqG5gDQRHhBXqs",
  "key17": "5yNp1y2zqCRbgdPdmkRULi8HmUtpmErWn3maNX5pFRQQukiVren1R74mEmWVtTrE5UFqR42s4XJ1f6E2UwSESKmB",
  "key18": "2RAfi7e8ftKTXRoYHLKm2NWdQbvcMHirahdZbyhFvpQ2nv71CMFhKTZjz5qNeb7ze5NzgMoR2Qnc97sgSRK5vJaS",
  "key19": "5rr732LexcAnKZ5nTX35XqzHmcJdVAHMP8v66VkkUNNSV4aPh98n1mRTYw4viGseRnrmekj8W6YxmPBwQfZYhJ1y",
  "key20": "23hJbn5a4gZY2Jq36qPsdfPwNfX2pjPKGTsKYS5kyuaATd6n9X3Rexc7mDQVUixGF22tyj3ZHjHy2gNJFfpbfhBT",
  "key21": "buc1jvbmzSfjpkvDAt8MoSFXbe4BC1tzone3ofJSCZ93jj232e6NzvqJrJ7oHs9jCibXxpb9xj1BARfLvWsRns7",
  "key22": "4dJ9f33f7ukgrYqU263hMb1X1dhACi7MkqgFy17Jb1o2wwr4zAHgFWYTZVzmkBXoW4U5CgRSF6kBdjZ9TqFiuYKn",
  "key23": "3zni1GJm8UMjFQ6ZoVTZeMPssptxabMq5YujC36a3R7B22kGrJTNDAiCh3MFcGGoArETaxXJSAz1seBhvuAw7JCm",
  "key24": "3jeMbG1V82mj7FpasnKkwSHrnDJVoujDvDdnunhJgc8RRPsp9p1wHaqTrzwFPQg5g4dwVU7MKCdUX178uPPhQ9wr",
  "key25": "5fNGF1QU32CEfYyEMayVML2VGdnZh6926GbRVnMwzUwLNmPWw4P1xd7CPboUh4fVrpXZ4wNXLjp4K3ARA6Wbo68c",
  "key26": "5KesJKEHqThhEnJjZDAcaSMFz4pJv99zeseL4DSbuBFojaBpGf2auAuuHhFsNVfKACv8XeYZV8re6T6iZTBZZFjb",
  "key27": "zUf6F1hgqXvbkcmG8brmW6XCWNMAJXtN5VxZ8hsNY75PWZHMkjjBgjvPEydmgZtkS2b5G4GvE8CvPwQ8qXFhdcn",
  "key28": "Z34tDpbBgBdn2MLwougVAq8hkfCrjPgbPDMfpzNhBcwF2ZygJw51pkKWJ2eRBqgchvUq6LEot9hsTFASC6UwJG8",
  "key29": "263DgbN4aZPFXCaeXXFSyBV9BG78dCFDkNfmbtyceTT1RntDk2AypwK319xtZ3tYTS6wKWkrX7v77nVqgwWZRmVW",
  "key30": "2eWFRnJ2dgr5b77yZPjbA3xSbpkChzr5HoJ6YFhQKDD8XLrbLdR4Y13DgtwpAMQvhPZU7qhgnz2rNppm4uE8hFjZ",
  "key31": "3oLRzzHA9dFH3UoKWabWbGuHi8oiyUNxYM4FjagU2nWkfBDQ8sApxoNDMjvu38tzDsNgqLHwKA4n76VehW6SyS1X",
  "key32": "3L6ZhBrx7jBqKjKn5MHZHmX6xvrXW9gSyHo927QEkGF1gFM4kyJ9SR1hefGbe2ozZPAqG59rydSSB5oBKudB1EBX",
  "key33": "625tpuDk5jPAdJJJ7FoqybnuUVcHd96ZnYSZrU7v22aYYyimZ5SKWY5UEeZcvpJgbhHMVQjc3Y1FBZybuVcHePAz",
  "key34": "5b9Ftd8WVmK5PQYcdrUKEda8uGeixMxu87xDjtEew3hRW1DaoyK8VAC3yH5PLkFgB5Yg8TdkWcnD36PBuygraS1u",
  "key35": "5DSsr2Wu4KGQSwzoPEMeSySTtAZ7XzioM7r96wQGXgYyEhpVSetnkp2jkUgxAbFhZUqZDrnedsGLDJcG9HVsqLA8",
  "key36": "2YHxjqHiEw7wsVKGUz8vJoViYCuhVDm6yk76UyemV8MAW2G1M1yUjHRcpyviwjCgpR1BomayVRszcgL2JyDgP7VF",
  "key37": "3ZDK6EfoCXKVthE7A6a2tmNuHfsUXDwnvjcLRUomVqofcWRnQ4txasne7E3pbFE5kZb3K6GYUmFhWfGFGSuAELaL",
  "key38": "3Eu4fkzDWkAj5TJeCSPGf8zGUKydGMAB4GRkdnetdfhMvHtnMjCtxFQjasJ9MNjshNRwL6wgL2dnHSgfF71tsibr",
  "key39": "qSmbsfcUQvr75sNZUh5yaPemKnEGqnqMGuXnA6Qf5RnYcJj8SnM6tR8Yxfk6nscPaumANK3yRsgJ1brvyKZo9Ez",
  "key40": "4jx1KUw4CLA93pPPz3mTtBXpjgMrH6tL4QqDQWXek8rGvnfK7CQsNQKekd3JPNrczTQoG6iit8MTqNPdskHbzDdH",
  "key41": "p2ekT3vN3L6t9CncxAEWr1V1Ccc4vq3jrjrbA5n2RdNnBxiYpzq9X9LYEyhewTd9gpR3QA9MGqHHXFrELNTnFsD",
  "key42": "458yn3Mqr5rgBssh3BouZC8on7DqnsiaNmwhatrnVRMcdXv6svzA18dVcS6y44anr2VbvURbF3isyaSSucnHQsjB",
  "key43": "3Ekz5mz9TFV2KVBRCsHJHkki486vMrk8c91wJFmLiG8R7oQQix9VEcBwsVh3rPdjko5PqNuXTnnkwiwAJ5VMRLv1",
  "key44": "vjpBaBp8uFq6UkZvZP2K8SRY73KYHKNbDNsvcpbDR5JbUEP5xtWcWShCcDrF9KyRN9FvEaUurvdSB3uWeYa5kgi"
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
