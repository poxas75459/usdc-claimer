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
    "2ZNbKYyW3enZQySwaP8QiznCbZNfW4HmkHTR6HnZSNpGT8CLhWJRwFApddV3nvdSs5FxhzWTCHFsfR5kdRUX9suJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MioKaQmqx2iqW9np3XHJLoq5HJLm3fWxy5ryNpjTkYzK4ppkkNaVYVAaQuLhGZqh9mZ8nevkVJMX1riSUqW2kJ7",
  "key1": "27ZggHVpF1uZgcKdp5FKUfVDtCriaeC74UJ2wzZeXWYQfHCweQFxEAa5T8yjMTptnvfmkozaoLDziYPudDU4aevY",
  "key2": "4cNSp914hGC9huKaq5oJ8fQ7GhqzQSYsW4uSbskq2raJEHZLtQu286RaLztvsrrzFsL5ARnpfbxkAvsdVUZMKFNR",
  "key3": "5SD9hztY7uvrqktJBEnsDUyM1Q3X8iWxiZQU1ffBkApfTYepxvuGgDJmcmzXkRe66eHWReSdNgnYSfqQpMsddBZB",
  "key4": "h5QcFzHcMVT7opSVFWgfGRp9ymffkxnpRAWq2QCEDeHZr8srTyU9Y8GYnWXQ16gkt7aNitZwaZSTW2GbfjRTkBT",
  "key5": "4aCmnRSKchgugitCjM9pzCe69ustRk3ajpttA9ynxjHzs1d3c84EP3SA3cbzHuHFkFjh18j2Ee6c3MRSn3i3iWNm",
  "key6": "4BRUds71qGWEhnhkuVNrMkFCvYSkYnmtAf96hDKLWEuQ8SDQiSRsHrbWiPXGDVMgzJqRXQTDTNf3joRrqGKd9aGL",
  "key7": "246ZdoQDrMaNNMmZ2RydZe8EcZ6hpCujXYbt7z1iWadgRajDWG4sVAbV6ZhJDGb4ucUfFjNkgmmnVJVRtXDpupot",
  "key8": "3SZfAxXwUf1eJeD6g1byahmHj81CxCCCqPuHu7YJvqQaKk2Jb6VG7ybXCbsgykE77Z2MjCnkCyTfe8gRm7eS3Ed3",
  "key9": "321Bf1Ne3AKW8b1JUo3R56QLxtTjYFWpUfFR3SpDeqbXbBP4ceM5zrMPhBMeiDe5fPPGpANVpuM5nqEiqvj9PxBp",
  "key10": "5MsKpahvY4G1dNZHZii1veyfkucW4WSzT5MF3nZnNEP1S8S5PVma4thEggMjZaMtrNBb2uGBMD11pxUYnNudNX3R",
  "key11": "5zQJbCwzvzMdy3dNTxWsNhnGMVWFbtN2szxGaKpoxPm99Fp1EiRshDeDngSjLEXFQKZXV885ehCjB3jH2EKaLjzx",
  "key12": "3cJmwWLdf1X9vD6jCu4jzio16tVKdvhmTTNULPjKwuPXhJqo26QfKWRxvDFnhUGKTsdSZwDkmfATg8ey7FHnhcwB",
  "key13": "3B33gjWToBNNSsiG4bsRNduod8nUogBLhGy4JDFs3tFp5tx7rRVPdCywFFm19HSadxBthhATX1VniNg5YqTVuE6i",
  "key14": "2wxHcH7B7Eg57ZJWcLvNoxVMf9i6my3uSeFF7brcLxouNMMAs5TWgzrEHY63pN7YdnQcjgbtrumuo6JtJASKMra",
  "key15": "2eBNz9QzUiSbfy9AsEdcuCTAmmgu7FPFhw8fDs1du8f6oADy644Na74SGeXrRYRD4GqBSMBMP6zdTqDhy26VHaXo",
  "key16": "5XUhn2YgNChLe4r7UT5dKWKTPoFULVHxNKPvDKD9eTQ91FC58nt6VAoUKg1oVLHkqzwGqTDzuXuj5uYK5Fi9C4vz",
  "key17": "3UujTjJ6tkEdcgyip9MfuFHUUjkRB9cwFHsxC15RmGZzyAncZzXnHaFjbxcZFTFeZFay7iJKQ8RHch5G7VfkLi5N",
  "key18": "4fyCSsSCbcNa3QneJfKPvm9Bp51MC9jdpBKTTm9v5AFafgMBNYB8tM9Y16FmPoL1BJXLMSt8LAPNdA9SLU1FqfSp",
  "key19": "5R4rfKw6km6JBdAbXETL5KZa9S4a5ArWEoxdeqPDf6eS1bJbsH1zfr1BHxfbVm2tJmX34wj9qCNVU4t8KWFyW597",
  "key20": "4yDcxiBH6DMzdgg1jdLCkruQBKv81fL9X8bvEkak3YaQiFENkyCyMZZzdC7cKkGzcLNunUhcDqVzTuG3UrLkJMXQ",
  "key21": "2Tzz7ENqwuzNUSSpNFM4SYew235YSVQNXEJB45NVVFzEb8VwseggHSt5EdubMDXYj9JjkCHLwWjCD9xGZm4ycjMV",
  "key22": "3dDuSpf56Kpa68fuNjGGfiWw2A52rSHsCzezvBW9NqLPATeRCW22WkCwuSiCbSeB7akJxoujNn2fYWdvnL6QJGzg",
  "key23": "9kopsL55LBPogufLKMJA1FVwyG4z9fBrvh21qXvyJs85dAUxzTiB2ors2PQ7s3HktQXPAWsK2QYj8MhW8HTpG6u",
  "key24": "5zQbiLnU89KfSKWXPJgqJM28JHQEqcp1sJJabWNgLtGSVQf8DfVuxmH2NXYTrLj9fVxWgNU2cRzDjay9eMD3dwxH",
  "key25": "64rKuA8R3z2RbGq65LtPmP2osEBtC6RPVC3drqQJB2dW95zJT74skFdvkjg7X6H8coaNUZYVe9R7GG5Ag7YDEvRT",
  "key26": "4bqhkEV67zyUS1XuKEBo99ptUWdDb49sZB3nzoaEBbHYpXeBHWtEfdgxjXLNXzZFMMFPknxkzac9sLyCEzCH1BSt",
  "key27": "3EErHutTBWyQ2NozL8hm8jFfEhaenDp77GA9JRB3bggafGC4WPFzSkauKPdQzW5W5AWWmRFGJNqTGTMfG1fEyeVm",
  "key28": "NrmuthDgbAt7CKBGzDSyV7Ey3iy83v33KVWp9Y7WE1PwbM1UQaoXzP26J7BGipE2kiPq6NA7s27nV3KDJnGxDHG",
  "key29": "59f3xYTSr8jAreZMRsprtBi7B5siRVnpNvE97b93Jst3ZpvGKzWr1J66raPkRysNYDcoQa91ssSDVBx3bqhUB7aM"
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
