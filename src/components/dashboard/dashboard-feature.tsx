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
    "arGoTLxZwmqTKghEAD8ETe5R9h8zgYBuNc3bCXWXUdQSGJhd7BKrSoeRuh2KSLtzRLiRh32BaCwE5NPfFni1YaS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UUDHQ2g97sNRycc76V4qFegf616ZBRs8RvexcyyYwXZh6fysrt21FfgvQ5FYpctF76FMaHaGqXwgM9ACddyZxPy",
  "key1": "29F7srNRqoP3j1xunHNJcjZXDVQwCpBEjzMiwtdMNAZJvPA6LaiHF4Mzk583MkC9Pa6GngLjuujimfPvkyCZiujp",
  "key2": "3KTDrwSDxdNfqHfckmfH2HdDt8egaNWZoPVCsb1z7cCzSDB91rNpUbV6CjGe2ewBs1HmuCX6N1pworjGyPcy8SWC",
  "key3": "MswmNsGY6Zri4oDxMCGC1sFV9HjMUAdqyBkCWhmUXcxqJ68RYgM3HWdh4WB16Lj86P86LHSyqTqfF4cTycKFfp9",
  "key4": "MMLXayCz7C6Jp8ChmS1SFreZYnfqWErtvhVidas7Lvm82jVDr3YoiECBb1MF2obV9rnMtppujdovmGa3pgbFLS8",
  "key5": "3RPikHJWsqFg6zbq8LpTR1kpYy7Vmt1QNdCiCX2b26m3FZympjVGiM2AwfL9Honrok5yQpfk3gKYXG5moYejdS96",
  "key6": "4381k9AiXGvMmKiiuDnq34e3jg2T18hkZoMSaUwuWwNS3PnnFemVL8RJ5DDbojV5sKLSUMzjo9idU6uELtAXE3We",
  "key7": "41ZNCrMrBnKe378GUYUPb3SFUkUDoujY5V9TuFDC1mg1qnKnEmDUJR6nrZZwCrf4wVfmmtQFUvhKPEdR9hUPHrV9",
  "key8": "4j71iPydgRARQadMcC2UWmuqHLgtAHMsKzAGUwZG7zw92kpy7jrjfxs4NpLPjwFh3DZg3wcGtEHVTaQ3ixXJqKMP",
  "key9": "WxgfrtY1zNKD4V8uR6qYzPTLpwLtzctX2buChzXrQ8aSFZ2Hcbfe4BachLnymKV7n2zeAHmc7qShhVgt4RUaHAy",
  "key10": "4KBkrLTNXhZUnt8JSnxkgaDz4zvQki6pKH3vGiVheLSpeU2VnZpAhjsBQk9mzWLFWEJJDL58pS7hYGmhoCyPXq3d",
  "key11": "23ey7SMUFsmFnGuZQoqCRDvyLfar9FFpRWPtrG88xJNLPtCJX7P7uGg9VwuQLxxgXdWQ4uLugNueNKhNvfgBqCCK",
  "key12": "1D6W35cuKx8z2SS59kYYWRNUvW1uwoysCikapb57q9HedHiUrvr5MB2cTjRTy3AokRefBWZQccBCQYxjLnAsZJ8",
  "key13": "4nAbrGjmnJyypsYzi4ZAoQ8QxHAYd9AozoitJG6qCvvYzmBHSnp1gNvkYsyu2aLZqYCVu15j3Up7efvgkne2Mi4o",
  "key14": "4YvJK5UtRad1LLYago1DBwKiBQfhYAFmTagbojgadLuFVanjUyeXFU3kjMRHAdJhUKVUHFVdz2hCNAX1ypsfeSTn",
  "key15": "3Rz1dG7cQpP4H6qfabrZnBT5jfAj8NDfw2ZShS8hNrQDsC3AoRz9LPBviGWFkvtypuD3LCep1eSBkJzuUzXdVfe3",
  "key16": "UaNgkB2V41nmPhyXsYPfZV4Mcib75pGW9CQ9BSrrHWuKgtZcj5LdPE5qco9HvTqZtEcsBNrNQCiN7gjmzBpSX5N",
  "key17": "32pyNZ4tA586AFsWh45myyvg2g4DrruDauMX7RYRf5LwCcM8ApqEHESJLNrNeknH1EJ51cpfE5SnCynNTC67vgmB",
  "key18": "2BJzhhTcQBFDPvJrRXJmccyf7GaWrJe8XSgG9bc51bAPDjuH9LHTPF6PDxDndyKtuSB2AwPqbNUe5GdMt8b8yxhG",
  "key19": "2P5D5hSXJB4mT9dn7F4ZA9jinnCbMsZMNSDNXASAsvfxnbsA7VPeXPnQBYMGdskDLPHxHVfaHUaUCJW1ctYkyZB5",
  "key20": "2cs6P6CrM7PKELAX6F9D7YGjLDKNTNe3eJKDx5ZV1wPRk7yHhGrcpMg1SPAZwpeeAas54rKQALhmaAtxQA1yNcSg",
  "key21": "3kHzgLpdLeyd1kjaPQJ32McMesjsxpc9LRAUBw8LZ6uGWXDzkt6gNHN4b1GKsJd9JG4bAoWRA12GFgLdUsmXnxyT",
  "key22": "UsvqjWmg2BQ6SkgTWEFEGMzfzsbCHGih8PSW2eSUT6DV1SykxTuhm1hehiB4pm2wVuHXYMXtWdy1duySWnZPpon",
  "key23": "4Erqr798VmChizc1b7xU3EDbVYemuxUNouJ4z1SKaCScExt4tT6LZF2nHUiZAVxTjEvwTvbbLU3JwiVCTkYY5rJ7",
  "key24": "66EKHViJUVgPVXWQeyZuCM3mvGL6RPEU77GYuKusyEoixhy4bw7NFAymuEceNgd4P5nDnYnjjFjJAm62zd7e4Kij",
  "key25": "XeY6DSjyibq3GQw7jQUUr7yoxgnfoGSFM3Nyo6VM4zsZbm9QHuXZdNF1VyK2rE6Vkakm7MDmR9S8cL6G7nXDHu4",
  "key26": "3bV4nQFTecXCFmjJtAS3EHnH174XZibpNFUW3xfJE162uJNDNfaagHASd2etLA92ww9EzCnLP4Zd1gKHJiGwY6aS",
  "key27": "4haThFWFLaQBt2eiGDs9R72Tm2tShW3697MWQCqobVrSvBs5SuonceE1chgUpTi96ttZJRnEWv1BeBKVE185LY59",
  "key28": "3hCqbqSuiMLmrGaPQzDhndXqpv8qMGpNgQHrC2E3Hot4U9iPUGgcQniMkhG92YTtzK7thgVjpKRPMUD1cRh9otZZ",
  "key29": "3bWbPLsatNXvKLsvepGdQnAA32sM3SbLvZSqGFaUNdH6SYp5ap7w7PuKGrJsmJeBhLTSMxEzQHq8962NyqgGphCo",
  "key30": "5s1EibyXX3yBrHXn8UFK1AYeY5Dduv4KMSD25pbCd4SrvfUQ6Dz1Qn7NdkpedrQpX3UvE9FqRXnzonUXdRvAvwQt",
  "key31": "3DostLUmPsuFQJkdbn6Ubap4QxLdhUMozVEUiNi3URcufRvTm8ps8uH1YV4nUZDawRnduVp2HFDxYArLeTfYbLZe",
  "key32": "4rXdUNSLn7zLaeatBwdEEBrcWH4UqF9JzQvBZxm1W2e2aquH4CKJ6Euy7QYtjY866S4cZ8PNC1c1ov9s6mgSCTnP",
  "key33": "4c1sXUKMr5z6Z8ToXghb2UEhKvunL2S8N2JFxmFf2ka8GftCEvWTHTASXYBELYqKsuiDGrWGuHXTv5NZaMDYk2LV",
  "key34": "5bkHgYsxMTzCGjSUfsw2koTunqX3aXbkqdyBPmfKE7kpCGspfaaroJoxB3T7vVGbxXes7euE7JPpT6FNaReXnXb8",
  "key35": "56kTqHBCAHgvqVN5oGTMxaHx6buvSwnZLW5VkWUeFyuyqRBeREw7LUAgsPYUCEsiX3BXLSNNdXGszEtw8t8zJH3G",
  "key36": "3rdQinAX9WNi5oawRrjR3LcNXrxr7xWzHTjvhr7rk3KvNPMVJS52PaSgLwsspfG8SfTLmmGpC72imiUuVfZ7EgaD",
  "key37": "EE4TvsSY2GQsor4D23hWNrhCmS9m8NHYeofeXnBUTVwWczkB4A6CzPqBGzQhcm8Ckm2xfyb8vVC9YHoSWyh5hU1"
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
