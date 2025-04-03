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
    "4pDVbnnt2Epv6BrVdMn2Cgf4kDkocy4Y3s916Qv9RoiiQN5BeuXF37Cck4yp3bFT2xtKVKiZUBTY1GRXyPnmP439"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DcAgZAYSXcYnu4kseZ2JM8DtLSYp7SNU4BnkdymkWGf8YfmdXRNcF5Cx2xZ4SZG6GkAkWpKYX8EMzCENRx7EeNs",
  "key1": "3iShShTk9QXpfeRkUX6p4fNPWEKTiR2oDRYXBWZeNpgzDHyhuB8ZKJzjgfuTnRs3TgJqcgFzWCtiMtPCgCMzvfx7",
  "key2": "3SUqCK5WWqso1XMPTcWZNSeQT27bridDEJxuKuZTXWtSUqbWypFerNabUoWMc3fQpZtsqxqX5tMFzGuS7c7SDkT9",
  "key3": "4GMyiGitrRWtyYSUZfPcMufQUQ9PW2LXb1qGaRGgRgsbPHhwzFG3Wee4nRnF92f9jTiN4qg2mgTwGyshCm88iR35",
  "key4": "qYEoe9ckFXuqY2Cvmb1N4w9oAmt26VjZ2QeUJ7vepGkvQqwCJ39TVcJL8XzrcfcLtAjP6bcobukR1ScBXxR1CJf",
  "key5": "pCBydRosoHqot39Hc5NZN8CmfQE6EGEumvQqcgNdJLs6f4wwBf25G31F8AXUuW9X4pGwhWfqnisdCtk6H5okyM2",
  "key6": "3DTWi8CMbDkwVGv2GMnZWnVTzY8PXp9DvLjggJovgwmiPT3oBEFESqjay5qQ5zn2VoLEU65meHrf5t5Vk2RoUPPb",
  "key7": "4dQzcmU61ghtU1k52qKqsc1XRwbEMMfxtb94bnpxz9JeTqBtPeSrrYWGztsF3RigbRDW82mJw5NGG6LGAcZQxZxn",
  "key8": "5y3Q8V8EU6WJetav8fWGrBYf4AgesRTt7xNTd2hJw4VZzpvNnttpgQEfuvvyNYCE7h6tRV5iLkFYSmKm1uFdFTrg",
  "key9": "5LMFDuXfQMRLP2z4CxRQggK1jvXaGE69Vna1jnZb3mshs1NzMrFPqz6ct2ujk9YmgKBa8Cq6K5Up3swnHDAMFJ8M",
  "key10": "3CVYzixBDBi6vZdwEM4pv37v63gkketpfRXKfapKDccnnq5P516u1atM5LUw7zm3v9cpqMe8zWkb9t7HJ6GmTyu1",
  "key11": "2dxdvLWUy28WV6XuESCxSLwZ2UYNvBAupE7RLCHwEJ4peVVVssba9LcGrgk37k7NyksjALNX1iu9uBrc1NukrXJE",
  "key12": "3d3QWrDMSD3mNPiHoE7sKjr9pz3f79jWh3cScCNTCMwRY7CDBN5znSfSzbd7mbPP56p296NSuh262qioPQMpEv4S",
  "key13": "62Tv9t3Q56ZKmFGB4JTCsBrAjMPeZbvdaskudZT8D9wmp9XdrPiNeosPqAh49ixVBitie7zakbyrPqrnpx3uv5XE",
  "key14": "2LSNgCJddu9yGKuH9RbQUBe2puxL3C8Ng798vuXjhuKhqiCdKhXJEnkEKfkN8ZJDngRk5yWyujLWGewwvH7UpoCP",
  "key15": "346SDoCsZZQnmkyeJZLvWwQU2F3ALCtGv8SEqyi5UAHuVpQW3ZG946wPLVprjTC8nXuogkNV7UN6AixH4rCekBVG",
  "key16": "4vonJpQ4Udd9JXie2NUzZ6bD77fSceguUp7QiPixVzG656sCnm8xpBiqzkP2s7P7r6bc4MqzHUBmiwPiWvESkikB",
  "key17": "5km5hKe2kaeL8kdsW878bZ3gpvEF7dZnx4Dke9MHza1P9yTj8K9QAtwAq465LdJqqKRXtRgS87YysUuTUyGHvGqX",
  "key18": "4BGLi2Hqic3UqBe4MbXvrwjYHC8RYJFcP8SyhMjzFTpWqaVWqZGXcpwPXZTeYWK3cZxy6nWLW7UomJ3H9vozhxJs",
  "key19": "bHrzrEUz46jqRTRyLTLQUpJqKDYLbqcWRFUSxC2FfMWVe958Mrmf6CmB5ZRDpWWxYm6rLTv3SwC4gVYugoaxT3F",
  "key20": "2kHJXhN4a5NwPQX9zNuPQgwrxiQ8ypxh9RMG9Xz7HVWNebqDea2MnW4rYUAbi723DVYfjkic68nernKJg1gnQByu",
  "key21": "DYXwjfP3gA8qrehRLTed3p39q3AHcvCE7K2f44R5oikf7UU1b5vrprEWom9v8zLFgCX5H4iiHig3zDQ76C67xxc",
  "key22": "5jL9nRa1Dqdh7uqaYA4pvkLzFHNKeLFjxoBa3yANwjc8xTRSeSoF3bfu1Dixvqd3Ggc7MPh6anCSe7FBqs2pVQyJ",
  "key23": "47DZt9pH46FuwM3NQpaCmmF4t4bhAViAie1N9YLnrEHb4u8hJc4FMDAPJ65B3AwbbpTuGqTuoTJZPWnyTZvXFDym",
  "key24": "2qU5mNnhJu9hJqdmPHp8i3sMeBbWePSWajf2wQa8Mrf3Dwe8zRUBYExzeP3TX8khsLxqptc54PQ62NkPE2qiqHsi",
  "key25": "4tB4sSLBtLTskMLKKWEjPjQ4V9VrqiRprDk8xqyQT3jnmXv3nWsnaNPFHa6ZeUiunRwH3o4tqzuD3VRVwwr5GMhE",
  "key26": "2MQHJr8CUDr2T5DaiqsZNp1wwwGS4cCYDRZWZeh27sJtJ5DFEimVSb6m2D8ehfZWPfK5L9sMdKJE5HDY2NXb35AY",
  "key27": "26HyyFUq6oVEN6H8n2KHbmGqV1hW4SNZqoT2goXxFfSCiktBCUeBKhk2Z3hsP6erDaaBso95AQcDmP19oNdDemyy",
  "key28": "5QDqfRXqk6qiCfknGTEc4ZrTkwnEJaoFWBi63CyyMxERJ3AnkxHmgWmhL7s3WZsBu4evsH2oSErC2QbbU6idmne9",
  "key29": "3emdMJdrPgrXFjW7fBdDvcb3R6Q1nDYnoARzqBEzn4H2BFBwRAL1sWU2SJhMCgJRvGA9kqAhmGYz8gqXKuBkuxxE",
  "key30": "2TVekAPxjod4APSsKA7eGA1R7Q6sWft7hyXE5AaMbdoBUfdywqndFfiqUKsWGM6ceaV16GJarYHPvMeC4cMaZVrN",
  "key31": "3oYzsSwwatzNeuroDXMyTAUP5YADeADoqx9m28zwUMxmidkaBTbrqm3wqg14EcFyGhes67hCVQU3ivqRtJPDbUKG",
  "key32": "44mPC7fuQxZ5YezTsGEV7cerw27LAEhtEQxyHUebmJhwmZvjMsVtUeymW67wvLnBkcZrQWbKnGSDe2QwQsqmumW9",
  "key33": "RbPAQJwBh328H9zP8f2FegvBiACSj297MYd7ch2bA8Cniattidq7vMjngFmgeZZpnLVaeB9tpy1H8heiCzxibDV",
  "key34": "3Y4AEausZBnDEhA3AqekHNLaC7eZmPHFGSbwpRJoGq3Ui1nDHW93Xhx2pC2jPFtGdYhZ4C2QxbszMURzGfXjn8Nf",
  "key35": "5rKCR1eUtcmyyJrH8WgEkP5oxVBXop1yBSw9us41AbiutMFMqVfTe2YoW7RNX9fhEzaDp5EiZqjFgDw8yWbWTBXS",
  "key36": "4CB7AZioMRpKSfpnV2BLeZkBcW43kbEaxzdwVihspJ6zPmned2RGWz6HaTAo6MePDRhJ56HrjbCBGgkjiD47VySf",
  "key37": "3wKADwov3RfexuqHpqVxmgQEo887vhyV69UTssAqd7J4pVtaHbUF8rS8UUD3XGsASbp6P22n78RCCvsvQ2bsDvRY",
  "key38": "4esicBNZiVE65wH5EAxZbVCgdYVKWBcSp9rLScyv7x579duXYPAwojekvEfwFTz3y8mJwQTsRWn7PYbRjUw3Fp4z",
  "key39": "24c7djc3jMd2EneBQUv3Z63Sg1S8okp9dj8dFkEPsHFLv3KzaCPDpmQzs9TMDLFsRqyT4VuuPVeXYQJAhxqM2xfN",
  "key40": "64ZfJtTArzMYtaK6ryyvPiqkRHXWpWU5C5AuGHFpTLXrUpGkWCAbWyw8A3wt5MMb7eMztNv274ouzeeriaZk7zbr",
  "key41": "4YTDtLZpZxaCKvZhe2h2b6esHKp97wkQzxsPSQbLQBbyrASFRpH9jBYhyaGkzpwc8Y7PvGkwfv9EeKfUtgzGCAh"
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
