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
    "5tSX8FVqYwFrDozDqi6KA3KytrqWSy7mAGQ7XzrzYxQ4BdphqUTdjfgSrqdupwbuopWRgzKCQS7Gjv1TRSyy81Ny"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jorjEYxpzV9VCMKYK2bxUwWQgqW6yvs6AHBrnLpF3JU97UuS8t94ziijXABEsARGeup4JV7jzgHS5aHyxEXmN2s",
  "key1": "2F4ojNZ8dfQpDYMY5do2F8UyUMsLD6qBeYjV1sFLDZ9JVMRjXubjG8nqFepA5vfbepbxvaR4WXyruh1Y5CPfHrRw",
  "key2": "63rjiiQMYbZ9Qj94J9AMmUFqX66u2jsSZvHsyAXE32gYiBJJr36mQgxQuTGCyB8fMA48MqFQ1Q5Es5sAp5uYPK95",
  "key3": "3FjstKGsPhzDpMoDqTXN88JngMQFTpFdbu4Q6VjmPuBTisdcZorrRt7fCJCYxVYtFMtZzNo2qp8dFz2guphwvbGM",
  "key4": "22PfmBs4CXWXK2vN85hYxTFKrwn5ijvBK8tYe11joWetZGDe7RM9t61v86qKXc5dCToUYkpYyoJ7qaGtLvxr8x1J",
  "key5": "2t2CuQc2EfWCcMYY6BLCaa7iCHrDEwFw8RJbNcv8zN1JzufL2gKmzkeViCDR3ZvJWpT7XAz5dHAcujeFCvi6qJqB",
  "key6": "LzBvimFCXuT2wrHxWLHR99ycg4apPZF7psdKuG787sbWLFYNsGHcFCQqeMjHf7KLRaDZ16bLfaDVEnPEnVpnDbv",
  "key7": "5VXJ5hqzdzdSrC9F6izDv8Ggbyi5B62HjrpEC5DNnT7U6VQueHknWSPfWVjW1TQmqZADniDxQQu7N9jhFADmURsY",
  "key8": "4XY1ziPzz4mxuSzV5wXCrEDtDuosRQipr76eDLtGYymWwtvCkK8tyktyrJPYAZ2AL8msRzwZHHpfip7j6EvBF1fd",
  "key9": "hhRSW7Y8Vi66ZBEc7vR2ByGeWFdhMos7smpaoBdpmwEiz5dBknqykbyH5ffZBfUjHpJAUVDBPYT94cbFEDuWpSU",
  "key10": "5jirroF9pqVrKFaznqRZNxqABYkki9fNZVkFSFGqYXafRaezdZfvYsFMAZJNB5T2nmMgS3bu1h9mXo2cuLXfpVgt",
  "key11": "3m6fBQDHckPHQjL7v28MUbhtabugqE3WFgnqv3shk8LtdKyLZF33G6RDrJ3cQcPcyQJFkPh76Da9eZauRKK6GB7L",
  "key12": "4SpQgA7eMMCK22Kmujxe58Qy9aD1EC9usaLYiidKHfFpDYc62Luczv4Ls7UWxdHcdkrxCdemPs2tyxWtPtrVUoxP",
  "key13": "yBZMTiD5E4ZnBB9HM4FUoXTbmrG4iGS4sgMxr2myTuNC6vVWopDXq8iuKykuuLAMTDVg1pu9PwvNontp6RvEnhe",
  "key14": "3VEx9K5S3jiNQyxN7CmjcZqK3orpEdP2doJ3CAsw7AtQhjm3e34wHvNSm6dyXybcXdcbrCdnPYpV5jLGi6a6myZM",
  "key15": "3WPwPYJBe4gDNAzxuRaRbGVvQi6gbFVRuWqJy1SwTfZoRzSvDcQQHLe5sMac2R7PCKPaaj615iMk8WyqYm7NS192",
  "key16": "2nrxsH8FQuW9yPLLGLV5WgLg6airauVsbVNUDxjHjdUKWJ4rmoHwJZGdDdmBnxMRy37YuUomHDXnoabMnYRZXDcz",
  "key17": "3FcaqKksCMDPRVQyW7PW91fvLF9ENBgHfYAaXoHCLg9cgMxqapK4UvMRPXUaooJPBcmknpyXqQ5QhEuK6VGqHGPY",
  "key18": "5unpKAJ3vJhm9THT396JN4UEpf8qo3E9didJWHkjg2FjGhdm53QjWcSWEkNukzxpVcugHT4YT79M3bRFon4fgfdF",
  "key19": "63E1qUNZd3Qt1wa6Pfbwit3Kc5PFquc8vMR4kQCZWdCoZ1v4qcAXT15fT2EodpYWBaZKxL3PrzJPhnhfD4QuC588",
  "key20": "65snTMXdMjnExfDcR7z9L7GS3rvcvD7oqodjeWqCjJdYLP1zsXjiaVxdj1dXmCCAyLeoDiCa1d1oR4cohZmcBr2c",
  "key21": "58eJp65bWqoGVVHfXJUigrsVLFnrghBqH1Aow3Lzh1pnF85jfcuJoDC6jnhC2F4ykaJrqNf9HxdsLSTvUgLyTT9s",
  "key22": "2QKuQTP7Tba6NE9RHvxmPReHhDcmfYMMRF4mXEafdJiocfevHHmNGpdsk6RMdXC4JrMFz6mweL3Epqjo5xwP7pW2",
  "key23": "BG9fGGVZWhEooDgeZz386wT5Bcsac7RE6iGCDphR31ZHqEwdKgn65Dm9dBMidDrpbACEeu5WmeNsgHXuBdYp2C5",
  "key24": "419Fvq358aVoZjB4pNiUkgUaGe3tfqVYa1kSbSfgP9Y8puWKdJv8zGxJ3Yt5eQyNS384FB5omfDWieTzgqwHTYpZ",
  "key25": "jmv12kWN8eoQDyzoKuNAQ42LcML7Uhh16K4HqrAfEPqYzJm9nRs9mgwhvViKL9jQhusmqWYuzUEJBt8q9mAceB7",
  "key26": "4Hv39RVXYv2TKpuiRHYkCfXFYd5FZ5SRF9SQdt6ECTJEiXUV8aFnv8TJ8uKwPqQAjriWGuRVYUSHdyhRNGtGeAad",
  "key27": "3wRtdSES9f429Vtd5etp73N2jitDPekTpbUQaYiLDdMRw7mRSFje9MB3vX45ckfYX377VLVeKg6Cg42SYQ1yb6S4",
  "key28": "1XxK83PcjD7D3dJ7diiBS8GEcZMT4FB6HtbbWLjPBVGzXBitQEBi51TVRLnH1AMXbonLKQYUBGu2V5xtv2o63fy",
  "key29": "4V2pjMXYkvnTcw1zhwovFoQyoi9JF85jD88f1cG1wFFHgaJWeHwouzJuaDURaP62Np9R3q98rh1d6GuLVDNaVsMo",
  "key30": "ZUXo4i9MnX1eRYStQpcNQPjdEwUF78Jx8vfNs1HWrMASAbwVUhuVNN5hsGcriNcZ5ReMVTmaMXeirKjyWVHDxsn",
  "key31": "45Hav5uMR6xafi2BPrdXCFTFuk6n7QAPWD8fL4JqB5HNZpezSpvbDTQ1hU6fUVbiJz1jLk4qc8ApTyooFjbuHDV8",
  "key32": "5Z1F2bGuvtZawGxh6ortYgWG67CSVyTcppe19WzzfhYb3CBtm4ant8arL8VGsf1VNzDHaQNvXHaye2qUrw5LEFiz",
  "key33": "2C7thrcFtAZrV4fX2YgPVKQs4rk3VYACbnKxNwZM2iZauVKSaeLc6ouC8mdRgwjSRgBW5AfrZ5JGn7y7gtEFSpBe",
  "key34": "2px9bQSx8ia5PcvtpSeVgeHhXbQrYnWFTp3G3YiLtYpaGi6X3HonZxgzcJ3moUF7SyCS2qmFiTwkn2UKeVKeS43T",
  "key35": "62cQn7ufrq7a51jqqVQjV7Tm7UW8is2TTJd1yYtVxEbo8pVeBwNryNKdoBPrHgP4jvGk6PZ96bNgqtqMUj1zxBKv"
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
