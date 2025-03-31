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
    "4z6tn9kCZtymKsPFQkQG9ScsxXqbdiydVxo8ADVFsnHNXQHjNYF3enYD86XYfMWSkZgtr9hhzvcE3DaZC2tZfyXs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yrA5zdp9rQGFZrauT8bTZuVJ28TUaCkJo99KASxW3Uj3EgFK6Y3zhnBCHSTYDYQ3R5yorS4HiK1DdHWtgUFDpi8",
  "key1": "3izpsEXB4aRZHtGMRJuv2zw5DNiiBZqjJAmMUqgYbG9zTF4RB5CXd4BJZUUjfvPdfKm6S5QXAw9RwX2uVqRiJP8s",
  "key2": "653junufzPsnkBe2drRxRwZKNcGzuzsUS7mhMCmdbd3LzDhySXhyi59dbLXCCkxjK3hNSUJW17MJdcpz2FtssCFd",
  "key3": "3spAdcUAwt5WTav8Bv7XrvWvjTYZwBCCVRtB4y4b46yct3pVmzKEW9R7vmF1xWcDBZhXpwWQ9B4KMV7ZcrZthsQh",
  "key4": "q79cq6cexgGca2yAmdAFwmBDMHSqnQ7CjTD5pf3fAZfMYwpz4eTT9etirhN1iHYN7LRbXy8qGsUTxECFFiV8Vb7",
  "key5": "59hY7PrSZxqSGFQiwVn4x6GBL8i44eUCTNoZX56q2Avqa8AuDZ1UQgGP4tkTgmsopyehs5i2bmNsPJ9x1UAgBYB",
  "key6": "4KVxSJGPC6GB7hGyHPD6zKpYskJ94gShDm16o8yK6LcZjd6GBNoSNBcnnN4NZnDSmdtFthGp71YSrA3Q1tzmwCtE",
  "key7": "2vgJ7TTkgkroSpnTJTtvS3AnB61qtnphHBCSFZHmBx8pveXRt5nd8FDugGsCiesYkK78v5sdQPi6NHiw3yyF5VF5",
  "key8": "4WSNDdJnCqexd9wgvR2BN1SmJPkTMMnMNAG6hMyqRB2K2cYd4b5xzUdyu3WJEtkkM6R3uDZVfQBhhPR1hmb35fh",
  "key9": "2JWooQ8drDR8P5MtKrqjS6wTiaQYUGLYBF157MpfpokdeCa2QhpiEq45e1bVfemsStg2k1CsxPrvczDGGuyQAPYG",
  "key10": "3LqCSKSZz4UivpMJWrXK3GM3vmtsd5zYrfpJiBDae4qbveZpM48g1SQaCtPjteFmJt29tx7AGUQpuMCytV65iGsD",
  "key11": "3gXB3YtwKwbMJ1waDWXhaX4NF5fXU88nMU4oBBMTV2Um9t8wHjc3WMJS3rPdj8fg9NRfR99Vx2UH5G15HJW6Umcs",
  "key12": "5En12PfgMa6XnfQw8VTUbs1AK1PF12Sr7SHdG3YBJe4yDUS3JmiKCHEfZpNsmHGnJPGop34QRTLDjh8oHZ2TD6td",
  "key13": "4D5CZYVoKd9fYnhDQwHUgoT3diHTUY55N2gu68QvW7u886XpR5z3w5W2cNzEkdw4Lx9s2DVE2tUUANSjZctA56Pq",
  "key14": "4JVdJbb2gaZFdD1XPRMzFQreeL95c9mcyrSSyYvKzd7BLyAfS4mTqfVQcrTSq4nJq8pHBBar9tjXwpgFuc5JvXah",
  "key15": "2ciYxrSdWov5Z8nyKx5YytF1yicfgUeuPzqcBoWgJ4sKff5115BsvSfY666Wm7yMGWkwupS5PgvjuY7KcndbiPKi",
  "key16": "5hXpAetZSsb5sVHNrzfGqxmdm11sVG4eTuseGbxKVEeAGJmHPsunKuJAwatLvbSELXjDSGAqh1S9JjanudhP2PkK",
  "key17": "4VpkxUThRha7TdZkB5y9hCKkfH74KmcVhqAEeA3KrEygx8bcJEGcj77t71mpKaVXTKNBK6EFqHB9CzMRa5VPd4DQ",
  "key18": "3k6DDyEGNwRN6wUNNXcD1ZaWhE8MAQuv8U2iECNzNtrC8MRsBMC6J5DDvL96YwsChkXrTCJx6UykdzLKqYjzt6nQ",
  "key19": "3b6vu7sQffhtPoj3NDanKPN4MYz8ofxzyyffQtZhDYisCgDV9Hxoy6LR2w51THvwUaEBByrx9g9YXMFWhpHcxzPN",
  "key20": "2JAicVjUwmefbgZQL5Qi6zLwggmLn8FAbXYhdN3YLqFiovfTFKzrNh9RZjZqR1izYvuQcmF98tkoyuRwYfHapSfh",
  "key21": "2mB8hDYHAaWZ3J9r5B7ukKSJCFx6NWRmYSYBkUsEoA3Jx7VSMqxRxPgNU3HeuikddrCDP5fdPVs4JihduubawaBo",
  "key22": "3q38BeCLkKaudWLDjDDSdYSDwzeEVcB775CmjzaNsAE1ScRTEn3oEmaucjc3ve1Y3Pbiuc1CYMa3pkZ2E2zJ8tCu",
  "key23": "XcjargDsWTX1k6fMpzd9jEixqTgpYj9a3kYwHW26VdASLxjfX1MfGhyYHj4GaUuGLUWrNryo2DLNnGDxrW7coUn",
  "key24": "2PqakuJeCKKsdtmHR6LBreSTDbFF7ngJB8iSETu38yvqjnpJ9oJfQycGm8zJhfYzqEra5ZQvofYjwrgeV1vSHiVp",
  "key25": "uoVdwN7uC6CiZpWhT62Rq1c5VSXgupTYhHZvJH8L5b7JUJjWf8nxt1feHBswyxbwseTiqqwa5VgqUnwpxoEKyos"
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
