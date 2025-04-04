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
    "4AUXnaRQSM9GTK6jyAuTTrkGZV44VhumKPhGj2afiWvXaF7BaAYKJ3kty2BygEhktFGup847SkWBjoPavsxR1AzH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZG12z4jLHtUAvSUoerUCt7wjzqws713v5qv3VctVDBNY9kGfnL9eVQQpuAuy4aWXN7DYcALJiVkudWQhpkcje4o",
  "key1": "5ZPVjyy7hztwehNRa6xWtSx8qBQVmHzJJWLcNeE5Yug73YNEjg8AqHnCcBJvwD61fEcQ2fJ1DQ2ANVKr6AFd3bs1",
  "key2": "2qjezRtPEWaWnDbETSytQwCLatbnr5zpToYSw7qJqbsBfh2XJ2t4CnDX9SD4ud4Ag2MbhtDNzqpkFjyMm7YyYQw2",
  "key3": "4Kh5AgZBpGEjXgRvJRPpUjAxxNS7DRY2ccCAAeH2x7nV938qFzgKGppDMGhY8QuPjAyMP5R9jKgyhEc9MkxthKwa",
  "key4": "hSxbasGzjzCq2mXJpKq5rcN2NVqxBNUCSEwwVaT4S32Xtwma51Emd5FQAG5ULGaiiH7UE3gLbUsQcxhQBqBw3KU",
  "key5": "3fLjAAdKKxhijzYcPYLPkWnzcSVJDGr8gZZ343Qbi4jawwq1BRTiVpWDCaBYgj8YBzEESA59GeGardjvxdLTnXGA",
  "key6": "5hmBbWRyVnYh84vjLsubPhFyYMuno6A7g75BL3oRmFkoXHDKPCfpsegDWPchMPED8dZNqmkgUSFehg4kT8UKf3VD",
  "key7": "3EXVXgKyAjWHBAdTEDXe38bMcGD46hKUP9k9386frABmrFxSXwoQGFghYbz8cXBiH2CuobBsqFu8zqDM2K3jJqWb",
  "key8": "5zB4eaThDfm1vuUQuGDfmfWvUb9FTVjGG4PNj1NfNRGE3iNfbA3GQrkqjvokQWyxw6UHJToNsuhYr4Y6wyJ5aSL8",
  "key9": "5aSjSbc4L8JXet9QwzrQ1BSNXkwATmr4WrzSMSz4DDVK7LBZn3RQ9WmmH85p7aohhGKRWvKLJiH4KoQSnzZjQQis",
  "key10": "4BCk9DuVqFyZ4cvViprVV3czHqZWE7HYJtjtTg58usQA4aDhd6DKDyuKqze4cTxTscGdXUibkq8s82FR43PSFq4n",
  "key11": "3AG43UPBVaiMdzP9EXuEWKyWYNy3HikDzi6ZnBbEKY2Rr2GfvgNsnkXRG2GV3GWFsVm5x1YFvL28W6cGatHsKMJP",
  "key12": "23oF3ksyXSG56CjuP7nYsg4NWJDdVqnEscJ6tJiSwPwuwv5iXhwZesh246K3S6yvjHPUwvt4CN4ZUDyo2X9BXjB7",
  "key13": "2NMbnD74jWTXngvcMsHVkNC8by1ZRQTxiJTkarnjqEn3tZkXGLU5jDipqfnfUS8zR2hawHgnQtULJuFzNfyX4EoU",
  "key14": "2bfy3iuX2FN8115UCZXYUkvTAKiWCNGCKu2sRjT6ZvmMCutyTPefQGPHErPiGiMmkwtgoMykeYwma77WxwYRiCAx",
  "key15": "2ALTTFB4n29zMSCzQzzm2WFD5zEJfuncVfCBJ2NNWXVXEWLUTkb76WyWRkTP7K8qyNawPpATg1dnkutGJBX7BBs5",
  "key16": "42XdeLmzegDQzNDWgQ7nLdTMLYYhmi8ximk72bA37uE1w2sKrWmXjcZ6FGEF3ZdmTTLzFWYigu7kpaqtuvjd4UN8",
  "key17": "5j5xCgT1qsR9tUXkLR5xw7bskeKzLsjrfhnJXeBFvfJmxzsfhnymtK3hCF24vWTeGq4Jx5jpTkXWvEpDJ3hytE54",
  "key18": "3JUv8irsfS8GVuWjmf8PV2PXxVFQgLFZQxUwPcz4KkSGX9jgwYe4Ku2MPm3PuZ28RCwpnh9LY8MFGWdS162h524z",
  "key19": "4DdypjdfhUrwnKVtdhZv6URFP6ej35WSZC3SPN7j4VTb2NJSD89RAMe16kTA336vHUpN4B126R57u17etVM3tErE",
  "key20": "3zjviGnFnQGnPG7m6yUsXvRo1W1f9V3kGAvGsBUh2yxNtmwhT2yWTZ9wSLAkCCanw6tDdHeyMtF8WQPVYUvtJPAv",
  "key21": "4sHfpfyinBnJasV3Z1awUv5ybBjQTwK3HuMD4412g8gAdkXtNkTotByBH56ZTYxwDtedGf8xdiC3kMDZJaQmJxfu",
  "key22": "6fnkBEn6aFKTLzh93sv4LXs1WgzD8dEoEr1M2Hbx8aV2DEpMu9asrv8K2Nu4fGkat9kVWHQ6Q4y7qVFaNo3reqS",
  "key23": "3ymVLMn9LNAh1dpxgTXW9eUgu7UFYn5K6NX7xdr16oKzsKu3cpBj8VMLHCGdw91VKZE5byog8e4r5AM6W3ZuHbN3",
  "key24": "2t1RkXFFjLoPfsquHi9k5VHK6puv51sMdHvtT7CUoi1BCPv1QEPgu7yudrURCgjke6sJuoR6dvE4c33Cn2VGyi1U",
  "key25": "3gwjW7zUHdfdC2TMBbefnUTWTYbwpvVynvKfutP84fmZsjiS2chDaW5Z4mMFgYYLiqHBybVFJGGbNKNr7YvYaMHR",
  "key26": "5c5Ms5Lf9BGmoNE6JNMgo2PBQ2kDSZEB6R9S47wLCJ1PYHuwBf2zB5nsJguGzRHSiJM9TU3UEF1m3nshFKSjs5S2",
  "key27": "4nktxZqn4LACnnfbtsbWXkSPgkYyc5rggsSqc1xHWmp7G8x5A9yVry4iRpJdSqapFYUhzfpNKCfhFGPAP4J5f7Di",
  "key28": "9GtaXDBcvjamaH8wZTGuF13ndpU7nc93zVbZpeezRymVxMKxyUZVS47xksETUH6dt8p6WSMciYtWoNjLvFR24md",
  "key29": "3WnnA6YJ83fijaJzqHz71SbGpmfAjn2t1xyFi5n6gcXcyU8smT9kua7iEpDRatPx3US4xPE3zLQGYDKJKxT4dBdE",
  "key30": "2EXTMPdY9r4ZCxKgmRb3gGw6fBR7ov6tYmu7XkZTXNsqJKG3HmVgsBLxFgvydAViGEmu8pLxPnoajS49W4zF79EY",
  "key31": "3kXid97ac99HKRBggP4bS2AJjfHxfWGsds28CPe6wpatb5RRYvRkZTvfASbTwxqKgGuJfmxjWSjRa8gM6rbhR6HB",
  "key32": "56Grh5ZqDL1T6cgyGzDvpnwwYtvCdoKqmrYFFfoWrJYU6gMSfQmDWjQpTF6bqtUScDJZUkLFnHMsVAxkgCVsqojM",
  "key33": "3iLaP879rBuc2RAMHogW14Gx3N4VycZTxg6AgEs6M3MXmEkxveG5zgncxSL4un4oVzBVkzABxeymAcc4ds8LtbSQ",
  "key34": "2jXRguphVoXHKi66LeFeTFoJQNp8Xqe9z3imvED7YA5niwc1ynLdqWWAnpoQ3tQ5x46ib3qUipZhnPpDR6usNiMn"
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
