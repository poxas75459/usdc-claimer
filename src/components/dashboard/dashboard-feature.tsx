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
    "3L5nDN4RpQ6Q9R8QSQbqg7U2KuLyaDEVz9miftomtVtDgzAwf9s2xnFC7pPu9GQWDJfegYJtEmBY8szhnAJSTqqw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uNKx4yXsfbShfymmD5nejX9eDGy8jmrmapVR5v4yZDnfK7pYsTbpVyH1BQ6AJuGqDdcMYEG69vtZgaKmsBtDFzW",
  "key1": "2nMH25eMeA9oVsbdSoVBXzcqXtqFQGTq4e3DZ1wzZN72Rr16d74aijssJTeiugaUjAcyzQoHLE4qCHYZoucuACCc",
  "key2": "2uBEsV4UvzMAAAKsWoekyMxVtLYhRSbT54HU1UWHeUQ7qZW7YGud2o1vW7TPDDMgPwS1nFDvcU2hws3R6EV4RCv5",
  "key3": "uHuSjDKnBZRqqsyimng217FPursar1XuFbBdtvEYyHA5Cm1yTjS6EoYVAYNsnKUnZBLCLGoir9NunTttya7mJLJ",
  "key4": "3p99t7Rgdo2FvxJsi7XYHZFxYwQdxmDvKfkgouNcqbpLsFv4WmksD6yyCWjLaTYiovyLxfmSc8imfoN7bdMxyMbe",
  "key5": "5t7f2Lwj1VeqTXsx8qR51moyA3sWUgmTL5iPc9QZSoHkKnaQzgZecj5ko9tkkDTcmRUvoHGavgkoi49jDhW5GxM6",
  "key6": "2supFbYZfuem1Yi6jYJiCuVAHNdhGiegE3sNDKi9684ECLKGP8w2xXGVQQLMxgLuNGxwBkGH7DAADX9XFSmbpMcK",
  "key7": "4ADZMJWwbov3YG6F8aLg6tbjQQwbbJNi99qGCJ2yJ21wCNcMpgV8kijf9neumG9m6TG6YY8ZX6EnD6hfRSWtZNiA",
  "key8": "2x234LVqzwrLxyxzazAvniy3MBU8Hwxg2ivR2gwiEY3P9hJrTpnECjr46tEnLrANLQqfuZZ94r9eha1Uk3LsFoAT",
  "key9": "5AeYsjMieeEQyEdhY8i2VktbYBUxTzBx6xBSdxkFh9ME14V3EgvHeg6dzzztuALF9Q9k2RoN6NbcpFk5K1csF4hK",
  "key10": "45NCKWP9T9MyfVgyxRcARxtUAobTrG8MVudcgVEGUC3ocQwCRYfEzYjUXai3c9sikR1RZ6MeokSGcT5BAhT9wM27",
  "key11": "41aMogcD28edsDjTHhXtQH5EbeAxjLhMC3Zok34ux5vF4TcjfbwoiQuhFAMXwNFwHLe9njEWAfzFmmQaGo6iNqtD",
  "key12": "3vFRTyKbbvfSevFn7E4tbd9T8NXoccmtCCvaz6LvFjgnwF6cBAZxLrtwicQKREwsAyT7aGxvHTw5iheZNqaP95XX",
  "key13": "4mANwdkPwbX9XtDBAYjheQXhXEmtViseSzJ7bAud8b8WRHTLCfMvs9aQVdjbvt97SHFso4RkBNRrTTAe4btCWfPA",
  "key14": "5N5BSa8BarPD7eqCjHoMCSVhBdb65gtPD1917dVBoVMzWW7SxhipnJD82RvgyDfAyLsqq3yN7vKsrKmp5s8fBgqg",
  "key15": "3TyBi3rRbu2BuGQFSJPFdVYgeWL5Q6ryqxUycdEwYxJ9ZSfNjRKGZKEpoJxM45daJ7T59jFx98hfup9CcGvCVgxN",
  "key16": "3QG7igmjqdt6w7wdXWFENqfMnK6hC81WhSp8HCkJbCY8w81uv7PbkycFV8TaS6A7MEx1us9a4cC9vjn28RKRrtwS",
  "key17": "3uT8Aik2pfS9qxJfiPKkFhnhpECyGN89aGjWFMq6LoAzYHASuA1acfxrXU957ydZbKmtsk3gxp2pUgE6u266bpKf",
  "key18": "uAasqPB8U5ujcSXjr6hHX3V4Q5AjXvuLrNrUewfTccCnuGpWepw1fS3Y4EiJbA4Y32N5yJmuGRB7TFRNTZJE7Yj",
  "key19": "2G189RaFSWe7ynwU2sBJZ8DioacHF9mA91KF5qVjsUEq1cV5n2Yg6C3w1D4GgPEGstA6m4PP7c1TvL7gHg1smWgV",
  "key20": "2DUMat7DHMXjYNBxuT67jMgPYtJvk3jGx6zZRTVTnd7JsuyGsQM2QkK2tafWaZ81fV3Za7hox8HrpkaM22Y7s27S",
  "key21": "3CMvc41Vav346GJPjGiLCBmLjmospC4bFW9yrq8mDAkgzQ1Lvo4UrxiCK54w4UoEA3dtNe2AM2XR8kzf7fd61Pz9",
  "key22": "5M911eUwyB9TAZkwBbBkgsR2cNkcrVvqoTrRUMdHXDzm5hbTNCSxfSUm8fhMpdovHuMXhsgNmFCMv7zzapvvPJY8",
  "key23": "3CUpx74nkST2xkKHz2D7Du9noohkRBWR67NFz7imf1B9K9WCigR4RFbjzM1vrjBG49tk8GqX21sTx9oRvjH3p6fe",
  "key24": "mDKsxAvzRpnkCT7jdVPKvFWgc6jy9NvWPTXeohptEHSvemmHp4TBXh9tEK6mycVmMs7EExFGrxeH9K1wNWg9n2s",
  "key25": "Jqo2aiP2WqGgxzHfofMR68mkGYofcTeBMNe1trKmYrKKqJXGZrrRGjSYCw6hfPzVtpGtNcP2Pud5VQAGHxYQjfA",
  "key26": "5zNLkBmtP142ztQ9mPnkUpPVcjPmRLER4VvBko5u8yu5AtKu6WKKg5kGUKgm4iVoWNCbEUSUJ7KFLhRQLo3J9Si5",
  "key27": "32s8BLJsfgSYfh5QiZwbbkPo4KBFAa8UBuf18hHAzwq8dgiUUeRJRgpWFyGFMZJwFsdMGMRCDFWVJpnjTPMJd5CF",
  "key28": "3gpE3MjysH2UD1sz625AvJwjzsK9TsuqYcvM7QVbAUuaY8gmwsAjoatjPey9naG3FAk4Fv13tpyx19iNerieaQ9i",
  "key29": "ZaE9r63ceWaURJmrQwJcGMt6zFn7RWpn2EaK93cB9zPZFYRwwdNav8Kt2GEq2X4PU36VGpfmTMGmwo6HuDRRusi",
  "key30": "5fY3H52HsSjUHDyp84JfvVp2Vnq8S3Ct2mgjbfQWuEBw36w7cYCcfXrnJcNbr7GsFNEGXB4FFWZEnBR9FAGdv9o5",
  "key31": "59yaCK1czKW8rLToyS1fJ2EKZawyqS69iQwShUzfC6NGW7FYagP9trjnMaWJT1MYW7s45iG513ZhzT9XpmWX1cJD"
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
