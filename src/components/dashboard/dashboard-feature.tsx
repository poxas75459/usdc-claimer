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
    "5Qcpp4VSVnbodMuJozanNFbAi9tXZUjqKf9oWVnSwymZDS22NzmHAa37n7y3Sb7yKTAgq3ZsA6yi6Z1a36EQ8gQm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "398LNiCxAeBTx6iLSKidKPvkmKh5mAscSc4CqtcKHKCginQErMHLovQo4umRXPoVdqb1NM4cVvU6RoSbfapR2Zew",
  "key1": "45s4moNP3VmpjRDSuzR397EvnG8vTZwMjqahdNbcGJGPNkHD4D93CLMdWxWLXNFeJF6ZYv9pj85cw6qardjdZsV8",
  "key2": "4xDF5cLDJKT6r2is6vALX2W7xbbq29p76o8Dt9Voe8b7u8NxinvwdPMkfvwhFmJtFcSapvRnFWByBJv8cP779kn5",
  "key3": "62HT2EvT3yyStXNooJDhg8jyymTYFJG3k9QHoLDmnd7VT3V5yrRAyDKbZvKpWHnT5QQprK2crnoACgXev26usAjb",
  "key4": "5ZjFJaa2CjRfzRJ9pwYy4CTmGaRP2HjPHjJ97vKAZNbdGHPD2LGxwhDhnHzeDqWzqk8KmLq1ghLHBNirjVqRN5fK",
  "key5": "4DVdSRXJ84WCkBEJoSPjAxGZuJ46GXD4ZuCcVBKLUnV4MH4MSq7kAF1xSddLToL2KuSrNEUjLT6soZFk3XUxsWb5",
  "key6": "LEZ15pWN7vVVJsKwu83xDSQmZM2ssycTKqCqyXogqajEokpZNruHfeN8iTN6do13ZwSGgDEfmEAQ4dT8g79Pyfu",
  "key7": "3hmAYg4NdUYbZWZDiTV2hWHAnC89JPShV1eMWicVQ7xDhCEmZYVeEcxKyDUnUEP1wtHMCyKCRKGFNTtwoKKG44jH",
  "key8": "4jSmJgrerXWkb3XwvNSrUJbZD2b8r8HH3fT8HoinynnGxztTLMgTNFFyftRWZT2ZxnQWzm4kx1Gec8zopfuN3e1Z",
  "key9": "5K3dTtFr352HdW4uetoFErzWUoWHJFQnssMc7apEVsaK37Srvy5t7EqxNNqKrVxiU81XWwKSi2EB1jgEgVdhkjur",
  "key10": "4Mdp11a9igU5GyrQoedR9Sa4Taupg3gh73ymADYkZT9i9g6NfCeDaYFoYBhKV5dP4JvtwB7TryaA2K4j1zaTkDTW",
  "key11": "ofYnseVQWHNfKfynuREA3XhxQQFtFaruyoD3uarPcRSb9SHzgGZpALMzGUQgUsL66nSx5nA9VsuCBDJw9jkMYKd",
  "key12": "MNS2emiWDwZTw4e2aqSiixr1kepHek3tzAgXXy8rQtYM7WkhAwuADKqCZ97ZwV1GdD9XNq7dEZnCM3FLdq57s4S",
  "key13": "5uvo24eqKUwtQNAMhxYkoZFSBZxbe1DzYj4qtVigVmDk4T8CF1Kdf5GuMyuSjW2pWu5kK1aeXv9XYHUdyaJyxwVE",
  "key14": "4j3HGkUGaLcRrwuw37H4DwqZox1DhQdwxCMefbF83aRtw9exR27sEvTgdu58XfvUKruVffiLTtqx6suWz4fNAMYi",
  "key15": "5jCBGVmsCR89eUx7PzpNLBczBP4SdZtqiqXaX61FUuJZ6iyGvjqRoM1YgMSvedXLg3zHvrWNHcwCMLb4AsodaPdf",
  "key16": "4pCJcywyionbtA6VXgP5ZSvek9aTbsLu7LcMTPs25Wfk1ZaCdv1XXgrRTRaLQgMmmTvfk8LhdzrhtCHXmsA82Js7",
  "key17": "5uPADLz13f52Ecg4innC8MeBqaC7ftcwXocUE5EeUqPPQukF4KTkWDyXk7A4Z8PonMPD46cKjA4aPD4MAx6g7emZ",
  "key18": "23nFLYLWcYDcvvLkD5BrW6oB1TPYY7Wyp2SbZm4fnoJU3n9Wwv9hk7H1b2kKXa7TzMJqBTHhzMM8mK3E2EvARw6t",
  "key19": "4ZuxvbkdE1iEeMMR8a2C92ZLyZk7Yz23Qh4HxwbZa6ykzjyi9CQaZ6z4UnetCyMMEZpniAcGf2AGRamGfokunD1R",
  "key20": "MDephJbuHRUjHfX56qEuS5jw7t78eE8Dzxu3iEdwLbjuDde8eerQpGLaCUgQ8XqTLpoyqCXxAmAyysjMd54KKVE",
  "key21": "4AZYngVchfAiGCc67PXm13poVECMwWTPWGzvY9nF57QDnnsnJjgoxasiXWHxm97BAhfMJbqRgEbzEChcQBLFzRso",
  "key22": "557oQhKCyEuZ3bMdzRNCCWbF273igTBMuEvpgXjgscKwTyrLnp1s7Z5qyRXMFt2Haq8T6eppVP83DArREURuPMPz",
  "key23": "43socUtsP1Y98doCuzQ5Bz1Wf16KE6thN8ApD9aZcdDrYU1s2HPQSkhPyJA1nmZCN76RxWTnJjaYytPrbpsgph8Z",
  "key24": "25kFQjQxtt6Ljx5bprkoerVvzZCVfQSFPGGQbJXP1pasUUnjJJ39k5AjR6RuwidbbefCR9WvzLFEKVcWFE3tdQSe",
  "key25": "5Y9xBDuJyRE1ywVHALampvnUokpUF6wJ37QV2rizozi5NAczBZEWru6eUrLGXDfuHYE3X3VdgYL3pkTqQ5XK6m6F",
  "key26": "3Q9f21Zm6xu8G9setKfSf96bJL3VxvR8CFB4LQvMZNxAPnHhKmKRo91qQWLtzJQM4Y8bbH56hxTap31P3QY1QpjT",
  "key27": "56wdvZQ49vmqBeN2YLTfZWQn3Vw1RC7k4wTw9Yz1hb2p6tFKNNHti39kqjADd15ALJrBdKo8xfSm4Ecds4iqaagK",
  "key28": "FT9jPPH9NNghuAnNCKxRZFnvxMx6YT57nRJbNrHcFzP1eZAaig6W7jD1NzdSPFjiVPpdtUU5jmKVtpXodtJiazr",
  "key29": "22VhXbAMuGR5PPc5MiuWKPM2EnSSwEi6wofo92VYdbX4xKsTvBhBvePVXmo1xXTWTDLXstr4c1N1FnjrQocDQD9A",
  "key30": "TsjA3gbBnJmSjpfPki4cVw3iL4xhjrX4iC3N4CsLSNpBq7SNbqxUu2bU5vi7NjopnQ8LZUc8eSHgaDkBZyRE278",
  "key31": "SG1h2NehBk3PK4WZ1u7pn3fY8sKnqt1kUAHFkVMPXGJDJDimeN9tmytzPjkwBZMJMbDpaUKj1Gm9Us9yw5P6tBu",
  "key32": "4rHm9qBb9L73DPRzSLcmkbddYPwcrpAGK1NyN7kjn2ewwLb4smfCqw5pc7Ck2UtK7iwjdgcqHYABpiwvwLaCAMnC",
  "key33": "256tQGmg2BQVRmt12RKz5hGfFBfS6vML8joXpBpiGk3VyPFmMbnYTagC1hMH3Wux9dW4Z8yFpH344MaF4HvSYDXV",
  "key34": "2tiBx8idB8ZsremoU8SFY4cs2N33z8DG61vyWLpx34R7oobcy8aX7GzfBiWZWR6Tdyv2RTAoBQHF4CN6Ctj6bdaQ"
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
