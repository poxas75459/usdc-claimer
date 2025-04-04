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
    "5uvguN8uVtEuD1YcnRwF4WpGmP2f23ouexVvHmiKdqQbNBBzUBSUMnco8u9GMyPtU1m4czhs39pNd3pCXr4xvTis"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4S2oEQMnckbtiRBJu2vhoaGe6yXxUnNLU6cQvx3xAicxDovvET8F9FZ8LFgu4gfyBuYyoWQLmNSSHyvrk3dKAKzC",
  "key1": "2VmJx7mNAyyJEwa9e4tNMfhKdyFzrzHPKzbwohYrLvGsxz7fst9TZw188RuAHv1MB9uUjYMRq5Uf6nR1QThgowpD",
  "key2": "5EdUS6bYfCp8h3DPoqRRJVKfKkCQitRoBYmKjajCtqLxSMWvWLRN1WuGWyx2K8s9cx31MPS238j9JppBrSEgECbZ",
  "key3": "4SDGsDcnXLPFVZpJceuxB2iCHaNfyf54E6ua2UKfZZvAYaaCJTAnJhxL1AcHyxRqjeFS8KYhN4mjaDDp9ttDVUiq",
  "key4": "dWg4RCt1QfHcvHgjH25GBPD5hH42R6X3DQvCNg2XvfoQ7EUMWC6uFGDf9iSAp1uuw9RFfGAsLo9cWkCRD1w6pNB",
  "key5": "4bDvVBzwQpAV8L9Y2tCCdH8ZhhrRo4HHiKhtPBrhyn33rwicwEveuiPXCofgnNGYHKgCvgm4b9ziD8H4PAAybeP4",
  "key6": "paBhP7g9MTzWsGg9JW8DLkk7AVHczr6NB9KMxnzneFwqGVsctosGXC72sSXZ5tpsVvaXnsMuQqHsdkCK6N9LKtd",
  "key7": "Vjs8PbDMEDLnB8AUHUDaQ4UYmzYmgkxshedANFFUMBsyirYbXaBUmubWj61tLLLF3ttPHwsJtS4nYjVL2gDEukB",
  "key8": "2Znej3T7f35TPP2YWtuMtU3HZkmTfZTuc5wnWzpQbV4BZXQvth4DJZuvGSAXEtoPeY5y4Qt6cADNtHkcwkvPWxe9",
  "key9": "7a6FeQwPzjEM7PFw7sgb6VvrbHC3x3VQQmYo3WcGVcfTPGABXpLeaCrjf69LxMRUynZLUSr1wAqsgLbZ8tCm27R",
  "key10": "25pqHTXMAsxcqK11cJqEgwyGzyX2ko649PrNHow2z6cbtP7dCTboUPoPEVUpkyBpff3z6wGvGXS1EE2GurnTfUb1",
  "key11": "VGTcFikkUpWuMtqW22Z3L9RkWDRKR2T9ch1vUCCAPsP9FZC5hCnekPcdX63du8kVk9DHwSjQAjeZniGmPbe5ZBC",
  "key12": "4y4a5a7htTyQw65NqK2Sg33ddAVaziraQtAX6jZYNd8gMbhyMytjkG7LdNoWmQWYMeBZxBGHvByq7aiVKyu8nx7U",
  "key13": "5ryA3CimFAH9ENwM4reQBU7fAUBv4ExVCzsB35FUbn3uLoqd2rWVsWPWvxHh6UWU3GvpA1QagtDYQuvdZdmFVBXU",
  "key14": "3YX2DY3ZT3kdnSHHnNXx84otT77qFW9Tr2bVJcFpMcekBHBwBA8dqC9EUjvx5DtUiYXg4VQtRzn5M1LipcuceHc8",
  "key15": "417GhDWw4QdkEnQbTewHdCQbsUx4Sof5kBHrPbV286hLXZtQJjkLkup9XgC6jTXSjCPp6WDqEiua3rnJwnjbdJU7",
  "key16": "5Vbi7UqTE8cpwdjCC76aqyjxiYCPjpsVcFp8arVfmRAZ4kqUPyRAoEuYX1p4ng15Hqd9EBLRkg3MkzmEbwKv5Ts3",
  "key17": "5kCNdZwCz4VtY3qN8MH57eWzLNf8czFvSmMeZB7kBVnjQ4JXv19uMQBH6oKaqgrssnRRQJhYCg35iQXPQmeoaHhK",
  "key18": "5mGbzwVg37kh5qkjzw9bkcMPCwHvBKNjCiZDgHeNjRWs9MLzYRpBA9AKYE1hVMQsEtg4MmDuGpHrNhawo2Ctit4C",
  "key19": "4Z8y6aaSEK1TLAszU6U4qqSgJgNQ6krzqc2TmnCtg9JyrWokA9N3yfMmRsfksgipWHtK1JVCwhpb63CM2rpju77U",
  "key20": "2erUTBVvNtDw5ZopbCjBGWyEFKVyRRTyyN9L9vYsccQiUXmhYXFs4ypNsJNsvE96XP5EXFuifvm5FPy59tjegwmN",
  "key21": "2u7HkAvwFjrktu6HxysdDw5CTGwLhkQkBxNcS65vud3EADc6vWigS5N88N14k8MXDikMYCk5wGVxyzNw7X1y4JhM",
  "key22": "2XdJcrtBMQzUNJW23kdLpcbHiTsD8ScPhaKy31KURrGv9GHdqfyPTHq3oJeJpaECvJHj6fJK7N8WHbxPmFfqZYHo",
  "key23": "2ebBrrZUiMmZ8Cfv63CpMkJJrcA96drLjRYrzdmX1LsCwH1v7cqkptJpvYMrRJqYMzea6N9pirFSZK43JcVvGe25",
  "key24": "5ay5TfkL22hECiQG8w4LcnHpBy52vfGypDrv3R6p9nLqGGXJPQhLtVT3t5yHW8MJ83SnZs46SnPFPcFHkMt6qqwA",
  "key25": "mrCZB2oitSV4Gea2zc1TfrUZcSog3CvS2Wsr5XCEcA9h46cug9CQE56c9V1GnkrFmrSgWQLrQA3gdA4vvRkG454",
  "key26": "4x1TrmNx2R2h8aMFpmpCj4W5eGJ15kjTNv2JG64j9dQT1EzD2S4m2mNLuu2jJrMs4gGwPJ8fSuyvJGhieazYJe5t",
  "key27": "88iKGTbmMN5puKj6ys6Uhwyrh66XRQsyMS3DE4pmbHq8ti6zphya4e18cTEc3kiAG71CQDtuPEo7oWqD15DofS1",
  "key28": "5v31j9LpEa3uPyJ2DzUcHkurh4RVZcm9Ceeh2bZRmTxfzmcfBBuUnVwvP4RRanXLaFBt3KA9CbsZDDHNfd2XAyjf",
  "key29": "2ZQDUMM44J93PBDJYePFu6ZkoQ5oEhyKWGVFw3Dd5FoVz3pincumszcVhLSg4ZBnPuESVsSo7G1BrBbwApzgucRj",
  "key30": "4hC213gUZsHbQarMLis1nZeqB7wgv7d8CwEogWgMmbrJmdkFtPduFSWYzhF9dnLYMNE9CgqskVkvyWVKTDTkNDhx",
  "key31": "3HKuZZbLXG4uQxdBmRzL74a53jD9pU3biqStw9J6yiGtgaDATbdCAfcUFPPirXyBEQKQh4sgADsAMpkrPnmF9FDV",
  "key32": "2BJKTwi3Fies6WHrivjMFsk7a3DyU9yV9KJQ9uGSKsZVnoeyu6aX7fETBCxc49Q8dwZzAy2htcBzkh39U6FNukDy",
  "key33": "5w4creLALTiUPjKke9GxYs4j6nC71gNdLQefAiJ6dMDEsydm6WSg7nDcUVfeLPHd99YxzRCqNyurqWsuEZnUBGbE",
  "key34": "2PM9gYnWAXSEwsy2KwopY3sMNXpajR5yFZ3UZvs4rvbgkE8poo4oK3SJWy9AR95pJNY4z8BpwyrPLVoQZBRTYVXZ"
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
