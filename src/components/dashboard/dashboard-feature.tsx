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
    "3GVZmCAw3BW5eAiRhXEmRayk2nDpcjVUeZQfiiP6ZjAATofAMh842cDyM2uQzpmqQxQLbayZgHkeMZsqW8eXMhBe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JzgsFCp52VngZfdFqHHQ4etXVN9iu3kuQtbd9SGCNodWyUEkiuMkTdGPbLtdnv1BFYiRTAB1LkVHhyxYeV6pzdJ",
  "key1": "5mVStfqLAjCqsPkYgWN5Gfxmt35VJpMTGQd2vS5RCYkfJiZc2csSEnXmhJDfqZgEnPbGvjBeXeExgP1R2fKdjkFt",
  "key2": "piizz6nyV1RZAmFmsrdtn9kHgCWfJTwNamKWHNLoEGokQRzXXZ737js6j181nWK3wnCwDWmBUq6uexPCdB2bXie",
  "key3": "3iY9xv37MRBWzn2b8b6sazTcKLbS7ot2KDV2CSWhki7r1BtpZEB3m38hSbQW6Rjmdn5y3sDUoK5ZwHUBXHZ3cnyM",
  "key4": "43Rk5W4C5qs93CZ6Xf6iARkH2Qtb1Eb3NBChBqNX77FHNWbCauLCY4ip6A8qFnorcwiJGqjyfwjx5pFmvqghZiwg",
  "key5": "3yRuSZda2EepCg9eqE1qHdYD6DNGnfaR21Htm9RvbEjaoJAHmT2APHLoha3gNKCksJrNtiZmARQfswDoaoVmJpkG",
  "key6": "26vzNUiz1R4pE1iW7yKeCLscpNrKUsz9hTj4RdiBNWcsWEeUaC4Uxnj6T6amd3tahTHQv7fKNuRLy4jBVd2tfW83",
  "key7": "3UgVe6MWxhRvVqUptnFqp4VBhdgNCY3ZMEeacCC8BqYREGcbkTUfDU6R3ZbATJqpE5xZSFQ8LujisNHCTjFZW3PR",
  "key8": "5xRd2rR6yD8LeZJYUm651UQAdBT2eo3owmBvZmXXrrbxoBHN4o4HEQ4y77mnb5TBFpVYXVQGeqWLVsJR1fWJffhY",
  "key9": "4hoFTa7CjAAuVDzKniA1VM5gQbujD1jJkH5KTr6CUP944ieMsE5Es2pgS81oc57gERpTrbxi2SaEek4sHg6G2V1v",
  "key10": "qPaJTMwKkatmry3pfbwNKSTYpNh2B9vatSqK5Tj9hcdsFzsDhWWMNHkHTY9a1X1B6ZWXmgUZppeYU7EgZAHVU85",
  "key11": "4JbsZmshdxg8MG1kKuZhuZRY4tN6agHiT4fy8gsD5PV1vgvmudbTTtrP9MxJe6ZmZHmNynZ2QbGcSiSku6YJ7BB5",
  "key12": "4ncb2TFuw8GDvmrtQNmx1fHU2wJgc8duDrCgzDTX9GBXb1HQXv487g8SLfRqizE7CXQhEtMJ7hZYt34mJ4c7QjEe",
  "key13": "4kNfLsB1eMFXyCfbmpdw5x53bKpzeZhLBYSGef8joZwQu76V7f8wYJTZvhnYqcPEPy1Hkrej3CqVRoLoK7UbL2nR",
  "key14": "5m9j6BtZx3quZDVBjMXawwNqHxu6ZK1ia1pDjvmZCfZxVuXLg58Sp7Ukq6k3E9QgKzf9VkuadyWvjqkYem4Zcg4L",
  "key15": "MvTisQenwNSBDbtU4YPLFDC4kw6e5Rg4fg2xNvNKu1UgcLmdTBCE9r2aPnVzPCv1QnummY6eqgGc1LFVihFQouy",
  "key16": "2QQgK7sWenT5DnbhWLiUD9g9Zv1AB84N5rii8TyUNeds1hFiX2hnaQNXhmN4hojywoteSf5idXwaa27vJvJ4mvYt",
  "key17": "xwYRaru8B9gCz2QhS1u7enp66YxYLzqDAjqagoM8P4Lboid7R2A1RQZ5betLdH73JqHkbKiPmf82KajszEnT2uX",
  "key18": "5ehDMF8tPT1rLnMHZAZmTNPs8sas7UsgMY1z6yU6VgiKPRgT3LxkyfTcaWsZ4H9cEynQfvyHEssAVvZpN99dA5pT",
  "key19": "64bwSRrZ69NZBxoou8pEJAZeGTez3zTpNT1nDipZzTUH7PN5oMku7WEvRYVJX72ukHJ5U42hRsAwZXkEayLKhaso",
  "key20": "3Xxeqv9sC29JD87BhC7Q2x16aKPU97SMqZqCX6gUZXSihc52iwyVE79RrAunuR2rJynh6Ma5U1efXVtK1tkScVg5",
  "key21": "67XGbPjwrYutFhqZAPU7XTqLCjrWVzfGjWZqASB8V9ZJTiuD4NjHgerGqa7VP9fMzPTBPXV8GfEYPPcQzdPqYKUu",
  "key22": "8fJVXWntqFRpgcHz72PZh6yMsdsasSYUSLSdDV4TpcrEo6r3pLsy9avNn3nzeaJV7Pihgoaxovm8Jc3GhiT1NHm",
  "key23": "2TdAeE2qbWrccEzHKCuc1tCQcZThjjMawyF6Dtn4BkyEc5wfqfR7MHcsTcAV7BFCWQTtmg2CXrjoy68ka1vcZydZ",
  "key24": "5JX2uAikjpdvovYdirJPKr9ZD2v6GV6kdGiuoXs4kTyhbgzYzF7uQn944PywJNSdit43EBUK4VnadE8nwSKM2TPi",
  "key25": "4u8EJyYFZfdiZHPAphtEzzJ6gSx83EtLg5wqx67Ria3w8aDA3vgCUFNn3mH8PeCDz9xSSuJmhf7vSfG4kR1DcBof",
  "key26": "2DZAMBdhtkMFtDymQikG8YVZava64Nkm2SoCArDALSBNmuSE5z877Az4zbWqtsLV6AgH6Q3UbFqfmpheAz4x2bYB",
  "key27": "2c58r7RJj7csqesc4LqeeKPPfyZvnRozfqqZgfunbogMcuypKb7msGYFsNB5u5qQ9LkgMpewHWox8SQ7jmvcRJZz",
  "key28": "5qJYngLBAtX26BRdTNCa6dKBjUTKtbVRCDY5JfHoYBv5Wjv4gc9ydi3ahYSDftbgPGyrEpMXXnp1KyKtNgVLe3bH",
  "key29": "2xFAdFHwVHefFxbkvLzzKXo5AfHN8FpDwqG5aafifseke8xEeq9ebZ33o7r9yhqRzup88c68cTEcTNtrchkYHmVp",
  "key30": "61ZzoSzVuQLsqqyEWVNjn6TvTgjZUsyN5n8DhrKKrmSiSS5PvweVAzq1XPZdmrVF563ziDmGuCi2uz8xeabmYPGf",
  "key31": "KeEp5DZgrC1gb5KTnrfDtfxMvBrPrrzc3AmmXVtdpsg84wdXd5rztF1wgfc3Kg9QosVaWk971fam2Yvfo6dC7sw",
  "key32": "4eYN57dibGxWPKsoJbey9WUNGKfqimukUG1duyPaY36N91xRNvmdcMQsWdHKVWQa5ZfQm6ZCyVouHH5DiYiACDJc",
  "key33": "4QsM3uTZcBabHFP4No8TesnnJCwvTgGkrFY41pBfi3BHofWz8otDmci3dyGuwA9rxjkpePY4kGhmAdLGpbogTn6M",
  "key34": "5NqnmHsRFmHH73nya6224PoWGeip4wGZu8qDdk2QdzKr7h9kXk2itD9RbXfkS6naNCGzLhWdjfY1ho1tSgxYBsS8",
  "key35": "Yqh7moRsU1Q5dv5gLBHCLg4d1jwy8ihQLop2GKBrS96E3Wcr4k38orksxfGEj9BFaACNoMXwZ2Rf1wtkBhGgCf7",
  "key36": "5Adjb34QLcUnWFg1bc3mMdZSLEmtuCyLdrMdoLJAPtZmi5if4aUrKPPRmy9aQMPRP2kYB1eqFho9njrYXTsYPhq9"
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
