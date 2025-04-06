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
    "Dfsr4PmLfojg8gXau4kmh9LsDotHVHz53q2L5xLw39CLS3TPPuW5JLGBWAY8ccBjYt8cR74pEbnDgUSQGqD5Chn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iYs2avwt3sfCwQkdUfVmKxT4VDD5vhvpRT8ho4nmoC11MKx7FaLPUW7Rbcv2V1ieaah2rdFUWjAo5yC9rzALyMs",
  "key1": "3eDMkamLwgJWukSNdfShRXJyM49CsUgkfWURrDi5uZHcDqxSUNpQo2DWdh8hHM2eM3MR8X3bufsJN68CM4bySuNY",
  "key2": "2sohjyvMZSRXEoPpZpi3CgsYXQ6adP6s4pcNLWtML3Z3y7cMDzddcTqYR7jwiYkAB6kfKVMWAS5zkeHSmtVRXxs1",
  "key3": "66TC277woZUoEiZSJebiL37rXRr8vwP5srtWbcmjEXdRUHjfvESdUcFc2vzEAZacqhDBWhYwRM1Goc9eFtWKFW3D",
  "key4": "4B3xGADxtozBrAhGPZ1HWhBTUTzY7RsZdFeEM2GjGLoxDGhJr4kNXDEAeS5srw7BtE2pbaU8R6SzjhFpHixXFWAW",
  "key5": "54GCN5fnRmhCHZ35xu9kdvzRjcBeGmWKQCSP71GW3qQFwHHgxVzVbPS49o4rozsNKjvnwXdwo9SF4VFii5uiUnuw",
  "key6": "2V8kHQ8bncYQ71mobKK93feWCuX6TiNj9kdTXYeNopvYGCKGiZ5FQbguuzFvtXCe5zEozX79Ug4r5iRDd9efeMJ1",
  "key7": "5h5EKrk21MZJz2TqGLPGk62bXuo1qeFhybP5G547QQ3N8uRzTgTap9AdMeiKQubf3pcqR91s1E8wwVy65LrFotzy",
  "key8": "3h84hFSLawnzvyAwVs1SQQK6e5KtHmpZTmLxqhkixtbGAMYjzxZqmiBsrAYxysbN8mKxi57mdXnef4AHoZrEd4HZ",
  "key9": "3g7Vg4HUnqyhixrmSeu7cFSHNLE5RZYsz82M6L2u3H6mgGfzCGPZU19AFr9Y4dnX3HEbg7hYxMXpeCbKjFu7zu4r",
  "key10": "AU8GzkEMDmNbfXGjvBnnKJ9mVgFkaoymcARz29PUinBxRA2p9BxUHCPYjJYVQRkf1fEMcQLJkb4btLgXvv1N8PC",
  "key11": "5ot9ifq6wnsrzucBbHqWYovmMJHLLBWaVeCGxTTVcDajzYFieJhmRjbk4pLzPkkwXktfL6cAEgNWaTAbCQV5vYKG",
  "key12": "51kWnKEMS71VRoxJJLdknydGAAWfmfbNkKCxXz6NsoPYDVc5axoXap86YpswxixyHY5AhGpc7goGBWoqTuNZHsbJ",
  "key13": "3n17yER3uE5eie6Kf99BZDksj8tTQumJNrcQG4XUryDJnaHj6yGnJnTYfRQN2if65htZXZXAAUJg5Y6E8u7ShW6P",
  "key14": "3bAzSFMpmM8guucCg3x3yCERVMXubBMKLCigeYZ1VmJPAThawUMAAadRrMmEqbNTRSvgihDfwokRcEQe5kbHjCr4",
  "key15": "TJu8TRhxYhgamEUCJHvB2FH8w4e19NqoTqvLRHzoXKXoBzNMDr2cCqCBPqMtPfssL8qDkZmNxeRuRL3KSLHDpiJ",
  "key16": "55FdrPqyX1bqMQF6FLXLxuFSHBDxUFgTwdrxdcRJw5XtrfZci4PzuBh3t7vrGYfyKjLV1V4EN2N4EQYWC1kFa3Sx",
  "key17": "3CeazqfKJmvUeCXUpBgL7Q67Dm8zaAogZiftG5GsoU5hUDNe5TwbkXeBfhNqRHoRhi71yKCLpupmiPTL4gp4vZNu",
  "key18": "6359KguvbhtWUvafo94mV6hgc3iY77k1LNwxw4JE5v3GLXiWW2HjS2p3kxg1SPKHCPx9qQksbiu9ZaKi22M3yWCu",
  "key19": "4tTorxKRfFWaUfVN2jMnhxppZzsz5LzHfoZZ6V9aBX87gUhUGtG3LP3n839XRnjnXqDuK1e2AZkfmvCAnJ1FtSPT",
  "key20": "3iCd6ajaW4Nu1hDKDFq3ebX8d1bFJD3ga9WJxhQ5sffB71cHGAs9W1TKWX5RJbUTjm6pCt5y9SgdsvZZnxEesUzU",
  "key21": "5EiDDv9E79DKhSJRUoW7wL4iPxqNZmB2oHsoDQCw2cAZzuBr95TcuhNHHakey9uPdo7fVBWihtZZ1cR2uN13fQeC",
  "key22": "4TGmZYkZ2SDawgrCg3PFaGW2AdLhsmruAKeQkkBtS3tk3rcHsmyvovGAmj5QXEbsQZ31DhieCaGwP68x4js2hspu",
  "key23": "4Md7zD3eXZxT2CmDE6GZqQ82idHobKzx5oYVfaYWXZ8N2RQi25LeM4WzPDaFibRpvrhW4Aj6iZwjC98hgpE96Eyi",
  "key24": "2aGc8hRUiX5YsmgLoaH6h5RmwhLuTaQmSQf1uqRaJtfssbFiynkuEz9Y6X3WTYHvw3xV72QnnJbgrTZdAxY1dV7Z",
  "key25": "76EYi83ntpoJa1uejxMqxLprSHNcRNA6oQF8cxasyHNh2FhUT7VAn2wQYhspkxytcMRTArTSujk6raLLJHskbSX",
  "key26": "4taGcpSJBAuhz19FKcu2EdfA3X5iR5y84fTcfnB4ibpz229JBPK9ugnkYzArx4HEGcxSkHtJkmHWxUL3bA91HiVK",
  "key27": "57icRVva4Mh5YWrTMykhA5AsMPzdK49gD7y5ArpxDL8kiPGFKVJpApikhmVPgtkBf1XUa2uC9u5ih5ApwbAdyRQn",
  "key28": "5i7rdHau8jED2pMzHGTdbVcosRQpXnDxLtigLN9YXKFY48M65xz4zjc6QHQ2G9gTpkopbaEmWWnJhTQ4Van33hNM",
  "key29": "31p95WHjxrg4Xy6Vy66J4DWhpjm9P1p19ViWANYvkRvGuW8DfXtyu7NerGck5FpwfAfAYgWy7Jbz5jxf9iRHPh1H",
  "key30": "3ZdkuRhJhJpjx2rgNxmCyYsvRtH18GKGxY3fdKYVWin8AmVZrvzzvkrrrf1WE1r9RyN66P9aMFPU8ZFeNYBrXDVv",
  "key31": "2rSAz7K3ijURhiQtivCVgWixQyjqifYMKwcPdSurP89XWaeD2CBsTsnQ7e3n79Sybz4rA79HWcYkyuTxtmTDMTXs",
  "key32": "4KXNtKYghu9oBisJTLcAFr7qfa8wViK3oNfTePCqaTSqL7T74LiY61BQ9dQT8bZxyPSADiUDqejjwYuv9cajDBmc"
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
