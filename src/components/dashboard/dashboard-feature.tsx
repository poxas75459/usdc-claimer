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
    "3rrdKA3UPzR4XPsfkxqFhbzMK569dx5G9EPrjuHDkKMbTEP8B1LGKWkotP2pLqR9SRakU7eZVccZurxhKfE1Dr3D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YkYsycoMvJ5ytNb81jKFxZfmAz49adGskKdcwYsb49jzvXouv6e1rmNDRtdb5X68aEsr5Pn84wW4CjJCkJeHxy2",
  "key1": "iBypaUNpJFj9WgmhggDuTg8ZDZyC1tgjBoHmbXmkHzmKorV8ovpaWHDmYPQHhA7Myddy3KucLXyRQkFHt6ExD1T",
  "key2": "2MqJVSF264nPAZtf2wcqyA5n6MZEuZMDVhMeM1kew3x1zWsELmjptFgoqUP1pwZMxoFPVNcmBEt9js8wNkHw18WP",
  "key3": "U5ha62pzrFDoxNy6h573JF8dZAaZ7Hj3C4UaYoZFE8EaGgRkqKwdbAKwy2kkM6umUreHuRH5yrNE6XZyhdrxBG4",
  "key4": "5sJ3PoNY6XXj785HTvjwm2hEcHAFQhs26FfoCGUDCKrJ4kALvAfPL4eYoKPpuV4kFrhUmUaDFYv8vQM6BQnRT2qZ",
  "key5": "36n4nkM5uLPWrXfUVSCZ1GLcadn1hFCTp6xu6GrVTC2c9HtwmynfTceHtY4zntUYPfqYp9PeWGFxr3VzsgfAFCQQ",
  "key6": "4FRQWLQtajsbvjVmSAb7wg8vKRfWSthvAZwx7zQYEy1ip3feECrndcoqhCmk5AVPj2TF5CsQJenrEexbmXsjiWoi",
  "key7": "3q67tk2SJD3fuDn55BDRgYaeBg2qY1kP4EWEw6Tt7uayKt6AtSGwpjfVBjx9SEUbAxQBNUnKn4VM5sM8URUUg2qX",
  "key8": "2VfEyxgJRUchwvuPT52Gzd5J6NsPhRM4dcGdGgW9Q6iWuGRj4BySDzohUmFTUwyikq1QnVRZ2t1e1PFvXY5MKUac",
  "key9": "79pCvoGMejjvTbdxpPE9nTzqs4nFZ8dr19SMTKYtFG7sJsHWPQnkPVePuZVGachwUBgQR9eCkQFwkQUxbBDHd8A",
  "key10": "5tbXq1LLprV88YqXCSVQofjTc47dKWZhkksAKfeHDzvzg4QZ3VATquJd2Fnqe1Wc1S1FnHemhyUPjP8RXURwqkGL",
  "key11": "N8QR3AnN28aGEUt4ydBYWd1XDwAW8dvHaYUUJwyg4UmvqWfwTe8FXqXBoVM35iEbUo2pfTZkzBUucHMq4ufQuWy",
  "key12": "4xYBfKnzRbmy7xEXfLUXxnJjMWa91GCJ347FVTVaALEHqjyFpTWnWxzNx2RhfojCP8egWbdst2sMZhUw4oruFxiw",
  "key13": "8TJu7Den71E5FCpNuH6LfkSuCFiGTsaE4WrwXVm7FxZReXrufTLcXvaZ2g9owsoRPcH2mHNnXxMUdUgmEB8hagT",
  "key14": "AaWnHe7ikFc2JndqH8r7tHJJAFLXDbLJ2fhWd2YyfYkRJRaVc7ePs4j2bLD33hrArbhVdej3Pvewi7NTUjK2BRc",
  "key15": "njmwmQmGDWCo6AhJyZsn95RufoX9ZZiriQ5T78YgpQxgCHrr4BnLZZJKzAcr4fqHBa2ebN6s3fdv8crANUuq8Ag",
  "key16": "4nRa85tkfsuscxzYEu3TQDQa6dovmHgiZZL9WD6DiyJta3fYB27cpySw56hbG9WDY6XSY6T5qc8VUAVdCGCFiSYv",
  "key17": "2Zz972r4KVLVBFaqzoB9JhyQ4AiA8CZivK9QMSwnTHxqN5estdXaSQ7mrLhHcDycLgn9Qs8uaCfbvBJuvhA2f9tJ",
  "key18": "2AUdfts96YXBqR2zZ1pAJuMM6w1FhACDcBQLE6cRgpXR91vfHkMQpbkJXnZ46snyxfrBLn3DYfm8Vhxs1QZnUo6G",
  "key19": "s1b1LLnzr6hA4akAonR8GsFzGb9hdbNBv5meGh3gFtxY6ioJftj2bhvN1GryQJptTxKd6N8x4MzZqrGXXaPd3Vx",
  "key20": "4RtntDKPVwzg1oAXZQTioQNan8hrin6ZQ6irdx9bfbPm1EFzWo2UAooghF1QJc8bG7PrGaQx2JSwX7TdFoujW9D8",
  "key21": "36sy8tiL3DdGo92CCPgV8b33D5K7uq5mifCsAGwH3yCAgLTmQfh4QBBWP9hzoHBhTVL65MUUrVwVrecSiesmiVor",
  "key22": "4d7Uao6DnJwh2cabFZBCdayEb4yJoFrAvFKS3PS5Tvo4mjdm5L9gX7nJqUswztMKafpuzjFVYSU49jTSUgAodAr2",
  "key23": "5ePtUg65wkSRjNXbnuesJ8KGVHVU2Lt81C9hDProkKz1jite5RR6oFtCsYp3RZxtdDW86WKhMzmz8zGbEw9SSL4K",
  "key24": "3YCnoVUyyeNixAxbWzJgbHrdSbWQiQkzShg3fWEB3KDHDRCiDmQRoHJGgL1vRJwChHFYBS3a1pwYRybbzZHZYCb9",
  "key25": "5r1dLTxbSAbngthhdQHaffYZ7pDW9YN2UmfFZzXQZqgBYqXLsZJU3LMxS6j84idDEfLJVsuZenRsqnNZCmFor4Y3",
  "key26": "iQLVtHeWKToVeUcGNu6ar3Xs9itQzYQjc52WmKDXuPKkR73HyJdV7n5M9dMvzZgEvPxuQymzXcgNxhekbHTKMU6",
  "key27": "3SdQtxsBJhgJmjUc6M8GGoPwpi4FD8QrSTs1Yx8haKzNPiRmNLczN2x1WspoqhAVexGWJBw35o5eCtW9peeAkbbn",
  "key28": "pEBk2NrjnbZUpJqy8L8fbGYFbFbCqEGDRwyY3DXY77w7J8T8tsdFXwZbuxYzC8jkh7yL9Kxe8CnWWVVkgNVEvby",
  "key29": "61JTPTJ2YdAjYQPVU4shRDhtyKDZFWbFhQNeS27Gb3rDNAmnKS6cQfGSUXin6k6pzhhvznZSZ1UpeLNbDVwL9TdW",
  "key30": "SEQeugrJBnD1F7nrmZSFTsoenfVDFfNzCUmjGURPH7dH99zD1JV6VosKdK581bgsq6NrC7ETj5cRyYHGg1J386p",
  "key31": "rKKuZ68Q4YuYxdKhhy5fk19bQwUycct3QESoSwr4KJ5UpEsmdNzcTZECAgVWt5TaAcTH6VmNN99u2NN6JbcoQMn",
  "key32": "2SGQpQLcbYMKNksdiyuBjbQEo1BBPF7V9NBefPD84v42cRj8Law9rvoR6pesZSejpTr8wCQMhcopSqvQBNsHcPMr",
  "key33": "2XToADyhB8CvF2JrCD5FCs5mAcnXwLMBUsuePD1K4LWYcNpxDt2w2frCaWKPn82wpMb6EexdT4MELFWkx9RQKrYz",
  "key34": "yrhsjZBjoTmBKfGk63WxCBhHGQArKfEp8LUT5HykRvoZpGkTfhimQaZfkKqvTRHyWxsXc67HvPUYRjtSTJGNz1k",
  "key35": "5wSj5finzXjYt6gBEjSRtDvA3q6HjLsX27KEPPxHr6oaUd44EqAtN3ncf4p98SB1y16UJF8FHivfDJrkt5ps2ZiS",
  "key36": "4aqqoCyWxjnR8wFCgVSE3AawCrjKhgnxcUeMotgdaXVD9DqQXeiZgrfsJnPWitG7pUyyRTyMwxf299rQVscnEjZB",
  "key37": "2mPBtMzY6x9ftLtDTh4J4g9shHks8GYguxrK9XxExbyFDprB7wS2wP1f1CEzXqpHWFvpaDmwFdT3sPt7LQJMDV9"
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
