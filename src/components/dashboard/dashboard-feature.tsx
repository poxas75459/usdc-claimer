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
    "4sjEbxGni1fhBoAixKEqyx43d8LG5nYnLGZEtCyDKZV4FZKBoniE2ARRVMKZTjM2GZ4KUjPVsaGJ7WweBwyKtmDp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YzdGPZoVBnFHi3tfK8nidpQcGHK1FuDgv8NU4fDfw4rA5peLDrPUQXMvMvhGH4n3RTFSEMG9QP7S51R5dTecFvg",
  "key1": "59CLT8i6vmpTk7pEjWMXEzFA8GcahziWX2wNNWtBvCz5iZ6EwT8E4nV2TGoxsKZBCjC9Gc3fLTbt1GuvbVqeoaMt",
  "key2": "WN65TgmibdPr8kyMPSoJKsXAfgaB5ZwCxtLzeWNQjZoB5xmrXisuAcFoYVpCFPAXM4Qvj8xwyediwRP7xAFTpEF",
  "key3": "4RHAecmbWif7T8mptpBbRZ3ckPgZEoLgMLcmMNiqfbH5vFhmzuRjActzxJcyK7ckCrrfMHfUxoqi3bPfcNiewbz7",
  "key4": "MYC7QxJKW5tsDrr4tZaWZMMVMAyQRqSAXiyYtCm8DufpMnouKFA6JAeErHJE5sAWsHUsr9XLFYHcHqo12mWjoKh",
  "key5": "5yErM6PY4pvLtHo4HiKgZkEdZQfnWUKiNivT8DNjPG17k5ddbMByap6N2EDKvS8je8GJk7nrDR2nZ4ZivdvCGBk7",
  "key6": "5ZYUa6diLoGAtwd4Lf65cMES4gAV3Luvf2wFpdzNudp1GPumEedaZVjhGnDq9XfLh4LW9iwF7ckbZgkJUL4qhhgi",
  "key7": "29VbDu68sy2XjNi5FRHhKJ3nzCGkiuihNaBp8gZr4xNHtaTmcSwD4CsBDBVioszMf5gZYrY48veuiinkY1dB6j5T",
  "key8": "3RPxSHkuzDMCPDN55GRnp3zWfYYTnsE8pLgin2rNuAAKMoe45vuD4BDuY7fGR9sCwLY57MRUYaxBe6zrBswsHSpx",
  "key9": "5eQgkMiHa3Lw4eSJkbWREt2kReH4zZNtz2ryG98DnYRxKfjsZ8PeAd2bWc9QNb8Th5ZpBYshKgyoFPLmDNW3dJCE",
  "key10": "2B5q8itQ7sRVWhKEQdrVheM2ZwP4jyDFDstbhH7Hv34iHBvjNfXMX8q2gGCH4LrSR5La2A3RjcTwp2ikmPC8wbe1",
  "key11": "5LkUa11upqUEGY9evnjpK5M1ATvnvLjuJKa7yiQX3ad7QwNuqaZMEL4mU5HXtL8UDjNK2bw5PxLxQYooMW3Fao2Y",
  "key12": "NR3crLkfPUk9vNai4hyuKzVtwSXqDHqVfk419EyyDovnqPENF25z2n8kfhocARznTRERMewd1Kos7BeAKAHtgp7",
  "key13": "3Ax9P6upi8WNYLNJ6yWELmdbw76TuT1rNohVdzfViJjS6YdsGguBBQTF9B8ErsZNVVaiiieXYReYoNrpXhGUXBdr",
  "key14": "4eFDWQxMrkK4j5MkSST81DTxfkaxBMiuDd68ce5248wf5UDnqgUNz2gNhCsXeLPFCWrEh8ng7zcVsYLYJzSjYuZE",
  "key15": "3fCN85nc34LoFgnejZX24rdmgPsEXpbDzFoXy8nxSAwfR9Q62sjZowiiXQgGv26oaYSN1i7jABEeV4vuCUj5NGtv",
  "key16": "4VhsSxBhPTSReWGW6ZxmRAYYt7ANbdtnmd1oTR4Hb47Rson7eSCmsSTAJA7aX83CuSGQoksDUu1aAYA9WAGpeoJD",
  "key17": "2sKp1HRGo7KCebuuHtPA3JceGp1kUED3PmEZrfjDn6KUnFNw6A633j3PQ4PkakERrtuWdkabyUoJcPtooAdjUK63",
  "key18": "5P7Mx8Ztf1Yvy6SyhvipmeLEVJzX3ZCpTrxGgmPk4VLhRoVU3TpqFg6sFRaZbJxoUzhCRcqECXn2WrezpAP2uEpa",
  "key19": "3z2mzTuGszfe52ZKh9JmDAFatwJnj2dcypb1ckWL9TkFUydXPdu2sLipgrpc3opTMGfn6TPx89gfopjQMTkCZqfm",
  "key20": "3REu3o8umvdJ44V24g5B2eJX2drYctpqSLSQnduywbWpYgYTJ5qdmqeGebWpxMi6xBmYjNNBwgBjXN9VyQKNejX8",
  "key21": "5jF1Pyuvrg3Avt4bjSTsWouNSkqXxKZKMC1jtHzQ2BAXmd2KBoozw6JYmXeXkMgVdKXpyQoMeUySfLiaj3DUV5dp",
  "key22": "4Ma1EFwp9tyj8p4kmYgsgtY7HbHRAECF6FoMHpkeCDUPcE9tvG77dC8yacc9GsKAKEVeCWLoyXnbwqSWLnRkEFxe",
  "key23": "3C1bPNY17KTq89GD4xayaGJ57wJ8gxpSpRydbt8EwDRrjbiZCa9cSWnGPBFS2UF3K4tr4HAz8dgfd5ecjVQ5iPhU",
  "key24": "4nS8HDsxh2YDqy7qjySxqDC7baovp4C7JpWY5D58ZKysUo1kbQYpseTHiuwScbpqgKuFQJWbCBVbpgL5KXRTZvov",
  "key25": "3LRuNsyACUEjAtNnA8WKiFWPXC7MYpb1GCuKjBfH9gRC2bjbZcviNacihYGgfNed8tHmwVeLhDFjbf3bjJXvy3Xf",
  "key26": "5AuakBXsJMmsv1zXjwkCfCWBavt2mktuECoHQvykBo4JMuqtLJeQFS3Zgegn8u98447yamVVRKbE365mCF2f6zcu",
  "key27": "ixU8Wvv2GS6HXU21rWmPjGqc6o7deQj2BuAzL35XGFkdvihGGcTF87BEDxus5a3oM959ojzVAAWfrrtDkLL8DPj",
  "key28": "24CbtLkaZqNkq1W1MkHTkKUWA8u2q6RKxXT92X9Qg7WZ2bkXQyAWHFuyTRZcbFEgqVviurGqErVrQQmh8SvjLSnE",
  "key29": "4aj8njoeRs2qvQh3Kd3GmwsCxnMFvqE1vTg3xMBff24wnEY8SB3n18SRfexbgZMUGr7dxVDHESzDzCpL8s7a44ft"
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
