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
    "X85hyqQ86hikKRWxTk4DaysR2xuMYNBzWZkka19J58ujpXQXAVbnuB6xY9jhxMwcg4m4WSzLbuzG9DSLkbHKdKr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47n88Ssqyp3EYV6Ct1HCLB324ztTSx6TNEeyUTm1Dm6rte8YBWHKoYamJW8gjM7mMipbo6ViR94LybD4X8dhUJqF",
  "key1": "5qruPv6s9sqTKZ9ErE3URAC7WwzGh3xQf1WpVkpjBuQpiMqxTFGTYu2AJ2Divs6TEX1JesWFdj49dA6KXZFmKJxW",
  "key2": "4SXacSic9DLHZf8LFg9USs9Rvqq2oNp4ZYveDzQDA9VqE2H9S2zC1k4MrMwWijLqVRLCNpGcTq7v2FcgmQ3YQyQ8",
  "key3": "4CrxiApLLunUv3ijaVCYEF426BGsT1i2CH6UpzMeUSKZ25iVuzenq8wTY8ANFcwyjSrpZnM7mGKuFwiBBHLoNyQi",
  "key4": "3JTUzrX4s1a7Tpesm69sXWVXbCv3BFJj564LuLt25mRsPYzUBn6PtgxjGpyNANDukiYZKX7P5tHajKLVJ4J946ie",
  "key5": "4AWDHDxwBeEnoWNbcuGWbhUgrhuPhFogPqPJ2W9xhz4dMi5Lx8hGUGtRLN37wq3eYHf8LfcQpUVJuqG65PPX6sp7",
  "key6": "82rth1KHqczWjzVwn4Xq7dqACyzPpGkWM8EN8hSvEWHem1XU8KVJPrAvnjrMJ4Eg4Es7Mf9fbt6Kw729nBNmeGy",
  "key7": "2281UXSh9gP8ffVWQXQSQQPD4uoL7iuEmzcMYU7mSfZDhGajCTtnemLVJSeC1D8aBzdAU7HNJ72PV4ZZd3YsJuSh",
  "key8": "sjVdQkm95rXhUGrpF4KgsDizR5fJ2BmpFPyVwMkM5KmXfUdZ3qyKEmLtkEGctg8dAMkKDDMYHs3CdRSJxJ7X7xG",
  "key9": "2RaKLHrqfRcUnXm28ZruNJwY3Dv6wTwoUddt1zmaTWNgjFBVpvN9j6pPLwwZD8JGWLChjtam4K3p6ZPenMQkSqc1",
  "key10": "46AV3Dhz12riaEshQ9bBtyhgJ3AcJ4oZF6p1qizuj3f1P3V2JfePpKFMXD5meHiwjWg5KLNGei8Xj8HQSDai1ToU",
  "key11": "A44eBeMaEjmNvmTbGKy4N5ugwSK6Y9thaXFUVs7xnzS4Fc3xXHbraGDR98qdssz1afcYdEeutR7VCdHRMqeQbCq",
  "key12": "3UKiavGnXBRhu1FMksmUerUg4YNFuJ4wfkvGsfppTb5fEbVNLBJtstANPWWFVFoKe8MZn6D5J6srQWhW9NTs9JGj",
  "key13": "3d1vvxEZCseJpzedKBigypFb9TZCg4S7jvNAyUD3TGmjmgU3xVmBbZx6P1nAcXE2W2TDY8mzkwFLL5JL1MmFivL3",
  "key14": "2uUfcqbt6wY8Nff5hadMHx6aSNYdS2jjNR1t8CZHZsFdotfACP2HajrriH3KBQqaME2k2ux9J1ptt1aDKb3BRBU5",
  "key15": "4xCiQDFkWb8WznS993wAbRHeRqL4gCCgw6hoaHMjjwSZ2tfJM8dBtXFXkSVtrVeF8YYChZGcYyZetBjfT3Ws4TXE",
  "key16": "3tLFYbxkBBohkgZML3Jskiw1x21RT6oQnwGQHnefaZfFU8yomQ2nE275f87u4c1CHWZ3oxdy7y5zGA5Gk32Dv452",
  "key17": "2hCwL63dU5uQLURHREPHT6VQqUMTZjHFGNgAyx9Dm2QmJp3saqYramwU1ZB1zfDa6SbNfhp7UHMv2Fh7CJmqGxYp",
  "key18": "5nGPj3HEzr6h4zQAYxmQqss114c95f81teKcznccPoVfM3pV5LFN6xQb5mEST4y44yt3pWA28Zz9JeooJWNVbCuz",
  "key19": "75trS1ZnENUSdADonuCi2kGCu31upozB3CXeGMURG2yV9zfYmn2uxDcN5cGMPFoRHsydVeVuLnDbap9fe5NustF",
  "key20": "2rPXdowp6KehgJ572D1BqktyTUykp9CZSgB2BDxRvnBCjUpGApkeEDHeGFDqf4jH87M4BfxktqizGYoMPBceW2wS",
  "key21": "LT4CcS1hDffKeYgYU3tXZMoKCh4acxGFMCdAkSfmY7K87NhEJRD75iYax7aPNkVHxYYdPDNq3qnij7VcvfUQ2Pw",
  "key22": "3NZD2nrRWYyCZxrveu6zDPdRnqWyPUr9XBphAWq7vE6hYHxMS3e8oz124MAVrxoBPTQZHZWU4nKUYnAud4p9DjNm",
  "key23": "TVL83jg3YdD7Fdter7wUAD7PmDzcdB9QeAGJY3VfFtgqW1pzkaYZtZmedNcvbpQhxFBkHmdBJFAfGZNGBhSS9Rq",
  "key24": "4n1nsCkda1BHnyBV1UBUJxdorXS1YqTgYDG1r5wXdHjtCTBNJpD5wZs2ttTUTonDrU3sodnk3tkVv5DXghKBCZaX",
  "key25": "3Yhbn9YBo1N64PKE92FtmEA1z2gZDLbu8SC2gzTXwX9RBDAwj88PHT78JyTNY5wnMfp1H4ZWUPMV2PBAkdgDiXxo",
  "key26": "639NUkbGScLhGjXbGq661LFMDgi2FWjG4KLYTb5uVgG4NsARXnw7UZKf9io6FxiEpDXgcVjhgNmvxCqXihzb8UmN",
  "key27": "2jfzGnMfwb2pQvqz3JCZ4AEnw46ncPC3KWDiNeXagXxFpFWVMDRToa4Psx8M5bLQ9uQE1qBBnawZ7aAmPdBueLX7",
  "key28": "5biJpUrBpoeqRYQba1R5qY5DirYyx9j7ot65wdynYZTtVJw5UML79HmR2CLboJDgZWVNUSqYgwmLqwMMsUavp7Tj",
  "key29": "2HXEQAvxK1g3F3wbUkSH8rR3e166QdhCMfPvH53rtpz9c1oQszNFc7nP1QfdLiNWmDM3QJteofyZH5VJNG4zRCMM",
  "key30": "2k2ZeRNprXNKEpBYxMp9kFZ7dLqV48koxxWh9hs8NTdgUhNKfmg8Z4u4eoTBf8anEAdgyUWPAijMt57RfL98A426",
  "key31": "4KMRNdk3FnEryv5KwE6hAXPtJ12Ytj3c8QQeUE2rJnJ5ZrWXnGsig14jQLdmdRJcKtpnNCSSm8918rZwKBCFESGF",
  "key32": "wKQ2ApyzoVnWKbVWQd9PVAahES2TbSbueVgwhqnvmfqCWhjcpSziPVvrgQThF94ehmYM51REsstszSmokVWvQZ9",
  "key33": "4z9xLsmxZ8LaTRsV6StyeLkUHDXuR3JV4cXZN17hGYW7DGWoXQqYGwddrNcpvpVdLLC5XUzCtDUbvPEqdFC7f9Zx"
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
