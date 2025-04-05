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
    "2y7ZREeGaVLpPkrAq1mDRKk2xV9SaYwC4CwmSSF2d858tVERUAyT9A9bACsFHniiHdTRCXH1mhTEWhuNiMtvDsFs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vGcdoHEjNZYJk3z1qKbsUDo5a6S6ppopuoRZayc6ECsxGA9WTLZ1NngK73TjuDG246jXwQz631VznF43oJg7UxA",
  "key1": "2STHoxztcuUw1vx4XBRHzwW1HZyY1ECHtnokWjN6B6SE4TsAffGj4oQ5oQENZ3PqaHx9TDumtnagxmSkFbtTSNzc",
  "key2": "29P2UkS7ZTVKUHFTQ5pvBsXRMMdRsVXxKa5USYbgD5Qu5k1CE7LeUGAPXEcZQUuD3SZEQqP8JSWXwtDAFkfseSgE",
  "key3": "bAHDdCnG8ADwVyTvPFbUDsfVB9q6VyJVqo1rfRh9Frzj8axpo6RoauDkhtugJacpk61ovqEFZatAEHFCaHc6Q9D",
  "key4": "5o1fmeCenhDqu6d9od546Eb6ZY4eY2sGjpz3JpguWgFihTfNWGdaDPCexFwdRrHEnsiwj1kGdc6GTxdWxms1yVko",
  "key5": "4Pn33Lwffpew2pSKFYUH532Ff6GW7r2YpNs9KZNi9fc7yW5RLjVYHaMUDBBVygdYwy5LoYfihTBuZbRJZHzfAPJL",
  "key6": "3biKAsLsAaicHJ4RzvXnmnfTMMDeKn3KJ3ZE96Jv3zeMdBS5ZUzcgeaPsMcMkDmYRvtFvFooK5vARTuPSC4w9z5M",
  "key7": "4jSCZDZLW7bBb2BXFHdn8KQmy8rHQy7s1s5zuangN98TVLuPKS3gzNDwpxXzu8yjAZb38i55jC2zsN4phzXq9SsE",
  "key8": "JW4yCkSuMJCNB52GR9gLPRUzQ6e8d4gxEtM6Qs5hiMWnqER1nHzT9wW1YGB5Z65jhGYfopivECFLHQRZwjjdMJ2",
  "key9": "489gFKVWWuKAWzbVXo7MoXMNmafQHyyu77ExP9Fz5nudVQues4b7Xxjfct1fYFp1r9gh5U2saJy3eMR5cQ25kxyU",
  "key10": "3njkFrDqW6omg9VccEfYLQnZDVZDUr7BvKvHsRLh7bHQmvjvhHR8n9i2TE7WnGJkZkS2cEPSyCx8TvbZmM3HJTrj",
  "key11": "53UTpqbRvubBsnDCayCFL7MkFhuK7UurLR4v5QzonV1djx9prGHaAepSfSeQJTPYqXavkb7iJKFefAR5PVCmh4fc",
  "key12": "5bWBdSJh69oL1RcxA8DUvfqbKHp9eF9566fNQjM2y1uwiNbHikcNVyrpAPKeAuDu6TRaH9i8jKCircqp3y5v57xF",
  "key13": "5X9wtCFCMJHiSiVimx2iDJMFv2JsNQQP5Dpue1gQrYor58QzQJNwYaTDangKAAXkWqEyWpQH954NhNWExt95uQpM",
  "key14": "377N5Ko9mS2AfjPLTNjrsz3JmbJi2bbSCAVgbSGx9peBxvauf7JeL28iyi95oqdshBQ2bA3s9FhVciCmU5TQH3dZ",
  "key15": "5SdHuVWs5yVQobmqxmyWSjaCpgPAum44e65ViweswswFaHvY2tXD423AAk6b8RKahkQYFDton5xnWs6vuLe1RxgP",
  "key16": "4ukSZEa91Mh2BR8gTUCZTeYt68vPgGxa4DJnaixdUTJWrdm25bmtJQ42n1aMyRe8B9rSx9V9yDsq1ZJUHtvSiUn2",
  "key17": "2Tr8gWoUmgVRgnYRkn7wFDo1SZooAKLwmF5BH2ckoAyQ92Ys4BMqvuBqe3N5RGKgPwTD4uLd1YEPfvPzt59hqCAD",
  "key18": "4jyroG6M8k6Zz62S8bqDd8x64F4QRiSqK43AydsrExS8HXKDoX2tzXK9AxSKzHwcwEsaTsHBZHFhZtRsvapBci8R",
  "key19": "4DJzwhpk7EGTwwwD5K1vuRvKRsJYUqK8eZXTu4KWm1pduSznVvN8o4foco8yNBdiQ8cHo1HqzGdTszfhf3tcCQCv",
  "key20": "5rFSzdsGeYcoDaMzsUTv6GYmrKxzBVo9mV8ngcuWdgAzWvJjfbKCaW6zYHjJUtKr5a4NpYEM5NGx5iMmvND7ruZA",
  "key21": "2U9gzTrAgqEVvvgrthzxG3YPbpvJTD59UEPoKfgMffoLThZt7HUuCUtqwEboxTVMEECerW1bNEYnPDAmX6LzQN6",
  "key22": "3Xz9KTWk1JuivFxBKF7Tx1RzSUDo2Qf6nWxSQaTLCywxRPVtzAH8WWW58aScVcaazYSrS2T464kZVaxwePoYD9cu",
  "key23": "63zzPKmPvdEwhtxH9aXmzt2qn3NXDLsyoYq39cRCwb88hG1BCA4hFf6DhbgPAZczKxn4YFaiKXAkFYHiPnN4PfQ2",
  "key24": "4rehVRwdFaBB8n4kyqnnNdkXVuWK8y8kF3ZF9ERr74zWYA1Gu3iAowHwHhWAmnBS4geY2UeRuckHnLD6YbcJbwHt",
  "key25": "3jKmZqmu1F1QUfkSp2mpEqPEEHuygrKfvUCSSBsxTKF9wGshBBfd9Z7jigcHUFZf62D8tshL6RN1VGr7AvuHDfdk",
  "key26": "5bB545uAWfPsRmg83zfAgorUSTRrGdLq8LVnjE7ypbQvYvpB6rBAvuRXHsfF2tmxCug2ffwNv73f9jEyo9XkHENM",
  "key27": "5Xto5ybSU3tJpaVu64UdETHry7nsUYSrX5YuA4tc9B8Xqp7quXzSvnB4Q7FaS36F3F5v7xPB8xdpom3a7Qq1qzpD",
  "key28": "21o2HAhcK1krJRQDeUS5FEAAwdtbjL5F1cFzbwjMsvu5xitMsGbSmwt6411KWkMXMNZHWDSG3WDYJzdRmcGGPkzT",
  "key29": "25bAdcAZCDUx3UdMpxhuoycNc3uam8dsQcartwCP9PjTTEL34seUzfG2aG3D2awWnGcByYeEhYkuevxDzDmUsCEF",
  "key30": "gaQbHEXNmnXJDMxgPaW77pWm4EjbY7tzbejGqbJAVLiq5Am3FjE665juEpitfDf66BkdZrr6UuHFHswjDQN3KF5",
  "key31": "dGUT9qELgVtp4L6f75SQr8Fem1wX2ccrun2nVQxMPsLoJArk9j3mvhDrpDU55nFcqSNTBetQDwETCkoxVovXD4d",
  "key32": "4CeETVky2erzivkAGUJJe7nhruZeMDsnFaTionZuZgDdduZHMd5shosCANfmnZhEPbhbb9pGh1yyM41BWcfya6Hp",
  "key33": "42hDpB3PwSQwfn9PNjLzHpdP2PatVmm7TbGYTgxxsDeXz34kPMMnPBH8we4NtXqFAwdJpar3RZVf73Yk8ChPewQy",
  "key34": "5qaY74PDqx94aMjUW7oLSCam4NWSdPZ8iAkoTBcwQT4F5U1ztrDsbSwZw6B2ydTf4AsDcphc2h7D7sTYPGsTtkQ4",
  "key35": "3EpKEBM9JRL4yjswwBnw2ACyHbAejESfsz95NQBc34DB8JRQ5wR7rA8cd2RfpT4WNAp2VCjSPVkPsMUWE59HviNd",
  "key36": "39CRKFRsxEzS3hBCBAYw8reAxVADezSri9WU8BFnvAGGQgaRde3WRJf9F9biAhFUpnrbcH2yXEFJzrMqjMcwqsQ5",
  "key37": "eykHYzto5NUeS21GUQgL4JZrMZsQJsdKcRmhA1fCWb49U33W4PCyVMDyh9TXWR4QUcswG6XrS8Y7xQFsLnzZMjd",
  "key38": "NDajr17vqs26AuCEoA1PhBPJNmaioXuAm2CauqWESGM69jrCk2aqpGRnZhCRR2LudFx5TH7eAsPBdPfmz8JEnMe",
  "key39": "CTSayLEtVc6GQWnzocThQuHJNyRciJdPsZYSErTbdR88oexQK2zDpYFEL2ZTQdXdXkjsTzenZXeNoiM5q42sVVU",
  "key40": "36zsHVdf6ggKteXo5UQj3xA9aa2LnbFhchaGTAdcNzpdHszbMqNwdSTsVK5suW7Qkc9kTEN4jK2gixZhHhWGyHC",
  "key41": "63CK12qUNMwSSALWE6CHTxoBXykVSp6vk4x8rmFGVWwrcxWUnMSC9QiKPfx42Y3arcWafvc7rHiW1jUPHLeTrpey",
  "key42": "5VoqNkxCT23mZNHEV6pRTTHdZ7A9nFc4P3jrUvUYx8A4zzamiFScuTSNPqA2x7HmDyme7YBWTYJaBA2jjgherrT4",
  "key43": "5EHiygPb6gVxHoDTBU3vFd2xgKL8XoJzeRBqf9VBojAeZDcd4RJf2EMJhNKVyeWVhWqoKTxXLWVTKFsb3g64pDRn"
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
