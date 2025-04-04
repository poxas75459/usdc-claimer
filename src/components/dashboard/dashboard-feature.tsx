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
    "5M93SYBUuv7ex6uRvDoJW9EKx7RBvq87N5BRQ3hA9XT9eRQ4yDxg5hhne1QAWfyEch4AxeNNodWZydvnD9hqdvwz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ftbE2n3m6953uYyM99Kn8ayFs1eBTSLzShsKNcPHDpRUiu9qxhYXTub33GqKkMMHg8wwN8Gkg8mU8172i7NtJzv",
  "key1": "63g8zSbfXUUj3XgwgMfAajV6CAeLbjoktMrBEGFu7RmwftCfk6BrAbQkHvDiB7ftzqauPo1YQeVKT8hvqia7uXxE",
  "key2": "AryhnbC4dRpjL9Gr2YV3LpoAheCbsU1Mi1CATBJ4cmWyFkUR3s4p1nE2JHY81Aqtdn4kCciikn1GPHREDb1uH96",
  "key3": "4F3SczrKJUGARQrBzVgHykqVs7DKZk4mENYqibkpk2KquV2PGBPdWvA66qiC2qJDpHrSRbJs2oXtG1wz9sAxe5tZ",
  "key4": "35cRGnb9rY2juAdbjgqVudeY5gzaoFJrrcDrH3r1pMGvFR2ggMVShSy9Z1pzNs8CQCKKKGCiyr3MguZwZqSBX9PZ",
  "key5": "4GTX8VnjNRrsxmJ9HP8CvF4WHoksacBd7ATErERW23SrW9DCr38QwjsDHN7Sd2rhZwgc5RnsXf4MMtrkFB9fqs9o",
  "key6": "2DZSU5vXiZ83uzFbzLRiiYUjmWMKdN124ForzTusqiMams9ttHvZmqQtGyesnBg8U1svcVbJdB7UkWCCMsAZA9Wz",
  "key7": "4kyGC2YuMWNcY8kjn1wZR6B5Z3Gc7JFxKohqyTbWfUhSbYJgsqQx3pktuZwpamg3MhnpoWRB6TbpYaSkeDqaL1iD",
  "key8": "37MFpyfY9N7JPkNNzKrSzxFqQJQVM5m9QsVP7NkVjftUgCJaVYhSaQBRjGTadhD7LUXop7SLfC5ZehLUh2Yyadj1",
  "key9": "Ui37RQMYvaY31PRTjYhwaAAESPzHqGRiqCGzKSXvYCcgj7jL5Tha8USWHdgFFaXHqRa86SWriLSMuUto2FvbHMN",
  "key10": "2J9qg7vsFXW3u2gVHtYHRFhYhmDGMfrX9qL73rgvtQCXsUyJZnEm19aYLoTXurz3HiQen97kcXhbV9XDigWeSUfp",
  "key11": "5yTt2DHCG4Rpy3tA8kWbRGir424vfBVaHahKDBiu75K92sYTH7qiuMPhw2NHJPrYS1hWeJUDivctvEcu3QDUoKyY",
  "key12": "y1fandZtUg3PmWboD9heSjCvqY8Ja1wXKaLVVt2sBKvyMfvogQiZ6zzfW9k4yeL69QBxtJgMov9yzCxugxN3Xo6",
  "key13": "5fRR6FH72uHViddDBdHXLSsyGiVmHnA4C1L17MQ9LsK9Y8eZY2fKBb2AyuRiSYBLt4ZsXPFGsRw9yiPDAiqCwN1q",
  "key14": "3Wjuu386WpjdqfhaZgs5wWyfVruJDRwEp8Vn6qcG8FHi12GCeH4QUQUP1UT2zbKgVjiyWcqU6ZdmoxUidjVBo52v",
  "key15": "3UbsaFESxpSFKhqJiifracwo8ZasBJNDxkkL8Jscj5CB13Spar7p4tpzKNnEs9YBQY9HUk5tETG6ZUw4f6p6BBoF",
  "key16": "3itDSbycFadrtdZj3E1vwwa1SGHy7gtj5EmmKbBtVpVpSsJrBvV3CRZNzdEytN9DidzNi7ZPE2K58GG9xTZ4hcHF",
  "key17": "53ZaT5ddfQ8QZsYidLvSuLpfnG5Fng4dVg2XKH1XjZ3jNkYSYgzFYCWYdjGNrnTZsUZ9XieUJ4qoJFo7S7tHuUGc",
  "key18": "5xUmGRLmQsFvxQKCPZ4saZT3gmenCKgNgzgfNjekhfihfSfQUoVrui3z8MS9AvZjP5HTwVrDnVSpkbBmx7vLsPYR",
  "key19": "2jMTmEXdf4MpTJbuw8gDXcJcS5G37fGhcNWYYguyv3khj2oUuD2aHetho6b9WMGpFBEKNMVqgTEffDqZ8xmvnYgD",
  "key20": "E89P5q36x1hM41GtwRWrnBfoynn8V5k1HL1JWxT1mmUswi8ustdge1ydgKnmrw48mmVfqA85Hq1C99gmwF46zao",
  "key21": "28Ani5J2syjNh7whtMwpGzAYGMrHW7HXcx9hkrwQ7CUUqVjnMkv1rshBCYmQMM5Guef8ZQZKxx1FbbnHF7uGMNbz",
  "key22": "2VxnaWkfnQUi4nujdeVrv4tVtvyKMbVRGFgmv5YVAivN1vYoQg1YJjf6UqmP2dfWJkUg3ZerDwuZ9FzJQqoN4LJ6",
  "key23": "48MQu1zZeCs3mTYKUYwq5dCG8aLjcDAC4BzYQdVUntjNzSh7EfCqDqpH5sGNT8ziuiRhdikRXE4u3yAuY5JfA5BY",
  "key24": "3DnQGYBgsQip8F13mG5Lfy6v7N7V2c61LziPmX5KycNzkGtXNF94sTcUaTZWZzUspXS9f6yPPmfhpEB7XZM4poW2",
  "key25": "nxwNLm27cAki9rb9UarammZaRdA5pGGL2FS3TCNw7b78bwwupVTGcuCEnBMC1DyHxEuvK9Eaj7GHkMmTtjywPeR",
  "key26": "4jVYypZ9cK4C3UBYzvGz3hsQBgq6htsNVSgNWNz2UNxHNoHt6se3Zf522dvYJbXoN5dZxhhnLgRsTB5ZN1MQ97CS",
  "key27": "5wAYp1ZpjEgKn3y4CCBJynA8d3zbp3bjhRGrJx7tDjKM27J8yTQuHXNdZ6EWtonLbxuS7txNQNXphw5jAjSihKdB",
  "key28": "2StfAcq21zGVgdbSWuUjQpbm7rpqzk32p35uRvgHnmZ52mMHVKLQwdHwuTC7eWS3tTyikTNN1S5JfxhARHEENLT5",
  "key29": "3Rtvd7JicXwQH9tRw4THv3PxkXMEUu3rjps5sYJr2pTKfTmpziHZc6MRGoeKBrRYbL7QmGZMErbgyNnMDwqNAH3M",
  "key30": "3Zngk8VTvvBfdccGREYxZVkuqkkXWr72DTr4shA93uWf7te9J7vVFEQ2EC7jQyXx9urQKwTFaZwbUdVutx5ECCGG",
  "key31": "3NstnL4Z15bAhwDS7rZvrb4svkkQXLLtL7HhN5FYJecXXxd7d9KJjApp9f91k8R5YYNmrvMNaCgrtFXBNmpQC18q",
  "key32": "35BTUV6f2kGEVzzHuh3PRmB7mPQ6EScfUVRuZN9jBUH3fhm6aLvunkhaHbYSfB5o7jMkq6mik79dhWSaJb5J5Zvu",
  "key33": "5uPCsJPNfULQBvQvh1or3SBHiHqY6r6XzenEJkYe3Lxi9pLYhumMxe1vuoxvAKSqxwbiCWcU2MKUXKn7kGKy8bn8",
  "key34": "bbA8SZCXuDywWfaq2dEoj9Uqsh78fh243Pj3FMsHzcWSRbHmCQ81zS8hLycMsu7oUNteR2kgQoNmqQ2D3T965gi"
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
