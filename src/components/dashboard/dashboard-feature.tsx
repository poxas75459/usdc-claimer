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
    "f1TWRYmjnhzpTAck94u6dpkVZA6gE9htZe2pfAzrB75E7aZLSM7yXaujYnJP59UpRQeTJaJY2sJf3RgVEwv9dZL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YnNkbF2SCs6hJJLsK6RnxctQAatqBaV9ERAvTN3bUsNTFGV2tB2TeTf1poja32eUZvRPokc84uxqoBNntBFTH2E",
  "key1": "5cnfaqwoPCHC8XSWfbcBE3M6NcYW4rVt3D1QgMR5yKt3a2SfhWG5TjrzAUZwNoHvrfAPt9RFjJpmAjuUyKd9UYkn",
  "key2": "4fLc7dzj3u4Dp5ofMnnrnE5c3EXaTVoVY4k6R3CSyvf5xJzN657CqeQYBgcwV2djCNFpk4q8qxo3wgKkD2jNXojz",
  "key3": "3zRdyxhHaS3E6suL93Q9uHebooZq7fPW3X9hkdyESBiifof9docW2tXeQSj9Mb6wowLAsrJvQiDGyurUWDEY2U2C",
  "key4": "3nK93Ni3vzgkW5PRVsp7M9fxHU5XSJvoDst9LiWjR7PFqAbjdj3U2C63NveAwDne3AFu3ypCX613ccqFdrz3EXuR",
  "key5": "yo9nYSnxkBrF6nmo9e9RhjBox4bgoJ7pAnYDggyLVtTvNa2YEMP7dttGPubJxP185uKgajRrAXA7CVGhjdL2WuG",
  "key6": "37EQmXEirMHsEUjP9VFGA8Eh1qnqzk8TsA8QC1vCMjzfBz64M3Xx2kKGDKug4JHx1zbAvVNpJQK2RbU6MXpw8crf",
  "key7": "5bJnYbSfyCN2UYJrM6H9dqkyFH87qpS92egwddufqsjZgQRk2aA3X5hZR5EHiDeX1Vf3ehi21MXYxX65j3imH786",
  "key8": "67AEr4MvfMBDe89NRNkE3Y9AdGSvRAX9bULWN6zfUZoRVKrzs8YfQjJXPW2ownctjNrtjg2o6nGwmbYe5uE5Xjj9",
  "key9": "3Bg3Mr5iBpMYeza8HAeYLEutGaz8NcqJBzrNXKimJ4kyryD5CRFhUe8qPBrxvWQcH77piyvwp3dyeJCPwFbK4taS",
  "key10": "4McutceP68HReEW6zctSc5yju861xVp49Gb88EhCHTjDDrwRDiRF1nsXNtf94hnJPGp8h7SLAccDB9zqmp2CpkBy",
  "key11": "WT9o3gVUeACak9T4gkYFe9u3f8arNZFcWLfP4CLt8gRcvdEZrdxY4DHYkcihZdhi85rsEdqgErqsyqUerREwgnA",
  "key12": "45VW55iwTcAgeyvDi3jzYvYEZgEzgFFwdnDJ1pgsrnDmXi8QgSWHG5uYdFXxfJ5oU3RXN9qynEp739bUEFAztgTa",
  "key13": "2FKScKs7ADcbgCgTYqh3wnzRWvvG3TuF9kSPWD5USqiKo5UHqmSUvvU3jb7MxUVqKhSjQJNWquesdNYrCNw6ATYB",
  "key14": "GwrkDfnoyznQ1vqa2q9cgzQFLVvqNtTyzr9TNZAZTBaMWGC3ehzA3WyJ3fGmAXkShgXVRtezdeKqjmyNTDGA55L",
  "key15": "3N6pdzGBmXMhRCutjbfKGMtDwXRr3ZSmiCTzhoTwogxAZXSkMFXeWRM55Foecn7aejCFH79hNQfYLn1HaAW694Y4",
  "key16": "3NbjZrYbW4djCzy4WdE3fAfWQSGYDMQsN49LMo1HdUWcFEA4CD1whqnkHkptgfLG1ZhbDU3TArpj78PQg1mWXZp9",
  "key17": "5141FJKYpvw5EbCTyoZ3hFCozr59mf8RGDxz4HCcTtywD23N9suopSzgoTHdN4ovRuBgpqx7ysgcEX3ezFCwz492",
  "key18": "3X3a5e4ocbuxmMpg995du1RFeq7vaPau7HyNLW2m5s48WoR6ZdQZxYKUPrSR1PekTWj36hSVSi7uoJ1ci9ePfxYd",
  "key19": "cFexj3P9t2aZydeWZbj4zmrJ3rmnJg3XWMrZRGYYeNCoWFutuqn9XNnkkhibhFgQY5nBssWvHs3TXCZv1HALE6s",
  "key20": "5cv9m5bZkj9cVXyU2qRnR44muyPER2wLbhWKEoXW7dj61G9B1S2gWHg2E9kbDNjS8GLrtrdWBuPSaAq39ga7rEJU",
  "key21": "4usGDvAF1cw5CuvwAbym8JuB87mGUudhPpUxXVLR85RifUqvasrk5mNgaHuX5G1Fnd8XNp7CMTQUhhaRa2JwC6wH",
  "key22": "4vNpb47wrsfkDooYxHgn2E83oJB8xfxYo1r3kpmXNour4VJEVFE6MXEj1Scj4CaQ7iQjjz3pr2V1WGPMuwLQbDpf",
  "key23": "42qDdomd75NrYb9x78qDeJmiWwdpJNRGM9T7XGVrndJ6kVq2XoQZsEy42kVzfxjp27ZugWp8hUhARmoYCUwS5Jqf",
  "key24": "2T9njK9xyHuV7UfpADouLQxmrKx8EDbkApwWXCDMJxx2RY8rekiVLcDtnZoDQKVChxXZHr2G7mBGweac7SVRuGw5",
  "key25": "64VdnxCF2yaALU4iTjHSDPDW59uVATWZ6TFABx5PUf89cQkuE8GQ6ZZsDqwP39ZB944eVznv2HeFfMJ8MscNSeCJ",
  "key26": "tT5uGiDVjZPpcC8C1ynAG5gtp33iVhi1RmE6G7Yb2reV81mn9R7HTGc7HomNBsaBNYdmQqfh2N3U1arQxfRFCw6",
  "key27": "HSdij2RHwnymaWPdYqYhTwvXHYDMTVcNdKSBbzgCkvvPdpvMAKxYNCMn9P3yKdbn1JMzbriyMkHwj24zoNgojKb",
  "key28": "2f3ywELRvDnsSLZkr6s7ZNfcSv9z9rcs2kfudjfedEAyFHcJJzDM4K5zhTFY5W4ghdJgXwAtsrFMGxuSNDvJbM2W",
  "key29": "e4kmYrXJ4dw7YGX6yg519Y8Zyu7tVNJQGQzDTGqHVfDk66EA9HiMeDi5zATDWHDmwaytAYG5vvAowQv49Md53RF",
  "key30": "4keX7dHdifeoDhmV98dbxnBDv5PPA3ZRqxZpmSo2bZgnwbJQQeoAnRnEKyhqJL2THsnEhVXeqXji3kcFFr7FwkXm",
  "key31": "4U8X3t9unViGBcmFxAzFodEYxZsmzcHwSnw3VSx3TTmXqvDoJyzYCPgP6vz1H92w19GxTGoKXPmSiBT6AGDrTHQC",
  "key32": "5vEzruPW4BvNR9CkkMC6QX1XCJ1PRK4hTtiBPgPvrdZx5mEfeigGQzQiYyiPmNVZkjZzS2mQuwcxwosD1m2KRups",
  "key33": "299Mi3UTG5SeuxSmB2Agph8w1uisDC7KLWu62nDLmcftksPuKRVmXpDrmNs3g54ScFt2XQizGijfXnsSj9RkQHMb",
  "key34": "4QKUiCgAhcwyk79ycLu6NaAv1LYCrLpFeQduCFK5SaEaFSsSYvMiyhKt8mbwDYRSTr6ARdjGkitdnxrrtzGxSZmJ",
  "key35": "4KMC1wz2XMGkWmDniWRu7tSieAjd8LBVyw7nah9PpbgbD4SEtbgnuEBK8Z9a2C8t29Loq4iZoKUKwinCNWycP6LA",
  "key36": "4tgd9uQxbodTsepmoVi9PTXADZDjMKeYGM7rZ5J3Sgga5DDjuVuQEfr8UEuC6tHjpdo5tt47zhT98eedLLEXK8nC",
  "key37": "24sB5mFmXHr9W94rLHu9ataXNgLT9hmw5RcT3rFdQNSMdaTATT8apNFaGBsuq5QM1CyozncmETg4dTifgR2znR7D",
  "key38": "2w2GjQvARxBFTEEVxeAQbZQy6kfYQDG2KxDJcmRU1pkn4dJqyn1dsmzZtGT1KLzyqJD79kTVMJaX4FVUvPaUf92t",
  "key39": "5yrrKriaE931rcmdeJNSpoFG48mgnmBK6wHLrixxTaDwMvpKyKLRHNPPKtcKrR4CM3D4cArjqhTKkKZrGowo7zgU",
  "key40": "3GYVHKwzsb5U2YS4QQ1WxrzjVB4gRYr7quUwHnDhn7haQiYBXuhhKYT3fHsyynMBJd84ML5Va6cKDjymKpxA8Yje",
  "key41": "2uN4bk1S2W36zRbPLnVc9WZ1aMtjnc1Y9xYfWeN5X2xrbciYfFQQRyP5oRRm9J5XKfWN2a2HJvxdGont5bfsS33J",
  "key42": "fS5GXgoS4pSUHErRLoUti9g1Prx7J3NZz2ScQ8CHwWYq31biCzKUGpoM56S3DDawDwSL2CWwELVriB4bxaitmcm",
  "key43": "5royjoUJwC31h8nRZ4LimAZNYjbpkJTMCd8WLz3d3RFQNJ5xi6S5aCdCXUdg6X7YWeFMZ4qX9ouQbReAK2PzU5Jr",
  "key44": "wmiAQ5DKtbPbYfMVgZaszjbQSFVY4VHyDQaJbHHw9M3hu8tLYqWKGpE4j4q33w3hU3X1DwuzXpiAZrqvrQGgJuT",
  "key45": "2NgPis5QZCyApk5eBr2iGff2KEUGnXbnpEHrLtpPxDoLiusP41ZfBdD9YvvzQG8A6vhkNoS9phYR7MRUpg31GamQ",
  "key46": "1qHzhfQm5CFpuvkUeuXR6TfA3jqfwLtCcgB7Pn2TUjJUGEbAv4qSyAMBrKS1hdVdci2TM37b6A1rsSeuydede3n",
  "key47": "5dpytc6LFS2yyWq8uQ5H97vT2GjMG87hSjDXjB6ZeUkSq99Yg2G9c1cu9z46niJhV7GTq3vPy1SGiDix7RUPWTjb"
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
