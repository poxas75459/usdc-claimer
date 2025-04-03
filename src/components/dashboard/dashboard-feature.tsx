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
    "4oHvWqzsq2H2Zb3wkWM9XmFadFSdVb52UMTfrEhoh4LZBiB92fSG7SNiLeDypB6r2TioKp9yk3XR1WX73dgdu2o7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YLULiNktgfcvRZNiKab1J9rbSSdNyUby9zr6GYPJafgDZ7pcbsiUj4GkXGVC4N1Z9Jy8tazXYWG4FQs4nQRktF4",
  "key1": "4m32dTSnX97rjRLNbGRxNXfiiA9dsW3vKKY3njPaxgrSFrgmXyPysgZMeTMJTQjhFLrSLMUc2fSjCkAF6RjDwyX1",
  "key2": "3SfdkCPoXhbcxqgDeNC1ori4MnduTqSyyAkXVokPTuXx3WaStKUp7voit59611K7Y8dDWT6wrYT24yQLdSQMyyqQ",
  "key3": "DansQ9roTMCvcJvWmnCmCdHk4o2HL2bsfPgRszdw4UeAmPx6QkA2gyngQ5u6W13ynoskJBmCuBkwoKNMjUhb3Sh",
  "key4": "5xnQAL5LQTTEpGtVEa6CR4ZmLsxU5aRJG5GKeejV1Z1pibgrcdSeedsaeP4F5qEdg2Jye5nrwsPdWCPVHA9ydvDP",
  "key5": "rZV2jGN8GRPfHMaJqDjefq8heY1FS35Gkf7c7VDABn8Jr215kZxABSP1oM7vTSYJpnzYteMVWUjTQyR3Y1WNorX",
  "key6": "aHxizpysDqpiWGw91gCJFXx9MBVpxfUhGXkixRw8fKAJhJPRZhmrt3v7EWJYaqtmLdNUXicXgLEPFiwovqGPwNA",
  "key7": "2uMY5DeugePbhjgZqt1HrPhTLTTCQJsowXfaqCCKt2CLLoVSX9f73pGYq2DHEBcDUUYRwPx6pKjxdBkMYVAtsDks",
  "key8": "42qGcWMsZdgCKt5eRzz6vV8Nksa6mwzmfmniYNMEzNhEmjWe8M58CsvnPAvNSjkjBCE6og6MJpQUoXYfw816SdFM",
  "key9": "Mzd1urx8FDLGyDMxBvZMhr6pMJ13fNUsh4wLuKZA2pWUijQYWW4hVXJeJ37y8axL6j5iBikFGH32yw9VFoTv44H",
  "key10": "g2YHNkHe8jbhBnKHWfo3GQBxWCgM1BU72MD7tRqCKMZ86YcDZMLL63YqvudQo2Cv9AYkkREZtpnhrstxRf5jMyb",
  "key11": "4ay4NvYAQXnQEmuXtmMhDyeNcCHGpmmyywg8BsuQcV5BKxbz9HG9vNs9Agdh2FwRDaJhkaXV993vwCi9dR1Rpuah",
  "key12": "1GLDPPSJgq7vJ4kp2nkKnyjnX9SATce11Zc2VdJvMwo9FYGLPdgzUziXPCBFtai5HVisVz2NPax5qyk4KvqwF22",
  "key13": "4TtZ6maEXs5SqxGMCZmtdVQYycqJPBPU6uLgzC2Hj914wEQjfLbcmvCQY5GQprQTvwXUzxBJ5zAE8HKpZAaa416P",
  "key14": "4hr9Rmt3A94chKHff3CpKFJ1ibyrYczVzE2VsJGABY6DBdzbERGyq7v16MgEYuYhQvpEUdRwnRiw8giWvJwn5Bo",
  "key15": "2s74P5bfaG7mTXbJJhrTe1RHLy9k2PNjz8fHde4XVJhYMBPndfvSNc3Cou5KEshnxfZTMpHFkQsCRPK4YdNmdP1p",
  "key16": "25v9cX2Gd6fqihh34LDEMx5CyfC3qAF4pXUF4NVuHTDQjbh7wZKXaPzJ7WGt2oMj5dTFw8sfhbdNNNxFoq3J6dGo",
  "key17": "9h8QmcpAE2sYNrzj5BWqiwYpjV84u2L46cxDKtVQiwRuVkDb42v8CzFfThSHvTQyJ8XMLhCdV3gKoVjEZEfEJSa",
  "key18": "3n1YBAjZJzxgRWL9AVUSegCaDFEbTMbupDwbo9C1kzjrwDvFGWKofnSj552JG6bVg4kWVLRymi5a1xdZySzAcAim",
  "key19": "sn2TqtjiuF3c5eSkzXCdEuZbt41qr5H6bGhdkd8fWqgZByurBMSiPo3bH184LeL2zFwxZeYhQ5dsLyzGLTq7hxp",
  "key20": "5JhS5Ffrihqn84RzXMHebehxNPKSBMn4Xd34vuwxTjoqpz51uWdJQZgk7c2fANUtY1RRLVJmsDxMs9r6udqyvrxz",
  "key21": "3XCCscML46WgDJHdfMhdSx1sTUGccoWS6buXpnLaRZ25HyBDmPHQNYj3Vo8cE31y5KmdidiaQ7AwL7cwkvLd8qe",
  "key22": "RQq4XPhEbttY4RZBnn1sAKNZdi7ZyBeEmkyKKuT9WdCTNZA8DXYxXU3cpeZAaYAfTsEKvnPB1LnaYbwhT7UaxPX",
  "key23": "HjSDgevrZ66uQw9szKQPZgxXtLTePSy1X8Eo6QTLmfpWD7BoTnNU8rpTBSMu5RGANVtQdNwNPjKT3aJG7YepjhD",
  "key24": "2xdWXaBfoiEDXaxvUVq7Yi7f8gTNMgnfbnZAT5HYrWh13P2zKAKhK73YF6Qedh9pXLrX2RmhyDk5ZPsaK52WE6e8",
  "key25": "5NyFZnBH27msxuX6sGaaSGUmE9F18i86G62dWtxjLFSi77Zwn6MNdkVKuM6W94uXPuDmA3wNUGeUYJ5ruMP6BH6D",
  "key26": "4gpje2MDR6geTYX6UeSxpcxMV3WvD9nte1HhbuWqfU4FsMsZ6x4gxKeZiZLL5AhgZg3NtAchYDi6QtwETpjAFiod",
  "key27": "UaC8fJwSyexriG8qpEGdvzMGvee4SiibB23Cga6vDbaEsFKTosgHCXbUmi82vRQwLXCNb1EiGdgQc8KJo1Zzqiq"
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
