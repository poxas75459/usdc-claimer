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
    "4xFwfXG51cwgkq67Gm4oYB3WZAwzurL19sk9nqa3GALL8Mr87PKLCyGPCce7iwzgwzjkHGS77Ef8MUcbRLwFFppw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aEkto98Xb5aAYjVXDPB9HYdMyhEqq38v8hJYziWY8BcPzxzuRfr8gao7HuVZUC9CUGReEHrK9jF6HmzGaFnjAwn",
  "key1": "5KbBDS22a4SkeDhDwZxkgyzb6ENUDE8uZRjdbWqaH4KpjxahVNW5ioCHW1ZC2w7Cky8NA6nQt2nYd9B43YeP2NYx",
  "key2": "5jwXiVcb5thFE3VRJvnT5M3kkkSbM7a1eFP1uM3TyBRQmwE1Bx6GXB3h49EFP8jDL48SzHFNjZYuayeKyLm8Zipf",
  "key3": "4Uvk1Tjbt1RY7zTizzjrW9eDap9Q47y2cqdREDB7ci5KmsCeYHr5Nq7dhCRN1vPsuGP4rY7fzaxJznzbKmtwR63D",
  "key4": "kZapKWd2JfkhKLEbqXpP36pqafs7NbEivcaWYmtucDyNoSK1zLpLmjYgxQRnRScbpyPB2xCrToB23Yri9WdHrSG",
  "key5": "2bdmRAfV8gEQaconDUMSn2VhRE38o25vbHz9PQWTXmydyg8mdmqBS6C7LTt2ELMCoUE4uBPPsQr7BbwJaQn37hgQ",
  "key6": "4a9zHpaKR8tbkDoW2SK4UcG9oJm99N26CMdCwitMeJdqrt4YPzp1nyUhwhsJBJbsd7dgXSQdP79XZXuD979oEVxh",
  "key7": "4jCCgsTJNromNf9mYXk7jgpmEbqAcE9fcPzcPkfdtwWpe4y2TJeue6kC7aprArtFtiA5PUfqurtUAmXhayCBh9Tq",
  "key8": "5Ee6BaMYz4m789f8VJ6bKEpVDWYpvXZCeGqoQD7bieDSe1zv2dUwRaJigRs7d6v1Uu61G9kaUyGrLNjRV6U3jKZz",
  "key9": "5PYgs5arYZd27skcMxp6PL4ih8q7nuMdEhiN6NEP1gFspquYywmbNkrPaUwa7irdxieXFsBLJsayxsSH9GPjZapx",
  "key10": "EmvRXEe6U3NJAnUhBJ3R8TLqZjjsLtB3ZGzHE6uq2PqmFppbVFm1eFSxMGy3XydN6KJXgiP6YSeSgAKPybeYeGG",
  "key11": "3EKo3bXrTcB9hMccdqHKq9v2XjaLG9CCfvpsEq17399pMikiPSje1mpUA72SrUB2hZkHg6b3rpj4ksATmRp2gEsT",
  "key12": "3PQ5Gfob6zNmk73FEPM7hMLB9JL4SX8DrAjG3eWTBsMiosE292R15wVN2dRXfDg7MEdR5EtFcWdCRMTdyqFa1iM1",
  "key13": "5CK8HiD2Gpb7u3y5D1V12758m5ZGhsYbYoGHfF6TdkmdmxjFDUVaHpgP4Vkk5KQ8K4yaRTD3Bp3cQARnTn9fTRCk",
  "key14": "4dhmuPj6VdgZCLYbjYn2GQ9tns8wXV1qmg12nBT7vmGvwnhbhpXb1HCcx8XnHypkWE3ngLbXjnUN6ebeTNzrqk3S",
  "key15": "5urozojV4BFb54GSjrowTXuPAfiBZhTHPxgXm7cskzyxfA1uk4rvN1koozstCJn2BXg1NM4vDXmYVAL8qeMpx8kj",
  "key16": "4p2uMRrXdGh6wQbaV1yauTBZDRPNVjJCVzuf5LzAToCrxHuus8QzwR8K3JBDubVZWN1Q8xRXnzAcJqcgv5NhEp9n",
  "key17": "nWoJzYERsrB2aKoQrxc4QTaK64W7gmwPuzNMZbjgAJwSb5Kqbyqbjy2zjGpsn5FhNCp61JDiM2aqJUtxgdQA5QP",
  "key18": "2FJU4hWg2Vjb4cojvmbNMKQyWzoxZkm9yZzt1dHcEUnACWEfe7uhPgQqZ6eSLpuw6gzNH5G4Z42JdTNkXWMxdB4f",
  "key19": "2r1eWPb1D3vh2EkuWjuSTwrmphnjgcGSongidjNZDDMksHbfpTRthnv9C7GzdAfaK3sG3nNBe1K3gvtHk9D7o1NW",
  "key20": "MRkQrmMNozCExhNjgT17q4RXGScTocjqZUHkikQx4ypFKmgPypdeeHbTmAfXsx7T5hBqWqH7ZvnyMz1hDoDLEP7",
  "key21": "5rFAa9shGcmh9Z2FTvZjVF8JL6LMrgYMtMhCHqstX9QNhrBcpgPYCFb6y8K9z5kmt36eADWbJgRcF2bfqDS3n1m8",
  "key22": "29qfjFi1LpAEWAfsdNtDqFHJg1GDHYPgUkG1hr6HuxikW5UZtcgEbnGxNZN683qPYNCcca2uTWi1GWg8sb6FKGB8",
  "key23": "3PZ5ySYP5G8DTtEz6Urrzy2bFUeVPCsE8joYEHLUGBp8b6pPZJcqUPHYtxBJjhJ2GbkdosNXdNEJhr9ny9Rkaojd",
  "key24": "5hHRyoposvuFrgE5MHBqeDfyHkw6RFsv7hBs2EBxuBt6Q8Yn15YkxvVVuCSaEpR6RbyozxBbqeQkKrwAAynaB8fF",
  "key25": "2nZC6jinKQHNeKUJVTopo5iFUqYVEE41doJzZLjAKumeo78wKD5F5wk4HBq9M2EEpGrhdMtKAwwyuneR7GXNDNer",
  "key26": "4QtueYEwegxYnDLGr2D44sv4ex2gXnvJyGb9ZqwQPZPdzLJAkHDfEtBF4DHWcFCYqbSgC2D8MMpCtTfwvUN9BEhG",
  "key27": "66uAHYJhJ59uhZe3sZuNp7LyULebJXmRdkMaF8nTrGkY1ArFmaWh6m4n9jQH6xoRAd93Ld1VDKURDCPpBPDDkz6i",
  "key28": "29CCzhChN1p5gX96CoQtLj327QmuwoHkaqVeXq5GZAkixsojK6d7ipjfwyoZzdJtt1DA6diSRjko8L4xHC9RFzNM",
  "key29": "5y1n16vJmwJJt5swtLJ6PMai13vVzsw7VR35XJ8hUiXTs76BJT71PQCcqSvEUtPqtQzrn3jgm43vkqn29gq4cMWK",
  "key30": "vnP2tmWpNbiGFLgsPHP8q85fusNJtXgZGMxGKCGVedPh3RLZjLYtkXkgKXK3Yi9k4oGJetVvSotp6Qh85qxqyjy",
  "key31": "2k4skn6nhikRvEteiQYQDHaVNozoYR7dVcitwkZK5mfCipYbP7PevXeoctLaPhxbm14UaKjijbE1ConG33iM4TEf",
  "key32": "gu4bysxeFoFJ5FmwGPeHS7XwWCn81nHxBsha3nmdp8jiyvGjFVthqtiX7vrRDueLnY2xF9eM5pvwtuQb2ntSxjH",
  "key33": "5RJWRyX5kZuMDdC6SK3p6BqdmmjZr3GPUJncs2uMRQgbYeMpWumFv5ektZMc4YfG2MpUS1e2jmTQ6xzgu2LwrM6w",
  "key34": "5zLmeAWsvvnhWUMg6fadw4sr6j5VraYpyAC4oad3pVoPNrCb5RVFzSsME6RRNkadSFcqPUQbyXmEfegkT1JSgP12",
  "key35": "2sKruj1KPS3yVGEZ2rYqypJqWcG95wzr2GdV8drRX8qqFodEx7J5vgyMvTSm8M66SHewyno2LAg6ecALedRNWc4z",
  "key36": "HL3gYo9LHN4PCtATm9FU6srjDUm7K4oeWFdDUykpyqBak7vwyCGhEbC7BJJGV1geExmEtHZheafUd8axLHHFLRD",
  "key37": "54pHAUUWBLV2qxfc2L7gb6nGZRbfJkGk5iBzvTKGrH874FzR22VTL9GtY3wqw5WKxBXZib1JttADVcwSGu22GcXa",
  "key38": "JJNWfDxnuvBen8pC5aedMFMhAUqzK4S6wxmUAjZ8EYNM12xM4nNEC1tSBLtmoiQeHFJijGxa5pbFLQQLg2Uc7qt",
  "key39": "5LBBFfQ73JwiEAunohBSHzkz9B13AkXp4yasSc88MUKXfQvzmaViTFJTMQePyEF6pB1cYmJSMAAFkLbM55A133js",
  "key40": "2Dek2n89xQbDiGr8aVsnkoxXtnNHbXhZPi6v1bXB2qhK4ZevoUgBqSZwg9pmgHbDo6Q4nokb8BPfjsuZRdhW9y2B",
  "key41": "2yDEfSpiN5W2NHRqBrZPwN6ESK6WmwWLwawU8Gp45K2gZKuhDdwQd1XtiBYQv5S5MZ1KyuxXHgxmpFC7Kh1m8Jnp",
  "key42": "hoQWFk9xsaY9QNxkgNLsiyUuKptfZiocYZjRPbatNChzEiws2Spxi31AdYDE8A4CQQKM9XbB5P7iQKd9EnXXQJz",
  "key43": "65XgWy475XFheZzAjiubn8L1eDxNcov4u9JQJauFXGvK8fr9JQtfAB1jTixXPJ1BKx2yABi8j6Vn1irzgZ25V8e6"
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
