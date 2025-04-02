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
    "4QNUn3P67KrLaNbTDR8Cm9gSrSZSWxhqXq1yWwntiMTSgjteuay3Ky3z4pCw3bkhKc9jUquxM5VCGBPWuyUeqHCj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63QaY5KEz8UXjXvjSHRpbD195QGLMFcja4pNXoFkjcAqnGCjzRPUh7TV83uPixB1HwTRpLj1snwhsR8yAKYxSZ4D",
  "key1": "4kkzbnFm2PGUCNgfDixehFuFaaiwNL9su6b8xzbXAbe9yWnBSEX5A8t9bvcHDxnv3Mf1tdJudeuqouoG4hcLnBRM",
  "key2": "5iMYJXzwEFFm9sKCFKxkR31HvZujZJ5cp552jLpgsnUTDTJ3ZrZBaCr6LV6pPyBfjU5vZQKWSGdp5kF5k4d8Wj5o",
  "key3": "65kdkzmnYrwnnQGzxxpd7yVhTexxnKX3ZUuTi1KEdGLw8UNioPbYeZTzGMFK5AjMFAvJ1ByH6L4n9VmBjJWCeBqV",
  "key4": "37NKG5ZfWGwMNR6qZiJjpxFvdX3t7xWP47VWCLDQAMeVvppzGR2fAUhSoPvh2676XZmdoMYKLbH5Xbtp5NTw3CXw",
  "key5": "4tLXRhgtjw6wyvw3kRVTm4ZWKrprZsrpnuTN7KiZBxKxXSMGwsCCajpuVdYRgpSNuEnKKz249RA3DhiCDjMTGaVk",
  "key6": "5hmMCrYpe9x57DXWkSZtW2tHueSkayA9ze35WHLrkPBBaGdX2xJY3ze4sbQwnCF3WhhXDqmLQsqKDNFubsX69BRi",
  "key7": "26i5J5oBvsQAXGPacp5wWiKx7EusCvksaUe7QT3uojaqt7DdsAx4tLaGpvT7GyLA1PQi1ZnkeegrVQRHd6ocSTKn",
  "key8": "5BHH62L5beuKvymdikXZwU1y9Bj3Yc9U11THbNACejND1adX6ivNfmGPfTGDqjZbBERXTVEiVyCqm9Fb61rpKcUT",
  "key9": "X2TaLndTxExDh4sNjAe8qRjt9PFRn4GqvkbxvMqxDDAbRFYvfMz44m1RQMvNNbmjPRC73M8ftQL7FJjxr454NHr",
  "key10": "5ck3VXZ3RwWj6igNe7Rw6uttYYi15amrzwUrMJoxBLAaKLqAVtoQi5kreJZrdNKXFDJ73ktgnmXBP5F3wnLP5xfp",
  "key11": "5RRB3NF8ym3NQVkR8w5A2BbtJDeKh58ukV1TUsiYbeeAPrF59duKgWizK8CDjpxKsx5H6eK2yCVcN8qCj6GYd1sn",
  "key12": "59hMo4YkRTeaadCdWZfM8aXfhRuWhByBjTL7P4Kw3DkfHPdq5ejeWkHcAGqZ1XA3pCcjYRuXPzkwJd3rW45xhfag",
  "key13": "5aAB86cNhckpoaGDEyJ56FtiB6UUCfYaCUJHtu6i5N3MSEY3ZSTDnHwn7erK4A8ih4HFTFtNLPMRJQSWNahe33Qf",
  "key14": "4cm7LjMWygTjwNcxxAhhdEaZWWCd9pUQBMiEbM8ZyQqPGTST4GDdu8zazF8zL5njVDrtGqCy5iAe2qzYb2bMeQFX",
  "key15": "3pQhiC6e5XgE3dPRJkosmYU2okoRJz2HzURZ8KRNH2nDGHHW55xWkQpeuVxh1okBKvsqyBQ8ZQe51SQ2qA3m18rE",
  "key16": "4vMpYJZ7nvEwEeY7Uo5hCT3gbvnZVPriYoiGB9jdhU7wSMUY1deFeS7TKsGFAEiwLowX5uoXg95eguGnuPUZVFjt",
  "key17": "5E3zu4CnzQ6GSoHvxxymrHnK3sn1Jaz4CdDcYg4hXbLnTcdRR5mKiy8h6CC7hBGKr4TifQsPM6V8ZRXrqJRJHWBg",
  "key18": "5La27AHCCgp1bXnJosJTJogQn5Dpte1XP9CwdGMZmw8DhaNdhjNdKYqiULWiDShsfuSDutHe4KSM8Ddyv1xadFUU",
  "key19": "4RgdvvMpm35HjviZnRsWfFvxWEWeZLMxtn1uuz4FwjMKtCYEFs6Z45DS5DeGfXDAkzvhSGGhNyz6QXgMMa4QwbA",
  "key20": "5DKsSTKjfT2wv7iq7i6dVhgJb5uj9VwUVufUUFEmsTHDKgu5mJCjbRy1GNdTLEnZugZT4rwM8jLTKuDqsAc1aDrc",
  "key21": "3K7AG1ULnPTK8Lv8uYqZkQ7uCvjUsnHVVHztXkHuNXNAA11QJgT7kcqGmjpQoXbBTLff1rzVzDC8EPENSjkirxuU",
  "key22": "5rZXNokbKG6YoVqBeNAMs8aaTGJhys98XygjnhZLwnQCV5tkTJ3LZqe2hVGDnw21HqLnKY7bWdHAiYBKKwCozDit",
  "key23": "XaeSYhotZTB8snYfjDrh3532yifCEkCLxkSr1gyvQchk4mgDEG6E8eczmmavBw9dCdjwQTSQLrSmoLWU4jFuwjN",
  "key24": "4drKHHKSgZM4wLueRYs9YsoUCp7gPjs2iojDLQrLodEyXAqovgpBsZ539Tpeas1XfGqj7ukpUF7DGa4sS1EMbzD5",
  "key25": "637knNHeJWQyyH34e1K4Hz3GneuFFk6raKXSmCjECu5GRMyLEFtvbKgR3JFTFFexhEw5hMPrdzHenpiqxBupxiR6",
  "key26": "ahjTuAmzjPEy6DgRaaWd9ZyUJ9DtJubfYkU5QG6WXAJzMCrwGw3TnYAbeZ7YH2w3BCuspY6GfMhvvcUaq9Fgmx1",
  "key27": "2RYeP5eZWaDW8c76cSuuk9yPrQZFrBYi6uFdpPkzqWnMX51pZGrxMr4dC7L5okiSBXXfZg3Gjm4Y4Cma5ewrsg1p",
  "key28": "3tBiwbFGYDEP33keAhE2LfarQwDbDwcZtJqWXBRoCPhTAEGtpQbYkCRfRWGdeb9cx4bichhuVFesSaWiBuf9GsmM",
  "key29": "45KrcjuNuaS7QAmFMbBbYieTWP1Ycd9txBF8E6pFLbeqAysr8xscVmh2Au1FEMV9oa7KNn1Dwvm7asXa1e1R1JUe",
  "key30": "2DEW5ptLJ7VggzttKrHYvFtNFq4xxDPRG8N85rUU8hPFrLWTg8Z7gHCgZ4pDcs7tH4uEhb2Z48NMpkJkQH2xK2YA",
  "key31": "5ZYvR3cc6uc7R3sffxw5PEwQ8J55uMxzP65PJnmYG2ijmPwLtj4ERHEnqe3a6n2a7kDkkjk1vBWfrKhSqp6d9dQY",
  "key32": "3wi9TDGK7KJb4o7jiiXDHXtWZdHzQvDvWXjPmRvFAuYKA8mqVHtn6iYKEQFWDDB69QiMZgzTNj83NcpPfzNNxYv9",
  "key33": "5EMrg2beBKjsGjLtRhbKsS8YcYi8TW7LnZBiWEPJnu85xPbCmvNQa6Phc9dSu7wcc7K6yQ87FHDiuAefZPLxQjLg",
  "key34": "5gErgpp7E5AE3tTqjH1dTW4RMwSdLbJqF1MjACyfxrMZn8cH1a91vFxXywtN7xim1VQccTRgRGKkADKyTpaQtaFe",
  "key35": "SaQqSaJxZNdcBmgPp3YF7XoFo2heKeNbvHEysDvV1F8PZEpsNzhgACKXYUCzAkH46bp2ouCj8JxuRhbXwpcEUi3"
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
