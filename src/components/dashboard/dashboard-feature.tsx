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
    "3bUGCJkxJoscT4bW4vYZKwj8oqc2PPXmYT9WnuD1iaShtex5xzHCcTP8cyjgmvbSqhYfAjbmdKLK8y7wtzkae3uM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sBkuAQMoaNxNXKwDaHXXjozPWAUpqDYnQ6gVmLcKVEbKn6wBKFN4EJvPxvKAhhNSQbNfHuwvV9UT5JpkEyf19aY",
  "key1": "QAmpMwCbgaXzxaqMSUPoW1SWRFY9HodU5rtVanPHUfRJQvMXfeoK18zmvVxF6qu2FRncRn8wN6kR8kf9eZeaaji",
  "key2": "2jNjCspC7e4gwAdefdBvDYxUosCSZXc3MDAVaqWkh3LmF7rQwNPWD5NcR2m4YesiTBMAfNdUS9XcPrBywEWmc4qo",
  "key3": "4nTsRWUrJ9xYqy7zG5uzbeWEenzFWFz7e7kVd9RiapQmWR7kCXDk2qLUWgty4hpxUX4Dqd4UzyMamaWe4sm3J6NQ",
  "key4": "5t8ZGvynMF44XNNvUdYaBS8Z48yKAzat1qbCvruWrxugNRAxv4mdRLmXYfGNkhjqRpp1uALGaTVuBzKZyeBZHo48",
  "key5": "4jM69BCuBXy2eRA8PaxAd8ytCuQtzQb97o5ekz3pnGa51qM8HVjBPEyALg1oiPvBbbu6N99UsVzBVaAxsTAYCavu",
  "key6": "4qWCjHQDjXH8x7825qB7nWtvtAca1dkSX3iBSq7zUncJrnuyCCgEBRyTqW1tUfwR7mkJiatjfXcDH7gfVRyBYWEW",
  "key7": "3pgeeo38RFp8KzDbY7KPXyTdpjaQjUeqtzG3di1LnQYk4rukeACeERbo4C4D5PZTVi3JDLdeyVErnLb1K5qRrRiR",
  "key8": "5GcLeYPGUvJodLk6YFfsexZAksJBdxF6b9U3kLAn6wuMSiWsPqwdvc2WGRqWiUMANb2KKdxpoZjFZAAfCWE2VTkF",
  "key9": "2TZzRcet7bRvQTcDotDCqoGQiwCoEjYsMaKiPCEkS3akUDzDCVVXBeTMYCRyxGraex6umWEryZpjTpFReYcBMeVr",
  "key10": "5PVbQDQV2LoUWZ9zztXywdpSkXvEwUaB887RNgcWmVghMYQY32egQrVHJWzpywK9suRtsJeqyzw3QpPLccSb9gN5",
  "key11": "67XKd6cHWY5Kbk7gi3GJn8osBwCxEearbHBq8LPHFZdy5PSnGihjbYMmJrVPEw9p8SSsP5UM39ZiYxbADc4h5DFe",
  "key12": "5RU8by6Jgbd3zmr7s26JBAy7wCBSdEPzkupDsvvSFwoFhhxFhAxyopkfUNPPFYM3iHEFPFtJjtznYCFEE7S6AiTD",
  "key13": "5rz1X1GF1gW1JNZ4Ahw1keqSUoRB7mEtA84fyTmfccsbDJ3YVQi1Q71nG11LTNNjPT7vmW7gtAvHoxHUcbPuiwqr",
  "key14": "3tfS8u5iqHWwHnUHdcKgcBMxHiemdr6CXEQVVpjzqi7XkEbcvvetEbL7KQvLQtXjWY8agAwcrwaXw1i2cqbqYmE7",
  "key15": "5geMY1GAWLhG7KaF4CQyUGjDoCooFCxAsRqxJTUW9eFZ4RZ6uPPEVfogt2fwShEwb29uoAr29dCDwG2CyxLwChAM",
  "key16": "7wdweRkded9Ctt9gcE35T19eKUm5vQHmMvkiQFX4efg3v4Rv2Ps1Y4bQvJpERDRXAwE3pxA1mwhnPukPZi99HKt",
  "key17": "5SkHGgpGha7rVpLmo3WRfAswJw1e9EU8X18Z4wWdokpBT21JQhFvA73bU52fY87QUGYR8SfSzXoq7jiSbac6scSF",
  "key18": "28BdcLgGCqyQkx4d2m3WvNihFM12jaKqZ8KGUroB8vfpbAXuxoEYE2wL8wBgrpAQS5L3WH35mzgta2iSydT6bsbL",
  "key19": "5habUGNBoicK6kxyaArs1hrxdisx1i3gipcMwtvV4ubBsPBGmEfgJQNdR3nunG7kDn1cFBUisapQFQW9xDPboR2d",
  "key20": "57WAShULVpfJadU3uSVEybfY2Yw4TdvcmV12gPuBowx9YV4mQWCSRGR8YwhxQ1TMyD7YQPvvazjBGx8sXH6tj9C9",
  "key21": "246XJT3koZBQJMJQj8stpwmGY3HYxzbqMkiuKknJ3JNBACRF9zVdygnw6Jq76eMKK7SEF72C7RFo6yWmpopetA1s",
  "key22": "2hHTJPFPJviAaMzZufSDY2T22kCLHFjbzj3F5XcAP8GjYfNaYNas9o1gcbHv9vRVzVc6EXQWb812f6TAPbubfEPZ",
  "key23": "3ApKt313a1cD88bi7NB8wgRPgR9usUKrLvFMvgnDkZfdU8wP4PAtg7ppTwqZenVMzPjfY9NDcYD49xxPnUWwAaT6",
  "key24": "4SGEu2ato1Mc7QvNSZneK4FTL61qNEQ2aS1bSW3mx6pgieshvq3mi71o8BHC1RBzyWQ8PbsKXnqykTTafEsUrUwf"
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
