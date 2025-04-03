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
    "buh5wZe6DnWHptgA8acYekyPaCh17sVgB5NAi6Vfi9K79WLzhTXzTCGUeWnrv1btRvxyoqsCfTUzcuYDrr4qsse"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gKpr1Stx8ZBmhxedC892zg5TSSrDmAqnj3Wra4qiqfUMeTf8bRLFCDXABrYVfeAg2zTptoy5DWet53Z1C76MHfM",
  "key1": "Mcb4Fx4Cq2rxPhNEDWzJis7KqHHvoALZPZ77aSApifqkrpyvbPbvwQKFDqonXUkZp5T8BYyKNhUfwep3pNTb1jw",
  "key2": "3jYPg2NqQpjuesiZ9GJkazagdYHLLJHGhTnq6RMV7i4A2BuhjafXeBTgyShfzNhSiRckXY3ggk9WuqoeySE3Dg8r",
  "key3": "3fZtji68zcoorp3i91XNGHfJ6DkKompKWNh4b4MwL6BCoh4UPnJcusGKhauNCT8kvqkdX5NVo5bLdrxbgHsCg7Vx",
  "key4": "3SfF5uy3JUHUHHwLtfjqd6HsBYrCfsSTvNUNSmSPvK7wi8DGsHyYS6fUMbJJBronHARdCbrTBYmWqdthRbnXh1bv",
  "key5": "3r7d53TYxn9LZeonxAzxY63mBWa16ipgCZfnrphS3rjJ9Mo8gTaQW3ri73xVsLGn7mjxc6u95FxfjfvXNRZgxNTB",
  "key6": "5LCnREmjAVHcWPKA9LWWCmZLe7kXBPUsWksvtviP2xtUFbPbyvQoKW2VwrV5ZAQvBFRf3rsNAKGYeG4wxJzSKxD2",
  "key7": "5SVFMFTvaUjq9EQmsvRLzimBGdsr9aCvjK6KxNoF1HQ3SSqWC48PutFohbEgKuJG4yhnFwxS8cw32guTfmxaTn4g",
  "key8": "4V1tk5Mvo1zA9FbMT1KkfVcg6ipqgNh1q5twkqiLeF85kEVefxyco5cdhVaPRAU9wbkUTFyEDJPoThwvDUtyEn77",
  "key9": "4UiQHp97RaWXdR5c8zEY5f7hJWy9LFEfordewC5UTAWPMEu8xCShAGQXXVuQGZF7hdg3vYAArMnYpejKFvmaZ7SE",
  "key10": "2RVD7Yyc3RketwjhM3ahmr1zMeXWxVW6TAv8aCn3QB1WTiCxEJD9No4pUW7Qh8mVML1A8ETAaNvEMxjWbVU4qFuw",
  "key11": "2ypgaUA3BFsQNhPEyc44vdZjZVhDUo6Dc7DWzB6ZhxtzxTEv2UajjLbnmbYcbasa1FKnpd8aaQ2yozCAWPyBYaUA",
  "key12": "3rmQ2sTRdwVjZgiFE5T4qrxzEnM5oWmgrWoA9XpciFbuX6CJihRK4XVn5LVYUe55BEBwqocWUTQ8TeGnJHMdfGFW",
  "key13": "4nE1XtU1Lv4LH9KH1XWSyHHoHe85DsJFsnkqdvZ75KsFkfgnfaRAdSvudp92dsnuXivXrb94CsgKbhkGjpTpTc7p",
  "key14": "5rdWXyjx7ygSrtjWCSxQM43sKf4LoN6qGtkQfcM1Wj4dHcGLtGwzrB8iWMLyYjcGXUj9xsaxVN6sCeCnyN3H4n2P",
  "key15": "41rXeZAmTnQDaWtcW8up3hcBdiCsNpVUt65f768mWNZT92AU1ZTWZQDpmGgpeues6NCH8tvBojfPbXDdb78uwxMB",
  "key16": "3cV1YYbAAhxujLDcUKJbLRKu1kKz5a3x3Mu46GbWpZghpQHTPiHHCTQCG6Pv5FM6pc7Pb1KnvyAxTPPXNHJvimpP",
  "key17": "zAtHWR55pTP4hnjruqWvLirVAP9Q1CnV7bVQKfUGgaqYHVAwApb7NPugqsasTehr4UACThmZjC5KnXyZiS3SPmF",
  "key18": "HBURuv89zE8GfurQ6A42jw6k8G2WjhuhQaYvzHGWN6fewAZa4jmG1cme6y61XRiAjq3z9iD2eRhqFBKn27W8ei3",
  "key19": "2B1mKEkMxjxXTaPYSUNd4uQ7G9bTqZAvNWFUpVUyPsk9Pq4KsyZpUSukWZbXK5vebDasTQzryPsMBTRaX9Haz2jc",
  "key20": "4TcR1FRxxB99PSeTnaV5UwwAzqe5e8UD5AJwzA4XjGYtBcLqmQdX9f22NqWKzYM4akqi8N92dZVeLkFngMwkV5Ma",
  "key21": "4AXQv69ouNpx1fHcGvHcb3iSGaC1uJHBnYXtFE9cMrAow1mNQVDNPT6vvfxSM2PbSnUUWrsrvUVRDpM9Rmc7ncKG",
  "key22": "2WeUukq75ogTxnSnciBDBEa5zZnc7r7iERcStRhExxFpnD3wsQAoW4k1phM28oogJwB9VcBNeghCEV5B146Ncduj",
  "key23": "pUkmbXSMwtWFYcvZ9ud7P56MrVkxDvEChY6Tm4VUvrs58X9Y8o5ZKm8p3JLBB7EuCYc4UTQE3e1yzTumLciCDhN",
  "key24": "43jMasyBdP8gEVde7uETonN5YQTDbP1fiLgnT2v921tVA2uXBuMwuK32tKDeJjz1ZF9K5dd2oKmeigMvfKfzAbHr",
  "key25": "4ubHFN3SoPziVnRbc3aG1PXBN5hHjDGZBSvHPveKoQ7YEaYRv2iQNwNx3fTQntfV5hLcxHajJujKmwQuwTYVpgB9"
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
