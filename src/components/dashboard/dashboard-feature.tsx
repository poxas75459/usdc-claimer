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
    "f67q2bcys97j5GJ1fA2c4A9Kq9j8Lbb29cZQ7KVvhSzxd9Vnm6tKFvdq8jG2hTLPF4jWDms7fdvdLdRzXxjvrom"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ez6TQ9mMb2WzYLGHgdJDPKWRECkgpprHQkRjdvLG5vHwouFyqbxGgMwqxrQJ1UmndhZoD8ZGissnKnkawpnH8co",
  "key1": "2z1mJcwSwtdrVzFasQtuGTBq5NHvMKQhUD8ZzdGEmSJ3S3gQnuwMTKjYpC2Me7opC6jEEhLzekxo2eR2Jshxtz5u",
  "key2": "gZ8TuJWTZrTP9SqGXWZbAR1VM3Q6medGHiCYZVtzzfhRSVznnePo5MU37Ks9PknUydkaKVzRten6p6eKe49874X",
  "key3": "2i48UqfdJgvYLP5QA8t6hCJHfMvncVYQ95eapsetbjJAXMVtRaJ74gALMSPU2w7DrB33DKfJ4TYMDKEWnQuqrWzU",
  "key4": "3XujRZ9Fpm9uCHFyG7X5ZTbnrP5mHGmX53K1MVWGWSrvNPijLagd5bB15DKbAgz4PkczT2CuPHehMemYynVsR3aM",
  "key5": "K6vzduxWxxKaBpzBzErP8c9M6s18yB7j4wR6RXKENQDY5cAv4EniB5gf6mqXtXA4NxQX6RTHnz57sdzm3WoCRLR",
  "key6": "EnF6sssmj4XNW5dMiX9YDeMQ5X9ijgRfkP4QnhunhrYf8pWUVWuBqvR55HLNSGoidnsFpjjRkGNG4Pw8j76vRKh",
  "key7": "53ju3hn3itnVRraT9TUpKs86ZY9SEbwf48ZyZ7dT9r9Hj3mseP91oh6nQj3yqCtELyjXznRSAj9t7iq6tUqMwCFZ",
  "key8": "2u4vKja2XQm4Ge4w2nekbeS8JyvzXjekUNxXRhn7yGGr5zhifajKux2uasoTbWWRysmE9gs8b9V7KktmMgyTYDT8",
  "key9": "qWobQJFnyGRYv6mAdMyo7aYF22sh5dEL3w6sLSmRzPGeVbXJheGh5FHSvh9QJuWyJ7vfMTaSK9FDKHHxfVtPwoV",
  "key10": "2pAtpcDqsLLeULEcBLr4crNkANr4go4YszgovzSAZxa5sn3UtMtreKEZcLkP4wN99zjF72iDPdSytNTufz4tVEqK",
  "key11": "nXadY7JuLuscrWiUkGsEfVLZYHV84RnKdURjsWNpJMWsiRsCfXfHt43RqDfVafc8daqAzHnxT2FZkq3bfjntiqf",
  "key12": "5ps26ewLNEyqxynhfwPk2WP2UsDrcmbiDqk3gjvxvN8xNzzu18um68GAZMYwDxcPJzDqWLV5zUq5ayfivzP1D2bK",
  "key13": "2UcwSsMK6tRsvT4zkxsZRiTTgMkqAAn98EkoRfTY6fJEicbvcbDNKRkpYB6kiakzqY4EsErT55pXSmUNB2jes9wu",
  "key14": "3ekGoymPugwB5iV6iEw3tXGekPzkmGJ4zdRGVaqk69JVjCYbK9hg1jhQUcsTRDHWKNzHyxzvtooNaknVxPVBMKmQ",
  "key15": "24VDny5F5x4VsQQKWRTH5HewvgrkKhGU5t3HLw3TS7EW8wFhC6VHf7s8m6vGJBkHxgUtiSbKPhzbpwKdqQUeDpCt",
  "key16": "3QvsDKomeoDxXkKKEoJiw5XA62dcdAg2oU9juhLY6ZHwhRK44gvojcPbY6F7RS6es5PoCXNppcp6tNg98DrLjCRc",
  "key17": "4fTXVwmMi5jxhjVUJ1x3uKxgJjXCoJkW9159Rs2nNwbibHrGaGWfLHTy3wbpgUpUzy1HHLN8mohjGnYu5TGCpFEL",
  "key18": "a2K4MXksU1HEWYYBBEhDBusroNMjX7JqKu9FY8TugkntHoJ5i98okMGTZLvJ3rQcBZXfGpv1dqZpoVTzW7Td4cd",
  "key19": "4nHnbYRc75CMy9CGtmVFRJzzNmcC8EeQZBA4emSSUzqSNYV1pXedZr2n9wPjRESLADm4xHdjPinjr9qVVYPJmSEg",
  "key20": "5zrNtCRnacmazCazerzvFs8RRKir246Bt8gMHSSHuc93VsTY8sP21c9u6HxT3sRAZKoLWbKLVQzDeENh2c1HXJFh",
  "key21": "3vFqXWkFJLbsH8SDfB9tRdZT2J1Ev6JK7rb8g455vkmSZUXszC9149w84D1WZNLE5qo5DUfJjmTAdUvFD9s9pnbX",
  "key22": "3PqzkgDRNVmfEvaBN56dxEX18yn2UDYdfBhexitDLBrESSVLpfCfk4gTevg3HwrG7XiVYJpRLT2q9Qw2F1FzPYnr",
  "key23": "pTx7T1umx7yS8UGuiMKnaG3JFJ8aorGjnJWaAJHE6yn5yjHbR1ty5pAMRbwi4N8uRGsZ2wEcELquroHGWBGzADD",
  "key24": "626gJxkxDivkj4bKBJaUAT5XPhyhBfT5x4W6qWiMsW8J925HZGFV62jCTCuopo3eJwD6fRqMcQEuJ7zcxWYGGVgN",
  "key25": "2XQ3a2xbVoYdEyzPfsKDkwqSorE1ouuuweWKo9tor37Rwy5sc2P8FLErN6f4meim6wxtEkdmP61cgr3ePG5idKYP",
  "key26": "xTdPGjNUcrvaiXKBjn8eVJK9yBQnbtFHZnuwNA6UGuSX3ALrWLes2wkjP2mE57m3p8E5TcjyB67dCtvCVhadwHj"
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
