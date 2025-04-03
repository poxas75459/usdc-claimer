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
    "JZrfiD4rhRT7Ne6WxmTohDMopwiCuvS5z4ixJJNbkgjM9V1E6moNEkx5jagyaj3jimhXi6HUAgZ7Qz2k6ibgSCd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zogNfMtW13VMiikVckLt5oYzU8NjzCdLUAvYXbgFDH9G6Q9hDqn2gb6jGgUs86vFHcnDwu7VwUUbNxEp5YhELwn",
  "key1": "4tSGnb4CMY7SrwfKB1h5yDQzRnpJ4UmBPMCG2xguUG64TpURj2nBMrVokzW5BxPTWunmf9vMFwTy9Sr99Y8Mn8YA",
  "key2": "66F3zDR8VqPfavSxsSnVU1hLtWWGczzB8YxFGRnzbsiZhUqSqzXH1uqhWbfVtK1wYVkLQ5TKnrUP7KMuJFHYeN3U",
  "key3": "CmUTpsFYDCutUeLVEP4LCXQZ4quTcVDYVq9YELUu4ve4kGwt3Ub9AMKSmGQXMue48qVeVU1x6vKMYbnHzmFFgNH",
  "key4": "5oKX2myJwxA1FGRsX8aLVGUpo2CKYbwiPaQCwX7L1bLxehNL4Y2F4tmVWdt5kNvfwyG9UaPWR3rTJ4jM6tzGmTqP",
  "key5": "NG6Fmsuo62YXSFzkGnm1wrHirujiApfmzvEJ5TSQYw761ZGzLuhgwq3tdgPwCFerGXWVEGzGVXbBxwofkH1XGvk",
  "key6": "2A4vBXmM8AeHDmsLDsubrT3gNAxZ21t7f9jJNrSxiQhdfbqFKZdMm4n2RvLqjRxWXwwr5ZQYwoHav84UQZn7JmA8",
  "key7": "2pF8ndgTXdtfrd4ojfZyZjpW8uSBKeFgUTKXVBUFTg7SfJjqgT8mxCHMg1e4DYq2PL7qwaM3Rx3965DRMFw3VZaB",
  "key8": "3WsMvTNdM3voCfrX7gxP2Sz4GVbRjMgb3Yf652tdwBr7vUp75bYjnSE2L9MDLFSz9ct9qCfux5XP5XnP6DUr4A8J",
  "key9": "5usLr8oHqUxW8E4Zp1zCUe2MRVmiShruAPbAPriba4YPnXAUhSTo9RawY3RMURb1ZJBCS29yb93X8QzM8tAvMgkG",
  "key10": "4dMQf5aN3Kz6FxMUbURwNHsWAkK2PbQyBL9izBNf8WwDpgREzyA1pptGHAZ4opuh4wKa3nC5t4ysaAGHsX1GWy1R",
  "key11": "4LCTsKQyDBEg3DSLkt8bfiipWsrStJWfDPCwuGtwzTNUpwYEBNTG9zbk6VAsSeH3Yv23PvQ287KCFa1mYfszoKHS",
  "key12": "4siAruwsbc7kSfGWdL4rBriMKTfZtPQmV31V99VkiVdH2vWDBNJm4ebKrdEqDhHRKw7pSPo1FVfKRpb4o7PkzzH7",
  "key13": "4JYwTUftpzEJLAHCwcGebnGa9MgNyU4t4uV6aKHwphydkkZuRg8SSz6VHNJbEmMBS4d2oh2j3j6uGyD9T9pbAYQQ",
  "key14": "5GPYsCC81Mgs9USbhxWBY1rpkvPhJBR97xymEaeQ3m9iQiZiX4Hm9MKDLAKFvi3mT94WeszUBSsdjS1KFaPTNdop",
  "key15": "66VNdfTpSqiksZkuxwAAN8Pjm7XPkpwiF3rPRHEbNz2cg4J1fUFLxSiMdu9A9NagUizur64wNxK7JmKAn3VeeWCr",
  "key16": "3HbKDpa4KqaMEfoZRnaGhA1wQgUB7qGaWJtEuDhrx69QjxaTspWWLaXhmvKksxx7fNJ9d5ZpUh3aPjFFcMRwUt5L",
  "key17": "4C7j2sxZzSTwqHBTUuQd4fQsML6jNnFqgj99US3GfyuQRQxCjkaKKHy9ftetRY56FTaJ3bpWTS84DSVuUXqA1gHx",
  "key18": "4DvBNNRUSCS5nyLTWtVrDF6hssJZtEKTNZ2CBPSuhc9mEwruUbhvYZ4pj9JVFtQhjP2Gm4rkHmjkhzX446HAhK9j",
  "key19": "3BAoAkNqSYST6SuZrmNV7n3LzAKJintnPsM755hbyGHWwshABvNkgqNVhcJZ2cUQreZ5pz4SWu1fXu1292V9oQQa",
  "key20": "fXbDKvtDCEntJkps2bdTWjbYb2qjmnV3PvPtnwcFwmQBqSMrd28UF8x8Q5kiGUvUuT5MUuTWKNQwZGD9QJbZYqC",
  "key21": "QWuckZ93E8HGKjtnfBSrdiHGEMcJkpQsbGvcC1mPDSNh1E6qtxRiV7i5qZyuPQfmHChMSGkPfdTS2ekjyGML5F3",
  "key22": "2wcKahgrQG9cExoPLdZQwuVYP1acUSXexQDqtjUHqGfXtubGtzSRnePToNVErQAwHT4syUD1bSknrowxo5DPkAzb",
  "key23": "mYm2hyWXrCyEyXNL4ZQELVbr8TSsjstHdtnNK64PmTyWV7JKcSnXD1SYzUFe3J5FzpErWqHxFrkaxdGqJNtGrSd",
  "key24": "4bHS1nhNq6RVMmvkrv3dqaj5ybWfvgqHrsvHEbSDKnrKYwKyd1rHCWENeLDixc42xSfk5rDqT7dEdvzyzcnstVi7",
  "key25": "23Kpr44tHWiCsDjNZ6LJqJWubUciTrbnEXHGkNT4kh9bLirpdYd4WtugXcpPqpHWV4kcQut7nEmM3dqeUxwz7iBP",
  "key26": "HAkP4QuN8yWgvFg7Ch9KQNVm8CuUDZo2o8VYdaGcmsCehM3mmx1PBeA6AfV68dnjizMNUHTu2M5VNkqJnDm8GYu"
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
