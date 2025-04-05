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
    "4vATDaGEwW8anSrRAsFMJMGZCCpmmLnVhMvv2HJ5AkkrnYwoKk7aSYmGTbRZUsJ84Xf5F9unNH2ZBrnpX9oXrNM4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oWBbGXivnfLWD91QVKT8Tds2uBpALxBzF5DGc3iUk3m2rzZfVM239JJeWUGhw3wu7SnHFpksv6idzhY6PEE5Y2p",
  "key1": "4BvgmBWKeptS5h8nhcTagae72JUvA84prC7rXq63MZN45yPvpPh16BSuwUr4rawMymfAi4KsVDw5AiAJuyxqnjT4",
  "key2": "r2DXUfpS827NP9yToE6PLgbTJPdXXeNaN6bmAaLcN6XnKBp4YaGTDQawP3s2bvEXmCHLHhXjQLfBxHLmE3gawD1",
  "key3": "ZDuChR37D7KmD3kHqZ6hprBmWQpJMT4TQsDPnqwRvEYFBgvJH1nfZ9nw8tbstpdvs1PQ4SDk2gbnqfnkPaCFc5B",
  "key4": "2k5VjZuByrofm4cvJYdXA1mzs2YsR6P9ddKi1Q88Qq5qRpSG3oeSxsEVDUqWx7wvFpYp3i8nr5Wh3XR9DChFmPrS",
  "key5": "48T3n9ZYX5mKBp5SooTeh5Q3xpYQmf7durqJfYDDAr2S1eFMe63By6fg39Wc9aQY6JYW3xjBv2USFdwUHhAvCp6S",
  "key6": "5ujG4rZ1uaFq5fFz4W3N68Gm6CskHobMiCgU6m76ZMep9Y4viPPbw3RKicMRf2PqhVcDDYaW5sqeZRRHDQ9ba7SW",
  "key7": "HF9TfXazakqcwa8JaRSfbhG9LV2rhb47RLYJRdNqGBoTKefoSVWXbU52hvR1YsjrER2Ug2j2CpLT2wKq42e5XdK",
  "key8": "3KfHVCcHjHst7CAFS32abxcciBmdkmHmAq2tdyojxMK4Uv4qpBR5XdW5PEemckUExHmkNkKsBre6XHaA7ou4wEzm",
  "key9": "55avU5Zs4n2EYWUSFqdwUVE2o6rVtByUuDXK5QSQUKvAf5BZQHwB3DTKzEzez1pk4K6LqHcGwJxcfZr2DutELR1P",
  "key10": "4XqkLtriBmdZpzNmoscmE7WaDb6LcM5RScD8UqpeiAvePG29kS5j7MXwvBhWnKDqistPMD93mYZL7SaJeeGzSZVE",
  "key11": "4oNuAnzRCWbUDdSSNCzKj9zda4mnh5MXzj1EzZToNv6Q6c3rfPXFVg9pvNhTRMnNYMrY8i2JuA53YhywqGRG5Ag7",
  "key12": "6ARjeEEeu2vs1MEGVEB55EB6KTuDxzt2aKVG38ngstdR688jFgbt3foNMDaEzfPPm5ufPxii18PhcwwQsdnjFYQ",
  "key13": "i4p4VtEa6AEcPiY1nuqPohpsMG2XRqbEiAmQ33LCFGaUvkS6SDpoanakuLu1WsehYpFWS57BdFeYSHwYzmBmGJp",
  "key14": "5rY26dkXpUwkSie6kY597op96rvr1SyBdzFfK2r8Jb6xDhfaqc9wYCbYpK7ygUVJ4nN6muCp8a6Ut9QceHQBAzBe",
  "key15": "3Vu5S3DotM5P11ubg7mgitz5FmKWm7ofKRzvJkNmGrubi8JaYKdcpkg8xVDzpyrxUfQvphgCoHFq14PacL7v8AuJ",
  "key16": "378nhcSoJZps4gjQnZwKqQaFWpJQb4cqLjDo7JjjqiDCeNSLfasAudgC1MWmcTeDSEpkwpnjppyMDj2sLyYMNCrz",
  "key17": "3S14TYepLFFKqC3rBAyUCFyPLUK9B9qwMyjMNNiBXfmeRJC6kbsoa7uaKCEjWU3oD3dyfzPM6amjq4p4qVNbgyyd",
  "key18": "4wBWA2KG3Y8MGQnDUrEp8YN2LjFsKf16fLWnkDxaFuzeXNC2UzR5sJcuQZG4PgJcwd3MxnBH2FqWPPPZ1nJaGWvX",
  "key19": "2tAQyC2bPXMZxuRCp26sR1VKeiEtZP3F7Rd2FUkVzhPpE49bZjNdARRN7gLmzeTMBbA7fsT93LS2pBebdYu2kMjg",
  "key20": "3jC4MJs2s2MLa1GKBwccLiYCL8QSJGzbfpQp9zVu6dFjzZtpkevCh9AjKxtmmQAVrL1NdGeDaYHFSLwum3EWYCx4",
  "key21": "4SFL4YwePCY8xjcvgpMDJv2UHcSFHHsyid6MrSumvgJ3uZaufdtfoKwc7Kq1GUgGatnUqJHF68vuNtk7RinSNUis",
  "key22": "5YZBnstxhQXJ9M8RgHr8sSjmbXUjW5Jpuz44279piVGL858c96hwP6pQhV7icjnFhRpw8vRcMjTSwi5UAt3z9ztE",
  "key23": "swbqz695g8Cvz4nfrVWhtM4mdfw6rgym6xMuG7NC7vPzgGooWMXuqe5jz29VLb5oaavgDp5eh9We1WyqHsKDsWb",
  "key24": "2QCNpX6YUEseWKSkD8HoeTtXEByne9eVKaQF6kRNam5kk3PYrdU9pwgpVaSjxca7ug3MhLzNpMxkxaGNepmkpVS7",
  "key25": "5dFmJzF6rjAZWbZ9JXDL7JNUfKqr9dppfQC8bPmju5dgCkQE7GMGiTPkn93sCxFnVtqgurBQJsEoES2oUic2aPcx",
  "key26": "3CqTvV7JrYpNvT5WKyMQ78LvTVBdGokRLjLEuJJ7p9A7k4vBcwswYgxcShEe6NNVYr3rpTB67mjsAb2PCZERuZb7",
  "key27": "5XQRYZikohBmiCYBDVD4rAcMd5n68n3xYZwuiStYiacTbPyvu9E33RVsRp3zFNAeNsnkMtfEnvebdbaTH4M1g2uw",
  "key28": "5VrsirNKoYshFD4oPqHGHWoFP4u9UkGkracwUtYeszbpHtcp3Km3ZNgZCfkY14oWMJSLKVMt6BAoz8sLd8t7DxWk",
  "key29": "2VRAKZaG83PcQfXDE7ePRiGVJphTN4C1UzXkUBfMUWpx3XMw6o7vB9P3EDLByp9gWBgUwmuXY3r5r6n8w2FmY5Qa"
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
