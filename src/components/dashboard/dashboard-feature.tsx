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
    "5CFp9g8S81SjFZV95AvTuR2cNzPaTaAzjh1RDWKSxrqqMECGGCn4RCLnntiwjMbphKxhdGa7CpyEWj41bA66wMcF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mcMWNd8ULpCmbDqfzJHkkAQVbb3UjNnC47qSxNgMBtryzwrgQPKpziBnXmmh5r2ZPtn9KqBvRGsfYmxBdvef8ib",
  "key1": "4RnKZrceoTUS5QUXDq4h2DQFCFr4fU3hrW1GKrrcwZn6DYuTYpcrxXizZnLZB11qffkCQ81xcL7mk2sc9aKz2ZmE",
  "key2": "5gtb3hzapuAYhice8YVsY7dJFnVY3oGKT9zUvCjM3R7GgoAUoPExBo4vwBpy79S3MmvA7m2ebpjfgJ5GU3BCRK4y",
  "key3": "kUgBaZqgXNa1M7z7avvtkBWSRPAxgjWYMBVeEeQ1vWr4hvT14US4a7JaRNAkdGvjjKrE9omWJCDYt13aRTLMLTq",
  "key4": "5cYiLsQwXCfVvhPbP5ZZ931iJFaDdHVzgWq2nUeqBn4tHLdSfbAadZHpqtNB5BdMPCDjjUyuutnG3oTUp9gvccg1",
  "key5": "ho8oppjWpC6CTvsFFnibsD1Y64Ac8KeuSzFPtdUXkf4485txM2PFjnNY41CQU7k1YSQi9vYvruqy2yce5SeLTeT",
  "key6": "4M3PbBnZPzbSVvbeAAWACaqqvecLAvPjct2DzeqK3uLbBV22G7CFzusFfu7kmTj7MGxQ1jTAJwN928tDt5wpnHo9",
  "key7": "4fn1tjWWnTVUMN85qebkc5Jso4gBN2naukWj2om6bkL21JzVphMFFDEEKM6wjd3xq5AimWCtjcHqcCVVMDZBJJJn",
  "key8": "2LcFbppKtyEireUnzX9BQUmeEYRAVKhoxu2AVR1FRvBaJq81MeMribd4yEPxX5L2sSW6oKdiTQoqaKWk4VQzEvvb",
  "key9": "jakoiMca3VMoUCTjXYEYTxN5DyVmyk6m291ATGvEQxqsKRK8ZpDCR4s3mr7LSYVoacAyvH1AaakPLmcHPrK6pcS",
  "key10": "5mUfbZQ121G9zAQDJ1nauid1RqnZ3gakDwTdW8Y85jEj2hGEyHeja8xn2YGQP27FzSn9Q82pYuqSQVc1ewBiLBXM",
  "key11": "4UnSrdPFjkXgkwW4HKvrMyBfi3v1Mve5XaGXfNrgnPJmvrVzrMknMW26KQ7G9BiSmKyGAHcgLSEMwWQJE69ZUBsW",
  "key12": "4MfzBaxFFfG4NeF4aSjX19VWh3Vp3cmtaFPhsr65buoStYXtXxbEHLrgUBnC8qiE8j7ztAGiV65EnX3AK2mqGwNf",
  "key13": "32eSNvctHjbHHBJdfyfEaRKndo11F6WfLRHYyAWCkm2zQvrKHDhen7YJN6RmrdLeFGZf43unTvQhebRTesdr3tWT",
  "key14": "4ME8x2DChkrVL8JbaTdXj7ZiPQXShfS8LosDqFyGFMsqeaD5uqZ6yhzbHBKzzedrJ8dMwY1PPy1tTkwqVqM7jyng",
  "key15": "K49ZCGonUoJj16hnAByPHZZQFkkxxwCkyniY5TGudVSHrEDFiaty2B55SGE4JDNBEAQU1a4E94ewdVzGUyJetEg",
  "key16": "5XidJqo4WE1m6MJFTGdRLXfZGTg4xUFhBSNWrXcEvaGneJ3CHbiMQ1Kr7UfBzCrCPTcH7jbaBxPirh8JZyWUx5sf",
  "key17": "4ETQ9nGzC2fyZiWKNMF8gxoGQvZBw2DpmwHaPL3zUkFoQ81nej8iVFMogqPmoGVrZz912WLKMwoQ1A5q4Fpdww2A",
  "key18": "3ctwgUMLSWnV62KSg1PfBPYXjqAhSV7YpnGNhoxHKm8E2vyUP9SdhAQbZX1zW64HQrrNznHLmYbZmjpASqS58sD4",
  "key19": "43jSWjLzgwi47vhva8NHiyXsJoX9Y8QSdgH1rfNSnLuqhtAzmoAVMosH1ST1vqDJpXVeshsP7PHJURo4BDQGeQRY",
  "key20": "3MSsuHyrbKjqdaKoxxzyDevPegBfzsBvV6sqgJz8iiGPhsZxV2RbveA75aiWgQHqktV5DcyYLvSXqhAKhSA42YVg",
  "key21": "2iAQAbYGp5uKq6LihTHWwsmAjPqbL4QvwcP61mvG75iy1XL2V2jge3oM9g44gsjQ616jeKNm5RLdmftiRyLZuBcT",
  "key22": "592TMXzN55qCaMKXrP42t29RgKNC5Byzz6V4gmPPQvTXw9tF7Ugf9o2RKyNzgR8Mbaotdv19HzoWzBnVkjnUom4k",
  "key23": "2cJk3zudcrhpG3MCmSHaXEwPYmQUoNQgHSoBo2VtcMDfNRFYgY4AZ2Raw46JrMDaD1FruWB9ig2ViJDZnn1pbFmH",
  "key24": "QfZCqwCf2NppFdxuc5jKpzWC4CFLgYvEVWR11QP1kX2tMWiXsSso3k68bi75qTWgD1WZiRvi2fhMHZGkcYTVRFn",
  "key25": "4pbuzGY85kLgi1odDXGyCdQ2BpSXWg6HDX8imgtDZ2RRC3ack9pFvih9tEAYR9AHU6Ei2kxGrpWwUkgN7QW2WCHq",
  "key26": "5UNLqizEBT9aYDscGpzo83y5CFLGwAKSZmaVPFSzyehKDbsGoUL4rkGZdhnDiXLNib47MQ6DEqPx8a7wA5Y1o5Pc",
  "key27": "yVLPUrqKL2AicMkNTmAwLKHh7pkEgTyk5akENoBxs5APUkpCHT42HGytpwR2GHkTm2C8Mj1G67UCSALrZeJC6wb",
  "key28": "Nt733icuqp2BiKAXdRK5fsa7cVf9NBHz6YLFaCbDNRe3cPGfXLZt4ePqANd25ZB5PzvR4MXfN98BgbcpdMa71N1",
  "key29": "WJocztoaHd9W3n4aJaB9LXiQgr83QgF3DH5dzQiGN3xhLgfLx9sF1TAch5Y9JUyEVaeZPxRs7cZkSuqGnEzePkv",
  "key30": "3GmEDPvXbzF66rjxpWrH49q2HuK1pVWfh6ty15ARDeXdRjhmXR7HkpFXP3Ydn7xAosQRa8q23RJVoFX7fd4JUJxk",
  "key31": "2JEcdBfQjaGkNxVocwPfKPZZaYedTbhpyVXHNgp6QYXRrExLNXqgRKacBzj1RDpVFbzwW1deQQeaTBf9NdUn4xVX",
  "key32": "5zH58FgiMR5MDBiJU8PWGQEEH54xJU42qoskEDvcZhaoFhE8cA4GqKeFNFqKaGG7QW5tpi86xWaGWSTBxZrTR6q9",
  "key33": "5sJhpRZNpA4wRVPGwPmMbokPrLUB9aJ93rSwHnJKQq62cPScj2GfwwR5URYPezb7VKFMzH7w9zMdJdGKj6LrQc4U",
  "key34": "ta2HT5PXhteqhtFHAm7PoMDBk1v4jjXhXXXP4BvVfDC6wNvNp5JCmVmzzzwfwDb6vaPpARGCecLsa2WeXTzCPQJ",
  "key35": "5oUnsF1JSUYcfVRoL43ini5RbaV6zzh6R1WogW6hf89ZjMdDE4kkzLT143Qb9fao7dmVUHVVEkSaL74PVkqUskzN",
  "key36": "2VWry9LDNrJ18sVUtkr5R6qu9Av2cdmf6sQ7Xe4pQPiSFio3u31JjFSUcSDZqjxx7gojBFLjLXyNcYfmfCbC9xBN",
  "key37": "3xvK6FdNw2FSoCKge7QB4XnVdGqQMuNU34Mk89nkiNHGTDHueMVbh5sjNMSMwDYeYH44HtzK8cTosR7Mh5urmjZk",
  "key38": "eQJydcfb28mda9LLAwYfegxSjy5aFPyfXL9wNPteXKVScmUXNy9SWsjfmfKuuLJhZEWiYZva6mwHhnZ5rnD8Sgg",
  "key39": "3miVFF7ZFmoNHmk6N65sijq5cyNwihbc5YquitbUuDbK93ZMYSdWxQRi9s6J43vADWEGPyiJzWuFw9RAuaje9Boe",
  "key40": "28iuHf1Adh6hHS39iwR3oDbYQ9uvyAV2iSpFDDC1T57oSoc2EUWubsqabJGD6UcrASkshMLhy6TDHwnY8ZZ5coq5",
  "key41": "2rfxGu4mkbJ1j7kF5BfnLojnrj9rTBdNzA3R7KuvPfQtSfnMh3GRucNtCm6ksVZhLyvbAhbg4tsLDypCPoUHX1iy"
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
