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
    "L2s92uZg61RKfKwwG8m6d1xpAAaXnctxkhCTnebenjCVL8nLdrQZeWffzjJNPxknG3nj3bR7fKBXTU8H7HW4Gph"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tGqyLfdYcH4ECstswgMTZwYRrSWezgyw1PUMki6mUXH3NwLKAWWCeJBXBrKXERnqLYLUbcwn8kjH15E27fRgWoD",
  "key1": "3EKZQaoboEhHJnSHVW2kcaeFfPqENYwVABNFQpLG3g5YivXZ6Yf3j5CcZQevB8BpkT1YchXVmFwf5xGLG5AYXC85",
  "key2": "5sdE8uuw4bY4c2pShz3z4kEo5mAWZt7U73vxsSXNRRWQKQ4uHz8RyKuLdyycb9UExmRMPQ9Nxm6rR1i5NeZiuQok",
  "key3": "45HCi8m8WpBAQxitW9hMAn8TMQS6RQF3mk5WX8Boy8QfWbdHy468L6tu1pqWpqKqbWYKUWAz51U5sct9buySJzyo",
  "key4": "56BydnpxBDB3j9AmTvGBiPbfvYGhxxQfLPJv4epuyQ2PfmwMrVPYm7NXnuJXBrvyeRUnmSVk7LGZdcqCYFKer9zD",
  "key5": "3cf6viYn4KvfJoh9VVygGoqvEzoV5ZTRcJXqHU6UAgRSrc4UsWYfKBWUpF1JtZnTjYCGrKkHubmSnYcLAQH3LvnQ",
  "key6": "4i9zTcP77YV5PqasApVyeqvY9S7q4jC76ud7zQ4TXxfLXGkVGJxusxPqaMVYEuTvCQHEicZXP6gq37c7PNwURzQu",
  "key7": "Wz3b83b5FQEkbs4JhjCGskAE1yb6FebNpfbsShAgLaEqEEADJim78pPiW836Rd52sTMsm3MFq9VkpgNCsURX8dP",
  "key8": "4sZTwjLqeSHqXNJJkx5A9VTi17qUcxM8keKPjGxR1Bn4uaEoo4fCsw7HbV5tkq3CVfsmfUTmsDQQ7gZRH6V5rVFL",
  "key9": "2jqZqWmjNdZUCEbGh6fEfVzkMxR9i64mzRU8kY4GjZHuZEZMSjqwbTTzvWPpV287fZM3xrpB3w9aWLJxXbkuS3pc",
  "key10": "4ZFfCgMRKQ4RZmwTDR1W1npKmUCDWB4WAujSXg6eePyAZTK2VzF72nSCJSMf6KyzaZpDkB7VXEtvAoX9iyuAx5hg",
  "key11": "21VkDRCKJtaT33QLAkFPXHY6AAGQ92ANqZFRLXxyTh6utumjzdbSox9fg63ZEGHPkQ6Wh3eCJyyQUs8cZh3wvFWu",
  "key12": "54UQb75eQj1Vvmogy9SPV6YK191oXjbYsvsj52L87ibGTW7frPeMxKFWnxCrE8LBrcbdCriE2u16RruFhGFAXKhE",
  "key13": "5WsZrwYoJ55Yesyzi1m5TjgeeppNF4KGN7dc8cE1UcdbqNiFGPsPqimHWGXVGDXbZeG8z1cLnCDCvMerpHsZsawn",
  "key14": "2jTiyTc5FL4eJ7bTbNRUVSEaVktZh8Ku6B4kWanaBMzLe7cdbsWxbgdcXPpP59F19SuUVc38b9KRFSKWycv3BeMx",
  "key15": "2gn3WWruoUjGTVXsu4aoy6KSU8T9sbc7sD72D2xRm59wRn3iq3zHjuo3v6CTH2FMebgqim22X9ydteYowySTVWAg",
  "key16": "L69G7BzbrA4jnjz2zj3MmMAcCdYTNkM7FChjHAVjpi4MsGhK6iRgA5zYntJgfMW5JQSXGxhKvVX1Dth7Uy1oyGr",
  "key17": "3tTnfZFZa6yFsQjzGhQ32qD71zoZARACoxgAip65beFBnHnMqdpEA3Gk4qc2m6G4dPy3KD2UoPVW9cSTi6hj9nTx",
  "key18": "3e5H9hRcbVmtiZCc6oRRKzBa3RAytpaATMFMEA6eAXryqLAEJrUXXji7cZ4x2a4WHLPi7KcyLKmgwGeD93kDpNvX",
  "key19": "29hHZm5QNKiF2K1eu4FNKERaqkXkHGxEtjFC6Q5XZx8SSpFzhQ7vN6HD6bPLNG66XQTSgMM8C9mnx9QrkkA45Ek1",
  "key20": "2WENTwtP1BiN8tQpCENJN7yg7mUAcV4MV6B3jEPZrFLVcXsT6ZCfKCnpgRHVqTPqU5Dk9QMVUiqi6zAimy5DMMhB",
  "key21": "4GF3jB7rPjvRLFaJtLvgnUjP266d7nx2rppm1fXDaNwJjVNjcJSBUMgiViw9o5dstVWUrkDWnt7voFyHRjL2Fg4t",
  "key22": "2u5RJj3Y2eGuw5WKggmPPsmubjmc6FRVdtg3EQwxrvr7eqezx7bgnxn1S68ESJv1ahfQZppAJnsMfC3FUB1iBjTb",
  "key23": "43ca4VYC5dSw2LtAAkxNXuhGm8KwsxmEuDRaAbZg82WmVDJMrdFXTWrjSUkp67Rtz5PVnwG4K64BzHoYu12NMmv7",
  "key24": "2qqhX5pT2gnorntuLp7muapEb56ZqT3HyozzZWfxP2SguTMotqkLTU8hjtqrVwFCoBEky9BKRjiMDgS516R61HV",
  "key25": "3ZjGVvmwA8L6GSdfSN1bBUjU2r9rKTuqL1hHtCGN84YbozCWgcKK52S31Axhpc2fGsQf8qaenbDd9A6a3XBMjKpy",
  "key26": "55tyMFtjjKmdyUm3gQPvW3hro5ChEHqyUzsVJ7ckh9tLKyTmC9Wtrxy9mYPYKW1zDs1FxuSpic7FHjTh5ML5kfdQ",
  "key27": "5Sn8ny2jDNdkSKzaDNhC3TV9Cy9jVNg1xH2LCZBvVNkwHzk47Kx7dkj1eguP7LTYjk5BzrJWUWGTs68PhA77dG4r",
  "key28": "2BPuCfwvyVq4jqSsafFCfPwyBKAqfWWVExy85NZkNihumKFsgfCRKhrLTVqiF9RVfQMCz72QKAXKaU3zMfpHVCfh",
  "key29": "2XDs5bEd2UhLwjdDy9zkYhgxVJyxqkbH7FpRja87qvKUpFUaJH4X3rNzCf1nHD4R2mMkLUfAJB7vt5upSRFbtCCg",
  "key30": "33LNhMfM16mNqhvVSbYR4jwbLsXpgQovYEq7Z34qCKP5VEcLtymg1B7epJD52dvWjPaJNep3mbrB61UtyedooBv5",
  "key31": "3rDij9est9wWWETizkkqbnSoJBR7BcNCXHpaxXns9MKRngYhUvAAZYeTHJqSoDVGo7BWERTdktvVZtpERP9M9syD",
  "key32": "2dxPuV9Bhw9NeXwRc9bbATi9cgh2rHjXEVKQVNkyAR1kFRTvLtaBVqA82JFh9pyFWX667gfUiyuq97LYYj5Et8qt",
  "key33": "5DsAK9fA22unJ7KNrPxQoUEaLwfniS5fQovRyGp1FpS5o1fFGZAMvwAAESnT3maVFE2UZosUcQMb4AZwaDnUvj75",
  "key34": "4aoh2gEBMSZtCZkrZAFgpCNLxVetw4eotW6T2craYoqyYdKF8xmFsR4iLYmqAeFtGsQrWoVp8bjYm2GWrSdpfnTS",
  "key35": "vHTDcEYx2tCraXfPwcAQVWxywnL7w1b6Z8iFUyQ5CijWCAwNAVShQHEeMkuqeYcwyckzu8oJhL1TrAwCcn3UHje",
  "key36": "2ve5uDA9zef1WtdirWV3j754gRLUzUZmn7r7zLSqfT8rXajjGAZFaGhGLaCxfK339UZBXXgEdhBZ676tuhZ8SGRu",
  "key37": "AQ4ZSakdov5WUo3RSennq9Maz6z841JcdAr5UJKCTwg6DYNwCy4PUmD5bssytxTK3CgqMTfKsTpxowpKKvgj6Q8",
  "key38": "DKoRptbZKUmbzENFa1KjEe2WpYCPBnNhwzcC8LLnPeyuAoBiYuoYZeLoJrK5J4A3aBxkzr4LBMsx8FM9U3WVRJA",
  "key39": "3EdWjS9j13HKvBaAVHMovLwgmxnz9xYfD9hC286AZYc1gCGwBgx4zMmwy3Whb1fGbY9ZpcuFKQCaApFeh1Y37VHB"
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
