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
    "2K4QzFukzietFHsC9KZA9cyJqAx4fdFZv9Mv3JPdBDFmixgdEyjYgqYuY641WzBKWmZh78uxbYbQ8ra8mmhKwEPL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24BrEiVigKN7Cb97e3ZKsChpodd5bjacQkVDEtiBXACwKffTaXiff9GU2BgCJ88ZeH5gbx9DFgM7nKi5uTQ9uWoF",
  "key1": "GX9Hc33Xr76Cq9k8aqMcJ4km1HkiDWg77Jk9mvsrmNW1uU3mkonuB9pmHJsDb2JQM3sDJzNMXx2eu4Sjpsgmorw",
  "key2": "2V856obJgWRBoTuG9p9fd2kxwNP3Y7JdWofwB96n5oCYXDbbkrrzwmCm3wfaYPK1QTQYRwF9KBZuneTFYL1yUqKY",
  "key3": "349vPc2cGhQSCUGSoreX7mtmmBqvo4BSavj5V3hXpzq4K92H9QANQLdtFZSc6MzwjsB9B44t2SL5rvHkE2ysb42F",
  "key4": "2cbyQYaWCcEvzzLkPg7anFAGPNJt4PMTbNQGPLpjFTahGR1GysaeewqcEkdKN3mx5LydYfBtatjXjvyUQvdKjgKF",
  "key5": "4v56AnKKzupzfQfZzFgcfJD2huMShZNZPqUZoEDtBvoH8jnz4cxwr9Xu1RFaeVQLFuyyYUu9nujTgueqiiAzMb91",
  "key6": "EM8PNeEXstV3uQdFz2Z8Uk5gJBkt5obXhFkbDbeuhrSmD6SDaTdwGS5oz2vPSWjbcnJ1orRhNMEtQCrbB6xC3P4",
  "key7": "2aJJne8UveghVenMUdgyFwDVKWPcwbppyTY8dxvsqw1ca3uhBTjizh7ADoSvvXSoiMRYvvLeUJUYFXH31w8zHVh7",
  "key8": "3SHKXtkXFmqVzQW5hzfBrKYNDnfXKW3CJXfhNw6eTc3MGeYx5sx9aKZegUNTjqzuGnbyM4YxzYnqWcL4Esp9qyZL",
  "key9": "5opysRL9n1VTsHMrPMark7ip2xZ7R22fwZegui6MCAsGKH6TYfMrT2q6S2TS6Fbf4f3bpgjCvYsgyaxoxXphe4tp",
  "key10": "2ermfUxZMXCCwEuvJ6EbirjAi9UFTSturgQhHdMdDALeTQWkRQ3tsfXAK3JYJykUFJ7qD63QqioqZgdZVimwGc7h",
  "key11": "3j5cdz4y1hE5ZEmwLyYZLbnc7rCpZr44E1EmjVvpzzF27ifPtvAKnxrbsSQJWLQ5oh7Xp4ykK1irah8BNk8oxp3P",
  "key12": "5s3wGqRkDZuHNmb5YcLLHxLCo27JUcrRhHcP5nXBV8JoawQ5JjqccvbvYK4kbdu27m47drdL9FvQA98zcLSit3kH",
  "key13": "2Ln88324BYe19pjZKKZAQv8KsGQcwAoPUVnqZ5nd7JZ2bqmxTLACZWSfyMLCjvWqDVeiYCctQe8ne86ogzwLo8Xa",
  "key14": "3YbcTx3w1dpDjHd4ieeVjQJHTdksb5EXF96ujJAPqmH3tjL6JAJDs6MPehwzaJyMeiFuvgNea3GSFjJ1KEJrCwo7",
  "key15": "5VdtYCVvfv4yxRAkzqkxTCX9cTAikE5ZvMQauRfV6PqReW4jvNhd9CFKTyUDKGUuJfJL2dJfjjdQ81nttDZPyHTs",
  "key16": "3aTcXDF64tuQcZad6YZiY4LZezjijRimB9tbg4mqDYA2xygYMkGJAKCZo3T2v4CHvBB7idw4ydq7A5wvJzsxfd1g",
  "key17": "3kzUaEtDC8vToHKS7sHP5DCYzX5cTLMKvRStJQWAhW7DpodjHtca4LMVsDmG9ys5Ss7crX2o1ctarFEFQm3zjBhb",
  "key18": "5RRHCg44fhf6ihG8pADnBNFH6CwbgY1rwcTA6En1aMhepAZJQxxJ2PHsMhwC3wtdkBe7DAwcrZBXPwpTpvUPpPPp",
  "key19": "3BH3Nn11bhCVthcX5DFFPfHvDkT6pGG6kfnZ9kQxEzSmxCFiRftPRieDzvkR1sj82KRjjCr8JUavnujNEJWaSvyS",
  "key20": "41f6jwHBXpV6EX23Dj37314p2AXHmskERMr8CJY37sduLvPS9iTJ5Z9avwUBUNmKsUywqZizPJk1E53BComPxZSN",
  "key21": "41E7cx3aZ9DedPmLhpJBzEXzHYqzRtkNsWRAiCR8exB4VpePiMyD9WiXbzo4NQZfuyArwsGYSChV4DSm7fjDWRMi",
  "key22": "647mofYak7cYU7VXMKkJTEUH1tCxD2Y99a2kMhvDcxSuYKwhzaYYfw97cqL2x3ydxZAcQF3JXBX7koMAJ9Xpn3pN",
  "key23": "3zSyPbcagkq838hgE7m3fukUvvMWuzCfqi5CkChkQFjCXaD7h4fYXwfN49wJxttk2iGCUS6FLteCD4uJLePpFWRG",
  "key24": "3no54Lbw864MngVZk8CuZzzyHUW4zMKLVtmi495wbxCNdYr9sYkcN6zXawZS7kePztPboqjZDGrXbp53r2BMDeMy",
  "key25": "UD7DRwTcd8aL3Gs54wjT4u7bp1SrE12zbu5aE2yvbDovmo4bYJUZZFt7vf3HeLmbjrAX9TZtjPwwk3iCiV5Mmoa",
  "key26": "2tbit1mc5nJdRHfvrQrD32h9WGHeHhYFktPDMzsh3et2aXKZCsXiZyjDjA6A8xsEmffw8uLbLzc9GrxHLJK8nson"
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
