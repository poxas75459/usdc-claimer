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
    "5WYW4MypMom4DkTAG2kL5p7mhVbNw5YJCFNK3ot5guqZkHAKLdWNYAq9VobTnvih2L1SUvvdCf3mwEhPKBnrpZmv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2F8ndtKk3nGSkiW8DUrAMbxBQU7mjibn7asPTmPj5PMXjR6biYPF9kRgoqWKqU5bhjEV7W7R3R1amZpaKeRb1aoC",
  "key1": "5t8KANbnRHDiL19BizjDVHFKhzc8iSbD4vGvL1CAbVMqkRRyeQnnwuiGMTDGkV5wWCwKSzNqMMindUx4ttvHDdz2",
  "key2": "4jhYAJT36dTFBPVqe8JRSmi3JH3VaWFF3aN7FifND5Bu4ePiqf3M2dUgcy4AEDr4hxda9JZ7it2U65YShtJpTDma",
  "key3": "2ScP6XUvokrKy6ZKF1iutpg37qXr5c8T5dY2NYcthFShb5wA6ZUSHFExtUvnWTBRYhZh3WjBpNYZ6tDwxBHHYn7u",
  "key4": "4xTHAvvFGKFRpJc4Vfna3WCLPRZTvrNNRZxHVjCCcz7inGFoyFNdQZLnS3mzdbvCLceQX7QjaUKGZRfFTs7Mv8G9",
  "key5": "xU89udzW8sW2E25WRLru2iRYdrgUj9dq7VBJP9kbJCjZ6fyCKqxYpF6paUkwE6mcy8fbjRbj2RBSZfuBffejpFe",
  "key6": "b4sCc9hHNNtFwyvhv353taUXmxF7Yyc6PPKgCvnr1WGLijF8xDeAFpWX5Qe9Yh2CVpEKPYvNP6mPeaDFqumhGPM",
  "key7": "5QKxhTo9EAa7eCWDPeMEHqSA3K9Hvt4TXVwPB4fn3wo47oBRTUtCWP6ZPjK1dDR9Vfpfwp4X2MeCzEbJhsxWnRcf",
  "key8": "4tWgQ85PK9YHqF9Gys7rx5Ppp33Q8qywL8VQKCs7zu5aWLCDGFagxSnu1kH7bWGVBaHonAQdAwB91uBbL21vENjG",
  "key9": "4xy6erK4URsveJSzJ75gN65ybhPS6ExegmECeFFBfgjbQFPDhXiAqh73Cyi2fRKLqFZr8J9VAo3nzC6GbzmPNZwt",
  "key10": "3qPWNJP7VNPbYXTSJ1QoZkLXr8jGKiap3LQAWqF6TPRmq6SrhPpuWz41ybBZ8z6W5EydTrYDQqzNS4B3c9NJLSXU",
  "key11": "2hwffxxSKsJAtHkyUZBUXG77DuYey23TQ6b16jb5UhVm3QQFdLJW4sqdoVWbnuNEQMBJAUXirGKwXLXKNZ8YgULq",
  "key12": "5na4sfcQJuptSU3EHjmfmhwyju9YajMJrGpTdFc3ptpLRbHcWQTSB4VHHXsywM23i89paDXue41s4HywYzo63ASm",
  "key13": "4CEV5NDP6aTsPT1gJ75R1gbBz4YPY6ku81ykMzavKy7GJxQjLL5CBRJFkTB1PDmhwxwb2Mw12at2rzXi8yd9Nsdx",
  "key14": "51MJnPKCn2YKqUdExftEaF8JE554ZgZkqgHhAH4xA1vZPs69ytXdpsRWB2rReiuPZn2kWKRZw2sPJM918qQqd6P",
  "key15": "5qtepvWqcMmDgoAaE4jriYzZLn8dbvSowW6KBHbLR3Jp7Dph4aKaDinvNiJApoAZnFd786s2NvKeh8QUuxQYKvFu",
  "key16": "2ZgMa8EreTWp3vkUmUYeEz7wyReFxMm2CKq4W1QMfJTh6ccdGVUkKrzG6HcMfW3g5ATcbK9dLsc8MkvWbFHHcuNo",
  "key17": "5vdgQtQ29Ey6R1MWAFbEN9NH1KhxfMEjjxT9foWK8aPE5ABujg98P8a1uGqqedDpxd2UQUbWxyt3ohJu4RURKujJ",
  "key18": "KTTCD4skTMCuoxHZp4Jd3JB8oFAM611UGoQWZKDKiMcMvrs8LVZj4ZigRyDtA1zgbugxaBdx1yto678HWfUDoQ2",
  "key19": "5dGn9jJH1gyTtRe766oGSJWLfeUkxkqpxaU1a7JrU3kn1aDjWTXtXCFFsBdsg2KazLHPRCqo9hTubMFrVvZno3v",
  "key20": "5p2S8cDXStVdVY2K2ZAC7YmMfE38grLzwJRDsbXU2eAD1F19bfoW2Y2iNHgwx2xeBpYSCfsf8hovF3XRDKy5HrtB",
  "key21": "4HBWbaiZ166kswVvF6zoXHzcWDZ7MBRdm7EtApPGDsHejPFss5xCoNptiwmehxkLZGCtu92joEdpR4vxUBWqT5p8",
  "key22": "2rL4mX5EmzoYhtD5eZ6mKbwcKe9YxQ4p13j66RMED4prmbn2Tcr3Q4ygbcMy5AsJqEWt1h6T5PLdEHREKTy9TiBR",
  "key23": "3LYgHNBJg9nTdteUK85BNdaGcSYBAesVX6AUiwrtX54crSgAYSrpR5puGuDKeFZpEaFWiwsnDY4fCR7AFYR6LDBx",
  "key24": "4dF7XUDVXHVd8xM4seyXKhEFLkwSsNBtqHd5eRnzdR8Mzm8qRMEDo9WpaRQJbXH8bTLpucpwzDK53qZuKEu9ZVAG",
  "key25": "3F8hwrhYJoTuNgLum1vB6RVvqMoWKym8Q8nX6rkGjFoWpaDvLN28BEstcrQsBiopWQwqfzdh88kDtq51v6F57fvh",
  "key26": "2ARYQ868YuK8dGGqevUVDtLKcRc6Djx73aTAooJHSPJS24uPwzDrRimNdB2WB1BNH1ahNzipdbhZay3VaS8m128R",
  "key27": "4BK8Ln2wyCa11ingz7aTjt4fwNBBWuHDmK9QAE5ZEqnTQiZgM7855BmxLN7b7ueNuotZQJo2YU8jWuXkkFKvKPNH",
  "key28": "4fpaiaSymtJEuuCLMbkLFQgPBb8Mygiv42vWMVFNVrv3ju63S7RbCgCn5EzThMzmwkBMbzSn7NtAfsSvss1j8uNx",
  "key29": "UFZNy6HfoPYa3h8hwvkLasVRBkJGjKfPQArdPUXiVw5yLUH7vK67ThnwFBJPVCZKMbnTeuaVP8JkcVcTMn6PxYW",
  "key30": "3BYzj3npMaQDCg6pJQdPHpBALb9KBVpGeJzhAmR1aM4GJmS52Lgh3Fnti732xNYAfCHgdu35KE97sjYVvT2qnhPm",
  "key31": "561JrdJHoGm8jAjcqedVtyEtpVtMuMZVuLmtA2ioRd1mfR4wiEHwNt4StEWgn4Y88ch9bX1PHeVcKPbrB2g8SrZE",
  "key32": "2fJM35Va3ehZbbRozb68YaESTNRyWUcESrSQGUgk6Y9VKGipMk1ADJMhTwKhgEovWkNR6DfjgDCfZwvdoYUVVoDe",
  "key33": "5ZmMFzQ66T53TL4ywWjCSriSX5f32aLdWXiZXYLSYSqyCfpKbTJTnP94PfKrytmW76De19AjZseT5yoW8Zw7LrBK",
  "key34": "61ew1Q6XwxX1PADc51WjAeQ7upYBQSqYuWavXWAdeVG9n4SFxJfugHLzUzxuBoRH5fBqosrjMUgHn19EwZbDJNcW"
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
