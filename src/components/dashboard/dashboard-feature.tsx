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
    "5GU1q51mBxLmAvDSoTLuPcVBG9NgKL1xgvuJc74Chg95CgKmBaiEnUpTLRA4etHk9W73qvndsqHU6QJf6qZKsoUB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NZBdKz7BBW7SVgnGPjDQF4zdWHLQnUEyZitavPhgxqUv55YTAmi8KQKr7TvvcV39Z4cUxExgbPw2MXngUUF1QcK",
  "key1": "5Dn2ptUJVvAtpwzyGYd2YoZhVhNb7niGZFp9LcyTEqLCvSq9XkS5p3tABeECKfJgoPw37hh8hyWs6RG4cToayusR",
  "key2": "2L7oFDxDgx8hyEGwVfGNqXiJaJFKNPcRz4uQXAxZwrm2dXTDSzUhZX2UBtFCsJ35cCeE2C8tbKXkcRrQoXKtLQ7E",
  "key3": "3eCjH1LHfuhtsKGARa64DtcjiGfvrWinvBStp5zCrbsG1jLpZ7P2wht4SrmRScMhfFzDDZFdtmSPKsntzJCqzteX",
  "key4": "MpUxyecXcmcztSrDzJ7XvzuXZjEm8MXKyPNwDCAvJnZ8FqnjJDajD6AzRqwNMksmg7UfSfV5wPULupy9BKDUwBg",
  "key5": "4DEjY8ChHNqyZd8NrviX7eTbndBkvYrKiwytA1jonXscN8YP6vxAxGmV7asLrefW3skTRhw8aZYCuErcaEWWaCNb",
  "key6": "njyRFhRx7UgmpEcWAj2P9Vf4MDz8zgUXR2dE1HYqwXcMiWoXp1LC945JMDfqft89RyjF8PtyguGCdXibSPffHny",
  "key7": "4shaLhtSbi3kifBo9hQmhuG23KFhDRPq9yg8wNnqWiFWf2h7sA5ckfQT2y2JXxDjhMscdJ1dVZgHww9V8HTcEpim",
  "key8": "33mxyHvjTBE7wDfcBXEzUg7ZsswX6ySmgB3GeYD89m6BUM7j7CQ5DRvuTT8RGuTR7A4gh7zymE7bXnFJNCNKjJGF",
  "key9": "1fwGdWpXU4hRghBx1h3sko69pvbJEFQYXZRysCvk76oV1jPxubMS349LdZ3969czZ4UzB2mmA4CwiamZFuaujka",
  "key10": "4HaDamSvPDhkTY7gBf2MPetDrBovDf75ty6QAwmDefnoRC5aH4ncHTYhFATVnhgEr1qWC5JSuN46N2xfkJ3hVDAz",
  "key11": "5zwJ8hrd3tzzByMXBDzqLGfWqg75sBfaJXngZ3FDvcqCGXmDtT9zfkJbYQ1dU5C2yjYifxoMmpjBmVqnaXZZ22E3",
  "key12": "3VuxNcQ2cHuxZAvSNZ7Rz1qusLjw9tuuLzUMSD8Sp1qMYDEk28iqfAd1NTr4FwR295FDXNyk922iQ1A2snqHPamr",
  "key13": "2Tw6knw9Vzq1ZiSavkMFZeVEbVu1SEsruY3gouJbg6jAN58FKnJ2cCy185v5hZoHDZiuzcbtY6s6fp3fZftsjkq5",
  "key14": "4vyBVrqfGxM45ifccbCaGAQG8eyo2CtkrVciHNSWXBHCU7JQbgoFZyFaAJUSQTH9Kfuohzzqbgf6HPCA3ZRH6GLb",
  "key15": "EiMfkiEiSKVbFfAFeQLSqx6XpEupyVGEb18MGbsAuSA4HdXbGXNXLvnufZXcPoUZ4skk1YxVSRJtmY81VRcxSMv",
  "key16": "5axW4Di3qFHH1Agd63T6VnP6vttg2pmTHEja5kjJeasbzXW4HL1BwQu2H7WAABTiXtRFRSaSjCGHCHzwFSqK8MY2",
  "key17": "awsLJ18r8mcLc6dLbrJc1XTVHbWScPbg1sgHtujApUxygZwoHYGCY72bt9YCG7KWkzFqjZJ7Q15NtAPfuW1qMsS",
  "key18": "47eaq64z9LPG95D9v35hFXGb8zm8wKb5pxKnEaJc4deLeaAubLHH455tq6EhzCtFQrK1CRXjF1EyKUqpGE37S3iZ",
  "key19": "4WuE5zafrGS7SbhCFwdXZzTFi5gBZqraP15LghyVgGkR4jpoZvu6sLa7a6Nyg7JtRVjpf1YDKoCHfmJqXTBv3Tv3",
  "key20": "43wFCvWi1jp1hXZwYyKBDuLwG6siiqs74TLeysbjwkkE1GXNvcp1pJNRuD4eSFdKDn8pC2uB7bcpppEKdz3NEtgQ",
  "key21": "2vtjR5Gpyzcjt65VbbFQzTxt9Ua5TVY3QJb7UYYVAMx3rTmoAMBAjhZFcEXApnKrywNLJntAYsUKGBQRa8s4U4L4",
  "key22": "5mYcQzQhxtj4KWNDpegqXBBV8e3Wp1FEoLrwk8Z5h1AWfDdSkNzBNx6tyY9K77C6VcqzwjQwg1ncKEPZJQ5XUBk",
  "key23": "3RNWvY6276FBLJM6NhHfsKjdYczj3M1fdTsa7gTmVJ4NJxfVvwKKHAEQbfmeFGRsqMxwk4Jopkm3UjaBMwWGaUpk",
  "key24": "3gi7eX3byyGukn6DjGmV9UWWu56jHdNPswXZXUFmLcm1RwedpiPco4xYE2LURZjnqQZ1HonHaQ2MkrrGqcLkTQ7T",
  "key25": "2vTmCx6CsugtDfsY3AxPFYRKKA7BC99FVM3zaY8Vgq43CWg4Sw4DiCjLpsfGedDyHMgMdN8RgGoj3xHDMHQMxpCt",
  "key26": "3twFe1sWTt8GwtvcyiyMPTzHaQdZCDkt4hyEm97QFZbkSQLjKhoNAi52kuBusj6DFRn7DvC6vEbcWKGFzwJERZtq",
  "key27": "5RsofC7t25tBBLPYSqkL2oFRzZ3jYcBBWab1svwB5izTgRtn9ZW1h7sWyp5mQ6JjRSRBXJe8VqXM7QZEdUXvm75k",
  "key28": "67nNfJy9xVin3jgUn682qRA1tXEgK3pGYfr6BdxGb5RFC8agusdC1FLpu2AJ7dt7x6VduoUcijcedJuFMnBM4FvV",
  "key29": "Pfk1AyZ44Fmc72j7vS77jWgNT3xUUHo92SkPkQgXkVzYU4DC6Ku6kE4gMdchqANd5g7rtaj9TdLo5dWxSowiNpw",
  "key30": "5ojPbRUzKKukcedVcPrMa6JNAcPpxkTSVA6LXfZc9wjv8y3hU5MUHdRFmBpwPbLgcknnQSc4Kv1MZEAyfKyy6hSD",
  "key31": "3mBKBYQid6NWKsF1igGDDJY5wYqDjzRMPgKhnhDEHhT7NDXtLHVTVPCX3mzsm9Q4dKbTx5UY4ubx6xVMY1gsWiHF",
  "key32": "46KyJhTwLmBko8bCsfst8kou5FyBYjBCfWHbf2Eqjv7USojYsqPcBPhXYYvzLDSkEnBAPhfy7mpveyxc4Sz8r8f5",
  "key33": "54dDT6fVtktyUdcaWrF9LkubjT1rTdVSiEKgiBmLTaFeyqT7KrpodFmdRRZtCF3JcK5dc2Q1LuHjmHkSgiWUKwVc",
  "key34": "4x4YP6rc5wKBLoyk9kgEMAZgTMLNAcmWaftkiQbU7stafCS3veQpKK6X9NVe2HEmbzXuwP78FsGrK1H3ap4rDj5m",
  "key35": "4PLVy628WkWth56Xpgni7uhy3euydkmAUFmrHdcKm2UmahdmsqL9XtJCbnL8JfMftsN6ECAEGZvWMYu8PRWVWtSu",
  "key36": "GfJkZX4wAiSHWF7G8wBaRwGT7f5WkXG54vNAEWn4KXDEywXK2Jq5PRdyBccdnAYBQtTpd88yVpqkFqTeD43bxb2",
  "key37": "3bXwXcN5tTsrigDyuCmF9YbxHCm1MPgQLhuHsNdXcGRxAkvcEMGdAfz49i1JEGfrBZVS94pxCrB7VNV88kMXikQ4",
  "key38": "4HkWiDmCaaotQ69ePyNVnoDnzLimbDRJRhUDXDxUsPQGYnwUrdrpyZz3zMdPxGLQbu1m9LvMMCkjmigaPETDDjqE",
  "key39": "2DCkpteNamJwmmbi7fMCJq7AvowcZQeef4AmUxjFK2ThHHnsPq1mvBK7wYzHNWoAQBZY7gSntgsieMRMT3GHYXqE",
  "key40": "5NX6qB8zUDyECHyLwCrvBMPjHkATB7ofHRAce3SaFKS8fdp59naCTRQFr4MtvSxgthNNUakTbVmpn8Zj1XiGV5eA",
  "key41": "VvkFiXdQgU9w1y2dNLbuBWD98qH5SmNynVbNQiJgcdxdaudU5FUuitX86MbHbz5FE9GmkYyjRCo6NKM9jVqjxSY",
  "key42": "PWJoBqaKmS42yPt269NLeQdXbPMVzPzz8UhpanV5jTZHhBQFxEjUNZNnPboESyqr3w4xqaGfLnR9mXHhCcztxxB",
  "key43": "3gsEakP3TdwAkPk28GWaEvnNkLcbXDw5L6vcFK44KnYgDBJej7C5mVzNydeTgaHDmhjTe2whzYqhmZCaLtdjbFEg",
  "key44": "5evr7p4TakhUEMjWsEetumGYVFXDWAPngrn6PBmsQMtPVgUxEW2fZTZZihcNMR9guHKYZCiRAEz3m7S8pBDDWC3x",
  "key45": "2ArdSdrLPzW95cWEzwUmw8bC8tBf75JzjAN4viBCMf1sDqfXeZXxd2qjqMgVTeQdNty8oiEhyX7mzeNSARdJXuxj",
  "key46": "3Y7PdRx9kAc1k9hpwhihDNWysW8NKWkQThRPLUYoQ3t3HFZte8mmpS1L6Vg9wekvBp1Uyv6YG4dWVChHAEsa4s2e"
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
