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
    "WYHDoy1dUnrDE2G3ZdjktJXhqGm8YpKjBN1jjXawCvi5WZfmyTA1VnDnxCLL7jx1Ht4bwfhn6AvqbzANGaSC7PD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fmABMpLcGSAyvHriSgQCCrbMZzosRrimr7XtswvRXGtaj8G7KNdRNeJNiLP2QF8fNDrw7zUgz8d6JnHbvdXE463",
  "key1": "5rYGB2ELczo9eekyctzk9oK9JVpj6BPupVz4JxGruZeFJXSRPaYUCVGKSkaF9ZyY7sKSnnwtzz6dUGqT6DUsT28A",
  "key2": "44EMjD7o9L98UtCdPtmSAoPQ94r7irCtQa9r7HpsSCZjxEEDWPWZjrXdRFENC57T3ePdvF7bPaajwH9natobbaA3",
  "key3": "Qweh8uZt4hmuZczPxjpGTUDX7vTXvmqaa3wh6RW9M7BefddTLRNP9pw8kAgiGXGr68SeHeSWNRAtw125xz1JrUk",
  "key4": "4j4N9YgLgmpo6ZGApeY3cyvbHcPfNmocUdPrrGHPDVaYYshFbeNXN2Tdcnt1B2j8QSD2AWXekYH88yK5ru9boK5r",
  "key5": "25n2U5wuz7FuUHWSr9dHYnCmv4fgRtWm6g8pNnxMv8tfxgqQshMUiNB9cZj4pQJ5EcGL7ASmoVueJGuJ3vTPdFdE",
  "key6": "35VE7LpvyQ7kSjSoV6jfCgTYUBnE3A9p7xSbdA5vLk587koLpe8gUrbs8qPDWME3kHrVSRX57UXhFBeYeAfAjQF2",
  "key7": "i612shQJjKHBqNhZELyvjVK2ouXxCMJFGDheW3iGyBv1kmUYZN2YX4SddTAKgXHKzDWZLnr4cmJWvQAJisQdLRd",
  "key8": "3yPamXQdTXAb3dzpiufZ7sfr1TTLbGE3WDh9fG9uHq7CW6P3wk3d9N3CGL4fKzTdpo2j8oAdVow1Ch7N8pcgrzQ6",
  "key9": "3GXBUyGRWeBCfVZUKg7HN4QBWM1BJqnVSWmYgBtEBidJFmvn3KyjjHbeRUQoTTmBQDsgNXn2T2cUn5n7sAo99f13",
  "key10": "vZwg8uLUdq4uxTZyfDpiHL74a6Snbn7JmN7iqabZbYVHcVvJAeF8bouTNdJNvMpiENpANqp9BjeLXKJ1cL4cFXG",
  "key11": "5edRG83RgTvHfaWitVjdG7Uqw1swM5HQEHsE2nsL7rTP27CN61xot2KPKm19BYZfSv6AiZuxK61bKTdYCjVAQrxs",
  "key12": "5Aaeh7DqgC3DrgdwVFcRCLqM74cHLYCcER7EuVVzbRkNemWEwFpAKgt5iw4QfSCatTSwXGuAwxXbyrtsL1DxS15G",
  "key13": "4SHVxaepuRqSgrV1zw2WSrcFsW61qXUmpaKAvo61obzPbuc9UUpybZbbv3qidgsfvWU5ncVxf9amkMuMCnN7Chqq",
  "key14": "4yzpEvhoa8C7EW5JA8wEaNobmkZ6cSFhs9BspYoUA7W2uuWb4egx6sYiU6XvFGEYCzn5pzanwnAgARinsXJCmMuV",
  "key15": "465XX5rP5TAamasw7ydFTZiwEouFQL5Bt9Z3WmN98ACgMoVyPSfZwF8DPsAF75kXq9VHfum2n92CEaxtJ3APwcML",
  "key16": "46VSmRZnNYAKy6fMdDiRxcUyEyfHC2qtdbDrH5FW1Hk2a5GuxpuhgLmZrtxNfpDGLoMnxquyMuDRkF4svic3dFM5",
  "key17": "5bBtJPnfqHeqQVHVzauAbsf4bP2dYaLSYHnpSR5aDr1yvosqeiM9bnXnHh69eqQMDVGVkz8cbHBD6XB9KUHpoqt7",
  "key18": "22dAXz1beS6ebsXut3npHnJWPGwu4rSKpPNnfnRQF9FP5Yw7QZ1GjpfW2m7f2RSrwBTv7crUJRA8tMrzsZiiN2gL",
  "key19": "3jqcdY45cKW7ogWJegByQR2zckjmPAhx428nUfAV1uagSLxwHteeJmjTDMCdVsqxZRb31s84xCaeEhuk23PAQSvg",
  "key20": "2zyWR58FdckwqEqFFdXfMU55YaqANN4KKKdRgk1c1aoDszym9Fm8NmHpAX99h8XambBEpykY4iGxYhmsBitsiPB2",
  "key21": "3hrKsw1wEactkoG9YSg36GQNRy2Cadn2RN9L2JEy9unPdFZbdwAJ7Cb5iDSaR8VVfSziNkTJokZA8ebYZAsVFx8K",
  "key22": "3XHnwaLkjebPTJqnT1DDR1ihusLWoJYs6a3vf5dov9yMqYSskkp6UJ5qV5CFjHJdfeP6x8uvj9q3rpEk9Nci8E7P",
  "key23": "3T4ctE8PHXxczizWQwodrvpQYehvRRNdn2dDb58qvYrwRdicuthvJ8U8qAbM2v3y4fFzpAFzbxLGru5X12B6Yo3i",
  "key24": "2AjbcEHezLUt6a1GGqAE5kRwhjSbXrnVEHkYQudZHdEW6Vs1YLajvL4aUNbZVAdgzXpaw5GwMGqacmRAV6evfWFW",
  "key25": "5ckuGjdt1kTc3C3Ru76AWu1hEb5kihgHzR67TPt9kXkeTAhKLCJo5HroU6PRExKvGc7comYaw5d9eLTVEDe7bfwJ",
  "key26": "4Y7ZpXQiv7pi36N7RTpy372EQVM665iMqxqfJYmHp7Efmj4udWG7SpSkgoiFZjYdEr9Fx3SS9TFZHncs1iqnrhLz",
  "key27": "2uMr8TRiKGKhwCM8vnmk6yYL9QEfsVXzN5LnmfpoMR8WSBv2jrNEHKBJ7kHsYc2nhKou5BLbWynSXe3rpdVJK49y",
  "key28": "tNNjfgBXLmur6t5fKAdu4d8WuEnEDrf8UqWS8jefMW28YZs8sXMJSAhdCXAMPm6ufGsvjZeZeNDJYW9EF3yfddz"
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
