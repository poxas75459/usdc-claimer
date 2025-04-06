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
    "5oeDYEGrTnjtqttaMncE9QR9WH2uPPjmT69RBkaFssTcfjs55iknsCv9kxMo2tinUUWhUoDF4PA3Hwkgcv31aa2L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49zUWVzSn2MUosqc8KUcyfnTwgkRy9q3pTEwfz1DnYdsvVqGALD1j9Ef8xVk6fFwoBPv37jKoqi4Awb32bEXtTfL",
  "key1": "bSAqrYJCu6FriukP6EVYcompWMoXvch5w8AFmSz2NcW8YfeYmKqJinjPV4Gp8fkJNkqBt41v55wgQudFmNfYtWQ",
  "key2": "2oLCZ3a2TH5bwjMvEP1bjCGLZxiHEZBBHQstD6Y5jg6guriREZDEuHpbwq9eqFJaiRgg1MsqtrbQ7vVRAEHdFGCC",
  "key3": "4TZVucGhb6PVFdBVjZzzyHto6B9PoVhLRkDMHCqsnCSRqLGt9z6SQRq1EL3ZmSELZYZ7jw2PLuSDfLhXWVq6LDtv",
  "key4": "3kMASx3FCW4u6jpZzpVWiTSBQLKL14NrixEVdiyLDrWk1omUQ5npUhNH49TFCD5XRb2hRCnuHQaxFRpGTwT6S6rj",
  "key5": "4KMwwFyvfADyuvBqvAeWPcrZiqAk7z1ZnMzvzwBW5Hs1RaSwxMNWww7VsdKyL7kkcf6twbuS4ECitgYrCjNFw89F",
  "key6": "2FTvNApVAPM8963hrFdCVmSJUKVU6CiPPRaXZnAY7B2ZZcVsPrmzq2d4qorBmh5oKekoz9v5h32bE9JWc1htV3Q",
  "key7": "4BoAJ1sZfQSQ8epgms5d7v1cxd2VrpPmcS8sNJgrFGHp4ATeXW6eU5RrYeAtoufxf7o67hNFKLuGNXEvdgAdyJPi",
  "key8": "pZcc1TQw5h9HcM5DiTwD4wHa97Xj7L3ckKtzFSvwuLP956okRnKTCZ9wj6uuRaTfeiv6hAikN6t5uDD84QHJYvj",
  "key9": "5QtwTptpoTJy38Exa6ZAzHkWQgQgpWebwiFdhTPnnq56PSKt96zef7fApUNqnXbmRAHYEJ4c5TvYp1zj5qLLSXSz",
  "key10": "2g3eGWuCUiyzMVaW2bUcFsQfpnhJFpATEwP9CDKj1E6EyRfqnAsNHK242RFDvrpQBEKHW2dUP9gcgC8nTV1A3wiS",
  "key11": "jsefRPBzyv5pnajkqSb2WJBdLmtbsex84cpFZ3qLYvLvu4pKUnRfjDZ7Q7BxzZx1cjj3TeJZh5Z5brnKDrWFwpv",
  "key12": "2MjKe7rjMb4ivUJm36Guk517BakqyKbcVgfaKkjWMXhorFgVYTnpGyRYxGKLVEp2RPYuCHvHqhbvHtMycF7EL83v",
  "key13": "2S8Q9RxBmQR6pbfmo8L5kvT7vMtEMQSuJKMd1tqqTuL7fDwfHrm6ZUB8b1dkz5AWmvAYRvxmdwjipZMfj699U5TE",
  "key14": "5QwUpzaD4rMBFQsJe6uj7H61nSmGkx4F6H5jYKeFXvssiaRGm1dfqV5iufMixr8d28CxR4CAEPGmHDdipD5Sf7jg",
  "key15": "4nEye2nYLxCXAZr3V9f8gvZ7LGbabVTaScCJ5yzAWMxNqm5YQHTdCG3r3qdJpMPRyq9kZrUyMzuseWfv8z5j2qEx",
  "key16": "uakQ4LNJN4FZngU92fj1mQ5FiesPThayC3ztMXYpTuGqoYwnTxUx8kQQcVTE1Jdc1fdZRD2dnoU95tjMPPx4ddF",
  "key17": "4CURAJjc4jdLdoNu3iT6EmtQkhn8Fb9djospRKtWApAPTrdbZgsY1fgsak38zS4Pie7KjPDy7zpZG3ZpgczvMDrG",
  "key18": "JTTb5wgoehuAFzpqRRk7hU98pYKeKHnyoE34bgL2sUQ3BsQtzUajTggdo1vduTfh8EfYXA7k6vMGY7ENdejY1Hu",
  "key19": "4wy6vWkbo33xyZs75nfNEjyjyWzjmPugPgtq5fvs11dLPoGm3hV17vE4NY7TEb3NuvVNUSDbUb7jSAnxKDst8Ct5",
  "key20": "5zmygU7Qas3AYzfELoEr4pGVBBbrKupVUNjR8uYN1nZH4AE17dZ74dmaYGqwvkCURSVHCvDi9woFUXvLe5qe2QhV",
  "key21": "4ZjvRqYxZSXoL63YhSBhxYrf7Rogy6dCmpGckjRVZ2E72mRUjhEtojk7cmwEJc4iyu767p3PgTFa1ona8EUUapQu",
  "key22": "3z6NKuBwx4kuvHZBGDvdZCXg62V8YVJZnsiViE56QQUenKTWwKzApdwfBGo7VpCCJsR5CJhup79urAtXt2Lp6twB",
  "key23": "5zfEMtySFZ1KghQCoLPiKRGHAA4xZZ7TqbfsEnQWUYodBsb5vmvqzswNxmEWjiBdU7hRdn19EEkxCFbALXgn4BW8",
  "key24": "4Ryht2CEFcY2y2GaZTUcFmRd8SokPMSNVAfLJfD8JJMa1ztzNhebvN3AvxMzXqb885q5UW3gBJiBoWmqCSf1SACU",
  "key25": "2qoxH6HzuYeJzajhF5qkgA6FPoWR5DqPdm5fZWe61GPpPcgTDFgizGoVBX4wWNMe2q22GP1ZxgPPf5ZUH1VQPhDy",
  "key26": "49ncLDtgsAutcDdVqJBj6xyPoJEDUhKPEGADj5aULktScYSTQ9P3ZjwgXZqkuMp4HruJRMzcH4nrPrz8jqCd5hLK",
  "key27": "2QSw2vYwWikX4dwCdjmrJZyQofUWGqqqmmBu5ns1mHF2FKAgmoUReuiRtMaDfNU6Rs78uREKdHddafzTzZYxzcQk",
  "key28": "5LPDeqmMLv2nhm6Bk8bqHg7nwEJgQCukS3UHrTeumzaPioGHKXvttoPiBVufnP3jHCW9FNNQHnjFLxpy3y9pRqdd",
  "key29": "2uYyKXtotekoDdQmSwsetfbw3jbC4bBzLQMER6GuEdb3n984ZnXBXCLdtjYAKznWBA9KuGa4kxkyZXdoaXwdh4ZS",
  "key30": "ZdaBCMKVyQm5QhPhFF7Tkntv3M8VadAYeYJTgUUqEGj9hCCsQwFtQDNHWyFrJPRLLbL7FKxpA3RyZh2XmHuAju3",
  "key31": "5wU6dDoq4VECnxQN5VhY2jm4b2KJ2c6q5jCCxBito3oNTg2gorVcJhxExWxiJT4jcjkRSV1JsBoHGou6GPKyvvpS",
  "key32": "59sYRiZvJdfTyMDpt4tRio4NG7GWKBJCcqF9frrCdcQWJzKwziSrp3WzpY3HWCe5yLsuNEvu975aXRwXd4rJWQuE",
  "key33": "2W2k8ku8rPfZ4a9qqmhGqYyipJLfQPcHyLVYBnxjyM16fspY8D7ottUhEGqEb97poJsyEvdFdCQKv9JgayoPawZP",
  "key34": "5k7k9m8i746g8WUFZNRGhoqxDH5km2hdEePQK1SzQCaMpps2kYK7Ssxcf87YEYXCJfdt1LJUCyHsmLBXdRbpVY1y",
  "key35": "2EaKeFUH4th4C5pNk5AYWb3FJQXzS4QjYFjgvNcrziHwPmKNR5K1CUzMC8yBEhcaFZp3mnEdErY7riJjuj6AzuSS",
  "key36": "3uV7iHcFuEqY8XEBMyh1KMWXXfduNiUZCxpTdTbrQG8vnihAKBiuRjqpT1dZ4aygBB5XpCNbDXfgectkTnx4g9GG",
  "key37": "4RKtirAdSr7GJHDeBcmFqsLkdoMze7J1T6RbDYnRaxqm7b6gzZfDDNgxNRo3yedbEqJbvWXXMtryWMmMSncpPnoe",
  "key38": "amPE6hB7L6SC98nvgCc9egbffb5CMgCVa4aLwhsMHzvsrRBThafBop8VGuz3C8QLuG35rfkYYu6z98iXBNd7ts7",
  "key39": "4sizJDeVbGDRnEbR3PUvkgnqgzsRyUmGWEx8u8k8aXPuPggaAtm3nddnT3YG5aMh9Dz9W9A73ebQ2xsxjz1qXs55",
  "key40": "22rv8L4VfwaiUwjaMkha91PKCjQe1epCgFrWjuuyBy5DMKCF9cyGp17ph4493p6jKuG5cuop3zCsUyAicyaXd3Dc",
  "key41": "44KRjpHf7LJ3cawSn9wNz61SsQYxkUJyVSCRv9NsV7XQRnzGFUBXMaJVVTHK1DG99HDcm4ckRBDmRWJkFKuX75Yw",
  "key42": "5RDL3iPWzt9bxr1mntmKLBxX1kViyakagKXrgx1wko6hFNnxfbGz4VUASHJYbrDULaGMq29KU7ZCeqAEdh1RoNA4",
  "key43": "52hM98sXVvNERJ98Gaym1Qz28W8Z5mygLn362fEsC7BuBYupgd922ff8fRK73z58YLmaitbvJ1GVfzVbSF6Z5QQ2",
  "key44": "5CHFVEXcoL59HAnxB3nEiqCa4aeLWRndHfNn7S6yVb7kAD5A5WENtYkj9rCiqpCJ2spP5DZ2FdxFxgwC9kQd3MiG",
  "key45": "4Zt1MzazP7YDfweScRWsoetJdun1ShffH95owqWs7CgYVjtQzpHWESUWBpHifqssBRfEMouKu6E1ds4tsSuSC8b3"
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
