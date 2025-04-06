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
    "3azPGxCyHyDipnUqtgTzHXKXj5K5X7VzFwuXU1bxxxT8oo8pjhmrR45HoS7uauD55EwaSYaXPrLfHBA2571YP6Uk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rnLV1YVW2bbWht7LyG388B8r1NsGAeUjMEUQsDXo7z4JCR3t4QbXjrG1RJzUwafgVfGh712PGUyRzNG7C845Aww",
  "key1": "34Mt25XBsCpHXhroz8aqDiefWECEjufXtSenZJ5yUz1FZuUxRQRJ3RCK92BSH8GQFeFqmJVhw6FKH9LsHh888V9p",
  "key2": "4Pf8UZtmuRH6wmtjCUYGoHmjaZr1igwPWn1HhyShGTRUKm6UEMvttEby8frQp52BT2HTh8DHp5SALicN2n1dqaRc",
  "key3": "2uXR6zKPD18TFf2wgFENyvMZXgsj5Vhf2pwFW9y63y67DD8wNYFef6rbKH1aoe6XNCwPCn2kuVjw591BwvitoFYg",
  "key4": "2y65D38cUfaDuHD7rmsHo3zxkf77TyosRwtC33UbG8CbwKZfVBx36NiSUuUvf1nex77c3rCKHxXR5ZmGgiCC2S9E",
  "key5": "2yrZERa2BV7ZRyYJ1x1dKSs6AYamRPqCsmdgsk5Uy43SERxP54iZwxuy1HFT1dRft4Q1g83RptrGLUsg2SxPr3Zy",
  "key6": "2XLLTYi78tfAyf8WAohuxgxnNDwie9fptNH951gqiYDpCfwoYCspzgFtKG2hG3Xot6vPZeqY9WabS3XLasAWrCNh",
  "key7": "Bp8uCFqd6ArJrdJJBDFRxqcJjHYxkqKKgttzocyYRGqZtyU4Yz9s3o6knEYhKPSzbpnq1D9hyTzHfdHeR4UERsq",
  "key8": "2i6RhZVoiNjn3xMjLXJQmJuUi6vgjpXRBqQ7DvY1KfsqZPnrJkTJLLKKdHwGLXu54ivNDWnf55a1vMpccA86BK9i",
  "key9": "5qsvqhWCiTvEsr4GiYzhNPUHsfseMTWCheZ1mhfZ8g1WNoRzbAunrsz9EhZahhwuL5Z2omhGvTyUb9DugvocrFu6",
  "key10": "5ruFe6Fm7TPGK8ei3L7qau3GPZ9oKuGTsxRgF2XXzQbUheWqorDL3VpadPfwHsEEAm2oq2TDd9QbCcCDUB99Byoq",
  "key11": "WKq1qGMAfzC5AMsPKhBHndkhBfZKBeKiQ582JiGpeWGbvdLQXzQtz6HpjzJWXGq93F2sWyMvZjtGq1tLcT7nXqq",
  "key12": "2HtXjE745MQD4gfrG9HkfCKjiZUwN5VHCY2ptDUTrsnXF6mCtyHtTBfBhq4zsDhizvfQz9Tc2N4a9JDCQU9nB6fs",
  "key13": "34wv1dk4as7TNz1jaDBaJ79Q7aurJdVzmjBCBmuN4tJU8wUhrLoMd3Ssqs3rFDz8zKSUzQTZTKzPYSg824ER2dmS",
  "key14": "2mHLWCEk1NgnfNHY9Z4DgvEgQ5bwaEXxiXiDwPwn7EBpYSD62VmyN2Jk3tvTmAtZcE9bz7iaQB9io551DLVghwNg",
  "key15": "5Yo61yLHZTBSjjrgN9x61BZxMYvePd8pXF7eyuxaCyDDPggjHdMESErosJD9pN1ZQunyRg4Nz9oHY6ErpSXd5aqA",
  "key16": "5gF5NMusXnxXvYwpDDjAnrx8Bsb4VQtKReHVTygDt77eTRxAu2PkkMSwgr9a5aMNQavPA27bFjtVCGf2MhESPbWU",
  "key17": "3qGQoVh77wsxfV8RsXL6WgTp6jkaVqgANRC4JrCCkb1H7YoRq8e6ZqhGUoGKrU1FbNjksL2DUNnZAfDdksRqp7Zi",
  "key18": "wQFcWxRej13XmBkZSkPNm5S3dRbxtP3b5DZTEDs4MTE7B39fkPb3CGC1A5G2qp5CMgMmjuXKEv3Fhp1vUmvsVwR",
  "key19": "4roWjPNDS5tTL8ymHfQ4csmZiNzHT22GkVTioFF11xirEnnCJVoqyC3YBvpnQYCjXXvXfKeK5EndeHNXqvoGZjUg",
  "key20": "5MynqWwgYHJiL4ErhbKuEJQtasrozUJE9FBpQTm5XVUogF2h7buJzLs2md4C3osGY4ysFH54crzF4Rotz8tbieQ6",
  "key21": "5d1cTekgEPkBQM7t8snwZP1xonzs11qVdH1QxgZ49oJhryPEUWFSoBtpFuwXhWURCeafKgJvsyC3mnehLKum1Yhs",
  "key22": "4oQvHre8mRQkzqHxEsyvtJYdQombCarZntZ6TueULKc1dvPX84QwvJsC4ttQBD9xHrBtf4mMuz3YfU5gYabTLSXo",
  "key23": "3REt2k4NTeHGCxpkyrsC7zTwpLXegULVLYtS2L743CH8BFUqXUWHoWhSqT5wuUtYVr1hY9zZQ8Fpwba2hhrFc9Bq",
  "key24": "Trr6aKS9we3SEirvfTvuFhzFX239DhAMA7w3zP73rW1cZZraG46zbsp9MqiK9vosUGJ1CjMdugZfBgqT4i9Veaj",
  "key25": "58RLFhA6yK8zkPoSXZ7h9Rf1FBK2SQyDPHcMgZkcNXsAiqfsUZuz3QtPfqLxrAo7L1vNhEFihdLUot4PA4smNBoc",
  "key26": "DMQiLL6gXDEf1RVcYiPcW3mFW6376yZL9hodw9JK349WD53KVaPX2CwQakEbkSUgZ8XRyQoWH4NvgabXt8GKRrp",
  "key27": "5WBtFg6gaRFDXs3oXe78bC291gFsbkjaqGZH9rXtgJqsxg2uK4xwYFfcgTqLsRySp7bhjXF1yb1f92vBLatNyaPY",
  "key28": "5CaFcesB22b2rrZrw7yjwBvK2U2U5MUGNg4nmEi8HdtcRtCMW4q1ddzxJRL3NyVZMnAx3cR2pZjxsRhi8HSgP87D",
  "key29": "4WhLpz1ULg9S3iGnxUAx3FNfZUvBQYHbBThbUrUja1KEu9yaNZZ1mg3KswHj5Xpi8QX6hVfrFAy785azasNWveFP",
  "key30": "4kDJDBUrgA7it1wcTSt6mho9hHVjkVwNxBr8LVLRPrZBoBawYuTM4bhCdS83MKhvFCCE35EG2tZWWRe4u8FoweSo",
  "key31": "5eKHaGGcR1b5rfVAsD7RzN6ivMNjVVyXJ9aTWCHBsj77q8aKGopYgfqWMzresrxVohhUhtLWgdpAMimRa52gtcVn",
  "key32": "3M2XyTS81oPw9HzKnKWv9kwMNet23mSscNtCJzzVwXxbMqoRHGuwYAxb7m5g3x4rUCWRJPMKyA8aHEgsuQXaPCzi",
  "key33": "yzxniSTDeX9XEY1E8svoKHJnQHbH8tfTEKtjbDNgZ2z9WUHes716y4oRw5imCtcc2DLGWZMzskgRGVutwZfY83H",
  "key34": "KPwWwxyT4T6eXVpZWsCbidWJMB3QyozCH8z1mo3KEgWESwbNem3GyzPyy9uahLULDHu479bqACrkr4fvNzniLNU",
  "key35": "2dLTCZhcePo4U1dqDw3vfNSASo7oUKSak8DTy6ymJhu6TfQ8LGkx4EcwhwSR346sNMx7967k7CSaXs1SBmsEpi7j",
  "key36": "3SKdLtNgZFEryqFsYu31xcjR5AgSeDscKY5JBTSnSzEgJkBgeTSzRjxyxotUVhXwL3Vu329wonYkDTic858QppEW",
  "key37": "6Qq83Y5wgzbwzXD3ZiZra83KS4cbvE8onVS5BJ7ESvGZaP2SrpTMQScKVWFNqGnW7iWwRao65rekNakSoerDwW3",
  "key38": "3fYKx7HHyACQhSErjLdM4HF9EyadmQpxhz4HMq96fPGSs3HYFjbdyoPmvf6QyVomk6h5jpHwhkN7UcpJwtoaiYVk",
  "key39": "539q5t9HnQ4C86RVqe1qMfCsVbLG542nkfRjuw9KEVCbkM4tT1gPnD68XKaAiAbA5ppEAcuA6NcRNxPQCiEmbL3v",
  "key40": "5incDFHT3EN76dMgd6QTzjwy1nUkUeof8UU29qx4FpMQKsWqLCyZYnGs2i1YhVnqNSy6LGHvg7ksMytLkxq3K8kq",
  "key41": "21mf3mAEoPuR9kxzoJsWTnjdeGKuyKPxN7iCddKTBygVvEg7kF1hoMVZn2Ze6oZmnYK3GgvxRXG99t92cT3JdZvq",
  "key42": "5g2z8PhKYBYhB6hYwrLqVuYFrrDdfHjcjbjDwQzsLjAuPYbdewv3sRpt3DYQzNodxtKXHsPT8tc8QsTm7QMfbUaA",
  "key43": "4garePWcEGBY1cQWfyHhjYd9CpkYoypYHHKpFw1iVSZJyeCsmoSx9LWzenE3BbWxnqYwLaqvwPEBkGi9m9TrKCpP",
  "key44": "3XfHYAopRkAq7Warcq5PPegE318AnxW8ifxMiffChKmMr35L6f73vpKmjMzjS8cy2s7sFNJJz2jRZEjw17uWrjSL",
  "key45": "3itJRnrFror6UyjGRYGzdd6BSTsodPqHAZWxSAqMGChqJJCv2RCRCtm7NcqAizbfBTAFjFzj8HcTWmc2k4AxjnDL"
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
