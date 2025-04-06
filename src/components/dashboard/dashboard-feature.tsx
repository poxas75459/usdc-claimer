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
    "5YAn3xES63MX1RMCHBC2wGtTrVbGvj556qErTd7RE6N2y1xGesVqCv1GW67Xo9jRcNYbwvxctnMJAsmBUJbpJURw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28qCog6ndJv2jP5dNpbhEjh83zswB2oE6SeTwDSb2yLbtr8bcHqRm5VtuBt76cXjTdeBkgTejrEuMEHmnQcZ5u1S",
  "key1": "2w7fFmwfqXUVvKniXrMs78RcBexmgingP5vqymvQas7jz1NGetGyttjDaWrRmkgqroVPzz8Rh3wrw6jZvpgTSDvL",
  "key2": "2rd6r9tWLbjeSSLmGCqoA8HrKAFXzee1kaenghSqacNHB8Hoad8qNiDEKNKNzSS7r7HSKcQCqqwp5GxUsUrfpiW5",
  "key3": "2ezchCAJ9HCsffkjgKechQs5sS1c6rkbuxpbaDtNPEe7UkCgC71r8mzhFezwk1aWN4nSeL6oyy5vhrJEPefLtTti",
  "key4": "4Ku6NGUGMTqGoeCxQstUJfZpX7HNUMoxd52S444bCaT8r89g8WBnvDLbmtMSoudECpKfNqarZ5397PAhp8dWL11F",
  "key5": "4FVaTGubHT38bQziPnEpGdbXRGoPvKtx4BpEvTYR9M5koZDusjofRHYhJrHGqdQSJ2AYT5fCJz9v6Q4Nyu951QCm",
  "key6": "2LNkNP1BfxLtZPpSpGNnQkEsiMUAmb1sb9wAjYDhetmz62Sbj4yE3sTYvahDfF86FXR8Ho1J18QJ1L5JqLzs1Xi7",
  "key7": "2AuXTbaLn4LMQP72BgpS6RLRmYwkVALjDWW5ku3tseFMFHYn6UUUachMNkNyyjJY4S8tnf9kp95i3zBxvuEHdyrQ",
  "key8": "38VM5GD4wD9yABTJQBskgbTXhPBGypwQJuGjjxervTkWU8PaGDkrE7Jzpg2eZwAzrmZJ52aHmdBEg19mHJN5M5jt",
  "key9": "5kAaR4MDWh4GBF3JWQkoeQNgFx59W9x4EpP2SqJLzA7r44pHN6scxWLWReJnB9VETXRoEh2ZrHydhusq8EEQjZPn",
  "key10": "2PwkXty3hw4ZbV2uQV9nh1sWvBYZUKjiUJchbv2ctKjxB9crq5vCfu8tGQbWGCcSE4XHhecMEGbAGpUbXhc1LpFT",
  "key11": "2EFsEajKVUsDpKnkizp48npgRBkBZnA7W2p5sp1qJj92oBjZ6iTfX4DYAFQNzTigagATDzj1ViGfsv8zQHAVJH6V",
  "key12": "4Gqm55zmppJcsUYQatEKxeeuFu7tMzDxPQrDmK6R2ejLTC3Rr9DSBTiS8siauy1W12JzvxwBH7wtFnvnm24ZpYH2",
  "key13": "Hu6iS3uXezrDUnQBqAHDQbKhNabV5AhdYfPjZS4mKx5ai8cikhwzS3JjUvmhFckm4NbvoX3gnzPe6LM8GoFZzsM",
  "key14": "5oTAxrEoTnCKYXZUMv52EUxm3gULYKZZGwczeHfhHMGD2aUVwvoSipa8ERHEqvct3GxJMmSfYjx5WQTkMv7Kbwkb",
  "key15": "4SYSZyh3xhFy64qyz1MkMFCx89F2dNNfzgjwFH1HbuyrkcPa5GeiiZxorSG4DHV5UfMefuGAPgKTWVCQUmbXLvv8",
  "key16": "2Sap4MdkijMG4venqpvtCLmApEtkWgCbgx9sWY9VwKhStsi2hrhi4DMkVRKmH1MxHwDbKEKFEA7DLyfE4GVxt9n5",
  "key17": "3S6QS6eMnWTCw2xQyfeVPAK5ShjwhVg32HAjFyjxzYfKWeCqTqo8h5xcTh1EbnP1ZjnRfzt1GYNQiu9HVpv2y5hN",
  "key18": "4MKQ3X9dbNGjK41CreWMdL7PQhmU6raFynFtAStAkyZxB8nhME9NvdBTE6KzXTXPefyThSKb33k7NXUqVyakCrkr",
  "key19": "5f21wP1ofAWQgjpZ7rnnbYx3AcRMNX1UgWwTd6MnNKK6QNUx25ysLjkmzUujqoqTyu6utqdfnxZCiHQpXJrMeRsR",
  "key20": "44uT5soQkESopsEjS1Q4hBW4tBPig2jzXWzMnXLsCwwxfBU15JCHYCcfbdYBfUg52hyrfiMc8J4eZGfegBo6i1hL",
  "key21": "37Lk4xSXMMxD7nZMyGJ6NsVCghrKXgtdocUpx9AWJhX2MERTsxDFWwE2RXig3NREgWBemdVN2oB4MJqeCy43nuAC",
  "key22": "4sfdAKbWGWm6pPBeZtEeFcRcQYQobxzXFhXvYMA9m1AzCVrfvxxFjg1MqtbaWjyeHHHhtFTmcxPYmpQm3sJ9WxUr",
  "key23": "3VLXTWRLykBAeo1kXQHDH9YtrCXPVqMgiLGfwokP9fT9CxayEFbTXbL4diBry7T6L2EejfCfMhdWA4tbab71s5ab",
  "key24": "5Pd82mSxk3m6nhonJ6dduzPyMo9XaJrXPMqnzfvfKDM57Kni5oPZ6LFk41C2TgsLAiZYGBpga2dEvC7rX3vJrLxg",
  "key25": "cARF27tW4mZHb7AZspRiwAMYQz16J18TD5kPav1LeEgqqtSBeT3DYaksYiVdTRSRaFvmNb9LzfPGTgrZD6ZfEie",
  "key26": "2c9szidhFSdM5ziryprsHrHwcWqNSpiCWnyLWqvQ5QWJcN4iZ4KyQibg7zmmXjBRWqJeQ51WAjwsmSP6eC4Ao4B8",
  "key27": "4VS6WVydDyZ1Xsu8pt3FdRK2gYcgYVMMhTJbr6FfUgQ1Qdjyn4gtFYTUEP7TQSrDAtydKWpgbLMQwMEmLV4PRk4Y",
  "key28": "5poxRt7cuniBgT9NDE3bb6pARMrHV89bkdvr7QrhD3DxuWC8bzjuo5duy2nKwt9KLAU3HLxq2A3G5CKAoc2kihv8",
  "key29": "2dxyfsddPSUCbnwoa6xnwJTZQD9ZFX1yukgau5nmnUt3bWdFpWmoxAYjKj6zygYxE8FBDTjzdTFa9NzwokCRKRmK",
  "key30": "314VvocbvtsNEdpJVrABtXu7Jrj14dftETge1ZsYmEdUAx6G5Lc9SRBAEFvcTcEYvrb1QCVhC4u2N6NRreXcjQUW",
  "key31": "4aMCDACi6czKgZpukwXn9Y8UYsPbVfJTm3rj4J4TqKaH1UxR17FfBUvjUXttKmBAUR1gdSBb7c32feHGMCpp1jXz",
  "key32": "5GuKjo8xHUCGWUbUszgeAWroUrai7Ax13ZrBvJzFLSpLsEZiCx95ecwa2R62jXFtjnVXtiCGXYDLGyrPzJNcAan8",
  "key33": "4vwdiF63Y9ycpwSxg4zaVNW6sNeJB7i42yQp2kt77jAAXPiBpMXf6x1mawVPC37Ca9aj9L2zeiBxAKHajwsyneEt",
  "key34": "4qjhV2mnAVTmvAGNTLtQvLDwdT8BreaLo2Y74rVsP6ykE4aydGyepJgf5r8P59NNQFFku5Az6krMp6ULcbCP5N7D",
  "key35": "4So5Nodxhaj6czywiiSG9VRoJMUP6WAA6ZpPgi7Kxgk2v68BUFvpzBZaNm3yYdt8Q8CSReZ2Fyh9xr3tLqvL8Jzg",
  "key36": "21tf4iWPkfvrqcDD96xRtPHzCiPTabLXK1JnWYu4XDkNAWH8cQ7PWUX8R6CmCGr6yxoQr5sRPZqsp3sjmFUcZwcD",
  "key37": "3C1yn2YtRq81B9zhaxvYTUt6CVJTzrjad7WoTGVar1EFX8JXg175gTBwjGCb6YY1mLmjkYnFKHenncYopxktRAfw",
  "key38": "3Y7HAbBks7C95kkQ5qQUUfLHQhvwAHyqGKR2WYRePvY5WagJ8R4iaK3T2uFtRJtSwhrYATN7K5aPiBtsUprgv5jV",
  "key39": "e1HYSFBxNgY1J7DmS1hxHVP2XoTD1UBLBepPHeMtvxwSn8WcpFcZRBLTbMBUXLBrFBDhkyzvYkNMNcEqsUEnQFT"
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
