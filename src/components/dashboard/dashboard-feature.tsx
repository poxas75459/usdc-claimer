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
    "Nd2zFpKRczfnRbNRCeHZKZT8Tg7BD5d7DjkMBv1kySi2QwX1i2Wfa3exoFVZTnXoWm9LrxT4dAy5bSXSnordCrf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51dRk4MZ8nMwAc9ndGujNStcGGyRu75rNQ3eWzGzdcQXw6pfHLyS2DZo4r7vTjAFxFMAAQGnBg4SRMCXiHzRHhi1",
  "key1": "4mmf1115aW59zbohnQqS2xq6vz2QUDtRibhVpG9yhCnh9YXeRJVhen6iy73NAL7baSfi9nZtQRyBqqCcsrPt5YJH",
  "key2": "5tVfBLdepUJCJmvDggSPR1iczYC8aYi3aMSPyhdoN3HSpKJmj3LTWuD6g1d5npVVxnsbWSg7ahXhtKidu3BKGQDm",
  "key3": "6MyoF7QAREKps7uyRmo9yEa8P9UxYMdCR79gTvNrGWZAEukA2cUPYVk4ZfEhrdB2C45tFxfgKK7F1g5FBw1VmeW",
  "key4": "2SdFTYLzG17oMEUenCh6iomSRB24U4xwH1dtANWLYFoh1H6Jsyq9rWWZDkqripPwi17q1rp7i2cP7yDaoGZfd8Pd",
  "key5": "428BoX655YwDvjVKqJTQNUEeakeKSBVew2HvEHsT4NPXB5F6TKh9xr9Q1D4tXY5EyZDpQuuvbvEwbpSKRePnyd3f",
  "key6": "4FRsndJ79yP7hJnVpFHXaDjaPLGvdiCsMC3dV6LMhydCAbLMivFK1cvXH515Pj8h5DhPBMxGEmcZ5SSv77yeZSg",
  "key7": "4euDV8q5yE8qD5W9dNa1AuD5fUvXrKfNd5UGFzaCCtQsbPWfg39G9DNU5xNtBWcjakv54yHkBiXeCDGrMPx3kwJA",
  "key8": "3AEtwgZwPcdNf5MhrLroCg4iohnppsxyJPypkrwqxkHq2kEzNUDQ8pCDty6A1cuAwSqBA9w4mPiHTpV94ZBHb4c",
  "key9": "52YPxq4w1gnuULccnHHuDjpQRFXEry9shLniULknUMegzubk1advKHJUbuYstLazPAvp8Lb9p21bzfCxz7uEMyVB",
  "key10": "2V3S3dQnFCf9325yPY1YKDxpLwTiQSZDZszphxERuCbCMvzgA2m6LDmPQm3tE4j6g5ncUkD7Be5WpCp43trBrQa3",
  "key11": "39jnhAQkJCJqzmFKuCxu5uPqEtJ2o7gCcURjnY7HE8LbGXQdZLKbZzdr6Sbq5pP7WbuYzoEhrdU1ph2NiM8sGjLc",
  "key12": "ByniNRiFtEiqEn9dJhp23SUbtf652gWDGutMVNcxZ4rQ8BZm76epi8gBXC5EN1tLUi5U3wCVnmC8BEpiM9RNfRw",
  "key13": "5prXBNjeqXwnjW1d3mxo1q1bynvzSPUrguaz3WUB3dpqn6mtBnJajopmx2tQ88hkw17AnJ6FF7RCKQ6YwYhsHA16",
  "key14": "GH79oQk92pb1ppgL3bLXoV3ivWYpXxyBrsiSvduDUMgZZVstjLfbkptAfXbRenv7TKz7oMC2cpuTjBqjxvxYCiQ",
  "key15": "4FzC34CYZ2Unth64cVCBwvPwLMAWWuQADEiyxc72aaxnjTVGcM9EQ9UZNFAEzjSFRUrkvXUijYG36szYW52Wsj2T",
  "key16": "5QuUSYe1SYEn6ndn3gue4uz7fwVdtZKXEKLsgwvBS4KcvYtoRWrDyRQiqeWuoYL1jQX3pDCwCr2EJeAemofZmyfF",
  "key17": "VZZdLeQi2shhgw844nXxVw16H57WcpNZ5Y22nFtJvdYzjU7KG57CprcD3FMV566nndRU1321TeTVcSRQCARL4a7",
  "key18": "3vLnwgKBE7PjedH5kvb32fWooNQW7DfdCruxtuND8stWdk6M5SteqRGdWtrfpXazi834BSY2Agaf3uRevWvTW7n8",
  "key19": "4hkR6VYiMAyWEp6dMWEQpCC9mRgZazP6KFpaY1TtEvCoMMm4TDu7zKobrMKweuZcFsuxE7owhGTrDPGdWTk7deHj",
  "key20": "3RUuKuYsnY2oCfHR3JX3oEYjRU48K3PfQbEtG9ydsYZzjHFXDiB7bMqBho3wFbzgbnK126F6tJzRe7BwUaADMPZe",
  "key21": "4zJnArdiUkFBNNEJTeuC7A2SEwSCGdWLnWSKnKiShcMzDYmcXkQ2uWHASxJyfHmSWASMNHeBnRYrPMCwmQfv25HJ",
  "key22": "rac4to23ZuouDk6AQBKGFSEuUip8YST1vt7kx94aoFukqr98PwiesbPmnGtupGuLvjU34yZ2YgrBrw8DYwf5BZU",
  "key23": "3DMH6eY3y3r2Gs5sSQkD276gmfYEnaLhqLFgY9AFd8eNMn6b1ByhTRWHvcUnfRG3jUQzveaTBDu1e5D777yBqx3e",
  "key24": "3aVSFkQxzpJQTzaNagc8CfL9gkqpkyGWTmrn6hZWm522agdoPAtpsXWfGowe2ECBxH33L62VjtsoQGktVjVhLzq7",
  "key25": "51kwBDQMw7q6ivk5YdATw3t1PKwcne1cEcmsZn5iutLNnrBRcMk9UtrG7DqrbHkV3UdS2XDMamnMLoxuD7hERBww",
  "key26": "PDrPE8f1PwuDS81HL2DZkXN1buYXhsaE2MrKhcw4kxEfpXrniUJZhQibsRiiSjVDDGySyvBpr66xguTZ6X7Ndzs",
  "key27": "durRdmiW3mJFwPQvjRRoL8QNbfQayj7x84dSETdrHia9pQekh6bjEbV4jbLW4QQRa7KRF9hNTXStRNA2Fm16rfK",
  "key28": "63kERJUbLeqitYpoty1F7SYbuMuZ1Sy1tTE5L3VSWEYguwyBnQesA7kRUhX2XpSg8sF5BqSqiCZ5FxG4JQbTMWui",
  "key29": "2vpHcacMag1WTM2xfCkWTXzyrWnEpgw5XCa2JWTJMU8sgHgmQfEsbDtJHzL72Mxo9vogBaiEFamARZJAvD3wMBeH",
  "key30": "spzef3oc2wxkzUry97PfuLpwpykBH5jy1EmrkVkmfkCMYQdYW5CcQRWVwfKkA1aARUcZoWpe3fAdPrWCHA7qXdd",
  "key31": "PvPgrKJcADBEXwZ74nyuX2emzkocZXPMBSqxcVXUw3Wp74T7zwtZp4HKMo9f6KB46Bsg3LTPtAq4PkQBFr2fyCo"
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
