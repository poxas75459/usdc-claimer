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
    "A3N7pE2tZRdt385eQg4gq1hYaoKn7VvBLxa8yB3r9zD2xUZNG9YywkpDHaPXQ4okZgxiu3t3M7Zjr3MjCXDxm7M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gyq5YzC5vXX38mY7FjXaNE9ykaUMyGRCUaw713pZ2C9ZLxY63TpRtauJzXKa7jQQs5yiVyE3XF8UU9Lw52fVBSe",
  "key1": "3yFTrz4RxnAqCQ5d6UoSXJdinwGgPfmjnu8Rrkd67jZD19jLgfzQynA2ruGnAcNwuQDFjsH5k9fwwjQmBHiyLJ1g",
  "key2": "4pc2BjFCvet3D2ccTxc52gQ8nJUYfJU5y8rbRoDBa5rr1oWGFXAX7xqg3BH7eb6caE1wBncCmQCiRPN64mphvPUo",
  "key3": "2PF4NyTvpBctakgQewmMzUYWwpvmq6kBW84kCR6EU7fqmgfenH7DHhwGSLTqJE1tfhg6AUmYEbLtRiRdxiiK1iUb",
  "key4": "BBCLU89By3H1JGCzocGh2H3Trppv9uXhGxrbsu53RcTKppK57hPeATexmcYqE2WebtPhJwsxaQHQXfxeZqtJCke",
  "key5": "RTrhB1YZYkmBvs9WLH56LhMFP9m2QxSyRmyyKH57fVsBT3LczWZG5PLTXaRb5raTeVN8ChSgrqBsL5895PbA2Uf",
  "key6": "nfoAgSbUqbH7JsaSL4g1jmfcAu43uBDtrgsQm1a4BQcRvpJnQuLsWkbj1YpJdvFKzQhgqGvHYfok6qrE55FPSxw",
  "key7": "4EVnC1TMf8CFceqGhcS8ZuokjHv2opaHntFKZiogRgBFFbgajUr1h7rP7JQ3VzciomccFY7mdPC7T41ExnKRcSRy",
  "key8": "5Z5y8CDqWdNhCh5T9Zfx1T3AToMBLkGqJwKfNTJsKbaSVQvL2phbS1GxPi5pGgs6jwVg2zDmGnS63m2T6VLhYvWS",
  "key9": "5xnFV1QfVMKJ6dPvi5NmLqMxFGkdhRwiS8B93TdNYR2nUCFW5GtXEcDyBxgKMYXQcjF2DYBPiSebGnkQofWK54BL",
  "key10": "5N2mygezYSp4jgk528bxwppb1VHzo7j9ZbT1XaDGTvRX664EgPGrsf8vcAy5CLwyandiC9bEcRQ5MF4HqDrh9vSb",
  "key11": "44aDC2Vtv5P84CHEVsE6WogCBTxW5BGucVBefVcYcygfRS6FtooT2Yxb2hZaCJTVNx39HMmVT6DjrojZZP91CSrR",
  "key12": "44HXvAXuUHAuGS4WsSMghNFUC3hDWVU6XYCutcBNwGatyjt82Eck312wCaF4btRKHKZdPzZaFR2nn2MMfjsdyswQ",
  "key13": "3uCRVCzEa8Wo5y7B8TgSJDxssJRj9XZu4XpPy8VG74Zt1wXfyoWgQVUusAJsCpDcb8mbVZHAaeuKDZyjSaRqv2Sa",
  "key14": "3uXPfWmHWkmZvUDcuBYwHM3aayfk17WZb7Vrk2ZZk9TosFbY5WfezMhU8KcntBuk9eSxia6WuAUwdxFLXcXuCGGd",
  "key15": "53nhWyAAmVyRWv2CkBD7ufeHnVB7UVVfACZ2Sgs1hscGCLX24AatkRtjwREJwPJ761bKByHPsmWRt7vZ6kbY9pgn",
  "key16": "4Du6Dmb2Nzah6pQ4v95Ffp775moa435nMRcq3XGv8G4LyKMLBnAepeK9kWawnzveQUbisLacH9a6kAwGQcHmFnV1",
  "key17": "5syXpCBYaJuEXCzmkzprsQTruVCJeuV4CvKKuwDGdCfmcJqTtGp86CW7hnEWudwKYh7amWwf86j4q2BcL9m1MSPA",
  "key18": "24LQQ3FLdBwPi1LhsT4yC8MBGd5mg7ZwdVfcq2U9dt5LuAS5j5L3osZFmWXxPiZokvGQ274uv97ZiWsbMbUdLEKV",
  "key19": "61tthkducd6HU7HntYAMjkqvhjKfCDwuWybo5hjHsqodCM7Ztfm1Ro5H1pFRNpYdoDQQ6BEzAQGqLUaCGpGcWVGU",
  "key20": "5m732yUjhiQ89y61A8CgGzXmYP3jStqaNWaACjTDPPiP4UdCWvDteoT2goG7F8D4A2zo3whkkLmetiYB7BLBuoLW",
  "key21": "go96VYAufQG1xgHY8b1ysh6gakJPVi4Ub5FQfUQQo53r2rDPcnqXtJhhVT3TH6bwZZVM8Q1RwVwX4JEBUyZs3hK",
  "key22": "2ELhFku4sxnNvs1fZ8sh4mZ3uHzCMw4C6ibtaZWMKjB94pZmHUg8pRCdfvVM7ssc8hXBzRMwD1ymVfZdNguiqHmX",
  "key23": "5U4UrgfvXA1jHLPwhqCycLxbMHFEB6MYxPfrNkL846woxPDjqRJxCHEf546ZRhvBDQQ3ZuPw8XShnQByeiDvCaba",
  "key24": "3jxsEGKfQyEaCFYK26mMaRGMAYd2iTdF6jBx95kays5LdprktDqQsfMwz2teSN3gFtPM9fJPDbaHvKjJKBZkgVa5",
  "key25": "4tWMSJrKJpf3cSjZot2a6rR6Z5qexHad7XnCmLtRpAc2WeiAyZeGipUhhRcHcM2wrFvTvVwadmbtWrd75mJErdNN",
  "key26": "4XqvfwQsNKuUKAWCS4ePBATVzHb7R5UNEkQ5gkaCmA2aEf1ZeRbKnRYWPSpTgZauqsjKG5EP5RYJkXaoXM2F6Pcv",
  "key27": "2iMtBr51ncciLF6Ejh3dVToXrbH2a5M7hZM8NQTeCa379UceSeNHxmL43C2fH3LEvDhcakNF4m9rUzaeSBcFWU3M",
  "key28": "4QCXgjSTHQS5iCUs4WjfTF7t9Pp9UPUCByvGZiHUFroxmEwEXxN2pYMaQFnCYpXDgoHVsMnqXcHoMwMjeXyZmBkR"
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
