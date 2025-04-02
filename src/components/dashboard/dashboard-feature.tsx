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
    "2K8hQ9ZFEZsTbEujGpexMdnSQ93xA61c8mPBM4J93s5Kj4Ec7PJ4nueEhL82tJwmbvvoc9nWcAJkkyknFoqHh66w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YS2LmDMQUfNNDVuGSmLSyrjKRdzXfhe3Bgv6j4EZpaVuKuCZV3PSWSyDRDhcgiNbHcx4LhKjjmywqyHrTvHp6mn",
  "key1": "4gMHd18sgUukCJdmUs8reDbHv46GWTbbPHem26pkMLaGagEWWHL5fvtWpT9GsnK39Tjg42sFNx5XTdRyFUPSBkbT",
  "key2": "4wgUtoqvrDU6dZTjEfmFeNAQqVkovPQTkpaSGsVtLuM4mx1k52ex2ij59pe1c1UUgLF9rDFT1LBoJoR9czg2LkX4",
  "key3": "473VKnNiGNSNxun6wEXQNWM9qRghmuASgGjmFSVzPfaECV1qNqxrSo67jacKoitGgH6kWPRoS3qi4BAV1ifA4F9G",
  "key4": "zjHZNithEJhsPT1w8WBMCfwwDAy7s6m7XdDaCUcXYwYosmUvqbBEnrX2J1rMXjkhnLfnf1FHBSnNQ2sA2VPd5Ka",
  "key5": "26r48jzUve66MeaSrUxkZ9Z7qNiXnmEptuJQhVGGNDGYtcyZgoMUXZy4zYA6T4R6XGuiW4hY8rPAjLsyHaTfbWMm",
  "key6": "8CoADVZp4BffTTfS2aH3ZfT1Xx5rzkUoCeA9DRfdvYeHQQLj2WEhSrPL3SmrzNHbWV17yA4zn2FHy2zVkUs6W7S",
  "key7": "3NheG9c1q1enAiEHZeV9Mgjr8PbzyhCcYqzye4epBderno3FM1AMjTbz44yYAXp4A112goq3ZnHUKgeFyAPMepew",
  "key8": "3pDfrmxF2HdNQSd8mAZ9FjteshXXTdYKsap2tDWmrSwFjHbaYLZkUGvnTRUVu67XccyW41HjvroVqN5HeqwjhhpK",
  "key9": "5mLQSixmCtkA5dxj9TRgDyHrB3u1Mgou4iohsAXjUR88sjFxdtYhVEDtacak53duZnXtgHSDQ9BMqWKNsViiPwuY",
  "key10": "4jeTy8ppAKSsNq6VJY236Cn7JMoxmA5scN1RdiqguQoRoRSnzp2EZ3i62iAP53Sx6BDP78X1dhNGjgrZE7NCwczE",
  "key11": "3naHmCKvETS7TiCJdxAXSZL6yWupY31L2LmwiY39L4T1vc3GsBGS6gR3VVucdSdan8VfqA4wwBojHsFAaKFY8JoM",
  "key12": "5fkmMvxvn184LaSwa1eXskknyFWrsYgCGfMWDm7nSWLB8HAEueom5raHKwvPAboEQaBD5SNm2wqnUc8VzPgKggDT",
  "key13": "2in4x7zmBfMKgBrwbk2g6AocA5RCoUUFpiDdPTnPrc697pEs9XmyHG45SEFFnmy9eK9FL3hQn3NWQFbFgmFjqyfz",
  "key14": "3V839VqKB2A9E3vsatpQU5GnKptw6r335UYWTK12uBGq8JDQC5mYZdAeexeLnZffmyDQQ49wNpzqCh4y1yXgCHHW",
  "key15": "5pC2G51cKzcNyRy7PZ1DvV5GeViJTjBrGxq7qbPvb7FH7U8jHENtiuKKnGfKcKbMtH4p2SgvmQFFcrucVT4ZDSHU",
  "key16": "2ZukbjFfHpNjJ3VM9hUubYb4BPuT18yQcVxxrfor1uzvWqQYqWvFD2dDf42g3ZWMiTAQMoFH2VSByWv1x1MtkrpA",
  "key17": "3kJGL8stfKPt4a1PKjFWTQSa7xxRwqHevqcF8GbPAJagYaNoXprau7dfmDKBRMDw3sPNSmTsCuN5UjLDd1WzPw2e",
  "key18": "2vU5vWCZjYW23G3KqBQxTm7YpQGdqtiLRioYQTkaG8LbucA5GwUDp4354tMssw6LjCwRDLYeBNpgG66UMJCuQZ6U",
  "key19": "g8icRRHQkZNiPfqXQmxW5qC9pzQYuxKcUUaUDv1E6m5hsk3N3UwSotNuYxLmTddhfvmejymnGMDvPaDWDLPLdCW",
  "key20": "2wPYBfCsTS5YZgf5fq7tkh4pLBDgvRY7buj9zQx2uq8ADUjJ39FUby8KR5APmg9DKbeXb4WMSq6siBqjeHy5hPrk",
  "key21": "5KZNtFBbAPFXXxpJKfx1qPeNfAtLe5km13PTNMR8LDKKiDETSFFPcgv6kjaALzmSpY5Z99igdNpLbnpVzm1pPP8w",
  "key22": "42Sw2MiX6GCgo34Ajm6m138kqtGtNcuRiTe3dbneVUE7iqC1EwLt2JTpTNUFWFnEeV4arSrAKVxoe6W1kws3XVow",
  "key23": "3h3WMi18rzStfp1oT2TAtrC3H6pCvhgvU7u7NCvC11GkUoXSYGhdricUynyTc1aaWYawhWRGAGnu7mM3S5gVahT4",
  "key24": "2qQmE65uJGBwRs8Dt5cDjyvS6p5jafeteHCwHLVcqXxcFTdAmquY3qih4AyhqL9R4PsNY7thFK68EssjgN6X4RrG",
  "key25": "GpaSeNRfzWt6VBEGUKetvRr5EkYnz9KrPmCTpaCvzjmZ7Knk7R4VwAnLfHCuz2SpXKKPrJUA9PupSijAYGYZ1cS",
  "key26": "4oYnvomHor1w2ZVqCR7wHxH3ksq7wYrw12qWfCXt1wMULuv6QaKGRGxn1vkrFW9fDzP2go7fpk7UWd2Us8ridRQ7",
  "key27": "HE3ttsavVMvMi3neYkdmwMThLkXbiDCdCEuaTMWFCRjczc8fLTreMhfjSM3fV9iYpitETkrBmNv6xMLfWQFdG4a",
  "key28": "66b2SU32jGKhygoMVHxRtN2sZUBdPkMD5Fwxs6ENm9wGaYWc3Snso8ekpz1GnVitX1Jai68WXFATLsXgck19iX5e",
  "key29": "3NS55cWJcPqHiEizrPDjKXtkEStyUVHsv1sekBxRWPN21Ykkhuj7LVHWrARadMmD869DCptXDbVGKMynx2Uw2fi2",
  "key30": "45oE2M2VmuW6hgMn4CGQtHvpsqA4mkoWQoGUT3L8AWns83DM5e1sYHhrPW1f1Deq24kDAFX3uwPZUHjxCUXzQkA"
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
