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
    "2eBcd5ZGBM3wX5wL3negggn9uP4f9KTEqkhVyEWx1C2PvtVmBwVHVX6RwQVgedeXrcG5AitEZXm8os2baHfjvEWk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Dhq7HZG1M7LxJXWF7cnL5xAYz1zLaUh2oYDrtTX5axMu9rDSrzKo3y4b3WtAe1nqmdcFz5wSXZk9NRQmvAnvGUW",
  "key1": "3TfLDQV4q5QKn8QAQ3G1ij2rsQd7iNxcaR9TWKgsTUBj5AXjXKbZTzPnHNwcnpg3McExK6uH9N3w25efw3n1vtax",
  "key2": "4p2hiNC818TM4V1e3MEC8oaBVJ2RiyYfJV3sNsaCxuo2HEC9QKtk6rBhHMr2YFH8d13ctbhWestTARgRH84Z2up7",
  "key3": "2SET2wNYhazdu2AjTATXE2FpDjrYLcDTCthGSqubErQqgiAyde1ezc5QpkbJwajkK9pYnE2AgSSmyBkiPrSxpiVB",
  "key4": "54NHrYizjLAFtREfBGvZTjDtKTsXpngCkAu4mphaPEZsfdc1QfUyXkFEueX6BXJrYPFUPwBsdZyTCL3VENzy7rGz",
  "key5": "44sctbm1Zsc9gUBkrD1ADiCpPcUb53NGcz9qLGvN62P61LhVdm1FbLmQVj6wN6yqK8kJUYJ7k93Zk3rAyZp7pfTu",
  "key6": "3taL4WvJKBVJKgLn4cQ3bUxadkCAoZUaZGxi6eDTEbCckXnkymHQvdDqqZkqFkRhYXCue7UKcmQ3jvPEHwMs9KiC",
  "key7": "4mvpUbZCYDkw3zrdAeZGW9rNbDiVH2gZjyitjY9GzxZsVuWjiahonnVCh9dG3QAWJGxJEKgoMgjT3SXVBVwC8vEL",
  "key8": "3LCvi8yYJTkbj18L4fBswAG9DE3tryhCuog1aKmcL1i8GNuzvhRV8q6eJPLi1HbBvuuaYiTj4cwnc2oo5VZnBc99",
  "key9": "5tChiBkvpq2eni1Rt2LkERiPmTeBVvVwEPPMN5eGX9KFDFhBFXaswyVYbRzVG82LJDmHTNVN9oqfQMHR7zcqq3Jn",
  "key10": "4GpMh7XbjY5fNLJzofyV1tHsU2Jr63SjBC7hoRpUK8KJVr84sdBGVkdjabcE4rwFNbfTBHTMpkJSB6Wgd6GJhzkC",
  "key11": "5cCRyJN8jsRGNsYJfY9414zV2uSHMJrFW4FprbPatJhh5MSjqyVhbTvuwyVRMvZu4PPggB9Jscefr9W2TakXeB5g",
  "key12": "3f9PKv1jToDAmr3Kvk328JtiCa1iW6A2QU3DdDTzGi3imUs7w8jYsi5K49jxmViDvC1FqbQEQwk3iEk7rAD7eeZJ",
  "key13": "64KRwW1zM4T4qPQ1SBaRMNVUKZxUPijQ2zAaYty87fxoZpHhS9FVN6U7V7ywbxf1tdgwXpoHjCQxNvHkAdv9EqTe",
  "key14": "81HDa6DK8WkPbPu6XBnFNATnaW8T6wc9UhZwG5C45NYN3aTCEKDGrM4eUhJ2R6nnXmTJCMVx1eS74NkYPfHw5JE",
  "key15": "CxP9UpVW44L1BN6ja99d7EJmEqX7iyxJgBGEdLjb1ngAMi7mEx8XVBtEp1j2bE2NtcLJZuarrjVpHos17xvoKz3",
  "key16": "3cFiWTi2KZzxA3YYS29CjR64m9PYuSPAkjbqQhghpn72dkKQdjTcR8KuJyWPokMNqTMHFw4KnPEmV2ca1U42ZmJc",
  "key17": "4BHsQa545TUNjgebtvAyRH7kgMFnqA7wK4xKjy3USdenAkNAULF1gj4r95aUP4qqvy1A8YdWmPKNEPMxQBv1rAbC",
  "key18": "RFNC3bEdFxa8gy6ekycmBpiRnDMtL3rxWTXaFUCNWLPSQdE4EMin1K59dkdJWkUrNoyLkUCayKfYodpAQNAEeQX",
  "key19": "4fyWsPmLALX4CY4jAgYp8AmW5UN1H1m8cBHEgQzs95A8EEbxdb8YZ7zuHwkf7KC7MvP6uHs5bCRH3fHYNhp9rpKe",
  "key20": "bBGHhP99oDtMb1eDdBag3ctHs2RgHGJ9Zm3i1vmLtkyrXGGRJsh2RKQqBNS7AaUx1VkjdBQqdskB2djTg2hgJ6E",
  "key21": "4G8KomRQHPuKbd4DPmU5SEF2srGQqK7erpgtr5JrCMNmCQCuSnaWbgccgUFkn1nRuSYcMmw8JWidNJsuZKBDsSaq",
  "key22": "5ituyXKQ4nK5wRTXcT2Vm1pLEhQ5n7mJr1wKunBK1Vn88D1kYdQxNqxkDqChNXiLZJf41wHbXUNUyG4Uu7sRUdHo",
  "key23": "3SgcaMi1FQwJGRVReipPMnYvKuXB2RWvbnAthB8CyJNN46wiVWaUPkBxacDzBH9xpz72vVmb2UBs4TGEUZwcKqe",
  "key24": "4XQkxq43SshXv4xtouZxt5ndmsa2uKbEqoFbkzLn3Zsw6NaQf1fCZXcFCaY372QS7URVY8XxySMpTwjD3DcgmsBJ",
  "key25": "2FBahyXWS3ahBwjmciUg6n9LRH9iuJUxxoAXrhdNdbr9nqRcLZ7wcoM5Gp9ojy1tdFUGc9Y8LE3LLesAZbKmbhZU",
  "key26": "4xdw95wDhtbWxdBpiErD99q6cED1gQ9kf2V23ESS58PnfLKwxQ8j7MwXWwBoYMFMjD8ohJdicBF2wKxpAmAxNdjE",
  "key27": "2T8KAWmQC1rk5adgm4nj36L6cThspBeuptA6t2AvUWqcHrp9GiiEv7nzKuYfuixGEydfW7928oysmLPm19SA9acY",
  "key28": "3Ztxt6b8SBT9h9Sih6Z97iVaXJExWBRKNaTidfx12zKbCiLG6a6y6B8VGhSS5oqM7jmevsNGj5JqYcz95L84AtGo",
  "key29": "4fPGejFMCpoJeyUsFWcWDrNcxjdeLpdU6Fx2qBoD1izWT8AQU8o37GHGb8rXyVx9hC1UjdksvFs1h5WBX9fr1nSq",
  "key30": "4SDoRKdezU1FcRjMhxTL2D4soZrQbGsxPpC238LNAyMRMhgvzgJpmtuDXedciM5eKjaei7suPYnGsraSoHQfT5AG",
  "key31": "3VhFXSwWtYiKWNgZN1HCqNVwEWtMsutmgFzSqCA1k3s1y1Q2Tnqoku1NA48HB4xwi3jKnfEH5MVWrb38j2YoPCLt",
  "key32": "5P7vt1Y7PQD5HCfFA1J8qBsYewG7cYXGWuL3uojs1zCH2kiz2yECzRjkA7RbNSMytgNA173VjTSYB6Ev8hqfcMkp",
  "key33": "3eS4LLbUEXRYcaASmDUM721jSu1DuyLuiaXryzXoNPdDDDLp4FPkiYv1Qcoqinw14yFQKD3NYJpgUTW59UPknxRQ",
  "key34": "2pv3VKGxASE75MnHwYRpTr2vPEyYjiLPZagc8pUEooLUJFardFukDFhD7YoZxdcvP81Sgn77MHZHrojUkj5X9K6e",
  "key35": "3mSNFBxgwjvb9WYseeSeh8o5mVP8RtFJ7jhWTYQJdgyCKNtCqPm3X7GXnRRLWcp5Po2jbYJUBhyCkRQA2bno7Cpr",
  "key36": "2qJfjnY2vWJckmPZN5sk6BwbBcscWEc18v315NqnpFh1nzzWabpx2Px6sPr7gvFtKcmMpaK8cNfCWnsJs8gCzWoM",
  "key37": "3r89VaGxk8VzWXmp7X6oyH5Tu2RfUaEyY3V49yA1x7Lx5qyEEYUGMtCEXQLNMxjfySUofx7z5wnKakem4f8Zn1QV",
  "key38": "YTJbzw3UHxarVokCbGY5x7Ebj6kQda1YoVgdsHVWjZgg9RbbLULH6SMtUAHt3YmWti2z4Zy3DgCVUEsAYSrqz2R"
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
