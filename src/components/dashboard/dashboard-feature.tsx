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
    "2S3uJ9AH79zosuBfapQoGoVwhfaSTsFJuaBmuWA6VafPTvyqDayWSYXvshv6rCDzmmnAyA9Rz26aa9Sv3RccpCoG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZJxQ7Ye6tBTYQuFdKpfCDFrwxhoJivWnHC6nfe3RnjTFTjpbjX7DeBDysgKQ8YuXHF9KFAxRN6eqs877wTwCz5M",
  "key1": "h5aF8C37A23qfcZdAzwodjrWvWpqoCVpeG3121dXe64LRrA1D3N9rUUqR6ok3A2k2nR46eJ1RH8mikxHCDu9ixx",
  "key2": "4X4RAUrMRs7RmS1Cjcjz6Q8wPPr5z6FeCqCKvh71VrH1xR3avpJWyZ41orGwptEDQVsBpPJTg2CcBqcj437Tkep7",
  "key3": "4f6Ct2kHGGLGdaioubJiJhZqfuFAQAX4pm3kDRmxLwZS6hbyPK4DCLAqZWd3wkBcngdozkSdDb7kQz8vF9SF2YbS",
  "key4": "4Y7xF9mcPRT9GgfKtoHLtsjev569P5nLU2xeaL8nfBCU3F7c4P8S2C4yRC9QRxsDdX3TZEj9Z8dyH7C2pzWTfME4",
  "key5": "3ajScHxA1saUVFYTtZAoFPvyma3iKnfvTEHhnZpy7wjw1MFpq6vfe7KBJT18cj1fk4b1LcANmMyCct9go9bHPMCE",
  "key6": "2t1iY3XzkS8jA1m2vW8TBKX5UToXnDx7yoAU6QdSA4Ph2EXuGjYDHR8oYuKXtSukXLgyZzGuQKDqvWAv6mtdC1qd",
  "key7": "2rHFHXm1yEiAZJnYurNsdRTNn3fnqxsqtThVVQ3UyRYiJH3RN26hFvG5JBKcDA2wbymU4GC3SxWhSZZu2XzhjdjQ",
  "key8": "3wU5cpszhq4RxiB5ACe6Tm2wzVEFxYcK5RdFr2QUVamQGfQodBrAn2LNAL3X9L5LoihvfHzJQhJmhn18U9j2C92J",
  "key9": "2bCjjTvQBSbi3NDJkWxEBPoHmEHzf4QnwhaSU1risuctMrwwwV35YdCibJu1J8yBZnDBRj1SkAjUG3pVcSQbBsaJ",
  "key10": "2xHiFjCxRn9gnzUpN9mhQJbtcErvU8kaCXQBYWr8kM3Yk3MJ2mEDNtCRwdg5Lr4CD9UEj78f8CZbUnveRPCBCQxV",
  "key11": "4s1eqXGjCg9cb8sciuPhYAN7Wbaf1fdSf4itC7rBnFpBNSxuvP8eCJyfoAVQynBB1tpWPWc8DHyvto8W7RV3fKoD",
  "key12": "2Ja1ghGDT23kQVnniyRrqb1Vn2qpc8M9n3KjtqTQaCsNFyy6SkpH5p9oCJPy3kzReckBiqRd1vin8RbpHDDY7NYS",
  "key13": "3d7Q4BAiYFR6cLYaQGJmZjDRVW1oCs64aRfuC8wPCfsXua4SEZxJxTzBYah1eAMuiyohA17KUo8JxUTNffGfGg7W",
  "key14": "4WsB4jtQ6t7nGt1U5ZdrsJobbkHRcKMyLfdSNPesMNJH5i9mBjb35D5REnr47q9nRKebgd9iymKt7Em7wQu6zZ4j",
  "key15": "MNa8PCeLzhAenzGe8h5DrcgkHNfcKrHTgPYgixwa6TZgz2PNn17h7mMrSGzcbyyB7QawJppZeZzkz13PWvCzcF7",
  "key16": "29obFtoSyW7yPQsBoN2FFEwPVLnwvQxPppStMrK9VjVffuvWYo8eEkeRYiooUXrW64USfanRqvPEzFXwWmhBpd3e",
  "key17": "4F3eFtYz7aYcfJgTC4Rvq8FA4L23YRjwsG46u5jx1LNseuFBd5VKtrzB68J68hm392TDFvMewEbW9S2rFu3oHRWx",
  "key18": "3ARgm8fB3JaN2eVKq9Kri2CjE1JLwb8VZhHwXEM742sdub1FYcbeW1rDkm3oRwVx5zcJzPigYwcDKuQFSGKrhceY",
  "key19": "66jmDKhuNu4Yie3uu1hFxJpe5GZqq5NqD6WYaYbmq9LGMXN3thw2c4efg66uEj3wuRKRYgvsMwaztSLLqtCZA2Fa",
  "key20": "27vwQVxHjiAkbLp2caDjdrRYVMLLUxc6ZmZVDtW5MwpXjtTE3N8KDrTScsXasUyUJgeEYctqAmQokN7eT1SUJrE8",
  "key21": "4Thr213X5WfaeYJhwAcVG4RtLx2K4n9M1jEYRFMciM9CmTnAupNUh9hnFqVBapJLmJK9mWncBe6eZQgAtoVZLo6F",
  "key22": "2kmX1BLrU82xm1nxS4q2199oHHJouXDNKb3PUQvhynuqadripAKxggpJCevHX9tWFbvTjRaasLGB2fDcpjWePRsz",
  "key23": "58H81MXQ3G2uBXAuy6hoEW5RHSsSQviKHVYNoWk7knGF8FShP1Eqp5Ehz8vF4FpuM3FdJvwjBPP9SUqtHebGJyhG",
  "key24": "33bDbq2U3aXiSnMbso9TpyiZ8sMmYVZ8J9XUVKsATqeKbnfA7uKPjWyoGcvNtrhCz9c2NRLFgkvh7MZRYWa41dZZ",
  "key25": "3xXGKPoqtgGSmYHTSfP5oTR9xQDfHYM5J9pjJJrPuGetZynqvoTtrG8NFVDhmJRqw9rVgFSHDeNDuMGAwK3Rbu8d",
  "key26": "5Nah4EVjeKs6KqJue2qqYNqxxcSNbNZCwmutR9EJwB2wbXbQXjrj2shPjo214NG1E3VSMQokWsSGedsPxvU32Poc"
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
