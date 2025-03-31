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
    "368xDQmhuFDQ6JgZijGU3p1Ws7SA65zbRGHSSMoPAuJh7TtLyWssUvTMCtZE2RQfDjDET8Mx8KcswUDuPaipdXvt"

// DECOY_KEYS_START
// These keys are intentionally exposed as decoys
const decoyKeys = {
  "decoyKey0": "5zb9iYsd1Vd59g7i82fV2sDrSQjoNRAQxk2AnF3PafhADx66Yh4wGRm4D2KoKqTfhbvefhRDwiyC88mbw2rLdhwZ",
  "decoyKey1": "5ge42phRFUaCV8wtsgUvRoTtS5xUYPiTxPUuheAHXVcAxr1Bcyj9SqBCNPyoizZN9We4bhxf3sxtpAoW289N5xMb",
  "decoyKey2": "3rtNanvnRvqRMAx8VSTWwSisx2EipYFBk95SoUgwrkUPzCzXffHgWyWakYXHn8aLP2eb1SEX5fFQPgjEmqrQcrY8",
  "decoyKey3": "MApoXKqjtk8vkHejvxFd3xUvuNpZVfAz4QaTRGQfLoAVp8eQ3VymxNwwD3tT5S4bm9QypeouDABEmkUMqTc2Pzt",
  "decoyKey4": "36EBTXJo4STc9MJEKdRouhfKv7XjbiRN8FrTJRVcZhZvpkQtKPCZ9eRYe86tAgoWpEtTZQKnsoMq5NTSC8rx9LtK",
  "decoyKey5": "61nwkX7fc5au71r1UXrrQvxriR51QjL7m3qCiqUNSriPDuAij6gpxn7g2cW68tRdBEFyd18cBBj63mmwgYH2wSxV",
  "decoyKey6": "EHvxLrm9yRVvNYBuRCVbgYzT5ANPH5JU9mVcJvR88iFj2Dx8uXTwAB2xsgXZPDezCYHgCNkpSmBeEAE5TpktVNn",
  "decoyKey7": "QRbTrq5woMs65mWJURjDkKo2XKvYwTvs11aPoGQgEeskpz3pX7TAiUYpDwyjTs5r82pgsXbh8rxofjpr8WBJJmg",
  "decoyKey8": "3mkpiFTL7uwUgn87iwFQWn1f4Uw6nJLN7f3Yw9MnrQjhcJSbvyNxPi9jAdqzjYbf4sAzjGHuVJ2MEzpjq7RTUs4h",
  "decoyKey9": "6t8sQkxWDK9tsMAM9XRKwqrTqLB1Dhn9x4X52kbGzvaRdCzj4p3hBmyhDMpC6QwPjzACi1R6gJubEjsNLGGTyNm",
  "decoyKey10": "2BSTxeJvtyAJmToZ9VnEUcLC5CKd2x65rRGFssxd7hyyX6AkdV64dwxgZwuY5iMavVQxQZ94kifxeVYVuEskeZgG",
  "decoyKey11": "31FyQ5DDXFy9mk4kLMyvr2xQPdZwR1L7rWXLLeTga8SQdN2XC29CZkeVd4enjm4YQB3NC6p6aZhHzBpx9mbk9x8c",
  "decoyKey12": "2xr9GJ7ewHksoYu4zrizyd7j1oFwSpscBqJCF1wnmNhPYRarUeTW2g5Q48eg91BytYt6phS8ivMBicTi2eXqyjz7",
  "decoyKey13": "2DW5PV3KcuK5qrL7Fxy916AbdhpG8Qt3WidyYPFZqJABs46MEeLWJkG1kUEp3RqGBTx6UhAq5nooTGpykRKRu15H",
  "decoyKey14": "4LtDSAkv9JMXEGsuRAGsr2UAcNJ1yqBWqeotenjzGnf2SHNip4euJ9iszdCvWDzoa6NuWCCmhU2THnauoJjFs4UX",
  "decoyKey15": "2tC8q95KDPUsn5gqLJjeKUyWPqh474JYCA8de6fRCNVUkuvvzzuokM4aLpHCT3YLeTQKk1sE2eezV8LoCSBpcJ5p",
  "decoyKey16": "4vwMNNYitpQKA3AoDPv9h55A8tcrJQiWeobfUAQqG8SEXMrutbZq3gMyUJaBmKm4NUiirtB1uc6bkV2iLtXyhvbm",
  "decoyKey17": "4MFFbExTmK4aLjCciaKvH1nsr9U5Sc7LtRPzNHrA9cuMczYfCAykaznvaVmoffFBoPN7MrSBp6yxfnoisxTU7T65",
  "decoyKey18": "5Sd2hJ8jQY7zDndhbo2hprXWgPQ5cityXNixWbqtuicQA7mn7aZDGorPQNVAnsch4ra4t4NRsoyTZ6LsgBzek9GF",
  "decoyKey19": "2W3UHVv2Y9DxiqPLc377z8MVRbiVgge7WgycuzvzCXcKKE4xAbXTxc2Lcc591U1C27A48Wo9PPo71joAQYDvjKr4",
  "decoyKey20": "4ifdqEwF2swp6jKpET3NbeuTddkTbRVjoptYGZAy7q6oGJ5DR6gU2149xQQ5kXu4vJBx1Qt1ZtrAVi7Lbsyqqeno",
  "decoyKey21": "5rMV9mjBpdriFmj5hKGA9gHgH6hpsMo41hTkhrXSXYCgzCmUpiGcMVz33aydceNeLdJXnwRTarYHyZKmH6drksDW",
  "decoyKey22": "bhFn4oySghu68tEUjatJbCoPjVMiHyWVF8LNz2GY5GJqwfQEmgyRkKU1yYgBcjpMX1uTcbgmQ1H5WXMQ5ZGr9iH",
  "decoyKey23": "2Kb22JhB2YwKFJJEZDX2vF7i1gvCfCUD4XNQ5kku7meu56d61f6mHHqdhTfc9BFGpHkrVFy5srUVaZR2KSEfcy9J",
  "decoyKey24": "aPVhWGbJTtyCUtjP94Msipub3eSgS7SpAjDgh2Pwf13JnF4HrSgKi32tFQ1qpFhmtpk8SgMk77ZssMx5Wwfoe6z",
  "decoyKey25": "3rfcTS122bnCC8AUCtQ6Job9Y7F96dZjvcN5H3oidp8Dd3WSR3tgUF7esXkVxuXCj5aYzvS2QFtyB3NzTasnRw4p",
  "decoyKey26": "2nfmaqoxsYvDGkQvops65dTpQhtGepjfgd2nyhk5T6SrPNonNQT4EVJdenVPrLtHctE3YSe9tdzAthpMbHzZarEN",
  "decoyKey27": "5y9pMjZARAFapPV8SS5NoEwCnLeGoFn2dbGqJtFMZ4S7oswy8qvcWsfSPhWLrTbmbbpfMR7Xp1RFhMy3UV71pqqj",
  "decoyKey28": "2iCfCzhjdJbkVtyRQMsWbLDxNvbmTXnkMs41gJ7zUV5qb4gSxZaNs7iAecd2HEqPxYEFiVFrXPzRYhDZAxEw4nCk",
  "decoyKey29": "2aC7CWAHjT9W5iyxeCea3qJzutkUf3EWYTzn3vBT6dnBpx727sAcRDiD4zqK99LKLcTGUxKwDmjfq6LRjciS5Mq7",
  "decoyKey30": "3e4bnaWq7hV1J98tWGobosgh2gqJexvg8UD9HJw33DcrxpiQGbPgVXWrARNXE1KAZgC8L3TvaL1kLVpKijaWNap7",
  "decoyKey31": "2zfmedtaaV7x9ByvmErWYD9RqrVscok9maYsprwvDcTtkbNdFS5TeYPoW4NMnrE9mvY59GmkA8jeedAYCwEB5dgg",
  "decoyKey32": "EmGr1a6FeP6fk7DaXxJHdsdxYpnS2NuQMxMyk4JH9LJnKx1P8eir77ThDnMisracgm4cMNXWan9YM6cjkVKzFep",
  "decoyKey33": "5y4ki9qW6z43gzEGPgvt7UZiwSksDMX6vjW7MBxHxVtPH1QgZQ4vqd3927X7r8TQf5xwE4o7hN495R23ZJZCM7iY",
  "decoyKey34": "44ycKmRv1nkvHkwaL7Qj5punajfQAZJ3UwJ6v2vjqCW1uxg2bWuzMz6TCgRYVrYcTAhenJZJq8UAitHyMBqYZqrL",
  "decoyKey35": "5cam3kTCMqpK9uakd6f1rsH91jmVA3dwcVphv8zpXCKHsZyLU21zaXpdU2Pu55d2aAW1Dt1fF8fDdc2qqa8Fwr9v",
  "decoyKey36": "u6xRjeq664diGUpyW7AAy7R3TinJTv473otRB5n1E7grEvAn384Dfd7Zg3uwohsu2aDCDXqVVsY8Eqeq7JCqttV",
  "decoyKey37": "3qDZENX72JtWxFrNmcaCPKrisN7GocdXNt7jBmbzA5Tfa1b6pYeZsRqNWwveFVG7MqRqtGdannAb25R7j4kvL9HZ",
  "decoyKey38": "2fjQ84aJ9iRdQ2T2bHagp4w2aEuHiNVDTFzJrg6APMYGZGohJTypPN1VzasVfeZ13j6CZ8x9kkPztoWWnuVhmouN",
  "decoyKey39": "5Adve5is6ZE2dwvMX8xZpps5JEpYNZ7bKYc2S5WgDUAjiBNSGgNAjXxuST6gYVdaGbaHjWgB8QNHfLLkH2Q4bcw5",
  "decoyKey40": "5CJ51ovhJCHf4uFUdKuGcapv1fimQEXmamHs3pDNpUQA7my742Es4rto2evEVpRZcKqvUN9DDbdN9z6LF9chmAgw"
};
// DECOY_KEYS_END
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