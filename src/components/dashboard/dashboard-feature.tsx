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
    "39tdih4Gksr2irMpfCLvvdGbBSctmAfEzhmPAuDP7xEVxCwkyYTpzc6DkWip4ayRLN2AusogMFeSFJo53e6mNvdW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ESi1i5Nnart9tY4qEjf4XnwnFUCKQ9bZPnRZMDA8oKoMiD5tWhTovw4mN2YZ4buUqvNDMpBMeu7rzPVB3UQkHsL",
  "key1": "3eKugkmyqiw6FfeY2wtp9GBGC9BSyQ8oBih5cr6JBJL4eADf3eUd64MRFecx8YdJaMhDRdBdS1vBbshNb28BUSNS",
  "key2": "4QqmUffDq4TaK2QJxSizBYp3ZxzPxqkT1q4KcNMFSFbs7jHrnCo5TAfdcqB9R5y5Q8YS2797dT8bhJB3kyGGTfzF",
  "key3": "2itjYmmmzxS243ivBoTvEnuXRr95iEahnRAowPUmhNRaPyeQCb55cYRnHgQAcJWnp1cSc38TVwBTqVJe47G7DwkV",
  "key4": "3TQqpdZqZQJDykAvHJaJajvbRK5xhZxE5Ywu7HWsAjWcD1PsQzBhGTg1qKYAnTDQA6ooC5dsici8sP8WVQSaV4So",
  "key5": "2UFy4B9TQuZZwkAquk8bYkHsCVEQEVfTLtBPx8Wdn2fpZD3T9APaBjHvMDHrUvT4w7Cox5LakgMfkuc3UjKTB8hT",
  "key6": "459eva8QrunYWWmQHeWYVX5MLgqufDgzEwscMKhgMFXCh6nXMTyRFEzfkqQwKDUtM5UJCpZtA1ojwmvzeF58FSCn",
  "key7": "dJGtuRXuWCMjQTLxRcbViHRXMkrhAF3BqGsMSaanzp6Sp1fh6XALhEt7iME5yxrQRpnZ8jMC2G2JG4R1q6UMy5g",
  "key8": "3m8Dn2rNmFa8XKzzEnfPwpmpmxTkAV7hK9jwxw5ByMJu3MkWNcde2nusfTTN9W75qBQYhmM53tNkxFaHjT5XJrVM",
  "key9": "3yCrhmHSU7YqUvKUqU8pireuvZ6vmYSe41YetQuCPTiUQW2PGBGxUUCZWCh4kYAkzQz26Skr5hPzRPXrDxBZCQjD",
  "key10": "5uMU9haf1XvBF5G6J3ejZ77aADK4CQjxZgn67ZcNyz3NcTBDWrMT8jBQCshYynNwgUX642v7JVSCvU96kF1eCG9S",
  "key11": "3hTXA9i2nWFF5cZ7UtTwvC6nbuYkcFZGhUzY8MjP7vRgUbfnBcCJs5ATL4EJCaw1xVwZEPLxdAcv7NjQn7n5wz3H",
  "key12": "2X8yqh6ySYA57fN9r77Q5EkLBpG4PbvVzNuRGKAdQiwggVkaYP3U1FC9pnXe6SgfSZyX635MiPNZv41c2zdpdxV2",
  "key13": "48BZZhCGTSFAH36cugtsZKK6685rZ8Wxjt6aEZhTF8HXetY92heEp2EQwyw1ePZo2TeoviBQp54vR5SJnhPQa7Zz",
  "key14": "Bp1eforAe1jndyje4AHadEgdZH1YWraVSLXL22UNBewYMxiyKWijVs5bre8SeYeJA1wBHAWHe6PanfweKzw71gC",
  "key15": "5VSqPCih7HQj8cxKeKU4rXbMb5E1CHYZwVPyGuvPS5Q28DtAE3Lt1MRnqXVBVhCdqscKx6jovqCDjPPwc5DMomET",
  "key16": "57Quw8cxQxHViqaCo772XkSau5JtUh38Xtrn8aiEAPqAqmEHRZKnYZdxoSNosVQGmLRmvHjTP7wm99epPAGJoAVX",
  "key17": "3svGgvoPCtEVFBQneRPHuBUR5QRZUzxUMmPkt12sQkxjwrUfCsx3PUwm4WDXVKpR3kE4oRwJXwHFgv8ffZFgBK1F",
  "key18": "2UrKaPtttraBkgA28r5GQfhoevtaYqHBNbbWP6aH5MHNc2UM8ZuYfr1dxPGK6B4vhyrHwSNFGXtkJrskEbia4wLa",
  "key19": "5ZqvpHNQ3p4KvxM4VDqVXvbyTUfvZJZcipzTeFwA16BCgzDVYoDpCsq6eNZ6mnFrciEdJ1gF3wzHRQEepCuVkDLT",
  "key20": "2diXypYULKMczjTuHKpaLLMkp7YcUJRNXBW2eqNfTLSSLHEPahbmV4KeD5PKn8RpBUvkBVbeQQmsxnq1de3nT411",
  "key21": "4tEtuDaixd2UVm9Qe7gej5TiToSeYPxQnpNDgDyEe4UcUd4PZh8chjs2b5DnsjsuNPptRQ73qvUdLijbe8VK3H57",
  "key22": "3YnpNfifvzKbxbZ5ZrPuCB8UvWu1Hg5R43YBQVYa1ZTuG6wamEFB9GFYMSVjZu6jVczofD2nUiVLy8SSgtXUnUqZ",
  "key23": "55iFfcPcuk4xwsrh8xHfiey6gJ6EE6H2WJ7oLNjjWe7svK1oAahp8AtswBWMMUUPeB9bWFEBPgtZ2VW6GvK1a5e3",
  "key24": "4G6vNHHkWj9PqBWR2V41S768wKiGKmztaBLGBWf1zJ7Lmf8BCEvT4ym2DUKTy58sdxX7xYkQaDtSKoRFCTNuQpgF",
  "key25": "5aiqzw3nnQ3ooxuTbbGQArHPJKS4qzhK5gMyeM81KXabf64onkhrXZStpb6nkBNMk6Sm8oeHuzheAAuNe8Q1UR37",
  "key26": "5F6BV3iYzjKPg1w8TjniSnURYWwCpU5iZSfEEHgcSKt6LgZoMfXk7npoZC9xAeX8k7K3Qz2Ed89EEXW5ndJ27ji8",
  "key27": "Q7UxX5mCe8fp6TQ3Bcn1Adpb1WD5JuaCgPTYFzGSqo1YXQGPu2uzjNwsHXJLcKH1txZLG9rLyLbhAn9Ff1Sx18M",
  "key28": "5RHtBTSuHgohBhmXM7uVDbQwLSu7vFvnJDrXb7X8zvP35f6zEhVicd9yYgykKXsZ9MjvW9cHm8PiEpx8A2V98Bdv",
  "key29": "4dFbB3omXGw88S2HgZkpq4R1qfcDVSwqs86PuUoU4m7txprCVCZ6wcFCMKQimDgiBGKeXG2Be6neUXfgjrQTG482",
  "key30": "4Yk6WyFcmHXm239acXLeCAWWCB58KyXz2qz1ZWNBHN9LZC5Sr43HR2WzooW6HS15xNggJo6F9ACHw5rod6w5oTFA"
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
