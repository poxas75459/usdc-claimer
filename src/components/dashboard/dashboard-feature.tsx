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
    "4tTteapdujgvm8NMefiK4yEhPaWPjNNiKaYpJvzZqtnuixZTye4kaaC4J1JvUZcNuFSLyG65ithCEB2tJVieQcnW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CD55ssEsBTwRQN6hTR6fK2aGBsnUvVMFmmL6UcQVNo2FE5orktMAFHFTLhz65zR8Nhywr8MD6DXL7oQp21NsgD8",
  "key1": "p47pCRKKr1Y3k34zqD3qkZHxGJXbQ2qcsoosgbviTT5V7m94VnCs8ysXJq4QDU19AtLKb1spTE8JdJ4aqeG8kQf",
  "key2": "3uMUDPRNgyYp94vNHVzC7JQAit7NcEKJ3k5deigFr2an9zRC58DHdAujwxXZuPDFteNRcQSZErMQRm4KoUrRdsdn",
  "key3": "5aXofA2JdradKXCfZ7k75yEFfWmF1D1Xi6SvqtXJiNmiSkX9tnEPAHzogRUFu4obkdL2otbSM4vX4wiCAhRjGVSp",
  "key4": "3dqF6S46BKQ7HfwmDGCAhsF9Ng91TSAKQMRoW8M8XageHeNahdavB23c9C92a7ecNmW9kTNy1zWN1kc8wEmVda6r",
  "key5": "2E2ZD6tQ7vVrfP5BhurfuQFJvoWQKx68DvmEf25BPw7uBCS51pEBkG7JpyeZ7LNg738FGSMsbonR6zPRCZfeG7Po",
  "key6": "5PQ1f6H2B59WD8BLgZ1Lwrv1xekBSW4yhpDEmak4XCHaSpSo1u2juTVaTBCmNEqqGy8AZHdKUDy1J5BA2BeT65x9",
  "key7": "2wiBrZk9CyNd2h4zhEPF9XhqGGN4vMDAp9HVe7P8Mu8C4JYwvd8n2qE2WgJGnQNUHghdWhKiVknEmzSy1jAxxVVx",
  "key8": "3SSqN7iMi84ouRDjiQnNReRqr8fDKeMesvCmGo7NbuNAzshjfL69XnXVFTF7ShKvuyrX5CQstVxWBtk3avVNAQak",
  "key9": "4363PRhSTGeg8vX2xtjHUR2FwV4e2xrdCZsQmAWsALc9ccbXFE6vyfukSKTCzGbouKs59QgS9k6nZ7rzh1cyYW8k",
  "key10": "2EvYppX5NUFpxtCTvkqgo4w9X7XYbkXK1kart1oApU1E6J1Df4DgmqymfCfhBUsnvsmDe6cz5rXQGVBpf6DYpasx",
  "key11": "FJUN7KGT3iuijWkqh495YNC9RFHYcG4A7Mt6MqcjB7y2uB4efUNoJH2zG9cnN5qdFx2UqQEw8rrb1Vh3j5hQaNs",
  "key12": "64yvscv84Dk82pfyKA1M2WmfsqQoEvHA4tDWeuDRNQCpBMHLGQVJvSgCwSezNni4tvBq97KQSjoxJxpDYLFCA3vf",
  "key13": "5s41FfMs1oGSH7dThsNmAbRKyayJPLb4uhheosj5ZT2riAitwStTSSxVHss2wdzKkSaNaMuQuLVdoDJA38e6EwQu",
  "key14": "G5mVLjEez9SKPhTQWMMF95QBoCEve1Uu3yegJSyLzC4tXSj1N4NGuRbHCbVqYHUamFnbCa7FUPE1VKDiwiTsPGq",
  "key15": "4VWSbop878XWtPjnZ43thXDFpAbpbiUopaJCuJK81DRcUdsm8TKyijnNXD5W1ppjmCPRVzcrHjxfDxdbXmDxkAQh",
  "key16": "a4nNJJgjL1ruCyig1rFZch8eMjAiiU68jPrnEbFeB8XzWqNMuK8D6zeXaVGJYjBdyvbLt7iNXU61fpbFKuogFv3",
  "key17": "49LZFXJTmereVFfxH2RAoYpFgE4vt3mYUdbprNjVRQSCbazCzE9XggcvP6kntGHxvuYQRhzXuVNx27d68uKknh1m",
  "key18": "yjbJUQQu77i7BMbHH8u8sV4UVLyuH2HcfeEypgAHBmmTb6v9uZrwAnVxFGoxm2ikJNNg7E4yojhjzHrBGmGBNQX",
  "key19": "2cUnfsXTkqNVH9Awiv8tkNTuumxh76XUmGmX96zi9aJPWhpSkPPent1RMgmBDSW94JhgmpYRvHqBEW9zHNZyeHLy",
  "key20": "M6Nq8h4CXcnd3YkyDZa4kJEzLKdixBM9eredtGoKp47LQzERGgJUagKGri5gse41uaQcZiZtHKMWpCavE8LcUSQ",
  "key21": "5N4Ywr1tmhmZnmo1nHBs5mmAchgx3woKr7pddUJTXc1si5GkSKzB8N5aE9NmjEohQxoPN7Cq49JMoMnKa58u14g5",
  "key22": "2swdEe51PYSsqiS3BHU7T8HiETmoNdkctgodxyR9huanQVtr5UQ55YMiV2cCDRA34pYDyGcQsD46ujxXFbUhznCx",
  "key23": "3fPLUAgnW1jr6uAEtovZyWE7tPxZkGiwx4YUWKzWfQZcckrdkMAD4GcsFPjCrMk6nPYghxskTfzFhiQhnvDsWNEo",
  "key24": "5mz1j7xwMakmedkhiiUsRutydzWQNDizMCwK4SxQVmbfxN97bWxXuY9GhN5cjLTjumkewrLetEzgJPYL4X8P8hH4",
  "key25": "3dq4BngeUBVM7Qu2bHW8YtHUg5PDVDQAMDVA8jJA51DprSVGJsgouQe45RQXUovtYdMNyqmBxZw4ooweCKEotFs9",
  "key26": "VEhA46LmqT6WQgGHcX3B2z7NAFUL7vLBQg5oXRT9fN6nVjt4aCGtA6yCGAUvhJuyTb5BJyWAaKLAwPYAW75JYtB",
  "key27": "4yWtxMVcswo86wtaReUDgZU7XmTehxWqexfx7f6V29CE4Kwt64RLhEwBCFifY6YdKNKXiztboLHgdsq6hCL7i8HF",
  "key28": "3cRNAwb4wnqNpcJiSHT63qxQmwRMQpZmyTGokNgNMvB9nEKpswdp4prKqpKsAtz51H7A8FwRU6aJ9e33dtAE6EcG",
  "key29": "5kTKHhELiVKC4HdcHX1gGFm51G7hywKXtNy2PAbdmWZoCSb9ik2FckGyF8BZtTjikKLPrSQiXXKFuwtNuSLdkJmm",
  "key30": "2xDKiWqV7zyWG6nMjwRadA3m1doq7cuRfsFrgAwj4H9vshrU7UGi8iQVSyLgoyAqbcFzLsKmxiQe67twcHW2TgmF",
  "key31": "3Mz6mwbff8SZ7b4RnBrAr1TKbtTFVLCx834WKvgbJJ5o4wfd9TFr5SK1vP8QMZ5TpXcsjRjp7qbukF1uCQVTS7EF",
  "key32": "5tJRu8jA8v1mubh8HdeVwaeAtGKomvorNJR4ELGXChpKHbbQF9EZeM5wsBQiKh5yEeLgRAHmm4isvJAA5i2ZVzS7",
  "key33": "4xNWR9MyHqHddRmHmNWJ7hwWzLn8H6qjyxvEnffhQ1KJprqwyGaHMRoP7qoUvC2f7i7uAaqka936AzjyWt7N3kLC",
  "key34": "46LL4oC51i91JmYuvLCzmGCagZn8LB8x8Mth77YGD7EAymRDswJHcCaK1EQtz7iuSh6P1T1pTqpVKPtDXshNGmvC",
  "key35": "34fHxowY4Xiyyw3XqzQ814ck62xzBn1Ns4xiwyB8D8WrAYrpTkEYtSMqbVZds9iVtuxhGiAaksgKTyUJ1xxJAiF6",
  "key36": "5vP1eyQJJQc8CExSUggrZiRVwa8DMY5XuNSqoYCpoyXsFZ55hFYjBZwyCjTC4cPfQi1ZWzfbniYgkeELgVSjMgee",
  "key37": "2RKwDhLrUcY5cpATzPpJLEQdSRxW6T2NsiuEfa2tKncBuBniwJdghovyQpNj8HKhczETZTRM6jKLQPMDVtxVoXLE",
  "key38": "NF3um1EE56tGVxj7s1Mq3R9xxQnmExduDL5V2AcTYmu6yH3tvGfaBWdQ3fPZ3xgSLDPwhcGmJaowKBj1qy9tUcT",
  "key39": "FEKeRJ15MLALQ47nDNatKhbwe1ketxKpeEG3kgopknf8eqdsUwXtfayXNtib6CPdG1deZACavJQMWPF1FEUjH2J",
  "key40": "mVAtR5JUT7rShUHuVM7mTwWy9cHLtgNfHUNzfdnny1WxmVkS6XVhBMoTgLUNMwVTbieJUFzaNMBhgAGjskreKZA",
  "key41": "zkzanQSatF6zoZPE2Px4aewPAQkgGa9fS7vkgyZ3W5j8gFE8CuiD6pdsEwdZ5njGVDpiCtZmkTY1ynJKmQ9EsTW"
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
