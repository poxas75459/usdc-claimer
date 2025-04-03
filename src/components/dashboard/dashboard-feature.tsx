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
    "4B9NsaiTiSRaPzizM1EshfoKWSsP13DYTHmSnPSFAHC7zRMq3rp4r5DmXxUtFLG4BgQXvCCsqoj5RZaE7gWCtPjB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FKsgRiPcrACgE2YX1T12aY5DvaCPvrchW5v3VDx1k9iXZ5PRAzQtM8GJoS8FQotuLH6wpVs4fbSTWmzCbDMfUDL",
  "key1": "4uZ7ZuBNWx3dpUNr3YuT14e6A6aH8wFLz4uqC9zm49yWWJfzNHAMVAcXryH4jAqg35rWthyYF326FE7GbF8GmS82",
  "key2": "YdZjxCwGChvB7goLwYZnff9By9vR2hh54KcvdBr5Y254RQ9AgokgQQ9s15dm2RVx4d9A8F7tUAeDJT6PYzPR8yN",
  "key3": "2XAQdVomoLKons64SxnAANaE1hqQzpPudCUMkGfysnok3AbA8hbzVBovgFuCwMCDTZX6DLSyvGsV7FrPjB7RLoFG",
  "key4": "2bHxoT21vm8zFrbHZonQqFV8k9yXEWjJeG2DFmFY2zXn5tgGzXbwV8kXQBRcV975zTqwD8K6kLvpBBtSfxpbxnbe",
  "key5": "c3wGLPEZLNNeFiwYrUdU4amHPwhbZqNREtk95ezhRvBezFbNtLHuSPE2dDBCY2Uu6qNjmrVeXpbCjR7LyhFry8U",
  "key6": "3CpSQwp81Ub4z34JtRN3mokaXzjuGyop3Qe1MHDcaYfLWPZJ9ARWqReDWQmnCY7nAS8PbdiNJPmgBys1jyExtHCw",
  "key7": "665mN3yEBE2yn8wiSpuHRzpomKXEsbhg1GVoWXzoz6a4MVCcJMrXRdHmz3Y8HMcVY3xSFrF88ZcpHtRU9d2FTeqx",
  "key8": "5UvnpCGRiNFRfPpwdFEBGo999kXyrDf4q5KYLvngPUm5aeFX8HYQEbzBQcZ5taXFMj7E5Qk5xTt2omfiKqUSTE6Q",
  "key9": "DdKgVXZoH3HfAq3AXedWAV9EuHederFNWFeHFZZbt8gwJ5U51VLLajLAuozVgq5vmoik6hzv6QGyd7jeyzFHRrs",
  "key10": "3bFY4e8HjG6yfCv1ZowKH7FWtvPTjuxcgdpgGQ1xiVsRn12TyFPqjwCvJobfGH8Eyu1bYMH2waR6xTLFMoEKZeBu",
  "key11": "5HhqBCb5y2i8CSH7dLK8zsbQEhjiP4HgyUBaMYxE2WfJmi2yqShsSF2yNF2NnDo5Ek7DBW1ioknk2MDG7SfN1DGz",
  "key12": "3Zzf6qW9hFqxTf4ZmeBzF1BSZ9SbbiHro2kx4bgVY9cFeHXE1ELdYi5kapAjZGoEsXdVKTPyyQxtvNyNLigqjRCZ",
  "key13": "2CpYRZb9mfukwJhhFwviTKFBNtmbuJpfH5gHup95ApMzEW3brbfBYgMBQGn3HfseH8nihfiWL8sfrmzya9tEYS49",
  "key14": "3BiHVSfvGmTS396bjsZkPq5Fsr2b2tcyrs3oRhNuf2NpGEzPjUozGmGmUs5eoNGs2i988876Nn98TvPUZHSwoBak",
  "key15": "4oXgo6xteLKHN1D5MZath8ZiBAZ1sicBXgvamN8U1opgfUovcN97REth7i9YAm96zHo1xJjVjesnBZdf64XrjoN7",
  "key16": "5Azzyq6pjZiyvd8HngBzL2Cc7MMiwKiLgQbxirFwLmjhMk41gQVwY4GZNub1Vkj6oTSjakt65Suv8at9w399HHqE",
  "key17": "4c4af1Af9qtmLq3ChnSgAq5RB9daQ4tFXQMHKXYUvktsBfdRF2N7bgkRdZ1vEiiXTRhJTP973SFmvbW6D3ketfK2",
  "key18": "2C6vgDteh1TKNND8qqzf4mq6yU5yupVfvTF7nMvTPw18MmbSQDDJ63rnR3scZEWB4dksZxTqdhMnLPZ5cS3wW2eU",
  "key19": "2CLvtuqvbeidcptQviEWjEu4UMW9QK2hwCBTkGn696TyKHWSpELJoCuHfAqYkj9JqGW7v9Ms3vqp73bz2UruAYc2",
  "key20": "4q1Y6UquRBgrZ9MvdNEZYHMkLA7xFG7LGf5y9nuyxtV4sep5sJY6P6zymrW3XgbPmmMex3CSdETVQ8Z5jrPCqsyn",
  "key21": "3pEn2SvV39TNNexRA9Hq6GhDKxHZjvdecKfmBkPaTvkX8Lq1NZVYQgpMWvaQ22nyBM3dyaNhTdcwQKy76JAR13Tv",
  "key22": "613NKWC9vSLzSPUua8ohUapqQ8yBthstkHdzF7h8bgn9sy3oxNCLo9sDXe6G1atXuH2siPVpwYgciVBo2g4m6cNX",
  "key23": "2gfpErHVhEQmCABuSyTmTA5HadaJM1N47gD9kJftmHZANqZKS7tYDjz5NoAqqqE4xiJvHhjtDxsUhztFSefR8Ja8",
  "key24": "2MgKz8XJw1i8gSh2xxyCpMJhXPL1kYioaP85o1XuSKpFsHSHCTvPW4tsGqcqUbfTLtiR66extHqoqJV5UyqzLbfN",
  "key25": "5KykrPVxSEsRmVp3JvvKy6BKazDJcCvj5C516V3sQbw37ks3PpRCwcfr5mGqZjb7q5KhbCGLT6wUNJ6ALcMRHjYV",
  "key26": "2FXivNKhmztNMncovumciMo2Esdof2vjX9jE7kkKpmiFKJHbeGDWFheHy6PYkApxijyKSKK6Ao5fY55ohXhPyXbS",
  "key27": "3RWrXTGbaRtoTYUji6W1ZeXtfr16kRWZqUkfqBtuhmAESAzcv9c9q2M7pPRXJ1wnnia8Pr851TLhviY8opcDAfHW"
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
