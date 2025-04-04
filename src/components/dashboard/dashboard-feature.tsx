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
    "jHodycNKxxHkrYwiFTSXZvd7sutvcWnERN51pxiS1sYejYtta3uLE3nAxg74TqtnY8LkN4wP2pqWXGXe2S6SQgR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6oVTWL5AgkTjeMicYgYHoaZrz1ocjKZ3QTcKnaQMzhRdJBxQhAw3eteqZ47QTMp7NQVztj4AJ2yPd1hEatK2vfG",
  "key1": "476nBtkC1KCYQMoVaEeDan5KNHj2D2w9y2HydYj8fVSMbwmXR4DoTUNRXsUq1NV81ocrqxnvxzKUMKpCe8yQN5fq",
  "key2": "2kMrm6ynYE6XAnPgdbeCb34YvMxyBqENYWjuETTqi6NEfkmXoPWbAoNjWkgDZfU4hB33QKytjbysw4uKNpAM8hNp",
  "key3": "4J2Kic5U9TPP6U9CiyHN38MgoC4BiGwUczDMfLHvhwPV26Y5yNTep3K9R6psiVzmKDnBQtrnux8mHVq2MWV6smsB",
  "key4": "4dkvtXyjiwDs3a8Z8eGcuki62HhtmKPUT6owJ2sDc54HpggCt4sLcUC7DAsc1gBeAzH1KtdBb9ak212UEeuD4CHW",
  "key5": "2pTx2ezP4oRmc3j6nA8JEP86YAW2S4qWJTagWRDZGo1N4bjL7uBSTuQFSWzDaXw4cZe2HibTJn8HBpLoYp5eMCDL",
  "key6": "5rWMpYmmA6p2U1xpPC1n19cktvxAAqBdQxZ9F6Sn4M3Xw2z6En6iwMLfkX5fgaetCVN5sB67nZNQNGsXyM3gAgao",
  "key7": "4wEsLqSkDBb4LTSP18TFFmgiRrorKdTeaSQQhHeGd5Zf4LPStQX9tAReYvhCem9TnnoEcvPkYqRjRiCSEfpxEvGg",
  "key8": "5ViLGU5MUA5Cet3pdSNaUpsMKAzLpJYZGuCKex8GAAeGcxdoSjNYq8BXe57BdaZkL71vahE7SwPuAbW8iv7qPeZN",
  "key9": "49rsPgmprJ6A5c2bTaRjGrjXhhugZ6fv5T5qej9drC6JQKzWe24WsyiXSDLd984p3DgvQHzovKVV3zyu41kVF6qG",
  "key10": "spepZX4m9y6X5mMpkY2gdX2txTZ6AJr8HscvA52Tpav2evg2nUvstuXPh2ZJvp6oDnWsSedoyg3KSybTJEDXq3S",
  "key11": "4vgBtoopa57e5qoWLLHCk9BCvijqh7PiEVF53dMpAHAVwrf7UbLFJ2AutwWvgNwskbBKBvoHgLT2Ti3N9sPByHc6",
  "key12": "3PdmvxGeqbUQE2aLQb6npWCpDSE967fBKNJ5jpFAsoXnp2pzroQVzrh94RzsM98gkGZC3y8dJZt7fMnX1HVUsuts",
  "key13": "AcV3Z7QWVTh8MUHcvL5fKhU8BmFnQ1P1BEEbyzp1SQtbyUWgP6L8TSpW6XHYFPAVAWSz8njhLjdbQLickCkQ3j9",
  "key14": "JthDkGdUUwJNLqrwxGZKq6tKufHSCVDrtHRULadqXfqLPEvimUFRx36iy8X7BVpXLWj9SG1sE2d9DQx3dHBNZ5v",
  "key15": "8rW6oGg8GhyTRWSLAfVoMreQeQFtVZu68HgZEBXhM58FYjWUB58is3pkFZ8Z9cLdpj6nFkf8JjAekNWN85VK2LR",
  "key16": "5VxU31ibivzNVF3vRNAZUjedhUXXVY7NnKEgfw9dpanfhHcP9MXHm6rETzZrQt4rnaByjPWN2ADeq2Xy94ZnS2cy",
  "key17": "3nhpm2w5TauAspeCJnd5vn5B2LY19fJY5bGjHYScgwsKoMNi1Lc39irsaNcPiseqeqQhWt3wkfJn6mqNEXEq68Cc",
  "key18": "4vtxoChfYW4wYoUBYUGDs5fUJmPaEr4BY56kVQaQ8xh6Ce8kbJxVrV2mqKeq41bqsJGyftKrakM5KVsSWikyFSCb",
  "key19": "4hQWUqWphrVw1fNfw1xjWkWjbtSe2nCm2FLwQnew3FZ7gB4BKs4AJcQTUTgPzZoCApxYzuuKcyh9uExUWExJcWkG",
  "key20": "ex5LcYkhrtCGNcHpKG8Hore9zzRn5QciUURnMSG5sc1JTpeWASs1RYxKzr15vmnR2E2mjuVBwAcPSigbgRAvpyD",
  "key21": "2QQHEjhApFyDoBwF475Q8XZxgrNNu3GbvabS4CGQGJibggUZEceXHZRmayySzHkPGWHiBqVR9c5fMqwNMSw9saz4",
  "key22": "3n8WGWN2nVu38cKmSpUaHoay4HKNyrZiVeyFkt1GfvYH28M1VCgXdCyj8gLwc9nwi7i9Mtq3fkcgS1M5JTsBzxHZ",
  "key23": "5ReHMtksho22ujaroTWTaKMRe1XyU5JuN357PGuFurA2YHzZybpYFV8GG9FpjzN5HoxACjR5kHztpHK2WfjhCoPm",
  "key24": "5tBgZLZRY8fFrNvZjtUSvCJU4eZBz6XgHuEQxUfBavyCZdXd9SktefDzcsamoNPQUwc6RuSTPBmWVdNS5E85Kczi",
  "key25": "5ERNxstPdRcvyYguNfTy6NqU6KS2ydi7Nw1jZXYF5FgVRkrzXHdFSRm4rq7Gfhbn4kC8cSsqMy8fUY5S71e1SwC5",
  "key26": "2Byy3ndLn1Pjzum396rkZrKGyHfNeEaaHeprdVHs21xVXYSgtGxGbfHx5GCX9hdqpQCnyGvbNDTnFnxFGyKebhk1",
  "key27": "5Tu8kHcEAUpBsBKJDsyGgGzD48YnEUQZHQtmuMazj28vvUndECzD6Wofa2HdpiDfA7n7Vzofp7bm2Wkk7AoxqoZ7",
  "key28": "5SMnLXJ471hzmbVWxPecrkjqSTUaf1dWYZpca81Ev64wxN1KGfEqmQ1utbyApUX7KMgXiN9Pe6pj9FeJkb5jNjiG"
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
