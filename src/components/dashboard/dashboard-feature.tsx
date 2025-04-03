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
    "3UQkBQbH6CrSAwahHCkaRcM16FB7MUG7mfVECR3bfRNRt1VbpagWjtWcyzgi7PpwmS7kpG22Bz7WBA2HnRkVKQNk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gYVRf4t5BFBW845JGpRVibViKQhMVKBrN19zXyx8UJENHaWn7p8Ekd7BmNeaMqKsRUKhF3vsRbRVt4jbgq2yp2t",
  "key1": "5dEerxJBwBv1GKT8Vc8XPv1dE16KCmBFy8c4rvYJszK81EAEDV6bSZ9VVQ9XQNJZnuKk2UxWkeKASrjBBEUaBXkP",
  "key2": "3k8ExJd3LNKpFTgE3LqRMLb2tVSUoYabZiJbUhDJgDf6T4MB5BJDnyZc9xuiPYw8Qab6V8hgWYNdWgRZWrWRsXS9",
  "key3": "4P4vGRKM1f7CfU1aekWb5YqwnXNHtkDhfSKgcnT7Q57wQDsCkYgdnqvfhesW8ZwsoSDnYKh8V9csXR63yjjWqrb6",
  "key4": "5NzXQuyej8XFTPLSW8Cm8mwy7XQFMAzTAL3LctpcGk75sEDSrHkxfDzoFZaofDBNP4WWjwR9kWjQbwSp1EEKkbDq",
  "key5": "3EqhEbLBAKRutFTS4Xn2CZm3tK5thfXxb9vSoK72YZa8SzDs5WAZPPLJiyydcVonST2kNizWQardiVprMBEzNBDk",
  "key6": "61dgM7XjoyHgVDtuUXVJi5of1GUxceXHJRZDKu2nspGbxZAsN23uuQHEgstwcjFqj6MnDGpJCevE15QUU6MgqAeA",
  "key7": "59QUu6Mp7b3EzCqCmEkpF4r1kz4S67G2tyyCnSJQZvDVjex7WjMRWpvLKH7bgAzD4mcaqGDNLi62kBwUNVQe1iru",
  "key8": "3jdxQCe4jQ2D9H9cdqW6ge5aPCynk8pijv4QtG36EE2sCCEASLpSQyAFcfrSAN7hqAiD1oCvZB6mXonffSarnWDR",
  "key9": "2BwNe7T9sXooc5ssc7E7F8SkMnth4My3Ny6rqKsEoYzHPhKSmiiW9gws8M5MSvy4grYzNcg6AYGwJfEptzEGYV5Q",
  "key10": "3gw6YPN6FguSC4Xc63uXMSUw33HCpdaM7AvCz4JuP7Ep5YnrSJnQzSMeiB82k2HixqnTW8nKDRkGXiVgyQtdLwx8",
  "key11": "vDRLWfYLqkKEQupWWP5PUCbnPJSByBatfTr6EmiMuYC9DauvaQu673oiYsKRUqNLigX1xkdgqeDTKyuYLVQRDVq",
  "key12": "3nNqodeB9UnnFP7hX7HjsAWFLdovTTdcgxdyVAdNqdcXqLATtDgtnaYxdJCNh3a8KCu58Z359UN1cXjdASJyjGtc",
  "key13": "65fq2AvD9qPhKwkDecyf9PtgTz3KXDwS5quQvxATDnowPWoSVcDb4JUrRiikKpCGibYPEt3R5BFTqCPxTFE145xU",
  "key14": "3s923KSSj1VzRrEFTbPnpu1kgbT2bYUadgCmU22XmS5YCKvQRdHzAb4MWSRaFvo3ziYtZWiZBCcB2kXFM59yfrQV",
  "key15": "2GTcRvvWu5ozdBVAPtcoHxvQJX6f2rWizzriZituxEVDw8FnfDcTRTkVY9HX96Ym4J5RbmacZqXbgP3xvpVjWvAV",
  "key16": "5up7Bs4yRaYpb3pkEU4rrE8t5o3dMk2sZptjPhDkopWaM5UyN1gXWk3ar2BuxhapCLLzUpCR9sgotvr3vjzFRGyF",
  "key17": "5dEp3kZXFwzHBFZ5mG5am8i7qdHHcjqWFSYNa3Pr9u7C9m4mMC8ut6yRxTXPA1Gt45V2fz3TtNeXF1ZjSfzNJmdb",
  "key18": "2msuno9vX1tSgUEzFk2uwMBLUy9vvymmP5RFcw6oP7co6N4QVXFAR4sTdxYfADtF9X91H5zJ8J6uLwW6rXEpt2FA",
  "key19": "4U9Ysk8FniKgCfSjAafLqAM85qTUfhvftuAhwpKQYCnnkPAwv3p6HRQyuQcvR2PmgbmrQnQzDyxSZuNryRBNhZnd",
  "key20": "2m8eLMkTZzgGJ4hE2QZ55ZC2n8fHm3u9idsTb1HD5hju5gvX1jGBAfWSuefKVXqDjpKFMWiRzCuyTi36L57abkJX",
  "key21": "48CQXxnXJwddNmx9R7TA38yMEzfQUAfGhncRSwU7X96wV4XfS3HSQbxNg5YeRR6wZryfXS9DRX7MUCsXTw6w3Hmg",
  "key22": "5kkWnbuBvd4dB85Yiy28kiDT74fQcFR7TCPCfSaHWmN4kR4pFj7peff5HX6LXe6BCXrK4t9Q6nKLAShu6kJQtAxi",
  "key23": "5nzn6k85LapRSbp4owRUgENmAZB5DTLFWvuEQMCAdDJ6fuLZ5hSE7SJ2NnFWnCPKjhcVGz9NcstFtC15g3FidZSk",
  "key24": "4cXsPwZobCkSrykVFGCKuVQoTZCXRppCbqN6U2YHw6iqXqYUp8Tah5WSbrXbvkwpa2Fs2iHC233ozQ7NbW6Fk9BF",
  "key25": "5tR9NTmdanMrByvWxqqACLPLxmeRoHGN65LuMesKRFaRFGXjRmSdXenHMNPScE66xkUTUCTqxWZyYNj9LxsEaPGG",
  "key26": "4hLA6xH5DMSU572SWShrNFgbnAZzyuobhsHd3VHR99xoiFMVqeQNMpgi9SF5EKLjqH1rg16B1rzf7NRZzA6rGtB9",
  "key27": "3nkk7jsYaJQFj7dRnZ3a1dusAYGggghj1rJJeLxrDXqm8LHLxoVtniQrU72Frh8epkfLsRAHdgVDxdY2uq6gNVJu",
  "key28": "2s9mL9Kbre1hnDePyP7gP9wGLPc4anhDWAHsy9hAjShwPzCb8xKtDogCd52RNSz241xK87apsKBCuiZzVukeBpoJ",
  "key29": "3tkFzpgzZ4F6w7C5km8ftZkWeGjUjeTHxG3uwYQZjKcANX8nCSkgo23tPeDcHdPEssKCuDJMUBeAvPe3ZxQTg5o6",
  "key30": "4UvddZwYs7e439RdxEejGgW9UkR9EZrdtzqqn4icQ54kGiWXK49dVdgp7YRtFk9kGStpxtaBL8K9xTPRKZ6WrEhG",
  "key31": "5d3f6qHG1kbgBWEh25Q9okGZDpxa1bgp9Pr2YyEVwbnBMXD6NFfE1qrmUosCg2NH2SSqaCMuesiSReLqnGf55FLm",
  "key32": "yW4KBECb5XhdzC4tANBxLKCtxT7eJnChsA3W7uKd8dQikBFLnPMsmawgPy5MMEDEvpw8t8gEquLRnP56HGfX6g7",
  "key33": "4WPBBf7QYzW9DKUwdFax6XougcPR6keYbHoVhbKfrcwTZ92S3meMociVCtPjxQHgq6SZbQcRmSRmXZ4tXVoJJjyG",
  "key34": "aGbiXapks7jMm2byfLjc7Z2GEaJLze9FFGAJeptbAVz1a5oMFg2hFq1E7NQMUmietGPLsTstaQTJj4ayihdGomw",
  "key35": "2P3jDJLPUgMT9tR1bRtnc5H651Qgt9y9xsDFvFwwRaNvAG9X3Y6hZ3w4J88pL8PmpR9YsYRd1nADzGj3NySoQ3Uf",
  "key36": "dzGKbM8LcGB7nAHdN3PRzx9H9KKQHjVtkVmDNtHBoxLrzdhSghvLuGfkaksKR7NF9DqZTLDRNAmptT7Xbpff1vd",
  "key37": "4NFFVGupNjdxBkUdHc3FzbmGDrpJ92z5kSQTuEdM4oSsPj3EFoKVCX86rtAqZBEuVNJ1LjVmx6pcvwuGpoBUc78C",
  "key38": "4acSXjnAfDifcy7uZZHbZdxHnVEa1CuaMF181BZsCNAaeExzqmHxcnjk7ZfVsNim9N97cZQRhxUZEEiuBmWnUzFb",
  "key39": "53vxQEQ4uhHaaLLkjKY3FRXc99piQDPD2kbcpPB9d329qUVXK6Tv582tY9MmvcLPzfxiBv3n6YFsYBpGrmrRHQiJ",
  "key40": "2NNFGUN6pm7rVemMjyfEELvs2KQEr561Z5UzxeKJhm85XFRa95mx5g6uVe5BckAh6jVe9fYFDQPHfBoitpcyLAQN",
  "key41": "4okB5B1fG7uwDitqW3eWGaBEVRVVB5TSBecf2xBqU5ti8A8TYQ3Uh9rviMGo5fEyirXYWP7rjwSJ6DW6og6Ap8zb",
  "key42": "5qEjmFCwE8g8R7iR4dSSEdyENDbWZXU5Y3Agdb7EgxHhdAjTMWk5qqnvMRCxMSfoNPaRAf1FKtNHBGaDuq75B7bo",
  "key43": "gi7g9pszeXgd1nqoEdaUPMrRaGcLu5pWw58LUsBmBCTAjeyWwagjg7yEKgjMh9DGCP6jods1bU6vwLsMrXKrFnL",
  "key44": "34FjJAnLsFzArTEM2e1oSmQa5MzPfjEyiqoWtHoA5716LTzurKzGke5rJC6Vnbzf85kVCoinD8Dcnqo1oayTqULD",
  "key45": "44bkNGPDbcUgVWnZcSxMxX8peDcaektAvTp2DBt34MDhqRkvADb823c3u8tzbvbTdpCeVzjQW3piijpWtxdzqASC",
  "key46": "5FimnNGSgJBbEPc8haNGtu5QAt63Qrd2aRt4KDZTh58pueJ9UQ63vNAkuWuiqMaBFmGmjdy2tkbnU49VtGh2muxh"
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
