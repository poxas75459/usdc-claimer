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
    "27eiu4QsBVvVUvCK8Vdu4m662y71mosFzDPdfgiB9yZCGjWenQRfztKtC1Px8TzSMinPSE9xEgwwH938nFtBypfM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SyyRqZLC4kEecdLQyAiXL8xQujeYA7zzhYwwxn3SJ62biqrjhGuvQahguGVxUgKGxJUn8CA5GuVqLPAKKYYPQAQ",
  "key1": "5Xmi56raLoAXQevegLqCRN9sJ7dYm4n8Lm5NRMPALVLeasRhLuzfPTuYFVJBTyewuARoHnZLLasb2rSie3hyDC8s",
  "key2": "bLCDvMfRBbbVtFsxU1HRvU54WHF2mQaTKgjRTjgqzpHw2Beqh4LZfjAzPWSrsFUmYCUqKrxB5cjnqSkJrwMHphy",
  "key3": "4QCjWyYgPcqf5za69PEuech8bdt4Tzp4aQYN322dW3cmtUWCHPgXf6WJZEVQDVZAyoRcHxJ3gNtB49SrMbyroY2q",
  "key4": "5SXe9e9fgs5XWVa8khToLXRM1ViF8ACBMJX4fVYqCK6YNFdb9cdYjkbBi6s98swQ4HGZEpVVt31qXRBg47DAk7ku",
  "key5": "ECzrrpSw9JDYU3qmNiWNNxDiFLVxR4kwxdEpWDMsvCjDXS8AsqLJ8BpiJcZhVf8pKL3tTinkgvbeWefksDvpxny",
  "key6": "2MEkQsYb7WG665CYnBrKnQF9owiViJyZbDxwvNeobnLt9vWzWWXHTgDj9F7rjhmNf9RU88nNWsZussMnTTwaicUV",
  "key7": "4q5sQpqcdinGAgoZAVgmozsSihYvdkw1HCL9gBmhv2z8n1B8r9oubswwQ33FWvYbzLmNob55tzJoHeSW74ncd6gm",
  "key8": "32mvRADusuuD3mrEQgAg1P16YJS3ihu3qqZAeyjAsrYce7jJdAQWaeCREYJkHZQ1vueAWXgfUwV1VcUGvzH3Bnq2",
  "key9": "2g2kT4dMZnMFjYqGTKvKfMk4w3GAKFc71TJ4cPBebyQGhYV3uHcmLPQRHDH1JFJWq3sZmECBiSvJzzU6n1m6fK3",
  "key10": "53WkggRAhSh3xqWWFuoX48xz1kfQJPtPGt8j7iKB9FgeqeVBPUK43gbkmQ2QzgT4PDoZtuBqGA5KuBkhCvnYVmYK",
  "key11": "412XZeqBFRXTQQXKBk6XKcqEadF4U4bzZoKpccWCNnUKh5ha9hrqSZWFYodVn9rEBWmdBi7BGnz1FXV1jH7Gb6Yf",
  "key12": "2LvvUTwGoVcykBG1q6Exeu58vcKszMMKW4TC6Q8qbvCQsNrVMTfDjZkmYBpAn5BRbjAXtFn4HBRWfawZT3VxiBpo",
  "key13": "2nnPFhGDdzawyfTm9VNWADJJRXiQvJcHjHHz38qesoKjAkNRGt4vuqMTF8RdBd6MSvvpFAd8fvMdVjUKiZtMiA3g",
  "key14": "4mGM9ThdF2EdkcdLWYcJbPbC2YDuHogJ6isULYqdYsL2oEfuGZD2MMtz11W9U9y7FMNCNBM2bpK2fmgLdR9GroWj",
  "key15": "5YeXE58oNyUqgZcdQNxJbTK8SfXDmwdEajzGEVeftrXGgQKBDCXnfh3Ky5uQ9RnQEevPw79vVECHsb1snQ3NtfSi",
  "key16": "4gTAqwM5YpNWKW9gjCRGAuUcXj6i2Bx3MMRPacr3H5MmR4i6M4FTDKVBDaXDgc7GwXZeipL1JwNN8LmzDeSjrudc",
  "key17": "aGajdcZF44PunTkmBp596eKyj577kWwNY34MwHSocpKXWHJNU3vwhXFeU9bJoSDzaqecEXtsQ8D6TbGXSVBTK8B",
  "key18": "NLdZKeKGxSW8dptiQ8oeCSg7QPrAEmMfz8QdFzDiAjDgwy9KPaxQxmqdFck8iNAGWxnYro4UWXqWZAK3UtXoRjG",
  "key19": "4kKzPEgkSkRNktXofSQmvRHuhsmzpSoeGM2uDTFH7tcyS9XNjZ8jkTBKC2zHthNAWtkKDQbwQ4D292tadbqqnhxw",
  "key20": "2uykLcYJ3Zn4Epn1rDRBkF8BsEmpATs6wprZ1SBNEBdcgJYHp8Z9bmFiFDGSGYXYUCKzU6CGa17Ko8hkt6yp4eyW",
  "key21": "AmvsFrfFfGuG7LYN3srUtJUwvi27Xii3d6c9B4NJko7oDtMdxZebAF1fxUS8sSNmfryozwufTQHQir9UxxZ1W8Z",
  "key22": "MvkkoS3zmHMuDvWXrJUoemsU63fkG61cVLvDYCzpGU5s4DPPZj9isJyyDKNhDGLFme5rSAys8hRycEhhfZdAucF",
  "key23": "3QiaQHNsehmgfHi9H75JTmqEWfRRxGJCcJeF12fvGuwSvKam53KrQ4qXQhT4wSDNM77SRg2GPD3cbJmFPeqshjt",
  "key24": "23sgeUmei4TyasWojEPLCA4fNxx8KJhKdLpEvqUaH4rVppNrmdn7SSVpBftG7ABE2vQHHeTTgwrb53iNcoC59W26",
  "key25": "riMGq36EiDXVyL7SUWN3pLhGqbBZEPQBCVgoPNoiSunz3nqMGyUMjwwQJ8PV9swzqNWwqHdvHLynbLWEXdNv4rH",
  "key26": "42QxPvm8tA5WAmy9HeaWpijZbLkLs5dsu8n1CyGUuxNFaHjsJXS8wiwZUxTdGmt13Tue9T8k1afvCx3pNdPP29em",
  "key27": "raRDhjDS2tH7Jreq7dty7DaizVNgZTXP53NzjcJyYGenHYYCbBGurVz2JrtzwAv6ZMJqhLT7Mc3WQgS9tVHiNmg",
  "key28": "2nUw2wSFcnGwdQS2HHNyt91YYfQNyc1Sy9AwsgUn4jJ5evB9DUmpVzrnWubRhyNKQ2PZnP6KjBAp2NAiCd2H9zMy",
  "key29": "2uS1yF5u8YYdNpBPVZJDkcH3uUywQ9zzMRKMaA5y4gJw8hntvbmDvREhxfHSX7n9dZnoLNSo4GPyTg4U3TBaYNtx",
  "key30": "5xHZxTQzoegZ56C1wB9TLgbRC7E9xkewcsm9DAiryMrg5CN4rvC8S6n3hsUwus65dZ7vzTtCqEvnNu3Ejtp5CHYq",
  "key31": "4eKCrLqyNK4rXoiu3FPx5mnP2oV6RoYVHcJBtDaeTaDrYUBNBm8hrDys1WXx5HyRZuafy88926CCz6QAfBiaqEww",
  "key32": "31dUMNbdxn62rukSvfQmniPQ1eQJx7XiLArFfdrJNnL1fdsefruGJnyXCReh4T3w9wisa8wfY6zPX5Y16Js4s8Tr"
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
