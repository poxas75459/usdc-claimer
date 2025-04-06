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
    "551VA2u6LYfY5AGGyxg8CV4cE2eLwSjx5Mfp8BwGLKPBYBM5VWXhKwp7az3uxy8soFLdA3YTfuwP3uZnrPmxvGz4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KFGfnAveygFXn2HM9Xy3RadCUXaZiWzNbbrwqW7xcdPWT4qxEf5qVEbXkCMQjB1kjZ4T6UW1d4aKpMZwpkxfNUW",
  "key1": "5sMqSbFUpSTeAFAXrsWoXhY85Wk2CCs2TggvT7KAB8GmrtytwPwnfqP5337U51sNfcr2xrAQKgNPV145t6T8gdeV",
  "key2": "3SZBKu8e5XcoSfYSXrVLYdGD9F1MZEhPPrbE36YG4DGnzyLyP1PYzfb5NUBECEGyUSBoSS3tveqPNvfTiWVwZXyW",
  "key3": "RTzv1c2QumKBAXmjLaGDS3XmvLhSY84B1ucNzpvSueZSavngKRZ43WbVdQpHpD5pmc2YnUQChGyPRD5xjJG8Zg2",
  "key4": "5gNjQGnFs8siRvnbD5dbPtecX6NPXbjCf6dG8vrwQTD1frC7DSezsRVXJfSZFwDBJiHirePgxs7KNzeDzfDFMGae",
  "key5": "3K52BhdJ2t9rkFjevh5kbdaaNTMmAE6W6DAEHN36tZe7m7XTWSdiJzdFjsiGPrAEXK4k7KKNG1c87vBy1M3XPZEo",
  "key6": "5JzXjNkmPBC9Y6tXjtDTaTdm4UWqodNm6vmbVk26kfdYuKCeGx9NEcZPKf8wiUPAtTTBhyYSZNz8Qdy7bvh1yZwa",
  "key7": "3TDLanSy7rgUgdM3JCW18EGgncUrEWvfiEojREKvh5v1RLrS9gCip1UXJPoNaGDddi7b5KgDMv2WRTyAff1PzryF",
  "key8": "3CRyA9Ks195B4bJfBFE2zGJvmMJ2222iei5zeZWseHFhgeAaDHkxrEjVW1sq7RkFEiLzyUsNNSEuBrLGsyHiyVYh",
  "key9": "riR8RWiSoCG3DzASPnT2Sfx1SSHbsJPxpCZU9qAH5JKZ4rGXyswW4w6Fedecb634J8uteGxEguPnsM4ktFr6e5B",
  "key10": "3tJgEW6gJRF2S5fSQ8t1SVH2WqeiTzSHc8ueQMfepVGfey6mVZkpkAXQHJC8YgTYVGJXTcqcPyP1zgefNQxEtpFZ",
  "key11": "3ovskkF6o446Hmx1BPUBd9hegYsnREbzwcEFGBtioPPiGN2sE2RG2XJG2QP42WQrTZ3VzYhrqR7uoYgC64NtL3tj",
  "key12": "3z8PVFP8kLe7fUpgmYibsKXKBwTTajYh3Y1FGMJSdoX2NRXNPrPYyWNr99wQVWprztBB77ApXG3X7vyD7nJU7X1E",
  "key13": "3d7F5uw44k6reKseRSbQFAWW7uPiXr6jfWxZLin98kwpxxyeBQFM6KCsqJ5328AD4LF2TZw3xfHKF1Lsn5QjYzxh",
  "key14": "5Gzy3rPWPyySVXFxUX111u8WtksDHYmjQ2iZej3iW392jD8kdsW23MSWcmcNf53Tw3RjRiV7qiD7SrCDPWvVBS9f",
  "key15": "5oaEvAiUueVbxvHE5j9vaYfy9i3YJXgAn5J3HKCLaJnYE2AM7XPRJ15EeekEXNEKBKUFd9q1Sv9k4e7ANrfPCRsZ",
  "key16": "4bareX4p7HxutneyCa2FWT3jzve2vtZbDZLiQHFz9NfZmPwe7W82sU571EZ4mMJS6jramGzTKiYckZVjKJokBXjR",
  "key17": "4dCW8GT4sGbHWcZ1NcVsbFH4m44uqyMbtHtnniSpSStbujkNczaCKiKWo7edFpvosTre8t3PDp2mAe2N5j9BPKYW",
  "key18": "3hgGTDrWP9SYuv6whFzSkUv4xDDbTMQVLRCuXSBtNVB7wkBWH95xLxSxWz78Sxku5pvX6iytdwfxMKVNhx3TQbNE",
  "key19": "oaURLJp1aewKZHp1whD5uz5GfjGDuZZAHFXYGT8Zi5Qu7M7qw2usKLsZEqSmYK1RAfh6RPgJmv2g1nykyMW2iug",
  "key20": "4PdurDPLstUha7bm7tEQQ1TCcJ4sMXdbfou58NU2Gr3nfZwzimHgSGjoAaMRgpi1xJgYfaMuqAGh6Doqz9VTbL8w",
  "key21": "rGcPNL8XCjArrfLSzhGT77sBPnnbJ7fBweJQiqPtXWCrfBsZ6VgeqQ6y8LKT4wzocm17rDaiya3dbjKAqVZX6dD",
  "key22": "4QQJLWyviUsDcCLkbUPgcNsrT65dJSLDBGiUHJWHHTx5rxFm5c4HEq8ufDNNUJA3BApq589WcVMYfcjKsmKbShY7",
  "key23": "5C2mEzgGGfRaBSRmGmXKbbEh8NGC57UDqJq9ttmb5YS5e3dWHyURHwBt4nt1u3f1ur7d4Tyeb84TjVTxVqhtimuq",
  "key24": "5VQ1C5cxiA427gQ19fCBXNxoH5K1b9VC3vNLFZCcJngwFqwUVwog1yzs2S8NbgskBtthuER3Pc4sKd6teQxpr1Tg",
  "key25": "4u3JUwgF6T5C9K1ZiHC4FCnfz9ww61j1QRorhzhSxLA4FeMYdwFAFYgB9MoRDCzmWex8zzpKGL72FQKcGNyZTCZG",
  "key26": "35k4AC6r9jLKTcFND7TcGpE5cLraACfVdEqwubGqsM9b5zpxeLo8cS8wMxhzJPwEfCNUCJLXWgb3SyjGZ2WEP29H"
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
