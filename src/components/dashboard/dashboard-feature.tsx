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
    "2BhJqPBZoSoKBW6JPgiv5GcGRVzwPfBagcxwf2VJMF6vJX8nxPN3q97RNm4qk8CgNQVxgWKwyyRF2r4YtQnQVUHZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iR33cAjEKA9PsZgLPLhGSH2v6YUWkC6r2ZxQXzWwqFHLYcVv1Bgags458ezu8Zy64gunrGLCfqumZv9axhWSXXS",
  "key1": "43qJv6FKSFyYSs6k84QioF334L71yvfhEoqMLkKduC576vHzB4aHTd2vCvx4VNu5PgJvVZAN1qpF99ggXgAAmK8E",
  "key2": "4AQAP1L5n4DqCESQFGGPYAHf3r4KGsoqocMpJw7kYYT5HfRPoVRtPJJjMudwRwXxBpL4Bu3fyen1MGPHGT4jPLW9",
  "key3": "a68Fg53vbU9AH5skU2MEC1u5V96Nuee5eqWuR5ozCdKheTMBJADTm5Euoi4EbTnxSUgfGf2BrfJ2ZkAfKDoBVEv",
  "key4": "bLJcfgS22Ei3STQ3sseb95VBPoNALvDqAmj3TA87ejmjzaya5K1CkDfQy662bAd2WXNNpXAzX76p9h1RsMvnh2H",
  "key5": "54Kn7s3c9Uf19jvFh4Em5y4bdx3DG87qucc3EJoNM6f7Eenaw9ej89dMqJH1Zp8khq5HK5dV7jrpMMLvz2Gv4Qrp",
  "key6": "26kqxdvSjCaeWhBtahPns8VBvvQSW3NjTUDfrCcYDHM77nCnE9wVm8GXdoCR1gmkJT5NkQkapNsxyuGRqsa3syrf",
  "key7": "2BXjDgGjoWZnxgqrvNGamkVf6haAZHPYB6RjDWpc2K8jGizS2XbHN6LzQCgWBrEY7baDjbGuZjTjYAxnvPw1YzES",
  "key8": "2o6sppkMs12qdcnzrur1Ro4Mk3cnmqdqvwPmFsnpRpPaSjKuoXvhJPJxW9fwoopiWFN5BqBUDVR8gkDoqm1fUbQd",
  "key9": "43G5sSUdujfw9YrehJGsFCsGYKjLvPYH8m4LmoEoeY1nJp49LHtuYRMWE7BhU4FMkBMmEwZm6SKenTEuCJTpQ1Y1",
  "key10": "5kLcsaU5j1bPLnWSzELWr9GheoKS25LX7q8B2o4CPmYa2P1smYJRmeaatJiqLyi2Q2eDygbS9EdEcHgTyAbRrPtz",
  "key11": "4jY9j6o38jo65km8iyzX4m2BvQxrnoCR5yrymu7G5R7UQryznZ7F15BarCFbcUbcKBz9draMGUVxNZE2JgYy1BTv",
  "key12": "3SR9wfZbC3o3PdFf9u2pw3qs7Dz7tDf9cGmzNBbrdmWaBsGFjk2u2cVrxAfFgbWswmF5kJJsrcRtQTvYcrK5b12M",
  "key13": "2u8i3boFJXpqHHhK5deZWut3L8jnLGB5tRB2M5agBf6cZDFcSzwK3HPqw91dLmsMWbdYvojfMibNqfNDGW3G4oM",
  "key14": "216sg9a8BQdTyB95E9fUyWJfVKYc6DCgjeYWn1cDBU8CYy5p1wkUJtLM5PEcUVTGQXpPEAr7nXizsuHGBFv1uGo5",
  "key15": "3nPRfRWKvvFE9QCZjrmBsAvTZjXd1JaqZcuVp3jYKebey6TMpfvMfsXmEP1ev4if5TjMkYq4nxYwGJDzhjCgc457",
  "key16": "9pSnYgAri86pJnzfC9cVWUdBTBUSz6WGZ6QZmHsh9LZTzL2LTjKVd5XaM1PnJMHkXcoBasaX9V1fCEZb8TotUuJ",
  "key17": "574QKhPBPPsLufgcj8ssNM14MJkFhNf4eVe74jU5bfH7QLtf4S1Y2gmhs4e4o4kCmcCzsRJojULCWae8inuSX1fZ",
  "key18": "2gWVCoNkgEt1H8xpzeRaSZArz31bfqHZG9BYvFEXacHJ8aqr9FLpLTeK3tddFAsNU4pnTrVmUr1CgRbNzRgGBZHB",
  "key19": "3KF6ddihYsFzZMUZvGe6zu15KV5yt151m2rK5KhswKhorNV1pR8fEnEpKSvZPJRHHrK8dSB31NgVACdyw5n4s2Rc",
  "key20": "27HhWibhkwuywVXN9UQaEriRmhBJNbntrypWUbWUKNQkYkPyKoCDn4z65QwBxsbPgHFMmuGvABaTgUZZuXcbyB1V",
  "key21": "3pjo61euUwgkdfarrGZks7TbeBwsYk3R2E8Rssmw2459nxXZG2w17CJtb551gyPfd1pf99ZYEW6iAMUX8KoofCVJ",
  "key22": "24Tj2Pb4ehib81TyPyGTrevgmJwqZeNaga3ZCrE3yroJTzRXXYJF8kUJhqnkcptjXcZeKHktc7y2b1AseBY1ejrF",
  "key23": "5Y7TMSLhbCxTsajmRFs395Uy4svMcieudFp6g2LFr3tEw8eEp5K5YCATbQHJ3hK1CRhp6hstWNScsfeaMZcUCkSK",
  "key24": "tDqMdyUmukHVC8HjydHw3kqVySET3tna2LpCC8pWfqEQWGmRPzqV8KWc4v3c7DiBQkwHcPVjuLpKyy3Rsfawggm",
  "key25": "5yzj3BERhmgDuarKycLC35m5RAaMWuGFXH767pW35igr2n4jFmGmvHFqjoj1a97Ri2QNNgEgb6tHYNqVgfpJR66a",
  "key26": "RTSWHyW4GJRHrCYPAxFasfUd3KMQFuhnfUv17SfjVbuxProwiP4ddFfwTCMY365kPbLySmjm8MMgj1456bX8XU3"
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
