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
    "U1okJSSVN5uQ9N1nZzUneXx9XXv96sd1ag2aykKJzYHMbLPqTdk4pqzuYVGUJYSGcevCZAxDWJYQdNeVk74asnS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YqC6bHtPz9ZkEiTjrbWEjCHnNJo5eKN1FwVV8AK85zSxhFMyUJMxLif34JBkC4dFm363ZVw6QrfRnWzsiYSB3S2",
  "key1": "2H34ZLgFqspwJCVBoCtK16WHoW4vBixhPqDzSsusJjrsUuhofRGivSowpRAGsq5T18qArFGJtReHbozoW8ixPp59",
  "key2": "4npnLyncEmuvC2DRY8nATmTsbBXTBYhFc7aU3nE1L2E5phCjEiUyp62NCbWwsu8VmWcr6ECo4VJ4crpAAzLpuAZJ",
  "key3": "2Hqm1RjJTA5x34iAqmyufG5UP8ibcrxEYbD72HYfNFSqxYtMsERXeo8egcmYCAz2R2fRBndDbYd9DpxwZ2xJ6YCj",
  "key4": "pc61gD9r1pNqrCMrXhkQJGFQC6F35B1rY4ukKU1dR7bdVDngJU1Vr6r8sokgBB7gNfCZ62REQjgd2ZHnMjx4FPZ",
  "key5": "7tc3vGdqAszVqkiq9pEL62wHgGJAKbU6XgQWVcAMqXKW1PVEwYyQX9mpQH9N28trPxHc5GuTAjQgdePmkBhE363",
  "key6": "JwgbMGj8KXkJmryn5fwn6Kt6Z7ATqkq78LzxYEeJsrXvxK27MxAZ9wJQD3UKTG59dQ6kEA9yeUwwojXFUfEewRV",
  "key7": "5s51y8891gN3ah1PGuUWHLzAt3aXJtAkrVHamoKVhMHU5Rk5Wd8osYrCiaNCLNG312bKDVnvbcyhsS3QDxhEJ8hA",
  "key8": "41jmPRSTy7CbE6YGPMTxdxfvuWmfuBW3PxJw7SzVbS8inxADsTsjvxpgtrW1oUPTSzPKEiWUgf88Cw5gaFs41Tiy",
  "key9": "4YcyT6jLYBiWuCPHMREkqqMLd5nyi4a64iv4FsAm5WTaESaZb14o4AhSDwsiV41nyYTqmGZA1LCa5dr8pQXPzV9d",
  "key10": "2aewzspqxTCYxDNxSp15pTjEH1i2smBshVHueW1aBY3Zb9wCkQC6N8XxNMdey9FZF4sxCS3UiHpu5GaWPmzT2VmJ",
  "key11": "3YZwg9UyMpaMUb7JaXn4CnPs99ZRcG7CAk7c6pKav6Yy3Hiaf7udG9p8SSDmWYvARWsm1EcPvbZPiJhdE96Ai8mL",
  "key12": "4tHSkGBn5KcGntPhMSUXVKx3YCYoMShBBiEkZLAWPULp5nvxAMMwJi8xshXnLLioHc3mVrFvVLYqSVvTtRzrCbrH",
  "key13": "4AfpWBfvio6wqwBrwNGXmPvgxqEkZ5dSs5ZLfiCU15fLG8exk6VkDKDqYpGRMpcMX5AueMyXYPDPV4hiV5Wvm3BM",
  "key14": "5LAijjQSuHkF86ckktCxQ3VUzZbod3KKMmnq435K1Jcs7f1cvfKediUjvp3GEvvydyL3bF3UDQiZT5TdHZzrXN5C",
  "key15": "3XaLm2nedBbZwD6QiKfVfgAnQ4xM5jiCJ74R7jDHeut9Vm1wKiv1b8gjqPweyMrMD9yZSyYruokrJmtiuZ6wzjK",
  "key16": "2YGvhXCacGFv1bSwo8q7MNzRhQJPHRtNxokqkU6WrGG14Vn9nrErp3jSVz7UawdEwhjrDzwcURgYJS9cxvm6ZTLh",
  "key17": "4kce8heh5oKDXTK3KPUL4ZHNiMvpwyVvjnABo6BjR4XsuTro1ZYC5Kfdps4WdEBZMhD2W2muFLBkKbNtDNXNDAfu",
  "key18": "4gZwJm1R6ugaLk5B2TAGi61YTXBgcS1TRiaFPotnoE6GibboffrVecrWd6Qepk9PQbx8E16iy5iScSJWyeC5mRMJ",
  "key19": "54CwEEByNVMenB7Kz4n94jr6F1yDrYFPsPqeHgGibyBEZ7dLt8ktF8rvLV2Q7EQDtTQzs2JBK9byoqkuncXwEhi8",
  "key20": "35GmHysosVYmckkjV9aHp1nCSx732oUrns1mV3RAfNz56LBViYgwGWczAdMimVwvZYXBCov2rKXw9oMLzg25wgJf",
  "key21": "56vw5b45bmqtU7DFi6TFkPAbr4zwHm9BXNnREVKJPyDoAPmZmG5dxum6zKh1nzoeGR8eaLf2o82RZYecLaFHhh3A",
  "key22": "5EA8b4i6EQ3owx9e2e8RqHVBESw5kmMUwTSr3DoP875XLamA17KEeZmA7E7wjagFpf3gSVmSmwVvze6GHRUziD3F",
  "key23": "MCuYmMBbCnvvDA93h31gkwtdVSVnLtw7BXPyiZaxTfPczuHsSDTUnQDwUm5PKMUbGNkNPhtRfBoHxMwkXEkzoFH",
  "key24": "5iUWzpYQbcKix9dRHZd24RvkTdRKVC8WqStUWDZiPraQh5jjVLmLqTsCKbfRqugADc7GEF38kcc3Z6n8z3Mp5EBc",
  "key25": "2BZfsvVRZQCcR8j6Z8tJMP4SayyRk63RBmocbG6PCHwr7jo1fs8P9npgDwWJewdfV1t7iBWh5MTsbS2JpjYFD7ba"
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
