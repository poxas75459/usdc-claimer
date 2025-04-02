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
    "47ro4jzVtqgxb7ugf5Jxom3GyGPtUxHDD26ALgGRWFHxaYmKHSEqfzLQEVic1sMDJdk8cceZhNXBct1DC8yGWeqe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uoTc5kPYzf8pRpCNYFk5kGuQKtmf5xsnzNAohaekHkFTfodJxGkuQeuWdXGADSuS3qqGHLAqHFLW1azg2ny2u31",
  "key1": "5sTwUEN3mQbcLZLXWnbgAphmJD8FvsrfpUKBi948RNWdp8NTj83HgKEnd65hSAUedjHC9s4SCtqjR2fgE9TDDTkY",
  "key2": "2TtiA4LTt1jPNP93B4vrtDEDt2eUDwDAeMXaaZwzy5m8xkmCXYLLY69W2kKW6FopSwb1Zp88FeDj5Ab1iyQ3Saj1",
  "key3": "3tif95Uw8fFCYWvJinwReJr5NkpJcJzSgjpb7LwJRhJvuF6mE277ySd6VHgsZ94LSgVzhEniViuRu2X9xCUY7uLc",
  "key4": "2Zd1oQHfP6uHZtRFJhU8BoEm6niXvhcDrdsQM7nGgg4bzUiMrq4XCBARehbGGTfNJMUuu1TByoFho4Zy1VSzDGCn",
  "key5": "4aDAvB4GrzzzHrSyprPohpUcVQERDcrF6Y6ZUmak75NBqiwaRSpWbhjJ4p22cq1j2y3rXgftqJtjMQjNWxdcD5EN",
  "key6": "2m9AbwFiEg5nSud1YQJhaq5sHfXPSwNcbkNVqzVse4SvUbXiyRBDN5wdq5Z3wWGciPgYfriHxSFSe1yNB6ZNximn",
  "key7": "2KyHmZGhGV6a2fagzTqJP5HsoXcne2nBwsgHXiYD8PwcKquCSu3xcsvahu7nU27wu18GJd7zN88Xnx7wSSPFnvmT",
  "key8": "4aTRKqmR7g4gtq3PBSFc2kK7Ayf6e8pMe2zaXWPetuGs7o1hrQcjWU1gU4tR18rruxbToQfCW7zUm1NWg15oXVzm",
  "key9": "4JptCwBTmYSAmssBMsjE41sBy4aMdmtyhCpJ92qp8pCVubbwZMPBKekwbeG2gShn4z9figbMnA32eoXMbPtcGrhH",
  "key10": "3LoLMqw8ZWjd1EkQ2uemxPnXWUE5UXvcPv4aew3RD9P4nuCuykgtDP28zxnucLfprDzEJXNtpenWDLmDwEmKNjog",
  "key11": "3E6quYXT1zax7tyHMfsFn8NEdFvC5xki1xLZjAae8PjHDugVnXeH5UT3STiQDYC2Vz9bq6B1N7SWX964V41aaXoT",
  "key12": "5Xpak1X1sN8fUTUBT5TPQrgoCQQ5ryNQwawzcaTFgA2sVcaEUNAGvN4BV1VV7SRe44Pu3j2PRa9XbWKbNt29138m",
  "key13": "65SyCYtaJL8jqw63yQhfaqkfYuKgHzc1uqSv7dBGSMTevEpYMLyBmiBXwBbwQNNbabiWmRJraa6fE25djCekTFZc",
  "key14": "341tgpNjKJRtkN9YwAMEtdA4NTDWiStAvX4YsiZGi9kUgTPGgPgYqe5SX7M1LMgBfos3T7Rmf9EBcLieVwnNpLtQ",
  "key15": "234rxHYRDucsqHux1Y8EdkNpe9bCCY5R96cE5pCPe4Nyn3V9ReVCgHBVLtN7YruxmBKyqaTQCnhV8P8h2WoWTHrS",
  "key16": "3JCHDa5bu8cyWUcyXcavFyLzzmadXmVRJyuFDZS4BUANupJHPEy7zCf9X2N5rqaQwyncf5dHQJdS3i5D9euRTR18",
  "key17": "T5wyQUqj6MoMWJmDumQvezdpZ6YWmDqHkZieJh59jvNvSE8BYY3F8uxmSqtssx58G2BLABzPKF2L7W1dzL8iNVt",
  "key18": "4EyS2SpDYsuJovGSAX1CUGYAPwqgUS2d65yBbGov9JtJsUyvYPMfEdmRzWxxWhgr7yR7PqEnLCtVAhiT1sZs8b72",
  "key19": "2jqqnvz35eY5eXHnYU7puUzsPvSbovecXfAooxRNQ5g8Sqa5G66g6CzvAuFdBghLArdHh3L9bffJkTwqu1Nhpxc2",
  "key20": "3n7TmyjSfdXdwhWLUs4M7e8LwGQNpessMWFipckc8SjcyqVRnWMcHYq89xYSwsXr27QoFfvmVUktSKPqe7jA6bE4",
  "key21": "2DbLEn78GBEDK3KVExDpEzUAcd7HBM7uqpdYqyr6qScAQ5VcqWyNgLxGm8amNbv4GeVaL4hmh2Gmo1KorFt8thWT",
  "key22": "4ncvR8iGAVFjXmMmKuj3msNWBJvz4o6vxFcbLxpB2BeWXbYywib1j9UsQBDex2nqrtaNCPZ2vEB8setKdiQyE3Ra",
  "key23": "3S8u5UfLKDW2U88BacQYgknUwoD1DTsSfe8EEqV4k32b83KsVayP4MryogXQvGgENTPcS3f65rbTvguG4US3cKPb",
  "key24": "2iUG3P3XZa5qNkaRfLDVFNJNbmwCvmZ72UiUbMgEYdDwggAMd2VSBciamGek9RPcdUxoawdzzYDDy53upc5gpxWS",
  "key25": "2TMZZeLF4JMmds41rbxRZtoB5wyHREA8K476pLjED12sbiAyGPU793CFPHrYDXByPcgyJmaAmmSRZe5Fq3yqpaKs",
  "key26": "8rpEvxXkNbWTbYvMptDcyP4LUi7gEfSBrk5KwfmSnaMzbFDbqS9RaKJnrfSwuqZCE1m85v3ibRhQt1etNs5KC9N"
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
