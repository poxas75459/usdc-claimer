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
    "uL268dFTXFJTKpMGWxfct3QsnkE4EE9EUMyVibAhvMLQpgfKfn1RU5L16MruUoDWJ1BoiXc3iCCSJP6uYavXfeV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XmdULrLcFbexdzw3KMSJmEsz4fA1N6Fmt7qux4LY59FzGiKnvCXgRtTJtMijQcc7jsV6rh6zVfCWnEWcyYPFNqi",
  "key1": "2Vrv5ufKQz56PZBcg8qh2MXEU1Db7cnXygJP1b73pKPcre4NHzHMYsJemif3uY1E6TZ1M2GHPKAZdcwpgozYfCef",
  "key2": "3FJvBNGPEwKbAwUXWGxLE545hXNfRwhUQZo9GtoH8zTUL1ZVYH52MkNWwLoV6tQy7QqfkMne8aqCDTjz3yHhLKFd",
  "key3": "2PFqVFSvDW4ifteERtMMdSPE2nUPDCvWkQX8whqL1BXUL9sL7j1TDxLjT4MhcEtpqYLB5U2eM31vHCi1A9WFKcpq",
  "key4": "2jJTky4DRrjUVfN8Lebr7vHYUwKyxTLQHVfVP83HXFayx8gN8MNcFLLMuK1aMz4rpzoyMuZyntbaR6tn8gTDYVF4",
  "key5": "5iv1kMg72KFZEEpMKPGGwxEpo38c8sXKFijDX7opHErJWtef1xj3BbAyg4DvchANQAYKHtK7g9bZKPRM5NvVffDu",
  "key6": "vQttyQVkCaTidGtnXmpWnnaxku8HW7BfZq1pVgpf7c9vAPtZkU43DCcWAZxvbDpQG7Z3i59arFgrzkocwWeRh55",
  "key7": "3tGD3UY3bUz3jcNroULjThNk9z5CZKc1QdnUSr9HmaC778rzr2hZ95oDag6aUuuWGehfdzPrt2Rba5RT7w2YiJFW",
  "key8": "2xyjbbHgrmPwDHVJtMT9UMom6a5EfD6eoAkuuSNkYt7nP4rieuHPQ75ECmcLkyKp2Wi8saSQzciCD8LxG3fjm8cT",
  "key9": "WYt2KAHgHSdanBxn3vCemXYEdba82eqdFEyQJPLY4UpzuK6HpQYSfHU9Uh78ASYPJL9uP1VrqYzVbHkEGoBW154",
  "key10": "dm31njDuUKVBf92X7bpkZ6Cb2CsU7rkBf8mZcmemBP5mNDJ5XnjRnkj4zRUzHiTkTVoDHpKcko8wMxGe44t2KTz",
  "key11": "5NzkoYVUv7jcwVXzYDN5b4C5a6PZ9B9HThc6jAx9SDzsPkUJE92oHoK9fcQNPKFxAwUAvw6nhQNgkuJhqECVkKWx",
  "key12": "5sAZWr6XUPtUXWZhM1cFtMWfeNSvN3E4vPBhNVtz7UFx3c2kf3DM8ZcpMEy7XnhrCQy5nVBUf4Sw86oeMkGtFM86",
  "key13": "2mp9dL4DUPbGcauJ4CZmhd31LHJm5Ure7HSJA25xaRwWRySmFmX1yfWE5NQJ5Lp6NdVDaab7Vq3KHMwVVKMsYfKj",
  "key14": "55GDAB4wZq9JUJXQ2FnDjCFZhAHqWmfD13aSzfpiGHvjEPTz5dEPdVWf88i7iuU39yYLPgr9SPTNFFMYkaT2hBKn",
  "key15": "4sXCJTAmv2GEFvjd9HmQ16kW7bYKQURc7dKD96wxaX4U8kEGy3CKoDABf1vL2Q5998WK3JzhZfumHBaUuj9AUwXN",
  "key16": "2WWmDXHr5Hpfguigiq2RhMzWHkHWC6rsBiyARL8xsNzZBRef9p8ih656J4T5m8ftaHDaa36LUCqxd3boMyD31KUU",
  "key17": "51zDHpdxgA3UCrSQuY3nGwBstzBE5vBngfwuakr8pCxfeCFUyZnWM9H4F94RJP2Uoco5ZBLnbfBFVcc1VosF5CXu",
  "key18": "2MVHK31wXCSTkaveTi3RMpUNecQgDGF6H5qWzpRoyWiwxE3U6itkqqaLHnWRbqGiToHoiRX4v97469y2JdKbC73b",
  "key19": "2vyHWcdVEkKtQCCeno37LCaG7MohMzVt8S4KZKrJCKo1ReihdnjqHguJNzQsFe855KNS6Y44ksXs287NLZTZMhcZ",
  "key20": "bz4jWWKPdZD8rr8GZU7ThaHtKt6fSZdBbWiWwRDBVavEb6iPK7Lf7sihDtbse5xSL5NaVAWw5qf9MeYc5XCN8tj",
  "key21": "4JMJSHeDZjkjh6eCkSthG74EDpXXJ6pTGQHdwLNVQHZyhp7xNRrP9GyeEcd9cZKSpmvo8vxeAbQVgE9VMqj96WtR",
  "key22": "3irmNinChwTwFhkpxZnNvFjXPTwD2vCt4qQc7KMjFoxrM2juQDQSiUi2LDuYyzREuG4JL4i1RxyTPwo6hGn6JLwy",
  "key23": "zw5cuJoJTBfdzSz6F6GNEfekxNdweR5DUgWUKnY3afmCHsRBCz9FqGYUKozLJuVfEkm9De4fT1K2a3ugfXZfh94",
  "key24": "5rPopqEjd6Yi81X4N1F1nX24JJQiMuFMKZQKVXiFZ1MEYbXPQTcMz2TRmZwxFUNBH63VEax8AmwNUcZJsiWkie3o",
  "key25": "RXF9Lu3rtY4NSgfidcXuo2ZgquYjK9x7W72snxPA2UmqTFnvMJjjLw5YAJLXoW36oAkQrUnoa3PqNDBpG4E6U2W",
  "key26": "1VQ8xpWuMp8sxjhdwHdBi7zeqsQhP5QWZSmiPoNfFNbg2t7SyeQkr2GWyRa9bL9SXRHjLAhtHzKuEVbsanMcFj6",
  "key27": "54TkhqpRBb3oeQYfBxZ8tE7aNLEgrjLnRLuRk3peuygzsir3cKMZYB9Cjd9mDyqgZpnrSvi37pBTTZFWtRQxqs9Y"
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
