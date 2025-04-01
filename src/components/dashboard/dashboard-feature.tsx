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
    "CUdaE8Rbx6qkaGGrJqQpwk7nVYv6kHhgizVSVP9eePZnc8LN8uxMRj8kdwbYTH441kXRLkHyFnS8x6s8BCJyJFd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52xzaRn38jS4YduGV3nK5EhzA8sh8eqzVh56uCJJa4sfWPZfAFZsDCmhmecWK87Fg7wp14xdEt6Jm7ZraJPXAJ34",
  "key1": "5R53f33T7XV7pDAWHb5ziN9Pe9CUz72SB4rvChV5qCseKk85hhVWEqUiPzLwEZc8XEE8oLTtxHn9g1ZP74AWv1vM",
  "key2": "2CebqwnqMuuBu4FqVzwZA3yXJsCHuQt8tNvb7Tq6Jh1gF1UQWNTvWxFZuDR7jBSvnqSca2YgihBr8apMbTsqYcxk",
  "key3": "3KBHti9ieJ6HzMwLN3xFmaYEktQbSRsFDN1aouEf4sSkEYxsD9PLXAVRLc7SW7Qf3XK6mYYEZ6gd4nxRU7mvcUJ6",
  "key4": "4FLagfFPVpxtQ4isXbiKDXmuQQ7hNCMv85JJw7p9ZDaKTUQj3RvbnuvMzB5wGRik2pRJiVtw4FwsxiiZ52nxKiTo",
  "key5": "2gVWkykrkCNcCPYbWgjCsbcSTtrRRHtcAfayUgcMv5JzuGUHgVzsuqPEga93LjhuCjV2nwUJ1eNz1EwdHhsqSinX",
  "key6": "2f2xoo9D5CBi9omke5RjMPi6orUdRkNAMfiE3gk4vTS5f4dNPCpcT8oabiUxXMBsnsvYVJd8QusFFdhrkzgFy9H3",
  "key7": "5tMYXKZywB8uaGd7qxsCaqrmjrhzfkxRrcSUZPuSssZfjAyeU4NXdtcEJdUk6e7kko8J2oDavbN3ZY8wz1dm6sMC",
  "key8": "2YLXoYZPq7XXeuZCUDeHvEZxU4vbzrgvYjZW5AmUJhEDkk4snCGzaJdXij7zZHsqkK3UhukXjN1gaP5WcN57w45m",
  "key9": "24yCdyrkqLncweg5smxNLm5NTrkJPsWcSPWF9H8QReK1Ji7WVxoNxxizutaGZ6EbGkJXE8QqBBrChg82zCGoEoBu",
  "key10": "5aKseqUqjdZrZxR8L5ChJ6vjoQzsTQxUEiXf7LBhvu8u6jtDbAnMhPPBwBqzWon2A61ru7KKMasCZzZYbBLukBgJ",
  "key11": "4bEFH4KFUrwWcpqE2sLuvU376HxuCpfuzkJpiAe714wYWLCNnyNNosahKHzNxv5CxBtBNknda14t8tmV565e6tPs",
  "key12": "3nhTYYP9so2MAQ2tURho9s8q81TDou9Sz7MPLbv2KZbfd1kTCEm1vbqjXpjEEqG8Ush42p8Q2GYtSfDuAgMJ3Po1",
  "key13": "5WvzBc1Z54ebK5sKYu1SncefbyeHvs16KDEkXgmWvuYifJPN7UFoSEJLuuHW51MqW9Pu7otUXDyc4iGsqGYqtsFo",
  "key14": "3y5E9J7UXQxviWvEqZetH7zPvSokujKYr2jwsXR1KVnkgd8tVQZo1G55v7UkjjduqR2hWC23pcWCLGJD8xLrPrNB",
  "key15": "3Mkf58RLVi1jP2xMBJVSv48sUKd8i1nqmj2p6BC1VSRu9iWvU5Cn8BsuMtsNzoP3Y2pKsBvgrAHZk8ihv9dZiL4D",
  "key16": "uyNRmztcgHJrzxxPqpRykbnHk6kWNT2YBbX8CgzSkLxHYKWPnpwTe8P7woosmiWWZavUGE7c6UXg5m7YWjyQ3Vt",
  "key17": "3ZoEXMpX9WG43DDbG3WgNu1VBGMAxwSo1RG2ijnT5xd8fyKCRcQxToPFws11gadAv9QHVvxomYXUbXKoFFbefELb",
  "key18": "5FsWQtJt28spsuhzEsphYTz914XARtw1PV9fiu5HVXnEeDxhyx3cZcxPa8S9YGrrHWZBU7iQwqxeSKArqHS4uHFF",
  "key19": "5NppKFLZEHw5DuqRcaRmCagV2yamLNSoMxijYoLrcNjtQMKrqWsHFAStkatSHRtaEZ7H5AKexZoHFECLShbdtvXP",
  "key20": "533BYVE8miRU8xECQ6QVEvnWTjYXc3NXcdEpUaYSHfjscUSLc5JAJoHmbbV8KLvUfJrALfy1J9VsWPMV6UMBiRF3",
  "key21": "3axAugyeEQhWjdKyMxUXFYsnLsQNYXSaPwRBAjnEc7DLGs94vvdv7UHJxTsEKx2JFHTCCou5gMK5LBDiQoetkLqK",
  "key22": "4i93SFUNya8t8dZuyd22u67Y5vKgerPR5krAvgRkxjy2CL9QVSwKiK2UwXjvbZ9RAdVQaLeSRxwUkpqLzSA6uyCC",
  "key23": "5QC3LmuJToQYK3xo8USbBW4huVarSuraPcNLWfUMEANVrFSJWC618Wef8vKs7XSoawm2fi4oqANFBnuSD6sGTbWB",
  "key24": "2AGB7bCFXeu38AM2CmF3e3BhqmgsQxr58Lt8KsZ2J23R9igWZ6CQKLMs9bfo6kCp9WcHewt5LtExjArrBY7AQhLr",
  "key25": "5nuJPYRW4V9dJprquKaqrnSLM2EficEHKGbmVpsGXWwNTB2ve2wbbuD5oc5En2d9M6ZaetufLUDTTSYFqr4TR64c",
  "key26": "4Ta1919syCXM7xEofmUXj5Ak4co3dECka4wjdkGrYreUyiTcVStU69Vj4xmMmLE3Q1x3aaBXe3nesCVR8NaTmKRH",
  "key27": "2U2wTYdfhNSGyyJhJpDcjQiKpFeFHXEQ8RWnEwyg1mNBTrNdepUpfQmX49EdjgGEUW52Bkurwd6a9G1jZAAV6kCN",
  "key28": "4yN4yKFHKXhgG7qT2e2FKpRmhcj2KfXa8YB6HEZPPV2FBs1hesv2Z8BWt6WAVxo9ZK1AtGWmz46bmZSeK4xvXdAL",
  "key29": "5u3wx386MsbRK6kvDVy64FtFbgStxdoW4q98kt1WyZ8dUmBtuY3rk5VV82YmWedJyxoZgp6rgQYMBrd6GGXEBUsB",
  "key30": "5KYJtuEZz6dWSHc7hgzL97LB3EvaUSWZETRfDGguHRUabf7PBdJJ3gLm9ABxh5kUELcHXFoYSLinSy54MfKdJg42",
  "key31": "5fRAfYsfzt5iLf2txtvGzT6YW4C5co2jusDDrHYZMjC9UZFiVZVJo1wwgPqc58NqrKrdvtAWMWWL7YxU6a9pSp8N",
  "key32": "4GzsnyLUYDrQfy4QHKeGRg7onVCSH5mVJb2w5FZpcbnQPri7NbXRt8387vGJYcmr4FMRq8YMZ4vPGXzQDxJ5jW83",
  "key33": "4rp2YgTwhePPE32gQbNfNKT6QbrnHKfr6BvLK4Xys5ig1rCYGV2DAcGNYzzTdUZeuVt7epZhVSjx6QU1V4YL6hb4",
  "key34": "2PNeALPDKSEtEcQPuU81Qfd26hSMu3XNuqBAJvrkwJeiAbtrMuxUy1NxZFzGQzZ5B9Sk1Nzmf5R89ihYtfWoU47u",
  "key35": "4tHLAgVQi4w8S9u7RvgnShBsEXCiK6cJZVPd7PZVR9TKBnXEhRojmbHCKazCeYevHf7UsmqDhRMLE94nKFzXFc7p"
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
