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
    "2Kzt9RFWDA4qZQFZptekni9Wn8yZvcjoPzFCnRK9qKaEVu5Q3ShzzCLbgk8X6ZJVc1mNkzRDVNxzixukUdQ8SFA7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "489Ez4BtHwPFBhJ8dVfDVdz8o9J6zuQunVuwqqjC9JoREE1WD7mQqvDxWHNWtXaxYNYLP19JXdDTaYpFYGEZXFoU",
  "key1": "5eRxvSsNf5RCvjYPKuKQjvui3GCABUeo2c64eUepF3zyAh6q5AudZKPRZ9xY2GJfPGkB3FTvoKm5sipnHNYytT1y",
  "key2": "3QjdUGWCBxNe6eLeepDkVTSTpjutCbYotALwg51fhZmx877CTJPWfjzGTXcFyyuTUywwef9Z59fGFuh9TbgZDhtF",
  "key3": "bUPDjh2LMTpegQbae3FBoZHVqXDM7DiJyCQS4m5ZaSw4U3jodEGqa1JiQr35FfVU7ydvsR7Z2uRpDn3gC7gRR9z",
  "key4": "4EqJqynWRQxT1Q1gGXqVSPXZu3xM9dthUz3fLEtBjmA6RjbSgkEEZZnG28zgfMTyuJfej2kLso7Ywsn1JCFZciVw",
  "key5": "R42a2ZbifXUQZvmqZ8UFJofkgoBvSvojvy9tmZxDE8KKEKmFEWt4dhukGze8NcFG2kc14Z1uwTAii5gqWFwSbKB",
  "key6": "4xSZW7K5qMsVEDK1fzh3qQazdgVJ8kU1h5R9bcAbHv1qXYcmvCivvoWeF4zEMe2Tx4LkuuTSmkkXTKfBPVyY7x8M",
  "key7": "5UQEZ2bWKxLTrEBrT8pehzaewvgG3b6dnSmkeRyhrKKNyZ76NExrtw9VYpuZY47TGTVhvW1YdV3uyhqNgJM8XTQg",
  "key8": "3CX5jh9ofUL3d9cmaAAGvUMv3qkD7naVSzC9U9zrArpUfBoEadsMZM8H4jxqvPuGAMBSb33AYogBsz2UAUwcw1pD",
  "key9": "2pmXEAuTzHWfnifKQ7XyRkVzcTYRUduM5DVver3FergPbVkv2pthp4vaCzS2xtB2Q9E9UAip1ZHnLB86QPPAFfhx",
  "key10": "3NspiQdr8eJBLunqo5u3dy9cHnqKuLu7m6EabKdBrfgZHhfN2KTMfaqpcpZD48gz8zUHSYByJsG6uBf96kBBZzfd",
  "key11": "4Ptfb2A3ZFjiUVVfwuxCgmSRWQZ15EgyG3mS98dLgdtG4HmMU6dhYzbpCaxAdh4yDESdvri3MwnGCXZTUaE1e9x4",
  "key12": "2TjoVFWGbUtHgWETd9Mp6FUuNGMds8vzch6LJFkNyxQBoKM5seiN6mF1TNFmQWY6sEwheUaHr8djTvY9L6Ju9pJQ",
  "key13": "36bWwXunBgF8ZxAae58tBim4mahZweTd8RF1Hc7LJguccuNEQju35N6D74Spq4f6qXU6rGmrgMWJm6DaAz61VgWy",
  "key14": "5QXidNuXrDDfnUZfS2JY218fKK8umbfANvrmu1MoZNuLCkVm3SkuiBEH2fGjbSJrJFf4tF9DJj61bgt4MqYzPNV5",
  "key15": "25G82ZRHW9s3vtNhysVG5Hy8ggeHp5As35gMYgn21pe88ZDjKBfZT6HU8V8z3oGPZCgLyWhqcuz6FPWzhr7a3qSj",
  "key16": "B7xcrNbyyKbTBK3jCi8HZcu36XNprjXcYNMQvHdQJ1ECbn3iu2A5a8hTT2ZJyXwww2pNuv34VXpspr8wQULgXnd",
  "key17": "nqJgepvYJHuFopnUn4Tg3cj6FHtNpS9DVN522pF6cjVAswYt5ysszBTR3TT1PxoUhWcQhnvLiTRx2JMdryt2ZEP",
  "key18": "2TQz8SEz2JBUq1qN1mN6genvAxyp88JcyGwGKiFHP7q7Fs61WSgns8vkuxWYE2JNZrjcrGyLAr7bJ6P34QqPfBVQ",
  "key19": "4B8cJaZbaVtwg6cpgSZcVEPGB7axYXNr6qE4jJMvDDZreE2arKkY3c5sn5B1Z29YMAPg218k5kn9gEBzA29wcDaT",
  "key20": "3fTFfMex78sbeokaoaSCeWsxToY8BSqZLGHXK9rnZ47qYJ3AadFDVXD5zZBbHjuJHcHHM2WQo7xjmD8LLP256bT4",
  "key21": "5jx7TosGeCd3cJW7c2yCH8u4USvdayTT8Vg8rfcq7zgLkMiAWBwMK6fwppAu65HkAQcZSDCt9VjSBEGX1feUEzkZ",
  "key22": "4biRfu3Wrb549xckLC546DuCqaK3qXPkRG3b8SD2kAsD2eeosyVCyRovstT2Yra2fgwpB6wGXeBb37XxjxEiGB4t",
  "key23": "5skhwPGuyY6AUDAfaR6Uiq2fSMDH1FmzNgadtm1MSk4phrJmKGdm5FRrxrTvyYQ74LkRFwg15YF4vAzQ2zn5EeUS",
  "key24": "4hDXrywR6K1ePSXC3jr64bCFNX4S4ReheanhLuVPXDt4ZmSxaNZacQEY89aYeRGKU7PJS3TfRnrYp8NBLA5hobGj",
  "key25": "XvqKsrgaK4uWvStHez754DPqYiWVchV9V5jZM6a6os6hyyFZHqb3Laes59RYa2958CMBEGvrbkmcY2JtirxDVhM",
  "key26": "4bCzQp8Hpv7mAr6Fu6FJYnhzWE9vSWdywVMXANvWfgqtz1X9XvqHXGChWtC4Y3rEoDvdABJ5JD8XUfVsCjtTeqzk",
  "key27": "2gR5DBx3dCfaKGAgVo1adbg7R6bK2CoZT93UGGGzKNFrcmHwKYXWZrR9J4LvEmEoCuc3jNVYWY4rTDY3kV4uNxN"
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
