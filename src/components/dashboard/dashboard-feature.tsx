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
    "2F8vjn1V6zPs6V1hTGH7SxGs3hq1zo2gV1dRQHSeifdNZYMtAVvopssqgsACc7c2gmXCRx66Vdk2QYZbvAQFPkXp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "K7ovgodMaRb2N5ieuxXsNRGxZeAMcMp55PPTkFijeb5tuvwrFndgBjypE1dEya5SRBP8jcxbTDKYnLRzK6d79Lg",
  "key1": "3ybMba8NBcHUTttAHwyWJCQ1AQUdYLB7ybnxQeTxUeA57C1ML3qznjMCpFZZGciJCcfGQi5oDza4JBLiN3tmhyUb",
  "key2": "4JpAkvUSo5vqr2J3xLFxx4BNwujDD8rLLqP89bVPW9gQF2TeC9ddxZtco8wdqELwDvCysLJPbRE7aoWr8dfhCxai",
  "key3": "5wBvYdr6adUhd6WRC4yoSoNiuiW7EbTbvb8wRMjfm2Rq3Wmx8qybaikzsNtA4VByTnTsgsfH3DnZQg6eLqNPMJUd",
  "key4": "4jcL9ZfUcTu4Zxwgjy4xC31dqKt7BpbwGhjJyCY8wPpfUscaEGUuFSK9P8uY8ubiahUq8PyngYpxqMsFL1UJuBH6",
  "key5": "58rGYE9NuucoXKkprFRY2os98ZCKt3AmYYLYb86nTLwBtqe6drenN6KoEdxqqemkDNvYevnRfMFMGYYxV2rh61ro",
  "key6": "2AWVCxYVveiyaPKLWSRM1tQyqpqgQtJtzYBueZPHJTPsb1mNxha3pZjgMK9xG8Y4AA2H32BW1L9Ynu4dydExZqWh",
  "key7": "4QMz4YHLfy3BnZHwvpqhGcdxDGTXf6gXSgyXUeFYVHdyMhiXRssE6iGiHsvQLHaFX2fGzebmzwtzMEC3d1S4S2VD",
  "key8": "gKHbzoeBZ3TKgp9LwiCmGpSvxG1drvvSdgu8dnBmHEttL72giw2eBU2HFkBAmX4PNv6SQY2sWNHFhXnTZLrsyab",
  "key9": "4qc5TzEg5PyWwbAjfP4ZpfSdLbXq8HFovdF1hXJoSSBDbw5bqCks4TaLf56iTxXsnBXk2a7HDYx1CV3oQabbskhq",
  "key10": "2Lio9kF6WhGGJxfX14WbPHcQZJpXMx9Pode3psS6HJhpRXvkjqCXHgA3ApULNBE5ks94pRsShxM8mL7iyXAQ4DsX",
  "key11": "3mbfXgFUDqTDW1GM8ENvNDUG8sxTLA9VYhQ3GvHS2osatR5J8HNuCcxBmHrfm2CmXQZMgW7hGj45uJm4hQgCa6gv",
  "key12": "46Qu1Gs7Xa7txDqXPoXLWAUK1Ev1Q8MUt5STQ3hQJbk3QCccpEnsCvrowK7yiSLmrJXmMWaoQBVUJ29yJFDdania",
  "key13": "4VkbEPJx6gkm5aE5e94avfTDkPoxJbabjtcGSVq2KrVH8yLtr4HfUM1RUzY2a3woW1pQnYR52n7k2MxiVW7RWxFy",
  "key14": "4rDM5BDcihXSn1FyKpkPRGLsnxrXYTW8TT3UGg52rYNgcHaQR3typvbyehLDaS4mTdFjJBZbUqSPEnPfFqZRL3xE",
  "key15": "25DkVGhtANr5VFKpMhY96tgajMJNN73aMDfTWm8fmARedWtDwNibxWiDGnPzWVViTu7FjGXZ7CZCVFbQ6MKVNiij",
  "key16": "3Vxcs66jrLKJJkgbEebdd1Pbgwss81ivJSK7G1kM8Nk1rNkJ4EXupFgQmY2jY9UxKyNSsozDSYsgbMTQYCorqF1C",
  "key17": "3TrKeand9N9QoqrVLMFdPGy2wX5SBPvUBcQpUtZPhEhzPbT3ZtNqURdQYscSbSKhPz5z1hKGCQSwoym91yjfQrpk",
  "key18": "3SahYXGuuxXSQ3TFqsk8x9TPUX2H8GDdPcPRB5JCRqKbBFVBVqaVu3PvKDMr6HD4bBEAo9vLub4mbfr5sr5LpoHN",
  "key19": "24y2nEY4vkfBsDBhwYWR7BNkXTRQHeipEmCkLawkn6txf68CoA2NpnQYwnp3xNWae2JBJUK59yBpsCiyx9NAtp11",
  "key20": "5piUt6erWHdqr9aFEqcQ64q13G9MKh8zPqVuvHRvuaiQ9T5zxhcGWhjHxCLd8V21GCCcgFGUdMb1DWMPA1dXChCU",
  "key21": "3KiXroV4UqvcyG51msLLKu5dDmsUZkfHsmMZk6kzQ46Ws8KzmAQMejMYypcgavJWRQ51mMyQdzp4tXACHtxaAs9P",
  "key22": "2qV5g1DZmuGgrNQGhnH4WChBjznGxoV4Qf3nQxSG6pzaEsURNCEBBGBgVNPYJKPcYH9kJepU5rUsh4GikHpyeB9T",
  "key23": "5VAe74sSZJdj1Dycg136QdYpoazb2h6CmcfZZwDMwecLC9UHDLtSYjkHmn9iWwoybjxipYmtfe9Kw7sUsVMg8sLE",
  "key24": "39233SdfwqhjQeMQ54kkaH7dsxT8d1BiicspAf2MRA7n6rPqN3UCHUyLvTgZR42vetX6zGjJ2xnncmDy3sYF7dg9",
  "key25": "4ps6TmAWFQDd4CC9eKBcKEBrf1xiinawNJfYVoZNbj7QA994JsEUfUBcrKs2PPZ2kBPX8pFcuH9SQWxopWJsbY3M",
  "key26": "34trDihAmosBxM9rNKcwzguczGoTWkPifmLewSrQLmEJfVtsXPbxTbwsWugoaQo8ngeEzWWpZPCQWJLQB5DfpdD4",
  "key27": "3c2mRYbWGXhePrTD3Bzg2EDqQfEGQeT9kGn9rtY2oehbFcSf5xcJXq2TuHyPkf6ntKJSFRxk9hAAHSzHH8bkNikY",
  "key28": "seu4QHvssi4Y2MrSSb5FQhAUADo7V3mr6dmXHWjEWrqNPEzXj9RG4SasoB299bGCGwLihcNPDDXpWakPxNJ3fdd",
  "key29": "5sudmqFELTTGngztPKdbvJhkUxw2GRa9AafkV9wuuikPyXA28WUSMQNsJdCJ87ELcAKdXPsGD5FRPyQk4YwqJBCD",
  "key30": "5rYMTBqyjUgoXHv65kBVXCaSJ1ED17cwGLq66MkkxgVVTbbgqYrg7Vu4rb43wp2hKdnhJVj5yiDmuUBfoUxmUpnx",
  "key31": "2cq4GvPCVxEPeFaysDUWFXzfgYb2vf1YNhSeuT9PGhm9Fs1J2Qfu4JkhggJeKgYWJYMC3wSbriPufZyydhDoa5iH"
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
