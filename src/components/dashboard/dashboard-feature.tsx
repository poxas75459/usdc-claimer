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
    "3hvuWoweCSmXh6tYrGyJkz1rgUQSuEoz5bQ13UdMJqxd1N6q3dLDP853HM2Yrysu1fhUTgMySVxqNFhiuCtKe6pn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zx8t3AqRG8ucME4X2GpNPa78xZFxaeHCP8f9uEB8gcDjNepYGXWPGzykkbZ3p5N47o87SQ6bHSBWM2N8XPfGHAT",
  "key1": "PMEt15pMB8Dpijo1NHQKMkrfitEd2Z3m5LBa98SYnPPkHmmEQF14RAYagxmBXDqmCh7MABAcgkztqoeoKQgXhWT",
  "key2": "5pK9XUbrcnD1kkDkiwqrXhKDPH6WKwHLbvbStyqMTqKqgfeYWfTRmoejCNcYTTsiqwYhTKb1B7wtTBiawvC85YTX",
  "key3": "5Au1tmiDGAyZZiwfTMYcrsQ1dDCvos2esfWT72MaCBJMEP7AnCkGtsHsCZvkrsg1sfzUwtpa6fvL9TgGfie91YS8",
  "key4": "2Ma1Daeo5AoFnCLdTwirGxc1Go3UejuJP2BHi2AjVBD4pRwimj1zeTh1EcgiJvHYqsrgSNcNCyhvJRQN3unmMMJ",
  "key5": "2Y3WtMwtKNtJ2BEiDtmd4BSnPyPhohvTRgq3RtkxYFUpP1bCoff3HWghs4WM9jPfSh1b9au7x56narG1wigALco",
  "key6": "s6enmDVoSyhX3jxrtT2iGd4zpnK3xAsmv2Yk8N8bmP2cv5VqMASkM7nDgRjt9WKkKwX6WyNRsnGwkKwsaoRVf2y",
  "key7": "BXGSeEBfnJVmxX5ZCmLrsFSs5XVRRH1eWHEwHpCmkrHZA7P8pNc36A42hLKY6averexspwFTgEi9vLYjVQvm9FG",
  "key8": "VD1Zdakn6pMBuEp6TfHDz1wKt2Svz7pFavBTVNnaXzVXgSWgnj1JNW7nLi7xfYDqVJhKK5yWyVBYMYbrwEojGN7",
  "key9": "5VGUtLYwQgTwFzLcKRygbkFSebezpMFXHcun7TYaDhUnpySqwTneKdVuRjFTUZqxAK3iQ2UTJXRsQ6jCmKFoUaiL",
  "key10": "4ZD1F6UVXFJiePXYLKCcicWuFXDk9PkV8WvncTgXriukvTHwReqVwLy3YCRfc6CwqPEhAcyjwkjDXb44Sywgf8L9",
  "key11": "51MU8Xh5zNEhkLRRAXFe51kLG4dTLozQ3JVvMYsuxtHa8AXe9NLQB2yEReJaLFujrS393V1UAUbQCY3G78T6uQid",
  "key12": "4x95sePT2GJHS2aPVH2T8c6WejPCqaVxaZi2oKCtCBfKz37fvfPcDwLFxJyMkA4ogst1r4fWutrnYFbftUdTMtyN",
  "key13": "2pp7usj4tCVQX8qNi78BEjPiqeKyZMpiGGzSZwpmRMm1NbnphLafYk1brTA27mZmgStLrRTnTv9gV6WwJQtLJpWv",
  "key14": "4sM9fqSxESF74HHBDG1K2c5kQPFsPJHVUaajEiAV3vDNkSiEFtVfn8jKeC1YQZdyBQUEAB7ZSkEP7c1aMC5n9sqK",
  "key15": "4rdrwb5emg9kU5HvwXcqzijbuo4VujESxrKdpgECGbvyWJurFuFXyXMFuDZVGdLpfFQYTJ6dqEhtjtzVDZnY8iaq",
  "key16": "5Ax1esZd9DDFXXtsxY1vadtH9DXGCBYkS3tY3zppCWXPg6AmQ5QuqBwJ5upTvDciEAYaCYc37TRLATKpLYzezhBD",
  "key17": "5ceScrDjBHt6mYSrkeRTPYSpYfyYXG62czbvnAwV8bLAkTuBZdjUcuqQHqqhT3khFG2ZFisVH5vB9TqZxvU9KFyC",
  "key18": "3oYnWhZFq6T5JWPFTQpTqFogtZjMGatDTwX1hM1d6jorknR72psTsoGnf34yX6VcUNfB1UQ1eYfPhkLV47cA2zwA",
  "key19": "EQ4cg5hMmXq2XcUyPNdMwD1MiSj51Td27So9exQy8MEBZTN8mbhwaUogG7NJoU4CkV7JFwzg5vznM4sXuog7CbE",
  "key20": "291KC6HGLdr59JJ69HY9hn9oKy7ZpwnjCnvwzNCQR1BVzVuN8wMitCZobYxA1JZ2SRqkCM7zj7q6Ks6MKBvBFZLk",
  "key21": "33VZTv1RZDMPmrN4j9pLkcke21WZnSMJGhJxhXy8RSL3ZfQsiEKixMWHzi7za21t3UX9yny7gwKMQwKBoyNgakrt",
  "key22": "2sjjFdLYprLkDWMUS8QWqdMbgSXpyBRa5geVJABL4fEDYz96ja7173A9bGYHRyALmTjBewhA4Ds8G3vxWAaJFEp2",
  "key23": "61EeMbxh2VvNtgJufJpn1y7vS5W485WNWNHn1nT7EZJziUcGUBCHNExqZpvcFW1bnkgHkuqeaxJPJ2DVeLpXo84L",
  "key24": "3ZCuKfbgNquwGPJ2d2cSbcQHmgu35oeze5JWLjjTnBuN3dTHYDw3MnHcbRpKZCx7eBy8QMTVBS2FJg3vyfjb7ptv",
  "key25": "9qE5oK57totVpFrGyHhMVtJHHLHfgstfVYHQVFP5WxC2MJaQM3H1mtnGrVAEEbHgGiDFmc42bLcwNUsLaZJvoLg",
  "key26": "eZK2HgU9v8orwycEhMxj6hMH46SdmQwNb8ZqZhzt13pPCDMNBZEf43LFqQPCQd81RcJh4ApW6M3b3PmcQxA6SMS",
  "key27": "gbfaZLdxJVtSMHjruD8q1JtZ9jsJovVAtbKVeCDEWFuYTYp5y2E65fKPGnYnPf7me7eVzUFwaaCvMzqfVjmV3EQ",
  "key28": "322Aw8sCdAXrYcXgSE1hTFbxwcVyuuuJ9jiPJdboEsEnvkJ7teq19z1T31oPWama3Ngedr9rdexJeGacae4xsQS6",
  "key29": "4Lmx3PALgfXafucpUPLQmUa9aFStwjHRnWutobFmKLEYgtLAjSeYihFRi8xWJTjcoo7W6CZKntvuK69aNhfpnWRV",
  "key30": "2HDSXwBuwoWReTZz2rePBef97fxz9memUYV8r7i4kWSHjm8kKUQMFUi6aXXiv6ezHWpgd7TQeZFkKRqEwYtSX9vn",
  "key31": "2iwYBnMjEH9sv7obkdUahT2bd7iksKzpF7mamBdLDtJnoxg2RKZ2dcvzojmbbsXCe34WUDiwK1WYinZWjpKwPqRU",
  "key32": "BqdvCVjgvaKrKYRf4SeeHxJzVE6SyC8dReTtZZPu1dmc8XLLVSZ1HM46vcYbyaRBmeG2tLQgN2PXMRRVCRBeQPr",
  "key33": "3F8Hw6BbjsoDcS5eanUtKPNSsEYt8Vf4y2oqd7nWmRKJ7H57H7pnAWAi1CN67BjZSkuiJfHYDfHda4GgqF4KVWXj",
  "key34": "2utGyaRipJV4BWscWrT6bRfDqgWxrzu8vkeLYHt3Gp2ScUNTUQTkEK63ZmRpWBnbFLPifrbeJkVkwG31HiNGJr8g",
  "key35": "xL7w2F7kStTFTycGb8oygJTMUmtW33G75omP3mFrCifopSFfG8ECQhDC6bEVHhU6cEhydTEPooG1TK2A6KUWGxc",
  "key36": "2TpMBo2EekvpZpUStx8CsNhgB69Kje9iQ1fRVMKkTXVavRS8q3iu5ZjGzsV2xW8mVwdbM2mbriA32jZfPx169sRG",
  "key37": "5yYRNRmdfsfBnEXGcN15Jni9sPJaXbArDoiUQrkXJuPX6GBQ5yXjbrqDWQ8DMwABrr7ob3qijRJ7zNeaRYpm3HYd",
  "key38": "2EzhUm3w2i9tBLsbPE2DxvVFPV3Rqy3EVCXvnCXfA14vJffnqu8FZXvnT3f1TryQQNyfPkpM1ZCksG4JnoBCj5jE",
  "key39": "2Nvfp4AZGcGaNQYEVd6rFnxA6aVLrtZqP61Jh8c2QuExfE3bvWNsPktPtCaTjmdhbVDDqN8EHkQCGwBC1P3sWGGw",
  "key40": "4viPxtvJybtMeYEiWsZgxhcyh9gD8Kx5CgW8Cm4VEdAJdBfYHFkt3Es2GFcnuwk5Ww7MhxNYQH7sotM1yjPxGDcH",
  "key41": "5G7fDNBBQneNJ33V7qTHAR7m8eqdDjM7LgxhBMqc4DVVkr2f3Gaf9fboqVgUoFeQnv93nqPxxy4FjHcAK7mqLiBj"
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
