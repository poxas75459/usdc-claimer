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
    "5mTdLwTW8DxbCaimwSkNSDtXGigkZhe7BKeSLTnrqKQQhrKPouW4eJGXBLW4ou5Uk5GuRj2mFCEYMVTTeV2GUNxW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vNXCskYuZQS3EuVAuhJwB7nmeK8mSjj7tMKEb6i627g7zb9c8VBYNoQjNKyYcuNB4zjG6wEEYAvLpGAU6VQcaGM",
  "key1": "qCRfqbAeUeStXir51kXctmfVJ69igF96PBE2tGRHgGjgULB4DwwV3WmjhRMu9wC1HtFqpnsaZ8vS1YfrcouWduZ",
  "key2": "61J36HqkMzmjBHetiBxhaVQsCfHUCAfortTikVrR9TJW8HwhWr6xu8KFBh6Rvz7mjttWUs5VzDNBGN7nGq5KK11r",
  "key3": "5xJzg1zWZp9aTTwJvHqqi48uJZK8cvSJzVSmAZHD2VYFpAH829G6GUR15gsQvUrwrkzjsVXLQ1hT21DvEMLcgzD",
  "key4": "5VwnhqJL1tmeZoABGdMy1v2AbYLF416iZr1eeNs5fjApyXMUSAi1PVtqQma8u9WhGruSFfwAHfa59hphgH9NHa2V",
  "key5": "4zFa49GHeRFXYKYLbt2udjZNL59pMhd8b4bRu4cTz4PLZWUUvXqDgsBNuuWKAeeMcLpTXmePR8PzbHiC4KLjvnaN",
  "key6": "4HEY4zc6FEkmjmRbcp9ob6fTDXntLpAxbRjNnfnbsZRymthhHKSbdut4fDi7KnBWUVkbQSZ93kH4YFX1MGKA6jx9",
  "key7": "4DePLFUZHR1Lnm3wM4Ujqs51uFnFbXwkUQTMtYng15vkQL3E787p1etvGWqyagh3sxjN8RJPrnGd6dCwiAGEXCWW",
  "key8": "2gjuUR7b7tHM2XyYv5HW87XEU7XWeTcxbb16F8bskVkZ6egxCeLXBFTutuBj86epEkwyhh5QHhmhMdQ6JLqgaFvX",
  "key9": "DEhHRUiBdrBD2GfKexPTLbesUzVHgX3YTHuasKkKxnaJtWbjDw9e3bYPuJkXf1GLQ2vkgqmcD52TXo1X627eFtZ",
  "key10": "32gqz8fpXu5oGUvSbk2gNvGcXYw1cdor8v8oMFHJh218YySq977GQpxLUTgnXmoZwL6mdawwkS38fP9LWgTCon1",
  "key11": "A968Pjgy7WwG6gYZ5KjDCXimDpG5mufUj5EBeaRergP1vGSz7ZuC6ocxE5rMV9iXhpVrp1g54wT4ZamgpFFjVXq",
  "key12": "EesbJcFcFURSseNRXvmN7TP8Hcrn177C2w7MqiKTRepKcLUdXpai64xtVtwJLWp9q3xj7mxwtCSCXf43hFXpruS",
  "key13": "4VQ2U7gZURrwVoNDbma7Xxb5AgEEpoXUEwbjpnxnBqdeuNaYZhjmiK2eb4rsLEaJgGvjb56fwRpavgiMUHNL4tAi",
  "key14": "5jP8MMahb3E3DL2LCFvVZFT2SGbLxNPTuSBT7LJnxRBLG4BQ4qDdHc5znKzXkFFPy4Wo4Ana8uVvuzDBGaMn4Cuk",
  "key15": "3XifGiu3TMixGkA16UEzTzgkVZsT42KZSFi7c1kwCob1wWFPBauS4FuND7M1UsKRQjVUUhoHcqaUmJXkmzTvcKqh",
  "key16": "5Zpan6W6mY1GaJXeJTjZfvccF7D2r8hnnHtW5xyZBofW68r1uZBABsx7U2RHLPEwqdTbfxwiLbjn91eA1V14XrxP",
  "key17": "4TY4jW7wV7m7DaYwjVtvqCWLDv3K4iUnTjc97nK9WytXEovJ76xhyeYKooW7xsM99tBmwnvm3wbCJMFfGVapUM3r",
  "key18": "5ii6rr8a2NHrKrwxChsQ1YRh7gYhVgFF3ERhE2mHgqWcPPRFkFSMVHLkiCWTKzYzpLTBm2SFtm7UkvJppKi79nKk",
  "key19": "2bnoGaY8MjPQ6fVin7yAteJQVA2uMCKmz3LjKuYCcRNaSwJogP7XwrekGcMDumyXqdX3L5Gkr2rtmaSBHcR9vztj",
  "key20": "5iJNKihhkVeV6t6GwZ8QwHXgJP14pRiD4vRNSNBPSM8GK2TrZZktvBBaqPBphpQg1ahCXEuVPN8CA19q9GF1MDjY",
  "key21": "5zHiVEjEEJQyAHUzowXNXrWLBok4k8umrudGK8u9a92AEe8Xswt46TzX1kV1cH1AuCaBRZXPrVYpzpN1i52T7fus",
  "key22": "5QSL2qywiEEd8vaTGEjEkKdYx6AjczSRnqq63mnQoGsEB3UbRCiteaffXbSjUhdqE65myPmwZc6aY5NsoNDx3rTU",
  "key23": "4hGdJ4Xa1mTNmz76cHHYUmujFYyMh3xBjknAXkw3rcABqV1BHPnYnbeVLmFg47AQ4LQwGWeT6FMMi24zytfm4Ghg",
  "key24": "1Rr3DMcqZNets9rRGQgFPnVPkVqJ2kEH3EnHSDqmgZ8DXrPBkv2SsFDT8mpE7fjAEjxv7zCm5yu1EEXtXuKshJ6",
  "key25": "5sJKzhYHn6bChpKMfjUBY3SWNdkgHSu4VyTF7bxNZYBK8qakS11o6xGGsTRzcuy9emu3XYU1AFnswuyHxiZfxsu9",
  "key26": "5UvMspefsqCFs9aMPB5MQ2Rvwf6RjfgV4RWvNNrDdVUYZETPuT7fqcrRJ638wCbnvoYR5DSNoizZAmcGbPtYMSKf",
  "key27": "3TA3MfgVUaTPELCtzje36o89XyXJ8zS1upNoBvw5WomgLUkjN1Yezp4w9aZUsmDAsm1gY6iLqStS5fpDnZ1oUPyv",
  "key28": "4QLWyhHpNwKkpZChakQkZMDtthE2iJvRbR6d7QvWj1i7jJXaZmg1zKF1wJZWPDZYZ7qFvCWAdDoVVMW23FwGnzR8",
  "key29": "EUJv6bV6jxF5SsFf2wXgAE9b3nrjPmdhzENp5yq2X1dfaspmmnR7QysbbW967SDs6uYeF5PTdgnCPRHoLvWzv1r",
  "key30": "5uKPt1eqj3u11TnHtQoDuanYCB5ULe4LhTSAMXup5YP9T181Cux38oCSUFsYVYiUwGrd5x7G45FSNtbBVT5s8ZYs",
  "key31": "5AZJ5vP5DaBjZh7bp23xhieUEuExNhjaY3wzYhPDjDtDPc6geav65hAyc9RFx5ncMAne5HRx7edAuFJQ2Squ7qk5",
  "key32": "E6EnQqnX5wSabJqYMKbSTkkCTwKTrq8xUUoXLqpspJPP8TbsnDrwzsosMwuR6uBMLVRnBnArJH5N7yNWR9UzHMa",
  "key33": "22eQt6SCEz2Q1Wc3QwNCEwGTXVDKVBDv1tamghNG8PQktGFSGkcFKrzdYqj93qiPhz8rw7Yfqr2pskTqCV4ijeUx",
  "key34": "onGarWPMV6CiFNJcQhzz1wjacbKAjsY55u4KWHJrGM6fsxStjit5Y24BnFXygrw9uM3Y2f9xp7HwYhk8Q6pVmPQ",
  "key35": "55Zn3HbodwhDEttaMH9XGUZ8V9QuncQzudu72M65UA8SL3kCeV3Lex92Qj692opJdkWUFAHEbpKepmCXqSy9iDXE",
  "key36": "2rhvpKwTewsk1gYE29JBp6tpbfpbs4oXqzdPWSkaM3S8LwgBkgHNLuYR7mEq7vrZT9oGeMMJ69cSRq7THPMsckja",
  "key37": "2sYYFFEV1x3wSvV8cSyoNDUz4AS1BaBjzzKxyLZYGvLiFq4ckVxL42EX1caX3tFx5ez1Gr2tCUU2Jc37Qnt4dcbU",
  "key38": "5CXhH7bkeSeUmzZeKvhKz3KidaoGHy2BhGJE5SyWEz5K6r2xi5jwdpQBSZCxhxhPPCXP2EkLHz4BLbfM3xgUkR5V",
  "key39": "6t8TdxTVKVQuugvBSk4PwkqXWo6PXT6ooTqT7dREuLnAJSYBkmaQLpVwpimiBGYN7LvBnj5BwEAxEX4MRsShKvN",
  "key40": "2ZaYm11qBnfjZy4jZsnVK4GFqf3TF1q9uzS2J51nCySbbbfowkyKWU4PUk6QY597cE1q8u7qbpqzNVvGcZnPs6HR",
  "key41": "y9JUtdfN6YgqzCFFYk9pAJCQ4nPek987QsCyMT4YFwTXZ5R2GMzSpyYYGd6Jx4KzGwbaNg5jihiAV7e3ez2Q2qR",
  "key42": "2gX3Yeh3EqqDBQeYV5kf356kyf96CZAntBH7cFNkF35jAXpApZtFgAHP3aZAfVFi3qbft5bZSinPvkjeW3FsgA6L",
  "key43": "3L2sKFXL5462dJjwrPvLZsNnjG1h6dwkGGzvD4cmwrpZvccwGKqSwq1d8L8hQ4mkWfFHcTZqtWtin43zrsEfq71E"
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
