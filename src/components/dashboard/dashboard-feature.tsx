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
    "4Xh4EhLVeUaiVtgRzD83FzEH62bpRiiJWpsdkurewjDynpb9Lj73QESNpRY9pRLo85XxPx28pbnUweuG8a4FW25N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5icpBzzkmdErk1GqwawwNS4JhwbUJnDNSL4r9Qday7Hh8jAXuaTHjpNA8nEqxxxcTMsgxPrNB5c1PjqeRXS6ChaK",
  "key1": "4jD5sBDxBaNqptQffVHE8H2dNfY8bzbEEPdtCRFD8Mawan492LdEcmjywb5XV7ibt42f1kyAbm3nuULfJsDtTtXk",
  "key2": "5NdfAG2h8V2ip3zPz6Dz4tWRbb93TssBRJgquh9Sme6rxDgvYdxpFCdZ4zEHjUHLahnxU33hEc1CbuPtSCc753m6",
  "key3": "323iEjz6yUvUrjd7kxjV7DTtWUmyb5WRB5AJujnSXMQVeYyW8xvAXRzeBmK7U8F1cRYGZUqjAs6oDwcC1aRFrP4d",
  "key4": "2PAP3pDbirSxFyfsqk59TmDZNHDy2YuNC1khXDBtgnTMeVEgVZmg12w6bGEPrkzJcBb8SBgxS3AzQpxvLCRtjdPf",
  "key5": "4j16UUN7qFeBQuFs4E3UUHsWzjBEm7kdwzTZbXi6MewSz5QoD4cAa1uoi1TQx7VDabaFG6fCvExaouA2t4TvLDjx",
  "key6": "THTq6S92whEcF7Jf3yRU148bJB34Wo71fi8U3pJb2aJ5vS5zWBh1bhGqzwSeEy9PjADbNR17uUQRoYzsZdpjcyd",
  "key7": "61usuMb9V1vV29jSxCGZPrNFsYk6RSjWyRbaCyonCqQPoPhHKAEHXutLPwK9AZB7bgihZvTieRQFqPV7b9G2cFem",
  "key8": "dAsMGRdDsFkWYUFmHjRdhJvhcyaSSYpY1z1ozDijUibzwxrAHo7DTiRrSre2vJMkCs2MQE2Lv3kshZfq8wChH62",
  "key9": "4vAubHYni28DYriLxPKNmPwSwWAYGYgwPoSZjykrVM8rJtEuEW53hmQqJfB5Mp723k38fB27S91f7VruWSWL1Qmw",
  "key10": "aEgrP8zA4DEDcL3rChSRattFztzqjo7pDzEzqEigJArL2BbNvQR6gZEgrWjejr2pHnXZZjryWjeeoQmZjzoxNBV",
  "key11": "srL5irN7JC3ajUgVQ31iFjJSUK64ehGbNkHUn2Gap8wsVbsf4YWUvFjdDFNfERMraxQpEnRvtW5tJHonukWq7ar",
  "key12": "2TUMYmaGvB55gzhxHgyczMcVFneVMX2HFLeio24Z3LfUKwEnjzfTFCjMzRfqVouonfMoMijktYhdxqtgkYqA4DzL",
  "key13": "2WXFmsjcKU6cZjyZepbQtWhR5AkYU9JCq92uP3cL989AJxQoPFAqHoB2pcjUgxfxXp1iDuNwAEk7hzbumbShfZ7G",
  "key14": "4pdKWQmdCQ2FkdMwEyzGjWr1G1QKqw2zmHpXEVvpXaM5xKsqwaETadRwSJKWLRkXa3zD4Zfh9k6m3Vk1WKSWM6XR",
  "key15": "3msJjbUdazx7EpNPNicXiYjVewPeJscv8xzkDWfTRM1Zts5NyJAYo1okURLHPE52JeqqQoH7d4a5mahHAFHZV4F7",
  "key16": "67mpDvKfJm3DWpj5TzuAsZqj2Pw4CtKNzHUamCP2b9jDadGuLGKufe2b6uasUaGHbauth5NkApxx6oUrj9BfYJg6",
  "key17": "5Q8VG1Pbhj4cWxurgWnS8mF2TTnjpRuhX8KMwDWXKbrjNhvwiuVDmgw8fkMZcnFfHnHWV3qEW5yUjdm2V8E1g1Ev",
  "key18": "4gWVXs6X1e6LVBzSzuovBRaYgP3uUxSRBwLj2CkvK2VAYcUADYmzUxupAe3EPicWz1mpJYp6uzQMGfuHq3SoKvVv",
  "key19": "xBLDzrzdvCn8kbJZCrxDoAyHBYRKWByiAnAHo8WNFiQ89o5UCju7CkVRP8S1zi6arVbvu7J3BgiQsHGDoLKDzNX",
  "key20": "2X3wcM1tPyMq6YPRwXkNfZJL15TM5scBcqQnVA9NFmecV74mpvPm9t1aoyradmHHKULYHDjvpUKM26PUwwL3vBsj",
  "key21": "xwfGC3reJXGwbFoEhdejbZ1zMEsCvZLtp3SYuq37RwuQzzwaQyswW54hZ4A2HmdzCnK5vxd4gRASUcfC2Mhnnwi",
  "key22": "aPA8SiVLyAaU3NKyhA5WwZFTdC6EBTcRuzSfLwbC4H4D1bApGYMYTtMBMM1fRvnYKwQMJXKVjEGn7Adi62AkqkC",
  "key23": "42eJEPKis9dYjJcxf5MH94cnJpGr8C9CuQuUf6ComrqnyJm8ji7jGGeC8isDf7vpVaWcRPndrYBncqP2CRRtGc7K",
  "key24": "4GBj6JW99wWUAziNZog65AAkjkCMoxAXj1PCvompPNtQBsGMxRwQCgw2cNXKjKUR4LnXsut5mxR69TpL9NTA9UYp",
  "key25": "5tneQzh9yyKjXjSwdwDoD6JPoeA4v6DtDkoUPzX5gcmnWtx8iAPqX46ob67X5J2d4EgXvTj6EbY1ZDemCYXiKPzF",
  "key26": "JqjM5VqCmECP5XkE3PEkL8tu5c9aLtCCq7t7Rh8CFyRfYuRumMEWtmM5ia69DemY3PkWRozLSgFMKtGEMLLXEKx",
  "key27": "3eYYpDB8A2Rao8MkVAzgSsUqw4Xt4i1GLzf9oHNXWJD6Lg1NjfvAWE1zJEtFoBGgzoR4nTMf97nMhjAaxaJdwazX",
  "key28": "2ZANWbxepFG9YyV3N2S59QfpcjonokfZSu8kxSxnDREYdbPFvgdYTXQM58pVK1te9jFjN9EAJsjV8gVKzb2APTTR",
  "key29": "YEYxmTdyWDZnc1V91tFjsEzazL7uWHZ3jSBq4sSH5cJmd2nqFDcxVwLSyQF7J63HNtWu45SAiediKFNKHfdDyhJ",
  "key30": "45HpSPJDxATfS2o5YBzZA9rziKGuan48nt7txt912brDCpxRkYwUFqRo13AejoSXzEan3nNXTfZcCAdyAWUbQ5j5",
  "key31": "2h4cWWSz3xo9ntnDMqhqyuxM1inV3NjhggnhmVTz18tcUkChbJwUe134KcVKdFrQAi2iFqA1s2fsD1yixowbSuRP",
  "key32": "3ehQrfWTqz4zG9zZ28cDn3h7cUShk3ozUAUBGqyYPuwjFBBZ2dmFXSQFm3mZbXvgYMHdg1vApJdsDTz5ew2rPDB7",
  "key33": "S8aaGMiLvv6kBvD6Xw4A5zT5mpPeBDLEchNStqTptedXKektjqkd2czSMEuUBVnVig8FWvA5wXCrgJd7tYg4gcZ",
  "key34": "343UyteFbEV4WLMoh6FhWJLV7NPqqNYvWFn21tN9Yh31V5MM2hL369WX22tRTUyBoiznYKWDUxvtH3wGf8UuWq6q"
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
