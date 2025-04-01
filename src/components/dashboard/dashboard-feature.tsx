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
    "4hT4My7RY93a8hMDyjD5KcGR8sGkVp6W6LgB3Kfyt9kkyRC2oU2i7LddpQ7xS4f7LfiDaGmEoECuwt3r2REWqkbX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xiuzpN3TE9GYDbYy2sKmvaFDvdCN2wmmn6QVh7cXkRSGXezPMCDi7DpjunR6RSDJ9WoRY9jqM9grMbYHYekpx7P",
  "key1": "4bdQCb4Ur7TJB97HNjuKy895hfGXK7MX26GgyN9n6UYtyP6TZZK61WgRGD4oVc1FKhqKpkHwXgmmJMYscFsxvXKW",
  "key2": "51rXLQnwDU8VnmqRaN8MnuogxMspDUCh2MifHWXnG4Z7QS3gndmnPpfwRiJS7LPhFpoSCd1rWvgMTDvFgZPV6Y5L",
  "key3": "4ScTwuPaXFGGun3L25iXj7f6ikYgj7FFd84TpH4Kr8HbZJJgeCGvfynHEYZMLXNHUVmqMFYHANpbnYvbL1186bYd",
  "key4": "3TKRFhqBmrzDWjUBrPUBKqFiVsX9WgcsQ8wN4ZrFXBoooVgk3EDzM172uuLBn2GWF9i1mMzJsPg52bxoA8hmvg61",
  "key5": "41JwZpZkuKd6MTuJveB7m7DdDxJ1SjLSX8CrSQtbThCwU5x1WZfrp7TSAuuKFfESukiYVwuJUWdPAE4mA8Pk43h2",
  "key6": "2zDs4csKwDSxJHngLvrRXRUvZMQtj98ibDBjJcmDe8SbcwaXUb3ehzCPiDas37FTYb8TzyjzFtncNUXCSCQfWqZb",
  "key7": "2G5fM7pk8SEKFPQ2RapURybnL5LwHNbafgHop8xY94PwzG2Mxe31cJhEpMZmbp2u2EddqLSaC7JjL5uWaxS8T5NF",
  "key8": "48c3LymjzSBHGVbPM563JzcnwB5xBwNCXVFVcVS6MU9aMCjSeRxmgBQu4VWUSYaKYK6CwvxK92Bqmg2sLjtkhjfw",
  "key9": "5h5LgMhQdbZokoSRKdSbGa4ryrS8JpiZEDwRN1W7FKaruijPittNygNqj24X75kqpYNt42ARKih8RduQXS37pAE6",
  "key10": "53uzPH3ByuGEiPN5UCvWfMHHS7ygydrnHkSAp1aXmaDz4TMxhtjV32SgZNvr7B9JhVFg2KfroAenrTh6BETK4Dnc",
  "key11": "23SgGvmriux3RDtPCMJuB74ZpvvJ43Luoec1F4jYSQnJsNPLfi4DnNeaGBySyM4UcURsAtvMSPjJgZwHfGGsagq2",
  "key12": "4pNeHYaiPoo7TMWHmx3ioCoWer6yhCMuqs9GMGTj7XwxeCh3TPb8BtWSjAzs4aKGDNfWNdYcEK4LHgkE6PqFVymm",
  "key13": "4tjpuitPiafGf11bnNSZHPussQva1Fbgy1tnEngCFhB4pVCf5sQiHJT5AgpzXUucgwhy47qZve2Zxoi5DCAJ4QVe",
  "key14": "61VKube8tf6PP14yW6bWinSCmuadf4PsPmK9gEVbWLuzZW5JD613GRyNwsmrjUao9xvon1iZmmKhHpE6fA2Fh2K1",
  "key15": "Lva3XT82SByxJj43J5MNYmhjYjdhEN9UEfZQH5ipEkhMKd4o1HBbY8XA9AZvCRzfKNU7etYJDLAcUnGnCef8RHz",
  "key16": "iQm6nCwFYF9KBU4TWp6K5a91eUQe5vHLEi6W5fFgcnJqvWFQ1Zx4Vu9jW95goFdG1m9pYgMiW4WMHgjsksauSjJ",
  "key17": "5S3FkiE5cQXztxR6ZcFc6s4qae2d15M6cksoEzZatXQHbjgWzisYThrY8uyLqfJymFN7uDvPTfCVoVyV61yqytsX",
  "key18": "5gTCaj38KJPcgQYtfZKe5MrzKxdhUffYsDMbEYFhTexVTTDamnBhECbw75xCJxKrDZhcGc54D9kmBChCETNQoThj",
  "key19": "H31DwSTf9tavbDGY6rsQg4ivWSTCfWeRu67CoU1VaTQZBEY265izUaqDUCxAeyZTws8R3xv1vZCyu9ChW5PPq6n",
  "key20": "367H8skccjWXgV2nELVtYmmxLCUMYU64w3XUQkJxGPRPG18d4ZHvghFxkCAaDefqLLXQ5stnfriRjfmSidsLBeMH",
  "key21": "uR2cec6EhhmcmxvjtkxvVA94Sr2KMJpUFfkz4mnfkRK53oZNiHcWFymaMqVZA1SgK3d42xBcuoJpfoVC5Vnpy2A",
  "key22": "2TiVXy57aHnYfBKr5XEHvbzRcsm6t5mq32zsXsN6Xo6KXz28rCZvzLoDjKkjb7Q5eyqfj9dfB6wUHzCBEke5BS7e",
  "key23": "Z2SE2fgQQ7RDAu6JS3EEFJKbdDEG36cm21z5cvh9csjXcvAkzkFrXjMqTKMZ9qF8SFQ3wP7rBrokixTSZo6uiFr",
  "key24": "5vztaMqmK1scXnQKGr7s4Tiqoh5vHQw6AeGx1mUdTXw7ZLSaD1BUgWJUW21DKroYyykohCCtXRxaP9V2rYymPAYD",
  "key25": "3BYxvFUgX8w48UjrfzQoqGRmPZStrZPvHeG8hAVT9JWYxmXobEuahz4Md5HZKti8sroNU8S8PffUd3UDEfVxZ4hU",
  "key26": "2mK5kwLLQQPczpHeBb2KMQkF1y3a19z8aU6hArfigVvBZDYsyUXW4kSmP44LiaezuC5y8Xtn5hCDnUk7FZ2DVPiK",
  "key27": "WYT4VU2EVF4LHdfFtavpz2uoeipUHw2pqFKyMCMK2bhw7Lw4kwLTG467wWpR6AuWbszfr3VnWNE7j9ZuuHvVE7U",
  "key28": "5StVmUYV99arwTFKLihpYHJi5UuRXtjZ6jNRqR9hSVneayZ5oBhVp1XFCCp2YqbdHtbmhtiou1QwRgzkjHHAdrR8",
  "key29": "a57Gmqe7GRECXyCr9AtUNtyWwr3phXNKofvDgEMruSA4XjGcK9o6zhW4dX99CYjsFKf4EBk2hhgAP4Ub8TsNSvv",
  "key30": "2N48rm3bkmbxmejPMtRQ5QLgdzUsDWHFnMJ7bojwbGJk5DjJWzMJJXq1jR8x6to5EAVcjUXdRCqyCSLRqWGN7iPx",
  "key31": "47w8B3JJp7n1W89u1FZFYpARnkMUkoBqizyShP9qyTvqHZMmkopiLEGZsmrBKmqx8VEt5KSYCtXUXnvAfqs96beN",
  "key32": "3gPg9Dg8X9rCiVuQkcP4Xdotg17YT5dJA9ge3BPCSYJrF2gagJeucbj7Zazwe8fXMjf2VBYqkK7YwffN23Qp4j5t",
  "key33": "4i1CpgVxX3Z7H6mwprT3VH5atvfUQCz9kznv9U1f6TKXLgjYNKpg7gENuQwz9wx9AEnw4mtBeRrNMSLCwscz3rS5",
  "key34": "3Avx67qvay6iPQRwvhqAe4X1PQycNtdFEZytCbNUNAn8SoeJ7dSwL6uw1QTeZoDYgiVt2R1TGHGhVRk7Sq7GqDhc",
  "key35": "2u3bQeXbJpYW3EW9yVTUoQvQnpYP1UGgs33F2hW7nEDpnNYomwFiq74urKQSxSVWT1EWbz4cKG453JcNpEac1w9P",
  "key36": "41W87FbN4oeQ9P1D4QLGNH2Vso17MPvsnsh94s8wbE7ZeCCgqRArWkkVarGkz9UKEfaPpVB3LrWFUWz741xxSvJF",
  "key37": "8sPwCfphziRvBoNkmkCf7NhxtNyvKVqvFWYdzB3i4LTaUch96x78jkZZxLHaFiiqFR112rkiHP7KKQUUrfwbd3C",
  "key38": "2zJ8tduKMgwtdAkVz7rhFSKYsraPwvBomSbhvtvws47iPS2s3iCFV1pmT7qrbfn1TCih8SNLJf53mnboadJqao5z",
  "key39": "3rDN3aBbAQy1QGBUc7HsWNUw8Qa15ebrQpK9BHA4Zn3ry2dHmEnqJXELjLXNgDzocLvBvH5Etybaj1qdBPRLvjBA",
  "key40": "5r6qgqTKJ8WrYXoLRCtSsmYZdMqZRW22QU1XpQrddF7iDKNjS9SFUGsZeyMrujbwgSiEH5LQGXMVHtoBnDLCwzth",
  "key41": "55e5QBuDnhs8ZMeHdvdowuhcnVPR6hTZaqgUYFo5ESUTq6PexL7AKotgFkWfokfr64NnZsXMc4ZxTwqtaJdmdcps",
  "key42": "55wBEacf9yWZhP9bnBEvkKkuRPxCUDQX7EkPHgm4gjGFbH3Eo7STC5p6s35MefvDxoemTHbWGV24yTDYeXUkPPoF",
  "key43": "4Bo9qbmxDu5vSYmQLYrDioroMfKb6XzHY2G1j6nKq7EFaAJadHsYobkU1NdpwgMFQZtJfGkXXDoRGpu78i9rx8WC",
  "key44": "5MX5JPCUQzY6gy9e44HEM6GzvZv4S8UtFPMdA7r4h8iHNoQ3Fvhr596rYCFHYnnuouf8GarTyBKnzAeLA7MfPX9y",
  "key45": "4WRAT7uHEVxhR96mNphU7S6F1uPXEhgakvKGKXrpMQgWSmmqWsuT31cTy1Bdx1E9dffLdbm2LMi84XFVru2VSbKs",
  "key46": "63s4b5pznmwq5gfe9NYVBb8hHR52qKadSyQGmpNNPxhoMyjrd2imxUTDEdyroiEgqQSp9yLLX1p7b55nYhvPS1Br",
  "key47": "5vpcSwhc35PeB6XNPjgbRxPL5qNMcDBDxjWgnfG1kzrTbcCYyT8sRNxFjRvcb1k4q5k4HMVY2ZgVrZhJBnizRnZx",
  "key48": "5JmwYhxCziAiaCYzKY3DCQrhsVhZgYAo9WcGyXcZXhFyfHHPCyUoF4x6zgxmj75CobjEZQ9AZX1u9RDTH83p7eNW",
  "key49": "5vJi7T8SKDRuXi4FtyPZDPzynUUPwFAAAzvtWeLUEAQbsKZ4ZPkbAoaAviDo1y9ktCh7gxFx4QbQy6Ag5q94AnUX"
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
