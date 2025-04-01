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
    "2tYb8sVYoA8KnuaPHxAYrb6SYUDNBBapkWQ7RjMBQ7yifouAJ5xHw8zvy8F5T24zPBWj38QTHA9dC4W3iaTHWtpQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VmPiaf4UzDrB78ddBWgPRwZrUGX3ie6fvHuc2XeKhGx4ZFVk8LyYkM7LjTVm2aqoHjLVZ1461L3a71SrJAYwdc",
  "key1": "5NwgMDsFWz59vYXCAz3SyjNewQm4W4fRHin3dtqaxtWdj6Tru6Rrg3WKkqrTYytQYkSd7QcYpzbvdxdJjVWYNLMP",
  "key2": "5t7hc9JU9rFnkKu55K1zrx9wVCjJso3f3vNYxXaxMJ6RrwQiQHcZpy4XTbHEvc5zxRgLqTdgCDkVo96rKPAtiK4z",
  "key3": "2QfDMxmweMq2g6peinwft4p8BC6veM2DLBzAUqZbuR2VUDHTttghJTA5vhSTmCk1QosEfAG3tCP9VtatB7b6dNM8",
  "key4": "4bPGLHnvoL5N9gBy4e1hytt2SWjQDVkuRXJFMcqkYn3Dey6kvbcU9oDm9U11mgRZFUW2CCGAdeqgXSQdtb3V3RJ8",
  "key5": "2rptjJ4XPGWDN9vseLcSn1Tyex6NzCdwvqcdWUkw53fPM1DUHqJ1Gvt7c7KYxs9VTqBKYpm8WviKWcPL8SCPKQa2",
  "key6": "K1dhZkmAcpcymEyzmLP33HGBjRDLoa2L8AZe8X8Psv2CmwagFkcqD4oA1JtF8Ux3UrDDTwxXbrpzjsBFHgwYMbu",
  "key7": "4WzHYZWJ8FjSFfkYAYhFaqstz3n3vGCUH7z7dcdTqaMkgRvkNviqFT2ux2bE7HiBfxy8JJKeZg2oM4Y34tTGxaSR",
  "key8": "h25tpaMqJRYwsBoZAsu9p4FDUCi6msJDYgFUNktWdsB3WMd6NsHAWxKwFRJMXnRuH8pbbY1Z6tnQ66sLfV3aVzn",
  "key9": "5fo6zEvwxoFSiyAcM3wFfRsM5tU7zBFscbvrtfFXD2WEwcMWTsdyXkbuHZKp6e1kfaAiSVjXegkiuUg481cCb5v7",
  "key10": "3rdgazeUZUjqpgUpREzgANfA6FbP86xtMAF2uyd6DAXAtE94GzAfnMia92vJxPzoteRDgC7GCrPX2BjTbzdBLHsM",
  "key11": "52QgRLg2BLdni8RzYJ7NQbLYwczUeQw6TxuokuXz7CG2jSvrvsesuwtCy53hocrKPioRFPU6MtgFYNgxrMR3GTqx",
  "key12": "5Uzp8Ph9jVQZqzDcHZ6oyij5tM8YwePem1od3ULjXLkq3Wi2VdVu1kT2Y1xMvcbM5mjtritu5u6WSHFpG67jssGE",
  "key13": "qV8JLfpc6DJh24XfoGZB9Rh6bscKD1Nu5kTXPL9S1mXRW9SREX9i1nPLbEMXL8cAcnqDNxptLE6NVF8K2rB6M55",
  "key14": "22qiwmH4d8ErV3xD2toDmL2DFa6fay2ikJPkt8DYsgMPHPgrzd8AgyWj4VKwF9dv1QSjfPvDp5msNwPaSDkrDtpe",
  "key15": "5xgzcuAmg5m7UZpyh7dtdnjZK76b8FCsBAr5AP5KufhFHca5PQsyG7uAr9Y8Ueay3UW8x6ThrFt63Fz1RT4ZSsZH",
  "key16": "2jbbpa1LhdBr5gcLM26FUK7voqcqHDgpaHHuzFxcCYMpVJBckozu3Ne12RmexJebXkJN14CMf1Jwy9aExANGZp3G",
  "key17": "jgU5CTRrKvYeAh7bGoX34MDRBwrHtniQtwgNzgy6cZBr2zusdk5q5UnaTze8Z72L49gSQZgRg8r3eyEouyU92YE",
  "key18": "3JgQEwjVm6hGCEoCR1v22YyYKtyq6mQ1igNVm7vfmjjSUvedqzTdtJFXVChoZxXzLA5ohQE6xPXEe2QZsqMBk4Tk",
  "key19": "2ezfCaBW2tX8CK82erFJKr4qkbVGhiV45MWA14upb79SSMm6nr5iRqLj57qz1VN3iUjgHP3HiJtKxbzAnYQ3GAkT",
  "key20": "65XWRwz7yR9YtMRG4aJEWEcqVh4FhELHok9qM7HmiNY6ctyPzpn2eLLpQgGLsgwGFsfrFmZ7y4H85Yfx8reHbaDg",
  "key21": "5zjrWcPrnvAY8iDfirwKTkiSep84Fef3y6R76jajWAmt8GFXhFYQfPTQ7bm4Dpg5yAo2ZRrckG1jphdpAjcNsYHZ",
  "key22": "3eyJPtxdN5z4WwUt2AjKuLjzR2nSt5MXFujKRaaRcqLt1CZs7XKFgVbF3taZ5TtKt5RHBzxXy4iFPMfR82DbNGKn",
  "key23": "4FUPdZaTqrHC7J2cYDyTfBrGvGsV9nLMBr1WN13i3D611YVeuuXFwkPNReF6yyTAhaa69UroLm7TP1bmHSqb1y3A",
  "key24": "5qajbxjRzp6YQGsRJJVPFiZTyewcgMXa9fc6jW3muPsaMptkwNZMcNt7X2vTC2LGkAkamJvWE34fQ6VJL53oTeNX",
  "key25": "3KTKceCNoqV9yTB6Ypbj1Yh9XNsXnXQJhiRqQcDFt3MSMJBhxYzz23abeDNnNfXzKWcqH9JyzfQahqXCCoeeVJ5Y",
  "key26": "3QLvzxbgakSyYhN2keuBCdLYumdQfp2c2kX9udShUXwg5Bm9nSGsqtGsp7fgnbYneTJB9orBB8hatYqNevkgfgZP",
  "key27": "5XZcVskATLxY6HgjpGt7ePgrwiV2wFfqVsAPnrXydwFTMeaYoyUvBLA45c9m6TDK2QAFTTaCvoniAg2UykgddeDz",
  "key28": "UJRnfXP4G5r5h7pjUukt4thaK1oMXgfnSQ4869BFpQ5GhA725hBPcFMajbpV4meMQC3bCT6okS33vnSo49vioEw",
  "key29": "4XG6SVeG7LPhZ8B4attTMudz4Hde8FTuGcugBMSFaQ4FbQokMnPcuRCfERgBhN5pjMukKuCyLprj3dpEYHwoikzL",
  "key30": "5XBMTguGBEPjPWfbcnyCL5viVMLK1LNC2RCrumgfjt7osQ7d2kQZJikVZTpeD7HJrmzaQw31ME5Ymf6MH3THeg68",
  "key31": "5itXc3hQUczB3cJQ9NLoD5xeb4wds1vZL4RDoDqMBbZf8tgKKHXQ2Hrwk4vouLrtEwnxUe3rRVzPCjWFsPoUnjRz"
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
