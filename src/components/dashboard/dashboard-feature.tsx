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
    "5fucKqQiQm2VjihawPZ93ejHctHBrSctP1XwD5asiNpDUbuK9a6mmtF4swvkcidHhkRK8txScgzJhYrNAuiNM56j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xGzrTSzChgJt3ztTzCN68faPUGHgxUWJsTT6s74o32tBNQoFaM6tksWYyYxjCRNt2GhvSDBET6gxXgLSmrPWaCt",
  "key1": "LTZGTUkihTCVWzn3BV9teM6FQccZFy8wy2cMqphkBrjMaZDJyWfT7MwJwv2d2aiUXNKYn22UEHWuX8PBy6jeDeU",
  "key2": "ESaQXvVGQhLdoC5g7skjCE1zM8rjg4bp4deq6U6ZjMzWbt8DMMwVvEGSa2ZEPAUqwBa9qPpqknfREPs72rjj3bM",
  "key3": "5txuutMdB2XG8Ycxz3KsJBRenTRBC7MMzpaYkfcbggThhtYhnpUFP4D8vg9geSY469jBAiCMyiJmb2XPaoY5EcpS",
  "key4": "gyLzvX99j4Yp9LbdhgGWRRip18esQ3pU7u71XuwDQk82KcWYpwpUPPJWwZqMyxq4aCmtq3yk7hvPUuBZj5KC5V7",
  "key5": "5SwRANPTJXsAptv1ZC5XCT5myCqXLieL4Vcb8ZR6yzHamGtSPMsz7cXnJfUTq5HuKpVuW9vjAadmXyE6rkGJGRwv",
  "key6": "5n8iMqsZjXCEz33ktWCf4raVdm3nUAeZrXHQ8UEdkLrRgkcTfigcjbLhGFJMrcZBRJHGmHqbuR3Fo1Nt5recGi1c",
  "key7": "5NYY421d5JFSatnSfcpBgCMRvUzqqtgg4AHi45BkMfHiCYgmSJg5ZUD8X1B7vzEDcaHEQPHW8o3NSh3tRzuM3hbf",
  "key8": "2sKvW1PH9KjF2PeiKmNkrS8KqKXynyQWSkzC19vVbUKYHNBPfKftrtR7DE9NtAbJRFsmoRQCva5PG7R8qzn1MYnf",
  "key9": "5dAh1ay2mBPSYwxtJAb2d4GtE4WfS6vBdWNTU4FCpmfeTspxjaQifWZSKJjZzHMmhPggh5bN7TdHRHf1SsnXkTP2",
  "key10": "4RN8aRjsH8zJmkUwBK3ktnwZNchKQNuDZjmVjMMSmpAfmCfRDH6J9SdSDdHKQnxGoyJ8kG1VemycqKdpwVQrQqjA",
  "key11": "Uqrp8PyMU8jT1Sqh38YLseHkEMNq7XHxdgbZiTtBf3hLwGKgzJ6Mg19MbGa1j14JkKiZi944XH5QLq2SPbHGHEY",
  "key12": "2Z7Cd88i2GBusidTR2ATW7WFafhCYy8fFpSV71UhbZN2MsFuYrPSjkZL6to3sgPvGdar1TmvHWjCQ8DiqNLvVtKN",
  "key13": "tiDoZNYMMkwdJkzayJG1TdceaszKc5pxdNLdWiC9naLDo8HfaZ58i9cBumhfi9Zsp1bpFzVeXTRM8JxFbmP4sp6",
  "key14": "5Hghop6bnSLuuxFq2sgFvszNywYCwiXhp91GjWHNANu8BSewcHQt47aNpCq4Dhm5ermwCpNDrZRYaJRSoozcM2hA",
  "key15": "66mBxnMg1k44jcVbxG5UKTYTbwomPEKceNBLBC2tVRRd31h68BGRmWZbS39WUHAh9nu5cbRM1jKGndALSGYtim5Q",
  "key16": "56sbUB9FHntRLqR6poeVoSnGsj6tJnP3ELQrQ29adFC9iKzqXdQqaL3ypZfn26Pk7Neb4D5JmLM1n3bbP659tR3o",
  "key17": "jtnpZFC2tZspjdxG5pkMVHPb2W96PqWWWdWMaiMf9jL9Gck4zMntMGuXLL2cjB7kHoMKwSVy6iyjxVhFiou3bts",
  "key18": "4K5z1s3jDKGpQCCjVc37KtfCJgGw6V4uxsjiLwPQ1aPe6xHf3VcKgozHsjxGKUzKPPYk1nfuS91t4fKCQe2xF8TH",
  "key19": "5YhswqT5eNp2fesHLRNJqJEfohDwvEkdY7Lkc2N5JAtN372FHzhNGvoW4wsxqwFkX5ozu8mqWdyjJYnnkrcWcMez",
  "key20": "4JRVSyFTdWKJyTyxEEotpywdfsMdFBsXW6v7nbKnynaBmVgeE9bmC5cR5dYhPWriDxTpmgQjjuGiJvXhKowaKvJY",
  "key21": "3JDYjUjYK7Kcw1prZ9oaevCucN32cTK7rRDRbD6gDzFKetbjDHu93Y4ovDaRwFKQsZgyCUHwdBVKAuMh4RxBpuAD",
  "key22": "4fQzFYwW18rEFG8Ke5bYbbL77abNWBfG2W8EppMF5XfEFxTbJPc7G8drhzGa6pHjDNR1JqwxcgfNWg5LQcwRuwUZ",
  "key23": "5RjFg6zoSJ3SU5buzPP7qVXCby2ozapL5VXwj2oMCepPZD4KfGr2pj2g4gPNMzAYePr7S3SDyHbV8LjyhX3u9ARH",
  "key24": "3z5nZrAupUjTrooptQZZVs7D3zS6H6u9CA4qRKSCun6XzeD4VmEH6VTHV3mgeM7uckLrgqQSUDqdNwJtYvjJvj7",
  "key25": "2SkhS88hQJJ7ar4Ed7cXrfSP4DikfRHWrHdy4fDNx4J54cy8M4uahGoC2S3F8G4hsdWcAhZzA8yPKmWGzzePxgbd",
  "key26": "3q6KSwuWXDrLuW7meXgrpbcCNUvn7cohjjGTGEeKTR3kj3cbSqVwxXb7taZSUmHukSwjD65yfUsQq1NmkxhKtcDU",
  "key27": "2tP4VCX4DrRfFktdWNSi9QUCEELt3vxnTeo5MCNcHASd5x5HKnitygTYC6ezN6eni6Z245BANNq3Gf3KzGEA5JpW",
  "key28": "23SRvjaZYyh5nXfvC8m2JkbzCfaACigijjvSCTNyPEQCAMcsZQwBzqHvJ8EQSJSwNpNxxBZnxFdBvTK67AWRgiPX",
  "key29": "22HKBkBHCjQY548awzmJ8UC7MbKExtHd9vMWunneUjpAecCmXccCFT772AZdH7kYkuGK6GKWP9R1sxxhMhDKjbCm",
  "key30": "w4i95a2XN4jAZvS3UVNYsE5L8XGB5BZRY1ZCBbBvRDPF9pN94n4m2pFpEfadcf9AEqsPf6iDpmvgyHL1kkov9FT",
  "key31": "jv3QiPUZWBnEjX6i6qY4TqbBnxfgqMU6HrndEKPnjUA8FpdC7sn1MdYJnj47M7ErphZhHmqAo6DrfdPuNXeuYwh",
  "key32": "iBKKWND4of46mDmMzEVtUWDDzeaTw44dr722mU5gPUpRnNu6FYbNibcF9vdXK4WpiKE8f6dHLHLSYiLdT5vVbYe",
  "key33": "5q8QcQZtELAZr2LWY9g3165k847K1c71ARsoiJ8XH5bR1D4zUq6Xm9VQqZ5fEaiAyWrVMnqdXtpSDzmPy9kbr2Mq",
  "key34": "sj2Hxov1BVh8Y8s4YBADqaq99sPyG4yAr9sPfqzXbaK1Qmg4PE6EcDhbG1XWTZ6cbLdVxJFdCSCRWtv2PF4miSV"
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
