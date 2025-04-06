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
    "21WCd8dxGtLSQmTQFasZdR5wrjXrx1hm5A1RfzHvWrfcLknrQwp1rAbSBnsegrZtRbSiYJ5WjhYkgFPpsByqgw3c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "531W6ySfNWzqj61X6EEaXWpN1h6DtmdxE1MLMa5KhGJH7u1HMdctLyyRU7fcCvxD2ouwxgzE12Q6TVBt4ZEoKozv",
  "key1": "1PonQaP1VNxsgz4Gz5WpWtZkpRYUDdFXvHDUQyuRYq23dan62Y8amhMUKzWWbLVunsesjQ4LcApDE6qi7oJLYik",
  "key2": "2d5LDurjErJqYQvtSfgYX3JkFHJGxrsXUAJsTixHoWiXRqo5oHyxucWX7FmAdV5j6y3osbyg6pG2nggLJcgvd72f",
  "key3": "2hkxFSfKQhjZsG9mhdPiTeUBRUZ2yD8P6xpBbPMZfyFVvzxGMxpXYuioxGKEDNPxVMk5sffeAJq2xXvZP8R7jj9m",
  "key4": "4AfM25Ss9qEV9XU5KUNZsFHdmQUXw4yK2jt9tbJe6X5m2GJ1NTQVHm5Uaz9THbuzTRfh6KK4yNXuMMVuLDRG59ks",
  "key5": "675dJsGsudHnTPSsjLhCq2tbL2abMKpx13qdj3XZvccUnoZ8JmRK7GXHVtch9eB4unKtyV6jeEk5EFEbGhQ1DpyN",
  "key6": "2jKH3TLVrsBhDWQ4z11Y9fxG9wZ1CChjcKjKe6JEpeFubFP7B4U7hehPGsiuBw2FbtAPkgu2oMffdctWu6VZy8fD",
  "key7": "NsBpiNeRMofqtz8xwye781fe7SbeUfXzD3Ldww3xnWQRibDFvej36WdzRj5dtG9PAkDNzQVji76co66iBuZn1GU",
  "key8": "4XEgVi1DJrSe7M8tfLRmwLmz21wS9BJVAsv99CCwB2vabz8udVbkv3CfjkFbX2zSxnSKDu5TydnJ1Z8xrt9bHpbx",
  "key9": "5UtsRW8xoZtqh3He1DnZtpykMMkQXZQvyx2SCyg3trd4JfMaL2Q4KkNyw7Af6udv8MzY3i7LE6AHTnTP4KeARcar",
  "key10": "4AJSgezzUiXPAcBVwoyMeFXC8J74CVrHosKVSfL4tcCufasLr4jvF2gGeM11q7Yq2DNSopNLk1kv4V5uzHDvFR9W",
  "key11": "5JBHNZx3rz99DsMZ6ynHgSn3XGpYhvcdzdDW3cgyNUwv1zVKxcmiGLBZuSUSRFZT8gPW7CokRi68te3qg7n52MEJ",
  "key12": "5fRy8Nk2emCUn8zNTyE1b3YqM62Bn7PyFvKs17WcRqDCd2Q1L8A8o6sNbEZHnNHtj7SwGRmKDcvPR8FYG4CHM81k",
  "key13": "4oVuLamJqRCffKWbo4qkP1QoV2aeZUpTVkHebMxycGF7X7h2Ed2tBv7tH6kPzGWB2YMABGVaNih23xrPEkgEN3Vx",
  "key14": "m25FCdNYtEkg7PTdjUcKtAdMdguiSUTmyEvXiyvRtJCWgbMAtipKwFah7FkTqk1cPU1bCsZd5knoEEJPF1REjZH",
  "key15": "3CUgFFPZVCcGRF2Q7g4rsPxZmeKMskfLZrD2CiGBqisvQYLSTzrJ8itR9xRQ13ZuJsFeLSP29o582kVgBVqr8WtJ",
  "key16": "374RqT9tPWHSVE2yqSxUCGdoJkr65eK8shRqFraqB5UtpkQXdqAqwpVWZ7eeSFwSjW87pbvoFqF651U3wFjtZEsG",
  "key17": "5vMfBPuRMS35UHat74kwssg64wcfb3k1bGFeTU2aQsCiLUmT9Hqh4okh9fQWn8tFMgnumWJd1LuBDf326hh8zaLq",
  "key18": "41PTGT7RWrQTCSeRd2TVwBNvYXZwRkjZ6ZXRQmCKswj6J1gR6r9WrMqXdeZsBduUda6T8cvx6jPkGBpRh5CkrAPF",
  "key19": "dSvwo4nNX6R9bCTSj4zhfVdno789mGePESnKcAoUCRAyVpfEVXFw5y6p4pEkuyqYPDLP7zRZVBEGDvbcyB5KR1A",
  "key20": "2eD13Q2zgTCKn41nSUWy9GSURut3WqRTuZDGLzqwSmDLfJV3wdGU5jSWSyL2F9BcVymyManp2HNPc4XS78E1fMu3",
  "key21": "3Dw2AvtfDWQYDW2ELA4vp9Zvp2Y6nBkwkBcbWJ9EQsHUeT8xjVAWkWHNotD6hGZ8WtWTg3fTGAeYagQnxMRKccu8",
  "key22": "2GNE2fvQTDvovzrziZbKx144McREp4U7XtjBxhNz2NFyMUCRbEaBRptCfWFMLsHfm11RWXJDuZo3rNcS5YJ5Tnfy",
  "key23": "26nDNZPTyTBsD73QTZiUwSp6k61mK38XNfxUNChKu6kXyQNQx4MQTrnsugKqsfujh7XMKmqQjRB9LvE9Krp9mdir",
  "key24": "5qTKrQBQSPEa86CqtmijmerKPh3VA9L5AFVaP83FVpq3sGK9D2UtMszvf3C6Zb5Z1GcmLc5w2cpH2n7K6p4AFcKK",
  "key25": "48uysR3XgPCu1jm88mgkAdfxgxgsSrCfjsXygLxD5KmbMWejka5k8E4FU3mk9zXvm6KPL9EscL2khSfH8DHY7Wsw",
  "key26": "3QRi2j29nqu1kfYWG46d2pDAXMJWZ7dTNWQchE6Z6aHLCMighCCyXQ9x1fWQSYPufVrYuFiWL3uJoxFEJuu9Ve5J",
  "key27": "YXY8D6bc2iK5hAXa6GasoR46pJXb8jmmreTihjdLYCmKDPCebFNV7g7efKgZGwXU7J48Cnt5WPEW8NTQ9GNXi57",
  "key28": "3d4EYKESoa69sd8aiaNuxu9co9vfw1ejYqstroexr8vJdcv2xT1cLtnNoxkf6sU7z1bS8u8XK45VrcVDWfZaz5VN",
  "key29": "hMznUvkCHE7BpTfRo7T1mRi77Azacs9UZSymovNnb9wnzoh1d71uKKM5uRcsuEGr7u1TqZQdcHoCQBAURnQr7Jz",
  "key30": "CBXXo3muZQc45jbfr9bC7hRJKZa9jyVH4L7iYPQKQbTEf5rQgNvCK2EZCGzEtFxcgAcDphUcdokV2guUd9z3hxs",
  "key31": "58JoN7R4azhXNqavaJmXU5qiJrNK3RPZN4hSAhaMa9ndrXHmgJ5xM9K7Uwfix2oAA1EBJducwZSthAD8h7yL7Gx7",
  "key32": "4v6ckg7RD38NmBKdDSMDwCTgPkRzFsY4PD7jSnea4wjdkTXtbi3pFBJG6zKbbeAYFaVbVLdmvnmDpcYQNqQcxXZf",
  "key33": "svnimm1Ugu5BfCG11YE894CXqQ36E8s6oTGZqzy5xhCd8yjYCvLssReY1Efhw2ViSRK2T8bgwQ8Z5iJ7ppSGncZ",
  "key34": "5khWedWD7uKZ9C84yeonqrJJRNWjwssfWwUATeLDKTw4qo72UazS2cfve6rUhrzo83sQHTLrAZHjZ8SpHXC7w68k",
  "key35": "4v9UxgP9VLzh8PxRdy88BRbdM3E7RmBbhA7DbUStCVmYtgPj4DXh433gpu7NUEN3ZBijG2kw127g8koFcAhNp66L",
  "key36": "55S61a1WJNR2BcCdRV2eja2zj1dDFREK42nJnb1ig4VjQPkxpxUevCpqE45VnXprUZWFnNp9HTpViCcxQbNJftEz",
  "key37": "2T8p4cyEgx6j7n1CoeDo49sKwrgRFyZVLPD5xPUUuoRBLxVMJhV7cRSfQ6KUd6ZCNHZczRxfTtSuME4xbF3xGs1K",
  "key38": "4pgYqeGDsPhJCRLCGFVMDMsNknFP5EW4ExWRbtukGU1ArAKJDsEe9R2PCTyYu7QgqcLzjug79Ve2NA18ggaV9Wzd",
  "key39": "3nK5o93xqCecGdLC6h4qUeMmtsqFZEEVgm6dtSLaYbcUkC6rXB9qvdPMH3DHJfw81jL4CWZC7TCZW5uuWSqdHGDY",
  "key40": "fJ3xeYrJYzasJbSw5WFJX5i6EZM5bXTg3C4dLnwaRyZEBCVuAM8LJ8vhfmBy3bxPNAxE5FW5MZyDDgC49qeaiFK",
  "key41": "5AgLa7H7V8Kn43S6QXbtbX26uqWJhAZZyP4Rwv6ZsQzFugLJuoZ2mt31gfNXGW2dNC5zYm22ErrBgtRTAHaVywoc",
  "key42": "46fDp1qZQaVkfA9eRjmZ96TkhBWmDG7ruFKqFtwMYuyfyvMKcm4FJrz3u64UZz6yWUk3mdDDzdkTpbAs5qe5M3rR",
  "key43": "3EDcbsbEA5XUb5yG8udvarFEtdVjV8erSGTK8aqqTxTK8VdWs4Faybe3GbP5xW3YGK8dXY9AmBBwn78KckX4LFZh"
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
