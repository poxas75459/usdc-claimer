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
    "XLj4HZbEBWvPx7siS5gj1jTWp26T6V1SPLDCFWoKRsh1HtpcbZh7HMmbb882kNQyrQRYzz3FkuGd9RKsMNx2r1s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2za2MpC54CtqH6Cuj8iv8K9cZunvXYp4ggPDmCDaJEU9SEnGJ9crBgzXNv6azZiZE2ftEeroCvt8iJQUB93xyQGF",
  "key1": "33T4bHZhMxA3NVCcBAUMT1ixG8DwHw4Bjbui7dPQkuXiS4ZWBgt4c7YQqBdbMimrWDJkxuoUjoogJrhBANG43SVW",
  "key2": "5EuWtmiNKprBWCPmd7BGa1Ktgt3ZT7pctghvMinPKTHeSPDoF7LswFZBpMa6LMLcoMn1QzWtRoff8wuRi6LfxJS3",
  "key3": "TFjFyAQE9dVbTEfhBrj6GuM5cUxTMkWscS2jrdmK8JjupKxWuA3FVv7ndBTFyLa1ceT1UEc71jdC1Dy9kEGuKrV",
  "key4": "4BromA2wEhqqDadJa6fRNBuYHqezmcBwFRYFGWL1cENKUoAu6bcsWLwtdoocNs9ZV7gmkVn941ZFsddvmkZZ6AFW",
  "key5": "3A4sFAxJjWwAk1M6y8dxQaExBMxUXjaHqoyZsXxTqtv7eFXn1DWyzt8uaU9ZnE1irxuMGYsRtinvrHQPRNfqMiMn",
  "key6": "5dmxhoszHKntAXEfduiz4v86RW4PtcK9iUCrJrBAm5Wwux4eCytbMNRSaE5CShUxPf56t8i4CpdNs72UuSVa43EA",
  "key7": "5Rai5oDDWbP2PWU7AR8K9RS3jdBRmH7g2yHZCPWRjoXvBGMmQ6UkjtyDwf7FhHhKBzvUyXKz1aQC5w7vA9GWQSrC",
  "key8": "4gu75it87JYNvdDRytbKg9nT4j1PZfWKzBZTAy6MGzSmPCXXqmjg2GZ2JzoDSZfafuNR2RcpAZ9scQSSBgooLNud",
  "key9": "3sNsWkAVUwx56m3eEbT6adiJtDnN51V9VLfVM9nFwRYBbcNu5YTQ4Lb8JT8cRL8WNQJpR8MwVKf9pMSDinSXZZkF",
  "key10": "3K6oVh8CG2T9z2XELX48PY2XiDqYeHSWqFnnamyZF3vHMABpP1rKXC9CBrhjZRhMTMNvRKoX6E24BNZdmHEq6rfx",
  "key11": "2WbUD2A9zV5R5sf5ttLczeMf5pLJ7uZ7YpcvfyS2UqCssvbkKXrAFUhmSQw2sMt4Z5DLXdvDUw1CNrgx5aQCsohD",
  "key12": "2h1HyTaUbv33WJi5TBiSQzrExBECF2GuEHucyAsyiC3HpYUqA5L16b6VSNeN73RLC66UETUVPbMNn1HGDDG3jgdf",
  "key13": "pR7CFPjyQVHYCb6rQYj7KTnA8uT5dks5e16c4L78PsHRjP78mw6PmkXSv7DN3XyVWURHVLNoYyjSQaCqWUJUKTk",
  "key14": "5EFHvGomYeh4iANKjbNXNk23PERqCsD8mZfQCdLCJWuAxyi4FdbiDd8mv4t3LQoBN5y9mpZMPoE3Uc6D2mnYHRjJ",
  "key15": "5oxDXjJvTzbdn7AF2fScpw1gGVKHzNE1j77zQ7U5khP6VueKcdchEZLNTGzPCPbJ12NSCHmaXyYVc6MdLzk1Yry1",
  "key16": "3QzLJpmVkEChLrs76xKLBbk66LEwwWgoJeMRRQFvTtHqyLaY68nNYZ8u58uh8Ld9nZHq6QppRis4A6bak8CjGoqF",
  "key17": "2FrHiPexSE6cPNyo5WvPjU9VuR2fW71Wrojp7sntJ5TMxu2pneUAoRw9DCHNBtVKLcaqP3j8XjnfktFQY1bu5Tsy",
  "key18": "4M3JpnXY8Cupi7jbo37EACWj9wuJinzh3Gpd5Yep8kokWTsD1YVYcph3xbMWo3LFzgUzcTHQU47Jdz35zBe5Twbq",
  "key19": "2KuviwVZFoz3Zo1MHDNAyvwbk7r1NvAZdhTLDixmv1dBZc1Yxyg5sj2eeDiFPsHR2DrYzxbJ5nEDv6UFh6e6VMT8",
  "key20": "4rNtLfywffx5B7zhMu97t3MjdGFURVp3b7gozwAmvYjbV8DCbxfAVuHg4hriFZHrHx8SHByXw6Z8M2uuMmvymRMy",
  "key21": "3JN4vQTyeT6sELrYJH4abtxcAugDvYXUdR8UqAaN4fcefJrzxe7zWTNVKzpJdY3CRKohkL5jU7YjpJZvLvh2KbkB",
  "key22": "4hdvoioJBRteaWUxHUMfkLZmWWCs3wcWnCH4dzzhbCVmzdqeWbJxpjnG8DVvG98kUya8WAUGFve78dQgjgbP98TR",
  "key23": "3C5tFr5tCHWY8nZs3fABmHJhYEJa7YjvpnJ33GnYJFhVu4Gt2VfoxJtasrYmTQnmc8yojy1XU9zMqskvfkVxHdsJ",
  "key24": "6CsQaQHQm58owQhADhAcDdhqiJ8UdL2wU8rZFojrNNQvLYZX7cxPUPCr868T6k5cfYFeaLNxuiNsWJzYXGJTHey",
  "key25": "5BUMA3prr7nGLj3gsR9g7aiC9Ss6FLmKpq3ZpqmRB1tpwzam14PAfdireTwFzuaTwE2s41tfyTtrMBS7SjJQqkkR",
  "key26": "5tfVSm94Mz1KbaRKQVV4oEbgRPb4hpWLvcc9iSYsWPCwM7Qv3DgBGud2mnWswgRYkEW7ryRr5PngFLRfNvZPoVpb"
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
