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
    "3QwLn58aNngHHMnbvV8JEdmxiApoVewJ2q5ctpLQEdy4Nwamq2qdqDGCQ1Nt1b3hoahczt8HqL79o1sabgG4edfj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2e1mbAi55SEpgYAeBpgC7yRUiEvPYXawKD1fJViyw1g3hdtLbiz9LrXs16oAsufFSPsb72Bm6PWrwmJkwrr67dd",
  "key1": "65df5Uaxp1yZ1gaqgdEEXpnTUsEPm1NN8DY1h9Y7PxqfEDbYhDU1GcRc6ZXsAwFqzEXednHUVH1weFubivYLFivY",
  "key2": "2KvYVFA3i9Mfwbued4GUEDW5bD1CCT2S4UHWfrFH34nyPHcYrG9R9okw8UnHFACuVm3xFcQASnAm1qKB7auiVvCx",
  "key3": "3FBcrsBGd3MR6c2qfmRoEgVTsjuykJeKQHC37AuXpxd1xFhZkDyQf7uvXrYnU9JNbyhVLGCqZaqTd439rSb68VhU",
  "key4": "5ZPYtEiSBtoM6ndfjWZEzU3UqxbRWiCmZSFTg4Bn9gQSQAg2pHh7yfFWNcDYYcEBsqm2VGeTvF2U8FxR2xjJkQNT",
  "key5": "5uevspxhy5dD6LDcq2EH7B7oNduicFLU8sxSgLS5CH8Kd7G7y1t45sKjPDVZjdTFDpNiTLCi58fhpGwGrEsnC1S4",
  "key6": "DQZ9KuhTbGdvdguFK5M8frXEfZ2fYEam6AxML7jHhDtH55dRuNQvnSmoWWYr2hUiUP4EEEZjiPvy5sEcKpdmKPa",
  "key7": "4e9ASo8xqfJsCkEMQfAXVKfg178g3pQG4SFnePNLYSW8sNL99zxbQok8dpyinQJhk1xKx6JcPbt29XrZzBYPiBWS",
  "key8": "5deVSCcKTgt7sPPs2YnHt8DzhWoGLJFW5GkNqvNT2BmLuJKAwpxGkf9ctnqELbaPfA1b1SrGsJ7LY2NxZiXE4gRp",
  "key9": "53RyZUfCbvUni2B3daAdE2KgPSz1bH5UQ5gHh4aTRafYCp1T3aZWh5NMnQjsr61W7jdcerxXA8SFLZN3GWGSz4Zh",
  "key10": "4etLJqzqS4N7Xr73G4dqtTE8Jm8Q9utHtxPv6yynVE4WHW72zLDux9VRHj5arF5hkscndLNpEVXcqjdzRQjyJ9Pp",
  "key11": "tnPms2NxvUKrSVRaUNLX4jHXjAoerbqUESm8BUZhFu6qp3ukTHfKi77yQEGnFe977uH4qtmzPUz7Agr5c8kKnHB",
  "key12": "622nga9FM1FQeRphmY2XWSoswfy6WZPw1BXEQeaDvJygUAXsN4XhqrYDDtkdjHEkpwrBtSMmDeJLyUoSofEo714N",
  "key13": "b4Zat1PKJ173jm6dS48JUSDYG2c5VwBPFWxqxNL4QB2NNWGBeBSvpBkB3z2tgcp9QAdYwFoxx6zdYWQKTnoqg4P",
  "key14": "3972byQnYvuQwWWY8uSSpr7YqjmnGmZLtszRmNSgtHyKNQDNyjhKD81jiGSxKQqkxaT8kiE4KKu7ieCRkVJrJKA2",
  "key15": "cTVpLtruNzSbhQpEXTFHWbkQqoWmqLGU7k8CNx25twCJhpdwvLvKJLd11M4Pn27JNMTtDa4tfkAT6obXD2J994F",
  "key16": "2XwKr9XyCmmQMzMH6qV5BWJVrdxUXR9hpJfPNPiNzqNFsfQhe6sPiJz441P2G9oNeSA3t8jeuLy53eMCscu5rNXh",
  "key17": "5MadDm9pCQEs9oWzjtZ3sQJnHxjcqxvk9HgcdhZPn3mwzL1p6x3GxKH6GcS8iQeGErzisPtC8Z9xZGKbFjJaYsa",
  "key18": "4uYWp4S1wQW9HnPCkbyPrv6hQuwhvahhej7TPkWeYU4tyhkUZVWh6XisobB9bJMkekSesThJutqgieuycLQpi6kD",
  "key19": "29m7iggn3rvsouga7VHwBnRH6phuZAHi8r5nBag1wN1gGmp2hBKFPNx5g7aTbpp45Hg36kbKodvhkXnC6kZkedxU",
  "key20": "44uH8fRB3PACVjpDp49edZEHJDxRSitWZVqVQELpSy2BmCwi8DnCA7ewNRyP8KKhsvE8N3q2ou1cmfwEA1Gy12dx",
  "key21": "iB7BSzEJY6BqLXbgy94bgb5xswpQPKbSHE5C7hDuVYriyojuMZtQ7rf5RuH2NcUR2jYcg93wW7A9RyKibAanApB",
  "key22": "3y6n8LKjVcKg9VEFgdVrgXPq127o8ZMQiBQKjKNpGzGDv6EoLcPgszorFqfqrCyFzZW9cZpdLm9JYqQC7StJDDPB",
  "key23": "29QdETypkrpXnLWJWx4PkxFtv9CkkNP5sShwgguKtxzrMmjgyQHzbhG3tprxBEpPKXPLyvKj7ho4eFenYBfcMgNm",
  "key24": "2TwR38yh9oBNanCRLqckUqB2NNRb4YdiCrXZCuvjtaEjvsTVpNyoHj6CM4UvNWYjXE2fzRKbX43B6Fx4awqXaErR",
  "key25": "5Epiktd3YQgbMo5wnHkEFugHSdGV1Lh8SQmjgWhF2S1EjkbNeHy4GSWxEdpMNWo9U2TTgXWDhiFRPP6N6rJ2BuLZ",
  "key26": "5gs1HLSdVcZ3LdJkTZUgnw2ZUQefKhzNY6tXp9JAb7XRthzZLeE8ZCwC17DDgsxzUqK4s8wtEgq6VVPMQqU1rteq",
  "key27": "nSGYE3WxzQ1ehBfoRVB6emsfkhzcF2XEoHJoCwopqV23HGrejtGkbub6Y33bxUFTM1wMfyHAjnERWP1hxeHBkUM",
  "key28": "3NZFhMxvhjtE6KnfLyTXQbCV9SNUnCEH6QBoTTqMLYrebmz7Rprsd8M5hvVgEuLHhtcPRb8sThY5bURn6HiJCYfG",
  "key29": "2vRmnG4pKXiuvXS2A3GVLJR1FYkWG8w7byx6jifaUR6t4Ccckn9efhjDi5iXjtJy3Fage4wwnLqNqwSXs6XLNQ26",
  "key30": "2Gf3aJd7cPNCY8RwiWRNmPuB3EjkhWxkvVAqKcaxESb5Lc72yzgsxC1YhE7voRHeJJE4y3t8RTaWYYWdMU7QxKHo",
  "key31": "5qQ1kCjs29JMuj3J79kaNeaGJeaPM9pZ1kh87DRVfHxfbRWCDAeXtC29ENMeFHqXnoWsjU47NsDSUG3cU6NLueH2",
  "key32": "4qsmijgW6WJGfeZYCUv9npTYWZ4qYc1PKvtiRqQ3BFXWzWF9XPvmeSf7gqJ32pAv6xP74B7SruVAoLVBL4vxCZTF",
  "key33": "4AiuHWVTcHicVrKxYLdxSFDunsHFMgAF71dsai1zVRkywbnpPwNCuk1tmBB1rp85yA4NcFtsTFVJ7EuiuQ9uHvVE",
  "key34": "41f5oCPKXB4hcBKw17CfXH74YXC3G1wQkir9u3JtmvMjhEabZxoHr3qP91GhVPzoSF7Ufdzt6qQ8jq2EBXGR53vc",
  "key35": "5eXbmAhkeVDzpPwF7rDbMi5xyiybJ29ERAa3YMB7NtxY82i9r5gMQXAcXygqgyD5L1KM8deb73y9kuUgjY1bPtxu"
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
