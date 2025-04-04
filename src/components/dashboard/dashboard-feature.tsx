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
    "2Hk9Jb2ttcm4F2FRB9RU1fM8N7FXPDWSZ6o5a7jqdeoiRHNgZ8WdN2Xxqx28uSrM3PuNbHonPzHEtbYzmdcXJcrP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3N5HDVnZ4AE2Az8oSaud7EAne9RBSninwzFubQc8kckZGC2rnhczKaPid7htjaLRN19jNrDj4Tomh14cSnL92i43",
  "key1": "4big5Krt9Y62jxj7VvqKDKk8DDAWxYAqJRF3QSY24KnX9L8JMWhgXkBTVdCorSSNuEcznjQSUqPvwShqDMo38zeh",
  "key2": "3JP8ExE5bLxqpgF3WoxPbPA8KkASvFdPeVBAjg7cck3H1EoJa1HSPm1pZK68H5tAHKf6ix3NMrWj2cTy6aVuV7cT",
  "key3": "5bko1fQUGLYhMsTiL1pEcPbwDxFrewDQ5cM69UyaZcekhhyZ2ZgjVxUKC4qabUVtjtXSbBtyP8ZhhpQYke6LBqeM",
  "key4": "3vb1GgtFMjWRUNT6SrJTs7bhbTQqWFxi6ChMKEQ8KnfWfAg9H1QWFYy8obHzh9kYSb4TECm1zFV6kitqB127CZGn",
  "key5": "2EK9U3yHCsaqyK9dUZ5yhfXDnMwCJX1BUzfYxTEZmnkKNTriDqv3D6CWCqnjhnETvnUaRnYR3EwPJkV9CYXxpMkY",
  "key6": "3TFNrHYZsh2StCwVn8K9BEthASZGkE7yJBtv2NUGThowAitBzoQEvrRAgvujMa2yB7RwMoMHFL91YYVDdcjyk9cu",
  "key7": "4dFHdmzPqcrPMPpAqfdsYPNShSXrzZg5Xe2dJvK2FdCTWr8AqUmoqfARVtzrfXa6z8KGd9nnNPLwjt5o65WW84j1",
  "key8": "21gNWe87d4J7KiAeH5UE2uGFxy4b9fawoYyCxDfYZAKh9JuR56VB18dTsaKbAQNsAuJBkdc5pTqRszNM9Pwzmif4",
  "key9": "37cqs79kQ8EL2ywTdfJuKHw4ip5e3HsrFQrZTnfm147AsxgRqe1ifqqTbDQ9dX2tpqmmLvmfmkT8U6ajkmzuEkKG",
  "key10": "64rGZHN4oovLt4fAXv1ets1Xfsv77srmD2kzdqQwTNtsmM5uu8Z2DQPUQVaTWpa85S4JMHR55Wp4HejsBcR4WqNW",
  "key11": "ezrseKFUDKzLmGdsQbqRjTMcUMFbFLz52M4jKKoueVg9SpoZxSskp1KpMDA2g2DcABinaB4TKWcqdcTGqUnEmik",
  "key12": "3qaTpQXTJ91AcRJrogVgEE3BfHQAS1y8sSXem8myDeXzRVn3UgNmEQYKxizCGUiBEi5HVCt7YQbSxr5CEKrENm66",
  "key13": "4JYbCvQkJtQPZRgnea25p5sruUYcY824UPNyt5PtKdMupPttptrByJ6Efw1AwrqBwS923BvjAEMWypGTU8BxG4oH",
  "key14": "k9VJKaWutVhwyDybMG9QaPYuT2MmB9FWRKL6m1QsBW74as8FhczCTVTLoT1dFo3sC6dsBu4hZacuLSSzoaGQ2uR",
  "key15": "4VrTkWaqt8rAboGMMWtKSAbPfLYKtu5Nm97Ze9yX69rCb1g3P7KL8TQ1CyoVv9Y3TmeNMjDkKiMxumPVotNihn6e",
  "key16": "ZpinrbEQtokaStW8duZ9V6QC7TrEWJHxDehns7QRLFvWGARjBMvrkL7P6hw4Efro5jkNT2cmDTLAaG7RWWNKmWP",
  "key17": "u7HazzTMx4TuStUEkFugLEP3szcJ7K5ZWd9FzX2Ptf4wFVE318ezCz4jSpZVm5wciEo2fFWxfXFXnwepkBSWNKk",
  "key18": "4usjryQqRfby4P7UdhAazUrgx2CRWG2a7cEZTaLAGLe4ZQFamVxZ6xydqQ9VFa1UhQcqoEXhujqGo6Uqwf9xMkaM",
  "key19": "5LiTeV3LYbpkogqNMzhcXLFtKTVNrZZWfu9pLJ9GDKhtU8XXYdBu45yoSvrV94GBUNjotby62q4G7mNwHQrTTk6V",
  "key20": "34som88V3VZRi4pe3euNkKwFUioMQ6WmZCcoN7Nt3h1SDwabEz24BQ1EaJEUarEaMReZQfbciWrM2Gp6QhTbXFXA",
  "key21": "4ZL37ofjJpDsav3qe12TiwXWtHajEbkDr611PUetSueWox5BHT1YsFHcpMF8N3ro8oGV7Vhn9NCePAR5yZ3jZ4BG",
  "key22": "WiW2XhEzCJXJniwyokes5zFn4Lf1FWajy3MESeUn6E5qvEqHCJ2aDP3G4aGFGHN7BmCZCEpEY3crLbTsZdKL4zS",
  "key23": "66Wf9KntQ6D4pKXPzCsgHEYm7aXCn4UurH26Zi918MtJ4o6Dqa7GY9A655Dmn29nhDaf6U9wrpg946hP32eDBA6w",
  "key24": "2eyhCdTQybbVv1aBmMT8fvis4N7grhGceKHGoA3LBXVRTYKJpXdX9Af8L4atii4cq7FPKpA5czFFEMS7U9o8uAYN"
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
