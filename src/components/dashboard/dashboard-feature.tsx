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
    "fu7CrbzBMT3WNTpvMDasyB5NezHqACus1Nd4vDB6bzE2hRnemPvEmxgDLkbQHpzv2HQprLr6TEPHKtFQTt8T19Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Eg15prYBRuQsLBt395PC6CdNJpSyJadcwva7Xpp2mC2e9WzauCTAhgZZTnFWBtg1M4w1Df3uernaZjN3evx99wJ",
  "key1": "5gV3NypikJtcQXH4sRa7fwKf3Gp6nfn7HAPnBozKRmUmH6BPLQyC36By2BaBenSRwfEfbv9aXU7h8DhXZezYciCw",
  "key2": "3WM6nQDRaHHR2MJPS3Jw9YhmmVh4wKNbETXREDXtw7w7cmx5RGiXAaw11Kg7cYGQEUyPnX9pLzVBsqarFZrdWXE9",
  "key3": "3tLxnt22xm21XR1V9WfSv5sRnC8t6Ynf7LDxqzwnESBWPfmK2ym5ZmexGLH75YQrowc4b8BvbqepJvwoWCfNUdv7",
  "key4": "58BXYxH5gcUoJTdCwnVLAxYUnB6wCZeNa797iBSLzsxZvnFrtyy5yhTN48o2VK3xv8qomGaG5TeZCDarKREKFAmC",
  "key5": "p3DRLSWZvLk84TWXs1VvuuQoHJryinPeGWZ5udXtv8Jwbabqf3DryXCWgmJDUtrKVeqrR7yHWF3yGzL6JtyN7ZL",
  "key6": "41RbZW75m24etzb1qJtTLNSUK6GPqzXV4QnoKVnnJ3zmennDBTjGhHrMMj1HQV7Dx7B6jYTBntfwMarnb7XsP6gZ",
  "key7": "4Je1hj5P9a1MhpUpvrn1fe2WUq3WfWyZjiaDxm9txFSoBCnZZN3HF9NT6iCEU5v8Q3JTFNtrmqKrQ6mu5rHG3kRd",
  "key8": "38hQUocwxjJKwW5KmCUD7i26eSjWqzbV41xJKb6tFtRg2LzRAqb4hmKFe1HQgshpcJDkFzcWycpL7RJnxvyxrR82",
  "key9": "49c1cqcSUnjBwR2v8Jq1o2HB6TiwNWG4yXQ2pig3VsrHoimfuptugYJjbTf7KRNbKzDTzFLquXVkdof8qrBJri6T",
  "key10": "3he86Xsuq5QtyJkJ2VkamLEUDkmnCAXp1jzUxArwPtKSWipr6ivESubtcVw8waGae7FMA1JDKDs3VZ5gwXqRnk2x",
  "key11": "3uXCX52NytA4tab9Kz4r3yL3hDqduutb37tKkxoyq9fFyxwZUHLqWsGuSH9YWEnCBQREVgQVv4NE1rauk132kP2y",
  "key12": "56qurriNCzCt4DsitkuXnFHcRrqA9viujBU6DJr1q57BMG58tnk86cYMwVvMLSx3sUUFd8ifgYTS3BE2i84W29qx",
  "key13": "4JTHHMaBxHT6LTjadr22nhqf27qNkwt1VEzwUn32LKvaNu5mYi6h1Vd4VNACBYT3bdfuyU3QwHbEsueNry8koCEY",
  "key14": "2Shs9dofZfQWrLk8v4DH5eikN5uvjMyfSx2cdssXA55E1JbRCz3BpUJsCnfzCzmPFBpXhGAQSkF7j5AHvefqFJzJ",
  "key15": "3rF2B8b1TqaC5rzZDwgGaM45coSWhGsLrjnJiNUfjc2UU9jWJBjreLV22AkCA3ovL7FSKrvQPRK9tMMYipQvneiP",
  "key16": "uN8upz99atQmBPvGrUBgneCAsz7aTTgFMhRbo7jTgdWWiMnGrNReAarsJeTCA6JaNGw5D3sb5BNWVpfy3deNv4i",
  "key17": "476T8txBxmmJgj2XxPBJBVWUNXqFNqeLMmUqKj9syha8KnZLdmBzjs5jiw7e28fdNERGZnZejjxZPwh2ndy4AXTz",
  "key18": "2yurgQkFojWWXpwDQQL9YdM85QKeD6fEFpDjfNoLaCvpy8WbaxvTcZ2ak1Y154ELgmtk7Mx9wsZmbnXAuVFe1Wei",
  "key19": "4ioAdvqitpTE1kHiDmHYdnGCwKmYLMZedRUT74EXyKwwgcEhzdcsbeGjPyeGJcfYxfFcZ5HJTLXTf9dxW1FztmkA",
  "key20": "596FvoFuMgAhwWt9TLY37FJfQSxm5UAyY62BnnGWscRRQ42cUv1DoF62QY5oK84aZ51xdZVgngGYTPP5LAEN8x6",
  "key21": "3hSs6ts5FFoqAAEr8SdhsXN1AwruPoPuBnRRq7uWtk4qnWagp3ukQnN62GKqVF8sHSL2riFNn5yaGMSv7jKwy2q5",
  "key22": "rfKSYkVYEmws7LxAz3emwsueSqTadgiqP6kQqM8w8ECj4xVapTigBfNMLusKktN1Kr1u4nTUYNN53fgFmpKxUnN",
  "key23": "44u1WQzZZPsgyrX6WSfpeHFi231oAeJxd7mSEbihs77Ed8fdQfMJtYrM7sqVa3rmpZCFp7oBXST7WYRNWbafsi5N",
  "key24": "dzbnndnBnWfA58n613df7LQkBizpVi7JchBQ7iTqWh1QB8bBy4NH3XXNbexjLjyUrSiALu3o9MBwwRHYURtU24v",
  "key25": "4zcpgVVgLCwVXH7ArbG3StfKZH4fZfwXUwXzD4711E9sndX4gVnnbZAwU3MX8rhKqsVU1RRnmiq1p6ybunSNDrBE",
  "key26": "5NEu96gxtX3MwBfMHXCbCxvzSYcH32ZbS7baWVqbWmrRao4HvRFmbe1efJkQtGWsfPPywW3RRhUjqRmYMuckUrUb"
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
