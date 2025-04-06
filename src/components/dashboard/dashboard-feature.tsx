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
    "2gNKMMieeafaLqbCkASA9iimTWdiaJfMd42ZDNDtTvUu9gUfWc8DxhXcg3yaQYJn5jmD4gzMDtJLuGYSgXaUFvXS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qF42BBLijPe1XEHz7LcPtQbr7Rh9jU8aWuMiXnpo1vBQcphGxr9msTjsX7W3q1BBvZoaK8Ld8swinBLXwmYEE8s",
  "key1": "5ZmTyowU2MRSewE79mzJsJKZG9z9FJV6qEAJVrpGWEpmSbA9yfxStQok6EuzLTjDU7RPNTxxGkHoqLYoi35a4FFk",
  "key2": "25Z1YHGbVQ7jursxsV3QHZZsVoLMNVvK21Cx5KJuwop2bQvP4xfN1vAr7dR5YmxrFydMVngiHEEzak1tfWfCu294",
  "key3": "B8omoaTkxeLWypGtAHtTcunpdvbxqJvid8Gt66drWYGESrFnGCBhS6BcJKWtm4P4AhmypHGMib6mAaKt2ReRbfW",
  "key4": "3pFcFYX4j8JGQdrNXBe2WSkvkNtBSm3iXX2tuFPSP271Z1RwHzxDLBx8un5GGePJ2n5798556rWsBeSxbmjbdkkr",
  "key5": "Kbcf9dM5jPUV9Xz6tfzBA1oZo3r3vgGQHcvKtMgaMpcXCJtCjM69eeEZ9CFxZtWnijcLr6hNzGPjrmMj93fLLxh",
  "key6": "41nzCNyaLGSsUqS6h8LMgUQjA4xn6ViqUPSLMzdT8eyd6FdG5WNwi4GiidkgbA5gMRU4DdG5PEZz1kqVqBWNWBV",
  "key7": "3N9eajFmXScV5iwHqq24jHehdFko8x3Zeb69Ke2eQguUsDhro3SadPe3BaZnyTZi4viAbJhN92KnDrXhNw7KJHqM",
  "key8": "5nVKbv3QnktWJ3NDCmWyvceHX9VaasdD4MMB1VQqaRQoiePm8iu9hwGCJo9MXxvAYUufV5qp567wPuaJGnjgp2kf",
  "key9": "3VttoJ5LQAFyx4jw68tHpatwWHuAhVmT2pJgLv1TAaQPc2EKE7sySvZXjAPJeHe5kTtccJhc28GsxnyBfhUUy4Sc",
  "key10": "3bFFwVBDfrkDC1aCpryT4mz163Q5FgQuy2tP94cVGmpRe42BZ1SYEBq2gwgzDJPmkt4T5VcjyEzQtPXMhGVx4Uex",
  "key11": "5YoyiXVTvWbnGu6jiXNwet7RTV6KiK82rW1Z1utSdHR31nvKjnUVeGac2f8jwEWRCP3j3Vi7ahvPgjWvGQjA6zuA",
  "key12": "5D2rJNsEY8EVxm4ukm5pWCBkrcBfXJ75e1W1dcHmHXsMJfiHCQWgw3siZGFxFRBz6T7dtxHpX6AQSvs5TaZDg7R6",
  "key13": "4u4zCaApZq1i8MXGq7GcxwivR2GvpvsWiNWJiFy3KiL7MyxSrpau8xEAkjzCfPULpnxQVXUgDEbV2NqixG7xZUNf",
  "key14": "3zPGd6gAyfrpuqTkXE99zk3Ntn6vENeUyH5TDBgQUTxYrHkbpJsNaLqqRncLEQQqxWUWRWZgu28KfBphyRd1bCsB",
  "key15": "5PwuxCJzN8DNewaeh1BhciNHcg1J5p5zbyRoVUzEuczGx6mjcQ4iDWqH14PApGgAMT6KmRHXX2VnAcHkKKeBHQ1W",
  "key16": "22JU8d5k3LNgysgz9krmNh2RF3TSgxFpEuVyJN5uSms4bpf1oA7VsvwQs7ELQVBx6kgAYRt2KMqQDK5nP6dnkeJH",
  "key17": "42wu341U1hh2YtYoBnrw9bJ2noSx7MSc65mVnoJeMTSwGGnqGy7SWFv4ufgDirekMBbABUZwRJNRXkytugKZZgwJ",
  "key18": "6SvsqdfextXnQHWYK6jxsakYv1vGEwuiSBkg83ZDFthUk3S6bfEwwTsJTH2fm5sPe2Hka6ZKHpCT1CbJH78JkQh",
  "key19": "5jx4xnDCJmqS8hjKsPZai6q5G35JQiAyy9xYC7MXSW7SUUAKQzc4zYuCBNdxEbHzc5iSjvSPFT36XyuEPgQs4eVm",
  "key20": "5v6j2cFDpVvTDydVeCzyJbMZKTGLAaRwdWZeJQR7QMWdN7RHpw3RtDn1UE9i145aWd1Xxtuc1myAorYK25JCFSNT",
  "key21": "5fw84VSAfhS2BByRifHHyEfBu3oRpeBuNg2Cm2eFRiJWwhAcDF6tNZSXnP8obLXq4EgwBkozHVMa83HhwmNbQCcS",
  "key22": "4avz77bxBcXL5xvo9RFTcDAQYqk9JrJRW9TR7BzVA2ind9ac83wE4WhS2ukAErbAnfjVEXoAoLX831n7PHH3DETi",
  "key23": "2tRGrZ2yLq8TkQAgrdv5aFMLeDcNhJ25B6qCvnsVBSWbL51qpW8BjG1z9b5ao9SLxY7xiZuDzXhbVQbZwJZXvZ6t",
  "key24": "3gVx9JEP9wAGjr2GTDZSYWqGKRVvF1HBgPaci3W529hH6a5rDDMMu2iuQrtwkdUD5yoauKcCFCfxV2spr7qvvgNd",
  "key25": "49ZJGNKrATxcisBRo8aY4nbHrDDcBnXAx557aDMZsFgNQv7ECgWqS1n2YisCA9cTi7gK7VYtAHcpkGDKKkGccsQo"
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
