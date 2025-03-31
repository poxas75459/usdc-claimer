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
    "4zvKFZJEJFnk24SxEwubqpD1hDBpuDTa4Nssbj2Zj3pi3cGq1pqP3JfR1rQ1Lfp7cnvwJq9vus458RzmL2twyhqm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2w9fkTzhHfzpMuGXKWcB4dNuxjUKhdK7U2rmSQXzVra1w4vNVLtyFd4dfoCKRZEeMRKumYjTMvVD67CNxbrULhLo",
  "key1": "kDTFwad1c5Y9DBoAc36Y79c4359XUk21A47X3XW9d5F375dmPADmG3LtM9aosDdifiTPmy6yj2xrWgs2nmkDnWS",
  "key2": "2129vzdActFQcgz7f7TPrgnE7HPizi5Y4DvUbg9tpMCUoGcdnpp6XTuNhMAFH74wbeYTU8X4tkJKTyoZXPBxt396",
  "key3": "2sG1FQc2EMoD611XFYUwM93QMH7PdeuXrVKzVgu5MhARRhEmyLTSirN98pgaNxB4GQNVdFqyiGnzpCKgAB9Wnv1b",
  "key4": "5Whpb7NCyRt7pYhFkdomDfUCpBWHK9Zq6e1cLAfY1MgGodBa8Y2Aq7az2HDgQKFQoUz87f278h4qrdQdVL6ahEES",
  "key5": "5vDt5e5tgNBaryYN6hHnrLwLProCq5z1YqMQfWAHLVmdhFopWXnVdqKSuczqMExLf8Sk2eBtiZ1qoV6qUgC8t1A3",
  "key6": "5am8RqKnKmHqQ6Ys3E6EFKtoNPXrfEDRwZ7zsXaDa51WJ2VzirSBE1tAgxMPqW6rERjt5M2jxZev1ZrbrSdkpF6J",
  "key7": "3DPvWU6vSahbcn3ce9HCGQZXghv5QVmBkUBodeH8dbiJ3YSyJCZrG1PXxLAPUB8ksfZy1K5AMzwd9MtmufMbbFd3",
  "key8": "27FTHrhWzzNykfbKWiAJFGn5ZfUofyJw24gYZDhSjRWMjiKxcFdwDgF2YY6NEVETwRmTYFMKs9p8kpeJgFkJZnAw",
  "key9": "4tQnttiZpcvhim2HvkBcCqHDHXvnCoMEySqGwjJ5EyTHq4LMAYBausiJnRrxAvumo84qJqeDyRQW2wJMvpRuGMVU",
  "key10": "21YQwfnDXf8Uk8q3973dzjPXL5REBwGVJsbA9NVq4gYiTBtvfKZ13iJpiNwW71gw27Ustif5CSdL66po1H6RK3WK",
  "key11": "2ahjevSp5VgYcqf6rHjajF48nXa6ihFDtu2g9SQr6pPb8XB3fvsxnxg348ayae7F6PRyGThMC85vhWJ8gvUMqoYF",
  "key12": "bmyW3WvDdrgo7GdzXRsCwUZbC7sx9pGH9M9h6oGibkJJyTvCNxNYMWTZA4XyLbyA5rpaSAUYkVWDVp7P55FN11p",
  "key13": "t8osfk4f6GP3x7S88UqYUfV5BBi6fGUzD2SRa7krEAjgmGwFpjJVWooJLsSeVwjKS2fap6hE9HyQd42Sxmv1YNb",
  "key14": "3KE2LfDYwkwXQNqtxVpokBfqfZdQsNr1DG7eQt3K1dmPfN4BgZcTMe6NujkJkUNbVnwZStaa8tvrZEzvgo54U8gf",
  "key15": "4XGQyobG2WZgdhGmcNo43c1PhGX13sWRQZWBNDyTTLrNPYmbT6MsFj4M5vsK1PKhbkRAnUrEEZzXjUcBDkAe6eec",
  "key16": "5PDahjadka6f3dofzE3L3xtAxiUXP86AC9o8BkHKY25eH5VC5rDSctiPrab4ARwEbqzaeZrk8un44bhX75QreNm2",
  "key17": "67haHPmhzxpFbdExM2Cn6y1t8XL9ipxtKrxCEhh7NsQ56CkFxTgZTBvfVME7AKqnvf6X3AysHAW5aTNKAQHSmErS",
  "key18": "Gmj6Y2mNuWYHQYjj1YLwAUe4cdgxCwgVDnm13eg58WEx2otLC5Tivbf2H8gSe7mYjEsRsa1Vwvk9h5WZzfXpFYR",
  "key19": "2BYNT4szM28T3S5Nm4Fb5hYWTdyTTGWw6GWFGXZukMDMD7v7WkAe58Mfse9p2hAt9amUUACJbMMMKpw2RYHDmwkX",
  "key20": "2gssrdKeidyfdmh6RMsjUxyT6VHSQE2KoMkEhARLtxZ4Ji8NeHE8WV9ToD7t1jgUpBV3bsnPKDQUp14MMPLnpkuG",
  "key21": "Pwb6GHP77Lk81wtvAk12z1J7XTKdAy7NNyryWwWMwp2uviEGrhrXE2a8WVdPT3uMESAadnX5sjug8FUML7eWsAW",
  "key22": "dUJ6SF9uhUEFpCDuize2RC2PXswTySr4RTn7vSTqkBuCTB3m1gYAdyqcGNwJxKkAvu7Bg54wZb9gBEoMEnfna1n",
  "key23": "5e4PfJMeYvc2osynSxaeLZMUdbMe8VgyKnTumDaqggYUawLSQ7T9brrgThAPW9vUadrbEze8QDuBe6wKjNcWER2s",
  "key24": "4jfCiFCUVPh8jPqE7ev9UNuNJHPbZnuXkYuj4BmE89uQzT3dhKrPGs1UwnscwdQpVSK4taRxz6LCfkFZLRwr6rhJ",
  "key25": "5WeAJbR3LsxbQpcX2VTMjJGhuCpXKm7zRA5wKhroS3MsTTcdw47bdkz4SHZjRXpeWybqLQe8KE9pReL8CQ138me3",
  "key26": "2WnhhJh5yCFJmqU7i2FNyxTJSmSsDiDEw7mBpeC2jkX4nfLB8c7kR7o87iFKpUsfoRBTG5XcXd6QBR5dDVhsfArf",
  "key27": "46Y7duGwsCBRjz6ekx68qfkJzJbAqk34RXjVyec6DN8CvtvskuHujBQTKiak9ZpPKTD2XxQsFfTaFabex8m7coST",
  "key28": "2N5wWSYuEC46HVrybLAyyH4Ss4irHJ5Q4RwwkxJiwo1YC91LsGEDTvRdWot6uma6v1xgiHZKsLgZPDv3L2GncHq1",
  "key29": "67q7cWJyELSUDp19Pa4KKyW8PdiDAZoccdNVTdfqXLxTEpQKdCgtCyfepcQvhrDt6kN8yZUa6smbja2SGH8ADYXt",
  "key30": "2d2CXpF978MCiE5Z9rZ53RacCWPNCj1phh4d9xhStg7A4qjnexHwoV2iFzpmcegrifiRCsND1xaW1hxBDa9qRnr3"
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
