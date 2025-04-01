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
    "3YK9k75VwfaStDV8j5K3KQibLeD7DpbJFwRpWFJ3fEo5RkdJMXBfGvHNme4r86roR5vLuzGVxgp94hhic7VW6tZp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "f39iSVufaMaZH6i4iZDkt4XeUTXksBiTzoBWP2NJMJQYADuZLHDW5KbyNmAapLZ1cMvtywjHPvVxjYrY23s5umi",
  "key1": "ZFjwsD7ZthAycDo3QgqnjfGxPAA8RNTNqrHzXgJaswanmCZGWvuk1ojt2AjCwycMKfMntyFnq68349AYcSPmzeS",
  "key2": "6pZPGMVnfmvQoiEMA8EmaVpuAwC5qGneCx3gJfLnZXzYg7kF2enZ7Wz8q7tdiyYwbfAVwMDBzUJodeKqXdcqAGG",
  "key3": "3WGvXqHozSteAFrXjq7PS6hbW3CFXQPe3rGu6rMbeU8XxRgt8HDFjThteNsfVL8jGgh4Pk8FJSU1ha8hUWCgXi1o",
  "key4": "5cmsoHoFgnCXM9EftZ7ATEzTeX9Wv56YejB8B5crwfnJCfpSPeT2nBCqqrMyNmgV3wKPuvGY9BdRjcvewas6oAzx",
  "key5": "4Bv2SWJENFd72AkVBJBMNMSvhBMSVUjeHXbi567xUfWcj66ohpzcK39nWEwwEKkcoPpoeRPvtLQ9Cd9AzjUdQ6s8",
  "key6": "4eEbEgYcqnxBGAezScMpSgGw2r2WsJ6xVcb775dvVCF1bUogcCkmBtH2yj2QC1BeabDQzy8iNxHcxByPo49eM2CD",
  "key7": "4iRJWkjMNDdZGUmkeADHR1XFfwft5mptSTddCGHjQ5dTKsFh9dLFUd98J7Lf6DCCHUEk3j6tj3kMF6xQ6NyoWuGi",
  "key8": "2rNTKxcqnoxYRhavzLAbe5kRzT5nKo8hGmbSR5ZSZyFe8vrYnnYLW9BriuUFbzyTDnWVdi7qxEArLPp8xJ8432jd",
  "key9": "23MYdxH2vU4f1sd7Ftdo7REh9JvH5SmvdLcnnkNiNGDuzhY1iiXtUNwsq6GRJGSKn76zgyx8eCs3yfPMYXcLgXYM",
  "key10": "WCbMrhpCLaxG3YGmD12qiTQ2HboApM11qzQcq5rdpFfvQbT1H1FNJ6yLs2M56hzuJ6SyUptThsdc81GFdYw8mAi",
  "key11": "9XfS5qhGPTvvMtk5rF93788V9UHtQomsXowQEZwN5E63DjajMhKj7XUfBC8r1AkRcWQVVRHpRnkYHRigDR4KTcZ",
  "key12": "4Ypj9TJWUvBZzsPRBQbQ2GFurrHas8K16yU8VTjqb5N3ZHptWDgmkgZLLtBQKnxX2aPKumegf6DAE11qGwaBX8Zd",
  "key13": "5MKBuFLHUgpjDJB5GrgEb2HqfSCXAUJT5jTWCfcLfCkpUf6cxA3DPvkvWLfkeQZUXywc1hyNtBqgr4yTR3XiXMiB",
  "key14": "AYywPbEJxTo53kb12KHAP5B78RvAudm8sowR9r2ic8piC4UgdAefVyeKgGtM2GhPxB9x9XkzinaBHuq5JtEueyo",
  "key15": "3YaNM3pq9xYdQWN14gLMrhwumH1rN9qw4HJQtP9Sm9DhYZqFSBLxuzBcPXHZFVRiMpubqXGAmuDNJVJPHtGWFacr",
  "key16": "3pgQUwqnE6Nm1LUk3zAVK6o5xy3Fcszesq2mPSTunZZjPm8UVNKMHNtgcgVCt8ZVQURA2Ct6L29ktgQf5cnKpywA",
  "key17": "3vqgaF6W4maBM2f5PQv4n2UjeApWkG8WeHigUTokiYYqjMCwBXtQgGkEENvQ3jvqnsVEwrG7QsmujAkZRBuKyRcn",
  "key18": "1wN5SbFpkjKHUdgjFA7n18Ka9UqHzpnCcypk1BFNxhKyzgCiGCjJSkS4E6J4Z2gLuc8LExhLtEdaQ4aPe6abSWn",
  "key19": "4eJraNZY3M3bpbBSjYeua1wsReBg4JRkPbhGTkr1cWRsPtHpCasqS659x3TUAdgWK49ULEtEoZJ76MvbnHujv1zQ",
  "key20": "N5vu8FMTkmBsiv95h3an1L8RE25HQYEL5S1RAahCkDgw7sYtGZkLVYJppK6h51GU9QLgSNUuhHY7zkou48Xe6zd",
  "key21": "5T9LahcJ4Gfkwm2DBThJMaP69sCTTTjj3X4XNCTPXW1CcCNuzdnLicidCKonCzMZUSKquiq3ER4rA9NHvCzWRuPr",
  "key22": "5VtHDeiT24fdRBBV3RyTBRqfHSFNhUWgHtdhfK6BnE2jT2AsGmbpR2ZtCSxj5YkSHuYg56kmo1dtdqUFNbJKDnq5",
  "key23": "42MquQnZLUPwshgYfUcwHcUvk3rwqRrxwRyYvyCcdtaiCYW2i9BynMgugHod7f1fGXVzrwbfBgL4zCF2RY9iu3zo",
  "key24": "63M3mrmDNpepLmzRbriKv5hXYT5rHAknqLtwB7nHGgT5pJnoLQHfphqFkPUV5bLBByMn7nPfyR5gyXopVXLLopMJ",
  "key25": "34B93kJjYpLDQNFHGXBWr5mwsY4HhqzGhR6uaS8MWsK5dvKNZUC7EXN16F24AakTYfA3WXMJDoWYcpPHw9BaPXBJ",
  "key26": "4WVxGBhFVCj2KB4m84mkZMw9uyGzNr3xbEx8CBmRPfnhAzCzvQWFR48xhAn84A1czxPEG8KpQ12ox34iiocMQJYp",
  "key27": "2XWoXaEfdRSd7CxC4KJFVxy6sT79ittZPpMzRuqDarUMbo1VEgU4PHaapvPgWuwWWyz6ipfWoCTocmfwvuUqgSK4",
  "key28": "s9fN6CyVmvMzB4sETumW28JbG2BJiYofaSLdd6FcNvQWEAMdtBfgpKhCRQL3tjUvEPb32VB1HffNxwKaNbVkSNm",
  "key29": "R2FSTfVR99KTyvcxJLZbTxgD3JXZzRyhDh47fuEfBWJRHD9iEC4Z1hb5fLuCZmrSF7jG3AV6Z5tvJg9swHWpf1H",
  "key30": "3dKQJrU6yDUgRuZrMLu41rFYYjmPTYJbNrLcjh38wQ3fRxbP5iUJS7M56TTLh85euTSx4BL2icc7BKmcK1zX37Sg"
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
