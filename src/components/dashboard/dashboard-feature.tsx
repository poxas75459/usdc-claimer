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
    "64USTufrDQz6MJxmvDuG9qZ2s5amdegvzMQ23ybKp1oDVLWxrqXHCGwftLxnDuGtqhXQpzssGnDSL9xnCdnPhaQi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UnV7am4xMed1fs3Upw5rmEjRFGo2WffTA3ByKiQYA5oMCARMCDrbGE3jZWk1Yrfi7A6b2b8uRFLkutdyL9Bf5Vg",
  "key1": "3vnFAJtu19Z9oww43iEGrtyAL8u51dvL1UX8Kyp23YTz2uUyTHRDqFgzwyMeMfwEsuT9Ymt8yXCN3SKsrkC92DgJ",
  "key2": "3nLD3HwU4JpvFK2tECokhsY4qms4Qn1zH5DdNGZAMvA9S82RK58Jsq2vjQJfUtfk1vDPkmK4u1tYxPjkmNZu8Qae",
  "key3": "3AezKsELMqXFib3hmA8eEEai1uzwcWNEJr1PwjmxwvbNi4AYS5L8jjMb9semLf5FWjsThwFKf1dSneZMjp4qXQBT",
  "key4": "28CxnFGDhuAZduTbUiS8yDXsKsRkYwrEuwRRtmzhuUGCRiJm9CTfi65dBFKDnXoiWBPqGa3nP5mzdw9ubKPUKg3i",
  "key5": "3AP53GWjVFGUKTpa79Uq8WdJ6yuSYZm95Jmk9vdwsRTDRLzBWT2Qr1W2c6Y1ji5wKYFVgFPCsbs2RTfUbo5anw2L",
  "key6": "2uVJkEKYcGRBGB1DTgPCEeuQeTRVZP8GkReis9J13K1cCoLvfofJaRpGxzVPyXHKECBZPmufxfak5BudLLrjndSG",
  "key7": "2NXygFraXGEkjJP268cNBPSgAUnkJfoZp9XhMsR3S6eugbTYkkskeWtTesLrMNz6FLQpjUtYBaYXVf4VHq5tCLPB",
  "key8": "2jZhF82RrVtz1zBaez3tVQC6WzVE3Re8sK5efj2ocCCmZui6iwYMVouvEDSrTbENxtDU53vSSRnCHNHcH1G4xZen",
  "key9": "2M1f2tH5ZTeFt6b8qJoo3TxvAGhMF39rwruotswVQPFKDNLW4aGJVQHZaJPvNEBk4eVZrNXWZskJeqwf29Cmm99K",
  "key10": "57Rz9btj1F9Ygjig3aMTKWyFhUze8qt7ySeoNWh9YwUL9jXdFRR8SPjzJt8UXJgMMP9sxQXeyrFYAWaT2jxKiedJ",
  "key11": "3t7wjHnnQkGUsdnXUsKLVsxcK2dxzyKqwg9AepGT7BYfTuWFXsuS4NZSRtNWeoX5j4whA5mLe9hUnY75fVqkoTWW",
  "key12": "3hWdM3tnfQoYuhaReELssj1SUqgbQ3RdcsHbMXPuJCLJ3i6zRzw2XEqfm4B2dkfe8UQGYR8FJNjBujdTSq7JtdEx",
  "key13": "fpSK7ZPp8QX7eMwXjQ659YMPfqAe9kbGLXfKmYcutoo5vJKEfW1PQVYkB3in9JK55vwomoksS27q3vhzKSWU3f4",
  "key14": "37zQkwzkcF62cBnWqXy3DmyzyjQwGqvDWRgn1rJnhYRiK7WWw95brHHxJBUhjAvrbU6na4LGjVMHsguWtYUy9Ebo",
  "key15": "4kszrRv4rnvtxpb49Df6dRxXA7tmFNyWzroeM8dkiQcjsnqxFm6etxeJ5WmYzCfYjeiXYFw1Ze7vB2XhRRemXyEi",
  "key16": "5ZScFtUxhVX1Jx7b7LmxJsb5ZsNB6ZmjX8kiMwFBPWxBLgxmKZeUNKHJsH5NmaVhB3dCAcC4QQXGRJHBqpCeozo8",
  "key17": "3RiZLj5997vt7fUHKY9uRidcEXfzJN7254t3QCSvAVGWvdETjw6E2BDsgbeoVmQmTTeWHDj3WwFZmN5ARkVFxwL",
  "key18": "55swpJPUwytuPSkXQq5CE6BDeWfGAy13DStCaHfzwv4jSmZ9g9EGbScDPdiPdJASNeBCNKgeSrjYMVce95BcMXe5",
  "key19": "jpaQzeukrLyKmrJfkDgotGZSHcrL6sybYuhvzTpm1NW467R1psyknX7QRqt66Kz5PM3PFQd93wvKBHr2DjNjMCZ",
  "key20": "273ctgBhS3DCqT5wctsjsqjoySnvM3ZWrNsesyyEHmbckXWkpKKF78Kv15VLAC7qjhbuLjfsgeZMgMUqZ4ZJaTSA",
  "key21": "2LL8FpXQnUktCP8gEzHSHi426HWqC77YHd8XTzpk5ma1PdpnsKj5KrTfrSFCEgRG3yXh5NVUKWcQnyf2NHRDdJQm",
  "key22": "3ZXfeBnTfY8DqcYxGwUnfmYB93uYhxGYxLbmBzN6BQEoqSEniWTHULjmJ6aWQ8hjXzYXJYfUYAbjRjhwnpiqRxFt",
  "key23": "5oqaq8a7r2aqnts1nJSK2J2PfA9LBp4C9kWb7yKHrXBQNz8JDV7dPV2KRhgGHNUsapnemDvkugsGRSbW12gTKP7R",
  "key24": "59up3MizSqP4SL35exAfPCm2mNDBEZPjFj8NoPK82DMp9jhi18TTGtHYW4D9xeCxumo5N8e5hNt1Wk7hzLopdjnM",
  "key25": "25AQdphsPM8TM36dJpHYCoRqYf3mjvUwSZHRj1EYX27FGawmS5H2m7DMDAH6xCpHEx1qfnNq5H3ijhDxw6usQprZ",
  "key26": "21oxM69EarupsQHXSgmoM1pYxgKmaFafxg7UU64hGW3mCcydSLA3rEKCvoGz58tVwwuFRHqgXbuDUFjuDoLywgFx"
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
