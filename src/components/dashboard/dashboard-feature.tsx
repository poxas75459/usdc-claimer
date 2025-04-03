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
    "2P4KMXj4mTrtaS2nTVKLNYGjWUEWX5YBJesoNY6K5VzPqqs2NaVLZ8XTgxZuATMYxdwSvzCmYvaFDwLNZXLi4p24"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gTUFfTW1j5mVCK68E7iG7tNVoNVMwa4w2wH2nJt7UuV7cQPvdNAVCyVu2T6Dm5dDYPTh2kQ3XKgCxTdEwZmqVHV",
  "key1": "EJWLNhu1vXXypwmHdm6Laqp834iBUg5iqk3hWosGhAhuwRkJg1GdS1RrwHHwrj3Kzj7awNXw2k4216i3tnaJ7af",
  "key2": "2yD6ZqkHKRArwSxvwf8eiot1v2V1HPHahYqXbLQS3jQZfVbLXSYSXWA2SzmqzjXKvj1TxHfTD9dmSKGBfCJyQMbS",
  "key3": "4Gnm6H6ggYUzyTe2728k6iGRTdhsPeZ6JLWMehF5qrx3FuzSmHLRUhn9GFPm6pe79DfefNJHAcS5gvoXG7rZCzg3",
  "key4": "5JRZijRyzDpnUF6ydiAFoeWqVmrsYaXdjUjEJFd1LbAZ6dAev3zZjAkkimwwEiyjz1vsBUsYEQQK37unnkJoo5kw",
  "key5": "4couuKxxtZYRbhKJzCEVE78pj8nzr3fYYUKxjxS9MPsE2FLNQYDrNqMvQ1BYYmxseNfnorDFgzhxSmPB9hEqu2fG",
  "key6": "4FrQsFSCVPeA4E4VbRLu6fXtfe8fZtD3bADotprRRpKrABasU5kwZiKZizbGk5EBqiusgJzZLf4Xurjb1VsrS4D9",
  "key7": "62hAC6aoVd4ZK2BTL7BPkxyB7vDP25nitWNonFQFTDVdnH7i4dnihGU8BAdhFrSiCP7iVw2ESnDaCAcmV97yLo9M",
  "key8": "4bizaykB2WrPnUGHyZ7nGpJeWAvWvkgbRUGtzBfuSdU8hTYi2jBnCcqHTxEzoJpSFNh3jmHq2ucSYSmGmTLM3ALj",
  "key9": "4aoQX1T3v5j7KYAuWLB1HMQbh5KbobJB5v6RxDB5gujLnTuKRUwREeQnhkGQd6Yep7DG7mHLuATHkjHx3rmTBmR3",
  "key10": "3AgJwaD1oTTmHS3stjLx8cgF1rh5Luj4ESk5UjQnmV8e6agmNtSGszxou1dZwA4A3Smr4KwUmTGXvVcGcGPeY7u4",
  "key11": "38amRM6gkHrsbkaJKbRfuNTycKygzSMdmYqNdMkqjJSdGScZeXLaJTGVQgXtZUnjFfWF6sZHGdqquRjWMDaLXCgz",
  "key12": "2yDx2f5ZwFiFbDqTcDuYFqEWBz9VLgPMV5wiN9eFnry9Zpw9Dbqfu9JZg4kGuouTcLik9xquZyCSoytpxvw7tpnC",
  "key13": "tLonG6wHYHSDVt4VLg81RwSQZGbZ8uS2hJ5eXr2NpBip7vxNqxyPg39So2rRY815aqatsca2aEX27UV9EhLRLVw",
  "key14": "51v9e7dGFbdEnPyH9rL18ztEiraPLZr1gLMDkqCZMyqm2wguXEsqTpEY9REeqFFQdcbFYKPWg8BVBGKS45Knkaq3",
  "key15": "5Z3PXVZZArhdfZCw7USuqmD6fVzSjEiAHjyiPmMtW8fxCjR3s3wmaMY6PJXpJCZ3wWvDgDp9tgmUnjPdrrA5qz4T",
  "key16": "DPyU8pnpR1MFKAPiu4ScTYrwbFWTSJLAr8wPBJKSKATLWiW8HdQgATwjZKHpc3BU6zCMLZWruWHwwetSQRkK7dg",
  "key17": "2DXBZXsiMJgr7uCbn2dhaeBTQcLSeLxaNhXTgguG4hPTfMYfZ8mpbAr4iy5QaZJ6MPFPFNmZXKbodRGZA5ibiLY",
  "key18": "cuDJMmmuusGP6s3s2aZBMnob2g5kicXoLc22emudf2uWgHDoTz9Ghm4sLZjKwTA69vXvNHeKyA33212i8rwR42i",
  "key19": "5G9h6DU111jdPfzwL8dNLKnKfdaVxw7t3e9uDu2xCF5nphqqyDeFDT2bNVWjz5WDJ446vXD9qGazhxo9UjkkjGi6",
  "key20": "YoCepjcLcJRvfd4vv6mm9TGPwcXsQLGfYWaM9pEmgDWMFtLXpG4JJTL3LmGRSJ81ftCA4AmDkKitz2w27cscz68",
  "key21": "aZoxiahXmaarCKBR5dDfNLp5ajqfE3WVbeTm1fYNncrZCiRZwJHZ4ugViidjbi8zConEJdBkBmLh4nQw3uJzKf8",
  "key22": "5S6HBWTj6hqaxzCYgVzzW8t1f6D9XveRmj6ymSF1Q8aMzmTgbcoX22G9CPTgvbwU6wQMMe6mRdpxzeakELDs6BF7",
  "key23": "5e5V99ruyNq8Tg6v2nAk7PCiuqs1NqhZAXuTeLvreJPk9zyWKKi4SEPCtWKT4MFJNbD1rjvpZ2mK1LWbCANcvVio",
  "key24": "iVddWrThm6uPDmKVQYvUxNjpNJLaWJgPMPMTEXRTMiJjBauicLKpvycJAFBSYzjgGZcXPH3d1HqoZVj6efxMjq6",
  "key25": "i52GjjfRezES3jXsQRdXh5ZYzYuAtoHaVfuZ3vGdQhkAUPAMoxnL85GDfVAX1uAyXyRj5cBi27s6eo92znccr9t",
  "key26": "5thpf3i7qH71t8KsSP7swpSGmQUVC1ZB8CjNi5se5PguWaHd5n2PK8fokWt5Fn5qnhtbqSMavForLMQCrcVkJYuB",
  "key27": "3bswXoZduLfDSgyfm3zFJQZP88HycZZN2H3sJofZhEUjH93M2aEtEAT1bP36TMRGkq6YV15pf7pDuXRKMKJug9DA",
  "key28": "PNpVsAYfpRTaBmNaxF2qREUhyx6AETfnXUDGnHHYSd53ff3A3qrXf75e44PdCj1yV5QRgHKA7bZPfkoJSsc9kEB",
  "key29": "5MJVgWFcye7YmxMGYbPBFxyouvJH8RzpHtkFtYUnti3HQfFe5JJBY54Se7xN8q1F6Vyg7rfBN5oq8iQAGsfqB49p",
  "key30": "4apP41PpJHNbHZ9DvQSypeDbXwK9DFRTToPkrjK1UjA8JvEo7ApxhiSKEYrxCGkcb8tBAjdXMBqhuFdCBuyYX27K",
  "key31": "k3epzbfqs8XBijSzJ4dWqr4TnHewZcTq7HCntDspxQPGLjLhWcVZgx6KuUUTiqXC8eE2t8ASj6AK3mKje111yDn",
  "key32": "ZehYkTAPVSXA1BcEKVyP56iTWRNbA3bQurCfuZwnMgYvwCAsZNgTkLA3tNTDgDm4GUcFCaA6RkodjUWtPz6T3Ge",
  "key33": "3jRQiEgES89rdWSb1hwj4k366zCorQkCQRHVfTxitdPWYUpPt2tvdBzw7Ku8hxu6ngygnibDrYK6JG29La1qs8Tw",
  "key34": "5EWjJste5y2gx3EZvzgdeL3KygQ7TSadrDgPx7MkepksjW9dakcSuS8B3FsYdiMYaL3MeGpf97zdDQJ7oNDVRsgR"
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
