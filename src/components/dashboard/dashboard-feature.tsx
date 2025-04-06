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
    "kJVH8RqQtFJvQNvbW2MrcatNYTUwyUQoAvqpmgBxzM279qbkAqe9v7Pvs9VmyNyLvfg779MfpdBfdQKaZKkjpqu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29P3wgsyc57xFWxqHPki3NNaJfxDHDEdgo72VVz3CbMmrde6ZLqUDKC6jk6L4NZmbQSb5DbGxc5kJaBmMFFgSFjD",
  "key1": "4AinBxrEauaACzwtYdx4had3aAQgyh9PMTmqBYy8rwRNciqRaUVQ1ZY7KXRh82E9MvNSuVzd3Fjp8471wLQDA68F",
  "key2": "3tdTR26eNADDHc4ELDgoTqS5NCQ7TszsZKrUD7sSot9Hdzb3qos9WFX9GiiYDiNQH49He4vM8xMqgLq6dRBwGVyb",
  "key3": "4Ho2xwb8EuQcWTkPkPCBg87vbc24mtE8UFqmfyQFYyteU3eC2XHJwP48wiWWXnwpsULxviLryEE7x4KHhhTXBgKD",
  "key4": "4ByQPzNLMHeVWYHZoSoAJwpJ3TzPzE1Nq4m4NBN3PJ9x684DitonzCFNACcAGpYYweR35h5d32ihTRdREn8rUVxM",
  "key5": "t9JUvK4HxypoV9SWokibE8PkcHmFW6NYx7jDUYcKDoJMe7uiHchykusjvHAoze6qpz4gsewNJih8J8G5MiRQPJ5",
  "key6": "3ZHeA4g59kWyvciEJeYmQPb2rtFnjXS2SBR7qTUTxXcBx4q9SFVX6SWK4Ew7aJhGcaQGMvNbWmqQSdy9GeJs9M3",
  "key7": "2rLdVrQFfvaNznh1EGr6gL25d4TNE4tSb8RtZE3hkhvYeV2YVKemyNhBi9zFM8Gum3s6kwxws2wdfPreSADsT7ao",
  "key8": "21f3ce9knjwz7WbqBHvApU9bexV4dYLSbPrj3xhCRSJ5Vca3YvkxkoWM1JxJN3fgEZRgxNm7kpFrpthAUVyZB9ED",
  "key9": "3fqLHTRaEFghzCfUQS76PSss9FjTXukzqBzKQPkujLqopniAyjvvuDdjkxHMvTHwtwPq2TZ3fXhmP7EpPcAxiKzc",
  "key10": "3WywG44qrUrEAqaXMGoVWruQaK9kyQUctJ4faVoHxjVjDrn7fuLcW1UTDraKqJJuNH3vtaJc5qDpQeCKpeu1kAmY",
  "key11": "4wRfoyRZoGwJZQVWgC3gKFuB346PJC3y1hHz38LfauNFMeLQk5CkbXVcefwuTDmtZAPd5CKDUqTLabykyeAvjuAA",
  "key12": "61HMRCdfuML7QEYUhr1ffLbUFkd33KSrjtRjRF6ntGCUjauDNJmYYo95sYZkcmTKtpSUm5ZKKnzno2fcx24w3LnM",
  "key13": "2EHC26e2YedW577SnYZZoWQsbXqU7PGJWWEzF7QKfKXHTNLpkR2FPbHvnVpxnAkaJjRVm5AK1nX14TxJU6Vf6mou",
  "key14": "3cThW3eJAChRhCJ6o6JnPY3KJdxmpvugRRczLkjhtpcXSsdqwQ9KUNtjPZFeZg3DXwbzdMg9EtPfxKpTjLFWcEnp",
  "key15": "3TJ1KJau6iWBy2deSaodXrJDea7kqy8pVrMNwNW2ePFLEkJ9Xq8FLMMNMEz3EaM7hB2MLpLse2v7BZ7Zo4jxgwFt",
  "key16": "4b4fRMbLUSUBsCf1ADuCcmT7TGZiRnK7KFzCWjRQ3mdkBkHQfafw76Sbfh5YjDzcdan9vEDXukpNvshYaug35mwL",
  "key17": "2aoThmeRTx1FMBH8yfyVz5zXDpCW1WqWBSCu1F6A8DaV4UzJSujKjMEGYFB1eThGF8Ujx7yMFeYQHPCwf6vorEff",
  "key18": "2JoP89wDLmTLxyYnREdVSoYZXSrJnV42J3oASEEui4v65yB961VfrKUmou9EKnmt47pL2Kq3xawXMb6SAET1Uzpm",
  "key19": "46FTo2XJjjNFB2ndQxCk9pEw4S6oNDAU7DFUq5meLqpFXBrmU3PYBNCY6tvopSbJbME2UcqTc3irLEbGxfpkDnS1",
  "key20": "62skjfhaCw8psaP2uK9pANaUMZQTMtoeCsZnhpgQFi3CrnvShsTM8AXswmej1wwogmYzG14ST5yja1ezaCMCGPRx",
  "key21": "5P6EdM8Vhr6t9kySh1xqWZ4iE3aT8s3emHYQ8iHGotgPwmUC42aEVxdMSXZnDMxCaS3JWyGZpMZ2w9FYVZ5oRemS",
  "key22": "2sQ1CLrA3zd1w8oS1QdDELowUDHzVsijRCroeBnXUgFdrW3rmAyz73uiZ9731Hz6SzwXACH99i6F6eCtuQnTHt5R",
  "key23": "2uoP1G1duh1Se4KAVkByvxj9qywCBp5JD1pMLdK5W934TUChSMoktDw6qwgVRruqRchcHWnw1PtZ3onn8cgwCDzF",
  "key24": "3n38Akj3mgoYrFGx2ywzvGk1jZHvna961NrCSNfsZ6pTfN5DLvvA8ZJrUmDksdQufYdfwSmQZ3JLoDXCoiA5dmmD",
  "key25": "HXSn2sYCUBVgQJ8DULL4T6cQNZgSyFYwpGDjZfKs9RoLTSLhCSyPTXL5oeqQmBCa1RNEBJFgbCA5WV1Qdiq1pHC",
  "key26": "451CKz78dVtZSteBN5GTPuiecGwsdUyAve1teCDx1uMqrF7ZzUBA5V1mabrRMY6QxRyp49VPRJEQpFDGc5dwKmC1",
  "key27": "5CDJmJKqYUpp7VjiCYKwQrne6X3sZLJG71EZgMk8X4H9QT7Jr1jKpM1bZMYXqSa5ZjLZz1KTya6Nav6UpGQuWuGC",
  "key28": "cBgF28c3KZZGLb8wRpndfUTRFigauuMVWiJSeMdiQY4t5gT1NQyrFRGo1f1mPXsHSiAojbsagR9DB3KT9HTN6dS",
  "key29": "4Db1h2zLrPm5xRmPDvTnqWvYWNPNszUWDpsfnRWtbBZ2itDzPz3t3p3PwmCM6anMRbcWGJJ3UaCe8kFxGVFN7ziV",
  "key30": "5RRChwerw9uW8LZgg84Ycmfe9MFHv8ruERZ8ZC949C9eVe19o6sQgD8U5DinfTBgWVtL5ogbQeFTLpNbXPXpjPpc"
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
