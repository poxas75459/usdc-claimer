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
    "3LLdR1aM83XTFAedYpgKBeABgrVp8T6b3hEBGKRfu9ZDJ8JDDea6YN8q9SnCeGg1siPe78TzpprGNzgqvPNgYaLT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iKNMs87CMzUAoDp7fScbJNXuPaHQvbHsqCyrY5tXcKBKXcq7ZVXrq5CB2mbTvVReDgE5JRa4DFKixvwfypBc3Ss",
  "key1": "4UuaNvZQBBnZhU3kXk3LuvgwSfk1EdU9WgmDwgBd9SqZ58UWmw1AnTmk8rcrCuPmd8Qu5jcJyFLLahBjbqwHdKhT",
  "key2": "3CPhoY6ZoVqZs9f8zqxf9Tu2hQsECxGqNhc7Ebs4KvVMiWdrcnrtSgAgstVGPnGmRAGiB35cYmnH3ZmTr3TQizVe",
  "key3": "BF5BbhTB2MPaNDCA9gdTxitvHTFWAmPnCi5Gp7jPJhRPXb4aPF3hJZwmY1LHRK2fYXK453CUHqfLdwJCnVYKq2W",
  "key4": "4cmvqxNptNNPqVpG8kJKxAJ9dbYRsk6viWFTjxvaKEYt8rMLYMcVQQvu9EtMt2wd8JwVdryQGBkXknPzXCkMYx93",
  "key5": "2EhUMW5WA666aUcx86QydAMmG7Wu6e9VHu1PdDtbtrSxzEb5GuueiitcHDVEFRTsn64Tb6Js9F28kr3zGzg6tAuH",
  "key6": "45w1XTDWCvjxWNkoCDmFwaWFR8TcN7PJjcsZtXQbHdoBrpXBsfHvSGGWh4NVLiHKxGE2pDNw4QiRebGGxCMc7eAJ",
  "key7": "LA8MqErmEBqqaStxUZbA3A9FE4GynBebaaFHVAXRjgBUBhGhXS9PrnJhXPMfsMyRsaP5MUVv9SRHKs3N54A8bj8",
  "key8": "dS2KccungGG3nYhxB78eQe7aZDHR2cwQAmjavPfdrAEXd7GawBKiYRssbF3ypyotrEPUVt4aNasAfrv5FWDzM81",
  "key9": "3WPtfzvvU6KiAnUhMRX84DGJ6XEZBjXabpSMWm8qHLd8d92BLQgh7ZqeSjzVXpyMTqCaFkJetQebwcHVhJgodSL6",
  "key10": "4ExN3tvmrk6aarJm7wFcUMHNsuGGFBKuYEYTfJrBJG6TR3pmWR18HmhPmkFwejHNLrVZGSRBvDQg6vkvELrvnTsb",
  "key11": "3fkyVKL7YR28hTQCyn1P2YAGJgB2Xqqcn3gLtDaLYdRsxtQ1qQ6p6HPscZiQ28HpwKw9pFA9ZHdqYC1EcCdzoMFS",
  "key12": "9mYexU2KbzxPSuEW3KMFkxFgmehCELhWLKdvt8oNmaqfvsVzD1gmqeDhtXgMZERj8EiR25bBkkqXD6wFHFJqmPM",
  "key13": "3esaEMbH2iwfLtnhfc7THbtPUz9mKL6SJsQJRkLS7MEBvamMe4MtvmdYnL4dfqQWUbN5FJ46YpNrW7m4pd2o77v7",
  "key14": "5DTmxWJCyiDWi5mMMbEvTNqEigZd4ribrjt95ELdgnaLyZJpJUGjAxEinEXLTYMq2nwLsxc6Aqt1RCEgprhBa5bD",
  "key15": "2VScRmxKDN8pHe7QR9ar11o4B5ow7aVd7aq3DAXHBQtSUsGuDcgoUr4f7VtLTmcnMWkktA4Hat847BwmUggbBBXP",
  "key16": "4swQ8endC6gNVmvexSmMqToJ2sK9gwiet9EtxkipdCWHQWeYLHp7ArWeHWz6cynR9tvSMtruQoiqajKbmJxnNpS4",
  "key17": "4Y5kG7o9SxGdgMydRFncqUZMHFPSidk7EtffjDJZ7nWCoyUAYnKaeWtfgKd9Z9t2LCAGAQ6sn6PFtrYh975D8LQy",
  "key18": "gtbmNCcMefMRVEnCb71BRxuWbNkz7eVHC7iT1CyaTFeoPjMXT44oamoWtSQuvnKChsf2c6eZeWVRCBjoVH8QhCZ",
  "key19": "58AHuQjCodyzyijAFmCLcNuxiEXockAkE5NrW87yPrxsTKcWjbwqfWrwGh8GEr3PVdRbNhNtFX5kjURzgi6BZ3Yg",
  "key20": "2ejaLRJTTqM6bX51CoMQYhtB2UmgahbszjGJHC1JW1i8FVLSt2MaieTtPfvWFzuQYaa6xKMpAfsJBs3uHEakVfM3",
  "key21": "5Gqc327MqEr2LELAFxdpV39mhHyBjo5pD44nvcAGzN6GvcgryGzdyneM91wjPh6Fnjqfz9EwFkZBDBC2tsb4iysK",
  "key22": "2xWuFKUk6Md7BnTBtw4QtuSnJrDuj5aqARJmwacnrTY2Er4Pf2kqyGEdzxbd92Rn4k26WNkvBSAtw8aCR99oMUEf",
  "key23": "s9YEbBu4ngZbJjfV3TbbZp84R1k4KwN5viV2kgbLyyA1HF7iZWL8oBoXyEbBvsUUGu2LHkFkKhc2un3JnaxYLza",
  "key24": "2dWSvi7oC4uRqumd46pCxxk7FwEruqC6sH9MPK58VKspiSueVMWVYMAhwp2USGhrgDqY7xdUws6xE8gFTdfLrW1",
  "key25": "5LxGzD1uLMuSV4Z1qQPuym7Lgriagn8vY5cUSQ2qKJnHbMKXHRFqYdK1v6TrA7r5YKgJ4oKPkAgdqwZtrwE3CAXt",
  "key26": "4a2Ne761sZWKHSvthXK5qR1cig1Te6iSKS5UHUqrwk5SDS4w3EJYr8XYk3V7vHhD7PPnfdH3gGWaVfwt1W35Yzxk",
  "key27": "59n2Wmx8BDzGR1tNTxQw3WGvGaC7qRGgDP2EUfmU6pZtBxBoDhiaH5eXnDwvUAxAFyy8yt6oAfedLVQmSEhtNtKT",
  "key28": "37TBLRcpf8PcJhpC6WPUx21Rw5JujiU2b9R7XLvqv7PfH5Z2LwV7954RydJ35eMkTi6Py9Dy1AzE9Thqi67Qf2wJ",
  "key29": "5Bn9VZbnfqNJGudLHDvSfoJHpchL8jXEyDZtnjxWZfuTEvWxKmqBKiEYfe8AnK31b5XEJ7ENcWbPVng3BVhwTc69",
  "key30": "4C6mEWoGMAFcM6tG4Yg2AYZX6myzLpASe37j3eRFsdxRkSdFspAYrEZStt7MaA22qJkgzURw5sos43BaKRxwHj4a"
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
