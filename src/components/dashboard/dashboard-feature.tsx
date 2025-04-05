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
    "2nt7CVwLeQa55qZd2tHEYFn53kK5ig3RimXgxEucYHtdqYVpAAB8z8oVmuTpHDNwEpgNK9TKDSqQNV1KXXHMVbk7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1ByjMT33CZR1mesQkFM6eWWZYK1BaPV56PjSMYFH7L89sYyy6YYCTSJw5HE1UBkdczCmi1bBdMbR4rrLMWFWztx",
  "key1": "4QXVBf5Sw1m7xtUPuiPLR8VBazjA9gVveV2vHNPHmWw7vsn3LbCCSB1sxr9rvXPKxf9cnLWkBwPTE7GdoAuMCozu",
  "key2": "63ZJVBHiuEikLk6kjyygarnQk98zntMEJ8wb9RATJWDTjkgX41Ke9kAauNZZPZY7ThcadUn7H1R2b18zVmJCJ4b6",
  "key3": "4yGnMSEYApFP8eWCWzaWCeJht5PUozs58KGLi5A89X5kHNaFNni37YUQAKr1GjomGTpdjZPPpYBktBC6JYYaSmyZ",
  "key4": "4MsSVGyEUhvdY1TkcmBaawCF9iwFMTyr3FzZAuBuGyaDb6u3xwd6sjbn2eQHXHVcmPZNjS2rNzYankzaz4xKDznG",
  "key5": "tSTG75Ps4G1pVtYEPaqBCHSigrZ5oSXxphmi79fU9Ryjc6Gfg6ihLFMaxq6jkquLjPcfCUCny4yVmJBZHJ4mRQo",
  "key6": "27fKf2nBQaJJySrfbtfi4GyjVeVsySCMuLsAz8ah97iwh4VUEWS533jrKj31j2D5wofow6ZRfusravsWzEGvQzgo",
  "key7": "3VEwvQi9rjUZgMK1DRvZjNXkgfj6coqZ4q239Z52Fhm4gMjnduVVcpNFtR5RXUd85GhgyNEYQShcqvXCcwLdPdCV",
  "key8": "RmeKWpUUMD5QiQGWDh6M9YyboZqKxHozeb7MpH5P8rjdcf8R7iNQRfmurGXzdXxM4DtLQChXEYLsg2YposJqkvE",
  "key9": "2kywCcnLW5yYNUjudb1mprJs7u9KTfqUERQteuUfc4FCpuCYYmoAd6mqcX9X5zJasMcVW1J5miut5ZmBtatCruBw",
  "key10": "2ZCp7bU4hVA6Chbu4vEkHdNrUKcRkNv6kE9UGZ2uTds5nkNQnoKmGGhVNwpJPRYEzoLkxgiRLpzgt2FFN5ekubWj",
  "key11": "4DUoGT4MM2bLRPAJxF5xccA42BkuKgNkMAphBfNTu982Cbe6Undav86Y9WbtdYFie52bn3KSTPsQiAJzqQ9HGhCZ",
  "key12": "2mJu6Q53XL6WFg5sar7Spk91jbLBg4tCTHFgBHt8BRLMCyGi6Ta4vDmU8JH1UMZwyrbDNBtJqGeTM3Z6hfqQYpC8",
  "key13": "27eDHZ9aBZKKxBCpyxZpaGrLQ9Vh2oXSSzcvgCdXtnCj8sDcWKJ6tsMNP85kWmicvBTLQ7sUtE4qdMhtpe9mndot",
  "key14": "5uCHCRoC8vqYVnwb2GhwkGyscDCSWh2Zrad4BPzVURM3RwRfY3zaKSNXwhAbn5oa5RiwsGKsZkY8GbA5qcbKrbbh",
  "key15": "2Z5QQxXgEMeCWM4YJBZ6PVwBP8fLTfXd15197Z8dLpUUwF5AVBM9SpXDLsjspExjX2bEQ45gaKDeALYYtzR7NBoy",
  "key16": "5o9vXbBVTzaxasteZxZfkf97dNvJRv97WoKgwfF6AS7cKfMhenaqwcf4BxbCsos7kByJHoXosne7dYHSiS8KZNYA",
  "key17": "4HvWZx1oCjRezhDbWShF8gyDcRb4MaxMUt7pMRZdRw7SfiVHVKzK84fmZm5dQKp74KibbmiUUyFuWRXzAc6ns76c",
  "key18": "XUu5J42rN7ZYm41s3Y4gmRNBZSXdsX4amaKe7cUemhNnybP2PWudzrVShF3hzkLHd6KQ6HTwVj4HYhr7MDEVa8Q",
  "key19": "2eui5ZyZ1dSFcHaYZ1XiD9xnJzi1DGhwJbJtRB5J9wiUcjJXVKAuP9t8yFPnFrhqBqV5LHztKaMZMxSC41dQWN2m",
  "key20": "5kHt1WYpGh4cwGEpD5oszHPgJNxbKVHEgyu3QV65Gzwxyc2pgqNH3yMuEGn8qr2ogbMPK3ECBCGz1AsuVXmXUn47",
  "key21": "HJWn2Cmp98w82RzYMmedb25F37Zmw6SyQuvE3nEbCERKa4uTUprUjoYYVUgrYnayiEvhuziHkgUjK5su6FyyXeb",
  "key22": "3BBCrUT4mecutgN9WYEPDEbzBV9NXhCKFQMbBbmcJtPo7UsJGeebPZ9b4Dyjqvedm6MatwaX94F79YZbeCSzymEf",
  "key23": "4Jitu6ahEadnxV7Nn9KuN48mN4BoB4G2g9pGBTBimvZ4TBPLueGJfam4sCQba4kFSzDkmgF3PbiP3ozRJwiQ6Raa",
  "key24": "2vD6qw6EHN4aHet6aRUyXMj4GUcCUVGdd8qDz7VQv56BPTWivc81TXHzfifHFwLegM1dTXKnJ6tJ1rueob4AuQaC",
  "key25": "GVeV3jCb31x3LYV2GFAp45xZkRy9Qf2Q2itnQFxWPgQwM8wzgMQUZggWhreRJ5ZLgiKnn9GpDg9KSY4YrQxLrPn",
  "key26": "hrc5i5yYFHXsBJ6DbcwTLxmkcS6Cgfz1Rq2dprpqkqUGRfadYXecX86z5L1XqoZrEGG8WHDX4phiRNZMYsa6rEM",
  "key27": "4WFcBH5j3bK6UR7ZgGvXusyBUeKZPV3Zyi3MCEDEBDBMMyiHmMUsWJnEVwDyFhaAvrMztJ551jCQ2MriuzV9NopZ",
  "key28": "4t18HMjJioKsAfamkyJQdUe5imAKabL7rnDPfPVzfKA1YBY13ooQug3Ahq8CKioaJSry22xt8ni4adrbEx7WY7k",
  "key29": "5ph8kGPuTeMfrpy8pjSEqzTCmz3jgrVzGWK6WymwSBUrUTWJYV7RCfGBSuDT6VAWhZea4AUAGGLmMorrdH9CrrfC",
  "key30": "2FTQCBGiakMn9N7r8TffjxXpkQ9ap5Wr7N3UsfGX2bqJLATNh63B3nGvjpRq9SMoRdH3rpNCsbMFAsE2Lhxx63Mn",
  "key31": "25dF1A7dRE1kRrpKq8MF8wbnkhxURMyyeu4bNAsRLZ6imXiPc4G6vwDNdGPDZwe3UMwj5CNpNHTiVETkA1qE67ko",
  "key32": "5GinQNuyMG8yPKzYBUpvwbKfnvqG57CGKmhEfH6ybyNRkzLsxVi8XEhPqsDTwKPRj6LSwJpp7nkQwHRLEE58dd6L",
  "key33": "4Vpnrn6F2z41b7F4xkY7auByWMMvB59MQtqsMGbMbkdE9EMg3hiwBsYKMpuCnaKz8ArDbHxs37bjrPcC9AfXcSqA",
  "key34": "35qtD6FyxnjYDotKquX9WmBqNNbVvk7zi15DvhGp8KZXKdX8TGNivFzSPHpABbN2dFdvrKjFtFhdZ5kMASQzcYiH",
  "key35": "3go1gbGSU9Dq2dKwYh76Z8dXVPYwxpygdmcZCseyiUaoFYb4s79ePxJjqmwFVjjYcQDK1A4wxsM91hryNTocJdvc",
  "key36": "3wHxRedWpD3f2zTesgZY1TRN51m5pvkbhGQzxxfQbg1h8RSQUyNPMnr6zivb6R5ExYk1gRXh4DLkf28p7Rsgvaty",
  "key37": "22uiW95RhykpB6LxAhSQHfaGmi3MiXHDjS77LZBFqM1KZi3rY4muxWVMDcFTjKioG3kpRixGiS8GAtd69ctJsfJX",
  "key38": "3sTUgyDjrbcrPckLCgktkU9MDLyhY1D9GWHcVQSdVVZ8cCtofQyRzJ2YnQsovRvFKx9zdro1SiyGvhX1LV7GwVfP",
  "key39": "5r33HvQcTnZpVCuij2xq9h888fJaEYREtrfWkZGEsR4Dmy1QNPWZTqaoHhM7hsBxFgK428efxAHh3eec7qqVwWhM",
  "key40": "5sd17PUvTtpCs1UqsW5RG62tZMtG8QQjcyq9Kzh9K75E7wVty2WcCNrep5RfoFReSWmYcWCnBN8qPXC9fL3wgFLq"
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
