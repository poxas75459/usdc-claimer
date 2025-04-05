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
    "3gFGGoKoKM2K9VUt35YKLDCFrffJAk3WW3w7WPftDG1NZXZ77iBWBSjyuZvd1AgGRx63PbFBUKwZLG4XMBuW4BX4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28xGuUHkpAy6yKNYPtBegFYpDkKho4H3V5EBtusKsX6pGDR47LEB637oHBU9XuDSFvu4czFCjDw23m8LePw9yt8v",
  "key1": "3NrvfVVpqPnyQnyXZEZXVmNwLCeejzQUrGPjtXSMgtRVdaMy2CDR8HyWVHfHRBXDC8QeZx7cr5tKk3fQSocUkx5M",
  "key2": "2VDobUDrphjBr36mQrexy1tjPBqXaNjEpa4LjEtLCteZStgURXGw3DHhNP3B8TttJ7y5e5dhKFdyRWGWRQ2m4HzM",
  "key3": "5Pkz3Z8tQiQGBm4M7zvbGRvy3WSdhguCFECM36qsiSxQBV6Vm7xBXTNsKUezHCVs9bYEPi4PDotZsxRED3THirYj",
  "key4": "2Swv8rtqYRwdE8nAF63U7TDpF4rJ9h5LzLckFamhEeFgAF8RsX56M3B6uq5UJJGPKPEo2Coth2V6aUA3AnsaQJec",
  "key5": "2VyEs6eGJiXmSwhRVWX2tympKnAK4RwoWoWinC3LPuMfhtbaEkqKheEN81YDcEfz8TpQueJRXsb9Fp4o9ix3mp8h",
  "key6": "53ZrX9xRQy5oQTxpiVeFkqz6R7tHAjnaUYG5GFrENPEvtV9q3MraVYfSRruHWfcjXD4FRDRpM6dNZg7u6agHyoz5",
  "key7": "3wvDEXSZnYinWbemborEtGbfT3rjiZBW3gz6mvYAY2vrYiZXvPzD1J3xVLDcx26Ca29Bnsa3Da3kq5G5ifNpypiw",
  "key8": "2YjGpWfVPtxfuDq69ibbQg4AEVHCXc14b9q68Gv8vGDCoMEyWAiZafEQqMvTfkEaGxvE7sRnJJDkiv9WD27Esvxb",
  "key9": "5RG7D8MitXB34nU2LHAdLT4tQRJtBhRv2WckfJZnQZa1eXzMHJavAH8hpGHWg3BaBjJJ9ZDnEDwk2PijNpuL6Ho8",
  "key10": "5FS5ooUNknSrtLayFvMETsxCQucfdKP1s7cyjTwZnMhcMg8hD1MdSf2k6vvYLHDkbqECvC3tvJtc2JDD9LHvdLEZ",
  "key11": "5jJnXBsKDJ5iLmkiS6zwr4rnFUHVbuY5vG224YWm1erPoJTey1UkEvo5dzTtDxhmXCAUD6Yymcu46dFHfzSrQnDe",
  "key12": "4eeN2dNDHRiPhUEDmfhrTkxZDvGo87cf3AaSNmKachokCS17fpwcZWigwAszJs2WuBue4t9aq23FCVd9vM9cRPoY",
  "key13": "3zS8Fg3FXmcHieR4L9MoBpHHWMqxgFLzXZyjAqTyYYSqD7XtFZVE15QpddnoPnmeCUs46NXAyqiDmsL9mFAmiNaa",
  "key14": "3nBUn8iSQtYkncVHZsjqvwetjDFkMnKPa2CmrvEHWJfupRmxQDp2jDRyxcPSyiGqrto8C9oPrYMFWwLmhsZQpgYe",
  "key15": "3BC5Nnhye5myATPZTG3wnXFkSrtC2c5n3Gy11EUmnU75ZiEywhhTGGVbSGRzCE7q81EEboF7FDE7Hj5cXcD5rYa7",
  "key16": "4YMFwYwZV8nb1SrhEdjZ58hPECyjY6xmCC8Z7oRPWmRf4d5trf5zqR4UL1u255fUNMQwJVDffvUisBJboQHWKm6J",
  "key17": "4S6JnwUUidovYs3BfNUki1Bs1fBT5cJs71BNzgW4MuaLTDvaqvUyneTVCQeHcEWneNUoY1Sh1qYQYhv5iWZ2UBxP",
  "key18": "3Lke3emio9iMhM9ApcEEzx7GPuTrnN96cn3WnqZ7QqjRHS1JeoJfwia9kPxkH7thLie3btwovsQPk21phZ1ZvE3R",
  "key19": "5dyBv2uEb9MaBz2RYjpBtLRHSnStSBkKLSnUDFWB8sLFunxVkMN4pNhBSyZiCGYXJJGUM7jZHZRTugcz9W3KAL1M",
  "key20": "2G2Ra98dgZ5P4BAFjqzdc6gpfWiXs8CgocFqryHQcxYJzeTRnX9YbejFHfHyPyMuoUVczmrsjeVGkpUZYtAujbRP",
  "key21": "3DF8jYGqqcC4sMiJ6bffVXSdSwRKrXEAV5fUdC4svfNek3zLNfMB6SPaQnjmoZaoneVLohgj8jqNnvxyBpHGUzYq",
  "key22": "5b4tVMdaeeaDpGswKECc1MTkMZRW2iSuqkQYQhgcnVBsAHRcNHQo33EWc6CMarfacPNxEtm8ifprNnJBBxuC463m",
  "key23": "3wgE6KgZpZ94JWbaaFgK6PKKQuUZZYYLLmvLrgxH1doB6QnQDJNA8PWJYioqnzda6hnWwSg5FwfExcQ45nDESQY3",
  "key24": "4ctquHpXKKHWtL6EKctK1bwAC1Ws5TqppvFEKoV3ePTWVLfFrYWc7wqWhvR92gTFfpvnUhwQbnSdwuZk1nmmmfBp",
  "key25": "4ScMcwXMFG5euWFpxg6YL4Ktorie8pRRrGHcwWJCkJQkNSGiCdrPBZK8FMDtJc7n1dbtN6GN8kaSwrZvjP6zk9NT",
  "key26": "DEWjpKRfTw6MtxYZg85e7HoSuuGMV2RFsRu9D7EkBKsJCLqJUJfaVtHUiLpkVQk8WQaho6oKMgn5XXctyWmQQUo"
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
