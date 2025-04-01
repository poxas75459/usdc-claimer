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
    "4YZhKFNVmLdYpFbBUTimg576pWkxpyfgAoTBzsAdJffayyRn11FZ28LNwePnzpRcpRErnirj2a9btmaKast3BZLK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42mN3jqm7ehyuc6fykGFQakrLx2ZkaxyRqiBAYnbmpqCy72nbStEw6a16jLzC2LqmDDGGMpcjL4cKvVgEjFKcpMJ",
  "key1": "4CtqzriW2Hi8snkdNdjm1gach5gjzfS4A2hQPPCrTtnXsa7fUZkN3yyqisqyH36xeAD85vzfQzHQrUnZX8NmY6cH",
  "key2": "5mUghpQjcNErxFAoLk3sMqWXfacsoxULmkSUNMaZczGoRc3jPaaj4aNQK8zF1K1WwhveBv8Ds8U7fU7eoyDCbUyF",
  "key3": "3v5zgXx9x4QeDxLqGtiDrHkPpDLVPZ8swuTGM9Pqv86ibSPzZXUohosgEhqpJjQVNB3pFHquxPsANoWY5tsphLhg",
  "key4": "5z7ZfxcZiQT7LBZhfnzf47Hq4QPVLyHDGzvFjXWbpE1vYxXbT7kKSWoo2aVzYWHkG3dLz1wGf7iBbvSeY6Ge8CWj",
  "key5": "3Z1wemNyDKttMhpSddPhjywSKh3SPXXmMVamRwd2DZkFG1rCi89CJGR92NAwDoLaN6Ft8ZLsg1DXX9WZuc2sF2gG",
  "key6": "4ztLVLokBkvSktyxWWqVvyGrNp9Co11Cy7GkpRkFZFoRWe6WXw9Sb7APB2JnC1moedp1Lp7LRDKPQDiCwe11zpU6",
  "key7": "3ew177Zbwqa8vJH7XpHBpxoCNjmCHZvaphmAZUFBd4DFBkK7cfSvU5wJUFFZvDH7wtx2Nkznz8CbKwa7pBcTa5wu",
  "key8": "5HrykxmFwRUUVef4ewq6uU1bMTzAEpMdTVxsMMwfF1WXBqWNeUpmzGLHyHsGjyftpsPBV1z13SXmMEpAt62TgGdX",
  "key9": "4aBN8gtaZrnvZ9Gey8wBdo758oJTBZr2NJiKxvn9uxYbJK5boN4YU1wUjGH1sneFPZWcyrEKZhUTpdDTaTeaNNKr",
  "key10": "2pQBjuMg4GPcutbuY649w2CEZLK2kmQ2Abz7p1xp74bocFHP6LYgqeSJbrHSd7PghyaMjWm1caSAYTThy5s9LzqM",
  "key11": "3jh79aTuR65r9cH6wur3XW59PST6kK2sKe3jCrn37vd4HKrNyrR9sT7jCMshtatfHj46VYogBjUfSTMstFjwP6pM",
  "key12": "c6tGJ6gd4DSxAs8XM2pMGMMjHMy78iAWukgxKPNTN1mSrKLpFES58xxQEGguBSSfgaaLnqAzis164SNavvgp6BC",
  "key13": "3pABKDYmYSKEXHcbVVREnky6LTe7PzCkfd4hpXe5HQ39TCdNFsui3PF3QXjpHErpqTLBXy1yitdkXu3S7egpCj3c",
  "key14": "5r3YWTcnqknEJweupGq6XF9SVBuaLjrywJx7R4QFqE5i11Zxib71NKRRkknVEBqWGvVy8hsgDBTcUrjHF1WikjZ6",
  "key15": "hwXT5XcbpztdFDCsQcWbdt9771Q7VEcdbXYNPg5XsUpzvQcLFPaqrymup1Sw3mkswzEkuVLEm5xXCo5V53Yyw91",
  "key16": "3GKmewei3Zb7RZWBoTrNoZFEya8X7MvmqXe8bFY9Hs6jSF3TvPTB2VA8UNNFnbXJz63d7Y6e2dBKUN4Jq6Qbs4RK",
  "key17": "4iGxhgU388DQ3rpEWbAZHxjSbKAbvyDLgCARa5MfiGv9n8XXahbHUQ2in6HfWe4XzDe7qQSvbEGwVbtBaFNMU8Hu",
  "key18": "4FrpjhRQJwx46qRn4ztmdC4LeCfZcVoKNEGLAidYwSnbYdVEb4UoVByG3vmgZEF4AHSghPpHqe8LfbDFP6o6DUa4",
  "key19": "2h1RSuU1VsvfzWsZDXgeUCRPvekgid2vXmMssRrMskVU29kvvsCGAdu9Uaiev3mmBgdPmKK2B1pGxW6toyZqxsim",
  "key20": "3Y9416kynmjPhaMtFSnVtKzpV9vjs8ur7rdzGA4VGEBPXF9RyPmiF8LPLSbcynuYzvuZCWbk9GRwpzgfLKYmpLVY",
  "key21": "5rCrdSZogA5KpAx2PCwKPSfexKqokzF2nm92Q6QLNq3SdDDbJa9cnwxNDZ2d5tjTrj7ffWmcAwiM2YYRikJ1TDMd",
  "key22": "2rrCg45DZ7vexNQshba5kck5FFy2W4SFNWwpGpLjoMMTjnEbyEqNnTnqQHsv3EFf2jNFgqfrfSodbVmmLnzf2WwH",
  "key23": "3hxhjiqEQa4aRQdSU2Vskdh43HrKciDPmGSaLTuHt13mjySJerQn2jkKRaSXLmbkakuqV9g7ECtnN2ZGESEUhZLr",
  "key24": "3h54aXPeoCZFRUS6BwAvZVusemLgoAjtNHnDd8REXmdvsUU1ek2BsyESwjCBJXBjQcMSAD2sZxWYmkK3Dcndosw8",
  "key25": "4SY7GB49sJwckXNZ6oekJmKFZ4XiSjJeb62eQXgLjZ8gEiiy9Amw2ebHbKXwBS1JvvdePCciecX78U85gdnLVuM8"
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
