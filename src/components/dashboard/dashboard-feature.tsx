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
    "MvJWZzzn6r1xLTHEw37a8zAH7YijkAtRv6Hachi89uj3mfnAKzookbNVWw6P26xtbHLsq1Tc3EDExoVLn4krgMA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qEa8fHWawdrh9UDji82RdmkVX7dm6dzSEFQy1AkxR6R6NC2VEtEsLR94KjByABEhjGiepJKxVf5BzQk4DHCsUHs",
  "key1": "MSopRkTGBfaigHjPnx3HJKXgWBaWrYA9NuSCnK2wB7YwzNGrnqCjAaUKWwasFktCctHSACnVLbCYRyue6aRbsF5",
  "key2": "xZXVKMVSAXMPierRHRSxs6xqTAWPVRHQPG8vzykyWHLzK79CASAR74FRqXCFDxejz9uCvtcXGh9dVdFxf8c7gZb",
  "key3": "4MeiUUijc9nSy54KYyFE5dTPU5YaQYCqbmZizmg5VYUk8LyZ48XzDJJ8cHSLQo3Pq4woCgiPZQvGeXvxW4qmLemz",
  "key4": "3Kgcd3rhYQGFEH3Pa8yCJ7DiSGPtUpxQC5iLevUYZyRgMGrWJq11VDKyKoAhs7nCmzpP9ACerQ29CoV9KY2Wp32i",
  "key5": "4H4JMfLEWeNMhKD31GcxaiJD9jjvdCYFBzCTsLEnNbq2rddCNCH2vNMTSiA8VzVXJzRuLV9nRAzDz4hNSFKqaFsZ",
  "key6": "5cfheiGcWJTQSK2hU6KcRh1TsJAwyn76TaTNGMYqz2gZy8wTYbxsfFuD75mDhPTGG34Cigs3UWBZFZUuGY1favoU",
  "key7": "3AQ3bfHQzbwLGAXhB4oyJ35j83TsYUwPfgBsVvab8kWquw2xLLLG7by2Su4XewY38SBWcyewwDaJLZHsn1nNAfsb",
  "key8": "2eoYLRYrLj9TcnP2Wu8ndXWf4BzV4y7DxoKDeC23422y9dTjCm5x99a2Z9HfvqeTgoJiDxMYtTuhHJYsq2hJSsin",
  "key9": "5SPSqHW8eLq8sSUBQYavWpCLbzg7ngw6mTX1Est95fYFzaEJBv37VX2Fk3tCy5ejJvsUvn232Kd6abjpUxYMZWFy",
  "key10": "euwvyFmWxWVvWfJ9e9eFZGGh7ddtVcjek1TdwT7ktp18y7RTqjHgRHWzUotZeDwThoh1NibvUCEMrdmpSa6BsmR",
  "key11": "4p4sG8G6mvFJRPD9pFV6v2jeB4EgsgsVFnqUBguaUn7NKUFJrQMxkhGpabxFB7CTGQaGf16e1mDED1Q5kK6DcDrh",
  "key12": "3yXCf5nquH8b8joMq5B9vMLszdg19Ev1svfzeTYJUnMaYsZFUhVd4HVDDkwn7jSJUTonmWgNmHargkdvEWPeLwpd",
  "key13": "5rSUfDYhZHcWF3k6vZrxQBN2ikWr7CzKDGQ3G7A2qTL3MAP4gqRZ46pS9PmndVfCvmr9ya8Rftewc46zzWhRu6he",
  "key14": "2JoQUiuYhRp8YvrYrGr4ab2nauFBuqdyVmK3esiYrmj4UEdGWnjZ2vf7BvJr7VWfBXfBorA9h58jAdtujG7huxAP",
  "key15": "4J8UrcMU2ohEkrp8HFLVXAQGQ9V3HcnLtkv5ozyT62KqmQuQiKg3NdzEjH1z5tnW4M3ahQUJEwYndYHiWp4TALsK",
  "key16": "4pR5jFyEByBtP7JaZmbbjaob3vre8Cp78GDetEUrassDnuTM7c2ukcJKpedLJDAgZZQJxdHQJVnn3Dk7Yr733HMt",
  "key17": "26Fr36JwBB3MBbZJ39q8xn1m9xyMZpc3xuixXzNX1ksy1CwYMeecoUGEWw2k1fGh1sA2odk9k2UeEywwbhGgH8Ef",
  "key18": "3gubFNnnSCEw2Qy5LmcfGXg5DhR7JwqTHvwuPL6qCGfAbML26LTjDvMjYHUEu7W2JoYTTm64cP8AbP9xVnpRrhtF",
  "key19": "3xunekGjw9ejNUrzfjsyJkuQg3yC5LrD4D46UFHrySEbBe29wCSkCrVoZB1W3xaYAYsSVgnBFYYaJSwCWfibeo9v",
  "key20": "5RpEGpgUWsA18h5ujnamNkrWrCut15CySidNaCph9D8M5n1adpH6GzoCV8rGch4AbhvzPcRn4kuNzNyWShJQa6NH",
  "key21": "4YaYJQFRyKXNgQ6Eit7hA9vjzYZeHcqxRPaJ8BFYS1si7efiumSHeHtC5o3d18EHKfK1vQJ9hH12LUCruDC74qkB",
  "key22": "5Vz7jGu5GnU8xrYFymspod3fDhZhVgM6GkrxfjsDmUHSdw76o3H49MsxMJCMa7YTMazGxPqXEbvgMzTkxNBH7fC3",
  "key23": "gpsBvuhNyx2PLmTzzsoMN6J4eXXAEyt71YbBs2yWzeXHgFAzPqJGQSDSh32G2p8VTAUMhpYB6BnCp6g3r3C1EhE",
  "key24": "2Y4brUECWatNc433nYuofGnA5Asq9Y8etXCBhsFG1oMpaoXiNqnYRygoYeCNb22zbPcKWQzHfY3BG14guB12bVPc",
  "key25": "2A4qs57V14ZsdUXv32Z7VbJhe3geGXccC4piv2Mz8ySh3cMEqaYTsLvNoNZypFfJXWRwYUsYhwtAk7XaQgDZx9Ud",
  "key26": "5rLwauWpqT8jtftiuL5Zgkxjaa2UaeKCTqKkGxQmkRD2jCcPrdouksLZ4X7N5SC5mfHy1RV1nG8m8kNidP1vR57d",
  "key27": "5ZJD67dMkGMYHx7zpByQdX4oWmqWEvrMNYPGU2refNKQCYXBUtkNemeMx8oc37TKZzckEsMkS4rztKYYTzrvHZaN",
  "key28": "whYMkZEgcXG3w7fXDBs95J1DG1jPpkXHNuw4cRttsg4HRq4rfayBbxJYdP3qqwtwEpj6J7dsGi4Jd4tRnZs27Eb",
  "key29": "34rvdhfdBvYWKfnhFLdim1mRAe6urX3F8Bim8UsD9rb4a9hCZtBtyqK3LGB4DGckRSQgKiRjaCHbaGrWvqpMTCU8",
  "key30": "34ZxURa3MeHFT2HJNmDvyXG4WFeRq8P2dqpnVvCvCv5v3q5hWhDMBrLqwXiDD2sJ6heGukExZzR9yfUyqDE2cRHY",
  "key31": "2GedN67qNk9M5PqVLp9xd7Xi183vZpZHk3iWymRscBBjLras9phREWKLJL5Q33df52zJ6yEuDGWsDkrWVMg3tFhF",
  "key32": "31A75pjPdZKvjSXxENg33HfzNNADEeduhmpp69CCLAw1tJyDEdtQLyPCvDzaNPaotTf1jieDKYEfjhNKKchbf9wc",
  "key33": "2zWR75QM7XpVvTNf66WCR9fCqQ2tPRPu9cNVHKWfkHMiTwhPV8PpLjbFtL96sgnLmn4Sr52XT7Rx7fHAeVSH4zJt",
  "key34": "3nq8EXEX5ycdy246Nzc4fvBsWEGKhKx8jo6NLSPY8MVREJeRPhqM2Gcsrs69no3MSyhoM5AAUCP9WuXycqoHBrV2",
  "key35": "1CTJT81bhk4ZiLxpmrKXsSKbW1tnb5eiCCw17Ec7Scn6TQHyCCNYNV8ebGWgxUZ9FGxoPxCfdBM61iigPiUB5i7",
  "key36": "mJEFZAwo422hDQbiHubR8aoVqpKqdYGLmis2cdZqPwcSEQg51Hn3FJPAsVBPAWcbqrwJpi5xY4hseFQPjErGJKU",
  "key37": "3zQ1ecpUHkJT4MAFeFScHHfqjHPWCcUTx8sC7gzWtHQc2Xi3bVECsnm3E4D4n4Hekj3H2BH4Fq7LnH8faKZqZeUx",
  "key38": "2doV8vvoBYtroHfxGY9ucx6wWs1Hd4f8NE1ckVf7ruU5nVjMr6WPsQEnuPBNpWUgppNSUEV6WC3F482EHw5Lunzm",
  "key39": "3aBSWRXrr26ggDnTAp8xxAQRwfPwr7MpjBiR5Q7vTBFU71b6gPxvWRs6tWiuVG3dCqyHtzFzyyBofh7fAPzdxhpV",
  "key40": "2S9QAtHKxyT5qDrQCxCXA4Uc15tKqFB3b66q9yqfzVdwYxZvSZHSsXVhE2ftPWad4upSqXm4fYqv5Vsur5vSpwKM",
  "key41": "2t6CURUpgsT4geb7aj2njtgDtouRJ8dBArTAn5o7mJT7ynFg7ZXM9nnodhh4ajfMwn1LfSQjRTuKQh2npWK47LoV",
  "key42": "4po9bny4uB5xyfMKT1q7yzGPFXVisPMqC75tkZeo6jqRGjn8yY89k5nK276eVdvbmEmPZjdJK4Pyg5Tc2HBJQNbS",
  "key43": "2yzPxQjSkN7aZLCexLYdSRjkhLE44qxoM8E7bPrmvXUgz3z4rQFX9K9AkdADbjaY44KE28imA4emr4uZfJxNEkzJ",
  "key44": "4iJTPRTiqaEFKFQ4aTM2yfW2XEeKmSTAMVNGMMDw4RRKHXF4uoX9w4vDYfFtb9NSEdJjj4dSwv57WvcjXcRyfYat"
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
