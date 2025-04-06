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
    "5hK2cFvVMKVMPaayTxNBGN2oT5bvckE2YjwWAxcmyGPJBdQ8THk8pN8FQuCbtyXbPHUve6bXXzWQSWLKJR8j8o8b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48CLpbbkshSZbQbM1QmdHJrWEtVQGdqi5Mqdtpq1q6sVrttbyvF63wffQzhXQQbNuvcJs7peRnwy5RvqagbVTqnM",
  "key1": "2Nu5aXGvPSahDhDYVdTo7Kq3J11R93fCZ247GxZQ9yQWKGdksLAzYpoMzXBLmJEuWxC6Mq8DYTmgsM64JdqtJVHD",
  "key2": "5NkQLC9AGWStf3qeoC5wxvX2NN48kAxbKWW3DquubNWaZXAxHCvNdgjgB3KrPDWbsBbGtjtwzu2gPtwdGyzzjgah",
  "key3": "63zrKb4BQkYgxV7TMeAvKYjtfG3xAmNPBx7aHfd3EnchTVQPWoDANbpZx1vxAABWfwdpMGUPBrm3eogJJCEj4332",
  "key4": "PD71XAP6aBqGEFyj7UcYEs88PxaGdRw4qhkvkmWasz96stD9fcjdiJ2xNogCad9TViofvu18p72S8FtSFrb32qq",
  "key5": "2CMLPmr71E1qZadJNh5pxcZ5DJbdwEr5qrB5aDiCr9AXyjzxFVUbGfEGnB7en2zv3e7t2YJZKBsZC6rMvswJQQx8",
  "key6": "2Q63668j5CfoGtr9rX8YH55NgNgsSbFvjzy6niLBvMmewof5SgegpUV9ws61yBZpJeQNVK4B1aN3nHftNPPW4hyo",
  "key7": "2xoRUkBNBM9stWWkgwFxh1Z6hpdW432Z7gSMvhB2tYzsgJZLbkq3mK7fYLTCdqChRDkgtHoRqkKMPoe5ASHHnJhk",
  "key8": "2rYcdMe7PBhKAGxycq4Zz4nCGXsxy95nT4ACgtPfqRsU8o9x68CYstz6r6gNuSqfr39tXeVqGBMHwdU8MhPoZmwR",
  "key9": "2wCmbDSaSZPNgwSUfmM2EA1AXfnHuN85r4A4X65kBkfG67HofhQCRratAzutuhWYkYPCKnRjbk4EgKARgh7BBHUp",
  "key10": "5F2oKoEBsVgYUX5UpSPsdnEtkEcWXRZQoEnLsY3xmcmfp76mRkfFgpvfQue2mgMqCvkAAmnFuYwJWKjb85guHs3H",
  "key11": "4AaVcNXbDg25aejYxrkLCgiCv1CdKQUJjUWXas9JNc859syQLkdTRvfHBoCbgZWAJFV8tcHxfVLJe3Kco61tshji",
  "key12": "PKJF5YTXVr5ubLgk4ycjxEnDp659AyAKbox85a7vmRAfS6VcEd1n45dKqp4ZMnNWHpHcjisTmeryiFQjRTGLxt1",
  "key13": "nStJN7VxiMfdWcFfTEZFXbGcztvKBExg4DLqySEVDQFa2iGPdZGWKigq5k4yeSS6drYCE772k7v72146k9H5XoJ",
  "key14": "411RMpxr3oG7Mhn68xxvU1M75HhqAsST9RvYDuCKhcbTVmnBkJRGovN5TVkTRdcNBV6LfTfqojGWdxguUwn3UUg",
  "key15": "5o6tf1xbn29iYAR97koxQ29sd2iLeLwiE59QpNfUkH6VyF6N3xF1Ptp17SQE3SdiKtDCvncbsa9VN214FzPwabvf",
  "key16": "Rwk5nMfyJgmL8unThX75owH1v5kpZwM91KxQ24F9TSYGd7WKtjkMgpTjawgPCVatmLqAVsjckVf6YFuLnUF1vEr",
  "key17": "3tSWqncLfb3ybfDS8wYdTnHwzChV9WgRKNzwugCNumYerbqi7bPnbYBg4zman6EHsGgp9g7B449dmm3WExatNKcr",
  "key18": "4qxwFppkYpS8Q8kHZsepZeiNJaPTdU1sfTZRKrGFCuBH3dVdFKp4hFEgYC4Y57rNACQ62rXUgQMkwKfccTi4UA8F",
  "key19": "3euhctMUDqS5MYxH7RfxzcwGpuuuuivALc3mptCb2ahuv9JDNiYrCsZ2XK2nPJRgeMt92dNN3PqMDBx5DrdpQrTz",
  "key20": "3TmBgHAmYFYicsa1Rc9TPiotpsCkMFC9Dx5n8NtsUD3btWwGwaLWvqrmGX6HpgAmftgMQh2oz88d8wQM8FdyMKjr",
  "key21": "4GF3DbFreWRzLR1Luue89B5tFc5XYCqxLJJiGjEpP1YwKavtLQt22KHyeSGHS86kXiRbxpEm1zvXyVAAp4LYMUw7",
  "key22": "2pJfZzzGYzaZvj6GGayGUjAt5Tea3be9FqZSvCoor4oUY3qrokduR6icTo71TNCvWsjNvWPe92Pt5kxjVP2zTaQr",
  "key23": "3LUniV76V3Cw9Psm1QKw5uYhy2suAgChR7kPH4ZRRD6L8mVJAX7oh7M8yeYrx3fRiegpEg4QmEZga7L811Gwg5Nn",
  "key24": "5vxGMYhxM7cZWHt3KHhxg7L9cnYc52akF66291baAwaR13P9scz1wKRCMUbKYH1cFNvZiyMMKMZTtP4xs3vF6irX",
  "key25": "4HjiGBcXpt8yue7N5Vw1xfjkfirM2EJsguUERyF6RtFc8gpBzPbETKtmWosXQUxC5Sxn5Uyv9FdVLz5jdSRMAyw4",
  "key26": "34w8wcX8xddC4aHwQqJLyK8A6pjJWuZneoD9jW1pjhMyrpEjN48N3NdzfJyDjqiB9LRFBuYT5vqJ1WvGT83EkCJt",
  "key27": "4vamrphbWTTRTF2vULcKJ8D2qVTR9sPLSVBM8y2yqaSo6H9f9bArmgq7TqMJsxVxSavmzvX3Fx1z7TXhkrfgkcRY",
  "key28": "UPVrSc1A1ZF3SjVUC3bjTyJXmKySkThK3yrg1dEPYzezd3Q2yKn51YvukqYZr9LJJGoejeemv11tmcFPFzZFdRn",
  "key29": "5se6cpNmiW2aofdJmWAZZyc4ywmDNU3hhZQhHy8PyexAT1Wbn5jaMcmhdmGfTukR11ATX4iFiaY7u9cHtWxWkMv",
  "key30": "4g9sATTxravW7GqjWkXdsCVTm81JVEfDDXgFxQdEDEfrjRCX1TsGpzyjcB7fPTmp1ddviCh3q7TnYPoC6QHo1HHa",
  "key31": "2gSZVvPL5TrppPHb25uHp2LnjUsR2RiFjwUHLvMaq6GcjCdDvhzvYbYf5oUsLF2dGba7YmoGLTnTvamxpMpqgzWa",
  "key32": "2LRVTn6QY9HZhyZivCxDupkTiaPB3x3oPisqvZ8EArsRdQwG8ebTco39UCGzCZaQ7YCFYpqntQMNevwTQQNyWW4n",
  "key33": "3TPzp2oMuk49rMv7eq6W8jQJv9pvxqHM2TnjynY8d8kN9BrzafiCoMF8TNkxgh5QBCQJFNFNxihPEX93aqgLUH9Z",
  "key34": "5TBvSGETTpAi144a17EXriQaBa5GHsHxFGDiyfQNaY6ujTEdg7Kde9CpHFB7uDKV3uknbMwERpia1SWtuXkgRQaw",
  "key35": "3pzaK98JmVCsMTQ4M5pcqsbdurWNZRZ8atyTAUoi525WV6pKsYZ2S5Yg3G6QDmVMhgs4KN31jEvBDCTtT8ay2AvN",
  "key36": "5mdmAvBZUMgEREmAiK7emcqLtfLy7Z6JwvoJzLcBCbjXhrJK8Ed7byAMLdNx9fvBbp91La6twKuMFkEUuPb6A3xi",
  "key37": "5b3R96wYuuXaPib9kraqKXPo5PwhdE4BjZFp2rz44tSRsv1VZmBZUd1iPrQV5L8Tntt4b5iTP6h6nFqppGwCdyE4",
  "key38": "2HDsNg3uSJVhbDjxRgdCdJ2Eci39dowbeJVzMvkKz9ktBohpxEoed2feZRb4rxxQU93CBAjYUFLoP1VveG3b1jNx",
  "key39": "3nQCFfoCqKdHAp9iwDv3FuWzeUFoWD8s734dA95c2Dpo37bhjXunf5AY8wBMktMQtkfutp2HgccvhMyuEiPV1y6y",
  "key40": "2f9NhbvgX2epL6SyWQZnepDcxKoUye9JTeCS3uarvmwirkdX1ucwqyQwxq6y93WWeHqGHSKQPf1C6puQSe3bUZ8r",
  "key41": "3WmogWjXDK6VfcQrAfguYuUe77tZgn9tWMwsEjaJyJRJX5CK6uU4wpMdnZyNo69wEEMrhbxmLAQVkgqQ6tfpYnEA",
  "key42": "5HxEU9G6NJnANgXFFmDy2zw14A1FYNyTg4yM9WTtJcBpDKgDvhgELpX7AzRmK1TjrfXBwaxGxRyNfpp8cVbzbe3e",
  "key43": "2qiaexWopktv1UF9DoCgdsWg1HBgqUZJfrxjV7Ar27kwV8TTz2D1Ev8Y747KoAA9JQXHQZ2Rk8Dhq9sSW7sVm3rr"
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
