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
    "3v51RiTczakQL8fx3L9wfo1VMcEMXbioh57ZLNQw25Z2zy6iXA4eEZDoXSxc26WC2ZLpBsEQG8WiLtYjvHS4PUtk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4evvmXzijKfcJcLPshDhRBnKzR7nE29Qoi9bzC4Xiig1KQ5weMFp3FaJ5gT9CmuEgEqJJ3e6UBsgWc6wK2Vsp1dL",
  "key1": "5vsuZcT2JCDKBnaEDvAdkvTJHFa56ntCXscWF4ugsjKfZw4JFJHux2Jfura3Xi5zvMFk3eXT6jMyjfu7y9LpzoFK",
  "key2": "4DFz3cX4Nc8AkyvirVksWd2dXYeJRJVm5nmgEQaKUn73gUBr8vJhckEQTrpdZ39Tu7QjRVhZmP7r63eiNyofQ7Z8",
  "key3": "3CQXtU2mQAXxdXWZZTcwhnjwHuJcaGf1A4jTAJCFqqRFoxBM5C4Z2VmjrPhURkepJM1H4zBkzg51aNrnhAv1FXrY",
  "key4": "JfocERuRULYZmyeqjr4DDdhpjL1tDaBz1icGfmavqZjTi4TCvCAtw5aPgdejfDa6ozM6M4fPPE5Q3WXUoLdjBwo",
  "key5": "4k8bRKAM1hfRSP4wconzshCasQNsQr2CBNQGMwhggmwR8c5R3J9rKfciUKyPR3ShLfw2ex4bEP9nieeniC2mPYVL",
  "key6": "46zzczqWMFQr2ttC75AxaSBU5phhVKJRzKnisZUmBSJWVMr5TZBw2rVEtETYywR4qNvhFdzomd82azBbm82GtwKf",
  "key7": "2yuug8oAEvHw8eGBFPYgGUndpYnjukqWijqYtgT1NCVr3No98qpGSwDD7RKr3XF7mUpb8SCSeymRLQRTeNZmEjdp",
  "key8": "3Attipxa41A6TrNPjovar5Z6vg8K69b8MaqXgjku3Bt9CvYWX5W8pbJjkWcAKGGw9iNmndqvtY9JssHNvLoQv1UM",
  "key9": "5wXDXNyUd5QjyTkwCW6rR7JrYu5onSkvDqYTFcieTS7dZryiHETckPznb8Tm37je61z911nG4mVbhNQnxbHSkoGX",
  "key10": "3ff3VmyXcVbJsGQW1pQLB8BE62tqorQn8Bvj6zwTcczEt5h4tJ5DPB4ACDKF5WHvEz7LSeoMCPqhMrB6Xb3qQ35p",
  "key11": "4H1djohBkwuBZDMzWh3QVB6QfnV3edbPEq719MYeRCUPACu2GkeXoFvYse7xReZGd4AXkceBmeJPUNrYY9bhPMUZ",
  "key12": "2SA3w57uEwUFsStV4D66CoXgZhQVNsWLJdhEA3ZtSsMA15Jt9aMcJjh12jxwaL1jsRcP9W55KuPyhU968LSWTD2z",
  "key13": "SerZ9SQuv3hgSzLSU19ByWgBZZ3Ee1pbupEE9Xj9JaruGJda1RYrgNopxpJNMpDRNqcbHciCTxzCComxT9ctixP",
  "key14": "65y9YeWovdybQaATRFynM2FzmJe7PedfZhja4i953D3r6G4v4swAToSHWm2tB8WaEyAcW7hTVkPCT8fikV9AdHoP",
  "key15": "3cwBAArta6Y6ew94PumwHZRLnzLQeSa3TKpBjxxmSHktRWcHA8JUBc5C2p44si7S3WPBavfrqKVwxQMW5iEkAqG1",
  "key16": "49d1TDmwvoFAGf8rtny6Jw6vRNvwML4NbnSpFczJVkRuvinjLVFJEdCT3BUDy3NLhH2X7RrTJpK5gm8MBBoo7gjq",
  "key17": "5zAywrDKN8WXytpHJDYBrbrd8xTn2fkbmz8NZr4qMAGhLJi2YtyZ9CR9gEcVdpWqxW9wLtvpUcqang3xE8q5emT9",
  "key18": "2JJMjmbTaY25fyG8ZYjDibXQpcHPZe7fLWJgt8jDw8EaBA7tBvJkQedtgKa6JUJv4yxJgSA4ywsLRz7WkjGyiCTA",
  "key19": "pxyFXVdoNs8u2szKo9jVnyZ4DpdB169eVb6YcbQd2yzutDbNP4kSeopjBQo9P1vzQ4WWLgx9NgZYbwruhVvWKQm",
  "key20": "CEiT7Cw76SdtKxMswxMJZJdAm6euusa6TKZY2C1utTmGTj42UNkTH7Zj7MBAcmQWKnzPuBvLAhLFQYSAPwaVAxQ",
  "key21": "4hRV7X8ZCPhcVBX3QJVUmkNUC38VMnWeBWaRcXr7uPP7v6BR8GbrdZbuvvMdBnJ4ghMCCjCBjo3ygbjZoK95mzt8",
  "key22": "4Nuwjyg7kcZbbxCaBQVpWZHk8eFeY2UdbA7DhwuTsT1Wgqg4nvggZZFfT84yaBWmivNBnc4v5cvCPVCcheZuzCBm",
  "key23": "4XFT1PZ2jGHkrfkTcJaHkqsrh9YPcbdVsLi8DA1HBgmkqg1CQGonEf2F113QynhEe9pG7nMSKUtUS2ZH6uvfXqja",
  "key24": "4YqXha688DysY2gqBarvTxTbMhHfoURYSUT3qmvDUaCchSpCFKEKfCDPAWPYkyKzeEtcaTY1HzxZ1KrBnpdKNLbY",
  "key25": "9wxfxp7udzTJh9VFPSKXyZd3RqCSFnJuZdVx2KBcRmQbPuti93u646BapD1DRTmikJM31ZzrD9FvhAxmGrjF6JJ",
  "key26": "9CUYrGCccrEtoovgiy3zMPha4JNKsZ12PfYwfYwCJNuCpWjx8mLqc9HBEZAL6fotUV4xq5Ek2jYyhJeqFn8uBAn"
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
