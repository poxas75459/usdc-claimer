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
    "XrpWansG9cKfaRiPLNURjdWB6UPD4zoNveqtzbvnWFzKqnKMHeTAjLKUrm1zU6SxkRtgGDYY46yXkhTRVtzZRxn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eKnumVovnueupT5RXpMGxpwxvDJqy1PH83aZA8hPWXQiK6fZvQfKJniaNpEjkyBgSpyghbVPieXaR1G6SprLin1",
  "key1": "2mXeqfttAP9Nmzt1MUVDNszJxGDPjGAHg5cDnw8mJLiMsm4y7chgkmaP5VZFc2rujKJo7VmpmfrYQL9ddtE5ft37",
  "key2": "2NUxyD7RESMpgqTpg4Mr2wGvP2PYapM8Jj6PMz8txzqZUg99QuSMBaULh1jRJQrnF9jmd3VJEh4C239xjUSELDUy",
  "key3": "3kLbmJmavv2Wp1mSYJ9m2A4XoWew57E8xgKHGzxGK2Nx8xWQ4MQJXZWFugETnUE42U5gy5wsh1wezDvV9bNjzk9a",
  "key4": "aPuxiArast6yGWXs7EEkWfaTbCm9MQtNRqp46u6mqoS7yzdBK4MandYymrXQz1gjrjnMGeNLgkoJB8b79U96tTV",
  "key5": "2rdzbxFnHJe2fiTVBjSGcVsAtbE88HzYLEdH172JgXpSq9bSLiBZZecVm4PCHHssj8otBVnM824YH4aMbsNYp7Js",
  "key6": "zo2QsYhp9LLJ8KhBXWdZFLmMobrziXJym6CjrJTkf6HFBEbLUP6CuCyZsyEGqQtkdiSjVYvCc2AjTLVLv7Fp9tx",
  "key7": "2v6Mm4LWxf2UXH83aveLEViYLVjKeeAN7BR16VGiqXijpQYZe11JS46DBW9Ap7exM4qfDkehx7DzpJm8Nx16sX4r",
  "key8": "5VBUaNCQZp3nCen9834uKZ2qqV4RGAjYJ3JSZ7g8vBX3FoLcPg97shoT9M3odvCwKJTvY16Mw46JLf7Zsrg2no1v",
  "key9": "3hUWwho1PWzZs9cFL25ByjWuFNdb3UTWoUVjEyZQEkjx5Qyip1ffDigYRVgCEipCGRa3CMej31ii22fF5ifPGLdU",
  "key10": "4TZjJbKt3a9Nn6M7KmsNdjaeT9aEVHMR476zZSNWg1XRL3VEGBH9HZekJN72hJgFpqtpxFntRCsp1AhqvaaP229s",
  "key11": "3j3gkvrFHqCtEmuXs2Erqwp4BcZv45auwje4TbEhLERyNCRSb3NtYgQ7yXARkaJjgGdf5y2yYqeLhuTPmA6dGJpH",
  "key12": "4ouuTiWRaitPpK9q5y9EkQN2rnfBGFFzNKJzMG6sLuryzVtmbc91vbH9BEXVABhxxKGno1ixmUHULo9gy5BrBPua",
  "key13": "3NiJtA4iq6Qp3omaKzVaEEH9WeUPBjw8oDiZnp95qvtTZHa4VcUquxofdhnB9VBtTxzsweuP3u1daFM2hR9eAMe7",
  "key14": "4PQkfAFEupknJbkzSixzuizoXTtRheK9pfEgAzP7jmVFjDdouzspoZekDNQ68PTMS63zCpNe7tM2rGKH679JaQZz",
  "key15": "5ntc9CKnWGdXgWm1d4TooNFnQui5b5R3yQu38LxmsP3QypadW7RH5dV7Nu9ogenqUeMTy58dnfxADTwVRUZDa5x",
  "key16": "3pphoHZcJNmtY9dUgHTfq3D6M8hzceASzBAgHVBwGYGSigoXxhNKKgefrcAKoUFgun9kzAuWxiXG4kYC8DJJGFcF",
  "key17": "3PXY6oVVGkWEBNMiNB49vads8YpCV51yLPHUwzppMZRj3V7niGCD4GBeTar1EUfUS8swkgZsumaEKZGx772L2WcD",
  "key18": "3v8TGN3BafWrGRXnbjF6wVCc18cwdx7tUwej8RuvDF3jz26quTwjVTnPwE4zxkWjAsHMV9LBT87RRLQVhtuLmzqu",
  "key19": "5CAk4A2SF3Cgg7FrkKpF36JRPLm6YTJQgXKNxe79vSGf496TduHsUQvR9XsxaZrXVuNVLkBUAc7Vd6VDZxfn29KL",
  "key20": "JL27AbynF3eacWQaCNEesBwphGCRmYzHdVFW3FFYmjWszWMumNdGpn3d6iYZBuDeCUwnCTFJ9BKNVPv7g1XaRRw",
  "key21": "2QLHPKHYemr2xDQizS3cAhk2qhsqucEZVaAFDNiiSqd6sMAG5f27NPeoZD6PrGbBKs1ACDArJjJnfwfmR1dVRZGB",
  "key22": "49cgq9QGj7c3Z1jcs5z9F2EP1EbDn2i7RGuaGSdwd6fiTTupMGLKRtzcfTta32k5K5Eajt46sFxdwbtwCJwywx7i",
  "key23": "3JwjXdcGnDAUz9nuCA2j1Njjf4AFbQSRSpbwM1txb32q9AGZAUKsjApe4uD8bY2Yvv4kNkGU7VBtz5onTP8YW5yb",
  "key24": "2QrKnk23kZ89dcZ9GKnDDb7CwHSEeHyTCnMoUocRwB6r54osN3sTCHMaTwg7C77AojqZWvLc4gC7YD9hh7eetb8b",
  "key25": "5rYT2K4XvnjJSM5PibF3gLiD47gdiUVBHTyFnA3hhY6Zs1mUFwu4J7u44kVtu2bv9dj36LGsYSp9mf8bTHzxvfZA",
  "key26": "eS89SJiiU7TaE9xLfZZX2mRetXVQBwaZji6vXcqC6aWT6CkBoce5HdKCUqCM2bKwngVhEhsKbNfV1WDSWSYsrQw",
  "key27": "4Y6FtfEMY4vcq2DYpSVtPNYeSiug9n2YqCRMEecw9qCgn4X7CWhcfccUEZjkCeLE7z88tJq4RF3Gufk1BfHHNFCF",
  "key28": "3J3CriKK8vFRYcDpBzauGzPY3WHCLnc27YdcJuzbREFNrdQHBcUxh4JK2wdMEkCN4DVTt7wj4D42uVHZLUWREECG",
  "key29": "5bhdZKJE16HoVhGXHVHyAR3fwbGfrS8PWxXk7BDAunJMc2PHb4JLrFH9rHWcQ3BGF2bniP1kDjwKTtTpMvcM5djP",
  "key30": "ZEp1uKFt5KdtdudfcAkF4AZykWPj84Kd8qX4cKMRbpCCbxqdjtFuKcDx9UZLvCpLYTrfSEM3VsZuLZNQ8ep7yRf",
  "key31": "3zV5LEAnyXjUpfjpMqhnzJpxWGbroZo6QPds2sawZt6kVqeMvuKT9Re4sTE4jngp1D53sy2zTh2D9CU928jrzHWS",
  "key32": "2622SbVouduSXtcEnkteMQEUeqF9hupH4EEoGzpxQvqcGc1dp87WinoRGVWTZpiHb3b9REAgytaje6uYBbDVcGKx",
  "key33": "4K4cpbDe9gQazjMFDxRSb6MrM714XKf31r9UFupFzyktT47MZPgGyVuEzSNk5XrsMSf6BGrftbXPpv6HUcXLqb2w"
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
