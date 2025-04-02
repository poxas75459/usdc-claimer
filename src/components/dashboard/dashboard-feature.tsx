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
    "52Yutnf94toz2hLy5aRmcDcsrXerK5zgpR3qK5rvQzdaKPThdwdnZnpvWPbAJ9jXbAP9AV55qfbdYxFcy2DfWwvY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Q6cNXEP2WbXkj2iaJGqcTKbkczWxNcsLEDreXmSZoq2m5zDamvc97Aq8m6NhzsEu2yhsrC4zqwcFeMcvZjeF65X",
  "key1": "5w29a2nt8hPQxu7sjAnCkNfJwJRvc6g6X4C2Yu9BDF6HDCwsAgXMPGMjGbAhy1ZSAWCqM4iZ4U1PFjo9cVNGnEak",
  "key2": "3CdC8P51WjFpxXxLd9nyVXKMmgxcFtpBzh3pxqfa8qJG25xQQmevBdCUhhMMDufKULDbHtDy9aAxW3PpXy5hHoCC",
  "key3": "34nZe2DYx9gREcR8tSSQYoQCsmLRW1KwAcoeHu3ccUxiM2cb2b5GpJPPJBDU4VzJQrp1ejsnYCYYZAgsGsh6zgcR",
  "key4": "216UKequxi5bUR9ipE8Z7MyLaYzg7ELifK8r5pR2MQTfemWD7QtsAFJcKmD1hmUuq7DMpU4T7MXVzizbADJVwWhU",
  "key5": "MH7GCnSi9p63r9fkRCj9i8AR51TPWNbCEeDpCrQjt4yQSfS1m9gG2mVPKPYhWM4WWkZeaQD4c91ChGEgTWXTWW1",
  "key6": "2nGqFBQT9QztHoDMQrbsHEfdYa6jWuwaTwEFRFkhGUFoiLSWxwVdvQejjUrKnsojaFhMmfPH7KgGH5iyrr737vdJ",
  "key7": "22ogUdSFafPEwqHtATgKnCKkhyzByuDVVPPbU5AwDrih8rx1W8gmek1PYvDaUKKM1Y7n9NsiKiHLszjbqwUpNBjJ",
  "key8": "2kCx2oPFdvZqfGaiHtXAyMyVQ1G1c1P7NqimLDYpEbNhwTf5AExheWwpa1xUXagsoffcuSP8mTpFkDYM3CytDphM",
  "key9": "4mFt4sr62ANGE2mtcskTTSz7bYQTzDnhuZccu13PwNEpNE5LgRSg53igWqgBNzaoamkSgv6jiEQqGKS48qvWjF2W",
  "key10": "2Un1Q1s37ewx8oMzCE1ThJMuxZjtMvCUUPSKuK5JeuZUVS9q3e4RoZ8RtajUpBDcFuwLr2vBFb73HLTWMsDTUHaN",
  "key11": "2UrxYiVoVPF5SYYV1w5HocwajHza2XF4WDYRgConvEMpVhozYKGpy8Xa5TTgz9BsPamWYTgJLLVVHuXLpfaSgSpR",
  "key12": "2KQYrfnTexLA2VLnotsLqXMTjuZzcb7QhbuoeBMU8Gyp5ngiHkhHMXzkffJtREpoVtHSNbtpAryBLczruzsH2889",
  "key13": "2mTiuMbyAW3EJ76G923x5gbJfNHBo9PXW2bjcmNsFyEViuuvLk2khjtBGoTDrPgg7BLvRVPHMs22NYCGusgotMnF",
  "key14": "5vH4eN23u16ogDTSoFp3WnsXAoUJrHt81KbGj3S1SsRgaNDsrrwo4UTbXmsGuXB76mQvQehgdP7PJ7rCWkCgx9vr",
  "key15": "35HMq3689fYxHih3tmYyNTdLEeDMa6eZ8UNVm8sL4qFN9vP5AssbAYVymNAgQ52aLTLD1gZQpbk35dGhK2Ry4jRh",
  "key16": "48CohaJs4JZt2NSzQnae6YtDqVLz5ddXHG6aiCTvkMXxzRcn7mUicRDkjoCbuK4S1d7d7pGj6cEG7CtEpiLSvRNN",
  "key17": "3a9gDFzoJwHRyyS5YgT2JYNHWHNkyYDCdT29JK21GhhycsKb5yPsXxziocnk41cgDRfoCyN2YJ193E3VcR3TgaKS",
  "key18": "54RSqjaJdveq9fmLxSbADkjNboz2BeVQUSYa2meQHCJqGU2YqNm9bJ9EwWWadmjXRXVrZ9XoZcnwALGsK51eDcc8",
  "key19": "HztvxFScRcJ4AwTHeej5kf9ktzqxoYwgozENxxsXpHcqYCCU75FAUXeHNNtatdB1BxCu3rSd3RwVwMruczkQRhF",
  "key20": "2Xu4fawy514FSAMui54P76SJpQcBQtxD7GT4xz5NKdFqR2mSFSDsMCRF1pxTyNQrKS5vYEvhwaWCfCczbJJgW7X2",
  "key21": "35EteV8FiJVLFPd2yuFqRmHeMgiiR9gTx2AnCcqk3gMgy8ZE323jwA5oV2Qp6ky5CdGzu83Q7Kjs91bytZs4mzqt",
  "key22": "ymkjUR8qEbRW6cz4ko6w58MDqEWnHEDfAniSikVfmoTpt8adj5qUKQfaGRk25Daj9TVp5cZqEYppP1qb297L6Zk",
  "key23": "5eS67C5q16wjJmC7x3XgEsv7pLzh94hcdNNCq8TzktzY5zYuZDBXkohddp2kywyTyxMjBfV1TfsLES9hsAvepPpg",
  "key24": "3sVSfiUMaf7ibKo4kotbgkZEgP3kzFQvQkVJAPSdgbB1tVrk9sr68zS4BR6GotczMWoisqaHsnL4BqC57fDSWYuE",
  "key25": "42Z6ur79atQMcb1PZHdRm1rzAnTdEhSQCzLZqrUFh2bkGC3VyJ9zVenKm8PN4z6izFnWkS2pgSGza6XdmPzntqqv",
  "key26": "3uhyPZ56j3nh6HZbMYWtmyHmicvcTVWZhBQBUh4HXjubFeTxeZeQLibTbsc6qj7FmroDJHpJmJoscKkcCyV137Yi",
  "key27": "3gbBEiT1NSvVQa2q5G8L6eh79JnYCbRrJGQ8LYXDFBYYtzjj2pASbpckxx9ZX9av9GqFDJiG4ZQtxPvTUMbxpjfH",
  "key28": "3HKwgndu8h5rGSYKQHcp6PVtsm5D8bXiXEP5kjqda5UEnNyKAWbRtABjZ8aU8NUtnAwmuNjRZr4Svns3megX3qiH",
  "key29": "5GkniDsHoXDbyfMU7SWNZZJNDwDoUqnpK6w9W9L6UD8GcyGcXHp8bbSA6GZJehUUWFNsJr296pu25eSbQoE23ai9",
  "key30": "4vZPkLqHur1GuizK1yWeqtMqYPoZ6h7T7poGhzBnkfrVaqrpYYLe6izLqtuFZy2SvZj9dSg4htztiSZmDqjZPZcc",
  "key31": "2XY1BJQFZvYtHrbstWgN7tT3seqrNeKji9DUgUfQwdcED4xfXRyBDfU9bGB138jKMwgr1NKT8Qsbk3SXLFY6mDvg",
  "key32": "28FSntPYeRSHML3EKjiM8er7JUhM745mu1a7arssb7D4Ug3v91UcBPW1xcP5u4Ta54bZfmsLD2Xt2j9UZjqjrdTe",
  "key33": "3j9nRXfVah6e4YjXAvBBH9GvLn4ykmfQvqHAhs54L2NYov8rCxh48zSemKFSJ8N9M4z1WB6GwcYshpjJE53ZoNNE",
  "key34": "65eWhqvbsaRptQjAry8ddJjvZeE2CLjarsnLx4j8Ndb42YPgk2PTexyQJ8ksg9hGV8Wbyo73dbfh7VLsbh5mS3nF",
  "key35": "5429acRJJGGDmnNEHDRMeb7a6sYMfKvTXrS6UQPkaMoz7LniJdAu4k1hFX2c7V4xceQZoEzkKVr49sjdLkjTCW2F",
  "key36": "epFmCQvaRHGp7jvkrHAedwVAVsD1fuMV67NCjQfwTFFbdvLNiaaRmeQCXrDMj9G64chUyaTcDP5NCcfXztQdDs9",
  "key37": "S6CwwRTDneC6Nv6Vg6MT2mfTxfZFwU4sRzNsg9dtWMxSkSzb1PwWyLLyHJ7128cjMNawmXAMArqdfpnnSoPJwFp",
  "key38": "4ipHp65YZTg5SHBxMZuQtziNmhdAt3jsFAK5pyb7s7efPKTfiY2R87F6xccrsp85NHu1xnCmC5YjvdcZRPTPp4tb",
  "key39": "4RzGjQH1rhMe8tfHSVuPvBMhjjAMxVUqXMg39ZyUqVhKNKKj9UMTV4PVig5iXwqEPQ54Yt8py2pEVbyMskFyeQxU",
  "key40": "296QHk2Qxiqtk2T2btY3kD4dvzKhdpfZW25hkovVKFkSHuCyLASAzNZQaJfzXgTGYBhGC4kG8JvL5NYd81ZohWZ9",
  "key41": "2eVnEP8Ntnab8NxGQcArBWrovZE4LVDvr47TPsEgtBgMAKU5yfkbZDu1H1D2GdpQV9F8nL3mKdRVb2gE3XzJHfg4",
  "key42": "3FQUCjS9jrB6DTqe2NgA2ymmvaGn3qA8x5EnvwGmpH5Rh1WMxLh9GeSq2gCZu2jMnzRiJBqD4cQiXfXQzFRoJj2E",
  "key43": "4swYxDchCTrepBoX5SNyVFXvLcN8aFuB23QZ9yckdeeomcvrFNTeADZV3TABoPbUrezwTGwLAvH3C7duva2SVo6m",
  "key44": "4pTRafnDSsoJoQNPhFUD44qpBow5Fgi4uy7CcfU4GwkBtfCytQ2keMmXVpAdaPTrhKu9ygMrh8bVFAmak9nTdfv2"
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
