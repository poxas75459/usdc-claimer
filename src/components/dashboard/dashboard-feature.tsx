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
    "5fuojtuKeDjzJPL9BFxs16tCaLW7SVuiwo4HBYe9DrBDWbuXkL4MdxsxBEWMbwUE3TNpaSuREEA5b9XiuBanBrzn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BMXoeZJ5abDwVFE6C6raeMuDyAuEKGSmWAn1SEoY7pU1ZHptbVvMnhHo3XWdykbd6Xt4T3D4nVF6mu8FMQc5Ktx",
  "key1": "2Eo8KJPK3VHcUWTwyFzpjAzcYPhrEHzyN6JoWNpUSz5xopGoZ9VJeri1VD5LyWpcLscKWarBc5wsBkxPuqr599Vs",
  "key2": "4iRbrF8nGdkQeaFgb5oBqLWBWgq7fGDkKoEkCRXtktLDR2EhiftX4Q4pYcypukk2ZuWo2F37tAba5UnzzUGoJBcQ",
  "key3": "nYmcUYsNyRvG5DvKhNYte83oqaUZutPx15W4L3Lx9e84eEp2nyahqZbsqgqos5dESUVKxSucwbFBeyFRHkL9tuU",
  "key4": "3TRaZNz2c2jKCiCTxXZ8dFY8GMgZ3Sdxm1XGief5v8jDQ44ncoQRi2jgjQ5jWpAhAmYF5Q3vYNT9E3aZkSDjBbXs",
  "key5": "UCSuY1b9VTf546CnNa2Bn6Ke6ifg15kGDd8pmNi7ypvhPBp5gYfS8zoERFVNasoNJMBgxwbLLffmU6VsEq5Z9ca",
  "key6": "298suHZ55BkNWzyVFdKzAL9MhR5z8r3TQECN5uF7woMDx7GnvdWUmXaXs3RBa9Wnah7pXdW9LHz4N1adzZgnzzaP",
  "key7": "3gAg7wdn9jHfGzM2e8eqiPABU79FSBamsMHzWAddfEWYXd3s7X1ADfuVFbXLJHjBXUPsK7LYNskVai4v13Yi4eMs",
  "key8": "4mGJTQEf1KTNCkDJFG4PrqBxCRxx1GQetyDqCqwgXPowjm44JrxvBMoTUZDGXJkAzwXcqqjtQ7rfDPhkVy9dEx3m",
  "key9": "4cKwNSGovwd7k9Z2HDHgcGh2aA69d66tkRMmoNFn51uSLCCLVFFgKfCkTFZ7ZTgKKD6gsE7T4kFzeoQALCVsN67V",
  "key10": "5QiSgQjvwuHYwjeusQ7wFB3cnULKzaW8extTjsosR4DCNrLotKfruqqUU6bbqRN26JKxFRVmAwJBf7aKu2Kd9vUM",
  "key11": "4a3Qg7YvD7v6yppbjamQxDFJFnyUa5hhQyTwLMjGTjJCjmvLXAiBApWgaPAjgdRaxka6r6LcsiA7bRq6znCqvJTV",
  "key12": "5yYriDafYGXkQCpYCpsnKNzN28aud4WJpE75v9z7HzRXZJB7Fm8Vmzg2D4QgjGnzjduPMJoUYUp5YHt9rj9LFqnM",
  "key13": "3EYm2Lr3uTY77DvQxquK83ojMBEYdYJW1tDeyS2WJkf8fmJBhJGt7JHKzN89TWprqVkftEEHWaxMMztPysueLo6V",
  "key14": "2kG7m2xFvXtmE6ZdE6hpQ2Ypm3WULtDjocvzS8VW782xMDct21Ykaqqd98tR9Q429e1CHEGXgaxgK6yuwWssZmm5",
  "key15": "5VYPTS2Xa7aqRsFUHepNfjVd9JAvVALcKiXkZyHg822MQXZMGKjBpjyedcXGD6xJjnUjKgD5MVyiQteV8ekSLpT4",
  "key16": "45Aw9nz17ERAE6nUeJSjF4U7JCVLYgn5LQeGcZxV9es54Hi9SrzPSj6Sz7PA5kNwUJfBpp5zCdqD9NMgLGWvYSwD",
  "key17": "2W6rMBgZr5ScG5eBrrtLWS9F5MDkxMRTeByuJ5b3qZTbHw397NYCyzKZVtG99iF5SLhZE9vabjQheXZ7f471Lasj",
  "key18": "3VnQ9Lu9Krv8SEiSAAiNxZ5f2dacm2ehrwxJotn6XbPReGsPa3cMiLzrbGBAX4MZFkFyHjs8vefQFj8PqKCekvp5",
  "key19": "3VAB5MEQmvvFxiv8ehu433QuYo2ScwgAKjZPPJ1niiFGSG484DZrgrqfYaj35T5TR6MQWswDQcwF7tBqpr6RJNbv",
  "key20": "5MdcAdnpmucp4qUK2P8gdhQGQQwBSqXHYuDLdZGjqCvYscsNMHJU2jtbr8cNCKav2eAzZcVCcPFENAquR9Us38yY",
  "key21": "2p7u4hhFRYk73szytX8356tmiv8xz9GJcfVyMiQoqPn1cHv9qAsPKfCRrmEjABk9JqLccmQEJdeHc1s3uyHHENVt",
  "key22": "2HVxt52hZFoYxyuypG5LvJnBuJwjBtVPrpzGow7GuL2K4W2rLSBze1Fq4EA2DqW1zdKazMMqJcsxTc4qH9hS59PZ",
  "key23": "3vUeQRKt1J71hsBFujA96rksEbV6TnsPsbiKk5hJtpPpZgWmhobvnpkyX6wMSh2k8GrU4Ae9mNrXfjRc9v5gk9iL",
  "key24": "2KYigDrTCfNsDSVZWrb31gM1kHRZqQToHW5mYT5aNPPCesthqVG3wpJeBU2iJVwVp51j9nWmkeFgZEbhwS7XbZxn",
  "key25": "5nZ48fEdJrqqQfN3ckxkM163mdfn4ckkLtXAXs6sVL88SU1npYpa79Lsnwn3fzgDqafTezYwoScCJQWA3f8uPLiH",
  "key26": "4CJV1GaYU2X1V8eTSNgGpF6n96w5aF3aKTFyFmxwcuFTimPQpdEkcuzGGyGevxaVWfxo3y7G1XZjqJf6nRFHhQjo",
  "key27": "3bAePhqDVPo8WGbQ2cGqqBHNDwpvP6F3jVXGq5wvgYTJHWrhDy56C77bA5trymh9MMKgUQJH18ww5VahJUGfeJFz",
  "key28": "4ksvLsBCAVkyTcAjqnnJRJEzMocZW1gxWuk7ymyxbYtPkNtghk9D2xSor5a9deuAdMGgbj9HgdV2pcFLb2U97cjQ",
  "key29": "2U1V7J3uXn1VBokgwdcknF5jKW3MSQ6sXTTXFhYrcQt7jqgFK6xPeKTtagCz2pSS3gwjr6HZSARof7qtpnvv8wNp",
  "key30": "mVCp1h54587MBYuZQUAAzUYARwjVtoaVUiqU6k3186CwqfJvKeNa8bbFTHBguxW7N2jEppkKPu6wbWrtxsj56pT",
  "key31": "3SaaqaMpSE7pgsvAv23kA3eNnQtGyYGQriZ27HdUQge8S2uWVkDhqhef1NFshVnibKYgVH2Go987gAR6Y8abWXav",
  "key32": "2uXZP7aa5v2ewXeEqVpaAvupqkiCPsyTj6jNhxDWpLkDW1zZWn7ythrrvCihPj6JByQmhL1tw7Aq2Q5Dki4HJvPJ",
  "key33": "4oBqCxFJJVhjkPKpVuCuHibtotge3o49PD3kGfLkTwjRXXqQ47icZSkFjKymASqz7nbk6X6aszXixBigCzAc79wc",
  "key34": "3J3NLWDYBYm7zciHTdCA5c4Y3b14pUTcT2jVR5fKEWm7MpMs8kNbAgmkihnVNARZLHzooesdmxwCH1pzRBSDDS2G",
  "key35": "1Qx6Rhztw5a7G1e3cR7Uhm7MFc6TyTQ1Bz7xNwsmWBbUKQCrSsCG5pKTKhzMDbEW352URug4V8YqDMrKe9SppKD",
  "key36": "23Z3VJCnKX7eE9puQskAo14nPxFfUEorFKYFyshuozuuBXVahXsZeGAWA2WHkfnCzmFysPnGdTt4YxhDZkz8pdpD"
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
