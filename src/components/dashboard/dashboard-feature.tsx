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
    "43tHin3akae6NNCgFirMKLSo8bRj4V455hTs4gdn7XGvEWBYXZB1WtQsHoq9fSnH6w6hYoEjoayUbPwqBn2eWGhx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KfbBJEgUA8FKeQGYAh6YS1jsJmLwKLPYKkjDUMmMdtNb8wHtCgS7Kze5VZsRJLWtGoyzwAtsySFQBBf6HdpQ6Nu",
  "key1": "24CUnqt8T911fPzWfDaM2WQ1nSawHPsNqdRbt8i8LKpj5jwaANhVVEikq3RS8HeQzjR6MuDUuHvDCxyg61FrJtEw",
  "key2": "4GxjndaYgeUSXgANXsmZh98Azccx8it1TQZFKNedAUoErYMk9ZY1sfis3UnG6tsx8jV2ofWtcfoHoxhTtnVxk6Ba",
  "key3": "215kg6bgKwqRmQAF2x8fWVhh2UQocm4RNeme7zNzG1f8g1CnjiMJsbPxJq89PZvtjV6Rkbtdh2pRTMzyNBfjnUo4",
  "key4": "32EWAEfEqmJ7tF8BGWxoetT9L6j7ATj5diU7gsPEzeKVoxka2WooerUJtCFYnKeuxLPkkpeDAta8Keo34S9CHLsn",
  "key5": "4Y8Po6TCsDba5sGTRazxA2LkbHoXxpETb7Nn9wqifuWM3cD1SrDc5t6UUe6NqyfVkbJyG8dhqH65EdVVy215qKGw",
  "key6": "4jpYB3LyrUHwepN13o3LwKHs3q5vbDVbjoZKyV5xa4XfGv8oeyvVnwGtmSVMMjTy1kqfEZg4yVTDm7t3WQefwMCx",
  "key7": "4cqZ38E5Y5ecYAFt66k39S5HZYV15zYymPNdb6E3dPSbgYhtsktNcBQpGaXVGvq5bZtca7Wj5bmE9YGg18SDn5Ya",
  "key8": "2vApwWv2W5z7owGWdVX11Kuq1njP8oMuoXssAfoYc1tBCEKUh1dn4Cvfa3CRsnb88fyj3THRHrgm4GNvEAbvKN8y",
  "key9": "5KM6sMAEXgy37ZaXwrVrwHD85JbrTLCdC6PDo8kznrUC3HdgYSkq4qgDih9oAR4NBH9KFo6NcsCdRRWRmNLwrsYU",
  "key10": "4xR6j64jgVgN95fXiKGDKwMjgRbnTRCjHXkxAPYPBzvGbUD7JBdZPixz5UKqQ7JWEG1dhncxsCa5ZXkg3fNUD3ux",
  "key11": "MxKck3aud3LwrMruxqMJ7FbmgNRNCau3pefZiYsBAcfHjSWUJqrjPNqEfTWDCtjZ4UMvhsGrwyJVcvjty5sRgVP",
  "key12": "5VFuYymQsfWQuxCtBVy5gUT7A14quUZFreSwxpnVo59genN6c8jiwBHNAk2y9w4GY1kHkNgQxGTp6X6u9X3wT75s",
  "key13": "3w249rsykAUbUBf69CSr7Wp9Ydgt9mZEsXc7EwGtjgA9Bw2jLgmShudvPosacSFN7GfRi1ExTh722GgGhvC3Ns2k",
  "key14": "4cX2sNwABM9oEEWTNvc67HAawcjnZdH936AopgBiJAvHcAkBfGctRMnVhiZiG989tuitoJb7Rojppbo7iAqsCRSV",
  "key15": "2qFWbfAe2TzCex1vx5KoxEvScWqPYyjdrmwZFqjqryzkcYYLdvJEcfCqQyvJCCBNcSFfeqYqy5CYBiSv1PnwG8PQ",
  "key16": "4K2EJGrFNURAR6DVcEVbauW7zGHhfHa3Tnz6GpamJqDQmKC8h9R9FNBoWjw6JQScKmZvnyv8Qcr8mKicKf38bydc",
  "key17": "5PcA8wCVUwrWGAs3vybxZ5jbJRdKKnUmXaUky9PvNpo8vyJ2GHLwi3dpJXj46gxEHJMSb8RPkBKPKMLt4URkQCCt",
  "key18": "2vxyB7dQ7HB5bdT3HrX6m4BPkXGZCWe9dVRfbyGowGfSF4qw4wGVkPMMQf2Jy4PzCJwK8fKQmMx79zfGpSL9VLHK",
  "key19": "Vt2JCsfEBSY99JZAzJgHvzkYTGxNpb95SuECwU3Txwz3TvCzX1ccbXbpyWesbe3xBQ7tdQqgEnubS9sSyZ14TEj",
  "key20": "3WGiHpMsHKaBwUUZJdRyBt5u1bLAfEuYkUmziio1fvLsCC4ahhT7yLqdLz64fEyya3JB4zrVMpcX6zgYL4MdjmCk",
  "key21": "yYq8FpCSaLtbBgWu6diL7ZgiwZyjFRkiHuhHaL1YdDQEKPxLgmABthdrqNaQgWv9cSNpiQUoTirAUfHnWmV9coo",
  "key22": "2TZyAXr5YjzL7VHfpQXZCGJZppNWFcqLSqyKvieFD2yVPeUJsZag4BgxBf6cCrNNs87YsdFYSfiLYrnXCsLr9PvP",
  "key23": "3LZsFwfbh8kbnMu4MgnbjhvoF2R1UQprzjeBy5PnECaikxYZbVzm44KbhX5Q96RQhTzxqNVCQmHdMvhoxCBxt6ou",
  "key24": "8RaDMbsaYS5CA7DLaaDm2VY7y6ECd7VK5p7mN87iX5YRaQ8SwxBLoZms8FxKU3ECoSnQn3PS92Qyx3MVfVp5XuW",
  "key25": "5Abcbujg1NVaFiEmt9jGAvaq2uT1jac7phMqcrZTyw7BckXQhvzbszNBWPKJ6GiduaaRdeP9P3Sj43NrmEL12JwH",
  "key26": "3Ye32hYCJ6isWNPGcJfyMPWQDcoq9crSrs3fDu7KnLmhSiprvFVQoHoPzZUb99KFEUpZUxrBS4j5X3qkhvsR3Quo",
  "key27": "3Yfb7pfVSz8V7aT4oyF2aGKxaxm4ie6M5NHFx5FP8SE9RM4aEZ914yfjAFMWNBuVth1AV4SFRWJyoBsMbfWPdvnz",
  "key28": "4LJSimAcTZxDoGZexqcHkwd1s5htaudM636berhpqKpsW71CMdHGCxkdM7gQoV5AJj2rxDjbDvk5HpWf3XcPWj5m",
  "key29": "2C5oQfviQD7cfHAs5VnbtY6hs2iJuWFxzYnhEdgFR77o8tEHexJ3WbzRCNMYdVa4jDFcuM59VkMpzMS3iEQeprZx",
  "key30": "3qtXBgG5NFVpzzhh1pa4r8fmfrbT8v6FJupEix48xZEH4cCZLkMvifDf2iNHu9WA8znXuJx5jFA81g6NDHPUam2K",
  "key31": "5PXznBBXAppqrvnL9cyf22o56RRkA92kejXe6ky7T1hSsK54rqNqRE2fPY3Nc44byUVTxtD6uTHyxoMy2axCzs8b",
  "key32": "F89A3dSeSs5GjPz5nFhv4UuWNJDtpT8jf9auo7NjeCRMyQiarJBazUdVk87XwHMyRpeKTnrr7zx6MRLpYsDVwhM",
  "key33": "4MiMwiD5bziy7YQ9D2timGNMe1eKHYuj5B5E3fSD2HCsyCq9se995fQMms2j31LVLTsLLEEz2Pn8zvGwCCRvndzP",
  "key34": "4ypqrsHhXUFbXgK7FpVGb8NdzwQnYEWVRaCDsx9cw7K6TZ7euU2884weZQfrgCEz9TFZTjsLiegaeJFeR2VgK12y",
  "key35": "PTmTMLBYm6yxQrmFm1Uk6KAW46kszXQJAK8xGkkxEiGGaHrsbagEBFL1mEZa7Tb8estpKRMov9Meqvc2LF8UM85",
  "key36": "4vC9dF9vwdo5SVCDdHaswtY1bY5oVV3eDKvvtjgu24hhVpRDKVMhts5o8G2hzvxJvzMSQDGTAGr9FjiDAo3AZqam",
  "key37": "2bwAPDhJvsdzqdDVNZrQumLXRkehNUxEhgk3aPJNxm7CK8bcXfEnco6w2ddu9wjLNzEjGzgHg5CAYGrHbe2x8jts",
  "key38": "5EM6pXL1AU3tN85Xsr5apoxJEewU8QcaazJQkS1yYgXx2iJVS8Jdy8ZgpspxYkPBhztQFaWHDxgkc9iyRJW5nrib"
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
