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
    "5YUNfAkuRGh9mfNvhu93SZVs3yikCFy7UMqhmguY5tZuG9ujjRerNQHofkyzWd7D7R2oc7PN6Wzc6ya7qVb2Xk4i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uuJUfWCTcvAY33yvVhoZBPeLHqwFVrCRrZU8TS2yHfeMX9RkbCCy3dN1TRE5TEiqmYxpeUCrrFDEY47rEZUJWmX",
  "key1": "3eRKmHayy52okeTxgyh1ujmeQbSuJTKJbnpRBkhD2uNpDgDNiefFKoXqYe6iMyypKmTP2z9VZ28NQbaua8npxRLf",
  "key2": "2j8YXwcnN58Zz4ExPx1ZMsbpPXrf7kNX3VgktmCqRJmaAEPzX8zUBjwfuXPoWQ2mwKqUba3KogFxu5FW73w99Mvv",
  "key3": "3UAQ73tyQygXnGUqemk4SQq14fFjTVYruoRmoxj4968236Qh6vy4pjtZwMMbrZMPCjAGc4rar26tk1rDLCMLLkS3",
  "key4": "BBf2t5Tuxqu3GQYcDUroTLKxyu4q7gSWSRwADsMgUEbkG8hh6NtTphU4i7qBvv8o7EAcTbcyA49sMczVgcDKGqx",
  "key5": "2GLvdxXZXdr7MXv71KucuxdaQ2VYjf6Lz1hYAVmystorDEhAdYSwM4TjjE4F3JLkb3jjKUizK8rHWHNwKmdP7FWa",
  "key6": "2E855vaSSN3kHtTYoshczFQMju1rck2pSfQw482UR9A4sVzmZ3VJz7mVqs4bv1CX4f7ZWxmdAHc88iPHiEe7E6iz",
  "key7": "zqgDyk8k4DaQ34uHXLQYSYovT4cJ9Z8p8ZUhnJgaaJPhXsTGUhJoDiALA43yZbVEGmbZMAQCdq5zkgVmYQohTHC",
  "key8": "36b5nFXbj8c2U6vD1pA5n8xkwMrCeERFWuHV9ocZMEDYhpCS4BxzoYBSzqtRyGfod6FtsP73nNxDZf3ZdxifU4QQ",
  "key9": "UaNS6nTboFqvqJonjuF5KqGtohPmFQqzPDgxa7fWWgetTay5GWkAxf7UnqygTCGTg9Nw7HfHwAFq9SgSGFrVcae",
  "key10": "67UCDwJt3twivVfJGjrXSB5eacU9PNJMVLfmHdamadbftpPvqaMFxtt6979QWcTCgAMyCHZGD3Kczj1QSxv8VX9U",
  "key11": "7zUWaBVBfmxf8pDcBc5s48r6KDzJZeA8scckp7KkyEqvZiCsh1cPVEPfc5MBGXhJUKLxk9h94bhRJgmHeB1LDEG",
  "key12": "36Z3U2vUpkXdpEGHDy2E3SgDqfVsgbWp9tsxiPvZEiXDyTvqHoYd3TeoqMD5cfLAynDAuTbEifwmvsj7orMomWY8",
  "key13": "5RAszf3eZ76s6aoQj7Y3o9eb8X9KqH81GgXY6umyVTpixkEGeSVbjG3uEvQDRhp8AsGgTu9P6xg4SrMGSwEBKwUK",
  "key14": "3xWdDeLM1DzSRhizNn78gsHhFs3iNTKETZ7YDK24rNyBACwwmEEw1vLBrBo8LJf6cH8JMMHvyvYWqXpwC8CwBufm",
  "key15": "3YjKz9287Um4bhCr4UQj32DxrJCCjVLLYxgXaC2dXkvrihiBqgRgaUUHEJL8H4GRGNEzku4aCbXGdoRdJijYMcTc",
  "key16": "XnqTxy7FcL6tfDjoXhaXGUid7y5bsV77thTT1egorNLBywF4dqWxvbD8j8Hww36UgDMzguD4HvNBPLDRgAd89TC",
  "key17": "PJJoxtYjbHbxjUK7mooGrdE3EnJ2CDNXDqVjtu8CZ8tZgWqR7rcr2B8nhkTxFLkFkRotX8dQEjzsg7yJLKZgo6i",
  "key18": "5X8dNZ4p4vprCJqDHsL29HjxtoFt7MwDwVcnq6YjE5qN79jwgZeyyKMHnn2wuDEjxDrETuFxxWo7bCKJK9zx6MAR",
  "key19": "2Hc7Eu54gSq1GsrDWR2VJ3Z9hav4eaLWesLNL5CjPA4poszZGdxG683eTCbZjS1gMZXuJDaz4LoMufC2zSHEtNC8",
  "key20": "2hvUvDvWtRvQxuyhwhYf63HJnmBckCnCGz3oKLEaN5yoQAW4ewEzJEzeL6Sb9tyh6VMRudnARVhgS23YnLu1ViF6",
  "key21": "H4h5QNjfnhnZG4PHHTjc533ff8tcfoJABQTCK9yWhvUfJWUZ9aoC4EzDUUPAgBmqwwXhGbJXrjFEjb6hecWCz1s",
  "key22": "gooRt25NHfhipq8hUT5jDKith13J6RjPKhEepv2eoNLsBrbP97eJt5NrTvtxc5wZR4SZwXUk1DbpeH9fjg54qqH",
  "key23": "39YsdFXaKKwEmayhaGc4sUwGi1ZRqGw5xRuvUis38RbLRfkQrDtjrdgPmLjNe6aB44iEcUvYbvB7DbUgWrkmYWNT",
  "key24": "51V916h7kTc1WYZJQnZHsJ2in7QTW3jrG6ugg5KYygwKrMswLq3gSedvWWG1QBzZUK7PWNgaKNUYtqvX4QK5Q12v"
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
