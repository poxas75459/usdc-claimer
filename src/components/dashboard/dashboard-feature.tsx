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
    "31LbsVMnVFtq8vxUVf1vvY6tAnzUjuub2ZgMTHaa4xneFqgtzjvrnN1uxbS2XUD2gbELMULiiGoNmj3vMPNAEpcu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mXfvjzR4HQcCoG5pLMMWss3VDAMrLEBZ3TgBQVmwCt8ZBUtrYLi11azEKxjk81HU8DP2WEuPe4cz2c8mTqdRY3B",
  "key1": "538gP4gwwmCtSYRL7wZ3n9g1iqz7HBsj4Ewmhh1QSD35sKnbtBqvgN5bw4KRDEThAavvUBjFvVfRrtyCbWccgRHd",
  "key2": "3qphKtrFNgw2zzDPqHajtixhJT5BtHDnkQCAPkBbEpZqFBNNRQdxnxqMdr19k624TXrSaAYWgA5G2N4vVZw9Bfm3",
  "key3": "3F9R7t5oDACKRusHFbXNdwpGfBGRqYYxueXCBp7WpQoVi3o95WjvpSGg6xuYmBA6HeCM8gRcSMpScDhvFGjtr5J5",
  "key4": "2QUht5c9QNwh7ysTWnNyjgLytb2see7bwrDe6gsypDryGEiJHcWFLTh9yNqLcRAowWQJYbqUi1Fgu1bAuP3SjoNo",
  "key5": "2JrCRkScNvMcpfi36fFopZPvpxPuB7KoyQVxfnQHFhZFsKQokQpKWzrrL6kk7WtCNp7e4YCEurzMVgsy7nezYqMh",
  "key6": "4ePAJjCzxDr1dRvVY5JZp6AC3EjMT7aMy4edbZN2H1Bdjvtah3e8jb8qwMutPULK2Gsy4ko43t5QhavDBchmGB34",
  "key7": "4e5RbS9eRg94uu1fr8JAmAdTRxpp2nkLLgo5VmNfiWGSjWrY44jSBJxNbQrNBTjZC5s5rM2rFjDSVi6DcAE9BJW6",
  "key8": "3JXUhszPk7ReGXk8DcvcLvUrZ9j7cwun69VNtdn8gy6HF6bhbZTTf8DTPQQwLgX7oM9Xgma42ShzWiyoYZhpAAmH",
  "key9": "3ymzideFWZjPL7qFmFFhTFyFDEXzFe1ZDP8qEhZ5MDVuoKLBMmjfA7FVkTCJn3MxqJMhjXBTXrGz3hbp5x1Nw1Tz",
  "key10": "2FY3YKRYxrRF5SWUVmPbfsfLuxNpSk7gEM8Zr9ay6M87ss3uuD4Fj6n7X1wwtoRwEVMJuxQxqJ7xcLxqarMpwdXJ",
  "key11": "vnzQJXmP4PQVJSC4ktkotMR1jd5wrnoqtSBNcz8JGeCJX4fAUPHjwwKy3Yf6cdjaktRQtcnYzNqphGkV9AeFN64",
  "key12": "2Ji9JAr6V6a9BDQYmpNRq85oabKMAjFmznqUdgug2mYvowG7d8j6qCd6WHY4GXMjoztKCUHYs8fhTGFmDzfPqSGB",
  "key13": "ebQH4zvLE7dzhiadtVGw4LSHZ2TBrsBGPPjHfxc6EdPRPZBxUjeGgzbUe2RhQ1Tp4UPNUTDt5aYQKKvdJxFt9Em",
  "key14": "3FCxponbthE8uoS8uQNjPz8JeJH591GRwgLS4EtnjerYgfpN3PoVZ4ZdwR5wYN6PHRGY3GeHabfteW3g3ttXpW7t",
  "key15": "3FR6V1fGy9nx3rHsnALjD4UZhxfBAgkRv8x9Apu6GBefzDxNWkwT79817ek9fGbAo9S6yE7oZ1gEw7AoJhkkLhov",
  "key16": "3J2Gux3Wh8bDe97yFnJK4y2XR3nRZWkY8WL3waR78LtaTfimLHfRYWwW5yBZL7xvLQLLeB6YixgZ18SPMPcTGMgD",
  "key17": "jboXtR4Lc1AUHipbkFWgwuu3ftAZK2zdBqiJ56oZaegZ2KzcMpmjFAbcG4xJYsBtG1N8D5EiHv9eyzis9TH6weN",
  "key18": "4d4AnKnH3f9YvJsTS9Tcd1EChMrrAJwe3fRgSahmXjKjAoodiUggVuS13yA5LiwB8M6SinpPfU4FWZxXJ5CWpgDY",
  "key19": "52cVeZ2T4RYF2Vh7pETXNHYaS11m3wGFJjemRBHGaVLFpYPYjNS6cztTv1Q96exwBVtssJqVE2UpJfJHqEQ2TeXh",
  "key20": "4YptEEe9qknyyNdS7Psm9modwRfuiwkq2izjL4bExpM8QFwHv9xcPvpxWQu8jAYWykC5KdzKgrC5CofxL2f62gf5",
  "key21": "4Nn75puajyt4KQ4PbPHH1uzZfUrz9pcfDMSYMpwpqk638X9Fkv9b9n3AU77GdnL5Cck2XcBnWjHa28XT7pEjaLut",
  "key22": "46MkWdQ1jA6Qk1jCYGFpXNcwdCbP1ESQRgoR3m4tU4m5QHoUeDK2obKgjvDhgoP77JVzSXzEKn8ULU2qCbMUvKz5",
  "key23": "3jkmzcfGrCH2ytddP39vWezWLRzN7wP38oKgjiafNM3aHSzVaadDyXNfUYAzW7iRSQj3tPJSUt8ArhHPd8wRACPD",
  "key24": "5h9BZMCxK5xWVDPUncyCf7XupqrQgPGingbuMvJRwv2ndcNQUxTXw6khu1L1Xt6nvNESZDKRzkmVst78QYm4knNB",
  "key25": "3mR4bWcH6vkG81A1GoVugovb7TXuSVQidgmHjrkzZQqguPahri76oKCYpW7i4pLpA9wDjZAt6LNkQyBhHac48XdH",
  "key26": "FHWwzijfPsXegwBzYituX6mHC434JnWrNrKLP4Sg3Z4sWXGnoouQE5GCqVFp6QWgPsF8YbqABmZcxGqGDcM6pXE",
  "key27": "4gv4E6n2ScJCyj4n8ZWyZJaW2jdmqKEicYD2gDHbviKC4ppuZEaMq7qytg23QhSx2mJogHTDZqgKGP2AqbokSUEW",
  "key28": "3RQ4G6wqQvaGyphx6kSX9st33ugmrLpdq9oUpARdCcQE3i7GhZrWbicHSLDMQ6ePsPQtzq1xRHyK3aoT5x762tDf",
  "key29": "4s9ApNm4kiWVoFLo981jdUf67DSneqx4NVgdV2G9q8yKJ99rY3oEXVRT5FodRCPG1ywo1vo6AerxhvK8G1HywbYv",
  "key30": "4skdmVBw9MJtnT7Tfd6Mko8MKRKtMU5Q47dhamL2nF1jBmEPEsoiDM7JgJf45ashL2d5PLwTL7QF6Gv6fNPytctV",
  "key31": "3txx5NpoUavPZkFsSA9M5mtaHhRdb4HZjLZFdcUp39ET1U1pTqXPhN7MK6JJyWmzG6iC8Vy8E7rkfugTzDMnighP",
  "key32": "3d3fpdcYAxsxvognnGd8gjpCbqtBU1MNnfuJj4AyUeo6JUJ1w9Zhe28rfcmuWvJbYa74Hc688pYLfAsZQzpqsiJb",
  "key33": "4YDhBUeFnKQPdVGi5yG8nXaFxXgSYXzV5YiTmfwP2c7MhVyKTpWe71wJhSqbzgcffJL6oYCgAM7Sbw7oF4SCpgBp",
  "key34": "55ZTDXYZ6jKyYYVZMUd6XqJfqBZap4PhcfSdLiSXZAFUFif2RfAnZc1XqGPrqPt3Y4bA9pUBKCBoHgPt5ccTfC35",
  "key35": "46jToRJ8ZH6rHzbMbxQBucpKz54WoqASEPpgqZkrJsZJYH2wpRt7C7XJ1DffYQX111NaBbfdVcqenz2M9JHFobHn",
  "key36": "3c428Sr6ammaDyyvs4pbYqQNCENQCWVf718TauvijBd7SBewvoEiQrBTEQMXJTdprko4wCc7gMjoxrifwfvZQfZz",
  "key37": "3aNPF65TkqiieT19EpStAcauxdkCgPjBvGqjUuVokHaEMKcgCA5s2ojiXA2UVfKmhF1ddUtic6ikfRt5ctHvuaDn",
  "key38": "5RfHiN9QUHLzR1cLu3ZECu7VtfeUCJKjpHtSuaozMZTeBywx5xN88r98fiQwMGKPNidNfsPgqq7F5aLCoUHb5QPW",
  "key39": "2EK2C4xb3WbeV42Mi4i5at8Ei3K8p92BThrRKxBwqe43JzHoYy1BttB9ecAgSjErs8aGfF4tsuyKsBz2GMrPmVEm",
  "key40": "4xLSDC9Ss1B3PkuVyWZxc2ATqmWJYPZEp5WpaUPqAndSAkLowNi7BRKq2ZywVMfgSVyLjQkSWujtnEcEK3YWnt6P",
  "key41": "3ZSoPiafTBoVxn54mW4rMiRVYFWeC2LYYZgaKvF6ADYRjH6QYVYcQSWxNRF2ePhMSahp7Yb7FPE8wDC7GCGwWaLe",
  "key42": "5VFjVVxjiAA55pRErBVR7rHWesmSwC9Cg23cLc7A9WkvsbSvfDNc1VoQdWRWU8F417uYQB4q1KCUyyAzat6FoFWq",
  "key43": "2o7LC1t3BxRAV5mPjxAp3qkWfguHMabBjSEsZNjEweWwMBSY8TorjWJxWF85Z6MZ4MsVrjzBJSHUVCZwo3ZBuvrE",
  "key44": "4aWtBUGWNRbJqangzhudXC3cNfxuoMFPfLCnuGb6rEqc7FRRgUgZhRKPhywNPgBbBLtJdt5aHZQXTAzjKYaCjBMn",
  "key45": "3J6BhVaefyrkvhwjHvhPrMLkukvAarH15Atb383NdGUkaLjq2J11tdtPeabSM3HWT3AGerQKWNmRmRYZ4yrvWe7q",
  "key46": "v5vAueZL87ghdNb8knkQwcPRxCLJfReSNQqTCPcKoZ9oFvoXA2uc5D98WbMhz6HbPfP18ZK8Y2YSJZiCGP4dFbw",
  "key47": "4PaBZ46thwSA6E1QXkGCy9E3d4VPmH9tiGQ8VboP6KhUZBDotZkhVrxd7RiBWeTGXW6qLsoPFZ9HHD3sCmjetT9L",
  "key48": "gJ9akZjfRNYEZjkqwZvkDK6Bfrc3Dprt7dzo6RvMp6MwfHEdQ9przm6T4CHJRPhGuUq7Q5RRqGCAsXvQSgvSPdG"
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
