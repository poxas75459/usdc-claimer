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
    "3sQpQgSvn7Z8BJBJv9A6kEXfN1XVpg2A8tQtyNw8JyJpv6CERsQ5TDUmauQ1BEWxkwTyZFt5DnnDqLQ5EEMbyo1d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AEPi27hKsknSbC4CCNEwJhpAfPHr2ytoCUUaoWtM5nbmaRF1yckPeicXRSDDYis8xNa4fQC6uTq1t1mJ418N13i",
  "key1": "39vcEbL9u4bJyH7xeRLfcNsjVjCfNwjVNum9CCPNFHc9C5PisxMS4Y3hiycZAmUfrKuD3DpQabzb83t1WVQ7Bnf8",
  "key2": "3qUZw291aKBscLebcVv7HPWJpuJYGdcGBQnFw5cRDLjhVDFJchY5XyCdTu8fQvgFavJdVDXsgZ43nZpcUFGpupB4",
  "key3": "LmC2UBCnT7g8D4Ho9RVdAgMXCvCwFVCJFMu7F7pAN2xbjQGp6oj5mJEFGKqvVd76ZErJz9KUq4Y7arkccA7joQp",
  "key4": "3KL2CPL1zELDvB7MqFjWm5nMXhYjp7AGExmAeY5cpZsGjzWQeaapUMjqyxMwPtkYM34EV3TN5v5g8GNEmv6iLEqA",
  "key5": "3LVm7C626VvbUADqCxvqCVpwvaSfezoU45ijR53kSUJ8sgCydKXDxUKQFPEdtmyk3FWixYSnm5M1wPzLSVhi7UrX",
  "key6": "5fMmE11JeFwHagdh7bjAxB4z6uAtjHvL76efbMsW84Ztw6aMehpkFnxhy9QeebPcrcaRsqhfbG2HeaMufGKgQanr",
  "key7": "3EbdoCDG9FQVtFyeLrh4FtEtXRYrCvpFuZiS35b4wDhkau7LAjfqGUG2RC1MGKeeuTquDgiM6d5o4nELMwUNhV2j",
  "key8": "NbvFw6fdFJxY4uob1UPyTfpKDrXXRzZejAF6dTecPKfsZwM6QD5Aq4Lq4DhLhYpE2y2wWzH25J5afHooZCvVPb7",
  "key9": "QuWwtA66gdU5BQYzVV2EyVB9hQ3Emd7MyhoUgTgXjVXsLXnygUZL8MELPLXXYbEQcgs5XEGJhMzyKz7J5nJsJTt",
  "key10": "9ugb7rknBRKZNBEDDWE2RWN2ghwV2fXumnAJ7J4XQkGhJxejqvy1jGLR3Ks5xxJk2DLyqMd1TsRQRsV4jKTLpAr",
  "key11": "22tYjRFsHByvRWNJimME5DrAcSYBZ7tKv2UiPtZxW4wEWJpZ71qvqV79aucGhAtTi71jKwsxkkSNBCV9HaHFgkTv",
  "key12": "63EngTfiPZo8se2SD5bvU6LmDGB8h9z7tjXBDYgYLxSEJmYuECqdVkjiN5K4px5AJCcLQ1ZsszYSmXzfkPn8HgYs",
  "key13": "4BHstpCZH9o27MKBXW7KnPXvrGznMobEKyX1o8QnNcq6ubiPw5qPF1swaMwCjqeeeaqfuhh2cSgEcAwUYrgdugfm",
  "key14": "299ZVQq6RuuPufbjBy4KKdg7ssLGHunyk6PU73wRvhxa441CJ4P9i3ZtXDAKufiu1vy737Nnstj4AP2xVRnmWTLK",
  "key15": "5f6SdMCph3KJSp66kTPY6PZqHT3hRTqVwUEvsAa4oVn9YfSeetzUnTxFg6LNFs4AA4uJSCpxfaiLFZUcBoeqnfdd",
  "key16": "5BW2UH67F272qmhUeSgLEiAxFpRA4EFNyxqHHmzGpEYdVeyGvvfzqr3R91UxH3UkaeZDNpmmxWUpAA2tDiD6yfDp",
  "key17": "5BDsP89uDbaTLzLRQ9ooLV3S4t8ztsvtj4qnATzrNfQKNJVYD9nFbUEYk7WxaDRnw6DhjmSs99zw4ChgXJfdiWSR",
  "key18": "4F3q86FXSwk5FsjQJ51qRMdQ7VboUNpZ1ijE88EaX6XmxjuLVeGQvGTqdjavzKCRJb5b9jqwcfRabFv6d5AsBE5C",
  "key19": "5EdctK2zcAsQeijrhf1kS5HM2pQtrVUVv6GTGsSAjudP1pVMmgjYAa8eoREcocc6iQfrXoZcdWGC7eik9UjECpNN",
  "key20": "5ZPfXNNKh4U4JTBkL38K2dQSVp8F5X1TiGeo96VQ3LF3XhiguM4GwthNpJkoGYbB3owrnWb8gopVveoMcE3mb9f7",
  "key21": "4i3F77kjswH7YwkTLpU8U1nis1QN5JB7NnyjqZ4Kjpam1G8Ar5xCYepyNPTsdaUH3iE1CAQow8y6dLBnEG5EqxD8",
  "key22": "BPTCCi3q8MEAC4SJLfhxfGCXTqET3ybW5EAVogizQR9TKpMxbpfCmCKPjBQKkhQ4CwtcRT7qCFx6KW74RJ9XfoR",
  "key23": "2oDYVDoKD3m4kiJLNKnC4Qxphs7QJRxLNfULjbYYr3bTwU9wFXoBLdGAqE2QRX1tUwanQ2zzkS9Xax2jY1simPJ4",
  "key24": "43r1JM6sNWMPb9W43k3uC76DpXXRxTBK5KfM3tKz1ss5sQ6QU53hRt4UfUKCbBLzUFQ9FkW9GbVB8Q3WySB9afht",
  "key25": "4ZEiqvsC1swqs7aKuUqv5zExvvDKzusKQfJnjSf7Efi5Lc1qi6x2WpLizUDgu5DriQYQdNnZBHcQ2Xy3gEaXYzr7"
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
