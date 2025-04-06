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
    "oPG5QXaLDEGthGKvCYNC3ChNtT1zQm9XVYvEo8CpCXuwKo4d74wyQ2WRTwEfgKN3BNrdZd3y4Px5EuatBiqKjg7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pnbUKbPWdKX4aGW2rYDw5YwMPuts6xmPQK6Z5H9rrjSTxnKaMZR2pJVe3qeZkptAabs9tL28nur4BHpXFgzwR7q",
  "key1": "5ozS7ixvzDXuGKmfWDyU7QZaiEGaYpk4UqPTEDGVccu6EdE46urNz2CjYbkxHBYwwhooFUKMNMe8qpUT7nYDsbWV",
  "key2": "3aP3rddBd3eXeb844sXxcvbFq8hsUjJYYBiQv84krFdk32pMNWwo5kf5L6N6PPnFvzA8sBJy8whcAKFjbhqFJo5S",
  "key3": "8PqTxDDmXK7znYrVs2mtGErHKQi9DYr99b2HRQmi2Ty38oefdVVXexryfy1Lpoyg9MoUXmgfW8N7CxsaQbVHWyj",
  "key4": "2zWNGYNkJf1T3c3yYrZKbD1FZ1UmKoL2SXRfiD93aexyzwX2r4TPLyq7wNm5xziuwtYwBBHheu9E4zFEou8UJcCe",
  "key5": "2EtwaxaGL2AcJqMu6Gbr7cR27BxHdsrSYsz1RhJ7QCZ9VuesrpWezPx5MSyqZeszTVse7k78GETUzqgQebo2M7zD",
  "key6": "28quQrvDmCoGTfcEgr4oTGXQu2iDXjmWZcQCveEPPZWLoYsTmZXXQcnvEJAFqRAErhqZD878wZzz7DsVBwr5GZuY",
  "key7": "T37EDeE8VpieD9qPbbfXEiJqNc9f76E5zaNSWxeuRa5oZoDWhn1yeiFbXaMQNxLMjjBivh6HBhnAPd6Fneyvevp",
  "key8": "251udVhiKhzyjZd2VyadAB6yiwsmHVCSKJRGktXv2wLmJLqs7dFHAjC6PDXZRM16yxvurDgCHWBQ7hJoha69EKDc",
  "key9": "52h4YBzkjRYo7LjLRuqgo8GEuMDUv6XEc8M1mPoCgxtUNABYGdZUQcKQMEb6LBQ1i5g6Lwu3z8ZWkiTnY499cpE5",
  "key10": "2qQHpxMKmjf2bdtetJzfpCUYxTD3L4tJ2uzc7R59wHxWSPueThwuNYDQKVA3WQTAGY6DiaBz2gke8o8X6ueZLRPC",
  "key11": "2wxx1mpCkKjaJYXwkCtQ1aF4qN4mrKCQMPq2dGjbMMTMT14f9qtogo2AUdygKBSTaXC2428U5PJefCUV6nSf68Ey",
  "key12": "2obp8eWMUAANg2Kp7XahKBs9kF6efRu4JaDhhfyLZz7MMsPkULZoA4HQiAUnqo2toFW5VtGufsjqRc5rQje6xWAG",
  "key13": "3MRcae7g8Qnuqi3LAxVEZ9ttYGDcGdit65Z3yqd2pQp8H8BEpkJRhMpGDRF2cVjhbsx9vCrC8rrZWFFmFaEgKWeg",
  "key14": "3obhLSFCgnDF1HPtEUqTYNXrHnTV3vpQbZ7SDh8JtVTygnTQ2cE6Xa6uiaNt3wrBgB1tzYQjrYec4SPczXaRnEQU",
  "key15": "FJNo4N25Z9ABdwJ6umoSAFbcKraSrWuoQck5zthFTKqxEFicuuMLRDHWt7bLVxGNH8EbpbwriZA9nzrMpFYBtZf",
  "key16": "2FMkChybTZkr4HjMnUnHBeP8woe1TPYtLwzgygiHRR3eYyuD5ERRuTdHgYwsyx5AwtR9w2u3MeVBvbFxPBnWJUr",
  "key17": "362h51TYeqmva6zXg4gvypyu1ZzZzYMMGNw25o78NiSHhgwrC3Tqn3grdBoEsst2nk1zF31GUupXBSrMtU8drXvH",
  "key18": "biNMAsd3LUD53GooACFNNr2QHYPJ1Yb9AC2J6CHgF9nFCBebWevoJ4Dx1zwoWi1yGkeEjK1fUBuw4RhTyDzduM3",
  "key19": "j8D1CVwPDeGdQ3BmyfqkVAf7jKapTK8X3JmMLEbhhsdLt9PxzRuuhweLtY1oR3NtxXL59V5G1V66A9H8QWatUnE",
  "key20": "25YBYapxe9hmif1xWa7rTcP4ZN6j4Dy8sC1fogmrCMrxDvGRQU6M6U4h889jFfyJtk2wAUGp7ezrVjbe5fhzMxJc",
  "key21": "cZYRYfS6d3qttwf8SzgZSXVEvGNRWi2sjcEtMZuoykGQWoTLhD4hBpznYXa9pXM4FYFALY79SHTwJq8jXdFYj1A",
  "key22": "mKRi7vvL4L5MYhfhcb9e97BkRQ3ZxojeHk4tRr8fBUpgmiR47WqwLzgW1TwXUWYgPEzBftpQBFr42TXmEWvdTdP",
  "key23": "3meseEymiXYFVgppeY9FphK6RzpoYriNqW41we1qs1Q6x68LmxYbWL9SsQ5tZPk71Qgb7u9oc4iDUsEV7zZEZU9X",
  "key24": "4FCZEeUoUuuTVM5uKPS4CcuoHRXci5rade3iEUw1ewG6a8Xze5ixUheEHAEEygZbHGZztPXxXJ4RqUfxnsKBnPtb",
  "key25": "5fjzbSZRwBQCiaYzaipoXbxdPQAM7xi2RoarPEGWgGBhHLFK13soU8Dcoroc1h6q8bEA4mVNQUa6t9WEVEP8BUEG",
  "key26": "LZ5FfPgTCY39UA2r4STnYgmg4M16nz4HSYAYH9kPTsQWiGw8Sg24TxfDdAAJe7uHLnD285btrvRENrmq3fQDCmJ",
  "key27": "3rUU5Ra1qJ4Nsh6XmjLhSjYF7USyXge1pARJUdtnzfA3xULtm3jLRtHNwejZtFNn1NYzogLUy7WvA7WwvC6JLP9p",
  "key28": "194K6YXBchQyiXbFofvbFhHSBK6BbtKWoWvSV1ZELukqa3WEE3TrutbNJXHN2PeN58guFYt3biuhpfoipgFddjN"
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
