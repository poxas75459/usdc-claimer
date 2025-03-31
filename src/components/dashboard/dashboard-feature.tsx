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
    "2gmUDBMuWt17mCANgo8Q6SAS8j4AVKKybHYcYcgYJn4gqHvrYmgFowVewoCybNYmathyRv4oFpfDH47NWaxAYHG8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5emJGNjjc4qCBDT8v28QFXnHHyPyVWUJuum4j6RbjGohGZBktSib9HnML7b5k2kpKHnC9aLHfSJiAbQAckqcWneE",
  "key1": "3hz89Ctjn5wwaWee4kqSo4gLNUZNCMiaq8mqajkGV8Yed4RXdKJQtzzAAaEjNCkpiYStdTyvuv211jTnNhwyi1CK",
  "key2": "4KsySZYEouaWj4tfmmNR1soMiXh6BsqPGsPenvVMfUM8bRedcPZaSp18yJWzVUdkBZiBQ17RHY9PQWc5FFcAdmRN",
  "key3": "SEztxkb868Mp96rxqjAn6sW7HWB2vsWCXqeoCZkkBpBhtTvHJRt99ajtm4giBJhR7LscpF8CVx1a4qWeNSWWeKe",
  "key4": "SdRYjUTmCwsUNAy4VFFriEvZYPACPhFRCLYRRCPYTuJhqBwhaAvfLT4U3VSLfwVNUot4TuN53im1tXbumQ9E8ov",
  "key5": "4HNyqR8nf2WJd67iwzheTzGJjnS4kbphVLyc6MKzqSqB4rHnDUviQByP94BJFfGLq3E84dU4heNJvp3XCpK87g2J",
  "key6": "5nbF9thvChxY4Ldr5TVxQC2c1eEcPn12Rv48TnfWK8UzYNoPh6QQd11bN2PC6xz8nQWnEQHfQNihiSn4cRVMocx",
  "key7": "3o1DhUzgCt5hDzmNpahLNdwUBdmzXrSD27oujU8idNCpaCGjaAkdX9LtauVSrHPEeQMdaXtNYB7rbdBw6BVvHQah",
  "key8": "4E8vmmxB335gDudtvVkBzgz7kdn1SX2jvgtjBySSBY3jMJWKFGY9oApuWvov8fjFvSfAAPj55duo2bxcx3UR5pT",
  "key9": "5M6h1Gg4Em5TUWynWc9FdGD9UgmqGbEhHfghhqFrLYdjxuzaeMCVT3QtmzjcXqxsWo64uMcVdTLytR8KfgywQPRB",
  "key10": "5zPpdocPNU8uzQb1MtWL2mJCBam7FDH89s1XCxxvsHRa9PQ4a31Ne2isSowegbAvWTahCvfQFaUCu9gKJbzLGyCE",
  "key11": "5sDiQ7EiHkda2kuHEa9uZrFYv3dznWJLdNT4Nb5Jy8xzHPTziYwxu3QQT6We8JvBzhb4gcuxQH5TNoKxtMCn7Vg2",
  "key12": "3N1gwvYwPoTfG7nwfNVw4w72Tv9oSnb4AxTHNqJ2ur8PcqZYXAGnVdidc3TzPQvaabzwEqzTW7UzB2yPQzxesMfQ",
  "key13": "w4AzzUBaPZWYNsRer56WgDoqydfHGJkMZEAd3CkwDjWyzJmG87CkhkovguEwf1aymW6af7kbGxrHwuXLrxsPZbi",
  "key14": "54n5i3GwwrUkc4vcuGDxknzrKx7Pr1mpfNvtogFAzLUYsHNjvEXQvfNGC5coRaFCKJMa6QSsYPKtJJEwyRzyx39Y",
  "key15": "3Hu7TTxv4QkSm9yv5xAA8UVajbB4YBHx3AhHMuaEATz3SLUtPkb7XaumiRymMGTjpr81GkonNjwgpG15t7tz2omF",
  "key16": "vzrobgC7xLhbL6C39snYuEoKPF9i9cjuiHUKJdvsRHsyDCwuA8KDcToCSovC1yvFXnhSWbVhWVUYStb3N4ENppd",
  "key17": "3URwKG4EkvxDRwYjkJ365Fk1b14EaLuQet5XjB2CaEZ2Lm59TcYgR8ouGHyEsidv61LNkhT22KHqSQ2y97ySjsYu",
  "key18": "4s85LjLwczBnMBhQyT1V4jYyh68v9zXTpDGoC9jxA89JT78rQP1hFixrNpQpVwimRbg4xHb1qU1cQbNkhVtTF3ir",
  "key19": "2XhqGkqcgYk47fRnk5vxfdSzP1mSrxqhfVA9NGdLEY1KHx7xW1f8CQX27Hw4tF1jJSjyJNCxyywNFyrrFdvkKapW",
  "key20": "3FTZ9xywTyyLSsu9uq8fyHNPTQAN6qjmNW8u2xwQVog6buBuimnRCQ2M6EL6RPBFRnEX2rYyVWyAwv3km3NUKaFS",
  "key21": "2HcmwXKjC8Dg49NVaDkeTj33VF1gQuEUNE84RUjqhcCrH8tCHUueUoYGc7ifBy3rtuJLKKn8byjzxubPa4jyBuD6",
  "key22": "4xCW1zF4tAkYHc9mb6aB2G7BZeLxU2KEXs1qUF9tKLYQPAvUtNubmgfG9dZ2kBxzsAoPSFK4dVULtrx7CxrFx49c",
  "key23": "53t2AjWDaAxHqxD7pkLNatWimyW35z5KmX4NMXHQJfoRiyk7UMzLfuJsnDjLu6KWL3wP6ArGugGr6LeYbmfg16t8",
  "key24": "48qi15e7vmbb8PwwmSbNDpsZM1ErV39bQSnNcmqmW6D7sr5VErYMFMV3ttsoUcBLUXCZKhU8oUZ1nCJ5KqBi9pnZ",
  "key25": "2LdFBk1DZa5RmZzF3jgAjvXPeQbLFbYveGq32w3W15Y2hFskPgKNnaW4RenjgHdJsSUiExe9RDBRPsx2eQ3XUBV2",
  "key26": "4T6JMpLWVpWAoPPCcsW2gmHQv41HxYRoHr5qFCuDdSQDvHXPyyCG6uZP9C6aYMb6UzHt7DHQ6AqZMGBNNH4MyTb",
  "key27": "2WiPWYWCrYjxGUf3DjMF2uagyGgufDnqwvLd4DZTXv6Pn7z7VVCeYgWnLcnXVLvJRemrcHs3iUbGMjz3NNCbQnmc",
  "key28": "2VwU4o16QbD9n3HGEAdCVAMw6L8TxxXJsdF6H9UYoLpbogcR6MqtaeohTXvmGyyWw52dqAneYZPgHVzsUATg3vDN",
  "key29": "C3KWWAxkaH7Sz5d9D5Nx82aSRFxvdaNpYqo6whRXRX15FTEmJrMiak5J9EqKSqZMYLUGqDwR6ni55Kw1WSvmKiY",
  "key30": "5qN2br5fWMnKosMufTs4ESxFatKQa4CKmZmKmHtZNNLK4cx9vwL1uAWZKNQp8y7sXe9wUcsZ2nfPymm4hAdD32iW",
  "key31": "4BTMSyt5gDkmUrm1ogkaJnRSMukXcXuzxE9Q1eTnv5KooBqdAtpg2FGwrocTGB4GGHBddykCim2XCWnTT2BW6Drh",
  "key32": "Nc2wHKR3vMA3AbRhiG9S9nUZBSQE2dPToWQwJyyQPXSAUgp2FDjQoH2n3YDxj2JXdYF6hwxg6xBcNDvoqup5epR"
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
