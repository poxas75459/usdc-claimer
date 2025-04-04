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
    "56zu3YQAdfVfG2GgbWW9JK1fSnt1ZsDKeULwSsSZveWDDfwj2q5ABLkXDxh9yQoYqCLbPiTR2snDq6GVLEc1VzbS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DM6NygjrmNMpbBRE7TQdr1QqSXPQrjkFRppsLxVjNStAByBhHhm1ExhKHNvt8z4yozk7KKcFHjHBsq3RmJvf5NH",
  "key1": "2KUbrvoZnBNB7yi2PcWLcorCU6zk66VDP2W5iCfgWND12dtmNLT7P1XnrvKF2iEyQdb2YEaT1rRAcwq5vCg5pb1T",
  "key2": "3ZUvXaBdGiDtfu4Po6ueP1i3DLrwdrXgUqqraSvZtFNqk23xKy5FLmPzv5fw6mRsn4BzHoBEqJ6TVtifLtovxe9Z",
  "key3": "LSyowMdJbkYbtPa6R7H6JEKMjuJ1FFE7RkNupTf2cDUeRYDX6e5h3o1XKNR86ZSv3fA8iFUQgCVZ9ALJUPNgZpF",
  "key4": "8B76qhnQBnP4J6DjfJAZd2FUABp89H1ong3DAfVkr8QF6Sqw7PLNuPziuFV17rBpRD6rmJ5FzSCnLMsFYPdwSaY",
  "key5": "K1i2aZeMAK3W38q3jfne8BkuchoSqrmC2BVV7xqtxzxTfUpn3NCehLYjU8K2ddyaWxwmwoSNwimghftvR5PPNyb",
  "key6": "4WgkpTkv7DevuX8kb5LhcWuqZJoisU2EwcdY66Wb11Gz9tGTrqjK3Uf3pU6uUwAKKJS7dZEDMRgUHikC6PcU2v4a",
  "key7": "GqVbqS2jSgPGVnovCfka239BqAvrKYBKeAD7ghfFENyiJfvPPRiJbKj1APp28j3D7subBaC1ZDXo51buYidYBhv",
  "key8": "5nkdw9igmRNtV1DmubFY8gg2hTxivg38nWsfxmx1G3GuzCtbfvJCVgSAwASbkY49C8FarcMyrNKkCS7rj4HoSgJp",
  "key9": "22k4wztTcBZCjKwr4QC3DvQ7bKXLE5of3cHxzLDULjyCXrF89GUouVpWoUGSGKJL8k2P2r5teCWQHeJypXGSQJpC",
  "key10": "3jfCuVpswHD9EzUGxRwPSeEz8dTdLnMi6mM1n5Rg3zt3Bkv8wtuf8XPe4WLS55zypoDfGENeRMZcJaDDAVGBqsrV",
  "key11": "4ZLe6YL3VihV2pMMcvogvZtg6PzaAyxUbrk3rka9xPo7wQxBRfgoqGhQawQ2DezJQUpT8wCCMNVwXT6FEaNwMD3X",
  "key12": "3Fd8KJZXMcq1BGxrZenjRogHs7nARPEGjMmS3dgpJkH8su6d9M7K8iDGyvMUXg8aNJZWoausgUFjdubKCccizBF4",
  "key13": "4VxqdRTFKfBzWjrEfrfKpV84mffANoyjujAQAYgYVR6zTm8VPcXECvUFsQNnUiuhefkNEyMF9fFhR4q3sup4B2pz",
  "key14": "mvnDfhnr6L1MGBTVzKU1XQGgErQXMjRB2vJMFRwtVE4GL6yA6nddq4DsYDrEgp5T7spucAheKh9fLEuVtigmCyX",
  "key15": "Lq5vSp1ii75LzhmYffHmdPZ7J1DRLviUpwQCRxibQxyAtVn5FxAH6346SqHNzTgXhXwaXYMW617zKF28oXkXiW8",
  "key16": "5KkUrvHr9siWBWUHtpsEcYDgZgXTQfEd5yiBGzcKdHdDKYVawFdFYHBhZfD96JqjiCXjP2XBninF3RQgYgocUve1",
  "key17": "ZMDi7fbUh3xRhGRv7YP5UgUtdz6aMyQBSDHkBUnRNKLLwnThTqVEx8nitYLB9tn3fHq9cLdDqQKK72LHyJm5rwr",
  "key18": "PFkeW27H3maeSQBZyAfTtKiGMkj4oTBwfpzdJQgmu9KV8yMrDBWf7aSsuZdfYYcFMV9TaPP8Qq3pYnDgD1vekqn",
  "key19": "gt3wgenRZgKcMSdHZeF84vb1au3rRGE43A8re2MAPwhDoSqB4XMVVVx1RVXWWhAevartsZBbZsUZXhuMNjFVQ8W",
  "key20": "4wL4yWrXNRn3Myq9TsQGPp2ayrQ2D3A2MbtYgwwi8v6fDjDLuVN8m1p4Tz8Cz8wi2xgL12YxpThY3MvYmhqE7iF",
  "key21": "4rmpsan84gbMsNd6nXoBsbjrha7KzPk2ZaDJEGDZpKyx2Yvjwtx9U6TeunqtscqDecgx2XzX3AB5iYisNkdKLEME",
  "key22": "4e95eZ65CdPveUupZFVJWxbjenj2aGSCDBq9cK1mcsraMinqBgMo5wYLeG4JjtbFEyUxjjTHyLJjZTz2PxLkGrZx",
  "key23": "2KQm5mooMLYzftQWXGHLVPzDwTn4fDtaE1XFSUaA2sZ4emoowNbouvVL2AAia1aKNRL89A5Hq24k7xwZ5PZ7TeUe",
  "key24": "5AEfTzVoZXbrce1hCSXaBCegifhVvfVKp5h9asY5EfgUtprSL16MdRzyRghjngrVkue9NX9GAb6yqeEoNJUdJGA8",
  "key25": "3KGkf2MLsgeoVUEVWVVQB91bsgnsThUf32TzmwJ43RbsBS93uAWfuj6s82H6oqLX2wEiD1xMzhT9thpN5891WGRj",
  "key26": "4bRrq4XbvZAvyK5sqHbD1K7t3cdTDMDz75VdL1MCiA4epHytdj2KN4w8H8oNknJL5ebFgUrDjLvHiD3MTMp9E9iV",
  "key27": "UbYFG4DCiaKDv5Dsk3m66Uw2H2KJXE5h49JmgQmReYi5m5qXn2jhRTuTFffkVPaiitUCuvneZHtdVmSAqVB3phm",
  "key28": "4Kj9JGsG1jGZvMbujryQstAWd18z7yybcu22W57typ2gyvE632rMwr5gDAHjk1GFsfstt1RgyMGqxwaHujRBqz1S",
  "key29": "39bPa88rSmrXpomVXMpjuLU3SUf7vCZ3x2nKnk2azx74yE9xNbZ5hyRYF5CbnMfkX3c4Rb6gV4Htxskfyfr5ggHM",
  "key30": "4k1nXAT86uP8SuemXigWGbfXXPJCUbS4Kes2pr84DPsNJekda6vwUMzPNMrVou1LXWW4wjgyAyLXbBh3kqxosk6",
  "key31": "TJMV6ZBrRSqQWB186KvxRi4vAsZ97TsFNddmG4D2nSMjBb2MxkLhdU3r1xLBaPYZriuXt7sGo42gshyda1F6bDh",
  "key32": "3tJS84SkQa4iLneRi4mE1R1mtcNbsBUKmszjQqy37sLEZKi8SiqPktNGT8uDEbdkYD97jPDLfzLvEdNCw1g42bjn",
  "key33": "3DMewFGgHWJzXjpZoyqP3vbggEocFPTQeVXrw6NRVXTGXTB5NiesoPUfbru5K8m6KWqY61LURRxmPcMD5qmcu1wM",
  "key34": "4DLYLBDMX8CZu4VTedzoFpKpdDVuLmSpCkzC1TSXhUb7dNYp1rgY9RjDjdjWWUrBazvhmgjeJytsE7AeAv73eFgo",
  "key35": "56eFwaVXWfuvJXi6Rxo5BG43HY7woTed4v7gEe9wSfCKgCxgfEKhZWp2u7fSobER8AdxxXutqnBcpJvXXXtit2zL",
  "key36": "4No1v91x1zHz8mGufUjemWNkMEZuJcLGkdUWAivM2G5467p6bB7fsBmVUzHVQC3DuR3YgPrUinybtLe1LLpC2HRM",
  "key37": "5UDAoND5kjbfcvwtYbEKpv6FdvR2jJv8DmKn6mGCnbNdtfj9nrzPzkqgK69uB6xUrfCF2GBPrmp9xxZzyWB1faAn",
  "key38": "2SEKiZWBiVy7p7QyrJ2ztpqND7d2isnkve5Vb5xYn2e1cVgi3adZQVrGeNPKULzhehPVr366GeXZ4ru97X8FQhMx",
  "key39": "1zZiZYGJuuBFVNpon9BLdNpffrPdLqvBo6ydrK6yK9ecJLY1fzFEGhyEkpGBgS7fCo8veUdKA2v6hoeimSzgQv7",
  "key40": "2rSfnVHh3pwTEdtrNjsgJZjpsvcwqYQS75LbdRGPAe7bVtRmg61pLfKr741tcTzzatZUm7sWzACiEXWSFQV7fo5T",
  "key41": "33diQtdfQw9YECcCXyhj88xjCDcVqZLXvXFuDHpVmcFVRrLfYSEnmQHnAXqGnhQpCuk5Vw6EsJ5qjqehftCZm3Fq",
  "key42": "2PEbvtSNpfnUjF2Xxbrcy9UsfsSmM7aqLWc9sxGezFNLGsmdx4jzXf7SoevQLLLJW9ftK4q1Vu1zpbuYei77dx7A",
  "key43": "4dZN22ipzBEYRfBcArM9k3nTs7hR5Y9p5fLbJyRYM1FmTipvaDze2cepwsR7mikJDhpGtAdAXeT13s7aPmcotV7B",
  "key44": "5tpGmWjKXV1fTAKL7tu9Mib9g3ny2GRMkoEmtpSxL8mM51kBqX54detLda7z2y99qcMdoWaEccNgUUbPBiQkkS49",
  "key45": "qZWwJHPsBQtwRz2mRThbiVVUW3nNdexirGUgNa3x2mXCmCLwJJDtDQiFZ5n3VuPtWV6GGRG4ragrhopkFBrDdTE",
  "key46": "3TUb2PqckZL4bXR223stUrY9rQLU5W8T92fQyVco8TYqgU2gAkhdMAjZhbpQCZn4QT2zbPKgN5zoPzDprA2Pxb5D"
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
