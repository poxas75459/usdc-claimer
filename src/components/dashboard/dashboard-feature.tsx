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
    "5q6shiT4Awf3P2vRSdP993MW5C8337NzN2GTotcFnS3W3vgNVqtg7kBiGXLevNakJSs7jMqN9EZa4ZY7XwFnMQcj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4myxTvwmE63uPwf4N82XipbEWgtbHEaYrpGVHVGQQUig4SSdmSKzm3W2q3Ptf4cgWszfZhQSFyBhiTrhDYo6qSpt",
  "key1": "owLHtQSkVkFvtUM4jg5iGmcAxiLbg4FAWTdBGiBmaog1hwd4gC8vFSUiEkR9Bjsi51CsLBB4F5UHFN2SuKwRoDX",
  "key2": "3iPEQ6YSzHWvAu1vxMPiJgUPXDAfSD8tdBTto9WskaKv7tEwZWSzHjhyxzkdNJXjjmkfVQ1hjaCnCaDE8XGdXh8p",
  "key3": "35kR8HaiU1mn7ATWKnCmDFQdSKCwaMrabLoHcbLLoXh1RYNojHapJLQgxdHu1gWBGv4EqKg92hTuaD7CgyVf1DkS",
  "key4": "QiNkc4L6oLASzm5uvwcfkuMwmdNidzuttyo8Bu4hckKnQQk3RUbfeW99EJNX1aHDYgN7sdXzJ4q83BUV7cU4tCc",
  "key5": "39AQ7nhq3RGY7wcYbP2i73g42uWYHmXceAVtExHcneZg1x85fJ6rQJNawFRfo8VXzk4A9ASFjMyei4ziM4b5DAv2",
  "key6": "2k5SsyvrayFSkBtmL2rWV6KGuLvuKwZu14z32QnAgD6YvK2Qvx8NA8pCWuRuoeHM5Sp7rVSgJJnnxPmfGJxQUfZr",
  "key7": "voirFB2pDTxF7JPaRYTnzkvFdWoKVfjSMugZ8UXAhQevACFa3sP2vNreyarh9xh5YSnhuicmA2GymwcAiy3jCWe",
  "key8": "RmPjw2ibYi9e43cgS5sVEQX9pcj8BYqGrdwD8C4ddPHfEf9LDd6VbavyrtojKBdCDyWkvTcUEnk4M4cWbfZQith",
  "key9": "b82VQ2bEkX6QC2gvn92TFyLE9dQ9FfNHRPF73NtkwP4WMGuD8yyJRKLCX53xjJnrQxbBwHNHytQcYG3MpMyv5X1",
  "key10": "3LRSqLp5asifTtz6ur1EpuhnbYy7cpFwonpJ7BabkCLAu8H9XPaMxGRL5YCtQKd3Dv83LF77ZsvF92GifgFyJdNf",
  "key11": "57KLUzmysx2RkBTq97PuadceWDLXetFM2gvabGydGfUqj7ybzwzMQmmrXLHbWX7CRiSDvYLZhZG7iZPN6WBk1cwZ",
  "key12": "5Jp3yNNEhssPC2PYXT9V6gnFeZ844XwQ2RZLKiCxqAv23HRGjSaYm77okjmPZHxTEX5tkbiy4FcgBFpM6Pms7pfX",
  "key13": "5B2zsqtnHYGjuoFcQ4oBk9oRF8oc5YUsiokYbA5eFkz2VRc7Y9d9uWr8ygVKHXjXqUVQ4wEgAET6mQRySo1bEm72",
  "key14": "5SPJTcJAv1LaLyqpXyxNzEhwKEANt8T1wNShH5HJNPirCf3HqytcNzWbuHdXhzygMp6sgd7DwoRHGKkHRBjcugkh",
  "key15": "oFKFvPLQFrUprAmgz6Esz5483rn9dyLdQENcTm37C7MSrMuibnnf7qYkLxU3mnuEACvpCe5zwLgTvmLhxiNRyNQ",
  "key16": "2ZN5QcWX2Y3vbqJEtnFkWE8vtZFCS4SRqSvG9k1RazYLp9fC5DSQXg7t8QFFUje67cb7Bk9MPX1eRbeDK2Sr3TG8",
  "key17": "3gPyBkaxp86b32VcajozfQwRwKCnNHLMhxSNsA9qPQDbxAseq1vrc2T73KYgv3Cn9NNaqtuTr5vKSsqydsWrWrTX",
  "key18": "2zi9XGxE4LFUD99jmpZKW6MmR8Zy7EsfNZQSUWg53k3HCk2YGQRAGEMPcXUwNzuKFUCsZ1U4qp3zjqJsY3tixKHU",
  "key19": "az6trdV7dsarPZnJfX4cXHxrjRBXbQGzP4CeRVN5hQUf6SmkjSjamGTy9w5EVWyajVYS13uVxmL4Uw3Mut2WzXM",
  "key20": "5G7NpBUBnmvLuxBZNP7gDqYA91f9BpGCiMYAxNtNouyiTHNBw9mwNKDVGiRp5uRb9gR5GPDgd8c59LkjVhkxd4Pa",
  "key21": "4z5LirKmveR1ioFiBZk71StRmFrWu4JEdtmBa4n4ohqD5HnbGtuFXTLfrf2ywHcMmkj3nJNmWnM9KAa1vbXHv1Sw",
  "key22": "a5WCMy7TMQd4Myf1h89gGV5ahizgQBa4q8Jzv2tUMYiK7Kxo6ge1RbueQ1SsWhsBdKGUWnynwYhdyLw3YuDMC6f",
  "key23": "inmRp33QNGa1KmTg6AxgjL2dhhT8eiKkGjEs3bVvRbKsY4vZUnKH2QnAcLkVKFUteLgG5V7LENzsvCHn9HazfEM",
  "key24": "7ssZYSJFqehueHKrY8bVihUkgyc5cY68nbrUn1XDL6JcJ16mVzxWiStceMh6KDp29sVdLVZs16cN1MSroYGzoNf",
  "key25": "5RiDu7yn4U3vPo9yjM6uNTBBG3RM2XaZS6ix2HzcUbmPWX68LaRw9YoHGjiF2MXUTazbNrcbowFrvSj2mk1Zwa6y",
  "key26": "2xYRGCp27aKNzqPzt8M8zz1JgY1kkeMLDeEGadPWNsFdU4TtdBxF1Rf1vRSJfqVoEwckvxeWBUwsEM3XqegNCcKv",
  "key27": "36QS56CV89YseYw8aF4m27qkTTEdipidWVcaomoEng8KaozX3m75KRxX586r5oaMvkGRCF8S4zpg9LhzyipSVUY6",
  "key28": "JXwvXwZVWzzSomC5VuAJPX5MahJ4aua6Bfkcvw35cTwgjdpdA6eqztnwkodfnNFFG9eoDHdhMK2coponT9bvELs",
  "key29": "UA7grdduKHn1wzH3rqPmvQ1eGecHk1qwyXv1gR5nxekG2smo9GBXemG9Ktx9uUsAQFe6oaVSpCMLm3PiGwtHN2S",
  "key30": "UjN2JVc2KKCwYhZjooAkgJM3p71uyPEWjqa9xN1P2HXHdPHiuJ6Cgp6BW6gLj3CUK4R8rGVGYxnGSJ2kMXXJgYd",
  "key31": "egdwL7FAA1euUJfSiTdmVWWFECW7Nouqr2DwLCRVbpkeLXPHTLmeH41ooyyQsSPGLKL2X4Nf76JFcdxw7vrfJsq",
  "key32": "5gZ7hmXp7RWNdP93HVMUXzkpC2APxzUjJRD2H8m3rjdVzFSCwHdLFRu6MMa8WHDzXp85CjHWqQvSX9ZhNHTinMvE",
  "key33": "5bbXNnRMcSg4WCXutTe8Mi5P74xE2Ehzi2PmTDW4ybTxrK8Ek4xEFazzEpAdXB1VLqEDHrjeUo25qPBHn3Lsu31P",
  "key34": "vFW7MQbYRm8hwLB7zeGUciwAJ5od9UTKJW3zJ57dAa8MwicdhhdtFgrEty1i4La3orvmS1J2QCcNv3LU8STWDX3",
  "key35": "3379vbnhnMFpF6bPh1xGMD3bVYC7uEo3DnicJcVZjbKK4LUamsKQpYbDctqC3SdJ11v8ygwvh8EhwqfR6ZW7h5YS",
  "key36": "4AhLzFZ1fSJxxPE37qMT2vLqHsgpfbqcwvZsRHiQwYJpf4SvU4Cc6Eb8ngTqpYd6qstFSVv7MTGU6dgLVoraeKjE",
  "key37": "3VikZ9wjDxwoPh79Ngf48VL8zmGeNeu6obgutdgbQSYqByN4BatywF5VHDQaGbWVH2d8WzNnAKtkKP65sC4AGopN",
  "key38": "j67Khc7hjEc4gXuqHdcEF1aDKk9TDQ8i23zu1i2UgK2oZeCK2oYDQryfSiFxwmJeZD3psC3oDLe9hRAaZphS8Hb"
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
