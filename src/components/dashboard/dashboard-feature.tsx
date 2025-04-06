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
    "3PqzxfSV4ZZSivHRp8vFWGZTqTEDZuHKmPYsvKYsxxPSiJJrciKgszjv4TtZVgbovWVM42Ci728g6cXBWw19ADQC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mvip3h3wYWbwDadkXqvwy6jvtrTXad1wFBjssMMGcysBvjPBCZo6JAnCUkeZTkpbxki93NeLX3gWLLuk31CP29j",
  "key1": "4prdTpnPzHRFpwkNvwFjax7Tgmu6poSdzqhsm4vH1ZC2EieiagvvMnMThZzyryZ37Y3iyuQLdSK8JZYrr9mNjq6p",
  "key2": "4JS2qWebnCdh5fpD1dkJBAYGNfUPqF5DcnvS1TeZWxjxVDaLRBxwRfKtf8YSrSNqur5QE96Tqwrb9GrkKe9jhZRp",
  "key3": "2Yd7drumejDLs5VS6xrd45EVSy3ZK92HaX2d6FdPmHLwRnTN4TXmpwSaGNsnL4xVC2zkJpxanst6exP9bPQjxZmE",
  "key4": "39zjvnrkLLV8ntMwQiwCpDjyMhZWL4zpY5yyA3jkx7nTyj9A62dYsTPzVNAX6cCY6BaXZXCheLcDB3gjBQb1mdPT",
  "key5": "2ur5ah9dCAnqzqw4MWdidHHekZCz5Mayiywh9DyvJYY9qVPXA5MX9Mqc66QQhWKMmp4s8XLNjWkLZ3CJtBGhmsnd",
  "key6": "24qg9Rv25irn5fUks5JKcTwAPR5gSo8c4c4y2Z7cRoCMKRzg4sTGceMc4bbSWL1ERkML1uAvs77yYr6ab94DuSr6",
  "key7": "3jNhLCLWp9FnaScYAegNFEDDGQKE11cVwhxnFxPBYqLfPijVgy1zfgeMC7NJFTGSuyqvX8F2MGFGH5weHzAkjdHs",
  "key8": "3ynbXGtSTLr53Vu9sk6qu6Z6QZuxkutrmoB8Ft9GEcxD6oUttpdeZLpmwwB79N32whfUxnM9rhHS5vC2pYXZpyGx",
  "key9": "2TvJzJ1pw7LiTf4s43McAy4H7WbcZ3tcLj3teqra2v7xKmrn1XixMdM5mqJcetkzaeukn1gKRhPBWYmV1w4ZCXR",
  "key10": "4V1sEwFxDo3xLVr8AZhkm4WQwqGV2wjBnG38DUtWT9R6qYvpAmYidAoxvvDzdshFPUcEJoytH4XZdJyq2bprp3QP",
  "key11": "3nrh945aqrVJiavEo9uAES8TrM1SMV6FKiHsuC6VBkEG8pMBg97GN3CdiYC1eWMj6hiFjnYbHJqZLapaD85bFJEZ",
  "key12": "24rA2EpBcjM1dXedrQKJZMe86NM9TSWTbdT4xE1MayUd9D998MikXeAyR8k8qvQi4V88wJfcUacZa535PzPbsCZV",
  "key13": "2Jdr8nT4yysQaGg7PnYP3PduK9bDWbcfnWenMngwjHBtPnHsMSmySFvzVtAWcePpb4riRWC8Yx2o2b5WdCF8wBKC",
  "key14": "37XQEziTNXwUj7zGEVMXHyFr9fiHeW9hdfTs7uVj69CxhjdhuikdR2ThwiHXxqbCqV7msxZwxNjobhwYeZ3EMLzZ",
  "key15": "4ErJbGZCCzKq3gHhH7edpne6R89c8xAKY64Xam5iZeEJJauHSJauQLP3RDJL8Dowp8bUmiZFenNjYiKEExdHJx7p",
  "key16": "4X7A1MGYxwGXqV2Zt3txnNdDAR2iZuzmwTcp9MsT45zT58ctbF2hpWYTbF4cyz3yEWvrM6rz8mYQvH496r2AmJFn",
  "key17": "57YbKmNGTcPBn9KtgX3g1smvDhtqJYiFptj8s84V425EZiN1fKML9rnq85q34p9N55i6HJBF824uuceMSj5dbDSP",
  "key18": "2fVfdvDgspStn43YzRbRwbT4Jbo9Lv2YNCuwximrJWHk3wFZkWM9xUAkFRMKGWnx25qaKUfNrsWgfN58TpwpVx3Q",
  "key19": "4ft4m9SM4npHoazuNExA2wBDGGQX3Dw42ThQADGXM4c6DQedy4Z9h3gYy7XFRhp5WX4NPN5GDmVvFf1LdqEMwaUo",
  "key20": "3PYosX4DPMcczWeTSmuGfTcQzQNJ3okMRXqpGSsktvyGv8YwdXfXptdMhnVsPQkWq2z4uKE8UZsFvLiVuM41T8ZY",
  "key21": "61g1JifG3yL5bWLBhrLbLPssqLJKZU2osDJvAjB72BBySSAvqa4AeX8N2Nqq5vtdpmNtETMPHew1YNVc1DRoKrda",
  "key22": "5gvAtka6xtHrVZ7GVPKYxAhHNrMT5NRxN9BNGU4PdixFWApT4e1T77srbvdaK6kZRtbb8PKmMGXSNw48FNFDaoeL",
  "key23": "3ZLxPFRAzP6MaTgXQCnFSAH3GEGVDxoGhf3uGeButUrQ2FmGFYVdHPp7SQgn6EdeUQ6Bt8ypFKWVzmRK7ekXDwuG",
  "key24": "5vsJWwsnZjU79gMbbdGkfNh858PuWDrxAN9nBPUHu4Fyt1oEq3ZA6T36HkT99ifYzKhNbtPHMjFpoj8B17DuYDwy",
  "key25": "hM7J9Vcqn2Nn89hJyBh39hNF4zAvV5uLp8hLfDVXSPWnagaoXJXZcno6G7Z3r5xVp8YxbtEUaGBC5549Z79LcjB",
  "key26": "5D5aXrCrfFYp1miRTwP7E8FTzzgvShVB6iNnn72KUEtEpEjx4RxMRCYww9oF6NVtdAqFNTSqFVVUejeYyzGenyV7",
  "key27": "DiKKYpgxUuxBN9UEHebYvAZuryVJSphB2afRdBdLUdGjPXvw3QNYtq1sLzBt7uUPU84MBacvX93BGZXSinBxCxS",
  "key28": "2esyV5Fb9P6G7gBC3oKcJ7psJiijC6GQTZ4pehC6HJJ3NDDM6cKUvQXPU8sUHsJmdF4uCB9E48CLJBRPQZa3EJR2",
  "key29": "JhwEvEbEGUGGfC2jnsNTGVfFLiF3aTCN3cgx4pUG4mWFU2aMfGwFhqHrBgRYzE62bSz6qcfNkgZuQBbcjJKLJgB",
  "key30": "2UbKnnQNgVmwjQT64uUA1Kk6p5Z5BM3J8eKaeYjHfzAF13v1zT5VpcuiRmKNQvMcAvwWL3LDqo2GAFYsLdwYKbmz"
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
