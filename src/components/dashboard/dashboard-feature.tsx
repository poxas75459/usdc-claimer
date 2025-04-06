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
    "3N5nKKeBqoGkYbS9iTtNh8NaTqXJoaBUgGBVHHdVdqRcu12dimMTAaHvjmQxL2Ux5QytnoGFogAtnHug7zzqbViv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vfFXJZ5naVcNR1si2egJV5JUzSPSNkz7tjS1GcvaFdEphmWbpxmktQ75N5GCUaKCMoWj7k4rVWygyW4Pd4KwqE2",
  "key1": "4n5WvsAXNJGpsPD8G7oU6DGXMJupEXkuCS8jf4NLSqxa2x3R2tzVzqXZsC85E2BJFwYmnSouu4y8jD3FZKLpuwwV",
  "key2": "2ceaaKhYPhRYZrwU8yNh3cn685DxPYfnM6wjgyR2MzpwPFuEJBtTizLGRCbTwbkxCu78W97bjkBzg2mQsLLxJkjm",
  "key3": "FL8zwqMeBX82WJiN12zsDPXDJ8hJYSaiCazSNDr4UwwZHRXj95yNnTNAni3va4vn6EhpsovWr6Hm8oexPnrN5V2",
  "key4": "SNuGrHcGwePY9o81my8m3AwyCjXCgjMFJsXe1c5rPRnPcpZCa5gj8DFN5GsjfBccdScXW6orYpnAiwZwyZGAsew",
  "key5": "4aeLpR5bfg9fADzSVSQUhnTi7AUjcGUL52wmZU1wNCV5B2LQWfDNoF8EDvQp3J8w8JkT5bZ3g181qkzxEbbQTTDn",
  "key6": "4AL6fRAg2qYjkXUSur2k61ecjRaHDJAq9Mb58YY4q7DXtJDFrnUD4prEiaqnSbqvT97jsvq6CpmrXgoNXJUoEd64",
  "key7": "rPHXAEKQy2DGsbAd1cwuUT5GnbpmLSyxobikMAZgLfiMbtD3mGSG2WuEhsDuuWcna7VDpC7SrfSyM7YLBpmWnEg",
  "key8": "AHECsKs3qZVgcdCT7PGhM4PxoASG7JFnZnCUhYYjhZWxs8hG23uRctaqNjQpSmU4SYTH5kZ4QnL1x7knTM6wTCB",
  "key9": "3eP4FBmjfj6PWfLaa96feNV8Gx1cpb6a8hpPkry8absZXa3R7tMSTQvr9kCe2xbqgrVcftUnEE7EZ7J9zoJuQ788",
  "key10": "346YRHBY5WasTKDMPG8vpRpggKGf7x9ZU8NoKVDf53JbUJ2WFNizT3hXcm2esMERrDUjwTdiyAnPeA3RZqw6kDik",
  "key11": "rn9KrJvFGjgM6AbVMymeq6GE7UaBQ9ZRRUfuS98xKCH8r7LFnRwHXVwQgTFDSkCubyPnSzo7BJzfoT2SEBPMubh",
  "key12": "2JsJ7as9mAdV6MYeXtXBAUYZFd2jw75iyxWCMjzBrtr1GXqdsMXEf9bis5xvyK8te7u4Tubh3g2AjQw6vPAeAsK5",
  "key13": "21P1ocC9wbeZMSYiGUXFS1A6wbi4BL61RPRB9F6Jov66ohGDcoTarAWAy1dMDHDXzYy8QDRNnYpzgpKPbUvnkwg1",
  "key14": "54Wvt48DsYaLpVxdk6ScSxGa8VoS8bm6rtMLFe3xhc9253DcTY4j5LuaznSv3G5zoxjBLbDSwGGGPXnwbpv46ok9",
  "key15": "5UhChrsLHHAk5TAHGsMUwRz41A6Rf5n835FgXHHvpF2DsF8MhxoVMGF22GfdRWdNjwAHYtN89U3y4MZ8ZdQnYHf3",
  "key16": "4jaar8BbQ6XmjCqANRr2R14NsnAjiNCUBs84TGAiBdUmGsordWQja8USWt2i6QWWH2stzMmnXs2NMSHpHyaCkUmZ",
  "key17": "58vS6bfBs3KqEM3Vaj311ZAHFAqDsoz3qTiUPSDWiRRqS4tcBpLLBkJfVwdoac9evyKfFFst4f56QoFP6ndtq8wu",
  "key18": "3V5enUTTfBTurXPcgcdYHGqdeAfSS3iAp3xFEknPpVAC3A4p55bcaoK7DHWCxej1T8yvMossFx6z8nJ7VVLmewiu",
  "key19": "3k56HZ7k2QxadWZRRk1eG4JGHBBj6PtVaRRqxQchSjf2zA7cT16dWksjzZPJkHj4auQSVeQVJ9i3CnDbWPoFnCWi",
  "key20": "cRK5Q23DMxmQCsdtHYma9WUzuXweRkidetTj5VSBxqj9JA1twYA3ygBRtfdDv6owoLgFnh6fEbqrU6uskew2eSY",
  "key21": "5Woevwfm6cZXGeWzAh8JAgC6N4uyYGy5s4q4YvHWuQLKyPqkntskgWAubvMRauKFpFziPjHtFBNvam5yQ9bQP1FJ",
  "key22": "3uHwiNSRnzGbffUYMQWWrrsqbHN5RjJ8C8b8j58fM5njLSNQgqjrRKR46hp1dx8tdgSVKVffUdZYn13Bw7LhH6UW",
  "key23": "dSLrqj8n7oYcwydejHKzFHqDpan61SyTF3CPVvRnqsUYEm5RTEhXss5iknQ56Qf7nQELYdyfHDqe7UGRZ63z1Mq",
  "key24": "2DnJV3hczoQuSbnnBg6679Znk9GB7ngodVTi4isPtwjU8CCnnM7GLiWkHSwfKGBKZvK9phGYALEiw3zzesazDbQ9",
  "key25": "DpUNdXyqp4eQQ56uEFmCF2grU5Y6PMDrpHigXq1YLF9cxN8nRG1XyatKLMwTXATgEBVTvXRTFd55xTRoqrvDEaS",
  "key26": "5ukBsWREdxn3qqfyvKHtC84kVZqbrWQrdijy3fc2p1yVmUc2dF5VxdF8UCackjS3DFWjkA1VnzCLzY5kyeR4m3S4",
  "key27": "21BbGYFBT3YTc9AEN2dJYWpqxHVzTUTjKwYpRqSAzpDdfrQCUtkX2nTgMJfTJFEWVQPtS7hYMntdFUw2wENLkBuc"
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
