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
    "sxFtog6U4eY2DL4GDpJubSNzZv3XgFWnHLtPikAuWUXugJgJzLsSQ1t5wmksFFZPYbjYuCAFwmmHLB6g2Zw5F3S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JEebmnHY4kzT4EEoYoEkmx5y8ELNtWKrCM28gJFAGP66ndibR1wx7LAWFJeLsFLd42aJteT2dvDZapmoaC25p29",
  "key1": "5kZ1mBJvdJCEmom5Dvw6piDqRPyuLBWSWLPuR9CLiuRPJE9zYDNP9MbK9gbDygCsuyBpXSyqxaLoqrno8btKqWoi",
  "key2": "4hPJLkQ6KyYQSvaJUHhLuMoTtxqqDGKd3oUr8j4qLdhVi4FtfFCLeuXnK26WpMFVex7HmSqTmDfUAoLEhArWrfUj",
  "key3": "56hv2QrUjKzowKb12h2M5dMEqeNY9aSvYuUFhYaiEm5HzK7BoENiujSiD1XeUY9Hke7UxCss6afA9tzq8andt9K9",
  "key4": "4nDXTpPbmjXPQmnejLK3icFEhNjmCW5UEHVWsi6G5y6qJAUAznqqYFnc35MAnGFL8wYix3KKFFxcuaBMAQA41USk",
  "key5": "3gfJmSqFZqF8AUnfBtkow3KzYVKH1XMuWTyNZC8XnJMGZVeVtNwE4ZnXL7PVT7ujdkNcPochRSiHB12MYbCqjFr6",
  "key6": "bEbZUBzXSNurxByquL641aRtrc8xnyBAyR7pLPhujyR5kJ41SsJC6aovwqxyCCz8uQR1T3qpwkFciDKM7iqaFEu",
  "key7": "463hxSVpz5p1xXHPsvnCEPGWaNYLheoRsGjg1JjyeGWFuoBFLZkuxXrWbPDAv4diQFidEki1HSYPYmhRA4EMyXaU",
  "key8": "4vGqF1jb5eoB9PVEtmQUtqKDrfyEvnubwvQDYHRiTsEWiCBDw87ymnVRvNSzHqane3qT4qp4DyDsVbDvLRYnd3Zk",
  "key9": "5CNr1kmfGpbEcUrPLQyuK9BeU7xSVygYeWSf9EZFFpB5j9ERv5JV5BJNcYtr7pmsi9W1u8RU4yucZyR3RNMovM2b",
  "key10": "41vbg3BiMzmN2NLFG3Hwfz3iA2RpT1w1A6LMpP3BJ96hTiAA4zSGR3uCwikjUtCAJabrAfHESjNSCT2MGmy15rgr",
  "key11": "5BD6wyBfTMLW2yc8bmeAnYwW2fp6eiq5hAZyBdd7LqKpGkdepp5GRa8PZn776SmiU8cpF8FsoCdYArCc7U75D1Mq",
  "key12": "3LUwprY7GGzjzCPY9rjM4VYs43kmZXiA8FTibPbBKCNu7ZYLBWiLsmJWc2wxkskFVFhgLAgVFd1zFMTummhSEJXv",
  "key13": "5XxYJR89JNUZWV59xYEPkAzcP7jU3hZ3CPnJAW6DX8srLTbbSeXhUCass72ek287XYr1LjA7taJ2hwSDMiW92Prc",
  "key14": "2UxtAcepMtzQRiDb4Rn7jqWgh1naM6SW8Xn3odsPxHBMUgTpo16DZSBiAfgpQaqkPRcKPLWqQhK7ih5vCjWfSMwB",
  "key15": "5A4dSRUqwXQqyxwqDf6EZTPjz28pQp18YL37pa83jxPhLDaYqtd3k1PaRfbA27mwzXkKi8RdgEFJf3AyY8qUaCD7",
  "key16": "ZhPqdsMvAB3uT6w1RVkcsdQszDc1EqTN7c58hnJfiu1GW54iXHZEo2zqVMnzocb7PSaXKfvULkBApaczNctECkF",
  "key17": "4rUD1EHo9YXnqjcX8Yejpo3J737NSxZp28pfiKLQAkj3EQEHWBW5xevupJfiNNTot9CLeZc1Uva6MpJSxy5n9jHx",
  "key18": "558dTafZ9U8YgHeiSBreNQfiRXYv7UniZEe4MGMTKRBVEfySWQ98Z2asTgYRg4XxJqXSfLw3vyqBJn6DGXXD4x7r",
  "key19": "4jMKC2dx93gVfVdFUF7Mdq2ZR6TKPobRU86EamsnfsaEuGWeGNQx51ro36ef8VKNefSQgwcBTZpaYgSe2D8iV9as",
  "key20": "4zrmY3mEpiqcxmeREjPiecPAhrSoKxGNSiz9eWGkfjwFdUVswQY5xREsZ8q41n2yVT6NZx8xnmRm9nYk7eApever",
  "key21": "4WbCEx3UykGwigLEzcqZpjpHkGPpFVa1UD63GzyvNUvyYu8rEjxA3QELMFzW9sXPuUvJWL7iiXBiou6oigyxcK5G",
  "key22": "2VDC4AsaAUN4Q68rsakcdSpg7z35PjU28JoX3y3rPkFoK7rQaxGCkvqPvA5ZV25NbQeet5hn9SgaRpKXT2XtGcZn",
  "key23": "4EmP4CGJTGovsAcPagX5yLeBXzQA8tgPg3FKMAi5EMYPxmZYLP3SYRvpKcuAKU7hwGs7GQZSLPgKHVXP6PCEgWaP",
  "key24": "5JHiuewQ9Q83nQuNWukLbEuYMDx7JjjqkVLFLm8Rgj43F5XTZ99VdR8Sfy7tmocqLJRzppxb5tSiP4JqqpJbD87J",
  "key25": "2ymUdwBmaj6FpWRr2NYQRLG1TwR36WZiroznaF51onLVoz9W49LaPf5aYpErWcbAnvLHqpGEY745MhVaHe9eBBBD",
  "key26": "3qL7dHbSF47PmMVKsAn72b1iEfa3nXtzAUihKncXg6sc6NokpHteTBaXoufUMgFvdCzsbRPNW5GHjyypXs2mNSLc",
  "key27": "33pgPHbyAVagMziu33Ga3AR7HT78iG81RNdSCobSoNPqRNJbM6Sj99GSJcoMooSE2FYj4vtxp2JVWHwmS259XskV",
  "key28": "QofFhmWfjf3dFwPd7cufwJiNeRiLKkZCerR2wymxF83UXJXnTdVNjyHusxDxkJxBdzxd5mFLwPzXR6cW34SrSXU",
  "key29": "4mih8sUnoPHpk7K86u25DMN9Pa82tHd1KstVJUA75ZfKVgAGtE2KRWsbQAUXTMvMJ9BnDjETcTkZnWPXgdrpfVpv",
  "key30": "2AimNdHrHiezLS2gUEfgrMngMGstU1oZZvyqywcN4AqQ3dZnZU4PRYTvjTf76GSkNJkKTVqjBuYqt7T56V6izfah"
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
