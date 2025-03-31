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
    "B8EcmdYq2m915j4JLrJ7pDpH2W4anbjU5AY8fLtJ237PDKHeVKXYHWi8mNYbDymXHxRC787kWszK2zDmBnURPc6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JeWx1tVYv9BozyreLkXg6SoZ4K3JPPZhB1KifJiWVVJoZjmgGMFoniTdQiQckYDYfQngVQakGEKkcR9ngEx2kni",
  "key1": "3UitGuKHuM3WEp8W7YARGMKuSn5DUYaxnUFjywbvyrhv58JfKrC3KJTiDG1jqEr16EKVMnwy6smevb4sdACbHqYi",
  "key2": "5ht6x7VvT9J4nqAmGnpggoj46CoMTpBNLUSY9ozqV4LnjcLETKMSQs6vJBcerqJcc8ESqtS3iAigyeBHCHhxZToJ",
  "key3": "4VGQ2wmuUSBWuwAD3c3FrEiDvAd6zzshu89vWpXbxPqx44kGJtiNaXh21zrrmao7DbiXip3vP6SPuGeuQMmLggTE",
  "key4": "65QqJZr7yoQ2ugXU4SuMwy4JWes5ppTmarykyk8dyqGVqvnEQRhLXihpNGYRdLeX83uD4LrSZq3ffyoUn758ryQK",
  "key5": "3hxaa3ipcjhrQNfvHTjoyi7qUf8LnqFUAdPjJNqcE4MAJnyPUj6hcVcQN3uyZMP2qhUvqgg1RKARTtsQezQKmeto",
  "key6": "Cydi71aHZH35qvAViRQsb7698HfVWNUQbLGDWraSfbgpTVoEDqMFRzro3sxoYigAhWn7Y8Br66EeeHtjK41XfP6",
  "key7": "65wh86h5ET12Z7yXbHHCmJJHn3e2x8k5MnQrqQQrLyZLLs8qmS9eAE2njv67SZnL9a896rdLgkcHGAJejJrjnEMb",
  "key8": "NREcyTfHZEZp8T5qeyrBUkvdc6Z1t3ong64zzi6RP5gbrNzfngRPDDJCtQjc6YuWNtTVbSDq6xCbJjR4RpzDRLW",
  "key9": "35fWryGKhxqLYcGdnMAA2LK1sUdzkdoaXzkB3NCAQ5BDHz7X8bA3z2yPKFQkb2PYzNrXhMhNfZMuZqgYsd2USWN1",
  "key10": "2dEJNTHBmuK7ciF4wSGW2jh1FzzJtddXFFqK9moC6avkzkSqr8shg1CMB5HMXnvEP6yn4xWpzkCoAXZ9Y1yRxf4j",
  "key11": "3VecbFm2crwJuKRfD4eqNMqtGzq7sN58RrhxGbV5gcskL7MnfptKgQKYPNF2skeX8P1C9SAHkAoY4kkiTptVoEuq",
  "key12": "35Sw2581z8eDgQVkTGbAA2EzWzdQ3cmzVQiKq1zShUsTTQCz9P6KfBZqjRg3kGxn9fQzBLCmko3hjxHQ7HafDUBM",
  "key13": "4x4EF9c96NoZbkcaPWRErr5rhEN95hgTH2RzoyivfNniue2PA4TQi9GmpMjiENDZZW7D37RNizgY6niES6viA5os",
  "key14": "4SrSGL5pzkJPAwPQRBk1Eyc6ZoQZLUf75UURo4ZyMSaXGkiErYQq6p8tHJp1CsBrriYJJaCoYEuLMtEUzpJ35EeZ",
  "key15": "4P13XBti8uAj1WcSVZNx8iKGAAZDPVD6ueDiMnDWnuRjMCU3ho528rumycJgRKZDJtbyf8U1Gokhf8XxeczE8zD8",
  "key16": "W3wgJH29LmJwhHmqNBrztcevsqcKbtBdiLUXgJqTk8kYMJEXpAyQgtW32jVCfLrUXhxW7QRQcSsvwvFk4VZW3Lx",
  "key17": "WVJJZPLZ3sEpMS2d5z5A7niPResgRk5ReXrTgo4nw6HeJmRx8pswQh668qmc6D7252k3LBn7QGLR7PFiEjB4aGr",
  "key18": "2hVeQUT8YuT1pVwYbuGoLwDSDpQaCvmQxogbEZvyT5mAZaqLDbwJsksK5hNT2fxSU75GfwANuFJyaFcX77N3iNAD",
  "key19": "5y1QSsziR7gGkLmFNnHmGk4PWAdaZcRxxsaY4YtZMCbSPhKpkqx3Vs1XRK5VHoRFBMx9NzdR823uSm5nZDzfwvTQ",
  "key20": "3EYo5HcSH6dE8D3UvKGFLfp1joTm9X3cgdPkRAUNRk697zwfKtxCd7mfdat4GiGA3HeESGjsLZDbFKbeZXfdDdw5",
  "key21": "xqHTxnC4Dr7KKQuoqtngWNhJsyURe2HZNdH3NCxqEhGJ6XnJGZvuHbVVvWz7HZcjaxaAvUcEVSVXjpZGA7xqtMG",
  "key22": "2D5oYfrtiWCBJDVb9RR9NFKR65vK6AgkqaGu9z7ws9xk7U6HYZETLnUnBPsHkw5235dFzPjegV5LjMZf3Thba8bB",
  "key23": "5Uuxyd6uQZXQphi3mjKNjNBrXVAw2baZCeDUEWkv2dpuRFDQvyRmq1odEjeymJpeCNRA2c2Z3AJsp3zn9xMp3Wwn",
  "key24": "5dD3H3uMckfBKWdEGP27rtHitUt44UwTKbUZaJeBtk5Dw3BztZUPDFwpPfJeThRZui76LoZbgkmwLmC5io5Yhaaa",
  "key25": "3ZYjy1MHFSPj3gKU9v3YR5oDdsecrhG9u6rk2YxhVMVfrBhKX8zkpXTojLYCTbbRx3RF4zZFqwCq2JDkqBXzTkDp",
  "key26": "5GovkaRzwTmZ2Qqn53Cbb8ueDyn3p6xiR3rbzFV4FRgCMp1mar7PVFxRqAXcLQUrKaiBcTEaYzjANhydfCsBjWAW",
  "key27": "5wVNnDWDG45CjWxMWVE9ZDYXKgUzyv7VofSYHWoB5hQMpsBSUQ1XmnYsVkD6WCvyXEfYJT92xb74Jb7qR9Y1LRoq",
  "key28": "2oH8YqxL5oT6vmfDxQKcNWvpVYGDZddsJrGQ3nWeDXXANiLc7dApfehqfqwHVsF1sn5v2xJi73rpyY1gpFKPPYxL",
  "key29": "3hVDnr5pU1Zp42WeCMXLipq5Na3etNDeL8cpaY4W2cWosryJV7ZWN3ngq8r2NieuKwyQo7JT7vSLaVFYc4reJWzg",
  "key30": "3kC9UTkNLwWWGDasM28Q3r2jd92F5FMsrWWCaB8yKfM59JvgCWivSibYyoMdFHfaw1SRgDc16HF5z2VdHBy68rvX",
  "key31": "3PFX5k9ywnB54f6Xqg5gsh2eXMNsRo6DE3LGxpySy8htoXYYPvmsdPTJ9ZWcTr2BhwivNMxCSU1Ncw6zrnSYME9y"
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
