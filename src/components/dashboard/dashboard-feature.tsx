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
    "382JVV8CqMBu3Q1AGiCzxHNFE6b24BjBKUWEcsHy5fyoM2G1KTJhkU9PRjjxPWQAf73MKfnNs2kwr7XFcbUizpcw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58ZEaf1KyWNDH5VxKtsTrCip8jidFfcY7BWpNWe3Wx7nEEVUrgxojdmA3EgTCJwAMzquZCVKGpmuFqXDpZqiTz68",
  "key1": "4U6SY7QJffY2szkwRqKAvajuj1gdE2JCcdd5CshWMJDfvEFUgMfywJ2oSF2LKPp33syfF1tAGbS7kCYbpdVVxgEe",
  "key2": "4kVz9ehFa95ytt57zgnm7wdEKEgmafGqKSgcKRvsut2Yfwn6LvsgWcEFwwPiwUSYdXH93DTJst6999p6MToo9oVu",
  "key3": "9TUFWQbJqYWq9jSb7upiUDBGnzdtSYHq5KfAcyxz47GXvjvQcHncHnuodJwTvuJGtWshL28sWBvrFPCuF4p1VKN",
  "key4": "Acc7D3dp3BmkjLXk7SLy42HLnK7fu2d5T7zDjZKd3E2PH1TaG893wyEqhsBL3QoZDtw17o8TpWMMinbgqyZQmDP",
  "key5": "2qXPnKh8aZ9iEWouco8YK9frkHDkKqWGehVkHQZsWJrodifXhBsgkAzXU8k8vmHwZLdMWbeXSSmZLGSQy1juaNNB",
  "key6": "336fFSaa6Wy89K36RiGWkckk3FMjEghVaEdoEiKwFugnKro7CxkULEoeMTJxvbzTGd1bTKzVfTEtaAU4CB4ezDuz",
  "key7": "4t9VoDQzpx4r7kpB9D7SxzipAamzQozp8iPoUCDTiLS6Cf4ZeJ2pzEvgnUDpqCQtf3vpRhMNPKQzyCv6wGMrRM3Q",
  "key8": "2ninbyUygQggFYR2ZP2fJgg5UQtvHYAUVgdCnSrHWeifxMTdFzHRrzKq2hyBPjXeyKLaLNhkTb8MQjRjkK2je4gG",
  "key9": "h3Mw88oM6st7HHQyAfahZvfVy9HVZX7wHLsf5QcZrPitSknZVhP4eVn9y7ANgkTyB4nh2nX5B9XN6wTy3KPSEhy",
  "key10": "SXH3i1QxzeJETDXamisWAPhQbxEto54W8swmjkDA8V4zQWfvGCvCZkxNDFvkwYPyWtQCiEeVHKnH3DkdH6DEcqS",
  "key11": "5SJsm3iXExZp9UDfGTCvYBBHnSJRUj6x8HVP8wpMmdhJBvoFGC86GE12GEXish6nwJACqShb7brRJh5JRVGjBEKa",
  "key12": "5J2GVPv8nHJf45zSD1pC9UCvsKKpHFEuovjbcczgpKU38vtRHSy1Kracey64YkpXkuMe732xBWdFNr93gvD99S1G",
  "key13": "3Dp4XYjkkUBrFLvYtB1Jx7fe9tZwR1LcKLnjYw1Gw5A3d93ox2C8HNAbvtSFUyNGj7qj3fxaBUFuaVdWe1W8HFW9",
  "key14": "2YDYFo4tskjn4qGrj1ZXK4EbzSSRQ9ugTMePzmFHu4ZAChYMukgBhSxUaTdw2sPaygMXfyQh7QMuyaSUzco5NGfE",
  "key15": "neuSZjuKCwF8UwY5VBkUSepT64mnJZQ8VaLLi522hJRbA36XPLUxPaeghYEVq7HfyHTdcSRmp75KShiWRJfnGws",
  "key16": "31b4P8V4ZUKWRMwbpuRBPdtkEU9pi6bn4kkH9XQvLXPDdNLpUvqWGKrBk9iBrJvDTSjxwqWxBtYj6hP6jNRnLFN3",
  "key17": "3Z7gkzCWdZf5QZquzStZHs6JWZAJAsYx8LqY6BqbNnVMfQCqe8gvzSC8DE1AVgmPhfhfDFwZD5QwX6JZw4hhkWaJ",
  "key18": "58nyd7LiRySDFKoUpVgnjLbGW2xJc71kt5iXW2cgnRTHwjT2zBUCrbQ5pLu6q3KpKrymBXxvFFYsb5Zzg3F9hVXR",
  "key19": "3cyeUMLSZ6Hwr29JiMyWLnmGXY4kePkLtii7VYPajTcSQVfargvfbkoLmTopA1tRPUtnBRpcmTLmxtktEYeUFGjq",
  "key20": "5UpZr7ejQwqMKX4hyFVp6ZZVueT39E7jBiGUoxF2nZhDFGZMbeCMQ7nvQyhp2W1pD1fPvaePVm1kFKhAVhXD6Gpx",
  "key21": "34JoEnRa6qrcm6RJ9UzACZa4bgjE9A2w5aTYAkm7r6ab2q3KAiEsysWyDeidvgKvBdGjzLFw2FuQP4aKwrwxWoVj",
  "key22": "26FMgqZY8HZnjLGRD8grgTCY6rwvVi7WGmQssCSN1qbesGSZ1C4BXX8TSxhBrxGwkrgM6nacyEMb3ZM4Z4v35gXW",
  "key23": "HVH9xiYocg4iNw1DSHYP7J53PXTEBRoXyT8REuuJaciix2biSNtgZCkhKMnv8Vm5ERpKusQwzHaeW2dGEWFSZoR",
  "key24": "2BtKLYQFyMRBp6X2qRbxN84NqxDG2EJ4eajk72MtVVkZopkuqppTXJzwnGpusDzZBXPuvw8JC9pQZMWPdHMhWuJw",
  "key25": "WnoFo4B814169F8rdVx93EkDcFYQXirXwjgEdYVvpEz3C8kimZ6Sbwbv9w8sdvD9tyELhmWYVtcZtdMYkJgPvfH",
  "key26": "J4jFRpJNJA7Tg6cuNN4m6Lwz3Ygh74xUvmGLZECWpyQECY3nwJQQiRax7wHXysXvoMEGeUfFUAcS3ugLfyG7nS1"
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
