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
    "5AXnHhrU42PuXYzid5v1i8YwdDHtUjDjnLBzKnjTiVBBv1ecN3Ssr1bKX5zhXf9851DxWpCahFvaPd4BFs1Q8xdA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XguphiiKc7KrXghXjuoUpPx5ZyKSyKHTa8ucfNL2HnhPPkpd1EhxDGfqwqLRuUHbdpVW4PkRpzVEn9SuY2LSVvm",
  "key1": "5rE8j6ZDULE23kbsx6cAniacCxMEENbds36CJg22mcGba5z8UHkV2iKz2uHPjdBrc7wsKASwWAjRvCRkYeJzEpGw",
  "key2": "3LMEkJhCwDBRMfU3hDZsgkH1rUiuc2gts4t5KfDY5rGJwfcs4LQFYY1Vg8FdFZAiGfenUTVgmoDdYRmRCWApm34i",
  "key3": "3FN81bBR5GYV5zttBNzJRA5tbT3B2ueZZDFTresVUkjiBLZLB1CgJo2FxpRCJuQvkiHgqnwiy2HvsApvpFMKvizd",
  "key4": "4efFGyLDhe1mAqb7UFBjDKXxsHCw8gUn25QygUnj4CRy6BBNr2KhEDM9ynBJntxCmbTTzP19kRNmUYhpZKsAtFpA",
  "key5": "5j26znkbgWFPyCghmFTLDHPZcXjiDHxYUyUaEMDDWADY1A85Ku5B87a694abvsNnEXysmCvSi8Lb4pLB2oMno6zy",
  "key6": "ngADsso5kza7M4vuPAJdRkJQXWtf6tYECC44rYHut1VHi66R9PvParUJVg2zhsctKsSGgWWhN5P5p68btbY2aEE",
  "key7": "5XLrKRs4KC9YqfboVLpDmbgZYcydEJg1fhQgzowGj1FKjbR5Kj2DUZkt7MJb49X7XMAa3qxrfQinibK9WhhTxfzS",
  "key8": "4ZZAwxmxc3uawZGxW2vMsKWeWwiPsUKPhrkdkVfF7RFPyexvogLtqDpKn6vkeP6DB9Yk5zMSpN99UM1NpCfNWtZc",
  "key9": "4YiZFd5HUXAEmz33rk7aNeXZUmao4uKijnRXbWJ8FSadL2db3cRhRAJNvLCR3h5WWM8TCzraehrRSaBhEW3jyqUG",
  "key10": "641DvgAQuAcQBNV55GhF9jk8wLbU5JmSWAHkYUb7jYZKgdeUPxjhe9owDU2bsnSZm4hhtgW5Y9fcNRo5dYy12csq",
  "key11": "5D4eezqB4yHZuspGMnQZ98SyFXVnF3B8f4XJtEZ7iFejot9qWtDdTuT87JNm1pbtZAwfapzWKEWPxoq844fgmtTo",
  "key12": "F9wfhh8rfaa4rzdubikQhFE72MudANVARtx9LGnTbBJChkQNKTrC9VKw5zuMDErrc6u4YfrpzXM6UVvyp1iZMxS",
  "key13": "RCWyy2p337NcZXR78NcpZGENmJbVAfMVtABR2H3yGSUL1mPZ9fgodmZCVsSj7RLASYbhBzpsiaLvfZpmAAcLqu9",
  "key14": "44YZVJsALz3CeW65aeBA5Ur3JMxBEhcLFybN8LEZM1cNzgtF3BwJoCpnp6gmzstQdV3i9SWMtVnPVQFtwJ8dAvwu",
  "key15": "3fEqwwtxBs8i2DksNTH7pC4ViRpv4eUJLnCW5X99jYQCCWyPS6UL8AU9EiQrXVJrSdvjve4M59oWU3KdZfWHJjM8",
  "key16": "CwqnXF7KUFswVzWTWycW1HETEGHBEiPw1B3mm57577mrkQ7a6uaZJN7dqmXJh3dH9qVR49EriyHzP9SU1GXs4nf",
  "key17": "3ky7SGKDLU5adDbnunTieoWmAjfsCrxH5Jm5EKvZkztoejoyPxMvefCX2KVjqE6vpbwgTxFhMsVmBPFpg4vTpNfx",
  "key18": "2szRRm1uTf2DyEbbDVSKj4CEFG3exqkYvhx64yu7WcUZ8RYLaLZ3rVNsVHkT3NAzRcT6J6CS9tGsLH7wZte4cmhM",
  "key19": "k9ydAo87WK3VKRZbhWwHUoV8q5Wm3PzZm9QAe1vbN12ftTRCqTQWd5AVGhrtsBZTRhXwviL8jgaWN2XDKGnMYzm",
  "key20": "fpaypBjUwooDsmFWY8qymmVKy3JUNbpUuacHbPePT44pQkLSU98bHyGk3Ko6nqes56JdKR7X41mLFt2ZVE99Siv",
  "key21": "4bhkif9tNDfkioRcPmHwhFBG4eP8cytxk4xJoCytHhuQBAMJfnMUxVjyrtY4rD3vCzHPJerrTSJcKHG5v3NXjgfF",
  "key22": "44PxXNJCNsoZDNHokGuts1WVFcxhFT5b7TsMeJ489zh7xH9WWv5utoQ9kUNxjH7WAvrQHu3irdTZukVfZWFXEAqg",
  "key23": "5YMNPCDtpZzCqGkyEEn7bPGsTUGEePQGC4UrmtofuxNmeYviHNDWWLf6UPLjiyxtiKyetvShNa89cquNeNpVGCUQ",
  "key24": "3a6ezZPmXahWY6eApnSUaB1xHmYNfcR1NThZ9MsTuCjivzzMyvWq9TT7pGq4UHiKatw7t7rmk3vpRGGABJqMRS2j",
  "key25": "4ETM45diyjkVAwxS9tDkewtkjGcKDEREbApjAMMUYsGaY7Cuse1AG6E3gRQKksFBHtrKPDWXrTKiMPzBYkAD1ngG",
  "key26": "zT4W9GxfiSZEgDw2RdGq9vof2Co4NsKQubEpMFhpq5BJQfiwBrKaMZK23vqs1WnHmbqP1CEj3A4H7Mccui4in5X",
  "key27": "3hZazGQvPA8j98myY5QTBwqCzG1mKpmtPhMq1BmRY72aNv7KoLx1hepLQS21mVDLBw6htZW1jHLX8dR9tdmKnnZu"
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
