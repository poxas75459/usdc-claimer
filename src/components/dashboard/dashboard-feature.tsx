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
    "2T9PxcMwdNrRFH3FfAvwsJjdpZbQUcwv3hMw38v6kNY72bL3TywLYPs1QDzC4m6YaHaX4JMmueXWTCMd4L4X6hbo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vFV4our1D65GXrcAmumMMCE8a56HPrRiYTMYNEJj61PHkMa1Qrg1nWeR3RhKhKPVdyxXSWD4ASUZKCgt8Mh1Vtf",
  "key1": "2hMXJdtDjpvcyZcSkBgQVc2Jkb8dazZj3QCfgGDGs6ypvHx183xeLYoRHHmknEwS1kogLM9QSh2q3xcF52L79SR4",
  "key2": "3atuYqg33raWrMvK228gDqumQxFcUrc5tfrrQKspryw6X2oqNnUkP5bQp4Bh12UpRsARvT7qZHbnbAowwuTCAkED",
  "key3": "2MjC4ipGh5KrH7qfV296wteoDqNxB6XE9tjGQYCdmo257m1ZYx1taVqsJFPZf1H1RGnA55Xq4Z82TZmVU5J82yPd",
  "key4": "3ikLkwTcrcJzMd5S5CYWHeUyuczyPLM8F7UVyjF7s3ooUqQ3PmTAz2GfFiuBntXm87k2myoszTDFNAuoDz7E4S9a",
  "key5": "5nqXYRVLYXfe7wZrmKFY1sb8rWtpzVV77ebwG3yRgzdBe8aX3G9omEqZPNAjfAD2zbjZQvTBnVCXK6ZgbLWgkWd3",
  "key6": "2ah3Nt92gdh92NZ5iQKaQ8P6PSCW3aJtyUBfSH8aRSrN3rDdHU4yr6YizXMtpRUNgAsuC2oV4PaAB4vMMgFZPMnP",
  "key7": "38FPojZBzyCvh588QRVPMGtLGbp2Zy5jrLzNVY2z84NYRidS5tzS3TNVGM5PDN5Dv2CC14PfFU1Q7Y343FfwNwaB",
  "key8": "2Jn9JzZRRhuCdyHGwpsBwV5MUtktZGYDBzLqQdH56GxHEMPp6VmsBPyE8wu3jQ5xLPuCp1zk2EdaRXXXqW1wVXTD",
  "key9": "46FNqkVQwBu27xhEc6wNZzebUascyUEbPPRsfVACZVc6UzSbGQoNjVTPEuLXU6J7Qw2vEppmS7W1p3Y1q2XBHchh",
  "key10": "2TPy6GJVBpLDTAhwxYfaCcGCMLD4ksK2zjWx6BEzMV4v34uquawj4mn2GXNn1BRkBbVbK4PQaxtCt3omWdHxL5Y4",
  "key11": "58Tqm9PHwSr4rnns6Aa8939eVYtj4Mmz23qTrF1opsHsuHdyg17jq5TtLnfDnEUhorScQXS3B6rKm16HANbEopSa",
  "key12": "3S3RRMhvh8J8xQFcKS3ZYdZGHYuj51cK6uphdzEYLpj4Eb1z6q2wsdnYh2ZBJ47RjFkND4Sr4sDTmHdPs5PHaXjK",
  "key13": "2PhtZifitxXezWMc7DELPNebfwcRwAcqw2nKGm8Ce4E86aCKTykVmaeq6VXGhnnAdc4VfpxuM8SEqBT5XVR926hG",
  "key14": "4bhWx8Jz4vzPxR5gkRkNo4C1mm5WyTABGtT4w14vvrNGcRQC4QeK9uW5WRUSjPpeYLWgsdc1CFTXLqs94oer6QN9",
  "key15": "45mMugPLMaqhLdraPDpQCeMhfPxrFigNEKY6RPqWRwmNBe46bntzoac3oXWWZ8hxn8qRX64j1fGq4dnu6STLakc2",
  "key16": "2fDv9ghnZHzq9F7CkF5dbVc9JdCskA9vNnmCPfKtt7zdfECbKzSbAdh3CjzSZ7yQ4MMBbsMMxN5JRN7ztQ5of4ks",
  "key17": "oWJzXig5ivE2MSsoY3Z6aUwzk925TnfYLGxLDumCAqi7opMbDZjecs8VKHKK3EmefcENGX8h6uw5xy4zktVqjR2",
  "key18": "62q7DHyBAz3pWXgiSZBCB2Xs98ZZqaHC94uNVgZDnuAvgXVfPx2LAhdh4Q8ibGx7qs7PiQnBYA3uL5jMUPTmygE2",
  "key19": "FQRAC7XcazEUgq6pb7Jm9VbUxLoQQw1XSkMvZG764VpSkYWqCiuJ6W1nNhwUcHwSXUHkxJHVbKgxwhdJBuK1Bo1",
  "key20": "4iFxjcgSZNEyfsywdqHYEUxmmRSMojKkJdFTPDGCb6Mubka8TmQVdnpvSh4V6KRN42uPgnWvPHJNPJFFEgMSYzpU",
  "key21": "5rHvEJuQ94KNAmupd5ZWLHQusbdnXVhrX8pRnGQHriPsEve4cg86n5EZ9tugbzcGcAHDuJ8515wT3MPcuxZkXsx8",
  "key22": "4kEQcNJo3PKs5Mi9f45X3xsYibdmbxZAAsugVFF4uxm9GEuqQBSx7ocJy5v3z3kgYL8wJS8vqCa34RreKvGMyowL",
  "key23": "4CA72QHXyghnDHdwbqCmTCSawxpEd4s4APb1YRJqKhKmLdjyLwZXkZYCMVr4SsPuSZ9QzSgNoiB9VK2iVLHSyD7x",
  "key24": "5RAqiRtynKRfZ9qfHmR7mdc8F6NLTAZGhmCtZJZ9vA3redhjP4KyjoFJakyjhsniUvuqvpxcQ4xXyLHW7D8Yp3CP",
  "key25": "57qDnmAa5RWocGVRAs9WTCHAqAW7qC83vhxuaehUBFibCHjMxUqfuzjwWVY1i5gF4Ka4UXVWutYUj8WrXRBphpwg",
  "key26": "3k3RbDKMStHzpBmyEe6pcGHPKLJE4AKWW3XvEztDmU8gxT4R9au7yV3QUQzs2WsssU9Ua6b1mfkhPu2rAVmZaKYa",
  "key27": "5ZtqLuMYayPHDjqaJ6d5gPVxBAw6CaZ9k2FG1MjPvgzWMiQseixq2aAu4r8LPjh3iaUwCL6SdfFoobd8aFBNrdnw",
  "key28": "2QL5SHZRwjVKBtFVnvodiMk6fyvkG8Ata1W32m5m2F79eP7VeShPtCHwGD5VSAGbhJooF1rFoe2SbrMpuAJWJkzJ",
  "key29": "59AehAtUgV1TRda8LT6kfFp3z7ogGHiBdMDkh3eBoHpUNwdg4knnHzzG8AH8CWKz4txRv5DWyMUzU3QPFmo1C2i9",
  "key30": "3LNbDppxr52bSS4azuGvt9WDEqafLSB5bod38UFwBoZvaEHXDuGz3RXqQF8RMHQwZPkTcaaxmHeYaCJjkE7DtMkK",
  "key31": "3aELdFKfR9NEep9SfGy3AAgknJqcKiwtnMLwPmpafwnFLedtBo46EmmW5SpvDSa6vQ2FHhTPcSfmdF9K9bf1XCJD",
  "key32": "3Ti85vaSXC4aoKMcBKNrPsXdJuLvbvFnNgKM9CD984F864n3ANnQumfJQCWtqFWo29xdCUXhTk2jnjcW8oxo8N6S",
  "key33": "4xHLUufrd4cyYAraRSUak5uNLqaZXQSu2qvMtoHemRpk1RSzchtx8rAFtFvqGYBJotQsqnQA4Qa9yxjev3bYQp2",
  "key34": "5CNVbctt3TP5ZuG5g51p7DMwrWb6iFRgQdACZGdgYQWkWmKYM5f7qHWXaAy2NYStG4fPu3e6eHqqUmoE5XY1SQk",
  "key35": "66QAfraUdKqGEcTtvkfyWmTMbDU9xYEDeFJ45sqwSGe7aoCcabxRq9a3nNB9iZcPZzCq8y5sXG6XzEA9eKJQqXni",
  "key36": "21E5B13yEvrDbaZeh9ev3A35iEiGMFq31cApzVGy3BLeYg9XJLediWuaT7zfGPGTb1ZSB5uepJAVbJgJwN3Hj7FU",
  "key37": "3Vn6WquVpfUnS1ubH3NwyGdcTeRmGPgf8vehmCj8u7EXKsFPZGbHjWVLrxVjtJJvKvCdmkj3HVWriWr53U25pRWv",
  "key38": "3joXeLpbnr7kDg3DQxGLAqHkgGRBNqfomPkgYjjz8j2PEjXAEXyRq7SgKpvJahRE7u1aowWq5NjDFVteBTg43Dgj",
  "key39": "5sJpg3AcRsZjXx89GuNC7C2avi35qC6p5REv7q7Kbez9oQZTMHGDp4DMo7mex4P1XDKP5xMxp6ZNpwwS8WQ4KgL3",
  "key40": "3bqi6Pj1WcT76CykFNSB1TNTr5rqAKjx5xNK5su8mR92HqbTPJScz2nVLsDs1RxWNYpBF8g45uQ1zcTJMejUYCN6",
  "key41": "4byAMsrkSqy6Xw6aZnBUnC9aiPD6hx43QQHDzGyftWKAdkCrvU8GJQEkRc4giHWVn6PCzsyyNETTyCRoRj5bHEnv",
  "key42": "65LHsV1vHeWRSa9qK49u7vwJa3fwizvwryvzf1EbPf9t8EZoiC2bofyyJ3q7eSb7YScAud84yQFY5pkhPjwxJ1kE",
  "key43": "4Um6aZ6hv9X1ASqUf7KSx2ojh72fEyeWy3q2WZB34PgsxA31TMwKsS3MWVbFu4FKiNCMFDR4T4yZTbmTNbixhPJ1",
  "key44": "2PKiUdQxrMtdLFfZVhXNNRfQqKmv1gNLD64HLDPPB2LGfUmzNSejgrvuTg2QKnbJemun1NA51KBnhNoJXUPsMh9s",
  "key45": "5wkek1gtGCsfLYhKm7yzf9bMknivQKPMX83be5SyodCH9JcPNWPnvTGPnKDuxF4972ThQPmz2GnPCPZ2zdMQxpMx",
  "key46": "KY5eqH4LFocRw2xQrreinqk5bQAbEyw3JQzmieUezneZFjaunkuQtAWyerm7ejufLBwa3KVgckvLmW33J6YvK9P",
  "key47": "5cV1APFWRkdFyr9vn4P9SaydnQ7udLE4QsNhKFbKce7sLpz2Fubd3z7UQBwQ2KsrsPDvuMXhLX6eMKDRAV2D2DA3",
  "key48": "3uorMnaDF6d5y4qm9QM1nnyBXa9hakNeQfS2L15aY3WrYLyFTR9Z3WGVhJYyW7ZqbX93uov7jBAU8Pf2j6CqcXGL",
  "key49": "jzrQThjtn6r9ip3UVse8VNuN1k3ZdrP8zhuAx2uetnR7dQNRJU96MKw11CFEgp24nYjHCnEDAJuneBDhxKJrWTi"
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
