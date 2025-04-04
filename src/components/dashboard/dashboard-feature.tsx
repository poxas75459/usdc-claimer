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
    "YcPa4YF4FWZdNFkagMJL1uZt5fDkCBVp3uvJS8igwcNkdGW8DYrquAZdUaf9FPHBFmNmAD2mv64hx6NkpaJtUVD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qArQQUkWbxbBA1N1ZXMuvP88bG42GTSvExVgJbQK8cUSuxQJxrXuZjuXDYFxkJVLsu89Cg5MzNNT7C3fquCVwjp",
  "key1": "4pJ1dbaQwiVYM8LAcgVwmRPuWrWJL38sBwpRNxdggWGF4TXeJgX6ZZ5MFYHns4axi58xV5iQJ7kgEn3r2bYNZJwk",
  "key2": "andRr9f75rQj9KRYF8tP1hUuPHbH5DzwYHGYWzssiWdjJTJTxnz626TDQJXnYCFPBNQdu1dmTXKv1NzA2BxURDM",
  "key3": "2KW1WVE5p2uBYB6FqaUiaBUPBZ6FH4hQmSvMjbfeK3hJFjZT3KjwViYG3ax1yhFoDk9mMByDZx8r69AGW5tgz9eb",
  "key4": "36JVFRFMSQsHp2ScUgPaawuPpQCMLa77vRLAqvS6C4dBTafSG2WK3oauZ2pDCeTkbYSGbgPJYxyHQMg6qKxXXZAT",
  "key5": "2DxW6Npz4SwRVXeyzTetaRgf8UQ2r6qrwB7u5frNjyWxen9hBRpgDbMW6E8byQS5XHKHm2SiNMHusoDSTnykXmad",
  "key6": "2BYo8ZkA922mD1aSiSkzGuYVcRJkTVJFUVjsHk5oPuaz5X8MesrDoU8z8p98M4qJ8fEJo9CanaF68tCbmitJLWaz",
  "key7": "57j5RFdSuzZvBnUhnB3Bn3jHss8PWYBNfRy6YLLAhMt7oYLA1GsgSz9BBeinmdjHiwwdcpvcwpR5rAPdWNwhMaUy",
  "key8": "45TMAewDtpnLRPLqWAxo6bCHSUsDdKcYeiGSMoH9G3aSnj7ZxahQCipLTFUWX9eYmbvEkYgRrJPNxNEyvyk4Qqfa",
  "key9": "4UuyRjxTdGtR2zaLyyMcAnEmWykFhYY5yWew2D5AGMsxME2DxpmfSMh4DrhkfSn5qNo4kx2XsNY9TAakPS9zuBXk",
  "key10": "2wcZ12SEFWBEh8eQg5v4Unwv42iq9fAmfVkkkR1eqGRNRN8CvW38AShCdrcYTdMyqS2ETwYnwREog1Fp9uZmDj67",
  "key11": "4H9n9G4xPG4RMyzVedkdJxSbpAHcyv4JPvGbtKfFSdkA581DnYsjv64Rffhbp8ZRqQ7dCHSd8G8L26dhG1kFWs6Z",
  "key12": "4mj7B6W9uJgRGMk6tSg2RYwebsSBko5axwTgvzQjCViARby937qeeVGXpXtjmJLZvUcdgoc8Xe1ZYi6ZmNJKed95",
  "key13": "4vam9Jyfd4SWQJjiyCXuADtr976TV92wVzGGAn3TX4YDxxWcVA16ZgYUm1MXvDDjdAw4FYBQhavuuyrC6HRehtot",
  "key14": "2NJC4zsxMxoiumwGmf9ni7bJtU75L9YaoCP6w2TgZ1qzNQ6ZMsgvk8EfQ16qjjjuaJkqKhJXc1rDQHo7LMhzf7jc",
  "key15": "5rGz7n7tCN64Ezp7EGmqxdoDuyyLTBFcvgZY8YhpSKf78dA4dnS8UnE2eUu3AUasVbf4ahbGtM4aDYTno7JEagSG",
  "key16": "3AnmFUexynwZrr8ouxvjcxkXyGkLoMkKUS4fV8ooyMh2emQvwUWinFkvMAXapHK2ckk1o9x7C3KGigHMb6Yhf1p2",
  "key17": "2U1jN1YsnJxkRLLYphT4mM6kLP4Avrh23PKvKxCQhSiWSzUznFKqRr7L1Gy7CzsLVbmLyrTEfPgAmzL41KPeSCsz",
  "key18": "5LFeiue3wax2aeKC2e3ccYaJYWuTroeCadCN2FBs4pzY5PUVhQaougwTGWSRN6hLYRnVi9CMvxF8WYDpGgtmshar",
  "key19": "2BMvcDZavY83y1N5wKotuBRRSZYqM9xTS2AneJ8dXDkugMAU1URuPAx9ovWRKZGB9cj3NiEWj5tUmWPo4wpJCwQJ",
  "key20": "FgHtwjEtYAwnwnDuCzFwipsMsiLytEAiMp5mKVr4yY36fvsZrfjmeT6FNDAkPt3dDhesHkiZzVqPaU7LGwodwTM",
  "key21": "3itRVfmH6dPphhq1n9USMnLpLVmPCpBYZDxUWhRpLhKW3rKNUjP2ovfubQ9bHXY9cziLGLCEtKoduwz118QWjVbR",
  "key22": "29UsThvGMj7gYkosz32TvCLWZfBrVeWkhUsn7xrh3mv1tANmuGXbYtZgLRTbNLZS2hESW9xfpYnJ24885KF9zj2z",
  "key23": "3CdD64nyrNZpG968npRHieaun1rRVkEZCkr9AE1hBTkKy4Zgcx4Bz6Moqofnw7KQsm8nHSUaBXzJRkJqsir9C7gC",
  "key24": "3Uabko4X8hX6QwErXAwQSGHUzRmK6boWAprPepNep5WDGpknYf47qVSKLRURsmstW2ULX3cNUVER2X1kfREaar8",
  "key25": "2hPqZgZw6pMA3fSqaEdr2T3hgB4QuBrGhfFzFdy6URUknuM55atvK518VkcrCumYHcBScsCzpZf5DJejPfu3LUi3",
  "key26": "28PFLWbkQnUhtDprGEE9xrxqwGupSLfHonunvuAgKpHVEo3b155UHkN6wUpaiPF2gBpfEvwzaxYZp4rMM9A3jTuv",
  "key27": "jCc7NDAFv3PvQZdGgU3MTkRtCafC45FkLssTbfL6VUqTJ2wChuRoHk1oKp9Y1AQZAKTgkdokhEK55ewmBNLFitF",
  "key28": "5wZ7vRaYeU1oYqdHFuFEhcRQ8gxcqBb8bDzW8Ti4aaoZrfTEtT8jAhjc43Ge1kJZwPsQ9hpztdoX9YX3gBSp7hhT",
  "key29": "3s7hxLcKpcQu8coiRQDN3FhRdWz63Sk8TwGuBTeZD54hdskdr232PhvmD9aPBuk7TQGzp1yGSRP4siMxKPv9c4jY",
  "key30": "1uAaW4QCpjkuc39WYsmU1oXrebqir3n5YQd3SMEMoNRffphUGrZgwR1PDnYgaDqVZTiA2cs49KAQBdqWyTQEPre"
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
