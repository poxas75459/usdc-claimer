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
    "2wrr2C9NEGg7cMMLmMi1VCd3kt1LUks3UwxMrQDq2fRR3Xtb9q5YAiQ4NzqCwDxihZ4eyv31XA1RE1sLbRNptD9f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3z7NYQRfnuNJSf6zfx7CN43GA2xcBwP2AXuEAeJDmmpH9exy5sFj73Pc5RmNCW3LxoiZzTBkU8neVXBMH7pgTpfr",
  "key1": "5ZVtd8xdesoumzrD1UTYEi1cR7sPDyhfup5G7AwsFXnDhrJhqmtsdMT427KcwZBDPrQtrcJtMpnN75GBYnaZBwzM",
  "key2": "4pZdq3jTe1VcVAB8AgRAFRGYE4Gb8jR9GLBR9S57jTiUTpYxpqXe8wgpzQWS6sdogyR38LjWZPu8Jn48qTHpS9BM",
  "key3": "45CVLt6o634KHEJiarHpBMQXXBHQWGV6ZJhAwcVbqK5GyScmH3qagMLcSR1mcm4AsME4QF1tB82P41zDhD5WXX1E",
  "key4": "2THNd96KTzZgrvicGqzDdbvCPaH6n5UETEnWQPFBeeqSRGMiGyuPLx9s2NLUQhMwV9Dg4APkmCM2dsf4MN2PVKKL",
  "key5": "4WV1ozJmZeQtjzVZdoLFsG87Sw7PKYWRqMYVRjQsY4LWtmaWmpxKZrj9i2qkWZJ5XGvQEXtcyacgKq6SD1RHHnEF",
  "key6": "3LdhEffNQbvs7RK8GQPsnRvpdtESQig5b1XVaHMizHYMgxt7uPzjNwBxZZNSCpa6ecJFSuKW7pX6BrtofwiBgq9X",
  "key7": "xD67A3oR2NHBwnDEsH52qEitzQQtEDGvi7rA5hRxCi28gQNNwkJcmLYRLGf1pAzEQPBAZ6nhebPZhsFK1S3mqC1",
  "key8": "2zWzRZnVzyhYrac8vZc7jF86Wyrj5rvUFwM4x2aTTATLyYVNaYoe5YAKxnLo6o6GpHDE7LhkHEJPkxbDKXTJVLFs",
  "key9": "4fogKBc6Qxt5GQwrNT8uFWYbXNG7ndhHLqcweyuxGzaVKcYmApJ3QZGLCSLgShsNtG4GTexsDG2hfVkacf4jyXGw",
  "key10": "jEC9sKM43yfPyQgq8RBYhU9CiKj53QMS9gLRKHHnbBejXQhsDD7d2pJiyW4mpXWtw84bb8UmfgcEh5LHSFkXJVS",
  "key11": "32oMhHbErarQUCt5JXuLchW4PfYSEVYH65fjwH64YBo3bEDYkQvVXUoRz3GpD3kBb45SJH8UvKndNN1q1afqN3CA",
  "key12": "644UTQyCNDXveheqR4ZCtQu7wfhQtGJXdJHNHgWPreYqmPY6QRTY9rQY3QQjvtGsaPFqPss8c7wJEUQwcoWt1TKL",
  "key13": "WF49b1heGdQfbipGsYqXYHh6Ti3T83c85g8bSjG7Yttn2J9yKSHMbFbpkq92z2ZXNm1e3U8hg2wb4s9m5SpBqrx",
  "key14": "4eGbtg5nJrSqyPDdPBtpA4b55eeTgNes5pRrhH729qE176j5Bed4LDcZgb6YcCQMYyKxsvCPzQZaW9vqn2y6VrBW",
  "key15": "ez1SQEbCbSFeRSHf8nW6dXg1YUErj8Uh9SmYDr5XFsjLDmyHCzyQBwxjMmLT6bgKwHtJafzV3BQLQMFRLD4J7yi",
  "key16": "2Xj5vFs47ZWEemkixXzbNAWV4GBzepCwCFvrRRYpXBD8wcFuHV7gYLbcGyCp9P4ghUDMfdaXh3dUgwU2oUufZh7q",
  "key17": "4YaxBQbiCMLLWLQdTwkQLjj4zZDEqcx1bhY6CapXdwkMQpuQk2jVQtqfpYGAxFHinXEQ6fCjUxSrUcbc3jVqsKd5",
  "key18": "2cbFyGPr8p67GQLnCzgVNEpdGhMDwXvLxABof1tWRpJwcmJnwmzYGbMdtswEGbALtbxSzfv93otZVoMsR98RpQzL",
  "key19": "3nrYPEB8CDKouMckbZSs2aEUpeiftDnwFqjNjHNa5ahKaQsEjsByGPnLTar7C8MF9HP5RYprKWkZXzA2b4VDLwUS",
  "key20": "15Y1TjuydfyfLnYySosBSFikVjxd8XEffeNpBWxY1wxmMKf3UpkdcZPDThUWxKuKzdzo1SwYGc1G4Wrjyp1pBVt",
  "key21": "5cRaZYxkeg4LBp4cw7uutbAmpho4Adkb5am4BjFLg48cjXmxy9fb9VSD9FKHqmDKqhqqjBJNsEtp86wCWpJ7pfgC",
  "key22": "ezwtXuP2sWSD9yE2eak33qBP1xtkTBcYen6qhQ3QUZzNg8GkkqNcUC2t4goyMC7TG7psBYw4Pw2qKR72T41GoDu",
  "key23": "9vSWZ4fygNBAv8HqctdgdkrYWn2pWKGUhRoRavnXAM5teWTMnYAitebesAQQZsNnLK7TzJhCjh7ysnbkfkaLVaa",
  "key24": "3ga46u91vVi9GjjbCn9Ecx6RoXSX2fdwFyDSqoMx7bJPXbo8vw1FMeteZT5Vh57J8czt5KYCzGPfyncPazTQxUnG",
  "key25": "PR644kyMQLms38M9pDr6ym6pr33F1Ng4G3mywEffJFjQArEa562Nv7GjmDsboF45hxUgpoZZcHTSVC21VGWeYHV",
  "key26": "5Ls1HDcspMTgvexxhoJCYeyL9T4wtdmG8bfQmw9wB22eabVhhqqnefqFxjG4LuaPC9tr747gT9fFiUT8jyo4LTG2",
  "key27": "2PuuCTnBN7iMV5z7uVz3ZHhNopwG3rpkR5uJuN9ssCTQ7h9LssPpBscFxXxjuT95YDAzeyG8GFdTV95Z8Q8WT25G",
  "key28": "4GaLbtvGxyoJjRbSABQPTpLLwKoKn4yLLuCq3ULupFt48W6YGmQMep5qUFuvf6pvxmRNMN8iZhXiETsTxMjmYepd",
  "key29": "YMSHGbzNoVapYHTesUpiU7LNTqr2aU8vRWxEVHjQxDSxdhvaLbErWGVVLuYkLusBmenBbNYWuA1SbgrkRNG9sPu",
  "key30": "4zFDsDdZ2b6Rek1QjWS6HLGtFd9NMjrX5mrWXFAzd3rE1ttANiuHZVFUECvX3RQLX1ojX4UTYBsFCmezxaJDuTpo",
  "key31": "2VbEwxu7V2CnCNVurNAtJ5a9K9VhFe4Ddb3xN8z2C4DnHxsPQqHt7WPihwi3BZvmQQSxV2XqcwjVVpTe6yb3czSo",
  "key32": "2fYHE1FHBaKCHDLhE3QVhAqzyjLXiS3mF6XMMBPLELVrFX81Nq2c9FEFxBAdR9b7ob3UUMkEZZjHRrKJ22vk6iuM",
  "key33": "2bXj4mbd3kgrZWgZ9jxeNnMCvqJcBfRbh13myGmkiRqFuQ6oxvpXZyDUYKJiBXhur9dyQBeW6dNXw7UC51HGmhD1",
  "key34": "4qZgKJouqsZCdZSMTkdto8dh9Mio8hSuVeSUujSGBfwmyPRg8wxYLgLwp2v27z7L16RDDzYCaRCMdkZQoW6iAKyH",
  "key35": "5ZoYWCrYfXQRayf7B4XeXftrfA9riqzXcfR577hx7uS8taov6L2Axicc5VNRm5Q56f48n4LGWdJ28sKktLMbVjkV",
  "key36": "4HDQKKSQCizkMPjUqNjM7YwdbQYw7wfQMauBXcP3jPDuQeJGv7xGeWU7tD6LkCcooE9todVigekvhUN71P2rm73t",
  "key37": "h8NJM5G7ZRYd4Hu6rgaYVZcv43WAMCZLPCkFuRPD3WkKvSsMxYXjivsqAnM9Zn5dyCWYWxPf4Q62BrFoBbzpFpS",
  "key38": "3YrxSoCi9CnuHS38mMcTuwwpLE6dJHkfPttFJuob3o1m9fKuy2RkJszdwg9RWEfKax4VQFg4xL2LHnZewgGFEW9i",
  "key39": "3cydvBuQZuSm9muca455N9mjSYXL5j3rfkFmPBwpRwrf2xB3638ebaPrAUrYxNNFRMwXjFCBgGBj6VeU4taNiPV6",
  "key40": "5Kh2tyumQ9vXChosprwonDT7KRcmpnEA9zUzkRJJXaqrVGMZSAnRx16PcAyig7vQRnAEeYLZefL9Cqn7o686ceSW",
  "key41": "1U4sw63obeno4H7nmYJBKrxH3uij9mALReW2vKJj1c7dubCbdxRfghgNy7RDKaWt44rGwJcQzUzdrRoCqEtkz4i",
  "key42": "3cMzxXZ1f6xpwZZKBHp5E342atoyNEs5RZmfFMbzPBSc6H9v4egSZgeQM28bqFNFrzUcWDJow3cNwm1JJrv8L6aQ",
  "key43": "Ff7Hb46Tm3mxS51XVHMGckf3KFTdfKFXB5Ad1ciRMukAref9uWNxvhfb6AXXuUyVxkadyQSe1kpNFLXXTVbFsyQ",
  "key44": "5b9ZCDt89xAL9mJHdLeRUCsqkDwHt7GiEf1wsSqaWLAFYDCDbu4sHY6R4e26pJ4hz5P2t88rPDjA3cMbUD2Pk8b7"
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
