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
    "t4xddz99tAxNPanCr4V5tquLii8XUTub73HksgYQaFq4DvQczUxvEVk9aDGpN2FSNgKkcP8nYwrtnNA3vC5hfmD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Rfq8RZLBV9gcZow1KnTpVY9hCMJytmY7AAUEj9Va7DXCC5y8rJYhzi4qVpDE7ZzJDyJKzK4JC1kG6iCuE8CTRfz",
  "key1": "ZDQYzJ5YPFR79xDoeqpGq4FaK6pMXtpDiiSXcZJo2irhXT77EUoTPKKzCAQGAw2zkhpVprnNZbFJaxsJeHqg16a",
  "key2": "2c9abKGzoHFLE9BXBvy6JvquWBtSrUpUBcjLK9M1HK5CNPfgFnSSX5vnh6UwwWs6RkHGiE81nxD5zX4NUBLQdnSa",
  "key3": "4M5aMgrHrQUCtin6RUvFdpS6Zs7a9PqiLdMwmBUJ9MqCftsZHBC5tXS9ZmKxGwDZTtmfXwqCtknHqsEA3GZH7NdW",
  "key4": "hADgtWxZWMi7VCJBdh8Fn3urjzahobWFCzvgKz5hNVQMtzBLeMQkYbHxQtJgiGdWmBrZ96o4MxUPbNSDrVXgSdi",
  "key5": "21QWUrmtV4ERykrYaP9jqtPp9PTDBwCTaeVxLY4zApa5jenmhW5wTMo64ip5C1ZXtV6V2xAuqjS6U528K8gts6CY",
  "key6": "3eoybrdfj3wZbxXee2RLuyKoycgjQ8kexveu2U6E5BxECGuPj7Ec6aRcQm9txJ1Y4iy7idv333FTDDm3sVPevUuk",
  "key7": "K6A6yMtkcjnKjyadYyWr8eXmCzXbhrFTs9Q8fFZZ3dAR2iD47P8zrWWwSWbuKckeWdwbZGkrYQsjY63EAgCziwG",
  "key8": "2PKJHtBjHwHJwPtjiXX4RzR1iGzUriw21hmsWLEzJaEz3CpQCakKPrCfepmHGJD1V33a5ge6wJfKvdwRcdmR7gDm",
  "key9": "4WUsKVpkVatZzeEZNJuwgYnh4x4cPCDKuMEmnXaLnBrCkYEFnLBTJKJNaACBFxFD1Sqk5uv9AwW7CSz3Bz15RJKB",
  "key10": "3K6HBHcxRp2rPr6WBF3rxZ3ejWdVynW1ECNkJ3oe5hJGDxkdX9nuEmSpx1g92vcTMKYHWQKjsbV5hjWRmhRdLPLu",
  "key11": "52ixwn7Qg3EjaYk84fXmcotRAmpnzo6CW8JsMnMTsDUx1C3zv6vCEuHz3qWfR7FjNdFW11zRzHy2kEj28yY1aJST",
  "key12": "2tKFJVTarANqasDdkw45rWTwU3zLwWB4goobAkUvhR5jgFTUCX6nmecGifJN2ttXTwQwQdMiNXvmZNARgAdNqv5r",
  "key13": "rpQahjdQQwuAzingd3G6JhJeyaZyrKgsc8c3YiK6v8Gdsinpg88NGrhrm9sSExTyPzjRaw7H7hkhngHcwZnFYcN",
  "key14": "gBp8AYKjw2SRrQGRYL43kiq1LUDwyAA7DXDFqfXB4rvr6HqRHhZFoNktQWMhktPE22nEQcGF6tfZs3raUTuf7ew",
  "key15": "3HCdBTdkomB47UKuXDjogUjPbbjk5wH4BXAM3TKW4BfMTbKSunC4y7M7q7Sasv96jQcu87evucT9Rn7foptq6pn5",
  "key16": "XsYoNkdT2aFykoAq96NuADFoXP5CRDtWwhC28izPiUATbUk9SJCBtqnyNQBAPYmzrV26hmuktRUN7cgs3SHXMtP",
  "key17": "3WsVRLR9rEWv4iDmP5LueFQmF3ivNPGLxMmikoE3C9bkqc3CvXnva616mDruqWuxEkjLBUzjd93mPuWXDDMAT24t",
  "key18": "4kqt8kMtQqq5RbRVAeH7M92Zf4XRohKgVefEqJeqNKxuCt6cEjJQbUtzsvCLDpT929WjMVJoT7ZsXvdCGWCLN1Qt",
  "key19": "2w8pYYpEG4oxQLwUUTLfVD3vgVuxfbuVL1wuBZtL11KGg3JN1pJXuJ6X2YYmtc7ZVvMQy5ssYpSZUsrvPaVk45mQ",
  "key20": "5uUyVuUrUXyRHL9qdiXmPHLY9qXCPjWMGTsMBYrpdpnkDjzR58nJftvfKF4P643qme2h2ZNGzm4JWMRNfJvAc8iU",
  "key21": "2R8C46dcpSSU8idrsnCEtb9beCQkdNH7ZBhNruiiBoTMpg71VcUVHAKbFS4ZvdGVX5qLg4e215aeNvZkfQCjEyFs",
  "key22": "669Ps2ge553ReBufADqaTwcfn36WimoFuamWCkAFEPc22cD8YWUFq8Ej3uZfzQ5yY7SHHMpabPAk5auRS5bx3mvF",
  "key23": "5CiJJLEUHsnttH5gtjUQxnD7iZcUbb8nbHz2NXiS6vEiPABPkW2apW1bptC4SPEF5yX5sWT2uP1DrU7reHWz25Rn",
  "key24": "4kG6xZUYetQtDDWaG3revVSXF9NjWA5CxEeg3FnfKAdScMwfHgFmsHsvw8mwTfSAQE7k1huJHweyebXfswutFC9V"
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
