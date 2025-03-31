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
    "5CAjvo9jVV9UmKRy6vhSaJT2ATgLaokD2AEQdJVHotE9ASUxakrNisydtiX3kJty9PBkgpvvtx929Gg1jK9w3aru"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bDRbJvp1Fh1WnbbfmSsq65oLP8pxKLMc5xXkeyuL2fFywAhiCS9i8ZXAis7UFwyGxdxDFCQTGEdV8bCZ5VA9Z7V",
  "key1": "2mqtq2YPgQqvUDENbD3fRpzj1x3PMZ3i23QZNBAs2cDXq2Ef9pgHtDwgqymGEe5oRkTgXUssZhtDEDH5gv99Dzf9",
  "key2": "4qLrSrYCFgDrmkidpyeMmffMyGU2CzfGzbKQ4BAXqZRBtjXyZGTMkuz4kcRZL6ssFqjhs7XqGaKYiSh9SjFpYDDe",
  "key3": "3x4gmbVP49Q9WMakcmaoJcF5omaFt1fU88ENK9gXkXFDJLoUnKr5HmMrPQWbBSVA39W8TKLpksifUN3gDAc3qHYu",
  "key4": "44WL93Wg2ku6gnM2Y3D1vtaVfmNQvsyex79dBM2WF3dMWGSeicLycEnKwEE2ndJ9yePweEVj4voBVq7ZcwuPE5cx",
  "key5": "4xCJE7ncFiBNUzjASbGtwtmi1nNs65N9JS1WqoQevsf1iY2KZtKJodZw8BAVsi12drcZGhtRjjffmkJymJTXj8P1",
  "key6": "3z7zDZw4ZZqS1m6YRmSdrrHXZmKde1fburPmNk3LxtMxYUw9LzRx2unAYW9yNhEz5D7A9BX3uxs3RtFpy82VUfQ8",
  "key7": "4nCwsMnBWHv7k5FvpLTnsb7fDuUsN8Q1viz39yBzryfJrPPicJoQeMoLzAasTPgbabf2Hza2fU5QjH41zaERLdqd",
  "key8": "JMd5ogButJ7GGX2WpKkKeofTpFUSNGh96myiaByhCaapKRootbozwA2M1AW4uHE8wtvmFoDeHGhHMFJShonjk8Q",
  "key9": "3eqkjbNCFcKXYwvNeLUeuGPEZxdKzr9yRi4reJUGkbTNVwYS5ScsvUSHrymtJ7mTSFgVjdqbgtkvZ7DqUJp1qDtj",
  "key10": "5MpsFsfM3vjWkySoM3bisHLy4kVT5SvgmsuXduTCo9mJ5j1VbdEqLfsdkoDLS63eMwAugEfoAZxx1QV31ZGfG2MB",
  "key11": "4vztEGRP1tsr4LfU9mip95GjirV28J1oFn8G7u38FiDt1sM2aQjBokSmuNtM3d3WNssQsHJGpZkfPDicR9WYnTEq",
  "key12": "2sFDzodCs4mdyFpQuiUDmZbWQnGwLFxku3qnwWNkaSBCvT4TVdGM8sV5T59aLYMLoz71g3BRNRg2UVfaTrF7KVKf",
  "key13": "2qc1x4KFC3U9rWasTv8euGhBNJaeooHmYz6rvTtQvFaG6tWLrVq1bjWFfc7FYdsqj434WYobghuLAVDmw662EZPa",
  "key14": "3GquMTTM34qdSopLs9XdNoAqJK73AEmdA8VBD8wDG7FDHXqVtq6NmBLHzdN9RE1t4xw2JZxWBHRfpP6d39q7Jzsq",
  "key15": "38ekew7GPQG1BUEx7vzCbt8bTsFZF4Ed6aJkqZJtdH2nQpVaD6728e5YxqHyZGLX8Foh3PQWoxBaHxXmk6Z6ggko",
  "key16": "5PfESYM3NR6Zi7fQdPqrbNtXkQ7cfUqWCa8kbbb7AoPRhQRgPMoEbFKJ16RfmQTN3TPinVTSqdDWqhJYStrTHG4s",
  "key17": "5i77Ltwgu3ieKNkYpbuXqWFaDSFHbME3W8TjDVjAqWtiznvkk5yJGtVd9zfaRxW6iePVcpFspN2i6JgaqJHRHvqh",
  "key18": "QRzJbkFz42nCBNuTmTSoPqXtYb72XmrxTqyZLXhqnDuQFsDJvCibDqU4y5CWDjsWLNX6RfC83Pd3qbvUHSycE8K",
  "key19": "5ioBriCaepqZ1f2HCxMYY79aEnTXL3j9rU9zYtwaT6Kbfe4rnGLsMFV774K8zT7SXwiwY8Jg6usXDGLZ6C2gFGNg",
  "key20": "4K85Y8UAz2yjYzkzoPNynHjgwsheRmxddXt2itSksFaRT5WvjsJ6maLPD6z2pLkWdFkHsgjWVprTkSCmeGP49wio",
  "key21": "JEH9YSmxPaJfKS5b7r899JDuPcavSduycKRKAbgfRDh6MdPpNv96Pe1SU2G5PihrUDR5m9UjtKqyUip323SPqE3",
  "key22": "3B8chfJ4HkcSqihUyU5SwhqpXFhjfJQ7bJEWtbPhAYgcHL8Xssiyh11Cp9wfGP99vbEZBobmmMMmUaQWz2TmKhiq",
  "key23": "3iFk2nLbnFckKDHUm4hKDSUpdgQrRGAnW3BrkwTAJdeS1uQ9gZPifoJPLXthFY553ddAyJGDxCy7rJyBVqtaS1JP",
  "key24": "2BFgr1TUxuQTk7VU7CuGtDWYEo3Lz7rAEZrTf2cQgfAZjXLwvfztgbGj6pMJNiG9RenUnVXQuj5GSDhqn6x6SFnC",
  "key25": "4s5poXSPd1oRekyXF8cMFEj34XwMUEnoDLqxWLCwEBG7UnmbqXs2pcJ4BhW9fHepE9gjgBKqEpoy3EhqF7xETeEN",
  "key26": "2G6sSENqQThacuRNH6bk3oXwPEtJXaBYVUR4B5sdYLGc3dmjjLuLd7VXRJjG4nLrKeZxidge6RvS9wqEu3YdKZfV",
  "key27": "5Yw7PLrYuj83SEcHda75fPNS89LheUdAfz8kPDSmgkdYSvrUCSL7yDutiMAqgaAd7wpVbuSeBsQaYny4rKwREKUo",
  "key28": "5jtnh9XStye6y2K3AvEKA7tJJoZSgn93US19QUs4WUMAZ45DYqEFDar9HNoeV2SUv6nv4XecmdjiV6j2oRmVN4mV",
  "key29": "3Yh86tebbabtHEeWt7YSPdy7eght7RUjHDs3ZpP2oZdTKGRkU7RbwDQu7jSfrGbN6Jd81NQZSEzYKYvtWp2iSe73"
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
