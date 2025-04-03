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
    "2mbP6yt1yfR1kxKWWfWXzyUY5ZnXpexaCcfBqzLV1j8GCV1K9SQVNSE9Dm3NZGWDsuiKqCFdAt1vSTbo1YFqshZd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hEZ9LHfMEw69z1BZz544ZsK5zHamRqvUgS8Vyq7Guc28cXTdc75D5Zd7eb4wMUAqnAjHfCJfDQ9KYffwvWdL32x",
  "key1": "5s6vGYsYjpKuAWDE642pks6WTWyfjRMxT8u2dSGEweztE2h4AgvhacBaHncCGuaBoMoMcmZoV5whLrH8okRBj16x",
  "key2": "4vWvwirzrHQwEDPY9rCBoLRMJn7xz2fVAAMMw95A2NvUgRWzBZKLBGEny2RJ5Kr436tkzbgcyQ7czaPwqdYC9QqV",
  "key3": "4PNxLDBEYggJoB35vtRc7EeDi8hrmvFXzKJxxvasmv8WVdKUiVP25WCoL3dZtS2Urda6C85wctiwHX59ebbNp8Ha",
  "key4": "jUyGb9BeZdvjggSz2jtcx9EfQMTmdnhY4fruy9Qf7RvyGeUuuKcLNkdoQ2tdKt3LmYAEKxMdEywY6EM7C8Egt3m",
  "key5": "5yuvKAF9TSuBFsTKBYWzjkYP4vyQjQfBwCdaNu1G68ttmzzKaiJ1ci32njvAxb3rcftW7hyZKsHvTdvE6tUg9Hjv",
  "key6": "5NPuDYsP8iF2KQY6vfqGG2kv1cUiVfeBAobT6NEP8rVBnKyTHzed2LguMWvZNvRXHt9DbhD6rMQXprr7YGeppdNk",
  "key7": "3SdnSVpALjVN8CZ8eTUGNcqwWX4B2Fpo4jDFeLKQ75ejUx5VdnqTH2izFZU7wKAWoW2YjFVMujYvSpSVanjMjTTf",
  "key8": "pEsM2n6wKF4JS42tKdQmTrUen6eMqxZh6GYVLBr8PDRWDSEuWPuGskD5f1ymjPqei5KZGNCSkUSBe4Bhj5Zqatb",
  "key9": "4ofHWZ1QVRuRnF1TUS37WFNa5H2XJB47pJprQw9ttd92WdYS3kvERScbY9dioqjSLTtCX7cct7CnTJWcRdNiZ5pm",
  "key10": "8b8os7sYdT2uVdmQPLA6HWpHTS1daU5LDzMVeqsBHY5shgMi3twStD7TENHXwNJKmLJgnA7LHxecE8xfTmzoqvh",
  "key11": "584WveYNAsQLjR7KS4pKbp1xJeLq1upmKgvZgEvfzNk4XuQ84sBeX3XpoZTeQKcni6ctgwcy3E3zAMEccjTfqN3t",
  "key12": "4V91epET8JxNbBMTwYJ2VuvS4XmDyHYL4vacLpxXoJEnHfDgw4zYho67fWaM48y74XUUv3hQRXe2EizvkFBPvY3K",
  "key13": "V98vwwCh3qAAnvLxA4VBsJnFwuSvBFQ9Y4CxSkJdttndc9Pfgz8mtuHG9FtqXSkS4mUKdVy2b7FPkwwTSh2KWGB",
  "key14": "UPw9QisbcWospujDJMtULrbAEV2gHGRmK2g7V89xdmoXLNQL3RPRzrZreNisXsmsaZbnVAaEHxyxF4LnJ6rua3G",
  "key15": "3754poWBspX9y8j7psxXD8LAr8xF2m5PUi7aKrDVG3FnjJ9FmVVWWktUsJiaGidqSEj7DLQBVYLUUtUT1rwqqwUz",
  "key16": "3DHtfrnhbAtQ88ttxRiTLLZqJ3kXXknHs9JeTWAq6DHqbj1BVCwwMQxmQe4G7WL7qLhKvuDmBh69M6EP4mdrETXy",
  "key17": "4wNCLWhRpTmWgT1NPJ4wLYJskifVTSSLBPUp1ShGsaCTfz3MnjctyfaBHTiDEUc4K4iWPDd4Bpn5m6f3FEiRjWVr",
  "key18": "3bkWGRpjb6UN1aebsTvD1QzyGKia9uVhirqPY76hGw86TeMDNTM1UKAqoKD4nrjPyNnXwa9Fs7BCA39v3nTDa4mX",
  "key19": "5V7dzmuwwz6bdrJay6DxNnjn84skwMVc6Ydg4Rb9WpDSX5UeuWDBgENhqu8pmiFqYmNH1NUwptMkQMBcEVJLsnsw",
  "key20": "2Ax6T76rAs4xmRq2WyMk8js411xES4bTCCBiYZw1gBYbUyFdjBQ7Lod42S4NU3RTarnaQawNHhVPxraB8hWckaJT",
  "key21": "5hCty1bpmErdr65c991WWJfeDQPksp6TyoVS8p61YZfjLv5A3btEAxeVZSYgmxnMdSNvzYZVbviJGjtpCsmK99yw",
  "key22": "2bYHuogKwwyCXoxubJ9d5s7ES8NnL6gDjNDpCZ1CzBS3N2vbUjjLBLkgWAvQJPP7KqMGq43KYi6yRRyXgJAYDra",
  "key23": "hsiDnaEVN4jLaWiGYxdv78791xrudwarK7NzE2D5QyM9yg4BKpg1zWddPBXYUC46AejQcz4S6XhkN6ACMPqyD2c",
  "key24": "2pP5zvxio1MmKNZn9D2LPhrcDpA8RKSEU7sqePTR9S29BvzL1gBa1jSW63CNPv84QpgApz24AzZvdfn52FojceZx",
  "key25": "4W84uecRTo2aFMSVbtS2sDLoKzZMFv3ex46wyXMJLe2RmHzJW5cSAYzzujC4zpHTWkE2BVSnQXstZpvNZJTKdpQX",
  "key26": "34nEJ1ZnLbEwHwGPZgZiMVoQ5wKFhXWpBHwK39VHjvhTBdbmNPSeyVn8dcvbisbwEvT8ikoC7CjCqnVVFAKh7Hms"
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
