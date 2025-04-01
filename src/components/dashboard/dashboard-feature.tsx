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
    "4eUFHbpSULhc81ddp7D3pinrqUE8YBg7LGfqo7d6j5UsgBGLVZsXnKw37tfTjcsBEet84c9uqNi6ercwjSYwdmGg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Kip6dHLVQhFL9LCCZKs4Fqw2GiqY2HmtYrvjkPytP3NbscQdLL4NEssFRNMFQjhT6kSwvAQg1qTJE3M2WnfJ8gT",
  "key1": "44oPD6QtBuCtkxpkA3FFm9VW3o92jbpJ4GHUGNffLz2QW7fDKKBcxaaeVvknYfS4rsDiJ1ab9Sh2TXMbcBWxgPeM",
  "key2": "53PesGhY2DukLsZD7GHTtvpQMZZF2mJD4vV9WnY53JnZ36NxXuPToUgTb99ixaqtoBg6fmm3fJjyXqdfJyV7XGjD",
  "key3": "2Tab5EDhDrdUV225wwxcBpvipHkwkh1fygHPQsT2z22AiaA9uLFeD9tjensr5fW3sGZscGZ8UJhsfjUQottDENdt",
  "key4": "rDLS3T5YhyiNyeV8W7hGqPLh5HvbW17ihbDQX1bWMZVcGLqRDWs2QZfmvciFpB958mmRaKoBzYwWoNUGFQX5vgR",
  "key5": "4Fniq49XUoPwQjBmqB7sYNSeev8KoRc1yKcWLE5v3DmUsRiHoJ5CFgV6WM313zQSCtDB9rhVHQBCe8Xpwx2sQCKL",
  "key6": "3pox1pHTJLb5FmjTRfeUCgU8fCNx1b7Y35xakjbgFwg3JmsKq9Bs823Ghq9Hrx4n2j3xxBtDQwBCpfDwYxcScCwn",
  "key7": "2LRohdNUbnDfpLfW6AnkKWkJSwi6VAe4T197F7RGfCdd8NGdhyzakRq4gsU6b4FFVPPTeXUdsun1Nu9YyomW3nqc",
  "key8": "2u8QnZ19CwTEzrH4kNBZCpSTMSjVkH7UdpDHgLMLgTKcfi9qKJErgFSXT7ekWXsn2ybZnt1A2LNyUEFqiK8Z15aD",
  "key9": "4TQzAYQVCPaqbihfKdWWUa7odfMqsQ6AVTmcCDUA2bMSQ5RoJW8XRTiov9574Uv7fm7bfzKzzxqxEZiCML7Pm6vT",
  "key10": "3JpLLcEQa1P75fNdbskxgJyF8hw3PctPmtbTrmP8Z2WnHnvQz4b8PNyyfc1W4rztTVMKfJsHkZLQFjad1JKxN563",
  "key11": "4c6KyQghmi9sJi2JzgaGLKkG26ch5ZKVnnZTxkuoFPhKBWm8n1CXpb8ZhTehoYkuWH1FQMbwdaQ2UGuXvsrEBy2H",
  "key12": "31PEFnLuJgLGTyBprBedT2H9ttdN1WqgSHYwNo94SW1x2GoweKjPJRuLiQR91ZSne7nXBQKWdWiwHLKtyW34WTAx",
  "key13": "31AGdCQdBuXB261Hz89N2iFfRMNHkXQr4rzuvf8oKZoAAJLskFiYGa2CHpruuEVF5ZBGrWWtS9J71L28occorsRY",
  "key14": "3d9tTKEUTnvptLB4A9eRM9uv6ribm84Dv7vYPVmDzdRCTUakhnRfLFcmyEsg6VCqMvB88NmPAtEQU7N53gqTbr6J",
  "key15": "5eC1aZQffHJcM6nFwP5yYoUMtXtSzEJrosQ1ER73JuiMhHae1df24HjX55iMhVSGtrNMRb4KYWSuG3AGNJn9xhT8",
  "key16": "59mRR42NYaAhs2pkaYCDo6n3CLYNqg8apQki9EgHSmCV67J4bBmdf9WRdJh7m7cHT9gqqPuc1LCDUisUmNDu6JW3",
  "key17": "2vSAMNA28RV9eUKrWPPjqeU4BkaWxGiEcSof6EiEiqZxhzrwBh1MLcHsUdUTXr9uQ8dis6VJTwm7YhggAHuhP81U",
  "key18": "4SnESv8muqz3z5ZJDXnAt46LddmhmNx196NQE22EU9fqYCykCpMSbJWWWS1Eh3TS5b1pmHLfNkLEF7Za1yo3dgNu",
  "key19": "2tJ6h7K9q4rvToLwLo7AQb5JuXR5L7ZkkzoN93Ya3UJw9tTVFsbpaNtTiZaz6UfCpNWtTz6dTiKMXfS5V44VwXzp",
  "key20": "2PmZ8QRcrMn9DvJ3BHfPRjEoKyBzZMdHnmPZwNG3j2DKvNMpeJS8D6kF3jfWZapTMHbt8xsxKVsh8wftNAgoboh2",
  "key21": "3zqu9U5e78VK6ZqTLrKroTdZGkqBgqWMzKiPnQbaBX8W5xi3hhxm4jhrFVC9UWpXHWPJDZG9yXdNXmakVv8YnXVg",
  "key22": "53n6heHxcQWkTAspfpSKPbSndA2eFnT4BEGiXLHGRr8SBSNPRQRX97oKNBkXHUhME92NHmiek3kKNFH6uMfMcUHN",
  "key23": "5bjNSpC29ahZanjeqdqS4bedJZnF6FLYBeM2t3pTVfhc3DEzU8nuLH4uTcRZp1wRoRrsUGQVAc27nePVFUGNn3DM",
  "key24": "B5xaVqkdX845DPtcPRHi9G9UtY5UZewtC1aVGy7B3e7GGELhtz8XjYBdTXpKcV86x9RbFLpubAeW2FQLv16L2nf",
  "key25": "7V2rAQUPNLooPMty4CTinAJSkQ4NiTu44kjCAaSfsRThMzsWkhFxWaamX7RWmcnsW7MqfNnUyvJnNNaptz8uwUr",
  "key26": "UtgaU4TWAVmNoJoBegAuHm5R37DG655QD4aFVTPHgqDbQaYyRqp4g6WkYKXWfdDw5wrnbLkHPM5Q2gxU9eMu6hB",
  "key27": "3Tx4qRBs9ASM69B8MyVSRNCm4cED9S5rDPsx8bvjzVjUaRoMhCZzMxLZBPwezcam6ArrYQ7wbSH9J9D1zY14KPTd",
  "key28": "4uVtx5prWHUBoz49FuwdNRM8dwaCvGDL6eegmrBmySG8H2kqmRdDkQjkWDTiqMWsFAdHqrvdmwVr8yyogH4TA8zp",
  "key29": "5jaNyEyUYTwy8AZeiMZasHW8fpDzfm9CNtYD3nxqnU5BRoqPzWmHyoGbh7UoaW8gyvAcoHjjorrPMV3S8BsY9W15",
  "key30": "4dW28QbDevMQhC9BrQJ8c3AKwkHE9VJ8iHBG3QEDtLJin5TfBfBdLpkfn3kzGPGQruQ6FsnXyTPqqZKsDb3JJ9jS",
  "key31": "nZgoLKrtLLjzpojzX9kzCbYuhsoM9BJoHuCHM8MEkNh3NWEkXnomdDuVuob2UwuJAuMY5WniMbrY6HeXrTLeG8N",
  "key32": "4DjCop6WrFfWmS8djtRbCyhi2hCpxbXvZ8GcPCRYNLP5UFPhk3CzsSLSBrDqD2apU4yEXZ2s3zu7ihPADouci4Zt"
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
