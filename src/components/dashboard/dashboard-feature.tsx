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
    "4iCkfsDy29feFaEATGLvM1Sg1cmxayFCYkX24FNKcNUAMZ9HtBfsqWGB43aYmYvP7KD6BAeHj8zjyJr3Ggd7cNhB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CbGBzK6xxnUuQRKgTnoqkW9w6degwzPzdqQ5J55BBUCHv81E7izzFgQTLLLePeTX5WCXcpTvBXC6NkbCLUiYBTj",
  "key1": "4yMtJomGRCCQANFLjCt3GVjhcMHtKDVKgK7jfx27qSqedZsQxk7obqW2a2DibWvrnFBv1z9VK9bi5NCRxyKcHx8m",
  "key2": "46Sk6Wny1BYpFy8fxe3WLDmkmzjMyykk9N9kGn9scxhRwKRCZo7a3jQqzeqChfSVg8sLvtMc5mXy9rCoUD1WU2vd",
  "key3": "5yxAtA4ZQSSQ7ipcQbd3bG5ojLoLXUPr1tXE1Jaxea9VgE34RHNyfkVp7LFCKFBZDE8ggL7AjpcS79Ls6xhSZ3J2",
  "key4": "4z6GDFibGm5eJoqyCQQ3qA4busJnihgkfDPuAWfYA4wTwnck6MYKRA783Ro8gY7sBqBto9VqWjV7m7nmofWJtirb",
  "key5": "2N1xK8PS2SfyfxsmfyH5A4aasQj4sDhMmGNuJdKvdpW1XqAuZ95Qf3DMG2giAEau2NcwUPf4q8cZb4YHM8dgxb5i",
  "key6": "KV4GPri9oSLTcy1sdtKpmSovjWxhVHRSQVSr1Urx16dJw5FKwGvG23Zu1CpWTmPsS1VGuVwnFEQcJZPrNEPB8QL",
  "key7": "291NCjcFdJLvuKKv6rneSizbEuD9ZkBYC3c1qUjZX92kTqaS8zMPGRac8ocLfUwr1zEmpUSUXbry3kABsqJXcJ2a",
  "key8": "4TBRFjT4ha1CdzqvnCiXeKMgSPqeoKg4EWFLB8d7FEaCN3oHTfccjfLs5ibhvAmQH8Jq5SAWNgdHsBZ58P8KqdBx",
  "key9": "3akvYkQbqgXt2aQbc4F3ZWnveVCi6ReXdDeXKRxCEtRsWWyDLnthYPTPK54rK9bRWCf9g6LETAT1uTgdCRcBrz4b",
  "key10": "4rFPYfW8Ehmx6p1TideMUrWwwMiR5Dt1ihBUr9KfSjzQrw25UQWqxYRk3fU44qjANMPRRQzFq316pLW4Lai9KPwQ",
  "key11": "ziqpAB1aj9LGidmdQKnBkFHexMzjeJ6Mcgv3s3h6Vx2USzFgrZdsycqyUXXTKHpr31gTNk6buS1AD9wRRsyrdBz",
  "key12": "2rYifxCRXDtjy74zx16SxPqfYy9LoJcvD1GGMJHk78xJieC9FLHfzJyma6bbFn7Pz7bv286DxF1aiJBSoqsQRG7i",
  "key13": "sAFLvaJ6quMKQJ6FXtUTyXZFx64zurVGXY9DhDuC9Egfrk8yKhahm9r2Kb7t6k7xv5sYeeBMNi68uwBSnvHQdBx",
  "key14": "4eSJ8YYgUs5mzsFGauSV43DkqNG3qeURLWLD2GCiqtr9vhUg5q1daUQqWmFKgj8h1t8YPSAZEaiCjkN5Wrx2bBSv",
  "key15": "5bg7mRiRos3W5TeQqCeujdg5TnYHWFC7TnFxcAXyUQdYGL8AFp3UA9qWXTZ64cFDEEaM68nkxzrMxyJfVzfHtSus",
  "key16": "5UDAEtR25NyryFEu9CGTpgpkpCYZhNX6h1qZgENPnnWyezMqBTk26PDFm3CH3RNGk3FPhdsQLoSBmB6rrydmqHuF",
  "key17": "2Mx461ehi3rj9WYRhLRB6dB6sn2tDZJpVGUMaZWaTQPbLhjRziJqx8B34FRS8uDtsW4yrc8xSFSpVm958AFiZfCF",
  "key18": "4UigJqScjGaMqopnWiFafkZdTMdz3nwsnay2XK4vhsLoZrToQnL9NGk4dAMzUcAJ9RKtK8xJWEjASQ9CrH3q2rKk",
  "key19": "2uFQj1k1i4vhqvKf3H5EE7ZYbpCDVrQRxPBpid4dXDPcVxWABx1wt4gUvM4mDMPfTHTNQ8EpCXStzMWV6q3Z5R4z",
  "key20": "pLuKJWpVpothxtUzkr7LZogNGd4Whe8L11UtaTFmwphLHa7onCR87Qs2tTM2hY9Wq3kzSBtvXGdUEqyomFQjZ6j",
  "key21": "H6HSN7YbtT6GKoPfncqJuASuoeYXQpEBsHQwv4iw8UcTyfw4zjZeTzjK2X37Myt3aDCFFRBBuEL4tyBvoAKEtYR",
  "key22": "MjLqVgXzdapne5f2anHKgnRLoPdDhn7gZMTEceJUufxFR2m6gyURtGcGjKRcMQkN3o4c4aP26LDgKkSwd1mNbEk",
  "key23": "59qwKKJQhwVvbMLfVNbFXRsxzC4FVxhzpG6j5Cos2e6fNb4bsVRPiZPaYcSfzeRZDbEGKpdegtVKSjSG8S8sPcHq",
  "key24": "5ELgksSec2hmm1mHabmDeiCUAv2X5uY4NP4f6xYN8g9HYxvcPLeGWbwj13K1tjbNdHCg6Secf1zQC7y8ybQQcd7z",
  "key25": "yQZRGe2TcZyjgsqYNM324gsuS5RrC8bmEGeXNjgVmgNR7rANWi2pv4D1eLGBMNTGAxNpfsHCzgREXbCfEhszv2y",
  "key26": "ociKVPgVDxUX76u22N1V8MUzbeQXjEHZw91pGc44BR46WmpEPypGKbRkeUzDL4aHiurgMVMvuDQYrVJK1nbfQBw",
  "key27": "21TT1cyvX8QePgPvYVWvRtp1GpiVf6wXfMngqXMcw7wpdb3Bixr2uJHohLmw1wftkHXGgAx4Zvpp9Kv7UNpGW9pa",
  "key28": "54KxkPa1cPfiUxPkfGLpU165nfEN2C7Z15Do4yNpM1Pbg7GR52V97o9Vv12Tn4Lm7BBgUPkepCztUyAnjPiTaffN",
  "key29": "3hz44pbCnKr2SbCVB8P6FCzf43XVQQFF8RweQ1NhMfsXcBqkeu342P5p25DsWbJAELeuBWz3CbX5oPPz1Hv1EWn1",
  "key30": "3YWS83ej3J7Kt587JnZiynrDQ8w9Lna8apRT3GnPzJLipFJtF36AQLLs5kQ6ub7w5UGaz6fm79HDB9kixLccSi4w",
  "key31": "21ZeTCFEUSr9iMaaDJnD4XoeuHS5RBxEM7pttfpXjqd872m372WhV8XahJtVYvpupFopajWGAg5bCxAxApbD4a4d"
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
