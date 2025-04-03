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
    "4geHYWmPa244EGngs2c7fCiUud9Ts9hLmM4Fu6Cmki5ULRravetnJV1LJvb4anLXVXGAyQz89cagsXfKpenC4zrM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MUDqKTAvMDAMayH6FpEwVDy5keBcbj52vavgDGBmWij9hGLH5e7e7MqGn2Ma9k26AWrNdddnV442fabv24mueq8",
  "key1": "3ExQxi39r9Cj9TLpjoPNmySHkFUJ6kLJRWKp2JyNLi6k2nKFBpa9LpmA4CSxaRHi663Cg7khQagq37T9JVDuEWyR",
  "key2": "665H9G1gurCRcJbdiDX2A8qqwabLjmnK5bgcDHbh5mBwnWv2Muer9mtKQG2iaUYaxpKCjEEBjnCk64VvPDGMnH64",
  "key3": "4igLBGPYruDrDf214WPpoqY6fcK5oF6zZzRbKLmEHRyxpSYWR6ofFXCXg6oZ6deoabVqYcU2oYJzZXZSPnRtoZVE",
  "key4": "5XJwAJtLYJm6Zjv1rRScCyMHrvhdkE5hPtmsNWjAdcN2ubkNxeCeMeqtkAGucYJ5WiC253iuCW1hJDSoXuToowpj",
  "key5": "LvXPHzN3Ecwo1cTS2Nn2Bz14d5pf9QB5xZ1kNWs4XWpcSjkDVWF4bRCpNr4fHzNLoWjb8Wrk8kGY6aaBsa9PNSf",
  "key6": "5mHXpXoYjQtfpSXypUEYGZXaUasP6WmMqwhyoHhViJyXi85DvrB3hT8ZkDQVfNqhBV54iigLfp5jD95yhntFbh5F",
  "key7": "24fWFaifGC9kA1g3tqLaAJTk7ajKmLdtXAN8AreNrdLCWRcoAtXA7jSAYknW5HsTY11hbJ7zDoNrT2ohhPYQKEgW",
  "key8": "3nCTiDnNVSDzdtfa7zqRumt8ASzZ74EqpmQqg9WMfYoneu8L4ErwGeaM8Lwr12dSPUWf1LSFgpQcYewaQqomLaMt",
  "key9": "5sZ414hoRWjYrP7KwusiXbdHJJFAbphJzgAQZNWckCZHAX5vmWh324MmfC1hkaAdWbBZsLyhWt4TCtZfQ5cyxf3a",
  "key10": "2Aztje8PGZKDA9C3VZE4NJQ1PbUJZUB5jLjWYyj2rzqNWdqS9VMc3z7uDChdLkUmH86UbPsLjoc1GYBPxitfGwX3",
  "key11": "2wAA3QRVhxa6NhHdCeVNpVJWC6nzec6eCLrJ1JzwrVA9D9u9dkfFfGkdDjpKKworU5PLamrTSF62uuK7cQFdWWiF",
  "key12": "5zQxyfqy7CRDGuqWErdTQ6VAgryw8QhPGHXekdLXytmqmT2rcW6X7YJYkZtFfqiMoChVQ9gigjGEpYR7qVA7ukrF",
  "key13": "8VKp7PzkaVc21bGgMf3mAmwzN6b17CnacKGkXrUarR87jPmREtcfSXBVuCfmW5zSZyjH3EfgNeX8vaJgLzDQsN6",
  "key14": "hX96qMHA4wmwwuwGJdGvVe4tn7dbydmabTTDmSdcePPC98DJ28haFWVeyzqsw1gdS1TiMemdoJcDDZasjder8cM",
  "key15": "2D7SEHAusHDWPazwBYDXjbaCoJXkkWDUPAJ32GosBxbJpeGHTVbkkXd93MNrtuLR5PewTRbrF2ULG5hstreCs4Tt",
  "key16": "618eJ7ueJF8mVtv1yXFT5fyShRq3c91SUyVMapzk4WHf6YeFqnxVvHCzCVmPzu1iSWw8Qjr6y9Xi8VLXaXdgnEZn",
  "key17": "2mfvjA8uWvqEFn3KtdqMHTzAUn5jbsxXuwdMuaedjRK2WzyZaaHNZDXLiz5RPcbvYaHjf5Yvp6Q7nsiXNn3fH9QW",
  "key18": "2jEz69wC4rKhUM6ViFeQqPbDToeMjjvADFj2RVemYdckMxRVRmMX85dZ1vFj79nwUz5MNdSdFC26ju9hEqDXe9KS",
  "key19": "2AkNb4TWS8tgcAMcnstgM81V4pF5bEzmCwzHp37k8UQehGCVFUoqhLf5kZJFquhhL29s6yQo6Dp4k9JZTTGAZsev",
  "key20": "2Cf9uRgV1oznMzquH6otLwSH8MYPtQQ4vynqDsMWidX4scEz1TVGAQhWt9rcY5aCTcw76vBPMBxbnwA2Pe77nJVL",
  "key21": "5d5k1C1fbrVvDQ8WvUpw4XE1Asqd39dsa8CQfqaNUq27Vy3cQ2BHdHahbmKZFEaqKLTQ5STN25zG3jxAs2DCPkD",
  "key22": "4sfsxQEpp2b9JRf6qrcmRaRrb6tJteFr8ZoGs5oiL1bvZ6KEdiPQfYSD4XW7DXTBhJjdgY9fWjoHPjbCTsUCUAjb",
  "key23": "56EEBJMnrYSWeoV9PYo5tJEgtWsVYzBzE3GGHpMN5xWTXQDxgsejJDymWgQUP11qUKWdty4ohqtP1tLn4u94zxev",
  "key24": "3MHC7JsnrKfcZ6vw6xcxKBZ6geTTymnKewwZsYqMAafGv7RXAxfq3YrVEepDH7NCQsrmeQCmAXxhHyyH9zDFvbCL",
  "key25": "LwegjtCGWSaVwT8kfALDTyHWSJCYULjvwfftVgj8xHymgmA4da6Yf96dzmHhPkbqH51dBGb5noFZe66YpakX7of",
  "key26": "5RojcLnpF6RADF3aG3RSfiazdgCBD8USQEjwFvgRaLWZmuEhDjAMADyPQhkC7FNhCyabyg5EJXpNfVsM8Ad1BSCR",
  "key27": "T6YXuf6aGnx3N9zww1p4YNCs1pppYanuhu1TMQWyUygJAU2zmXyehathMtYX8v2zhyXrQNJCE9yg2mWqounhSpr",
  "key28": "5qU4MYaEXK2DbqWoaiQFp9ycEsmA4TdsgrmQSPncV1963SP2RGqY2Q7XZ77JzNMMfc2g1vUMBxsJ6tK5QrjA9GLQ"
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
