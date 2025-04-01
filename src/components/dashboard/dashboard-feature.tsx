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
    "2izrzPau8ckVrF5F2vSzGGUhrqFJ5SEBpnuLzNkYEAHctykT2YwShVnhLXyWMtUMN5hBPPCPdk8AbLYY1NwgDmMG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4x8chifNxi1CnMiUFGAM5PKec7MaVvGL1pBbkeQYC1tj3ynu3NwxdX4FzH7hYZ3qapsgYXc8FKo2Q3DWttHM3564",
  "key1": "rYnaiDAtqxNeYABWBVTRCwUuguSxt1n14FULJcUvpYxdw8ZmCYAG5skBTH1SkLWfkWNUNWB4BC2xEtLmb536FnK",
  "key2": "2r7RiFA6UyyLbhke4zcqZu5s5L6CPeDHYCxwUPc9zKeqtzL9E3qogdpJwQ7UYQRqQtoNjUdx4wTUigsmaVf18GnX",
  "key3": "67L1AcpPhSLBgMAdknmbVkWBqWuE4bT79iBQZZtVdecn5MnmZ3vdC1bPLz2fzGVFNHoHyt5Na3zKDqjoZB4x8Tbz",
  "key4": "4hQMSxh98U1BJjiYdrc7VM9mCsg3LH6xB3BrCYx1pW9hQLMBANwNFuqzDNS3QdBpY7LBQuvZdy9yYsN5s3369Y8R",
  "key5": "GQp4UVXzDPMwHRdx7MaG9YP7eLVT5hJwv2nAisoQoLS2RwCHT8EZL4tUhUMovv8RG9gFdzvh36EbucFCX8HjDKk",
  "key6": "2UGcWz7PqnfGueP1j7PrMVLjMYZbHR6p3bb2FFzv1nY3XTgsvns1GwY43BL3qjUQAzoZG2JSZqgvh88FZrQ93kA5",
  "key7": "rpeY4qssdc359cuYUWDdw7KABvBYxERVXqUvvqkU4y3Vf9FBsjkYYHJMbvkMdcfvc7Zn5zBkq3GKggzguNZSDZE",
  "key8": "5959589AqNghSVXwLycYavFuhZt12VWDAN6T3Rdv8ZRRcwtUrtTUkbq9H7Rbt6xWRfNbrUp4o9efMuDmAusjctLR",
  "key9": "2gdt8M7FBTFvuohQWdZhVTUwvzdZSMuoa6s89XWoeWbP8UJ7da91RR6pB4Y2d7hxT6g4sz4Sw47T1vWqYKYjSMjs",
  "key10": "PL5nRs3tGuCSDGZ738pyNLLe9z3DSAytXNXz8GH7PiMR2GvAsM32GL9tvRAsuoRVzFVySRqiercrgcYzNtcQDoo",
  "key11": "2955yXfkm5CCvMc7kJDqfL793p4XtZJVGNzWrMsS69SnxpNzaq8hXhdSkprK9zTcxe3AtjozM2BNJSzruXwZXZyf",
  "key12": "3Ehuo8iJN2j1swAzBkr8ZbRux6m2xjZREtE7wGG4PufBY1cjdFQGnhqX4FuxkKzJFUoGobGpNwGJfmPWxDyyNKvb",
  "key13": "3ndWn32KQGEptd9gfSS7i2t7rGPf7XHgadeJAXJ3vBKCfB4ykSQoQWWuS8PPZCrdiHMZEYhi1sPBPXbW8aXRZZ9X",
  "key14": "5cPk2mA11rT1eZsbLXr3buexGi81yQrfZv1rhNyvXmf6zXrk5HLNoa2foRq3fRiEavHyFhLfh5R4zoiR7w5Djpmr",
  "key15": "3Jzdjwp4CXsRZHBKrYMjhGCDN6i7euULNXJyLujGtcG1LU7GQD2owdvf3YFqPSKZCfbn5jCcxgdeFry6Cftna7Lo",
  "key16": "5YcUdcXmJbBX5pFQCJXpvNwdE91AzVABEMt8Qbr24reDyiBUBPnSX2TkUpucBhbm1j6QGvfJ4sPoZ2mjG23c4t7r",
  "key17": "KA7GdfXFi3d2wUwbahz8429TtjJhpWDfvvHb5cvW4REDzrp4kuK4v5f8LM92VyQhTXtXWZi1WG8YngaRAPgr1jt",
  "key18": "7x5A79f6M4QiiZN3t4RQX9dym1ZSWNRGBFuNwdYJL3azBrWwEKF9grDk51nY6sW8bh55YPXgW8vt5p3z9bbbhAS",
  "key19": "2QNi1LBGNUph6AXkWQgEnRkKuzEctt1MqCBWASA73PyCPkk8Lw97AhmFGHxJ7eyxhtL7pKFbCAdYVnmXknp5UPs4",
  "key20": "64Lv8H9m68EqFaKzBXo73ySou4FMSWvRErza6FCarTAs2ymsW9sV9GijRKBEgHsKrdGcVN6zUPHK9sSMEP1Da7xU",
  "key21": "fW8VLoMtYDASZqWcc6GR1buZoxwbp8oL6i8uzvNyXYkdavXFXbMzJQKhv7T3Js4KS7BWKia1kGnWoYW5RnKZJoP",
  "key22": "5Ut39x1BGTFqhAZwVG69vYs5Cx4CBa3bxh3FPPEDJuoFE2WyouwoeMxJtJFRpPWwTYojdXRwwo3KZxccFFxe7w5M",
  "key23": "uN2HW1RHiXbgHSCXwfJ6JFqziXu2jLUvzSrDXqbjPk9T8YEzmjT4MwxW26UM1munupmRy3dTgVG3LjzBduPxixb",
  "key24": "2FWNnkvpPrRKAPX8BJ27KEtugaoqWUdXng6BcMheP6jCs4C2oTZe2RKG5V5jvWg2Ah7GQhHx3cKgMfxRBKBdTxU1",
  "key25": "4vXmkSKaV3qNURfavyiFh9r2PDfC5KGiWB4aVd5HWzTy74V6yJuaWy7w8yLtbYFNqW8yhDxdcgoMZ1wuYhtCxhD",
  "key26": "3vsbLebEEKYWim3T11arX9qqvjLQqvu9xv1yB2MAQE5PXvaxJkDmBnUdRpShJWvcqjvxDACSgQ8DSfRYy8LNuPny",
  "key27": "2HDzucrEmN9Frue7E6fECmk4tHrC3fs8ZH88MCUBW5Ze4YK3ZPHe5nKxca2CWAb8D95q5bjdXREZcuFjcJG7sfZt",
  "key28": "3j4EpBR8u4yfw4N2L2Uqi1wiua5sJmA7vpykU6gpPJnJBiZc5gU7ibDcfc1yh5cqmFykU7A1L8gunGUdN6G2wfM5",
  "key29": "3JCe4Nw6sUhdEWkxHropGnirmV7QS1qFH4ZuEcm8MLYaLKtSkrPps4qJzhA7MjEH1mEY47QFJQhUtXTcNQyDe9Ph",
  "key30": "2q3hvXa1iE4cy3WVWXK69ZKjdDHGYRVXi3bpPGXV9NV64MqihwWyzyMSF1xeqXUg7UtvAL4ZCRPbcqg3XrVe48j4",
  "key31": "5moibbU6FhPPivxTAbMbEd4vQi8niLa1tyjAZEzo8GjujVTo1ijcViq9hJgpwfnbS8riGVnJhkMhfDhmrfFSMAQy",
  "key32": "2n6hd4LuKNVm3AndxYSEVmXiTFkQpmqBTurg349d2BwMuFgzBcuJrqvREUdzWLS5qpX1wPsgMjZ5LoLntKD4yoUe"
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
