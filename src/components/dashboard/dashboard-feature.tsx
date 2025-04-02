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
    "2upGQEyu5qmckQaFVPwf18s6y8jcCbaaVVZEBgaw11SjYwXafdDMcv4epR6FUCQ28Ad7WMSmpyYWnvK5Wv9KHvNu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32412y345Hoyx8chHm3r7joutk7SaUpVmYSQ6BXXwNnmLESLM67GAz9eVZ7V6XGqHV7aQ4hEg6o7jqoZnvmn1pTz",
  "key1": "55Ce5Ue155LkHzET6F6FCbDx2PHpYxcraCg89GsKDDNengsykvQbTvNm44dc31H2XWvkN1Byu8Xnhg9eQvUH1VoB",
  "key2": "MP3UjXoyZyFR8etxtKhGU2SS1i2UBVyv6t6HfHrSVYSPdE7oykKn8LnaHktFVuhcA4kXSVKyCRxz4d28pBEcXmY",
  "key3": "2YgxXcvdGF6ckSqMAUCycdQzDUPHpauRN6dGBEVuYd3Hcjg3YTjUkodGQzuSjEqVu1AxgbXVCkF9RQCSktxS8FKc",
  "key4": "2cPyT6mktRhPotSjY4zqX42p3bzfozZcRqK75AHxfUGYLaWFRKTEiGmWRaro3EgcSGsoJocMPjnnwoDuTEp41yZn",
  "key5": "2Sneo56vxEZ4jc5Y9fPghfo4LSaVCKUMyY6hHHtGmUGQziUFJudnr7Pf5VEnLWV9HcjUsJQ5Siz8SCYSEQbZesGu",
  "key6": "4c4W6fVKMxE8nFVfQi8XZfQFX6EA38wkBrQZJgT2VrgBvusRdSucE3BuVwSJcf2g2oct8CuJvC7hNNYiE5P7yt5A",
  "key7": "4Ayxt8BsQhnUdAwyFckPwBAAXA7kKoqQwaCMCqvNnUJmTFKJ8QULeAxz356iYkJdigsRg6kAv4fdsbWmYV5vfQ5g",
  "key8": "519MDVeUGBVcB57zcBAoYGP8kzjZVirmv8YzPH8KTEbuFHySEV1E5M3eSb9gv6HU3ici9agkFVQvjFC9zPm5zSAs",
  "key9": "4VampZL5PaF7E5qvt8f8S796zqcWKxUp2TDq9sCJk9Vucb76WiYpVAg6UxZeQnkyFtQbM8V7aAx9r38FZL96DpFK",
  "key10": "3fMuxDwwgxn3X2J1HgectF8n3dTEx5UaPtqGB6re6rHNiRzKQPt6CaG2nYs25tZYX3FUmgJTQdtQpSCe4C1wC6Xu",
  "key11": "3iwhPnV1VA1SbdDJKLJbSXfCkqya1e9L5hEKkYq267aB5v8h4xdhR3ThsuQNZNeNomDTZhuYdfqCtHvgnZF3FcWz",
  "key12": "25Uh9K1E57rhMCfkXP1QW2CfNR61s4cAULvoAMLoJzhaxGnWXEjMYEKtNyoNvwkp9ck7Z1fxs2z2AWwLcDXfxPhw",
  "key13": "3zbdRMQbSesXPUJ8FrMcAmpkh3rojjKo2MtAnUvbKkWq9dzJSyWQGoUBtBudeAE4F7QKWgQPejixJZiLTwKc3nP8",
  "key14": "5U8h9MRzK9CX6n8ro8CPdqCzmeq48efaFyNDt3bW38JvDpjeUHwvW2kaBsTnZnmPQR5tmnExaeLaCzmhW3QmqSU4",
  "key15": "16mYSsCFwXoYgXKFcLLUUwLd62wyMj84W9Bv6RhFHan8GyDQnbfrMQPDwRvAabmnNGbj1SRsAJL38r5k2Eh5fGB",
  "key16": "41gQqhn5td25u9QJzHexK6jsY5ay9Btwrt2Pot7JLrUkG4wopoVigpZHbTFwYqFrpkR3F72UQnLCgZXcdFvXbxaj",
  "key17": "31BSigWtUaDV753DWnbP4x1tzGgm998EvByVeBhDbJ84r8CDtR3RZXF93dMLxQBQbBpnqXvNLWxHjb9NwwRyZjZ2",
  "key18": "2nqkC1NhDmNV1CZQfjsQY5jrdJEGknb7iPDyq39FhHExNq6McA9gRf77TVEBEGisFZXqWHLd5augsATy2iSHWxts",
  "key19": "HiFyK1VeaCh5suoKivukSSjqNpQdEvCDfTTnYSS2fh75QVhCbK8G1dqAuJGF8kE3F1nxxyrkruzZgpkvuGmk9Fu",
  "key20": "659v6TE2XczTJb3wgyiHpKuU77Enm6pbQzJBajBXPLbVyR6mMZ3tRZrtbpai7MqHLEwVz2gaa7mrCpm3VUXa4BWh",
  "key21": "4bZrEQCXKnhTbVLXF5SjD8MbomKGHctooyAZpvyTPdPnT2TCpZE6ApKUCsJ1KecCENfVi5Q9nufX4RnxBToGTwxD",
  "key22": "4p9jDTV15j6uTk3Ts3jxgyBWnnJb7WnjHWiwrUxcK6kBKzDetL4AKkpEpUXEgDrrWVnK6BBTPiqv7VvSA8Jykoy",
  "key23": "2CoqJapg19n3svGgpAGZdWV9kmUcqub4eVQkosejTYVTtE2R4K98LCmpvLMFJ5dJEHBvo6f4BELk8TghymjiEgoc",
  "key24": "4XfBg842LFUKLQ6AyjX6kt7s8hYM7SB2bNQxbhFWqVPA85MxgGdRRxHw52nDo6JJrJEPZiTjDtjg4sYWxYyMbZsi",
  "key25": "44KBUxWGe6E8uBSqSKYMEUJc1H5w1oeW9BSUUwYyiBwDYpyVkMRonyNCTW3i62LpG3SXAQriKsezWrB82DEA2AXT",
  "key26": "5hCFDDmkKA554utuv1V9obKq6uDiVGm6z3q8gDrHCnX5UCXZwjyXujn8EQLJao4mon7Y2sC4TE8Uwnj5At2p3TEP",
  "key27": "5eK2NwHT34JuwDfXMsWktoGRGG1DBZco8jiVGWiJc13CAeiu9SbUL1Wd6TDedUbS1vUPU8ResyYFivaWCZs4JAu4"
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
