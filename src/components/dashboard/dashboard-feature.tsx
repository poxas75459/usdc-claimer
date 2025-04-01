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
    "3oCNc2FFP1otPkbYTy3ntoonfngwgAHqv4L5nxCBnvAswNDV6Fv5k4uK8P4prUHsyAcSeXSitMQiCofzjX978mUK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Q4QfGbJdDMN7rAPjP27jui7axNS3eeFUaGLDmF6tQzwwZGHXDWzNFZDYhNsvUNwvPcsgotndtFyj2fUTT8rg5Sv",
  "key1": "5oF749h6L7CCBC6s2UvTgzQfGFKWvQC1ytq3eXQWzuhPVpXN6i7EV6Umy97eRmJm2Kcskpp8wBN32oP42Qrmvuam",
  "key2": "3s5GGb1q4NVgYbWXhSMbeavgG3UYWSFUD7QRGuUpCT6Z1wYQ8mZBcQphp71TtAZdZRHLj7KgQywDoUxvJr1261Qm",
  "key3": "3NDDwRQztBW2fw2pBvbMYQwN2c7dDsZju6oJe98PsWP3hbmR6wuvf8Q1yHr51dgwe3yTqp43Yt8axSDf24chuPoW",
  "key4": "47caic8z1J7UDfV31ziDdvFVsvWvkspYWrCkpNBA94nVWtnuCbkQzpP5EczdfBqW9vzX4YC5VfHswLgg9ERPoxEd",
  "key5": "mt4vXe8A1RYi15RE2NV8LDs4TfgsmVsTqqaKfsXeKpjBiAo2KwB9hZoT2kqVG5j4YbXKbv3DAXAHn26jgmCssCL",
  "key6": "33LQCzi9WRAxHmMaLDzJoWVtVanp26Ks7RSYx5V1eGpey6FKjoTNBALd6nbXwzLEGQu9qNKxbDMqXPmhNSRyxh9N",
  "key7": "5kbBNCsbWhiLcJWvThGXYDeCQGXQSzxSauDJepAbmQo63HUPtb3hWr18BjmPwmwvSW4di3mE9uDMc7JZQBknivDX",
  "key8": "2YViid9hQuMYSB3S4b4pDL7Y5Z6mbhKs3uTq6esp9vWARXMnepZapWA3AmrxVTtM1anErtdmkysDhR9oBvC8zodw",
  "key9": "3yABjrxHe3r1SnLsjAPGw9im56BqunMGCs8tGnbgMCW1Z67hHy7fNmWwprkbRNmEDBAqj6f6sqjZYBbraNmjVUXH",
  "key10": "xdW2uZjeh5xhiJ3UrT9VfyymTcnBHpdkKf5PdzHdM1UvDG1paepdP4MfDsiqrr1rs1A7g2zpe2g2bJvpoYUTHMg",
  "key11": "4Jp5VezUWNVwpKfk7HdaCcVUPDmkbazv5SKdM6RiEkWKFXtv3HABc5B3se8wxBAzCgj5pF664eudFhnnpUktKmUs",
  "key12": "2c6XE5kk1uMKWpXyFqCJSnH41FKaA1jLvSVBWK4vd14hUeuPKUPCSEmxKQDzpdLzHBWBD456X5RgKfoKHstiaAsk",
  "key13": "3o3BDyU9couNHHRECS7i8hXZd5yiYtwPE5hHJvZMf7ctruCXXgF92Q9dVGE3zjjcGFxkKG7EG9JkJ6D63aJoN3LU",
  "key14": "95cPCh9cxpyZ9JiHBs33ebnxd2jTHt192xkk9HgS3cTACS1YW1Zy4oHJYHnqtH2vJqFpk6VpV4BNCAwLLeenGq8",
  "key15": "45yf7FwqwhhA9x6fANyyUZhbM1Y1QBZ7ctngAEAkP7jcWDeicXg8mPhpW8VrJEdQo1fBbxsgMnHmxt18fq2BQ1co",
  "key16": "5ALyVA8TxjkqqfmxdfqyNQb3yLzzSrFjBX7TNUYprm9CxZxBvndBCujod7qpEV8xCWAwWMf44siQyJAyGShgJMY6",
  "key17": "2QccXGnjqMaFLyrMtpD95TQ3PPKVfgHFTELkhCE8Ntyw2bCGwfwrLebtCJ4E4ojEXXXsai55YENgPCWVQJwm92bH",
  "key18": "4bGhAKFrWUUyurfR9FHQ6Kci4F5AqrYBhmM8GQMBs4QG31mWp9KNzu6LmWLh4ZYnrZ5P3FwZRBHcq6ey7kbTfpHv",
  "key19": "2FhhkWr5FqBhx7UkCGHKGTdDFLKCYjZtHA1MKUQw5dRHJmhyPHccLWmvTiHkzTxqdX4UHU7XoVepne1QYwL6WEmV",
  "key20": "2WmpquEkzsV8m26yciWnBmuB8q29S4kD7sccjygKDmxmRZCA6WiXSKbYkjubfWUUeu4v1fq2ZBVPmuNUGuDCiH5N",
  "key21": "4VbRGR862pUiPEpzJrkr3gva1vdyE6yhodCeMxMbPP9shcqM9wxv1kFiVufdwsswj2bsJq8Gfn73M7vLHeS7hkZz",
  "key22": "3Ad7TogmDNX8BZH7xEbvWCnmjGnNNbBy9ZGVHdUq4mxfzGJBJXCGLRDLiD2MifEdKVa3JvVRUszb1ztsMvHPN73t",
  "key23": "5MKNqhnyWqB9SFUjTAb6BmKVfuzkT46t48aJaR3gsgYtPhxTUxzgike9oz5bYQTrcGLK1wRT31qS16WR5Ch1Zfw1",
  "key24": "5SUsTwavXWqVMAw1fHqarUd8ZHApLMMfhT7EtFRKidbswG88RRGFevV5g9gVdy1d1ZXCKfDFpiDii4S8CEryjdd2",
  "key25": "BiozMjjGgxBMPpKEfyPcZNspjNNuYdqASZDef8VK1jhbgfmKgMFgVXcTeufarJS4dNNzXtagQqguVL4r7hHFVa6",
  "key26": "x1Djr8uSdKNa9cZMuEQbr6EczUSRpkVYvKyVwQZYCai9Yav7AptZs2S5rpVKZ5MQEXWtQoiVjwDrAms3b1vhVVP",
  "key27": "5JyoHmD9jgTULqbW4kxyJWRc293Xj9zScgaXNDnTx2WvejgTTsWPV1EMmSdd3SH63TnntJEKxMdqUjPavqew9gWF",
  "key28": "2SBhv6gWQnkpzDay318dhSTct2NLaEPjvMd7iPRRFPqPM9ek3fw1fQcPQWGBjYZe3CFA1UTgBWK7KLv6piM4CQWv",
  "key29": "V5niHWZZdNp5rfnmxAYF4QNb4mVE7YUwbMY8MJGDvJnFqCQBnPB1yoyHHGBmLFsdyJuhKSCpEucsk4rW89zx77i"
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
