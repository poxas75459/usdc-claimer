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
    "3xNRKLntHMvCf6ag9J3tzDY4QSHs3Dd9gFC4Ff4Ah2RDMFXgtrWy6BUiC8KpH8GPFav6WazMJ88SrpCWVnnvyqmf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "atuoRdeanC8aPGat8udNRcbQDvWpifsQPFn3CrZo4brSNJdG5aMhasmv7PMFxm7xmoLRxuNN8xaSY4xmWC546Jf",
  "key1": "2iFJvNhFgPBNpRndkNaTi5wErjHNyroikgxW4DNZtFohahVtMYyiqpsGv7q6Sf6aPcA4mLHu4Q7JtKGdyhF8MFJm",
  "key2": "2fMRhmKjDZWi9izzGwJXuHmu2uaGLH87874TmnEVmxGnKRJgCVbyNFMKZ33NFR75L2LPmMMZi5NgSXGMpA3xV3s9",
  "key3": "2rN5afXBdAKdqxJ7jRWyU4fk9ksReCKsPxL9dSbFNhLt99WjUgWHGnP1V1m3fEh1wUFH3BrX8Ri9dPPkquEesX3i",
  "key4": "2N9j5k5fXd9uvwTEnCAhfLMHgZXr4Ky45ZsbUBbwPbdcMSkP56DcyuEVgQuwJVNhL9AR7H7V2KN1zDZGtqqWmpp",
  "key5": "32zBThZULMTnEFa2G23SAcFyBhTyMfZ6QGBDtsWcDM5jfr544XrxPT2t5kUE6dq8MC8eR8qGjP25KB39S8SFQMb8",
  "key6": "5qKk7mjtxh72Tu5mCZ6EKbL2gTQN6AHtaD1HCT8uLsvCquBWBMAXFn2dbXt26gxvgMxZwGEjjrrLW9EBfcetqLhq",
  "key7": "2KKsAwYije5z9VDt1xTkzYcKeiE9DitY89VCirvUu4j81BB3FhLysCR2gHqrSfsgH1JkpGAgdJETS1EKpRxLP6j4",
  "key8": "3kXydSEb6Hc1JL3v1A3FXa6cRGShqbwwoi5ikMJsh6NMDFC2xSdEc9d6GyLTkNTYogXnyWKdsYHpCENwaQNrv5RN",
  "key9": "HM8eXrzc1XF2Tcy3guFhffB19iMyRkK76qzDR27QWKXDpH52MmEZYy94aAfC4v1xeB6TfwZ1X52Fonbapsef5BY",
  "key10": "24K5yWLY2WZvjqwyg8Qv84Q8YfBghA8fXiCR859pp1TwszhHE3XhvDwMrPVZyra9GquSbHmL2puQs2RwoGGUyrz8",
  "key11": "2WgcoAp3LLoDATKDBZFVgukxeJMoFM1jPrygCebV31wUpBdM2u24j1YyLoeUDhRRDKeDA2xFT9qLrAm5ccKxdNF9",
  "key12": "2fQcvtKWYa7DZpaaxgMvREpVnNtaVkWPPi3K7o9Dg6VVMR2x4r8ZmFWoZuwMQRanRNx5B1r6cnLxNT7AfQpSVahr",
  "key13": "ZLek2sZerQ5FE7V2a1UmodaFfFpQJv3TqsunvBPYsA5MyAToD1H8M8nrgtPA9fKBr35qwbQu1MaUgGQGSZauLg1",
  "key14": "R7YHdy2awd5LGgJozScgkgKsrJyg1x1k9Wt1vCx5Cb7Ac7mjNkGYXAuhdpduX1zszqevTeZMcxP1B8tmbKJPoWb",
  "key15": "54hVghtoNiZKHSRQBMWuNZK5fkS858CRjqxU3FmFbmFLagHBUpiHR1ZTUyWjkzqu8BpDtPqj27985Uxqt7yf9CAu",
  "key16": "2C3RSQGYB8QBoCoKxrxMbVuP19JkFFzdChpr6Q2r4YrtD3mgHEFtYDszKZ8aduZprZQn2ryQ1NMy1a2GBppo5999",
  "key17": "3EPCMknEmkYdAZZERKvqcc25jJ2Xh58eKYrFVtwfR1n76kodVr1HRYLo4BsRdfbDbPpiZJ1YnbHkdzz7EW8tRKNU",
  "key18": "BAbmPW2WCpciW28B6PDJb126SXX6iJxygavX4EeMBYhHFbyw3kvi656hkHv9npKGFmaCCCgk8xCzsPQas1Jmapc",
  "key19": "4gMYoxU41qyCmkFSY8DFpFbEJUZcYSKXSYsuQgJjANooaKBfWMZZM2LgwsQ821qPqMBxsan1UkABrbBWScv8As2a",
  "key20": "5ALCXmFtLHvKgzsb3Y9UTCFvPFYdMggihL8hQi5fpk8nYNjtziNp9nJmUwGin2B9Xzt787QwoypgGtvrQYZrPWMr",
  "key21": "Moh1LzQ9BGwFFgxGCUzuF3WJxXDMsPCsCp5esw6cs5BAi94vEHdWRhxwmoRdEthdKNjRj96gQi6qorYYxtkxSox",
  "key22": "4ehNw348UXUGqdtr9LfxzK99mV8aDqDPN2JmH72yVkv4aWzQr5grkyJ4uJvsDUqbsWEzrBSAARcn51SdT3ZYVUZD",
  "key23": "3PoFm2eaHQjRjzGrdhCgLAingg5KY1ZtRPC1ECGJj6mFiF82BPaZtuVdpJUbW45JEKASrHnzEvivenw2Y6WvfSjo",
  "key24": "2RpZqxjx9dUoxH2mMNDqBmjN8uHfNZuKBk4Baa5BH4wHgkFdK57CcgoPpMPmzthj5YrNga7d6oqSFKbGtzepdYcw",
  "key25": "2Fzjf8YaUjdGJx7dFjfT4xi5hgEuqrbzQriXKWQHDA6NhksugmJxqgTazNMit2NkuaFayME4DX1ZXurFBz9Aw7N7",
  "key26": "3MhQjVaKjx6L9A9vDiHpVGmH7q3RTSwE5TmftzxPwWEZtD5ytzA12Wa5joPsqSfp9SUy7BvbQPwTMG1SiCwYpfxv",
  "key27": "2yfdMNVHAD1RhBNoVuVXRBDjWj5hH8P4EZ5xHfA2FBkx9NtPcNEFWq9QzueUHGqX2o8FoBfkSiEAC7hz3JMQ4FgK",
  "key28": "f8V8qnfp9c1hjX27kAEaxAkzKQhuoMrQg6sjLV6FbU9kGz1VVt4LrmSoKWtpTeHcAt5PemT6wmTE9NM5srs5SpD",
  "key29": "5wJsYhsX6QfiU94iFsH6zppxDm42E5th3XcSKEP4QQrmAkqpUvnbDAaERd59jCA94aPKMCWyDZngcVSccKwwzhNF",
  "key30": "2ZKvvZn4MD599YrJ7mFymZ1tFStqJFMWkVtndtkBoh4MSnQPW1oukkpE7cXsoz9uknGQG3dw1KMNVLAixhyKtJ8j",
  "key31": "S6nYqtXYeGjHYLpGXybE1VJDV3zg3C5Dpj1fURdKtRTjbDRJ11UKgGT8CCXHE6DqwP85u67LxnrKt4dipsuZX1a"
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
