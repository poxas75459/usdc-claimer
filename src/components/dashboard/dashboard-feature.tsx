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
    "48VtotfFwTjs3pTE85q3oxJ4ZoYJL2UYbx8Je9S3EWiChgpDYQ5aRhbMYdxPn9LvgmnBpQAi5HK9knXajE38S5r1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RZBxDNBoYcqJBrQYnSr3wxmcv9jL3Ma7ZkfNuVpowzudkh5FXtymVRVLU7unZSbXNs5gxm55dn5jv761fPi1Y7s",
  "key1": "2Bgat2rNaHyXSPTtAYJzT5amJ1REevyoYMMHWip9R1W28NyQZHU9QQpwfaHyJQQC63DwrQZXAkFd43cVwWupQe56",
  "key2": "5cVzWQGgGCNCqCZCufqi3MSERhN5C99j2qvHoitqSfJXCG4k6Y2kgM38Do4XunmCKeyEnoC4no2iVGroe91zZ35C",
  "key3": "4MfvGZ4XxEUJhMN67wxTMvhLteFpFvPLiSsizJ4yNfmF3HLXjZDmGK1Yr4xfPxGVXcaunYnm7nY1XbKE5ufHrngr",
  "key4": "v5yhbpyLZ7EM68D4BZ8vUiBgdbLvUA2S15bRVkxfEegB1hPozoZcDn3UirPtxe9dT2icdCcXJMZRyPSN9v1kGRK",
  "key5": "HE7kuH7G9j5Y7Mas15Pru9jDwdC5cSnAqzr8ikCZZb4snCdMX1ByaG8iCfuJwC99Vi9AQp2kSbxQeLrDNuk4rzw",
  "key6": "5si9g3zw5shqY1bmgVPXo1SSyh7aZX4s7k5UTV8PhumZmf1JWLwzqzhwGXSGHZ7i2zNAC8jexJpRt8fq9kGybngb",
  "key7": "2hgG8kt9meYVxX4uRk8C92QUcsKnRCeciyXZ4wo4H3d7mFkp7UaBBA9NDNPwbsp8iXtw2JH3w1qPTg8W7nkVBHYQ",
  "key8": "49tHTK5DGLFrq5szA1jJbbzSEAXkUoFdN9orW6EWMiFRBzm2wd2FeZiVLzTYKYWCRpFtxMqQnMyy8MXRdoGR9aUS",
  "key9": "2K4cYoAnrvHtPpLKGLduEnXmXgVf1n7wrDnkthWRSB2YQrHsGLUssSxsTXN3Zm6wH8uyQQFomo16dta5jLgHdQEQ",
  "key10": "3Z3WExEuomtbAA8ULrF2dEhdThL4ne4ApZzgKYKx33GL84YVuw2eh54TGx9PiQTTqix3dU3nJEJCucHmsj7fwpNR",
  "key11": "5PyNF7ayXHyUXpKMDC2DJK9CPShePZ41yatM3USF99mX1uBKE2PUyPkC8LBC4d1rRoijVdAscmT5myAEeiM1dZfq",
  "key12": "4DF8rWa9U7movN4D2u3nCg2DfsuWLjNzQ6Cr9jY6WqKjTA6DyK7Ysjbcv4784chNcf7y8GT55eiGXWt9ZDUBE9Yf",
  "key13": "pU2fem4WXJpaquaFkGfSHYAu2LMpkpo1as4zrGDySEEUU861uAUXrjheDqKUxQGLnPiFWjzcXMiaommD9ewDUR8",
  "key14": "2P6YHbyJgBYmKNvwRW5pbKFN4hS3z8AXTAwPmRgT9uRDw58FMLXiSANPQDemDJcH6rtGhojPEBLESe74Z1xcs4ci",
  "key15": "21yheiaiduAidNt4NBzAY77nF5HcvHPx6yaGUquobZkUM6Czh7WmEsH7eELNcZ6EiAd6SxBcVnteXsc8L126LJsX",
  "key16": "2YTw5DzdrpAgrxznrMB5pT2Capg2oyKTsRuTFGW8G94wavxnQ4UR5URC6WMxQYGxfv6RTqHPFXkVtnWmmjaHddpW",
  "key17": "Mk6iXByJj6HumEzLke9JmJftbG8k9xyuyRMjT5fRHyXBM9UyEVqd1RYSqBXgbkyyYaUPqPrf9R86v9F3TtXpMR4",
  "key18": "YFkrBb3p9R7aYWrdVNsasZAN92yRGTh7tqtJybYw872DKzqPB1Fc4QPmRvf2fY2hgEUSxitZyZpYfXrd7LTvbt5",
  "key19": "34NdwRoj9Y4XrC95sgLdRSk1VVB1r2vLLiAAMUQKNGgLJtrSUmrKMxuZusFLbSqrw1oZstKu38zEwEDdZoz5FGRF",
  "key20": "4NgeEgUpQWmaPMP1oGkWcHMjejVCE6dVZC9cqHgaKq7Aww3AboCNU8Y2xDHahrKhggikU1sqCUnrWobYGztdr2cN",
  "key21": "2WxdJG7aP1UxKUsVgVWNnyJJKTBn1Je5aVRURcUSJ8aQi7pLD9tcG6nKdAWLTFdezbyQCwNbvSw8xTBWzNJrsU7x",
  "key22": "5o6W68neLcge3z3fEGzJAAb7rgWg2ZQiNXxZLZRRfHkVsxcySYkPS5D1BaRjwWRGGPMDHxR2zaxJn3K79x4uryGd",
  "key23": "58gP6WDEVMzhYYxZPof28U44H6P61tqinGx7X596jGmEjNgmRCdkc8K7rqaQojUJx4EaSx7Db9YFd7mDqPgmjh4u",
  "key24": "xvL7qYUYL614YpQ4NUBkM4ddqfMJrpZbJRamEXXJK6T1fKdT8UkB3nyFaR89uByp1AH6LnQ95m6V1fEbJJoGvuQ",
  "key25": "3Ce1vGpyPDgM3v8dptuDKnAJKeyziHNxeNrrrKXgrNiENbTw6c5bkwakKVJzH69tagCx7uMC3ZDaJiGBNrYYe6RL",
  "key26": "H51pvbpYk9JKF4C8WgpwVgdk7mqzkP9KcepV85NQwV8v5puaAbzEeCbzTYg6x5Y7sDQtFYF55gg8zKS98wMxwUp",
  "key27": "4qVR5LsTNJ7u6UuFzEbJAACrNUzT6VNPsxhcam1ws8CyPMbv3MHx6scb7WSJhJhdSfJMMm1ugqD92yDj6rEs2ajZ",
  "key28": "43ALiYznCpc8hVHJS2yJcwn6hPXPfkiTsC5G7Mup5sZeXfygcCJkC7cN6Fu3dnY3TDuAY3t9uU9fsdz6o6YVC9iZ"
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
