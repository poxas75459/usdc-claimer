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
    "2FAksXkdBCZiuqobjrgXLkzLmCYUPtuvZypLdBHSshFh7SXgD7vXV8BtdyQpqRV1gMY2nS91gXr6xuxfgTRZUPQF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cPbBjC7BC4NvmKtJsyc3PcncKbeGfriFamCdwH67JmmKT8sDh2Fx8845zHzcMhGxtPLoA8Vu3FXBF7MrtMbTBfX",
  "key1": "3WkbBtC9jfapLQorPW4VSeAtVTkco6QdgjiPJXj2Mq1qFYzniCcLA9rZSm4KZ5FPrN5UXkc5dMB5jdJQX7ATMHKG",
  "key2": "3JP1Qbr3tH3v5DJFtFXa4Ja9voWF4PAeB7REGHpr9cC9QKUJjwZXxuxWmxqa4nypyDeyiWU8e8rVBcWwiWnkawmP",
  "key3": "2h27GYLQgw1i5Zq5RnHiXRy2M9M2NdhuzwuMyuJJhxFQoytV7FJep3v9KLEY6PJ8488g6HEwvAjvbxufk5zDzCLZ",
  "key4": "rSB5yDyQiruzoUfQm85KnGmdnZhKGonJnGZwmr7mePSe3CbWtUuGv16qAuAXzLyLxjcqvePfETUT1bhrJgxYjS6",
  "key5": "32t6TnsRyNbFAGuA7S3HwDpHzmPxuYAAZJi1YvzqdHCh2q6b93m1ifqjg9Jiw8gDiotQgymNoDT9aLMGsHnrEP9q",
  "key6": "66TMC1W5QfwDFwaNFM5BAEuzXzLMjxVL4wbBeNzMErbc3DULZb3J3GEybhzqC2uChTQ2VA5BCdMtemiBnDiACoyt",
  "key7": "3ViGVobxeQBDFUSAqm23TTFUsVNDBd2r8TgRA7ZfD2WRLiAy2czgntP8AdG7cbz8BihLt9dTDiaxH5ZDGomgjdeV",
  "key8": "4oRczRqasATFktYvCsYCV4AKuALpi3jfG51MBuNdTWWGrgMSDKGU7e8VNQL3A6uWRyxYV1JSmHTofrdUqD6XQFdC",
  "key9": "DCviPz2SLRXwR4Boxaj49kK6xxmm2GVLBfSMUQiGC5mbQqnZ1aH2cUqs7HxLjEdMnovpGaYeuJbak7h84tPrnzb",
  "key10": "5g7Qf8vcXgjB9nvWy5UXWKtbBcWHcA7wMBRD41ZXzGtQGC6cP7RzGgpj46FghAhMznqCx7UKegFEcWEPz3JxDBWW",
  "key11": "4sjG4C3WwVhfQCpELe9pjjZpMWNXWakAvtTnK73hyBPqcYaREcoAURQ114zC93cTJK9PK7XwDQY5HM4SHsNZs8gy",
  "key12": "8USsZ7vftPuqGTajp36stMxnr4JzijRLZx5U7zyu7n5RbcXsWQfiwy3bDShZSArRpEdzpoYhQ8K1UmdeSDyBcX2",
  "key13": "2FPxTYvswHpHRoKLWJFats9wgFmEhSJ12uqmBQRm24BibCrVwyb4ZvfnidHepwroEjtx5498hVVrxZhxkHH9ANTX",
  "key14": "5Bq8jQoBLmrjNUuQnuYNUhZbuQUaN8SyBTK27fU73BoTeGFo767VnvqH5rB6UPqMZvHw1NNaK9crno4QDu44KFVo",
  "key15": "4oYRLt9n5h7iokx6XG1q3QAWJRVAVT3dFEVYUsRUzzFQ8CKDtVZwkkgEJA3EJocYkVxBsHocShAbvpyhGtmzDrCy",
  "key16": "5k4qqXDsCjFoXpWndGm5raZkngqN8qGHbj2enJuo81LT9Ec4GXvzXd77Tdx9S2Euf7hccnbjmF1E5GTvMjwERwNd",
  "key17": "iMMnPdwhHry6G2GU5pSSmW1bW3UFjMUy4KMiBVRqMs1R4EwXTaDjgXgXHA4WAiUBsUoV3pwM2HDM6h5vH9CBRAb",
  "key18": "3xhAUZe8g11noLS8kXsTpqdHTqb381MKer4vPiTJEoCYUzddj7fAeMHUpJzo9NrasuT3LfV2HR8NrPeTq2odg6ge",
  "key19": "46s8jNGUFWk3ibc4RmHiKY4JkhJ2rmFVTHzfTCw7NPUbETkrxYZh5hQXhSEo8v4cFQKBD92RLq1Mz9rJPGv5DrNQ",
  "key20": "gCd2eWgZeaeSsBRAEnnv9kNpuGdEpPZShpaBWJfyeEqYwYWWMkWi9Ltvri5WDtcJ4DhWQtU2mjJGj3Tytz4LRDA",
  "key21": "5hbXR6ANq6mTtcAt26o5kvw8RY3SpmJVYb2cHLFMBsYcWoUUjHtfJwWvQhVe4RS11RWrSvqiZ7RARXDUxJKvzNfN",
  "key22": "w9orsGiUm1BZgN23c6bSwhUZaLaWpDCCm99ym2mTRCLAaoyZB5tApYdRwAy5gC3TwLsJ6pi59yDYZUvEnMsK9N1",
  "key23": "2dn2MFtjeaE21C4CNcPN7jcdT8498osw3aDvvspYoGfSwHJM8YcduR4LDCrRaeM4xZj5cswCkq9g7xMAmXJ4UFjb",
  "key24": "31FZ5QcoTnDbrtBUxQKSYjAw1SkhrT1WeekAnB6ZyJWSAVRdBBZKfMwz3WpanPWXnfK4pRwEdgu5rS3r5KUsGQim",
  "key25": "5pFVU2Ttkt8NoZp3SUJMEAz1MG3UFQBDsp81q7F6QXGer16jPxPAmjCGpLSnmf8JWSWb4faSnpxTQJZ4182eQTkc",
  "key26": "4L36AHWCA9ReieDB4Us57TvshxeDr6kVeE7otR573HtcBHaERt2RY7mS7qMeq35qJPoZWm1UUswfmxw4MJdvkBWo",
  "key27": "5bDf3eL5rDRUibFYXgtmURpmbkoWPVPLGJjRFgqm99cTfkJZG8kdcqxU5mU8yq3aRsJ2SM9Ng82o6mSwmKCbyEFH",
  "key28": "qxAandPNqqhCz5UhGfSEgBgdFc3F8jJNxYwvdAAwScmAwhETFUjFXRht5ma7PpuFeY1RaTjeV6mdnmTQPsbDytz",
  "key29": "dAvt5zDXfqDqrAbVtPWTngZHeEULf7TLHdzsg3qGC23oEQ3K4G6kBbxHSbe7MgN3JiSPPn78cu6kL8ioJdLM1cJ",
  "key30": "58Z6ZeePFSNC3N7Avh5ZrEZXC4evWVt89XdcNDLoKkhp65PUhM4dYbfutUHcgBJfoH79SfQbVLbdfdSVRQSJLyNS",
  "key31": "2fJP7wbUbu13vheTeWFQnWmqDKM32Bwm3DZykwq1GieNsFtVEhzGww5LD1EwyUha3Crtwhj7uLHEWQjQcJBzYJeZ"
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
