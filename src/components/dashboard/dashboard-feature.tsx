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
    "xcn9fgQBVaZtoYZ969b8Bhm5Ej1QkJbwKEAJoJN7KmiwZeu4LGSUpFUhBU9gAA6F4JB6mw7EFDq2yjmbmLiTyz5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wDUyham25RZ788XBD3eQQFbLca8sxXfHQt1PyuaJZpacZLfA5vkT7ySZYVTWo2WyBmYq2JBep3J8xYjXhmQM7pa",
  "key1": "YqrJGerHZbvhinhkgMTZzZ3Hk5Mcizxpq58EDuo6c64GFLbKakuAj3n6GSc2zaoqsMNYSt4yc2EEehttfCnZ5La",
  "key2": "4MmirJxqEBU2csYxLqR1yMWnJSg6sTCHWHfvwLwaKJGZ4C5C9SL7KTLih7PWz9TxsYukjQfngzVXqNEMVK1QbqJW",
  "key3": "2Uhx1nu3YcXEcQMNjNzfK3awZv4NahQ8YZCuWFaznMhs6ApAvHo1XeLCV8nUrjTKEC4ZcVrZGU8zgS7CodHDBDXK",
  "key4": "46ARtZ9cxnPEohCfeQMWTaxLn4nKMdqJepGsQUFBFGea9HgqLjaTeVyPca6nbjS3L8iPeAGJPo3EtVuBd8NYg2oE",
  "key5": "2kMk1igs2BTKzvvxv2wf7mFo1ty9p3zjL7Y6mibsviu3J6fJXh8wU3XhebYGh1LzMZsQrjPu1EYEBrVmCq29C62U",
  "key6": "52LpdPjusJ5JrEPNwuu2HoGyP3ZTAG3ejYtCZ6WKR7kZF8W19L8ccuXf4oi3GR3yPYmPypZdMaCdaWXZc4VCFZRn",
  "key7": "Qwtjc5FTc71cFSzMHE38RXp7fe3GJne8REKyap7gooQWYzB4g4pd9aTqMxEQujEZiWLzJsWHM7e2Beac3y48tvS",
  "key8": "5diSS4mcv1rX1gvAWcHoyHQbmyMQysYz3CmEqmSfunyGUfwq6dN2383jFXWarpzfJa15oWg3MRCw3bsBrzVjeYjL",
  "key9": "2raumkWm6ste7k9SDB2YUnwaDJqERytkwuyKtF5KKMjjXaCfqYWMVCr33jG6qJQyyYMGynXZjQvQQUyiiYLkmtgX",
  "key10": "48sM2SGijNCXkC1XUYSCsVENtDDwoVGcuTStgdRwkwHvZwZTNhNmGwG9u7WMsM98EZEeeEjUj3CNg3RQhZtsatWn",
  "key11": "3Jg3Zhy5WGvpW5nJiDRBXhNvgPaKFcvqsQAEmNViX143DtEJqHHrrAJjQ3kCSoDhW4LaHzGKsun2JTKh1DVGoPm6",
  "key12": "KiReAR8XzvGf778NtZxtsiQpzr9bbedpWqKuYEdYejtMzVHdQ3jB5yVNnVkBWUeuCr7B6WdMszsthGSaTvRNj7D",
  "key13": "XE2DUUqbb4m3J3AUtNnETJqFM6Dnd9VjiniFHe7vzouUA2kLCbUC6zeivz5ekQBeDtYP4uMYty9rx6ZdWtiQy7s",
  "key14": "4wGrQgup5Z2BPC6Yu5S8TwmjCAZqksBJ6pAzhswE3Kz82CcRwoUrTiwmx8KQaq18ii28EjESJ361UXeLYtmBheGw",
  "key15": "p64Na2y4keSt91Z3L9dDqPLMMnci1oJ5yAUxRLWJsfZ2FjjxGmEXESxKTjzGKWXcJ3n8xUJL6LWtgSQQSPByTiZ",
  "key16": "8ryui4YpdzrgqWBfumFEmWBXaPu9ZhgfKyVQNGe8yzvyKnoXR7VMzgHxwSncn4Z8m5vBVSn6634erAuiFmQJ8XF",
  "key17": "dkXKNhWEAVeRzvxMCBDkQ2qq8F2y4FBdBL9kwbURnwrimKskrVBvyuKbhQ1MePNiyYYypvyNzwXewYrt99JA7UM",
  "key18": "2DXAiSiNvwQ2uEaRk1ePgi2ktqrLEWVbwZ5EjEi89AxkVRZV6YVKws7KG58tk8Gqbg1pSXC7ae7eKFvGQNLukzFQ",
  "key19": "4UvJDXTpEC9NsxEh3RmMvUAjoYqxCkZUrUMNfLRsRuX3w3NPcmqA43YCeWMiWwQKr7TyFgBbDEbYSsQBvgboz8y9",
  "key20": "eY46KjTC1yVvJgTsFpNqaG82gZ3z1J44yjTxiAy8K2BkNgenDW6PGk4ZWc13KhHUcTr5LK4kAmyPYczTZhNgGNn",
  "key21": "3jobt7PTKG14pqT5PbACkKhQJiPxgc9R3HSUkmfPgCmcd92u449EJY779qHsyokhWTxSLntaGi6u7iaj8cVUYCR4",
  "key22": "4ezbwdTQH6iA2gmKKDnADEiPhx85HcSdMAG7kN5Ugsou56NjDTaoBjrpd4Ws5MJVh4domN886xtjGFmLAQfSXiUT",
  "key23": "3xatLByNfMrWbNwpePrU2sBe4xzRgwDeXtLLYa7a9LipQDHM549fhWjsPo2FPsAsR2RomzSFKsiV74KUiqEqoypo",
  "key24": "3s3uS5TbTtDxfmB3LECMzqLsmRQvtt3MHZgXXgot6BC6TkTvHhAKKN5Dn5ocq85L98PxhQMMC9UuViyn4hHRPoVb",
  "key25": "BYns5LuCqe97hkKrEjYKi9uK57moDMEEYZnfKpxihYdcxPSVTXwJFohCzpDbkUddkCsuEgJbvU6WtfGzd3LH16S",
  "key26": "65kaaQgfX9vv9s98skpyAWQi3PaVz718jdpn2z1t84gTmQNyFTmihensperozs4qk9FkrAZ3watLVgcXdartpZFF",
  "key27": "TM9BaiiKawgdvZFSpDqJyqTg7u4F6UvgdgKtAdMQZxKRSnpAHyMKMJKCu9vGzLqMzRE1HUzWhStxm3DHXZqsAWA",
  "key28": "2F85dqW6Rm8bvAvsjfavQRnnCmaH95MjY6q5JFyjToSKWVM2aScyPDbp4sqgAJCD8toHTXBY3xmpyfAhF7oTmSTk",
  "key29": "43wGxg6mjKxLAHNMpVxwf3Go4mZkcmCjcAY9ZJQyJ1kVbtxnEQPxKXu3j4XW7qhp2iVx1LFAUxa2yrXcrHtsgyNi",
  "key30": "5JHbi3ER4wmntBvsM9V3uSKZyPvAnZJ53GDzKw1r2kAqjSVDFBFuGftaRjcNZTDQw2Vt1RLQmtMqZiPqapyhLoNT",
  "key31": "2tG6CkmHpciG7cTB1FkaJGmL6oa3UjDhZczYRabahokC5K1vXDcTARZusvipaHBz278diaPgrpBhH2kU9uJHznGC",
  "key32": "YseQmYtRn3YyRCZM65NVCKw7CQ6DnpU6BDt4RzMxuWdXvnVQmtj928RPYXqsi7xykhaZrsugtcsTsVMCinUMiLN"
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
