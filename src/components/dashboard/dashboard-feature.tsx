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
    "47n2WxoBg7bHNTnKmT2j4DcKzuCyvpTQ2RGWYeqK76cPM8qzt9CyhEJHDHCLPYdaG4Uox211itQy4juNL36P6bZb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wRUYQ4FgwUVL9NG4h3fDfXX9YNNjDwGHCpP54EXid7qTsoUKUewgFFSHWukENpbgcJSKqDATrepAeCkmCZsYGVT",
  "key1": "48WHYpBTUq3KNtz2vxa9GrSVcKsu7AuGEu2AnzK1m4ceu2wWYzGU8rvzndW9SER9xzGNtjKfsMFRTAp1LQ3Ds3WK",
  "key2": "341ccPg945yfpWnFWyNZDhJV4uo1wpkDQjugEBo2QiHqjySXRtjjhbEniMpVn58hqZ4nFv97GHeKv1Uo62jasn4A",
  "key3": "J2J1Bam28BuH99eTbWUCPhhFdwgmxGvHiGaBeW9PSCXVTVX1ndj7YYYMXafCKvZFYPVgLKxFWTKKvz4e1ZoY7SP",
  "key4": "4K7UbcbBj28mah89m48kWqtGRKKJYddL7GcKGXGdReH5jC4nV1W4XKZtevkL7uHTKNDAcR3xNFh8b1Kp9FUZH5Mp",
  "key5": "2AKTdAYvvPqHgHgzvh3CrqaPqjJ6LNwmYP8A79S6D23BjZdndtrXntcwBUvcALWqDni5hjqaE4RDZ3quGPNVkSVg",
  "key6": "2bRSQWuy2iLdE2WFP8X4VSwnsJ84zCBxgL4YZr9JPeEX4JZUJWgQXcLWEH66f9XKNGBVvwLzGrRrSUxsjqxrovXq",
  "key7": "2cGjYKCeUiek7728vU22xVEhrLtuinTffPedByWdt4PbUoi51M7HqUZVzY5rTyPQbN9sTG5M5ESfov3ivLVwUSus",
  "key8": "4fnZLoHjiTFV2FgMa66B6yePzgby5tWUnX1biYzsLXK86BRWrLWWEnzpfGtZ2AZ8aTQDPjq9Gm8g3jb35Sk4pgwC",
  "key9": "51FmYZPLtFRtdZ75MghaoQompc393mpmwuBZBC7d8Je2CcYwhvjSmA2RrwEzzSH6PkmvXRg6sw9FiWLLG5PBCxfC",
  "key10": "GMGq3dLa5qujkbUUbGZc9PTDKRmZcsx6hkwurPEnAzizf8pCoDHc1dRVv7AP1szKaASc5ehXSNKQ1ve5C6witva",
  "key11": "5QXmubVZMyGdJCyQfbf3oXLTDo9FKFMWw5rYxdQWUDkgQYv2fEmd7E1FRwPkMvvyeNDqRzSAWL1CtXRgGbiyHqiU",
  "key12": "n1sU9qmgxsKtPvQGQUkqRG1HscJGSTj1EBXxJYQP9LbEevQmuF4NTdpawaWW4oQB6Ju6aVGbby9PHj3eZQyZZcm",
  "key13": "5pGd2fmXJuNNrNgWt9awDvXtqKmTT7iCD1yuYJBZ9VKgk839Z7qZWzxYbgFm3Bucajywyo9jecHmcQEQch1ghJaP",
  "key14": "5WvpD6Wa4cWd8gscdVn3uXYryvtq77SKYmRumoBw23yuJjzdCxug1gP5FtiLtmKsCiwF7LxDZFB7sXXUiDVoQTzZ",
  "key15": "52s177bHk9jwoZa9PYQ6vYUeS2NZU2dXGutP8qA4wXJN1ZTkpvbfTTA8duc8bVuDvKpRvvFKBeid1yRMFgiTsySx",
  "key16": "3KiRNPmgDULN5sY6S7jbAhfh31EZzNZqG7aiDC2qxkNC54f53fbYHKMLaCV1r3VKRhjDTaMjDoeVthM17Bm5K5sB",
  "key17": "2Epw8LFRMpuoyEPgBoiRpChbAkuEUYRDcCVtqu77Y343Tdvp79XFVxeohZbvhVAtem6t18h9yNqsdnJz9PySzsnv",
  "key18": "5gFC8NJE85AM4aEcxQXjJhy5krf6wDCfUZXdpaNrKmvZrDEb9QeaAU1k1WHhMbH7XKdoQWdfsoA4aoKxbLrKRPtL",
  "key19": "WG7Evdz53vBdAfYcgvdam3RecmThSEx8xAaruAnXE9r6iLgNHaBtyKHi5Tctd1USBQuZWknqpnJ8Jc7ZcoN3cQe",
  "key20": "5y2jECCHjHmzsrEe3CJGMC475B2cFF3XAemRtZf1rfyPgRN4z7u974Bw9LmyRcKK6Gvi9QpEMz4PuAtAaozPQWei",
  "key21": "2SaRpApwwUaT5PzMV5rALSkCGV8fzSyDSDRJn1EfShLU3yvBAG3ZRNEE5kcRosRT8ZK8iPidznxcUnGySRtRzTi7",
  "key22": "3AvtUB1324rd6hVPxz1G9oBXz4hbnrEMCsbMa3vf84swKDuczHjzLvG773MS4fX8qfHczoBacZfMNRcZRNHCRvRM",
  "key23": "4ZV3t6i9tnSLEXLvRFxmnLsfDFRrKm99FrDEQpYz48qtDFnGox66DWeFzFyXpvZq3QvzyfczQpYEyQGbu86mEEDb",
  "key24": "3H5RFx2tnXsuFF42agjZwkpJXdw6YjJRCPyfXfpqtcrGzyueLNiFmCYGZykigVrSBi5pJUXx3pKkV3ZBNkGWJ1np",
  "key25": "5MPSY4xXeC11XJDcz5gwEcR9J1JbDcUgYRAASRgDwq5EaMntSxWZqsDmf28V8CDvKUQKw3PUetmw1EPMSHCrbj5a",
  "key26": "5tx7iyn2NcAhAQJJcuxU6L5AAevxrkmK23AYFbC2aeEqXf2mmRB7zrBgG6xkPqdVpnHunyDLkZjyU4zbDQfFhR6z",
  "key27": "2yYEREvM3C1A9TXwq3315xHHwE6QgPMF85mfDX7Ron6rFW64BcM9p6h35bPPvtNPq4gVhMsVXa2H3TnP8XTe6AUr",
  "key28": "2NQ21PgkgK3Gn8tvngqi9fFcTGtKsHZCN6eo7D4sN1U8SKZqxy4hZa3jfKfvuVz8Ncecm3FtzpMuB1zAGo8y8bn1",
  "key29": "5DorunPWV2DDd7c8NBziKbFbRRwvTFZ5TGbvtStdE1uW4rtC5FRwtonmGxcTLQCMDbUkok94wikckVahtmHv3Ajc",
  "key30": "2165pZJo6fJHLoKyFo7aDjdWD2o6CqgMV1xND73gAacq7FnAJyAuDpLuLoHzYkqU1tWvvi27zhbyeYEy2Tv6gv6M",
  "key31": "th6qMVRd9ZyqSwdZXCj416mAFqf2N4g9XiEMcHvSrmTUuJLfLMjMW2SUDCCjwfazBSUGRTyKHmCYF9kuyzs7UmD",
  "key32": "2F1c99cV34GsZBzXnM276FGVsktHobZ32Zo8BBttAyS9EJJhK8xSXCspaDKzfTF47o9w71xgkPf9CKS3NTnzfQoe",
  "key33": "3pxYJYeeHkrsJT6hvCqFBitvRtSkR2CX4v3nmuVqSLnCmVfnoRgJj5BmcT1AnMvvfLEG3mzxPKLiADWGPQQuchER",
  "key34": "5K8NCrsqYTuebAin2hEtW7xiPd3yWTuGfXnfsogATVhbKsDJduX7T3SboZkB1ukqBx6ffYeTedhHxJkoEh7WMtBd",
  "key35": "AmHetkk7Ec43WN5etyyYSgLC3de6FekbYcStpQGM3Zar5pdCyn3EzrrsePUyfgA1qskaYpcLjLCZkJxhRJ5XzP6",
  "key36": "3dMCMJACGtoTUCdV2iZsv3XEJtHWHK8LmV18MPXgDNdTExSQerLMLH9Qno8GAkT5h4ymAyp86uX5RZkhCQtgdxqr",
  "key37": "2tdAFZWYuu4JYLQF3uaqCH3bTQPznXZyh7DqHKw38Lv9Vg3NXanaL2M97qRg2eNmHf6ENf8oLM6UZhgn9vRpEM9y",
  "key38": "C8w1ynARszAEVMwbbtXikAj9gDstfT33Ud1yBPRDtpstc6ykCapPZVt9eaUzDV8xwNqbgoGEYkJ6JWwV9YLvptS",
  "key39": "x9v2kr2TfzENbPaiTFUK5XpjLbuED6YFsEJtuVwfWmNxXMRr6xJCqDG9qLzfqzKT2sGqf6WDMQJfRxFJCjaSQR6",
  "key40": "5YtEdaJTRPybpNyrsNipFWoPJJh3o6MYYgirZ9szPDrrxaYjs3oQjBJ7xR17owSHuocqxiW2xZXKTu4Bu8vJXc12",
  "key41": "nr4zXLrozZZ8481j2bmeqAWFYhqXW4PGVJeqTrMvskfpK3N2NwfwcU7vxUW9tAbjzxPTStAwZ4csJ7CUgeJXpED",
  "key42": "66ogRYyjmDZwero5pZxWWVruCVdBoTzkvJxgF1rGsWboutRjH9AaHmaSQB24cFPydmFzcthS3duWzC49hG6CptEJ"
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
