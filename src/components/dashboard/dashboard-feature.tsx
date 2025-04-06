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
    "5sFAjRF6CaZNrdyu6DVQGiQUaGaBYyHxN3aYmoWgKBWuNLXM9G5LenmtkWwrGF3d4ES7BMbysgmpaeDd9VkgB2Jd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XLBohGC3qfgyT27JDtemf6BxTUs6UGTWcUPaM2wPosP6gXFEGCA2JqxWryR9qcibL2KA6bQ3dqodFfkHFpqnyMQ",
  "key1": "3NhQJNQ32kSKTyjH1ShFSbAE6vpV32i5WtunRF33nRZWfL2EckjYh335vSv37baSEJH5VbqztFNysDFccEggtRyG",
  "key2": "3XXbpAWJakm3Cite3mAQrGSCPMtpJdr2sdxfe8ZFimsWYuiBM7riWrYb1z91RNsFdGfEasCDExoPahwzTS8ao45a",
  "key3": "3NrgZsVeR2c3FR4GMipyF6kmXY4yW5h7B691VEa5HkxjaveN4adt4CBqg1Hr7Zhq2CapsyR9fRVzzywTwS3mted3",
  "key4": "4cFnWegYEywWgWnRP5jdkaTrhVnSopxX3Uiw1ymaetSXznoB1wMRMrPZvwBAEUe2YxoFmSNtYxBva8osyKxzqkYm",
  "key5": "4eBgibxksDqwipS3yM9eUXRdfKQUNPTw9pcbsbWoyQ5PZXfNMdVY81GePHjtn7NKRM5GpXynRvShwuzDhDNNHMND",
  "key6": "562DGhyCcPgwtgQu9MbgBTwX2aJDEaFhRQyXcdntJ7BXbAJ9XZDFk5kfGxZ3UwgKTn8S8mhGdsNSxzetj1hqqtQX",
  "key7": "5u36WXhDTSkLxCakixr8A7zFSKRXNYuqXU7hfPWvKyYDjMS2f2TEwPBdLucuJFMVCLMToT4CMKtgbrMCuudUNNXE",
  "key8": "5kK5vYBcZui2TCYckjDpVZP2EQBM4LmFDZDCMETC9mA2ZnsBvru56Kxs4uUd8TeDkqcma6116Mz5xmF7utnBPwam",
  "key9": "3NQ41LRSvrYaLmqdu9MHACZnjYjBbqybxRTyunmnopu3a27AGFgwXZDNehMWrWXCDGCvjWQqoLN9Ym9Q2Nuf2S6p",
  "key10": "25AU7ju8Ezpk44qxMGnkPiWo3PuHHaHr7XW6MgGUZ4WFeuNjJHmCmhu24nGu9LRW5ipQf2fT2Tqvj6JP5ViPNxfV",
  "key11": "4KjdvwPZpZVW94ETBauqxKS96mZJHVM8ERmMBVdCA1f4FsnYG8FkoTaXmBTfVmk2AB5GZdnUBYBq6DHgnadegARR",
  "key12": "4tReHav771ut2uBVSxzQ3FD8Juwe2XmUBcAS7x5A65PnEtZFwu8qsFixPwNeddZndgXSh5Z5viz8MRYtksJEV8Uf",
  "key13": "Nvdfapef3BdEu6NaRZzHVicnuuw64WFvdYkBanRZ2bP97e1bpBAv3ZXKYoXQ7yaGeAVCuFqVBQToQMc3oScFxiZ",
  "key14": "4Rd4r5ENtMJQ563vv7K9sJkFq6TXVYVfEhy1tTLX49vkdpXiVStb98nYwFHcEcwXWzEoEk2jN77quWDPSwzbyLyp",
  "key15": "2TaYC5mbnH2ap8aByxWrtHAM43EpyRkb6UJ7P5QSSXxwbDwdb8s7saF27PpQ6neCtLYNRTEnHXDs3apNLoPghVrz",
  "key16": "22AWZTbyiTmJGdQdzgopsHSbaU2xoK7rgPrgqec9hZZMUFxFTazMpJLcT4Xy4Umiz2N6V1wmV9k8S2qLuixa5etK",
  "key17": "5rYDTJYoeBHbBvXoWcepx915uuwPa6eV5uLoMWQqHCZdrzHg857hy8oc1SfUwydrfC2g3hcpDz5SAxx6K3TwnVx4",
  "key18": "5sMdobnNLhnTJxZoPNwMJ7F3ZAKkkwhFrbLiTj1ysxgQVczgBFg74Smqav4Grhbf6adSJBmq75nSLnMQ65iQrBRa",
  "key19": "3cuuwLYEvZ23EzP2Y8TNwmaeC3xfa1yvwCVroeiGmkwUC4qxGiLAFGg21qo7Jy7Ft9RsHeXeB8deCcNjwqDyYZzt",
  "key20": "42xeZvLqw7dVj1atRMtMtqKRzkPEYcfvQgd1TWuXwNQRVxZGUgVncuekKLCyuTHykw8yNtx9fEtwCJNA9uhdY1qz",
  "key21": "3cBsitGhGJiZoJjX27qAUywBxbEu5usZ6LTcHHUWvwmnafHoVzreRRYzehJCMyHGERUJJJxVXgp66xLgpofit7M7",
  "key22": "8BJGcptt9RXzd2GcuXiK3915urnPPkyqMiynDCthcERc618xVLQXFwcAcXeY6XqypFkjgkGkXHeU8LyVjgUXp5P",
  "key23": "3ufrBuq26ySEEpnAkYrNWxms3zGYUzUiQ8N3JQQ7ieeEKda3A626mimCvusufYL4NGt9mQa2tXWQ4kx9guTJ65k8",
  "key24": "5VEyd5ebhXeP7bmzNaHjizR2k4dmqefACxtqvZey5JKxJxcS7yHbYADfLP7ujm7RzQJ4Hx6dzMXVVcBe4rAfdZCW",
  "key25": "ueo7mJXq6RRXqyutTup6L6NThqNTqBgpvZnMkXrQLn95nun8SyFxGMiYDMHKTKZoUynTiaR2yZFWHD5utuoQjvf",
  "key26": "5Hp7ok9Rqug7bdgcoybk9jFUNVK8v4yvMJr1CSzbXz2srjD7j6MKFADJPc8kxcRopLkvVg63AtNDFeuXmaUZPSLJ",
  "key27": "2mAU9dm2KVWBF5EvbGG5XPjU9X73DNZSwzzvL9K4iywATbwymVaUPWJou5eRNKBo5D9Yd5xrZSrj3xpXWFawBbNk",
  "key28": "Nqou81xm48MMyBpY5hp3zmdzWZLz9rsXBQMec7mXVjFQkutoHz1q58u8E3j9gF3pZAZe4Q7zFi6AuT5TGRdsULf",
  "key29": "5usdtzzuWU1rJDb8bXcauCnzFooSS2HPY2uYEhBo6cMyfst5zVPgspbD9fhuU6zMP9vAxgQhiZbckgpcskWgtbdD",
  "key30": "2xgW4qBAV1BdJC2ZdcsxR86ofLomTPQdhP67eaBfkAqqTftcztbD6E1wfDtBNiFYZgT7wqMpCKSapnX5yqFNMHn1",
  "key31": "4CEasspzqh3NPvipxwnutcEVEiNbvUjnMuzEAGSaCapTyBsYzF6usPEtFr3aYsVJC99wGjuDUF94QSmvnMUDfv1N",
  "key32": "528WdcbBSDGMQiBMV9vjXVQ62Fm7fgaUicoeL5BiLuMRcXe4EBGokSZBQJh6ymVUUaXJyZQBXpCrDnmThLgcc5fZ",
  "key33": "54LHut9ytvv8Y4MfJnLjV2LxG72jBNu2znFoL3WHKQNm75MzHLUCfwdufVXiGqxu11oM8q4byh56EiarJbRKsXLA",
  "key34": "4oquGYqZhiyBu9Djjzwz4sjyK52Wj8Z832Bz4ReR3pQwK6QR3423jjJ6PzcKa8Qt3yEbDAQGvN1HzXQ84oVe9jBP"
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
