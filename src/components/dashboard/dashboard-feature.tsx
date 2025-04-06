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
    "k9ApRUM1Hj9G8nMSUEn7uBCCwxqzZY2o7wkvK78Xk1mMSgpw6kcWiobfrX5j8xp9wSfYQMY3bZK2nZDvaS669V8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PP5HyG7N8oGPAaVpVKBdJwvTpkqV2fqUM7xmeQWGHcPLKPenSgEWWDrCrZ9CJm3K11nHUaQCA6TSs77q4Z9ac46",
  "key1": "5iSbW47V2bDEmxhVnx15V9yWr9aND4QHSZ2dXuXAKVEYYHWMjsCzwbRCKAjcaUpm3iz9ph5SxdbebCTbDDEfQ3je",
  "key2": "61ek26DSy9tT7ZYi2jYX7U4EBRcgFeU5h9r7sk4qudiE3dFZhL8rYHjbLTkXv3gzzPWUVTbS31PZES9BW3BoiMK5",
  "key3": "3vEvcFG3nwYm1BD88tRj76jHnui84KPsHH5SzqDV3EwhDEdZRmv6BvoBZBUnaUnmvbF7VDP3iyvwFoBi6Yqs7Na9",
  "key4": "2nUkjMFTb2yYoZh8iF7jy7N1vp9uZS3VVuSeVRvokCA42fA1wMY23LocPLKZA3W1rKNNDJCbHdFZ66UZP3f9MYD6",
  "key5": "Ky5nfEHgaFZ7kgQ4ETuRNDt7zr7KewvGbMdQR76SGQrhbHw6H7sSVdzgiFTekBRNXHGiNr1JKUSzNmFRz2rfE3S",
  "key6": "2CVDkKdCsxHjmdYxcz2Tb5XKrpj3SoMmtmgL1yzZor3hvGWvobZCcvAxsY2k4myYG3CHT7KyELLvm1fe8jszuxEw",
  "key7": "62no4eNcgsCC7vx66xXy26FyS6fDHSkNe7DZsRH5szCn31bebWcKtwUWMgR9XUw62i1gBw56odZd88na87JCUkHN",
  "key8": "Pm6d1c8A9MMYKtzCgVGx35NzRKrYwB9tCZ2UZvH5QRZNfvWpYw8avNjJ8zjCXUEgkHMN9i5qbKcocSCGpDetzyF",
  "key9": "3UWvc6JkdjUus3qWnput6gSwNsLfjMEaPviYAUeUAeAcVKyWSRFFRaqGHYMBYsjPGofCtP2uJJtJHUC6n4Gq34zs",
  "key10": "3e5LQqATeihFdJpPGCrCNjGREmrR58KKHmM9KwCtXrs5pWtyJtVm7QCiq7kUzqXUgjiKexAgsARL3qpjJ3QHsjng",
  "key11": "5BdT5qvF3EELxZpMbPLNUYpukpXtazTXiJPBm4MqSaFD8bWKnHdDVkfXSawe1FEMKGrfPa3i1xLG5qp4gaRVzQ1C",
  "key12": "3JfH4dD6opmVU8kp99syB9U7Yy8UDRvhns1ZZacexAXbRqf7x4K64npezYukHNDuV7iyHKLyWdGD1df3ofX52SCq",
  "key13": "TgERNEuVaiS7cRMZnwjnHDpQbiLL1cdjwn99brxW9YeYNDuLWqHRBLxQJq1cW3tu5Je4aTU9M4dQEvMRdCPi8nY",
  "key14": "4qqyTR61bhL7Wyoy6cVFrcfDpBdSpYT6ucBBSqZz6YKPYanf1ontvqecnVBv7KmH8wfvag7eMGywDL4jcTMgUvH4",
  "key15": "36ErtdqwQcSTdnHgTugFw5E6aXASUnb3HbALADGyMh3g7bJHSsZoSnmJwANyuPZyNi21wNWNeznW5knuNrjEvsjb",
  "key16": "61C2CMVQR1iLe23JHkdcZbetPih5Rmmfa65QRXKsBGJfgzG3udNT9rbeky28Ma4bPpE12KBnzuigidNSVJXQ1AGt",
  "key17": "RoJKF1tnT772XbykHDJxjwW3MhvXXgXTN59Deqz2b8bJvRrT4VksjSxaDcQGYqxoDdYNGs7f8j912RBuMa7P5c1",
  "key18": "2dPXgEB6yZHktQQCZBhkVjiy82xts8fYKdN3KgtmKmdrFurKU885yXUDtwNLoj2X9zx4kG5b9j6WxQ9HEsbVLBu",
  "key19": "2xjDJDP6i9FoXZ6yf73t5fED9xx2YWCW47geahopnT2EVKX6xLDb9ArwgADUdttFhfEMAzFxfSQeKnPorUx1j9n",
  "key20": "3ap55xhMts7TaSuyt2mJ1wUTAmkFYqB9EzdDc3FokN9VUfpH4j6GQKW17Gt7QomoJoLRdm3H2h6xY7NuiTGcx1nz",
  "key21": "79h4JbaoW7UZ99eTakckffCRWKKgy5cnqxTTNEajFg14K95CbKex7jjDpjdTaiUV8fft4AZAT2VQSev6hJoUoF3",
  "key22": "bLGeDCs8P6uQu1QyuMATYWKxtfdCkdubr4Ma5KMyxTQXaPi4r4TshnYaVno3QzhxW62J8cZZVW8NpvkNeweRH3A",
  "key23": "5udnydWwXRGt7R7MRj74e1MZRFuDx1oACUJcnyr5fD4yDgT59EJi2wj6oZvwPRTUN7ozrRu9qSBeeURors3pd3Cg",
  "key24": "5Unsu4kcdFKgQquZxxVhCtoxBPLqHng9dijLK8W6U9f6GqZpFgFavrtQGeMnwAjocFBtd8HXmU3J4FR3FEcWzsKU",
  "key25": "k1aVq41tH6nMTeR99etF6iQ5f5sdWg9yju81LZ3gK258EpWdmQPXKsuzE4jxPGmsBo5wpninJSJ19j5BEQ1SPC2",
  "key26": "5T8xdKD6448tZcMqgrLEoMJv6PMLnh3HgxGUnanz91ce2trrGh8f5KvbyMB7LrWi8MHy1Yjv1PCj3BkgMVc5qQsL",
  "key27": "4jGrmCA3NRSszmoRt4VXZVyRLVAhZzQ6FJZk8QHgChxtUjNCMJZNdgmp14U62h27WgajA7UoXADpHYLwcDNUFhtG"
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
