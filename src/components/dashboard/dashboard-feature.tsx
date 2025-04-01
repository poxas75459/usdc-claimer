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
    "fZneLwiBKjFENq3trPHt66noqbVMbBgPKUQzCBkFYUpeJec9ZvyWkfFLKyQs31xRZtwuKGqH7FwbsKjAoTHzxHv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HjqbvpMsQQ7Lsk3rKLaq7eWtisJV4e4gUbpiarMcaC3KCHP3KPzf3tB9ZdWZxap99s9DZNEaxKa61fTKYvbrNor",
  "key1": "28n7SnxYUYUJiSpp3iEhKs7b484SXHRy65p82sTb9nE9yH5goyYMzRupmLxcgx1kRxCD4ikeMSCK4BcSzjp6tywZ",
  "key2": "4cc3uVzALMExMNr75WV829FcWEx2qa8YeNXMy7yt6ASGWvgW2WfVF8ARafeYKK8oPNZqHZB98iZtfQzfSQqAEpny",
  "key3": "5yukyTiLw5NX9Z2ukds6xs2Ad2t7MUkKK6Wm2obw6cK3r6xpU9rAhRzYznLStktRFeHyriQXDrxoVk8uoWXDLv4k",
  "key4": "2fT4tDK1meGtkt3nHFGAZo9pGeZnEJ45if3jtQh6AsYtMcAd7mzmYbrYJmP29go92eLshxeeuMDPk42DAxJGL413",
  "key5": "5TcKB634DQBVoEf2uRKLrt8s4etYpm3ckx7cmCyJTtNhtGDRd17ZfM3C2UzuL7KGxqK9c4nEKQVpDPUBtSWXgrGh",
  "key6": "afjn6xjauCcSFtXwoy2E6XusPbqeJRPbG13ow7mVPUMbS7Z861b2od7wwN6U2SfgtT1idJuJXa4aKv7NTERxY6f",
  "key7": "33knKJbUhUhxCj9ED5wA9zAV6rMiCLjUvVbc7bdjokHNfosdrUXHq2EXY9efavjVFWBvHtrATrfYkuabnBcQq1VY",
  "key8": "2LCoUAJ8W16Yc2Krwxv1zkSkDPFyi1q8MRC3TyMroZfV6CqUXU7QfJuAoDwNQbn7V3j2BBJedsRV5swBzbki9RaY",
  "key9": "5iBAAMvC4dBgqvffFay5xRcpubC6vpMkqewmmvAuaNhJfKSWLRcmCVLJ2SPpiquuMrPaS9JUZn6q6YQxL8axEt28",
  "key10": "4MYmCf8DPoFUKtED1BD4DJ9F2vCeiQEG8L171JK2v6AyJ2V4irogwScgB9QhMn2Nw4WbgQGDeiqHhyo8eZm5yWPD",
  "key11": "56bAcARsvMvVmCC1PVXgAYUGURWEZqaDgKE2EMFifzb6Um2sAVAECetgtFggBVC999eZms96fA9Qzzuy41Wrm9aq",
  "key12": "3jT65SecSAcGU7h28pSQz7JBoQRan9CyRehUoEAZNz4GkRZjiXry5erci3drJ1XkFNPVWf4Z7voJdEA9ixyJp4gi",
  "key13": "43mMdVQhkcXks5Y1Bge2ZXdLCbM7ve8qtNxSX7n5XBpBH5qTwA42LS9b1cwNc2Zx6fWRGejuNeWBLRbCf1uh92nQ",
  "key14": "eMbfo8zkaDRKMiXw286SmqdJ5uUJcqA4ckKyfoqzCTBc6wNHr9QHj6qS94t5FJHjR5Ts3V52xDCbFYDoikBpy5W",
  "key15": "4FDThpqUY1SSHg8j4JEd5cCub5yXYrkr59as9TgUVyjSWgytYkHkorXXU8tWhodW8cmT3SU4qmxt1JJuD6VCbFSX",
  "key16": "3ADx1N7HNBqZMwRa9CdDNv8pGivKEGhK8yjr2hp8Q4eMYqobZvZ8fNc4Bv7vnwQvrywas6ihK22K6P5Q2H765roC",
  "key17": "39mA3zD6SJ6h5RB5CzakJhGbXiBWJf3DVVr974QHC6if9W5eqJJmjsrSoCpVkhbsTMWGapLfWtmSfcZXBty4MvAe",
  "key18": "52KQKjBXUWYbGS5G4UDHXn9wR9ewt1ctxo1693YSDZ2tUfPQUpMJwXziyXbST185BuXg4PnxdcoTvGBGMaZeHxow",
  "key19": "zzvbZwbciCnosXxPAnSTEBvTNXdRcsB8vDPebcGoCFysHVFUWCx98fvfW6ujQjGEDudURanbpa3d5tNAmncVgoV",
  "key20": "34uiVPYXA1aj5GKvGLoUxAN4Byuc5KoCLT1KAr4DMhoo8jndjNjEUhx1V4MxXxS6i5KyjoHzrGUYAY6S1RpRZMt1",
  "key21": "5SfojU1ztLTptv6SP4ZM4ARp7kYSNvFDYhokJXy82yyrjyefvNUGWXage9QKCeZ9s3pEUk1Ki7vvBHpqdzbM5itc",
  "key22": "4KhbexwefZFFeHiBeUfBbm4hJqP3zK6ggQ9TmJjhm8P4F6pBuED35wf3eSPwQGcVAFtF8N3tdtGhBxzFnWYiYKiW",
  "key23": "4CKkRxxteM5XbTyFwmXj1o46UQTEEQA7VgosMgibk6Nxxht7xSGct6UVfZgfbDzagSSgrKX9GYG5BWhfxbZGek77",
  "key24": "2u45TvmYDLyGr33sSAYy6C15Fh8VMWMcLf2VGfPFgfbuF2cMa3bn4yoAHWBh2KZj4s38HW5Ut9vKqTczbbXgmGaq",
  "key25": "31GG6xjwy67gvwovv2tuEF5ohLVe7frab5iqeojkVUMEg1yt1EifmB8hvs2ztw45uaQJKda2RwH7tqsrHYa1x7eE",
  "key26": "4fUM8EoKRGmLEPCuQdbmU9h6kKzku3PkEw17cZF35EhPuiWf3W61Q2jigGnSCKrDDHqcu8UMLjz1dhHhts8nRihE",
  "key27": "5R1hqVUseJV5UVHRvMFWCcuhw8szifQaJ9coqzY9p7npFrJG97dB7VgsZezZuda5Kz17rsSVBBgLjCVd8HqRJPaX",
  "key28": "4B6pqyVh9hNFkWAJS23FGsCH2CXTEDukfwErdvebZoFRiGFjKhPDewqgeqrPsv6s81Dpwhyks3eQ5mPPqn4LKdGV",
  "key29": "4tpGgUDPUqN9ckD64MhgDQiPb2k3RxPK3HeEL3j2uRjNWJSrnmK6rBf6dDaKXu1CaUxRB1DGcyirjceHxZCdf4ge",
  "key30": "4MZuXXym2HbHEhZDM7yeu1XXX4oyQLp9hxBqtGZpfaVsc9BSQmWzrhUHkjnjGG9JDdSUQ5P7doBdyU75wkdhAP68",
  "key31": "3KkT7YLynTQGDjvppfFgMcb4B1MHHZk9vZv1JanrrvhHCRsmchpzZsE3HdBgJ7jxtHM7kXBRDeuFv4qiMzzABQEt",
  "key32": "2K4FDAfrMPnTMGZHUvmuHMJ55vHPVk9MRVMk7i5Fup8c3wpzAMPwzv7T6ZBLBAVQG7TtNTc91BfTEmuR1DDjx6Xd"
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
