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
    "5imwpwWpr5r6xfzXQdNcDvAmMNt4PJPAbE54ZrAykjVFAvP9JySWg6AVeedUjNAzLztfx5KNX6CnqXu8MZPZYBmN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xgUcEq2dovjNzgYZD71j4qsATZuUiCFfdsxRxAyDVhu4UCrBuUYUYM5chYGHV1p6xcFPgEJv5ZRm41jdea5AtTo",
  "key1": "ivbm6n8Ch4Mrs4Va5Ji1x4fCws8U5XXNjXivFPuubaRcxUE2RZdRzRUhgAbP4eCCGSi4c4i566tmD8ooooM3E8i",
  "key2": "5FQsNkLGQ5K9EUgSr7mVWXSNCbHvxoTEBux1EN5HMH4PWMpbh9mkX5a7TF2aTKTH6yp4G13Ucaq182EDDnKwJsSb",
  "key3": "3VRraFYcwCw2CihPdU8sdnRMQsX9NGmQHndaVr8t4eQraxW4gsQCRUtm2Nwto2Jny2rEPKkDrEz4Mn1dw7x9XbLN",
  "key4": "EwcUP1zePGnWTnB4pUDUEr77if59TLo9ajwtg8hBM1Qoix5fq15zaYA8BKzzLgkyRLDp98dTfTwBhNysGPfYsBG",
  "key5": "65HMTG68FxRRDPfrANJ2VmfTvevoRsRBZFifNmsrjDtnW8pemfe7585pqcpVtamzFzxmG5R2EynYoT5e4eX9rceW",
  "key6": "5xVeY6WvLigyaWSySWczZsgYrkPfBEdyhTMGByLuEdWontiuA5E9L9Mdgo86PbfLf4YJ7p51TKNLZwCo8SdcmW2w",
  "key7": "2tdpoenwf5Pz4HXy8HdXJPrdA8e5UpYLWrGr8MYcr4A8LRy8CNrdGufFTZsYpWfnRBkWo1wxhF9aEErKnPbXaE6q",
  "key8": "gMEPbXdQ8bfzqJgv3UFuEmx6S3NqVAiWMNAxdi4Yrx1iEwTBojE9jdjGwNMQUiFoXTnpVwRnpohX2trqtZT1bHr",
  "key9": "9FFsGrjjWv45YkC2pz3osTfHcn2icwBhzLGV6Eg6YWqCNunNR5PERDMbJ4PhnC1JrBrB9RMPx8zmhzqkNapiQ61",
  "key10": "mkre2HQ4BNFknwPZ6cKtrTNdgy5RBLFmD4f9ZQJ5WMaCaDEyCj2bM8GRhyiXBHit9u4NCnQY8KUTUc16guxjt6L",
  "key11": "Ni1dfTVkgmykSZyot6ckZvSRq75CmQBuSQVQCp36p71VSBX7CSE5JRrvhF3QXr4uTfUXWSivoF28mgAWN2ng42H",
  "key12": "262753tnQRJS9pyJ3xUgs6DgeEDSBGwAxJswqe7ih6aLzqwquf6nCiWDTUY92rYDBSd4ksnVNUCXa7r211gQzCzK",
  "key13": "3mv9aZC3K5hURq8BLPkyxQuAwkpM6Mn9rXtTHA6kNohEX4bnWjTdCwrSh1oGXFeHoS7LGzKchpKGuPvd2zSJKoJk",
  "key14": "5yuc4SYm6vJA2rM1kN5EvZW4iJiiCp1ZrVivKJCaVVuXHnbmdA5FxS6riTBhH1nrgpbQXxPCmqu1uajwMDNxA51e",
  "key15": "hShXX9JaL2dwHccfwBMopRxBTjVdXN6c8ehqgYhuZt3bwwsVkUpArAxiVLPC5LZvDD8YH8LsY4CzyRZwMtriEV4",
  "key16": "59tDoLvRcrd73Q9mPZzRaMk9WLW2Fo8xQ89Pt3PKyASLub7JU3Cf74z7LPcjSWWUjFv2zNpaSXbc8aLFsNRkZrUZ",
  "key17": "4sVdf1EBTWafLyuwxJMRBWLSFgvoNsY8VzGHk7nLzq3iNWj41h5hcpAA3dPyMdkSaGGJDnM3H8BqNtMPqLP6eZtd",
  "key18": "2cx5vKL8rw1Fj97zwdmmZMtD2updg2mxahBz1getTtkHHpSVRjSTKhqmtaVAEUBWerCJvMjXwySTxmCYDYrTdDWT",
  "key19": "3TCk6WkySGCX5FhhkPfnsSVKLax3w3TUidLiKMFH5tWeiD34srcxWqzuaTi3HLZ48ZqWEZduJ6uxjJWzqhuxMjkM",
  "key20": "3sKj6XEyxTkVJ41vXFYVjkMZrEujHwtQEUhz7AqNnvxw5GZTiZqPoBn6mjtV6qvxnWzNTL9ABppJwkkDF8vTumYo",
  "key21": "3LdBcExffyLcAARzsbccFksBVm6NSGWpXEAuuJBFutLw5WGB1XEdVfoPdW2qtxgSkb7ftyTrarmy5bEoHv4PrnnM",
  "key22": "TazTsfGfJDcprT6mAoonB9GrbnZYWNQeepqvmWM4oBmwMPhxstXB1aGRjkiQewbPopCyM3TQH12XKYbrztSuGGU",
  "key23": "nauREF4KStdDN6k5D2UXTKeFykf9UjaQKfwP7Av8K5S3ZumVbTB3P3n4ofX6LtY2afmZEKghY5QwK8wQZp8BKYo",
  "key24": "ypkxidzmMdBzBgCJTp2mZFQvA42XwGyrhy8is8wjtdk187t581aLbC45PvoZr5tmnYd5nBJTAdMNFvFmNNzMjg2",
  "key25": "2EbRn7qg8BZV9mYNeM1nKwQCGtJPspzLjhJZarFRRqFG1sQ8ujbzs7dERcv1hTiYhw5p8LoL2PinYGbLm7yDdLEx",
  "key26": "wUpYKY82FhSKh6stwaxHREauRGt9Y6Vu5BcvScBAZ1NdaamLDAT6BiHLvy4Nc23byhBd7gahAun89YQ4RDufiHe",
  "key27": "3YWM5dZzMnYcrjgg66mLL7zZ43BYdttQUjPicY2N6eVdpoE1W49oSUiNsCdb8AYnnE2uHbVh5Zz5TmwA7PujX5hy",
  "key28": "4zKtQQVfd5CQXFEfN2ZUT2euW8FduF6MQAW1yFAMc2SDSFtdFU357ZKBfX6QEcrxKtNDh1czeCvC6y7acXsmDnPg",
  "key29": "4VLBE6TLxUYrPzMaB6tTGUjGYKxhpi4g9M3Gos5yj8Q1qTW8UoudEbqbTNnZYc6VN92u6Z739zfRcPQqJTKvHH7N",
  "key30": "283y6kB3oaTfCYZ4vsUnnBmLVoYRiW8GqumaycGv8hLyBFRXEdZgzzP7Bt6z8h3ZHFBRRPz5ZNorprrQGMZrS96H",
  "key31": "47V6mJXg6uujWNUk7tJ7MRn6R8ri4kFHEgwyDE1R85ukogsYtgGPE5KSrk7DntivejGFxaNQcKRR9gAjMJkLi1WP"
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
