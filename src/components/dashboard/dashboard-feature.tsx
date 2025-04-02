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
    "3xyBzDHcCwj18Qa5wpxepYnykmdush9fkup4zHfdNseog5khZoNfJwkR4MPdSFgGLqT2wUUK93y5BXqbARjPuiHj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VhTAiGzaB9o58zZDzozoYmfFEMsyazYt5GPkyfCtWgzgGkpdy4EZYt62maWxRxZxCdL6VLG9oRcYRUMZ2nbETcc",
  "key1": "4Evr7HZXzniK2KVY68MgtV84RpLxkZ1ewgoSoz1sFAMQVX3fzMKstkP3FuTMjEUKMGvi2ELHeWFnJEpRmex7ZAsx",
  "key2": "2EaTmaVGqR5gLwJC895mv3zjS8MfHuhuKFPvLAXg2cubM6wmwfWLMM3szDxY9ELSf9m6QFKNuEAUrvZJWq7zjnSP",
  "key3": "3wx8tr2P5nHj1S2CKLsL8mztpoQFYYR5fetoriVCsTCkiytvufKTXXjULgGMhup7YHibu854J7fZyfrWL2rtpgiB",
  "key4": "4jt5rjqXN28LjahZE9pVueq3WvpSowUX46KiCX1nBA1kwuxgd2t2NGetw2PpinMiNKzZXFcrdaErEeH4X8CGxEAJ",
  "key5": "2rtWgcLTPU94m3g7MU5aJ8Y2JPGu6XxHzNNiaCRa3GUuUU8SbP9k74Gi38QmDocTXFxaiHfHMZBejQtMxKjzn6GY",
  "key6": "9jBqKoFkydF9FMJpRzMbSj98aW8cQBZyVCLXz4n3BaLJHCRewa2KAjPaHLpKgL1EASMvu7BE2rkywciYZMnX2t7",
  "key7": "3W6NfowPtHFChAfMegn4p3rfXDo7gq17s2p63MGPdsa36X4MsYVsZD7qxENW9e5uftjYE2jHgSSZYcFx38cPcuoQ",
  "key8": "G9yqxiR6kiV2bKYeUAGM1Y4WCEG3Szm8ZWrSvoLcsZLTbBqXXjjLHajzArydMSWyim3MEXh41DmNfhVvi1B1iij",
  "key9": "4XsAJcaYWQuiMNM4U7r2TAFEU1jQvu7v59MNKuW6ewkmQmRNPKcFaXjbXZadaKqFXNrFhzXPq2EH1V9itBvh8d73",
  "key10": "4EpUywsMymexfChhJTpPTtMVBHCGv44GtwjPEbktWRkkUgeg9UmTgfVRvx6XJ5dHzVLGpUZu5TcfMHDX2BPyKExF",
  "key11": "euTovWymKJdZpk3iBJtmrX6KpCoAijkyZ8t6hFvBX1Ps7H5XU5iv6y38KnEbsXybua5grDrCp45EJk6nuSDQ3rX",
  "key12": "3B7dkwKFNEJi3WbApZZTfSNf84Z9wRSxDQKo2irCRa7GZDGwkp8N6MZ7Ttf2Rj3VQSvwRRqgrPzdZxkTtEgkknpk",
  "key13": "3rzq8Lf8pxyWeJ2hTUUypabAXsRnuGrrkaqRXcovhnrHxmLZ5ZbaaT5c5zuUfL2b2tPBPivagodnesisJx4AA3oC",
  "key14": "2z6UiepoajHQZBXbvy3Cup2Vo9aCBtdLC3SnZ2rN86svMp66MaCK8wwE5REUMSX1xSgvkfmYPQYg7VD3FDauXKzZ",
  "key15": "2tLVpTkJ8P1ZozihzHPfhGsnAqku5WRkfJDRD4tvhf8z4UuTqPwX8HkpnKHdWAw2FCuyNzby2TFuuTGB867kHbo8",
  "key16": "4GwAWHfXZxbVmxppe9GBMHhkkTot8y6UMHnrqWWV8qpzWVHM4YnpEW2Qm6Bi5DxfQvhC5dG8yKoh7JtYU7wfp9xK",
  "key17": "3Q4oVKQP8xXfac8cw7JFGvCx3x5jZ5UHwxysWpt9LHimgpWWRM78KH7KSgNe7pxgqRijEudR3DRdMoLkjbfAGJiY",
  "key18": "XJKiszM9hMMFpxBGAn1zmMeR5tqKYLzc71eQnrUq5MVn2W8ZZDPSvQwahtBdn7QYYVjk1MVutwvrDuFFn3gA5mA",
  "key19": "LTUz7Ywuv6kMbzfF8Gxqj4Z1nvEgnbgvK2oVoDBsdve9igutdYWKjVFYUmWyxPFz8Ycctqkd5qZi1anVA4cgDFy",
  "key20": "3c1sbpNjfYBq2HBeN6YAdC7jD3BdhUXpY2f34E2KmQMhQi9GMpQNAV84adfkL12cGkFtyvJ97mi5dr23oShoxfHT",
  "key21": "21Vk8PxmgFQDaJ9xzicMcoirwha1ipT7xc6ydeWRrLFUp4atKETmeQ3eiJdhgAmiQXnnR9Qd3AE7rqKedDjtroK8",
  "key22": "5co5yLnCFLt83vn9LLkh3nv152ZZ2z6BpJjJLvYqSZdX1yA1KjxibL2NXFXUTy6puW27t35hCWkvDeXtWcVk8Rjx",
  "key23": "2S9p5GtqM2p12yrXfZ66df2Sahsj4DDSExozzKu56dqBu2UbVZTDbSLfJ9AS7rHzC3gZ36mLxBqUgXZTSTUmbRUr",
  "key24": "43vq7RQY8QKJtdbSVWi6AMuHFn6ZYddUAm35YabwfDLqC47KwGTocJcJhB7kVm9zao4oMk8VLhjWAKipk29ZVsHu",
  "key25": "4yf3tXc7Vi9L3nPDBXKJDiCzTAduUVuTweJzAtcVECrHh9uJLofz1PEGerfXzbuCX8XwanThSH6A6XCeKTuHvLUS",
  "key26": "2zpaXJmwWSzWdGnDbFdZ8RhjvyJtQy15ANCopsbSm91x1AtzBW8nrq3bCXfnM4LhdsyqpCHjBqocCLauyHzYfy3M",
  "key27": "37k2m6zvC9BGLjMibBHLiZpKHpHNz2iFEJoD8y2x96THnfyUzovYdXM7TzXNuAq3x67cuekfLs8Eeu9giZc2pKd8",
  "key28": "21336WcRHA1EUcJ7BX4CEbW4TMFj9R2apTUKnexWy7gXHFHDxTvXNcVQAP12yYJ6aSUYRvbJTwx9MVwarhmaXAzE",
  "key29": "3KYXstBhKWxeafenAwTcfbPUwkuAnmgBr8nzjHiXzRcoiHZw8NTp4efuE98XARiMFizc7tdXpibRxeZsPJzZEZ1y",
  "key30": "27XzMwiu9h1vFiiEgtbvaQvawC4ezN1Z3Rwe1b8cgaTQv5MTwhmA5bs5TL6pXfaD1y4NSwvjpWqgaoTUgjJpaaZE"
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
