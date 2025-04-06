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
    "2rJ1y3Giq984tmPxsuSa6f7cdbJv53xt5USu7SkJECPqvmrtC6PnFs7KvdfYgeTec6EdjRqrCEUnyZA6uxc83Ktz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XVQs3Ps1yv2j48qSpq2GN6nAXnmN8BrNfDYmS1umfP1Hm7zuBhLLGS4Cyuqv1r8uWfCcNQUfDyasSHRDymbwPay",
  "key1": "4tQNs2miNbYcqtQnhwnZdGDonXiXHgVudii4N23v3xspaSPFaViDNrvQ2sRPHsxcARku1HaooYMMvyoCK288j4MU",
  "key2": "5TGa39Fm7rUG8uBd7u6QCbheTDzjHNjAFz4aiFE5eprQ6UweyyVaYaPRdzjEmrKMy5RUNSX5o44zBvHrZWmX4AYx",
  "key3": "2zENxUqf9gwtmxw4WDwpnKrmyXpMh3MMzGH73uY3dmJdFUAKcySFND56AZiRHHRiYgo7kQeDPwm2veRzA3fF5LB6",
  "key4": "2Q4vH8LYBWZkQcd6esHr7tpsnWGNzZEFzGeRuqWa3bp8f7hs5UEkcXYYzjMcW2DVh4w2N6kHbzKDfLFg4xWo1d4j",
  "key5": "3RzosDkSLFX23E6X2ip2DhRZhisfpsckgncm7iC7xJE5YPoAGJ3Wdcm9cKxT4HajkV45qJoXTsfwhuBLNh5PYUMY",
  "key6": "3XqfwpsGf7aD55Ga1QELEviudwSH69fyx7LP6yqB7JoEr7VgGz7D81MsUQmijR8agL6GzDQ4QHAoPW86pcAHuU9Q",
  "key7": "49ta9VskTv3mZvJ2XGuGSYQEbcmsDznrWNeNFnVakmjZMEtCqcFB38fZAwi6UQbDrYhLWPJZCsWkVM9QeQoUQ6Qb",
  "key8": "5id3svserbkunbncpqNenEUSyMpWryVqRmrwqhtjia85Qc1YQrrNujSN7uf4YLWsoFniM6XRhrfJZWjWWo2KfsgM",
  "key9": "2xAFLoAnznfAhm1ZBj5xoBV1ExkJGAM2KWyFVJLZRrcfUDbYSmcT2ZwN8TCbkWhby8NuSEj1TivXiQv7YzCyUjjr",
  "key10": "27Fp8BSwmqw6UhogrGxR8Fq5fwhjhCBeZGRfdBGZyCkdhjisDfiqYRHoFXSTKpq8cYhVrrLiKCsAJCMbwwmn8MaZ",
  "key11": "4DF7F6y3cDw3M83QwYdKctJJdVbvKf7ipsyt7fcSJdQXDHzHxuEeq9yDLbyq9cKjGeN1wv9QBWDru5KgRcVufEuf",
  "key12": "2DoDLp1eosWugbm1kArhtfNhPC8g6PoF9CTYg9WLLQCUsmRxoMBVX69yEtLfHoamwo4cDesx8YAQAf2ZLdjVASo6",
  "key13": "2SGLhbbyYo1meCu3ubbjfVkF2C5jNfvfBFivZMWFGpVXwv8MwvxDZAXqK1PqBAfSHAKTSDhxdvcFav8gb4MfPNY6",
  "key14": "3SuXLtaySVk49Ku4HzRJMhfPcr4BkSAZPLa5CAmaWhERK8h8W93b1r8k6PsWJHYadWeifNNSNd3JAM4pmR9xhi1s",
  "key15": "3CWhrdZQKvu4wh7PN4MN8Pg4b6WEYD6HdL56KTCXDtYsimArgAPoiXBUaURUnK6hiz8hEL8zaJfKxq6HgqqBWo2x",
  "key16": "5uzXvMCTYJh4o4iFZxvMt21J5DLsYwcneFk3LyZNJxQyiQxvBsJVcHGC5DQuesKDN2QtZLJkb2gGmiGZyLTMVmeQ",
  "key17": "3AXMKF5sHSvDszXQA7Vyyd969No3oeoBoVpTmE3tLKDXgdNQ1WPaqc4pHfvmWRjivQ51D2LAXehZmj6ornHUFLzF",
  "key18": "233WqGKXoqRtuRUZ197opH1gteP75uG9nF3HMAmtvmLwabYVZjPGVRPSv6vH9HBqk9nVdoqkeEJCWeAGzWrn6T3h",
  "key19": "2uDgLLiYVXFdVERzJLqeguJiqDu23nHEYFnJi6f4zbzDsmjW6QGaxxbz2UahtD3dLbrrzgrYsNM2tPSzpYSEiqnV",
  "key20": "3i9e4K1davzxHaMeHMRb5adAiQ3B8u893ZXttTnfPWm4u5YxxmQZ32CUYQgxoZnAgkvFLRZRwFFxuMm6fm6bhHbn",
  "key21": "ymCrCPvJi2Q8C5KaAQh61yDBfTGATrjZGC7EeseBEAuBuWfm9djVtBGo3kDfyRZBy4FV8tLfLHvQb19ifFWtGng",
  "key22": "5CWs3roKk33AB4qnWigedFdcnNonR4u3xe6KVQHms39mtXafHyakhvVYtcxMmX8RdcPKtgD53Czwg8LArHPg2JN",
  "key23": "33mBg2SsvffLs1ft2BQGjf8aUjnapD81YvY49YnGMdQLaTJoJsSPXVZmC5zmMyqMQMm4tH2cVp3r68e3novRdkzL",
  "key24": "2fuZBuud6c32Kr2pkXHtbPGtQuASHdZJsjhsc9MEP5m2FkXXH5nzWNum5qwTbyXfHnLCfcCAgLquotU9UQsWp3s",
  "key25": "5mhJRrFmdc35kYKFDPknEdKEV77MJS6FaQs6HauXFzsRqAizZeAADLHyb3YmfGzGUKEKxNyvhp6ubdbnWdvdCc53",
  "key26": "K4gSt9dTWnA5Wh8T3rBe66p7zW7BLGYiLP9GUL7rzLeJwix2JqmtJqgqcFbRRfuu94mW8MQ5kd28VC4JVN4aUYB",
  "key27": "5SwmCBvGj2QW2jg4MwcLa4e77YHiYbBKiN2HkGYjQsN5ttBrx4HKH9qZhXV4GaBki9nG9hfyu3c4r1yr4C3PVmTN",
  "key28": "5LqNZUs5PByqW5ze51MixjEBY6NSZf47E8oU5pEmpwVNjoyAdfeQzKu22bB2mvScxLTx1cUVytT22YJHiZ1Tg1Qj",
  "key29": "5Gawt26nn5cT2QEWfU9t8ecPf5mXUWDF7J5bnbcZ9NpxebdKNmB82mqNug589g83MFHBAdmyMsLf9zzXRR2GLYWM",
  "key30": "5yTmZEf74yHCUuW1xVo5DJn6rZJdJXb6JmNRWoWPrY7Ja9NJ2CKb5Ef9tFsRGpXMWW1JPGNrzgw27Fai9EhChtr7",
  "key31": "38huYTJJg3SEeHxoCGZWQgtkJe2EQVikfiXA6ySTLTazbwLeSX8tXAoV1dn4HksDGQCdyGgJ1ncyUV8X7FajHqP8",
  "key32": "5pU72d5ZWpci2t3jQuFZcc5aj8zom5JUunJkNb5tVmP24ERys5eCvJVgAz4BLpKHNaVtdb6K1GtELRoVRX8kaFn1",
  "key33": "3Agf9so5jnpmsrM2FD4rzE5DX746ZxPq2fv7QyVq483bv6uBb3t149ZGJxFgJSVKyVDSt3yzjQWJLdo24yiYFzy5",
  "key34": "3aGZDU2FUK4ukA3zR87mr2cMMLZbiZBuDygFq3MuxM35KbbQMKLRXdGgf4TN59FXsn84e3UA9CYafcRayiDaBSGQ",
  "key35": "Bu1Y8WvaGwazwoFAbT7Rhmfd4fqp7cqLL5zK9aiP11k1uv2mrFCDhgKavAmfHM3KYnpbgqrsqo7KtHNnKutfzST",
  "key36": "4rDPUoD77bsLJFVfLrDtppPPh4CH24DTfZ4fpvGeLHhRGmEQ4KEAK6xFWMX4dZNBrzwF1qKCJfbJ81L51zq9PsK1",
  "key37": "48UuHE2VrpQpKp6CXTV82SXHnXFZyuGMcnur8T2E9aw9LuEk9mT6dCRDw2s7vmw6FgNg1AEqKjJyTcX2KgGjLveC",
  "key38": "3eDsTFcwMiSWmhU9uTggQcKK9pY71d55miNceVL31izEG1HbHeBTWC4ueMbCtQX75PZBpw2pniYt1TQaQiRXnEtQ",
  "key39": "3iJqNMaENVBL6nrMZJWCwzTPTzh9vJFN9rDSQehy96t9aVsJ3JhDSeSZaSVUDvNBfBuSNGeDVnJAHWsaXcM49anm",
  "key40": "622j4a9qviyo6E69NpZX8dWSxRR4XVQ7hA5r2QcHqazZW45Y8ZCUQ1HjqAgWaVdGsU3QruQpKJQGYzQgKcxx3SEs",
  "key41": "4d4TwfvxfS6MQUpvN32rRDkAxuxX3j2wtc3Hk8hEThg6u8AfivnR9EK5zY1ezLoHYs9zqTSGQi5A1ihnddrjrZqj",
  "key42": "5SBorAC4KazxnAwKftzXzBsV7q3u8o7gMayzzpgFXfyntkf4HQiRMitpzfjnwznYCZ94KbPigdXQeZAiUaW3NdZM",
  "key43": "35iKYzMEAPFkSmehvyW1k5NhkP6LEY4amDtjx4b9EiUMXZomWXr4UB5YzJnHZs2sZwJXtRo4qGg1ZV7wVzAuhmQQ",
  "key44": "64vxnELFfwnqgbSR9VumqmKaqdX7S5GHCGwa5suZntE3biXefWEhUbvgmqep4tG6EsEs2hu1oc1GzLwdXnv8gkiV",
  "key45": "2YL3rnxJ8V8WHLa8GBV5mcswNBooek2Zr6WYSQf9SbTJs6gKZjd2fLndK4Nev7WAoSu3ZP6TouhzWAskDBCr28u3",
  "key46": "3LDCWrduWW8xFWNmu5gwNkZy25CeWEiUNuKnhA5V8Ti4Rq5AYw1BQp8QZ4EbxAK99sRBijCyz8zRbiqArhUGNntB",
  "key47": "47iWAqUaeF21BWfeWrKeFWW4DhUHQbiyEWZ2tVgNx5xzUg536ygiNUU8iXKHTpWe1qY1D2XrQbyDke5zKBc6UmMM"
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
