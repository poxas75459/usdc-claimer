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
    "kXFDXpiDQsJB5iA3GCnJ8MbTpJcnAzzEmrydug8DymDnEqUykLkDNggWyQf9P5Zz44tpDgM4WPnTucq3h2Feza8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TtmEVuT94X4trAJugGLguHRLRNZEzGtdAUukmHuDcuB6srqdJonKbUFWgDzqHfHBk2YTapbgTLM7mansCEduv9W",
  "key1": "2tBmK5LGsYRx6Wi8hE7ssJw58TuwoLnVQdwsEBsAKNGKCUJ2KX2xqXp5gpCEy7RPDhvxvSMs61k8aXxPUSU2Sy4w",
  "key2": "3GCA1XFv88RxTTZcpvcv9r1jVHLpuXtuzkgRmszQ6RzZZHWa6mx3KMBfnF1Rww3eNuQhNDjkAzBrTaWzxsCv5BvU",
  "key3": "5Qf94Enwjo8fk4ux6VVkb9UukBatrSmPGceDVE3fKxXbtzEQ8i2DeYg2ysraXi1DLFGXXidHpgPvGyJ5fTGUG44m",
  "key4": "2Zvky3LPjYPzL6zeUBVzVbTdbgCWNNb3moVJqLHmEAghM9BB7Ursh4J4dMbiBoHSohWApSADiTBDQT3mR2npWJLA",
  "key5": "BrwKT118Aeqtt1kgmXwLAayfSF6SY5NTezfAnrNWd28994RhdDwU9H25dPfar91Ro9chUqKJkVABA5xW2bXrEdx",
  "key6": "yF9gT8Jubz9LzjAwtZUtKFEqeaFvXhHCfegdeconRLYDPczVKHtfb38uWedBkDWkJqk3Jt2DoR3CdK3r6iA1oFd",
  "key7": "42JqJXFYRHJmMm45TyykERAQKXSAeTtuD2p1y7xpCJSNyzw6EKLbWVMYFiJyUufCDuhVhVxYag7K5zKPy3f4QUv6",
  "key8": "5KaAMTJ7Q9czWoSdumSc6dWuvDNRnrpMP9qXCANLmCu2vf2SHSzxH4ogxN3ghxJqqSYWQUj1muYvM6xLJ4979Vj7",
  "key9": "47aNypbfNdjen3HH13pqYYBKtKyVJt3XCzE7QRCAnfdgTa1qtyqptJxqjrgZicAn4YC1FWzyFH8ZdzxRkc1Ss5io",
  "key10": "5yY3U9bBUdVCMmkvxSjgbb4kXpu27EngNVXxCvVNk3QsMNvME4MLmYYUHGGkNRogHuqzAaKKps4VuKWnVGTyJWPF",
  "key11": "3Txjs937Y92cyxJycUAxyuXRWq8YPkpm4osPGuqP2JEVw7CnjAXR5kn8vjx5MJXiM8jyPsfWvWHTHRe966xiktA",
  "key12": "3vf9NBXuaAyMxkftDNHR6K8mSd461W6oQrDyBZ27Y9LT2jJ1UYcAMNcvcr5W2vDmi7ZoXfw6gi11y8wASm8foUSY",
  "key13": "363WVU3Go4n4SxzUKjofU9oThMGnNP3cEG2i5Te1cPy3u2WKCuyVBhwkwLjnx4xZ3ZcZjHP6bgcrWj7X1LMqDVor",
  "key14": "36ar5TYBw8EJUN7jL6Dd21Zn9rZY2eETNuV3znbJK6aGhdimBkj55rCUyWq7R3yw2Vcw7WGrtkRuDfANuueBtw8u",
  "key15": "rCKvsDDiL4eGJ8jDAcShaKZKWXBMmCrzEnZcdw13FKSVijKMvmc8HMD8WXaSNBAZ1ved2pn39NukiRQzFNEcrbA",
  "key16": "4UPywpZ9HwVRgZZnY6q35u7vj7yZh6PDaDtdG24nM5Y973BwuT5mnutGXAczV9TBoWmLbUabGbvKFU2oQN4JMArA",
  "key17": "2n1oUU2YDxmfrxdDBxUrMYPLG3QxygQ3jUbFebQhspq45pgHtAQBY4vyK6gxAazUyaX8zfhGhNyXD3Ad6BXhiDkU",
  "key18": "2YwPupHYu9CYym4hiDFADEmDuATswB93PACN6UJUJvkTUsMkMKYV4sB9e7X16DhZ8fwko76Zvf7h2ZtFKQvW9egf",
  "key19": "4PtZ4UDa9TGPAUu9PMZmYXAs8hrAmyJAo7qDavvG9hc4T8Df71Bj6oFJ9dKjhKP5sXWkn3doDtutAYhmKXAaau8z",
  "key20": "28HVdFAiFeJKVKXgaVWuyqJ837AhCToM2UaYsnEypjQVrTfbpnuQnoU49gTZg87K1ugtb6vSZ4CdLQQuTDaqDe7r",
  "key21": "5jXEHn26SZXBdTPtoTR31RNFPRPyA2ecceeyT4He8DMgDKByC95dPibwk6aTeKuX1igQRnqUdLPwPFCYQg79G36e",
  "key22": "5trzQZtZugncHHeaJXF7pfSwatBj6ArLN2rJd47HrpQK99QLCn4Hh3sb7W65jXxEygZC1Wa5u63MN3nDg9mLsNcP",
  "key23": "4G5zxfVCMaWx9LhLGCj4VLMetdUaEK1G4iW3QvB6QLuRj32tTaFEqYLHic6bXv8Hfj6gznTXFBUEoS3g7mw5JnWR",
  "key24": "2TyZmceaYsY5oDAk4E6aY6ef3pfe5ZjwvgQyxesgfz3BonUEpxx3kXZYEwfpcpUXErNv296qGmAwPvKyro1hwwMF",
  "key25": "5gxaA9jpRnwgzfSRqSNNdeznHX7KVUsCjA37yUw7ccVdw3FGPAiKUiLRzd4dcF6qVMHCw3oiZabsaa5MAkVqG13U",
  "key26": "4oDdpSYKQ26s86TFmx1eD6qyipChUiq1WXfyk2cYg1Pvbt3mbMpt4CfWtVtHoXff9K23fHiHdnb8vyAUSfWs67sR",
  "key27": "5p4aBkDhqDe1wCHU3nWsPutRvra9y4zQknn7c51Zk4cTEoqXdHFhAmBRBLEnf7WU14nNhdmvn1G1dbZ7oP641Se8",
  "key28": "mwxGgAAizhU65jQ8tbzzwtXQi3GozkiG8UApUS7cFfuXafWdjgyyC8HjRFUhpw2FqLeQNHCYaUnV5KEjkR8h3zg",
  "key29": "2RdwsfMtdzd6WRbLCsibymesXauM3ptAg26kDLnZovD2g4W97Z9EX4CjTfaznKnHm3PQsituEUYVE7KeDo32cZ6A",
  "key30": "h5oDjgRf5HphcAYBkRh92T6Gpoe1akt238c4g4yiZWcXKbYEzADN4QwqhnftbdgE11yeDVU4tXB1mGysRb364JL",
  "key31": "JK6ouKzuJSBjYFovLwoaBTzq9XiqYM1C6HpBE1rahBkmw9steyFKoMDemiGLryP6nsgcnbiYeq39Meb5VausTKm",
  "key32": "2S8DTrRsdH5EW6CTHNzQf544QkTKmXBA6k4nt8UdtLXE6pkcmqJ6S56Gvr9CWV912ibpzBDwm5GsLeqHGF6Tr4QF"
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
