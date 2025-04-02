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
    "5FrZhcGjSxxGMW8TaDyg9R4Axr161aUvXho8snQXd7kCQNLxTbmMPGNdPzPVtgjNfK9ADWHnTesoSHnQsdfagT1g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hUL1FxtWQLtXcbx37PCwgcZtKSidv7FCbSg9PwFyS6iiP75Cc7TJbFzeEsVo7A8mEi6LFuSAiUVc5ENAakMSbSD",
  "key1": "5Va7oFtybKDwbTV4bMn79kCbYrM7PktpXroRPzBXHoe4Hp1GZu9d7sx1kmVNibmm4inKBmACGpBc5HUFgoMf7gNM",
  "key2": "vurPPynVCHn19KwamJA1b19KyeeGf7JNFYSGjPx93AiXZ1HzuHP9m1Y4FmTfQfX78naMe4go4P2Gra3SZHXoj7L",
  "key3": "48PkFVWDKbz7B8vennhrXXk4fCMVQiCiKMJFpoWHFG1xuURc87KH3wxghg1MrWhw19Gmx5excpMA1FnJk6wqxKkJ",
  "key4": "52nFmGzWrUjDXv7De17ZBmJZewukWiHqYsLT4W8NQqHqezQnBtpEyWeBWbjZ1Vox763fxKnHjDARUuUQV15yAaB7",
  "key5": "5aWb8Fi5Nzx4yoQ1s6syNyTv9A2ESbLrP2oFe4cbPv37PVnbuMF9SdoxKEvjgWVUqny8Bo8MiaxL4spVwhDeL6bC",
  "key6": "2vUT5Adgc3vGLnyGrPCChkgh6UShGWtW6rZ1ifnLMVvKyS66QhQuGKWkcnxycMpzCA6VAm3nnqrBCwNgKZzVTWHm",
  "key7": "27r3CBsbNRHssDrkYHXpjXakMa7SJ24A9ApYydQSSksxpJ8oMFbDwq8stqK7zC5yUnmSAxayaeWiZ7uq7gmr9CDJ",
  "key8": "4CuurTHhX6wabbTB8zi2Lbub9ZS37yKeh49fEBv7a2RGmZf3GRwaxM9gEv5g8tzfn55VjARf9Z5HBCFgh9q5jZjU",
  "key9": "4xNPhcdR4buibetREmVE2bLoC2orZ2MRseSBJZkhV4bUEseF6u1FAdS3SVuTEAEN4fGa5sHPceKrWifs2NnnUZMr",
  "key10": "5b2iomcNLPg3oMZ7LCBaaCtfTS4BAEKC3c63BM9vvAEN9K2duGmAeo62Rxys56YAdHHkKvcpp9MUUqy2L4eRN9Nc",
  "key11": "2a2NayvFSxZ8cXrk2fGBSHQ2VJLJULTxzkBdhnvJcPPvVhg9CnfsXgRxyQYmq72CvzZmst7cMQJZuScBneqrSkXv",
  "key12": "2pXF7DwFXhntjLamttdZHyCEiAM12KdWPPSEzyfFkWr19VqQfYNeXPeefxcLNNYoHaQYGNRQR7TH96VozkkViLoQ",
  "key13": "5wrXbFYd3ujX2RdrCr9FwnwwcnaxoUgwR2oS1NuuCcgDw6pRMYxk82i4iMn26NJSBw6pHPkjhk6MhLwo2YzQoGZD",
  "key14": "5xGxeKLYLh3Wx2p6tGNqti8FqAKHeearjyTqTrJqZv3NUCHfCKQimfpYPQzjru6GNsXo4eMjNAS5M7muQmJiwVSy",
  "key15": "2SNFRKBmnaBiPR2nMCQMyiHJMsPRW3qW66LX2nAmMEhLunzVkHtHB7LUZNr9jkwzv7huNLLn8Rsd8BrnVdwCXPtd",
  "key16": "4rZ2FFjTCtxxhBMTT6zXKYUcwuBuKXQP4s3BFtkPnZZCMTtPaLDptBEPgzi2M3R3q2yz2UaZrNHGcAH94LtLoNoF",
  "key17": "F8hoPW4aYBYKpTV9hBQx3pA2LmxjnNTRyF17f6N8YcnjwNTfHvnW3yCjhSbLSas73pZP2m9WDxjjkYk7nrDXwt3",
  "key18": "2bH5EgbAr3NTq4fDSGZy3hH79W16VNa5Qm2CaxZMdnvV5mvzxBgSYZs3znV3YyjdDVgLsA5MHU1GePATDoNN6SW9",
  "key19": "5cRSLzmtV65b2UyWsysEBgET9Nv3a9P4iYywEeUvYG5RXJqUfk6mFrgzHZAcZDC261LipBDKHQHJCJsMWyHDrG1V",
  "key20": "2vjU56kSUJ3WCQXy3tJTi4QMxv5BgemFjjJ56TuR6NoaNtraCu54EnTNN5oJTMXLiezaJShPLGZXH3jN8pp5NYf",
  "key21": "9wrLaHG1KezPNTuBH6Y9LE8fMZwfXUjEFNzaUYT1RUojUZC9UYj6NvU6rBGvapqhR5rFDSBwoHxKmozD2hiX61W",
  "key22": "38GBpYQAFSvTBSgDZiCNayJaa9C1PKL924p14fYHbUhVSbfVkY5ZeRRouKayHCnbBwJhzuBapULWZGfJ1cEHygz8",
  "key23": "38ckb2L4BQCTrHXWUHvZghnSb8XnnSse3ruMAErKEggk5zEScDXkFhi8i6EgdchkccDzso6NsjDas6ccBfn51HGp",
  "key24": "45azJ7EKMHDtecRTvQfSewtPUZnNoFh3pkiJdv3pS6d8YLYE5qqy43xwjQbGtjecfcPi2kGayDjVa88Am1ZUggzi",
  "key25": "2RdeNq5jxovBb6M1V3KBa1hsn7dJYKnYjPbp5KSraN44Pxn4qw7c52tQKFWnUZjdtJmxkQGybWCuRmVVzAzthgS5",
  "key26": "2DR9sc12hG4DQ2wTLK9xgcBV2oa9kb1qp2JUHSv2uGjSJQF2KAdxgqyaqmFtQ654KAUHpA2aBLPtJxxwdRxfzrE",
  "key27": "3DchU3PawAgfZbL6wkujUWdzYN2L6i9HkZ38cnkfvPgFVGPHsEP9RbNDvN7vYEDoKkXmeqEdm8xUCxfY5pKunvbL",
  "key28": "5zvUHVqyG4swjWo63D3nBbcYBphRb9KmrL2NxFrFjQkZQhHWdNDV59JaTMkhyWvhoRKsFxDSi1kNPeJR9cwL9Ypz",
  "key29": "pVbbvRsayRPywg2vBqKBT7pgE7ZvwjbohWNExG8ceXXs78Fey99X3RiiGseK7PB8AQ6Drk5GzgyuisT39Qep9wE",
  "key30": "AzQcNE1Wfxe6p8Zjv3fkiW3yKsxUmyboH7b1w6zAM3JAc9hWDrD8w6naVGVgVx6hHZNDPKJsjMqVEVFtYzAiEhv",
  "key31": "38DCsm2dKdiGMiNnnNYJCyMkpbyxwddZ2MBqxZEHTraL5cf8CbNqTSq25wddTBjEgAcxmQrfHuqS5rucA9KJ6qv9",
  "key32": "4CdMn5E9aekWxiuvdfDa1cSJcS1JTbUzbC8hA347jrjJPdgCH4pCnCM1bsyvzhwPk2pfk6HXMfhC8DPf8R2BKb4G",
  "key33": "582mPPbhCKsMit6u2Bjs7Q4MxC1WYBASGfsKX2ihewXZZC3nct9UQoZAwSRxycPLkbQjknYoUFkCA2ttPn6DvJy1",
  "key34": "4Q2Xku8Z3XkvMsNy8smuUnNitV9nAG8sz5BGhdykkyQQ5rFBA11g7XN5wCVvbTZieSXdjVKAYcd84odPhuwZB9XK",
  "key35": "2EHUwPwnABgYEPFEt4LgeDvRNo8pXLi4pRs8izyPk981xCheujumF8CLcKzuniG9BFW1nvzhyHjBevsQsBzAwcpm",
  "key36": "4JGxYSrdzVmQ7yTfH2qvbMH1AbgXB5gyJmJiMHX7cPJecw4YANccpdco68oE3bqZHq6y9RzVZ2EbTYPuYMJ3f19w",
  "key37": "24MrrgaJMbT598JiaX5p9MVRrt7G8Nq1SLQe3QTMzN14Dc2SE36BjJzGpvi2yq8Ve6pydBvBBbZPUhxVSNgyDnvu",
  "key38": "5UM5zeuHVnabZoyoCCb51F6X9sZXWssYVAbe2mBL6jqdvNhbraWay3VDwURp1d4rh2fwzjYxp2yeebBdT9J5CA4u",
  "key39": "4wsXidqGCajCNYPJuJx2ba3uLLp67Q5GyEfx42v8AGPk32YF2ctoz6vuT8tywWrkBGMG2gjkVuvuF1xUfNeojehM",
  "key40": "3xFrNkAJEwucX5LexsTLk726mZzPypUnh8sA2gWE2Cbm6sH8qEbwaYRs6zxpT74GgaB9qhdTLr2iyrnUa9ZgS6Kd",
  "key41": "vn2RQfQCwMJXmo8N4P4KSVFh34DGV4sGNcHUY6n7Pwzn6egZ5nW3UhRxtt2e3vnMaui5h9Px8wcP9AcbcVbjfmj",
  "key42": "BbCbNqoJdzZuX3CyEs3SU8EJJybjbDuomnkHqjPabyc8ARy7SxoLSusUxWYkpRkvQSuGzVMFb91iWTYnrekvvut",
  "key43": "4ECiMGqURPXobSbiojMsErNGmVMC2D2CStrCvEH9drsbs2BJwTeeraeTLZ3z4oiuv2RAtNo4fYSUW2sGx3THUrri",
  "key44": "5cSTvpiWHAPiC6x3ibSxEt1wwvYKAtq9w1bmpQDfppLuKoY2Dyvnx54KFBZrStxDeUjowPqu4p4YjszobQ8Yxk3o",
  "key45": "6355WsCwpRpgr2krup19oRd6VX8AiDgwrWDHaCt5LfpMkHtf6gyK76wNnuMsQxmyyjXENttd414RA6HbifygP8ri",
  "key46": "qNaTtKZskym4K3VgaE6XLdMAtszAVBtq87c5CzenxGyEt5Q7zPncYZHcUZvVzzm8vuobmcZJACQkMeDw1rPiYtZ"
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
