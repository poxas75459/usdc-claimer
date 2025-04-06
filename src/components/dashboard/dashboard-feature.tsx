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
    "2z7nJ9xpESvVkc9PTz789Na3sWSpqc3gRzqg2XcWNLvynaZrQP73Q5nkL2G9xWDLoN88g6CgF9wEkv2ocw4DRcAp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2A5cSMpX8zgxcDsPCoV1qfyjYPDZVHtC6gnrzpVbHRBbVHRSJf1qP9UDG1p7T8wELcVEvD1jyh3yYKT5ePAfgTiq",
  "key1": "3DR89Bs2xyrC8xrmxvUgAvbhFuqNNEnZrdy5xwor1qPZAezWzjKLwpa1XYaTkPTBeE69eJhQbtdGsa7bjAnWRxYF",
  "key2": "2hVWmebtUYctu1LBvyh2DMEMsWSdRFazdFSuoQPnj3FLGEaRLTnzJeAfXCLp18FRrWdFLzyA7XRpmWwMGLpATb6f",
  "key3": "Gy3DdGb8CvyzXr4vwK3MRwmdENSxqdJjQsAMSxHD7X9WiT29QppCNBtZdRhpb9FAdr4s7oz7kfvPQ14h8C6BC8L",
  "key4": "5aZDvp3RwtFnQcacMnqPQwLT8E8pLJf1qhdTzBkxdagn3jzgynfntSCsXnc4vj6wbzgp3G6iRkhFFkrd1au8ZeUu",
  "key5": "KPVNSSGtxRuwUZXGqKnxefaWHn3UNNpFK4gQf3PUD7G2FLZjjDqKriVByHU4hWymDduakKcnWahHnX5A8Lr5dBB",
  "key6": "2QUudfmM6KjfWjiSphAM5sJddrA37rH3Dz7r3gwekWMoyGEAT5AufSg8xv1kEczqxfrEJ8NPM9XFAdpis4EmN914",
  "key7": "5J6p9mZUZrDPCt7ctSHYaBdsSuvV91aK37XmULSFy7ug6KEz5ZA9pzT6StV9mtThitwcxa65xVpe4HMPn3Fi8puW",
  "key8": "2cuJQeKAbTbwrNVZ3MDfrkXjMuuX7XWHBg2XSRb4QYotwhp5fauGkZ9ZbXfCQkr6qeKcJnSafcBusprkoWbXjbEs",
  "key9": "fRN26a6kPuhzm4bYAeM8j74cY4FzPDiFeJfj6cjtjXbjfyq7GDWisQxx8EjMEjKAiJ3BNNVfZmg1Gwdb56tysSX",
  "key10": "2ZaozpGAsJnNbLdPCeFve4gbHyD8NLEKoa5F3CQZdzCs7AhJhGmX1JjnnwAq4Y3Hv6YYofDQkn6LaxCHxWmWL1vD",
  "key11": "u9YqsFkaXzDEjuVVTNsaJaqzMj5hk6b59fURmNSLCcdRMKPv4R553L4zSmeyAVEnUWNoVV2GPAq6425kW7E7yZH",
  "key12": "4G21ndPx516H8BDNxNYtvsa8DkuJM8sS6eeccXFUyDxCXtBb4kH23aLw4KXir9tZ5ftMBXHuUgcxR7fijz6RpHN7",
  "key13": "VqDLE1SHbhF5nvUHHuYsUDVAHYtDnMJq3vTz5GAeFzPUBKgoZKDXpM7BPEmXYm9iB9CHEL22LyYgXeyLV8YdfWY",
  "key14": "3ehD7bgpGPTja3Y1XvSapUL2QMjRLRgxGeuNnvzDfae6DshJu84Td2pW9fgADfSpiKwX5k3i2cinQgsddDAhLBMd",
  "key15": "42aJKB4JarkFbgUiPkXVG728vyXxkpVKLSKqvYV6zfiefWNzbEp7muWtc8RxEhupxoTsxivCJM2LASNGZUEwuJE5",
  "key16": "4XJRHNxdELJwJb9Qd1yhXQ7AgncfAeBaU8aPqWXMYLvbPHm97T7aTSYgvKQuqJkvYK4cQzXVWD8Yrr4hs2oVHveP",
  "key17": "oS68Y8bDRr8ihoe4nwLMzAxLc6o4zrRLhDpZN3PdYKbrEyZQBt6YTU7vMWmSe4MuiSPiiPTPC5X5SdKwyKDBwys",
  "key18": "jCjc5czWxwvduDR7Pr5VR8EBaaPE5ozckLoXXf7kU8uzwgPSqTSMvGbqzkSyoNeGhnehwEBd9fH5trfMc4ARkRZ",
  "key19": "5VyR9tXEsVW9v5W8tr4ikFYuCDuRw9oTaDeMruYEvmYJayjS2qGnLo8D1RVY2vzoBrbVtwsLzYD3j9mP4LoMtfAM",
  "key20": "64ewBk24wQS8CfYYJaby2WemiJ27gwbbNzq2dPHQS1tWmuwPuhH5cAT7TuR3z2gop4abLo8F8v59vr61YDGXBHzs",
  "key21": "2D7F4e2c6DcxyxksjXbT6LonheFEFdR8cKSjHevBdoFjRFP1BETxQFA8nPk4XKibZoorkuvSXEPb7dfLDMwinNLw",
  "key22": "251uoAamqLda4cgDfYSsbGYR9wrqVhRNwAJVkXqv94KWvApEyYGir9t3pq7bm5dHYHGRmcK8CckvGKbQa648byJu",
  "key23": "45hW93Fm1WJ1N7eXGXBiAzE6x1V2jk4645XQJqpY9gxzpNkHrz3xm881Fw5k2GKWqnxm3sPh1n4kVB5HjwHVc9um",
  "key24": "Pmp8Je4PPzKbJdz14DRHYsdEkJtb4gf76bMHwM1QQSStcWpojAdm7ocLhq5JXitwmMsS7mr1j6ee91RCGjtARx3",
  "key25": "5S1vusdb7F8sqvTtJmmp8LVFPeH28ygdNau79ETt715aaxbFAweb3KmRvo7By94HifDiz1ppKy3eEosohQkR2LG9",
  "key26": "5UDc1tNT9iXuGc5aHixKxy16cNXkoeNudyN7QTbC9j3Dh72cjoSVKnfxhuTb5nyqMRbssRTWSrExqEY6fodEUVBy"
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
