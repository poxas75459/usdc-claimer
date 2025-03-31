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
    "eRzv5F3yp9MmZB6vroYSeQNpmCMYbADNRvKYeYbUYKcL3nxU8etETGNyGe5w6EuaUxMzwsThhuKb93aVmuSCSTw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3G1QaSP8ifAj2J5n3riZKggEziQDuYTqHonqUsxNQ2mN6GvqRr7CtxJc9u2uraCk62E8iJiddmptdRcCfhUjatvq",
  "key1": "3cjPyQzPyukQcST5H9ymGem3ZYgNzEmwQnbPpdqKR6r8pbZ6VRQ61YLy77dqfqTwcxJeFGwrsdS27wy78SCPzYVV",
  "key2": "4zBkXvTcBKk5C5Xk19zPzCEzietME4BeSPexcgLnyXARhkZR2tGAvbjbo9L8KY4MJCy1Lpq2pi7MAkRfz735TKJP",
  "key3": "4gotfseUZhVJDjqLbqgwR4E68wxReUZR9PuGrR4QrFrUAUMFuzpjnPJ8gjkb3uR9r65wns57TbYEFZ82nNmHcMeK",
  "key4": "2fjzptoMjMpTeszjSGqU8Kik948eyjvxR11TTnc7bAFQL7oaDYtzdjuXXYDy5iRDRvQu3BpazdVKdpxyTFeVrrdP",
  "key5": "4DYe9TBojCSo8mYB6dizMd6yc1BTYbLa5PMxd5BTQnfwZuqS2gTbYZaBYa1CU9pNpjDhfh1Amka516ezZKYY6vxf",
  "key6": "5NiG9CpYUgzyfaf5ugwkEnxMuyUYUrLMZAfnzmEwPFvypak2odfjRZx3x9mTsYF7Shtfw83TziCaqDUy5bfeMwS",
  "key7": "2Mw75S7dZsLKt3ndRmdsqCFnH7W2gkKcTYg8toVTKLyVXCs8dyohJRcMSrxeD8SdEtyXDWmbB6DWLjfxbVydfBrp",
  "key8": "4yXyaQxf8oW4YfjoSQnXgTuAbYBhLhTPvUxc4PQUi8WFZpuGoXvjgvFDkg7TRvNB4pXLDdQXiQni13KHdKFjDw4e",
  "key9": "2q7PumvTJPrUuqA9HN9uwjcZ3Su4FaVCyEDhU3JviKcX4JcbjXc8EWuVudbkmae9YN8tqK4zvEWLrAyVL9PrfP9i",
  "key10": "3kHCQM9jnBQSkYd5s8HVwa9Vm3puEvwvTnUoxjnvH2jRqNRFyGAjMp1ndTPUP3Tj44poH7TafJ3i6YMe2Q4NyEDA",
  "key11": "GB2Jj7or5EX8UjBLDasgEPP319UoipaRSei5uS8MdGbTZPpZKQofVCCCh8D1tKmW3aBpk5ZJRyEMTYSXmaobjRR",
  "key12": "5z8nhgezMAk8rGsAbsUtjb8heLcCRphP3zeWYY2r6Sbi8NbJ9rARefAUjAt6t2oYC5gNg7vuxxaN6AHxr5L7nDVo",
  "key13": "45YwQWN2sbiHJWmmAiH9zn36jh3rZ8Y6D44LnQXd7rVFekVHNYtTJEzt5gtVaBvD2SpGk2UDkZ84KirRDJmfHd12",
  "key14": "3zvRnDv3GJvcvpSPKV6YEJzfRxiyMxYfNmwYuik3tBSnsK8EnRDUt6bDCjgh2jumJYvpW5ue3Lukfddw5iw31FMc",
  "key15": "idyeA6LjLtkSk6duHPgScEysHhW5M5xq2HkAoM3KT8FVdD2RuC6Ymn58QKvS4AurJwFeUokCph5H26HkQfa5bYj",
  "key16": "42GXnuen6CpgtysU3gGNtX1jkGHY5BmQrV5CijsNAbVtX8EDdZbUghF62ZFKy1rckttTKWxF7UFij9mnh5VdbMjn",
  "key17": "64wGSsVgyjdGt9igVu9WjqwuBubZXy4JrpTQ41o8pCfFN4vfvqbeaXjDDMwsgVmAc3qMCS3WL7CmFu3Dg5wZB2c8",
  "key18": "RJ5X71B4iRkywj9YQrXtaerWCaQwM694UDjGV2sbTC7gxEgsi7r8o7uHDASaemjg25PyB67MV9x9nTcWLXv2jdn",
  "key19": "2SWLe5JeDGRFWA2YNojtLFhTYTni3RMi2UyMKyqePxGJkTSDJMEW4HZHo9AVyMS4Dx9AvYRdxbc7xZbv78ctiTjm",
  "key20": "5vzp4QdTWSVEk6hwqLMGTUzwF2pZMJVAdkrkfeGq2uVxk8iiqrYd7rom6PbaBpP5216vJrpP9nZMt78cmfiZkXqR",
  "key21": "42wfxzRXQM7yqZhDcgdCujj3u1D4rsK1aLV9m1PSEnKPCNXvHvKaVD7W7oAv81vys4nRaAg4qscTW28rGXfpqrBz",
  "key22": "2E63RxyNGXPbPtSctG4yKzbCENJN6tPykqVqcFWKZKbFZSyZs6w5q5QAUJwnETiVZvsdxxBhqcRWFvYoXsVfE8iT",
  "key23": "RCAnwvWwusTewnvR6XuyYpL8tXmQg7TwHWFukVWzg6vF6s9AW6PAvqQD5gjj462MZ32uj58zepiKnzyWJCDK41Z",
  "key24": "2QV56THsvJVMKkVmPtu5Ngt95m2AN7ZgfjiGpS4z1xjChwm8TT8DPkcYM51zNCAu3LWLFj8KXrGaFpgTyKyjSYWj"
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
