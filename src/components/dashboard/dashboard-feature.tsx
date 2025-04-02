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
    "2YWbJ1dEDB5rDgGJWhrU47Uq56tF8bx3xfqu7exJxRxFWjcTNB5fKnMrW2L8MnaaPiUiy8ReCrETw2HjTBCVvLUu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Wf4Gx7LMUoSkU1Q44NRWTpL1au5Ww4VFZrWRcgeVDmFsDffv2vibbKCtBnfWNncaNHdgwsQFp9ArAZFghaCfsip",
  "key1": "2oZAD6VSYzyrWUGdRF9r6Z8L2t9fdVNvJS8EjwHkxahBWJ6uRt5ZP9ba39fwCqV5DdtEVrA7gEkx4A4pSBigdiDM",
  "key2": "37h6uKNADfziLopL34hEyTQwXPYL3c98szpNivKAFuo6KfPrU793Ed1TGWANrqvCcr2oE85kP4NrxgorVwY8aKdE",
  "key3": "3ZmVryEM3cex3WRynjFX51vDcYFpESgbBKLVMZ74EUup4pfyS3nGzDLJjh3mLcZVQhTiFqv84Pkt1f4CCV6tVkQY",
  "key4": "3F1fjMJXRJsnUZ1Mcnjcpc7nguRfFgfvKahk4VePqx95CaSzCaS6qNroKPU4L19JozyiAjUA9Puna4VwZBp7eteS",
  "key5": "2wi4U3g75Wm2Zwjx32H3XbV7cN99byeLBBjqRfuyzBDAxDYR5EsC2D6SbgowY1sT8YSrr66UoNMBQMtHM8enAuRB",
  "key6": "5jBAfxAwjuJyTrjHkgUxedARQpQYMqfqBGNe65bEcpVRzw6hpUZgyr4mc4UGatp2HfFDAX4YfnNq1Ao9BZBvzRia",
  "key7": "29LFWzHfebBdpov6uuwEGqmCWKXbzVivn4ohHPQVa5pAUGkKmW7WSyQnhjdzDwKZAkdv8JrP9wdzmgibcHpPC92M",
  "key8": "5pArKLAk7gptSNbZZhxvCYpwEQaET1qvMoWgmDFpLDbrDzUddDFUQoVH2ynPgyxhNRUMgARjvpaehkWUJPSnsnJT",
  "key9": "2r6aR8hHZpYHRXAJTwB8xaT9DefjHKC7MFCSvHYpAhSaeqxY6hvUfTFUogK4ByqS5TpNuLbuCq7orsDh5VmbPVeo",
  "key10": "4S8T6q98qBfLm4JHfFfX8ofnHvuLXBkj2XwSpnimgCYkJoio7ZQFUvutVyczuaRPvQL6w2pyJS2ahhYXEmTHN1nz",
  "key11": "3mr2FrmJ1kGBRWH3MEacRPx2yyF57GUHPmHcKtwjoHC9WRff6XH8DHfcdCZQQqNw6Db9mYKSAtAL21Cp21naZ5Lj",
  "key12": "59BTZN733TLiJGrsrgknXfP6cPaBCTmXJcnSx82nvN6jd4TU2hAhng7QUQfqu4zTykXh2fLyshKf4p3TbPCoTSV",
  "key13": "5bTTZfAWRAverVdLZrjvyB2UMXzjgH9ymYA7c7FQfAcYj9GXvmz7BraiRy93kyDnCsGGXKhYf2rk1NYbJD1B7KgB",
  "key14": "2Z3EqR2zVehNgUnezx6qjQ2B2w47VhsDeYDzP7Mm8say846NraWitJXDn9kd9xfu5hJTTSdpju6gNepQokWyx3Hr",
  "key15": "3duHSYxCNfCBHa9vkHLT1cmkpV8dSPuo2oMry2UY1BjGNmK3LMZwejibmGvmWdDDGGr9zDXJwtudZ1DVXhTJDBKv",
  "key16": "3NEPM1dspu7httqprDraKV2RogiRVdgeg9x3JoHndY5yteuJJMyGZ59W7CSqfcA471UxxhWXRmPJ8xay1PscDNxT",
  "key17": "FHDaeGVyhTXRSy65QCWbLX5jNzorZkQNgTapp8jB7Wyg8X8UzRC31fvroEvz5E31g7QA3osnb8Na1SjkXA594UE",
  "key18": "3NEdSTzz1tDigWYJfYti3igywu6gS6tBu1LPyAUS8k4Yj1sy4LeJzGURgFQhdBpJxVviP4j8Y7aM36hbVigfVELf",
  "key19": "Gb1r9FCMFTFPp4xoDFauM6n6BFWNoaRJMHYkwNbEFnpCeqadHGJnjEQat7XxBxdeet22rgpuBBz318kk4ZRkUZP",
  "key20": "2sHxuHZBDZmMmKm4SAQgdjvDM3wL8zsePVsHUiV9yGAygdrcqbwqiY81p9YK4eDGDomDZH55P5aYSmC1x3S9KmLd",
  "key21": "fc3fhD8EVDGqkGd9xcZM4Zo4rEX67zLNuzjQV4fbv1B2vKLheXJZXiCEkihQQS2Se9qGG7dU9GCWoyPrGTHzT9R",
  "key22": "2AAuLrFsrmDfT5NehuxEVhnT2NvbCXWnC5XnUTJoFtFy9cG1cMCiG8auBPoiL3rXn9E7LM6mk3rRyk1Hr5k8GHYr",
  "key23": "5bebkVfAtLpZk8Nwwj7RXhCJ2t9wHipMQnWpPmczEzwwTiEGfpMpnC6r8PDSdNtXriNrCSTeZfYvq3o2NCx6VoqX",
  "key24": "4PatsUWQXZq3ErBceHDD3iYfdMmqWDW7DHVRDrEpTWGMxZcwrH6K1wQ8N8LDRjszTGkDkvXn9jggaEPgPwnP3YY5",
  "key25": "37HzA7JTJznxKs6EeMFmN1t3UXjRb3QEHRxkdoyr9QkgBqVUS1YtDrCn8fwuxjVXm5JACW1tp2QvMhsjwGfW641X",
  "key26": "2MoDbs8erx9mDYG4cZdAC1GPY9NZczn7WG73CS6w9tzEtyzBNRReLCC9faoG4Dns3t8HERMVtVy968tZ6F7UkZ8V",
  "key27": "4t8kh4fKztqwqmTD8DrgPj9A52VSo32RTjdxxB6Va9FeG57BUFL4KG6anhugiydJbFEoczraSszM7HAbjt7sG236",
  "key28": "3Cyqg4wWfjAcAD1k4Rak7jCSLWkmys8CBK9ixC287GUqDb1RhFDXo1Rq74SFNvcedG4YYkXpDGrZ5goWP9yWCHRg",
  "key29": "2mgtQKaKJ1btUx2apcd1crJtDANiGQ29agKD7GgFStsKUdtruZQtjLQZeaRbqmR7Ebk5S6BtJwW5iNTyHUr1RhC9",
  "key30": "4dfEmzMHq5k9BJCPcABRHYTN9gsb8N1wxmbwAdTSEszsJ1cW3wsdT9r6Gbg8YomfHnAZ4nMuGRNorZPr1u5kPeU1",
  "key31": "5Cze5ubYvtwjQB1Dtr87fm4B9mii5GJhxgBMrtnBq1Qy44SNienJtuK7rhoiYzJC1c8PUF7UGDGaWa6YhMMYHkLF",
  "key32": "5Vm3gie8LUd9xjWg6XP9BYN5YqL4UvNnSe67KcRipVPAuHQSuj1DG5YdhN9U4mLF1e1N7FChfEQyAWwKKjX44vPc",
  "key33": "5hCDPk5C9Jbb2N9QhxN4jm8RJdw2SUeWGWKUad8hjxna1MfNuWan1BCZTT4vfeGnzE2R5K832mizMj8aoHaH5jP9"
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
