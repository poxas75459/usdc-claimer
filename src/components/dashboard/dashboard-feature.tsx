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
    "q5iEdd162a7ouGgT5CNu1zYkXaqp8wDrrEJzbVhhZqtDgEFHgaqLDuftzEAEmyM7UhqmheerjoWRu3AMPaeF4Hb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MDqHfjRKFvNxeyrGo4E8mp67mr1xN2DtpSZU87mwRTSXBGt7dnzKbAd9PiCg67tt9KcBSdYMn4JvvdZFXSHBpwD",
  "key1": "2pCmJ7vZxLAYZf94N22tFujgKpwKFo6Eh7LZdnsjv1f3Lka68QpR7eedBrJiGTptxNt2ekjxtBdzScnFKnTk3pBx",
  "key2": "26w9yVzTSQqXrp7ePRp8R9cskWxErgDykfuFVWxeaFaKpfdRNNxRcULtqqrAptL9erDSgBMrWaiqRamqj4oXgHpj",
  "key3": "58z6YqpQeUUkMhK7mv5FjhWgvXvwmrS7QFeaUCBzCMrBxkSFzn6zmd28NGddHB66CuE2bDm8yAHo9SwyFZaG8xAA",
  "key4": "4LRJ8cvpnrmNFbHG53hskHiYP75s2xYxwfup3XeLUAnDQ5AXLSTKfUwp2nHrvuvp6KjZkE5HYLLjfN1MiLkXovtC",
  "key5": "7PbuzncRBmwnSTjLE2f1Dst9er2dkaZxZeD3mSMJymEZC7z7f9HcYHiSArntVfnXstmrWGPGixwGXowgTbiis17",
  "key6": "5aCuqhQQYcA3Kp7ur5XR6mXFDXqUU9tQ5XMX4nBakasYjDjyRpsZcnSKLCnaqMpxwusZYPiEM8aRg7nabD5YvQTy",
  "key7": "5HpZ27D5sZiKs1Hx5ZGkkMrMQms83D9Gns5HocCyoy97stcsJkshHbVUpqJEbGJfzJdNcib6yi3Ju6XoJ2ABixiC",
  "key8": "61zmUByKvZcw7AT21KEUWNsFGfYKk44624TB3iWSS2AR1tfrkiCuWrV7TgGeVUuByQe5Dkeuv3SDzQpjfbGmbY5w",
  "key9": "5KWYB49BDCZ27HKeTmhUqX7qHFeBprcjLXpfrfRwmwvQHXho5kkAYvRWpFhptpk8YxpdX9pVRb8Ep1r2sLy9tqb9",
  "key10": "2Nv2vRn7jSyPe5C79PvG8Qzw8FL2U9YwaptjcBJFsuXNSsRYUYazyjsVkZybQ6uayHjSSS7g44cfNXNPWJrDCMSU",
  "key11": "3Qdy6PL25oZ4NnV73iQtgx7Gq1FQUuexBTxXJANLsCUe6jhTpHnCsJGcukD6XKg1ckUtxoFkSNwabRMtfahfgH46",
  "key12": "5np9thuw4XVxjN26DmmrXc911KQok9iJEWUoJRqRy9DMbcw5ztoQV5iMRyGCezKLBETvCppycZu1D2T9GVU9wfjh",
  "key13": "4R8dvAtM6HFysFya1NABDVTtV1nad4ErNQt8czp1hkgVXusDu6eLdz9kYmTZuQE2LKtnzJDkX3UQxmPxXXQ1L46u",
  "key14": "39m4Um8gAjrJWGkYXBaua2iJztMuHPRrCB7MewF18EBHr78qrr6RyTUxDa6wEFSB35EvmdjF42gW3Usz6TUaP5EX",
  "key15": "uPPZ34BzisLipumXoLoMQYiHRoEFHX7c7eQ44ZwLpKyjXYMLaLXgWVcteesbGhwP4FzcaNf9nfbXjdkv9VmJgqx",
  "key16": "51iGk9JmVMFwNVmWqLk28sVWzrG6gXJctF44ABxs65xe1qU5oCPwqsNCoW4QPTxxGqH5H6cQUHE94PX3pcfGDek9",
  "key17": "4rZaJW892iiPquE7prgri8RDeKTXwjmkSuuJjAks8TyQ8DHTwMPC9ZBk9xMVt4ayvdZxSZqqfEab3E6mXe6pvaAc",
  "key18": "64iRCwGzuYb8dbGKCcXnNNKTkw1Hm8hjCLTbssQf5XEB72vuDzyRtZJZC2KPwmuDTUG4rU1xtQvmoRGpy9zjywVn",
  "key19": "2JUFU2CqsoS8uTgjUkoXjmTbBsuAsqzaRkTtLgyjViQCqyKSoVa6DkxhDgjFDjxpncGjCkhzfJRMN9rMhCZqcrdc",
  "key20": "dhNDNAwmZ3pRYei7wNJQd2mswvyz29SaBjUGTbzfcp4JFDMXXcLHYpiXm8eE78w4McLJ72UWkPfgiXghUn1csu9",
  "key21": "3soPsci8na4TEfWWfShVmKiQwCVz2Em4edaN89WbjLgT2af6cHi5VMfo2aY9exmZz7HsTmwyvqStmxZX87ipotnx",
  "key22": "UsewnF96qkTV73d545BAfxhTgZbMDRnGuzY8U6fn3T3utQyhZRHZ9q5zpUAE2LnFMiY9ZLUNggNwhWWARCYbz1L",
  "key23": "3x45EAtTc2HmVprdw2nQ5nVmWH8XAZFiSq4vDKrXPKRCyiriiPDSZfXKL8oSG11ubwjf5Ps9iuUU1zrRAxB42kTN",
  "key24": "3Ry64cuWpU3U6RA9NXwMQXi9MjaBsbijZZGmshfsGKaJh3YzveJW2913x3p8d6ecA6PWnkeBwN1jbkw3MAUJQXVU",
  "key25": "3GVRm4LFegUfkrpLcuTC1QFNcVrr8XUAEGUgwGA5M6FtGvv2JQvJc2KKFTvLuyZXyVbdB1EQed14pzeXzeqerZ9U",
  "key26": "56Pn8KqvvFS1j9Jp9fr8CstGPid1BirmDQgr84Pziy1aWYYwscgBwdS3QrZqfUhkomi2ciBzcbZ5eHsTzNGPAHSD",
  "key27": "3xppyYcBj8uoJa28MiS1sReEGRj3gk7Jf44J2j7GGAjNxNaUPjPvwTMA5X8seUbfNTWNR8Jr1s5XM96SuFPn35hP"
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
