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
    "oqyfCuyfze52PSTXf1MXJhMyMCK1KobqejsvLufUViaQiA2RsMed8RMeL5BhqxkGS1j7ZYpScX4ESpHUKHyvm4Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CZr8gBhr74W1QBkPFjBw41GiMsednUAzET9nwWHgT6eJ6Uz9r81LzYJDCeE2xor3GpWd95ptnBPs14BZbbvPetP",
  "key1": "5HYV2XDqj4XGsbZpfUKbY42pLdkgN7LQSFm9KK7HEqLBdkYyQkcGK65ym9LFefdaV8CA5DrLsaXFKrqJkQzqWoMY",
  "key2": "VzQtXGQFPy5YsLMyQ1skTZSgAqL6qh3NZ4sMwgqqJHK1r3XJGgeuPKBH2hTrXeQotJqYE69cMPSS7QQ2RyitM7t",
  "key3": "4RcZP8dGrqwt5xvdcGZc8bF9eV65M8Zf88rPWSq9zsDRJVAv6kfrSyL8Gjyt4akMUwYA9mfuvahpHcS53jbaE5DC",
  "key4": "3aDMgbLCnLh1tJnzqrSBRriYdUMbuLWMeW9QtzseafLkB3yC7a1L21To5cJUCUK9ubsC69TN2YHuiiQdyQPavTP5",
  "key5": "43wm8Hs1KRtEXMM2DHXvo2E52diuvWbTKx6NNP3m7QnWWmZLkkEYKMeMUHc5wAdBpDACqoH8mZzi6LLvD1tGS1f",
  "key6": "3oLEahzUHPhaZcnRcxJttud9VRvpZAe5Gn2u7nu8ekg4zUkjFamf6kzu1LSJP37CnVdKPVjtr77iyHYye1UmvhTG",
  "key7": "4Jpcw7wZJLrmz2Yz6KM9ftUcrYjZPiAZuKkVvFLt9TxDDmsqSFDT4dEirztTbGdeenteYQ2SjUEzsgZx73HWfYt",
  "key8": "5BhcSw6Cg6u2pGyHFexyujV8qo3h4e8veKT7GA7dyx9sUkrvfTCssC4QxJE8sKG7zyFz8tLp4PzZpkhkxWUVLS3p",
  "key9": "jWdosPGSTB6hMU1tFcKtiCgGHQrh873Y1UYcJSCu6NipiE7VWLZbcQq4Cct7iombqzVSRPCcZktVRBCAuzd1FTU",
  "key10": "5bhs1CFmStXzVq7YzEaZgwSQtz2naBTSaexrQxme9HW7CBNtDJaoNeERV7LW7fG3N67b8n6yJ5Ghc28LoM2EVUMf",
  "key11": "4PDmyhMTMeU2g3jdsd4k2TfPEf1tXnwq1qLZTFzuhnQSa6N2qB3GcAFSxKPxmCZZe6qJnf87EYogBnMsYdTCXKjZ",
  "key12": "Gzzp7pzkpT5CqRg3coU4e3uzLbTqNy2E9WYBYu9jD5nqVqcsrqm6S5mxKCa4pyz9J4PbpavtsEweyXjj1gQMMLh",
  "key13": "2znxYcteBfHjuqrEsYmcUFyvK1FM7MnBUGJMHpBKUoEvMN8BYG3NYUUBANGiKnxb9SPyoFPyTZphja2cCo9KfRvp",
  "key14": "TokJMokxWZ4pw53y2FqRfY22zbKj8Wx5FA3FXLqhHyDyQ75Sd69d5LZ9ejbgRL8HX891xfXgnQ3qKqJ5oy2fNjS",
  "key15": "2stU4hrccqFshH2mMg7rJwbHqEMPEgWRj7pG6qpXWQTpQya8cwLq4tfefw9ifodL2g97rN1QXHdvd9zYDijSjX1i",
  "key16": "aUC5bSHVLnhAHdHGioWwWcAiEbru8dP5DWQp7rMGNUuq3PG3H764ELgd7A8JW5Wskmi86abvicqDT4FL32rm4ms",
  "key17": "4TpNV3Hbjvu5qfUEYp9VMook9RNxsDHz6ERCHFkYxPZDdSSv9ZJZtRFs2q9C3RJVpp5gg13XCDC2XXGaXxTXbeb7",
  "key18": "3c3zB4j7LiYQepobJACoSSC7KnHPMzFYCgG6iWnAtKitHBXrdXb1UUGpxAE7tZU1njwHiTmgKW3p9jnu2TMycQyk",
  "key19": "BFHDjcjwm4gULbme8fj2zXvmuKRUZz6R7ZwiHE4nyNp6k9hq65BWPGd6CRoVnVSj1KFkoAhs11Fqi3XbCRJkF4e",
  "key20": "3XxADhTnf5RnS568WXkEKb6YVGdHQCDGxnSr5AUjPR1rLeF9oqYZUwr2kT9LE8mus5uXh8L6g2LXnJHzHHVHMamH",
  "key21": "4rSyDbVE7Q4jRCwoEJCEVDeB45YQMMdZsSTuGAJegMJEjuX7iQCLNmppR21kE3DE5mKGmHH7gra57TK5JhXmgFc9",
  "key22": "2VRc8ivmzieUBv2AK8xTHicgq336L4ckC8s6pVZ8Vz1r4ucd9adYxEAAVoSEuopAUHHvHPxGXy6ExKRMjiK7gUhq",
  "key23": "WVJvkEPdqMaWfh1wGm7mnUULZJDt3WV6E4d3C7UvXn4JeU5JJybev5GwYguomA619orE7aqXrGVQnWFN6GRFNEQ",
  "key24": "3G6icewmY2xwY7DGpt9GWNoU8mmfya7szrCagJWScBXqsyA27GQ89bt9ki1Uu6YYfsMs9yjynJkp1FnanLcsQjdJ",
  "key25": "3WVRGMx2hMPGja3pXNVVuPjfi2Gn58CNexAUmYJjjvx3fxPwAWicHcab5KFM4XHsPPxopz1fknBhqjdu48j7EpYj"
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
