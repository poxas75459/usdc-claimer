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
    "5rk3dvKQAovW3JiSLY17KUR6Rh5SC3TDAVSUNE5Kqswqc5YuNP5ZKwZHNpbskkTcLTPSouQXKABZL6XpJwnJ9RtM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vai3HSvfAH9AFsV8QQztc6z1Qi2YzLWfBj3X6irsL2SjnohBmdw6BU3pjVf7skGPi29zaTvwVsYEZf9tNTAkfn5",
  "key1": "UPfQHaLLkFsQU1Qw1NJeukqhQK6sATZriNNuZVnqLc571oEHYdeKQo6BcttP4c5WmDfhq2qHE5y4dQ1BNrm8T8M",
  "key2": "5tFWhdjRvtxPXgkABP1VRc3EVv8Gp38XSBs7D9L7KmCijbThpfjLoFD4URBHcSC5R6WM5EzZDsT3uokEGTXAe7c5",
  "key3": "2mb9wXrCdZPGPP6io4ZykmyqaGGfHoXXNNGQrNagB5Fj5M1GXM8VnLxvanREcE3d1SxojL6nxgVJK7HTfbGf2w9N",
  "key4": "4uRgef7hE8KnAYuF1Mvht376F8xTA2X9RzPh1XasUsoyYxDu17cgMvY5NxHJj6iK7RyazwYaJWbk3QCJLYuVLps7",
  "key5": "2u8Y4rJZ2nfQBiN9aB6eQp793qifYzAMijxtMoAvaxZNJJn1D7XUcbBuNzPo13M14yKEpB6NxrKgQnpiPYxGoNuG",
  "key6": "3Us1Ubq4b549fcsh4PTy8gKDu9gHhP6nnVUeqAVUjDKDzebT4curH9RDoJAS3vueCdme4A6wN171dHWcpYDR6uTH",
  "key7": "5VGnQkEKyXojNExEkvigPhRRSDoTg97aNXa9RAj3nSZL2DdpM1sxrEKAc9ePkxCrHSwKDuntnB6A3RpYDzHwFzC9",
  "key8": "5NvHPSCGZ9EgEzUEvHb6swfcYG7YiUTyhSU1sBpF556xb1R9ZmRZDgmaRoU6zZhFTdZsgTLZ4nefUcXhsFaZu6bK",
  "key9": "3FerSvpkFAYSUZJPyt8Z8BJ9kpeB9AWfDctPZPBQ8E4UgAFZQTQPvJU5SS9tMBmVEFQUvKkFUZAhDAmyqQC9nR4d",
  "key10": "5smYXiJSBTqAErAocLmdxuU8TbYb63CkzEYb3mZagVpTxtdBTKKtS4B3YWkbsuse7WpznuTNEPdGTiuALWN93ot6",
  "key11": "39upEmgmcWkSrxjxJJ3QTpjbN9N6PFjcjRrwmwt7LVsGcFarY4iAFaemC3jGDLZQ6q3vnup49fKJJuRUdMU85iMc",
  "key12": "9LxaiRVx1wUFMoqior7o7UMCwdTE1jEAnSJyAFpzYiguyLf51pVF9HrZZeBEgN1CcqvvE4gawJbRqh3HKCMhBw4",
  "key13": "VX9dBpVFwDGcoMPc6mABVPpN7bvPRQcPCmyHaxFpNrrgcob9dWzdqCtkNqrWRmGCYFcNAJbcREicd5Ww9GvvgFM",
  "key14": "5dARPC99kdkjJm2eGNKniUp3wnAxZ8r3Cgn3XLzDst9Cja6LLHua9uriZAGMcLUPt1ShJTjfVE2iJfZ7VEGANn5Y",
  "key15": "5UAAWZoZbGAoXqnmhhpbqxbEEWwgXzQERvrm2itoqMiENSdHYx2hGBorqL1t5wwQ7n6ZtCUPBgfdBXEiJVWHnXfF",
  "key16": "5koUZtAQCac5XC5DV4VxTh18SGoYUPJpmBAWMBL6qongmAevupVZKabLP2q2rqNgxgaGDid9YpLtfuVgDDTANfKU",
  "key17": "4ogpLaBPHFqq5JoAASnhBhk89gGBpw8FQYQhEPP79EswJCTk8qPsMFczMA1gvmoENvbn15H225JPd56mBgBt6frZ",
  "key18": "5MUvk1QCfUBGXGwJRoP2GsAC7cbg6y3y6p6oiCc3s8RuikrCu2RbfpVLu1DeSbXVqyia1n7SLPYMUmNBAimMjTjh",
  "key19": "5q633QyjEJ6KWgJcqrjtTg4AUAXUsP5541r1wXd5nSwYPevcnMZdVdXF22Bf6XEQKRnDbgbhTAVjR1Wm8J4wzi66",
  "key20": "4jseRGofQBr4VnG2NNjyY9MYy3EQ6D31y7iXtdfYRvhRVSTRL61j2qn1iWv8HqBEreTYxWzdhTUE1dNM1FJ4yg3m",
  "key21": "2fBaKoKgNjJMaYuPEGp43SZ1Zp3dSCg2YBeYGdN962ducQ6dcvsKams89Rg39A1pAaNeadjE6ykS8Gt2EMEgMPVY",
  "key22": "4pfJ5tpvnjG3RoNkTu7JrUQQXTogLw15N933REDzEz8X4HfUUGvgvrXnjjx7wPZ3mtaXE7tEwDGwWRb5R6FrYrZH",
  "key23": "3cogt63hBjntbKZp8TzPV4xie8Jtgjq3Gyi776HrQATgxUV9ADY1et4CFUscKdu7fqCeiDnmYBuGstxuPpxRNKSD",
  "key24": "37ZfxSNZL257Me8Xfu8e33yeUAweqGf6rwxv6UtgJWKepZSYfHkgxpR7WbYywKUjb9i5CLyVfNVuBtj4JcqZJrMa",
  "key25": "5ZeqWRnL4BpFCM8pLuVsvqgXo89hfzDh3mS3P57U7BdhFvV8ki4wn2LucQib9XBd7zmXuwxZqU5VCBb2khQXHnBt",
  "key26": "59jb1ekXhQmUYBzYfpQiqutmfbZf2GA2ZLwauY5vp2tue7JwhiYBTF7zGMZMY8suRdiGALFBkyCmCAUxyxyMhF89",
  "key27": "31MMY5kn19LEKwEQ2fNDRM7Xx69HGcikKoQMLZKbrVTXxw8W5WFrDodJxYCtxHYHDYXYKts7Zf64ito1DUnqoEPx",
  "key28": "2NZo7xsQpkapzmPyWBc3UUSefXDs9swuZa4VJHaKfmbfjLGshJ4FaaP9GrgrX1kA2spADzhATJBaqj7q7Zrt4PRe",
  "key29": "sdoNxvSEnUDxmv4pjZdcQvNadrPAZuXoT3kwYqyyQ4SkfPVe2ExpJsaEGNJzVPdGEYvB8ypJ3U3REWYRoQA7PsV",
  "key30": "5WEZd2uRL4L8vxwvbSsyc3aBh51cnjp5G4bdTWvndzkm8AC8r4b4we31ErfsKF2TpZmz8uMKqdppc5iCQf8HGsGN",
  "key31": "aQpqUpaJSeTNm1crTgtUKZQzqcZyqnjjwto21WEb3mcDbrz9qYDUkwN2CK7gGZdAX33Vokd2QTDY9HJZmp6skY4",
  "key32": "48mnBgfAGxuRrZhagr2rgds9MkBUZQwdZGWiBAdnDsrEroSJtwMfp2Q3E9gZSh2axzojkptXRLksm8HD6Ps9A5kd",
  "key33": "NquvosDBvCkpcodibGayReUq2fZr4LFgWRaVP2N2mJ25ppyBDrwqjNPhEqDdvZmhxwkMdLPo7yNTcNo2rL2k7hC"
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
