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
    "YtdCJLXNttbGxfFWFW6JMqJeBCkoX9oXnnKWgKbuACPeTbsqZ9PsfcXyWgRotwbFCmor2eV8e6PQhbDTLtMFTGL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4z4qcPh8FqaKQe2WacLnEmkxcEoAWDWu8jLKPWN2bnFzcBnjdvxq6W9TuFUvGsYFrjt1aiZDn7NrWWBv4kEe14po",
  "key1": "2PS7KqToCWTz8uxS37Dvf3vhuFt2Z5NVu8m3YxNnGhRx6d9J8kjFeco4w1ZNhXzduyrNffw7AjB6XdebNXSnrWeu",
  "key2": "5ajCYAGMGq1A7VxqjxxrSx33bTmc82iPFKiRkbQ6ztFWJgg383Fxb7qhAM7WMByZdDC8TbNar4BPPxZpFhQw6Xa1",
  "key3": "5ckMwaFWm5neHej4er9HEpgai3pAcJF2VyT5jr1XAU7URofuARwDoARJNbigPP8sJhSSBjwspLmmYZBMMu2hGkrA",
  "key4": "2WmnMMNu7rF6D27saM8ofdPuA8EQVuUcgbDzgJXrKFYKgqYRdZoUgTGSgiSfANLAcPS75cXQBUyyv6cG4pbbeuMV",
  "key5": "5Sp9YG5LSJx2MHEFKFK2tTfRiu5bauxrhufnahFrgMNfmTk4wyTVEFWfKgyb459czngj933kg3F6fcB2c69kRZE",
  "key6": "3tJajzFYe55fMX2Kr6NYmw1yCc9ymMkLdwDMDfARKG9k98mjGNdCqPeC1Gcxd4vAZR6xey9dH2wdD8ape7VfgeNC",
  "key7": "22vJUZ985uUmU4VLhTnNnqR8KXNK7JTZNsoS7yYqrhquZbEhTEPRA2iNKgWAtThgZYiK7mv1cmDYpMHjfpDsVwSL",
  "key8": "59xTGT3J8Z1g6b35ESZBvDgT3KyADQQRBbEVAFajMfQhJCGQWzqg9rZqfg4DDq6HWXDQXQu6NdBGP9WfFLy7JSSb",
  "key9": "2ZB5KXDHmgyPEg38Kf8TrpAiYF9Zo72wpSGD8hiZ4n1kpRfotgS1nD8hYpX8wXTq9qdggbUx1nKeELgRuAffZo2c",
  "key10": "4MN6Ak4pcnTGEEhrJKdNRyotZVHEP4nWuy4BQR8rJ3o7vqwGAhiZNGVMxkGipvEhdP3X5HxGZDzHmVNsuq9MPx9u",
  "key11": "u6GbnZP8HgaetQHGQKcfWH81tUrBoV3q9vVsEbaPyxCwNuttxm83jD61ztpJUR3jTfJf6LtiPZKqXtqu1fHZqq3",
  "key12": "2gqEYvyUQErBaVbxVVHN4ZLrdYnpPMQYsGvCZby8EgPLw7WQebXtbztMLepHvZrLNVGDPhyyV5MLnR9JCWwQjgch",
  "key13": "5xUMVHGZw9UXs654qUsbs3D3bSgzGh1xxug9Btsic93N8KhcAjCZkYxbTRosS3hA27wiYamgT3LrFUWAEuP5xFSA",
  "key14": "5qmDHVT9Es2QhrWi5MA1oQ4S8UvaGFuyeLjdHdt4z1LEsnqhzSZmGF1q2wctJKDrK1Mw22oG4EYGRQPxZznrJyxs",
  "key15": "iaL1AMhhyZvd7wcRtY66czGNqwAWr4rGUo8YG3i43As3egCbhYyFLpkwrsRjp6eZ14W7pkgaZVwbBuQ5EDtLdNE",
  "key16": "4gFLDnajzq5fDpp45Kcx2ycuPgWpFefDhPtCFjhfqAut1kARZ6A2cnmrRfYvN7MhcTeNAUEZ8PE4SVb44ij4VNTA",
  "key17": "5YFjAHpFy9h4LJ3HcTSetWpztdm3o7QjPouPTFZuGAF8XAHe5bNJNbiCYZfoAJkwJRJatSuyQu6GBg8u64NoCwWi",
  "key18": "2gTC73SBecXgvjpEYT8iE7WnZzueRvZ8Q5xn5pD5fNUseWUzRA3xE42hGsNELZ7bM5epZmcLdLixrRBxbZE8jVy1",
  "key19": "5mZiLKL5q6bXuDZhmJTUUr1Nm8DxRH5g4gSDmyP5J5YDuV2dLTGmMsRybxH3Ydv1jM4iUEywa2hYjvcYcvjkLikP",
  "key20": "4GKDvaHMz1JWtFDCwvs47NYPhE4qgtX2f5BveFFvUM7kw5Wzb8mZaUsBZqoFtHd3NR2dSQDnmGpfjYp3BN8wT5H",
  "key21": "4JVBF2dgxzaQjxaQJDYt1YUnUMVcoWNykpHDx45pEC7hJefuRAfsURi8ZgWUgygqTeis7RTURHg3rjCmiFnqvDjG",
  "key22": "4eS9FUKbDcmb7YbKJkPSacZ8GUMBcxkNGmeDmbndDLFHtB7QvfdCasTe1Ua4Vfb1msbLiAMDUKkvuHPLPPEWUnSm",
  "key23": "2pCwhYyTsTUbxemPUVqEJS72hu8TNXV9jemTZMijLVQoqaH7kJJdfiENpaCrCvP3PsdwgTFyq2rkpkivGWg68ZPp",
  "key24": "2VZ4EYy5u4ie3wwQgeVzkmXPi9C8tVWWbgkoF9rjRWbYMJtNJfisVysJSbuqF3kosHubRzj35vU6LssVx8tKVWqY",
  "key25": "48EWfBWnQ6SYEeYbijef7BSqQTYBJd6VJMypvsnxyMKQp4CFAL7zbuAfLCeQe9QgXbhDyM2Axwi69UrwaZaBDc1y",
  "key26": "2GFK4jNiw7y2XyShqKGP5UN1J5w9CnhkhEtzELKzMhBzBy94ghc83vAth7BvQTjA9akJMCkt7Xx7i1UQANy22wTX",
  "key27": "rmjNzp23KfZewUdSgbruvWivvzYyKQqrArjvLsxRp4qB5co1oiutWdiB8HxckXyNUAf274SooRHrY8CNymuH3KP",
  "key28": "2vDPGLwMay4VohfzJVjAZXFMKK9F6r618jGshA3eQSYWxcDjA8xsRxP6SJ4tx7s4iREzuAmDW3nPDAnMbKexfVwy",
  "key29": "2tGiauj2CZcjJj3pbk9oL9XTSTZCFuejFxsahk2r9ZFkYi5o2cEGTG2d1HTgZU1gkiUnN4Gd1eXpjEJUXrzpYFwb",
  "key30": "3qHf8k3aonLb7brErD8Vi5F4h2kWPYmp8zZqzsNyZhcAm2wh3wCJgNmcXXJy5w6FMV2wt949UxjjWhujo7jwJPk8",
  "key31": "3nkuqqreoJ7UXLh4vTV5pxpaGZ1zRofbL71pB14PieYDnPq7BLpsasB78of2d6AQYXtre5aEmQK87MAZVR39kpXW",
  "key32": "a5QjsJHhCy19gxH5cQFohGfq8L9246UVehGy7STe3gewbR6GBDdFDFFg2E6pkh7rKjQXSRPYX79eA5fnAMRaTM4",
  "key33": "4aqTsD8H3MvRJ5qbAuAUNTxzvKCRmeD9Gey7aLewRuAvRxYB1WWhzpvvpQgb1dvoCbo9BDTbT1e9pQh2jy1yjzx4",
  "key34": "4eFvKcvQt1TqMirKDWn36QzC6hFibvoARG4cCwFi2a1mrNHetTwM6RrA1cp3iJu3kMZhPuhgxyBp1M9JQtCYyqRh",
  "key35": "58B81U5rsC3dw6isZCdsywfKXi9BpND1iZ3iGjMXfCeZSV5N9y5aSTfRCL9hSiqiyL6XGcoTNoPVi2oT1YsEKCej",
  "key36": "5BwPAocHtQQa2yTtAWAcML7JRyfZ9JdnEcsLcSougYuF7Uz2uNW1DRnp6dASLLx57HsRWfGGTwNfguW11z5wp8iH",
  "key37": "3yu6kkqV8gnYGHLq287t4dsBq87rXxZifqWfW7UMChKPpZGrCuBEw5SLZBKobNNCzmjcva7tbriZM8SfC8NCqJe1"
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
