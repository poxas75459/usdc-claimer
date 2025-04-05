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
    "59YTLaAgu4VGRaJBE6Wxg4ofeLcyZtFdbwiKLC4qK7KELgBeoeWFp7ZsjqQ6RxR45fyqVNoZtU7y58TWWUEREF7Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Q1TuzniwxxDvKc1uPu6EgeDuRJhDwXENMLZHcKPSm3nGU7anqkepVU8QB5AW3GiJmWJGTxLEtAU18ENPU618WAi",
  "key1": "5qDRsCvLfJWqsijHA22s27v2sTU5TCusN19YaaYn9szLFR6Q36d7fWMedL4SB4H8tjJnhjmCrrqziBmk7r9hLeui",
  "key2": "4wVCmFsuaCrZGRdWYbZiQGzCPyryykWBMwSoui494ZEjjuUYaVHnh1sxWZWeKcgXdeg6jY3xAywaViZKsKKiSW8q",
  "key3": "3nwKAtGLpWKRDGyYwGUKPNtTM8ogyiJUyFu9mDfo6BAJtNezkABqox3qZZU1r6ACJ5eMAbLXY9UeE3AZ5bz5uEYj",
  "key4": "3GHNePD9c16T3jwpXw3o8UeFW5ftHSQVGj9i35e9hZv3Mgi1jck1tHRFQBLQJcwTQDb4xqoPWETbKoV8C6c6YTqi",
  "key5": "45jA7JXQXiLU7pJA1awFuYPH1JYTtigTVc6fe3RtWneKBVRC2ud7Fdnhzga2QD6Lw36PrZorn3fhmCsAcQayrWh4",
  "key6": "5ke539bVPHVT3AvHk93Un18jwny4kM6jnTBh94YNxDE72mFQoYnnANZRHHhE2rs77x5dJMpr44SUXftpCzudEyAQ",
  "key7": "2YAPtqoh26vESgZEc19HNseydEC7wSGa5i33nTuLXbMyBe3UgE8QYHYtdmyCBm4EQyoY45NcQem4nKUhNLfvSuDt",
  "key8": "Lp44ZiLsYzuBaZUqZhftTi3eRtV83cqnx3KnynLHX8wc8pQdmWBkkCUAMUQLePuF7vWyCmPJEnSte3KK8vQ9wVN",
  "key9": "3heP9uLtbFaoLPmrYUVnPvPnXiZXVsC2n1js3MNE3yytf128Ro1zk7JPNsTvhD8qG4sUcibjy6Vo7XC7vfPA1rUM",
  "key10": "22KVRMofYvt7VpNJZLhxMfhQwiTjeZjsjYui47vK3FRccvSafzYC3xaETY6dmcmUigLpgkCkvhRb3fAZUeM8qKHS",
  "key11": "2sxU3K2sQqFWcSfWTU68TFidf2bc9GxxkaKuECEmAqvuVfQg8F7TNdjNLYvcmm4JPVneChCdmWTnCSb4vDRDQLBS",
  "key12": "2aDzSYZvyP6ruBgqMR9ALGndneKnP3o8PfenDUCzK8PUZHBMjuwKzue7dinduBJ1uVo3QmgDPL1Lt4chEnDui1CP",
  "key13": "22TU7hAyjVDTfoXD91rmGYqEr8VbQrEHwWMshq38ZmiZvLLrwQGLcdX96BEtFUfUwsTQ7xY6gQTPYzqvrBau5BTV",
  "key14": "616XBj6JFhhfRB7xpD5r5hhvESnbjjRs5kUnJoLsPfZPaXpUvFRDVb3gWJR564vFvNJwjDNxbkwjgJohYZkFeM9Z",
  "key15": "52p7Mg6eVGEAdBCYu21VCQsAYRWkiWvbtzDmaYGx6bVYRGYr2yVNXibjYinh5C92SuuRmPNFEJD5Xifps9mWWcWE",
  "key16": "yDcC8E9oifqUXywCa7Uyt8QuaAnbJYGMx2VFcfVBWifYNotMTqVi4BiEcRZRX4s74pxuoCijTNretAeWxnnFihh",
  "key17": "37GJWJX8KJRuh5gnKGXXCpszKgREVNrTn5cmxgZ65bCAXu81b8fpNZk8fiuKnxMSrSVYrDvdgu2wBCr8feAXEZEH",
  "key18": "5udqKmNe4xxzmo4NTYZDp9mKAtTWktFsLXujrMEjJr1996FSzLA8QAaFxnPrEkbiPX7VaBwUcVBbp1wJY15BWLvh",
  "key19": "5Sw7ixBS7Vdhuk5YGYgDKi3qik4TBj4WJmB2nvmVNxWuB4Znd5om7Wr1CwWKVXoWEop9HtGZEJNkn3C9wTwhE627",
  "key20": "2h2YyrxbGRwsUTfvnVj8BTL7S8oC1T4HDda4gt8xaGzezC6npPLVkr6ob5ZbJFDRt9JkxAScQxj7L4phJDTuojDW",
  "key21": "4y5iw66EPs4fYVrWeiAs6gw1Lvttc1Vy4Ui6cKBNcSnQ8o8Bf82fZ1CEdQRYsyQv8aV45tZS1u98UY5fsafPe2pe",
  "key22": "3mxBfHoDV8UcccXnJ2BGueURXHiwBUaabYhAT5cxWrqDAzXvptFvz9C5QF6oVFCSM4spPZETWQqA5avmL1iN7q8L",
  "key23": "5bXVGVrDXcyBiGV51Esg7ehfAHghqR7h4BzqpPktNRorehwSiHWSdZA8DXmYLvdXnuLc1EpkceM9XzSn1f844hi4",
  "key24": "1fWYDzXws2YCpvBCigUGxcA5uxTcvrm9TAv4cSJCMRXoZM1p6WfnWxPmgFdQwfFK4HjThHBoNekB2fuE4WFn33h",
  "key25": "5QZXnDpkm6A9HazuE9f5izDCCZTmNjbBLWnMK9XWx9S2JagvsobuXniBgoRvue6to9iGHgoJF3165AcTB1mD7nqx",
  "key26": "5a1uA7LxW7orrxPzPnFRtVBsju1ZjD7ojrXDNcBTKJpZkNmafnGdNRQ3g1g2K1B8rMzx2Fhk4GYrT4GZmr9u2ntF",
  "key27": "43kA6vcZCf8B5yFdfmMd31Q3FYkMs4RbA1oEhoziGruq8YtatmRqXq3URbmAVBaS51m8wZjwzVsVEPgsKQVqpJpq",
  "key28": "4Fdjqdf3UUkbJziKZMFCbhLNgWNS5nxJmi4hWsDvfpvL475vsKQ21QomtpZuZc6u23oSdmqKnRwbvipA6NjvnRyA",
  "key29": "3Q8A6cuLBKV1NTmR3x6BycT3QkMAvoVci6x6jpv1XBPdxhn4VzYxwYcqhChjkrGA6WVFWngLoiE8n2TjoSUF7CGv",
  "key30": "3z1exGMFQz85LMYR8evYRBupRW2u1nFQctc4zHKzhxnjHrTDHbaE3ipB9v2JTRg8b7T4CopFznipEJTfnpQEwGMT",
  "key31": "42KcUx26cMkAYiyiLx5aJ2XjrkkZJESUQbRdeVUF3NeUWBz3mYDAnEmJwiZV12vkhzEnGLpQXyEQpnMPPL9eQLCR",
  "key32": "Fre2iPfvSsyAmmxRAqgdjwSLTHBEwpmfGTs6zW17DaHY3t6X16FsNXx3Ywvdn4TKQEx58rVQdizoAreBEo23JkR",
  "key33": "53vooJ3ppBJi35H5qAdL5oxvnJeZaTkvJfWDL5kDL5B6KEnrPgHTUfgs7LEw9ZiXSoCmE57Cr7qmo6FicES6nYyj",
  "key34": "5uknFJuiqRbxkYaC39bXFCRPcxdFrkyfLiUetmQDR6hzCNDGeHAGtSLqPajTentWbNhSrYZCBMJcoHLEGemaqgZ2",
  "key35": "2CTWgZgC3yGyDsd6iXTDWcd223jv5NqivfepHgVWaNgCJdFwWQNmvSRkDnqrYyfszjJureTCweJjRBCohpwitV4J",
  "key36": "3xhH1vGawE7T4tVzFeze1Y3fsEofR3NtAKcHHncUDkoNm5KUS8FCCvVBjw8brz4nZ4uwH4D6kwFg81xafp1QYxkA",
  "key37": "R6jUsdXMWCAhs4YPuWF2RRvSgqA8wTiCH6ohU3ajKhrztBgASLyJD1y2jCsVg7pSt7rX2vFpr1UdAhkcit5T5ZM",
  "key38": "3LrvSMXcApYxQQVXAtgG2aHCPUaPoQfUx6LNNVhRt34AC1tUPGgUX7TG1vj2dLQu9YfC1ZMbvnxWktJSybkPJsud",
  "key39": "2Ewfjb5CtUsA5u1kasKgPFvdQD6oVTurxiepUVTgj6qjgBYmmoLyss11XEF5roU9WoJHGy95QxWUnFV4q965ob95"
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
