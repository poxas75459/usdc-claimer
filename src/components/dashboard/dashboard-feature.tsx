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
    "xAS7aHGfWPjE6QtrN2L6B5pz4GzqTnez9ANSs7rrXkNy5pEvg6rWm54N7nKTpmLCS3iYiKHaJnMDtvXzUYPPGxa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ApBXZXAHrcJMr2wLAvTX6wRfq7owAe6VC86ho9wc5VZQsgnVYaPGDGfWsKThUrqz6NkyiU1cq7v36qs9B8Xdqou",
  "key1": "3KcCTnPF4anRCbB6KN6hnG6VGdD9gN3B47PsS4KPbjZ3yohJ2bJo27corYY2dPXzFxoveWhTnqsieHTGMtbwRP7A",
  "key2": "5A6LkkfWkUfa63gBb3DvrMz5AeM7QjFdeBjFyVh5GHhcFS32Sk7QuZGw2XzjCa4qigxL3ggszUeb244tPivhGYWi",
  "key3": "48dbxkaDrYRvBfHQ1WRuujZU4ixD5rZzcqhs5KEWg94zxi5evMiafazCWdSj1rcZAUQgeieHTZt2ZgNHjteEZmBT",
  "key4": "W5icJdVouBa5xmRdagaxRy6JQhuP4uLfnLD1htYm1LKuUzqKDuizMF1rV94pnV5yLtSc9zurr6VQTnXqgj9HgKt",
  "key5": "5ntL8b6upSSrn1tZ4UD6Mv26k2KKmLrrsUsw3gEgyu9BzD4ChX6eGqtuQkAs1xZwegZPsschN4Y1CuJMSSo2QHqE",
  "key6": "3Sc1JTLZjQjgL8cVizQHSGmH1UA97MWqTsbeKjJSHAFiA82kogrERnLSAxa9u9xgLqygWA4VL5RPcgjuUhyRXwmo",
  "key7": "Rj1dYSbznvXm1Hk7FYG2xyANv838uLqaSwB4SN89t41ubf9uccK7ii8VbwxDjmrRbFCjQWE2v9Y6Hb23qn84rEV",
  "key8": "2myY6bTWE8ZQH3BTK2LLxPG1xXKB8T1VV5wujbhKN4nVR1De5mgW4qLnX3LrPN2CJkHj1AUQna2tUXPG1Y4bzHPQ",
  "key9": "4zFPmBP6qM2cb9Wk5b6DksXmniWUzkZoyjP2HYqnM3Jo9ELeUMSh2dVs6yFqRswtxJNNoyGQSbH6a6KSpLFHpWe1",
  "key10": "31Y72vt8Zqd1xFJg8ZYYYje3rJkhPvTRDfeVBTRAh8DZfD3Suq1kdwtauhdWYkmULcF7b3rxwmbPoBqhsJPoh5iU",
  "key11": "438HESxT6V4EfE68AzBiajfjfxr7q3ouzHmpVtC3EerTbTAQjAwm6XKqDWWEraKoYgq9hYiVXVzBowdfT1cE9wtQ",
  "key12": "2NAWDQtEZbQFJwStQfhefJCTwVvrb3gpcUjSj3B9NE3ZKmbV9d2RwpLPBVTgNhC6pCjgQutz5BXutMuYXV9d3Hjf",
  "key13": "5tPSeLDJdiT9espjLepg74e9m9zNDm8NeNiMjcpQQ4VjeExHS3fVTsE96hLWDUtKXaZiZLakw8qaNb1vyigAh5A9",
  "key14": "5J86sot6k2Yc53yAauW4yzL9R5K3GB8b4wbxPJ87di9fofEf7hKExjEdzV93GavQUo6A6EeLVuggwFzuuVV5nPqM",
  "key15": "34upZcab8SLhnL9XB34ftdFS9EYbHga9AUiqNpjt33fG811kzb8Ja4Fe8fo4dwCQnYRm7tMxjL4BHrCfVAifmCfR",
  "key16": "4ihKPeJcALkje5NyEcTfP8iBduBQLRQHSLh8ayH3HE1jxdx3GRtYhsUS3azic8sd2UrNHdo2V6bPGPtCfjkhTcmR",
  "key17": "3ERdwbhjA5PpjR8Xr55ruG8pCDNPDGtacupUM5byqBwC9EZH7XM7Dzr2KfBKMt4DQu3xb9srRfuLHU8movV3EV7h",
  "key18": "5RnGPN73nd2VFJgYkYetQQtDqgWqitp4umHMCD4mvyxCjC9VpZwDcxAhQqYFp8vEJYquvsGKPUVgutdjaXsea3HP",
  "key19": "2bbFKZCKSSuzxxWLGYkPsjtZzW17ZYN98zwnGpX5oK25t9xghHe9ytTtdBURt6GccYBtYV5bXmeSYzEeCcNR9BCn",
  "key20": "4EFipj3PiewSpVBAcE8Rz4yq1GoqGDJDFYQDzwSDN5wMsm57NqTUvRnGNTUJqRnFYDxACDVDfBsQwuGNDUHgBLNo",
  "key21": "5W3sez5L3zH3KaLF8GZaSHzRPomc51665ELPEUTuhHXMotzYAisEGTa6vGRzsXsRyKCEAw9jV8s725BsjuoqKcEf",
  "key22": "JKEm61b35MpKzPnCyku3Rym69KWrj57HU5QrJJUxkmwdyGNtS2bk46xmWkwB14Wp9dKRxFu1hg5wQMo2XHHK4GZ",
  "key23": "4LmpcAikGzjkhYz8pbSowyB8mEGT9MEmjvZGVcxmCWKmLYiGi7AGgbVjpXTjQd4oo7hosgd4mkY8XiRH7qiiDmbb",
  "key24": "5n2Dt4WASuisHsNic3RzLHjrZYMLneV5ag7tcGr5SHSj3Lbk4ZE9Em2m1psAfsH2yygFuo2x9jDMEwbN18cM4aDd",
  "key25": "2NiQVfq7DXAkwptAnJ159KNWbGgRdPoV7ThnXWQZ1XbNVdKhRHc3WYLsFrbjtdzu3FZXcJoG8rpbU4rbEgpeyVLR",
  "key26": "3N9gFSJDTyUXfM9YKQrKsfVT3VFcVrpmiad9DeAf6M4ZQ25rQoia9PGvSkXwifZymsKpfGqkoHP9tuGZZDQDz6e7",
  "key27": "5gSSVz32sYaQ5HmjQZTEJ1AC5b7QhFmN9u3Er2FPyA62LAnaFznjmufTKTsjyFGABNVnGNeS1RqGdPNXTf9iMCdB",
  "key28": "3pZv3rXkpobgJmkfRMymZDZzAzhgi8tgZap1ME9js7kdoXC1bumKdqhE6yVEUxfPiA5WPVgN4So1m6qEpEydMsg2",
  "key29": "53BEbRjaE1fiPzGnsEm68mcmVivgSty24sadVTCxfe8D3ZteuZYRtpH3A4GzTo4t1aPVJkSoLupXDthf8HivPAbp",
  "key30": "5Y8j4Z2wg8YJeQKMPjcvqyMgeeh52s8s4pP848UTCsDe7zeapX9nHp9KMKBVG2pmQTg3kGdADV3oPoM34bNU4vFk",
  "key31": "2mSGjk9ZjVNWEFm11MT2ym6q7utdi4nhBPjALfzmuEfZng22XHVxD8T2pYzcTgB1YS79HU6ice3tGgdvKMkkPgsU",
  "key32": "3btRYL42kPZCCHJTC13u3qEpzYGqZ2ecYTMACGXj3TB2GGJ1aTdzbqSKVZFFkE5v8k7KpvfkqcCkHfrkYafEEGir",
  "key33": "sGo9beqMqmcHhnna43dFdT1GrjwWXvHAHmHvLzyXK4pTdtLUF635SvtsFivYMWgXLjRZtgDLybZ1vF5469yXL64",
  "key34": "5TdDPTVQim7aqaFhw6B2bySqyLMSrBxGr7HWpPUDncMUvm5987FsFxHdCnNKydCJA2eNX7K4wteBw7RvGAdV9xU3",
  "key35": "cEPkfZsN33GQd7oHMkC6AQMhCowxNP8zL8PU3wYxpkutwHSpEDwbPc5cUPCUouGpiASrsxdR6bgqLQFewxHkDXz",
  "key36": "UwvNeN5UHtCeoLDE7Hbuy9e9B2jfwch9rrXdQecN3raWsGCB5nYhvBjLenmGkamfehXFeY3bkhf9adSPbgGeCGk",
  "key37": "2463fJDtSbKQPmf2n3MzxVpBrittPR38UxCWLoELAWScenaKT7nvvCDHTAwjXPDLjjdHATxwbdYVbVehimJikfBf",
  "key38": "4oztqACqYb2Y56NxoxQXRvT7wXbExfkECSk18cLEeLnB2bqv4TC45hstNByeZgu6kKEriD2hVebYGZaojVn9vQk7",
  "key39": "4rJxJVkWBXHCsRjYzkYWfZKD6AYDW1u8eu2JEtWQhDQPLKc2ukRVD1ztGpUctkQMRBySq8ZU2UU34eHpsiqb4i4g",
  "key40": "2XHxWcHsqM5ySJEa6umHXemtMMjX4uNagqtEbbMC5G2Xyq5z5BLid7BSDdJaf11PChbdsFCruZg7HkgFD7gqqufs",
  "key41": "61uErzgK7EnMZrnpZ4WVHTPLUWMr7Swa5WQc8smoGgpFyntkEdqyCh3qeRBpgzWWmRZqphEwUBgL1UURVDq9W8t8",
  "key42": "KcCwguKCWXMiibMPKBdujDnQCH5v6B1MLozfTLrja2erXvUMx4QhSwebvXojJAKFxFeE5B2eh5bJgWFMi7y8FMj"
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
