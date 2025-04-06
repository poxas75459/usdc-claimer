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
    "Ny26t4ovyby6m4JeKPGqjTY9AWs49h8Qx15W2xpDmtS8cNnBJQP2PHvNzTzeDq2DxFaRXF2HvepfeSHxYrXHjPM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61hgJ6wSL5rMgdRjRfzheCeQou9JxJxZ63wy3wWks4QCgLjtEB7cP1s8fHgEwe1LR8xRxwuEsuTeq84QfmEnXtxT",
  "key1": "3aXYJaFVYB5QDdwhYSTzhMkUeYZM9LRzSy6zk5xzBzj3maKNaXi4spEoubwbKbZpixDpQSFNxV7s9ydfjjEmyVfQ",
  "key2": "55xLwt3YX51VpQAi961VhwM8y5QsRfNgibyLkitHteu18kR4VW34ZUA8A8fGwVQDh35jre34Jn6LXXmnvpuJP6yZ",
  "key3": "5mkGqSawSeR1ZMYpiTd9QJ6UuMBTp6HJixJr9B8dSgyUadxWsHK3YiLk9rFgckDZh8QjBSBKsUoG51hyV1MuFCfw",
  "key4": "4j5kQ1gYRacSYFHeS51aDBhPogiEKMSS2uzF3DCxx23PAnwpy3RY5G7owiUY7JzxSnf4zbH3gqDoDE9vte6znutb",
  "key5": "4qyAuw7bqXwjmcuRuhFq9XPVd4LC6bnQz1GtwBrYDDcEp8etXXikbFtT3NKZ6nkZGGuF55P8D5SsZAizhqVANnCW",
  "key6": "4Pdp9MVEhLmD79QzxM61RCnZ4ShxL3geQT7wweXPUoLAz1LPM1NwdPJyShqaLvcdhe5iVr1vLhosfXuYmszKUJG1",
  "key7": "2cqYDx3GLEfui2Zzju1xk48XbsHnjes9s5pgTHEW3Ws1WNC9bdD7XxJSGjdqoRhATCbv7KBYaw1FpcbwJMahWZ2d",
  "key8": "58gSbiUwG44xymnMXL24LeWJ16FiUHP3mCDduQU3EHJXW7GnF2PGfG4HZz9cfeRu557ALhi69jPN3wWZgvJm8LSm",
  "key9": "f2oWr3tyKkXZkrTbkx9Qx5H2JZs7tvkgEDsFjoVNRdVzkiyTrd5LtC65fx6AGtMTsCFzhxYFzYUX3KxaR53rFGD",
  "key10": "5zLDv8Z4DdNteVqgqetLS5HbMpXBbXWjC4ZhKiQVxtMZbAfVG7hMC9FFoteoE7QDpv4gGfUB1gpsnvviT1sEY3RG",
  "key11": "4gCft2VYkeUXWosShhtW3P6qFb5hgyX1Z5LpX1UStRuNkfpytgJJZVG8kcnFegLjMNTAb9uJJyi2prHtgsCFvgHV",
  "key12": "seGwFuxXGezDH6UmLD3b2YijHdAQymRLhqDvyvwXn6DU1f2Uqk7XcgkPYrjVff8gfoKPr4xHAed3toiHNWre7T8",
  "key13": "31jnnTjGsnZcYc6pEWpp6Tngm7t8TyRyZQGMFzgAxpv9CwSMTbu33hjTfUDwqzpTpdUWH63ePuXCfEiUjaGUKBm2",
  "key14": "33TQbdeFWWYLpuWH4CMP19GhRoqHiPTbXDq5XJd7tvy1PtfcAS3mHz4ChqP3xt2xfnxLAsv7wWSKsCN47akVKr5P",
  "key15": "5tAX8BgEw7dXrABhbfebyrkMAc36yTM2wsqEYyUhS6dFUbVKrHBNYNW3LzxozsKXMxVrFVAC6Njm7JDS8LJ7F6yX",
  "key16": "37FDq5b8qkeLPwKf21ZcPupkcUswCDSChGTnZKvLXKp4Q2zuf5RbjdrvZVUAXfCEVubNC9ijXUecxJtiZ4gKyToT",
  "key17": "647mvqZa99S9xYuvQYNasoF2gGoR862bFr75bd265PCwGnJkr1EovpZ1BwmEUU7SbxyrtFaEYrk6hiDFr9uSWtTJ",
  "key18": "5ow5au6MaNzVTEpo8CFCCjmDRuJQakys2YBGyqZR1E92EgyBWFp9EmGvVqxrjzWg4qNs5TmvSrwZW91aHUswohxY",
  "key19": "2rT2VD2tEAq5FYjgg6SRq7X8QD8xQCP8su1a6cpFLoAWRDRh5iyWrbwPNuqtvhKurrRFehLH5FYT3Fm9FxM8CWuT",
  "key20": "5jTNh2ZiREYHWNea22AWE1XgJR8Kgad5493HY7Q5HdH13ZENTNcGvZfphdyAEhfE2cGuvW6HYsxaJdxC1Md9nRkQ",
  "key21": "5sMqbXgjzkC7nD9eB4Up7hYLkFUAhcD6qqz2SHHgoJh91AW8k39vG3hb32fgQXv649YDg2ddY34jBQwaqmBqtcs",
  "key22": "Cu1STuc8gfXne1VhcCwM3JbUBS5Vu1i5bksowasmXLixJcRwNuCajso92cvDgw8wybdcNUWn1R63paM8PSEPjeg",
  "key23": "2NT7fYAHAHMmMGiKUoEsi9p2nDVmjU7NiimozGkqJMGh2gcRBWn2fNksYJn1sypm9oLKhQX6BywEHwHfjRT3jhx6",
  "key24": "33mnSS1brpm4MUykwPZeu61amTNqkpsuSf5Y8HLgf1C1DkuazJu44eAYj3e8afQj1yz6wPUtvnYrqwTtGzPtnJ23",
  "key25": "5nnGCCDXdMhM64P2qjPAn6m3xWtdfDwdhP33nZHkW53iggXgEriCz71g9NJfE58M3wkZHMsBPYGz3PQwoqPqgpnS"
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
