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
    "L2oDXibJ75Emf4ZaoakYXfNVTPDTcpuLVA6VudfuTpYYKZXyi2eXgeKWZMpjZGFsNPVSpWtoKYTHXWSiM3eKDVz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2B9nE8P3Lp6wii42nQjKf29LTYN3usAPWw8GVEBzg5VVn2njDVrCVoaffjUuSHjs7eMDTSJ8PuZ3vXFrW7eqfkkf",
  "key1": "5dQLf9waspzBnNPZx3Fme1xGTMhVJ81Fgx2aGW9DY27b86xbPbfwopF96iqxPhL9WofzGe9Pz6nUkztHJJC9KJfh",
  "key2": "5NdBNHZLH5WyGwFmZprL4JrEpL7s97iNwM9jJZss8kVrjNah4W4y9yyEA3vcw2yTrv1psrxcDFtzD959g7B2ryK4",
  "key3": "3Y6VTLdX6XVfr8kL7zdvfrMEKvhRFfCZicxHT1LtKE5RXutf8UAeAScWqndEsc6TxMSb6ZCMooDeL9UgTrzoqNVQ",
  "key4": "D5naCQ1ZKoHiDdA3w6ZYMa63V6ufSYxLoYFWYFhXiTKn6NFLCBNeFSbGum595tzZwKjurNEJhAWCxFxerALMp3c",
  "key5": "GN7EK9CtERu52G8PAw84uz4FoDtRTQyb6VzdrQ4rVfcZfNF6Sse1cDpE2xGwhR9bMFCcL3FknuHwhKKsCSU935J",
  "key6": "4kq1V9RoctLpFd2CYTGTQnYNvZXMKSWN4aUchH7BXy9zBu5AfvS4H2JVgMxHokLctDURHRJLu1mZ4RgxGbs4dugz",
  "key7": "2QHj9rxjqNrXPDkjwGwkMJpL3c1qBgfChQimBwwyuHz6pFqgEZb1gLw6B85AkNijEeho7qsNSCxbFP3BHo5bLaNr",
  "key8": "391urTSX3abs9QV8Q6iPGr5aLTKW8RZXaZKiqTdL95x3MXWARan6wFzmvW3eSV4kaFfmq42DyZB92L2cGczH8LeT",
  "key9": "2bacNParCsEtz3Mik86QT3q6guC5wYrgGe1RiNLQRoR5eBjJxXbcUfy2c827NPp4162YRMSEMuZ4QF2wykJ7268U",
  "key10": "2euGtxvTHe19cTTVM8oWYZ6kjakeH8KM83cnesxhLmgDtMaYwUA2UD8bNaCSeTTumFCc1W9fcQqbTDxSH7iS16SB",
  "key11": "5ctGnmwWnrdUdBvw4Vt3Khbz1HK3P9N7B1yaeF7pQ8RbB2bcSdqsv9PgSMgtWgbWtZFtH9MjtxHhC1LQcea6Enes",
  "key12": "2a973ycAQ6ZSRdhNYjMpRqSt6MXDehDs3DSaAaBryYZSrT6VMeybqBAMkDSBPULGoQNhsoiqxr3KRREzeCtX92pJ",
  "key13": "5kMsZtJ3FxUBn1WQ9AQqpzUE5DfiDEjfhSn3YStFPyg6y4fhYVsMqWcQy9FRMQSmrv8DBWyD24kxfWSsiEBkdYm9",
  "key14": "3mcMURvcxejN3e2jVv3C5Kp7xmdtb2h4JmuhpU4z4FXprADu2jTiDcVGuj2gX2YgWsMPD52zpiJjbqHebgADrrws",
  "key15": "Lj3Bqun1DKXd8bauwwaBCt3sz91NrJB1gC2DSNaoz7E7MgjXath2d33mJ2ziTZVjHprYY9U6dzEXVrNFX1yRcKs",
  "key16": "4dSsxERkSBUJwPy5a2D4ueejkgmqUnVSmjtVKXHU8U53qxKSHBDXeqnraKQa9aiPVREiWrg4vre824b1ZTYAkqZM",
  "key17": "33Bjgfm6SKnMXbwQcjtBiDJjgyavdum1SRjFm9xV97f8A2Moiz9ttDzYuqjJy7BYEKJYvikqHV2TuXcoP7zinjPA",
  "key18": "5eKuV1ZRr2XvKwNqhJGqkK28yMYdP9Uy4iDEQz6oQR3MtXkE9ix1XVov5fHs6DNsPWMzQ4nyUgrygiPgr2bqdN4D",
  "key19": "5m4Nj6hkPtMnPX1EeFfAZ8Kj88gyLmkwwXotgzXdVStf4Kg7EH1jN56SsSWJhuRggWEAkQtTMzbHZnYYiZdaxK8n",
  "key20": "CpHwk5C6J7uF8F2NraVfey3mzZtvQFk9iNTrtH9pHcmKBzPNAk28vwKf9Eez1aAoSMZL9f7kf6tt24Sg2tETLd9",
  "key21": "2J7PgfwJZvzacAWdKCugMAWkibqYMsTpHQ4bvVzZ3ehWoWwGLMbaFaTY8p9bGNtYrQhULr5wzYeCjfP2RV38erw8",
  "key22": "2iNtM4Fr1yw9S3Es8Ah2HRyEDadcEqnKGZTdtVxWcoRhoPyFM2RJ3FsrZ3fxUFyMPyqAp1HV76BJzfmP8n7K9QBh",
  "key23": "ZRp1m9Fh5UghvH1D4xo9h6DdbVVnQ8fvnGewMmeAcXGV5xrKzRVnWiKKz8orkLxYMsYGYKBpZwnWKLTQG9ydZLv",
  "key24": "5hHmFFbJMngJ2w4ofeWEvbt23LCABTbqTgSR4PUMJGjdxkCCCu4KeLrBMjRoKYK1LYw25xg3w69aLvKX67XL2Pyv",
  "key25": "3W9VrzpGWUHC6WdBx1pNT4FNMsSSckncKRKZN8oM82PADkxKbYUZ4DcifnDxfVp13YMQ1jEUowDW5p4S8dDwjex1",
  "key26": "4Spntay2kYoRRvKqinRAmZYXm9awKrLhSRkppQWAZnsgWoWgHhK8MYBV6GjVCGGhtaLdPWsZT69dX5NS8BJ5XNrw",
  "key27": "dL2yTv5PAL6WeZUztTVNpgr51VMa4szKLhxpuMbUL287b1ss21yfW7seUa8cAmxn2K7cSVsf3WSn3gZjN9ks2e6",
  "key28": "3YVc3jXVQvmDBHM2Dg5DzGdPuFV38SEMRnzBRKzqqJmSnq5epDEKkT4DVvbUgsp6e7PDb4HnM6spBXgLgz1dYP9D",
  "key29": "5LBuRdhLXPqGpdDCBqyR58g4kkp3dnk3Z1sgscjrACJqXPFqDH2MrEVwKWiqBPEDgdEp8SkSJ8wnqzcVkyE7pRd3",
  "key30": "4MQWKxUnPWEBDMER6EGCPFKmFUGr6tXxzWZEFY8HmFhHnLiVDyUafNyQjEP8Cbs65SHPUmCBbhBRdRpwXPmvJq7a",
  "key31": "44BbT5HsP4qHPdjNvkeihMkgomHSxJjzayQ4gMXgEeuANckXok1Z6mBcysqJJthsZajER6aR5hHZnG43XuQiaH7m",
  "key32": "4XjAmxG8kvU62ZTdbPgtEfiaLo3LtjaAxv7A62wpM4BkDre8AUzDev6NqP8kvhGkaB49tZ2MqwVhu9vnTNCfaQpb",
  "key33": "63x1AVLgjfS3hy31Whqz12bo5PLA1MCC1a2EWLHWt4VsQWCXMbzgB87Dkwbw2MGaU9wb4VRBrAkAtyDc6XHo1UZ"
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
