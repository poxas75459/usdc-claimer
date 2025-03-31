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
    "4rFsiGwMRCShPCY9J9SAa3ncTUP2ffT29Q3j3KS6BYxME9SHiwe8jkfix6yxEMo6swmZy2wSXg9uXqutDeoyw3Vq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZLX4ztrKujj4iTnJkFyDRiH7TXWzfGktjmAq2ayqNwrVKyNZeJfhddzzyJHybsbhebx28GFKDfKrqDkSxCNbFWa",
  "key1": "37wYNzi5WzD1cAb6Q3o6zAUodiVse7FNNmHP4GHfv7wEbT7pchf3UqJH3ZoSmDo19gisYeWXL544CWhpPYBRBu4",
  "key2": "3bNCqF6YCeCA1VE8jagJC3DjpTXAQgCUMt6pDzzpsqDK3y9fWW55otNFwvm1QACUAo8dYLvtjCWPXZLXT4VacKRn",
  "key3": "5HeUWvD4KdTBCLkTF5LZtRTv2PyezcxyBAhn57g4jFoGb5A8XKN9KsYrcbr9rH5manXox3bUZpTkZZcyDXU5zM3D",
  "key4": "4ohL8drf1yde5gvaCZZAJzrbdYJoN4GFnDvo2pkzNDAsszLgSKxSCeVmiBmkrc6ATfC9ygJdqgJhxJCS6xk8ZxnG",
  "key5": "3uPUEgCefjoqrBQ4BuKasNcgMeWKbHHYK1Gg3ehm4TUYUctpniqbJDgT1mBFbLKY4VJ97nq5mSNPn1HzyFj34Qeg",
  "key6": "3tHgHEkPFTH7WqSsBdh4CLuLpT5Yp5VYL9DPm4L7aniojGNu7Zaev7X7LYqTxHKcgtJAMujdG5e7AguwS8LvVsVP",
  "key7": "5dug7TVAm3ft5K4LvQDG3mUTwLNiaHK167dEPrPqUjLjWnoD5JXucdQnWS2m8nA2KBcJDR8tnbKqpkarLZSk2DsT",
  "key8": "RNmqFAug4FQUgmZhzBkCrwmWMdfSUf8k7oU3BnrkwoeKmhDDzB4vtqwXhjPA23qRBPniTAqNw2bY1cKiy9u4qqg",
  "key9": "WsWQpYzxB7ASnp3U9N9e643pDmYweMREfr3Mcxqzrr7xvf5tkukagrktognWrzpaxPBP224HTajB4Tpoh1z5Mm7",
  "key10": "5YHSPuLRrygpHo8BPqVJGTvz2hg2DtWyoMozngRKddqKLJScZZBGuVZjKoibF9W6qF5XcTCZvcvRvKiVQ9pT37BZ",
  "key11": "4RHJPbhgWLTVLfdtizGer85LGHcPCM9SEMM1TG9imYc3pxSLkDZYH5Fwxhyk1SjrCwwELPo3ays2PPZnCJ1pyJFB",
  "key12": "4XwwmbK6hVkrdfHXdXBZ8pRxhBUejAJnYEzGxHqnq9LmW9v4F9ipGsxLttw4ZHMuZTATUJ6akuM7p8FRyShYgqWa",
  "key13": "68zqaReJkGHhL8aGBMPYJ1LCpvSTzdyhKqViJMK3owkB7x8eJzWbNV857DHyuxTfsnLRsJA8zLrj5DweWPfjmXD",
  "key14": "92t9oEh1ZFtmc3SypBcFvTLaDMGjQDh4ThyRRQu1irR9JVTS7yMV5qJJisVUJNPKAXbAZtoSZFLYX6ofDh3eVqR",
  "key15": "4DA3Ke3VPYjmUAS1uQdvAegGNkJfkVhSWo2qpHG4jKeaTuHQ7gztiVuSyzH4Y5xJePMdNNuSgXy6FBDVBLh4T11W",
  "key16": "49R4BX3T3WPrRR3mHLMnZB9iXDmvgtxuh9E3xxm5a22hAirx6HJDY3HzCPdbNtXLGzvpZ3PwN6CGMbMsbcWk585K",
  "key17": "FPpKqJ8X7hnpdJ18nhe3YSXgeHJW9y3iuEfEzSktpYtdPz27xQDyCtvCqK28wtbcEwW6kcrT9x69NXrdfiU4e8x",
  "key18": "67E2Sa8XSJ9cLbD6Dvy5ZW5zKFq7VyzL3FU3ZLKpncYEoow9JrTGpXzDHSHDX9njRiZ84iSCN4idu8KAtu7zGigq",
  "key19": "4Qw7EzwV6VS2MopatHTu5d32qfR8hrAmfpb7jvamtvRqGE1qM3CvEyZTkLWK1m2K3mgRYwiRJznmGhYt2ihhrNX6",
  "key20": "5D23emuZUV2DMifFoouqJ1nQSckc5dGCZpgVXD45bkpRcA27jQDdQLtvYUN9HMwUBTSaxU4WcV1FudU2WdgfWVBu",
  "key21": "2eritQscmULieeZj47FqYJYpFCpbUgVjJefJsNapJyunpAAt6QVetsz1gCJHHT9z4PYSz6rtYt2RW33xj6PYHdPt",
  "key22": "2MpSruKoiyhibUNJkhZ9RQdRGhtsbSQb3GW8zviCGWMKVq6TYWRaszpyboEG6dTDh4rfVsqVWieeEqpiBP2ZQMR7",
  "key23": "2mUv9ZHUdVWyMQyeshE9Rk8FKHiKNGovv9cuwBQ7AVXtKSN5D4SZZxoLUV4T6PpgxX2JcPDYwSsaBSVAhT4Jq1Fo",
  "key24": "3mvsfcH7rHvE5zikBbMHAJimggXCWA5NnRsRoSjmr97n4fiSS5UsKfc635XDN7Fc8uX4wwwpW8sD6QezCoV7fixE",
  "key25": "43XWWFf5NLn2oJFwX4akKFzQb1j3Xw3C9VRc3Cms5LjLKu7rYzcW2qWRYmFySBYwbsYLg9mz7YjMqWRWhzNkZt1f",
  "key26": "3iFmxkKwCGjjdDRv9CHkXvS6AkQqZs5YwJejkqRpbweAzDcC8Kbd2cA4c3hXZA3fMzhXWphS77tBLEKy1R5hdA3F",
  "key27": "4ehCKNUuz9JMjzQXmJ9ParsaS8sV1x69mh7UDKVv85evD7D426vNS5KfHbgbrgi6TmryM5gaNeCmp7nHuetKVt7o",
  "key28": "2EZbFF4BBrqG4VaLZMME2Vxfern2ixPF51GfHvbs91bhR51aRDzQZ1FcVsJWJitQRe46KmdC9QYXn6p7QrzLzxs1",
  "key29": "5m9ZRNfqFX1rVZnSRLm3NpzMb5ipzA7fvYQi3ifdWzS3tV6UZ868gLVhpdvRDjC5hUDC2EPJdbdj53jBhCai3o2M",
  "key30": "4QRjKBeGDtSwucHauvBCa9PsnpQpxDdqzZ8kY8ivtzpkZrTNw5hX6vVkgUragBdwLNyDH4nXqvB3dgegi5S5kYw4",
  "key31": "3khw57oKKsnrrfEEhvyNFYCzuK43sW76pWgZR7xcNg3VP8BjoR2X6TBo22XxKkv1WauLJNGUYxsPaCh5L9ikZtE2"
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
