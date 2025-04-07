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
    "5Pq4Aj3y44QWfxZQNpPRWCq8xqa7q2vATACcYF8CRhkAJmKX2Xddh5iFtYzWAEgNrn9x8L4bbqy6kFXQYARoVtb6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3R2oWty1fTYH9peiKZfKbsfHhbQdmPzFBwKp2c1W51hkvj8fsKXAgEH8iQGgwwD1xX2BQ4aJMSq8gZd1Y6ZZuctV",
  "key1": "nCc4YUoUZ8LUFeaPSRL1QbhDwCKa1S2duNdwAf42UrXeSJFe1mMB46WpgUe7X54tEYjvPriuccwfbVeNgGYsfqL",
  "key2": "5QCTqzeyCU2WoFKZpTiYzWS57Hs165HpMwPy64RXjaKVNe3zPbw25wvTRTp7XuPkA2XRjLNL4nStVPesbQQgo63L",
  "key3": "3A8FrzUuwU7sHQvmteeQxH3rjMT4qRbPVHq8CrvrxLhhnHD3ERKUgnRpxH8BLgmoKFAZQXdBAHGkrKFKEFHEKMR7",
  "key4": "2r3weCQxeYgNRxea77Edwu8BSHM9ymWqKHvbFtt1LTcvdSYfBoAbM1oUvDi83viKBYh9pCdUbzCwo7j3LeQsTSa5",
  "key5": "RkPg2fvj1XJAbzmQNDmpAo58RMrB8ZHruGmrdZ1w9VkWXvoQ61HdbT69JCZYKqWSRgVkzZ9zDdDoCPPVU49rLYA",
  "key6": "5XeCab42cNPRdMhosmgFzfzd3goDNWUnjRtP4871xii8iHTKnE2W1oY5rZQX8QYQeuvQ3zwCTdSRqaLGxbm59SFd",
  "key7": "3mRN6kTsHnJcoYRRiawuTaZQ1pCqVPyKSKEX2e4941g2ybfQvqpeUG78PC14tyGqSwQx3kJ8Nvy3rE2XqD6KWs8H",
  "key8": "gdmx4pQvzNEhriCdGDMrQobD8GztThT2qhGrNTRVMQEZ3b6XfABYUPhM8Z4trzDhfxvDbP5tzQz2wksPDLbGwRD",
  "key9": "4SdxoXwjvJt7yJuL4wYRyHwLZBeuaaXLBZxq1LeXAeXfuT3WQAzrRdaLU2eZgSi1tQqDvFYSQgWUPvyzekw3WuQp",
  "key10": "5rdJCfCpE5NWCSjbyFZ9C6XrK8FSMHJQHrZ41TgAejCTS76P8FswCBPKKSXjXAaAPp4azz7BP71HyfQxRN7xJNQN",
  "key11": "wpeL612XgPHSSVNmRC3JMZYz79Qkrx1doJSFCCEYUGt32gnDSKBcun5JwLfvRpJYY8yCng71BjJALJmT7srXwrk",
  "key12": "5ntHMn613MgFhapH4vMfnFmawWWd4UW7o7ezUdfEXJSwLhbSGmK182xpBjwZZKgxo69Aayiq67SMcSjdhEkaRGNS",
  "key13": "2cxb6ku1zwZ666EXFkTVmgj9fkTMyunxZa9RiEJyhxTVdV2SG9W3uTjHGLcHvmzxqCANe4k9dHkZhM1kYcPeNa6u",
  "key14": "21nVd17Emd1Mjbp238RB1LAVh4BpmgpE7UX7v5uZtySAMYEAMLytNR15ShpPaGqggfn75HD1MUHThVp4rrPmH4Qk",
  "key15": "3T7rZX1XBTGutAauXX3KBZJh2hbUe1PxhmPxRwsRawbdtRKUFqBJyDHrf9sW6StT7Tqxtncpf8nURotHfsS4cXEU",
  "key16": "3ey3vynb8LitGuwi42vUFMGmZqUxFmv3AhK3E9LDQR2XuukjQmjWy58XdQF4SytFriihvrSDkQMtaMvjrUJo82eR",
  "key17": "5vtDaZWE92hohRxuFw8j6JuiFD2ctuwrvCoeUKsoAMmyGWYjausKKTbUHokm2j4iuRtpKgytRK5tWMe6RBmkKwCW",
  "key18": "5DqU62325cCMGwA3iUYSQZtLRoLDFKHQdqZknTcYzkxdxwJ5saktmUHqsq3t8BfwosioJGpMFxxg7ft6nJqoTh3S",
  "key19": "22N8TnTiEhvWbhcppsF6c8a4hdt2WTh31rn3KngZVJfNsoj71hcYYT1GSrJheVqfFkt3C4eScz3ygRNGnMgayC3T",
  "key20": "4fw4cCXZqcEuWUerLXAwXNL8sKVr47Bg5bVAsCTw6MtQhVt9Kj2oQsSwj9UpREhu3JvLHVf3HeApcnbmp6F41cs5",
  "key21": "oxTqJ2xV73kKgRr1WYTEkfAPPgfuTLnNEHHRWR6WFtyUU93qrbP9uvaEZF39vF4VMD27QPJotg61x63BsYkT3cL",
  "key22": "4RFrpZLMTqy9hnUqoRQeLSuQkwfXrbzq4AHR61QDVx8hcsmYKGoQ6QUMMebfrk8VSa5bretbRd1bHneGxpNDQtBs",
  "key23": "5es3VyyFcoBg8aCbACeQbuXUWZ6Guw4zvHLk9RbN7EWGYoovmsv1s1JBZzFVGUJ6yGwJaUkyBf4ZtgKc2p1LCshf",
  "key24": "HMJwaJttpL2owbWyNq5vyj64CibeCdY9NjVENk7dsy7kBVBypY5BanEgrheKt2nLiNiHNPMQbJyUXWgx8RLCPPv",
  "key25": "3yhxwb22MkfBEoBGXZReenzgn4PiNHWnVZrsMVm4hHB64c7Ss8CKdCGhGAAtr6G4YUz6c5Kxx8NMKc3447tXdBvj",
  "key26": "4566FMNJWYSUh6aM1oSZxThLUULyzPJnBSiwLyNhJj6VeZ7hyyAZUpAfVJKtmzeaH6oMaTjS694MVcbjmXZ8sFYY",
  "key27": "22EZxRa8MbJLk79Vai1mQHAVEhqi2Qdn2e8zvHYKLkGSPq1iaSy6Vm4T1xsTtNNjB8AxGZNx27MySPqmy2Lv4WRo",
  "key28": "goppHaLwn9YakG8VRGUpjVbHqeWtY6gpa2gzxnJMBkPXb7WeRu6vRqNop1vmZuzSKQghNaJjH3pBF82K4tvh1Hr",
  "key29": "vh6nkcSvMMqxvvN6Gix7ikQ73JoaN925ZuM9UHANHnd5gjn3HxhWL4KLdop4zZDtQBrGubadWzW1V73fdZsvBRV",
  "key30": "3nUErG9X6xmMqcso7HL3TPBumL18ZZWvMcA46Fc7znR8agxZ9ys9DAMzJ2hYikTKwc4Z4cmcqbGsbS44LRsxGytF",
  "key31": "5YnyiEK6rjXq3w6JzU7LKkGggmZAg62N1YGAL9vmA18g5vtVGof7u9HREz67PPrfAA5oirxjqKZDg37Rfp47G7XY"
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
