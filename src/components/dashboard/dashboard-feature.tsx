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
    "2SKNwJaH1uYHFvwFqy1xQoijwySaEcrQW6Arby3qx5GGYYnqyPhXN2qNChFCNcR4MFJ6hJjAdHaEJLB1dXa2DJvE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pfLWzxrzSRHQXMHQb4vCpNeRxfjudxZsnpSXdgdsT8Z7mdjiQH2QN8zucp4sSNtxWrmLJar6EtfxKLvAZ8iGSmQ",
  "key1": "VY7PzTVSi3iPVxYPMjuKTEkLLhXq1VhRxmHCtfmF5ucQnFJ3A9rktXGWjCU6eetuuJ9vwtkFJ6bU8jjUec8UyHG",
  "key2": "3tNcTS4g5LcqEQdU319ErpTGVcXNZsByvE6zzifpXAZSE12prHMgFqzpDQ3HQGGX2hVG9qe7bEZegXvrYsZjrMbM",
  "key3": "3wBpZPC7qfUrX37PbKx1ML8hkdGskYaVM4LSw3cACwDYmnnT5fEhmBCsu5ohC84aLv4re95Np6AW4wHMJCJ2cxzR",
  "key4": "oh2pAZjsjTyWuKsQK8YAsj29jfr5h3z45xq2ZoFWrjduZo47xuQ79cDzDfWiFiuA5HyF3kAiCCogdCD67W5CqPZ",
  "key5": "zK5fjS81PPyNjYds6oEXwGiMkJkz5ed879z8VpE7dm5aynhRaBHztF2DYmFgCL3ZW5zEKy46sJiWC69zmVTjxEQ",
  "key6": "5bRkpFD2kDCVT7m78otVjQJ4eZSRVv7a7EZJGm31BiMSTaF3gfsANpuyzYVBje9xxx78Q2TnSjKrgSJKsr1TBRTa",
  "key7": "4emYTVhQPgSjRRYXM4KKWwZ3uzZCsEcjHXYBqbqqfeCfkL2PwfGVjQCrXx3xzwnRz5i6KLgqwJtX6YYuGDF4cDja",
  "key8": "3xrEFpniR8nUAXYELvijZqmrdA7H8fytbeskWkmNF9RMWnC9KgAWzhi5XN1cnsHT1BqCJ9bL1GEudoqbexDv2q5y",
  "key9": "3KLu8hHSskZKPQsV3mbdobmFx6ZuZ1cr4xoVZuAZj1LydX1fkh6aeG61Uw3hugBVMowFUQJ69pMXZhQX9SuovNiM",
  "key10": "3B8Nez5qfjR4dRXEGx1Pn6ChTPqpaphGP7Mpb3A5PnCfgkHdghmBqKuB6wZQhgcrvhr9r8cKfSCf2H7owtWoWgDF",
  "key11": "D6SKmve7vMY9Ls9vNwNsaP4W6zd69qsSopFifkL1JR61GQFrGzkVuAKKoiySkUjYdixSZKRfmmKJ9UYsV7yG7Mx",
  "key12": "3yedxg2YMgpjJaM6d776ggvHGHvHH75tBGRVd2bn6yBGs5gx73djJYR2aHxwFE4WZiqQi9zPu8Pzp3uUU85JAFkK",
  "key13": "2hky7jvn4cw4nePVfyqadGwfLjthrUvdD2CktFPH8wigDqyxEBhNkxTUQvMyGPcDpPPWrZcnEeVkvXi5Ju2D8jdy",
  "key14": "2JbsHmB6pdxVABLsXZWonWoBQnecrv87ynU31HK4iJ3BibU6Gv1TfWehqop7uWKrwD54QevX6xmcFTnLNcE9XTFt",
  "key15": "3vhb2oyhrGPwGXMCZyAMyc7jpV2cFyCmB1kXXoM52DRsiPjXKX3K2pMaCEbN8BipptTyExHepj5aK4eCTnjeKo34",
  "key16": "3F241Qf3hZi4nj8e4t5ePSyfcwrBv9STvoN1ceN78mFdBGiXpJjaYRPVZfwnUQjJeAMjUM23MQcTR1Tbahm1Xs4N",
  "key17": "dR74VeLaYheZjKVnebHksv1as9jvgYZZ2g9Rc2qJ2tqXXbD2vhowqGVgbiZTQVfDEr4C5DLbxrdPhMyKzpuz6EC",
  "key18": "2TTER2tktHgghKq4KAVrKyboopnQDYn3qMecNrfjqKM9DQoqEzjvfLQGcxVdqjy4YRbDraF1TAXWquzVAHub3E7S",
  "key19": "5dQaSW9d415HcqnVdauttyg61GxDYA22929dk3ZhscNE4Lk2RFUawnKVk2zX9JeSDbDKfLVZEDyh6DTZbz9k6ri",
  "key20": "5SG4dUc2F3qaLDAek2vE81ySXFM8h3ejL4FYPiVHxBWp8uHgrMoW4XtwyK3ctgjXqwpSeSgz6oLLunpToPrMMZb5",
  "key21": "2wLKb9VVTkPT6UpTitAZVED2P7TKfs7cxLEPhSjQqSGbpwheFcYCCGaWVYYVH2Bwitqg5wU9tcuTa9gePjWRe9LE",
  "key22": "2Sq2MNNuXH3QMm4nVLvQosMr3R78MjMQCnDkUqQVXi27BDfAsWHs283nWFf13SBNY3i7cs6embr1b8mLA2ZBLxRS",
  "key23": "2PfrsQhjnxiS3ZvqSEbkfkTRPZfmnDJk88MrjaxEQRFXRJ8Eg2GZsnoH4fckhYcADxFVMwdiELNuzoTePnUYnrcj",
  "key24": "5RdmXD7KZUSK3Dednfh6mrsUEtCSuZ6sEN1Rwuv9VbmVsYupQAkccttQ69QMF7boAWfWP6LTNgsh9ZWqhcgWzn2z",
  "key25": "4LBz7iBGHVyFYmrhFDmUzt8ZMn1P5sSWJnqZT1RUbFYy37XYEjEV4HLAduVJ8bd4EeRSfVuHYA5CmvQ4onGuHnTH",
  "key26": "3gbp8FPLDorx2VuSa9yyeipUFoQZHCphNma2SbCvfHVFqk8Uv69XHyhubS26E7k2wFUK1MUB6YC7msBmFnmvkKnW",
  "key27": "2sf5Zj2Z9KpJE45xpVxhQwDQQSHacAkeMtU3XCLaYfWJbUgx257NFQ3gPKQ362U1WSTEX1bUHwCs8XcKAZoWNRux",
  "key28": "m9XvLC368kj7trSkHnFa7LkghWrSPt57GuttBihEFERm5QC3YLZuChLh76CRjDefFrz9HZenWwFgEhNHyLtNpAs"
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
