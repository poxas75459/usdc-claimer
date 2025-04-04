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
    "4NiskRHN5M4esfzR93dRceCRgdA5MVKFHwgKUMEgLxbz6RYo8ArKhWR2mJ6zsaxZ85qzwxvj7deuWuUa5HrKqLEb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "q3nCnSeskimTT2kT1D8Hu7CRq9E6ZRMhXSiUjzvxASw5geotq9kFyLiBUuYK9kr6zpmssARCe6LJ4knFgQViH8T",
  "key1": "R6d7WaPy556pVQ6zQPiSS8oihCsPBMyUWwJFe2ULkj3nnxxAUY1f4kjhbqcC6zYtdB7s87KJzCFFP7Rnamc36Cg",
  "key2": "45T9pbrVbGu1QvAHddtqJXyucMqinosDx1dMMrDuqPRLkZPrgQuDEmMB1MLgUJ64NeaSxo88nDFRAhW2v5jueoRm",
  "key3": "5ETvgs8gPvDGGiadRDTDzEAFskA6d3QAApQDd4BaDNmxTZmMNqvFrVgwjNK3vCAfvnqkKYZgxNTx4C7TLsh6EVYX",
  "key4": "3sf877Y87sSF5SvB6oLGtYMcqresGudVJLRVShX5u2khCtdFPbBfR6RJGoeFP7Tv7LhwNy2rm2qKdf8dWVhwTDAt",
  "key5": "2wv7W7i7VmaxNKr4RJNgReNYJPDLaofkRx9cW3oWxWcGWvNJ4ZSHMFQ4VFVffiErBMnFrtjouBdyLeCjZpV91FZa",
  "key6": "22PYA94FQ7VFEx7Dx8s24W23ojrdyqfiHeghn2bopdfqdbxzg6tagjE72vfrsFgDkyGURsAhZeWCUzAg5DaJWKbz",
  "key7": "3xE3ZhQTriCU735ct6YUJDny3fNTiS729X8WRmZedeUxMXQ1T3irixGsHNTt1Ly4z5y7EM4Hmejk1JevU6bz6ghD",
  "key8": "2SXCNC3TRQxnWhUUjwQpnvEpGN5AULXsewa6wGjGExPzmt82ypQd3KcKkp6NwrCuK1NLFfYKDxdT6rdPd3uANbCD",
  "key9": "4iWTRAMu63BDE2cJv5z6Dcw3DP41eHCSDG9zzY4yEaxETBhTcQVCvstE6kHoFHJaihgNjXeKF9BgJ4buUZqjRSZN",
  "key10": "4sQayHGCHeC4fuLR8F54rD18w4GcTmYK4zwZpmcWLMEUAwHGCVsRhtvUjmnCmahmGMsU3vezbcQzvRHpL9XMDH6a",
  "key11": "4MDRzTtEE8HvuWEd8Xn9wtWq3VY9YAgsaxxSo1BMueni7pyCgKzMDHNCqhJqRFkBtv14U9urZotCUu7PpMsu62Uf",
  "key12": "5S9gyBuD779ZQznXDkcCRxoyG6P6WziZ4NXVPXQ6Q4HMMBz5R7rQavGKFmEh9w275jsWCZBasEuxipxQCgwChPyF",
  "key13": "Cu1qHJ8H7isYL5fa6MiPDjPbYqT2VZzmvsEf4eMmQASTFAJGjxSXqMHG9hxG4U9n45Nz6tXSTap27ksq9ptxFfA",
  "key14": "5ixbKowtfq2goZeCCNnbp5wZaRLhc7adSXpMqejzFtebbACM6bctimPAquBLzmXAxSfBBi9fJn6wZCEZN4AxkZ2W",
  "key15": "3Mp4jLkJ3bHaEiyXc4HPLReewztLBiogp5UoHQsNrqd2odAhYepQi7E5N8UuWmBxwBTPu1yjCKGX7uTbbYKgTRgT",
  "key16": "3LRsi5TsJn72L7uhrTimaaaGfgNaD6P2uVhSa3bfjd3MgZrFxxMdRBPqeMecUrhm8aZf8tj8z6gnxjNE1DQXmCm3",
  "key17": "3HJdQW9mbcu4mXkNoVkAnFDvydVBK8sb6Q1gNuTPW6FDCwtrR2XrUpRAbciH3zT5YiMQiCU5rxmN83KcriMpagYW",
  "key18": "46umtu6qos2paHtoRs2z2KWoxFe6sojT6dw3iGTcoEYFn3TzikQuUotmv2qUGqW9cRCCqxR3XsLjid5gcyghMU5u",
  "key19": "2ooCS4n3SSCfNEC1NJXdPC4MbetvY6o2ud5pPMWz2UjKQq4JVzdYp1WzMnG7C8EpxiMkYc5uuP1NzQA8BCEmZAVu",
  "key20": "5EnGZwAMmsJKW7VEaSZcQHoAM8KzAZAxKr6nGtDtLyM3MNVf1Q4xYMknQtCPMgUFZq9d55Pq5RVTXnQ4wNSXWCo9",
  "key21": "2R9LmxYJpEw7C4yMAtmyY4iXzxtwsm5vrxsTvtySvaaUvxQc3nbWXaBqH96bgGfdG9DPqcNfDjQbRL2PhsazMQUz",
  "key22": "5bRhLaQCQJYPs3rkB13B2BF7kS7o9oykzzYMBFcwB2pFrj7Jhw6RukUymsfrZMs185B7QCoKjWw89pc4p8hiWRtb",
  "key23": "51M4bDxmyEUipf1pKoTopWGUyV5meePkAJRMTEd5WvR1y5HHWgv6cMgTn7g9bPPxfchoA9ufjS5MDPNmYK51vPK7",
  "key24": "Ru3DHTstK1MTPWyNw1aEogUbYMMr9nXKKrcthKYVjUSPdyjZggekvohvZtRR9UrvDHc9joAkbpBV7v6dJGM9gjW",
  "key25": "UgoRQoowAnU8M1UAVqxsTVzJcTboDrxhKKFY5J3ezrnNT9Gkz7S9ZivfwixRkc3BvuA2Cn45kVzmeeLfRDwtsq5",
  "key26": "5ZVguWRxmQ2Mp2Xwq98mErzUnuqD7jvXZ9NxmiNJF2aUTfQc9JEunKDjfvG8Qtms4a3YuAVcjFkZjcBs5YxDbjhG",
  "key27": "2BGrgQLmdvHZF4Zz4Xi663eNEtE7eNY34pSCLmXSMpT9VbRn9Gp7ENdZ8ZdT54pTmwrQYLho2e7Jzy9bRp1RxoEX"
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
