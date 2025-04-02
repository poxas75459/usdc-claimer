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
    "2GApP5uacGXBXzf9efVqCJw7JmBqA6nPX5s9vzHpFcL3fU3RBRKpazJC597ymJRpuzRcyc8qXU5aMHsvtGyt9qeD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46tYf5BWBna6x4Hsn8zfBaXjTBXNwWDB3YeL3Fn5s8B53aCaQfvjJDVByAqkN8wvkWVRbQxaNeuubWnF8Nt5m6ty",
  "key1": "4wv3G8Euk78UCLLSfhvWtTb3yk3WPdgMavL6DkxQkFJJ1KbvLXwNYPWDC3vKikTTG5oppjViv9rTpx5koGmvkvGz",
  "key2": "z9knNRRdrkA2cRP4sJhgqDWoRE4LLFGxbpaAsbsjjpTR7Rk61dLyR11J6Bo8bQJDKXi3m7VtEZbadnYbtvMUZFk",
  "key3": "dDuUTTmppXhAvi2x1vLzBkjzsk4fmaFNPMZ78T731ehz9PETzb5e327AWRUhrMbFBLkghxoioNDJMuqnjtqtCbp",
  "key4": "dQS7DVQvLo3L13iQ9pNEh9oNfWVJtLLPDrVPKVmeoeff986uASzk7g3sqtr1FcZjeNSQyWFQ3QpEuiptxAiQjkE",
  "key5": "2iyjhfguMBr59CXUzmCxrSrssvAeRuXTzKHotN6R4CuET5DJXsaNvc5A4UeeYdhhc6E2ANwQRBLenMBMJ91vtkNf",
  "key6": "qPUb6sNWLPZBxxFoyWaNnZ5NbkJL11pugaDRe7NZLRmBzsWiuH3FihwtqENNWA7KuJWGhLQk6vMK1E56pEHScC4",
  "key7": "5hJjraL66wVsdec9wkZfDWFoGaLK9d6P5Kk7gyfQPNTCHv6wLKFMyA8MpeAnG4cNueAPwK4G4wYyzDag39bm9ebm",
  "key8": "9PBkdZbBS1CQ3uHhsBSfwzVSdE6G9AWKKNyyegnf5FJNdvLuyQjdA7E9yvgiLtuWaFDmntpZfMjM6oxXd8D3SBH",
  "key9": "WEFTbyV7AeUonye8bYXs5WJEnxR7N653SyTHp7AAzTCRMGbdyJu5CyBQnBFmqFaGEM5mYL8zmom7qL8adPWci4z",
  "key10": "655P8HbcXKdeVYD5ZNVuWohKu2QgbZ4Pu3NqDHfyNPwEu4TFCVeeSzT6si5Up3hUDieXggmm8ZhHLJEDrmmtgrrG",
  "key11": "2S9MM4Fc2XyrgB5pwHqK5hraps5qiaymS663Nv5TjAWVrrjzbLhhtKCobL4WLG8VszK9vQYb9NE6dyyxMQmjG2xV",
  "key12": "4M29nMySRVRY8zhRY1XDhaqVkEogZriNKTP72b9xGKzDX4CVKj6kTLY8d2zfngUCDN5gj6kLHEgHu4m9bjZcVR3",
  "key13": "35E1nBJNpP4qsQgNGSSRJPoKSrbPckSTUZGuikyz3kHs7jC72j4HFZwW6W9eCN6MdDsuD6HPEtAMSK1f5y8Ujm92",
  "key14": "5TtWtUP8ubEhRiZuvpfNqfz2VG24pFakAMfg8UKGgtPkJxebfwyGVzHp1B5XMaiGz1agz4aZoLKb2A9mvSfspqCC",
  "key15": "MgmZA7LwWABx8b9GqzyCPfFS5XLugK5cUfx4LKXSBFjkeqoHx4Vn7h7wzuVD2YcH57NyRcqUKuwzAzmre9MYXYF",
  "key16": "5BhASnGeRU5ohJdFWKB1rVMUzbaAxihnY9q6XcBd7QK8GE3FZLDEycA4bjYLFXCMyKmpxL5vD54FdMkTsqiGwid6",
  "key17": "4DcdizzfVEWEfSiafYR1DTZxeY9TknmKN6SJQ9FLRuvyT3KKvfWf88Jn2dbfPVZcpWjz89Gk8X7n6YtMeZzesUFn",
  "key18": "3EdYxrCCcMsJjoXVwW2si6m6p81WQoyCdHYoF61EhnGTtfQmZNhVhFXDZdQX2qa8SoQbAdtBpLPU34ZeqMabQEUu",
  "key19": "4Tpr4F5snHVMwoGdbszMRXhXN7ZjVE8dChAmr2dpaKjggDXrybBDdaMKVrC63diujeXc192uWNYsBS2JbPrsd3TA",
  "key20": "N68ScqQPCgKoq7umwfUoArpNDwGrPtoaxiUmQ7vM76WaMYWMHWahQhbtdwPubDV3VPLx3jPscfsrbGY9VueNt7Z",
  "key21": "2inhUwEyKiHDk8oXTxQMAqRMESeh5ZVb4QhMG5HWsnLx4xPgXk2ve6eAa6yXmy3d8vARcz3T1uEsmhRXVtELx8TW",
  "key22": "5NESyQAEgakambSW19s4D4wjUBLaWbnRskTV8HYUX6dvspCqJJmWknZCDMUGzBtG5DHtS1vxCNG5LQar6PkrWV5D",
  "key23": "EdE7JeUJe49mZv9QD711yF4FcQSzAor95MTbH2LWS89xg9KhbW4mquoBWmT6WHYbayDevuph9kB7hiwDvdWDhkr",
  "key24": "4juUWxS2aMsUDX7XJ7L9dUkqNHfeR8yF8ffGtqChGvvJzRGyiQzbvz7MWvdcYRYULLMgSfu51L7CVofa6rYVVsrX"
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
