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
    "4uhjmMZsPE31RNvLkvPSf7wVMUryWhfhV349GLphjwSS9qXpJ99PsouS3MmS15G8PuxZ9kAErVhP1PrvfzoEh9pZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gtwfQ7gmEzMDfhjnrRZaBTuCmCGJVHeWm9KMfqSP3MShEzJ51SaN28pchrTqqAa7UqwYD5iBfSwEtxtVGrpVUMF",
  "key1": "UbjR5xwGzx1todPysyfYDGffs8tKzXvLqQy8XJxFA1iHfg9NV4X4wkVo1uxtbvwMT9mcQ64xi1AJ9yMDKYHfJJf",
  "key2": "4r1S8geJiifmGdNPFG3fR9bbCD1x65jiRLyQPDdaB19Vh21sAcjXB4GgJPYiWpnpTrNNSn3kowXJpRvNYAQL6QHS",
  "key3": "2YsMcCJTrNEiXZisXR73ZgYFihYus8xEUc14s95R2csqNFHtZdPum8XNZRVPu9e97WyqUZ7gGSMvhDCdRV5GV79s",
  "key4": "2J3VqiK3ATMrUazKR2X2mRPPp5JtfteBvmi5ngkioATXjzoCsHni225JMRY4z33crCCSuCrTTKrwRqHF9zLomrYM",
  "key5": "42X8Nki7pGnvtngN72T5TxnHWiATFXgVkjXh5L4DjPM8pzqy8hZsBJbDdGsFw4p7W1qUERTayPp41GHjedhy9x5J",
  "key6": "5fmFmkESi7zjFn6okHueGEfFBQtar6UL5hpyZYs8Bz374vLjJqVSZGcnKprHa3N4enyv78UqLubUhW25y8oCAn26",
  "key7": "3UXExXE6rPxmcu8dXYCn9iwPQivmvGoeE2n3ginQyHAJ9BCfmhrThADbXHWQZjJ3u4f1GfwYEo5mmpq4jSQndwWD",
  "key8": "55Ja1zMPvhvwhsucPV7nuHUSCd3spttiYP1UY427VMonsiSp5Zy7Dxw4SSd3yX21FtBrAByRCXJa18KbdgupqzHR",
  "key9": "2zSqeHS4mqPARxHdrGAT8AWAe4DRnmRzKUfJu6hi9L3yN8kw7MSGj9qMEwWyE8ybx3vXE6CNK12LAiZy2hAu5WCe",
  "key10": "4MchERy3b3RK4BPgyEwLFtJ2X8QM9zxeiMBvqcZQmcBUuc24YPACXrDNST5qDQE3Cuz6T6yLz7o2m5jfhmGhHG97",
  "key11": "4JAUAY2ohVgujA8kShHU814TcZay7bPcZeahHWbQAFMxpYJJvBcqAZTgPYxzFHWCZQfodijRVUT3cXqHp56FTqwM",
  "key12": "2SLzgbM3qzyt6J7tH9qD81dopLMaRwCYmXjQrLf4LkdSs52giaaunjsgfqnfDfqqC7PQdUhHFr4TrbkzcP9ocT3k",
  "key13": "2Sn5ipM5L5pewf1HdecJpHLj8Y1Cau6qEbE3QDhBGG22ci7caSUDjGWyxCanCV2ru8o816AZ7Sq6AJuWqrYbE2oU",
  "key14": "2dKretbd9aCSdeiRDbt4aA3qpJVN6Z16hRo51ihFuzCz2EPJk9XyVhM6ri8Go8tUFAEt2H4w4yMEZaqZftH3pvhS",
  "key15": "X9NxHjjaBM9e39q5kjhRVx3iCLa2buyJDnV9EicQLWZz3YoM6gQH4MSAxGghPX6dYtQxwKZqiuhcPVwBRYEAxmg",
  "key16": "35EDeVWBXMTciQ1EymLjVXkBgd9sXLJS5rBWuo8Pem2KbgyU75S8Uhy9ruhdBH9727ZXDX2KpyAKf9hhHtM3XHUi",
  "key17": "4MZFTw3ZFjB9TD3NEFx3pvbkHmu6NSDVDPUcYA2V5LWTB1B5TtSPmQaB46dKpPY3RLd55ju4JvNSyjhuYaH13QUP",
  "key18": "3N39uCTK9vUHAUqmVmpeKmBoeqkedvZRMn56aovjnomiygV1TaR4u3oGXNUbMy4SoRJUT4t8L1JibBw4SLcbb9QE",
  "key19": "4PvvdHbVDyf4UKVeZWx2usCZx2Pu2YbZvcxBK8M4DZRWa1SKCwS6u5SCcEW7pUZ6P9TKGtXW66423VQKoAordHTc",
  "key20": "2jxTuKUhX4RERL2QeQq259QJE8ob5GxgajoiNfGs6cwx1gbZP4zsheWM9ZefcZAUFsZpd6u8fw6CtuQa6sUhXMmP",
  "key21": "4SYmJwyCvqJGR11oRFdUgn1DnRKJJAaGjsugtLaaJjWZi3nr6WcVnHS8TGNomRutrPbm7gVP8cAdQvB6bJQbbXeP",
  "key22": "X3dys5XMkjkStTFEUJ3E2oNt5enejzXRV7XgSDnvzBBY3me5QeTgv5WGVXBPTdv4oSpchgoqWZjT62BMBRa6AtF",
  "key23": "3EcRHZQutffsVhbzHR7nTPDZPDByJBT7GKoCyeTGteZtDSSNwFx2KVosj9jDm1rswsriDvgCqC2SHFJ2NrqRZCVv",
  "key24": "126YiJAR2e7JyaxnCTKheRD5p7haBTHx1nDVwrg29UL3HPjXXxUsM4mCPTu6526yN8Wkh7DgejD4WLkpsWCFFbUy",
  "key25": "5scsRVLGKdhwPtQkdHVMFtDKczX5ULKhWV5s9LjBUr6reSYcDv7Q8vLa4n12f2ivTztgtuA3iX18vK4n1eumU1a9",
  "key26": "5UKUE2maBFwYRL52m23Afyq7Vg2WY4gsvmuDy4b77bcYC5VnLCCtbApHzV4wtdgBpwheFSRh5wMLPu26Go1cVUpY",
  "key27": "Vyx41XkbVpWnpjKuzJTJ1dBLSB5b5FjztfFySeZmb69BePTGkMm9EBYqZKZJyj9HjXDBM3koqBtzBEjn1dFFU21",
  "key28": "2rVm9NaVpW8avsNb6efTLAySBPiJB3C4ZJUETyxR2ZVYyGaxgN66awU4qdS1FtTmGwiXGiy5jVT3QksVTGN9bhyk"
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
