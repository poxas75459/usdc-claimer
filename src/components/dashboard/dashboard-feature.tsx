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
    "FqoapiXG6HJWRHKmGCVj9s9GRbz1tkEPumakDkyt7J1QYwhFNEMiHuqQBewLmTv5KeyDiXxM5HA4e7VU4Ub2mRP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mHqgjPyh5A1tq12X514jUhGcUKnRj9XaY1DAUC7iDsBxXKTVei8bF45PYWwW21gUVXTft3Geot4ZxQSePBMfTpN",
  "key1": "3gfq63nd4pWLwyUFBRatAaQiu2wQ96rZiRK67LpCKHye3gQB9sYzwWnDpwvmh95fBzk4ErLYumJ8C6FTPBVJ1ySq",
  "key2": "5Y2RouafFARNePpffC7UDdwQUBGEHeBvPHf2tjBhR1gxzMUVggHYAWkdU8jP3VFMZ7PmWDNhBgwU5ck8qx9zXCaN",
  "key3": "49v7DsF1t2FDiV858iFf644smbJvDKHVd86pjatg6NhGhGVfoDvnRNqKgy5YZV7dHoTtqfw625wyJ5ZW1YBzH9ZN",
  "key4": "2xSN7JDpA46ApzNAChxbZP1QqZ6aL894RcMtf58Y4xQ2d7b1UYmfGSEzruN12zZgJA5zBoEsRN8ug7MZm3Bq8nQp",
  "key5": "rtwJHjP12qWHjibaBE7fmpE1SY5NdCY8wXTMGRBcTXtresEsR61rX4oXyAcDyGSLHCG4S64bygyYRcG2nJwWr3p",
  "key6": "4bX4taFBRZjAU9fJheX1cJpHgf2xDqTNUrYHaqYVjBBCEPoaavMRc3yB6cJbNJDxXnscVtCr3H8SdNW2SkLLQAUu",
  "key7": "oSQhaD882Se3zoDPJWZG663uTuhPLv8TMJsfNF9kfKoBKq17WYKYiZTr5FPwm9cKLEtU8oY7z5mQXmxVbJ5n4mL",
  "key8": "3icmTCFa4rngKZaGgbdMkXmjJJKFUFuUSxfEcQYxqdwo8FtoCfBjx1HVv3xEXaTcwXyVMWd91kSFY1BDyAXwEPg3",
  "key9": "4En8ZzWUW18SDGtTVpEK6bvTz4WeMRQbm2hgfuaXZQLtgfi9ko5zXKHCezcSaVtPiMmkaXUj6maBWmNitLw1D1NQ",
  "key10": "asEsNVSXRCBzE4CaeRVdwnpD77GyLND2UMuo6XMnWfmEbSdoKDAssuvejfvQWHDhUo4UP8vxavkBVpHPQvpqp6C",
  "key11": "5eRgtsYAz17GyHW7UtXjJnsKA2NKDCRSqvnqD3pVUQzEmyRQc8CsfgqnnqAbEMbBxcBbR2gMGd2rJhrjBSgkm6vz",
  "key12": "5gRs4wSZ5VugSW94g7fYoLKmzwZkBSApEW8nAzNM8n2xUESAMDv7KoHUERfDpwu4kQMFWxE6FkTD7CSKw1CMuxrv",
  "key13": "Xn4H6KLFqrFtNTRaS3r4Ey2brx6tsD3T38XcsxBYA1mv3aJhouH1boh9L7Squ63DbvffbCPNtuEtYeS8RjvcG6e",
  "key14": "4hxWKyLjgHBhHsEQ2gpwJ2ZwEpcibqYddiHdM7vsT536V3rHBaa9SApqHvyKJZctTjmUhWTs8NeYkSDin1hjphhN",
  "key15": "3w9hrmqt9CfXV1nBBkWzGn3jV5XQ2cHnPuj4cnAvW24fPhejL8hYs4JVusP8hNEJ95tzPKmBV4VcH1wbSqPjaScG",
  "key16": "A3uPdLZbJkU1H2en6zUFPktTAHW9b1G63yjVk3QhxZoNLKKJY9Uqtb2iuvsgL3NBzBXt5MFG8bo8k7EyQ4xN5fY",
  "key17": "5pbzw77kheVkXD9aZLDiS2NQSR5sbDd5V3ftCP8CjJLNxjysgAGQqm37CP2NqzLd7em3RhocTK6rL7hnXaeQKEA5",
  "key18": "4ELciC7JBWF76eEbWgwdtkPNTZgeBh6uL9kQpRAWKRzSywegBJqVqudzLJ1a7edtSSUtdrW5HLBWwmreW2CkJXVV",
  "key19": "4L7NrFiYgL9v8szMJBFZ71f2sTXFnwerRyq9JsWdX4M41ueFxxqTLy4Vr5VAfSW7CVPifciwcZzCRkBYe4kmxTZ3",
  "key20": "5i3JyzM5XvwBw8M9bsSGsKZHEnGHuv5GGVi3TFAwbhyudLB11zf61uYrFLbGZM5tfV9crFpbW1w5PzGbVhbeeKpL",
  "key21": "3dkrpG4JhbGjPoCQCavuiA6Dz1iR9goo5YjyMdCUCbHdZZSfXxF4KAjSVmy5XNwYdLN2jGMzmmY95F89EWAV3JAg",
  "key22": "48Vj9m9wz4vbtbNCSkxgorJUVaM1TxruLXUmQCvbwGDBT5jcLxZCsUXvKPB3HhxiyjBDT1RQs3aVocNtCThzge9Q",
  "key23": "zZBpJk2jMfDaUeiqhRWcNn86efQ6L3GrcoBQHrL3NnUY8GZYmMfPBm9WbcVoCp466myfYaFQXnZpRdXqwgRBqZ1",
  "key24": "4dgw6Y89ZNoALGf9hjaD3MvNipzWdRy7BYL9pyuYUEgExPs42WfyvCh1Bw9BzYnYxtoJQPSuSVBbi2NcUGWvUUQ8",
  "key25": "3U5ngB4ZykMbNexoAvsu8ueMhNZXxJp61qcpFJ9BJYzoPUZWGeUrAak5mvEU6NZZcbZGZ9ZQZPpYF2xFvqjRsXG2",
  "key26": "5Z9km2LHMdv6oxubfhbMnmJhxW5N5HhTVYTgXBPjzbxkXP9HXYDLxMnLXCov78Kv8rJ96gMVtDD5kWEc5ngypMFL",
  "key27": "4mXfYMWSygvmSoiwMM6ZjV33nmHu6dpXjahUjbfs4hp18DFPCqzChxRcRAgrDpFCQ9LGj2kf87RTFm9LuEdHofMG",
  "key28": "4UryB5KUihvXiPunbsSuWe4dJovQFY5bWey5PzdQjwhE1eJ1VxygizQ5huLp3ti2adpwycENdztNCfnCJ7CbtGNs",
  "key29": "29Jknw6DX1rQV7Ddv5si2tZRSQa9TT1ViR3KqeMnvn4KJ4ykCcU5iFGmMPdvtqMWcJJFQxouT78bvHDUUSkxbLEv",
  "key30": "3QJALt2LtmfD2JcnVaPHMDQrGCkLccff6RMjfDW2LTA1D7YbSp2TAppw8yBmcwJAn7H6jMS4yn83BKgPpgYcm1N4"
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
