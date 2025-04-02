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
    "3czyLyYtMin2yGyet3kSokAsREuM9sV5baLKj4h3j7KAZmZ3Mnbe9q74SDCHNaV3Y3ipTzFCCLoSPiFbf448yhxL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5je3UAGFJGuqog2s3hY96uQyt2DEX6MHabqxxCMcWb8LjZdHcehjsQzd7ABKxtZTuhjH3ccfTr9aNmYSytb5LoK6",
  "key1": "3HQBZb9dpSvEWb42Bg2TDQPYAP7vgzdSSkkF2a2kXefadvp19yFMdm2Wxbrc7qC32mhrmzb1EoFAPRH2Q97mUJ1F",
  "key2": "24qwifewZRs7oSdmPQ5Hyjb9tkN3wdZeMGFSVHKhisdzeeMV612enQoZ99aj4dA5fdTJDWR7NL8sfTgab47V4nEM",
  "key3": "3zD3S86AymziPi2iuEf9YacoRadarmZmZSG5RwW5mCLY2aurnEwqrcUMTAMzNJHwaUiz5LD5XGkDUqa8taCcrdJt",
  "key4": "3pW5VEEi3ehtiNj1qxxM7FnhYrr5FbvXu19cBcgNFpbrDtvCfwzinynqC9wpQVXa1KN4ADPCeEvHVDs5YjvGCVV1",
  "key5": "5TMeh72PNCYCLAS3i3M379GByfCsR7U6BpdjoMXP8vAfgBen2DeDyKLNDq3KDtJm5VJu7wNXZvNtBntpGkXJgFzs",
  "key6": "MiUeGAP7PSNiawWEtdT1Ysmv4AVNv7py8tn8cLXsPkGsvh2ttejUDFiLprYHR3kx5XM3UF9d6zQnNPs5ModWnqJ",
  "key7": "2op5vqRythyGa4uLJeXb1QqPZFK8zKVivin59HnMEEDfQVzwnaq4rumf6y8wFM2GhNV3KsrLVhEBKXUvFCgrspwg",
  "key8": "4WPyNWYbqxSv4SX46ubD8WYesEE6tyP3NeDNLsJQVKXrY1pTzTeNGKwh4ShP7MxKFtDiRtET4fK25BM24sgcWDMr",
  "key9": "weQvpBLFfaxzGhSgsAYXqTbcbXhULwp3wmQB5KAr4CsdPwAoKQ25xDFaVwyfELJi5bKkrbtojz9ku1gxMNxme8b",
  "key10": "5jPJzDs8YqVyzcgqSZbD6y7jeBna3Hv4gdPu1KKkcxATtUd8XTXCdTHKEYjb55cXcSidDw7e4uqMhqsRUcqLfn9e",
  "key11": "4nC9JMw8yPcvtNzHpQxgscDAJ1ksa8rszRASiurgnZoqMh68xw9KoeZSZM7BanRt9Wrio12Z9KaXTfVXmWqAsuuN",
  "key12": "25p2iiVU3JUvvKtoqAcej9MttFs7gGovbBDDQRuD4DGk23U8ZXM6jvC8nfBaDKEj1SXWzCqt7xRo4tGqrF9BJ3Xk",
  "key13": "4FLjweXDSmjtwNdbtRoYs7baWhrJksNFGmbb27cHkSyoVF9b5vFBVdipShpVjoF3272cJyb21R9o55JXAopA2ZCz",
  "key14": "25tGEbmwKf6Z2pcBsjkB2UUfN4cto2M5nw4CE1MVQ1wxXTAPycSAo1rRZdSdLFs7JVwX6aZMgn2NahMcDMcRFHYL",
  "key15": "4jss147smWcMuY21taZ7zyRFLQdWJsP865uoDxx3wkghiP4TPrMNKwbjM48SfY9CPXz8yp6ESeSCyHFqE8vmRMaW",
  "key16": "4UKwZTmxRoz36THj6CFPPWZB7qXG9Hnwp9rC1g9Zh6hxZ1hukZeWGVTbm6R9ps7pT7emu8nSzGw4DZL7QP33uxaz",
  "key17": "5cyg88DTCc5zMeEDwd8u5rVvRW3Z3PEWs21vrH3SroVC5ZcBXiFWLo7wtf6nXAtPAEVLbzCZcBnqaa2Css8FGYLX",
  "key18": "4h4gueyrSNEoAGaLTmWt3aMM6h256zkbsC8Gan4x2bTKfkUaeKdhhC9ku51ZBaXtBiKz8XsKGdCNw6qxjSeh7LS2",
  "key19": "5W5wv7PoDFdcCA6aTWTPgG1QnbGtnGFUzk8tm44UAYdz7jeZ4fv9usvMvq3GgK4FyqFgpashDJubu5iBEwwQrC9T",
  "key20": "TLqkzEceikdejXjgH2RA4n2icseKckudRhah8ddZUh7f1dKadhzEiXCWSnTBkpepzn2rd3Gyi47eBHXWZ6tdEMV",
  "key21": "2mEZCmpPAnegeNPXytQepD7rzJradFk3KKoFSRbBMi5EaE2fCrAm3g3FgdeBgoz5xAAmgUAd8pC7nWMDBXzhjcn3",
  "key22": "2XH9Q6TnfZb4XQde8Aq3tXJNfB4vBzueWsBeUCS9jje1kPCBy1NvGiAAgeKApfTvUnLghwZQkZjjeTLq7z87A2tK",
  "key23": "LUn5B5xYcJZyZa5JtSJKWYvJJ2ijzQDjdvEt7vLoVQiZcYzjZvpqi31gkNkX3TEEz1jQeRVBzAAeYscHjTpEYa5",
  "key24": "3b6FJLfgM6Ko5ApppBdeW5iw3TpTeA2sPkMQsTkyw3LpHb4uTgs9e2PZuvJqUqKFU2hA3Eo8vHsvBKfYpXGGafz",
  "key25": "4JqBMgXru3qiJLG3UrHcnFUfr6cbs77dbdd5iBZGMereP3fcoRQ2QzdEjsc7twJHQpCzoi9HvTZDC8a81nmDzoBp",
  "key26": "38gbYeH7a8omaetiSCEQ68bLL9QNoXoTYT6NbepFdnEkPC5G3c8SAhUKXoWWGymSpv8LX7FY1z9qqRgJ4dyRwtva",
  "key27": "2dAdovbNJGGn27K8jd27vCsrwpsW69v7kdyvBPWLRKaRADA8xgNKMeyxAVt2MSSTwH3ahbR4V3rL4iiDsatfnDG6",
  "key28": "4PWmrBEh4uxty9NpKYfqmqvD3gh2whqBX52hb5cKNpLUvVPZKUxhCWXgWwbsN7kqZQ9GyhdnPkxYBu6kG2akjWZn",
  "key29": "rPNu83UZSDD9WHQJJkEx9UWwtKhpke5paFZBeutQzzyrRKtpmqpYwUNCkvNnxKSGyDYrm1x9SoZBqZHVvobKDJa",
  "key30": "3adajFw9ZPqdyWcso3wRzrWBhqtwFwfWpjcsEwQwUcnB7fxH2JxFKwJYTNrcRJmthbBeRaY1WuJBYj9LosiQcZf2",
  "key31": "44TBhY5MreccUvAT4A21J7sf9iokueLmKyJELcT4CJ2iSVcvv3doN5paiv8MV6wsoaxpt6TXCDdg1YMwuvEb77nr"
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
