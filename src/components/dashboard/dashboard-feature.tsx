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
    "JL15XeD4f56PzLKRPrQHsQhPgN5w975RAeV3KBmCbakAKAqQ2fsfZYTVPDQu7CzdAohNFn8p1QkcwAUaR1bDba1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZVjqmuy1cBHeL1dYMPme4dom6W32mL8KPhXb2ZXnvqwvzwAE3Hk3t4rp7oz1av2EbfPgQW41ZV4q2mKkrhatwhY",
  "key1": "3UrpG52V7cmcSwKZBuwuFC1rVPmNFydga7eknRj9Z7kgk7YmK7yZtQpPhAgqVX8H2MHGuHJPwvdeYE3P6EVn72Cu",
  "key2": "PgY5sEYB8CosvrEYa56GVgD8twX1YdxUGNv79uk48xfNAgd8RoZCy54SVKW5GZxySjAZG7EDTFFHR7wSbVyiavq",
  "key3": "25YoNAaivuv3QoYCnc7xF9VBfjt9azRo1hV8UyhC3j3ghcRhUDC5GDG5bztQKLrR8T2s8zC761nSRGC4AMXDKYYK",
  "key4": "45gTKEjR231FM7XspqStjWTQfBe1CoaAXrYM7pC7tz6RPkWqTmJ4bPqKo3hxzwTZGkGQoNGEaS9ULnqLpTPUYtSc",
  "key5": "2MaqL47MMuzR4gLW476qbh7vYwuCmDg4cHx1UzJRvMp5u6CtaJA5TAJ5HiBPqtXCpim5tqWA4i7HohcwimYBvpf8",
  "key6": "67bENzfSf6QLQNnHuRhSDuLW2gJWywwB2bzLECYMhsoQDNAMUHUrPdvdi5eK9pBArVjzMgwWK2xJiqN7csRMbS9T",
  "key7": "2gb1rxzeDx292QnyGpqw49oBiaKHg8YWPYMFxv5aj7GGnJJfyn2CVXiBbgqi4xXgGwgVNUAobTPEgZsWnfT9bePs",
  "key8": "4tKccNhtQsPR1u6Q5D7NTZqYWugtSXS3pT7rCvaPMUXR2DUUAYuEQTArBRvQB6n515wZ4omagvh5GyYvuvSTvKxg",
  "key9": "3esnR6X6wh8i216wJEHnZA1iTjw9n7F8mLP2NRjaxZaiPnfXksDF6esKgMVjDPBXcRqCC45ox42VNC6TnmPNceNA",
  "key10": "f6qdtGBomSgi9LXJdiT9gHAFT2kEuPYSK98z5uKmH43XdXK2EcZLZrZJvqJTF53T1vrqTnrTvTpBHDgKG5miwGC",
  "key11": "DxbtvrrVbMF2WP6JrZmvKqHitxBYepVX1z8ZP63MwrUrwtFSgYKzLYGupj4xyZ3BQsjcswVKHRhs4QLewSw3Fkg",
  "key12": "3dh4yhDPThz8L8CY89JQf3bmYHXUSNa12DpktNhjbtpXuEUoQDtDkHywfhDUttriFMhNfpf776Eiw6dLcNCDxD8e",
  "key13": "MeGQcY58L2PGX4ERDYUmYQ6ztA1Y2eZq4Sxtu7KYfk5rqfnc4D1GPoH7ZZajU6hEwzftDrt6H3twzzVQ1W6Jhw3",
  "key14": "2LP8gP72WTNhaJvACmSdvop6BfnqyAoKdFFMm3A9opgEiPGLig4BC1PzBhQsYPqmFyGtxs5a8up1MikNrPpijYHK",
  "key15": "3p1ozBxg9jwGZB4epQip5jbMt6w6ReapDSgHVSjVBiF6azhvweAgGiCqV7fQGFuyov9APMepqwGaWQsYgJgFbnuh",
  "key16": "5t92JfLMyQbiPhivqrtdBJVxjMTfyRo6NiCkZMk2DckUBDxDCCfT7mnM2vBUt6B8t1yhdAp7DJLu39nFTp6rJmb8",
  "key17": "4E4rku3wLw1nPSPEffyqebSfKVrx9KtysZysBoimzNHyNeCs6LzNdM2jESeb3mqVaJ8bU9MrALaMLjjpVaBYJR6b",
  "key18": "4YdnxmYxBLLuqG6QfZAGfRi41NGrfUw7g8kE9G3PTTB8XevSMVNmtfe3UKxDCC5Z8bbmsQ5uciaHWCie3fbTsKiA",
  "key19": "7LxBGia3js7g6mdBcAyRpB3uCzjfGwMX5UhG66ANGfg57sRTJkyeuaZmCty37MQpgCoyBNfFGHgXgsBxTC5U1ru",
  "key20": "3ZqwAqncDruLJ98cXhuQS7M6uGvawi7aFPBAV1TdQNmZqeAdDg73SUfKPhc8Qr3fgvePEiGFRyBSUyKYMiTzE8QW",
  "key21": "5VPKx5oMSNiKDajkGfcuNa5X58fsssmNXVLWwqDhK5WZZmYRo9BdEGURpK5dN6oWZAfvHbG1NKZcBaGDSb3dcqap",
  "key22": "39UCVuvSCcjjEvTqDbtXnwLwPPR5mvhXWsKQLrmMBkU2Ueo1eoKs7Vdj1z9rxWAf6aWc4GNTNQebB38sZSyk2bik",
  "key23": "36e1fPd1D6VpaHEHMfnaAThEhT57qdR4p2dRC1DKkipZi7htuMre4mD9L8MDGrqCK6MUvFXsr9JLFVYZkPdKzH93",
  "key24": "5stGBEojkmTiPD48F9HLY96oQGuSnKPdUDtGYFmhWwRnsejSfDQG1ZYRLYHKDbbm4rsZoDSBu8jpxoGLLLiFktak",
  "key25": "5rYcAVgJZgWCtXhXay4JEei6H7gfnxeesLwKvpvmatkSM7r2hjrt3PTxZx3WFzy8vFMjaEYTfAwoyQZ8AACz4iz1",
  "key26": "3NUHeJjWQkzxwJPTGbNwwczntFqSSMGGDpR7MdPbMnG2rNuBP3Y4CvjMFCos1rzmPgyXXPaAxYCM8PbYEfotfNb8",
  "key27": "47xpTR5t4L2CN4yzfa4HdSaie9t45FFgEpnyW8THDGYkvgQVaAHN79755iFGoR9VN2XBXqQsYy3Hh822DnUPnhd6",
  "key28": "5KY4ZFb28sWEdDeL6yGCF5oAX2fkwMzA1btjGMza6bonFisydyGvxEgaRSvsBLR1KT7jo2ECfekAyvX7Q1nSeVP8"
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
