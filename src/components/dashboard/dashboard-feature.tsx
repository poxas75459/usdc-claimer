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
    "4jQK3UnWrk6TuGSo4BP9Mhgtx8iVopvfhDn3U22T7sM2otomK1zRyGyKP1tvUCJnySR3ciyj6fUsC4NH4J4FxZT1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67C7YDwRDZipa31dES9dtpj2fG7RXmFGindVjSfSdFnjNfv9FaJgVubqZZM6K7HMXG7RZH3sCAyhC8UTp6Vsdi6K",
  "key1": "2r8TWykhnNkPkYXrNXDaiEufi7ktezyG5csavKmiMQVRvGsNNjNtqCaJ6x6ze17iFfN68tgNeiRaEmMCYoLAh3ZK",
  "key2": "5ARqQCtDg44DJvLcXauY5961rmyZ6o8USbAWjNdCJLhPsGu9etMC5ob9ZQcihfXYdfyZvQzhvDUPWFSYGn2s9rcz",
  "key3": "3z9rDNBSjAqjPRJiQ4oyevaf9Vc9rrvG94tbu3GZyzU8rgBGvKLH5QWrogpZzaNm7kVgNLhxsMBoiTtcrmnXAPrH",
  "key4": "4YTARaFsRMi2B1viGHkDwWqcHJAy32NJEeYYkh2SMwzsRuqdNcgjhF5kyszJs25cvZHLsAZXhkjqHaAB4PvbG83o",
  "key5": "YsvuQPYpiFymKKJ5FPNgUbzPk8JPqkZ98MPcCmr2WAd31U4AknCz1VPuv84heYw9eQLR2scDQt19FvpQCwPYjoC",
  "key6": "3kcs1QHkvS6ky7qHLm5mrJA3YoaXsxns7XbEuCUCsehX8YxgDiYKCPHE2k2sx3n52cPoHgZoqvDwFoAqiSM6hpAy",
  "key7": "33nD5VJkJvcPpt7HigVF45b1uKmTeb6QU289pDGF5yaA8XMKZ7dUd7fAL6NNaKmUpiab4fXU8z5C5g2Po5YYJVSG",
  "key8": "5VbwKbcu77fW5WzEq5T63pSFHFXKFwTzjXMefBEDzsm84dNr14PLoT61iNFkU7kDf594o6nSbCmummmTp1qDVHyD",
  "key9": "DoqvsCtRaqnK99mhAbKr9V2De94hrTCSLrGiwr5XT5A2ZFVxGXUb4ff1oLGXs7FToRd7WM5TddtDoMBgQvhbdnU",
  "key10": "HE5CBvyrHVSmFbQQjDhtwrBnXuZCoeAhZxhEPPY6jRmKRUA7tAtprdWzDfuodeiFrvB9xaCbZttzPhiHnbCqqEs",
  "key11": "21XFLZpoDZvFiMd5nkCycddUNyjx3LcwaGnvbjcMh5y5ZXXqqbPma89b5DvXiNVqRLbeSpdpQxvjJmx3udq9Mvpi",
  "key12": "46EiqDSkUwaMsFUegPunAsuKWbCTDEdgxE3ov8FvWAh1TSjbxKdSygMCTbjeZvRFqr1RmM4hCQMgPKkuARcEi5qH",
  "key13": "3zVoKEzP8bHTZW36wgo4Zqunu4As7E8thwwNnCXNrWKVPaPchVuUS8BoAWRgxHzG5donVy1uHvt6L8GA9BAAQtTW",
  "key14": "5t8YCa6wnvHbmkcZT1kJJ4pRWT2ANHtzSP6vH9aWbp7o5k1U2sxTvHMHizcLNarodnfbqG7DAGn1714dPTvAnqSF",
  "key15": "5ihLzLPFdqMjKcYzhWXLFXpyGny7WYXmpSo6C9ktFHBvs53zQQvXuCoPo8Bx5eFhUBNhynLJEqEGkVtEpqAoqDHC",
  "key16": "FxzQw7sDx6T9z8vXEzkbrKQFe7NytQGziYQ6uDbH2P8HFQ7sraukMVi73cRTtBNHX1xfiDkB7iVDDrWF4spZoZg",
  "key17": "4tLgDcdN8buqhALxaXJeD7tF4BDiLoezKqDj1cgJcK6YSrQzCntQ5uRqq23A8LZC1NA6iLP4BExHdjuchVTVHUUi",
  "key18": "5j19Xu1gdFDM66YhdapfQWDBuV9Ei6YDHw3Ft9ops2bd55wjrXK3qXP1EVXgJm5bWUSu9EPhcdMja6wSqcRTGMR3",
  "key19": "3LJTp5mDCSrCWQfSjktx1G2rCf93Yb5ZNPetmamZhqgModhan3mJnVGHrtBurAg1bUPjE4dfh3yfrrg8dQcE7tUz",
  "key20": "3vxpoV4h9UzF1CzhHVwqhsBx5SE4XaBoWVjTapg7G5wvzN5ZcVwiZdU3VtSVEPJ4mVJbJ1gTVS4skZcFqEsJNUmQ",
  "key21": "5GVWAheaLTChw4Riah66oK34ySaB9sMxALuFr9vPeVZJ1KDJZNVH2o1MdN7Ko1cfEbuXGZzdu8KDWECxQUoq5C9p",
  "key22": "4faufjg3Z3Xw7qJoyeyqmiJjS7g97dh9QT5z8ddc7JNBuLpez4tqhVeW9jUBAUuGLKdFFxn2VYBNaaYPnEXY6Zwc",
  "key23": "VG8ddYZGa8wtE2WiEDimrrEs3jo5RMopUQe84qhRj4A6iAZD4DYxHKgSubSqHVfsskdwLtTEyzA2SCH7KySFy97",
  "key24": "5JFHN57XD2STHJGp6Q2cjax81Ym2YSPXqCdTq4SCWsqQzNXsTMugdi3NeeMqLTGQ5yn2mz15MfeSHntroXZYePrY",
  "key25": "3QXw5kCGPTaCW7vFpgk17eEVnQfnHKQmUqTf5LVqVF8obkuhaatK6kDasnTcXsU4y9UhyHZFbfQvV1u9kryLtHb9",
  "key26": "MrapbpQDz4juDqw5JkTuuoPUsfUep3jaorWnapjWSkknwyV6v2fLdvGtCGqp8DinnBEFHBVCN3f6zXmXcmauynS",
  "key27": "5QDAMrpbbJ57oMiB7omqD6ujR4C2w2EtDg3Bqk78qM4n8CbSAenNhr1gBBNuBikqDYb9gJ91G1wtJjecer4njvbj",
  "key28": "5AxGP9MNvcu5X9M1ff1KB1LaAQrLKYgGusoJT6UVyABSnqTmf3wVqvVyHCA893BVcCdVddgAXrSSTtontcZoMgaR",
  "key29": "4Xtiq13g1ko3sattrwcoBrfu1HjVtZ3Fh3JgYxGjso5pZS7PMhD2D3Nj4QVxH5Meg3Gjh6U9ckuZ9c1ZWrD6oDqZ",
  "key30": "4qGQ91L2HV62gjuxhtgmxrBcCiXYuTm4N8H9xMR9pYUwxtPdttyH7iYsP7MndcRuWs8uySpxqdNxmd552A6zGsje",
  "key31": "5MdM8JAxAywTwGnc1Q7rSZuvNwzxhKXiMndR42zX1mrgQ4JUDmGU6BSCLBKsQBBrdY9UwqLpKhnsgNEEyAXVZw3L",
  "key32": "NuQLmTEyPeiyufavNTf3zUPrXzUqptZyQG6xWD6A6EACXFiJqiAKuujrYFHWVdSH3zomggwuY4LNPYAaBVdGrJV",
  "key33": "53EVEeHYrHNXzpvZqi3kpHHApGjhNrzQy1zht2Xq8LXGzHoy8BKCDaUD8gZJ15uqGFLsSZTBjWH6AqEBLHJEusXT",
  "key34": "3R7fNsQbtTEZWcxRRugfoEy6ooi8WLESodf4Ygc1jZEk4reKfBnFAXrm4ThrsjVMjt8AEg9E9G5qo2FKDPQKLDXU",
  "key35": "2NQWbgh629oNYj8JfqTVUUFsdwk69ZJ6EuzjjfJKYtkcYULq6B2pGryMmp8GaArZ6T1RmEsDWWYRY2ojAUBXXXe1",
  "key36": "3qTi6diqJmodjMy8Q7nB3MFxEW1zrucutYCibiUx1MZp2D1jhGqRuygHkvhimiV5vf5VRkS8woPYo3vXwKTxs2Xb",
  "key37": "3nVj6CdD1uDCchTiFLRqHrveybqZDeQMjHRHoZpaEfePYRTQFm8i9M7eTSAJL5GKFW3VFXNEB1ry7yV72opo9tNf",
  "key38": "2YeaStVp1rcM12tBroEBTjUkScxSbNgSX8F4uNkU7aCfCKzXFyoharueMEiQQaZntUwMPGBR9xwxxgj8i4iaTZLt",
  "key39": "4zhXq7K6F7vdiPcM1jgZTMxDFwVfKreXCRVWz8UFHd2HUZH9jpjvi2VbDKsWbSMmvf1urFUB3x5eB7982befRsS3",
  "key40": "5SzvjKi4spViZ97KLJWvTRfSjjLbJQMvZCqgJq4WKenpGZd7gQVi94MN9H6pwkMVhwqyUnxPTDWvpkFgtHSKERcr"
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
