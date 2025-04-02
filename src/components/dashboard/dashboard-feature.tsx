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
    "5TSNCeBjC89zSaqRJRiU1jZHRgCaRydNRTqSeUJxbH6f4aYf79XstHpgmdHzVgdQCgNrrJYG2Jj9cyARoE27w6Rr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3C6tPkh6vAFiV1stfu6TNupf6zM8QZ5yxcemmTiypNJyMr8g3EKMAuSXe5Gz8551WkrM7TBYHLyZPwxSCCiMyQan",
  "key1": "27YnupHKYP3FjZVMprnrvcWMGtJ13X3oN9ZAWFarqtapKJKqrahpC5op2Ykhdyimfts44YfTzeeEoBynrnZ1B6gs",
  "key2": "4hqJ5yvnyc6DfLm7iQRpxbCiAnZM4bXHV2kMA6jvM7ADn4DJnkPiyk8huEjLeXf72SDh1iXE6mDhQNNStPZHYPcp",
  "key3": "621tkib9ovxaRb428q2z3aRBLEJWkAC1TbV6nUcTRhWF9WEMRBWL6W4nK47QTZ5Ma2VKVz64dzC86MZhu7ioh6Uw",
  "key4": "4Xq1YmUr7AnK4SpxKpomJeY8naBrBU8mh4pUyhMmhyM4FENcXZhN6DmsqdT7daVc47PvFfyv8LMfPX3L2YSHBvfz",
  "key5": "z8AcCjHjymcGKkDjQkjGUcw79JpfdGmCG4zR8pwHZLCBR8nEFAp7aTQxFLPBZY4q39SCJCPqseN1kee6TSUrbgA",
  "key6": "4QtjQmY72CpwRjaKG7kJ69m5cffUbdDRYjRix6pV3BoxGxr3mVBKjSpsbECP7UonwN51fURTzPqyvFc5yoB79cq1",
  "key7": "n9n8enBFbrymsFUte69rBFh99zagAW7M36jQLffBJdhbqbYqGroAwRb1DRJi8ZotU6nNfLhJQZJMYa3tJuZoASj",
  "key8": "32kQF8ki18EnkDM7hprUjC1k9y6bhDgWqSJmuhcqT4tzyFdsf3ch4PgVEbfeAwowJR6EeHGDFievhCNNFexesKKq",
  "key9": "4JT9CDB4rZVpSedtaVCUQFBC7P9JLuRyY9M22WWx8BA6pPvHU2CubNZ2RRj3YC5zoEdQX5RGzbXwyYkuer333QTm",
  "key10": "5r4adnkNkpi8rDDHPDzFNpzdJMAUbfPSVyJQgCyRSumFFa1XLPgJp7P4uwHB4XtBMeMXMRYcyxmjm6E2xigvAfDm",
  "key11": "2Aj2UvXWFXL5MMj8odiFKrx59z6emFmb27rDh4b2hnWr4kuZeBgBDW2ZeybEDkPpxhoTTU7iVJ5Q2pzsnYXXgnii",
  "key12": "67ZEhCxWpn4TwhjKxdf8KdHuGzd1vb7sfEsnmp351AsU2gZuTpWkYGPPo5zHMV7Ft4gepFPssTf1RT58jRMpUgMD",
  "key13": "2cJm1fPHKhdxUc8GFbPbuT3jwi7dU5iTz2XJX5ywQc61wNTyZqfNrkJp4f2YPYECwmiP6DkG5uWZ1FBc6vwJ2r8K",
  "key14": "2n422YvdZ6V2vNyAcD421g9aDsmmSfhidMctbR3uUSWeVUeekSY2NyQsdybARWThj7ASZ5z2mrXgr9shAyvTbV8f",
  "key15": "4kXYeZxv34EH9XNyXRAdL1roc5ApALSgtGVcfzEZp6z7zFA2VHf7A3xnZHjGDCaiEhagbQWtyKMkAwKveuMQEvwU",
  "key16": "2Q2pJf6XUxxNqincrHdanHs2qZBLGaUVKiLdVbWWcekKtxmrRhAcWRm2N4gYV7ZUv9nimgXGw9Q4wZGGX4qXw3BJ",
  "key17": "4Dv8aiK3qiRz8TR9jRd3r3JJJHoYYFcTm3cUJ5eCm6xTSwWarZc9miRZkYoZsKnW7rZpTGxdDgSGzSjRmCEaeUtU",
  "key18": "46r4HMtS3CXN82BFep3zPS9ahsw7TedAyJ6PutfxUfMxU9hDDDKmEfGEFhCikb6bDN65LdFmKdhXZrqs4jzfk9Rr",
  "key19": "5Q25vULoqhnMcjEGMgZnbeRvZHTPFk23nYxSX8E9NskdRijk6vwD6vM2RLm52Jgb1XcwJv9nckZyvxH3j1quZPWt",
  "key20": "5PCdMpynJpmoD2HFinTQ5y2QrcQovpjQUzW5dRoH85wjJMfasUwUp1Az62PkaEuDcCYAma3RXm6mN7H9uZPrJNPP",
  "key21": "sUotfF85XYHH3ZXdYT44cv9UQggMAGRjntog1aB6kqi2TJiKYTKTsj4PANoZnztmcEhvbJaJjik36aCg6YQQfEo",
  "key22": "nuRfsoSyR8sm7v7qJjRox2ywi7L2pxPb84BKs8vLXfpHi3PY7oZJvXvvpAd2c2qoYG534QZSTw9x9447GNRa4AE",
  "key23": "EAZLgnCXx3TuAkPPJoSU8CUEy9bKW3MnvrizsNL19zJLM2JbQ3jgUfjdD6aoNs2Z69gqhXV2v3iRKZ2MxxvKieH",
  "key24": "3LW3XNuU1vauX5u8kR5iEKTinybH4CmWbsXj95wh1UE9WSFjXvPrgrDMnVpUrX41w6rBo9wpBfZzPGUm2wwd28DT",
  "key25": "4Bnfq3XgQH1Mzcb8z58DRPnaBtAtCBs7BS5YjMgx5gc18A4gPsxZsLBXhpGawk3bXhPZam8oPAWSqmR4QPREZpww",
  "key26": "2z5m6sKGnfmWu2by7CgKT3nghC7ALADcXra3A5H5XUJ9CweFLspfWeeEDCuoE31U6YF9fWmwxpHqFW2ZbTB19eb3",
  "key27": "5XQf5qfDTfBYPmjRhpoNx7K7V9iCqT6K8pEfxFb6wz7azj3q6BpAYagg15YQfuFCQs4F7Kxh43RZrJn2Y8JydZuL",
  "key28": "2ivzwb72hrbyBRM1dewTg1DNvM95PJxpRNwudxsjicY527VFqwgk8r4osxX8cyu7ZLcmBY2oGyVhrtVPzFduQ519",
  "key29": "WWLdGitpNpYpJrek5WtwbZGSAPkpCwdp36M1DPmWzbZpGei3nxy97YU565VqKRDwPQcTScVt3VXJyciwKULQL5i",
  "key30": "CxPDGyqReTBB8tDC5eFTtHYibEdCHnRoSoVJLWGFL4wbWHbKJFe6vt5mkpkDHYyyf1MQ5UHw939g7bY7mbZJjTU",
  "key31": "2TYxZrqPiwVYRPe1Aht7Z4S2Ha1YYyY73MjwhfWEbxDNNqfgxnAQxoZZcvnXfcL7JvTvVZM2b8YoX9DznoWJDfBk",
  "key32": "3TGPHLvGLLj7RyEZ2SW5rJoV4WKpRd2QR2odCUTfj8fJciAkeRFZ1wRXiHenU2Bfz14CuUZwCacpgGrHfSRRnC4X",
  "key33": "NDsrDQYhBmcbNtZxseVTbKqBo9wbf2kioGQVSpVP48su94y8rPGoYaUokT8Y3KGh1REvGSddM1ajpJDQqsCeehr",
  "key34": "5L8dVBHNypDpnYBetztcyJVaeEwByyJCuqLw7u3Pw658aAMg2VqdwJUi65jzeSDqnJ92P3gb2U6ZWsSFq7FMNMWz",
  "key35": "2HGFnMudUJq48LrHpLgCdkj5PbtAwEP5dWGFCFALN9KcBYKv6DNWvopBNNgi9h7pfrQLLXutEicbzzGWuWiaLFy8",
  "key36": "2P6Pp1HnbvfYR2zuCds4kRWU57iaYYhBoECLR4HWJmXHA14sLr7icZmjJXv1D1kdMpAUbWcT2YKpxX4d9U9exKg1",
  "key37": "5U8tvaMb7iWMYUof66QPhJLtQhk1XmK7H4big5XLRdrjqDM7uAFatirHoBXviqkyhQpzDU6qXPLGGx53URndiJpw",
  "key38": "3vmoWT3PGvFaDBNZNJEeN28FoUbkyjKuU5xgy6yGEw2C5khSKQik4ErGUPvjSMsB46mRUiL1Cbk7CeWWTn5Honuc",
  "key39": "4vChN9tJPUR9m7hDyTzoV4htwfUwZKVCToegm7QwYc1wwh8juQco2ZPgGru8ojaP6SpPH1FgqAnMNKwtyx8vLrQ5",
  "key40": "2Po8ya7ctDRp4fC7gqxpeuboms2S9ux6DfsoUwtuShwfgyvfK3kSdAwQLJ1vGFAwkor6E2QkR6Ja8urCX9h5aVPG"
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
