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
    "2HqsrWmixoQaLZJEbzMxAQVsF1gC6k9cz9kpkhf8k3JbQoZHFUnjTFi284KQNRUtgdZt17T326KrFXpwdpCBo5Ma"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Rr5b4DgmWSTer2zbiwMXFaMHuvHpAF1LdLfRPc1v3mPE7Mo6F34SyApKsPrj1ULZb3m9rn9ieEmYwBWX6N9fNCy",
  "key1": "5wPu6Nk7gficrq8KQUNg8L6uj81XUqUxmCAUG8f9pfHEDKrq6QzQRCaw1U8x2p8rBvhmqgANx4u6B1bGHpNnSiJz",
  "key2": "4133bubiaKtYnTbmP5HBByJvnuVStnsxakQNPdivyXt6Q9aK27tSMdghkxQVwoXSoVdXAg3xUhu13RDW2qUjKYBH",
  "key3": "26nyxAM1XmS947mpbiZ4FRdnMs2pW4K3vtVa5YTnbN7MXHEbnRh5bT6wYNgeSSsUY4BCVu5Wjv2pCQhyXQ7obr5F",
  "key4": "M3WtBeeTYuiDvq6vyDgdxBe6NtfdsKK1JwSpEmCip3yrQ9unFKUCbfj8qvCdngUKhStJr2BqakS1fwPAyQYwPK2",
  "key5": "31xC2z6NBYTwJa7TWAQ7uj4vv6auySeyPBzaA5igqLxnDDEtXY7q8hnEPdR3avycg33kUzrKfLc7Gm6Z1PTceSug",
  "key6": "5JYZzAAey7dCdWquyc6CPDW8JPJsrYGFtWrKMb7MuGpZavkoWH6BdSrimRXbiNPPxxCFMbMwZhfufgmtfibNBwzU",
  "key7": "5AGmRErvtn1LPb7LakXpeu6K9gbPihZXwfhv5ywuZYnftvdk4SBgCh9tRos9dUzdXvoRWsgpXms8v7vtE47FtLwb",
  "key8": "4uboSDwGYKLhg1dbko3ceEC9PNDCxZA6EqNrqbcWbNsUQP9TSrqPFawksbtHY1EXLguaWsjjBHRMHQNrEoNswEZ1",
  "key9": "Dq1HciJFb4BTjLoNqM9aLcyyU6tLRTWMDcfDENcT73K1jjKPr4gbCGEwddLC5KVKppcgbC6vkuPVxHWXgJM8KxJ",
  "key10": "42kPhPaw9voKph31WNUNRNr4qFCdwmNVzJB9qTLjeH9VR8tj1TWiskSzFz7CtSnCoXaTF5rLi4zyEJsyJrnUf9FM",
  "key11": "5wQE7FTPZaKNY7ZEWdYDDbE5vQNaU5fqbNU7roAu6pjHTwUkC5YvtPVxGoc7h91hY3hx5e9BAHzbdUDaDdmU2NjQ",
  "key12": "2CTgu9LaheeiyPXW5QYJZAWqjH6vbH3zFiEcKfNFsPD1S4Tjac54t5oaxuQRRzGQGQ8yzDruNP1N92Qs6WxjUj9v",
  "key13": "59nACp8PFEvx1BZMh3civehBotF3ipFBQkP4q9DwyuGNZExFik3suaQzsEghEMpAgGcSssLiHGP1z3XZyM3skgJu",
  "key14": "4evjGgQnY8ikBUwudsTNNXDX3w9pkgRttuiQ23ZHuMoQWh6PNMrtZ3QjCTeV1koUdLdsFiLNc61McMY1DvZoDsRk",
  "key15": "P6sYmNCE4SiFaPoeh49qMSrZMsgGBbtDjz9Wc2XCntHKByhea7W3jTSkQsrMCmfUqSmP35UTrCGv3rQkNs3kGhK",
  "key16": "44KYEaQqCBb2LyatQqHKe9NDqGaR4y4dDJaCaZfx4mMvH9Vtc6q4hTSkwyK11qc6pKsZKBnxmTGNHMCo4AuAVQu8",
  "key17": "4kmuLVCPeAyJNEWJmK1FVc8YqkqR9WdDnicdfeNgrRZaGaDHcXx9b2vY89NcnRWxdB7iF6L8xKSxDQLyh1H8y6gv",
  "key18": "4B6afbYRucgzgRBGjDWcJH51g5b1YuAurfHWuojQWwc5pCjNNacmZu2DBuGriGMQW7QiT6rgQqV37GozSTmeMSyp",
  "key19": "3WPMe6XCaaKxRPjii6K9w6HAqw8k6hF31Qtnvdb685ZzuwUfNgbLp7u3gYYVdXBwcKEK9QCc1WmeF92Ghtruo9vN",
  "key20": "X2xSjddtRySNk7gxQJa8561QTGko5XAQXui9g2LsDknU4pCMtUiZsRFb1tX14MQp4ZLKxSfJVMZQbFt4vwpHi19",
  "key21": "38scCcf8eqh5LA7FMhuQgfc3XK8nJjkoYZJYDH4A1r6B1UUs5nhS66VT9HJB1KKpPWpobRaB3E6ygqwuJoUUATQy",
  "key22": "2ubi8a63eLwN7wqnwWatvH5ChDCZgpMs11Za1ieXQih6zodUk6dHUZ1a6NwEDfFoBh4pTbb5WgsdJe6uPrrquiYP",
  "key23": "4bgzBVK4tWCRfnR5A5pfn7fC5Vu97FLhr1vUR7qtyHrmgbqZGg9ExaSWWTVW1P12eRYHHgQ4a3Abop3rewaL14UQ",
  "key24": "5zSEzLMoboWNT9LqXBwaCnvn6vWLSK9Cipcpw22pahyBTfPQJPDkVNDR6c6vxo3S3gQhwT3dBxawFL95ZM6JzCzk",
  "key25": "2cSgmt1aj91ki2W5CS5ZtN3WtEFceo9y9wbYaPu1n7Z6Fui4iHW3HibMCU8q9jtK4a24BvYm4FRirENozu5S98vQ",
  "key26": "4fFyL7TZbaJnHAWwH5UfYChrMm8DG5HTcaPEsBWSFuexoRw4bn1madvyLFNGkpq4bDz6NGfpeS6Sdx48MJT13c5K",
  "key27": "3FTvKmCRpsqTJWpNRW6PV1wc5ZWaqa7c1xSLjAtABSWH2fR2KgHqQzem63SPRrtXnYJTEtg3ca9p8f6a3Lv2313S",
  "key28": "3AcMpmhGYm2yuFznuD68carrekvGvtTHPWK1rWJVnnN7Ch7VKR1N56Zij2g99c8DdyQ266mbYiJuQ4nsLrTBFWAY",
  "key29": "5r6V7FppCQfuVaMEvAB5rmim8YMnciCYqPbE5TKbfJPHvWCN9NcpUS3aveWnWi87xTAkBMG1hMUcq1CPywCQLGef"
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
