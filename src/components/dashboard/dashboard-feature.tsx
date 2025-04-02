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
    "5qaEDHnGK59eYZE9kR8szAY3BueVbEVzUQB8FKAKrorDrFGnFWNzGew5WkZNXfz8bF4sbR3answiLQvGuvNL5kLG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HA1XH7sbDj5D2fs1XeFXdAqj5yoLSjVnEsKXtP3zubJzNYna4UV1QFY1RhwgLd1d4rvc8PKVD3CMDTFmS1M7ccE",
  "key1": "3aRT5nwNajjK8W5WodBJJDLQuLSGxdpafC5LKGvqkekC3bzTzCJKw2ac2PeJ5XoBBihoaXdYmUtL3K8MssoVK7LG",
  "key2": "2YMgKq3E5Mo6iFSKioJCNR9fmEvznALc1p2PAYoFg3cmaEx4V5QiHRiNQWYrbvYPPm7tQoSZHUTfakWCJRcWxvj6",
  "key3": "4sQpHzjmQW6Da4aBzT3ZSzcC2Pna95bcm8Ld1rzFWLRG3GFhU4MHYVSgjs1m4H8EqPeH6sMtmSrNgtKPu29iREQc",
  "key4": "WnDKxMo3isARHQPruHYHtb7LoXzuKQJBUo9ji9Uht1rZfSzfspDrFyP2pLbbrLGhQtaEYLwn2jfnyjwmRYnjvu3",
  "key5": "3PLQUrxwPDPjPyU3SMF2MNTyZVWbQ811gTk9e5PhwZNU6PbL7mAy77BpfouAub5hzYKPpshitpZ7W63YfTHaSupU",
  "key6": "4icuNwVAMSRFG7Siuqz2zNhVt29yTu6ZBj5eCCQJKNsxov8SmGF5LQEVyMJ8fm5mFDqkCyz8PPdTu7QgMofaVzJR",
  "key7": "2TGr16qBQ4YTJo1fugkPrY9M3xTbJambkuqGfn9tEZfeFjdYGcZkoKE2kKtDnWHa4SVWR9NWD3KB3nNmchxfR9Pg",
  "key8": "2y5KqKQYddVEzsYzhYK9zjmdHoD9LPyLFjhQ2zwgqDDBCDnc5ny6FHXh2DK1rzibAJrXC7arUJv5V7eN6bsEgxCg",
  "key9": "4Y1hRkPi6NshKczJWUq7x7akKzSeJTX2Wenq93VCrPM8CeMAYEZnRVwjjCaHcZSjB6G8mYGzvJorTjW8uc2bEGVd",
  "key10": "5VbJdTaDxUfpAQe4nGqzBwRjJbYPz2qygSBrPSvUwB4TLtEuHu4JJ5NDMArj2VDpRdVtdH91EwZkjUKC7V5hi9mH",
  "key11": "4UXFWwTyLKPkv9zkcc1DNxbTFLAn8jhorcWyRas8spt82pW9b67Y1vqHjMKhYFs4SwpUddWNcpbap7yXBovq4tLH",
  "key12": "5CpRYkpWLUVKQPE7tehngwZVzprq5RRCco7tQiEQ3VbF3FfJWuo8C67NFzSzU15wf4Gif5RKeBJA6VeuAMz9DJNr",
  "key13": "5NjfQkuLYxeAyK9WtVwgbYttuKNaMJHVSterxcjQWodpvpwdYUqdQ3QuJ2BqU8B6aogWtryvG85Dga7tV3tJrR4m",
  "key14": "3oTKJSfBxMya8CPdg5KeSUnfC1r7WnEmBoUhZAbaHBxsyXjQxqqzipfgwFzpqyYsAq6MCAdkvnmAKAv2a8fzBYMt",
  "key15": "4nygzjQ8KoYipR4nnRWSJn5RgWBsXkMJy6HqH7QaSgo3hioJAV1wQuvobQuurtjBg2rDBzwf8ULBwVTHZPS9mXbs",
  "key16": "ZcyherACsVrQD3zm3VjnYxdsaQKhRsvtaz9afiSv1git4GDGNvuyT74tLXyWzAystFBr394RYwDMfXZcg37nRdX",
  "key17": "5ULi4EX2PJ6iRWubyr45788yi6ezk97mRjNGyasfBer6AVXENJsSbiT6gW7JhcjTZMM6kmUxqaYTWk6xTwipsvKM",
  "key18": "ACfMTFUZ5uX8TiXB3EWibQSyJ13ZqV1Qskjj1xkTYPwQRTSDV9MxB1T9ebTP87xDgrJQoYT2UaHEqr9a56WJTHp",
  "key19": "4J8LpxJ3xC7rN4N8AGUTRJr8cs5sARWQghTimdEPAZpb7nKRYHY8icQgqdfRqaeswm8Ppa6vJipL1FrMSE19ySAB",
  "key20": "uB9kdLzz5mRzCbquUzEtZ9aimP6uPSfWqmQMmsWU9HAWJEr55shQoXsmEiyroCW88eTge7gmGq6hqTpR5Pwo9ti",
  "key21": "E7Fn3yre6KHH3N8dhkHWDzK2n4DUzuHPEXWYCdMFxh2Td7edFR8VtpZ46RdG4KJfDByiXnc4EauUUGEBtQ6eyHy",
  "key22": "44YGSoNz9cWbuv4Xf1AAnQ89F2aha214aEccm4mxJvutMbVgC4Jxhms39ASZwXXL69j6v5Nuv5wqDEnKvsoFcRo8",
  "key23": "3NC8aqwtDqrzPgr3L4EUMxZx8f1FbYGgAE1pSZsPBM5v4xqt9fTw41UyzhK2PTsZbAZBvnt78kMfk9QpifmtpJDV",
  "key24": "2J1VLqZJJ2hCBYQTyqAq7P4KbEukv1HV6RCc58BqNQuPmHk3rFmB1wJUhq9utbiqgVV6HKUo5ZwgeQZvbRPAnNQr",
  "key25": "4cF3Qi8Mhocx5RwLD9tfta2FpuCKX8rYT5yZS1D6j2AvsKfnFBBkWXHSaLpvT8Emxqkgsa2gDux6KSCjhC9dWjMW",
  "key26": "4QciiJcrZzmKJwGVMrfURfUFB47FS9gmqMLFACJ4h9seG2Ee9bimfS3iTePvvi76o2nGJgAuA4Kdqody42vDHdYj",
  "key27": "3wT1bb4LoAVXfxjxtyBr9e6qM4CWRWEK4mLHAqLT9Ssnb8VqNtoRAAxNg38Wz16NSMoWaMBBsdQgA291sxHfQRg8",
  "key28": "5esR1zbdk3Jog3be49ZHMhVFsyh9Gn1JCMqBZjhevkwj8FhU1zu1DgtkoP9dDXysemMiyo9MEN5ZECraambuVwCQ",
  "key29": "4K5LiSm73BpiT3f976yHnLvDfBd9vnSLyNio899uctqyrzscquta172MKAnxAgRGEsbDr3bJvzkhzGEbFsRNHRu",
  "key30": "62jujpuJADCCA2xE8nKGaRmt8KbyBwMxWCeH785wpRmUxPZ2hi3TNdkzNXELXdDTDeM6vTRkvqeQHQd8PocpAkA5",
  "key31": "65W4Q4aYtJNfxbUwRehYEWxBRfrhrnzBJ9fxPPNxgNiG5mAtmuK4nZwufGdhrmWiQBaD6QxfARwon9MKm7b9fjTy",
  "key32": "2fwFQf7q1c6EcHTtQi2RyTLWYqescVGxncTyfLLwZCdYUKAYvA7Bshaze339pbYmv99LezFnhz8HCmNzvN2TwBhz",
  "key33": "4tYFoLPW1LCvFmVf22nuX1g89kR8K8Yrd5J1gc57115nPKruQtpjt2vVV5R7bohFxFs6o3ufVvrascgaec4Vq3NK",
  "key34": "41fR7e5S2W78zWq8NLnXeRhweszQvszZE7D8ev2yHt2Y9QFDLdUaigWr8VWMuKqbgsX5wV1TC4UqbEhPb6CtQoqA",
  "key35": "24y9bJPCmaBmBvkk5LNgaN3oKKiLZQrFsZsgF6y8CAagbXMqFbq7pGJscRpVmm5K3T6BrYSyA3m7mpARXbZGKp85",
  "key36": "2txLEQHtzVdjTbmvmEP4DXvbmdRJuJSNJBFjaoiENf6SLLr8ePEnqKZxjoLzFGs2e6er5UE17LwhUGw1mKiGwft7",
  "key37": "asa93vWZRtHAcc9sc7ZZiwX9Va62QqcQDkRFQtXtHGZxJnXiSeVnzqGxcV8ez3EoKpZ2SE3ZbXkpKDqpC8K3FNo",
  "key38": "UB9ZestEANLtpPf7X8UjFXvu6j6Ldp1ZrrGBhSebUEZSKhh6ar6wtuqQqhYns3xmAFL9b3J5NXPUB9wUxx4x3eE",
  "key39": "36YcWmLM6js1jsx1bmrX3XjkN8TenrvUvmAmtM1CjhoC3ufgY1NBKfQRxWRXfpzkaX9V7zdYeB16nCuAV2dpdxdG",
  "key40": "4L4KMdQSLBbRchkJxyZWXPKmiFC7MBMsC1CpyWWZdzs5oVdrXhavvAsxK8jF5KE8oE4ztojWhwaJ1K9p3EfM9heu",
  "key41": "2Q7VZ83JTDqF3eB7YeGxUaHV73iC3oJybybMAj2eKZPjvoNmJ4xRzT9tx1sEmmjEvjBuhTLQLLQpB5hPQB2My3a7",
  "key42": "3vL8YjT6Csi9EJALvj34B8KNt7JPRTCwkw5hcRv1PpsEyT9dug74GMGPLGffZucg9tnAcqSTu4ESXPh8X388dGvg",
  "key43": "2XUFJJSpG7UFxchtvqhRCzDCnWH67rTMeGEMhWFrYqH1NcEgrRdCEtyE6rTtXytA9vpUP9z2tKGQ8i3KgQXDmdgz",
  "key44": "5iMMA366SiYNDjS8KkTP5WWPZqQYRAj2UmKvsmKE47dwoiwXq6o4fpkYJcXaswQA9DQLoGrmNjYS2cSaka2W9zVZ",
  "key45": "5ZKp7b61uMeo9Ew4s9kgcXVpXxq4mJTfPL5UHqD5ZpDt6hUU2sUb3mJXiy5oM88bvdAsceeiooX8Ja6Xn2YyspX1"
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
