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
    "4M223GiMzmcNWLu5swy1Ns36dZXa2mDMNjfzwdk4yoiJcSdG9VcCH1oQr5uDWvFM7ETCudsNJ1uHNfvBM2bFMVTZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kBmVDKf4KEFRRH8uCr5fZVFz8jgRh6LvkXvXYL6JJ3FonnTJigujVxzVHWFEiaeU7tg7Stg57fxNnaaAx93sWmV",
  "key1": "2meoCWGajeHmwiuzWBbquC1VsBL1PFCU4ZvUvv95WYtS3H7Hr6fRwgtg5VSm3fy1T6DYuVGxRCTXRLRnyAeRMqGq",
  "key2": "65TwBYAsnUvwUSki4fJF4Lo8FdbefcjPYiBSawQ2Yv2YLXd8Ei3PwFx6pxQpmWjRzX3s7nsuou3nxqd3NhcXo96v",
  "key3": "56bazRD1GiTgqaYHgEwcEQn5qa7aa6FSPELUyfVk6XfoB7b9fhG6VTNRZyhyQe7qYEd5BABEWupMT2ruTP6s32yJ",
  "key4": "2WYBtSGvGts8tYhgvSXizFV3BpzTs48XACEjVKchns8E3unkW6wa7ktuZZDGZz2kzhxvMHMJwsE25jk8o3dNijUp",
  "key5": "nJYfw6ehGHiLZTCoT9pie4mGCG5m9bQiBmbQK3a1rvFbiT2bixB6CzkzckZwpYCHTnrSd3Xq7pp6CUu3Cgwb6Sp",
  "key6": "4tRoooEcsFvvtigS8eo35e7hwEJneR17irXin7kD656FvcUtGrCjDX3d4ttKAgJX8qeUWH6YWuPU57giVfkiKpw6",
  "key7": "2PGok6aKHBuubPFdgddp3EGy8k2n65zs4e3xmCcCJDyB9AjH2V4ZdY1EWxRDWrLVhGbhVudqsaCgcTDAC85TJTrw",
  "key8": "4ws7hWKXMLcBPF3qEwLDLr42d9JvJfvL4W5xW8LmChJGAVHLqKbHgqoJWBzx5kkKeMChJHDv8jJyfLuA3qPdvK75",
  "key9": "4vZx1F8GnmdhcHu2N27EkLtbbhznfenntKSgWQwD7fiNGyo7kB4hcEjH7awUA9iwSuJZeNf3KqLb1QicipR1USX6",
  "key10": "5X6nb6RNwXXzwVapYLgvKMG4Na7JAQPLL4LzxxizaKWvnjcAA6BCm2XVL1rAK29DzEm15QzSj8zTFFf9LVUnreJQ",
  "key11": "5snMrSmiYuKKJGWQwNfbX1yKiHq339druJ9hyFbBkxTF8aAXh13VxLUGRYnMgsg5ZRoEVa6wYMDerSs9viMAXdLU",
  "key12": "4KXn5opa6BZ7yeCvwkaG18c7jf8K7E6joXQEJVRqZ5S4mmLUSW93fQQLCESJMLmdarChwkhNDAWkudhKmenRhT7v",
  "key13": "3G1AvPQvDtmdS8GL3MzdeGVLjbqgLnpXQ28rBUewVTUZ2Xc8M1qjq4fyXeKLzdwzQAytngm5oF738P7wAndsQk9m",
  "key14": "R7ML5W6NyVfPhfChbcL1Jf3u54GynZv3XFVgT8xruxdiMWJVHXaGCVonRAKDfWUv9JLTG4YW5uGGG6P1Czxorvi",
  "key15": "4FFr7V4qmeZMCAusj6wvEmW6YJba1T65Avghyvr51SofVDqEVp7enLpVYDrv9Jpxvv5dCgwteSmUpEQN2APwHwwV",
  "key16": "A9Qw8kjCzhQvf1MWDoq9pptuWh1xGrNzzqvGNYQ3NU1LrUXjW4pSnvzSJtpbHqoeE99mJyC6djW2xFg1tgca6Ld",
  "key17": "5xqnw1u8y5GDysXB4M7tppHdotmrypRUVQHGChWKTetXsrkrW3cTPCXfYfQxSE3gNmy6eJQCnRAZKFycbv3mewsv",
  "key18": "4wLTs1tJ1qrdyDiKYgvF3tGbAafP12AY9idL5NEzjciHfT7SpdW8vjbBFjXYGfbQ5J3K7nT2Njej1B4XSSbU2NrL",
  "key19": "K9hQ9gh6b9RofeHgmYycqHCbwbo3fLDsXqCfrEGjk4ATUWmjAYxeD2FQyBcecaFitw5LPAsdCvifo3SZZKP7KoA",
  "key20": "5NArLCDTzavAw7qk1X5jGWPJFAogHDKJnGHaaRKpgqQgq59N87c2SM9uLnLjrGL4pJosRkJN9cTgUQxMewRin2S6",
  "key21": "2yeCXmxc4Pj1afQRsFCEE3tgaRSxHz3YPZ7CCpZYjpWNdDn4aFs78ch2ikGAjTkujKUDEQTn7H9a3ak5b3dTrCz9",
  "key22": "5wRgzC9ZTFVza1KBy82buJRdw3VEP8Y5YmzNiFeXSciLqTRASGPBV1F8xgcjUQvuwW9pkYTVNQ83evhQRVFvcjyV",
  "key23": "3SiwMJh7X4W1bLxrZXUpoWbnnVfbWi3KbwPyaFAV9dKGNqxuxdaviPDZLVvHPdgyMN7HSQaJvBLQr61yR4c2KKau",
  "key24": "5eej5TXeTGGfR2TroKJmBt4oruvQaDGUyCA8kb28WrmeYEuuk3C9oVS3cYZeXXMwYJYMbuDumhTHo4oi1Ywa8F3f",
  "key25": "3pWghgvjA5sBi94aQxycyi1QAFjnn3ZZ7Muza1ZHemV6LTBoVRy9LMUcr6N85jpQcjonYAPvNWSBTfMXYdhCsq7S",
  "key26": "5QgJR4SEx5doUaXtCUq3TArgakyUENkseMmjMR9m7qDXuELfvD7ZXFVs65r4ceEXxjrYXP1MDVZ1dvJyb3K1pm3g",
  "key27": "3M7zn6pghBzMwa6tQaxc1CaZUuEbpYqjx7fFkYPJ4ahTypY93ydwyHjCxi9ZAGcjbMdGzGUu4wSfDUZMbzinwEqv",
  "key28": "5ZnwvWyweFfaa3wipsySb4o5nt2P9sURT7oGxdfDLNoov3yKdjejinJmiGGwfWFrweZALR94VaAcASsCLYAvLps9",
  "key29": "2VA9JrMuJgV4KHKrnKh5FhPUhaDvB7BLnmbgz4UEay1p2Ng24uhzLKmTkSabMhAzWu9rpZkSQnmkYYpC7FyMA8rN",
  "key30": "49sNq8Xq4Dzbxt6xYd9gCA4kPKAjYAfVcc9QeEw9MBB1eNLcjubJf9P9F4hRRSmgwcYkNHNCMSMVfeGhmFZCSQYa",
  "key31": "5mirPpnA21LHQXugTy3CJz434RXkKHsmLYnRVEg3fF9XKT1cukDfP9JkDAP5RgRv9jDmy6EqpQsD4AfWc2XiWCyR",
  "key32": "44AfqBrHcBAR9nW5HezJU5bWqG9qbuk5aiLzZtmb3mDRg76NqJvzV3LRECh6NTsTUbxZbtKjXmv3WVSBphJoEWV1",
  "key33": "66vyLm7C3qhUAT66MAuLueGVfSkeocRV6w7x4TXx8v6eCKiaHFRARoniptxEjs3MAa4c17bSTbgsKczW3ktTyw91",
  "key34": "3kywg6Pvm5doMTWSPRsTiFNdj5Sm8cWJZRHm4f7Cx7dq8kTAzPeB7n4cjds9ZbZ6jkjQLsa34h7APb6FyXRP5P8R",
  "key35": "5pd6TQ39xojPXC9Brg3G3vsPqobsFdaPtf6843oYRsfoNNNBnUgApd3gpTZFw1zjY5zeV4EkD8CYykMBEjTAECpw"
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
