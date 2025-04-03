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
    "5CFxBZ9nfA1C9XNGGeJicpFSwExH8hc7MEXzzLpqpq4RQ4YN9P6PCrJBtRYxAug8HovxGgPgL7WK2TvuNNHjmeXe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tJq6XJKeHSFNikPHFZmuMZ7vycmBnaP8JkvL2iJJzsghsksGn2YRDLGQctPAXdraievTxtJyGbiKRaHS4ka6EdU",
  "key1": "3eeZMptTTWgUaAut3kWk4o2bGP2tZxtwzexXwopTcvey7TR475SN4dcXSN8rZbhFZZDCCCcSXbJEJpkGD18Jn1fJ",
  "key2": "4gC6YRZkaU1btyEaHHLgowRJVXLnZkxqne2dcbkUYrA47q22vYTejKC8Az7zd65GMpp3JHfo4ZiRA2whPHcSJedJ",
  "key3": "4WFkerNMMXe4Y3brSwS6YVSQfEnvNkbZKGWKRbnw3MxH1zvZAtu41rj64AkWj8rjSCuw5Me4AJghQZP4kLZvzB5q",
  "key4": "3UEd4jg4r9wzDyWi9ghz6PSM51ez2tNvrpQNqANopvCxdXSXBCxdaUzBJJmS1VEF8Pw1zMQmHaPN5RvXqjGBM6f",
  "key5": "2nYHerKr6qAVtHhEL8U2JbJJN2wz8ycyHUY1VzktSDSDxGeJMW8QW8yw29KsyFcQPU51WSZTVxX3jmbio298DQkg",
  "key6": "4hUZDgJ3p8nUdyaVc2eYEVkq8ar8Q6HZztBnxL63D7REC6CrQe3QxLZTc34GrweNDCsQhnk2cZJCcmPXi1wneuDL",
  "key7": "2WPR49gd9HsB9HWHuYKo12y3zSnyKu8djEvgzfiydS1FA4pX3h4HEm3eDM8uaXmSbDexeR9gApEHwSBfKtFo2ujN",
  "key8": "DbgEkXyoe1JnwJ5eF1HDCo8y7utXqxQiTofuZi6t85PH2ofQDz4VX7WE2jwy7Xi2hDmsiuAwzCDpFG4MbUpNGgC",
  "key9": "4TqzY8zGuSBAjfkB1XxskS1sb4VmKe8jgzfQ82Unnw9spGSns5GPU27cEhb6iTEmzrQa4VcQaqYrFr1APWoUkZKj",
  "key10": "3RUnr4imqij2BZF9euKxdi5CqexLzgnCYZPTuzTZyyFb1oHPzr7adBJL4ts6CGKi7gvqkmaWfxGhLghaau68PHKy",
  "key11": "3S6DER5rfNbdtuZLQPZGn7V1GkRVQJHBJJoYx9BCc7zXQek8oqA37DJRpY2rxuEC9XuNQSHuqevWXxULdseZvwGB",
  "key12": "3bwC47zVjRxSxcHpmjkikQB3zgpz5yeSAPViFU7tgzrKpvYnoCcXWykrDyB4wp2pSrsnYHAc6SVqRo58A5bauh3M",
  "key13": "cvRjg79JZ68C2ujFk5hqG6XBUo4D81sApSXKvmpK8EoaCFd9BYqYM9pDDxmAvge6GBFwnv4Atajy4rs83UwN2WM",
  "key14": "5nKdiG9zTrpXDA1Hn5wXtZneghPWNw2citt27LSj5s7SvJZ8qmrAhP8rhjGsbQqm52Rz4TpXw1fTKYKvz4aLwvXe",
  "key15": "3wAuijVEvTH9qbt81eUU57kYJQVErSkW5F5xYG4f4ANqgVzmEZrX6tgZ9K3JQH2iMLrEU5rHioBrbE86zm4Go5BR",
  "key16": "3rCpBpRwYP3cnmag18jQH7MqtNL2HGHtPQXsczFHpsydiFRMZkrJycAkwQqZ4P1qNPne65kHLVpwGpMuQsQnNjSd",
  "key17": "Uspj5ungofnXt5fmo1sTBUoQu2dsiUJx17c8PxzwCiNs6EUQi3q9LPfM1qUxFfE1jVWitChBpyozZLFrjn6hgL7",
  "key18": "5tGwHMHQMHj8TWKQRykU6hSHXuD74ZvV8E32KimwL8d9QiGLAdv4g2tMfWu1Qo64Qam1JoJ9xWR3M64AVA2mNtW9",
  "key19": "38gNqeAAjiDrvnTFJ2az5LmcZiMSh1Tqxz4YLzXYfRYTBRyZJcMvBsJDM1kTdHeZKgcVPiLjHk5pFNXJRz6mLHJb",
  "key20": "52bPbeRmvyEiJaMcFK5vSWi5hTy9kAe1cB9SgjMHj1rQ1VDxSVLRKotKQrYfVMSMzF8u2S6Bq4SeC6PH2tMZBRpZ",
  "key21": "5AP6Cyx921xQpX6jYrLbrvNjnNDwfrFWhJdhHnS63CAREXr5DeGPZCheF7Jz4MoLrSUrLfDChNTFTDe6EZ2sPVDe",
  "key22": "4Tjm9qFc2r48KsqMAqsLKJwpshT7TVHxcMCPvya1JpMAPY98g1ZyoPdU9iNApZkXc5f3wQLs2D8NuSLRufVTThB2",
  "key23": "cGF8ZdiS6ksL5oymhLsjgyhpgSCZZiwEZWJiaJuYn7FznVFgsauW4u67xHy5eVdH8ohgtC4ktaMXyJF1tfMNmYC",
  "key24": "2TLkciaZbsJENKi6SZALAXQUwVqSQ27q6Rrofmago9AXagZPKiTGJdxKSSQr7vB4a1LEDRyghUHvMCCzRHR73nxE",
  "key25": "4QB79BdwBpmJSPHKrRRjRdjJ7ki43jQpeG2gaj6iKoqW4L7VJEe6yhSG8wKrEidA75rooQTEBe2SDCAxvoykXJfm",
  "key26": "57zeQ2LFGboZZ2rJat2StiA3DPuXHsSQKvyENwNKZq8Z6AXNr724vYDxAWXHRxCpbbX3U3hzzNLUq5nPC8sgPbi4"
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
