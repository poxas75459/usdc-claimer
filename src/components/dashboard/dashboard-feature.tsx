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
    "5dVCBj54XKmQ5YdDeuRePENkmzFfrwfyyJEJGDbhpqLjFwkue3HcNukGj3DkbfB5apxGTuTrqZCE5NZEsT6rsiF9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4a9c7cC8z5azHSVcYW2aMwuUUBoctoL6yFNR9E7EFnCkvEspinsd7CK4xTbdkGRZSF1JoaYQNLV5nCE8MzSZDnXw",
  "key1": "4VWzNHCobFCNvSjeoZfr95dEAZZ47oSADFdD2N1S57yBudgX3r8iMkVZuvzgcmLZYhVTbQg6sstX5aiqpwjb66BK",
  "key2": "5byjWx8aRNrLRGxyKih4VuYXMvkwLSp6kYzhNPgwzSmwzZq6Z6sDEaAczb9LJXpmkiLMuTLyn73orqg6R9Tg9AZh",
  "key3": "5er7eg18PDPuDU39S3nDcWzLRRoj1JGS3d3e6H4wdfvtZBs2cSicd4HwVP9W8wCJnNnMC1ZGbJ1GB7RQv2sG1XXF",
  "key4": "2gb38U6eFyYeqM2ZnuhbCoGBXbFDuARXERW9ELhGSY5U23B7cq9eCyTTrD65y687m1Lhq3RFHb3umD7TrUPEvR9D",
  "key5": "ciDxDjn6KHtztwf3htXEGwCGxi6R6W4KUfJ4w7DqL2D4og3d9ZNBYxHjzqmxEfJywMokCJ2ZjWTmgbvuKep5GtX",
  "key6": "2BTxD32PNceZ5RJGEtmH3e6Msa1nFwnJ53FNAkbqyp3oorsLhhdBwbWhxkKiZcg1oTam1G8Vvg2U6vqHvaXxHBez",
  "key7": "2gTaoBRp1LBiejaGfvYi6LFDFUGezqNkMWySHPWEnEU27qFnoKTjcViBBQQptz8BMbNXFyiPGewsH8sYYAKmL3ug",
  "key8": "5Pu5GQFC9HiwoTZAeyBSm18AQnx1fVqj5eEsV11VEkrTQEYg8xfjgjmbeyYaRErJZSbmekT1A13Kz5DTWSZu8q2V",
  "key9": "2FkxWEBe7Bgt96iTrmgXMh8ebHSN2WJL7eXkn9ezKuKLmGH8f364TNFK3Q8sshdFWJ2ji4GXeizaTeeHRJPC6Tdp",
  "key10": "259mQGjjXH9xigJFiZu1KjGRe1o9dJ4A89NTEb7p6FA4Ljc9qQFRt5UNfWFg6wGcnKHavZ82eyaffv4FBdaEEkBU",
  "key11": "3yEKAZVSD3RE4rFQovpBo4YcXSFLGt53pkFXTfm8i4TrnAAt481MDzFekucP56yYYfV5yEugvZG6toG8ezVojPTY",
  "key12": "5uhwwgUMvp3LkJnEJEq8uq61cAcYLmd88Zg4ADJXJS5uK7eJLtuAsNS6byFUi6byvWkwDahZ3z67m1SpgSJDLx1j",
  "key13": "2At2rCWd8ZVffdmKxDy8PQsyBFFp3F2bHwKTSSATBHBKjQY66MRFVC7TgvbLjkaquX4XdLagLgJMHTArSkTRXTuH",
  "key14": "3v9ESiJEcs6CBxtnypuVeUzLveLxPBjq8NyKuXn7NhzSeUHYXfZ9Nk1ExvQZCMo2YXFDMvUSKa3VxmpByUyu7jTS",
  "key15": "3bXJgQQsmnFSU1FJZevDqfYJ8DLgozeX6Q8L9UqTqbuY326iJyp5LnA3zKFRxhVjdVK6T8yEC8cPKekmvdubHGTs",
  "key16": "2Dt76fATt4Q1N3U1bevRibGfEbQjQkewXihvDmBrExorq43Li15gqAKqiFww8GAuNJKDos29z1nK5KT5YTX2UEx6",
  "key17": "2d27vyKigZeKHzvsVENUVVntzjg2jazLTktUYpjZyafQqmF4CeJqLjNG51taCT9615hhUJS5RH7w4D6fsggkf8Lv",
  "key18": "633r46U2VEypNznfSxCkJYgjr7uF9vM3rxMgM3msvuXrmQdchsUBVQcaLMz3TnZjApJJMTPMB2H8hMNL5FVtnd2z",
  "key19": "3HbhreJTZUHn3kg6m8qw9BFV79SMH1aVkMGQsUXs5xqBgBNWCvb25AtBbggvr8aiXgNVWJonLZjxKYY5x4oosNwP",
  "key20": "wWihGryD4HiKeRcLgjEvjzTanx4EFsZTUpKsB9N45GanFCheJobmxjkdfixmifBMD8q95AJApfxpQBphzfKbdyp",
  "key21": "v6YDssXkaxvkFB6SiF6Dpp5FDJyxyaDBfNkvYhKfQiLjyLtCf2UyWEyWatq76eTiN5fZaUqafNXLrmzrsVQdgPZ",
  "key22": "4FivzKdsngaKZtYGF59fFvQjTFoA6rQ6ZGzT3JgpkH821rDUTTgAwxYP3k9Msz7HdCaVsx3rWHSAk6nWpk6sB8AV",
  "key23": "5UXkqyAUc6yZgv18w6M4EDyfJsZxeGzJGHYNVmRgQpajNoVVdMMUxFXuCCBGrRYYuaG6LupJMDsRd7ojcAQTCwWL",
  "key24": "BYP2qh8B7p8jsFkgyBLnJyZ1ny4TFzwuGYE2oLa36TFnWDYJzC46hUqiefTzHfyUd4bfQCATZtmbx8Q8MQ8FXY9",
  "key25": "4ct2qTWq8M8FVbW8WXRwwaRWsKxQi2byFjsw5gKmzMiXAX2X9xDhSGqZQ2aJpgKAhVPVhoNKEvAgDH8jEQYuKr35",
  "key26": "5PrQdYbFRaMmvvwFpQsBi9snUZQgU5d5HeAcNwPx8DTqF1xcEk4W6sgiVXRG41LkGmzGY66zz66zDW3mJ8p4oaXL",
  "key27": "2wR6U18ZuZXV68rWw1wKqa4a9rJBTTV3qxwpWffaBJdL1VjSapKk9DRdq8UGovn5eWiWtUvhRnXiQoyYeYuZma5H",
  "key28": "2AHm3qbY5nCyswjjUAda98JZEzAA8Rzz3UJ98QPmUevQQvqHaSH2RwWfJ8okRWnV4mBbfvUJDvkJ5YQ4PCXVYXVA",
  "key29": "4aqZEdL2NsUrbPTetEDhgoQ2rQV4kbfUwEhWPqvqe2HFpts4BkfNXGNsv8J45eQ47WwqgqvDCtXJeqUjz51g1i1R",
  "key30": "56Xjeq8sdceXKGbowd2JyKrkW3eBeyDrSh1GuDm6HNJtmyMFgKBSVJc1oXsdrT3A376Z7R967TJQFHsPEmpj9Dua",
  "key31": "39gr5WwJUHY9eJ1J4uQFgF9LV7ugyMZuibeTe4TXvoqvByMj6rZaiQW1SmLNF6j6iQgw3cAQTKCvoe5sSCeDw5T2",
  "key32": "5NQnMGxm7TDHs11MeaqUvdmnfzFJSyMmgYjRYGXpa2Ydnoz8QXFnd2HRcgoQ5LmPSfMjGC3oTsVQKU6DKSEPwAmH",
  "key33": "nGbv9D24PkYWk8JrfrGugd3qhA4pHMFVTP2zcqwPmXpCxYC38ZcbRqUA6PTJh1rrjZzjsA9VkZRABw76ShZWXFP",
  "key34": "3nmMhnH1kz2eerevvXTFLT5481T92NfjfySgxVBN8EZAxSNgN9eegVUEDnwkYgaX43bLzNAEgSL9GYgFj55PXWX8",
  "key35": "2671hgUXiFjzbbForfeN85enLX9VjPxJmsorz2ispyAaxpCccYm5cVJMdUbUJ6oLSxANv1DGcfhTffnq2XdipPp9",
  "key36": "4Wp6B6kSCG5J65nJZ3A5nN1HMHrUtuXHSGvwam5cRFdr1Y4yLdEDhFFcRiZNsBfqJMjnEFB7QTQghHnDDPkhSibJ",
  "key37": "3oqL8eWYQmF1wr8kCmuEJuVemnwpRZabEheP2QhHrc7Hz7fiw4j2uSeX5Ms7Gs68W9UngEZrCenFzEASERDGcbKo",
  "key38": "4AvZp72pdnJET1iRMBA7ZLwk7rPh6wtSYaad4aa58YpKtzWiazH5UfxwF8ksGc9nUtNvq9TQYnXPiALvHmQPRv7v",
  "key39": "3b155EiF3cZmqWEeK1kJcT4bD2GsVYdELzM39f8SLnXPyPvnnUzTLUe9Rp4NZTJUxNJuDdkrZqFerbtMo4kBMQZR"
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
