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
    "hawEbHaAcA7tQkJQeV9T6rwgYBWeSwnWbFq158VFjUJyLYoSSz7B2nJbgq1DdchuvXiAZ11wKwfbQrJHNpYfAhF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WNzah692tvCdkKMqgv3wSocHrpyejNoxPyFdGQD1pF1FbapQRkASgELPzuzcSPzeAS1X7tE1EGovCqhK3n4jbyk",
  "key1": "2yo8a2ifXNFEZfJdUQRYctRNcKhS3v7igsY147gTGNxEGTMUBh4fbcofC2Q7AK5Y3jh7fYFKfiuhB3EeqfA9u9qF",
  "key2": "5xN1zokTn6hWQt3xgU9ST54cejudojmFbJ1kh9Xhr1KzUT6sXSUd4RJXeibjntACDa5XkXDkTAVKwuPhfoxg74p4",
  "key3": "2FJZPA93h7HuD6bUGfFv8XNXsCyMp8Tx41js2Yw3skH16S9CnsppMUDXPXWwHsM62yiBMcWWt41Xvcgb4Q6TGdNx",
  "key4": "ESUgRKbnReKSVdtpHCyUcwhNEzDYjFP5jEn9beyeWgdsGH13x9u8KzdC2LCMtVfF2kwZBQCr9S2Xfr7qJizA1m1",
  "key5": "5MFHAVekyZYy5sB7ZYgtEaYddR8YzTa1VM5HdBenbR6HTSHNhaBS1cxV1qPYjZUWqAK12GCrMBxW5QwzfNLAWnut",
  "key6": "5Zf7bcMvJFS5gcAVjKyEtsR16mbdZJqw6QZm8kNRahAocbXMuQ5xxjV6AifiJwkdvupF2geByswbh9EKThjAPkM1",
  "key7": "XCdvby1jjjC5BpUxHYaCMeuu9nrQGHQmuQrhtM9N9HNxzWNTtqWC2o79MNSb2Uf5jXg9KsGFePihywYwVCFma4F",
  "key8": "4A2VLJnbFtigpEYGAdP1zzD6ZXmxmT5K65JeBog4A4iv2FLzjrAVmPjQpNthwjYxq4zDUTk7ymqeuhkUzzcVsXnF",
  "key9": "4ZpZPYjrKRShZSVEUNhd65qoUrGMFq9xxf65SmxkjCyP1CtBapReCRz4KzLKDGpDuPrnWmNhyPadCWJ3mn5fxsij",
  "key10": "4J7koZj3razFSirx4nppk215smqU6qkfEUWuMH1ZvVxx72hxZjJAT7FMpDxJxtYswAVoRxoLufvtgpM3foAMU5Dt",
  "key11": "4VaKkTBSDMfo2LKjnAUnDCUc7tqXJhvsHqAgTtuzBWJNkQAKtNomczrBB7TTarTRkjhU6SWgWtq8SjwJNhavYHxN",
  "key12": "nD4sSuofsBs4A2JH1xu7AdyUxn95asQEthD7Vvcq39HjRihwm1TrthDbqcQ5AgSH5wm2xik5ga2JFYPbPLQa1H2",
  "key13": "nDx3GtaP9q6AQxqwgouMSGJTi1nLw8WVwtDomvAhkd3xFfuR8DntEKgQhgwHi2Jp6ukdM4UrWNVMktnGvvQskm1",
  "key14": "zRqdYyqdsGcieoLkrQkb1LTVNYJcztkvYjpZWvJTKG597VNfk7pJjbMaT6Y48z9rr6iieCnK7USJL65pDjB4iRp",
  "key15": "4GNLJqLjgs8oHVC9xHTwNjp1qjULfHVfndQXLQbi3ENZgktLeA3s4magPAftEGe549pFVLDp7ipem1PeBvJasFMq",
  "key16": "4ZfnGhrL2mH2dnqkJQGFVpcEdHnYQRUhSRkswVdEdfY9LvqphaXFD1gGGWbvKyGEvGiK4nbAUwAUpaeEr9SkWNSp",
  "key17": "278qbnBaEQuQbxipL4BPMUs29g1FDSgzpwKQJBZS4YVC5Nvdn3PtPRwKNm3Kzzjad5J8Xpje3eBBY9az57tGuw3h",
  "key18": "2RnLLpzfLP5NvZ5NeQx7ZdnWgrDkaoN5JysFr5XunQKURetypDBadwoocsMQsgZH7hKUfH1Jd9LkZxxWoZUXzVKZ",
  "key19": "s227ozJsRtKt1TH6A59XzV8zWN9rGKJL9rW5Gsc3H7BY7CTpiJ7tJhhNL4x1hijw1RnCmCDjQ2guPCwRGpxrXYF",
  "key20": "5JuBq8vSb1nt2xYbr7jU3xNU4jhVAWc3qeLAQff7DKYBS4v6XKmrKd9o2fLh6bUfpeYzpgypwJZgi6aEpnTx7pTJ",
  "key21": "3gAkF1iDvGWh1oZPW6rBezsWawWfXzRmbCyjY7tubNsrrZ4TY7qbiHZfM7j1957R4HfgrNuUjJno7xmXmtyxAp9d",
  "key22": "5c1cs1mhEofw2yxqPviK4nt3nvtoEWjtvKEvhsd9dXFQi65mset9VhXbibBCSRfABhZamnn2iRZtsHL2bXCfu8NT",
  "key23": "5M8ZqiC7JdzzPLMjxU8m2VE2GfWW5sSSU3Ux7bq99jezazkG79DoXkF248xM9SrSPEfTDXdaQEwt74dBoSjkFdEU",
  "key24": "4rEmthGpXW75xA1mm7uCqNcgbajr8ejSevCxVMkTQfUUs4LpGpxLMRoVBnBBpKsgY77WB764o9wNXYKdPXN9f8wF",
  "key25": "Lgj5MEzyUFNNdRvGXHkgbQFFJCk3wppLp4TuU9Ap79rriUMhgAaQ9bBXz9qygGBRG1fT24fp1vwf7GoapcNFv6p",
  "key26": "3zmggCZeHp4Fi7kWD2UcZrJeKYMQALGkGhdrfcmA9GjbTadJ7QccgCbeNMKMqC87ynt1jqk76Txix69DFtHs5UwD",
  "key27": "2zt7mz8fma4bgKiF1gtcUToZQAz2ue6hEJ5zuUymGgM75TmDuN99ty2vEEFekU6d3NMg4RsJop143eqRTSyUK4vV",
  "key28": "ERrxmrQk7a9iHPdmxwxrFuPHYmMJjrRGDVYTHgAMcFsyMXNw66Y3a6etxv2SwYwLuZUL9QM4Ui6QYCzeZeuoXV2",
  "key29": "4yyyAau1f4bonWPxuYorY4bs3qUjqDiwRzkK4DfXBA3xP1jtaeWVGtR6cwBkT3Fw2fVfTgeby6bzbRUpzL4pdB9T",
  "key30": "4Y22XPyYdAP68wEcfvse6wG9XxXpztg5ck7c8oBDdGAswUg8MHhNtF9f9PExYugB1NtcbDaR7fehBv4KuR8CB1up",
  "key31": "aKMFYiNEDBWVyAQU8yC5noUA6t6doAgja1vF4CjDgMStGzA96YBZPNYTjD1tFxFLSzNkkqNE8MKetcwHNQ4PVAU",
  "key32": "4cGdCTEF5jEY4Br5rRHKaJAseXfMcvJ3xCLhaCfeCVbjUvA8syFqHzUqDYFCLG29w3mAxdgWJcKp8eaWiWUmYShb",
  "key33": "22hmVjmQzmkQpVC9KG7HNifR9oREVxFCVHmvg5FCwFGVKRWrj8yfd8cVT5WDU7WuahRYgUf5gt23aqQg8MqbGioq",
  "key34": "2suWMUzXkM39EQK1rJ3emsgEK1hvYBumu6WCgMePpcZcbTUtqfSvtUgt3Qn4qpKDFJqg8sY8UHvWhhkFfYG759Vj",
  "key35": "5NzEzxzz1i31i5sQYuzQigFVxGRXd2GhgoPMPcVmf2rTTr5WpTwtqvmdkizkoJ1jA36Yztqhh2STDdBT6rMQFvfy"
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
