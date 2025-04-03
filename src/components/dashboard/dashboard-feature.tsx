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
    "2qZS8LAQ6TzgA5tNViFh1gkdqAugfSp6Th9RWBsPjtanMnWcWDwKu5hKtgg4avPY723xgTjJgkumDqxvcGi6CjAT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uLSPzaJVTCHaM549bqjmD93m4uRBjTxd7q5NmfRt5NaKgkFLHXYxdUi52tfEbtKogPSDPB17vHaesxLmAj8MiSg",
  "key1": "2G3No9eeZteyVpPwaEH2cDjGL2aSMtWD2LDdFSsty2A42x5GjrHR1RkiGSbzzAQk5jhEmJbMAcZGv2ekvnaVnTLo",
  "key2": "3ZJT8nUMhDiDJU1nyDeEKwKZAMeVdyTgLUedNGfMQhzvdGkQHXyF5TrX13H4iWbHUD2fQRN1CnZzxKaxKNDxgi4b",
  "key3": "3viq3dshzzP17PqYPxcsDX3xEx61RxskZiTLSW7De1jmS5sx25q3GJUTUJic49W2ocG84YYNBQGpVm7gU39DTpva",
  "key4": "2DWQetkEAesDoQRiuhbwU6Rih7eVh9crRYkk7Rf4eBPgA5LhToJZYbwY7dFhP5zgPNtW1SAj1BTYGKyS9PaWSd95",
  "key5": "4Zeum8kMJYomnWvz4QmyRFKVkWFUPeJNyZTRxBXovR3vKn9MRUoPHUrPemBk8XSLzHEGMnRAqVEA7zLAqZgezoCt",
  "key6": "2mvvvaiiech4zrbPkZTEP4anxG4tQKRXJfqT9pYzNicr1REk3YUhtgw8JkThFq9dSf4pnq94MJEZP2fzDo123Kon",
  "key7": "51GEFYDmmJBGm8RZ7HKtFi7fYbamfBpbmGSzFaqcVTiYAkWkRLSXVmLgyKRN1XfHHTwg5gJRQZXzTxzveueinCTi",
  "key8": "2ApUwm7nKenz8TikfwpzDL3T33WV2L7TQmEqKmaFgdXZVmyfmPVcnjVseixeKuQ6YPzQeKSvzZh7tLN4BuNvVDpY",
  "key9": "2WVsV8sxUBLAeiJxBC7Rty61TMXpU44HKWubBgJZWbjw3os6ofz3pbqVACSzKusxy9xF5PCTSH3u1AenorYqo753",
  "key10": "2RqwUYtvjUDQXsBTsxmD51bhDwsG8JuBAH7YnAGXguMrfSQV5wGCmXF75XbZgnyfSPqu1qUSdTrNKqgg13Hc6rkb",
  "key11": "4HuAKXJYMyCmE7ZfZf3QahgRNBMLoQUt5kLD8vZS6rRxW3gmY7s6iGaZtMv2AyKxPhXmZwjGt93x1xuZJX873BWf",
  "key12": "ChcAiLfLoxvCC8q5yuLThr8N5Uio2Zw7ouqPrLZuvsApm6S3Ex6mMat3dxpBL6jJzq9ZdbE3TKNUij9Kw6JTE6U",
  "key13": "Su2mYy7gHTMmUh4YD96YpUkQNgu93HqCWeBmLxioErmq2VPCLxH8DZvf5faKgTRrfkdViTbJFy8pwY1uFKNYEPB",
  "key14": "2cMo5ZaKQGtCt7dYSm7u3mnBYZT96SMn9UHdtEarhcy933KgYAtfDg9ukqp9RU6uS1xN68XzhwnKsVRN5HBPjZkb",
  "key15": "AfAdScwRLXJW46VnrVLnK6xFmTGPUER6UXnPLTqhstUgA1YCDF6V86fVcoevJ8fH4nv2YWKNMALosyL34XPhUY5",
  "key16": "4FDg2Yv4gMx8gTVqMRKAJqARCS8gKbBLGKNz6LYo6zqxtLtQx3RiAqZHsJfQi1sQMGX7CwtJCYjodXwXxcgGPcNM",
  "key17": "2Yvzzv8jvuHUff6Af7m14HvAng12eC6RcGPuKshn8A34N1vcfTBuf5UfPC9Wfhqc367VLpU9PSezCyudPCBPanGs",
  "key18": "4W18SWAnoA89uTJPMuTixczSH1MLpcsrYU2dDYYzSjedruBYziTArBiNPabYx4wojMwLTjUZdWTj4x4T3ceP7pVJ",
  "key19": "4zbSGp2QFvGmix3NW3keBbwRQp3yedVgx2paEaG9rYK2FETTV4xRnLVUfG3PPEZvDaiUTLyELQ3JCNpQccdoP3n6",
  "key20": "HS28CNbwyRNxfutAk9ehmKFnSi2DoKGLCNapSG4uKeKk7QJi2YVPNwP3ckgU4d2jwkGrAhHQY1sMsTXUC7PLccu",
  "key21": "WPYH4vztRJjpKBdtRUQ2J2dPoCXKnAfKKTjXuD2PBui8pYAS7jB5LCfnDkRb4kho8uvZFRkfWUTcp8dxhV6Rpa1",
  "key22": "4UfLfYsqavSrLxnwn9fj6EHQ4rk4zKcJJdpBvUfuYqFySmxjNS57T8ZK5UXSZeQ6g3KRNsDmUxoCY1Djfms97Eh5",
  "key23": "5jfGxgy57nN4GnZnVHKt4jjUHx3boFHNTsy5S1ya1nEdJY6crzwq3BircXPCoX6sN1gCjpry6gCLMdBqiAJ1Fhp9",
  "key24": "3FoCKVqTjcuCDDkYjkhpQQqMJVbtLbp3su9uCBFuMnNk3CacYfTo4kA3kRPfJrUExNR5nYhJ1z8RwvLD7v3aNsVR",
  "key25": "8hz9GtkJG6axq7PWkkzjkP3PYbv3Ui3hndw1oTFfT5HApeHxiMZyTVZUCQMyu3G5qSDFVdDjjNYpstS1Nxc9UEP",
  "key26": "2LjAsBdCS27YWW5nBYQQgZB6D7k1ajpNBLgCj2oPQwEkzkPx4cazc6DfiMfiFB1DAiEkiSJRGJJmnKgAsR1VPb9r",
  "key27": "4mSfiaL9ZTWNjDDzoMKtrrDvkuA8eUatANSkv5488p5cGP9btiBDeo7ot7EmEf98b2gX98fECkCtLtsC6Baripig",
  "key28": "4U43dmyzCNR35RYaeT5mE4sbRQHwp4cbK7gBvju3q4HLHSZQeseB8dMyPJSgKiuCiKYQtVYe3ZJPGxFWP6T5WmqT",
  "key29": "3tDUx6X7prJpF4e1XpXE3zXJqSGJw8apPYu9VBbKwNf7aV5KjbopzetSv7Jnx3SvqGAYwikMXR9aPKZrMCrpHk6w",
  "key30": "4Xt5GuZuF2JHFrepv8qbQS5kNbuD9fQqVcdMMtgkDQikfuJcLDcCawp6kZHpqK7q72kqHU8jgWHf9cXSTPE4Y1dp",
  "key31": "37H54UX4zjiJiGnUhqCqEr3LKv5eztSNdK6pP2jgZdBBJasv42rHAXRKhRSA3dVPy2UJmCdkvzCP1oNi1yHm6S4X",
  "key32": "1rGCaXsLpxLVcbpBP66Ffa78dBF73qzZRrmiJmxbDrfbVGL6HNEV9xCro7bivg3hfdCeDarnct5MGAP57rzx3nc",
  "key33": "65kC61uvNwfDsMsnHdqWEhn6FxBndnfaXRQHM3Mk2UgJhhS8mKfn96zoMSJUNao4TM6ccZW5cVai9mWx2UWfZHM1",
  "key34": "Cqh4a5uX88ut6ZdrModVTjYnZPw5JLQgMvs2Au2aGT5DgkkHypLzDNkDzYGZmtq4yUge2n2UKG6P9ykXgnmm7Ae"
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
