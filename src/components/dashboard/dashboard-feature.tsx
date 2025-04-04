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
    "39u3RsHNQMLDn5NaPxpSfPvjCdrEbR9hFc1xgzUeCswHxja2BWZc4S3iLGF88czpPi5hNs2LXyM9yAWB2R4nDBqo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2g6Chd1MeeNhG8CKLfo47mzp3g5SjfmGQy724ZYJZK6qumayJX9kRgYvb7r5YAi4PEyWTMqJp2cv4ckLziCQHvhe",
  "key1": "34fuognjUdMuHJjTWHLQF7wHSRKKeXpLgJiifzkttVYmEQSJt3RJ2KQWqeff91QU8XXg6krqbTwRSZMdH9yPu3n1",
  "key2": "2AzULUEiftt1SZPFBxx5DDs37WhmDnu3GMCsgVYZ81Qcgq3kWZ8YpnjbXfcaKieq4zDgE8xsZ4tGzGv8SrtpXByJ",
  "key3": "4vBQwM4qBN3Vz3W5Kn42tQBoxU2JSJRfwjDchgq45KgPxzr22gHUM56DmrveoeB3rkJVBUp6Jhu5Rzb69XED8CYz",
  "key4": "64x7Xj2SnixELMyAYqatRsSUUKvCSLiBw7pxzJDcTNZrEyK7KXCr7UMNq5N3VCFux6JRKg4bB7CNW27Ta28cjXyL",
  "key5": "5xtXvqBPCUGdDMJV6sjPsPCKFUKmu1vDQyjVDycMWgkkhNRFrfj9gWWbL5fER3tFpBKEimQXhbS38sPETiptCqbA",
  "key6": "amsJmMPqAdeqUmksYcbPp5jHqcEyBPPSasdd6VBKaDk7fPGELJzz1ShKvCiTEzix5CEfUnKMQqzEhLxZg4Dqzfd",
  "key7": "5tiWo6LrXWG9NhWfZtoYFeV67XZsNt2JQALC51R7BUZ1P1t9FHqrT9Mc86crZSAB5f61Hnt6H1HNzaYNC89ZQXWq",
  "key8": "VbPXT47K7iPbqQPox9FKtYMjZ3giAL8A1EA3UGdNdU4N8LoXDv8tKzYQ4N23cjcBsLyr4tqpcxDTJyVbhFdU2oz",
  "key9": "sE1shnakRKHbDTC63oNYt85s63dWPAXstrHj7uhfpnko2pHgrzUF4PSgpcT2kEbo1Ra4oRun9Pqf6QNzY2xoPHD",
  "key10": "4hCUqnGRhDMoDXC9J4aJUgGyUJMxUgLuUo8XruL9S81JuxWzh6y8sWQ8frkLWXE3WKs2gEf2VaK7DhCNLKn4c3n9",
  "key11": "5Nxka5dKDiEEYVAwBtWkWJrWDZWLKicho7QmQ24EWPs4StcNErJixYjtGZErcJovpYWQVGuCFoYQ3DUGsCBpU2n",
  "key12": "2vhYJVyMYCdTWc846wrQPLZGZ9BARPGnMde1SqVGXXtjJTfwuTuA5Q1M6fZUdZ4bZ1rTYFfj8FkXFCcfo4XY7cPW",
  "key13": "3pzZff4tJPYd1UAA8fTEW1Hr6FSXDqZkKpLffYgywJ22zKRRE567w1AsMdfBN82Df3iGQWZ8af3QPiKmU3DtBQC7",
  "key14": "3nPsusEFXjPCeCq3jaZe1DhbVDAC2RFpshVRxccuQVh74Pe5HFma1twjistHF6R5a4qEbp2AjR78FKkvWKpk8VrM",
  "key15": "4KBXjMd1vZZQWV6RwmRAvGVy9fxvg2CZ6tGxUBjXLMXRRUjHerjrn5eiSrkXFm6gEKjP7uoN4rmekGZqsVbgy7p1",
  "key16": "7vHPe3UGe8jhBidErwY3fbtkraDxPtt8A1XbDgKAkBCA3ThQE1NEKLCuUjijoQdC1X1Ji8rC2VhCexRW6h1oeZD",
  "key17": "DkpcwtuSSSE7YKgmCwa4Jm4bXZgoLHsWQbSQjao9gpaAjrCK5X7eVwheypDuNQZc3P3Gg1au3f6dh1XiLCppz63",
  "key18": "3hhewFoa6E8PKcGu3E4rbYy3SiF4rtwbxghRGvnygqVBymEfs8nZASWQvEwhwPmBxCzDRUi3QX9jUWjPxwVLxaXe",
  "key19": "knFutpkgcBzZTH8jkwHxKd9ExTPQJQLQstV8mey7kzWPMdTXQuuuBQ7ecEJoGEXFS5qK526zvjh7EdAc3GqtUzN",
  "key20": "5B3vh1Bxf266REyRrsxV7hTn6ohLQMYN8hz5PBGDmnKbXzQU4S75HkmknsbohYRMrfdZy6qMeDW1QGSBNsN6eCpw",
  "key21": "7u1rvfSoaKyG8REEH2WqhCaHWG7wbdtwEpXswFqWpFq4bxjKk8btfvnKfmG5Mn3GTMmXyuiF75JKxGrsqTqgCDg",
  "key22": "2CRQiH9LGTBWKzBJ2bbL9guHY3nGWiFVdqAwf649tW22tQA9pf4RMcBp36e9rsXS1NuxYhLEKHy7AN32cxsuLqMa",
  "key23": "jzm8unzAB31pLCpXmTvTzNRzoHrBoFHkLVTAGiUaMfjNyyJmFWuA8G7cky5vSrBwH23kywA9qQykUuMgm6RKuFF",
  "key24": "2TbpkNP5NNGRPYoZscwfdfTQCGcZgzMJr4JCW3M6PhaqieDmNRgRLopTtHXkzGtbFjaJVDdQDiaMxACw7DoytUv8",
  "key25": "4DtNii7Leegth8WdE7yC2cHb5cmsdh2zEeeq48t8kHCQ2cSepGQjNrDJWupsWNYC4JhSoKQFsUqgTZxjXoM8UD2U",
  "key26": "4dHeoRBpstLX9p1SKBh37s5xk2CPFuPBNAVp3FdCsgbdMQLRMdd9WR3bKEY2LbbVRdWrHsBvzAD4mEX8vWsDwJqU",
  "key27": "38LedVzUHev7nso3F15boxVGe9WmAVTxYu5L7vZBr75csJKaMVkQzxmdzgedmYbxP8D1ajkuR5zuvsAPuDsQouvQ",
  "key28": "2tmxcVAUTyfJ6giePzr8UQLYwWaE1aqLXHCquo7s5PCPyYFWE7rFb8H8cUccSm9cZzWmB1Hm1FBVtGbyMUkRteVC",
  "key29": "57NrV6Q5jNjHTbwKNeVEw3EeCQ2VLFxFihvVP5E13FYUTUuTZbzTPn2tvAfc8Py3zfpwjAJn9egGK9fbCiLb4rzg",
  "key30": "29fN4FQfQg8pLcVLaj7JZETWbhJbAxvTnLbN7Ghw26uUQDEGUdu5LrTZNusw3SEo1YKac9BciCeSa2r11kpbq16Q",
  "key31": "5rZQacwqiGXwsKFvEs9GLHoaJQ1yxmKNCp1GmziWmDNSHTPr2C5zrznTHdW7GoW1NDF3XHDbsvAcYVdpgCiCkTo6",
  "key32": "3L8hGDmtJm2ir8URv4ptyidHj29mUd3RrHBwVt5QSjouXr6tbd2kBDGYML7xSUqxRyib48bt1nP5iid5mvdeddTk",
  "key33": "5tNhs6LWhbjLo5NY9WLYoRD6SAXCTKDG5ZcFSdeBfvcfu7WvqT5NLMVxfYXvUbem5Wby74v9ERn99Fnkuyvjhixm",
  "key34": "36L6tTnGhm7UErQd7UHk4dniCejpg9jJ9D9irUv3buWMuQedeDHHZ5CHt1CcY5NprgWGF3ZBRq385uiv13j2UXbZ",
  "key35": "3M99QCEy6bzuGekXhHg6KyhpEbMPYHCs1TYMCfDXEgvceQUS65tFVByi31QF4m6V7tinazUJQD5W3xbC21ZvpUnz",
  "key36": "4nkZ8kgddYKTuN9b7KPSRCmdm4456eWGGJ8UwQVxuX79VPvbMtKQCjtYn7LnorskoNVXrSLJ13rmFvUiGUsHEZuD",
  "key37": "4NNHKTpvgnbF4W9sqGbsscbiA4ocHiwkd3B5RXReFVKnnaRcezSXdbSLRs4SwXKQqtnbmKNqiuGiPe7AhZ1be7gn",
  "key38": "3kQLeZc2jZ1SpExZra73RHxRQrMyQ45XfYCw6uhKww2kwNY4JbnH2EzZCJwLLZaAnnXAUb5vbBYj9n9WPNSjG5y5",
  "key39": "22D34NJHpuqZ7F9FAxwfuz6uanSwuL6jnQs5rrayjq6MTY8EuQZBd15on7Lhm9zrwaKKpCL5VVoKyCfiyEQkcjEN",
  "key40": "UHK5LpKcGrP3qZ2cHKS2mze6EuqAUY98FnZUXZx3pEYskphdGjsGB9vdemvq57qn3mQv6kiYxgVjtYC7b24uL5w",
  "key41": "29wedutPSgfJzmJpjdmRfjrMQyj3q4QtftEJWwazayNbwsLwm2UvxHbAMJUjNyZmgQycVhfwyvWStG2fojkkKmtp",
  "key42": "3jcDyyUdV8cEUz4N1NfwU83EvXLy2kzChEoVdQFe1Nzik1UcZ4oZq3LCdjBEPzXZq7qzpM6QCoCqYQV3Ba8YxWNV",
  "key43": "2usZvmgCjEXXAr7myE6jgBZKUA3gypiSmL8JwrgWNuFQbZtacjgQFVWcxFaUCbRudEdFEDBTDtoTRBhThLoVpptm",
  "key44": "2o9NFkJMJXXXNpnwoL6gEuiumNJpWGJyXWwQ9VzuGbfptNutxhQUDsYtiiTdjtWyBRVGcuTy3yb1Nu2h18PZCuMn",
  "key45": "2BoogEtfXJ2tsVvKGEBAd77f37VYuirUBZWxUD2v2ELRdrsFPh1Kxmk5fjofQX1uRfEYt6zZzGNmstGqUgwKc87p",
  "key46": "xKTPRWuzUrumwzgd8RPWx3exqRcprT9PrpzZwgNC6SRg81CubGMmaMz9YPtMqvA82zM72Mreo5AwV3Wg3Ph4TdJ"
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
