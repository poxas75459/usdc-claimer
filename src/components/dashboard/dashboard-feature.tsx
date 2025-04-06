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
    "5U3KyAyLDgoNQFeAsBPZu3WdziNkV6Hqo71c5rpygSvLT8DAbz41ck1vFwj4GN4u4rfn9XwXjg3dbSfaiVKyaKrF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dWXZ94r1vTmc4dWLkqWhLkLerW1HHAbokxoBbQUqzYWkFdJnCzW9sFzQ8p5vu84rqJNdV8WQrw6B9sFaXv3mnKk",
  "key1": "4MKQDyVgmhQNpoPxNumV6GDVmuTSCxy4BCXJVGYqcFohX5JNAMZuo8n6ZpfZbRRtXonHPhuMGds2cuYXXJuSm8GC",
  "key2": "4TLm32kxufP2pfbA9ej7ayqJPVdtwj3MZ1Kdg6FVSoVMvW2W3WZCbCkc2S8q9S29CETsSeeJdAc1DRpNvw6WXSda",
  "key3": "54M17PvESJbXBP8TJ2pYjxbGXoYLjWb766qpyDNPqaqBoQ4NQRjRe59iG11s2WCG879AtDT1AK6Km4F7JgHBKNo6",
  "key4": "xEtv3bk1rHkpYUUvX7vN6mVXnd5555rXhah4rZb5KYA9EJNRBxHFZuQ5QrWRYwTK7DwvzSQt5LCmC7LeidLWohd",
  "key5": "2zdgTqhfz1vPPQf71qaXDTPayiKxtS1shDFTBba7zF5KTSkaNbDEnzKYod8oA3JRZ699mmpt199KJjBBCGy73THX",
  "key6": "2qLSTgn4cMR6RkG3HbnRwEdqXE6yndYPoEbN6bDyLZqXs84iFWvwdaPZo83E96kVmVUfdSTCuxjyALXsSamjFD44",
  "key7": "21rz2Wzeo1PWd2Dpsnxf857BTLPAZosCbNBAn4jrG9LbGR6J7Y49v2Kg1KJXf1FSxCjHK4GY4ig9xPGpuzXaJSLS",
  "key8": "27BnLf4sFBHcAnnVvv6Hr3g6fzjnCtGUMF8R9gco59rAjj2Wmzjoko9wTPccuzvqDHjn687Cd3rMZudUX1PUVfov",
  "key9": "3Bwm8xCEbVugEU7Pz91jacCL68G7LVXPiFW368Z1A3ZoMPeaaUbkEDJ5NvaRVzsbtLJbTAxbyVK36rytVpXHp84u",
  "key10": "2pKcgC365YUx5zpQbMdGWTk9HzewGzLyTPJnL91SpRDR25H1oopA6hS2PTcZw5Aoo2YAS1wPByUhkVrLXJyVpGCf",
  "key11": "Sen8PkMEp7rMSvmn399ovtVLDoPSQNAr5r3zz95hH6bPgKkVgoJk2vNUQDjwrnuNFzRvo31mr6ehS4sWm1C2vQX",
  "key12": "butSS2vtgwxfgonsbwWrMmUSqetirzaA15Bxp7A4JqvoiW5V3vSmWFd1VQLnVCpaSTVCFLsbeYUkuUXHERws2Dp",
  "key13": "2tvdtrokFR1p2RiTWNdGLJ9Eynu8gFX6TuB9G49Xige3mXxyi3pA9deMBYStb6VrVF6aGXjDHRAH17V6FHshsD8Q",
  "key14": "34uSBdkRsptCNPRg2uysz6oebyDThvGaKEpt9hJxUKf62cNTXk3GdtWfF2J7eLPxYG5U16DGYqtTss9b1NucTB1h",
  "key15": "4cfBRFTNFaV8ZU86w42RLztiiZtVEg42DNF4PfwkMs9Ck12mt2VU8yd2KV5un5T1vkooa3h4ocffAuGviFL8s2jc",
  "key16": "2XKSTGPDJTuoUvGi2pJ8b9EjKNyh9rGerPnTCbnsJ6qEk6PEYZLN8yh8JY9i9iXRQLYghknLyp5Q7ERt53K4QQVf",
  "key17": "3i7jXWkeWckrhkX9pXiTxd4JwKmk8Mg2kLHw6dy3T9yJaC1wgxt4g6cQuzjXsYnc2WmFJb2xHMU9zEBotjumqz1f",
  "key18": "3fa8A4a2o3G7FPt3EfP9BmS3KUvGc8E1e2eUHrEG2ngtuLeHfYouiFHQNacaixL7nYxfcpk8eH4Xejih9zmWmNgz",
  "key19": "4uSXy7kQkUsdQfmBK4bhEAFJF6FSHrAuwCFj2jxQr6dTUzuoPcB5WxqwC2wghxnnvQtu8B3LtNTXeizSNbs153AF",
  "key20": "41ak2DRiRVNhLT7KFTxbiYSCxCtg1tzWed5wxPU5hoh37rrP9hRzoDNUY1g4Qo9dXsbrdLLCaoAYsj8tPkEPYbRA",
  "key21": "4Q3mobN3QqZ2LZBMmvCgu5dSQgxATPEU4wqTJwymQF1L99APfRNCE6t2kTT8Z9BCBJuF8bUo5zvBqRnQYFWPXpje",
  "key22": "2z4v9oG9QoFGzMaDEhQNUMohHcWYSD8uEDWMJqKF7J2tKFprcv878VD6pr8nesCecQ8gv46ovmfzzw9rPCk7N62t",
  "key23": "43PHsGhAHDSZsecdWHg2KZ4ST6rudN9MpZfHXyw4Suj8gw6jRM2iaWUUDxJQEJEWfu5ByCGteYiG95ou48MHX4t3",
  "key24": "3xfFYrG1WxqyL3TT9hoeqYBkcWVySTCeAMQVhEtThFYbvn3fF38PoQKcvmj25oE5M3xSFQgUQ1bXT963F2qPepSR",
  "key25": "2fDV2dzGz1HtZ82nvST8QtRe7J4wzPf1euxuFR2qu6A5TD8ix9qEKRp2vbKtoKU7SS7D86nkMTXriythXYkEAen8",
  "key26": "6CuQTGQ4m797iSmaGFt4NL27B1pKpp8QudaZFisVV8LNSMS3PisSD33YA7dHEnfBWJ9nsXQmBzL9T8G712QUT5s",
  "key27": "KZeyUSTtZuGj9FTc7twWtHh36FFassyuKPQf96wHA4CH2eZkXsHAYoVZF1DJoa8sfmQWeMyQV2z9Ch1BHhsfQzh",
  "key28": "o2iRn4oX6BNMNVB9vkzVyEyLNoY8w46MdadAqw5Ei7pokUJpENzKrNXD97DzYfoMs5kW9Cp4EpVNrGRmQDXsbzE",
  "key29": "43Nvnx6X67MJYzsRVszhHcAoQvp9ScSJdTTaK45G3Hggu9NYxJgpDb4wyBGjQv7aB6Jz3qsy673Xncqv5sGK4yYU",
  "key30": "4tytyvn5GbyA6v5dXAQyj5y6ATcZuqxBi79DkbYaRqCfw9P3X9rxchScbfpTAx4CKcuE3ejmvy9SMcUQKvf6fGoe",
  "key31": "3a9umSBwgVcGfpVNupryYpPLZEKzEuZY4Zys7rkxNaEx8LyxJDbtrASJw3hWeE1oUVLQex6AHiBhRGe7RcVnvRJ8",
  "key32": "61Nzgc3MGetBKsfpkoNgq9VE4QzMLCaiYTwgKbV2acyGwTDUfdN3wrEuweZp3dZq97J5Mt8AAUUBjE5HSYMqD2oy",
  "key33": "2iRUgxS7eTrb7gtvPPFTST5JfLFetoH3DRvcqKK1MjKxypwTHWvyyJGLPhPX1LQg2VswyMHZoTtJ6ikjrW63aDfA",
  "key34": "24FemZriwPwpkX9t4idRn2sXvHvjWbTddoviKxFcUVZuGb6a3nM3vJACbnbPvL6p4qbierYJ54MQo82HQVEVzYw7",
  "key35": "64vGiNSRbeweVV7K7mAX2nTwptBxriSRrFDdRW4o1pNJKAiQPSEw1EfaknmivYEDi4X8BDjSx2UoKFuncmTJJYeQ",
  "key36": "4iHLhp7mJJfaQfLs3AheVjiGHBrkiaAKdEUdvzaKtjtP9vZGUGs7Us5WywSgdJdsXbhhuqpqzq4scUVYwn7rcQcU",
  "key37": "2qxdXGRF9rM3EW1ZHy2MAnbtx8dbYvxajatAWnLtXXdhGitdEa4NkFj1XMp7PJciHusGzT6G6h4kFeC1v84gRokN",
  "key38": "4qgQDVcPvAJmzd1kfQKCwgH6SGqtEH5Pz2SzycZ4D1yEXbjBksXyCFH4NaGSPVEro5sZpBFR3KzWeDqs4PspkdMT",
  "key39": "4YC5FVs3GsYogjWGkpn9HU1spHSpkCUvnQJXVPLYSE8DP6MaWWg4BHeERJ77qkAGMz6bDATk27dzgGKj3aF12a5p",
  "key40": "3osAedtdp2T3fNxZMphnEdLoTWTVA1rergc1oPpxj9VskehXhWaxmm9qGbW8ZDJe6yMNoHnL6dHybD3saKAq54ZN",
  "key41": "5x2H8Eqcy64GPjZBa3zE9oKNoSDv5gHg9Zh7ZQXpUTmucM4uxkS26w5P4nFiF5Dw9r1f7zdhpmqMW7tnCTApZUsq"
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
