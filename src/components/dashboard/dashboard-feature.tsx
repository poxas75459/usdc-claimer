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
    "4EoqBcL4PNBNjNGYCD2NggAB6EhrExzfwHk6sZauzmve8AH64q4kzDN4Ep4fqNjEWAnxkfEqwjfAx536d3vn5LT7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JKoVLsWdDXUiiLCYCaQWJwP9BWiC9GzDg5QMDjY6NZ9CLP3cWCC2bEaD6HA4zqVzytPuCjPxHMcgmnV6sACKzpd",
  "key1": "4XeBPabqpkLKHKQ9dnjb1XbGHB6XmxWWGxyBA3WCYsqrhFE514wjbHCGzZQGVLfPVGwWBmRo3wCCtCDx7DidhQ3x",
  "key2": "dGR3nV6ZWvUEZVi4njugNpEBY8CgsLb2mGmtwwJQr7nRYc3cUtNrSPBhoWF3XCeZnGEZg4XwxSRJVebS3hYHzsC",
  "key3": "4SyqMy5XRdHpKsUwH4R6ijXEqZMjL7zasfX7DjDzyPVcgC4eg2XVsZdjfzMUfdgnuFNuLCiWfKN5Ytx4jaf86kL5",
  "key4": "48xdNKfNbPxXWB4SRPLsomdHuBg2yGypk7KJZaXndP29nXUFH1U6in8XM7kF2dw7yqUWEDvdVtroMjqCM48pLSSX",
  "key5": "z4TvfCY7bJM6taARK6SxeBqx3hNwSwuPnfenzfhqRm8Ec5hJBudGJt7ZY24thkhw3zJA9yLARmYJpYKjtQSwUow",
  "key6": "5cPfwd9YXETD5RFVs3sKgK9tNgxfZ9yM1oo1eegg8Vv11Tr5Lv5TVyxEAF6z9HXFAK8moeP4EFi2xdhfYCut15dJ",
  "key7": "4t9FkF7h2R4Vr1bdPyn9A3gxMVKov2bfWsZgQ7n2wKqpeoshwkv6cP4DfcAGbUnG2zZ8KNBLEvudmB5nR4qsX97e",
  "key8": "65dHh9p6gihbXgwxXGv4QGWBFp9fMC6Bv7KU1xw6pMLgyDvk8MRfp7tt9i3CSqyMgAtbTd5153crwrD5YvE7THcU",
  "key9": "39KZdF5jMKp8wBfsUgZJGWaV1JU1Ckm2UPtnxBwjCm2BSBnLNmmu7SMSqwRhsAkUhu65rFneefiR1ca9bq6Feejw",
  "key10": "4hh4QvYBFaMw2rkYnw1YGgpUVfF69kekNxbcnzLs4qZnhzt34xpFxe2sHvxV89LfHfEcXFdyLRiyWrHwEJCuL4C2",
  "key11": "4uL3GaegrgCZmzJxrmsc4VRhM96Z2MBvxPQ73ePEQ435cdRGNkn5pPzoaYaJYzWg48Z8z51LnbZk8HK6LR4B3ien",
  "key12": "3CAKiCHyYRXs4JnFxno18MtBbm5j4wtqUTQ14RARQR769Hd1AVGstzaWn3dzCxoZuZiNPyojkwG4mqjgz3KTh7Du",
  "key13": "3SneDH7Xe9vF2qhcPHcq3MNeMYP7NfCckoeKBsEqpdfqShu1TFdyJ7QZ8Lnxo9npcZztKRifbWjeALjHPR5STPqN",
  "key14": "4muQniN8ihoNWRuLQFPDptqvMt87kQS7j3ddmjkC5ixdv5RKQBK4dmVUPprM8bPdf2PfpuL5AaXtK5zQeRih5eDZ",
  "key15": "2x8wtMeUi43msgWdLSecz583j7k4aSnaU9yyvFRiW8ScuDM6Uh7vZShV1BwEdSLb4MNUcx4bN9QDj51BtvqAMofh",
  "key16": "6shafgmLkEK6GGp96LDUyGUBNUQko7xeUtrte43hMpFDGa4qftJZPAU4RnB6nW4JqmuE8fuzPZuG9QtdxC2VemL",
  "key17": "CEUZscf4Dv4mgGCm2mzXXqZh38BtJd1WRg4Hvxxap7nBVZQD1jkXiwePj5FRcq7c4Nqgv1guBo9SsyhN5rd2Zvo",
  "key18": "5sgT286wrVtcXEdMdsm7WNkfi6Fx63hmerVfzkLSYSq2aT1FU3PLRaTroNrGxUh7r86CbCCkgR6H9hk9MCZaPjLR",
  "key19": "4CwWGrhPB59DELbiVAL7Vw4343dYfG4ehET5eAdiVNHa4p7kdh7ou9G8dexFmhzVzqPDaoREk9ToHvmB8VzHfgqD",
  "key20": "mKW7Wo7gFDgMudzuRRCS9QEuBsAeQWtpSdmknztscydX7qKgNgTt6NoX8TpYbCxhPkwSVYWmYNZ829nRxSeUkhf",
  "key21": "4ksXghjNVuZJ78zWkERyfeKY59YkSD37P3AVY9rTy6hATVXEe7cv6pTQZdeUthq91rxQJ8b46uNw7NMfKaiQVgtx",
  "key22": "4tLWo4KJZ2BU629Tct4hqXAvV6NkUEoKKZamP6nXNzkP9UeqxFT4Lks6e3gKRLfN5Q4jV4S6Zd9Dhjv7CYegerSN",
  "key23": "2SGi8LCCYEmxWRuDqTHDDfrHqfLV5qDsxsS7FLuFuBdDVtbYCf1zNoNaywryVzrCtyThHPAFqQWy1rZVPdnoNXHH",
  "key24": "2jZzdThg74gU9meZv9SK4tq2V2vwHS2ijz4BQiZbTL3gWZKS2HgdAJ451jg4ikp2GsdRmZ43CpukqTwp6rtNvzBC",
  "key25": "5y7M12Gs6Uqo5YYFTZkv5mUB5j2zX8EryBUoFfvG9qMUxUqioTqbYJ2HZpKQrD9PRtsj9DdU5yM1jVdnUR8hbe6b",
  "key26": "PXjuT7mBNfz5vGUnZMqE9VkBVNsWxmRd7rW6ub4N92rorvbVTLuLNFGip84QEyBvc2N7bkWkcdrwNgWmkHMAqah",
  "key27": "2NmrWujWGfVybfZr9BedrwE9i6EEFqvaKboWnZj8Y4261sLkbTcJ2CSiycsmQXLPro2vzLBNrh6UYPZ1FgNv3ku4",
  "key28": "M1XaJEopf8CNPXssx9Tyw6RAuaLeJDJnmF52rMcgGUJT63n7jAz6jZnjN29gcSzmDmicshx29H4SXT4ivdS6CeF",
  "key29": "2gV1Kr9iMaZCBn19BJFNx414bMwGeVny3ds1TnP92HDWX1z1xeNaW4UWyh3yzhXMMqgXqMGwCQDQ1CdQDD2fQCwL",
  "key30": "4cVMXzewigW4xXszaBoJQmfoXRwguNuKfKDYS8fE34teBRbKxuWkC6FHtbpRYDwoai2Ledp1YpHJyg45BZVB9evs",
  "key31": "rAwxRwnZJCvSvzyT8iCYBbojqzMzF7rx624F8uGH8NEecYzNZZkYtiFAEmD1dVPvDojxmVqWMAy1S7NtyWY4aJA",
  "key32": "2ftJJaEAiWi6PheoVqt12Kmo45Tgk7NVwqe5ME5jxcxiDzj7G5uL1eWUmuACvx978QA9qugqqSpeA9BCHrzroP5L"
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
