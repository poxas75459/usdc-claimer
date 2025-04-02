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
    "54eGYiG5q4ScKKAssL3UK9FwYvwZqMLZ4Ype8yvSChUxYMmAWhTrPP123oqzKPzMXaYHxdWhaE8SxNEeBC33pXBZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5N5Cvj7txrbsm28hX1yQvAYtSutMCirSyorwsj7RXGHUdZNw44CU2isZHrhSvqHULt7hRKHUpjv3r1WFDr2fwBTV",
  "key1": "2trJDG4sdtSuxcfmmfaT3LQdNRY5WN92jAdKaRzpWBLfkzoFA7QGnmSqcmGtFiD9BfsqrJ5zyQgA9U6PvrQVLccN",
  "key2": "Zty1UDMuB7XjEHTL5r9HNLsCvzVZWuNR3meJswnz3V5WZu3vg4aFDjbxpSmAf9EwE8K6kDrMq4oJLsryFMacYyX",
  "key3": "3udtsbrRxQEi5tESPU3qYcuiBHQm5S8bnNGwVnN3jCyJHUWJuQnDATAwazik5Gu7ZTXLmXh5T37EYc5siMtwnYeA",
  "key4": "4ZncudhSyBVhiGAd6WQyy6T5HuYNkEKpmNmAnbMxUCBxbFDCAyYhf3u8UA1CuRfiwf1Sh8rob6aa8wnERB9pYHKb",
  "key5": "5f7xCfM9SfEqd63M5pH4BppXZN9SRbv9i3HAd4vmwh9RWbhvSmRWSGMdrBt6yadAxScjo6DKo3x7TioZUjokm54N",
  "key6": "3T7UJasnGcXQCDQyLgrbsGj1cBe8KpG79UydS9NMUhX351jtasKieMTEB1MSijVVNLiMT8LJtVYrFQxpXd7f37St",
  "key7": "37dMoSSwJnGjFy1nLSr17joENoiccWQLZAZtEHggPZ5wPN6Prtt9ALm1pvvWmAyzsf2oc8KLA3cddVRDy3aqTUNN",
  "key8": "6PvF2xvqXdqSWPEWLYtvAouKYwc6DGs7NSKoVq3yZj39vXCW86KpUfsor9ibvQ1jz9WuPwGpPQqqeFNFuC5barE",
  "key9": "4Vec3spBZNzM1xSEAfakn9H7Fg1xN2b5zUPuuKBooVDghkNWo5GTDM3etKHcQf3chE9eUjaiSJpgN8LGVGEPinA2",
  "key10": "LNtXHMRrheFKs76W3tNqqnHX2kQKAaf881uhbSphUPbrjUyUZyvsjQXbAt9P3Fq8Sn4BuMmWTeRygEzeW9tCWKY",
  "key11": "3hLSHRyrtBJYbA6oSNrKVK2CyYRwEK5Zee3LhftEqRyqjgZ35EhBy3K7sxBoFDx96CXHhCgjWNJEnbmd6n7tRJKK",
  "key12": "qzWU2M8g1xvuTcpM1aFt5JhpNp5Xj82MstHKmnuWKqi8P9kCrZPA83aaChFkLDKy8nrrpzc1tXk2JHL6K2AMitt",
  "key13": "2dkwNW1wvoqC6Lerd4AzxWmRpHFRyB9akcX3AXPVvCrWbPNcWEFzZZFyWncU5RJgwDVDYBhwSmnV7YoEY4Qtpvh6",
  "key14": "3m3fKkRDHpGBv841xJsRadBsD5YUczVGfzK5bibT8jRUQsaG2FysiWiuX34wUDT88hwXpcdP7U8CYRo8mXimHZS3",
  "key15": "4kuP5HL8Tfd9WfoqvwkuerRdMkJxXWJXsXToEQ6BBEBCryscbCjvwTuTggE4Q4B77tbSiWR34foq3cNCK4qbNEA5",
  "key16": "3CZ1Qwj3re85MssEz1HmDJUL26tix28gszuJoEZz63fhwiWn7nxUWShLrgRoYbtJyefcooMvLpt2ywhhxAe1Yiu1",
  "key17": "33HxY4ZV912tVh7QCe6NfMmnUSpJc8Pwxmz6sksNVDctfi7pUHdna868zKkL3Jr1JHrkg5sBmno2daFkPWUtHXDU",
  "key18": "5p2cdEVAi3kaNSibFiRfEpM7CGTL4Qzzpk9r8VzcP1p26qjZBaGiYbMm99Xz4TWosxVEVEyNaigbZWUtyUbzCAFb",
  "key19": "4EuzKxAUkFQ2Ktiehfj2QS734Qesy5vibTBixM4LhzxaphYQ9RyiuXDYCR9W6dXCEf8bqmqkDCh2BsadWwJ3KPm3",
  "key20": "3ucnbVXf4cxpGdFDik7aPJdXm2dFR42vAGAzuLmVZeC83Ti25EaND66pwttjvdF7qP4aqDqaSi8NjdXy7GC4d2rR",
  "key21": "6G4UZajsMHv6mUQjgB2T5wxMG3N9xLgxSvt7GFPDPaVFTWRvy2Bju4txaWAkQMq4h3DMfNHPuj5FYKrgNbif1DH",
  "key22": "5Vb5bKXq4m1j1dUwfjZeJiFMhYCpwHcefYEzBipUPuLTMpFVZCi7NCqs7KnMuoBde3NdmZer2u9XPTX55Nx6K3i1",
  "key23": "3WeogoYLqEnBZQjmUQzB6yXqUkbmzWXYjuqkub6z6EhXB95Dn8JZGbgmfZgsxdRGPGroFy5bqoQ8Kr5jQzUsYMtB",
  "key24": "j8HvnfvibnbDdQ2mQzNkaAnZ8GYWJtzwQubYbtxGTbxxwFZzAqYVwFypSgd7TzaQf7iJf4FTRNh3KRgBM9m85og",
  "key25": "5LriiomuYyzpMTdC3PsEqFi7eptMniSs4ct3nxWpG4miMyH278tbZFLKDXWmKic5bkB5U1YaP6qersFyHavQ9Qkb",
  "key26": "vvJk9yheczjEUz5wWTYskYWwr6b2Q7st1qTCrAB7atskbBYTqAjU4YajZsh1guF9tj5JnK9qRdcYJDdwsZwYHCE"
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
