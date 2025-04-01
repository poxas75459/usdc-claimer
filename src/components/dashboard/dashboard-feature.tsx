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
    "47SVbWi25chbQmQfRVJKH382tZPGnDbaxTSJXNeBzAAZUkjnzhRNRAkF7yeW9K4LH1wQoTZEJrudDMugcoJ2aRnA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4efXJQaZZhSs9hXuB1JBge4nqbEtWanPDfYdiX5qsWBjVqxmn5VPDXVNdJWoANVGkYYu9g3tjLxEr1vV28z1MowF",
  "key1": "ZozxNxZFUsY6sut91ta59uaJau2qXtzJ9tZ3or9ogVdJZqv9xcpCS7zFs3i1xUG6KXNAx6Zs1ksazXjekih5quw",
  "key2": "3EAf9kkCAHC1bifv4kyhVmsbRbuML5Y1FHqm75LHuRFrE8PSyYmGgWgGRDr3sE7ghJ8XHZduXkXLQtc51HXNBVrh",
  "key3": "4TH4SFZg5VTRrFUe1dDwryKjZWs1TUK7GepuvSGkkjCchdbKMcvvLbuu9eKX6nX3V6pYzRiBGtVwxyn5wWPuLvL6",
  "key4": "2ihvQWQpzetTsXedWfjYwnwQ4SVqRcYQ5bkUYLjpEY4cYaWK7UmgMJPbE85xSB6e79pQjBBUoDXH8udh8K1dzrSA",
  "key5": "3Ls18ygD9tkHVj8qbXnHLrffn7thsy9fdEVVutTW3aR3w8dzsWxnPNvvX8c6PD72DbMAxPjUrpDtpob1B6j6T7ri",
  "key6": "5EDGVCqqZQKvC4aJ9MtUPgidaoDbP9V34PZLmwqYzc9Patjt5ZrD2BMjMowGCFJtRYycMJiv9pqXGVpBfLUZk6CT",
  "key7": "46eW3pbWMKUrG6fDjCYFBK2zbzFNJSg9i1afkAJSoCY3k3dScavBCSLEU4M5N8BxbdXAKoXKswXXwpXJRthbTj35",
  "key8": "5TuzXhgEENTjZdRUgvpZu7nHfRUKVX2VcSLtGaYJJVgSZ2Bx3JZDCPPoE8jrjNBzaBBaSRAg3azpfis1oY6pQrAN",
  "key9": "3LQsz5tGFjkPQtYMZfaddijYm5MfeQhEvZBrGQUjKeszaZt2LYwnLnS3SA7Hfaz9oTsq3sVHC5PPKU2bibyG4FAQ",
  "key10": "3hj4MVDHU3JaF87A6mwfLWyz6jrmQoFs8X9yAYvSvUCzDtdvCTegCu4DTGY3e19ugfsCtVqrHkA3mHDXreoepFM3",
  "key11": "37fcPoQ4WkdpyEa3tNPYyX5oxDGDHfLKvs5mmEvhwKxYyZrCWm1kdw4wq32SL3zLyvRMRgyo272oS5GiQWFqzkTV",
  "key12": "4Kib3ay7hYUorEgtEPuuTVUPRXRJPedfQNjcmFmKEkNjBfZ3MznbNVtgj7qfqmBYuuwg3ivrrzDoMhWssdzqsLvd",
  "key13": "2j6e6engEAgPd5WfMG3wNCudgDGeE4vN69DuWmK4am5XT6wXtf9x3kAFYuwh2fMsJqF1DCD7qGevKMiN5oLT4wdD",
  "key14": "5tt6PKyy4oMtyGeQ9Xspa3QRpRuKN9j4WwXBKBvREmxadd9mk39SXFYboUsU1mttAdVkgMWfxfRD6ov37FNgYFj6",
  "key15": "3gGQjoZCgHYPkoktbyRv5AYGpXxJeWAt7xRg7oZZPff76mw44E14KkWMJRswEhjzp8YkCuWvfQccX3mhLP4Wyc2P",
  "key16": "3ngWMkWk3PrEuqzgcVss5jRNmQbJZRxC4KeggFe3MtLrzgGrtX6NFbFB6WUuLHboLg494PAx3ngnbhk6ULM13YjM",
  "key17": "5U3HJy28xzp8jmZhUMgmfjTvu5QTSVohKhESp5pdgb2ajoUF5qcBW5MPZ4LegQH7kdswaczpBthumKneUUwQBvFN",
  "key18": "5yWRZaFPJZvaULob6H6RUyw9pFiqeLdGmxbThWjzxhdjn5zJPcQ2d7evZ5R48U6BRQHTdQHCc26JaLJswJfeNYtG",
  "key19": "4Rj4J6pDKp9hEwmFbW6J9e86CTMMzRSyCzpivn7MCgXPtmYSY2iNVpFEiC67JxA2zNUr43tgn6QbMokkSjndBcU2",
  "key20": "5458MAWnSZYmyqqv6wVYNQ61aiNSaJrpXkzRTyCHPc5SjMh3bTwa53p6Auq5picFEZ6Le6NF1EH1dcv5zcxinKrr",
  "key21": "3yb8BfKizWT1MHXbpwTTNbBQhEzGxR4WXaSygTrMyMwThx87rfSox82touXYEqjSPLsFaohMnXryCAAx2weg7yyS",
  "key22": "4hDkxYSSqSw5CnXsYgY98ZuVY2JZWP2bphSnEbhuvj8FuJsAkM14WgzmprL7bnsr9NcaUpDTCXhEvy7w8gjE5Sfe",
  "key23": "5TAPcbGW49GY2nrfhqBcMhEEjHArkDdyeFE6Y5jaWUYJuuMM23Be6cnKz2yuEWNxS7bsohfLMYQTSGuUVvYYwKuM",
  "key24": "5eZ2frPyZgxphWRzcupumkbrB4HsEH5u2k2hP9wPuH46Eh1QowZ3oW6PJHc5fRWmifHuV5NJNK82LgUgKWWBTnPZ",
  "key25": "2otaYYYTfjw2iVT14VdmghxMpdaWJYYnu8UgYCZwBqnrrV4mQUbsnGtUncynn91yKauFdswfGULrhuoipKVD9VR",
  "key26": "3YZ4x2UWXCWT7Ja1pxmQrQjiaomwch1dwKBGJUxqrkDB12rRp5ptmhzCrkgsK6Z3btEsMcDddxvBVoevqPCLqprj",
  "key27": "3dS3NcEzf9r8dHCjPstJwhfWgT2GSuwUihDQzbRayA1L77VrKfHmVwXaqM8sp3X4ZiMFnXawyBowviyx8rkeDmL",
  "key28": "4EYs8V1V5QkgM2PQRnMAoDsBWVSpJPKzX4LfDo82Mz16oqDTBv4qjfniRxyuq6Lp3CAinZ67HRHN1VhNco12NyZh",
  "key29": "3tUUnc1fqgHXZ3MD1w1W39oaZKSyNoWPYGqJywh65MGkJNSEcLbyUGtYwLBvD3a6FcaHf1VgY8huSsEdzR7ScqQJ",
  "key30": "2vW48P3B9WuhUravxcAMUaPfPyuQTu7TGkwVxCckPCxWd2F9eTLqa7ttzBazK4ieHKZuCzaLKi7xN7KsaqaxRSLH",
  "key31": "41B9YUPrmKfXLN3HVuAYrUVoWoPy4qN9cdC3nxgwG1ZtfbaKMCSr12PCMt1M1Sa7RkUe9shNFt8xDz9DaGMYxsqE"
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
