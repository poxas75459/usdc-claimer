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
    "5fazjUp7aRowwaEt1rZ2xamV2YPamwUNRznRbYffU36kQ1rP1TF8Zqg1jndrg34aRH9gFgKpABhYZ8WBwi9ULLBJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PJWgVxunzbdGigkDYkucen843iJE2zNRrdv31nvmuLZwDgDJD7bBgLkvJuoccE46MRFWrTniz83p3rm5TRzMLJw",
  "key1": "3jyVLoShywFoJzL5XGZGZmDcfX2zD2Un1hANs1AzgVtRLpQADEuKnA8VPHAd2Wzc5aDg72HyRU5vjBxNu4qReSKV",
  "key2": "5b2kkFwGgJBwXSzqnCq4wunHdRK274Bd6qR786D3qbbHrTvkUzv2u6PYjN3TDxYr2iNF3P7SwLYTPKt7H9pYeyjB",
  "key3": "4Wo8YkBXhHhRzesdxVjQbnqDVrxSnpdBmUk2M7qnDXAMpxfrmunriFQBmnMtcbyeoRL5C4CJ9JBQUKx1FQJHR2uv",
  "key4": "4Zm6kDNNcpF4KG86z7MZbGM4BV8DBKnNoyoqdMKqpVH5VArcgK8vAi5DA5NgtJ7z7Ex6bAPzVSj48VdkR91AV5oB",
  "key5": "3TikMMPudU2NtYXYNWXUovKY6sozWTEXurWdVrs2dYwJtLXVjxAuPzY9aCHwqavWyrNcWUPMw6pZXnpy4pNd6btr",
  "key6": "3rn8DzxfFUZQbpS2oDUSL99j1D9C8VSjE4hJ7Eg1yRhTRy7jfnaic1W7JoeVvWtNikKXFgNnfEcKXVesq3d3pEdn",
  "key7": "4v1uYxim4taNgRAXGBAgeuBZj2V3jSFT3gXtt4zjeTevKUvShBmDXduT6DqRjyebXu79nGrv1qobCy34ePkgJ5so",
  "key8": "2T2zviGBytCoMPnX1aQwT2bWuMUabRM1dvBZnpitQb3DkhT5MM8XWY1eLAJbmvXZHjYjnEzpkpNHKQK9SqMt39hJ",
  "key9": "XsKbFeVv3JXMqYgySTfVQp6CzaFDM7SymvhCH7csm1pj298VupHWNWQQkntXB29dejgovsrx1BTppqAmiXhugrH",
  "key10": "23nv6bafc5JdPkiv1VzEULdT2Caga4RNUfDBcn3DJiSEpioZA2C3C2dCTB68YL19b3YmxBSa9divHUimJ9aEZTNp",
  "key11": "5NjxgHoUDD8cSAfUABi33qFA6VGWQfZ8Gi1GfTTDU9vQoVRszjmuuVu4t2Tn5a8nMGzpVtjerbqpggH87h9RYukA",
  "key12": "31isp5sohARPSGyojVDfnHqzWSjqDcBUAiSEBJWt9QnrDuTGyNGuohkVX5vAS52TJQyivinR9rbYuSAFkd4sSWC",
  "key13": "4esoiQ9BZ2jPH3VmL4UJdUZSdNh3Lo7N94n6756V1LYMyVETamgqLWcoEAVawZNHyUEka3sop8xDskqHcoxKGNva",
  "key14": "PnvvDDEJfgwFMkh8pj41eBmz3zTPkdgdevQBiVNbo9zshdxzCFbPovCbMcsaUejdmuYE185DHsy1kCgmfzbg1wz",
  "key15": "49FfhaMxQFQThkJY8uGt7gBAU3kvWjqc7EdWNhVZDbJuWFRiP6PwFKihPMUpCaDqcFDPkMVFXd15HTKapUzzS5YS",
  "key16": "3Lryb52BKxn6swnmE2HnY3BNY7JTgoV86ZF31KKQbsyXEgWat9pwMYWJ4Yxf5aGwNzguD727zf5bHoXCGfesPLqU",
  "key17": "t2DTP4AhGxZPitkK6L8tZpKc5SemzKQ3sVQxfqLXhXV1yyjeZGSct5V9m37oEkTcLRMW2xiPDgBfT6ycEKoCzvd",
  "key18": "2a8eWcAdqCoXEht5AGWq7nRgj3D6iy8FVLuoJcAbfSzBm52bNWKasut7EEVA4LmY5THMZkEJy2REdKAXbqES7aVh",
  "key19": "4euYJFaDjk6SPRdj5VfezYHAJbEutt6KcWDGPLBD1j7pTmqeSagRfAQUe3tVXUzmoBZEsPSWzjiJxsrDSbdStAGy",
  "key20": "Z8Wk1xHfZkn16DwP8HUXckHzrBAcMeun9Jj9Bkh6dmYTWeYJ1jKQPG4dmveJVvvfpVGpgv7SXR6oB9FxMYtQ9dD",
  "key21": "5xR3XcsocEqQ5NAnatqXtKDYD4mqsgDY5hJeB26spQJY64U6DF7WtVkqFGqGT2bc1aVnSAtuPVNWhJPtd3v8Kj4t",
  "key22": "5vo38SHEBF5sYetLT7rNdt5dfDghA3UpJCUFz42afqXuKQkTjqAThMMcWeDCy9F7EiwRaS7BMEsLeKy9Tn8tURg",
  "key23": "CMH1GgoLWLxzSQn8S36AdGJiN6NL5eCVegRN4cDCuu9Xrg9vogDpAzLuTK1MouRy2iWxNB8quGrzguzmpNiK6sH",
  "key24": "66kor3fKGE7Y9NvN2LAPnx7EbgoKiy59E6AYQe2JmCaJR5d1A4jf8LZk8jmvgsbMwgpNoSEGXQu989WXF5MWnLWg",
  "key25": "3ASXtJrVngDpwJuRrCEtka1SqEpY9xJiq6VGNJYwUDtS3jYZ6Hg7SGsrZPmnt2ARubqiDSQpSiugmqNecYvfBgBv",
  "key26": "54XoSxMPtes3TeJX836cCPv4ut7fThn9nV8prK7xokboXkVLYSiTqsPpuJRfJwooP8qj8daJUmrQfxaFazZnryia",
  "key27": "4DgN413GGwocZUNJhmMU1jnuTerJXKbhSmAacM22qYtnSGHQpmq6FWbp5oTBdpWD2cGqrNP1AXn74qLE3MDSEMF3",
  "key28": "22DKQ2LoMigGRK1rQxjBnZoRhmhsqWLrpPFchx4mK9yCo3vWbR3xamJPHB2spWrXfFm1UvvpkajurCLeYSPrkxiD",
  "key29": "4PynvmknGxeZzTji66TVnD77QKEMY7J1so6RYQYia2jDuvB79Kh8iKMTRV1nfXokUGqyHaoFeXy573KhJZZwUr8G",
  "key30": "5TibdhwkRL6w5eCoCqdpaVBoeiTWzbTcUNEMJ1Wg9G5HYdB2i13LoHCtZMLq3sn5U3sptjQ9sQj8JMBGUVpvcW4d",
  "key31": "2Fy7Hm29GP3HHjWcdgHcqZ73uHLmgAjAmjL5KBLXkv8E39PEBuWqdfmfyr2UwAPe15bSdQMH9v32kiKdYDrb2Kx9",
  "key32": "65jEYjD1rGNJqHTuGJt1beoP489Cg2PKRh8gLddtTyyPPENL21jduTaQFUQibgN6XZmDkq95sc48GEc62N8nATCq",
  "key33": "5BCMv5jXgQ7yrcBqpuMDMtwrvGy1cenmsFDVH2tr2sbk44pnaUieb5QveDaUNSCZFtZ6NNoQyu5EtiessKyJQ4ws",
  "key34": "2x3KnhwjMFmH2NQudK6ckpQH41Ms86yWbvLP11xm8meHVgiLk6HfZzogYx6jB3mFZ7aDbq3yb7n8ooXa3pnfwD2i",
  "key35": "5DEyj4SpBgrRmgT7zJGGKJSvbabanRGVaqK8258xaryQWi5pp7HDsvq7NRdv6xR6FLfx857TU4pjw7rsoeZUrKvw",
  "key36": "JMKJrGcSFm6SZB4nNVmW966LsMucLnkBALaR2verWGuDQS3P1zasLgcgWAMcyRPuspDjKnWHzQLXgq3kgWWv6oQ"
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
