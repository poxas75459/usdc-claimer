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
    "2kS8nMHb7jZdBBf7pCbvbvytHLmZHmanB1v2smo8PueBC5dGaSuy4YwjkqnqkDFT7H5yXprYRMB98GPPNYEhXgjQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NAX4RwFp8SFuWhzD2PMwDWPWjZsuD9jM9H4dopHAd7YjajwJ7uRfAcPh7pHMQ1vk9W5aXGYwd8t4Dr4W5F2LYa7",
  "key1": "5DLnyTTh4wNyNMjChP48ZkF1juWTxwGNWpdpUFWDQVFa7Xv6Z7Ne1WYT3C4doCDbXPqUZqAfDFkRXMoGo7SquSGx",
  "key2": "5S9FEDCp7rmRV9vx2JMpLoKKKXMrePDE6xhx2rLzLAwpxBUfqed6dSPKCyt2goEWZvUMgcx1nseEcdG5EcVjRicS",
  "key3": "4okofS4M1aR5R3SKeZJXPL9ms6ZzsZFxMHCDzRuChtSA2HbNNk7PmyGjaECpc5DPFAFcMRdfoSur1uBk31XPHGTi",
  "key4": "5KZuyxqaCv2PT5Emikz139ubrXF1X916b3Wws8m2ioTazp7tQ6nqjKzn3jXuJUGbhHWVWBZDBVRudKY1VUzYC9qm",
  "key5": "ixK78wBGDsJ7zryHXD8Jpc66jifw4i1fxz7qKyZKaUEahiD38KS4GC48c7MQphwSE6bqZp3BMoZYeNfonBcSUSP",
  "key6": "yu27sxcYbyPrMTXkxfpUFwkCaxExwgKvsMrfkyRZ5FS83AXdDn5Qpp98FzWdHRgDhCXciT1TA9xUZLzm59EohwX",
  "key7": "w16rYCw8LLkWDW8j9g1KSf7Zh2Lxiv7KxPgPFd5sJgDtXZ6sVShb1VyorD46EAmUMVQJYKgUPSACRmfn8J53MrT",
  "key8": "4nqUmCY5Ji3KhXnRb8Y1DQpYyFrPQMuAL6PKyCx9mkmVFtfMZPbKDPdWWiBt7KYbg1zKWQi9AuCmgDGBR9JSURDq",
  "key9": "31hvAtsiLmBuemWxw5dEzJzcpWWyhKSo8pZojJTpEj2LyDDPiMhoWc9ZY5GvPGo2mUoDEGuLD8HeecucvFsyvt5G",
  "key10": "2NGtm8W1vSfoFDXrTn7zS4D2sm8coi3aybjdYz69fDbyb4PRybu2cZrRMZpfZ7v9W7M59QBitqECpKBw48uneZJH",
  "key11": "5p3r4uzfQCYqdv8hdMvA65xJQn2BHio7KTu8dTg72fUrNgcw9DAzBkYrM8nLWVhyidTDAHDqX5FMd41f4Szr6Uy9",
  "key12": "4WGmKUzREwm2U4V1LDFAEwq1sM9Xu8zxN5Kn1KYAU4auzRQxYXuPAgSRFrPC8zWzBaTYM8JiwzHLEUUk4AhS89tm",
  "key13": "3FcU87RB7gFE6JF3wx5hMkz8pHrLAvinKF6s4b45RfBaHoT1LfdUJTJ9jCeTpdRGjWfpSx4ci6PyutbfyWwoPpB7",
  "key14": "4mieTSC6UFtYYeeqAVRkKJhz47UWotJP9Tpx3kjJ6mFJP9HvjP5qWQez6HC44mpFpLGozEt6ra4RioLmML8t2kiU",
  "key15": "4zNJYzbEKdVzurzDT12S2ancyyb3VgfjBmPao4ydVEZDdSpLsga8ZTP996N22vFShoj1mwx8nZCXyZ2foKGssMfi",
  "key16": "4GoYmo4WsNVPRZzFox9dTDNWdQrRnxKQ5LxGzNhoJgVARbuQEpujbFSrvcMycHgCEiSrD9dE2unHjLEhmneGieJZ",
  "key17": "3QUdUihnAow8fpBy3MWq22c1ebEbZPYjRYKBC2jcbhUufTmtqh8oC4196LHV1iXKgZo6ZdTpa8W4tqCPKgjb8JF6",
  "key18": "5tRC3iK9APHnFQMXHinUNPRa4FFeMRyRugUdaxj1enSGdZV2ntLWcYkxpfjcW44WWhNM18oyYQ1j1AscB3T6nwax",
  "key19": "5qQUaybWdHCu1ZCAPaKM8LnEizmDVUL9Mw4tPuoQXxxBmft6Mb3WQsHz6qRYCji2gkPnT5WiSLxWf7jr7TWZbpEP",
  "key20": "4wWTMEFctjXrU5oNa1uWKC1yMwybd2QjqWtr9VZhKXz8GtVLH332DdRpbdcfGh4xRJwkEtG1je5KiTf7B47Sx2H",
  "key21": "3m1wJJZTrgkXWMgeJVpSuHnaJTX4uSv17mR8ZqqSc7sqJKLmicWnQz4cyR9Pe1SFErNSfK82Zsfz1NpQprB2D1TH",
  "key22": "28PX44PHdpdPVjwn4VcAS9uCA7DyEfdie6nekKk6H4i4PJixRHPZ7f2hhnjNyH9iTyKTeBd6srPy1q5p77bz7vT4",
  "key23": "RqTFkLRthPXVEwezXWuVBuSm6s9JjZ7kXK5pqjSyZ4vdNfSBRSUmJXa7j1fYR89wd36M3tYHxvbPnqJaAN6kdd2",
  "key24": "uSdAZRmekZja9hs68r3R3mDqhmWCjTvvDpVQc1XEPJuqouc4ZnMxGtkXcgKzBoXexDxWJpRN4hbqiXupneRj8w1",
  "key25": "4KrmgkrEPTLXSzsXga9jHzbFX1UEovpos33vk8FcPBfa9so7MX2ZRDmSeJ9VEz1x1hxwzFeZYS4CzPk5ECji2DRH",
  "key26": "6353LfbQPEbQiGWLopwptbK2bhazBRnAz5NthCKuRK2X3QsY4VbBxP8etk2bYd37EHWuqFNUNB1yVmqryGCeBFGp",
  "key27": "3mX7QvUMmDwc4v5jRru5RA3TCFahNJj9cqgFxJ3TutjKoKUx9usYPepAM2WcFmYdUFGQB1owsQ4oGciSEzcxJXay",
  "key28": "33yWLmkGyvWu3uvgveb6MtKVGKQGqMrb3R27N3ZcUQGVUizrqcfQ4PdHc6XJhkJ2u6f6trH6bNXyXEExjPibta38",
  "key29": "5959eUE5P6pHUVg7H2RjiTSFckFw79X2fnoTVDhV6ieUqDCMKm7b3nev6QgwBFCzUtoktY54oqb8U9eMerCvA4Et",
  "key30": "2LwfUQA3rkUCsAhiSZd6RQwPgbw32WC82Hc7VHaDt3uoNGe4s5ANTfquTvJZBEUrKmWETxV48oqeLMMTHk2B7rXN",
  "key31": "5nwGBa9skQpdxMcn8vkNYgEKz7y78dUhs5UBj8rp39L3uFSQoCjBTpzbBwnMV4yUDwx4Y1zVitGyVd5zKewsccQ8",
  "key32": "dHu3KwoBcxJMm958AaxaHaLEoGdQgTjrTqY3mxbnZUjw2pPmyn16YWgddMTYPeQUMYNHr2tapYTjEpxZiHkEKoF",
  "key33": "MB2LPMwBxbHYWvWHv519ZRNvmL9sAPo7QgEhBHMKQY9wEpK77QVbEtSTGQcxXyyxNVdisMKjs3pBm7LgQVYSunG",
  "key34": "T8SieKtkjGc5GVnX8SeUeFfnEoQLtdvfgMJwAkmmzZCCoH6aRsZtfuyRSK237grWdecjE8Qq6PquFBQPc9Ldu3a",
  "key35": "3dd4wPgh7f3JWvqoLoCuA7pn5x5dErspd4HZXB8GjUHRe1LDmi1u9gR8gsGSPLPYqMeFaE284HN8mAUwiKCxKW9J",
  "key36": "5qwEsjSdpw7hasGBNbgXR6nmfyPQrQiRobKSyMDYTseAt3ktCKa26jzP1jCXabwsq51RjGDpdWrwzWa28YsPodFL"
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
