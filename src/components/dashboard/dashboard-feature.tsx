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
    "EtBA9zj852ZviCQbtdHsnLwjt9XqJFPnuhbGakNZACNwjWfP2NrohnVBxCjvUVHTjx9f2dTPaorvHTdDmVn4B2F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26yDdX2n8iGeC6QnMt7azDTS6fpiGCgH7CkzgcwpRmbDm4nKyc34cMutS9Y1V8brs6BS85AcKhxeRBZoRhaRbUpi",
  "key1": "2n7BfQ8onGz2vLR8gVtsWPs4U3t4ahoRsUtVQMDc8CRB5v3msjKjzbYWshDqaqawLTbo5uRoJ55qDDDGYSxUoRcp",
  "key2": "4M4DXUa3e2gWJ5ekgZokfLuj3WY7NzbX1s1s916VsNByiNMbDWVARvbb7Vf9VRfq5hLbzBfBU5ijhjcEuUvFA2Ga",
  "key3": "3au2jMbXSvfjwH3ZmnQWNMDajDby9NFAMwCT7rU9FaLQe5rATnKrHAxkEyz7ens9jHVWeL6Dy5RQtj7tJL71tAt1",
  "key4": "27evwBZmAdTpc1UpRvi3Bbf1xdNBM6L8jtbr57J1wzLBiJvAvnusiQ4sDK4fAdF5JUVnUd1jrMNFuEY11LRAfWDn",
  "key5": "4cfqKJn6r44G4sXAUDrNzw6y9U3GsriQ2nhzqTexgkWVADBMrtbSgejATj5ogjt9J8hwRDDzNCTAtKpsc9sz2mt",
  "key6": "5jNixra1j9csBsT35yhXQFmyeTpMCzR2muZFWNVxWUh1QWuBwNSrQXX4ZSRnpGQX5pJE3rX5dfi8eeBxfAGYRGJy",
  "key7": "4z4TT7gqtzRNuexW2TMSpcQ3TcChfxKG6xSBUDavbd6FUNoEdVPyaDmEC8BHnb1CWFuBWhCbYM3xAyKWSEwPvTJm",
  "key8": "2Z213LGGqVKyUFHuyTC31owL4rYF7VaZgRhvTwXp5s9f8Y2qgsLZNxnHJo8Qf6PfZT8EWniAiJLYV3fzw58LUzoT",
  "key9": "5AcdXXKx2rrGYurg7BhSLeFNqTG52QGb5qH3JZvdSLX39xJGNhpZ9JCnirSXsueibQCdXuyfzu8nEuNXB2fgqmsK",
  "key10": "5z6ZSmp1EiJcqgh5NhEtbeDAUXeTVysCs8RTSyo66ZkswWageKBUQTuZbKiSzAaTAEMzPLdPEcs6bfkfBh6xZVN1",
  "key11": "38hbZ9uPyH22pY4HcTNzzfAiqqTvRqgz3mEjNUzxDWzCJ211SvoYPoThgb68KrhHFuFBKp4UR9Hxq7kSdhMjAGrm",
  "key12": "4Qfoz8skro6kW2TkyD5PPjYBAaGxrzUQCFEzKSo3MTNZwBVFsiGY52pE5KRJkPNVgx8MAGDT9KPyk68tdy9K725g",
  "key13": "4DYUYWapjRi4VmjFYSKP25NDY2Ygg7StNFz1gjsbaX3bgiezMjQZr5ti4Zr7SUMe1L6zjgz8xYnvyXfde9ymJtch",
  "key14": "4u12dVTYfxeASG7sknCTpZJLeDXjkrtwRdFVQmKKqGSDvr1k6joou26koH5Lc3cLGY4cJPkTN9DwyBn3TB5CspBz",
  "key15": "4KmyXKbDaArHVx9ztJfAyj6cwfH4YQ7eze9yBrVp7P5dyspsdQUjiBhFRQYQqqve1sZS18efxfT9qDyZQFNjtcxU",
  "key16": "5V7coZuWckNgVsQ9suWLN29LM9HuK6fFJRiJhFrF7q3J5ynEETSLBF2hXPKBExisMEtsvDkR2rjsn7A8yDyZP7xC",
  "key17": "49kKG79xJUYeDT3SDAn6EdgqeuFa2w7RxQ93Y8kf2ARihkm9BJEcT3iKacNzfnZyZGQ6XeBydHzgcy99STD5zPVL",
  "key18": "aTLSP6dmwi7Ak7wtCrkvyaFUQVhTPMuqnFvDhTagNbAWv44NV3iShuzZFFG59krQWxUSn7niyVUgcguibwSUqqG",
  "key19": "4MRBKfZPeUZ9godAJbtYdB4VpXZx3QweTND9P6UdgjxH2dWYkHHKFAbKetR6VDR4uJGXoFBzqh4KTpFt7aC3MSvQ",
  "key20": "5nikPQK3rX4GZajvoDqKfxaLHWsUQHBH1Kw9bsXoX3RugZ3GQFqvZ48V4RGLFHR8qns8Yqryc43Xf7CTefyZjjUP",
  "key21": "4mqW9zx4q3937LnLXEWPccme8upoGoGX55qWjCtusc35AU3viCHzvee1LraH6oC6zarR2RdH6c6bDbaRegYssTuB",
  "key22": "4iJuBZE9D25U1UHpvma5pn1bRQJsWffP5qpNm8rKYqXpwxiyuFf5uNZKWY9eht1qsvRS4T8jhZWYGouCUJJktqws",
  "key23": "4L1XT9936PmSoNMcWBjxi4TgLNCMji9jt3xzGck4ziHURfLa166xndspU2vWrgmwFY9xg6fG7nThKHzdYXJviu9B",
  "key24": "2mTzoUzeRnfUBfoy2EwmwKmfbQ3TE217UZrzxYqnzMVwutJiHXyqziFw46E2ENwd9zskoBGmYniS8BSNPKbC5dpP",
  "key25": "2APb6oLfESvSrjGu4bSgcTZHitXGVLR6PsAphr1uJz9yMWo3UTiqGwnEjy1dsMN7qnJnvYCswqdbNyxwbmMWzHSp",
  "key26": "51D9ZJ2m9ziEVrCjYSkE1rj1YVXH4d7gUMBLLCyQZje3nNPm5JNo7ZQ1tcSX5tU2oxq46CHsDjeHMfvSEHwSMBnz",
  "key27": "2MVYku98B7UhAG6vu145FecVXX1faRs9xnvV1wLamGSLvXST7SY6s9KFxsEEag6HAVKcQdQ9HdcJ8mnf5KnCBv5K",
  "key28": "2SehYSd5XaiBjdDubPUSmcA5pgkmXGqekDzrSPtumD3qQwYW9eJwtvU82iPQNXg6b3fW7N8Rf3dUSvBWbbqWqCpc",
  "key29": "cGyrjqSjU3jA42oCnD9vGoV8oWoEMN2qAznoNGM22nFSPpSwpdpCtyZmj36KJJ258RQetiRcCsYVg43ZGMB623c"
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
