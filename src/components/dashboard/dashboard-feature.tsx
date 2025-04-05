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
    "4PnLQsdziPRdbiGnLkYTTFZhQXZKxCmt3vAhYPrSQBcqzHbU6AzaX3jKPqF1Q4LXuiB2SNnkxmBH8YG6PZVWvRv1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3L3Pjtqs371YDYCkvXwqenZpgfkwBmJyS1Vm8JxeqMDwp4BBBGxrs4iCd3M7VKxUWB18ddVMKm3WUheZhYhSEukW",
  "key1": "3YkV6caHAXsWkmsfwQG1rhSTs9B1mCR9LkW6JTViHoasKxZ8PDokGQmgndkr2ZoWwtn6icPmw6mvXm4MoGQRum7J",
  "key2": "238FiGrqyWTw4yNMvHZ76Ya41uJXkiXfbwo1yYFRfSbCsTRmbDLArzNSRAWnz8KrnsoV5wdArjX5NyBvYWxZwuQc",
  "key3": "6XsxhrPi7YRbym3Ls43qAqH1yxdY4q5eSUiJLfBQtzqeorpnzUKcS35xsLyRTwPJaRWcSeE4bqk3iEx3Qd8FpxU",
  "key4": "5KxZvuHiR5NffhT1jajEVbWqCDpH2xFzsU2e6kLMSLsEp1WbwAhdeMxmgM93kXQLxTy1Xy1GYEdkb6NeYwEEh3si",
  "key5": "4r7fiQWJadSt2UUzGFnmc39X2j2Vc5T3WSxyhiguUiH7oRP9E2PeCJ8StcWPxHtGvD8Dbi1bij4J3yUVFGUUCQdx",
  "key6": "5a2rxFPyJEu6NMzu5FEodC2FtxaZdRtFnCCssMH141Q5m1BqDzoGj6kxZWDzdc8bNoKXLo5UdusH97AdYH2bUJzn",
  "key7": "56z8gZeb4Fb6gYvwoWTMgtg9Ycz481WpYhwchtJdaWeZmdJqfC8BdmWR5PQGPAWBJUxqjfFFwzS5cPjp48fLoCcs",
  "key8": "5jy8NETkx7bo1MUSATaqqKSXA1QycdL5iagoALwXrCf5cPvwRC5J34ePyy4vSGJT4N1B35U4fZurv8ixVJq9yVFz",
  "key9": "59bpcizHrBNVGMTbsHTwLGaVqwCbBCsr4jWFqLe4dWnnNzSgznBFCsL2e1XY5yvdS9vcvZndEzJttpWpWcQJXyrS",
  "key10": "56Rk6apt9CSUuXYm6dmzTcGkaEjPfreQNh94euJDcFq7SE5xs2zDa6otKy9hSHVchURiRJRbQ7mPRr6jR2UzDDhk",
  "key11": "3d9EcuXFJRJsbFnJAbmShXfLCoNrVmZ9T1DwtukEJe1wvKr3uL3yNKCN7iap1pVWARSSBfJA7RxTCBuEbaeSCDbr",
  "key12": "5NJyvD3b5fwCq2mQSxLKZZASJzqntEmwqP5528ZdDh85gmiXsR6jJHrGG6zNvDfxjz5ouDKgut1D4bMotA1RuMB2",
  "key13": "4AjxP3cFGnCegKVDEwB5HVrjj1cMKbBKjzZNfJitNYj7UBpSLcHTPnP7w46QHhCXzUCC1r77ne4fWxpcyS8Cm5jV",
  "key14": "2yAojFpiqsQdfZMB6SjgquXt79VEMJaA1NQ1iokSLoHB9dmKPjUi9otKWqWnYnnfVtUiFmhcuuexFJcyf8bZy5Ed",
  "key15": "3rwxHQzSusCxNXEFTrY6FvoeLVLbN6wc2RuQPZMXft7xPx9HqXRKFpbqkQD6PjQXTCRRbLN2VskbJ2ckYtEqipic",
  "key16": "2isoaPPVunWUJdLzEgYb2dcAGVEGoQJX1ZDfW8DnLwzPFb3ywkX8h8Av61aqPYjRkEGPDssUHYzxriJNbVo8Dtst",
  "key17": "2yZ8X2bqwRUn4Sa6bP7nviiRqSdtrQnohcTC23vuWsJiCnVE32QWePkSM6cFf5FXh1ankGz7dr85bviBYtNjGJx",
  "key18": "5s1DYT8ei119WoqHwiFY1WKdWcNqCJYFWfyXwqgHZzE8xVV5DtPYM2MBqY9hT9RMorKgdu69JRXngCDxVotUxJQG",
  "key19": "397P2RxWmUPwV7GYaz92fA6mhaihR9ZxfNN9KoQr55ojoHNdo6XzHfwyxd3BFBuRwYCYYcuLze2LDpuZr1CYa89r",
  "key20": "3PMin1dUTKQjqpMkDyUW1XkhMTkzn86yGuUDjmPUx19wKSAhdWmtiBJ6QTDmSGd1Jh3TDBr8iVkja3tZRiW7pmNW",
  "key21": "4yPTzHezovFteMHkoCWsCyr1kcJgwMuQKY4HLiqYcsAaESN1yWNZjhze2wHZRvgMWyoHTfXY5qtatAbDAty6rR5d",
  "key22": "VFeEc1YzMaAEbP9166fWJnfdecKXYtcGp3Z6mAQv9wamDH1Leg4FJ972PAKA8MHmxdXcxdjebcbcZjvDFW8udrd",
  "key23": "4kpD3Rb3GenYjYepkfi5Hn7DA3tmFkWw4ykoZjUUGpf2XHCMu7v6gVu18NJ48Jrv6HxWeMFSkRZ7JHVZ2nkDLsv4",
  "key24": "3V39vLsykH3NCHaxpyE2ajeNWj9a2cT3Xq67o4Zh4YuASP1dzx2hXXYUAueT4wSU7XViRRoGTyCD9TbJZbgcaGFc",
  "key25": "DbM6yUJWPyUCKgfbsh4TJCYEKtt1QUCtzrrGnmbncgAnFsWdX976enA8E4LgbxewSj6sqidV5QZ4HTEBUiyGtBq",
  "key26": "3PithxSRuXmewHsBqhuiA8xbG7ivDADCZJjWK5F8F4a1GKJpPuaD8GVUxWBh1hjmc8AqmGT2oRHK4XsHtDM2dPPY",
  "key27": "2ATtsxpRH1BtcoodjRrML8PebPgWWJykJHGGoV8x7pszg3iDzZRnpXbKk9FCuuzvW2otk7xfNmc6jHsX6i67S9vh",
  "key28": "4ZVN1k8gxZ9kn3a5V3WJcxKiA6GuZfZMjrDZHCubrw2m5SPSCYLVpowWW5VCWA3cFk4YzMYDT3iqKGnHHa9CSpvZ"
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
