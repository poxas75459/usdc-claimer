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
    "9XpkMCrcw8MVRVnDaBzzBpeQ1LvqDMkGBZXFgWyuscHJprkTJiJUwUsEA84xTA951sfBcsw3LpWBsNq9gF61f2b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43473dm11QakMndfYMBmWKN6PEgpCxPxNfuQeVriJToxjfrAdmG328pco6NQt2eJkoH5XvqpgsEAxjsccpVsyNco",
  "key1": "3XqT42EwqfxJccfHf3579L94rGX5jtwBPfZT2sJ8ju1DnvrqpuQYP5ADxoV4C3GNaeeR8ZrtM8mmLeJiM28Ctu3e",
  "key2": "2FwxQmY8sEszg9XJM639nHzUjJrMnb8g5EmfW6jRweKPzKmWztUiBgQJ1m6Dw8ZcVNchn8mRGSSLHCyXRC9QCMM6",
  "key3": "3bRN2waDEBmnNcr6NsX7D33dWVfthDy2xyC85m2ZkY2pNwDdTtow4fY546YTp4hMR8tj6yfVnYSpCjPXeY6d5wDz",
  "key4": "3NjaL1JKE5wpU9oN8XaAsZU4X81YEUz1uk43vfRmN59hS9j7iLvE7ub2BaCfSvgqWGpFZKWjBQ2ZmDhk14jAwobh",
  "key5": "3Sz1DYZcUR81qjzNZLrhY3Vr3bp7CxdNgHsyqXBAxRbPsgyQTXRsWZKRf7fj6hJ6J9kP456jNLpDx384h1emH6pY",
  "key6": "2hKi4md8NwXYNXNWJgi6Dt9NEehxEZvVzZEDgQ2LSgRAhgdvVDagtWMxGTE3yV68HRq1PjHiMyJhS3gYquWnKVPo",
  "key7": "4RTu2YJpwGWZZD4rXFAdcSubmqu2Mage2rmMjTeHCe1V1N4dZWyhZznro9r5wX6MH7S9KdWXzWip7Shyr1zKfXHr",
  "key8": "5MkBA9zX4xCmVLXs6imEMgMQHG4k1jUMXQydNgekARh1VtEMPyXtMuXQjvHX5QQvHzSexqmX1DNKfbaCPCJE8BFR",
  "key9": "2xdm7CoxX9H8RyoAJnVxgHEhTz6XERnr694E4xJDrWRzMZxA9AEPALKQTqdGWArgn5Q3Ejv2P71BnFgrca6Vrwsm",
  "key10": "36oUNkv67412dL2CjuomsGLqYfWfQeSQ7ZeBwaxqeL1BKaoRfNK9QLTHkqLh7Q4jc98CKNMTLqcXAAc7Gm669Qzs",
  "key11": "26w7QiimaEv1WcV5oiFVPRzjMSQbMFms8oGiVMpYCSMVmDWXpkVCaox6vcDFYBamAxtqPkeD5yEXu3NvjWDhvpom",
  "key12": "4j2xvC1NT5Y3HYX9ZzAfx4ryNp1GWPkAto7DrxgYEeaePjRL9JKrJ2jCcfWkrPV4UwEzEuWS4eaUaxjdQQYcHyJx",
  "key13": "3BtHE2uumjGANvQ14wpRWfXoLaF4nM7iF6RMZt1o26zskoJv3Vwbzg2vH2QDs1qbJp4QjFueF5UUAECEwsVpi5Ku",
  "key14": "5WQPD6UACR4mT1gz7dMg2cNSEdLYJ6dkU4Vtnx43DMDz7eSysEzPKzceG1KXgk5K1mtNQvYbk5sSknW2JueSQkYH",
  "key15": "59UGpYBSiMHnLadLp2gh6BnkU2C4pitCqsHkTMFHuSsC2JzaUxz9CYYqfY2DtwyrdiXUQN38LBgtQC8NFj56pbC1",
  "key16": "4ocEhdGe5kVxcivu8pDwYoAPHrzV7C515FTRcRJVfH7J1C9cw3sKxrXKYHD91Ye3XtoEQT89aoM6PvY6oaxgHCPb",
  "key17": "5cQbQS1W5BGwQB6E1nL8oxsWLVnkxEtqMGLR5DPtmRSDvpGyf62gZwQccDKzDrH3CLdzwfp4qb3swTXAJT2CUXu2",
  "key18": "5xsVwE6v2QdY4UtK1ePVhp9vUUWWm6kYn5rsdLrkpSniFYY2M1SFm2dR9iYCcx94SW6UJ73MbBso8MowSmQ3GE1n",
  "key19": "4HzyTRBddkYiQ8u56n4SFfvVpepqweFLStfArMkVcsEkdH7mmPBeHorCr9RUvBeG6pXXCm3R9U1xUnKP4KC1wv6m",
  "key20": "5bqGMZKjFPNeQDYNqd2jaM1DsdRkLS3XA8C8EfqLcroFBxnwMZAvJDiPkUQs6cTqHe1Hoew4iENFDpgQDSEeWjNn",
  "key21": "4adhPN77iKMbhYKH9VjK2zEsiMBWG4bNmcAVMmYZ2Y3owDqxXFScXLkraFpUPfhP1yev7wDT2L3EM5ByABfvfDYQ",
  "key22": "xYVQ9nSbeqm1XquMQQZkq25Y5eS8hQ1CvBbyqmoS6bGSKWHMg5icNCnhLZBvEcqG116CNaYHcVJUXAX1UAF6phj",
  "key23": "zUQUUfL68SNNu1Kj8c9VACy62uw8mBziTU3EuESoRqsVQYuUXPiS1SuocbPiTWWu35eoUC3mF3id1dZYJh9Nwpe",
  "key24": "2DdGDtC1Kscr9YGnhuBmvjAVpMaD9MmueH9WeF5Xg6U7ebE1wMiowvYj8kjX4n9hT4kCCDRWaaPbMi5FzCrkJRMP",
  "key25": "3fuLgcaHA4CnKD9YKQ6DEQmLTj45nWfGLfKFwNJvJ6DjZJkk5kBAfPXiVGLBivneqYy1XjMMZtVNR685Uiq3XNaD"
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
