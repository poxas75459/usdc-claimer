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
    "2awq6EvekWmBxjYaqGa4bQJVKYztbNamqYg6VRTFCfYnsB9G1wDKur5oizTvfmzBCZCpUxaeqd4B8sFJ74u8NM87"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DDQE4d4JL5GoYtcsf9pzahpWL6kfFaDr5rndAzDC8DezgAQzQkeNwQAVZ1zpQgaqwfE1ZXrVuSqyPSd2wQ6Hjnh",
  "key1": "4CadiFQdHAMygYquQhwAkTRZN7m3Nt81ZEfmgRs1Gxhg93Wyt8u786XVvatot7YCEKJnhNXeEhvAyUyBSckoqpJu",
  "key2": "4UxUb5U6F95e6ZKdzyQZdnkQrogUgUtuCdN8tfuMwr413PzgfKm14oLY4CRRK2fM5Sb149Vj8AXwWtCyoRWfn7ab",
  "key3": "54WKedeaUy6rLExHD9peHew9H5LkVkkBEWXfQriaNCHKm4nst4TprgxznZhadCuAXTJV89enTM7h7UFXTb1i4ykP",
  "key4": "4rDU3M4rpZ1vrxK4da6R71bFbvTgDzM7p9Nyc38yiD4nTU63jAn6UFGEgVn3SsEALtphnbnkTGtkwn9uDpycPFLr",
  "key5": "RWymrXwsiq5B1AE9Nc6ejnbxPvnvw7q6VD8cKaykeY6bYNs3iqpVFbhAHKPws9EQbLhGJ1M9GXEVSWY1UK9YoB7",
  "key6": "5p4NpqduRCyfdn4Fr1TShowaTbP2XwJHsAMEhE8pHVfTnMk2qWSHCv7zS5o32vAWFTUQuABv7paSXwpRy894pJK2",
  "key7": "5rkPFWJt5X8k9GkbVdcJteWwjCG8sDtmBkBvCbgLf2t8pJPoEZoY6Mda3rKm4B5XBe3xWKq59Yg8cgvkavBHoYiz",
  "key8": "4jtxJ7uKw1VrrSDDNfREQn1UMgmj8Gbets8aLxSagKqX6C6UJGUBrcvvM3XLL4DdtpQAmGoiJTxCn93xoneNwbrJ",
  "key9": "3iK4cmg22Dt1HNFWXHS8ihEPFTXhDTKYfgYU7M2QjD1cwg36L9zYj5aJHhPYZVFfkhxzpG5gX7WHebKPqKkihwsQ",
  "key10": "3mRuPSds8RPTWTcxxsHgRi5hovMWswjD1eMEZTdPeQESoNW8APZyT3HkyyDrebSF2GpuvDY6HNvXvtDFT9Ee6Y9a",
  "key11": "31PQnD2Zi7UgpwbEcFoJSHVLtLifR7CrUZjggW6rADQraE9T5UKZA4m92RMMhWwsbMQTZgw7AfEwTabEzAqxsSvm",
  "key12": "4qu8KLAUY1DQBHiby9UaLVqSS83oWAMaUWr6qRn2pR9A34iVSSeak43aGaFD3CwfAroYY3WYKffvDB7YJPVCqfTc",
  "key13": "2faY2ZjF22Cr8XP2Dx6Lyvi42z6auGZikqvxSEAdHQFNeBhBfapof6oDmetoH2ma7HBvUqJbyeStWgTuR4AK5Sdb",
  "key14": "HJzRx9cD8FsneUQ8y79BtcyYPzTbRtvV2PAAXykH7poqg32RvypT3JV4pRC5tD5rxUUoy2gjTusJsSUVE3T75NA",
  "key15": "2RXvDZa39JLVerJ6RCocWN8wK1VH4iCWDSTcvKFunvwXbxcrRvvySfjHFS4ou8ELRTSQT7X3qPB247BDjKUDw3ST",
  "key16": "2Ga7mTGCUk5cpi5pBUvyP3tVkgqMrF1QbCLfuhTdMSDoRQaPSnUPzPjtchgeDzcCzbLd9hDMa1P8fugJLCvdXaTS",
  "key17": "RJ9dVVm9FiQmWLW6pto4ZpB5RCLge9SuAT5YjJDZxt7kGDuNNZhXdXxWVtXgxcNvYdTBpH8jhADoirSXPbdJXAp",
  "key18": "23c4pG6KcokJXqvV1SzB6BrDwqubgyEYPggbdHt2LyRpuDQgjnH4nL1ZJ9bFecNZbWFz7JB33HAnVK9JH76kmyWo",
  "key19": "2KtBAJByrZ5wrY85CsnzgWYTvxTCYCq82Ypg8YcSFkr3sq9mbyYGsCw2DbPzMfdZ7qay9gcpW4wVHZkywxUYNNpv",
  "key20": "QGiXvAk3jFQ5gtB6WU6yKY6Y3NxgcS3fRqi1YgzS3H3VofkSahLggoGnHRskbHPWEx77p7Wkz7BW5ZVGZcTthxc",
  "key21": "gS5CE3PxPfwvn5EuPppzNr7inWaHQqNNMgXxcT39dGJXHdg3yxwSKNaHZvhD6CNwpK2wTySbTBsWXbvWhU6DKv3",
  "key22": "4kaVC3T9CcWqwB2UpZtbJYPP3f51fAz3N8LgeW4HX6hduke78EtoJ45W2hn1MoVLUZj9pFWABVr7VM3yJozfAHGB",
  "key23": "3P3UH5A21YPXFupAhtreicyFqSFUoGz5yXtqhjYSF26VQRcY2csbVBm4rmB6ZKvXqPxot465tuQXrPANjmLkc6RL",
  "key24": "212ZpwZvjwKszMFdhphCLvZHMtFePxLri48DWxVMX75ZwbALQxVFEEQkEwW1znjUG8K1tDbKfp5xWr3MUGTv1Jha",
  "key25": "3rJ1RSZMGo5UmjiEDE4K2XZhJtGfsE97kmPfwA2f6a2uLyhRp713fjAvkzpsigFMdxZUwubJHwjnmm2Q1JPKW1o7",
  "key26": "4dYzP8DaVs9qT4h2FLooBV8csXy3HK833NXG2zd69Jpd4QTAWssxpYycsMkr8hvtU9QWKQzhpgJG13kJgxn9aGki",
  "key27": "4bUTgiu7Rdu4J7ELYgJo7wvNTWQRZz21hJB3vBDB5BjuSDBwDeDKtc3xEnk8vLM3q91rGgRYX8CKkhZA13GxujG8",
  "key28": "42GQLn88LAMCcwTcnNkZc1PFT1ziEA1pJQxZRgLFJeo8mPLgQFiUfbgieAUKnwdDo9axgeVhHnszaRKMW9B4Yq2x",
  "key29": "5ryjAEkSe9eJZhUzDVAK2KgRhD735trHUuQCSzycPB1XCeQoqVRYX2HT4FcAExat1zsfgpNk1QWwgrKU73pXYZCZ",
  "key30": "2hU1c3iFo2NMLavzfXFk4NPktUtjaAfJvKmyGh2YhUz1XE755L6MUaE1m6vAo21vdcjuycM7YnnCnLAXw42iu9Pk",
  "key31": "55SJN3A7pMKH92unnmDxLo36L9LrxUfbu6LMnXZxrVaFagTmM9kkgpTexXLPZrWx6ZiBEMBUWnSSwdE4UmFagDAs",
  "key32": "5S6YoYTcefZBUTDyXfrcBpkZDk2CE3iac6fWz56sJUE2Ga15W9fkGq5He8u49yyQqbp8ZSSACVd5MCcTF8y5P7AE",
  "key33": "5yp3upXZfWfgDgi58sFKM8SMd6WsuiY4zejpZrahzBJK6vXnT1vU4fz9hByWaiwHZxQS9N7itf17ikZxHQDYeyvy",
  "key34": "4HV3BKvJEbHi1RBt7cy2d96R1dPe87JLdnm48CxvaRHPbFtnqrTXKuxvY51Hfo9os7K1E9PK8ZzdhhuEHuiMuNVr",
  "key35": "5yjdZcGhvXnvygjDhXAvfbK5jDJwyMmjNKhqJVqALJ8EWb2JhbJzLLjcogE1LpxVjj2UjgnuSMjVBvH66wLhLWsn",
  "key36": "2Zsz24Su6fC5ZavNRZFr2LiMMrmb7M9FWnoZhCx4kXBy6ogU7teipQH3MNgH7q9g4dXS1VM4FD7R6hepxDPsjKVh",
  "key37": "2tg6YwQLNRkSE8vxrC1nY6WKJFXD8BRTFRsfe15792QE8YD6ioRaZH8HNebWmCGTKtbR7AFXRfcdnkt9WCPPnuLu",
  "key38": "3JJ3pckpGDkXRXdcs7Tk4oWrXaRtw7aS5QTh9DFJ8jmtk88qXZ3VkErduhLR8Tc1Twa6ohRZKEXKRLfx4jPF2nhg",
  "key39": "5JY94RrWZU15tibsYiHXLX6PaiCewLLfgdZiymE76Y3V9VeLFdDPr5BseE6RrC2cF9HeDg7Hh9Kb8U7faxktdULK",
  "key40": "3asCxC7513AChUiXTX1fTTTF1Sw7H7S3qktUqmmjGffUFBo7Q1wncvtSGWAYBJ8RX9U3fBVmmGZBSCgYvLeUEVwp",
  "key41": "3niB5N1PQjWtv2FwTPb9mUuc17UkLXucMfj1WNH2tBNG3A1TmdnE86Wq65LNFGBJGQwt3eReaLDAWdetV7dXsEer",
  "key42": "2pbsqJgtvu4bap4G6HmQpKafriGUS2X3jcdn2uSoqsDaTwfhhwH43ZSS3TtxXhM3dB1aNRrQRvTsrzrfUaSYRKDk"
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
