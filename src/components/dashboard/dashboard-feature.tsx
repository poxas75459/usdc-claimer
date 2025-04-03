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
    "3zuvqd8rhMjkdhhuaR5tRvsXEUWwKo5ruGxakyzb1W3X8UTfwG1aQ4b64zq6bBz4bsqcQmMYRMsV7GbHa9wEexAB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4r5SLdvYWGtvJheAnwtoLVmjiAPhoZ6fDpiDbWnyYR1KtUkrN3HqPtniVvc6RLvnPo6kdTnuh3Pb6huFDxsyfNen",
  "key1": "5cqzGWndUUtX9G9tjf8HNBRWutz2anebwGqDCBKPrGk25ihVZdH6PjpSyy5Qkjh9pLoN5m1xH5HvjQnGsJGrWpwH",
  "key2": "5Fj1rQqGQd5sJaomC3UMKR8Kpr2dedxF8h3kxBsWm8rQT866dpaHW9h34sb8T37jVaJt1y1BhqRw8em3twq3Ff7L",
  "key3": "hGjptH6SfecCoHKzNwQRXutyVLDHTkWrdGfCW2B1zdmwGJGJi5KzeQq39W3zEHCZPnFARaF68UPUtjEW1cYfiGe",
  "key4": "2XDxCnsXqzYLtoTQtqyNTTTv4hbPh2YzdfQ37m7K9rudbvUjosqPcemPqvMswNUDEqrcZLUwpTiCvRSuQEZHpCP",
  "key5": "21NZa28Re3uv3xGFz6CSk3F1qa36jSdqXiZ2A6MwA3ee1rfwaK9Xh1Gn7BCP9W9CXWKsW7cNJSXGXErpziNuX1A6",
  "key6": "27YKWAZCqMYWdtM6Pf3PdJdD7yjX46pGGRJW8FGqG2gBfs8VbNQestMotJ9sLNqfmVeqSaJbL9fdMF7m5FPSXnRS",
  "key7": "YyEh3iosk3TiGWXdEybeMNvqPZXyDWFkwqDLRUPrTZmvWdtGNmARx9PvajH2n9WjrxnZXyPw7NivTQwmmiM1Mcx",
  "key8": "3oC9Wh447XsgzkpH6pHHQTzfPMiouuLPCMo96tbDeiYvMo9q3YjMj4vhvfHxXEeAtXrLDAV3UXKu9h8jJAuigG9W",
  "key9": "4ZKViHbPMFBuoQjteiFJbASybpR5HLAWqPpYkApgZgDQ6P9ie3GB48tXiJ26gKuosK7ugkeTTASvRtu6yKQiZKA7",
  "key10": "2QjkrDwXSnjsf9vnTCm3Ah6166rRPxaFuCd9apBNHkoUhd3htsqcrXT3oFXeCoetdU6yjF4iCstTZRBKsNH11JBY",
  "key11": "s3R4ynAvejLgEgyo3xzuPA8kx1rVXZnCbb5Ce5wbJabiUvyDgmNe5FqLw6DnDQcWcdfS8YKserfENQkKB455oVD",
  "key12": "3HsrPXRYWKHjNhXxTuSrSghwPyfqcnGVLiynSxJEMj4hXAiGRAsEi3TUL1hrLBWg7kTAFRtmbwEN32jvTxoALfx3",
  "key13": "sxDHHNadMApf1eo4TeUckCPRnCEwx8zG8GPkEDCzKtJfXtMPZU6MfGPcquqSs92k7BJu1e9Zg4Dw9MgKGtXMVKS",
  "key14": "5mx8i6r8iXGnsjgnSXD9b9pkMoL2YHvBi47Ay3XwwfjGNk64H5MVoCJ81wtdLueSEJASsMi7i3bZUnHyNTaXA42e",
  "key15": "X6hUczPNCQ6hvBbwdbcsxnBo4y9b59iApK99gnct3r2ivCaXrBcVX9zkayQ6S7QHBeKKhu1dEMhk2E4FzScudPH",
  "key16": "b1CB9P3veycqLYFCcVJQkp2gK5gbjnXS6dvJFd4AP9jVueEKvBV6vniqY2Tnvwjapk4nxBjt8DTBGsaM5VRqJxG",
  "key17": "5kQWy292DiiDSt21rXwbTvMJGjvLke8HzFXYhJxvrg2ednW2GESmyYCa1et7ryYSxHkbMdEhRhLQD6TtP5YBy6wR",
  "key18": "4tfuDuT3drPRbWrnbLm218aQS9sweKbDL555t2Kj8F23A8oQbqQgAC9pR9kBL1L7dSYqnQPxCDRSLUPnZWfx95FP",
  "key19": "2Z3H7EEKomRHjLdQFY4KTnGkQ5Ggk6kQAZZmqmEuKD2fTsbpRStXi6tfNC7SaLjRNfPxcXHfBvn54FqvBnDiCD69",
  "key20": "2thrBkoBhfM3eYkS4Vp6EyQzQBF78gWWUZmrWW3XpwUpCF8aQ1a2USdjRWSo1vS2YEcpMdvv9LGu9M4DQMY86LEp",
  "key21": "5CAE2Y9c56r2J6iZVJjM4Zdb8YgSD8scaFTGwQ8fwDDRhTziKK1ygjEZEoYwLZVYxfqGHAiFfM9rwQ7UvaqPJPMb",
  "key22": "4iHcAZZVtxeqcgwXMg5Zesp3gpCNXM2Wp9W5tWv2iRyW2jL6xgehQhEakAW3jeD8YDg8HJn8nnjzauT7TQBGUYcC",
  "key23": "5kC138wypEiSXsor4ScMehyEQZxXyuRPM7uKQosBpnaWTqism69B9Abq4HCceDT4omiQFzvLGQxnx8zx1yYBUh8J",
  "key24": "5pwjoAQVrbNve9TdHn367wNBpuQUjEKop5ebz7YTbDBeFgjkoGipjfhaDH74Hh2WAr1QcVhvZocGG2mRbrNxr1TU"
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
