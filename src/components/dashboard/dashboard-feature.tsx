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
    "2xpcBbyTbdYWVdJ7XBR6Ndv7CYpWGMgow5uAP6QXur8BpyFD4pa5UtSRvPE2iKt2mqd6ePt8oP3PkuisNwifVgxR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Kad8XCQmpCQRFaUSn4x92LdQ3nhM2ZhU3mwaULiB7azCoaHwwgWuoKiXjdEW5LvwRdJKGvnFoGF3cEHrDqU9P61",
  "key1": "2hTwAFKYJYbQSof7XffyB2vxUWZ4zMT8Vf7wAc2ttV19A23Au2MaQURhBmcKciHKKjrCjdXuFD9vryA8kWKB9PDW",
  "key2": "4AsryTJAkt2QiAz1jvw4MnCdj6Vm3XAsdNsLmUfAvyGGxtpD7USixPBfQpfFpsywbEuCP5pgUL9uhdwUm7ib3E2G",
  "key3": "3Q5SLhXNUQqMspoyEu1DsHVBwiMP49Vz6vsbVP3qMB3VLgn68QNU9JuPqGHcK5gZPpR9xReCkv82oYiNFoX2CdnF",
  "key4": "5inMrckJuD7UwKku8oeFcS3SGxHcHfLY7rmPCeLkMFm3CcoLvB4nXbr2z2ecNfDLPtUz5NHrRjY2FobKku7A89Jh",
  "key5": "3MhM9B4uEFsFLcTein8MefFds68yFsWPhDSR1EbTiEa97zmb86oX47UvxfMxvCVi5pd9BFZVDG5Tc4TSBtfj5mAm",
  "key6": "8HiQjWrWnh7ZiPEeqXjY3zsGMc1aqNEsd8UdLaF2WpDvfjEvC7Px285w3QVcPMMHcskRDtjFCtshb7H447hAxVA",
  "key7": "4xHZQVNHprDLzTrWEjqP1gZEB3vGEwSR8Uf94q78Rf2fhD2y3g6tUaV3kTHaqJT2vPPrENvHgr4cfcnoDXTts3cR",
  "key8": "5C954cNKgEa6BFJSZNCgofMVeXQUbsUy3C4cGYF9M49pPdCTSJ861qNgvFNVxmCyJsWmvk9LwhuNehyYwFmJqm34",
  "key9": "34GU1HFdm94ZJVaTZu4ArnQMXtJq118rgrcqoVE8uxkVWNaokz4HWhTjibzP9B2f32Wmj3QDWvXZu3UkgKbJLU5V",
  "key10": "D4Kc16HKrCPn4y5f55t4NKi3CE6Ba51b2bSryFw7mFPp8VNBMdGpSBuLvWjzMQmEATyDngj14orjoYQarNyLsdi",
  "key11": "fGWHSb1BfzjcBSmS3m3zg7gRdrwizJV2eyq7md8bY8wXsahv62nvmPdk9pESYs97kc3pSqjRVnQqf1UhVZxah7R",
  "key12": "3SwL8qtZ3to4isPCSpFdAwDCdqVyY1sdaRxcfH1V6MonSWWmkb8QVPTbfsYzRYmfy4cNafaRG9cpgMQoD1vgHFUa",
  "key13": "3CvoC2thGAghzQDsTwAYVvn3ecFBYStcnnffwJ9xzAUgZXdEwsfYocCxZ19EwdVN7hNh4aH45B1BNyP8hYMoHwF7",
  "key14": "2sdJXwRmGniqVoF6Qj1ZgsxkSged3qcWxKAE54jvaxZfxGtVgN3BsZr85D3wYuz6Jd6XUJ5o2mHfqFXKWHLazL1w",
  "key15": "35idAJtMJcoGkhnCUYd4CZzv6N3Tffhv14uRSmNNF68ViFttCoKhWSubBBCuhY79NnWSbDob1CcmABWPHWXKyJWg",
  "key16": "4XmSwDU6d2VpS6z3pqUVVVg38miyqFFeieP6dNEAX7jvkrN2TLvEBhC1nmXEUAr7jy4o4yPj7WzYXznwFthkLDh4",
  "key17": "3rYp6xs95hnyJnqHDhbYgAHHFZwY7ztxT9FicjN2bPmMPbvXGGGb77yFv7EpqkELawnnfM2vFdc8wTLrKYmxoFPd",
  "key18": "4NsbHCy65vupBrTcE5MA89RcGnekJihCDwW7GgH4qhuFWPrwYpPMHBcq5KyJDY6KAGCyK5jsPeffixdLsBqdtmSp",
  "key19": "357omPUs4JvRgqGA32vh8rLtSVhrC3PAVMBdBUnR4QWYSW6ZfVQDQxrSQ6nHBGGqaPj2pG7E8Ao3TATvUiQB5vaH",
  "key20": "2VkCYZDWAFC6QSZyh9a5tJZje2ZYEc1wRNz4FkQVFNpoixF2PGSUg6GdE31JELeYayn8e3fYr6mqTBNodKPJjKiJ",
  "key21": "5Q1DipCydPYvRXe88AGG9YChHoiKbZXNqTYpxqhCEtUHY3ScRXFbebYHfSTtqMyVPMPhV1TrqKCEvBzDPpLwooiw",
  "key22": "3PEFUkmytMUChPVGBRbyQdJ9DzHsAMUSq63cp8eVhG5cgWwhvyQ6BeQAJ6nxwHZJca6hUmFmff3mq2unsnhdMVuX",
  "key23": "3qkkBBNpmyzSWvC6pFi3NnVypWoGEpfZDeQ6ea2n2c2YFmDU3eZPXAfqPWX92rW6Mo8mcFUSPoCa99PWpbPzEYqq",
  "key24": "3U199VUjWX4usKfKS3HgnJ2Qf2Z22h9P5Qgd1qgquL2hzKsQsLrNtpUandVvkogLdzACcWGkXZmBfG4zJkwKMmbD",
  "key25": "62py5Uug5NgEFBj4kL7PC5LEyTFoeS5k7MGEvxzfGsdKKhApwoJC7xa4gM4gFn8FBSVVvEj7PHR8KPajSnU3we3T",
  "key26": "76PqsLq5rYux9y6piCBdJeEyDDiK2uFqAKYmisPTT28ARsFrVLXJsFQeTsLMVxfR5mdRXYPrkjiPvSXtx7jWGDx",
  "key27": "3g3ib41oUtC6fwmC4mrtrou7716s4pFibd4SMkiXF68jTqh2TjGDVEXqnbWpoEtkxC1GZRH2k53bc28vUtzDAWZs"
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
