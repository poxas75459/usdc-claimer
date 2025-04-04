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
    "5725VDYqo61cjMD3iSfcxdC1uETs4gYu6bJgeSQMQYrKqfbpimvyF3WpEKrUojnNtiggnn8uAgE2yqS7oQqM9dvC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fKH9dxPNwPtykWix3ytuMKTLPiAGchpRcDXqXAr6etZr5LtJzwwfUBU6CpzaenUWSGBDCgZ9oVS4NVUAeA2AATi",
  "key1": "4iuCnJHpbcVjD9zCTFqXo1936bG7PyM5PEpmP72QRQduAaRaMt6jG7LiwBUNokQ5LEAisQBtfWAgcjQpMgb5vKhx",
  "key2": "5d3NMgxcV19e4VZCC54fD8n3A9QKoexyWqJyMQc2fSLXRDSJbDYwdPeJMkrEB7XAKnxCvYWshvGkfAduFheYn3oV",
  "key3": "48jCqrAaMLSUcvdSaSaTajPcHzqfaiWQ7XZ3FGTprtxUNjRQfRhgqE7kaGQg4U8donBsyQ4sB514Ewd4cm2uWNgG",
  "key4": "4TTYzJwgQUTyA5yM38ZRGSipwQfKPkLzpx9iStgkPBsHK1MaChMh4CH9nqgNEBXLmztBpD5vMAR7hzvhKvwGrso",
  "key5": "51LzG1PbaFXJPrqiwgZ7pjJm4hqoFKq6iwgYrVkzbPPxWESieRFRoCj6UDQ5JZB4Tp2f5zxGtRPGP1v6BdbGwZur",
  "key6": "5jE2gB5FAr9kVBZAV4c4UmFLwBdTAWMqgH6ErrA7GUFzCEByL8aKci6icvWTuk9r8TqfdrPsQ86AfWhXQhC3GRn1",
  "key7": "3SJDZ7MmMf6F6SzDHn6ZD6yujqd3oL598UDt34zfjE4DiSut3ZmXERZzqjLGPyR2XP3fBKBV8QMv1d9xZeso2Pe9",
  "key8": "a6gzuXbekQrBdqD8HdB9GnMHqZaepEVFNheS2QQZKFqb81sohFFF8b8o9nyXzyxooiSext7Q4hmMNTxyuob57TJ",
  "key9": "2vK67TS4WNgxHfyQMQSdxFHo1VftZs7jj18QAdf62SoMKHa72XSuEPEFqzS8MpoASLGJTpt4migJsBV1TyFzGJ2Z",
  "key10": "2DGqiqkmtGxVDeXsWBc8QPJAZwtYc7rWX6rVt51zGuBXuRueQc5KgjAKQkKC7STmRKhpK6KjwHf7u7p5EKpBu61F",
  "key11": "5Ussa7B6BNoTiUhe79EQjgvFMjTdB1n1zmit3ZkGPGvEusgQsDMfbDyCYSZPDDaxaYrg2Jfw1CgVss7kXYzzx98J",
  "key12": "5ZAahbvTdTNr9QCTy3BSwRAoSwjfeMa1CCCQsrwdVE7HALX23p5ZfRqckhmwDXWSYrTnZUNNVEBtHBivBiHGkzaM",
  "key13": "iS2YmMNnrje1sw4Nwu6Sa9GrhWU8P7FovrPKaLGCD7QYaF4JcqGGxLVxee6523XJscz899B3BZHb7xCBiyS2J16",
  "key14": "2paFuH1ip7xBhz6s4xvcgVPC6eZGExbS3rPHgkVw27jCCLdTS3VXZb2kuHNDz2GFXNVAciUHJqmzRL6iCVQiDsjg",
  "key15": "4t4saii83orCzYUWKgapfjXFJSkyeiYiPSQJj1g3RNqfCxt3BVUv2q2R5D8ga9gb7UXwAwxppS8QAJjSAo9WNCAv",
  "key16": "3kU1ewGgVsm8CAZ3G962YTXSFve25cvnZMhQV5tUCFgXASTFfmQ9haDV5VQZS7BZvYDxe8DabrvtRdyHJkqA1EN1",
  "key17": "5fetPiMS76YuS4AK5MnacoR6NbQ1PWXXfov27t44xD1K7oBccxr5ckiCbbNdPZiMTtFMKJLTMJAKcDNdRWwmuVdB",
  "key18": "2Eo1HxwL5myoSib9fryT2ZBDpMot5CcrcXxNXpYCqYcgx6FGYkHHcSQALUcusgxLk7AyZG46Lcz8VkaJ59isnDLe",
  "key19": "2vd6FtAm76VGrTe4YLQPcc2VnN4ZbNf2zkmUpNW2WUMnSoahd8v5R33dqkuejY6ThsKunbVz3oAVYvQyJjyETcuK",
  "key20": "2EHqsNKJidFCgsgcNqND7zgQ11GmYTPR6WBkQmxjmpKwfqrTrPvxvft7Y6xzmAxW4sNmHrRcry5LkW6JatSSziu1",
  "key21": "65a63Pe1wJ4my3VLsbFRtNeh1B9TQgoEcsqGkuY9L3HSCcN4rjhvTnayMiUvTcB4wX7oJFfro2mX8U6MGbP5K5Ni",
  "key22": "3SZLjsgWxX73cEBrEPqUQq7CExM5hsZDtGnfa61syyPpR3zBrF2zizXaLqGjNseNoJpvGZcyBHxumYb3UCHwnate",
  "key23": "NgHAi141qBkDsnzA29PMr4Vf19Edjeb6ahcQGgaVmCN9zJp86LcLHsZ34M3BQe3T7GGYQuPKy38mE4faEF8kyUu",
  "key24": "3TscravmW3dQmk3DzUZRRSaRy3Eeaid1PrNBgzq8cqZZ9u5e6rQiBMX5sRQc51S559VeEMKQz9MC5SnxEJmEKdK3",
  "key25": "5TQWJ7PhsFzSfH2Hx8cDHjEYxZz8tGaTxe2VHihaCfhKCgPTBwmXWKv8U9U7E66oaqFDDHfw6aRrjvj7TfZcb7qW",
  "key26": "5Jmbh8Kk5yK5GVVbuH7kp8DN2DqydgeUBH2Ft4Sy6uGabeVYcfuCBUzZNNJt8ragNXtARBBxiCjBxLLeQPCRpkoL",
  "key27": "5EGJ2KmCdPZwYLv458pvYcY4JFS3yojf5HBfpyiRaoPkUYqp9vDsqP9L3HgB3LduNVnnLKJojvxjP7bcFTJo85NM",
  "key28": "41r7iHEdmiaU1Mo9gUPeWXWpLkm9t1xTBTipPHSh7srKYFKgH5VhxBmrUTqaFNtGtRwTsSVLEvJXpFMcb6AtQ6H9",
  "key29": "5PPKjzCjXfbBopk4Umfoyr7pGeAaZDSTFNhbb8Z5YicnC1QjzyRNJsEguj1KJc1zwvafDeTBJTsZJER6yPkv8nA4",
  "key30": "3cynHDUCixeG45tbMAsqb2yDG27UxanyEM3cJYVF2B6JcDcCjKFJetncDARPG1YiYLZ2XSAzPSdSh4Mnc27e9DCr",
  "key31": "2VsChTwYgSXnKqMnthyxemCdEmFzPjDAEmJ4an1umg5kojp8Z2XW5JZuRnSEagcftbtdDvmVwcmWZkx2JXrdrEdZ",
  "key32": "47Lf9TAz4hBD1J5f9R68J9DAQWaazWueJn9qDBGBgipDwm1J1E2PStrKWT7H4AuHCx1TSkdWmabcjZhY3tt3cVjK",
  "key33": "5LrW9jkEM1eSsbF7H612bKowra1Frgvhw7s3nbVQSBDMHBhzBDVvaK5WfUyvDCehHcnSt8nWc5JxaMobfU9EuEKS"
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
