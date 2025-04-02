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
    "5x8HTMguam8dij37ZoPEq8BZhkXAKqH1GttDGMsjGappNLLn4T2M9DvAc3o1Y7M4TNAjaGdxBUDTKmvsv29qfBAm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pMSr475qLvwM7QNQPCQWGz67vCW61XfoJPEJvMNQyyAad6WJqQCag7zkKYXZA7FXsTJJqcfnUQ6WxG6jZTEdcyq",
  "key1": "44gsYDwTCXhjvWj8hxoVpSgLea8hztV9UG4PaP9CS5xM19zX6pvWt94URWPXF3ZfvHaF34WxLNKz3EeineVxha4q",
  "key2": "5X9nqy6nKjgLmCAz9d5m5UKbX84ZDtkAFr8j416HTcg8PtLu8EVxa7HZarSHQpQtZ8RvYcL113HCWRcHZ6rJP6Bv",
  "key3": "Ecp3ygS5XTZKkwo9fa6yno6RbSsKpqwuqtxBYA7ZtrkuosfsLTpXGnc37uHS1qnar9oUKZgCk5G4UTK7VK7gW3n",
  "key4": "5mbJRjA6iAytogxkK5wrgEXTVAvosdUgXDsoVEWyLfGWvT23di2nTJCVgDsLkYN8spg9rcH8WwA8NBN1a4di72U1",
  "key5": "2aVgLLEBcgNjME36RcxWVCFjHh81EDXKB456myPiPQyqSDTTuvys3mnhsWz5XjcNDsu91w1A6ckaV6Lvhu5LKqNx",
  "key6": "4xJo5eDozKTY3CYR3T2dSZyXpLNWrtgUxW49QbVbnCqPXTsbQGAjhg8vLuumsXeXs84zPQgtqjNXtgFcB8Bezew7",
  "key7": "3QHUBsb7Jzjk7DQcGsYXUr9nCg9pXPbMiaHvD7hCAV2HEy3sAiRJaRJF9TZwzcK9veMxpJjyX5mS5wfpgp8LRHS2",
  "key8": "22pmXD9LZyVGZBvq1UApHmiLKT1vdscYQNCoRdb7xTa7tTUuuLcE9oY1WGKRMuKfjgTuS3gaaTe1iMGwR7iLx3N5",
  "key9": "2TbfjqgFe8LTbR7ySDT9ZNdcfcDaoXvzgC72DCRTcSvZViHt5E5hmGMzSATiMeQC3QPm8MN9BRKncGfxzU2E3hJP",
  "key10": "WEBMNqw8brKLieqrwqWfau8YgAUWiLCwLodYJAs3oz8GxSBM4cBgJV2NhdfYmqYDdvwDs9JEGGw4DUfAwcpfZsn",
  "key11": "2HXnvYPEXLkR5dnUbqdtYWv4WTbvfi5HvUij1ezPNpNn7PGVgswrorW2yzufKkNrrpQe2yW2BNJitsG9UAMHmzcV",
  "key12": "3WZ7PRwyviGxwViPXMr8EH3TjWaN3yC5CAM3CnTsLBZK17AXD95is8MCEwQieuCwS49rRBwXVZNg88YgGcKsHDx8",
  "key13": "5sWBjEk4uGEcdZV8YBnqSkQti7cCysiPamKBCZZTWjUB6g1KrLdrSufm7WVrkJhHv75kVQb8BXSX7ZZ7c7K7ZjiV",
  "key14": "4Ei3o2hW9uXfBUwhHJ2h5mQmUXFjRthViBEQ7N9VeaXdhfawu61WYzvkXbrRmitqv7rM2nruohCSjo8FVfmiBWHm",
  "key15": "3c46puVaEoSvSTP3in38bBk4Bjm4m26Bd1ioQirXXTn4UFLkLu8Vjrch7ZWPUyoNv2inBoCJBt4RuKgUeXLt72bj",
  "key16": "36PcgVriCnrGg9H1fPnvnmxefmph4y2DHtMByjMCeavwoF4b95X5Wjp7bGykVjBU5kfN8pJGW2Eq6oMoZZb2SoUL",
  "key17": "3EwmiRhrU1z12ye3AQaq94iofuyLW1RNsC2isHW7MVuXKCcuJosvZwUyjZT2kxjKLAa1Bqeo1bE8mFY9Lw1Du1fR",
  "key18": "3sSf3S1CEAEvwmju3U6Q81BaNcp5qaZkWQgEbzRnQmz4CqMz6ybEKe4pec14mpaXCGa4wCSKac5ou9kfm3pLoH97",
  "key19": "5ikJm7jeJzHVnh56rKG2ghmRFuSRExRqvjtkH7iCpdMQSb7jPAXziM7w3xzn87J8AUu7N9YybeSdcmdiT3n7SfZD",
  "key20": "4hhcvwTzWhSUCpXa3XbBNBfMJL3TxyxGFEEEEYVcvouD4tuTwt4CNnbtcmroJYD2GmkvZMeHtVmqDJqwqcBo75Pg",
  "key21": "3iReogEpyw7aAmNCqNhWm5v2DBnwz5frcMaAoEGteBo73nQZLddHAMju7KJDfZEf54FELB2BqJrTYV4Q4epsT2uU",
  "key22": "3NhzBeFuZUK2DqRwPvNwNiAFB24NYzzTs7obMaF459RzCWCFMuaxsd8PiViPXc3DdbSJvZZXnyMoZK5RRJ83cXLG",
  "key23": "4Qw21hW38zYQtcpQLdoCc2Pk7CKJ18vRRbBhN1EpSZqVJj4XK1PXUweGXAyZwKoanBWtvtMWrFvuFq9mM1Z1qqT8",
  "key24": "2xNYuainqNyUGTa3JFYsaK1v52YWaLyYyf45uEMScwVr8VLLsMnB56m9htMuzGBPFYD5xCSVcAbMF4UAFjRM7S6s",
  "key25": "2PDt6ogxY8VNtaTtHaDKBwj7i57JwxzjRNqq8VXuuKgFaerCUzDDZt8FE7vKVPti9amTxGJUdDjiaMW8EDwJqbhk",
  "key26": "2MeFZKafPetihhdBQXAV6j7Bp8echFVNzdQ1DY9g1bb3tFBkXYNXrrw7RWsWxW2NuboRLMivsHSXwa4nxFAKS2JU",
  "key27": "3y4ReAb6uPgC8znh1k8iRGuNMxDmwCD3nu7JsfVzT2EPDTacBLNaQEZrqUpr91Ubowr9Me4sn9RBHHMszMYnoBZZ",
  "key28": "2jvRjHuUAxGYDTPGHHAPEUTPogxp6KbkDgK8rCp3cWevLUT525XkVrv2sSEhR6VuKjP6rRjEogvfKDyHkMbfx2rP",
  "key29": "4Jz9hup8Sr2jndxhxS2d9ZwrbTLw1mhttUvWguMJAZu1fpb2i3jHDY8gV5PCLBgAuGRd1qdsSxUokKtyveHEVhYY",
  "key30": "2y7mboH683fRS4exZ2QVd9v29bV342m1TpRL4d83n5Hth7QR87jyvfXqWkm8YQwP1TkgDsDj9UqAMzeNJ4yhMjep",
  "key31": "5s6dHNgesh6dgvptphLWz3WDigytEtawNUJoDyTzvSULHJpkToXbZ57syFBcEvJn6QmtsBcFEGW9NgX4wfeiaqZp",
  "key32": "Lt2SaXLeweAvrvMiLbz8uf8gMCxfEjsMtadpWAHX6WwGYdUoELdh2BiVFJhPR8JsmcKUrbViryW3NkFvp44xEqw",
  "key33": "2qpf9dZV7ZAoZxHfCnVx2AAQHjWhNcfb1vo8Qn4CSBZFYHbAtvyEEoDtbK9GY7FGKn61N1WuePhQDG6RPDJ67ntG",
  "key34": "5NXqpZTx1bTsJCPoVYGJ7VbLZeffD2h9meYDM4Mzp91nvmaoHv8TC37cimGNK4YYTu7EbtrgftVsW4i6fRH6VcCD",
  "key35": "54gpEzFDjnVZUSj9GvJ8cGQ6mQFaPWztKedGRbwS5CX3NnrgdRirsymzNXci6MKLSQ13ukXy9d7shX9ibJ1RiFog",
  "key36": "WA3jk86JC2YYkzCaYFndso1T6i7StEHnH4UbiSio1P7BRHSve5Ds75wyAB8Pwy6mWwatfk9zrRzbr1FkmdHLKQ4",
  "key37": "2AKVYgbH2hqtdhivmsB2kooStaFKt4Av3Xueq5ws4sVCKn94aWP5QaAg5xvBYnqDBPFxm8pvTk7VSk9gt2nvMxKs",
  "key38": "3aHcPue58GPhoymmd42dVXFqFvYWyYu6nfJUMm3PEmpYQNXZvdcudVCZFBL5qP4rBDgZEXfS1J9gPmDh26cWQWdz",
  "key39": "u7R61k5NRJSQDN24zzCmBZWEd1dkPr2mzvTxvZHPtyzjs14yuc4a8d7Us6JKWLrZNYe1cnsG85UkWvBairgrrJY",
  "key40": "hWKHRYYcC4GBtBTqR8fZzTtGqeGUegGmVEtLWidovcUSXXAq4BrpysAwTZGajEvHqUb7vA1PVayz3H4HWSJyYaH",
  "key41": "4eLYpQfHLTmBqe9wAVt54EaNAJVJYSGQrCMBfx2WeF3yLW2txNBNKt56ToURag1eGRrsSAUhjmfNZuWRD8EPYjkK",
  "key42": "4AvphBaLGhWC3pyFc9DcTkqtJMHNgFQUiMRkmbESgtwLwkQRbUYx78UAxxwKX51nksJUMSfWHLCVHDG83mACUsmd"
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
