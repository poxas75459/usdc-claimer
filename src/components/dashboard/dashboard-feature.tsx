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
    "4oB15rscf7FyAV9kszCGfXruXS2UgNpbqZrXcA9jNW3FfefxfQAdkLtssjt27JPWNG9dLJ9gPTaSpCZ2dMafnrRx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62j5bE4WWaQoYu7ADUs3Rzp4dKpa2HjfUBfrLFejLWCnFoyq19X3hV8wdLbWkvP3iJq7SJiAqoi7Db7o6iu3jnXq",
  "key1": "2xxRGkGRYiY81A5Z48APQqRVA1CkUGDSru9meHwFhABtf9rNAcwUmxLCNLKRMZ5DphFjGRqJKGx3hoDtvyjCx4y8",
  "key2": "GmnhmK1gpsuJuJw3thyKyTdqZs1o7SD9rZpmaSzSnoP2Kid4aAS7k5LWCYWa9LcuMT9CavuC7GwzAeG7HLkLosX",
  "key3": "61AkNs2q9tq7Unpckcy8ugeLho9jhKCPs88CvK8g18T9EndhKESxsNVt5A9SEDNTthbGtQzWHsGZcsp1mfht3BBj",
  "key4": "4Ro8Rkm7d4oAtoT4haLDaZig8bTSyU7um5zw7qW5hNYjPQi3f8XtLd96oaC3cpkYoTCPnhPGJ7JBkbAr4aZWQL6x",
  "key5": "3BdCzbADuwohYSYSW1awfdYcuHjioeNixGb6YCDSMXpRj6DJac8GQLFu9NFBtNLTwHiW5RuR8P5UdS6JWGPSCGju",
  "key6": "2atAKjZmozV6KEjmDNGGLuTn5VuHdh28HD5V7QFfGxuCqUrtGXt9Bt9FzyuKyXS9yTNPRdH744TUsvSeDKbmysRX",
  "key7": "2YySbqQgttV2YpsKcMfnt3CqF66opX4JVsQTGVcxx6ZJ552ByJn8Lrspg29jNhbQ6tka77BoVbAw6EsiudoekuQf",
  "key8": "31gGGsMZ7bTLsZ3qw5PP5FYyKG4Mgj5ZiXLsTt66xyqMkM7xfGW8AKDyR1Js2mbaK2uceEpUzKP5H5jHXioTjMHr",
  "key9": "3gtQvZ1sGNowu8VUmyT1vG6L5WFtVKNape28tc9T8imvwWJPNNcL76xY5JNNSbbNRaVLKYgAUfciSETfpQEn2QfE",
  "key10": "221z4HruNiQauDFBDvQ4ctfiJNr5wHWioh9or778JiXZkCbRs113wkooKin5jjxHBnYxSjtbjFYkqhVUVju49qV6",
  "key11": "21Zwfbx2vGNDUYaod5k8ZX7b1uvpdTDbDgeim6K9qsWxgxWnCSCaudWhSdzqkfDnUHqyzMCmCeBA2KP2E4P8wekT",
  "key12": "5yE98u6wGvNr3rWoNtrBZAgDynYheKDuyrRZCLUhLGCBYheSKihAFDSS1ifXhoxMS36iuPkhY7hvzFtrxUBKLeVP",
  "key13": "5grB2Hj3gqRMvGP8aPBRa3RpNmJQvJvMPAfYDNir5BaZnskr7gzzLG7orBihdimtA7CU98nxuGZKSzYzaYLiqgjZ",
  "key14": "3X77jaZwtoPZaPX18cdrFEigayLkxNESRGW8WAKJqQ6N1sXqD3CKiLjaMY5LD7LRgXYL7pKReeQmuA3T7KprmE6r",
  "key15": "53uatNuaTGrA6kPBXwDZ9FA8jWD3GCoTJPTCoP7dZ1jz6CjrtYzzBHRCFMFNpmkCTdrL81z2J4tSvrnx6ipzkhoe",
  "key16": "5QtXEoEQCAW8bCgkA3oE9c5tBpgyGB1YY1aVjvVroUbBuv7ZCgUHxbkEqBiUXST8a6EruuiYwqK2CwudQkVatzcc",
  "key17": "5JpoqZQsuxQShDoQyWgLGg7dJNehdNaCgiHGVDiF475aVAo3ytZEJkSQbr49DqRqjCH7J6fWRrpmq45ZYbBTCLKE",
  "key18": "w4z5bJfAHMeWjrZa4d9FK76msFvasS9sx4KAD9aMoBHfCZkjfRMCyXxTdUMCVfpYdR5XAXm21EpaUjjcs1bGiBa",
  "key19": "5CwS7Gy44zwuumthh1Ut5i1iL3HrZjCYbKNqe2T8yTPt2889Fb3G1k7ecJkDSmfvp81pqbNs1891vauS4QuoTKiA",
  "key20": "2kcHtz9Cxx9KQ1d2KKaY23gz3ka5QMxSLW1VcULo7DmRrESPEnZqWQCSTW8EdAMeJQZNb7HSn7fWJLRDLnuFr86d",
  "key21": "RZuMEKuK39GBbpUGFeZNNPeAWc3sf3BrE7BJFBW18ANJx47VoYL7sd8UXNpnCPrGBTLnv3ziiF7dJ5Y7mrkDJqV",
  "key22": "438CNtSUSonu9GhfKuvPW8tDg6FpSNA3FpdKFCvZctBShyE67aJuTTE1RfJpSPzdeMQZ6NyVTyV1K7mNBRZom17h",
  "key23": "5MzXtV53tkYNFBaGmUaSrDMf1hFanjrtF3YUiUXiWW5uujjiLdA3hq9mcuvArEUTwrzsC11pVjJxAw32qCJu5EhX",
  "key24": "2CVeKrriiVJbNfUjp9F7iZLBwN61CDgWNXtfXjznFiVEE6aGXsKWsCFwFR6x7nGgXk9P7jNjXir74sTYMp7vur4Q",
  "key25": "2r3cSgRX2iA1o2xAzZoKKWE21RULML3VWp8wei4iYNLSx54rPF3yXRdGb8y6YGFGU33sqzzrwb9Mhh59jknTUqdu",
  "key26": "4eLrd2roU62STpEeVNNedjSNZPbfSvMHfZhZ79RtCGDsJLVVK2MEABEMgUiuABn8TLNiG5ug7dLFiRsN6RUMWjQr",
  "key27": "3Q9ycvBmP6jVJSQAPPY2A2fFB5beH5HZByxcwi8YrT8AB4ycZ2EqJoL9tVeadcP54JjhFXbkiFAH7Ru8bypyvbQn",
  "key28": "5CJ2nLTAW3zCeoKNAgYvuq7vMjoFacYAWZR54tGfFhtaJZFajWNLU9bTYtHzGYPcbqtWLUB4RSp6ApQEWfuZwY63",
  "key29": "3K7CFjRrKFXpokg1TgKedaoVZ9af3HbDbFnCZx5zYHhZs7C4gaMtJVob8NJCd66rL4sV95PjSjQAkH3pJ2apHnrY",
  "key30": "yYoBGJQGiHTevpeGKRA6UGHghBLuGJcaBwPTMSjHmhGVszzThGZk6iN6JLJW1ionuHtafS7iBU7h8F9Qh7NQxsb",
  "key31": "2GvLRqaKQkCSwdAKZMge7UbNkMYubF2hpNS95H5UNxx73LwXm3aA8ibKkRSzL7ffUf76VzxH8i9NchJJk26nPeqE",
  "key32": "5SVjBG4ZwejWPGoLksMgEpbC46Q1tsPNvnvXnoicmJD5cjAtcN44mrSue43aE227kYs5VHCrsPzSsJtPsJdknvg8",
  "key33": "wHEpRMfZFNhxtnZi6KzCL88pgcxTz4eGksWheRFALYsuPWQAB7MmzkAvnFNLTeNuAEMrBkCunh779u5qF42uR3Y",
  "key34": "5dLbr9sacAeYtr5brLSbpExLupR7iuvkvHPLbZchfNN5Row6NeqLqXn7zBNVW5u3GrPydYEwsgbcXmSFVNuLicLA",
  "key35": "2bsumNTiaiooufQDe7q8PqsqAo9RFp5RK1hL5yra5xwovQTqyDpg1csbJN4Ayu6DDD8mavXV728MMBPcA5ZYV5yM"
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
