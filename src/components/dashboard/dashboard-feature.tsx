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
    "15MBpLoy1qKhtricQ5sYHGAH5oMAxFmqRf5R39v2EyVBWmULUA7XUetks9gQPVNqjkJ6n4oi3QQ5ZbtdWKrp6cC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bdrMMMxySJ9ejKsoddQAnHAp7bWwixzC7VVRHdGQhfXwQAGVj7N8YCYb8CY71JCox787nPdPHi9nfz7YmNy9zfx",
  "key1": "3PWstA23CrLt1SguDxKSRGreFtvcrrPWFocZW91dqCizxHUWEqYxQTARRPsc7WjBZw1nLAU5BPLo2agDyo89mSEf",
  "key2": "5kNPkBMP1mngYUqNtgcWLt2dwsii5xPoHFtWXP3Bpt1V92RJU9ECyfTykUfnBJt9NEQSUdh26Y6uZrWpPHJe8rXH",
  "key3": "3QqAe16s5Mj4SZYWPUWFrco7a9dgeGztNUq3VT33wzY3y2gCndgsNndVwVTnmWE5o9YU4g7s4pUJtHJvvj9CUTXa",
  "key4": "2kaFbeBru72W8hmXnnpfsdfdiAarT664Q8AgH3F5X4jEu6r7WUQzoZpyXkZZhRFRsLBqG2L1heWULqEiNb16B5nk",
  "key5": "xRden5L9Jr3yuXbRTzHiYBGb5exDzzkKTQ1UToE7GohrSMCt3HtzrttXFvgdbck4fiAr2FU8AariDgMevqad5Cf",
  "key6": "4SDQ9AixkFBVbxxFzM4DNskBDYSYNpwGrrXKNvga2FxSCLiQKafz2kv1JoTTYMXnAWnLbEkkuYSWSQwCnTFqA3f9",
  "key7": "5ktuUeXcvtiUAnGJF7hs4Grb1FbAzXksNwYkvjvjmb4d38ZYaiARECkL1Tfvzt6LAMS4HpdkkXVowLWcV5gtQYHr",
  "key8": "4A3KSdXy16i8NgXGRWCNGpWYMN6U2sFbhb8qeJDF34kzNiTxwE7bfApQTFqKZmBgYfrGNYp7vbvEfB1ovEcRn2H7",
  "key9": "5KPJaGJAkVT6PZWzdEk4JjhgDy8yGf5Mzb9cqEZCDYsTh5nkcLTghkFAZ13LfRaCZcn8evDeQ9fYocZso45yp4nS",
  "key10": "roo951DFbxK44wvgKna8Fhvrua5CWJr3Xn6v1ZGV84AxmUvEMa8dhTig19cyJcRm6a946RkCiwbBK592a1GVaYL",
  "key11": "2PutKiMcRthgsuUQgj42hq4DBJvXS8nZKA6zyqZQK3HZ66nwztpXdPKMvFwrxen1LVchVDhzPQGKZD9eLcb6yqW2",
  "key12": "5hB1UoeEdz2fmbnDYP2FbPz8LCovT7jBYYYaCaj1faArsd6EDefZSmP9BvWZbm5yfMT648C1V3RnGsZcqYg7wrH5",
  "key13": "5oTroGJU8G6zfeARSJkxHYGsNgYsXamVcXCtmiiVeasGXJXg63KNViEPUiDMrd8tfCqta4ba1mHcHYKbcq7qovQS",
  "key14": "286vk3pDFbAwGYjpwLgusQVGrAV9SNdeU6ZAq6firKw7by1qBNttJwWUyAbm8kmSNeqog8Yu9dPjyfhwHUcX5J2L",
  "key15": "Nr1XbkWJEraTrCuN88M9ZUck77WD1B4zuV3m8ifyhWXMeBuCJh4UTkASUPvTt9YtVgK3b2enrKK6EDJVH2KEppT",
  "key16": "46VRr3f3Gfc4M2fCFCR7EcbH1No4R1cdLDjqcCrQhZUNR4BHRGhqqvmc7hGRhg5Wa76SKsqffMvvHwAeRPt5aEfF",
  "key17": "3hVMcKkgwj6KVAvfnanY2niXupuBXc213MTXomkUhUMCjSnNXWeUuuXffG2824yzxHVrcKnbc6Ad6KT3BKqw2WJ3",
  "key18": "48HJpryF2qK2HmMd1J7ZXKdmUqrpSs6uCjH2ifitgksW4966qFnXkvYFFYTsdpJhDVMNqyzuQnHVvnA2MGVZ9fyk",
  "key19": "2DRDzJosf6hEA4y6zTkhHg76urbCV4m4R8Sxreg7LTKK2vBWUzuVf2bGmEmATCGnSMgQHHFBQMFwiUe7dJqJbqUg",
  "key20": "7Cj1ULBeNMnQwHdyPN6ovs2EfPEgcP7FbPSctJ4R8V2LEVuSMDgCbEDu8FjCpTkouUhtsE84e1wemMcoVsoHyot",
  "key21": "44dbgupdjL4sAEP7eHShuw7c2n1GEGucEW1fwv2djjzitsRxyBNnV5yCQVEfxxLLHCukd3aMkW1Gjfh3ZUvM6DmH",
  "key22": "2NwhWGqgwgAzfrn3WJwFmxoyD34evcE1ViRaaMSbFzMNJHL6zzJWAeDQZTiAHKfce9roVpnomH9fq177gb2W8iSZ",
  "key23": "232yJfy4mPSYqatCr9aqhLPRb1DiDXF8RZgi4XQPfxVo3ha422smGMpb1qLtGwyrYCESScs2xLRXhTpnD4trzZLz",
  "key24": "3hdddgafkYiYDxhG2W4eRYbPdz4U8eU5mQvu8h9FXMpxGtk5AaeSivuam7bvVXQ39U4V3x1mbzYvDbDDncfjKzNd",
  "key25": "5kUekUgHZPipUFGzeST6c4XFQ7HBjNgjnBGzprUCm4udwh9LCjNno3VPwUc7kuJvsj5cPpqBPQcTRobatKB3Nw2K",
  "key26": "N4tAukt7KjNQEkCZvGPHyo4eGzS7exJ6wyAzY2KHDhVWVzxdN1sxcCUVimgDHyyfGvNeZrTppxaebtvR3v1oJHn"
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
