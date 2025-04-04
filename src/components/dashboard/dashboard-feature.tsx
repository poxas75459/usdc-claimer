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
    "ppm5pstAt7Z475djwmgrPHqXLHVQxzwVvvgeSxANs6YvA7254C3jrDM6aJUsdKcwAJJumrebyJ2vaC9JFMXJune"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3A33giNguHjjmE3GGVPLrXHAwcSv3UC6k1uzdSeey4GP5uzhw51k8ziyu3sV8pnpaN3JDdTAAXUqoQ4MAYqPEr4k",
  "key1": "4hny9TaVV3iue4tjXmBzL6vF99WPcVGYg7fF2qrDXpMjH3bsRpHd2tsa4poztY3jQRkABaQHusyAKcr9UUCqRGJd",
  "key2": "3y4HrTkwtq2FgJjeKLa9inAaLEAS1xEjW2DzUax3qTxt2LC4Jihu6RKsHAVC2iJUE4ZGKuBJbgA6tvb68VA3U1MJ",
  "key3": "3Q4Rj3MziAPZ2uZGTurvgV6MVNGrCbgjNiteD7EspLsBQGzRu9V6mW3ybmn2Vfnuu5dZFdFT4DDtLuGwnA27nLLY",
  "key4": "3HFQxi2zjJiCMbqWnrGYjVAw1mgFN1rZwL4Lvvv4HDjihGZqHi5tAQLqkWt2nF5wHT3nEdY5BaS4YD3bE6bKkzc5",
  "key5": "2jxpwRGqA2krofkMtVUsp6JbJXWbfzHfyo11Wuj2zRFHYakcWEWz6GuG3XePwfkgnzF917JDewffUpwiWUGkDJq9",
  "key6": "5vbCFtkMt27get4ZGpT4TkDCWmaYY35BerWr8uHooCR7PiZgyFPyU69obvLpC8EsEm6DCRVzyKQ8cAVtJTTx5s8e",
  "key7": "4MLmCrtqEEraVy4dbK93c62rAxxWVKigR63SfP6eUvo9bQUhSzvGvmddsfXVrat6yMZugU6xCWqhUu8EHfDwroN2",
  "key8": "eXJKhSbq6v2smE8PARrvQXD8RTK7qE1Hz7ApCjtPrjqbT3FRry1aPpLGvx8aZwkQ3Et94fjSBECvNWLvjbYYzms",
  "key9": "4AKCvG6NjygLmzLsK2YAsYWmZy6Ta2g2HfDnEckJmCuusdF9hQygThkLzwv5zQCj8B7iUHgXsGinwTNFdk4Y4zVF",
  "key10": "fYPvkwDeVVhkGybjbarr1MvuuWF9q3koX4uE7ahWZR5m6YTwzNrXd5hsmnMdjNdrKF61mzbFsXXP4RqB79SeNUV",
  "key11": "2UifW3Hi4YUPacHQWuMe6aXEtxMgHf9NNyuoqPH7QrcyFJMfxHHLZyJocmwbnpTQ6v53d6FyWxgA1uVVoMsDvhv9",
  "key12": "2ckVq19zkVaWBSzZLMpdaEUGbUwdbYKjrxZnzyJkpdfnRvzoHfvxeWaggogbr5WCbHfVUR3whyJ957q5uoFfis78",
  "key13": "5fzMsbCArK4oQPtDtZXwUdEedxeohNHiJ5taJhBwD47o3wVBDqdhExnFwLwZCbkivsM6iY88vn1mPady8QpBXfMx",
  "key14": "3CY6BsbKyfhShmBuFo27UTKSXHq9uo3k3ss8nEPYCB6ecm9391R3PDnfX2rCQjG9f2UBcsYpGkzDhv6VyqgxzXZt",
  "key15": "437cNXoLGLCFXvQ5vLJJn7ub8Wmz4fHNcgg4YrnytFf3XESY1uEDjpxkpc2fTo4U2Gaqf7sHDQbxzccwp8T26F6r",
  "key16": "44LGK4Nyeter4xqQkenEBNH3AGhudQyvDPhFUB9zDtPChx3WLpEpFSi5Z4sPMfjWdhZ4UoZCd5PHgMX79T9b5Ddh",
  "key17": "3sFw4iDmb6Q5V1xuqysEubs2CStmop35eFsDk8NUoWnxNwntFUxxwL881hL6DEV7YGwaosRbTcxRAQZJp3cnaAhj",
  "key18": "K93rtvfwXxv8RfU31SM7fru29cnBXnusoYUsAHhBroig1foGSAuJ5nFy4DUXMaUZdPheok1L9E7JYQGRckkdQcK",
  "key19": "E3EsrqdvWwa252WxDjQTUBj1Dv3JtZCDHkKM96ZXwC3uuwweujvPr4vBYwb2wGU9WaF1kqULmanudGSLA1PA6yS",
  "key20": "4ZQ1LEJoFuoXxDxSKFKtJzJ8YVZvugToigdjkWBbP1ozDNqVfmVNU3AnqhzrmM5YWefe55K1QHGJubBS3Fsdhspn",
  "key21": "5Gw25YR8xoW2wRin8VYfaoTBCztC55D6Kot1g3WPe4fL2aqxbEq8yF3Bf6Kp4ME1wGRd2JfU9FzrL6bAGsrozBEn",
  "key22": "3QFUjhCsqCTA4ekgBo1rnBryiPiVXje6YvMY52bW6gDLGRtXFciahyX9AY9fqyusGpTJYthEx14fLboxxBEdL36c",
  "key23": "59L3eXqW1VoonxE5GYw9A93mM3XnUKAfPMNrxx3cXDVrJDvAXjPiXhjWXNSSNmM6GuraWJ1smYXjuutUJkXfsG3L",
  "key24": "58QGUcawtWjiRzFzsikNBsgRJzRkShqarCeAP8fob1hqJMgcDW22WKsraAZMzwSAdSC4kLV4AigDS1CY1zyTPX44",
  "key25": "4XPHmMNgTnisHQeGjAQYjX22f5SocATPmL91Gi1zXdytB4PUQ53snYe2QfVmDP9nMT88nTu8K9DbDR3AqyPchNmg",
  "key26": "3BjWakiUi2k414vWc6QudsRjNUrzsJXYZKvr2J7veDAM4iZMhHeD7n3nXC9hcv57SrTcJrp722bXSJs74BaZ2bgh",
  "key27": "iS3dPYHRy7RzmsiffpyuYz8scSMtJiq6N8t51A1RAvsb3qvHR4Qmrdemv1wyDtnMemcFW6LQnnvj7EA6QnNoDmB",
  "key28": "2M9HmUoDWAunG1NikhBS2TG7K6wAqVcmGRh5wgNrGuEYdgRrJyKrqcuH9GgyxZrvfPVkjeXhvjubDYAmmdKNYL1L",
  "key29": "mph3JBZCnhfCGTzeZg5f4tJFkep1T77Lsaof6c57HrTRgWcDmDSTsAHBgw53ZyfNusNoEZQGCwonLKwVNwKBCBJ"
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
