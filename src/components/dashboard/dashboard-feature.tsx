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
    "SA6v5HyrSPrqetz2iYadfJ1eyU5mbrKgFHjzWUhA6FehPxV8tQnVuTJmF4EqHWPT4gmR5RTPVL4WKCkCeQP5iiZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UJt19bBMhbJoFKCvptr7QBMXSX98UsH6FwmT2TC3G7HYVDgcb5qVKibW2KRi6Jq27CpHD97orfxYF3SHxum6Bii",
  "key1": "2dZUFsnfNNq9c2KU2ZmozudqKZYF7YCoeRAjhrJcWSFwdVbkXYT53wZrm1ug8zz32qV9WoCYdiAYsTVBw547eCXe",
  "key2": "2ALcqRsJWPyFBd4ajpXvn1FibFABsBjxeW1FyMd8Hb9t66zKGfnHrQ64Sb3M62YbcmfXWM46N2DXmCd3buz6Cjg4",
  "key3": "3nuXbyz8ztgVRA7kUyuBj5rWzUtYrSPkrqxaCrePxh1gq6h4zMzjTGaLabdczwH2GYCkmZmAUzV7A1PTSVjbRhbv",
  "key4": "4Nxkpv17adtUiSvvWPXHBgno6nMkKMg9qzTJWj13MQKdjJYqsNVze5cnD4uRG5GJFk6CWufFjjP3iPWcY4EpUDuz",
  "key5": "4PfSpchoLMcvB1FHqMp1rgZ7son17NoHAVgyxS9yiH8WTdVjVPfu1LiFFN1SPvgRaGftCdtYDxSapTsKNrwoA4SS",
  "key6": "4xeNHyTSKhG6jLGZLgFxFnDEkgjWqPNugThfg6S5uPQ7UoLHPhx36Wcr7CwTVjDXV1vH13kNj4GxUHHnU5iiohoJ",
  "key7": "jUt7LUUDkmN5huZW9qdQe1bhw4UcrVhrcBah8YbVWErNmcXo4SWj71p51xPzGnE7KqhdNWgSZhc9r8KC6nq6AL8",
  "key8": "5rB2MHJrdZ21DHACTY3QQhD6zU72LMSKov4g9Ys1rrE4tzes4jbZbkfBoksinWv7L229CXynzNzRpaNh9G6Fnah9",
  "key9": "4XW7vk2cfbwKZwKVhmqASf3YhJLWmBCXzWmAjycrC5LLAGJhGfv6BTScR5PXWPfrY7yN2imrqQnVMUkdLy5bzfW8",
  "key10": "2vagRSB4EgZroPct5RJ6zudL2y9AYJ5frr61if5v3HMytqW1vt75nRFTfwYrEWEVRvviaA6WmqGtRsmNPQqmmeUL",
  "key11": "5h4pJwyo8dpZpuSVdjw6BcAxEBY16ub4uiiKso65ytM3Ro57Gh3FcJ7MXZWSjVVR14ZmWC9nYjpb4nnq8WPS4fvK",
  "key12": "44EoGQbzZ7XMgXzN9iAZMpqaHv7dQU2VVT55CAspKpAK4T9EKHSVvTW6cb6ZtU1RtVkkg6AXb9w4PyBBDdqmrmeG",
  "key13": "2QNBZjfkfDakPkZEdeNYbYhrZy8bTg2MzNE55mj8HNX7AyzNhmazNrf6brWW583ccwfHfJK2sM1fxGwJ9nfR7dA9",
  "key14": "3jBKN23Ev46j19HojpBAiixAWGrKdqTLKs7aEwvtq86ARjL85GWm7nShnjs9mmydtSXx5QVF3kZrBgwhaNE1hVTM",
  "key15": "57Y1H5nD4SaEsNJkk5biy8Pbt5yZDsnQhJYSm9z4hDsDzuAsT54zW5NJEpYkSU9jLsv4DB1DLhv5GgUmovjvSKxb",
  "key16": "4yN4rXc964jW4WitzyoYLGFkxyFPd2qKM77Y1E6xXvsWgFQQ2oUfDHkPmDc1B5xCva3ueRZDgv6EuDWqJ8yQ6AUQ",
  "key17": "3rgg4ufx5HHCsxqrEXp7oxJm4GCxc1yv3nx7qwLib8nFzwRUEKVwZQq45VpNEN1f2uaYuotFqnaBoSHsGtJC5z7k",
  "key18": "4TirXMK4zkAwhF1UdWXZcxGWvPkTYiu5wwUnUaNTmqe7CnwxdZXFHYq7KXiEZM8nw6TFPXMGdZo4ddQVof2oSRRM",
  "key19": "3z3kwpXEVfKNyUHhPgkYYDUDDzAU6ecByk627Lrw8riT9ojD5sfY241Wdot2F4VAz6MVw5MLrmJaxyEgtyaPg8AZ",
  "key20": "2MMQXpbTsgYzpc1sR8gDixoYYUpFGNDp6FY26Fahtqi3C9KDR15XzNR5GdxesrhRB4EBCBiJzdovBskbafA4tDzi",
  "key21": "2rRfFrG3E2f1WtnPsVM2LWd7Zhc93xhmPTPpfZJbGbSzqt1YiwqQZrPYabJ9XtCTQPuVhdavwmLaCsXAJCjD1JJw",
  "key22": "66Gv7fFDDRqiCLg2MPLevv6oYUyV4ZZYom3Bv3XJZX3dEU3inc1qwkiijuxY4wGVLJaPQrfeidj6f5ZpDhZX3RSo",
  "key23": "5vii1R8ReRM1tekKKkTpHTjEwnJotyMjXnYSbufFzydYis2mHPLbAYvhMSt4wxZKXXXwK7eGoWnQEUSf1QhfWdSZ",
  "key24": "4rQQzKecBXirf9EibSQB9N1SHRS9ncUnnaDeCahbRpapU2LtC4bE2QSpabczF7MgtM4tyjHJ7dF66aFLJmZeLeAf",
  "key25": "MutngkJdXw9WPNpG2rJtPJtiJ5ZLkPHzxpZTSMoAgHr6w6KY7ZeijiwKw5u1EpA4zJN49oZ4JQhQWhzrFTkZTbo",
  "key26": "3M8Y8S8T61PDniXbzpHwJppGiuKevYRK9ELroeA6Yqr5WVQDu9NiDvdqoToCVdTC3VBAhRWrg7vNCaunTF4FTFzn",
  "key27": "LXr73kEccgvDUA9RmoSQfRgzYBoQTcR1NnCNrJt6mHpRJRGgnkYrmjrzwsAqirhZ3Dmfrh9UcLKFPWQS22ytBie",
  "key28": "4K8c5AQr6M9fEJjzd1iSBjc83zehQfaPzkg79cP9tFZjfgpfvuFxCcHn9eHutMUkEfeai9dxA6LP38FyC4orQkY7",
  "key29": "34Ke5Ujfr2EW2jZPGgQwhzAeEQaPQaqDESnsE9Nd44ggxKB4PBeRUNnV9iGaysfWbeR7hVQBDmJP1aiGAfUcCKhR",
  "key30": "ECL1GPoC5fj1riHKm7d6tKYXj3YAziJL67mP2pkzcQ4Cr7WHHtaTcaJDhcWSuf6PMh55bZFvmrpoo5gbuX1yNbA",
  "key31": "4nEHpTcADtvjcE36rhuG4SRwuhTEarijvzwFurVUemqkbFHaY8AvH3H4xWjEAhni1vMevNSWFfJGNQqW8iZXYH3q",
  "key32": "25SY2aqxCyoVzD4N6o1yHUe6yUFzzG9hEJ2mds6MxFZEu9fj3VBt8om5kRftvE6vf62MHfPkn2ntNcMkxXcXiLoU",
  "key33": "53QkSQSWbbunE253AxZNwU5yChJf59mMfrnm9f89mjxopq1XiZFzE2tZZjwgq6Pzox9JbgmJECJVrWWeDHPgwrde",
  "key34": "2H4aA4uBCYnmNK6DuzvSGdQ2gu3HBNyPr3TzDHqqcjxHjBq7Re9sfjU8WwnQ1V3VPhvRECtPZdKanJHq5xqa3nVn",
  "key35": "49D7YnwPqTGeovrWtBxiEHV9qfremzmTFrctiqUQE3r9VmukyXamjSjtz6Uo8VS7654jeR2DFwegSwQsJs6c8H6n"
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
