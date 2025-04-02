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
    "527jFtgozta9HHEhbyboctGRDsLGE4W53pakrLsKUksSXDgZK2AC1UAkB5m6UFPeWJCTYafbLqn7NHuDY2LXhrzm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37Ze9btGfnWAr7n7W7bExv6mhUVvYkMNDV9joXysgWY7d4GtP9fnP1vXhML6UrRCSv6LkSZh9fx5ShWLpeL61nvd",
  "key1": "3yngeee9uaFjXUP1VNzCn2PRyCBWwHPk6XveTu5KuWkuVavoYRBQq9sgFU3HKsRLr2BP1WX5gbv3gAky7k26sFZU",
  "key2": "2H9R349GZ6GvZFPo4v5EUTymwJUzHD8Nrsp85THebFdiEwyHTiKcw5H7Zyodszx8tVsws3QeM8KTPutDTGq38isk",
  "key3": "3qiTFgzwNhKDjpxZF3GKRnDwUz6cuEErPXctfgYFa3ac39mfwFuUxrLDEqKr2ZD2tAQRaKN65DkZw8ojLTgrnYKC",
  "key4": "4KF5io1RLkctKaK6qKPV7N5XwbwCG7j6MQ7LPLD3P11dF3nA7e7dAhcjHoLoRyL3KwBXosBdNbUPh2ZrFbohT7Xv",
  "key5": "CVsDeRTKBiocoVbXjcHSwzZQLyk185U6uMzxkJC8aX5EKHz8i7PFynZi74AfgMGJuzSUYya9atzbNDKsPM6XPt7",
  "key6": "5isMBdd5Np37JnJp3FdAjpR3EC6L53wx6E5JpyLSxVaSWcn2LadjTrcMhdjJGe33qcVrFPvkUEVrgk1c2BExNrWU",
  "key7": "4ZKopgJSfZ1YGUFnLx8BdoK43neK6XK8R8xWmZtNMRF5S5ekEVQS5hUp4UbeKCpW9uLpXfXsumYvz1bEJVEotRib",
  "key8": "3HSsDW9afwmAzLg15Shfm7yLcWtC2xt64DQerjJZUqaSWzCb3d9L6XnNQo6ewFbQRiEdBeaDjLLBEwuWQUL8pxTQ",
  "key9": "4gRmaQjiA2rS4pGcpEeZj83RRREmoZT4hwVcDFgzxSYUx29HoHDWC2dEghMLqDZvFVB4AQrTNL95vJurJp32f6V5",
  "key10": "dbGB3dg4KKNPsTJ3pyZZbUCsLP4E9AjpLqs5JT8fEy7tns2EDTwUWANdeZPMVuxqurB5QCkesh1yGFRkUVoQ4Ff",
  "key11": "5UEsGiurb5mdvSDqMDAsFzGtH5M1LsDnWcXMHB2SCMsxa9KkF7D2UFGH4144NDnVzJ1q3QFkz54Xp1ryE424NQDE",
  "key12": "3bS8Wnv7im4ogmmN1j5s6NCKXRDb1pL4RH9VMJjy7qxkAVCYWexQW4JBn6qgeHmhMedxpvexxuUN7UaBfzuXTVSv",
  "key13": "5gvhDjwXzB7Da3SC9J1PoRC8hXvNAk7811JDMHdrEaEvWtkY13W7CqNrEfMj2MC8v4oPiGjQcSAGn2zTyBHoPGQC",
  "key14": "3eG9gjEBJ3TPzoqxCpX3gXe6TzaVRDLs43wrHabQ3nSRG6XXJ17dXcLnBU21fm5VVG7wMeSyV8JKPVth6Bxdj7vA",
  "key15": "5Vj3pSHCmf38rvpwqJgr912k5GXpZFZrEkwLfxSST4SUz9TZGy9QgxEek733tghMtNJdBp9DYQk9iUr1BDCXJDvK",
  "key16": "3ipgswzSLMLXn4bSDABtfUJ21q8E9VN119RU8QJ58Fd2VzCzmXtgreTq9cG3WtGbmEkAxTdDBFn13oZzC4yPFCu3",
  "key17": "2K7xzQKhZUACSsYackS7y4EU7KT5AXtsxnuTqtBNmTFQM3nNF7YJCV5wpDg81gRQtsFaq3mWi7EhEpHJJh9s8TYR",
  "key18": "4BLAVaLHohyTabrP55YKgzXue7BfXZe7FTPRV8whUFH1wWSH7hWYH2q1EjTRwgxbTmz1Xz779seXyPNxkT1bvc4m",
  "key19": "2cEQRQpsNUCCo6r1YBynVchb1ZVGPhkqf5kEsoLZosvnv1gV2J6siasTtDitSsAmRy3DP9kFWfcuwbgyWEPUcFY1",
  "key20": "2s2TmFLQW6g9rkEvS2JHdj1BZk4oL9Z5PtdU1qddtETbgWH8pddzNhSJDbyhhAjfg5YcxxLQY7fbD6gs2Qb4cHa3",
  "key21": "5hcsmU43bhXCNUg6z2GyBviBSUEj8vi956k1DwiykcwA1LWVh2BSTSpaAcWLdZJBiuUAXUGMw5Bv7DaQkHLsoY81",
  "key22": "5UGdNB8S9WQiYFSpYU45wEcinCmTKfFBuQ6GbybnUeTQ78nWUPiVKnk4tfqFDRGmNVkvZb2MrJhcmHFQVzTcvA7",
  "key23": "3BbM9WPdpHjJYQJUNxPXti3Ms3sBgLoRCdB5ATtjzpMgUy7D2aUuLF8M6sbZ5eDQo7sTdY49C2ZwtNkotpKJsi56",
  "key24": "3qsnwXRVnN1iwjSmRkgQYMTPAcXwLSnctwvmBfAjK6817V6owUJDP1tBeRbd1peonYaubGaS29Bq21TLL1TA93QZ",
  "key25": "3nB4xfVuK9M4ZqRdJTAJdu7cFACiNskkbyt1aP2gba2HfC9pGuX7w2aXNq9znwnR73WEzkTzKRrz8hSK2vF3EU3F",
  "key26": "5gQt3VKQjdomuN7PWjtQKeZoHy1wg6ua6ANzLa43vx4jam8eZNkNut7kUppAAoVsTZDE9Y8Z5bAk5d8A5RSydiA3",
  "key27": "2n6TByuP2V3fyzr22ADZxLnevfspFHheyoaBtGG5pAvHk9NsRxaGovgLpspFSJuyy2zAPLNDekTbieNUtxGLPZ5z",
  "key28": "5583KbvBTmKz1VhX572u6qmwxE1qejsgFPCraxVNERCwWxhgRtFyaHMbM1qUzodUDrNU6oezWgkkKkqNpiSW2cnX",
  "key29": "2ZNma7AZee9vAQMhXoMoDnxMyCZ1N2zhSCQAeAk8vSUBiSZ36Hy47HJauuT1CKxqecnnmrhFdxGNQGGbNoe8jSR9",
  "key30": "4yS4uNY3Uwt8BZxsoMzyea9dszwiQdjtqhLuAZbwd78geTnEdaWz8RdsHFKoJTiW1HbwuSV9RtYffwyDvyZgsKEo",
  "key31": "v5HRZCHxUMYEoKBfbFMAmBcGuhQRML6UxsvBhb7YjBz2xN5P7u4aNc6Hsqc5WAZQR9zMJK1FRnNBtXsjVnKAS9A",
  "key32": "bj6picjBidvMxcw1gMBbE9hDxkW8kLtC8AHNorXgYNu3q1PQzWo5Fpvm5tai3WYpm2Fxj2XTvZ6CbzQk6GdiwLN",
  "key33": "4KwP6fMJaFGqRtXEYFneB59GrRLjJBAFbRi9FbBUViU8RBKRaSgcGYd3P5jdK4daqTbSx7JdwpC7mENABqEkdTHg",
  "key34": "4xbPFotK4R2m4mRfcnYymw89XxPGV8M1hu9YhSy2YDz5AnGU1W1zoqk5pYp4MPc6b7vjvMiQjdHDGDrLjHDvEpCd",
  "key35": "4KWHXa98cFTZf63UPYmyjUTZECpA6PraUjJKe42apaypRXQ8xRks5UB7osYh4mATQPtjBKUSFmiMfwqR7KHnDwpr"
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
