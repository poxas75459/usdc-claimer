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
    "5t8Qu2qz9i1N1czqWyBvmAeB795L3Vrd2XpCyncMZRx9bTePMGpnsjrLXRPppZ1VtgkrwG7JDdanY7QBigNb5ruH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DLFjT5BS3ErZh4bR2vQ1bpK4ojsJPpTKH8Px79StR9Uz6vdFKLPXNQqUDF5eJiQSJemqbJMH1prWytYzrcRAXaa",
  "key1": "5CinTjAJMo6eXa86trfQwrfyjjttEHbTPFr1Kbgs8f9wboPQT9qSnGTwwE3n3yesP3vn4RuAsG5K4j6juQ6NrfcW",
  "key2": "o6zXsNCxY1WhfRVDsZ1MkhSKigxYVMzUQfYT5AkhPEGbcHMj18f8Q5tMPEbz4AVt4kbKVhsJXbj34dHmm2xng3Z",
  "key3": "678WmyUVbYJY6zjY81vWjspyBTUoZqu6Btqrzn68dupTXTf9GenUTW1x9xHESNK82HxVMz1rWYda4XdAd27Srivk",
  "key4": "3dJFpR6vbjgLYf8NTZjKcj62oYGAyb94UBDrkaRW2rXUdZXrvxxKKD7XbmsiEosPsHoBgtGmzb5BKFvdpXNHb1N4",
  "key5": "4Z6RcSwXpsPSJjqg3aqaxKWMw64VWmMfCRgjQWhvCah1sZAJUR5V9f9oCt3gUDHi2wHcF38Z6b4wohDXRMsb9Xj6",
  "key6": "zQKxBLJr149pADAfxzs5BfR8V1tLTyqW21gXjaYR1p5ZqZXheorJvaWQHErEJHqW8qyyVth75VbWweFVs6dbkC6",
  "key7": "4Nk66h1X17AyZbSTQjbgbD1AZ2YhPBpRsFP3ZSXwAivPR1g5gKHdXNiYTwvD7jMfTTFyH8J2d2fJeTiHXur7U9p7",
  "key8": "3ghyjvrCjTKAx3tSyNEgtgoW2PtbPd3LiUknUNPbyHredVW77RmoEpb3GJK97qXpR7pFLUsicWdcW4xXu1TMz61Y",
  "key9": "4oRf65LLsVTvA4Pfv4poSodLukH266G8Z3LGdEQ2QyY83AVXCSSLyyqAqQUaxKrwcu4uJEdMHQhUNx8sWKcvYmD1",
  "key10": "wqK7Nm7WtYAdgtdWyTDV1WnA25p12K5T6qR5pUmq1c3apxMFxLQegV8KNr9DzUujb14Gfgtc2QsD6MiGsJn52AK",
  "key11": "2mrnhTRtYpyP9j8ucehe7eZsb1QgpKozLp3pfX4Tp7E5mURnJ8exq92P2h9Y3fnHY1XeR6s6bKBcyRw3ahfwCdSi",
  "key12": "5KC6RtZB6aa6Nn3pMs1u9Xbtp8VG7XzMXDfYsjEyMJ7aLMxP7n2n6xozxkQwvCaTCPNn66VYAUGDnuy2tsVef47p",
  "key13": "5zzJvZLyPVQFCu4JPE4m8oerjuGNwX15wjD5FL3c8xWwrwdqe1fVQEZpbgXYbcR1aDqruoPX4D5vi4Gx42857uCW",
  "key14": "3By2tVTkQtsEKKoshkHbhdWMawnoPL5iLLrXxZXVTkM8kEh1YaNassyrMY6Rabiq6x48Tf8KiDvCSitADWFyt26o",
  "key15": "2jJ7q5jBp8P4b9dH2F7TA5Y3h4UeJW3wkjnqxfD1v7HC4bbuWxQsA1iuJTsaRVG9Mstjg18ipJw49CPHEeRsdgJL",
  "key16": "2wW3DQ2Pd259m8KMw8WiX9ztjmrkYAgmuQbA5vE5kBkFwiddkdb8T1k7s4FqRyjeFYjfdwGvJqhGpc8yBPfF66Bq",
  "key17": "AmqTCtopiNFGS5uwrtx2xWswaSdWZhg7QvooM99cMStuoTsoZfzqd8wmXkXvqGT4RPhRDfKbaLgCp4ETFrGw7bL",
  "key18": "5MsiFBYXCjW8kFnh9fSnJbEYF5Zy9SBBp2j5s7rVaTfDaMoGvrQBAJe3sacy7WhRutRqhSNA1Dsh2zU8AKRsDFZn",
  "key19": "4UKjSJrF66woifiYm1VYi76SZU5PRphiE5noz9oKkEApgpF5avRgBivha88o7qcKbJwxQZsUvSHuBnZ3XxmZsusX",
  "key20": "2kSc26J97JP7qukQu7f2U3xYPX9nMGdNRDzXLqnZrMVvm58YuWxiMeQXtcmBgv7qwTNAUhDcavF2u5idLKBnXqi6",
  "key21": "MgHn5tEpA2gKPLHw4EMNnjeqYnm9jbcQKHDEYkg1U8zCoerNYeavNpT9RTnBZfEaZVm2kzogYFtUHdtSQGWhrjv",
  "key22": "Pe6C5NdexGoT3rg67kQdiGbERjdZqNX8Cfzj2LD57vkzE4Fa4h9Ztc2pQsdLVpuQZcUYhGQm32WMK4xpcKZH3LR",
  "key23": "3Tds8vCZyJd6dBy1EzQEbrBUNhUG4JmouexvaMYsWT6fossTJziZGuV2HVPNX2ZsYy9GRnuHwTGcRYfz1h9iipp5",
  "key24": "2AyDoXS2ZbVtmbLqNcHv9LsFFSfsLsBvBvzrKpkZ9WdGmE1NVrh4zKjHR1hhZCYQMx38axsL32GVnyA1Mq1YuyJa"
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
