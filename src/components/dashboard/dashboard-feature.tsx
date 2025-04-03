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
    "krM8FHKkpnGX4Mwg7ELQNmuRBKcCFQtsXyaYtm7QTHCn7XLDEP9tB62m8tSptFMh6GwFJgBYqBhCBVSqnfvTZTs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pxiHuoenx2HkvdkjfQ9Y3uFCBDFYFZ5shg9AiioBdCVFTnvZwHTehsS7ZkpcpXUCHwdgRLMm4MameXB3YkfcKXS",
  "key1": "3ouEB38idFvBqJGPbrRJh8G1tXQ6cqekGEx556tg3Ye1usn1ifWPig2fjJrgag4dw6YuDuvfkfj3hLEsJswmVqKC",
  "key2": "SzRTGGtTxCmhSbEdPYPBFAYQHqDpysNDgJL5F7TQoxPZwhZL7dispAQngDiMxPzRYazECyFaffSkVam6gg7jKQz",
  "key3": "4swzisuYyQhcpnjhkGENynpxePrM5VoDnoUREMMD2EsERaSEpRJpY7b1oKKLHpB3qVRYoqn6rWer1iPdzaDnvqBS",
  "key4": "5CpzQZPD6NbxvfzwZoYreDQn4d25b3BFBnFd2kQe3E8QXavixGnTBRiTk9WWfQoo4BWQTb4cWwP96oXrHR1kGJrh",
  "key5": "hXGE6Qm5cGr7PwuwjbJGF362DY6ZcZUvtPqAgbJvD4oLL3Wf5kkdqU791bWVB4xy49vP7YcYmcmCTp3frKWKvNt",
  "key6": "5uUi8Z5XPeSfwkrreGMr7K2mWAKKeLWxBgiAdSNXPum5HCrBkCj6SBgCmbW7HnL8t67HapS5tLEG95qjpBRMN4ad",
  "key7": "3UNzVYbhsSNtjLBLfS88bimHa9Ur8MH3L1PvqyCJxgNbDHcuQFGa8EoL2w5ViA4kkhxcvFheiaKrbnkHtMDhg4TY",
  "key8": "4tY8JwfHWZyrGZWESKTnmH2DNrLtPdPc1nJE8ihC4bToErgbju2EcupASpVrDFgXcUrp5m5zpi49DvErr4GfpZ7C",
  "key9": "7mUM9pCzSMGwQMV2DgMun8mHHDXTeF311uaAh8RWv23ruaAEaqVy1wqdqApEJboKywbgPNf8E9dZVAcZ7TomBhT",
  "key10": "zUbtcgqBd4hVKWduS37wAPMimKq8BQdnjzjd7hQpcA951z18pi6bViKpBtWjXxXpkqyDJYdsGbu2AQcBtQqUiaN",
  "key11": "4fHo2CdE3E5JzKc8C8qoNWgNayFRB5B8nPXQPqg3qJ26mFUJUi5AXRpNCrVjB1JihBZJkq7rTEjxGAes3kwRz2GS",
  "key12": "26HftJ9wqbH9B8jcisM7P9ioiDFBrPHfBPN3VBNGSVwebiYy3ykors93UuwdUKueksNAxvzmTYBdqj2chTGyJthG",
  "key13": "38fu4VT9abUGyciifqGogSML9kCBARtqjU8BXa3xd3YGFvQPaB8nVibL24U3QAPxvs1zqjTxFzyu8ohwNUuiWH7m",
  "key14": "72BWTpGJnwhwpRPiYzdzwPWQh464jjGAgwA6XxmpSGVyBwrnbQsLnpEh8VCkAhZHdRzX1SQPzsQzZpNc4sfq6gF",
  "key15": "4RgMv2PMF5WeZj5oYzGyhPJ6FRmwJgftVCfoiU4WDFRDZdi9aFVxbGXEHmoUgmrH5utcHH1BmvYGprhnw1eGFqUx",
  "key16": "5SWJJDBMF7E9pr5DS5tiPdaYTSkEoqoJK3bnxSTFMnfDkhZhrwbjp6YiYbTjh5jhSbE57ESZzMHVZfehtguGzUwq",
  "key17": "2j2SxWsFBtaK57x4hYodBvKYA2KtXTM8QQcAagSHC9tp5WDqJqwvm3MLKaZmz8tBZLxEYGXfV6S2PGs9bvhk2YMp",
  "key18": "2977AEVYRUp8Vcf2PQ9AQEpSGf27n8YD36aRtuBsNYqhcd4zivj2T7ddAJ3dCuZS2b6qHj5JbKL4wxSGoJXuSS1G",
  "key19": "2bomPW7SiFBFzCuqeF7YnRm4RXCC8JGqEohfaR7Zzg83EyS24gJGUUfuxT9ANpCV4SdQqMNtCLq6nQiicis9reNk",
  "key20": "5Jqd7fG13uvVmk53qniwyRDNFZ1HWAVDmr6YkSjnAw2GDLCdPonJtyNJNREyQohssCHkbhJnhreAUvj64E74ok8K",
  "key21": "2sKQ696r3PUUUpg7ViLdSW9SwH68De9ytNehVMxSzbonNE8f7A8D5EPHQJz3Me6LijWXMsvD5bSpouddhc992Xe7",
  "key22": "5cnx8pJq9pmfEkgUFbtHmtSP73voFX11hp8TRggvVmLrugYU8ddzJ8hMW1hjRDShCQjLmR3z7ZPUbTrQq1bc89rF",
  "key23": "2vi3bY3xPe2sJneAANZhbX6cqGawzEZ2qiVLAVKFptVSC6WS2rWFCQEdZ5CuHu8aFRDRtdrk2SkqpGBv2Km4dPqe",
  "key24": "4DAM2LZfQaNHEUgvw2EHttcTUBdVGHvCWLNV5NmcDt7J27rZTFmokbFeAa19VoZVrgT8KDVeyFL4Ax7AhPNzwgJ6",
  "key25": "381gM5wudNcGnDEqgkWY8PTkj5Xx3rkNiGuvrF1FQJZuMUF5W55pE8Cp4RNAA3XyVQoD43CX3fFDfz5SgH82QYdP",
  "key26": "3W467iSK9obZ2cTgWWSx3xkqbnpmLmYYENowP5bUBt6FTfKE4VMMMgRGRWR8a5ycPX8sQQ4Z9cfJMs3r8YcUq8H4",
  "key27": "qnLNmWzYDC8b2duKaryBqwdHjCyyrk9jSvdbpCrQaXBJBoi5V9yfiNKQDNZTuAirFTKqGUca1kLmHq39nqbXjrM",
  "key28": "Ev95C1uMUFiLtF9voS2v7wZPpoyGmx5qavXz7YjgfXwYvbPdWmsJhAn4AAZJAe5LUruW3rLvme8dJLAD48WMvFQ",
  "key29": "4EEuR84o5oCUkwgTo5rzYZZcWyZ8WRvjegrWoFkEfGmzGdUdkcei5S7jRfiW6SKMAQw2CvFMHcvtRjfXnT5atntj",
  "key30": "2Dr6BTotYmmQon65q3EB1UqddncSib16gGkk5FRTBJRx924WqrfZcGK3466NaZ8ZvmMmrFrCUEGAjEKJd4FjpuwD"
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
