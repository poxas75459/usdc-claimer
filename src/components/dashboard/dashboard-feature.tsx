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
    "2SHHk3UzFWAUWt59yJAzirqUdv2LupfBni9WqJc8uZ66Kk1hnm6FgMDBBiTzHD3d3qRjPJjH5WVg9iL3XibBoNFk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5j8EEH67PMQbhE9XrGUzsYgJesDqGwbbdosWt2NJ3ExrvfPSZDm9z9wEHhHSXjeSiwyvVJuGEYxLgosMfgZyMtD5",
  "key1": "qMYzYpL9r2E7czzQ9TPjdWoBPvvfQQ4mMCFCn89wG4eXHMVfe4oAYd18yQt4df1kr4zFTiw9AoCm21ph9qtB28z",
  "key2": "4GubdHf1qKwz6deQK3qzZqK539N2nD3vJ12idPhes1BHncgGUnorVP7DHmRiBM26Zur5Frhfa8tpvGdGkxAQKzfW",
  "key3": "5V6DYEKm5ZyVMwe16mcWiGqMekPU1fC6qLk9PiAqnTo8odQ1ypGnoDufQLzcZ4QZZUpU8tN4EGhrj6UQEyUjTQRx",
  "key4": "4vK2HnJ1hLhFLav4hLFYW4ncoMVg5Zbza6ASyA8qC8cKoYetmVQw9aF3nSf8MCNkPx6PWdThPxDpnDN2jpALwV9r",
  "key5": "3PnpeTdAGmq7vuTHg9LkPURmCPosYyX5ogwEKchXBpXqgvnJT4QPJieArmfAdr6EA3rFBCRSg9MfcVaB3V4joZKW",
  "key6": "5R1CR2DCKVgeGYrsi7Apmd2LRs9EjZtguhWEYF52RzSVFDsFcapdsgrcYm2uvGrLzEwtpCpwbjQ8VMb9Fr3LGgk3",
  "key7": "64p6DGwPx9gx2YXz2g5JZ2SGzBnBstm4jzt3bMhfXJv5RteZ18G7yz3amSyK1UDYWkHfUDLoQte92TMHu3Zz3kxQ",
  "key8": "5TZhuUsPTqcPgzjXch3Sb539sxKTftx8LSP3wZk6BQ1xHLfMV4xY8Bq1857W2ZHnx3b3RMjRjAQdNbM5X9p8t5VA",
  "key9": "41gFHGM3o4VQhjukJjDAQmtX6PsD3CWPdJEjh6UHNfQwHxANkB8vY9bYk64A8TAxFXa44FsE4GuDssxraQ4Z4Jkp",
  "key10": "2aRJnceXQZ6TCbU8ibM9cQkfbBHxeWCj5L2Yvxko8hkD9CHGghWuvzyYi4Hze5oDzuw9ug7rWLSDV7CDYHHYkJ9i",
  "key11": "WSATQJemjnCGLDvicGaYoudh85LEoRwXmpcKi9r3DTMxC1TVCVskwnkYnDUVgtLYtErmX4zF3Z7ZHrYT4sZCYj1",
  "key12": "5n7uFbB5f5irJd96yC5LBKzm6n66QU5uGH6y1yway8889Yed4mM9kD79ETdVPmEZNqVB2QncBwm4weL4BxT9AnFa",
  "key13": "3SjetweU2kDg5C8A6BaJPb9ev3HVL5xGZG364pXDr2YAztuKaGfNrxTSoWk3UmMVJ1s3yVEbmLiaAciJXGkgn2iE",
  "key14": "5rmweAchDmTdYNEFTByZWs35Mj7d53J4MhqMjVrkHdSuTJcCzKEn1B4iboSZzoKBiRZ1UVeapN7f5UMzwJxt54Md",
  "key15": "3XXvPZRYZBVnSuYu8MpSbbQYvhdGmyMg2YiyPAvQJ4KULhB2MNbfeov5YAnFSGhjCf4fFFxwG7tqzN3AK83Le9Uu",
  "key16": "3EuNm93mxa2GKR199fckGii6CeU3FMhMzWBhrJfpDQ9GkjMYy2W2JNbpKCLPaTdPKZkZyeoUTR1hxmBuhrqEcEiz",
  "key17": "4DvPbfDaaSR7q8L2vyPHynNV2mfTQ1MDdA4i6H87og3dvwvkjmLXHVrLWtpDjiMKcEsh8qmT8EGZCKdvfja77ZLt",
  "key18": "5GiFBRqaADZ6rW8LyH7zjcL5vYZhxrCoujCDsgpfkm2JfoCU1jbkoFRuEZXD17XeuqrBmq45skXj8hXMfypMfZCv",
  "key19": "4sSEpsx3FvrZUL3q5MbiMw41pM698xP2RTeexcbCtwMLdbZ4uDJCk5zy6ZQHbwE1fexE2GUoKvUMDapTi5ZFN1ep",
  "key20": "5ByYL9upWAeL16cBBXRwRCvdA3yU1ocqYTrYn2aUqpN3ndzcVjsZSyuW4QgZG77FTr19xUWNC1vFHNLwQCs6LLHt",
  "key21": "8Pii2m8v8rmu58Cr63WibQngvHS2JZvGT3dgp9xyEXKa42PiY8NQnJUSvN1YbegNFAr42UgjdYPpoVUuh4bv4Mc",
  "key22": "2hFZWCo3feVGhUzA8z2GJUxmGFv9Myv6iDgYnPBXDMqbyufsAjmZU4KiDVjXfcn6mmUjtiCmcKF75w7YmWFc8cHQ",
  "key23": "3cfGnsq5XSzwHzfvUTpeubNjwpFRPgXzoPKbSeQMLN2hs6jTmMTc15CRnS1QvjezMNuJWsY44a6hKnwd4TSVqbR9",
  "key24": "4QzqPw1vMoHFrYkRjUmbvpxQiX9BEteAoJmazWprtbyxazY5gL6zxb7yXzjsE4tPD7wqiGkKjvqpNFVTPVPyhrnm",
  "key25": "3ifvpTnN8KiagNjJSUvfmp3EGMYAG4ZrAZdpcKiY1TRpKsCuAkeuqNk44Nz19WfMxSDQx8f28oKHLbZQWstn7DVF"
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
