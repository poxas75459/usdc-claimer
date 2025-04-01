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
    "5UfVt4REiNYK4mecQmRRQeRZ31nir1iTFc3Q29Z4Rn8xbpEjqzaLHz4LXy6Dchxv5vBsDGJHGDdN57aDVTifBh5w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32d9maPSotybevyNazodd1DNfgfJNLgPhJ9offAJrwBYsYEHYZHHvazQBWn3WiASTsDHhThtJ7dU87p13zcjDKj8",
  "key1": "5goyTegpsrfTrPXz1SY89D5G5h74SUBmzDzPDUDc69Yybeu6b2mCKTR7HuQzg3TZPbmkKtuFM7VPQjCZDc1NrWe1",
  "key2": "4JvuadQxxxX2bXrKF6iqCuMmmoHCUScUUxUD7n6Pg8XWB5NC2WSboRFBDmMmXcQ4PqKQkizyg51S8Xm2wn2rZZEz",
  "key3": "1ma441mzuKmpQQabcHnjKfF77w7mEZfSm4AwJZ8FjN2wpaB15jM7kjGs6AnpocDSYcyhAqJSciP7rXnTKkSVR6L",
  "key4": "5x1DMy7TbCdmPmQsb7CVu75SNpToc2AEwMLLXUJTRSHWzBZcMeyb2iaCou2caMmRwXRAmuqAaqSYxPLuKBeysEyd",
  "key5": "4Er5Qb1BVuajrLucznbAxR3SSyZbyCvVqG2gs8oVUBeiJM4SQsdAhEMCrH1TpaxFGM4rT8nH2LjXU7Jr7XwuJiHA",
  "key6": "gmz8YtBwNB4AcdGwFwVTRpKFpE8cCBDtCqQEXFk13eoYXJWQi9LrFm44KtgZgRtYNemWVvkW8h4fFsjy4Zk8ULg",
  "key7": "35FKieBjSh6SjgMr9usmRWUgwWpoN6rZjJ8My7qw7719hVbLgf7HHGMbkGvYp6SeinBF9cYamD527vobLnaFhgHC",
  "key8": "5zqNjPPRuGJd537zqDK9B1LMJwSLX1cJrHVBoMBbqKABysZEQ8fuKrVUxvFqCkLZXdqXz6v8q7xmXe6rQzTFoRH5",
  "key9": "5jRbMfMQzkG5NRbtMfZ4SB77GDs7PYYAN6MJyjE4S8toFEN73xfWXY2C5kqNktT6Yt7RFiTq6uKNUNnfpEDcaGCA",
  "key10": "4ng7fXg8VYxpKeV3nuy2UtoY3RRytXCB3mypTSFLcGRBFv2atqFtaPxTJw3pDfFmEDuHtr7MPwaw4KuXkFQgY5no",
  "key11": "5iHpViwsu9NC1rgDnZYa3kUQjWZwcCJCCRBVATuB6xN3LLzS4HsgBqFjm5QPZ6ueo54hk3puHH84tSszuvuedGd7",
  "key12": "4MsP1FUiAo4F6zUfrCNGvT5UQLtHDbbW5TKANAmPibRpx5G8Zjghua7X51Yc4ZCAb2oaCBFTmuvUcUaxJZTRo3uL",
  "key13": "4PEJTYb16WNNxcVYnhjAzeqWQaTAZzDdJmrjXhGWXzbjq9ozUTvF6VTTxb7CprKcYwvn3VQcNq7Gx2qw1QZLPjAb",
  "key14": "4QHtjVV7eeEDPvsZMSrVSWAdtArbhcxxyyrtVd7v6gk8guz5V29H6d5oq9PA1rFqpR1RcewfJLGEmKLSRevEoF9A",
  "key15": "3PvXRTJ5XZ9n8Pn9nZJRE555BvUx8XTGXPb68UAPirXEcHg4aoXwr11S25ZFpEYznSg7dCEvsV94qdX8YMQYBhjY",
  "key16": "JRMdyoA3nsNMMJd3Fw2bYepk6d4DEbukGCrUesqkWpjVDCc6aM5W2X3juGKP6tNY9LXCYGErzmFtPcRiL7hBb7s",
  "key17": "53D1JPWUYn7b3CcjK8X7J9gBE72xBXgmxa8C89jT2ahuwrCGRD9h9oYfHBXYJMMPNgkKsCKdKcZdZ5twrvnZKk5s",
  "key18": "4x9dQoUdRqyRHxcQ6Vy2Ax46yf9NvekWhdQVgq5EEEmM7W3r9aGbP9QaoruZWxq4JHKgJNAESJGAqP32Sn2ouVc4",
  "key19": "5wN6EVUZRNXVvDB4gycjja9bRmVNNvayCAi1KFtsBiR9B41kdP3VDn59GwCvcNPKLLpKgY8Fv9nwr81R2Pu1tzp1",
  "key20": "41C6G1mLhey2ipsbMQviwW22bvATSCmfvyGUG9x2JuWSM3V5i9T5B9v7LTQzzXQb6wMVPRG7Lta9zNL2F8KkqG4g",
  "key21": "3xPD1tCAPH4QduRj24SnAdtQoKckwGne6EZFMQc56nhxxthpeh91VxMVxGymxzNg8NpKZQYExqFRr7UdSLvGQxjd",
  "key22": "4DRW2pGPdRdPJ3um85GpyQJKabWPVdRDp1Td5xQg7nHYVU6sXyvZTAxVQBwKTsTixzaCrNKRvtF52zDN1AFLfp8j",
  "key23": "2WQkKkAsZac4V1AnWMjGDkieBocoChnZtBzFdeUcbs55pcCv1T3KBjmnpCmmEwG8yATZZ4zU5JZbCW8L65gfDZYQ",
  "key24": "432Ct1XgCEh7HsXEJH46m6CZTj64TbSZzuJkBRx2bg1VR3WfMmgMRSfVQxH4gKX7cSbc1sVXAvChbxDvzB34Vyy9",
  "key25": "4kHk5T4hCFMpeRZauDk3Uc1zt1k2CFkWsoQF7t3H9Bk2oNHavzd2ZA5xUQEJd8yAi6UJBMyYBZxW5wRLzQjWopKw",
  "key26": "5qbKxFCJ2PkaLrK9urzRQMrc855zHYNY9Cut95Kk3cA6pmGF7U5dVvcPBK7B82MyiwC4FGdX3ythRKtnZLr2eG1j",
  "key27": "3622Kg8Vrsn7bqnX7Z8ihAWnmw9MUKg7sDhfdKLWuo5PUEoVpPEE3Qwyd1UFMSAqKCAv15FzRTjWum3PfMXt9ZMB",
  "key28": "22dEAQ7hQYwdxkvjshfkj32tcSJMbtLUmJSoTWguXs5rqg31tEnnjpFKCUHp9v4nwcYZrE4npNmK2u5PX6k9wJB1"
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
