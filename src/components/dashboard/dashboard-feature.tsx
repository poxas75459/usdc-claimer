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
    "5NZqhDFBtAC8MJUMMdUEvQBUPmaqj3D2hoJXHBQzc5oEm36pHKRZnFQB4dHF5uGEMBLkBTrZDM6vvzH2teaguutQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uMdzEhh8zpxAVnw2Ui31JpzRUDpgmJ99e3LwPkJAXwLzP3MdcuMH7qwKP5woq79Js6qpso5e1QwuAtuB4rHmrzM",
  "key1": "4Ju1c3LKJAV9wECkc9J9Qmpd9pfZCx5m2viRpUf1DgujFqDdwD2ZbiGHXuQwNJbikrZuePuCHbcX7Tx7ysYSwLkL",
  "key2": "4P8aERZBa6fhEu8FrHN4rKTA1twqix2FrLNRtZYKgNLM4GvnC7i6F2dHS8LNMxFxxXNNxpXLp5DvsVs574TqmcFo",
  "key3": "3KimZqrJb5wZsEJAGB6Z4Tr2UmSUJtSm6UBxgVbrDLqeacPuYH17FPuHxwM5ZzmATXkDks9KVCz8XvT8AeiiGM49",
  "key4": "3yvKGY5vmP9LZawnn7nfbakA5RzmxdYSg22LYCSMRAxmRrYkFYRaiX8RA4GUuFafnsXJjecNJcsSFGwV2akyygPY",
  "key5": "P4q7EdZDX8mYQDg15UrBPuhEpaHbCz28PmWKEiet5Uvbf8FWDkRcB9E66JUXgcTvTjkUVgdAWnwqFYJSsedj1Li",
  "key6": "4Y6m4PoBK7yMUKxNokkMwVdVU797aXHdnVHX76K1dGTTF5ccrQkqUnB9JMeNvM7gAC3PJ71kBiibwnoc2aA2kEK",
  "key7": "24MZxqsDe19pCTcMZ81kRcEcNbtkJWA1JCv2kz7GUvSKGeXpp5RDrEfqXYMgLaXv1vjp3t5em7PSPvocEe5EWGvp",
  "key8": "5ynMqEPGyuv1WgmAYo5dK23NjBYqpK5WzmbsvcRRczx7y2wSnbSpwFhN4oYcpSdkoD9nHyEPsKPnhqk8VPyUXLRD",
  "key9": "5y7pgB2uXF6ycv48snkgNQomDraPW1uo19SmaXoEzEbsDRXNCwsaxdcuLs12zxxoL29VYv5bhUKLHcoF4eETVEC4",
  "key10": "3AGmSYFz9r5J3T2LQWtjW6RjBMLM5oEFkPy7q6w7cCSn5LLQkkE27pyYQDEpf9m9fRmU4nuVRXxDgY2QHuiffBY9",
  "key11": "4UpC71yHLAqpDQJtv7Sp5zWbW7bjKYDYRuUfjgKjXPHYg3CxaAQRg2fzMvBJggr8jrn1u4ErpwAJdpWnafPiy77X",
  "key12": "4XiEH6NV78noaXRSLtLniB6oyZtG5qwoJUVsLo8PbN6ki4QGBv3S7d5B5vtBgfLnGTxfLjomZbdJti6T4Lue2Ek9",
  "key13": "3NvTDzEQqiJjkMvV4rRuCo2o1iWGdzfXmEGSck57Quwse42EGZ4Ryq8vUxvJcJoWeJbd4AuNXhsAYRKaMRhPVM7s",
  "key14": "5DXy5mphiFSksPkQidMSVoMqugg2MJXU427cEjLR6tmLBxs7t2ZHjicfuBSMcD3zbBrnQ94ZVMtM9TGhLnvgo26w",
  "key15": "2jREzfLML5Eh7DEadw1Y13FXnDzQSnYcDHRJNjy2BX5NezMNFnGPbB2B7KMFQx1bB1pFrHgDY85pPQzhqs7peGq3",
  "key16": "5RHizJZ98p6MuHj3RJrRqCnTZtecPed6LqaMN7xUygyVo9voP8q8pTzzF7ZZ8dz2zdfxvR35mSM8dVXb17LZjRd",
  "key17": "3U1j2d5RbiGrEwg9fNU4V3869zaN8H1haMn1BSxXXKGswHid77mMavz9XW56CNn4K9Xq996MBG7H9KbYNBA6L44G",
  "key18": "2nefGnvkQPENEWMpCiaLyFkEtgbERmnTcvEFXvfB3P67sSQhDpoR8JCLxqh22DWg2Qg4EXvaKKqcz8xmKymqhS34",
  "key19": "nAHmc2eVTQtVVPFPECYB6mjQfssELxNKtfvQ862gvCZqzsguPjuwfbH1QmYj96CAZpacA7osvZa2EmZu9BeMFNU",
  "key20": "Lnv8rkgzMA1ukSZT2uWPraPgTg2DAS1cV5Rf6RXgsDuXG3NHNPTjEjDUox9q9GS9br3dGjiutdC3Q3BwsJLUsNa",
  "key21": "2hhe1pSWU5XCjUpFGGMg2KL5uqLKeF1VrdBU4QQ8K8WeVWq347iuF6gkSjf9eA6gJNrgVwhdLjKMpYJZda2tuFdu",
  "key22": "dpKPT6heZpcXfKyYD4swNNAEQwT75Z1375dH9emFSQf1eFx1TsFnPTud1iEeddCdYrNTjryur6WcGkJ8riWuV8v",
  "key23": "4MY8ZrtPPFHta55pU5zMBzpLg8VTaK7Ww8DP3ERshru4CTtDTpD25PbBTQnRA8ahUs33WZqNroCmmHf5ADNsiHja",
  "key24": "48SDcnUqWbj29Bheb7bDQqeBvTDqvoEfHPggQULb6NschMiheXqWCqiizHbTNE7xD7yT5kii9bzAdkk5qiWLJZdm",
  "key25": "62wZyjJQ21Vn7nJSWLLJD4y978F9nFySdUuv5ipP4vCqtbZovV9vCsWk6aYshLq9njFLk4fUaKxP2ee5P7DSAHGh",
  "key26": "4Ai1cGKm7Sve76vSPY9NLmGHbLYQ9xQRZfefL9QPqjY8u2Ts15ezW6qh6p7ypMGdpAMhYWZ3aVKxTcfaPxk1NKNx",
  "key27": "3ni6LLxdeJt6945Pi44kuhKiox9JyrScCzcypeny9E8MDjgdpPGdPfVZoCp5zNjzhYqyAN67ALg61EmaPMmymiMd",
  "key28": "3hQXpddrckn3MoA7BkzYN9ENpipxaANhLu3D9ScSjxhGqU5wMcHdB9Ztbdtcxs4WUMFw2n1aNsbte3N8NJ5Lahb1",
  "key29": "5k9XpJ5JvbQPArpMoX47J3NQcjRuYuhRkjG8iXV1f3k4RFiMoQiLMkbMWVotSsMjDMsNr9w55EWBdEATZz2PuUWx",
  "key30": "3wwRDhX1QoAvK9qXog8M86sgCHy2WBuwVqSKb9wrTdhNnauyzNh7wMviHridmCkafx9soga8x7eUy7dae6LHA89C",
  "key31": "4di535Ha49oxHVyPqCwxeu3hCQdKamNTH6Nbu3DWFhMktoguTr78ECP9ithbQThamvEFsxdL9hLyV3hymxLD8HQb",
  "key32": "2X6WvE8vJxbczSYHg6RkoTJqeecHcvovAXPzxCQTXBFw9hu6qzcnJSdr9wBvuitVVkJhSwStC1B1YrcuP4Mtpx7L",
  "key33": "43iXy5THFzGY25uvTRQkA9S7naxHkYdCAsZWd3ZYP1Uu9MPxkunJyXVrsc4GjvypeHaNQAVBDDjMeXCffqaj5ffX",
  "key34": "8t3Gj31iAN3ow4wGowYaAfUownZNs69vpNs2WRNCqys75Msz1NevxHtRJh5AS2YyuBxB454xLj7JLJMSPE7j796",
  "key35": "53hzGXXq7KWADSKgJUFp5mBANRjWsMQMtPuLbCfNm1f31f6SSREfo2WAkP1BPHhqiSzcC4xpzSfqY1FbbwprZRw3",
  "key36": "3rLJYTdcQXz2BZMB5neb5PAgLy34MvxsWAQ1AJ5nMHqA8s1vMkFt5v44Q8PG9hEmscgeG4B5Sow22xHfZK8BsNhH",
  "key37": "jVgZir8o7jJZz24XBRwJZ4WFuLETwp25HvvK1AVJwKDBhTYdhekZrqre1zHeWoXkMLdvPvuqEhXDLjPsAYkonaW",
  "key38": "35iMY6WZtLfTFuWGzcNvFev2akYSiepgh5heb94vbjJTrvSmiDLGe4o3e3beoGTSww1X97iosUw1rZUPzZFXjRvp",
  "key39": "2JXSJsTnqg6LhdcqB9kTv59CuDKvNR5kLcXafRbWE8yaSaLznxMDGwBTh5aSkwH9nuoSfcPUsuMqbXepkbhHFXHk",
  "key40": "5dkkkZ5cx3QXCGY2YgjvzjXWzX8e9dG4is5PhjtjzugAQ9oYUjqnRH31cpPTCx9b62etJgUePSxiP6qFqfXS2Pa1",
  "key41": "35aksEkuKSo9ndcD9HYyMYebLDf1VrZzsdz8zZudqWeCdgaJJYYb5ArxyZ294LH2rcYrX1Jsq6BWGL6mEw7Wo5c9",
  "key42": "513J1nBpuMsByL5NifVnoMMDcCHaMeMgTZrur6GEgtHmZrYcz13WEuUkdCoTraDo8qR9e5vjvxA4GY9cEynAgUHT",
  "key43": "22pebVSEkeHr2bXNQRWpEBsUMAHprk6THbLbnBKqG1jAE22k8xftZuL7kBoV7EX57Tuhp7ettLTADZ8W4jCNm56r",
  "key44": "2hPyYuykUAnMttzzrrCMEcyRHeky2HbMapYjvcF8A3bq1gqKLzCXzQpoHbDBJBsFntq6j9eFRbKfWUHAX73Withv",
  "key45": "64F9KUHADhRzBcF8Z1Cr2LPfh5yAnxyVAh8zdCMBk1LUHSey2BB6AebyVHfyCZhndAuKwQJg2vG84vyrgx5AekjG",
  "key46": "87JAmVQ8LWvrPUeaYNCvwQtULeij77VhzFMzMA1VAZZdmWGMHyzgQ2nvd2xEP6Kj2zd45wbxAiFx9rVV46p7P2S",
  "key47": "2vdpa38tnmjZn3NbateCjRNFi7RAKMaMQj4dPmDfNDkx7jWPMEuemPhY4inf2CdizE3Q1MSbsx289LA2D7tAnW2e"
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
