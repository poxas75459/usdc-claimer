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
    "35cuwgKpH84J7DAw9GezBBma4ozrEfvoXpTduQqCr16kFGRg7bhKmdtAcWeKdgxd1FQ7bbvfiq6nCFg92AhKuxuf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MStr5hJq2iarot9kWrZg1kePqeuEwnqhS7HGp9Uhy1LQC1D1aTHPbw1692Fdsijeo4gdmrNBrJRbcULqsS56Tjj",
  "key1": "4rk7bH3JPRTTsBs2rLYgxT2NuX6xCUbXAvjyZfFRJVZzwmRdHH8KEKx1QPxsviYqxQMqGw7tHyHLA8LN1KH3Cg8w",
  "key2": "2NRp9D7ufzn7YCEN6cmh8Tg1h5QfU6UyPe9YYJLJ8RhVoYZ4ktaAviu3bjEbHTEkkMRaJNt5tz6RFN7bC3Yh1S9n",
  "key3": "5hc3uRwjHF8C5dHuB3tWoqeU1hsgAGg3RimH74DCRrxKnFSJM5N6u1ZLjipyU9EkQr34mnoiQLDujYSDj9nMmTDd",
  "key4": "3AJ9WQcxmcdCidv9dXM4mRMRz6BXBAkdw1RoxkCMRR6SwgKxVrqkLNJHrwB1UYN5W9qSHjTZGU5Pw39SQY1Qda3C",
  "key5": "47kmLnYC3CdpnT3X58xqjP3tY5pXCNDiFqzKiPFHnKtqNfBMKvaptAiFqnE8NSRyTURzMKYX9wZaj4Q99njT4ALL",
  "key6": "3wfu46vuEKcxyoEPdS8UzMwb1drieTT9Enca7Z7xKfuyr7RZsrtyTfLa3hHXtx5VkUzHn1J8G6nLndLwsh5mZX7a",
  "key7": "645VY79EA1td75bbifHWvnFL8RHwvkcADVZCxMg1G4vjvX9uQa4SfVVhxYizEsh1KufuJLGktJHL62ruXdodzrx9",
  "key8": "TYg5MxgV2nnSkk2TjyMkZcDEDgbWkmRLS5Lfp7oSiUg2Y1ipeD7BPWb4Yim881PXx7GNDnsuEzBFLWmZLDvroPk",
  "key9": "NhjFGVnSorumAx7hDp4ucYpc9RMxPfFH2bopaYjUcz3GK7gbp8zssLL69pFM1rhR31URPJ4Q6No5AahAS4wdhAX",
  "key10": "bitM9W1WYcTvmwTkv5wEjNUgHA2DxyQM4jncqRQrcTpyKLJcLYvHYTY78Tf1Pkxy8DuTg6ubmug9qMR5r6apfo9",
  "key11": "Xmb3j3ktUDLCrM3e5vSQNJpVDg22eto7TAAWjkgnRCfMVYcTU5PbrBDkX1aG43mPPj2m1ACjE7ATZUhtijqm2A6",
  "key12": "525oPyuSx7EgvSCL59ZbhZrK1KRsGiRpi3BLPjb9mZgvaggCJYxrSfCPJDt4jj7QUK4iVtNnpwyanfhzw6iBWabi",
  "key13": "4odpeuL29yCAZ7W6nvLaidDQfZk7Tt19uN5G5URLzFo5MuKag9TjcXtWDCsf1ee1PvxG8NV9j6Dzsr5nxUaF8rJk",
  "key14": "5QsAt7Mp2FGfZLooizeT6sCYr63Jr34Jwbknv2icR2cbXCuNv4GF8VsaV4VnnkQfBWjrkNLBadTNkGGcVy7fgyKJ",
  "key15": "41fwfAV9NPjeeebAN5ZxaWy3xVLUbKnbzgCaYR7CqkSGZkm2Hx2BmSV3GSB3kzDxL67eDmpUN4Umbmx1G78yBCHg",
  "key16": "2PVfUEHLMXDWQZovSUKJ21Pj44tUE3nDYPZm4wW16LWSaGnCQhn53xbiAfGMCxgMNKLsE4aeDbuZpFhxDRpa4PYZ",
  "key17": "nLsNh7RzNjHfLZZyRRzLwgtdghk1FzJdTeXfvzDubqKTBexn6zjy89eMW9evcmw4Kapnmx2TRkB77VHTmTwY8BP",
  "key18": "5vBRYhT1oUXjiF1oMbXoMvsfeYMNhZdEPfi7p9UmkBmnyKcuEEuAioexQihQFA6YVsaPhpeQxNSQTmSaMyXAXKHS",
  "key19": "5AEjnaVhnhfRY7xd2XNYMd9KtveBgN2pdhDkQb3UYDUq2KXM5gGns5Wwr3rt9APhAR7KNUht6YC5ZPQGhk8GgGU6",
  "key20": "3yM1mVEvxefVi8bEThEBQZ5f9qpA8ifg3ZRRDNnzdkmhPb9BR6XLH4vnEhHbjSmsrUu8LRXJUr6KRS6RBgXmPmPJ",
  "key21": "51jNk7JRFXrNmmaqLdqzC5VcK1PRtk2Kvp1L9wx1nekFaogt5WQuNefnNiGt21SwhdtFiCAL1rCYCTU9tSsmi6m4",
  "key22": "5FrdTjoGnxSLh5fgjRs93x3fin4Ebc77QoyUidAVbrKAqbzEDQfmojWuf3m1T49s61YnGY6vuyNhS4ftBiLHebH5",
  "key23": "44if4GHq7fRW1QJu82jVmyfMYXwJtqnFJJe2vyH8kspDWT892XMmmtixga9XDJRe2Hod6dMfRkha4DA2E3w9tran",
  "key24": "3ohfwqTGG9rFn9cfqLv3enMr5XUzSegLsZUts9hiQjvdV8ctLLp4FcJWA4fsXbHBBQ2MNXQCEEFzA8cb3L1zYQ5M",
  "key25": "K2wKmumbC2R4qcDzm3G2rZfcERDVz1WrJc4vSGihcouhwrQhpPsREePJyioGj1KBSbEWWU8tzfRF4a6j6VbDg4s",
  "key26": "2n2ugYBLTUtTiLYHzQrLYCKKiwRQ2txtGUuiBcqrdi5o1CPQ1Fa7B2TZwfDtQ9b8H6CN5TuoVuKpMnfXdG8y3zU4",
  "key27": "4eYugWJHpaZr5D8XtCa3ENdhbBeyqQ2BMFkGn3VURLxtkykQPAZU7jxVVsC4T6BGcvEZk9hwJRXXDRqSkJob14mq",
  "key28": "2h1Nn8mbeYo5P8mGTcze4Xjc45v3H8UqTxkSPnmfMp4WUjZVxuVMqaKuSxmhc9yGFAv2VY37XSdT6rodSMBQvNYU",
  "key29": "5FaacYSe5J9ZaG7KCQoGSe8vWo48KjiGmvmdz36jADXev7avguTvUqRhph8oEXZxg9BS6N5LMgxyMhDxpYBos6dF",
  "key30": "3hXJEiySfxgGpzBfms32tsCGYWPWvGBXrjRuZDBwGvw25Prvu68kMGnvb2mJvfpHAipTCrB4cKTSPtVb59VA6mY1"
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
