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
    "UVCXM1eKybbUBdbPawRp5EQBSiq8tNPn6CVWN1YSX5ZaQN5gNSp711pXSXmvfpoJTwH4PfzCGaeKkNSZcGsAePP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kZ9F9iuia62FKfMzt7VqH8bSgJypMKfqLgKtSJHrncoZieaTZoxgC8dLYyr935zu6rSCGHXobCQDMfJ6Q2bmD2k",
  "key1": "5AioP5drSg1W94AhLHKVxhjhJnNcKMvSw5MQKK7y2oWXh9tTpx6c8KXCJhQcitiAcZ6VSmQCdyUJNWtDAKPnwu28",
  "key2": "3yPPPfZbS9Jvags2DQZkaWdf2qmrBZsovSY9Kzh7h7RYRYuCzeE6jNoZo28LEbzGp6WErFwxpfCRtJZsFrFCzJSS",
  "key3": "VsD2u2n8bs7cwtMSmrPkZh4BGpySkBoUkBE9eVStRYe94uWVxmVv19FEtb2vWLR6AtT7Y83uoGsU4qCEviZeeU1",
  "key4": "2j3ViPJTCT7MFGzYj5bLuVJoxZyKgiJ7AbYu6hroGXH3jJNUuuw4gMP7thHqsUmnqAEtHAAmciegMMmPFdztbViD",
  "key5": "4H7A4oUYbJYUiHwmQhKSjPbqgwQf8XyJ34v81TybtSTntaUixrSh21KEcwYgC9nEt7Ag8J8z7a1WBqgc6Y5Z1iWS",
  "key6": "44ZTx8yMa7aBiE5btRsd4WB198eGP5x7dyAMRgBb3hphGnbFzgMqfsUHGSukVm6F5XJhr7f2RVLFppiGzXYguNwp",
  "key7": "FwcCxF4SnYGvst3afU73auwMX9gpt4nH7dPTvP1yqa7q65yY1cwCVFoU3p2ydVWD9YUNjJU1R5h93TzBguQ3J6k",
  "key8": "4kGQZvYJFpB3etBb8fCWfuJK3Xsyo12VRv2DE6nBNSYePCQuQkf8PiwVXtbT38V2WCB537SRaBnau4wDZie8wEr1",
  "key9": "4D5xdYsw9b6bXhuLMGxQXRMNaozE26PJnsPJifeBQjKCCmLpY462XXmXEFQKLaEtSTe3ng64t73L6arQ7cDzEcAA",
  "key10": "2rWhUZXXAUC7RczVd3aqhjvZutXdKMGRwMaFU119cCJRyrCdGXzBkSNUxsjDTG9zjGpGAzcprrUdqYB9PHn2CkSH",
  "key11": "5EhkACPtppvPfnXTZqrPwWH9R2y6UgHUWPPL7YEZNPUZ6f1zaLN7oVxs4RbkfBhP4mpXTsUn2AEpcFVP6Ba9xLB6",
  "key12": "4HFR18M44QK8XDAZnGJorYysktSTmKnz7y9MbvFjYddQAybRkKP591ueLQ6zASmkXq9HgJ1QEqz79y4E5QDWbW9n",
  "key13": "27SrvuJknktUMm6TEhfvDNHqkwhrRzgRtuuoYXjXkbsj4g6wbY9NLjiPB1AQ4ydjgmkvh63QUhzBUQ7eLtZPGLaq",
  "key14": "2Eo5npnUTJYuckBQDQ6Qh2Xrt1xJUSbVRsCSuEFywXAzcanuPd2cWRmco7TMqpfz75t9cQfdrd9msJymY6iut9Y5",
  "key15": "mNczSd5JvkMJExDYrohn8B7JkCxMueANmcuPgWDKULhcL3pkyjZSmGBubaZi4TphxHptdMSjiCPnoaF7D6kZF4g",
  "key16": "2ANP52P7w4FXyLpYki1PEWRUxqwFJxiuyFEsSR3a3KMX5sLjzVtEM29uqkd2iJ8vtGRuQRwCbV41PngUVHGM9iq1",
  "key17": "ftLX7r1fZMfdGrkYHXU3X2nKGrejf2zWWf69JeLpa8zG5qSUGmteojtukCG5rkn6HHMW8gXjF9pJeqNFzt9voC5",
  "key18": "2NA7tE8hH8c6gsjFcNnRE9T1GgegF1sLchJuqnLCrvBbyydY7z2e6PCHFRqr3aMP4npmjb2xEtZGuippRK6jqMBh",
  "key19": "4Z4zpzNXtAZEDb4BhaU5MVAAG397NXLa1kY2Logm2Hd3B5oQiLEuAmsyiSq98BvgCV74feQEonwoMwgmAZoApq5z",
  "key20": "43TQER6f5iagYXKif6KuGxhnKHRSqRcmdWeMYasnBXSmV89KdgCRNC1snosp8qDUCJJVjtA5NmGa2bS84Hb7KHbM",
  "key21": "ejFZfpDMe4wXX2DgGveUVEUeYiC7g49TSVZSvE1hNnTskUpHUxQN4LP4tca22uAq99LKy6HJh6i4N5NJvLcpkLn",
  "key22": "5B4U84YvsfmWCe5FWUspgKC6FJiCyzvfmgQXHq3zZkdpcVGt6j15ZsdqDXKUkHCBfEdimwKnTPwDAD6syrRu9AQi",
  "key23": "3srg3yVjxwa2BPG6kAaznnUCLRa7DeXeiL87YiiRXfwmAPVGKrr2GQxYfe7nwvrpZh8XzAUGkYhSj5BfYwcRZfN9",
  "key24": "UjV5JVfC1reiMUPQGuQDrHxxRwQR1TG18AomUh4HAn2No7VZJZryKD9eMLr9jJrQPtHLejNUKgKM5zQ4QxggVJP",
  "key25": "3v5BqjLeYs6DFRR68eBj456MCRVndnqSDRhBDUqYG9jXpEA6VEKXiuGVQt9cYoCCZaT3uxahFFd4i6m2FQS3h8HR",
  "key26": "sXdhL9fjRhPy5javMo2yycWqBpUt9kUszuMseN9qksJcT5v45eG2Y9LLYXFfGKr8jQ36UknMUm6T7HVRL8NXhAE",
  "key27": "2hyjrRPxw7SvXNtVpimR9rzWTZ3kRCzv8eqn8Zon2wFcfZswJH6AL3363fFJ7iPfPAg7qLcG7QcQ5e9439Fmu6Ao"
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
