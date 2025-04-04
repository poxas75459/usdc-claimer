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
    "2bAuwxiy36jKo7Ajrf4cYotcbys2zzXPrySBXybcxf7edq4wxniDfXCXM25AM4RDGhpzQhDKC7A8iWmgsbUVJaMv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ec5vFHuJwYHpbj5u8zQaTNDv9GkHXwYWXWdWjEMxgswh8xS6Y1iLe2DfYYfCqumiqBxsi1nP9gr4fPYNZs9ET2F",
  "key1": "2HYxqmNtPC22MeK6F68o2ZXXiEzeRmaUJyLsnpDxHmKNGNWs3EAxb5rqS7peaERjfRta4U96iu2RQ6Mp7TqhFkBL",
  "key2": "3m8FFRttu7KAmgF2VtQbh251E4GNVQQhCr4XGJNbvexLFi3FD8Qyx64MBBeRGxuSeEuS1tNjUTTgsp1K2jBNfLeq",
  "key3": "4YHqJKEXNP62x76z8Gfxsn4x6CKFoHZX6jyHdgownBUJdgYyddE8ZhB3hXPC1c8uJt5mqk5E6PhBx64mQmF97F9c",
  "key4": "2sUbvqgxqffmgxv5veH7SxWNX6st8rknN3DuQTN9kaBiy3B9jGXanaymiJhMJ83h6278W3jNcANnsGM67MAXWL24",
  "key5": "65eXfAxKXnTPhH9E8cKj9bRVWkodAEJ317dzmtxBPQhT2HRawif4TjZ6f32veaMKmF7DvvKNtr2u866t7trCecwY",
  "key6": "3zidVP3pGkmHacAXvdceJ6V5r2VDcjvEn1YTzxNqKW8cEkDWwRzEZax3KCq3vyExDJHP5i3oG6XNKFN2beDfCvLR",
  "key7": "59imoTNjEGYP7eEKrvLyHyDirLMBKy3umwYuP2ehXKqWbP7ediVoo4smb35ezkQHZeNXDQfcMr6hZYCtxRASfhTR",
  "key8": "2bTRpXXEh4xiQj3iHYB6eFhPHaC1p5sQGfy66VRRMJzmuP3zFvy4GoGJ3dN6x9DrFxRsGjpFuvNTiDXJWW2wzo8y",
  "key9": "34QsAx2dCgsNov881pnLzbL269wKMzM9aDwx3FNpYgTd9yG2PZoFXtVvxGKV4oDbDdbs7DLASV7yr2MEjSZRiPcf",
  "key10": "JacU9ZuWbevyjZggnw7cjguqTQyFqqAqcAxK918ESj1nSX1uU5kRaBcH5jEETvpAaQH3UHKtFKgPRcXrXJhT7tb",
  "key11": "51H9KVzBELkWo62uwcEpvGVDxzh2jGUSy5C1ZPhD2Ub4udNAgM95XYfRFd5uGPftrfaqR4zbfbhAKMATUwfMypvU",
  "key12": "3FHntzFi84yrjDbiSu7j1U6diaAFic4X9KBPuWCTyxyDibLGq8cS29o3NMxRrfz2wdr1C1YdaJ9KH6bMcpJzXkkR",
  "key13": "3DHgJ1z3YsYyYtJWobCRQaabLhAM1F1fYX5KdAujeR37tnHeh7ZWA6taYiWdeCn6wmgig6fK2qGXrKg6wJW6fuCj",
  "key14": "2wZZnFUZXcmReY4MD4715riWQ5k6fkGbcEQy4JJcwaHuG7h9dngwBMi9YMAcK7TwgyWxTQ78ehVxLB9jc7yDpTdP",
  "key15": "5dgHtQrTZkfCd9mw4reXFYq2paMMZHYgEi1YXXReMuokHPmAScP9u2yBo7LapjgGFK3smqPjudjjaF7MGNVifhL1",
  "key16": "31Jk7NGUjNA6tzVCFKkR6yXWmUXAmmNjCTJMZYAhMrrT4rZoq3GcKeJLE47AuK1mRSiaHKudLHMe6jmJkq2ZU5Wm",
  "key17": "41G8RGEUqn7vfmAzxYgbWyGUX5cyrbqUQmBqKXaWBhzQurpidn1b8v9S7B2asDqYJuGxDLju6JmYqpM6kVF6pFPS",
  "key18": "7y9rAPT9C4Mb8Zj3AsCpZ79dZ67Tah7NuzASv9oopBSoR276F7Ym6QmQbSiLmhbvnrjJvmRgn6Pk7H4eESErh5U",
  "key19": "36ugUBtx8r1towaiBmCQhwHhknGYSoZEcng2zoYNVmjHHSf7bxmKLCBpk9RLpNMVPxRE5jmQcF7Dfd9wpiineQRS",
  "key20": "5aPMy1DL69aepasx6agnVDpMRA7q2UxitHzmKV5yRS9v3r2ynpZudTFj1a2c31bYFhmRitD8pSC7QyGy3pjtKmiF",
  "key21": "2vCFuU7jekdpzn7oFeHoDdkAy4a4Yn8JjCRLDRQMfd4VKEW1H1Yfn3NLTvuTJYi6XTrmWUK74VzMrHtUiNnecZJH",
  "key22": "4ZcfZSaehc3YjtQA29X1ogMhHayH7hCH2QqWtqcJdTDfoywd2in2qU1xwQK3p5ZFA8RZVxsQ2RsiAh83curVHVUy",
  "key23": "umxsC44wZxbjmV1dnuxTPXTgeNAH7LyHKFcEfef8iWnpivxNGMbfJfc4GbruUrrEAD735ugJ1Krvve7eG98C2UD",
  "key24": "Cd6aZM6AfSaeBthnCy8JxrqVfiKUsRbTgA6qF6gJZqrbEBU9upqs3k1x45YQ5qnQnZAfGALobszH9PM236jxbcy",
  "key25": "3YWzz7EAzt7aQmXwiqKGTC4eWR2npgosJCcMTtsQMkiTParypKM5K9B7UGz4MdAwe5baisdpJvvxuDYKQo3kwDjY",
  "key26": "2W5bCRAyWYFsP96Xx3MW21HbNQuy4HFHvq6nf5YaAJXuae9TutXPRuhcpw8FvraoaKXoPBuKAYR35UR4gbtDXyMA",
  "key27": "L4aDUiYRVLCiKC6CxJSD39zT2N74gqDU7NyZxNxAcU13QFVgNJsJ39j7nraj7oPfLW6f4YQcjS3Zi1YwuMsVsQa",
  "key28": "4UxuyzWtCoj7aT62J94xLpi1vyZ2MKxPJe3jFPo5kYsUNKWnRUvptSqbjeiWzLSrCtmnuuB94X7wJ5p4gjhAFAny",
  "key29": "YaJxg5Xtdg3sjPo54QHUsCsLNBfGB3JXvU6ZQwt9ZtkNWUXrY9p8eGN1GrPRvrqCYXU1o16fP5R5FHVLXkitgUd",
  "key30": "2tnNtXf4yPDmpY3FTDUQAfF6ZhZFtJukShYdhFJwru2R6cC4MuwJwCx8KHaVx8Y42v8nxouUZGYWCyiWFevdnNNx",
  "key31": "47PFhWFauCx5j7WRcMebqXk8HereSgMRuj9DJ2SzaQBYYUKf2oPMd3EMQLSsrwi4eDbUMVj1FyzFDW5Xvwk6mhbR",
  "key32": "2mQnBV59AyJ8RofWhaZPnh5a68SsgPnSxtX34iTRc57u815QSoyqYV396ufCUe74qZJCRbmY7jBYhxvEM13PsEu9",
  "key33": "sHELoUhBZHGUJ1WLV7pyLuSbPEcNFRqLnGwuWHfa67aQYa8k2Vv9mHoqiSU692dtWL4ZDo3Z29ahj9RD85ZMxQa",
  "key34": "4SxN4YKjHwmMuDz5cufNL6ydyfnjeFU5BKthLPJ3nQa8X2DMYKM3XH6KwNFX49veHQuexCSHr5TwkhefnwmBeDCC",
  "key35": "2fCLgUNMSHaXL6SkafRrnTtYGcC8gHmc1FyV5d3MHPiQCHcaa4vxKiKGNHGstG8xc3KB5pbq5WRp1wZBz9rRaWjN",
  "key36": "27ggz9V6paMtuMAG4CmtY53a2n3p7wSL4uKHdc19nKqmJTafG5FUwwjTqW31QSxUgVZggAxbJ13cE7bGAZAaVwao",
  "key37": "28nVSiGhfwh36waD4BBDuuQTi5VEeQazqgss4dzRREpcEEhkbzVmD3oTQsHYyyDCTcFcBPvP3tpSvb5SRBm5n58g"
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
