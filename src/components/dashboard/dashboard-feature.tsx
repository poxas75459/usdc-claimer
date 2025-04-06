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
    "5GQxy8BZSvqcfcq2H1peyjM54bBs1NbJBy67B5wQDwb8bRR1w9EW3CUjRfcDyArB7F1dj64bSFj9o4C9qAgfKXao"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GS7PkQKp7eDyy7biGVHgskoLY7E8pfQT3z9frjRBULtzwomJaquWCxjMYhivKXXwxd3jeMRRqE4KNbAZgxRpat8",
  "key1": "3svRqrDnHigLxJtcUQtzghSfDkmKCXt3ZnwpDDGohCACpBy8qjuwHmWsJdHuyPG55EoGfdQURPJfXCLTvvDFbFzP",
  "key2": "4GvhPaM1tK6fxV8eSxonwQbagy6dDGXBCow1ePuK2PSPCt4JZWE4FfRFDnGmksRCieaje9WvKD2KBScz7ASAwXtq",
  "key3": "FU7RmmNgD82JhgFFCrHS2GtA1WPqZ9beZBmRK1PE8sfqQNWTM9c6npKAsPZc6qgXzw5tkiqTdUFYEFfSRefdST3",
  "key4": "4NosUDMBLJwMnGAM9E3QRNM4p8zvv8w4zRdg3soE4RbwUg6CskDn4MuFGNBKxRA4D4hebYRyBiHGpK8YSL2ZJmYR",
  "key5": "yFbpppNoVSi8v5ffBjUXdiCx5EaywYX3ADxLAD7roH1TG1qKv4qRrSvYu5btzhSbK73T4cU9n3oDadoL6qjjGXX",
  "key6": "4d34Ug9q8wue78r4MnroQksmov6urm2arZjm14uHDq2s5ZWo1WvkUL9nfqo9NdHtSgdXkpHdvFkLsxP8AhtBGH3i",
  "key7": "5XiTZKetb3dFwfDVouC2nzE6GvgH1CdvJnGBzih7xiPKmWvjUu1RLh6azuUUnqmz4DKgMohJdvZb7g63GubLtT2d",
  "key8": "5YU7Ucac62iDb3P52QAZNrBjzkhRTbMQaFRuF8xCHapqhA48CajwyZQK56QbdqXhGZasENNZAFdEZ1b4JBfQtDBK",
  "key9": "3mt9WdXKD1Wik7JUtKTDk8rQyWFaS2BpHY993Z9WS7ijET5L5etp6sc5UZDyDskocUK99T6ikmdRBpRVXkGbkAM6",
  "key10": "4p8ZRrq5Aisqexs577woqAgKR3jn5pATk2gsu2i2Z6qFFzJ1FgLUM9fLBs3KcVibS6fTiGpQThZKKdbiu2y4QbUN",
  "key11": "Aox9dqxKrNUwkwVp8dYYyisKWSm4Yy4KETCka2hBU5MwM9qejvJTPYdm2bjnMfpazPj26bUhkdnTBJ8pN43DkGQ",
  "key12": "4LfkraYkBE3TkRa9aRZNKmRQXVTw6DH2FEUgNhMiQzZyRXpgMKdTX18BJW65GV6bpDhtTZ1kMW5XiVVj9K7JbAyx",
  "key13": "5daugEWPYKS3wzZrCfL3tsgvLmH89ZyRUBLUoKLSUSrrfghx9TKfYWD6wuxv14zzaiWyi6cYx9pSL62JjPat5LaP",
  "key14": "2oHRXHCKXLNkWny1hP7zGQFaSUGNvd9x18GgApezK2TJCYia3B93xzS9Ro1myYbmtV5cp3sgR6wTmk12TgKU1WsQ",
  "key15": "4EbTLs9Yci8ncRoYpmRFs1f4eVNpiAZB3fL4VR9jDSP23zS3QxBWzXMVXbWwdZYDqXXcEcWdHBUBCBBkaYne7nkQ",
  "key16": "4gMCtk3ZhyXXTKpr932pr1RGan4zaTL4g2PcJG4qF9hFd2iMgBztSaF9oP9g27usZBS8wyF4GJ9Nn6iv76hpudVX",
  "key17": "4AKQakzkMWN8J9h3HFSV9mPiGBGQ9EveFqeRpC3hj2BvNX5Bfit26WfzwrdYDPqx733qGkjVFahQFoe8vZotJnTy",
  "key18": "328FThS4GysW83pcjXc3N2o5d97diwv9ssr9ftrsZiUMrvoqCaqDrAuyKsDQYKsy8Z5tJsTs5tRjWu8dqsbzPFbB",
  "key19": "3pFLVarN3iG9EUhytvAayGZmNMFVksTPb6zhqB3QS3XfKSwWUAuhSK73PvmvKxKydL1ywBu4FdaQE9HqxuK97npT",
  "key20": "56mHPSFfnxbq7cpTDwveYUexySyhUF6P4yjLuimy2t9fFAe61m6dvLVVrzp4Nva3n1RdC7scrUfrE9bpFi2JWAnL",
  "key21": "5gsnED5RPfFZE1uU6xNSrDLs65bE2j7q8mQFs9Kno2xiYR2NRm4gvCzDPDKp59k1AHXSkjxzJYP6XJv8opYJ3ABP",
  "key22": "GFYUFaZSJFTyxj2DCWq9PYvdbxGpGrJFBvfEWfffU1Y7F3dQWM4jtwp3peNRhajpWGAnWDHnDWDNT1UtN7GYz8q",
  "key23": "NJsJFvNeL5EhriThf93U8DG2j3MEubR1kr58fcqeMiTRqUy3PbNPVZnUTr6JPTpgmsbyXu7B22Jps9ZcBuHC6bE",
  "key24": "5RNmUdg4z8C2BTmeXv9rWjqwXi2cPYSrC8DaM1JRePrMHStV4MK7ayvWBrcU7Tg8mCwXgJa1hma2NRUHy7hodiVv",
  "key25": "52hG4BGJKEP3zyryLfqgP7R52UT88CttQPYLrRXLtUdvp1FHEDcCnS65h5yZgN1SWy2y6zdQwmzccCmRYfhUbBx",
  "key26": "3wbhziMjjw4cWK4uwsQ5kksFQB68guZPAaExBHdCHrWFqsZ1bhEGNmwMGbFv6eHMw1FSk8NcFU1uRhCyxcdhDera",
  "key27": "7fFhYF7TGBwJvP8bbzJSH34yVWFfWn2qNu6N7Enp145JYt8uSZVSazVbsDgcaEhaCTWnCR7tDakdwpL1d9EagAW",
  "key28": "5hzrmDEE1gqyPyN4kGY2ziEmKa5Hd7PuBqYZ5MxQbdT5yfT4bSNKsb6x6iENVDZZ8QPH9PXLSJ8wN61vDTtXSEQ7",
  "key29": "25waQ5uNHeYxPnsMdKMUnXFeUd87WGtLkNK9eFMVvxaZvoAipq569cHBLgxKw1tpgq9YsHZsebJNtzjUq1dPWWQi"
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
