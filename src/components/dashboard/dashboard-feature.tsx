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
    "4TBEbfTNXVPukYrx1mkii899a2kp3YsLJjSPVM2Wk8W3Qdt6iFtPRik35pFASdbeg6CRqksV1hD6kRTn5jb61Afd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2J9pR6ZmUpHegZbx2bf84DnRVE1FMQY4BsXd4QrKnBrNckuLJdyKmCGxcCxxoArGCb3PCnkNU8Bt5gKVqkT4m8ej",
  "key1": "3wvXwwRDb6RT8k2dK9Nu2r5Hcg29VUjbb2mGkDnuut4Fw5BCLyhsaT857GDXa3uGMc3uTVqi23mrySjrGZcD8dsN",
  "key2": "28cZTUaXr1wDrdTxkUaLiGF3Z2BF9RvEX14rysHxNRg7nzzbi9w8WaQuismUFNaeDLnVm82Z8zFzffbP2R1UW7rk",
  "key3": "4en4EpfgEZF9GGFJe3gEJzU4HstGMTqvCGcfbNMzzhCVXjT41nkUj3rztHUGLprfFsKGZWYjCbbV6kcXaeVen6Zj",
  "key4": "2wMQ4e8oHkCQJZ8fCW5m71jRmsy5vQkPHaTiPWiWJ3VYqDmaV8kAAxrecG3svUfs5HZKGK4gxYzGhuy92BHUjX75",
  "key5": "4CJDhA1QcjkYzqtoPcSrgPqrDRitcUKFCtxTTZ1raSJMqebUBhtawg23pt9rZd63afLv3iMShXprYeA9L24DZqE3",
  "key6": "5vVwSWotZgbJFPNsbihzGWBJpb49KQ1fTxBJ1TFvacAEzRSniZV86Xv9tDCMWwsoRvdCFK3Raa2C5U2zA24wNFt7",
  "key7": "2DaSWrxhhbPbN1Pe3wimymNJAZRXcfN9s4xaDSH4BUQyTWcB2VMda5M4pyYLu4nzE9TLh3ramfHRELkV1DJXhFJB",
  "key8": "29FVdPz6VRfY5wL5UWVMx1mzjNXBSDBk1TmJesNNmbzFkMjZtkKbNRJgA3pgSiNRWk4w6S2XC6iE2USFJceeQ8Ms",
  "key9": "4z9LUQNzEvR9Rry6F72jwrQymFvEXviD3MnLCAtdWe5tFePtyNnZNFZY99C9Y7goNca2R98h5zX3nEbjgkUXnTRa",
  "key10": "5uZjLTTmYdiSYdkL9R3Xotm5hvp8PW3LqC2Dr74LgvhLbMKzMx3X4FZX7noGUeEzjxYhEdmzaDpEG3sWtmrBRFxS",
  "key11": "5UBHLYQQ8ssKVeAT8Vzyk9FeUqzu5Kra4MneSQLJvsnd7CqYBnwjoDrnBcgFWEaSzyK9kGLbAbujVCp8wFd4hEbB",
  "key12": "2bySTgv8v21FuzjgJhFV8X9wdbJkGTjSNCVf41mpE5x2q5ZbZCThHJ2bNAjrX3Mspp1NhFQNVPZwxEcgSKYmYgPr",
  "key13": "5qBHKYb8ijGeao8HESLhWTmMdbGbX1rgSf3iFRfLmoLmcR6WLHHnHbxcu8df1oHs5NX1Z17tj1nmfSq8XAFkQuqL",
  "key14": "3RJjC2mh4HXMiGGbLHKYR5ocSEm6npZduUzMnHc949snLGGu9RP5mEG7W1UbaZZD1KAduvKb1ycsSCgsDUzb7oyB",
  "key15": "4gSStAXXRc7qn6wycVzaA2HHU7mFsCQ8PLQZXiAZuvcwp2pQFoKmZtEHza8sCzYcFgRFmtsTwvmVq3gResp3qtHa",
  "key16": "2nRYEoup4XrvmeL8RSx6ytsDuAYLYrxVp3YjJf9q2wN3LWwCDkGWNZa1aSws87BpfK8D4x3kUaxRQD1kJ5VyobLr",
  "key17": "2t5WBAKeJv19HFtVbtLu38uwE3q6LqA3hQ5LRUuPQEhmyCRVwmCxjDYrxMWSbWeA3Fy7jX4PYjjXsRd4pFK9P7Hy",
  "key18": "5Ru5Wz2cTsvxVcpf82VfzdMv8bfEctUQt7QUJGn6traMBumJEBb4chUtM8VXrffr4qEqDBaUyZ2fjhbwNqnBJ7z8",
  "key19": "5zc8mf54Vd992ReATe6vN9AwDWDT4sf5YKTVAANxCxrXrCcHDmJfD6c3CqjiWSb2H9o4LHvVDLcrLLCrn46ZZ75k",
  "key20": "4mihGsYeqTsVhhm3VdHxwNgKFpbJyx4uTydr2t6UnirbdLCWFq6WMFtCarzzukYVQCw2bpWdUV2rTn8d6ff5FTiP",
  "key21": "9jHCAKAQfxNA6gKdAQDkoAQSqin3kuADMSso8nia6PtdezijVBfTpb9z9KLy4uH15PJDoFTh2vZFuWcLnUQYj8T",
  "key22": "5bY1rLGmRboLoWevWSFzLBiW86aY4wFmKtpe4R2Tpqchy5PrtUTW9SwDVKkNNx79JkCABc3xwp62Q3EU6bn7WXy8",
  "key23": "1DWUCxziX8uF57XinuCc86JHwC8wFqYaZpyR4xNxNopRL4JsUc5jimryDAxqYbNjsZ4VKoSdgf2rmeU9Utw13PZ",
  "key24": "5M93e3akmvasDbVfjqsPXTJvbnNd2ZENzwgqzXBECq9YCXiVnEAAbZM4ZmxrMh5hdSTU6JLJPJkip63qyR6rGm5L"
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
