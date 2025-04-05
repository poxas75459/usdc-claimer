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
    "5Xh35nuXhsduW6cujvrp1YWq3NHgocBhBHYRwLTHbbG3d4ASDMzyX7JQYZ6LQcmNwK9XtTryc8ngGdN5kXN8eYeJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HKaJVTqm3vNUj9UwH7XhLU9pq2iKZ8mYBnhoYS8FV16u9RMNsqo2f7YQfsHe4tJPqN2wkfWokf19rb63GLys88K",
  "key1": "H7b4Nxcqj2up5LXHL7CkXSwKnrcbNqEqeFsxzpoY1d6tRhAbsS9N8gP4PtNsQLXrfrsxkiFQK9jqmLgCdoRxmv1",
  "key2": "2hJzQape3LqphGrDkCguyzFp9XqQC2iJYMtHvhp2M2g7aTmNTwV6ZnLh42JtcQsdMbvhoAbSHZKgbMaGp3jsKtAi",
  "key3": "2F9wZXVjHrJjXAb1sG9bAuVt13WkpZNRQ7CmPu2eAoGnTZpxf5Bg4XXrR4aQdBHkDK8ycxwTKiMTN3z5hYUSLmB8",
  "key4": "3u6iMcMJUjxUjGozzi6keAGfSNgZTgRUTiEmJeMuLHpfkqu5bwVd39dnjZhau9uxFiQ8Ec3TTweYXQHqBukfQHxm",
  "key5": "5HbgCb3XF9PpS6SWEV4JLfbH3nbo9vwxjJdd1vYj9ngiNNgqEfKbLJJNpniyo1YtzFqhcoXuyrRnqAfoCMfyFQYw",
  "key6": "2auLNvYZZ56EDekUSpx2dnxtGa9amxZApYW7FusDJ3i2B3SVxokx4KxaaG7AyUbGVVuB5FiR4LAggPgFQNMDMgzM",
  "key7": "4Hd2SJWktHM7myPXsA5AXEcPcRTgHxPwvn5SGCe9fxRrbFXYTitfku9z4bLeB1NYfpa17NMNrtxSprup4hEpbSf6",
  "key8": "36NbFFTQndUJuA77eUKcfcW5kaALnNoKk7Lv2pXdDEfU5cZQsdcz7EQzk7MfhYcpA7uHm3fRiqdZwLcF22WbxRAu",
  "key9": "xKp6ikvJWYTaZDy3edzwfsmjz5Hw5TnG4UJzTzwR8bi2iC7BxBwkAHoLsqNezcbZtfQrRbcScbeKKpQoH82QMjY",
  "key10": "47nw1BJERhkMCntyjPnSqZ9E1UMFUiwkKcfj3BRWY8cQYsgD78zHfRDpbYvb333QzkCNsxfK99foMWfGMq4UDJ3L",
  "key11": "3eQgCTWA3DMLmjzPprdbEtneVQurUSyiQQFvKa7SF2CzGAf9gjpaiuFcXyz3f551qzZRYBtfGaZ4auufvJgW66wL",
  "key12": "NgJPfNv8ZYjskdS4gRKfLKccUVC6bFRtpSoAYW3anDesA4GeDnFheBkmHHBPrHDxp5iWX8kHNXdG4PZXznizVHu",
  "key13": "3vMocpeaJ2unnobZDYfRsoNTWEv4k1x329MoeYWx1QTLPXecusEWJjUJ4EdvEqpyh8daxdACikXXF3cs4LpnWzJj",
  "key14": "5JjPdCsH4cmCpZPhjE5Qkz1bCa5FnWDdEiizXMyhEBx5mHU1DND2kA6hcMHoXFQ5Ar3tkZwJ6EN52RojcE8zNkUf",
  "key15": "3cZtSxhchqZdnrmVinypCrVXKWzXDAqPqjffJNhdPofXk8DdZ8jeeooSuocfQcysxQCdjNEH9jqh8T5jGw66ScbY",
  "key16": "4Jrhh4Z7skKzKZcaWHcCLH7SDms1kP1NudakRqxEmw3GnDXaiPDkR94NWbeTbgmpcD8e4PtdRDGcf6zjaxYtTzwi",
  "key17": "61a2TP3ZEah2Z1VbAAniGrg5CAvwyDdiv6PNaTpE37x7KyxFT8nbUgeCmkUiKayier8yicbhwSVp7oMhxq1xm4Ci",
  "key18": "4ggnp7Yh9tDYMEr64dHP9VNgFPfPNKGjWNs8ZiyHSfXSEpjo3vqm9zzgTkkYVj5kHVwrjdCNqbAWMLXWoCeyCPTv",
  "key19": "5nCort4Cr4Cb4xzZNp9yHCfBv6hy6kmjd4cGY4r4eiGxSk6AijFZPL3L8ZtcX2y2kNQ6iP9k55sXa1ryiTjD5YrS",
  "key20": "cWKfhfkcAxHfu2RpDD4R65EVeHH9RgK5RDHHJ5DmxX7S4QUyU5cYPQdUutX7sAg2aYTfhbcSc5SKjoZkjCKA9hW",
  "key21": "2fXUu8TBLJcUftQpAUQoVxKvpTRFUY26BBHHRuiTx1JFErPBnVSYEjxkrYnDFFPnxkR5Y7nT79dJHNrUJVH1yZRm",
  "key22": "WsP1F7mepGXEBLpUvmNF8fuG8VF9chNgGQACTGvMGxqpLXv4QrpUGFTsXTejcByEFWwahtgtnFr73QWy85BbHTb",
  "key23": "4GoSABXCj6VjYcDShmFHFDG1xtrvyoiEcmGbLzSCmPYyamtBamNJdmcGqhJJboXYcdrBpX1Ek5pXQM6i3ip9exLf",
  "key24": "5FtFBh6oLwaTSEdFQ6gbMbXT5Hxfu82QDSjA9onRygpHgJ6z3YHpFJGxQVKZ6aVw7LK9UkeFHyBGVPzuEoTyRpzC",
  "key25": "4xXbsysxoQe53x18BUUyXhZUSeQDAsg1mniW3Pq9iy8UQWzMbWaKTQUv6EzfjziqToB3k61ruNAb2RWvT4hkZtAh",
  "key26": "5NMwxqZJNAhVGzGjQg3H5YYRutXrwhquxi8RwYtbnSNbR9NQnkUgGBjaPoXM6kKTS4ZSZjnnUWn1jfgeYT7n4oEN"
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
