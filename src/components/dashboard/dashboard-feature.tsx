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
    "4h7PHvuX54BRTdrJqLAfCsQKjkFo7fRm9fM2HDLAGK512Tt444KNnwjcaHNvbXsASq4Mn6CNPjEAds7AskGGYcLh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5U4LSnzSwTvtuViiKvhAoCf52PHjeycjvgXLq9gXgGAsxCjtTnLRFqhyW7ifehZq99HQqXURrzSj4fAEFNXJ2GZr",
  "key1": "3y4Ca6CV6GbZkF5FKMRyF4Zp2pi5u7YnxqdcTG5HRYwkvzLssSHWyRt2LvtwWQnkYyRwnpSu3JFhgR95Dm5pGUwx",
  "key2": "2P2DjCdNDvBERooct7cWyYyvJ9xBxwJL73eK3gsxgaTgYFA9jdUpGY9EgaXpexJdVNJjvpd4PvEEtxgPSLYHbNoF",
  "key3": "3Q67NvowPGDK4FUU8bCn1LmRpQQLw26i7B9pw5dNYXEUxo6w4dHi2LH43eRwD23Y7neVdYkfSWQ9T9dQmaY6GQis",
  "key4": "5qTgc6vQ6tUQdhzAnzsxv9ZSSnypCKHk4GjRCf5AuP9TuaR9sH352TjanuF8ovb526t6DTkXmvsv8sEAjUvwkD2s",
  "key5": "5T7yY15waqPue73uTPWzUyC6DprwjguiFQndMh9yiXk6AMQzJNAco5YXJiBENWmGxi1Fq5xxywsRvcpNVMizhBAf",
  "key6": "4NQixiomp8SqPfzgj2pMyWNsszFjLp6dkPPiAXqiM62tynwuzSwdgHhecbdtvYQa4iHegwL6uGG71gYAKFfE3oKR",
  "key7": "2jfbzoUzd4a92RDoEmpGJ5qPrrq6tWe2zf1mNyZG525cstBCU2672K1mVSgBXG5smGna4hq4eKFowfvNjMjkcpw1",
  "key8": "23S2nt53HVjv9zxwg5gcv8L1S2nECCDZK4aVMBnGCFAXyTTNfDfigT5iE5HuLEwMzbYn4m2xMDt1vCdNhqwW8EhS",
  "key9": "47JV6rSfLbk9AZU1H1WLzkEXTEWFpYRc3sTv1Te9N6i6wUfKZqRUAP4bzKG9gmcdMNkY4K7W75U9WVLEJpBzsG78",
  "key10": "4bB6itEtFqTBsnqp4PJZgZAZRCFxuEVrDCBJ5SJF4EBx3R1hsqyPFh2fFpWVR5REr9tVD4KjjGAsURP1xEJULpdW",
  "key11": "4hVUKuzCkeMcxQW2y2D5A6YTvE1FKpnna1yJ1RNHhoFMbiRYSdJ25uwrrGP1Efxe7Y7vDa8ckMjDecqkj2MNdokp",
  "key12": "CUuEJLaD49dT8g5sjFq842f8gVLnNg3vEqf8goBtgemxPNEMuXFJojWdLKEAxNU4va5APwG74b8J548E91gapER",
  "key13": "62MErWLeCT8wPwgSTX9mTmT6Td6gHLhVSuDahcFa3BAzQ7FimskViHdiNg4XApCn7i2prWWQmf975X3ezzA2Nt4i",
  "key14": "5ktADMr6fkUDPmgqaCiQZcjBSU3meUai2hDAwTbFgoiKZWKstqF1hQthcFEVW67bpejv3Tj4Tt2Nys7dSCT96MeF",
  "key15": "vxH9gp28WEHgHZxPMTebnqQKmTuTssD6pSYhjzs3ph2zef26o2BkSxTnp8JRtkYzyPK2XEePwgJWRjKjfe6ik7G",
  "key16": "5RJvurxXk3zP44GRbwHa6wBiXjCrsRiG4b5SsPWbva9gX1anFSsjx4khpAQt3r9mvSqk4fGb5h3iPz5bhGmFmguu",
  "key17": "9iUBSvkFdcqkibK7yAjZXkB7dw4oFHGmpfBNG8hzoi91ABYLqfcoxAWqimuPLz2gydx8XkQ7GBQ7fhy8gR8MoKJ",
  "key18": "4ubabzSQNrsPid9bGm8itoW4y2rhfEg66Eo9oLh5b5tSs2foPnwuKpExMNm8TVy2LyJ2xvKJyXXhsbmdtkxESWN8",
  "key19": "TnmS6GmUbdBi9NFpvx7We4K3TydJaQAvXFsihSGjr6m5vkX8oNnssMEPLG8s32mw2Atgm64DRVy3LjKSsGWhRu1",
  "key20": "4CrNYXXVaroPQn7zTYdK6SYepyuQghU6BeRPVZ9hTxkw4HWjFRiMuQ5WCsKJAAkw6KAqmrRfLCxYPdqVywtJQoaL",
  "key21": "3jW3rMW7KiozrRPw2mY8e2izhZKZqM4exuYRJntMkxUEdsq9HUX1BpobDkdjR4M1Jz9AUM8XA7AkRPFZXaBP3x4j",
  "key22": "4opqCQpc9gdRF9GKc9UuDyGWWbRqL3RtsBewkNC6d2TbTHoFzwGdeuz9BZPewy7WE8RWGwHvD63s98995EXBKvLW",
  "key23": "4oKahfYHhJRBCPtRd7oeVkJC9Yk1Uwr11feipKtNe9xXoVGZKo3ZvfWGgphuoN7bkfT1Giw3cdZTd2mRdqN9PL2G",
  "key24": "mSLdawMNtCrdi8o27ru3gQR7wpoZA7gnLjCzbQfB8H1ejXi4WCQBj7pARfrCYfb1JMAzG4PUem5baa2UqEfvwz1",
  "key25": "4GrTQxuP99wyCCd24uTGjR388MRcat6kVfXPJkZHkkWPc9jpSmcGMyqQ1q9sphXTSwVMxUUQku3a1k4WeVYUnT1f",
  "key26": "4oLF84aerbTCQjU8rLfTAVPw6yp8NAEVBdVaL98LKXDhkfSVm6ZLoE4vux9bo1hBTqCv5rQL4s3uBFvc4pUWSU2t",
  "key27": "5DkNuqM7iVAGiU5EDT3dKE8fpF6NFCdaiJucM436GnDsmTK7pGgdXTubdQ5pBCqtMje5xSpccy1fsC2Vm5EtZ6cG",
  "key28": "3dCqqtYM6ezQYW6kest3KK3onuYYszvYpkN6qLQQUGM73iybYbX7cfZy3xqHAkgiDq3y4GyWaHZZvvja1sUhPN5c",
  "key29": "4vEvop8NwrbfyRyzPX9E1ytKsW2vG246y85Rnvas7ueRoKWpxQxHvMp6uqdpgyy56RJQAiKnEgB9qMve5qFfLNTV",
  "key30": "2W9iYvj3VSxjFpbbti6kXmCqL26Yo4sWdBK6V6ZQ56j9MkzReDd8h8eVQkZxXLhxLhxU6eP9NtqsY6bHc8AMLU8p",
  "key31": "4HtG1LBQeeQswhJoG8JKX4MQMpEC5ZFeGSZzVeCkqvzB9TLix1scGWzS4nNpHLBkfsJJN6qBj5fif7REpsNahFq4",
  "key32": "4LN7ES96K4G9aFL5C85HmonxG53rXu2MrfSFg1TarcM1xAM6jzD6S41eeWE4biU19sFefvVMwEF4sbbMweGHAHSi"
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
