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
    "5xnx7FDQ5CBqxywYNQKVvUXC4imXLL5inzVsuPLHj6e6RUxC59iiT3sw1sU3VS4FJwQxVr8oDSRykja2JLEydhMb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZkFDCokSPobULgECRpGL1BFywKtodeRmqEFAgo7zUJzYnmp9HPHA1DDuRFFSphzm7wv8kvjD6SsNdXgHNskmmkv",
  "key1": "5MqY5Nd5gkrthdEiBTPTbioKp36SGNSVtALjtP3ndakRA6hUyJNXB8z8vYfHM36rMar9NYbEVMcd53mUqKkche9t",
  "key2": "2WnJHVrAJomkEuDGCcYNj6b4gMGxqRgqbjQnFn7ha1JMbSQRJFosp5busWwQqV8CnSX9Fg5hzy5iX5E1wA4ySHoU",
  "key3": "5tftbAvqoLGNxye5tsnSdG1SFihxVRBMm6dD7zSQmzxuExbDtVX7xmv6RJeMLvuvEa8LWPsYL8g9Av2qt3apsRQa",
  "key4": "4K9BWy1wKyAbz9rg7YC9jbGLVP2qBB6g5wtaT9yc6GrcoVtoesPnbyN3zDeMFFjiDPNpZ8u1auwfbRi7tCgghdTR",
  "key5": "2AbsL1P42SiejP2aqbXP7SzyaPKBbKQxVw6AugHR3bRZFpzCeGi7AE55uwc7Qk4crBpgyttbgeVXA3RKbss89aED",
  "key6": "487UwUfctAeTvgi9F5G4hi4562ELYmEhSbVCtSvDbnPtkwqtvzKDPECtjcrvtmWvQsst1eskFdRUW47bZkzGygB5",
  "key7": "4srGgTVaydgoo4B4GeMG6nuozSd7qVu9hKvAgLCs8gTnc9djjcUTMSQt4CT1nmYRCwsBUx8F3rsSyQFTTwdH2Tv6",
  "key8": "2UM1KUfnoZLFmseW77VJFykx6SdGVzFeN98vgv681Ugxn7yMngbkMCpczPjZ6yTXq9ve9G2Dx8YfsRvbxFw1BwXp",
  "key9": "5QSMTWcioL7PoXooscT8gyuqDNEfk5Kp3svQ1h6aaq5wzge9wwGGSHDABMTy5ByduU11zfpkDUvD7aXPR9VSvY6u",
  "key10": "5pcND9WtPACxrFUrMoumdaoz8tGcKBiQ8ThvxkSAKLogjTv146gK3yetAvSPA8AsvMbiGNjmwFWFP1fLHnr21GMV",
  "key11": "2wyMyqCd9Vy2mHREakaVcesgozfFKDGA2dy9LaiNB9kzHw1zMXepDcS4uaYTjsgugEYvdBECfoheGmXq72oQW3rR",
  "key12": "5ojEKLWKQ7zwaxqjv31zJN8zJvhpLTTizXLnBLSpCZ6FgWtwAHtEBuyGKpfiRLn6ydLsmpFfB6QmhZZw7i1JUYxE",
  "key13": "4s1vEvNeuHxA4R8jYfAJsLTDeJud9isgPekrbm873QhbDs1Txb858SHdmMpNjiBxHo4dtbN3yygFFEFqeMUCz9xt",
  "key14": "3RpRzc6GbVaz6yiimguEuUTcFRnC3cwgH4qdtXqGw5JuXTRwdiYvFJUvsE2WvhH3cGWAmmLaQ42DMASNM5prPWm",
  "key15": "QwxEMtBQ6oDRRNzADC4g6onLZNsEKhW5ZgSBKKQyojVwUwLvekaCcnDpe6F624ECEVUvH1YafAKWRQoGBrpMqUC",
  "key16": "2erseNuGodGWkinizBhLbeoxVrYUNNx9kCWJKznCe7a92TJwd8WCK4Bv7mWR7Dhn3M9HNrM4Ab42ufp7WzKcCsZG",
  "key17": "THdDYgoquSgbyYQ9wmNWKQRawUwg7Ar7KCxurJ7rYugjkkJPMZQTEG6k7JRnbRn8SpRAA2mvWnjZxpKmQaAxuZP",
  "key18": "28CrkM6tWV1kKgF6VmbPKqzog3cU22vqDCZ57cEvaxjK8QnBsVpZQivHvSG5Tbb3UqMpkeMq9UbthDpzdAGGKrTy",
  "key19": "48cC2HR11SrHcebaAZoYPrh7tZfkwjJ8zwDBUHWyLg2mvtrVJMcToY6KVJw7R9ddxgF8D2wFBbx56xPEsQN9TjHv",
  "key20": "3R7egUauadb85KyyZjX2b6QxQjZpSLUtnrtWAHUecApRA3ByVPLTBp5qXpsyMuREcTx4yJRUEFbvixHJLFkiS8nn",
  "key21": "rswWMYaoVYDhFcWGmftG6gSDRDknsutsofpXmmwJ6FHSZXYyE7K6kFyf2Z6sspVcGm22nvGv2K75AfXpYcobtb4",
  "key22": "m4CgbVpY6XW7aGFRCkGUJHHHaxs2Ue6DvWa2QhxyP1SLy1ffX18aGWuGXFidQu4ohhVkyn2vPoY6wSDYtD8uM27",
  "key23": "3975bD6nekLMtWMBspVq2uNsWtygyoF6PMZjLSb2RLTyu5dFS44gYN3iDpS3hrtXr6Yvd8bwWbHih8K2GQNXFUyR",
  "key24": "3HRtAFkKXszgaDMD4YkVHJej1bFheoUFTvCGCUszsniAfZNsvRyj1b348BDevX79N4LjJTuzTUi4uWuZpFsNKaKX",
  "key25": "B526zwnwXKffjkwhjrjLbyWxV91TxBNtvzGyQEm2hcg2fGc1Wvkio45kzBRTA96dATg9ykDDV4rrSvdjrzUTF3D",
  "key26": "5zdDt4xU6NGR5jPf8BhKhGYxNcmpaDmxjwXEPpMEweLBPaesYivpUmYhaPBvy5A3YR9y6qMVqVDQXtxBg5tLj2Uq",
  "key27": "2LoNWUFKc9uu8tNjhUxKepVDwdME5BQs64nmb6JW56quaUtuMmY6b1agvSZxmCukJcWBR4H3vuqxXeeoByabYBoi",
  "key28": "4MQp6ivYmQszYhP5qXkQiH8hkuCEoqZEUFVnTNrboAVUortYtNU9FEmSiSUvXpZKUUPaJ4cEpyrZdtp6qycCBBTW",
  "key29": "21s4jyDJCUXPxfkiAs9tra1U7MiscRxg5VS4nY8VjGygj8z4GsBE1H6e4HRsbJ9odveMrf2jFceJPcqb3pTEg7ZQ",
  "key30": "JGxAK53U8nfpdz1JyZjJFwwVvxeg7979Tn2BJgueC6c597xBKxVAVBk1CybuVGpEqqx8Rv8VqzpqQ2YpzcxTUba",
  "key31": "Ng9c6J55HqJo39TSS8RqSXtDKCzB5gBgdzWCUKSds4KT21oxbGwX6w9riqpWSSj9uAGYyuvjWwfyhtaM7168yvT",
  "key32": "3y58M88bLkTtQKB6akWYPShZPPPYgw6YmrmqF6zXuEA9RP4fieqM4Rqdf2QS61R6SK66DNd5ADotkBdzJYZQLZVq",
  "key33": "3Q9HZPxqLuVmaDYseSGLzndPwHP7JzeWvUMHveSe2cEmdScW2WAEXws4m3GhWoBAw2mBK1zMKmfqQ8e5K6jDg2k2",
  "key34": "5Rf15cvKqSeewJTiGL2V8djjWCauHNBtdfnVCnqHmcJ6w6qEHf4nZRKjdzhdN4df1JiU2QXCnce9GF3WyJdN7wm1",
  "key35": "468g2Zbrk3nB89DjADpa2mbRPMvjmCohscLzo7Yhv8ez6Viz3mS5M4knpxRudK97aLHSYWVB5nwovctKBFU7hS9q",
  "key36": "2wtNF9k2bwHoTvzrdxo2P5DmxqY5nfDYC5DexZ1299mPUQVdCwey9g4VaVd5mjFeRBS8frTm6mo816wiEBUwEqnx",
  "key37": "5c2hajpjdt4Ht1ejq21i1M9WbX7KV8c6ZdLBFMfdXvRhcw9PUM7tQySAuLX8F9jmYRZXs5wHAos3SSihKJRC8axr"
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
