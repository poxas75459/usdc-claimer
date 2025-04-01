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
    "5HdaXkE63hiEpwASAbsdMYg19Av7BzqaXTqc9TnPZqB1HhJXCyxGMuNKeMRbEPqUERAYLk3upTLvH34VF4Eee1Fv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2W8Ysaodg6nc61aAfsmRk9eY4VodsUReNMyJuRL9UQtkSwcP7b74RQQTngyEfkxF7SBU7vcrJ6jJai2tU8c9Ghq1",
  "key1": "2E16oXBRxxT2V2PArNhGYaMaauDjYSDshpvF5BoXoCG1gn1pqNo63cNJ8xSbC1NmcAjbPsMGR4HCx73mywikHXPS",
  "key2": "4fTMBmsvof2vPi2U8rDi7o6EvvHHDmikXdabQ2dcQiMZjXuSPd4CRYg1ZyMFMFTvQzr3i8nmpdKKu3FtRByYALC",
  "key3": "39xPg7QsbDbAZZDgCXFC5NFDZhRTLuxjPTmJ2z7jctvsYLUuyCi73FgmP9FiH6WqJzfUbcbqTosKW1CrzH92cZH5",
  "key4": "31aQDcHmQ58bfu6uhZV6zD8N6C4mRi26zoQ9g4KkkcSNfrzFHSjuaqSRzTZiWSkaqyjoMxMeGKVXLJV18d7p3Ez3",
  "key5": "kbvWpnhpGxbSvacPNUEVVHZtW8wvfTKoC6Vz4JhQc3NQbg75qAuAbntvQJk1qLgvUTUGBFH3R3jksSBvE5R2WDJ",
  "key6": "4757FF8SudExLVENPoLHhnSxosjBQL4v3uddMTuHSbspHMoscTbQtwBNygPQgg8APHwrgyW7BNWxRmUQcJJ8B4QB",
  "key7": "UpPT6vRohawN328fmX3qAFf1WkL1r7f7BbYGasmEk7WaorHhYzUSHbbKWa7EntwkQxExekd4y5DfW2MxJ5owY89",
  "key8": "4zpw8rcamTEhM3r8U8QyRxynARCDRccZ2mVkdwzvZwbEBWi9WucdKKgtNCf6rbmRweowDfza13GGzub6F7nJcJQa",
  "key9": "KfVz6jPNJtYpiCxrJ7rgxAzrgbv3RYTLWAGUAkyJk1o9s9sktafKLQNazEHEtAa2RcgD1iXCLkWLUcctA5VuzXB",
  "key10": "5NNvqVw1LazXFgNrkednNdroqqkpFBfhhwzCRwLSDAYxpCydkkkQrKL5tuPMT5rinpqt7MJrJQf9x5qUTieRB4DW",
  "key11": "41jZLi3CzxaUN8jYSozo6SWwxYikcnxQrQWL8RrUDqmuWs3uYjPBsNVn29xKMrs3fxTeNbDJ9tX2KeBZqdpSD15j",
  "key12": "5kc7Udv2gp9VjbspxfSu7tZNuSMgxfqQ8jdxYLaYMuZpBorKZxXoetWs5b9tNo8qSkSmkf7wTsAbVbuMg4RkXJ7R",
  "key13": "4thBgBUQkPdFpFdZmYCPhYJu1aYqBQoKY24wxjBzeeRvbWrAuVMDhgKTL6Uv41vaKFSAPga1pbi2c3iKFtJwt4yL",
  "key14": "3E1NFhfFp1Rz3fVkZoc73oddhz7TfkrYmAQ47ZYq5UpPja9MSfQLn2QeDyeMkuHyJuyuJ2qjwEspbutHJXEA6iMW",
  "key15": "5oRdekntR9PTvPdC6qFY5VtJ71jo7juevGuvVN2oj8uLJY2rwJFUZZHtqaanvZvNLbmoQ6KCiBF9QuMVbhaNcABm",
  "key16": "67C49YpTF9NS2aFoPt8dU3zzr35zZAbv9UoCBfnMt4ixJwK2kXu5KNKiLVKdYoEBBTV6vGZuxjXEqzZkxhPJNaDR",
  "key17": "35JLYu9kYYzZmhDxhccEKT1QF3mZ5vPLSpLFBhmRXsrxKuPAAh527m3b7ePKiTZWrugXRwHAoawoA1GeBnwb1fm1",
  "key18": "oMXc5CuJoxE6vP9p23NMx2vhaanWZPzqkFBvX2i8fFpGGYmcSwJsPgXcKQKerSSgvX4ZdFVkMG2Az7Y6WjZ7XiQ",
  "key19": "5ewL6iNxXGHv6HHLqTDJbFcUcJDTKZZtV9pwAFJtqh51WjJuspx4JM5TZ7fa49jiDufN6TLERukHqpRUfuygLRic",
  "key20": "pXTXURXrZoBcreYqtWuBg2QDfyLDrgtehQTRfrL2ho3Ffu2QJ6CLeBPg5xUi6oXuThJToApJSZ8HH8DwJSQcJBu",
  "key21": "4UtRRv1jcGVHXAHpsX9QiZtYugTXkFrb85oUrhTe9N15zk43CCYC2pCyZSVy8uNwGQoKar4FJEFdEjQ6efPoWkYT",
  "key22": "28qSywJdEWVeBnZab1Scxd15noNwSMsvQrNvJhykveeFGbaS1joiE14dmqqdEiKrKRAW35qoANwHrkXvLKYhqRvL",
  "key23": "5odVpa1p5YVtGAEzbYrnx6irsUu8CBwEbM1qmHwF9mnq3Ey8UTnmgmEpUTzKUBPQ4NwPze3LRbzfkHLGeDXUUuq4",
  "key24": "2N32eSkFnFqfEAsfxN1VtfQmTVayYJSAHUbxviuZkJ1xbDmsZndLDGdDUZkweoxq9jiKrcVTqWbPDxhCJpZtUQqk",
  "key25": "5WbkpLzdQLXm1QY3NukBH9Wcane7NPrZ2xFNk5TQtDE26hH5PESy6VxPrK62WnkhU4CRcGvWqym6LAd1gLHCgjPG"
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
