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
    "3dSyw8Tr5zN8PxjMDVJxQ19LvxWpiQ6QhnjwUDs3NcwQ6UR7H4KbmhPxqXw4gkHY83p4wBqSGEUFzYVe48Wn7XBU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZgM1h1A6h6MSewAAgurNPqsE7sadsKzthKYERQ2oSgo4XAUcuedGYdTNdxBFDurdKr1WekcrTXEYYLiSzKTEwoG",
  "key1": "5j6bcEfbp4HW75BhHtetkhYaUNeebXemcvF5Jm9yeUCBhhAFFX7YVff3uTxdB2EWju4sBxUm7TJCVi6CSPs81kXj",
  "key2": "5heJtBwizzpHoc2XYwMY3tKQQ25u1XbGwhBPJMFpxBjGZAgBffaBQN7qxv7NWYwhEyfhGd15nqkiG9BmQ88KZx8T",
  "key3": "4EbcExbVZPtnbcN5jaqgFXBi972oscsCAQcm1NmR8csvoq5kywwcvg6rJ8PbydCutKFU3AZpTi9CEMn6HnSkxwSQ",
  "key4": "XrpwpvPvALmYohFuqjoAGMGkMa2xDPNwk4d24ZhmFT3wYnmgfUvLhh4a1exYNvGggQZha2UCUYYQBNEftpzrmNk",
  "key5": "4AZLTVRzcoXL5KSWBqL6JTDSzQnLEMwzANMdGNNFLCMN3cz62oCgm6RdUnkLsMKQqohvaXCzDMvyhHK8jq3JE3kG",
  "key6": "4GBSXkgKbm2X4n9Hrh2G5CHsDNmuZ4tKAdcTwgAMbKL9DdE6SrRMnVL6Ls1eoivP73ia8Av6pTtrArZ3Nt8qhTLb",
  "key7": "2piYLjdfdR4pGrTJPRdMgcV6jR9p5sZ9dBGSja7So7TKPGRnce3khp33Qr1AQbyjhmVmTG3dv2ePD9zn8f2YYMQn",
  "key8": "4gfwJPvGERAFfXCXUQyPoe8DczZEkvZmTYpAeStPjsSuKAenQnt5Ev8FbKPafYrAFqpd5MxxutwCYWUcy7dZXNmM",
  "key9": "4QyEAnfpmmeQQie585UoEArn85JnUsH3EfXnQsjN6qN9zzNa13GQSPxCWKtRY9GVJcS2w7KfV6UcR3snbFjPjT1v",
  "key10": "2nF6177NZGtnEei1BAfGAoR5puGAHXWzjHX4kjTYypPYpdM5KCNkWyWnm8CCRE8bfFcHT3EFvDW3M6JVW3xfY5Q3",
  "key11": "2iUMg4zyfEBjFikTXd11Ai93wEdF4V6eU1SJFkE4ktenJ6SiJgJAVzvNmTZmJ3iAjvjVAC5MdUy8zj3bFikswgnb",
  "key12": "5TV2egiCgoYeRPpK5tV2km2zeuen6m62SKsNsJqdMYfHAqDXU73Q8CMsz27tyF94A9jdBAYEJEDS4Pt39aeMgwEt",
  "key13": "468V6YZVNa6sYPjvgWovLGyxUKHFy7SZ9y7L5m8DmCerxJx8nYG5ek449Prw5jGMmDHFamQFCLHq2uGsqbkLGgX",
  "key14": "Lg9tdbk8VdM8UdMjzEGRYr1K1SZdQWHK5Qkvz1WRAKSUdVz3q3Rw5ESRcuat9trbHJ4zWHwCijDoJGq9HHhg6Mc",
  "key15": "3c3FhDH7Dq71hH7AZJMq6WJQskYP42auaT4S2fLYjGwQZMFqfkqafjt1fxWqRaoLYCKkW2ympSoqhXZsCQZvxa16",
  "key16": "3iigQK43kmddthYQgjVrWUsxfe9ZLtwcZCuTBXF612vshwNGbKiiYK9tJd7DkrfJA3o2t3JPrxDAyUwAgJuxMYyy",
  "key17": "4zYZ3M6daVRTdiALAkdwNgBXmFGFigPF2hhumYEmmPysY96YAi9hU2ULB7yah8NtiunG4Xg2FZQsTyngvxHHHfEc",
  "key18": "5m9sy3wEPw9QBzv4mdf5GoJhz3V9KKZhcYdYwf7pWVuzrk1aBACw85gnBYs6zU7yFHUGetkr9jbsHLVYrPBPmDeU",
  "key19": "3uRmftnQWaZRJacYoGD4ny59Z6CoHdh9t2ocnUhuvQ6PkxmMUFnnnF7wjDWmjw2B5iqYdMzLfgdiYPBLjH9vP7VF",
  "key20": "2ynau8MAC7xtWDJDjyZ8AD4oURVnHszNiZunmfrNCP25kEJ3ESSpBeMBckjieSBu5gcdLYk3rPyarGEWAVWs6EiK",
  "key21": "3EyfX47ShzXEoCuxc4EyzWW3vXovJyvzF2vuYuWoQYC64QHrp5YRDuoxKTEQjjv7kUz8e9knj95in6agmect7FWn",
  "key22": "2g92nGJ6J3fQ7xE8h8Q1sjepaQ3ecssfBkpyHVhdbUCER19HoT44fd571FzwMq6MGaJcAcKpT6yHPRCPfTYZQEj2",
  "key23": "3AcVzH5rW29Ecva4uduccMszKVd6WCaXd7c12vzJe9FgTZXVxEfjskw4gzNwQqP6YnGXMEFtzU6LvhbmLznGjVD7",
  "key24": "2a96KMFsBbVHSpBzBPAjyViWfQ7QkGe9xRMQTr36es7TeBJFMQSiSbHV1ha2r8JWbSUjwfecxBa22qFjDJJVgzcw",
  "key25": "4G2rWWtnECkqc3CXSboERdppqKB3GauZoMhBdG6EWbJJYqymTKyumevjcvhd3HoMTyFTLTnA1j67XjEnRNtu2dXz",
  "key26": "2982rnD2vQhjGDd9NV57ZDQeBpdzVvUJvzNSeQgEWErhw1qHdkAxvg8gbVjzXYSCWeHWqmqxUexPGfcMBUWWNHxZ",
  "key27": "3UMnTEptipDLD2CmtDgjCPhQX9WooKwjQUokTw2deviyKSTQiUWo8z8g2VUw9qTu2JnyxdbfHSMCAKYBCY6SLPPr",
  "key28": "4PYd6N9WefsuQoVoWKqDJLUt4XwTfvMsjLJPeZeGS2H1V5oyhXByfQZ1SLE8m4nnvC3WjQ4eLmG2iVR3L2qXEJj2",
  "key29": "55kVf3dYUMZcrk3jtp6wAk7nU93NSkJifX23E9Fp6V3nAbBG3cvKmmpb1828dYcFzQdGfsqNTeX6WyKDsZzd1DBa"
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
