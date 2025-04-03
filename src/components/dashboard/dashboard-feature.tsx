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
    "44bwFbfv2K8myALK2Bc5PtTd49aZfmYEMo2XaoCKMjnJ6Q3bjH8kuX1BTAA1oi1rS4KYMDEKjAZu7X6CXKAspdib"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mMXChW2pSXvpwMqszEqJQGzKEG56JM4WQnYAkCHfnb8xrg2XsMZm6kF1T6SgUjpS9xr2WRvUMRcojFDxwvNLs1L",
  "key1": "5wN74VPwoiVaUnTbXSCD743rVyMGQPxFWijPf1jwYhrj1LGoS4X7VVe4Pfsjz7BhWFaDxxRfCaAFL8LXnTRPaqf",
  "key2": "3ixZjnLPdkqv5cvuRWK3J2McccefpEkKRUC15y9DATB9LCHnfrMWfvwv1Vc1unqZbJnMQdwXNkH4BZJwL1JyB6Zb",
  "key3": "2hPPFHqeFw6PWMrjtgGNtYAoxr7ZQwX98Gw2fF2C36DqeAmCsxVYtYvANbGkLgv2RE19xvqu7DjCG82YA1JKZR4G",
  "key4": "2zxDirvLZdq8RnqV9gYH7T7RgUMc5D6Z3GuCicMpVDF1mszUeELShAJUrY4Cm3o4FivQHB8TcRVugAM1NHp9qCAv",
  "key5": "dC9LkK3bp1MrwZWVje2LfhXV6vNfqhBP5wsG73Q1PKejpU3S9v8oQJx7DYvWuGnXYxxz6VgGuvU5xP43JHqY65G",
  "key6": "5ktrH6YNV6oLuu1DJCxHQSLa4gXdqNrraPznZBHPym22hozEbX8X9XuJpHVKnN7DxrqSUBGtutoW5rLTBoh1FeQA",
  "key7": "4fJgeZW9FLVpAzxu7nTZaSXL5mBZswEcd85r2RFNKDE7x5p8rYSRsENyCLEVkufANJdvvEcppGnibDoF4DBtaTYx",
  "key8": "2XVnRnQFqHQcxGNs4gL7ZMeMKe5S5KY3p1QGQ33fhb6c63VrZcjiBa2zPtKuLndjUnShS2u1XkgaQgoodyQkwvEz",
  "key9": "jigrvHcSKreAVDK44Kr5qgvvE4qu2Zw6YQz2KtYxJZ4t7ET9KCcY54NdPLzDdWVw2HNFWboRH9A6Frmc3rqXEhK",
  "key10": "4NDWsE5K3Zy6wpVqoGKmeLDp8tiezpERKWFZmK2teyMbkKQPzjGCSny5Eq3Saw75hZHD8F86kbsSEomYe8tCMvw4",
  "key11": "3STFLhAhQzcj4ZshCGftHzNqP452gjiYbVxznFqegMCcTrJa8JNVkpJYZQsc5ZGyVVrmwW5YXSCSr4Qischqjz1S",
  "key12": "gm5kwapQYo6bEhtBJaz9jfqUb56fAdumi1yBzxe8QC6dtwnZvn8VGkaeYPm5zF6Pn6Kt1mghv8NF8g3SQVrnfmv",
  "key13": "2RnTBBLGjc5V1GbRCPZUBRAaUJkmGp6Jj3b4CMni9cyxq72cLYZhYiYny9hHXAAoBAYYesZhY5qrsPHhVVrKWpki",
  "key14": "ht43U5SGedu5c7hpq42z46ZHbxiuSLt7tvSfaVHUi79An2mdtbN9g4LX38Qvmt9WvgiSJDp4owJcM1TkuPQfPj6",
  "key15": "5k6jHXbQ8MnP6yf8dEtASnXu4rEMXkFEdCu1uF21de1xth4e4zXHzJRpnpqSWQB7S5uLcRtrNXQ6AMsUsXFZFDB8",
  "key16": "3JNt5iomukJQkeRnBto4igix1685azNd5wjG5zrBeKuccBTUJgtBR7fkfCaN74PLQxgUTnA36798PJxXJCutmpdp",
  "key17": "463sajE3ooLRRR83tbamj9xJQxQS9dh88AyC1EuDe5xLhk2LKzvUosfBSWuRmhvcTBJAM6DxvYDGn3fnJ9Yd6bgs",
  "key18": "UahaXVYtgJKRZTusZjWegj3Du2BWRjsrj2PQUfbsC4cYNvkau2xXuBg7n4hCPLUPdSQcNoS9W2pcRPNDD36g4zT",
  "key19": "2BENPKJ1LW5Q39MiDt4r761d77jeW4MyQsd4hPk6fvp3mci1LzJj8QNnrUVe8yXVnFUR5b3VfaksYo7VMDnSjbQ8",
  "key20": "f15FP3Hq9xRvzMeJpAZwLxyiqr431WCuiVWkZABE5Kq7dzzfc5G1ByS72aGSTfPU7bZnBzyhM2iB4ixkxy4Fqov",
  "key21": "pYcxHrPkJxyma9r1GdsM7yMamE52i6CLMruHZ73bsu7heNpRs9kv8vdu5GwauubnfySo1WVEgxnxTJAieBZ4Qyh",
  "key22": "5N3ksyBzpHyboDmkdpRPqqw7HeMxTnUNZBghj2VMFzjJLnTv6tqGvoet2qKE5TxGisv38mKqTVwjnhf6CG7MCxmW",
  "key23": "5Zr5z7koQ3HuFuV44PgoU3v59nbENLR5oYU6MeaxuDa5szxWSngEvKqcuhT7amgJ361boaXgVpHUGLWRVFm3Rhd8",
  "key24": "4BtNwJL1mLfLJBBC5kYVE6D4D2sFt72WdWRUHxPBxF6QoZBdNhurg7QeStMP7Fr8oG6FTLRZwe2eGt65fLo1o7zA",
  "key25": "f4eSa12pRsfDxzBFkuejFvhWTas1XEeZukeD4tpQSm4pS4Q3s2fDK49UeRLUE5q2ysB2zY8jkhVV2iXz7YCN1Yt",
  "key26": "3LwQPuccAgrXKcYReqTWyHe9fYHrgfpzB3XAsABXYsRGrZy6CfpyoztAqCWioznhrEWX7Qyih82x48WjnT4gVqV6"
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
