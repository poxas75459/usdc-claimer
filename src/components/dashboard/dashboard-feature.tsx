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
    "5EzMnqZnw7wPBwGXRTFB2JenAq5DKtdtgRGJY2dfx9UDofAnGaHMUznAHCSYXzWEbMveSvx7jnsVpYaMopVtGrCw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ebqeEaR4b24DF1Fje5YWe9NBjnkQ2csuL63e5PhkL9BpCqSVKVbUx282fKk9a5QmFCoPFvKbybu4VggLUPHbW6K",
  "key1": "5N5whNNTk3YNfvvrdpL55ia9ANSLTtwFfTHsBT6MKfFDLKdZinrvYnYbULKuNcjwrttdeJukZo2rYLpd5YRWYdJM",
  "key2": "64UG2wyyLFu94eiDRr58nfmwiY6PEAQ3cLhLLe5ZxfbVeChZBKfZ7uw9zJACTviBJYKwYtDw4zKKT4y3yon7S6sW",
  "key3": "4wzv6MHvorKH3qo94EAhr7NcysLBhANBKiP8GLYznRRMhMvJBm4KAR4EaaJ3T8yvkgx2Yiw2mwvXibB3JSFv3Bxw",
  "key4": "5HEdqGfLhG9MU2sEpf4guKZLXQbGM8kKRZTDH66KD9ww6nqLDCUrv19eqv6e7EiienWRYDRXpCb3Gqcr1e2hmfsS",
  "key5": "4CFtcVPyJdZoBUcnZrte8ZZi18UkDMFPqxJnNNCbiVKZr59reeDusgiK4hM92MntsXoaJXHSfzT1rk6dTSJoL36s",
  "key6": "5ucVWHC2doPNjgCiSub9zFM3wQd3x9BgWvEu3Vr4DauUFwjrb5EuVvCHVRo4qVeZTWxzSWfQ7AUdwtpNXq53jLp4",
  "key7": "2Ddc1cMRcVS18kY1qJWr3y9Dc2kWQnV7XkntS1M3WHqd9CkukRm6pACqdrstYjyqF3DxnSjE8Q9WT7qxeFkQWvAx",
  "key8": "5ttiXUMCbfopByB35j7aHkQj9u321Lr7QZgU7NaYXUdSDZFqoJhkVrTHGCuwvhDz3DK6YGUgWWQGY6oHcS2SjuWQ",
  "key9": "587jSBNF891isZg1WJrXzYg3QrYhcZ5bZzs5pntcTgF8mmc5gtwtxcqWGYYSe4gmYXqU7MdJS9pgMN53qFXC8nEm",
  "key10": "3RYRjqAaFmjzvRXcdJV7JA2PLPfue5pHqKJ94VdHxoET2FdB6pgE7611YAoDAJXRArrVKPJ89x39qUhBdYeDCnzo",
  "key11": "61d9fQ7nRQEb1kWsLUnUF77FZ5Dp8VnAUWewD3oLdFYvsVM5FmH8hANaSqNe5X9iuamgyr6TsK2bjLsHVKPrLZKq",
  "key12": "z7FSkdikibsY7GeA8SVBwZBQoC1Ya6NAqwB4rzkduTpqRHpyeacHrCVqhqwXTx4R62anJQoYsQ2Ys5ovYCzLN24",
  "key13": "45jFWwhGkSNyyw2F6gWPyxUUgkmx938uQAKFYLpUsu3Ltj5Xma48ZRghieeCweEvNhVZZNG1K215zdBLUpCVw2BL",
  "key14": "5UFBDGXT5DoPzx5Lbv5CvyBYGMcVgQ3QbSihz3N5FdFNvUY2TVaYLsAaeF2m8oa8befXGcYtFwWgkt87VHgkz9rB",
  "key15": "4EptGGmxo8M52ByA8Ku7hLTfZYyByfK8edQG2Q4WxYKGybL8HFmB3atdk3qq94TmMDE4ekw2icPwWntpxqitfq9z",
  "key16": "mS52Jq1LEXEYunV2r3R9PyUGL1fMw7PjKtR7B7a5Sgag1C2tcXYfptUxHy1iiuRtHi5v7z1dTTpC2SLmEVquoa2",
  "key17": "5DUijTZBfqaezCWu25REYWbDS486NTbxoq8C1Zu5fv86F1MBBjZDjLHAx6jCsqAE2LTHzGeKBs3Pt864Vh1Vig7r",
  "key18": "5FeQTq9z9XkJhkr7pmsqJYJNoroHr794BMXLdMLoop7kzjZQeh6YAuqk1Mg5qeyg5YPTvijByDAaW2hSo1zsjSQ2",
  "key19": "5uYrsnxJufoiD9cbQGKdWsH4eEKcJoPRGyqes6ETNgNCWhMAup86DqXhHQBamTgFNioHMn3gquLRtEouuF4gQwPo",
  "key20": "4CiVmsVQbiVSZD1MhNpitZMUrYLg9HjE68nE9FAXs7BnvVijnkTbiwqHGmAjfjgE8ztcYneiJnU8Jnhbe4L41d5M",
  "key21": "5N45XbrrQ6KYeg93r9QESaWD5QP3zXv1zBUZmBK3NkuoKQvoBsCssEukP8srzt63wg8ECKoJ7h5aQyd5XUJXDjEh",
  "key22": "525BxHgN9bbXXRdA942zkEhonSBc2S84oW4qN19YMJp3Q3hEg5c93kxMb7g7cMiQjGV6HbxgaPAuizYpz5uPze6T",
  "key23": "2ySdAQPVU6hs3Xwgs7jBXhMw8q33yiscYdmYpDN6fyibGktdJTE1ZdQNoWWJ9FeywoRsSzsHEgJeNAEmEGE34pJe",
  "key24": "5FBZ15iW3YeVvNo3Ywu3yXg8esuADwD2Y5y4HJxYDRTwWAQCMW7HvS9FhECpEDDakBxWQE3FYTFgfziWcR3LJnsj",
  "key25": "4c1Cf7RRgzXKanTHu6Buy6EAkr3nqswRFidefTG4adrsyqHR7mY83VC857DRPEpf7nuyhxXfSrn4jWco3JeuSWVH",
  "key26": "5SwCj8ciQYQTjWRTN64CHa6y3hmnd4cLxTZubBRkacaaUywKs2cCL8EU4qAni8kn1bED8nmPURgLvYXktdtXYYf",
  "key27": "2WnnY7N7rkwK9hCKTRunFmkoQQVYys4rPCJ6BT7Tgj4hUFbutJNSjzucCmJGwsaerUS33mXQWnoWEi4bvV9DCUFT",
  "key28": "4SvGaDKqEL83pMqDbBwDgsJnFHA5Jiai2FbvCyznkX4SpehT8VAgZsrmKdR2cfdbb69mnpuDNJVk42CN7R55oqnN",
  "key29": "2WLhDMgEBM15fEmJqYarApBkYH5oDny3KjHsDgPsanLcqiPzzZySWv5BvLy56oCUfwooVhxVNJNhnHsy41hzhnrH",
  "key30": "3yy4Hzr7GoiLf2j2WTE8H4LUPicEbpSjVj1P3GimZvgMdTY5L15yPUtnXZM55gkhuNJXGPKXq9dWWQ7fhdGeC45E",
  "key31": "676JwkorW4sFiLF3drWc7rqFGVfkKzpXZWwoMumMqoYyu55HKBExW9GGADsnGbSvEaVPFJ8tY3QyS6z8S7gcGYRL",
  "key32": "36QDGGcCeAXD6LVF3FbQytx4cKHSvEQCTNoM7wBq7cZD4ckcdt7uDR51g7XjNXLYowp7c8nyT1njbxUUFRZABBDz",
  "key33": "4gFXze9KkbaFGNNWrErxSi7zPxtXnZGhgMnUKiNbpF13dcfMx55eLepJpusyCZeviGnCfw4FDDirA5P3cQQJWSWB",
  "key34": "5J2wBhHFrfcJoFF4Rpg5MowAKqYfoJ9dxeC1pXCWkASjwNLzaEsnHSA1Li7fNaPaweDntAXfwtUcbdT4i4hiFJVz"
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
