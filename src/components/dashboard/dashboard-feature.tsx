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
    "5zzoyBdyAtsuA56KP4Vxpx8j8Q9XUnNmn2TJetZNwnTTgxqvJUUcyuEnwFHPkUWGyAW5AHLSiUy8eyHnsqgY3SMF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tFiWzvmr9X6fEL9oMsmdsimAu15oX2KBDEH4iFFJBDFoJcFe1TUivv2aYfHWvsiYHvNhHa4v7Jo4GoyAaFooBmK",
  "key1": "3gsGfXz1n88GSh6e5ktPtkfBcx8uXHTk5jPkWzGR4CqicNgnTuU4iChDcT25CbzBY8jEn3RsTZiMe7G9GSEY7QCp",
  "key2": "qTH2KkheuyNLeFKnk9gWvVzgxFi8ACPKZHufzPfYQk4gJmECUnThuTLtLQeHFEEP9YcfhZuXkT1CXee226BqAU7",
  "key3": "2Lju8FwaxhLJEhR2Jzy1THEXA4TZ8FU1xXfeCdb4FTgBCet2NDUJWdH1d4MSBbNd8zZvakpK1NN3seMBJehDNqZX",
  "key4": "2G56t1neYu8AHrHNwatN3S3ThmsqnRVZrsHbg6DtEHbSms73tmZthow3zUbMiBFm8FPj7Wj6NyazdL5yFLtNLgjf",
  "key5": "Dx9171thnN5UNU5C3axe5RswBfqsErN8Za1UM2Zktxhoxjx8DBPFafzsB1iVtZkwsVdRsqm1NGC15C4dFWcoziN",
  "key6": "BY8EnumwXdK5vQCMmvCw8wSyjPDdqzoZAki7PpSJuJAVfFMt7qvrwf4fJWBMcYaimRG14MEp2C6Enkep5dGRuFn",
  "key7": "21kFBFqLcuPHu6r34vyLjq8gUMQZuzwzBe3ui5U29e8Ts1Ym2k3UhyZY6M3GfvKxc6K381ECJRC3ZUuVdrMbE4H5",
  "key8": "5dizEXLDnosRkq1i3BA1Y8L199S2ANJcWkXgyDQurfcXPqia2um2Q8FHDRS5aCfgr74jQr8bftPVLzNxVa7YQdSM",
  "key9": "3F7iTjdFZvgpBiK2MqEv44jQQWNAs567rvcW4tyoNEyZobc6ePB3mWX8Ca8ATcUMg4FKLAruBFaVj88SZ6Q87eLw",
  "key10": "4yyv6ZpDfqyRtJRuWPUxe3YZWZt5A5FjjqEbKj69EyEtc6BPrsEAYrwDvaPNQnmcyU6z9shBwffAdLxnqnMtcJ4h",
  "key11": "5PtjLcrgkbmk4TD32VyXpZyCcZeEx9FU6AWoN7nvY1jiYd1JdPhzfwq3JiDNuAYyMQpqtUWRK9mJYHDECvrmS4nG",
  "key12": "Lh6X94fUMCp8pkVThnZxmksL6BQMUHbnJZvAKp23LmZ2pLQpAVGk2iPXnrr6oKT836TbKNTFmFWCbeL7djVSqkV",
  "key13": "2c7nNNvJK7QgzrpGwQ9LhVjHhP7gsP5p6Ahm2TKaZXUXndxHcKQmRvWndo3xR9FYDPY19hJNxnQVimMmpWL1EMtb",
  "key14": "4iHVzxsNStfvPDsatGbA5tLL9aP5qfvRgNAufoPJQriTqNE6cuEz3DEFkvcCoEfMMztYXTDvRRCjwLvnNtzDv8cD",
  "key15": "5xsYvMQyvfb4vajMtehsMHnYAbomVE95MpUCBZmUFGyWDWFmQtyZMrbs1WVzUTAwz8u5tjw8MBEg9qqzKhaDFzQS",
  "key16": "5Agd1S5cPTH29g3S1rEEfMWXugAbxfYbmjv7bkyS5ufRkz7DZ2Gu64w2PmW483RbMnmcm51XB8YAobuo3cKD51PF",
  "key17": "32wnSb5kzWnJ3aRuLjYvf4bEmAsjf7ABEJTp25bwUu4cdv6eGtKAWyanm9EQFGYbQ2L5bX5TuCqR6xxscC2z8C2K",
  "key18": "3oimBK6uqBnNUavNkwDgmNrFDjuehpEcBfUpSP3w9bTkAffpWy7z8ofTAhM6KCA1AesFGwkwCQbjJ8a4DPDoLWNa",
  "key19": "s5qLdFmLj3LCF6URqwif2rPzCTtp7ovZhzA1HHsef8nZCiRhwSGToCVCjfvNLyYsFuYmGNC1j7tCwCR2P2hK3CV",
  "key20": "PW18WXBmubtovNanEiVVfzs51LRv3V24jeGcXM3SvnTKWsLcWkkZidjH9gtDozcGE4Mp3Ud7M4QW52yXXeqkdfN",
  "key21": "2W2SVJ78FqBo1QYn9tWn5JDswpFFZQdvUHJj59kYYUGBNa1zGdUZnaZTwTXRUkDa2vuu4bAh2yGeRY9oFDKYVMAo",
  "key22": "ZJpk8V9bCFpVimpgp2uHj9pNwhwXaQrNEFiucHE2zUNv1mmk24vmx88XyffpPCY3td6xcoQCQrSJNo6B9oh5M83",
  "key23": "4QBriGJo5H5EpEVJSGChi9p1wbz5gdcGarGJHTBJSZKYfQZKmAzU8CYDyCfhzAYrvzcvfFqcvVaYu32TsMZWZvt9",
  "key24": "568HJaDzYqupiRxWrA6MTkPSqyJftJPBAQocZKsaXyAUXF4VLKtRcj6TtxFNY5r3iwW1b8sQxgcNd84qRUs3g8vJ",
  "key25": "51qte977y6nPy34K4X18UgQFRPSFZneFbzR13Fc3M9jkXGyKzN7ebHi5gBQ4Tdj3uLck7n9ThsPnDvCjidMo1Nwv",
  "key26": "3udyKWDQBuUcDxGuxEk14fTt7y9QRbwZrjobmwaumz4scQfX3N5WXVcFsSGgu4suaZ1GsiKSwgHngd13Ym5FUB8y",
  "key27": "5pXPqjAymUy3ZK43s2hwBsCKwucwXHZKv7EWBaLiEnBN1AKp4HerP5xjQptfdFDooLTXtZALhisK9LwQ6fjHPmm5",
  "key28": "PxE9CtAUVEdFsJ6xTGBw8KgoZq2ygEX3igXij8MKemW5ZZfS54hz4pM125uieT5Du6ymU2XtDnomJQywcPcWC3s",
  "key29": "2bb4pcLYF9XvT5kPCrTUVdSpSJghpskhZRhCMrBAXWXSgB37kFrUAcmqrWVJ4fTxLZgD9nMnuXwxWX2efL9j3BQH",
  "key30": "44qBMt5nwsaKrKFPtrirQKqqXCtL8xXjsjpFcDkbGzkjJfbw2CKq2yncPUbj8NL2pL6HTm6sjEZkr7zwAp5A6eG9",
  "key31": "rbkwE9GNxvwWpYnqGZePaQcdofffNq3X8kGide66LFjiLeYFFYMEMWaCYGur6U58ZgYGqMFgXCyA5jLmH6k9hhV",
  "key32": "2ocCAWE4qGH4dKdAnpfkAnQhTwDJ1YXCVBM84D96ymHXCUrWyWUoe7VxxJgua73Unhvp87hCuincwnnKJHMYfd1d",
  "key33": "4Zd5HbQnjJafMrRLprSXsCwEHEGGGgq3ALkD76UpC6HvtuShoDWUBQqq2Vhb9wYUDFA4HJ39fqhaQ3odTEmfFJAA",
  "key34": "oYAtKsFmnCqStGev3neqUJtkQTDci6JJMnFUXtAB3kswtMbYNUkQyBrcpE88iN7muhquB8MWkBnsaCV3cyEGLJN",
  "key35": "62geNCnjJiFF72oUAhWBMGKKb9f8DT6WkuVyK6Wa3N25ZKU6kiVZYX8CpTkf1SoKCKwptfrFWikPMBAWEXgXnGU7",
  "key36": "4PwGUwmrm8meQ2nTyQTjZiKpvHJqFqyq6TBuzZPUCCmt8PytGwc9EkjdKxazQ5tvKBwj4ukFrertM3us7DgV8zNo",
  "key37": "21MQnr2qbipHv67AjJzZWkHsRqphK7nobm8FxZLR92WdAterUQQ39NgPVxxzBD1QPewthUW92n159CzdvDrg73YV",
  "key38": "48DhCGWZ8JfJTMZD52q58MVp9AAhokf59TTu68bLWDhKGd3nTt97PmJJkwnf2eXiCzkYB6kjK7N1ZPbvMxsHkxML",
  "key39": "7zaviT4W5ftF2tEzoqtHkfP3w3M4Wao7dutGuz744hyTgpfXDWv3HW5uMRbYgDYkUZxRKAovokVMG1jiYHgnf1c",
  "key40": "3PyjT1tbRmvbgLxyaN3V72iN2gW5Sg7pVyt5tPhwjBr4oJmagBhbawdzJkE6bZYtXxZxu4RCUAFXE2fAG8CcRQyw",
  "key41": "3zdbdPEjdzx3ge8dct71mb94s2icbZddKsFqj6simPdPzqaZWTxqon3nYnAp1TagJM8jiy76aDjsgd9q2LLeeBN2",
  "key42": "3Jt29iuCRpBtCJQBvhrHYxE8w85trwBD5H2nDRYjAC5s8v1Mi3s1M1JvUzA9pVaUSFpWpfBrhuqsa1woPCH6Ebo3",
  "key43": "b4n3WT7xXBBmgwmdSEi3G1Qa3Jf6JdTKVUwzvZhPZDimYDdLoMiw4R3JM4xcvZ2gyFY4SqGTSasjmWN6DSaWUGx",
  "key44": "Yy7KD5s5QitTjYEYEpNfiXnpBN8TSB1PbByRCGYku5FFBdDtdsYm8gAWpFKCqnFBeNfga4Qwhs444trHEiUmoBM",
  "key45": "4k5LJnrQ62pXud6maufKAXiEfh9jPpskHYCNomFF8Lgd1t1jjvZ3v9e6LCMjjj88CxA7X8kH1N3WiQQjgJaBPeqr",
  "key46": "3MzfNbFkBq6YA7AHgcb3HbzgLCUf1UqjTLiXTs8ECrg4NCw9Y4HJT6jQnbyaGLaG7A4EsvuQTZAAUzJRKMreSz5F",
  "key47": "4KudqcGuDTsZi9wU1ZxAad79ieAkHCcCPeXtZDXE6pSZst8CqWMnPVtgehaGWCpjok7Tmz4xHwZo1Z2nSPZfQCoe"
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
