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
    "54ZGcMh7RYpydD6F6CqCpgACiimZcPznrW6qBoXYvRpEqX2x97bHqBHe3xepJ9bkRcpBNCNxadYTGWvS8JHzJbz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gyYr6akwgAQRmLuPrquBXg4k87zMXPyZHMmusHYsVFSCFWn5yvKn57pDMgG3bVT2eLgWY2DS4gMvHzmuMeaoYHo",
  "key1": "3AFc6YoFx85QHpkFN2azLjC6LvrmmoWTnKL4KSvdojTr1pavk9p3UwdvrJBLkGrjBABUZARtpjXc7VSG9Tmr8bxK",
  "key2": "2DfdKPvqBHE5MPT8XQJ8f57ATaaG5ssjLgum1PQvLMMXmfQYBtNAXUYKXjr885DZ6s6y48JnNXJ5f3AjSRahvXks",
  "key3": "2DVZqeBz9c9hMtj4F2bvvbfoYEzr2XqfPeSgZbsNs5CfkR9UEXnTE6DUoWQCJfqgpZYSH4S862Qm8cttKnS7g6kM",
  "key4": "5feKmE3kbNRv7SBhazx7u11gGc3EzPRT5D6aStZav2Q3CWdkn8NgzajSY8raEC7MUoHk1oNGiqQKbDiQYnWis3eX",
  "key5": "2ncQQVzZaN5zJtiZYZFhsbkQ3uKLtUMBRWv4i7PQ4741VAYZR4BTuYY7ANrc87EEGWrFzdCu6WPKiQp2qYsEU3hi",
  "key6": "3SDELa9FwphrkDd5fKsFtWN8zoEoFNH8izAED8e22YAhLUWKZyCMYDXJmJWPfhACbthM3s12sGTE8CPzszmNKH7E",
  "key7": "oA42GoMiFDnGrr6RekTqaE1GhcHWw5nqXSu751AfhDt8Wwxkgu8C5tHejQaZFisbHXzqoUdfR2CnuYVBAAcjKeJ",
  "key8": "4tbhvYKNe2TsG4i66NvxWarCgJiowcJAJx3JDDxgGNVHm52EPovDTB5uk9vACrvAB1by9DfJVh6AQmt4Hs78Ds8m",
  "key9": "24Ts38r1WbmMFjeUPEdqjj99t9WcHYiNfY7VeJpLvJzhKHeGE3Yr5d44naFWHgaPKtHqyHAF1bRqNNr5LWDvZVei",
  "key10": "3N2wvu1yStQswBwyMvQCNwqfLP5ipAyUsBDfXcvui3SYRtHnvwNVBmAfgDfeZkcVkWPMm1JoMtvvmhzwjWMXtkeE",
  "key11": "DZB6ti3xHfNkSFeWKKMdmetLHULTRmP8yAiPmpXTD5nthKBwwmHEtN93djCTFTJPESSyBKESXjjYqVoHeyhsoig",
  "key12": "4XJfvCrinavUp9WLu45BxYtNf89cbN2mHC31nHaNJuHrhRWyAGvPYsDCQzLjxgEmG2j7zmVQbWAMemP699mqBgXF",
  "key13": "5KmLpb2Zk5CptgiKRULWQ5de2aviqGjBNW136cz6Q9soj2mY9qVmQ4MnXL3mehZtUEbJY1VbwAfb74gpaWU6wmou",
  "key14": "62XEBTHFaBwxFRvy7Lgn4KFT8prbNDjh8iwNHC83VqTX7wAgLhk4UYh8VfumQyxRNhbPEyRj8tbAgtXo9SoDwXua",
  "key15": "4zLVYVQY9rvtxPjq9J5Xew8FGuopRAUtR1kq3hUS18F2PFUGEGLvWwN2qWfyNiauPYLmrLchDtTLTp18E3uqEFsD",
  "key16": "3qH4awRqV2WakR6rRWgXzDV5LefRuoDG3dFmonm5MwTjqpL3ETYdgL5sVhzqm8EkvdwZzCnjKibGp7NApgs6gF2p",
  "key17": "3umWwizhPzLG6W61gUjN5XSp7x4122u9KJKXYQ1HoWU9W5kEC4wF6E1GRodnzq4BX7LpnPoJFxj6qv7tcgGkqK9r",
  "key18": "2FGfe4RixZRWUbyg18RemuiDBPAaTgLKPdzUeDEAbKd2GDAWQG2X7DfjNJM1tax7syEPgpKyydU7hGWvbVjqJ4bH",
  "key19": "5LEmUBxFzpz64J7dHMJHb2FbYbLZh4n5j3rkpepfQfKKLfrvSXyqypzHFqbR99hvBeC9ntuE4xvxTqsSzjVQPEgR",
  "key20": "3GYxfosnQAZBi7GWXxzBaYK12gX3GbJ1Hpwg7NnSiYjUXq5oXdz62XcpvseTvVeA3hGfXagEsNcWx8APqMZGQBgb",
  "key21": "o7MTVgWjBFeygqt3CkM6KkKSCXEtS22jvPxKFFKcC1pmVnaLyQjW8pGFuhQWU6FiYtr9NNGAxdRTqHuTTqojbFR",
  "key22": "2MfXsbgCt8MVUNbDJgWHE1PbYxG7Km19uFYYbBmPZ7YmS95yesp7K2Su1rUSqb2yCgPEVnY5v7LD1Re12FRmKgZT",
  "key23": "47TkRUaUa5PvCfPxaZ2jKS5zGyFGJNQcu5ETWh1yWCcSr6rJpW4V4USGBzHaNyws3b81LLJVdzsKfTrEwrqCCC6v",
  "key24": "bcNbPD6i7PDgJymsazcrUkYdxprXGTwvLioLG4MDuAZaUjNHjKaquexYzMHkqAnWCvp46KFte8Y7kLmweUEPK3o",
  "key25": "5HdtXGskciGnAZey9xB3v45NvV85xqSNim2PgCKWK94EbApBQLmKwFnTWffEh4WXYRF7SY2iY1LKTL8mY8nBpvDT",
  "key26": "zYGsD5FxNhPbomahxvnvv4qFfAsrm5P8hYKpKFQrSe2eoAowXvZxj7HVpSPUrShu2FGTrQGEFPAXiydyKMrdhaF",
  "key27": "2ME56iCgV3QTjg68CxawhzVDiWditfcNay2kTMHyKFnSFtCAwEVMJJAc54gDyPLFK5J47tcZGsrsZdj9eKSzPtJU",
  "key28": "5cG4dix3zCtvi6M4oazadwJcVfYtN19rpMAK77WRJiHNcpYpUMV2DQeKJruVkXfX915ihJEStFT6cKLx6atTENJx",
  "key29": "5GVuKfNcF18iK3gbfB1YqUCDur6U4XEqLoMwF72Q9oRxZ1VZWDvLKPG3dJhpp5ipf589w5waeNQmwK39GkK7awyT",
  "key30": "2vxCDN99e5Zheyp8AGxxCegXouGRxVVjcAVAtPzXLARgwKySXvf15rYW7vw1ftS59J8h5aQsMLxMmpa4P9GwtZRd",
  "key31": "4xoJvMwdmEkKFmyLYMn14V8Ukxs4Xnru5UZmYNGiZU9rnpxvDLvLDdF17zMzVm4CdosoBKacxzkuAFZgXgfg3bxr",
  "key32": "sbcSMQJB3wKW2vuj1a8MXVu9skiVHb8HGvMarJvB3TGwdLxSA7WgikDg3AUzpMyCp9CyPifL3a637UNi5VpiMB5",
  "key33": "XJj1arJChRaxCwv7PvVFigjSVW34bbb2UizmSx9EZdpEainkwNTtuDtmmnTeUon7qD6XhYA5xSsXmRn84HskxxE"
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
