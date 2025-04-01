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
    "4cxEWc7WbqgtT64CKvdXs7czBXrSiGjvxfn1CWAXWtAo119AtNfN3Cfy1gwXEkKhMauPjE2YJZegPeuNGAniGdZn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JB45rzcJERaPN7yLjtGgi4zpwSkKxUAFcV74Kzmhr6wshtyr12Pha452dBPTgCmytcQs7MdZ5C51SVXM2Lm6W3j",
  "key1": "3MoHLNEihTPPbF3Aj57EavTxY19zPHe7kYzqDaGDrh5hjgcqD7gPGoqxG9ubfTkc6ZNC2VnZgMEorZ7AkYYsyrq4",
  "key2": "51iMPSc8kpmqRhDFnuqYjhejcvNz1nvzvZQTwEvPeEpLDnq3KyVPdp6VN3RjrfGMuxjks174u8H5SKBtsKNPyu9z",
  "key3": "5rPPAzxFWKWt5M3uZMXaBQWKxqAyothHbcUJSbHLtjASYPcsti2fHHXgiLWojUCSHPRskLZjxXWxGa48iR6uYexc",
  "key4": "5R4K5EbprR7StzA1qQPB5erRLGFy9y9LwHzc9wWhaRx6HYDVRoMM3XWZPyDhBQQzsLn8eWCcvRLNoSwssmWn8TSR",
  "key5": "4CnWiRhXbWd2qgwq9tTT8SNqLPBX27NoaQ5qZefaHVMiTPGGFfeavKhv8WFD7GTnGmX8YNu7aJW3CwDNkrYgFVNK",
  "key6": "57r7ySNfG4PJJHSjmZ7BeGrBfzK3Hw4uubuDZjgpfXy3KckcAjRwRPKfFefQ7FpB86yZ4M7U3ZPeX5NX5GdSTMyY",
  "key7": "4zmrnYPf8g1F28X2XYmdJsir4TYAx3qwXTJ5Sfhtk6eEUsG855kPqm57KzuncLjywPfuLFW49vZdYiejDhf2Am9",
  "key8": "2TG6eACXWwge6xTgz9p2kkgLAqEscMgdQzuJG3SAe8Mt153cLdG1q7g9Sq7S65gt9TKpgXJoyfYKPManrJihb3Pe",
  "key9": "KPDVD2MnNEc6VstEymes457FrfvzZgHeDfWuN6ARH682JZ1r5Zo16MYZpNxNtJMqS5E6aLnqhJYqRtAW3Wiz3T8",
  "key10": "4mCiDYd5Eb2WBBJePFUN7yCbKVDHCsKNtatJ1Bk7EYyNBJM8m3BEmGKnrXsqW8AaUpVrTkN8FahgMMBiMqNKSFiS",
  "key11": "5fjZtuGnzLpSjzNq45bqn55W9UeiucFCvzL4oym5JpdA6Sp9PgvmFvJPmXjNJ7ymtwSjSDwWcD3ZaXjXrVXYjB8D",
  "key12": "3P2mfScGLn9NwpDvpzcKFUrznHVGvFDvkfskzQxGkrrcZEso2joDrfm7c7jpjoGf8uTuZUAB3ZWvTLhF725KX5Dm",
  "key13": "4XfVULToC54ANSGPafR5C6fVq69iCPqSeQP4rsqYw4mqta3H4k9zqbcNWT5eh1MuaXJYGg7yuAk4T61YqxRgEfyT",
  "key14": "268EF2Nj7VRaaPAPuFYtDPMCXEBpM2mYSmmV4rKrnJptSJLXfp8dKp5V1JDfHCtRaN9cGADBkT6SNPCCUfcocKQF",
  "key15": "5Syg6FCiZwE6pAv9H3xpeXeuPMstVLwMCRfn9ELQCieWit7woAxrgy2XcBXhx4uLaYQHfwPxpb2WsTmVyKartPiQ",
  "key16": "5SK9DZwmK42FxhKpvE9n6CoKU5eaLUK6MmppbuRg5Qdi9p7N9w9Xpk8PWVD5dgLcZs3EsznJ7tJLpZEq99SaxJVQ",
  "key17": "4US5kzKXhUqmeiyGZQyvAhTo6zhtnYV6pDTTkHTCiLBntBXPoRrT9JWwqfrasCR29CBjTJZH3wNbhYnnCH7T6DET",
  "key18": "FXyoXFGn8pioxHwcdox188oiK5ULuuSSTNHuWWLbqwbY3re9o6Sc3Cuy4ceHBFw1dbmB1wfSTHRr5GHz9PnbyAR",
  "key19": "242gzEeeTmaLtRnqggSLd2mUSu67VGiruzP93ujpn14vxRViCgK4K4467vzCkRE6YhFhjExXzAHqhiUSAwz92j2V",
  "key20": "3rSvahWR2QL4o4k4sx5R6nYiRTuF4Pipz7FvD8RmerAW56ogx1sUqQZqcjW1f7y61iGnNRyJVbLV8EXHSLVH8wwc",
  "key21": "gQn95kvmgWFXUDWn9pDuhqDZQEN2zTJDm3iXEXhtnAcJutoHjPdUkja1NFZTsG2wFavEpjYW6LqqNyTAeh4Pk6u",
  "key22": "2C1XTK9cesWVLX9Lk7ymG2QwR9T2okFde8HbZRXwfsu9VR8Rj8NsKTmuPmZPMVR2XtYDwxqfmkyVPcWHV9SJbWNB",
  "key23": "5KfmASwX9w24tPm8LZr2uz6J7CVr4bXagaSG3wwx1MHF2QCJxeNcqgNv99qJHd1bCT4xPZYs17Kwx5W5kJn9v6tJ",
  "key24": "3jKoUtnikAeF6zk1yYC19YVNs1q8UGpeJc6rbHYCPa54jGAJ2nDcV3pAzve3CSwabLW4yXHJ3KH5aRsPu652fz11",
  "key25": "aQB7L3Q8DT3zyRVQa958F6yP6A91TD7qHPWG3gTLaSUM7SJZSxqdHZURFxHwpGQ5ZRPZst59JNAk51ukKWnNjBD",
  "key26": "52Z8WrqNPhFhs1XfPFKiFjyS5e9CTjxmnEEnso4ia42171kQFzgEntDuyZKTkGBXFeFQrZSBvQ29hNqvBGs5BWJF",
  "key27": "64s6Ja2RvMA97bTWnw3W9E35P2ewJZWoePBZ9YqZzPLWJKytVFAjiZbahToAChCkFFjyBsCRfM3dvRoW8nhV1om1",
  "key28": "2FCrfjyvRxBZ99gzQuaHioDtCJfSf66nXKmtQxBP71UUydLDcRDKzsuWamaNSpBrc4mdGxwziXzRMXLBTPCrF85t",
  "key29": "563XdzfW5kywTHQqr8AsKQAv4DJAdLQG7XkLCeHmgg8W3grHW1urhynUjAGGQpptvRYD9as4xYZw6PaGZDRcZnjP",
  "key30": "2z51MN6s7x63nrwakiStfCfCGsK5mFkYEb2pHrps2rGiGbBxckV9sjc5nnQcE7tvuu88gGtDF98dRTDRybaPjXDe",
  "key31": "3Jdf6LqeaGgW2H14LedjiiUs7YB5MGZ3Yt4Ep5a9s1EL318usNxGt2osVrAfppfrw92rX9xjmKZ14u5G6GFAYp48",
  "key32": "3GP3BMfEwTdDJsbXyrBcsWJxnMq6C9HdddWU3iVTHdz89gNY9FgkoKiDKbnn3rNg6EDA5roTQ6wxu4G81VfGMyrR",
  "key33": "59QTUEh765wYUTU3F3Q9q3RdBeHd6KPiFHv5hc7JRV9kk2VRBUbimLE5ShBquHDyp4CjBEJtsvngYLYxz9GiUu8t"
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
