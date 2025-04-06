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
    "3dGL5ttDnma3f6UopuBra4A5ceyjEiLtXSqLUdU9BKw6iaX2JZNCwfaiAxVr6bNbgUuazVJ9XW5fstnU4e5ZTC1B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48kJWWq4nd7z4UQZ9nxkQGnyPospMXtu21eGDwHkdetCYQNzx3yTcLM8JFPW5ggEEcp7r1nXFapZbzk3KJTsZmr2",
  "key1": "3EnNadsq4mBHw9HEXfty7aFkJmCkdrd3HoAVczRNwZwhPPi1HguraBczpB2BQnfEk1HJpLbkf4cKa5BdKkfWC8ah",
  "key2": "2sRhVPrdr2x11a5ovvNZ6WHt9EU1692HaQLscQGVGYbubEL5CqQ9hErEKzdu4ZGwQH96zTsijUcBHwiFyFSr6UGy",
  "key3": "2bHFn1nA3f3embN7Z7fcoq1XbvBAxXEc7CZbAaFWHgV4pp2YfNmxRtmYVBTXJgY57vngS6wqRffbupGbapiwjd7G",
  "key4": "FM6f7sBRg4Wy1FGgTRgZqhcym1pS4apxSAsXrSNtaa2XWhFryxBGX343onGzD3Vvyrc7P6SRAyX9vESf5MJUeV9",
  "key5": "2MK5fDPwxQMQKnLZcYEb7Q9PAM3mtQVQLkpVUuiSzbF28iuso6mUmEmxkX8UZTt4asWVTsNJqXx9yFELZ7AASCxC",
  "key6": "hEeA1ETy6R1jg3Do6c3vr693byvMmMdi3HpyMJAjfQjSRCMeQHLbUBfaFWkNooCv9orKgv1YCCoJWyAhNBnf6yY",
  "key7": "4J2L4ro6JA55J4pe4ruJLrFHg3u1Yqd5Y8dHRBkpegnjQs2QvsviZPfLuzDBrxqLc76f6rqRXz4hXKyxUTEt1LB7",
  "key8": "44e7A3rD3XAWR6oSgUKtFA53J2nZf7LjPPLCiU71nHuJKk1Y1NfDvSUNQBtmtwjF3bFQzen5RsdjJnZDzCvvX5uw",
  "key9": "4DpfPNmhffQTuaFEJUJbYu1rfbRVy1L1So5YYEBKLBMFNhPGjBam9JjhJUEA8VdBJFh2DpBAkLr7b1RFZ8Ftknco",
  "key10": "vUuW4Kap8aq3dEz6nDtNamM3FPTTju4RoQpEdu6umFVpd4wLj5TqGkhhSupcdP5gy8N8FJBFQ1URLqRZf3WxS61",
  "key11": "sxKfGWX21MZ4K8brZF33CWER6HarqkLTSJ9SHVH85gH2CiXshor95E4tafq8wqrBKmwzZobYYWd4icvaNsDy6Gz",
  "key12": "52sJYT7CAyYE6tPbN5V2TwHBWnWVRXi8xqSYZtVKhcU9D6ygmBB5DqWykfcPHFNFhkrTgwnTBZ5Ma1eSe3yQijXZ",
  "key13": "nLWKRnsnHWoFg1iqJA4fP3biY7fzrfpr9rMJZF3V4N9FcZppexnWakpiWDuGk21xdG9CpUkuH54TTKdypVt7mtB",
  "key14": "22XCbU7eL4Rp2NEiHHuRoT2x9ex4D2aLUo5JPuBMhmRvgzAjGx4gmkyGTSvbpv71VcefjqVT7pi1inmy3EFyYAxV",
  "key15": "3jRffGoqi2xJpsgJ1kwzcoJovX8BoNAJBkBMc4X1F5WWKmYJNYM6f3Cq36h8M8wLyr3A5mpuwoTbaeTfj4TjCjwD",
  "key16": "2UxYxdwhjnME5ZERhzrRy2qi6GwWYhFUa2kqJJpTad7h9jt187BQPcqxKr5bAw4ZNi7Qo7DC4G4Z4WE91CNLkVLS",
  "key17": "51DXnQmac7ByAtkMTyPWnMnGijtJzJKoaNTeHR6ZZfxTVGx9WngqiiWrRChHz8BxQn81PGwybYhsHBvtDbbpvcXW",
  "key18": "3KU4uXAgeti8AyxVwkF8SqCjTrQK6xAa1FBeFUddPGVtq6rkRCojzcSkhtfjLb83dTnS6kS37mqPLgbEcjXiVi78",
  "key19": "5jJWhW3X1iLvaZDFpwpDQBUqzZt48RSg8eMC8zZcr6ZJNZx48vGqKX55BvykqDYnarkemjKUf54tgyRZnC8v9QQK",
  "key20": "DYHTYLAboG2HkFkKJHvj4kV7zfaJjYKUmF4CX4DSbRBr5fokXjgasXExi9MC587NCd6pm3q46fzutWQoLuXLwN7",
  "key21": "55BjHaUnxkrs2vuTVP8eirHSVXH6daEyGpHggdJtxNjBUvGrvBrYQ6C9oHteSuZXb1UdCccVN61AoHyZGF5fnBWm",
  "key22": "4Q3qJh5zoPs8gDFu8n3AdytpEoSfCLUqX9UoqmVAEbGgRs2c97d3PsLA8PLyUU6VZKtgXHkd78wikhQ6bSfjP5fM",
  "key23": "5DkoNa7Dc7sNGG4PsGxwcJ3GeKRCD5fkFZHvoDh94P4Wac9jCYvrdpN4mLqzvcCpJQv3grnVvFMHWGAnCty9TpTm",
  "key24": "2iUYn6CcKU4WxRZVKrtVsQffLbJuMmDuTvXMHSSuJiSdZM3NH6B67MS89eDbHJpFCW8NXAW9Tz3VQnidGVWP2hh8",
  "key25": "3MUjDtNdivi1WAhaRgvgAYYRzF17LPTirQdPJUqBJLunMYHzFsC2nAYgU4Bfr6R35JHgXgpdggatZNPkFwvkLUJq",
  "key26": "21AK3eorvBp9Tjs3SaPZUHsyvdpii7YcEGTmSihAA9YaHwPMC7aWJ9T1N1488EiszB7XAn2CQMGZGjHfGDvqHLR6",
  "key27": "sCiTdYgnYmWHjeRbRgEnsSnERyRBoVx9CTFSxCPUZVATPeB9tCxWWjk32U9g16MPhwnKkQqtnNjV8HPSHg7pro3",
  "key28": "5A7Ae6U5NDgiFpf3p84fs9k8f6Y1ZvwvCvW231zeBG1WMnfD9xPHutXe6rY92GexvLpAm9aNmAHANk39nPPBs11Q",
  "key29": "2y5escHRe9pKyzMVRGo3YvJj81jjQKhGuiWChFRKDtNPacVCmaUqnAaQ36Tw9fAes2KeeULQUnVemyTjUjKyh2JY",
  "key30": "39cY1LLSXvNBhgZNCgpWQJvPgd95Yg35zFGcMvfFJg6coZv9tqjtEUXHVv3By7pcF6HvDeLYXuFJCWu2mrBRLnBe",
  "key31": "4XDveVmZXSGYYaC1pXM33ng4Pox4cRuPLzZWcvKXade5vmm6y9aP7xiSdT87GyQAB6iGBx1RvWttfkRnaMPLi7iZ",
  "key32": "5jmyTtEVeCp78YKj3EL8bVBJC2LTawxp61JNuvqURqRAgHe5WQTTdYpYohNBqkQ5nmdzFum1abV6HxU2BxS4vnpJ",
  "key33": "5MHzFtDSe26LWSEYCZGDMBFp5rAz2C2p3HGfCLsyVvGyNrKQaSiME1twAgnxV9nU5gAva1qWJfcmCDwVjH53HkDm",
  "key34": "59hMQYwXH1H542WgRkPapY3RvAR33ftA97YMVFAMhbETnkFiH1jkG3jQ4RM9oU9CSYY75nLp7cBkLuASewirps65",
  "key35": "3D2TndyDv6pQEYoehHVTPDkzfkf6oRs8NFM6cyc1ZVC7t79qSP5Ppi9ybUB6UFT7vfgNa1xdcBETjJBfibtvd4an",
  "key36": "3NA4SvBcaLkzdrBp85B71n5Qq7BcETe7gGfCLRW56jK4mvXxEnQTzksTkGooYBwzKEkoo8QPU79t9Cw5y32BveqL",
  "key37": "3aL1UZpfMmuxmLYjyegRJpaK1RdAdtZzSwLkh1qUYx8PvsiKMm1u1eVaGPd3HzdTxBu9vu7yEfiw9bnWCBVPVDY8",
  "key38": "2eXWLFAioJCDUxqstKU6iQPBxTuJuS4nxGNnCTf81xQ75o1S9UTkiexx4FhPLX2eUQsMjqV3k8uWpstdrb1yaa4s"
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
