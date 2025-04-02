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
    "3PAE4azYQhTS2mwDWbcwi3QQhNBhz3X3XSbD2Yu1gCQmgPFCTTtHjZEEQEHCqVb9dfLRcbFvt8yqgwecGBCAgRvb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3taTEHWiqMe26x7i4r1EaAWCUMFfYxoqTuUgfdiuYyfrfg7u5VdGDgVLKZguYxY5rMFGP8ayNDNTAPhYGDFDBy5T",
  "key1": "4cw9BK1VbTRWoaBccVj3LaQapACJ499Y5vx7mBA4tBaSBuMPGZg3qKsYspouPo8AxnkzGjEhSjDTJYTz5BLR85Pw",
  "key2": "4EqgJ6rtvYisMfi214dfNPzpBDwm4s5KGCC1feqWS8hrmEafUCTZ43gN9QfT95BFbfSjkSFEjr8C3DAS1FudxRtd",
  "key3": "23ePow9Sn8UxNaxmEpTGhE57XBmAAVDyGJ4v3xKdcW4RwzRGSpnzv4Amc1oD5347N2MhvHAQaGNR45kz1prhvd8f",
  "key4": "3QQQ8jtjnU1FWHepnACKX3Xzosc78EqTuq4c52YCaKdYYXLtAaKKJf7Jk63fWcx8G4Lqpvz4bPwedvMvemfpcV7E",
  "key5": "2f9PBPvmE3QRMdEj8ikELSZHSkym6UspR6fmRgfSNTKqgK9RbeC2dcAawo6pKcom5WwbN6ei1VcftCHx2FY1dpnk",
  "key6": "2ksuJUHs6n7LPB2khGicToRkdv7RuRXhyGCvLtCZgExuCCbaUb8Qt11eHTirwxA5uoqGoTse49LzctHbUrMvsPy5",
  "key7": "3de5ZpnCuCB4qyKHNzMu2fwSDkRe8ezUcNmjaY1sS3LwckWFPxYgc47JT6DqfNpEps1k6hepZogpBaxcugBRsRk6",
  "key8": "5h4GEF88WFU7fFY8ALk2Cb1i4u5nnZ1su23ugezJw5KN19KtHaHby7mtvXKXKrQc3aiCLbVjgNH5jD8puPP9p4y2",
  "key9": "4ujVxG9mz4f4urkKLfG66gaEjGmbBZ8pBUfopBSiHcAvxGfeiAeFS8KE12SbjPzD1EbeZE7mBcsH5Sk9q2KG6Aay",
  "key10": "31xYSxTcruY2EWwiLMwNKX9wXyJafF99cVLaz8GmJhjkStXGqhxqWiUmLpDwdNcQRckku2EHyqf2zNVyKpU3An53",
  "key11": "4WFL41pPjdSQwtTMmvxx8BGyuftsf9avgKKY65CB53F5vtR8MgsCYFp5eGvj2Adn1tkEQb8nG2sHN9SuZo8RyyAw",
  "key12": "5KjmXTMHRtstcLi5WE6NbME5szzwZ5qFM8pDy9bJb3dXhFr8RWuDrEZP6UXYV5hz5kiMCPykBjz5nwvUBV1pLYat",
  "key13": "4xMgwEL1bteS9zVcjg17JLW6y32N3Nnm2dibq7HJ6TbnoXmCZ6p17GXPdJZpC9ud8q8YCfPACDVPdT1t6itVBJfJ",
  "key14": "52ELgw69FejvPX6ukooPQSSYrHux5wUX2pkrrU5frbhhN71htzv5UY8HUx8JQgiRhtAxf1NqsdTSVRWNQegyRE9y",
  "key15": "5qYgZjfiD5mt54KuurFt5d63q8AfbyxTwuMiAnB7PVoFkgz5QkiUjop3KsQvC12sUCCVXEaWhnC9kJBQj6CTi3qx",
  "key16": "1mERFpTwVkvbQNHVmMW7SnvxA47KJs81oB35hJg8fvW2ofc3BExbHHiQuQtJyjHLmy2ct2xPTM21krX7ZLTJj2A",
  "key17": "2jMcrKNzdzMybsazfFKdnhaZNPGZb3GXqXcp3rLUWnReFCEfBNW5LT8GxkDVHJaLBS3RPzEUQv2YWEfaq8Ma3T2N",
  "key18": "5amgSpWmMx3cicAyENEH7ET8qrPCTNzGP4mmWg75Wa53tEpdnfRAfcwFov4tkLoqsTxA24MY7d2hG6jXHJtun7ct",
  "key19": "5o16WadYjKq4XQp19FZE69atmYYd6SXBiipXUXEfh2p4FfvahbvDvzNM7kYn4ca2yudPzwdD16Ftaa4TvZQdioUt",
  "key20": "2FARRMfwphy1nXMTT2LLyBfSVvgJk7HiVAzaqUB2NpB3MS1NWLZo7k9RBEEsEDS5VuiYTtfhxuMdpiWrdERBRPpG",
  "key21": "4GsZfFn8nvUvRkMTSkPmwfBzgRWdUgD8qKDM4MLT7eVtayrcrboV1FGptm3c3Wr1EJ1vBD7QetjTDrh77ipMn4ZJ",
  "key22": "2TZT673UbyT5AmVXNutzdTYiFD5vQJHQBwJNehdkBd2EHMktHafQ9mK78ZG1JgXXbgdd6Ef4g4vCa2Rt5jpSuD5m",
  "key23": "48JmShLUCLuN3EQGNSUghnoyJF8vwWAC6zvqSbATdgSdbzvKEKq7vLMaETCHMz5mZ4LMfhkYyCnNTjJQpcvuZSyj",
  "key24": "rhbEVMpJZCQWN7eng6PoXUH5SmZumQnk91yUXBjA1sMs8mhzM9Zhz48XpKkNXaMTTUj41xThKBDyQHVxQsTowTG",
  "key25": "23kfv5j97kTbHtv4mdUkBXosuFmWTSdEjQCL3JbNhdTnGoAbZkAEG2j8QzLHoD1Pwt3VZPWXeSzuZceuqrXmicnG",
  "key26": "2M9q21bX1wvzHN7kR8pk1iahzxSxDags9nkiLB2cXzvdguhEXj935f8Mc4RwQHWY8eGJ6CmDHHkwbMX8xVqPumKP",
  "key27": "ZfLCt2sh6B7Eewv6mwmb35vqANrPAdryLchvtUdVHnkM3MuXZzLkgrMX8nAgGeTRSEW2idqrAYwsjTg73nUxnHF",
  "key28": "gUbEBn55b5fMCVauMQYDcb7YZnJCzq5XxFSq9Ewc9DQKiuUqdusJwCoy1SnrqQNQqFy3W7ETzPDwXoJpPBvHkXP",
  "key29": "3nwDoSccyZQTiCrfceYaza5LiwWrKzgWzAHGJpjisupvH7ponfYCSaQqsedWQFSzweGLLNCuPPWina1hASuZq1eD",
  "key30": "4rKQ4fxMDFH8HpippU12D5uYqiXNes4VJ5RgfjvVvQ61Pp2zSBsfpVECGNvpZYTBZUCqrzx8fRys7mQof373wgNF",
  "key31": "NJLFwarAaYCGRjY9ocAFuubVsJNgZmRLoKGieDK3bHXVy965mM5w4MgxySU1cFQEtj9KcNMBaM5eZr4HnL2kPNX",
  "key32": "3wHA4P4sETxUc74sLjpDmRoTQwbrhGLb9UeoDRTMwzwT4NRq4ioGGuieFdio8F9kaQ2J2XwA6cZXkYda8oMDECWh",
  "key33": "4dCEHwiLySWYmHEJGQiEKfWJHvmVRwTVHh5qWQcBAYPvaxoJv6FyBQRjm6Wu39v8sczXunAeDFZxwaqwTTM3LhUH"
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
