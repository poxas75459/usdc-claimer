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
    "61j5Vge9bkCsJqFRKXqwMcNe6UDp4rg9GPv1qjGJrquXjHuxJxyQE56UfjRFsvpVtV3iEX2ZysiSG6AA21sf8Veu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2peCvw1iScww7WsCv7auRmCavFyKQ7EfYJu7Bf538ctauUiQBTgG9zbwuWpjq5Cz928Kfr8exoFvjy3TzNZe7X51",
  "key1": "5TASjHsETrGoc7FSER42eEfE335WyvVJpCDxnuSvYQgyaEebt9NM1ngutiXEtYyXCSPnMWJSGipLhFEw9uQC9uL1",
  "key2": "3w7VmpsG2Mp3NtFBwvtZBYcXjciJfY1uPJAq4s67Xwfom4xHWKUKsC9Hkxczjtzs1TH6vjmnQsuiArpjekSDyrLj",
  "key3": "VRDr3MhtYogjE3P4JhdSAJfFVxwu5A4CoygEo69hGMPELFmANKbEUv1GxiqLuEAsSc4oVtMYg9Z8CQGgXws4Fde",
  "key4": "5Hy3iMgkGD6V1aZV1ZnobGiTFcnwpHgefab53M3vmmM29c9V1ha2yVvvxSicMUJX1qvdzD91nBZUEM8C6QRM2Ccd",
  "key5": "6576F8TGYtq7HMfy6N7fxaP9r9jzoTkDkQjMptNkzTe6aUon34ZyL4j6oL6FeMKfimmLarww592w3iuPjD5cawcG",
  "key6": "xtVwDTJpL62SG1PLxRXrBX9fKKH3pyRDr9Gz9HbWEqxPTsccXz4deKGNbxZsepaVT2f6CZMWYmoquBjbASCxgfH",
  "key7": "2VzroRAQXzAd4xKz7j4tMUTVdKTZfdtQNP7W4inmdM99caMbEQscKqnBRLJrZWHRBhFhmK25GZSkFEYraDN3fHN7",
  "key8": "3xsSXtA8ZLJHZSM1E1MsrhsHknPwguZn4QAmDdmJpWfHssuxLSJptSDfLG1Zm97aBXKiuPfyKGnJW6a9RueMCj9U",
  "key9": "3xrWrYfPDrrBSz3hzpxSKvfGVN5omA1J1LhJzzy839CPdxDCpXBCJQJh84p7tXgeXedUZWXe9jZL9ZxJJvoscKC3",
  "key10": "39EiTYyinctXCY3E64gndEgYoQN2jLjp1XDXtfdPb3SxesdTtHMpusvaRk9rrBtYijvSp9quk1wx9wc7TQmdETEc",
  "key11": "4yu8LAcTnRjBaNsbGDxJ9yHivkpDEocp62isNyhoUEg8NnqvrGTkDsY8zrfEz71huSqsfSQfd8WtxA7sxqo2Q773",
  "key12": "2fKZb83dGLQ2NfdZTVvVkMivnDt3E1a25zdpR3RT4BBfqjWyMpRy1x4HRYgXp1mVYD4Jz3HJXBQz9MYaFCSdZg7t",
  "key13": "xu1AoHAkjYXNX99YB1eTv2Z3YwKMAd2aWYkRai6SYoZEiah5AaoSGzYP6ijeDpENhqs5toPZ6nErrhdxL1JbvLu",
  "key14": "YYALBZYP2aAqUxh12wuc9XQBmmRSApHAy9RrMogoY363NQyjkREpecqdDvY7PtP5QnyHwVJrtQXDop6KwDeKx1W",
  "key15": "3s6EDV5sszXS528Ugm49akXLgMsL1kuizA7uMAwVGX51jn92VmxrQ6dBJaEi6a65qoxhQ27zZikgCmSXfc85DmcC",
  "key16": "bJ7bBqKPGGJnebFd2DJadxe3pwRLKF6UTrvd9c4MEsduZgoVcpxKK7XLnvSPZiPuv8mP2AhdHRzGRBDsoLfe1YR",
  "key17": "4ou2Xhaeuyydrv8zKaCQJhvgeeagjhgfY7A5hwpRAPLwnpqZ9ivmjfexeRhKZW4c1Y7nVRAXbnNRtM5GnTmBaFkC",
  "key18": "2A6ihDWEwkr5DLJbH6kb7nCZT79h8EfFX9dgJv7R2YWromiGLoLkGzHgNVD24auWwenQa75Du1PD3LwxcfGdoMoQ",
  "key19": "3xQJVYnqhWKqCG43F6E7vgLm7dPDV7ZefnmKea72ZCtZ6TLcxVu36pBxcaWj8N5KgVDEwMp4kFAVE8YppJtuwQHJ",
  "key20": "5LGnTxbRRCsCmMgzbMGNnnx9ScJ1rferZY7gGtZ6ezCp5kfSdt1UQsxxEpYGXCABDARkjnTRiXEPvN177cA8UgDj",
  "key21": "24GeRbvQNCdHtoXazgaPvGZJBM9R245osmRMPqZXHcCGUoVfqXgAUcZWqZax2K5yRaMr9b8GUjEweMB2nVBay3vk",
  "key22": "3cqcKRBqFrDk8wzm8VVpAdFM4Rm5refbjF77y3enCoDocJcNh977Ed7sGRPEQHNjbpwCcYNKhdCrRPPaYGcesoMj",
  "key23": "2Ed3SZ5nwJBgsdrJQPEwK936JcZyveLAGnHeu7m2NDwqSTS4f3EaqQRr2oAcaQw1469d8mez7X3MttPb5EqpZC5V",
  "key24": "4PPvvuum9xzcXeFRnZ9TXZg4muLXrKMwSoyWfvwbJgiFa9kXXyytRLgYryjtnubV4wTmZ95U41RkB3SnpXVaz8mT",
  "key25": "jiYnrXFrcbaFv9qQH4eRfccV7iY1EPWthSBHsT2NoRDVMPBB8T6wvMMnZLiU9qRcExUSeDwYAN1HtDA9x4evkLy",
  "key26": "4EhNVMHox2aEjbjTVeCVVTY6GHbWTrVzcU82V48uH7U1cAaggsWRMPmNcDgV5JDxvXiDZP91t6L4naHzsvpq3chk",
  "key27": "2JmavLXNE77SAyKkTuc48gFuLU9Fp2Z6yqk17rgqU5HvLmBsuxQ5sqYTjRsRE2cHnB8RBzxaxV94ebAuTiwGsXik",
  "key28": "3B2aKrrRfCjk6kMwwdA5tcBSTmuNTSNhAgVoqtpGLmv722Tn4A2t3Nrhr5LFbKLovGsou6zjVfnBbZgapYmEsdxX",
  "key29": "54RGugkJAULCaddC41efVvVWsZbX7xqpWHfDr32mPTj6vwCNxffWnRoKKioin4sHd26xtJzF5YMZDLnRwVPvZ3xE",
  "key30": "3WNFQdVEWbYph3fJWHnJQZZfgK1WYQwdLPsQet3z2YdHvxypSxNW7W6cWczE41qngb6Htz4Qm8XJBP354jdz5a17",
  "key31": "3PsCBY5QrP5aJUxDfdifWZJFVFrMgHzVr2ay1pNry9Q8VuxbNXdPRmKPL63SrEPLc8t89mUPuxbsTkXwwqxT3Qt9",
  "key32": "3aWUmVu9uzRtmR2qgum7brELQCjhVp83bQA5wg7d1EoVTujfm4udfprWZtJBxjy8wf2DZHwFF55vd5ha88zMUyVX",
  "key33": "noLEGi3NpPDNANf7c5pjjW3JZB2pcD4fTKV59mJHxqHqJa5jbYfF61S2c6mERX5qAtVLB7h9nyS1BXSbwtYfX1E",
  "key34": "5RfSRztxDfikJb9uF5FKJGtGazn1VSR7iM58JUcAdQmd6D9uqkQdqATdFEbo52swJpfAt2L6wf11mWadNQGV2FAZ",
  "key35": "31LiSn9Qk4Qo1bBMxJpg1WrgK9UdUSEzfKzm6UKoco4xLYUhK7aseRY3uS5mi8Xcg8R6yr52BFKCwCSh4sWXp4F4",
  "key36": "2DxuAqxADQwGjk1Z8tBWRgmwxwArci62Hn5BjSBZLjeypdfqQ6VgdM5WKdGsbob5wmv8jTYR9RTBb3wLxFHMA8Bv",
  "key37": "4EAVhWu4WcASjWZqcxSYXxDK4iPXiqjaxSe2qAhUQJbmuhBRyU7pzVNHk6uMwVbC8wPLeA5aUYq8eUcoXmeJ7EQb",
  "key38": "4aNpvgkvtjbRbkbPmfTDu6xgmnrDTptk3DUrgdM3MkBvE8JiZ2DxfLgTafzYgGhVmf9cNZbSTpaoSpcoQod54cFE",
  "key39": "3brwq6iB5wpT92Q9uqmgazSYFRy8Q6wT858p3ANmeBjWogKF7gkf6NDKA8ikUHpPFxwuZ2UQM5Nvf1uHenyRNKcg",
  "key40": "5Hpm24FmLYpSpyLMgkJ4xGLAdQ4XYX5YsjEh3e2G1WqXytfMksg3SZiVKnG3o7gV8oaciLdAt2asqMtTtYTqx6YG",
  "key41": "5YbVsekhRTBw9Ydr7qTBkdBKEHNpjBRFX6LP7YPV3R1g6bKszxdNYsXkMuoh2jWpFY4vZVgs2tMHJbE6tXLw52un",
  "key42": "41euZBhfLfoUeavQyaMcP5L5jQ4A2Gjs41EVADUrxVwUa22CFEX9s2Dri14SFEk3aXF6DVoehkvC7s8Qs3v24Akn",
  "key43": "2zeVa9HS5L886p3mFTdTkoEnvziYEPKJo9j8RAtGWcFjjTcPFRTyyurcqoxiqSd9vfjkQ999JPXEGRg9zxivRysV",
  "key44": "4pXA7pUViNmpKygw72hnWMLW2VF4wuXDAYiwef53iSeRfEB5tFejLLkdUMrKQYEFAGhyrhjVzakgwog4WhuB43aP",
  "key45": "42aKm4XUorF894NgxLQqmnviw2Y8G4u9LdP73b2DBkVaHfWVjeK9nzMATqwX3HiWJPbDqSNFVp27nCsoxWTZDmQ7",
  "key46": "3vjHpjo3UN2xMK8xCK24DgdsoUBtgLDotCQ7Vi13WqhGiR6chTo45cXLs6zArhSJ3QbpmRLHCGmziUNWWb9dJSxg",
  "key47": "5xotcggoJjDo5dXGSyzjhK7eDn3FyEib1sfSU8PFTaycRr3ozTHZzvXprd31o4vwmhFcxezH7iMDSdA6jwuPrXuA"
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
