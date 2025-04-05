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
    "NanBMudAsy4s3cqPpEq3TGLoNu1KNAxd5d4crzHaZJdgNNe6STU4qRdo3rDZrQS6iDgmgCC6nALDjvqhvhUeACi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Etq1j3fbhoMBYnBCeQiTuvzJm4JTGfjL2qi18NbLz2Z8rVVAX6pEuUrxCcLkcdDHA3TgXHWmj23Bhc1uT6MKj2Y",
  "key1": "2ypdpjTjFFmDc4eqUkZuCyZHzspLaG48z1DU5rEeSJRArVpGvosajknmnozQL81Deos1R9Ms6525pZSXAcx8ANHa",
  "key2": "4rj4tJLMphBDB3UBkkLy6wzfK5wg4VudkW6RShnwHW1SGbF5XJw3MvaXvUjWDv6hauQcokY6BJQz25Hn2BjwPnsF",
  "key3": "535C2fiTEkQa2UMAwqxAMgRxtxfuJGTfmTdxPBwoC1azxvsNxcuF9oKpKwkmb8e4q373p2DcDZH4SfQCNKb1qcR4",
  "key4": "5SD3nCA5p8jsmnkWKzTRbmduoj9kfrFapSxLh7wdezDcKxV1PZiNN6iSjiJ1pLykLbdpFZYwnnp5sfvLtdc6YUCv",
  "key5": "3uPWNeext7MwkTKBnBKUFuqBJGFiD8nzU4yi1GY1UKrnFcTssnJTE7kqFkpPuQ8LqYanpJmzQnFkcTtiyPPkXU14",
  "key6": "452kCpfCaagf5k8mLv2zeQr4S913rar2MTR5gBPL985Se9RG7rtbHfrN6e2sJDLsWZzwrNqnEEvCqtMkSrFY5pS2",
  "key7": "14vCnEh3qJJtnxJuXLdNLS4XhSsM3HC8HzmwktTmncU1js9GwZrVcY3J2NVUjxQLEi4FJBUG5d69rF8nN6METid",
  "key8": "aauTc3eZGRk8Zzw2EtyAGNwX8UMoWVDEYGbBH4sAej9AJHqg8MRLnJ6irTcGnj8UDH17kuTNNxx8W1qox3ZjW5S",
  "key9": "5DEL7ZwvbHEptFrfiRQm6bPBWyE6516eZWPyDM6mTx2h19GGXtEivbVxbFM57bJ1po9UahK7XRaqqTUcytEYrp3p",
  "key10": "3c7fFP1AJgfHxQYdNzVTAXWhJWtRCCxfFvxvJ85tzWfUsma4aAtAzMicNnEk8TZvq2XFHvdDVuWyscFZkp5m4NoW",
  "key11": "2vHC7xbD9sEkkknprSy5P3BQmHY93kXzKvCBqno6R7kUVvZFKoSHSu3fRQx5yw3jNi1dmikTzp5HJDsN9JNRsFav",
  "key12": "3ajtUyCR2hJuszdfMXMVXVciiAe7mG6M7Lz37H2qY3EKyRWk2M1Fppt6bskayNjWrq7iTSMw7cEmY3xdQWAC8rSn",
  "key13": "m8UvEBRggXk8LkVcUyAUQyuymo5xhs3gPe5QjYvjs3wWJj8pzgaycoV8gaGyuxGhaVhAxq4oGrEbqGmqBiNQGiR",
  "key14": "38TWpRk9nqkqkHECsFQu36LNn9EFpRSTNo2uCesRrGabA94fPRPVKBHXnZMqLFHxWaG9yhuPFrXMNkJ2hZ14PsWV",
  "key15": "6612VqYGJTF6VYgwWV3cAgY8zRCUxSJarUKytW7iNHCwRi45ZArXDp7jRLJ56SWWQNf8gUt9pqVggtcSb8SqKh8S",
  "key16": "4bcFY6vjiJL6UPYQcdTRXrSCQQBo5cRNgAhTxYseCKZoCnDo1oN685nxN36v9NeG8YxyBj2Xtx4dpz4N8opdu3rz",
  "key17": "2Ty2QHbuTdxGTB3CNoLNWeaGK5KdzEFFkJc9EvGiSmN5AEsZ39Ax2NB55C13sAvVqquxtvEpZoAZgdbBbC3DBHvP",
  "key18": "2sswiinQ3HikekFF2LjnMqQxss2s2A6TDDtXi2YABmnv6ZQWQdL6kjMnVxpAY35svQdA5cpEGRYDtLUSoEw3XVqc",
  "key19": "28TTPUiJbbjurf7pfy815vB6rBTARRJFAZ5fcyjfDBkrBXHn1v7NKcPgMuSfd6iiuKBChQ9sVPJTtQKdEAq1ixjV",
  "key20": "3znT1uDSXqfB5niZN6KsDxuordUboZwmCDB8ESD1pdbieqZ7Q18uQLGAX7VcsuoggnDeN9aqrQHm1nqrxwWVBZVm",
  "key21": "muvkJMKraEHP2suJShKErD7LZmgMchBPb3FTpXgD9ZkNx6UTr8qn2EtaxJYq7EmWcDnchUKNgP5mucH36VuJ9Sh",
  "key22": "4RbkdtKm9DKysYD9Zj5zBTwVQsrr9MHgvbLGd3Skq3EARMioHzJYgfUDeMbcGp5D6jr3miWY51Ghv4i1KcMaNArU",
  "key23": "3U2L6vQra52ZK7WpByNBtPc75XqmLaB1HonwAXuztEzh4y3Nc7Jgb4wc7kBSsQeb7DcmvhxuDaiSQpFAGe6VhYMh",
  "key24": "4gyTthnoTtY1grkB2dxXsdLXTh6YMFQyGWEMD4tS84RwbePLK7DJsWVEv5CTYPZhoxbdidRrfyGNYVqyZLjBJYx3",
  "key25": "2JzxH21wWeHfaJY2Dr7F2bGdDxu8Uqr51Z23jrv85NsHBKemg2rjvN2w9Fx7eevkkWVdFJBtrBw6TqLSWsNN7669",
  "key26": "21fc5N5gnGRPG4DWjuTbic92N1SQrQxp2e1kHMFP1KTqSRg4BmPVLbTsaubjjmE8nPxZqWcnNM7SPM7BxLGkX2bu",
  "key27": "56Y4TLwb1KXznvxYWvWjreTFjBFuZEkr3MuV7RqraaRJGuqYdPTQ2HUbT6VcNRFacr9peCCsGsSzzB6PFwZGJNen",
  "key28": "5SN6tYbSTiX3MQdEfB2XmUtizVZrdwGR5HWtEmza5f79MpJ3USFbmmyyQEgQ1MnKPFS2YVSU1L9yWdWXByJroAwQ",
  "key29": "2x8JpcaYkhhrHLFWeMuPN3tTFMpYfKWbgwVKGWJReHwsNQGfpCtyuqJP16rdwoqvgjC9Ka88wXzqdwFD3WxZnRxd",
  "key30": "2VA7dchc2X4kq4998XJeDyrVKTtzUwx79Ta73SmxJiAqUrvcnQfMcfvpaUJW5hUsLpXmGRYfVffGaGs5VLu6oAPj",
  "key31": "4X6T1Amo9sQYbUttvtPbCGb6NGkAPM5gVXW8vrVVCvGKqTacPN9nw3nNB9R8AiNQN1hW3rW1jqRxuQ7n5a6uBFLT",
  "key32": "3n6n4KJEk1je8DNoobGiKvHFCWMd1ByZyw76aKaJ6FwCk2Wrm7s9mm8aFnPavZ6t7L9faKfFnQymHkeTvAnDZDoX",
  "key33": "2isrCZQ4tdf9WmU98Y92pstYBqFA2mPthchyeFiPmQD6nVCrYQYGaiLwFP7refRXRwMn3x3Me1kkNeJMTy7N6r48",
  "key34": "3rjKv4ncbreNU5Dv6TbfDDGtAbfm6DEcb8z4GHjTkNKXmarTLiq7RaVguaniuASrTRH8kYGZ8QNBHKhrGMd5c8aP",
  "key35": "5tXBRGLdyyFUHuB93cQfeTmzpKSXoTWNPqxCENHEuyCfzvx9tixVtuKu7ZH3CPZxkrqu82xAH38D1NxoAWvmqsUc",
  "key36": "52K7L3Lx5GLpuyv6UVfAejrS1vJe6h9zoxhfz8hhh3yjxoxzvBP7gwuH3iWqrNUtUBsvp5wS8fU7wdabmcZ8mBaA",
  "key37": "PqcWBXdeDyVZct5M8CwRoXgkWB85KxACw6zsTfrW457KypKtLjZPCqWjRzWcMYJnXtGp2ece7yNCucUXNUxUqnv",
  "key38": "5Ra8eZ8KEyqWAP1Z5MAxawPRE7CU6yhkxfd2Sn8Evv3i6hPVdTmzfzMzbHKMgxqwka3yi6gqH59TS2ZNU7GWDXXJ",
  "key39": "3Guf3M5vN1wCWLcrt1JQSqquy4c9PCZ51F4AnbCEJeqPbjdXjgsY5Aeu4QYetNRc1mHLbKxcKShyW68mauzY1gRq",
  "key40": "43N7moKhq3ULjdTM55mrGBhUxnwbbdzH2rGQ5C3gWWzAWFbuABnoQAHU6d8K4H4KZFTR2mHHW7DwCqgfvG66L8H6",
  "key41": "3ppsUU97yTyf5xVA8whgfhZEByKJg7UYQ6HkyV2i3M2enwhzU9sqkF29LNJ31Fh8ykLGPBnaK4Z1Gx6exghmVtyB",
  "key42": "36mibD2ejxELu9a9nDa74FzEg2nZrBNmSJn9rdh4kJUw1t6Dkk5diW6ZZniCsXYikWCgGNgFGiUWxEdc6XFS8FJx",
  "key43": "pB7RCD6moSksJRojWNaGQREN7v6FqLghxHFNWWMYyjdmMVAzgU1dD6TceiK6qcwh1ytina5pAtmtBL8ULSY3kSJ",
  "key44": "4Ab5UzQqQLysqWLLfJ6Pe3ZVRmVVKy9K91YwaDEuVNo7tckWEBSazVPD8XqiM8QhcjfeSpK6UJ3XzjhUzoTh7mhs",
  "key45": "3k5tpzubRAbQsqsWk6Zaiqy9TS6nt9kjCSqpYLAL6kCPxKwMfVfg7cFpLPAxtfBkELnRCnguPtHHPs3RZCFbo2nb",
  "key46": "59JsD2yYVFedX6Uou2mBFGuzjmAhdjB6TEFGBqw6ajeZguwDH2dHg7SKsspdtpeXY7rcAkrd7R6ZCggCpBe8dQvu",
  "key47": "5zQnmZUNyorCPgHhBCAHFDS6QSknNktFSsh7cnagFWGMiU3fd4a4FNMPCcyGBFHn3vVszTjAN8Sdzqa7QHE6S8J",
  "key48": "2TDnDSTVtJQGfBUK9Q3Qzyoa497z3txAzCUi5qQb48Wz5npq3VVWFr9qFXywy6MDQKpgJmDgjcG2X8a3mY2gZAd6",
  "key49": "orekMAGhcb1HuVx1xg8NukFoS1uPn1QiXQctgpEdfsJ5L1QRjqboGnWfmVPt1nMUPCKFv7vGUTTrML3ysWXaEco"
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
