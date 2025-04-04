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
    "5B5CqpmdGEPLF7kmcr68ygRTXcEbjYWwxywpacr2Wo99kjFFSDrw8jyRorghELPM9T5EM6KF163X2N1qKtuNLg5S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GFUV8Bcm1b4u8NPBeZNxGyyWwFg5XwzJWnSwHDF13HA9ntG3TD3YiwBjfh4Jr1f1WtTGnQUa75874UZLLmpH63x",
  "key1": "5nd59RbCB7JdSLJjX8diZmFWsZD9PE6n56fTwcavuk7WoWvGPaFdXFhpzTs7ZMSnJeigZG2Z3xgJCypvffiRNXUa",
  "key2": "4TXtjTrBqxtmT8zwP74cToqo8gcX9SXc5E63VJYxwFdgxFXZ6sXFZEJUZRCTajTnshD1nRq1ikjjbJbPwFvHNUcV",
  "key3": "5fcVfk6UzqmwhPaCBPKFrgtR3MVuSqekhXAYy2Y9NZgdCNy2P7dTEiQn6ZkEFTjE2K56qrF4J2NHova4D29ApwH7",
  "key4": "JBY92upPRXCfwuByeQ9c3oErdXnbynHQ3RmZEKF6CtZCnvaeq56iNvKpDKLeWnpqJLXxCpQhdDCHaDYezUSZEv3",
  "key5": "5YQLRSPK25AtT6Bi8fLnJqWUik5i44CemjVpsep7sN3p7DafntGLvs5no8JcXboH1WzNKSmPtV1BzgtebtjKoAqw",
  "key6": "Jy2p8nV6pyjGXEujPvSUgcsHqqEigqKp6ZeoGE7FiK69GdxeiUE7doNYGTs1JWRY1RfGqte8hStQSrPAb6fCznf",
  "key7": "dQoLochY4HfMNhdaNxGDtYk5bXr1VxN32uzoRLLjairrrSqygPGUFM3pd69y3C5dWxw6zYiiy8EcyzibiLPpD6E",
  "key8": "LvKr2LQsJrQzkAiTqBVFy8V6W1PFWgn6rXziVvTPv277zmJo9DViD3fFwhLEtp16oDrjAFLMhYVbvqeB98vQvxx",
  "key9": "3gqg6b2JTd5w8STfME6GRPUaEJHc4GXJ3VG844VcvEpGfZ3JeGkWrjQdbWXFy2a1vkXz45yrwu8VGA1ju8xYFosW",
  "key10": "5AXSbe5Jku39Q3gwUjtpXCpMxA8tZiUX9X13n2VEBWVs64cfa88noAVU3YmooAHgzbx3PnmhqgQVRb52DRCT4agX",
  "key11": "2ReaJmo3ifzR8Kz8qPAFYcDZ7eahzJei7D2MFZxGYq4VRHbVHDgctJeZNbEqcKdhnRHYYiRXZZq3rs6oa7p6FeKo",
  "key12": "5bkTu3z8nNt8U91LpyAi2pEfAGE56DngHtfX4xodDJrdn5aB5vFuJ3CB18izAEha9LcMvYehCw3egu6NYJT6yp23",
  "key13": "56N6uqNz16fDqKmADxWFaAKVEVJ8B2jLv8Vkoggim6QymNHYZCKpEZ6HKW94KL8bb5gUdKA4rouEaGSPt1ATDWko",
  "key14": "3hv5TFsBjrwFH9BZUs6t9pT74trkqQcxcrEzH67WW9DqnXQUhnRQedKow79WwtA4rreRRiiBJbWqCHctW53pjpEi",
  "key15": "5jVVV3nLfcttqcdR2JzanWLpng6bHijZ48grvAtfrGWXEUwW3ajCtFhNagBN5ApEgE8yyxnzJaBRNTR6EpQRq3mu",
  "key16": "4XgABs7Yty39p7VDQXrRZTAfB8DFnNa47fStQyybMGAn9aS1ravNJ1yLJbpXKes5P6pknBeAZkuQ7TKDTfTQ3cx",
  "key17": "4kkA1gMpnY6mQ6gnhVA3GLcyiQ7KaC6MAJDdPTCUaJ4LGJsMq89i8jrH6a85LhucMekxFrTQoZYhy743pABqzFDy",
  "key18": "1u9D4cYUD5tBvLrVnq2zCjevqyppFsWMhMzZjEQZHHj4Z7mgJr4HmTtr5XFDtYYroutrT7vP4b9D16A51JH4DQe",
  "key19": "m7ztH3e4HnnU3JmA1DSfz4mpz8CXTdhQa8vvMTfZaqHa7x7vU3DsEYenDbqFCcnVPEY4e5f1rMRMUBahMqkc6by",
  "key20": "4BVT5i57yX2e1M4x3m3ww1MBSuDuabdXoMKA5u5RMgB7SL5T3ecBr7viGbR17CJ6q19XTY3D8qykBNgiBvX7YvSA",
  "key21": "42iTW2HQMmHSSSP7UyiDrKYTQhmy3WnkmaFR6mrpR8tiCLWJuMBxHxndBrnFgf6AAXpY8DqBGPw4MoNvhyBhSMEp",
  "key22": "3kfm5aB7AM7EC5XCatzSbjBLhkctAEhyTbBkP3vmosHanKjbCMfjr2aXahH2g17iaPqgeV1t8ko1271r3QRHfEYj",
  "key23": "eBxe8BFtr28DhMSbeMi8HZBDQ2MSdpbf5sJnu8BV7WCUgLygdStMJ6erxrfyxRPYzV1inRG2aLPUXRfBp19hwD9",
  "key24": "4kubXVv2SnTKmTRsV4gFqTwCfnY77J6Cu4i2KLEhTXHtHzEnTvFDyShZvw3TH7sKYyb22oN2aPmJqyr1vM34kSBq",
  "key25": "2jqN6ouekC347rwwHW1P8soZCBbeBPZZkYDsWcMnCMbGLbn66UWCDvaFBT73cxL1c4CwsN5Q6JZLCgBcVPttJGee",
  "key26": "4TkhMhxoJe4UMuEihvHWctNPNupNbXGnYRFHzUPjjbCG9atPsWXZ9x3hxPBXaHop28DwQHLeBrkmVWAy7c1h2mAQ",
  "key27": "FwVymWhkveSb9QnQLx1waFbCfYLRGMjtsjjGUqYV6Vf6sr4BSCAVpWHAmNaWjqPPMJvtLQUGr4ETPwRRgv6F9Xx"
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
