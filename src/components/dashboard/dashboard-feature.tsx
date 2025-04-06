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
    "39FWK1kMDg9fcg9ykmrizXVSKHdtFuBZkM1SxGZAssqq5rw23GbCtcf7EcNHbmiDUDgZXCtcyyj9rQf3d4vxWhKv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vbb6v3tYicqtF1hSghjMTcGHZJyvwuuMNqTS3ZCG7MLyyXpdMphynqNSCcbYu1PiEnJJgzPgoxCRJtsLm3EbMMS",
  "key1": "5ZLEQ8DqiBGWEEEy3CMqMAEuz9JrFhP3vAkuPKXDZSSEFWayDfB9fAznViYxuoqLiMUYUUF8pdBo8JdHaZSpvcUq",
  "key2": "4NSPvQrkTwBXsBk79TRCXt6WmPJxE1s6Xfen6w5QUH2aKexU1GuV3LNoeT76FPCmrGMvCpukkuxD5fB86rcx5bDz",
  "key3": "D2d9roP181NJL3HaTnCpQZn5qrfAmWVo777J8Fo2JVCxU8UutCzF1VSQaYkxgEjBRycYdvthiVDyhwDi53kQojj",
  "key4": "33qbAX4NsWR9qh1NuK7wCHUPx7tJLHLnjU8nRJSsvcCciV8gntEJBeNF5GYnj6gSRWhNL8o5udfpJrzPmU6S3Z3o",
  "key5": "5rQmv8vEqUFsf4XFgHAEoGPEy55KtPgQ9UpkPV4f2eJE2TzHucspmLi1xgdfjDnQ6xSckLGYQYwjZR1c1VQZC7Ep",
  "key6": "2nkxMBNBvFt6K3d2H5e6FDSXQs4Y8AVstbeAYs2Xhw4CpsyMoQ4kPzMuRZtQUJKH74meqt7pfmBJJPLpKniJP9bJ",
  "key7": "3fjTmcYWjXZFjh9woAU5Sy3nP8wUQkVJL1sg2CgYumY9UWqgXk95nk4cRWfVs4JToGN778gSFhe6twkoFnx3qsGt",
  "key8": "3LsYxyghHYU7VTRd71MvWPDYezriXeqo8swS9TMFTJp553f1zKV8bxBUryK83zouSUnA3irfSBUi5KNQe2BVd2AY",
  "key9": "2FgDYstMW92YDhQkAfVKWJJAMq5VccoBZunQa5Xq1JeTN6fGn5yQysmnzfpgBpDdtrsqQnHi61Cee84ife6ZuyzT",
  "key10": "X7vttU4puvkjYhxWHHbuj3eTvZteqpp3PN7dPXYMNg4ZEqZramqs155R9u23Zqy4QuaZDRT5bzzQvGZcYyrX7Vn",
  "key11": "2eAzrohWDXeTx3ry4aYgphnhrQR6SgH7kLd6N5oxzNghb3DxZvY7qnUooCqsE53knfUMPHqLjC1Mm2VsCG9o5mWp",
  "key12": "CRjd8vz9rv3tCUeSrC9U1X8i23ZQ7tiBiWfhdgmoD9zrPtFvh3w43QS9BmbfXAeBpAAzinx6jvAJQKJn82cWRYC",
  "key13": "3Vne9DdmHYr3mnrhpngFay1brdNLFN5xut6tFjSFZ784AaL7UmWJP9iwGXSgnUBcMNc2Sjv1Ekt31r7yVuicQo2r",
  "key14": "5DSLKYFwXtHSWY4d8rso2Nx7vnjF1dN1oZxAmT4DU7p4VTAisM1oHFgZJbRa6nYrZ3EcN38yehdUwYWoBjG3jLHz",
  "key15": "cV3yHPVgArcJWsRinr7PPKEC8fCQeQfvcWEskHzA2a7fUJiQpEnt8ESLz1CKTpnieu4jPfrXrPGHc7EhcmjywV9",
  "key16": "44EgW8jGDJfEhUpiNpLyfebH7cMrEGD6tpkyMmEbhQVggzwpzDK1tV8PAN7XMNvFQSatUDxrRXbZk8RReZT9kNiU",
  "key17": "2ixZSgYiafD2ARSPSNXDUZut32BD3czJ63bqcb6Ma5v7vrj8fSzdNrN9bkTJje2gbtJpHCEo2bgv3WyCjFzwVQmV",
  "key18": "5J86nKBkC4suMHNZYjBqr9C7xfevx8UzLS42jBGQcA7p5XsbShnWxZwvxCTwTt59JEyEa8KNfUBx427NoQXLTuVN",
  "key19": "5pVegKLbUAd2aWbxzMCpAHkvhap6RGGKPpNxy4vfdmq7b2gyThhXjRXDBsNuTp2cGKdQzqYHYpZGiwdzT66hgiGf",
  "key20": "2pzTjMLe35cq52hjnJHK2rLhY6UNRnvTVZ27nxe38j3DWfh32pmzKDRSFhdZnf6T6dreKZ71okjTKuL4crcrdYX3",
  "key21": "4ZgZjQMHKYcWL1AU8exrXiRohz2YxHCUqRcdwERQzMfvkE7ai7kfZNeN2U58Z2ummXcRJmBhtDzNuGNBMzisDK6M",
  "key22": "2xpNHMn7i8bJ55JiwPZkRtauR8HL1cXhtDJEkQCLCaNJ2DkoZcDSsHYLXkRApnE9X31J1b13DK9fj8KDYfekErgU",
  "key23": "4npFKNqgn6kvw5zbZeArMXCbPwGhKNq82Yh9LVhp2NiLUXPqfALfJqtosjhPy479ApVzQxdJzwSJPJDVY8XQM7j8",
  "key24": "2D6q66wgBWM5o8ueApMEFojASwaK2CgQZaAeLasm8mqC4hrEqDMyjzGfG4vT79Q9b4uwHeLegeM9ixgtPVCna2FL",
  "key25": "7XqGqGbmLnCkUraNymee4FTm4B2uhAh2CbhSjxKF4tSd6ECUoZJRW4YwAdgU6TmUrgNjM4SVoV2qbpGnAx76Huo",
  "key26": "2emsB31TGGARxtAi32Yzws8K3nTXDNBMSJWXGKqcBjYWbVwGJsvV8jwK37zgDqNx87rWXgvAMtkcPwBUtCKqh99Z"
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
