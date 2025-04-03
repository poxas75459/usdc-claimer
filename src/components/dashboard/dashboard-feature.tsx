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
    "E71WehM7NWKd4cpUdu17DC3DHyijNonrXtsEPbihnfnsB51Hgh56WMR1C6reSemu5Hvdc7kqZjeHe4L5YiuHa6E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EU7BKbRfNivuuPtFznv9wePT1NvNMZarm4J9dPnHXpcAv2QFtvMXJTs8iiAEasKrLQc7cmqwwgJbWxdsAEH6dvm",
  "key1": "58qTQdhj22ApLmNbKnMwXrA8zEsW8ciUyJMx1B8xVNntSexpiNYQsqQXfqauJtTbJRL8DPcLBoowgRCEaVNC4z5x",
  "key2": "5T12VS5stJq6orEsCMbvv8G64ix4Juc4cGtHfrSp4yNgEk3egB79AvR4VyyePtCAhmCPXEdsPZBKraJGsddeXJfi",
  "key3": "46B84t1TtGgEY49UKTGTFgn1R5gr3mZ75wjR2WKbvKjDCBjThm1hn54ugUANxSbo8KS8dByBr8TEYYfgSGco4dMX",
  "key4": "2foDumG7gLYuUTugrYG3xYaT1P5UzHGWn2LCnGeKZbwEqEA6huhhfuzTr8dpFZyLjozo56xzi2uDSTFry8PFvCWT",
  "key5": "6v7LB8A8h1Ca4DtgGd48a1nnfCZ6YkNWEehezq6X1anbuabSeLH7uzgojanxWRjRMCFs4zmSqfTGSLaQbQ97QiP",
  "key6": "4rEL5uLsxmhmsAnT3bu1Ca2JfxmFhFBLkiXSmKz4GecobgbxUyhscLR4s1oLc8PEuzc4gyDyC8f6jevEztjPTpCu",
  "key7": "4URi5agk912JBBFpfFEbYJEECcQxx7QvzUSmuX81qzchSs6CqfbigraUvQKiCHh4hbRH5hfko8YQKczvfGQDVSHw",
  "key8": "5zwT3LgYus91ugbeud6ckPj4sQmrUHMnQXZEWfZ2PAajidg1HjGeQkSaQ8b6FWyJpVE3DbKiR8dmm6GWsQUjdPNx",
  "key9": "3khdNuTrHYJuz5eGz9TJGqPdFK62aWtqMY9tHoMGe62cgxvLXovL2hAu8NzdWs3zC2e1VXw4ebTySMPmRSr5xDGh",
  "key10": "63M2BcNF8kpNuaAXvPH2tHms6WdP5gN1NRHdYrSRahbSPGPfNR289BmkeLab1DAK4sepMhQjDLATMFXuLrcERPiW",
  "key11": "TMPMhZv6f1LQQhJfRKJymDQXcV7Q5ShN72rpTEAKDLxVBDL7oiw3TP46WA1axkb8DwemEFExJmSLGaNV7RzC45M",
  "key12": "2zTD5jv2518bfBfR16rH8npL7YeyrC2Jby2mnZCiATfbBGS3NAk4Mzf2nct83FZAtyCr5d6UM6rkqNQmaD7KXRqf",
  "key13": "2f9zNkS4TEszWejYdhAoL3dZbyJuDGiTTinrkQeVhC7Ef3an3f8UfwMuxx9itPpBB2N3t65ReE62xurMLbTW26eC",
  "key14": "sSpk6bJftAGGVu2vqNVBpurmZUFAygw5WK1fm2rzKeRv49EdfDQQoqtLHJ8mVGztpEmxVv5GmHnfxCryG9NB4H9",
  "key15": "4m2ButxXDymWLCjB9cidMDUye7hxQP7nSRJmnSv6BrKE6HHR9L25kZRSReS1Ue6zzkAccsi2zQqUMdTDHdJmDe4f",
  "key16": "3S4FU2GnYvEzjbY98k4Wcd7wasAiTGU8wnP5KCGy3tjfbNoAXysi9Q8e6CxqxhRwpQVdWTzx56AR527Fz2b4JTzs",
  "key17": "3FA5dJNeaM4ajWcaXQNsnsUii34f7DFpLhxGj2zDmp62MUu4P49G3p62rgNmndUMeohYb6iZWUcLdphrt7t1oHjN",
  "key18": "tWsF9DcbrPuvGd4CoathjnbdciEncCSkkSvZdnNjgGZ6yHetup814Nfh8uihNigQqsrmU3pRTmQyNDdVeKUNRXh",
  "key19": "Vf383z4Nb1MKNqrXeSc5ZN74GFhwt42NGNYLxnVUfoVowP9qbADa3meHsHNAEawrFbaPF8yATvMDJxHbmMURDGQ",
  "key20": "397WARpeB4rnS2JxvLYVE4sygtqFQxS9op7RWg73ibRdwCFVZLcndQxMFzDdLvCkGX6oTZnwGwGkMV5PBg3TTtU2",
  "key21": "YWn5a6obvsXmyWpKH5XfXW2sMfkD3SrmQKMKPL3UBtxdLJpE6gWYU4uj5MHywkSBeBoiPBdNxop2HZWGTwdGp2x",
  "key22": "67XU2QQXG9mMnC6xz3H1CSiCW375binxHDg5eT9S7weFbrkD1Gzy1fXcdajcH6ojHxRr4yuQifjWxi1EXkmWNr4P",
  "key23": "5Ken7gJebX943M8qz6w5fqrbuxZiGStPxT4bGfuR9sYQ9tH42moEGnoNeqKLhaDM5BcKkxLHe6aDkk916GqK9xhQ",
  "key24": "5qBTpsnA3wYmEdzUgpcE37nVdzKgp5WPuEKgdBcM1G4J8w3c6tysAbxhrp4P2wb8Lc5yfo6iTUccEmjAiZEywudx",
  "key25": "4qyjEek6JZ8TKUFYSZcNBJkeS71coxdP3cysNHejkKtzvZHuWu3vQCyxAA6oudC1BwyzPde1yJYKMZq9WEtyCyuj"
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
