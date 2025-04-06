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
    "3J7AFSHq3h3eQjm3EDHBceMk6gMGav7eGGSemuS1iu6Q2USXidin3n3fk5rvRPe9tN3fmBmwPkWtmkDv4rcj7bwX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UBQEqoBG6d1xcrGb2CmepzFfJYdzSiNfJn5fST7eCcGLAbPnfEcymFzkUnByWYYBwmGaec3Qb2iqnw3meF8usg",
  "key1": "2YtwtNxxNfxYe4RWLBbNvcUwi8dcsXGjvuQQUhY8nLPN6cQ34Vz3FrCJwtKDvK2FAz35HjfrvBtckTCgGpdtuWBx",
  "key2": "3DpwJcdF4beXjh9x1MdVNr4FafDDKUG51Uv1cwi5qcLGKvhXHB64dkCMcEDMtUsA1bu3Hy4LCKqSrvJYZbffMdn9",
  "key3": "3GtY3NkqYUuL4DmSzfArXrBxxkC2SLrkiFu8mhkXF1ZpQS6wRdnMw11gNXoKwLdP1bQdRo82Qe9t6ipyDgM2Fn4f",
  "key4": "3E5VyrUrT11cjj6L6gQaUAGVUK7sTNAsgapPYDNiSuHaPfwEwg9h4E6HXZ2cJ6WwfYWuW9eRnY5nJv3mTRAiepmL",
  "key5": "2qBk27aR3XWMXrLvZaZvpKMhJ3nKPKMqEa1DcgLspyzYGsYRMxXpzjBEjVKoMt9g3QJmmThoSgrJP1MhPFmQzuwN",
  "key6": "3gDUheamZtSg2zovKVbQjHDJ47wSokbxBMbatDjXv3vA9GotpJdTd62e4cV8B1yTcvP3JGt9pGNrndfnMdQkwVNe",
  "key7": "3PtK3USphantGJAPAYfXs4SJ1N4rzUB88AEpVQfPtB31hT81xNqDHr3sSJf2ku7mcrZJQMvK6p95dRn9H4sGmmhJ",
  "key8": "2sZ7tswN53eRqiEXovVCoPrveDbJ1aKbL1mn96yJcaBGGD6skaqV84qafbwjPNY8RQnJcTY7U8dy4tNexEoYPZUr",
  "key9": "4jAMAy7Up2hHVZoNpvNZnLUmSEsQ4PdASpcUWjngiJG7kVV1x3vdkWed9qQUbWVhToH2vA745xvG1MQ5KQjykxGP",
  "key10": "5ahrxLiij3tp3TFkLng21fyii79wWYzsN3Y9BgaveSyu6qiXKpvxjbpgongVBoWV6jHih5iTbrEkMg62RZVobmGA",
  "key11": "489XQu7uAA5gsRqVPedRkmJEV8CJnNT95hLrsxjkMygQ2PdKumCcByhGZiuZkg9AQki4fpPNUW28McEtABWwUvpz",
  "key12": "361NZoRLBuWMJvPvVsnEj9da4FFaAHhowqUdJxC9ax7oLwkShQzvZEfHHtLFXqoiCsR4KiyMMkGnQ9RASLeHK2ER",
  "key13": "4rkN5SkX84uKQneoGLmDs92U2qdXuz4A4hVdqBuWX1gmjqJKiNhMMUmQPztV5oBTTiSyXv2mpaYHCkgUEVmhZ87T",
  "key14": "3zed6iJBwsZL2WWCeYZmEmKSGu3ET3S9YXamukorkMdweBGsA6v5JPPkqBv6LNmAMGPaKqiQDqa8nUi4nrnh4nWj",
  "key15": "433jEYEoinjf1XnchvbvirSsCyZU3GaMKJsYmVc8w1QWXCQHndp9BT76oLYwNaoJwjfTS6aFdCf7yqK2pb9W5o1P",
  "key16": "37qpL7ViaG5vYpmbFhmPQER9fqKNckYPLU6zRnqcZt7rYobtbNno3mZecfaSGZSZwQhpqkF4Y9phy2FiHm8xxRVR",
  "key17": "5dCeDFadE7Rko6b7zsSUEznY91cgxXwRkzMDq94eMQDR26yZiC6QDj3brP1HJiRUPv3zfP8wMGRFsMqHD6MRT8b5",
  "key18": "2dC6AMEFdmWB5fQ8VurVWXSBbRYmKJQSWm9XKd5Mc4cvpLFnjd8cvBC3msLb8h7R3VBXZSCGBgcNUaFPgFsZfGcE",
  "key19": "2bNY98wMHUFw2Lq2CnNzZJKNksUwVBreN7f7zhRtVGVbj34zuApnFQCGBtnxruWAY3wxHwhFmtYFweSnf8xydmHh",
  "key20": "3ZvGTxCfMQpznbcUP45BLCkxNneQFoJmZUgHTgypzbhHpwn8PBam8Ti7j9vV1S9sfjTdp5r1Xx4pQTEDbVpMBAkT",
  "key21": "2cdNdNE9V2EaC79h3fW6JBRTMrVFqGrtHMMkqWEgbWamcgMg7RxPEBD1XYBXGw7vekKDyQGoPn8zqq3HjtKVUTKP",
  "key22": "4b7zjr4vrzhHTumdtDrGGUVyDFCFmtUAffkm8DHixAXK7LpTdTNsgEBzGEnE8z1v2kKs3WZ4rHvepZsfuGgqvbM8",
  "key23": "3WinvDkvXKtLGUx26LRbxTDKESdhUHsksTkUfsw3VvUSfRgVYvMsbPHcXS4Jwzd2VhReWkrQ8SqrP7Xwch2rvFSL",
  "key24": "GouPdSfGHbxqDVYWuJavs5hSZJGmNG6CCq68s4nhYvfGcN7z8j2KXPxsKHsn4resKgx4CZt1vFvm8JVapkzepKS",
  "key25": "4p1TpFGUyRTjDh3nf2A1peeGHz7XtU3h9KYyeViFKMszL3LZeWeqhTtK3JP4HrVVZJcadbsiUM9LXaTT7TXhAXsp",
  "key26": "ahxqNzhYyRhhuxhFPb2r7AUD9qtrqv8zZ7aojjKLyh7mjCFkLYN2CpX2hj3NucVL9gtPqk2o8nGix63QgmDBtJC",
  "key27": "dUkxW6cEoasJKZ5VsKTuz3TdueDE5fyu6FpCNxpnxRMN9httccjhf7aYYnPYhA9oen4dpWZCGY4T5yMqv9q2Ag4",
  "key28": "4f9Lox7arP4oqxJ5aYtMFgfGc9aRpYHJjGLGQP5a9CuzUC4KVxNw5gqDMuMJcnVAwEzbwSj3xCJyv3ggZPMPpohP",
  "key29": "3pNWSRjmHV7rBySX7wYVtqTAwskqWCWovcQyi1ESxC82hr2cMAQn3HNwGPgHeFoHvVBPwDfFjNh2rAhhx87h57n4",
  "key30": "3JspKuBa66q3UvakLMkxZ6VWgxv5hPfNuA9cmLA6mUq2hEqtN8LARPFi8hcPVhv6LNTd8ZP3PTGnXCLH1KXVXhpD",
  "key31": "5QFsWYN8jTPDrViPVEQC69tTf6coH584EN99gKJ6xJefThUEvXszCxnjL3dyjhi3LQfkuGkQZ2nSbdJzvLuoHmW5",
  "key32": "4yxGL5Dph98HT62FGQC4A8fKuUkbAUJfu261W8xw8v9XkEw2RY7WeNrUaS9dHVVonbWHZchvp8BaUWVY4hq8Bwkf",
  "key33": "3tURjgE3L46tHAM2Fr5fUpU9JaexsCeehuaPiudpkLfPMLPy66DVVH1SkRmwCY8oDGLksfdQgtFRRcksGAo9iKe7",
  "key34": "2SWbzotemqUe8qZNs1CpTHiR7ybXr6dU4xmBVR8fuCrFBWwfxpKPutC3p81iNHw9aZnH4BvNoojLzKcRSTgGyKp3",
  "key35": "2AFh9vWgPcC7mFE4Eo3W9vKNUbFdB2YHWJ2hMtkCBJAZmXGqJa1gj6y9nr2u3HMuoaa3u1teq7ZU2BEumfw45Fap",
  "key36": "5dYNPMgp1fixxa6Hi3xqLLef6ntgbz3KACMjbZkUSuHe3qGdCrmA8EWHPhLh6yJf53eN2mbbZ1ZM4rPGRgXhAHyw",
  "key37": "2jrZ1eGaGSKm6mZym2qsGCrDjcsamSRx4zD6XrxbvGhg3hTX4Mo92QHLo3T2gP3s6PxzxvzKAqrorSGb3Q2s28go",
  "key38": "2n4BDvJ1zAR1j4ESQmYNkGrP1j6KUtuKVf7Sf9WX1bzMRVE3mziAnYWbqnMuGXwrDAvjtgxeaUXvmXLVgnLcaKrV",
  "key39": "2drPa3x5Av6iEpje31o9sPa3CTiiw1uwH6RgxV9oWJkBbFubKzWkxJAudM2dYaFDG62Dz73QTouWGiK4jB3zn75B",
  "key40": "QqcMnWvz9TfEFrYJHsYhRv6c7D71UGi3BDz8f3LjyvbepRXcFNownmWkAVZURL1iBdpwrj29afrb6Ax5oGareyH",
  "key41": "4uScajr7fT6HMZYzo5Je1hSPBPMLT4VKuDu793Wc25rsWuRkXML2MarcqktUc8DSc766nBVPQCVFuX116a51nfsg",
  "key42": "2skKgeF8cUerP5KsW8qkwC7ZkGTEAGHJwz3rkuMo7QaJ3hoSwKKZZ4HzgFD1BcQtL7VNNPBgyF6zaP4pZAZNiE6x",
  "key43": "sHYabzbM7weZTqCYwqreuKhcam1Q161su7bzjY7PCvvniXNZFiphfX9UBqZTf19RVnm4gCM7ePHzPjC91cHnzRa",
  "key44": "3PzTkeFYrXHhjTc6NVioBNEFqjPt3x4RrWbqXFswFnvBiGmGrNZy4Jd8rRBQ5NEK8HPSBk4BwjnAQpWXtZG1ZRe7",
  "key45": "x1CV455VV1TrBTBZiuuVve5zAVM1onQ4GHE582AZTtVoUeieH6VRiGhMLVJmJGx8yEaz3aKccQi8TVmNWuhXzZk",
  "key46": "3xvGmvDouxLGNwAfJzPDygb1eMtn8if3DEyuzHVAUSbvFgCatnqpKGjF1XSKDpHK6TWAe1S7GqJ7nAyVtHMNfK4Y"
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
