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
    "5hcf87w5qRk46hcEcWvpMkLKVvyEhDNT5gNM234yQNDVFXKXmg1CuwqeSTH9PpmS39nQSxRxumWoyjSDpY37c5Hg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kY5u2gpFHnf1j5EPa8Dp2gwsLn69FMrhsHZ2AsgwxrHVbmPB3vx6t7KL5ddABCow8cF8f6igg4GeYNHTXAqiPhu",
  "key1": "wvfExg2aBhhGDySqJvmpW1w9BhKh8pmQoonfhrpN4qoAyCm9cPVBHd2G7G51cKLG1Hokjof5djqgJsAar6WWm7u",
  "key2": "2G8YqYHJQ97aAG6ELYq8KLLUUR8BKVKCXuueuEtCm1mZgN5WGS4sNRH1T1zJWeCsywbcSfcGCNigvkfSKwhzXnfw",
  "key3": "5PN1Ar2vV7wDehxwerTFiF7w2RJFDsRFi1icHwsYk1RpYApsDkVpHX8yqAPbp62BdKw8n5tKTbSUzDfnLFBMgkSS",
  "key4": "52FmAtubX6mZPq7ZvGqyeyrgfrzzM4ehy1VyX8fsfXZM1bruUzNdZFJoFzyjgdTjhDdzCN61HqXEnjvRiZoWuzyk",
  "key5": "yQQo8GELAyj4ZKAPUfQeMiVX75q7UAYA2vX8hMjJRC5whwpvpxWqKxaN1ZaQY1vHq2apSRLvMH8SjLNNJddvbco",
  "key6": "4V4JMb7ftX1ns9MEAiAZozvSQREunFGfVesfWCoPABhrKFiRERGshfUKnPCEX1ggpRegzv9o4aubJnCUtvkdeB6T",
  "key7": "B2egvWDcxZo3fuVn8XQQq63q9T2rrRv1m3L1rSdiv8GBovV6UzvoEdkxf6qEdFR3Br2arQiKWV1zXuJUaMugcqY",
  "key8": "izQaKLHsZNK8xCFqVKbzfbn4DJgy1NppNZdwqvmrnciPzwbZgg4b8ahqeiGk79zjq7XXikMR3kCjDtqLEMumdSp",
  "key9": "4a9zZS4T7qsCRynWZf5G8B3cXtwMVDfyNove62k9qtwAXuYvqX6Px9SALP9ZGC5hANcWeMXQ6Q7EHFbhAGbohwbf",
  "key10": "5i7psM699J22zaWYjCSejyqNQEBKDcdk4aDgUtjtkbZfhpGjJaHf1mPBRhKv7ykDhLxKxcmdgRzT4XZBqN3Qs9x7",
  "key11": "5efowwBkSf9v4uJxWGTNGzFKPVakPRwHX3qTBUMMhysNqqRMcH4MmmEFYkqp69vEiEMAooUmgkmK4pfp8NY9pWQA",
  "key12": "3h6YUZdqXjrf524E9WoqW6JFvAChBA9HTDWMGwz2Fv2ep4DGmcXaaAjSkpbiQeeHuc3TurZwc4cbwsBMnm6p8v4a",
  "key13": "52tErk2LCV5mmjqDbrA5UB9AoFxNjWN3yGJvfPMcMcjscDNHictKjPvkA5qhizFHvEUqdVDkaa2PrgsZU3qiWE1x",
  "key14": "31q6rTM9McgwC5MTzcS4n6cB471rWYYiGsdSpykmzmanJpVSUuYeUX3dyVKfxqU5ZqHmmA4djURwx2Mx38LrsP5h",
  "key15": "zg8sgWLUVidwUoJ2Faq6ejpjPGU4hEkXKLQMzWRDb4FBaBiovwRRZDR8aXXgBbWdJV3FDAfEAsLyUpem5PgQg1A",
  "key16": "3g9c2xJaZAe6zXDwr2wczXRfua3tCzsJM3fBPS2WbnebMcwCA3PDhmrb9KBGftVuGZCkkJ1BBSMYByNhP69WeUyM",
  "key17": "23ZT7eLs7zQd5yX6VHPW3DWitLto2ttN3FAjxRuNSabHvJPdunLsGVomPebwE1GT7bSPTpRcStFvPdHs3kUmRaMx",
  "key18": "29rWsJVtKBrmDPSRqZNW8RouEy9FgHrWWjoSNemcjrbeZeQ8MMtL3AiokHb8wKH2Ya6rh1GUJvKTBD9UDRJmnwQw",
  "key19": "3xoGXg4QRUsEbLzc5G2SN91sC7V1A4QHEq1wbvKiLb7aqMp8sr7ahpCJ993BCRXt1FWA9CiH2d4b4tkh4tytacHy",
  "key20": "5CVQiA3foxbFGjDvRMBQs82CtbKqk5dgGHPvvcCiUHTanameXxqxcj6v296BsubjmqT1cBjnrDWcR2KWXiY83r7Z",
  "key21": "4EB322X8JBBbzMDNH9zpH9vau8f3DKg5LzhaXRjBxxZwaSKvXtzrxDystzpBmgRudZdjhXvToXbU34qZHLgQk7kD",
  "key22": "5rxYNBJ4T3oEzJSsJvMtBHYfpgMvYjSUhcsuhJPu63hj1FdbsFy8BFYC1pGb4VrdnJHLYWb7w3F9MqnyPWLwTZnE",
  "key23": "DDbdJpkMrMd1eK47rZxuaufAnwyPnoprkgnSM5FLu9ADSoqDv55B641ZatuJ8ibeVF3aBmirJrJwrRH8MGU3qP7",
  "key24": "4BLzEj49ygPRjsbJStDdxSnLmrUVbGZRdXXjxoDq9Hp7cmF9BGz1EZ3hk5aTbNaZpSKDhRuHF4HrhYt7mgmagCRv",
  "key25": "42WRDRx2u2M3ta4KY6P6ymRxda89gbXzkFF4N6KEb991wK1U2ENNezddbXrGvPHtd2PEzL6GLYvkhMhFKLLLpZji",
  "key26": "5n14qKrx88pbbzNXtRpQGySmtdJ9n1wCFjHje6v2r38hUvcKSxGvsesvWG4KGA28yXMGjLx3bvNwviLeEZ9GbzAq",
  "key27": "3n6k2e4tJWSKagjyy8YSdcWKBMjJSGVt9gRHxFnNRvXCWMwgeGa9o6DSvkNBm7vntvLJzB4iTWfArCikoWSYSFMQ",
  "key28": "4WNCT7p3DYQam7VUS2XMXkvL8EDciLBh4MvbPKxWQHxpiuRvPV2U6SJR3hJG8Mw7ua2q12mG5v55LaVkDTtArpB6",
  "key29": "5itPYMY8jSuHQvzmwprHXcaRCx8pTe5MiMrgw2GakLccnvjMnqD1gRbvGSa7R1pjHTnkJgvgyGGFkSyf6vujFAwo",
  "key30": "5qr8nKGsFNJYLp97g4zYvqZ35UQmXbMU1b8VRwyXgNkGdDxh6LniveQdTHidfm5kyHdn425u7eYEWD7BQXzQFCVh",
  "key31": "5hZSy3wwPk34abKbH6f3uz7FzCnSP3a2HHbk3wy6oqh8TMAUL21Aw7N9YGuCETZhmdpHajVSkzJkBowGXF8jASTW",
  "key32": "uTq5X6TBJhPMZgZDQFtEhKGmBzqniHCAmGWb1ew3fe4S2nS3W7cEyikyEo9grVc6hB4aG5RM4nt83fynsohEggh",
  "key33": "2cZWY1RZoE79iqiCKbEobGJG8t87gvoaDCXrUziG3noBWrGVNDd8UX6FRSq8JDhmj9C927uT3W6hcDL5qLrh1YsS",
  "key34": "43taP47i1Diwu6vZfkRj4pdUdRbJUTndSQPMcfmsJnUgSxDUL1D5wd6hQPMdFPM1BdZx3F3X2dn4EePRQSScwYFU",
  "key35": "AWt5sfJNLd5me6Ao3Whdny2myjG6e3SHgHvvaNfZUBnjNVXnXbg4Q35vsw85KmpmU8E8QgAeuixjgJo5i7LJ57y",
  "key36": "2oVpQbZpixSVjytCHiHxNQrLwWBDpWg1gu4GtdkKzBunCE8ipjZ78NiY1HFyBnBr6bF9Kb1zHoHDdgpwpww6imnt",
  "key37": "2L1tMf9g5DFVoQkYqXKgAKmg4nesTKESp1YtsucGHUoZCDfDSMYxGDxDprC2wKGEGo6zVRowLgzzbdvgrNewQwCu",
  "key38": "67GXGx9SSSuiLSLzoMyM2tmGUh2d3LWtfgcbMQCZk4BFsPueg4xKyC1S5vwJxnLzj5G3MpgLLB8hzPb25nJkdXrE",
  "key39": "6q889Dc3CYGQwQVPhV4bTkXN4vvuCEePJzp6raS141YQ1qdLPJ4p9ryyfGamK77EKhXotDnX7YTiupKM9RWQ7hK",
  "key40": "QpJC4HVoWaBhNWh5tTSxJChfDq1DCiR1v7eMW9es4Xbf2JZRua8XJG2G5sn4GwrrUXaCXsbNpq2m4pXjEDrWJZB",
  "key41": "3KYv1Z21mFrPcYHh9byrgq7RGXebWinyn46iTXxMWsmmZtaNfjsP5k5Z3x6V1BJpszX7jyfxfhiyJ6TiTvw4s4kD",
  "key42": "3PkopHnzT9D2uxJouREAvrzEofdFBscrV2VTKKq5bnLz3pPcj2RzmrwgWsDK6nPW3Cf7GRzQMJVujxDyx7mPgQcg",
  "key43": "2pzvPrqjvAN47ZdQbduVwR8uMR6WoBZmKo7BKSrdbzxcBZh34A3KiUk4VTy6CfDVbpK1dLnKbHiKGHd2CMUtodFQ",
  "key44": "3QU7XinQGoHs3k32RSV5dd4NUHBcc7BvBxgyupZWiJ8SuwVHQVAGFfgVrkDAKnhpnZ4AKmkjnymD8dinYF6HJ1Mq",
  "key45": "2HFfdLFK7a5M8MMPDRMqjak2fVSrowfHzrPeYCMnoUSJBiTkYXBrWqTVscHLHLzRymyR4tZC1YSGsefjqhdELUyT",
  "key46": "4iGsnxZxk26LdUMbdzGH4AUZDeSUuqxS1ew4cbxsU5pGg9mG6WmzeHNvDJaRDuEfwSQjA2eTk1uGhzR8aWgLyEac",
  "key47": "37x2fozyQ3oNb8W4bB1JH3b3YxX8TfixHwFFiE5nxtqJQLxGnAjVBsiwzaAoeo1Rjjf8xs65PpU9DrAzJcsUjqBD",
  "key48": "5vxX8d9MDZSV6Eu8geUZ3jSHMhfwGqZKPfWxUP2gXHTaJWW3eYrNKfK56AyT8Ti1dnRJwc2VGS3gEVUD3FbDi3Fk",
  "key49": "2kZv1ysYwyPZrq3gyZZ1mQn4hBub5F8gKxF2zn9VHFsoAvNB6fgwFq5ot85CGyey7WmNduXY1F3sefSp4b389DG7"
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
