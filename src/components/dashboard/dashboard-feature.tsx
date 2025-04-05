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
    "4mq6hYM64bU5XaqJUyEHuGsuQJqUWkJQPTpFzRyu1J24AkJrtieP4Chf2aX8qGopuU3DKb1p4qUQfy8v9PwyGnwp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FBmVbEd4NUvr7uumW5tmW4kSbBaXmuskwY47xAok1HjJqC4qcL2R97cPvodJ5J7j2mauiUcVRriKxYkTyKf65BP",
  "key1": "DWBEeKSWxVe6eNjD6ZWchHE7GWMkyQmvDiP14v6SbSbfLpYudUi3uKmJKg7McttxXdFsdp8kK9RicNfXmonTAKr",
  "key2": "hb2jroRNLpHvWgjGHZcNiravBymLvVCxzQ5kr5xxHT1TSQ1ybdJGsYjMFoY6kYY5QUoWAunAAbkRYSTLgkdeJw9",
  "key3": "3P17AeYKeQc2fqbp4Ja2tCQDr3PrzBRgeo1i4NfdpizXaJZ86E1VKCqp9oh7XMtnN25aQT2MwAu7yDdoWgSjcnjC",
  "key4": "5u6ZTTg45zZ7KC1tNaJpypbDVJkoNPYiysbAZunTvHvrEvoSfouMBPyfJwJbdUBPYUUkCXoDXJ33EkBXaW9aAvut",
  "key5": "3xcabg9Bos3bSDTiAnVhcw2oFXqMQ8kvQKD7d5zantTFvabVxGEEpxrHQHg5yP1QBGZHKC2umb3wAPiwqFFVfGEq",
  "key6": "3XCVmAPNqUwjGCS8EpcYVy3bW27Rdcdffwa8P5Diw72iQKcop3n2HuMdzQSr1CDEXcyJB9ZjKCb6NJ4MnY75CHtu",
  "key7": "66rDtejNFuTXcdHGkYbSt9AX5tP8k2N4wtaVJymbXjiXwXq3vuxjmodcgKxcsJZG9WzCT6HiiU2j6SpryDzXvauh",
  "key8": "4aNeareb4ahUqytRCrmRkF7fX3Da1QPBi4H2yDhgd33yTE9GDXqzVVgub86dwkQ5kiKLMFVPsZHivgx3zPdeLp1k",
  "key9": "5GqTSA498MRXncJhnJcgUDYRyvmYgjfxKLRcqKEBUqeayAmWMr5Tr1qMqow45Mg3ouD94LEWw44yeeai8RVTR21Y",
  "key10": "4pC3worwiffyCKzQd9v3Zo31wCXc1BvTAEAjZLpNVodYgrYrYaNB9DDFjvzKYft44zEqDEStRWc5nFukT8mnvPxY",
  "key11": "ZRrSi1ZD3MxSjjYQb7RSnaovoKft6iuAP4KresyzDNhMzcqqj1U6H8pv32QWieYDM3fCP77WjnuT4BfhiFZt2b3",
  "key12": "5PFq4XP3gJJxu2VuNFbPdXFF86HprVKRZkmpnrRbc3qm6o6pu6eGN6kCgWmArN2GETG6P2zieamqzbLKW7hmfR6u",
  "key13": "2gAbrcA5AYpAgaD81FmefDBugC65AnduTmpxpjQaZ6j3LPbqyYyWG3NmTTr5kBPEjozGhiv5uyzejb3emsUM9hh2",
  "key14": "5jL6bvgaSYpyfHxBMxa3zua62qTMKJEf1fuHgdFAU21f8xyr7b9q5ioEbeTaDAkfdRcaJHtds5NXZffZTJ6aQkJ5",
  "key15": "479iaRvgVuai6yjYnhQsGmJi8DfqxKR3haE6PecugBrZnjpBVL2Xbw5AUFLEjb7U7Adpha9xR3jMK5Js2UdUWnP8",
  "key16": "3cJbWsNgaeMMML3xZJriYuwHFFvWjvYrP2SyNjW9ArYuK5KQwfHfSESPn9PrWfvEVCw63Hw4KLdmNDv11TmiPeHq",
  "key17": "37MYbir4rS5YZcnSXrdpa9YhnMk2Mu6pK2ChHkFNF63sGQboUbtvU2iyUgyabjE3YP6gUDFwkY2HFWjfr2V4p5dX",
  "key18": "JfNPB4MnmfwMjgswc5Db3WrHKkBgTNcqpurjFY3JqkG8uCbBBZk6yjRQC7A3vKS8iZbU1EuqgfpwWKjxBfoeG9N",
  "key19": "2r7HJTsEScJGbDJoC75eF52BCebGChRGFaq6CxwY4YmFVfZ1VZakfzKxtC7yiRLpftzyjJASkz3MfQDBSmjXnGhE",
  "key20": "34Fc6BJTCGbctr32xkKZSR1o4LLEYwJqfF72WwGF4XzH72CQrYC7SmQSM8GDo1oqPfMzmXxx91jUX64HMAfjoEUj",
  "key21": "QrrJ9YosfZzf5bSgQSn6Kmw7sauD2Q1VfHFz3ALpsKyrJT4FL9RhEv2VFnJA4mCVJapc5m5ZRHWfN6QzZMxj8GJ",
  "key22": "5MU4LSfVqQmqoHQKfS3dPGej4yHuTszyeFonizTuSxCLKEM9Nptwy9o7gD1ug1WU1fkxfSPXRvVb89E3zqqp9acu",
  "key23": "5fbi96asPwrijqZNBaUzJGVg3XhcRAtWdEdWUJx2rPSTNbYHjWJnFvAB24WCwTjg4ieGpKiRQcTbFe6zE8yJKHHn",
  "key24": "5d6au6cCpXSo9w96Q65eMbkeNi6EjgoA8CnT74RnwnQ9Lw6nw6UK6HW52SyYsa3JifWizmQmE5s8nDDMkkt9C63N",
  "key25": "36HKntXBeWzR31WsfqBkmgtMEkZb6UWS8UwGkPWosMXuDDX7iNqGY5g8aF9bKccXkNUamcM24PaUi1jcGW7xc4ST",
  "key26": "2E7VknykUEVVEce7iPy8XP3ib2SraHZ9fYHpZbAqUbpkc87NLoEiLRWSkkbxPHAwYH6AbGVb3MmgckiPy6wmij3E",
  "key27": "5swuXeMTDSGiUznCmD2aZ6hDcr9R8FCYajLXcTFcZgp3w8p6pdvi53eLYxrAgCaAjPnWxJCNtfh3cBxxod5Cw1E5",
  "key28": "58UNybreg4F2v6QqWjVSh8Hm2ZR1NBzguZEFyEUbMEfAA8iFzvzEs4qVxRik2zjgXTbK239k2CoBL3fi9kh2mBPX",
  "key29": "5f4nn1gjRzRx9zmLRfYKZ9LDVGm15X38tW3NTzMPc9XUZCbbiL45KHUYKSe22cqFxgfkjNyhNgrJ2V6gUyk7d7Fd",
  "key30": "uWNDmdpif1srv1jxvFgcW1Upn8HSkmSBtuJVWeoewScHGkqbyraiNj1S8c4EJ1EkTzK8KbCNUiUXHE8paHqdE3s",
  "key31": "3kGAUiBZsVcvSu5LgPVcECWR6nU2UwdctULAsqM5zJhCx2aDftPu4zbbXScx2wwbS1tq2akVErUAqwhqhMZV71cs",
  "key32": "9Q2D7A3Pog8a1ebNbxgXPQED8a7Xz6KPKRV2xmoCcVyVJGJsYRrUY19HuGBqHPDCDVEnhnVg8yyKi7GK1ebwp5U",
  "key33": "gShDMjaCimiot8u1iK4ideqJCrHvEWo52Y7e3HvGhS6MBK7EWuQpVTRHn9TLQADW1rFtfEfLTMECWq7Kx1x9nQp",
  "key34": "3fEw9xsXdsXeXeup5cQ3WSzqg6oJtSEsDwSSv9HgvVcc5EbyiYyCsgcZhhNo6PjuHyZfRVGC7rtjK6ZcLpdQRNY7"
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
