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
    "2LRFxFfVqDRbGyETzseyLUWjZJZf4SJYxkudfedDYnTzmpkunTe2WdhNgBkr263g29pLwdo99o8BMoWMRqXsriRp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22yETEXq55po5NkBkesKrt1p6sn5DNmhkEY1t43xQyWQbHUv3brKeSdtV1TjHyqvQkhNsaefC6ZacvXrsCVd3kAC",
  "key1": "zSm4vKKqefQXkWwsm3EevwC15oCB9pxvxQTHM3rRaGZSGz8ju5aPtz7iHTMcMJXAHKub9iDkmUvytajFz1vkoUc",
  "key2": "2aYPN7uLNjZq95FcyLe6hMbcz323CjkdN1o7hNSXkTLrXLKkGWn6B8t8kNJBuo61TuTv8KHc5XC7EdgWfdX6WGeb",
  "key3": "2BzWQmi1vZKuvrKwgAhGdQsfQhr6RmrMCPEUeg8GdKqg7u59m1ULrGCyv7HmzMMVLS1fBUfmme28ds1h2YDqtz1n",
  "key4": "2mCVr1HLyNZ1Y2H8TmFD8VoLGcMZSRSV7MTvmfMQykJmYiWoCc4npbBZrP2n1P2PHXbPgjaFjGVqFeFecmzcj5SU",
  "key5": "TGasyCn24frmGJdXHBpQLSJgKermjUyDm2HqzEedcUck2YHHcNdQScyxifE6e4xs28LvmY5TVrgXb39d4BoxyeC",
  "key6": "Y94ibiGNKr8GNrr2orN2ThxnExi6q7M8Yxkxk4suhh2QhuxtSXyYPJDwEJj4qgFZZAaqG9FKzmF3pLmhag5KCPH",
  "key7": "35TSXphrCt9yBDJNUKyG3WdiPJMpKNtyd2k4aKTZWf2deDT6J3fMnALjmMFq2dknjUc5TV2UdmfQ2KKBWws5GaAH",
  "key8": "5JW4LqCcuKRk849QgVP6YF65oHHjC26KniPowC24ySepxXokJVSpeJFJ2NHGF3fpeGPFeSM1oMhE28whLetSMPV7",
  "key9": "2GisFCqGJWKckniZL9pyavtMzLFjUjop86hVMHsgnA49yegf9ACSw9pzACGQQXskeSNUdNcPZw6z9LjEG55LnB8k",
  "key10": "4HNNwS1F58SSfUDMr5sWHVb9euZgEWU8hJH3KuQYswa56hPtXsd953y1P9Z3nmXZjhN49bEUWDYwf2xcJULyZhem",
  "key11": "54nC3sGHucbta2rJBXdWnVejTZk8yKANEwf9xtVek5od4XnTcpD5SeUgnpPYCBFwGqW6XPgRs1WhaLhRFQeYaqsL",
  "key12": "3chbBmkAaxZbApRSiTwVtsAVTFPgm7SuZhpNAGPqrYT7JMZjc8RXZJGHzB5NS3HTpAh5PbqWRyEJRAifwvpUqqBa",
  "key13": "4xjQpEJTjvssercTRHoJJuZZkZdCBzahv1B1CgmWPsPsFKt5LyUQfnSarcMScxh81mKrTK2h1Qnu9ZarYYRtx5fE",
  "key14": "3yz2cA8s3LPw4eKyY7dxn3XaeNZmM2i25TR1oE7P3M1C3Lczf4YAEURtcExhazHmNDwyCq7jgTwjU7ZoGziia2Cr",
  "key15": "nRhi1wo9QLTFVr6RxQsHGAgdrWJCS4RnBWhYqGHany6zynwPDDGJyjXW7kqrSDm1Gn3mpSNqW1CzGvT5xw12mH9",
  "key16": "5StdbfjR4jEyX8Eobj6YmCg7HiwW8oYcEJtKwsWceYxfGSbTLXLrjj5vJYQ13TfYC2UoJv6VX8MN2JXbAv4cpnu8",
  "key17": "p7iK5DXtq4NZXB7onBztKyt4d6KYUVPfPq6ZXZ1nfrLKBPKGNpDd76D5yp4TTDvPWP7ZJy6V2heUxPX3gzcVuLE",
  "key18": "2ZcR9anecRyTTgecSPAUz9S6mJRqooFbyVTZ9r6mWn3Q5tB8qtHdL6tuNA93poqQdtneoo41Um4Sj1ZZp1ijtbDt",
  "key19": "62rvWs7PuwZdtnuCusa2xC6JajHkkYgBTKxyaobCF5TtYDnSNM8ohGYEFEa4fBejBe5HRbKGtMYw2gYwwjg63E5F",
  "key20": "4NXhkkvrymCsQNG6jqJsry7vebhxmgoqKrYDnYaCrWchdKWEKADmvnYANn65WVgcvT61KvCedwrYB2gXFrJTjeLG",
  "key21": "4FUb2SsHf4HiGzUgoXRFjPpZzocQ1kUQKkgHxHQkfLZUPPAYDiqKFZq8SXiGiNPGxW5PQfHLsFsHc6Pr8QyTJBYs",
  "key22": "2DcUeRhqCqwn8kato3KSxp8uYJXfoFcaZBDfiYqGzKmPHZ3hRh3xRXiFQAfKvKVjQinJEYGy13vGHd74fETcXU44",
  "key23": "3fEdG2JDbcrzNF9hbKxuBQ56e27FKqwjmBCV7ZNRtzejX9YdVe7oJuwkPRRbERN4KjCKh9kD1K3wzsgcQNvTpwpE",
  "key24": "525uDmGKjAuqtqhpiFhyEE9Tt9sN9DhdxwEe9HMsHJBcvFbcBfWguh2Be4xKwbEhDtLYm5NB8H6Aph7tmAEY5f2u",
  "key25": "2GViFhccZknW2qXRQ92BTotDsXwskXqWY3CYJ4WRf1k56WTFAjR3U5eMViUSP1GsQPza9MWGsEr6F7CtRYXFkmXV",
  "key26": "63LzGMzhUuKxzVeEEmA7jKy8bhabZYDEnHP9S3Tt9V4rvZmVqy9Gx7R8fWhtGgffwZfGBGxwsYNDNu5mKYJstayU",
  "key27": "3m6pcikSkkuxELqzLpxad3uGHyvZKwEu5YaxDJPfziYMZcvK5SUHh6t5uP9av3nHB7baaatvuDToX3CHpqN5GH6H",
  "key28": "42y4UjUuKmJtPqG1NoxDFvj1vj8oSMbv4Z16fy1ZX8Z1xwvTGoyWPBZvrtyrhwocEWfT2VLkV63tnwfKfuzYoJ8x",
  "key29": "2HqHNcEGEZ85YDvCGa4eDTqtMY2vU4o8tTDxw3eePQPYuudzzTBBWNJjn68Nx6sEuqhW4qQ7P6YCC8DPQoAjZZfy",
  "key30": "5B8wTiSm749HNP58wqkKzotAPk6H4Lu7Si5e5UVz6NbFVsCtZyQRrKm4YAoEd5N1X1dRPV2vPPdwMFwYDcEQVWuV",
  "key31": "3eDg1PHjb9ATxXY8eNZ99BV9QynxF7jhgkfvVvpZYmBYYaqp6gWebKFMxjiwibf7Jf6jnWnj5zbgm34yt6t8qEDc",
  "key32": "5BctXGnyEcS3BtQXCa4ZweS92mtvKxYWMHqc25gfjEajm8nuKBR3XAxf62LwfMX5P3tiV5L4DmkEKDGKmWnRfZAa",
  "key33": "2ufiGUiMwY4ZmJNY9gFskzpbXWS27tu1Gtm4TDcTy6issncwnMzaqqLtqVspG8h5TbmQBuMPQpjJrzePj9ygN1tc",
  "key34": "35fhGbkbMhzXKrRxgujz8N8nGboHUmP2b2zQXvLXYaswMVRwb4a6p1UNpvK5bkqPYaMpHxPuyi1kesoDV7u7hpUu"
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
