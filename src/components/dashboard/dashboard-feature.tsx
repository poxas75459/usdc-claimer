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
    "KGZWM3RKci1hVL8w3Kbur78Cuh2UBh3yb5G3rsfBKLfuZp5MegAFetCUiF6kG1wPbCBHX8Wt5g4gWeainsqaVo2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XiCUZ1PFRnWH8cSGPGvw1pCCmhqBXQAFi68LPTdsAWHjRbcWzoyKgovkjfLcAAPzvcCGYuwq3Zv85KPC9ukLqAU",
  "key1": "4aLERsLuaLNYDQG212aHR7qZ7DhbEduLHF7bd3erZtE8Ty2X7K8gie6CaMr1W3YyRbGtpTXUdvyooUfUE7LKQdxu",
  "key2": "rChTXd6EEk58Q76KpFf8x2vEcN5Jx1uBe2xPgwbK2NDQGofyLAiL5eUXcvJQbduC4srW8D7fEjhhQsWch6SVWt5",
  "key3": "24KVddj8yQ26eVigbefGREpo94dSV3UzPFy3kHM6AsLJsQx4SwitPEzaDkNsgmBcmuEcFCw9GtsMA1J6QetrBcDS",
  "key4": "nXQBEKF1B2Y6kD2JHydkF3bhqiGkcGzgN4amXE4XSQuGXU1EBo82KQPHYKdFLmMPrzgYWTfZDVmrFEBDwP6DE9M",
  "key5": "5Bqq9RsRJUXq9NhCWT9WJpZuPHKr2Qh6VqeQ5UhbdSTUz5ZfeVbDkxBGtWGzBKiDTSRULsy8dVWDF8xQm6VmPTCW",
  "key6": "V28i597RHCRQS7AYTasYiJucSF4KwEz1n6odQ48xLYz1uPSaBAbqANFAzi3cuUrVxSqPdAnhW3vtoViWUpk5kq2",
  "key7": "3oar8YHGotfCpT9xKwsj5HWBmVYiwV3hLcMWvhfcvw4BEPRM1ZCppfg4Ds1reHgBvMmVsjK6Arr7rnRurzgeTh2A",
  "key8": "5z77g7nVXG3S3fJck6mKHwJEV3XoP6GcsHwZyeiSsnnbjuM5v6DJrT3nKpYSbA1aX2CfJQNeJtbXGyzp3kMB1H6v",
  "key9": "4gSHtQ1kN86Y8hRhJ8cbFQ1odZXRH2dVfTiB1wfzt9CLNArdBHRmrqxdcQKyrAxHvW2W4YDPRNVRXH9FUz6GebTR",
  "key10": "5wwYyRkHtEMyC6h6TvA3LNp47FvCv8WkQ55nKxYmYXHRe9YikqFgCxmknb1ncT6H34AwBwrEfdkNyuMbTwwfh2me",
  "key11": "W6twsDcv1U1DvbBFYC4cYWAUtYhfh4Z8VgnjR8Z3oNNsN2JanmiLJ4C5ERHy6AUYFE7mNhBTc9EmxwFj3SvArsx",
  "key12": "dAnYs9WhMF2cGo7xrGmg11B13V5iFGqgcLRvW2hBDCE3hjjQPpavDd6Vix7xh25Us5RxgsoxPE9Goh5Rnv2iCt8",
  "key13": "2J66zv9LZybGQx1xSA4dge9TCfgyyjGFMnPJpL6QZqEMvPEth2PUHt19k6f2fGrRxD8yp8XcLaRr99KtZWUa534c",
  "key14": "bZwkuX38FLr7aqpcceZ6nocdvcPPAXGGGM21j895YEdU6ESeGAegevKyDwRzwM2C1u4XvnCndnUHG3Sui2Nx7p7",
  "key15": "rtNxDXhMboHE4HsoGWP3AJ4VRG4cBnv66LBNyZtZ69TKeEqukwAh9SqyUhRmHLHeSMzDJcnJMMmirqsPDtJKYkf",
  "key16": "2nUKPQDkNWn1RwxxdeZY3VS4wbWU2y8k2gDXAGR9mjRmVVDCMYQUPX5KsSggDh9MZHhGgjhVQq7T91Le5PbCoZEG",
  "key17": "3Xjk53VYTraKxuz9ZweTjTvWwmr7qjbTSqkP1GdMHHNkcUsb2FLybrDLgyHtYo23qUm3TWDD8iR8WY2yoxc1tZUR",
  "key18": "2Mrx1ikZQLvBwMgZ3BeF2FweTqzfohZ18FtAA9H4RSuD2zCwVSUCs6J25tJgt6ugsix5zRXpEBP16cG5NLVjQJY1",
  "key19": "4DNuRsBR7rj2vMzSoEtg2hhL4vA2pg1xoyLXyJyUUZiamTsWxqK8kzaWZZ2QjZzmyeKv9i2zkvay8LpHkQrv6k9M",
  "key20": "4htovdPTCQNtL6jSj1DnNJGZNr4ev14JiJ99dz6d5zzYRNTUYPiFvhGx7hLUCDsZKhMNPkoZE3xg5qqQVB2q4SfR",
  "key21": "26PhotDFoQ5QVohHpE3zLxj31YFxpXMq3YPy7eueXoyqfixgE4koWYnviE2c9ScwLycHQXiL7uCXHPzMUF8n7v2j",
  "key22": "3jNgedLw54kFG6VY6GP1Je2b1iTWC1Bqb3PBaqkXmBLkrgYLY16Fi7utBBdLQ45M7aTXnkGPTuyEFQ9ttw14MZtQ",
  "key23": "4TcT9WqiFj2FGeMgBjjQHo9cfR6XoMcRVRGd3x2HAwXfLZ9tXWN4mAAggRxH4EsRh9uLvsRZLe8uPFxoF2QRAP6B",
  "key24": "28NyzNZHWxGtH4Gyoodt3mBQmFMJN55WvxUHd9s6VJbLTrspZfq77R6AcHWfsg6bbVURpUKcq8mjrt4gaxdYbwBU"
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
